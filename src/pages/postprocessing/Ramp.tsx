import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { EffectComposer, Bloom, ASCII } from "@react-three/postprocessing"
import { useControls } from "leva"
import { Uniform } from "three"
import { BlendFunction, Effect } from "postprocessing"
import { wrapEffect } from "@react-three/postprocessing"

export default function Example() {
  return (
    <div className="h-screen">
      <Canvas>
        <color attach="background" args={["black"]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <Box position={[-3.6, 0, 0]} />
        <Box position={[3.6, 0, 0]} />
        <Box position={[-1.2, 2.4, 0]} />
        <Box position={[1.2, 2.4, 0]} />
        <Box position={[-3.6, 2.4, 0]} />
        <Box position={[3.6, 2.4, 0]} />
        <Box position={[-1.2, -2.4, 0]} />
        <Box position={[1.2, -2.4, 0]} />
        <Box position={[-3.6, -2.4, 0]} />
        <Box position={[3.6, -2.4, 0]} />
        <OrbitControls />
        <Effects />
      </Canvas>
    </div>
  )
}

function Effects() {
  const leva = useControls({
    rampType: {
      value: 0,
      options: { Linear: 0, Radial: 1, "Linear (Mirrored)": 2 },
    },
    opacity: { value: 1, min: 0, max: 1, label: "Opacity" },
    rampMask: { value: true },
    rampStart: {
      value: {
        x: 0.45,
        y: 0.5,
      },
      step: 0.01,
      min: 0.0,
      max: 1.0,
      joystick: "invertY",
    },
    rampEnd: {
      value: {
        x: 0.55,
        y: 0.5,
      },
      step: 0.01,
      min: 0.0,
      max: 1.0,
      joystick: "invertY",
    },
    rampBias: {
      value: 0.5,
      max: 1,
      min: 0,
    },
    rampGain: {
      value: 0.5,
      max: 1,
      min: 0,
    },
    blendFunction: {
      value: BlendFunction.NORMAL,
      options: {
        Multiply: BlendFunction.MULTIPLY,
        Normal: BlendFunction.NORMAL,
        Overlay: BlendFunction.OVERLAY,
        Screen: BlendFunction.SCREEN,
      },
      label: "Blend",
    },
    effect: {
      value: "ascii",
      options: { ASCII: "ascii", Bloom: "bloom", None: "none" },
      label: "Effect",
    },
    Color1: { value: { r: 0, g: 0, b: 0 }, render: (get) => !get("rampMask") },
    Color2: { value: { r: 255, g: 255, b: 255 }, render: (get) => !get("rampMask") },
    rampInvert: { value: false },
  })

  return (
    <EffectComposer>
      {leva.effect == "ascii" && <ASCII />}
      {leva.effect == "bloom" && (
        <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.15} mipmapBlur />
      )}
      <Ramp
        {...leva}
        startColor={colorNormalize(leva.Color1)}
        endColor={colorNormalize(leva.Color2)}
      />
    </EffectComposer>
  )
}

function Box(position: { x: number; y: number; z: number }) {
  const ref = useRef(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  useFrame((_, delta) => (ref.current.rotation.x += delta))
  return (
    <mesh
      {...position}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  )
}

function colorNormalize(color: { r: number; g: number; b: number }) {
  return [color.r / 255, color.g / 255, color.b / 255].concat([1])
}

const RampShader = {
  fragmentShader: `

    uniform int rampType;

		uniform vec2 rampStart;
    uniform vec2 rampEnd;

    uniform vec4 startColor;
    uniform vec4 endColor;

    uniform float rampBias;
    uniform float rampGain;

    uniform bool rampMask;
    uniform bool rampInvert;

    float getBias(float time, float bias) {
      return (time / ((((1.0 / bias) - 2.0) * (1.0 - time)) + 1.0));
    }

    float getGain(float time, float gain) {
      if(time < 0.5)
        return getBias(time * 2.0, gain) / 2.0;
      else
        return getBias(time * 2.0 - 1.0, 1.0 - gain) / 2.0 + 0.5;
    }

		void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {

      vec2 startPixel = rampStart * resolution.xy;
      vec2 endPixel = rampEnd * resolution.xy;

      float rampAlpha, radius;

      if (rampType == 1) {
        vec2 fuv = uv * resolution.xy / resolution.y;
        vec2 suv = startPixel / resolution.y;
        vec2 euv = endPixel / resolution.y;

        radius = length(suv - euv);
        float falloff = length(fuv - suv);
        rampAlpha = smoothstep(0., radius, falloff);
      }

      else {
        radius = length(startPixel - endPixel);
        vec2 direction = normalize(vec2(endPixel.x - startPixel.x, -(startPixel.y - endPixel.y)));

        float fade = dot(uv * resolution - startPixel, direction);
        if (rampType == 2) { fade = abs(fade); }

        rampAlpha = smoothstep(0.0, 1.0, fade / radius);
      }

      rampAlpha = abs((rampInvert ? 1.0 : 0.0) - getBias(rampAlpha, rampBias) * getGain(rampAlpha, rampGain));

      if (!rampMask) {
        outputColor = mix(startColor, endColor, rampAlpha);
      }

      else {
        vec4 inputBuff = texture2D(inputBuffer, uv);
			  outputColor = mix(inputBuff, inputColor, rampAlpha);
      }
		}`,
}

class RampEffect extends Effect {
  constructor({
    blendFunction = BlendFunction.NORMAL, // Multiply default, but blend modes are great for ramp
    rampType = 0, // {0 : linear, 1 : radial, 2 : linear (mirrored)}
    rampStart = [0.5, 0.5], // [0, 1) as normalized x,y
    rampEnd = [1, 1], // [0, 1) as normalized x,y
    startColor = [0, 0, 0, 1], // black default
    endColor = [1, 1, 1, 1], // white default
    rampBias = 0.5, // [0, 1] - linear interpolation curve when both bias and gain are 0.5
    rampGain = 0.5, // [0, 1] - linear interpolation curve when both bias and gain are 0.5
    rampMask = false, // bool - uses ramp as effect mask, ignores colors when true
    rampInvert = false, // when false, rampStart is transparent and rampEnd is opaque
  } = {}) {
    super("RampEffect", RampShader.fragmentShader, {
      blendFunction,
      uniforms: new Map<string, Uniform<any>>([
        ["rampType", new Uniform(rampType)],
        ["rampStart", new Uniform(rampStart)],
        ["rampEnd", new Uniform(rampEnd)],
        ["startColor", new Uniform(startColor)],
        ["endColor", new Uniform(endColor)],
        ["rampBias", new Uniform(rampBias)],
        ["rampGain", new Uniform(rampGain)],
        ["rampMask", new Uniform(rampMask)],
        ["rampInvert", new Uniform(rampInvert)],
      ]),
    })
  }
}

const Ramp = wrapEffect(RampEffect)

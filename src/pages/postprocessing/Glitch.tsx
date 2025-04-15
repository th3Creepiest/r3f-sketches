import { Vector2 } from "three"
import { Canvas } from "@react-three/fiber"
import { BlendFunction } from "postprocessing"
import { EffectComposer, Glitch, ChromaticAberration } from "@react-three/postprocessing"
import { useControls } from "leva"

export default function Example() {
  const {
    active,
    delayMin,
    delayMax,
    durationMin,
    durationMax,
    strengthMin,
    strengthMax,
    aberrationOpacity,
    aberrationX,
    aberrationY,
    dtSize,
    columns,
    ratio,
    blendFunction,
  } = useControls({
    active: { value: true },
    delayMin: { min: 0, max: 10, value: 0 },
    delayMax: { min: 0, max: 10, value: 0 },
    durationMin: { min: 0, max: 10, value: 0 },
    durationMax: { min: 0, max: 10, value: 0 },
    strengthMin: { min: 0, max: 10, value: 0 },
    strengthMax: { min: 0, max: 10, value: 0 },
    aberrationOpacity: { min: 0, max: 1, value: 0 },
    aberrationX: { min: 0, max: 10, value: 0 },
    aberrationY: { min: 0, max: 10, value: 0 },
    dtSize: { min: 0, max: 100, value: 64 },
    columns: { min: 0, max: 1, value: 0.05 },
    ratio: { min: 0, max: 1, value: 0.85 },
    blendFunction: {
      options: {
        Add: BlendFunction.ADD,
        Alpha: BlendFunction.ALPHA,
        Average: BlendFunction.AVERAGE,
        Color: BlendFunction.COLOR,
        "Color Burn": BlendFunction.COLOR_BURN,
        "Color Dodge": BlendFunction.COLOR_DODGE,
        Darken: BlendFunction.DARKEN,
        Difference: BlendFunction.DIFFERENCE,
        Divide: BlendFunction.DIVIDE,
        Dst: BlendFunction.DST,
        Exclusion: BlendFunction.EXCLUSION,
        "Hard Light": BlendFunction.HARD_LIGHT,
        "Hard Mix": BlendFunction.HARD_MIX,
        Hue: BlendFunction.HUE,
        Invert: BlendFunction.INVERT,
        Lighten: BlendFunction.LIGHTEN,
        "Linear Burn": BlendFunction.LINEAR_BURN,
        "Linear Dodge": BlendFunction.LINEAR_DODGE,
        "Linear Light": BlendFunction.LINEAR_LIGHT,
        Luminosity: BlendFunction.LUMINOSITY,
        Multiply: BlendFunction.MULTIPLY,
        Negation: BlendFunction.NEGATION,
        Normal: BlendFunction.NORMAL,
        Overlay: BlendFunction.OVERLAY,
        "Pin Light": BlendFunction.PIN_LIGHT,
        Reflect: BlendFunction.REFLECT,
        Saturation: BlendFunction.SATURATION,
        Screen: BlendFunction.SCREEN,
        Set: BlendFunction.SET,
        Skip: BlendFunction.SKIP,
        "Soft Light": BlendFunction.SOFT_LIGHT,
        Src: BlendFunction.SRC,
        Subtract: BlendFunction.SUBTRACT,
        "Vivid Light": BlendFunction.VIVID_LIGHT,
      },
      value: BlendFunction.NORMAL,
    },
  })
  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight />
        <mesh position-x={-1}>
          <sphereGeometry args={[0.95, 32, 32]} />
          <meshStandardMaterial color="royalblue" />
        </mesh>
        <mesh position-x={1}>
          <sphereGeometry args={[0.95, 32, 32]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <EffectComposer>
          <Glitch
            active={active}
            blendFunction={blendFunction}
            delay={new Vector2(delayMin, delayMax)}
            chromaticAberrationOffset={new Vector2(aberrationX, aberrationY)}
            duration={new Vector2(durationMin, durationMax)}
            strength={new Vector2(strengthMin, strengthMax)}
            dtSize={dtSize}
            columns={columns}
            ratio={ratio}
          />
          <ChromaticAberration opacity={aberrationOpacity} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

import { Canvas } from "@react-three/fiber"
import { EffectComposer, Noise } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
import { useControls } from "leva"

export default function Example() {
  const { color, ...noiseControls } = useControls({
    color: { value: "#ff0044" },
    premultiply: { value: true },
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
        <mesh>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <EffectComposer>
          <Noise {...noiseControls} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

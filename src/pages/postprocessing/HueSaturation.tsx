import { BlendFunction } from "postprocessing"
import { Canvas } from "@react-three/fiber"
import { EffectComposer, HueSaturation } from "@react-three/postprocessing"
import { useControls } from "leva"

export default function Example() {
  const { color, ...controls } = useControls({
    color: { value: "orange" },
    hue: { min: -Math.PI, max: Math.PI, value: 0 },
    saturation: { min: -1, max: 1, value: 0 },
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
      <Canvas camera={{ fov: 50 }}>
        <mesh position-x={0}>
          <boxGeometry />
          <meshBasicMaterial color={color} />
        </mesh>
        <EffectComposer>
          <HueSaturation {...controls} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

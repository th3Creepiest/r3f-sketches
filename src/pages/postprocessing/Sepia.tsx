import { BlendFunction } from "postprocessing"
import { Canvas } from "@react-three/fiber"
import { EffectComposer, Sepia } from "@react-three/postprocessing"
import { useControls } from "leva"

export default function Example() {
  const { ...sepiaControls } = useControls({
    intensity: { min: 0, max: 1, value: 0.5 },
    opacity: { min: 0, max: 1, value: 0.5 },
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
        <ambientLight />
        <mesh position-x={0}>
          <boxGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>
        <mesh position-x={-2}>
          <sphereGeometry args={[0.9, 32, 32]} />
          <meshStandardMaterial color="royalblue" />
        </mesh>
        <mesh position-x={2}>
          <sphereGeometry args={[0.9, 32, 32]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <EffectComposer>
          <Sepia {...sepiaControls} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

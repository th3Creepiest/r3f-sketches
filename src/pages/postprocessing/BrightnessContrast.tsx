import { Canvas } from "@react-three/fiber"
import { EffectComposer, BrightnessContrast } from "@react-three/postprocessing"
import { useControls } from "leva"

export default function Example() {
  const { color, ...controls } = useControls({
    color: { value: "orange" },
    brightness: { min: -1, max: 1, value: 0 },
    contrast: { min: -1, max: 1, value: 0 },
  })
  return (
    <div className="h-screen">
      <Canvas camera={{ fov: 50 }}>
        <mesh position-x={0}>
          <boxGeometry />
          <meshBasicMaterial color={color} />
        </mesh>
        <EffectComposer>
          <BrightnessContrast {...controls} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

import { Canvas } from "@react-three/fiber"
import { EffectComposer, Pixelation } from "@react-three/postprocessing"
import { useControls } from "leva"

export default function Example() {
  const { color, granularity } = useControls({
    color: { value: "#ff0044" },
    granularity: { min: 0, max: 100, value: 30 },
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
          <Pixelation granularity={granularity} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

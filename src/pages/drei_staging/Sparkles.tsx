import { Canvas } from "@react-three/fiber"
import { Sparkles } from "@react-three/drei"
import { useControls } from "leva"

export default function Example() {
  const { ...sparkleControls } = useControls({
    count: { value: 100, min: 0, max: 1000, step: 1 },
    speed: { value: 1, min: 0, max: 100, step: 1 },
    opacity: { value: 1, min: 0, max: 1, step: 0.01 },
    color: { value: "#ffffff" },
    size: { value: 1, min: 0, max: 10 },
    scale: { value: 1, min: 0, max: 10 },
    noise: [1, 1, 1],
  })

  return (
    <div className="h-screen">
      <Canvas>
        <Sparkles {...sparkleControls} />
      </Canvas>
    </div>
  )
}

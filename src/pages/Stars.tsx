import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { useControls } from "leva"

export default function Example() {
  const { ...starControls } = useControls({
    radius: { value: 100, min: 0, max: 1000 },
    depth: { value: 50, min: 0, max: 1000 },
    count: { value: 5000, min: 0, max: 10000 },
    factor: { value: 4, min: 0, max: 10 },
    saturation: { value: 0, min: 0, max: 1 },
    speed: { value: 1, min: 0, max: 10 },
    fade: { value: true },
  })

  return (
    <div className="h-screen">
      <Canvas>
        <Stars {...starControls} />
      </Canvas>
    </div>
  )
}

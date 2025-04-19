import { Canvas } from "@react-three/fiber"
import { Box, Float, OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Example() {
  const { ...floatControls } = useControls({
    speed: { value: 1, min: 0, max: 10 },
    rotationIntensity: { value: 1, min: 0, max: 10 },
    floatingIntensity: { value: 1, min: 0, max: 10 },
  })

  return (
    <div className="h-screen">
      <Canvas>
        <Float {...floatControls}>
          <Box />
        </Float>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

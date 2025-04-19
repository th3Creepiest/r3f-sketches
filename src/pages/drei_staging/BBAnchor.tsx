import { Canvas } from "@react-three/fiber"
import { BBAnchor, Box, Html, OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Example() {
  const { anchorX, anchorY, anchorZ } = useControls({
    anchorX: { value: 0.5, min: 0, max: 1, step: 0.01 },
    anchorY: { value: 0.5, min: 0, max: 1, step: 0.01 },
    anchorZ: { value: 0.5, min: 0, max: 1, step: 0.01 },
  })
  return (
    <div className="h-screen">
      <Canvas>
        <Box>
          <BBAnchor anchor={[anchorX, anchorY, anchorZ]}>
            <Html center className="text-red-900">
              <span>Hello world!</span>
            </Html>
          </BBAnchor>
        </Box>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  )
}

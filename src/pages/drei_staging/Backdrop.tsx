import { Canvas } from "@react-three/fiber"
import { Backdrop, Box, OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Example() {
  const { ...backdropControls } = useControls({
    floor: { value: 0.25, min: 0, max: 1, step: 0.01 }, // Stretches the floor segment, 0.25 by default
    segments: { value: 20, min: 0, max: 100, step: 1 }, // Mesh-resolution, 20 by default
    receiveShadow: { value: true },
  })
  return (
    <div className="h-screen">
      <Canvas shadows camera={{ position: [0, 1, 2], zoom: 2 }}>
        <ambientLight intensity={0.25} />
        <directionalLight castShadow position={[0, 1, 0]} />
        <Backdrop {...backdropControls}>
          <mesh>
            <Box castShadow args={[0.1, 0.1, 0.1]} position={[-0.25, 0, 0.1]}>
              <meshStandardMaterial color="red" />
            </Box>
          </mesh>
        </Backdrop>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

import { Canvas } from "@react-three/fiber"
import { Box, Fisheye, OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Example() {
  const { ...fisheyeControls } = useControls({
    zoom: { min: 0, max: 1, value: 0 },
    segments: { min: 10, max: 100, value: 64 },
    resolution: { min: 0, max: 1000, value: 896 },
    renderPriority: { min: 0, max: 10, value: 1, step: 1 },
  })

  return (
    <div className="h-screen">
      <Canvas shadows camera={{ position: [0, 3, 5] }}>
        <Fisheye {...fisheyeControls}>
          <ambientLight intensity={1.5} />
          <directionalLight castShadow position={[0, 5, 5]} intensity={1} />
          <Box castShadow position={[0, 0.5, 0]}>
            <meshStandardMaterial color="#38bdf8" />
          </Box>
          <Box receiveShadow args={[8, 0.5, 8]} position-y={-0.25}>
            <meshStandardMaterial color="#222" />
          </Box>
        </Fisheye>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

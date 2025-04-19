import { Canvas } from "@react-three/fiber"
import { CameraShake, Box, OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Example() {
  const { autoRotate, ...cameraShakeControls } = useControls({
    autoRotate: { value: false },
    maxYaw: { value: 0.1, min: 0, max: 1 },
    maxPitch: { value: 0.1, min: 0, max: 1 },
    maxRoll: { value: 0.1, min: 0, max: 1 },
    yawFrequency: { value: 0.1, min: 0, max: 1 },
    pitchFrequency: { value: 0.1, min: 0, max: 1 },
    rollFrequency: { value: 0.1, min: 0, max: 1 },
    intensity: { value: 0.5, min: 0, max: 1 }, // Reduced intensity
    decayRate: { value: 0.8, min: 0, max: 1 }, // Increased decay rate
  })

  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.5} position={[0, 10, 10]} />
        <Box>
          <meshStandardMaterial color="red" />
        </Box>
        <CameraShake {...cameraShakeControls} />
        <OrbitControls makeDefault autoRotate={autoRotate} />
      </Canvas>
    </div>
  )
}

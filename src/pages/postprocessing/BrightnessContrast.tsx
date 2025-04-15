import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { BrightnessContrast, EffectComposer } from "@react-three/postprocessing"
import { useControls } from "leva"

export default function Example() {
  const { ...controls } = useControls({
    brightness: { min: -1, max: 1, value: 0 },
    contrast: { min: -1, max: 1, value: 0 },
  })
  return (
    <div className="h-screen">
      <Canvas camera={{ position: [2, 2.5, 3], fov: 50 }}>
        <mesh position={[-2, 0, -2]}>
          <boxGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh position={[-1, 0, -2]}>
          <boxGeometry />
          <meshStandardMaterial emissive="red" emissiveIntensity={2} toneMapped={false} />
        </mesh>
        <mesh position={[0, 0, -2]}>
          <boxGeometry />
          <meshBasicMaterial color="red" />
        </mesh>
        <mesh position={[1, 0, -2]}>
          <boxGeometry />
          <meshBasicMaterial color={[2, 0, 0]} />
        </mesh>
        <mesh position={[2, 0, -2]}>
          <boxGeometry />
          <meshBasicMaterial color={[2, 0, 0]} toneMapped={false} />
        </mesh>
        <EffectComposer>
          <BrightnessContrast {...controls} />
        </EffectComposer>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

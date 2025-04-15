import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { useControls } from "leva"

export default function Example() {
  const { bgColor, ...bloomControls } = useControls({
    bgColor: { value: "black" },
    intensity: { min: 0, max: 10, value: 1 },
    mipmapBlur: { value: false },
    luminanceThreshold: { min: 0, max: 1, value: 0.3 },
    luminanceSmoothing: { min: 0, max: 1, value: 0.03 },
    resolutionX: { min: 0, max: 1024, value: 512 },
    resolutionY: { min: 0, max: 1024, value: 512 },
  })
  return (
    <div className="h-screen">
      <Canvas camera={{ fov: 50 }}>
        <color attach="background" args={[bgColor]} />
        <ambientLight intensity={0.5} />
        <mesh position={[-2, 0, -2]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh position={[-1, 0, -2]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial emissive="red" emissiveIntensity={2} toneMapped={false} />
        </mesh>
        <mesh position={[0, 0, -2]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshBasicMaterial color="red" />
        </mesh>
        <mesh position={[1, 0, -2]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshBasicMaterial color={[2, 0, 0]} />
        </mesh>
        <mesh position={[2, 0, -2]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshBasicMaterial color={[2, 0, 0]} toneMapped={false} />
        </mesh>
        <EffectComposer>
          <Bloom {...bloomControls} />
        </EffectComposer>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

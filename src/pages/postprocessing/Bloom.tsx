import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { useControls } from "leva"

export default function Example() {
  const { color, bgColor, ...bloomControls } = useControls({
    color: { value: "orange" },
    bgColor: { value: "#17171b" },
    intensity: { min: 0, max: 10, value: 1 },
    mipmapBlur: { value: false },
    luminanceThreshold: { min: 0, max: 1, value: 0.9 },
    luminanceSmoothing: { min: 0, max: 1, value: 0.025 },
    resolutionX: { min: 0, max: 1024, value: 512 },
    resolutionY: { min: 0, max: 1024, value: 512 },
  })

  return (
    <div className="h-screen">
      <Canvas camera={{ position: [2, 2.5, 3], fov: 50 }}>
        <color attach="background" args={[bgColor]} />

        <mesh>
          <boxGeometry />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={8} />
        </mesh>
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
          <Bloom {...bloomControls} />
        </EffectComposer>

        <OrbitControls />
      </Canvas>
    </div>
  )
}

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { useControls } from "leva"

export default function Example() {
  const { color, bgColor, ...bloomControls } = useControls({
    color: { value: "orange" },
    bgColor: { value: "black" },
    intensity: { min: 0, max: 10, value: 1 },
    mipmapBlur: { value: false },
    resolutionX: { min: 0, max: 1024, value: 512 },
    resolutionY: { min: 0, max: 1024, value: 512 },
  })

  return (
    <div className="h-screen">
      <Canvas camera={{ fov: 50 }}>
        <color attach="background" args={[bgColor]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={8} />
        </mesh>
        <EffectComposer>
          <Bloom {...bloomControls} />
        </EffectComposer>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

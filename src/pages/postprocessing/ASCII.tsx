import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { EffectComposer, ASCII } from "@react-three/postprocessing"
import { useControls } from "leva"

export default function Example() {
  const { bgColor, ...asciiControls } = useControls({
    color: { value: "white" },
    bgColor: { value: "black" },
    font: { value: "monospace" },
    characters: { value: " !@#$%^&*()_+-=[]{};':,./<>?" },
    fontSize: { min: 0, max: 100, value: 60 },
    cellSize: { min: 0, max: 100, value: 16 },
    invert: { value: false },
  })
  return (
    <div className="h-screen">
      <Canvas camera={{ fov: 50 }}>
        <color attach="background" args={[bgColor]} />
        <mesh>
          <boxGeometry />
          <meshBasicMaterial />
        </mesh>
        <EffectComposer>
          <ASCII {...asciiControls} />
        </EffectComposer>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

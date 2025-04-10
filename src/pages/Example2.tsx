import { Canvas } from "@react-three/fiber"

function ThreeScene() {
  return (
    <Canvas>
      <ambientLight />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  )
}

export default function Example() {
  return (
    <div className="h-screen bg-white">
      <ThreeScene />
    </div>
  )
}

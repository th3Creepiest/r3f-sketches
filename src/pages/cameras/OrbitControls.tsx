import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function Example() {
  return (
    <div className="h-screen bg-white">
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  )
}

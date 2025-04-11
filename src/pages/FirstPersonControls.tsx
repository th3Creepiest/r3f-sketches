import { Canvas } from "@react-three/fiber"
import { FirstPersonControls } from "@react-three/drei"

export default function Example() {
  return (
    <div className="h-screen bg-white">
      <Canvas>
        <ambientLight />
        <FirstPersonControls movementSpeed={3} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  )
}

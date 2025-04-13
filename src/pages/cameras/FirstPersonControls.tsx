import { Canvas } from "@react-three/fiber"
import { FirstPersonControls } from "@react-three/drei"

export default function Example() {
  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight />
        <pointLight position={[0, 1, 1]} />
        <pointLight position={[0, 1, -1]} />
        <pointLight position={[0.5, 1, 0]} />
        <pointLight position={[-0.5, 1, 0]} />
        <FirstPersonControls movementSpeed={3} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  )
}

import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

export default function Exports() {
  return (
    <div className="h-screen bg-white">
      <Canvas shadows>
        <OrbitControls />
        <spotLight position={[0, 2, 0]} castShadow />
        <pointLight position={[0, 2, 0]} castShadow />
        <mesh castShadow position={[0, 0.5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </Canvas>
    </div>
  )
}

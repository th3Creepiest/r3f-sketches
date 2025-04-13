import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function Example() {
  return (
    <Canvas>
      <mesh>
        <ambientLight />
        <pointLight position={[5, 5, 5]} />
        <pointLight position={[-3, -3, 2]} />
        <sphereGeometry />
        <meshBasicMaterial color="hotpink" />
      </mesh>
      <OrbitControls />
    </Canvas>
  )
}

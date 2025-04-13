import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function Example() {
  return (
    <div className="h-screen">
      <Canvas>
        <mesh>
          <ambientLight />
          <pointLight position={[5, 5, 5]} />
          <pointLight position={[-3, -3, 2]} />
          <sphereGeometry />
          <meshPhongMaterial color="hotpink" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function Example() {
  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight />
        <mesh position={[-1, 0, 0]}>
          <sphereGeometry />
          <meshBasicMaterial color="hotpink" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry />
          <meshLambertMaterial color="hotpink" />
        </mesh>
        <mesh position={[1, 0, 0]}>
          <sphereGeometry />
          <meshPhongMaterial color="hotpink" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

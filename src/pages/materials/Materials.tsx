import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function Example() {
  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight />
        <pointLight position={[0, 3, 0]} intensity={10} />
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
        <mesh position={[2, 0, 0]}>
          <sphereGeometry />
          <meshToonMaterial color="hotpink" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

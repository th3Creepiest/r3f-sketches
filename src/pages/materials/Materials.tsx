import { Canvas } from "@react-three/fiber"

export default function Example() {
  return (
    <Canvas>
      <mesh>
        <sphereGeometry />
        <meshBasicMaterial color="hotpink" />
      </mesh>
    </Canvas>
  )
}

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"

function Box() {
  const boxRef = useRef<Mesh>(null!)
  useFrame(() => ((boxRef.current.rotation.x += 0.01), (boxRef.current.rotation.y += 0.01)))
  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

function ThreeScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[1, 1, 1]} />
      <Box />
    </Canvas>
  )
}

export default function Example() {
  return (
    <div className="h-screen bg-black">
      <ThreeScene />
    </div>
  )
}

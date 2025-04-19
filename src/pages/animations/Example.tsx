import { Mesh } from "three"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"

export default function Example() {
  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 10]} intensity={0.5} />
        <group position={[-3, 0, 0]}>
          <AnimatedBox1 />
          <AnimatedBox2 />
          <AnimatedBox3 />
          <AnimatedBox4 />
        </group>
      </Canvas>
    </div>
  )
}

function AnimatedBox1() {
  const boxRef = useRef<Mesh>(null!)

  useFrame(() => {
    boxRef.current.rotation.x += 0.01
    boxRef.current.rotation.y += 0.01
  })

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  )
}

function AnimatedBox2() {
  const boxRef = useRef<Mesh>(null!)

  useFrame(({ clock }) => {
    boxRef.current.rotation.x = clock.elapsedTime
    boxRef.current.rotation.y = clock.elapsedTime
  })

  return (
    <mesh ref={boxRef} position-x={2}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

function AnimatedBox3() {
  const boxRef = useRef<Mesh>(null!)

  useFrame(({ clock }) => {
    boxRef.current.rotation.x = Math.sin(clock.elapsedTime)
    boxRef.current.rotation.y = Math.sin(clock.elapsedTime)
  })

  return (
    <mesh ref={boxRef} position-x={4}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

function AnimatedBox4() {
  const boxRef = useRef<Mesh>(null!)

  useFrame(({ clock }) => {
    boxRef.current.rotation.x = Math.cos(clock.elapsedTime)
    boxRef.current.rotation.y = Math.cos(clock.elapsedTime)
  })

  return (
    <mesh ref={boxRef} position-x={6}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

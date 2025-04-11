import { useRef } from "react"
import { Mesh } from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, GizmoHelper, GizmoViewcube, GizmoViewport } from "@react-three/drei"

function RotatingCube() {
  const boxRef = useRef<Mesh>(null!)
  useFrame(() => ((boxRef.current.rotation.x += 0.01), (boxRef.current.rotation.y += 0.01)))
  return (
    <mesh ref={boxRef} position={[1, 1, 1]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="lime" />
      <axesHelper />
      <gridHelper args={[2, 8, "hotpink", "royalblue"]} />
    </mesh>
  )
}

export default function Example() {
  return (
    <div className="h-screen bg-gray-800">
      <Canvas>
        <mesh>
          <ambientLight intensity={0.5} />
          <pointLight position={[1.5, 1.5, 1]} />
          <axesHelper args={[4]} />
          <gridHelper args={[5, 5]} />
          <OrbitControls />
          <RotatingCube />
          <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
            <GizmoViewport />
            <GizmoViewcube />
          </GizmoHelper>
        </mesh>
      </Canvas>
    </div>
  )
}

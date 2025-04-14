import { PerspectiveCamera } from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function PerspectiveCameraHelper() {
  const fov = 60
  const camera = new PerspectiveCamera(fov, 1, 1, 3)
  return (
    <group position={[0, 0, 2]}>
      <cameraHelper args={[camera]} />
    </group>
  )
}

export default function Example() {
  return (
    <div className="h-screen">
      <Canvas camera={{ position: [2, 2, 2], fov: 60, near: 1, far: 4 }}>
        <directionalLight />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="blue" />
        </mesh>
        <PerspectiveCameraHelper />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

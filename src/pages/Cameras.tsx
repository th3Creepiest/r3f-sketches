import { OrthographicCamera, PerspectiveCamera } from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function PerspectiveCameraHelper() {
  const fov = 60
  const camera = new PerspectiveCamera(fov, 1, 1, 3)
  return (
    <group position={[0, 0, 2]}>
      <cameraHelper args={[camera]} />{" "}
    </group>
  )
}

function OrthographicCameraHelper() {
  const camera = new OrthographicCamera(-2, 2, 2, -2, 1, 4)
  return (
    <group position={[0, 0, 2]}>
      <cameraHelper args={[camera]} />
    </group>
  )
}

export default function Example() {
  return (
    <>
      <div className="bg-neutral-800 h-100">
        <Canvas camera={{ position: [2, 2, 2], fov: 60, near: 1, far: 4 }}>
          <directionalLight />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
          <PerspectiveCameraHelper />
          <OrbitControls />
        </Canvas>
      </div>
      <div className="bg-neutral-800 h-100">
        <Canvas orthographic camera={{ position: [2, 2, 2], left: -2, right: 2, top: 2, bottom: -2, zoom: 1 }}>
          <directionalLight />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
          <OrthographicCameraHelper />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  )
}

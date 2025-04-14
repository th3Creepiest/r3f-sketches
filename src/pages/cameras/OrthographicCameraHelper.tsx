import { OrthographicCamera } from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

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
    <div className="h-screen">
      <Canvas
        orthographic
        camera={{
          position: [2, 2, 2],
          left: -2,
          right: 2,
          top: 2,
          bottom: -2,
          zoom: 1,
        }}
      >
        <directionalLight />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="blue" />
        </mesh>
        <OrthographicCameraHelper />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

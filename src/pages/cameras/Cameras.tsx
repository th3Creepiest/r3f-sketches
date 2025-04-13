import { OrthographicCamera, PerspectiveCamera } from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Link } from "react-router"

interface CameraCardProps {
  title: string
  children: React.ReactNode
}

function CameraCard({ title, children }: CameraCardProps) {
  return (
    <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg border border-neutral-700 hover:border-blue-500 transition-all">
      <h2 className="text-xl font-semibold text-white p-3 bg-neutral-700">{title}</h2>
      <div className="h-48">{children}</div>
    </div>
  )
}

function PerspectiveCameraHelper() {
  const fov = 60
  const camera = new PerspectiveCamera(fov, 1, 1, 3)
  return (
    <group position={[0, 0, 2]}>
      <cameraHelper args={[camera]} />
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
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Three.js Cameras & Camera Controls
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <CameraCard title="Perspective Camera">
          <Canvas camera={{ position: [2, 2, 2], fov: 60, near: 1, far: 4 }}>
            <directionalLight />
            <mesh>
              <boxGeometry />
              <meshStandardMaterial color="blue" />
            </mesh>
            <PerspectiveCameraHelper />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </CameraCard>

        <CameraCard title="Orthographic Camera">
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
        </CameraCard>
      </div>

      <div className="text-center text-neutral-400 text-sm italic mb-8">
        <p>Interact with each camera view by dragging to rotate.</p>
      </div>

      <section className="flex flex-wrap justify-center gap-4 mt-8">
        <Link
          to="/orbit-controls"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Orbit Controls
        </Link>
        <Link
          to="/first-person-controls"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          First Person Controls
        </Link>
      </section>
    </div>
  )
}

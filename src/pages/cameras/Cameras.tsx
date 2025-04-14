import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Link } from "react-router"

export default function Example() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Three.js Cameras & Camera Controls
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg border border-neutral-700 hover:border-blue-500 transition-all">
          <h2 className="text-xl font-semibold text-white p-3 bg-neutral-700">
            Perspective Camera
          </h2>
          <div className="h-48">
            <Canvas camera={{ position: [2, 1.5, 2], fov: 50, zoom: 1, near: 1, far: 6 }}>
              <ambientLight intensity={0.5} />
              <directionalLight />
              <pointLight position={[1, 1, -1]} intensity={1} />
              <mesh position={[0, 0.5, 0]}>
                <boxGeometry />
                <meshStandardMaterial color="royalblue" />
              </mesh>
              <OrbitControls />
              <gridHelper args={[2, 8, "hotpink", "royalblue"]} />
            </Canvas>
          </div>
        </div>
        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg border border-neutral-700 hover:border-blue-500 transition-all">
          <h2 className="text-xl font-semibold text-white p-3 bg-neutral-700">
            Orthographic Camera
          </h2>
          <div className="h-48">
            <Canvas
              orthographic
              camera={{
                position: [2, 1, 2],
                left: -3,
                right: 3,
                top: 2,
                bottom: -1,
                zoom: 1.2,
              }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight />
              <pointLight position={[1, 1, -1]} intensity={1} />
              <mesh position={[0, 0.5, 0]}>
                <boxGeometry />
                <meshStandardMaterial color="royalblue" />
              </mesh>
              <OrbitControls />
              <gridHelper args={[2, 8, "hotpink", "royalblue"]} />
            </Canvas>
          </div>
        </div>
      </div>

      <div className="text-center text-neutral-400 text-sm italic mb-8">
        <p>Interact with each camera view by dragging to rotate.</p>
      </div>

      <section className="flex flex-wrap justify-center gap-4 mt-8">
        <Link
          to="/perspective-camera"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Perspective Camera
        </Link>
        <Link
          to="/perspective-camera-helper"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Perspective Camera Helper
        </Link>
        <Link
          to="/orthographic-camera"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Orthographic Camera
        </Link>
        <Link
          to="/orthographic-camera-helper"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Orthographic Camera Helper
        </Link>
        <Link
          to="/first-person-controls"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          First Person Controls
        </Link>
        <Link
          to="/orbit-controls"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Orbit Controls
        </Link>
      </section>
    </div>
  )
}

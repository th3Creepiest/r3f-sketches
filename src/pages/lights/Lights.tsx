import { Link } from "react-router"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

interface CameraProps {
  position: [number, number, number]
  fov: number
  zoom: number
  near: number
  far: number
}

const defaultCameraProps: CameraProps = {
  position: [2, 2, 3],
  fov: 80,
  zoom: 1.5,
  near: 1,
  far: 5,
}

export default function Example() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Three.js Light Types
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg border border-neutral-700 hover:border-lime-500 transition-all">
          <h2 className="text-xl font-semibold text-white p-3 bg-neutral-700">
            Ambient Light
          </h2>
          <div className="h-48">
            <Canvas camera={defaultCameraProps}>
              <ambientLight intensity={0.5} />
              <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="lime" />
              </mesh>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>

        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg border border-neutral-700 hover:border-lime-500 transition-all">
          <h2 className="text-xl font-semibold text-white p-3 bg-neutral-700">
            Directional Light
          </h2>
          <div className="h-48">
            <Canvas camera={defaultCameraProps}>
              <directionalLight position={[2, 3, 1]} />
              <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="lime" />
              </mesh>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>

        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg border border-neutral-700 hover:border-lime-500 transition-all">
          <h2 className="text-xl font-semibold text-white p-3 bg-neutral-700">
            Hemisphere Light
          </h2>
          <div className="h-48">
            <Canvas camera={defaultCameraProps}>
              <hemisphereLight groundColor={"royalblue"} color={"red"} intensity={5} />
              <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="white" />
              </mesh>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>

        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg border border-neutral-700 hover:border-lime-500 transition-all">
          <h2 className="text-xl font-semibold text-white p-3 bg-neutral-700">
            Point Light
          </h2>
          <div className="h-48">
            <Canvas camera={defaultCameraProps}>
              <pointLight position={[2, 2, 2]} intensity={10} />
              <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="lime" />
              </mesh>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>

        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg border border-neutral-700 hover:border-lime-500 transition-all">
          <h2 className="text-xl font-semibold text-white p-3 bg-neutral-700">
            Rect Area Light
          </h2>
          <div className="h-48">
            <Canvas camera={defaultCameraProps}>
              <rectAreaLight
                position={[-2, 0, 0]}
                rotation={[0, -Math.PI / 2, 0]}
                intensity={8}
              />
              <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="lime" />
              </mesh>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>

        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg border border-neutral-700 hover:border-lime-500 transition-all">
          <h2 className="text-xl font-semibold text-white p-3 bg-neutral-700">
            Spot Light
          </h2>
          <div className="h-48">
            <Canvas camera={defaultCameraProps}>
              <spotLight position={[0, 2, 0]} intensity={10} angle={2} />
              <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="lime" />
              </mesh>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </div>

      <section className="flex flex-wrap justify-center gap-4 mt-8">
        <Link
          to="/ambient-light"
          className="px-4 py-2 bg-lime-600 hover:bg-lime-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Ambient Light
        </Link>
        <Link
          to="/directional-light"
          className="px-4 py-2 bg-lime-600 hover:bg-lime-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Directional Light
        </Link>
        <Link
          to="/hemisphere-light"
          className="px-4 py-2 bg-lime-600 hover:bg-lime-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Hemisphere Light
        </Link>
        <Link
          to="/point-light"
          className="px-4 py-2 bg-lime-600 hover:bg-lime-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Point Light
        </Link>
        <Link
          to="/rect-area-light"
          className="px-4 py-2 bg-lime-600 hover:bg-lime-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Rect Area Light
        </Link>
        <Link
          to="/spot-light"
          className="px-4 py-2 bg-lime-600 hover:bg-lime-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Spot Light
        </Link>
      </section>
    </div>
  )
}

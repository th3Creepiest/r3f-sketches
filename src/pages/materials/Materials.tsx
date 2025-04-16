import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Link } from "react-router"

interface MaterialCardProps {
  title: string
  children: React.ReactNode
}

function MaterialCard({ title, children }: MaterialCardProps) {
  return (
    <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg border border-neutral-700 hover:border-pink-500 transition-all">
      <h2 className="text-xl font-semibold text-white p-3 bg-neutral-700">{title}</h2>
      <div className="h-48">{children}</div>
    </div>
  )
}

export default function Example() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Three.js Materials Showcase
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <MaterialCard title="Basic Material">
          <Canvas camera={{ position: [0, 0, 2.5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[2, 3, 4]} intensity={5} />
            <mesh>
              <sphereGeometry />
              <meshBasicMaterial color="hotpink" />
            </mesh>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </MaterialCard>

        <MaterialCard title="Lambert Material">
          <Canvas camera={{ position: [0, 0, 2.5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[2, 3, 4]} intensity={5} />
            <mesh>
              <sphereGeometry />
              <meshLambertMaterial color="hotpink" />
            </mesh>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </MaterialCard>

        <MaterialCard title="Phong Material">
          <Canvas camera={{ position: [0, 0, 2.5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[2, 3, 4]} intensity={5} />
            <mesh>
              <sphereGeometry />
              <meshPhongMaterial color="hotpink" shininess={100} />
            </mesh>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </MaterialCard>

        <MaterialCard title="Toon Material">
          <Canvas camera={{ position: [0, 0, 2.5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[2, 3, 4]} intensity={5} />
            <mesh>
              <sphereGeometry />
              <meshToonMaterial color="hotpink" />
            </mesh>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </MaterialCard>

        <MaterialCard title="Standard Material">
          <Canvas camera={{ position: [0, 0, 2.5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[2, 3, 4]} intensity={5} />
            <mesh>
              <sphereGeometry />
              <meshStandardMaterial color="hotpink" roughness={0.5} metalness={0.5} />
            </mesh>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </MaterialCard>

        <MaterialCard title="Physical Material">
          <Canvas camera={{ position: [0, 0, 2.5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[2, 3, 4]} intensity={5} />
            <mesh>
              <sphereGeometry />
              <meshPhysicalMaterial
                color="hotpink"
                roughness={0.5}
                metalness={0.5}
                clearcoat={1}
                clearcoatRoughness={0.1}
              />
            </mesh>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </MaterialCard>

        <MaterialCard title="Depth Material">
          <Canvas camera={{ position: [0, 0, 2.5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[2, 3, 4]} intensity={5} />
            <mesh>
              <torusKnotGeometry args={[0.7, 0.2, 64, 100]} />
              <meshDepthMaterial />
            </mesh>
            <OrbitControls autoRotate enableZoom={false} />
          </Canvas>
        </MaterialCard>

        <MaterialCard title="Normal Material">
          <Canvas camera={{ position: [0, 0, 2.5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[2, 3, 4]} intensity={5} />
            <mesh>
              <torusKnotGeometry args={[0.7, 0.2, 64, 100]} />
              <meshNormalMaterial />
            </mesh>
            <OrbitControls autoRotate enableZoom={false} />
          </Canvas>
        </MaterialCard>
      </div>

      <div className="text-center text-neutral-400 text-sm italic mb-8">
        <p>Interact with each material by dragging to rotate the view.</p>
      </div>

      <section className="flex flex-wrap justify-center gap-4 mt-8">
        <Link
          to="/mesh-basic-material"
          className="px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Basic Material
        </Link>
        <Link
          to="/mesh-lambert-material"
          className="px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Lambert Material
        </Link>
        <Link
          to="/mesh-phong-material"
          className="px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Phong Material
        </Link>
        <Link
          to="/mesh-toon-material"
          className="px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Toon Material
        </Link>
        <Link
          to="/mesh-standard-material"
          className="px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Standard Material
        </Link>
        <Link
          to="/mesh-physical-material"
          className="px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Physical Material
        </Link>
        <Link
          to="/mesh-depth-material"
          className="px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Depth Material
        </Link>
        <Link
          to="/mesh-normal-material"
          className="px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Normal Material
        </Link>
      </section>
    </div>
  )
}

import { Mesh } from "three"
import { useRef, useState } from "react"
import { Link } from "react-router"
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber"

export default function InteractionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Interactions</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg border border-neutral-700 hover:border-orange-500 transition-all">
          <h2 className="text-xl font-semibold text-white p-3 bg-neutral-700">
            Mouse Events
          </h2>
          <div className="h-48">
            <Canvas>
              <ambientLight intensity={Math.PI / 2} />
              <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                decay={0}
                intensity={Math.PI}
              />
              <Box />
            </Canvas>
          </div>
        </div>
      </div>

      <div className="text-center text-neutral-400 text-sm italic mb-8">
        <p>Interact with each camera view.</p>
      </div>

      <section className="flex flex-wrap justify-center gap-4 mt-8">
        <Link
          to="/mouse-events"
          className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Mouse Events
        </Link>
      </section>
    </div>
  )
}

function Box(props: ThreeElements["mesh"]) {
  const meshRef = useRef<Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((_, i) => (meshRef.current.rotation.x += i))
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  )
}

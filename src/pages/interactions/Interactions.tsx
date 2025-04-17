import { useRef, useState, useEffect } from "react"
import { Link } from "react-router"
import { Mesh } from "three"
import { Canvas, useFrame } from "@react-three/fiber"

export default function InteractionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Interactions</h1>

      <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg border border-neutral-700 hover:border-orange-500 transition-all mb-8">
        <div className="h-96">
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
            <Cube />
          </Canvas>
        </div>
      </div>

      <div className="text-center text-neutral-400 text-sm italic mb-8">
        <p>Press the space bar to change the cube color.</p>
      </div>
      <section className="flex flex-wrap justify-center gap-4 mt-8">
        <Link
          to="/key-events"
          className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white font-medium rounded-md shadow-md transition-colors duration-300"
        >
          Key Events
        </Link>
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

function Cube() {
  const meshRef = useRef<Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const [color, setColor] = useState("orange")

  // Listen for space bar keydown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        setColor((prev) => (prev === "orange" ? "hotpink" : "orange"))
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Rotate the cube
  useFrame((_, i) => (meshRef.current.rotation.x += i))

  return (
    <mesh
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? "hotpink" : color} />
    </mesh>
  )
}

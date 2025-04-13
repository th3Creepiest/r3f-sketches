import { Link } from "react-router"

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <nav className="max-w-2xl mx-auto space-y-6">
        <Lights />
        <Materials />
        <Other />
      </nav>
    </div>
  )
}

function Lights() {
  const links = [
    { to: "lights", text: "Lights" },
    { to: "ambient-light", text: "Ambient Light" },
    { to: "directional-light", text: "Directional Light" },
    { to: "hemisphere-light", text: "Hemisphere Light" },
    { to: "point-light", text: "Point Light" },
    { to: "rect-area-light", text: "Rect Area Light" },
    { to: "spot-light", text: "Spot Light" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <h2 className="text-xl font-semibold mb-4">Lights</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {links.map(({ to, text }) => (
          <Link key={to} to={to} className="hover:text-blue-400 transition-colors">
            {text}
          </Link>
        ))}
      </div>
    </section>
  )
}

function Materials() {
  const links = [
    { to: "materials", text: "Materials" },
    { to: "mesh-basic-material", text: "Mesh Basic Material" },
    { to: "mesh-phong-material", text: "Mesh Phong Material" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <h2 className="text-xl font-semibold mb-4">Materials</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {links.map(({ to, text }) => (
          <Link key={to} to={to} className="hover:text-blue-400 transition-colors">
            {text}
          </Link>
        ))}
      </div>
    </section>
  )
}

function Other() {
  const links = [
    { to: "example-1", text: "Example 1" },
    { to: "example-2", text: "Example 2" },
    { to: "example-3", text: "Example 3" },
    { to: "primitives", text: "Primitives" },
    { to: "transforms", text: "Transforms" },
    { to: "first-person-controls", text: "First Person Controls" },
    { to: "orbit-controls", text: "Orbit Controls" },
    { to: "helper-gizmos", text: "Helper Gizmos" },
    { to: "leva-gui", text: "Leva GUI" },
    { to: "cameras", text: "Cameras" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <h2 className="text-xl font-semibold mb-4">Other</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {links.map(({ to, text }) => (
          <Link key={to} to={to} className="hover:text-blue-400 transition-colors">
            {text}
          </Link>
        ))}
      </div>
    </section>
  )
}

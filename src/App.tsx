import { Link } from "react-router"

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold text-center text-white mb-4">Three.js</h1>
      <nav className="max-w-2xl mx-auto space-y-6">
        <Cameras />
        <Lights />
        <Materials />
        <Physics />
        <Textures />
        <Other />
      </nav>
    </div>
  )
}

function Cameras() {
  const links = [
    { to: "perspective-camera", text: "Perspective Camera" },
    { to: "perspective-camera-helper", text: "Perspective Camera Helper" },
    { to: "orthographic-camera", text: "Orthographic Camera" },
    { to: "orthographic-camera-helper", text: "Orthographic Camera Helper" },
    { to: "orbit-controls", text: "Orbit Controls" },
    { to: "first-person-controls", text: "First Person Controls" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <Link
        key={"cameras"}
        to={"cameras"}
        className="hover:text-red-400 transition-colors"
      >
        <h2 className="text-xl font-semibold mb-4">Cameras</h2>
      </Link>
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

function Lights() {
  const links = [
    { to: "ambient-light", text: "Ambient Light" },
    { to: "directional-light", text: "Directional Light" },
    { to: "hemisphere-light", text: "Hemisphere Light" },
    { to: "point-light", text: "Point Light" },
    { to: "rect-area-light", text: "Rect Area Light" },
    { to: "spot-light", text: "Spot Light" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <Link key={"lights"} to={"lights"} className="hover:text-red-400 transition-colors">
        <h2 className="text-xl font-semibold mb-4">Lights</h2>
      </Link>
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
    { to: "mesh-basic-material", text: "Mesh Basic Material" },
    { to: "mesh-depth-material", text: "Mesh Depth Material" },
    { to: "mesh-lambert-material", text: "Mesh Lambert Material" },
    { to: "mesh-normal-material", text: "Mesh Normal Material" },
    { to: "mesh-phong-material", text: "Mesh Phong Material" },
    { to: "mesh-physical-material", text: "Mesh Physical Material" },
    { to: "mesh-standard-material", text: "Mesh Standard Material" },
    { to: "mesh-toon-material", text: "Mesh Toon Material" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <Link
        key={"materials"}
        to={"materials"}
        className="hover:text-red-400 transition-colors"
      >
        <h2 className="text-xl font-semibold mb-4">Materials</h2>
      </Link>
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

function Physics() {
  const links = [
    { to: "physics-example-1", text: "Example 1" },
    { to: "physics-example-2", text: "Example 2" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <h2 className="text-xl font-semibold mb-4">Physics</h2>
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

function Textures() {
  const links = [
    { to: "textures-1", text: "Textures 1" },
    { to: "textures-2", text: "Textures 2" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <h2 className="text-xl font-semibold mb-4">Textures</h2>
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
    { to: "helper-gizmos", text: "Helper Gizmos" },
    { to: "leva-gui", text: "Leva GUI" },
    { to: "fog", text: "Fog" },
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

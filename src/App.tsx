import { Link } from "react-router"

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <nav className="max-w-2xl mx-auto space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link to="example-1" className="hover:text-blue-400 transition-colors">
            Example 1
          </Link>
          <Link to="example-2" className="hover:text-blue-400 transition-colors">
            Example 2
          </Link>
          <Link to="example-3" className="hover:text-blue-400 transition-colors">
            Example 3
          </Link>
          <Link to="primitives" className="hover:text-blue-400 transition-colors">
            Primitives
          </Link>
          <Link to="transforms" className="hover:text-blue-400 transition-colors">
            Transforms
          </Link>
          <Link
            to="first-person-controls"
            className="hover:text-blue-400 transition-colors"
          >
            First Person Controls
          </Link>
          <Link to="orbit-controls" className="hover:text-blue-400 transition-colors">
            Orbit Controls
          </Link>
          <Link to="helper-gizmos" className="hover:text-blue-400 transition-colors">
            Helper Gizmos
          </Link>
          <Link to="leva-gui" className="hover:text-blue-400 transition-colors">
            Leva GUI
          </Link>
          <Link to="cameras" className="hover:text-blue-400 transition-colors">
            Cameras
          </Link>
        </div>
        <section className="border-t border-gray-800 pt-6">
          <h2 className="text-xl font-semibold mb-4">Lighting</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="lights" className="hover:text-blue-400 transition-colors">
              Lights
            </Link>
            <Link to="ambient-light" className="hover:text-blue-400 transition-colors">
              Ambient Light
            </Link>
            <Link
              to="directional-light"
              className="hover:text-blue-400 transition-colors"
            >
              Directional Light
            </Link>
            <Link to="hemisphere-light" className="hover:text-blue-400 transition-colors">
              Hemisphere Light
            </Link>
            <Link to="point-light" className="hover:text-blue-400 transition-colors">
              Point Light
            </Link>
            <Link to="rect-area-light" className="hover:text-blue-400 transition-colors">
              Rect Area Light
            </Link>
            <Link to="spot-light" className="hover:text-blue-400 transition-colors">
              Spot Light
            </Link>
          </div>
        </section>
      </nav>
    </div>
  )
}

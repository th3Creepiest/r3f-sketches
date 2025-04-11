import { Link } from "react-router"

export default function App() {
  return (
    <div>
      <Link to="example-1">Example 1</Link>
      <Link to="example-2">Example 2</Link>
      <Link to="example-3">Example 3</Link>
      <Link to="primitives">Primitives</Link>
      <Link to="transforms">Transforms</Link>
      <Link to="first-person-controls">First Person Controls</Link>
      <Link to="orbit-controls">Orbit Controls</Link>
      <Link to="helper-gizmos">Helper Gizmos</Link>
      <Link to="leva-gui">Leva GUI</Link>
      <Link to="lights">Lights</Link>
      <Link to="shadows">Shadows</Link>
      <Link to="cameras">Cameras</Link>
      <Link to="ambient-light">Ambient Light</Link>
      <Link to="hemisphere-light">Hemisphere Light</Link>
      <Link to="spot-light">Spot Light</Link>
    </div>
  )
}

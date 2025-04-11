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
    </div>
  )
}

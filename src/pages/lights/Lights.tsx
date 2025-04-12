import { Link } from "react-router"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function Example() {
  return (
    <div className="bg-neutral-900">
      <div>
        Ambient Light
        <Canvas>
          <ambientLight intensity={0.5} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="lime" />
          </mesh>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <div>
        Directional Light
        <Canvas>
          <directionalLight position={[2, 5, 1]} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="lime" />
          </mesh>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <div>
        Hemisphere Light
        <Canvas>
          <hemisphereLight position={[0, 0, 0]} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="lime" />
          </mesh>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <div>
        Point Light
        <Canvas>
          <pointLight position={[0, 2, 0]} intensity={10} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="lime" />
          </mesh>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <div>
        Rect Area Light
        <Canvas>
          <rectAreaLight position={[0, 2, 0]} intensity={10} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="lime" />
          </mesh>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <div>
        Spot Light
        <Canvas>
          <spotLight position={[0, 2, 0]} intensity={10} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="lime" />
          </mesh>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <div>
        <Link to="/ambient-light">Ambient Light</Link>
        <Link to="/directional-light">Directional Light</Link>
        <Link to="/hemisphere-light">Hemisphere Light</Link>
        <Link to="/point-light">Point Light</Link>
        <Link to="/rect-area-light">Rect Area Light</Link>
        <Link to="/spot-light">Spot Light</Link>
      </div>
    </div>
  )
}

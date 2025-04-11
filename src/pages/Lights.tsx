import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

export default function Example() {
  return (
    <>
      <section className="bg-neutral-900">
        <div>
          Ambient Light
          <Canvas>
            <ambientLight intensity={0.5} />
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color="lime" />
              <OrbitControls enableZoom={false} />
            </mesh>
          </Canvas>
        </div>
        <div>
          Directional Light
          <Canvas>
            <directionalLight position={[2, 5, 1]} />
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color="lime" />
              <OrbitControls enableZoom={false} />
            </mesh>
          </Canvas>
        </div>
        <div>
          Spot Light
          <Canvas>
            <spotLight position={[0, 2, 0]} intensity={10} />
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color="lime" />
              <OrbitControls enableZoom={false} />
            </mesh>
          </Canvas>
        </div>
        <div>
          Point Light
          <Canvas>
            <pointLight position={[0, 2, 0]} intensity={10} />
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color="lime" />
              <OrbitControls enableZoom={false} />
            </mesh>
          </Canvas>
        </div>
      </section>
    </>
  )
}

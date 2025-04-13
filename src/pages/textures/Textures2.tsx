import { TextureLoader, MeshBasicMaterial } from "three"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function Example() {
  const textures = [
    useLoader(TextureLoader, "/1.png"), // right
    useLoader(TextureLoader, "/2.png"), // left
    useLoader(TextureLoader, "/3.png"), // top
    useLoader(TextureLoader, "/4.png"), // bottom
    useLoader(TextureLoader, "/5.png"), // front
    useLoader(TextureLoader, "/6.png"), // back
  ]
  return (
    <div className="h-screen bg-black">
      <Canvas>
        <mesh
          material={textures.map((texture) => new MeshBasicMaterial({ map: texture }))}
        >
          <boxGeometry args={[2, 2, 2]} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

import { TextureLoader } from "three"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function Example() {
  const texture = useLoader(TextureLoader, "/skull.png")

  return (
    <div className="h-screen bg-black">
      <Canvas>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshBasicMaterial map={texture} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

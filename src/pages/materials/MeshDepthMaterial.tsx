import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useControls, folder } from "leva"

export default function Example() {
  const { wireframe } = useControls({
    Depth_Material_Settings: folder({
      wireframe: { value: false },
    }),
  })
  return (
    <div className="h-screen">
      <Canvas camera={{ zoom: 0.5 }}>
        <mesh>
          <torusKnotGeometry args={[2]} />
          <meshDepthMaterial wireframe={wireframe} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

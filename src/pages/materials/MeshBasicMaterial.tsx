import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useControls, folder } from "leva"

export default function Example() {
  const { color, wireframe } = useControls({
    Basic_Material_Settings: folder({
      color: { value: "royalblue" },
      wireframe: { value: false },
    }),
  })

  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight />
        <pointLight position={[3, 3, 3]} intensity={100} />
        <mesh>
          <sphereGeometry />
          <meshBasicMaterial color={color} wireframe={wireframe} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useControls, folder } from "leva"

export default function Example() {
  const { bgColor, fogColor, near, far } = useControls({
    Fog_Settings: folder({
      fogColor: { value: "grey" },
      near: { value: 1, min: 0, max: 10 },
      far: { value: 10, min: 5, max: 20 },
    }),
    bgColor: { value: "grey" },
  })

  return (
    <div className="h-screen">
      <Canvas>
        <color attach="background" args={[bgColor]} />
        <fog attach="fog" args={[fogColor, near, far]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[0, 0, -5]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[0, 0, 5]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <gridHelper args={[10, 10]} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

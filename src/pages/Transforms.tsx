import { Canvas } from "@react-three/fiber"

export default function Transforms() {
  return (
    <div className="h-screen bg-black">
      <Canvas>
        <directionalLight position={[2, 5, 1]} />
        <mesh position={[-1.75, 0, 0]} rotation={[45, 0, 0]} scale={[0.4, 0.4, 0.4]}>
          <torusKnotGeometry args={[1.7, 0.3, 256, 256]} />
          <meshToonMaterial color="red" />
        </mesh>
        <mesh position={[0.25, 0, 0]} rotation={[0, 0, 90]} scale={[0.3, 0.3, 0.3]}>
          <torusKnotGeometry args={[1.7, 0.3, 256, 256]} />
          <meshToonMaterial color="lime" />
        </mesh>
        <mesh position={[2, 0, 0]} rotation={[0, 0, Math.PI]} scale={[0.25, 0.25, 0.25]}>
          <torusKnotGeometry args={[1.7, 0.3, 256, 256]} />
          <meshToonMaterial color="royalblue" />
        </mesh>
      </Canvas>
    </div>
  )
}

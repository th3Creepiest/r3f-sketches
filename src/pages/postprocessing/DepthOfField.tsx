import { Canvas } from "@react-three/fiber"
import { EffectComposer, DepthOfField } from "@react-three/postprocessing"
import { useControls } from "leva"

export default function Example() {
  const { color, ...controls } = useControls({
    color: { value: "orange" },
    focusDistance: { min: 0, max: 10, value: 0 },
    focalLength: { min: 0, max: 10, value: 0.02 },
    bokehScale: { min: 0, max: 10, value: 2 },
  })
  return (
    <div className="h-screen">
      <Canvas camera={{ fov: 50 }}>
        <mesh position={[2, 0, -2]}>
          <boxGeometry />
          <meshBasicMaterial color="royalblue" />
        </mesh>
        <mesh>
          <boxGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>
        <mesh position={[-3, 0, -4]}>
          <boxGeometry />
          <meshBasicMaterial color="hotpink" />
        </mesh>
        <EffectComposer>
          <DepthOfField {...controls} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

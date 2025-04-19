import { Canvas } from "@react-three/fiber"
import { Cloud, OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Example() {
  const { seed, segments, bounds, scale, color } = useControls({
    seed: 0,
    segments: { value: 40, min: 0, max: 100, step: 1 },
    bounds: [5, 1, 1],
    scale: { value: 1, min: 0, max: 10, step: 0.1 },
    color: "white",
  })

  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight intensity={0.5} /> <directionalLight intensity={0.5} position={[0, 10, 10]} />
        <Cloud
          seed={seed}
          segments={segments}
          bounds={bounds}
          concentrate="random" // "random" | "inside" | "outside"
          scale={scale}
          color={color}
        />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

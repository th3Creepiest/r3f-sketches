import { useRef } from "react"
import { HemisphereLight, HemisphereLightHelper } from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useHelper } from "@react-three/drei"
import { useControls } from "leva"

function HemisphereLightWithHelper({ helper_size, helper_color }: { helper_size?: number; helper_color?: string }) {
  const light = useRef<HemisphereLight>(null!)
  const { intensity, skyColor, groundColor } = useControls({
    intensity: { value: 5, min: 0, max: 100, step: 0.1 },
    skyColor: { value: "royalblue" },
    groundColor: { value: "orange" },
  })
  useHelper(light, HemisphereLightHelper, helper_size || 10, helper_color || "orange")
  return <hemisphereLight ref={light} intensity={intensity} color={skyColor} groundColor={groundColor} />
}

export default function Example() {
  return (
    <div className="h-screen">
      <Canvas shadows camera={{ position: [2.2, 4, 4], fov: 85, zoom: 0.6 }}>
        <HemisphereLightWithHelper />
        <mesh castShadow position={[0, 1, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

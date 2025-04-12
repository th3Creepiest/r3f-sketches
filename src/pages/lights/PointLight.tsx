import { useRef } from "react"
import { PointLight, PointLightHelper } from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useHelper } from "@react-three/drei"
import { useControls, folder } from "leva"

function PointLightWithHelper() {
  const light = useRef<PointLight>(null!)

  const {
    positionX,
    positionY,
    positionZ,
    intensity,
    distance,
    color,
    castShadow,
    helperSize,
    helperColor,
  } = useControls({
    lightPosition: folder({
      positionX: { value: 0, min: -10, max: 10, step: 0.1 },
      positionY: { value: 5, min: -10, max: 10, step: 0.1 },
      positionZ: { value: 0, min: -10, max: 10, step: 0.1 },
    }),
    lightControls: folder({
      intensity: { value: 10, min: 0, max: 100, step: 0.1 },
      distance: { value: 10, min: 0, max: 50, step: 0.1 },
      color: { value: "white" },
      castShadow: { value: true },
    }),
    helperControls: folder({
      helperSize: { value: 1, min: 0, max: 10, step: 0.1 },
      helperColor: { value: "orange" },
    }),
  })

  useHelper(light, PointLightHelper, helperSize, helperColor)

  return (
    <pointLight
      ref={light}
      position={[positionX, positionY, positionZ]}
      intensity={intensity}
      distance={distance}
      color={color}
      castShadow={castShadow}
    />
  )
}

export default function Example() {
  return (
    <div className="h-screen">
      <Canvas shadows camera={{ position: [2.2, 4, 4], fov: 85, zoom: 0.6 }}>
        <PointLightWithHelper />
        <mesh castShadow position={[0, 1, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
        <mesh
          receiveShadow
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

import { useRef } from "react"
import { RectAreaLight } from "three"
import { RectAreaLightHelper } from "three/examples/jsm/Addons.js"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useHelper } from "@react-three/drei"
import { useControls, folder } from "leva"

function RectAreaLightWithHelper() {
  const light = useRef<RectAreaLight>(null!)

  const {
    positionX,
    positionY,
    positionZ,
    rotationX,
    rotationY,
    rotationZ,
    width,
    height,
    intensity,
    color,
    castShadow,
    helperColor,
  } = useControls({
    lightPosition: folder({
      positionX: { value: 0, min: -10, max: 10, step: 0.1 },
      positionY: { value: 5, min: -10, max: 10, step: 0.1 },
      positionZ: { value: 0, min: -10, max: 10, step: 0.1 },
    }),
    lightRotation: folder({
      rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
      rotationY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
      rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
    }),
    lightSize: folder({
      width: { value: 5, min: 0, max: 100, step: 0.1 },
      height: { value: 5, min: 0, max: 100, step: 0.1 },
    }),
    lightControls: folder({
      intensity: { value: 10, min: 0, max: 100, step: 0.1 },
      color: { value: "white" },
      castShadow: { value: true },
    }),
    helperControls: folder({
      helperColor: { value: "white" },
    }),
  })

  useHelper(light, RectAreaLightHelper, helperColor)

  return (
    <rectAreaLight
      ref={light}
      position={[positionX, positionY, positionZ]}
      rotation={[rotationX, rotationY, rotationZ]}
      width={width}
      height={height}
      intensity={intensity}
      color={color}
      castShadow={castShadow}
    />
  )
}

export default function Example() {
  return (
    <div className="h-screen">
      <Canvas shadows camera={{ position: [2.2, 4, 4], fov: 85, zoom: 0.6 }}>
        <RectAreaLightWithHelper />
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

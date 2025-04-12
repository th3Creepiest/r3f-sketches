import { useRef, useEffect } from "react"
import { SpotLight, SpotLightHelper, Object3D } from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useHelper } from "@react-three/drei"
import { useControls, folder } from "leva"

function SpotLightWithHelper() {
  const light = useRef<SpotLight>(null!)
  const target = useRef<Object3D>(null!)

  const {
    positionX,
    positionY,
    positionZ,
    targetX,
    targetY,
    targetZ,
    intensity,
    angle,
    penumbra,
    color,
    distance,
    castShadow,
    helperColor,
  } = useControls({
    lightPosition: folder({
      positionX: { value: 0, min: -10, max: 10, step: 0.1 },
      positionY: { value: 5, min: -10, max: 10, step: 0.1 },
      positionZ: { value: 0, min: -10, max: 10, step: 0.1 },
    }),
    targetPosition: folder({
      targetX: { value: 0, min: -10, max: 10, step: 0.1 },
      targetY: { value: 0, min: -10, max: 10, step: 0.1 },
      targetZ: { value: 0, min: -10, max: 10, step: 0.1 },
    }),
    lightControls: folder({
      intensity: { value: 10, min: 0, max: 100, step: 0.1 },
      angle: { value: 0.6, min: 0, max: 1 },
      penumbra: { value: 0.4, min: 0, max: 1, step: 0.1 },
      distance: { value: 10, min: 1, max: 100, step: 1 },
      color: { value: "white" },
      castShadow: { value: true },
    }),
    helperControls: folder({
      helperColor: { value: "orange" },
    }),
  })

  useHelper(light, SpotLightHelper, helperColor)

  useEffect(() => {
    if (target.current && light.current) {
      target.current.position.set(...[targetX, targetY, targetZ])
      light.current.target = target.current
    }
  }, [[targetX, targetY, targetZ]])

  return (
    <>
      <spotLight
        ref={light}
        intensity={intensity}
        position={[positionX, positionY, positionZ]}
        angle={angle}
        penumbra={penumbra}
        color={color}
        distance={distance}
        castShadow={castShadow}
      />
      <object3D ref={target} position={[targetX, targetY, targetZ]} />
    </>
  )
}

export default function Example() {
  return (
    <div className="h-screen">
      <Canvas shadows camera={{ position: [2.2, 4, 4], fov: 85, zoom: 0.6 }}>
        <SpotLightWithHelper />
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

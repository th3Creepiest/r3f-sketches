import { useRef, useEffect } from "react"
import { DirectionalLight, DirectionalLightHelper, Object3D } from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useHelper } from "@react-three/drei"
import { useControls, folder } from "leva"

function DirectionalLightWithHelper() {
  const light = useRef<DirectionalLight>(null!)
  const target = useRef<Object3D>(null!)

  const {
    lightX,
    lightY,
    lightZ,
    targetX,
    targetY,
    targetZ,
    intensity,
    color,
    helperSize,
    helperColor,
  } = useControls({
    lightPosition: folder({
      lightX: { value: 0, min: -10, max: 10, step: 0.1 },
      lightY: { value: 5, min: -10, max: 10, step: 0.1 },
      lightZ: { value: 0, min: -10, max: 10, step: 0.1 },
    }),
    targetPosition: folder({
      targetX: { value: 3, min: -10, max: 10, step: 0.1 },
      targetY: { value: 0, min: -10, max: 10, step: 0.1 },
      targetZ: { value: 0, min: -10, max: 10, step: 0.1 },
    }),
    lightControls: folder({
      intensity: { value: 5, min: 0, max: 100, step: 0.1 },
      color: { value: "#ffffff" },
    }),
    helperControls: folder({
      helperSize: { value: 3, min: 0, max: 10, step: 0.1 },
      helperColor: { value: "orange" },
    }),
  })

  useHelper(light, DirectionalLightHelper, helperSize, helperColor)

  useEffect(() => {
    if (target.current && light.current) {
      target.current.position.set(...[targetX, targetY, targetZ])
      light.current.target = target.current
    }
  }, [[targetX, targetY, targetZ]])

  return (
    <>
      <directionalLight
        ref={light}
        position={[lightX, lightY, lightZ]}
        intensity={intensity}
        color={color}
      />
      <object3D ref={target} position={[targetX, targetY, targetZ]} />
    </>
  )
}

export default function Example() {
  return (
    <div className="h-screen">
      <Canvas shadows camera={{ position: [2.2, 4, 4], fov: 85, zoom: 0.6 }}>
        <DirectionalLightWithHelper />
        <mesh castShadow position={[0, 1, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
        >
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

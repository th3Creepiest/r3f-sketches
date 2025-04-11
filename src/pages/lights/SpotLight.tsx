import { useRef, useEffect } from "react"
import { SpotLightHelper, Object3D, SpotLight } from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useHelper } from "@react-three/drei"
import { useControls } from "leva"

function SpotLightWithHelper({ wire_color }: { wire_color?: string } = {}) {
  const light = useRef<SpotLight>(null!)
  const target = useRef<Object3D>(null!)

  const { intensity, position, angle, penumbra, color, distance, targetPosition } = useControls({
    position: { value: [0, 5, 0], min: -2, max: 2 },
    targetPosition: { value: [0, 0, 0], min: -2, max: 2 },
    intensity: { value: 10, min: 0, max: 100, step: 0.1 },
    angle: { value: 0.6, min: 0, max: 1 },
    penumbra: { value: 0.4, min: 0, max: 1, step: 0.1 },
    distance: { value: 10, min: 1, max: 100, step: 1 },
    color: { value: "#ffffff" },
  })

  useHelper(light, SpotLightHelper, wire_color || "orange")

  useEffect(() => {
    if (target.current && light.current) {
      target.current.position.set(...targetPosition)
      light.current.target = target.current
    }
  }, [targetPosition])

  return (
    <>
      <spotLight
        ref={light}
        intensity={intensity}
        position={position}
        angle={angle}
        penumbra={penumbra}
        color={color}
        distance={distance}
        castShadow
      />
      <object3D ref={target} position={targetPosition} />
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
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

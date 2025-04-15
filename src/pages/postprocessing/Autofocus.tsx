import { memo, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import {
  AccumulativeShadows,
  Center,
  RandomizedLight,
  Stats,
  CameraControls,
} from "@react-three/drei"
import { EffectComposer, Autofocus, AutofocusApi } from "@react-three/postprocessing"
import { button, folder, useControls } from "leva"

export default function Example() {
  const autofocusRef = useRef<AutofocusApi>(null!)
  const opacity = 1
  const { ...autofocusConfig } = useControls({
    target: { value: [-1, 1, 0.6], optional: true, disabled: true },
    mouse: false,
    debug: { value: 0.02, min: 0, max: 0.15, optional: true },
    smoothTime: { value: 0.5, min: 0, max: 1 },
    manual: false,
    "update (manual only)": button(() => {
      autofocusRef.current.update(1, true)
    }),
    DepthOfField: folder(
      {
        focusRange: { min: 0, max: 1, value: 0.001 },
        bokehScale: { min: 0, max: 50, value: 8 },
        width: {
          value: 512,
          min: 256,
          max: 2048,
          step: 256,
          optional: true,
          disabled: true,
        },
        height: {
          value: 512,
          min: 256,
          max: 2048,
          step: 256,
          optional: true,
          disabled: true,
        },
      },
      { collapsed: true }
    ),
  })

  return (
    <div className="h-screen">
      <Canvas shadows camera={{ position: [-17, 1.5, 13], fov: 20 }}>
        <color attach="background" args={["#303035"]} />
        <ambientLight intensity={0.1} />
        <pointLight intensity={50} position={[0, 3, 0]} />
        <EffectComposer>
          <Autofocus ref={autofocusRef} {...autofocusConfig} />
        </EffectComposer>
        <group position-y={-0.5} position-x={-1}>
          <Center top position={[-2, 0, 2]}>
            <mesh castShadow>
              <sphereGeometry args={[0.5, 64, 64]} />
              <meshStandardMaterial
                color="#9d4b4b"
                opacity={opacity}
                transparent={opacity < 1}
              />
            </mesh>
          </Center>
          <Center top position={[2.5, 0, 1]}>
            <mesh castShadow rotation={[0, Math.PI / 4, 0]}>
              <boxGeometry args={[0.7, 0.7, 0.7]} />
              <meshStandardMaterial
                color="#9d4b4b"
                opacity={opacity}
                transparent={opacity < 1}
              />
            </mesh>
          </Center>
          <Shadows />
          <CameraControls />
          <Stats />
        </group>
      </Canvas>
    </div>
  )
}

const Shadows = memo(() => (
  <AccumulativeShadows
    temporal
    frames={100}
    color="#9d4b4b"
    colorBlend={0.5}
    alphaTest={0.9}
    scale={20}
  >
    <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
  </AccumulativeShadows>
))

import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Physics, RapierRigidBody, RigidBody } from "@react-three/rapier"
import { useControls, button } from "leva"

export default function Example() {
  const cube = useRef<RapierRigidBody>(null!)

  const { debug } = useControls({
    debug: { label: "Debug", value: false },
    applyImpulse: button(() => {
      cube.current.applyImpulse({ x: 0, y: 5, z: 0 }, true)
    }),
    applyTorqueImpulse: button(() => {
      cube.current.applyTorqueImpulse({ x: 0, y: 5, z: 0 }, true)
    }),
    addForce: button(() => {
      cube.current.addForce({ x: 0, y: 10, z: 0 }, true)
    }),
    removeForce: button(() => {
      cube.current.addForce({ x: 0, y: -10, z: 0 }, true)
    }),
    addTorque: button(() => {
      cube.current.addTorque({ x: 0, y: 10, z: 0 }, true)
    }),
    removeTorque: button(() => {
      cube.current.addTorque({ x: 0, y: -10, z: 0 }, true)
    }),
    resetPosition: button(() => {
      cube.current.setTranslation({ x: 0, y: 2, z: 0 }, true)
      cube.current.setRotation({ x: 0, y: 0, z: 0, w: 1 }, true)
    }),
  })

  return (
    <div className="h-screen">
      <Canvas shadows camera={{ position: [0, 4, 10] }}>
        <ambientLight intensity={0.7} />
        <directionalLight castShadow position={[5, 10, 5]} intensity={1.2} />
        <Physics debug={debug}>
          <RigidBody ref={cube} position={[0, 2, 0]}>
            <mesh castShadow receiveShadow>
              <boxGeometry />
              <meshStandardMaterial color="#38bdf8" />
            </mesh>
          </RigidBody>
          <RigidBody type="fixed" position={[0, -0.25, 0]}>
            <mesh receiveShadow>
              <boxGeometry args={[10, 0.5, 10]} />
              <meshStandardMaterial color="#222" />
            </mesh>
          </RigidBody>
        </Physics>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

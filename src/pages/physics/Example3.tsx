import { Suspense, useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Physics, RigidBody, type RapierRigidBody } from "@react-three/rapier"
import { Box, OrbitControls } from "@react-three/drei"

export default function Example() {
  return (
    <div className="h-screen">
      <Canvas shadows camera={{ position: [10, 10, 10], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Suspense>
          <Physics debug>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  )
}

function Experience() {
  const cube = useRef<RapierRigidBody>(null!)
  const [hover, setHover] = useState(false)
  const jump = () => {
    cube.current.applyImpulse({ x: 0, y: 5, z: 0 }, true)
  }
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, 10, 0]} intensity={0.4} />
      <OrbitControls />

      <RigidBody ref={cube} position={[-2.5, 1, 0]}>
        <Box
          onPointerEnter={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
          onClick={jump}
        >
          <meshStandardMaterial color={hover ? "hotpink" : "royalblue"} />
        </Box>
      </RigidBody>

      <RigidBody type="fixed">
        <Box position={[0, 0, 0]} args={[10, 1, 10]}>
          <meshStandardMaterial color="springgreen" />
        </Box>
      </RigidBody>
    </>
  )
}

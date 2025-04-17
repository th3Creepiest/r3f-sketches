import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Physics, RigidBody } from "@react-three/rapier"
import { Box, Sphere, OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Example() {
  const { debug, gravityX, gravityY, gravityZ, gravityScale } = useControls({
    gravityX: { value: 0, min: -1, max: 1, step: 0.1 },
    gravityY: { value: -9.81, min: -10, max: 10, step: 0.1 },
    gravityZ: { value: 0, min: -1, max: 1, step: 0.1 },
    gravityScale: { value: 1, min: 0, max: 10, step: 0.1 },
    debug: { label: "Debug", value: false },
  })

  return (
    <div className="h-screen">
      <Canvas shadows camera={{ position: [10, 10, 10], fov: 50 }}>
        <Suspense>
          <Physics debug={debug} gravity={[gravityX, gravityY, gravityZ]}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-10, 10, 0]} intensity={0.4} />
            <RigidBody
              position={[0, 5, 0]}
              colliders={"ball"}
              gravityScale={gravityScale}
            >
              <Sphere>
                <meshStandardMaterial color="#38bdf8" />
              </Sphere>
            </RigidBody>
            <RigidBody type="fixed" restitution={2}>
              <Box position={[0, 0, 0]} args={[10, 1, 10]}>
                <meshStandardMaterial color="#222" />
              </Box>
            </RigidBody>
            <OrbitControls />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  )
}

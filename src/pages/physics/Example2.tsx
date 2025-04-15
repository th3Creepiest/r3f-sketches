import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Physics, RigidBody } from "@react-three/rapier"
import { Box, Sphere, OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Example() {
  const { gravityX, gravityY, gravityZ, gravityScale, bgColor, floorColor } = useControls(
    {
      gravityX: { value: 0, min: -10, max: 10, step: 0.1 },
      gravityY: { value: -9.81, min: -10, max: 10, step: 0.1 },
      gravityZ: { value: 0, min: -10, max: 10, step: 0.1 },
      gravityScale: { value: 1, min: 0, max: 10, step: 0.1 },
      bgColor: { value: "#ececec", label: "Background Color" },
      floorColor: { value: "springgreen", label: "Floor Color" },
    }
  )

  return (
    <div className="h-screen">
      <Canvas shadows camera={{ position: [10, 10, 10], fov: 30 }}>
        <color attach="background" args={[bgColor]} />
        <Suspense>
          <Physics debug gravity={[gravityX, gravityY, gravityZ]}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-10, 10, 0]} intensity={0.4} />

            <RigidBody
              position={[0, 5, 0]}
              colliders={"ball"}
              gravityScale={gravityScale}
            >
              <Sphere>
                <meshStandardMaterial color="hotpink" />
              </Sphere>
            </RigidBody>

            <RigidBody type="fixed" restitution={2}>
              <Box position={[0, 0, 0]} args={[10, 1, 10]}>
                <meshStandardMaterial color={floorColor} />
              </Box>
            </RigidBody>

            <OrbitControls />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  )
}

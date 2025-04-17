import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Physics, RigidBody } from "@react-three/rapier"
import { Box, Sphere, Torus, OrbitControls } from "@react-three/drei"

export default function Example() {
  return (
    <div className="h-screen">
      <Canvas shadows camera={{ position: [10, 10, 10], fov: 60 }}>
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
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, 10, 0]} intensity={0.4} />
      <OrbitControls />

      <RigidBody position={[-2, 5, 0]} colliders={"ball"}>
        <Sphere>
          <meshStandardMaterial color="hotpink" />
        </Sphere>
      </RigidBody>

      <RigidBody position={[0, 5, 0]}>
        <Box>
          <meshStandardMaterial color="royalblue" />
        </Box>
      </RigidBody>

      <RigidBody position={[2, 5, 0]} colliders={"trimesh"}>
        <Torus>
          <meshStandardMaterial color="orange" />
        </Torus>
      </RigidBody>

      <RigidBody position={[2, 5, -2]} colliders={"hull"}>
        <Torus>
          <meshStandardMaterial color="orange" />
        </Torus>
      </RigidBody>

      <RigidBody type="fixed">
        <Box position={[0, 0, 0]} args={[10, 1, 10]}>
          <meshStandardMaterial color="springgreen" />
        </Box>
      </RigidBody>
    </>
  )
}

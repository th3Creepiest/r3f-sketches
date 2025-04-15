import { Suspense } from "react"
import { Torus } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier"

export default function Example() {
  return (
    <div className="h-screen">
      <Canvas>
        <Suspense>
          <Physics debug>
            <RigidBody colliders={"hull"} restitution={2}>
              <Torus />
            </RigidBody>
            <CuboidCollider position={[0, -2, 0]} args={[20, 0.5, 20]} />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  )
}

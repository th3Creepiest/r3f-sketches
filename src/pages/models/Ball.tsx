import * as THREE from "three"
import { JSX, Suspense, useEffect, useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { GLTF } from "three-stdlib"
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei"
import { useControls, button } from "leva"

export default function Example() {
  const [action, setAction] = useState<ActionName>("Idle")

  useControls({
    Idle: button(() => {
      setAction("Idle")
    }),
    Jump: button(() => {
      setAction("Jump")
    }),
  })

  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight intensity={1} />
        <pointLight intensity={2} position={[-1, 1, 3]} color={"red"} />
        <pointLight intensity={2} position={[1, 1, 3]} color={"blue"} />
        <pointLight intensity={2} position={[0, 3, -10]} color={"white"} />
        <Suspense fallback={null}>
          <Model action={action} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}
type GLTFResult = GLTF & {
  nodes: {
    Sphere_1: THREE.Mesh
    Sphere_2: THREE.Mesh
    Root: THREE.Bone
  }
  materials: {
    White: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
  }
}

type ActionName = "Idle" | "Jump"

export function Model({
  action,
  ...props
}: { action: ActionName } & JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null)

  const { nodes, materials, animations } = useGLTF("/ball.glb") as unknown as GLTFResult

  const { actions } = useAnimations(animations, group) as unknown as {
    actions: Record<ActionName, THREE.AnimationAction | null>
  }

  useEffect(() => {
    if (actions[action]) {
      Object.values(actions).forEach((act) => act?.fadeOut(0.4))
      actions[action].reset().fadeIn(0.4).play()
    }
  }, [action, actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Ball" userData={{ name: "Ball" }}>
          <primitive object={nodes.Root} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/ball.glb")

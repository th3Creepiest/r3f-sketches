import * as THREE from "three"
import { GLTF } from "three-stdlib"
import { JSX, Suspense, useEffect, useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei"
import { useControls, button } from "leva"

export default function Example() {
  const [action, setAction] = useState<ActionName>("T-Pose")

  useControls({
    Idle: button(() => {
      setAction("Idle")
    }),
    DancingMaraschinoStep: button(() => {
      setAction("DancingMaraschinoStep")
    }),
    DancingRunningMan: button(() => {
      setAction("DancingRunningMan")
    }),
    Moonwalk: button(() => {
      setAction("Moonwalk")
    }),
    SambaDancing: button(() => {
      setAction("SambaDancing")
    }),
    SwingDanging: button(() => {
      setAction("SwingDanging")
    }),
    "T-Pose": button(() => {
      setAction("T-Pose")
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
    Elvis_BodyGeo: THREE.SkinnedMesh
    Elvis_BrowsAnimGeo: THREE.SkinnedMesh
    Elvis_EyesAnimGeo: THREE.SkinnedMesh
    Elvis_MouthAnimGeo: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
  }
  materials: {
    Character_Fat_Elvis_body_color1: THREE.MeshStandardMaterial
    Elvis_Eyes_MAT1: THREE.MeshStandardMaterial
    Elvis_Brows_MAT1: THREE.MeshStandardMaterial
    Elvis_Mouth_MAT1: THREE.MeshStandardMaterial
  }
}

type ActionName =
  | "DancingMaraschinoStep"
  | "DancingRunningMan"
  | "Idle"
  | "Moonwalk"
  | "SambaDancing"
  | "SwingDanging"
  | "T-Pose"

export function Model({
  action,
  ...props
}: { action: ActionName } & JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null)

  const { nodes, materials, animations } = useGLTF(
    "/Big_Vegas.glb"
  ) as unknown as GLTFResult

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
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Elvis_BodyGeo"
            geometry={nodes.Elvis_BodyGeo.geometry}
            material={materials.Character_Fat_Elvis_body_color1}
            skeleton={nodes.Elvis_BodyGeo.skeleton}
          />
          <skinnedMesh
            name="Elvis_BrowsAnimGeo"
            geometry={nodes.Elvis_BrowsAnimGeo.geometry}
            material={materials.Elvis_Eyes_MAT1}
            skeleton={nodes.Elvis_BrowsAnimGeo.skeleton}
          />
          <skinnedMesh
            name="Elvis_EyesAnimGeo"
            geometry={nodes.Elvis_EyesAnimGeo.geometry}
            material={materials.Elvis_Brows_MAT1}
            skeleton={nodes.Elvis_EyesAnimGeo.skeleton}
          />
          <skinnedMesh
            name="Elvis_MouthAnimGeo"
            geometry={nodes.Elvis_MouthAnimGeo.geometry}
            material={materials.Elvis_Mouth_MAT1}
            skeleton={nodes.Elvis_MouthAnimGeo.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/Big_Vegas.glb")

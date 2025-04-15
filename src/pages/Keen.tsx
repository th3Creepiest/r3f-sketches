import { Suspense, useRef } from "react"
import { Object3D } from "three"
import { GLTFLoader } from "three/examples/jsm/Addons.js"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Bloom, EffectComposer, SSAO } from "@react-three/postprocessing"

function Keen() {
  const ref = useRef<Object3D>(null!)

  useFrame(() => {
    ref.current.rotation.y = 0
    ref.current.rotation.x = -Math.PI / 2
    ref.current.rotation.z += 0.01
  })

  const { nodes, materials } = useLoader(GLTFLoader, "/Keen/scene.gltf")
  return (
    <group ref={ref} position={[0, -7, 0]} dispose={null}>
      <mesh
        material={materials["Scene_-_Root"]}
        geometry={(nodes.mesh_0 as any).geometry}
        castShadow
        receiveShadow
      />
    </group>
  )
}

export default function Example() {
  return (
    <div className="h-screen">
      <Canvas camera={{ position: [0, 0, 15], near: 5, far: 20 }}>
        <OrbitControls />
        <Suspense fallback={null}>
          <Keen />
        </Suspense>
        <ambientLight />
        <directionalLight position={[0, 1, 2]} color="white" />
        <Suspense fallback={null}>
          <EffectComposer>
            <Bloom intensity={1.2} luminanceThreshold={0} luminanceSmoothing={0.9} />
            <SSAO />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}

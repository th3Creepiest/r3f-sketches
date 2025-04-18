import { Suspense } from "react"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import { OBJLoader } from "three/addons/loaders/OBJLoader.js"
import { FBXLoader } from "three/addons/loaders/FBXLoader.js"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls, Text, Html, useProgress } from "@react-three/drei"
import { useControls } from "leva"

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

export default function Example() {
  const { ambientLightIntensity } = useControls({
    ambientLightIntensity: { value: 0.1, min: 0, max: 1, step: 0.1 },
  })

  const glb = useLoader(GLTFLoader, "/Suzanne/Suzanne.glb")
  const gltf = useLoader(GLTFLoader, "/Suzanne/Suzanne.gltf")
  const obj = useLoader(OBJLoader, "/Suzanne/Suzanne.obj")
  const fbx = useLoader(FBXLoader, "/Suzanne/Suzanne.fbx")

  return (
    <div className="h-screen">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={ambientLightIntensity} />
        <directionalLight position={[0, -1, 1]} color="white" />
        <Suspense fallback={<Loader />}>
          <group position-x={-4.5}>
            <group>
              <primitive object={gltf.scene} />
              <Text
                color="white"
                anchorX="center"
                anchorY="middle"
                position-y={-1.5}
                fontSize={0.5}
              >
                GLTF
              </Text>
            </group>
            <group position-x={3}>
              <primitive object={glb.scene} />
              <Text
                color="white"
                anchorX="center"
                anchorY="middle"
                position-y={-1.5}
                fontSize={0.5}
              >
                GLB
              </Text>
            </group>
            <group position-x={6}>
              <primitive object={obj} />
              <Text
                color="white"
                anchorX="center"
                anchorY="middle"
                position-y={-1.5}
                fontSize={0.5}
              >
                OBJ
              </Text>
            </group>
            <group position-x={9}>
              <primitive object={fbx} scale={0.01} />
              <Text
                color="white"
                anchorX="center"
                anchorY="middle"
                position-y={-1.5}
                fontSize={0.5}
              >
                FBX
              </Text>
            </group>
          </group>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

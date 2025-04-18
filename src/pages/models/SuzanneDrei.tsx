import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import {
  OrbitControls,
  Text,
  Html,
  useProgress,
  useGLTF,
  Gltf,
  useFBX,
  Fbx,
} from "@react-three/drei"
import { useControls } from "leva"

// Preload the model
useGLTF.preload("/Suzanne/Suzanne.gltf") // optional
useGLTF.preload("/Suzanne/Suzanne.fbx") // optional

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

export default function Example() {
  const { ambientLightIntensity } = useControls({
    ambientLightIntensity: { value: 0.1, min: 0, max: 1, step: 0.1 },
  })

  const gltf = useGLTF("/Suzanne/Suzanne.gltf")
  const fbx = useFBX("/Suzanne/Suzanne.fbx")

  return (
    <div className="h-screen">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={ambientLightIntensity} />
        <directionalLight position={[0, -1, 1]} color="white" />
        <Suspense fallback={<Loader />}>
          <group position-x={-1.5} position-y={2}>
            <group>
              <primitive object={gltf.scene} />
              <Text
                color="white"
                anchorX="center"
                anchorY="middle"
                position-y={-1.5}
                fontSize={0.5}
              >
                useGLTF
              </Text>
            </group>
            <group position-x={3}>
              <Gltf src="/Suzanne/Suzanne.gltf" />
              <Text
                color="white"
                anchorX="center"
                anchorY="middle"
                position-y={-1.9}
                fontSize={0.5}
                textAlign="center"
              >
                {["GLTF", "\n", "Component"]}
              </Text>
            </group>
          </group>
          <group position-x={-1.5} position-y={-2}>
            <group>
              <primitive object={fbx} scale={0.01} />
              <Text
                color="white"
                anchorX="center"
                anchorY="middle"
                position-y={-1.5}
                fontSize={0.5}
              >
                useFBX
              </Text>
            </group>
            <group position-x={3}>
              <Fbx path="/Suzanne/Suzanne.fbx" scale={1} />
              <Text
                color="white"
                anchorX="center"
                anchorY="middle"
                position-y={-1.9}
                fontSize={0.5}
                textAlign="center"
              >
                {["FBX", "\n", "Component"]}
              </Text>
            </group>
          </group>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

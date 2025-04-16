import { Suspense } from "react"
import { GLTFLoader } from "three/examples/jsm/Addons.js"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function Example() {
  const obj = useLoader(GLTFLoader, "/Suzanne/Suzanne.gltf")

  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight />
        <directionalLight position={[0, 1, 2]} color="white" />
        <Suspense fallback={null}>
          <primitive object={obj.scene} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

import { useState } from "react"
import { PerspectiveCamera } from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Grid } from "@react-three/drei"
import { useControls, folder } from "leva"

export default function Example() {
  const [controlledCamera] = useState(() => {
    const camera = new PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 10, 20)
    camera.lookAt(0, 5, 0)
    return camera
  })

  useControls({
    camera: folder({
      fov: {
        value: 45,
        min: 1,
        max: 180,
        step: 1,
        onChange: (v) => {
          controlledCamera.fov = v
          controlledCamera.updateProjectionMatrix()
        },
      },
      near: {
        value: 0.1,
        min: 0.1,
        max: 50,
        step: 0.1,
        onChange: (v) => {
          controlledCamera.near = v
          controlledCamera.updateProjectionMatrix()
        },
      },
      far: {
        value: 100,
        min: 0.1,
        max: 100,
        step: 0.1,
        onChange: (v) => {
          controlledCamera.far = v
          controlledCamera.updateProjectionMatrix()
        },
      },
    }),
  })

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <div className="w-1/2 h-full border-r border-gray-500">
          <Canvas camera={controlledCamera}>
            <Scene />
            <OrbitControls makeDefault camera={controlledCamera} enableDamping={false} />
          </Canvas>
        </div>
        <div className="w-1/2 h-full">
          <Canvas camera={{ position: [40, 10, 30], fov: 60, near: 0.1, far: 500 }}>
            <Scene />
            <cameraHelper args={[controlledCamera]} />
            <OrbitControls target={[0, 5, 0]} />
          </Canvas>
        </div>
      </div>
    </div>
  )
}

function Scene() {
  return (
    <>
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <mesh position={[4, 2, 0]}>
        <boxGeometry args={[4, 4, 4]} />
        <meshStandardMaterial color="#8AC" />
      </mesh>
      <mesh position={[-4, 3, 0]}>
        <sphereGeometry args={[3, 32, 16]} />
        <meshStandardMaterial color="#CA8" />
      </mesh>
      <Grid args={[40, 40]} cellSize={1} cellThickness={0.6} cellColor="#6f6f6f" />
    </>
  )
}

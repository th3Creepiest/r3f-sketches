import { useEffect } from "react"
import { OrthographicCamera } from "three"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useControls, folder } from "leva"

export default function Example() {
  const { left, right, top, bottom, zoom, near, far } = useControls({
    Orthographic_Camera_Settings: folder({
      left: { value: -2, min: -10, max: 0, step: 0.1 },
      right: { value: 2, min: 0, max: 10, step: 0.1 },
      top: { value: 2, min: 0, max: 10, step: 0.1 },
      bottom: { value: -2, min: -10, max: 0, step: 0.1 },
      zoom: { value: 0.5, min: 0, max: 10, step: 0.1 },
      near: { value: 0.1, min: 0.1, max: 10, step: 0.1 },
      far: { value: 30, min: 1, max: 30, step: 0.1 },
    }),
  })

  function CameraController() {
    const { camera } = useThree()
    const orthographicCamera = camera as OrthographicCamera
    useEffect(() => {
      orthographicCamera.left = left
      orthographicCamera.right = right
      orthographicCamera.top = top
      orthographicCamera.bottom = bottom
      orthographicCamera.zoom = zoom
      orthographicCamera.near = near
      orthographicCamera.far = far
      orthographicCamera.updateProjectionMatrix()
    }, [orthographicCamera, left, right, top, bottom, zoom, near, far])
    return null
  }

  return (
    <div className="h-screen">
      <Canvas orthographic camera={{ position: [5, 5, 5] }}>
        <ambientLight />
        <directionalLight position={[0, 1, 0]} />
        <pointLight position={[0, 2, 0]} />
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshLambertMaterial />
        </mesh>
        <mesh rotation={[Math.PI / -2, 0, 0]}>
          <planeGeometry args={[5, 5]} />
          <meshLambertMaterial />
        </mesh>
        <OrbitControls />
        <CameraController />
      </Canvas>
    </div>
  )
}

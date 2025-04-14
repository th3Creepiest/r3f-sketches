import { useEffect } from "react"
import { PerspectiveCamera } from "three"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useControls, folder } from "leva"

export default function Example() {
  const { aspect, fov, zoom, near, far, filmOffset, filmGauge } = useControls({
    Camera_Settings: folder({
      aspect: { value: 1, min: -2, max: 10, step: 0.01 },
      fov: { value: 50, min: 1, max: 180, step: 1 },
      zoom: { value: 1, min: 1, max: 10, step: 0.1 },
      near: { value: 0.1, min: 0.1, max: 10, step: 0.1 },
      far: { value: 30, min: 1, max: 30, step: 0.1 },
      filmOffset: { value: 0, min: -10, max: 10, step: 0.01 },
      filmGauge: { value: 35, min: 1, max: 100, step: 0.01 },
    }),
  })

  function CameraController() {
    const { camera } = useThree()
    const perspectiveCamera = camera as PerspectiveCamera
    useEffect(() => {
      perspectiveCamera.aspect = aspect
      perspectiveCamera.fov = fov
      perspectiveCamera.zoom = zoom
      perspectiveCamera.near = near
      perspectiveCamera.far = far
      perspectiveCamera.filmOffset = filmOffset
      perspectiveCamera.filmGauge = filmGauge
      perspectiveCamera.updateProjectionMatrix()
    }, [perspectiveCamera, fov, near, far])
    return null
  }

  return (
    <div className="h-screen">
      <Canvas camera={{ position: [5, 5, 5] }}>
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

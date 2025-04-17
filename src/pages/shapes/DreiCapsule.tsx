import { Canvas } from "@react-three/fiber"
import { Capsule, OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Example() {
  const {
    radius,
    length,
    capSegments,
    radialSegments,
    positionX,
    positionY,
    positionZ,
    rotationX,
    rotationY,
    rotationZ,
    scaleX,
    scaleY,
    scaleZ,
    color,
    wireframe,
    autoRotate,
  } = useControls({
    radius: { value: 0.5, min: -3, max: 3 },
    length: { value: 1, min: -3, max: 3 },
    capSegments: { value: 3, min: 0, max: 6 },
    radialSegments: { value: 8, min: 0, max: 16, step: 1 },
    positionX: { value: 0, min: -3, max: 3 },
    positionY: { value: 0, min: -3, max: 3 },
    positionZ: { value: 0, min: -3, max: 3 },
    rotationX: { value: 0, min: -3, max: 3 },
    rotationY: { value: 0, min: -3, max: 3 },
    rotationZ: { value: 0, min: -3, max: 3 },
    scaleX: { value: 1, min: -3, max: 3 },
    scaleY: { value: 1, min: -3, max: 3 },
    scaleZ: { value: 1, min: -3, max: 3 },
    color: "#ff0000",
    wireframe: true,
    autoRotate: true,
  })

  return (
    <div className="h-screen">
      <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
        <ambientLight />
        <directionalLight />
        <Capsule
          args={[radius, length, capSegments, radialSegments]}
          position={[positionX, positionY, positionZ]}
          rotation={[rotationX, rotationY, rotationZ]}
          scale={[scaleX, scaleY, scaleZ]}
        >
          <meshPhongMaterial color={color} wireframe={wireframe} />
        </Capsule>
        <OrbitControls autoRotate={autoRotate} />
      </Canvas>
    </div>
  )
}

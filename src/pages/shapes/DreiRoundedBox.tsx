import { Canvas } from "@react-three/fiber"
import { RoundedBox, OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Example() {
  const {
    width,
    height,
    depth,
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
    radius,
    smoothness,
    bevelSegments,
    creaseAngle,
    wireframe,
    autoRotate,
  } = useControls({
    width: { value: 1, min: -3, max: 3 },
    height: { value: 1, min: -3, max: 3 },
    depth: { value: 1, min: -3, max: 3 },
    positionX: { value: 0, min: -3, max: 3 },
    positionY: { value: 0, min: -3, max: 3 },
    positionZ: { value: 0, min: -3, max: 3 },
    rotationX: { value: 0, min: -3, max: 3 },
    rotationY: { value: 0, min: -3, max: 3 },
    rotationZ: { value: 0, min: -3, max: 3 },
    scaleX: { value: 1, min: -3, max: 3 },
    scaleY: { value: 1, min: -3, max: 3 },
    scaleZ: { value: 1, min: -3, max: 3 },
    radius: { value: 0.05, min: 0, max: 0.5 },
    smoothness: { value: 4, min: 0.1, max: 8 },
    bevelSegments: { value: 4, min: 0, max: 8 },
    creaseAngle: { value: 0.4, min: 0, max: Math.PI / 2 },
    color: "#ff0000",
    wireframe: true,
    autoRotate: true,
  })

  return (
    <div className="h-screen">
      <Canvas camera={{ position: [0, 2, 3] }}>
        <ambientLight />
        <directionalLight />
        <RoundedBox
          args={[width, height, depth]}
          position={[positionX, positionY, positionZ]}
          rotation={[rotationX, rotationY, rotationZ]}
          scale={[scaleX, scaleY, scaleZ]}
          radius={radius}
          smoothness={smoothness}
          bevelSegments={bevelSegments}
          creaseAngle={creaseAngle}
        >
          <meshPhongMaterial color={color} wireframe={wireframe} />
        </RoundedBox>
        <OrbitControls autoRotate={autoRotate} />
      </Canvas>
    </div>
  )
}

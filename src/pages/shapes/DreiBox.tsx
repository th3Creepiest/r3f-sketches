import { Canvas } from "@react-three/fiber"
import { Box, OrbitControls } from "@react-three/drei"
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
    color: "#ff0000",
    wireframe: true,
    autoRotate: true,
  })

  return (
    <div className="h-screen">
      <Canvas camera={{ position: [0, 2, 3] }}>
        <ambientLight />
        <directionalLight />
        <Box
          args={[width, height, depth]}
          position={[positionX, positionY, positionZ]}
          rotation={[rotationX, rotationY, rotationZ]}
          scale={[scaleX, scaleY, scaleZ]}
        >
          <meshPhongMaterial color={color} wireframe={wireframe} />
        </Box>
        <OrbitControls autoRotate={autoRotate} />
      </Canvas>
    </div>
  )
}

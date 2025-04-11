import { Box, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useControls, folder, button } from "leva"

function TweakableBox() {
  const [{ scale, position, color, wireframe }, set] = useControls("Box", () => ({
    transform: folder({
      scale: { value: 1, min: 0.5, max: 4, step: 0.2 },
      position: { value: [0, 0, 0], min: -2, max: 2 },
    }),
    material: folder({ color: "#333", wireframe: false }),
    reset: button(() => {
      set({
        scale: 1,
        position: [0, 0, 0],
        color: "#333",
        wireframe: false,
      })
    }),
  }))
  return (
    <Box scale={scale} position={position}>
      <meshStandardMaterial color={color} wireframe={wireframe} />
    </Box>
  )
}

export default function Example() {
  const { aName, aNumber } = useControls({ aName: "World", aNumber: 0 })
  return (
    <div className="h-screen">
      Hey {aName}! {aNumber}
      <Canvas>
        <ambientLight />
        <pointLight position={[0, 1, 0]} intensity={3} />
        <TweakableBox />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

import { Vector3 } from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function Cube({ position }: { position: Vector3 }) {
  return (
    <mesh position={position}>
      <boxGeometry />
      <meshPhongMaterial />
    </mesh>
  )
}

export default function Example() {
  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight />
        <directionalLight position={[0, 0, 10]} />
        <directionalLight position={[0, 0, -10]} />
        <Cube position={new Vector3(-2, -2, -2)} />
        <Cube position={new Vector3(0, -2, -2)} />
        <Cube position={new Vector3(2, -2, -2)} />
        <Cube position={new Vector3(-2, -2, 0)} />
        <Cube position={new Vector3(0, -2, 0)} />
        <Cube position={new Vector3(2, -2, 0)} />
        <Cube position={new Vector3(-2, -2, 2)} />
        <Cube position={new Vector3(0, -2, 2)} />
        <Cube position={new Vector3(2, -2, 2)} />
        <Cube position={new Vector3(-2, 0, -2)} />
        <Cube position={new Vector3(0, 0, -2)} />
        <Cube position={new Vector3(2, 0, -2)} />
        <Cube position={new Vector3(-2, 0, 0)} />
        <Cube position={new Vector3(0, 0, 0)} />
        <Cube position={new Vector3(2, 0, 0)} />
        <Cube position={new Vector3(-2, 0, 2)} />
        <Cube position={new Vector3(0, 0, 2)} />
        <Cube position={new Vector3(2, 0, 2)} />
        <Cube position={new Vector3(-2, 2, -2)} />
        <Cube position={new Vector3(0, 2, -2)} />
        <Cube position={new Vector3(2, 2, -2)} />
        <Cube position={new Vector3(-2, 2, 0)} />
        <Cube position={new Vector3(0, 2, 0)} />
        <Cube position={new Vector3(2, 2, 0)} />
        <Cube position={new Vector3(-2, 2, 2)} />
        <Cube position={new Vector3(0, 2, 2)} />
        <Cube position={new Vector3(2, 2, 2)} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

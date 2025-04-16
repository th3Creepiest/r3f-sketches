import { useRef } from "react"
import { MeshPhysicalMaterial } from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useControls, folder } from "leva"

export default function Example() {
  const material = useRef<MeshPhysicalMaterial>(null)

  const { ...materialControls } = useControls({
    Physical_Material_Settings: folder({
      color: { value: "royalblue" },
      emissive: { value: "black" },
      roughness: { value: 1, min: 0, max: 1 },
      metalness: { value: 0, min: 0, max: 1 },
      clearcoat: { value: 0, min: 0, max: 1 },
      clearcoatRoughness: { value: 0, min: 0, max: 1 },
      wireframe: { value: false },
      flatShading: {
        value: false,
        onChange: (v) => {
          if (material.current) {
            material.current.flatShading = v
            material.current.needsUpdate = true
          }
        },
      },
    }),
  })

  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight />
        <pointLight position={[3, 3, 3]} intensity={100} />
        <mesh>
          <sphereGeometry />
          <meshPhysicalMaterial ref={material} {...materialControls} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

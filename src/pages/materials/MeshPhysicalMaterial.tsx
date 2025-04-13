import { useEffect, useRef } from "react"
import { MeshPhysicalMaterial } from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useControls, folder } from "leva"

export default function Example() {
  const material = useRef<MeshPhysicalMaterial>(null)
  const {
    color,
    emissiveColor,
    roughness,
    metalness,
    clearCoat,
    clearCoatRoughness,
    wireframe,
    flatShading,
  } = useControls({
    Physical_Material_Settings: folder({
      color: { value: "royalblue" },
      emissiveColor: { value: "black" },
      roughness: { value: 1, min: 0, max: 1 },
      metalness: { value: 0, min: 0, max: 1 },
      clearCoat: { value: 0, min: 0, max: 1 },
      clearCoatRoughness: { value: 0, min: 0, max: 1 },
      wireframe: { value: false },
      flatShading: { value: false },
    }),
  })

  useEffect(() => {
    if (material.current) {
      material.current.flatShading = flatShading
      material.current.needsUpdate = true
    }
  }, [flatShading])

  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight />
        <pointLight position={[3, 3, 3]} intensity={100} />
        <mesh>
          <sphereGeometry />
          <meshPhysicalMaterial
            ref={material}
            color={color}
            emissive={emissiveColor}
            roughness={roughness}
            metalness={metalness}
            clearcoat={clearCoat}
            clearcoatRoughness={clearCoatRoughness}
            wireframe={wireframe}
          />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

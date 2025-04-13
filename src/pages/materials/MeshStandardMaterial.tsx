import { useEffect, useRef } from "react"
import { MeshStandardMaterial } from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useControls, folder } from "leva"

export default function Example() {
  const material = useRef<MeshStandardMaterial>(null)
  const { color, emissiveColor, roughness, metalness, flatShading, wireframe } =
    useControls({
      Standard_Material_Settings: folder({
        color: { value: "royalblue" },
        emissiveColor: { value: "black" },
        roughness: { value: 1, min: 0, max: 1 },
        metalness: { value: 0, min: 0, max: 1 },
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
          <meshStandardMaterial
            ref={material}
            color={color}
            roughness={roughness}
            metalness={metalness}
            emissive={emissiveColor}
            wireframe={wireframe}
          />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

import { useEffect, useRef } from "react"
import { MeshPhongMaterial } from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useControls, folder } from "leva"

export default function Example() {
  const material = useRef<MeshPhongMaterial>(null)
  const { color, shininess, flatShading, wireframe } = useControls({
    Phong_Material_Settings: folder({
      color: { value: "royalblue" },
      shininess: { value: 30, min: 0, max: 250 },
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
          <meshPhongMaterial
            ref={material}
            color={color}
            shininess={shininess}
            wireframe={wireframe}
          />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

import { useMemo, useRef } from "react"
import { PointsMaterial, BufferGeometry, BufferAttribute } from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Example() {
  const material = useRef<PointsMaterial>(null!)

  const { ...materialControls } = useControls({
    color: "aqua",
    size: { min: 0, max: 10, value: 1 },
    sizeAttenuation: {
      value: true,
      onChange: (v) => {
        if (material.current) {
          material.current.sizeAttenuation = v
          material.current.needsUpdate = true
        }
      },
    },
    enableFog: {
      value: true,
      onChange: (v) => {
        if (material.current) {
          material.current.fog = v
          material.current.needsUpdate = true
        }
      },
    },
  })

  const pointsGeometry = useMemo(() => {
    const geometry = new BufferGeometry()
    const count = 500
    const positions = new Float32Array(count * 3) // 3 vertices per point
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10 // Random positions within a range
    }
    geometry.setAttribute("position", new BufferAttribute(positions, 3))
    return geometry
  }, [])

  return (
    <div className="h-screen">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <points geometry={pointsGeometry}>
          <pointsMaterial ref={material} {...materialControls} />
        </points>
        <fog attach="fog" args={[0x000000, 0, 10]} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

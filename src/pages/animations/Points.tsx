import * as THREE from "three"
import { useCallback, useMemo, useRef } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import circleImg from "/circle.png"

export default function Example() {
  return (
    <div className="h-screen">
      <Canvas camera={{ position: [100, 10, 0], fov: 75 }}>
        <Points />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, circleImg)
  const bufferRef = useRef<THREE.BufferAttribute>(null!)

  const f = 0.002
  const a = 3
  let t = 0

  const graph = useCallback(
    (x: number, z: number, time: number) => {
      return Math.sin(f * (x ** 2 + z ** 2 + time)) * a
    },
    [f, a]
  )

  const count = 60
  const sep = 3

  const initialPositions = useMemo(() => {
    let positions = []
    const initialTime = 0
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2)
        let z = sep * (zi - count / 2)
        let y = graph(x, z, initialTime)
        positions.push(x, y, z)
      }
    }
    return new Float32Array(positions)
  }, [count, sep, f, a, graph])

  useFrame(() => {
    t += 5

    const positions = bufferRef.current.array as Float32Array

    let i = 0
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = positions[i]
        const z = positions[i + 2]
        positions[i + 1] = graph(x, z, t)
        i += 3
      }
    }

    bufferRef.current.needsUpdate = true
  })

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          args={[initialPositions, 3]}
          count={initialPositions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={imgTex}
        color={0x00aaff}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  )
}

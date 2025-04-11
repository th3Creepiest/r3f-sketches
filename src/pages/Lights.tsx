import { useRef } from "react"
import { SpotLightHelper } from "three"
import { OrbitControls, useHelper } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useControls } from "leva"

function SpotLightWithHelper() {
  const light = useRef(null!)
  const { angle, penumbra } = useControls({
    angle: { value: Math.PI / 8, min: 0, max: 1 },
    penumbra: { value: 0.5, min: 0, max: 1, step: 0.1 },
  })
  useHelper(light, SpotLightHelper, "orange")
  return <spotLight ref={light} intensity={10} position={[0, 2, 0]} angle={angle} penumbra={penumbra} />
}

export default function Example() {
  return (
    <>
      <section className="bg-neutral-900">
        <div>
          Ambient Light
          <Canvas>
            <ambientLight intensity={0.5} />
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color="lime" />
              <OrbitControls enableZoom={false} />
            </mesh>
          </Canvas>
        </div>
        <div>
          Directional Light
          <Canvas>
            <directionalLight position={[2, 5, 1]} />
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color="lime" />
              <OrbitControls enableZoom={false} />
            </mesh>
          </Canvas>
        </div>
        <div>
          Spot Light
          <Canvas>
            <spotLight position={[0, 2, 0]} intensity={10} />
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color="lime" />
              <OrbitControls enableZoom={false} />
            </mesh>
          </Canvas>
        </div>
        <div>
          Point Light
          <Canvas>
            <pointLight position={[0, 2, 0]} intensity={10} />
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color="lime" />
              <OrbitControls enableZoom={false} />
            </mesh>
          </Canvas>
        </div>
        <div>
          Spot Light with Helper
          <Canvas>
            <SpotLightWithHelper />
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color="lime" />
              <OrbitControls enableZoom={false} />
            </mesh>
          </Canvas>
        </div>
      </section>
    </>
  )
}

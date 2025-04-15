import { Canvas } from "@react-three/fiber"
import { EffectComposer, Ramp } from "@react-three/postprocessing"
import { useControls } from "leva"

export default function Example() {
  const {
    startColorR,
    startColorG,
    startColorB,
    startColorA,
    endColorR,
    endColorG,
    endColorB,
    endColorA,
    ...rampControls
  } = useControls({
    startColorR: { value: 0, min: 0, max: 1 },
    startColorG: { value: 0, min: 0, max: 1 },
    startColorB: { value: 0, min: 0, max: 1 },
    startColorA: { value: 0, min: 0, max: 1 },
    endColorR: { value: 1, min: 0, max: 1 },
    endColorG: { value: 1, min: 0, max: 1 },
    endColorB: { value: 1, min: 0, max: 1 },
    endColorA: { value: 1, min: 0, max: 1 },
    rampType: {
      value: 0,
      options: { Linear: 0, Radial: 1, "Linear (Mirrored)": 2 },
    },
    opacity: { value: 1, min: 0, max: 1, label: "Opacity" },
    rampStart: {
      value: { x: 0.45, y: 0.5 },
      step: 0.01,
      min: 0.0,
      max: 1.0,
      joystick: "invertY",
    },
    rampEnd: {
      value: { x: 0.55, y: 0.5 },
      step: 0.01,
      min: 0.0,
      max: 1.0,
      joystick: "invertY",
    },
    rampBias: { value: 0.5, max: 1, min: 0 },
    rampGain: { value: 0.5, max: 1, min: 0 },
    rampMask: { value: false },
    rampInvert: { value: false },
  })
  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight />
        <mesh>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial color="royalblue" />
        </mesh>
        <EffectComposer>
          <Ramp
            startColor={[startColorR, startColorG, startColorB, startColorA]}
            endColor={[endColorR, endColorG, endColorB, endColorA]}
            {...rampControls}
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

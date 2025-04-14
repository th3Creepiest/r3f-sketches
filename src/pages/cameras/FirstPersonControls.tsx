import { Canvas } from "@react-three/fiber"
import { FirstPersonControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Example() {
  const {
    activeLook,
    autoForward,
    constrainVertical,
    heightCoef,
    heightMax,
    heightMin,
    heightSpeed,
    lookVertical,
    lookSpeed,
    movementSpeed,
    verticalMax,
    verticalMin,
  } = useControls({
    activeLook: { value: true },
    autoForward: { value: false },
    constrainVertical: { value: false },
    heightCoef: { value: 0.01, min: 0, max: 1, step: 0.001 },
    heightMax: { value: 1, min: 0, max: 1, step: 0.001 },
    heightMin: { value: 0, min: 0, max: 1, step: 0.001 },
    heightSpeed: { value: false },
    lookVertical: { value: true },
    lookSpeed: { value: 0.005, min: 0, max: 0.5, step: 0.001 },
    movementSpeed: { value: 2, min: -10, max: 10, step: 0.001 },
    verticalMax: { value: Math.PI, min: 0, max: Math.PI, step: 0.001 },
    verticalMin: { value: 0, min: 0, max: Math.PI, step: 0.001 },
  })
  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight />
        <pointLight position={[0, 1, 1]} />
        <pointLight position={[0, 1, -1]} />
        <pointLight position={[0.5, 1, 0]} />
        <pointLight position={[-0.5, 1, 0]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <FirstPersonControls
          activeLook={activeLook}
          autoForward={autoForward}
          constrainVertical={constrainVertical}
          heightCoef={heightCoef}
          heightMax={heightMax}
          heightMin={heightMin}
          heightSpeed={heightSpeed}
          lookVertical={lookVertical}
          lookSpeed={lookSpeed}
          movementSpeed={movementSpeed}
          verticalMax={verticalMax}
          verticalMin={verticalMin}
        />
      </Canvas>
    </div>
  )
}

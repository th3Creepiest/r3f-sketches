import { Canvas } from "@react-three/fiber"
import { KeyboardControls, useKeyboardControls } from "@react-three/drei"
import { useMemo } from "react"

const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  { name: "jump", keys: ["Space"] },
  { name: "run", keys: ["Shift"] },
  { name: "action1", keys: ["1"] },
  { name: "action2", keys: ["2"] },
  { name: "action3", keys: ["3"] },
]

enum Controls {
  forward = "forward",
  backward = "backward",
  leftward = "leftward",
  rightward = "rightward",
  jump = "jump",
  run = "run",
  action1 = "action1",
  action2 = "action2",
  action3 = "action3",
}

function KeyboardStateUI() {
  const forward = useKeyboardControls<Controls>((state) => state.forward)
  const backward = useKeyboardControls<Controls>((state) => state.backward)
  const leftward = useKeyboardControls<Controls>((state) => state.leftward)
  const rightward = useKeyboardControls<Controls>((state) => state.rightward)
  const jump = useKeyboardControls<Controls>((state) => state.jump)
  const run = useKeyboardControls<Controls>((state) => state.run)
  const action1 = useKeyboardControls<Controls>((state) => state.action1)
  const action2 = useKeyboardControls<Controls>((state) => state.action2)
  const action3 = useKeyboardControls<Controls>((state) => state.action3)

  return (
    <div className="absolute top-4 left-4 bg-white text-black p-2 rounded shadow z-10 w-40">
      <h3 className="font-bold mb-1">Active Keys:</h3>
      <ul>
        <li>Forward: {forward ? "true" : "false"}</li>
        <li>Backward: {backward ? "true" : "false"}</li>
        <li>Leftward: {leftward ? "true" : "false"}</li>
        <li>Rightward: {rightward ? "true" : "false"}</li>
        <li>Jump: {jump ? "true" : "false"}</li>
        <li>Run: {run ? "true" : "false"}</li>
        <li>Action 1: {action1 ? "true" : "false"}</li>
        <li>Action 2: {action2 ? "true" : "false"}</li>
        <li>Action 3: {action3 ? "true" : "false"}</li>
      </ul>
    </div>
  )
}

function Experience() {
  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="royalblue" />
      </mesh>
    </Canvas>
  )
}

export default function Example() {
  // Memoize the map to prevent unnecessary re-renders
  const map = useMemo(() => keyboardMap, [])

  return (
    <div className="h-screen relative">
      <KeyboardControls map={map}>
        {/* UI component needs to be inside KeyboardControls to use the hook */}
        {/* Canvas component needs to be inside KeyboardControls to use the hook */}
        <Experience />
        <KeyboardStateUI />
      </KeyboardControls>
    </div>
  )
}

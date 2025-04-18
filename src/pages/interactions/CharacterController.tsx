import { useEffect, useRef } from "react"
import { Group, Object3D, Vector3 } from "three"
import { degToRad, MathUtils } from "three/src/math/MathUtils.js"
import { Canvas, useFrame } from "@react-three/fiber"
import { Capsule, KeyboardControls, useKeyboardControls } from "@react-three/drei"
import { CapsuleCollider, Physics, RapierRigidBody, RigidBody } from "@react-three/rapier"
import { useControls } from "leva"

const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "run", keys: ["Shift"] },
]

const normalizeAngle = (angle: number) => {
  while (angle > Math.PI) angle -= 2 * Math.PI
  while (angle < -Math.PI) angle += 2 * Math.PI
  return angle
}

const lerpAngle = (start: number, end: number, t: number) => {
  start = normalizeAngle(start)
  end = normalizeAngle(end)
  if (Math.abs(end - start) > Math.PI) {
    if (end > start) {
      start += 2 * Math.PI
    } else {
      end += 2 * Math.PI
    }
  }
  return normalizeAngle(start + (end - start) * t)
}

export default function Example() {
  const { debug } = useControls({
    debug: false,
  })

  return (
    <div className="h-screen">
      <KeyboardControls map={keyboardMap}>
        <Canvas shadows className="touch-none">
          <ambientLight intensity={0.5} />
          <directionalLight castShadow position={[5, 10, 5]} intensity={1} />
          <Physics debug={debug}>
            <CharacterController />
            <RigidBody type="fixed" position={[0, -0.25, 0]}>
              <mesh receiveShadow>
                <boxGeometry args={[10, 0.5, 10]} />
                <meshStandardMaterial color="#222" />
              </mesh>
            </RigidBody>
          </Physics>
        </Canvas>
      </KeyboardControls>
    </div>
  )
}

function CharacterController() {
  const { walkSpeed, runSpeed, rotationSpeed, wireframe } = useControls(
    "Character Control",
    {
      walkSpeed: { min: 0.1, max: 4, step: 0.1, value: 1.6 },
      runSpeed: { min: 0.2, max: 12, step: 0.1, value: 3.2 },
      rotationSpeed: {
        min: degToRad(0.1),
        max: degToRad(5),
        step: degToRad(0.1),
        value: degToRad(0.5),
      },
      wireframe: false,
    }
  )

  const radius = 1
  const height = 2
  const rigidBody = useRef<RapierRigidBody>(null!)
  const container = useRef<Group>(null!)
  const character = useRef<Group>(null!)
  const cameraTarget = useRef<Object3D>(null!)
  const cameraPosition = useRef<Object3D>(null!)
  const cameraWorldPosition = useRef(new Vector3())
  const cameraLookAtWorldPosition = useRef(new Vector3())
  const cameraLookAt = useRef(new Vector3())
  const rotationTarget = useRef(0)
  const characterRotationTarget = useRef(0)
  const isClicking = useRef(false)
  const mousePosition = useRef({ x: 0, y: 0 })
  const [, get] = useKeyboardControls()

  useEffect(() => {
    const onMouseDown = () => {
      isClicking.current = true
    }
    const onMouseUp = () => {
      isClicking.current = false
    }
    const onMouseMove = (event: MouseEvent) => {
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mousePosition.current.y = (event.clientY / window.innerHeight) * 2 - 1
    }
    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mouseup", onMouseUp)
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("touchstart", onMouseDown)
    document.addEventListener("touchend", onMouseUp)
    return () => {
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("touchstart", onMouseDown)
      document.removeEventListener("touchend", onMouseUp)
    }
  })

  useFrame(({ camera }) => {
    const velocity = rigidBody.current.linvel()
    const movement = { x: 0, z: 0 }
    let speed = get().run ? runSpeed : walkSpeed

    if (get().forward) movement.z = 1
    if (get().backward) movement.z = -1
    if (get().left) movement.x = 1
    if (get().right) movement.x = -1

    if (isClicking.current) {
      if (Math.abs(mousePosition.current.x) > 0.1) {
        movement.x = -mousePosition.current.x
      }
      movement.z = mousePosition.current.y + 0.4
      if (Math.abs(movement.x) > 0.5 || Math.abs(movement.z) > 0.5) {
        speed = runSpeed
      }
    }

    if (movement.x !== 0) rotationTarget.current += rotationSpeed * movement.x
    if (movement.x !== 0 || movement.z !== 0) {
      characterRotationTarget.current = Math.atan2(movement.x, movement.z)
      velocity.x =
        Math.sin(rotationTarget.current + characterRotationTarget.current) * speed
      velocity.z =
        Math.cos(rotationTarget.current + characterRotationTarget.current) * speed
    }

    container.current.rotation.y = MathUtils.lerp(
      container.current.rotation.y,
      rotationTarget.current,
      0.1
    )

    character.current.rotation.y = lerpAngle(
      character.current.rotation.y,
      characterRotationTarget.current,
      0.1
    )

    rigidBody.current.setLinvel(velocity, true)

    cameraPosition.current.getWorldPosition(cameraWorldPosition.current)
    cameraTarget.current.getWorldPosition(cameraLookAtWorldPosition.current)
    cameraLookAt.current.lerp(cameraLookAtWorldPosition.current, 0.1)
    camera.position.lerp(cameraWorldPosition.current, 0.1)
    camera.lookAt(cameraLookAt.current)
  })

  return (
    <RigidBody ref={rigidBody} colliders={false} lockRotations position={[0, 2.5, 0]}>
      <group ref={container}>
        <group ref={cameraTarget} position-z={1.5} />
        <group ref={cameraPosition} position-y={4} position-z={-4} />
        <group ref={character}>
          <Capsule castShadow args={[radius, height]}>
            <meshStandardMaterial color="#38bdf8" wireframe={wireframe} />
          </Capsule>
        </group>
      </group>
      <CapsuleCollider args={[height / 2, radius]} />
    </RigidBody>
  )
}

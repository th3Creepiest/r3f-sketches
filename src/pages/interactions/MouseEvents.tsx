import { useState } from "react"
import { Canvas } from "@react-three/fiber"

const MAX_EVENTS = 5

export default function Example() {
  const [events, setEvents] = useState<string[]>(["Interact with the cube!"])

  const addEvent = (newEvent: string) => {
    setEvents((prevEvents) => {
      const updatedEvents = [newEvent, ...prevEvents]
      if (updatedEvents.length > MAX_EVENTS) updatedEvents.length = MAX_EVENTS
      return updatedEvents
    })
  }

  return (
    <div className="h-screen relative">
      <div className="absolute top-4 left-4 bg-white text-black p-2 rounded shadow z-10">
        <ul>
          {events.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
      <Canvas>
        <ambientLight intensity={2} />
        <mesh
          onClick={() => addEvent("click")}
          onContextMenu={() => addEvent("context menu")}
          onDoubleClick={() => addEvent("double click")}
          onWheel={() => addEvent("wheel spins")}
          onPointerUp={() => addEvent("up")}
          onPointerDown={() => addEvent("down")}
          onPointerOver={() => addEvent("over")}
          onPointerOut={() => addEvent("out")}
          onPointerEnter={() => addEvent("enter")}
          onPointerLeave={() => addEvent("leave")}
          onPointerMove={() => addEvent("move")}
          onPointerMissed={() => addEvent("missed")}
          // onUpdate is for prop changes, not typically user interaction
          onUpdate={() => addEvent("props have been updated")}
        >
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="royalblue" />
        </mesh>
      </Canvas>
    </div>
  )
}

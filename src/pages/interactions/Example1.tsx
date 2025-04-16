import { Canvas } from "@react-three/fiber"

export default function Example() {
  return (
    <div className="h-screen">
      <Canvas>
        <mesh
          onClick={() => console.log("click")}
          onContextMenu={() => console.log("context menu")}
          onDoubleClick={() => console.log("double click")}
          onWheel={() => console.log("wheel spins")}
          onPointerUp={() => console.log("up")}
          onPointerDown={() => console.log("down")}
          onPointerOver={() => console.log("over")}
          onPointerOut={() => console.log("out")}
          onPointerEnter={() => console.log("enter")}
          onPointerLeave={() => console.log("leave")}
          onPointerMove={() => console.log("move")}
          onPointerMissed={() => console.log("missed")}
          onUpdate={() => console.log("props have been updated")}
        >
          <boxGeometry />
        </mesh>
      </Canvas>
    </div>
  )
}

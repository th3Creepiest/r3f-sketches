import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useControls, folder } from "leva"

export default function Example() {
  const {
    autoRotate,
    autoRotateSpeed,
    enableRotate,
    rotateSpeed,
    enablePan,
    panSpeed,
    screenSpacePanning,
    enableZoom,
    zoomSpeed,
    minZoom,
    maxZoom,
    zoomToCursor,
    maxDistance,
    minDistance,
    enableDamping,
    dampingFactor,
    maxAzimuthAngle,
    minAzimuthAngle,
    maxPolarAngle,
    minPolarAngle,
    targetX,
    targetY,
    targetZ,
  } = useControls({
    Auto_Rotation: folder(
      {
        autoRotate: { value: true, label: "Enable" },
        autoRotateSpeed: { value: 2, min: -10, max: 10, step: 0.1, label: "Speed" },
      },
      { collapsed: true }
    ),
    Rotation: folder(
      {
        enableRotate: { value: true, label: "Enable" },
        rotateSpeed: { value: 1, min: -10, max: 10, step: 0.1, label: "Speed" },
      },
      { collapsed: true }
    ),
    Pan: folder(
      {
        enablePan: { value: true, label: "Enable" },
        panSpeed: { value: 1, min: -10, max: 10, step: 0.1, label: "Speed" },
        screenSpacePanning: { value: true },
      },
      { collapsed: true }
    ),
    Zoom: folder(
      {
        enableZoom: { value: true, label: "Enable" },
        zoomSpeed: { value: 1, min: -10, max: 10, step: 0.1, label: "Speed" },
        minZoom: { value: 0, min: 0, max: 10, step: 0.1, label: "Min" },
        maxZoom: { value: 10, min: 0, max: 10, step: 0.1, label: "Max" },
        zoomToCursor: { value: false, label: "to Cursor" },
      },
      { collapsed: true }
    ),
    Dolly_Distance: folder(
      {
        maxDistance: { value: 1000, min: 0, max: 1000, step: 0.1, label: "Max" },
        minDistance: { value: 0, min: 0, max: 10, step: 0.1, label: "Min" },
      },
      { collapsed: true }
    ),
    Damping: folder(
      {
        enableDamping: { value: true, label: "Enable" },
        dampingFactor: { value: 0.05, min: 0, max: 1, step: 0.01, label: "Factor" },
      },
      { collapsed: true }
    ),
    Azimuth_Angle: folder(
      {
        maxAzimuthAngle: {
          value: Infinity,
          max: Infinity,
          min: -Math.PI * 2,
          step: 0.1,
          label: "Max",
        },
        minAzimuthAngle: {
          value: -Infinity,
          max: Math.PI * 2,
          min: -Infinity,
          step: 0.1,
          label: "Min",
        },
      },
      { collapsed: true }
    ),
    Polar_Angle: folder(
      {
        maxPolarAngle: { value: Math.PI, min: 0, max: Math.PI, step: 0.1, label: "Max" },
        minPolarAngle: { value: 0, min: 0, max: Math.PI, step: 0.1, label: "Min" },
      },
      { collapsed: true }
    ),
    Target: folder(
      {
        targetX: { value: 0, min: -10, max: 10, step: 0.1, label: "X" },
        targetY: { value: 0, min: -10, max: 10, step: 0.1, label: "Y" },
        targetZ: { value: 0, min: -10, max: 10, step: 0.1, label: "Z" },
      },
      { collapsed: true }
    ),
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
        <OrbitControls
          autoRotate={autoRotate}
          autoRotateSpeed={autoRotateSpeed}
          enableRotate={enableRotate}
          rotateSpeed={rotateSpeed}
          enablePan={enablePan}
          panSpeed={panSpeed}
          enableZoom={enableZoom}
          screenSpacePanning={screenSpacePanning}
          zoomSpeed={zoomSpeed}
          minZoom={minZoom}
          maxZoom={maxZoom}
          zoomToCursor={zoomToCursor}
          maxDistance={maxDistance}
          minDistance={minDistance}
          enableDamping={enableDamping}
          dampingFactor={dampingFactor}
          maxAzimuthAngle={maxAzimuthAngle}
          minAzimuthAngle={minAzimuthAngle}
          maxPolarAngle={maxPolarAngle}
          minPolarAngle={minPolarAngle}
          target={[targetX, targetY, targetZ]}
        />
      </Canvas>
    </div>
  )
}

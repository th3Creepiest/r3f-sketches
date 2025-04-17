import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route, Link } from "react-router"
import "./index.css"

import CamerasPage from "./pages/cameras/Cameras.tsx"
import PerspectiveCamera from "./pages/cameras/PerspectiveCamera.tsx"
import PerspectiveCameraHelper from "./pages/cameras/PerspectiveCameraHelper.tsx"
import OrthographicCamera from "./pages/cameras/OrthographicCamera.tsx"
import OrthographicCameraHelper from "./pages/cameras/OrthographicCameraHelper.tsx"
import OrbitControls from "./pages/cameras/OrbitControls.tsx"
import FirstPersonControls from "./pages/cameras/FirstPersonControls.tsx"

import InteractionsPage from "./pages/interactions/Interactions.tsx"
import KeyEvents from "./pages/interactions/KeyEvents.tsx"
import MouseEvents from "./pages/interactions/MouseEvents.tsx"

import LightsPage from "./pages/lights/Lights.tsx"
import AmbientLight from "./pages/lights/AmbientLight.tsx"
import DirectionalLight from "./pages/lights/DirectionalLight.tsx"
import HemisphereLight from "./pages/lights/HemisphereLight.tsx"
import PointLight from "./pages/lights/PointLight.tsx"
import RectAreaLight from "./pages/lights/RectAreaLight.tsx"
import SpotLight from "./pages/lights/SpotLight.tsx"

import MaterialsPage from "./pages/materials/Materials.tsx"
import MeshBasicMaterial from "./pages/materials/MeshBasicMaterial.tsx"
import MeshDepthMaterial from "./pages/materials/MeshDepthMaterial.tsx"
import MeshLambertMaterial from "./pages/materials/MeshLambertMaterial.tsx"
import MeshNormalMaterial from "./pages/materials/MeshNormalMaterial.tsx"
import MeshPhongMaterial from "./pages/materials/MeshPhongMaterial.tsx"
import MeshPhysicalMaterial from "./pages/materials/MeshPhysicalMaterial.tsx"
import MeshStandardMaterial from "./pages/materials/MeshStandardMaterial.tsx"
import MeshToonMaterial from "./pages/materials/MeshToonMaterial.tsx"
import PointsMaterial from "./pages/materials/PointsMaterial.tsx"

import Forces from "./pages/physics/Forces.tsx"
import Gravity from "./pages/physics/Gravity.tsx"
import RigidBodies from "./pages/physics/RigidBodies.tsx"

import ASCII from "./pages/postprocessing/ASCII.tsx"
import Autofocus from "./pages/postprocessing/Autofocus.tsx"
import Bloom1 from "./pages/postprocessing/Bloom1.tsx"
import Bloom2 from "./pages/postprocessing/Bloom2.tsx"
import BrightnessContrast from "./pages/postprocessing/BrightnessContrast.tsx"
import ChromaticAberration from "./pages/postprocessing/ChromaticAberration.tsx"
import ColorAverage from "./pages/postprocessing/ColorAverage.tsx"
import DepthOfField from "./pages/postprocessing/DepthOfField.tsx"
import DotScreen from "./pages/postprocessing/DotScreen.tsx"
import Glitch from "./pages/postprocessing/Glitch.tsx"
import Grid from "./pages/postprocessing/Grid.tsx"
import HueSaturation from "./pages/postprocessing/HueSaturation.tsx"
import Noise from "./pages/postprocessing/Noise.tsx"
import Pixelation from "./pages/postprocessing/Pixelation.tsx"
import Ramp from "./pages/postprocessing/Ramp.tsx"
import Scanline from "./pages/postprocessing/Scanline.tsx"
import Sepia from "./pages/postprocessing/Sepia.tsx"
import Vignette from "./pages/postprocessing/Vignette.tsx"

import DreiBox from "./pages/shapes/DreiBox.tsx"
import DreiCapsule from "./pages/shapes/DreiCapsule.tsx"
import DreiRoundedBox from "./pages/shapes/DreiRoundedBox.tsx"
import Primitives from "./pages/shapes/Primitives.tsx"

import Textures1 from "./pages/textures/Textures1.tsx"
import Textures2 from "./pages/textures/Textures2.tsx"

import Example3 from "./pages/Example3"
import Example4 from "./pages/Example4"
import Example5 from "./pages/Example5"
import Transforms from "./pages/Transforms"
import HelperGizmos from "./pages/HelperGizmos.tsx"
import LevaGui from "./pages/LevaGui.tsx"
import Fog from "./pages/Fog"
import Keen from "./pages/Keen.tsx"
import Suzanne from "./pages/Suzanne.tsx"
import Scene from "./pages/Scene"
import Cubes from "./pages/Cubes.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="cameras" element={<CamerasPage />} />
        <Route path="perspective-camera" element={<PerspectiveCamera />} />
        <Route path="perspective-camera-helper" element={<PerspectiveCameraHelper />} />
        <Route path="orthographic-camera" element={<OrthographicCamera />} />
        <Route path="orthographic-camera-helper" element={<OrthographicCameraHelper />} />
        <Route path="orbit-controls" element={<OrbitControls />} />
        <Route path="first-person-controls" element={<FirstPersonControls />} />

        <Route path="interactions" element={<InteractionsPage />} />
        <Route path="key-events" element={<KeyEvents />} />
        <Route path="mouse-events" element={<MouseEvents />} />

        <Route path="lights" element={<LightsPage />} />
        <Route path="ambient-light" element={<AmbientLight />} />
        <Route path="directional-light" element={<DirectionalLight />} />
        <Route path="hemisphere-light" element={<HemisphereLight />} />
        <Route path="point-light" element={<PointLight />} />
        <Route path="rect-area-light" element={<RectAreaLight />} />
        <Route path="spot-light" element={<SpotLight />} />

        <Route path="materials" element={<MaterialsPage />} />
        <Route path="mesh-basic-material" element={<MeshBasicMaterial />} />
        <Route path="mesh-depth-material" element={<MeshDepthMaterial />} />
        <Route path="mesh-lambert-material" element={<MeshLambertMaterial />} />
        <Route path="mesh-normal-material" element={<MeshNormalMaterial />} />
        <Route path="mesh-phong-material" element={<MeshPhongMaterial />} />
        <Route path="mesh-physical-material" element={<MeshPhysicalMaterial />} />
        <Route path="mesh-standard-material" element={<MeshStandardMaterial />} />
        <Route path="mesh-toon-material" element={<MeshToonMaterial />} />
        <Route path="points-material" element={<PointsMaterial />} />

        <Route path="forces" element={<Forces />} />
        <Route path="gravity" element={<Gravity />} />
        <Route path="rigid-bodies" element={<RigidBodies />} />

        <Route path="ascii" element={<ASCII />} />
        <Route path="autofocus" element={<Autofocus />} />
        <Route path="bloom-1" element={<Bloom1 />} />
        <Route path="bloom-2" element={<Bloom2 />} />
        <Route path="brightness-contrast" element={<BrightnessContrast />} />
        <Route path="chromatic-aberration" element={<ChromaticAberration />} />
        <Route path="color-average" element={<ColorAverage />} />
        <Route path="depth-of-field" element={<DepthOfField />} />
        <Route path="dot-screen" element={<DotScreen />} />
        <Route path="glitch" element={<Glitch />} />
        <Route path="grid" element={<Grid />} />
        <Route path="hue-saturation" element={<HueSaturation />} />
        <Route path="noise" element={<Noise />} />
        <Route path="pixelation" element={<Pixelation />} />
        <Route path="ramp" element={<Ramp />} />
        <Route path="scanline" element={<Scanline />} />
        <Route path="sepia" element={<Sepia />} />
        <Route path="vignette" element={<Vignette />} />

        <Route path="drei-box" element={<DreiBox />} />
        <Route path="drei-capsule" element={<DreiCapsule />} />
        <Route path="drei-rounded-box" element={<DreiRoundedBox />} />
        <Route path="primitives" element={<Primitives />} />

        <Route path="textures-1" element={<Textures1 />} />
        <Route path="textures-2" element={<Textures2 />} />

        <Route path="example-3" element={<Example3 />} />
        <Route path="example-4" element={<Example4 />} />
        <Route path="example-5" element={<Example5 />} />
        <Route path="transforms" element={<Transforms />} />
        <Route path="helper-gizmos" element={<HelperGizmos />} />
        <Route path="leva-gui" element={<LevaGui />} />
        <Route path="fog" element={<Fog />} />
        <Route path="keen" element={<Keen />} />
        <Route path="suzanne" element={<Suzanne />} />
        <Route path="scene" element={<Scene />} />
        <Route path="cubes" element={<Cubes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold text-center text-white mb-4">Three.js</h1>
      <nav className="max-w-2xl mx-auto space-y-6">
        <Cameras />
        <Interactions />
        <Lights />
        <Materials />
        <Physics />
        <Postprocessing />
        <Textures />
        <Other />
      </nav>
    </div>
  )
}

function Cameras() {
  const links = [
    { to: "perspective-camera", text: "Perspective Camera" },
    { to: "perspective-camera-helper", text: "Perspective Camera Helper" },
    { to: "orthographic-camera", text: "Orthographic Camera" },
    { to: "orthographic-camera-helper", text: "Orthographic Camera Helper" },
    { to: "orbit-controls", text: "Orbit Controls" },
    { to: "first-person-controls", text: "First Person Controls" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <Link
        key={"cameras"}
        to={"cameras"}
        className="hover:text-red-400 transition-colors"
      >
        <h2 className="text-xl font-semibold mb-4">Cameras</h2>
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {links.map(({ to, text }) => (
          <Link key={to} to={to} className="hover:text-blue-400 transition-colors">
            {text}
          </Link>
        ))}
      </div>
    </section>
  )
}

function Interactions() {
  const links = [
    { to: "key-events", text: "Key Events" },
    { to: "mouse-events", text: "Mouse Events" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <Link
        key={"interactions"}
        to={"interactions"}
        className="hover:text-red-400 transition-colors"
      >
        <h2 className="text-xl font-semibold mb-4">Interactions</h2>
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {links.map(({ to, text }) => (
          <Link key={to} to={to} className="hover:text-blue-400 transition-colors">
            {text}
          </Link>
        ))}
      </div>
    </section>
  )
}

function Lights() {
  const links = [
    { to: "ambient-light", text: "Ambient Light" },
    { to: "directional-light", text: "Directional Light" },
    { to: "hemisphere-light", text: "Hemisphere Light" },
    { to: "point-light", text: "Point Light" },
    { to: "rect-area-light", text: "Rect Area Light" },
    { to: "spot-light", text: "Spot Light" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <Link key={"lights"} to={"lights"} className="hover:text-red-400 transition-colors">
        <h2 className="text-xl font-semibold mb-4">Lights</h2>
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {links.map(({ to, text }) => (
          <Link key={to} to={to} className="hover:text-blue-400 transition-colors">
            {text}
          </Link>
        ))}
      </div>
    </section>
  )
}

function Materials() {
  const links = [
    { to: "mesh-basic-material", text: "Mesh Basic Material" },
    { to: "mesh-depth-material", text: "Mesh Depth Material" },
    { to: "mesh-lambert-material", text: "Mesh Lambert Material" },
    { to: "mesh-normal-material", text: "Mesh Normal Material" },
    { to: "mesh-phong-material", text: "Mesh Phong Material" },
    { to: "mesh-physical-material", text: "Mesh Physical Material" },
    { to: "mesh-standard-material", text: "Mesh Standard Material" },
    { to: "mesh-toon-material", text: "Mesh Toon Material" },
    { to: "points-material", text: "Points Material" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <Link
        key={"materials"}
        to={"materials"}
        className="hover:text-red-400 transition-colors"
      >
        <h2 className="text-xl font-semibold mb-4">Materials</h2>
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {links.map(({ to, text }) => (
          <Link key={to} to={to} className="hover:text-blue-400 transition-colors">
            {text}
          </Link>
        ))}
      </div>
    </section>
  )
}

function Physics() {
  const links = [
    { to: "forces", text: "Forces" },
    { to: "gravity", text: "Gravity" },
    { to: "rigid-bodies", text: "RigidBodies" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <h2 className="text-xl font-semibold mb-4">Physics</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {links.map(({ to, text }) => (
          <Link key={to} to={to} className="hover:text-blue-400 transition-colors">
            {text}
          </Link>
        ))}
      </div>
    </section>
  )
}
function Postprocessing() {
  const links = [
    { to: "ascii", text: "ASCII" },
    { to: "autofocus", text: "Autofocus" },
    { to: "bloom-1", text: "Bloom 1" },
    { to: "bloom-2", text: "Bloom 2" },
    { to: "brightness-contrast", text: "Brightness Contrast" },
    { to: "chromatic-aberration", text: "Chromatic Aberration" },
    { to: "color-average", text: "Color Average" },
    { to: "depth-of-field", text: "Depth of Field" },
    { to: "dot-screen", text: "Dot Screen" },
    { to: "glitch", text: "Glitch" },
    { to: "grid", text: "Grid" },
    { to: "hue-saturation", text: "Hue Saturation" },
    { to: "noise", text: "Noise" },
    { to: "pixelation", text: "Pixelation" },
    { to: "ramp", text: "Ramp" },
    { to: "scanline", text: "Scanline" },
    { to: "sepia", text: "Sepia" },
    { to: "vignette", text: "Vignette" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <h2 className="text-xl font-semibold mb-4">PostProcessing</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {links.map(({ to, text }) => (
          <Link key={to} to={to} className="hover:text-blue-400 transition-colors">
            {text}
          </Link>
        ))}
      </div>
    </section>
  )
}

function Textures() {
  const links = [
    { to: "textures-1", text: "Textures 1" },
    { to: "textures-2", text: "Textures 2" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <h2 className="text-xl font-semibold mb-4">Textures</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {links.map(({ to, text }) => (
          <Link key={to} to={to} className="hover:text-blue-400 transition-colors">
            {text}
          </Link>
        ))}
      </div>
    </section>
  )
}

function Other() {
  const links = [
    { to: "example-3", text: "Example 3" },
    { to: "example-4", text: "Example 4" },
    { to: "example-5", text: "Example 5" },
    { to: "transforms", text: "Transforms" },
    { to: "helper-gizmos", text: "Helper Gizmos" },
    { to: "leva-gui", text: "Leva GUI" },
    { to: "fog", text: "Fog" },
    { to: "keen", text: "Keen" },
    { to: "Suzanne", text: "Suzanne" },
    { to: "scene", text: "Scene" },
    { to: "cubes", text: "Cubes" },
    { to: "drei-box", text: "Drei Box" },
    { to: "drei-capsule", text: "Drei Capsule" },
    { to: "drei-rounded-box", text: "Drei Rounded Box" },
    { to: "primitives", text: "Primitives" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <h2 className="text-xl font-semibold mb-4">Other</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {links.map(({ to, text }) => (
          <Link key={to} to={to} className="hover:text-blue-400 transition-colors">
            {text}
          </Link>
        ))}
      </div>
    </section>
  )
}

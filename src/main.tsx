import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route, Link } from "react-router"
import "./index.css"

import AmbientLight from "./pages/lights/AmbientLight.tsx"
import ASCII from "./pages/postprocessing/ASCII.tsx"
import Autofocus from "./pages/postprocessing/Autofocus.tsx"
import Backdrop from "./pages/drei_staging/Backdrop"
import BBAnchor from "./pages/drei_staging/BBAnchor.tsx"
import BigVegas from "./pages/models/BigVegas.tsx"
import Bloom1 from "./pages/postprocessing/Bloom1.tsx"
import Bloom2 from "./pages/postprocessing/Bloom2.tsx"
import BrightnessContrast from "./pages/postprocessing/BrightnessContrast.tsx"
import CameraShake from "./pages/drei_staging/CameraShake.tsx"
import CamerasPage from "./pages/cameras/Cameras.tsx"
import CharacterController from "./pages/interactions/CharacterController.tsx"
import ChromaticAberration from "./pages/postprocessing/ChromaticAberration.tsx"
import Cloud from "./pages/drei_staging/Cloud.tsx"
import ColorAverage from "./pages/postprocessing/ColorAverage.tsx"
import Cubes from "./pages/shapes/Cubes.tsx"
import DepthOfField from "./pages/postprocessing/DepthOfField.tsx"
import DirectionalLight from "./pages/lights/DirectionalLight.tsx"
import DotScreen from "./pages/postprocessing/DotScreen.tsx"
import DreiBox from "./pages/shapes/DreiBox.tsx"
import DreiCapsule from "./pages/shapes/DreiCapsule.tsx"
import DreiRoundedBox from "./pages/shapes/DreiRoundedBox.tsx"
import Example from "./pages/animations/Example.tsx"
import Example4 from "./pages/Example4"
import FirstPersonControls from "./pages/cameras/FirstPersonControls.tsx"
import Fisheye from "./pages/postprocessing/Fisheye.tsx"
import Float from "./pages/drei_staging/Float.tsx"
import Fog from "./pages/Fog"
import Forces from "./pages/physics/Forces.tsx"
import Glitch from "./pages/postprocessing/Glitch.tsx"
import Gravity from "./pages/physics/Gravity.tsx"
import Grid from "./pages/postprocessing/Grid.tsx"
import HelperGizmos from "./pages/HelperGizmos.tsx"
import HemisphereLight from "./pages/lights/HemisphereLight.tsx"
import HueSaturation from "./pages/postprocessing/HueSaturation.tsx"
import InteractionsPage from "./pages/interactions/Interactions.tsx"
import Keen from "./pages/models/Keen.tsx"
import KeyEvents from "./pages/interactions/KeyEvents.tsx"
import LevaGui from "./pages/LevaGui.tsx"
import LightsPage from "./pages/lights/Lights.tsx"
import MaterialsPage from "./pages/materials/Materials.tsx"
import MeshBasicMaterial from "./pages/materials/MeshBasicMaterial.tsx"
import MeshDepthMaterial from "./pages/materials/MeshDepthMaterial.tsx"
import MeshLambertMaterial from "./pages/materials/MeshLambertMaterial.tsx"
import MeshNormalMaterial from "./pages/materials/MeshNormalMaterial.tsx"
import MeshPhongMaterial from "./pages/materials/MeshPhongMaterial.tsx"
import MeshPhysicalMaterial from "./pages/materials/MeshPhysicalMaterial.tsx"
import MeshStandardMaterial from "./pages/materials/MeshStandardMaterial.tsx"
import MeshToonMaterial from "./pages/materials/MeshToonMaterial.tsx"
import MouseEvents from "./pages/interactions/MouseEvents.tsx"
import Noise from "./pages/postprocessing/Noise.tsx"
import OrbitControls from "./pages/cameras/OrbitControls.tsx"
import OrthographicCamera from "./pages/cameras/OrthographicCamera.tsx"
import OrthographicCameraHelper from "./pages/cameras/OrthographicCameraHelper.tsx"
import PerspectiveCamera from "./pages/cameras/PerspectiveCamera.tsx"
import PerspectiveCameraHelper from "./pages/cameras/PerspectiveCameraHelper.tsx"
import Pixelation from "./pages/postprocessing/Pixelation.tsx"
import PointLight from "./pages/lights/PointLight.tsx"
import Points from "./pages/animations/Points.tsx"
import PointsMaterial from "./pages/materials/PointsMaterial.tsx"
import Primitives from "./pages/shapes/Primitives.tsx"
import Ramp from "./pages/postprocessing/Ramp.tsx"
import RectAreaLight from "./pages/lights/RectAreaLight.tsx"
import RigidBodies from "./pages/physics/RigidBodies.tsx"
import Scanline from "./pages/postprocessing/Scanline.tsx"
import Sepia from "./pages/postprocessing/Sepia.tsx"
import Sparkles from "./pages/drei_staging/Sparkles.tsx"
import SpotLight from "./pages/lights/SpotLight.tsx"
import Stars from "./pages/drei_staging/Stars"
import Suzanne from "./pages/models/Suzanne.tsx"
import SuzanneDrei from "./pages/models/SuzanneDrei.tsx"
import Textures1 from "./pages/textures/Textures1.tsx"
import Textures2 from "./pages/textures/Textures2.tsx"
import Transforms from "./pages/Transforms"
import Vignette from "./pages/postprocessing/Vignette.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="ambient-light" element={<AmbientLight />} />
        <Route path="ascii" element={<ASCII />} />
        <Route path="autofocus" element={<Autofocus />} />
        <Route path="backdrop" element={<Backdrop />} />
        <Route path="bb-anchor" element={<BBAnchor />} />
        <Route path="big-vegas" element={<BigVegas />} />
        <Route path="bloom-1" element={<Bloom1 />} />
        <Route path="bloom-2" element={<Bloom2 />} />
        <Route path="brightness-contrast" element={<BrightnessContrast />} />
        <Route path="camera-shake" element={<CameraShake />} />
        <Route path="cameras" element={<CamerasPage />} />
        <Route path="character-controller" element={<CharacterController />} />
        <Route path="chromatic-aberration" element={<ChromaticAberration />} />
        <Route path="cloud" element={<Cloud />} />
        <Route path="color-average" element={<ColorAverage />} />
        <Route path="cubes" element={<Cubes />} />
        <Route path="depth-of-field" element={<DepthOfField />} />
        <Route path="directional-light" element={<DirectionalLight />} />
        <Route path="dot-screen" element={<DotScreen />} />
        <Route path="drei-box" element={<DreiBox />} />
        <Route path="drei-capsule" element={<DreiCapsule />} />
        <Route path="drei-rounded-box" element={<DreiRoundedBox />} />
        <Route path="example-4" element={<Example4 />} />
        <Route path="example" element={<Example />} />
        <Route path="first-person-controls" element={<FirstPersonControls />} />
        <Route path="fisheye" element={<Fisheye />} />
        <Route path="float" element={<Float />} />
        <Route path="fog" element={<Fog />} />
        <Route path="forces" element={<Forces />} />
        <Route path="glitch" element={<Glitch />} />
        <Route path="gravity" element={<Gravity />} />
        <Route path="grid" element={<Grid />} />
        <Route path="helper-gizmos" element={<HelperGizmos />} />
        <Route path="hemisphere-light" element={<HemisphereLight />} />
        <Route path="hue-saturation" element={<HueSaturation />} />
        <Route path="interactions" element={<InteractionsPage />} />
        <Route path="keen" element={<Keen />} />
        <Route path="key-events" element={<KeyEvents />} />
        <Route path="leva-gui" element={<LevaGui />} />
        <Route path="lights" element={<LightsPage />} />
        <Route path="materials" element={<MaterialsPage />} />
        <Route path="mesh-basic-material" element={<MeshBasicMaterial />} />
        <Route path="mesh-depth-material" element={<MeshDepthMaterial />} />
        <Route path="mesh-lambert-material" element={<MeshLambertMaterial />} />
        <Route path="mesh-normal-material" element={<MeshNormalMaterial />} />
        <Route path="mesh-phong-material" element={<MeshPhongMaterial />} />
        <Route path="mesh-physical-material" element={<MeshPhysicalMaterial />} />
        <Route path="mesh-standard-material" element={<MeshStandardMaterial />} />
        <Route path="mesh-toon-material" element={<MeshToonMaterial />} />
        <Route path="mouse-events" element={<MouseEvents />} />
        <Route path="noise" element={<Noise />} />
        <Route path="orbit-controls" element={<OrbitControls />} />
        <Route path="orthographic-camera-helper" element={<OrthographicCameraHelper />} />
        <Route path="orthographic-camera" element={<OrthographicCamera />} />
        <Route path="perspective-camera-helper" element={<PerspectiveCameraHelper />} />
        <Route path="perspective-camera" element={<PerspectiveCamera />} />
        <Route path="pixelation" element={<Pixelation />} />
        <Route path="point-light" element={<PointLight />} />
        <Route path="points-material" element={<PointsMaterial />} />
        <Route path="points" element={<Points />} />
        <Route path="primitives" element={<Primitives />} />
        <Route path="ramp" element={<Ramp />} />
        <Route path="rect-area-light" element={<RectAreaLight />} />
        <Route path="rigid-bodies" element={<RigidBodies />} />
        <Route path="scanline" element={<Scanline />} />
        <Route path="sepia" element={<Sepia />} />
        <Route path="sparkles" element={<Sparkles />} />
        <Route path="spot-light" element={<SpotLight />} />
        <Route path="stars" element={<Stars />} />
        <Route path="suzanne-drei" element={<SuzanneDrei />} />
        <Route path="suzanne" element={<Suzanne />} />
        <Route path="textures-1" element={<Textures1 />} />
        <Route path="textures-2" element={<Textures2 />} />
        <Route path="transforms" element={<Transforms />} />
        <Route path="vignette" element={<Vignette />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold text-center text-white mb-4">Three.js</h1>
      <nav className="max-w-2xl mx-auto space-y-6">
        <Animations />
        <Cameras />
        <DreiStaging />
        <Interactions />
        <Lights />
        <Materials />
        <Models />
        <Physics />
        <Postprocessing />
        <Shapes />
        <Textures />
        <Other />
      </nav>
    </div>
  )
}

function Animations() {
  const links = [
    { to: "example", text: "Example" },
    { to: "points", text: "Points" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <h2 className="text-xl font-semibold mb-4">Animations</h2>
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

function DreiStaging() {
  const links = [
    { to: "backdrop", text: "Backdrop" },
    { to: "bb-anchor", text: "BBAnchor" },
    { to: "camera-shake", text: "Camera Shake" },
    { to: "cloud", text: "Cloud" },
    { to: "float", text: "Float" },
    { to: "sparkles", text: "Sparkles" },
    { to: "stars", text: "Stars" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <Link
        key={"cameras"}
        to={"cameras"}
        className="hover:text-red-400 transition-colors"
      >
        <h2 className="text-xl font-semibold mb-4">Drei Staging</h2>
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
    { to: "character-controller", text: "Character Controller" },
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

function Models() {
  const links = [
    { to: "big-vegas", text: "Big Vegas" },
    { to: "keen", text: "Keen" },
    { to: "suzanne", text: "Suzanne" },
    { to: "suzanne-drei", text: "Suzanne Drei" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <h2 className="text-xl font-semibold mb-4">Models</h2>
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
    { to: "fisheye", text: "Fisheye" },
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

function Shapes() {
  const links = [
    { to: "cubes", text: "Cubes" },
    { to: "drei-box", text: "Drei Box" },
    { to: "drei-capsule", text: "Drei Capsule" },
    { to: "drei-rounded-box", text: "Drei Rounded Box" },
    { to: "primitives", text: "Primitives" },
  ]
  return (
    <section className="border-t border-gray-800 pt-6">
      <h2 className="text-xl font-semibold mb-4">Shapes</h2>
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
    { to: "example-4", text: "Example 4" },
    { to: "transforms", text: "Transforms" },
    { to: "helper-gizmos", text: "Helper Gizmos" },
    { to: "leva-gui", text: "Leva GUI" },
    { to: "fog", text: "Fog" },
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

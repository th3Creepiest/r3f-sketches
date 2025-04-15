import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import "./index.css"

import App from "./App.tsx"

import Cameras from "./pages/cameras/Cameras.tsx"
import PerspectiveCamera from "./pages/cameras/PerspectiveCamera.tsx"
import PerspectiveCameraHelper from "./pages/cameras/PerspectiveCameraHelper.tsx"
import OrthographicCamera from "./pages/cameras/OrthographicCamera.tsx"
import OrthographicCameraHelper from "./pages/cameras/OrthographicCameraHelper.tsx"
import OrbitControls from "./pages/cameras/OrbitControls.tsx"
import FirstPersonControls from "./pages/cameras/FirstPersonControls.tsx"

import Lights from "./pages/lights/Lights.tsx"
import AmbientLight from "./pages/lights/AmbientLight.tsx"
import DirectionalLight from "./pages/lights/DirectionalLight.tsx"
import HemisphereLight from "./pages/lights/HemisphereLight.tsx"
import PointLight from "./pages/lights/PointLight.tsx"
import RectAreaLight from "./pages/lights/RectAreaLight.tsx"
import SpotLight from "./pages/lights/SpotLight.tsx"

import Materials from "./pages/materials/Materials.tsx"
import MeshBasicMaterial from "./pages/materials/MeshBasicMaterial.tsx"
import MeshDepthMaterial from "./pages/materials/MeshDepthMaterial.tsx"
import MeshLambertMaterial from "./pages/materials/MeshLambertMaterial.tsx"
import MeshNormalMaterial from "./pages/materials/MeshNormalMaterial.tsx"
import MeshPhongMaterial from "./pages/materials/MeshPhongMaterial.tsx"
import MeshPhysicalMaterial from "./pages/materials/MeshPhysicalMaterial.tsx"
import MeshStandardMaterial from "./pages/materials/MeshStandardMaterial.tsx"
import MeshToonMaterial from "./pages/materials/MeshToonMaterial.tsx"

import PhysicsExample1 from "./pages/physics/Example1.tsx"
import PhysicsExample2 from "./pages/physics/Example2.tsx"
import PhysicsExample3 from "./pages/physics/Example3.tsx"

import Textures1 from "./pages/textures/Textures1.tsx"
import Textures2 from "./pages/textures/Textures2.tsx"

import Example1 from "./pages/Example1"
import Example2 from "./pages/Example2"
import Example3 from "./pages/Example3"
import Primitives from "./pages/Primitives"
import Transforms from "./pages/Transforms"
import HelperGizmos from "./pages/HelperGizmos.tsx"
import LevaGui from "./pages/LevaGui.tsx"
import Fog from "./pages/Fog"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="cameras" element={<Cameras />} />
        <Route path="perspective-camera" element={<PerspectiveCamera />} />
        <Route path="perspective-camera-helper" element={<PerspectiveCameraHelper />} />
        <Route path="orthographic-camera" element={<OrthographicCamera />} />
        <Route path="orthographic-camera-helper" element={<OrthographicCameraHelper />} />
        <Route path="orbit-controls" element={<OrbitControls />} />
        <Route path="first-person-controls" element={<FirstPersonControls />} />

        <Route path="lights" element={<Lights />} />
        <Route path="ambient-light" element={<AmbientLight />} />
        <Route path="directional-light" element={<DirectionalLight />} />
        <Route path="hemisphere-light" element={<HemisphereLight />} />
        <Route path="point-light" element={<PointLight />} />
        <Route path="rect-area-light" element={<RectAreaLight />} />
        <Route path="spot-light" element={<SpotLight />} />

        <Route path="materials" element={<Materials />} />
        <Route path="mesh-basic-material" element={<MeshBasicMaterial />} />
        <Route path="mesh-depth-material" element={<MeshDepthMaterial />} />
        <Route path="mesh-lambert-material" element={<MeshLambertMaterial />} />
        <Route path="mesh-normal-material" element={<MeshNormalMaterial />} />
        <Route path="mesh-phong-material" element={<MeshPhongMaterial />} />
        <Route path="mesh-physical-material" element={<MeshPhysicalMaterial />} />
        <Route path="mesh-standard-material" element={<MeshStandardMaterial />} />
        <Route path="mesh-toon-material" element={<MeshToonMaterial />} />

        <Route path="physics-example-1" element={<PhysicsExample1 />} />
        <Route path="physics-example-2" element={<PhysicsExample2 />} />
        <Route path="physics-example-3" element={<PhysicsExample3 />} />

        <Route path="textures-1" element={<Textures1 />} />
        <Route path="textures-2" element={<Textures2 />} />

        <Route path="example-1" element={<Example1 />} />
        <Route path="example-2" element={<Example2 />} />
        <Route path="example-3" element={<Example3 />} />
        <Route path="primitives" element={<Primitives />} />
        <Route path="transforms" element={<Transforms />} />
        <Route path="helper-gizmos" element={<HelperGizmos />} />
        <Route path="leva-gui" element={<LevaGui />} />
        <Route path="fog" element={<Fog />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

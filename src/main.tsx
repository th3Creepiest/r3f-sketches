import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import "./index.css"

import App from "./App.tsx"
import Example1 from "./pages/Example1"
import Example2 from "./pages/Example2"
import Example3 from "./pages/Example3"
import Primitives from "./pages/Primitives"
import Transforms from "./pages/Transforms"
import HelperGizmos from "./pages/HelperGizmos.tsx"
import LevaGui from "./pages/LevaGui.tsx"

import Cameras from "./pages/cameras/Cameras.tsx"
import FirstPersonControls from "./pages/cameras/FirstPersonControls.tsx"
import OrbitControls from "./pages/cameras/OrbitControls.tsx"

import Lights from "./pages/lights/Lights.tsx"
import AmbientLight from "./pages/lights/AmbientLight.tsx"
import DirectionalLight from "./pages/lights/DirectionalLight.tsx"
import HemisphereLight from "./pages/lights/HemisphereLight.tsx"
import PointLight from "./pages/lights/PointLight.tsx"
import RectAreaLight from "./pages/lights/RectAreaLight.tsx"
import SpotLight from "./pages/lights/SpotLight.tsx"

import Materials from "./pages/materials/Materials.tsx"
import MeshBasicMaterial from "./pages/materials/MeshBasicMaterial.tsx"
import MeshLambertMaterial from "./pages/materials/MeshLambertMaterial.tsx"
import MeshPhongMaterial from "./pages/materials/MeshPhongMaterial.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="example-1" element={<Example1 />} />
        <Route path="example-2" element={<Example2 />} />
        <Route path="example-3" element={<Example3 />} />
        <Route path="primitives" element={<Primitives />} />
        <Route path="transforms" element={<Transforms />} />
        <Route path="helper-gizmos" element={<HelperGizmos />} />
        <Route path="leva-gui" element={<LevaGui />} />

        <Route path="cameras" element={<Cameras />} />
        <Route path="first-person-controls" element={<FirstPersonControls />} />
        <Route path="orbit-controls" element={<OrbitControls />} />

        <Route path="lights" element={<Lights />} />
        <Route path="ambient-light" element={<AmbientLight />} />
        <Route path="directional-light" element={<DirectionalLight />} />
        <Route path="hemisphere-light" element={<HemisphereLight />} />
        <Route path="point-light" element={<PointLight />} />
        <Route path="rect-area-light" element={<RectAreaLight />} />
        <Route path="spot-light" element={<SpotLight />} />

        <Route path="materials" element={<Materials />} />
        <Route path="mesh-basic-material" element={<MeshBasicMaterial />} />
        <Route path="mesh-lambert-material" element={<MeshLambertMaterial />} />
        <Route path="mesh-phong-material" element={<MeshPhongMaterial />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

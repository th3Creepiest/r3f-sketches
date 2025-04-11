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
import FirstPersonControls from "./pages/FirstPersonControls.tsx"
import OrbitControls from "./pages/OrbitControls.tsx"
import HelperGizmos from "./pages/HelperGizmos.tsx"

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
        <Route path="first-person-controls" element={<FirstPersonControls />} />
        <Route path="orbit-controls" element={<OrbitControls />} />
        <Route path="helper-gizmos" element={<HelperGizmos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

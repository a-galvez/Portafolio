import { BrowserRouter, Routes, Route } from "react-router-dom";
import Indice from "./components/Indice";
import Resumen from "./components/Proyectos/Resumen";
import Experiencia  from "./components/Experiencia/Experiencia";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Indice />} />
        <Route path="/proyectos" element={<Resumen />} />
        <Route path="/experiencia" element={<Experiencia />} />
      </Routes>
    </BrowserRouter>
  )
}

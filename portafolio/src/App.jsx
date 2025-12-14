import { BrowserRouter, Routes, Route } from "react-router-dom";
import Indice from "./components/Indice";
import Resumen from "./components/Proyectos/Resumen";
import Experiencia  from "./components/Experiencia/Experiencia";
import ProyectoDetalle from "./components/Proyectos/ProyectoDetalle";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Indice />} />
          <Route path="/proyectos" element={<Resumen />} />
          <Route path="/proyectos/:id" element={<ProyectoDetalle />} />
          <Route path="/experiencia" element={<Experiencia />} />
        </Routes>
    </BrowserRouter>
  )
}

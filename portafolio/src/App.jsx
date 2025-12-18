import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useContext } from "react";
import Indice from "./components/Indice";
import Resumen from "./components/Proyectos/Resumen";
import Experiencia  from "./components/Experiencia/Experiencia";
import ProyectoDetalle from "./components/Proyectos/ProyectoDetalle";
import ScrollToTop from "./components/ScrollToTop";
import { LanguageContext } from "./context/LanguageContext";

export default function App() {

    const { language } = useContext(LanguageContext);

  useEffect(() => {
    const titles = {
      es: "Aída Gálvez | Portafolio",
      en: "Aída Gálvez | Portfolio",
    };
    document.title = titles[language];
  }, [language]);

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

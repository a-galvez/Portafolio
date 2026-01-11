import { useParams } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { proyectos } from "../../data/proyectos";
import MediaCarousel from "./Carrusel";
import Navbar from "../Navbar";
import githubLogo from "../../assets/Iconos/Herramientas/git-scm-icon.svg"
import figmaLogo from "../../assets/Iconos/Herramientas/figma-icon.svg"

export default function ProyectoDetalle() {
    const { id } = useParams();
    const { language, setLanguage } = useContext(LanguageContext);

    const proyecto = proyectos.find(p => p.id === id);

    if (!proyecto) {
        return (
        <div className="text-center py-20 text-gray-600">
            Proyecto no encontrado
        </div>
        );
    }

    const tech = proyecto.tecnologias?.[language];

    const labels = {
    es: {
        lenguaje: "Lenguaje",
        frameworks: "Frameworks",
        librerias: "Librerías",
        baseDatos: "Base de datos",
        visualizacion: "Visualización",
        herramientas: "Herramientas",
    },
    en: {
        language: "Language",
        frameworks: "Frameworks",
        libraries: "Libraries",
        database: "Database",
        visualization: "Visualization",
        tools: "Tools",
        }
    };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
        <div className="sticky top-0 z-50 bg-white shadow">
            <Navbar language={language} setLanguage={setLanguage} />
        </div>

      {/* Contenedor principal */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        {/* Título */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#395E66] mb-6 sm:mb-8">
            {proyecto.titulo[language]}
        </h1>

        {/* Carrusel */}
        <div className="mb-6 sm:mb-10 w-full">
            <MediaCarousel media={proyecto.media} />
        </div>

        {/* Descripción */}
        <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
            {proyecto.descripcion[language]}
        </p>

        {/* Tecnologías */}
        <section className="mt-4 sm:mt-6">
            <h3 className="font-semibold text-[#32936F] mb-2">
                {language === "es" ? "Tecnologías utilizadas:" : "Technologies used:"}
            </h3>

            <ul className="grid grid-cols-1 gap-x-12 gap-y-3 text-gray-700">
            {Object.entries(tech).map(([categoria, valores]) => (
                <li
                key={categoria}
                className="flex items-start gap-2"
                >
                <span className="font-semibold">
                    {labels[language][categoria] || categoria}:
                </span>
                <span>{valores}</span>
                </li>
            ))}
            </ul>
        </section>

        {/* Detalle */}
        <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg mt-6">
            {proyecto.detalle[language]}
        </p>

        {/* Rol */}
        <section className="mb-6 sm:mb-8">
            <h3 className="font-semibold text-[#32936F] mb-1 sm:mb-2">
                {language === "es" ? "Mi rol en el proyecto:" : "My role in the project:"}
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 sm:space-y-2 text-base sm:text-lg">
                {proyecto.rol[language].map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </section>

        {/* Aprendizajes */}
        <section className="mb-6 sm:mb-8">
            <h3 className="font-semibold text-[#32936F] mb-1 sm:mb-2">
                {language === "es" ? "Aprendizajes principales:" : "Key learnings:"}
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 sm:space-y-2 text-base sm:text-lg">
                {proyecto.aprendizaje[language].map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </section>

        {/* GitHub */}
        {proyecto.github && (
            <section className="mt-4 sm:mt-6">

            <a
                href={proyecto.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#24292e] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg hover:bg-black transition-colors text-base sm:text-lg w-full sm:w-auto justify-center"
                >

                <img
                    src={githubLogo}
                    alt="GitHub"
                    className="w-5 h-5 invert"
                />

                {language === "es" ? "Ver repositorio en GitHub" : "View GitHub repository"}
            </a>
            </section>
        )} 
        {/* Figma */}
        {proyecto.figma && (
        <section className="mt-4 sm:mt-6">

            <a
            href={proyecto.figma}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg hover:bg-gray-900 transition-colors text-base sm:text-lg w-full sm:w-auto justify-center"
            >

            <img
                src={figmaLogo}
                alt="Figma"
                className="w-5 h-5 invert"
            />

            {language === "es" ? "Ver diseño en Figma" : "View Figma design"}
            </a>
        </section>
        )}
        </div>
    </div>
    );
}


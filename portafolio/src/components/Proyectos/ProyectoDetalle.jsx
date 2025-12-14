import { useParams } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { proyectos } from "../../data/proyectos";
import MediaCarousel from "./Carrusel";
import Navbar from "../Navbar";

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
    },
    en: {
        language: "Language",
        frameworks: "Frameworks",
        libraries: "Libraries",
        database: "Database",
        visualization: "Visualization",
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
                <h3 className="font-semibold mb-2 sm:mb-3">
                    {language === "es" ? "Repositorio" : "Repository"}
                </h3>

            <a
                href={proyecto.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#24292e] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg hover:bg-black transition-colors text-base sm:text-lg w-full sm:w-auto justify-center"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.339-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                />
                </svg>

                {language === "es" ? "Ver repositorio en GitHub" : "View GitHub repository"}
            </a>
            </section>
        )}
        </div>
    </div>
    );
}


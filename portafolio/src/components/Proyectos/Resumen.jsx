import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { proyectos } from "../../data/proyectos";
import TarjetaIzq from "./TarjetaIzq";
import TarjetaDer from "./TarjetaDer";
import Navbar from "../Navbar";

export default function Resumen() {
    const { language, setLanguage } = useContext(LanguageContext);

    const texts = {
        es: {
        titulo: "Proyectos",
        descripcion:
            "A lo largo de mi formación universitaria he realizado proyectos académicos que me han permitido profundizar en el desarrollo web y la aplicación de diversas tecnologías. Estos proyectos me han ayudado a fortalecer habilidades de trabajo en equipo, liderazgo y gestión del tiempo, permitiéndome cumplir de manera satisfactoria con los objetivos propuestos dentro de los plazos establecidos.",
        },
        en: {
        titulo: "Projects",
        descripcion:
            "Throughout my university studies, I have developed academic projects that have allowed me to deepen my knowledge in web development and the application of various technologies. These projects have helped me strengthen teamwork, leadership, and time management skills, enabling me to successfully meet project goals within established deadlines.",
        },
    };

    return (
    <div className="flex flex-col min-h-screen">
        
        {/* NAVBAR */}
        <div className="sticky top-0 z-50 bg-white">
            <Navbar language={language} setLanguage={setLanguage} />
        </div>

        {/* HEADER */}
        <main className="flex-1">
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10 sm:py-14">
                <div className="w-full">
                    <h1 className="text-[#395E66] text-3xl sm:text-4xl font-semibold mb-4">
                    {texts[language].titulo}
                    </h1>

                    <p className="text-gray-700 text-base sm:text-lg">
                    {texts[language].descripcion}
                    </p>
                </div>
            </section>

            {/* LISTA DE PROYECTOS */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-16 space-y-14 sm:space-y-20">
            {proyectos.map((proyecto, index) =>
                index % 2 === 0 ? (
                <TarjetaIzq
                    key={proyecto.id}
                    contenido={proyecto}
                    proyectoId={proyecto.id}
                />
                ) : (
                <TarjetaDer
                    key={proyecto.id}
                    contenido={proyecto}
                    proyectoId={proyecto.id}
                />
                )
            )}
            </section>
        </main>
    </div>
    );
}

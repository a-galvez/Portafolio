import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import Navbar from "../Navbar";

export default function Experiencia() {
    
    const { language, setLanguage } = useContext(LanguageContext);

    const texts = {
        es: {
            titulo: "Experiencia",
            descripcion: "Como estudiante, mi experiencia se basa principalmente en proyectos académicos y actividades extracurriculares dentro de la Facultad de Ingeniería. A través de estas oportunidades, he desarrollado habilidades técnicas, organizativas y de liderazgo que complementan mi formación profesional."
        },
        en: {
            titulo: "Experience",
            descripcion: "As a student, my experience is primarily based on academic projects and extracurricular activities within the Faculty of Engineering. Through these opportunities, I have developed technical, organizational, and leadership skills that complement my professional training."
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="sticky top-0 z-50 bg-white">
                <Navbar language={language} setLanguage={setLanguage} />
            </div>

            <main className="flex-1">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl">
                <section className="flex flex-col gap-4">
                    <h1 className="text-[#395E66] text-3xl sm:text-4xl font-semibold mb-4">{texts[language].titulo}</h1> 
                    <h3 className="text-gray-700 text-base sm:text-lg mb-10">{texts[language].descripcion}</h3>
                </section>

                    <div className="mb-8">
                        <h2 className="font-bold mb-4 text-[#387D7A]">Secretaría de Finanzas (AEIS)</h2>

                        <h3 className="font-semibold mb-4 text-[#387D7A]">
                            Asociación de Estudiantes de Ingeniería en Sistemas — 2025
                        </h3>

                        <p className="text-gray-700 text-base sm:text-lg mb-4">
                            Durante el año 2025 he desempeñado el cargo de Secretaria de Finanzas en la Asociación de Estudiantes de
                            Ingeniería en Sistemas (AEIS), gestionando los recursos económicos y asegurando la transparencia financiera
                            dentro de la organización.
                        </p>

                        {/* Responsabilidades principales */}
                        <h3 className="font-semibold mb-3 text-[#387D7A]">Responsabilidades principales</h3>

                        <ul className="list-disc list-inside space-y-2 text-gray-700 text-base sm:text-lg mb-6">
                            <li className="leading-relaxed">
                            Elaboración de informes financieros mensuales y reportes detallados posteriores a cada actividad
                            organizada por la asociación.
                            </li>
                            <li className="leading-relaxed">
                            Administración y control de los fondos de la asociación, asegurando un manejo claro, ordenado y
                            responsable.
                            </li>
                            <li className="leading-relaxed">
                            Actualización, revisión y mantenimiento de los libros de trabajo utilizados para informar a la junta
                            directiva y a los estudiantes sobre el estado financiero actual y el presupuesto de actividades en curso.
                            </li>
                        </ul>

                        {/* Aporte adicional */}
                        <h3 className="font-semibold mb-3 text-[#387D7A]">Aporte adicional</h3>

                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            Además de mis funciones financieras, brindo apoyo al comité ejecutivo en la toma de decisiones, resolución
                            de problemas, la planificación de eventos y la organización de actividades orientadas a la comunidad
                            estudiantil de la facultad.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
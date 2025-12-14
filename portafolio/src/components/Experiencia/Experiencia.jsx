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
                    <h1 className="text-[#395E66]">{texts[language].titulo}</h1> 
                    <h3 className="text-gray-700 mb-10">{texts[language].descripcion}</h3>
                </section>
                </div>
            </main>

        </div>
    );
}
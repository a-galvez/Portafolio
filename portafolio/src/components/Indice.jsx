import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Navbar from "./Navbar";
import Hero from "./Habilidades/Hero";
import Habilidades from "./Habilidades/Habilidades";

export default function Indice() {

  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="flex flex-col min-h-screen">
        <div className="sticky top-0 z-50 bg-white"> 
            <Navbar language={language} setLanguage={setLanguage} />
        </div>
      
        <main className="flex-1">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl">
            <section className="flex flex-col gap-16">
                <Hero language={language} />
                <Habilidades language={language} />
            </section>
            </div>
        </main>
    </div>
  )
}
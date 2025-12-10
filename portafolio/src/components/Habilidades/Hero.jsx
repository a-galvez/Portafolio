import React from "react";

export default function Hero({ language }) {

  const texts = {
    es: {
      saludo: "Hola, mi nombre es",
      descripcion:
        "Soy una estudiante de la carrera de Ingeniería en Sistemas en la Universidad Nacional Autónoma de Honduras, apasionada por el desarrollo web, el diseño de interfaces y el análisis de datos, enfocada en transformar ideas en soluciones digitales."
    },
    en: {
      saludo: "Hi, my name is",
      descripcion:
        "I am a Software Engineering student at Universidad Nacional Autónoma de Honduras (UNAH), passionate about web development, interface design, and data analysis, focused on transforming ideas into digital solutions."
    }
  }

  return (
    <section className="flex flex-col md:flex-row items-center gap-8 py-12">
      <div className="flex-1">
        <div className="mb-4">
          <h1 className="text-[64px] bold">{texts[language].saludo}</h1>
          <h1 className="text-[64px] bold text-[#32936F]">Aída Gálvez</h1>
        </div>
        <div>
          <p className="text-gray-700 regular text-xl">{texts[language].descripcion}</p>
        </div>
      </div>

      <div className="flex-1">
        <img
          src="/ruta-de-tu-foto.jpg"
          alt="Aída Gálvez"
          className="w-full max-w-xs rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

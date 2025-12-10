import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 py-12">
      
      <div className="flex-1">
        <div className="mb-4">
          <h1 className="text-[64px] bold">Hola, mi nombre es</h1>
          <h1 className="text-[64px] bold text-[#32936F]">Aída Gálvez</h1>
        </div>

        <div>
          <p className="text-gray-700 regular text-xl">
            Soy una estudiante de la carrera de Ingeniería en Sistemas en la
            Universidad Nacional Autónoma de Honduras, apasionada por el desarrollo
            web, el diseño de interfaces y el análisis de datos, enfocada en transformar
            ideas en soluciones digitales.
          </p>
        </div>
      </div>

      {/* Foto */}
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

import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function TarjetaDer({ contenido, proyectoId }) {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

  const textosBoton = {
    es: "Ver Más",
    en: "Read More",
  };

  const handleVerMas = () => {
    navigate(`/proyectos/${proyectoId}`);
  };

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">

      {/* Contenido */}
      <div className="md:w-1/2 w-full p-4 sm:p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#387D7A] mb-3">
            {contenido.titulo[language]}
          </h2>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
            {contenido.descripcion[language]}
          </p>
        </div>

        <button
          onClick={handleVerMas}
          className="self-center md:self-end bg-[#32936F] text-white px-6 py-2 rounded-xl hover:bg-[#2a7d5f] transition-colors"
        >
          {textosBoton[language]}
        </button>
      </div>

      <div className="md:w-1/2 w-full h-56 sm:h-64 md:h-auto">
        <img
          src={contenido.imagen.src}
          alt={contenido.titulo[language]}
          className="w-full h-full object-contain"
        />
      </div>

    </div>
  );
}

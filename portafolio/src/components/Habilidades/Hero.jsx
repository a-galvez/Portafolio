import React from "react";
import fotoPerfil from "../../assets/fotoPerfil.jpg";

export default function Hero({ language }) {

  const texts = {
    es: {
      saludo: "Hola, mi nombre es",
      descripcion: [
        "Soy pasante de la carrera de Ingeniería en Sistemas en la Universidad Nacional Autónoma de Honduras (UNAH), con experiencia en desarrollo backend, bases de datos y despliegue de aplicaciones. Me interesa el desarrollo web como una forma de construir soluciones tecnológicas funcionales, eficientes y orientadas a resolver problemas reales.",
        "Me apasiona el análisis de datos, la creación de aplicaciones web y el aprendizaje sobre modelos de inteligencia artificial y sus aplicaciones. Disfruto explorar nuevas tecnologías, analizar problemas y diseñar soluciones bien estructuradas que combinen lógica, creatividad e innovación. Mi objetivo es continuar creciendo profesionalmente y ampliar mis conocimientos en áreas que me permitan desarrollar soluciones tecnológicas cada vez más completas."
      ]
    },
    en: {
      saludo: "Hi, my name is",
      descripcion: [
        "I am a Software Engineering student at Universidad Nacional Autónoma de Honduras (UNAH), currently completing the internship stage of my degree. I have experience in backend development, databases, and application deployment. I am interested in web development as a way to build functional, efficient, and problem-oriented technological solutions.",
        "I am passionate about data analysis, web application development, and learning about artificial intelligence models and their applications. I enjoy exploring new technologies, analyzing problems, and designing well-structured solutions that combine logic, creativity, and innovation. My goal is to continue growing professionally and expanding my knowledge in areas that will enable me to develop increasingly comprehensive technological solutions."
      ]
    }
  };


  return (
    <section className="flex flex-col md:flex-row items-center gap-8 py-12">
      <div className="flex-1">
        <div className="mb-4">
          <h1 className="text-[64px] bold">{texts[language].saludo}</h1>
          <h1 className="text-[64px] bold text-[#32936F]">Aída Gálvez</h1>
        </div>
        <div className="space-y-4">
          {texts[language].descripcion.map((parrafo, index) => (
            <p
              key={index}
              className="text-gray-700 regular text-xl"
            >
              {parrafo}
            </p>
          ))}
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src={fotoPerfil}
          alt="Aída Gálvez"
          className="w-full max-w-[470px] rounded-lg shadow-lg "
        />
      </div>
    </section>
  );
}

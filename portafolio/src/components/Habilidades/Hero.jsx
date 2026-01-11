import React from "react";
import fotoPerfil from "../../assets/fotoPerfil.jpg";

export default function Hero({ language }) {

  const texts = {
    es: {
      saludo: "Hola, mi nombre es",
      descripcion:
        ["Soy estudiante de la carrera de Ingeniería en Sistemas en la Universidad Nacional Autónoma de Honduras, con una sólida formación técnica en desarrollo de software, bases de datos y tecnologías web. Me apasiona la programación porque me permite crear soluciones a problemas reales de forma creativa e innovadora, utilizando la tecnología como una herramienta práctica y significativa.", 
        "Actualmente, estoy interesada en aprender Node.js, profundizar en la aplicación práctica de patrones de diseño y adquirir conocimientos en Blender para fortalecer mis habilidades de diseño y ampliar mis recursos creativos. Asimismo, busco comprender y aplicar WebSockets para mejorar proyectos en los que ya he trabajado. Me motiva constantemente encontrar nuevas formas de innovar, optimizar procesos y mejorar mis espacios de trabajo mediante soluciones escalables y bien estructuradas."
        ]
    },
    en: {
      saludo: "Hi, my name is",
      descripcion:
        ["I am a Software Engineering student at Universidad Nacional Autónoma de Honduras (UNAH), with a solid technical background in software development, databases, and web technologies. I am passionate about programming because it allows me to create creative and innovative solutions to real-world problems, using technology as a practical and meaningful tool.",
          "Currently, I am interested in learning Node.js, deepening my practical knowledge of design patterns, and acquiring skills in Blender to strengthen my design abilities and expand my creative toolkit. I also aim to understand and apply WebSockets to enhance projects I have previously worked on. I am constantly motivated to find new ways to innovate, optimize processes, and improve work environments through scalable and well-structured solutions."
        ]
    }
  }

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


import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import Navbar from "../Navbar";

export default function Experiencia() {
    const { language, setLanguage } = useContext(LanguageContext);

    const texts = {
        es: {
            titulo: "Experiencia",
            descripcion:
                "Mi experiencia combina el desarrollo de software con la gestión y el liderazgo estudiantil. He participado en proyectos tecnológicos, despliegues de aplicaciones en la nube y actividades orientadas a resolver necesidades de clientes y contribuir al desarrollo de la comunidad universitaria.",

            lids: {
                cargo: "Desarrolladora Backend",
                organizacion:
                    "Laboratorio de Innovación y Desarrollo de Software (LIDS) — Facultad de Ingeniería, UNAH",
                fecha: "Enero de 2026 – Actualidad",
                modalidad: "Jornada parcial · Modalidad híbrida",
                ubicacion: "Tegucigalpa, Honduras",
                descripcion:
                    "Desarrollo e implemento soluciones de software como parte del equipo del Laboratorio de Innovación y Desarrollo de Software de la Facultad de Ingeniería.",
                responsabilidades: "Responsabilidades principales",
                tareas: [
                    "Desarrollo y mantenimiento de endpoints y servicios backend utilizando Node.js, TypeScript y Microsoft SQL Server.",
                    "Diseño y ejecución de pruebas de API mediante Postman para verificar la funcionalidad y el comportamiento de los endpoints.",
                    "Despliegue y administración de aplicaciones en la nube mediante AWS EC2, AWS Serverless y DigitalOcean Droplets.",
                    "Participación en entrevistas con clientes para identificar necesidades, recopilar requerimientos y definir soluciones tecnológicas.",
                    "Aplicación de la metodología ágil Scrum para la planificación, organización y seguimiento de las actividades de desarrollo."
                ],
                aporte:
                    "Esta experiencia ha fortalecido mis habilidades en desarrollo backend, pruebas de API, infraestructura en la nube y colaboración con equipos multidisciplinarios."
            },

            interior: {
                cargo: "Secretaría del Interior",
                organizacion:
                    "Asociación de Estudiantes de Ingeniería en Sistemas (AEIS)",
                fecha: "Enero de 2026 – Octubre de 2026",
                descripcion:
                    "Contribuí a la planificación y ejecución de iniciativas académicas y recreativas destinadas a fortalecer la participación y el desarrollo de la comunidad estudiantil.",
                responsabilidades: "Responsabilidades y contribuciones",
                tareas: [
                    "Gestión de patrocinadores: apoyo en la búsqueda y coordinación de patrocinadores para obtener premios destinados al Bingo IS 2026, actividad de recaudación de fondos de la asociación.",
                    "Coordinación de ponentes: contacto y gestión de profesionales y organizaciones para su participación en la Semana de la Carrera de Ingeniería en Sistemas, promoviendo el aprendizaje y el intercambio de conocimientos.",
                    "Mantenimiento de sistemas: continuidad del mantenimiento del sistema web del juego 100 Ingenieros Dijeron, utilizado en actividades de integración y participación estudiantil."
                ]
            },

            finanzas: {
                cargo: "Secretaría de Finanzas",
                organizacion:
                    "Asociación de Estudiantes de Ingeniería en Sistemas (AEIS)",
                fecha: "Enero de 2025 – Enero de 2026",
                descripcion:
                    "Fui responsable de la administración y el control financiero de la asociación, contribuyendo a la transparencia en el manejo de los recursos y al desarrollo de actividades en beneficio de la comunidad estudiantil.",
                responsabilidades: "Responsabilidades y contribuciones",
                tareas: [
                    "Gestión financiera: elaboración de informes financieros mensuales y reportes detallados posteriores a cada actividad organizada por la asociación.",
                    "Administración de fondos: control y seguimiento de los recursos financieros, procurando un manejo ordenado y responsable del presupuesto.",
                    "Control y documentación: actualización, revisión y mantenimiento de libros de trabajo para informar a la junta directiva y a los estudiantes sobre el estado financiero y los presupuestos de las actividades en curso.",
                    "Gestión de patrocinadores: contacto y coordinación con patrocinadores para obtener premios para el Bingo IS 2025, contribuyendo a esta iniciativa de recaudación de fondos.",
                    "Desarrollo de software: desarrollo de un programa web para el juego 100 Ingenieros Dijeron, utilizado en actividades recreativas y de integración estudiantil.",
                    "Planificación de actividades: apoyo al comité ejecutivo en la toma de decisiones, resolución de problemas, planificación y ejecución de eventos orientados al beneficio de la comunidad estudiantil."
                ]
            },

            aporte: "Contribuciones adicionales"
        },

        en: {
            titulo: "Experience",
            descripcion:
                "My experience combines software development with student leadership and organizational management. I have contributed to technology projects, cloud application deployments, and initiatives aimed at addressing client needs and supporting the university community.",

            lids: {
                cargo: "Backend Developer",
                organizacion:
                    "Software Innovation and Development Laboratory (LIDS) — Faculty of Engineering, UNAH",
                fecha: "January 2026 – Present",
                modalidad: "Part-time · Hybrid",
                ubicacion: "Tegucigalpa, Honduras",
                descripcion:
                    "I develop and implement software solutions as part of the Software Innovation and Development Laboratory team at the Faculty of Engineering.",
                responsabilidades: "Key Responsibilities",
                tareas: [
                    "Develop and maintain backend endpoints and services using Node.js, TypeScript, and Microsoft SQL Server.",
                    "Design and execute API tests using Postman to verify endpoint functionality and behavior.",
                    "Deploy and manage applications in the cloud using AWS EC2, AWS Serverless, and DigitalOcean Droplets.",
                    "Participate in client interviews to identify needs, gather requirements, and define technological solutions.",
                    "Apply the Scrum agile methodology to plan, organize, and track software development activities."
                ],
                aporte:
                    "This experience has strengthened my skills in backend development, API testing, cloud infrastructure, and collaboration with multidisciplinary teams."
            },

            interior: {
                cargo: "Internal Affairs Secretary",
                organizacion:
                    "Systems Engineering Student Association (AEIS)",
                fecha: "January 2026 – October 2026",
                descripcion:
                    "I contributed to planning and implementing academic and recreational initiatives aimed at strengthening student engagement and supporting the student community.",
                responsabilidades: "Responsibilities and Contributions",
                tareas: [
                    "Sponsorship coordination: helped identify and coordinate sponsors to obtain prizes for Bingo IS 2026, the association's fundraising event.",
                    "Speaker coordination: contacted and coordinated professionals and organizations for their participation in Systems Engineering Career Week, promoting learning and knowledge sharing.",
                    "System maintenance: continued maintaining the web-based 100 Ingenieros Dijeron game system, used for student engagement and community-building activities."
                ]
            },

            finanzas: {
                cargo: "Finance Secretary",
                organizacion:
                    "Systems Engineering Student Association (AEIS)",
                fecha: "January 2025 – January 2026",
                descripcion:
                    "I was responsible for the association's financial administration and oversight, promoting transparency in resource management and supporting activities that benefited the student community.",
                responsabilidades: "Responsibilities and Contributions",
                tareas: [
                    "Financial reporting: prepared monthly financial reports and detailed reports following each association activity.",
                    "Fund management: monitored and tracked financial resources, ensuring organized and responsible budget management.",
                    "Financial records and documentation: updated, reviewed, and maintained spreadsheets to inform the executive board and students about the association's financial status and ongoing activity budgets.",
                    "Sponsorship coordination: contacted and coordinated sponsors to obtain prizes for Bingo IS 2025, contributing to this fundraising initiative.",
                    "Software development: developed a web-based version of the 100 Ingenieros Dijeron game for recreational and student engagement activities.",
                    "Event planning: supported the executive committee with decision-making, problem-solving, event planning, and the organization of initiatives benefiting the student community."
                ]
            },

            aporte: "Additional Contributions"
        }
    };

    const t = texts[language] || texts.es;

    const experiencias = [
        { ...t.lids, id: "lids" },
        { ...t.interior, id: "interior" },
        { ...t.finanzas, id: "finanzas" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <div className="sticky top-0 z-50 bg-white">
                <Navbar
                    language={language}
                    setLanguage={setLanguage}
                />
            </div>

            <main className="flex-1">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl">
                    <section className="flex flex-col gap-4 mb-10">
                        <h1 className="text-[#395E66] text-3xl sm:text-4xl font-semibold">
                            {t.titulo}
                        </h1>

                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {t.descripcion}
                        </p>
                    </section>

                    <div className="flex flex-col gap-10">
                        {experiencias.map((experiencia) => (
                            <article
                                key={experiencia.id}
                                className="border-l-4 border-[#387D7A] pl-5 sm:pl-7 pb-2"
                            >
                                <h2 className="font-bold text-xl sm:text-2xl text-[#387D7A] mb-2">
                                    {experiencia.cargo}
                                </h2>

                                <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-2">
                                    {experiencia.organizacion}
                                </h3>

                                <p className="text-gray-500 text-sm sm:text-base mb-4">
                                    {experiencia.fecha}
                                    {"modalidad" in experiencia &&
                                        ` · ${experiencia.modalidad}`}
                                    {"ubicacion" in experiencia &&
                                        ` · ${experiencia.ubicacion}`}
                                </p>

                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-5">
                                    {experiencia.descripcion}
                                </p>

                                <h4 className="font-semibold text-[#387D7A] mb-3">
                                    {experiencia.responsabilidades}
                                </h4>

                                <ul className="list-disc list-inside space-y-3 text-gray-700 text-base sm:text-lg mb-5">
                                    {experiencia.tareas.map((tarea, index) => (
                                        <li
                                            key={index}
                                            className="leading-relaxed"
                                        >
                                            {tarea}
                                        </li>
                                    ))}
                                </ul>

                                {"aporte" in experiencia && (
                                    <div className="mt-5">
                                        <h4 className="font-semibold text-[#387D7A] mb-2">
                                            {t.aporte}
                                        </h4>

                                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                            {experiencia.aporte}
                                        </p>
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

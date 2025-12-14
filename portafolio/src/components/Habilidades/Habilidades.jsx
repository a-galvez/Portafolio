import TarjetaHabilidades from './TarjetaHabilidades'
import IconoHabilidad from './IconoHabilidad';
import cppLogo from "../../assets/Iconos/Lenguajes/ISO_C++_Logo.svg";
import javaLogo from "../../assets/Iconos/Lenguajes/java-icon.svg";
import csharpLogo from "../../assets/Iconos/Lenguajes/Logo_C_sharp.svg";
import phpLogo from "../../assets/Iconos/Lenguajes/PHP-logo.svg";
import pythonLogo from "../../assets/Iconos/Lenguajes/Python-logo-notext.svg";
import jsLogo from "../../assets/Iconos/Lenguajes/Unofficial_JavaScript_logo_2.svg";
import blazorLogo from "../../assets/Iconos/Frameworks/blazor.svg"
import laravelLogo from "../../assets/Iconos/Frameworks/Laravel.svg"
import netLogo from "../../assets/Iconos/Frameworks/NET_Core_Logo.svg"
import reactLogo from "../../assets/Iconos/Frameworks/React-icon.svg"
import springLogo from "../../assets/Iconos/Frameworks/Spring_Boot.svg"
import msqlLogo from "../../assets/Iconos/Bases/Microsoft_SQL_Server_2025_icon.svg"
import mysqlLogo from "../../assets/Iconos/Bases/mysql-icon.svg"
import sqldevLogo from "../../assets/Iconos/Bases/SQL Developer.svg"
import sqliteLogo from "../../assets/Iconos/Bases/sqlite-icon.svg"
import bootstrapLogo from "../../assets/Iconos/Frontend/Bootstrap_logo.svg"
import muiLogo from "../../assets/Iconos/Frontend/mui-icon.svg"
import tailwindLogo from "../../assets/Iconos/Frontend/tailwindcss-icon.svg"
import cssLogo from "../../assets/Iconos/Frontend/w3_css-icon~old.svg"
import htmlLogo from "../../assets/Iconos/Frontend/w3_html5-icon.svg"
import figmaLogo from "../../assets/Iconos/Herramientas/figma-icon.svg"
import gitLogo from "../../assets/Iconos/Herramientas/git-scm-icon.svg"
import githubLogo from "../../assets/Iconos/Herramientas/Octicons-mark-github.svg"
import tableauLogo from "../../assets/Iconos/Herramientas/tableau-software.svg"

export default function Habilidades({ language }) {

  const texts = {
    es: {
      titulo: "Habilidades Técnicas",
      descripcion:
        "A lo largo de mi formación académica he desarrollado habilidades técnicas en diversas áreas como el desarrollo web, el manejo de bases de datos y el análisis de datos, las cuales he aplicado en proyectos universitarios. Me caracterizo por investigar y comprender a fondo las tecnologías utilizadas, aplicar buenas prácticas de programación y trabajar de forma organizada para cumplir con los objetivos de cada proyecto.",
      tarjetas: {
        lenguajes: "Lenguajes de Programación",
        frameworks: "Frameworks y Librerías",
        bases: "Bases de Datos",
        frontend: "Frontend / Desarrollo Web",
        herramientas: "Herramientas y Otros",
      },
    },
    en: {
      titulo: "Technical Skills",
      descripcion:
        "Throughout my academic training, I have developed technical skills in areas such as web development, database management, and data analysis, which I have applied in university projects. I am characterized by my ability to research and deeply understand the technologies I use, apply good programming practices, and work in an organized manner to meet the objectives of each project.",
      tarjetas: {
        lenguajes: "Programming Languages",
        frameworks: "Frameworks and Libraries",
        bases: "Databases",
        frontend: "Frontend / Web Development",
        herramientas: "Tools and Others",
      },
    },
  };

  return (
    <div id="habilidades" className="max-w-7xl mx-auto">
      <h1 className="text-[#395E66] mb-4">{texts[language].titulo}</h1>
      
      <h3 className="text-gray-700 mb-10">{texts[language].descripcion}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <TarjetaHabilidades title={texts[language].tarjetas.lenguajes}>
            <IconoHabilidad src={javaLogo} alt="Java" label="Java" />
            <IconoHabilidad src={csharpLogo} alt="C#" label="C#" />
            <IconoHabilidad src={phpLogo} alt="PHP" label="PHP" />
            <IconoHabilidad src={jsLogo} alt="JavaScript" label="JavaScript" />
            <IconoHabilidad src={cppLogo} alt="C++" label="C++" />
            <IconoHabilidad src={pythonLogo} alt="Python" label="Python" />
        </TarjetaHabilidades>

        <TarjetaHabilidades title={texts[language].tarjetas.frameworks}>
            <IconoHabilidad src={springLogo} alt="Spring Boot" label="Spring Boot" />
            <IconoHabilidad src={netLogo} alt="ASP .NET" label="ASP .NET Core" />
            <IconoHabilidad src={blazorLogo} alt="Blazor" label="Blazor" />
            <IconoHabilidad src={laravelLogo} alt="Laravel" label="Laravel" />
            <IconoHabilidad src={reactLogo} alt="React" label="React" />
        </TarjetaHabilidades>

        <TarjetaHabilidades title={texts[language].tarjetas.bases}>
            <IconoHabilidad src={mysqlLogo} alt="MySQL" label="MySQL" />
            <IconoHabilidad src={sqldevLogo} alt="Oracle SQL Developer" label="Oracle SQL Developer" />
            <IconoHabilidad src={sqliteLogo} alt="SQLite" label="SQLite" />
            <IconoHabilidad src={msqlLogo} alt="Microsoft SQL Server" label="Microsoft SQL Server" />
        </TarjetaHabilidades>

        <TarjetaHabilidades title={texts[language].tarjetas.frontend}>
            <IconoHabilidad src={htmlLogo} alt="HTML5" label="HTML5" />
            <IconoHabilidad src={cssLogo} alt="CSS3" label="CSS3" />
            <IconoHabilidad src={muiLogo} alt="Material UI" label="Material UI" />
            <IconoHabilidad src={tailwindLogo} alt="Tailwind CSS" label="Tailwind CSS" />
            <IconoHabilidad src={bootstrapLogo} alt="Bootstrap" label="Bootstrap" />
        </TarjetaHabilidades>

        <TarjetaHabilidades title={texts[language].tarjetas.herramientas} className="justify-self-center w-full md:col-span-2">
            <IconoHabilidad src={gitLogo} alt="Git" label="Git" />
            <IconoHabilidad src={githubLogo} alt="GitHub" label="GitHub" />
            <IconoHabilidad src={figmaLogo} alt="Figma" label="Figma" />
            <IconoHabilidad src={tableauLogo} alt="Tableau" label="Tableau" />
        </TarjetaHabilidades>
      </div>
    </div>
  );
}
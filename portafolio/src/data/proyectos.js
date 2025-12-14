import planify1 from "../assets/Capturas/POO/image.png"
import planify2 from "../assets/Capturas/POO/image (1).png"
import planify3 from "../assets/Capturas/POO/image (2).png"
import planify4 from "../assets/Capturas/POO/image (3).png"
import planify5 from "../assets/Capturas/POO/image (4).png" 
import planifyDemo from "../assets/Capturas/POO/Planify-Demo.mp4"

import aeropass1 from "../assets/Capturas/Lenguajes/image (1).png"
import aeropass2 from "../assets/Capturas/Lenguajes/image.png"

import xclone1 from "../assets/Capturas/BD1/image (5).png"
import xclone2 from "../assets/Capturas/BD1/image.png"
import xclone3 from "../assets/Capturas/BD1/image (1).png"
import xclone4 from "../assets/Capturas/BD1/image (2).png"
import xclone5 from "../assets/Capturas/BD1/image (3).png"
import xclone6 from "../assets/Capturas/BD1/image (4).png"

import etl1 from "../assets/Capturas/BD2/Modelo Copo de Nieve.png"
import etl2 from "../assets/Capturas/BD2/Diagrama Relacional OLTP.png"
import etl3 from "../assets/Capturas/BD2/TablasParaOLAP.png"

import ing1 from "../assets/Capturas/100-Ing/100-ing1.png"

import cnn1 from "../assets/Capturas/IA/WhatsApp Image 2025-12-13 at 9.55.04 PM.jpeg"

export const proyectos = [
  {
    id: "planify",
    imagen: { type: "image", src: planify1 }, 
    media: [  { type: "image", src: planify1 },
              { type: "image", src: planify2 },
              { type: "image", src: planify3 },
              { type: "image", src: planify4 },
              { type: "image", src: planify5 },
              { type: "video", src: planifyDemo }
    ],
    titulo: {
      es: "Planify - Página web para gestión y agenda de actividades",
      en: "Planify - Activity Management and Scheduling Web Page"
    },
    descripcion: {
      es: "Este proyecto consiste en el desarrollo de una página web para la planificación y gestión de actividades, en la cual es posible registrar actividades con sus respectivas fechas, definir las tareas a realizar junto con el tiempo estimado para cada una, y asignar personas a dichas actividades. Asimismo, el sistema permite establecer restricciones, indicando qué tareas no puede realizar cada persona.",
      en: "This project consists of developing a web page for planning and managing activities, where users can register activities with their dates, define tasks with estimated times, and assign people to those activities. The system also allows setting restrictions by specifying which tasks a person cannot perform."
    },
    tecnologias: {
      es: {
        lenguaje: ["C#"],
        frameworks: ["ASP .NET Core, Blazor Pages, Bootstrap"],
        baseDatos: ["SQLite"]
      },
      en: {
        language: ["C#"],
        frameworks: ["ASP .NET Core, Blazor Pages, Bootstrap"],
        database: ["SQLite"]
      }
    },
    detalle: {
      es: "Este proyecto fue desarrollado como parte de la asignatura Programación Orientada a Objetos, aplicando conceptos fundamentales como modelado de clases, relaciones entre entidades y estructuración del código.",
      en: "This project was developed as part of the Object-Oriented Programming course, applying fundamental concepts such as class modeling, entity relationships, and code structuring."
    },
    rol: {
        es: [ "Diseño e implementación de la base de datos.",
            "Desarrollo del estilizado y la interfaz de usuario de la aplicación.",
            "Implementación de operaciones crear, leer y eliminar para la gestión de tareas y personas."
        ],
        en: ["Design and implementation of the database.",
              "Development of user interface styling and layout.",
              "Implementation of create, read, and delete operations for task and user management."
        ]
    },
    aprendizaje: {
      es: ["En este proyecto adquirí conocimientos sobre los fundamentos de la programación web y una introducción al uso de bases de datos relacionales.",
          "Además, aprendí a utilizar los principios básicos de control de versiones con Git y GitHub, lo que me permitió gestionar de manera más ordenada el código fuente.",
          "Finalmente, esta experiencia me ayudó a desarrollar habilidades de trabajo colaborativo, coordinando de forma efectiva la carga de trabajo y las responsabilidades entre dos integrantes del equipo."],
      en: ["In this project, I gained knowledge about the fundamentals of web programming and an introduction to relational database usage.",
        "I also learned the basic principles of version control with Git and GitHub, which allowed me to manage the source code more efficiently.",
        "Finally, this experience helped me develop collaborative work skills, effectively coordinating workload and responsibilities between two team members."
      ]
    },
    github: "https://github.com/DIEGO-GARC/ActivityApp---Project/tree/optimizacion"
  },

  {
    id: "aeropass",
    imagen: { type: "image", src: aeropass1 },
    media: [  { type: "image", src: aeropass1 },
              { type: "image", src: aeropass2 },
    ],
    titulo: {
      es: "AeroPass - Página web de reserva de vuelos para una aerolínea",
      en: "AeroPass - Flight Booking Web Page for an Airline"
    },
    descripcion: {
      es: "Este proyecto consiste en el desarrollo de una plataforma web que permite a los usuarios buscar vuelos disponibles, reservar asientos y realizar el proceso de compra de boletos. La aplicación integra la presentación visual del sistema con la lógica del backend, gestionando información de aeropuertos, vuelos, disponibilidad de asientos y datos del pasajero.",
      en: "This project involves developing a web platform that allows users to search for available flights, reserve seats, and complete the ticket purchase process. The application integrates the visual presentation of the system with backend logic, managing information about airports, flights, seat availability, and passenger data."
    },
    tecnologias: {
      es: {
        lenguaje: ["PHP y Java"],
        frameworks: ["Laravel, Spring Boot y Bootstrap"],
        baseDatos: ["MySQL"]
      },
      en: {
        language: ["PHP and Java"],
        frameworks: ["Laravel, Spring Boot and Bootstrap"],
        database: ["MySQL"]
      }
    },
    detalle: {
      es: "Este proyecto fue desarrollado como parte de la asignatura Lenguajes de Programación, poniendo en práctica conceptos avanzados de backend, arquitectura MVC, consumo de APIs internas y diseño de interfaces. ",
      en: "This project was developed as part of the Programming Languages course, applying advanced backend concepts, MVC architecture, internal API consumption, and interface design."
    },
    rol: {
        es: [ "Diseño e implementación de la base de datos.",
            "Desarrollo de la interfaz de reserva de asientos y visualización de datos del vuelo.",
            "Integración del frontend con el backend.",
            "Implementación de la lógica de aeropuertos, vuelos, reservas y selección de asientos."
        ],
        en: ["Design and implementation of the database.",
              "Development of the seat reservation and flight information interface.",
              "Integration of frontend with backend.",
              "Implementation of airport, flight, reservation, and seat selection logic."
        ]
    },
    aprendizaje: {
      es: ["A través de este proyecto fortalecí mis conocimientos en la aplicación de la arquitectura MVC y profundicé en la investigación e implementación de JWT en Spring Boot para la gestión de autenticación.",
          "También aprendí a diseñar bases de datos de manera más eficiente, estructurándolas correctamente para poder implementar métodos complejos y obtener la información necesaria de forma funcional. Además, mejoré mi capacidad para integrar el frontend con el backend, garantizando una comunicación fluida entre ambos.",
          "Finalmente, esta experiencia me permitió desarrollar habilidades de coordinación y organización al trabajar junto a un equipo de cuatro personas."],
      en: ["Through this project, I strengthened my knowledge of MVC architecture and deepened my research and implementation of JWT authentication in Spring Boot.",
        "I also learned to design databases more efficiently, structuring them properly to implement complex methods and extract necessary information effectively.",
        "Additionally, I improved my ability to integrate frontend and backend, ensuring fluent communication between both.",
        "Finally, this experience helped me develop coordination and organizational skills while working with a team of four people."
      ]
    },
    github: "https://github.com/Josue-Dz/test.git"
  },
  {
    id: "x-clone",
    imagen: { type: "image", src: xclone1 },
    media: [  { type: "image", src: xclone1 },
              { type: "image", src: xclone2 },
              { type: "image", src: xclone3 },
              { type: "image", src: xclone4 },
              { type: "image", src: xclone5 },
              { type: "image", src: xclone6 }
    ],
    titulo: {
      es: "Clon de “X” (antes Twitter)",
      en: "“X” Clone (formerly Twitter)"
    },
    descripcion: {
      es: "Este proyecto consiste en el desarrollo de un clon funcional de la red social X, implementando las características principales de la plataforma, como la visualización del feed, publicación de posts, interacción mediante likes y reposts, y secciones adicionales como tendencias y menú lateral. El sistema integra un frontend en React con un backend en Spring Boot, comunicándose mediante APIs y gestionando la información en una base de datos MySQL.",
      en: "This project consists of developing a functional clone of the X social platform, implementing main features such as feed visualization, post publishing, likes and reposts, and additional sections such as trends and sidebar menu. The system integrates a React frontend with a Spring Boot backend, communicating through APIs and managing data in a MySQL database."
    },
    tecnologias: {
      es: {
        lenguaje: ["JavaScript y Java"],
        frameworks: ["React Spring Boot, Tailwind CSS y Material UI"],
        baseDatos: ["MySQL"]
      },
      en: {
        language: ["JavaScript and Java"],
        frameworks: ["React Spring Boot, Tailwind CSS and Material UI"],
        database: ["MySQL"]
      }
    },
    detalle: {
      es: "Este proyecto fue desarrollado como parte de la asignatura Bases de Datos I, aplicando conceptos de modelado, consultas eficientes y relaciones entre entidades.",
      en: "This project was developed as part of the Databases I course, applying concepts of modeling, efficient queries, and entity relationships."
    },
    rol: {
        es: [ "Diseño e implementación de la base de datos.",
            "Desarrollo de la interfaz: feed, menú lateral, menú de suscripción, detalles de posts y sección de tendencias.",
            "Integración del frontend con el backend mediante APIs REST.",
            "Implementación de la lógica CRUD de posts, likes y reposts.",
            "Coordinación del equipo: asignación de tareas y revisión del progreso."
        ],
        en: ["Design and implementation of the database.",
              "Development of the user interface: feed, sidebar menu, subscription menu, post details, and trends section.",
              "Integration of frontend with backend via REST APIs.",
              "Implementation of CRUD logic for posts, likes, and reposts.",
              "Team coordination: task assignment and progress tracking."
        ]
    },
    aprendizaje: {
      es: ["A través de este proyecto aprendí los fundamentos de React y cómo integrarlo de forma efectiva con un backend en Spring Boot. ",
          "También desarrollé habilidades para resolver problemas relacionados con recursividad, diseñar bases de datos más específicas y optimizadas, y mejorar la colaboración en un equipo de 3 personas mediante técnicas de organización y comunicación más eficientes."
        ],
      en: ["Through this project, I learned the fundamentals of React and how to integrate it effectively with a Spring Boot backend.",
        "I also developed abilities to solve recursive logic problems, design more specific and optimized databases, and improve team collaboration using more efficient organization and communication techniques."
      ]
    },
    github: "https://github.com/Josue-Dz/proyecto-x-bd.git"
  },
  {
    id: "etl-data-warehouse",
    imagen: { type: "image", src: etl1 },
    media: [
      { type: "image", src: etl2},
      { type: "image", src: etl3 }
    ],
    titulo: {
      es: "ETL para un Data Warehouse",
      en: "ETL for a Data Warehouse"
    },
    descripcion: {
      es: "Este proyecto consiste en el desarrollo de un conjunto de procesos ETL para poblar una base de datos OLAP diseñada bajo un modelo de copo de nieve. El objetivo fue resolver un conjunto de preguntas de negocio definidas por el equipo y presentar los resultados mediante visualizaciones construidas en Tableau. Para ello, se implementaron scripts de transformación y carga de datos en Python, consultas para trasladar la información al Data Warehouse y gráficas que reflejaran correctamente los indicadores solicitados.",
      en: "This project consists of developing a set of ETL processes to populate an OLAP database designed under a snowflake model. The goal was to answer several business questions defined by the team and present the results through visualizations built in Tableau. This involved implementing Python scripts for transformation and loading, queries to populate the Data Warehouse, and dashboards that correctly reflected key indicators."
    },
    tecnologias: {
      es: {
        lenguaje: ["Python"],
        librerias: ["Pandas, SQLAlchemy, y PyODBC"],
        baseDatos: ["Microsoft SQL Server"],
        visualizacion: ["Tableau"]
      },
      en: {
        language: ["Python"],
        libraries: ["Pandas, SQLAlchemy, and PyODBC"],
        database: ["Microsoft SQL Server"],
        visualization: ["Tableau"]
      }
    },
    detalle: {
      es: "Proyecto desarrollado como parte de la asignatura Bases de Datos II, aplicando conceptos de arquitectura de datos, modelado multidimensional y procesos ETL.",
      en: "Developed as part of the Databases II course, applying concepts of data architecture, multidimensional modeling, and ETL processes."
    },
    rol: {
        es: ["Investigación sobre el uso de Python para procesos ETL.",
            "Definición de las preguntas de negocio que guiaron todo el desarrollo.",
            "Diseño e implementación de la base de datos OLAP con modelo de copo de nieve.",
            "Desarrollo de varios scripts ETL, incluyendo su prueba completa en ambientes controlados.",
            "Creación de consultas para la carga de datos al Data Warehouse.",
            "Revisión y validación de las gráficas en Tableau, asegurando que respondieran adecuadamente a cada pregunta del negocio.",
            "Coordinación del equipo: asignación de tareas y revisión de entregables."
        ],
        en: ["Research on Python for ETL processes.",
              "Definition of business questions guiding the development.",
              "Design and implementation of the OLAP database using a snowflake model.",
              "Development and testing of several ETL scripts.",
              "Creation of queries to load data into the Data Warehouse.",
              "Review and validation of Tableau visualizations.",
              "Team coordination: task assignment and deliverable review."
        ]
    },
    aprendizaje: {
      es: ["A través de este proyecto aprendí los fundamentos de las bases de datos OLTP y OLAP, el proceso completo de un ETL y la construcción de un Data Warehouse.",
          "También reforcé mis conocimientos en Python y análisis de datos, desarrollé habilidades de investigación efectiva y adquirí experiencia liderando un equipo de cuatro personas, distribuyendo responsabilidades y supervisando el cumplimiento de los requerimientos del proyecto."
        ],
      en: ["Through this project, I learned the fundamentals of OLTP and OLAP databases, the complete ETL process, and how to build a Data Warehouse.",
        "I also strengthened my skills in Python and data analysis, developed effective research abilities, and gained experience leading a team of four people, distributing responsibilities and supervising project requirements."
      ]
    },
    github: "https://github.com/a-galvez/Proyecto-BD2.git"
  },
  {
    id: "100-ingenieros-dijeron",
    imagen: { type: "image", src: ing1 },
    media: [
      { type: "image", src: ing1 },
    ],
    titulo: {
      es: "100 Ingenieros Dijeron",
      en: "100 Engineers Said"
    },
    descripcion: {
      es: "Este proyecto recrea la dinámica del popular programa “100 Latinos Dijeron”, adaptado como una actividad recreativa para los estudiantes de la carrera de Ingeniería en Sistemas en 2025. La aplicación cuenta con dos modos de visualización: una pantalla pública para mostrar las preguntas y respuestas a los participantes, y otra editable en tiempo real para actualizar el contenido y la puntuación de los equipos.",
      en: "This project recreates the dynamic of the popular show “100 Latinos Dijeron”, adapted as a recreational activity for Software Engineering students during the 2025 academic event. The application includes two display modes: a public screen that shows questions and answers to participants, and an editable live-control screen used to update content and team scores in real time."
    },
    tecnologias: {
      es: {
        lenguaje: ["JavaScript y Python"],
        librerias: ["React y Tailwind CSS"],
        baseDatos: ["Archivo JSON"]
      },
      en: {
        language: ["JavaScript and Python"],
        libraries: ["React and Tailwind CSS"],
        database: ["JSON file"]
      }
    },
    rol: {
      es: ["Desarrollo completo del frontend de la aplicación.",
            "Implementación de la lógica de actualización en tiempo real para mantener la pantalla del público sincronizada.",
            "Implementación de la lógica de puntuación, sumando puntos automáticamente para cada equipo."
        ],
      en: ["Full development of the application’s frontend.",
              "Implementation of real-time update logic to keep the public screen synchronized.",
              "Implementation of the scoring system, automatically adding points for each team."
        ]
    },
    aprendizaje: {
      es: ["En este proyecto aprendí a organizar mi trabajo de forma autónoma y a investigar soluciones técnicas por mi cuenta, como la actualización en tiempo real mediante CORSMiddleware. También tuve la libertad de explorar ideas creativas, diseñando e implementando una solución funcional sin requerimientos estrictos, fortaleciendo mi capacidad de investigación y resolución de problemas de manera independiente.",
        ],
      en: ["In this project, I learned how to organize my work independently and research technical solutions on my own, such as real-time updates using CORSMiddleware. I also had the creative freedom to design and implement a functional solution without strict requirements, strengthening my ability to research and solve problems autonomously.",
      ]
    },
    github: ""
  },

  {
    id: "cnn-flores",
    imagen: { type: "image", src: cnn1 },
    media: [
      { type: "image", src: cnn1 },
    ],
    titulo: {
      es: "Red Neuronal Convolucional",
      en: "Convolutional Neural Network"
    },
    descripcion: {
      es: "Este proyecto consiste en el desarrollo de una red neuronal convolucional (CNN) implementada desde cero, con el objetivo de clasificar cinco tipos de flores: rosas, tulipanes, margaritas, girasoles y hortensias. El sistema se construyó como proyecto final para la clase de Inteligencia Artificial, con el propósito de comprender a profundidad las capas y procesos que conforman una CNN sin depender de librerías avanzadas como TensorFlow o PyTorch.",
      en: "This project consists of developing a convolutional neural network (CNN) implemented from scratch to classify five types of flowers: roses, tulips, daisies, sunflowers, and hydrangeas. It was built as the final project for the Artificial Intelligence course, with the purpose of deeply understanding the layers and processes that compose a CNN without specialized libraries like TensorFlow or PyTorch."
    },
    tecnologias: {
      es: {
        lenguaje: ["Python"],
        librerias: ["NumPy, PIL, y pickle"],
        baseDatos: ["Imágenes recolectadas manualmente de internet (40 imágenes por clase)"],
      },
      en: {
        language: ["Python"],
        libraries: ["NumPy, PIL, and pickle"],
        database: ["Manually gathered images from the internet (40 images per class)"],
      }
    },
    detalle: {
      es: "Proyecto desarrollado como parte de la asignatura Inteligencia Artificial, aplicando conceptos fundamentales de redes neuronales convolucionales. Se implementaron desde cero las distintas capas de la CNN, incluyendo convolución, pooling y clasificación, utilizando Python sin el uso de librerías especializadas de deep learning. El modelo fue entrenado para clasificar cinco tipos de flores a partir de un conjunto de imágenes, permitiendo comprender en profundidad el funcionamiento interno de este tipo de redes.",
      en: "Project developed as part of the Artificial Intelligence course, applying fundamental concepts of convolutional neural networks. The different CNN layers were implemented from scratch, including convolution, pooling, and classification, using Python without specialized deep learning libraries. The model was trained to classify five types of flowers from an image dataset, allowing a deeper understanding of how this type of neural network works internally."
    },
    rol: {
        es: ["Al ser un proyecto individual, me encargué de:",
            "Investigar la teoría detrás de las redes neuronales y su funcionamiento interno.",
            "Implementar en Python todas las capas necesarias para una CNN desde cero.",
            "Utilizar PIL para la carga y procesamiento de imágenes.",
            "Guardar y cargar el modelo entrenado con pickle.",
            "Crear y organizar el dataset con imágenes seleccionadas manualmente.",
        ],
        en: ["As it was an individual project, I was responsible for:",
              "Researching the theory behind neural networks and their internal mechanisms.",
              "Implementing all necessary CNN layers from scratch in Python.",
              "Using PIL for image loading and preprocessing.",
              "Saving and loading the trained model using pickle.",
              "Creating and organizing the manually gathered dataset.",
        ]
    },
    aprendizaje: {
      es: ["Este proyecto me permitió comprender conceptos fundamentales de redes neuronales y aterrizarlos en una implementación práctica. Aprendí a investigar teoría y ejemplos de forma autónoma, lo que fue clave para entender un tema tan abstracto. Además, entendí cómo aplicar estos modelos a problemas reales de reconocimiento de imágenes.",
        ],
      en: ["This project allowed me to understand fundamental neural network concepts and apply them in a practical implementation. I learned to research theory and examples independently, which was essential for understanding such an abstract topic. I also learned how to apply these models to real image recognition problems.",
      ]
    },
    github: "https://github.com/a-galvez/Proyecto-IA.git"
  }
];

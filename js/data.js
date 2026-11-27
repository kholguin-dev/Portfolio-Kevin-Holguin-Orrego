/**
 * data.js — Fuente única de datos del portafolio (Semana 3 & 5: Modularidad ES6+)
 * Contiene proyectos colaborativos, experiencia laboral, educación y habilidades.
 */

export const PROJECTS = [
  {
    id: 'aguacate-makeup',
    index: '01',
    title: 'Aguacate Make-Up — E-Commerce & Identidad Web',
    type: 'Proyecto Colaborativo · E-Commerce',
    shortSummary:
      'Plataforma web de comercio electrónico desarrollada para digitalizar el catálogo y automatizar la gestión de pedidos de una marca real de cosméticos.',
    description:
      'Plataforma web de comercio electrónico desarrollada para digitalizar el catálogo y automatizar la gestión de pedidos de una marca real de cosméticos.',
    challengeAndSolution:
      'El negocio gestionaba sus ventas manualmente por redes sociales, dificultando la visualización del inventario y el cierre de pedidos. Diseñamos e implementamos una tienda web responsiva con catálogo interactivo, estructura escalable y una experiencia de compra clara centrada en la conversión.',
    contribution:
      'Liderazgo en arquitectura visual UI/UX, maquetación responsiva, identidad de marca e integración frontend.',
    collaborators:
      'Heilen Parra, Estefany Hernández, Yuliana Quintero, Jorge Perdomo y Kevin Holguín.',
    stack: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript ES6+', 'Diseño UI/UX', 'Git & GitHub'],
    demoUrl: 'https://kholguin-dev.github.io/Team-6-Aguacate-Make-Up/',
    repoUrl: 'https://github.com/kholguin-dev/Team-6-Aguacate-Make-Up'
  },
  {
    id: 'sala-6-hackathon',
    index: '02',
    title: 'Tienda de Moda Online — Proyecto Hackathon',
    type: 'Proyecto Colaborativo · Hackathon Generation (Sala 6)',
    shortSummary:
      'Plataforma web de comercio electrónico enfocada en ropa de moda, desarrollada bajo metodología ágil para ofrecer una experiencia de compra moderna, intuitiva y atractiva.',
    description:
      'Plataforma web de comercio electrónico enfocada en ropa de moda, desarrollada bajo metodología ágil en una hackatón intensiva de Generation para ofrecer una experiencia de compra moderna, intuitiva y atractiva.',
    challengeAndSolution:
      'El reto consistió en estructurar y desplegar en tiempo récord una tienda de moda funcional capaz de presentar colecciones de forma clara en cualquier dispositivo y guiar al usuario hacia la compra sin fricciones. Lo resolvimos mediante una arquitectura modular, navegación limpia y componentes responsivos centrados en la conversión.',
    contribution:
      'Participación transversal en todas las etapas del proyecto: conceptualización de producto, diseño de interfaz (UI/UX), maquetación responsiva con HTML5/CSS3/Bootstrap e implementación de la lógica interactiva en JavaScript.',
    collaborators:
      'Juan Manuel Rodríguez, Diana Ocampo, Luisa Sepúlveda, Juan Felipe Ramos y Kevin Holguín.',
    stack: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript ES6+', 'Scrum / Trabajo Ágil', 'Git & GitHub'],
    demoUrl: 'https://kholguin-dev.github.io/Sala-6-Hakaton-1/',
    repoUrl: 'https://github.com/kholguin-dev/Sala-6-Hakaton-1'
  }
];

export const EXPERIENCE = [
  {
    period: 'Nov 2021 - Sep 2024',
    role: 'Diseñador Gráfico',
    organization: 'Corporación Universitaria Lasallista · Caldas, Antioquia',
    description:
      'Lideré la línea gráfica web de las campañas de matrículas priorizando la usabilidad y la conversión. Estandaricé la recepción de requerimientos digitales y gestioné más de 100 activos mensuales bajo plazos estrictos.'
  },
  {
    period: 'Ago 2023 - Dic 2023',
    role: 'Docente',
    organization: 'Instituto Técnico LaSalle · Caldas, Antioquia',
    description:
      'Guié la formación práctica de 40 estudiantes en herramientas digitales, traduciendo conceptos técnicos complejos en pasos claros. Implementé planes de mejora temprana que lograron el 100% de aprobación del grupo.'
  }
];

export const EDUCATION = [
  {
    period: 'Sep 2026 - Dic 2026',
    degree: 'Desarrollador Junior Full Stack / Java',
    institution: 'Generation Colombia · Modalidad virtual'
  },
  {
    period: '2020',
    degree: 'Técnico en Diseño Gráfico Digital',
    institution: 'CESDE Institución Educativa · Antioquia'
  },
  {
    period: '2015',
    degree: 'Tecnólogo en Producción de Multimedia',
    institution: 'Servicio Nacional de Aprendizaje (SENA) · Colombia'
  }
];

export const TECH_SKILLS = [
  'Java 21',
  'Spring Boot',
  'JavaScript (ES6+)',
  'HTML5 Semántico',
  'CSS3 / Variables :root',
  'Bootstrap 5',
  'React.js',
  'API REST',
  'MySQL',
  'MongoDB',
  'JUnit 5 & Mockito',
  'Git & GitHub',
  'Diseño UI/UX',
  'Estrategia Comercial'
];

export const SOFT_SKILLS = [
  'Pensamiento orientado al cliente',
  'Resolución de problemas',
  'Trabajo colaborativo (Scrum)',
  'Comunicación efectiva',
  'Adaptabilidad',
  'Aprendizaje continuo'
];

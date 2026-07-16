export interface NavLink {
  label: string;
  href: string;
}

export interface HighlightItem {
  title: string;
  value: string;
  description: string;
}

export interface StackItem {
  name: string;
  category: string;
  icon: string;
  iconKey?: string;
  image?: string;
}

export interface StackGroup {
  title: string;
  description: string;
  items: StackItem[];
}

export interface SkillItem {
  name: string;
  level: string;
  description: string;
  badge: string;
}

export interface ProjectMedia {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt: string;
}

export interface MediaItem {
  type: 'image' | 'video';
  src: string;
  webpSrc?: string;
  pngSrc?: string;
  alt: string;
}

export interface ProjectItem {
  title: string;
  period: string;
  description: string;
  stack: string[];
  features: string[];
  media: MediaItem[];
  platform: 'web' | 'mobile';
  accent: string;
}

export interface ExperienceProject {
  title: string;
  period: string;
  achievements: string[];
  technologies?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  projects: ExperienceProject[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  category: string;
  credentialUrl?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email';
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Tecnologías', href: '#stack-principal' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Certificados', href: '#certificados' },
  { label: 'Contacto', href: '#contacto' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Correo', href: 'mailto:andy.v.centeno@gmail.com', icon: 'email' },
  { label: 'GitHub', href: 'https://github.com/Andy-Vc', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/andy-valdivia-centeno-111222338',
    icon: 'linkedin',
  },
];

export const HIGHLIGHTS: HighlightItem[] = [
  {
    title: 'Formación',
    value: 'Computación e Informática',
    description:
      'Base sólida en análisis, algoritmos y diseño de soluciones web desde el pregrado.',
  },
  {
    title: 'Enfoque',
    value: 'Desarrollo end-to-end',
    description:
      'Desde el diseño de la API hasta la interfaz, cuidando cada capa del sistema.',
  },
  {
    title: 'Interés',
    value: 'Arquitectura escalable',
    description:
      'Microservicios, patrones de diseño y buenas prácticas pensadas para crecer.',
  },
];

export const STACK_GROUPS: StackGroup[] = [
  {
    title: 'Backend',
    description:
      'Tecnologías que uso para construir APIs, seguridad y lógica de negocio.',
    items: [
      {
        name: 'Java 21',
        category: 'Backend',
        icon: 'J',
        image: 'assets/icons/java',
      },
      {
        name: 'Spring Boot',
        category: 'Backend',
        icon: 'SB',
        iconKey: 'springboot',
      },
      {
        name: 'Spring Security',
        category: 'Backend',
        icon: 'SS',
        iconKey: 'springsecurity',
      },
      {
        name: 'C#',
        category: 'Backend',
        icon: 'CS',
        image: 'assets/icons/csharp',
      },
      {
        name: '.NET Core',
        category: 'Backend',
        icon: 'NET',
        iconKey: 'dotnet',
      },
      {
        name: '.NET Framework',
        category: 'Backend',
        icon: 'NF',
        iconKey: 'dotnet',
      },
      {
        name: 'Node.js',
        category: 'Backend',
        icon: 'ND',
        iconKey: 'nodedotjs',
      },
      { name: 'FastAPI', category: 'Backend', icon: 'FA', iconKey: 'fastapi' },
      { name: 'Python', category: 'Backend', icon: 'PY', iconKey: 'python' },
    ],
  },
  {
    title: 'Frontend',
    description: 'Stack principal para interfaces, composición visual y UX.',
    items: [
      { name: 'Angular', category: 'Frontend', icon: 'Ng', iconKey: 'angular' },
      {
        name: 'TypeScript',
        category: 'Frontend',
        icon: 'TS',
        iconKey: 'typescript',
      },
      {
        name: 'JavaScript',
        category: 'Frontend',
        icon: 'JS',
        iconKey: 'javascript',
      },
      { name: 'HTML5', category: 'Frontend', icon: 'HT', iconKey: 'html5' },
      { name: 'CSS3', category: 'Frontend', icon: 'CS', iconKey: 'css3' },
      {
        name: 'Tailwind CSS',
        category: 'Frontend',
        icon: 'TW',
        iconKey: 'tailwindcss',
      },
      {
        name: 'Bootstrap',
        category: 'Frontend',
        icon: 'BS',
        iconKey: 'bootstrap',
      },
      { name: 'RxJS', category: 'Frontend', icon: 'Rx', iconKey: 'reactivex' },
    ],
  },
  {
    title: 'Bases de datos',
    description:
      'Modelado, persistencia y sistemas de datos que manejo con soltura.',
    items: [
      {
        name: 'PostgreSQL',
        category: 'Databases',
        icon: 'PG',
        iconKey: 'postgresql',
      },
      { name: 'MySQL', category: 'Databases', icon: 'MY', iconKey: 'mysql' },
      {
        name: 'MongoDB',
        category: 'Databases',
        icon: 'MO',
        iconKey: 'mongodb',
      },
      { name: 'Redis', category: 'Databases', icon: 'RD', iconKey: 'redis' },
      {
        name: 'SupaBase',
        category: 'Databases',
        icon: 'SB',
        iconKey: 'supabase',
      },
      { name: 'Neon', category: 'Databases', icon: 'NE', iconKey: 'neon' },
      {
        name: 'Firebase',
        category: 'Databases',
        icon: 'FB',
        iconKey: 'firebase',
      },
      {
        name: 'Microsoft SQL Server',
        category: 'Databases',
        icon: 'MS',
        image: 'assets/icons/mssql',
      },
    ],
  },
  {
    title: 'DevOps',
    description:
      'Herramientas para contenedores, integración y flujo de trabajo.',
    items: [
      { name: 'Docker', category: 'DevOps', icon: 'DK', iconKey: 'docker' },
      {
        name: 'Docker Compose',
        category: 'DevOps',
        icon: 'DC',
        iconKey: 'docker',
      },
      { name: 'Git', category: 'DevOps', icon: 'GT', iconKey: 'git' },
      { name: 'GitHub', category: 'DevOps', icon: 'GH', iconKey: 'github' },
      {
        name: 'Cloudinary',
        category: 'DevOps',
        icon: 'CL',
        iconKey: 'cloudinary',
      },
      { name: 'RabbitMQ', category: 'DevOps', icon: 'RM', iconKey: 'rabbitmq' },
      { name: 'Render', category: 'Tools', icon: 'RE', iconKey: 'render' },
      { name: 'Vercel', category: 'Tools', icon: 'VE', iconKey: 'vercel' },
      { name: 'Netlify', category: 'Tools', icon: 'NL', iconKey: 'netlify' },
    ],
  },
  {
    title: 'Mobile',
    description:
      'Tecnologías que también conozco para desarrollo móvil nativo.',
    items: [
      { name: 'Kotlin', category: 'Mobile', icon: 'KT', iconKey: 'kotlin' },
      { name: 'Android', category: 'Mobile', icon: 'AN', iconKey: 'android' },
      { name: 'Swift', category: 'Mobile', icon: 'SW', iconKey: 'swift' },
      { name: 'iOS', category: 'Mobile', icon: 'IO', iconKey: 'ios' },
    ],
  },
  {
    title: 'Herramientas',
    description:
      'Software que uso para documentar, diseñar y validar el desarrollo.',
    items: [
      { name: 'Postman', category: 'Tools', icon: 'PM', iconKey: 'postman' },
      {
        name: 'SoapUI',
        category: 'Tools',
        icon: 'SU',
        image: 'assets/icons/soap-ui',
      },
      {
        name: 'IntelliJ IDEA',
        category: 'Tools',
        icon: 'IJ',
        iconKey: 'intellijidea',
      },
      {
        name: 'Spring Tool Suite',
        category: 'Tools',
        icon: 'STS',
        image: 'assets/icons/sts',
      },
      { name: 'Cursor', category: 'Tools', icon: 'CU', iconKey: 'cursor' },
      {
        name: 'GitHub Copilot',
        category: 'Tools',
        icon: 'GC',
        iconKey: 'githubcopilot',
      },
      { name: 'Figma', category: 'Tools', icon: 'FG', iconKey: 'figma' },
      { name: 'Swagger', category: 'Tools', icon: 'SW', iconKey: 'swagger' },
      {
        name: 'VS Code',
        category: 'Tools',
        icon: 'VS',
        image: 'assets/icons/vs-code',
      },
      {
        name: 'Visual Studio',
        category: 'Tools',
        icon: 'VS',
        image: 'assets/icons/visual-studio',
      },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Aventuria',
    period: 'Mayo 2026',
    description:
      'SaaS de reservas hoteleras desarrollado de extremo a extremo en un mes, junto al líder técnico, y desplegado en producción.',
    stack: [
      'Angular',
      'Spring Boot',
      'Neon (PostgreSQL)',
      'Cloudinary',
      'Render',
      'Vercel',
      'Spring Mail',
    ],
    platform: 'web',
    features: [
      'Roles diferenciados: superadmin, administrador de hotel o establecimiento, recepcionista de hotel y usuario final',
      'Dashboard de reportes con gráficos de ocupación, ingresos y reservas por periodo',
      'Gestión de hoteles, establecimientos y habitaciones desde el panel admin, con disponibilidad en tiempo real',
      'Búsqueda y filtrado de hoteles por ubicación, fechas y precio para el usuario final',
      'Flujo completo de reserva: selección de habitación, confirmación y pago',
      'Autenticación con verificación por código de 6 dígitos al correo',
      'Notificaciones y comprobantes automáticos por correo tras cada reserva',
      'Backend en Render y frontend en Vercel, en producción',
    ],
    media: [
      {
        type: 'image',
        src: 'assets/projects/aventuria/Inicio - Aventuria.avif',
        webpSrc: 'assets/projects/aventuria/Inicio - Aventuria.webp',
        pngSrc: 'assets/projects/aventuria/Inicio - Aventuria.png',
        alt: 'Pantalla de Inicio',
      },
      {
        type: 'image',
        src: 'assets/projects/aventuria/Listado Hoteles - Aventuria.avif',
        webpSrc: 'assets/projects/aventuria/Listado Hoteles - Aventuria.webp',
        pngSrc: 'assets/projects/aventuria/Listado Hoteles - Aventuria.png',
        alt: 'Listado de Hoteles',
      },
      {
        type: 'image',
        src: 'assets/projects/aventuria/Detalle Establecimiento - Aventuria.avif',
        webpSrc:
          'assets/projects/aventuria/Detalle Establecimiento - Aventuria.webp',
        pngSrc:
          'assets/projects/aventuria/Detalle Establecimiento - Aventuria.png',
        alt: 'Detalle del Establecimiento',
      },
      {
        type: 'image',
        src: 'assets/projects/aventuria/Detalle Hotel - Aventuria.avif',
        webpSrc: 'assets/projects/aventuria/Detalle Hotel - Aventuria.webp',
        pngSrc: 'assets/projects/aventuria/Detalle Hotel - Aventuria.png',
        alt: 'Detalle del Hotel',
      },
      {
        type: 'image',
        src: 'assets/projects/aventuria/SuperAdmin Dashboard - Aventuria.avif',
        webpSrc:
          'assets/projects/aventuria/SuperAdmin Dashboard - Aventuria.webp',
        pngSrc:
          'assets/projects/aventuria/SuperAdmin Dashboard - Aventuria.png',
        alt: 'Dashboard del Super Admin',
      },
      {
        type: 'image',
        src: 'assets/projects/aventuria/AdminHotel Habitaciones - Aventuria.avif',
        webpSrc:
          'assets/projects/aventuria/AdminHotel Habitaciones - Aventuria.webp',
        pngSrc:
          'assets/projects/aventuria/AdminHotel Habitaciones - Aventuria.png',
        alt: 'Habitaciones del Admin Hotel',
      },
      {
        type: 'image',
        src: 'assets/projects/aventuria/AdminHotel Reportes - Aventuria.avif',
        webpSrc:
          'assets/projects/aventuria/AdminHotel Reportes - Aventuria.webp',
        pngSrc: 'assets/projects/aventuria/AdminHotel Reportes - Aventuria.png',
        alt: 'Reportes del Admin Hotel',
      },
    ],
    accent: 'bg-[#121214]',
  },
  {
    title: "KoroFood's",
    period: 'Enero 2026 — Febrero 2026',
    description:
      'Sistema de gestión de restaurante con arquitectura de microservicios, desarrollado en equipo bajo metodología Scrum.',
    stack: [
      'Angular',
      'Spring Boot',
      'PostgreSQL',
      'RabbitMQ',
      'Redis',
      'Docker',
      'Cloudinary',
    ],
    platform: 'web',
    features: [
      'Gestión de reservas de mesas y pedidos en línea desde el panel del cliente',
      'Módulo de órdenes para meseros con seguimiento en tiempo real',
      'Chat en tiempo real entre clientes y recepcionistas con WebSockets',
      'Comunicación asíncrona entre microservicios mediante RabbitMQ',
      'Caché con Redis para optimizar tiempos de respuesta y reducir carga en base de datos',
      'Arquitectura completamente contenerizada con Docker, lista para despliegue',
    ],
    media: [
      {
        type: 'image',
        src: 'assets/projects/korofoods/Inicio - KoroFoods.avif',
        webpSrc: 'assets/projects/korofoods/Inicio - KoroFoods.webp',
        pngSrc: 'assets/projects/korofoods/Inicio - KoroFoods.png',
        alt: 'Pantalla de Inicio',
      },
      {
        type: 'image',
        src: 'assets/projects/korofoods/Menu - KoroFoods.avif',
        webpSrc: 'assets/projects/korofoods/Menu - KoroFoods.webp',
        pngSrc: 'assets/projects/korofoods/Menu - KoroFoods.png',
        alt: 'Menú de KoroFoods',
      },
      {
        type: 'image',
        src: 'assets/projects/korofoods/Reserva - KoroFoods.avif',
        webpSrc: 'assets/projects/korofoods/Reserva - KoroFoods.webp',
        pngSrc: 'assets/projects/korofoods/Reserva - KoroFoods.png',
        alt: 'Pantalla de Reserva',
      },
      {
        type: 'image',
        src: 'assets/projects/korofoods/Ordenes - KoroFoods.avif',
        webpSrc: 'assets/projects/korofoods/Ordenes - KoroFoods.webp',
        pngSrc: 'assets/projects/korofoods/Ordenes - KoroFoods.png',
        alt: 'Ordenes del Mesero',
      },
      {
        type: 'image',
        src: 'assets/projects/korofoods/Chat WebSockets - KoroFoods.avif',
        webpSrc: 'assets/projects/korofoods/Chat WebSockets - KoroFoods.webp',
        pngSrc: 'assets/projects/korofoods/Chat WebSockets - KoroFoods.png',
        alt: 'Chat en Tiempo Real',
      },
      {
        type: 'image',
        src: 'assets/projects/korofoods/Docker - KoroFoods.avif',
        webpSrc: 'assets/projects/korofoods/Docker - KoroFoods.webp',
        pngSrc: 'assets/projects/korofoods/Docker - KoroFoods.png',
        alt: 'Contenerización con Docker',
      },
    ],
    accent: 'bg-[#141416]',
  },
  {
    title: 'CafeAurora',
    period: 'Junio 2026 — Julio 2026',
    description:
      'Sistema de reservas para cafetería con roles diferenciados (administrador, recepcionista y usuario final), backend en Spring Boot con Supabase como base de datos y autenticación.',
    stack: [
      'Angular',
      'Spring Boot',
      'PostgreSQL',
      'Supabase',
      'Cloudinary',
      'Docker',
    ],
    platform: 'web',
    features: [
      'Autenticación con Google OAuth integrada mediante Supabase Auth',
      'Roles diferenciados: administrador, recepcionista y usuario final, cada uno con su propio panel',
      'Row Level Security (RLS) en PostgreSQL para control de acceso a nivel de base de datos',
      'Galería de imágenes gestionada con Cloudinary',
      'Modo oscuro con persistencia de preferencia del usuario',
      'Despliegue en producción con Docker: backend en Render y frontend en Vercel',
    ],
    media: [
      {
        type: 'image',
        src: 'assets/projects/cafeaurora/Inicio - CafeAurora.avif',
        webpSrc: 'assets/projects/cafeaurora/Inicio - CafeAurora.webp',
        pngSrc: 'assets/projects/cafeaurora/Inicio - CafeAurora.png',
        alt: 'Pantalla de Inicio',
      },
      {
        type: 'image',
        src: 'assets/projects/cafeaurora/Reserva - CafeAurora.avif',
        webpSrc: 'assets/projects/cafeaurora/Reserva - CafeAurora.webp',
        pngSrc: 'assets/projects/cafeaurora/Reserva - CafeAurora.png',
        alt: 'Gestión de Reservas',
      },
      {
        type: 'image',
        src: 'assets/projects/cafeaurora/Galeria Oscuro - CafeAurora.avif',
        webpSrc: 'assets/projects/cafeaurora/Galeria Oscuro - CafeAurora.webp',
        pngSrc: 'assets/projects/cafeaurora/Galeria Oscuro - CafeAurora.png',
        alt: 'Galeria Modo Oscuro',
      },
      {
        type: 'image',
        src: 'assets/projects/cafeaurora/Panel Admin - CafeAurora.avif',
        webpSrc: 'assets/projects/cafeaurora/Panel Admin - CafeAurora.webp',
        pngSrc: 'assets/projects/cafeaurora/Panel Admin - CafeAurora.png',
        alt: 'Panel de Administrador',
      },
      {
        type: 'image',
        src: 'assets/projects/cafeaurora/Panel Recepcionista - CafeAurora.avif',
        webpSrc:
          'assets/projects/cafeaurora/Panel Recepcionista - CafeAurora.webp',
        pngSrc:
          'assets/projects/cafeaurora/Panel Recepcionista - CafeAurora.png',
        alt: 'Panel de Recepcionista',
      },
      {
        type: 'image',
        src: 'assets/projects/cafeaurora/Autenticación Google - CafeAurora.avif',
        webpSrc:
          'assets/projects/cafeaurora/Autenticación Google - CafeAurora.webp',
        pngSrc:
          'assets/projects/cafeaurora/Autenticación Google - CafeAurora.png',
        alt: 'Autenticación con Google',
      },
      {
        type: 'image',
        src: 'assets/projects/cafeaurora/Completando Autenticación - CafeAurora.avif',
        webpSrc:
          'assets/projects/cafeaurora/Completando Autenticación - CafeAurora.webp',
        pngSrc:
          'assets/projects/cafeaurora/Completando Autenticación - CafeAurora.png',
        alt: 'Completando Autenticación',
      },
    ],
    accent: 'bg-[#141416]',
  },
  {
    title: 'GreenGuardian',
    period: 'Noviembre 2025 — Diciembre 2025',
    description:
      'Aplicación Android para reportar incidentes ambientales, con clasificación automática de imágenes mediante Machine Learning.',
    stack: [
      'Android (Kotlin)',
      'Spring Boot',
      'Python',
      'Machine Learning',
      'PostgreSQL',
      'Cloudinary',
    ],
    platform: 'mobile',
    features: [
      'Reporte de incidentes ambientales con clasificación automática de imágenes vía Machine Learning',
      'Asistente conversacional (chat IA) para guiar al usuario en el reporte',
      'Sistema de recompensas: catálogo y canje de cupones por reportes validados',
      'Backend RESTful en Spring Boot para gestión de reportes, usuarios y cupones',
      'Modelo de clasificación en Python integrado al flujo de la app vía API',
    ],
    media: [
      {
        type: 'image',
        src: 'assets/projects/greenguard/Inicio - GreenGuard.avif',
        webpSrc: 'assets/projects/greenguard/Inicio - GreenGuard.webp',
        pngSrc: 'assets/projects/greenguard/Inicio - GreenGuard.png',
        alt: 'Pantalla de Inicio',
      },
      {
        type: 'image',
        src: 'assets/projects/greenguard/Chat - GreenGuard.avif',
        webpSrc: 'assets/projects/greenguard/Chat - GreenGuard.webp',
        pngSrc: 'assets/projects/greenguard/Chat - GreenGuard.png',
        alt: 'Chat IA de GreenGuard',
      },
      {
        type: 'image',
        src: 'assets/projects/greenguard/Reportes - GreenGuard.avif',
        webpSrc: 'assets/projects/greenguard/Reportes - GreenGuard.webp',
        pngSrc: 'assets/projects/greenguard/Reportes - GreenGuard.png',
        alt: 'Pantalla de Reportes',
      },
      {
        type: 'image',
        src: 'assets/projects/greenguard/Clasificación IA - GreenGuard.avif',
        webpSrc:
          'assets/projects/greenguard/Clasificación IA - GreenGuard.webp',
        pngSrc: 'assets/projects/greenguard/Clasificación IA - GreenGuard.png',
        alt: 'Clasificación Automática de Imágenes',
      },
      {
        type: 'image',
        src: 'assets/projects/greenguard/Resultados IA - GreenGuard.avif',
        webpSrc: 'assets/projects/greenguard/Resultados IA - GreenGuard.webp',
        pngSrc: 'assets/projects/greenguard/Resultados IA - GreenGuard.png',
        alt: 'Resultados de la Clasificación',
      },
      {
        type: 'image',
        src: 'assets/projects/greenguard/Catalogo Cupones - GreenGuard.avif',
        webpSrc:
          'assets/projects/greenguard/Catalogo Cupones - GreenGuard.webp',
        pngSrc: 'assets/projects/greenguard/Catalogo Cupones - GreenGuard.png',
        alt: 'Catálogo de Cupones',
      },
      {
        type: 'image',
        src: 'assets/projects/greenguard/Canjear Cupon - GreenGuard.avif',
        webpSrc: 'assets/projects/greenguard/Canjear Cupon - GreenGuard.webp',
        pngSrc: 'assets/projects/greenguard/Canjear Cupon - GreenGuard.png',
        alt: 'Canjear Cupón',
      },
    ],
    accent: 'bg-[#121214]',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Practicante Desarrollador Full Stack',
    company: 'DevCloudPerú',
    period: 'Abril 2026 — Junio 2026',
    projects: [
      {
        title: 'SaaS de reservas "Aventuria"',
        period: 'Abril 2026 – Mayo 2026',
        achievements: [
          'Desarrollé de extremo a extremo el SaaS (Angular + Spring Boot) en un mes, junto al líder técnico.',
          'Implementé autenticación con verificación por código al correo, e integré Neon y Cloudinary.',
          'Desplegué el producto en producción (backend en Render, frontend en Vercel).',
        ],
        technologies: [
          'Spring Boot',
          'Angular',
          'Neon (PostgreSQL)',
          'Cloudinary',
          'Render',
          'Vercel',
          'Spring Mail',
        ],
      },
      {
        title: 'Soporte — Sistema MediVes, Clínica Vesalio',
        period: 'Mayo 2026 - Junio 2026',
        achievements: [
          'Capacité presencialmente a los doctores en el uso del nuevo sistema.',
          'Recopilé feedback de usuarios finales y lo reporté al equipo de desarrollo.',
          'Colaboré en el manual de usuario y el glosario del sistema.',
        ],
      },
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'SQL - BASE DE DATOS 2 + IA',
    issuer: 'Programa de Iniciación Tecnológica PIT - 2025',
    date: '2025',
    category: 'Bases de datos',
    credentialUrl: '/assets/documents/certificado-bd.pdf',
  },
  {
    title: 'FUNDAMENTOS DE DEVOPS: DOCKERS',
    issuer: 'Programa de Iniciación Tecnológica PIT - 2025',
    date: '2025',
    category: 'DevOps',
    credentialUrl: '/assets/documents/certificado-docker.pdf',
  },
  {
    title: 'CLOUD COMPUTING: AWS - AZURE - GOOGLE CLOUD',
    issuer: 'Programa de Iniciación Tecnológica PIT - 2025',
    date: '2025',
    category: 'Cloud',
    credentialUrl: '/assets/documents/certificado-cloud.pdf',
  },
  {
    title: 'EGRESADO EN COMPUTACIÓN E INFORMÁTICA',
    issuer: 'Cibertec - 2026',
    date: '2026',
    category: 'Logro académico',
    credentialUrl: '/assets/documents/constancia-egresado.pdf',
  },
  {
    title: 'RECONOCIMIENTO ACADÉMICO - MEJOR PROYECTO DEL CURSO',
    issuer: 'Cibertec - 2024',
    date: '2024',
    category: 'Reconocimiento',
    credentialUrl: '/assets/documents/constancia-feria.pdf',
  },
];

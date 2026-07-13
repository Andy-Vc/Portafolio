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

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  accent: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  summary: string;
  achievements: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  year: string;
  focus: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail';
}

export interface GitHubRepo {
  name: string;
  description: string;
  stack: string[];
  url: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Stack Principal', href: '#stack-principal' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Tecnologías', href: '#stack-principal' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contacto', href: '#contacto' }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/your-username', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile', icon: 'linkedin' },
  { label: 'CV', href: '/cv.pdf', icon: 'mail' }
];

export const HIGHLIGHTS: HighlightItem[] = [
  {
    title: 'Formación',
    value: 'Computación e Informática',
    description: 'Egresado con base en análisis, programación y diseño de soluciones web.'
  },
  {
    title: 'Enfoque',
    value: 'Full Stack Developer',
    description: 'Java, Spring Boot, Angular y PostgreSQL como base principal de trabajo.'
  },
  {
    title: 'Interés',
    value: 'Arquitectura',
    description: 'Microservicios, buenas prácticas, escalabilidad y desarrollo backend.'
  }
];

export const STACK_GROUPS: StackGroup[] = [
  {
    title: 'Backend',
    description: 'Tecnologías que uso para construir APIs, seguridad y lógica de negocio.',
    items: [
      { name: 'Java 21', category: 'Backend', icon: 'J', iconKey: 'openjdk' },
      { name: 'Spring Boot', category: 'Backend', icon: 'SB', iconKey: 'springboot' },
      { name: 'Spring Security', category: 'Backend', icon: 'SS', iconKey: 'springsecurity' },
      { name: '.NET Core', category: 'Backend', icon: 'NET', iconKey: 'dotnet' },
      { name: '.NET Framework', category: 'Backend', icon: 'NF', iconKey: 'dotnet' },
      { name: 'Node.js', category: 'Backend', icon: 'ND', iconKey: 'nodedotjs' },
      { name: 'FastAPI', category: 'Backend', icon: 'FA', iconKey: 'fastapi' },
      { name: 'Python', category: 'Backend', icon: 'PY', iconKey: 'python' }
    ]
  },
  {
    title: 'Frontend',
    description: 'Stack principal para interfaces, composición visual y experiencia de usuario.',
    items: [
      { name: 'Angular', category: 'Frontend', icon: 'Ng', iconKey: 'angular' },
      { name: 'TypeScript', category: 'Frontend', icon: 'TS', iconKey: 'typescript' },
      { name: 'JavaScript', category: 'Frontend', icon: 'JS', iconKey: 'javascript' },
      { name: 'HTML5', category: 'Frontend', icon: 'HT', iconKey: 'html5' },
      { name: 'CSS3', category: 'Frontend', icon: 'CS', iconKey: 'css3' },
      { name: 'Tailwind CSS', category: 'Frontend', icon: 'TW', iconKey: 'tailwindcss' },
      { name: 'Bootstrap', category: 'Frontend', icon: 'BS', iconKey: 'bootstrap' },
      { name: 'RxJS', category: 'Frontend', icon: 'Rx', iconKey: 'reactivex' }
    ]
  },
  {
    title: 'Bases de datos',
    description: 'Modelado, persistencia y sistemas de datos que manejo con soltura.',
    items: [
      { name: 'PostgreSQL', category: 'Databases', icon: 'PG', iconKey: 'postgresql' },
      { name: 'MySQL', category: 'Databases', icon: 'MY', iconKey: 'mysql' },
      { name: 'MongoDB', category: 'Databases', icon: 'MO', iconKey: 'mongodb' },
      { name: 'Redis', category: 'Databases', icon: 'RD', iconKey: 'redis' }
    ]
  },
  {
    title: 'DevOps',
    description: 'Herramientas para contenedores, integración y flujo de trabajo.',
    items: [
      { name: 'Docker', category: 'DevOps', icon: 'DK', iconKey: 'docker' },
      { name: 'Docker Compose', category: 'DevOps', icon: 'DC', iconKey: 'docker' },
      { name: 'Git', category: 'DevOps', icon: 'GT', iconKey: 'git' },
      { name: 'GitHub', category: 'DevOps', icon: 'GH', iconKey: 'github' },
      { name: 'Cloudinary', category: 'DevOps', icon: 'CL', iconKey: 'cloudinary' },
      { name: 'RabbitMQ', category: 'DevOps', icon: 'RM', iconKey: 'rabbitmq' }
    ]
  },
  {
    title: 'Mobile',
    description: 'Tecnologías que también conozco para desarrollo móvil nativo.',
    items: [
      { name: 'Kotlin', category: 'Mobile', icon: 'KT', iconKey: 'kotlin' },
      { name: 'Android', category: 'Mobile', icon: 'AN', iconKey: 'android' },
      { name: 'Swift', category: 'Mobile', icon: 'SW', iconKey: 'swift' },
      { name: 'iOS', category: 'Mobile', icon: 'IO', iconKey: 'ios' }
    ]
  },
  {
    title: 'Herramientas',
    description: 'Software que uso para documentar, diseñar y validar el desarrollo.',
    items: [
        { name: 'Postman', category: 'Tools', icon: 'PM', iconKey: 'postman' },
        { name: 'IntelliJ IDEA', category: 'Tools', icon: 'IJ', iconKey: 'intellijidea' },
        { name: 'Cursor', category: 'Tools', icon: 'CU', iconKey: 'cursor' },
        { name: 'GitHub Copilot', category: 'Tools', icon: 'GC', iconKey: 'githubcopilot' },
        { name: 'Figma', category: 'Tools', icon: 'FG', iconKey: 'figma' },
        { name: 'Swagger', category: 'Tools', icon: 'SW', iconKey: 'swagger' }
    ] 
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Aventuria',
    description: 'Plataforma de reservas con enfoque multi tenant, autenticación robusta y flujo de operaciones.',
    stack: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker', 'Redis', 'RabbitMQ', 'Cloudinary'],
    github: 'https://github.com/your-username/aventuria',
    demo: '#contacto',
    accent: 'bg-[#121214]'
  },
  {
    title: 'Clinic Hub',
    description: 'Sistema clínico con módulos administrativos, seguridad por roles y trazabilidad de procesos.',
    stack: ['Java', 'Spring Security', 'Angular', 'MySQL', 'JWT', 'Docker'],
    github: 'https://github.com/your-username/clinichub',
    demo: '#contacto',
    accent: 'bg-[#141416]'
  },
  {
    title: 'Inventory Control',
    description: 'Panel de control para inventario con métricas operativas, integración de archivos y filtros.',
    stack: ['Angular', 'Node.js', 'MongoDB', 'Cloudinary', 'GitHub Actions'],
    github: 'https://github.com/your-username/inventory-control',
    demo: '#contacto',
    accent: 'bg-[#121214]'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: '2024 — Presente',
    role: 'Full Stack Developer',
    company: 'Proyectos web y productos internos',
    summary: 'Desarrollo de aplicaciones web con Java, Spring Boot y Angular, priorizando arquitectura y buenas prácticas.',
    achievements: [
      'Implementación de APIs REST, autenticación JWT y flujos por roles.',
      'Composición de interfaces con Angular y Tailwind CSS.',
      'Trabajo con Docker, PostgreSQL y despliegue reproducible.'
    ]
  },
  {
    period: '2022 — 2024',
    role: 'Frontend Developer',
    company: 'Equipos de producto',
    summary: 'Construcción de interfaces SPA con foco en mantenimiento, accesibilidad y claridad visual.',
    achievements: [
      'Estandarización de componentes y patrones UI.',
      'Aplicación de responsive-first y accesibilidad básica.',
      'Uso de RxJS y Angular para flujos reactivos.'
    ]
  }
];

export const GITHUB_REPOS: GitHubRepo[] = [
  {
    name: 'Aventuria',
    description: 'Proyecto de reservas con autenticación, roles y arquitectura preparada para escalar.',
    stack: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker'],
    url: 'https://github.com/your-username/aventuria'
  },
  {
    name: 'Clinic Hub',
    description: 'Sistema administrativo orientado a operaciones internas y control de procesos.',
    stack: ['Java', 'Angular', 'JWT', 'MySQL'],
    url: 'https://github.com/your-username/clinichub'
  },
  {
    name: 'Inventory Control',
    description: 'Panel operativo para inventario con flujos de gestión y almacenamiento de archivos.',
    stack: ['Angular', 'Node.js', 'MongoDB'],
    url: 'https://github.com/your-username/inventory-control'
  }
];
# Portafolio — Andy Valdivia

Portafolio profesional de Full Stack Developer, construido con Angular y Tailwind CSS. Diseñado para transmitir experiencia real de forma clara: stack técnico, proyectos con contexto (video/imagen, arquitectura, código), experiencia laboral y certificaciones, todo manejado desde datos tipados en vez de contenido hardcodeado.

**Demo en vivo:** [enlace-a-tu-deploy]
**Repositorio:** [enlace-a-tu-repo]

---

## Stack técnico

| Categoría   | Tecnologías                                  |
| ----------- | --------------------------------------------- |
| Frontend    | Angular (standalone components), TypeScript   |
| Estilos     | Tailwind CSS                                  |
| Animaciones | Angular Animations (`@angular/animations`)    |
| Tipografía  | Inter (Google Fonts)                          |

## Características

- **Diseño oscuro y minimalista**, con un sistema de tokens consistente (`surface-card`, `surface-border`, `foreground-*`, `brand`) en vez de colores sueltos por componente.
- **Contenido data-driven**: stack, experiencia, proyectos y certificaciones viven en `core/constants/portfolio-content.ts`, tipados con interfaces — agregar o editar contenido no requiere tocar el HTML.
- **Navbar con sección activa** vía `IntersectionObserver`, sin depender de librerías de routing para una landing de una sola página.
- **Modal de proyectos** (elemento nativo `<dialog>`) con layout partido en dos columnas (media + información), bloqueo de scroll de fondo compatible con iOS, y foco atrapado automático.
- **Animaciones de entrada por scroll** (`appRevealOnScroll` + Angular Animations) para cada sección.
- **Responsive** de móvil a desktop, con foco de teclado visible (`focus-ring`) en todos los elementos interactivos.

## Estructura del proyecto

```
src/
├── app/
│   ├── core/
│   │   └── constants/
│   │       └── portfolio-content.ts   # Datos: stack, experiencia, proyectos, certificaciones, socials
│   └── features/
│   |   ├── about/
│   |   ├── certificates/
│   |   ├── contact/
│   |   ├── experience/
│   |   ├── hero/
│   |   ├── projects/
│   |   └── skills/
|   |__ layout/
│   |   ├── footer/
│   |   └── navbar/
│   |__ shared/
│       └── directives/
│       |   ├── scroll-to-section.directive.ts
│       |   └── reveal-on-scroll.directive.ts
|       └── components/
│           └── tech-icon
|               └── tech-icon.component.ts
└── index.html
```

## Requisitos previos

- Node.js `>= 18.x`
- npm `>= 9.x` (o `pnpm` / `yarn`, ajustando los comandos)
- Angular CLI: `npm install -g @angular/cli`

## Instalación

```bash
git clone https://github.com/Andy-Vc/Portafolio.git
cd tu-repo
npm install
```

## Uso

```bash
# Servidor de desarrollo (http://localhost:4200)
ng serve

# Build de producción
ng build --configuration production

# Ejecutar pruebas unitarias
ng test
```

## Personalización de contenido

Todo el contenido editable vive en un solo archivo:

```
src/app/core/constants/portfolio-content.ts
```

Ahí se definen (con sus respectivas interfaces) los arrays `NAV_LINKS`, `STACK_GROUPS`, `HIGHLIGHTS`, `EXPERIENCE`, `PROJECTS`, `CERTIFICATIONS` y `SOCIAL_LINKS`. Modificar el portafolio (agregar un proyecto, una certificación, un rol nuevo) no requiere tocar ningún componente ni plantilla HTML.

## Despliegue

Este proyecto puede desplegarse en cualquier hosting de sitios estáticos (Vercel, Netlify, GitHub Pages, Render):

```bash
ng build --configuration production
# El output queda en dist/<nombre-del-proyecto>/browser
```

## Licencia

Este proyecto es de uso personal como portafolio profesional. El código puede consultarse con fines de referencia, pero los contenidos (textos, imágenes, CV) pertenecen a Andy Valdivia.

## Contacto

- **Correo:** andy.v.centeno@gmail.com.com
- **LinkedIn:** [linkedin.com/in/andy-valdivia-centeno-111222338](https://linkedin.com/in/andy-valdivia-centeno-111222338)
- **GitHub:** [github.com/Andy-Vc](https://github.com/Andy-Vc)
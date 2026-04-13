# Circle - Digital Design & Development Studio 

## 1. ¿Cómo surge el proyecto? (Origen)
Este proyecto nace como el primer desafío dentro del bootcamp de Full Stack Developer. Representa un estudio de diseño y desarrollo digital, construido siguiendo un flujo de trabajo real: desde el diseño (Figma) hasta una web funcional y dinámica. Se buscó simular un flujo de trabajo real de agencia, donde la interfaz no solo es estética, sino que consume datos de servicios externos y gestiona la interacción del usuario.

## Páginas del Proyecto
- **Home:** Landing page con secciones de Hero, clientes, proyectos destacados, testimonios y servicios.
- **Project Page:** Página dinámica que muestra detalles de un proyecto específico mediante el consumo de una API.
- **Contact:** Formulario funcional con validaciones para capturar leads de potenciales clientes.

## Funcionalidades Destacadas
- **Consumo Dinámico de API:** La sección de proyectos utiliza `fetch()` para obtener datos en tiempo real y mostrarlos según el ID del proyecto.
- **Filtrado Inteligente:** En la página de detalle, el sistema filtra automáticamente el proyecto actual para mostrar "Otros Proyectos" relacionados sin repeticiones.
- **Smooth Scroll:** Navegación fluida entre secciones para una mejor experiencia de usuario.
- **Diseño Responsive:** Adaptabilidad total a dispositivos móviles y tablets mediante Media Queries optimizadas.
- **Validación de Formularios:** Control de entrada de datos en la página de contacto antes del envío.

## 2. Tecnologías Usadas
* **HTML5 Semántico:** Para una estructura sólida y accesible.
* **CSS3 Avanzado:** Layouts con Flexbox, uso de Variables CSS para el diseño y Media Queries para el responsive.
* **JavaScript (ES6+):** Lógica asíncrona, manipulación dinámica del DOM y gestión de eventos.
* **Fetch API:** Para la integración de datos en tiempo real desde un endpoint externo.
* **Visual Studio Code:** Para la creación del proyecto.
* **GitHub:** Control de versiones.
* **IA generativa (Chat GPT y Gemini** Uso de IA generativa para la optimización de flujos de trabajo y resolución de problemas técnicos específicos. (Suena menos a "me lo hizo la IA" y más a "sé usar herramientas modernas").
* **Netlify:** Para el despliegue continuo y hosting.

## 3. Retos Técnicos (Principales Problemas)
Durante el desarrollo, me enfrenté a varios desafíos que permitieron profundizar en mis habilidades de debugging:

* **Lógica de Exclusión en la API:** El mayor reto fue implementar la lógica de filtrado de la página de proyectos y que no mostrara el proyecto actual al seleccionar otro proyecto, optimizando así la experiencia de navegación
* **Rutas Dinámicas:** Configurar `projects.html` para que actuara como una plantilla capaz de leer parámetros de URL (`?id=X`) y renderizar contenido diferente sin crear archivos HTML adicionales para cada proyecto.
* **Arquitectura Responsive:** Controlar el desbordamiento horizontal (causado por elementos decorativos del Hero), solucionado mediante `overflow-x: hidden`. Siendo posible adaptarlo a pantallas móviles sin perder jerarquía visual
* **Validación Custom:** Crear una lógica de validación que impidiera el registro de nombres específicos (como "Ironhack") y gestionara pop-ups personalizados en lugar de las alertas nativas.

## 4. Backlog (Mejoras Futuras)
* **Filtros por categoría:** Añadir botones para filtrar proyectos por UI/UX o Desarrollo.
* **Optimización de imágenes:** Implementar Lazy Loading para mejorar el rendimiento de carga.
* **Dark Mode:** Crear una versión oscura de la web aprovechando las variables CSS ya definidas.
* **Skeleton Screens:** Añadir estados de carga elegantes mientras se esperan los datos de la API.


---


# Circle - Digital Design & Development Studio 🚀

## 1. Project Origin
This project was developed as the first major challenge of the Full Stack Developer bootcamp. It represents a digital design and development studio, built following a real-world workflow: from high-fidelity design (Figma) to a fully functional and dynamic website. The goal was to simulate an agency environment where the interface is not only aesthetic but also handles external data and user interactions seamlessly.

## Project Pages
- **Home:** Landing page featuring Hero section, client showcase, recent projects, testimonials, and services.
- **Project Page:** A dynamic page that displays specific project details by consuming an external API.
- **Contact:** A functional form with custom validations to capture potential client leads.

## Key Features
- **Dynamic API Consumption:** The projects section uses the `fetch()` API to retrieve real-time data and render it based on project IDs.
- **Smart Filtering:** On the project detail page, the system automatically filters out the current project to display "Other Projects" without repetitions.
- **Smooth Scroll:** Fluid navigation between sections to enhance user experience (UX).
- **Responsive Design:** Full adaptability to mobile and tablet devices through optimized Media Queries.
- **Form Validation:** Data input control on the contact page to ensure information integrity before submission.

## 2. Technologies Used
* **Semantic HTML5:** For a solid and accessible structure.
* **Advanced CSS3:** Layouts built with Flexbox, CSS Variables for theming, and Media Queries for responsiveness.
* **JavaScript (ES6+):** Asynchronous logic, dynamic DOM manipulation, and event handling.
* **Fetch API:** For real-time data integration from an external endpoint.
* **Visual Studio Code:** Primary development environment.
* **GitHub:** Version control.
* **Generative AI (ChatGPT & Gemini):** Leveraged for workflow optimization and solving specific technical challenges.
* **Netlify:** For continuous deployment and hosting.

## 3. Technical Challenges (Main Problems)
During development, I faced several challenges that allowed me to deepen my debugging skills:

* **API Exclusion Logic:** The biggest challenge was implementing the filtering logic on the projects page to ensure the current project was excluded from the "Other Projects" list, optimizing the navigation experience.
* **Dynamic Routing:** Configuring `projects.html` to act as a template capable of reading URL parameters (`?id=X`) and rendering different content without creating multiple HTML files.
* **Responsive Architecture:** Handling horizontal overflow (caused by decorative Hero elements), solved using `overflow-x: hidden`. This allowed the site to adapt to mobile screens without losing visual hierarchy.
* **Custom Validation:** Developing validation logic to prevent specific entries (like "Ironhack") and managing custom pop-ups instead of native browser alerts.

## 4. Backlog (Future Improvements)
* **Category Filters:** Add buttons to filter projects by UI/UX or Development.
* **Image Optimization:** Implement Lazy Loading to improve loading performance.
* **Dark Mode:** Create a dark version of the site leveraging the existing CSS variables.
* **Skeleton Screens:** Add elegant loading states while waiting for API data.

---

## Deployment
* **Live URL:** *https://69dd51fd0e37d11b8ab4e831--brilliant-taffy-80c924.netlify.app/*

* **GitHub Repository:** *(https://github.com/laurasang13/project-responsive-website)*


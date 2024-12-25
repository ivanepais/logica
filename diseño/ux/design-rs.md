# Diseño Software

Diseño y arquitectura: Estructura y organización de un sistema de software para garantizar que sea eficiente, escalable, mantenible y confiable.


Diseño: decisiones de bajo nivel sobre cómo se implementarán las funcionalidades de un sistema.

Clases, funciones, módulos y componentes interactúan entre sí.

Patrones de diseño, Abstracción, Encapsulación, Cohesión y acoplamiento, etc.  

Técnicas para hacer funcionar el código. 


Arquitectura: decisiones de alto nivel que influyen en la estructura global de un sistema. 

Implica planificar cómo se conectan las piezas más grandes del sistema, como los subsistemas o servicios

Modularidad, Escalabilidad, Disponibilidad, Seguridad. 


Estructura bajo la cual funcionan las técnicas de código aplicadas.  


La arquitectura puede decidir que un sistema se construya con microservicios.

Mientras que el diseño especifica cómo cada microservicio interactuará con la base de datos


## Arquitectura 

Estilos de arquitectura comunes:

Monolítica: 
Todo el sistema está en un solo bloque de código.

Microservicios: 
Dividir funcionalidades en servicios pequeños e independientes.

Arquitectura de capas: 
Separar responsabilidades en capas (presentación, lógica de negocio, datos).

Event-driven (basada en eventos): 
Los componentes se comunican a través de eventos


Clean Code Principles

Programming Paradigms

Object Oriented Programming

Software Design Principles

Design Patterns

Architectural Principles

Architectural Styles

Architectural Patterns

Enterprise Patterns


## Diseño y Desarrollo

SOLID (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion)

DRY (Don’t Repeat Yourself)

KISS (Keep It Simple, Stupid)

YAGNI (You Aren’t Gonna Need It)

Separation of Concerns

Modularity

Encapsulation

Composition over Inheritance

Loose Coupling and High Cohesion

Principle of Least Astonishment


## ARQ y DIS

Mono, capas, event, microserv, soa, service mesh, twelve

Clean Code, OOP

SOLID (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion)

DRY (Don’t Repeat Yourself)

KISS (Keep It Simple, Stupid)

YAGNI (You Aren’t Gonna Need It)

Separation of Concerns

Modularity

Encapsulation

Composition over Inheritance

Loose Coupling and High Cohesion

Principle of Least Astonishment


# UX/UI, Design System

UX: 
se centra en cómo las personas interactúan con un producto digital. 
el objetivo es garantizar que una aplicación sea intuitiva, fácil de usar, y que proporcione una experiencia positiva al usuario.

usabilidad, diseño visual, funcionalidad, accesibilidad
Simplicidad, Consistencia
Diseño centrado en tareas: Prioriza las funciones más importantes para los usuarios.

Problema: 
Los usuarios abandonan el carrito de compras porque el proceso de pago es confuso.

Solución UX:
Investigación del usuario:
Encuestas revelan que los usuarios no entienden en qué paso del proceso de pago están.
Arquitectura de la información:
Simplificar el flujo de pago a tres pasos claros: "Detalles del pedido", "Método de pago", "Confirmación".
Prototipo:
Crear un diseño interactivo del nuevo flujo y probarlo con usuarios.
Pruebas:
Realizar pruebas A/B entre el diseño antiguo y el nuevo.
Lanzamiento:
Implementar el 


UI: 
enfocada en cómo un producto digital se ve y se siente
crear interfaces atractivas, funcionales y consistentes, permitiendo a los usuarios interactuar de manera efectiva con una aplicación o sistema.

Diseño visual: Uso de colores, tipografía, imágenes y gráficos.
Diseño interactivo: Cómo los usuarios navegan e interactúan con elementos de la interfaz.
Diseño de consistencia: Asegurar que los elementos visuales sean coherentes en toda la aplicación.
Un buen diseño de UI no solo es estético, sino que también mejora la experiencia del usuario (UX) al hacer que las interacciones sean más intuitivas.

Colores:
Selección de paletas de colores que transmitan emociones y refuercen la identidad de la marca.
Ejemplo: Colores brillantes para aplicaciones de entretenimiento, tonos neutros para plataformas profesionales.

Tipografía:
Elegir fuentes legibles y estilizadas que se alineen con el propósito de la aplicación.
Ejemplo: Sans-serif para interfaces modernas; serif para estilos más tradicionales.

Iconografía:
Uso de íconos claros y consistentes que complementen el texto y ayuden en la navegación.

Espaciado y diseño:
Diseño basado en rejillas para organizar contenido de manera equilibrada.
Uso del espacio en blanco para reducir la sobrecarga visual.

Interactividad:
Elementos interactivos como botones, enlaces, menús desplegables, y animaciones.
Asegurar que los usuarios comprendan cuándo y cómo interactuar con la interfaz.

Componentes reutilizables:
Crear sistemas de diseño con elementos reutilizables como botones, campos de entrada, y tarjetas


Principios del Diseño de UI:

Claridad:
Los usuarios deben saber exactamente qué hacer en la interfaz. Usa etiquetas claras e íconos intuitivos.

Consistencia:
Asegura que los elementos visuales y de interacción sean coherentes en toda la aplicación (colores, estilos de botones, etc.).

Atractivo visual:
Diseña interfaces visualmente agradables que generen confianza y emociones positivas.

Jerarquía visual:
Organiza los elementos en la interfaz para guiar la atención del usuario hacia las partes más importantes.

Retroalimentación visual:
Proporciona respuestas inmediatas a las acciones del usuario (por ejemplo, botones que cambian de color al hacer clic).

Accesibilidad:
Diseña para todos los usuarios, incluidas personas con discapacidades. Usa texto descriptivo, colores contrastantes y compatibilidad con lectores de pantalla.


Ejemplo Práctico:
Caso: Diseño de una página de inicio para una aplicación bancaria

Objetivos:
Comunicar confianza y profesionalismo.
Hacer que los usuarios encuentren fácilmente información sobre servicios bancarios.

Soluciones de UI:
Color:
Uso de tonos azules para transmitir confianza y estabilidad.

Tipografía:
Fuentes sans-serif modernas para una apariencia limpia y profesional.

Botones:
Botones prominentes con texto claro como "Abrir cuenta" o "Iniciar sesión".

Jerarquía visual:
Destacar primero las características clave (tasas de interés, promociones).

Resultado:
Una interfaz clara y profesional que inspira confianza y facilita la navegación.


Tendencias Actuales en UI Design:
Dark Mode:
Interfaz oscura que reduce la fatiga visual y ahorra batería en dispositivos OLED.

Microinteracciones:
Animaciones sutiles para mejorar la retroalimentación (por ejemplo, un botón que vibra ligeramente al hacer clic).

Neumorfismo:
Combina elementos tridimensionales con minimalismo para una estética moderna.

Diseño inclusivo:
Interfaz pensada para ser usada por personas de diferentes habilidades y contextos.

Simplicidad minimalista:
Reducir el desorden



Design System:

El sistema de diseño es un conjunto de estándares, directrices, componentes reutilizables y herramientas diseñados para ayudar a los equipos a crear aplicaciones o productos digitales de manera consistente y eficiente.
En esencia, un Design System actúa como un lenguaje compartido entre diseñadores y desarrolladores, asegurando que todos los elementos visuales y funcionales de una aplicación sean coherentes, independientemente de quién los cree o implemente.
Un Design System es mucho más que una simple guía de estilo. 

Suele incluir:

1. Fundamentos del Diseño
Colores: Paletas de colores primarios, secundarios y neutros.
Tipografía: Fuentes, tamaños, pesos y espaciado.
Espaciado: Márgenes, rellenos y rejillas.
Iconografía: Estilo y biblioteca de íconos.
Tonos y estilos visuales: Definición del lenguaje visual general (minimalista, atrevido, profesional, etc.).

2. Componentes de UI
Botones: Estilos para estados activos, inactivos, en foco y deshabilitados.
Formularios: Campos de entrada, validaciones y mensajes de error.
Tarjetas: Contenedores para agrupar contenido relacionado.
Modales y alertas: Para diálogos y notificaciones.

3. Pautas de Accesibilidad
Contraste de color para garantizar la legibilidad.
Navegación compatible con teclado.
Soporte para lectores de pantalla.

4. Tokens de Diseño

Valores de diseño reutilizables como colores, fuentes o tamaños definidos en un formato legible por máquinas (por ejemplo, JSON o CSS Variables).

5. Documentación
Descripciones


Componentes: 

Identificar Elementos: 
icons, visual lforms, sizing, spaces, color, typography

Identificar Componentes: 
avatar, badges, banners, buttons, cards, drop downs
form elemts. 

Brand: 
guidelines
tone of voice 
terminology
design principles
vision

Color: 
accessibility
functional colors
dark mode 
guidelines

Layout: 
units
grid
breakpoints
spacing 

logo: 
monochrome version
small use guidance 
placement y clearance guidance 
usage guidance 
different file format

Iconography
accessibility 
style
naming
grid relation 
sizes
keywords
reserved icons 
guidelines 

Typography:
responsiveness
grid relation 
readability
performance
guidelines 


core components: 
avatar, input text
banner input switch
badge, select
button, textarea
card, list 
carousel, loading indicator
dropdown, modal
icon, tabs
input checkbox, toast
input radio, tooltip 

Development: 
component catalog 
documentatio
code style
accessibility
semantic versioning
release strategy
commit guidelines 
pr templates
contribution guidelines


# Career Skills

Networking: 
Meetups
Hackathons
job fairs

Portfolio: 
bio
case studies
web public
organiz and design

Interviews prep:
salary negoc
behavioural interview
handling NDAs

Personal branding: 
resume
linkedin
Behance


# Porfolio

Guiá:

Usando Standalone Components, Signals y el nuevo Control Flow
Siguiendo una arquitectura por capas para separar la lógica de negocio, los datos y la presentación.
Así se mantendrá un código mantenible, escalable y muy fácil de refactorizar cuando decidas cambiar la apariencia visual.

Arquitectura limpia y pragmática:

4 capas concéntricas:

1. Capa de Dominio (Core): Tipos, modelos e interfaces puras de TypeScript. Cero dependencias de Angular

2. Capa de Datos e Infraestructura: Servicios que obtienen la información (Mocks JSON en primera instancia, preparados para cambiar a una API o CMS sin tocar la UI).

3. Capa de Aplicación y Estado: Estado reactivo basado en Signals que expone solo lo que la UI necesita consumir.

4. Capa de Presentación (UI): Componentes Smart (gestores de página/rutas) y componentes Dumb (UI pura que recibe inputs y emite eventos).



## Ruta de Desarrollo


1. Modelado del Dominio y Contratos: Definición

Definir los modelos de datos principales en interfaces puras:
Proyectos, Experiencia/Trayectoria, Habilidades/Tech Stack, y Información Personal/Contacto
Establecer estos contratos antes de tocar la UI evita rehacer lógica más adelante.

2. Estructura de Directorios: Arquitectura

Organizar la aplicación bajo un esquema guiado por Features (Funcionalidades) y un módulo Core/Shared
Configurar los alias de importación de TypeScript para mantener rutas limpias sin utilizar imports relativos profundos

3. Capa de Datos y Estado Reactivo: Servicios y Signals

Crear los servicios de datos mockeados y la capa de estado con Signals
Esta capa gestionará filtros (por ejemplo, filtrar proyectos por tecnología)
estados de carga y ordenamiento de datos de forma desacoplada de la interfaz.

4. Estructura UI y Navegación (Skeleton Semántico): Componentes y Rutas

Construir el árbol de componentes (Barra de navegación, Hero, Tarjeta de proyecto, Filtro de proyectos, Timeline de experiencia, Footer) y definir las rutas
En esta fase usaremos HTML semántico y estructurado, sin preocuparnos aún por los estilos CSS.

5. Diseño con Tailwind CSS: Estilizado

Configurar Tailwind CSS, definir los tokens del sistema de diseño (paleta de colores, tipografía, espaciados) y aplicar clases en los componentes UI
Implementar características visuales como diseño responsive, modo oscuro y microinteracciones.

6. Optimización, SSG/SSR y Despliegue: Producción

Configurar Prerendering (SSG) para un SEO óptimo y tiempos de carga instantáneos
Verificar accesibilidad (WCAG), rendimiento con Lighthouse y preparar el despliegue automatizado



# 1. Diseño Dominio y Contratos

Fase de abstracción pura
Respondemos a:

##### De qué conceptos del mundo real se compone mi perfil profesional
##### independientemente de cómo se vean en pantalla o de dónde provengan los datos?

Al definir el dominio al inicio, creas un lenguaje común para todo el sistema
Mañana podrías cambiar de Angular a otro framework, o reemplazar un archivo JSON local por una base de datos en la nube
las reglas conceptuales de tu portfolio seguirían siendo exactamente las mismas.


1. Entidades Principales

El dominio de un portfolio se sostiene sobre cuatro pilares conceptuales:

`Perfil / Identidad`
Representa tu marca personal y tu estado profesional actual.

Información base: Nombre, titular profesional (ej. Software Developer), síntesis/biografía (corta para cabecera, extendida para sección "sobre mí").

Disponibilidad: Estado laboral actual (ej. Buscando activamente, Abierto a ofertas, Disponible para freelance).

Contacto y Redes: Conjunto de canales de comunicación (email, repositorio de código, red profesional, etc.) donde cada canal identifica su plataforma, dirección URL e icono conceptual.


`Proyecto / Case Study`:
entidad central de la aplicación
No es solo "una foto y un texto", sino un objeto con estructura para comunicar impacto técnico

Información descriptiva: Título, resumen ejecutivo, problema que resuelve y solución implementada
Metadatos técnicos: Lista de tecnologías utilizadas, arquitectura/patrones aplicados y tipo de proyecto (Personal, Cliente, Open Source, Proyecto Académico).

Enlaces y Artefactos: Enlaces a demostración en vivo, repositorio fuente y capturas/demostraciones visuales.

Priorización: Indicadores para saber si el proyecto es "destacado" o su orden de visualización.


`Trayectoria (Experiencia y Educación)`:
Representa la evolución temporal en la industria.

Contexto: Nombre de la organización o institución, rol o título obtenido, y modalidad (remoto, presencial, híbrido).

Línea temporal: Fecha de inicio, fecha de fin o indicador de "puesto actual".

Impacto: Lista de logros clave, responsabilidades y tecnologías utilizadas específicamente en ese periodo.


`Competencia Técnica (Tech Stack & Skills)`:
El inventario de herramientas y conocimientos.

Clasificación: Nombre de la herramienta y su categoría (Lenguajes, Frameworks/Librerías, Herramientas/Entorno, Metodologías).

Nivel/Experiencia: Grado de soltura con la herramienta (ej. Principal, Secundario, En aprendizaje) o años de experiencia práctica.

Visibilidad: Si debe aparecer en la vista principal/resumen o solo en el desglose detallado.


2. Taxonomías y Objetos de Valor

##### Para evitar inconsistencias en el sistema (como escribir "React" de tres formas distintas
##### o inventar categorías sobre la marcha), el dominio define valores cerrados:

Categorías de proyectos: Un conjunto de etiquetas bien definidas para poder filtrar posteriormente (ej. Frontend, Fullstack, CLI Tools, Bibliotecas/Paquetes).

Estados de proyecto: En producción, En desarrollo, Archivo/Legacy.

Tipos de enlace: GitHub, Demo, Documentación, Artículo/Blog.


3. Reglas de Negocio e Invariantes

Opcionalidad coherente: Un proyecto privado de un cliente no tendrá enlace a repositorio, pero debe tener una justificación o resumen técnico
El contrato define qué datos son obligatorios y cuáles son opcionales

Manejo de fechas: La trayectoria debe admitir proyectos o puestos "en curso" sin forzar una fecha de finalización explícita

Proyectos destacados: Debe existir una forma inequívoca de identificar qué proyectos conforman la "pantalla principal" cuando el usuario entra por primera vez


4. Frontera (Decoupling)

capa que establece un pacto de no agresión entre la interfaz y la infraestructura

Para la UI (Componentes): La vista le dice a Angular: "No me importa de dónde saques los datos
yo solo sé que voy a recibir una lista de Proyectos con esta estructura exacta".

Para los Datos (Servicios): La infraestructura le dice al sistema: "Voy a leer un archivo JSON o llamar a una API
pero prometo transformar la respuesta para que cumpla rigurosamente con la estructura que pide el Dominio".



# 2. Capa de Datos e Infraestructura

Como un fontanero/traductor de la app.
Su único propósito es comunicarse con el mundo exterior
(archivos locales, APIs, CMS o servicios de terceros)
y entregarle a la aplicación los datos transformados exactamente según los contratos definidos en la Capa de Dominio

##### la Capa de Dominio define qué es un Proyecto o una Skill
##### la Capa de Infraestructura resuelve de dónde se obtienen y cómo se convierten para que el resto del sistema los entienda


1. Patrón Repositorio (Abstracción de Fuentes)

##### Lograr que el sitio sea robusto y fácil de evolucionar
##### la infraestructura se basa en la ocultación de la fuente de datos:

La pregunta del sistema: La aplicación solo pide "Dame la lista de proyectos destacados".

La responsabilidad del repositorio: El repositorio decide si esa lista viene de un archivo JSON estático en el proyecto, de un CMS headless (como Sanity o Strapi), o de la API pública de GitHub.

Beneficio: La interfaz y la lógica de la aplicación jamás se enteran de dónde vinieron los datos
Si en seis meses decides migrar de un archivo JSON a una API externa
solo modificas esta capa y la interfaz sigue funcionando sin tocar una sola línea de sus componentes


2. Mapeo y Conversión de Datos (DTOs vs. Entidades)

##### En el mundo real, los datos externos casi nunca coinciden perfectamente con el modelo ideal de tu dominio:

Objeto de Transferencia (DTO): Es la estructura "sucia" o cruda tal como viene de la fuente externa
(nombres de campos en inglés/español mezclados, fechas como textos sin formato, IDs numéricos o campos nulos).

Mapeador (Mapper): Es la función encargada de tomar esa estructura cruda, limpiarla, validar que cumpla las reglas del dominio y transformarla en una Entidad pura de tu aplicación


Ej: Si la API de GitHub devuelve un proyecto con 30 campos que no necesitas (estrellas, forks, avatar del owner)
el mapeador filtra todo ese "ruido" y entrega a la aplicación únicamente los 5 campos que tu contrato de Dominio exige


3. Estrategia de Fuentes de Datos Evolutivas

##### La infraestructura se diseña para evolucionar en dos etapas sin rehacer arquitectura:

Fase Inicial (Mocks Locales):
Los datos residen en archivos de datos estructurados dentro del propio proyecto

La infraestructura simula una lectura asíncrona (como si fuera una red real) para que el comportamiento del estado reactivo sea idéntico al de una producción real

Fase Avanzada (APIs o CMS):
Se reemplaza la fuente local por llamadas HTTP a servicios externos
(ej. obtener los últimos repositorios desde GitHub o artículos publicados en plataformas como Medium/Dev.to).


4. Gestión de Estado de Red, Caché y Fallbacks

##### Incluso en un portfolio, la infraestructura debe ser resiliente ante fallos:

Estrategia de Caché: Dado que la información de un portfolio cambia con poca frecuencia
la capa de infraestructura garantiza que los datos se soliciten una sola vez por sesión y se mantengan en memoria, evitando peticiones innecesarias

Manejo de Errores y Valores por Defecto (Fallbacks): Si la llamada a una API externa falla
(por ejemplo, si GitHub está caído o alcanzaste el límite de peticiones), la infraestructura captura el error y devuelve un estado seguro
(como datos almacenados en caché o un mensaje amigable) para que la UI no se rompa ni quede en blanco


5. "Pacto" con la Capa Siguiente

##### Al finalizar esta capa, la infraestructura expone servicios proveedores de datos que garantizan dos cosas a la Capa de Aplicación

Siempre devolverán datos que cumplen al 100% las interfaces del Dominio.

Siempre manejarán los estados de espera y posibles errores de comunicación de forma transparente.



# 3. Diseño: Capa de Aplicación y Estado

Orquestación e inteligencia de la app.
Se sitúa estratégicamente entre la infraestructura
infraestructura (de dónde vienen los datos)
y la interfaz de usuario (lo que se ve en pantalla).

Si la Capa de Infraestructura trae los datos del exterior y la Capa de Dominio define sus reglas
##### la Capa de Aplicación responde a: Cómo reacciona mi sistema ante las interacciones del usuario en tiempo real?

1. Orquestación de Casos de Uso
##### Un "caso de uso" representa una acción concreta que el usuario puede realizar dentro del portfolio

Esta capa define y ejecuta esas acciones:

Ej:

Filtrar proyectos por tecnología
(ej. mostrar solo lo construido con Python o React).

Buscar proyectos por palabra clave en la barra de búsqueda.

Seleccionar un proyecto para abrir una vista detallada o modal.

Alternar el tema visual (modo claro / modo oscuro).

Solicitar la carga inicial de datos al entrar a la aplicación.


##### La capa de aplicación expone estas acciones como métodos sencillos
##### para que la interfaz solo tenga que "dispararlos" cuando el usuario hace clic o escribe


2. Estado de la Interfaz: UI State

##### El estado es la fotografía del momento presente de tu aplicación
##### Esta capa mantiene la verdad centralizada sobre lo que está pasando en la pantalla.

El estado del portfolio se divide conceptualmente en tres bloques:

### Datos de Dominio:
Las listas puras cargadas desde la infraestructura
(todos los proyectos, todas las skills, toda la trayectoria).

### Criterios de Interacción:
Lo que el usuario ha seleccionado momentáneamente (el texto de la búsqueda actual
las categorías activas, el ID del proyecto seleccionado).

### Estado de Transición:
La situación de la red o del sistema
(cargando datos, error al cargar, datos listos).


3. Estado Derivado y Reactividad

##### Uno de los mayores errores en el desarrollo de frontend es la duplicación de datos en memoria
##### La capa de aplicación resuelve esto mediante el concepto de datos derivados o calculados:

#### !!! Principio: Nunca guardes en el estado algo que se pueda calcular a partir de lo que ya tienes

Ej:

### Estado Base: Tienes la lista completa de 10 proyectos y el filtro activo "TypeScript".

#### Estado Derivado: La lista de proyectos filtrados no se almacena como una nueva variable independiente
Es una vista calculada dinámicamente.

#### Reactividad: En el momento en que el filtro cambia a "Python", la lista derivada se recalculas de forma automática e instantánea
notificando únicamente a las partes de la pantalla que necesitan redibujarse


4. Flujo Unidireccional de Datos

#### Para que el estado sea predecible y no aparezcan "bugs fantasma"
#### la capa de aplicación impone una regla estricta de flujo unidireccional

1. Lectura de solo lectura:
##### La interfaz de usuario (los componentes) solo puede leer el estado
##### No tiene permiso para modificarlo directamente.

2. Emisión de intenciones:
Cuando el usuario interactúa (por ejemplo, hace clic en un filtro)
##### la interfaz envía un mensaje a la Capa de Aplicación diciendo
"El usuario quiere aplicar el filtro X"

3. Actualización centralizada:
##### La Capa de Aplicación evalúa la petición, actualiza el estado central y automáticamente la interfaz se re-renderiza con la nueva información


5. Pacto con la Capa de Presentación

Al finalizar esta capa, le entregamos a los componentes de la interfaz de usuario:

Entradas de solo lectura:
Listas de proyectos ya filtradas, ordenadas y listas para pintar.

Indicadores de estado simples:
Booleanos limpios para saber si mostrar un esqueleto de carga carga (skeleton screen) o un mensaje de error.

Ganchos de acción:
Funciones limpias para notificar cuando el usuario interactúa.

la interfaz de usuario queda 100% libre de lógica de filtrado, búsqueda o gestión de memoria



# 4. Capa de Presentación (UI): smart and dumb components

Superficie visible de la aplicación
Su única misión es recibir los datos procesados por la capa de aplicación
pintarlos en pantalla utilizando HTML semántico y capturar los eventos del usuario
(clics, tecleos, desplazamientos) para notificarlos hacia arriba.

##### Aplicamos una regla estricta: los componentes de la interfaz no toman decisiones ni transforman datos
aplicamos una regla estricta: los componentes de la interfaz no toman decisiones ni transforman datos
son únicamente traductores entre la intención del usuario y el estado del sistema


1. Patrón de Componentes: Smart vs. Dumb
Para que la interfaz sea escalable, mantenible y muy fácil de probar
dividimos todos los componentes visuales en dos categorías conceptuales bien diferenciadas

### Componentes Smart (Páginas / Contenedores)
Responsabilidad: Coordinar secciones completas de la pantalla y conectarse con el estado global
Estado: Saben de dónde vienen los datos y qué caso de uso disparar ante una acción
Reutilización: Baja (están ligados a una ruta o sección específica del portfolio).
Ej: Vista Principal de Proyectos, Página de Detalle, Sección de Experiencia.


### Componentes Dumb (UI Pura / Presentacionales)

Responsabilidad: Presentar un fragmento visual específico y reaccionar a interacciones directas
Estado: No saben que existe un backend ni una capa de datos; solo reciben datos y emiten eventos
Reutilización: Alta (se pueden usar en cualquier lugar: tarjetas, botones, badges).
Ej: Tarjeta de Proyecto, Badge de Skill, Buscador, Botonera de Filtros

Beneficio:
Si en el futuro decides cambiar el diseño de la tarjeta de un proyecto
solo modificas su componente Dumb
La lógica de filtrado y el estado global permanecen 100% intactos


2. Jerarquía y Composición de Vistas

La interfaz se construye combinando piezas pequeñas en estructuras más complejas (diseño atómico o por bloques):

Elementos Básicos (Átomos):
Botón de acción, etiqueta/badge de tecnología, indicador de disponibilidad, avatar
    
Bloques de Contenido (Moléculas y Organismos):
Tarjeta de Proyecto: Combina la imagen, título, descripción corta, lista de badges de tecnología y botones de enlace.
Barra de Filtros: Combina el campo de búsqueda por texto con la lista de etiquetas seleccionables.
Línea de Tiempo: Combina los hitos individuales de experiencia laboral y formación académica.

Vistas y Layouts (Contenedores):
Marco Global (Layout): Cabecera con navegación, contenedor principal de contenido y pie de página.
Sección Hero: Presentación personal, titulares y llamada a la acción principal.
Galería de Proyectos: Disposición en rejilla de las tarjetas de proyecto gestionada por la barra de filtros.


3. Estructura Semántica y Accesibilidad (El "Skeleton" HTML)

Dado que todavía no estamos aplicando estilos con Tailwind, esta capa se enfoca en construir un árbol HTML con estructura 100% semántica y accesible por defecto
Uso de Regiones (Landmarks): Identificar claramente las zonas del sitio (<header>, <nav>, <main>, <section>, <article>, <footer>).
Jerarquía de Encabezados: Mantener un orden lógico estricto (<h1> único para el nombre/titular, <h2> para títulos de sección, <h3> para nombres de proyectos).
Navegación por Teclado y Leitmotiv ARIA: Garantizar que los enlaces, botones y filtros sean utilizables mediante el teclado antes de preocuparnos por su apariencia.

Si apagas todos los estilos de la web, la información debe seguir siendo perfectamente legible, estructurada y navegable.


4. Estrategia de Enrutamiento y Navegación

Estructuralmente, el portfolio debe definir cómo se despliega la información:

##### Estrategia Single-Page con Scroll Inteligente: La vista principal condensa las secciones principales (Hero, Proyectos, Experiencia, Sobre mí, Contacto) en un único flujo de desplazamiento.

Vistas Secundarias por Ruta (Carga Diferida): Vistas detalladas para un "Caso de Estudio" profundo de un proyecto o una versión extendida del currículum que se cargan únicamente cuando el usuario navega a ellas, optimizando el rendimiento inicial


5. Gestión de Estados Visuales (Retroalimentación al Usuario)

La interfaz debe responder a cada situación del estado de la aplicación mediante vistas específicas:

Estado de Carga (Skeleton Screens): Estructuras vacías que reservan el espacio visual mientras los datos son entregados por la capa de aplicación

Estado Vacío (Empty State): Mensajes amigables y claros cuando un filtro no devuelve resultados
(ej. "No se encontraron proyectos construidos con C++").

Estado de Error: Pantallas o avisos amigables si la carga de datos falla, permitiendo al usuario reintentar la acción.



# 5. Tailwind: Capa de Diseño y Sistema Visual

Esqueletado estático y funcional construido en las fases anteriores adquiere personalidad visual, elegancia y coherencia.

No se empieza escribiendo clases de utilidad al azar en los componentes
Hacer eso conduce a inconsistencias (cinco sombras distintas, diez tonos de gris y espaciados desalineados).

##### En su lugar, el proceso se aborda como la creación de un Sistema de Diseño basado en Tokens.

1. Definición de Tokens de Diseño (Design Tokens)

Un token de diseño es la unidad mínima de decisión visual en tu aplicación
Es la abstracción que le asigna un propósito semántico a un valor estético

En lugar de pensar en "un color gris oscuro Hex #0f172a", se define el concepto de superficie-fondo
Si en el futuro decides cambiar la identidad visual del sitio, solo modificas la definición central del token
y todo el portfolio se actualiza de forma coherente.

Los tokens clave a definir antes de estilizar son:

Tokens de Color: Colores con roles explícitos (fondo, superficie, texto primario, texto secundario, acento, bordes).
Tokens Espaciales: Escala fija de márgenes, rellenos y separaciones (ritmo vertical y horizontal).
Tokens Tipográficos: Jerarquía de tamaños, pesos visuales y alturas de línea.
Tokens de Elevación y Formas: Bordes redondeados y niveles de profundidad (sombras).


2. Planificación de la Paleta Semántica de Colores

Para un portfolio técnico, la paleta debe transmitir profesionalismo, legibilidad impecable y un toque de identidad personal
Se organiza en tres capas conceptuales

### Capa Neutra (Superficies y Texto)
Constituye el 80% de la interfaz visual.

Fondo Principal: La base sobre la que descansa toda la página.
Superficies / Tarjetas: Colores con un ligero contraste respecto al fondo para destacar bloques de información (tarjetas de proyectos, paneles de experiencia).

Jerarquía de Texto:
Texto Primario: Máximo contraste para títulos y cuerpo de texto.
Texto Secundario: Tono más tenue para fechas, metadatos y subtítulos.
Texto Muted/Desactivado: Para íconos decorativos o marcas de agua.


### Capa de Acento (Identidad e Interacción)
Es el color que dirige la atención del usuario.

Color Primario / Marca: Utilizado en botones de acción principal (CTA), enlaces destacados, indicadores de estado activo y bordes de enfoque
Color Secundario / Complementario: Para etiquetas (badges) de tecnologías, resaltado de sintaxis o palabras clave en biografías.


### Capa de Estado y Feedback

Indicadores: Verde de disponibilidad laboral (ej. "Open to work"), alertas de enlaces externos o estados de error en formularios de contacto


3. Escala Tipográfica y Ritmo Espacial

Un diseño luce "limpio" no por los colores, sino por la consistencia espacial y la jerarquía visual:

Ritmo Vertical: Todos los componentes se distancian utilizando una escala basada en múltiplos consistentes
Un título se separa de su párrafo usando siempre la misma proporción espacial en toda la web

Jerarquía Tipográfica:
Display / Gran Titular: Reservado para tu nombre e impacto inicial en la sección Hero.
Títulos de Sección (H2): Formato prominente para delimitar bloques (Proyectos, Experiencia, Skills).
Títulos de Tarjeta (H3): Legibles, definidos para dar contexto a cada proyecto o puesto laboral.
Cuerpo y Metadatos: Lectura fluida y cómoda para párrafos largos y detalles técnicos.


4. Clasificación de Variantes en Componentes UI

Antes de colocar utilidades de diseño en el HTML, planificamos la matriz de variantes visuales de los componentes Dumb

Tarjetas de Proyecto:
Variante Destacada (Featured): Ocupa más espacio en la rejilla
con bordes de acento o un fondo ligeramente diferenciado.

Variante Estándar: Diseño compacto enfocado en listas secundarias.

Etiquetas de Tecnología (Tech Badges):
Activa / Seleccionada: Color de acento con contraste alto (indica filtro activo).
Inactiva / Neutra: Fondo suave para no saturar la vista.

Botones de Acción:
Primario: Relleno sólido con el color de marca (ej. "Ver Proyecto", "Contactar").
Secundario / Outline: Solo borde y texto (ej. "Ver Código en GitHub").


5. Estrategia para Tema Oscuro/Claro (Dark / Light Mode)

Planificación del tema visual no se trata de "duplicar" estilos, sino de mapear tokens semánticos

Modo Claro: La token superficie-fondo asigna un tono claro/fresco, y texto-primario asigna un tono oscuro de alta legibilidad.
Modo Oscuro: La token superficie-fondo invierte su valor hacia un tono profundo/mate, y texto-primario pasa a un tono suave claro (evitando el blanco puro para no causar fatiga visual).


6. Microinteracciones y Estados de Transición

Toque final de sofisticación reside en la respuesta sutil al movimiento:

Estados de Clic y Puntero (Hover / Focus): Elevación ligera de la tarjeta al pasar el cursor
suavizado de colores en enlaces y realce de bordes en campos interactivos

Accesibilidad Visual: Mantenimiento de contornos claros de enfoque cuando el usuario navega exclusivamente con la tecla Tab.

Transiciones Fluidas: Las variaciones de color y movimiento deben ocurrir en intervalos cortos (alrededor de 150-200 milisegundos)
para que el sitio se sienta ágil e instantáneo.



# 6. Optimización, SSG/SSR y Despliegue

Etapa final donde transformamos la aplicación en un activo profesional visible para buscadores (SEO)
con tiempos de carga instantáneos en cualquier dispositivo y desplegado de forma 100% automatizada

1. Estrategia de Renderizado (SSG vs. SSR vs. SPA)

Elegir cómo se entrega el HTML al navegador del visitante determina la velocidad y el posicionamiento en buscadores:

### SSG (Static Site Generation):
Funcionamiento: Genera todo el HTML estático en el momento de la construcción (build time).
SEO e Impacto: Excelente. HTML listo para buscadores e instantáneo.
Costo/Hosting: Cero / Gratuito. No requiere servidor activo.

### SSR (Server-Side Rendering):
Genera el HTML en un servidor cada vez que un usuario hace una petición.
Excelente. Siempre actualizado en tiempo real.
Requiere servidor Node.js o funciones Serverless ejecutándose.
Innecesario si los datos no cambian a cada segundo.

### SPA (Single Page Application):
Descarga un HTML casi vacío y el navegador construye la interfaz con JavaScript.
Deficiente / Regular. Los buscadores pueden tardar en indexar.
Gratuito. Archivos estáticos.
No recomendado para el primer renderizado de un portfolio.

Decisión técnica: Para un portfolio, la estrategia ganadora es SSG (Prerendering).
Tu sitio se compila como un conjunto de archivos HTML, CSS y JS ultraoptimizados que se pueden alojar gratis y entregan un rendimiento imbatible


2. SEO Técnico y Marca Social (Discoverability)

Para que tu portfolio aparezca en Google y se vea profesional al compartir el enlace en redes sociales, la infraestructura debe incluir:

Metadatos Canónicos y Dinámicos: Configuración de títulos únicos, descripciones resumidas y URLs oficiales para cada página o proyecto.

Tarjetas para Redes Sociales (Open Graph y Twitter Cards): Cuando pegues la URL de tu portfolio o de un caso de estudio en LinkedIn, Twitter o Discord, debe desplegarse automáticamente una vista previa con imagen de portada, título impactante y descripción breve

Datos Estructurados (JSON-LD / Schema.org): Etiquetas estandarizadas que informan explícitamente a los motores de búsqueda que el sitio pertenece a una entidad de tipo Persona, identificando tu nombre, puesto, ubicación y perfiles profesionales.

Archivos de Navegación del Bot: Generación automática de sitemap.xml (mapa del sitio) y robots.txt (instrucciones para rastreadores).


3. Rendimiento y Métricas Clave (Core Web Vitals)

Google evalúa la experiencia de usuario en base a tres métricas principales (Core Web Vitals), las cuales debemos cuidar conceptualmente:

LCP (Largest Contentful Paint - Carga del elemento principal): Mide cuánto tarda en verse la sección principal (Hero).
Se optimiza mediante la precarga de fuentes tipográficas críticas y la prioridad de carga sobre la imagen de cabecera

CLS (Cumulative Layout Shift - Estabilidad visual): Garantiza que la pantalla no "salte" ni se mueva mientras carga
Se logra reservando espacio y dimensiones fijas para imágenes, iconos y componentes asíncronos antes de que se muestren

INP (Interaction to Next Paint - Respuesta a la interacción): Mide qué tan rápido reacciona la pantalla a un clic o filtro
Al haber separado la lógica en la Capa de Aplicación (Fase 3), el hilo principal de procesamiento queda libre, logrando respuestas en menos de 50 milisegundos

Optimización de Recursos Estáticos: Formatos de imagen de nueva generación (WebP / AVIF) con carga diferida (lazy loading) para proyectos que están fuera de la pantalla inicial, y división de código (code-splitting) para cargar recursos solo cuando el usuario navega a ellos


4. Hosting, CDN y Integración Continua (CI/CD)

Cierre de la arquitectura se apoya en una infraestructura de distribución moderna y automatizada

Red de Distribución Edge (CDN): Alojar los archivos estáticos generados por el SSG en una red distribuida globalmente
(por ejemplo, Cloudflare Pages, Vercel, Netlify o GitHub Pages).
El usuario en cualquier parte del mundo descarga el sitio desde el servidor físicamente más cercano a él.

Tubería de Despliegue Continuo (CI/CD): Vincular tu repositorio de código con la plataforma de hosting
Cada vez que hagas un git push a tu rama principal:Cada vez que hagas un git push a tu rama principal:

1. Se ejecuta una construcción automática de la aplicación (Build).

2. Se verifican las reglas de tipado y calidad.

3. Se genera la versión SSG actualizada.

4. La nueva versión se despliega en producción en cuestión de segundos, sin caída de servicio.


Políticas de Caché Inmutable: Los recursos estáticos se identifican de forma única para que los navegadores los guarden en memoria local y las visitas recurrentes sean literalmente instantáneas.


## Checklist

1. Modelado del Dominio y Contratos (Core)

[ ] Entidades Principales: Definidas las estructuras puras para Perfil, Proyecto, Trayectoria y Competencia Técnica.
[ ] Taxonomías: Creadas las listas cerradas para categorías, estados de proyecto y tipos de enlaces.
[ ] Reglas de Negocio: Establecidas las condiciones de opcionalidad, cálculo de puestos actuales e identificación de proyectos destacados.
[ ] Aislamiento: El dominio no contiene dependencias de Angular, bibliotecas de UI ni llamadas a red.

2. Capa de Datos e Infraestructura

[ ] Patrón Repositorio: Oculta la fuente real de datos a la aplicación mediante interfaces de servicio.
[ ] Mapeadores (DTO → Entidad): Funciones encargadas de transformar/limpiar datos crudos de archivos o APIs externas.
[ ] Estrategia Evolutiva: Implementados Mocks locales simulación asíncrona, preparados para sustituirse por APIs/CMS.
[ ] Resiliencia: Definidos estados de caché local y respuestas por defecto (fallbacks) ante fallos de conexión.

3. Capa de Aplicación y Estado Reactivo

[ ] Casos de Uso: Identificadas las acciones del usuario (filtrar, buscar, seleccionar proyecto, cambiar tema visual).
[ ] Centralización de Estado: Fotografía clara de datos, criterios de búsqueda activos y estados de carga/error.
[ ] Estado Derivado: Las listas filtradas o calculadas no se duplicarán en memoria, sino que reaccionarán automáticamente.
[ ] Flujo Unidireccional: Componentes solo leen el estado y emiten intenciones de cambio sin modificar datos directamente.

4. Capa de Presentación (UI) y Rutas

[ ] División de Componentes: Separación estricta entre componentes Smart (gestores) y Dumb (UI pura).
[ ] Estructura Semántica: Árbol HTML accesible con regiones (Landmarks), jerarquía de títulos e interacción por teclado.
[ ] Estrategia de Navegación: Vista principal fluida complementada con carga diferida para detalles profundos.
[ ] Estados Visuales: Vistas preparadas para cargas (Skeletons), resultados vacíos (Empty States) y errores.

5. Capa de Diseño y Sistema Visual (Tailwind CSS)

[ ] Tokens de Diseño: Abstracción semántica para colores, espaciados, tipografías y elevaciones.
[ ] Paleta de Colores: Capas claramente diferenciadas para neutros, acentos de marca y estados de feedback.
[ ] Matriz de Variantes: Definidas las versiones de tarjetas, botones y etiquetas de tecnologías.
[ ] Modo Claro/Oscuro: Mapeo automático de tokens según la preferencia del usuario.
[ ] Microinteracciones: Transiciones suaves (150-200ms) y contornos de enfoque visibles para accesibilidad.

6. Optimización, SSG/SSR y Despliegue

[ ] Estrategia SSG (Prerendering): Generación de HTML estático en compilación para carga instantánea y SEO óptimo.
[ ] SEO & Open Graph: Metadatos dinámicos, tarjetas para redes sociales, Sitemap y datos estructurados JSON-LD.
[ ] Métricas Core Web Vitals: Optimización de LCP, CLS e INP mediante formatos WebP/AVIF y Lazy Loading.
[ ] Despliegue Continuo (CI/CD): Tubería automatizada desde el repositorio a una red de distribución Edge (CDN).


Estado de la Arquitectura: Lista para empezar a implementar
Con este mapa de trazabilidad, el desarrollo se vuelve predecible y libre de deuda técnica.



# Testing

Estrategia de pruebas para una arquitectura por capas
resultado de los mayores beneficios de este enfoque
##### !!! cada capa se prueba con un tipo de test específico
##### !!! sin necesidad de arrastrar dependencias innecesarias

En capas profundas (Dominio o Estado)
los tests son ultra rápidos porque no requieren renderizar el DOM ni levantar el navegador
En capas superiores (UI o E2E), los tests se enfocan en la experiencia real del usuario


## 1. Estrategia testing

1. Dominio (Core)
Unitario Puro
#### Validar reglas de negocio, invariantes y tipos
#### No hay mocks, ts puro

2. Infraestructura
Unitario y Mapeo
#### Verificar la transformación de datos (DTO → Entidad) y el manejo de fallos.
#### Sobre mocks: Mapeo local. Simular respuestas externas crudas.
 
3. Aplicación y Estado
Estado Reactivo
#### Validar la lógica de filtros, ordenamientos y reacoplamiento de Signals.
#### Sobre mocks: Aislada. Simular el repositorio de datos.

4. Presentación (Dumb)
Componentes (DOM)
#### Verificar la renderización según datos de entrada (Inputs) y emisión de eventos (Outputs).
#### Sobre mocks: Cero lógica. Solo proveer datos simulados a la UI.

5. Presentación (Smart)
Integración de Vistas
#### Verificar la interacción entre el estado, las rutas y la visibilidad de pantallas.
#### Mocks de estado. Simular estados de carga o vacíos.

6. Sistema Completo
End-to-End (E2E)
#### Simular la navegación completa de un usuario real en el sitio compilado.
#### Sin mocks. Se ejecuta sobre el sitio SSG final.


## 2. Desarrollo de testing

1. Tests Unitarios del Dominio (Core)
Cobertura Fundamental
##### Asegurar que los modelos de datos validen correctamente atributos obligatoriosProbar la lógica pura y las reglas de negocio
fechas de trayectoria y estructuras de proyectos sin depender de Angular ni del navegador

2. Tests de Mapeadores e Infraestructura
Transformación Segura
##### Probar las funciones de conversión (Mappers).
##### Garantizar que si un archivo JSON o API externa cambia la estructura de sus campos crudos o devuelve valores nulos
##### el mapeador limpie la información correctamente sin romper la aplicación

3. Tests de Estado Reactivo y Casos de Uso
Lógica Interactiva
##### Probar la capa de Signals y la lógica de aplicación sin renderizar HTML.
Verificar que al disparar la acción "Filtrar por Python"
##### el estado derivado reaccione y devuelva únicamente los proyectos que coinciden con ese criterio

4. Tests de Componentes Presentacionales (Dumb)
Componentes de UI Puro
##### Probar el comportamiento aislado de piezas visuales (tarjetas, botones, buscadores).
##### Verificar que ante ciertos datos la UI muestre la información correcta y que al hacer clic en un botón se emita la señal esperada hacia el contenedor

5. Tests de Integración y Rutas (Smart)
Flujo de Vistas
##### Probar las páginas contenedoras y los estados de transición
##### Confirmar que la pantalla muestra el componente de esqueleto (Skeleton) mientras los datos cargan
##### o el mensaje de estado vacío (Empty State) si no hay proyectos coincidentes.

6. Tests de Accesibilidad, Navegación y E2E
Experiencia Global
Probar el portfolio desde la perspectiva de un visitante final
navegar por teclado entre secciones, cambiar del tema claro al oscuro
filtrar la galería de proyectos y verificar las métricas de accesibilidad


## 3. Mantenibilidad

#### Prueba comportamientos, no detalles de implementación
Si refactorizas el código interno de un servicio o cambias el nombre de una variable privada pero el resultado para el usuario es el mismo, el test no debería fallar

Pirámide de Testing:
La inmensa mayoría de los tests deben estar en los Pasos 1, 2 y 3 (unitarios y de estado).
Son ultra rápidos de ejecutar (milisegundos) y muy baratos de mantener

Aislamiento de Tests UI:
#### Los tests de componentes visuales no deben llamar a servicios reales de red
siempre consumen el estado simulado para asegurar que la suite de pruebas sea predecible y no dependa de conexiones a internet



# Código


# 1. Dominio

## Ej 1

Código limpio y evitar referencias circulares o inconsistencias,
definiendo primero las Taxonomías / Objetos de Valor (2) e inmediatamente después las Entidades Principales (1).

Las entidades (como `Proyecto` o `Skill`) necesitan utilizar esos tipos cerrados (categorías, niveles, estados) en sus atributos.
Definirlos primero nos garantiza tipado estricto desde el segundo cero.


---

## 1. Taxonomías y Objetos de Valor (`domain/types`)

Definimos los tipos unificados usando *String Literal Types* (preferibles sobre `enums` en TypeScript moderno por su ligereza y mejor integración con JSON):

```typescript
// --- Taxonomías de Proyectos ---
export type CategoriaProyecto = 
  | 'frontend' 
  | 'backend' 
  | 'fullstack' 
  | 'cli' 
  | 'libreria';

export type EstadoProyecto = 
  | 'en-desarrollo' 
  | 'produccion' 
  | 'archivado';

export type TipoEnlace = 
  | 'github' 
  | 'demo' 
  | 'documentacion' 
  | 'articulo';

// --- Taxonomías de Skills ---
export type CategoriaSkill = 
  | 'lenguajes' 
  | 'frameworks' 
  | 'herramientas' 
  | 'arquitectura' 
  | 'testing';

export type NivelSkill = 
  | 'principal' 
  | 'secundario' 
  | 'en-aprendizaje';

// --- Taxonomías de Trayectoria y Perfil ---
export type TipoTrayectoria = 
  | 'experiencia-laboral' 
  | 'educacion' 
  | 'certificacion';

export type ModalidadTrabajo = 
  | 'remoto' 
  | 'hibrido' 
  | 'presencial';

export type EstadoDisponibilidad = 
  | 'busqueda-activa' 
  | 'abierto-a-ofertas' 
  | 'no-disponible';

```

---

## 2. Entidades Principales del Dominio (`domain/models`)

Estructuramos las interfaces puras reutilizando las taxonomías anteriores:

### 👤 Perfil / Identidad

```typescript
export interface EnlaceContacto {
  plataforma: string;  // Ej: "GitHub", "LinkedIn", "Email"
  url: string;
  icono?: string;      // Identificador de icono semántico
}

export interface Perfil {
  id: string;
  nombre: string;
  titular: string;               // Ej: "Fullstack Developer"
  biografiaCorta: string;        // Para la cabecera / Hero
  biografiaExtendida?: string;   // Para sección "Sobre mí"
  ubicacion: string;
  disponibilidad: EstadoDisponibilidad;
  contactos: EnlaceContacto[];
}

```

### 🚀 Proyecto / Case Study

```typescript
export interface EnlaceProyecto {
  tipo: TipoEnlace;
  url: string;
  etiqueta?: string; // Texto personalizado si es necesario
}

export interface Proyecto {
  id: string;
  slug: string;                  // Para URLs amigables (ej: 'calculator-app')
  titulo: string;
  resumen: string;
  descripcionDetallada?: string; // Para vistas ampliadas / Case study
  categoria: CategoriaProyecto;
  estado: EstadoProyecto;
  tecnologias: string[];         // Lista de nombres de tecnologías usadas
  enlaces: EnlaceProyecto[];
  imagenPortada?: string;
  destacado: boolean;            // Para filtrar en pantalla principal
  ordenPrioridad: number;        // Para control de posicionamiento manual
}

```

### 💼 Trayectoria (Experiencia y Educación)

```typescript
export interface HitoTrayectoria {
  id: string;
  tipo: TipoTrayectoria;
  organizacion: string;          // Empresa u Institución
  rol: string;
  modalidad?: ModalidadTrabajo;
  ubicacion?: string;
  fechaInicio: string;           // Formato ISO string: YYYY-MM
  fechaFin?: string;             // Opcional; si no existe, es "Actualidad"
  esPuestoActual: boolean;
  logrosClave: string[];
  tecnologiasUtilizadas?: string[];
}

```

### 🛠️ Competencia Técnica (Tech Stack)

```typescript
export interface Skill {
  id: string;
  nombre: string;
  categoria: CategoriaSkill;
  nivel: NivelSkill;
  icono?: string;
  destacado: boolean;            // Si se muestra en resumen inicial
  aniosExperiencia?: number;
}

```

---

## 3. Reglas de Negocio en el Dominio (`domain/rules`)

Para mantener las *Invariantes* (las condiciones que garantizan que los datos son válidos), podemos incluir funciones puras que actúen como "guardias" o utilidades del dominio:

```typescript
// Regla: Validar si un proyecto tiene enlaces válidos según su visibilidad
export function esProyectoValido(proyecto: Proyecto): boolean {
  if (!proyecto.titulo.trim() || !proyecto.resumen.trim()) {
    return false;
  }
  return true;
}

// Regla: Determinar si la trayectoria sigue activa
export function esHitoEnCurso(hito: HitoTrayectoria): boolean {
  return hito.esPuestoActual || !hito.fechaFin;
}

```

---


### Frontera/desacoplamiento

##### se materializa en código mediante Puertos (Clases Abstractas o Interfaces)
##### y el sistema de Inyección de Dependencias (DI) de Angular.

usar clases abstractas como contratos es la mejor práctica
funcionan como interfaces para el tipado de TypeScript y, al mismo tiempo, sirven como tokens nativos para el inyector de dependencias de Angular sin necesidad de crear boilerplate extra

1. Pacto con los Datos: Contratos de Repositorio (domain/ports)
#### Es la interfaz que le exige a la infraestructura qué métodos debe ofrecer y qué entidades de dominio debe devolver obligatoriamente
#### La capa de datos está obligada a implementar este contrato

```
// domain/ports/proyecto-repository.port.ts
import { Observable } from 'rxjs';
import { Proyecto, CategoriaProyecto } from '../models';

export abstract class ProyectoRepository {
  /** Obtiene la lista completa de proyectos ya mapeados a entidades de Dominio */
  abstract obtenerTodos(): Observable<Proyecto[]>;
  
  /** Busca un proyecto específico por su slug amigable */
  abstract obtenerPorSlug(slug: string): Observable<Proyecto | null>;

  /** Obtiene proyectos filtrados directamente desde la fuente */
  abstract obtenerPorCategoria(categoria: CategoriaProyecto): Observable<Proyecto[]>;
}
```

```
// domain/ports/perfil-repository.port.ts
import { Observable } from 'rxjs';
import { Perfil } from '../models';

export abstract class PerfilRepository {
  abstract obtenerPerfil(): Observable<Perfil>;
}
```

2. Pacto con la UI: Contratos de Estado (application/ports)
Es la interfaz que expone la Capa de Aplicación hacia los componentes visuales
La UI solo ve Signals de lectura (para garantizar que no mute el estado directamente) y métodos de acción
(para notificar cuando el usuario interactúa).

```
// application/ports/portfolio-facade.port.ts
import { Signal } from '@angular/core';
import { Proyecto, Perfil, CategoriaProyecto } from '../../domain/models';

export abstract class PortfolioFacadePort {
  // --- Lecturas de solo lectura para la UI (Signals) ---
  abstract readonly perfil: Signal<Perfil | null>;
  abstract readonly proyectosFiltrados: Signal<Proyecto[]>;
  abstract readonly proyectosDestacados: Signal<Proyecto[]>;
  abstract readonly cargando: Signal<boolean>;
  abstract readonly filtroCategoriaActivo: Signal<CategoriaProyecto | null>;

  // --- Intenciones/Acciones que la UI puede disparar ---
  abstract seleccionarCategoria(categoria: CategoriaProyecto | null): void;
  abstract buscarPorTexto(busqueda: string): void;
  abstract limpiarFiltros(): void;
}
```

3. El Ensamblador: Inyección de Dependencias de Angular
donde se firma el "pacto de no agresión". En la configuración global de Angular (app.config.ts)
conectamos los contratos abstractos con sus implementaciones concretas

Si hoy usas un archivo JSON local y mañana cambias a una API REST o un CMS Headless (Sanity/Strapi), solo cambias una línea en este archivo:

```
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { ProyectoRepository } from './domain/ports/proyecto-repository.port';
import { MockProyectoRepository } from './infrastructure/repositories/mock-proyecto.repository';
// Importación futura: import { ApiProyectoRepository } from './infrastructure/repositories/api-proyecto.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      // El sistema pide el contrato abstracto...
      provide: ProyectoRepository,
      // ...pero Angular le entrega la implementación de Mocks JSON
      useClass: MockProyectoRepository 
      // Mañana solo cambiarías a: useClass: ApiProyectoRepository
    }
  ]
};
```

#### Flujo de datos

```
[ UI / Componente ]
       │
       ▼ (Consume Signals y dispara acciones)
[ PortfolioFacadePort ] ── (Capa de Aplicación / Estado)
       │
       ▼ (Solicita datos mediante contrato)
[ ProyectoRepository ]  ── (Capa de Dominio / Puerto)
       ▲
       │ (Implementa el contrato y transforma DTO → Entidad)
[ MockProyectoRepository / ApiProyectoRepository ] ── (Infraestructura)
```

Ej:

1. Tu componente TarjetaProyectoComponent nunca importa HttpClient ni conoce archivos JSON.

2. repositorio MockProyectoRepository nunca sabe qué componente va a renderizar la información ni cómo se verá en pantalla




# Diseño de directorios

Arquitectura Limpia con la organización por Features (Funcionalidades) + Core / Shared

1. Diseño del Árbol de Directorios 
El módulo Core contiene el corazón del sistema (Capas de Dominio, Infraestructura y Aplicación)
Shared reúne elementos visuales reutilizables, y Features aísla cada pantalla o módulo de la aplicación

```
src/
└── app/
    ├── core/                        # Núcleo del sistema (Singletons, lógica no visual)
    │   ├── domain/                  # Entidades, Enums, Value Objects y Puertos
    │   │   ├── models/
    │   │   └── ports/
    │   ├── infrastructure/          # Mappers, DTOs, Fuentes de Datos y Repositorios
    │   │   ├── dtos/
    │   │   ├── mappers/
    │   │   ├── data/
    │   │   └── repositories/
    │   └── application/             # Estado global, Casos de Uso y Facades
    │       ├── ports/
    │       └── services/
    │
    ├── shared/                      # UI y utilidades reutilizables en múltiples features
    │   ├── components/              # Componentes Dumb globales (Botón, Skeleton, Error, Navbar)
    │   ├── directives/              # Directivas personalizadas
    │   ├── pipes/                   # Pipes reutilizables
    │   └── utils/                   # Helpers o funciones puras
    │
    ├── features/                    # Módulos / Páginas de la aplicación
    │   ├── portfolio/               # Feature 1: Galería y Detalle de Proyectos
    │   │   ├── components/          # Componentes visuales exclusivos de esta feature
    │   │   ├── pages/               # Smart Components (Páginas contenedor)
    │   │   └── portfolio.routes.ts  # Rutas del módulo
    │   │
    │   └── about/                   # Feature 2: Sobre Mí / Experiencia
    │       ├── components/
    │       ├── pages/
    │       └── about.routes.ts
    │
    ├── app.component.ts
    ├── app.config.ts
    └── app.routes.ts
```

2. Configuración de Alias de Importación (tsconfig.json)

Para evitar imports relativos profundos como ../../../../core/domain/models
configuramos los paths en la sección compilerOptions del archivo tsconfig.json (o tsconfig.app.json según tu versión de Angular):

```
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "implicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "moduleResolution": "bundler",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "baseUrl": "./",
    "paths": {
      "@core/*": ["src/app/core/*"],
      "@domain/*": ["src/app/core/domain/*"],
      "@infrastructure/*": ["src/app/core/infrastructure/*"],
      "@application/*": ["src/app/core/application/*"],
      "@shared/*": ["src/app/shared/*"],
      "@features/*": ["src/app/features/*"]
    }
  }
}
```

Ej:

```
import { Proyecto } from '@domain/models';
import { PortfolioFacade } from '@application/services/portfolio.facade';
import { TarjetaProyectoComponent } from '@shared/components/tarjeta-proyecto/tarjeta-proyecto.component';
```




# Configuración del proyecto y herramientas de calidad de código

ESLint (con reglas de Angular y TypeScript), Prettier (formato automático)
Husky + lint-staged (automatización en Git hooks)
reglas estrictas en TypeScript.

1. Configuración de ESLint en Angular
Linter para reglas de código y buenas prácticas

Ejecuta el esquema oficial de Angular para instalar e integrar ESLint:

```
ng add @angular-eslint/schematics
```
Esto generará el archivo de configuración .eslintrc.json (o eslint.config.js en versiones recientes de ESLint).
Asegúrate de incluir reglas estrictas de tipo y arquitectura:

```
// .eslintrc.json
{
  "root": true,
  "ignorePatterns": ["projects/**/*"],
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates"
      ],
      "rules": {
        "@angular-eslint/directive-selector": [
          "error",
          { "type": "attribute", "prefix": "app", "style": "camelCase" }
        ],
        "@angular-eslint/component-selector": [
          "error",
          { "type": "element", "prefix": "app", "style": "kebab-case" }
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
        "no-console": ["warn", { "allow": ["warn", "error"] }]
      }
    },
    {
      "files": ["*.html"],
      "extends": [
        "plugin:@angular-eslint/template/recommended",
        "plugin:@angular-eslint/template/accessibility"
      ],
      "rules": {}
    }
  ]
}
```
 
2. Configuración de Prettier
Formateador automático de código estilo y sintaxis

Instala Prettier y el plugin para desactivar reglas de ESLint que colisionen con el formateador:

```
npm install --save-dev prettier eslint-config-prettier prettier-plugin-tailwindcss
```

Crea el archivo .prettierrc en la raíz del proyecto:

```
{
  "singleQuote": true,
  "trailingComma": "none",
  "printWidth": 100,
  "tabWidth": 2,
  "semi": true,
  "bracketSpacing": true,
  "arrowParens": "always",
  "htmlWhitespaceSensitivity": "ignore",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

Agrega también un archivo .prettierignore:

```
/dist
/coverage
/.angular
/node_modules
package-lock.json
```

3. Configurar Git Hooks con Husky y lint-staged
Garantiza que nadie suba código sin formatear o con errores

Instala las herramientas para ejecutar verificaciones automáticamente antes de cada git commit:

```
npm install --save-dev husky lint-staged
npx husky init
```

Configura los comandos de lint-staged dentro de tu package.json:

```
// package.json
{
  "lint-staged": {
    "src/**/*.{ts,html,scss,css}": [
      "prettier --write"
    ],
    "src/**/*.ts": [
      "eslint --fix"
    ]
  }
}
```

Edita el archivo del hook .husky/pre-commit para invocar lint-staged:

```
npx lint-staged
```

4. Reforzar el compilador de TypeScript (`tsconfig.json`)
Verificación estricta de tipos a nivel de compilación

Asegúrate de que tu tsconfig.json tenga activas las banderas estrictas para evitar any implícitos o null no manejados:

```
// tsconfig.json -> compilerOptions
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "exactOptionalPropertyTypes": true
  }
}
```

5. Scripts npm para el flujo diario
Comandos unificados en package.json

Agrega estos scripts a tu package.json para ejecutar revisiones manuales o integrar en un pipeline de CI/CD:

```
// package.json -> scripts
{
  "scripts": {
    "lint": "ng lint",
    "lint:fix": "ng lint --fix",
    "format": "prettier --write \"src/**/*.{ts,html,scss,css,json}\"",
    "format:check": "prettier --check \"src/**/*.{ts,html,scss,css,json}\"",
    "type-check": "tsc --noEmit"
  }
}
```

Al escribir código, Prettier mantiene el estilo visual alineado.
Si intentas usar any o variables no utilizadas, ESLint te avisará en tiempo real en el editor
Al ejecutar git commit, Husky intercepta la acción, corre lint-staged únicamente en los archivos modificados
los formatea y corrige antes de confirmar el commit.




# Creación proyecto

npm install -g @angular/cli
ng new nombre
cd nombre

ng serve
ng build
ng generate component nombre o ng g c nombre

ng add tailwindcss

Iniciar un proyecto profesional de Angular en la actualidad
aprovechando Standalone Components, Signals y Prerendering / SSG para SEO y rendimiento

comando estándar con la CLI y sus explicaciones

```
ng new portfolio-app \
  --style=css \
  --routing=true \
  --ssr=true \
  --strict=true \
  --prefix=app \
  --package-manager=npm
```

Banderas:

--style=css
Para proyectos que utilizarán Tailwind CSS (especialmente la versión v3/v4), CSS plano con la directiva/importación de Tailwind es el estándar moderno recomendado
Evita la sobrecapa innecesaria de SCSS.

--routing=true
Genera el archivo app.routes.ts configurado para Standalone Components, listo para implementar Lazy Loading por funcionalidad.

--ssr=true
En Angular moderno, esta bandera incluye el motor de hidratación y compilación para Prerender / Static Site Generation (SSG).
Para un portfolio, esto es fundamental: en lugar de ser un HTML en blanco (SPA tradicional)
ng build generará archivos HTML estáticos pre-renderizados para un SEO instantáneo.

--strict=true
Activa el modo estricto en el compilador de TypeScript y en el comprobador de plantillas HTML
Garantiza que no se permitan tipos any implícitos, exige comprobación de valores nulos (strictNullChecks) y previene errores en tiempo de compilación.

--prefix=app
Define el prefijo estándar para los selectores de los componentes custom
(ej. <app-tarjeta-proyecto>).


Post-Inicialización:

preparación antes del código

1. Limpieza del Boilerplate
Vaciar el contenido por defecto generado en src/app/app.component.html
dejando únicamente la etiqueta de enrutamiento:

```
<!-- src/app/app.component.html -->
<router-outlet />
```

2. Creación del Árbol de Directorios
Crear la estructura basada en capas y funcionalidades que definimos anteriormente:

```
cd portfolio-app
mkdir -p src/app/core/domain/{models,ports}
mkdir -p src/app/core/infrastructure/{dtos,mappers,data,repositories}
mkdir -p src/app/core/application/{ports,services}
mkdir -p src/app/shared/{components,directives,pipes,utils}
mkdir -p src/app/features/portfolio/{components,pages}
```

3. Inyección de Alias de Importación (tsconfig.json)

Añadir la sección paths dentro de compilerOptions en tsconfig.json para habilitar los alias @core/*, @shared/* y @features/*
que configuramos en la etapa de arquitectura.



# 2. Capa de Datos e Infraestructura: Servicios que obtienen la información (Mocks JSON en primera instancia, preparados para cambiar a una API o CMS sin tocar la UI).

encargada de aislar al resto del sistema de la procedencia de los datos

implementamos en TypeScript / RxJS:
garantizando que el paso de archivos JSON locales
(Fase Inicial) a una API externa o CMS (Fase Avanzada) sea transparente


1. DTOs (Data Transfer Objects) (infrastructure/dtos)
representan la estructura cruda tal como viene del archivo JSON o de un servidor externo
(con posibles nombres desalineados, campos opcionales sin formatear o tipos primitivos):

```
// infrastructure/dtos/proyecto.dto.ts
export interface ProyectoDto {
  id: string;
  slug: string;
  title: string;                 // En la API viene en inglés 'title'
  summary: string;               // En la API viene 'summary'
  description?: string;
  category: string;              // Viene como string sin tipar
  status: string;
  tech_stack: string[];          // Viene en snake_case
  links: {
    type: string;
    url: string;
    label?: string;
  }[];
  cover_image?: string;
  is_featured?: boolean;
  priority_order?: number;
}
```


2. Mapeador (Mapper) (infrastructure/mappers)

El Mapeador limpia la información cruda y se asegura de convertirla en una Entidad de Dominio pura
Si la fuente externa envía un campo nulo o una categoría inválida, el Mapeador aplica un valor por defecto seguro (fallback):

```
// infrastructure/mappers/proyecto.mapper.ts
import { Proyecto, CategoriaProyecto, EstadoProyecto, TipoEnlace } from '../../domain/models';
import { ProyectoDto } from '../dtos/proyecto.dto';

export class ProyectoMapper {
  static toDomain(dto: ProyectoDto): Proyecto {
    return {
      id: dto.id,
      slug: dto.slug,
      titulo: dto.title ?? 'Proyecto sin título',
      resumen: dto.summary ?? '',
      descripcionDetallada: dto.description,
      categoria: ProyectoMapper.sanearCategoria(dto.category),
      estado: ProyectoMapper.sanearEstado(dto.status),
      tecnologias: dto.tech_stack ?? [],
      enlaces: (dto.links ?? []).map(link => ({
        tipo: (link.type as TipoEnlace) ?? 'github',
        url: link.url,
        etiqueta: link.label
      })),
      imagenPortada: dto.cover_image,
      destacado: dto.is_featured ?? false,
      ordenPrioridad: dto.priority_order ?? 99
    };
  }

  // Sanitización de taxonomías para evitar romper el dominio si la API cambia
  private static sanearCategoria(cat: string): CategoriaProyecto {
    const categoriasValidas: CategoriaProyecto[] = ['frontend', 'backend', 'fullstack', 'cli', 'libreria'];
    return categoriasValidas.includes(cat as CategoriaProyecto) ? (cat as CategoriaProyecto) : 'fullstack';
  }

  private static sanearEstado(est: string): EstadoProyecto {
    const estadosValidos: EstadoProyecto[] = ['en-desarrollo', 'produccion', 'archivado'];
    return estadosValidos.includes(est as EstadoProyecto) ? (est as EstadoProyecto) : 'en-desarrollo';
  }
}
```


3. y 4. Repositorio Mock, Caché y Resiliencia (infrastructure/repositories)

Implementamos el contrato ProyectoRepository definido en la Capa de Dominio.

esta implementación:

Simulamos latencia de red (delay) para validar estados de carga en la UI.

Aplicamos Caché en Memoria con RxJS (shareReplay).

Agregamos Manejo de Errores con catchError para entregar respuestas seguras en lugar de romper la app.


```
// infrastructure/repositories/mock-proyecto.repository.ts
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map, catchError, shareReplay } from 'rxjs/operators';
import { ProyectoRepository } from '../../domain/ports/proyecto-repository.port';
import { Proyecto, CategoriaProyecto } from '../../domain/models';
import { ProyectoDto } from '../dtos/proyecto.dto';
import { ProyectoMapper } from '../mappers/proyecto.mapper';

// Importación directa del JSON estático simulando base de datos local
import proyectosData from '../data/proyectos.json';

@Injectable({
  providedIn: 'root'
})
export class MockProyectoRepository implements ProyectoRepository {
  // Caché en memoria para no reprocesar el JSON en cada suscripción
  private cacheProyectos$?: Observable<Proyecto[]>;

  obtenerTodos(): Observable<Proyecto[]> {
    if (!this.cacheProyectos$) {
      this.cacheProyectos$ = of(proyectosData as ProyectoDto[]).pipe(
        delay(600), // Simula latencia de red (600ms)
        map(dtos => dtos.map(ProyectoMapper.toDomain)),
        catchError(error => {
          console.error('Error leyendo los proyectos locales:', error);
          // Fallback: Si el JSON falla, devolvemos un arreglo vacío sin tirar la app
          return of([]);
        }),
        shareReplay(1) // Guarda el último valor para futuros suscriptores (Caché)
      );
    }
    return this.cacheProyectos$;
  }

  obtenerPorSlug(slug: string): Observable<Proyecto | null> {
    return this.obtenerTodos().pipe(
      map(proyectos => proyectos.find(p => p.slug === slug) ?? null)
    );
  }

  obtenerPorCategoria(categoria: CategoriaProyecto): Observable<Proyecto[]> {
    return this.obtenerTodos().pipe(
      map(proyectos => proyectos.filter(p => p.categoria === categoria))
    );
  }
}
```


Evolución a la Fase Avanzada (API / CMS):

Cuando decidas conectar el portfolio a una API REST real o un CMS Headless (ej. Sanity o Strapi),
la Capa de Dominio y la UI no cambian
Únicamente creas este archivo en Infraestructura

```
// infrastructure/repositories/api-proyecto.repository.ts (Demostración de evolutividad)
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, shareReplay } from 'rxjs/operators';
import { ProyectoRepository } from '../../domain/ports/proyecto-repository.port';
import { Proyecto, CategoriaProyecto } from '../../domain/models';
import { ProyectoDto } from '../dtos/proyecto.dto';
import { ProyectoMapper } from '../mappers/proyecto.mapper';

@Injectable({ providedIn: 'root' })
export class ApiProyectoRepository implements ProyectoRepository {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.miportfolio.com/v1/proyectos';
  private cache$?: Observable<Proyecto[]>;

  obtenerTodos(): Observable<Proyecto[]> {
    if (!this.cache$) {
      this.cache$ = this.http.get<ProyectoDto[]>(this.apiUrl).pipe(
        map(dtos => dtos.map(ProyectoMapper.toDomain)),
        catchError(() => of([])), // Fallback
        shareReplay(1)
      );
    }
    return this.cache$;
  }

  obtenerPorSlug(slug: string): Observable<Proyecto | null> {
    return this.obtenerTodos().pipe(map(p => p.find(item => item.slug === slug) ?? null));
  }

  obtenerPorCategoria(cat: CategoriaProyecto): Observable<Proyecto[]> {
    return this.obtenerTodos().pipe(map(p => p.filter(item => item.categoria === cat)));
  }
}
```


## Pacto con la Capa Siguiente (Capa de Aplicación)

garantía formal que ofrece la infraestructura para que el resto del sistema pueda trabajar a "ciegas"
confiando ciegamente en la calidad de los datos y en la estabilidad de la red

materializa mediante barreras de exportación y encapsulamiento de resiliencia

1. Garantía 1: Cumplimiento 100% de la Interfaz del Dominio

infraestructura impone un "muro de contención" (Barrel Export / Public API).
Ningún archivo de la Capa de Aplicación o de la UI tiene permiso para importar DTOs o Mappers.

Solo se exportan los Puertos (Contratos) y las Implementaciones Concretas.

```
// infrastructure/index.ts (Frontera de Infraestructura)

// ❌ NUNCA se exporta: ProyectoDto, ProyectoMapper
// ✅ SOLO se exportan los proveedores y los repositorios concretos:
export * from './repositories/mock-proyecto.repository';
export * from './repositories/api-proyecto.repository'; // Futuro
```

Logra:
Que la Capa de Aplicación pida datos sabiendo que jamás recibirá un null inesperado
una clave en snake_case o un string en inglés de una API externa
Todo el "trabajo sucio" de limpieza ocurrió dentro del Repositorio.


2. Garantía 2: Gestiones de Espera y Fallos de Forma Transparente

La Capa de Aplicación nunca necesita escribir bloques try/catch ni manejar errores de red HTTP
El repositorio encapsula la lógica de reintentos, fallbacks (valores por defecto seguros) y estados de espera.

```
// infrastructure/repositories/mock-proyecto.repository.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, catchError, shareReplay, retry } from 'rxjs/operators';
import { ProyectoRepository } from '../../domain/ports/proyecto-repository.port';
import { Proyecto } from '../../domain/models';
import { ProyectoMapper } from '../mappers/proyecto.mapper';
import proyectosData from '../data/proyectos.json';

@Injectable({ providedIn: 'root' })
export class MockProyectoRepository implements ProyectoRepository {
  private cache$?: Observable<Proyecto[]>;

  obtenerTodos(): Observable<Proyecto[]> {
    if (!this.cache$) {
      this.cache$ = of(proyectosData).pipe(
        // 1. Simulación de red / latencia
        delay(500),

        // 2. Mapeo estricto a Entidades de Dominio
        map(dtos => dtos.map(ProyectoMapper.toDomain)),

        // 3. Resiliencia: Reintenta 2 veces si hay un parpadeo de red
        retry(2),

        // 4. Fallback Transparente: Si todo falla, entrega un arreglo vacío en lugar de romper la app
        catchError(error => {
          console.error('[Infraestructura] Error crítico recuperado:', error);
          return of([]); 
        }),

        // 5. Caché: Los subsiguientes llamados leen de memoria instantáneamente
        shareReplay(1)
      );
    }

    return this.cache$;
  }

  obtenerPorSlug(slug: string): Observable<Proyecto | null> {
    return this.obtenerTodos().pipe(
      map(proyectos => proyectos.find(p => p.slug === slug) ?? null)
    );
  }

  obtenerPorCategoria(cat: any): Observable<Proyecto[]> {
    return this.obtenerTodos().pipe(
      map(proyectos => proyectos.filter(p => p.categoria === cat))
    );
  }
}
```


3. Demostración: Cómo "siente" este pacto la Capa de Aplicación

Gracias a este pacto, cuando entramos a la Fase 3 (Capa de Aplicación)
el servicio de estado consume los datos de forma ridículamente limpia
y expresiva mediante toSignal o rxResource de Angular:

```
// Un adelanto de la Capa de Aplicación demostrando el consumo del Pacto:
@Injectable({ providedIn: 'root' })
export class PortfolioStateService {
  private proyectoRepo = inject(ProyectoRepository);

  // La Capa de Aplicación recibe directamente un Signal de Entidades de Dominio
  // No hay try/catch, no hay mapeos, no hay manejo de errores de red.
  readonly proyectos = toSignal(this.proyectoRepo.obtenerTodos(), { initialValue: [] });
}
```



## JSON local: mock

##### !!! Actúa como una base de datos estática e liviana
##### sirve para alimentar los DTOs en la primera fase de desarrollo sin depender de un backend activo


1. Reglas Sintácticas Estrictas

A diferencia de un objeto literal de JavaScript o TypeScript, JSON exige un cumplimiento estricto de sintaxis:

`Comillas dobles obligatorias`: Tanto las claves (propiedades) como los valores de tipo texto deben llevar comillas dobles ("clave": "valor").
No se permiten comillas simples (') ni nombres de clave sin comillas.

`Sin comas finales (Trailing Commas)`:
No puede haber una coma después del último elemento de un objeto o lista

`Tipos de datos permitidos`:
string ("texto")
number (10, 3.14)
boolean (true o false)
null
array ([...])
object ({...})

`Prohibiciones`:
No permite comentarios (// o /* */)
funciones, fechas como tipo nativo
(se envían como cadenas ISO "2026-05-15")
ni valores undefined.


2. Ubicación

existen dos formas de consumo según el enfoque del repositorio

`Importación Directa (Mocks de Código)`:
Ubicación: src/app/core/infrastructure/data/proyectos.json
Forma de Consumo: import proyectosData from '../data/proyectos.json' 
Es ultra rápido, no hace peticiones HTTP locales y se empaqueta directamente en tiempo de compilación.

`Recurso Estático (Simulación HTTP)`:
Ubicación: public/data/proyectos.json
Forma de Consumo: httpClient.get('/data/proyectos.json')
Simula una llamada real de red a través de un endpoint local.


Estructura:
proyectos.json

Alineado 100% con la interfaz ProyectoDto que definimos en la capa de infraestructura
(src/app/core/infrastructure/dtos/proyecto.dto.ts):

```
[
  {
    "id": "proj-01",
    "slug": "calculadora-react-glass",
    "title": "Calculadora Interactiva Liquid Glass",
    "summary": "Calculadora profesional en React con soporte completo para teclado, motor matemático desacoplado y diseño visual Liquid Glass.",
    "description": "Proyecto enfocado en la separación estricta de responsabilidades. Cuenta con un motor de cálculo independiente de la UI, manejo de eventos de teclado globales y testing unitario.",
    "category": "frontend",
    "status": "produccion",
    "tech_stack": ["React", "TypeScript", "Styled Components", "Vite", "Jest"],
    "links": [
      {
        "type": "github",
        "url": "https://github.com/usuario/react-calculator",
        "label": "Ver Código"
      },
      {
        "type": "demo",
        "url": "https://calculator-demo.com",
        "label": "Demo en Vivo"
      }
    ],
    "cover_image": "assets/images/projects/calculator-cover.webp",
    "is_featured": true,
    "priority_order": 1
  },
  {
    "id": "proj-02",
    "slug": "analizador-frecuencia-texto",
    "title": "Analizador de Frecuencia de Texto",
    "summary": "Script enfocado en procesamiento de texto, conteo de palabras y oraciones aplicando principios KISS y tipado estricto.",
    "description": "Herramienta desarrollada para analizar estructuras de texto en archivos masivos, calcular estadísticas de legibilidad e identificar palabras clave.",
    "category": "cli",
    "status": "produccion",
    "tech_stack": ["Python", "MyPy", "Pytest"],
    "links": [
      {
        "type": "github",
        "url": "https://github.com/usuario/text-analyzer",
        "label": "Repositorio"
      }
    ],
    "cover_image": "assets/images/projects/cli-analyzer.webp",
    "is_featured": true,
    "priority_order": 2
  },
  {
    "id": "proj-03",
    "slug": "monitor-precios-web",
    "title": "Monitor de Precios Web",
    "summary": "Sistema de rastreo automatizado de precios de productos utilizando técnicas de extracción de datos web.",
    "description": "Scraper configurable que analiza periódicamente páginas de e-commerce y genera alertas cuando detecta caídas de precio respecto a un umbral configurado.",
    "category": "backend",
    "status": "en-desarrollo",
    "tech_stack": ["Python", "BeautifulSoup", "SQLite"],
    "links": [
      {
        "type": "github",
        "url": "https://github.com/usuario/price-monitor",
        "label": "Repositorio"
      }
    ],
    "cover_image": "assets/images/projects/scraper-cover.webp",
    "is_featured": false,
    "priority_order": 3
  }
]
```


#### Configuración en TypeScript para Importación de JSON (tsconfig.json)

Para que TypeScript permita importar archivos .json directamente como módulos en tu repositorio
import proyectosData from '...'), la opción resolveJsonModule debe estar activa en el tsconfig.json:

```
// tsconfig.json -> compilerOptions
{
  "compilerOptions": {
    "resolveJsonModule": true,
    "esModuleInterop": true
  }
}
```

Gracias a esta configuración, cuando MockProyectoRepository hace:

```
import proyectosData from '../data/proyectos.json';
```

TypeScript infiere automáticamente el tipo de la estructura JSON y nos permite pasárselo directamente al ProyectoMapper.toDomain() sin errores de compilación




# 3. Capa de Aplicación y Estado: Estado reactivo basado en Signals que expone solo lo que la UI necesita consumir.


Capa de Aplicación y Estado, el cerebro reactivo de la app. 
esta capa se construye de forma elegante utilizando Signals
computed y el patrón Facade.

##### Cumpliendo con el flujo unidireccional y las garantías de la capa anterior
##### la UI consumirá exclusivamente Signals de solo lectura (Signal<T>)
##### modificará el estado únicamente a través de métodos de acción

Capa de Aplicación:
(application/services/portfolio.facade.ts)

```
import { Injectable, inject, signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of, tap } from 'rxjs';

// Importaciones del Dominio (Interfaces y Puertos)
import { Proyecto, Perfil, CategoriaProyecto } from '../../domain/models';
import { ProyectoRepository } from '../../domain/ports/proyecto-repository.port';
import { PerfilRepository } from '../../domain/ports/perfil-repository.port';
import { PortfolioFacadePort } from '../ports/portfolio-facade.port';

@Injectable({
  providedIn: 'root'
})
export class PortfolioFacade implements PortfolioFacadePort {
  // Inyección de dependencias de los puertos de infraestructura
  private proyectoRepo = inject(ProyectoRepository);
  private perfilRepo = inject(PerfilRepository);

  // =========================================================================
  // 1. ESTADO BASE (UI State)
  // =========================================================================

  // A) Transición / Red
  readonly cargando = signal<boolean>(true);
  readonly error = signal<string | null>(null);

  // B) Criterios de Interacción (Mutables internamente mediante WritableSignal)
  readonly filtroCategoriaActivo = signal<CategoriaProyecto | null>(null);
  readonly busquedaTexto = signal<string>('');
  readonly proyectoSeleccionadoSlug = signal<string | null>(null);
  readonly modoOscuro = signal<boolean>(true);

  // C) Datos de Dominio (Carga inicial asíncrona convertida a Signal de solo lectura)
  private todosLosProyectos = toSignal(
    this.proyectoRepo.obtenerTodos().pipe(
      tap(() => this.cargando.set(false)),
      catchError((err) => {
        this.cargando.set(false);
        this.error.set('No se pudieron cargar los proyectos. Intenta de nuevo.');
        return of([] as Proyecto[]);
      })
    ),
    { initialValue: [] as Proyecto[] }
  );

  readonly perfil = toSignal(
    this.perfilRepo.obtenerPerfil().pipe(
      catchError(() => of(null))
    ),
    { initialValue: null as Perfil | null }
  );

  // =========================================================================
  // 2. ESTADO DERIVADO Y REACTIVIDAD (Computed Signals)
  // =========================================================================

  /**
   * Proyectos filtrados automáticamente.
   * Se recalcula de forma perezosa (lazy) ÚNICAMENTE cuando cambian:
   * `todosLosProyectos`, `filtroCategoriaActivo` o `busquedaTexto`.
   */
  readonly proyectosFiltrados = computed<Proyecto[]>(() => {
    const proyectos = this.todosLosProyectos();
    const categoria = this.filtroCategoriaActivo();
    const texto = this.busquedaTexto().toLowerCase().trim();

    return proyectos
      .filter((proyecto) => {
        // Filtro por categoría
        const coincideCategoria = !categoria || proyecto.categoria === categoria;

        // Filtro por búsqueda de texto (Título, resumen o tecnologías)
        const coincideTexto =
          !texto ||
          proyecto.titulo.toLowerCase().includes(texto) ||
          proyecto.resumen.toLowerCase().includes(texto) ||
          proyecto.tecnologias.some((tech) => tech.toLowerCase().includes(texto));

        return coincideCategoria && coincideTexto;
      })
      .sort((a, b) => a.ordenPrioridad - b.ordenPrioridad); // Ordenamiento por prioridad
  });

  /** Proyectos marcados como destacados para el Hero / Inicio */
  readonly proyectosDestacados = computed<Proyecto[]>(() => {
    return this.todosLosProyectos().filter((p) => p.destacado);
  });

  /** Proyecto activo para vistas detalladas o modales */
  readonly proyectoSeleccionado = computed<Proyecto | null>(() => {
    const slug = this.proyectoSeleccionadoSlug();
    if (!slug) return null;
    return this.todosLosProyectos().find((p) => p.slug === slug) ?? null;
  });

  /** Conteo dinámico para el resumen de resultados */
  readonly totalProyectosVisibles = computed<number>(() => {
    return this.proyectosFiltrados().length;
  });

  // =========================================================================
  // 3. ORQUESTACIÓN DE CASOS DE USO (Acciones del usuario)
  // =========================================================================

  /** Caso de Uso: Filtrar por categoría */
  seleccionarCategoria(categoria: CategoriaProyecto | null): void {
    // Si vuelve a hacer clic en la misma categoría, la desactiva (toggle)
    if (this.filtroCategoriaActivo() === categoria) {
      this.filtroCategoriaActivo.set(null);
    } else {
      this.filtroCategoriaActivo.set(categoria);
    }
  }

  /** Caso de Uso: Búsqueda por texto libre */
  buscarPorTexto(texto: string): void {
    this.busquedaTexto.set(texto);
  }

  /** Caso de Uso: Abrir/Cerrar detalle de un proyecto */
  seleccionarProyecto(slug: string | null): void {
    this.proyectoSeleccionadoSlug.set(slug);
  }

  /** Caso de Uso: Resetear la galería */
  limpiarFiltros(): void {
    this.filtroCategoriaActivo.set(null);
    this.busquedaTexto.set('');
  }

  /** Caso de Uso: Alternar tema de la UI */
  alternarModoOscuro(): void {
    this.modoOscuro.update((prev) => !prev);
  }
}
```

Claves:

`Eficiencia con computed`:
Si el usuario escribe en la barra de búsqueda
la lista proyectosFiltrados se recalcula sin tocar los datos base
ni hacer nuevas peticiones a infraestructura.

`Encapsulamiento del Estado`:
Los componentes de la UI solo reciben Signal<T> de lectura.
No pueden hacer this.portfolioFacade.busquedaTexto.set('algo')
directamente desde afuera, garantizando el flujo unidireccional.

`Manejo de Errores y Carga en UI`:
Los componentes pueden reaccionar al instante leyendo portfolioFacade.cargando()
o portfolioFacade.error() para mostrar skeletons o avisos.



## Pacto capa presentación

##### frontera final que garantiza la separación total entre la lógica de negocio/estado y los componentes de la interfaz
A través de este pacto, un componente de Angular nunca procesa arrays
ni realiza peticiones HTTP, ni gestiona estados en memoria

La vista solo renderiza lo que lee y notifica lo que el usuario hace

Tres conceptos

1. Capa de Aplicación (PortfolioFacade)
expone hacia la UI una API pública estructurada exactamente en estos tres bloques:

```
// Lo que la Capa de Presentación "ve" al inyectar el Facade:

export class ComponenteEjemplo {
  private facade = inject(PortfolioFacade);

  // 1. ENTRADAS DE SOLO LECTURA (Signals calculadas y listas para pintar)
  proyectos = this.facade.proyectosFiltrados;     // Signal<Proyecto[]> -> Ya filtrados y ordenados
  destacados = this.facade.proyectosDestacados;  // Signal<Proyecto[]>
  perfil = this.facade.perfil;                   // Signal<Perfil | null>
  total = this.facade.totalProyectosVisibles;    // Signal<number>

  // 2. INDICADORES DE ESTADO SIMPLES (Flags para control de UI)
  estaCargando = this.facade.cargando;           // Signal<boolean>
  mensajeError = this.facade.error;              // Signal<string | null>
  filtroActivo = this.facade.filtroCategoriaActivo;// Signal<CategoriaProyecto | null>

  // 3. GANCHOS DE ACCIÓN (Funciones limpias de ejecución)
  onBuscar(texto: string) {
    this.facade.buscarPorTexto(texto);
  }

  onFiltrarCategoria(cat: CategoriaProyecto) {
    this.facade.seleccionarCategoria(cat);
  }

  onLimpiar() {
    this.facade.limpiarFiltros();
  }
}
```


2. Demostración en la Vista: Componente Smart Libre de Lógica

Para visualizar la efectividad del pacto, observa cómo queda la plantilla HTML de un componente contenedor
utilizando el Control Flow moderno de Angular (@if, @for).

La vista no hace ningún .filter(), ni .sort(), ni maneja estados locales:

```
<!-- proyectos-seccion.component.html -->

<!-- 1. Manejo transparente del estado de carga (Skeleton) -->
@if (facade.cargando()) {
  <app-proyectos-skeleton />
} 

<!-- 2. Manejo transparente de errores -->
@else if (facade.error(); as mensajeError) {
  <app-mensaje-error [mensaje]="mensajeError" />
} 

<!-- 3. Renderizado de datos listos -->
@else {
  <!-- Buscador y Filtros -->
  <app-barra-busqueda 
    [filtroActivo]="facade.filtroCategoriaActivo()"
    (alBuscar)="facade.buscarPorTexto($event)"
    (alSeleccionarCategoria)="facade.seleccionarCategoria($event)" 
  />

  <p>Mostrando {{ facade.totalProyectosVisibles() }} proyectos</p>

  <!-- Lista de resultados (o Estado Vacío) -->
  <div class="grid-proyectos">
    @for (proyecto of facade.proyectosFiltrados(); track proyecto.id) {
      <!-- Componente Dumb: Solo recibe la entidad y emite eventos si es necesario -->
      <app-tarjeta-proyecto 
        [proyecto]="proyecto"
        (alSeleccionar)="facade.seleccionarProyecto($event)"
      />
    } @empty {
      <app-estado-vacio 
        mensaje="No hay proyectos que coincidan con la búsqueda."
        (alLimpiar)="facade.limpiarFiltros()"
      />
    }
  </div>
}
```


3. Beneficios

`Reutilización y Rediseño Cero Riesgo`:
Si mañana decides cambiar el diseño de la grilla de proyectos o reemplazar Tailwind por otra solución visual
no tocas ni una sola línea de lógica de búsqueda ni de estado

`Testing de UI Inmediato`:
Probar la interfaz es extremadamente sencillo
Para testear si la pantalla muestra el Skeleton, solo necesitas simular que cargando es true
No hay necesidad de simular llamadas HTTP complejas ni temporizadores

`Cero Mapeos en el Componente`:
La plantilla HTML recibe el objeto Proyecto exactamente con los nombres de propiedades que necesita para pintar la tarjeta




# Dumb y Smart

Prueba de flujo de datos, filtros y eventos

Ej: 
Dumb (TarjetaProyectoComponent)
Smart (ProyectosSeccionComponent)

utilizando las características de Angular moderno (Standalone Components, Signal Inputs/Outputs y Control Flow).


1. Dumb: TarjetaProyectoComponent
##### componente solo recibe la entidad Proyecto desde su componente padre
##### emite una señal cuando el usuario quiere ver el detalle. Cero lógica de negocio.

presentation/components/tarjeta-proyecto/tarjeta-proyecto.component.ts

```
import { Component, input, output } from '@angular/core';
import { Proyecto } from '../../../domain/models';

@Component({
  selector: 'app-tarjeta-proyecto',
  standalone: true,
  templateUrl: './tarjeta-proyecto.component.html'
})
export class TarjetaProyectoComponent {
  // Input basado en Signal (Obligatorio recibir una entidad Proyecto)
  proyecto = input.required<Proyecto>();

  // Output basado en Signal para notificar la selección del slug hacia el padre
  alSeleccionar = output<string>();

  onVerDetalle() {
    this.alSeleccionar.emit(this.proyecto().slug);
  }
}
```

Plantilla HTML (tarjeta-proyecto.component.html)

```
<article>
  <h3>{{ proyecto().titulo }}</h3>
  <p>
    <strong>Categoría:</strong> {{ proyecto().categoria }} | 
    <strong>Estado:</strong> {{ proyecto().estado }}
  </p>
  
  <p>{{ proyecto().resumen }}</p>

  <h4>Tecnologías:</h4>
  <ul>
    @for (tech of proyecto().tecnologias; track tech) {
      <li>{{ tech }}</li>
    }
  </ul>

  @if (proyecto().enlaces.length > 0) {
    <h4>Enlaces:</h4>
    <ul>
      @for (enlace of proyecto().enlaces; track enlace.url) {
        <li>
          <a [href]="enlace.url" target="_blank" rel="noopener noreferrer">
            {{ enlace.etiqueta || enlace.tipo }}
          </a>
        </li>
      }
    </ul>
  }

  <button (click)="onVerDetalle()">Ver detalle del caso de estudio</button>
</article>
<hr />
```


2. Componente Smart: ProyectosSeccionComponent

##### Vista o página contenedora
##### Inyecta PortfolioFacade
##### consume sus Signals de solo lectura (proyectosFiltrados, cargando, error)
##### vincula los eventos de búsqueda y filtrado de la interfaz.

presentation/pages/proyectos-seccion/proyectos-seccion.component.ts

```
import { Component, inject } from '@angular/core';
import { PortfolioFacade } from '../../../application/services/portfolio.facade';
import { TarjetaProyectoComponent } from '../../components/tarjeta-proyecto/tarjeta-proyecto.component';
import { CategoriaProyecto } from '../../../domain/models';

@Component({
  selector: 'app-proyectos-seccion',
  standalone: true,
  imports: [TarjetaProyectoComponent],
  templateUrl: './proyectos-seccion.component.html'
})
export class ProyectosSeccionComponent {
  // Inyección de la Capa de Aplicación (Pacto UI)
  readonly facade = inject(PortfolioFacade);

  // Opciones para la botonera de filtros
  readonly categorias: CategoriaProyecto[] = ['frontend', 'backend', 'fullstack', 'cli', 'libreria'];

  onInputBusqueda(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.facade.buscarPorTexto(valor);
  }
}
```

Plantilla HTML (proyectos-seccion.component.html)

```
<section>
  <h2>Galería de Proyectos</h2>

  <!-- Panel de Control y Filtros -->
  <fieldset>
    <legend>Filtros y Búsqueda</legend>

    <div>
      <label for="busqueda">Buscar proyectos: </label>
      <input 
        id="busqueda" 
        type="search" 
        placeholder="Ej. React, Python..." 
        (input)="onInputBusqueda($event)" 
      />
    </div>

    <br />

    <div>
      <span>Filtrar por categoría: </span>
      <button (click)="facade.seleccionarCategoria(null)">Todas</button>

      @for (cat of categorias; track cat) {
        <button 
          (click)="facade.seleccionarCategoria(cat)"
          [disabled]="facade.filtroCategoriaActivo() === cat"
        >
          {{ cat }} {{ facade.filtroCategoriaActivo() === cat ? '✓' : '' }}
        </button>
      }
    </div>

    <br />
    <button (click)="facade.limpiarFiltros()">Limpiar todo</button>
  </fieldset>

  <br />

  <!-- 1. Estado de Carga -->
  @if (facade.cargando()) {
    <p><em>⏳ Cargando proyectos desde el repositorio...</em></p>
  } 
  
  <!-- 2. Estado de Error -->
  @else if (facade.error(); as mensajeError) {
    <p><strong>⚠️ Error:</strong> {{ mensajeError }}</p>
  } 

  <!-- 3. Lista de Proyectos Filtrados -->
  @else {
    <p>
      Mostrando <strong>{{ facade.totalProyectosVisibles() }}</strong> proyectos.
    </p>

    <div>
      @for (proyecto of facade.proyectosFiltrados(); track proyecto.id) {
        <app-tarjeta-proyecto 
          [proyecto]="proyecto" 
          (alSeleccionar)="facade.seleccionarProyecto($event)"
        />
      } @empty {
        <p>No se encontraron proyectos con los criterios de búsqueda aplicados.</p>
        <button (click)="facade.limpiarFiltros()">Resetear filtros</button>
      }
    </div>
  }
</section>
```

1. Flujo Reactivo Completo: Al escribir en el <input> o hacer clic en los <button> de categoría
la Signal proyectosFiltrados se recalcula en la Capa de Aplicación
Angular actualiza el bloque @for de la pantalla inmediatamente.

2. Desacoplamiento Total: TarjetaProyectoComponent no sabe de dónde vienen los datos
ProyectosSeccionComponent no ejecuta ningún .filter() manual.

3. Manejo de Estados: Probar el estado vacío (@empty) o la simulación de carga de 600ms
configurada en el MockProyectoRepository funciona de forma transparente.




# Renderizar componentes de UI

Ej: ProyectosSeccionComponent
renderizado en pantalla

##### Inclusión Directa (ideal para probar inmediatamente)
##### través de Rutas (app.routes.ts) (el estándar escalable).

1. Inclusión Directa en app.ts y app.html
prueba rapida

Importamos el componente ProyectosSeccionComponent
directamente en el arreglo imports de App
colocamos su etiqueta semántica en el HTML.

```
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Importación usando el alias de TypeScript
import { ProyectosSeccionComponent } from '@features/portfolio/pages/proyectos-seccion/proyectos-seccion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProyectosSeccionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
```

html:

```
<header>
  <h1>Mi Portfolio Profesional</h1>
</header>

<main>
  <!-- Renderizado directo del Smart Component -->
  <app-proyectos-seccion />
</main>

<footer>
  <p>© 2026 - Desarrollado con Angular & Arquitectura Limpia</p>
</footer>
```


2. Enrutamiento: (app.routes.ts)

Si prefieres mantener app.html limpio solo con la etiqueta <router-outlet />
para que la navegación maneje las pantallas con Lazy Loading
configuramos la ruta principal en app.routes.ts:

app.routes.ts:

```
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // Carga perezosa (Lazy Loading) del Smart Component
    loadComponent: () =>
      import('@features/portfolio/pages/proyectos-seccion/proyectos-seccion.component').then(
        (m) => m.ProyectosSeccionComponent
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];
```

app.html (Si usas Enrutamiento)

```
<main>
  <!-- Angular renderiza automáticamente ProyectosSeccionComponent según la ruta activa -->
  <router-outlet />
</main>
```


1. Angular monta componente raíz App.

2. Instancia ProyectosSeccionComponent

3. Componente inyecta PortfolioFacade

4. PortfolioFacade le pide los proyectos a ProyectoRepository
(configurado en app.config.ts como MockProyectoRepository).

5. Tras 500ms de latencia simulada, se procesan los DTOs del JSON local
a Entidades de Dominio y la lista filtrada aparece instantáneamente en pantalla






# Testing

## Config testing












# MVP

simple, mantenible y fácil de ampliar, sin sobre-ingeniería
Angular como base, arquitectura como escala y Tailwind al final.

1. Alcance del MVP

Qué hace la app y qué no hace

Ej:
porfolio simple, el MVP puede ser:

Página de inicio con presentación breve
Sección de proyectos
Sección “sobre mí”
Experiencia / estudios
Contacto
Navegación simple
Diseño responsive


2. Separar el contenido de la presentación

Antes del código, definimos el contenido como datos.

Ej:

nombre
rol
bio corta
links
lista de proyectos
experiencia
habilidades

nos permite cambiar textos o proyectos sin tocar la estructura visual.


3. Diseñar la arquitectura por capas

Clean Architecture: la idea es que lo importante no dependa de detalles técnicos.

Ej:

`Domain`
Entidades y reglas
Ejemplo: Project, Experience, SocialLink

`Application`
Casos de uso
Ejemplo: obtener portafolio, listar proyectos, filtrar proyectos

`Infrastructure`
Fuentes de datos
Ejemplo: archivos JSON, API futura, local storage

`Presentation`
Componentes Angular
Páginas, widgets, layouts, routing

clave: la UI no debería “mandar” sobre la lógica del contenido
La UI consume datos.


4. Definir la navegación

Pensamos la ruta de la app, no el diseño visual

Ej:

/ inicio
/projects
/about
/contact

O incluso una landing de una sola página con secciones internas


5. Pensar el diseño como sistema, no como vista

Antes de dibujar componentes, definimos los bloques reutilizables:

Header
Hero
Section
ProjectCard
SkillBadge
TimelineItem
Footer

Así el diseño crece con orden
No hacemos “componentes por intuición”, sino por repetición real.


6. Elegir el flujo de datos

Ej:

normalmente conviene que el contenido venga de:

un JSON local al principio
luego un CMS o API si hace falta

mantiene simple el arranque y deja abierta la posibilidad de escalar después.


7. Construir primero la base técnica

Antes del detalle visual:

Angular moderno
routing
estructura de carpetas
tipado de modelos
servicio de contenido
layout general

Tailwind entra después


8. Diseñar una pantalla por vez

Una vez lista la base

layout general
hero
proyectos
sobre mí
experiencia
contacto
footer

evita perderse en detalles antes de tener la estructura completa


9. Regla/guia

Si una decisión complica más de lo que simplifica, no va.

Ej:

pocos componentes
pocas capas, pero bien separadas
contenido desacoplado
lógica mínima en componentes
estilos consistentes con Tailwind más adelante


10. Ej arq minima:

`core/`: pocos componentes
`domain/`: pocas capas, pero bien separadas
`application/`: contenido desacoplado
`features/`: lógica mínima en componentes
`shared/`: estilos consistentes con Tailwind más adelante

estructura limpia sin exagerar



# 1. Diseño MVP

una sola fuente de verdad

Página principal

Una landing con secciones ordenadas:

hero o presentación breve
proyectos destacados
sobre mí
habilidades
contacto


Contenido estructurado

El contenido del porfolio se ve desde datos organizados, no escrito “a mano” dentro de la UI cada vez.
Eso incluye:

nombre
rol actual
bio corta
links sociales
lista de proyectos
stack / habilidades
experiencia resumida, si aplica


Navegación simple

Puede ser:

una sola página con scroll por secciones, o
pocas rutas muy claras

Para un MVP, la opción más KISS suele ser single page con secciones.


Presentación de proyectos

Cada proyecto debería mostrar solo lo esencial:

nombre
breve descripción
tecnologías usadas
enlace a demo o repo
imagen o captura, si existe


Contacto

Un bloque simple con:

email
GitHub
LinkedIn
CV, si querés incluirlo


Al mantenerlo simple, queda afuera:

panel admin
login
edición de contenido desde la app
blog
animaciones complejas
formularios avanzados
CMS propio
buscador
filtros sofisticados
múltiples temas o personalización excesiva
internacionalización desde el día uno


### Problema resuelve el MVP

MVP sirve para:
mostrarte profesionalmente
centralizar tu información
tener una web liviana y fácil de mantener
poder actualizar proyectos sin rehacer toda la app


### Criterio de éxito del MVP

La app está bien si una persona puede entrar y en menos de un minuto entender:

quién sos
qué hacés
qué tipo de trabajo mostrás
cómo contactarte


### Regla práctica: Si una feature no mejora esa comprensión, no entra al MVP.




# 2. Contenido separado de la presentación

La presentación es cómo se ve y cómo se organiza visualmente la app.
El contenido es la información que la app muestra.

#### Separarlos permite cambiar textos, proyectos, links o experiencia sin tocar la estructura visual.


1. Fuente de verdad

Definir de dónde sale el contenido:

archivos locales
JSON
API
CMS más adelante

La idea es que exista un lugar claro donde vive la información.


2. Modelo de contenido

Representar la información con una forma estable:

perfil
proyecto
experiencia
contacto
habilidades

#### Esto evita que cada componente invente su propia estructura.


3. Independencia de la UI

#### !!! La UI no debería decidir qué datos existen.
#### Solo debería leer y mostrar lo que ya está definido.

Ej:
el componente no “crea” el proyecto
solo recibe un proyecto y lo renderiza


4. Transformación de datos

#### !!! A veces el contenido viene en una forma y la UI lo necesita en otra

Ej:
##### el contenido puede tener stack como lista simple
##### la UI quizá lo quiera mostrar como badges, grupos o categorías

##### !!! Ahí aparece la idea de adaptar datos antes de presentarlos


5. Reutilización

Si el contenido está separado, podés usarlo en:

home
una sección de proyectos
una página detallada
una futura API o PDF

##### El mismo dato sirve para varios lugares.


6. Mantenibilidad

##### Cambiar una bio, agregar un proyecto o actualizar un link no debería obligarte a rediseñar componentes.
Separar contenido de presentación hace que el sistema sea más fácil de mantener


7. Escalabilidad simple

Hoy puede ser un JSON local.
Mañana puede ser un CMS.
La UI idealmente no tendría que cambiar mucho


8. Ej Separación contenido vs ui: 

Contenido

datos personales
proyectos
experiencia
habilidades
enlaces

Presentación

hero
cards
secciones
layout
tipografía
espaciado




# 3. Diseño arquitectura de capas

#### Cómo se organiza el sistema para que cada parte tenga una responsabilidad clara
##### y para que la UI no quede acoplada a detalles técnicos.


1. Separación de responsabilidades

Cada capa se ocupa de una cosa distinta.

### 1. Dominio: qué es el problema y cuáles son las reglas

### 2. Aplicación: qué acciones necesita el sistema

### 3. Infraestructura: de dónde salen los datos

### 4. Presentación: cómo se muestra todo en Angular

La meta es que una capa no haga el trabajo de otra.


2. Independencia de la UI

La interfaz no debería contener lógica de negocio importante.

la UI no decide cómo se estructura un proyecto
la UI no sabe si los datos vienen de JSON, API o CMS
la UI solo consume lo que ya fue preparado


3. Independencia de la fuente de datos

La app debería poder cambiar de:

JSON local
API
CMS
almacenamiento local

sin reescribir todo el diseño de la interfaz


4. Uso de modelos estables

La arquitectura por capas obliga a definir formas claras para los datos.

Ej:

proyecto
experiencia
habilidad
enlace social
perfil

Eso evita que cada componente invente su propia estructura.


5. Casos de uso

La aplicación no solo “muestra datos”.
También realiza acciones como:

obtener el perfil
listar proyectos
ordenar proyectos destacados
preparar la información para una sección

Eso vive en la capa de aplicación.


6. Adaptadores o mapeos

Muchas veces los datos llegan de una forma y la UI necesita otra.
Por eso la arquitectura por capas suele incluir:

### transformar datos
### mapear respuestas
### adaptar estructuras para presentación


7. Reemplazo fácil de partes

Si una capa cambia, el resto debería sufrir poco.

Ej:

cambiar JSON por API
cambiar la vista sin tocar el modelo
cambiar el contenido sin rehacer componentes


8. Testeabilidad

Cuando la lógica está separada, es más fácil probar:

reglas
casos de uso
transformación de datos

sin depender del navegador o de Angular completo.


### Rs Arquitectura: qué es el contenido, qué hace la app, de dónde salen los datos y cómo se ve

Dominio:
define qué es un proyecto, una habilidad, una experiencia

Aplicación:
decide qué mostrar y en qué orden

Infraestructura:
carga datos desde archivos o servicios

Presentación:
arma la landing, secciones y componentes visuales




# 4. Navegación: una sola página

#### Abarca cómo el usuario recorre la aplicación
No se trata del diseño visual todavía, sino de la experiencia de navegación
##### qué puede visitar, en qué orden y cómo se mueve entre las distintas partes


### Landing Single Page

Todo el contenido vive en una única página, dividido en secciones bien definidas

En lugar de navegar entre varias páginas (/about, /projects, /contact)
el usuario permanece siempre en la misma URL y se desplaza (scroll) hacia la sección que le interesa

```
┌─────────────────────────────┐
│ Header / Navegación         │
├─────────────────────────────┤
│ Hero                        │
├─────────────────────────────┤
│ Sobre mí                    │
├─────────────────────────────┤
│ Habilidades                 │
├─────────────────────────────┤
│ Proyectos                   │
├─────────────────────────────┤
│ Experiencia                 │
├─────────────────────────────┤
│ Contacto                    │
├─────────────────────────────┤
│ Footer                      │
└─────────────────────────────┘
```

El usuario simplemente baja por la página.


1. Definir el recorrido del usuario

Pregunta:
¿Qué quiero que vea primero y qué después?

Recorrido

```
Conocerme
     ↓
Entender qué hago
     ↓
Ver mis trabajos
     ↓
Confiar en mi experiencia
     ↓
Contactarme
```

Cuenta una historia, no es un orden


2. Definir las secciones

Cada sección tiene una responsabilidad clara.

```
Hero
↓
Sobre mí
↓
Habilidades
↓
Proyectos
↓
Experiencia
↓
Contacto
```

#### Cada una responde una pregunta distinta.

| Sección     | Responde              |
| ----------- | --------------------- |
| Hero        | ¿Quién sos?           |
| Sobre mí    | ¿Qué hacés?           |
| Habilidades | ¿Con qué trabajás?    |
| Proyectos   | ¿Qué construiste?     |
| Experiencia | ¿Qué recorrido tenés? |
| Contacto    | ¿Cómo te contacto?    |


3. Definir los puntos de navegación

El menú no cambia de página.
Simplemente lleva al usuario hasta una sección.

```
Inicio

Sobre mí

Proyectos

Contacto
```


4. Pensar cada sección como un módulo

#### Aunque el usuario vea una única página, internamente cada sección es independiente.

```
Landing

├── Hero
├── About
├── Skills
├── Projects
├── Experience
├── Contact
└── Footer
```

Hace que la aplicación sea fácil de mantener


5. Flujo de lectura

Una buena landing tiene un flujo natural.
No obliga al usuario a decidir constantemente "¿a dónde voy ahora?".
Simplemente continúa leyendo

```
Presentación
↓
Qué hago
↓
Cómo trabajo
↓
Qué hice
↓
Cómo contactarme
```

#### Es muy parecido a una conversación.


6. Definir qué se puede hacer

La navegación también define las acciones disponibles

ejemplo:

navegar entre secciones
abrir GitHub
abrir LinkedIn
descargar CV
abrir una demo
abrir un repositorio




# 5. Diseño como sistema, no como Views

Uno de los conceptos más importantes para construir una aplicación mantenible

#### Construir un sistema de piezas reutilizables

##### No diseñamos pantallas; diseñamos un conjunto de componentes que luego forman las pantallas.


Ej:

Tenes:

```
──────────────────────────────
Hero
──────────────────────────────

Sobre mí
──────────────────────────────

Proyectos
──────────────────────────────

Contacto
──────────────────────────────
```

##### En sistema de diseño, construir piezas escala mucho mejor:

"Necesito un conjunto de componentes reutilizables capaces de construir cualquier sección."


1. Definir componentes reutilizables

#### Antes de pensar en páginas completas, identificamos las piezas que se repiten.

```
Header
Section
Card
Button
Badge
Icon
Footer
```

##### Cada uno tiene una responsabilidad muy clara. Luego las secciones se construyen combinándolos.


2. Definir layouts

No todo es un componente. También existen estructuras

```
Página

└── Layout principal

        ├── Header
        ├── Main
        └── Footer
```

Dentro de una sección:

```
Section

├── Título
├── Descripción
└── Contenido
```

##### Ese patrón probablemente se repetirá muchas veces.



3. Definir patrones de composición

Piezas pequeñas se unen para formar piezas más grandes

```
Button
↓
ProjectCard
↓
ProjectsSection
↓
Landing
```

Cada nivel conoce únicamente a los componentes inmediatamente inferiores
Es una construcción gradual.


4. Consistencia visual

Si cada sección inventa su propio estilo, la aplicación pierde identidad.
En cambio, un sistema define reglas comunes.

todos los títulos iguales
mismos márgenes
mismo ancho máximo
mismo espaciado vertical
mismas sombras
mismos radios
mismos colores

No se trata de copiar CSS, sino de reutilizar decisiones de diseño.


5. Reutilizar comportamientos

##### No solo se reutiliza lo visual. También los comportamientos

botones
enlaces
tarjetas
listas
iconos
etiquetas

Todos deberían comportarse igual sin importar dónde aparezcan.


6. Separar estructura y contenido

Una sección debería definir la estructura.
El contenido llega desde afuera.

Ej:

```
ProjectCard
↓
recibe un proyecto
↓
lo muestra
```

No sabe de dónde viene.
No lo modifica.
Solo lo presenta.


7. Pensar en variaciones, no en duplicaciones

Un buen componente admite pequeñas variaciones.

```
Button
• Primario
• Secundario
• Outline
• Link
```

Sigue siendo el mismo componente.
No cuatro componentes distintos.

Lo mismo podría pasar con:

```
Section
• clara
• oscura
• destacada
```

La estructura permanece.
Solo cambia la apariencia.


8. Diseñar de lo general a lo específico

```
Tokens
↓
Componentes básicos
↓
Componentes compuestos
↓
Secciones
↓
Página completa
```

Si empezamos por la página, terminamos copiando código.


Pensar:

```
Necesito un sistema capaz de construir:

• Hero
• About
• Skills
• Projects
• Contact
```

Y descubrimos que todas esas secciones comparten muchas piezas.

```
Section
↓
Heading
↓
Container
↓
Button
↓
Card
```

Con muy pocos componentes reutilizables se puede construir casi toda la landing.




# 6. Diseño flujo de datos

#### JSON local abarcaría la idea de tener una fuente de contenido simple, predecible y fácil de mantener, sin backend al principio

#### En vez de escribir la información del porfolio directamente dentro de los componentes
##### la guardás en uno o varios archivos JSON.
Esos archivos funcionan como contenedor de datos.

##### La app lee ese contenido y lo presenta.


### Tipo de información: Contenido editable

Todo lo que es contenido editable y relativamente estable:

nombre
rol o título profesional
bio corta
descripción larga
links sociales
proyectos
experiencia
educación
habilidades
herramientas
disponibilidad o contacto

JSON represente lo que sos y lo que mostrás, no cómo se ve.


1. Fuente de verdad

El JSON pasa a ser el lugar principal donde vive el contenido.
Eso significa que si querés actualizar un proyecto, cambiar tu bio o agregar una red social, lo hacés en un solo lugar.


2. Estructura estable

El contenido necesita una forma clara y consistente

cada proyecto debería tener siempre los mismos campos conceptuales:

```
título
resumen
tecnologías
enlaces
estado
imagen o referencia visual
```

Eso hace que la UI pueda renderizar sin adivinar.


3. Separación entre contenido y UI

El JSON no sabe nada de:

```
colores
tipografía
tamaños
layout
animaciones

```
Solo sabe de datos
La UI decide cómo mostrarlos.


4. Mantenibilidad

Con JSON local, actualizar el porfolio es más fácil:

agregás un proyecto
corregís una descripción
cambiás un link
reordenás secciones

sin tocar la lógica visual 


5. Evolución futura

Hoy el contenido vive localmente.
Mañana podría venir de:

API
CMS
base de datos
Markdown
GraphQL

Si diseñás bien el flujo, cambiar la fuente después no rompe la app


6. Versionado y control

Al estar en archivos del proyecto:

se versiona con Git
se revisan cambios fácilmente
se puede ver el historial
se puede trabajar de forma colaborativa

Eso es muy útil para un porfolio personal



# Código

## 1. Dominio: Profile, Project, Experience, Skill, SocialLink, Contact
Todavía no importa de dónde vienen esos datos.
Solo importa definir qué es un proyecto, qué es una habilidad, etc.


## 2. Application
Una vez existen las entidades, definimos los casos de uso.

```
Obtener perfil

Obtener proyectos

Obtener experiencia

Obtener habilidades
```

Todavía sin pensar en Angular.


## 3. Infrastructure

Primera fuente de datos:
JSON local

Aparece el contenido


## 4. Presentation

Empezamos con Angular

Creamos:

Layout
Hero
Projects
Contact
etc.


## Entidad más importante: raíz del contenido

Ej: Profile

Prácticamente toda la landing depende de ella.

Desde Profile obtenemos:

nombre
profesión
descripción
ubicación (si querés mostrarla)
disponibilidad
foto
redes
contacto

Es la raíz del contenido


## Guía de desarrollo

1. Entidades del dominio (Profile, Project, Experience, Skill, SocialLink, Contact).
2. Contratos (puertos) para acceder al contenido.
3. JSON local que implementa esos contratos.
4. Casos de uso de la aplicación.
5. Primera pantalla (Layout + Hero) consumiendo esos casos de uso.


# 1. Código Dominio


## 1. Entidad Profile

modelo principal del porfolio: profile

```
// src/app/domain/profile.entity.ts

export type SocialPlatform =
  | 'github'
  | 'linkedin'
  | 'x'
  | 'instagram'
  | 'youtube'
  | 'website'
  | 'email';

export interface SocialLink {
  readonly platform: SocialPlatform;
  readonly label: string;
  readonly url: string;
}

export interface ContactInfo {
  readonly email?: string;
  readonly location?: string;
  readonly availableForWork?: boolean;
}

export interface Profile {
  readonly fullName: string;
  readonly role: string;
  readonly headline: string;
  readonly summary: string;
  readonly avatarUrl?: string;
  readonly contact: ContactInfo;
  readonly socialLinks: readonly SocialLink[];
}
```

Esto ya nos da una base clara:

Profile representa quién sos.
ContactInfo agrupa lo que cambia poco y se consulta mucho.
SocialLink normaliza todos los enlaces externos



## 2. Project

responde preguntas como:

¿Qué construiste?
¿Qué problema resuelve?
¿Con qué tecnologías?
¿Dónde puedo verlo?


Project representa un proyecto del porfolio, sin importar cómo se muestre.

```
// src/app/domain/project.entity.ts

export interface ProjectLink {
  readonly label: string;
  readonly url: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly imageUrl?: string;
  readonly technologies: readonly string[];
  readonly repository?: ProjectLink;
  readonly demo?: ProjectLink;
  readonly featured: boolean;
}
```

#### id: Cada proyecto debe poder identificarse de forma única.
##### Más adelante servirá para: listas, navegación, detalles, tests

title:
Nombre del proyecto

description:
Una explicación breve.
No es un tutorial.
No es documentación.
Es un resumen para el visitante

imageUrl
La captura del proyecto.
Es opcional porque algunos proyectos pueden no tener imagen.

technologies:
Lista de tecnologías utilizadas.
Ejemplo conceptual:
TypeScript
Tailwind
Node.js

No son objetos porque, para un MVP, un nombre es suficiente.
Si algún día quisieras mostrar íconos, categorías o niveles, el dominio podría evolucionar sin romper el resto de la aplicación

repository:
Enlace al repositorio.
Es opcional.
No todos los proyectos tienen código público

demo:
Enlace a una versión desplegada.
También es opcional

featured
Indica si el proyecto debe destacarse.
Esto permite, por ejemplo

mostrar primero los proyectos destacados;
tener una sección "Proyectos principales";
reutilizar la misma entidad sin duplicar datos

La entidad no decide cómo se destaca; solo indica que lo está.


### Más campos:

Podríamos agregar:

fecha
cliente
estado
categoría
duración
capturas múltiples
videos
documentación
licencia



## 3. Skill

Las habilidades aparecen en casi todos los porfolios y son una entidad simple e independiente
tanto el Hero como la sección de Skills o incluso las Project Cards pueden reutilizar ese mismo concepto

representa una habilidad o tecnología que querés mostrar en el porfolio.

```
// src/app/domain/skill.entity.ts

export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly category?: string;
  readonly level?: 'basic' | 'intermediate' | 'advanced';
  readonly featured: boolean;
}
```

id: identifica la habilidad de forma única.
name: el nombre visible, por ejemplo Angular, TypeScript, Tailwind.
category: opcional, para agruparlas después si hace falta.
level: opcional, solo si realmente querés mostrar una idea de dominio.
featured: permite destacar algunas habilidades sin crear otra estructura

Con esta entidad podés luego:

listar habilidades en una sección propia,
reutilizarlas en el Hero o About,
priorizar algunas como destacadas,
mantener el dominio limpio y estable



## 4. Experience

```
// src/app/domain/experience.entity.ts

export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly startDate: string;
  readonly endDate?: string;
  readonly summary: string;
  readonly achievements?: readonly string[];
  readonly featured: boolean;
}
```

id: identifica cada experiencia de manera única.
company: nombre de la empresa, estudio o proyecto.
role: cargo o rol desempeñado.
startDate: fecha de inicio.
endDate: opcional, porque puede ser una experiencia actual.
summary: descripción breve del trabajo realizado.
achievements: opcional, para destacar logros concretos.
featured: permite resaltar experiencias importantes

podés mostrar:

experiencia laboral,
prácticas,
colaboración freelance,
trabajo en proyectos relevantes,
o incluso estudios si más adelante querés ampliarlo



## 5. Contactos

Pequeña mejora respecto a la primera entidad que definimos.

En Profile habíamos incluido un ContactInfo
Después de avanzar con el dominio, vemos que el contacto tiene identidad propia y merece ser una entidad independiente

Es una evolución normal del modelo.

```
// src/app/domain/contact.entity.ts

export interface Contact {
  readonly email: string;
  readonly location?: string;
  readonly availableForWork: boolean;
  readonly timezone?: string;
}
```

email
Es el principal medio de contacto.
Lo haría obligatorio porque, para un porfolio, siempre debería existir al menos una forma directa de comunicarse

location
Es opcional.
No todos quieren mostrar su ciudad o país.
Además, si en el futuro trabajás completamente remoto, podría no ser relevante.

availableForWork
Permite comunicar rápidamente tu disponibilidad


timezone

También opcional.
Puede ser útil si trabajás con equipos internacionales.
No es indispensable para el MVP, pero es un dato del dominio, no de la presentación


### Separar Contact de Profile:

#### Representan responsabilidades distintas

Profile responde:
¿Quién sos?
¿Qué hacés?

Contact responde:
¿Cómo pueden comunicarse con vos?

Eso mantiene el dominio más modular y evita que Profile crezca demasiado.


### Cambio en Profile:

##### En lugar de contener un ContactInfo, pasaría a referenciar un Contact.

```
Profile
↓
Contact
```
Es una composición más limpia y facilita la evolución de ambas entidades de forma independiente.



## 6. Education

```
// src/app/domain/education.entity.ts

export interface Education {
  readonly id: string;
  readonly institution: string;
  readonly degree: string;
  readonly startDate: string;
  readonly endDate?: string;
  readonly summary?: string;
  readonly featured: boolean;
}
```

id: identifica cada estudio de forma única.
institution: universidad, instituto, academia o entidad formativa.
degree: título, carrera, curso o programa realizado.
startDate: fecha de inicio.
endDate: opcional, porque puede estar en curso.
summary: opcional, para resumir enfoque o contenido.
featured: permite destacar una formación importante

podés mostrar:
formación académica,
cursos relevantes,
certificaciones,
bootcamps,
estudios en curso.


### No mezclarla con Experience

Porque no significan lo mismo.

Experience habla de trabajo, práctica o trayectoria profesional.
Education habla de formación y aprendizaje



# 7. SocialLink

```
// src/app/domain/social-link.entity.ts
export type SocialPlatform = | 'github' | 'linkedin' | 'x' | 'instagram' | 'youtube' | 'website' | 'email';
export interface SocialLink { readonly platform: SocialPlatform; readonly label: string; readonly url: string; }

```

platform: identifica el tipo de red o enlace.
label: texto visible para la UI.
url: destino real del enlace.

podés representar:

GitHub
LinkedIn
X / Twitter
sitio web personal
YouTube
email como enlace
cualquier otro enlace externo relevante


### Separarlo de Profile

Un perfil puede tener muchos enlaces externos
esos enlaces tienen una estructura propia.

Profile describe a la persona.
SocialLink describe cada punto de contacto externo


# 8. Section: no dominio

#### Una sección no representa un concepto del negocio.

ejemplo, estas sí son entidades del dominio:
Profile
Project
Experience
Education

Porque existen independientemente de la aplicación


En cambio:

Hero
About
Skills
Projects
Contact

son una forma de organizar la información para presentarla

Eso pertenece a la capa de Presentación, no al Dominio.


#### Es un modelo de la UI.
##### Su responsabilidad es representar una sección de la landing

```
// src/app/presentation/models/section.model.ts

export type SectionId =
  | 'hero'
  | 'about'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'education'
  | 'contact';

export interface Section {
  readonly id: SectionId;
  readonly title: string;
  readonly visible: boolean;
}
```

En Presentation:

responde preguntas como:
¿Qué secciones tiene la landing?
¿En qué orden aparecen?
¿Cuál es el título?
¿Está visible?

##### Describe cómo la aplicación organiza el contenido.
no describe tu perfil profesional.


### No debería tener: proyectos, experiencia, habilidades, lógica de negocio


##### Responsabilidad: muchas partes de la UI la necesitan

```
Header
↓
obtiene las secciones
↓
crea el menú
```

o

```
Landing
↓
recorre las secciones
↓
renderiza cada una
```


##### El contenido sigue viviendo en las entidades del dominio

Ej:

```
Projects Section
↓
lee
↓
Project[]
```

sección no contiene los proyectos.
Solo representa el bloque visual donde se mostrarán.


Rs:

Domain

├── Profile
├── Project
├── Skill
├── Experience
├── Education
├── Contact
└── SocialLink

Presentation

└── Section



# 2. Capa de aplicación

## Puerto/contrato: responde a: Cómo obtiene la aplicación toda la información del porfolio

##### Ese contrato desacoplará la aplicación de la fuente de datos
Hoy podrá implementarse con un JSON local
mañana, con una API o un CMS, sin modificar el resto de la aplicación


## 1. Puerto/contrato: forma abstracta

##### forma abstracta de pedirle al sistema el contenido completo del porfolio sin saber todavía si viene de JSON, API o CMS.

```
// src/app/application/ports/portfolio-content.port.ts

import { Profile } from '../../domain/profile.entity';
import { Project } from '../../domain/project.entity';
import { Skill } from '../../domain/skill.entity';
import { Experience } from '../../domain/experience.entity';
import { Education } from '../../domain/education.entity';
import { SocialLink } from '../../domain/social-link.entity';
import { Contact } from '../../domain/contact.entity';

export interface PortfolioContent {
  readonly profile: Profile;
  readonly projects: readonly Project[];
  readonly skills: readonly Skill[];
  readonly experiences: readonly Experience[];
  readonly education: readonly Education[];
  readonly socialLinks: readonly SocialLink[];
  readonly contact: Contact;
}

export interface PortfolioContentPort {
  getPortfolioContent(): Promise<PortfolioContent>;
}
```

1. `PortfolioContent`:

#### Es el contenedor lógico de todo el material del porfolio.

No es una pantalla.
No es una card.
No es una sección visual

##### Es el conjunto de datos que la app necesita para renderizar la landing.


2. `PortfolioContentPort`:

##### Es el contrato que define cómo la aplicación obtiene ese contenido.

La capa Application no sabe:

si el contenido está en un JSON local,
si viene de una API,
si sale de un CMS.

Solo sabe que existe una forma de pedirlo.


##### portfolio-content.port: Conecta el dominio con el resto del sistema sin acoplarte a una fuente concreta de datos

Más adelante, la infraestructura podrá implementar este contrato con:
JSON local,
HTTP,
local storage,
un CMS.

Y la UI podrá consumirlo sin cambiar la lógica central.


## 2. Caso de uso para el contrato

El caso de uso que consume ese contrato
##### Entrega el contenido a la capa de presentación


GetPortfolioContentUseCase:

```
// src/app/application/use-cases/get-portfolio-content.use-case.ts

import {
  PortfolioContent,
  PortfolioContentPort,
} from '../ports/portfolio-content.port';

export class GetPortfolioContentUseCase {
  constructor(private readonly portfolioContentPort: PortfolioContentPort) {}

  execute(): Promise<PortfolioContent> {
    return this.portfolioContentPort.getPortfolioContent();
  }
}
```


#### 1. Orquestar el acceso al contenido

El caso de uso no sabe de JSON, HTTP ni archivos.
##### Solo coordina la obtención del contenido a través del puerto


#### 2. Mantener la lógica de aplicación separada

Si después necesitás:

ordenar proyectos destacados,
filtrar contenido visible,
combinar datos,
preparar secciones,

eso también viviría en esta capa, no en la UI.


#### 3. Proteger el dominio y la presentación

#### La presentación no llama directo a la infraestructura.
##### Pasa por el caso de uso, manteniendo el flujo limpio

`Presentation → Application → Infrastructure → back with data`


El caso de uso todavía no necesita hacer transformación compleja:
pedir el contenido y devolverlo.



# 3. Capa de Infraestructura

Implementación concreta del puerto con JSON local
Aparecerá el contenido real del porfolio.


## 1. JSON local

##### Fuente de contenido local
Antes de pensar en cómo Angular lo carga

### Definimos qué JSON va a vivir en el proyecto.

El contenido local:

```
// src/assets/content/portfolio-content.json
{
  "profile": {
    "fullName": "Tu Nombre",
    "role": "Frontend Developer",
    "headline": "Construyo interfaces simples, claras y mantenibles.",
    "summary": "Desarrollo porfolios, apps web y componentes con foco en calidad, escalabilidad y buena experiencia de usuario.",
    "avatarUrl": "/assets/images/avatar.jpg",
    "contact": {
      "email": "tuemail@correo.com",
      "location": "Argentina",
      "availableForWork": true,
      "timezone": "America/Argentina/Buenos_Aires"
    }
  },
  "projects": [
    {
      "id": "project-1",
      "title": "Todo App",
      "description": "Aplicación para gestionar tareas con arquitectura limpia y componentes reutilizables.",
      "imageUrl": "/assets/images/projects/todo-app.png",
      "technologies": ["Angular", "TypeScript", "Tailwind"],
      "repository": {
        "label": "GitHub",
        "url": "https://github.com/tuusuario/todo-app"
      },
      "demo": {
        "label": "Demo",
        "url": "https://tu-demo.com"
      },
      "featured": true
    }
  ],
  "skills": [
    {
      "id": "skill-angular",
      "name": "Angular",
      "category": "Frontend",
      "level": "advanced",
      "featured": true
    }
  ],
  "experiences": [
    {
      "id": "exp-1",
      "company": "Empresa X",
      "role": "Frontend Developer",
      "startDate": "2024-01",
      "endDate": null,
      "summary": "Desarrollo de interfaces y componentes reutilizables.",
      "achievements": [
        "Mejoré la mantenibilidad del sistema de UI",
        "Reduje duplicación de código"
      ],
      "featured": true
    }
  ],
  "education": [
    {
      "id": "edu-1",
      "institution": "Instituto / Universidad",
      "degree": "Carrera o curso",
      "startDate": "2022-01",
      "endDate": "2023-12",
      "summary": "Formación orientada a desarrollo web.",
      "featured": false
    }
  ],
  "socialLinks": [
    {
      "platform": "github",
      "label": "GitHub",
      "url": "https://github.com/tuusuario"
    },
    {
      "platform": "linkedin",
      "label": "LinkedIn",
      "url": "https://linkedin.com/in/tuusuario"
    }
  ],
  "contact": {
    "email": "tuemail@correo.com",
    "location": "Argentina",
    "availableForWork": true,
    "timezone": "America/Argentina/Buenos_Aires"
  }
}
```

1. Fuente de verdad local
Este archivo contiene el contenido real del porfolio en una forma fácil de leer y editar.


2. Contrato de contenido estable
##### La estructura del JSON refleja lo que la app espera encontrar:

profile
projects
skills
experiences
education
socialLinks
contact


3. Separación entre contenido y UI

no hay:

estilos
layout
componentes
logica visual


4. Facilidad de mantenimiento
Cambiar texto, links o proyectos será tan simple como editar este archivo.


### Repetir info/data/content

#### el JSON repite contact dentro de profile y también como objeto raíz
convendría simplificarlo para no duplicar datos.
lo más sano sería elegir una sola fuente para contacto y usarla desde ahí.

La opción más limpia sería:

profile para identidad y presentación
contact como bloque separado

Y que Profile no repita el contacto completo.



## 2. Adaptador de infraestructura: implementación del contrato/caso de uso

1. lee este JSON,
2. lo transforma si hace falta,
3. y devuelve un `PortfolioContent` al caso de uso

##### uno de los puntos donde Clean Architecture realmente empieza a cobrar sentido

Ahora tenemos:

```
Presentation
        │
        ▼
Application
        │
        ▼
PortfolioContentPort
```

Pero todavía nadie implementa ese contrato.


### 1. JsonPortfolioContentAdapter: Responsabilidad: "Obtener el contenido desde un JSON local e implementar el contrato definido por Application."

```
// src/app/infrastructure/adapters/json-portfolio-content.adapter.ts

import { Injectable } from '@angular/core';

import {
  PortfolioContent,
  PortfolioContentPort,
} from '../../application/ports/portfolio-content.port';

@Injectable({
  providedIn: 'root',
})
export class JsonPortfolioContentAdapter
  implements PortfolioContentPort
{
  async getPortfolioContent(): Promise<PortfolioContent> {
    throw new Error('Not implemented.');
  }
}
```

### Vacía
seguimos el mismo principio que usamos con el dominio

Primero definimos la estructura. Después agregamos comportamiento

Así verificamos que:

el contrato está bien diseñado;
el nombre de la clase es correcto;
la responsabilidad está clara;
la dependencia apunta en la dirección correcta

Todo eso antes de escribir una sola línea de acceso a datos.


### Adaptador

##### En Clean Architecture un adaptador tiene la responsabilidad de conectar dos mundos.

```
Application

↓
PortfolioContentPort
↓
JsonPortfolioContentAdapter
↓
portfolio-content.json
```

La capa de Application nunca conoce el JSON.
Solo conoce el puerto.


### Sin HttpClient directo

##### Porque entonces el caso de uso dependería de Angular.
Buscamos exactamente lo contrario.

Queremos que el caso de uso solo conozca esto:
`PortfolioContentPort`


### Podría conocer

conocer perfectamente:

Angular
HttpClient
JSON
assets
fetch
APIs

Porque pertenece a Infraestructura.


### No debería conocer

cómo renderizar un Hero;
qué componente usa los datos;
cómo funciona el Layout.

Eso pertenece a Presentation.


#### Rs Arquitectura: dirección de las dependencias:

```
Presentation
↓
Application
↓
PortfolioContentPort
↑
Infrastructure
(JsonPortfolioContentAdapter)
```

##### La infraestructura depende del puerto, no al revés: uno de los principios fundamentales de Clean Architecture



## 3. Inyección de HttpClient: comportamiento real de infra

Primer comportamiento real de Infraestructura
#### inyectar HttpClient dentro del adaptador
##### Todavía no leeremos el JSON.
##### Solo prepararemos el adaptador para poder acceder a una fuente de datos
mantiene la evolución del proyecto ordenada y fácil de revisar

Objetivo: Preparar el adaptador para poder leer HttpClient

```
// src/app/infrastructure/adapters/json-portfolio-content.adapter.ts

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  PortfolioContent,
  PortfolioContentPort,
} from '../../application/ports/portfolio-content.port';

@Injectable({
  providedIn: 'root',
})
export class JsonPortfolioContentAdapter implements PortfolioContentPort {
  private readonly http = inject(HttpClient);

  async getPortfolioContent(): Promise<PortfolioContent> {
    throw new Error('Not implemented.');
  }
}
```


1. Preparar el acceso al archivo
HttpClient será el mecanismo para leer el JSON local desde assets.

2. Mantener el adaptador como única puerta de entrada
El caso de uso sigue sin saber nada de Angular ni de archivos.

Solo verá este contrato: `PortfolioContentPort`

3. Dejar lista la conexión infraestructura → datos
Ya no estamos solo declarando una clase vacía.
Ahora el adaptador tiene la capacidad técnica de leer contenido.



## 4. Usar HttpClient para obtener el JSON

Devolverlo como `PortfolioContent`
Ahí empezará a existir el flujo real de datos dentro de la infraestructura.

##### el adaptador lea realmente el JSON y lo devuelva como PortfolioContent

```
// src/app/infrastructure/adapters/json-portfolio-content.adapter.ts

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import {
  PortfolioContent,
  PortfolioContentPort,
} from '../../application/ports/portfolio-content.port';

@Injectable({
  providedIn: 'root',
})
export class JsonPortfolioContentAdapter implements PortfolioContentPort {
  private readonly http = inject(HttpClient);

  getPortfolioContent(): Promise<PortfolioContent> {
    return firstValueFrom(
      this.http.get<PortfolioContent>('assets/content/portfolio-content.json')
    );
  }
}
```

Lee el archivo local desde assets.
Usa HttpClient, que es parte de infraestructura.
Devuelve exactamente el contrato que espera la capa de Application.
Mantiene fuera de la UI cualquier detalle de carga de datos



## 5. Habilitar HttpClient

Hasta ahora, el adaptador depende de HttpClient
pero Angular todavía no sabe cómo proporcionarlo.

##### Consiste únicamente en registrar el proveedor

En Angular moderno (standalone), HttpClient se habilita mediante provideHttpClient().

app.config.ts, quedaría así:

```
// src/app/app.config.ts

import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
  ],
};
```

Le dice al sistema de inyección de dependencias de Angular cómo crear un HttpClient.

Nada más.
No carga datos.
No lee el JSON.
No conoce el porfolio.


El adaptador ya tiene:

```
@Injectable({
  providedIn: 'root',
})
```

significa que Angular ya sabe cómo crearlo.


##### Lo único que todavía no sabía era cómo construir su dependencia:

```
JsonPortfolioContentAdapter
↓
HttpClient
```

Ahora sí puede hacerlo.


Flujo:

```
Presentation
↓
GetPortfolioContentUseCase
↓
PortfolioContentPort
↓
JsonPortfolioContentAdapter
↓
HttpClient
↓
portfolio-content.json
```

Todavía no hay componentes Angular consumiendo esto.
Pero toda la infraestructura ya está preparada.



### Devolver directamente JSON

La implementación actual hace esto:

```
JSON
↓
PortfolioContent
```

Pero en Clean Architecture normalmente aparece una pieza intermedia:

```
JSON
↓
DTO
↓
Mapper
↓
Domain
↓
Application
```

Dado que JSON es un formato externo
Y el dominio no debería depender de cómo esté escrito un archivo.

Para un MVP, podríamos devolver el JSON directamente, como hicimos.

Pero si queremos una arquitectura realmente limpia y preparada para crecer
el siguiente paso no sería crear un componente

sino introducir un DTO (PortfolioContentDto)
después, un mapper (PortfolioContentMapper).

Ese pequeño desacople hace que, si mañana cambia la estructura del JSON o la respuesta de una API, solo cambie la infraestructura



## 6. DTO

#### El DTO es la forma “cruda” de los datos tal como llegan desde el JSON.
##### No representa todavía cómo la app lo`s usa internamente; solo refleja el formato externo.

`PortfolioContentDto`:

```
// src/app/infrastructure/dtos/portfolio-content.dto.ts

export type SocialPlatformDto =
  | 'github'
  | 'linkedin'
  | 'x'
  | 'instagram'
  | 'youtube'
  | 'website'
  | 'email';

export interface SocialLinkDto {
  readonly platform: SocialPlatformDto;
  readonly label: string;
  readonly url: string;
}

export interface ContactDto {
  readonly email: string;
  readonly location?: string;
  readonly availableForWork: boolean;
  readonly timezone?: string;
}

export interface ProfileDto {
  readonly fullName: string;
  readonly role: string;
  readonly headline: string;
  readonly summary: string;
  readonly avatarUrl?: string;
  readonly contact: ContactDto;
}

export interface ProjectLinkDto {
  readonly label: string;
  readonly url: string;
}

export interface ProjectDto {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly imageUrl?: string;
  readonly technologies: readonly string[];
  readonly repository?: ProjectLinkDto;
  readonly demo?: ProjectLinkDto;
  readonly featured: boolean;
}

export interface SkillDto {
  readonly id: string;
  readonly name: string;
  readonly category?: string;
  readonly level?: 'basic' | 'intermediate' | 'advanced';
  readonly featured: boolean;
}

export interface ExperienceDto {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly startDate: string;
  readonly endDate?: string | null;
  readonly summary: string;
  readonly achievements?: readonly string[];
  readonly featured: boolean;
}

export interface EducationDto {
  readonly id: string;
  readonly institution: string;
  readonly degree: string;
  readonly startDate: string;
  readonly endDate?: string | null;
  readonly summary?: string;
  readonly featured: boolean;
}

export interface PortfolioContentDto {
  readonly profile: ProfileDto;
  readonly projects: readonly ProjectDto[];
  readonly skills: readonly SkillDto[];
  readonly experiences: readonly ExperienceDto[];
  readonly education: readonly EducationDto[];
  readonly socialLinks: readonly SocialLinkDto[];
  readonly contact: ContactDto;
}
```

Refleja el JSON sin interpretación.
Separa el formato externo del modelo interno.
Nos prepara para el mapper, que será la siguiente pieza.


### Beneficios

##### si mañana cambia el JSON: no tocamos el dominio, no tocamos Application, solo ajustamos DTO + mapper.



## 7. Mapper

Convertirá PortfolioContentDto en PortfolioContent.

Al tener:

```
JSON
    ↓
PortfolioContentDto
```

Pero el resto de la aplicación trabaja con:

```
PortfolioContent
```

##### Necesitamos una pieza que traduzca un mundo al otro.
Esa pieza es el mapper.


### Responsabilidad: Convertir un DTO en un modelo que entiende la aplicación.

Nada más.
No lee archivos.
No llama APIs.
No conoce Angular.
No renderiza componentes.
Solo transforma datos


1. Antes de implementar toda la conversión, comenzaría creando la estructura.

```
// src/app/infrastructure/mappers/portfolio-content.mapper.ts

import { PortfolioContent } from '../../application/ports/portfolio-content.port';
import { PortfolioContentDto } from '../dtos/portfolio-content.dto';

export class PortfolioContentMapper {
  static toDomain(dto: PortfolioContentDto): PortfolioContent {
    throw new Error('Not implemented.');
  }
}
```

Así:

Primero verificamos:

el nombre
la responsabilidad
las dependencias
la ubicación


### clase estática Porque el mapper: no tiene estado; no necesita inyección de dependencias; no mantiene información entre llamadas

#### Siempre hace: DTO -> domain. Es una transformación pura.


### No debería:

leer el JSON;
usar HttpClient;
conocer Angular;
acceder a servicios.


### Transformación real

no implementaría todo PortfolioContent de una vez.
Empezaría únicamente por el objeto más pequeño y aislado:

```
ContactDto
↓
Contact
```

Cuando esa conversión esté lista y validada, continuaremos con:

SocialLinkDto → SocialLink
ProfileDto → Profile
ProjectDto → Project

y así sucesivamente, construyendo el mapper de forma incremental y fácil de revisar
Ese orden reduce la probabilidad de errores y mantiene cada pieza con una única responsabilidad



## 8. Primera conversion del mapper: Contact

```
// src/app/infrastructure/mappers/portfolio-content.mapper.ts

import { Contact } from '../../domain/contact.entity';
import { PortfolioContent } from '../../application/ports/portfolio-content.port';
import { PortfolioContentDto } from '../dtos/portfolio-content.dto';

export class PortfolioContentMapper {
  static toDomain(dto: PortfolioContentDto): PortfolioContent {
    throw new Error('Not implemented.');
  }

  static contact(dto: PortfolioContentDto['contact']): Contact {
    return {
      email: dto.email,
      location: dto.location,
      availableForWork: dto.availableForWork,
      timezone: dto.timezone,
    };
  }
}
```

Convierte el contacto del DTO al modelo de dominio.
Mantiene la traducción aislada.
Nos deja avanzar después con el resto de entidades sin mezclar todo.


una de las piezas más simples:

no tiene relaciones complejas,
no necesita transformar listas,
no depende de otras entidades

Eso la hace ideal para validar que el patrón del mapper está bien.



## 8. SocialLink Mapper DTO

```
// src/app/infrastructure/mappers/portfolio-content.mapper.ts

import { Contact } from '../../domain/contact.entity';
import { SocialLink } from '../../domain/social-link.entity';

import { PortfolioContent } from '../../application/ports/portfolio-content.port';
import { PortfolioContentDto } from '../dtos/portfolio-content.dto';

export class PortfolioContentMapper {
  static toDomain(dto: PortfolioContentDto): PortfolioContent {
    throw new Error('Not implemented.');
  }

  private static contact(dto: PortfolioContentDto['contact']): Contact {
    return {
      email: dto.email,
      location: dto.location,
      availableForWork: dto.availableForWork,
      timezone: dto.timezone,
    };
  }

  private static socialLink(
    dto: PortfolioContentDto['socialLinks'][number],
  ): SocialLink {
    return {
      platform: dto.platform,
      label: dto.label,
      url: dto.url,
    };
  }
}
```

SocialLinkDto
↓
SocialLink

Su responsabilidad es únicamente convertir un enlace social.


### Detalle de diseño

ambos métodos a:

`private static`

#### Estos métodos son una implementación interna del mapper.
##### Nadie fuera de PortfolioContentMapper debería hacer esto:

`PortfolioContentMapper.socialLink(...)`

##### La única operación pública debería ser:

`PortfolioContentMapper.toDomain(...)`

##### Así el mapper expone una sola API pública y mantiene encapsulados los pasos internos de la conversión.


### Mapear un único elemento

mapear un único elemento
##### Cuando llegue el momento de convertir el porfolio completo, simplemente haremos conceptualmente:

```
socialLinks DTO
↓
map()
↓
socialLink()
↓
SocialLink[]
```

Es decir, primero sabemos convertir uno.
Luego convertir muchos es simplemente repetir esa operación.


### Estado del mapper

```
PortfolioContentMapper

├── toDomain()            🚧
├── contact()             ✅
└── socialLink()          ✅
```

##### !!! Todavía no implementamos toDomain() porque seguimos construyendo las piezas pequeñas primero.



## 9. Profile dto mapper

ProfileDto → Profile
Profile contiene un Contact

##### nos permitirá reutilizar inmediatamente el método contact(),
demostrando uno de los beneficios de construir el mapper de forma incremental y con pequeñas responsabilidades

Como Profile ya depende de Contact
esta conversión nos permite reutilizar el mapper de contacto y seguir manteniendo el flujo limpio.

```
// src/app/infrastructure/mappers/portfolio-content.mapper.ts

import { Contact } from '../../domain/contact.entity';
import { Profile } from '../../domain/profile.entity';
import { SocialLink } from '../../domain/social-link.entity';

import { PortfolioContent } from '../../application/ports/portfolio-content.port';
import { PortfolioContentDto } from '../dtos/portfolio-content.dto';

export class PortfolioContentMapper {
  static toDomain(dto: PortfolioContentDto): PortfolioContent {
    throw new Error('Not implemented.');
  }

  private static contact(dto: PortfolioContentDto['contact']): Contact {
    return {
      email: dto.email,
      location: dto.location,
      availableForWork: dto.availableForWork,
      timezone: dto.timezone,
    };
  }

  private static socialLink(
    dto: PortfolioContentDto['socialLinks'][number],
  ): SocialLink {
    return {
      platform: dto.platform,
      label: dto.label,
      url: dto.url,
    };
  }

  private static profile(dto: PortfolioContentDto['profile']): Profile {
    return {
      fullName: dto.fullName,
      role: dto.role,
      headline: dto.headline,
      summary: dto.summary,
      avatarUrl: dto.avatarUrl,
      contact: this.contact(dto.contact),
    };
  }
}
```

Convierte la identidad principal del porfolio.
Reutiliza el mapper de contact.
Deja el perfil listo para que la UI lo consuma sin conocer el JSON


Profile suele ser la base del Hero y de la presentación general.
Si esta transformación está bien, el resto del flujo suele quedar más fácil de cerrar.



## 10. ProjectDTO mapper

Project contiene dos objetos (repository y demo)
tienen la misma estructura (label + url).

Siguiendo KISS y el principio DRY
conviene extraer primero un mapper pequeño para esos enlaces y luego reutilizarlo en Project

ProjectLinkDto → ProjectLink:

```
// src/app/infrastructure/mappers/portfolio-content.mapper.ts

import { Project, ProjectLink } from '../../domain/project.entity';

// ...

export class PortfolioContentMapper {
  // ...

  private static projectLink(
    dto: NonNullable<PortfolioContentDto['projects'][number]['repository']>,
  ): ProjectLink {
    return {
      label: dto.label,
      url: dto.url,
    };
  }
}
```

evita duplicar código.

#### Sin este método, terminaríamos escribiendo prácticamente lo mismo dos veces:
una para repository
otra para demo

ahora tendremos un único punto de conversión.

Una vez que existe projectLink(), el mapper de Project queda muy limpio.

```
ProjectDto
        │
        ├── repository ─────► projectLink()
        │
        ├── demo ───────────► projectLink()
        │
        ▼
      Project
```

seguimos exactamente la misma estrategia que usamos con Contact y Profile:

mapear primero las piezas más pequeñas;
luego construir las entidades más grandes reutilizando esos mappers.



## 11. ProjectDto → Project

```
// src/app/infrastructure/mappers/portfolio-content.mapper.ts

import { Contact } from '../../domain/contact.entity';
import { Profile } from '../../domain/profile.entity';
import { Project, ProjectLink } from '../../domain/project.entity';
import { SocialLink } from '../../domain/social-link.entity';

import { PortfolioContent } from '../../application/ports/portfolio-content.port';
import { PortfolioContentDto } from '../dtos/portfolio-content.dto';

export class PortfolioContentMapper {
  static toDomain(dto: PortfolioContentDto): PortfolioContent {
    throw new Error('Not implemented.');
  }

  private static contact(dto: PortfolioContentDto['contact']): Contact {
    return {
      email: dto.email,
      location: dto.location,
      availableForWork: dto.availableForWork,
      timezone: dto.timezone,
    };
  }

  private static socialLink(
    dto: PortfolioContentDto['socialLinks'][number],
  ): SocialLink {
    return {
      platform: dto.platform,
      label: dto.label,
      url: dto.url,
    };
  }

  private static profile(dto: PortfolioContentDto['profile']): Profile {
    return {
      fullName: dto.fullName,
      role: dto.role,
      headline: dto.headline,
      summary: dto.summary,
      avatarUrl: dto.avatarUrl,
      contact: this.contact(dto.contact),
    };
  }

  private static projectLink(
    dto: NonNullable<
      PortfolioContentDto['projects'][number]['repository']
    >,
  ): ProjectLink {
    return {
      label: dto.label,
      url: dto.url,
    };
  }

  private static project(dto: PortfolioContentDto['projects'][number]): Project {
    return {
      id: dto.id,
      title: dto.title,
      description: dto.description,
      imageUrl: dto.imageUrl,
      technologies: dto.technologies,
      repository: dto.repository ? this.projectLink(dto.repository) : undefined,
      demo: dto.demo ? this.projectLink(dto.demo) : undefined,
      featured: dto.featured,
    };
  }
}
```

Convierte un proyecto del JSON al modelo del dominio.
Reutiliza projectLink() para repository y demo.
Mantiene el mapper pequeño y claro

Project es una entidad más rica que Contact o Profile, pero sigue siendo fácil de mapear si primero resolvemos sus subpartes

Así evitamos duplicar lógica y mantenemos cada método con una única responsabilidad.



## 12. SkillDto

Skill no tiene objetos anidados ni relaciones con otras entidades
##### el mapper es prácticamente una copia controlada del DTO al dominio.

SkillDto → Skill

```
// src/app/infrastructure/mappers/portfolio-content.mapper.ts

import { Skill } from '../../domain/skill.entity';

// ...

export class PortfolioContentMapper {
  // ...

  private static skill(dto: PortfolioContentDto['skills'][number]): Skill {
    return {
      id: dto.id,
      name: dto.name,
      category: dto.category,
      level: dto.level,
      featured: dto.featured,
    };
  }
}
```

Su única responsabilidad es convertir una habilidad.

SkillDto
↓
Skill


## Responsabilidad del Mapper: El DTO y la entidad son iguales, hoy. Mañana podrían cambiar.

Por ejemplo, imaginá que el backend devuelve:

```
{
  "level": "ADVANCED"
}
```

Y tu dominio decide representar los niveles como:

```
'advanced'
```

##### El único lugar que cambiaría sería este mapper.

Ni el dominio.
Ni los casos de uso.
Ni los componentes Angular.
Ese es precisamente el beneficio del desacople


Rs mapper

```
PortfolioContentMapper

├── contact()      ✅
├── socialLink()   ✅
├── profile()      ✅
├── projectLink()  ✅
├── project()      ✅
├── skill()        ✅
└── toDomain()     🚧
```


## 12. ExperienceDto → Experience

#### Tiene una pequeña particularidad: el campo endDate puede venir como null desde el JSON
##### mientras que en nuestro dominio lo modelamos como opcional (string | undefined).

#### Será el primer mapper donde realmente transformaremos un dato, y es un buen ejemplo de por qué existe esta capa.

aparece una conversión con una pequeña transformación real
endDate puede venir como null en el DTO
##### en el dominio lo vamos a representar como undefined.

```
// src/app/infrastructure/mappers/portfolio-content.mapper.ts

import { Contact } from '../../domain/contact.entity';
import { Education } from '../../domain/education.entity';
import { Experience } from '../../domain/experience.entity';
import { Profile } from '../../domain/profile.entity';
import { Project, ProjectLink } from '../../domain/project.entity';
import { Skill } from '../../domain/skill.entity';
import { SocialLink } from '../../domain/social-link.entity';

import { PortfolioContent } from '../../application/ports/portfolio-content.port';
import { PortfolioContentDto } from '../dtos/portfolio-content.dto';

export class PortfolioContentMapper {
  static toDomain(dto: PortfolioContentDto): PortfolioContent {
    throw new Error('Not implemented.');
  }

  private static contact(dto: PortfolioContentDto['contact']): Contact {
    return {
      email: dto.email,
      location: dto.location,
      availableForWork: dto.availableForWork,
      timezone: dto.timezone,
    };
  }

  private static socialLink(
    dto: PortfolioContentDto['socialLinks'][number],
  ): SocialLink {
    return {
      platform: dto.platform,
      label: dto.label,
      url: dto.url,
    };
  }

  private static profile(dto: PortfolioContentDto['profile']): Profile {
    return {
      fullName: dto.fullName,
      role: dto.role,
      headline: dto.headline,
      summary: dto.summary,
      avatarUrl: dto.avatarUrl,
      contact: this.contact(dto.contact),
    };
  }

  private static projectLink(
    dto: NonNullable<PortfolioContentDto['projects'][number]['repository']>,
  ): ProjectLink {
    return {
      label: dto.label,
      url: dto.url,
    };
  }

  private static project(dto: PortfolioContentDto['projects'][number]): Project {
    return {
      id: dto.id,
      title: dto.title,
      description: dto.description,
      imageUrl: dto.imageUrl,
      technologies: dto.technologies,
      repository: dto.repository ? this.projectLink(dto.repository) : undefined,
      demo: dto.demo ? this.projectLink(dto.demo) : undefined,
      featured: dto.featured,
    };
  }

  private static skill(dto: PortfolioContentDto['skills'][number]): Skill {
    return {
      id: dto.id,
      name: dto.name,
      category: dto.category,
      level: dto.level,
      featured: dto.featured,
    };
  }

  private static experience(
    dto: PortfolioContentDto['experiences'][number],
  ): Experience {
    return {
      id: dto.id,
      company: dto.company,
      role: dto.role,
      startDate: dto.startDate,
      endDate: dto.endDate ?? undefined,
      summary: dto.summary,
      achievements: dto.achievements,
      featured: dto.featured,
    };
  }
}
```

Convierte una experiencia del JSON al modelo del dominio.
Traduce null a undefined en endDate.
Mantiene la entidad lista para ser consumida por la aplicación.

#### Este es el primer caso donde el mapper no solo copia campos, sino que adapta datos externos al lenguaje interno del dominio.

##### Eso confirma que el DTO y el dominio no son lo mismo, aunque se parezcan.



## 13. EducationDto

prácticamente el hermano de Experience
También tiene un endDate que puede venir como null
por lo que seguimos el mismo criterio para mantener consistente el dominio

```
// src/app/infrastructure/mappers/portfolio-content.mapper.ts

import { Education } from '../../domain/education.entity';

// ...

export class PortfolioContentMapper {
  // ...

  private static education(
    dto: PortfolioContentDto['education'][number],
  ): Education {
    return {
      id: dto.id,
      institution: dto.institution,
      degree: dto.degree,
      startDate: dto.startDate,
      endDate: dto.endDate ?? undefined,
      summary: dto.summary,
      featured: dto.featured,
    };
  }
}
```


### Patrón: tenemos varios métodos muy similares:

contact()
socialLink()
profile()
projectLink()
project()
skill()
experience()
education()

Todos cumplen exactamente el mismo principio:
##### Un método = una conversión.

Eso hace que el mapper sea extremadamente fácil de mantener.
##### Si mañana cambia Education, solamente modificaremos este método.


## 14. toDomain()

#### implementar toDomain(), que simplemente orquesta todos los métodos que ya existen.
orquesta todas las conversiones pequeñas que ya construimos.

```
// src/app/infrastructure/mappers/portfolio-content.mapper.ts

import { Contact } from '../../domain/contact.entity';
import { Education } from '../../domain/education.entity';
import { Experience } from '../../domain/experience.entity';
import { Profile } from '../../domain/profile.entity';
import { Project, ProjectLink } from '../../domain/project.entity';
import { Skill } from '../../domain/skill.entity';
import { SocialLink } from '../../domain/social-link.entity';

import { PortfolioContent } from '../../application/ports/portfolio-content.port';
import { PortfolioContentDto } from '../dtos/portfolio-content.dto';

export class PortfolioContentMapper {
  static toDomain(dto: PortfolioContentDto): PortfolioContent {
    return {
      profile: this.profile(dto.profile),
      projects: dto.projects.map((project) => this.project(project)),
      skills: dto.skills.map((skill) => this.skill(skill)),
      experiences: dto.experiences.map((experience) =>
        this.experience(experience),
      ),
      education: dto.education.map((education) => this.education(education)),
      socialLinks: dto.socialLinks.map((socialLink) =>
        this.socialLink(socialLink),
      ),
      contact: this.contact(dto.contact),
    };
  }

  private static contact(dto: PortfolioContentDto['contact']): Contact {
    return {
      email: dto.email,
      location: dto.location,
      availableForWork: dto.availableForWork,
      timezone: dto.timezone,
    };
  }

  private static socialLink(
    dto: PortfolioContentDto['socialLinks'][number],
  ): SocialLink {
    return {
      platform: dto.platform,
      label: dto.label,
      url: dto.url,
    };
  }

  private static profile(dto: PortfolioContentDto['profile']): Profile {
    return {
      fullName: dto.fullName,
      role: dto.role,
      headline: dto.headline,
      summary: dto.summary,
      avatarUrl: dto.avatarUrl,
      contact: this.contact(dto.contact),
    };
  }

  private static projectLink(
    dto: NonNullable<PortfolioContentDto['projects'][number]['repository']>,
  ): ProjectLink {
    return {
      label: dto.label,
      url: dto.url,
    };
  }

  private static project(dto: PortfolioContentDto['projects'][number]): Project {
    return {
      id: dto.id,
      title: dto.title,
      description: dto.description,
      imageUrl: dto.imageUrl,
      technologies: dto.technologies,
      repository: dto.repository ? this.projectLink(dto.repository) : undefined,
      demo: dto.demo ? this.projectLink(dto.demo) : undefined,
      featured: dto.featured,
    };
  }

  private static skill(dto: PortfolioContentDto['skills'][number]): Skill {
    return {
      id: dto.id,
      name: dto.name,
      category: dto.category,
      level: dto.level,
      featured: dto.featured,
    };
  }

  private static experience(
    dto: PortfolioContentDto['experiences'][number],
  ): Experience {
    return {
      id: dto.id,
      company: dto.company,
      role: dto.role,
      startDate: dto.startDate,
      endDate: dto.endDate ?? undefined,
      summary: dto.summary,
      achievements: dto.achievements,
      featured: dto.featured,
    };
  }

  private static education(
    dto: PortfolioContentDto['education'][number],
  ): Education {
    return {
      id: dto.id,
      institution: dto.institution,
      degree: dto.degree,
      startDate: dto.startDate,
      endDate: dto.endDate ?? undefined,
      summary: dto.summary,
      featured: dto.featured,
    };
  }
}
```


## 15. Volver al adaptador: JsonPortfolioContentAdapter

#### Hacer que use este mapper para devolver el contenido ya convertido.


hacer que el adaptador lea el DTO
y luego lo transforme con el mapper antes de devolver el contenido al caso de uso

`JsonPortfolioContentAdapter usando PortfolioContentMapper`

```
// src/app/infrastructure/adapters/json-portfolio-content.adapter.ts

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { PortfolioContentPort } from '../../application/ports/portfolio-content.port';
import { PortfolioContentDto } from '../dtos/portfolio-content.dto';
import { PortfolioContentMapper } from '../mappers/portfolio-content.mapper';

@Injectable({
  providedIn: 'root',
})
export class JsonPortfolioContentAdapter implements PortfolioContentPort {
  private readonly http = inject(HttpClient);

  async getPortfolioContent() {
    const dto = await firstValueFrom(
      this.http.get<PortfolioContentDto>('assets/content/portfolio-content.json'),
    );

    return PortfolioContentMapper.toDomain(dto);
  }
}
```

Lee el JSON como PortfolioContentDto.
Usa el mapper para convertir ese DTO al dominio.
Devuelve a Application un PortfolioContent limpio y estable.


#### Ahora el adaptador hace exactamente su trabajo: conoce la fuente externa, conoce el DTO, conoce el mapper, y entrega datos listos para la app


## 16. Tipado del contrato del port

muy explícito y sin ambigüedades
##### el port solo define qué necesita la Application, no cómo se consigue.

`PortfolioContentPort`:

```
// src/app/application/ports/portfolio-content.port.ts

import { Contact } from '../../domain/contact.entity';
import { Education } from '../../domain/education.entity';
import { Experience } from '../../domain/experience.entity';
import { Profile } from '../../domain/profile.entity';
import { Project } from '../../domain/project.entity';
import { Skill } from '../../domain/skill.entity';
import { SocialLink } from '../../domain/social-link.entity';

export interface PortfolioContent {
  readonly profile: Profile;
  readonly projects: readonly Project[];
  readonly skills: readonly Skill[];
  readonly experiences: readonly Experience[];
  readonly education: readonly Education[];
  readonly socialLinks: readonly SocialLink[];
  readonly contact: Contact;
}

export interface PortfolioContentPort {
  getPortfolioContent(): Promise<PortfolioContent>;
}
```

Revisa:

PortfolioContent vive en Application
usa tipos de Domain
no depende de Angular
no depende de infraestructura
no sabe si el contenido viene de JSON, API o CMS

Queda claro que el contrato devuelve exactamente el contenido ya preparado para la app

`Infrastructure → DTO → Mapper → PortfolioContentPort → Application`



## 17. Adaptador tipado 'Promise<PortfolioContent>'

```
// src/app/infrastructure/adapters/json-portfolio-content.adapter.ts

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import {
  PortfolioContent,
  PortfolioContentPort,
} from '../../application/ports/portfolio-content.port';
import { PortfolioContentDto } from '../dtos/portfolio-content.dto';
import { PortfolioContentMapper } from '../mappers/portfolio-content.mapper';

@Injectable({
  providedIn: 'root',
})
export class JsonPortfolioContentAdapter implements PortfolioContentPort {
  private readonly http = inject(HttpClient);

  async getPortfolioContent(): Promise<PortfolioContent> {
    const dto = await firstValueFrom(
      this.http.get<PortfolioContentDto>('assets/content/portfolio-content.json'),
    );

    return PortfolioContentMapper.toDomain(dto);
  }
}
```

Clave:

`async getPortfolioContent(): Promise<PortfolioContent>`

queda alineado con el port, y la cadena de tipos queda cerrada de punta a punta



# 4. Presentation


## 1. PortfolioFacade

#### un servicio simple que pida el contenido a la capa de Application
##### y lo deje listo para usar en la UI.

```
// src/app/presentation/services/portfolio.facade.ts

import { Injectable, inject } from '@angular/core';

import { GetPortfolioContentUseCase } from '../../application/use-cases/get-portfolio-content.use-case';
import { PortfolioContent } from '../../application/ports/portfolio-content.port';

@Injectable({
  providedIn: 'root',
})
export class PortfolioFacade {
  private readonly getPortfolioContentUseCase = inject(GetPortfolioContentUseCase);

  load(): Promise<PortfolioContent> {
    return this.getPortfolioContentUseCase.execute();
  }
}
```

Primera puerta de entrada de la UI hacia la aplicación.
No conoce JSON.
No conoce HttpClient.
No conoce el mapper.
Solo sabe pedir el contenido

#### Responsabilidad: Hace que los componentes no hablen directamente con el caso de uso
##### o al menos les evita cargar con más responsabilidad de la necesaria



## 2. Componente PortfolioFacade

Componente raíz de la landing
la pantalla que pide el contenido al PortfolioFacade
y lo deja disponible para la vista.

PortfolioPageComponent

```
// src/app/presentation/pages/portfolio-page.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';

import { PortfolioFacade } from '../services/portfolio.facade';
import { PortfolioContent } from '../../application/ports/portfolio-content.port';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="portfolio-page">
      @if (content(); as portfolio) {
        <p>{{ portfolio.profile.fullName }}</p>
      } @else {
        <p>Cargando portfolio...</p>
      }
    </main>
  `,
})
export class PortfolioPageComponent implements OnInit {
  private readonly portfolioFacade = inject(PortfolioFacade);

  readonly content = signal<PortfolioContent | null>(null);

  async ngOnInit(): Promise<void> {
    const portfolio = await this.portfolioFacade.load();
    this.content.set(portfolio);
  }
}
```

Es la primera pantalla real de la app.
#### Pide el contenido a la capa de Presentation/Application.
##### Mantiene el estado mínimo: content.
Todavía no diseña secciones ni layout completo




## 3. Layout base

estructura común que envolverá toda la landing y recibirá las secciones por proyección de contenido

```
// src/app/presentation/layouts/portfolio-layout.component.ts

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="portfolio-layout">
      <header class="portfolio-layout__header">
        <a class="portfolio-layout__brand" href="#top">Tu Nombre</a>

        <nav class="portfolio-layout__nav" aria-label="Navegación principal">
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>

      <main class="portfolio-layout__main">
        <ng-content></ng-content>
      </main>

      <footer class="portfolio-layout__footer">
        <p>© 2026 Tu Nombre. Todos los derechos reservados.</p>
      </footer>
    </div>
  `,
})
export class PortfolioLayoutComponent {}
```

Este layout define tres zonas claras:

Header: navegación principal.
Main: contenido de la landing.
Footer: cierre de la página.

tenemos el flujo de datos preparado, y ahora necesitamos una estructura visual estable donde luego van a vivir:

Hero
About
Skills
Projects
Experience
Education
Contact




## 4. Sección Hero

Hero Section simple, consumiendo Profile desde arriba y manteniendo la lógica mínima

```
// src/app/presentation/sections/hero-section.component.ts

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '../../domain/profile.entity';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="top" class="hero-section">
      <p class="hero-section__eyebrow">Hola, soy</p>

      <h1 class="hero-section__title">
        {{ profile.fullName }}
      </h1>

      <p class="hero-section__role">
        {{ profile.role }}
      </p>

      <p class="hero-section__headline">
        {{ profile.headline }}
      </p>

      <p class="hero-section__summary">
        {{ profile.summary }}
      </p>

      <div class="hero-section__actions">
        <a href="#projects">Ver proyectos</a>
        <a href="#contact">Contactarme</a>
      </div>
    </section>
  `,
})
export class HeroSectionComponent {
  @Input({ required: true }) profile!: Profile;
}
```


Responsabilidad:

presenta quién sos;
muestra tu rol;
resume tu propuesta;
ofrece dos acciones claras: ver proyectos y contactarte

el Hero no debería contener lógica de negocio.
Solo consume Profile y lo transforma en una primera impresión clara.



# Renderización componentes visuales



# Error httpclient

```
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    {
      provide: PORTFOLIO_CONTENT_PORT,
      useClass: JsonPortfolioContentAdapter,
    },
  ],
};
```



# Comp presentation

## 1. AboutSectionComponent

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '@domain/profile.entity';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-section">
      <h2 class="about-section__title">Sobre mí</h2>

      <p class="about-section__text">
        {{ profile.summary }}
      </p>
    </section>
  `,
})
export class AboutSectionComponent {
  @Input({ required: true }) profile!: Profile;
}
```

sigue la misma idea que el Hero: la sección no inventa contenido, solo muestra una parte del Profile


### Conectarla dentro de PortfolioPageComponent

##### Primero importamos la nueva sección y luego la colocamos debajo del Hero.
##### PortfolioPageComponent está actuando como un orquestador

Su única responsabilidad es:
Obtener el PortfolioContent.
Componer la página.
Distribuir cada parte del contenido a la sección correspondiente.

la dependencia queda así:

```
PortfolioPage
│
├── HeroSection  ← profile
├── AboutSection ← profile
├── ProjectsSection ← projects
├── SkillsSection ← skills
├── ExperienceSection ← experiences
├── EducationSection ← education
└── ContactSection ← contact + socialLinks
```

#### !!! Esta composición tiene una ventaja importante: cada sección recibe únicamente los datos que necesita

No se le pasa el PortfolioContent completo, lo que reduce el acoplamiento
hace que cada componente sea más fácil de reutilizar, probar y mantener

```
// src/app/presentation/pages/portfolio-page.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';

import { PortfolioFacade } from '../services/portfolio.facade';
import { PortfolioContent } from '@application/ports/portfolio-content.port';

import { PortfolioLayoutComponent } from '../layouts/portfolio-layout.component';
import { HeroSectionComponent } from '../sections/hero-section.component';
import { AboutSectionComponent } from '../sections/about-section.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    CommonModule,
    PortfolioLayoutComponent,
    HeroSectionComponent,
    AboutSectionComponent,
  ],
  template: `
    @if (content(); as portfolio) {
      <app-portfolio-layout [brand]="portfolio.profile.fullName">
        <app-hero-section
          [profile]="portfolio.profile"
        />

        <app-about-section
          [profile]="portfolio.profile"
        />
      </app-portfolio-layout>
    } @else {
      <p>Cargando portfolio...</p>
    }
  `,
})
export class PortfolioPageComponent implements OnInit {
  private readonly portfolioFacade = inject(PortfolioFacade);

  readonly content = signal<PortfolioContent | null>(null);

  async ngOnInit(): Promise<void> {
    const portfolio = await this.portfolioFacade.load();
    this.content.set(portfolio);
  }
}
```



## 2. ProjectsSectionComponent

#### Primera sección que consume una colección (Project[]) en lugar de una única entidad (Profile)

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Project } from '@domain/project.entity';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects-section">
      <h2 class="projects-section__title">Proyectos</h2>

      <div class="projects-section__list">
        @for (project of projects; track project.id) {
          <article class="projects-section__item">
            <h3 class="projects-section__item-title">
              {{ project.title }}
            </h3>

            <p class="projects-section__item-description">
              {{ project.description }}
            </p>

            <p class="projects-section__item-technologies">
              {{ project.technologies.join(' · ') }}
            </p>

            <div class="projects-section__item-links">
              @if (project.repository) {
                <a [href]="project.repository.url" target="_blank" rel="noreferrer">
                  {{ project.repository.label }}
                </a>
              }

              @if (project.demo) {
                <a [href]="project.demo.url" target="_blank" rel="noreferrer">
                  {{ project.demo.label }}
                </a>
              }
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class ProjectsSectionComponent {
  @Input({ required: true }) projects!: readonly Project[];
}
```

Abarca:
Muestra una lista de proyectos.
Reutiliza la entidad Project tal como viene del dominio.
No decide de dónde salen los datos.
No mezcla lógica de acceso con presentación


### Conectar ProjectsSectionComponent dentro de PortfolioPageComponent

```
// src/app/presentation/pages/portfolio-page.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';

import { PortfolioFacade } from '../services/portfolio.facade';
import { PortfolioContent } from '@application/ports/portfolio-content.port';

import { PortfolioLayoutComponent } from '../layouts/portfolio-layout.component';
import { HeroSectionComponent } from '../sections/hero-section.component';
import { AboutSectionComponent } from '../sections/about-section.component';
import { ProjectsSectionComponent } from '../sections/projects-section.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    CommonModule,
    PortfolioLayoutComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
  ],
  template: `
    @if (content(); as portfolio) {
      <app-portfolio-layout [brand]="portfolio.profile.fullName">
        <app-hero-section [profile]="portfolio.profile" />

        <app-about-section [profile]="portfolio.profile" />

        <app-projects-section [projects]="portfolio.projects" />
      </app-portfolio-layout>
    } @else {
      <p>Cargando portfolio...</p>
    }
  `,
})
export class PortfolioPageComponent implements OnInit {
  private readonly portfolioFacade = inject(PortfolioFacade);

  readonly content = signal<PortfolioContent | null>(null);

  async ngOnInit(): Promise<void> {
    const portfolio = await this.portfolioFacade.load();
    this.content.set(portfolio);
  }
}
```



## 3. SkillsSectionComponent

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Skill } from '@domain/skill.entity';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills-section">
      <h2 class="skills-section__title">Habilidades</h2>

      <div class="skills-section__list">
        @for (skill of skills; track skill.id) {
          <div class="skills-section__item">
            <span class="skills-section__name">
              {{ skill.name }}
            </span>

            @if (skill.category) {
              <span class="skills-section__category">
                {{ skill.category }}
              </span>
            }
          </div>
        }
      </div>
    </section>
  `,
})
export class SkillsSectionComponent {
  @Input({ required: true }) skills!: readonly Skill[];
}
```


### Conectar SkillsSectionComponent dentro de PortfolioPageComponent

```
// src/app/presentation/pages/portfolio-page.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';

import { PortfolioFacade } from '../services/portfolio.facade';
import { PortfolioContent } from '@application/ports/portfolio-content.port';

import { PortfolioLayoutComponent } from '../layouts/portfolio-layout.component';
import { HeroSectionComponent } from '../sections/hero-section.component';
import { AboutSectionComponent } from '../sections/about-section.component';
import { ProjectsSectionComponent } from '../sections/projects-section.component';
import { SkillsSectionComponent } from '../sections/skills-section.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    CommonModule,
    PortfolioLayoutComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
  ],
  template: `
    @if (content(); as portfolio) {
      <app-portfolio-layout [brand]="portfolio.profile.fullName">
        <app-hero-section [profile]="portfolio.profile" />

        <app-about-section [profile]="portfolio.profile" />

        <app-projects-section [projects]="portfolio.projects" />

        <app-skills-section [skills]="portfolio.skills" />
      </app-portfolio-layout>
    } @else {
      <p>Cargando portfolio...</p>
    }
  `,
})
export class PortfolioPageComponent implements OnInit {
  private readonly portfolioFacade = inject(PortfolioFacade);

  readonly content = signal<PortfolioContent | null>(null);

  async ngOnInit(): Promise<void> {
    const portfolio = await this.portfolioFacade.load();
    this.content.set(portfolio);
  }
}

```


## 4. ExperienceSectionComponent

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Experience } from '@domain/experience.entity';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="experience-section">
      <h2 class="experience-section__title">
        Experiencia
      </h2>

      <div class="experience-section__list">
        @for (experience of experiences; track experience.id) {

          <article class="experience-section__item">

            <header class="experience-section__header">
              <h3 class="experience-section__role">
                {{ experience.role }}
              </h3>

              <p class="experience-section__company">
                {{ experience.company }}
              </p>

              <p class="experience-section__period">
                {{ experience.startDate }}
                —
                {{ experience.endDate ?? 'Actualidad' }}
              </p>
            </header>

            <p class="experience-section__summary">
              {{ experience.summary }}
            </p>

            @if (experience.achievements?.length) {
              <ul class="experience-section__achievements">
                @for (
                  achievement of experience.achievements;
                  track achievement
                ) {
                  <li>
                    {{ achievement }}
                  </li>
                }
              </ul>
            }

          </article>

        }
      </div>
    </section>
  `,
})
export class ExperienceSectionComponent {
  @Input({ required: true })
  experiences!: readonly Experience[];
}
```


Cada experiencia es un <article> porque representa un contenido independiente dentro de la sección

Dentro del artículo:
<header> contiene la información principal (cargo, empresa y período).
Luego viene el resumen.
Finalmente, si existen, los logros

hace que la estructura sea muy semántica y fácil de estilizar posteriormente con Tailwind


### Conectar ExperienceSectionComponent en PortfolioPageComponent

Solo agregamos la importación del componente, lo registramos en imports y le pasamos únicamente la información que necesita.

```
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';

import { PortfolioFacade } from '../services/portfolio.facade';
import { PortfolioContent } from '@application/ports/portfolio-content.port';

import { PortfolioLayoutComponent } from '../layouts/portfolio-layout.component';
import { HeroSectionComponent } from '../sections/hero-section.component';
import { AboutSectionComponent } from '../sections/about-section.component';
import { ProjectsSectionComponent } from '../sections/projects-section.component';
import { SkillsSectionComponent } from '../sections/skills-section.component';
import { ExperienceSectionComponent } from '../sections/experience-section.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    CommonModule,
    PortfolioLayoutComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
  ],
  template: `
    @if (content(); as portfolio) {
      <app-portfolio-layout [brand]="portfolio.profile.fullName">
        <app-hero-section
          [profile]="portfolio.profile"
        />

        <app-about-section
          [profile]="portfolio.profile"
        />

        <app-projects-section
          [projects]="portfolio.projects"
        />

        <app-skills-section
          [skills]="portfolio.skills"
        />

        <app-experience-section
          [experiences]="portfolio.experiences"
        />
      </app-portfolio-layout>
    } @else {
      <p>Cargando portfolio...</p>
    }
  `,
})
export class PortfolioPageComponent implements OnInit {
  private readonly portfolioFacade = inject(PortfolioFacade);

  readonly content = signal<PortfolioContent | null>(null);

  async ngOnInit(): Promise<void> {
    const portfolio = await this.portfolioFacade.load();
    this.content.set(portfolio);
  }
}
```

Rs:

```
PortfolioPage
│
├── HeroSection        ← Profile
├── AboutSection       ← Profile
├── ProjectsSection    ← Project[]
├── SkillsSection      ← Skill[]
├── ExperienceSection  ← Experience[]
```

PortfolioPageComponent actúa como el compositor de la interfaz: obtiene el PortfolioContent
distribuye cada parte a la sección correspondiente

Cada componente recibe solo la información que necesita
reduce el acoplamiento y hace más sencilla su evolución.


## 5. EducationSectionComponent

adaptado a la entidad Education

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Education } from '@domain/education.entity';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="education-section">
      <h2 class="education-section__title">
        Educación
      </h2>

      <div class="education-section__list">
        @for (education of educationList; track education.id) {

          <article class="education-section__item">

            <header class="education-section__header">
              <h3 class="education-section__degree">
                {{ education.degree }}
              </h3>

              <p class="education-section__institution">
                {{ education.institution }}
              </p>

              <p class="education-section__period">
                {{ education.startDate }}
                —
                {{ education.endDate ?? 'Actualidad' }}
              </p>
            </header>

            @if (education.summary) {
              <p class="education-section__summary">
                {{ education.summary }}
              </p>
            }

          </article>

        }
      </div>
    </section>
  `,
})
export class EducationSectionComponent {
  @Input({ required: true })
  educationList!: readonly Education[];
}
```


### educationList no education

La entidad se llama Education, pero el componente recibe una colección de ellas
Nombrar el @Input() como educationList (o educations)
hace evidente que se trata de un conjunto y evita sombras de nombres dentro del @for:

```
@for (education of educationList; track education.id)
```

La lectura es más clara que usar el mismo identificador para la colección y para cada elemento.



### Conectar EducationSectionComponent dentro de PortfolioPageComponent

```
// src/app/presentation/pages/portfolio-page.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';

import { PortfolioFacade } from '../services/portfolio.facade';
import { PortfolioContent } from '@application/ports/portfolio-content.port';

import { PortfolioLayoutComponent } from '../layouts/portfolio-layout.component';
import { HeroSectionComponent } from '../sections/hero-section.component';
import { AboutSectionComponent } from '../sections/about-section.component';
import { ProjectsSectionComponent } from '../sections/projects-section.component';
import { SkillsSectionComponent } from '../sections/skills-section.component';
import { ExperienceSectionComponent } from '../sections/experience-section.component';
import { EducationSectionComponent } from '../sections/education-section.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    CommonModule,
    PortfolioLayoutComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
  ],
  template: `
    @if (content(); as portfolio) {
      <app-portfolio-layout [brand]="portfolio.profile.fullName">
        <app-hero-section [profile]="portfolio.profile" />

        <app-about-section [profile]="portfolio.profile" />

        <app-projects-section [projects]="portfolio.projects" />

        <app-skills-section [skills]="portfolio.skills" />

        <app-experience-section [experiences]="portfolio.experiences" />

        <app-education-section [educationList]="portfolio.education" />
      </app-portfolio-layout>
    } @else {
      <p>Cargando portfolio...</p>
    }
  `,
})
export class PortfolioPageComponent implements OnInit {
  private readonly portfolioFacade = inject(PortfolioFacade);

  readonly content = signal<PortfolioContent | null>(null);

  async ngOnInit(): Promise<void> {
    const portfolio = await this.portfolioFacade.load();
    this.content.set(portfolio);
  }
}
```



## 6. ContactSectionComponent

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Contact } from '@domain/contact.entity';
import { SocialLink } from '@domain/social-link.entity';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="contact-section">
      <h2 class="contact-section__title">
        Contacto
      </h2>

      <p class="contact-section__text">
        {{ contact.email }}
      </p>

      @if (contact.location) {
        <p class="contact-section__location">
          {{ contact.location }}
        </p>
      }

      <p class="contact-section__availability">
        {{ contact.availableForWork ? 'Disponible para nuevas oportunidades' : 'No disponible actualmente' }}
      </p>

      @if (socialLinks.length) {
        <div class="contact-section__links">
          @for (link of socialLinks; track link.url) {
            <a
              class="contact-section__link"
              [href]="link.url"
              target="_blank"
              rel="noreferrer"
            >
              {{ link.label }}
            </a>
          }
        </div>
      }
    </section>
  `,
})
export class ContactSectionComponent {
  @Input({ required: true })
  contact!: Contact;

  @Input({ required: true })
  socialLinks!: readonly SocialLink[];
}
```

abarca:
Muestra el email principal.
Muestra ubicación si existe.
Indica disponibilidad.
Lista enlaces sociales.



### Conectar ContactSectionComponent en PortfolioPageComponent

```
// src/app/presentation/pages/portfolio-page.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';

import { PortfolioFacade } from '../services/portfolio.facade';
import { PortfolioContent } from '@application/ports/portfolio-content.port';

import { PortfolioLayoutComponent } from '../layouts/portfolio-layout.component';
import { HeroSectionComponent } from '../sections/hero-section.component';
import { AboutSectionComponent } from '../sections/about-section.component';
import { ProjectsSectionComponent } from '../sections/projects-section.component';
import { SkillsSectionComponent } from '../sections/skills-section.component';
import { ExperienceSectionComponent } from '../sections/experience-section.component';
import { EducationSectionComponent } from '../sections/education-section.component';
import { ContactSectionComponent } from '../sections/contact-section.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    CommonModule,
    PortfolioLayoutComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    ContactSectionComponent,
  ],
  template: `
    @if (content(); as portfolio) {
      <app-portfolio-layout [brand]="portfolio.profile.fullName">
        <app-hero-section [profile]="portfolio.profile" />

        <app-about-section [profile]="portfolio.profile" />

        <app-projects-section [projects]="portfolio.projects" />

        <app-skills-section [skills]="portfolio.skills" />

        <app-experience-section [experiences]="portfolio.experiences" />

        <app-education-section [educationList]="portfolio.education" />

        <app-contact-section
          [contact]="portfolio.contact"
          [socialLinks]="portfolio.socialLinks"
        />
      </app-portfolio-layout>
    } @else {
      <p>Cargando portfolio...</p>
    }
  `,
})
export class PortfolioPageComponent implements OnInit {
  private readonly portfolioFacade = inject(PortfolioFacade);

  readonly content = signal<PortfolioContent | null>(null);

  async ngOnInit(): Promise<void> {
    const portfolio = await this.portfolioFacade.load();
    this.content.set(portfolio);
  }
}
```

Composición completa:

Hero
About
Projects
Skills
Experience
Education
Contact



# Limpieza de PortfolioLayoutComponent

1. Layout solo organice estructura

Debería hacer solo esto:

header
main
footer

Y nada más “inteligente”.
No debería decidir estilos complejos, ni lógica de contenido, ni reglas de negocio

2. no tenga contenido hardcodeado

Ahora mismo el layout todavía puede tener cosas como:

Tu Nombre
enlaces fijos
copyright fijo

Eso conviene sacarlo o convertirlo en datos que vengan desde la página.

Así el layout queda reusable y no depende del portfolio concreto.

3. semántica HTML esté bien definida

Antes de Tailwind, conviene que la estructura sea correcta:

<header>
<nav>
<main>
<footer>

Eso ayuda mucho después con accesibilidad, responsive design y mantenimiento.

4. listo para recibir datos por @Input()

Por ejemplo:

brand
navegación
quizá links del footer

La idea es que el layout no “sepa” quién es la persona, solo reciba lo necesario.

5. clases sean solo una base, no el diseño final

Si hoy tiene clases tipo:

portfolio-layout
portfolio-layout__header
portfolio-layout__main

está bien como estructura temporal, pero después Tailwind debería ser el encargado de la mayor parte del estilo.

las clases pueden quedar como hooks semánticos, pero no deberían cargar todo el peso visual.

6. Espacio para el responsive

Antes de Tailwind, conviene pensar dónde irán después las decisiones de:

ancho máximo
padding horizontal
separación vertical
comportamiento del nav en móvil
espaciado entre secciones

7. no duplique cosas que ya hacen las secciones

El layout no debería repetir títulos, textos o CTAs de las secciones.
Su trabajo es envolverlas y darles un marco coherente.


Dejar limpio PortfolioLayoutComponent para Tailwind
convertirlo en una capa estructural mínima, semántica, reusable y sin decisiones visuales rígidas
para que Tailwind pueda aplicar el sistema de diseño sin pelear con el componente


##### decidir qué datos realmente deben entrar por inputs y cuáles conviene mover a PortfolioPageComponent


## Responsabilidad de PortfolioLayoutComponent

#### Proporcionar la estructura general de la aplicación y un lugar donde renderizar las secciones del portfolio.

Debería ocuparse de:

Header
Navegación
Contenido (<ng-content>)
Footer


## header

único lugar donde hoy todavía hay contenido parcialmente "hardcodeado".

```
<header class="portfolio-layout__header">
  <a class="portfolio-layout__brand" href="#top">
    {{ brand }}
  </a>

  <nav class="portfolio-layout__nav">
    ...
  </nav>
</header>
```

pregunta es:

#### ¿Qué pertenece realmente al Layout?

##### Hay dos tipos de información:

#### 1. Estructura: si pertenece al layout

```
<header>
<nav>
<main>
<footer>
```

#### 2. Contenido: no pertenece realmente al Layout

Por ejemplo:
"Sobre mí"
"Proyectos"
"Contacto"


Imaginemos mañana otro portfolio:

Inicio
Experiencia
Blog
Artículos
Open Source

Otro podría tener:

Home
Photography
Travel
Contact

##### Si el Layout tiene enlaces fijos, deja de ser reutilizable.

El Layout debería conocer únicamente:

la marca (brand)
una colección de elementos de navegación

No debería conocer cuáles son.


ConceptualmenteHoy probablemente sea algo parecido a esto

```
PortfolioLayout
│
├── brand
├── Sobre mí
├── Proyectos
├── Contacto
```

##### Lo ideal sería:

```
PortfolioLayout
│
├── brand
└── navigation[]
```


### Primera mejora: recibir una colección de elementos de navegación y renderizarla.

En lugar de tener tres <a> escritos manualmente

conceptualmente:

```
[
  About,
  Projects,
  Skills,
  Experience,
  Education,
  Contact
]
```


### Modelo de navegación:

```
// src/app/presentation/models/portfolio-nav-item.model.ts

export interface PortfolioNavItem {
  readonly label: string;
  readonly href: string;
}
```

Permite que el layout deje de conocer enlaces fijos y empiece a recibir navegación como dato.


### Adaptar modelo de navegación al componente layout

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { PortfolioNavItem } from '../models/portfolio-nav-item.model';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="portfolio-layout">
      <header class="portfolio-layout__header">
        <a class="portfolio-layout__brand" href="#top">
          {{ brand }}
        </a>

        <nav class="portfolio-layout__nav" aria-label="Navegación principal">
          @for (item of navItems; track item.href) {
            <a [href]="item.href">
              {{ item.label }}
            </a>
          }
        </nav>
      </header>

      <main class="portfolio-layout__main">
        <ng-content />
      </main>

      <footer class="portfolio-layout__footer">
        <p>© 2026 {{ brand }}. Todos los derechos reservados.</p>
      </footer>
    </div>
  `,
})
export class PortfolioLayoutComponent {
  @Input({ required: true })
  brand!: string;

  @Input({ required: true })
  navItems!: readonly PortfolioNavItem[];
}
``` 


## Navegación para PortfolioPageComponent

```
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';

import { PortfolioFacade } from '../services/portfolio.facade';
import { PortfolioContent } from '@application/ports/portfolio-content.port';

import { PortfolioLayoutComponent } from '../layouts/portfolio-layout.component';
import { PortfolioNavItem } from '../models/portfolio-nav-item.model';

import { HeroSectionComponent } from '../sections/hero-section.component';
import { AboutSectionComponent } from '../sections/about-section.component';
import { ProjectsSectionComponent } from '../sections/projects-section.component';
import { SkillsSectionComponent } from '../sections/skills-section.component';
import { ExperienceSectionComponent } from '../sections/experience-section.component';
import { EducationSectionComponent } from '../sections/education-section.component';
import { ContactSectionComponent } from '../sections/contact-section.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    CommonModule,
    PortfolioLayoutComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    ContactSectionComponent,
  ],
  template: `
    @if (content(); as portfolio) {
      <app-portfolio-layout
        [brand]="portfolio.profile.fullName"
        [navItems]="navItems"
      >
        <app-hero-section [profile]="portfolio.profile" />
        <app-about-section [profile]="portfolio.profile" />
        <app-projects-section [projects]="portfolio.projects" />
        <app-skills-section [skills]="portfolio.skills" />
        <app-experience-section [experiences]="portfolio.experiences" />
        <app-education-section [educationList]="portfolio.education" />
        <app-contact-section
          [contact]="portfolio.contact"
          [socialLinks]="portfolio.socialLinks"
        />
      </app-portfolio-layout>
    } @else {
      <p>Cargando portfolio...</p>
    }
  `,
})
export class PortfolioPageComponent implements OnInit {
  private readonly portfolioFacade = inject(PortfolioFacade);

  readonly content = signal<PortfolioContent | null>(null);

  readonly navItems: readonly PortfolioNavItem[] = [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Educación', href: '#education' },
    { label: 'Contacto', href: '#contact' },
  ];

  async ngOnInit(): Promise<void> {
    const portfolio = await this.portfolioFacade.load();
    this.content.set(portfolio);
  }
}

```
  

## Mejora de navegación en PortfolioLayoutComponent

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { PortfolioNavItem } from '../models/portfolio-nav-item.model';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="portfolio-layout">
      <header class="portfolio-layout__header">
        <a
          class="portfolio-layout__brand"
          href="#top"
        >
          {{ brand }}
        </a>

        <nav
          class="portfolio-layout__nav"
          aria-label="Navegación principal"
        >
          @for (item of navItems; track item.href) {
            <a
              class="portfolio-layout__nav-link"
              [href]="item.href"
            >
              {{ item.label }}
            </a>
          }
        </nav>
      </header>

      <main class="portfolio-layout__main">
        <ng-content />
      </main>

      <footer class="portfolio-layout__footer">
        <p>© 2026 {{ brand }}. Todos los derechos reservados.</p>
      </footer>
    </div>
  `,
})
export class PortfolioLayoutComponent {
  @Input({ required: true })
  brand!: string;

  @Input({ required: true })
  navItems!: readonly PortfolioNavItem[];
}
```


### Agregar top

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { PortfolioNavItem } from '../models/portfolio-nav-item.model';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="portfolio-layout" id="top">
      <header class="portfolio-layout__header">
        <a
          class="portfolio-layout__brand"
          href="#top"
        >
          {{ brand }}
        </a>

        <nav
          class="portfolio-layout__nav"
          aria-label="Navegación principal"
        >
          @for (item of navItems; track item.href) {
            <a
              class="portfolio-layout__nav-link"
              [href]="item.href"
            >
              {{ item.label }}
            </a>
          }
        </nav>
      </header>

      <main class="portfolio-layout__main">
        <ng-content />
      </main>

      <footer class="portfolio-layout__footer">
        <p>© 2026 {{ brand }}. Todos los derechos reservados.</p>
      </footer>
    </div>
  `,
})
export class PortfolioLayoutComponent {
  @Input({ required: true })
  brand!: string;

  @Input({ required: true })
  navItems!: readonly PortfolioNavItem[];
}
```


## Footer en PortfolioPageComponent

```
// src/app/presentation/pages/portfolio-page.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';

import { PortfolioFacade } from '../services/portfolio.facade';
import { PortfolioContent } from '@application/ports/portfolio-content.port';

import { PortfolioLayoutComponent } from '../layouts/portfolio-layout.component';
import { PortfolioNavItem } from '../models/portfolio-nav-item.model';

import { HeroSectionComponent } from '../sections/hero-section.component';
import { AboutSectionComponent } from '../sections/about-section.component';
import { ProjectsSectionComponent } from '../sections/projects-section.component';
import { SkillsSectionComponent } from '../sections/skills-section.component';
import { ExperienceSectionComponent } from '../sections/experience-section.component';
import { EducationSectionComponent } from '../sections/education-section.component';
import { ContactSectionComponent } from '../sections/contact-section.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    CommonModule,
    PortfolioLayoutComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    ContactSectionComponent,
  ],
  template: `
    @if (content(); as portfolio) {
      <app-portfolio-layout
        [brand]="portfolio.profile.fullName"
        [navItems]="navItems"
        [footerText]="footerText"
      >
        <app-hero-section [profile]="portfolio.profile" />
        <app-about-section [profile]="portfolio.profile" />
        <app-projects-section [projects]="portfolio.projects" />
        <app-skills-section [skills]="portfolio.skills" />
        <app-experience-section [experiences]="portfolio.experiences" />
        <app-education-section [educationList]="portfolio.education" />
        <app-contact-section
          [contact]="portfolio.contact"
          [socialLinks]="portfolio.socialLinks"
        />
      </app-portfolio-layout>
    } @else {
      <p>Cargando portfolio...</p>
    }
  `,
})
export class PortfolioPageComponent implements OnInit {
  private readonly portfolioFacade = inject(PortfolioFacade);

  readonly content = signal<PortfolioContent | null>(null);

  readonly navItems: readonly PortfolioNavItem[] = [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Educación', href: '#education' },
    { label: 'Contacto', href: '#contact' },
  ];

  readonly footerText = '© 2026 Tu Nombre. Todos los derechos reservados.';

  async ngOnInit(): Promise<void> {
    const portfolio = await this.portfolioFacade.load();
    this.content.set(portfolio);
  }
}
```


## Últimos cambios para PortfolioLayoutComponent

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { PortfolioNavItem } from '../models/portfolio-nav-item.model';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="portfolio-layout__header">
      <a class="portfolio-layout__brand" href="#top">
        {{ brand }}
      </a>

      <nav class="portfolio-layout__nav" aria-label="Navegación principal">
        @for (item of navItems; track item.href) {
          <a class="portfolio-layout__nav-link" [href]="item.href">
            {{ item.label }}
          </a>
        }
      </nav>
    </header>

    <main class="portfolio-layout__main">
      <ng-content />
    </main>

    <footer class="portfolio-layout__footer">
      <p>{{ footerText }}</p>
    </footer>
  `,
})
export class PortfolioLayoutComponent {
  @Input({ required: true })
  brand!: string;

  @Input({ required: true })
  navItems!: readonly PortfolioNavItem[];

  @Input({ required: true })
  footerText!: string;
}
```


## Últimos cambios para PortfolioPageComponent

```
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';

import { PortfolioFacade } from '../services/portfolio.facade';
import { PortfolioContent } from '@application/ports/portfolio-content.port';

import { PortfolioLayoutComponent } from '../layouts/portfolio-layout.component';
import { PortfolioNavItem } from '../models/portfolio-nav-item.model';

import { HeroSectionComponent } from '../sections/hero-section.component';
import { AboutSectionComponent } from '../sections/about-section.component';
import { ProjectsSectionComponent } from '../sections/projects-section.component';
import { SkillsSectionComponent } from '../sections/skills-section.component';
import { ExperienceSectionComponent } from '../sections/experience-section.component';
import { EducationSectionComponent } from '../sections/education-section.component';
import { ContactSectionComponent } from '../sections/contact-section.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    CommonModule,
    PortfolioLayoutComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    ContactSectionComponent,
  ],
  template: `
    @if (content(); as portfolio) {
      <app-portfolio-layout
        [brand]="portfolio.profile.fullName"
        [navItems]="navItems"
        [footerText]="footerText"
      >
        <app-hero-section [profile]="portfolio.profile" />
        <app-about-section [profile]="portfolio.profile" />
        <app-projects-section [projects]="portfolio.projects" />
        <app-skills-section [skills]="portfolio.skills" />
        <app-experience-section [experiences]="portfolio.experiences" />
        <app-education-section [educationList]="portfolio.education" />
        <app-contact-section
          [contact]="portfolio.contact"
          [socialLinks]="portfolio.socialLinks"
        />
      </app-portfolio-layout>
    } @else {
      <p>Cargando portfolio...</p>
    }
  `,
})
export class PortfolioPageComponent implements OnInit {
  private readonly portfolioFacade = inject(PortfolioFacade);

  readonly content = signal<PortfolioContent | null>(null);

  readonly navItems: readonly PortfolioNavItem[] = [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Educación', href: '#education' },
    { label: 'Contacto', href: '#contact' },
  ];

  readonly footerText = '© 2026 Tu Nombre. Todos los derechos reservados.';

  async ngOnInit(): Promise<void> {
    const portfolio = await this.portfolioFacade.load();
    this.content.set(portfolio);
  }
}
```



# Modo claro/oscuro


## Introducción

1. `Definir una sola fuente de verdad para el tema`:
o seguís la preferencia del sistema con prefers-color-scheme
o permitís un override manual del usuario

##### Tailwind soporta el variante dark y, por defecto, puede basarse en prefers-color-scheme
##### también permite una estrategia manual con selector/clase

2. `Aplicar el tema en el nodo raíz (html)`:
Tailwind documenta como enfoque común poner la clase dark en <html>
y sincronizar esa preferencia desde JavaScript
En Angular, además, podés activar o quitar clases de forma condicional con class binding

3. `Persistir la elección del usuario`: si el usuario cambia el tema manualmente, guardalo en localStorage
que persiste entre sesiones del navegador

4. `Diseñar con tokens, no con colores fijos`:
Tailwind recomienda pensar el diseño con theme variables como tokens de tipografía, color, sombras y breakpoints
##### así el modo claro/oscuro cambia la capa de tokens y no toda la UI

5. `Alinear también la UI nativa del navegador`:
color-scheme ayuda a que scrollbar, formularios y otros controles nativos se adapten al esquema claro/oscuro
Tailwind también documenta utilidades para que la UI nativa quede coherente en dark mode

6. `Detectar cambios del sistema si querés modo automático`:
matchMedia() permite observar la media query y reaccionar cuando el sistema cambia entre claro y oscuro


Ej: tema por defecto = sistema
override manual = usuario
persistencia en localStorage
clase dark en html para que Tailwind haga el resto


## Estructura modo claro/oscuro

1. Modelar el tema

Valores válidos tendrá el tema: light, dark y, si querés respetar el sistema, system;

Fuente de verdad: preferencia del usuario o preferencia del sistema;

Persistirá esa elección, normalmente con localStorage
Tailwind soporta dark mode por clase o por preferencia del sistema
localStorage sirve para recordar la elección entre sesiones.

Base:
`export type ThemeMode = 'light' | 'dark' | 'system';`

2. Aplicar el tema en html
La idea es poner o quitar la clase dark en el elemento raíz (<html>).
Tailwind documenta ese enfoque como una forma habitual de activar el modo oscuro
también puedes usar color-scheme para que controles nativos del navegador acompañen el tema.

3. resolver el sistema si el modo es system
Si el usuario no eligió manualmente
la app puede leer prefers-color-scheme con matchMedia()
es la API estándar para detectar ese tipo de preferencia del sistema.

Orden:

1. Definir ThemeMode.
2. Crear un servicio de tema.
3. Leer y guardar la preferencia en localStorage.
4. Aplicar o quitar la clase dark en html.
5. Conectar el botón de alternar tema.
6. Recién después, pintar colores con Tailwind



## Thema system

Es una regla de resolución que decide si la app debe usar el bloque de light o el de dark
según la preferencia del sistema operativo o del navegador del usuario
Tailwind documenta justamente este caso como un toggle de tres estados donde system se resuelve con window.matchMedia() usando prefers-color-scheme

En la práctica, el flujo suele ser este: tenés tus tokens para light y tus tokens para dark
si el usuario elige light o dark, aplicás ese modo directamente
si elige system, consultás la preferencia del sistema y usás light o dark según corresponda
prefers-color-scheme está pensado exactamente para detectar si el usuario pidió tema claro u oscuro

Si el sistema cambia mientras la app está abierta, podés escuchar ese cambio con matchMedia() y actualizar el tema
Tailwind recomienda ese enfoque para soportar un selector manual más un modo system que sigue la preferencia del entorno

Además, conviene acompañar el tema con color-scheme para que controles nativos como formularios y scrollbars se vean coherentes con el modo activo
MDN explica que color-scheme afecta la UI nativa del navegador y que puede declarar compatibilidad con light/dark



## Guía desarrollo modo claro/oscuro

1. `Definir el contrato del tema`:
solo tres estados posibles para la app: light, dark y system
system no añade tokens nuevos; solo decide si se usan los de light o dark según prefers-color-scheme

2. `Definir la fuente de verdad`:
si el usuario elige manualmente, guardás esa elección en localStorage
si no eligió nada, seguís el sistema
localStorage persiste entre sesiones, así que sirve bien para recordar la preferencia

3. `Aplicar el tema en el root`:
Tailwind funciona muy bien cuando el modo oscuro se activa con la clase dark en el árbol HTML
y sus utilidades dark: se activan a partir de esa clase
Tailwind también documenta el enfoque de usar matchMedia() para seguir el tema del sistema cuando hace falta

4. `Resolver el tema al arrancar`:
en el primer render conviene decidir el tema lo antes posible para evitar un salto visual
Tailwind incluso recomienda aplicar la decisión temprano al cargar la página, antes de que la UI se pinte completamente

5. `Definir tokens de diseño, no colores sueltos`:
el diseño debería apoyarse en tokens de Tailwind para colores, tipografía, sombras y breakpoints
Tailwind describe esos valores como design tokens en variables de tema
y el modo oscuro se expresa con overrides dark: sobre las utilidades normales

6. `Alinear la UI nativa del navegador`:
además de las clases de Tailwind, conviene usar color-scheme para que controles nativos como formularios y scrollbars se adapten al modo activo
MDN explica que color-scheme comunica qué esquemas de color soporta un elemento y que el navegador ajusta su UI nativa en consecuencia

7. `Agregar el control de cambio de tema`:
después de que el sistema base ya funcione, recién ahí agregaría el botón o selector en la UI
En Angular, el cambio de clase se puede manejar con bindings de clase o con lógica de servicio
Angular documenta que los bindings de clase añaden o quitan clases condicionalmente

8. `Probar tres escenarios`:
tema claro forzado, tema oscuro forzado y system
También probaría que el tema del sistema cambie mientras la app está abierta, porque matchMedia() permite detectar esos cambios



## Guía piezas de código modo claro/oscuro

1. `Contrato del tema`:
tipo o enum con light, dark y system
para separar la preferencia del usuario del tema efectivo que se aplica
system se resuelve con prefers-color-scheme y matchMedia().

2. `Servicio de tema`:
una pieza central que lea la preferencia guardada, la persista en localStorage
resuelva el tema efectivo y escuche cambios del sistema cuando el modo sea system
localStorage persiste entre sesiones y matchMedia() permite detectar cambios de la media query

3. `Aplicador del tema al root`:
una pieza que agregue o quite la clase dark en <html> y, si hace falta, ajuste color-scheme
para que la UI nativa del navegador acompañe el modo activo. Tailwind usa el prefijo dark:
y documenta el enfoque de activar dark mode con la clase dark;
color-scheme ayuda a que controles nativos como formularios y scrollbars se adapten

4. `Control visual de cambio de tema`:
Un componente, botón o toggle en Angular para que el usuario elija light, dark o system
Angular permite añadir o quitar clases condicionalmente con bindings de clase o en el host del componente

5. `Base de diseño en Tailwind`:
tokens de color, tipografía, sombras y demás variables del tema, con variantes dark
para las utilidades que cambian entre modos
Tailwind recomienda pensar el diseño con tokens y usar el variant dark para las diferencias visuales

6. `Estilos globales iniciales`:
reglas base para que el sitio arranque consistente en ambos modos
incluyendo colores de fondo/texto y la compatibilidad con esquema claro/oscuro del navegador
color-scheme y @media (prefers-color-scheme) son las bases estándar para ese comportamiento


## Integración Tailwind

1. Instalación
La ruta más simple en Angular es usar el comando automático ng add tailwindcss
Angular CLI se encarga de instalar paquetes, configurar Tailwind y ajustar el proyecto
preferís hacerlo manualmente, Angular documenta instalar tailwindcss, @tailwindcss/postcss y postcss
crear la configuración de PostCSS e importar Tailwind desde el CSS global

2. Tailwind entre por el CSS global
Tailwind funciona escaneando tus archivos de HTML
componentes y plantillas para generar las utilidades que usás
En Angular, la guía oficial indica importarlo desde src/styles.css con @import "tailwindcss";
para que quede disponible en toda la app

3. pipeline de estilos
Antes de tocar diseño real, conviene verificar que una utilidad simple ya se vea en pantalla
Tailwind y Angular recomiendan este tipo de verificación temprana para confirmar que el compilado de estilos está funcionando antes de seguir

4. Mantener el CSS global como base
Angular soporta cualquier herramienta que genere CSS, y los estilos globales siguen siendo el lugar correcto para inicializar la base visual general
Eso te permite mantener tu arquitectura de componentes intacta mientras Tailwind se encarga del sistema visual

5. Tailwind primero en piezas estructurales 
layout y los contenedores antes que por tarjetas o detalles
Tailwind está pensado para componer diseño directamente en el markup con utilidades pequeñas
así que el orden natural es: layout, spacing, tipografía, colores y luego secciones

6. Definir tokens antes de decorar componentes
Tailwind recomienda trabajar con theme variables y utilidades, no con valores sueltos dispersos
encaja muy bien con tu idea de KISS y con la separación entre contenido y presentación que ya armamos

7. Modo oscuro para después de la base
Tailwind soporta dark mode con su variante dark, y la documentación actual de Angular/Tailwind
deja claro que primero debe estar funcionando la integración base antes de sumar la lógica de tema
Así evitas mezclar dos problemas a la vez: integración de estilos y gestión de tema



## Reset y estilo global

“reset” base no suele hacerse a mano porque ya existe Preflight
un conjunto de estilos base “opinados” que Tailwind inyecta automáticamente en la capa base al importar tailwindcss
Está construido sobre modern-normalize y busca suavizar diferencias entre navegadores

Lo más importante de Preflight para tu caso es que quita márgenes por defecto, resetea bordes y deja los heading tags sin estilo tipográfico propio para que tu sistema de diseño decida explícitamente la escala visual
Eso encaja muy bien con una app donde querés controlar todo desde tokens y utilidades, no pelearte con estilos del navegador

La práctica recomendada es separar así: tokens y decisiones globales en @theme
ajustes globales base en @layer base, y estilo de componentes principalmente con utilidades en el markup
Tailwind documenta precisamente esa división entre theme variables, estilos globales y utilidades

Si necesitás un estilo global específico, como tipografía base, color de fondo del body, altura mínima de pantalla o ajuste de links y headings
lo correcto es ponerlo en @layer base encima de Preflight
Tailwind también aclara que puedes sobrescribir Preflight con CSS propio cuando haga falta

Si además vas a cargar fuentes externas, Tailwind indica que los @import de fuentes deben ir antes de @import "tailwindcss",
porque los @import CSS deben ir al comienzo del archivo



# Integrar Tailwind

Tailwind v4 con Angular
Tener tailwindcss, @tailwindcss/postcss y postcss coincide con la integración

@tailwindcss/postcss + postcss: el pipeline está preparado para procesar Tailwind

tailwindcss v4: puedes arrancar el CSS global con @import "tailwindcss"
que es el entry point documentado en la instalación moderna de Tailwind

Reset/global styles: Tailwind ya trae Preflight por defecto, así que normalmente no haces un reset manual
lo habitual es agregar tus reglas base en @layer base


Revisar dos archivos:
el CSS global donde importarás Tailwind
y la configuración de PostCSS donde registras @tailwindcss/postcss.

Angular y Tailwind describen justamente esa separación como el setup estándar

1. CSS global suele llamarse `src/styles.css`:
Angular lo trata como el estilo global del proyecto mediante la opción styles del build
Si en vez de CSS usas SCSS, suele ser `src/styles.scss`.

2. configuración de PostCSS
suele llamarse `postcss.config.mjs` o `postcss.config.js`
en la raíz del proyecto
Tailwind también acepta una configuración tipo `.postcssrc`
o incluso una clave `postcss` en package.json, según cómo esté montado el toolchain

src/styles.css
postcss.config.mjs
postcss.config.js
.postcssrc.*



# Tailwind en src/styles.css

1. src/styles.css

```
@import 'tailwindcss';
```

cargar Tailwind v4.
al importar Tailwind también entra Preflight
su capa de estilos base/reset.

No necesitamos agregar un @tailwind base
como se hacía en versiones anteriores.


2. portfolio/.postcssrc.json (root)

@tailwindcss/postcss

```
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

Plugin que permite que PostCSS procese Tailwind v4.


Ej: capa de estilos

```
src/styles.css
      │
      ├── Tailwind
      │     ├── theme
      │     ├── Preflight
      │     └── utilities
      │
      └── nuestros estilos globales
```

Contenido de src/styles

Responsabilidades:

```
styles.css
│
├── @import "tailwindcss";
│
├── tokens/theme      ← colores, tipografía, etc.
│
└── base global       ← body, html, selección, etc.
```

Componentes:

```
PortfolioLayoutComponent
HeroSectionComponent
ProjectsSectionComponent
...
        │
        └── clases/utilidades Tailwind
```

el dominio y la aplicación no saben nada de Tailwind
Tailwind queda confinado a presentación/estilos.



## Definir: Qué queremos que sea global y qué no.

### Ej Global

fuente principal
body background
color de texto
color-scheme
comportamiento mínimo de html/body
tokens de color
tokens de tipografía


### Componentes

padding
flex/grid
tamaños
bordes
sombras
estados hover/focus
responsive
colores específicos de cada componente


## Guía

verificar el pipeline de estilos
antes de diseñar nada
confirmamos que Tailwind realmente está entrando por src/styles.css

utilidad mínima ya se refleja en pantalla.

Después de eso, seguimos con:

base global,
layout estructural,
tokens,
y al final modo claro/oscuro

probar una clase muy simple en un componente o en app.html,

```
// src/app/app.html
<div class="min-h-screen bg-slate-950 text-white">
  <app-portfolio-page />
</div>
```

Probar:

que Tailwind esté llegando al DOM;
que las utilidades min-h-screen, bg-slate-950 y text-white se apliquen;
que no haya conflicto con el CSS global

Si esto se ve aplicado correctamente
sabemos que el pipeline de Tailwind está vivo

```
Tailwind v4
   ↓
.postcssrc.json
   ↓
PostCSS
   ↓
src/styles.css
   ↓
Angular
   ↓
componente
   ↓
clases Tailwind
```


# 1. Base global
 
1. Fondo y texto
La página completa debe tener un fondo consistente y un color de texto legible
Eso crea la sensación inmediata de sistema visual unificado.

2. Tipografía base
Elegir una familia tipográfica principal, el tamaño base y la altura de línea para que todo el contenido tenga una lectura cómoda
El portfolio vive mucho de texto, así que esto pesa bastante.

3. Ancho de lectura
Definir un contenedor general o una lógica de max-width para que las líneas no se vuelvan demasiado largas en pantallas grandes
Esto ayuda mucho a Hero, About y Contact

4. Ritmo vertical
Establecer una escala de separación coherente entre secciones, títulos, párrafos y bloques interno
Un portfolio se siente más limpio cuando todo respira de manera uniforme.

5. Interacción mínima
Dejar definidos estado de foco, hover, enlaces y scroll suave
Son detalles pequeños, pero hacen que la experiencia se sienta pulida

6. Base para el modo visual
Preparar desde el inicio los colores base que después podrán adaptarse a claro/oscuro
No hace falta diseñar ambos modos todavía; solo dejar el terreno listo


la base global de un portfolio no debería “decorar” mucho
##### sino fijar legibilidad, ritmo, proporción y coherencia
Después, cada sección toma esa base y la especializa


### Código base global

dejar la base global mínima en src/styles.css
aprovechando que Tailwind ya trae Preflight como reset/base automática
Tailwind documenta que Preflight se inyecta en la capa base al importar tailwindcss
##### y que los estilos base personalizados se agregan en @layer base

```
@import 'tailwindcss';

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply min-h-screen bg-slate-50 text-slate-900 font-sans antialiased;
  }

  a {
    @apply text-inherit no-underline;
  }

  ::selection {
    @apply bg-slate-900 text-slate-50;
  }
}
```

Esto fija solo lo esencial:

html con scroll suave;
body con altura mínima de pantalla;
fondo y texto base consistentes;
tipografía base;
enlaces sin estilo por defecto;
selección de texto coherente con la paleta

##### Tailwind recomienda justamente reservar @layer base para estilos globales por defecto
mientras que las utilidades siguen quedando para los componentes y secciones.



# 2. Estructura visual al PortfolioLayoutComponent

##### Sin entrar todavía en detalles finos de cada sección.

centrar el contenido,
limitar el ancho,
separar header, main y footer,
y dejar el layout listo para que las secciones usen el espacio.

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { PortfolioNavItem } from '../models/portfolio-nav-item.model';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-8 lg:px-10"
      id="top"
    >
      <header class="mb-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <a
          class="text-lg font-semibold tracking-tight text-slate-950 dark:text-slate-50"
          href="#top"
        >
          {{ brand }}
        </a>

        <nav class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600 dark:text-slate-300" aria-label="Navegación principal">
          @for (item of navItems; track item.href) {
            <a
              class="transition-colors hover:text-slate-950 dark:hover:text-slate-50"
              [href]="item.href"
            >
              {{ item.label }}
            </a>
          }
        </nav>
      </header>

      <main class="flex-1 space-y-24">
        <ng-content />
      </main>

      <footer class="mt-16 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <p>{{ footerText }}</p>
      </footer>
    </div>
  `,
})
export class PortfolioLayoutComponent {
  @Input({ required: true })
  brand!: string;

  @Input({ required: true })
  navItems!: readonly PortfolioNavItem[];

  @Input({ required: true })
  footerText!: string;
}
```



# 3. Estilo al Hero

jerarquía tipográfica y espaciamiento acorde al portfolio.

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '@domain/profile.entity';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="top" class="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <div class="max-w-3xl">
        <p class="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
          Hola, soy
        </p>

        <h1 class="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-slate-50">
          {{ profile.fullName }}
        </h1>

        <p class="mt-4 text-xl font-medium text-slate-700 sm:text-2xl dark:text-slate-300">
          {{ profile.role }}
        </p>

        <p class="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
          {{ profile.headline }}
        </p>

        <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
          {{ profile.summary }}
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            class="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Ver proyectos
          </a>

          <a
            href="#contact"
            class="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-50"
          >
            Contactarme
          </a>
        </div>
      </div>
    </section>
  `,
})
export class HeroSectionComponent {
  @Input({ required: true }) profile!: Profile;
}
```

deja el Hero con la función correcta
título fuerte, subtítulo claro, texto legible y dos acciones visibles



# 4. About

mantener el mismo lenguaje visual pero con una composición más simple
más sobrio y legible que el Hero
dentro del mismo lenguaje visual.

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '@domain/profile.entity';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <div class="max-w-3xl">
        <h2 class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl dark:text-slate-50">
          Sobre mí
        </h2>

        <div class="mt-6 space-y-4 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
          <p>
            {{ profile.summary }}
          </p>
        </div>
      </div>
    </section>
  `,
})
export class AboutSectionComponent {
  @Input({ required: true }) profile!: Profile;
}
```



# 5. Projects

para darle una presentación más visual a la lista de trabajos
con una presentación en tarjetas
manteniendo la estructura clara y responsiva que Tailwind recomienda componer con utilidades pequeñas en el markup

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Project } from '@domain/project.entity';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <div class="max-w-5xl">
        <h2 class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl dark:text-slate-50">
          Proyectos
        </h2>

        <div class="mt-8 grid gap-6 md:grid-cols-2">
          @for (project of projects; track project.id) {
            <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <h3 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                {{ project.title }}
              </h3>

              <p class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {{ project.description }}
              </p>

              <p class="mt-4 text-sm text-slate-500 dark:text-slate-500">
                {{ project.technologies.join(' · ') }}
              </p>

              <div class="mt-6 flex flex-wrap gap-3">
                @if (project.repository) {
                  <a
                    [href]="project.repository.url"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-200"
                  >
                    {{ project.repository.label }}
                  </a>
                }

                @if (project.demo) {
                  <a
                    [href]="project.demo.url"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-50"
                  >
                    {{ project.demo.label }}
                  </a>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsSectionComponent {
  @Input({ required: true })
  projects!: readonly Project[];
}
```


# 6. Skills


Skills sea más compacta que Projects
agrupamos visualmente las habilidades y usamos pequeños elementos tipo "chip"
sin introducir todavía componentes reutilizables.

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Skill } from '@domain/skill.entity';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <div class="max-w-5xl">
        <h2
          class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl dark:text-slate-50"
        >
          Habilidades
        </h2>

        <div class="mt-8 flex flex-wrap gap-3">
          @for (skill of skills; track skill.id) {
            <span
              class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              {{ skill.name }}
            </span>
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsSectionComponent {
  @Input({ required: true })
  skills!: readonly Skill[];
}
```

Mantenemos el mismo lenguaje que Projects:

scroll-mt-24 → navegación interna cómoda.
py-12 sm:py-16 lg:py-20 → mismo ritmo vertical.
max-w-5xl → misma anchura que Projects.
text-2xl sm:text-3xl → misma jerarquía de títulos.
dark:* → dejamos preparado el componente para el futuro modo oscuro.
flex flex-wrap gap-3 → las habilidades se adaptan naturalmente al ancho disponible.
rounded-full → las presentamos como chips/tags

#### Y, deliberadamente, no estamos utilizando todavía category ni level
##### Primero conseguimos una representación visual sencilla y correcta de la entidad Skill
Después podremos decidir si realmente queremos agrupar por categoría o representar niveles.



# 7. ExperienceSectionComponent

mantendría una estructura tipo timeline simplificada
empresa, puesto, período, resumen y logros
Sin introducir todavía componentes adicionales

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Experience } from '@domain/experience.entity';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="experience"
      class="scroll-mt-24 py-12 sm:py-16 lg:py-20"
    >
      <div class="max-w-5xl">
        <h2
          class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl dark:text-slate-50"
        >
          Experiencia
        </h2>

        <div class="mt-8 space-y-8">
          @for (experience of experiences; track experience.id) {
            <article
              class="border-l-2 border-slate-200 pl-6 dark:border-slate-800"
            >
              <div
                class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <div>
                  <h3
                    class="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-50"
                  >
                    {{ experience.role }}
                  </h3>

                  <p
                    class="mt-1 text-base font-medium text-slate-700 dark:text-slate-300"
                  >
                    {{ experience.company }}
                  </p>
                </div>

                <p
                  class="text-sm text-slate-500 dark:text-slate-400"
                >
                  {{ experience.startDate }} —
                  {{ experience.endDate ?? 'Actualidad' }}
                </p>
              </div>

              <p
                class="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-400"
              >
                {{ experience.summary }}
              </p>

              @if (experience.achievements?.length) {
                <ul
                  class="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 dark:text-slate-400"
                >
                  @for (
                    achievement of experience.achievements;
                    track achievement
                  ) {
                    <li>{{ achievement }}</li>
                  }
                </ul>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class ExperienceSectionComponent {
  @Input({ required: true })
  experiences!: readonly Experience[];
}
```


sigue el lenguaje que ya establecimos:

scroll-mt-24 → navegación interna.
py-12 sm:py-16 lg:py-20 → ritmo vertical consistente.
max-w-5xl → misma anchura que Projects y Skills.
space-y-8 → separación uniforme entre experiencias.
border-l-2 → una línea vertical sencilla para dar sensación de timeline.
sm:flex-row → en móvil la información se apila; en pantallas mayores se distribuye horizontalmente.
experience.endDate ?? 'Actualidad' → aprovechamos que endDate puede ser null/undefined.
@if → los logros solo aparecen cuando existen

Y seguimos sin introducir lógica nueva: el componente únicamente presenta Experience, que es exactamente lo que queremos en esta etapa



# 8. EducationSectionComponent

mantendría la misma lógica visual de Experience, pero más simple: institución, título, período y descripción opcional.

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Education } from '@domain/education.entity';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="education"
      class="scroll-mt-24 py-12 sm:py-16 lg:py-20"
    >
      <div class="max-w-5xl">
        <h2
          class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl dark:text-slate-50"
        >
          Educación
        </h2>

        <div class="mt-8 space-y-8">
          @for (education of educationList; track education.id) {
            <article
              class="border-l-2 border-slate-200 pl-6 dark:border-slate-800"
            >
              <div
                class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <div>
                  <h3
                    class="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-50"
                  >
                    {{ education.degree }}
                  </h3>

                  <p
                    class="mt-1 text-base font-medium text-slate-700 dark:text-slate-300"
                  >
                    {{ education.institution }}
                  </p>
                </div>

                <p
                  class="text-sm text-slate-500 dark:text-slate-400"
                >
                  {{ education.startDate }} —
                  {{ education.endDate ?? 'Actualidad' }}
                </p>
              </div>

              @if (education.summary) {
                <p
                  class="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-400"
                >
                  {{ education.summary }}
                </p>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class EducationSectionComponent {
  @Input({ required: true })
  educationList!: readonly Education[];
}

```


##### decisión importante

Estamos reutilizando el lenguaje visual, no el código de ExperienceSectionComponent

misma jerarquía de título;
mismo max-w-5xl;
mismo ritmo vertical;
misma línea lateral;
mismo tratamiento de fechas;
descripción opcional

Pero no abstraería todavía ese patrón en un componente genérico

Tenemos solo dos casos y estamos todavía construyendo el sistema visual
Mantenerlos explícitos es más KISS.



# 9. ContactSectionComponent

mismo lenguaje visual que venimos usando: simple, legible y sin meter lógica extra

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Contact } from '@domain/contact.entity';
import { SocialLink } from '@domain/social-link.entity';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="contact"
      class="scroll-mt-24 py-12 sm:py-16 lg:py-20"
    >
      <div class="max-w-5xl">
        <h2
          class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl dark:text-slate-50"
        >
          Contacto
        </h2>

        <div
          class="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <p class="text-base leading-7 text-slate-600 dark:text-slate-400">
            <a
              class="font-medium text-slate-950 transition-colors hover:text-slate-700 dark:text-slate-50 dark:hover:text-slate-300"
              [href]="'mailto:' + contact.email"
            >
              {{ contact.email }}
            </a>
          </p>

          @if (contact.location) {
            <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {{ contact.location }}
            </p>
          }

          <p class="mt-4 text-sm font-medium text-slate-700 dark:text-slate-300">
            {{
              contact.availableForWork
                ? 'Disponible para nuevas oportunidades'
                : 'No disponible actualmente'
            }}
          </p>

          @if (socialLinks.length) {
            <div class="mt-6 flex flex-wrap gap-3">
              @for (link of socialLinks; track link.url) {
                <a
                  class="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-50"
                  [href]="link.url"
                  target="_blank"
                  rel="noreferrer"
                >
                  {{ link.label }}
                </a>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ContactSectionComponent {
  @Input({ required: true })
  contact!: Contact;

  @Input({ required: true })
  socialLinks!: readonly SocialLink[];
}
```

email ya funciona como contacto directo con mailto:.
La ubicación aparece solo si existe.
La disponibilidad se expresa de forma clara.
Los enlaces sociales se muestran como chips reutilizando el mismo estilo que Skills.



# Revisión Global

consistencia
entre todas las secciones, para ver si algún espaciado, ancho o jerarquía conviene unificar

### Anchos: si Hero usa max-w-3xl, Projects y demás usan una lógica coherente, no cada una una distinta sin motivo

### Espaciado vertical: que todas las secciones tengan el mismo ritmo (py-*, mt-*, space-y-*).

### Jerarquía tipográfica: que títulos, subtítulos y texto base mantengan una escala consistente.

### Tarjetas y bordes: que Projects, Contact y cualquier bloque similar usen radios, bordes y sombras parecidas

### Estados interactivos: links, botones y chips deben reaccionar con el mismo lenguaje visual

### Responsividad: que en móvil, tablet y desktop la composición siga siendo legible y no “rompa”.

### Semántica visual: que una sección importante se sienta importante, y una secundaria se sienta secundaria


La idea es detectar incoherencias como estas:

un título demasiado grande en una sección y pequeño en otra,
dos cards con radios distintos,
espacios verticales muy distintos entre secciones,
un botón principal que parece secundario en una sección,
o un ancho de lectura que cambia sin intención



# Tokens

#### Definir tokens de diseño en src/styles.css, usando @theme
##### los theme variables se declaran con @theme y
##### generan utilidades como bg-*, text-* o font-*;
deben definirse a nivel superior, no anidados

## main css

### Tokens base

```
@import 'tailwindcss';

@theme {
  --font-sans: Inter, ui-sans-serif, system-ui, sans-serif;

  --color-background: oklch(0.985 0.002 247.8);
  --color-surface: oklch(1 0 0);
  --color-text: oklch(0.145 0 0);
  --color-muted: oklch(0.446 0.03 256.8);
  --color-border: oklch(0.922 0.014 255.3);
  --color-accent: oklch(0.21 0.03 256.8);
}

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply min-h-screen bg-background text-text font-sans antialiased;
  }

  a {
    @apply text-inherit no-underline;
  }

  ::selection {
    @apply bg-accent text-surface;
  }
}

```



## 1. Tokens PortfolioLayoutComponent

text-slate-* pasa a text-text y text-muted.
el borde del footer pasa a border-border.
el layout ya empieza a hablar el lenguaje del sistema de tokens, no de colores fijos


## 2. Hero

text-slate-950  → text-text
text-slate-600  → text-muted
text-slate-500  → text-muted
bg-slate-950    → bg-accent
text-white     → text-surface
border-slate-* → border-border

ya no conoce los valores concretos de nuestra paleta.

##### !!! Eso será especialmente importante cuando implementemos light / dark
podremos cambiar los valores de los tokens y los componentes seguirán utilizando text-text, bg-accent, bg-surface, etc.


## 3. AboutSectionComponent

text-slate-950  → text-text
text-slate-600  → text-muted


## 4. ProjectsSectionComponent

tendremos que sustituir no solo texto y bordes, sino también el fondo de las tarjetas (surface).
las tarjetas utilizan background, border, texto y botones.

| Antes            | Ahora           |
| ---------------- | --------------- |
| `text-slate-950` | `text-text`     |
| `text-slate-600` | `text-muted`    |
| `text-slate-500` | `text-muted`    |
| `bg-white`       | `bg-surface`    |
| `border-slate-*` | `border-border` |
| `bg-slate-950`   | `bg-accent`     |
| `text-white`     | `text-surface`  |


## 5. SkillsSectionComponent

los chips pasan a utilizar surface, border y text/muted

text-slate-950 → text-text
text-slate-700 → text-muted
border-slate-* → border-border
bg-white       → bg-surface

decisión de diseño: usamos bg-surface aunque el chip sea pequeño
Así dejamos explícita la relación fondo de página → superficie elevada
igual que hicimos con las tarjetas de Projects.

Todavía no necesitamos accent para Skills
queremos reservarlo para acciones o elementos realmente destacados


## 6. ExperienceSectionComponent

text-slate-950 → text-text
text-slate-700 → text-muted
text-slate-600 → text-muted
text-slate-500 → text-muted
border-slate-* → border-border


## 7. EducationSectionComponent

text-slate-950  → text-text
text-slate-700  → text-muted
text-slate-600  → text-muted
text-slate-500  → text-muted
border-slate-* → border-border

Mismo patrón que en Experience:

Education
└── institución / título
    └── período
    └── descripción


## 8. ContactSectionComponent

##### tokens que definimos: text, muted, surface, border y accent.

background → fondo general
surface    → superficies/cards
text       → contenido principal
muted      → contenido secundario
border     → separadores y bordes
accent     → acciones principales

Contact no necesita accent todavía. No debemos forzar el uso de todos los tokens en todos los componentes; cada token debería tener una responsabilidad clara


# Revisión del main styles

Convertirlo en la capa global de base del sitio
no en un archivo para decorar componentes

En Tailwind, ese archivo suele ser donde importás tailwindcss, definís @theme para tokens, y agregás estilos base con @layer base
Tailwind documenta que @theme crea variables que además habilitan utilidades nuevas
y que @layer base es el lugar correcto para estilos por defecto de elementos HTML

1. Importación de Tailwind: confirmar que @import "tailwindcss"; esté primero
porque es la entrada del sistema de utilidades y de Preflight

2. Tokens del proyecto: decidir cuáles variables semánticas vas a tener, como fondo, superficie, texto, texto tenue, borde, acento y tipografía
En Tailwind v4 esos tokens se declaran con @theme.

3. Estilos base globales: definir solo lo mínimo del sitio completo, como body, html, enlaces, selección de texto y comportamiento de scroll
Tailwind recomienda poner esos defaults en @layer base

4. Preparación para tema claro/oscuro: 
dejar listo el archivo para que después los tokens puedan cambiar entre light y dark, sin tocar cada componente
##### Tailwind soporta dark mode con la variante dark
##### y el modo manual puede activarse con una clase como dark en el árbol HTML

5. Nada de estilos de componentes ahí: styles.css
no debería contener reglas específicas de Hero, Projects o Contact
esas piezas deben vivir en sus componentes o, si hace falta, en clases utilitarias
Tailwind está pensado como framework utility-first, es decir, componiendo estilos en el markup con utilidades pequeñas



# Modo oscuro

#### Decirle a Tailwind que el variant dark: se activará por clase
en vez de depender automáticamente de prefers-color-scheme

Tailwind documenta ese enfoque con `@custom-variant dark (&:where(.dark, .dark *));`
también indica que esta es la base para luego sincronizar la clase dark desde JavaScript
normalmente con localStorage y matchMedia().

```
@import 'tailwindcss';

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --font-sans: Inter, ui-sans-serif, system-ui, sans-serif;

  --color-background: oklch(0.985 0.002 247.8);
  --color-surface: oklch(1 0 0);
  --color-text: oklch(0.145 0 0);
  --color-muted: oklch(0.446 0.03 256.8);
  --color-border: oklch(0.922 0.014 255.3);
  --color-accent: oklch(0.21 0.03 256.8);
}

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply min-h-screen bg-background text-text font-sans antialiased;
  }

  a {
    @apply text-inherit no-underline;
  }

  ::selection {
    @apply bg-accent text-surface;
  }
}
```

##### !!! Ahora dark:* queda listo para funcionar cuando más adelante pongamos la clase dark en el árbol HTML
Tailwind describe exactamente ese patrón como la forma de activar el modo oscuro de manera manual


## 1. Servicio: Quitar o aplicar clase dark en html

Servicio de tema:
decidir si la página debe tener la clase dark en <html>,
usando la preferencia guardada o la del sistema cuando el modo sea system

#### Tailwind recomienda activar dark mode mediante una clase en el árbol HTML
##### y sincronizar la preferencia de usuario
##### mientras que localStorage persiste entre sesiones
##### y matchMedia() permite detectar prefers-color-scheme

```
// src/app/presentation/services/theme.service.ts

import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'portfolio-theme';

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {}

  init(): void {
    this.apply(this.getStoredMode());
  }

  setMode(mode: ThemeMode): void {
    this.saveMode(mode);
    this.apply(mode);
  }

  getMode(): ThemeMode {
    return this.getStoredMode();
  }

  private apply(mode: ThemeMode): void {
    const isDark = this.resolveIsDark(mode);

    this.document.documentElement.classList.toggle('dark', isDark);
    this.document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  }

  private resolveIsDark(mode: ThemeMode): boolean {
    if (mode === 'light') return false;
    if (mode === 'dark') return true;

    return this.prefersDarkScheme();
  }

  private prefersDarkScheme(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private getStoredMode(): ThemeMode {
    if (!isPlatformBrowser(this.platformId)) {
      return 'system';
    }

    const value = window.localStorage.getItem(this.storageKey);
    return value === 'light' || value === 'dark' || value === 'system'
      ? value
      : 'system';
  }

  private saveMode(mode: ThemeMode): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.localStorage.setItem(this.storageKey, mode);
  }
}
```

Guarda la preferencia en localStorage.
Si el modo es system, consulta matchMedia('(prefers-color-scheme: dark)').
Añade o quita la clase dark en <html>.
Ajusta color-scheme para que la UI nativa acompañe el tema activo.

MDN documenta que localStorage persiste entre sesiones
que matchMedia() permite detectar cambios de media queries
que color-scheme afecta la apariencia nativa del navegador


## 2. Inicializar servicio

inicializar el tema al arrancar la app
##### la clase dark se aplique desde el bootstrap y no después del primer render

Angular recomienda provideAppInitializer()
para este tipo de inicialización temprana
señala que APP_INITIALIZER quedó deprecado

```
// src/app/app.config.ts

import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideAppInitializer,
  inject,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { routes } from './app.routes';
import { PORTFOLIO_CONTENT_PORT } from '@application/ports/portfolio-content.port';
import { JsonPortfolioContentAdapter } from '@infrastructure/adapters/json-portfolio-content.adapter';
import { ThemeService } from './presentation/services/theme.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideAppInitializer(() => {
      inject(ThemeService).init();
    }),
    {
      provide: PORTFOLIO_CONTENT_PORT,
      useClass: JsonPortfolioContentAdapter,
    },
  ],
};
```


Ejecuta ThemeService.init() durante el arranque de la aplicación.
Deja preparada la clase dark antes de que el usuario interactúe con la UI.
Encaja con el patrón de bootstrap moderno de Angular, donde bootstrapApplication() arranca la app y los initializers se ejecutan durante esa fase


## 3. Lógica de respuesta en system

Agregar la lógica de respuesta al cambio del sistema cuando el modo esté en system,
##### !!! para que el tema se actualice si el usuario cambia la preferencia del sistema mientras la app está abierta
##### matchMedia() es la API estándar para observar prefers-color-scheme

#### servicio escuche cambios del sistema cuando el modo activo sea system. matchMedia() devuelve un MediaQueryList que se puede observar
##### para detectar cambios en el estado de la media query a lo largo del tiempo

```
// src/app/presentation/services/theme.service.ts

import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'portfolio-theme';
  private mediaQueryList?: MediaQueryList;
  private readonly onSystemThemeChange = (event: MediaQueryListEvent) => {
    const storedMode = this.getStoredMode();

    if (storedMode === 'system') {
      this.applyTheme(event.matches ? 'dark' : 'light');
    }
  };

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {}

  init(): void {
    const mode = this.getStoredMode();
    this.applyMode(mode);
    this.syncSystemListener(mode);
  }

  setMode(mode: ThemeMode): void {
    this.saveMode(mode);
    this.applyMode(mode);
    this.syncSystemListener(mode);
  }

  getMode(): ThemeMode {
    return this.getStoredMode();
  }

  private applyMode(mode: ThemeMode): void {
    if (mode === 'system') {
      this.applyTheme(this.prefersDarkScheme() ? 'dark' : 'light');
      return;
    }

    this.applyTheme(mode);
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    this.document.documentElement.classList.toggle('dark', theme === 'dark');
    this.document.documentElement.style.colorScheme = theme;
  }

  private syncSystemListener(mode: ThemeMode): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.detachSystemListener();

    if (mode !== 'system') {
      return;
    }

    this.mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    this.mediaQueryList.addEventListener('change', this.onSystemThemeChange);
  }

  private detachSystemListener(): void {
    if (!this.mediaQueryList) {
      return;
    }

    this.mediaQueryList.removeEventListener('change', this.onSystemThemeChange);
    this.mediaQueryList = undefined;
  }

  private prefersDarkScheme(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private getStoredMode(): ThemeMode {
    if (!isPlatformBrowser(this.platformId)) {
      return 'system';
    }

    const value = window.localStorage.getItem(this.storageKey);
    return value === 'light' || value === 'dark' || value === 'system'
      ? value
      : 'system';
  }

  private saveMode(mode: ThemeMode): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.localStorage.setItem(this.storageKey, mode);
  }
}
```

Si el usuario tiene system activado y cambia el tema del sistema operativo o del navegador
la app responde automáticamente

##### Tailwind usa la clase dark para aplicar variantes oscuras, así que mantener sincronizado el <html> con esa clase es la base correcta para que todo el resto funcione


## 4. Control visual para light, dark o system 

```
// src/app/presentation/components/theme-toggle.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';

import { ThemeMode, ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="inline-flex rounded-full border border-border bg-surface p-1 shadow-sm">
      <button
        type="button"
        class="rounded-full px-3 py-2 text-sm font-medium transition-colors"
        [class.bg-accent]="currentMode === 'light'"
        [class.text-surface]="currentMode === 'light'"
        [class.text-text]="currentMode !== 'light'"
        (click)="setMode('light')"
      >
        Claro
      </button>

      <button
        type="button"
        class="rounded-full px-3 py-2 text-sm font-medium transition-colors"
        [class.bg-accent]="currentMode === 'dark'"
        [class.text-surface]="currentMode === 'dark'"
        [class.text-text]="currentMode !== 'dark'"
        (click)="setMode('dark')"
      >
        Oscuro
      </button>

      <button
        type="button"
        class="rounded-full px-3 py-2 text-sm font-medium transition-colors"
        [class.bg-accent]="currentMode === 'system'"
        [class.text-surface]="currentMode === 'system'"
        [class.text-text]="currentMode !== 'system'"
        (click)="setMode('system')"
      >
        Sistema
      </button>
    </div>
  `,
})
export class ThemeToggleComponent implements OnInit {
  private readonly themeService = inject(ThemeService);

  currentMode: ThemeMode = 'system';

  ngOnInit(): void {
    this.currentMode = this.themeService.getMode();
  }

  setMode(mode: ThemeMode): void {
    this.currentMode = mode;
    this.themeService.setMode(mode);
  }
}
```

Muestra las 3 opciones.
Marca visualmente cuál está activa.
Llama al servicio para aplicar el tema.

Colocar este toggle en el PortfolioLayoutComponent
en el header, junto a la navegación.



## 5. ThemeToggleComponent en PortfolioLayoutComponent

Idealmente en el header junto al brand y la navegación

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { PortfolioNavItem } from '../models/portfolio-nav-item.model';
import { ThemeToggleComponent } from '../components/theme-toggle.component';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent],
  template: `
    <div
      id="top"
      class="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 text-text sm:px-8 lg:px-10"
    >
      <header class="mb-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex flex-col gap-4 sm:gap-3">
          <a
            class="text-lg font-semibold tracking-tight text-text"
            href="#top"
          >
            {{ brand }}
          </a>

          <nav
            class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted"
            aria-label="Navegación principal"
          >
            @for (item of navItems; track item.href) {
              <a
                class="transition-colors hover:text-text"
                [href]="item.href"
              >
                {{ item.label }}
              </a>
            }
          </nav>
        </div>

        <app-theme-toggle />
      </header>

      <main class="flex-1 space-y-24">
        <ng-content />
      </main>

      <footer class="mt-16 border-t border-border pt-6 text-sm text-muted">
        <p>{{ footerText }}</p>
      </footer>
    </div>
  `,
})
export class PortfolioLayoutComponent {
  @Input({ required: true })
  brand!: string;

  @Input({ required: true })
  navItems!: readonly PortfolioNavItem[];

  @Input({ required: true })
  footerText!: string;
}
```


# Revision de theme

comprobar que las cinco piezas del flujo estén alineadas
leer la preferencia guardada
resolver system con matchMedia('(prefers-color-scheme: dark)'),
aplicar o quitar la clase dark en <html>
actualizar color-scheme
arrancar con provideAppInitializer() para que el primer render ya salga con el tema correcto

localStorage guarda solo valores válidos (light, dark, system)?
cuando el modo es system, la app sigue el cambio del sistema mientras está abierta?
html recibe siempre la clase dark correcta?
color-scheme acompaña el modo activo para que controles nativos y scrollbars no desentonen?

parte visual del toggle:
muestre claramente cuál modo está activo
el estado inicial coincida con la preferencia real;
que no haya una discrepancia entre lo que ves en pantalla y lo que quedó persistido

provideAppInitializer() es precisamente la pieza de Angular pensada para ejecutar esa inicialización al arrancar la app



# Revisión del Toggle

Componente de UI

Estado activo:
Claro, Oscuro o Sistema debe distinguirse claramente.
El estado activo debería usar accent.
Los inactivos deberían usar text/muted

Contraste:
Texto y fondo deben seguir siendo legibles en ambos temas.
No queremos depender de text-white, bg-black, etc.; usamos nuestros tokens

Hover y focus:
Hover debería proporcionar feedback sin cambiar excesivamente el componente.
focus-visible debería mostrar un indicador claro para navegación con teclado

Accesibilidad:
Son botones, así que button es correcto.
Conviene indicar cuál opción está seleccionada con aria-pressed.
El usuario debería poder recorrerlos con teclado

Forma y espaciado:
El contenedor, los botones, padding, gap y rounded-full deberían seguir el lenguaje visual del portfolio.
No debería parecer un componente aislado de otra aplicación

Responsive:
En desktop puede convivir con la navegación.
En móvil no debería provocar que el header quede incómodo o demasiado ancho

Tokens:

ThemeToggle
├── background → surface
├── borde      → border
├── activo     → accent
├── texto      → text
└── secundario → muted

Modo oscuro:
toggle no debería necesitar una colección de dark:* para funcionar

Si nuestros tokens están correctamente definidos
cambiar los valores del tema debería cambiar su apariencia junto con el resto de la aplicación



# Accesibilidad para ThemeToggleComponent

estados visuales y accesibilidad más claros

```
// src/app/presentation/components/theme-toggle.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';

import { ThemeMode, ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="inline-flex rounded-full border border-border bg-surface p-1 shadow-sm"
      role="group"
      aria-label="Selector de tema"
    >
      <button
        type="button"
        class="rounded-full px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        [class.bg-accent]="currentMode === 'light'"
        [class.text-surface]="currentMode === 'light'"
        [class.text-text]="currentMode !== 'light'"
        [attr.aria-pressed]="currentMode === 'light'"
        (click)="setMode('light')"
      >
        Claro
      </button>

      <button
        type="button"
        class="rounded-full px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        [class.bg-accent]="currentMode === 'dark'"
        [class.text-surface]="currentMode === 'dark'"
        [class.text-text]="currentMode !== 'dark'"
        [attr.aria-pressed]="currentMode === 'dark'"
        (click)="setMode('dark')"
      >
        Oscuro
      </button>

      <button
        type="button"
        class="rounded-full px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        [class.bg-accent]="currentMode === 'system'"
        [class.text-surface]="currentMode === 'system'"
        [class.text-text]="currentMode !== 'system'"
        [attr.aria-pressed]="currentMode === 'system'"
        (click)="setMode('system')"
      >
        Sistema
      </button>
    </div>
  `,
})
export class ThemeToggleComponent implements OnInit {
  private readonly themeService = inject(ThemeService);

  currentMode: ThemeMode = 'system';

  ngOnInit(): void {
    this.currentMode = this.themeService.getMode();
  }

  setMode(mode: ThemeMode): void {
    this.currentMode = mode;
    this.themeService.setMode(mode);
  }
}

```

role="group" y aria-label ayudan a que el toggle se entienda como un conjunto.
aria-pressed comunica cuál opción está activa.
focus-visible:* deja una señal clara al navegar con teclado.
El componente ya queda visualmente consistente con los tokens del sistema



## Estado activo Toggle

##### diferenciar mejor el estado activo sin depender únicamente del color
Importante porque el estado seleccionado no debería comunicarse exclusivamente mediante bg-accent.


Modificamos únicamente las clases de los botones:

```
<button
  type="button"
  class="rounded-full px-3 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background"
  [class.bg-accent]="currentMode === 'light'"
  [class.text-surface]="currentMode === 'light'"
  [class.shadow-sm]="currentMode === 'light'"
  [class.text-muted]="currentMode !== 'light'"
  [class.hover:text-text]="currentMode !== 'light'"
  [attr.aria-pressed]="currentMode === 'light'"
  (click)="setMode('light')"
>
  Claro
</button>

<button
  type="button"
  class="rounded-full px-3 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background"
  [class.bg-accent]="currentMode === 'dark'"
  [class.text-surface]="currentMode === 'dark'"
  [class.shadow-sm]="currentMode === 'dark'"
  [class.text-muted]="currentMode !== 'dark'"
  [class.hover:text-text]="currentMode !== 'dark'"
  [attr.aria-pressed]="currentMode === 'dark'"
  (click)="setMode('dark')"
>
  Oscuro
</button>

<button
  type="button"
  class="rounded-full px-3 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background"
  [class.bg-accent]="currentMode === 'system'"
  [class.text-surface]="currentMode === 'system'"
  [class.shadow-sm]="currentMode === 'system'"
  [class.text-muted]="currentMode !== 'system'"
  [class.hover:text-text]="currentMode !== 'system'"
  [attr.aria-pressed]="currentMode === 'system'"
  (click)="setMode('system')"
>
  Sistema
</button>
```

Diferencia:

```
Activo
├── bg-accent
├── text-surface
└── shadow-sm

Inactivo
├── text-muted
└── hover:text-text
```

Así el usuario percibe el estado seleccionado mediante contraste + superficie + sombra, no solamente mediante color.



# Revisar tokens light y dark

##### comprobar que los tokens semánticos tengan dos valores coherentes
##### uno para light y otro para dark, y que el cambio de tema afecte solo a esos tokens, no a cada componente

`Fondo general`: que el color de la página en light y dark tenga contraste y no “salte” visualmente.
`Superficies`: cards, paneles y contenedores deben seguir diferenciándose del fondo en ambos modos.
`Texto principal`: debe seguir siendo el más legible en los dos temas.
`Texto secundario`: debe verse más suave, pero sin perder contraste.
`Bordes y separadores`: deben ser sutiles en ambos modos, sin desaparecer ni volverse demasiado fuertes.
`Accento / acción principal`: botones, selección o elementos destacados deben seguir teniendo suficiente presencia en light y dark.
`Estado de foco y hover`: deben verse claros en ambos temas.
`Consistencia semántica`: text, muted, surface, border, accent deberían conservar su función; solo cambian sus valores según el tema

La idea no es tener “dos diseños distintos”, sino un solo sistema visual con dos conjuntos de valores.
“¿Si cambio el modo, sigo viendo la misma jerarquía visual, pero con colores adaptados?”



# Tokens light y dark


## 1. tokens semánticos con valores para ambos temas

src/styles.css, reemplazaríamos la definición actual de colores por:

```
@import 'tailwindcss';

@custom-variant dark (&:where(.dark, .dark *));

:root {
  --theme-background: oklch(0.985 0.002 247.8);
  --theme-surface: oklch(1 0 0);
  --theme-text: oklch(0.145 0 0);
  --theme-muted: oklch(0.446 0.03 256.8);
  --theme-border: oklch(0.922 0.014 255.3);
  --theme-accent: oklch(0.21 0.03 256.8);
}

.dark {
  --theme-background: oklch(0.145 0 0);
  --theme-surface: oklch(0.21 0.02 256);
  --theme-text: oklch(0.985 0.002 247.8);
  --theme-muted: oklch(0.72 0.02 256);
  --theme-border: oklch(0.3 0.02 256);
  --theme-accent: oklch(0.92 0.002 247.8);
}

@theme inline {
  --font-sans: Inter, ui-sans-serif, system-ui, sans-serif;

  --color-background: var(--theme-background);
  --color-surface: var(--theme-surface);
  --color-text: var(--theme-text);
  --color-muted: var(--theme-muted);
  --color-border: var(--theme-border);
  --color-accent: var(--theme-accent);
}
```

### Antes:

```
@import 'tailwindcss';

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --font-sans: Inter, ui-sans-serif, system-ui, sans-serif;

  --color-background: oklch(0.985 0.002 247.8);
  --color-surface: oklch(1 0 0);
  --color-text: oklch(0.145 0 0);
  --color-muted: oklch(0.446 0.03 256.8);
  --color-border: oklch(0.922 0.014 255.3);
  --color-accent: oklch(0.21 0.03 256.8);
}

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply min-h-screen bg-background text-text font-sans antialiased;
  }

  a {
    @apply text-inherit no-underline;
  }

  ::selection {
    @apply bg-accent text-surface;
  }
}

```


### Base

```
@import 'tailwindcss';

@theme {
  --font-sans: Inter, ui-sans-serif, system-ui, sans-serif;

  --color-background: oklch(0.985 0.002 247.8);
  --color-surface: oklch(1 0 0);
  --color-text: oklch(0.145 0 0);
  --color-muted: oklch(0.446 0.03 256.8);
  --color-border: oklch(0.922 0.014 255.3);
  --color-accent: oklch(0.21 0.03 256.8);
}

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply min-h-screen bg-background text-text font-sans antialiased;
  }

  a {
    @apply text-inherit no-underline;
  }

  ::selection {
    @apply bg-accent text-surface;
  }
}

```


### Separación de tokens light, dark, component

```
:root
  └── valores light

.dark
  └── valores dark

@theme inline
  └── nombres que usan los componentes
```

Ej:
bg-background -> background del tema
No importa si estamos en light o dark.

text-text: texto principal del tema

##### Tailwind permite precisamente usar variables CSS como fuente de los tokens definidos en @theme inline
no cambiamos ningún componente.

Los componentes ya están usando:


```
bg-background
bg-surface
text-text
text-muted
border-border
bg-accent

```

Así que ahora debería cambiar únicamente la fuente de sus valores.

Además, esto nos permite mantener la separación que queríamos:

```
Light ─┐
       ├──> tokens semánticos ──> componentes
Dark ──┘
```

La siguiente pieza sería probar solamente que forzando .dark en <html> toda la aplicación cambia de apariencia
antes de añadir más lógica al ThemeService.



# Dark en html
Ahora que light y dark tienen sus propios valores
hagamos una sola mejora global: hacer que el propio html use el token de fondo

Esto evita que haya una zona del documento con un fondo distinto del body
especialmente durante scroll, viewport alto o determinadas condiciones de renderizado

### Fondo global de html

En src/styles.css, dentro de @layer base

```
@layer base {
  html {
    @apply bg-background;
    scroll-behavior: smooth;
  }

  body {
    @apply min-h-screen bg-background text-text font-sans antialiased;
  }

  a {
    @apply text-inherit no-underline;
  }

  ::selection {
    @apply bg-accent text-surface;
  }
}
```

Antes:

```
html {
  @apply bg-background;
}
```


La jerarquía queda:

```
html
└── background del tema

body
├── background del tema
└── text del tema

componentes
└── tokens semánticos

```

especialmente útil con nuestro modelo

```
:root  → tokens light
.dark  → tokens dark
```


##### Cuando ThemeService añade dark a <html>, html, body y todos los componentes consumen automáticamente los valores dark correspondientes



# Prueba resolución de tokens

prueba controlada de resolución de tokens
verificamos que .dark realmente cambia los valores antes de seguir modificando el ThemeService.

prueba temporal del modo oscuro:
En app.html, temporalmente podemos forzar la clase dark:

```
<html class="dark">
```

Pero como Angular normalmente no controla el <html> desde app.html
no vamos a modificar ese archivo


La forma más limpia para nuestra prueba es hacerlo temporalmente desde el ThemeService.
Dentro de init(), solo para esta prueba:


## Inyectar ThemeService al html

```
init(): void {
  this.document.documentElement.classList.add('dark');
}
```

Al arrancar la app:

```
ThemeService
      ↓
<html class="dark">
      ↓
.dark { --theme-* }
      ↓
@theme inline
      ↓
bg-background / text-text / bg-surface / ...
```

Toda la interfaz debería pasar automáticamente a los valores definidos dentro de:

```
.dark {
  ...
}
```

Sin modificar:

```
PortfolioLayoutComponent
HeroSectionComponent
ProjectsSectionComponent
etc.
```

Ese es precisamente el comportamiento que estamos buscando
los componentes consumen tokens
el tema cambia los valores de los tokens.


##### !!! Una vez comprobado, quitamos esa modificación temporal y volvemos a conectar init() con la resolución real light / dark / system.



# Retirar prueba: usar ThemeService.init()

nuevamente conectado a la resolución real de light, dark y system.

```
// src/app/presentation/services/theme.service.ts

import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'portfolio-theme';

  private mediaQueryList?: MediaQueryList;

  private readonly onSystemThemeChange = (
    event: MediaQueryListEvent,
  ): void => {
    if (this.getMode() !== 'system') {
      return;
    }

    this.applyTheme(event.matches ? 'dark' : 'light');
  };

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {}

  init(): void {
    const mode = this.getMode();

    this.applyMode(mode);
    this.syncSystemListener(mode);
  }

  setMode(mode: ThemeMode): void {
    this.saveMode(mode);
    this.applyMode(mode);
    this.syncSystemListener(mode);
  }

  getMode(): ThemeMode {
    if (!isPlatformBrowser(this.platformId)) {
      return 'system';
    }

    const storedMode = window.localStorage.getItem(this.storageKey);

    return this.isThemeMode(storedMode)
      ? storedMode
      : 'system';
  }

  private applyMode(mode: ThemeMode): void {
    if (mode === 'system') {
      const prefersDark = this.prefersDarkScheme();

      this.applyTheme(prefersDark ? 'dark' : 'light');

      return;
    }

    this.applyTheme(mode);
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    const root = this.document.documentElement;

    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
  }

  private syncSystemListener(mode: ThemeMode): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.detachSystemListener();

    if (mode !== 'system') {
      return;
    }

    this.mediaQueryList = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );

    this.mediaQueryList.addEventListener(
      'change',
      this.onSystemThemeChange,
    );
  }

  private detachSystemListener(): void {
    if (!this.mediaQueryList) {
      return;
    }

    this.mediaQueryList.removeEventListener(
      'change',
      this.onSystemThemeChange,
    );

    this.mediaQueryList = undefined;
  }

  private prefersDarkScheme(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }

    return window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
  }

  private saveMode(mode: ThemeMode): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.localStorage.setItem(
      this.storageKey,
      mode,
    );
  }

  private isThemeMode(
    value: string | null,
  ): value is ThemeMode {
    return (
      value === 'light' ||
      value === 'dark' ||
      value === 'system'
    );
  }
}
```

##### y solamente system instala el listener de prefers-color-scheme.




# Tokens adicionales

Además de:
background, surface, text, muted, border, accent.

Por responsabilidad

1. Fondos y superficies

background — fondo principal.
surface — cards, paneles, controles

surface-muted — una superficie ligeramente distinta de surface, útil para bloques secundarios, inputs o áreas destacadas.


2. Texto

tenemos:
text — texto principal.
muted — texto secundario.

text-inverse — texto destinado a utilizarse sobre un fondo accent o de alto contraste.
text-disabled — texto de elementos deshabilitados, solo cuando realmente aparezcan


3. Bordes

border — borde general.
border-strong — borde que necesita mayor énfasis.
border-focus — borde/anillo asociado al foco, si queremos separarlo del borde normal.


4. Acciones / acento

accent — acción o elemento principal.
accent-hover — estado hover de una acción principal.
accent-foreground o accent-text — color que se coloca sobre accent.

accent no necesariamente debería ser lo bastante claro/oscuro como para determinar automáticamente el color de texto que debe ir encima


5. Estados de interacción

UI más completa:

focus — indicador de foco.
selection — selección de texto, aunque podría reutilizar accent.
overlay — fondos semitransparentes para overlays/modales, si posteriormente los necesitamos


6. Estados semánticos

hasta que existan componentes que los necesiten, pero el sistema podría eventualmente tener:

success
warning
error
info

sus respectivos foregrounds:

success-foreground
warning-foreground
error-foreground
info-foreground


7. Tipografía

font-sans

font-display — si queremos una familia distinta para títulos.
font-mono — útil para fragmentos de código o tecnologías


8. Forma y elevación 

Estos no necesariamente necesitan convertirse en tokens personalizados todavía:
radius
shadow
spacing

Tailwind ya proporciona una escala bastante completa para ellos. Primero usaría esa escala y solo crearía tokens propios si el diseño empieza a necesitar valores específicos y repetidos
Tailwind considera este tipo de valores parte de sus theme variables/design tokens.




# theme aqua




# theme dark

1. lav surf: #514669; oklch(0.42 0.0586 298.28)
2. backg: #1E1E2E; oklch(0.2429 0.0304 283.91)
3. blue text: #5BA2F7; oklch(0.7036 0.1445 254.13)
4. text sky: #ABD2F3; oklch(0.8469 0.062 244.13)
5. text body: #B6C3ED; oklch(0.8213 0.0609 271.54)
6. lavand bold: #BEA4F7; oklch(0.7721 0.119 297.96)
7. gray: #6C6A7C; oklch(0.5325 0.028 290.51)



# Header component


## 1. component

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '@domain/profile.entity';
import { SocialLink } from '@domain/social-link.entity';

@Component({
  selector: 'app-portfolio-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="portfolio-header">
      <div class="portfolio-header__identity">
        @if (profile.avatarUrl) {
          <img
            class="portfolio-header__avatar"
            [src]="profile.avatarUrl"
            [alt]="profile.fullName"
          />
        }
      </div>

      @if (socialLinks.length) {
        <nav
          class="portfolio-header__social"
          aria-label="Social Networks"
        >
          @for (link of socialLinks; track link.platform) {
            <a
              class="portfolio-header__social-link"
              [href]="link.platform === 'email' ? 'mailto:' + link.url : link.url"
              target="_blank"
              rel="noreferrer"
            >
              {{ link.label }}
            </a>
          }
        </nav>
      }
    </header>
  `,
})
export class PortfolioHeaderComponent {
  @Input({ required: true })
  profile!: Profile;

  @Input({ required: true })
  socialLinks!: readonly SocialLink[];
}
```


## 2. layout

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '@domain/profile.entity';
import { SocialLink } from '@domain/social-link.entity';

import { PortfolioNavItem } from '../models/portfolio-nav-item.model';
import { PortfolioHeaderComponent } from '../components/portfolio-header.component';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [
    CommonModule,
    PortfolioHeaderComponent,
  ],
  template: `
    <div
      id="top"
      class="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 text-text sm:px-8 lg:px-10"
    >
      <app-portfolio-header
        [profile]="profile"
        [socialLinks]="socialLinks"
      />

      <nav
        class="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted"
        aria-label="Navegación principal"
      >
        @for (item of navItems; track item.href) {
          <a
            class="transition-colors hover:text-text"
            [href]="item.href"
          >
            {{ item.label }}
          </a>
        }
      </nav>

      <main class="flex-1 space-y-24">
        <ng-content />
      </main>

      <footer
        class="mt-16 border-t border-border pt-6 text-sm text-muted"
      >
        <p>{{ footerText }}</p>
      </footer>
    </div>
  `,
})
export class PortfolioLayoutComponent {
  @Input({ required: true })
  profile!: Profile;

  @Input({ required: true })
  socialLinks!: readonly SocialLink[];

  @Input({ required: true })
  navItems!: readonly PortfolioNavItem[];

  @Input({ required: true })
  footerText!: string;
}
```



## 3. Consum

```

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';

import { PortfolioContent } from '@application/ports/portfolio-content.port';
import { PortfolioFacade } from '../services/portfolio.facade';

import { PortfolioLayoutComponent } from '../layouts/portfolio-layout.component';
import { PortfolioNavItem } from '../models/portfolio-nav-item.model';

import { HeroSectionComponent } from '../sections/hero-section.component';
import { AboutSectionComponent } from '../sections/about-section.component';
import { ProjectsSectionComponent } from '../sections/projects-section.component';
import { SkillsSectionComponent } from '../sections/skills-section.component';
import { ExperienceSectionComponent } from '../sections/experience-section.component';
import { EducationSectionComponent } from '../sections/education-section.component';
import { ContactSectionComponent } from '../sections/contact-section.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    CommonModule,
    PortfolioLayoutComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    ContactSectionComponent,
  ],
  template: `
    @if (content(); as portfolio) {
      <app-portfolio-layout
        [profile]="portfolio.profile"
        [socialLinks]="portfolio.socialLinks"
        [navItems]="navItems"
        [footerText]="footerText"
      >
        <app-hero-section
          [profile]="portfolio.profile"
        />

        <app-about-section
          [profile]="portfolio.profile"
        />

        <app-projects-section
          [projects]="portfolio.projects"
        />

        <app-skills-section
          [skills]="portfolio.skills"
        />

        <app-experience-section
          [experiences]="portfolio.experiences"
        />

        <app-education-section
          [educationList]="portfolio.education"
        />

        <app-contact-section
          [contact]="portfolio.contact"
          [socialLinks]="portfolio.socialLinks"
        />
      </app-portfolio-layout>
    } @else {
      <p>Cargando portfolio...</p>
    }
  `,
})
export class PortfolioPageComponent implements OnInit {
  private readonly portfolioFacade = inject(PortfolioFacade);

  readonly content = signal<PortfolioContent | null>(null);

  readonly navItems: readonly PortfolioNavItem[] = [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Educación', href: '#education' },
    { label: 'Contacto', href: '#contact' },
  ];

  readonly footerText =
    '© 2026 Tu Nombre. Todos los derechos reservados.';

  async ngOnInit(): Promise<void> {
    const portfolio = await this.portfolioFacade.load();
    this.content.set(portfolio);
  }
}
```




# Componente Animación


## 1. Keyframe: Palabra a Palabra: Design 

Primera palabra: Design

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-word-animation',
  standalone: true,
  template: `
    <div>
      <span class="hero-word">
        Design
      </span>
    </div>
  `,
  styles: `
    @keyframes hero-word-fade {
      0% {
        opacity: 0;
        transform: translateY(8px);
      }

      20% {
        opacity: 1;
        transform: translateY(0);
      }

      80% {
        opacity: 1;
        transform: translateY(0);
      }

      100% {
        opacity: 0;
        transform: translateY(-8px);
      }
    }

    .hero-word {
      display: inline-block;
      animation: hero-word-fade 4s ease-in-out infinite;
    }
  `,
})
export class HeroWordAnimationComponent {}
```

0%    → invisible + abajo
20%   → aparece
80%   → permanece
100%  → desaparece + sube


La palabra:

       Design
          ↑
     aparece
          │
          │ permanece
          │
          ↓
     desaparece


Y el ciclo vuelve a empezar.



## 2. Array de Palabras

Todavía no vamos a cambiar automáticamente entre ellas
queremos que el componente conozca las seis palabras

```
export class HeroWordAnimationComponent {
  readonly words = [
    'Design',
    'Develop',
    'Create',
    'Passion',
    'Technology',
    'Peace',
  ];
}
```


Separando dos responsabilidades:

### Datos: words[]

### Animación: @keyframes hero-word-fade

##### Todavía no necesitamos un signal, un setInterval ni ningún otro mecanismo.
Design sigue apareciendo exactamente igual que antes
el siguiente paso será introducir el índice de la palabra actual para que podamos
pasar de: Design a Develop



## 3. Indice de palabra

Sin temporizador

Signal: el valor cambiará y necesitamos que Angular actualice automáticamente el template

currentIndex:

```
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero-word-animation',
  standalone: true,
  template: `
    <div>
      <span class="hero-word">
        {{ words[currentIndex()] }}
      </span>
    </div>
  `,
  styles: `
    @keyframes hero-word-fade {
      0% {
        opacity: 0;
        transform: translateY(8px);
      }

      20% {
        opacity: 1;
        transform: translateY(0);
      }

      80% {
        opacity: 1;
        transform: translateY(0);
      }

      100% {
        opacity: 0;
        transform: translateY(-8px);
      }
    }

    .hero-word {
      display: inline-block;
      animation: hero-word-fade 4s ease-in-out infinite;
    }
  `,
})
export class HeroWordAnimationComponent {
  readonly words = [
    'Design',
    'Develop',
    'Create',
    'Passion',
    'Technology',
    'Peace',
  ];

  readonly currentIndex = signal(0);
}
```



currentIndex = 0
        ↓
`words[0]`
        ↓
Design


índice permanece en 0, no cambiará



## 4. Indice automático a la palabra actual

mecanismo que hace avanzar currentIndex.
la animación debe repetirse cada 4 segundos
usamos un setInterval

##### Para evitar dejar un timer activo cuando Angular destruya el componente, lo limpiamos en ngOnDestroy

```
import { Component, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-hero-word-animation',
  standalone: true,
  template: `
    <div>
      <span class="hero-word">
        {{ words[currentIndex()] }}
      </span>
    </div>
  `,
  styles: `
    @keyframes hero-word-fade {
      0% {
        opacity: 0;
        transform: translateY(8px);
      }

      20% {
        opacity: 1;
        transform: translateY(0);
      }

      80% {
        opacity: 1;
        transform: translateY(0);
      }

      100% {
        opacity: 0;
        transform: translateY(-8px);
      }
    }

    .hero-word {
      display: inline-block;
      animation: hero-word-fade 4s ease-in-out infinite;
    }
  `,
})
export class HeroWordAnimationComponent implements OnDestroy {
  readonly words = [
    'Design',
    'Develop',
    'Create',
    'Passion',
    'Technology',
    'Peace',
  ];

  readonly currentIndex = signal(0);

  private readonly intervalId = window.setInterval(() => {
    this.currentIndex.update(
      (index) => (index + 1) % this.words.length,
    );
  }, 4000);

  ngOnDestroy(): void {
    window.clearInterval(this.intervalId);
  }
}
```

Ciclo:

0 → Design
1 → Develop
2 → Create
3 → Passion
4 → Technology
5 → Peace
0 → Design

(index + 1) % this.words.length:
hace que después de 5 volvamos automáticamente a 0.


### Detalle: cambio de palabra y el @keyframes tienen el mismo período de 4 segundos
pero no están realmente sincronizados por una señal compartida

Conviene controlar eso mejor para que la palabra nueva aparezca exactamente cuando la anterior terminó



## 5. Sincronizar signal: 

### Detalle con SSR: Acceso a window
no deberíamos acceder a window al inicializar una propiedad del componente
##### En servidor, window no existe.

```
  ngOnDestroy(): void {
    window.clearInterval(this.intervalId);
  }

```


### Temporizador compatible con SSR

```
import { isPlatformBrowser } from '@angular/common';
import { Component, OnDestroy, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';

@Component({
  selector: 'app-hero-word-animation',
  standalone: true,
  template: `
    <div>
      <span class="hero-word">
        {{ words[currentIndex()] }}
      </span>
    </div>
  `,
  styles: `
    @keyframes hero-word-fade {
      0% {
        opacity: 0;
        transform: translateY(8px);
      }

      20% {
        opacity: 1;
        transform: translateY(0);
      }

      80% {
        opacity: 1;
        transform: translateY(0);
      }

      100% {
        opacity: 0;
        transform: translateY(-8px);
      }
    }

    .hero-word {
      display: inline-block;
      animation: hero-word-fade 4s ease-in-out infinite;
    }
  `,
})
export class HeroWordAnimationComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);

  readonly words = [
    'Design',
    'Develop',
    'Create',
    'Passion',
    'Technology',
    'Peace',
  ];

  readonly currentIndex = signal(0);

  private intervalId: number | undefined;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.intervalId = window.setInterval(() => {
      this.currentIndex.update(
        (index) => (index + 1) % this.words.length,
      );
    }, 4000);
  }

  ngOnDestroy(): void {
    if (this.intervalId !== undefined) {
      window.clearInterval(this.intervalId);
    }
  }
}
```

Responsabilidad:

SSR
└── renderiza Design
    └── no intenta acceder a window

Browser
└── ngOnInit()
    └── inicia el intervalo


queremos que nuestro componente siga siendo seguro dentro de tu aplicación Angular con SSR.



## 6. Sincronzar palabra con el ciclo de @keyframes

#### Sin desfasaje entre texto y animación

##### En lugar de setInterval: CSS le diga a Angular cuándo terminó una animación



#### Código animationend: Quitamos el intervalo y usamos el evento

```
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero-word-animation',
  standalone: true,
  template: `
    <div>
      <span
        class="hero-word"
        (animationend)="nextWord()"
      >
        {{ words[currentIndex()] }}
      </span>
    </div>
  `,
  styles: `
    @keyframes hero-word-fade {
      0% {
        opacity: 0;
        transform: translateY(8px);
      }

      20% {
        opacity: 1;
        transform: translateY(0);
      }

      80% {
        opacity: 1;
        transform: translateY(0);
      }

      100% {
        opacity: 0;
        transform: translateY(-8px);
      }
    }

    .hero-word {
      display: inline-block;
      animation: hero-word-fade 4s ease-in-out;
    }
  `,
})
export class HeroWordAnimationComponent {
  readonly words = [
    'Design',
    'Develop',
    'Create',
    'Passion',
    'Technology',
    'Peace',
  ];

  readonly currentIndex = signal(0);

  nextWord(): void {
    this.currentIndex.update(
      (index) => (index + 1) % this.words.length,
    );
  }
}
```

Ya no tenemos: setInterval, ngOnDestroy

no existe ningún timer que limpiar

### Flujo/ciclo:

Design
   ↓
CSS @keyframes
   ↓
animationend
   ↓
currentIndex++
   ↓
Develop
   ↓
CSS @keyframes
   ↓
animationend
   ↓
Create


##### Ventaja: el cambio de palabra ocurre exactamente cuando termina la animación, independientemente de pequeñas diferencias de timing


### Consideración/Detalle: cambiar currentIndex
##### Angular mantiene el mismo <span>, por lo que la animación CSS no necesariamente vuelve a comenzar automáticamente



## 7. Nueva palabra, nuevo ciclo de keyframe

Hacer que @keyframes vuelva a empezar cada vez que cambia la palabra
#### Angular cree un nuevo <span> cuando cambia la palabra
##### Como el elemento DOM es nuevo, CSS vuelve a ejecutar automáticamente la animación

```
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-word-animation',
  standalone: true,
  template: `
    <div>
      @for (word of currentWord(); track word) {
        <span
          class="hero-word"
          (animationend)="nextWord()"
        >
          {{ word }}
        </span>
      }
    </div>
  `,
  styles: `
    @keyframes hero-word-fade {
      0% {
        opacity: 0;
        transform: translateY(8px);
      }

      20% {
        opacity: 1;
        transform: translateY(0);
      }

      80% {
        opacity: 1;
        transform: translateY(0);
      }

      100% {
        opacity: 0;
        transform: translateY(-8px);
      }
    }

    .hero-word {
      display: inline-block;
      animation: hero-word-fade 4s ease-in-out;
    }
  `,
})
export class HeroWordAnimationComponent {
  readonly words = [
    'Design',
    'Develop',
    'Create',
    'Passion',
    'Technology',
    'Peace',
  ];

  readonly currentIndex = signal(0);

  readonly currentWord = computed(() => [
    this.words[this.currentIndex()],
  ]);

  nextWord(): void {
    this.currentIndex.update(
      (index) => (index + 1) % this.words.length,
    );
  }
}
```


Flujo:

currentIndex = 0
       ↓
currentWord()
       ↓
`["Design"]`
       ↓
<span>Design</span>
       ↓
@keyframes


Cuando termina:

animationend
       ↓
nextWord()
       ↓
currentIndex = 1
       ↓
currentWord()
       ↓
`["Develop"]`


Como track word cambia de: Design a Develop
Por lo tanto: nuevo <span> -> animation empieza desde 0%

Arq:

`words[]`
   ↓
currentIndex
   ↓
currentWord()
   ↓
Angular crea <span>
   ↓
CSS @keyframes
   ↓
animationend
   ↓
currentIndex++



## 8. Contenedor estable

Ej: para Technology

Ahora que la palabra cambia y la animación se reinicia
##### darle al contenedor un ancho estable para que palabras de distinta longitud no provoquen saltos de layout
Technology es bastante más larga que X o Peace.

```
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-word-animation',
  standalone: true,
  template: `
    <div class="hero-word-container">
      @for (word of currentWord(); track currentIndex()) {
        <span
          class="hero-word"
          (animationend)="nextWord()"
        >
          {{ word }}
        </span>
      }
    </div>
  `,
  styles: `
    .hero-word-container {
      width: 12rem;
      height: 3rem;
    }

    @keyframes hero-word-fade {
      0% {
        opacity: 0;
        transform: translateY(8px);
      }

      20% {
        opacity: 1;
        transform: translateY(0);
      }

      80% {
        opacity: 1;
        transform: translateY(0);
      }

      100% {
        opacity: 0;
        transform: translateY(-8px);
      }
    }

    .hero-word {
      display: inline-block;
      animation: hero-word-fade 4s ease-in-out;
    }
  `,
})
export class HeroWordAnimationComponent {
  readonly words = [
    'Design',
    'Develop',
    'Create',
    'Passion',
    'Technology',
    'Peace',
  ];

  readonly currentIndex = signal(0);

  readonly currentWord = computed(() => [
    this.words[this.currentIndex()],
  ]);

  nextWord(): void {
    this.currentIndex.update(
      (index) => (index + 1) % this.words.length,
    );
  }
}
```


#### La palabra cambia, pero el contenedor no cambia de tamaño
Será importante cuando lo posicionemos a la derecha del Hero



## 9. CSS del contenedor

```
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-word-animation',
  standalone: true,
  template: `
    <div class="hero-word-container">
      @for (word of currentWord(); track currentIndex()) {
        <span
          class="hero-word"
          (animationend)="nextWord()"
        >
          {{ word }}
        </span>
      }
    </div>
  `,
  styles: `
    .hero-word-container {
      width: 12rem;
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #f5f4f7;
      border-radius: 0.75rem;
    }

    @keyframes hero-word-fade {
      0% {
        opacity: 0;
        transform: translateY(8px);
      }

      20% {
        opacity: 1;
        transform: translateY(0);
      }

      80% {
        opacity: 1;
        transform: translateY(0);
      }

      100% {
        opacity: 0;
        transform: translateY(-8px);
      }
    }

    .hero-word {
      display: inline-block;

      color: #9b8ac4;
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: 0.04em;

      animation: hero-word-fade 4s ease-in-out;
    }
  `,
})
export class HeroWordAnimationComponent {
  readonly words = [
    'Design',
    'Develop',
    'Create',
    'Passion',
    'Technology',
    'Peace',
  ];

  readonly currentIndex = signal(0);

  readonly currentWord = computed(() => [
    this.words[this.currentIndex()],
  ]);

  nextWord(): void {
    this.currentIndex.update(
      (index) => (index + 1) % this.words.length,
    );
  }
}
```



## 10. Componente escondido

separar contenedor de contenido

#### En lugar de que el contenedor determine todavía su posición
hacemos que simplemente sea una caja visual estable

```
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-word-animation',
  standalone: true,
  template: `
    <div class="hero-word-animation">
      @for (word of currentWord(); track currentIndex()) {
        <span
          class="hero-word"
          (animationend)="nextWord()"
        >
          {{ word }}
        </span>
      }
    </div>
  `,
  styles: `
    .hero-word-animation {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 12rem;
      height: 3rem;

      overflow: hidden;
      border-radius: 0.75rem;
      background-color: #f5f4f7;
    }

    @keyframes hero-word-fade {
      0% {
        opacity: 0;
        transform: translateY(8px);
      }

      20% {
        opacity: 1;
        transform: translateY(0);
      }

      80% {
        opacity: 1;
        transform: translateY(0);
      }

      100% {
        opacity: 0;
        transform: translateY(-8px);
      }
    }

    .hero-word {
      display: inline-block;

      color: #9b8ac4;
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: 0.04em;

      animation: hero-word-fade 4s ease-in-out;
    }
  `,
})
export class HeroWordAnimationComponent {
  readonly words = [
    'Design',
    'Develop',
    'Create',
    'Passion',
    'Technology',
    'Peace',
  ];

  readonly currentIndex = signal(0);

  readonly currentWord = computed(() => [
    this.words[this.currentIndex()],
  ]);

  nextWord(): void {
    this.currentIndex.update(
      (index) => (index + 1) % this.words.length,
    );
  }
}
```


overflow: hidden;
##### cuando la palabra entra desde translateY(8px) o sale hacia translateY(-8px), no se dibuja fuera de la superficie


Responsabilidad:

HeroWordAnimationComponent
├── controla la palabra actual
├── anima la transición
└── proporciona una superficie visual estable



## 11. Integración

Sin su posición a la derecha ni rehacer el layout del Hero

```
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '@domain/profile.entity';

import { HeroWordAnimationComponent } from '../components/hero-word-animation.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    CommonModule,
    HeroWordAnimationComponent,
  ],
  template: `
    <section
      id="hero"
      class="mx-auto max-w-2xl scroll-mt-20 pt-8"
    >
      <app-hero-word-animation />

      <p
        class="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted"
      >
        Hola, soy
      </p>

      <h1
        class="text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl"
      >
        {{ profile.fullName }}
      </h1>

      <p
        class="mt-4 text-xl font-medium text-muted sm:text-2xl"
      >
        {{ profile.role }}
      </p>

      <p
        class="mt-6 text-base leading-7 text-muted sm:text-lg"
      >
        {{ profile.headline }}
      </p>

      <p
        class="mt-4 text-base leading-7 text-muted"
      >
        {{ profile.summary }}
      </p>
    </section>
  `,
})
export class HeroSectionComponent {
  @Input({ required: true })
  profile!: Profile;
}
```



## 12. Ubicación de la animación

Cambiar el layout

Pasar de:

Hero
└── contenido
    └── animación arriba

a:
     
```
Hero
└── grid
    ├── contenido
    └── animación
```


A la derecha con grid

```

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '@domain/profile.entity';

import { HeroWordAnimationComponent } from '../components/hero-word-animation.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    CommonModule,
    HeroWordAnimationComponent,
  ],
  template: `
    <section
      id="hero"
      class="mx-auto max-w-5xl scroll-mt-20 pt-8"
    >
      <div class="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto]">
        <div>
          <p
            class="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted"
          >
            Hola, soy
          </p>

          <h1
            class="text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl"
          >
            {{ profile.fullName }}
          </h1>

          <p
            class="mt-4 text-xl font-medium text-muted sm:text-2xl"
          >
            {{ profile.role }}
          </p>

          <p
            class="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg"
          >
            {{ profile.headline }}
          </p>

          <p
            class="mt-4 max-w-2xl text-base leading-7 text-muted"
          >
            {{ profile.summary }}
          </p>
        </div>

        <app-hero-word-animation />
      </div>
    </section>
  `,
})
export class HeroSectionComponent {
  @Input({ required: true })
  profile!: Profile;
}
```


Pantallas pequeñas:
Contenido
   ↓
Animación


Desde md:
┌───────────────────────────────┬──────────────┐
│ contenido                     │ animación    │
│                               │              │
└───────────────────────────────┴──────────────┘


### Detalle

grid
→ activa CSS Grid

`md:grid-cols-[minmax(0,1fr)_auto]`
→ contenido flexible + animación con su ancho propio

items-center
→ centra verticalmente ambos bloques

gap-10
→ separación entre las dos columnas




# Testing


# Testing Capa Application


##### Puerto como PortfolioContentPort y un caso de uso como GetPortfolioContentUseCase

#### Probar reglas y orquestación de la aplicación sin depender de Angular, JSON, HTTP, filesystem ni una implementación concreta del puerto


1. Unit testing de use case

GetPortfolioContentUseCase
        ↓
PortfolioContentPort


Verificar:

ejecuta la operación correcta del puerto;
devuelve el resultado esperado;
propaga errores cuando corresponde;
no introduce transformaciones inesperadas;
no depende de detalles de Infrastructure

##### El test debería tratar al puerto como una dependencia externa.


2. Test double del puerto

PortfolioContentPort es una abstracción, no queremos utilizar JsonPortfolioContentAdapter en los tests del caso de uso.

Creamos conceptualmente un test double:

GetPortfolioContentUseCase
          │
          ▼
   PortfolioContentPort
          │
          ▼
      fake/mock

Existen varias variantes:

Stub → devuelve datos predeterminados.
Mock → permite verificar interacciones.
Spy → registra llamadas y argumentos.
Fake → implementación simplificada pero funcional

Si es simple, normalmente stub o spy es suficiente.


3. Verificación de interacción

Además de saber qué devuelve el caso de uso

preguntar:
¿El caso de uso realmente llamó al puerto?

execute()
   ↓
port.getPortfolioContent()

que se llamó;
cuántas veces;
con qué argumentos, si existieran

útil cuando el caso de uso contiene lógica de orquestación.


4. Test de contrato del puerto

Distinción importante
##### Un interface de TypeScript no tiene comportamiento en runtime, no tiene sentido “testear el interface” como si fuera una clase.

Puede comprobarse es el contrato que promete

PortfolioContentPort
├── método esperado
├── input esperado
└── output esperado


5. Test de comportamiento, no de implementación

#### Para Application conviene preguntar: “¿Qué comportamiento observable debe producir este caso de uso?”

conceptualmente:

##### 1. dado un puerto que devuelve PortfolioContent
##### 2. cuando ejecuto GetPortfolioContentUseCase
##### 3 entonces recibo ese PortfolioContent


6. Happy path

Es el escenario normal:

port → devuelve contenido válido
use case → devuelve contenido

Comprobar que:

el resultado llega correctamente;
no se pierde información;
la referencia/estructura es la esperada;
no se realizan transformaciones accidentales


7. Error path

Muy importante.

Simular:

port
 ↓
error

comprobar:

use case
 ↓
propaga / transforma correctamente el error


Hay que decidir primero el contrato de la Application:

¿propaga el error original?
¿lo traduce a un error de aplicación?
¿usa un resultado Success/Error?
¿reintenta?

El test debe reflejar ese contrato, no una decisión implícita


8. Input boundary testing

Si el caso de uso recibe parámetros, hay que probar límites:

válido
vacío
null/undefined, si el contrato lo permite
valores extremos
combinaciones inválidas

GetPortfolioContentUseCase quizá no tenga inputs, así que esta dimensión puede ser mínima


9. Invariantes

Técnica para Application es definir propiedades que siempre deben cumplirse

GetPortfolioContentUseCase
→ nunca devuelve undefined
→ siempre obtiene datos mediante el puerto

si esas son reglas del contrato.
Esto ayuda a que los tests documenten invariantes del sistema


10. Test de orquestación

Port A
   ↓
Port B
   ↓
transformación
   ↓
resultado

Los tests deben comprobar la secuencia y coordinación.
Esto es uno de los lugares donde los mocks/spies adquieren más valor.


11. Pureza de la Application

Propiedad arquitectónica importante:
caso de uso no debería tocar Infrastructure directamente

`GetPortfolioContentUseCase` no debería:

importar `fs`;
leer JSON;
usar `HttpClient`;
acceder a `localStorage`;
tocar `fetch`;
acceder directamente al DOM.

Esto no suele ser un "unit test" tradicional, sino una combinación de:

reglas de arquitectura;
lint;
dependency checks;
revisión estática.


12. Contract testing entre Application e Infrastructure

aparece una técnica más avanzada

PortfolioContentPort
        │
   contrato
        │
        ├── JsonPortfolioContentAdapter
        ├── ApiPortfolioContentAdapter
        └── ...

Los adapters pueden tener tests que garanticen que respetan el contrato que Application espera
Esto resulta útil cuando una interfaz tiene varias implementaciones.


13. Property-based testing

Técnica válida cuando existe lógica con muchas combinaciones de entrada

En vez de comprobar:

input A → output A
input B → output B

generás muchos inputs y verificás propiedades invariantes.

#### Para casos de uso con reglas complejas puede ser excelente.


14. Mutation testing

Técnica avanzada
Herramientas de mutation testing modifican artificialmente el código:

```
>
<
&&
||
!condition
```

comprueban si los tests detectan esos cambios.
Si una mutación sobrevive, suele indicar una suite insuficiente

Para el caso de uso actual probablemente sería excesivo, pero más adelante puede servir para medir la efectividad real de los tests


### Técnicas para un caso de uso

#### 1. GetPortfolioContentUseCase

##### Unit tests: happy path, error path, interacción con port, invariantes/contrato


#### 2. PortfolioContentPort

No testeamos el interface, testeamos: 

cada implementación del port
        ↓
cumple el contrato

1. GetPortfolioContentUseCase
   └── happy path

2. GetPortfolioContentUseCase
   └── interacción con PortfolioContentPort

3. GetPortfolioContentUseCase
   └── error path

4. Adapter que implementa PortfolioContentPort
   └── contrato real

5. Tests de arquitectura/dependencias

GetPortfolioContentUseCase, porque es la unidad más pequeña y nos permite establecer primero cómo queremos testear Application antes de incorporar Infrastructure



## Análisis de archivo portfolio-content.port.ts: Contrato

### 1. Contenido

1. PortfolioContent

`export interface PortfolioContent { ... }`

##### Contrato de tipos. TypeScript lo verifica durante compilación.

No tiene comportamiento en runtime, por lo que un test unitario como:
“PortfolioContent tiene profile, projects, skills, ...”

no aporta

#### !!! Lo correcto es que sus consumidores y, sobre todo, sus implementaciones se compilen contra ese contrato.


2. PortfolioContentPort

```
export interface PortfolioContentPort {
  getPortfolioContent(): Promise<PortfolioContent>;
}
```

abstracción que define:

cualquier implementación debe exponer getPortfolioContent()
y devolver Promise<PortfolioContent>.

No hay lógica que ejecutar
Por sí mismo, no tiene sentido escribir un unit test tradicional.


3. PORTFOLIO_CONTENT_PORT

```
export const PORTFOLIO_CONTENT_PORT =
  new InjectionToken<PortfolioContentPort>('PORTFOLIO_CONTENT_PORT');
```

Objeto real en runtime: el InjectionToken

Tampoco escribiría un test unitario solo para comprobar que el token existe
Sería probar una implementación trivial de Angular sin aportar mucho valor

##### merece probarse es que el sistema de inyección esté configurado correctamente


### 2. Testing

Funciona principalmente como contrato arquitectónico

La prueba real está en sus participantes:

PortfolioContentPort
        │
        ├── GetPortfolioContentUseCase
        │
        └── JsonPortfolioContentAdapter
  

GetPortfolioContentUseCase:

Aquí sí necesitamos tests.

Queremos comprobar que:

use case
   ↓
PortfolioContentPort
   ↓
PortfolioContent

verificar:
que llama al puerto;
que devuelve el contenido;
que maneja errores según el contrato;
que no depende de la implementación concreta

Sería el principal test de Application


Implementación concreta del puerto:

JsonPortfolioContentAdapter
        ↓
implements PortfolioContentPort

Necesitamos tests porque existe comportamiento real

comprobar:

que obtiene el JSON;
que lo interpreta correctamente;
que produce un `PortfolioContent` válido;
que transforma/normaliza los datos correctamente, si existe esa lógica;
que maneja errores de lectura/parsing

Eso pertenece a Infrastructure, no al puerto.


Configuración del InjectionToken

No crearía un portfolio-content.port.spec.ts únicamente para el token.

En su lugar, probaría la integración donde hacemos algo como:

PORTFOLIO_CONTENT_PORT
          ↓
JsonPortfolioContentAdapter


Es decir, un test de configuración/inyección puede comprobar que al pedir el token Angular entrega la implementación correcta.

Eso tiene mucho más valor que:
“PORTFOLIO_CONTENT_PORT está definido”.


#### PortfolioContent es un DTO de aplicación bastante rico

```
PortfolioContent
├── Profile
├── Project[]
├── Skill[]
├── Experience[]
├── Education[]
├── SocialLink[]
└── Contact
```



## Análisis de get-portfolio-content.use-case.ts

##### GetPortfolioContentUseCase contiene comportamiento real:

execute()
   ↓
portfolioContentPort.getPortfolioContent()
   ↓
Promise<PortfolioContent>

Su responsabilidad es pequeña, pero perfectamente testeable:
cuando se ejecuta el caso de uso, debe solicitar el contenido mediante PortfolioContentPort y devolver ese resultado

No necesitamos probar Angular, JSON ni Infrastructure para verificar eso


#### Estrategia testing: Queremos verificar el comportamiento observable:

Given:
  existe un PortfolioContentPort

When:
  execute() es llamado

Then:
  se solicita getPortfolioContent()
  y se devuelve el PortfolioContent recibido

Eso es un unit test del caso de uso.


#### Dependencia: el caso de uso depende de PortfolioContentPort

No queremos utilizar JsonPortfolioContentAdapter

##### Necesitamos un test double del puerto

Usaría principalmente un: Stub
Implementación controlada que simplemente devuelve un PortfolioContent conocido

GetPortfolioContentUseCase
          │
          ▼
  PortfolioContentPort
          │
          ▼
        Stub
          │
          ▼
    contenido conocido



#### Mock

No necesariamente.
También podemos usar un spy si queremos comprobar explícitamente la interacción:

¿execute()
  llamó a
getPortfolioContent()?

un spy tiene bastante sentido porque la principal responsabilidad del use case es precisamente delegar al puerto

probablemente utilizaría:
Stub + Spy

según el framework de testing podemos resolver ambas cosas con un único test double



### Casos de prueba mínimos

Para este caso de uso, no haría una batería enorme.

1. Caso 1 — devuelve el contenido

El puerto devuelve:
PortfolioContent

El use case debe devolver exactamente ese resultado.

port.getPortfolioContent()
        ↓
PortfolioContent
        ↓
execute()
        ↓
mismo resultado


2. Caso 2 — llama al puerto

comprobar que:
execute()
     ↓
getPortfolioContent()

se ejecuta

normalmente comprobaríamos:
llamado una vez
No porque "una vez" sea necesariamente una regla de negocio, sino porque el contrato actual del caso de uso consiste en delegar directamente esa operación.


3. Caso 3 — propaga un error

Simulamos:

PortfolioContentPort
       ↓
reject/error

y comprobamos qué hace execute().


En tu implementación actual:

`return this.portfolioContentPort.getPortfolioContent();`

no existe manejo del error.

Por tanto, el comportamiento esperado actualmente es:

```
port error
   ↓
use case error
```

el error se propaga.
Ese comportamiento conviene documentarlo mediante un test.



#### @Inject()


No directamente.
No necesitamos hacer un test que diga:

"Angular encontró PORTFOLIO_CONTENT_PORT".

Ese es un problema de Dependency Injection / wiring, no del comportamiento del caso de uso.

El unit test puede construir el caso de uso con nuestro test double directamente.

Después podemos tener otro test de integración para comprobar

PORTFOLIO_CONTENT_PORT
        ↓
Angular DI
        ↓
JsonPortfolioContentAdapter

Pero eso pertenece a otra categoría de testing.


#### Nivel de testing

GetPortfolioContentUseCase
        ↓
Unit Test
        ↓
test double del Port
        ↓
sin Infrastructure
sin JSON
sin HTTP
sin Angular TestBed



### Testing criticos

#### 1. Indispensable: execute() delega al puerto y devuelve su resultado.

La propiedad esencial del caso de uso es:

execute()
   ↓
portfolioContentPort.getPortfolioContent()
   ↓
PortfolioContent

El test debería demostrar ambas cosas:
getPortfolioContent() fue llamado.
execute() devuelve el PortfolioContent que entregó el puerto.



#### 2. Muy recomendable

error del puerto se propaga correctamente
Como el caso de uso no captura ni transforma errores:

Port
 ↓
error
 ↓
execute()
 ↓
mismo error

Documenta explícitamente el comportamiento actual



## Testing Application, caso de uso: get-portfolio-content.use-case.ts

```
import { describe, expect, it, vi } from 'vitest';

import {
  PortfolioContent,
  PortfolioContentPort,
} from '../ports/portfolio-content.port';

import { GetPortfolioContentUseCase } from './get-portfolio-content.use-case';

describe('GetPortfolioContentUseCase', () => {
  it('debería obtener el contenido a través del puerto', async () => {
    const portfolioContent = {} as PortfolioContent;

    const portfolioContentPort: PortfolioContentPort = {
      getPortfolioContent: vi.fn().mockResolvedValue(portfolioContent),
    };

    const useCase = new GetPortfolioContentUseCase(
      portfolioContentPort,
    );

    // La aserción la agregaremos en el siguiente paso.
  });
});
```

GetPortfolioContentUseCase
          │
          ▼
 PortfolioContentPort
          │
          ▼
       vi.fn()
          │
          ▼
 portfolioContent


vi.fn().mockResolvedValue(...) nos permite crear un test double controlado
del puerto sin involucrar JsonPortfolioContentAdapter, Angular DI ni el JSON real 


{} as PortfolioContent:
placeholder temporal para no construir todavía todo el objeto PortfolioContent.


### aserción crítica: execute() devuelve exactamente el PortfolioContent que entrega el puerto

Agregando:

```
const result = await useCase.execute();

expect(result).toBe(portfolioContent);

```

Resulta:

```
import { describe, expect, it, vi } from 'vitest';

import {
  PortfolioContent,
  PortfolioContentPort,
} from '../ports/portfolio-content.port';

import { GetPortfolioContentUseCase } from './get-portfolio-content.use-case';

describe('GetPortfolioContentUseCase', () => {
  it('debería obtener el contenido a través del puerto', async () => {
    const portfolioContent = {} as PortfolioContent;

    const portfolioContentPort: PortfolioContentPort = {
      getPortfolioContent: vi.fn().mockResolvedValue(portfolioContent),
    };

    const useCase = new GetPortfolioContentUseCase(
      portfolioContentPort,
    );

    const result = await useCase.execute();

    expect(result).toBe(portfolioContent);
  });
});
```

```
expect(result).toBe(portfolioContent);
```

comprueba que recibimos exactamente la misma referencia que el puerto resolvió

Todavía no estamos comprobando explícitamente que el puerto haya sido llamado


### segunda aserción crítica: comprobar que el caso de uso realmente llamó al puerto

reutilizar el mismo vi.fn()

```
const getPortfolioContent = vi.fn().mockResolvedValue(portfolioContent);

const portfolioContentPort: PortfolioContentPort = {
  getPortfolioContent,
};

const useCase = new GetPortfolioContentUseCase(
  portfolioContentPort,
);

const result = await useCase.execute();

expect(result).toBe(portfolioContent);
expect(getPortfolioContent).toHaveBeenCalledOnce();
```

Resulta:

```
import { describe, expect, it, vi } from 'vitest';

import {
  PortfolioContent,
  PortfolioContentPort,
} from '../ports/portfolio-content.port';

import { GetPortfolioContentUseCase } from './get-portfolio-content.use-case';

describe('GetPortfolioContentUseCase', () => {
  it('debería obtener el contenido a través del puerto', async () => {
    const portfolioContent = {} as PortfolioContent;

    const getPortfolioContent = vi.fn().mockResolvedValue(
      portfolioContent,
    );

    const portfolioContentPort: PortfolioContentPort = {
      getPortfolioContent,
    };

    const useCase = new GetPortfolioContentUseCase(
      portfolioContentPort,
    );

    const result = await useCase.execute();

    expect(result).toBe(portfolioContent);
    expect(getPortfolioContent).toHaveBeenCalledOnce();
  });
});
```

estamos verificando las dos propiedades esenciales de GetPortfolioContentUseCase:


execute()
   │
   ├── llama → getPortfolioContent()
   │
   └── devuelve → PortfolioContent



### PortfolioContent real de prueba en lugar de {}

dejar de usar {} as PortfolioContent y construir un objeto mínimo

mejora la calidad del test porque deja de “engañar” al compilador y representa realmente el contrato de PortfolioContent

```
Profile
Project
Skill
Experience
Education
SocialLink
Contact
```

no necesitamos datos realistas ni completos; solo los campos obligatorios de cada entidad

Imports de entidades

```
import { Profile } from '@domain/profile.entity';
import { Project } from '@domain/project.entity';
import { Skill } from '@domain/skill.entity';
import { Experience } from '@domain/experience.entity';
import { Education } from '@domain/education.entity';
import { SocialLink } from '@domain/social-link.entity';
import { Contact } from '@domain/contact.entity';
```


reemplazamos:

`const portfolioContent = {} as PortfolioContent;`



### Construiremos un único portfolioContent mínimo y reutilizable en el test:

campo
tipo
obligatorio / opcional

```
portfolioContent
├── profile
├── projects[]
├── skills[]
├── experiences[]
├── education[]
├── socialLinks[]
└── contact
```




# Testing Capa Infraestructure




# Testing Capa Presentation





# Cuestionario Testing


## 1. Técnicas para capa

marcando los elementos que tenemos

Qué tecnicas/conceptos se usan para testear la capa Application. Por ejemplo, tenemos un puerto (portfolio-content.port) y un caso de uso (get-portfolio-content.use-case).


## 2. Analisis archivo

analizar el otro archivo que tenemos en la capa 'application'.

Analicemos si es necesario que tenga testing.
De ser así, qué necesitaría?


## 3. Testing esencial/critico/indispensable para archivo



## 4. Código testing pieza a pieza

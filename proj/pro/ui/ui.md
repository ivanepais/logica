# CSS Modules

Permite escribir CSS que tiene un alcance local
una clase de CSS llamada .button en un archivo
ya no puede arruinar el diseño de un componente distinto

CSS Module es un archivo CSS donde todos los nombres de clases y de IDs tienen un ámbito local
al componente que los importa
sin tener que preocuparse por colisiones de nombre (CSS Global)

Cuando compilas tu proyecto, Webpack o Vite transforman esos nombres de clase sencillos en identificadores únicos

Ej:

1. Escribes `.error { color: red; }`.

2. Proceso: El compilador lo transforma en algo como `.Header_error__ax3j9`.

3. Resultado: Esa clase es única en toda tu aplicación
nunca chocará con otra clase .error de otro archivo.

### 1. Nombrar archivo correctamente

Debe terminar en `.module.css`.
Ej: `Card.module.css`.

```
/* Card.module.css */
.container {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.title {
  color: #333;
  font-size: 1.5rem;
}
```


### 2. Impórtalo como un objeto

En tu componente de React
Importas el estilo como si fuera un objeto de JavaScript.

```
import React from 'react';
import styles from './Card.module.css';

function Card() {
  return (
    // Accedes a las clases como propiedades del objeto 'styles'
    <div className={styles.container}>
      <h2 className={styles.title}>Hola, soy un CSS Module</h2>
    </div>
  );
}

export default Card;
```


### Clases Globales

Definir clase global dentro de un módulo
Ej: estilizar una librería externa

Usar `:global`:

```
/* Esto no se renombrará */
:global(.active) {
  background-color: blue;
}
```


## Prácticas 

La estructura y la forma en que nombras las cosas cobran mucha importancia

1. Nombramiento: CamelCase
En en CSS tradicional se usa kebab-case (.main-button)
en `CSS Modules`: `camelCase` (.mainButton).

Permite acceder a la clase en JavaScript usando la notación de punto:
`styles.mainButton`.

Más limpia que usar corchetes (styles['main-button']).

```
<button className={styles.mainButton}>Enviar</button>
```

2. Lógica de Clases Dinámicas (clsx)

Cuando un componente tiene múltiples estados
botón que puede ser `primary`, `disabled` o `large`
concatenar strings manualmente es caotico

Librerías como clsx o classnames para gestionar esto de forma limpia

```
import clsx from 'clsx';
import styles from './Button.module.css';

function Button({ isPrimary, isDisabled }) {
  return (
    <button className={clsx(styles.base, {
      [styles.primary]: isPrimary,
      [styles.disabled]: isDisabled
    })}>
      Click aquí
    </button>
  );
}
```

3. Composición de Clases con `composes`

composes es una característica de CSS Modules
permite heredar estilos de una clase a otra
dentro del mismo archivo o incluso desde archivos externos.

```
/* Button.module.css */
.base {
  padding: 10px 20px;
  border-radius: 4px;
}

.primary {
  composes: base;
  background-color: blue;
  color: white;
}
```

4. Estructura de Archivos: Co-ubicación

Regla: mantener el CSS lo más cerca posible del componente
No crees una carpeta styles/ gigante para toda la app

```
src/
 └── components/
      └── Card/
           ├── Card.jsx
           ├── Card.module.css
           └── Card.test.jsx
```

Si decides borrar o mover el componente Card
te llevas sus estilos contigo sin dejar "código muerto" en otras carpetas.

5. Variables para la Consistencia
Resuelve el problema del alcance (scoping)
pero no el de la consistencia (colores, fuentes).
Combina los módulos con `Variables CSS` nativas (--main-color).

#### Definición tokens globales
En un archivo CSS raíz (index.css)

úsalos dentro de tus módulos:

```
/* Card.module.css */
.container {
  /* Estas variables vienen del archivo global */
  background-color: var(--brand-color); 
  padding: var(--spacing-medium);
}
```

6. Evita Selectores de Etiqueta
No usar selectores como div { ... } o h1 { ... }

CSS Modules localiza las clases
los selectores de etiqueta dentro del módulo a veces pueden tener efectos inesperados si no se manejan con cuidado

Clase a todo más explícito y aprovecha mejor el potencial del módulo



# Sistema de Diseño

##### Crear un lenguaje común entre diseñadores y desarrolladores
No solo una librería de componentes
Debe ser escalable, consistente y autodocumentado.

1. Atomic Design
metodología para organizar la jerarquía de la UI
En lugar de ver "páginas", ves componentes que se ensamblan

Átomos: Los elementos más pequeños (botones, inputs, etiquetas, paleta de colores).
Moléculas: Grupos de átomos que funcionan juntos (un buscador: input + botón).
Organismos: Secciones complejas de la interfaz (un Header o un Footer).
Plantillas (Templates): Estructuras de diseño sin contenido real (esqueletos).
Páginas: Instancias reales con contenido final para testear el sistema.

2. Design Tokens
##### Variables agnósticas a la plataforma (JSON, YAML), almacenan decisiones de diseño
En lugar de usar valores "hardcoded" como #3498db, usas un token

`Tokens Globales`: color-blue-500: #3498db
`Tokens Semánticos`: button-background-primary: var(--color-blue-500)

3. Principios de Diseño
Reglas que guían las decisiones estéticas y funcionales
No son técnicos, sino filosóficos.

`Accesibilidad (a11y)`:
Asegurar contrastes (WCAG)
navegación por teclado
soporte para lectores de pantalla desde el inicio

`Consistencia`: ¿El radio de los bordes es igual en todas partes?

`Densidad`: ¿Cuánta información queremos mostrar por pantalla? (Compacto vs. Espacioso).

4. Sistema de Grillas y Layout
Define cómo se posicionan los elementos
Usa una `escala de espaciado`, normalmente basada en 4px u 8px
para mantener el ritmo vertical y horizontal.

`Grid System`: Definir columnas, gutters (espacios entre columnas) y márgenes.
`Breakpoints`: Puntos exactos donde el diseño se adapta a diferentes pantallas.

5. Documentación y Storybook

Storybook: herramienta que permite desarrollar y visualizar componentes de forma aislada.
##### Documentación: incluir no solo el código, sino las reglas de uso

Ej:
"Usa este botón para acciones principales"
"No uses más de dos botones primarios por pantalla".

6. Componentes de Composición
Componentes que solo manejen el diseño

Stack: Para apilar elementos vertical u horizontalmente con un espacio constante.
Box: Un contenedor genérico con acceso a los tokens de espaciado y color.
Center: Para centrar contenido de forma rápida.


Comienzo:
Empezar definiendo tus Design Tokens en un archivo global
Luego crear los átomos, etc



# Design Tokens

Son el lenguaje visual de tu sistema de diseño

En lugar de usar valores fijos (hexadecimales, píxeles)
utilizas nombres semánticos que representan decisiones de diseño.

1. Jerarquía de los Tokens
No todos los tokens son iguales

Se divide en tres niveles para permitir que el sistema sea flexible.

### A. Tokens Primitivos (Globales)
Son los valores crudos. No tienen contexto, solo describen el valor.

`color-blue-500: #3b82f6`

Nunca los uses directamente en tus componentes
Solo sirven para alimentar a los siguientes niveles.

### B. Tokens Semánticos (Alias)
Describen la función del valor

`action-primary-background: var(--color-blue-500)`

Si mañana el color de "acción" cambia de azul a morado
solo cambias el alias y toda la app se actualiza.


### C. Tokens de Componente
Específicos para un elemento
Se usan cuando un componente necesita una excepción o un detalle muy concreto

`button-border-radius: var(--radius-md)`

2. Categorías Esenciales

Áreas incluir:

`Color`:
sys-color-error: #ff0000

`Tipografía`:
font-size-lg: 1.125rem

`Espaciado`:
spacing-4: 16px

`Elevación`:
shadow-card: "0 4px 6px -1px rgba(0,0,0,0.1)"

`Bordes`:
radius-full: 9999px

3. Implementación: ej. React + CSS Modules
Los tokens deben ser accesibles para tus estilos
La forma más estándar es mediante Variables CSS (Custom Properties).

### 1. Definir en el root
Archivo tokens.css (o dentro de tu index.css)

```
:root {
  /* Primitivos */
  --blue-500: #3b82f6;
  --gray-100: #f3f4f6;

  /* Semánticos (Alias) */
  --bg-app: var(--gray-100);
  --brand-primary: var(--blue-500);
  
  /* Escala de Espaciado (8px base) */
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem;  /* 8px */
  --space-4: 1rem;    /* 16px */
}
```

### 2. Uso en CSS Modules
Ahora, en tu componente, usas los tokens semánticos

Garantiza que si cambias el tema (ej. Dark Mode),
el componente no necesite cambios

```
/* Card.module.css */
.card {
  background-color: var(--bg-app);
  padding: var(--space-4);
  border-left: 4px solid var(--brand-primary);
}
```

4. Flujo 
Los Design Tokens suelen nacer en Figma y terminar en código
Para automatizar esto, se utilizan herramientas de "traducción":

Figma Variables: Donde el diseñador define los tokens.

Style Dictionary (Amazon): La herramienta estándar de la industria
Toma un JSON (exportado de Figma) y genera archivos CSS, SCSS, JS o incluso archivos para Android/iOS.

Tokens Studio: Un plugin de Figma muy potente para gestionar estas jerarquías

5. Nombramiento

##### Estructura consistente para que los desarrolladores puedan "adivinar" el nombre del token

Ej:
`[Categoría]-[Concepto]-[Estado]`.

`color-button-hover`.

`text-title-large`.

`space-stack-small`.


### Beneficio: Temas (Dark Mode)
Solo tienes que redefinir los valores de los tokens semánticos bajo una clase o media query

```
[data-theme='dark'] {
  --bg-app: #1a1a1a; /* El mismo token, diferente valor */
  --brand-primary: #60a5fa; 
}
```


# Lenguaje de Diseño

Material Design (Google) o Glassmorphism/Spatial UI (Apple)
No se empieza por los colores, sino por una metáfora física

##### Conjunto de reglas que dictan cómo se comporta la materia digital

1. Metáfora (El "Material")

##### Todo lenguaje de diseño responde a la pregunta: ¿De qué está hecha esta interfaz?

Material Design: Su metáfora es el Papel Digital
Los elementos tienen grosor (1dp)
proyectan sombras reales y se comportan como superficies físicas
pueden expandirse o unirse, pero no atravesarse entre sí

Apple (Liquid Glass): Su metáfora es el Vidrio Esmerilado.
No es solo estética; el vidrio permite que la luz y el color del fondo pasen a través
ayuda al usuario a mantener el contexto de dónde está (especialmente vital en VisionOS y macOS).

2. Elevación y el Eje Z (Espacialidad)
En una pantalla plana, la profundidad es una ilusión creada con matemáticas.

Sombras y Profundidad: Determinan qué está "encima" de qué
En Material, la elevación se mide en dp (puntos de densidad),
a mayor elevación, la sombra es más difusa.

Difuminado de Fondo (Background Blur): 
La jerarquía no solo se da por sombras, sino por la opacidad y el desenfoque
Un elemento más importante suele ser más claro y tener un desenfoque más intenso, separándolo del fondo

3. Movimiento con Propósito (Motion)
El movimiento en estos lenguajes no es decorativo; es funcional
Ayuda al cerebro a entender de dónde vino un elemento y a dónde fue

Interpolación y Curvas (Easings): No usan movimientos lineales
Usan física real (resortes, inercia).

Continuidad: Si tocas un botón y se abre una tarjeta
El lenguaje de diseño dicta que la tarjeta debe "crecer" desde el punto de contacto
no simplemente aparecer.

4. Sistema de Color Dinámico
Los lenguajes modernos ya no usan paletas estáticas.

Material You (Google): Introdujo la extracción de color
El sistema analiza el fondo de pantalla del usuario
genera una paleta completa de tokens de diseño que armonizan con esa imagen.

Vibrancia (Apple): Apple usa "vibrancy"
efecto que satura los colores del fondo que se filtran a través del vidrio
para asegurar que el texto sea legible sin importar qué haya detrás.

5. Intencionalidad y Legibilidad (Tipografía)
Crearon sus propias fuentes para controlar la experiencia: Roboto/Product Sans para Google y San Francisco para Apple

Escalado Óptico: La tipografía cambia ligeramente su espaciado y grosor dependiendo del tamaño del texto
maximizar la legibilidad en pantallas retina o densidades bajas.

Material Design (Google):
Superficie sólida (Papel/Polímero).
Sombras proyectadas (Elevación).
Dinámico (basado en el usuario).
Claridad y funcionalidad explícita

Liquid Glass / Spatial (Apple)
Material traslúcido (Vidrio).
Contraste de capas y desenfoque.
Adaptativo (basado en el contexto).
Inmersión y elegancia espacial.

6. Accesibilidad desde el Núcleo
Lenguaje de diseño moderno no es tal si no incluye `reglas de contraste dinámico`
Tamaños de toque mínimos (48x48dp) y soporte nativo para lectores de pantalla
Las decisiones de diseño se toman bajo el estándar `WCAG`


# Sistema de color

De la estética a la `ciencia del color`.

Implica entender cómo el ojo humano percibe la luz y cómo los colores deben adaptarse al contexto
ej. Modo oscuro, transparencia o fondos dinámicos

1. Espacios de Color Perceptuales (OKLCH y HCT)
El error más común es usar HSL o RGB.
El problema es que el ojo humano no percibe el brillo de forma lineal
ej: un amarillo al 50% de luminosidad se ve mucho más brillante que un azul al mismo 50%.

Google (HCT): Material Design 3 usa el espacio HCT (Hue, Chroma, Tone).
El "Tone" (Tono) está alineado con la percepción humana
garantiza que si dos colores tienen el mismo valor de tono, tienen el mismo contraste visual

OKLCH: Alternativa moderna para CSS
permite definir colores basándote en:
L (Lightness): Qué tan claro u oscuro lo percibimos.
C (Chroma): La intensidad del color.
H (Hue): El ángulo del color (rojo, azul, etc.).

2. Paletas Tonales (Tonal Palettes)
En lugar de elegir 5 colores al azar, generas una rampa tonal
para cada color base (Primary, Secondary, Error, etc.).

Se crea una escala de 0 a 100:
0 es negro absoluto y 100 es blanco.

Regla del Contraste:
Para garantizar accesibilidad (WCAG)
decidir que el texto siempre use un tono con una diferencia de al menos 50 puntos respecto al fondo.

ej: Si el fondo es Primary-90
el texto debe ser Primary-10 o Primary-20.

3. Arquitectura Semántica (Mapeo)
Sin tokens primitivos
ej: color-blue-500

Un sistema de alto nivel usa Tokens Semánticos
describen la función:

`surface`:
El fondo principal de la aplicación.

`on-surface`:
Texto o iconos que van sobre el fondo.

`primary-container`:
Un color de énfasis suave para destacar elementos.

`on-primary-container`:
Contenido dentro del contenedor de énfasis.

Ej: El prefijo on- es vital
Indica qué color debe usarse encima de otro para mantener la legibilidad.

4. Color Dinámico

### Google (Material You):
Introdujo la extracción de color
El sistema toma una imagen (el fondo de pantalla)
elige un "Color Semilla" y, mediante algoritmos matemáticos
genera todas las paletas tonales automáticamente.

Algoritmo de Armonía:
Si tienes un color de "Error" (rojo)
el sistema lo ajusta ligeramente para que combine con el tono del tema elegido por el usuario
evitando que "choque" visualmente.

5. Color Adaptativo

### Apple (Vibrancy)
Apple no solo usa color, usa materiales
Su sistema de color depende de lo que hay debajo.

Vibrancy:
No es un color plano
es un filtro que mezcla el color del texto con el fondo desenfocado.

Simbiosis:
Los colores de Apple en iOS/macOS cambian ligeramente según el nivel de elevación
Simbiosis: Los colores de Apple en iOS/macOS cambian ligeramente según el nivel de elevación

6. Accesibilidad Matemática
Un sistema profesional calcula el contraste automáticamente

La fórmula estándar de la WCAG para el contraste relativo es:

```
CR = L_1 + 0.05 / L_2 + 0.05
```

L: luminancia relativa

Un sistema de diseño robusto asegura que todos sus pares de tokens
(como primary y on-primary)
cumplan siempre con un ratio de 4.5:1 para texto normal.


### Implementación: Ej.

1. Define colores semilla (Brand, Secondary, Error, Neutral).
2. Genera rampas tonales (del 0 al 100) usando OKLCH para que el brillo sea uniforme.
3. Crea tokens semánticos para que los desarrolladores no tengan que "adivinar" qué color usar.
4. Aplica el modo oscuro simplemente intercambiando los valores de los tokens (ej. surface pasa de tono 98 a tono 10).



# Paleta de color

## Glass

Para el estilo 'liquid glass'
dejas de pensar en colores sólidos y empiezas a pensar en materiales ópticos.

1. De "Color" a "Material" (Vibrancy)
En el sistema, el fondo de una ventana no tiene un color fijo
Se define como un Material

##### El material es una combinación de transparencia, desenfoque (blur) y un tinte sutil.

Vibrancy (Vibrancia):
No es solo transparencia; es un algoritmo que extrae los colores del fondo que está detrás de la ventana
los mezcla con el color del texto o los iconos para que "brillen"
y mantengan el contraste.

Grosor del Material:
Define niveles (Ultra-thin, Thin, Regular, Thick).
A mayor grosor, menos color del fondo pasa a través
más "sólido" se ve el vidrio.

`Ultra-thin`:
Menús desplegables
"Muy transparente, mucha mezcla de color."

`Regular`:
Fondo de aplicaciones
Equilibrio entre legibilidad y contexto.

`Thick`:
Barras laterales o modales
"Casi opaco, separa claramente el contenido."

2. Jerarquía por Translucidez (Eje Z)
En Material Design (Google), la jerarquía se da por sombras
En Liquid Glass, la jerarquía se da por la cantidad de luz que atraviesa el objeto.

Capas de Vidrio: Un elemento que está "más cerca" del usuario
(como un botón sobre una tarjeta)
Suele ser más claro y tener menos desenfoque que el fondo
Simula que hay menos "cristal" entre el ojo y el objeto.

Specular Highlights (Brillos especulares):
Para que el vidrio parezca real, se añade un borde finísimo (1px) en la parte superior con un color blanco muy tenue (opacidad 10-20%)
para simular el reflejo de una fuente de luz cenital

3. Colores Semánticos y Adaptativos
No usa #007AFF a secas. Usa `systemBlue`.

Adaptabilidad: Estos colores cambian sus valores de luminosidad y saturación automáticamente
dependiendo de si el usuario está en modo claro, oscuro
o si hay una superficie de vidrio detrás.

Contrast Awareness: Si el fondo detrás del vidrio es muy claro, el sistema satura más los colores para que no se pierdan.

4. Espacio de Color P3 (Wide Color)
Se diseña para pantallas con gamas de colores amplias (P3).

El espacio de color sRGB (el estándar de la web antigua) es limitado

El Display P3 ofrece un 25% más de colores, especialmente en verdes y rojos vibrantes
los colores se ven tan "eléctricos" o profundos
aprovechan hardware que puede mostrar colores que otros monitores no pueden

5. Matemática del Contraste en Vidrio
Asegurar la legibilidad sobre fondos que cambian constantemente
se utiliza una técnica de mezcla de capas (Blending Modes).

En lugar de usar un color gris para el texto secundario
se usa un color blanco con un modo de mezcla llamado Luminosity o Overlay

Esto asegura que el texto siempre sea más brillante (o más oscuro)
que lo que sea que esté pasando por detrás del vidrio.

Luminancia relativa L:
se calcula para asegurar que, incluso con blur, el ratio de contraste se mantenga

```
L = 0.2126R + 0.7152G + 0.0722B
```

Si el fondo tiene una L alta, el sistema "oscurece" el tinte del vidrio automáticamente

6. Tintes de Contorno (Borders)
Los bordes no suelen ser de color sólido
Se usan gradientes lineales muy sutiles que van de arriba hacia abajo

Arriba: Más claro (simulando luz).

Abajo: Más oscuro (simulando profundidad).
Esto ayuda a definir el objeto sin necesidad de una sombra pesada

Implementación: Ej.

1. Evita colores sólidos: Usa rgba() o hsla().
2. Usa backdrop-filter: Es la propiedad de CSS que permite el desenfoque del fondo (blur).
3. Define Tokens de Material: En lugar de bg-gray, crea un token --glass-background: rgba(255, 255, 255, 0.4).
4. Añade el "borde de luz": Un border: 1px solid rgba(255, 255, 255, 0.2) marca la diferencia.


## Material 

Es pura ciencia de datos y algoritmos
Google pasó de "elegir colores" a "generar sistemas" mediante un motor llamado Monet

Conceptos matemáticos y de diseño que lo hacen posible:

1. Espacio de Color HCT (Hue, Chroma, Tone)
Google abandonó HSL/RGB porque no son perceptualmente precisos
Inventaron HCT para resolver el problema de la legibilidad.

Hue (Matiz): El color (rojo, azul, etc.).
Chroma (Croma): Qué tan colorido o gris es.
Tone (Tono): La luminosidad percibida

Clave: En HCT, un Tono 50 siempre tiene el mismo contraste contra un Tono 100
sin importar si el color es amarillo brillante o azul oscuro
La Clave: En HCT, un Tono 50 siempre tiene el mismo contraste contra un Tono 100, sin importar si el color es amarillo brillante o azul oscuro. Esto permite que el sistema garantice accesibilidad automática.

2. Seed Color y Extracción
Material You no empieza con una paleta, empieza con una Semilla (Seed).

El sistema analiza el fondo de pantalla del usuario.
Extrae los colores dominantes.
Elige uno como "Seed Color" y lo estabiliza (ajusta su croma para que no sea demasiado chillón o apagado).

3. Rampas Tonales (Tonal Palettes)
A partir del Seed Color, el algoritmo genera 5 rampas tonales fijas
Cada rampa tiene 13 niveles de brillo (desde el tono 0 hasta el 100).

`Primary`: El color principal.
`Secondary`: Un color más apagado (menos croma).
`Tertiary`: Un color de acento que armoniza con el primario.
`Neutral`: Para fondos.
`Neutral Variant`: Para bordes y estados deshabilitados.

4. Esquemas Dinámicos y Armonía
No todos los usuarios quieren el mismo "vibe".
Google usa algoritmos para ajustar cómo se generan esas rampas:

`Vibrant`: Maximiza el croma.
`Muted`: Colores más pasteles y grises.
`Expressive`: Mezcla colores inesperados para un look más atrevido.
`Content`: Ajusta la paleta para que combine con una imagen específica (como la portada de un álbum en Spotify).

5. Roles Semánticos: sistema "On"
Usa una lógica estricta de "Contenedor" y "Contenido"
para que el desarrollador no cometa errores de diseño

`Primary`:
Acciones principales.
"Un botón de ""Enviar""."

`On-Primary`:
Lo que va sobre el Primary.
El texto dentro del botón.

`Primary Container`:
Un fondo suave de énfasis.
Una tarjeta destacada.

`On-Primary Container`:
Contenido sobre el fondo suave.
El texto de la tarjeta.

6. Accesibilidad por Diferencia de Tono
cumplir con la norma WCAG AA, Material You simplemente aplica una regla matemática
El texto debe tener una diferencia de al menos 50 puntos de Tono respecto al fondo.

```
|Tono_fondo - Tono_texto| >/ 50
```

Si el fondo es Primary-90, el texto debe ser Primary-40 o menor (más oscuro).
El sistema lo hace.


Implementación: Ej.

1. No definas colores fijos: Define un algoritmo que reciba un hexadecimal y devuelva 5 arreglos de 13 colores cada uno.
2. Usa librerías de Google: Existe `@material/material-color-utilities` en npm que hace todo este cálculo de HCT por ti.
3. Mapea a CSS Variables:

```
:root {
  --md-sys-color-primary: #6750A4; /* Tono 40 */
  --md-sys-color-on-primary: #FFFFFF; /* Tono 100 */
}
```

# CSS

## Sistema de color

1. Arquitectura de Dos Capas

Capa Primitiva: Define los valores "crudos" (lo que es el color).
Capa Semántica: Define el "uso" (para qué sirve el color).

```
:root {
  /* 1. Primitivos (Paleta técnica) */
  --blue-500: #3b82f6;
  --gray-100: #f3f4f6;
  --gray-900: #111827;

  /* 2. Semánticos (Lo que usamos en los componentes) */
  --color-primary: var(--blue-500);
  --color-bg: var(--gray-100);
  --color-text: var(--gray-900);
}
```

2. HSL o OKLCH
HSL (Hue, Saturation, Lightness), legible para humanos
Si quieres estar a la vanguardia, usa OKLCH, que corrige la distorsión de brillo

Puedes crear variantes simplemente cambiando el último número (la luminosidad).

```
:root {
  --brand-hue: 220;
  --brand-sat: 90%;
  
  /* Escala rápida sin elegir 10 colores distintos */
  --primary-light: hsl(var(--brand-hue), var(--brand-sat), 90%);
  --primary-main:  hsl(var(--brand-hue), var(--brand-sat), 50%);
  --primary-dark:  hsl(var(--brand-hue), var(--brand-sat), 20%);
}
```

3. Regla del Contraste: Accesibilidad
En un sistema simple, la legibilidad no es negociable
La norma WCAG 2.1 pide un ratio de contraste de al menos 4.5:1 para texto normal

```
Contrast = L_1 + 0.05 / L_2 + 0.05
```

Si usas un fondo con una luminosidad (Lightness) mayor al 60%, usa texto negro.
Si es menor al 40%, usa texto blanco

4. Naming
Enfocarse en grupos simples


`Acción`:
--color-action
"Botones, enlaces, estados activos."

`Superficie`:
--color-surface
"Fondos de cards, modales, secciones."

`Borde`:
--color-border
Divisores y contornos de inputs.

`Estado`:
--color-error
"Validaciones, alertas o peligro."

5. Dark Mode
re-mapear los tokens semánticos usando los mismos primitivos

```
/* Valores por defecto (Light) */
:root {
  --bg-app: var(--gray-100);
  --text-main: var(--gray-900);
}

/* Solo cambiamos el "mapeo" */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-app: var(--gray-900);
    --text-main: var(--gray-100);
  }
}
```

6. Tintes y Sombras
En lugar de inventar nombres como azul-claro
usa una escala numérica

Es lo que hace Tailwind y es el estándar de facto:

`100-300`: Fondos suaves y sutiles.
`400-600`: Colores principales y de marca.
`700-900`: Texto, bordes fuertes y estados de hover.

Que si mañana tu cliente dice "ya no quiero que la web sea azul"
"ahora quiero que sea verde"
solo cambias una variable (--brand-hue)
todo tu sistema de sombras, tonos y contrastes se actualiza mágicamente.


## Paleta de colores

1. Escalas Numéricas (El estándar 50-950)
Inspirado en sistemas como Tailwind o Carbon, no definas solo "azul".
Define una rampa.

Permite tener variaciones para bordes, fondos sutiles y estados de hover sin "inventar" colores sobre la marcha.

`50-100`: Fondos de sección o estados deshabilitados.
`400-600`: Tu color de marca principal.
`700-950`: Texto sobre fondos claros o colores de contraste fuerte.

2. Colores de Contenido (On-Colors)
error: definir un color de fondo pero olvidar definir qué color de texto garantiza legibilidad sobre él.

Crea parejas de variables
Si tienes un `--bg-primary`, debes tener un `--text-on-primary`.

```
:root {
  /* Fondo fuerte -> Texto claro */
  --bg-action: var(--blue-600);
  --text-on-action: #ffffff;

  /* Fondo suave -> Texto oscuro */
  --bg-info: var(--blue-100);
  --text-on-info: var(--blue-900);
}
```

3. color-mix() para Estados
En lugar de crear variables para el hover, el active o el focus
usar la función moderna de CSS color-mix()
mantiene el archivo de variables limpio

Concepto: Mézclar el color principal con un 10% de negro para el hover

```
.button {
  background-color: var(--color-primary);
}

.button:hover {
  /* Genera el color de hover dinámicamente */
  background-color: color-mix(in srgb, var(--color-primary), black 10%);
}
```

4. Semántica de "Superficies" (Surfaces)
Los sistemas profesionales dividen el fondo en niveles de importancia

Ayuda a que el usuario entienda qué elementos están "encima" de otros.

`Surface 1 (Base)`: El fondo de toda la página.
`Surface 2 (Card)`: Un fondo ligeramente distinto para separar contenido.
`Surface 3 (Overlay)`: El fondo de modales o menús.

5. Punto de Tinte (Tinting)
Para un sistema cohesivo, los grises no deben ser grises neutros (#888888)
Deben tener un tinte de tu color principal.

Si tu marca es azul, añade un 2-5% de azul a tus grises
Esto hace que la interfaz se sienta "de la misma familia" y no un conjunto de parches.

theme.css

```
/* 1. PALETA TÉCNICA (Solo números) */
:root {
  --blue-100: #e0f2fe;
  --blue-600: #0284c7;
  --blue-900: #0c4a6e;
  --slate-500: #64748b; /* Gris con un toque de azul */
}

/* 2. TOKENS SEMÁNTICOS (Lo que usas en el código) */
:root {
  --color-brand: var(--blue-600);
  --color-text-main: var(--blue-900);
  --color-text-muted: var(--slate-500);
  --color-surface-base: #ffffff;
  --color-surface-card: var(--blue-100);
}

/* 3. MODO OSCURO (Simple swap) */
[data-theme="dark"] {
  --color-text-main: var(--blue-100);
  --color-surface-base: var(--blue-900);
  --color-surface-card: color-mix(in srgb, var(--blue-900), white 5%);
}
```


## Material 

Usando Rampas Tonales y Tokens Semánticos
sin necesidad de instalar librerías complejas.

1. Sistema de Color (Estructura)
Dividiremos nuestro sistema en tres capas lógicas

Esto nos permite cambiar el "look" de toda la app solo tocando la primera capa.

Capa A: Colores Semilla (Seed)
Elegimos un color base
Usaremos HSL para que generar variaciones sea natural
(cambiando solo la luminosidad).

Capa B: Roles Semánticos
definimos cómo se usa el color: Primary para acciones
Surface para fondos y el prefijo On- para el contenido que va encima.

2. Paleta de Color (Código)

archivo global.css o theme.css:
ajustado los valores de luminosidad para que el contraste sea accesible (WCAG) por defecto

```
:root {
  /* --- 1. CONFIGURACIÓN DE MARCA (Seed) --- */
  --brand-h: 260; /* Un violeta tipo Material */
  --brand-s: 60%;
  
  /* --- 2. PALETA PRIMARIA (Acciones) --- */
  --md-sys-color-primary: hsl(var(--brand-h), var(--brand-s), 40%);
  --md-sys-color-on-primary: hsl(var(--brand-h), var(--brand-s), 100%);
  --md-sys-color-primary-container: hsl(var(--brand-h), var(--brand-s), 90%);
  --md-sys-color-on-primary-container: hsl(var(--brand-h), var(--brand-s), 10%);

  /* --- 3. PALETA NEUTRAL (Superficies y Fondos) --- */
  --md-sys-color-surface: hsl(var(--brand-h), 10%, 98%);
  --md-sys-color-on-surface: hsl(var(--brand-h), 10%, 10%);
  --md-sys-color-outline: hsl(var(--brand-h), 10%, 80%); /* Bordes */

  /* --- 4. ESTADOS (Error) --- */
  --md-sys-color-error: hsl(0, 75%, 40%);
  --md-sys-color-on-error: #ffffff;
}

/* --- MODO OSCURO (Automático) --- */
@media (prefers-color-scheme: dark) {
  :root {
    --md-sys-color-primary: hsl(var(--brand-h), var(--brand-s), 80%);
    --md-sys-color-on-primary: hsl(var(--brand-h), var(--brand-s), 20%);
    --md-sys-color-primary-container: hsl(var(--brand-h), var(--brand-s), 30%);
    --md-sys-color-on-primary-container: hsl(var(--brand-h), var(--brand-s), 90%);

    --md-sys-color-surface: hsl(var(--brand-h), 10%, 10%);
    --md-sys-color-on-surface: hsl(var(--brand-h), 10%, 90%);
    --md-sys-color-outline: hsl(var(--brand-h), 10%, 30%);
  }
}
```

3. Uso en Componentes
Tus componentes se vuelven muy legibles
Ya no usas "azul" o "gris", usas roles.

```
/* Botón estilo Material */
.button-primary {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  padding: 12px 24px;
  border-radius: 100px; /* Material 3 usa bordes muy redondeados */
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.button-primary:hover {
  /* Usamos color-mix para oscurecer el primary sin crear una variable nueva */
  background-color: color-mix(in srgb, var(--md-sys-color-primary), black 10%);
}

/* Tarjeta (Card) */
.card {
  background-color: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
  border: 1px solid var(--md-sys-color-outline);
  padding: 20px;
  border-radius: 16px;
}

/* El cuerpo de la web */
body {
  background-color: var(--md-sys-color-surface);
  color: var(--md-sys-color-on-surface);
  font-family: system-ui, sans-serif;
}
```

Ventajas:

1. Consistencia: Si cambias --brand-h a 200
toda tu app pasa de violeta a azul manteniendo los contrastes perfectos.

2. Accesibilidad Gratis: Las combinaciones primary / on-primary
están diseñadas para cumplir con el ratio de contraste necesario.

3. están diseñadas para cumplir con el ratio de contraste necesario.
Solo CSS plano que el navegador entiende al instante.


## Liquid Glass/glassmorphism 

Sin colores solidos
Usando capas translúcidas y el poder del desenfoque de fondo.

1. Sistema de Vidrio (La Lógica)
El "color" no es una propiedad estática
sino un tinte que reacciona a lo que hay detrás

`Backdrop Blur`: El efecto de esmerilado.
`Thin Borders`: Un borde casi invisible que atrapa la luz.
`Luminancia`: El uso de blancos y negros con opacidad en lugar de grises planos.

2. Paleta de Vidrio (Código)
tokens para que funcionen como "materiales" que puedes aplicar a cualquier contenedor

```
:root {
  /* --- 1. CONFIGURACIÓN DE LUZ (Seed) --- */
  --glass-hue: 0; /* Neutro, pero puedes usar 210 para un toque azulado */
  
  /* --- 2. MATERIALES (Los vidrios) --- */
  /* Vidrio claro para tarjetas y paneles */
  --glass-bg: hsla(var(--glass-hue), 0%, 100%, 0.4); 
  --glass-border: hsla(var(--glass-hue), 0%, 100%, 0.3);
  --glass-blur: 12px;

  /* --- 3. COLORES ADAPTATIVOS (Vibrancy) --- */
  --glass-text-primary: hsla(var(--glass-hue), 0%, 0%, 0.9);
  --glass-text-secondary: hsla(var(--glass-hue), 0%, 0%, 0.6);
  
  /* --- 4. ACCENT (El toque Apple) --- */
  --glass-accent: #007aff; /* El azul clásico de iOS */
}

/* --- MODO OSCURO (Dark Mode Glass) --- */
@media (prefers-color-scheme: dark) {
  :root {
    --glass-bg: hsla(var(--glass-hue), 0%, 0%, 0.3);
    --glass-border: hsla(var(--glass-hue), 0%, 100%, 0.1);
    
    --glass-text-primary: hsla(var(--glass-hue), 0%, 100%, 0.95);
    --glass-text-secondary: hsla(var(--glass-hue), 0%, 100%, 0.6);
  }
}
```

3. Componentes "Liquid"
Para que el efecto se vea real, el componente necesita "separarse" del fondo mediante el desenfoque

```
/* El contenedor principal (Vidrio) */
.glass-card {
  background-color: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur)); /* El secreto del efecto */
  -webkit-backdrop-filter: blur(var(--glass-blur)); /* Soporte para Safari */
  
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 24px;
  
  color: var(--glass-text-primary);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1); /* Sombra muy suave */
}

/* Tipografía con "Vibrancy" manual */
.glass-title {
  font-weight: 600;
  letter-spacing: -0.02em; /* Apple suele apretar un poco el tracking */
  color: var(--glass-text-primary);
}

.glass-desc {
  color: var(--glass-text-secondary);
  font-size: 0.9rem;
}

/* Botón estilo Liquid */
.glass-button {
  background-color: var(--glass-accent);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;
}

.glass-button:hover {
  opacity: 0.8; /* prefiere cambios de opacidad que de color sólido */
}
```

1. El Fondo es Vital: El efecto "glass" no se nota sobre un fondo blanco plano
Necesitas una imagen con colores o un gradiente suave detrás
para que el `backdrop-filter` tenga algo que "cocinar".

2. Menos es Más: No llenes toda la web de vidrio
Úsalo para elementos que "flotan" (modales, barras de navegación, sidebars).

3. Bordes de 1px: Apple usa bordes muy finos pero definidos
Asegúrate de que el `--glass-border` sea sutil pero visible.


## Neumorfismo CSS

Surgió como una evolución del "Skeuomorphism" (esqueumorfismo) y el "Flat Design".
Su nombre viene de New + Skeuomorphism.

A diferencia del diseño plano, que separa los elementos por capas de colores
El neumorfismo trata la interfaz como una superficie plástica continua

Los elementos no "flotan" sobre el fondo
parecen estar extruidos (empujados hacia afuera) o incrustados (hundidos) en la misma superficie

1. Concepto Visual: Luz y Sombra
El secreto del neumorfismo no es el color, sino la física de la luz
Para que un objeto parezca que sale de una superficie del mismo color
necesitas dos sombras opuestas:

Sombra Clara (Light Shadow): Representa el reflejo de la luz en un borde (arriba a la izquierda).
Sombra Oscura (Dark Shadow): Representa la sombra natural que proyecta el objeto (abajo a la derecha).

2. Reglas para implementarlo

Mismo Color: El fondo de la página y el color del objeto (botón, card)
deben ser exactamente iguales.

Bordes Suaves: No se usan bordes (stroke) sólidos
se usan sombras muy difusas.

Formas Orgánicas: Funciona mejor con esquinas muy redondeadas
(border-radius generoso).

3. CSS
Ej: botón neumórfico
color gris suave típico de esta tendencia

```
:root {
  /* El color de fondo y del objeto debe ser el mismo */
  --neu-bg: #e0e5ec;
  
  /* Sombras calculadas para este color */
  --neu-light-shadow: -9px -9px 16px rgb(255, 255, 255, 0.5);
  --neu-dark-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6);
  
  /* Sombra interna para el efecto "hundido" (inset) */
  --neu-inset-shadow: inset 6px 6px 12px #b8b9be, 
                      inset -6px -6px 12px #ffffff;
}

body {
  background-color: var(--neu-bg);
}

/* 1. Efecto Extruido (Hacia afuera) */
.neu-button {
  background-color: var(--neu-bg);
  border-radius: 20px;
  border: none;
  padding: 20px 40px;
  box-shadow: var(--neu-light-shadow), var(--neu-dark-shadow);
  transition: all 0.2s ease;
}

/* 2. Efecto Incrustado (Hacia adentro al presionar) */
.neu-button:active {
  box-shadow: var(--neu-inset-shadow);
  transform: scale(0.98);
}
```

4. Problema: Accesibilidad
El neumorfismo es visualmente "hipnótico" y limpio
tiene críticas muy fuertes en el mundo profesional

Contraste Pobre: Como el botón es del mismo color que el fondo
las personas con visión reducida pueden no distinguir dónde termina el fondo y dónde empieza el botón

Confusión de Estados: A veces es difícil saber si un botón está "presionado" o no
La diferencia visual es solo una sombra invertida

5. Usos

Dashboards personales: Donde la estética prima sobre la usabilidad masiva.
Reproductores de música: Es una temática muy común por su parecido a los dispositivos físicos de audio.
Smart Home: Interfaces de control de luces o termostatos que imitan interruptores reales en la pared.



# Estándar WCAG

WCAG (Web Content Accessibility Guidelines)
manual de referencia internacional
dicta cómo hacer que el contenido web sea accesible para personas con discapacidad
(visual, auditiva, motriz, cognitiva y más).

Desarrollado por el W3C (World Wide Web Consortium)
es la base de las leyes de accesibilidad digital en la mayoría de los países.

1. 4 Pilares: Principios POUR
Cualquier interfaz, sea Material, Glass o Neumorfismo, debe cumplir los principio

Perceptible (Perceivable): La información no puede ser invisible a todos los sentidos.
Ej: Si hay un video, debe haber subtítulos (auditivo -> visual).
Si hay una imagen, debe haber un alt text
(visual -> auditivo/lectores de pantalla).

Operable: El usuario debe poder navegar la interfaz con éxito
Ej: Toda la web debe poder usarse solo con el teclado (sin mouse).
No debe haber elementos que causen ataques epilépticos (destellos).

Comprensible (Understandable): Tanto la información como el manejo de la interfaz deben ser claros.
Ej: Si el usuario comete un error en un formulario, el mensaje debe explicar claramente qué falló y cómo arreglarlo.

Robusto: El contenido debe ser compatible con diversas tecnologías
(navegadores antiguos, lectores de pantalla actuales, dispositivos futuros).

2. Niveles de Conformidad
Estándar WCAG se divide en tres niveles de éxito

A (Mínimo):
Nivel básico.
Sin esto, la web es imposible de usar para muchos.
Ej requisito: Uso de alt text, navegación por teclado básica.

AA (Estándar):
El nivel que exigen la mayoría de las leyes y empresas.
Ej: Ratio de contraste de 4.5:1s
subtítulos en vivo
foco de teclado visible.

AAA (Máximo):
Nivel más alto de accesibilidad, difícil de alcanzar para toda la web.
Contraste de 7:1
interpretación en lengua de señas
sin texto en imágenes.

3. Contraste: Regla más importante en Diseño
En los sistemas de color, contraste es vital

WCAG 2.1 establece
fórmulas matemáticas para asegurar que el texto sea legible

`Texto normal`: Debe tener un ratio de 4.5:1 contra el fondo.
`Texto grande (o negrita)`: Puede bajar a 3:1.
`Componentes de UI`: (Bordes de inputs, iconos) deben tener al menos 3:1.

4. Checklist
Sistema de diseño 'WCAG Friendly'

Foco Visible: Nunca uses `outline: none` en CSS sin proveer un estilo de enfoque alternativo
Si navegas con la tecla Tab, debes saber siempre dónde estás.

Etiquetas de Formulario: Cada <input> debe tener un <label> asociado
No confíes solo en el placeholder.

Jerarquía de Encabezados: Usa <h1>, <h2>, <h3> en orden lógico
No elijas un <h3> solo porque el tamaño de fuente se ve mejor
usa CSS para el estilo y HTML para la estructura.

Dependencia del color: Si hay un error, no pongas el borde rojo y ya
Añade un icono o un texto que diga "Error"
personas daltónicas podrían no notar el cambio de color.

5. Validar WCAG

Lighthouse (Chrome): En la pestaña de "Inspeccionar"
corre un reporte de Accessibility.

WAVE Tool: Una extensión que te marca los errores directamente en tu página.

Contrast Checker: Webs como WebAIM para pegar tus colores y ver si pasan el test AA.



# Grid

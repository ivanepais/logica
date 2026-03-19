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




# Diseño Visual


## 1. Fundamentos: ADN Visual

Antes de tocar un componente, debes definir las leyes físicas de tu universo.

Teoría del Color Avanzada: Dominar espacios perceptuales (OKLCH) y crear rampas tonales
Escalas Tipográficas: No elijas tamaños al azar. Aprende a usar escalas armónicas (ej. Major Second o Perfect Fourth).
Teoría de la Gestalt: Cómo el cerebro humano agrupa elementos (Proximidad, Similitud, Continuidad).
El Sistema de Rejilla (Grids): Dominar el 8pt Grid System para que el espaciado sea matemático y no "a ojo".


## 2. Design Systems: Arquitectura de Sistemas

Piezas de UI, en lugar de páginas

Atomic Design: Entender la jerarquía desde el átomo hasta la página.
Design Tokens: Cómo abstraer valores (color, spacing, elevation) en variables reutilizables y agnósticas.
Sistemas de Elevación: Definir cómo se comporta la luz y la profundidad (Z-axis).
Iconografía: Crear o elegir un set de iconos que compartan el mismo grosor de trazo y radio de esquina.


## 3. Lenguajes y Metáforas

Dialectos visuales existentes, elección o creación de uno propio

Material Design 3: Análisis de la lógica de contenedores y color dinámico.
Human Interface Guidelines (Apple): El uso de la transparencia, el desenfoque y la tipografía San Francisco.
Microsoft Fluent Design: El uso de la luz, el ruido (texturas) y la profundidad.


## 4. Cohesión y Consistencia

Asegurar que pantalla A y la pantalla Z se sientan como la misma app

Patrones de Interacción: Si un "Swipe" borra en una lista, debe borrar en todas.
Microinteracciones y Motion: Definir curvas de aceleración (Easings) consistentes. Si un modal entra con un rebote, todos los modales deben hacerlo. 
Copywriting y Voz: La consistencia estética incluye el texto. ¿Tu app habla de "tú" o de "usted"? ¿Es técnica o amigable?


## 5. Implementación Técnica: Handoff

De diseño a código real

Storybook: Aprender a documentar componentes de forma aislada.
CSS Modules y Utility Classes: Cómo estructurar el CSS para que los tokens sean inyectables.
Accesibilidad (WCAG): Garantizar que tu estética sea inclusiva (Contrastes, Focus states, Touch targets).
Documentación de Diseño: Crear un "Handbook" que explique el porqué de las decisiones.


Niveles:

Principiante:
Elementos visuales básicos
Pantallas estéticas pero aisladas.

Intermedio:
Componentes y Tokens
App consistente con estilos reutilizables.

Avanzado:
Sistema de Diseño completo
Una marca visual escalable y documentada.


## 1. Teoría de Color Avanzada

Dejar de elegir colores porque "combinan"
Construirlos basándote en la física, la percepción humana y la accesibilidad.

En lugar de usar el círculo cromático tradicional de la escuela (RYB)

En el diseño de interfaces modernas nos movemos en sistemas
Separan la identidad del color de su luminosidad.

1. Espacios Perceptuales (OKLCH)
Los formatos HEX y RGB son para las máquinas
No para el ojo humano.

Problema:
En RGB, el azul puro y el amarillo puro tienen la misma "intensidad" matemática
pero el amarillo nos parece mucho más brillante
Hace que crear paletas consistentes sea una pesadilla.

Solución (OKLCH):
Estándar moderno en CSS
Permite definir un color por su Luminosidad (L), Croma (C) y Hue (H).

Ej: podemos dicir
Todos mis botones de estado (éxito, error, info) tengan exactamente la misma Luminosidad (L)".

2. Rampas Tonales y Luminancia Relativa
Una app cohesiva no usa "5 colores".
Usa 5 familias de colores

Una rampa tonal es una secuencia de un mismo color
con diferentes niveles de luminosidad percibida.

Construcción de una rampa avanzada:
seguimos la escala del 0 al 100 (donde 0 es negro y 100 es blanco)

Tonos 10-30: Para textos sobre fondos claros o fondos de modo oscuro.
Tonos 40-60: El "Main Color" o color de marca.
Tonos 90-98: Para fondos sutiles (surfaces) o estados de "hover" muy suaves.


3. Armonías de Color Científicas
Usar armonías basadas en la intención
Más allá de lo básico (complementarios, análogos)

Monocromía de Contraste:
Usar un solo matiz (Hue) pero con saltos drásticos de luminosidad
Es la base de las apps más elegantes y minimalistas.

Armonía Triádica Desviada:
Usar un color primario de marca
dos acentos cercanos entre sí para notificaciones
o detalles pequeños

Distribución 60-30-10:
60% Neutros: (Fondos, superficies).
30% Primario: (Botones principales, marca).
10% Acento: (Llamadas a la acción críticas, errores).


4. Psicología Aplicada y "Branding Contextual"
El color comunica función antes que estética

En una app se usa para reducir la carga cognitiva:

Colores de Acción:
Un solo color identifica qué elementos son "clicleables".
Si usas azul para botones
no uses azul para iconos decorativos que no hacen nada.

Colores de Estado:
Semáforo universal universal (Verde-Éxito, Amarillo-Alerta, Rojo-Error).
Se sugiere "teñir" estos colores con el color de tu marca para que no parezcan parches externos.


5. El "Punto Blanco" y la Temperatura del Sistema
Un sistema de color cohesivo define una temperatura global.

Si tu marca es "Cálida" (Naranjas, amarillos)
tus grises no deben ser neutros
deben ser grises cálidos (con un poco de amarillo en el matiz).

Si es "Fría", tus grises deben tener un toque de azul o violeta
Esto hace que la interfaz se sienta "natural" y no sintética.


### Espacios perceptuales

Los colores se organizan tal como los interpreta el cerebro humano
Estándar actual: OKLCH

1. Modelo mental: L + C + H
Dejar de ver el color como un código
Empezar a verlo como tres dimensiones independientes:

L (Lightness - Luminosidad):
eje vertical.
Define qué tan "claro" u "oscuro" es un color
Un L de 0% es negro total y 100% es blanco puro

C (Chroma - Intensidad):
"pureza" del color
Un croma de 0 es un gris neutro.
A medida que subes, el color se vuelve más vibrante

H (Hue - Matiz):
Es el ángulo en el círculo cromático (0-360).
0 es rojo, 140 es verde, 270 es azul.


2. Consistencia de Peso Visual

El truco es la Luminosidad Uniforme

Problema en HSL:
Si pones un amarillo hsl(60, 100%, 50%) y un azul hsl(240, 100%, 50%)
uno al lado del otro, el amarillo te cegará mientras el azul se verá oscuro
Tienen el mismo "50%", pero no se sienten iguales.

Solución en OKLCH:
Si fijas la L (Luminosidad) en ambos
el ojo los percibirá con el mismo peso visual
Vital para botones de diferentes categorías (Éxito, Error, Advertencia)
Deben tener la misma importancia

```
/* Ambos se sienten igual de brillantes al ojo humano */
--color-success: oklch(0.7 0.15 140); /* Verde */
--color-error:   oklch(0.7 0.15 20);  /* Rojo */
```

3. Rampa Perceptual
No elijas colores al azar

Crea una rampa matemática:

A. Matiz (H) y Croma (C)
Decide tu color de marca
Digamos un azul: H = 250, C = 0.15.

B. Genera los escalones de Luminosidad (L)
Crea variables basadas en porcentajes fijos de L
Esto garantiza que la "distancia" entre colores sea siempre la misma.

```
:root {
  --blue-h: 250;
  --blue-c: 0.15;

  /* Rampa generada matemáticamente */
  --blue-100: oklch(0.95 var(--blue-c) var(--blue-h)); /* Fondo sutil */
  --blue-300: oklch(0.75 var(--blue-c) var(--blue-h)); /* UI secundaria */
  --blue-600: oklch(0.50 var(--blue-c) var(--blue-h)); /* Color principal */
  --blue-900: oklch(0.25 var(--blue-c) var(--blue-h)); /* Texto sobre fondo claro */
}
```

4. Gama: Gamut Mapping
Al trabajar en espacios perceptuales
puedes definir colores que algunas pantallas no pueden mostrar (colores P3).

Dominar el espacio:
significa entender que si subes mucho el Croma (C) y la Luminosidad (L) al mismo tiempo
el color podría "romperse" en pantallas estándar.

Práctica:
Mantén el croma (C) por debajo de 0.2 para colores de interfaz estándar
Solo sube a 0.3 o más para acentos muy específicos en pantallas de alta gama.

5. Grises con "Alma" (Neutral tinting)
Un espacio perceptual te permite crear grises que no se sientan "muertos".

En lugar de usar C = 0, usa un croma muy bajo (0.01 o 0.02)
con el mismo matiz de tu marca.

hace que tus grises "hereden" un poco de la personalidad del color principal
creando esa cohesión estética buscada

```
/* Gris neutro frío (marcado por el azul de la marca) */
--neutral-900: oklch(0.2 0.01 250);
```

Rs:

Usa oklch() en tu CSS en lugar de HEX.
Fija la Luminosidad (L) para elementos que deban tener el mismo peso visual.
Crea rampas variando solo la L en intervalos regulares (0.9, 0.8, 0.7...).
Tintea tus grises dándoles un toque del matiz (H) de tu marca.


#### OKLCH

"OK": "está bien"
viene del creador del modelo
ingeniero de software y científico del color Björn Ottosson.

diseñó este modelo en 2020 como una mejora directa del espacio de color llamado LAB (o CIELAB).
Al ver que su nueva versión corregía los errores de su predecesor
(como el famoso "problema del azul" que se tornaba morado al aclararse)
funciona como el ojo humano espera

K:
desciende del modelo de color CIELAB
El modelo LAB usa tres ejes: L (Lightness), a (eje verde-rojo) y b (eje azul-amarillo).
Björn Ottosson aplicó una serie de transformaciones matemáticas (matrices) para que los colores fueran más uniformes.
En la literatura científica de color, cuando un modelo es una optimización basada en un sustrato previo
se suelen añadir letras para diferenciar las versiones
La K es parte de la notación técnica que indica que el espacio utiliza una estructura de conos y oponentes optimizada matemáticamente.

Para escribirlo en CSS solo usas oklch(L C H),
saber que viene de una optimización de LAB da ventaja

OKLCH es un modelo "Oponente":
Internamente, el sistema entiende que el ojo humano no puede ver un color que sea "rojo y verde al mismo tiempo" o "azul y amarillo al mismo tiempo".
Al usar la matemática del espacio "OK", el navegador garantiza que cuando cambies el matiz (H),
la transición de color sea la más suave y natural posible, sin saltos extraños de brillo.




### Rampas tonales

No es simplemente aclarar u oscurecer un color
Se trata de crear una progresión de valores que mantenga la identidad del color (su matiz)
mientras cambia su luminosidad de forma predecible y útil para la interfaz

1. Estructura de 10 pasos: Escala 50-900
Consiste en una rampa de 10 niveles

50 - 100: Colores de fondo (Surfaces), estados de hover muy sutiles.
200 - 400: Bordes, estados deshabilitados, sombras sutiles.
500 - 600: Tu color principal (Brand color), botones, iconos clave.
700 - 900: Texto sobre fondos claros, contrastes fuertes, estados activos oscuros.


2. Creación técnica con OKLCH
Para que la rampa sea cohesiva, usaremos la lógica matemática
Mantendremos el Matiz (H) constante y variaremos la Luminosidad (L).

A. El color base (El 600)
Supongamos que tu color de marca es un Azul Eléctrico
`oklch(0.60 0.18 250)`
(L: 60%, Croma: 0.18, Matiz: 250).

B. Definir los extremos

El 50 (Casi blanco):
Necesitas una luminosidad muy alta (~97%)
y un croma muy bajo para que parezca un "tinte".

El 900 (Casi negro):
Una luminosidad muy baja (~20%)
y un croma moderado para que no parezca un gris muerto.

C. Progresión matemática
Distribuye la luminosidad en saltos
No tienen que ser iguales

el ojo humano prefiere saltos más grandes en los extremos
más cortos en el medio

Nombre,L (Luminosidad),C (Croma),Resultado

50,0.98,0.01:
Fondo casi blanco con tinte.

300,0.80,0.10:
UI secundaria / Bordes.

600,0.60,0.18:
Color de Marca.

900,0.25,0.12:
Texto muy oscuro.


3. Croma Adaptativo
donde muchos fallan
no mantengas el Croma fijo en toda la rampa

extremos (50 y 900):
croma debe ser bajo
Si pones mucho croma en un color muy claro, se ve "neón"
si lo pones en uno muy oscuro, se ve "sucio".

centro (500-600):
donde el color puede ser más vibrante (Croma máximo).


4. CSS con variables inyectables
Una rampa bien construida permite que toda la app se sienta consistente

```
:root {
  /* Semilla: solo cambiamos esto y toda la rampa se actualiza */
  --h: 250;
  
  /* Rampa Tonal Azul */
  --blue-50:  oklch(0.98 0.01 var(--h));
  --blue-100: oklch(0.95 0.03 var(--h));
  --blue-300: oklch(0.80 0.10 var(--h));
  --blue-600: oklch(0.60 0.18 var(--h)); /* Color Principal */
  --blue-800: oklch(0.35 0.14 var(--h));
  --blue-900: oklch(0.20 0.10 var(--h));
}
```


5. Test de Escala de Grises: Validación
Pasa tu diseño a blanco y negro (desaturación total).

Rampa Correcta:
Cada paso debe ser claramente distinguible del anterior
Si dos colores se ven iguales en gris, tendrás problemas de accesibilidad.

Herramientas:

Huetone.io: favorita para OKLCH
muestra los ratios de contraste en tiempo real.

Atmos.style: Excelente para crear sistemas completos de rampas tonales.

Realtime Colors: Para ver cómo se aplica tu rampa en una interfaz real instantáneamente.



### Escalas Tipográficas

Progresión matemática donde cada tamaño tiene una relación lógica con el anterior.

1. Multiplicador: Scale Ratio
En lugar de sumar píxeles, multiplicamos
Elegimos un número base (normalmente 16px)
lo multiplicamos por un factor constante para obtener el siguiente tamaño.

Escala (Ratio),Nombre,Sensación,Uso

`1.125`:
Major Second
Sutil y compacta
Apps con mucha densidad de datos (Dashboards).

`1.200`:
Minor Third
Equilibrada
La más común para apps móviles y SaaS.

`1.250`:
Major Third
Vibrante
"Blogs, apps de noticias o marketing."

`1.414`:
Augmented Fourth
Dramática
"Sitios de diseño, portfolios o apps muy visuales."


2. Cálculo: Construcción de la Escala

Ej: Usamos el ratio Minor Third (1.200)
con una base de 1rem (16px).

16×1.200=19.20
19.20×1.200=23.04
23.04×1.200=27.65

En código, redondeamos estos valores
o usamos rem para mantener la accesibilidad

`Small`: 0.833rem (13px)
`Base`: 1rem (16px)
`H3`: 1.2rem (19px)
`H2`: 1.44rem (23px)
`H1`: 1.728rem (28px)


3. Sistema de Nomenclatura: T-Shirt Sizing
Para una escala cohesiva, evita llamarlas por su tamaño (ej. text-16px).

Usa nombres semánticos:

`text-xs` (Anotaciones, captions)
`text-sm` (Texto secundario)
`text-base` (Cuerpo de texto)
`text-lg` (Subtítulos)
`text-xl`, text-2xl... (Encabezados)


4. Ritmo Vertical: Line-Height
Error: mismo interlineado para todo

Regla: A mayor tamaño de letra, menor interlineado relativo.
Texto de cuerpo (16px): Necesita aire para leerse bien (1.5 o 1.6).
Títulos grandes (32px): Si dejas mucho espacio, se ven "desconectados" (1.1 o 1.2).


5. Implementación
CSS con Variables

Sistema consistente, define estos valores en tu :root

```
:root {
  /* Ratio: 1.2 (Minor Third) */
  --text-xs: 0.75rem;   /* 12px */
  --text-sm: 0.875rem;  /* 14px */
  --text-base: 1rem;    /* 16px */
  --text-lg: 1.25rem;   /* 20px */
  --text-xl: 1.563rem;  /* 25px */
  --text-2xl: 1.953rem; /* 31px */

  /* Line Heights */
  --lh-tight: 1.2;
  --lh-normal: 1.5;
}
```


6. Accesibilidad Tipográfica (WCAG)

Nunca menos de 12px: Es el límite legal/funcional de legibilidad.
Usar rem en lugar de px: permite que si el usuario cambia el tamaño de fuente en los ajustes de su móvil, tu app se adapte correctamente.
Contraste: tu escala tipográfica debe aplicarse usando los Design Tokens de color
para cumplir con el ratio de 4.5:1.


#### Escalas armónicas: Major Second y Perfect Fourth

Se basan en intervalos musicales
para crear una progresión de tamaños que el ojo humano percibe como "proporcionada" y "natural".

Como Major Second o Perfect Fourth:
qué tan rápido va a crecer tu tipografía a medida que subes en la jerarquía
de un párrafo a un título

1. Major Second (Ratio 1.125)
Escala compacta y sutil

Matemática: Cada tamaño es un 12.5% más grande que el anterior (Base×1.125).

Sensación visual: Hay muy poca diferencia entre un texto base y un encabezado
Produce una interfaz plana, densa y seria

Uso:
Dashboards con muchísima información.
Interfaces de software técnico o médico.
Apps móviles donde el espacio de pantalla es crítico y no quieres títulos gigantes que roben espacio al contenido.


2. Perfect Fourth (Ratio 1.333)
escala dramática y audaz
es el intervalo de una "cuarta perfecta"

Matemática: Cada tamaño es un 33.3% más grande que el anterior (Base×1.333).

Sensación visual: Existe un contraste muy marcado
El título salta a la vista de inmediato, creando una jerarquía visual muy clara y agresiva.

Uso:
Apps de marketing o landing pages.
Blogs de noticias o revistas digitales.
Interfaces donde quieres que el usuario escanee títulos rápidamente antes de leer el cuerpo.


3. Comparativa visual (Base 16px)

Cambio en la jerarquía solo con el multiplicador

Nivel: Major Second (1.125) | Perfect Fourth (1.333)

Párrafo: 16.00 px | px,16.00 px
H3: 18.00 | px21.33 px
H2: 20.25 | px,28.43 px
H1: 22.78 | px,37.90 px

En Major Second, el H1 es casi del tamaño del H3 en Perfect Fourth


4. Elección
Debes elegir una y mantenerla en todo el sistema. No mezcles ratios.

Analiza tu densidad:
¿Tienes muchas tablas y datos?
Ve por `Major Second` o `Minor Third` (1.200).

Tono de voz:
ej: app de lujo o de arte
Perfect Fourth o el Golden Ratio (1.618) dan esa sensación de elegancia y espacio

Dispositivos:
En móviles pequeños, ratios muy altos (como Perfect Fourth) pueden hacer que una sola palabra de un título ocupe tres líneas


5. CSS
Una técnica avanzada es usar una escala que cambie según el tamaño de la pantalla
pero manteniendo el ratio.

```
:root {
  /* Definimos nuestra escala base */
  --ratio: 1.25; /* Major Third por ejemplo */
  --s-base: 1rem;
  
  --s-md: calc(var(--s-base) * var(--ratio));
  --s-lg: calc(var(--s-md) * var(--ratio));
  --s-xl: calc(var(--s-lg) * var(--ratio));
}

h1 { font-size: var(--s-xl); }
```



### Teoría de la Gestalt: Proximidad, Similitud, Continuidad

Psicología de la percepción aplicada al diseño
Premisa: El todo es diferente a la suma de sus partes

El cerebro del usuario no ve "píxeles" o "botones sueltos";
ve grupos, relaciones y jerarquías

Si estas leyes, puedes guiar el ojo del usuario sin necesidad de poner flechas o textos explicativos.

1. Ley de Proximidad
Los elementos que están cerca unos de otros se perciben como un grupo relacionado
mientras que los que están lejos se perciben como independientes.

En una App: Es la base del espaciado (padding y margin).
Error: Poner la misma distancia entre el título y el párrafo que entre el párrafo y el siguiente título

Regla: El espacio entre elementos de un mismo grupo debe ser menor que el espacio entre grupos diferentes


2. Ley de Similitud
Percibimos los elementos que comparten características visuales
visuales (color, forma, tamaño o iconografía)
como parte de un mismo grupo o con la misma función

App: Si usas un botón redondo y azul para "Guardar"
el usuario esperará que cualquier otro botón redondo y azul ejecute una acción positiva.

Cohesión: Esta ley es la razón por la que tus Design Tokens de color y forma son tan importantes
Si rompes la similitud, confundes al usuario


3. Ley de Continuidad
Nuestros ojos siguen naturalmente el camino, la línea o la curva más suave
Preferimos ver una figura continua que líneas separadas

App: Se usa mucho en los Listados o Carruseles
Si dejas ver solo la mitad de una "card" en el borde de la pantalla
el ojo entiende que hay continuidad y que debe hacer scroll
No necesitas un botón de "ver más".


4. Ley de Clausura (Cierre)
El cerebro tiende a completar figuras incompletas
Si falta una parte de una forma, nuestro cerebro llena el vacío para percibir un objeto entero

App: Se aplica en la Iconografía
Muchos iconos modernos no cierran todas sus líneas (estilo outline)
pero entendemos perfectamente que es un "carrito de compras" o un "perfil".
hace que la interfaz se sienta más ligera y moderna.


5. Ley de Figura y Fondo
Nuestra mente separa el objeto (la figura) del área que lo rodea (el fondo).

App: Es la base de la Elevación y el Glassmorphism.

Técnica: Al usar una sombra o un desenfoque (blur)
Comunicamos "Esto es la figura (importante) y esto es el fondo (secundario)"
"Esto es la figura (importante) y esto es el fondo (secundario)"


6. Ley de Región Común
Elementos que se encuentran dentro de un mismo límite
(como un borde o una caja) se perciben como un grupo
incluso si tienen formas diferentes

App: El uso de Cards (Tarjetas).
Al encerrar una imagen, un texto y un botón en una caja con un fondo sutil o borde
creas una unidad de información clara.

Aplicar Gestalt:
Una app profesional debe estas leyes para crear un Ritmo Visual

1. espacios (Proximidad):
Usa una escala (ej. 8px, 16px, 24px) para separar niveles de información.

2. Estandariza formas (Similitud):
Todos los inputs deben tener el mismo border-radius.

3. Jerarquiza (Figura/Fondo):
Los elementos interactivos deben resaltar sobre el fondo.


### Grids: 8pt Grid System (espaciado matemático)

La Gestalt nos dice cómo agrupamos, pero el Grid nos dice dónde poner las piezas con precisión matemática.

Unifica el diseño y la programación
hace que las leyes de la Gestalt

En lugar de usar números al azar para tus márgenes, paddings y tamaños (13px, 17px, 21px)
usas múltiplos de 8 (8, 16, 24, 32, 40, 48...).

1. Número 8
Es el "número mágico" del diseño de interfaces por tres razones técnicas

Escalabilidad Perfecta:
La inmensa mayoría de las pantallas modernas tienen resoluciones que son múltiplos de 8 (o al menos de 4).
Al usar 8, evitas los "medios píxeles" (1.5px) que hacen que las líneas se vean borrosas o "blurries".

Consistencia Mental:
Elimina la fatiga de decisión
Si tienes que separar un título de un párrafo
eliges 8px o 16px.

Armonía con la Tipografía:
Como la mayoría de las fuentes base son de 16px (múltiplo de 8)
el espaciado fluye naturalmente con el texto.


2. Hard Grid vs. Soft Grid
Dos formas de aplicar este sistema:

Hard Grid:
Colocas una cuadrícula de 8x8 de fondo
cada elemento debe encajar exactamente en los cuadros
Es muy estricto y se usa más en diseño gráfico complejo.

Soft Grid:
Usado en en Apps.
Solo te aseguras de que el espacio entre elementos
(márgenes y paddings) sea múltiplo de 8.
El elemento en sí puede tener un tamaño diferente, pero su "aire" siempre sigue la regla


3. Media Rejilla (4pt Baseline)
A veces, 8px es demasiado salto para separar un ícono de su texto.
En esos casos, se permite usar el sistema de 4 puntos como excepción controlada

Usa 4px para detalles minúsculos
Usa 4px para detalles minúsculos


4. Aplicación: Definir los Tokens de Espaciado
Sistema sea consistente y ligero en CSS

No los llames por su número, llámalos por su escala:

```
:root {
  --space-unit: 8px;

  --space-xs: calc(var(--space-unit) * 0.5); /* 4px */
  --space-sm: var(--space-unit);             /* 8px */
  --space-md: calc(var(--space-unit) * 2);   /* 16px */
  --space-lg: calc(var(--space-unit) * 3);   /* 24px */
  --space-xl: calc(var(--space-unit) * 4);   /* 32px */
}
```


5. Grid en Layout (Columnas)
Mientras que el 8pt Grid controla el espaciado micro
el layout controla el macro

En móvil, lo estándar es:
4 Columnas.
Gutter (espacio entre columnas): 16px (2x8).
Margin (espacio a los lados): 16px o 24px (Múltiplos de 8).

Cuando aplicas el 8pt Grid, sucede algo mágico: el usuario no sabe por qué
pero siente que la app está "bien hecha".

Hay un ritmo visual constante
Si un botón tiene 16px de padding
la card tiene 16px de margen
y el título está a 24px del borde
todo se siente alineado aunque no haya líneas visibles.


#### Hard Grid

La interfaz se dibuja sobre una cuadrícula visible
(o invisible pero estricta) de 8x8 píxeles.

Regla: Tanto el tamaño de los elementos (ancho/alto) como su posición deben ser múltiplos de 8.

Resultado: Si un icono mide 24x24 y el texto tiene una altura de línea de 24
todo encaja como piezas de Tetris perfectamente alineadas en una red.

Uso: Muy común en diseño de iconos o cuando se busca una precisión matemática extrema en layouts muy complejos

Ej: forzamos dimensiones fijas para que encajen en la red

```
.box-hard {
  width: 160px;  /* 20 * 8 */
  height: 80px;  /* 10 * 8 */
  margin: 16px;  /* 2 * 8 */
}
```


#### Soft Grid

Dejamos que el contenido mande, pero controlamos el "aire":

```
.box-soft {
  width: auto;       /* El ancho depende del texto o del padre */
  padding: 16px;     /* El aire interno es múltiplo de 8 */
  margin-bottom: 24px; /* El espacio entre bloques es múltiplo de 8 */
}
```


Para una app moderna se puede usar Soft Grid
Es menos frustrante de implementar en código y produce el mismo efecto de orden y limpieza visual
El usuario no notará si tu botón mide 42px o 40px de alto
si notará si el espacio entre el botón y el texto es inconsistente.


#### 4pt baseline

Ajuste fino" del sistema de 8pt
Se utiliza principalmente en la micro-tipografía
y en elementos pequeños donde un salto de 8px se siente demasiado brusco
rompiendo la jerarquía en lugar de ayudarla.

Media baldosa:
Si el sistema de 8pt son baldosas grandes
4pt es usar "media baldosa" para alinear el texto.

En lugar de alinear el borde de la caja de texto
alineamos la línea base (baseline), que es donde se apoyan las letras.

Regla:
Todo el espaciado vertical debe ser múltiplo de 8
excepto cuando trabajas con texto e iconos muy juntos, donde usas múltiplos de 4.


Ej: botón y el icono
un botón con un icono al lado del texto
Si aplicas 8px de separación, puede que el icono se vea "desconectado" del texto
(Ley de Proximidad de la Gestalt).

Con 8px: El icono y el texto parecen dos elementos separados.
Con 4px: El icono y el texto se perciben como una unidad funcional única.

```
.btn-content {
  display: flex;
  align-items: center;
  gap: 4px; /* Aquí aplicamos la 4pt baseline */
}
```


Ej: Tipografía (Line-Height)
El uso más profesional de la 4pt baselin

Para que el ritmo vertical de tu app sea perfecto
el line-height de tus textos siempre debe ser un múltiplo de 4.

Si tu fuente base es de 16px:

Un line-height de 20px (16 + 4) se siente compacto
(bueno para etiquetas).

Un line-height de 24px (16 + 8) se siente aireado
perfecto para lectura de párrafos.


4pt vs 8pt:

`Separación Icono-Texto`:
4px
Crea unidad visual.

`Padding interno de un Input`:
12px (8+4)
Da un aire elegante sin ser gigante.

`Separación Título - Párrafo`:
8px o 16px
Define grupos claros de información.

`Margen entre Secciones`:
`"24px, 32px o 48px"`
Crea pausas respiratorias en la interfaz.


Visualización del Ritmo Vertical:
 
Cuando dominas la 4pt baseline
puedes lograr que incluso con diferentes tamaños de letra
(un H1 gigante y un párrafo pequeño)
las líneas de base siempre coincidan en una red invisible
Es lo que hace que una app se vea "cara" y pulida.

No satures tu CSS de variables de 4px.
Úsala solo como un modificador para detalles:

```
:root {
  --space-unit: 8px;
  --space-fine: 4px; /* Solo para micro-ajustes */
}
```


#### Grid en Layout (Columnas)

Mapa que organiza las columnas verticales donde "viven" tus componentes
Mientras que el sistema de 8pt controla los espacios pequeños (micro)

El sistema de columnas controla la estructura general (macro).

App sea cohesiva:
móvil-primero
Adaptarse a pantallas anchas después

1. Grid para Móvil (Breakpoint: < 600px):
En móvil el espacio es limitado

Ysamos un sistema simplificado:

Columnas: 4 columnas (es el estándar de iOS y Android).
Gutter (Espacio entre columnas): 16px (múltiplo de 8).
Margins (Márgenes laterales): 16px o 24px (múltiplos de 8).
Comportamiento: Las columnas son fluidas (se estiran según el ancho del teléfono).

2. Grid para Escritorio / Pantalla Ancha (Breakpoint: > 1024px)
En pantallas grandes tenemos espacio para la complejidad.

Columnas: 12 columnas
número mágico porque es divisible por 2, 3, 4 y 6, permitiendo casi cualquier diseño

Gutter: 24px o 32px (múltiplos de 8).

Max-Width: A diferencia del móvil, en escritorio limitamos el ancho total (ej. 1200px)
para que las líneas de texto no sean infinitas y difíciles de leer.

Margins: Automáticos (centran el contenido en la pantalla).

3. Ej en CSS Grid
Implementación ligera y consistente.

```
/* --- GRID MÓVIL (Por defecto) --- */
.main-grid {
  display: grid;
  grid-template-columns: repeat(4, 1-fr); /* 4 columnas iguales */
  gap: 16px;                              /* Gutter de 16px */
  padding: 0 16px;                        /* Márgenes laterales */
  margin: 0 auto;
}

/* --- GRID ESCRITORIO --- */
@media (min-width: 1024px) {
  .main-grid {
    grid-template-columns: repeat(12, 1fr); /* Cambiamos a 12 columnas */
    gap: 24px;                              /* Gutter más amplio */
    max-width: 1200px;                      /* Limitamos el ancho */
    padding: 0 40px;                        /* Más aire a los lados */
  }
}
```

4. Distribución de elementos (Cohesión)
Para mantener la consistencia, los componentes deben "ocupar" un número determinado de columnas

En Móvil: Una "Card" suele ocupar las 4 columnas (ancho total).

Escritorio: Esa misma "Card" puede ocupar 4 columnas
permitiendo tener 3 tarjetas por fila (12/4=3).

```
/* Elemento que se adapta al grid */
.card {
  grid-column: span 4; /* En móvil ocupa todo (4/4), en desktop ocupa un tercio (4/12) */
}
```

5. Gutter Proporcional
El espacio entre columnas debe tener una relación con el Padding interno de tus componentes.

Regla Proporcional:
Si el espacio entre tus columnas es de 24px
el espacio dentro de tus tarjetas debería ser también de
o un paso abajo en tu escala, como 16px
Creará una alineación visual perfecta que el ojo agradece.



## 2. Design Systems: Arquitectura de Sistemas

### Atomic Design

Entender la jerarquía desde el átomo hasta la página.



### Design Tokens

Cómo abstraer valores (color, spacing, elevation) en variables reutilizables y agnósticas.

Creado por Brad Frost
es la metodología que nos permite escalar todo hacia una interfaz real.
La idea es dejar de diseñar "pantallas" y empezar a diseñar un sistema de componentes jerárquicos.

1. Átomos: La unidad mínima
bloques de construcción que no se pueden dividir más sin perder su funcionalidad
donde inyectamos nuestros `Design Tokens` (8pt grid, OKLCH, etc.).

Ej: Un botón, un input de texto, un icono, un label, o incluso un color específico.
App: Un botón no es solo "un botón", es un átomo que hereda la escala tipográfica text-base y el color primary-600.


2. Moléculas: La unión de átomos
grupo de átomos unidos que funcionan como una unidad simple
empezamos a aplicar la `Teoría de la Gestalt` (Proximidad y Región Común).

Ej: Un campo de búsqueda (Input + Botón + Label).
App: La molécula define cómo se comporta el espacio entre sus átomos
(usando nuestro `sistema de 4pt/8pt`).


3. Organismos: Componentes complejos
grupos de moléculas unidos para formar una sección distintiva de la interfaz
Son más independientes y pueden funcionar por sí mismos

Ej: Header (Logotipo + Menú de navegación + Buscador) o una Card de producto.
App: Aquí es donde el `Grid de Columnas` entra en juego
para posicionar las moléculas internamente


4. Plantillas (Templates): El esqueleto del Layout
Las plantillas dejan de lado el contenido real (fotos, nombres)
para centrarse en la estructura

Donde aplicamos el `Layout Grid` de 4 o 12 columnas que vimos.

Función: Definen cómo se organizan los organismos en la pantalla
Es el plano antes de decorarla

Cohesión: Garantizan que todas las páginas de "Perfil" o "Ajustes" sigan la misma distribución


5. Páginas
Instancias específicas de las plantillas donde volcamos el contenido real

Importancia: Aquí validamos si el sistema funciona
El título es demasiado largo y rompe la molécula?
El color de fondo del organismo compite con la imagen?

Ciclo de mejora: Si algo falla en la página, no lo arreglas solo ahí
vuelves al Átomo o a la Molécula para corregir el sistema entero.


Cohesión y Consistencia:
Ej: cambiar el border-radius de tu app de 4px a 12px

Sin Atomic Design: Tendrías que buscar cada botón, cada card y cada input en todas tus pantallas
Con Atomic Design: Cambias el átomo "Botón" y el átomo "Shape", y automáticamente los organismos y páginas se actualizan
La consistencia es automática porque la fuente de verdad es única


#### Átomo

elemento más pequeño que aún conserva una función o identidad.

Ej:átomo más fundamental de cualquier interfaz: El Botón.
aunque tiene propiedades (color, texto, forma)
si lo divides más, dejas de tener un elemento interactivo.

no lo diseñamos con valores fijos
lo construimos "inyectando" los fundamentos de la Fase 1.

1. Las Propiedades (Design Tokens)
Un botón profesional se define por estos tokens:

Color (OKLCH): oklch(0.60 0.18 250) (Nuestro Primary-600).
Tipografía (Escala Armónica): text-base (16px) con un line-height de 24px (4pt baseline).
Espaciado (8pt Grid): Padding horizontal de 24px (3x8) y vertical de 12px (1.5x8).
Forma (Corner Radius): 8px (múltiplo de 8) para un look moderno y estándar.

2. Estados del Átomo
Un átomo debe ser consistente en su comportamiento
No basta con el estado "reposo"; un átomo de botón debe definir sus variantes:

`Default`: El estado base.
`Hover/Focus`: Un cambio de luminosidad (L) en OKLCH (ej. bajar de L: 0.60 a L: 0.55).
`Active`: Cuando el usuario hace clic (se puede usar una pequeña escala de 0.98 o un color más oscuro).
`Disabled`: Un croma (C) bajo y luminosidad alta para indicar que no es interactivo.

Código:
Ves cómo los fundamentos se convierten en el átomo

```
.atom-button {
  /* Tokens de Color */
  background-color: var(--primary-600);
  color: var(--on-primary);
  
  /* Tokens de Espaciado (8pt Grid) */
  padding: var(--space-12) var(--space-24);
  
  /* Tokens de Tipografía */
  font-size: var(--text-base);
  font-weight: 500;
  line-height: 1; /* Centrado óptico */
  
  /* Tokens de Forma */
  border-radius: var(--radius-8);
  border: none;
  
  /* Comportamiento */
  cursor: pointer;
  transition: all 0.2s ease;
}

.atom-button:hover {
  background-color: var(--primary-700);
}
```

átomo:
si quitas el texto, el botón pierde su mensaje
Si quitas el color, pierde su jerarquía
Están fusionados.

En cambio, si pones un Icono (otro átomo) al lado del texto
estarías creando una Molécula de Botón con Icono
donde la relación de espacio entre ellos (los 4px de la baseline que vimos)
es lo que define a la molécula


#### Moléculas

unión de dos o más átomos que trabajan juntos para cumplir una función específica
una molécula es el primer nivel donde aplicamos las Leyes de la Gestalt
específicamente la de Proximidad y Región Común
para crear una unidad de significado.

1. Search Bar
Es la suma de tres átomos coordinados bajo las reglas de tu sistema.

Átomo A (Label): Un texto pequeño que indica qué hacer.
Usa el token de tipografía text-sm.

Átomo B (Input de texto): El contenedor donde el usuario escribe.
Hereda el radius-8 y el space-12 de padding.

Átomo C (Icono): El átomo visual de la "lupa".
Hereda el color neutral-500.

2. Relaciones Espaciales
Aplicas el 8pt Grid y la 4pt Baseline para que la molécula sea cohesiva:

Espacio entre Label e Input: Usamos 4px (4pt baseline) porque están íntimamente relacionados
Espacio entre Icono y Texto (dentro del input): Usamos 8px para que el icono tenga aire pero se sienta parte del campo.
Consistencia: Si esta molécula se usa en la pantalla de "Inicio" y en la de "Ajustes", debe medir exactamente lo mismo.

3. Código
La molécula se vería como un contenedor que organiza a sus átomos

```
/* La Molécula define la estructura de sus átomos */
.molecule-search-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-4); /* Ley de Proximidad: Espacio mínimo entre label e input */
  width: 100%;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.atom-icon-search {
  position: absolute;
  left: var(--space-12);
  color: var(--neutral-500);
}

.atom-input {
  width: 100%;
  padding: var(--space-12) var(--space-12) var(--space-12) var(--space-40); /* 40px deja espacio para el icono */
  border: 1px solid var(--neutral-300);
  border-radius: var(--radius-8);
  font-size: var(--text-base);
}
```

Molécula:
su función es única y simple: "buscar".

Si le añadieras un menú desplegable de categorías, un botón de filtros avanzados y un historial de búsquedas
entonces estarías construyendo un Organismo de Búsqueda

Si decides que todos los textos secundarios (labels) deben ser azules en lugar de grises, solo cambias el Átomo Label
La Molécula de Búsqueda (y todas las demás moléculas que usen ese label) se actualizarán automáticamente.


#### Organismos

Donde empezamos a ver una interfaz real y funcional
Es una combinación de moléculas (y a veces átomos sueltos)
forman una sección compleja e independiente de la app

Si una molécula es "buscar", un organismo es todo el "Header de Navegación"
o una "Card de Producto".

Ej: Card de Producto

1. Componentes

`Imagen (Átomo)`: El contenedor visual del producto.
`Badge de Descuento (Átomo)`: Una etiqueta pequeña (ej. "-20%").
`Información del Producto (Molécula)`: Título (text-lg) + Descripción corta (text-sm).
`Selector de Cantidad (Molécula)`: Botones de +/- y un número.
`Botón de Compra (Átomo)`: El botón de acción principal.

2. Cohesión

Aplicamos las reglas:

Región Común (Gestalt): Encerramos todo en un contenedor
con un radius-16 y una sombra suave (elevation-1) o un borde fino (outline-1).

8pt Grid: El padding interno del organismo debe ser generoso (ej. 24px) para que respire.
El espacio entre el título y el precio puede ser de 8px

Jerarquía de Color (OKLCH): El título usa neutral-900 (máximo contraste)
mientras que la descripción usa neutral-600 (menos peso visual).

3. Código
Se comporta como un "padre" que distribuye el espacio entre sus "hijos" (moléculas).

```
.organism-product-card {
  background-color: var(--md-sys-color-surface);
  border: 1px solid var(--md-sys-color-outline);
  border-radius: var(--radius-16);
  padding: var(--space-24); /* Padding del organismo */
  
  display: flex;
  flex-direction: column;
  gap: var(--space-16); /* Espacio consistente entre moléculas */
  width: 100%;
  max-width: 320px;
}

.card-header {
  position: relative; /* Para posicionar el Badge (Átomo) */
}

.card-body {
  /* Aquí vive la Molécula de Texto */
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.card-footer {
  /* Aquí viven el Selector (Molécula) y el Botón (Átomo) */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--space-8);
}
```

Organismo:
es un objeto repetible
En una página de búsqueda, podrías tener 20 de estos organismos idénticos.

Ventaja: Si decides que el botón de compra ahora debe ser más grande, lo cambias en el Átomo Botón
Si decides que el precio debe ir arriba del título, lo cambias en la Molécula de Texto
Todo el Organismo Card se ajusta solo.

Cuando tomas este Organismo Card y lo metes en un Grid de 12 columnas
junto con un Organismo Sidebar y un Organismo Navbar, habrás creado una Plantilla (Template).


#### Templates

Dejamos de hablar de componentes individuales.
Empezamos a hablar de Layout (Estructura).

Un Template no contiene datos reales (ni nombres, ni fotos específicas).
Es un esquema de cómo los Organismos se distribuyen en el espacio
usando el Grid de Columnas que definimos en la Fase 1.

1. Componentes: Ej. Página de Dashboard
Diseñando la vista principal de una App

El Template define las zonas donde "encajarán" las piezas que ya construimos
Lo forman:

`Zona A (Sidebar)`: Un Organismo de navegación vertical (ocupa 2 de 12 columnas).
`Zona B (Header)`: Un Organismo con buscador (Molécula) y perfil (Átomo).
`Zona C (Hero Section)`: Un espacio para el "Balance Total" (Organismo complejo).
`Zona D (Grid de Contenido)`: Un contenedor donde se repetirán varios Organismos Card (los que vimos antes).

2. Esqueleto
Respetar los márgenes y los saltos de escala

Layout Grid:
Template "obliga" a que el Sidebar siempre mida lo mismo
y que el contenido principal respete el Gutter de 24px.

Espaciado Macro:
Definimos que entre el Header y el Hero haya un espacio de 48px (6x8).
Este espacio es fijo para este Template
garantizando que todas las páginas de la sección "Finanzas" se sientan iguales.

3. Código
Layout Estructural
El template suele ser un contenedor con display: grid
define las áreas con nombres (Grid Areas).

```
.template-dashboard {
  display: grid;
  /* Definimos las áreas: Sidebar a la izquierda, Contenido a la derecha */
  grid-template-areas: 
    "nav header"
    "nav main";
  grid-template-columns: 280px 1fr; /* Sidebar fijo + Espacio flexible */
  grid-template-rows: auto 1fr;
  height: 100vh;
  gap: 0; /* El sidebar suele ir pegado */
}

.main-content-area {
  grid-area: main;
  padding: var(--space-32); /* Espacio macro del sistema */
  display: flex;
  flex-direction: column;
  gap: var(--space-48); /* Distancia entre grandes bloques */
}
```

Template:
clave para la escalabilidad
es el "molde": Dice "Aquí va una Card de Producto".
No le importa si la Card es de una zapatilla o de un reloj.

La Página es el "resultado":
Es cuando el desarrollador conecta la base de datos
aparecen las fotos reales, los precios y el nombre del usuario

Ventaja:
Si se quiere que Sidebar sea más estrecho en todas las pantallas de la App
no tienes que ir pantalla por pantalla
Solo ajustas el Template, y automáticamente el Dashboard, los Ajustes y el Perfil se corrigen
manteniendo la cohesión total


#### Pages

El diseño deja de ser un sistema abstracto
se convierte en una experiencia de usuario real

En una página, el Template se completa con contenido real
imágenes específicas, textos legales, nombres de usuarios y datos dinámicos
donde validamos si todas nuestras decisiones de la Fase 1 (
(color, tipografía, grid) realmente funcionan

1. Ej: Página de Resumen de Cuenta

Si tomamos el Template de Dashboard
la página es la versión final que el usuario ve en su pantalla

Contenido Real:
En lugar de rectángulos grises, vemos la foto del usuario (Átomo: Avatar)
su saldo de "$4,250.00" (Molécula: Valor) y sus últimas transacciones (Organismos: Listado).

Contexto: 
La página muestra estados específicos
si el usuario no tiene transacciones, la página muestra un "Empty State"
(un organismo diseñado para cuando no hay datos).

2. Función crítica de la Página: Validación
Donde te haces preguntas clave:

Escala la tipografía?:
Qué pasa si el nombre del usuario es muy largo?
Se rompe la molécula del Header?

Es accesible el color?:
El color de éxito que elegimos en OKLCH se lee bien sobre el fondo real de la aplicación?

Funciona Gestalt?:
El usuario entiende qué grupo de transacciones pertenece
a qué día gracias a nuestro 8pt Grid?

3. Código
De template a página

Una página simplemente "llama" al template y le pasa los datos.

```
// Ejemplo conceptual en un componente de Página
const AccountPage = ({ userData, transactions }) => {
  return (
    <DashboardTemplate 
      sidebar={<NavigationOrganism />}
      header={<UserHeader user={userData} />}
      mainContent={
        <>
          <BalanceHero amount={userData.balance} />
          <TransactionList data={transactions} />
        </>
      }
    />
  );
};
```

4. Ciclo de Retroalimentación
Las páginas es que a menudo nos obligan a volver a los Átomos.

Ej: Al ver la página final, notas que los botones se ven pequeños en comparación con las fotos reales
En lugar de agrandar el botón solo en esa página, vuelves al Átomo Botón
ajustas el padding (8pt grid) y, mágicamente, toda tu app mejora.


Átomo:
Bloque básico
"Botón, Icono"

Molécula:
Grupo funcional
Barra de búsqueda

Organismo:
Sección compleja
"Header, Card de producto"

Plantilla:
Estructura/Layout
Esquema de Dashboard

Página:
Interfaz final
Tu cuenta bancaria con tus datos


### Design Tokens

Lugar para guardar todas las "leyes" (colores, tamaños, sombras).
Son el lenguaje común entre diseñadores y programadores
Sin ellos, el sistema de 8pt o los colores OKLCH se pierden en la comunicación.

Constitucióndel sistema de diseño
Son los nombres atómicos que le damos a las decisiones de diseño
(colores, espacios, fuentes) para que puedan ser usados tanto en Figma como en código
(CSS, Swift, Kotlin) de forma idéntica.

En lugar de escribir color: #2563eb, escribimos color: var(--primary-main)
permite que, si mañana quieres que el azul sea un poco más oscuro, lo cambies en un solo lugar y toda la app se actualice

1. Tres Niveles de Tokens
Un sistema profesional no mezcla los nombres.
Los organiza en capas de abstracción

A. Tokens Globales (Primitivos):
Son la paleta cruda. No tienen un contexto de uso, solo describen el valor

`color-blue-500: #2563eb`.
`spacing-16: 16px`.
`font-size-base: 1rem`.

B. Tokens Semánticos (Alias):
donde ocurre la magia
Estos tokens describen `qué hacen o dónde se usan`, no qué color son.

C. Tokens de Componente:
Específicos para un átomo u organismo
Solo se usan cuando un componente necesita una excepción.

`button-primary-bg: var(--color-action-primary)`.

2. Sistema de Espaciado
tokens de espacio (basados en el 8pt Grid) se verían así:

`--space-xs: 4px`
Separación icono-texto (4pt baseline)

`--space-sm: 8px`
Separación interna de botones

`--space-md: 16px`
Padding de inputs y listas

`--space-lg: 24px`
Padding de tarjetas y títulos

`--space-xl: 32p`
Márgenes de sección

3. Tokens de Color Avanzados (OKLCH)
Son intenciones, no solo color:

```
:root {
  /* Globales */
  --blue-h: 250;
  --blue-c: 0.18;
  
  /* Semánticos (Relacionados con la accesibilidad) */
  --brand-main: oklch(0.60 var(--blue-c) var(--blue-h));
  --brand-hover: oklch(0.55 var(--blue-c) var(--blue-h));
  --surface-default: oklch(0.98 0.01 var(--blue-h)); /* Fondo con tinte de marca */
  
  /* Texto (Asegurando contraste WCAG) */
  --text-high-contrast: oklch(0.20 0.05 var(--blue-h));
  --text-low-contrast: oklch(0.45 0.02 var(--blue-h));
}
```

4. Ventaja: Modo Oscuro
Con tokens semánticos, crear un modo oscuro toma minutos
Solo tienes que redefinir los valores de los tokens semánticos manteniendo los nombres

Modo Claro: --surface-default es Blanco.
Modo Oscuro: --surface-default es Gris Oscuro.

El botón no sabe qué color tiene; solo sabe que su fondo es --surface-default.

5. Herramientas para gestionar Tokens
Para que esto no se quede solo en un documento, los equipos profesionales usan:

Tokens Studio (Figma Plugin): Para conectar el diseño con el código.

Style Dictionary: Una herramienta de Amazon que transforma tus tokens JSON en archivos CSS, Sass, iOS o Android automáticamente.

Deducción de Nombres: Sigue siempre la estructura
`[Categoría]-[Concepto]-[Variante]`
(ej: color-text-muted).


### Sistemas de Elevación


Definir cómo se comporta la luz y la profundidad (Z-axis).

Forma en que el diseño visual comunica profundidad y jerarquía en una interfaz plana (2D).
Se basa en la física del mundo real: cuando un objeto está más cerca de una fuente de luz
proyecta una sombra más difusa y parece "flotar" más alto.

La elevación no es solo decorativa; sirve para decirle al usuario qué elementos están encima de otros
(como un modal sobre un fondo) y cuáles son interactivos.

1. Eje Z y la Iluminación
Imagina que la pantalla de tu móvil es el nivel 0.
Cada elemento que añades puede "subir" en el eje Z.

Luz: En diseño de interfaces, la luz suele venir de la parte superior (cenital).
Por eso, las sombras se proyectan hacia abajo

Distancia: A mayor elevación, la sombra se vuelve más grande
más suave (menos opaca) y se desplaza más hacia abajo.

2. Niveles de Elevación (Escala de 0 a 5)
Al igual que con los colores y espacios, no usamos sombras al azar
Creamos una escala de tokens (normalmente basada en los niveles de Material Design):


`0: Flat`
"Fondos, inputs, botones secundarios."
,Sin sombra.

`1: Raised`
"Cards de contenido, botones principales."
Sombra muy sutil y cercana.

`2: Hover`
Estado al pasar el ratón sobre una card.
La sombra crece un poco.

`3: Sticky`
Menús de navegación superiores (Navbars).
Sombra clara que separa del contenido scrollable.

`4: Floating`
Botones de acción flotante (FAB).
"Sombra marcada, da sensación de ""despegue"".

`5: Overlay`
"Diálogos, modales, menús desplegables."
"Sombra profunda, domina la pantalla."

3. Anatomía de una Sombra: Profesional (OKLCH)
La sombra no debe ser simplemente "negra con transparencia".

Crear o elegir un set de iconos que compartan el mismo grosor de trazo y radio de esquina.

Sombras con "Tinte": Una sombra puramente negra (rgba(0,0,0,0.2))
hace que el diseño se vea sucio
Usa un poco del matiz (Hue) de tu marca en la sombra.

Capas de Sombras: Las sombras más realistas no usan un solo valor de box-shadow
sino dos o tres capas superpuestas (una para el contacto cercano y otra para la difusión lejana).

```
/* Ejemplo de Elevación Nivel 2 (Tokens Semánticos) */
:root {
  --elevation-2: 
    0 2px 4px oklch(0.2 0.02 250 / 0.08), 
    0 4px 12px oklch(0.2 0.02 250 / 0.12);
}
```

4. Elevación mediante Color (Modo Oscuro)
En el Modo Oscuro, la profundidad se comunica mediante Luminosidad

Nivel 0: El color más oscuro (fondo base).

Nivel 1: Un gris ligeramente más claro.

Nivel 5: El gris más claro de la escala de elevación.
Esto imita cómo los objetos más cercanos a la luz se ven más claros en la penumbra.

5. Principio de "Preservación del Modelo Mental"
La elevación ayuda a la Gestalt (Figura y Fondo) 

Si un usuario abre un menú desplegable
ese menú debe tener una elevación mayor que cualquier otro elemento en la pantalla

Si no lo haces, el usuario puede confundirse sobre qué elemento está "activo"
o qué parte de la interfaz puede ignorar momentáneamente.


#### Elevación modo claro

Dependemos de las sombras (física de la luz)

Sombras Naturales:

Clave: No uses negro puro (#000000)
Usa el matiz de tu marca con una luminosidad muy baja en OKLCH
para que la sombra se sienta "integrada".

Técnica de Capas: Una sombra realista usa una capa de "difusión"
y otra de "contacto".

Ej: Token: elevation-md (Nivel 2)

```
/* Sombra "teñida" con el azul de la marca */
.card-light {
  background: oklch(0.99 0.01 250); /* Blanco azulado */
  box-shadow: 
    0 2px 4px oklch(0.2 0.02 250 / 0.08), /* Capa de contacto */
    0 10px 20px oklch(0.2 0.02 250 / 0.04); /* Capa de aire */
}
```


#### Elevación modo oscuro

Dependemos de la luminancia de la superficie (física de la emisión/reflexión).

Capas de Luz:

Clave: Usamos superposiciones (overlays) de color más claro
A mayor elevación, más clara es la superficie.

Regla de Oro: El fondo base nunca debe ser negro puro (#000)
sino un gris muy oscuro, para permitir que haya niveles por "debajo"
(como el negro total para sombras).

Nivel,Rol,Color (OKLCH),"Porcentaje de ""Brillo"" extra"

`Lvl 0`:
Fondo Base
oklch(0.15 0.01 250)
0% (Más oscuro)

`Lvl 1`:
Cards / Botones
oklch(0.22 0.01 250)
+7% de Luminosidad

`Lvl 2`:
Hover / Modales
oklch(0.28 0.01 250)
+13% de Luminosidad

`Lvl 4`:
Diálogos/Popups
oklch(0.35 0.01 250)
+20% (Más claro)

3. Card de Producto

Modo Claro (Sombra)
La Card es blanca
El fondo es un gris casi imperceptible.
La Card proyecta una sombra
flotando sobre el contenido

Oscuro (Superficie):
La Card es un gris oscuro.
El fondo es un gris aún más oscuro
La Card se ve más clara que el fondo
más cerca de ti (luz)

4. Design Tokens

Para que funcione automáticamente, tus tokens deben ser Semánticos:

```
:root {
  /* Modo Claro */
  --surface-1: oklch(0.99 0.01 250);
  --shadow-1: 0 4px 12px rgba(0,0,0,0.1);
}

[data-theme="dark"] {
  /* Modo Oscuro: Elevamos la luminosidad de la superficie, quitamos sombra */
  --surface-1: oklch(0.25 0.01 250);
  --shadow-1: none; 
}

.card {
  background-color: var(--surface-1);
  box-shadow: var(--shadow-1);
}
```

Sin un buen sistema de elevación, el usuario no sabría que un Modal está bloqueando el resto de la app
En modo oscuro, si no aclaras la superficie del modal, este se "fusionaría" con el fondo, creando confusión visual.



### Iconografía

Comunica acciones y conceptos de forma instantánea sin necesidad de leer
La iconografía debe seguir las mismas reglas matemáticas y visuales que tu tipografía y tu grid

1. Bounding Box y el Live Area
Un error común es diseñar iconos de diferentes tamaños
los iconos se diseñan dentro de un contenedor cuadrado estándar (el Bounding Box).

Tamaño Base: El estándar es 24x24px (múltiplo de 8).

Live Area: Es el espacio seguro interno (normalmente 20x20px).
Dejamos un margen de 2px alrededor para que los iconos "respiren"
no se corten visualmente cuando se renderizan en diferentes pantallas.

2. Consistencia de Estilo (ADN Visual)
Deben compartir cuatro rasgos genéticos:

Grosor de Trazo (Stroke): 
Si usas un trazo de 2px, todos los iconos deben tenerlo
No mezcles iconos "finos" con "gruesos".

Terminaciones (Caps & Corners):
esquinas redondeadas o angulares?
Si tu tipografía es suave, usa terminaciones redondeadas (round caps).

Nivel de Detalle: Los iconos deben ser abstractos
Demasiado detalle hace que el icono se vea como una mancha cuando se reduce a tamaños pequeños

Relleno vs. Contorno:

Outline (Contorno): Para estados por defecto (reposo).

Filled (Relleno): Para estados activos o para dar énfasis
(ej. el icono de la sección donde el usuario está ubicado).

3. Alineación Óptica (Gestalt en Iconos)
No todos los iconos tienen el mismo "peso visual" aunque midan lo mismo.

Un icono de Círculo parece más pequeño que un Cuadrado de la misma altura.
Solución: Los iconos circulares o triangulares deben sobresalir ligeramente del Live Area para que, al ojo humano, parezcan tener el mismo tamaño que los rectangulares

4. Iconografía y Design Tokens
Los iconos nunca deben tener colores fijos
Deben heredar los colores de tu sistema

`Color de Icono (Default)`:
var(--text-low-contrast) o var(--neutral-500).

`Color de Icono (Acción)`:
var(--brand-main).

`Color de Icono (Error)`:
var(--error-main).

```
.icon-svg {
  width: 24px;
  height: 24px;
  fill: currentColor; /* El icono hereda el color del texto del padre */
}
```

5. Icono como Átomo

En la Fase 2, el icono es un Átomo.

Solo: Es un botón de "Cerrar" (X).
En Molécula: Un icono de "Lupa" dentro de un input de búsqueda.
En Organismo: Un icono de "Flecha" dentro de una Card para indicar que es clickeable.

6. Accesibilidad e Iconos
Un icono solo casi nunca es suficiente

Acompañamiento: Siempre que sea posible, acompaña el icono con un Label (texto).

Aria-labels: Para lectores de pantalla, si el icono es un botón (ej. un "Trash can")
el código debe decir aria-label="Eliminar".


#### Creación de icono

Proceso:

1. Configura el Grid: En Figma o Illustrator, crea un frame de 24x24px y activa un "Snap to Grid" de 2px.

2. Dibuja con Geometría: Usa círculos y rectángulos en lugar de trazos libres
Esto garantiza que el "peso visual" sea equilibrado (Gestalt).

3. Exporta como SVG Limpio: Asegúrate de convertir todos los trazos a contornos (Outline Stroke) antes de exportar
para que el icono no cambie de grosor si el desarrollador lo escala.



## 3. Dialectos visuales existentes, elección o creación de uno propio

Personalidad específica que adquiere un sistema de diseño cuando se combinan todos los átomos y reglas vistas

Si el "Lenguaje Visual" es la gramática (colores, grid, tipos)
el Dialecto es el "acento" o el tono de voz

Tu app suena seria y corporativa?
Es lúdica y experimental?

Establecer un dialecto es lo que evita que una interfaz parezca una plantilla genérica

Componentes:

1. Forma y Radio (Shape & Corners)
Define la "suavidad" de la interfaz.

`Radios pequeños (2px - 4px)`: Transmiten precisión, seriedad y una estética técnica o "brutalista".
`Radios grandes (12px - 24px)`: Transmiten cercanía, amigabilidad y un estilo moderno/orgánico.
`Cápsulas (Pill-shaped)`: Muy comunes en botones de acción rápida para que destaquen sobre lo rectangular.

2. Densidad de Información
Cuánto "aire" (espacio en blanco) dejas entre tus componentes usando el 8pt Grid.

`Alta Densidad`: Menos márgenes
Ideal para herramientas de productividad, dashboards financieros o editores de código
(donde el usuario necesita ver muchos datos a la vez).

`Baja Densidad`: Mucho espacio en blanco
Transmite lujo, enfoque y calma
Ideal para apps de meditación, revistas de arte o landing pages de productos premium.

3. Color y Contraste (Cromática)
aplicamos lo aprendido sobre OKLCH

`Dialecto Vibrante`:
Alta saturación (Croma) y contrastes fuertes
Muy usado en apps de juegos o redes sociales.

`Dialecto Sobrio`:
Colores desaturados, monocromáticos y contrastes sutiles
Usado en apps de lectura o banca institucional

4. Elevación y Textura

`Flat (Plano)`: Sin sombras ni degradados
Estética limpia y minimalista.

`Skeuomorphism / Neumorphism`:
Sombras profundas y texturas que imitan el mundo físico.

`Glassmorphism`:
Uso de transparencias y desenfoques (backdrop-filter: blur).
Transmite una sensación de tecnología futurista y profundidad.


Ej. Dialectos Opuestos

Componente,"Dialecto ""Financiero/Serio""","Dialecto ""Lifestyle/Amigable"""

`Bordes`:
2px (Rectos)
16px (Redondeados)

`Espaciado`:
Compacto (8px)
Amplio (24px)

`Elevación`:
Flat o Sombra sutil
Sombras difusas y suaves

`Tipografía`:
Sans-serif geométrica
Serif elegante o Rounded

Un dialecto visual inconsistente es lo que hace que una app se sienta "rota".

Ej. Si tu app usa botones con esquinas muy redondeadas (estilo amigable)
pero tus campos de texto (inputs) tienen esquinas rectas (estilo serio),
el cerebro del usuario detecta que algo no encaja, aunque no sepa explicar por qué


Design Tokens:

```
:root {
  /* Dialecto "Moderno/Suave" */
  --radius-main: 16px;
  --spacing-base: 24px;
  --elevation-main: 0 10px 30px rgba(0,0,0,0.05);
  --font-main: 'Inter', sans-serif;
}
```

##### Al cambiar estos 4 o 5 tokens principales, cambias el acento visual de toda la aplicación sin tocar el código de los componentes.


### Material Design 3: Análisis de la lógica de contenedores y color dinámico.

También conocido como Material You
es la evolución más radical del sistema de diseño de Google

Su lógica se aleja de las reglas estáticas para centrarse en la personalización y la flexibilidad adaptativa

Los dos pilares que definen este sistema son el Color Dinámico y una nueva Lógica de Contenedores basada en jerarquía tonal

1. Color Dinámico (Material You)
La gran innovación de MD3 es que el sistema de color ya no es fijo
Se genera a partir de un algoritmo de extracción (Monet)
toma un color semilla (generalmente del fondo de pantalla del usuario)
crea una paleta completa de 5 esquemas tonales.

Funcionamiento:

`Semilla`: El usuario elige una imagen.
`Espectro`: El sistema genera 5 columnas de colores (Primary, Secondary, Tertiary, Neutral, Neutral Variant).
`Tonos`: Cada columna tiene 13 niveles de luminosidad (de 0 a 100).

2. Lógica de Contenedores y Roles de Color
MD3 elimina el concepto de "Color Primario" como un valor único
Ahora se habla de Roles de Color, diseñados para garantizar el contraste y la accesibilidad de forma automática

Sistema de emparejamiento:
Cada contenedor tiene un rol asignado que determina el color de lo que va encima

`Container`: El color del fondo de un componente (ej. un botón).
`On-Container`: El color del contenido que vive dentro (texto o icono).

Ej. Si un botón usa Primary Container, el texto debe usar On-Primary Container
El algoritmo garantiza que la diferencia de luminosidad entre ambos siempre cumpla con los estándares de accesibilidad (WCAG).

3. Jerarquía de Contenedores
A diferencia de MD2, donde la elevación se marcaba casi exclusivamente con sombras

MD3 la jerarquía se establece principalmente mediante el color de superficie y los bordes.

4 tipos de superficies:

`Surface`: El fondo base de la aplicación.

`Surface Container (Low/High)`: Capas de elevación que sustituyen a las sombras
Un contenedor High es más claro (en modo oscuro)
o más oscuro (en modo claro) para resaltar.

`Surface Bright / Dim`: Variaciones para crear profundidad sin necesidad de sombras complejas.

`Outline`: Se usa para componentes de baja prioridad
Se usa para componentes de baja prioridad

4. Evolución de la Elevación
En MD3, la elevación se comunica mediante un cambio de tono (Tonal Elevation)
más que por sombras profundas.

Cuando un elemento "sube" en el eje Z, se le aplica una capa sutil del color primario sobre el color de superficie.
Esto hace que el diseño se sienta más orgánico y menos "pegado" con sombras artificiales.

5. Design Tokens
MD3 es un paraíso de tokens
Google proporciona una estructura estandarizada que puedes mapear directamente en tu código:

```
:root {
  /* Tokens de color dinámicos (Roles) */
  --md-sys-color-primary: oklch(0.60 0.18 250);
  --md-sys-color-on-primary: oklch(0.98 0.01 250);
  --md-sys-color-primary-container: oklch(0.85 0.10 250);
  --md-sys-color-on-primary-container: oklch(0.30 0.12 250);

  /* Tokens de forma */
  --md-sys-shape-corner-extra-large: 28px;
}
```


### Human Interface Guidelines (Apple): El uso de la transparencia, el desenfoque y la tipografía San Francisco.

Sistema basado en la personalización y la expresividad
las Human Interface Guidelines (HIG) son el estándar de la claridad, la deferencia y la profundidad.

El objetivo de Apple no es que su sistema "se adapte al usuario"
sino que el diseño desaparezca para que el contenido sea el protagonista

1. Tres Pilares
Cualquier diseño que quiera sentirse "nativo" en iOS o macOS debe cumplir estos principios

`Clarity`: El texto debe ser legible, los iconos precisos y los espacios deben guiar el ojo
Si un elemento no ayuda a la comprensión, se elimina.

`Deference`: El diseño de la interfaz (botones, barras, fondos) nunca debe competir con el contenido del usuario
El sistema "se inclina" ante la foto, el video o el texto que el usuario está viendo.

`Depth`: Uso de capas visuales y movimientos realistas ayuda a entender la jerarquía
Apple usa mucho el desenfoque (blur) para indicar que algo está "encima" de otra cosa sin perder el contexto del fondo

2. Componentes Clave del Layout

`Barras (Bars)`:
Apple organiza la navegación mediante estructuras fijas que el usuario ya conoce por instinto

Navigation Bar: En la parte superior
Muestra el título y acciones de navegación (como "Atrás").

Tab Bar: En la parte inferior
Permite cambiar entre las secciones principales de la app (generalmente de 3 a 5 iconos).

Toolbars: Para acciones específicas relacionadas con el contenido actual.

`Vistas (Views)`:
Donde vive el contenido

Lists / Tables: Apple prefiere las listas con bordes redondeados
(estilo Inset Grouped) para organizar información

Cards: Se usan para agrupar contenido relacionado que requiere una acción visual potente.

Sheets: Menús que "deslizan" desde abajo
Son la forma estándar de presentar tareas secundarias sin sacar al usuario de la pantalla actual

3. Lenguaje del Tacto y la Interacción
HIG de Apple pone mucho énfasis en la física

`Haptics (Vibración)`: uso de motores de vibración para confirmar acciones
(un "clic" físico al mover un selector de fecha). 

`Gestos`: El diseño debe responder a gestos naturales
(deslizar para volver, pinchar para hacer zoom).

`Safe Areas`: HIG define estrictamente los márgenes para evitar que los botones queden bajo el notch
o la barra de inicio del iPhone.

4. Tipografía y SF Symbols
Apple utiliza su propia tipografía, San Francisco (SF)
diseñada específicamente para ser legible en pantallas de retina pequeñas.

`SF Symbols`: Es una librería de más de 5,000 iconos vectoriales diseñados para alinearse perfectamente con el peso y la altura de la tipografía San Francisco
Si cambias el grosor de la letra, el icono cambia su grosor automáticamente para mantener la cohesión.

5. Efecto Cristal: Vibrancy & Materials
Mientras Material Design usa colores tonales

Apple usa Materiales.

En lugar de un color gris sólido, Apple usa Background Blur (efecto esmerilado).
Permite que los colores del fondo se "filtren" a través de la interfaz
haciendo que la app se sienta integrada en el ecosistema del usuario.



### Microsoft Fluent Design: El uso de la luz, el ruido (texturas) y la profundidad.

Busca alejarse de lo puramente "plano" para abrazar la dimensionalidad
Microsoft apuesta por una estética sensorial y táctil
diseñada para sentirse coherente tanto en una PC de escritorio como en entornos de realidad mixta.

Se basa en cinco pilares, pero los más distintivos son el uso de la luz, el ruido (texturas) y la profundidad

1. Luz: El efecto "Reveal"
En Fluent, la luz es una herramienta de navegación
No solo ilumina; guía la atención.

`Reveal Highlight`: Es un efecto de iluminación que "sigue" al puntero del ratón
Cuando pasas el cursor cerca de un botón, el borde se ilumina sutilmente
Esto confirma que el elemento es interactivo antes de que hagas clic.

`Focus Light`: sLa luz se utiliza para destacar el elemento que tiene el foco del teclado
creando una conexión intuitiva entre el periférico y la interfaz.

2. Ruido y Textura: : "Mica" y "Acrylic"
Donde Fluent se vuelve único

Microsoft utiliza materiales que imitan propiedades físicas para dar estructura:

`Mica`: Material principal de las ventanas en Windows 11.
No es una transparencia simple; es un material opaco que toma el color del fondo de pantalla
pantalla (similar a MD3) pero le añade una textura de ruido fino.

Función:
El ruido ayuda a reducir la fatiga visual al evitar reflejos planos y perfectos
haciendo que la interfaz se sienta más sólida y "real".

`Acrylic (Acrílico)`:
Se usa para elementos transitorios (menús, flyouts).
Tiene tres capas: color, desenfoque y una capa de ruido
El ruido en el acrílico evita el efecto "banding" (saltos de color) en los degradados

3. Profundidad: Eje Z y Capas
Fluent organiza la interfaz como si fueran láminas de materiales físicos superpuestas

`Z-depth`: Se utiliza para separar el contenido del fondo
A diferencia de las sombras pesadas de MD2
Fluent usa sombras muy suaves combinadas con bordes de 1px (llamados backplates)
para definir dónde termina un elemento y empieza otro.

`Parallax`: El movimiento es parte de la profundidad.
Los elementos en diferentes planos se mueven a diferentes velocidades cuando haces scroll
reforzando la idea de que la interfaz tiene "volumen".

Elemento,Fluent Design (Microsoft),HIG (Apple),MD3 (Google)

`Material`:
Mica (Opaco + Ruido)
Glass (Transparente)
Color Tonal (Plano)

`Puntero`:
La interfaz reacciona con luz
El puntero cambia de forma
El componente se expande

`Textura`:
Grano/Ruido intencional
Suavidad perfecta
Color sólido y limpio


Acabado Profesional:
Para que una app se sienta Fluent hay que aplicar la física.

`Geometría`: Fluent utiliza esquinas redondeadas pero más contenidas que Google
(generalmente 4px para inputs y 8px para cards)
buscando un equilibrio entre lo moderno y lo profesional

`Iconografía (Segoe Fluent)`: Los iconos son suaves
con terminaciones redondeadas y un grosor consistente que armoniza con la tipografía Segoe UI.

Los siguientes transforman un diseño estático en una experiencia viva: el Movimiento y la Escala.

4. Movimiento (Motion): El ritmo del sistema
el movimiento no es un adorno
es una forma de confirmar que el sistema ha entendido la intención del usuario
Microsoft utiliza el concepto de "Movimiento Conectado".

Transiciones Direccionales:
Si haces clic en un elemento a la derecha, el contenido nuevo entra desde la derecha
Esto ayuda al modelo mental del usuario a entender "dónde está" dentro de la app

Animaciones Elásticas (Spring Physics):
A diferencia de las animaciones lineales aburridas
Fluent usa físicas que imitan un resorte
Los elementos tienen un ligero "rebote" al llegar a su posición
hace que la interfaz se sienta orgánica y menos mecánica.

Continuidad:
Un elemento (como una imagen en una lista) puede transformarse y expandirse para convertirse en el encabezado de la siguiente página
manteniendo el foco visual sin saltos bruscos.

5. Escala (Scale): El diseño adaptativo
fundamental para Microsoft porque Windows vive en pantallas de 6 pulgadas, en monitores de 49 pulgadas y en gafas de Realidad Virtual (HoloLens).

Diseño para 2D y 3D: Los componentes de Fluent están diseñados para funcionar con un ratón, un dedo o un controlador de movimiento en el espacio
Por eso, los elementos tienen áreas de interacción amplias.

Conciencia del Contexto: El sistema de escala ajusta automáticamente la densidad
En una tableta, los botones se separan para evitar errores táctiles
en una PC con ratón, se vuelven más compactos para mostrar más información (Alta Densidad).

Z-Space: En entornos 3D, la escala se usa para indicar importancia
Los elementos más importantes no solo son más grandes
sino que están físicamente más cerca del usuario en el espacio virtual

Luz:
Guiar la atención,Reveal Highlight

Profundidad:
Establecer jerarquía,Z-depth & Layers

Textura:
Dar estructura y solidez,Mica & Acrylic

Movimiento:
Dar continuidad y vida,Connected Motion

Escala:
Adaptarse al dispositivo,Context Awareness



## 4. Cohesión y Consistencia

Asegurar que pantalla A y la pantalla Z se sientan como la misma app


### Patrones de Interacción

Si un "Swipe" borra en una lista, debe borrar en todas.

Son soluciones probadas y recurrentes a problemas comunes de usabilidad

Si el Atomic Design es la "forma" de los componentes
los patrones son el "comportamiento" esperado.

Seguir patrones conocidos reduce la carga cognitiva
el usuario no tiene que aprender cómo usar tu app porque se comporta como las demás

1. Patrones de Navegación
Definen cómo el usuario se mueve entre los diferentes niveles de la aplicación

`Jerarquía de Pestañas (Tab Bar)`:
El patrón estándar para apps móviles con 3 a 5 secciones principales de igual importancia
Permite el cambio de contexto con un solo toque.

`Menú Lateral (Navigation Drawer/Hamburger`:
Ideal para esconder opciones secundarias o cuando la lista de secciones es muy larga
Muy común en entornos de escritorio o apps de productividad

`Migas de Pan (Breadcrumbs)`:
Esencial en interfaces de escritorio y sistemas complejos
(como un explorador de archivos o un e-commerce)
para que el usuario sepa dónde está y pueda volver atrás fácilmente

2. Patrones de Entrada de Datos (Forms)
reglas de interacción cuando el usuario debe "escribir" o "elegir".

`Validación en Tiempo Real`:
No esperes a que el usuario haga clic en "Enviar".
Indica si el correo es válido o si la contraseña es débil mientras escribe

`Entrada Progresiva (Progressive Disclosure)`:
No muestres 20 campos a la vez
Muestra solo lo necesario y despliega opciones avanzadas solo si el usuario las solicita

`Input Masking`:
Ayuda al usuario dándole el formato automáticamente
(ej. poner los guiones en un número de teléfono o los "/" en una fecha).

3. Patrones de Feedback y Estado
El sistema debe hablarle al usuario para confirmar que sus acciones tuvieron éxito o fallaron

`Estados de Carga (Skeleton Screens)`:
En lugar de un spinner genérico, muestra un "esqueleto" gris de lo que va a cargar
Esto da la sensación de que la app es más rápida de lo que realmente es.

`Snackbars / Toasts`:
Mensajes temporales que aparecen en la parte inferior para confirmar una acción ("Mensaje enviado")
sin interrumpir el flujo de trabajo.

`Confirmación Destructiva`:
Si el usuario va a borrar algo importante, el patrón dicta que el botón de confirmación debe ser rojo
y estar separado de la opción de cancelar para evitar errores accidentales

4. Patrones de Gestos (Mobile First)
En dispositivos táctiles, los patrones se basan en la memoria muscular

`Pull to Refresh`:
Deslizar hacia abajo para actualizar el contenido
Es un estándar absoluto en listas de noticias o redes sociales

`Swipe to Action`:
Deslizar a la izquierda o derecha en un elemento de lista
(como en Gmail para archivar o borrar).

`Pinch to Zoom`:
El gesto universal para inspeccionar imágenes o mapas.

5. Modelo Mental y Consistencia
Para que un patrón funcione, debe respetar el Modelo Mental del usuario
Si pones una "X" en la esquina superior derecha, el usuario espera que eso cierre la ventana
Si al pulsar la "X" la app se reinicia, has roto el patrón y generado frustración


Elección de patrones:

Analiza la frecuencia:
¿Es una acción que el usuario hace 100 veces al día?
Usa un patrón de acceso rápido (Tab bar).

Analiza el riesgo:
¿Es una acción peligrosa (borrar cuenta)?
Usa un patrón de interrupción (Modal de confirmación).

Analiza la plataforma:
Android o iOS? Cada uno tiene sus propios dialectos de patrones
"Atrás" físico vs. gesto lateral


### Microinteracciones y Motion

Definir curvas de aceleración (Easings) consistentes.
Si un modal entra con un rebote, todos los modales deben hacerlo. 

los Patrones de Interacción son el "mapa" de tu app
las Microinteracciones son las sensaciones que experimentas al recorrerlo
Son esos pequeños momentos donde el diseño y la funcionalidad se fusionan para crear una respuesta humana

El Motion (movimiento) es el vehículo que transporta estas interacciones
No es animación decorativa; es diseño funcional en el tiempo.

1. Microinteracción
Según Dan Saffer, una microinteracción tiene un solo propósito principal

se compone de cuatro partes:

`Disparador (Trigger)`:
El usuario hace algo (clic, swipe)
o el sistema detecta algo (llega un mensaje).

`Reglas (Rules)`:
Determinan qué sucede
(Si el botón está en "ON", cambia el color).

`Feedback`:
Lo que el usuario ve, oye o siente.
El interruptor se desliza suavemente).

`Bucles y Modos`:
Cómo cambia la interacción con el tiempo
(Si es la primera vez que lo pulsas, aparece un pequeño mensaje de ayuda).

2. 4 Pilares del Motion
El movimiento profesional debe seguir estas reglas:

`Responsividad (Responsive)`:
La interfaz debe reaccionar instantáneamente al toque del usuario
Si hay un retraso de más de 100ms, la conexión se rompe
El movimiento confirma que el sistema ha recibido la orden

`Naturalidad (Natural)`:
Nada en el mundo real se mueve de forma lineal (velocidad constante).
Usamos curvas de Easing:

`Ease-out`:
El objeto comienza rápido y frena suavemente al llegar
(ideal para elementos que entran a pantalla).

`Ease-in`:
El objeto comienza lento y acelera
(ideal para elementos que salen de pantalla).

`Intencionalidad (Intentional)`:
El movimiento debe guiar el ojo
Si abres una card, el contenido nuevo debe expandirse desde el punto donde hiciste clic
Esto mantiene la continuidad visual y evita que el usuario se pierda.

`Jerarquía (Hierarchy)`:
El movimiento puede decir qué es más importante
Un botón que "tiembla" sutilmente atrae la atención hacia la acción principal (CTA) sin ser intrusivo.

3. Ej. Microinteracciones

Acción,Microinteracción / Motion,Valor que aporta

`Hacer Like`:
El icono de corazón late y cambia de color.
Gratificación inmediata y confirmación.

`Pull to Refresh`:
Un indicador gira y se estira mientras tiras.
Indica que el sistema está trabajando.

`Error en Password`:
El campo de texto se sacude horizontalmente.
"Imita el gesto humano de decir ""no"" con la cabeza."

`Subir Archivo`:
Una barra de progreso que se llena suavemente.
Reduce la ansiedad de espera.

4. Físicas (Spring Physics)
En lugar de duraciones fijas (ej. 300ms)
las apps premium usan físicas de resorte
Esto permite que si el usuario lanza un elemento con mucha fuerza (velocidad)
la animación sea más rápida, y si lo mueve lento, sea pausada.

```
/* Ejemplo conceptual de una transición suave */
.button {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); /* Un pequeño rebote */
}

.button:active {
  transform: scale(0.95); /* El botón se "hunde" al tocarlo */
}
```

5. Momento de Deleite (Delight)
Las microinteracciones son el lugar ideal para inyectar el Dialecto Visual
Si tu app es lúdica, las animaciones pueden ser elásticas y rebotar

Si es seria y profesional (como Fluent o HIG)
los movimientos deben ser cortos, precisos y casi invisibles

`Regla de los 300ms`:
La mayoría de las microinteracciones no deberían durar más de 0.3 segundos
Si la animación es demasiado lenta, el usuario sentirá que la app es pesada


### Copywriting y Voz

La consistencia estética incluye el texto.
¿Tu app habla de "tú" o de "usted"? ¿Es técnica o amigable?

Son el alma de la interfaz
Si los componentes son el cuerpo
las microinteracciones son los movimientos
##### las palabras son la forma en que tu aplicación conversa con el usuario.

En el diseño de producto, esto se conoce como UX Writing:
el arte de guiar al usuario mediante textos claros, concisos y útiles.

1. Voz vs. Tono
Es común confundirlos, pero en un sistema de diseño
tienen funciones distintas:

`Voz (Voice)`:
Es la personalidad de tu marca. Es constante
Si tu voz es "profesional y técnica", lo será en toda la app
Es como el carácter de una persona.

`Tono (Tone)`:
Actitud que adopta la voz según la situación
El tono cambia dependiendo del contexto emocional del usuario.

Si tu voz es "amigable", el tono cuando el usuario logra una meta será "entusiasta" (¡Lo lograste!)
pero el tono cuando hay un error crítico será "empático y calmado" (Algo salió mal, pero no te preocupes, tus datos están a salvo).

2. 3 Pilares del UX Writing
Texto sea cohesivo con el diseño visual
Debe cumplir estas reglas:

`Claridad (Clear)`:
Elimina la jerga técnica
No digas "Error de excepción de red 404", di "No pudimos conectar con el servidor
El usuario debe entender qué pasó y qué debe hacer a continuación sin esfuerzo

`Concisión (Concise)`:
En las pantallas (especialmente en móvil), el espacio es oro
La concisión no significa solo ser corto, sino significativo.

Mal: "Haz clic en el botón de abajo para proceder a guardar tus cambios."
Bien: "Guardar cambios."

`Utilidad (Useful)`:
Cada palabra debe tener un propósito
Los botones (CTAs) deben ser predictivos
deben decirle al usuario qué pasará exactamente cuando los pulse.

En lugar de un botón que diga "Siguiente"
usa uno que diga "Ir al pago".

3. Microcopy
Son los fragmentos de texto más pequeños pero más poderosos de la interfaz
labels de botones, placeholders en inputs, mensajes de error y tooltips.

`Placeholders`:
No los uses para repetir el label.
Úsalos para dar un ejemplo de formato
(ej. "ejemplo@correo.com").

`Mensajes de Error`:
Nunca culpes al usuario
En lugar de "Ingresaste mal la clave"
usa "Esa clave no coincide con nuestros registros".

`Empty States`:
Cuando una pantalla no tiene datos, el texto debe motivar a la acción.
"Aún no tienes proyectos. ¡Crea el primero aquí!".

4. Estilo y Formato (Consistencia Visual)
El copywriting también tiene "átomos" que deben ser consistentes

`Capitalización`: Elige un estilo y mantenlo

`Title Case`: Este Es Un Título (Más formal, estilo Apple).
`Sentence Case`: Este es un título (Más conversacional y fácil de leer, estilo Google).

`Puntuación`:
¿Usarás puntos finales en los mensajes cortos?
¿Usarás signos de exclamación?
Decídelo en tus Design Tokens de voz.

5. Dialecto en las Palabras
Al igual que con el diseño visual 
las palabras refuerzan el Dialecto

`Dialecto Serio`: "La transacción se ha procesado correctamente."
`Dialecto Lúdico`: "¡Listo! Tu dinero ya está en camino.🚀"


## 5. Implementación Técnica: Handoff

De diseño a código real

Storybook: Aprender a documentar componentes de forma aislada.
CSS Modules y Utility Classes: Cómo estructurar el CSS para que los tokens sean inyectables.
Accesibilidad (WCAG): Garantizar que tu estética sea inclusiva (Contrastes, Focus states, Touch targets).
Documentación de Diseño: Crear un "Handbook" que explique el porqué de las decisiones.


### Storybook

Herramienta estándar para construir, documentar y probar componentes de UI de forma aislada
es el laboratorio donde fabricas y catalogas cada pieza.

En lugar de tener que levantar toda tu aplicación (con base de datos, rutas y APIs)
solo para ver cómo quedó un botón, Storybook te permite renderizar ese componente en un entorno independiente.

1. Desarrollo Aislado
Si hacemos un Organismo complejo, como un Header que cambia según si el usuario está logueado o no
En una app normal, tendrías que navegar manualmente, cambiar estados en la base de datos y recargar la página

Con Storybook, creas "Stories"
Una historia es un estado específico de un componente:

Header / LoggedIn
Header / LoggedOut
Header / MobileView

2. Anatomía de una "Story"
Las historias se escriben en un formato llamado CSF (Component Story Format)
utiliza JavaScript o TypeScript.

```
// Button.stories.js
import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

// Esta es una "Historia" para el estado primario
export const Primary = {
  args: {
    label: 'Click aquí',
    primary: true,
    backgroundColor: 'oklch(0.60 0.18 250)',
  },
};

// Esta es una "Historia" para el estado de alerta
export const Warning = {
  args: {
    label: 'Borrar',
    backgroundColor: 'red',
  },
};
```

3. Ventajas

Documentación Viva:
Storybook genera automáticamente una guía de estilo interactiva
Cualquier miembro del equipo (diseñadores, managers o nuevos devs) puede entrar y ver qué componentes ya existen
evitando que alguien cree un "segundo botón" desde cero.s

Controles Dinámicos (Addons):
Storybook incluye un panel de Controls
donde puedes cambiar las "props" del componente en tiempo real
(cambiar el texto, el color o el tamaño) mediante sliders y selectores
sin tocar el código.

Pruebas de Regresión Visual:
integrar herramientas como Chromatic para que, cada vez que hagas un cambio en el código
el sistema compare "fotos" de tus componentes
Si un cambio en el CSS rompió un botón en otra parte de la app
Storybook te avisará antes de que subas el error a producción

4. Conexión con las 3 Fases

Fase 1 (Fundamentos): Aplicas tus colores OKLCH y tus escalas de 8pt directamente en los componentes.
Fase 2 (Sistemas): Organizas tu barra lateral siguiendo la jerarquía de Átomos, Moléculas y Organismos.
Fase 3 (Interacción): Pruebas tus microinteracciones y estados de hover de forma controlada

5. Ecosistema de Addons
Altamente extensible

Accessibility:
Te dice en tiempo real si tu componente cumple con las normas WCAG
(contraste de color, etiquetas aria).

Viewport:
Permite ver cómo se comporta el componente en un iPhone, un iPad o una pantalla 4K con un solo clic.

Design:
Permite embeber el archivo de Figma justo al lado del código para comparar si el diseño coincide con la implementación



# UX

1. Ciencia de la Percepción
entender cómo el ojo interpreta la luz

Modelo OKLCH: Dominar la percepción de Luminosidad (L), Croma (C) y Hue (H). Por qué es superior al RGB/HEX para crear paletas perceptualmente uniformes
Contraste y Accesibilidad (WCAG 2.1/3.0): Estudiar los ratios de contraste (4.5:1, 3:1). Herramientas de simulación de daltonismo.
Psicología del Color: El significado de los colores en diferentes culturas y su impacto en la carga cognitiva.

2. Armonía y Composición (El "Acento" Visual)
fórmulas matemáticas de la belleza visual

Regla del 60-30-10: Aplicación de proporciones para evitar la fatiga visual.
60% Dominante: Generalmente colores neutros (superficies).
30% Secundario: Color de soporte (componentes).
10% Acento: Color de acción (CTAs, alertas).

Esquemas de Armonía:
Monocromáticos: Uso de diferentes tintes y sombras de un mismo Hue.
Análogos: Colores vecinos en el círculo cromático para interfaces relajantes.
Complementarios: Contraste máximo para interfaces vibrantes.

3. Decoración Funcional (Texturas y Elevación)
La decoración en UX debe servir a la jerarquía, no distraer de ella.

Sistemas de Elevación Avanzados: Uso de sombras "teñidas" (usando el color de la marca) vs. sombras neutras.
Tratamiento de Bordes: Cuándo usar outline de 1px vs. sombras. La estética de los bordes suaves vs. bordes "brutalistas".

Efectos de Material:
Glassmorphism
Mica y Ruido

Degradados (Gradients): Creación de degradados no lineales (con puntos de interpolación intermedios) para evitar la "zona gris" en el medio.

4. Semántica y Estado (Comunicación Visual)

Colores Semánticos: Definición de paletas para Error, Advertencia, Éxito e Información.
Indicadores de Estado: Decoración de estados hover, active, focus y disabled.
Skeleton Screens: Decoración de estados de carga para mejorar la percepción de velocidad.

5. Implementación: Código

Arquitectura de Temas (Theming): Creación de sistemas Light/Dark Mode usando variables CSS dinámicas.
CSS Moderno para Color: Uso de funciones como color-mix(), relative color syntax y manipulación de variables en tiempo real.
Sincronización con Figma: Cómo leer un archivo de diseño y extraer los tokens de decoración (sombras, bordes, radios) sin "adivinar".


Recursos:
Refactoring UI (Adam Wathan & Steve Schoger).
Herramienta: Huetone o OKLCH.com para experimentar con las paletas.
Inspiración: Mobbin o Dribbble (filtrando por "UI Kits" reales, no solo arte conceptual).

Huetone.js o LeonardoColor.io: Para generar paletas basadas en contraste y accesibilidad real
Coolors.co: Para exploración rápida de armonías y tendencias.


# UI

## 1. Fundamentos visuales

Color como fenómeno y su rol en UI:
espacio de color (RGB/HEX/HSL), percepción del color
términos: tinte (hue), saturación, brillo/valor, temperatura de color

Actividades: paleta simple (3 colores) y convertir valores entre HEX ↔ HSL.

## 2. Teoría del color aplicada

Armonías y reglas prácticas:
Contenidos: armonías (complementaria, análoga, triádica, tetrádica, monocromática)
esquemas de acento, uso de neutrales, gradientes y mezclas.

Actividades: crear 5 paletas con distintas armonías y aplicarlas a un mismo layout.

## 3. Psicología y semántica del color

Elegir colores por significado y contexto:
Contenidos: asociaciones culturales y emocionales, colores para estados (error/éxito/aviso), diferencias por industria

Actividades: mapear paletas para 3 tipos de producto (finanzas, salud, entretenimiento).

## 4. Accesibilidad y contraste

Garantizar legibilidad y cumplimiento:
ratios de contraste (WCAG): 4.5:1 (texto normal), 3:1 (texto grande), 7:1 (mejorado);
contraste de interfaz; pruebas para daltonismo

Actividades: auditar 5 pantallas y corregir colores que no cumplan ratios.

## 5. Tokens de color y diseño sistemático

Traducir paletas en tokens reutilizables:
Design tokens, nomenclatura (primary/secondary/surface/neutral), escalas de grises, niveles de elevación, variables CSS

## 6. Implementación

Paleta al front-end:
variables CSS (:root), HSL para ajuste dinámico, theming (light/dark),
integración con frameworks (ej.: configurar tokens en Tailwind)

Actividades: construir un componente Button con variantes y tema oscuro.

## 7. Herramientas y workflow

Optimizar flujo entre diseño y desarrollo:
Prototipado, exportar tokens, plugins de paleta, testeo visual
Figma (maquetas y tokens), Adobe (edición avanzada), W3C (WCAG/guías), Tailwind CSS (sistema de utilidades).

Actividades: sincronizar tokens entre diseño y proyecto real

## 8. Sistema:

Mini-sistema de UI:
biblioteca pequeña (4 componentes: Header, Card, Button, Form)
más tokens, documentación de accesibilidad y variantes light/dark.


Ejercicios:

Convierte 10 colores HEX a HSL y ajusta luminosidad sin cambiar la tonalidad.
Crea 4 paletas (complementaria / análoga / triádica / monocromática) y aplica a la misma pantalla.
Implementa un switch light/dark y ajusta tokens para mantener ratios de contraste.
Audita una UI real (web o app) y entrega un informe con 3 correcciones prioritarias.
Genera tokens en JSON y úsalos para crear variables CSS (--color-primary, --surface-1, etc.).


Chequeo de accesibilidad:

Texto normal: contraste ≥ 4.5:1.
Texto grande (≥18pt regular o ≥14pt bold): contraste ≥ 3:1.
UI grande/no-texto (íconos, UI components): usar criterio visual pero preferir ≥3:1.
Evitar confiar sólo en color para transmitir estado; añadir iconografía/textos.
Probar simulaciones de daltonismo y navegación en escala de grises.


Fragmentos útiles (CSS / HSL):

Tokens en CSS variables

```
:root{
  --primary-h: 210; /* hue */
  --primary-s: 90%;
  --primary-l: 52%;
  --primary: hsl(var(--primary-h) var(--primary-s) var(--primary-l));
  --on-primary: hsl(0 0% 100%); /* texto sobre primary */
  --surface-1: hsl(210 10% 98%);
  --surface-2: hsl(210 8% 96%);
}
.button{
  background: var(--primary);
  color: var(--on-primary);
  padding: .6rem 1rem;
  border-radius: 8px;
}
```

Ajustar luminosidad para estados (hover/disabled) sin cambiar hue:

```
.button:hover { background: hsl(var(--primary-h) var(--primary-s) calc(var(--primary-l) - 6%)); }
.button[disabled] { background: hsl(var(--primary-h) calc(var(--primary-s) - 30%) calc(var(--primary-l) + 20%)); opacity: .7; }
```

### Herramientas y recursos rapidos:

Paletas / generación: Coolors, Happy Hues, Material Color Tool.
Test de contraste: Contrast Checker (basado en WCAG).
Simuladores de daltonismo: Coblis, herramientas integradas en algunos editores.
Export tokens: plugins de Figma o exportadores JSON para sincronizar con el repo.
Lecturas / referencias: guías WCAG (W3C), artículos sobre teoría del color aplicada al producto


Proyecto:

Paleta principal (3 colores), paleta neutral (grises 6 pasos), 2 acentos.
Tokens documentados (JSON + CSS variables).
4 componentes (Header, Card, Button, Input) con estados y versiones light/dark.
Informe de accesibilidad: contrastes y pruebas de daltonismo.
Entrega: repo + prototipo en Figma (opcional).


Check:

Paleta aprobada por stakeholders/product.
Todos los textos cumplen ratio WCAG (anotar valores).
Estados (hover, active, disabled) documentados.
Tokens exportados y usados en CSS/variables.
Fallbacks para temas y soporte para preferencia prefers-color-scheme.
Test de usabilidad rápido con 3 usuarios (incluir legibilidad y asociaciones).



## 1. Fundamentos visuales

Color como fenómeno y su rol en UI:
espacio de color (RGB/HEX/HSL), percepción del color
términos: tinte (hue), saturación, brillo/valor, temperatura de color

Actividades: paleta simple (3 colores) y convertir valores entre HEX ↔ HSL.


### Color en UI

En profundidad, conectando física → percepción → diseño → UI real.

El color es un fenómeno físico, perceptual y cognitivo que usamos como un lenguaje funcional dentro de una interfaz
Hay que verlo en tres niveles:

```
FÍSICA → PERCEPCIÓN → INTERFAZ
```

1. Color como fenómeno físico:
El color no existe como objeto.

Existe como:

```
luz con diferentes longitudes de onda.
```

La luz visible es una pequeña parte del espectro electromagnético.

```
Longitudes cortas → azul/violeta
Medias → verde
Largas → rojo
```

Un objeto NO tiene color propio.

Ocurre:

```
luz blanca → objeto → absorbe parte → refleja otra
```

La luz reflejada llega al ojo → el cerebro interpreta color.

Ej: Una superficie roja absorbe casi todo excepto longitudes rojas.


En pantallas: NO reflejan luz, emiten luz.

Usan el modelo:

RGB (Red, Green, Blue)

Cada píxel mezcla luz:

```
rojo
verde
azul

Más luz = más brillante → blanco
Sin luz = negro
```

Esto se llama mezcla aditiva


2. Color como fenómeno perceptual

Ocurre algo clave:
El color no está en la pantalla, está en el cerebro.

El ojo humano tiene tres tipos de conos sensibles a rangos de luz.
El cerebro construye el color mediante comparación relativa.

El cerebro construye el color mediante comparación relativa.

A. `El color es RELATIVO`:
El mismo color cambia según su contexto.

Ej:
Gris sobre fondo oscuro parece claro.
Gris sobre fondo claro parece oscuro.

En UI esto afecta:

`contraste`
`legibilidad`
`jerarquía visual`


`B. Adaptación visual`:
El sistema visual se adapta constantemente.

Modo oscuro funciona porque:
el ojo reduce sensibilidad a brillo alto.

`C. Percepción antes que precisión`:

Usuarios NO ven valores HEX.

Ven:

`contraste`
`peso visual`
`temperatura`
`emoción`

Por eso:

```
#0066ff ≠ azul

Puede percibirse como:

confiable
frío
tecnológico
distante

Dependiendo del contexto.
```

3. Color como fenómeno cognitivo
El cerebro usa color para reducir esfuerzo mental.

Color = señal rápida.

Antes de leer texto, el usuario ya entiende:

`Rojo: peligro`
`Verde: correcto`
`Amarillo: advertencia`

Esto es procesamiento pre-atencional (≈200 ms).
El color guía atención automáticamente.

4. Rol del color en UI
En UI, el color cumple funciones específicas, no decorativas.

`Jerarquía visual`:
Define qué mirar primero.
Ej: botón primario vs secundario.
El color crea prioridad sin texto extra.

`Comunicación de estado`:
Color transmite sistema lógico:

| Estado   | Función            |
| -------- | ------------------ |
| Verde    | éxito              |
| Rojo     | error              |
| Amarillo | advertencia        |
| Azul     | acción/interacción |

Reduce lectura cognitiva

`Agrupación semántica`:
Elementos del mismo color → pertenecen al mismo sistema.

Ej: links azules = interactivos.

`Navegación y orientación`:
El usuario aprende el sistema cromático.

Ej: acciones principales siempre mismo color.
Se crea memoria visual

`Profundidad y estructura`:

Variaciones de color crean capas:

`surface`
`background`
`elevated card`
`modal`

Sin usar sombras excesivas.

`Identidad del producto`:

Color conecta UI con marca.

```
Spotify → verde energético
Notion → neutros minimalistas
```

##### La identidad se vuelve reconocible instantáneamente).

5. Principio fundamental en UI
El color NO debe iniciar el diseño.

Orden correcto:

```
estructura
→ jerarquía
→ layout
→ interacción
→ color
```

El color refuerza decisiones ya tomadas.

6. Propiedades perceptuales clave para UI

`Hue (tono)`: Qué color es.
Uso: diferenciación semántica

`Saturation`: Intensidad.

```
Alta:
energía
acción

Baja:
profesional
calmado
```

`Lightness`: luminosidad
Propiedad MÁS importante en UI

Controla:

`contraste`
`legibilidad`
`jerarquía`

Diseñadores senior ajustan primero luminosidad, no hue.

7. Regla profesional
##### La mayoría de interfaces exitosas usan pocos colores y muchas variaciones de luminosidad.

Ej:

1 color primario
1 color acento
6–10 neutrales

No 20 colores distintos.

8. Error común

Pensar:
`color = decoración`

Realidad:
`color = sistema de información`

Una UI bien diseñada sigue funcionando incluso en escala de grises.
Si deja de funcionar → el color estaba reemplazando estructura.

9. Modelo

Color en UI:

```
Fenómeno físico  → luz emitida
Fenómeno perceptual → interpretación visual
Fenómeno cognitivo → significado rápido
Herramienta UI → comunicación funcional
```

El mejor uso del color es cuando el usuario entiende la interfaz sin notar conscientemente los colores
El color correcto se siente inevitable, no llamativo.


### Elegir un color primario: Método Profesional

No se elige sólo por gusto, se selecciona mediante un proceso estratégico y perceptual
equilibra identidad, legibilidad y comportamiento del sistema.

Color primario en UI es el color que representa:

```
la acción principal
la identidad visual
el punto de atención dominante
```

Ej:
Facebook → azul
Spotify → verde
YouTube → rojo

Colores que no se eligieron arbitrariamente.
El proceso profesional suele seguir 5 pasos.

1. Definir rol del color primario

Primero hay que responder:
`¿Qué función tendrá el color?`

En la mayoría de productos, el primario se usa para:

botones principales
links importantes
highlights de interacción
foco visual

Regla:

`el primario = color de acción`

debe ser visible y contrastante, no sólo bonito.

2. Determinar personalidad del producto
El color comunica carácter incluso antes de leer texto.

| Personalidad | Colores frecuentes |
| ------------ | ------------------ |
| confianza    | azul               |
| energía      | naranja            |
| innovación   | violeta            |
| seguridad    | verde              |
| lujo         | negro / púrpura    |

Esto se relaciona con psicología del color y branding.

Ej: PayPal usa azul → confianza financiera.

3. Evaluar contraste funcional

El primario debe funcionar sobre:

```
fondo claro
fondo oscuro
superficies elevadas
texto encima
```
Por eso se prueba contra contraste mínimo (reglas del World Wide Web Consortium WCAG).

Regla práctica:

contraste mínimo texto normal: 4.5:1
texto grande: 3:1

`Si el color no permite contraste suficiente → no sirve como primario`.

4. Tono base (Hue)
tono cromático

Posibles:

```
azul
verde
rojo
naranja
violeta
teal
magenta
```

El hue debe cumplir tres cosas:

`diferenciación frente a competidores`
`claridad perceptual`
`escalabilidad en paleta`

Muchos productos evitan rojo porque suele reservarse para error

5. Construir escala de color
Un color primario profesional no es un solo color
Es una escala completa.

Ej:

```
primary-50
primary-100
primary-200
primary-300
primary-400
primary-500 ← base
primary-600
primary-700
primary-800
primary-900
```

##### Cada paso cambia luminosidad, no el tono.

Permite

```
hover
active
disabled
backgrounds suaves
texto sobre color
```

Ej simple:

Color base:
`primary-500 = #3B82F6`

Escala aproximada:

| token       | uso                       |
| ----------- | ------------------------- |
| primary-100 | fondos suaves             |
| primary-300 | hover                     |
| primary-500 | botón principal           |
| primary-700 | active                    |
| primary-900 | texto sobre fondos claros |


6. Probar el color en contexto
El error común es elegir color aislado.

Debe probarse en:

```
botón
link
card highlight
focus ring
dark mode
```

Muchas veces un color bonito no funciona en UI.

7. Evaluar fatiga visual
Un primario demasiado saturado produce:

ruido visual
fatiga
jerarquía confusa

Regla común:

`primario ligeramente desaturado`

Permite usarlo repetidamente sin saturar la pantalla.

8. Verificar escalabilidad

El primario debe coexistir con:

colores de estado (error / success / warning)
neutros
fondos
acentos secundarios

Si compite con ellos → mala elección


Proceso: 

```
1 definir función del color
2 definir personalidad del producto
3 verificar contraste WCAG
4 elegir hue base
5 construir escala tonal
6 probar en componentes
7 controlar saturación
8 validar con sistema completo
```

Un buen color primario:

funciona en `todos los estados`
mantiene `contraste suficiente`
representa la `identidad del producto`
permite construir una `escala completa`

Cuando el primario está bien elegido, todo el sistema de color se vuelve fácil de construir


### Luminosidad: el secreto más importante

Diseñar con color no significa elegir tonos (azul, rojo, verde).
La calidad visual de una interfaz depende principalmente de la LUMINOSIDAD.
Los diseñadores senior trabajan primero la luz, no el color.

1. Luminosidad (Lightness / Value) indica: 
`qué tan claro u oscuro se percibe un color`.

No es saturación/tono

Es la cantidad percibida de luz.

Ej:

```
azul oscuro
azul medio
azul claro
```

mismo color (hue), distinta luminosidad.


Modelo:
Si conviertes una UI a escala de grises y sigue funcionando:
`jerarquía está bien diseñada.`

Si deja de entenderse: dependía demasiado del color.

2. Luminosidad domina la percepción
El cerebro humano detecta primero:

```
1. contraste de luz
2. forma
3. movimiento
4. color (último)
```

Significa que vemos claridad/oscuridad antes que color.
Por eso un botón destaca aunque sea gris, si su luminosidad contrasta.

3. Ilusión: colores distintos pueden tener igual luminosidad

Ej:
rojo brillante
azul intenso

Aunque parezcan diferentes, pueden tener la misma luminosidad.

Resultado en UI:

texto ilegible
botones que no destacan
jerarquía confusa

4. Luminosidad = jerarquía visual

Elementos importantes suelen tener:
mayor contraste
luminosidad diferenciada

| Elemento        | Luminosidad relativa   |
| --------------- | ---------------------- |
| Background      | muy clara o muy oscura |
| Surface         | ligeramente distinta   |
| Card            | contraste suave        |
| Button primario | contraste alto         |
| Texto           | contraste máximo       |


5. Error común
Cambiar el color cuando algo no destaca

Solución real:
ajustar luminosidad

Muchas veces basta cambiar ±8% de lightness.

6. Uso de HSL
HEX mezcla todo en un valor difícil de controlar.

HSL separa:

```
H → tono
S → saturación
L → luminosidad
```

Ej:

```
hsl(220 80% 50%) /* base */
hsl(220 80% 60%) /* hover */
hsl(220 80% 40%) /* active */
```

Mismo color, distinta luz → coherencia perfecta.

7. Sistema de Luminosidad
Interfaces modernas usan escalas.

```
L=98% background
L=94% surface
L=88% elevated
L=60% accent soft
L=50% primary
L=40% active
L=20% text strong
```

Casi todo cambia sólo en luminosidad

8. Luminosidad y contraste (accesibilidad)

El contraste WCAG depende principalmente de:
`diferencia de luminosidad relativa`

No del color.

Ej:

```
azul claro sobre blanco ❌
azul oscuro sobre blanco ✅
```

aunque ambos sean “azules”.

9. Diseñar primero en grises

Muchos sistemas UI avanzados siguen este flujo:

```
1 diseñar layout en grayscale
2 validar jerarquía
3 agregar color después
```

Obliga a que la interfaz funcione estructuralmente

10. Luminosidad crea profundidad

Sin sombras ni efectos:

```
claro → parece cercano
oscuro → parece profundo
```

Esto simula capas:

background
surface
modal
overlay

Sólo usando luz.

11. Regla del 80/20

Aprox:

```
80% decisiones visuales = luminosidad
15% = espaciado
5% = color (hue)
```

12. Ej

Mal:
botón azul claro
fondo blanco
poco contraste

Bien:
mismo azul
menor luminosidad
contraste claro

El usuario percibe inmediatamente la acción.

13. Técnica: pasos de luminosidad constantes

En lugar de valores aleatorios:

```
100
95
90
80
70
60
50
40
30
20
10
```

Crea ritmo visual consistente.

14. Buena luminosidad

Buena UI:

```
puedes verla en escala de grises y entenderla
el foco visual aparece naturalmente
no necesitas colores fuertes
los estados hover se sienten naturales
```

Modelo:

```
Color = identidad
Luminosidad = estructura visual
```

El color dice qué es.
La luminosidad dice qué importa.

Regla:
Si controlas la luminosidad, casi cualquier color funcionará.
Pero el mejor tono no salvará una mala estructura de luz.



### Construir paleta UI

Sistema funcional reutilizable.
Es diseñar un lenguaje visual consistente.

Una paleta UI profesional NO es una lista de colores.
Es un sistema organizado por roles

Modelo:
`paleta UI = roles + escalas + reglas de uso`

Proceso:

```
1. Definir neutrales (base del sistema)
2. Elegir color primario
3. Construir escala tonal
4. Definir colores de estado
5. Crear superficies
6. Validar contraste
7. Convertir a tokens
```

El orden importa muchísimo.
Se empiezan por grises, no por colores.

1. Neutrales
70% invisible del UI, La mayor parte de una interfaz NO es colorida.
Es neutral.

Ej:

```
fondos
cards
texto
bordes
divisores
```

Una buena paleta empieza con una escala neutral.

```
neutral-0   (background)
neutral-50
neutral-100
neutral-200
neutral-300
neutral-400
neutral-500
neutral-600
neutral-700
neutral-800
neutral-900 (texto fuerte)
```

No deben ser grises puros.

UI moderna usa grises ligeramente teñidos:

azulados → tecnológico
cálidos → editorial
verdosos → natural

Ej: gris azulado

```
neutral-100: hsl(220 15% 96%);
neutral-500: hsl(220 10% 50%);
neutral-900: hsl(220 15% 12%);
```

Cambia luminosidad, casi no el tono.

2. Color primario

debe:

```
contrastar con neutrales
funcionar como acción principal
escalar bien en luminosidad
```

Ej: 
`primary-500 = base`

3. Construir la escala tonal
Una UI necesita múltiples versiones del mismo color.

Escala estándar:

```
50  100 200 300 400 500 600 700 800 900
```

Regla:
Cambiar principalmente luminosidad, no hue.

Ej:

```
primary-50:  hsl(220 90% 97%);
primary-200: hsl(220 85% 80%);
primary-500: hsl(220 80% 52%);
primary-700: hsl(220 75% 40%);
primary-900: hsl(220 70% 22%);
```

Permite:

| Uso              | Token   |
| ---------------- | ------- |
| background suave | 50      |
| hover            | 400     |
| botón            | 500     |
| active           | 600–700 |
| texto fuerte     | 800–900 |


4. Colores de estado: semánticos
Nunca reutilizar el primario para todo.

Sistema mínimo:

| Estado  | Color            |
| ------- | ---------------- |
| Success | verde            |
| Warning | amarillo/naranja |
| Error   | rojo             |
| Info    | azul/cyan        |

##### Cada uno también necesita escala.

```
success-100 → fondo mensaje
success-500 → icono
success-700 → texto fuerte
```

5. Superficies: capas visuales
Aparece la profundidad UI.

Sistema tipico:

```
background
surface-1
surface-2
surface-3
overlay
```

Diferencias pequeñas de luminosidad (2–6%).
Esto crea jerarquía sin ruido.

6. Validación de contraste

Verificar:
texto sobre fondo
texto sobre primario
botones
links

Reglas:
4.5:1 texto normal
3:1 texto grande

El contraste depende de luminosidad relativa.

7. Convertir la paleta en tokens

Tokens semánticos:
no usar nombres de color

```
❌ blue-500
✅ color-primary
```

Código:

```
:root{
  --color-bg: var(--neutral-0);
  --color-surface: var(--neutral-100);
  --color-text: var(--neutral-900);

  --color-primary: var(--primary-500);
  --color-primary-hover: var(--primary-600);

  --color-success: var(--success-500);
}
```

Permite cambiar toda la identidad sin romper código.

Arquitectura final:
Una paleta profesional suele tener:

```
NEUTRALES   → 10–12 tonos
PRIMARIO    → 10 tonos
ESTADOS     → 4 × 6 tonos
ACENTO      → opcional
```

Total ≈ 40–60 tokens reales.

Modelo profesional:

```
Neutrales → estructura
Primario → acción
Estados → significado
Luminosidad → jerarquía
Tokens → escalabilidad
```



### Neutrales

Las interfaces destacan por sus neutrales
Una buena UI Está hecha de relaciones de luz entre neutros.

Los colores llamativos ocupan poco espacio visual.
Los neutros construyen la arquitectura completa.

Idea:

```
Neutrales = estructura visual silenciosa
Color = señal puntual
```

Si eliminas los colores de marca, una buena UI sigue funcionando.
Si eliminas los neutros, colapsa.

1. Neutral
No son simplemente “grises”.

En UI, un neutral es:
`color de baja saturación usado para estructura y legibilidad`

Incluyen:

```
blancos suaves
grises
casi-negros
tonos apenas teñidos
```

Ej:
gris azulado (tech)
gris cálido (editorial)
gris verdoso (natural)

Importante:
Gris puro (#808080) casi nunca se usa en UI profesional.

se siente artificial
genera vibración visual
no armoniza con colores primarios

2. Dominio de Interfaz

| Tipo             | % visual aproximado |
| ---------------- | ------------------- |
| Neutrales        | 70–85%              |
| Texto            | 10–20%              |
| Colores de marca | 5% o menos          |

El usuario pasa la mayor parte del tiempo mirando neutros.
Por eso determinan la sensación general.

3. Funciones de los neutrales 

A. Crear jerarquía sin ruido
Cambios pequeños de luminosidad separan capas:

```
background
surface
card
hover
border
```

Sin usar sombras fuertes ni colores.

B. Mejorar legibilidad
El mejor texto NO es negro puro

```
#111111
#1a1a1a
#222222
```
reduce fatiga visual
suaviza contraste extremo

C. Definir profundidad
La profundidad moderna se logra más con neutros que con sombras.

Ej:

```
L=98% background
L=95% surface
L=92% card
```

Sólo 3% de diferencia → sensación de capas.

D. Color
Si todo es colorido, nada destaca.
Los neutros crean silencio visual para que el primario tenga impacto.

4. Neutrales teñidos
Interfaces modernas casi nunca usan gris neutro real.

Se añade un leve tinte:

Tech / SaaS:
`hsl(220 15% 96%)  /* gris azulado */`

Editorial:
`hsl(30 10% 96%)   /* gris cálido */`

Neutral:
`hsl(140 10% 95%)  /* gris verdoso */`

El usuario no lo percibe conscientemente, pero siente coherencia.

5. Escala neutral profesional
Sistema típico:

```
neutral-0
neutral-50
neutral-100
neutral-200
neutral-300
neutral-400
neutral-500
neutral-600
neutral-700
neutral-800
neutral-900
neutral-950
```

| Token   | Uso              |
| ------- | ---------------- |
| 0–100   | backgrounds      |
| 200–300 | surfaces         |
| 400–500 | borders          |
| 600–700 | texto secundario |
| 800–950 | texto principal  |


6. Diferencias pequeñas, gran impacto

##### 2% – 6% de cambio de luminosidad
Eso crea elegancia y estabilidad visual.

7. error
blanco + gris + negro

```
UI dura
contraste agresivo
sensación barata
```

Solución: escala rica de neutros suaves

8. Neutrales y modo oscuro

Dark mode NO es invertir colores.
Se redefine la escala neutral:

```
light mode:
98 → 12

dark mode:
6 → 92
```

Los neutros mantienen jerarquía aunque cambie la polaridad 

9. Buenos neutrales

```
puedes quitar el color primario y la UI sigue clara
todo se siente equilibrado sin sombras fuertes
el color primario destaca automáticamente
no hay “zonas gritonas”
```

10. Ej

```
:root{
  --neutral-0:  hsl(220 15% 98%);
  --neutral-100:hsl(220 14% 95%);
  --neutral-200:hsl(220 12% 90%);
  --neutral-500:hsl(220 10% 50%);
  --neutral-700:hsl(220 12% 28%);
  --neutral-900:hsl(220 15% 12%);
}
```

mismo hue casi siempre
cambia principalmente luminosidad

Modelo:

```
Neutrales = espacio
Color = objeto
```
El usuario percibe primero el espacio.

Regla:
Si tus neutrales están bien diseñados, casi cualquier color primario funcionará.
Pero el mejor color primario no salvará malos neutrales.


### Light mode y Dark mode

##### En dark mode se trata de reconstruir la luz del sistema visual
El objetivo es mantener la misma estructura perceptual bajo otra condición de iluminación

1. Dos modos

Light Mode:

Optimizado para:
ambientes iluminados
lectura prolongada
contraste alto

Dark Mode:

Optimizado para:
poca luz ambiental
reducción de deslumbramiento
descanso visual nocturno

El ojo humano percibe brillo de forma no lineal.
Por eso no basta invertir colores.

2. Error clásico: invertir colores

```
blanco → negro
negro → blanco
```

Resultado:

contraste agresivo
textos vibrantes
fatiga visual
profundidad rota

En pantallas oscuras:
el blanco puro brilla demasiado

3. Principio: conservar la jerarquía relativa
Lo que debe mantenerse igual entre modos NO es el color.

Es la relación de luminosidad.

Light mode:

```
Background   L=98%
Surface      L=94%
Card         L=90%
Border       L=80%
Text         L=12%
```

Dark mode equivalente:

```
Background   L=6%
Surface      L=10%
Card         L=14%
Border       L=24%
Text         L=92%
```

Las distancias relativas se conservan.
Esto mantiene la comprensión visual.

4. Neutrales en ambos modos
Aquí los neutrales hacen todo el trabajo.

Light mode:
neutros claros dominan
texto oscuro

Dark mode:
neutros oscuros dominan
texto claro suavizado

Nunca usar negro puro: `#000000`
Usar: `hsl(220 15% 6%)`

El negro absoluto elimina profundidad.

5. Regla critica para Dark Mode

Error: `texto = blanco puro`
demasiado contraste
vibración visual

Profesional:

```
primary text ≈ 85–92% lightness
secondary ≈ 65–75%
disabled ≈ 45–55%
```
Reduce fatiga.

6. Colores primarios en Dark Mode

##### Error frecuente: usar el mismo primario.

En dark mode los colores parecen más brillantes.

`dark mode → menor saturación + mayor luminosidad`

| Modo  | Primary          |
| ----- | ---------------- |
| Light | hsl(220 80% 52%) |
| Dark  | hsl(220 70% 60%) |

Se vuelve más suave y legible.

7. Superficies elevadas

##### En light mode: elevación = sombras.

##### En dark mode: elevación = superficies MÁS claras

background 6%
surface    10%
modal      16%
popover    20%

Más luz = más cerca del usuario.
Esto invierte la intuición física real.

8. Sombras en Dark Mode
Sombras negras no funcionan

Se reemplazan por:

```
cambios de luminosidad
halos suaves
overlays claros
```

Ej:

`box-shadow: 0 0 0 1px rgba(255,255,255,.05);`
No simula sombra, simula separación.

9. Sistema dual con tokens
Nunca duplicar estilos manualmente.
Se usan tokens semánticos.

Tokens base:

```
:root{
  --color-bg: hsl(220 15% 98%);
  --color-text: hsl(220 15% 12%);
}
```

Dark mode:

```
[data-theme="dark"]{
  --color-bg: hsl(220 15% 6%);
  --color-text: hsl(220 15% 92%);
}
```

Los componentes no cambian.
Sólo cambian los valores.

10. Check profesional

usable en escala de grises
sin colores de marca sigue clara
contraste cómodo en ambos modos
jerarquía idéntica entre modos

11. Dark Mode mal diseñado

negro puro dominante
colores fluorescentes
texto blanco puro en todo
sombras fuertes
mismos colores del light mode

12. Modelo

Light mode = luz ambiente alta
Dark mode  = luz ambiente baja

No cambias colores.
Cambias cómo se comporta la luz del sistema.

```
Estructura        → igual
Jerarquía         → igual
Relaciones luz    → iguales
Valores absolutos → diferentes
```

Regla:
Si tu sistema de luminosidad está bien diseñado, crear dark mode toma horas, no semanas.
Porque ya diseñaste la luz, no los colores.



## 2. Teoría del color aplicada

Armonías y reglas prácticas:
Contenidos: armonías (complementaria, análoga, triádica, tetrádica, monocromática)
esquemas de acento, uso de neutrales, gradientes y mezclas.

Actividades: crear 5 paletas con distintas armonías y aplicarlas a un mismo layout.


La teoría clásica del color se conecta directamente con decisiones reales de UI
En UI no la usamos teoría clásica del color se conecta directamente con decisiones reales de UI

`UI = comunicación funcional`

Las armonías de color no buscan belleza abstracta, sino:

claridad
coherencia
diferenciación
estabilidad visual

1. Armonía de color
Relación estructurada entre colores basada en su posición en el círculo cromático.

Sirve para evitar combinaciones caóticas.

Modelo:
`armonía = regla matemática → sensación visual estable`

2. Círculo cromático

Entender relaciones angulares:

```
0°   rojo
60°  amarillo
120° verde
180° cyan
240° azul
300° magenta
```

Las armonías se definen por distancias angulares.

3. Regla en UI

```
80–90% interfaz = neutros
10–20% = colores armónicos
```

Las armonías afectan principalmente:

```
primario
acentos
estados
gráficos
```

No todo el layout

4. Armonías principales en UI

`Monocromática`: La más importante
Un solo hue, múltiples luminosidades.

Ej:
azul claro
azul medio
azul oscuro

Domina la UI:

máxima coherencia
mínima carga cognitiva
fácil accesibilidad
perfecta para sistemas grandes

Usado:

dashboards
SaaS
herramientas profesionales

Regla: cambiar luminosidad > cambiar color

`Análoga`: vecinos en el círculo
`Colores cercanos (±30°)`.

Ej:
azul → cyan → verde

Resultado:
suavidad
continuidad visual
sensación natural

Uso:

fondos graduales
visualizaciones
acentos secundarios

Poco contraste → no usar para acciones críticas

`Complementaria`: Opuestos
`Colores separados ~180°`.

Ej:
azul ↔ naranja
rojo ↔ verde
violeta ↔ amarillo

Produce:

contraste fuerte
alta atención

En IU se usa con moderación

Regla: `1 dominante + 1 acento pequeño` 
Nunca 50/50.

`Split Complementary`: Profesional
##### Un color base + dos vecinos del opuesto.

Ej:

```
azul base
rojo-naranja
amarillo-naranja
```

Resultado:

contraste sin agresividad
equilibrio natural

`Triádica`:
`Tres colores separados 120°.`

Ej:

azul
rojo
amarillo

`Alta energía visual`.

Uso:

ilustraciones
gráficos
productos educativos

Difícil para UI completa

5. Aplicación en UI
Las armonías NO definen la UI completa.

Definen:

```
primario
+ acentos
+ estados secundarios
```

6. Regla 60–30–10 adaptada para UI

| Porcentaje | Uso             |
| ---------- | --------------- |
| 70–85%     | neutros         |
| 10–20%     | color primario  |
| 5–10%      | acento armónico |

7. Armonía vs Jerarquía

Principiantes: buscan colores que combinen.

##### Profesionales: buscan colores que comuniquen roles distintos.

Ej:

```
primario → acción
complementario → alerta leve
análogo → soporte visual
```

8. Saturación: regla invisible
Incluso con armonía correcta, la saturación puede romper todo.

Regla:
cuantos más colores → menor saturación individual

Interfaces complejas usan colores suaves.

9. Método

Paso 1 — elegir primario
Ej: azul.

Paso 2 — elegir armonía
Ej: split complementary.

Paso 3 — limitar roles
azul → acciones
naranja suave → highlights
amarillo suave → warning leve

Paso 4 — ajustar luminosidad
Antes de tocar hue.

Paso 5 — probar en escala de grises
Validar jerarquía.

10. Ej

```
Primary: hsl(220 80% 52%)
Accent A: hsl(25 70% 55%)
Accent B: hsl(45 70% 60%)
```

Luego se crean escalas luminosas para cada uno.

11. Buena armonía en UI

nada compite visualmente
acciones principales claras
sensación consistente entre pantallas
colores parecen relacionados naturalmente

12. Mala armonía

muchos colores saturados
botones compitiendo
sensación infantil o caótica
cada pantalla parece distinta

Modelo:

```
Armonía = relación entre colores
Luminosidad = jerarquía
Neutrales = estructura
```

Regla:
La mejor armonía es la que casi no se nota.
Si el usuario piensa en los colores, probablemente hay



## Color Semántico

`Color semántico = color definido por significado, no por apariencia`

En lugar de decir:
“botón azul”

se dice:
“botón primario”

##### El color deja de ser decoración y pasa a ser información.

1. Objetivo
Las interfaces modernas tienen muchos estados y componentes.

Sin semántica:
cada pantalla usa colores distintos
el sistema se vuelve inconsistente
los cambios de diseño rompen todo

2. Capas del sistema de color
Los sistemas modernos separan tres niveles.

```
1. Colores base
2. Tokens semánticos
3. Uso en componentes
```

`Colores base`:
Son valores físicos.

blue-500
green-500
red-500
gray-200

Son sólo materia prima.

`Tokens semánticos`:

color-primary
color-success
color-warning
color-error
color-surface
color-text

##### Estos nombres describen qué comunica el color. No cómo se ve.

`Componentes`:
Los componentes usan los tokens.

```
button-primary {
  background: var(--color-primary);
}
```

Si cambia el color primario, todos los botones se actualizan.

3. Categorías semánticas

`Acción`:

| Token     | Significado       |
| --------- | ----------------- |
| primary   | acción principal  |
| secondary | acción secundaria |
| accent    | acción destacada  |


`Estado`:

| Token   | Significado         |
| ------- | ------------------- |
| success | operación exitosa   |
| warning | posible problema    |
| error   | fallo               |
| info    | información neutral |

`Estructura`:

| Token      | Significado               |
| ---------- | ------------------------- |
| background | fondo principal           |
| surface    | superficie de componentes |
| border     | separadores               |
| overlay    | modales                   |


`Texto`:

| Token          | Significado            |
| -------------- | ---------------------- |
| text-primary   | lectura principal      |
| text-secondary | información secundaria |
| text-muted     | información débil      |

4. Escalar

Si se cambia el color de marca.
Ejemplo: azul → violeta.

Sin semántica:
hay que cambiar cientos de estilos.

Con semántica:
`--color-primary: violet-500;`
Todo el sistema se adapta automáticamente.

5. Semántica y accesibilidad

El color semántico ayuda a evitar un problema clásico:
comunicar sólo con color.

Ej incorrecto:

```
error = rojo
success = verde:
```

##### El sistema semántico permite agregar:, iconos, texto, patrones
El color se vuelve refuerzo, no único canal.

Las recomendaciones de accesibilidad del World Wide Web Consortium (WCAG) enfatizan esto.

6. Ej

Base:

```
--blue-500
--green-500
--red-500
--gray-100
```

Tokens semánticos:

```
--color-primary: var(--blue-500);
--color-success: var(--green-500);
--color-error: var(--red-500);
--color-surface: var(--gray-100);
```

Componentes:

```
.alert-error {
  background: var(--color-error);
}
```

7. Semántica y modo oscuro
tokens semánticos permiten cambiar tema fácilmente.

Light mode:
`--color-surface: gray-100;`

Dark mode:
`--color-surface: gray-800;`

Los componentes no cambian.
Sólo el significado.

8. Error

Escribir:

```
.button-blue
.alert-red
```

difícil mantener
dependiente de apariencia
rompe si cambia la paleta

Profesional:

```
.button-primary
.alert-error
```

9. Semántica avanzada: grandes sistemas
##### Los design systems grandes agregan más niveles: Permite controlar cada contexto

Ej:

```
color-action-primary
color-action-hover
color-bg-surface
color-bg-elevated
color-border-subtle
color-border-strong
```

Sistemas como Material Design de Google usan estructuras muy detalladas.

10. Modelo

```
Color físico → valor visual
Color semántico → significado en la interfaz
```

El usuario percibe el significado antes que el color exacto.

11. Regla

`Nombra colores por qué hacen, no por cómo se ven.`
Convierte una paleta en un sistema de diseño.


### Sistema de color profesional en UI:

fenómeno del color
primario
luminosidad
paletas
neutrales
light/dark mode
armonías
color semántico 




# Diseño · Modelado · Decoración de Elementos en UI

Cómo se construye visualmente un elemento de interfaz
Forma, volumen, jerarquía visual y acabado estético.
Reforzar función mediante forma y estilo

Diseñar componentes visualmente coherentes, escalables y reutilizables dentro de un sistema de diseño

Controlar:

`Forma`
`Espaciado`
`Bordes y superficies`
`Profundidad`
`Estados visuales`
`Micro-detalles estéticos`


## 1. Anatomía de un elemento UI

Qué compone visualmente cualquier componente:

`Contenedor vs contenido`
`Bounding box`
`Padding / margin`
`Área interactiva (hit area)`
`Layout interno`
`Jerarquía visual`

Modelo mental:

Elemento UI:

```
estructura + superficie + interacción + estado
```

Ejercicio:

Desarmar visualmente:

Button
Card
Input
Navbar

Identificar capas visuales.


## 2. Forma y geometría visual

Modelar elementos mediante geometría consistente.

Conceptos:

`Rectángulo como unidad base`
`Radio de borde (border-radius)`
`Consistencia geométrica`
`Grid invisible`
`Proporciones (4pt / 8pt system)`

Principio:

La UI moderna es geometría suavizada
Menos formas → más coherencia cognitiva

Ejercicio:

Crear versiones del mismo botón con:
radio 0
radio 4
radio 8
radio 999 (pill)

Analizar percepción.


## 3. Espaciado y respiración visual

Aprender a “modelar aire”.

Conceptos:

`Espaciado interno vs externo`
`Ritmo vertical`
`Densidad visual`
`Ley de proximidad (Gestalt)`

Sistema recomendado:

Escala:

```
4 / 8 / 12 / 16 / 24 / 32 / 48
```

Ejercicio:

Diseñar una card:

versión compacta
versión cómoda
versión editorial


## 4. Superficie y materiales UI

Simular materiales digitales.

Conceptos:

`Surface levels`
`Elevación`
`Tonos neutros`
`Capas visuales`

Tipos de superficie:

`Flat`
`Soft UI`
`Material`
`Glass / Frosted`
`Minimal neutral`

Regla:

```
La superficie comunica importancia antes que el color.
```


## 5. Bordes, sombras y profundidad

Crear jerarquía espacial.

`Box-shadow física vs decorativa`
`Sombras difusas vs duras`
`Elevation system`
`Inner shadows`
`Outline vs border`

Modelo mental:

```
Sombras = coordenada Z de la UI.
```

Ejercicio:

Crear 5 niveles de elevación coherentes.


## 6. Estados visuales (modelado dinámico)

Diseñar comportamiento visual

Estados:

`Default`
`Hover`
`Focus`
`Active`
`Disabled`
`Error`
`Success`

Principio:

```
El cambio debe afectar SOLO 1–2 propiedades:
```

`luminosidad`
`elevación`
`escala`
`borde`

Nunca todo a la vez.


## 7. Decoración funcional (micro-estética)

Decorar sin romper usabilidad

Elementos decorativos:

`Iconografía`
`Dividers`
`Gradientes suaves`
`Highlights`
`Micro sombras`
`Noise sutil`

Anti-patrones:

sombras fuertes
gradientes saturados
bordes inconsistentes
exceso de estilos

Regla:

```
Decoración = refuerzo semántico
```

## 8. Sistema de componentes

Pasar de elementos aislados a sistema coherente

Conceptos:

`Component tokens`
`Variantes`
`Escalabilidad`
`Consistencia transversal`

Crear:

Button system
Card system
Input system
Modal system


## Ejercicio

1. Evolución de botón

Diseñar el mismo botón en 5 niveles:

Wireframe
Forma básica
Espaciado correcto
Elevación
Decoración final

2. Card progresiva

Agregar en orden: Nunca saltear pasos

Estructura:

→ spacing
→ surface
→ shadow
→ estados
→ micro detalles

3. Auditoría UI

App conocida y analizar:

`consistencia de radios`

`sistema de sombras`

`niveles de superficie`

`densidad visual`


## Implementación

Tokens base:

```
:root{
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;

  --elevation-1: 0 1px 2px rgba(0,0,0,.08);
  --elevation-2: 0 4px 12px rgba(0,0,0,.12);
}
```

Card:

````.card{
  padding: var(--space-3);
  border-radius: var(--radius-md);
  box-shadow: var(--elevation-1);
}
```


## Modelo

Diseñar elementos UI ocurre en este orden:

```
1. Estructura
2. Geometría
3. Espaciado
4. Superficie
5. Profundidad
6. Estados
7. Decoración
```

Diseñar componentes coherentes sin copiar diseños
Crear sistemas visuales consistentes
Hacer UI profesional con pocos estilos
Convertir diseño → código sin fricción
Detectar inmediatamente UI mal modelada


Temas siguientes:

Lenguaje visual y coherencia estética en UI

Arquitectura visual de pantallas completas

Micro-interacciones y motion UI


# Diseño · Modelado · Decoración de Elementos en UI

Cómo se construye visualmente un elemento de interfaz
Forma, volumen, jerarquía visual y acabado estético.
Reforzar función mediante forma y estilo

Diseñar componentes visualmente coherentes, escalables y reutilizables dentro de un sistema de diseño

Controlar:

`Forma`
`Espaciado`
`Bordes y superficies`
`Profundidad`
`Estados visuales`
`Micro-detalles estéticos`

Hasta ahora vimos cómo se ve la UI.
Ahora veremos cómo existen los elementos dentro de la interfaz.

UI no solo 'bonita' sino 'bien diseñada y coherente' 

Idea:
Un elemento de UI es un objeto con comportamiento visual y significado.

Un botón, tarjeta o input es:

```
una forma
con estructura
con jerarquía
con materialidad
con estado
```

1. 3 niveles del elemento UI

Todo elemento visual se construye en tres capas.
DISEÑO → MODELADO → DECORACIÓN

`Diseño (Structure)`:
Define qué es el elemento

Responde:
¿Para qué sirve?
¿Qué tan importante es?
¿Cómo se relaciona con otros?

Ejemplos:
botón primario
tarjeta
navegación
input

Aquí NO hay estética todavía

`Modelado` (Form):
Define cómo existe físicamente.

Se construye mediante:

```
tamaño
proporciones
bordes
profundidad
espaciado
ritmo
```

##### Aquí el elemento empieza a sentirse como un objeto.
Es geometría + percepción.

`Decoración (Surface)`:
Define cómo se percibe visualmente.

Incluye:

```
color
sombras
gradientes
texturas
efectos
```

Es la piel del objeto.

Error común:
empezar por decoración sin diseñar ni modelar.

Resultado: UI inconsistente.

2. Principios del Modelado

`Principio de Objeto`:
El cerebro humano interpreta UI como objetos físicos

Un elemento debe parecer:

```
tocable
separable
identificable
```
Esto viene de la psicología Gestalt.

Conceptos:

```
figura vs fondo
continuidad
agrupación
```

`Principio de Jerarquía`:
No todos los elementos pesan igual.

Se controla mediante:

```
tamaño
contraste
espacio
luz
```

Regla:

`Importancia ↑ → mayor contraste o tamaño`

`Principio de Contención`:
Los elementos viven dentro de contenedores.

Ej:
card contiene información
modal contiene tarea
navbar contiene navegación

Contenedor:
card contiene información
modal contiene tarea
navbar contiene navegación

`Principio de Ritmo`:
La UI debe tener repetición consistente.

Se logra con:

```
spacing system (4px / 8px)
radios repetidos
alturas uniformes
```

El usuario percibe estabilidad.

`Principio de Materialidad`
Los elementos simulan propiedades físicas:

| Propiedad   | Simulación UI |
| ----------- | ------------- |
| altura      | sombra        |
| superficie  | color         |
| borde       | separación    |
| iluminación | gradiente     |


Fue formalizado en Material Design de Google.

3. Modelado: construcción de elemento
Un elemento UI profesional suele seguir esta estructura:

┌──────────────────────┐
│      Surface         │
│  (color / fondo)     │
│                      │
│   Content            │
│                      │
└──────────────────────┘
 ↑        ↑        ↑
borde   padding   sombra

Componentes invisibles:

padding (respiración)
border radius (personalidad)
elevation (jerarquía)

4. Decoración correcta vs incorrecta

Profesional:

La decoración:

refuerza jerarquía
indica interacción
comunica estado
Nunca compite con el contenido

Principiante:

sombras fuertes aleatorias
gradientes sin propósito
muchos colores
bordes inconsistentes

Decoración usada para arreglar diseño débil.

5. 5 atributos visuales universales

Todo elemento UI puede analizarse con esto:

| Atributo   | Pregunta                |
| ---------- | ----------------------- |
| Forma      | ¿qué silueta tiene?     |
| Tamaño     | ¿qué importancia tiene? |
| Espacio    | ¿cuánto respira?        |
| Luz        | ¿qué tan elevado está?  |
| Superficie | ¿qué material parece?   |

6. Estados del elemento (modelado dinámico) 

Un elemento no estático

Tiene estados:

```
default
hover
active
focus
disabled
error
```

El modelado debe preverlos desde el inicio.

Ej:

```
hover → más luz
active → menos elevación
disabled → menor contraste
```

7. Personalidad visual (Avanzado)

El modelado define la personalidad del producto.

| Modelado           | Sensación  |
| ------------------ | ---------- |
| bordes rectos      | técnico    |
| bordes redondeados | amigable   |
| mucho aire         | premium    |
| compacto           | productivo |
| sombras suaves     | moderno    |

8. Regla

Primero estructura
Luego forma
Último decoración

Nunca al revés.

9. Check

El elemento tiene propósito claro?
Su tamaño refleja importancia?
Respira correctamente?
Pertenece a un sistema?
Funciona sin color?

Si funciona en escala de grises → el diseño está bien modelado.

10. Modelo

`UI = sistema de objetos perceptuales`

Diseñar UI es:

arquitectura visual
escultura digital
comunicación perceptiva



## Analizar una UI

`Descubrir las decisiones invisibles detrás de la interfaz.`
Analizamos estructura perceptual.
No analizamos estética.

##### Pregunta: ¿Qué problema resuelve cada decisión visual?

Modelo de Análisis en 5 Capas:

```
1. Propósito
2. Jerarquía
3. Estructura
4. Sistema visual
5. Percepción y emoción
```

Siempre en este orden.

1. Propósito
Qué intenta lograr esta pantalla?

Preguntas:

```
¿Cuál es la acción principal?
¿Qué debe hacer el usuario en 5 segundos?
¿Qué elemento impulsa esa acción?
```

Ej:

```
login → acceder rápido
e-commerce → comprar
dashboard → entender estado
```

Si el propósito no es claro → la UI falla aunque sea bonita.

2. Jerarquía: Hacia donde se dirige la mirada
El ojo humano sigue patrones previsibles.

Analiza:

```
primer punto de atención
segundo nivel
contenido secundario
```

Test:

`¿Qué recuerdo primero?`

Si no coincide con la acción principal → mala jerarquía.

Herramientas de Jerarquía:

```
tamaño
contraste
color
espacio vacío
posición
```

Regla:
##### Una pantalla debe tener UN protagonista.

3. Estructura: organización
Analizamos arquitectura

Busca:

```
grids
alineaciones
contenedores
márgenes consistentes
```

Preguntas:

```
¿Los elementos pertenecen a grupos claros?
¿Existe ritmo visual?
¿Hay alineaciones invisibles?
```

El cerebro detecta orden aunque el usuario no lo note.

4. Sistema Visual: Hay coherencia?
Ahora sí miramos estética.

Check:

```
radios consistentes
sombras coherentes
spacing repetido
colores semánticos
estados uniformes
```

Una buena UI parece diseñada por una sola mente.

5. Percepción y emoción: sentimiento

| Elemento   | Pregunta               |
| ---------- | ---------------------- |
| Espacio    | ¿premium o denso?      |
| Bordes     | ¿amigable o técnico?   |
| Contraste  | ¿energético o calmado? |
| Movimiento | ¿vivo o estable?       |

Ej:

mucho aire → lujo
compacto → productividad
colores suaves → confianza


Método:

1. Blur Test:
Entrecierra los ojos o aleja la pantalla.

Observa:
manchas grandes
zonas de contraste

Debes ver claramente:
foco principal
estructura general

Si todo pesa igual → ruido visual

2. Escala de grises
Ignora el color.

Pregunta:
¿Funciona sólo con luz y tamaño?

sí → diseño sólido.

3. Detectar el sistema

Busca repeticiones:

```
¿todos los botones iguales?
¿mismos espacios?
¿mismos radios?
```

4. Tokens invisibles

inferir:

```
spacing unit ≈ 8px?
border radius ≈ 6–12px?
niveles de elevación ≈ 3?
```

Cuando puedes deducir reglas → diseño profesional.


Diseñador profesional:

Mira:

decisiones
restricciones
prioridades 


Ej:

Imagina una pantalla con:
botón grande azul arriba
texto pequeño debajo
card con sombra leve

Analisis:

propósito → acción primaria clara
jerarquía → botón domina
modelado → card separa contexto
sistema → elevación consistente
emoción → moderna y segura


Errores al analizar:

1. Analizar detalles primero
Siempre empezar macro → micro.

2. Confundir gusto con calidad
Algo puede no gustarte y estar bien diseñado.

3. Ignorar contexto
Una UI depende del problema que resuelve.


#### Ejercicio al analizar UI:

¿Cuál es la acción principal?
¿Dónde mira primero mi ojo?
¿Cuál es la unidad de spacing?
¿Cuántos niveles de elevación hay?
¿Qué personalidad transmite?



## Construcción de una UI

Flujo:

```
objetivo → sistema de tokens → estructura → componentes → estados → accesibilidad → código.
```

Conceptos y decisiones:

1. Propósito:
Acción principal: “Suscribirse / Crear cuenta” (CTA).
Soporte: formulario compacto + información secundaria.

2. Arquitectura visual (Macro)
Layout: grid centrado, header pegado arriba, hero con CTA a la izquierda, card con formulario a la derecha en pantallas grandes (stack en móvil).
Una sola protagonista por pantalla (CTA).

3. Sistema de diseño mínimo (tokens)

`Neutrales`: escala amplia (neutral-0 → neutral-900).
`Primario`: escala tonal (primary-50 → primary-900).
`Semánticos`: color-primary, color-success, color-error, color-surface, color-text, color-border.
`Spacing`: 4 / 8 / 12 / 16 / 24 / 32 / 48px.
`Radii`: sm / md / lg.
`Elevations`: 3 niveles (subtle, default, raised).

(Usar tokens semánticos permite cambiar la marca sin tocar componentes.

4. Modelado de componentes (formas)

Botón: padding cómodo, radius md, estados con cambio ligero de luminosidad y elevación.
Card: padding medio, radius md, surface con elevación sutil.
Input: altura accesible, focus claramente visible (anillo y ligero aumento de elevación).

5. Decoración (superficie / luz / color)

Controlar principalmente luminosidad para jerarquía.
Saturación moderada en primario (no fluorescente).
Neutrales ligeramente teñidos (ej. gris-azulado) para coherencia tech

6. Estados y comportamiento

Estados principales: default, hover, focus, active, disabled, error, success.
Cambios limitados a 1–2 propiedades (luminosidad, elevación) por estado.

7. Accesibilidad

Contraste WCAG: mínimo 4.5:1 para texto normal.
No depender sólo del color para estados (añadir icono / texto / aria).
Focus visible (prefer :focus-visible) y tamaño de hit-area ≥ 44×44px para botones táctiles.

8. Light / Dark

No invertir colores: definir tokens semanticamente y cambiar sólo valores de luminosidad en el theme.
Texto en dark mode: evitar blanco puro; usar ~90% de lightness

9. Testing rápido

Blur test (alejar/entrecerrar ojos) — la jerarquía debe seguir clara.
Convertir a escala de grises — la UI debe funcionar sin colores

Componentes:

`<Header />`: logo text, nav mínima, toggle Light/Dark.
`<Hero />`: título, subtítulo, CTA primario (btn).
`<CardForm />`: tarjeta con formulario (email + nombre) y botón submit secundario, mostrando estados.

Reglas CSS: tokens, utilities mínimas (espacios, radius), focus, transitions.

### Código

```
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Mini-UI — Demo</title>
  <style>
    /* ---------------------------
       DESIGN TOKENS (semánticos)
       - Neutrales y primarios en HSL (control luminosidad)
       - Nombres semánticos (no "blue-500")
       ---------------------------*/

    :root{
      /* Spacing scale */
      --space-1: 4px;
      --space-2: 8px;
      --space-3: 12px;
      --space-4: 16px;
      --space-5: 24px;
      --space-6: 32px;
      --space-7: 48px;

      /* Radii */
      --radius-sm: 6px;
      --radius-md: 12px;
      --radius-lg: 18px;

      /* Elevation (subtle, default, raised) */
      --elev-subtle: 0 1px 2px rgba(2,6,23,0.04);
      --elev-default: 0 6px 18px rgba(2,6,23,0.08);
      --elev-raised: 0 18px 40px rgba(2,6,23,0.12);

      /* Neutral scale (slightly bluish neutral) */
      --neutral-0:  hsl(220, 12%, 98%); /* background */
      --neutral-100:hsl(220, 12%, 96%);
      --neutral-200:hsl(220, 11%, 92%);
      --neutral-300:hsl(220, 10%, 88%);
      --neutral-400:hsl(220, 10%, 78%);
      --neutral-500:hsl(220, 10%, 66%);
      --neutral-600:hsl(220, 12%, 48%);
      --neutral-700:hsl(220, 12%, 34%);
      --neutral-800:hsl(220, 14%, 22%);
      --neutral-900:hsl(220, 16%, 12%);

      /* Primary scale (hue 220 = blue tech) */
      --primary-50:  hsl(220, 85%, 96%);
      --primary-100: hsl(220, 80%, 88%);
      --primary-200: hsl(220, 78%, 76%);
      --primary-300: hsl(220, 78%, 64%);
      --primary-400: hsl(220, 78%, 56%);
      --primary-500: hsl(220, 78%, 50%); /* base */
      --primary-600: hsl(220, 72%, 44%);
      --primary-700: hsl(220, 68%, 36%);
      --primary-800: hsl(220, 64%, 28%);
      --primary-900: hsl(220, 60%, 20%);

      /* Semantic tokens (map to scales) */
      --color-bg: var(--neutral-0);
      --color-surface: var(--neutral-100);
      --color-card: var(--neutral-200);
      --color-border: var(--neutral-300);
      --color-text: var(--neutral-900);
      --color-text-muted: var(--neutral-700);

      --color-primary: var(--primary-500);
      --color-primary-hover: var(--primary-600);
      --color-primary-active: var(--primary-700);
      --color-on-primary: hsl(0, 0%, 100%);

      --color-success: hsl(140, 60%, 30%);
      --color-error: hsl(355, 70%, 45%);

      /* Accessibility helpers */
      --focus-ring: 3px;
      --transition-fast: 180ms;
      --transition-medium: 280ms;
    }

    /* Dark theme (swap only values — do not change components) */
    :root[data-theme="dark"]{
      --color-bg: hsl(220, 12%, 6%);
      --color-surface: hsl(220, 12%, 10%);
      --color-card: hsl(220, 12%, 14%);
      --color-border: hsl(220, 14%, 24%);
      --color-text: hsl(220, 16%, 92%); /* avoid pure white */
      --color-text-muted: hsl(220, 12%, 70%);

      /* primary in dark: reduce saturation slightly, increase lightness for balance */
      --primary-500: hsl(220, 70%, 60%);
      --primary-600: hsl(220, 60%, 52%);
      --primary-700: hsl(220, 56%, 44%);

      --color-primary: var(--primary-500);
      --color-primary-hover: var(--primary-600);
      --color-primary-active: var(--primary-700);
      --color-on-primary: hsl(0,0%,10%); /* dark text over bright primary in dark mode */
    }

    /* ---------------------------
       Base layout + reset (simple)
       ---------------------------*/
    *{box-sizing: border-box}
    html,body{height:100%}
    body{
      margin:0;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      background: var(--color-bg);
      color: var(--color-text);
      line-height:1.35;
      -webkit-font-variant-ligatures: contextual;
      padding: calc(var(--space-5));
    }

    /* Layout container */
    .container{
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-6);
      align-items: start;
    }

    /* Header */
    header.app-header{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap: var(--space-4);
      padding: calc(var(--space-2)) calc(var(--space-3));
      background: transparent;
    }
    .brand{
      display:flex;
      gap: var(--space-3);
      align-items:center;
      font-weight: 600;
      font-size: 1.05rem;
    }
    .brand .logo{
      width:36px;height:36px;border-radius:8px;
      background: linear-gradient(135deg,var(--primary-400),var(--primary-600));
      box-shadow: var(--elev-default);
      display:inline-block;
    }
    nav{display:flex; gap: var(--space-3); align-items:center;}
    .theme-toggle{
      background: transparent;
      border: 1px solid var(--color-border);
      padding: 6px 10px;
      border-radius: 9px;
      cursor: pointer;
      color: var(--color-text);
      transition: background var(--transition-fast), border-color var(--transition-fast);
    }
    .theme-toggle:focus{outline: none; box-shadow: 0 0 0 var(--focus-ring) var(--primary-200);}

    /* Main grid: hero + card */
    .main-grid{
      display:grid;
      grid-template-columns: 1fr 420px;
      gap: var(--space-6);
      align-items: start;
    }
    @media (max-width:880px){
      .main-grid{grid-template-columns: 1fr; }
    }

    /* Hero */
    .hero{
      padding: var(--space-6);
      background: linear-gradient(180deg, transparent, rgba(0,0,0,0.01));
      border-radius: var(--radius-lg);
    }
    .hero h1{
      margin:0 0 var(--space-3) 0;
      font-size: clamp(1.6rem, 2.6vw, 2.4rem);
      line-height:1.05;
    }
    .hero p{ margin:0 0 var(--space-4) 0; color: var(--color-text-muted); max-width: 58ch; }

    /* Buttons */
    .btn{
      display:inline-flex;
      align-items:center;
      gap: 10px;
      padding: 10px 16px;
      border-radius: var(--radius-md);
      border: none;
      cursor: pointer;
      font-weight: 600;
      min-height: 44px;
      transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);
    }
    .btn:disabled{opacity: .6; cursor: not-allowed; transform: none}

    .btn-primary{
      background: var(--color-primary);
      color: var(--color-on-primary);
      box-shadow: var(--elev-subtle);
    }
    .btn-primary:hover{ background: var(--color-primary-hover); transform: translateY(-2px); box-shadow: var(--elev-default); }
    .btn-primary:active{ background: var(--color-primary-active); transform: translateY(0); box-shadow: var(--elev-subtle); }

    .btn-ghost{
      background: transparent;
      border: 1px solid var(--color-border);
      color: var(--color-text);
    }
    .btn-ghost:hover{ background: var(--color-surface); }

    /* Card / Form */
    .card{
      background: var(--color-card);
      padding: var(--space-5);
      border-radius: var(--radius-md);
      box-shadow: var(--elev-subtle);
      border: 1px solid var(--color-border);
    }
    .card h3{ margin:0 0 var(--space-3) 0; font-size:1.05rem;}
    .field{ display:flex; flex-direction:column; gap:8px; margin-bottom: var(--space-4); }
    label{ font-size: .9rem; color: var(--color-text-muted); }
    input[type="text"], input[type="email"]{
      padding: 12px 14px;
      border-radius: 10px;
      border: 1px solid var(--color-border);
      background: var(--color-surface);
      color: var(--color-text);
      font-size: .98rem;
      transition: box-shadow var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
    }
    input::placeholder{ color: var(--color-text-muted); }
    input:focus{
      outline: none;
      box-shadow: 0 0 0 var(--focus-ring) var(--primary-100);
      border-color: var(--color-primary);
      transform: translateY(-1px);
    }

    .help { font-size:.88rem; color: var(--color-text-muted); margin-top: -6px; }

    .alert{
      padding: 12px 14px;
      border-radius: 10px;
      font-size: .95rem;
      display:flex;
      gap:10px;
      align-items:center;
    }
    .alert.success{ background: hsl(140,40%,95%); color: var(--color-success); border: 1px solid hsl(140,40%,70%); }
    .alert.error{ background: hsl(355,80%,95%); color: var(--color-error); border: 1px solid hsl(355,70%,60%); }

    /* Footer / small print */
    .small{ font-size:.85rem; color: var(--color-text-muted); }

    /* Focus-visible for keyboard users */
    :focus-visible{ outline: none; box-shadow: 0 0 0 var(--focus-ring) var(--primary-200); border-radius: calc(var(--radius-md) + 2px); }

    /* Utilities */
    .stack{ display:flex; flex-direction:column; gap: var(--space-3); }
    .row{ display:flex; gap: var(--space-3); align-items:center; }
    .muted{ color: var(--color-text-muted); }
  </style>
</head>
<body>
  <div class="container" role="document">
    <!-- HEADER -->
    <header class="app-header" role="banner" aria-label="Cabecera de la aplicación">
      <div class="brand" aria-hidden="false">
        <span class="logo" aria-hidden="true"></span>
        <span class="brand-name">Producto UI</span>
      </div>
      <nav aria-label="Navegación principal">
        <button class="theme-toggle" id="themeToggle" aria-pressed="false" title="Alternar tema">Modo</button>
      </nav>
    </header>

    <!-- MAIN GRID -->
    <main class="main-grid" role="main" aria-labelledby="mainTitle">
      <!-- HERO -->
      <section class="hero" aria-labelledby="mainTitle">
        <h1 id="mainTitle">Diseña interfaces con intención — rápido y consistente</h1>
        <p>Un pequeño sistema de tokens controla color, luz y espacios. Aquí demostramos cómo construir componentes accesibles y reutilizables con un tema claro y oscuro.</p>
        <div class="row" style="margin-top:var(--space-3)">
          <button class="btn btn-primary" id="mainCta">Comenzar gratis</button>
          <button class="btn btn-ghost" onclick="document.getElementById('formEmail').focus()">Contacto</button>
        </div>
      </section>

      <!-- CARD / FORM -->
      <aside class="card" aria-labelledby="cardTitle" role="region">
        <h3 id="cardTitle">Crear cuenta</h3>

        <form id="signupForm" class="stack" novalidate>
          <div class="field">
            <label for="name">Nombre</label>
            <input id="name" name="name" type="text" placeholder="Tu nombre completo" autocomplete="name" required aria-required="true">
            <div class="help">Usa tu nombre real para personalizar la experiencia.</div>
          </div>

          <div class="field">
            <label for="email">Correo electrónico</label>
            <input id="email" name="email" type="email" placeholder="tú@ejemplo.com" autocomplete="email" required aria-required="true">
            <div class="help">Te enviaremos un correo de confirmación.</div>
          </div>

          <div class="row" style="justify-content:space-between;">
            <button class="btn btn-primary" type="submit" id="submitBtn">Crear cuenta</button>
            <button class="btn btn-ghost" type="button" id="demoBtn">Demo</button>
          </div>

          <div id="formMessage" aria-live="polite" style="margin-top: var(--space-3)"></div>

          <div class="small muted" style="margin-top:var(--space-4)">
            Al suscribirte aceptas los términos y condiciones.
          </div>
        </form>
      </aside>
    </main>

    <footer style="margin-top: var(--space-6)" class="muted small" role="contentinfo">
      Basado en principios de diseño sistemático — tokens, contrastes y jerarquía.
    </footer>
  </div>

  <script>
    /* ---------------------------
       JS: comportamiento mínimo
       - Theme toggle (persistente)
       - Form handling + validación básica
       - Accessible focus management
       ---------------------------*/

    (function(){
      const root = document.documentElement;
      const themeToggle = document.getElementById('themeToggle');
      const savedTheme = localStorage.getItem('ui-theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

      function applyTheme(t){
        if(t === 'dark'){
          root.setAttribute('data-theme','dark');
          themeToggle.setAttribute('aria-pressed','true');
        } else {
          root.removeAttribute('data-theme');
          themeToggle.setAttribute('aria-pressed','false');
        }
      }
      applyTheme(savedTheme);

      themeToggle.addEventListener('click', ()=>{
        const currentlyDark = root.getAttribute('data-theme') === 'dark';
        const next = currentlyDark ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem('ui-theme', next);
      });

      // Form behavior
      const form = document.getElementById('signupForm');
      const submitBtn = document.getElementById('submitBtn');
      const msg = document.getElementById('formMessage');

      form.addEventListener('submit', (e)=>{
        e.preventDefault();
        msg.innerHTML = ''; // limpiar mensajes previos

        const name = form.name.value.trim();
        const email = form.email.value.trim();

        if(!name || !email){
          msg.innerHTML = '<div class="alert error" role="alert">✖ Por favor completa todos los campos.</div>';
          return;
        }
        // Simple email pattern (no reemplaza validación server)
        const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if(!emailOK){
          msg.innerHTML = '<div class="alert error" role="alert">✖ Correo inválido.</div>';
          return;
        }

        // Simula envío
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        setTimeout(()=>{
          submitBtn.disabled = false;
          submitBtn.textContent = 'Crear cuenta';
          form.reset();
          msg.innerHTML = '<div class="alert success" role="status">✔ ¡Cuenta creada! Revisa tu correo para confirmar.</div>';
          // foco en mensaje para lectores de pantalla
          msg.querySelector('.alert').focus?.();
        }, 900);
      });

      // demo button quick focus to email
      document.getElementById('demoBtn').addEventListener('click', ()=>{
        const email = form.email;
        email.value = 'demo@example.com';
        email.focus();
      });

      // Accessibility: ensure buttons have keyboard focus styles
      // (already handled via :focus-visible in CSS)
    })();
  </script>
</body>
</html>
```

Buenas prácticas:

Valida contraste con herramientas WCAG del W3C y prueba con simulador de daltonismo.
Diseña primero en escala de grises; añade color después.
Usa tokens semánticos para permitir cambios de identidad sin tocar componentes.
Guarda data-theme y respeta prefers-color-scheme por defecto.
Para un flujo diseño→desarrollo, exporta tokens desde Figma (si usas Figma) y sincronízalos con tu repo.
Si migras a utilidades, considera Tailwind CSS y mapea tokens como variables



## Construcción de los elementos de una UI

Ej: Botón (Button) y un Campo de texto (Input)

Objetivo:

Diseñar e implementar componentes que sean:

##### `accesibles` (teclado, lector de pantalla, estados ARIA)
`escalables` (tokens / variables)
`coherentes` (estados, transiciones, tamaños)
`fáciles de integrar` (HTML/CSS + pequeña lógica JS)

Conceptos y decisiones:

1. Button: principios y variantes
Rol: acción primaria/secundaria/ghost.

##### Hit area mínima 44×44px para touch.

`Tokens`: color primario, on-primary, radius, elevation, transition.

`Estados`:

default, hover, focus, active, disabled, loading.
Cambiar solo 1–2 propiedades por estado (luminosidad y elevación)

`Accesibilidad`:

button nativo (mejor para teclado/lectores).
aria-pressed para botones toggle.
aria-disabled o disabled para inhabilitado.
aria-busy o data-loading para loading (y ocultar texto visible si necesitas).

`Anatomía`:

icono opcional + label
padding consistente
min-width opcional para evitar text wrapping
Tamaños: small / medium / large — afectan padding y min-height.

`Reglas visuales`:

Usar HSL para manipular luminosidad (hover = L - 6%, active = L - 10%).
Hover = elevación ligera (translateY -2px), active = volver a plano


2. Input: principios y variantes
Rol: capturar texto/correo/contraseña con estado claro.

Decisiones:

Tamaño de control: altura accesible (~44px).
Label: visible (no placeholder como sustituto de label).

`Estados`:

default, focus, error, disabled, success, readonly.
Focus: claro anillo (:focus-visible) con contraste (no usar blanco puro).
Error: borde + icono + aria-invalid="true" + mensaje role="alert".

`Accesibilidad`:

label asociado con for / id.
aria-describedby apuntando a help/error.
control required + aria-required si aplica

`Validación`:

Validación mínima en cliente (p.ej. patrón email) + mensajes claros.
No ocultar el error con color solamente; usar icono/texto

`Decoración`:

sombra sutil on focus (increase elevation) + pequeño lift.
placeholder con baja saturación (muted).

`Modelado`:

border-radius coherente con buttons
spacing interno suficiente (padding)


Component API:
clases / atributos a usar

`Button`:

.btn base
Variantes: .btn--primary, .btn--secondary, .btn--ghost
Tamaños: .btn--sm, .btn--md, .btn--lg
Estados: disabled (atributo), data-loading="true" (atributo), aria-pressed="true" para toggles

`Input`:

.input base (aplicar a <input> o <textarea>)
Contenedor .field con <label> + .help + .error
Estados: add class .is-error, .is-success, .is-disabled al contenedor para estilos compuestos
Atributos ARIA: aria-invalid, aria-describedby


Buenas prácticas:

Diseña en grises primero (luminosidad), luego aplica hue.
Usa HSL para controlar luz (hover/active) sin romper hue.
Nombra variables por función (tokens semánticos).
No dependas del color para comunicar estado (añade icono/texto).
Mantén transiciones cortas y consistentes.


### Código

```
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Componentes: Button & Input — Demo</title>
  <style>
    /* ---------------------------
       TOKENS (semánticos) - usar HSL para controlar luminosidad
       ---------------------------*/
    :root{
      --space-2: 8px;
      --space-3: 12px;
      --space-4: 16px;
      --radius-md: 10px;
      --radius-sm: 6px;
      --min-hit: 44px;

      /* neutrals (simple) */
      --neutral-0: hsl(220 12% 98%);
      --neutral-100: hsl(220 12% 95%);
      --neutral-300: hsl(220 10% 88%);
      --neutral-500: hsl(220 12% 48%);
      --neutral-800: hsl(220 16% 12%);

      /* primary */
      --primary-h: 220;
      --primary-s: 78%;
      --primary-l: 50%;
      --color-primary: hsl(var(--primary-h) var(--primary-s) var(--primary-l));
      --color-primary-hover: hsl(var(--primary-h) calc(var(--primary-s) - 6%) calc(var(--primary-l) - 6%));
      --color-primary-active: hsl(var(--primary-h) calc(var(--primary-s) - 10%) calc(var(--primary-l) - 10%));
      --on-primary: hsl(0 0% 100%);

      /* semantic */
      --color-surface: var(--neutral-100);
      --color-border: var(--neutral-300);
      --color-text: var(--neutral-800);
      --focus-ring: 3px;
      --transition: 180ms;
      --elev-subtle: 0 6px 18px rgba(2,6,23,0.06);
    }

    /* Basic reset */
    *{box-sizing:border-box}
    body{
      font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
      margin:24px;
      color:var(--color-text);
      background:var(--neutral-0);
      line-height:1.4;
    }

    .wrap{max-width:760px;margin:0 auto;display:grid;gap:24px}

    h2{margin:0 0 8px 0;font-size:1.1rem}
    p.lead{margin:0 0 16px 0;color:hsl(220 10% 44%)}

    /* ---------------------------
       BUTTON component
       ---------------------------*/
    .btn{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:8px;
      min-height: var(--min-hit);
      padding: 10px 16px;
      border-radius: var(--radius-md);
      border: none;
      cursor: pointer;
      font-weight:600;
      font-size: .95rem;
      transition: transform var(--transition), box-shadow var(--transition), background var(--transition);
      user-select:none;
      -webkit-tap-highlight-color: transparent;
    }

    .btn:disabled{opacity:.6; cursor:not-allowed; transform:none}

    /* Primary */
    .btn--primary{
      background: var(--color-primary);
      color: var(--on-primary);
      box-shadow: var(--elev-subtle);
      min-width: 120px;
    }
    .btn--primary:hover { background: var(--color-primary-hover); transform: translateY(-2px); box-shadow: 0 12px 30px rgba(2,6,23,0.08); }
    .btn--primary:active{ background: var(--color-primary-active); transform: translateY(0); }

    /* Secondary (ghost / outline) */
    .btn--secondary{
      background: transparent;
      color: var(--color-text);
      border: 1px solid var(--color-border);
      min-width: 110px;
    }
    .btn--secondary:hover{ background: var(--color-surface); transform: translateY(-1px) }

    /* Sizes */
    .btn--sm{ min-height: 36px; padding: 6px 10px; font-size: .85rem }
    .btn--lg{ min-height: 52px; padding: 14px 20px; font-size: 1rem }

    /* Loading state: use attribute data-loading="true" */
    .btn[data-loading="true"]{
      pointer-events: none;
      opacity: .95;
    }
    .btn .spinner{
      width:16px;height:16px;border-radius:50%;
      border:2px solid rgba(255,255,255,0.2);
      border-top-color: rgba(255,255,255,0.9);
      animation:spin 900ms linear infinite;
      display:inline-block;
    }
    @keyframes spin{ to { transform: rotate(360deg) } }

    /* focus-visible */
    :focus-visible { outline: none; box-shadow: 0 0 0 var(--focus-ring) rgba(66,133,244,0.18); border-radius: calc(var(--radius-md) + 2px) }

    /* ---------------------------
       INPUT component
       ---------------------------*/
    .field{ display:flex; flex-direction:column; gap:8px }
    .label{ font-size: .9rem; color: hsl(220 14% 24%) }

    .input{
      display:block;
      width:100%;
      padding:12px 14px;
      border-radius: var(--radius-sm);
      border:1px solid var(--color-border);
      background: var(--color-surface);
      font-size: .95rem;
      color: var(--color-text);
      transition: box-shadow var(--transition), border-color var(--transition), transform var(--transition);
      min-height: var(--min-hit);
    }
    .input::placeholder{ color: hsl(220 10% 52%); }

    /* focus */
    .input:focus{
      outline:none;
      border-color: var(--color-primary);
      box-shadow: 0 6px 24px rgba(34,88,235,0.06);
      transform: translateY(-1px);
    }

    /* error state (applied on container as class .is-error) */
    .field.is-error .input{
      border-color: hsl(355 70% 45%);
    }
    .field .error{
      color: hsl(355 70% 45%);
      font-size: .88rem;
      display:flex;
      gap:8px;
      align-items:center;
    }

    /* success state */
    .field.is-success .input{ border-color: hsl(140 58% 30%) }

    /* disabled */
    .input:disabled{ opacity:.65; background: hsl(220 12% 96%); cursor:not-allowed }

    /* small helpers */
    .help{ font-size:.88rem; color:hsl(220 12% 44%) }

    /* layout utilities */
    .row{ display:flex; gap:12px; align-items:center }
    .controls{ display:flex; gap:12px; flex-wrap:wrap; margin-top:8px }
    .demo-box{ padding:16px; border-radius:12px; background:white; box-shadow: 0 6px 30px rgba(2,6,23,0.04) }
  </style>
</head>
<body>
  <div class="wrap">
    <section>
      <h2>Componentes básicos: Button & Input</h2>
      <p class="lead">Implementación accesible y con estados. Abajo tienes ejemplos y luego un demo interactivo.</p>
    </section>

    <!-- Buttons demo -->
    <section class="demo-box" aria-labelledby="buttonsTitle">
      <h3 id="buttonsTitle">Botones</h3>
      <div style="display:flex;gap:12px;align-items:center;margin:12px 0 8px 0;">
        <button class="btn btn--primary" id="primaryBtn">Primario</button>
        <button class="btn btn--secondary" id="secondaryBtn">Secundario</button>
        <button class="btn btn--primary btn--sm" id="smallBtn">Small</button>
        <button class="btn btn--primary btn--lg" id="largeBtn">Large</button>
      </div>

      <div class="controls">
        <button class="btn btn--secondary" id="toggleLoading">Simular loading</button>
        <button class="btn btn--secondary" id="toggleDisable">Toggle disabled</button>
      </div>
    </section>

    <!-- Input demo -->
    <section class="demo-box" aria-labelledby="inputTitle">
      <h3 id="inputTitle">Campo de texto (Input)</h3>

      <form id="demoForm" novalidate>
        <div class="field" id="fieldName">
          <label class="label" for="nameInput">Nombre</label>
          <input id="nameInput" class="input" type="text" placeholder="Tu nombre completo" autocomplete="name" required aria-required="true" />
          <div class="help" id="nameHelp">Usa tu nombre real</div>
        </div>

        <div class="field" id="fieldEmail" style="margin-top:12px">
          <label class="label" for="emailInput">Correo</label>
          <input id="emailInput" class="input" type="email" placeholder="tú@ejemplo.com" autocomplete="email" required aria-required="true" aria-describedby="emailHelp" />
          <div class="help" id="emailHelp">Recibiras un correo de confirmación</div>
          <div class="error" id="emailError" role="alert" aria-live="assertive" style="display:none"></div>
        </div>

        <div style="margin-top:14px">
          <button class="btn btn--primary" id="submitDemo">Enviar</button>
          <button class="btn btn--secondary" type="button" id="fillDemo">Auto-completar</button>
        </div>
      </form>
    </section>

    <section>
      <p style="font-size:.9rem;color:hsl(220 10% 48%)">¿Quieres la versión React de estos componentes o un JSON de tokens? Dime y lo hago.</p>
    </section>
  </div>

  <script>
    /* Minimal JS para demo: manejo loading/disabled y validaciones accesibles */
    (function(){
      const primaryBtn = document.getElementById('primaryBtn');
      const smallBtn = document.getElementById('smallBtn');
      const largeBtn = document.getElementById('largeBtn');
      const secondaryBtn = document.getElementById('secondaryBtn');

      const toggleLoading = document.getElementById('toggleLoading');
      const toggleDisable = document.getElementById('toggleDisable');

      // helper to set loading on a button
      function setLoading(btn, isLoading){
        if(isLoading){
          btn.setAttribute('data-loading','true');
          btn.setAttribute('aria-busy','true');
          btn.disabled = true;
          // replace innerText with spinner + label visually (we keep label for screen readers)
          btn.dataset.label = btn.textContent;
          btn.innerHTML = '<span class="spinner" aria-hidden="true"></span> Cargando';
        } else {
          btn.removeAttribute('data-loading');
          btn.removeAttribute('aria-busy');
          btn.disabled = false;
          if(btn.dataset.label) btn.textContent = btn.dataset.label;
        }
      }

      // toggles simulate
      let loading = false;
      toggleLoading.addEventListener('click', ()=>{
        loading = !loading;
        setLoading(primaryBtn, loading);
        setLoading(smallBtn, loading);
        setLoading(largeBtn, loading);
      });

      let disabled = false;
      toggleDisable.addEventListener('click', ()=>{
        disabled = !disabled;
        primaryBtn.disabled = disabled;
        smallBtn.disabled = disabled;
        largeBtn.disabled = disabled;
        secondaryBtn.disabled = disabled;
        // visually reflect via aria
        primaryBtn.setAttribute('aria-disabled', disabled ? 'true' : 'false');
      });

      // FORM validation (minimal)
      const demoForm = document.getElementById('demoForm');
      const emailInput = document.getElementById('emailInput');
      const emailError = document.getElementById('emailError');
      const fieldEmail = document.getElementById('fieldEmail');
      const fillDemo = document.getElementById('fillDemo');

      fillDemo.addEventListener('click', ()=>{
        document.getElementById('nameInput').value = 'Demo Usuario';
        emailInput.value = 'demo@example.com';
        emailInput.focus();
      });

      demoForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        // clear previous
        emailError.style.display = 'none';
        fieldEmail.classList.remove('is-error');
        emailInput.removeAttribute('aria-invalid');

        const emailVal = emailInput.value.trim();
        const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
        if(!emailOK){
          fieldEmail.classList.add('is-error');
          emailInput.setAttribute('aria-invalid','true');
          emailError.style.display = 'flex';
          emailError.textContent = '✖ Formato de correo inválido.';
          emailInput.focus();
          return;
        }

        // simulate submit + loading on primary button
        setLoading(primaryBtn, true);
        setTimeout(()=> {
          setLoading(primaryBtn, false);
          alert('Formulario enviado (simulado) — ¡gracias!');
          demoForm.reset();
        }, 900);
      });

      // keyboard fallback: allow Enter on any input to submit (default behaviour)
      // accessible focus management is handled natively by browser for buttons/inputs
    })();
  </script>
</body>
</html>
```

Features:

Botón con variantes (primary / secondary), tamaños, estados loading y disabled.
Input con label, placeholder, focus, error (con aria-invalid y role="alert").
Uso de tokens HSL para controlar luminosidad (hover/active hacen L-6% / L-10%).
Reglas de accesibilidad básicas: focus-visible, aria-busy, aria-invalid, role="alert".
Pequeña lógica JS para demostración de loading / validación




## Tokens y JSON

Sistema programable

JSON es:
neutral (no depende de tecnología)
legible por humanos
legible por máquinas
convertible a cualquier plataforma

##### Modelo JSON: Diseño → Datos → Código → UI


### Tipos de Tokens

1. Primitive tokens (fundación)

Valores puros.

```json
{
  "color": {
    "blue-500": "#3b82f6",
    "gray-100": "#f3f4f6"
  }
}
```

Paleta base.

2. Semantic tokens (significado)
Asignan propósito.

```json

{
  "color": {
    "primary": "{color.blue-500}",
    "background": "{color.gray-100}"
  }
}
```

El color tiene intención.

3. Component tokens
Específicos del componente

```json
{
  "button": {
    "background": "{color.primary}",
    "radius": "{radius.md}"
  }
}
```

Jerarquía completa

```
Primitive
   ↓
Semantic
   ↓
Component
   ↓
UI final
```

Así lo trabajan sistemas como:

Google (Material Design)
IBM (Carbon Design System)
Shopify (Polaris)


Ej: Tokens.json

```
{
  "color": {
    "blue-500": "#3b82f6",
    "gray-900": "#111827",
    "white": "#ffffff"
  },

  "semantic": {
    "primary": "{color.blue-500}",
    "text": "{color.gray-900}",
    "surface": "{color.white}"
  },

  "button": {
    "primary": {
      "background": "{semantic.primary}",
      "text": "{semantic.surface}"
    }
  }
}
```

Permite:

Cambio global instantáneo

Dark mode automático:

```
{
  "semantic": {
    "surface": {
      "light": "{color.white}",
      "dark": "{color.gray-900}"
    }
  }
}
```

Multi-plataforma:

Mismo JSON → genera:

CSS variables
Tailwind config
React theme
iOS Swift
Android XML


Tokens ≠ Variables CSS

| Tokens             | CSS Variables   |
| ------------------ | --------------- |
| Concepto de diseño | Implementación  |
| Tecnología neutral | Web only        |
| Fuente de verdad   | Resultado final |


Flujo pro:

```
Figma
   ↓
Design Tokens (JSON)
   ↓
Build tool
   ↓
CSS / JS / Native
   ↓
Componentes
```


## Tokens pro

```
tokens/
│
├─ core/
│   ├─ colors.json
│   ├─ spacing.json
│   ├─ radius.json
│   └─ typography.json
│
├─ semantic/
│   ├─ colors.json
│   └─ elevation.json
│
├─ components/
│   ├─ button.json
│   ├─ input.json
│   └─ card.json
│
└─ themes/
    ├─ light.json
    └─ dark.json
```


core/colors.json:

```
{
  "color": {
    "blue": {
      "500": "#3b82f6"
    },
    "gray": {
      "100": "#f3f4f6",
      "900": "#111827"
    }
  }
}
```

semantic/colors.json:

```
{
  "color": {
    "background": "{color.gray.100}",
    "text": "{color.gray.900}",
    "primary": "{color.blue.500}"
  }
}
```

components/button.json:

```
{
  "button": {
    "primary": {
      "background": "{color.primary}",
      "text": "{color.background}",
      "radius": "8px"
    }
  }
}
```

themes/dark.json

```
{
  "semantic": {
    "color": {
      "background": "{color.gray.900}",
      "text": "{color.gray.100}"
    }
  }
}
```

Flujo real

```
Figma
  ↓
Design Tokens
  ↓
JSON repository
  ↓
Build tool
  ↓
CSS variables / JS / Native
  ↓
Component library
```


Herramientas comunes:

Figma
Style Dictionary


El sistema genera:

```
:root {
  --color-background: #f3f4f6;
  --color-text: #111827;
  --color-primary: #3b82f6;
}
```

```
[data-theme="dark"] {
  --color-background: #111827;
  --color-text: #f3f4f6;
}
```

### Principios

1. Separación de Responsabilidades

```
Core = valores
Semantic = significado
Component = uso
Theme = variación
```

2. No romper dependencias
Un componente nunca usa primitives directamente

```
Component → Semantic → Core
```

3. Tokens son API
El design system se convierte en una API visual.


Sistemas modernos agregan:

`state tokens`:

```
color.action.hover
color.action.active
```

`mode tokens`:

```
color.background.light
color.background.dark
```

`density tokens`:

```
spacing.compact
spacing.comfortable
```

Core
 ↓
Semantic
 ↓
Component
 ↓
Theme


Tokens: lenguaje compartido entre diseño y código.



## 1. Anatomía de un elemento UI

Qué compone visualmente cualquier componente:

`Contenedor vs contenido`
`Bounding box`
`Padding / margin`
`Área interactiva (hit area)`
`Layout interno`
`Jerarquía visual`

Modelo mental:

Elemento UI:

```
estructura + superficie + interacción + estado
```

Ejercicio:

Desarmar visualmente:

Button
Card
Input
Navbar

Identificar capas visuales.



## 2. Forma y geometría visual

Modelar elementos mediante geometría consistente.

Conceptos:

`Rectángulo como unidad base`
`Radio de borde (border-radius)`
`Consistencia geométrica`
`Grid invisible`
`Proporciones (4pt / 8pt system)`

Principio:

La UI moderna es geometría suavizada
Menos formas → más coherencia cognitiva

Ejercicio:

Crear versiones del mismo botón con:
radio 0
radio 4
radio 8
radio 999 (pill)

Analizar percepción.



# Diseño de elementos


# Tokens

Valor visual nombrado semánticamente y almacenado como dato.
describes qué representa, No describes cómo se vePuede representar:

```
color
spacing
tipografía
sombras
bordes
animaciones
tamaños
opacidad

```

Lista tokens minimos:

```
color
typography
spacing
radius
border
shadow
motion
z-index
breakpoints
component states
```

## Lista de tokens para Base

1. Color
Sirven para paleta, estados y superficies.

--color-bg
--color-surface
--color-surface-elevated
--color-surface-inset
--color-text
--color-text-muted
--color-text-subtle
--color-border
--color-border-strong
--color-primary
--color-primary-hover
--color-primary-active
--color-secondary
--color-accent
--color-success
--color-warning
--color-error
--color-info
--color-on-primary
--color-on-surface
--color-overlay
--color-backdrop

También suele existir la paleta cruda:

--neutral-0 … --neutral-950
--primary-50 … --primary-900
--success-50 … --success-900
--warning-50 … --warning-900
--error-50 … --error-900


2. Tipografía
Definen el sistema de texto

--font-family-base
--font-family-heading
--font-family-mono

Tamaños:

--font-size-xs
--font-size-sm
--font-size-md
--font-size-lg
--font-size-xl
--font-size-2xl
--font-size-3xl
--font-size-4xl

Pesos:

--font-weight-regular
--font-weight-medium
--font-weight-semibold
--font-weight-bold

Interlineado:

--line-height-tight
--line-height-normal
--line-height-relaxed

Tracking:

--letter-spacing-tight
--letter-spacing-normal
--letter-spacing-wide

3. Espaciado:
La base de layout y composición.

--space-0
--space-1
--space-2
--space-3
--space-4
--space-5
--space-6
--space-7
--space-8
--space-10
--space-12
--space-16
--space-20
--space-24

Muchas UIs usan una escala de 4 u 8 px.

4. Tamaños
Para controles y componentes.

--size-xs
--size-sm
--size-md
--size-lg
--size-xl

Tamaños específicos:

--control-height-sm
--control-height-md
--control-height-lg
--icon-size-sm
--icon-size-md
--icon-size-lg

5. Radios / bordes redondeados
Forma de los elementos.

--radius-none
--radius-sm
--radius-md
--radius-lg
--radius-xl
--radius-full

6. Bordes
Para contornos y separación.

--border-width-hairline
--border-width-sm
--border-width-md
--border-style-solid
--border-style-dashed

también:

--border-color
--border-color-strong

7. Sombras / elevación
Para profundidad visual.

--shadow-xs
--shadow-sm
--shadow-md
--shadow-lg
--shadow-xl
--shadow-inner
--shadow-none

Y semánticas de elevación:

--elevation-1
--elevation-2
--elevation-3
--elevation-4

8. Opacidad
Para estados y capas.

--opacity-0
--opacity-25
--opacity-50
--opacity-75
--opacity-100

También útiles:

--opacity-disabled
--opacity-muted

9. Z-index
Para capas de interfaz.

--z-base
--z-dropdown
--z-sticky
--z-fixed
--z-overlay
--z-modal
--z-popover
--z-toast
--z-tooltip

10. Motion / animación
Para interacción visual.

--duration-fast
--duration-normal
--duration-slow

Curvas:

--ease-linear
--ease-in
--ease-out
--ease-in-out

Transformaciones comunes:

--motion-distance-sm
--motion-distance-md
--motion-distance-lg

11. Breakpoints / responsive

Para adaptar layout.

--breakpoint-xs
--breakpoint-sm
--breakpoint-md
--breakpoint-lg
--breakpoint-xl
--breakpoint-2xl

12. Layout / contenedores
Estructura de página.

--container-xs
--container-sm
--container-md
--container-lg
--container-xl
--container-2xl

Grid:

--grid-columns
--grid-gap
--layout-gutter
--layout-margin

13. Form controls
Especialmente útiles para inputs, selects y botones.

--control-padding-x
--control-padding-y
--control-radius
--control-border-color
--control-bg
--control-text
--control-placeholder
--control-focus-ring
--control-focus-ring-width
--control-disabled-opacity

14. Estados semánticos
Para feedback de UI.

--state-hover
--state-active
--state-focus
--state-selected
--state-disabled
--state-loading
--state-error
--state-success
--state-warning
--state-info

15. Accesibilidad
Tokens que ayudan a mantener consistencia accesible.

--focus-ring-color
--focus-ring-width
--focus-ring-offset
--contrast-min-text
--contrast-min-ui

Algunos equipos también definen:

--screen-reader-only para utilidades visuales ocultas
--reduced-motion-duration

Estructura:

```
core/
  color
  spacing
  typography
  radius
  shadow
  motion
  z-index
  breakpoints

semantic/
  bg
  surface
  text
  border
  primary
  success
  warning
  error
  info

component/
  button
  input
  card
  modal
  nav
```

Regla práctica

Si el token responde a “de qué está hecho”, suele ser core.
Si responde a “para qué se usa”, suele ser semantic.
Si responde a “para qué componente”, es component


## Lista de tokens para Componentes

corresponde a la capa: Component Tokens
modelan los elementos visibles

los tokens de elementos dicen:

cómo se comporta un botón
cómo se ve un input
cómo funciona una card

Son la API visual de los componentes.

Estructura:

```
[element]
   ├─ layout
   ├─ color
   ├─ typography
   ├─ border
   ├─ state
   ├─ interaction
   └─ motion
```

### Patrón de naming

`[element]-[part]-[state]`

ej:

```
button-bg-hover
input-border-focus
card-shadow-hover
nav-item-active-color
```

### Composición de un elemento UI

```
Layout
+ Surface
+ Typography
+ Shape
+ States
+ Interaction
+ Motion
```



1. Button Tokens

Layout
--button-height
--button-padding-x
--button-padding-y
--button-gap
--button-min-width

Color
--button-bg
--button-text
--button-border
--button-icon

Border & Shape
--button-radius
--button-border-width

Typography
--button-font-size
--button-font-weight
--button-letter-spacing

States
--button-bg-hover
--button-bg-active
--button-bg-disabled
--button-text-disabled

Focus
--button-focus-ring-color
--button-focus-ring-width

Motion
--button-transition-duration
--button-transition-easing

2. Input / Text Field Tokens

Layout
--input-height
--input-padding-x
--input-padding-y

Colors
--input-bg
--input-text
--input-placeholder
--input-border

States
--input-border-focus
--input-border-error
--input-border-success
--input-bg-disabled

Typography
--input-font-size
--input-line-height

Decoration
--input-radius
--input-shadow-focus

3. Card Tokens

Surface
--card-bg
--card-border-color
--card-shadow

Layout
--card-padding
--card-gap

Shape
--card-radius

Interaction
--card-hover-shadow
--card-hover-translate

4. Modal / Dialog Tokens

Layout
--modal-width
--modal-padding
--modal-gap

Surface
--modal-bg
--modal-border
--modal-shadow

Overlay
--modal-backdrop-color
--modal-backdrop-opacity

Motion
--modal-enter-duration
--modal-exit-duration

5. Navigation Tokens

Navbar
--nav-height
--nav-bg
--nav-border
--nav-item-gap

Nav Item
--nav-item-padding
--nav-item-color
--nav-item-hover-bg
--nav-item-active-color

6. Dropdown / Menu Tokens
--menu-bg
--menu-border
--menu-shadow
--menu-radius
--menu-item-padding
--menu-item-hover-bg
--menu-item-active-bg

7. Badge / Tag Tokens
--badge-height
--badge-padding-x
--badge-bg
--badge-text
--badge-radius
--badge-font-size

8. Tooltip Tokens
--tooltip-bg
--tooltip-text
--tooltip-padding
--tooltip-radius
--tooltip-shadow
--tooltip-arrow-size

9. Checkbox / Radio Tokens

--control-size
--control-border
--control-bg
--control-checked-bg
--control-check-color
--control-focus-ring

10. Table Tokens

--table-row-height
--table-header-bg
--table-border
--table-row-hover-bg
--table-cell-padding

11. List / Item Tokens

--list-item-padding
--list-item-gap
--list-item-hover-bg
--list-item-selected-bg

12. Avatar Tokens

--avatar-size-sm
--avatar-size-md
--avatar-size-lg
--avatar-radius
--avatar-border

13. Tabs Tokens

--tabs-height
--tab-padding
--tab-color
--tab-active-color
--tab-indicator-color
--tab-indicator-height

14. Progress / Loader Tokens

--progress-height
--progress-bg
--progress-fill
--spinner-size
--spinner-duration

15. Alert / Notification Tokens

--alert-padding
--alert-radius
--alert-bg
--alert-text
--alert-icon-color

por variante:

--alert-success-bg
--alert-warning-bg
--alert-error-bg
--alert-info-bg



## Ej tokens en css


1. 

#### Tokens base

```
    :root{
      /* Spacing scale */
      --space-1: 4px;
      --space-2: 8px;
      --space-3: 12px;
      --space-4: 16px;
      --space-5: 24px;
      --space-6: 32px;
      --space-7: 48px;

      /* Radii */
      --radius-sm: 6px;
      --radius-md: 12px;
      --radius-lg: 18px;

      /* Elevation (subtle, default, raised) */
      --elev-subtle: 0 1px 2px rgba(2,6,23,0.04);
      --elev-default: 0 6px 18px rgba(2,6,23,0.08);
      --elev-raised: 0 18px 40px rgba(2,6,23,0.12);

      /* Neutral scale (slightly bluish neutral) */
      --neutral-0:  hsl(220, 12%, 98%); /* background */
      --neutral-100:hsl(220, 12%, 96%);
      --neutral-200:hsl(220, 11%, 92%);
      --neutral-300:hsl(220, 10%, 88%);
      --neutral-400:hsl(220, 10%, 78%);
      --neutral-500:hsl(220, 10%, 66%);
      --neutral-600:hsl(220, 12%, 48%);
      --neutral-700:hsl(220, 12%, 34%);
      --neutral-800:hsl(220, 14%, 22%);
      --neutral-900:hsl(220, 16%, 12%);

      /* Primary scale (hue 220 = blue tech) */
      --primary-50:  hsl(220, 85%, 96%);
      --primary-100: hsl(220, 80%, 88%);
      --primary-200: hsl(220, 78%, 76%);
      --primary-300: hsl(220, 78%, 64%);
      --primary-400: hsl(220, 78%, 56%);
      --primary-500: hsl(220, 78%, 50%); /* base */
      --primary-600: hsl(220, 72%, 44%);
      --primary-700: hsl(220, 68%, 36%);
      --primary-800: hsl(220, 64%, 28%);
      --primary-900: hsl(220, 60%, 20%);

      /* Semantic tokens (map to scales) */
      --color-bg: var(--neutral-0);
      --color-surface: var(--neutral-100);
      --color-card: var(--neutral-200);
      --color-border: var(--neutral-300);
      --color-text: var(--neutral-900);
      --color-text-muted: var(--neutral-700);

      --color-primary: var(--primary-500);
      --color-primary-hover: var(--primary-600);
      --color-primary-active: var(--primary-700);
      --color-on-primary: hsl(0, 0%, 100%);

      --color-success: hsl(140, 60%, 30%);
      --color-error: hsl(355, 70%, 45%);

      /* Accessibility helpers */
      --focus-ring: 3px;
      --transition-fast: 180ms;
      --transition-medium: 280ms;
    }

    /* Dark theme (swap only values — do not change components) */
    :root[data-theme="dark"]{
      --color-bg: hsl(220, 12%, 6%);
      --color-surface: hsl(220, 12%, 10%);
      --color-card: hsl(220, 12%, 14%);
      --color-border: hsl(220, 14%, 24%);
      --color-text: hsl(220, 16%, 92%); /* avoid pure white */
      --color-text-muted: hsl(220, 12%, 70%);

      /* primary in dark: reduce saturation slightly, increase lightness for balance */
      --primary-500: hsl(220, 70%, 60%);
      --primary-600: hsl(220, 60%, 52%);
      --primary-700: hsl(220, 56%, 44%);

      --color-primary: var(--primary-500);
      --color-primary-hover: var(--primary-600);
      --color-primary-active: var(--primary-700);
      --color-on-primary: hsl(0,0%,10%); /* dark text over bright primary in dark mode */
    }
```

#### Tokens elementos ui

```
 *{box-sizing: border-box}
    html,body{height:100%}
    body{
      margin:0;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      background: var(--color-bg);
      color: var(--color-text);
      line-height:1.35;
      -webkit-font-variant-ligatures: contextual;
      padding: calc(var(--space-5));
    }

    /* Layout container */
    .container{
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-6);
      align-items: start;
    }

/* Card / Form */
    .card{
      background: var(--color-card);
      padding: var(--space-5);
      border-radius: var(--radius-md);
      box-shadow: var(--elev-subtle);
      border: 1px solid var(--color-border);
    }

    .btn{
      display:inline-flex;
      align-items:center;
      gap: 10px;
      padding: 10px 16px;
      border-radius: var(--radius-md);
      border: none;
      cursor: pointer;
      font-weight: 600;
      min-height: 44px;
      transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);
    }
    .btn:disabled{opacity: .6; cursor: not-allowed; transform: none}

    .btn-primary{
      background: var(--color-primary);
      color: var(--color-on-primary);
      box-shadow: var(--elev-subtle);
    }
    .btn-primary:hover{ background: var(--color-primary-hover); transform: translateY(-2px); box-shadow: var(--elev-default); }
    .btn-primary:active{ background: var(--color-primary-active); transform: translateY(0); box-shadow: var(--elev-subtle); }
```


2. 

#### Tokens base


```
    :root{
      --space-2: 8px;
      --space-3: 12px;
      --space-4: 16px;
      --radius-md: 10px;
      --radius-sm: 6px;
      --min-hit: 44px;

      /* neutrals (simple) */
      --neutral-0: hsl(220 12% 98%);
      --neutral-100: hsl(220 12% 95%);
      --neutral-300: hsl(220 10% 88%);
      --neutral-500: hsl(220 12% 48%);
      --neutral-800: hsl(220 16% 12%);

      /* primary */
      --primary-h: 220;
      --primary-s: 78%;
      --primary-l: 50%;
      --color-primary: hsl(var(--primary-h) var(--primary-s) var(--primary-l));
      --color-primary-hover: hsl(var(--primary-h) calc(var(--primary-s) - 6%) calc(var(--primary-l) - 6%));
      --color-primary-active: hsl(var(--primary-h) calc(var(--primary-s) - 10%) calc(var(--primary-l) - 10%));
      --on-primary: hsl(0 0% 100%);

      /* semantic */
      --color-surface: var(--neutral-100);
      --color-border: var(--neutral-300);
      --color-text: var(--neutral-800);
      --focus-ring: 3px;
      --transition: 180ms;
      --elev-subtle: 0 6px 18px rgba(2,6,23,0.06);
    }
```


#### Tokens elementos ui

```
    /* ---------------------------
       INPUT component
       ---------------------------*/
    .field{ display:flex; flex-direction:column; gap:8px }
    .label{ font-size: .9rem; color: hsl(220 14% 24%) }

    .input{
      display:block;
      width:100%;
      padding:12px 14px;
      border-radius: var(--radius-sm);
      border:1px solid var(--color-border);
      background: var(--color-surface);
      font-size: .95rem;
      color: var(--color-text);
      transition: box-shadow var(--transition), border-color var(--transition), transform var(--transition);
      min-height: var(--min-hit);
    }
    .input::placeholder{ color: hsl(220 10% 52%); }

    /* focus */
    .input:focus{
      outline:none;
      border-color: var(--color-primary);
      box-shadow: 0 6px 24px rgba(34,88,235,0.06);
      transform: translateY(-1px);
    }

    /* error state (applied on container as class .is-error) */
    .field.is-error .input{
      border-color: hsl(355 70% 45%);
    }
    .field .error{
      color: hsl(355 70% 45%);
      font-size: .88rem;
      display:flex;
      gap:8px;
      align-items:center;
    }

    /* success state */
    .field.is-success .input{ border-color: hsl(140 58% 30%) }

    /* disabled */
    .input:disabled{ opacity:.65; background: hsl(220 12% 96%); cursor:not-allowed }

    /* small helpers */
    .help{ font-size:.88rem; color:hsl(220 12% 44%) }

    /* layout utilities */
    .row{ display:flex; gap:12px; align-items:center }
    .controls{ display:flex; gap:12px; flex-wrap:wrap; margin-top:8px }
    .demo-box{ padding:16px; border-radius:12px; background:white; box-shadow: 0 6px 30px rgba(2,6,23,0.04) }

```




# Tokens + JSON



# Grid

## Principios

1. Contenedor y los Elementos (Items)
empieza definiendo un contexto de grid

aplicar display: grid; a un elemento, este se convierte en el Grid Container
sus hijos directos pasan a ser Grid Items.

crear la cuadrícula, usas dos propiedades clave:
`grid-template-columns`: Define el ancho de las columnas.
`grid-template-rows`: Define el alto de las filas

2. Medida flexible: fr
introduce la unidad de fracción (fr).
Representa una fracción del espacio libre en el contenedor

`grid-template-columns: 1fr 2fr 1fr`:
creará tres columnas donde la del medio es el doble de ancha que las laterales
ajustándose automáticamente si cambias el tamaño de la ventana

3. Líneas, Celdas y Áreas

Posicionar elementos con precisión:

Grid Lines: Son las líneas divisorias (horizontales y verticales).
Se numeran empezando desde 1.

Grid Cell: El espacio entre dos líneas adyacentes de columnas y dos de filas
como una celda de Excel

Grid Area: Un espacio rectangular que puede abarcar varias celdas.

`grid-column: 1 / 3;`
para que un elemento ocupe desde la línea 1 hasta la 3 (
abarcando dos columnas

4. Gap
Espaciado. Con Grid, usas `gap` o `column-gap` y `row-gap`
para establecer una separación uniforme entre elementos
No afecta bordes exteriores del contenedor

5. Áreas

`grid-template-areas`
Permite dibujar tu layout con texto

```
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
}
```

Asignas a cada hijo su lugar con `grid-area: header;`.

6. Alineación total en dos ejes

`Justify`: Alineación en el eje horizontal (filas).
`Align`: Alineación en el eje vertical (columnas).

Propiedades: justify-items, align-items, justify-content, align-content.


## Orden

1. Grid Lines: Números de Línea
Como coordenadas
Si tienes 3 columnas, tienes 4 líneas
la 1 es el borde izquierdo y la 4 el derecho

`grid-column` / `grid-row`: Defines dónde empieza y termina un elemento.
grid-column: 1 / 3; (Empieza en la línea 1 y termina en la 3).
grid-column: 1 / span 2; (Empieza en la 1 y se expande 2 columnas).

negativos: El -1 siempre representa la última línea, lo cual es útil
para hacer que un elemento ocupe todo el ancho sin importar cuántas columnas haya
(grid-column: 1 / -1;).

2. Grid Template Areas: Áreas Nombradas

```
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav    main   side"
    "footer footer footer";
}

.item-header { grid-area: header; }
.item-nav    { grid-area: nav;    }
```

`Puntos (.)`: Si quieres dejar una celda vacía
usas un punto: `"header . side"`.

`Responsive Design`: en un Media Query solo cambias el mapa de grid-template-areas
los elementos se moverán solos a sus nuevas posiciones.

3. Grid Auto-Placement: Posicionamiento Automático
el navegador los coloca por orden de aparición en el HTML
Puedes controlar este comportamiento con `grid-auto-flow:`:

`row` (por defecto): llena las filas de izquierda a derecha.
`column`: llena las columnas de arriba a abajo.
`dense`: Si un elemento pequeño cabe en un hueco dejado por uno grande anterior, el navegador lo "sube" para rellenar el espacio vacío

4. Box Alignment: Alineación y Distribución
Una vez que el elemento está en su celda

puedes decidir cómo se comporta dentro de ella
o cómo se reparte el espacio sobrante

`justify-items`:
Alinea los elementos dentro de sus celdas
(Eje Horizontal).

`align-items`:
Alinea los elementos dentro de sus celdas
(Eje Vertical).

`justify-content`:
Alinea toda la cuadrícula respecto al contenedor
(Horizontal).

`align-content`:
Alinea toda la cuadrícula respecto al contenedor
(Vertical).

`place-items: center`:
centrar algo perfectamente tanto horizontal como verticalmente en una sola línea

5. Orden Visual vs Orden del DOM

Propiedad `order`:
Por defecto todos tienen `order: 0`.
Si a un elemento le pones `order: -1`, saltará al principio visualmente

Esto cambia el orden visual
pero no el orden en que un lector de pantalla lee el contenido (accesibilidad).

## Grid Areas

1. Nombrar los elementos (grid-area)
A cada hijo directo del contenedor le asignas un nombre de área
No tiene que coincidir con su clase de CSS, pero ayuda que sea descriptivo

```
.header  { grid-area: cabecera; }
.sidebar { grid-area: lateral;  }
.main    { grid-area: contenido; }
.footer  { grid-area: pie;       }
```

2. mapa (grid-template-areas)
En el contenedor padre, usas la propiedad grid-template-areas
Cada fila se escribe entre comillas:

```
.container {
  display: grid;
  grid-template-columns: 200px 1fr; /* Una columna fija y otra flexible */
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "cabecera cabecera"
    "lateral  contenido"
    "pie      pie";
}
```


Reglas:
Para que el navegador entienda tu mapa

`Forma Rectangular`: Un área (por ejemplo, cabecera) debe formar siempre un rectángulo o un cuadrado
No puedes crear formas en "L" o en "T".

`Continuidad`: Las celdas con el mismo nombre deben estar adyacentes (pegadas).

`Celdas Vacías`: Si quieres dejar un hueco
"cabecera . lateral" para espacio vacío en el centro

`Mismo número de celdas`:
Cada fila (cada grupo de comillas)
debe tener exactamente el mismo número de columnas
definidas en grid-template-columns

3. Responsive
cambiar todo el diseño para móviles sin tocar el HTML
solo reordenando las palabras en el CSS

```
grid-template-areas:
  "header header"
  "nav    main"
  "footer footer";
```

Móvil (Media Query):
Solo apilas las palabras una debajo de otra para que todo ocupe el ancho completo.

```
@media (max-width: 600px) {
  .container {
    grid-template-areas:
      "header"
      "nav"
      "main"
      "footer";
  }
}
```


### Uso de grid

Cuando necesitas control bidimensional (filas y columnas al mismo tiempo
con estructura rígida pero adaptable

`Layouts principales de la página`:
Para la estructura macro (header, sidebar, contenido principal y footer).

`Galerías de imágenes tipo "Masonry" o irregulares`:
Cuando quieres que algunos elementos ocupen 2 columnas y otros 3 filas
manteniendo una alineación perfecta.

`Formularios complejos`:
Para alinear etiquetas (labels) e inputs en columnas perfectas
sin pelearte con márgenes o anchos fijos.

`Superposición de elementos`:
Grid permite colocar varios elementos en la misma celda de forma nativa
usando el mismo grid-area
facilita crear banners con texto encima sin abusar de position: absolute.

`Diseños "de revista"`:
donde el contenido debe fluir en una rejilla muy específica
que cambia drásticamente entre móvil y escritorio


### Uso de flex

control unidimensional: fila o columna
diseño fluye en una sola dirección

`Barras de navegación (Navbars)`:
alinear elementos en fila y repartir el espacio

`Centrado de un solo elemento`:
Si solo quieres centrar un botón dentro de un div
display: flex con center

`Componentes pequeños y fluidos`:
Botones con iconos, tarjetas simples de producto o listas de etiquetas (tags)
deben envolverse (flex-wrap) según su contenido.

`Cuando el tamaño del contenido manda`:
En Flexbox, el tamaño de los elementos suele empujar al contenedor
En Grid, el contenedor suele imponer el tamaño a los elementos
Si quieres que la caja se adapte al ancho del texto, usa Flexbox


### Uso de otros métodos

`Animaciones de alto rendimiento`:
Mover elementos dentro
usar `transform: translate()` con `position: absolute`

`Contenido puramente textual`:
Para que el texto fluya alrededor de una imagen (como en un libro)
la propiedad clásica `float` sigue siendo la herramienta correcta.


##### Regla general: controlar filas Y columnas usar grid, flujo en una dirección usar flex


### Grid en contenedor y elementos



# Flex

1. Eje Principal y Cruzado
concepto más importante.
Todo en Flexbox depende de la dirección que elijas

`Main Axis` (Eje Principal):
Por defecto es horizontal (de izquierda a derecha).
Se controla con `justify-content`.

`Cross Axis` (Cruzado):
Es el perpendicular al principal
Por defecto es vertical
Se controla con `align-items`.

Si cambias `flex-direction: column;`
ejes se intercambian: el principal ahora es vertical y el cruzado horizontal.

2. Flex Container vs. Flex Items
activas el contexto con `display: flex`; en el padre.
Los hijos directos se vuelven "flexibles".

`contenedor` decide cómo se `reparten` los hijos y cuánto espacio hay entre ellos.
`hijos` deciden cuánto pueden `crecer, encogerse o cuál es su tamaño base`.

3. Propiedades de hijos
controlar cómo se comporta un elemento dentro del flujo
suelen resumirse en el atajo `flex`

`flex-grow`:
Cuánto espacio extra puede tomar este elemento si sobra?
1 significa que ocupa lo que pueda

`flex-shrink`:
Cuánto puede encogerse si no hay espacio suficiente?

`flex-basis`:
tamaño ideal del elemento antes de crecer o encogerse

Usa siempre `flex: 1 0 auto`; (grow, shrink, basis) para mantener el código limpio

4. Alineación

`justify-content`:
Distribuye el espacio en el eje principal
center, space-between (extremos), space-around (espacio equilibrado).

`align-items`:
Alinea los elementos en el eje cruzado.
center, stretch (por defecto, llenan toda la altura), flex-end.

5. flex-wrap
Por defecto, Flexbox intenta meter todos los elementos en una sola línea, aunque se desborden

`flex-wrap: wrap`:
para permitir que los elementos que no caben salten a la siguiente línea
vital para galerías de tarjetas o botones en dispositivos móviles.

Usos:

Barras de navegación (menús).
Centrar un icono al lado de un texto.
Alinear verticalmente el contenido de una tarjeta.
Listas de etiquetas (tags) que deben fluir naturalmente


# Patrones de Grid



# Patrones de Flex



# Grid y flex

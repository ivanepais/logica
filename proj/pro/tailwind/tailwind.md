# Tailwind

Filosofía Utility-First
Clases fundamentales (colores, tipografía, espaciado, modelo de caja)
para estructurar componentes


# 1. Utility-First

En el CSS tradicional, creas clases semánticas (como .card o .btn)
y defines sus propiedades en un archivo separado

##### En Tailwind, diseñas directamente en tu HTML o JSX usando clases utilitarias que hacen una sola cosa

CSS Tradicional:
Semántico (.tarjeta-perfil)
Archivo .css externo
Tienes que inventar nombres de clases
El archivo CSS crece infinitamente

Tailwind CSS:
Utilitario (bg-white p-4 rounded)
Directo en las etiquetas HTML/JSX
Usas un sistema predecible y estandarizado
El CSS final es mínimo y optimizado


Al principio tu HTML parecerá saturado de clases
La ventaja es que no tienes que saltar entre pestañas para cambiar un margen
nunca rompes estilos en otras páginas por error


# 2. Configuración/Entorno

### Experimentar mediante su Play CDN:
Solo debes incluir este script en el <head> de tu archivo HTML:
`<script src="https://cdn.tailwindcss.com"></script>`

### Para entornos reales como Vite, Next.js o Remix
se usa la instalación vía PostCSS/Vite


# 3. Colores, Tipografía y Espaciado

Colores, Tipografía y Espaciado

1. Colores e Intensidad
##### Los colores usan un nombre y una escala numérica del 50 al 950
donde 50 es el más claro y 950 el más oscuro

`Fondo`: bg-blue-500, bg-slate-900, bg-neutral-100

`Texto`: text-red-600, text-emerald-400, text-white

2. Tipografía y Textos

`Tamaño`: text-xs (muy pequeño), text-sm, text-base (estándar), text-lg, text-xl, hasta text-9xl.

`Grosor (Weight)`: font-light, font-normal, font-semibold, font-bold.

`Alineación`: text-left, text-center, text-right.

3. El Sistema de Espaciado (Padding y Margin)

Tailwind (1, 2, 4, 8, etc.) equivalen a múltiplos de 0.25rem ($4px$ por cada unidad).
Por ejemplo, 4 significa $1rem$ ($16px$).

`Padding (Espacio interno)`:
Todos los lados: p-4 ($16px$)
Eje X (Izquierda/Derecha): px-6
Eje Y (Arriba/Abajo): py-2

`Margin (Espacio externo)`:
Mismas direcciones usando m-, mx-, my-, mt- (top), mb- (bottom).


# 4. Modelo de Caja y Bordes

Para dar forma y estructura a tus elementos:

`Dimensiones`: w-32 (ancho fijo), h-full (alto del 100%), w-screen ($100vw$).

`Bordes`: border (activa el borde), border-2 (grosor), border-gray-300 (color).

`Redondeado (Border Radius)`: rounded-md (suave), rounded-xl (pronunciado), rounded-full (píldora o círculo si el elemento es cuadrado).

`Sombras (Box Shadow)`: shadow-sm, shadow-md, shadow-2xl.


# 5. Introducción a Flexbox

En Tailwind, activar Flexbox es tan sencillo como escribir la palabra flex.

Clases esenciales de Flexbox:

`Dirección`: flex-row (horizontal, por defecto) o flex-col (vertical).

`Alineación del eje principal (Justify)`: justify-start, justify-center, justify-between (separa los extremos).

`Alineación del eje cruzado (Items)`: items-center (centrado vertical en filas), items-start.

`Separación automática`: gap-4 añade un espacio uniforme entre los hijos del contenedor flex
sin pelear con márgenes individuales.


# Ej y explicación del código

```
<div class="bg-slate-100 min-h-screen flex items-center justify-center p-6">
  
  <div class="bg-white w-80 p-6 rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center">
    
    <div class="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-md">
      JD
    </div>
    
    <h2 class="text-xl font-bold text-slate-800 mt-4">John Doe</h2>
    <p class="text-sm font-medium text-blue-600">Frontend Developer</p>
    
    <p class="text-sm text-slate-500 text-center mt-3 leading-relaxed">
      Apasionado por crear interfaces de usuario minimalistas, veloces y altamente accesibles.
    </p>
    
    <button class="mt-6 w-full bg-slate-900 text-white font-semibold py-2 px-4 rounded-xl shadow-sm hover:bg-slate-800 transition-colors">
      Seguir perfil
    </button>
    
  </div>

</div>
```


Contenedor padre:
usa min-h-screen, flex, items-center y justify-center
clavar la tarjeta exactamente en el centro de la pantalla

Tarjeta tiene un fondo blanco:
(bg-white), bordes muy redondeados (rounded-2xl)
una sombra profunda (shadow-xl) que le da un aspecto flotante

botón:
usa w-full para estirarse por completo
transition-colors junto con hover:bg-slate-800
pseudo-clases


# 6. Estados Interactivos (Pseudo-clases)

En CSS usas :hover o :focus
##### En Tailwind, aplicas estos estados añadiendo un prefijo antes de la clase utilitaria
La estructura es `estado:clase`.

más comunes:

`hover`:
Se activa al pasar el cursor. (Ej: hover:bg-blue-600)

`focus`:
Se activa cuando el elemento se selecciona (ideal para inputs de formulario).
(Ej: focus:ring-2 focus:ring-blue-500)

`active`:
Al hacer clic sostenido
(Ej: active:scale-95 para crear un efecto de botón presionado).

Rendimiento:
transiciones de estado (como cambiar de color en un hover)
añade las clases transition-all (o transition-colors)
duration-300 para que el cambio sea suave y no un parpadeo brusco


# 7. Diseño Responsivo (Mobile-First)

Tailwind utiliza un enfoque Mobile-First
las clases que pones por defecto se aplican a pantallas pequeñas (móviles)
luego usas modificadores para pantallas más grandes.

### Breakpoints Estándar

(Por defecto):
0px
Teléfonos móviles

sm:
640px
Teléfonos grandes / Tablets verticales

md:
768px
Tablets horizontales / Laptops pequeñas

lg:
1024px
Pantallas de escritorio estándar

xl:
1280px
Monitores grandes


### Ej breakpoint

#### Bloque ocupe todo el ancho en el móvil
##### pero solo la mitad en una laptop, lo escribes así:

```
<div class="w-full md:w-1/2"> ... </div>
```

##### Por defecto mide el 100% (w-full)
##### pero a partir de pantallas medianas (md:) en adelante, mide el 50% (w-1/2).


# 8. Grid Layout Básico

Alinear elementos en dos dimensiones dos dimensiones (filas y columnas al mismo tiempo)

`grid`: Activa el contexto de rejilla.
`grid-cols-{n}`: Define cuántas columnas tendrá la rejilla.
`gap-{n}`: espacio entre las celdas


Ej: catálogo de productos que cambie según la pantalla

```
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  </div>
```

En móvil se ve 1 sola columna
en tablets se divide en 2
en pantallas de escritorio se organiza en 4 columnas simétricas.


# 9. Valores Arbitrarios (La "Válvula de Escape")

Ej: cliente te exige un margen exacto de 13px
o un color corporativo específico que no está en la paleta de Tailwind

No necesitas volver a escribir CSS tradicional
##### Usas valores arbitrarios encerrados entre corchetes [...].

##### Ej: Color personalizado: bg-[#1da1f2] (Azul Twitter/X).
##### Ancho exacto: w-[312px].
##### Tamaño de texto loco: text-[11px].

Úsalos con moderación
Si abusas de los valores arbitrarios, perderás la consistencia visual que Tailwind ofrece


# Código Ej: Dashboard de Herramientas

Combinar Flexbox, Grid, Estados Interactivos y Responsividad

```
<div class="bg-slate-900 min-h-screen p-8 text-slate-100 font-sans">
  
  <header class="mb-8 border-b border-slate-800 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
    <div>
      <h1 class="text-2xl font-bold tracking-tight">Panel de Control</h1>
      <p class="text-sm text-slate-400">Bienvenido de vuelta, Desarrollador.</p>
    </div>
    <button class="bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all text-white px-4 py-2 rounded-lg font-medium shadow-md">
      + Nueva App
    </button>
  </header>

  <main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    
    <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-colors group cursor-pointer">
      <div class="w-10 h-10 bg-indigo-500/10 text-indigo-400 rounded-lg flex items-center justify-center font-bold mb-4">
        ⚡
      </div>
      <h3 class="text-lg font-semibold group-hover:text-indigo-400 transition-colors">Rendimiento API</h3>
      <p class="text-sm text-slate-400 mt-2">Monitoreo de latencia en tiempo real y optimización de consultas.</p>
    </div>

    <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 transition-colors group cursor-pointer">
      <div class="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center font-bold mb-4">
        📦
      </div>
      <h3 class="text-lg font-semibold group-hover:text-emerald-400 transition-colors">Contenedores</h3>
      <p class="text-sm text-slate-400 mt-2">Estado de microservicios desplegados e imágenes optimizadas.</p>
    </div>

    <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-amber-500 transition-colors group cursor-pointer md:col-span-2 lg:col-span-1">
      <div class="w-10 h-10 bg-amber-500/10 text-amber-400 rounded-lg flex items-center justify-center font-bold mb-4">
        🛡️
      </div>
      <h3 class="text-lg font-semibold group-hover:text-amber-400 transition-colors">Seguridad</h3>
      <p class="text-sm text-slate-400 mt-2">Auditorías automatizadas y control de dependencias vulnerables.</p>
    </div>

  </main>
</div>
``` 

Encabezado que en móvil se apila verticalmente (flex-col)
pantallas medianas se alinea en horizontal (sm:flex-row).

botón interactivo con transiciones de color y micro-interacción de clic (active:scale-95).

modificador group
Al pasar el mouse por encima de la tarjeta (group-hover)
título que está adentro cambia de color automáticamente de manera coordinada.



# Intermedio

Flujos de trabajo profesionales
Integrar Tailwind en proyectos reales, extender el sistema con tu propia identidad de marca
manipular componentes complejos con posicionamiento
dominar efectos visuales avanzados como gradientes y filtros de cristal


# 1. Entorno Desarrollo

#### Necesitas que Tailwind analice tu código y elimine todas las clases que no estás usando (Tree Shaking).
Esto reduce el tamaño de tu CSS a solo unos pocos Kilobytes.

Instalación estándar con Vite (React / Vue / Vanilla JS)

Crear el proyecto e instalar Tailwind:

```
npm create vite@latest mi-proyecto -- --template react
cd mi-proyecto
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configurar las rutas de escaneo (tailwind.config.js):

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Agregar las directivas a tu CSS principal (src/index.css):

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


# 2. Personalización del Tema (tailwind.config.js)


#### Debes configurar la paleta de tu marca, tipografías y reglas propias.
Para que tu proyecto no se vea como "una plantilla genérica de Tailwind"

`theme o theme.extend`:
Si pones colores directamente dentro de theme: { colors: { ... } }, sobrescribirás toda la paleta por defecto de Tailwind.
Si usas theme: { extend: { colors: { ... } } }, mantendrás la paleta por defecto y añadirás tus propios valores.

```
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#f0f4fe',
          DEFAULT: '#3b82f6',
          dark: '#1d4ed8',
        },
        accent: '#10b981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
}
```
 
Uso en HTML/JSX: bg-brand-dark, text-brand, font-mono, rounded-4xl.


# 3. Reutilización de Estilos y la Directiva @apply

#### A medida que crece tu proyecto, no querrás repetir 15 clases para cada botón. Tienes dos formas de resolverlo:

A. Componentes en Frameworks (Recomendada)

En React, Vue o Svelte, la abstracción debe vivirá en el propio componente:

```
// Button.jsx
export function Button({ children }) {
  return (
    <button className="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark transition-colors">
      {children}
    </button>
  );
}
```


B. directiva @apply en CSS

Si trabajas en HTML puro o necesitas clases CSS tradicionales, usa @apply dentro del bloque @layer components:

```
/* src/index.css */
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-brand text-white rounded-lg font-medium hover:bg-brand-dark transition-colors duration-200 shadow-sm;
  }
}
```

#### Advertencia de buenas prácticas: No abuses de @apply para todo
Si conviertes todo tu código Tailwind a clases CSS tradicionales
perderás la ventaja principal del framework
##### Resérvalo solo para elementos verdaderamente globales



# 4. Posicionamiento Avanzado y Capas

##### Crear elementos interactivos como modales, tooltips o barras flotantes, el posicionamiento CSS es clave

Estrategias de Posicionamiento:

`relative`: Define el marco de referencia.
`absolute`: Se posiciona respecto al padre relative más cercano.
`fixed`: Se fija respecto a la ventana del navegador (ideal para navbars o modales).
`sticky`: Permanece en el flujo del documento hasta alcanzar un umbral al hacer scroll.

`Atajos de Posición`: top-0, right-4, inset-0
(equivale a top: 0; right: 0; bottom: 0; left: 0;).

`Superposición`: z-10, z-20, z-50
(controla la profundidad con z-index).


# 5. Transiciones, Transformaciones y Efectos Modernos

Tailwind simplifica las animaciones compuestas
sin tener que escribir reglas @keyframes complejas a mano.

1. Transformaciones al interactuar

`Escala`: hover:scale-105 (agranda un 5%).
`Rotación`: hover:rotate-3 (gira 3 grados).
`Desplazamiento`: -translate-y-1 (sube ligeramente).

2. Gradientes de Fondo

Combinas la dirección (bg-gradient-to-r, to-br, etc.)
con los puntos de color (from-, via-, to-):

```
<div class="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white">
  Fondo con gradiente de 3 tonos
</div>
```

3. Glassmorphism

Usa opacidad en el fondo junto con backdrop-blur:

```
<div class="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6">
  Efecto de tarjeta translúcida
</div>
```
sintaxis bg-white/20 define un color con 20% de opacidad de forma directa)


## Ej código

Modal con Glassmorphism

Combina posicionamiento, capas, efectos de cristal y personalización en este componente de ventana modal interactiva

```
<!-- Fondo Oscurecido (Overlay) -->
<div class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
  
  <!-- Tarjeta Modal con Efecto Cristal -->
  <div class="relative bg-slate-900/80 border border-slate-700/50 rounded-2xl p-6 max-w-lg w-full shadow-2xl backdrop-blur-xl">
    
    <!-- Badge flotante (Posicionamiento Absoluto) -->
    <span class="absolute -top-3 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-full shadow-lg uppercase tracking-wider">
      Pro Feature
    </span>

    <!-- Encabezado -->
    <div class="flex items-center gap-4 mb-4">
      <div class="w-12 h-12 bg-indigo-500/20 border border-indigo-500/30 rounded-xl flex items-center justify-center text-indigo-400 text-xl font-bold">
        🚀
      </div>
      <div>
        <h3 class="text-xl font-bold text-white">Actualizar Plan</h3>
        <p class="text-sm text-slate-400">Desbloquea el máximo rendimiento</p>
      </div>
    </div>

    <!-- Contenido -->
    <p class="text-slate-300 text-sm leading-relaxed mb-6">
      Obtén acceso a servidores dedicados, soporte prioritario 24/7 y despliegues ilimitados mediante nuestra infraestructura global.
    </p>

    <!-- Botones de Acción -->
    <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
      <button class="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
        Cancelar
      </button>
      <button class="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl hover:from-indigo-600 hover:to-purple-700 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95 transition-all duration-200">
        Confirmar Cambio
      </button>
    </div>

  </div>
</div>
```



# Avanzado

Modo Oscuro, Plugins y Optimización


# 1. Modo Oscuro y Arquitectura de Temas Dinámicos

aplicaciones empresariales
modo oscuro no es opcional

##### Tailwind ofrece dos estrategias principales para gestionar el modo oscuro y temas personalizados


1. Estrategia por Clase (darkMode: 'class')

##### Permite controlar el tema manualmente guardando la preferencia del usuario en localStorage
##### o reactivamente desde JavaScript mediante la adición de la clase .dark en el nodo <html>.

```
// tailwind.config.js
export default {
  darkMode: 'class', // 'media' (por defecto, respeta el S.O.) o 'class'
  theme: { extend: {} },
}
```

```
<!-- En el HTML -->
<html class="dark">
  <body class="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
    <!-- El prefijo dark: sobreescribe el estilo por defecto cuando .dark está presente -->
  </body>
</html>
```


2. Temas dinámicos sin duplicar clases (Variables CSS)

Para evitar saturar el HTML con dark:bg-... dark:text-... en cada componente

##### integra Variables CSS en la configuración de Tailwind:

```
/* index.css */
:root {
  --bg-primary: #ffffff;
  --text-primary: #0f172a;
}

.dark {
  --bg-primary: #020617;
  --text-primary: #f8fafc;
}
```

```
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--bg-primary)',
          text: 'var(--text-primary)',
        }
      }
    }
  }
}
```

Uso: bg-theme-bg text-theme-text
El cambio de tema ocurre a nivel de CSS nativo de forma instantánea.


# 2. Variantes Complejas y Selección Arbitraria

##### El motor JIT (Just-In-Time) de Tailwind permite aplicar estilos a elementos secundarios o reaccionar a estados lejanos sin añadir clases extra al HTML hijo

1. La pseudo-clase peer (Relaciones entre hermanos)

Ideal para controlar elementos según el estado de un input o checkbox previo sin usar JavaScript:

```
<label class="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" class="peer hidden" />
  
  <!-- Indicador personalizado -->
  <div class="w-6 h-6 border-2 border-slate-400 rounded-md peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-all"></div>
  
  <!-- Texto que reacciona al checkbox -->
  <span class="text-slate-400 peer-checked:text-indigo-600 peer-checked:font-semibold">
    Acepto los términos
  </span>
</label>
```

2. Selectores e Hijos Arbitrarios ([&>...] y has-[])

`Afectar hijos directos`:
`[&>svg]:w-5 [&>p]:mt-2` aplica estilos a todos los SVG o párrafos que sean hijos directos.

`selector :has()`:
`has-[:checked]:border-indigo-500` cambia el estilo del contenedor padre si alguno de sus hijos cumple una condición
(ej. está marcado).

```
<!-- El contenedor cambia de borde si el radio interior está activo -->
<div class="p-4 border border-slate-700 rounded-xl has-[:checked]:border-indigo-500 has-[:checked]:bg-indigo-500/10">
  <input type="radio" name="option" />
  <label>Opción Pro</label>
</div>
```


# 3. Creación de Plugins y Extensión del Compilador

Puedes escribir tus propias utilidades JS
directamente en la configuración o consumir librerías oficiales para acelerar el desarrollo.

1. Plugins Oficiales Indispensables

Instálalos vía `npm install -D @tailwindcss/...` y añádelos a tu tailwind.config.js:

@tailwindcss/typography
Proporciona la clase prose para formatear HTML enriquecido
(Markdown/CMS) de forma elegante e instantánea.

@tailwindcss/forms
Resetea los estilos nativos de los inputs para que sean fáciles de personalizar con utilidades.

@tailwindcss/container-queries
Permite aplicar breakpoints basados en el tamaño del contenedor (@sm:, @md:) en lugar de toda la pantalla.


2. Creando un Plugin Personalizado

Si necesitas utilidades repetitivas o complejas
(ej. scrollbars personalizadas o efectos 3D):

```
// tailwind.config.js
import plugin from 'tailwindcss/plugin';

export default {
  plugins: [
    plugin(function({ addUtilities, addComponents, theme }) {
      // 1. Añadir utilidades atómicas
      addUtilities({
        '.text-glow': {
          'text-shadow': '0 0 10px rgba(99, 102, 241, 0.5)',
        },
      });

      // 2. Añadir componentes estructurados
      addComponents({
        '.card-glass': {
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(12px)',
          borderRadius: theme('borderRadius.2xl'),
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }
      });
    })
  ]
}
```


## 4. Trampas de Rendimiento y Análisis Estático (JIT)

Tailwind no ejecuta tu código JavaScript en tiempo de ejecución
busca cadenas de texto completas en tus archivos durante la compilación

Cadenas Dinámicas Incompletas

```
// ¡ESTO ROMPERÁ TUS ESTILOS EN PRODUCCIÓN!
function Badge({ color }) {
  return <span className={`bg-${color}-500`}>Badge</span>;
}
```

El compilador de Tailwind busca la cadena literal bg-red-500. Al ver bg-${color}-500
no sabe qué colores vas a usar y elimina esas clases del CSS final.


Soluciones:

1. Diccionario de clases completas (Mapas):

```
const colorMap = {
  red: 'bg-red-500 text-white',
  blue: 'bg-blue-500 text-white',
};

function Badge({ color }) {
  return <span className={colorMap[color]}>Badge</span>;
}
```

2. Safelisting (En tailwind.config.js):
Forzar a Tailwind a incluir ciertas clases aunque no las detecte explícitamente:

```
export default {
  safelist: [
    { pattern: /bg-(red|green|blue)-(400|500)/ }
  ]
}
```


## Ej código: Selector de Suscripción con Modo Oscuro y Estado peer

Aplica modo oscuro, interacción por pseudo-clases avanzadas (peer, :has)
transiciones finas y estructuración dinámica en un único componente:

```
<div class="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 p-8 flex items-center justify-center transition-colors duration-300">
  
  <div class="max-w-xl w-full bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800">
    
    <!-- Encabezado con soporte de modo oscuro -->
    <div class="flex justify-between items-center mb-6">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">Elige tu Plan</h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">Sin contratos obligatorios. Cancela cuando quieras.</p>
      </div>
      <span class="text-xs bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-semibold px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
        Ahorra 20% anual
      </span>
    </div>

    <!-- Opciones de Selección (Uso de :has() y peer) -->
    <form class="space-y-4">
      
      <!-- Opción 1 -->
      <label class="relative flex items-center justify-between p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 cursor-pointer transition-all has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50/50 dark:has-[:checked]:bg-indigo-950/30 has-[:checked]:shadow-md">
        <div class="flex items-center gap-4">
          <input type="radio" name="plan" class="peer hidden" checked />
          <!-- Radio personalizado con peer -->
          <div class="w-5 h-5 rounded-full border-2 border-slate-400 dark:border-slate-600 peer-checked:border-indigo-600 peer-checked:border-[6px] transition-all"></div>
          <div>
            <p class="font-semibold text-slate-900 dark:text-white">Plan Pro</p>
            <p class="text-xs text-slate-500 dark:text-slate-400">Para desarrolladores y proyectos individuales</p>
          </div>
        </div>
        <span class="text-lg font-bold text-slate-900 dark:text-white">$19<span class="text-xs font-normal text-slate-500">/mes</span></span>
      </label>

      <!-- Opción 2 -->
      <label class="relative flex items-center justify-between p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 cursor-pointer transition-all has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50/50 dark:has-[:checked]:bg-indigo-950/30 has-[:checked]:shadow-md">
        <div class="flex items-center gap-4">
          <input type="radio" name="plan" class="peer hidden" />
          <div class="w-5 h-5 rounded-full border-2 border-slate-400 dark:border-slate-600 peer-checked:border-indigo-600 peer-checked:border-[6px] transition-all"></div>
          <div>
            <p class="font-semibold text-slate-900 dark:text-white">Plan Enterprise</p>
            <p class="text-xs text-slate-500 dark:text-slate-400">Equipos que necesitan escalabilidad y soporte 24/7</p>
          </div>
        </div>
        <span class="text-lg font-bold text-slate-900 dark:text-white">$49<span class="text-xs font-normal text-slate-500">/mes</span></span>
      </label>

      <!-- Botón de Confirmación -->
      <button type="button" class="w-full mt-6 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-semibold py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-indigo-600/25">
        Continuar con el pago
      </button>

    </form>

  </div>
</div>
```



# Diseño/moldeo visual

##### Maquetar y dar estilo a un elemento HTML en CSS
#### se conoce como Metodología de Afuera hacia Adentro (o Macro to Micro Styling).

A nivel de organización de código en CSS
##### uno de los estándares más populares se llama Concentric CSS. 

Este orden existe por una razón técnica:
#### la propiedad que eliges primero determina cómo se comportan las propiedades que pones después

##### Ej: Si intentas ajustar el margen o el color antes de definir si un elemento es flex o block, estarás construyendo a ciegas


Flujo Estándar del Styling

##### Cualquier elemento en la web se moldea siguiendo estas 5 Fases Consecutivas:

```
[0. Reset] ➔
[1. Estructura/Layout] ➔
[2. Dimensiones] ➔
[3. Tipografía] ➔
[4. Decoración] ➔
[5. Interacción]

```

## Fase 0: El Reset Universal (Innegociable)

##### Antes de tocar cualquier elemento individual, se debe "limpiar" el comportamiento nativo del navegador.

`Propiedades clave`:
box-sizing: border-box;, margin: 0;, padding: 0;

`Motivo`:
Por defecto, los navegadores suman el padding y el border al ancho total del elemento
Con border-box, un elemento de $300\text{px}$ medirá exactamente $300\text{px}$ sin importar cuánto padding le pongas.


## Fase 1: Posicionamiento y Flujo (Macro-Layout)

##### ¿Dónde se ubica el elemento respecto a su padre y cómo organiza a sus hijos?

Propiedades principales:

`display`:
block, flex, grid, inline-block, none

`position`:
static, relative, absolute, fixed, sticky

`box`:
top, right, bottom, left, z-index`

`Flex/Grid`:
flex-direction, justify-content, align-items, grid-template-columns, gap


## Fase 2: Modelo de Caja y Dimensiones (Micro-Layout)

##### ¿Cuánto mide el elemento y cuánto espacio necesita a su alrededor?

Una vez establecido el sistema de alineación, le das forma física al contenedor.

Propiedades principales:

`Dimensiones externas`:
width, height, max-width, min-width, aspect-ratio

`Espacio externo`:
margin (empuja a otros elementos hacia afuera)

`Espacio interno`:
padding (empuja el contenido del elemento hacia adentro)


## Fase 3: Tipografía y Contenido Textual

##### ¿Cómo se lee la información que lleva dentro?

El texto afecta el alto final de los contenedores si no tienen un alto fijo
por lo que la tipografía debe moldearse antes de los adornos visuales.

Propiedades principales:

`font-family, font-size, font-weight`

`line-height` (altura de línea, crucial para la legibilidad)

`text-align, color, letter-spacing`


## 4. Superficie y Decoración Visual

##### Aspecto tiene la "piel" del elemento
##### Propiedades son meramente estéticas y casi nunca alteran la estructura o posición de otros elementos en la pantalla.

Propiedades principales:

`background-color, background-image`
`border, border-radius`
`box-shadow, opacity`
`overflow (hidden, scroll, auto)`


## 5. Transiciones e Interacción

##### Reacción del elemento: cuando el usuario interactúa con él
El toque final para dar vida al elemento.

Propiedades principales:

`cursor`: (pointer, not-allowed)
`transition / animation`
`transform`: scale, rotate, translate
`Pseudo-clases`: hover, :focus, :active


## Ej código CSS Puro

##### Aplicando estrictamente la jerarquía Concentric CSS:

```
.tarjeta {
  /* 1. Posicionamiento y Flujo */
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 2. Dimensiones y Modelo de Caja */
  width: 100%;
  max-width: 350px;
  padding: 24px;
  margin: 16px auto;

  /* 3. Tipografía */
  font-family: system-ui, sans-serif;
  color: #1e293b;
  text-align: center;

  /* 4. Decoración Visual */
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  /* 5. Interacción */
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.tarjeta:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```



# Concentric CSS en Tailwind

Tailwind sigue exactamente esta misma jerarquía mental
Cuando ves una cadena de clases en Tailwind como

```
<div class="flex flex-col w-full max-w-sm p-6 text-slate-800 bg-white border border-slate-200 rounded-xl shadow-md hover:-translate-y-1 transition-transform">
```

No están colocadas al azar. Tienen exactamente el mismo orden mental:

### 1. Layout
flex flex-col

### 2. Box
w-full max-w-sm p-6

### 3. Tipografía
text-slate-800

### 4. Decoración
bg-white border border-slate-200 rounded-xl shadow-md

### 5. Interacción
hover:-translate-y-1 transition-transform



# Diseño en Tailwind

## Concentric CSS

Solución definitiva al "sopa de clases" (class soup).
Cuando una etiqueta HTML acumula 15 o 20 utilidades
##### ordenarlas de afuera hacia adentro permite que cualquier desarrollador entienda la estructura visual del elemento en un par de segundos


### 5 capas concéntricas

##### Cuando escribas las clases de un elemento, agrúpalas siguiendo estrictamente este orden

```
[1. Layout] ➔ [2. Box Model] ➔ [3. Typography] ➔ [4. Visuals] ➔ [5. Interactivity]
```


### Capa 1: Posicionamiento y Flujo (Layout & Positioning)

#### Cómo se ubica este elemento respecto a la pantalla/padre y cómo organiza a sus hijos?

1. `Posición`: static, relative, absolute, fixed, sticky, inset-0, top-2, z-10

2. `Display`: block, inline-block, flex, grid, hidden

3. `Alineación Flex/Grid`: flex-col, items-center, justify-between, grid-cols-3, gap-4


### Capa 2: Dimensiones y Espaciado (Box Model)

#### Cuánto mide y cuánto espacio físico ocupa o genera?

1. `Ancho y Alto`: w-full, max-w-md, h-12, min-h-screen, aspect-square

2. `Espacio interno (Padding)`: p-6, px-4, py-2

3. `Espacio externo (Margin)`: m-auto, my-4, -mt-2

4. `Desbordamiento`: overflow-hidden, overflow-y-auto


### Capa 3: Tipografía (Typography)

#### Cómo se presenta el contenido de texto que lleva dentro?

1. `Fuente y Tamaño`: font-sans, text-sm, text-2xl

2. `Grosor y Estilo`: font-normal, font-semibold, font-bold, italic

3. `Alineación y Espaciado`: text-center, text-right, leading-relaxed, tracking-wide

4. `Color del texto`: text-slate-900, text-indigo-600


### Capa 4: Superficie y Decoración (Visuals & Styling)

Cómo se ve la piel estética del elemento?

1. `Fondo`: bg-white, bg-slate-900/50, bg-gradient-to-r

2. `Bordes`: border, border-2, border-slate-200

3. `Redondeado`: rounded-lg, rounded-full

4. `Efectos`: shadow-md, shadow-indigo-500/20, opacity-90, backdrop-blur-md


### Capa 5: Interacción y Estados (Interactivity & States)

#### Cómo reacciona al usuario o cómo cambia dinámicamente?

`Cursores`: cursor-pointer, select-none

`Transiciones y Transformaciones`: transition-all, duration-200, ease-in-out, scale-105

`Modificadores de estado (Hover/Focus/Dark)`: hover:bg-indigo-700, focus:ring-2, dark:bg-slate-800

```
<button class="
  /* 1. Layout */        flex items-center justify-center gap-2
  /* 2. Box Model */     w-full p-3
  /* 3. Typography */    text-sm font-semibold text-white
  /* 4. Visuals */       bg-indigo-600 border border-indigo-500 rounded-xl shadow-lg
  /* 5. Interactivity */ transition-all hover:bg-indigo-700 hover:scale-105
">
  <span>Enviar</span>
</button>
```


### Automatización de Concentric CSS

No tienes que memorizar el orden exacto de cada una de las miles de clases de Tailwind
El propio equipo oficial de Tailwind creó una herramienta que automatiza esto en tu editor de código.

#### solución: prettier-plugin-tailwindcss
Es un plugin para Prettier que, al presionar Guardar (Ctrl + S / Cmd + S)
reordena automáticamente todas tus clases siguiendo exactamente la arquitectura oficial de afuera hacia adentro (Concentric/Layout-first).

Config:

1. Instala el plugin como dependencia de desarrollo

```
npm install -D prettier prettier-plugin-tailwindcss
```

2. Agrégalo a tu archivo .prettierrc:

```
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```




# Tokens

Valores abstractos almacenados centralmente (colores, fuentes, espaciados, sombras, radios)
reemplazan valores estáticos o hardcodeados.
##### transformar la paleta y reglas arbitrarias del framework en el lenguaje exacto de tu sistema de diseño.


1. Jerarquía
Se divide en tres capas concéntricas

`Tokens Primitivos (Globales)`:
El valor bruto o físico de la paleta
No tienen contexto de uso
Ej: Azul-500 = #3B82F6

`Tokens Semánticos (Alias)`:
El propósito o intención visual dentro de la interfaz
Ej: Color-Fondo-Superficie = Azul-500

`Tokens de Componente`:
Específicos para la anatomía de un elemento UI.
Boton-Primario-Fondo = Color-Fondo-Superficie

Regla:
Tu interfaz nunca debería consumir tokens primitivos directamente
Siempre debe interactuar con tokens semánticos para que cambiar de tema o de marca no rompa la aplicación


2. Flujo:

```
[Diseño (Figma)] ➔
[Variables CSS (Puente)] ➔
[Tema de Tailwind (Motor)] ➔
[Clases Utilitarias (Consumo)]
```

`Diseño`:
diseñador define el token semántico en la herramienta de diseño
(ej. Figma Variables).

`Puente`:
Los tokens se exportan como Variables CSS (Custom Properties) que residen en el navegador
Esto permite dinamismo en tiempo de ejecución (como el modo oscuro).

`Motor` (Configuración del Tema):
Se conecta Tailwind a esas Variables CSS dentro de su capa de tema
en lugar de asignarle valores estáticos hexadecimales o en píxeles

`Consumo Utilitario`:
Tailwind genera automáticamente las clases atómicas semánticas que usará el desarrollador en su código


3. Implementación

`Auditoría y Normalización de Tokens`:
Se identifican todos los valores recurrentes en el diseño

Mapear escalas de color según la función:
(Fondo, Texto, Borde, Estado/Feedback).

Definir la escala de espaciado y tipografía:
(Escala modular).

Establecer la elevación (sombras) y la curvatura (radios de borde).


`Diccionario Semántico`:
##### Se le asigna un nombre lógico a cada decisión de diseño basado en su función

Ej: texto-principal o texto-contraste-alto.


`Capa de Variables Dinámicas`:
Runtime Layer
Se declaran los tokens semánticos en CSS estándar vinculados a variables del navegador
##### Esto es vital porque Tailwind compila en tiempo de desarrollo
##### pero el cambio de tema (modo oscuro, alto contraste, multi-marca) ocurre en tiempo de ejecución en la pantalla del usuario.


`Mapeo en el Sistema de Tailwind`:
Se le indica a Tailwind que "olvide" o "extienda" su configuración predeterminada para que únicamente reconozca los nombres de tus tokens

Si tu token se llama superficie-primaria
Tailwind generará automáticamente clases como la versión de fondo
bg-superficie-primaria
de texto (text-superficie-primaria)
de borde (border-superficie-primaria).


`Gobernanza y Restricción`:
Se configura el entorno para evitar que los desarrolladores usen valores arbitrarios
(como corchetes con píxeles/hexadecimales)
o colores por defecto del framework, garantizando que el 100% de la interfaz responda al sistema de tokens


## Tokens primitivos

Los tokens primitivos (o globales) representan los valores más atómicos y puros de tu sistema de diseño
No tienen contexto de uso; simplemente definen la "materia prima" disponible para construir la interfaz.

##### Se organizan por categorías físicas según el aspecto visual que controlan:

1. Color (Escalas Cromáticas Puras)
Definen la paleta completa en incrementos de intensidad (habitualmente de 50 a 950).

`Neutros (Grises/Slates)`:
gray-50, gray-100 ... gray-900, gray-950

`Colores de Marca / Cromáticos`:
blue-500, indigo-600, teal-400

`Colores de Estado (Brutos)`:
red-500 (error), green-500 (éxito), amber-400 (alerta)

`Canales alfa / Transparencias`:
white-10, black-50


2. Espaciado y Tamaño (Escala Espacial)

Basados en un sistema de grid (comúnmente múltiplos de 4px u 8px).

`Valores numéricos / absolutos`:
0, 2px, 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

`Porcentajes / Relativos`:
25%, 50%, 100%, 100vh


3. Tipografía (Atributos de Texto)

`Familias tipográficas`:
font-family-sans (Inter), font-family-mono (Fira Code)

`Escala de tamaños`:
12px, 14px, 16px, 20px, 24px, 32px, 48px

`Pesos (Font Weight)`:
300 (Light), 400 (Regular), 600 (SemiBold), 700 (Bold)

`Altura de línea (Line Height)`:
1.0, 1.25, 1.5, 1.75

`Espaciado de letras (Letter Spacing)`:
-0.02em, 0, 0.05em


4. Bordes y Formas

`Radios de curvatura (Border Radius)`:
0px, 2px, 4px, 8px, 12px, 16px, 9999px (circular/píldora)

`Grosor de borde (Border Width)`:
0px, 1px, 2px, 4px
    

5. Sombras y Elevación

Valores físicos completos de box-shadow sin asociar a componentes específicos.

`shadow-100`:
0 1px 2px 0 rgba(0, 0, 0, 0.05)

`shadow-300`:
0 4px 6px -1px rgba(0, 0, 0, 0.1)

`shadow-500`:
0 20px 25px -5px rgba(0, 0, 0, 0.1)

    
6. Movimiento y Animación

`Duración`:
75ms, 150ms, 300ms, 500ms

`Curvas de aceleración (Easings)`:
ease-linear, cubic-bezier(0.4, 0, 0.2, 1)



## Tokens Semánticos
Tokens de Alias
##### otorgan propósito, intención y contexto a los tokens primitivos

##### un token semántico no describe el aspecto del valor, sino para qué sirve en la interfaz (action-primary, text-danger, surface-card).

##### Se estructuran utilizando una nomenclatura lógica basada en su función
    
```
[Categoría] . [Elemento/Rol] . [Variante/Estado]
```


1. Superficies y Fondos (surface / bg)
Definen el lienzo y los planos de profundidad de la interfaz.

Lienzo principal:
`surface-canvas / bg-app`
(El fondo general de la aplicación).

Contenedores de primer nivel:
`surface-primary / bg-card`
(Fondos para tarjetas, paneles o secciones).

Superficies elevadas:
`surface-raised / bg-popover`
(Modales, menús desplegables, tooltips).

Superficie de superposición:
`surface-overlay`
(Capa semitransparente para oscurecer la pantalla tras un modal).

Superficie invertida:
`surface-inverse`
(Fondo oscuro en modo claro, o viceversa).


2. Texto y Contenido Visual (text / foreground)
Garantizan el contraste adecuado para la lectura.

Texto principal:
`text-primary`
(Alto contraste para títulos y texto extenso).

Texto secundario:
`text-secondary`
(Contraste medio para subtítulos, etiquetas y metadata).

Texto atenuado:
`text-muted / text-disabled`
(Bajo contraste para información deshabilitada o placeholder).

Texto invertido:
`text-inverse`
(Texto claro sobre fondos oscuros o de marca).

Texto interactivo:
`text-link`
(Color para hipervínculos).


3. Bordes y Separadores (border / divider)

Borde por defecto:
`border-default / border-subtle`
(Líneas divisorias o bordes de tarjetas).

Borde pronunciado:
`border-strong`
(Para contenedores seleccionados o activos).

Borde de enfoque:
`border-focus / ring-focus`
(Anillo de accesibilidad para navegación por teclado).


4. Acciones e Interacción (action / interactive)
Definen el comportamiento cromático de los elementos clicables (botones, inputs, pestañas).

Acción principal:
`action-primary-default, action-primary-hover, action-primary-active.`

Acción secundaria:
`action-secondary-default, action-secondary-hover.`

Acción destructiva:
`action-danger-default, action-danger-hover`
(Para eliminar o cancelar).

    
5. Retroalimentación y Estado (status / feedback)   
Mapean los colores de estado a componentes de alerta, badget o validaciones.

`Éxito`:
status-success-bg, text-success, border-success.

`Error / Peligro`:
status-error-bg, text-error, border-error.

`Advertencia`:
status-warning-bg, text-warning, border-warning.

`Información`:
status-info-bg, text-info, border-info


6. Geometría y Elevación Semántica

Radios de interacción: radius-control
(Redondeado estandarizado para botones e inputs, ej. $8px$).

Radios de contenedor: radius-container
(Redondeado para tarjetas o modales, ej. $16px$).

Sombras por rol:
shadow-card, shadow-dropdown, shadow-modal.

Token Semántico,Modo Claro (Apunta a Primitivo),Modo Oscuro (Apunta a Primitivo)
surface-canvas,gray-50 (#F8FAFC),gray-950 (#020617)
text-primary,gray-900 (#0F172A),gray-100 (#F1F5F9)
action-primary,blue-600 (#2563EB),blue-500 (#3B82F6)

```
/* Modo Claro por defecto */
:root {
  --surface-canvas: var(--color-gray-50);
  --text-primary: var(--color-gray-900);
}

/* Modo Oscuro */
.dark, [data-theme="dark"] {
  --surface-canvas: var(--color-gray-950);
  --text-primary: var(--color-gray-100);
}
```



## Tokens de Componente

Nivel más específico de un sistema de diseño
Mapean la anatomía visual de un elemento de interfaz concreto
como un botón, un input o una tarjeta
vinculándolo a tokens semánticos o valores absolutos.

Su objetivo principal es aislar el estilo de un componente
De este modo, si decides cambiar el padding o el color de fondo de los inputs de tu aplicación
lo haces sin correr el riesgo de alterar otros elementos que compartan los mismos tokens semánticos.

```
[Componente] . [Elemento/Parte] . [Propiedad] . [Variante/Estado]
```

1. Botones (button / btn)
Controlan la superficie, el borde, el texto y las dimensiones de las variantes de botón

button-primary-bg-default
(Apunta al semántico action-primary-default)

button-primary-bg-hover
(Apunta al semántico action-primary-hover)

button-primary-text-color
(Apunta al semántico text-inverse)

button-padding-x
(Apunta al primitivo/semántico space-4)

button-border-radius
(Apunta al semántico radius-control)

button-height
(Apunta a 40px o space-10)


2. Campos de Texto e Inputs (input / form-control)

input-bg-default
(Apunta a surface-card o white)

input-bg-disabled
(Apunta a surface-disabled)

input-border-color-default
(Apunta a border-subtle)

input-border-color-focus
(Apunta a border-focus)

input-placeholder-color
(Apunta a text-muted)

input-height
(Apunta a 40px)


3. Tarjetas (card)

card-bg
(Apunta a surface-card)

card-border-color
(Apunta a border-subtle)

card-border-radius
(Apunta a radius-container)

card-padding
(Apunta a space-6)

card-shadow
(Apunta a shadow-card)


4. Modales y Ventanas Emergentes (modal / dialog)

modal-bg
(Apunta a surface-raised)

modal-border-radius
(Apunta a radius-modal)

modal-padding
(Apunta a space-8)

modal-shadow
(Apunta a shadow-modal)

modal-overlay-bg
(Apunta a surface-overlay)


5. Badges / Etiquetas (badge)

badge-success-bg
(Apunta a status-success-bg)

badge-success-text
(Apunta a status-success-text)

badge-border-radius
(Apunta a radius-full)

badge-padding-x
(Apunta a space-2.5)


Nivel,Nombre del Token,Valor / Referencia
1. Primitivo,blue-600,#2563EB
2. Semántico,action-primary-default,var(--blue-600)
3. Componente,button-primary-bg,var(--action-primary-default)
Consumo en CSS,.btn-primary,background-color: var(--button-primary-bg)


        

## Aqua Tokens

1. Modern SaaS & Landing Pages (Aqua + Coral & Azul Noche)
paleta de alto impacto visual ideal para startups, tecnología y productos digitales modernos
coral actúa como un llamado a la acción (CTA) complementario muy potente sobre el aqua.

Rol en UI,Nombre,Código Hex,Uso sugerido
Acento Primario,Vibrant Aqua,#00D2C8,"Botones secundarios, badges, highlights"
Acento Destacado,Warm Coral,#FF6B6B,"Botones de conversión (CTA), alertas"
Fondo Oscuro / Texto,Deep Navy,#0A192F,"Texto principal, encabezados, footer"
Superficie Suave,Light Mint,#E0F2F1,"Tarjetas, contenedores secundarios"
Fondo Claro,Ice White,#F4FAFA,Fondo general de la aplicación

2. Fintech & Tech Corporativa (Aqua + Azul Marino & Gris Pizarra)
Transmite confianza, precisión y profesionalismo
fecta para dashboards, banca, analítica y plataformas B2B.

Rol en UI,Nombre,Código Hex,Uso sugerido
Acento Principal,Teal Aqua,#00C9A7,"Gráficos, botones primarios, estado activo"
Fondos Oscuros,Dark Abyss,#0B132B,"Navbar, sidebars, modo oscuro"
Texto / Estructura,Slate Gray,#4A5568,"Texto secundario, íconos de interfaz"
Bordes / Divisiones,Cool Gray,#E2E8F0,"Líneas divisoras, bordes de inputs"
Fondo Base,Pure Canvas,#F8FAFC,Fondo de pantalla claro

3. Wellness & E-Commerce Orgánico (Aqua Suave + Crema & Durazno)
Una paleta pastel relajante orientada a marcas de estilo de vida, cosmética, salud mental y tiendas online de autor

Rol en UI,Nombre,Código Hex,Uso sugerido
Color de Marca,Soft Aqua,#7FE0D0,"Encabezados, banners, detalles visuales"
Acento Cálido,Peach Puff,#FFDAC1,"Botones secundarios, hover estados"
Fondo Principal,Warm Cream,#FFF8F0,Fondo general cálido
Soporte Botánico,Muted Sage,#B5EAD7,"Badges, etiquetas de producto"
Texto Principal,Charcoal,#2D3748,Lectura principal (contraste suave)

4. Dark Mode & Estética Cyberpunk (Aqua Neón + Violeta + Fondo Oscuro)
Diseñada específicamente para experiencias con fondo oscuro (Dark Mode), gaming, cripto y aplicaciones creativas.

Rol en UI,Nombre,Código Hex,Uso sugerido
Acento Neón,Electric Aqua,#00F5D4,"Elementos interactivos, resplandores (glow)"
Secundario,Cyber Violet,#7B2CBF,"Gradientes con el aqua, tarjetas activas"
Fondo Base,Obsidian,#0D1117,Fondo general en modo oscuro
Tarjetas / Elevación,Dark Slate,#161B22,"Tarjetas, modales, contenedores"
Texto,Off White,#F0F6FC,Texto de alta legibilidad


##### El color Aqua puro (#00FFFF) suele fallar el contraste sobre fondos blancos cuando se utiliza en texto pequeño
##### Para cumplir con la norma WCAG AA/AAA, utiliza el aqua para superficies o botones con texto oscuro (#0A192F)
##### o bien oscurece el aqua a un tono turquesa (#008B8B / #009688) para fuentes tipográficas.



## Texto

Aqua: 00FFFF o #00D2C8
tono de muy alta luminosidad
la regla principal de legibilidad y contraste (WCAG) dicta que el texto colocado sobre una superficie aqua siempre debe ser oscuro


1. Sobre fondo

A.

`Azul Marino Profundo` / Navy (#0A192F, #0F172A) — La Opción #1
combinación más elegante y moderna en diseño UI/UX
Al ser un tono azul muy oscuro, mantiene la armonía cromática con el aqua mientras alcanza un nivel de contraste de grado WCAG AAA (máxima lectura).

B.

`Negro Carbón` / Slate Oscuro (#111827, #1E293B)
Para un acabado limpio, técnico y de alta nitidez
El negro puro o con un matiz ligeramente azulado o grisáceo hace que los titulares y textos largos se lean sin esfuerzo visual

C.

`Teal / Verde Azulado Oscuro` (#003B46, #004D40)
Efecto monocromático profundo
Al usar un verde/azul de la misma familia cromática pero en su versión más oscura, obtienes un aspecto sofisticado, refinado y coherente

D.

`Café Espresso / Terracota Oscuro` (#2B1E1A, #4A1505)
Ideal para marcas orgánicas, productos artesanales o diseño editorial
La calidez del marrón oscuro/terracota neutraliza la frialdad del aqua, logrando una estética acogedora de inspiración terrosa



2. Texto Aqua

Cuando usas el color aqua en la tipografía (por ejemplo, para destacar un titular o un botón de acción),
el fondo donde lo coloques debe ser oscuro:

`Fondo Azul Noche` (#0A192F): Estética SaaS/Tech de alto nivel

`Fondo Obsidiana` / Gris Oscuro (#0D1117): Modo oscuro ideal con toque cyberpunk o deportivo.

`Fondo Negro Puro` (#000000): Máximo impacto visual y estilo neón.

Color de Texto,Color de Fondo,Resultado de Contraste,Nivel de Uso Recomendado
Azul Marino (#0A192F),Aqua (#00D2C8), Excelente (8.5:1+),Todo tipo de texto (titulares y cuerpo)
Negro Carbón (#111827),Aqua (#00D2C8), Excelente (10:1+),Todo tipo de texto y componentes UI
Teal Oscuro (#003B46),Aqua (#00D2C8), Bueno (7:1+),"Titulares, subtítulos, botones"
Blanco (#FFFFFF),Aqua (#00D2C8), Pésimo (1.5:1), Evitar totalmente (Inlegible)
Gris Claro (#E2E8F0),Aqua (#00D2C8), Pésimo (1.3:1), Evitar totalmente



## Aqua background

aqua como fondo sin cansar la vista ni perder legibilidad
##### la clave está en ajustar la luminosidad y la saturación según la función del contenedor o pantalla

1. Fondos Aqua Claros y Pasteles (Modo Claro / Lectura)
Ideales como fondo general de aplicaciones o sitios web completos
Permiten colocar texto oscuro arriba sin saturar la vista del usuario.

Nombre,Código Hex,Sensación / Caso de uso
Ice Aqua,#F0FDFB,"Ultra sutil, ideal para el fondo global de una web limpia"
Mint Water,#E0F2F1,"Sensación fresca y orgánica, perfecto para tarjetas UI"
Soft Cyan,#E0F7FA,Fondo claro muy equilibrado para sitios de tecnología/salud
Pale Turquoise,#B2EBF2,Para secciones destacadas o bloques de citas (callouts)

2. Fondos Aqua Oscuros y Profundos (Modo Oscuro / Dark Mode)
Excelentes para interfaces en modo oscuro, encabezados, pies de página o aplicaciones tipo dashboard.

Nombre,Código Hex,Sensación / Caso de uso
Dark Abyssal,#091A1E,Fondo general en modo oscuro con matiz azul/verde
Deep Petrol,#0B252B,Fondo de paneles laterales (sidebars) o navegación
Midnight Aqua,#132E35,Ideal para contenedores y tarjetas en interfaces oscuras
Teal Slate,#1E3A8A,Fondo elegante de alto contraste para destacar contenido

3. Fondos Aqua Desaturados y Muted (Elegantes / Editoriales)
Bajan la saturación cromática para lograr un tono sofisticado, neutro y atemporal.

Nombre,Código Hex,Sensación / Caso de uso
Sage Aqua,#C5DEDD,Apariencia natural y relajante para e-commerce
Slate Aqua,#70979E,Tono medio sobrio para fondos de banners o imágenes
Dusty Turquoise,#4A6B6C,Tono mate oscuro para identidades corporativas o de autor

4. Fondos Aqua Neón y Vibrantes (Acentos y Gradients)

El aqua puro en su máxima saturación (#00FFFF o #00F5D4) resulta incómodo si se usa como fondo completo de una pantalla
mejor aplicarlo en:

Superficies pequeñas: Botones, insignias (badges) o banners publicitarios.
Gradientes: Mezclado con azul marino, violeta o negro.
Capas con opacidad: Usar el color aqua con transparecia (rgba(0, 245, 212, 0.1)) sobre fondos oscuros o blancos.
    

## Aqua surface

color que se aplica a contenedores elevables como tarjetas (cards), paneles laterales (sidebars), ventanas modales y desplegables (dropdowns)
que se posicionan sobre el fondo principal (canvas).

A diferencia de un fondo plano, una superficie aqua debe contar con varios niveles de elevación (surface-1, surface-2, surface-3)
para generar profundidad visual y garantizar el contraste del texto en su interior


1. Superficies Aqua para Modo Claro (Light Mode)

Se utilizan cuando el fondo de la aplicación es blanco o gris neutro (#FFFFFF o #F8FAFC).

Token / Nivel,Código Hex,Uso en UI,Color de texto recomendado
surface-lowest,#F7FCFC,Tarjetas planas sobre fondo blanco (contraste sutil),#0F172A (Azul Noche)
surface-default,#E6F7F5,"Tarjetas estándar, filas de tabla o paneles secundarios",#0F172A / #0A192F
surface-high,#C2EFE9,"Tarjetas seleccionadas, pestañas activas o modales",#003B46 (Teal Oscuro)
surface-variant,#D5EAE7,"Campos de formulario (inputs), contenedores desactivados",#334155 (Slate)

2. Superficies Aqua para Modo Oscuro (Dark Mode)

modo oscuro, los niveles de elevación en aqua no usan sombras negras
(que no se ven sobre el fondo oscuro),
sino tonos más claros progresivos de azul/verde petróleo

Token / Nivel,Código Hex,Elevación,Uso en UI,Color de texto
surface-0 (Canvas),#071417,0px,Fondo global de la aplicación,#F1F5F9
surface-1,#0E2126,1px−3px,Tarjetas principales y feed,#F1F5F9
surface-2,#162E35,4px−8px,Paneles flotantes y sidebars,#FFFFFF
surface-3,#1F3C45,12px+,"Ventanas modales, dropdowns y tooltips",#FFFFFF

3. Superficies Aqua Destacadas (Featured / Hero Cards)

contenedores con personalidad de marca que se usan para resaltar información clave
(por ejemplo, tarjetas de precio "Plan Pro", banners publicitarios o estadísticas principales).

surface-accent-vibrant (#00D2C8): Fondo aqua brillante
Requiere texto de alto contraste: #0A192F (Azul Marino Profundo).

surface-accent-teal (#00A896): Tono turquesa medio saturado
Permite texto claro: #FFFFFF o #F8FAFC.

surface-accent-gradient:

```
background: linear-gradient(135deg, #00D2C8 0%, #008B8B 100%);
color: #FFFFFF;
```

4. Implementación en Variables CSS (Tokens Dinámicos)

declarar estos tokens en tu hoja de estilos para que las tarjetas ajusten sus superficies automáticamente
según el tema elegido por el usuario:

```
/* Modo Claro */
:root {
  --color-canvas: #f8fafc;
  --surface-card: #e6f7f5;
  --surface-modal: #c2efe9;
  --text-on-surface: #0f172a;
  --border-surface: #b2ebf2;
}

/* Modo Oscuro */
.dark {
  --color-canvas: #071417;
  --surface-card: #0e2126;
  --surface-modal: #1f3c45;
  --text-on-surface: #f1f5f9;
  --border-surface: #162e35;
}

/* Componente de Tarjeta Reutilizable */
.ui-card {
  background-color: var(--surface-card);
  color: var(--text-on-surface);
  border: 1px solid var(--border-surface);
  border-radius: 0.75rem;
  padding: 1.5rem;
}
```


## Superficies para aqua

##### Cuando el fondo (canvas) de tu interfaz o diseño es de color Aqua, la elección de las superficies (surfaces — tarjetas, paneles, modales) depende directamente de la luminosidad de ese fondo.

1. Superficies para Fondo Aqua Claro / Pastel (#F0FDFB / #E0F2F1)
Si usas un aqua suave como lienzo principal, las superficies deben aportar limpieza o contraste elevado:

Color de Superficie,Código Hex,Uso y Sensación,Color de Texto interno
Blanco Puro,#FFFFFF,"La opción #1. Aporta pulcritud, contraste suave y resalta sutilmente con una sombra liviana (shadow-sm).",#0F172A (Azul Noche)
Gris Pizarra / Slate,#0F172A,Contraste Inverso. Crea tarjetas oscuras de alto impacto sobre el fondo fresco claro.,#F8FAFC (Blanco)
Aqua Nivel 2 (Mapeo Análogo),#B2EBF2,Tarjetas tono sobre tono sin sombra para secciones agrupadas o secundarias.,#003B46 (Teal Oscuro)

2. Superficies para Fondo Aqua Oscuro / Petróleo (#071417 / #0B252B)
En interfaces en modo oscuro con fondo aqua petróleo, la regla es usar superficies ligeramente más claras para simular elevación física y profundidad:

Color de Superficie,Código Hex,Elevación / Uso,Color de Texto interno
Aqua Petróleo Elevado,#14282E,Superficie Base (Cards): Eleva las tarjetas respecto al fondo sin romper la gama.,#F1F5F9 (Blanco suave)
Petróleo Medio,#1B363F,Superficie Flotante (Modales/Dropdowns): Mayor luminosidad para indicar proximidad al usuario.,#FFFFFF
Azul Navy Oscuro,#0F172A,Añade variación cromática elegante a los contenedores secundarios.,#E2E8F0

3. Superficies para Fondo Aqua Vibrante / Acento (#00D2C8 / #00F5D4)
Si utilizas un aqua intenso como fondo de una sección (por ejemplo, una sección Hero, un banner publicitario o una pantalla de bienvenida):

Color de Superficie,Código Hex,Sensación / Estilo,Color de Texto interno
Azul Noche / Navy,#0A192F,SaaS & Tech: La combinación más profesional y moderna. Roba la atención sin saturar.,#FFFFFF
Blanco Puro,#FFFFFF,Fresco & Veraniego: Alto contraste visual de baja carga cognitiva.,#0F172A
Negro Carbón,#111827,Estética Cyberpunk / Neón: Tarjetas de tono mate que hacen resaltar el fondo aqua.,#F9FAFB


### Prácticas de maquetación

1. Bordes de Definición (Borders):
Si usas superficies blancas (#FFFFFF)
sobre un fondo aqua claro (#F0FDFB),
añade un borde fino con opacidad para separarlas limpiamente: border: 1px solid rgba(0, 210, 200, 0.2);.

2. Sombras Tintadas: En lugar de usar sombras negras puras (rgba(0,0,0,0.1))
aplica sombras ligeramente tintadas con aqua oscuro (rgba(11, 37, 43, 0.08)) para integrar la elevación de forma natural.



## Fondos gradient para aqua

1. Gradientes Suaves para Modo Claro (Light Mode)
Ideales para páginas completas, aplicaciones web limpias y fondos de lectura donde se busca frescura sin fatigar la vista.

```
/* A. Ice Aqua a Blanco (Sutil y luminoso) */
.bg-gradient-ice {
  background: linear-gradient(180deg, #E0F2F1 0%, #FFFFFF 100%);
}

/* B. Aqua Menta a Celeste Pastel (Fresco y orgánico) */
.bg-gradient-mint-sky {
  background: linear-gradient(120deg, #E0F7FA 0%, #B2EBF2 50%, #E0F2F1 100%);
}

/* C. Aqua a Lavanda Pastel (Estética suave / Lifestyle) */
.bg-gradient-aqua-lavender {
  background: linear-gradient(135deg, #E0F2F1 0%, #E8EAF6 100%);
}
```


2. Gradientes Vibrantes para Marketing & SaaS
Pensados para secciones Hero, banners promocionales, tarjetas destacadas o botones de acción principales (CTA).

```
/* A. Aqua Eléctrico a Azul Royal (Estándar Tech / SaaS) */
.bg-gradient-tech-aqua {
  background: linear-gradient(135deg, #00D2C8 0%, #2563EB 100%);
}

/* B. Cyber Aqua a Violeta Neón (Estética Gamer / Cripto / Dark Tech) */
.bg-gradient-cyber {
  background: linear-gradient(135deg, #00F5D4 0%, #7B2CBF 100%);
}

/* C. Atardecer Tropical (Aqua + Coral + Dorado) */
.bg-gradient-tropical {
  background: linear-gradient(110deg, #00D2C8 0%, #FF6B6B 60%, #FFD166 100%);
}
```


3. Gradientes Profundos para Modo Oscuro (Dark Mode)

Perfectos para interfaces oscuras, paneles laterales (sidebars), dashboards o fondos generales en estética nocturna

```
/* A. Abismal Aqua a Azul Noche (Elegante y sobrio) */
.bg-gradient-abyssal {
  background: linear-gradient(180deg, #0B252B 0%, #0A192F 100%);
}

/* B. Resplandor Central Petrol (Efecto Spotlight Radial) */
.bg-gradient-spotlight {
  background: radial-gradient(circle at 50% 0%, #163E48 0%, #071417 70%);
}

/* C. Teal Cero a Negro Carbono (Contraste alto) */
.bg-gradient-midnight-teal {
  background: linear-gradient(135deg, #003B46 0%, #0D1117 100%);
}
```


4. Gradientes de Malla Dinámicos (Mesh Gradients / Aurora)

Simulan el efecto de luz difusa o "aurora boreal", muy popular en interfaces modernas estilo Apple o Vercel.

```
.bg-mesh-aurora {
  background-color: #071417; /* Fondo base oscuro */
  background-image: 
    radial-gradient(at 10% 10%, rgba(0, 245, 212, 0.25) 0px, transparent 50%),
    radial-gradient(at 90% 20%, rgba(37, 99, 235, 0.2) 0px, transparent 50%),
    radial-gradient(at 50% 90%, rgba(123, 44, 191, 0.2) 0px, transparent 50%);
}
```

Implementación

##### Contraste de Texto: Si usas un gradiente vibrante (como Cyber Aqua a Violeta), coloca texto blanco (#FFFFFF) o azul marino muy oscuro (#0A192F).

Optimización en Tailwind CSS: Puedes definir estos gradientes directamente en las clases de utilidades con corchetes:
`class="bg-gradient-to-r from-[#00D2C8] to-[#2563EB]"`



## Text aqua

1. Texto SOBRE Fondo Aqua
Cuando la superficie o tarjeta es aqua, la tipografía debe ser oscura para garantizar legibilidad y cumplir con los estándares de accesibilidad visual (WCAG).

Color de Texto,Código Hex,Estilo / Sensación,Nivel WCAG
Azul Marino (Navy),#0A192F / #0F172A,"La mejor opción. Elegante, moderno y corporativo. Mantiene la armonía cromática.",🟢 AAA (Máximo)
Negro Carbón,#111827 / #000000,"Limpio, técnico y de alta definición para lectura prolongada.",🟢 AAA (Máximo)
Teal Oscuro (Verde Petrol),#003B46 / #004D40,Efecto monocromático sofisticado y suave a la vista.,🟢 AA / AAA
Café Espresso / Terracota,#2B1E1A / #3E1B10,"Estética orgánica, editorial o artesanal. Aporta calidez terrosa.",🟢 AAA
Púrpura / Violeta Oscuro,#3B0764 / #2A0845,Contraste creativo de alto impacto para diseño digital y moda.,🟢 AAA

Incompatibles (Evitar totalmente sobre fondo aqua): Blanco (#FFFFFF), gris claro (#E2E8F0), amarillo o tonos pastel. Generan un contraste nulo que imposibilita la lectura.


2. Texto de Color Aqua SOBRE Fondos

Si usas el color Aqua directamente en la tipografía (para titulares <h1>, palabras clave, badges o íconos), el fondo donde se posicione debe ser oscuro.
│  TITULAR EN AQUA (#00F5D4)                               │
│  Fondo Azul Noche (#0A192F) -> Contraste ideal           │

Sobre Azul Noche (#0A192F): Estética SaaS / Tech premium de alto nivel.
Sobre Fondo Obsidiana / Negro (#0D1117 / #000000): Look neón / Dark Mode tipo cyberpunk.
Sobre Gris Pizarra Oscuro (#1E293B): Modo oscuro limpio y equilibrado para aplicaciones web.


3. Ej:

```
<!-- Opción 1: Texto oscuro sobre tarjeta Aqua (Lectura perfecta) -->
<div style="background-color: #00D2C8; color: #0A192F; padding: 1.5rem; border-radius: 8px;">
  <h3 style="margin: 0; font-weight: bold;">Título en Azul Marino</h3>
  <p>Texto secundario perfectamente legible sobre fondo aqua.</p>
</div>

<!-- Opción 2: Texto Aqua sobre contenedor oscuro -->
<div style="background-color: #0A192F; color: #00F5D4; padding: 1.5rem; border-radius: 8px;">
  <h3 style="margin: 0; font-weight: bold;">Titular Neón en Aqua</h3>
</div>
```


## muted aqua

1. Muted Neutros Fríos (Pizarra, Gris y Niebla)
Ideal para estructura de UI, textos secundarios, bordes y estados desactivados o sutiles.

Nombre,Código Hex,Sensación / Rol sugerido
Slate Gray,#64748B,Texto secundario y subtítulos. Excelente lectura sin el peso del negro.
Muted Steel,#94A3B8,"Íconos, bordes de contenedor e inputs."
Soft Fog,#E2E8F0,"Divisiones, tarjetas secundarias y líneas de tabla."
Cool Charcoal,#334155,Texto principal suavizado. Aporta estructura firme pero no agresiva.

2. Muted Cálidos y Terrosos (Terracota, Arcilla y Arena)
Generan un contraste de temperatura sofisticado. Restan frialdad al aqua y crean paletas muy usadas en marcas de autor, estilo de vida y diseño editorial.

Nombre,Código Hex,Sensación / Rol sugerido
Muted Terracotta,#C57B57,Acento secundario cálido. Equilibra botones o insignias.
Dusty Clay,#B87365,Detalles editoriales y destacados. Tono arcilla desaturado.
Warm Taupe / Sand,#C2B6A6,Superficies o fondos secundarios. Aporta calidez orgánica.
Muted Ochre,#C8A261,Indicadores o notas de atención suaves.

3. Muted Análogos y Botánicos (Salvia y Eucalipto)
Crean una transición fluida y natural dentro de la misma gama cromática, transmitiendo calma, salud y bienestar

Nombre,Código Hex,Sensación / Rol sugerido
Muted Sage,#88A096,Fondos de tarjeta y bloques de contenido informativo.
Dusty Teal,#52796F,Botones secundarios o íconos en modo claro.
Eucalyptus,#A3B18A,"Etiquetas, insignias (badges) o elementos de estado."

4. Muted Rosas y Malvas (Dusty Rose & Mauve)
Aportan una estética romántica moderna, chic y de baja intensidad visual.

Nombre,Código Hex,Sensación / Rol sugerido
Dusty Rose,#C292A1,Acento suave para botones secundarios o hover.
Muted Mauve,#9A8C98,"Detalles gráficos, sombras sutiles e ilustraciones."


Paleta Proporcional (Regla 60-30-10)

```
[ 60% Fondo ]   #F8FAFC (Blanco Niebla / Neutro)
[ 30% Muted ]   #64748B (Slate Gray para estructura y texto) + #C2B6A6 (Taupe para superficies)
[ 10% Acento ]  #00D2C8 (Aqua vibrante para llamar la atención en el punto focal)
```


## Border aqua

1. Bordes Sutiles y Estructurales (Modo Claro)
Diseñados para delimitar tarjetas (cards), tablas o contenedores sobre fondos claros sin recargar la vista.

Color de Borde,Código Hex,Uso principal
Aqua Tint (10-20%),#E0F2F1 / #CCFBF1,Define tarjetas sobre fondo blanco o aqua pastel con un matiz integrado.
Gris Pizarra Claro,#E2E8F0 / #CBD5E1,Separación estructural neutra en layouts limpios.
Teal Desaturado,#A3E635 / #94A3B8,Excelente para líneas divisoras (dividers) o tablas.

2. Bordes de Foco y Estado Activo (High Impact / Interactive)
Para llamar la atención del usuario en inputs activos (:focus), elementos seleccionados o botones con estilo outline

Color de Borde,Código Hex,Uso principal
Aqua Eléctrico,#00D2C8 / #00F5D4,La opción #1. Bordes de campos de formulario al hacer clic o tarjetas seleccionadas.
Coral Cálido,#FF6B6B / #C57B57,"Contraste complementario para estados de alerta, selecciones especiales o insignias."
Verde Esmeralda,#10B981,Indicadores de éxito o validación en formularios con fondo aqua.

3. Bordes para Modo Oscuro (Dark Mode)
En interfaces oscuras, los bordes definen la separación entre capas de elevación sin romper la estética general

Color de Borde,Código Hex,Uso principal
Petrol Oscuro,#162E35 / #1E293B,Borde sutil para tarjetas en modo oscuro sobre fondo abismal.
Teal Medio,#0D9488 / #004D40,Borde de definición en elementos interactivos oscuros.
Púrpura Pizarra,#334155,Separador de tono frío neutro para componentes complejos.

4. Bordes Translúcidos (Efecto Glassmorphism / Modern UI)
La técnica más limpia en el diseño web moderno consiste en no usar un color sólido, sino una transparencia con el tono Aqua. Esto permite que el borde se adapte automáticamente al fondo

```
/* Opción A: Borde sutil de Aqua translúcido */
.card-glass {
  border: 1px solid rgba(0, 210, 200, 0.25);
}

/* Opción B: Borde con resplandor neón al hacer hover */
.card-interactive {
  border: 1px solid rgba(0, 245, 212, 0.4);
  box-shadow: 0 0 12px rgba(0, 245, 212, 0.15);
}

/* Opción C: Con CSS moderno color-mix() */
.input-modern {
  border: 1px solid color-mix(in srgb, #00D2C8 30%, transparent);
}
```



## accent aqua

Aqua (un tono frío, luminoso y fresco) requiere un color de acento (accent) que genere un fuerte impacto visual inmediato
el acento se aplica con la regla del 10% para captar la atención del usuario en botones de conversión (CTA), badges, alertas, estados de éxito e indicadores de notificación

1. Coral, Salmón y Naranja
Al estar ubicados en la zona opuesta del círculo cromático, los tonos cálidos anaranjados y rojizos ofrecen el contraste de temperatura más potente contra el aqua.

Nombre de Acento,Código Hex,Uso sugerido en UI
Warm Coral,#FF6B6B,"Botones de acción (CTA), estados de alerta y compras."
Fresh Salmon,#FF8E72,"Tarjetas de oferta, badges publicitarios y banners."
Electric Orange,#FF5722,Notificaciones flotantes y llamadas a la acción agresivas.

2. Violeta, Magenta y Púrpura Neón (Estética Cyberpunk & SaaS)
Crea una estética moderna, tecnológica y juvenil. Combina excepcionalmente bien si el aqua se aplica sobre fondos oscuros o en modo noche.

Nombre de Acento,Código Hex,Uso sugerido en UI
Electric Violet,#7B2CBF,"Elementos de selección activa, enlaces secundarios y badges."
Neon Magenta,#F72585,"Indicadores de función ""Pro"", avatares destacados y resaltados."
Soft Lavender,#B4BEFE,"Microinteracciones, hover de botones e íconos activos."

3. Dorado, Amarillo Cálido y Ámbar (Alta Visibilidad)
Aporta contraste cálido sin la carga agresiva del rojo o naranja. Ideal para elementos informativos, clasificaciones y valoraciones.

Nombre de Acento,Código Hex,Uso sugerido en UI
Soft Gold,#FFD166,"Estrellas de puntuación, insignias premium y contadores."
Vibrant Amber,#FFB703,"Advertencias de sistema, tostadas informativas (toasts)."
Sunburst Yellow,#FFE600,Resaltado de texto (highlights) en banners promocionales.

4. Verde Lima Neón (Energía & Éxito)
Si prefieres mantener una paleta 100% fría o análoga pero necesitas un punto focal de altísima luminosidad

Nombre de Acento,Código Hex,Uso sugerido en UI
Neon Lime,#CCFF00,"Indicadores de estado ""En línea / Activo"", interruptores (switches)."
Bright Emerald,#10B981,Validaciones exitosas en formularios con temática aqua.

Ej:

```
/* Paleta base: Fondo oscuro, tarjeta aqua petróleo, acento coral */
:root {
  --bg-canvas: #0A192F;
  --surface-card: #132E35;
  --color-aqua: #00D2C8;
  --color-accent: #FF6B6B; /* Coral como acento principal */
}

/* Botón de acción principal con el color de acento */
.btn-primary {
  background-color: var(--color-accent);
  color: #FFFFFF;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 14px rgba(255, 107, 107, 0.35);
}

/* Badge destacado que usa el acento sobre superficie aqua */
.badge-highlight {
  background-color: rgba(255, 107, 107, 0.15);
  color: #FF6B6B;
  border: 1px solid #FF6B6B;
}
```


## Opciones Back

### Back

1. #00F5D4: oklch(0.8681 0.1595 178.2)
2. #B2EBF2: oklch(0.9035 0.0585 205.57)


### Surface

1. #B2EBF2: oklch(0.9035 0.0585 205.57) 
2. #E0F2F1: oklch(0.9476 0.019 192.81)
3. #E0F7FA: oklch(0.9602 0.0244 206.2)

4. blue-dark: #1E3A8A: oklch(0.3791 0.1378 265.52)

5. #E2E8F0: oklch(0.9288 0.0126 255.51)
6. #CBD5E1: oklch(0.869 0.0198 252.89)

7. Soft Lavender,#B4BEFE: oklch(0.8166 0.091 277.31)


### text

1. #0A192F: oklch(0.2136 0.0483 257.95)
2. #0D1117: oklch(0.1763 0.014 258.36)


### muted

1. #E2E8F0: oklch(0.9288 0.0126 255.51)
2. #334155: oklch(0.3717 0.0392 257.29)
3. #C2B6A6: oklch(0.7818 0.0261 75.21)
4. #C8A261: oklch(0.7328 0.0946 79.88)
5. #88A096: oklch(0.6842 0.0306 168.34)
6. #A3B18A: oklch(0.739 0.0564 123.81)
7. #C292A1: oklch(0.7099 0.061 358.25)
8. #9A8C98: oklch(0.6562 0.0239 330.46)




## border

1. #E0F2F1: oklch(0.9476 0.019 192.81)
/ #CCFBF1: oklch(0.9527 0.0498 180.8)

2. #E2E8F0: oklch(0.9288 0.0126 255.51)
/ #CBD5E1: oklch(0.869 0.0198 252.89)

3. #A3E635: oklch(0.8493 0.2073 128.85)
/ #94A3B8: oklch(0.7107 0.0351 256.79)

4. #0D9488 / #004D40
oklch(0.6002 0.1038 184.7) / oklch(0.3755 0.07 176.4)

5. #334155: oklch(0.3717 0.0392 257.29)



## accent

1. #FFD166: oklch(0.8803 0.1348 86.06)
2. #FFB703: oklch(0.8253 0.1706 79.94)
3. #FFE600: oklch(0.9168 0.1915 101.41)
4. #CCFF00: oklch(0.9307 0.2286 123.09)
5. #10B981: oklch(0.6959 0.1491 162.48)




## Mejores

Color de Marca,Soft Aqua,#7FE0D0,"Encabezados, banners, detalles visuales"
Acento Cálido,Peach Puff,#FFDAC1,"Botones secundarios, hover estados"
Fondo Principal,Warm Cream,#FFF8F0,Fondo general cálido
Soporte Botánico,Muted Sage,#B5EAD7,"Badges, etiquetas de producto"
Texto Principal,Charcoal,#2D3748,Lectura principal (contraste suave)


1. #7FE0D0: oklch(0.8425 0.0953 182.09)
2. #FFDAC1: oklch(0.9131 0.0531 56)
3. #FFF8F0: oklch(0.9824 0.013 71.33)
4. #B5EAD7: oklch(0.8951 0.0602 170.93)
5. #2D3748: oklch(0.3351 0.0331 260.91)
6. #CCFBF1: oklch(0.9527 0.0498 180.8)

Aqua Eléctrico,#00D2C8 / #00F5D4
oklch(0.7787 0.1351 188.71) / oklch(0.8681 0.1595 178.2)


Warm Coral,#FF6B6B,"Botones de acción (CTA), estados de alerta y compras."
Fresh Salmon,#FF8E72,"Tarjetas de oferta, badges publicitarios y banners."
Electric Orange,#FF5722,Notificaciones flotantes y llamadas a la acción agresivas.




## Tokens básicos Tailwind

## Concentric CSS

Solución definitiva al "sopa de clases" (class soup).
Cuando una etiqueta HTML acumula 15 o 20 utilidades
##### ordenarlas de afuera hacia adentro permite que cualquier desarrollador entienda la estructura visual del elemento en un par de segundos


### 5 capas concéntricas

##### Cuando escribas las clases de un elemento, agrúpalas siguiendo estrictamente este orden

```
[1. Layout] ➔ [2. Box Model] ➔ [3. Typography] ➔ [4. Visuals] ➔ [5. Interactivity]
```

### Capa 1: Posicionamiento y Flujo (Layout & Positioning)
#### Cómo se ubica este elemento respecto a la pantalla/padre y cómo organiza a sus hijos?
1. `Posición`: static, relative, absolute, fixed, sticky, inset-0, top-2, z-10
2. `Display`: block, inline-block, flex, grid, hidden
3. `Alineación Flex/Grid`: flex-col, items-center, justify-between, grid-cols-3, gap-4


### Capa 2: Dimensiones y Espaciado (Box Model)
#### Cuánto mide y cuánto espacio físico ocupa o genera?
1. `Ancho y Alto`: w-full, max-w-md, h-12, min-h-screen, aspect-square
2. `Espacio interno (Padding)`: p-6, px-4, py-2
3. `Espacio externo (Margin)`: m-auto, my-4, -mt-2
4. `Desbordamiento`: overflow-hidden, overflow-y-auto


### Capa 3: Tipografía (Typography)
#### Cómo se presenta el contenido de texto que lleva dentro?
1. `Fuente y Tamaño`: font-sans, text-sm, text-2xl
2. `Grosor y Estilo`: font-normal, font-semibold, font-bold, italic
3. `Alineación y Espaciado`: text-center, text-right, leading-relaxed, tracking-wide
4. `Color del texto`: text-slate-900, text-indigo-600


### Capa 4: Superficie y Decoración (Visuals & Styling)
Cómo se ve la piel estética del elemento?
1. `Fondo`: bg-white, bg-slate-900/50, bg-gradient-to-r
2. `Bordes`: border, border-2, border-slate-200
3. `Redondeado`: rounded-lg, rounded-full
4. `Efectos`: shadow-md, shadow-indigo-500/20, opacity-90, backdrop-blur-md


### Capa 5: Interacción y Estados (Interactivity & States)
Cómo reacciona al usuario o cómo cambia dinámicamente?
`Cursores`: cursor-pointer, select-none
`Transiciones y Transformaciones`: transition-all, duration-200, ease-in-out, scale-105
`Modificadores de estado (Hover/Focus/Dark)`: hover:bg-indigo-700, focus:ring-2, dark:bg-slate-800

```
<button class="
  /* 1. Layout */        flex items-center justify-center gap-2
  /* 2. Box Model */     w-full p-3
  /* 3. Typography */    text-sm font-semibold text-white
  /* 4. Visuals */       bg-indigo-600 border border-indigo-500 rounded-xl shadow-lg
  /* 5. Interactivity */ transition-all hover:bg-indigo-700 hover:scale-105
">
  <span>Enviar</span>
</button>
```




## Combinaciones

1. Coral / Melocotón (Complementario Directo):
Al situarse en el lado opuesto del círculo cromático
genera el contraste más dinámico y equilibrado.

2. Terracota / Teja (Cálido y Orgánico):
Resta frialdad al aqua y le aporta una estética terrosa, sofisticada y madura
(muy usada en diseño editorial e interiorismo).

3. Azul Marino / Navy (Profundo y Análogo):
Añade peso visual, elegancia y estructura sin competir con el brillo del aqua.

4. Rosa Palo / Rose Gold (Suave y Moderno):
Crea un contraste sutil de baja saturación, ideal para marcas de estilo de vida o cosmética


## Esquemas

regla 60-30-10 (60% Fondo/Dominante, 30% Secundario/Aqua, 10% Acento):

1. Paleta Orgánica & Editorial (Aqua + Terracota)
Ideal para marcas sustentables, empaques, diseño de interiores o sitios web de autor.

Rol,Nombre del Ton,Código Hex,Función
Dominante (60%),Warm Cream,#F7F4EF,Fondo general y áreas de lectura
Principal (30%),Soft Aqua,#00C9A7,"Encabezados, tarjetas, marcas de agua"
Secundario (10%),Terracotta,#D96B43,"Botones de acción (CTA), detalles destacados"
Texto / Estructura,Deep Espresso,#2B1E1A,Tipografía principal y bordes

2. Paleta Modern SaaS & Digital (Aqua + Coral)
Pensada para aplicaciones móviles, tecnología, plataformas educativas y productos digitales jóvenes

Rol,Nombre del Ton,Código Hex,Función
Dominante (60%),Pure White / Ice,#F4FAFA,Superficie limpia de la interfaz
Principal (30%),Vibrant Aqua,#00D2C8,"Identidad visual, botones secundarios, badges"
Secundario (10%),Electric Coral,#FF6B6B,"Botones principales, notificaciones"
Texto / Estructura,Navy Abyss,#0A192F,Contraste de texto y elementos de navegación

3. Paleta Premium & Dark Mode (Aqua + Azul Marino + Dorado)
Pensada para interfaces financieras, plataformas B2B o identidades corporativas de alta gama

Rol,Nombre del Ton,Código Hex,Función
Dominante (60%),Dark Navy,#0B132B,Fondo oscuro general
Principal (30%),Mint Aqua,#4EECD5,"Puntos focales, gráficos, texto resaltado"
Secundario (10%),Soft Gold,#E0A96D,"Indicadores premium, acentos especiales"
Soporte / Card,Slate Navy,#1C2541,Tarjetas contenedoras y componentes


## Gradientes

tono Aqua con distintas paletas (desde la estética SaaS limpia hasta el estilo Cyberpunk / Dark Mode y Mesh Gradients estilo Apple/Vercel).

1. Gradientes Lineales Modernos (Linear Gradients)

`Aqua & Cyber Violet`: (Estética Neón / Dark Mode)
Combina la energía eléctrica del aqua neón con el violeta profundo
Ideal para secciones hero, tarjetas destacadas o fondos oscuros.

```
.gradient-cyber-aqua {
  background: linear-gradient(135deg, #00F5D4 0%, #7B2CBF 100%);
}
```

`Aqua & Deep Ocean`: (Limpio y Corporativo)

Una transición suave de aqua brillante a azul marino profundo que transmite seguridad y modernidad
Perfecta para fondos de navegadores o encabezados SaaS.

```
.gradient-ocean-depth {
  background: linear-gradient(120deg, #00C9A7 0%, #0A192F 100%);
}
```

`Tropical Sunrise`: (Aqua + Coral + Dorado)
Un gradiente de 3 paradas (3-stop gradient) perfecto para marcas de consumo, landings creativas o botones de llamada a la acción (CTA).

```
.gradient-tropical {
  background: linear-gradient(90deg, #00D2C8 0%, #FF6B6B 50%, #FFD166 100%);
}
```


2. Gradientes de Malla / Aurora (Mesh Gradients)
Los mesh gradients superponen varios gradientes radiales para crear un efecto de iluminación difusa muy popular en sistemas de diseño modernos

```
.mesh-gradient-aqua {
  background-color: #0d1117; /* Fondo base oscuro */
  background-image: 
    radial-gradient(at 0% 0%, rgba(0, 245, 212, 0.4) 0px, transparent 50%),
    radial-gradient(at 100% 0%, rgba(123, 44, 191, 0.4) 0px, transparent 50%),
    radial-gradient(at 50% 100%, rgba(0, 201, 167, 0.3) 0px, transparent 50%);
  filter: blur(20px); /* Efecto difuminado orgánico */
}
```


3. Texto con Gradiente Aqua (Gradient Text)
Aplica el degradado directamente sobre la tipografía de encabezados (<h1>, <h2>) para lograr un titular moderno

```
.aqua-gradient-text {
  background: linear-gradient(90deg, #00F5D4, #89B4FA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
}
```


4. Bordes con Gradiente Aqua (Gradient Borders)
Una técnica muy limpia para resaltar tarjetas en modo oscuro sin recargarlas de color:

```
.gradient-border-card {
  background: #161B22;
  border: 2px solid transparent;
  border-image: linear-gradient(135deg, #00D2C8, #7B2CBF) 1;
  border-radius: 12px;
  padding: 1.5rem;
}
```




# Sitios CSS / UI

1. Capturas de Aplicaciones Reales (UI/UX en Producción)
Mobbin: La librería de referencia definitiva. Contiene miles de capturas de pantalla, flujos de usuario completos y componentes individuales de apps reales (iOS, Android y Web) filtrables por tipo de pantalla (onboarding, ajustes, modales, dashboards).
Refero: Gran catálogo de pantallas y componentes de productos SaaS y aplicaciones web populares. Permite filtrar específicamente por patrones como páginas de precios, listas de tabla, sidebars o campos de búsqueda.
PageFlows: Muestra videos grabados de flujos de interacción reales (procesos de pago, creación de cuenta, configuración) para entender la UX y las transiciones en movimiento

2. Landing Pages & Web Design Moderno
inspirarte en la maquetación de sitios web, portafolios, páginas de venta y landings de alto impacto
Godly: Curaduría de los sitios web más vanguardistas de la red. Enfocado en diseño interactivo, animación moderna, efectos CSS/WebGL y estética web de primer nivel.
Land-book: Galería con las mejores landing pages de la web, clasificadas por sectores (SaaS, e-commerce, portafolios, blogs).
Lapa Ninja: Biblioteca enorme de landing pages reales organizadas por categorías, que incluye capturas a página completa para analizar la estructura vertical del sitio.
Awwwards: El sitio de premiación de diseño web más famoso. Ideal para ver proyectos experimentales, 3D, sitios interactivos y tendencias de ruptura.

3. Conceptos, Tendencias y Microinteracciones
Para explorar estilos visuales, paletas de colores, animaciones o prototipos creativos:
Dribbble: Enfocado en la estética pura, tendencias gráficas, micro-animaciones y maquetas conceptuales. Excelente para buscar ideas de componentes individuales o tarjetas UI.
Behance: Plataforma de Adobe ideal para leer casos de estudio (case studies) profundos, donde los diseñadores muestran todo el proceso de investigación, arquitectura de información y entrega final de la interfaz.

4. Componentes y Sistemas de Diseño
Para ver cómo se estructuran y construyen los componentes de diseño en la industria:
Component Gallery: Un directorio que recopila cómo los sistemas de diseño reales de grandes tecnológicas (Shopify Polaris, GitHub Primer, Radix, etc.) maquetan sus componentes individuales (botones, modales, tabs, tooltips).


CSS:

1. Experimentos, Componentes y Código en Vivo
CodePen: La plataforma de referencia absoluta. Permite ver el código fuente y modificarlo en tiempo real. Puedes buscar directamente términos como CSS art, CSS grid layout, 3D CSS o glassmorphism.
UIverse.io: Biblioteca colaborativa de componentes de interfaz (botones, cards, loaders, conmutadores) creados con HTML y CSS puro, listos para copiar y pegar.    
Style Stage: El sucesor moderno del histórico CSS Zen Garden. Exhibe cómo diferentes diseñadores maquetan la misma página HTML aplicando únicamente estilos CSS.
A Single Div: Colección de ilustraciones vectoriales complejas creadas usando un único elemento <div> y técnicas avanzadas de gradientes, sombras y pseudo-elementos.

2. Galerías de Sitios Web con CSS Innovador
CSS Design Awards: Galería de premiación que evalúa y reconoce los sitios web con mejor diseño, interacción, innovación CSS y usabilidad.
CSS Winner: Plataforma que exhibe diariamente sitios web destacados por su creatividad visual, dominio de animaciones CSS e interacciones web.
One Page Love: Especializado en sitios web de una sola página (landing pages) con maquetaciones modernas, efectos de scroll y estructuras limpias en Flexbox/Grid.

3. Patrones de Maquetación y Efectos Visuales
CSS Layout: Colección de patrones de diseño UI recurrentes (tarjetas, headers, barrados de navegación, split screens) explicados y construidos con CSS Grid y Flexbox sin dependencias de frameworks.
CSS-Tricks Almanac: Además de sus guías, su sección de artículos y showcases muestra el uso creativo de propiedades avanzadas como clip-path, mask-image o backdrop-filter.
CSS Background Patterns (MagicPattern): Galería interactiva de patrones, texturas y geometrías para fondos creados 100% con código CSS sintético.


Tematicas

1. Específicos para Desarrolladores (projects)
Frontend Mentor: La plataforma por excelencia para desarrolladores. Puedes filtrar su catálogo por tipos de aplicación reales (Todo app, E-commerce product page, Calculator app, IP Address Tracker, Portfolio). Te da las capturas, archivos de Figma y assets necesarios.
Frontend Practice: Toma sitios web reales y los clasifica por nivel de dificultad para que los recrees desde cero, ideal para practicar maquetación web real.
Collect UI: Basado en los desafíos Daily UI, organiza más de 100 categorías basadas en la función exacta de la pantalla o app. Puedes ir directamente a secciones como #042 Todo List, #033 Portfolio, #014 Countdown Timer o #001 Sign Up.

2. Específicos para Portafolios (Portfolios & Resumes)
Si buscas ver cómo otros desarrolladores y diseñadores estructuran sus sitios personales:
Cofolios: Galería dedicada exclusivamente a portafolios de estudiantes y desarrolladores/diseñadores que han ingresado a grandes empresas tech (Google, Apple, Meta).
BestFolios: Curaduría enfocada 100% en portafolios y currículums visuales de profesionales de la industria.
One Page Love (Sección Portafolios): Filtra únicamente sitios personales de una sola página, ideales para portafolios limpios y directos.

3. Filtros por Categoría de App (Productividad, Finanzas, SaaS)
Para ver la interfaz de aplicaciones completas según su industria o modelo de negocio:
Refero.design: Permite filtrar por tipo de página de la aplicación (Dashboard, Pricing, Settings, Landing) y por el nicho del producto (Developer Tools, Productivity, AI).
SaaSframe: Colección dedicada a software SaaS. Puedes filtrar por aplicaciones de productividad (similares a Todo apps o gestores de tareas), analítica, comunicación y CRM.
Mobbin (Filtros de App): Permite filtrar por categorías de aplicaciones como Productivity, Finance, Health & Fitness o Social Networking.

4. Específicos para E-Commerce y Tiendas
Commerce Cream: Muestra los diseños de tiendas online más cuidados y modernos creados sobre plataformas como Shopify.
Minimal Gallery: Excelente si buscas diseños web minimalistas, aplicables tanto a tiendas como a sitios de marca personal o blogs.




# Clases Tailwind

## mx-auto:
mx = margin en el eje X.
```
margin-left: auto;
margin-right: auto;

```
##### centrar horizontalmente un elemento que tiene un ancho limitado.

`<div class="mx-auto max-w-6xl">`
max-w-6xl limita el ancho y mx-auto lo centra.
Sin mx-auto, el contenido quedaría pegado al lado izquierdo.



## flex
Convierte el elemento en un flex container.

class="flex" es:

`display: flex;`

Los hijos pasan a participar en un layout Flexbox.

flex-col
flex-1

para controlar cómo se distribuye la página.



## flex-col
flex-direction: column;

Por defecto es: flex-direction: row;

##### Con flex-col, los hijos se colocan verticalmente:
Header
  ↓
Main
  ↓
Footer

encaja perfectamente con la estructura de nuestro layout.



## flex-1
es:
flex: 1 1 0%;

el elemento puede crecer y ocupar el espacio disponible.

<main class="flex-1">
permite que main ocupe el espacio vertical restante entre header y footer.

```
┌─────────────────┐
│ Header          │
├─────────────────┤
│                 │
│ Main            │ ← flex-1
│                 │
├─────────────────┤
│ Footer          │
└─────────────────┘
```

combinado con:
min-h-screen flex flex-col


 
## space-y-24

Agrega espacio vertical entre los hijos directos.

corresponde a una separación de:
margin-top: 6rem;

entre los elementos hijos consecutivos.
no agrega margin al primer hijo.

```
<main class="space-y-24">
  <section>Hero</section>
  <section>About</section>
  <section>Projects</section>
</main>
```

```
Hero

      6rem

About

      6rem

Projects
```

forma cómoda de establecer un ritmo vertical uniforme


## mt-16

margin-top: 4rem;

deja 4rem de separación respecto al elemento anterior.

A diferencia de space-y-24, estamos aplicando el margen directamente a ese elemento.



## border-t

Añade un borde en el lado superior
border-top-width: 1px;


línea horizontal encima del footer:

```
────────────────────────
Footer
```



## min-h-screen


min-height: 100vh;

##### elemento tendrá como mínimo la altura del viewport

Ej: si la pantalla mide 900px de alto:

garantiza que el layout ocupe como mínimo toda la pantalla.

Distinto de: height: 100vh;
fija la altura, mientras que min-height permite crecer.



## w-full

width: 100%;

##### elemento intenta ocupar todo el ancho disponible de su contenedor.

común combinarlo con:

max-w-6xl
mx-auto

```
w-full
   ↓
ocupa todo el espacio disponible

max-w-6xl
   ↓
pero nunca supera cierto ancho

mx-auto
   ↓
si queda espacio sobrante, se centra
```


## max-w-6xl

max-width
max-width: 72rem;

72rem × 16px ≈ 1152px

porque evita que el contenido se extienda demasiado en monitores grandes

sin max-w:

```
┌──────────────────────────────────────────────────────────┐
│ texto ocupando prácticamente toda la pantalla            │
└──────────────────────────────────────────────────────────┘
```

max-w-6xl:

```
┌──────────────────────────────────────────────────────────┐
│           ┌──────────────────────────────┐               │
│           │       contenido              │               │
│           └──────────────────────────────┘               │
└──────────────────────────────────────────────────────────┘
```

mx-auto centra ese bloque



## px-6 py-8

px-6
padding-left: 1.5rem;
padding-right: 1.5rem;

py-8:
padding-top: 2rem;
padding-bottom: 2rem;

```
        ↑ 2rem
← 1.5rem      1.5rem →
        ↓ 2rem
```

sirve para que el contenido no quede pegado a los bordes.


## sm:px-8 lg:px-10

##### variantes responsive.

```
px-6
     ↓
por defecto

sm:px-8
     ↓
desde breakpoint sm

lg:px-10
     ↓
desde breakpoint lg
```

Aprox:

```
Mobile
padding horizontal = 1.5rem

SM
padding horizontal = 2rem

LG
padding horizontal = 2.5rem
```

contenido tenga más aire a medida que aumenta el tamaño de pantalla.


mx-auto
  flex
  min-h-screen
  w-full
  max-w-6xl
  flex-col
  px-6
  py-8
  sm:px-8
  lg:px-10
  
puede leerse casi como una frase:
“Sé un contenedor Flex vertical, ocupa como mínimo toda la pantalla,
usa todo el ancho disponible pero no superes 72rem,
céntrate horizontalmente y deja padding alrededor que aumenta en pantallas mayores.”


cuando añadimos:

<main class="flex-1 space-y-24">

“Este contenido ocupa el espacio vertical disponible y separa uniformemente sus secciones.”



## scroll-mt-24

scroll-margin-top: 6rem;

Es especialmente útil cuando navegamos mediante anchors:
<a href="#projects">Proyectos</a>

y tenemos:
<section id="projects" class="scroll-mt-24">

##### Cuando el navegador hace scroll hacia #projects, deja aproximadamente 6rem de espacio arriba.

Sin:

```
┌─────────────────────────┐
│ HEADER                  │
├─────────────────────────┤
│ Projects ← pegado aquí  │
└─────────────────────────┘
```

scroll-mt-24:

```
┌─────────────────────────┐
│ HEADER                  │
│                         │
│ Projects                │
└─────────────────────────┘
```

útil porque tenemos navegación por anchors



## mb-4

margin-bottom: 1rem;

```
<h2 class="mb-4">
  Proyectos
</h2>
```

crea aproximadamente 16px de separación debajo del título.

```
Título
   ↓
  1rem
   ↓
Contenido
```


## uppercase

##### Transforma visualmente el texto a mayúsculas:

text-transform: uppercase;

no modifica el valor original del texto en tu modelo



## tracking-[0.3em]

##### espaciado entre caracteres

letter-spacing: 0.3em;

tracking = letter-spacing.

##### Corchetes: valor arbitrario: [0.3em]

```
<p class="uppercase tracking-[0.3em]">
  Projects
</p>
```

produce:

```
P R O J E C T S
```

aumenta el espacio entre caracteres individuales.



## tracking-tight

controla letter-spacing, pero utiliza un valor predefinido de Tailwind.

letter-spacing: -0.025em;
reduce ligeramente el espacio entre caracteres

Suele funcionar bien en títulos grandes:

La intención visual es que el título se perciba más compacto.

en títulos grandes puede mejorar bastante la apariencia.



## text-base

Define el tamaño de fuente usando la escala de Tailwind.

Por defecto equivale aproximadamente a:

```
font-size: 1rem;
line-height: 1.5rem;
```

Es: 16px

apropiado para:
párrafos normales;
descripciones;
contenido general;
algunos elementos de navegación.



## leading-7

##### Controla el line-height.

line-height: 1.75rem;

aprox: 28px

Ej:
<p class="text-base leading-7">
  Un párrafo largo...
</p>

Tenemos:
font-size: 16px
line-height: 28px


Resulta:
Esta es una línea de texto
                          ↕
                    28px aproximadamente
                          ↕
Esta es otra línea de texto



## transition-colors

##### Activa una transición cuando cambian propiedades relacionadas con el color

```
transition-property: color,
background-color, border-color,
text-decoration-color, fill, stroke;
```

Ej:
<a class="text-muted transition-colors hover:text-text">
  GitHub
</a>


transition-colors:
muted ──────────────→ text
El cambio es inmediato.

muted ──→ transición suave ──→ text
útil para hover, focus y otros estados visuales relacionados con colores.



## 2. hover:text-muted

variante responsive al estado :hover.

```
&:hover {
  color: ...;
}
```

Ej:
<a class="text-text hover:text-muted">

estado normal → text
al pasar mouse → muted


##### prefijo hover: cuándo se aplica la utilidad



## flex-wrap

flex-wrap: wrap;
##### elementos hijos de un flex pasen a una nueva línea cuando ya no caben.

Ej:

sin:

```
[GitHub] [LinkedIn] [X] [Instagram] [YouTube] ...
```

con:

```
[GitHub] [LinkedIn] [X] [Instagram]
[YouTube] [Website]
```


## gap 3

Define el espacio entre hijos de un contenedor flex o grid.

gap: 0.75rem;
12px

Ej:

```
<div class="flex gap-3">
  <a>GitHub</a>
  <a>LinkedIn</a>
  <a>X</a>
</div>
```

```
[GitHub] ←12px→ [LinkedIn] ←12px→ [X]
```

poner margin individualmente es que el espacio pertenece a la relación entre elementos, no a un elemento concreto.



## shadow-sm

sombra pequeña predefinidas de Tailwind
sensación muy ligera de elevación:



## grid

display: grid;
elemento en un grid container.



## md:grid-cols-2

combinación de:
md:
grid-cols-2


grid-cols-2 significa:
grid-template-columns: repeat(2, minmax(0, 1fr));

##### md: significa que esa regla se activa desde el breakpoint md.

Movil:

```
┌──────────────┐
│ Project 1    │
├──────────────┤
│ Project 2    │
├──────────────┤
│ Project 3    │
└──────────────┘
```

Desde md:

```
┌──────────────┬──────────────┐
│ Project 1    │ Project 2    │
├──────────────┼──────────────┤
│ Project 3    │ Project 4    │
└──────────────┴──────────────┘

```


## transition-shadow

##### cambios de box-shadow sean animados
<article class="shadow-sm transition-shadow hover:shadow-md">



## hover:shadow-md

##### hover aplica una sombra de intensidad media

Normal
└── shadow-sm

Hover
└── shadow-md


combinación de las dos clases es importante:

transition-shadow
       +
hover:shadow-md

##### La primera establece la animación y la segunda establece qué cambia.



## text-sm

Define un tamaño de fuente pequeño dentro de la escala de Tailwind.

```
font-size: 0.875rem;
line-height: 1.25rem;
```
14px
20px de line-height aproximadamente




## Bordes redondeados no filosos

escala básica:

rounded-none   → sin redondeo
rounded-sm     → muy pequeño
rounded        → pequeño/normal
rounded-md     → medio
rounded-lg     → grande
rounded-xl     → bastante grande
rounded-2xl    → muy redondeado
rounded-3xl    → muy redondeado
rounded-full   → completamente redondo

Controlar cada esquina

rounded-t-lg   → superiores
rounded-b-lg   → inferiores
rounded-l-lg   → izquierdas
rounded-r-lg   → derechas

esquinas específicas

rounded-tl-lg
rounded-tr-lg
rounded-br-lg
rounded-bl-lg



# Separacion entre secciones y divs


Ej: significado del section.

1. 

```
<section>
└── card/surface
    ├── email
    ├── location
    └── availability
```

2. 

```
<section = card/surface>
├── email
├── location
└── availability
```

#### La razón no es semántica sino de responsabilidad estructural.

##### El <section> representa la sección temática: Contacto

##### el <div> representa una superficie visual dentro de esa sección

```
┌──────────────────────────────┐
│ email                        │
│ location                     │
│ availability                 │
└──────────────────────────────┘
```

#### Esto nos deja una estructura muy expresiva:
##### Es un buen uso de div: el elemento no tiene semántica propia, pero tiene una responsabilidad visual clara.

Hero → podemos eliminar el div, porque era solo un contenedor de ancho.Contact → mantendría el div, porque representa la card/superficie visual.



# Ritmo vertical: py y mt

py-2 + mt-4

```
<section class="scroll-mt-20 py-2">
  <div class="mt-4 ...">
```

```
section
├── padding-top: 0.5rem
├── margin-top: 1rem del div
├── contenido
└── padding-bottom: 0.5rem
```

Opción py8, sin mt: sacando py-2 y mt-4
section
└── py-8
    └── div.flex


#### Si ya estás utilizando py-* en la sección para controlar el ritmo vertical
##### no conviene introducir además mt-4 sin una razón clara.



# Consideraciones sobre mx-auto

#### mx-auto puede provocar que la card no ocupe naturalmente todo el ancho de su columna.
##### mx-auto aplica márgenes horizontales automáticos al span, lo que puede producir un comportamiento extraño
en lugar de que los chips simplemente se agrupen naturalmente desde el inicio de cada fila, pueden intentar centrarse dentro del espacio disponible.



# bg-white

white: El color blanco puro por excelencia.
slate-50: Un tono gris muy claro con un sutil matiz azulado/frío.
gray-50: Un gris neutro y limpio, muy cercano al blanco.
zinc-50: Un gris claro con un tinte ligeramente más brillante o metálico.
neutral-50: Un gris completamente acromático y suave.




# Agregar pdf

Opciones

1. Elemento <a>, no <button>
Si el PDF ya existe como archivo estático
##### estamos ante una navegación/descarga de un recurso, por lo que:
Sería más apropiado que un <button>

button tendría sentido si Angular tuviera que ejecutar una acción para generar el PDF, abrir un diálogo

2. Visualización más destacada: CTA
donde CV funciona como un CTA secundario.

3. Archivo

public/
└── documents/
    └── cv.pdf

##### Entonces el navegador puede acceder al recurso mediante una ruta pública
La ventaja es que no necesitamos meter el PDF dentro de la capa de dominio

4. Descargar o abrir

el elemento <a> puede utilizar el atributo HTML:

```
<a href="/documents/cv.pdf" download>
  CV
</a>
```

5. Entidad

CV no es una red social ni una plataforma

modelarlo como otra cosa

```
Profile
├── socialLinks
└── documents
    └── cv
```

Podemos mantenerlo como un recurso de presentación.

6. Recurso Público

##### no debería contener información que no quieras que sea pública.

teléfono solo si querés publicarlo;
dirección física completa, evitarla;
documentos con DNI, firmas, datos sensibles, etc., no;
datos profesionales sí.

7. Content-Disposition

Si el servidor entrega el PDF como
Content-Disposition: inline

indicando al navegador que intente mostrarlo en línea; attachment indica que debe tratarlo como descarga

application/pdf
Content-Disposition: inline

8. target="_blank"
La página del portfolio queda abierta en la pestaña original.


Código

```
<a
  class="portfolio-header__cv"
  href="/documents/cv.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  CV
</a>
```

Apunta al recurso estático servido por Angular.
Hace que el PDF se abra en una nueva pestaña.
noopener noreferrer: Es una buena práctica de seguridad cuando usamos target="_blank".





# Botón volver arriba/Back to the Top

esquina inferior derecha, flotando sobre el contenido.

botón:

circular o casi circular;
pequeño, aproximadamente 40–48px;
con ↑ como icono;
superficie accent o surface, dependiendo de qué tan destacado queramos que sea;
sombra sutil para separarlo del contenido


## Botón o enlace: decisión semántica

Como simplemente queremos navegar hacia: #top
un <a href="#top"> es semánticamente más apropiado que un <button>,
estamos navegando hacia otra posición del documento.

BackToTop
└── <a href="#top">
      ↑

No necesitamos JavaScript para realizar el scroll.

ya tenemos: id="top"
en el contenedor principal, por lo que el destino ya existe.


Ubicación:

#### Tiene más sentido como parte del layout global, porque:
##### Es una acción transversal a toda la página.

PortfolioLayout
├── Header
├── Main
├── Footer
└── BackToTop


Visibilidad:

Siempre visible:
extremadamente simple y predecible
puede resultar innecesario cuando el usuario ya está arriba.


#### Accesibilidad: El elemento debería tener un nombre accesible explícito
Y debería tener un estado de focus-visible claro para navegación mediante teclado.


back-to-top.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  template: `
    <a
      href="#top"
      aria-label="Volver al inicio"
    >
      ↑
    </a>
  `,
})
export class BackToTopComponent {}
```

La responsabilidad queda reducida a una sola cosa: volver al inicio
No necesita Input, Output, ThemeService, ElementRef ni JavaScript para hacer scroll.


### PortfolioLayoutComponent

```
import { BackToTopComponent } from '../components/back-to-top.component';

imports: [
  CommonModule,
  PortfolioHeaderComponent,
  BackToTopComponent,
],
``` 

Dentro del footer

```
<footer
  class="mt-16 border-t border-border pt-6 text-sm text-muted"
>
  <p>{{ footerText }}</p>
</footer>

<app-back-to-top />
```


### Estilo

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  template: `
    <a
      href="#top"
      aria-label="Volver al inicio"
      class="fixed right-6 bottom-6 inline-flex size-10 items-center justify-center rounded-full bg-accent text-surface shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:right-8 sm:bottom-8"
    >
      <span aria-hidden="true">↑</span>
    </a>
  `,
})
export class BackToTopComponent {}
```

`fixed`:
Lo saca del flujo normal y lo mantiene asociado al viewport.

`right-6 bottom-6`:
Lo coloca en la esquina inferior derecha con separación del borde.

`size-10`:
Le da el mismo ancho y alto, creando una base cuadrada.

`rounded-full`:
Convierte esa base en un círculo.

`inline-flex items-center justify-center`:
Centra la flecha horizontal y verticalmente.

`bg-accent text-surface`:
tokens del sistema en lugar de colores concretos.

`shadow-sm`:
Lo separa visualmente del contenido.

`hover:opacity-90`:
Da feedback al pasar el cursor.

`focus-visible:ring-2`:
Mantiene un indicador visible para navegación por teclado.

```
<span aria-hidden="true">↑</span>
```

evita que el lector de pantalla intente leer la flecha como contenido adicional
la descripción accesible ya está en aria-label.


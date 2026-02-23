# Cod


# UI

## Atoms

1. Acción y Control:
user inter 
Button: El átomo por excelencia. Incluye sus variantes (primario, secundario, peligro).
IconButton: Un botón que solo contiene un icono.
Checkbox: El cuadro de selección individual.
Radio Button: La opción de selección única.
Switch / Toggle: El interruptor de encendido/apagado.
Link: Un hipervínculo estilizado

2. Entradas de Datos (Inputs) 
Campo donde el usuario introduce información
TextInput: Un campo de texto simple.
TextArea: Campo para textos largos.
Select: El menú desplegable (solo el campo, sin la lógica de búsqueda compleja).
Checkbox / Radio: (También entran aquí como controles de formulario).
Slider: Deslizador para rangos numéricos

3. Visuales y de Texto
Sirven para mostrar contenido o dar estructura visual
Icon: El glifo individual (SVG o fuente de iconos).
Label: El texto que acompaña a un input.
Heading: Títulos de diferentes niveles (h1, h2, etc.).
Paragraph: Bloque de texto básico.
Badge: Una pequeña etiqueta de estado (ej: "Nuevo", "Pendiente").
Avatar: Una imagen de perfil circular (solo la imagen).
Spinner / Loader: El indicador de carga.

4. Estructura y Separación
Ayudan a organizar el espacio.
Divider: Una línea horizontal o vertical para separar contenido.
Spacer: Un componente invisible que solo añade margen o espacio.
Skeleton: La versión "en carga" de un texto o imagen

Atomo: 
Si divido este componente, las partes resultantes siguen siendo útiles por sí solas?

Ej: Buscador
Un buscador tiene un Input y un Button.
Si quitas el botón, el input sigue siendo un input.
Por lo tanto, el Buscador es una Molécula y el Input/Button son Átomos.

```
src/components/atoms/
├── Button/
├── Input/
├── Icon/
├── Typography/
└── Badge/
```




## Styled

1. Creación del Componente Estilizado:
objeto styled importado
seguido del elemento HTML que quieres estilizar (div, button, p, etc.).
Luego, se usan template literals para escribir el CSS.

```
// 1. Importar 'styled'
import styled from 'styled-components';

// 2. Crear un componente estilizado
const StyledButton = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

// 3. Usar el componente como cualquier otro
const MyComponent = () => (
  <StyledButton onClick={() => alert('¡Hiciste clic!')}>
    Haz Clic
  </StyledButton>
);
``` 


2. Estilos Basados en Props
Funciones JS dentro de los template literals
Estas reciben las props del componente como argumento.

```
// Ejemplo: Cambiar el color basado en la prop 'primary'
const StyledButton = styled.button`
  /* Usa una función que recibe 'props' */
  background-color: ${(props) => (props.primary ? '#ff4d4f' : '#0070f3')};
  color: white;
  padding: 10px 20px;
  /* ...otros estilos */
`;

// Uso en React
<StyledButton>Botón Azul</StyledButton>
<StyledButton primary>Botón Rojo</StyledButton> // Pasa la prop 'primary=true'
```


3. Desestructurar props
Para no escribir: 'props.' 

```
const StyledButton = styled.button`
  /* Sacamos 'theme' y '$variant' de la maleta 'props' */
  background: ${({ theme, $variant }) => 
    $variant === 'danger' ? theme.colors.danger : theme.colors.primary
  };
`;
```


4. Uso de "Transient Props" ($)
Si pasas una prop a un Styled Component que solo sirve para el CSS, ponle un prefijo $
Evita que React intente renderizar esa prop en el HTML real (lo que ensucia el DOM y lanza advertencias en la consola).

```
// BIEN: El navegador solo verá <div class="sc-xyz"></div>
const Container = styled.div`
  opacity: ${props => (props.$isLoading ? 0.5 : 1)};
`;

// Uso:
<Container $isLoading={true} />
```


5. Agrupar Estilos con el Objeto S
Para evitar colisiones de nombres y saber rápidamente qué es un componente de React y qué es un Styled Component, muchos equipos usan el objeto S.

En UserCard.styles.js:

```
import styled from 'styled-components';

export const S = {
  Card: styled.article` ... `,
  Title: styled.h2` ... `,
  Avatar: styled.img` ... `
};
```

En UserCard.jsx:

```
import { S } from './UserCard.styles';

function UserCard() {
  return (
    <S.Card>
      <S.Avatar src="..." />
      <S.Title>Juan Pérez</S.Title>
    </S.Card>
  );
}
```

Esto hace que sea obvio que todo lo que empieza con S. es puramente visual.


7. Herencia y Extensión

Extender: 
Crear un nuevo componente basado en uno existente, añadiendo o sobrescribiendo estilos.

```
const BaseButton = styled.button` /* ...estilos base */ `;

const SecondaryButton = styled(BaseButton)`
  background-color: gray; /* Sobrescribe el color */
  font-weight: bold;      /* Añade un estilo */
`;
```


nuevo componente basado en uno existente
añadiendo o sobrescribiendo estilos

```
// 1. Botón base (de ejemplo anterior)
const BotonBase = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

// 2. Extender el BotonBase para crear un botón de advertencia
const BotonAdvertencia = styled(BotonBase)`
  background-color: #ff4d4f; /* Nuevo color */
  color: white;
  border: 1px solid #ff4d4f;

  &:hover {
    background-color: #d9363e;
  }
`;

// Ahora BotonAdvertencia tiene todos los estilos de BotonBase + los nuevos.
```


Bloques de Estilo Reutilizables:
Usar la utility css para crear fragmentos de estilo que se pueden incluir en varios componentes.

```
import { css } from 'styled-components';

const transitionStyles = css`
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

const ButtonWithEffect = styled.button`
  ${transitionStyles} /* Se inyecta el bloque de estilos */
  /* ...otros estilos */
`;
```


Fragmentos de CSS Reutilizables (css Helper)
Conjunto de declaraciones CSS que quieres usar en varios componentes sin extenderlos directamente
utiliza la función css de Styled Components.
Define los estilos dentro de un template literal taggeado con
luego inclúyelo dentro de cualquier otro componente estilizado

```
import styled, { css } from 'styled-components';

// 1. Definir un fragmento de estilo reutilizable
const hoverEffect = css`
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  
  // 2. Aplicar el fragmento en el componente
  ${hoverEffect} 
`;
```


8. attrs/atributos para Props Comunes

permite inyectar props por defecto o pre-calcular props complejas antes de que el componente sea renderizado o estilizado.
Evita la duplicación de código en el JSX y mantiene el DOM más limpio.

```
const InputConAtributos = styled.input.attrs(props => ({
  // Define un 'type' por defecto que no necesita pasarse por JSX
  type: 'text', 
  // Usa una prop dinámica para calcular el placeholder
  placeholder: props.small ? 'Buscar...' : 'Escriba su consulta aquí',
}))`
  padding: 10px;
  border: 1px solid gray;
  font-size: 16px;
`;

// Uso: <InputConAtributos small /> -> tendrá el placeholder 'Buscar...'
```


9. Diseño Basado en Props:
Los componentes presentacionales deben ser flexibles 
y cambiar su apariencia basándose en las props que reciben.

Props de Variante (Mejor Práctica):
Define un conjunto limitado y semántico de variantes de estilo que el consumidor puede elegir 
(ej. primary, secondary, outline).
El componente es fácil de usar y se adhiere a la guía de estilo de la aplicación.

```
// Boton.jsx
// El estilo de la clase se determina por la prop 'variant'
const Boton = ({ children, variant = 'default' }) => (
  <button className={`${styles.base} ${styles[variant]}`}>
    {children}
  </button>
);

// Uso:
<Boton variant="primary">Comprar</Boton>
```

Sobrescritura Controlada:
Permite que el consumidor inyecte sus propias clases usando la prop className
para ajustes menores de layout (ej. margen o tamaño).
Acepta className y úsalo al final de la lista de clases para que el estilo del consumidor tenga prioridad.

```
// Boton.jsx
const Boton = ({ children, className }) => (
  <button className={`${styles.base} ${className}`}> 
    {children}
  </button>
);

// Uso: 
// El consumidor añade una clase de utilidad
<Boton className="mt-4">Finalizar</Boton>
```


Ej: 

```
// Boton.jsx
import styled from 'styled-components';

// Crea un componente que ya tiene estilos
const StyledButton = styled.button`
  background: ${props => props.$primary ? 'blue' : 'gray'};
  color: white;
  border-radius: 4px;
`;

const Boton = (props) => (
  <StyledButton {...props}>
    {props.children}
  </StyledButton>
);
```


10. Agrupar Estilos con el Objeto S

Para evitar colisiones de nombres y saber rápidamente qué es un componente de React y qué es un Styled Component, muchos equipos usan el objeto S.

En UserCard.styles.js:

```
import styled from 'styled-components';

export const S = {
  Card: styled.article` ... `,
  Title: styled.h2` ... `,
  Avatar: styled.img` ... `
};
```

En UserCard.jsx:

```
import { S } from './UserCard.styles';

function UserCard() {
  return (
    <S.Card>
      <S.Avatar src="..." />
      <S.Title>Juan Pérez</S.Title>
    </S.Card>
  );
}
```

Esto hace que sea obvio que todo lo que empieza con S. es puramente visual.




11. Estilos Globales y Clases Externas
A veces necesitas afectar elementos fuera del componente o inyectar CSS puro globalmente.

Estilos Globales con createGlobalStyle
Para resetear estilos del navegador, definir fuentes o aplicar estilos al body o html
debes usar el helper createGlobalStyle.
Se define una vez, se renderiza una vez, y el CSS se inyecta en todo el documento.

```
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Estilos globales que afectan a toda la página */
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.colors.background}; /* Acceso al tema */
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

// Uso en el componente App.jsx: <GlobalStyles />
```



## Global 

CSS que afectan a toda la aplicación sin posibilidad de ser modificadas.
reset.css o normalize.css:
Elimina las diferencias de estilo por defecto que imponen los navegadores
(ej. márgenes por defecto en títulos y listas).
Garantiza que la aplicación se vea igual en Chrome, Firefox, Safari, etc.

base.css:
Estilos aplicados directamente a las etiquetas HTML básicas, como html, body, a (enlaces) o img.
Establece el color de fondo general, la fuente base y el comportamiento global de elementos interactivos.

typography.css:
Importación de fuentes externas (como Google Fonts) y la configuración inicial para <p> y <li>
Define la tipografía que estará disponible para toda la aplicación.


Con Styled Components:
Proporciona la función especial createGlobalStyle

Ej: src/styles/global/GlobalStyles.js

Contiene:

1. Reset/Normalize: Incluye las reglas para estandarizar el CSS entre navegadores
2. Estilos Base: Establece estilos para selectores generales (html, body, a, p, etc.).

```
// src/styles/global/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* 1. Normalize/Reset CSS (o reglas propias) */
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }

  /* 2. Estilos Base del Body (usando variables del tema si está disponible) */
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.base}; /* Acceso al tema */
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    /* ... otros estilos globales ... */
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
```

Este componente <GlobalStyles /> se renderiza una sola vez en la raíz del árbol de componentes de la aplicación (típicamente en App.js).
Cuando se renderiza, los estilos definidos se inyectan en el DOM a nivel global, sin interferir con el CSS modular de los Styled Components.


Crear GlobalStyles:
archivo para definir tus estilos globales

Por ejemplo, src/styles/GlobalStyles.js.

```
// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* 1. Reset Básico y Box-Sizing */
  *,
  *::before,
  *::after {
    box-sizing: border-box; /* Fundamental para el layout */
    margin: 0;
    padding: 0;
  }

  /* 2. Estilos para el Body/HTML */
  html {
    font-size: 100%; /* Tamaño base del font */
    line-height: 1.5;
  }

  body {
    background: #f4f4f4;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }
`;
```


Aplicar los Estilos Globales:
El componente <GlobalStyles /> solo inyecta los estilos cuando es renderizado
Debe colocarse en el componente de más alto nivel de tu aplicación para que se apliquen a todo.

```
// src/App.js o src/Root.js
import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router'; // Tu sistema de ruteo

function App() {
  return (
    <>
      {/* ¡Importante! Se renderiza una sola vez en el nivel superior */}
      <GlobalStyles />
      
      {/* El resto de la aplicación */}
      <Router />
    </>
  );
}
```


Integración con theme:
utilizar las variables del tema (definidas con <ThemeProvider>) dentro de tus estilos globales
Permite que los estilos base (como el color de fondo y el color del texto) cambien automáticamente si cambias el tema (ej. de modo claro a modo oscuro).

Definir y Envolver con ThemeProvider:
Asegúrate de que toda la aplicación está envuelta en un <ThemeProvider> con un objeto theme.

Acceder al Tema en GlobalStyles:
Cuando usas createGlobalStyle, la función recibe el objeto props que incluye el objeto theme.
Puedes acceder a él usando interpolación de funciones:

```
// src/styles/GlobalStyles.js (Versión Avanzada con Tema)
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* ... (Reset CSS Básico) ... */

  body {
    /* Aquí se accede al tema: */
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.base};
  }

  /* Estilo para los enlaces (etiqueta <a>) */
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`;
```


### Estilos de Global

1. Reset o Normalización:
limpiar los estilos por defecto que cada navegador

Box-sizing: Configurar border-box en todos los elementos para que el padding y el borde no afecten el ancho total.
Márgenes y rellenos: Eliminar el margin y padding por defecto de elementos como html, body, ul y figure.
Imágenes: Hacer que las imágenes sean responsivas por defecto (max-width: 100%).

```
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

2. Variables de CSS:
Design System/paleta de colores

Colores: Primarios, secundarios, fondos y alertas.
Tipografía: Tamaños de fuente base y familias tipográficas.
Espaciado: Escalas de padding y margin (ej. 0.5rem, 1rem, 2rem).
Sombras y Bordes: border-radius estándar y box-shadow.

```
:root {
  --primary-color: #3490dc;
  --text-main: #333;
  --bg-body: #f8fafc;
  --font-main: 'Inter', sans-serif;
}
```


3. Estilos de Base para Elementos HTML:
Define cómo se verán los elementos básicos sin necesidad de añadir clases en cada lugar.

Body: Color de fondo, color de texto principal, line-height y suavizado de fuente (antialiased).
Tipografía: Estilos para h1 hasta h6 (tamaños, pesos, márgenes).
Enlaces (a): Quitar el subrayado por defecto y definir los colores de hover.
Listas: Quitar los puntos de las listas (list-style: none) si usas un enfoque de componentes.


4. Clases de Utilidad (Utility Classes):
Pequeñas clases que hacen una sola cosa y se pueden usar en cualquier parte del proyecto.

Layout: Clases para centrar contenido (.container) o esconder elementos (.hidden).
Texto: Alineación (.text-center) o pesos (.font-bold).
Accesibilidad: La clase .sr-only para elementos que solo deben leer los lectores de pantalla.


Rs:
Reset	Borra estilos de navegador (box-sizing, margins).
Tokens / Variables	Define colores, fuentes y espaciados en :root.
Base	Aplica estilos a etiquetas directas (body, p, a, img).
Layout	Define el contenedor principal y el sistema de rejilla base.
Helpers	Clases rápidas como .mt-20 (margin top) o .flex-center.


Ej:

```
/* ==========================================================================
   1. VARIABLES (DESIGN TOKENS)
   ========================================================================== */
:root {
  /* Colores */
  --primary: #3b82f6;
  --primary-dark: #1d4ed8;
  --secondary: #64748b;
  --bg-color: #ffffff;
  --text-main: #1e293b;
  --text-muted: #64748b;
  --error: #ef4444;

  /* Tipografía */
  --font-main: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Espaciado y Bordes */
  --radius: 8px;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  
  /* Sombras */
  --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

/* ==========================================================================
   2. RESET (CSS RESET MODERNO)
   ========================================================================== */
*, *::before, *::after {
  box-sizing: border-box; /* El padding no afecta el ancho total */
}

body, h1, h2, h3, h4, p, ul, ol, figure {
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
  display: block; /* Elimina espacio extra debajo de imágenes */
}

input, button, textarea, select {
  font: inherit; /* Heredan la fuente del padre */
}

/* ==========================================================================
   3. ESTILOS BASE (ETIQUETAS HTML)
   ========================================================================== */
html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-main);
  line-height: 1.5;
  background-color: var(--bg-color);
  color: var(--text-main);
  -webkit-font-smoothing: antialiased; /* Mejora la lectura en Mac */
}

a {
  color: var(--primary);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--primary-dark);
}

h1, h2, h3 {
  line-height: 1.1;
  margin-bottom: var(--spacing-md);
  font-weight: 700;
}

/* ==========================================================================
   4. CLASES DE UTILIDAD (UTILITIES)
   ========================================================================== */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.text-center { text-align: center; }

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sr-only {
  /* Oculta elementos visualmente pero los deja disponibles para lectores de pantalla */
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
```

Consistencia: Al usar --primary en todo el proyecto, si decides cambiar de azul a verde, solo cambias una línea.
Mantenibilidad: El uso de box-sizing: border-box evita el 90% de los problemas de diseño cuando añades paddings a tus cajas.
Accesibilidad: La clase .sr-only es fundamental para que personas con discapacidad visual puedan navegar tu web correctamente.
Legibilidad: El reset de fuentes asegura que tus formularios se vean iguales al resto del texto.



## Theme

Definir las variables y el diseño que pueden cambiar fácilmente
(ej. cambiar de modo claro a modo oscuro).
Variables CSS: Colores, tamaños de fuente, espaciados (spacing), sombras
Tipografía: Definición de la jerarquía de encabezados (h1, h2, etc.).
Mixins/Funciones: Lógica de preprocesador (Sass/Less) para la aplicación.
Variable, Paramétrico
Estilos de alto nivel que definen la apariencia final.
Ej: --color-primary: #007bff;


Definen el aspecto y la sensación de la aplicación utilizando variables (CSS, Sass, Less, o JSS).:
Permite cambiar drásticamente la apariencia con solo modificar unas pocas variables

colors.css o variables.scss:
Definición de las paletas de color, asignadas a variables semánticas
(ej. $primary-color, $error-color).
Permite implementar un tema oscuro cambiando solo los valores de estas variables
(ej. $background-color de blanco a negro).

spacing.css:
Define el sistema de espaciado basado en una escala
(ej. spacing-xs, spacing-lg).
Asegura la consistencia en los márgenes y paddings de todos los componentes

typography.theme.css:
Estilos para elementos de texto más específicos que sí varían por tema, como la familia de fuentes para headings y el tamaño de la fuente base.
Define cómo deben verse los títulos y textos en el tema actual.


Con Styled Components
Tiene un proveedor de contexto de tema llamado ThemeProvider

Ej: src/styles/theme/defaultTheme.js
Este archivo (o varios, si manejas temas oscuro/claro) contiene todas las variables de diseño.

```
// src/styles/theme/defaultTheme.js
export const defaultTheme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    text: '#333333',
    background: '#ffffff',
  },
  fonts: {
    base: 'Arial, sans-serif',
    heading: 'Georgia, serif',
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
  },
  breakpoints: {
      // ... para responsive design
  }
};
```

El objeto defaultTheme se pasa al componente <ThemeProvider>.

El <ThemeProvider> se envuelve en la aplicación (junto con <GlobalStyles />).

```
// App.js (o Root.js)
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/defaultTheme';
import { GlobalStyles } from './styles/global/GlobalStyles';
import Router from './router';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles /> {/* Se inyecta el reset y el base CSS */}
      <Router />
    </ThemeProvider>
  );
}
```

Flujo de Styled Components:

1. Reset/Global:
createGlobalStyle
Aplicar el CSS base y normalize al <body> y al <html>, impactando a toda la aplicación de manera uniforme

2. Theme:
ThemeProvider
Proporcionar variables de diseño (colores, espaciado) a todos los Styled Components a través del objeto props.theme.

3. Componentes:
styled.div / styled.button
Utilizar las variables del tema para crear estilos modulares que solo impactan al componente en cuestión.



Crea un archivo llamado, por ejemplo, src/styles/theme/defaultTheme.js.

```
// src/styles/theme/defaultTheme.js
export const defaultTheme = {
  // Colores (variables semánticas)
  colors: {
    primary: '#007bff',       // Azul de la marca
    secondary: '#6c757d',     // Gris secundario
    text: '#333333',          // Color de texto oscuro
    background: '#ffffff',    // Fondo de página
    error: '#dc3545',         // Color de errores
  },
  // Tipografía
  fonts: {
    base: 'Helvetica, Arial, sans-serif',
    heading: 'Georgia, serif',
    sizeMd: '1rem',
  },
  // Espaciado (basado en una escala consistente)
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
  },
};
```

Envolver la Aplicación con ThemeProvider:
Importa el ThemeProvider de Styled Components
tu objeto de tema en el componente de nivel más alto (App.js o Root.js).

```
// src/App.js (donde se configura la aplicación)
import React from 'react';
import { ThemeProvider } from 'styled-components'; // 1. Importar el componente
import { defaultTheme } from './styles/theme/defaultTheme'; // 2. Importar el objeto de tema
import { GlobalStyles } from './styles/GlobalStyles'; // (Opcional, pero recomendado)

function App() {
  return (
    // 3. Envolver la aplicación y pasar el objeto como prop 'theme'
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles /> {/* Asegúrate de que los estilos globales usan el tema */}
      
      {/* Todo lo que esté aquí dentro tiene acceso al tema */}
      <Router /> 
    </ThemeProvider>
  );
}
```


Accediendo al Tema en los Componentes:
Una vez que la aplicación está envuelta, puedes acceder a las variables del tema de dos formas principales:

Dentro de un Styled Component (Método Preferido)
El objeto theme se pasa automáticamente a las props de tu componente estilizado.

```
// src/components/Button.js
import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.sizeMd};

  &:hover {
    opacity: 0.9;
  }
`;
```


Dentro de un Componente Normal de React (Usando useTheme)
Si necesitas acceder a las variables del tema dentro de un componente funcional (que no está estilizado) o dentro de un custom hook, usas el hook useTheme de Styled Components.

```
// src/hooks/useColorPalette.js
import { useTheme } from 'styled-components';

export const useColorPalette = () => {
  const theme = useTheme(); // 1. Hook para obtener el objeto de tema

  // 2. Puedes usar las variables del tema en tu lógica
  const getPrimaryColor = () => theme.colors.primary;
  const getBackgroundColor = () => theme.colors.background;

  return { getPrimaryColor, getBackgroundColor };
};
```


Modo Claro/Oscuro

Una de las aplicaciones más poderosas del ThemeProvider es el cambio de temas.

En lugar de definir un solo defaultTheme, defines dos: lightTheme y darkTheme
Luego, mantienes un estado en tu componente App que rastrea el tema actual y pasa el objeto de tema seleccionado al ThemeProvider.

```
// Pseudo-código para el cambio de tema en App.js
function App() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme); // O darkTheme

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}> {/* Se inyecta el tema actual */}
      {/* ... el resto de la app ... */}
    </ThemeProvider>
  );
}
```

Al cambiar el estado currentTheme, todos los componentes que usan theme.colors.background se actualizarán automáticamente, cambiando toda la aplicación.



### Estilos de Theme

1. Paletas de Colores Semánticos
En lugar de llamar a un color --azul, en el Theme lo definimos por su función.
Esto permite que "Action" sea azul en modo claro pero quizás un celeste brillante en modo oscuro.

Primary/Secondary/Accent: Los colores de marca.
Surface/Background: Colores para diferentes niveles de profundidad (fondo de página, fondo de tarjeta, fondo de modal).
Semantic: Colores para estados (Success, Error, Warning, Info).


2. Tipografía de Marca
Si el archivo Global define que el body es "Sans-serif", el Theme define los detalles específicos de la marca:

Escala de pesos: --font-weight-bold, --font-weight-medium.
Letter-spacing: Ajustes finos para títulos o botones.
Line-heights específicos: Diferentes para el modo lectura vs. el modo interfaz.


3. Sombras y Elevación
'Theme' define qué tan profundos se ven los elementos.

Shadows: Define niveles de sombras (Shadow-sm, Shadow-md, Shadow-lg).
Glassmorphism: Si el tema es moderno, aquí se definen los efectos de desenfoque (backdrop-filter) y transparencias


4. Definición de Modos (Light & Dark)
Corazón del archivo theme.css. 
Se suelen usar selectores de atributos o clases para cambiar los valores de las variables.

```
/* Valores por defecto (Light Mode) */
:root {
  --text-color: #1a1a1a;
  --bg-color: #ffffff;
  --card-bg: #f5f5f5;
  --border-color: #e0e0e0;
}

/* Sobrescritura para Dark Mode */
[data-theme='dark'] {
  --text-color: #f0f0f0;
  --bg-color: #121212;
  --card-bg: #1e1e1e;
  --border-color: #333333;
}
```



## Ej Light & Dark theme

1. Definición de los objetos de Tema
Primero, creamos dos objetos con las mismas llaves (propiedades) pero distintos valores.

```
// themes.js
export const lightTheme = {
  body: '#F9FAF7',
  text: '#121212',
  accent: '#3b82f6',
  titleShadow: 'rgba(0, 0, 0, 0.1)'
};

export const darkTheme = {
  body: '#121212',
  text: '#F9FAF7',
  accent: '#60a5fa',
  titleShadow: 'rgba(255, 255, 255, 0.1)'
};
```


2. Creación del componente h1 estilizado
Usamos la propiedad props.theme para acceder a los valores que definimos arriba.

```
// Title.js
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  /* El color cambia automáticamente según el tema */
  color: ${(props) => props.theme.text};
  
  /* Podemos usar variaciones dinámicas */
  border-bottom: 4px solid ${(props) => props.theme.accent};
  text-shadow: 2px 2px 4px ${(props) => props.theme.titleShadow};
  
  transition: all 0.30s linear;
  margin-bottom: 20px;
`;
```


3. Implementación en App.js

Donde las cosas suceden, envolvemos nuestra aplicación en el ThemeProvider y le pasamos el objeto de tema actual.

```
import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { Title } from './Title';

// Estilos globales para el fondo del body
const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    transition: all 0.30s linear;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'dark'); // O una lógica de switch
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <Title>¡Hola, este es un Título!</Title>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Cambiar a Modo {theme === 'light' ? 'Oscuro' : 'Claro'}
        </button>
      </div>
    </ThemeProvider>
  );
}

export default App;
```



## Uso de estilos/tokens en un componente con Styled components

### 1. Usando theme provider

Forma estándar de Styled Components
El componente "escucha" el tema que le provee el padre.

1. Definir el Tema (theme.js):

```
export const defaultTheme = {
  colors: {
    primary: '#3b82f6',
    secondary: '#64748b',
    white: '#ffffff',
  },
  spacing: {
    padding: '12px 24px',
    borderRadius: '8px',
  },
  shadows: {
    button: '0 4px 6px rgba(0, 0, 0, 0.1)',
  }
};
```


2. Componente 

Usamos una función para acceder a las propiedades del tema.

```
import styled from 'styled-components';

export const Button = styled.button`
  /* Accediendo a las variables del tema */
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.padding};
  border-radius: ${({ theme }) => theme.spacing.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.button};

  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
    /* También puedes usar lógica condicional */
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
```


### 2. Usando Variables CSS

Si tus estilos están definidos en un archivo global.css como :root, no necesitas funciones de props, simplemente llamas a la variable de CSS nativa.

1. Archivo Global (global.css)

```
:root {
  --btn-bg: #10b981;
  --btn-text: #ffffff;
  --btn-radius: 4px;
}
```

2. Componente Atómico

```
import styled from 'styled-components';

export const GlobalButton = styled.button`
  background-color: var(--btn-bg);
  color: var(--btn-text);
  border-radius: var(--btn-radius);
  padding: 10px 20px;
  border: none;
`;
```


### 3. Componentes con variantes de estilo 

Componente cambie según el tema y según sus propias props (ej: un botón "peligro"):

```
export const AtomicButton = styled.button`
  background-color: ${(props) => 
    props.variant === 'danger' ? props.theme.colors.error : props.theme.colors.primary
  };
  color: white;
  padding: ${({ theme }) => theme.spacing.padding};
  border: none;
`;
```


### 4. Varios temas

1. Definición del Tema (theme.js)
separar los colores y medidas en un objeto
definiremos un lightTheme (que servirá como nuestro "default") y opcionalmente un darkTheme.

```
// src/styles/theme.js

export const lightTheme = {
  colors: {
    primary: '#3b82f6',     // Azul
    secondary: '#10b981',   // Verde
    error: '#ef4444',       // Rojo
    background: '#ffffff',
    text: '#1e293b',
    buttonText: '#ffffff'
  },
  fonts: {
    main: "'Inter', sans-serif",
  },
  spacing: {
    padding: '12px 24px',
    borderRadius: '8px'
  },
  shadows: {
    medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  }
};

// Puedes tener un segundo objeto para el modo oscuro
export const darkTheme = {
  ...lightTheme, // Copiamos bases
  colors: {
    ...lightTheme.colors,
    primary: '#60a5fa',
    background: '#0f172a',
    text: '#f8fafc',
  }
};
```


2. Componente Atómico (Button.js)

Botón "inteligente", sabe leer las propiedades del objeto que le pase el Provider.

```
// src/components/Button.js
import styled from 'styled-components';

export const Button = styled.button`
  /* Acceso a variables del tema */
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.buttonText};
  font-family: ${(props) => props.theme.fonts.main};
  padding: ${(props) => props.theme.spacing.padding};
  border-radius: ${(props) => props.theme.spacing.borderRadius};
  box-shadow: ${(props) => props.theme.shadows.medium};

  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.3s;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  /* Ejemplo de variante atómica usando el tema */
  ${(props) => props.variant === 'danger' && `
    background-color: ${props.theme.colors.error};
  `}
`;
```


3. Aplicación principal (App.js)

Inyectamos el tema para que todos los componentes hijos (como el botón) tengan acceso a él.

```
// src/App.js
import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { Button } from './components/Button';

// Estilos globales que también usan el tema
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.main};
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    transition: all 0.25s linear;
  }
`;

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    // El ThemeProvider hace que el objeto 'theme' esté disponible para Button.js
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div style={{ textAlign: 'center' }}>
        <h1>Diseño Atómico con Temas</h1>
        
        {/* Botón Atómico normal */}
        <Button onClick={() => alert('¡Click!')}>
          Botón Primario
        </Button>

        {/* Botón Atómico con variante 'danger' */}
        <Button variant="danger" style={{ marginLeft: '10px' }}>
          Eliminar
        </Button>

        <div style={{ marginTop: '40px' }}>
          <button onClick={toggleTheme}>
            Cambiar a modo {currentTheme === 'light' ? 'Oscuro' : 'Claro'}
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
```



### 5. Solo default theme 

#### 1. Sin Provider (Importación Directa)

Importar objeto de tema directamente en el archivo del componente.
Sin envolver tu app en un Provider
Contra: Importar el archivo en cada componente que crees, son 50 importaciones manuales.

```
// Button.js
import styled from 'styled-components';
import { defaultTheme } from '../styles/theme'; // Importación manual

export const Button = styled.button`
  background-color: ${defaultTheme.colors.primary};
  padding: ${defaultTheme.spacing.padding};
`;
```


#### 2. Provider (Inyección Automática)

Aunque solo tengas un tema, el ThemeProvider te permite acceder a los estilos mediante props.theme sin importar nada extra en tus archivos de componentes.
Código mucho más limpio y "estándar"
Si después decides añadir un modo oscuro, ya tienes toda la infraestructura lista
Necesitas envolver la raíz de tu App.

```
// Button.js
import styled from 'styled-components';

export const Button = styled.button`
  /* No hay importaciones de archivos de estilo aquí */
  background-color: ${props => props.theme.colors.primary};
`;
```


#### 3. Usar defaultProps
La mejor técnica si quieres que tu componente funcione sin el Provider
Además que también se beneficie de él si existe.

```
// Button.js
import styled from 'styled-components';
import { defaultTheme } from '../styles/theme';

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
`;

// Si el ThemeProvider no está presente, usará este objeto por defecto
Button.defaultProps = {
  theme: defaultTheme
};

export default Button;
```


## Archivo index para Theme Provider

La idea es encapsular la lógica de los estilos y proveedores en un componente separado.
De esta forma, tu archivo index.js (o main.jsx en Vite) se mantiene limpio y solo se preocupa de "arrancar" la aplicación.
Crear un Wrapper

1. Crear un archivo de "Proveedores" (AppProviders.js)
Agrupamos todo lo relacionado con el tema, los estilos globales y cualquier otro proveedor (como Redux o Query) que necesites en el futuro.

```
// src/components/AppProviders.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/theme';
import { GlobalStyle } from '../styles/GlobalStyle';

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default AppProviders;
```

2. Configurar el index.js
Ahora, en tu punto de entrada, no verás ni variables de colores, ni lógica de temas, ni definiciones de CSS. 
Solo verás la estructura de la App.

```
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppProviders from './components/AppProviders';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
);
```

Ventajas: 

1. Escalabilidad: Si mañana añades un UserContext o un LanguageProvider, simplemente los agregas en AppProviders.js
Tu index.js no cambia.

2. Legibilidad: Al abrir index.js, cualquier desarrollador entiende inmediatamente que la App está envuelta en proveedores
Sin tener que leer 50 líneas de configuración de CSS.

3. Separación de responsabilidades: index.js: Se encarga del renderizado en el DOM.
AppProviders.js: Se encarga de la configuración del entorno.
App.js: Se encarga de la lógica y rutas de la aplicación.


GlobalStyle con archivo propio

```
// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.background};
    font-family: sans-serif;
  }
  /* Otros estilos globales aquí */
`;
```

Estructura: 

```
src/
  components/
    AppProviders.js   <-- Aquí vive el ThemeProvider
    Button.js         <-- Componente atómico
  styles/
    theme.js          <-- Variables (colores, fuentes)
    GlobalStyle.js    <-- Reset y estilos base
  App.js
  index.js

```


## Archivo index barril

Patrón de diseño que consiste en crear un archivo llamado index.js dentro de una carpeta para "re-exportar" todo lo que hay en ella.

Al importar componentes desde otras carpetas, el código sea mucho más limpio, corto y fácil de leer.

1. Problema: Importaciones "Espagueti"
Carpeta de componentes con varios archivos. 
Sin un archivo de barril, tu código en App.js se vería así:

```
import { Button } from './components/Button/Button';
import { Title } from './components/Title/Title';
import { Card } from './components/Card/Card';
import { Input } from './components/Input/Input';
```

Repetitivo y difícil de mantener si mueves archivos de lugar


2. Solución: index.js
Creamos un archivo index.js dentro de la carpeta src/components/:

```
// src/components/index.js

export * from './Button';
export * from './Title';
export * from './Card';
export * from './Input';
```

o ser especifico (más recomendado)

```
// src/components/index.js

export { Button } from './Button';
export { Title } from './Title';
export { Card } from './Card';
```


3. Importación limpia

Cualquier parte de tu aplicación, puedes importar todo lo que necesites en una sola línea:

```
// src/App.js

import { Button, Title, Card, Input } from './components';
```
No hace falta escribir ./components/index
cuando apuntas a una carpeta, JavaScript busca automáticamente el archivo index.js.


Ventajas:

1. Legibilidad: Menos ruido visual en la parte superior de tus archivos

2. Abstracción: Si cambias el nombre del archivo interno de Button.js a BotonPrimario.js
solo tienes que actualizar el archivo de barril
El resto de tu App no se entera del cambio.

3. Organización: Te permite ver de un vistazo qué componentes están "públicos" para ser usados en el proyecto.

4. Encapsulamiento: Puedes tener archivos internos de apoyo dentro de la carpeta ui que no quieres que el resto de la app use. 
Si no los pones en el index.js, permanecen "ocultos".

5. Facilidad de refactorización: Si mañana decides mover el archivo Button.js a otra subcarpeta, solo cambias la ruta en el archivo barril y no en las 50 pantallas donde usaste el botón.

Ej con carpeta styles

```
// src/styles/index.js
export { lightTheme, darkTheme } from './theme';
export { GlobalStyle } from './GlobalStyle';
```

Y en tu AppProviders.js lo usarías así:

```
import { lightTheme, GlobalStyle } from '../styles';
```

Cuidado:
Aunque los archivos de barril son excelentes para la organización
en proyectos extremadamente grandes con miles de componentes
pueden afectar ligeramente el tiempo de carga en desarrollo 
o el "Tree Shaking" (eliminación de código no usado) si no están bien configurados
Sin embargo, para la mayoría de las aplicaciones, es una mejor práctica estándar.



## App Provider

Un Provider es un componente especial que "provee" datos a todos sus hijos, sin importar qué tan profundo estén en el árbol.

En aplicaciones reales, no solo tienes un proveedor. Tienes varios:
ThemeProvider: Para los colores.
AuthProvider: Para saber si el usuario inició sesión.
LanguageProvider: Para las traducciones.

1. Creamos el envoltorio (AppProviders.js)

```
// src/providers/AppProviders.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/theme';
import { GlobalStyle } from '../styles/GlobalStyle';

// 'children' representa a toda tu aplicación (App.js)
const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {/* Aquí podrías añadir más como <AuthProvider> o <CartProvider> */}
      {children}
    </ThemeProvider>
  );
};

export default AppProviders;
```

2. Envolvemos la App (index.js)

Punto de entrada, antes de renderizar la App, asegúrate de que tenga todos estos servicios disponibles

```
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppProviders from './providers/AppProviders';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AppProviders>
    <App />
  </AppProviders>
);
```


## Providers

1. Infraestructura y Datos (Core)
Estos suelen estar en la parte más externa de la aplicación
Casi todo lo demás depende de ellos.

Router Provider: (ej. React Router, TanStack Router)
Gestiona la navegación y las URLs de la aplicación.

Query Client Provider: (ej. TanStack Query / React Query)
Maneja el estado del servidor, la caché de las peticiones API y los estados de carga/error globales.

Store Provider: (ej. Redux, MobX, Zustand -aunque este último no siempre requiere provider-)
Gestiona el estado global complejo de la aplicación.


2. Lógica de Negocio y Seguridad
Proveedores que manejan quién es el usuario y qué puede hacer.

Auth Provider:
Gestiona el estado de sesión (login, logout), tokens JWT y la persistencia del usuario.

User/Permissions Provider:
Almacena los datos del perfil del usuario y sus permisos (roles) para mostrar u ocultar funciones de la interfaz.

Cart/Transaction Provider: 
Común en un e-commerce para manejar el carrito de compras a través de todas las páginas.


3. Interfaz de Usuario (UI/UX)
Cómo se ve y se siente la aplicación.

Theme Provider: (ej. Styled Components, Emotion, MUI)
Inyecta tus variables de colores, fuentes y espaciados (lo que vimos antes).

Toast/Notification Provider:
Permite disparar alertas o notificaciones desde cualquier componente sin necesidad de crear el HTML en cada lugar.

Modal/Dialog Provider: 
Controla la apertura y cierre de ventanas emergentes de forma centralizada.


4. Internacionalización y Localización

I18n Provider: (ej. react-i18next)
Provee las traducciones y el idioma actual (ES, EN, FR) a todos los textos de la app.

Settings Provider:
Guarda preferencias del usuario como formato de moneda, zona horaria o unidades de medida.


5. Jerarquía de Proveedores: Provider Stack
El orden tiene importancia:
Los proveedores más "base" van afuera
Los más específicos adentro

En AppProviders.tsx:

Externo: QueryClientProvider	
Las peticiones API son la base de los datos.

Medio: ThemeProvider	
Necesita estar fuera para que los componentes de UI tengan estilos.

Medio: AuthProvider	
Define qué contenido se puede renderizar dentro.

Interno: I18nextProvider	
Las traducciones suelen ser lo último en aplicarse al texto.

```
const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>
        <AuthProvider>
          <I18nextProvider i18n={i18n}>
            <GlobalStyle />
            {children}
          </I18nextProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
```

Sobre el rendimiento:
Cuando tienes muchos providers, cada vez que uno cambia, React podría re-renderizar partes de la aplicación
Por eso es vital usar Custom Hooks para consumir estos providers de forma eficiente
No meter toda la lógica en un solo "Mega-Provider".


## Provider Composer

Patrón que se utiliza para solucionar un problema visual y de mantenimiento muy común en React: el Wrapper Hell
El archivo donde envuelves tu App con todos los proveedores termina pareciendo una "escalera" infinita

La idea es crear una función o componente que tome una lista plana de proveedores y los "reduzca"
(utilizando la función .reduce()) en una estructura anidada automáticamente.

1. Componente ProviderComposer.jsx
Archivo "cerebro" que se encarga de anidar los componentes automáticamente.

```
import React from 'react';

const ProviderComposer = ({ providers, children }) => {
  return (
    <>
      {providers.reduceRight((acc, provider) => {
        // 'acc' es el acumulado (el hijo)
        // 'provider' es el elemento actual del array
        return React.cloneElement(provider, { children: acc });
      }, children)}
    </>
  );
};

export default ProviderComposer;
```


2. Uso en AppProviders.jsx
Defines tu lista plana de proveedores

```
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import ProviderComposer from './ProviderComposer';

// Configuraciones previas
const queryClient = new QueryClient();
const theme = { colors: { primary: 'blue' } };

const AppProviders = ({ children }) => {
  return (
    <ProviderComposer
      providers={[
        <QueryClientProvider client={queryClient} />,
        <ThemeProvider theme={theme} />,
        <AuthProvider />,
        <CartProvider />,
        <NotificationProvider />
      ]}
    >
      {children}
    </ProviderComposer>
  );
};

export default AppProviders;
```

En reduceRight: 

1. Punto de partida: Empezamos con children (que es tu componente <App />).
2. Proceso: reduceRight empieza desde el final del array (NotificationProvider) y lo envuelve alrededor de children.
3. Acumulación: El resultado de esa envoltura se convierte en el nuevo "hijo" para el siguiente proveedor en la lista (CartProvider), y así sucesivamente hasta llegar al primero.
4. React.cloneElement: Esta función de React toma un elemento que ya existe (como <AuthProvider />) y le "inyecta" nuevas propiedades (en este caso, los children que acabamos de procesar).

Asegúrate de que los componentes que pasas en el array acepten y rendericen la prop children
Si uno de tus proveedores personalizados no hace algo como {children}
la cadena se romperá y los componentes de adentro no se verán.



## Código Limpio/proyecto/organización limpio

1. Clean Code
Se centran en que el código sea fácil de leer, entender y mantener por otros devs.

S.O.L.I.D:
Conjunto de cinco principios que aseguran que tu código sea escalable y robusto
Como el de Responsabilidad Única (un componente o función debe hacer solo una cosa).

D.R.Y. (Don't Repeat Yourself):
Evitar la duplicación de lógica.
Si escribes el mismo código dos veces, probablemente deba ser una función o componente reutilizable.

K.I.S.S. (Keep It Simple, Stupid):
Priorizar la sencillez sobre la complejidad técnica
Si una solución es "demasiado inteligente", será difícil de depurar.

Y.A.G.N.I. (You Ain't Gonna Need It):
No programar funcionalidades "por si acaso" en el futuro. Solo añade código cuando realmente lo necesites

Nombres Descriptivos:
Usar nombres de variables y funciones que expliquen su propósito
(ej. isUserLoggedIn en lugar de status).

Funciones Pequeñas:
Las funciones no deberían superar las 20-30 líneas.
Si son más largas, probablemente están haciendo demasiadas cosas.


2. Estructura y Organización Limpia
Se centran en dónde viven los archivos y cómo se comunican entre sí.

App Provider Pattern (Composition Root):
Centralizar todos los proveedores de contexto (temas, datos, auth) en un solo lugar para evitar "ensuciar" el punto de entrada de la app.

Archivos de Barril (Barrels):
Usar archivos index.js para simplificar las rutas de importación y ocultar la estructura interna de las carpetas.

Atomic Design:
Metodología que organiza los componentes en niveles de complejidad: Á
tomos (botones), Moléculas (buscadores), Organismos (cabeceras), Plantillas y Páginas.

Feature-based Structure: 
Organizar las carpetas por "funcionalidad" (ej. cart/, auth/, products/)
en lugar de por "tipo de archivo" (ej. components/, services/).

Component Folder Pattern:
Guardar cada componente en su propia carpeta junto con sus estilos, tests y archivos de barril propios.

Custom Hooks Separation:
Extraer toda la lógica de estado y efectos fuera del componente visual y moverla a "Hooks" personalizados para limpiar la vista.

Container/Presentational Pattern:
Separar los componentes que manejan los datos (Lógica) de los que solo muestran información (Interfaz).


### Avanzado

1. Gestión de Estado y Datos
No todo el estado es igual. 
Se divide la lógica de datos según su origen.

Server State vs. Client State:
Separar los datos que vienen de una API (Server) de los datos locales de la interfaz (Client).
Se usan herramientas como TanStack Query para gestionar caché y sincronización

Store Pattern:
Centralizar el estado complejo en un único punto de verdad (como Zustand o Redux) para que sea predecible y fácil de depurar.


2. Patrones de Componentes
Crear componentes que sean verdaderamente flexibles y reutilizables por otros programadores

Compound Components: 
Permitir que varios componentes trabajen juntos para formar una unidad (como un Select y sus Option)
Compartiendo estado implícitamente.

Render Props / Slot Pattern: 
Pasar componentes o funciones como "huecos" para que el usuario del componente decida qué renderizar en ciertas partes.


3. Performance: Rendimiento y Carga
No solo se logre que funcione, sino también que cargue rápido.

Code Splitting / Lazy Loading:
Dividir el código en trozos pequeños para que el usuario solo descargue lo que necesita para la página actual

Memoization:
Evitar cálculos innecesarios o renderizados repetidos usando técnicas para "recordar" resultados previos (useMemo, useCallback).

Tree Shaking:
Configurar el proyecto para que, al compilar, se elimine automáticamente el código de librerías que no estás usando.


4. Reliability: Calidad y Seguridad
Permite que el proyecto no se rompa cuando 10 personas trabajan en él.

Testing Pyramid:
Implementar pruebas en tres niveles
Unitarias (lógica pequeña)
Integración (cómo interactúan los componentes)
E2E (simulación del usuario real).

Static Typing (TypeScript):
El estándar de la industria
Define tipos para tus datos para que el editor te avise de errores antes de que el código se ejecute.

Linter & Formatter (ESLint/Prettier):
Reglas automáticas que obligan a todo el equipo a escribir el código con el mismo estilo y evitar malas prácticas.




## Unión componentes ui


### 1. Átomo y una Molécula

Aplicando composición
El Átomo debe ser lo más genérico posible
La Molécula debe darle un contexto o propósito específico.

Ej: SearchBar (Molécula) utilizando un Input y un Button (Átomos).

1. Átomos
Solo reciben estilos y props básicas.

```
// src/components/atoms/Input.styles.js
import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1; /* Para que ocupe el espacio disponible en la molécula */
`;

// src/components/atoms/Button.styles.js
import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme, $variant }) => 
    $variant === 'primary' ? theme.colors.primary : '#666'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
```


2. Molécula (Unión con Contexto)

Donde los átomos se unen para formar una unidad funcional: el SearchBar 
La molécula define cómo se alinean los átomos y qué sucede cuando interactúan.

```
// src/components/molecules/SearchBar/SearchBar.jsx
import { StyledInput } from '../../atoms/Input.styles';
import { StyledButton } from '../../atoms/Button.styles';
import styled from 'styled-components';

// Estilo local de la molécula para definir el layout
const SearchContainer = styled.form`
  display: flex;
  gap: 8px;
  width: 100%;
  max-width: 400px;
`;

export function SearchBar({ onSearch, placeholder = "Buscar..." }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    onSearch(query);
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      {/* Átomo 1: Input */}
      <StyledInput 
        name="search" 
        placeholder={placeholder} 
        type="text" 
      />
      
      {/* Átomo 2: Button */}
      <StyledButton $variant="primary" type="submit">
        Buscar
      </StyledButton>
    </SearchContainer>
  );
}
```

Reutilización: Puedes usar el mismo StyledButton en un formulario de contacto, en el carrito de compras o en el login
El botón no sabe que está en un buscador.

Responsabilidad Única: El Input solo se encarga de recibir texto
El Button solo se encarga de ser clickeable.
La Molécula (SearchBar) es la única que sabe que al presionar el botón se debe enviar el texto del input.

Mantenimiento: Si decides que todos los inputs de tu app deben tener bordes redondeados, solo cambias el Átomo, y tu Molécula se actualiza automáticamente.


Uso en una Página

```
function HomePage() {
  const handleSearch = (query) => {
    console.log("Buscando productos para:", query);
  };

  return (
    <nav>
      <h1>Mi Tienda</h1>
      {/* Usamos la molécula */}
      <SearchBar onSearch={handleSearch} placeholder="Busca tu iPhone..." />
    </nav>
  );
}
```



## BEM y Tokens


### BEM

1. Bloque: Componente principal (ej., card).
2. Elemento: Parte del Bloque (ej., card__title).
3. Modificador: Variación del Bloque o Elemento (ej., card--dark).
4. Excelente para prevenir conflictos de CSS y para que los desarrolladores entiendan instantáneamente la relación entre los diferentes elementos de un componente


1. Bloque (Block): Entidad independiente que tiene significado por sí misma
Ejemplos: header, container, menu, button, form.
Nomenclatura: Nombre descriptivo 
Ej: `.card, .nav-menu`.

2. Elemento (Element): una parte de un bloque que no tiene significado independiente
Semánticamente atada a su bloque.
Se une al bloque con dos guiones bajos `__`.
Ejemplos: `.card__title, .card__image, .nav-menu__item`.

3. Modificador (Modifier): "bandera" o flag que se usa para cambiar la apariencia, el estado o el comportamiento de un bloque o elemento.
Se une con dos guiones medios `--`.
Ejemplos: `.button--large, .button--disabled, .card__title--highlighted``.


Ej: Card

Maquetando una tarjeta de perfil, aplicando BEM

```
<div class="card">
  <img src="..." class="card__image" />
  
  <div class="card__content">
    <h2 class="card__title">Juan Pérez</h2>
    
    <button class="card__button card__button--active">Seguir</button>
  </div>
</div>
```

CSS: 

```
.card { ... }
.card__image { ... }
.card__title { font-size: 20px; }
.card__button { background: gray; }

/* El modificador solo cambia lo necesario */
.card__button--active { background: blue; }
```


Reglas de BEM: 

1. Solo Clases:
Nunca uses IDs o etiquetas (div, h1) en tu CSS.
BEM se basa exclusivamente en clases para mantener la especificidad baja.

2. No anidación profunda: 
Evita nombres como card__content__title.
La estructura debe ser plana: card__title.
No importa qué tan profundo esté el HTML, el elemento siempre pertenece al bloque.

3. Independencia:
Un bloque debe poder moverse a cualquier parte de la página sin romperse.




### Tokens

Fuente de verdad para los valores de diseño (colores, tipografía, espaciado, sombras).
En lugar de usar el valor #FFFFFF en CSS directamente, se usa un token semántico como color-surface-light.
Fundamental para proyectos que requieren cambios de tema (ej., modo oscuro, marca blanca) y garantiza una consistencia perfecta en todo el stack.

Son los "átomos" de un sistema de diseño.
Son variables visuales que almacenan decisiones de diseño de forma agnóstica a la plataforma, como colores, tipografía, espaciado o sombras

1. Tokens
Imagina que el color de tu marca cambia ligeramente
Tendrías que buscar y reemplazar ese color en cientos de archivos CSS
Con tokens, solo cambias el valor en un lugar.

Tipo	Valor (Hardcoded)	Nombre del Token

Color	#F39C12	color-brand-primary
Espaciado	16px	spacing-medium
Fuente	700	font-weight-bold
Sombra	0 4px 6px ...	shadow-card-elevation


2. Niveles de Tokens
Un sistema profesional suele organizar los tokens en tres capas para mantener el control y la flexibilidad

1. Tokens Globales (Primitivos)
Paleta base de valores crudos. No tienen un uso específico asignado.
Ejemplo: color-blue-500: #2196F3


2. Tokens de Alias (Semánticos)
Relacionan un token global con un contexto o intención
Aquí es donde ocurre la magia del "Modo Oscuro".
Ejemplo: color-background-action: {color-blue-500}
Si cambias a modo oscuro, el token global cambia, pero el nombre semántico sigue siendo el mismo.


3. Tokens de Componente
Específicos para un componente y suelen heredar de los semánticos
Ejemplo: button-primary-bg: {color-background-action}


React (JSON -> Theme):
1. Los tokens se exportan desde herramientas de diseño como Figma en formato JSON.
2. Luego, los usamos en nuestro ThemeProvider (que vimos al inicio).

Archivo tokens.json:

```
{
  "spacing": {
    "sm": "8px",
    "md": "16px"
  },
  "colors": {
    "brand": {
      "primary": "#007bff"
    }
  }
}
```

Styled Components:

```
const Button = styled.button`
  padding: ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.brand.primary};
`;
```

Uso: 

Consistencia Multiplataforma: 
Los mismos tokens (JSON) pueden alimentar una web en React, una App en Flutter y una App en Swift

Fuente Única de Verdad (Single Source of Truth):
El equipo de diseño y el de desarrollo hablan el mismo idioma.
Si el diseñador dice "usa spacing-lg", el desarrollador sabe exactamente qué variable usar.

Mantenimiento Masivo: Cambiar la identidad visual de toda una empresa se vuelve una tarea de minutos, no de semanas.

Facilita el Dark Mode: Solo necesitas cambiar el "mapeo" de los tokens semánticos a nuevos valores globales.



1. Adiós a BEM (Nomenclatura automática)
La razón principal por la que nació BEM fue para evitar que las clases de CSS chocaran entre sí (especificidad).
Styled Components soluciona esto por defecto generando nombres de clase aleatorios y únicos (ej: sc-hSskS).

BEM: Usa nombres largos como .button--large para evitar conflictos.
Styled Components: Encapsula el estilo dentro del componente. Ya no necesitas llamar a una clase card__title, simplemente creas un componente llamado Title dentro de tu archivo Card

El "espíritu" de BEM vive en las Props:
Aunque no escribas nombres de clases BEM, usas la lógica de Modificadores a través de las props de React:

```
// En BEM: <button class="button button--large">
// En Styled Components usamos Props:
const Button = styled.button`
  background: blue;
  
  /* Esto es el equivalente al "Modifier" de BEM */
  ${props => props.large && `
    padding: 20px;
    font-size: 20px;
  `}
`;
```


2. Método ideal: Design Tokens + ThemeProvider
Styled Components brilla cuando se usa con Design Tokens
Es el método estándar para aplicaciones profesionales.

En lugar de poner valores fijos en tus componentes, inyectas un objeto de "Tema" (tus tokens) en la raíz de la aplicación
Esto permite que cualquier componente acceda a los colores, espaciados o fuentes oficiales de la marca

```
// 1. Tus Design Tokens
const theme = {
  colors: {
    primary: '#007bff',
    error: '#ff0000'
  },
  spacing: {
    md: '16px'
  }
};

// 2. Uso en el componente
const Card = styled.div`
  padding: ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.primary};
`;
```


Styled Components: props y tokens

1. Tokens (El Tema)

Definimos nuestro objeto de tema que contiene las decisiones de diseño.

```
// theme.js
export const theme = {
  colors: {
    primary: '#4F46E5',
    secondary: '#10B981',
    danger: '#EF4444',
    white: '#FFFFFF',
    textMain: '#1F2937'
  },
  spacing: {
    sm: '8px',
    md: '16px',
    lg: '24px'
  },
  borderRadius: {
    round: '8px',
    circle: '50%'
  }
};
```


2. Componente Styled con Props y Tokens

Usamos una función dentro del template literal para acceder tanto a las props que le enviamos al componente como al theme inyectado.

```
import styled from 'styled-components';

// Usamos "$" (Transient Props) para que la prop no se renderice en el HTML final
export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  
  /* Acceso a TOKENS de espaciado */
  border-radius: ${props => props.theme.borderRadius.round};
  
  /* Lógica de PROPS para el tamaño */
  padding: ${props => props.$size === 'small' 
    ? props.theme.spacing.sm 
    : props.theme.spacing.md};

  /* Lógica de PROPS para la variante de color */
  background-color: ${props => {
    switch (props.$variant) {
      case 'secondary': return props.theme.colors.secondary;
      case 'danger': return props.theme.colors.danger;
      default: return props.theme.colors.primary;
    }
  }};

  color: ${props => props.theme.colors.white};

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: #D1D5DB;
    cursor: not-allowed;
  }
`;
```


3. Implementación

Para que esto funcione, debemos envolver nuestra aplicación con el ThemeProvider.

```
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { StyledButton } from './Button.styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', gap: '10px', padding: '20px' }}>
        
        {/* Botón Primario (Default) */}
        <StyledButton>
          Enviar
        </StyledButton>

        {/* Botón de Peligro Pequeño */}
        <StyledButton $variant="danger" $size="small">
          Eliminar
        </StyledButton>

        {/* Botón Secundario Deshabilitado */}
        <StyledButton $variant="secondary" disabled>
          Guardando...
        </StyledButton>

      </div>
    </ThemeProvider>
  );
}
```




# TypeScript

Escribir contratos al principio parece más lento porque debes ser específico, pero evita que todo se derrumbe cuando el proyecto crece.

```
npm create vite@latest mi-proyecto -- --template react-ts
```

1. Interfaces
Definimos el "mapa" de cómo deben ser nuestros objetos
Para un componente de React, lo más común es definir la Interfaz de las Props

```
interface UserCardProps {
  name: string;
  age: number;
  isActive: boolean;
  tags?: string[]; // El '?' significa que es opcional
}

const UserCard = ({ name, age, isActive, tags }: UserCardProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Edad: {age}</p>
      {isActive ? "🟢 En línea" : "🔴 Desconectado"}
    </div>
  );
};
```


2. Hooks
Tipos genéricos < >.

### useState
Si el valor inicial es simple (un string o número), TS lo deduce solo
Pero si es un objeto o un array, debes decírselo:

```
// TS deduce que es 'string'
const [name, setName] = useState("Alex"); 

// Aquí debemos especificar el tipo para el objeto
interface User { id: number; email: string; }
const [user, setUser] = useState<User | null>(null);
```

### useRef
Importante para manipular elementos del DOM:

```
const inputRef = useRef<HTMLInputElement>(null);

const focusInput = () => {
  inputRef.current?.focus(); // El '?' protege de errores si el ref es null
};
```


3. Manejo de Eventos
Cuando pasas una función a un onClick o onChange
TypeScript necesita saber qué tipo de evento es.

```
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};

const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
};
```

En VS escribe la función dentro de la etiqueta <input onChange={(e) => ...} />, pon el mouse sobre la e y verás el tipo exacto.


4. TypeScript + Styled Components
Tema Global con autocompletado, usamos la "Declaración de Módulo".

Archivo 'styled.d.ts' en tu carpeta de estilos:

```
// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      bg: string;
    };
    spacing: (unit: number) => string;
  }
}
```

En cualquier componente styled, cuando escribas ${props => props.theme.} verás tus colores aparecer en la lista de sugerencias


##### Organización: Guarda tus interfaces compartidas en un archivo types.ts y úsalas con el Archivo de Barril

Reutilizacion de tipos: a mayor ventaja de tener los tipos separados

Archivo de Barril (index.ts): 
cuando alguien quiera usar el botón y además necesite su tipo (por ejemplo, para una prop de un componente padre)

```
import { Button, type ButtonProps } from './components/Button';
```




### TS Clean

1. Carpeta componente

```
src/components/Button/
├── index.ts              // Archivo de barril (exporta todo)
├── Button.tsx            // Solo la estructura JSX y conexión
├── Button.styles.ts      // Estilos (Styled Components)
├── Button.types.ts       // Interfaces y Types de TS
└── Button.test.ts        // Pruebas unitarias
```


2. Archivo .tsx Limpio


1. Imports: Primero librerías externas, luego internos.

2. Interfaces/Types: Si son cortos, se quedan aquí. Si son largos, van a .types.ts.

3. Componente:
Estado y Refs: useState, useRef.
Hooks de Datos: useQuery, useContext.
Efectos: useEffect.
Handlers: Funciones como handleClick.
Render (JSX): El return.

4. Estilos (si no van en archivo aparte): Al final del archivo



# Elementos 

## href, link, a

Tienen que ver con conectar archivos o páginas

<a>: enlace interactivo
crea hipervínculos
Es lo que el usuario ve y en lo que hace clic para ir a otra parte.
Navegar entre páginas web, secciones de la misma página o descargar archivos.

```
<a href="https://www.google.com">Ir a Google</a>
```

href: dirección
atributo (prop)/Hypertext Reference
destino: Le dice al navegador a qué dirección exacta debe ir.
Se usa dentro de las etiquetas <a> y <link>.
Sin el href, un enlace no sabría a dónde llevarte.


<link>: conexión interna
no es clicable para el usuario
Se coloca casi siempre dentro del <head> de tu código HTML.
relación entre el documento actual y un recurso externo.
Vincular hojas de estilo (CSS)
añadir el icono de la pestaña (favicon)
fuentes de Google.

```
<link rel="stylesheet" href="estilos.css">
```



# Arq

Data: 

person:
name, surname, profession, pic, bio, proj/links 

proj:
yourPortfolio, aiState...

widget:
date
time
wheater

person has projects

```
				App
(widget)		(proj)			(person)
date			ProjectsInfo	bio
time				links		pic
wheater			 	SocialMedia
```


```
 src/
1.		features
			profile
				components
					profile.jsx
				hooks
				profile.js
			widget
				components
				widget.js				
2. shared
		components
			btn
			main 
			section
			aside
			article
			footer
			time
			img
			link
			embed
			pic
			source
		hooks
		utils
		
		
3. store/globalState

4. api

5. pages

6. styles
		theme
		global
7. provider
8. app.js
``` 


dumb, smart, hook:
hook -> rtn obj/estados
smrt -> rtn dumb le pasa obj/custom hook
dumb -> rtn elemHtml/presen usando info smrt


comp components: 
app: (div)
wid (art) , proj (main), pers (aside)

pers: 
pic/img
bio(p)

proj:
p/a/links
icons/a/links

wid:
art:
date, time, wheater

dumb: children (span, p, li, h1..., a)


Component:

```
src/components/Button/
├── index.ts              // Archivo de barril (exporta todo)
├── Button.tsx            // Solo la estructura JSX y conexión
├── Button.styles.ts      // Estilos (Styled Components)
├── Button.types.ts       // Interfaces y Types de TS
└── Button.test.ts        // Pruebas unitarias
```




Providers:

1. AppProviders.js

```
// src/providers/AppProviders.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/theme';
import { GlobalStyle } from '../styles/GlobalStyle';

// 'children' representa a toda tu aplicación (App.js)
const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {/* Aquí podrías añadir más como <AuthProvider> o <CartProvider> */}
      {children}
    </ThemeProvider>
  );
};

export default AppProviders;
```

2. Envolvemos la App (index.js)

Punto de entrada, antes de renderizar la App, asegúrate de que tenga todos estos servicios disponibles

```
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppProviders from './providers/AppProviders';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AppProviders>
    <App />
  </AppProviders>
);
```



theme provider:

```
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/theme';
import { GlobalStyle } from '../styles/GlobalStyle';
import { Button } from './components/Button';

function App() {
  return (
    // 3. Envolver la aplicación y pasar el objeto como prop 'theme'
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles /> {/* Asegúrate de que los estilos globales usan el tema */}
      
      {/* Todo lo que esté aquí dentro tiene acceso al tema */}
      <Router /> 
    </ThemeProvider>
  );
}
```


default theme:

theme.js:

```
export const defaultTheme = {
  colors: {
    primary: '#3b82f6',
    secondary: '#64748b',
    white: '#ffffff',
  },
  spacing: {
    padding: '12px 24px',
    borderRadius: '8px',
  },
  shadows: {
    button: '0 4px 6px rgba(0, 0, 0, 0.1)',
  }
};
```


atom:

```
// Button.js
import styled from 'styled-components';

export const Button = styled.button`
  /* No hay importaciones de archivos de estilo aquí */
  background-color: ${props => props.theme.colors.primary};
`;
```


barril: 

```
// src/components/index.js

export { Button } from './Button';
export { Title } from './Title';
export { Card } from './Card';
```

Importación limpia
Cualquier parte de tu aplicación, puedes importar todo lo que necesites en una sola línea:

```
// src/App.js

import { Button, Title, Card, Input } from './components';
```

Ej con carpeta styles

```
// src/styles/index.js
export { lightTheme, darkTheme } from './theme';
export { GlobalStyle } from './GlobalStyle';
```

Y en tu AppProviders.js lo usarías así:

```
import { lightTheme, GlobalStyle } from '../styles';
```



# Código

```
 src/
1.		features
			profile
				components
					profile.jsx
				hooks
				profile.js
			widget
				components
				widget.js				
2. shared
		components
		
			atoms
				btn
				main 
				section
				aside
				article
				footer
				time
				img
				link
				embed
				pic
				source
			hooks
			utils
		
		
3. store/globalState

4. api

5. pages

6. styles
		theme
		global
7. app.js
``` 


## atoms





# Testing

1. Unit Testing

Unitarias:
Asegurar que la función, dado un input, produce el output correcto o el efecto secundario esperado.

Mocks, Spies y Stubs:
Mocks: Objetos falsos que reemplazan dependencias externas (ej. llamadas a APIs, acceso a bases de datos) para aislar la unidad bajo prueba.
Spies: Observadores que envuelven una función existente para rastrear si fue llamada, cuántas veces y con qué argumentos.
Uso de jest.fn(), jest.mock(), y jest.spyOn().

Setup y Teardown:
Uso de funciones de hook (beforeAll, beforeEach, afterEach, afterAll) para inicializar y limpiar el estado antes y después de las pruebas.


2. Integration Testing
Probar la interacción entre dos o más unidades (ej. un controlador y un servicio, un componente y una tienda de estado).

Integración de Servicios (Back-End):
Probar endpoints de API utilizando herramientas como supertest para simular solicitudes HTTP (GET, POST, etc.) y verificar las respuestas.
Trabajar con una base de datos de pruebas separada.

Integración de Componentes (Front-End):
Probar cómo interactúan componentes hermanos o padre-hijo (ej. un formulario que pasa datos a un botón).
Simular el rendering y eventos del usuario.


3. E2E

Pruebas de Componentes (ej. con React Testing Library o Vue Test Utils):
Enfoque en las pruebas de comportamiento del usuario en lugar de los detalles internos del componente.
Uso de selectores accesibles (getByRole, getByText).
Disparo de eventos del usuario (fireEvent o userEvent).

Pruebas End-to-End (E2E):
Herramientas: Cypress o Playwright.
Simular un flujo completo del usuario en un navegador real o headless (ej. "Navegar a la página de inicio, iniciar sesión, agregar un artículo al carrito y finalizar la compra").
Configuración y fixtures (datos de prueba).



## Jest/Vitest

1. Asertions

valor que recibes
"matcher" (el comparador)
valor esperado.

```
expect(resultado).toBe(esperado);
//      ^           ^        ^
//    Valor       Matcher   Valor 
//    Actual                Esperado
```


2. Test suite y Test case

1. Test Case (Caso de Prueba)
Es la unidad de prueba más pequeña y atómica
Es un escenario de prueba individual que verifica una única pieza de funcionalidad o una condición específica

Alcance: 
Un Test Case se enfoca en un único resultado
"Verificar que la función de suma devuelve el valor correcto para números positivos".

Estructura: Típicamente consta de tres pasos (el patrón AAA: Arrange, Act, Assert):
Arrange (Preparar): Configurar los datos de entrada.
Act (Actuar): Ejecutar el código que se está probando.
Assert (Aserción): Declarar si el resultado real coincide con el esperado (usando expect().toBe()).

Sintaxis Común: Se define usando test() o it().


2. Test Suite

Contenedor lógico que agrupa una colección de Test Cases relacionados.

Alcance:
Se enfoca típicamente en un componente, un módulo o una característica completa del sistema.
Agrupa casos de prueba que interactúan con el mismo código.

Propósito: Proporciona contexto
Cuando ves el reporte de pruebas, la Suite te dice qué parte del sistema fue probada.

Hooks:
Las Suites a menudo definen hooks de configuración y limpieza
(ej. beforeAll, afterEach) que se ejecutan antes o después de los casos de prueba dentro de esa Suite.

Sintaxis Común: Se define usando describe().

En el código: 
La relación es jerárquica
una Test Suite contiene uno o más Test Cases
Esta organización refleja el código de producción.

Ej: Módulo Calculadora.js

Jerarquía	Elemento	Propósito	Sintaxis de Jest/Mocha

Contenedor:
Test Suite
Prueba toda la funcionalidad de la Calculadora.
`describe('Calculadora', ...)`

Unidad:
Test Case
Prueba la función sumar con dos números positivos.
`test('debe sumar dos números', ...)`

Unidad:
Test Case
Prueba la función dividir entre cero (esperando un error).
```
test('debe lanzar error al dividir por cero', ...)
```

Ej de código testing

```
// La Suite de Pruebas: describe el módulo que estamos probando.
describe('Validación de Usuario', () => { 
    // Hooks: Se ejecuta una vez antes de todos los Test Cases en esta Suite.
    beforeAll(() => {
        // Inicializar una conexión a la base de datos de prueba
    });

    // Test Case 1: Prueba si la contraseña es demasiado corta.
    test('debe fallar si la contraseña tiene menos de 8 caracteres', () => { 
        // ARRANGE, ACT, ASSERT...
        expect(validar('abc')).toBe(false); 
    });

    // Test Case 2: Prueba si el usuario existe.
    test('debe devolver un error si el nombre de usuario ya está tomado', async () => { 
        // ARRANGE, ACT, ASSERT...
        await expect(registrarUsuario('admin')).rejects.toThrow('Usuario ya existe');
    });
    
    // Test Case 3: Prueba el caso exitoso.
    test('debe pasar con credenciales válidas', () => {
        expect(validar('Usuario123')).toBe(true);
    });
});
```

La claridad en esta estructura te permite ejecutar solo las pruebas relevantes y comprender inmediatamente, al leer el reporte de la consola, qué funcionalidad ha fallado.


3. Ej Matchers: 
La sintaxis de Jest es muy declarativa y fácil de leer:

```
const calculadora = require('./calculadora');

// Define la Test Suite
describe('Pruebas de Suma', () => { 

    // Define el Test Case
    test('La suma de 1 + 2 debe ser 3', () => { 
        const resultado = calculadora.sumar(1, 2);
        
        // La aserción: expect(valor_real).toBe(valor_esperado)
        expect(resultado).toBe(3); 
    });

    // Otro Test Case
    test('Debe lanzar un error si se pasa un string', () => {
        // Usamos el matcher toThrow para verificar la excepción
        expect(() => calculadora.sumar('a', 2)).toThrow(); 
    });
});
```


4. Describe: 
Organización y el contexto de tus pruebas.
Sirve para definir una Test Suite (Suite de Pruebas).

1. Propósito: Agrupar y Contextualizar
agrupar una colección de pruebas relacionadas, convirtiéndose en el contenedor lógico de tus Test Cases (test() o it()).

Organización Estructural:
describe() crea una jerarquía
Cada describe() se utiliza para

Un Módulo o Componente Completo:
Ej: describe('Componente de Carrito de Compras').

Clase o Función Específica:
Ej: describe('Clase Usuario').

Grupo de funciones relacionadas: 
describe('Manejo de Errores de API').


Contexto en el Reporte:
Los nombres que introduces en describe() se usan para dar contexto al reporte de la consola
Crucial cuando una prueba falla, ya que te dice exactamente qué parte del sistema falló.

Ej: Reporte (sin y con describe):
Sin describe: ✗ debe devolver 5
##### Con describe: ✗ Componente de Carrito de Compras > al añadir 2 productos debe devolver 5


2. Sintaxis y Parámetros
describe() es muy simple y requiere dos argumentos

name (string): Una cadena de texto que describe el grupo de pruebas
(Ej. 'Módulo de Autenticación').

##### fn (función): Una función callback que contiene todos los Test Cases (test() o it()) y potencialmente otros bloques describe() anidados

```
// Sintaxis básica
describe(name, fn);
```

Ej: 

```
// Archivo: calculadora.test.js

describe('Funciones Matemáticas Básicas', () => { // <--- Test Suite Principal
    
    // Test Case 1
    test('sumar debe devolver el resultado correcto', () => {
        expect(sumar(5, 3)).toBe(8);
    });

    // Test Case 2
    test('restar debe devolver un número negativo si el segundo es mayor', () => {
        expect(restar(5, 10)).toBe(-5);
    });
});
```


3. Hooks y Anidamiento

Configuración de Hooks:
describe() es el único lugar donde puedes definir Hooks (ganchos) de configuración y limpieza que se aplican a las pruebas dentro de esa suite

beforeAll(fn): Se ejecuta una vez antes de todos los test() dentro de la describe() actual.
(Ideal para inicializar una DB de prueba).

beforeEach(fn): Se ejecuta antes de cada test() individual dentro de la describe() actual.
(Ideal para reiniciar variables de estado).

afterAll(fn) / afterEach(fn): Hacen lo opuesto a sus contrapartes before.


Anidamiento de Bloques (Nested describe):

Puedes anidar bloques describe() para crear una estructura de pruebas aún más detallada
Es excelente para probar diferentes "estados" o "contextos" de un componente.

```
describe('Clase Cuenta Bancaria', () => { // Nivel 1: Clase
    
    // Hook que afecta a todos los tests en Nivel 1 y 2
    beforeEach(() => { /* Configuración para cada prueba */ });

    // Test Case del Nivel 1
    test('debe inicializar el saldo en cero', () => { ... });

    describe('cuando el saldo es insuficiente', () => { // Nivel 2: Contexto Específico
        
        // Test Case del Nivel 2
        test('debe lanzar un error al intentar retirar', () => {
            // ...
        });
        
        // Test Case del Nivel 2
        test('el saldo no debe cambiar después de un fallo', () => {
            // ...
        });
    });
});
```

Al anidar, el reporte de Jest combinará los nombres, resultando en algo como
Clase Cuenta Bancaria > cuando el saldo es insuficiente > debe lanzar un error al intentar retirar
Proporciona una claridad absoluta.


5. Test

Prueba Individual:
Es definir un escenario específico para verificar una única pieza de funcionalidad o una condición de tu código.

Definición de Test Case: Cada test() es un Caso de Prueba que se ejecuta de forma aislada.
Si un test() falla, no afecta a la ejecución de otros test() en el mismo archivo.

Contiene la Lógica AAA: El cuerpo de la función test() contiene los tres pasos críticos de cualquier prueba:
1. Arrange (Preparar): Inicializar datos, mocks y variables.
2. Act (Actuar): Ejecutar la función o el código que se está probando.
3. Assert (Aserción): Usar expect() y matchers para verificar el resultado.

Sintaxis y Parámetros
Requiere dos argumentos principales:

name (string): Una cadena de texto que describe qué se está probando y cuál es el resultado esperado.
Debe ser legible y claro, a menudo comenzando con verbos como "debe", "debería", o "no debe".

fn (función): Una función callback donde resides el código real de la prueba, incluyendo la lógica AAA
Esta función puede ser asíncrona (async/await) si la lógica a probar lo requiere. 

```
// Sintaxis básica
test(name, fn); 
// Alias
it(name, fn);
```


Ej: Síncrono 

```
const sumar = (a, b) => a + b;

// Test Case Síncrono
test('debe devolver la suma correcta de dos números positivos', () => {
    // Act
    const resultado = sumar(5, 7); 
    
    // Assert
    expect(resultado).toBe(12);
});
```


Asíncrono (async/await)
Una de las grandes ventajas de Jest es su excelente soporte para pruebas asíncronas
Si la función que estás probando devuelve una Promesa, simplemente declaras la función callback del test() como async y usas await para esperar la resolución.

```
// Función que devuelve una Promesa
async function obtenerDatos() {
  return new Promise(resolve => setTimeout(() => resolve({ id: 1 }), 100));
}

// Test Case Asíncrono
test('debe devolver un objeto con la propiedad id después de un retraso', async () => {
    // Act (Usamos await para esperar que la promesa se resuelva)
    const datos = await obtenerDatos(); 
    
    // Assert
    expect(datos).toEqual({ id: 1 });
});
```


6. Aserciones: expect y matchers

Describir el valor real que estás probando.
expect() toma el resultado de tu código y te permite encadenar un Matcher para verificar si cumple con la condición esperada

1. .not:
Modificar casi cualquier matcher
 
2. Comprobaciones (Match-making):
Determina la forma en que Jest compara los valores.

Igualdad Estricta (.toBe)
Igualdad Profunda (.toEqual)

3. Comprobación de Propiedades (Asíncrono):
expect() también se usa para manejar resultados asíncronos y errores:

.resolves
Se utiliza para esperar que una Promesa se resuelva antes de aplicar un matcher.

```
await expect(fetchData()).resolves.toBeDefined();
```

.rejects
Se utiliza para esperar que una Promesa sea rechazada

```
await expect(fetchData()).rejects.toThrow('No encontrado');
```

.toThrow()
Se usa en funciones síncronas para verificar que se lance un error.

```
expect(() => dividir(1, 0)).toThrow();
```


### Unit Testing

Puede ser:

1. Una función individual (ej. sumar(a, b)).
2. Un método dentro de una clase.
3. Una clase completa. 
4. Un módulo que realiza una tarea específica.

El objetivo es confirmar que cada componente individual de tu sistema funciona correctamente según lo diseñado
bajo diversas condiciones de entrada.

Una prueba unitaria no debe depender de recursos externos.
No debe interactuar con la red, la base de datos, el sistema de archivos, o servicios externos (APIs de terceros).

Si una unidad depende de otra unidad (ej. Función A llama a Función B)
La dependencia se reemplaza por un mock o spy (simulación)
para garantizar que solo se pruebe la lógica de la unidad A.


Se adhiere al patrón AAA (Arrange, Act, Assert):

```
// Función a probar (la "unidad")
function calcularDescuento(precio, porcentaje) {
  if (porcentaje >= 1) { // Lógica de negocio
    return precio;
  }
  return precio * (1 - porcentaje);
}

// Prueba Unitaria con Jest
test('debe aplicar un 10% de descuento correctamente', () => {
  // 1. ARRANGE (Preparar)
  const precioOriginal = 100;
  const descuento = 0.10;
  
  // 2. ACT (Actuar)
  const precioFinal = calcularDescuento(precioOriginal, descuento);
  
  // 3. ASSERT (Aserción)
  expect(precioFinal).toBe(90); // Verificar el resultado esperado
});
```



### Mock

Simulacros, permiten aislar la unidad de código que estás probando
Reemplazando sus dependencias externas con sustitutos controlados.

objeto o una función simulada que imita el comportamiento real de una dependencia
Su propósito es doble:

1. Aislamiento: Evitar que la unidad de código a probar interactúe con el mundo exterior (bases de datos, APIs de red, sistema de archivos).
2. Control: Permitir que el desarrollador defina exactamente qué resultado debe producir esa dependencia simulada
(ej. "cuando llames a la API, devuelve este error" o "devuelve estos datos específicos").

Ej: Función obtenerPost():

```
function obtenerPost(id) {
  // Llama a una API real (DEPENDENCIA EXTERNA)
  return fetch(`/api/posts/${id}`); 
}
```

Reemplazas la función fetch por un mock que, al ser llamado, devuelve una respuesta falsa e instantánea.


Mock:
Simular la implementación.
Permite definir qué debe devolver la función simulada y, opcionalmente, verificar que fue llamada.

Spy (Espía):
Observar sin modificar.
Envuelve una función real y registra si fue llamada, con qué argumentos y cuántas veces, pero deja que la función real se ejecute.

Stub:
Sustituir la implementación.
Es una implementación mínima que siempre devuelve una respuesta codificada (hardcoded) para evitar que se ejecute la lógica real.

##### En Jest, la herramienta nativa jest.fn() actúa como una combinación muy flexible de los tres.


1. Mockear Funciones Individuales (jest.fn())
Se usa para reemplazar funciones que están pasando como argumentos o que declaras tú mismo.

```
test('la función callback debe ser llamada una vez', () => {
    // 1. Arrange: Creamos un Mock
    const mockCallback = jest.fn(); 
    
    // 2. Act: Llamamos a la función que usa el callback
    ejecutarCallback(mockCallback);
    
    // 3. Assert: Verificamos si el Mock fue llamado
    expect(mockCallback).toHaveBeenCalledTimes(1); 
});
```

2. Mockear Implementaciones Específicas (.mockReturnValue())
Defines qué valor debe devolver la función simulada al ser llamada.

```
test('debe usar el valor simulado', () => {
    const mockObtenerPrecio = jest.fn();
    
    // El Mock siempre devolverá 100
    mockObtenerPrecio.mockReturnValue(100); 
    
    // Act: La función a probar llamará al Mock
    const precioFinal = procesarPrecio(mockObtenerPrecio); 
    
    expect(precioFinal).toBe(100); 
});
```

3. Mockear Módulos Enteros (jest.mock())
Se usa para simular módulos externos (ej. una librería de HTTP, un utility file).

```
// Archivo: __tests__/post.test.js
// Esto reemplaza el módulo 'axios' en cualquier sitio donde se importe
jest.mock('axios'); 

test('debe devolver los datos del post simulado', async () => {
    // Definimos qué debe devolver axios.get cuando sea llamado
    axios.get.mockResolvedValue({ data: { titulo: 'Simulado' } });

    const post = await obtenerPost(1);
    
    expect(post.titulo).toBe('Simulado');
    expect(axios.get).toHaveBeenCalledWith('/api/posts/1'); // Spy check
});
```


### Setup y Teardown

Uso de funciones de hook (beforeAll, beforeEach, afterEach, afterAll) para inicializar y limpiar el estado antes y después de las pruebas.

Ejecutar código antes o después de la ejecución de tus Test Suites (describe) o Test Cases (test).

1. Propósito: 
Las pruebas, especialmente las unitarias y de integración, deben ser independientes
El resultado de una prueba no debe influir en el resultado de otra.
Los Hooks se aseguran de esto:

Configuración (Setup): Poner el entorno en el estado inicial requerido
(ej. crear un objeto de prueba, inicializar una base de datos simulada).

Limpieza (Teardown): Devolver el entorno a un estado limpio después de que las pruebas han terminado
(ej. eliminar datos creados, cerrar conexiones).


2. Tipos de Hooks
Jest proporciona cuatro funciones de hook principales
diferenciadas por si se ejecutan una vez (a nivel de Suite)
o antes/después de cada prueba (a nivel de Case).

Hook	Ejecución	Nivel de Ejecución	Uso Común

beforeAll(fn):
Una vez antes de que comience el primer test() de la Suite.
Suite (describe)
Inicializar recursos caros que pueden ser reutilizados, como crear una base de datos simulada o configurar un servidor de prueba

afterAll(fn):
Una vez después de que todos los test() de la Suite hayan finalizado
Suite (describe)
Tareas de limpieza pesadas, como apagar el servidor de prueba o cerrar la base de datos

beforeEach(fn):
Antes de cada test() individual dentro de la Suite.
Case (test)
Restablecer el estado de las variables, limpiar mocks o inicializar un componente de UI para que cada prueba comience desde cero

afterEach(fn):
Después de cada test() individual dentro de la Suite.
Case (test)
Limpiar mocks específicos o restaurar el estado global
(ej. restaurar la implementación de console.log).


Ej: Imagina que estás probando una clase Carrito y necesitas asegurarte de que cada prueba comienza con un carrito vacío:

```
// La clase de producción a probar
class Carrito {
    constructor() {
        this.items = [];
    }
    agregar(item) {
        this.items.push(item);
    }
    total() {
        return this.items.length;
    }
}

describe('Funcionalidad del Carrito de Compras', () => {
    let carrito; // Variable que queremos inicializar antes de cada prueba

    // HOOK beforeEach: Garantiza un estado limpio para cada test
    beforeEach(() => {
        // Ejecutado antes del Test 1, antes del Test 2, etc.
        carrito = new Carrito(); 
        console.log("-> Carrito reiniciado."); 
    });

    test('El carrito debe estar vacío al inicio', () => {
        expect(carrito.total()).toBe(0); // Pasa porque beforeEach lo vació
    });

    test('debe agregar un artículo correctamente', () => {
        carrito.agregar('manzana');
        expect(carrito.total()).toBe(1); // Este test se ejecuta con un carrito vacío, gracias al beforeEach
    });
    
    // El Test 3 también se ejecutará con un carrito vacío.
    test('no debe afectar a otras pruebas', () => {
        expect(carrito.items).toEqual([]);
    });

});
```


Hooks en Estructuras Anidadas:
Los hooks operan en el ámbito (scope) del describe() en el que están definidos
Si anidas describe(), los hooks del nivel superior se ejecutan para todos los niveles inferiores.

Si tienes un beforeEach en el describe externo, se ejecutará antes de cada prueba, incluso las que están en el describe anidado.

Esta característica te permite configurar un entorno general (con beforeAll externo)
Luego afinar el estado para subgrupos de pruebas con beforeEach en un describe anidado.



### Vitest

```
npm install -D vitest
```

script: 

```
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui"
  }
}
```

Si ya tienes un archivo de configuración de Vite, solo necesitas añadir la referencia a Vitest

Si prefieres un archivo separado, crea uno llamado vitest.config.ts.

```
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Permite usar 'describe', 'it', etc. sin importarlos en cada archivo
    globals: true,
    // Define el entorno (node por defecto, usa 'jsdom' para React/Vue)
    environment: 'node',
  },
})
```

Test: 

Convención: deben terminar en .test.ts o .spec.ts.

math.ts:

```
export const sumar = (a: number, b: number) => a + b;
```

math.test.ts:

```
import { describe, it, expect } from 'vitest';
import { sumar } from './math';

describe('Pruebas en math.ts', () => {
  it('debería sumar dos números correctamente', () => {
    const resultado = sumar(2, 3);
    expect(resultado).toBe(5);
  });

  it('debería fallar si la suma es incorrecta', () => {
    expect(sumar(1, 1)).not.toBe(3);
  });
});
```

Comandos:

npm run test
Ejecuta los tests en modo Watch 
(se quedan esperando cambios).

npx vitest run
Ejecuta los tests una sola vez 
(ideal para CI/CD).

npm run test:ui 
Abre una interfaz gráfica increíble en el navegador para ver tus tests.

npx vitest --coverage
Genera un reporte de qué tanto código estás probando.

Para coverage Vitest pedirá instalar @vitest/coverage-v8
Apretar y

Vitest vs Jest

Transformación	
Nativa vía Vite (Instantánea) 
Vía Babel/ts-jest (Más lenta)

Modo Watch:
Muy optimizado y granular
Estándar

TypeScript:
Nativo (no requiere config)
Requiere configuración extra

ESM:
Soporte completo nativo
A veces problemático


#### Mock con Vitest

1. vi.fn(): Para simular funciones.

```
const miMock = vi.fn(() => 'Hola');
miMock();
expect(miMock).toHaveBeenCalled();
```


2. Snapshots: 
Para asegurarte de que un objeto o componente no cambie accidentalmente.

```
expect(miObjeto).toMatchSnapshot();
```


3. Hooks: 
Controla el ciclo de vida del test.
beforeEach: Se ejecuta antes de cada test.
afterAll: Se ejecuta una vez al final de todos los tests.


Cuando una función es demasiado peligrosa, lenta o impredecible
Ponemos a un doble en su lugar para que haga el trabajo de forma controlada.

Ej: función que calcula el total de una compra y luego envía un correo de confirmación.
No quieres que cada vez que corras tus tests se envíe un correo real.
Reemplazas la función de enviar correo por un "Mock" que solo anote: "Sí, me llamaron con estos datos".


Los 3 pilares del Mocking:
Vitest utiliza el objeto vi para gestionar todo lo relacionado con simulaciones

1. vi.fn()
Función ficticia para probar callbacks

```
import { vi, expect, it } from 'vitest';

it('debería ejecutar el callback', () => {
  const miMock = vi.fn(); // Creamos el "doble"
  
  // Imaginemos que una función recibe este callback y lo ejecuta
  miMock('Hola Mundo');

  // Podemos preguntar: ¿Te llamaron?
  expect(miMock).toHaveBeenCalled();
  // ¿Con qué argumentos te llamaron?
  expect(miMock).toHaveBeenCalledWith('Hola Mundo');
});
```


2. vi.spyOn()
Observar el comportamiento de un método que ya existe en un objeto o clase
Sin necesariamente romper su funcionalidad original (aunque puedes cambiarla).

```
import { vi, it, expect } from 'vitest';

const calculadora = {
  sumar: (a: number, b: number) => a + b
};

it('debería espiar el método sumar', () => {
  const espia = vi.spyOn(calculadora, 'sumar');

  calculadora.sumar(2, 2);

  expect(espia).toHaveBeenCalledTimes(1);
});
```


3. vi.mock(): Simular un módulo completo
Sirve para reemplazar una librería entera (como axios o un archivo propio).
Ej: Simulando una llamada a una API

```
// api.ts
export const obtenerUsuario = () => fetch('/usuario').then(res => res.json());

// api.test.ts
import { vi, it, expect } from 'vitest';
import { obtenerUsuario } from './api';

// Reemplazamos el módulo entero
vi.mock('./api', () => ({
  obtenerUsuario: vi.fn(() => ({ id: 1, nombre: 'Juan' }))
}));

it('debería retornar el usuario simulado', async () => {
  const usuario = await obtenerUsuario();
  expect(usuario.nombre).toBe('Juan');
});
```

Una vez que tienes un mock, usas estos "matchers" de Vitest para verificar qué pasó:


#### Matchers de mocks

toHaveBeenCalled()
Verifica si la función fue llamada al menos una vez.

toHaveBeenCalledTimes(n)	
Verifica si fue llamada exactamente n veces

toHaveBeenCalledWith(arg)	
Verifica los parámetros exactos de la llamada.

toHaveReturnedWith(val)	
Verifica si la función devolvió un valor específico.


#### Memoria de los mocks
Los mocks guardan el historial de cuántas veces han sido llamados. Si corres varios tests seguidos
El contador de llamadas puede acumularse y darte errores falsos.

##### Limpia tus mocks antes de cada test en tu archivo de configuración o dentro del test:

```
import { beforeEach, vi } from 'vitest';

beforeEach(() => {
  vi.clearAllMocks(); // Borra el historial de llamadas, pero mantiene la implementación
});
```


Ej: Llamada a una api
No queremos que nuestros tests dependan de si el servidor está caído o de si el internet funciona
Queremos probar que nuestro código sabe manejar la respuesta (o el error) que reciba.

1. userService.ts

```
import axios from 'axios';

export const getUserName = async (id: number) => {
  const response = await axios.get(`https://api.ejemplo.com/users/${id}`);
  return response.data.name;
};
```

2. userService.test.ts

```
import { vi, it, expect, describe } from 'vitest';
import axios from 'axios';
import { getUserName } from './userService';

// 1. Le decimos a Vitest que reemplace "axios" por una versión controlada
vi.mock('axios');

describe('getUserName', () => {
  it('debería retornar el nombre del usuario cuando la API responde con éxito', async () => {
    // 2. Definimos qué debe devolver el mock de axios.get
    // Usamos mockResolvedValue porque axios.get es una Promesa (async)
    const mockUser = { data: { id: 1, name: 'Gemini' } };
    vi.mocked(axios.get).mockResolvedValue(mockUser);

    // 3. Ejecutamos la función real
    const nombre = await getUserName(1);

    // 4. Verificaciones (Assertions)
    expect(nombre).toBe('Gemini');
    expect(axios.get).toHaveBeenCalledWith('https://api.ejemplo.com/users/1');
  });

  it('debería manejar errores de la API', async () => {
    // Simulamos un error 404 (Not Found)
    vi.mocked(axios.get).mockRejectedValue(new Error('User not found'));

    // Verificamos que la función lance el error esperado
    await expect(getUserName(99)).rejects.toThrow('User not found');
  });
});
```


#### Herramientas de mocks:

vi.mock('axios')	
"Secuestra" el módulo axios. A partir de aquí, axios.get ya no hace peticiones reales.

vi.mocked(axios.get)
Para que el editor sepa que axios.get ahora tiene métodos de mock (como mockResolvedValue).

.mockResolvedValue()	
Simula una respuesta exitosa (Promise.resolve).

.mockRejectedValue()
Simula un fallo de red o un error del servidor (Promise.reject).


##### vi.mocked

Si usas TypeScript, verás que si intentas hacer axios.get.mockResolvedValue
TS se quejará diciendo que get no tiene esa propiedad. Usar vi.mocked(axios.get)
Simplemente "le avisa" a TypeScript: 'Esto es axios, pero ahora es un mock de Vitest, así que déjame usar sus funciones especiales'.


#### Limpieza de mocks

##### Limpiar los mocks entre cada test para que los resultados de uno no afecten al otro
Ejemplo, el contador de llamadas.

```
import { beforeEach, vi } from 'vitest';

beforeEach(() => {
  vi.restoreAllMocks(); // Resetea el historial y las implementaciones de los mocks
});
```




## RTL

1. Consultas y Matchers

Tipos de Queries:
getBy...: Para elementos que deben estar ahí (falla si no se encuentran).
queryBy...: Para elementos que no deberían estar ahí (devuelve null).
findBy...: Elementos asíncronos (devuelven una promesa).

Prioridad de Selección:
preferir getByRole o getByText

Jest-DOM Matchers:
usar .toBeInTheDocument(), .toHaveStyle(), .toBeDisabled().


2. Interacciones del Usuario:

Un componente no es estático. Debes simular que alguien lo usa.

user-event vs fireEvent:
user-event es superior: simula eventos reales como keydown y mousedown
fireEvent ignora eventos como keydown y mousedown

Simulación de inputs:
Escribir en formularios
marcar checkboxes
seleccionar opciones de un dropdown

Clicks y Focus:
Validar que los botones disparen acciones y que el foco se mueva correctamente.


3. Clean Testing: Queries y Prioridades

Una parte vital de RTL es saber cómo buscar los elementos
RTL te obliga a pensar como un usuario.

Jerarquía de búsqueda recomendada:

getByRole: (Preferida) Busca por función de accesibilidad (button, heading, link).
getByText: Busca por el contenido visual.
getByLabelText: Ideal para formularios (inputs).
getByTestId: (Último recurso) Solo si no hay forma de encontrarlo por accesibilidad. 


### Prácticas

1. Granularidad

Dividimos el comportamiento en pruebas pequeñas
Si el sistema de "deshabilitar botón" se rompe, solo fallará ese test
mientras que el de "escribir en el input" seguirá pasando.

```
describe('ContactForm', () => {
  it('debe permitir escribir en el campo de nombre', async () => {
    render(<ContactForm />);
    const input = screen.getByLabelText(/nombre/i);
    await userEvent.type(input, 'Juan');
    expect(input.value).toBe('Juan');
  });

  it('debe deshabilitar el botón de envío tras hacer clic', async () => {
    render(<ContactForm />);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(button).toBeDisabled();
  });

  it('debe mostrar un mensaje de éxito al enviar', async () => {
    render(<ContactForm />);
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/gracias por tu mensaje/i)).toBeInTheDocument();
  });
});
```


2. Aserciones

Son el veredicto del test: Afirmas que algo debe ser de cierta manera
Si la aserción se cumple, el test pasa
si no, el test falla y te explica por qué.

En React (Vitest/Jest), las aserciones siempre empiezan con la función expect().

1. Elementos de una Aserción
Se divide en tres partes:

1. el valor que recibes
2. el "matcher" (el comparador)
3. el valor esperado.

```
expect(resultado).toBe(esperado);
//      ^           ^        ^
//    Valor       Matcher   Valor 
//    Actual                Esperado
```


3. Matchers Generales (Vitest / Jest)
Se usan para lógica pura, funciones y tipos de datos básicos.

.toBe():
primitivos (strings, números) o misma referencia.
expect(1+1).toBe(2)

.toEqual():
Para comparar objetos o arrays (compara el contenido).
expect({a:1}).toEqual({a:1})

.toBeTruthy():
Verifica que el valor sea "verdadero" (en sentido JS).
expect(user).toBeTruthy()

.toBeFalsy():
Verifica que el valor sea "falso" (null, undefined, 0, false).
expect(error).toBeFalsy()

.toContain():
Verifica si un array o string contiene un elemento.
expect(list).toContain('React')

.toHaveLength():
Verifica el tamaño de un array o string.
expect(arr).toHaveLength(3)


4. Matchers de DOM (jest-dom)
Cuando testeas componentes con RTL, los matchers generales se quedan cortos
Necesitas los de @testing-library/jest-dom, que entienden el HTML.

Más usados:

1. expect(el).toBeInTheDocument():
El más importante.
Verifica que el elemento realmente exista en el DOM.

2. expect(el).toBeVisible():
Verifica que el elemento no solo exista, sino que el usuario pueda verlo
(que no tenga display: none o opacity: 0).

3. expect(el).toBeDisabled():
Ideal para formularios
Verifica si un botón o input tiene el atributo disabled.

4. expect(el).toHaveValue('...'):
Verifica el contenido de un input o textarea.

5. expect(el).toHaveClass('active'):
Verifica si un elemento tiene una clase CSS específica.


5. Aserciones Negativas (.not)
Asegurar que algo no suceda: simplemente agregas .not antes del matcher.

Ej:

```
// Verifica que un mensaje de error NO esté en la pantalla
const errorMessage = screen.queryByText(/error/i);
expect(errorMessage).not.toBeInTheDocument();

// Verifica que el botón NO esté deshabilitado
expect(button).not.toBeDisabled();
```


6. Prácticas

1. Prefiere matchers específicos
Evita usar .toBe(true) para todo: Es mejor usar matchers que den mensajes de error claros.

```
// Mal
expect(button.disabled).toBe(true);

// Bien
expect(button).toBeDisabled();
```

Ventaja: los mensajes de error
Si falla, el segundo te dirá: "Expected element to be disabled but it was not", mientras que el primero solo dirá "Expected true but got false".


2. Múltiple expect con sentido
"un test, una razón", puedes tener varios expect si validan el mismo concepto.

```
it('debe limpiar el formulario tras enviar', async () => {
  render(<CommentForm />);
  const input = screen.getByRole('textbox');
  
  await userEvent.type(input, 'Gran post');
  await userEvent.click(screen.getByRole('button'));

  // Ambas aserciones validan el concepto de "limpieza"
  expect(input).toHaveValue('');
  expect(input).toHaveFocus();
});
```


3. Aserciones Asíncronas
Si estás esperando que algo aparezca tras una llamada a la API, usa findBy y await:

```
const successMessage = await screen.findByText(/enviado con éxito/i);
expect(successMessage).toBeInTheDocument();
```



## Config vitest

```
"scripts": {
  "test": "vitest",
  "test:ui": "vitest --ui",
  "coverage": "vitest run --coverage"
}
```


1. RTL y Vitest:

```
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

2. vite.config.js (o .ts):

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,           // Permite usar 'describe', 'it', 'expect' sin importarlos
    environment: 'jsdom',    // Simula el DOM del navegador
    setupFiles: './src/setupTests.js', // Archivo de configuración inicial
  },
})
```


3. setup.js
archivo src/setupTests.js.

```
import '@testing-library/jest-dom';
```


4. Test

Dumb Component como: src/components/Greeting.jsx

```
export function Greeting({ name }) {
  return (
    <div>
      <h1>Hola, {name}!</h1>
      <button>Click aquí</button>
    </div>
  );
}
```

Creamos el test: src/components/Greeting.test.jsx

```
import { render, screen } from '@testing-library/react';
import { Greeting } from './Greeting';

describe('Greeting Component', () => {
  it('debe renderizar el nombre correctamente', () => {
    // 1. Renderizar el componente
    render(<Greeting name="Gemini" />);

    // 2. Buscar el elemento (usando Roles para accesibilidad)
    const title = screen.getByRole('heading', { name: /hola, gemini!/i });

    // 3. Aserción (lo que esperamos que pase)
    expect(title).toBeInTheDocument();
  });

  it('debe contener un botón', () => {
    render(<Greeting name="Gemini" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
```



## export y export default

Vite utiliza ES Modules

1. Nombrada (export):
Cuando quieres exportar varias cosas de un mismo archivo 
(funciones, constantes, componentes).

Exportación: 
export justo antes de la declaración.

Importación: 
obligatorio usar llaves {}
el nombre debe ser exactamente el mismo. 

ej: utils.js

```
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;
```

Uso: 

```
import { sumar, restar } from './utils';
```


2. por Defecto (export default) 
cuando un archivo representa una sola cosa principal
(ej, componente)

Exportación: 
export default

Importación: 
No se usan llaves
nombre que quieras al importar

Ej: Button.jsx

```
const Button = () => <button>Click</button>;

export default Button;
```

Uso: 

```
import MiBotonPersonalizado from './Button'; 
// El nombre puede cambiar
```


export:
Infinitos por archivo
import { Nombre } from '...'
Llaves necesarias
Renombrado: Requiere as, ej: { Original as Nuevo }

export default:
Solo uno por archivo
import CualquierNombre from '...'
No se usan llaves
Se renombra directamente al importar


Vite usa algo llamado Fast Refresh para actualizar tu navegador al instante cuando guardas
Para que esto funcione de forma óptima, hay un par de reglas no escritas:

1. Componentes en archivos separados:
Es mejor que cada componente de React sea el export default de su propio archivo
Ayuda a que Vite sepa exactamente qué parte de la pantalla refrescar sin recargar toda la página.

2. Archivos de lógica (estilos, utilidades, constantes):
Mejor usar exportaciones nombradas
Así, cuando importas una utilidad, el autocompletado de VS Code te ayuda mejor y el código es más fácil de rastrear.

3. Evita mezclar
Aunque puedes tener un export default y varios export nombrados en el mismo archivo
Puede confundir al sistema de tipos (TypeScript) o a otros desarrolladores.

Si es un componente de React, usa export default
Si es una función de ayuda o un objeto de configuración (como tu theme), usa export nombrado.



# Librería Interna

Organizar código como si fuera un paquete profesional
Ej librería de componentes UI limpia y escalable:

1. Estructura de carpetas:
Lo ideal es que cada componente tenga su propia "caja" (carpeta).
Permite que cada componente tenga su lógica, sus estilos y sus pruebas por separado.

```
src/shared/components/ui/
├── index.js          <-- El "punto de venta" (Barril)
├── Button/
│   ├── Button.jsx    <-- Lógica/Estructura
│   └── index.js      <-- Re-exportación local
├── Input/
│   ├── Input.jsx
│   └── index.js
```


2. Componentes individuales
Dentro de cada carpeta, usamos export default para el componente principal
Pieza única de ese archivo.

Button/Button.jsx
```
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${props => props.theme.colors.primary};
  /* ... tus estilos */
`;

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
```

Barril local: Button/index.js

```
export { default } from './Button';
```


3. Archivo barril central: Librería
archivo src/shared/components/ui/index.js
"registras" todo lo que quieres que el resto de tu app pueda usar

```
// Importamos y exportamos con un nombre específico
export { default as Button } from './Button';
export { default as Input } from './Input';
export { default as Card } from './Card';
```


4. Uso
Importar componentes sin navegar por carpetas profundas

App.jsx

```
import { Button, Input, Card } from './shared/components/ui';

function App() {
  return (
    <AppProvider>
       <Card>
         <h1>Formulario</h1>
         <Input placeholder="Nombre..." />
         <Button>Enviar</Button>
       </Card>
    </AppProvider>
  );
}
```

Ventajas: 
Escalabilidad: Si cambias el nombre de una carpeta interna, solo actualizas el index.js de la librería.
IDE: Al escribir import { y presionar Ctrl + Espacio, VS Code te sugiere todos los componentes disponibles en tu librería.
Encapsulamiento: tener archivos como ButtonUtils.js dentro de la carpeta del botón, y como no lo pones en el index.js, nadie fuera de esa carpeta puede usarlo por error.



# Componente y estilo separado

1. Carpeta

```
Button/
├── Button.jsx         (Estructura y Lógica)
├── Button.styles.js   (Estilos con Styled Components)
└── index.js           (El Barril que exporta el componente)
```


2. Archivo de Estilos: Button.styles.js
Exportaciones nombradas para cada pieza visual

```
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.spacing.borderRadius};
  padding: 10px 20px;
  color: white;
  border: none;
`;

export const IconWrapper = styled.span`
  margin-right: 8px;
`;
```


3. Componente: Button.jsx)
Importamos los estilos
Una técnica es usar import * as S (la "S" de Styles).
Hace que sea súper claro qué es un componente de estilo y qué es un componente de React.

```
import * as S from './Button.styles'; // Importamos todos los estilos como el objeto 'S'

export default function Button({ children, icon, ...props }) {
  return (
    <S.StyledButton {...props}>
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      {children}
    </S.StyledButton>
  );
}
```


4. Archivo Barril (index.js)
No cambia, simplemente sirve de "puente" para que cuando alguien importe desde la carpeta Button, obtenga el componente por defecto.

```
export { default } from './Button';
```

import * as S:

Legibilidad: Si ves <S.StyledButton>, sabes instantáneamente que es un componente de estilo que viene de tu archivo .styles.js
Si ves <Button>, sabes que es un componente con lógica.
##### Sin colisiones: Evitas que un nombre de estilo choque con un nombre de componente de React o de alguna librería externa

En .styles.js: Usas export const ... (Nombrado).
En .jsx: Usas export default function ... (Por defecto).
En index.js: Usas export { default } ... para exponer el componente.



# Componentes Flexibles

operador de propagación (spread operator)
cumplen funciones distintas según dónde se usen.

1. Rest/recolector en Params

```
export default function Button({ children, icon, ...props }) { ... }
```

Dentro de las llaves de los argumentos de la función, se llama Rest Parameter

Extrae children e icon y todo lo demás que le pasen 
Lo guarda dentro del objeto props

```
<Button icon="🔥" onClick={handleClick} type="submit" className="btn-main">
  Enviar
</Button>
```

La función recibirá:

1. children: "Enviar"
2. icon: "🔥"
3. props: { onClick: handleClick, type: "submit", className: "btn-main" } (un objeto con lo sobrante).


2. renderizado: El "Distribuidor" (Spread Attributes)

```
<S.StyledButton {...props}>
```

Dentro de una etiqueta JSX, se llama Spread Attributes
Toma el objeto props que habiamos llenado y "desparrama" todas sus propiedades como si las hubieras escrito una por una en el componente de Styled Components.

En lugar de escribir manualmente:

```
<S.StyledButton onClick={props.onClick} type={props.type} className={props.className}>
```

Simplemente escribes {...props} y React se encarga de pasar cada atributo automáticamente.


Se conoce como Prop Forwarding (Reenvío de propiedades).

1. Atributos Estándar: Tu componente Button es, en el fondo, un botón de HTML
. Al usar ...props, permites que quien use tu componente pueda pasarle cualquier atributo válido de un botón
(type, disabled, onMouseEnter, id, title, etc.)
sin que tú tengas que definirlos todos manualmente en tu código.

2. Librerías de Terceros: Si usas librerías como Framer Motion o React-Hook-Form, estas suelen pasar props especiales a los inputs o botones
Con ...props, te aseguras de que esas props lleguen a donde deben.

3. Código Limpio: Tu componente solo se preocupa por las props que le dan su identidad (como el icon o el children),
delega el resto al elemento HTML.


El orden importa:
Si pones {...props} antes de una propiedad manual, la propiedad manual ganará.

```
// Aquí, aunque pases un 'type' por props, siempre será 'button' porque está después.
<S.StyledButton {...props} type="button">
```


## Desestructuración de Objetos

Al usar el botón:

```
<Button primary type="submit">Hola</Button>
```


1. En el Componente (Button.jsx)
Se usa la desestructuración para separar lo que el componente necesita para su lógica de lo que debe seguir bajando

```
export default function Button({ children, icon, ...props }) {
  // children = "Hola"
  // icon = undefined (porque no lo pasamos)
  // props = { primary: true, type: "submit" } <-- El resto se empaquetó aquí
  
  return (
    <S.StyledButton {...props}> {/* Aquí "desparramas" primary y type */}
      {children}
    </S.StyledButton>
  );
}
```


2. Estilo (Button.styles.js)
StyledButton recibe ese objeto props
Cuando haces ${(props) => ...}
estás accediendo a lo que el componente le "inyectó" 
en el paso anterior.

```
// Opción A: Sin desestructurar (recibes todo el objeto)
background-color: ${(props) => (props.primary ? 'red' : 'blue')};

// Opción B: Desestructurando (solo sacas lo que vas a usar para el CSS)
background-color: ${({ primary }) => (primary ? 'red' : 'blue')};
```


La principal diferencia es qué hay dentro del objeto props en cada paso

1. En el Componente:
El objeto props contiene todo lo que el padre (App.jsx) envió
Al usar { children, ...props }, estás "limpiando" el objeto.

2. En el Styled Component:
El objeto props contiene lo que tú le pases explícitamente más lo que venga en el {...props}.

Detalle: 

Si en Button.jsx haces:

```
{ primary, ...props } = allProps
```

La variable primary ya no está dentro de ...props.

Si quieres que el estilo la vea, tendrías que pasarla manualmente

```
<S.StyledButton primary={primary} {...props}>
```


## Combinar desestructuración y theme

Componente que maneja el tema y sus propias props:

Button.styles.js

```
export const StyledButton = styled.button`
  /* 1. Usamos el tema (desestructurando theme) */
  border-radius: ${({ theme }) => theme.spacing.borderRadius};
  
  /* 2. Usamos una prop propia (desestructurando primary) */
  background-color: ${({ primary, theme }) => 
    primary ? theme.colors.primary : 'gray'};
`;
```


Button.jsx

```
export default function Button({ children, primary, ...props }) {
  return (
    // Pasamos 'primary' explícitamente y el resto (type, onClick, etc.) vía spread
    <S.StyledButton primary={primary} {...props}>
      {children}
    </S.StyledButton>
  );
}
```


# Agrupar Estilos con el Objeto S
Para evitar colisiones de nombres y saber rápidamente qué es un componente de React y qué es un Styled Component, muchos equipos usan el objeto S.

En UserCard.styles.js:

```
import styled from 'styled-components';

export const S = {
  Card: styled.article` ... `,
  Title: styled.h2` ... `,
  Avatar: styled.img` ... `
};
```

En UserCard.jsx:

```
import { S } from './UserCard.styles';

function UserCard() {
  return (
    <S.Card>
      <S.Avatar src="..." />
      <S.Title>Juan Pérez</S.Title>
    </S.Card>
  );
}
```

Esto hace que sea obvio que todo lo que empieza con S. es puramente visual.





# Custom hooks 


## 1. Gestión de Estado y UI

Ayudan a manejar comportamientos visuales repetitivos

1. useToggle:
Ideal para manejar estados binarios como mostrar/ocultar un modal
abrir un menú lateral o cambiar entre "Modo Oscuro" y "Modo Claro"
Centraliza la lógica de cambiar el valor booleano.

2. useForm:
Gestiona el estado de los campos de un formulario, la validación y el envío
Evita tener que crear múltiples useState para cada input de texto.

3. useOnClickOutside:
Muy útil para componentes como menús desplegables o modales
Detecta si el usuario hace clic fuera de un elemento específico para cerrarlo automáticamente


## 2. Interacción con el Navegador (Web APIs)

Permiten que React "escuche" lo que pasa en el entorno del navegador de forma eficiente

1. useLocalStorage:
Sincroniza un estado de React con el localStorage
Permite que los datos (como las preferencias de usuario)
Persistan incluso si se refresca la página.

2. useWindowSize:
Rastrea el ancho y alto de la ventana del navegador en tiempo real.
Fundamental para ejecutar lógica de JavaScript basada en el diseño
como renderizar una lista diferente en móviles vs. escritorio).

3. useMediaQuery:
Similar al anterior, pero devuelve un valor booleano si la pantalla cumple con una regla de CSS específica
Ej, min-width: 768px


## 3. Manejo de Datos y Efectos

Se encargan de la comunicación con servidores o de controlar el tiempo de ejecución de las funciones.

1. useFetch: 
Encapsula la lógica de las peticiones HTTP.
Maneja automáticamente el estado de carga (loading)
Los datos (data) y los errores (error)
Evitando repetir el bloque try/catch en cada componente.

2. useDebounce:
Retrasa la actualización de un valor hasta que haya pasado un tiempo determinado desde la última vez que cambió
Es esencial para buscadores que filtran resultados mientras el usuario escribe, evitando peticiones excesivas a la API.

3. useThrottle:
Similar al debounce, pero asegura que una función se ejecute como máximo una vez cada cierto intervalo
Muy útil para eventos que se disparan muchas veces por segundo, como el scroll.


## 4. Utilidades Avanzadas

Hooks que resuelven problemas específicos de sincronización o ciclos de vida.

1. usePrevious:
Permite acceder al valor que tenía una variable en el renderizado anterior
Es útil para comparar cambios y disparar acciones solo cuando un valor específico ha mutado de cierta forma

2. useInterval:
Una versión "amigable con React" de setInterval.
Se encarga de limpiar el intervalo cuando el componente se desmonta
evitando fugas de memoria (memory leaks).

3. useIsMounted:
Ayuda a verificar si un componente todavía está presente en el DOM antes de actualizar su estado tras una operación asíncrona
evitando errores en la consola


Ventajas: 

Reutilización:
Escribes la lógica una vez y la usas en diez proyectos diferentes.

Testeabilidad:
Puedes probar la lógica del hook de forma aislada sin necesidad de renderizar toda la interfaz.



## Componente descoplado al máximo:

### Fetch

Extraer lógica de un componente smart/contenedor con Custom Hook

La lógica de la llamada a la API y el manejo del estado (isLoading, error, user)
Se encapsulan y se vuelven portátiles.

Custom Hook: función js cuyo nombre comienza con use
Puede llamar a otros Hooks de React (como useState y useEffect).


1. Crear el custom hook 

useUser.js que contendrá la lógica de obtención de datos. 

```
// useUser.js (Custom Hook: Responsabilidad Única: Gestión de Datos)
import { useState, useEffect } from 'react';
import axios from 'axios';

// El hook acepta el ID del recurso que necesita (userId)
const useUser = (userId) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Definimos la función de fetch dentro del efecto
    const fetchUser = async () => {
      setIsLoading(true);
      setError(null); // Limpiar errores anteriores

      try {
        const response = await axios.get(`/api/users/${userId}`);
        setUser(response.data);
      } catch (err) {
        setError(err.message || "Error al obtener los datos del usuario.");
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]); // Dependencia del hook: se re-ejecuta si el ID cambia

  // El hook retorna un objeto con el estado actual
  return { user, isLoading, error };
};

export default useUser;
```


2. Componente contenedor

UserProfileContainer consumidor de lógica

enfocado en el renderizado condicional, sin useState ni useEffect

```
// UserProfileContainer.jsx (Refactorizado: Solo Consumo de Lógica y Renderizado Condicional)
import React from 'react';
import useUser from './useUser'; // Importa el Custom Hook
import UserDetails from './UserDetails'; // Importa el Presentacional

const UserProfileContainer = ({ userId }) => {
  // 1. Llama al Custom Hook para obtener la lógica y el estado
  const { user, isLoading, error } = useUser(userId);

  // 2. Renderizado Condicional
  if (isLoading) {
    return <p>Cargando perfil...</p>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }
  
  if (!user) {
    return <p>Usuario no encontrado.</p>;
  }

  // 3. Pasa los datos limpios al Componente Presentacional
  return <UserDetails user={user} />;
};

export default UserProfileContainer;
```


3. Componente presentacional

```
const UserDetails = ({ user }) => {
  return (
    <div className="profile-card">
      <img src={user.avatarUrl} alt={`Avatar de ${user.name}`} className="avatar" />
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <div className="details">
        {user.bio ? <p>{user.bio}</p> : <p>Sin biografía.</p>}
      </div>
    </div>
  );
};

export default UserDetails;
```

 
### Card

1. Dumb Component (UserCard.jsx): No sabe de dónde vienen los datos

```
// Solo UI. Reutilizable en cualquier parte.
export function UserCard({ name, onEdit, isLoading }) {
  if (isLoading) return <p>Cargando...</p>;

  return (
    <div className="card">
      <h1>{name}</h1>
      <button onClick={onEdit}>Editar</button>
    </div>
  );
}
```   


2. Smart Component o Hook (useUser.js): Maneja la lógica

```
// Se encarga de la data.
function UserProfileContainer({ id }) {
  const { user, loading } = useFetchUser(id); // Lógica externa

  const handleEdit = () => {
    console.log("Lógica compleja de edición aquí");
  };

  return (
    <UserCard 
      name={user?.name} 
      isLoading={loading} 
      onEdit={handleEdit} 
    />
  );
}
```


### Todo

Hook: 

```
// useTodos.js (La "inteligencia" ahora es un hook)
export function useTodos() {
  const [todos, setTodos] = useState([]);
  // ... lógica de fetch y handlers aquí ...
  return { todos, loading, handleToggle };
}

```

Smart: 

```
import { TodoList } from './components/TodoList'; // Un Dumb Component
import { todoService } from './services/todoService';

// TodoPage.jsx (Sigue siendo Smart, pero mucho más legible)
export function TodoPage() {
  const { todos, loading, handleToggle } = useTodos();

  return (
    <main>
      <h1>Mis Tareas</h1>
      <TodoList items={todos} onItemClick={handleToggle} isLoading={loading} />
    </main>
  );
}
```

ui: 

```
const TodoList ({ items, onItemClick, isLoading }) {
	return (
		...
	);
}
```



# Use State

Retorna un array con dos elementos
1. El valor actual del estado.
2. Una función para actualizar ese estado

```
const [estado, setEstado] = useState(valorInicial);

```

estado: es la variable que contiene el valor actual.
setEstado: es la función que se usa para actualizar el estado.
valorInicial: es el valor con el que se inicia el estado (puede ser un número, cadena, objeto, array, etc.).

Cada actualización de estado provoca que el componente se vuelva a renderizar, mostrando el nuevo valor

1. Re-renderizado: 
Cada vez que actualizas el estado con setEstado, React vuelve a renderizar el componente, reflejando los cambios en la interfaz.

2. Inmutabilidad: 
Aunque actualizas el estado, no debes mutar el valor original directamente. 
Usa la función setEstado para garantizar la inmutabilidad, lo cual es esencial para que React detecte los cambios.

3. Funciones como actualización: 

##### Si el nuevo estado depende del estado anterior, es recomendable usar una función en setEstado para asegurarte de que usas el valor más reciente:

```
setContador(prevContador => prevContador + 1);

```

Múltiples estados:
Puedes usar varios para manejar diferentes piezas de estado
en el mismo componente.


##### Actualización sin funcion

1. 

```
function MyButton() {
  const [count, setCount] = useState(0);
  // ...
```

Obtendrás dos cosas de useState: el estado actual (count) y la función que te permite actualizarlo (setCount). 

```
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

2. 
Renderizar el componente varias veces: 
Cada uno tendrá su contador

```
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```


## Objetos/arrays en useState

```
import React, { useState } from 'react';

const Usuario = () => {
  const [user, setUser] = useState({ nombre: 'Juan', edad: 25 });

  const actualizarEdad = () => {
    // Siempre se recomienda mantener la inmutabilidad usando el spread operator
    setUser(prevUser => ({ ...prevUser, edad: prevUser.edad + 1 }));
  };

  return (
    <div>
      <h2>{user.nombre}</h2>
      <p>Edad: {user.edad}</p>
      <button onClick={actualizarEdad}>Cumplir años</button>
    </div>
  );
};

export default Usuario;

```

Se usa un objeto para representar un usuario, y se actualiza una de sus propiedades sin modificar las demás


## Prácticas useState

Gestionar el estado no se trata solo de cambiar valores
sino de hacerlo de forma predecible y eficiente

1. Nomenclatura
la consistencia es clave

Usa siempre la desestructuración de arreglos con el patrón `[algo, setAlgo]`.

```
Mal: const [data, updateData] = useState([]);
Bien: const [users, setUsers] = useState([]);
```

2. Actualizaciones Basadas en el Estado Anterior
Si tu nuevo estado depende del valor del estado anterior
(como un contador o un toggle), siempre usa una función de actualización

React procesa las actualizaciones en lotes y confiar en el valor directo puede causar errores en condiciones de carrera.

```
// Potencialmente problemático
setCount(count + 1);

// Seguro y confiable
setCount(prevCount => prevCount + 1);
```

3. Lazy Initialization
Si el valor inicial de tu estado proviene de una función costosa
(como leer de localStorage o un cálculo complejo)
pásale una función a useState

Esto evita que la función costosa se ejecute en cada renderizado.

```
// Se ejecuta solo una vez al montar el componente
const [token, setToken] = useState(() => {
  return localStorage.getItem('auth-token') || '';
});
```

4. Estado Único o Múltiples Estados
##### regla de oro: Agrupa el estado solo si los valores cambian al mismo tiempo

Inputs de un formulario: Objeto único
Suelen actualizarse y enviarse juntos.

Variables independientes (ej: isModalOpen, searchQuery):
Múltiples useState
Evitas re-renders innecesarios y simplificas la lógica.

5. Evita el Estado Redundante (Estado Derivado)
##### Si puedes calcular un valor a partir de las props o de otro estado, no lo guardes en un useState
Esto evita inconsistencias

Error común: Guardar fullName en el estado cuando ya tienes firstName y lastName.
Mejor práctica: Calcúlalo directamente en el cuerpo del componente.

```
const [firstName, setFirstName] = useState('Jane');
const [lastName, setLastName] = useState('Doe');

// Esto es estado derivado, no necesita un useState propio
const fullName = `${firstName} ${lastName}`;
```

6. No Modifiques el Estado Directamente (Inmutabilidad)
Nunca intentes cambiar una propiedad de un objeto o un elemento de un arreglo directamente
React detecta cambios comparando referencias de memoria.

```
// Error: React no se enterará del cambio
user.name = 'Carlos'; 

// Correcto: Crea una copia nueva
setUser({ ...user, name: 'Carlos' });
```

7. useReducer
Si tu lógica de estado se vuelve compleja (por ejemplo, muchas propiedades que dependen unas de otras
otras o múltiples formas de actualizar el mismo objeto), useState puede quedarse corto
En esos casos, useReducer suele ser una opción más limpia y fácil de testear.


### useReducer

useState es un interruptor de luz (encendido/apagado)
useReducer es el tablero eléctrico
más complejo de configurar, pero te permite gestionar circuitos complicados

Componentes:

1. Estado (state): Los ingredientes actuales en la cocina.
2. Acción (action): El pedido del cliente (ej: "Quiero una hamburguesa").
3. Despacho (dispatch): El camarero que lleva el pedido a la cocina.
4. Reductor (reducer): El chef, que recibe el pedido y los ingredientes,
y decide cómo transformar esos ingredientes en un plato nuevo.


Ej: Contador Avanzado
No solo suma, sino que también resta y reinicia.

```
import React, { useReducer } from 'react';

// 1. Definimos el estado inicial
const initialState = { count: 0 };

// 2. El Reducer: La función "cerebro" que decide qué cambia
// Recibe el estado actual y una acción
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error('Acción no reconocida');
  }
}

function Contador() {
  // 3. Inicializamos useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Cuenta: {state.count}</h1>
      
      {/* 4. Usamos dispatch para enviar "órdenes" */}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
```

Más código:
tres useState es más corto, pero useReducer brilla por:

1. Lógica Centralizada:
Toda la lógica de "cómo cambia el estado"
está en una sola función (reducer) fuera del componente."

2. Previsibilidad:
Al usar un switch, evitas cambios accidentales.
El estado solo cambia de formas predefinidas."

3. Facilidad de Testeo:
Como el reducer es una "función pura" (mismos inputs = mismos outputs)
es facilísima de testear sin necesidad de React.

4. Escalabilidad:
Si mañana quieres añadir "multiplicar por 2"
solo añades un case en el reducer."


#### Aplicar useReducer

1. Cuando tienes un objeto de estado con más de 3 o 4 propiedades.
2. Cuando la lógica de actualización es compleja (ej: si cambias A, también debe cambiar B).
3. Si te encuentras pasando muchas funciones de actualización de estado (setAlgo) a través de varios niveles de componentes



### Casos de uso de useReducer




# Use Effect

Permite realizar efectos secundarios en componentes funcionales

Obtener datos (fetch)
Suscribirse a eventos
Manipulación directa del DOM
Configuración y limpieza de recursos (timers, listeners, etc.)

##### Cada vez que un componente se renderiza, useEffect se ejecuta después del renderizado
##### Puedes controlar cuándo se ejecuta pasando un array de dependencias

1. Sin array de dependencias:
Se ejecuta después de cada renderizado

```
useEffect(() => {
  // Se ejecuta en cada renderizado
  console.log("Renderizado o actualización");
});

```

2. Array de dependencias vacío `([])`:
Se ejecuta solo una vez, similar a componentDidMount

```
useEffect(() => {
  // Se ejecuta solo al montar el componente
  console.log("Componente montado");
}, []);

```

3. Dependencias específicas:
Se ejecuta cuando alguna de las dependencias cambia

```
useEffect(() => {
  // Se ejecuta cuando 'count' cambia
  console.log(`El contador cambió a ${count}`);
}, [count]);

```


Ej: Actualizar el título del documento cada vez que cambie un contador:

```
import React, { useState, useEffect } from "react";

const ContadorConEfecto = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `Has clickeado ${count} veces`;
  }, [count]); // Se ejecuta cada vez que 'count' cambia

  return (
    <div>
      <p>Has clickeado {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default ContadorConEfecto;

```

## Limpieza de Efectos
##### Algunos efectos requieren una limpieza para evitar fugas de memoria o comportamientos no deseados
##### Por ejemplo, cuando se crea un timer o se suscribe a un evento, se recomienda limpiar en la función de retorno del efecto:

```
import React, { useState, useEffect } from "react";

const Reloj = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Función de limpieza: se ejecuta antes de desmontar el componente
    return () => clearInterval(timer);
  }, []); // Se ejecuta solo una vez al montar

  return <div>{time.toLocaleTimeString()}</div>;
};

export default Reloj;

```


Claves:
useEffect es esencial para manejar operaciones asíncronas y efectos secundarios en componentes funcionales de React
Con el manejo correcto de las dependencias y la limpieza, puedes asegurarte de que tu componente se comporte de forma predecible y eficiente


## Prácticas para useEffect

1. Dependencias
El error número uno es mentirle al arreglo de dependencias `[]`.
Si usas una variable dentro del efecto, debe estar en el arreglo.

problema: Si omites una dependencia, el efecto usará valores "viejos" (stale closures) y tu app se comportará de forma errática.
solución: Confía en el linter (eslint-plugin-react-hooks). Si te da un aviso, hazle caso.

2. Limpieza
Muchos olvidan que useEffect puede devolver una función
##### Esta función es vital para evitar fugas de memoria (memory leaks).
Úsala siempre que

Inicies un setInterval o setTimeout.
Añadas un addEventListener.
Te suscribas a un WebSocket

```
useEffect(() => {
  const timer = setInterval(() => console.log('Tick'), 1000);

  // Función de limpieza: se ejecuta antes de desmontar 
  // o antes de volver a ejecutar el efecto
  return () => clearInterval(timer);
}, []);
```

3. No usar useEffect para transformar datos
Si puedes calcular algo durante el renderizado (basado en props o state), no uses un efecto
Esto solo causa renderizados extra e innecesarios

Ej: Usar un efecto para actualizar un totalPrice cuando cambia el cart.
solución: Calcular el totalPrice directamente en el cuerpo de la función
(o usar useMemo si el cálculo es muy costoso).

4. Evita las "Race Conditions" en Fetching
Cuando pides datos a una API, el orden en que llegan las respuestas no está garantizado
Si el usuario cambia de página rápido, una petición vieja podría sobrescribir los datos nuevos.

Tip: Usa una variable de control o un AbortController

```
useEffect(() => {
  let active = true;

  fetchData(id).then(data => {
    if (active) setData(data);
  });

  return () => { active = false; }; // Cancela la actualización si el id cambia
}, [id]);
```

5. SRP
No intentes meter toda la lógica de tu componente en un solo useEffect gigante
Es mejor tener varios efectos pequeños, cada uno encargado de una sola cosa.

Efectos pequeños:
Más fácil de leer y testear.

Funciones fuera:
Si una función no usa nada del componente, muévela fuera para que no sea una dependencia.

Primitive dependencies:
Intenta que las dependencias sean strings o numbers, no objetos/arreglos (a menos que uses useMemo).


Error común: Objetos como dependencias
Si pasas un objeto {} o un arreglo `[]` directamente en las dependencias
el efecto se ejecutará en cada render
porque en JavaScript `[] === []` es false (tienen referencias distintas).

useEffect no es para manejar eventos de usuario (como clics)
es para sincronizar tu componente con algo externo


## Solicitudes API

Forma más común de usar useEffect
##### La clave está en gestionar no solo los datos, sino también el tiempo (la espera) y los errores

Los 3 componentes del Estado de una API:
Necesitas rastrear tres cosas en el estado:

1. data: El resultado de la API (inicialmente null o un arreglo vacío).
2. loading: Un booleano para saber si la petición sigue en curso.
3. error: Para capturar si algo salió mal (problemas de red, 404, etc.). 

Ej: traer una lista de usuarios desde una API pública al cargar el componente

```
import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Definimos la función dentro del efecto
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Error al conectar con el servidor');
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // [] significa que solo se ejecuta una vez al montar

  // 1. Caso de Carga
  if (loading) return <p>Cargando usuarios...</p>;

  // 2. Caso de Error
  if (error) return <p>Hubo un error: {error}</p>;

  // 3. Caso de Éxito
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

##### 1. Uso de async/await: Es mucho más legible que los .then() encadenados.

##### 2. Bloque try/catch/finally
try: Intentas la operación.
catch: Atrapas el error si la API falla.
finally: Apagas el estado de carga sin importar si la petición fue exitosa o no

##### 3. Validación response.ok: fetch no lanza un error automáticamente si el servidor responde con un 404 o 500
solo falla si hay un problema de red. Por eso debemos verificarlo manualmente

Flujo:

1. Inicio: Se monta el componente
loading: true

2. Petición: fetch está en camino
"El usuario ve un "Cargando...""

3. Éxito: Llegan los datos
loading: false, `users: [...]`

Fallo: El servidor falla
loading: false, error: "Mensaje""


##### Funciona bien para cosas simples, pero tiene problemas si el usuario navega rápido entre páginas
##### Pueden ocurrir fugas de memoria o actualizaciones de estado en componentes desmontados


### Solicitud Avanzada

sincronización
En aplicaciones reales, los usuarios hacen clic rápido,
cambian de pestaña o cierran modales antes de que la API responda.

si no los gestionas aparecen:
Race Conditions (Condiciones de carrera): La respuesta de una búsqueda vieja llega después de la nueva y sobrescribe los datos correctos
Memory Leaks (aunque menos críticos hoy): Intentar actualizar el estado de un componente que ya no existe.

Herramientas:

1. AbortController
interfaz nativa de JS
permite cancelar peticiones web a mitad de camino

```
useEffect(() => {
  const controller = new AbortController();
  const signal = controller.signal; // Este es el "tique" de cancelación

  const fetchData = async () => {
    try {
      const response = await fetch(url, { signal }); // Pasamos la señal al fetch
      const data = await response.json();
      setResponse(data);
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('Petición cancelada con éxito');
      } else {
        setError(err.message);
      }
    }
  };

  fetchData();

  // LIMPIEZA: Si el componente se desmonta o el ID cambia,
  // se ejecuta esta función y cancela la petición en curso.
  return () => controller.abort();
}, [url]);
```

2. Patrón "Custom Hook" (useFetch)
Escribir toda esa lógica cada vez es agotador y ensucia el código
La mejor práctica es encapsular todo en un Custom Hook
Esto separa la lógica de negocio de la interfaz.

```
// useFetch.js
import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetch(url, { signal: controller.signal })
      .then(res => res.json())
      .then(setData)
      .catch(err => {
        if (err.name !== 'AbortError') setError(err);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
```

3. Situaciones:

Race Condition
Si el usuario busca "A" y luego "B"
el efecto de "A" se cancela antes de que "B" empiece
Solo verás el resultado de "B".

Componentes Desmontados:
React 18+ ya no lanza el famoso aviso de "cannot update state on unmounted component"
pero cancelar la petición ahorra ancho de banda y CPU.

Limpieza de Código:
Tu componente principal pasa de tener 20 líneas de lógica de una API
a solo una: const { data } = useFetch(url);


4. El estado de la industria

TanStack Query (React Query):
Maneja caché, reintentos automáticos, cancelación y estados de carga de forma nativa

SWR: Una alternativa más ligera creada por Vercel






### Solicitud Compleja



## Solicitud Con Axios

`npm install axios o yarn add axios`

1. JSON Automático: No necesitas hacer el tedioso .json().
Axios asume que la respuesta es JSON y te la entrega lista en la propiedad .data.

2. Manejo de Errores Intuitivo: Con fetch, un error 404 no entra en el bloque catch.
Con Axios, cualquier código de estado fuera del rango 2xx dispara el catch automáticamente

3. Soporte de Navegadores: Tiene mejor compatibilidad con navegadores antiguos (aunque hoy en día esto es menos crítico).

Ej: Lista de Posts
componente que pida datos a una API
el código queda más limpio que con fetch.

```
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Creamos el AbortController para evitar fugas de memoria
    const controller = new AbortController();

    const fetchPosts = async () => {
      try {
        setLoading(true);
        
        // 2. Axios recibe la señal de cancelación en su configuración
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5', {
          signal: controller.signal
        });

        // 3. Los datos están directamente en response.data
        setPosts(response.data);
        setError(null);
      } catch (err) {
        // Ignoramos el error si fue por cancelar la petición
        if (axios.isCancel(err)) {
          console.log('Petición cancelada');
        } else {
          setError("No pudimos cargar los posts. Inténtalo más tarde.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

    // 4. Limpieza: Cancelamos la petición si el componente se desmonta
    return () => controller.abort();
  }, []);

  if (loading) return <p>Cargando contenido...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Últimos Posts</h2>
      {posts.map(post => (
        <article key={post.id} style={{ borderBottom: '1px solid #ccc', margin: '1rem 0' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}

export default PostList;
```

Claves:

1. axios.get(url, { signal }): Pasamos la señal del AbortController
Si el usuario sale de esta página antes de que lleguen los posts, Axios detiene la descarga inmediatamente

2. axios.isCancel(err): Esta es una función utilitaria de Axios muy útil
Nos permite saber si el error fue porque nosotros cancelamos la petición
(lo cual es normal) o si fue un error real del servidor

3. response.data: Nota que no hay un await response.json().
Axios ya hizo ese trabajo por nosotros detrás de escena.


## Solicitud Avanzada

No se trata solo de la llamada en sí, sino de la arquitectura que rodea a esa llamada
En lugar de hacer axios.get dispersos por toda la app
Implica crear instancias personalizadas, hooks reutilizables y un manejo refinado de errores

1. Instancia ( "Client")
En lugar de usar el paquete axios directamente
creamos un archivo (ej: api.js)
donde configuramos una instancia
Esto centraliza la URL base y los tiempos de espera.

```
// api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.tu-app.com/v1',
  timeout: 10000, // 10 segundos antes de abortar por lentitud
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export default apiClient;
```

2. Custom Hook "Todo-en-Uno"
la petición debe estar encapsulada en un hook que maneje la lógica de cancelación, estados y hasta la re-ejecución manual (refetch).

```
// useApi.js
import { useState, useCallback, useEffect } from 'react';
import apiClient from './api';
import axios from 'axios';

export const useApi = (url, method = 'get') => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Usamos useCallback para que la función no cambie en cada render
  const execute = useCallback(async (body = null, params = null) => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    try {
      const response = await apiClient({
        url,
        method,
        data: body,
        params,
        signal: controller.signal
      });
      setData(response.data);
      return response.data;
    } catch (err) {
      if (axios.isCancel(err)) return; // Silenciamos si fue cancelado
      
      // Manejo avanzado de errores por código de estado
      const message = err.response?.data?.message || "Error inesperado";
      setError({
        message,
        status: err.response?.status,
        details: err.response?.data
      });
      throw err; // Re-lanzamos para que el componente pueda reaccionar
    } finally {
      setLoading(false);
    }
  }, [url, method]);

  return { data, loading, error, execute };
};
```

3. Implementación en el Componente
Lo limpio que queda el componente ahora.
Solo se preocupa por qué datos quiere y cómo mostrarlos

```
function UserProfile({ userId }) {
  // Solo definimos el hook
  const { data: user, loading, error, execute } = useApi(`/users/${userId}`);

  // Ejecutamos la petición al montar o cuando cambie el userId
  useEffect(() => {
    execute();
  }, [execute]);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!user) return null;

  return (
    <div>
      <h1>{user.name}</h1>
      {/* Botón para re-intentar o actualizar datos manualmente */}
      <button onClick={() => execute()}>Actualizar</button>
    </div>
  );
}
```

Claves:

1. Configuración Centralizada: Si mañana la API cambia de v1 a v2
solo cambias una línea en tu instancia apiClient

2. Manejo de Tiempos de Espera (timeout): Evitas que la app se quede "colgada" infinitamente si el servidor no responde

3. Desacoplamiento: El componente no sabe nada de Axios
solo sabe que llama a una función execute y recibe datos.

4. Flexibilidad de Métodos: El mismo hook te sirve para un GET de carga
o para un POST al hacer clic en un botón de "Guardar".

5. Información de Error Detallada: No solo guardamos un string, guardamos el código de estado
(401, 403, 500) para mostrar mensajes específicos (ej: "Tu sesión expiró" o "No tienes permisos").


## Interceptores en Axios

a veces necesitas que el apiClient sepa automáticamente cuándo añadir el Token de seguridad (JWT)
sin que tú lo pases manualmente en cada llamada.

configurar los Interceptores de Axios para inyectar el token de autenticación
y manejar el refresco de sesiones de forma invisible

Los interceptores son como las aduanas en un aeropuerto
Antes de que una maleta (petición) salga del país o entre en él
debe pasar por un control que puede revisarla, añadirle una etiqueta o rechazarla

En Axios, esto te permite ejecutar código automáticamente
cada vez que haces una petición o recibes una respuesta
sin tener que escribirlo manualmente en cada componente.

1. Interceptor de Petición (Request)
Se usa principalmente para inyectar el Token de Autenticación (JWT).
Así, el resto de tu app no tiene que preocuparse por saber si el usuario está logueado o no al llamar a la API

```
// En tu archivo api.js (donde creaste la instancia)

apiClient.interceptors.request.use(
  (config) => {
    // Obtenemos el token (de localStorage, cookies o un store)
    const token = localStorage.getItem('token');
    
    if (token) {
      // "Inyectamos" el token en las cabeceras
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
```

2. Interceptor de Respuesta (Response)
útil para el manejo global de errores
Si el servidor responde con un 401 Unauthorized (sesión expirada)
puedes redirigir al usuario al login automáticamente desde aquí.

```
apiClient.interceptors.response.use(
  (response) => {
    // Si la respuesta es exitosa (2xx), simplemente la devolvemos
    return response;
  },
  (error) => {
    // Si el error es 401, el token probablemente ya no sirve
    if (error.response && error.response.status === 401) {
      console.warn("Sesión expirada. Redirigiendo...");
      localStorage.removeItem('token');
      window.location.href = '/login'; 
    }

    // Puedes manejar otros errores como 403 (Prohibido) o 500
    return Promise.reject(error);
  }
);
```

Ventajas:

1. DRY (Don't Repeat Yourself):
No escribes headers: { Authorization: ... } en las 50 llamadas de tu app.

2. Seguridad Centralizada:
Si decides cambiar de "Bearer" a otro tipo de esquema, solo tocas una línea de código.

3. UX Fluida:
El usuario no ve errores extraños si su sesión expira
el interceptor lo saca de la página protegida al instante.

4. Transformación de Datos:
Podrías usar un interceptor para convertir todas las claves de la respuesta
de snake_case (API) a camelCase (JS) automáticamente

Ej config completa:

```
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.ejemplo.com',
});

// REQUEST: Añadir Token
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.token = token;
  return config;
});

// RESPONSE: Manejar Errores
api.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      // Lógica de logout
    }
    return Promise.reject(err);
  }
);

export default api;
```




## Solicitud Compleja



# Memory leaks en solicitud






# Context Api





# Use Reducer




# Use callback




# Use Memo




# Routing





# Eventos 





# Arquitecturas dentro del project

1. Patrón de Servicios (Service/Repository Pattern)
paso lógico después de crear tu apiClient
En lugar de llamar a Axios en el componente, creas archivos que representan tus dominios
(ej: userService.js, orderService.js).

Abstraes las rutas y métodos en funciones puras
El componente no sabe cuál es la URL ni los parámetros
solo llama a una función.

Ideal en proyectos medianos que quieren mantener las URLs fuera de los componentes.

2. Gestión de Estado Global (Redux / Zustand)
Aquí, los datos de la API no viven en el componente
sino en una "fuente de la verdad" externa

La respuesta de la API se guarda en un Store (almacén).
Cualquier componente de la app puede acceder a esos datos sin que se los pasen por props.

Ideal en apps grandes donde muchas partes de la interfaz necesitan los mismos datos
(ej: el perfil del usuario, el carrito de compras).

3. Server-State Management (React Query / SWR)
Es la arquitectura "moderna" por excelencia
Cambia el paradigma: ya no "traes y guardas" datos
sino que sincronizas la UI con el servidor

Estas librerías manejan automáticamente:
el caché, los reintentos si falla el internet
la actualización en segundo plano y los estados de carga.

En apps profesional orra escribir el 80% de los useEffect y useState vistos.

4. Arquitectura de Contenedores y Presentación (Container/Presenter)
Patrón "clásico", se sigue usando para separar la lógica visual de la lógica de datos.

Container: Se encarga del fetch, el loading y la lógica de Axios
Presenter: Es un componente "tonto" que solo recibe los datos por props y los pinta con CSS bonito.

En equipos donde unos diseñan la UI y otros programan la lógica. Facilita mucho los tests unitarios

Comparativa:

Arquitectura | Dificultad | Escalabilidad | Mantenimiento
Service Pattern | Baja | Media | Excelente | (URLs centralizadas)
Global Store | Alta | Muy Alta | Pesado (mucho código extra)
Server-State | Media | Muy Alta | Increíble (menos código propio)
Container/Presenter | Baja | Media | Bueno para tests

Combinación híbrida:

1. Instancia de Axios con interceptores
2. Service Pattern para definir tus endpoints
3. React Query para ejecutar esos servicios y manejar el caché


## Service pattern

organizado por carpetas para que el proyectos sea ordenado
sería el "plaono arquitectónico" de la carpeta source

El objetivo es que los componentes componentes no sepan cómo se obtienen los datos
solo qué datos están disponibles

Si mañana cambias de Axios a Fetch
o si la URL de /users pasa a ser /profiles
solo tocas un archivo

1. Estructura
Para app organizada

```
src/
├── api/
│   └── apiClient.js       <-- Aquí vive la instancia de Axios con interceptores
├── services/
│   ├── userService.js     <-- Lógica para el dominio de Usuarios
│   ├── authService.js     <-- Lógica para Login/Registro
│   └── productService.js  <-- Lógica para el catálogo
└── components/
    └── UserList.jsx       <-- Solo consume los servicios
```


2. Implementando un Servicio (userService.js)
En lugar de exportar funciones sueltas
se exporta un objeto que agrupe los métodos
hace que el autocompletado sea fenomenal

```
// src/services/userService.js
import api from '../api/apiClient';

const userService = {
  // Obtener todos los usuarios
  getAll: async (params = {}) => {
    const response = await api.get('/users', { params });
    return response.data;
  },

  // Obtener un usuario por ID
  getById: async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  // Crear un nuevo usuario
  create: async (userData) => {
    const response = await api.post('/users', userData);
    return response.data;
  },

  // Actualizar parcialmente (PATCH)
  update: async (id, userData) => {
    const response = await api.patch(`/users/${id}`, userData);
    return response.data;
  }
};

export default userService;
```

3. Consumo en el Componente
El componente ya no tiene URLs pegadas ni configuraciones de axios
es puramente declarativ

```
import { useEffect, useState } from 'react';
import userService from '../services/userService';

function UserProfile({ id }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        // El componente solo pide el dato, no sabe cómo llega
        const data = await userService.getById(id);
        setUser(data);
      } catch (error) {
        console.error("Error cargando perfil");
      }
    };

    loadUser();
  }, [id]);

  if (!user) return <p>Cargando...</p>;

  return <h1>{user.name}</h1>;
}
```

Ventajas:

1. Centralización
Si la API cambia la versión (ej: de /v1/users a /v2/users)
solo cambias el archivo userService.js.

2. Testeo
Puedes probar userService.js de forma aislada
sin necesidad de renderizar componentes de React

3. Documentación
Al abrir la carpeta services, cualquier programador nuevo
entiende inmediatamente qué operaciones permite tu backend.

4. Mantenibilidad
Evitas que los componentes tengan cientos de líneas dedicadas a la lógica de red. 


## Custom hooks

Envolvemos los servicios en custom hooks, como un useUser
permite inyectar el estado de loading y error automáticamente.

combinar el Service Pattern con Custom Hooks
creas una capa de abstracción limpia
los componentes solo se encargan de la interfaz.

1. Arquitectura de Flujo
Antes del código, visualiza el camino que recorre el dato:
`Componente ➔ Custom Hook ➔ Service ➔ Axios Instance ➔ API`

2. Hook Genérico (useFetch)
creamos un hook "maestro" que maneje los estados comunes
(data, loading, error), evita repetir el mismo useState

```
// src/hooks/useFetch.js
import { useState, useCallback } from 'react';

export const useFetch = (apiFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (...args) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction(...args);
      setData(result);
      return result;
    } catch (err) {
      setError(err.message || "Algo salió mal");
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);

  return { data, loading, error, execute };
};
```

3. Hook de Dominio (useUsers)
aplicamos el hook genérico a nuestro servicio de usuarios
esto nos da un control total y específico

```
// src/hooks/useUsers.js
import { useEffect } from 'react';
import { useFetch } from './useFetch';
import userService from '../services/userService';

export const useUsers = () => {
  // Enlazamos el hook genérico con el método del servicio
  const { data, loading, error, execute } = useFetch(userService.getAll);

  // Cargamos los usuarios automáticamente al usar el hook
  useEffect(() => {
    execute();
  }, [execute]);

  return { users: data, loading, error, refetch: execute };
};
```

4. Componente "Zen"
No hay Axios, no hay try/catch, no hay lógica de red.
Solo UI.

```
import { useUsers } from '../hooks/useUsers';

function UserDirectory() {
  const { users, loading, error, refetch } = useUsers();

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <button onClick={refetch}>Actualizar Lista</button>
      <ul>
        {users?.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}
```

Ventajas:

1. Separación de preocupaciones
Si la API cambia, tocas el Service
Si la lógica de carga cambia, tocas el Hook
Si el diseño cambia, tocas el Componente

2. Reutilización
¿Necesitas la lista de usuarios en otra pantalla?
Solo importas useUsers y listo

3. Legibilidad
Cualquier persona que lea el componente entiende qué hace en 5 segundos

4. Manejo de Errores
El error se gestiona en un solo lugar
pero se muestra donde tú decidas


## Contenedores y Presentación

Aunque hoy en día los Custom Hooks han absorbido gran parte de esta responsabilidad
sigue siendo una forma fantástica de separar la lógica de negocio del diseño visual
Objetivo: un componente se encarga de pensar y el otro de pintar.

1. Smart vs. Dumb

Container:
Cómo funcionan las cosas
Hace el fetch, gestiona el estado, maneja los errores
Presentación: No tiene estilos CSS (normalmente).
comunicación: Pasa datos y funciones al presentador

Presenter:
Cómo se ven las cosas
No sabe nada de APIs ni de lógica global
Tiene todo el JSX, el CSS y los elementos visuales
Recibe datos por props y emite eventos mediante funciones recibidas

2. Ej: Lista de Usuarios
Tomando el ejemplo de usuarios, ahora bajo smart vs dumb

### Presentador:
componente puro visual
Si le pasas una lista vacía, no se queja
si le pasas datos, los pinta
altamente reutilizable

```
// UserListView.jsx
import React from 'react';
import './UserList.css'; // Aquí vive todo el diseño

function UserListView({ users, isLoading, error, onRetry }) {
  if (isLoading) return <div className="skeleton">Cargando...</div>;
  if (error) return <button onClick={onRetry}>Error: {error}. Reintentar</button>;

  return (
    <section className="user-grid">
      {users.map(user => (
        <div key={user.id} className="user-card">
          <img src={user.avatar} alt={user.name} />
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </section>
  );
}

export default UserListView;
```

### Contenedor
Cerebro donde usamos el Custom Hook creado anteriormente
Su única función es conectar la lógica con la vista

```
// UserListContainer.jsx
import React from 'react';
import { useUsers } from '../hooks/useUsers';
import UserListView from './UserListView';

function UserListContainer() {
  // Consumimos la lógica (Hook + Service)
  const { users, loading, error, refetch } = useUsers();

  // "Inyectamos" la lógica en el presentador
  return (
    <UserListView 
      users={users} 
      isLoading={loading} 
      error={error} 
      onRetry={refetch} 
    />
  );
}

export default UserListContainer;
```

Ventajas:

1. Diseño independiente:
desarrollador frontend/maquetador puede trabajar en UserListView.jsx
sin romper la lógica de la API.

2. Storybook / Testing:
fácil testear el componente de presentación
Solo le pasas props falsas (mock data)
verificas que se vea bien, sin necesidad de simular llamadas a red.

3. Reutilización
Podrías usar el mismo UserListView para mostrar "Usuarios Sugeridos
simplemente pasándole un arreglo diferente desde otro contenedor
 
##### Para evitar demasiados archivos, hoy en día se prefiere meter la lógica directamente en el componente usando Custom Hooks
si tu componente visual es muy complejo (más de 100 líneas)
separarlo en un Presenter es buena decision


Si notas que solo estás pasando props de un nivel a otro
sin hacer nada más (Prop Drilling)
es señal de que quizás el patrón es demasiado pesado para esa tarea específica
un Custom Hook simple bastaría



# React Query (TanStack)
Todo lo que acabamos de construir manualmente (estados de carga, errores, hooks, caché básico) es lo que hace tanstack
Agrega manejo de caché global, reintentos automáticos si se cae el Wi-Fi, y sincronización entre pestañas

Nos ahorraremos el archivo useFetch.js
No es solo una librería para hacer peticiones
es un gestor de estado del servidor

Olvídate de casi todos los useEffect, useState de carga y AbortController manuales que escribimos antes
React Query se encarga de todo eso y añade superpoderes como caché, reintentos automáticos y sincronización en segundo plano.

1. Poderes
En el enfoque manual, tú "traes" los datos
En React Query, tú "te suscribes" a los datos.
Si dos componentes necesitan la misma lista de usuarios
React Query hace una sola petición y reparte el resultado a ambos

Si el usuario cambia de pestaña y vuelve
la librería detecta el foco y actualiza los datos por si algo cambió en el servidor

2. Config inicial
 
Primero, envuelves tu aplicación en un Provider
Esto crea el "almacén" donde se guardará la caché

```
// App.js
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  );
}
```

3. Ejemplo Básico: useQuery
Seguiremos usando userService.js
Pero se reduce su código

```
import { useQuery } from '@tanstack/react-query';
import userService from './services/userService';

function UserList() {
  // 1. Definimos la consulta
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['users'], // El "ID" único de estos datos en la caché
    queryFn: userService.getAll, // La función que trae los datos
  });

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()}>Forzar actualización</button>
      <ul>
        {data.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}
```

4. Los 3 pilares de React Query (TanStack)

queryKey:
Es un array que identifica de forma única la petición
Si cambias la clave (ej: `['users', userId]`)
React Query entiende que es otra petición y gestiona su propia caché.

staleTime:
Define cuánto tiempo consideras que el dato está "fresco".
Durante ese tiempo (ej: 5 min)
React Query no volverá a llamar a la API aunque montes y desmontes el componente.

cacheTime:
Cuánto tiempo permanecen los datos en memoria antes de ser borrados si nadie los está usando.

5. Ganancias: UX

Caché Instantánea:
Si el usuario navega de la página A a la B y vuelve a la A,
los datos aparecen al instante porque ya están en caché
mientras la librería los actualiza silenciosamente en segundo plano.

Reintentos (Retries):
Si el Wi-Fi del usuario parpadea
React Query reintenta la petición 3 veces automáticamente antes de mostrar un error.

Sincronización de Ventana:
Si el usuario está en otra pestaña y vuelve a tu app
los datos se refrescan para asegurar que ve la información más reciente

DevTools:
Tiene una herramienta de inspección
permite ver exactamente qué hay en tu caché en tiempo real.

6. Guardado de datos (POST/PUT/DELETE)
Usamos useMutation, diseñado para acciones que modifican datos
Lo mejor de las mutaciones es que puedes decirle a React:
Al crear un usuario nuevo, "por favor invalida la caché de
'users' para que se vuelva a pedir la lista actualizada"

```
const mutation = useMutation({
  mutationFn: userService.create,
  onSuccess: () => {
    // Invalida y refresca la lista de usuarios automáticamente
    queryClient.invalidateQueries({ queryKey: ['users'] });
  },
});
```



# Clasificación de app

Según su complejidad de su lógica, la cantidad de datos que maneja y el tamaño del equipo que la mantienen

1. Pequeña: mvp o proyecto personal
app que puedes mantener solo
El objetivo es la velocidad de entrega

Pantallas: De 1 a 5 rutas (vistas).
Estado: Se maneja localmente con useState o un useContext muy simple.
No necesita Redux ni librerías complejas.
API: Consumo de una o dos fuentes de datos sencillas.
Arquitectura: Hooks y componentes en una estructura de carpetas plana.
Ejemplo: Un portfolio, una landing page interactiva, o una herramienta de notas

2. Mediana: producto de crecimiento
Ya no puedes tener todo en la cabeza y necesitas reglas de arquitectura claras
para que otros o uno mismo entiendan el código en algunos meses

Pantallas: De 5 a 20 rutas.
Estado: Empieza a haber datos que se comparten en muchos lugares.
Se suele usar Zustand o React Query para no perder el control.
API: Integración con múltiples servicios (Auth, Pagos, Base de datos).
Arquitectura: Patrón de Servicios, Custom Hooks obligatorios y quizás una carpeta de "Features" o módulos.
Testing: Ya hay pruebas unitarias para la lógica más crítica.
Ejemplo: Un eCommerce local, un dashboard de administración para una empresa, o una app de gestión de turnos

3. Grande / Enterprise
Suelen estar divididas por equipos y el enfoque principal es la mantenibilidad y la escalabilidad

Pantallas: Más de 50 rutas o micro-frontends.
Estado: Gestión de estado global ultra compleja (Redux Toolkit) con persistencia de datos y normalización de caché.
API: Orquestación de microservicios, quizás usando GraphQL para optimizar las peticiones.
Arquitectura: Clean Architecture, Monorepos (TurboRepo/Nx) o Micro-frontends.
Tienen su propio Design System (librería de componentes propia).
Infraestructura: CI/CD robusto, múltiples entornos (Staging, Pre-prod, Prod), y monitoreo de errores en tiempo real (Sentry).
Ejemplo: Netflix, Airbnb, o el panel de control de un banco



# App mantenible

## Pequeña

arquitectura equilibrada: Servicios + Custom Hooks

la arquitectura Container/Presentation pura suele ser demasiado pesada
terminas con el doble de archivos de los que necesitas

1. Cliente: Base
instancia centralizada de axios, no suelto
permite escalar a interceptores (auth) en un minuto sin tocar el resto de la app.

2. Services: Mapa
capa de servicios que solo contenga funciones que devuelven promesas.
Hace que tu lógica sea testeable fuera de React
puedes testear un servicio con Jest sin montar componentes

3. Custom Hooks: Smart moderno
En lugar de un componente "Contenedor"
El Custom Hook se usa para manejar el estado y la lógica de carga
más flexible que un contenedor
permite que tus componentes de React se enfoquen solo en el JSX/presentacion 

Estructura:

```
src/
├── api/
│   └── client.js        # Configuración de Axios
├── services/
│   └── users.js         # Endpoints: getAll(), getById(), etc.
├── hooks/
│   └── useUsers.js      # Lógica: loading, error, data fetching
└── components/
    ├── common/          # Componentes tontos/reutilizables (Dumb)
    └── features/        # Componentes de UI específicos de la lógica
```

Orden	Cada cosa tiene su lugar: el "qué" (Service), el "cómo" (Hook) y el "ver" (Component).
Mantenibilidad	Si cambias la URL de la API, solo tocas el Service.
Si cambias el diseño, solo el Component.
Testeabilidad	Puedes hacer Unit Tests de tus Services sin React y de tus Hooks con react-hooks-testing-library.
Escalabilidad	Si la app crece, puedes meter React Query dentro de tus Hooks sin cambiar ni una línea de tus componentes

Al usar Custom Hooks, el hook actúa como el "Cerebro" (Smart)
el componente donde lo llamas actúa como la "Cara" (Presenter).
No añadas Redux ni Zustand a menos que tengas un estado
que realmente necesite ser compartido por toda la app
como un carrito o una sesión de usuario



# Routing

vistas/páginas
directores de orquesta que deciden qué se muestra en pantalla según la URL

Para una app pequeña, la mejor forma de encajarlas:
crear una carpeta pages/ (o views/).

```
src/
├── api/          # La instancia de Axios (cartero)
├── services/     # Funciones de API (mapa)
├── hooks/        # Lógica de estado (cerebro)
├── components/   # UI reutilizable: Botones, Cards, Inputs (ladrillos)
├── pages/        # Vistas completas: Home, Login, Dashboard (directores)
└── App.jsx       # Configuración de Rutas (El controlador de tráfico)
```

2. Flujo de datos: Servicio a la Pantalla

`URL (Router) ➔ Page (Contenedor) ➔ Hook ➔ Service ➔ UI Component`

3. Ej: Página de Detalle de Usuario
usuario entra en /users/123

### 1. Router (App.jsx)
Define quién responde a cada URL

### 2. Página (pages/UserPage.jsx)
Objetivo: extraer el ID de la URL, llamar al Hook y pasarle los datos a los componentes de UI.

```
import { useParams } from 'react-router-dom';
import { useUserDetail } from '../hooks/useUserDetail';
import UserCard from '../components/UserCard';

function UserPage() {
  const { id } = useParams(); // Saca el ID de la URL
  const { user, loading, error } = useUserDetail(id); // Usa el Cerebro (Hook)

  if (loading) return <p>Cargando perfil...</p>;
  if (error) return <p>Error al cargar usuario</p>;

  // Retorna la vista usando componentes de UI (Ladrillos)
  return (
    <main>
      <h1>Perfil de Usuario</h1>
      <UserCard user={user} />
    </main>
  );
}
```

Page:
Manejar la estructura de la página
leer parámetros de la URL (useParams).
No debe tener lógica de Axios ni cálculos matemáticos complejos

Hook:
Gestionar el estado (loading, data)
llamar al servicio
No debe tener código CSS ni HTML pesado (JSX).

Componente:
Recibir props y pintar HTML/CSS
No debe saber nada de la URL ni de la API.


## Layouts

En todas las páginas un mismo componente como:
barra de navegación, pie de página
Con el objetivo de no sin repetir código en cada una

esqueleto de la app, sin ellos terminarías copiando y pegando el código del Navbar y el Footer en cada página
Algo poco mantenible, si cambias un link del menú, tendrías que editar 10 archivos

usando react-router-dom
la forma más elegante de manejar esto es mediante Rutas Anidadas
y el componente <Outlet />

1. Outlet (cascarón)
Si la app fuera un cuadro, el layout es el marco
Navbar, Sidebar, Footer nunca cambiarián
el <Outlet /> es el lienzo en blanco donde se "pintan" las diferentes páginas según la URL

2. Componente Layout
archivo en src/components/layouts/MainLayout.jsx.

```
import { Outlet, Link } from 'react-router-dom';
import './MainLayout.css';

function MainLayout() {
  return (
    <div className="layout-container">
      <header className="navbar">
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/users">Usuarios</Link>
        </nav>
      </header>

      <main className="content">
        {/* Aquí es donde React inyectará la página actual */}
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2026 - Mi App Pro</p>
      </footer>
    </div>
  );
}

export default MainLayout;
```

3. Rutas en App.jsx
Envolvemos las rutas de las páginas dentro de la ruta del Layout

```
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta "Padre" que contiene el Layout */}
        <Route path="/" element={<MainLayout />}>
          
          {/* Rutas "Hijas" que se verán DENTRO del Outlet */}
          <Route index element={<HomePage />} /> {/* El 'index' es la ruta base / */}
          <Route path="users" element={<UserListContainer />} />
          <Route path="users/:id" element={<UserPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

Ventajas:

1. Persistencia de Estado
Si tienes un reproductor de música o una barra de búsqueda en el Navbar, esta no se reiniciará cuando navegues entre páginas
el componente MainLayout nunca se desmonta.

2. Transiciones Suaves
Puedes añadir animaciones en el CSS del Layout
para que las páginas entren con un efecto de fade-in

3. Layouts Múltiples
Puedes tener un MainLayout para la app pública
un AdminLayout (con sidebar) para el panel de control
Solo tienes que crear otro grupo de rutas

Arquitectura:

En client, service y hooks, el layout es visual
Es el lugar para colocar:

1. Contextos Globales
Autenticación o el tema Oscuro/Claro

2. Toasts/Notificaciones
Para que los mensajes de error de tus Hooks se vean siempre arriba de todo

3. Breadcrumbs
para que el usuario sepa dónde está.


api/: Axios Config.
services/: Endpoints (GET /users).
hooks/: Lógica (useUsers).
components/: "Botones, Cards, Inputs."
layouts/: "Navbar, Footer, Outlet."
pages/: Páginas que se inyectan en el Outlet.



# Forms

Puedes usar un useState para cada input
o una librería como React Hook Form (RHF)

1. RHF
ligero, evita renderizados innecesarios
se integra de maravilla con los servicees

Rendimiento: Con useState, cada tecla que presionas vuelve a renderizar todo el formulario
Con RHF, los inputs son "no controlados"
el componente solo se renderiza cuando es estrictamente necesario

Validación: Te permite definir reglas complejas
email, longitud, patrones; sin llenar tu JSX de if/else

Menos código: Reduce drásticamente la cantidad de líneas para manejar errores y valores

2. Flujo: Pantalla al Servidor

`Input del Usuario ➔ React Hook Form (Validación) ➔ Service (Axios) ➔ API`

3. Ej: Registro de Usuario

instalamos:

```
npm install react-hook-form zod @hookform/resolvers

```

Usaremos Zod para definir el "esquema" (reglas de validación).

1. Definir Esquema de Validación

```
import { z } from 'zod';

// Esto define cómo DEBE ser el objeto que enviamos
export const userSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  email: z.string().email("Formato de email inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres")
});
```

2. Componente de Formulario
conectamos la UI con el servicio userService.create que definimos antes

```
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from './userSchema';
import userService from '../services/userService';

function UserForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm({
    resolver: zodResolver(userSchema) // Conecta la validación
  });

  const onSubmit = async (data) => {
    try {
      await userService.create(data); // Llamada a nuestra capa de Service
      alert("Usuario creado con éxito");
    } catch (error) {
      alert("Error al enviar el formulario");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("name")} placeholder="Nombre" />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      <div>
        <input {...register("email")} placeholder="Email" />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Registrar"}
      </button>
    </form>
  );
}
```

Ventajas:

1. Validación Declarativa
Gracias a Zod, las reglas de validación viven fuera del componente
Son fáciles de leer y testear.

2. Estado de Envío
RHF te da isSubmitting automáticamente
No tienes que crear un `const [loading, setLoading] = useState(false)`
manual para cada formulario

3. Sincronización con el Service
El objeto data que entrega onSubmit ya está limpio y validado
listo para que tu userService lo mande a la API.


Errores globales:
Si la API devuelve un error, por ejemplo, "El email ya existe"
puedes usar una función de RHF llamada setError
para mostrar ese error directamente en el input correspondiente
aunque el error venga del servidor.



# Mutaciones de React Query (TanStack)

Mientras que useQuery se encarga de "traer" (GET)
useMutation se encarga de "cambiar" (POST, PUT, DELETE).

Pero su verdadero poder no es solo enviar los datos
sino decirle a la caché qué hacer después

Imagina que creas un usuario: lo lógico es que la lista de usuarios se actualice automáticamente para mostrar al nuevo integrante
Sin React Query, tendrías que recargar la página o manejar estados globales complejos
con React Query, es un "inválidalo y listo"

1. Ciclo de vida de la Mutación:
ocurre un flujo de eventos que puedes controlar paso a paso 

1. onMutate: Se ejecuta antes de la petición
(ideal para "Actualizaciones Optimistas").

2. onSuccess: La API respondió bien
Es el momento de limpiar la caché.

3. onError: Algo falló.
manejas el feedback al usuario.

4. onSettled: Se ejecuta siempre, sin importar si falló o no
(útil para apagar loaders).

2. Ej: Crear un Usuario e Invalidar la Caché

En la arquitectura Service + React Query
así se vería la implementación en un componente o Custom Hook:

```
import { useMutation, useQueryClient } from '@tanstack/react-query';
import userService from '../services/userService';

export function useCreateUser() {
  const queryClient = useQueryClient(); // El "mando a distancia" de la caché

  return useMutation({
    mutationFn: (newUserData) => userService.create(newUserData),
    
    // Aquí ocurre la magia
    onSuccess: () => {
      // Le decimos a React Query: "La lista de 'users' ya no es confiable (está vieja)"
      // Esto hará que useQuery(['users']) pida los datos de nuevo automáticamente.
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    
    onError: (error) => {
      console.error("Error al crear usuario:", error.message);
    }
  });
}
```

3. Implementación en el Formulario
Usando RHF, encajamos la mutación

```
function UserForm() {
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isPending } = useCreateUser(); // Usamos nuestro hook de mutación

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        reset(); // Limpiamos el formulario solo si la API respondió OK
        alert("¡Usuario creado!");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Nombre" />
      <button type="submit" disabled={isPending}>
        {isPending ? "Guardando..." : "Crear Usuario"}
      </button>
    </form>
  );
}
```

Ventajas:

Sincronización Total:
Al usar invalidateQueries
cualquier componente en cualquier parte de la app
Al usar invalidateQueries

Estado de UI Simplificado:
No necesitas un useState manual para el loading del botón
isPending te lo da la mutación

Desacoplamiento:
El componente no sabe cómo se actualiza la lista
solo sabe que llama a mutate().


## Actualizaciones Optimistas

Si quieres que tu app se sienta ultra rápida
puedes usar Actualizaciones Optimistas
significa que añades el usuario a la lista antes de que la API responda.
Si la API falla, React Query hace un "rollback" (vuelve atrás) automáticamente
Las mutaciones son lo que separa a una web estática de una aplicación web dinámica que se siente fluida y moderna.



# Testing

En la arquitectura Client + Service + Hooks + Forms
el testing se vuelve mucho más sencillo
cada pieza tiene una responsabilidad única.

Nos enfocamos en tres niveles principales:
Unitarios, Integración y E2E.

1. Pirámide
No todos los tests valen lo mismo
idea es tener muchos tests pequeños (rápidos)
pocos tests grandes (lentos pero realistas).

2. Testeando Services 
Lógica pura, como tus servicios son funciones de JavaScript puro que usan Axios
no necesitas "renderizar" nada.

Usamos Vitest y un mock de Axios.
Verificamos que se llama a la URL correcta y se procesan bien los datos.

```
// userService.test.js
import { describe, it, expect, vi } from 'vitest';
import userService from './userService';
import api from '../api/apiClient';

vi.mock('../api/apiClient'); // Simulamos el cliente de axios

describe('userService', () => {
  it('debería obtener la lista de usuarios correctamente', async () => {
    const mockUsers = [{ id: 1, name: 'John Doe' }];
    api.get.mockResolvedValue({ data: mockUsers });

    const result = await userService.getAll();
    
    expect(api.get).toHaveBeenCalledWith('/users', { params: {} });
    expect(result).toEqual(mockUsers);
  });
});
```

3. Testing de Custom Hooks
usamos @testing-library/react-hooks
Si los hooks usan React Query, necesitamos envolver el test en un QueryClientProvider

Verificar que el estado pasa de 'loading: true' a tener datos

```
// useUsers.test.js
const wrapper = ({ children }) => (
  <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>
);

it('debería cargar usuarios exitosamente', async () => {
  const { result } = renderHook(() => useUsers(), { wrapper });

  expect(result.current.loading).toBe(true);
  
  await waitFor(() => expect(result.current.users).not.toBeNull());
  
  expect(result.current.users[0].name).toBe('John Doe');
  expect(result.current.loading).toBe(false);
});
```

4. Testing de Componentes (Integración)
usamos React Testing Library (RTL)
Se testea lo que el usuario ve, no la implementación (state/props)

```
// UserForm.test.js
it('debería mostrar un mensaje de error si el email es inválido', async () => {
  render(<UserForm />);
  
  const emailInput = screen.getByPlaceholderText(/email/i);
  fireEvent.change(emailInput, { target: { value: 'email-invalido' } });
  
  fireEvent.click(screen.getByRole('button', { name: /registrar/i }));

  const errorMessage = await screen.findByText(/formato de email inválido/i);
  expect(errorMessage).toBeInTheDocument();
});
```

Herramientas:

vitest: motor de ejecución
RTL: interactuar con los componentes como un usuario real
MSW (Mock Service Worker): interceptar llamadas de red a nivel de navegador/nodo
mejor que vi.mock porque simula una API real
Playwright: tests E2E (punta a punta)
Graba al navegador haciendo clics reales.

Se testean los sevices para asegurar la comunicación
los Hooks para asegurar la lógica de estado.
los Componentes enfocándote en la accesibilidad y el flujo del usuario.


## Mock Service Worker
Mock Service Worker, MSW levanta un servidor "fantasma" que responde a tus peticiones
permite que tus tests de componentes prueben el flujo completo
Componente -> Hook -> Service -> Axios, sin tocar la API real
Es una forma más robusta de testear



# Arquitecturas Servidores

1. Pequeñas (Velocidad y Bajo Costo)
Objetivo: No-Ops, no config servidores, db e infra compleja

Arquitectura: BaaS (Backend as a Service) o Monolito Simple
Herramientas Clave: Supabase / Firebase, te dan base de datos, autenticación y almacenamiento con una sola librería
El "servidor" es una API que ellos gestionan.
Vercel / Netlify: Despliegue con un clic y funciones Serverless para lógica mínima.
Framework: Vite (spa), Next.js (client components)

2. Medianas (Rendimiento y Control)
necesitas reglas de negocio complejas
optimización para SEO y una gestión de datos más robusta
El servidor empieza a hacer el "trabajo sucio"
para que el móvil del usuario no sufra

Arquitectura: Full-stack Frameworks (SSR / ISR).

Herramientas:

Next.js (App Router): El estándar.
Mezcla componentes de servidor para cargar datos rápido
componentes de cliente para la interfaz.

Remix: Increíble para apps que dependen mucho de formularios y estados de red
maneja las mutaciones de servidor de forma nativa.

Prisma / Drizzle:
ORMs para hablar con tu base de datos de forma segura desde el servidor de React.

Framework: Next.js o TanStack Start.

3. Grandes / Enterprise: Escalabilidad y Desacoplamiento
Los datos reales viven en microservicios escritos en otros lenguajes
(Go, Java, Node/NestJS)

Arquitectura: RSC (React Server Components) + Microservicios + Edge Computing.

Herramientas:
GraphQL (Apollo / Yoga): Para unificar múltiples fuentes de datos en una sola consulta.
NestJS: Si necesitas un backend de Node.js ultra estructurado y robusto que sirva a tu app de React
Redis: Para caché agresiva y que el servidor no trabaje doble.
Docker / Kubernetes: Para que el servidor de React pueda escalar horizontalmente según el tráfico.

Estrategia: Se usa Edge Rendering para que el servidor responda desde la ciudad más cercana al usuario
reduciendo la latencia a milisegundos.

S: Serverless / BaaS,SDK Directo (Supabase),Vercel / Netlify
M: SSR / Server Actions,ORM (Prisma/Drizzle),VPS (DigitalOcean) o Vercel
L: RSC / BFF / GraphQL,Microservicios / API,AWS / GCP / Azure

Guia:

Ej: empezando un proyecto y no sabes cuántos usuarios tendrás
Empieza con Next.js. Es el más flexible
puede actuar como una app pequeña y escalar a una gigante sin cambiar de framework.

ORM (como Drizzle:
permite moverte entre bases de datos fácilmente.

Un "Monolito Modular" en Next.js aguanta muchísimo tráfico.



# Monolito simple

Monolito Modular, aplicar Clean Architecture, Arquitectura Hexagonal
La idea es que todo viva en un mismo proyecto y se despliegue junto
pero que por dentro las piezas estén tan bien separadas
si algún día necesitas extraer una parte a un microservicio, sea como desconectar un Lego

1. Capas
Se divide en capas de responsabilidad
las capas externas conocen a las internas
pero las internas no saben nada de las externas.

1. Capa de Dominio: Corazón
residen las reglas de negocio puras
No hay mención a bases de datos ni a librerías externas.

Entidades: Objetos que representan conceptos del negocio
(ej: User, Order, Product).

Value Objects: Pequeños objetos que no tienen identidad pero sí lógica
(ej: un Email que se valida a sí mismo).

2. Capa de App: casos de uso
director de orquesta, definen los procesos de la app

Servicios de App: Funciones como CreateOrder o RegisterUser

Interfaces (Ports): Definiciones de lo que la aplicación necesita
(ej: "Necesito algo que guarde usuarios", sin decir si es MongoDB o PostgreSQL).

3. Capa de Infraestructura (Detalles)
código al mundo real

Repos: Implementaciones reales de las interfaces (ej: SqlUserRepository).
Servicios Externos: Adaptadores para enviar emails (SendGrid), procesar pagos (Stripe) o loguear errores.

4. Capa de Interfaz / API:
Cómo el mundo exterior habla con tu monolito.

Controllers: Reciben peticiones HTTP, validan el formato y llaman a la Capa de Aplicación.
DTOs (Data Transfer Objects): Esquemas que definen qué datos entran y salen.

2. Organización por Módulos (Vertical Slicing)
En lugar de organizar tus carpetas solo por "capas"
(todos los controllers juntos, todos los servicios juntos)
un monolito moderno se organiza por Funcionalidades (Features).

```
src/
├── modules/
│   ├── users/           Todo lo relacionado a usuarios
│   │   ├── domain/
│   │   ├── application/
│   │   ├── infrastructure/
│   │   └── api/
│   ├── catalog/         Todo lo relacionado a productos
│   └── sales/           Todo lo relacionado a pedidos
├── shared/              Código que todos usan (utilidades, logger)
└── main.ts              Punto de entrada
```

3. Mecanismo de Comunicación: Inyección de Dependencias
Para que las capas estén desacopladas, usamos la Inyección de Dependencias (DI).

En lugar de que tu servicio haga const db = new PostgresDB()
el servicio pide "algo que cumpla con la interfaz de DB"
el sistema se lo entrega al arrancar.
hace que tu código sea 100% testeable
en los tests puedes inyectar una "base de datos de mentira" (mock).

4. Ventajas

Baja Cognición:
desarrollador nuevo solo necesita mirar el módulo users para entender cómo funcionan los usuarios

Refactorización Segura:
Puedes cambiar PostgreSQL por MongoDB
solo tocando la capa de infrastructure de un módulo

Preparado para Escalar:
Si el módulo sales recibe demasiado tráfico, puedes copiar esa carpeta
pegarla en un proyecto nuevo y ¡listo, tienes un microservicio!

Cons: La db
Si todos los módulos tocan las mismas tablas sin orden
el monolito se vuelve "peligroso"

Un monolito bien estructurado intenta que cada módulo sea dueño de sus propias tablas (o esquemas).



# Patrones en Backend: Controller + Service + Repository

NestJS ya viene con una estructura de "módulos"
pero para que no se convierta en un caos
aplicamos una versión simplificada de Arquitectura Hexagonal.

1. Responsabilidades

Controller: 
Recibe la petición (HTTP)
valida que los datos (DTO) vengan bien
devuelve la respuesta
(equivalente página/vista)

Service:
lógica de negocio. Decide qué pasa
(ej: "Si el usuario es VIP, dale un 10%").
No sabe nada de bases de datos.
(equivalente Custom Hook)

Repository:
Es el único que toca la base de datos (Prisma, TypeORM, etc.).
Si cambias de base de datos, solo tocas esto.
(equivalente service (axios))


2. Estructura modular
organizamos cada funcionalidad (ej: users) así:

```
src/users/
├── dto/                 Los "contratos" de entrada (CreateUserDto)
├── entities/            El modelo de datos (Cómo luce en la DB)
├── users.controller.ts  El portero (HTTP)
├── users.service.ts     El cerebro (Lógica)
├── users.repository.ts  El bibliotecario (DB)
└── users.module.ts      El pegamento
```

3. Código: flujo
La info fluye de forma limpia

1. Repo (Capa de Datos)
clase que envuelve a tu ORM (ej: Prisma).

```
@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async save(data: CreateUserDto) {
    return this.prisma.user.create({ data });
  }
}
```

2. Servicio (Capa de Lógica)
servicio nunca hace un query directo
Llama al repositorio

```
@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async register(data: CreateUserDto) {
    // 1. Lógica de negocio: ¿Ya existe el email?
    const existing = await this.repository.findByEmail(data.email);
    if (existing) throw new ConflictException('Email en uso');

    // 2. Hashear password, enviar email de bienvenida, etc.
    return this.repository.save(data);
  }
}
```

3. Controller (Capa de Entrada)

```
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.register(createUserDto);
  }
}
```

4. Testing

Unit Tests del Servicio:
Puedes testear la lógica de register sin tener una base de datos real.
Simplemente le pasas un "Repository de mentira" (Mock).

Mantenibilidad:
Si mañana decides cambiar de TypeORM a Prisma
tus servicios y controladores ni se enteran
Solo cambias el código dentro de users.repository.ts

Validación Limpia:
Usando class-validator en los DTOs
el Controller rechaza peticiones basura antes de que lleguen siquiera a tu lógica.


5. Shared
En NestJS tendrás un módulo Common o Shared para:

Filters: Para atrapar errores y devolverlos siempre en el mismo formato.

Interceptors: Para transformar las respuestas
(ej: quitar el password antes de enviarlo al front).

Guards: Para manejar la autenticación (JWT).


## Comienzo Con Nest.js

Si la app es pequeña, NestJS ya te da los `Services` por defecto
Muchos desarrolladores meten los queries de la DB ahí mismo
Pero no se hace.
Crea la capa de Repository desde el día 1




# Arquitectura Hexagonal




# Backend as a Service

Una plataforma en la nube se encarga de toda la infraestructura del lado del servidor
base de datos, autenticación, almacenamiento de archivos, seguridad
El desarrollo se centra en el frontend

Backend Tradicional (Custom):
Desarrollo: Creas la API, el servidor (Node, Go, Python) y la DB.
Autenticación: Programas el JWT, el login, el registro y el envío de emails
Escalabilidad: Tú configuras Docker, Kubernetes o servidores
Tiempo: Semanas o meses de configuración

BaaS:
SDK (librería) para hablar con la nube
activas "Login con Google" en un panel
La plataforma escala automáticamente según el tráfico
Minutos u horas.

Pilares:
Proveedores de BaaS (como Supabase, Firebase o Appwrite) ofrecen estas cuatro herramientas listas para usar

1. Base de Datos en Tiempo Real:
No necesitas crear tablas y endpoints manualmente
Guardas un objeto JSON y, mágicamente
todos los clientes conectados ven el cambio al instante
(WebSockets automáticos).

2. Autenticación:
Gestión de usuarios, recuperación de contraseñas y login social
(Google, GitHub, Apple) resuelto con un par de clics

3. Storage:
Lugar seguro para que tus usuarios suban fotos o videos
Sin que tengas que configurar servidores de archivos o S3 de AWS.

4. Edge Functions (Serverless):
Si necesitas una lógica que no puede ir en el frontend
(como procesar un pago con Stripe)
escribes una pequeña función que se ejecuta en la nube.

Ej: Superbase
un BaaS como Supabase (Open Source y PostgreSQL)
La capa de service que diseñamos antes se simplifica drásticamente

```
// src/services/userService.js
import { supabase } from '../api/supabaseClient';

const userService = {
  // En lugar de axios.get('/users'), usas el SDK del BaaS
  getAll: async () => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('name');
      
    if (error) throw error;
    return data;
  },

  create: async (userData) => {
    const { data, error } = await supabase
      .from('users')
      .insert([userData]);
      
    if (error) throw error;
    return data;
  }
};
```


Uso:
Creando un MVP (Producto Mínimo Viable)
desarrollador independiente o un equipo pequeño
app es de contenido (redes sociales, notas, eCommerce sencillo).

Cons si:

Necesitas un control total sobre el rendimiento de la base de datos
o consultas ultra-complejas.

empresa tiene políticas de datos muy estrictas
donde no puedes usar nubes de terceros

costo: a medida que tu app crece a millones de usuarios
un BaaS puede ser más caro que mantener tu propio servidor

La arquitectura Hooks + React Query + Services sigue siendo válida
Lo único que cambia es que dentro de tus Services
en lugar de llamar a axios.get()
llamas a supabase.from().select()



# Clean Code

Cómo se podría aplicar "Clean Code" en React?

# SOLID
Cómo se podría aplicar "SOLID" en React?



# Problemas/memory leaks






# Uso de Arrays


## Intro a arrays



## Estado con array

Puedes manejar arreglos en el estado

```
const ListaTareas = () => {
  const [tareas, setTareas] = useState(["Estudiar", "Comprar"]);

  const agregarTarea = () => {
    setTareas([...tareas, "Nueva Tarea"]); // Agregar al final
  };

  return (
    <div>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
      <button onClick={agregarTarea}>Agregar Tarea</button>
    </div>
  );
};

```

tareas almacena una lista de strings.

```setTareas([...tareas, "Nueva Tarea"])``` crea un nuevo array con la tarea agregada.

Se usa map para renderizar las tareas dinámicamente.





## Array de Objetos

Listas/array: con for, map(), etc

```
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
```

Con map():
transformar una matriz de productos 
en una matriz de elementos <li>

```
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```

##### Key de arr:
<li> tiene un atributo key para cada elemento de la lista 
cadena o numero de identificación unica para cada hermano
la key debe provenir de tus datos
Ej: como un ID de base de datos
React usa tus claves para saber qué sucedió 
si luego insertas, eliminas o reordenas los elementos.

Ej: 

```
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
```


## Manejar colecciones de datos estructurados
permite a React renderizar listas dinámicas y contenido repetitivo.

colección de ítems con atributos definidos
como una tabla de base de datos o una hoja de cálculo, pero en JavaScript.

1. Renderizado de Listas Dinámicas (principal)
renderizar cualquier lista de elementos repetitivos en la ui

Se usa map() dentro de jsx
##### Por cada objeto en el array, se crea un componente React o un elemento HTML.

Ej:
Una lista de productos en una tienda.
Una lista de comentarios en un blog.
Los ítems en una barra de navegación.
Una lista de tareas pendientes (todos).

```
const productos = [
  { id: 1, nombre: 'Laptop', precio: 1200, stock: 5 },
  { id: 2, nombre: 'Monitor', precio: 300, stock: 12 },
  { id: 3, nombre: 'Teclado', precio: 75, stock: 20 },
];

function ListaProductos() {
  return (
    <ul>
      {/* Usamos .map() para iterar sobre el array de objetos */}
      {productos.map(producto => (
        <li key={producto.id}> {/* Siempre usar la key única! */}
          <strong>{producto.nombre}</strong> - ${producto.precio} 
          ({producto.stock} en stock)
        </li>
      ))}
    </ul>
  );
}
```


2. Gestión del Estado de Componentes (State Management)

##### Los arrays de objetos se utilizan para almacenar datos que cambian con el tiempo, gestionados por el hook useState.

Uso: Cuando un usuario añade un nuevo ítem (p. ej., una nueva tarea),
se crea un nuevo objeto y se añade al array de estado, forzando a React a re-renderizar la lista.

Regla: para actualizar un estado que es un array
siempre debes crear un nuevo array (inmutabilidad).

```
// Asumiendo que 'tareas' es el array de objetos en el estado
const [tareas, setTareas] = useState([
  { id: 1, texto: 'Comprar leche', completada: false }
]);

const handleAddTask = (nuevaTareaTexto) => {
  const nuevaTarea = {
    id: Date.now(), // ID único
    texto: nuevaTareaTexto,
    completada: false,
  };
  
  // Creamos un nuevo array con las tareas existentes + la nueva
  setTareas(prevTareas => [...prevTareas, nuevaTarea]); 
};
```


3. Propiedades de Componentes (Passing Props)

pasar un conjunto completo de datos de un componente padre a un componente hijo para que este lo renderice.

```
// Componente Padre
function App() {
  const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
  return <UserList data={users} />; // Pasar el array como una prop
}

// Componente Hijo
function UserList({ data }) {
  // El componente hijo mapea el array de objetos recibido
  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```


4. Definición de Configuración (Estática)

##### Los arrays de objetos se usan para definir la estructura estática de la UI
como menús, tablas o formularios, que luego se mapean.

Ej:

Definir las columnas de una tabla:
cada objeto especifica el encabezado, el campo de datos y el renderizador.

Definir los enlaces de un menú:
cada objeto tiene el label y la ruta (path).

```
const navLinks = [
  { label: 'Inicio', path: '/' },
  { label: 'Productos', path: '/products' },
  { label: 'Contacto', path: '/contact' },
];

function NavBar() {
  return (
    <nav>
      {navLinks.map(link => (
        <a key={link.label} href={link.path}>{link.label}</a>
      ))}
    </nav>
  );
}
```


## Key en arrays

Operación fundamental y crítica con useState o reducers
garantiza que React detecte correctamente los cambios y se re-renderice solo cuando es necesario

Los arrays y objetos en JavaScript son tipos de referencia
Con una copia superficial solo copia la referencia de la memoria.

React y Detección de Cambios: React compara las referencias de memoria del estado anterior y del nuevo estado.

Mutación (Mala): Si modificas el array o el objeto directamente (ej: array.push(newItem)), la referencia de memoria sigue siendo la misma
React piensa que el estado no ha cambiado y no se re-renderiza la interfaz, causando bugs sutiles.



## Inmutabilidad en arrays

Si creas una copia nueva del array y del objeto modificado, la referencia de memoria es nueva
React detecta el cambio y realiza el re-renderizado.

Para array de objetos:
1. Copiar el Array Externo (el contenedor).
2. Copiar el Objeto Interno que va a ser modificado.

Operaciones Inmutables Comunes:
Añadir, Eliminar, Actualizar de forma inmutable


Operaciones Inmutables Comunes:
Añadir, Eliminar, Actualizar de forma inmutable

### 1. Añadir un Nuevo Objeto (Add)
solo necesitas copiar el array externo, ya que el ítem que añades es un nuevo objeto por sí mismo.

Método: Operador de propagación (...)

```
const [items, setItems] = useState([{ id: 1, text: 'Old Item' }]);

const handleAddItem = (newItemText) => {
  const newItem = {
    id: Date.now(),
    text: newItemText
  };

  // Crea un NUEVO array con los items anteriores + el nuevo item
  setItems(prevItems => [...prevItems, newItem]);
};
```


### 2. Eliminar un Objeto (Delete)
eliminar un ítem: crear un nuevo array que contenga solo aquellos ítems que deseas conservar.

Método: filter()

```
const handleRemoveItem = (itemIdToRemove) => {
  // Crea un NUEVO array que excluye el ítem con el ID coincidente
  const newItems = items.filter(item => item.id !== itemIdToRemove);

  setItems(newItems);
};
```


### 3. Actualizar un Objeto Existente (Update) 
operación más compleja, requiere una doble copia inmutable:

1. Copiar el Array Externo (usando map).
2. Copiar el Objeto Interno que se está modificando.
3. map() + Operador de propagación (...)

```
const [items, setItems] = useState([
  { id: 1, text: 'Comprar leche', done: false },
  { id: 2, text: 'Pagar luz', done: false },
]);

const handleToggleDone = (itemIdToUpdate) => {
  // 1. Usar .map() para iterar y crear un NUEVO array
  const updatedItems = items.map(item => {
    
    // Si encontramos el ítem a actualizar:
    if (item.id === itemIdToUpdate) {
      // 2. Copiar el OBJETO y solo modificar la propiedad deseada
      return { 
        ...item, // Copia todas las propiedades del objeto original
        done: !item.done // Sobreescribe la propiedad 'done'
      };
    }
    
    // Si no es el ítem, lo devolvemos sin cambios (importante)
    return item; 
  });

  setItems(updatedItems);
};
```


### 4. Insertar en una Posición Específica (Insert/Reorder)

Si necesitas insertar un ítem en una posición que no sea el final
puedes combinar el operador de propagación con slice().

Método: slice() + Operador de propagación (...)

```
const handleInsertAtIndex = (newItem, index) => {
  setItems(prevItems => [
    // 1. Elementos antes del índice
    ...prevItems.slice(0, index), 
    // 2. El nuevo ítem
    newItem,
    // 3. Elementos después del índice
    ...prevItems.slice(index) 
  ]);
};
```

Regla:
##### Para modificar un array/objeto, NO lo cambies directamente
##### crea una copia del contenedor inmediato (array) y luego aplica los cambios a ese nuevo contenedor
##### Si el cambio afecta un objeto dentro del array, también debes COPIAR ese objeto antes de modificarlo.



# Uso de Objetos


# Intro a objetos en React


## Estado con Objetos

El estado puede almacenar objetos en lugar de valores simples

```
const Usuario = () => {
  const [usuario, setUsuario] = useState({ nombre: "Juan", edad: 25 });

  const cambiarNombre = () => {
    setUsuario({ ...usuario, nombre: "Carlos" }); // Se mantiene la edad
  };

  return (
    <div>
      <p>Nombre: {usuario.nombre}</p>
      <p>Edad: {usuario.edad}</p>
      <button onClick={cambiarNombre}>Cambiar Nombre</button>
    </div>
  );
};

```

usuario es un objeto { nombre, edad }.

### setUsuario({ ...usuario, nombre: "Carlos" }) usa spread operator (...usuario) para evitar perder la edad al actualizar el nombre






## Objetos con Arrays

organización, categorización y procesamiento de datos en React.

##### Se utiliza cuando los datos se agrupan lógicamente bajo diferentes categorías o claves.

Objetos con propiedades que tienen un array

```
{clave1: [a, b], clave2: [c, d, e]}
```

agrupar ítems relacionados
acceso rápido y una iteración organizada por categoría.

1. Datos Categorizados o Agrupados
presentar contenido organizado en secciones o pestañas
cada clave del objeto es la categoría
el array es la lista de ítems dentro de esa categoría.

Menús/Navegación: 
`links: { 'principal': [...], 'legal': [...], 'social': [...] }`

Productos por Tipo:
`productos: { 'electrónica': [...], 'ropa': [...], 'libros': [...] }`

Permisos de Usuario: 
`permisos: { 'admin': ['crear', 'editar', 'eliminar'], 'lector': ['ver', 'descargar'] }`

Ej: menú por categoría

```
const menuData = {
  // Objeto con Arrays
  platosFuertes: [
    { id: 101, nombre: 'Salmón Grillado', precio: 25 },
    { id: 102, nombre: 'Pasta Alfredo', precio: 18 },
  ],
  postres: [
    { id: 201, nombre: 'Tiramisú', precio: 8 },
    { id: 202, nombre: 'Brownie', precio: 7 },
  ],
};

function MenuComponente() {
  return (
    <div>
      {/* 1. Iterar sobre las claves del Objeto (platosFuertes, postres) */}
      {Object.entries(menuData).map(([categoria, items]) => (
        <section key={categoria}>
          <h2>{categoria.toUpperCase()}</h2>
          <ul>
            {/* 2. Iterar sobre el Array de ítems para renderizar */}
            {items.map(item => (
              <li key={item.id}>{item.nombre} - ${item.precio}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
```


2. Datos de Forms con Múltiples Campos
gestionar el estado de un formulario complejo
donde varias claves (arrays) representan la misma categoría de información
ejemplo, una lista de tags, o múltiples opciones seleccionadas

Selección de Tags:
`formState: { tags: ['react', 'vite', 'css'], selectedUsers: ['user1', 'user2'] }`

Múltiples Archivos:
`uploadState: { archivosAdjuntos: [...], archivosCargados: [...] }`


3. Index y Búsqueda (Acceso Rápido)
El objeto con arrays es superior cuando necesitas acceder a un grupo completo de datos de forma muy rápida utilizando el nombre de la clave.

##### Ventaja: Si tu array tiene miles de ítems y solo quieres buscar los ítems de la categoría "libros"
accedes directamente a productos.libros en lugar de mapear y filtrar el array completo (O(1) vs O(N)).


4. Traducciones y Localización (i18n)
##### Los objetos con arrays son comunes para almacenar datos de traducción cuando se agrupan por pantalla o componente
y el array contiene las frases o variables para ese grupo.

Estructura:
```
{ home: ['welcome_msg', 'login_btn'], profile: ['user_info', 'edit_profile'] }
```


5. Gestión de Estado Centralizada (Reducers/Context)

Redux o Context API:
##### El store o estado global a menudo utiliza esta estructura para organizar las diferentes "entidades" de la aplicación.

Ej: store que separa los usuarios, los posts y los comentarios

```
const appStore = {
  usuarios: [/* array de objetos de usuario */],
  posts: [/* array de objetos de post */],
  comentarios: [/* array de objetos de comentario */],
  // ... más entidades
};
```


## Inmutabilidad en Objetos 

Cuando se trabaja con el estado de React (useState), es crucial mantener la inmutabilidad

Si necesitas modificar un array dentro de tu objeto:
1. Copia el Array: Crea un nuevo array.
2. Copia el Objeto: Crea un nuevo objeto que contenga la versión actualizada del array.

```
// Ejemplo: Añadir un nuevo plato fuerte sin mutar el estado original
const handleAddPlatoFuerte = (nuevoPlato) => {
  setMenuData(prevMenu => ({
    ...prevMenu, // Copia todas las otras claves del objeto (postres, etc.)
    platosFuertes: [...prevMenu.platosFuertes, nuevoPlato], // Crea un nuevo array para esta clave
  }));
};
```


### Copia inmutable de un objeto con arrays
debemos crear nuevas referencias de memoria para los contenedores que cambian.
Crear una nueva copia del objeto externo
Y una nueva copia del array interno que se modifica.

Ej: estado es un objeto que agrupa listas de tareas por prioridad

```
const initialTasks = {
  alta: [
    { id: 1, text: 'Llamar al cliente' }
  ],
  media: [
    { id: 2, text: 'Revisar emails' }
  ],
  baja: [
    { id: 3, text: 'Organizar escritorio' }
  ],
};
// const [tasksByPriority, setTasksByPriority] = useState(initialTasks);
```

1. Añadir un Ítem a un Array Específico
añadir una nueva tarea a la categoría alta
Operación: Copia del Objeto + Copia del Array (usando ...).

```
const handleAddTask = (priority, text) => {
  const newTask = { id: Date.now(), text };

  // 1. Crear un NUEVO objeto de estado
  setTasksByPriority(prevTasks => ({
    // Copia todas las otras categorías (media, baja)
    ...prevTasks, 
    
    // 2. Sobreescribe la clave de la categoría 'priority'
    [priority]: [
      // 3. Crea un NUEVO array de la categoría, añadiendo el nuevo ítem
      ...prevTasks[priority], 
      newTask 
    ]
  }));
};
```

2. Eliminar un Ítem de un Array Específico
eliminar una tarea por su id de la categoría baja
Operación: Copia del Objeto + Filtrado del Array (usando filter()).

```
const handleRemoveTask = (priority, taskIdToRemove) => {
  // 1. Filtrar el array de esa categoría para obtener un NUEVO array
  const newArrayForPriority = tasksByPriority[priority].filter(
    task => task.id !== taskIdToRemove
  );
  
  // 2. Crear un NUEVO objeto de estado
  setTasksByPriority(prevTasks => ({
    ...prevTasks, // Copia las categorías no modificadas
    [priority]: newArrayForPriority // Usamos el array recién filtrado
  }));
};

// Ejemplo de llamada: handleRemoveTask('baja', 3);
```


3. Actualizar un Ítem en un Array Específico
Ej: Queremos cambiar el texto de una tarea en la categoría media.
Operación: Copia del Objeto + Mapeo del Array (usando map()) + Copia del Objeto Interno (usando ...).

```
const handleUpdateTaskText = (priority, taskIdToUpdate, newText) => {
  
  // 1. Crear un NUEVO array mapeando
  const updatedArray = tasksByPriority[priority].map(task => {
    
    if (task.id === taskIdToUpdate) {
      // 2. Copiar el OBJETO INTERNO y actualizar el texto
      return { 
        ...task, 
        text: newText 
      };
    }
    
    return task; // Devolver los objetos no modificados
  });

  // 3. Crear un NUEVO objeto de estado
  setTasksByPriority(prevTasks => ({
    ...prevTasks, // Copia las otras categorías
    [priority]: updatedArray // Reemplaza la categoría modificada
  }));
};

// Ejemplo de llamada: handleUpdateTaskText('media', 2, 'Revisar emails URGENTE');
```


4. Mover un Ítem entre Arrays (Cambiar Categoría)
operación compuesta que requiere Eliminar de un array y Añadir a otro.
Operación: Doble Copia del Objeto + Doble Operación en Arrays.

```
const handleMoveTask = (taskId, oldPriority, newPriority) => {
  // 1. Encontrar el ítem a mover (requiere una copia para evitar mutación indirecta)
  const taskToMove = tasksByPriority[oldPriority].find(t => t.id === taskId);
  if (!taskToMove) return;

  setTasksByPriority(prevTasks => ({
    ...prevTasks,
    
    // 2. Copia inmutable: Eliminar de la antigua categoría
    [oldPriority]: prevTasks[oldPriority].filter(t => t.id !== taskId),
    
    // 3. Copia inmutable: Añadir a la nueva categoría
    [newPriority]: [...prevTasks[newPriority], taskToMove]
  }));
};

// Ejemplo de llamada: handleMoveTask(3, 'baja', 'media');
```

Cuando trabajas con un objeto que tiene claves variables (como priority), recuerda la sintaxis del operador de propagación con corchetes en JavaScript:

```
const newObject = {
  ...oldObject, // Copia todas las propiedades de oldObject
  [dynamicKey]: newValue // Usa el valor de la variable como nombre de propiedad
};
```


# Code


## Vite

```
nvm use

npm run dev
```


Vitest:

```
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

vitest: El corredor de tests (reemplaza a Jest).
@testing-library/react: Herramientas para renderizar componentes.
jsdom: Simula un navegador en Node.js.
@testing-library/jest-dom: Añade "matchers" personalizados como .toBeInTheDocument().


Config Vite
Uso de vitest y el entorno de pruebas deba ser navegador simulado

vite.config.js (o .ts):

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,           // Permite usar 'describe', 'it', 'expect' sin importarlos
    environment: 'jsdom',    // Simula el DOM del navegador
    setupFiles: './src/setupTests.js', // Archivo de configuración inicial
  },
})
```

Setup (setupTests.js)
Crea el archivo src/setupTests.js.
se ejecutará antes de cada test para extender las capacidades de Vitest con las de RTL.

```
import '@testing-library/jest-dom';
```


styled:

```
npm install styled-components
```



## Arq

Data: 

person:
name, surname, profession, pic, bio, proj/links 

proj:
yourPortfolio, aiState...

widget:
date
time
wheater

person has projects

```
				App
(widget)		(proj)			(person)
date			ProjectsInfo	bio
time				links		pic
wheater			 	SocialMedia
```



```
 src/
1.		features
			profile
				components
					profile.jsx
				hooks
				profile.js
			widget
				components
				widget.js				
2. shared
		components
			ui
			  btn
			  main 
			  section
			  aside
			  article
			  footer
			  time
			  img
			  link
			  embed
			  pic
			  source
		hooks
		utils
		
		
3. store/globalState

4. api

5. pages

6. style
		theme
		global
7. app.js
``` 


dumb, smart, hook:
hook -> rtn obj/estados
smrt -> rtn dumb le pasa obj/custom hook
dumb -> rtn elemHtml/presen usando info smrt


comp components: 
app: (div)
wid (art) , proj (main), pers (aside)

pers: 
pic/img
bio(p)

proj:
p/a/links
icons/a/links

wid:
art:
date, time, wheater

dumb: children (span, p, li, h1..., a)



## Esqueleto

### 1. Vite

main jsx:

```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```


app.jsx:

```
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme/theme';
import { Button } from './shared/components/ui/button/Button';

function App() {

  return (
    <ThemeProvider theme={theme}>
        <p>Hola</p>
        <Button>Botón </Button>
    </ThemeProvider>

  );
}

export default App
```



### 2. React

```
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```


### 3. index.html

```
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
```



### 4. Estilo: 

1. Styled: 
Si falla el objeto (por logica o sintaxis) al usarlo o construirlo
no renderizará la app

theme.js:

```
export const theme = {
  colors: {
    primary: '#3b82f6',
  },
  spacing: {
    borderRadius: '2em',
  },
}
```

Button.js

```
import styled from 'styled-components';

export const Button = styled.button`
  border-radius: ${({ theme }) => theme.spacing.borderRadius};
  border-color: ${({ theme }) => theme.colors.primary}
`;
```


Button.jsx:

```

```


### 5. setupTest y vite.config js


1. Sin vitest y rtl 

viteconfig.js

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
	/*
	
	*/
})
```



2. Con vitest y rtl

setupTest.js:

```
import '@testing-library/jest-dom';
```

vite.config.js:

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  }
})

```


### 6. barril 

componente:

```
import styled from 'styled-components';

export const Button = styled.button`
  border-radius: ${({ theme }) => theme.spacing.borderRadius};
  border-color: ${({ theme }) => theme.colors.primary}
`; 
```

index:

```
export { Button } from './button/Button'; 
```

app:

```
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme/theme';
import { Button } from './shared/components/ui';


function App() {

  return (
    <ThemeProvider theme={theme}>
        <p>Hola</p>
        <Button>Botón </Button>
    </ThemeProvider>
  );
}

export default App 
```

error de ruta y componente:

```
import { Button } from './shared/components/ui';
```
falta '/button/Button'


### 7. provider

provider:
children para renderear componentes

```
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme/theme';

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default AppProviders;
```

app:
Importar componentes a usar

```
import AppProviders from './providers/AppProviders';
import { Button } from './shared/components/ui';

function App() {

  return (
    <AppProviders>
        <p>Hola</p>
        <Button>Botón </Button>
    </AppProviders>
  );
}

export default App
```



# Todo

1. provider, theme (hecho/funciona)

2. test y config/organización (hecho)

3. archivos y carpetas separados (style y provider) (hecho)

4. global styles

5. objetos/entidades y componentes




# Client, service y hooks

```
src/
├── api/
│   └── apiClient.js       <-- Aquí vive la instancia de Axios con interceptores
├── services/
│   ├── userService.js     <-- Lógica para el dominio de Usuarios
│   ├── authService.js     <-- Lógica para Login/Registro
│   └── productService.js  <-- Lógica para el catálogo
└── components/
    └── UserList.jsx       <-- Solo consume los servicios
```

```
src/
├── api/
│   └── client.js        # Configuración de Axios
├── services/
│   └── users.js         # Endpoints: getAll(), getById(), etc.
├── hooks/
│   └── useUsers.js      # Lógica: loading, error, data fetching
└── components/
    ├── common/          # Componentes tontos/reutilizables (Dumb)
    └── features/        # Componentes de UI específicos de la lógica

```

## Providers

## styles

## layout, pages



# Renderizar objeto

## Destructuring: acceso directo

Si sabes exactamente qué propiedades tiene el objeto, la forma más limpia y "React-ish" es desestructurar el objeto.
Esto evita que tu código se llene de usuario.nombre, usuario.apellido, etc.

```
const DetalleUsuario = ({ usuario }) => {
  const { nombre, edad, profesion } = usuario;

  return (
    <div>
      <h2>{nombre}</h2>
      <p>Edad: {edad}</p>
      <p>Trabajo: {profesion}</p>
    </div>
  );
};
```


## Mapping de objeto dinamico

A diferencia de los arrays, los objetos no tienen un método .map().
Si necesitas iterar sobre todas las propiedades
(por ejemplo, para una tabla de especificaciones)
usa Object.entries().
devuelve un array de pares `[clave, valor]`.

```
<ul>
  {Object.entries(configuracion).map(([key, value]) => (
    <li key={key}>
      <strong>{key}:</strong> {value.toString()}
    </li>
  ))}
</ul>
```

## Cargar desde una API: Renderizado Condicional y Optional Chaining

es muy común que el objeto llegue null o undefined mientras se carga desde una API
Para que tu app no explote, usa el Optional Chaining (?.)

Mal: {usuario.direccion.calle} (Si direccion no existe, crash).
Bien: {usuario?.direccion?.calle || "Dirección no disponible"}.


## Debugg objeto

etiqueta <pre> junto con JSON.stringify
ver que tiene el objeto sin formatear
El tercer argumento (2) es la clave
le da indentación y lo hace legible

```
<pre>
  {JSON.stringify(miObjeto, null, 2)}
</pre>
```



# Componentes dedicados para objetos

Separar un objeto complejo en componentes dedicados
lo vuelve mucho más fácil de mantener y escalar

SRP: Cada componente se encarga de una sola cosa
Un componente Avatar solo se preocupa de mostrar la imagen
mientras que un UserBio solo formatea el texto

Reutilización: Si creas un componente <Badge label={usuario.rol} />
luego puedes usar ese mismo Badge para mostrar categorías,
estados de pago o cualquier otra etiqueta en otra parte de la app

Testing: probar un componente pequeño que recibe dos props que uno gigante

Optimización (Memoización): Si una parte del objeto cambia pero el resto no
React puede evitar re-renderizar los componentes cuyas props no han variado (usando React.memo).

Ej objeto:

```
const post = {
  id: 1,
  titulo: "React es genial",
  autor: { nombre: "Alex", foto: "url..." },
  estadisticas: { likes: 150, shares: 30 }
};
```

Componente gigante:

```
//Difícil de leer y reutilizar
const Post = ({ post }) => (
  <div>
    <h1>{post.titulo}</h1>
    <img src={post.autor.foto} alt={post.autor.nombre} />
    <span>{post.autor.nombre}</span>
    <div>Likes: {post.estadisticas.likes}</div>
  </div>
);
```

Componentes dedicados

```
// Modular y profesional
const Post = ({ post }) => (
  <article>
    <Header title={post.titulo} />
    <AuthorInfo user={post.autor} />
    <Stats likes={post.estadisticas.likes} shares={post.estadisticas.shares} />
  </article>
);
```


### Evitar Prop Drilling

Si empiezas a separar componentes demasiado
por ejemplo, Post -> AuthorInfo -> Avatar -> Image

Si un dato lo necesitan muchos componentes en niveles muy distintos
quizás es hora de usar Context API o un estado global
Pero para mostrar los datos de un solo objeto, pasar props es lo ideal

### Creación componente especifico

Si lo vas a usar más de una vez
o si el JSX de tu componente principal ya mide más de 50 líneas, sepáralo



# Componentes de ui 

Siguiendo Atomic Design

1. Componentes de Entrada (Inputs)
permiten al usuario interactuar y enviar datos
donde ocurre la "conversación" usuario-app.

Button: El rey de la acción. Dispara eventos (enviar, borrar, abrir).
Input / Text Area: Campos para escribir texto corto o largo.
Select / Dropdown: Una lista desplegable para elegir una o varias opciones.
Checkbox / Radio: Para selecciones binarias o elegir una opción entre varias visibles.
Switch / Toggle: Un interruptor (on/off), ideal para configuraciones.

2. Componentes de Navegación
Ayudan al usuario a saber dónde está y a moverse por la aplicación

Navbar: La barra superior con los enlaces principales.
Sidebar: Menú lateral, común en dashboards o paneles de control.
Tabs: Pestañas para cambiar de contenido dentro de una misma vista.
Breadcrumbs: (Migas de pan) Indican la ruta jerárquica (ej: Inicio > Ajustes > Perfil).
Pagination: Para dividir listas largas en páginas manejables.

3. Componentes de Visualización y Datos
Su función es presentar la información de forma estructurada y estética.

Card: Un contenedor que agrupa información relacionada (ej: foto, título y precio de un producto).
Table: Para mostrar datos crudos y comparables en filas y columnas.
Badge / Tag: Etiquetas pequeñas para mostrar estados o categorías (ej: "Nuevo", "Vendido").
Avatar: Representación visual (imagen o iniciales) de un usuario.
List / Accordion: Listas de elementos que pueden expandirse para mostrar más detalle

4. Componentes de Feedback y Estado
Le dicen al usuario qué está pasando "detrás de escena".

Modal / Dialog: Ventanas que flotan sobre la interfaz y requieren atención inmediata
Toast / Alert: Mensajes temporales (normalmente en una esquina) que confirman acciones ("Guardado con éxito").
Loader / Spinner: El indicador de carga para que el usuario no piense que la web se rompió.
Tooltip: Ese mensajito que sale cuando dejas el ratón encima de algo para explicar qué hace

5. Componentes de Layout/Estructura
Son invisibles para el usuario final, pero son los que mantienen todo en su sitio.

Container: Define el ancho máximo y centra el contenido.
Grid / Stack: Controlan el espaciado y la alineación de los componentes hijos (filas y columnas).
Divider: Una línea simple para separar secciones visualmente.

Entrada: TextField: Cuando necesitas que el usuario te dé información.
Navegación: Navbar: Cuando el usuario necesita moverse a otra sección.
Visualización: Card: Cuando quieres destacar un objeto de tu base de datos.
Feedback: Modal: Cuando necesitas interrumpir al usuario para una decisión.
Estructura: Box / Flex: Cuando los elementos están desordenados y necesitan aire.



# Componentes y estructura de HTML

Integrar tus componentes de React con etiquetas semánticas de HTML
(<main>, <article>, <aside>, etc.)
para una web profesional, accesible y optimizada para SEO.


## 1. Componente Envoltorio (Wrapper)

Creas un componente de React cuyo único propósito es renderizar una etiqueta semántica
dentro de ella colocar sus hijos (children).

```
const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar /> {/* Componente de Navegación */}
      </header>
      
      <main>
        {children} {/* Aquí va el contenido dinámico */}
      </main>
      
      <aside>
        <Sidebar /> {/* Componente de Visualización */}
      </aside>
      
      <footer>
        <FooterLinks />
      </footer>
    </>
  );
};
```


## 2. Mapeo Semántico por Propósito

Cada categoría de componente e un "hogar natural" en el HTML semántico

<header>:
Navbar, Logo, SearchBar
Es la introducción de la página o sección.

<nav>:
Menu, Breadcrumbs, Tabs
Contiene enlaces de navegación primaria.

<main>:
El contenido central de la ruta actual
Solo debe haber uno por página

<article>:
Card de blog, Post, ProductDetail
Contenido que tiene sentido por sí mismo.

<section>:
Agrupadores de Lists, Grids
Temas genéricos dentro del main

<aside>:
Widgets, Ads, RelatedLinks
Información relacionada pero no principal

<footer>:
Copyright, SocialLinks
Información de cierre o legal.


## 3. Componentes Polimórficos

En librería propia de componentes, puedes usar la propiedad as.
Esto permite que un mismo componente de UI
(como un Box o un Container)
se comporte como cualquier etiqueta HTML según lo necesites.

```
// Un componente flexible que acepta la prop "as"
const Box = ({ as: Component = 'div', children, ...props }) => {
  return <Component {...props}>{children}</Component>;
};

// Uso en la App:
function App() {
  return (
    <Box as="main" className="p-4">
       <Box as="article" className="card">
          <h2>Título del Post</h2>
          <p>Contenido...</p>
       </Box>
    </Box>
  );
}
```

Ventajas:

Accesibilidad (A11y): lectores de pantalla para personas con discapacidad visual usan estas etiquetas para saltar rápidamente al contenido principal o a la navegación
SEO: Google entiende mejor de qué trata tu página si sabe qué es un artículo (<article>) y qué es simplemente publicidad lateral (<aside>).
Mantenibilidad: Es mucho más fácil leer un árbol de componentes que dice <header> que uno que tiene 50 <div> anidados



# SEO

1. Caos de los Encabezados (<h1> a <h6>)
Los buscadores usan los encabezados para entender la jerarquía de tu contenido

error: Saltarse niveles (pasar de un <h1> a un <h3> porque el <h3> se ve más pequeño y te gusta el estilo).
castigo: Los lectores de pantalla se confunden y Google penaliza la estructura de tu página porque no "entiende" qué secciones son subtemas de cuáles.

Regla: Usa CSS para el tamaño, pero mantén la jerarquía lógica (h1 -> h2 -> h3).
Solo debe haber un solo <h1> por página.

2. "Div-itis" (Botones que no son botones)
tentador poner un onClick en un <div> o un <span>
porque es más fácil de estilizar que un <button>.

error: <div onClick={hacerAlgo}>Click aquí</div>.
castigo: usuario que usa la tecla Tab para navegar nunca podrá "llegar" a ese div.
SEO: Google no identifica ese elemento como una interacción importante.

solución: Usa siempre <button type="button">.
Si necesitas que parezca un texto normal, quítale los estilos con CSS.

3. "Inception" de Enlaces (<a> dentro de <a>)
Al igual que el botón dentro de un enlace, poner un link dentro de otro es un desastre técnico

error: Un Card completo que es un <a> y dentro tiene un enlace al perfil del autor.
castigo: El navegador intenta "corregir" el HTML rompiendo tu estructura.
Si inspeccionas el código en el navegador, verás que ha cerrado el primer enlace antes de empezar el segundo
destruyendo tu diseño.

4. Listas huérfanas (<li> sin <ul> o <ol>)
Las etiquetas de lista tienen una relación de "padre e hijo" obligatoria.

error: Usar <li> directamente dentro de un <nav> o un <div> solo porque te gusta el puntito que pone el navegador
castigo: Los motores de búsqueda no reconocen el grupo como una lista de elementos relacionados
diluye la importancia de esos datos (especialmente malo en menús de navegación).

5. Etiquetas de Formulario sin Identidad
error: Usar un <p> o un <span> para poner el nombre de un campo de texto en lugar de un <label>.
castigo: Si un usuario hace clic en el texto, el cursor no saltará al input automáticamente (pérdida de UX).
Además, los algoritmos de autocompletado de los navegadores fallan al intentar ayudar al usuario.

<a> dentro de <a>: El navegador rompe el DOM y el SEO se confunde. Usa un div con un evento o posiciona los links por separado.
<h1> múltiple: Google no sabe cuál es el tema principal. "Un solo <h1>, varios <h2>."
Tablas para Layout: Pésimo para dispositivos móviles y lectores. Usa Flexbox o CSS Grid.
Img sin alt: Google Imágenes no te encuentra y es inaccesible. "Siempre pon un alt="""" (aunque sea vacío)."

Herramientas como eslint-plugin-jsx-a11y


## Tipos de errores SEO - Navegador

1. Errores de Jerarquía y Estructura (Golpe Directo al SEO
confunden a los bots de Google sobre de qué trata realmente tu página.

Múltiples <h1>: El <h1> es el título del libro
Tener cinco títulos en una sola página diluye la relevancia.

Saltos de nivel en encabezados: Pasar de un <h1> a un <h4> rompe el esquema lógico.
Es como leer un índice de un libro donde faltan los capítulos 2 y 3.

Contenido importante en <iframe>: Los buscadores suelen ignorar lo que hay dentro de un frame
Si tu texto clave está ahí, para Google no existe.

Listas sin contenedores: Usar <li> fuera de un <ul> o <ol>.
Esto rompe la estructura de datos que los bots usan para generar "fragmentos destacados" (featured snippets).

2. Errores de Interactividad (Castigo en Accesibilidad y UX)
Si un componente no se puede usar con el teclado o no anuncia qué hace
estás excluyendo a usuarios y perdiendo puntos en las métricas de "Core Web Vitals".

Botones "Fantasma" (div con onClick): si no es un <button>, el navegador no lo incluye en el orden del tabulador

Enlaces sin texto (Iconos solos):
Un <a> que solo tiene un icono de Instagram dentro, sin texto oculto (aria-label)
es un enlace ciego para los lectores de pantalla y para Google.

Formularios sin label: Usar un placeholder como si fuera una etiqueta
Cuando el usuario escribe, el placeholder desaparece y se pierde el contexto
Además, el navegador no sabe qué datos pedir para el autocompletado

3. Errores de Anidamiento Inválido (Conflictos del Navegador)
el navegador se rinde y empieza a "inventar" código para que la página no se rompa, lo cual puede destruir tu diseño de React

<a> dentro de <a> o <button> dentro de <a>:
El navegador cerrará automáticamente el primer enlace en cuanto encuentre el segundo
dejando el resto de tu HTML "huérfano" y rompiendo tus estilos CSS.

Elementos de bloque dentro de elementos de línea:
Por ejemplo, meter un <div> o un <h1> dentro de un <span>.
Aunque HTML5 lo permite en ciertos casos, suele causar comportamientos visuales erráticos.

Tablas mal formadas:
Poner contenido directamente en un <table> sin pasar por un <tr> o <td>.
El navegador moverá ese contenido fuera de la tabla, arriba del todo.

herramientas:
Linter de Accesibilidad
extensión "Axe Accessibility" en vs code
plugin eslint-plugin-jsx-a11y.

Google mide el LCP (Largest Contentful Paint)
Si usas un <div> gigante para cargar una imagen en lugar de una etiqueta <img> con sus dimensiones correctas
tu puntuación de velocidad caerá y bajarás en los resultados de búsqueda.



# Especialización de Componentes

Tener dos "capas" de componentes

Componentes de UI (Genéricos): Card, Button, Modal
No saben qué datos muestran, solo definen el diseño

Componentes de Dominio (Específicos): Se llaman Bio, ProjectCard, ProductList
Estos componentes usan a los genéricos por dentro.

```
// 1. El componente genérico (estilo)
const Card = ({ children, className }) => (
  <div className={`shadow-md rounded-lg p-4 ${className}`}>
    {children}
  </div>
);

// 2. El componente específico (dominio)
const Bio = ({ user }) => (
  <Card className="bg-blue-50"> 
    <h2>{user.name}</h2>
    <p>{user.description}</p>
  </Card>
);
```

Solo da estilo visual: Genérico
"Container, Grid, Typography"

Representa un objeto de tu base de datos:
Específico (Modelo),"UserCard, ProjectItem, InvoiceRow"

Es una sección entera de la página Específico (Sección):
"Hero, ContactForm, ProjectsSection"

Es una página completa: Vista/Page
"HomePage, Dashboard, Settings"


### Advertencia sobre componente especifico

Llamar a un componente simplemente Bio está genial si estás dentro de una carpeta llamada /features/profile.
Pero si tu aplicación crece mucho, podrías terminar con tres componentes llamados igual.

Muchos desarrolladores prefieren ser un poco más descriptivos
ProjectMain (en lugar de solo Projects)
UserBio (en lugar de solo Bio)


# Componentes Genericos

librería de componentes genéricos
UI Kit o Design System

1. Agnosticismo Total
Componente genérico no debe saber nada de tu lógica de negocio

Mal: Un componente llamado UserCard que recibe un objeto usuario.
Bien: Un componente llamado Card que recibe un title, un image y un children.


2. Componente Genérico pro
Para que sea realmente útil
Debe cumplir con 4 características:

1. Prop children (Composición):
No intentes crear props para cada pedacito de texto
Deja que el usuario meta lo que quiera dentro.

```
// En lugar de <Button text="Click" icon="home" />
// Es mejor:
const Button = ({ children, ...props }) => (
  <button {...props} className="btn-style">
    {children}
  </button>
);
```

2. Prop as (Polimorfismo):
permite que tu componente cambie su etiqueta HTML pero mantenga sus estilos
vital para el SEO

Ej: Un componente <Text as="h1"> renderiza un <h1>
pero <Text as="p"> renderiza un párrafo con el mismo estilo visual.

3. Extensión de Atributos (...props):
Siempre, siempre usa el spread operator al final de tus props
Así, si alguien quiere añadir un type="submit", un onMouseEnter o un aria-label
tu componente lo aceptará sin que tengas que programarlo explícitamente

4. D. Combinación de Clases
No sobrescribas la clase base, combínala
Usa librerías como clsx o tailwind-merge para que el usuario pueda añadir estilos extra desde fuera.


3. Clasificación

Categoría | Componentes Clave |Propósito

Layout: "Box, Stack, Container"
"Controlar el espaciado, alineación y estructura."

Tipografía: "Text, Heading"
"Unificar tamaños de fuente, pesos y colores de texto."

Acciones: "Button, IconButton, Link"
"Todo lo que sea ""clicable""."

Contenedores: "Card, Modal, Accordion"
Agrupar contenido relacionado visualmente.

Formularios: "Input, Checkbox, Select"
Captura de datos estandarizada.


4. Error de dar Margen Externo
Nunca le pongas margin (espacio exterior) a un componente genérico dentro de su CSS base.

Si un Button tiene un margin-right: 10px por defecto
el día que quieras centrarlo o ponerlo al final de una línea
Si un Button tiene un margin-right: 10px por defecto, el día que quieras centrarlo o ponerlo al final de una línea, tendrás que "pelearte" con tu propio CSS.

La regla: El componente define su espacio interno (padding)
pero el padre define dónde se coloca (margin o gap).


5. Componente Box
Componente que es el "átomo" de cualquier UI Kit moderno

```
const Box = ({ as: Component = 'div', children, className = '', ...props }) => {
  return (
    <Component 
      className={`box-base-styles ${className}`} 
      {...props}
    >
      {children}
    </Component>
  );
};

// Uso: <Box as="section" className="p-4 shadow"> Contenido </Box>
```



# Componentes de Dominio/Especificos

Componentes que tienen "opinión": saben qué datos manejan
cómo deben formatearse y qué reglas de negocio deben seguir

1. Principio: Consumo Inteligente
Casi nunca debería tener estilos CSS complejos propios
En su lugar, debe orquestar componentes genéricos

lógica: decide qué se muestra, y el genérico decide cómo se ve

2. Pasar objeto entero o solo las props
Pasa el objeto si el componente es "dueño" de esa entidad

Caso A (para dominio): 
<ProfileCard user={userData} />.
limpio, si el día de mañana el usuario tiene un nuevo campo pronouns
solo actualizas el interior del componente

Caso B (componentes muy reutilizables):
<Card title={userData.name} />
Úsalo solo si quieres que esa Card sirva tanto para usuarios
como para otros dominios como producto, etc

3. Encapsulación de Lógica de Formateo
componente de dominio es el lugar perfecto para limpiar los datos que vienen de la API
No ensucies tu componente principal con lógica de "parseo".

```
// El componente de dominio limpia los datos
const InvoiceRow = ({ invoice }) => {
  const formattedDate = new Date(invoice.createdAt).toLocaleDateString();
  const amountInCurrency = new Intl.NumberFormat('es-AR', { 
    style: 'currency', currency: 'ARS' 
  }).format(invoice.total);

  return (
    <Box as="tr">
      <td>{invoice.id}</td>
      <td>{formattedDate}</td>
      <Text weight="bold">{amountInCurrency}</Text>
    </Box>
  );
};
```

4. Manejo de Estados de "Gracia"
Debe saber qué hacer cuando los datos no son perfectos
No esperes a que el componente padre lo gestione

Estado de Carga (Skeleton):
Si el objeto es null, muestra una versión gris/animada.

Estado Vacío:
Si no hay datos, muestra un mensaje amigable ("No hay proyectos aún").

Fallback de errores:
Si falta una imagen, muestra un avatar por defecto.

5. Estructura
En Features

src/components/ui/ -> Aquí van los Genéricos (Button, Card, Input).
src/features/auth/components/ -> Aquí van los de Dominio de esa función (LoginForm, RegisterCard).
src/features/projects/components/ -> (ProjectList, ProjectStatusBadge).

UI y Dominio:

Nombre:	Avatar | UserAvatar
Props: src, size, alt | user (el objeto completo)
CSS: Mucho (bordes, sombras, flex) | Poco (suele usar un Box o Stack)
Conocimiento: No sabe qué es un "Usuario" | Sabe que un usuario tiene imgUrl
Reutilización: En cualquier proyecto | Solo en este proyecto

Especificidad en los componentes:
HeaderBlueWithSearchAndLogo es demasiado específico y rígido
Es mejor tener un Header (genérico)
un AppHeader (dominio) que coloque el Logo y el SearchBar dentro del Header.

Si sientes que estás copiando y pegando el mismo código


# Componente ui y dominio interacción 

1. Genérico: Card
no tiene ni idea de qué es un Usuario
Solo sabe que debe tener un borde, una sombra y un espacio para contenido

```
// src/components/ui/Card.jsx
export const Card = ({ children, padding = "p-4", className = "" }) => {
  return (
    <div className={`bg-white shadow-lg rounded-xl overflow-hidden ${padding} ${className}`}>
      {children}
    </div>
  );
};
```

2. Dominio: UserProfile
componente jefe, Recibe un objeto user, decide qué datos mostrar 
y usa al componente Card para que se vea bonito.

```
// src/features/users/components/UserProfile.jsx
import { Card } from "../../components/ui/Card";

export const UserProfile = ({ user }) => {
  // Lógica de dominio: ¿El usuario es VIP o normal?
  const borderClass = user.isVip ? "border-2 border-gold" : "border-gray-200";
  
  return (
    <Card className={borderClass}>
      <div className="flex items-center gap-4">
        <img 
          src={user.avatarUrl || "/default-avatar.png"} 
          alt={user.name} 
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-500 text-sm">@{user.username}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <p>{user.bio}</p>
      </div>
    </Card>
  );
};
```

Ventajas:
Si mañana quieres que la tarjeta sea azul en lugar de blanca, cambias Card.jsx
Si mañana el objeto user cambia su propiedad name por fullName
solo tocas UserProfile.jsx

separación (UI + Dominio):

Quieres crear una lista de productos:
Reutilizas el Card y creas un ProductCard

El diseñador cambia las sombras:
Cambias 1 archivo (Card.jsx)

Hacer un Test Unitario:
Pruebas que Card renderiza hijos correctamente


# Styled Components

mantener los estilos encapsulados
usar lógica de JavaScript directamente en el diseño
evita las colisiones de nombres

```
import styled from 'styled-components';

// Definimos el "esqueleto" visual
export const StyledCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  /* Podemos usar props directamente en el CSS */
  padding: ${props => props.$padding || '1rem'};
  border: ${props => props.$isVip ? '2px solid #ffd700' : '1px solid #e5e7eb'};

  &:hover {
    transform: translateY(-4px);
  }
`;
```

Uso el prefijo $ (como $padding), se llaman Transient Props
usa esta prop para el CSS, pero no la pasa al elemento HTML final

2. Componente de Dominio lo consume
sigue siendo el que tiene la lógica
ahora le pasa "órdenes" al Styled Component a través de props.

```
// src/features/users/components/UserProfile.jsx
import { StyledCard } from "../../components/ui/StyledCard";

export const UserProfile = ({ user }) => {
  return (
    <StyledCard $isVip={user.isVip} $padding="2rem">
      <div className="profile-content">
        <img src={user.avatarUrl} alt={user.name} />
        <h3>{user.name}</h3>
        <p>{user.bio}</p>
      </div>
    </StyledCard>
  );
};
```

3. Ventajas para ui

1. Polimorfismo nativo: Styled Components ya trae la prop as.
Si quieres que tu Card sea un <article> por semántica, solo haces:

```
<StyledCard as="article">...</StyledCard>.
```

2. Theming
Puedes envolver tu app en un ThemeProvider y acceder a colores globales (props.theme.primary) dentro de cualquier componente de UI.

3. Cero CSS huérfano
Si borras el componente StyledCard, el CSS se borra con él
No quedan archivos .css de 3000 líneas que nadie se atreve a tocar.


4. Styled Components vs Tailwind

Styled Components:
creando una librería de componentes de diseño muy personalizada
necesitas lógica compleja en el CSS (como cálculos basados en props)
o prefieres tener el CSS y el JS en el mismo archivo.

Styled Components es una joya porque te permite crear una API muy limpia para otros desarrolladores
puedes exponer props como variant="primary", size="large"
manejar toda esa lógica visual dentro del archivo del componente

Tailwind:
prototipar a la velocidad de la luz
prefieres no pensar nombres de clases
y quieres que el bundle de tu aplicación sea lo más pequeño posible


## Variantes en styled components




# Biblioteca ui

Piezas para que otros (o tú mismo en el futuro) puedan construir ciudades enteras.

1. Elementos
definir los Design Tokens
son los valores atómicos que aseguran que todo se vea coherente

Paleta de Colores:
Primarios, secundarios, estados (error, éxito) y escalas de grises.

Tipografía:
Fuentes, tamaños (14px, 16px, 20px), pesos (bold, regular) y alturas de línea.

Espaciado (Spacing):
Una escala base (ej. múltiplos de 4px o 8px) para márgenes y paddings.

Sombras y Bordes:
Elevaciones (z-index) y radios de curvatura (border-radius).


2. Componentes: Jerarquía
Para organizar los componentes, Atomic Design

Átomos: Componentes indivisibles
Button, Input, Label, Icon, Badge.

Moléculas: Unión de dos o más átomos
SearchBar (Input + Button), FormField (Label + Input).

Organismos: Secciones complejas de la UI
Navbar, Footer, CardGrid.

Templates:
Estructuras de página sin contenido real
DashboardLayout, AuthLayout


3. NPM

1. Definición Técnica:
herramientas a usar, ej styled como base de estilo

Languaje: js o ts.
Con ts, los usuarios de tu librería tienen autocompletado

Bundler: empaquetar el código
Vite o Rollup, estándares actuales para librerías

2. Desarrollo de "Fundaciones"

ThemeProvider:
componente que envolverá a toda la aplicación
proveerá los colores y fuentes que definiste en los Design Tokens.

3. Taller de Pruebas (Storybook)
No puedes construir una biblioteca "a ciegas" dentro de una app normal

Necesitas Storybook: permite renderizar tus componentes de forma aislada
probar todas sus variantes (ej: botón rojo, botón grande, botón deshabilitado)
documentarlos automáticamente.


4. Accesibilidad y Testing

Aria-roles: Asegúrate de que tus componentes sean legibles por máquinas.
Unit Testing: Usa Vitest o Jest para asegurar que, si alguien actualiza el Button, no rompa toda la biblioteca


5. Distribución
Publicar en NPM o tener un repositorio privado
configurar el archivo package.json
que el usuario pueda hacer import { Button } from 'tu-libreria'.




# Accesibilidad - Aria label

no es solo "añadir etiquetas"
asegurar que cualquier persona, independientemente de cómo navegue
(teclado, lector de pantalla, comandos de voz), pueda usar tu aplicación

1. Semántica antes que Aria
No uses ARIA si puedes usar un elemento nativo de HTML

Mal: <div role="button" onClick={...}>Enviar</div>
Bien: <button type="button" onClick={...}>Enviar</button>

El navegador ya sabe qué hace un <button>, cómo manejar el foco y qué anunciar al lector de pantalla
Si usas un div, tienes que programar todo eso a mano.

2. Fragmentos para no romper el DOM
A veces, para que React funcione, envolvemos todo en <div>, pero esto rompe la semántica
por ejemplo, dentro de una tabla o una lista
Ract Fragments para agrupar elementos sin añadir nodos innecesarios

```
// No añade un div extra que rompería una lista <ul>
const ListItems = ({ items }) => (
  <>
    {items.map(item => <li key={item.id}>{item.text}</li>)}
  </>
);
```

3. Atributos ARIA
ARIA (Accessible Rich Internet Applications)
es un puente para cuando HTML nativo no es suficiente

aria-label: Cuando un elemento no tiene texto visible
(ej. un botón con solo un icono de "X").

```
<button aria-label="Cerrar modal">X</button>
```

aria-expanded: Para componentes que se abren/cierran
(acordeones, menús).

```
<button aria-expanded={isOpen}>Menú</button>
```

aria-hidden="true": Para ocultar elementos decorativos (como iconos)
que el lector de pantalla no necesita leer

4. Gestión del foco: useRef
En React, cuando abres un modal o cambias de página, el foco del teclado puede "perderse".
Debes moverlo manualmente hacia el elemento correcto usando el hook useRef

```
const Modal = ({ isOpen, onClose }) => {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // 🎯 Mandamos el foco al botón de cerrar al abrir el modal
      closeBtnRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div role="dialog" aria-modal="true">
      <button ref={closeBtnRef} onClick={onClose}>Cerrar</button>
      {/* Contenido */}
    </div>
  );
};
```

5. Navegación por Teclado
Toda interacción que funcione con un onClick debería ser accesible con la tecla Enter o Espacio
Si usas componentes nativos como <button> o <a>, esto ya viene incluido
Si creas algo muy personalizado, usa el evento onKeyDown.

6. Herramientas

eslint-plugin-jsx-a11y: Te avisa en tiempo real si olvidas un alt o usas mal un role.
Axe DevTools: Extensión de Chrome que analiza tu página y te dice exactamente qué falla.
React Aria (Adobe): Una de las mejores librerías de hooks que ya maneja toda la lógica de accesibilidad por ti.

Componentes:

Imágenes: Siempre con alt. Si es decorativa, alt="".

Formularios: Cada input debe tener su label asociado
(usa htmlFor en lugar de for).

Contraste: Asegúrate de que el texto sea legible
(puedes revisarlo en la pestaña de inspección del navegador).

Estados: Usa aria-live="polite" para anuncios dinámicos
como un mensaje de "Cargando..." que aparece de repente).




# Arq y patrones de diseño/código

## 1. Capa Servicio ("Cómo")

No vive nada de React. Es puro JavaScript/TypeScript
El patrón principal aquí es el `Repository Pattern` o `API Client`.

### Singleton Pattern
Se suele crear una instancia única de Axios o Fetch
configurada con baseURL, interceptores de tokens y headers

### Data Mapper / Transformer
Antes de devolver los datos al Hook
el servicio puede "limpiar" la respuesta de la API
por ejemplo, cambiar snake_case a camelCase
para que el resto de la app no dependa del formato crudo del backend.


## 2. Capa de Hooks ("Cuándo y Qué")

Manejas el ciclo de vida y el estado.
Es como el pegamento

### State Machine Pattern
En lugar de tener mil booleanos como isLoading, isError
se suele usar un estado consolidado o herramientas como React Query o SWR
que gestionan internamente el estado de la petición.

### Facade Pattern
El Hook funciona como una fachada
El componente solo ve una función getData() y un objeto data
sin saber si los datos vienen de una caché, de un servidor o de un localStorage

### Command Pattern
Especialmente útil en formularios
donde el hook expone una función (ej. executeSave)
encapsula toda la lógica de validación y llamada al servicio.


## 3. Capa de Cliente / Componente (UI)

Solo nos importa pintar la interfaz

### Container/Presenter Pattern (Evolucionado)
Aunque los Hooks casi reemplazaron este patrón
la filosofía persiste: el componente "Padre" usa el Hook (lógica)
y pasa los datos a componentes "Presentacionales" (puros) que solo reciben props.

### Conditional Rendering Pattern
Manejo de estados de carga, vacío o error
basado en lo que el Hook devuelve.

### Composition Pattern
En lugar de pasar mil props hacia abajo (prop drilling)
usas la composición para inyectar componentes donde se necesiten.


##### Servicio: Comunicación con el mundo exterior. Repository, Singleton, Adapter.
##### Hook:	Gestión de estado y lógica de negocio. Facade, Observer (vía React state).
##### Renderizado y experiencia de usuario. Composition, Presentational.


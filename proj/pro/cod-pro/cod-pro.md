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


# Todo

provider, theme, test

# Angular

##### Framework opinionated
tiene una curva de aprendizaje inicial pronunciada
a cambio ofrece una arquitectura robusta y escalable.


# Fundamentos

1. Filosofía, Arquitectura y CLI

2. Enlace de datos (Data Binding) y Directivas estructurales/atributo.

3. Comunicación entre componentes (@Input, @Output y Signals básicos).

4. Servicios e Inyección de Dependencias

5. Introducción a Formularios (Reactivos y basados en plantillas).

6. Enrutamiento básico (Routing) y ciclo de vida de un componente.

Peticiones HTTP con HttpClient



# 1. Filosofía, Arquitectura y CLI

##### A diferencia de librerías como React, Angular es un framework completo (batteries-included)
##### significa que ya viene con herramientas integradas para enrutamiento, peticiones HTTP y gestión de formularios, sin necesidad de librerías de terceros

1. Componentes Standalone
versiones recientes de Angular
el desarrollo se centra en Componentes Standalone

Ya no es obligatorio lidiar con los complejos NgModules para aplicaciones iniciales
##### Cada componente es autónomo y gestiona sus propias dependencias

Un componente en Angular se divide claramente en tres archivos principales
separación de responsabilidades

`TypeScript` (.component.ts): La lógica y el estado.
`HTML` (.component.html): La estructura de la vista.
`CSS/SCSS` (.component.css): El estilo encapsulado.


2. Anatomía de un Componente

Ej de un archivo de lógica

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {
  nombre: string = 'Desarrollador';
  
  cambiarNombre() {
    this.nombre = 'Mundo Angular';
  }
}
```

`@Component`: Es un `decorador` que le dice a Angular que esta clase es un componente.

`selector`: La etiqueta HTML personalizada
`<app-saludo></app-saludo>`, se usará para renderizarlo


3. Flujo de datos en la plantilla: Data Binding

En el archivo HTML `saludo.component.html`
##### !!! conectamos la lógica con la vista mediante tres mecanismos esenciales:

`Interpolación {{ }}`: Renderiza texto desde el archivo TypeScript.

`Property Binding [propiedad]`: Controla atributos de elementos HTML
(como disabled, src, href).

`Event Binding (evento)`: Escucha interacciones del usuario
(como click, keyup).

```
<h1>Hola, {{ nombre }}!</h1>

<input type="text" [value]="nombre" [disabled]="false">

<button (click)="cambiarNombre()">Cambiar texto</button>
```



## Configurar entorno local o pruebas interactivo

Primer paso para desarrollar con comodidad

Ecosistema de Angular: Angular CLI (Command Line Interface).

Utilizando un gestor de versiones


1. Gestión de Node.js (El motor)

Angular requiere Node.js
nunca se instala Node.js directamente desde el gestor de paquetes del sistema operativo (como apt o brew)
ya que suelen tener versiones desactualizadas o generan conflictos de permisos

Usaremos un gestor de versiones como nvm (Node Version Manager) o fnm (Fast Node Manager).


Instalar NVM:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
reiniciar tu terminal o ejecutar source ~/.bashrc o source ~/.zshrc después de la instalación

Instalar Node.js lts:
nvm install --lts
nvm use --lts

Verificar:
node -v
npm -v


2. Instalar Angular CLI de forma global

Con Node.js aislado correctamente en tu espacio de usuario
ya puedes instalar la interfaz de comandos de Angular sin temor a romper nada:

`npm install -g @angular/cli`

Verificar:

`ng version`


3. Espacio de trabajo

Generar un proyecto moderno
Por defecto, las versiones actuales de Angular ya configuran el proyecto utilizando Componentes Standalone y optimizaciones avanzadas

`ng new curso-angular-basico`

Preguntas clave:

estilos:
CSS para mantenerlo simple
SCSS si quieres soporte nativo para preprocesadores desde el día uno.

Habilitar el Server-Side Rendering (SSR):
Para aprender no.
Usamos SPA (Single Page Application) tradicional para no añadir complejidad innecesaria.


4. Levantar el servidor de desarrollo

Entra a la carpeta del proyecto e inicia el servidor local:

```
cd curso-angular-basico
ng serve --open
```

flag --open (o -o) abrirá automáticamente tu navegador predeterminado en http://localhost:4200/.
Si ves la pantalla de bienvenida de Angular, tu entorno está perfectamente configurado


5. Herramientas de Editor (LSP)

VS Code: extensión oficial Angular Language Service.

Angular incluye un archivo llamado angular.json
cerebro del proyecto y maneja los presupuestos de tamaño del bundle, los assets globales y la configuración de compilación



## Anatomía Standalone

#### Qué hace cada archivo crítico en src/:

main.ts: Es el punto de entrada de la aplicación
magia del bootstrapping, lanzando el componente raíz directamente sin pasar por módulos pesados

app.config.ts: El centro de configuración global
definen los proveedores de servicios
las rutas (provideRouter) y cualquier otra configuración del framework.

app.component.ts: El componente raíz de toda la aplicación.



Sublime text:

plugin TypeScript instalado
dará autocompletado e inteligencia de código para los archivos .ts

plugin Angular CLI te permite crear componentes y servicios sin salir del editor
Angular CLI on Package Control
Ctrl + Shift + P y escribe "Angular CLI"

Resaltado de HTML
plantillas de Angular (archivos .component.html) se muestren correctamente
abre un archivo HTML en tu proyecto, ve a Ver > Sintaxis
selecciona la sintaxis HTML estándar o un plugin como Ngx HTML



### Framework en uno: flujo de datos

#### 1. index.html carga el componente

Ej:

```
<body>
  <app-root></app-root>
</body>

```

#### 2. Componente app.ts: define selector, template (html) y css; hace una llamada a la func signal()

```
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-uno');
}

```


#### 3. app.html: define el estilo con etiquetas y interpola valores

Estilo

```
<style>
  :host {
    --bright-blue: oklch(51.01% 0.274 263.83);
    --electric-violet: oklch(53.18% 0.28 296.97);
```

Renderiza valores:

```
<main>
      <h1>Hello, {{ title() }}</h1>
      <p>Congratulations! Your app is running. 🎉</p>
</main>

<router-outlet />

```

`<router-outlet />`: viene de `import { RouterOutlet } from '@angular/router';`

`title()`: viene de `protected readonly title = signal('angular-uno');`
que está definido en el componente



# 2. Enlace de Datos (Data Binding)

Comunicación automática entre la lógica de tu componente (TypeScript) y la vista (HTML)

1. Limpieza de la plantilla
Abre `src/app/app.component.html`
borra todo el contenido de relleno que genera Angular por defecto y déjalo completamente vacío

2. Escribiendo la lógica (app.component.ts)
Abre `src/app/app.component.ts` 
##### Vamos a definir un par de propiedades de tipado fuerte
##### y un método para manipular el estado del componente:

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Propiedades (Estado del componente)
  titulo: string = 'Panel de Control Angular';
  contador: number = 0;
  imagenUrl: string = 'https://angular.dev/assets/images/logos/angular/angular.svg';
  botonDeshabilitado: boolean = false;

  // Métodos (Acciones)
  incrementar(): void {
    this.contador++;
    if (this.contador >= 10) {
      this.botonDeshabilitado = true;
    }
  }

  decrementar(): void {
    if (this.contador > 0) {
      this.contador--;
      this.botonDeshabilitado = false;
    }
  }
}
```

3. Conectando la vista (app.component.html)

##### Mapearemos ese estado en el HTML utilizando los tres tipos fundamentales de binding unidireccional

```
<div style="text-align: center; font-family: sans-serif; margin-top: 50px;">
  
  <h1>{{ titulo }}</h1>
  
  <img [src]="imagenUrl" alt="Logo de Angular" style="width: 150px; margin-bottom: 20px;">

  <h2>Contador actual: <span style="color: #dd0031;">{{ contador }}</span></h2>

  <div style="margin-top: 20px;">
    <button (click)="decrementar()" style="padding: 10px 20px; margin-right: 10px;">
      Decrementar
    </button>
    
    <button (click)="incrementar()" [disabled]="botonDeshabilitado" style="padding: 10px 20px;">
      Incrementar
    </button>
  </div>

  <p *ngIf="botonDeshabilitado" style="color: gray; margin-top: 15px;">
    ¡Has llegado al límite máximo permitido (10)!
  </p>

</div>
```

##### Arquitectura: Angular no requiere que invoques funciones de renderizado ni que uses un estado explícito tipo mutador para actualizar la vista
Al modificar this.contador, el mecanismo de detección de cambios de Angular actualiza inmediatamente las zonas afectadas del DOM



## Two-Way Data Binding (enlace bidireccional, ideal para formularios) y directivas estructurales (@if, @for).

##### Por ejemplo el ngif que estaba en la plantilla anterior es reemplazado por @if


1. Control de Flujo actual (@if y @for)

Antes usábamos directivas pesadas
ahora usamos bloques de control que se parecen mucho a JavaScript estructurado

`Bloque @if / @else`:
##### Sirve para mostrar u ocultar elementos del DOM condicionalmente

```
@if (contador >= 10) {
  <p style="color: red;">¡Llegaste al límite!</p>
} @else {
  <p style="color: green;">Puedes seguir sumando.</p>
}
```


2. Bloque @for (Bucle):

##### Para renderizar listas
##### A diferencia de otros frameworks, Angular te obliga a pasarle una expresión track
A diferencia de otros frameworks, Angular te obliga a pasarle una expresión track
evitando renderizados innecesarios y disparando el rendimiento.

```
<ul>
  @for (tecnologia of listaTecnologias; track tecnologia) {
    <li>{{ tecnologia }}</li>
  } @empty {
    <p>No hay tecnologías en la lista.</p>
  }
</ul>
```

##### el bloque @empty, se ejecuta automáticamente si el array está vacío


### Enlace Bidireccional (Two-Way Data Binding)

##### si queremos que el usuario escriba en un input y ese valor actualice la variable de TypeScript inmediatamente
##### Para eso cruzamos el Property Binding [] y el Event Binding ().
Su sintaxis: `[()]`


#### Talón de Aquiles del principiante: FormsModule
Para usar `[(ngModel)]` (la directiva de enlaces bidireccionales
##### debes importarla explícitamente en tu componente Standalone
Si no lo haces, Angular te lanzará un error críptico en la consola

### Lista dinamica: aplica todos estos conceptos

Actualizar `app.component.ts` y `app.component.html`

##### Ej una lista donde el usuario puede escribir una nueva tecnología y añadirla dinámicamente

Modificar: src/app/app.component.ts

```
import { Component } from '@angular/core';
// makes [(ngModel)] work
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule], // Lo registramos aquí
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Estado para el enlace bidireccional
  nuevaTecnologia: string = '';

  // Estado para el bucle @for
  listaTecnologias: string[] = ['Angular', 'TypeScript', 'RxJS'];

  agregarTecnologia(): void {
    // Validamos que no esté vacío
    if (this.nuevaTecnologia.trim() !== '') {
      this.listaTecnologias.push(this.nuevaTecnologia.trim());
      this.nuevaTecnologia = ''; // Limpiamos el input
    }
  }
}
```


Modificar `src/app/app.component.html`

```
<div style="max-width: 400px; margin: 50px auto; font-family: sans-serif;">
  
  <h2>Mis Tecnologías</h2>

  <div style="margin-bottom: 20px;">
    <input 
      type="text" 
      [(ngModel)]="nuevaTecnologia" 
      placeholder="Ej. Componentes Standalone"
      style="padding: 8px; width: 60%;"
    >
    
    <button (click)="agregarTecnologia()" style="padding: 8px 12px; margin-left: 10px;">
      Añadir
    </button>
  </div>

  @if (nuevaTecnologia) {
    <p style="color: gray; font-style: italic;">Escribiendo: "{{ nuevaTecnologia }}"...</p>
  }

  <ul style="background: #f4f4f4; padding: 20px; border-radius: 8px;">
    @for (tec of listaTecnologias; track tec) {
      <li style="margin-bottom: 8px;">🚀 {{ tec }}</li>
    } @empty {
      <p style="color: red;">Tu stack está vacío. ¡Empieza a añadir!</p>
    }
  </ul>

</div>
```





# Practica resumen modulo 1 y modulo 2

Reto: Gestor de Tareas con Prioridades (Task Tracker).

reúne absolutamente todo lo que hemos visto:
`interpolación`, `property binding`, `event binding`
`two-way binding` y el nuevo control de flujo `@if y @for`.

modificar app.ts y app.html
crear una aplicación que permita gestionar tareas pendientes
asignándoles un nivel de prioridad


Requisitos Funcionales

1. Estructura de una Tarea:
Cada tarea debe ser un objeto con las siguientes propiedades

id: un número o string único.
nombre: string.
prioridad: string ('Alta', 'Media' o 'Baja').
completada: booleano.

2. Formulario de Alta (Two-Way Binding):

Un campo de texto para el nombre de la tarea.
Un menú desplegable (<select>) para elegir la prioridad (Alta, Media, Baja).
Un botón para añadir la tarea a la lista.

3. Renderizado de la Lista (Control de Flujo):

Muestra la lista de tareas usando @for.
Si no hay tareas, muestra el mensaje: "No hay tareas pendientes. ¡Buen trabajo!" usando el bloque @empty

4. Interactividad (Event & Property Binding):

Cada tarea debe tener un botón o checkbox para marcarla como completada
Si está completada, el texto debe verse tachado o con un estilo visual diferente

5. Indicador de Estado (Interpolación y Lógica):

Muestra arriba de la lista un contador dinámico: "Tareas pendientes: X".


Tips/Hints: 
Estructura para TS

Cómo estructurar la interfaz y el estado inicial en tu app.component.ts:


```
// Define la forma de tu objeto fuera de la clase
interface Tarea {
  id: number;
  nombre: string;
  prioridad: 'Alta' | 'Media' | 'Baja';
  completada: boolean;
}

// Dentro de tu AppComponent...
export class AppComponent {
  // Estado para el formulario
  nuevoNombre: string = '';
  nuevaPrioridad: 'Alta' | 'Media' | 'Baja' = 'Media';

  // Estado de la aplicación (puedes dejar algunas por defecto para probar)
  listaTareas: Tarea[] = [
    { id: 1, nombre: 'Aprender Arquitectura de Angular', prioridad: 'Alta', completada: false },
    { id: 2, nombre: 'Configurar alias de rutas', prioridad: 'Baja', completada: true }
  ];

  // ¡Aquí van tus métodos! (agregarTarea, alternarTarea, eliminarTarea)
}
```


##### Escribe el HTML, maneja los eventos en el TypeScript
asegúrate de que el compilador no te tire errores en la terminal.








# Mejores prácticas de código de los conceptos



## 1. Prácticas para binding, direct, etc

`interpolación`, `property binding`, `event binding`
`two-way binding` y el nuevo control de flujo `@if y @for`.



## Interpolación

interpolación ({{ }})
no es solo "pegar strings"
está profundamente ligada al motor de reactividad


1. Prohibido llamar funciones dentro de {{ }}
perjudica el rendimiento

bajo ninguna circunstancia:
`<span>{{ calcularPrecioConDescuento(tarea.precio) }}</span>`

Cada vez que pasa algo en la aplicación
(un clic, un scroll, se mueve el mouse, se resuelve un timer),
Angular ejecuta su ciclo de Detección de Cambios (Change Detection) para ver si la pantalla debe actualizarse

Si pones una función dentro de la interpolación
ejecutará decenas de veces por segundo para verificar si el resultado cambió
destrozando el rendimiento de tu app.


solución moderna:
Si el valor depende de un cálculo
hazlo en TypeScript usando un Getter
Como en la práctica con 'totalPendientes'


2. Signals: Interpolación hiperreactiva

##### Los Signals son el estándar absoluto para manejar el estado
la sintaxis requiere que lo invoques como una función:
`{{ miSignal() }}`, aquí sí es ultra eficiente

A diferencia de una función normal
Angular sabe exactamente qué Signal está escuchando esa interpolación
y solo actualizará ese pequeño fragmento de texto cuando el Signal cambie
ignorando por completo el resto de los pesados ciclos de detección de cambios

`nombreUsuario = signal('Carlos');`

`<h1>Bienvenido, {{ nombreUsuario() }}</h1>`


3. Seguridad ante nulos: Operador Opcional y Coalescencia

##### Cuando traes datos de una API (servidor)
es muy común que las propiedades tarden unos milisegundos en llegar
##### Si Angular intenta interpolar algo que está undefined
##### tu aplicación se romperá con un error en la consola.

Usa siempre el Optional Chaining (?.):
combinado con el Nullish Coalescing (??)
para dar valores por defecto de forma segura directamente en la plantilla:

```
<p>Usuario: {{ usuario?.perfil?.nombre ?? 'Invitado' }}</p>
```


4. Lógica de presentación pertenece a los Pipes

##### La interpolación debe ser "tonta".
##### Su único trabajo es mostrar texto, no formatearlo

##### Evita manipular strings o fechas directamente dentro de las llaves

mal:
`<span>{{ usuario.fechaNacimiento.toLocaleDateString() }}</span>`

mal:
`<span>{{ usuario.nombre.toUpperCase() }}</span>`

bien:
`<span>{{ usuario.fechaNacimiento | date:'dd/MM/yyyy' }}</span>`

bien:
`<span>{{ usuario.nombre | uppercase }}</span>`

##### Pipes de Angular están optimizados internamente
son puros por defecto
lo que significa que solo recalculan el formato si el valor de origen cambia de verdad


5. Principio KISS en las expresiones (Keep It Simple, Stupid)

Evita meter operadores ternarios gigantes o concatenaciones complejas dentro de las llaves
Si tu interpolación ocupa más de una línea de código, ese código debe mudarse al archivo TypeScript

##### Operación | Práctica antigua | Práctica moderna

Mostrar Datos:
Variables mutables sueltas
`Signals ({{ datos() }})`

Formatear:
Métodos JS en el HTML: (.toUpperCase())
`Pipes (| uppercase)`

Cálculos:
Funciones comunes: ({{ calcular() }})
`Getters o Computed Signals`

Valores faltantes:
NgIf complejos para proteger el nodo
`Nullish Coalescing (?? 'Por defecto')`


### Ejemplo código interpolación


1. Interpolando Signals

Forma más eficiente de manejar el estado reactivo
Al interpolarlos en el HTML
los llamamos como si fuesen funciones {{ variable() }}.
##### Esto le permite a Angular rastrear exactamente qué parte de la pantalla debe actualizarse cuando el valor cambia.

usuario.component.ts

```
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent {
  // Definimos un Signal con un valor inicial
  nombreUsuario = signal<string>('Carlos Perez');
  rol = signal<'Admin' | 'User'>('Admin');

  cambiarNombre(): void {
    this.nombreUsuario.set('Sofía Rodríguez'); // Actualiza el Signal
  }
}
```

usuario.component.html

```
<div>
  <h2>Bienvenido, {{ nombreUsuario() }}</h2>
  <p>Tu rol asignado es: <strong>{{ rol() }}</strong></p>

  <button (click)='cambiarNombre()'>Actualizar Perfil</button>
</div>
```


2. Evitando problemas de rendimiento en el html

##### Si tienes un texto que depende de una lógica o un cálculo
##### nunca llames a un método común dentro del HTML

##### !!! utiliza un Signal Computado (computed).
Este solo se recalcula cuando sus dependencias cambian
ahorrando miles de ejecuciones innecesarias en la detección de cambios

Mal:

ts:

```
// En tu TS:
obtenerEstadoTarea(tarea: Tarea): string {
  // Esta función se ejecutará decenas de veces por segundo en cada ciclo de Angular
  return tarea.completada ? 'Completada' : 'Pendiente';
}
```

html:

```
<span>Estado: {{ obtenerEstadoTarea(tarea) }}</span>
```


Bien:

ts:

```
import { Component, signal, computed } from '@angular/core';

export class TareasComponent {
  listaTareas = signal<Tarea[]>([]);
  
  // Creamos un estado derivado reactivo y ultra rápido
  totalPendientes = computed(() => {
    return this.listaTareas().filter(t => !t.completada).length;
  });
}
```

html

```
<p>Tienes {{ totalPendientes() }} tareas por resolver.</p>
```


3. Seguridad Ante Nulos y Valores por Defecto

##### Cuando consumas datos que pueden demorar en cargar
##### (como una petición a una base de datos)

##### !!! protege tu interpolación usando el Optional Chaining (?.) y el operador Nullish Coalescing (??).

ts: perfil.component.ts

```
import { Component, signal } from '@angular/core';

interface Perfil {
  redes?: {
    github?: string;
  };
}

@Component({
  selector: 'app-perfil',
  standalone: true,
  templateUrl: './perfil.component.html'
})
export class PerfilComponent {
  // El perfil inicia como undefined mientras simula cargar
  perfilUsuario = signal<Perfil | undefined>(undefined);
}
```

html: perfil.component.html

```
<div>
  <p>GitHub: {{ perfilUsuario()?.redes?.github ?? 'No especificado 🚫' }}</p>
</div>
```


4. Formateo Limpio con Pipes

La interpolación no debe procesar ni transformar visualmente los datos
Deja ese trabajo para los Pipes nativos de Angular
los cuales están optimizados para formatear valores sin penalizar el rendimiento.

ts: tienda.component.ts

```
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // Requerido para usar Pipes en standalone

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule], // Importamos el módulo que contiene los pipes básicos
  templateUrl: './tienda.component.html'
})
export class TiendaComponent {
  montoTotal = signal<number>(1450.50);
  fechaCompra = signal<Date>(new Date());
}
```

html: tienda.component.html

```
<div>
  <p>Total a pagar: <strong>{{ montoTotal() | currency:'ARS':'$' }}</strong></p>

  <p>Fecha de facturación: {{ fechaCompra() | date:'dd/MM/yyyy' }}</p>
</div>
```

##### !!! Recordar: > La interpolación {{ }} en Angular es un canal de salida unidireccional puramente para representación

##### !!! Si necesitas manipular el dato, hazlo en el archivo de TypeScript (usando computed o transformaciones previas) o mediante un Pipe
##### El HTML debe mantenerse lo más limpio y declarativo posible.




## this

En React this prácticamente pasó a la historia gracias a la transición hacia componentes funcionales y Hooks

En Angular this se sigue usando y sigue siendo 100% obligatorio
No ha sido reemplazado en absoluto.

La diferencia radica en la arquitectura base de cada herramienta
##### Mientras que otros frameworks migraron hacia la programación funcional pura
##### Angular sigue siendo un framework profundamente basado en la Programación Orientada a Objetos (POO).

1. Todo es una Clase de TypeScript

En Angular, tanto los componentes, como los servicios, directivas y pipes
se definen mediante Clases de TypeScript (class).

##### Por las reglas nativas de JavaScript y TypeScript
##### cuando estás dentro de una clase
##### la única forma que tiene el motor de ejecución para saber que te refieres a una propiedad o método de la propia instancia
##### (y no a una variable local de la función) es anteponiendo this.

Si intentas:

```
export class AppComponent {
  nombre = 'Carlos'; // Propiedad de la clase

  saludar() {
    console.log(nombre); // ERROR: No encuentra 'nombre' en el ámbito local
    console.log(this.nombre); //  CORRECTO
  }
}
```

2. Inyección de Dependencias (DI)

El sistema de inyección de dependencias de Angular:
cómo traes servicios a tus componentes
se apoya por completo en las clases
##### Ya sea mediante el constructor o con la función moderna inject()
la referencia al servicio se guarda como una propiedad de la clase
requiriendo this para consumirla:

```
export class TareaComponent {
  // Práctica moderna: Inyectar servicios fuera del constructor
  private tareasService = inject(TareasService); 

  cargar() {
    // Necesitas 'this' para acceder al servicio inyectado
    this.tareasService.obtenerTodas(); 
  }
}
```


### this y signals

Incluso usando Signals, que es la forma más vanguardista de manejar el estado reactivo en Angular
this sigue siendo el rey
##### Signal se declara como miembro de la clase
##### por lo que para leerlo o actualizarlo, debes pasar por this:

```
export class ContadorComponent {
  // El signal es una propiedad de la clase
  contador = signal(0); 

  incrementar() {
    // Accedemos al signal a través de 'this'
    this.contador.update(valor => valor + 1); 
  }
}
```


### this y HTML

El único lugar donde nunca debes usar this es en el archivo HTML del componente.

##### Angular es inteligente como para saber que todo lo que escribes en la plantilla se ejecuta bajo el contexto de la instancia del componente

Mal:

`<p>{{ this.nombreUsuario() }}</p>`

Bien: 

`<p>{{ nombreUsuario() }}</p>`


Angular no tiene planes de abandonar las clases
La combinación de Clases de TypeScript + Signals ofrece un equilibrio perfecto
Estructura sólida, limpia y organizada de la programación orientada a objetos
junto con la velocidad y reactividad del paradigma funcional.



## Property binding

El puente puente que usaremos para pasar info a los componentes hijos

Property Binding bajo los estándares modernos
la comunicación entre componentes resulta sumamente natural.

En el Angular actual, el Property Binding va mucho más allá de:
`[propiedad]="valor"`
Se trata de optimizar la renderización y asegurar la tipación estricta de tu aplicación


Concepto:

Es un flujo de datos unidireccional
##### va desde tu lógica en TypeScript hacia la vista
(DOM o un componente hijo)
Su sintaxis icónica son los corchetes `[]`.

1. Vincular Signals en Property Binding

Con la llegada de los Signals, la forma de enlazar propiedades ha cambiado ligeramente para volverse hiperreactiva
##### Al igual que con la interpolación, cuando vinculas un Signal a una propiedad, debes invocarlo con paréntesis ().
##### Angular creará una conexión directa y actualizará esa propiedad nativa del DOM únicamente cuando el Signal emita un nuevo valor
sin tocar el resto de la página.

```
// TypeScript
imgUrl = signal('https://angular.dev/assets/images/logo.svg');
isButtonDisabled = signal(true);
```

```
<img [src]="imgUrl()" alt="Logo de Angular">
<button [disabled]="isButtonDisabled()">Enviar</button>
```

2. Prefiere enlaces específicos:
`[class.xxx] y [style.xxx]`

antes que ngClass o ngStyle

Históricamente, se usaban las directivas ngClass y ngStyle, para aplicar estilos dinámicos
En el Angular moderno, la buena práctica dicta evitarlas siempre que sea posible
priorizando los bindings nativos de clase y estilo
Son más fáciles de leer, más rápidos de procesar y no requieren importar directivas adicionales

Antes:

```
<div [ngClass]="{ 'completada': tarea.completada, 'pendiente': !tarea.completada }">
``` 

Ahora:

```
<div [class.completada]="tarea.completada" 
     [class.pendiente]="!tarea.completada"
     [style.color]="tarea.completada ? 'gray' : 'black'">
```

3. Expresiones "tontas" (Clean Templates)

Al igual que con la interpolación, la expresión dentro de los corchetes [] debe ser directa

Si necesitas hacer una evaluación lógica compleja
concatenación de strings rebuscada o cálculos matemáticos
muévelos a la lógica de TypeScript
(idealmente usando un Signal computado o un método).

##### Evitar: Complejo y difícil de testear

```
<button [disabled]="listaTareas().length === 0 || usuario.rol !== 'Admin' || !formularioValido">
```

Hacer:

```
// TypeScript
canSubmit = computed(() => {
  return this.listaTareas().length > 0 && this.usuario().rol === 'Admin' && this.formularioValido();
});
```

```
<button [disabled]="canSubmit()">Enviar</button>
```


### Property Binding ([prop]) vs. Attribute Binding ([attr.prop])

Property Binding `[src], [disabled], [value]`:
modifica las propiedades del objeto del DOM (en memoria).

Attribute Binding `[attr.xxx]`:
modifica los atributos del HTML escrito (en el documento).

Hay ciertos elementos (como tablas o accesibilidad ARIA)
que no tienen propiedades directas en el objeto del DOM
por lo que debes usar explícitamente el prefijo attr..

```
<td [colspan]="columnasSpan()">

<td [attr.colspan]="columnasSpan()">

<button [attr.aria-label]="descripcion()"></button>
```


### Seguridad nativa contra ataques XSS

##### Angular bloquea por defecto cualquier intento de inyectar código malicioso (como scripts) a través de Property Binding

Sin embargo, si necesitas renderizar HTML dinámico
que viene de una fuente segura usando `[innerHTML]`
debes sanitizarlo explícitamente en el componente usando DomSanitizer

```
// En tu TypeScript
private sanitizer = inject(DomSanitizer);
htmlSeguro = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.codigoDeBaseDeDatos()));
```

```
<div [innerHTML]="htmlSeguro()"></div>
```


### Ej decisiones/acciones con Property Binding

##### Modificar | Usar | Ej

propiedad del DOM estándar:
`[propiedad]="valor"`
`[disabled]="isValid()"`

clase CSS de forma condicional:
`[class.nombre-clase]="booleano"`
`[class.active]="isActive()"`

estilo CSS específico de forma condicional
`[style.propiedad-css]="valor"`
`[style.color]="isRed() ? 'red' : 'black'"`

atributo HTML que no existe en el DOM
`[attr.nombre-atributo]="valor"`
`[attr.colspan]="span()"`

Propiedades personalizadas en componentes hijos
`[inputHijo]="valorPadre"`
`[tareas]="listaTareas()"`


##### El secreto del Angular moderno es delegar la inteligencia al TypeScript (usando Signals y Computeds)
##### y mantener las asignaciones del HTML lo más directas y limpias posibles.



## Event binding

Completa la trilogía del enlace de datos: 
`Interpolación, Property Binding y Event Binding`

##### Event Binding es el canal unidireccional inverso: va desde la vista (DOM) hacia la lógica (TypeScript) y su firma son los paréntesis ().

1. Pasa datos específicos en lugar del objeto $event completo

muy común ver código antiguo que pasa el evento nativo del navegador a la lógica
y luego busca el valor dentro de un laberinto de propiedades

La buena práctica actual dicta que le pases a tu método
únicamente el dato exacto que necesita para operar

Antes:

```
<input type="text" (input)="onEscribir($event)">
```

En ts:
tocaría hacer malabares con los tipos

```
const valor = (event.target as HTMLInputElement).value;
```


Enfoque moderno y limpio:
Usando una variable de referencia

```
<input #miInput type="text" (input)="onEscribir(miInput.value)">
```

En ts:
recibes directamente un string:

```
onEscribir(valor: string) { ... }
```

##### !!! Excepción: Solo pasa $event si tu lógica de verdad necesita propiedades exclusivas del evento físico
##### como las coordenadas del mouse (MouseEvent) en un lienzo de dibujo o un drag-and-drop.


2. Pseudo-eventos de teclado nativos de Angular

Si necesitas escuchar teclas específicas
(como cuando el usuario presiona Enter para guardar o Escape para cancelar)
no captures el evento de teclado general para luego validar el código de la tecla con un if dentro de tu TypeScript

Angular lo resuelve directamente en la plantilla.

Evitar en ts: 

```
manejarTeclado(event: KeyboardEvent) {
  if (event.key === 'Enter') { this.guardar(); }
}
```


Hacer en html:

```
<input (keyup.enter)="guardar()" (keydown.escape)="cancelar()">
```


3. regla KISS: Cero lógica inline

Al igual que vimos con las propiedades
la expresión dentro de (click) o (change)
##### debe limitarse a invocar un método o, como máximo, a una asignación booleana ultra simple
Jamás metas lógica de negocio compleja o encadenamientos largos

Mal:

```
<button (click)="tarea.completada = true; totalPendientes = totalPendientes - 1; lanzarNotificacion();">
```

Bien:

```
<button (click)="completarTarea(tarea.id)">
```


4. Eventos de alta frecuencia: scroll, resize, mousemove

Eventos como el desplazamiento de scroll o el redimensionamiento de ventana se disparan cientos de veces por segundo
Si vinculas un método directamente a ellos en el HTML
podrías ralentizar drásticamente la experiencia del usuario

La mejor práctica actual es no usar Event Binding en la plantilla
sino escuchar el evento de forma controlada desde el TypeScript
utilizando operadores de RxJS como `debounceTime o throttleTime`
para mitigar la ráfaga de ejecuciones.

```
// En tu TypeScript (Ejemplo conceptual rápido de optimización)
fromEvent(window, 'resize')
  .pipe(debounceTime(200))
  .subscribe(() => this.recalcularDiseno());
```


5. Event Binding es el motor del Angular moderno (Zoneless)

Detalle de arquitectura fascinante
Angular está transicionando con fuerza hacia una era Zoneless (sin Zone.js)
apoyándose por completo en los Signals

En este nuevo ecosistema, el Event Binding en el HTML actúa como el "interruptor" definitivo
Cuando un usuario hace un clic y tu método de Event Binding actualiza un Signal
Angular sabe con precisión qué milisegundo se alteró el estado y redibuja la pantalla de forma instantánea
sin tener que revisar toda la aplicación
Por eso escribir bindings limpios y directos es más importante que nunca!


## Two-way binding

Enlace bidireccional: patrón `[()]`
##### Combina la escucha de eventos y la asignación de propiedades
##### para mantener sincronizados el HTML y el TypeScript en tiempo real.

En versiones anteriores de Angular, el enlace bidireccional estaba casado casi en exclusiva con formularios `[(ngModel)]`.
Dio un giro radical gracias a los signals

1. Estándar: Reemplazar el viejo patrón Input/Output por la función model()

Hasta hace poco, si querías crear un componente propio con un enlace bidireccional
(por ejemplo, un contador o un interruptor personalizado)
tenías que escribir un código superrepetitivo: declarar un @Input() para recibir el valor y un @Output()
que se llamara exactamente igual pero con el sufijo Change.

Antes:

```
@Input() valor: boolean = false;
@Output() valorChange = new EventEmitter<boolean>();

alternar() {
  this.valor = !this.valor;
  this.valorChange.emit(this.valor);
}
```

Con signals:
##### Angular introdujo la API model().
##### Esta función crea un Signal especial de lectura y escritura que genera automáticamente todo el puente bidireccional por detrás

```
import { Component, model } from '@angular/core';

export class SelectorPrioridadComponent {
  // Define un input y un output bidireccional al mismo tiempo. ¡Así de simple!
  prioridad = model<'Alta' | 'Media' | 'Baja'>('Media');

  subirPrioridad() {
    this.prioridad.set('Alta'); // Al mutar el Signal, se actualiza en el componente padre automáticamente
  }
}
```

el componente padre lo consume limpiamente con la sintaxis de siempre:

```
<app-selector-prioridad [(prioridad)]="nuevaPrioridad" />
```


2. Usa `[(ngModel)]` con moderación y solo para estado local simple

La directiva `[(ngModel)]` sigue viva y es genial para prototipos rápidos o formularios ultra simples de uno o dos campos
(como el campo nuevoNombre de nuestra app de tareas)

(como el campo nuevoNombre de nuestra app de tareas)

Para pantallas con flujos de datos complejos o validaciones avanzadas: Usa Reactive Forms en lugar de `[(ngModel)]`.
Te darán mucho más control sobre el ciclo de vida de los datos, el rendimiento y las pruebas unitarias.

Para controles puramente visuales de la interfaz: Si solo quieres sincronizar si un panel lateral está abierto o cerrado
Para controles puramente visuales de la interfaz: Si solo quieres sincronizar si un panel lateral está abierto o cerrado


3. Cuidado con la "lógica oculta" y los efectos secundarios

Al usar Two-way, la sincronización es mágica e inmediata
el usuario escribe una letra y la variable en TypeScript cambia en ese mismo microsegundo
##### El peligro de esto es que es fácil caer en la tentación de meter lógica de negocio pesada que reaccione a ese cambio.

regla:
##### El Two-way binding debe usarse exclusivamente para sincronizar datos
##### no para disparar efectos secundarios complejos (como llamadas a una API en cada pulsación de tecla).

##### Si necesitas que un cambio en la vista dispare una acción en el servidor
##### rompe el Two-way binding en dos canales
#### usa Property Binding para mostrar el valor y Event Binding para controlar el ritmo de la acción
##### usando técnicas como el debounce que vimos en el paso anterior


### Ej practicas bidireccionales: tradicionales y modernas

##### Uso | tradicional | moderna

Componentes propios:
Combinación manual de @Input() + @Output() Change
model() (Signal bidireccional nativo)

Inputs de Formulario Simples:
`[(ngModel)]` de toda la vida
`[(ngModel)]` (Válido para inputs aislados)

Formularios de Negocio:
`[(ngModel)]` en cascada dentro de un <form>
Reactive Forms (Mejor control del estado)




## Debounce/rebote

Estrategia de optimización que consiste en retrasar la ejecución de una acción
hasta que haya pasado un período de silencio determinado desde la última vez que se intentó disparar

En web: su objetivo principal es evitar que una ráfaga de eventos repetitivos
(como pulsar teclas rápidamente) sature el servidor o ralentice la interfaz.

Ej ascensor:
ascensor, presionas el botón para abrir la puerta
y el ascensor se programa para cerrar la puerta en 3 segundos
Si nadie más viene durante esos 3 segundos
la puerta se cierra y el ascensor arranca `se ejecuta la acción`.
Pero, si a los 2 segundos llega otra persona y presiona el botón
el temporizador de 3 segundos se `reinicia desde cero`
La puerta no se cierra todavía
Si llega otra persona 1 segundo después, el temporizador se vuelve a reiniciar
El ascensor no se moverá hasta que experimente 3 segundos completos de silencio absoluto en el botón

Ej visual:
Cada intento de ejecutar la función antes de que se cumpla el tiempo de espera
simplemente cancela (resetea) el temporizador anterior
La acción real solo se materializa al final de la cadena:

Lo necesitamos en un buscador o formulario:
tienes un campo de texto para buscar productos
el usuario quiere escribir la palabra "Angular".

Si usas un Two-way binding tradicional conectado directo al servidor
la aplicación enviaría una petición HTTP en cada pulsación

`A` -> Primera petición al servidor.
`An` -> Segunda petición.
`Ang` -> Tercera petición... y así hasta completar 7 peticiones en menos de dos segundos

Si multiplicas esto por miles de usuarios buscando al mismo tiempo
el servidor colapsará por procesar búsquedas incompletas que al usuario ya no le interesan

Al aplicar un Debounce de 300 milisegundos:
El usuario escribe "Angular" rápido
Como el tiempo entre letra y letra es menor a 300ms
el temporizador se reinicia constantemente
Cuando el usuario termina de escribir y se detiene a leer la pantalla
se cumplen los 300ms de "silencio" y la aplicación envía una única petición con la palabra completa.


### Ej código: componente de búsqueda

Angular moderno:
las funciones de interoperabilidad entre Signals y RxJS (toObservable y toSignal).
Esto nos permite capturar lo que escribe el usuario en un Signal
aplicarle el temporizador del Debounce mediante RxJS
y devolver el resultado limpio a otro Signal listo para la pantalla
sin necesidad de suscribirnos ni desuscribirnos manualmente!

1. Lógica: Filtro de Silencio
`buscador.component.ts`

elegante y compacto, cuando combinamos Signals con operadores de RxJS

```
import { Component, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-buscador',
  standalone: true,
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent {
  // 1. Entrada inmediata: Se actualiza con cada letra que el usuario presiona
  terminoBuscado = signal<string>('');

  // 2. El "Ascensor": Convertimos el Signal a un flujo RxJS para poder usar el Debounce
  private busquedaFiltrada$ = toObservable(this.terminoBuscado).pipe(
    debounceTime(400),        // Espera 400ms de silencio absoluto antes de dejar pasar el valor
    distinctUntilChanged()   // Evita disparar si el usuario escribió y borró rápido quedando lo mismo
  );

  // 3. Salida Reactiva: Convertimos el flujo filtrado de vuelta a un Signal para la vista
  // Aquí es donde harías la llamada real al servidor (ej. switchMap(term => miServicio.buscar(term)))
  peticionServidor = toSignal(this.busquedaFiltrada$, { initialValue: '' });
}
```

2. Vista: Separando los canales
`buscador.component.html`

Plantilla HTML aplicamos la práctica recomendada
desarmamos el enlace bidireccional en una propiedad
y un evento independientes para controlar el flujo de entrada

```
<div style="padding: 20px; max-width: 450px; font-family: system-ui, sans-serif; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
  
  <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #1e293b;">
    Buscador con Debounce:
  </label>
  
  <!-- CANAL DE ENTRADA SEPARADO -->
  <!-- [value]: Property binding para pintar el estado actual -->
  <!-- (input): Event binding que empuja el valor al Signal inmediatamente -->
  <input 
    type="text" 
    #txtInput
    [value]="terminoBuscado()" 
    (input)="terminoBuscado.set(txtInput.value)"
    placeholder="Escribe un producto (ej: Laptop)..."
    style="width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 15px; box-sizing: border-box;"
  >

  <!-- Panel de Diagnóstico Visual (Para notar el Debounce en acción) -->
  <div style="margin-top: 20px; background: #f8fafc; padding: 15px; border-radius: 6px; border: 1px dashed #cbd5e1; font-size: 14px; display: flex; flex-direction: column; gap: 10px;">
    
    <div style="color: #64748b;">
      ✍️ En el Input (Tiempo real): 
      <strong style="color: #334155;">"{{ terminoBuscado() }}"</strong>
    </div>
    
    <div style="color: #059669; font-weight: 600; background: #ecfdf5; padding: 8px; border-radius: 4px;">
      🚀 Enviado al Servidor (Tras 400ms de silencio): 
      <span>"{{ peticionServidor() }}"</span>
    </div>

  </div>

</div>
```

Verás cómo la línea gris de "Tiempo real" cambia instantáneamente con cada letra
pero la línea verde de "Enviado al Servidor" se queda quieta esperando
Solo cuando dejas de escribir por casi medio segundo
la palabra completa salta mágicamente a la zona verde.

A nivel de ingeniería: al usar toSignal, Angular gestiona el ciclo de vida por ti.
Cuando este componente se destruya o el usuario cambie de pantalla
la suscripción interna de RxJS se limpiará sola, garantizando cero fugas de memoria
sin escribir una sola línea de código de limpieza



## @if

##### La forma de manejar la renderización condicional cambió por completo
Dejamos atrás la vieja directiva estructural *ngIf
para darle la bienvenida al Control de Flujo Integrado (@if).

está integrado directamente en el compilador de Angular
es muchísimo más rápido y eficiente.

1. Ahora @if, no *ngIf

migrar o iniciar todos tus proyectos usando la sintaxis de bloque (@if).

Antes:

```
<!-- Requería importar CommonModule, creaba contenedores extraños y usaba ng-template para el else -->
<div *ngIf="isCargando; else bloqueError">Cargando...</div>
<ng-template #bloqueError>
  <div>Hubo un error.</div>
</ng-template>
```

Ahora:

HTML: 

```
<!-- Nativo, limpio, no requiere importaciones y el @else es súper intuitivo -->
@if (isCargando()) {
  <div>Cargando...</div>
} @else {
  <div>Contenido listo.</div>
}
```

Al estar integrado en el compilador
Angular no tiene que procesar directivas pesadas en el DOM
Además, te ahorras tener que declarar etiquetas <ng-template>
con variables de referencia (#) flotando por tu HTML.


2. Lectura limpia de Signals y "Dependencia Automática"

Cuando usas un Signal dentro de un bloque @if, debes invocarlo con sus paréntesis ().
el bloque @if se suscribe de forma autónoma al signal
Si el valor del Signal cambia de true a false
Angular destruirá ese fragmento del DOM de inmediato sin parpadear y sin re-evaluar componentes vecinos

En ts:
`isPremium = signal<boolean>(false);`

html:

```
<!-- HTML -->
@if (isPremium()) {
  <div class="badge-corona">Usuario VIP 👑</div>
}
```


3. Domina el guardado en variables locales (as)

##### Cuando evalúas una condición compleja o accedes a un objeto de una API que puede ser nulo
es una pésima práctica repetir el camino del objeto una y otra vez dentro del bloque
##### Usa la palabra clave as para desenvolver el valor y guardarlo en una variable local de la plantilla

##### Ej código repetitivo y dificil de mantener

```
@if (perfilUsuario()?.configuracion?.notificaciones) {
  <p>Tipo: {{ perfilUsuario()?.configuracion?.notificaciones?.tipo }}</p>
  <p>Frecuencia: {{ perfilUsuario()?.configuracion?.notificaciones?.frecuencia }}</p>
}
```

Enfoque moderno y limpio con as:

```
<!-- Evaluamos, verificamos que exista y lo renombramos como 'config' -->
@if (perfilUsuario()?.configuracion; as config) {
  <!-- 'config' vive de forma segura solo dentro de estas llaves -->
  <p>Tipo: {{ config.notificaciones?.tipo }}</p>
  <p>Frecuencia: {{ config.notificaciones?.frecuencia }}</p>
}
```


4. Multi-condicionales encadenados (@else if)

Antes, hacer un if / else if / else en Angular requería anidar múltiples *ngIf
Hoy se escribe exactamente igual que en cualquier lenguaje de programación tradicional

html:

```
@if (rol() === 'Admin') {
  <app-panel-admin />
} @else if (rol() === 'Editor') {
  <app-panel-editor />
} @else {
  <app-panel-lector />
}
```


5. Mantener la plantilla libre de álgebra booleana (KISS)

Al igual que vimos en los módulos de binding anteriores
##### si tu bloque @if necesita validar tres o cuatro variables públicas cruzadas
no limpies esa lógica en el HTML
Trasládala a un Signal Computado en tu TypeScript.

Evita saturar el HTML:

`@if (isAutenticado() && !isTokenExpirado() && (userRol() === 'Admin' || userRol() === 'Super')) { ... }`

Usar ts:

```
canAccessDashboard = computed(() => {
  const valido = this.isAutenticado() && !this.isTokenExpirado();
  const tieneRol = this.userRol() === 'Admin' || this.userRol() === 'Super';
  return valido && tieneRol;
});
```

En html:

```
@if (canAccessDashboard()) {
  <app-dashboard />
}
```


### *ngIf vs @if

##### Acción | *ngIf | @if

Condición Simple:
`<div *ngIf="mostrar">`
`@if (mostrar) { ... }`

Alternativa (else):
`*ngIf="mostrar; else bloque"`
`} @else { ... }`

Múltiple (Else If):
No existía de forma nativa (Anidamientos)
`} @else if (condicion) { ... }`

Asignar Variable:
`*ngIf=datos$`
`async as reales`



## @for

`*ngFor` era famoso por ralentizar las listas grandes si el desarrollador olvidaba configurar una función externa llamada trackBy
En el Angular moderno, el control de flujo integrado reescribió las reglas del juego para que sea imposible escribir listas lentas.

1. Requisito obligatorio: `track`

el nuevo bloque @for te exige de forma estricta que definas una expresión de seguimiento utilizando la palabra clave track
Ya no necesitas crear funciones raras en tu archivo TypeScript
##### lo manejas directamente en la plantilla apuntando al identificador único de tu objeto
(como tarea.id)

```
@for (tarea of listaTareas(); track tarea.id) {
  <li>{{ tarea.nombre }}</li>
}
```

Gracias a track, si agregas una tarea al principio de la lista
Angular no destruye ni vuelve a dibujar los 50 elementos que ya estaban abajo
Solo dibuja el nodo nuevo y mueve los demás en memoria
El rendimiento gráfico pasa a ser prácticamente instantáneo.


2. Exprime el bloque @empty integrado
Antes, si una lista estaba vacía, tenías que duplicar lógica creando un contenedor extra
con un `*ngIf="lista.length === 0"`, para mostrar un cartel de "No hay elementos".
El nuevo diseño condensa esto con `@empty`
que se activa automáticamente cuando el arreglo tiene longitud cero.

```
@for (producto of productos(); track producto.id) {
  <app-tarjeta-producto [producto]="producto" />
} @empty {
  <!-- Se muestra SOLO si el arreglo está completamente vacío -->
  <p class="alerta">No se encontraron productos en esta categoría. 📦</p>
}
```

3. Uso correcto de las nuevas Variables Contextuales ($)

Angular moderno simplificó el acceso a las propiedades internas del bucle
Ya no tienes que declarar alias raros usando la palabra clave let
Ahora tienes variables nativas del compilador
listas para usar que empiezan con el signo `$`:

`$index`: El índice numérico actual (empieza en 0).
`$first / $last`: Booleanos que te dicen si es el primer o último elemento.
`$even / $odd`: Booleanos para saber si la fila es par o impar
ideal para hacer tablas con filas intercaladas
`$count`: El total de elementos de la lista en ese momento.

html:

```
@for (usuario of usuarios(); track usuario.id) {
  <div [class.fila-oscura]="$even" style="padding: 10px;">
    <span>#{{ $index + 1 }} de {{ $count }}</span> — {{ usuario.nombre }}
    
    @if ($first) { <span class="badge">¡Nuevo miembro! 🌟</span> }
  </div>
}
```


4. Iterando sobre Signals correctamente

Cuando tu lista de datos está guardada dentro de un Signal
la regla es: debes llamarlo con paréntesis () en la cabecera del bucle para extraer su valor

Mal:
`@for (t of listaTareas; track t.id)`

Bien:
`@for (t of listaTareas(); track t.id)`
Extrae el arreglo del interior del Signal


### *ngFor vs @for

Sintaxis Base:
`<li *ngFor="let item of lista">`
`@for (item of lista; track item.id) { ... }`

Optimización:
Opcional: `trackBy: miFuncion)`.
Obligatorio por compilador: `track item.id`.

Lista Vacía:
Requiere un *ngIf secundario externo
Integrado de forma nativa con } @empty {

Variables de Índice:
`<li *ngFor="let item of lista; let i = index">`

Disponible directamente como
`$index`












# 3. Comunicación entre componentes (@Input, @Output y Signals básicos).

##### Estructurar la app: dividiendo la interfaz en piezas independientes, reutilizables y especializadas (Componentes).
la comunicación entre un componente "Padre" y un componente "Hijo"
sigue una regla que organiza el flujo de la información.

#### Regla: Datos hacia abajo, Eventos hacia arriba
##### Cuando modularizas tu código, la información debe fluir en dos direcciones muy claras y ordenadas

Propiedades hacia abajo (De Padre a Hijo):
##### !!! El padre es el dueño del estado (la base de datos, la lista principal)
le "presta" fragmentos de esa información al hijo para que la dibuje.

Eventos hacia arriba (De Hijo a Padre):
hijo no tiene permitido modificar los datos directamente
##### Si el usuario hace clic en un botón dentro del hijo (como "Eliminar")
'El usuario quiere eliminar este ID'
##### El padre recibe el aviso y modifica su estado central

```
parent component

@Input | @Output

child component
```

Gran Cambio: Decoradores vs. Funciones de Signals
Históricamente, Angular usaba los decoradores @Input() y @Output().

Aunque siguen funcionando por compatibilidad
##### la práctica estándar actual es utilizar las nuevas funciones basadas en Signals.

1. Recibir datos: El canal input() (Signal
En lugar de un @Input() común
ahora declaramos un input().
Esto transforma automáticamente la propiedad del hijo en un Signal de solo lectura

antes:

```
@Input() tarea!: Tarea;
```
Había que usar ! porque nacía vacía y no era reactiva por sí misma


ahora:

```
tarea = input.required<Tarea>();
```
Es obligatoria, está estrictamente tipada
y avisa al instante a la pantalla si el padre le manda una tarea diferente


2. Enviar avisos: La función output()
disparar eventos hacia arriba, la nueva función output()
reemplaza al viejo y pesado EventEmitter
Es mucho más ligera y rápida.

Antes:
`@Output() alEliminar = new EventEmitter<string>();`

Ahora:
`alEliminar = output<string>();`



## Signal

Ejecutar efectos secundarios externos (LocalStorage, Analytics, DOM nativo).
Si guardas un número dentro y ese número cambia
nadie se entera a menos que vayan manualmente a abrir la caja para revisar.

Un Signal tiene una campana conectada
Sigue guardando un valor dentro
pero en el instante exacto en que ese valor cambia
la campana suena automáticamente avisándole a todos los que estén interesados
como tu pantalla HTML
que el valor cambió y que deben actualizarse.

##### Cualquier Signal básico trabaja bajo tres acciones fundamentales: Crearlo, Leerlo y Modificarlo

```
			Signal
		basado en tirar/atraer y estado sincrono
	
compon		update: set/update			computed()
templ		signal value: ej count=5 -> derived state (doubleCount=10)
consum		update: set/update
		->
	lect(pull)
		
deriv stat		signal value:count=5
doubleCount=10 

```

1. creación
importas la función signal
le pasas el valor con el que quieres que inicie el componente.

```
contador = signal(0); // Guarda el número 0 como valor inicial
```

2. Lectura
Para leer el valor que está dentro de la caja
siempre debes llamarlo como si fuera una función, agregando paréntesis ().

```
console.log(this.contador()); // Imprime: 0
```

3. Modificación
actualizar su valor y hacer que "suene la campana"
principalmente dos métodos:

`.set()`:
Reemplaza el valor viejo por uno completamente nuevo.

`.update()`:
Toma el valor que tiene actualmente y le aplica un cambio
ideal para sumas, restas o mutar arreglos


Ej: Contador simple
componente standalone completo

contador.component.ts

```
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  templateUrl: './contador.component.html'
})
export class ContadorComponent {
  // Inicializamos nuestro signal básico con el número 0
  clicks = signal<number>(0);

  incrementar() {
    // Usamos .update() porque el nuevo valor depende del valor actual (sumar 1)
    this.clicks.update(valorActual => valorActual + 1);
  }

  reiniciar() {
    // Usamos .set() porque queremos pisar el valor a 0 sin importar qué número había antes
    this.clicks.set(0);
  }
}
```


Plantilla: contador.component.html

```
<div style="padding: 20px; text-align: center; font-family: sans-serif;">
  <!-- LEER EL SIGNAL: Recuerda usar siempre los paréntesis () -->
  <h2>Has hecho clic {{ clicks() }} veces</h2>

  <!-- EVENT BINDING: Disparamos los métodos que modifican el estado -->
  <button (click)="incrementar()" style="margin-right: 10px; padding: 10px;">
    Incrementar ➕
  </button>
  
  <button (click)="reiniciar()" style="padding: 10px;">
    Reiniciar 🔄
  </button>
</div>
```


Detección de cambios

Variable Común
(clicks = 0)
Angular tiene que revisar toda la pantalla de arriba a abajo para ver si algo cambió en cada clic.

Eficiencia
Consume más batería y procesamiento en aplicaciones medianas/grandes.

Sintaxis en HTML
{{ clicks }}


Con Signals
(clicks = signal(0))
exactamente cuál etiqueta <h2> depende del Signal y solo actualiza ese nodo del DOM.
Velocidad extrema y consumo mínimo de recursos (Preparado para Zoneless).
{{ clicks() }}

Los Signals básicos son simplemente contenedores reactivos síncronos
Tú guardas un dato y Angular se encarga de vigilarlo 
Si el dato cambia, todo lo que esté conectado a él en la interfaz se redibuja en el acto de forma quirúrgica


## Computed signal

calculadora automática inteligente conectada a signal basico

Un computed es un Signal de solo lectura
cuyo valor se deriva (se calcula) a partir de uno o más Signals básicos

Tú no puedes modificar su valor directamente
su único trabajo es vigilar a los Signals de los que depende
y, si alguno de ellos cambia, recalcular su propio resultado al instante.


Ej:
celda A1 escribes el precio de un producto: 100 (Esto es un Signal básico).
celda B1 escribes la cantidad: 2 (Esto es otro Signal básico).
celda C1 escribes la fórmula: =A1*B1 (Esto es un Computed Signal).

no puedes hacer clic en C1 y teclear un número encima porque romperías la fórmula
C1 es de solo lectura
##### Pero si vas a B1 y cambias el 2 por un 3
##### la celda C1 cambia mágicamente a 300 por sí sola.

Reglas:

1. Solo Lectura:
No existen los métodos .set() ni .update() para un computed
Si intentas usarlos, TypeScript te dará un error antes de compilar.

2. Inteligente (Caché/Memoización):
Si el valor de los Signals de origen no ha cambiado
Angular no vuelve a hacer la matemática
Te devuelve directamente el último resultado que guardó en su memoria
Esto hace que las aplicaciones vuelen en rendimiento.

3. Perezoso (Lazy Evaluation):
computed no gasta ni un solo milisegundo de procesamiento en calcular su valor
a menos que alguien lo esté necesitando
ya sea porque se está mostrando en el HTML
o porque se lee en la lógica

Ej:
Carrito
donde calculamos el subtotal de un producto dinámicamente

producto.component.ts
```
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-producto',
  standalone: true,
  templateUrl: './producto.component.html'
})
export class ProductoComponent {
  // 1. Estados base (Signals básicos mutables)
  precioUnitario = signal<number>(150);
  cantidad = signal<number>(1);

  // 2. Estado derivado (Computed Signal de solo lectura)
  // Angular rastrea automáticamente que este computed depende de 'precioUnitario' y 'cantidad'
  totalPagar = computed(() => {
    console.log('¡Calculando total de forma óptima! 🧮');
    return this.precioUnitario() * this.cantidad();
  });

  incrementar() {
    this.cantidad.update(c => c + 1);
  }

  decrementar() {
    if (this.cantidad() > 1) {
      this.cantidad.update(c => c - 1);
    }
  }
}
```

producto.component.html

```
<div style="padding: 20px; font-family: sans-serif; border: 1px solid #ccc; border-radius: 8px; max-width: 300px;">
  <h3>Camiseta Angular 👕</h3>
  <p>Precio: ${{ precioUnitario() }}</p>

  <div style="margin-bottom: 15px;">
    <button (click)="decrementar()">-</button>
    <span style="margin: 0 10px; font-weight: bold;">{{ cantidad() }}</span>
    <button (click)="incrementar()">+</button>
  </div>

  <!-- LEER EL COMPUTED: Al igual que cualquier Signal, se invoca con paréntesis () -->
  <div style="background: #e0f2fe; padding: 10px; border-radius: 4px; font-weight: bold; color: #0369a1;">
    Total a pagar: ${{ totalPagar() }}
  </div>
</div>
```

Por detras:
la app arranca, el HTML lee totalPagar().
Como es la primera vez, el computed ejecuta su fórmula
imprime el console.log y muestra $150.

Si el usuario hace clic en el botón +, cantidad sube a 2.
El computed detecta que su origen cambió, destruye su caché
vuelve a ejecutar la fórmula (imprime el segundo console.log)
y el HTML se actualiza quirúrgicamente mostrando $300.



### effect

Si el Signal básico es una caja de cristal con una campana...
Y el Computed es una calculadora inteligente conectada a la caja...
Un effect() es como un robot centinela automático.

El robot no calcula valores para mostrar en la pantalla ni guarda datos en una caja
Su único trabajo es mirar fijamente las cajas de cristal (Signals) y
en el instante en que alguna de ellas cambie, correr a hacer una acción en el mundo exterior
(como guardar en una base de datos, escribir en un archivo o encender una luz).

##### Un effect() sirve exclusivamente para manejar efectos secundarios (side-effects).
##### significa realizar operaciones que escapan al control directo del HTML de Angular

Los tres escenarios más comunes donde lo vas a usar son:

Guardar datos automáticamente en el localStorage del navegador.
Hacer un console.log() de depuración para ver cómo cambia tu estado en tiempo real.
Interactuar con librerías externas de JavaScript que no entienden de Angular
(como gráficos, mapas o animaciones).

Reglas
advertencia:
effect() está diseñado para reaccionar
nunca para generar nuevos datos de Angular
Está prohibido modificar un Signal dentro de un effect
Si lo haces, crearás un bucle infinito
infinito (el effect cambia el signal -> el signal dispara el effect -> el effect vuelve a cambiar el signal)
infinito (el effect cambia el signal -> el signal dispara el effect -> el effect vuelve a cambiar el signal


1. Se ejecuta una vez al principio:
En cuanto la aplicación arranca, el effect()
se ejecuta de forma automática para "ver" qué Signals tiene adentro y empezar a rastrearlos

2. Rastreo Automático:
No tienes que decirle qué Signals vigilar
Angular lee el código dentro de tu efecto y
si ve que invocaste a miSignal(),
lo anota automáticamente en su lista de vigilancia.

3. Necesita "Contexto de Inyección":
Por razones técnicas de Angular
un effect() casi siempre debe declararse dentro del constructor() del componente
momento en que el componente está naciendo.


Ej: Guardar Preferencias (Modo Oscuro)
crear un interruptor de Modo Oscuro/Claro
recuerde la decisión del usuario guardándola en el disco duro del navegador
(localStorage) de forma 100% automática

preferencias.component.ts

```
import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-preferencias',
  standalone: true,
  templateUrl: './preferencias.component.html'
})
export class PreferenciasComponent {
  // 1. Nuestro Signal básico que controla el estado visual
  isDarkMode = signal<boolean>(false);

  constructor() {
    // 2. El Robot Centinela: Se activa automáticamente al nacer el componente
    effect(() => {
      // Angular ve que llamamos a 'isDarkMode()' y se pone a vigilarlo
      const modoActual = this.isDarkMode(); 
      
      // Acción en el mundo exterior: Guardamos en el almacenamiento nativo del navegador
      localStorage.setItem('preferencia-tema', JSON.stringify(modoActual));
      
      console.log(`💾 Guardado automático en LocalStorage: Modo oscuro = ${modoActual}`);
    });
  }

  // 3. Método para cambiar el estado
  alternarTema() {
    this.isDarkMode.update(actual => !actual);
  }
}
```

preferencias.component.html

```
<!-- Vinculamos dinámicamente una clase CSS de forma moderna usando Property Binding -->
<div [class.modo-oscuro]="isDarkMode()" style="padding: 30px; border-radius: 8px; transition: all 0.3s ease;">
  
  <h3>Configuración del Sistema</h3>
  <p>El tema actual es: <strong>{{ isDarkMode() ? 'Oscuro 🌙' : 'Claro ☀️' }}</strong></p>

  <!-- Al hacer clic, mutamos el Signal básico -->
  <button (click)="alternarTema()" style="padding: 10px 15px; cursor: pointer;">
    Cambiar aspecto
  </button>

</div>

<!-- Estilos rápidos para notar el cambio -->
<style>
  .modo-oscuro { background-color: #1e293b; color: #f8fafc; }
</style>
```

pantalla carga por primera vez, el effect() se ejecuta
ve que isDarkMode() es false
guarda ese false en el localStorage e imprime el primer mensaje en la consola.

El usuario hace clic en el botón
El método alternarTema() cambia el Signal básico a true.

Al detectar el cambio, el robot centinela se despierta al instante
ejecuta su bloque de código con el nuevo valor (true),
sobrescribe el localStorage e imprime el segundo mensaje.


devuelve valor | se puede modifcar con .set()

signal()
Almacenar el estado original de la app.
Sí
Sí

computed()
Transformar o calcular datos derivados de otros signals.
No (Es de solo lectura)
Sí

effect()
Reaccionar ante cambios para hacer acciones externas.
No
No (Solo ejecuta código)




## Prácticas para @Input, @Output y signals


### input
nuevo input() basado en Signals
Esta API es uno de los saltos de calidad más grandes de Angular
##### ya que transforma los datos que entran al componente en Signals de solo lectura

Olvida los viejos problemas donde el hijo no se enteraba a tiempo cuando el padre cambiaba un valor

mejores prácticas para usar los nuevos inputs:

1. Usa input.required() para datos obligatorios
En el pasado, si un componente hijo necesitaba sí o sí un dato (como la tarea)
usábamos @Input() tarea!: Tarea;.
Ese signo de exclamación ! era un truco para engañar a TypeScript
era un truco para engañar a TypeScript, diciéndole: "Créeme que el padre me lo va a pasar", lo cual causaba errores si lo olvidábamos.


Hoy, la buena práctica es declarar de forma explícita que el dato es obligatorio.

```
tarea = input.required<Tarea>();
```

Ventaja: Si intentas usar este componente hijo en el HTML y olvidas pasarle la propiedad `[tarea]`.
el compilador de Angular fallará de inmediato antes de que la app llegue al navegador


2. Inputs opcionales siempre con valor inicial

##### Si el parámetro que recibe tu componente no es obligatorio
(por ejemplo, un color de fondo o un texto de marcador de posición)
usa la función input() común y pásale siempre un valor por defecto dentro de los paréntesis.

```
// Si el padre no pasa nada, el botón será azul por defecto
colorBoton = input('blue'); // Angular infiere automáticamente que es tipo string
```


3. Adiós a ngOnChanges: Usa computed() para valores derivados

Uno de los patrones más pesados en Angular clásico era usar el ciclo de vida ngOnChanges
para recalcular cosas cuando un @Input() cambiaba.

En el Angular moderno, como los inputs son Signals
si necesitas calcular algo basado en el dato que entra
simplemente usas un Signal Computado (computed).

antes:

```
@Input() precio = 0;
precioConIva = 0;

ngOnChanges() {
  this.precioConIva = this.precio * 1.21; // Se ejecutaba manualmente en cada cambio
}
```

ahora:

```
precio = input.required<number>();

// Se recalcula SOLO y de forma óptima cuando 'precio' cambie
precioConIva = computed(() => this.precio() * 1.21);
```


4. Limpia tus tipos con la propiedad transform

A veces el padre envía un dato en un formato
(por ejemplo, un string "true" o "false" desde el HTML directo)
pero tu componente hijo lo necesita como un booleano real (true/false).

En lugar de procesar esto dentro del componente, usa la opción nativa transform
directamente en la declaración del input
Angular tiene utilidades listas para esto como booleanAttribute o numberAttribute.

```
import { Component, input, booleanAttribute } from '@angular/core';

@Component({ ... })
export class TarjetaComponent {
  // Transforma automáticamente cualquier string o presencia del atributo en un booleano real
  isUrgente = input(false, { transform: booleanAttribute });
}
```

Gracias a esto, el padre puede escribir en el HTML de forma superlimpia:

```
<app-tarjeta isUrgente /> <!-- Entra como 'true' real gracias al transform -->
```


### Casos de uso para input() signals


Tipo de Dato
Signal de solo lectura

Campos Obligatorios
Nativo con .required()

Transformaciones
Integrado con la opción transform

Reaccionar a cambios
computed() o effect()


Clasico:

Variable común mutable
Requiere hack de TypeScript (!)
Requería getters/setters complejos
Ciclo de vida ngOnChanges



### output

output() vino a reemplazar por completo al clásico e histórico @Output() con new EventEmitter().

Esta nueva API no está basada en RxJS por detrás
lo que la hace muchísimo más ligera, rápida y fácil de tipar para el compilador de Angular

mejores prácticas para dominar los eventos hacia arriba:

1. Adiós a EventEmitter, hola output() nativo
En el Angular clásico, cada vez que creabas un evento tenías que importar EventEmitter de @angular/core

ahora, la declaración es una función limpia y directa

```
import { Component, output } from '@angular/core';

@Component({ ... })
export class TarjetaTareaComponent {
  // PRÁCTICA ESTÁNDAR: Ultra ligero y fuertemente tipado
  alEliminar = output<string>(); // Emitirá el ID de la tarea (string)
}
```


2. regla semántica: no usar prefijo 'on' en el nombre del output

nombrar al output empezando con "on" (por ejemplo: onTareaElimitada)
mala práctica? Porque cuando el componente padre intente escuchar ese evento en su HTML
la sintaxis quedará extraña y redundante.

Nombre redundante en el Hijo:
`onEliminar = output<string>();`

HTML del Padre:
`<app-tarjeta (onEliminar)="manejarEliminar($event)" />`
Suena raro repetir el "on" dentro de los paréntesis de evento

Nombre limpio y semántico:
`alEliminar = output<string>();`
o simplemente
`eliminar = output<string>();`

HTML del Padre:
`<app-tarjeta (alEliminar)="eliminarTarea($event)" />`
Fluye y se lee de forma natural


3. Especificar tipo payload: incluso void

##### nunca dejes un output sin tipar
##### Si el evento no necesita enviar ningún dato hacia arriba
por ejemplo, un botón de "Limpiar todo" que solo avisa que hicieron clic
##### utiliza `<void>`.

```
// Si no envía datos, usa void explícitamente
alLimpiarTodo = output<void>();

notificarLimpieza() {
  this.alLimpiarTodo.emit(); // Se llama sin argumentos
}
```


4. Disparo idéntico: Método .emit()

A pesar de que por dentro cambió toda la arquitectura del framework
para que los eventos sean más eficientes

la forma de dispararlos se mantuvo exactamente igual por fuera
para que la migración sea amigable

Solo debes invocar al output y usar su método .emit().


```
eliminarClick(): void {
  // Disparamos el evento hacia el padre pasando el ID que el input nos prestó
  this.alEliminar.emit(this.tarea().id);
}
```

Moderno:

Sintaxis:
`cambio = output<T>();`

Dependencia:
Nativo y ligero (Independiente)

Rendimiento:
Estructura optimizada por el compilador

Interop con RxJS:
Se puede convertir si se necesita
`outputToObservable`


Clasico:

`@Output() cambio = new EventEmitter<T>();`
Amarrado internamente a RxJS
Creaba instancias pesadas en memoria
Era un Observable por defecto



### signals: signal, computed, effect

Los Signals son la base de la reactividad del Angular moderno
Aunque usarlos es muy intuitivo, hay un puñado de reglas

prácticas para manejar el estado con Signals de forma impecable:

1. Elige correctamente entre .set() y .update()
Para modificar el valor de un Signal común
Angular te da dos métodos
Usar el equivocado no romperá tu app,
pero reduce la claridad de tu código

`.set(nuevoValor)`:
cuando el nuevo dato reemplace por completo al anterior sin importarle qué había antes
como cuando limpias un formulario o llega una respuesta nueva de una API
`nombreUsuario.set('Sofía'); // Reemplazo directo`

`.update(fn)`:
cuando el nuevo valor dependa directamente del valor actual
como un contador, alternar un booleano, o agregar un ítem a una lista
Es mucho más seguro porque evita condiciones de carrera

```
// Recomendado: Usa la función flecha interna con el valor previo
contador.update(valorActual => valorActual + 1); 
isMenuAbierto.update(abierto => !abierto);
```


2. No duplicar estados: Todo lo derivado pertenece a computed()

error de arquitectura más común
Nunca crees un segundo Signal para almacenar un dato que se puede calcular a partir de un primer Signal
Si lo haces, tendrás que encargarte manualmente de mantenerlos sincronizados
lo cual es una fuente garantizada de bugs.

mal:
Estado duplicado y propenso a desincronizarse

```
precio = signal(100);
iva = signal(21); // ❌ ¿Para qué un signal?

cambiarPrecio(nuevo: number) {
  this.precio.set(nuevo);
  this.iva.set(nuevo * 0.21); // Esclavizado a actualizar ambos manualmente
}
```

bien:
Single Source of Truth / Fuente única de verdad

```
precio = signal(100);

// Recomendado: 'iva' se recalcula automáticamente y es de solo lectura
iva = computed(() => this.precio() * 0.21);
```


3. effect() con extrema moderación: nunca para escribir en otros Signals

effect() sirve para ejecutar código cuando los Signals que están adentro cambian
Sin embargo, su propósito no es gestionar lógica de negocio
Su uso principal es sincronizar tu app con herramientas externas al framework

buen uso:

Sincronizar un estado con el localStorage del navegador.

Manipular manualmente un lienzo de HTML (<canvas>)
o una librería gráfica externa (como D3 o Three.js).

Registrar métricas de analíticas (analytics.log())
o hacer un console.log de depuración.


Regla inquebrantable:
Nunca modifiques un Signal dentro de un effect().
Hacerlo puede generar bucles infinitos de renderizado que congelarán la pestaña del usuario
Por defecto, el compilador de Angular bloquea esto para proteger tu app.


4. Signals de tus Servicios usando .asReadonly()

Cuando mudes tus Signals a un Servicio de Angular
(para compartir datos en toda la aplicación)
nunca expongas el Signal directamente si los componentes solo necesitan leerlo
Si dejas el Signal público, 
cualquier componente podría alterarlo desde fuera
rompiendo el flujo unidireccional de datos.

```
@Injectable({ providedIn: 'root' })
export class CarritoService {
  // 1. El estado real se mantiene privado para que nadie lo altere a ciegas
  private _productos = signal<Producto[]>([]);

  // 2. Exponemos una versión pública de SOLO LECTURA
  // Los componentes pueden escucharlo, pero no pueden hacerle .set() ni .update()
  productos = this._productos.asReadonly();

  // 3. La única forma de alterarlo es a través de métodos oficiales del servicio
  agregarAlCarrito(nuevo: Producto) {
    this._productos.update(lista => [...lista, nuevo]);
  }
}
```

signal(valor)
mutable: Sí
Almacenar el estado base de tu componente o servicio (el origen).

computed(fn):
mut: no
Crear estados derivados o cálculos automáticos basados en otros signals.

effect(fn):
mut: No
Ejecutar efectos secundarios externos (LocalStorage, Analytics, DOM nativo).



## Practica modulo 3

##### Separaremos la interfaz en dos piezas: el Componente Padre (AppComponent),
que maneja la base de datos en memoria con un Signal
##### Componente Hijo (TarjetaTareaComponent), que se encargará exclusivamente de pintar una sola tarea
y reportar clics usando input() y output().

1. Interfaz
Antes de comunicar componentes, ambos deben hablar el mismo idioma
tener tu modelo de datos estrictamente tipado

tarea.model.ts

```
export interface Tarea {
  id: string;
  nombre: string;
  completada: boolean;
  prioridad: 'Alta' | 'Media' | 'Baja';
}
```

2. Componente Hijo: TarjetaTarea
componente es "tonto" o de presentación
no sabe de dónde vienen las tareas ni cómo borrarlas de un arreglo
solo sabe pintar un ítem y gritar hacia arriba cuando el usuario interactúa

Lógica: tarjeta-tarea.component.ts
Añadimos los tipos genéricos <Tarea> y <string>.
Sin ellos, Angular no sabe qué propiedades tiene tarea() dentro del HTML
ni qué tipo de dato viaja en el $event.

```
import { Component, input, output } from '@angular/core';
import { Tarea } from './tarea.model';

@Component({
  selector: 'app-tarjeta-tarea',
  standalone: true,
  templateUrl: './tarjeta-tarea.component.html',
  styleUrls: ['./tarjeta-tarea.component.css']
})
export class TarjetaTareaComponent {
  // ENTRADA: Ahora el compilador sabe que tarea() devuelve un objeto de tipo Tarea
  tarea = input.required<Tarea>();

  // SALIDAS: Especificamos que ambos eventos van a emitir un string (el ID de la tarea)
  alEliminar = output<string>(); 
  alAlternar = output<string>(); 
}
```

Vista: tarjeta-tarea.component.html
Al hacer clic en el checkbox o en el botón
llamamos al método .emit() de nuestros output pasándoles el ID.
```
<div class="tarea-item" [class.completada]="tarea().completada">
  
  <div class="info">
    <!-- Escuchamos el evento nativo (change) y disparamos nuestro output hacia arriba -->
    <input 
      type="checkbox" 
      [checked]="tarea().completada" 
      (change)="alAlternar.emit(tarea().id)"
    >
    
    <span class="nombre">{{ tarea().nombre }}</span>
    
    <!-- Generamos una clase CSS dinámica basada en la prioridad (ej: 'alta', 'media') -->
    <span class="badge" [class]="tarea().prioridad.toLowerCase()">
      {{ tarea().prioridad }}
    </span>
  </div>
  
  <!-- Al hacer clic, emitimos el ID para que el padre se encargue de borrarlo -->
  <button class="btn-borrar" (click)="alEliminar.emit(tarea().id)">
    🗑️
  </button>

</div>
```


3. Conectar todo en el Componente Padre
el padre importa al hijo y lo dibuja dentro del bucle @for
donde conectamos los cables usando Property Binding hacia abajo
Event Binding hacia arriba.
Lógica (app.component.ts):

le añadimos el tipado explícito <Tarea[]>
al crear el Signal para blindar el arreglo contra tipos de datos inesperados
```
import { Component, signal } from '@angular/core';
import { TarjetaTareaComponent } from './tarjeta-tarea.component';
import { Tarea } from './tarea.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TarjetaTareaComponent], // Importamos al hijo para poder usar su etiqueta
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Aseguramos que el Signal maneje estrictamente un arreglo de Tareas
  listaTareas = signal<Tarea[]>([
    { id: '1', nombre: 'Aprender Angular Signals', completada: true, prioridad: 'Alta' },
    { id: '2', nombre: 'Dominar Input y Output', completada: false, prioridad: 'Media' }
  ]);

  alternarEstadoTarea(id: string) {
    this.listaTareas.update(tareas => 
      tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t)
    );
  }

  eliminarTarea(id: string) {
    this.listaTareas.update(tareas => tareas.filter(t => t.id !== id));
  }
}
```

vista: app.component.html
conectamos los cables
Dentro del bloque @for, llamamos al selector del hijo <app-tarjeta-tarea>
y enlazamos sus entradas y salidas.
```
<main class="contenedor">
  <h1>Mi Panel de Tareas 📋</h1>

  <div class="lista">
    @for (item of listaTareas(); track item.id) {
      
      <!-- CONEXIÓN DE CANALES: -->
      <!-- [tarea]="item" -> Pasa el objeto actual del bucle hacia el input del hijo -->
      <!-- (alAlternar) y (alEliminar) -> Escuchan los outputs del hijo. -->
      <!-- El $event contiene el string (ID) que envió el hijo con el .emit() -->
      <app-tarjeta-tarea 
        [tarea]="item" 
        (alAlternar)="alternarEstadoTarea($event)"
        (alEliminar)="eliminarTarea($event)"
      />

    } @empty {
      <p class="mensaje-vacio">¡Felicidades! No te quedan tareas pendientes. 🚀</p>
    }
  </div>
</main>
```

Análisis del evento:
$event

en el HTML del padre escribimos eliminarTarea($event).
En el Angular moderno, ese $event captura exactamente el tipo de dato que definiste dentro del output<string>() del hijo
En este caso, TypeScript sabe automáticamente que es un string que contiene el ID
garantizando que tu código sea inmune a errores de tipado.




## Comunicación y arquitectura integrada

#### Modelo, componente y vista; app y vista

1. Contrato de datos: tarea

En tarjeta-tarea.ts declaras:
`tarea = input.required<Tarea>()`.

En app.ts listas:
`listaTareas = signal<Tarea[]>([...])`.

Ambos componentes importan la misma interfaz Tarea, asegurando que TypeScript te valide los nombres de propiedades
.id, .nombre, .prioridad, .completada
tanto en los archivos .ts como dentro de las plantillas .html.


2. Canal de Entrada: Padre ➔ Hijo

En app.html:
dentro del bucle `@for (item of listaTareas(); track item.id)`,
usas la sintaxis Property Binding: `[tarea]="item"`.

Envía cada objeto `item` hacia la función `input.required<Tarea>()` del hijo
Como es un Signal de solo lectura en el hijo, si la lista cambia en el padre
la tarjeta se redibuja automáticamente.


3. Canales de Salida: Hijo ➔ Padre

tarjeta-tarea.ts defines:
alEliminar = output<string>()
alAlternar = output<string>().

En tarjeta-tarea.html disparas .emit(tarea().id)
al hacer clic o cambiar el checkbox.

En app.html escuchas esos eventos con Event Binding
(alAlternar)="alternarEstadoTarea($event)"
(alEliminar)="eliminarTarea($event)"

##### El $event captura exactamente el string que envió el hijo (el id)
que coincide con lo que esperan recibir tus métodos en app.ts.


4. Formulario en el Padre

Signals nuevoNombre y nuevaPrioridad en app.ts se mantienen sincronizados con la vista mediante eventos nativos
<input> actualiza el texto con (input)="nuevoNombre.set(txtNombre.value)".

select> actualiza la prioridad con (change)="nuevaPrioridad.set($any(selPrioridad.value))".

Al procesar agregarTarea(), creas el objeto nuevaTarea
respetando la interfaz Tarea y reseteas ambos Signals a su estado inicial.

Modelo:

```
export interface Tarea {
  id: string;
  nombre: string;
  prioridad: 'Alta' | 'Media' | 'Baja';
  completada: boolean;
}
```


Componente: renderiza check, span y btn delete

1. logica:

```
import { Component, input, output } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-tarjeta-tarea',
  standalone: true,
  templateUrl: './tarjeta-tarea.html'
})
export class TarjetaTareaComponent {
  // ENTRADA: Ahora el compilador sabe que tarea() devuelve un objeto de tipo Tarea
  tarea = input.required<Tarea>();

  // SALIDAS: Especificamos que ambos eventos van a emitir un string (el ID de la tarea)
  alEliminar = output<string>(); 
  alAlternar = output<string>(); 
}

```


2. vista: 

```
<div class="tarea-item" [class.completada]="tarea().completada">
  
  <div class="info">
    <!-- Escuchamos el evento nativo (change) y disparamos nuestro output hacia arriba -->
    <input 
      type="checkbox" 
      [checked]="tarea().completada" 
      (change)="alAlternar.emit(tarea().id)"
    >
    
    <span class="nombre">{{ tarea().nombre }}</span>
    
    <!-- Generamos una clase CSS dinámica basada en la prioridad (ej: 'alta', 'media') -->
    <span class="badge" [class]="tarea().prioridad.toLowerCase()">
      {{ tarea().prioridad }}
    </span>
  </div>
  
  <!-- Al hacer clic, emitimos el ID para que el padre se encargue de borrarlo -->
  <button class="btn-borrar" (click)="alEliminar.emit(tarea().id)">
    🗑️
  </button>

</div>

```


Aplicación:

1. logica:

```
import { Component, signal } from '@angular/core';
import { TarjetaTareaComponent } from './components/tarjeta-tarea';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TarjetaTareaComponent], // Importamos al hijo para poder usar su etiqueta
  templateUrl: './app.html'
})
export class App {
  // Aseguramos que el Signal maneje estrictamente un arreglo de Tareas
  listaTareas = signal<Tarea[]>([
    { id: '1', nombre: 'Aprender Angular Signals', completada: true, prioridad: 'Alta' },
    { id: '2', nombre: 'Dominar Input y Output', completada: false, prioridad: 'Media' }
  ]);

  // Signal para guardar lo que escribe el usuario en tiempo real
  nuevoNombre = signal('');
  // Signal para controlar el valor seleccionado en el desplegable
  nuevaPrioridad = signal<'Alta' | 'Media' | 'Baja'>('Media');

  agregarTarea() {
    const nombreLimpio = this.nuevoNombre().trim();
    if (!nombreLimpio) return; // Evitamos agregar tareas vacías

    const nuevaTarea: Tarea = {
      id: crypto.randomUUID(), // Genera un ID único automáticamente
      nombre: nombreLimpio,
      completada: false,
      prioridad: this.nuevaPrioridad()
    };

    // Actualizamos la lista agregando la nueva tarea al final
    this.listaTareas.update(tareas => [...tareas, nuevaTarea]);
  
    // Reseteamos el campo de texto
    this.nuevoNombre.set('');
    this.nuevaPrioridad.set('Media');
  }
    
  alternarEstadoTarea(id: string) {
    this.listaTareas.update(tareas => 
      tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t)
    );
  }

  eliminarTarea(id: string) {
    this.listaTareas.update(tareas => tareas.filter(t => t.id !== id));
  }
}
```


2. vista:

```
<main class="contenedor">
  <h1>Mi Panel de Tareas 📋</h1>

  <form (submit)="$event.preventDefault(); agregarTarea()">
    
    <input 
      type="text" 
      #txtNombre
      [value]="nuevoNombre()" 
      (input)="nuevoNombre.set(txtNombre.value)"
      placeholder="¿Qué tarea tienes pendiente?"
    >

    <select 
      #selPrioridad
      [value]="nuevaPrioridad()" 
      (change)="nuevaPrioridad.set($any(selPrioridad.value))"
    >
      <option value="Alta">Alta 🔴</option>
      <option value="Media">Media 🟡</option>
      <option value="Baja">Baja 🟢</option>
    </select>

    <button type="submit">Agregar Tarea</button>
  </form>

  <div class="lista">
    @for (item of listaTareas(); track item.id) {
      
      <!-- CONEXIÓN DE CANALES: -->
      <!-- [tarea]="item" -> Pasa el objeto actual del bucle hacia el input del hijo -->
      <!-- (alAlternar) y (alEliminar) -> Escuchan los outputs del hijo. -->
      <!-- El $event contiene el string (ID) que envió el hijo con el .emit() -->
      <app-tarjeta-tarea 
        [tarea]="item" 
        (alAlternar)="alternarEstadoTarea($event)"
        (alEliminar)="eliminarTarea($event)"
      />

    } @empty {
      <p class="mensaje-vacio">¡Felicidades! No te quedan tareas pendientes. 🚀</p>
    }
  </div>
</main>
```




## Reto modulo 3

panel interactivo de productos tecnológicos
donde el componente Padre administra el catálogo y el carrito
mientras que el componente Hijo representa cada tarjeta de producto


### Requisitos

1. Modelo (producto.model.ts)
Crea una interfaz que represente a un producto con estas propiedades

id (string)
nombre (string)
precio (number)
esFavorito (boolean)
enCarrito (boolean)


2. Componente Hijo: TarjetaProductoComponent
componente standalone de presentación que reciba y emita información:

Entrada (input): Recibe un objeto obligatorio
producto = input.required<Producto>().

Salida 1 (output): alAlternarFavorito = output<string>()
emite el id al hacer clic en un botón de estrella/corazón (⭐).

Salida 2 (output): alAgregarAlCarrito = output<string>()
emite el id al hacer clic en "Agregar al Carrito" 🛒.

Regla:
Hijo no puede modificar la propiedad esFavorito ni enCarrito directamente
Su única responsabilidad es avisarle al padre mediante sus output().


3. Componente Padre: AppComponent
Debe administrar el estado global con Signals

Lista base (signal): Inicializa una lista con al menos 3 productos de ejemplo.

Cálculo automático (computed): Crea un Signal Computado totalCarrito
que calcule automáticamente el monto total a pagar de los productos que tengan enCarrito === true

Cálculo de contador (computed): Crea un Signal Computado cantidadFavoritos
que cuente cuántos productos tienen esFavorito === true.

Renderizado: Usa el bucle @for para renderizar las tarjetas
y pasa las entradas y salidas de forma correcta


Interfaz Esperada:

encabezado superior:
Contador de favoritos: ⭐ Favoritos: X
Total a pagar: 🛒 Total Carrito: $XXX

lista de productos (@for):
Cada tarjeta muestra su nombre, precio, un botón para marcar/desmarcar favorito    
y un botón para agregar/quitar del carrito.

Bloque alternativo (@if / @empty):
Si el usuario elimina todos los productos o la lista está vacía, mostrar un mensaje de aviso


### pista/hint: cambio de estado 

cambiar el estado de un producto en un arreglo con Signals
##### la buena práctica es usar .update() combinado con .map():

```
this.listaProductos.update(productos => 
  productos.map(p => p.id === id ? { ...p, enCarrito: !p.enCarrito } : p)
);
```

Para el computed() del total a pagar
podés usar .reduce() sobre el arreglo de productos.



### Diseño solución

1. Modelo de Datos
"forma" de la información que circulara por la aplicación.

Concepto: Una interfaz que representa un único producto

`Campos necesarios`:

Identificador: Un texto único para saber exactamente cuál producto estamos tocando
Nombre: Texto que se mostrará en pantalla.
Precio: Valor numérico necesario para los cálculos financieros del carrito.
Estado de Favorito: Valor verdadero/falso (booleano) que indica si el usuario lo marcó con estrella.
Estado en Carrito: Valor verdadero/falso (booleano) que indica si está agregado a la compra.


2. Componente Hijo (TarjetaProducto)
presentar la información de un producto y avisar al padre cuando el usuario interactúa con él
No guarda estado propio ni toma decisiones.

`Entrada (input)`:
Requiere de forma obligatoria recibir un objeto completo con la estructura del Modelo.


`Salida (output)`:

`Evento Favorito`: Notifica cuando el usuario hace clic en el botón de la estrella
le envía el Identificador del producto.

`Evento de Carrito`: Notifica cuando el usuario hace clic en el botón del carrito
le envía el Identificador del producto.


`Lógica visual interna`:

Muestra nombre y precio del producto
esFavorito es verdadero, resalta el icono/texto de la estrella.
enCarrito es verdadero, cambia el texto del botón (por ejemplo, a "Quitar del carrito").

Regla: 
Cuando el usuario presiona un botón
el hijo no cambia el booleano por su cuenta
solo emite su output hacia el padre


3. Componente Padre (App)
fuente de la verdad
Mantiene el listado de productos
calcula métricas globales y ejecuta los cambios cuando el hijo le avisa

`Estado Principal (signal)`:
Mantiene una lista (arreglo) con varios productos cargados inicialmente.


`Estados Calculados / Derivados (computed)`:

Total del Carrito: Un valor calculado que recorre la lista
busca los productos que tienen enCarrito = verdadero y suma sus precios

Cantidad de Favoritos: Un valor calculado que cuenta cuántos productos tienen
esFavorito = verdadero.


`Acciones / Métodos de actualización`:

Alternar Favorito: Recibe el Identificador desde el hijo
busca el producto en la lista y le invierte su estado de favorito (de verdadero a falso o viceversa).

Alternar Carrito: Recibe el Identificador desde el hijo, busca el producto en la lista
le invierte su estado en el carrito.


`Estructura en Plantilla`:

Encabezado: Muestra los contadores que vienen de los dos computed

Lista: Recorre la lista de productos con un bucle (@for).
Por cada elemento, renderiza una TarjetaProducto
le pasa el objeto actual mediante su input
escucha sus dos output para ejecutar los métodos de actualización.



### Código solución


#### 1. Modelo

producto.model.ts

```
export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  esFavorito: boolean;
  enCarrito: boolean;
}
```

Con este "contrato" listo, TypeScript ya conoce exactamente la estructura de cada producto
Ahora cualquier componente que cree o reciba un Producto sabrá qué propiedades
tiene disponibles con autocompletado y tipado estricto


#### 2. Componente hijo: TarjetaProductoComponent

Siguiendo al pie de la letra el diseño
este componente recibe el objeto producto como un input.required<Producto>()
y declara dos canales de salida output<string>() para notificar al padre enviando el id.

1. Lógica: tarjeta-producto.ts

```
import { Component, input, output } from '@angular/core';
import { Producto } from './producto.model';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  templateUrl: './tarjeta-producto.html'
})
export class TarjetaProductoComponent {
  // ENTRADA: Recibe un Producto obligatorio de solo lectura
  producto = input.required<Producto>();

  // SALIDAS: Canaliza las acciones hacia el padre enviando el id del producto
  alAlternarFavorito = output<string>();
  alAgregarAlCarrito = output<string>();
}
```


2. Vista: tarjeta-producto.html
En el HTML leemos el objeto invocando la función del Signal producto().
Evaluamos sus booleanos para adaptar el texto/icono visualmente
al hacer clic disparamos el .emit() con el id.

```
<div class="tarjeta">
  <h3>{{ producto().nombre }}</h3>
  <p>Precio: ${{ producto().precio }}</p>

  <div class="acciones">
    <!-- Botón Favorito: cambia el icono/texto dinámicamente según 'esFavorito' -->
    <button (click)="alAlternarFavorito.emit(producto().id)">
      {{ producto().esFavorito ? '⭐ En Favoritos' : '🖤 Guardar Favorito' }}
    </button>

    <!-- Botón Carrito: cambia el texto dinámicamente según 'enCarrito' -->
    <button (click)="alAgregarAlCarrito.emit(producto().id)">
      {{ producto().enCarrito ? '🛒 Quitar del Carrito' : '🛒 Agregar al Carrito' }}
    </button>
  </div>
</div>
```

Cumple las reglas:

`Cero estado propio`:
El hijo no tiene ninguna variable booleana local. Todo proviene de producto().

`Cero mutación directa`:
Al presionar los botones, el hijo no hace producto().esFavorito = true
Solo llama a this.alAlternarFavorito.emit(id),
delegándole el 100% de la responsabilidad al padre.



### 3. Componente Padre (App).

unificamos todo: creamos el estado reactivo base con signal
derivamos los valores automáticos con computed
conectamos la plantilla usando @for y el binding de eventos con $event

1. Lógica (app.ts)

```
import { Component, signal, computed } from '@angular/core';
import { TarjetaProductoComponent } from './tarjeta-producto';
import { Producto } from './producto.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TarjetaProductoComponent],
  templateUrl: './app.html'
})
export class App {
  // 1. Estado Principal (Signal básico)
  listaProductos = signal<Producto[]>([
    { id: '1', nombre: 'Smartphone Pro 5G', precio: 800, esFavorito: false, enCarrito: false },
    { id: '2', nombre: 'Auriculares Inalámbricos', precio: 150, esFavorito: true, enCarrito: true },
    { id: '3', nombre: 'Teclado Mecánico RGB', precio: 120, esFavorito: false, enCarrito: false },
    { id: '4', nombre: 'Monitor Gaming 4K', precio: 450, esFavorito: false, enCarrito: false }
  ]);

  // 2. Estados Calculados (Computed Signals)
  // Recorre la lista, filtra los enCarrito === true y suma sus precios
  totalCarrito = computed(() => {
    return this.listaProductos()
      .filter(p => p.enCarrito)
      .reduce((acumulado, p) => acumulado + p.precio, 0);
  });

  // Cuenta automáticamente cuántos tienen esFavorito === true
  cantidadFavoritos = computed(() => {
    return this.listaProductos().filter(p => p.esFavorito).length;
  });

  // 3. Métodos de actualización de estado
  alternarFavorito(id: string) {
    this.listaProductos.update(productos =>
      productos.map(p => p.id === id ? { ...p, esFavorito: !p.esFavorito } : p)
    );
  }

  alternarCarrito(id: string) {
    this.listaProductos.update(productos =>
      productos.map(p => p.id === id ? { ...p, enCarrito: !p.enCarrito } : p)
    );
  }
}
```


2. Vista (app.html)

```
<main class="contenedor">
  <h1>Catálogo de Tecnología 💻</h1>

  <!-- Encabezado con Métricas Derivadas -->
  <header class="resumen">
    <p>⭐ Favoritos: <strong>{{ cantidadFavoritos() }}</strong></p>
    <p>🛒 Total Carrito: <strong>${{ totalCarrito() }}</strong></p>
  </header>

  <!-- Lista de Productos -->
  <div class="lista-productos">
    @for (item of listaProductos(); track item.id) {
      
      <!-- Conexión de Input/Outputs con el Hijo -->
      <app-tarjeta-producto 
        [producto]="item" 
        (alAlternarFavorito)="alternarFavorito($event)"
        (alAgregarAlCarrito)="alternarCarrito($event)"
      />

    } @empty {
      <p class="mensaje-vacio">No hay productos disponibles en el catálogo. 📦</p>
    }
  </div>
</main>
```


`Calculo cero manual`:
Cuando el usuario hace clic en "Agregar al Carrito", el hijo emite el id.
El padre ejecuta alternarCarrito(id) y muta el Signal listaProductos.

`Reacción en cadena`:
cuanto listaProductos cambia, Angular despierta al computed totalCarrito() por sí solo
recalcula la suma y actualiza únicamente el número <strong>${{ totalCarrito() }}</strong>
en el HTML, sin volver a renderizar elementos innecesarios.



### Bonus: agregar productos a la pantalla


#### Diseño

Gracias a la separación de responsabilidades que hicimos, las piezas encajan de forma natural

1. producto.model.ts:
El "contrato" no cambia
El nuevo producto va a tener exactamente las mismas propiedades
(id, nombre, precio, esFavorito, enCarrito).

2. tarjeta-producto (Hijo):
##### Al componente hijo no le importa cuántos productos existen ni cómo se crean
##### solo sabe recibir un producto y mostrarlo

3. app.ts (Padre - Lógica):
Reside la lista principal (listaProductos).

##### Necesitamos la lógica para recibir los datos del nuevo producto y agregarlo al arreglo.

app.html (Padre - Vista):
##### Necesitamos agregar la interfaz visual: (el formulario con los campos de entrada) para que el usuario pueda escribir


Nueva lógica:

1. En app.ts

`Estados locales para el formulario (Signals)`:
Necesitamos un Signal para guardar el nombre que escribe el usuario (nuevoNombre, texto).
Necesitamos un Signal para guardar el precio que escribe el usuario (nuevoPrecio, número).

`Nuevo método (agregarProducto)`:

1. Lee los valores de los Signals del formulario y limpia espacios en blanco

2. Valida que el nombre no esté vacío y que el precio sea un número válido mayor a 0.

3. Crea un objeto Producto nuevo asignándole:
Un id único generado automáticamente.
El nombre y precio ingresados.
esFavorito: false y enCarrito: false por defecto.

4. Actualiza la lista principal (listaProductos) agregando el nuevo objeto al final mediante .update().

5. Limpia los Signals del formulario para vaciar los campos de entrada.


Vista: app.html

`Formulario de creación`:
Un elemento <form> colocado arriba del catálogo.
Un <input type="text"> conectado al Signal del nombre.
Un <input type="number"> conectado al Signal del precio.
Un <button type="submit"> para enviar el formulario

`Manejo del evento de envío`:
Escuchamos el evento (submit) del formulario para ejecutar el método agregarProducto() preveniendo la recarga de la página.


`Signals que ya tenemos`:

Arquitectura limpia:

método agregarProducto() agrega el nuevo ítem al Signal listaProductos(),
el bucle @for de la plantilla dibuja la nueva tarjeta automáticamente

No hay que tocar los computed:
Si el usuario después agrega ese nuevo producto al carrito o lo marca como favorito
totalCarrito() y cantidadFavoritos() lo tendrán en cuenta automáticamente en sus cálculos sin escribir una sola línea extra


#### Código

1. Lógica: app.ts

Añadimos los Signals para controlar el formulario
nuevoNombre y nuevoPrecio
método agregarProducto() que valida la entrada
instancia el nuevo Producto y resetea el formulario

```
// 1. Estado Principal
  listaProductos = signal<Producto[]>([
    { id: '1', nombre: 'Smartphone Pro 5G', precio: 800, esFavorito: false, enCarrito: false },
    { id: '2', nombre: 'Auriculares Inalámbricos', precio: 150, esFavorito: true, enCarrito: true },
    { id: '3', nombre: 'Teclado Mecánico RGB', precio: 120, esFavorito: false, enCarrito: false },
    { id: '4', nombre: 'Monitor Gaming 4K', precio: 450, esFavorito: false, enCarrito: false }
  ]);

// 2. Signals locales para los campos del formulario
  nuevoNombre = signal('');
  nuevoPrecio = signal<number | null>(null);

// 4. new prod
agregarProducto() {
    const nombreLimpio = this.nuevoNombre().trim();
    const precioValido = this.nuevoPrecio();

    // Guardas de seguridad: evitamos datos vacíos o precios no válidos
    if (!nombreLimpio || precioValido === null || precioValido <= 0) return;

    const nuevoProducto: Producto = {
      id: crypto.randomUUID(),
      nombre: nombreLimpio,
      precio: precioValido,
      esFavorito: false,
      enCarrito: false
    };

    // Actualizamos el arreglo global
    this.listaProductos.update(productos => [...productos, nuevoProducto]);

    // Reseteamos los campos del formulario
    this.nuevoNombre.set('');
    this.nuevoPrecio.set(null);
  }  
```


2. Vista: app.html

Agregamos el <form> sin estilos en la parte superior
Vinculamos las entradas de texto y número mediante Property Binding [value] y actualizamos los Signals en cada evento (input).

```
<!-- Formulario de creación sin CSS -->
  <form (submit)="$event.preventDefault(); agregarProducto()">
    <input 
      type="text" 
      #txtNombre
      [value]="nuevoNombre()" 
      (input)="nuevoNombre.set(txtNombre.value)"
      placeholder="Nombre del producto"
    >
    
	<input 
      type="number" 
      #numPrecio
      [value]="nuevoPrecio() ?? ''" 
      (input)="nuevoPrecio.set(numPrecio.valueAsNumber || null)"
      placeholder="Precio ($)"
    >

    <button type="submit">Agregar Producto</button>
  </form>

  <hr>
    
```

Detalle `<input type="number">`:
Usamos numPrecio.valueAsNumber || null
###### La propiedad nativa .valueAsNumber convierte automáticamente el texto del input a un tipo number de TypeScript
Si el campo está vacío, devuelve NaN
que evaluamos con || null para mantener limpio nuestro Signal nuevoPrecio




# 4. Módulo 4: Servicios e Inyección de Dependencias

##### Hasta ahora, nuestros componentes hacían todo
##### guardar el estado, calcular totales, validar datos y manejar la interfaz.

##### A medida que una aplicación crece, tener toda la lógica dentro de un componente se vuelve inmanejable

##### Regla de arquitectura: los componentes solo deben preocuparse por la vista (HTML/CSS)
#### !!! la lógica de negocio debe vivirlos en Servicios.

1. Servicio (@Injectable)
##### Un servicio no es más que una clase de TypeScript dedicada a una tarea específica
##### (gestionar el catálogo, autenticar usuarios, conectar con una API, etc.).

Se identifica con el decorador @Injectable:

```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // 👈 ¡La clave del Angular moderno!
})
export class ProductosService {
  // Lógica y estado aquí...
}
```

providedIn: 'root':
##### Le dice a Angular que cree una instancia única (patrón Singleton) para toda la aplicación
No necesitas registrar el servicio en ningún módulo ni arreglo de providers
Todos los componentes que lo usen compartirán exactamente los mismos datos en memoria


2. función inject() (Inyección de Dependencias Moderna)

##### La Inyección de Dependencias es el mecanismo por el cual Angular le entrega automáticamente a un componente las herramientas que necesita
sin que el componente tenga que crearlas manualmente con un new MiServicio().


Clasico: Constructor

```
export class App {
  constructor(private productosService: ProductosService) {}
}
```


Moderno: inject()

```
import { Component, inject } from '@angular/core';

export class App {
  // Inyección limpia mediante la función inject()
  private productosService = inject(ProductosService);
}
```

Preferencia por inject():

1. legible
Puedes declarar e inyectar el servicio en una sola línea directamente como una propiedad de la clase

2. funciones fuera de clases
Puedes usar inject() en guardas de rutas (functional guards)
interceptores HTTP o funciones auxiliares donde no hay un constructor

3. Mejor tipado e inferencia
TypeScript deduce el tipo automáticamente sin necesidad de duplicar código


3. Servicios + Signals = Estado Global Reactivo

Los servicios actúan como la fuente de la verdad
##### El patrón estándar consiste en mover los signal y computed
##### fuera del componente y colocarlos dentro del servicio

```
[ Componente A ] ──(lee)──> [ Servicio (Signal) ] <──(modifica)── [ Componente B ]
```

Cuando un componente modifica el Signal dentro del Servicio
todos los demás componentes que estén leyendo ese Signal se actualizarán automáticamente


### Ej servicio

Servicio (productos.service.ts)

```
import { Injectable, signal, computed } from '@angular/core';
import { Producto } from './producto.model';

@Injectable({ providedIn: 'root' })
export class ProductosService {
  // Estado privado/protegido en el servicio
  private listaProductos = signal<Producto[]>([]);

  // Exponemos el signal de solo lectura y las métricas
  productos = this.listaProductos.asReadonly();
  totalCarrito = computed(() => 
    this.listaProductos().filter(p => p.enCarrito).reduce((acc, p) => acc + p.precio, 0)
  );

  // Métodos para alterar el estado
  agregarProducto(nuevo: Producto) {
    this.listaProductos.update(prods => [...prods, nuevo]);
  }
}
```


Componente (app.ts)

```
import { Component, inject } from '@angular/core';
import { ProductosService } from './productos.service';

@Component({ ... })
export class App {
  // Inyectamos el servicio
  private productosService = inject(ProductosService);

  // Conectamos directamente las propiedades del servicio a la vista
  productos = this.productosService.productos;
  totalCarrito = this.productosService.totalCarrito;

  nuevoProducto() {
    this.productosService.agregarProducto({ ... });
  }
}
```



## Refactorización para implementar servicios

##### crearemos un archivo nuevo (productos.service.ts)
##### modificaremos únicamente el Componente Padre (App).
El Modelo y el Componente Hijo no se enteran de este cambio.

producto.model.ts:
La interfaz Producto sigue siendo la misma fuente de verdad para la estructura de datos.

tarjeta-producto (Hijo):
El hijo es un componente de presentación puro (dumb component).
Solo le importa recibir un [producto] por input() y emitir eventos por output().
No le importa si esos datos están en el Padre o en un Servicio.

productos.service.ts (NUEVO):
Nace la nueva fuente de la verdad
##### Aquí moveremos el estado global y las reglas de negocio

app.ts (Padre - Lógica):
##### Se "aligera" enormemente
##### Deja de gestionar el arreglo de productos y los computed
##### Su nuevo rol es inyectar el servicio con inject() y delegarle las acciones

app.html (Padre - Vista):
##### Solo adaptamos las llamadas si decidimos leer los signals directamente desde el servicio
(por ejemplo, productosService.totalCarrito())
o si expone referencias en la clase App.


### Diseño

#### Redistribución de Responsabilidades

1. Lo que se MUEVE al Servicio (ProductosService)
##### El servicio absorberá todo lo que sea estado global y lógica de negocio:

#### 1. Estado principal: listaProductos (Signal).

#### 2. Métricas derivadas: totalCarrito y cantidadFavoritos (Computed Signals).

#### 3. Métodos de negocio:

agregarProducto(nombre, precio)
alternarFavorito(id)
alternarCarrito(id)


2. Lo que se queda en el padre: app

##### !!! Componente Padre mantendrá únicamente lo referente a la UI local y el formulario

#### 1. Inyección:
Una propiedad privada private productosService = inject(ProductosService).

#### 2. Estado local del formulario:
Los Signals nuevoNombre y nuevoPrecio
(ya que son temporales y solo existen para la caja de texto).

#### 3. Manejador del envío del formulario:
El método agregarProducto() del componente leerá los inputs locales
llamará al método del servicio this.productosService.agregarProducto(...) y reseteará las cajas de texto


Pasaremos de un componente App sobrecargado a una arquitectura donde

```
App (component) -> 	ProductosService ->
			usa inject()			Maneja state
```

App solo se encarga del formulario y de renderizar las tarjetas.

ProductosService vive de forma independiente en memoria
##### !!! listo para que cualquier otro componente futuro pueda consultar el carrito o los favoritos sin pasar por App.




### Código

1. productos.service.ts

aislamos el estado principal dentro del servicio utilizando un Signal privado
(private listaProductosSignal)
lo exponemos como de solo lectura con .asReadonly().

Así, ningún componente podrá mutar la lista por accidente sin pasar por los métodos del servicio

```
import { Injectable, signal, computed } from '@angular/core';
import { Producto } from './models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  // 1. Estado Privado: Solo el servicio puede modificar directamente este Signal
  private listaProductosSignal = signal<Producto[]>([
    { id: '1', nombre: 'Smartphone Pro 5G', precio: 800, esFavorito: false, enCarrito: false },
    { id: '2', nombre: 'Auriculares Inalámbricos', precio: 150, esFavorito: true, enCarrito: true },
    { id: '3', nombre: 'Teclado Mecánico RGB', precio: 120, esFavorito: false, enCarrito: false },
    { id: '4', nombre: 'Monitor Gaming 4K', precio: 450, esFavorito: false, enCarrito: false }
  ]);

  // 2. Estado Público de Solo Lectura: Los componentes pueden leerlo pero no mutarlo directamente
  listaProductos = this.listaProductosSignal.asReadonly();

  // 3. Métricas automáticas globales (computed)
  totalCarrito = computed(() => {
    return this.listaProductosSignal()
      .filter(p => p.enCarrito)
      .reduce((acumulado, p) => acumulado + p.precio, 0);
  });

  cantidadFavoritos = computed(() => {
    return this.listaProductosSignal().filter(p => p.esFavorito).length;
  });

  // 4. Métodos de Negocio (única vía para modificar el estado)
  agregarProducto(nombre: string, precio: number) {
    const nuevoProducto: Producto = {
      id: crypto.randomUUID(),
      nombre,
      precio,
      esFavorito: false,
      enCarrito: false
    };

    this.listaProductosSignal.update(productos => [...productos, nuevoProducto]);
  }

  alternarFavorito(id: string) {
    this.listaProductosSignal.update(productos =>
      productos.map(p => p.id === id ? { ...p, esFavorito: !p.esFavorito } : p)
    );
  }

  alternarCarrito(id: string) {
    this.listaProductosSignal.update(productos =>
      productos.map(p => p.id === id ? { ...p, enCarrito: !p.enCarrito } : p)
    );
  }
}
```

Claves:

##### !!! providedIn: 'root':
Garantiza que este servicio sea una instancia única (Singleton) compartida por toda la app

asReadonly(): Es la mejor práctica en Angular moderno para proteger tus Signals
Le da a los componentes acceso reactivo de lectura
pero les bloquea llamadas accidentales como .set() o .update().

Encapsulamiento total: La creación del objeto Producto (con su id y valores iniciales) ahora vive en el servicio
El componente solo necesita pasarle los datos crudos (nombre y precio).


2. Refactorizaciones de app y su vista

el archivo app.ts reduce su tamaño drásticamente
##### pasando de gestionar todo el estado a simplemente inyectar el servicio y mantener el control del formulario local


1. Lógica Refactorizada (app.ts)
Inyectamos el servicio declarando readonly productosService = inject(ProductosService);.
Eliminamos la lista de productos y los computed
##### dejando únicamente el estado del formulario local (nuevoNombre y nuevoPrecio).

```
import { Component, signal, inject } from '@angular/core';
import { TarjetaProductoComponent } from './tarjeta-producto';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TarjetaProductoComponent],
  templateUrl: './app.html'
})
export class App {
  // 1. Inyección de Dependencias moderna mediante inject()
  readonly productosService = inject(ProductosService);

  // 2. Mantenemos ÚNICAMENTE el estado local del formulario
  nuevoNombre = signal('');
  nuevoPrecio = signal<number | null>(null);

  // 3. Método del formulario: valida la entrada de la UI y delega al servicio
  agregarProducto() {
    const nombreLimpio = this.nuevoNombre().trim();
    const precioValido = this.nuevoPrecio();

    if (!nombreLimpio || precioValido === null || precioValido <= 0) return;

    // Delegamos la lógica de creación al Servicio
    this.productosService.agregarProducto(nombreLimpio, precioValido);

    // Reseteamos los campos locales
    this.nuevoNombre.set('');
    this.nuevoPrecio.set(null);
  }
}
```

vista:

##### En la plantilla accedemos directamente a la propiedad productosService
##### En la plantilla accedemos directamente a la propiedad productosService

```
<main class="contenedor">
  <h1>Catálogo de Tecnología 💻</h1>

  <!-- Formulario de creación (Mantiene los Signals locales del formulario) -->
  <form (submit)="$event.preventDefault(); agregarProducto()">
    <input 
      type="text" 
      #txtNombre
      [value]="nuevoNombre()" 
      (input)="nuevoNombre.set(txtNombre.value)"
      placeholder="Nombre del producto"
    >

    <input 
      type="number" 
      #numPrecio
      [value]="nuevoPrecio() ?? ''" 
      (input)="nuevoPrecio.set(numPrecio.valueAsNumber || null)"
      placeholder="Precio ($)"
    >

    <button type="submit">Agregar Producto</button>
  </form>

  <hr>

  <!-- Encabezado: Consume los Computed Signals directamente del Servicio -->
  <header class="resumen">
    <p>⭐ Favoritos: <strong>{{ productosService.cantidadFavoritos() }}</strong></p>
    <p>🛒 Total Carrito: <strong>${{ productosService.totalCarrito() }}</strong></p>
  </header>

  <!-- Lista: Iteramos sobre el Signal de lectura del Servicio -->
  <div class="lista-productos">
    @for (item of productosService.listaProductos(); track item.id) {

      <!-- Delegamos las acciones del Hijo directamente a los métodos del Servicio -->
      <app-tarjeta-producto 
        [producto]="item" 
        (alAlternarFavorito)="productosService.alternarFavorito($event)"
        (alAgregarAlCarrito)="productosService.alternarCarrito($event)"
      />

    } @empty {
      <p class="mensaje-vacio">No hay productos disponibles en el catálogo. 📦</p>
    }
  </div>
</main>
```

app.ts extremadamente limpio: La clase pasó de tener casi 60 líneas de lógica de negocio
a un puñado de líneas enfocadas únicamente en controlar la UI del formulario

Acceso directo en la plantilla: Al marcar productosService como pública (o readonly),
la plantilla puede consumir productosService.totalCarrito()
o ejecutar productosService.alternarFavorito($event)
sin necesidad de crear funciones intermedias (wrappers) en la clase del componente.

Escalabilidad real: Si el día de mañana agregamos un segundo componente
(por ejemplo, una barra de navegación superior o un modal de pago)
basta con usar inject(ProductosService) en ese nuevo componente para sincronizar la misma información al instante




## Reto módulo 4: servicios

construir un NotificacionesService global
que administre estos avisos y se pueda inyectar en cualquier parte de la aplicación

1. Modelo (notificacion.model.ts)

interfaz para representarlas:
id (string)
mensaje (string)
tipo ('exito' | 'info' | 'error')


2. Servicio (notificaciones.service.ts)

Debe ser un @Injectable({ providedIn: 'root' }):

Estado Privado (signal): private listaNotificaciones = signal<Notificacion[]>([]).

Estado Público de Lectura: notificaciones = this.listaNotificaciones.asReadonly().

Método mostrarNotificacion(mensaje: string, tipo: 'exito' | 'info' | 'error'):
Genera una nueva notificación con un id único y la agrega a la lista.

Método eliminarNotificacion(id: string):
Remueve la notificación de la lista cuando el usuario la cierra.


3. Integración mediante inject()

En ProductosService o en App: Inyecta el NotificacionesService usando inject(NotificacionesService).

Cada vez que se ejecute agregarProducto() o alternarCarrito(), dispara una notificación:
Ejemplo: "¡Producto agregado al carrito con éxito!" (tipo 'exito').

la vista (app.html): Renderiza la lista de notificaciones activas consumiendo notificacionesService.notificaciones() con un bucle @for.


Hints:

Inyección Servicio a Servicio: ¿Sabías que un Servicio de Angular puede inyectar otro Servicio?
Puedes usar inject(NotificacionesService) dentro de tu ProductosService para que al modificar el carrito
el propio catálogo dispare el aviso automáticamente.

Auto-eliminación (Opcional / Desafío Extra): Si quieres ir un paso más allá
puedes usar un setTimeout() dentro de mostrarNotificacion()
para que la alerta se borre sola pasados 3 segundos.



### Diseño


1. Modelo: notificacion.model.ts

`id (string)`:
Identificador único para cada notificación generada
(por ejemplo, con crypto.randomUUID()).
Permite que el bucle @for en la plantilla haga el rastreo (track item.id)
y que el servicio sepa exactamente cuál notificación eliminar cuando el usuario presiona el botón de cerrar ("X") o cuando expira un temporizador

`mensaje (string)`:
El texto descriptivo que leerá el usuario
Ejemplo: "¡Producto agregado al carrito con éxito
o "El campo nombre no puede estar vacío".

`tipo ('exito' | 'info' | 'error')`:
Un tipo de unión literal (Union Type) para categorizar la intención de la alerta.
Utilidad: Le permitirá a la vista aplicar un icono o estilo visual según el caso
(verde para éxito, azul para info, rojo para error).

Union Type en tipo:
En lugar de usar un simple string genérico
restringir la propiedad a 'exito' | 'info' | 'error' le otorga a TypeScript un control estricto
Si por error escribimos 'exitazo', el compilador nos avisará inmediatamente antes de ejecutar la aplicación


2. Servicio (notificaciones.service.ts)

mejores prácticas del Angular moderno: encapsulamiento estricto, reactividad con Signals y responsabilidad única

1. Estado Privado vs. Estado Público

`private listaNotificacionesSignal`:

Un Signal que contiene la lista de notificaciones activas (Notificacion[]),
inicializado como un arreglo vacío [].

Al ser private, ningún componente o servicio externo puede hacer listaNotificacionesSignal.set([])
o borrar notificaciones a la fuerza sin pasar por los métodos oficiales.


`notificaciones`: Público

Se expone usando .asReadonly().

componentes (como app.html o un componente dedicado a toasts)
podrán consumirlo en sus plantillas y reaccionar automáticamente cada vez que aparezca o desaparezca un aviso


`Método A`: mostrarNotificacion(mensaje, tipo)
encargado de crear y publicar un aviso

`Recibe`: El texto a mostrar y la categoría ('exito', 'info' o 'error').

`Genera el objeto`: Crea una nueva entidad Notificacion asignándole:
id: Generado en el momento con crypto.randomUUID().
mensaje: El texto recibido.
tipo: La categoría recibida

`Actualiza el Signal`: Usa .update() para agregar la nueva notificación al arreglo existente:

```
// Concepto:
[...notificacionesActuales, nuevaNotificacion]
```

Manejo del ciclo de vida (Auto-cierre opcional):

Podemos incluir un setTimeout dentro del método que
pasados unos 3 o 4 segundos, ejecute automáticamente eliminarNotificacion(id)
para que las alertas no se acumulen infinitamente en pantalla.


`Método B`: eliminarNotificacion(id)
encargado de limpiar o descartar un aviso

`Recibe`: El id único de la notificación a eliminar.

`Actualiza el Signal`: Usa .update() junto con un .filter()
para devolver una nueva lista que excluya la notificación con ese id:

```
// Concepto:
notificaciones.filter(n => n.id !== idBuscado)
```

Ventaja:
Cualquier parte de la app (el componente App, el ProductosService o cualquier futuro módulo)
solo necesitará llamar a notificacionesService.mostrarNotificacion('¡Hecho!', 'exito').
No tienen que saber cómo se asignan los IDs, cómo se borran o cómo se dibujan en el HTML


3. Integración del servicio


1. Inyección Servicio a Servicio (ProductosService)

Dentro de ProductosService, añadimos una propiedad privada inyectando el servicio de notificaciones

```
// Dentro de ProductosService:
private notificacionesService = inject(NotificacionesService);
```
Así, ProductosService gana el poder de emitir alertas sin preocuparse por la interfaz gráfica.


2. Puntos de Disparo (Triggers)

Diseñemos exactamente qué mensajes y tipos se dispararán en cada acción

En agregarProducto(nombre, precio):
Acción: Tras agregar el objeto al Signal listaProductosSignal.

Disparo: this.notificacionesService.mostrarNotificacion(Producto "${nombre}" agregado al catálogo, 'exito')


En alternarCarrito(id):
Acción: Antes o durante la actualización del estado, buscamos el producto para saber si se está agregando o quitando

Disparo:
Si pasa a estar en el carrito: "¡Producto agregado al carrito con éxito!" (tipo 'exito').
Si se remueve del carrito: "Producto quitado del carrito" (tipo 'info').
    

3. Diseño de la Vista (app.html)

#### !!! renderizar las notificaciones en la pantalla

Inyección en App: App inyecta readonly notificacionesService = inject(NotificacionesService);
(o lo consume si ProductosService no lo expone).

Contenedor en el HTML: Colocamos una sección superior (o flotante) que consulte el Signal de notificaciones

```
<div class="contenedor-notificaciones">
  @for (notif of notificacionesService.notificaciones(); track notif.id) {
    <div class="alerta" [class]="notif.tipo">
      <span>{{ notif.mensaje }}</span>
      <button (click)="notificacionesService.eliminarNotificacion(notif.id)">❌</button>
    </div>
  }
</div>
```

Arquitectura:

Desacoplamiento total:
El componente App solo dibuja los avisos que existen en el Signal
No sabe qué los originó

Cohesión de negocio:
Si mañana agregamos un botón de "Vaciar Carrito" en ProductosService
el propio servicio emitirá la notificación correspondiente sin tener que tocar ningún HTML ni componente




### Código


#### 1. Modelo

notificacion.model.ts

```
export interface Notificacion {
  id: string;
  mensaje: string;
  tipo: 'exito' | 'info' | 'error';
}
```

TypeScript garantizará que cada notificación creada contenga un ID único
un mensaje descriptivo y un tipo estrictamente delimitado a 'exito', 'info' o 'error'.


#### 2. Servicio (NotificacionesService)

Aplicando exactamente la estructura que diseñamos
este servicio administra el arreglo de notificaciones en un Signal privado
expone una versión de solo lectura (asReadonly())
Incluimos un temporizador setTimeout de 4 segundos para que se borren solas automáticamente si el usuario no las cierra a mano

```
import { Injectable, signal } from '@angular/core';
import { Notificacion } from './notificacion.model';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  // 1. Estado Privado (Signal mutable)
  private listaNotificacionesSignal = signal<Notificacion[]>([]);

  // 2. Estado Público (Signal de solo lectura para componentes)
  notificaciones = this.listaNotificacionesSignal.asReadonly();

  // 3. Crear y agregar notificación
  mostrarNotificacion(mensaje: string, tipo: 'exito' | 'info' | 'error' = 'info') {
    const id = crypto.randomUUID();
    const nuevaNotificacion: Notificacion = { id, mensaje, tipo };

    // Agregamos al arreglo existente
    this.listaNotificacionesSignal.update(lista => [...lista, nuevaNotificacion]);

    // Auto-eliminación después de 4 segundos
    setTimeout(() => {
      this.eliminarNotificacion(id);
    }, 4000);
  }

  // 4. Eliminar notificación por ID
  eliminarNotificacion(id: string) {
    this.listaNotificacionesSignal.update(lista =>
      lista.filter(notif => notif.id !== id)
    );
  }
}
```

Puntos clave:

crypto.randomUUID():
Garantiza un identificador único seguro en el navegador para cada aviso

update() con inmutabilidad:
Usamos [...lista, nuevaNotificacion] para que Angular detecte el cambio de referencia
y notifique inmediatamente a las vistas que estén escuchando

Limpieza limpia: Si el usuario presiona la "X" antes de los 4 segundos, eliminarNotificacion(id) remueve el aviso
cuando el setTimeout se active más tarde, la función .filter() simplemente no encontrará ese id y no romperá nada


#### 3. Integración mediante inject(): triggers y vista

##### !!! Inyección de Servicio a Servicio y en App

Sobre la inyección en el servicio o en app: 
El estándar en arquitecturas profesionales es inyectarlo en ambos
pero asignándoles responsabilidades distintas

1. En ProductosService para la Lógica (Side Effects):
Inyectamos NotificacionesService para disparar las alertas

Así, si mañana creas otro componente (por ejemplo, un buscador o una barra lateral)
que llame a productosService.agregarProducto()
la notificación se mostrará automáticamente sin necesidad de duplicar código en ese nuevo componente


2. En App para la Vista (UI): Inyectamos NotificacionesService
únicamente para exponer el Signal de lectura .notificaciones()
En App para la Vista (UI): Inyectamos NotificacionesService únicamente para exponer el Signal de lectura .notificaciones()


1. productos.service.ts (Dispara los avisos)

Inyectamos el servicio de notificaciones y detonamos los mensajes dentro de las acciones de negocio

```
import { Injectable, signal, computed, inject } from '@angular/core';
import { Producto } from './models/producto.model';
import { NotificacionesService } from './notificaciones.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  // Inyección Servicio a Servicio con inject()
  private notificacionesService = inject(NotificacionesService);

  private listaProductosSignal = signal<Producto[]>([
    { id: '1', nombre: 'Smartphone Pro 5G', precio: 800, esFavorito: false, enCarrito: false },
    { id: '2', nombre: 'Auriculares Inalámbricos', precio: 150, esFavorito: true, enCarrito: true },
    { id: '3', nombre: 'Teclado Mecánico RGB', precio: 120, esFavorito: false, enCarrito: false },
    { id: '4', nombre: 'Monitor Gaming 4K', precio: 450, esFavorito: false, enCarrito: false }
  ]);

  listaProductos = this.listaProductosSignal.asReadonly();

  totalCarrito = computed(() => {
    return this.listaProductosSignal()
      .filter(p => p.enCarrito)
      .reduce((acumulado, p) => acumulado + p.precio, 0);
  });

  cantidadFavoritos = computed(() => {
    return this.listaProductosSignal().filter(p => p.esFavorito).length;
  });

  agregarProducto(nombre: string, precio: number) {
    const nuevoProducto: Producto = {
      id: crypto.randomUUID(),
      nombre,
      precio,
      esFavorito: false,
      enCarrito: false
    };

    this.listaProductosSignal.update(productos => [...productos, nuevoProducto]);

    // 🔔 Disparo de notificación de éxito
    this.notificacionesService.mostrarNotificacion(
      `¡Producto "${nombre}" agregado al catálogo!`, 
      'exito'
    );
  }

  alternarFavorito(id: string) {
    this.listaProductosSignal.update(productos =>
      productos.map(p => p.id === id ? { ...p, esFavorito: !p.esFavorito } : p)
    );
  }

  alternarCarrito(id: string) {
    const producto = this.listaProductosSignal().find(p => p.id === id);
    if (!producto) return;

    const estadoNuevo = !producto.enCarrito;

    this.listaProductosSignal.update(productos =>
      productos.map(p => p.id === id ? { ...p, enCarrito: estadoNuevo } : p)
    );

    // 🔔 Disparo condicional según la acción
    if (estadoNuevo) {
      this.notificacionesService.mostrarNotificacion(
        `¡"${producto.nombre}" agregado al carrito!`, 
        'exito'
      );
    } else {
      this.notificacionesService.mostrarNotificacion(
        `"${producto.nombre}" removido del carrito`, 
        'info'
      );
    }
  }
}
```


2. app.ts
Inyectamos NotificacionesService para que el HTML pueda leer los avisos:

```
import { Component, signal, inject } from '@angular/core';
import { TarjetaProductoComponent } from './tarjeta-producto';
import { ProductosService } from './productos.service';
import { NotificacionesService } from './notificaciones.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TarjetaProductoComponent],
  templateUrl: './app.html'
})
export class App {
  readonly productosService = inject(ProductosService);
  readonly notificacionesService = inject(NotificacionesService);

  nuevoNombre = signal('');
  nuevoPrecio = signal<number | null>(null);

  agregarProducto() {
    const nombreLimpio = this.nuevoNombre().trim();
    const precioValido = this.nuevoPrecio();

    if (!nombreLimpio || precioValido === null || precioValido <= 0) return;

    this.productosService.agregarProducto(nombreLimpio, precioValido);

    this.nuevoNombre.set('');
    this.nuevoPrecio.set(null);
  }
}
```


3. app.html: renderizar avisos 

Agregamos el bloque contenedor arriba del catálogo usando @for:

```
<main class="contenedor">
  <!-- Área Global de Notificaciones (Toasts) -->
  <aside class="contenedor-notificaciones">
    @for (notif of notificacionesService.notificaciones(); track notif.id) {
      <div class="notificacion" [class]="notif.tipo">
        <span>{{ notif.mensaje }}</span>
        <button type="button" (click)="notificacionesService.eliminarNotificacion(notif.id)">❌</button>
      </div>
    }
  </aside>

  <h1>Catálogo de Tecnología 💻</h1>

  <!-- Formulario -->
  <form (submit)="$event.preventDefault(); agregarProducto()">
    <input 
      type="text" 
      #txtNombre
      [value]="nuevoNombre()" 
      (input)="nuevoNombre.set(txtNombre.value)"
      placeholder="Nombre del producto"
    >

    <input 
      type="number" 
      #numPrecio
      [value]="nuevoPrecio() ?? ''" 
      (input)="nuevoPrecio.set(numPrecio.valueAsNumber || null)"
      placeholder="Precio ($)"
    >

    <button type="submit">Agregar Producto</button>
  </form>

  <hr>

  <!-- Métricas -->
  <header class="resumen">
    <p>⭐ Favoritos: <strong>{{ productosService.cantidadFavoritos() }}</strong></p>
    <p>🛒 Total Carrito: <strong>${{ productosService.totalCarrito() }}</strong></p>
  </header>

  <!-- Lista de Productos -->
  <div class="lista-productos">
    @for (item of productosService.listaProductos(); track item.id) {
      <app-tarjeta-producto 
        [producto]="item" 
        (alAlternarFavorito)="productosService.alternarFavorito($event)"
        (alAgregarAlCarrito)="productosService.alternarCarrito($event)"
      />
    } @empty {
      <p class="mensaje-vacio">No hay productos disponibles en el catálogo. 📦</p>
    }
  </div>
</main>
```




# 5. Modulo 5:  Formularios reactivos y de plantilla

El manejo de formularios es vital para capturar datos
validar entradas de usuario en tiempo real y mostrar errores de forma clara

Formas:

Dos formas:

1. Template-driven Forms (Basados en Plantillas)

Enfoque: Directo en el HTML (ngModel).
Importación: FormsModule
Validaciones: Atributos HTML (required, minlength).
Complejidad: sencillos o rápidos.
Testabilidad: dificultad en forma aislada
Uso: puntual / prototipado.


2. Reactive Forms (Formularios Reactivos)

Enfoque: Centrado en TypeScript (FormGroup, FormControl).
Importación: ReactiveFormsModule
Validaciones: Funciones en TypeScript (Validators.required).
Complejidad: Formularios complejos, dinámicos o extensos
Testabilidad: Muy fácil de probar con pruebas unitarias.
Uso: Estándar en la industria (especialmente con Typed Forms).


### Formularios Basados en Plantillas (Template-driven)

##### Usan la sintaxis clásica de enlace de datos bidireccional (two-way data binding) [(ngModel)].

Funcionamiento:
Se importan con FormsModule Cómo funciona
Angular crea internamente la estructuradel formulario
analizando el html

```
<!-- Ejemplo conceptual -->
<input [(ngModel)]="nombre" name="nombre" required #campoNombre="ngModel">

@if (campoNombre.invalid && campoNombre.touched) {
  <span class="error">El nombre es obligatorio</span>
}
```

Ventaja: Muy fácil de implementar para una sola caja de texto o un filtro rápido

Desventaja: La lógica de validación queda esparcida en la plantilla HTML
escalar el formulario se vuelve desordenado.


#### Formularios Reactivos (Reactive Forms)

Enfoque recomendado para la mayoría de proyectos
La estructura y las reglas de validación se definen explícitamente en el archivo TypeScript.

3 piezas fundamentales:

1. `FormControl`:
Representa un campo individual
(almacena su valor actual, si es válido, si fue modificado o tocado por el usuario).

2. `FormGroup`:
Un grupo de FormControl que forma un objeto completo
(por ejemplo, el formulario de un producto o de registro).

3. `Validators`:
Colección de reglas síncronas o asíncronas
(Validators.required, Validators.minLength(3), Validators.email, etc.).


Estándar en Angular Moderno: FormBuilder + inject() + Typed Forms

Desde Angular 14+, todos los Formularios Reactivos son fuertemente tipados (Typed Reactive Forms)
lo que evita errores de capa de datos.

Ej en ts:

```
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mi-formulario',
  standalone: true,
  imports: [ReactiveFormsModule], // 👈 Importamos ReactiveFormsModule
  templateUrl: './mi-formulario.html'
})
export class MiFormularioComponent {
  // 1. Inyectamos FormBuilder con la función inject()
  private fb = inject(FormBuilder);

  // 2. Definimos la estructura y validaciones de forma tipada
  miFormulario = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.required, Validators.min(1)]]
  });

  // 3. Método de envío
  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched(); // Marca todos los campos como "tocados" para mostrar errores
      return;
    }

    const datos = this.miFormulario.getRawValue(); // Retorna el objeto tipado { nombre: string, precio: number }
    console.log('Datos válidos:', datos);
  }
}
```


HTML (mi-formulario.html):

Vinculamos el FormGroup con [formGroup] y cada control con formControlName

```
<form [formGroup]="miFormulario" (ngSubmit)="guardar()">
  <input type="text" formControlName="nombre" placeholder="Nombre">

  <!-- Validación visual -->
  @if (miFormulario.controls.nombre.invalid && miFormulario.controls.nombre.touched) {
    <p class="error">El nombre debe tener al menos 3 caracteres.</p>
  }

  <input type="number" formControlName="precio" placeholder="Precio">

  <button type="submit" [disabled]="miFormulario.invalid">Guardar</button>
</form>
```

Claves para reactive forms:

##### nonNullable: Evita que los valores de los controles se reseteen a null por defecto cuando reseteas el formulario.
##### markAllAsTouched(): Forzamos la visualización de todos los mensajes de error si el usuario intenta enviar un formulario incompleto
##### getRawValue(): Extrae los valores del formulario respetando los tipos de TypeScript.


## Formularios modernos: fundamentos

##### Implica enfocarnos en tres metas: Inyección limpia, Tipado estricto (Typed Forms) y Control preciso de la interfaz


1. Importación Standalone e Inyección Limpia

Ya no registramos ReactiveFormsModule en un NgModule
Se importa directamente en la propiedad imports del componente
e inyectamos la herramienta FormBuilder mediante la función inject().

```
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemplo',
  standalone: true,
  imports: [ReactiveFormsModule], // 👈 Importación directa
  template: `...`
})
export class EjemploComponent {
  // Inyección limpia sin usar el constructor
  private fb = inject(FormBuilder);
}
```


2. Formularios Tipados con nonNullable

Por defecto en Angular, al hacer un .reset(), todos los campos del formulario vuelven a null.
Para evitar lidiar con tipos string | null no deseados en TypeScript, usamos la propiedad nonNullable.

```
// Con nonNullable, TypeScript infiere: { nombre: string, precio: number }
miFormulario = this.fb.nonNullable.group({
  nombre: ['', [Validators.required, Validators.minLength(3)]],
  precio: [0, [Validators.required, Validators.min(1)]]
});
```

Efecto clave: Si ejecutas this.miFormulario.reset(),
los campos no se vuelven null
los campos no se vuelven null


3. 4 Propiedades del Estado de un Campo

Para mostrar mensajes de error en el momento adecuado
(sin molestar al usuario antes de que toque la caja de texto)
evaluamos estas propiedades nativas:

1. `valid / invalid`:
boolean
¿El valor cumple con todas las reglas de Validators?

2. `pristine / dirty`:
boolean
pristine: El usuario no ha modificado el campo.
dirty: El usuario ya escribió algo.

3. `untouched / touched`:
boolean
untouched: El foco no ha entrado/salido.
touched: El usuario entró y salió del input (perdió el foco).

4. `errors`:
ValidationErrors | null
Objeto con los errores activos
`{ required: true, minlength: { requiredLength: 3, actualLength: 1 } }`

```
@if (miFormulario.controls.nombre.invalid && miFormulario.controls.nombre.touched) {
  <span class="error">El nombre es obligatorio y debe tener al menos 3 caracteres.</span>
}
```


4. Métodos de Control Indispensables

procesar o enviar el formulario
estas tres funciones resuelven los escenarios más comunes

```
guardar() {
  // 1. Si el formulario no es válido, forzamos a que todos los campos
  // muestren sus mensajes de error marcándolos como "tocados".
  if (this.miFormulario.invalid) {
    this.miFormulario.markAllAsTouched();
    return;
  }

  // 2. Extrae el objeto JSON con el tipado exacto
  const datos = this.miFormulario.getRawValue();

  // 3. Resetea el formulario a sus valores originales
  this.miFormulario.reset();
}
```

#### !!! Flujo moderno de un formulario: FormBuilder.nonNullable -> Validaciones en TS -> Vincular HTML con [formGroup] -> markAllAsTouched() en Submit

```
FormBuilder.nonNullable -> Validaciones en TS -> Vincular HTML con [formGroup] -> markAllAsTouched() en Submit
```



## Ej formulario

1. Lógica (registro-usuario.component.ts)

Definimos la estructura del formulario en TypeScript
inyectando FormBuilder con inject()
y usando nonNullable para evitar tipos nulos al resetear

```
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [ReactiveFormsModule], // 👈 Requisito indispensable para Reactive Forms
  templateUrl: './registro-usuario.component.html'
})
export class RegistroUsuarioComponent {
  // 1. Inyección de dependencias moderna
  private fb = inject(FormBuilder);

  // 2. Definición del formulario con validaciones y valores no nulos
  formulario = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]]
  });

  // 3. Getter helper: simplifica el acceso a los controles en la plantilla HTML
  get f() {
    return this.formulario.controls;
  }

  // 4. Método de envío
  guardar() {
    if (this.formulario.invalid) {
      // Forzamos a que todos los campos muestren sus errores si están vacíos
      this.formulario.markAllAsTouched();
      return;
    }

    // Extraemos los datos tipados: { nombre: string, email: string }
    const datos = this.formulario.getRawValue();
    console.log('¡Datos válidos listos para enviar!', datos);

    // Resetea automáticamente los campos a sus valores iniciales ('')
    this.formulario.reset();
  }
}
```


2. Vista (registro-usuario.component.html)

Conectamos la plantilla con [formGroup] y evaluamos los errores usando el nuevo flujo de control @if

```
<form [formGroup]="formulario" (ngSubmit)="guardar()">
  
  <!-- Campo Nombre -->
  <div class="campo">
    <label for="nombre">Nombre completo:</label>
    <input 
      id="nombre" 
      type="text" 
      formControlName="nombre" 
      placeholder="Ej. Ana Pérez"
    >

    <!-- Feedback visual de errores -->
    @if (f.nombre.invalid && f.nombre.touched) {
      @if (f.nombre.errors?.['required']) {
        <small class="error">El nombre es obligatorio.</small>
      }
      @if (f.nombre.errors?.['minlength']) {
        <small class="error">El nombre debe tener al menos 3 caracteres.</small>
      }
    }
  </div>

  <!-- Campo Email -->
  <div class="campo">
    <label for="email">Correo Electrónico:</label>
    <input 
      id="email" 
      type="email" 
      formControlName="email" 
      placeholder="correo@ejemplo.com"
    >

    @if (f.email.invalid && f.email.touched) {
      @if (f.email.errors?.['required']) {
        <small class="error">El correo es obligatorio.</small>
      }
      @if (f.email.errors?.['email']) {
        <small class="error">Ingresa un formato de correo válido.</small>
      }
    }
  </div>

  <button type="submit">Registrarse</button>
</form>
```

Clave:

1. get f():
Nos evita tener que escribir formulario.controls.nombre repetidamente en el HTML;
basta con escribir f.nombre

2. f.nombre.errors?.['required']:
Los nombres de los errores en el objeto errors coinciden con el nombre de la regla usada en TypeScript
(required, minlength, email).

3. markAllAsTouched():
Si el usuario no interactúa con ningún campo y da clic directamente en "Registrarse"
esta línea activa las evaluaciones touched de golpe para pintar todos los mensajes de alerta



## Reto modulo 5: formulario

### Requisitos reto

Formulario Profesional de Creación de Productos

##### Actualmente, el formulario de la aplicación valida de forma manual con condicionales genéricos (if (!nombreLimpio...)).
##### objetivo es reemplazar esa lógica manual por un FormGroup estructurado con FormBuilder, Validators y nonNullable


1. Estructura del Formulario (app.ts)
Sustituye los Signals manuales nuevoNombre y nuevoPrecio por un FormGroup creado con fb.nonNullable.group().

Campos y Validaciones:

nombre:
Obligatorio (Validators.required).
Mínimo 3 caracteres (Validators.minLength(3)).

precio:
Obligatorio (Validators.required).
Mayor o igual a $1 (Validators.min(1)).
Máximo $10,000 (Validators.max(10000)).

2. Lógica de Envío (app.ts)
Implementa un getter helper get f() para simplificar el acceso a los controles en la plantilla

método agregarProducto():
Si el formulario es inválido, ejecuta this.formulario.markAllAsTouched()
para desplegar todos los mensajes de error en pantalla y detén la ejecución (return).

Si es válido, extrae los datos con this.formulario.getRawValue(),
llama al método del servicio (this.productosService.agregarProducto(...))
y resetea el formulario con this.formulario.reset().

3. Experiencia de Usuario en la Vista (app.html)

Conecta el formulario con [formGroup] y cada control con formControlName.

Reemplaza las referencias manuales #txtNombre y #numPrecio.

Usa el nuevo flujo de control @if para mostrar mensajes de error cuando el campo sea inválido
y haya sido tocado (f.nombre.invalid && f.nombre.touched):

Mensaje específico si falta el campo obligatorio.
Mensaje específico si no cumple con el mínimo de caracteres o el rango de precio


Tips/hints:
ReactiveFormsModule: Asegúrate de que esté importado en el arreglo imports de @Component en app.ts.
Reseteo limpio: Al usar .nonNullable, cuando ejecutes reset(), el campo precio volverá automáticamente a 0 (o al valor inicial que hayas definido) y nombre a ''.



### Diseño

definir el contrato de datos
reglas de validación antes de tocar el HTML
lógica de envío

#### 1. Estructura en app.ts

`Importaciones Necesarias`:
Necesitamos traer las herramientas de formularios reactivos
agregarlas al arreglo imports del componente standalone

```
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TarjetaProductoComponent, ReactiveFormsModule], // 👈 Importante
  templateUrl: './app.html'
})
```

`Inyección de FormBuilder`:
Utilizamos la función inject() para inyectar la herramienta constructora

```
private fb = inject(FormBuilder);
```

Declaración del FormGroup con nonNullable
Reemplazamos los Signals manuales (nuevoNombre, nuevoPrecio)
por un solo objeto formularioProducto fuertemente tipado:

```
formularioProducto = this.fb.nonNullable.group({
  nombre: ['', [
    Validators.required, 
    Validators.minLength(3)
  ]],
  precio: [0, [
    Validators.required, 
    Validators.min(1), 
    Validators.max(10000)
  ]]
});
```

nonNullable:
Con this.fb.nonNullable
TypeScript infiere el tipo exacto de cada campo como string y number (en lugar de string | null o number | null).
Cuando resetees el formulario después de agregar un producto
nombre volverá automáticamente a '' y precio a 0.

Helper Getter
mantener el HTML limpio y no repetir formularioProducto.controls.nombre múltiples veces
agregamos un accesador directo

```
get f() {
  return this.formularioProducto.controls;
}
```

Visualización app.ts

```
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TarjetaProductoComponent } from './tarjeta-producto';
import { ProductosService } from './productos.service';
import { NotificacionesService } from './notificaciones.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TarjetaProductoComponent, ReactiveFormsModule],
  templateUrl: './app.html'
})
export class App {
  readonly productosService = inject(ProductosService);
  readonly notificacionesService = inject(NotificacionesService);
  private fb = inject(FormBuilder);

  // Formulario reactivo tipado
  formularioProducto = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.required, Validators.min(1), Validators.max(10000)]]
  });

  // Getter helper para simplificar el acceso en el HTML
  get f() {
    return this.formularioProducto.controls;
  }

  // (Pendiente: Lógica del método agregarProducto)
}
```


#### 2. Diseño del Método agregarProducto()

El flujo de ejecución sigue un orden estricto de 3 pasos:

```
[1. ¿Es inválido?] ──Sí──> [markAllAsTouched() + return]
       │
      No
       ▼
[2. getRawValue()] ────> [productosService.agregarProducto(nombre, precio)]
       │
       ▼
[3. reset()] ──────────> [Formulario limpio y listo para el siguiente producto]
```

Breakdown del Código en app.ts

```
// En app.ts:

agregarProducto() {
  // 1. Verificación de Validez y Feedback Visual
  if (this.formularioProducto.invalid) {
    // Marca todos los controles como 'touched' para que los mensajes de error
    // aparezcan en la pantalla aunque el usuario no haya interactuado con los inputs.
    this.formularioProducto.markAllAsTouched();
    return;
  }

  // 2. Extracción de Datos Tipados
  // getRawValue() nos da un objeto fuertemente tipado: { nombre: string, precio: number }
  const { nombre, precio } = this.formularioProducto.getRawValue();

  // 3. Delegación al Servicio de Negocio
  this.productosService.agregarProducto(nombre, precio);

  // 4. Limpieza del Formulario
  // Gracias a nonNullable, nombre vuelve a '' y precio a 0 (sus valores iniciales).
  this.formularioProducto.reset();
}
```

Son fundamentales:

markAllAsTouched(): Evita que un usuario envíe el formulario totalmente en blanco sin saber qué falló
Al activarlo, de inmediato la interfaz se tiñe con los avisos correspondientes
("El nombre es obligatorio", "El precio debe ser mayor a 0", etc.).

getRawValue(): A diferencia de .value (que puede devolver campos omitidos o deshabilitados como undefined),
getRawValue() siempre retorna la estructura completa del objeto con sus tipos exactos en TypeScript.

reset() con nonNullable: No destruye los tipos a null
Deja el formulario en un estado limpio e impecable para registrar un nuevo producto


#### 3. Diseño de la Vista (app.html)


1. Cambios Principales en el Formulario

(ngSubmit)="agregarProducto()": Sustituye a
(submit)="$event.preventDefault(); ...".

ngSubmit se encarga de prevenir el comportamiento por defecto de recargar la página.

[formGroup]="formularioProducto": Vincula la etiqueta <form> con el objeto FormGroup que creamos en app.ts.

formControlName="nombre" y formControlName="precio": Enlazan directamente las cajas de texto con sus respectivos controles y validadores

```
<main class="contenedor">
  <!-- Área Global de Notificaciones (Toasts) -->
  <aside class="contenedor-notificaciones">
    @for (notif of notificacionesService.notificaciones(); track notif.id) {
      <div class="notificacion" [class]="notif.tipo">
        <span>{{ notif.mensaje }}</span>
        <button type="button" (click)="notificacionesService.eliminarNotificacion(notif.id)">❌</button>
      </div>
    }
  </aside>

  <h1>Catálogo de Tecnología 💻</h1>

  <!-- Formulario Reactivo -->
  <form [formGroup]="formularioProducto" (ngSubmit)="agregarProducto()">
    
    <!-- Campo Nombre -->
    <div class="campo-formulario">
      <input 
        type="text" 
        formControlName="nombre"
        placeholder="Nombre del producto"
      >

      <!-- Feedback visual con el flujo de control @if -->
      @if (f.nombre.invalid && f.nombre.touched) {
        <div class="mensajes-error">
          @if (f.nombre.errors?.['required']) {
            <small class="error">El nombre del producto es obligatorio.</small>
          }
          @if (f.nombre.errors?.['minlength']) {
            <small class="error">El nombre debe tener al menos 3 caracteres.</small>
          }
        </div>
      }
    </div>

    <!-- Campo Precio -->
    <div class="campo-formulario">
      <input 
        type="number" 
        formControlName="precio"
        placeholder="Precio ($)"
      >

      @if (f.precio.invalid && f.precio.touched) {
        <div class="mensajes-error">
          @if (f.precio.errors?.['required']) {
            <small class="error">El precio es obligatorio.</small>
          }
          @if (f.precio.errors?.['min']) {
            <small class="error">El precio mínimo debe ser de $1.</small>
          }
          @if (f.precio.errors?.['max']) {
            <small class="error">El precio no puede superar los $10,000.</small>
          }
        </div>
      }
    </div>

    <button type="submit">Agregar Producto</button>
  </form>

  <hr>

  <!-- Métricas -->
  <header class="resumen">
    <p>⭐ Favoritos: <strong>{{ productosService.cantidadFavoritos() }}</strong></p>
    <p>🛒 Total Carrito: <strong>${{ productosService.totalCarrito() }}</strong></p>
  </header>

  <!-- Lista de Productos -->
  <div class="lista-productos">
    @for (item of productosService.listaProductos(); track item.id) {
      <app-tarjeta-producto 
        [producto]="item" 
        (alAlternarFavorito)="productosService.alternarFavorito($event)"
        (alAgregarAlCarrito)="productosService.alternarCarrito($event)"
      />
    } @empty {
      <p class="mensaje-vacio">No hay productos disponibles en el catálogo. 📦</p>
    }
  </div>
</main>
```



# Modulo 6. Routing y Ciclo de Vida

Fundamentales de cualquier Single Page Application (SPA)
##### la navegación entre vistas sin recargar la página (Routing)
##### y el control de la existencia de nuestros componentes en memoria (Ciclo de Vida).

## 1. Enrutamiento Básico (Routing)
Angular moderno (Standalone), ya no usamos AppRoutingModule
El enrutamiento se configura mediante una constante de rutas y la función provideRouter().

1. Arreglo de Rutas (app.routes.ts):
Cada ruta relaciona una URL con un Componente Standalone:

```
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' }, // Ruta por defecto
  { 
    path: 'productos', 
    loadComponent: () => import('./productos.component').then(m => m.ProductosComponent) // Lazy Loading
  },
  { 
    path: 'producto/:id', 
    loadComponent: () => import('./detalle.component').then(m => m.DetalleComponent) 
  },
  { path: '**', redirectTo: 'productos' } // Wildcard (404)
];
```

Lazy Loading:
Usar loadComponent con import() dinámico
##### permite que Angular descargue el código del componente solo cuando el usuario navega a esa URL
optimizando el rendimiento inicial.


2. Suministro global (app.config.ts)
Habilita en la configuración principal con la característica moderna de vinculación de parámetros como Inputs

```
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()) // 👈 Permite recibir parámetros de URL como inputs
  ]
};
```


3. Navegación en el HTML (app.component.html)
Mostrar las vistas y navegar entre ellas utilizamos dos directivas del RouterModule

```
<nav>
  <!-- Enlace de navegación sin recargar la página -->
  <a routerLink="/productos">Catálogo</a>
</nav>

<!-- Hueco donde se renderiza el componente de la ruta activa -->
<router-outlet />
```


4. Recibir Parámetros de URL (Feature Moderno)

Gracias a withComponentInputBinding()
no necesitas inyectar ActivatedRoute para leer el ID de la URL
Puedes recibirlo como un input() normal:

```
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-detalle',
  standalone: true,
  template: `<h2>Viendo producto ID: {{ id() }}</h2>`
})
export class DetalleComponent {
  // Coincide exactamente con el parámetro :id definido en la ruta 'producto/:id'
  id = input.required<string>(); 
}
```


## 2. Lifecycle

Componente pasa por una serie de etapas desde que Angular lo crea, lo renderiza en el DOM
reacciona a sus cambios y finalmente lo destruye cuando el usuario cambia de ruta.

```
[ Inyección / Constructor ]
            │
            ▼
       [ ngOnInit ]  ────> (Inicializaciones y llamadas a API)
            │
            ▼
   [ Signal / Inputs ] ───> (Opcional: effect() ante cambios)
            │
            ▼
      [ ngOnDestroy ] ───> (Limpieza de timers/suscripciones)
```


### Hooks Indispensables

`ngOnInit()`:
se ejecuta: Una vez que Angular ha terminado de inicializar las propiedades de entrada (inputs).
se usa: Cargar datos iniciales desde un servicio, realizar peticiones HTTP o configurar datos iniciales.

`ngOnDestroy()`:
Hay una alternativa moderna: DestroyRef
se ejecuta: Justo antes de que el componente sea removido del DOM (por ejemplo, al cambiar de ruta).
se usa: Evitar fugas de memoria (memory leaks), cancelar temporizadores (clearInterval) o desuscribirse de eventos globales

`effect()`: (Reactividad por Signals)
se ejecuta: Se dispara automáticamente cada vez que un Signal consumido en su interior cambia de valor
se usa: Guardar datos en localStorage, disparar notificaciones o sincronizaciones externas

`afterNextRender() / afterRender()`: Sustitutos modernos de ngAfterViewInit
se ejecuta: Una vez que la plantilla ya se dibujó físicamente en el navegador
se usa: Medir elementos del DOM, integrar librerías externas de gráficos (Canvas, Charts) o enfocar inputs


### Ej en componente

```
import { Component, OnInit, OnDestroy, inject, DestroyRef, effect, signal } from '@angular/core';

@Component({
  selector: 'app-temporizador',
  standalone: true,
  template: `<p>Segundos transcurridos: {{ contador() }}</p>`
})
export class TemporizadorComponent implements OnInit {
  contador = signal(0);
  private destroyRef = inject(DestroyRef); // 👈 Limpieza moderna sin ngOnDestroy

  constructor() {
    // Reacciona a cada cambio del Signal
    effect(() => {
      console.log('El contador cambió a:', this.contador());
    });
  }

  ngOnInit() {
    const timer = setInterval(() => {
      this.contador.update(c => c + 1);
    }, 1000);

    // Registramos la limpieza usando DestroyRef
    this.destroyRef.onDestroy(() => {
      clearInterval(timer);
      console.log('Componente destruido y temporizador limpiado.');
    });
  }
}

```


## Práctica básica Routing moderno

aplicación SPA con 2 vistas principales
(Inicio y Detalle de Producto con parámetro en la URL)
usando Angular Routing moderno con Standalone Components.

navegación entre:

Ruta / (Inicio): Muestra una lista corta de productos con enlaces a su detalle.
Ruta /producto/:id (Detalle): Muestra el producto seleccionado capturando el :id de la URL como una input() signal directa.

1. Definir la tabla de rutas
app.routes.ts

Configuramos las URLs y qué componenteStandalone debe cargar cada una

```
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { 
    path: 'inicio', 
    loadComponent: () => import('./vistas/inicio.component').then(m => m.InicioComponent) 
  },
  { 
    path: 'producto/:id', 
    loadComponent: () => import('./vistas/detalle.component').then(m => m.DetalleComponent) 
  },
  { path: '**', redirectTo: 'inicio' }
];
```


2. Proveer el enrutador en la app
app.config.ts 

Habilitamos la navegación en la configuración global y agregamos withComponentInputBinding()
para inyectar automáticamente los parámetros :id en los componentes

```
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()) // 👈 Permite recibir parámetros como inputs
  ]
};
```


3. vista de Inicio
vistas/inicio.component.ts

Importamos RouterLink para poder navegar mediante atributos HTML sin recargar la página

```
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink], // 👈 Importante para usar [routerLink]
  template: `
    Catálogo Rápido 📦
    
      
        Ver Laptop Gamer (#101)
      
      
        Ver Mouse Inalámbrico (#102)
      
    
  `
})
export class InicioComponent {}
```


4. Crear la vista de Detalle con Parámetro
vistas/detalle.component.ts

Gracias a withComponentInputBinding(), no necesitamos usar ActivatedRoute
Declaramos una propiedad id con input.required() y Angular le asignará el valor de la URL automáticamente

```
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterLink],
  template: `
    
      Detalle del Producto
      🆔 ID extraído de la URL: {{ id() }}
      
      ⬅️ Volver al catálogo
    
  `
})
export class DetalleComponent {
  // Coincide exactamente con el parámetro :id de la ruta 'producto/:id'
  id = input.required(); 
}
```


5. Configurar el Shell Principal
app.ts & app.html

##### !!! El componente raíz solo necesita montar un menú superior
##### y la etiqueta especial `` donde Angular intercambiará las vistas.

app.ts:

```
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html'
})
export class App {}
```

app.html:

```
Mi Tienda SPA 🚀
  
    Inicio

```



### Componente <router-outlet />

Funciona como un marco dinámico: cuando la URL cambia a /inicio
Angular inserta <app-inicio> en ese lugar
cuando cambia a /producto/101, lo reemplaza por <app-detalle>.





## Práctica básica ciclo de vida moderno

Ej: Temporizador de Actividad
ver en la consola el nacimiento, la vida y la muerte (destrucción) de un componente en el Angular moderno

3 pilares actuales:

1. ngOnInit():
Para arrancar tareas de inicio

2. effect():
Para reaccionar dinámicamente a los cambios de Signals.

3. DestroyRef:
El sustituto moderno de ngOnDestroy para la limpieza de memoria


1. Componente con los Hooks del Ciclo de Vida
reloj.component.ts

Disparamos eventos en cada etapa clave de su vida.

```
import { Component, OnInit, signal, effect, inject, DestroyRef } from '@angular/core';

@Component({
  selector: 'app-reloj',
  standalone: true,
  template: `
    <div class="caja-reloj">
      <h3>⏱️ Temporizador Activo</h3>
      <p>Segundos transcurridos: <strong>{{ segundos() }}s</strong></p>
    </div>
  `
})
export class RelojComponent implements OnInit {
  segundos = signal(0);
  private destroyRef = inject(DestroyRef);

  constructor() {
    // Reacciona a los cambios de segundos()
    effect(() => {
      console.log(`🟢 [Effect] Nuevo valor del Signal: ${this.segundos()}s`);
    });
  }

  ngOnInit() {
    console.log('🚀 [ngOnInit] Componente montado en el DOM. Iniciando interval...');

    const intervalId = setInterval(() => {
      this.segundos.update(s => s + 1);
    }, 1000);

    // Limpieza de memoria
    this.destroyRef.onDestroy(() => {
      clearInterval(intervalId);
      console.log('🔴 [DestroyRef] Componente destruido. Temporizador detenido y memoria liberada.');
    });
  }
}
```


2. Montar y Destruir el Componente en el Padre
app.ts

Agregamos un botón para alternar un flag (mostrarReloj) usando @if
Esto creará y destruirá el componente a demanda en el DOM.

```
import { Component, signal } from '@angular/core';
import { RelojComponent } from './reloj.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RelojComponent],
  template: `
    <main style="padding: 1rem;">
      <h2>Práctica de Ciclo de Vida ⏳</h2>

      <!-- Evento click para alternar el valor del Signal -->
      <button (click)="mostrarReloj.set(!mostrarReloj())">
        {{ mostrarReloj() ? 'Destruir Componente ❌' : 'Montar Componente 🟢' }}
      </button>

      <hr>

      <!-- Flujo de control @if / @else -->
      @if (mostrarReloj()) {
        <app-reloj />
      } @else {
        <p><i>El componente no existe en el DOM en este momento.</i></p>
      }
    </main>
  `
})
export class App {
  mostrarReloj = signal(true);
}
```

(click)="mostrarReloj.set(!mostrarReloj())": Permite que el botón invierta el booleano al hacer clic.

<app-reloj />: Es la etiqueta que renderiza el componente hijo cuando @if es verdadero.

imports: [RelojComponent]: Gracias a estar importado, Angular reconoce la etiqueta <app-reloj /> dentro del HTML


Efecto en la consola:

1. cargar la página (Montaje):
[ngOnInit] Componente montado en el DOM. Iniciando interval...
[Effect] Nuevo valor del Signal: 0s
(Cada segundo) 🟢 [Effect] Nuevo valor del Signal: 1s, 2s, 3s...

2. presionar "Destruir Componente" (Desmontaje):
🔴 [DestroyRef] Componente destruido. Temporizador detenido y memoria liberada.
temporizador se detiene en seco en consola y no hay fugas de memoria

3. presionar "Montar Componente" de nuevo:
ciclo renace desde cero con ngOnInit.




### Usos de ciclo de vida


1. Carga e Inicialización (ngOnInit)

punto de entrada estándar una vez que el componente ya fue configurado y sus datos de entrada (inputs) están listos

Cargar datos iniciales desde el backend:
Hacer la primera petición HTTP para llenar una tabla o un catálogo

Ejemplo: Llamar a this.productosService.obtenerProductos() al entrar a la vista.

Suscribirse a eventos de un servicio: Escuchar notificaciones en tiempo real (por ejemplo, WebSockets o eventos globales).

Configurar formularios: Inicializar valores o suscribirse a cambios de control en Reactive Forms.


ngOnInit y no en el constructor
El constructor solo debe usarse para inyectar dependencias (inject()).
En el constructor, los datos que vienen del componente padre aún no han sido pasados
mientras que en ngOnInit ya están 100% disponibles.


2. Reacción a Cambios de Estado (effect)
mecanismo reactivo propio de los Signals
Se ejecuta automáticamente cada vez que alguna de las señales leídas en su interior cambia.

Sincronización con localStorage: Guardar automáticamente el carrito de compras o las preferencias de tema (modo oscuro) cada vez que el Signal del carrito se actualiza.

Logs y Analítica: Disparar un evento de telemetría (Google Analytics / PostHog) cuando el Signal usuarioLogueado() pasa a true.

Disparar búsquedas con debounce: Si un Signal queryBusqueda() cambia, disparar la búsqueda o filtrar listas


3. Limpieza y Liberación de Memoria (DestroyRef)

Se ejecuta justo antes de que el componente sea retirado del DOM (por ejemplo, cuando el usuario cambia de ruta).

Limpieza de Temporizadores: Detener setInterval o setTimeout activos (como en nuestro temporizador).

Remover Event Listeners globales: Si agregaste eventos al objeto window o document (window.addEventListener('resize', ...)), debes removerlos aquí para que no sigan corriendo en segundo plano.

Cancelar llamadas pendientes: Abortar peticiones HTTP o conexiones WebSocket para ahorrar ancho de banda.


4. Manipulación del DOM e Integración (afterNextRender

sustituto moderno para medir o interactuar con elementos cuando el navegador ya ha dibujado el HTML en pantalla (es seguro de usar con Server-Side Rendering).

Integrar librerías externas: Inicializar gráficos de Chart.js, mapas con Leaflet, o animaciones 3D con Three.js sobre un elemento <canvas> que ya existe físicamente en el DOM.

Auto-foco en inputs: Poner el foco del cursor en el primer campo de texto (inputElement.focus()) cuando se abre una ventana modal.

Medición de dimensiones: Leer el ancho o alto real de un contenedor (getBoundingClientRect()) para ajustar un diseño responsivo programáticamente



#### Comparaciones


`Inyectar servicios o helpers`:
constructor / inject()
private http = inject(HttpClient);

`Traer datos de una API al arrancar`:
ngOnInit(),this.cargarCatalogo();

`Reaccionar a cambios de un Signal`:
effect()
Sincronizar carrito con localStorage

`Limpiar memoria al cerrar la vista`:
DestroyRef,clearInterval(timer);

`Manipular el HTML / Integrar Canvas`:
afterNextRender()
new Chart(elem, config);



# Reto Modulo 6. Routing y Ciclo de Vida





# Prácticas/reto modulo basico completo













# Angular Intermedio


7. Peticiones HTTP y Manejo de APIs con HttpClient

Configuración moderna con provideHttpClient(withFetch()).

Consumo de servicios RESTful y tipado estricto de respuestas

Interceptores basados en funciones (HttpInterceptorFn) para manejo de tokens (JWT) y captura global de errores.

Nueva API de asincronía: uso de rxResource() / resource() para enlazar APIs directamente con Signals.


8. Reactividad Avanzada (Signals + RxJS Interop)

Derivación de estado avanzada con computed() y efectos secundarios controlados con effect().

Puente entre ambos mundos con @angular/core/rxjs-interop: toSignal() y toObservable().

Cuándo usar Signals (estado síncrono/UI) y cuándo conservar RxJS (eventos asíncronos complejos, cancelaciones, debouncing).


9. Protección de Rutas y Navegación Avanzada (Guards & Resolvers)

Guards funcionales modernos (canActivateFn, canDeactivateFn).

Protección de rutas por roles o autenticación.

Resolutores de datos (resolveFn) para precargar información antes de pintar la pantalla.

Prevención de pérdida de datos en formularios no guardados.



# 7. Peticiones HTTP y Manejo de APIs con HttpClient


## Fundamentos

1. Configuración Global (provideHttpClient)

Ya no se utiliza el antiguo HttpClientModule
##### una aplicación Standalone, el servicio HTTP se habilita globalmente dentro de app.config.ts
mediante la función provideHttpClient().

```
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // withFetch() hace que Angular use la API Fetch nativa del navegador en lugar de XMLHttpRequest
    provideHttpClient(withFetch()) 
  ]
};
```

withFetch():
Mejora el rendimiento, habilita un mejor soporte para Server-Side Rendering (SSR)
aprovecha las características modernas de red de los navegadores actuales.


2. Peticiones Tipadas en Servicios (HttpClient + inject)

Las llamadas HTTP siempre deben estar aisladas dentro de Servicios
Inyectamos HttpClient mediante inject() y tipamos las respuestas utilizando interfaces de TypeScript.

```
// productos.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

@Injectable({ providedIn: 'root' })
export class ProductosService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.ejemplo.com/productos';

  // GET: Obtener lista
  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  // POST: Crear registro
  crearProducto(producto: Omit<Producto, 'id'>): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }
}
```


3. Integración con Signals (toSignal)

Aunque HttpClient retorna Observables de RxJS
en el componente podemos transformar esa respuesta asíncrona directamente a un Signal
utilizando la función toSignal() de @angular/core/rxjs-interop.

```
// catalogo.component.ts
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  template: `
    <h2>Lista de Productos de la API 🌐</h2>
    <ul>
      @for (p of productos(); track p.id) {
        <li>{{ p.nombre }} - ${{ p.precio }}</li>
      } @empty {
        <p>Cargando o no hay productos...</p>
      }
    </ul>
  `
})
export class CatalogoComponent {
  private productosService = inject(ProductosService);

  // Convierte el Observable del servicio en un Signal listo para la plantilla
  productos = toSignal(this.productosService.obtenerProductos(), { initialValue: [] });
}
```


4. Interceptores Funcionales (HttpInterceptorFn)

Permiten interceptar, modificar o auditar las peticiones salientes (ej. adjuntar un token JWT)
o las respuestas entrantes (ej. manejar errores 401/500 de forma global).

```
// auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = 'MI_TOKEN_JWT_SECRET';

  // Clonamos la petición para agregar los encabezados de autenticación
  const reqAutenticada = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(reqAutenticada);
};
```

registra directamente en el provideHttpClient de app.config.ts:

```
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withFetch(),
      withInterceptors([authInterceptor]) // 👈 Interceptor registrado
    )
  ]
};
```


Flujo de Datos HTTP:

1. app.config.ts: Habilita HttpClient y registra interceptores globales.

2. Servicio: Realiza peticiones REST (get, post, put, delete) retornando Observable<T>.

3. Componente: Consume el servicio y usa toSignal() para conectar la respuesta con la UI basada en Signals.




## Configuración moderna con provideHttpClient(withFetch()).


## Consumo de servicios RESTful y tipado estricto de respuestas


## Interceptores basados en funciones (HttpInterceptorFn) para manejo de tokens (JWT) y captura global de errores.


## Nueva API de asincronía: uso de rxResource() / resource() para enlazar APIs directamente con Signals.




# Herramientas calidad código


1. Análisis Estático y Formateo (Linting & Formatting)

@angular-eslint: El estándar de facto que reemplazó a TSLint.
Revisa el código TypeScript y las plantillas HTML
Detecta selectores mal nombrados, desuscripciones faltantes, malas prácticas con Signals o falta de accesibilidad (a11y).

`ng add @angular-eslint/schematics`

Prettier: Formateador de código

Garantiza un estilo visual uniforme (sangrías, comillas, saltos de línea).
Se integra con ESLint mediante eslint-config-prettier para evitar conflictos entre reglas.


2. Testing Unitario y E2E

Vitest: El ejecutor de pruebas unitarias ultrarrápido y moderno
Angular ha ido reemplazando a Karma (obsoleto).
Vitest ejecuta las pruebas en milisegundos gracias al empaquetador Vite
no requiere levantar un navegador pesado para cada test.

Testing Library (@testing-library/angular):
incentiva a probar los componentes desde el punto de vista del usuario
(interacción con el DOM) y no según la implementación interna

Playwright: La mejor opción actual para pruebas End-to-End (E2E).
Creado por Microsoft, es liviano, rápido y mucho más estable que Protractor (deprecado) o Selenium
Ejecuta pruebas sobre Chromium, Firefox y WebKit en paralelo


3. Validación Arquitectura y Reglas de Capas

Sheriff: Una herramienta excelente si aplicas Clean Architecture, Domain-Driven Design (DDD) o Atomic Design.
Verifica en tiempo de compilación/linting que las capas de tu proyecto no violen las reglas de dependencia
(por ejemplo: impide que un servicio del dominio importe código de la capa de presentación/UI).

Nx / @nx/angular:

Ideal si trabajas con proyectos grandes o arquitectura de microfrontends.
Ofrece module boundaries, almacenamiento en caché de compilación y visualización del grafo de dependencias


4. Automatización en Git (Git Hooks)

Husky + lint-staged:
Ejecuta scripts automáticamente antes de permitir un git commit.

Flujo típico: Al hacer commit, lint-staged pasa ESLint y Prettier solo a los archivos modificados.
Si detecta un error o una regla rota, frena el commit impidiendo subir código "sucio".
    




# Requisitos funcionales


## Utiles

##### Plantear los requisitos funcionales de forma profesional es, literalmente, el 50% de la solución
##### Si los requisitos están mal definidos, el código reflejará esa confusión

No vemos los requisitos como una simple lista de cosas que el software "debe hacer".
##### Los planteamos como un puente directo entre la necesidad del usuario y la arquitectura del código.


### !!! Transformar una idea abstracta en requisitos técnicos accionables:

1. Enfoque Centrado en el Comportamiento (Historias de Usuario)
##### defino el comportamiento desde la perspectiva de quien usará la aplicación

clásica de las User Stories

Como [tipo de usuario],
quiero [realizar una acción]
para [obtener un beneficio].

Ejemplo malo: "El sistema debe tener un botón de borrado."
(Esto es una solución de interfaz, no un requisito funcional).

profesional: "Como usuario organizado, quiero eliminar tareas completadas
para mantener mi lista enfocada solo en lo pendiente."


2. Trinidad del Software: Datos, Estado y Acciones
Una vez que sé qué quiere el usuario

##### desgloso el problema en tres pilares que se traducen directamente a código
(especialmente útiles en frameworks reactivos como Angular):

A. Modelo de Datos: Qué información manejamos?
##### Determina las entidades del dominio y sus reglas

En TypeScript, esto se convierte inmediatamente en tus interfaces o types.

Ej. Requisito: La tarea debe tener un identificador, una descripción, un nivel de urgencia y saber si está resuelta o no


B. Estado: fotografía de la app en este momento
##### Conjuntos de datos determinan lo que el usuario ve en pantalla.

Ej. Requisito: La aplicación debe conocer la lista total de tareas y el texto que el usuario está escribiendo actualmente. 


C. Acciones / Eventos: Cómo cambia el Estado?
##### Mutaciones permitidas
##### Cada acción suele convertirse en un método dentro de tu componente o servicio

Ej. Requisito: El usuario puede agregar, eliminar o conmutar el estado de una tarea


3. Criterios de Aceptación: Given-When-Then

##### Para que un requisito sea útil, debe ser medible
Cómo sabe el desarrollador (o el equipo de QA)
que la tarea está realmente terminada?
##### Usamos el formato BDD (Behavior-Driven Development):

##### 1. Dado que (Given): El contexto inicial.
##### 2. Cuando (When): La acción que ejecuta el usuario.
##### 3. Entonces (Then): El resultado esperado.

Ejemplo aplicado a nuestro reto:

Dado que tengo una tarea llamada "Estudiar Angular" marcada como pendiente,
Cuando hago clic en su checkbox de completado,
Entonces el contador de tareas pendientes debe restar 1 y el texto de la tarea debe mostrarse tachado visualmente.
    

Beneficios del método:

1. Evita la parálisis por análisis: Al separar Datos, Estado y Acciones, el código casi se escribe solo
Ya sabes qué variables crear y qué métodos necesitas implementar.

2. Facilita el testing: Un criterio de aceptación escrito en formato Given-When-Then
es, literalmente, la estructura de una prueba unitaria con Pytest, Jest o el testing bed de Angular

3. Mantiene el código limpio: Te impide mezclar responsabilidades (manteniendo principios como SOLID)
porque sabes exactamente qué parte del código debe manejar cada transición de estado



## Diseño de solución para los requisitos

##### Regla: La vista (HTML) es un esclavo del estado (TypeScript), y y el estado es un esclavo del modelo de datos
##### El diseño limpio se hace de adentro hacia afuera, desde los datos puros hacia la interfaz de usuario


1. Definir 'Contrato': Modelo de Datos

##### Lo primero es crear las reglas del juego
##### En TypeScript, esto significa definir la estructura exacta de nuestros datos usando una interface
Esto nos dará autocompletado inteligente y evitará que cometamos errores de tipeo más adelante

Creamos un archivo separado (por ejemplo, tarea.model.ts) o lo definimos arriba de nuestro componente:

```
export interface Tarea {
  id: string; // Usar string (como un UUID o Timestamp) suele ser más seguro que números secuenciales
  nombre: string;
  prioridad: 'Alta' | 'Media' | 'Baja'; // Tipado estricto, no un string genérico
  completada: boolean;
}
```


2. Diseñar el Estado de la Caja: Las propiedades

##### Qué memoria a corto plazo necesita este componente para funcionar?
##### Necesitamos dos tipos de estado:

##### 1. Estado de Dominio: La lista de tareas que se va a renderizar
##### 2. Estado de la UI / Formulario: Lo que el usuario está interactuando o escribiendo en este preciso instante

En el archivo app.component.ts, las declaro como propiedades de la clase:

```
// Estado de Dominio
listaTareas: Tarea[] = [];

// Estado de la UI (para el Two-Way Binding del formulario)
nuevoNombre: string = '';
nuevaPrioridad: 'Alta' | 'Media' | 'Baja' = 'Media';
```

3. Escribir las Mutaciones del Estado: Los Métodos

##### Implementamos la lógica pura
En este punto, no me importa cómo se ve el botón en HTML
##### Solo me importa que la función reciba los datos correctos y altere el estado de forma limpia e inmutable

##### Diseño los métodos aplicando buenas prácticas
(como no mutar arrays directamente si es posible, aunque en Angular básico usar .push() o .filter() es perfectamente válido):

```
agregarTarea(): void {
  if (!this.nuevoNombre.trim()) return; // Cláusula de guarda para evitar textos vacíos

  const nueva: Tarea = {
    id: Date.now().toString(), // Generamos un ID único rápido
    nombre: this.nuevoNombre.trim(),
    prioridad: this.nuevaPrioridad,
    completada: false
  };

  this.listaTareas.push(nueva);
  this.nuevoNombre = ''; // Limpiamos el formulario
}

eliminarTarea(id: string): void {
  this.listaTareas = this.listaTareas.filter(tarea => tarea.id !== id);
}

alternarTarea(id: string): void {
  const tarea = this.listaTareas.find(t => t.id === id);
  if (tarea) {
    tarea.completada = !tarea.completada;
  }
}
```


4. Cableado/Binding: Plantilla HTML

Con la lógica blindada y testeada en TypeScript
el HTML se convierte en un simple ejercicio de conectar cables (binding).

El `<input>` se conecta a `nuevoNombre` con `[(ngModel)]`.
El botón de agregar dispara `(click)="agregarTarea()"`.
El bloque `@for` recorre `listaTareas` y usa `track tarea.id`.
El botón de eliminar de cada fila dispara `(click)="eliminarTarea(tarea.id)"`.




# Diseño de código por partes 

## 1. Reto: Gestor de Tareas con Prioridades (Task Tracker).

reúne absolutamente todo lo que hemos visto:
`interpolación`, `property binding`, `event binding`
`two-way binding` y el nuevo control de flujo `@if y @for`.



### 1. Estructura/entidad

Estructura de una Tarea:
Cada tarea debe ser un objeto con las siguientes propiedades

id: un número o string único.
nombre: string.
prioridad: string ('Alta', 'Media' o 'Baja').
completada: booleano.


#### Diseño

Para que nuestro Gestor de Tareas funcione de forma óptima y profesional
cada tarea individual debe poseer cuatro atributos fundamentales:

`Identidad Única`: en el mundo real, puedes tener dos tareas que se llamen exactamente igual
(por ejemplo: "Comprar leche" hoy y "Comprar leche" la semana que viene).
Para que la computadora (y Angular) no se confunda al editarlas o borrarlas
##### cada tarea necesita un identificador único e irrepetible
##### Angular usará este identificador para saber exactamente qué elemento del DOM actualizar en el bucle @for.

`Descripción Textual` (El cuerpo):
Es el texto puro que describe la acción que el usuario debe realizar
##### cadena de caracteres (texto) que idealmente tendrá restricciones en el futuro (como no permitir que esté vacía).

`Clasificación de Urgencia` (La Prioridad):
##### Aquí es donde aplicamos tipado estricto a nivel conceptual
Si dejamos que la prioridad sea un texto libre
un usuario podría escribir "Alta", otro "alta" (en minúsculas), y otro "para ayer".
##### Para evitar este caos, la prioridad debe ser un conjunto cerrado de opciones predefinidas
(en este caso: tres niveles fijos).
Esto nos facilitará después el poder aplicar colores diferentes en la interfaz según el nivel

`Estado Binario` (¿Hecho o Pendiente?):
Necesitamos un interruptor (un sí o un no) que guarde la condición actual de la tarea
Este atributo es crucial porque servirá de "gatillo" para la interfaz: si está en "sí"
el HTML sabrá que debe aplicar un estilo visual de completado (como tachar el texto);
si está en "no", se mostrará normal.


#### Código

##### En un entorno profesional, la mejor práctica es separar los modelos e interfaces de los componentes
para que puedan ser reutilizados en cualquier parte de la aplicación

Crear archivo específico
Dentro de tu carpeta src/app
puedes crear una carpeta llamada models/ o interfaces/
o simplemente crearlo en la raíz de app/.

llamarlo tarea.model.ts

```
export interface Tarea {
  id: string;
  nombre: string;
  prioridad: 'Alta' | 'Media' | 'Baja';
  completada: boolean;
}
```

export: Esta palabra clave es fundamental
Permite que esta interfaz pueda ser importada desde tu app.component.ts
o cualquier otro servicio futuro usando un import { Tarea } from './...'.

id: string: Elegimos string porque en el siguiente paso utilizaremos funciones nativas de tiempo o generadores para crear IDs únicos alfanuméricos
lo cual es más robusto que un simple número incremental.

prioridad: 'Alta' | 'Media' | 'Baja': Esto en TypeScript se conoce como un Tipo de Unión Literal (Literal Union Type).
No es un string genérico
Esto obliga al compilador a lanzar un error si intentas asignar un valor como "Urgente" o "baja" (en minúscula).
El código solo compilará si el valor es exactamente una de esas tres opciones



### 2. Formulario de Alta (Two-Way Binding):

Un campo de texto para el nombre de la tarea.
Un menú desplegable (<select>) para elegir la prioridad (Alta, Media, Baja).
Un botón para añadir la tarea a la lista.


#### Diseño

Cómo opera el Enlace Bidireccional (Two-Way Data Binding) en un formulario
##### Es clave para evitar estados inconsistentes entre lo que ve el usuario y lo que procesa la lógica

En el desarrollo web tradicional, para leer un formulario tenías que esperar a que el usuario hiciera clic en "Enviar"
y luego ir a buscar los elementos al DOM (con métodos tipo getElementById).

##### En Angular, con el enfoque reactivo y bidireccional, el componente y la vista están sincronizados en tiempo real.

Diseño:
##### Para que estos tres elementos de la interfaz interactúen con nuestra estructura de Tarea
##### necesitamos diseñar su comportamiento en la memoria a corto plazo del componente (el estado de la UI).


1. Campo de Texto (Nombre de la tarea)

Comportamiento:
##### Este campo necesita una variable "espejo" en el componente
Cada vez que el usuario presiona una tecla en el cuadro de texto, esa variable se actualiza inmediatamente con el nuevo string
esa variable se actualiza inmediatamente con el nuevo string.

Flujo bidireccional:
Si el usuario escribe "Estudiar TypeScript", la variable pasa a valer "Estudiar TypeScript".
Al mismo tiempo, si por algún motivo la lógica del componente decide limpiar esa variable (dejándola vacía '')
el cuadro de texto en la pantalla se vaciará al instante automáticamente.


2. Menú Desplegable (Selección de Prioridad)

Comportamiento:
A diferencia del campo de texto libre, este control restringe las opciones del usuario
##### El elemento <select> debe estar vinculado a una variable que acepte únicamente los tres valores
que definimos en nuestro modelo ('Alta', 'Media', o 'Baja').

Estado inicial:
##### El formulario no debería arrancar con este campo en blanco o indefinido
##### Diseñamos el estado para que tenga un valor por defecto (por ejemplo, 'Media').
Así, al cargar la página, el menú desplegable ya mostrará esa opción seleccionada de forma natural
Al cambiar la opción a 'Alta', la variable interna cambia inmediatamente a ese valor literal


3. Botón de Añadir (Disparador)

Comportamiento:
El botón no almacena datos, por lo que no requiere un enlace bidireccional
##### Su única función es ser un escuchador de eventos.

mecánica clic: 
Cuando se presiona, actúa como un "recaudador".
##### Toma la fotografía actual de la variable del nombre y de la variable de la prioridad
verifica que el nombre no sea solo espacios en blanco y ejecuta la orden de empaquetar
esos datos junto con un ID y el estado de completada en false.

ciclo de limpieza:
Inmediatamente después de añadir la tarea a la lista principal
##### el botón da la orden de restablecer las variables "espejo" del formulario a sus valores iniciales
(nombre vacío y prioridad por defecto)
preparando la interfaz para la siguiente entrada del usuario sin necesidad de recargar la página



#### Código

Utilizaremos el archivo de lógica (.ts) y el archivo de plantilla (.html) de tu componente principal

1. Lógica: Preparando el Estado (app.component.ts)

archivo src/app/app.component.ts
##### daremos de alta las variables del formulario y el método que escuchará el botón

Importante: Como estamos en arquitectura Standalone, para poder usar enlaces bidireccionales ([(ngModel)])
tenemos que importar obligatoriamente el módulo FormsModule de Angular en el array de imports.

```
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- 1. Importación vital

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule], // <-- 2. Registro obligatorio en el componente
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // 3. Variables espejo para el formulario (Two-Way Binding)
  nuevoNombre: string = '';
  nuevaPrioridad: 'Alta' | 'Media' | 'Baja' = 'Media'; // 'Media' como valor inicial

  // 4. El método disparador (Acción)
  agregarTarea(): void {
    // Validación preventiva (cláusula de guarda)
    if (this.nuevoNombre.trim() === '') {
      alert('Por favor, escribe un nombre para la tarea.');
      return;
    }

    // Por ahora, imprimimos en consola para verificar que el cableado funciona
    console.log('¡Formulario capturado con éxito!');
    console.log('Tarea:', this.nuevoNombre);
    console.log('Prioridad:', this.nuevaPrioridad);

    // 5. Ciclo de limpieza del formulario
    this.nuevoNombre = '';
    this.nuevaPrioridad = 'Media';
  }
}
```


2. Vista: Cableado
app.component.html

archivo src/app/app.component.html
Borra lo que tengas y añade la estructura del formulario utilizando la sintaxis de la "banana en la caja" [()]
para enlazar los controles nativos de HTML con tus variables de TypeScript.

```
<div style="max-width: 450px; margin: 30px auto; font-family: sans-serif;">
  
  <h2 style="color: #333;">Gestor de Tareas</h2>

  <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; border: 1px solid #e0e0e0; display: flex; flex-direction: column; gap: 15px;">
    
    <div>
      <label style="display: block; font-weight: bold; margin-bottom: 5px;">Nombre de la tarea:</label>
      <input 
        type="text" 
        [(ngModel)]="nuevoNombre" 
        placeholder="Ej. Estudiar para el examen de Angular"
        style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;"
      >
    </div>

    <div>
      <label style="display: block; font-weight: bold; margin-bottom: 5px;">Prioridad:</label>
      <select 
        [(ngModel)]="nuevaPrioridad"
        style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; background: white;"
      >
        <option value="Alta">Alta 🔴</option>
        <option value="Media">Media 🟡</option>
        <option value="Baja">Baja 🟢</option>
      </select>
    </div>

    <button 
      (click)="agregarTarea()"
      style="width: 100%; padding: 10px; background-color: #dd0031; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;"
    >
      Añadir Tarea
    </button>

  </div>

  <div style="margin-top: 15px; font-size: 12px; color: #666; background: #eee; padding: 10px; border-radius: 4px;">
    <strong>Estado interno en vivo:</strong><br>
    Nombre: "{{ nuevoNombre }}" | Prioridad: "{{ nuevaPrioridad }}"
  </div>

</div>
```

Verificar:

Guarda los cambios. El servidor de desarrollo se recargará solo.
Abre la consola de desarrollador en tu navegador (F12 -> pestaña Console).
Escribe algo en el input, cambia la prioridad y observa el bloque gris de abajo; verás cómo cambia en tiempo real sin retrasos.
Presiona el botón "Añadir Tarea". En la consola aparecerán los datos capturados y el formulario se reseteará automáticamente a sus valores limpios



### 3. Renderizado de la Lista (Control de Flujo):

Muestra la lista de tareas usando @for.
Si no hay tareas, muestra el mensaje: "No hay tareas pendientes. ¡Buen trabajo!" usando el bloque @empty


#### Diseño

##### Cómo Angular renderiza colecciones dinámicas es uno de los puntos más Fuertes del framework
desde la introducción de su nuevo motor de renderizado.

##### Pasar de tener variables sueltas en un formulario a pintar una lista viva de elementos requiere entender cómo el framework observa los cambios
##### en las estructuras de datos complejas (como los arreglos de objetos).

Renderizado de Listas:

Para que la lista de tareas se dibuje y actualice de forma óptima en la pantalla
el diseño se apoya en tres engranajes conceptuales

1. Fuente de la Verdad (El Arreglo)
Conceptualmente, la interfaz no mira los elementos individuales
##### mira un contenedor principal (un arreglo o lista).
Este contenedor almacena las estructuras de tareas que definimos en el primer paso
Si el contenedor tiene cinco tareas, la interfaz reaccionará dibujando cinco elementos
Si está vacío, reaccionará en consecuencia.

2. Iteración Declarativa con Rastreo Único
En lugar de escribir lógica imperativa (como un bucle tradicional que inserte nodos en el HTML manualmente)
le indicamos a la plantilla la plantilla base de una sola tarea y le pedimos que la repita para cada elemento del contenedor

##### entra en juego el concepto fundamental del Rastreo (Tracking):

Al iterar, le exigimos a la plantilla que use el ID único de cada tarea como su huella dactilar

vital para el rendimiento:
Si el usuario añade una nueva tarea o elimina una existente
Angular no destruye ni vuelve a dibujar toda la lista en la pantalla
##### Gracias al ID único, detecta exactamente qué elemento cambió
mutando únicamente ese nodo del DOM real.
El resto de la lista permanece intacto

3. Estado de Respaldo Integrado (Fallback)
Una buena experiencia de usuario (UX) dicta que una pantalla nunca debe quedar completamente en blanco sin explicación si no hay datos
El diseño contempla un mecanismo de bifurcación automática:

El motor de renderizado evalúa constantemente la cantidad de elementos en el contenedor

Escenario A (Con elementos):
Se ignora el mensaje de respaldo y se proyectan las tareas de forma secuencial

Escenario B (Cero elementos):
En el mismo instante en que la lista se queda vacía, el motor intercepta el flujo, oculta cualquier estructura residual
y despliega directamente el mensaje informativo: "No hay tareas pendientes. ¡Buen trabajo!".


##### Este enfoque estructural asegura que el renderizado sea reactivo
##### sumamente eficiente en el uso de memoria y muy fácil de mantener
##### la plantilla se adapta automáticamente a la cantidad de elementos en el estado.



#### Código

##### actualizar tu lógica para que guarde las tareas en un arreglo real
##### luego las pintaremos en el HTML usando @for y @empty.

1. Actualizando la Lógica (app.component.ts)

necesitamos asegurarnos de que el componente tenga un arreglo para almacenar las tareas
tareas y que el método agregarTarea inserte el objeto real en ese arreglo.

Abre src/app/app.component.ts

```
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from './tarea.model'; // Importamos la interfaz que creamos en el paso 1

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Variables del formulario
  nuevoNombre: string = '';
  nuevaPrioridad: 'Alta' | 'Media' | 'Baja' = 'Media';

  // Arreglo principal que sostendrá el estado de las tareas
  // Dejamos una tarea inicial por defecto para probar el renderizado de inmediato
  listaTareas: Tarea[] = [
    { id: '1', nombre: 'Aprender la arquitectura de Angular', prioridad: 'Alta', completada: false }
  ];

  agregarTarea(): void {
    if (this.nuevoNombre.trim() === '') {
      alert('Por favor, escribe un nombre para la tarea.');
      return;
    }

    // Creamos el nuevo objeto de tipo Tarea
    const nuevaTarea: Tarea = {
      id: Date.now().toString(), // ID único basado en el timestamp actual
      nombre: this.nuevoNombre.trim(),
      prioridad: this.nuevaPrioridad,
      completada: false
    };

    // Agregamos la tarea al arreglo principal
    this.listaTareas.push(nuevaTarea);

    // Limpiamos el formulario
    this.nuevoNombre = '';
    this.nuevaPrioridad = 'Media';
  }
}
```


2. Implementando el Control de Flujo (app.component.html)

iremos a la plantilla para renderizar la lista justo debajo de nuestro formulario
donde usamos la potente sintaxis nativa de Angular

src/app/app.component.html

```
<div style="margin-top: 30px;">
    <h3 style="color: #333; border-bottom: 20px;">Tareas Actuales</h3>

    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px;">
      
      @for (tarea of listaTareas; track tarea.id) {
        <li style="padding: 12px; background: #fff; border: 1px solid #e0e0e0; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
          
          <div>
            <span style="font-weight: 500; color: #333;">{{ tarea.nombre }}</span>
            
            <span style="margin-left: 10px; font-size: 11px; padding: 3px 8px; border-radius: 12px; font-weight: bold; background: #eee;">
              {{ tarea.prioridad }}
            </span>
          </div>

        </li>
      } @empty {
        <p style="text-align: center; color: #15803d; font-style: italic; background: #f0fdf4; padding: 15px; border: 1px dashed #bbf7d0; border-radius: 6px; margin: 0;">
          🎉 No hay tareas pendientes. ¡Buen trabajo!
        </p>
      }

    </ul>
  </div>

</div>
```


Detalles de la implementación:

`track tarea.id`: Esta es la directiva de rastreo obligatoria del bloque `@for`.
Le permite a Angular mapear de manera única cada nodo del DOM con el objeto en memoria.
Si agregas una tarea, Angular solo renderiza esa tarea nueva en vez de destruir y reconstruir toda la lista `<ul>`.

`@empty`: Funciona en perfecta sincronía con el `@for`.
No requiere condicionales extra ni evaluar manualmente un `listaTareas.length === 0`.
Si el arreglo pasa a estar vacío, Angular remueve el contenido del bucle e inserta este bloque instantáneamente.

Guarda los cambios, escribe una nueva tarea en tu formulario del navegador y dale a "Añadir".
Verás cómo se inserta limpiamente en tu nueva lista en tiempo real. Si quieres probar el bloque `@empty`,
puedes vaciar manualmente el arreglo inicial en el archivo TypeScript (`listaTareas: Tarea[] = [];`)
y verás el mensaje de felicitación de inmediato.



### 4. Interactividad (Event & Property Binding):

Cada tarea debe tener un botón o checkbox para marcarla como completada
Si está completada, el texto debe verse tachado o con un estilo visual diferente


#### Diseño

##### Diseñar la interactividad para conmutar el estado de una tarea nos introduce al verdadero núcleo de los frameworks reactivos
##### el ciclo de retroalimentación unidireccional.

##### donde el Event Binding (escuchar al usuario)
##### y el Property/Class Binding (renderizar según el estado)
se dan la mano para transformar una interfaz estática en una experiencia dinámica


Interactividad:

Para lograr que una tarea se marque como completada y cambie su aspecto visual
##### diseñamos un flujo circular dividido en tres momentos clave:

1. Captura de la Intención (Event Binding)

El usuario interactúa con un elemento de control en la fila de la tarea
tarea (un checkbox o un botón de "Listo").

mecanismo:
Este elemento HTML no cambia el diseño por sí mismo
Su única función es disparar un evento de clic o de cambio

mensaje:
##### Al activarse, el evento "viaja" hacia la lógica de TypeScript llevando consigo una coordenada crucial
el ID único de esa tarea específica
Sin esa coordenada, el componente no sabría qué tarea actualizar


2. Mutación de la Verdad: Estado en TypeScript

##### Cuando la lógica recibe el ID de la tarea a través del evento
se ejecuta una operación de búsqueda y modificación en la memoria de la aplicación

Se localiza el objeto de la tarea correspondiente dentro del arreglo principal

##### Se invierte el valor de su propiedad binaria (completada).
Si estaba en false (pendiente), pasa a true (completada), y viceversa
Esto asegura que el usuario pueda "arrepentirse" y desmarcar la tarea si lo desea


3. Metamorfosis Visual: Property o Class Binding

La reactividad: 
Angular detecta inmediatamente que la propiedad completada de ese objeto específico ha cambiado
redibuja únicamente la zona afectada de la plantilla.

##### Para alterar el estilo visual (tachar el texto, atenuar los colores o cambiar el fondo)
##### el diseño conceptual se apoya en una evaluación condicional directa en el HTML:

Si completada es falso:
La plantilla proyecta el texto con sus estilos tipográficos normales y colores activos

Si completada es verdadero:
La plantilla activa dinámicamente un estilo decorativo (como la propiedad CSS line-through para tachar el texto)
o le inyecta una clase visual de "atenuado" (bajando la opacidad o cambiando el color a gris).


Diseño robusto:
##### HTML nunca "decide" cuándo tacharse, simplemente obedece al estado del objeto en TypeScript
#### !!! Si mañana guardáramos estas tareas en una base de datos y el usuario recargara la página
las tareas que ya venían con completada: true se renderizarían tachadas
desde el primer milisegundo, de forma nativa y sin necesidad de ejecutar clics simulados



#### Código

##### Implementaremos un método en TypeScript para alternar el estado de la tarea
##### usaremos Property Binding de estilos en el HTML para que la interfaz reaccione visualmente de inmediato

1. Lógica: Conmutador de Estado (app.component.ts)

método dentro de la clase AppComponent
debajo de tu función agregarTarea

```
// Cambia el estado de completado de una tarea específica
alternarTarea(id: string): void {
  // Buscamos la tarea por su ID único
  const tarea = this.listaTareas.find(t => t.id === id);
  
  // Si la encuentra, invierte su valor booleano (true -> false o viceversa)
  if (tarea) {
    tarea.completada = !tarea.completada;
  }
}
```


2. Vista: Checkbox y Estilos Condicionales (app.component.html)

modificaremos el bloque @for dentro de tu archivo HTML.
##### Añadiremos un checkbox al inicio de cada tarea
##### aplicaremos Property Binding directamente sobre los estilos inline del texto
([style.textDecoration] y [style.opacity]).

Reemplaza bloque @for por:

```
@for (tarea of listaTareas; track tarea.id) {
  <li style="padding: 12px; background: #fff; border: 1px solid #e0e0e0; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
    
    <div style="display: flex; align-items: center; gap: 12px;">
      <input 
        type="checkbox" 
        [checked]="tarea.completada" 
        (change)="alternarTarea(tarea.id)"
        style="width: 18px; height: 18px; cursor: pointer;"
      >

      <span style="font-weight: 500;"
            [style.textDecoration]="tarea.completada ? 'line-through' : 'none'"
            [style.opacity]="tarea.completada ? '0.5' : '1'"
            [style.color]="tarea.completada ? '#888' : '#333'">
        {{ tarea.nombre }}
      </span>
      
      <span style="font-size: 11px; padding: 3px 8px; border-radius: 12px; font-weight: bold; background: #eee;"
            [style.opacity]="tarea.completada ? '0.5' : '1'">
        {{ tarea.prioridad }}
      </span>
    </div>

  </li>
} @empty {
  <p style="text-align: center; color: #15803d; font-style: italic; background: #f0fdf4; padding: 15px; border: 1px dashed #bbf7d0; border-radius: 6px; margin: 0;">
    🎉 No hay tareas pendientes. ¡Buen trabajo!
  </p>
}
```


Herramientas de Angular

`[checked]="tarea.completada"`: Es un Property Binding
Fuerza al elemento nativo de HTML a marcar o desmarcar el cuadro basándose exclusivamente en el valor booleano de la propiedad en TypeScript

`(change)="alternarTarea(tarea.id)"`: Es un Event Binding
En el momento en que el usuario hace clic sobre el checkbox, el navegador dispara el evento `change`
Angular lo intercepta y corre nuestra función pasándole el ID exacto de la fila correspondiente

`[style.textDecoration]="..."`: Es un binding de estilo nativo de Angular
Evalúa un operador ternario de JavaScript en tiempo real
Si `tarea.completada` es verdadero, inyecta `'line-through'` al CSS del elemento
si es falso, inyecta `'none'`.



### 5. Indicador de Estado (Interpolación y Lógica):

Muestra arriba de la lista un contador dinámico: "Tareas pendientes: X".


#### Diseño

Indicador de estado como un contador dinámico
introduce a un principio arquitectónico vital
##### !!! La Única Fuente de la Verdad (Single Source of Truth) y el concepto de Estado Derivado

un principiante:
suele crear una variable suelta llamada contador
y sumar o restar manualmente uno cada vez que el usuario interactúa

##### Es una trampa peligrosa que casi siempre genera errores donde la pantalla muestra un número que no coincide con la realidad

Hay que plantear el diseño de forma limpia y elegante


Diseño del Estado Derivado:

Contador sea 100% fiable
no debemos "almacenar" el número de tareas pendientes
##### debemos calcularlo en tiempo real basándonos exclusivamente en la lista principal.

1. Estado Almacenado vs. Estado Derivado

#### !!! Estado Almacenado (La Fuente de la Verdad):
Es nuestro arreglo de tareas
Es lo único que muta de forma explícita cuando añadimos
eliminamos o conmutamos un elemento.

#### !!! Estado Derivado (El Contador):
Es información que ya existe implícitamente dentro de la fuente de la verdad
No necesita su propia variable de memoria
Si el arreglo de tareas cambia, el contador cambia automáticamente porque se recalcula analizando la "fotografía" actual del arreglo


2. Filtro Predictivo:

El motor de la aplicación ejecutará una inspección express cada vez que Angular detecte un cambio en la interfaz

Examinará el arreglo de tareas completo.

Aplicará una regla de descarte:
ignorará todas las tareas cuya propiedad completada sea verdadera

Contará cuántas tareas lograron pasar el filtro:
las que siguen bajo la condición de pendientes


3. Proyección por Interpolación:

Una vez que el filtro arroja el número final (por ejemplo, 3)
la plantilla HTML captura ese valor y lo inyecta directamente dentro del flujo de texto plano mediante Interpolación

Lo maravilloso de este diseño es que el indicador se vuelve completamente agnóstico de cómo cambiaron las tareas
No le importa si la tarea se completó, si se eliminó o si se agregó una nueva
el engranaje simplemente vuelve a contar lo que hay en el arreglo y actualiza la pantalla en el acto


Ventajas:

Cero desincronizaciones:
Es matemáticamente imposible que el contador muestre un número incorrecto
ya que es un reflejo directo y filtrado del arreglo.

Código más limpio:
Eliminamos la necesidad de escribir lógica de "+1" o "-1"
en cada uno de los otros métodos del componente.



#### Código

Para implementar un "Estado Derivado"
utilizaremos una propiedad de lectura o Getter en TypeScript
##### permite exponer una variable virtual que recalcula su valor automáticamente cada vez que Angular revisa la pantalla

1. Lógica: Creando el Getter (app.component.ts)
añadir el getter justo debajo de tus propiedades de estado (o debajo de tus métodos habituales).

```
// ... El resto de tu código se mantiene igual arriba ...

export class AppComponent {
  nuevoNombre: string = '';
  nuevaPrioridad: 'Alta' | 'Media' | 'Baja' = 'Media';
  listaTareas: Tarea[] = [
    { id: '1', nombre: 'Aprender la arquitectura de Angular', prioridad: 'Alta', completada: false }
  ];

  // LÓGICA DEL INDICADOR: Getter que calcula las tareas pendientes en tiempo real
  get totalPendientes(): number {
    return this.listaTareas.filter(tarea => !tarea.completada).length;
  }

  // ... Tus métodos agregarTarea() y alternarTarea() siguen aquí abajo ...
}
```

2. Vista: Renderizando el Contador (app.component.html)
Vamos a colocar el indicador mediante Interpolación
justo arriba de donde se renderiza la lista de tareas para que el usuario tenga el resumen visible antes de mirar el detalle

```
<div style="margin-top: 30px;">
    
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; background: #f8fafc; padding: 10px 15px; border-radius: 6px; border-left: 4px solid #dd0031;">
      <h3 style="color: #333; margin: 0;">Tareas Actuales</h3>
      <span style="font-weight: bold; color: #475569; font-size: 14px;">
        Tareas pendientes: <span style="color: #dd0031; font-size: 16px;">{{ totalPendientes }}</span>
      </span>
    </div>

    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px;">
      </ul>
  </div>

</div>
```

Uso de get:
anteponer la palabra clave get a la función totalPendientes(),
##### transformamos ese método en una propiedad virtual de solo lectura.
##### significa que en tu HTML no necesitas invocarlo con paréntesis como si fuera una función común {{ totalPendientes() }}.
##### Lo consumes directamente como si fuera una variable estándar: {{ totalPendientes }}.

Angular se encarga de ejecutar el filtro de fondo silenciosamente cada vez que el usuario marca o desmarca un checkbox
actualizando la cifra en pantalla de forma instantánea.



### 6. Bonus: Eliminar tarea

Agregar la acción de eliminar
##### la lógica del estado derivado (el getter), lo cual va a hacer que este añadido sea sumamente fácil de integrar.


#### Diseño

##### Eliminar un elemento de una pantalla reactiva requiere un enfoque ligeramente diferente al de la programación tradicional
##### No vamos al HTML a "borrar un nodo" o "esconder un div"; modificamos la estructura central de datos y dejamos que la interfaz se entere sola

1. Emisor del Id (Event Binding)

Cada fila de tu bucle @for representa una tarea viva con un id único
(por ejemplo, id: '1').

Añadiremos un botón (un botón clásico o un icono de papelera) al final de la fila.

##### Este botón estará escuchando el evento del clic del usuario
Al activarse, invocará una acción de la lógica pasándole como argumento obligatorio el id de esa tarea en particular


2. Estrategia de la Exclusión (Filtrado del Estado)

Una vez que el id llega a la lógica de TypeScript
necesitamos remover el objeto del arreglo listaTareas

Para hacerlo de forma limpia y moderna
##### aplicamos el concepto de Filtrado por Exclusión:

En lugar de buscar el elemento, borrarlo y mover los índices manualmente
##### (lo cual es propenso a errores), usamos una regla de filtrado funcional.

##### Le decimos al componente: "Reescribe la lista de tareas completa, pero pon una condición estricta
solo van a sobrevivir aquellas tareas cuyo ID sea diferente al ID que me acaban de pasar para eliminar".

La tarea que coincide con el ID queda excluida del nuevo arreglo
desapareciendo de la memoria del componente de un solo plumazo.


3. Efecto Dominó Automático (Reactividad)

Al actualizarse el arreglo listaTareas mediante el filtrado
se desata una reacción en cadena en la interfaz de usuario
sin que tengamos que escribir código extra para coordinarla:

bucle @for detecta que el elemento con ese ID
ya no existe en el arreglo y lo remueve elegantemente del DOM

bloque @empty se mantiene alerta: si esa era la última tarea que quedaba en la lista
el arreglo pasa a tener longitud cero y el mensaje "No hay tareas pendientes
Buen trabajo!" se despliega automáticamente.

indicador totalPendientes (tu getter) se ejecuta de inmediato
Al analizar el arreglo modificado, recalculará la cantidad real en milisegundos
y el número arriba de la lista bajará de forma sincronizada.

 

#### Código

1. Lógica: Filtrado por Exclusión
app.component.ts

método:
el encargado de aplicar la estrategia de exclusión que diseñamos
reescribiendo el arreglo sin la tarea seleccionada.

```
eliminarTarea(id: string): void {
  // Filtramos el arreglo: se quedan todas las tareas menos la que coincide con el ID
  this.listaTareas = this.listaTareas.filter(tarea => tarea.id !== id);
}
```

2. Vista: Botón de Eliminación e Integración Final
app.component.html

```
<div style="margin-top: 30px;">

  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; background: #f8fafc; padding: 10px 15px; border-radius: 6px; border-left: 4px solid #dd0031;">
    <h3 style="color: #333; margin: 0;">Tareas Actuales</h3>
    <span style="font-weight: bold; color: #475569; font-size: 14px;">
      Tareas pendientes: <span style="color: #dd0031; font-size: 16px;">{{ totalPendientes }}</span>
    </span>
  </div>

  <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px;">
    
    @for (tarea of listaTareas; track tarea.id) {
      <li style="padding: 12px; background: #fff; border: 1px solid #e0e0e0; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
        
        <div style="display: flex; align-items: center; gap: 12px;">
          <input 
            type="checkbox" 
            [checked]="tarea.completada" 
            (change)="alternarTarea(tarea.id)"
            style="width: 18px; height: 18px; cursor: pointer;"
          >

          <span style="font-weight: 500;"
                [style.textDecoration]="tarea.completada ? 'line-through' : 'none'"
                [style.opacity]="tarea.completada ? '0.5' : '1'"
                [style.color]="tarea.completada ? '#888' : '#333'">
            {{ tarea.nombre }}
          </span>
          
          <span style="font-size: 11px; padding: 3px 8px; border-radius: 12px; font-weight: bold; background: #eee;"
                [style.opacity]="tarea.completada ? '0.5' : '1'">
            {{ tarea.prioridad }}
          </span>
        </div>

        <button 
          (click)="eliminarTarea(tarea.id)"
          style="background: none; border: none; color: #dc2626; font-weight: bold; cursor: pointer; padding: 4px 8px; border-radius: 4px; font-size: 13px;"
        >
          Eliminar 🗑️
        </button>

      </li>
    } @empty {
      <p style="text-align: center; color: #15803d; font-style: italic; background: #f0fdf4; padding: 15px; border: 1px dashed #bbf7d0; border-radius: 6px; margin: 0;">
        🎉 No hay tareas pendientes. ¡Buen trabajo!
      </p>
    }

  </ul>
</div>
```



# Del diseño al desarrollo: flujo Bottom-Up (de abajo hacia arriba)

##### empezamos construyendo las piezas más pequeñas e independientes, para luego ensamblarlas dentro de las estructuras más grandes

El flujo de desarrollo ideal se divide en tres fases consecutivas

1. Modelo de Datos (El Contrato)
Antes de crear cualquier pantalla o lógica
##### necesitas definir el "idioma común" que van a hablar tus componentes

Creas la interfaz de TypeScript que define cómo luce un dato en tu sistema
beneficio: Al definir el modelo al inicio, TypeScript activará el autocompletado
autocompletado y la verificación estricta de errores en todos los archivos que crees a continuación


2. Componente Hijo/hoja: presentación
##### El hijo es un componente "tonto" o independiente, no le importa de dónde vienen los datos ni cómo se guardan en la base de datos
##### solo le importa cómo se ven y qué botones presiona el usuario

Diseñas su estructura visual.
Defines qué datos necesita recibir obligatoriamente desde afuera mediante sus input().
Defines qué avisos necesita emitir hacia afuera cuando el usuario interactúa mediante sus output().

beneficio: Trabajas en total aislamiento
Puedes probar cómo se comporta la tarjeta de forma individual
sin preocuparte por el estado global de la aplicación.


3. Componente Padre: "Contenedor" u Orquestador
el "cerebro" de la pantalla
##### Para poder orquestar, primero necesita tener las piezas que va a orquestar

`Creas el estado principal` del sistema (los signal de origen).
`Creas las métricas automáticas o valores derivados` (los computed).
`Importas al componente hijo` y lo dibujas en la plantilla mediante un bucle.
`Conectas los cables`: le envías el estado al input() del hijo

beneficio: Al momento de escribir la etiqueta del hijo en el HTML del padre
el compilador de Angular te guiará y autocompletará exactamente qué propiedades te falta pasarle

Si empiezas por el padre, caes en la trampa de adivinar cómo se va a comportar el hijo
Terminas escribiendo variables o métodos en el padre que luego descubres que el hijo no necesitaba
o te das cuenta a mitad de camino de que al hijo le faltaba un dato
y tienes que volver atrás a reestructurar todo.

##### Modelo ➔ Componentes Hijos ➔ Componentes Padres
es la vía rápida para escribir código limpio, predecible y sin refactorizaciones innecesarias




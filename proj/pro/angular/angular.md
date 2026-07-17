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




## Property binding



## Event binding



## Two-way binding



## @if



## @for




## 2. Prácticas para @Input y @Output






# 3. 





# Prácticas 1 completa






# Herramientas calidad código






# Requisitos funcionales


## Utiles

##### Plantear los requisitos funcionales de forma profesional es, literalmente, el 50% de la solución
##### Si los requisitos están mal definidos, el código reflejará esa confusión
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




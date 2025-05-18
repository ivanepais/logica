# Angular 

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Welcome to Angular!
  `,
})
export class AppComponent {}

```

Importamos Component para usar la anotación @Component

El selector HTML será app-root

template imprimirá en el navegador la cadena "Welcome to Angular!"

Exportamos el componente que se llama AppComponent que es una clase de TypeScript. 


## Componentes 

Los componentes son los elementos básicos para cualquier aplicación Angular. 

Cada componente tiene tres partes:

1. Clase TypeScript
2. Plantilla HTML
3. Estilos CSS

### Actualizar la plantilla y los estilos de un componente.

Esta es una gran oportunidad para comenzar con Angular


### 1. Actualizar la plantilla del componente

Actualizar la propiedad de la plantilla para que diga 'Hello Universe'.

```
template: `
  Hello Universe
`,

```


### 2. Actualiza los estilos del componente

Actualiza el valor de los estilos y cambia la propiedad de color blue a #a144eb.

```
styles: `
  :host {
    color: #a144eb;
  }
`,

```

Cuando revises la vista previa, verás que se cambiará el color del texto.


En Angular, puedes usar todos los CSS y HTML compatibles con el navegador que estén disponibles. 

Si lo deseas, puedes almacenar tu plantilla y estilos en archivos separados.


### Código final: 

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Hello
  `,
  styles: `
    :host {
      color: blue;
    }
  `,
})
export class AppComponent {}

```


## Actualizar la clase del Componente

En Angular, la lógica y el comportamiento del componente se definen en la clase TypeScript del componente.

Aprenderá a actualizar la clase de componente y a utilizar la interpolación.


### 1. Agregue una propiedad llamada city

Actualice la clase del componente agregando una propiedad llamada "city" a la clase AppComponent

```
export class AppComponent {
  city = 'San Francisco';
}

```

#### La propiedad city es de tipo cadena, pero puede omitir el tipo debido a la inferencia de tipos en TypeScript. 

#### La propiedad city se puede usar en la clase AppComponent y se puede hacer referencia a ella en la plantilla del componente.

Para usar una propiedad de clase en una plantilla, debe usar la sintaxis {{ }}


### 2. Actualizar la plantilla del componente

Actualizar la propiedad de la plantilla para que coincida con el siguiente código HTML:

```
template: `Hello {{ city }}`,

```

Este es un ejemplo de interpolación y forma parte de la sintaxis de plantilla de Angular. 

Le permite hacer mucho más que colocar texto dinámico en una plantilla. 

También puede usar esta sintaxis para llamar a funciones, escribir expresiones y más.


### 3. Más usos de la interpolación

Más práctica con la interpolación

Prueba esto: agrega otro conjunto de {{ }} con el contenido 1 + 1:

```
template: `Hello {{ city }}, {{ 1 + 1 }}`,

```

Angular evalúa el contenido de {{ }} y muestra el resultado en la plantilla.

Esto es solo el comienzo de lo que es posible con las plantillas de Angular, sigue aprendiendo para obtener más información.


### Código final: 

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Hello {{ city }}, {{ 1 + 1 }}
  `,
})
export class AppComponent {
  city = 'San Francisco';
}

```


## Composición de componentes

#### Aprendió a actualizar la plantilla de componentes, la lógica de componentes y los estilos de componentes.

#### Pero ¿cómo se utiliza un componente en su aplicación?

#### La propiedad selector de la configuración del componente le proporciona un nombre para utilizar al hacer referencia al componente en otra plantilla. 

#### Utilice el selector como una etiqueta HTML, por ejemplo, app-user sería <app-user /> en la plantilla.

```
app-user (how html tag) 

<app-user /> (in template)

```

Aprenderá a componer componentes.

En este ejemplo, hay dos componentes UserComponent y AppComponent.


### 1. Agregar una referencia a UserComponent

Actualice la plantilla AppComponent para incluir una referencia a UserComponent que utiliza el selector app-user. 

Asegúrese de agregar UserComponent a la matriz de importaciones de AppComponent, esto lo hace disponible para su uso en la plantilla AppComponent

```
template: `<app-user />`,
imports: [UserComponent]

```

El componente ahora muestra el mensaje Username: youngTech. 

Puede actualizar el código de la plantilla para incluir más marcado.


### 2. Agregar más marcado

Como puede usar cualquier marcado HTML que desee en una plantilla, intente actualizar la plantilla para AppComponent para que también incluya más elementos HTML. 

Este ejemplo agregará un elemento <section> como elemento principal del elemento <app-user>

```
template: `<section><app-user /></section>`,

```

Puede utilizar tanto código HTML y tantos componentes como necesite para hacer realidad la idea de su aplicación. Incluso puede tener varias copias de su componente en la misma página.

Esa es una gran introducción. 

¿Cómo mostraría condicionalmente un componente en función de los datos? 

Es de lo que trata lo siguiente.


### Código inicial 

app/app.component.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}
  `,
})
export class UserComponent {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  template: ,
  imports: ,
})
export class AppComponent {}

```


### Código final 

app/app.component.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}
  `,
})
export class UserComponent {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  template: `
    <section>
      <app-user />
    </section>
  `,
  imports: [UserComponent],
})
export class AppComponent {}

```

1. Tomar el valor o nombre del selector del componente que se quiere utilizar en otra plantilla de otro componente

2. Transformamos este selector en una etiqueta: app-user -> <app-user />.

3. Actualizamos la plantilla del componente contenedor para recibir al otro componente: ```template: `<app-user />`,```

4. Agregar el nombre del componente que se quiere usar a la matriz imports del componente receptor: ```imports: [UserComponent]```

5. El componente contenedor imprime el contenido que había en el otro componente: ```Username: youngTech```. 

6. Incluir más marcado para el componente principal o contenedor: ```template: `<section><app-user /></section>`, ```


## Condicionales: control flow con @if

Decidir qué mostrar en la pantalla para un usuario es una tarea común en el desarrollo de aplicaciones. 

Muchas veces, la decisión se toma programáticamente mediante condiciones.

Para expresar visualizaciones condicionales en plantillas, Angular usa la sintaxis de plantilla @if.

Aprenderá a usar condicionales en plantillas.


La sintaxis que permite la visualización condicional de elementos en una plantilla es @if.

Sintaxis @if en un componente:

```
@Component({
  ...
  template: `
    @if (isLoggedIn) {
      <p>Welcome back, Friend!</p>
    }
  `,
})
class AppComponent {
  isLoggedIn = true;
}

```

Dos cosas a tener en cuenta:

Hay un prefijo @ para if porque es un tipo especial de sintaxis llamada sintaxis de plantilla Angular.

Para aplicaciones que usan v16 y anteriores, consulte la documentación de Angular para NgIf para obtener más información.


### 1. Cree una propiedad llamada isServerRunning

En la clase AppComponent, agregue una propiedad booleana llamada isServerRunning y configure el valor inicial como verdadero


### 2. Utilice @if en la plantilla

Actualice la plantilla para mostrar el mensaje "Sí, el servidor se está ejecutando" si el valor de isServerRunning es verdadero.


### 3. Utilice @else en la plantilla

Ahora Angular admite la sintaxis de plantilla nativa para definir el caso else con la sintaxis @else. 

Actualice la plantilla para mostrar el mensaje "No, el servidor no se está ejecutando" como el caso else.

```
template: `
  @if (isServerRunning) { ... }
  @else { ... }
`;

```

Agregue su código para completar el marcado faltante.


Este tipo de funcionalidad se denomina control de flujo condicional. 

A continuación, aprenderá a repetir elementos en una plantilla.


### Código inicial 

app/app.component.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <span>Yes, the server is running</span>
  `,
})
export class AppComponent {
  // add the boolean property here
}

```

### Código final 

app/app.component.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    @if (isServerRunning) {
    <span>Yes, the server is running</span>
    } @else {
    <span>No, the server is not running</span>
    }
  `,
})
export class AppComponent {
  isServerRunning = true;
}

```


## Bucles: repetir elementos en la plantilla con @for

Al crear aplicaciones web, es necesario repetir algún código una cantidad específica de veces; por ejemplo, dada una matriz de nombres, es posible que desee mostrar cada nombre en una etiqueta <p>.

En esta actividad, aprenderá a usar @for para repetir elementos en una plantilla.

La sintaxis que permite repetir elementos en una plantilla es @for.


Sintaxis @for en un componente

```
@Component({
  ...
  template: `
    @for (os of operatingSystems; track os.id) {
      {{ os.name }}
    }
  `,
})
export class AppComponent {
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
}

```

Dos cosas a tener en cuenta:

Hay un prefijo @ para for porque es una sintaxis especial llamada sintaxis de plantilla Angular

Para aplicaciones que usan v16 y anteriores, consulte la documentación de Angular para NgFor


### 1. Agregue la propiedad users

En la clase AppComponent, agregue una propiedad llamada users que contenga a los usuarios y sus nombres

```
[{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}]

```


### 2. Actualizar la plantilla

Para mostrar cada nombre de usuario en un elemento p utilizando la sintaxis de plantilla @for

```
@for (user of users; track user.id) {
  <p>{{ user.name }}</p>
}      
    
```

Nota: el uso de track es obligatorio, puedes utilizar el id o algún otro identificador único.


Este tipo de funcionalidad se denomina control de flujo.

A continuación, aprenderás a personalizar y comunicarte con los componentes; por cierto, hasta ahora estás haciendo un gran trabajo.


### Código inicial 

app/app.component.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ,
})
export class AppComponent {}

```


### Código final 

app/app.component.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    @for(user of users; track user.id) {
    <p>{{ user.name }}</p>
    }
  `,
})
export class AppComponent {
  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];
}

```


## Binding de propiedades: Comunicación y personalización entre los componentes

La vinculación de propiedades en Angular le permite establecer valores para las propiedades de elementos HTML, componentes de Angular y más.

Utilice binding de propiedades para establecer dinámicamente valores para propiedades y atributos. 

Puede hacer cosas como activar o desactivar funciones de botones, establecer rutas de imágenes de manera programática y compartir valores entre componentes.

Aprenderá a utilizar la vinculación de propiedades en plantillas.


#### Para vincular/binding el atributo de un elemento, encierre el nombre del atributo entre corchetes. 

```
<img alt="photo" [src]="imageURL">

```

#### En este ejemplo, el valor del atributo src se vinculará a la propiedad de clase imageURL. 

Cualquier valor que tenga imageURL se establecerá como el atributo src de la etiqueta img.

### 1. Agregue una propiedad llamada isEditable

Actualice el código en app.component.ts agregando una propiedad a la clase AppComponent llamada isEditable con el valor inicial establecido en verdadero

```
export class AppComponent {
    isEditable = true;
}

```


### 2. Vincular/Binding a contentEditable

Vincule el atributo contentEditable del div a la propiedad isEditable mediante la sintaxis ```[]```

```
@Component({
    ...
    template: `<div [contentEditable]="isEditable"></div>`,
})

```

El div ahora es editable.

La vinculación de propiedades es una de las muchas funciones poderosas de Angular.


### Código inicial 

app/app.component.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template: `
    <div contentEditable="false"></div>
  `,
})
export class AppComponent {}

```

### Código final 

app/app.component.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template: `
    <div [contentEditable]="isEditable"></div>
  `,
})
export class AppComponent {
  isEditable = true;
}

```


## Event Handling

El manejo de eventos permite funciones interactivas en aplicaciones web. 

Te da la capacidad como desarrollador de responder a acciones del usuario como pulsaciones de botones, envíos de formularios y más.

Aprenderás a agregar un controlador de eventos.


En Angular, te vinculas a eventos con la sintaxis de paréntesis (). 

En un elemento determinado, encierra el evento al que quieres vincular entre paréntesis y establece un controlador de eventos. 

Considera este ejemplo de botón:

```
@Component({
    ...
    template: `<button (click)="greet()">`
})
class AppComponent {
    greet() {
        console.log('Hello, there 👋');
    }
}

```

En este ejemplo, la función de greet() se ejecutará cada vez que se haga clic en el botón. 

Tenga en cuenta que la sintaxis de saludo() incluye el paréntesis final.

Bien, ahora es su turno de probar esto:


### 1. Agregar un controlador de eventos

Agregue la función del controlador de eventos onMouseOver en la clase AppComponent. Utilice el siguiente código como implementación

```
onMouseOver() {
    this.message = 'Way to go 🚀';
}

```


### 2. Vincular al evento de plantilla

Actualizar el código de plantilla en app.component.ts para vincularlo al evento de pasar el mouse por encima del elemento de sección

```
<section (mouseover)="onMouseOver()">

```

Con unos pocos pasos en el código has creado tu primer controlador de eventos en Angular.


### Código inicial 

app/app.component.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section>
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
  `,
})
export class AppComponent {
  message = '';

  onMouseOver() {}
}

```

### Código final 

app/app.component.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>
  `,
})
export class AppComponent {
  message = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
}

```


## Comunicación con @Input

A veces requiere que envíes datos a un componente. 

Estos datos se pueden usar para personalizar un componente o quizás enviar información desde un componente principal a un componente secundario.

Angular usa un concepto llamado Input. 

Es similar a las propiedades en otros marcos.

Para crear una propiedad Input, usa el decorador @Input.

Aprenderás a usar el decorador @Input para enviar información a los componentes.


Para crear una propiedad Input, agrega el decorador @Input a una propiedad de una clase de componente  

Ej: user.component.ts

```
class UserComponent {
  @Input() occupation = '';
}

```

Cuando esté listo para pasar un valor a través de una entrada, los valores se pueden configurar en plantillas mediante la sintaxis de atributo. 

A continuación, se muestra un ejemplo:

app.component.ts

```
@Component({
  ...
  template: `<app-user occupation="Angular Developer"></app-user>`
})
class AppComponent {}

```

Asegúrese de vincular la ocupación de la propiedad en su UserComponent.

user.component.ts

```
@Component({
  ...
  template: `<p>The user's occupation is {{occupation}}</p>`
})

```


### 1. Defina una propiedad @Input

Actualice el código en user.component.ts para definir una propiedad Input en el componente UserComponent llamado name. 

Por ahora, establezca el valor inicial en una cadena vacía. 

Asegúrese de actualizar la plantilla para interpolar la propiedad name al final de la oración.


### 2. Pase un valor a la propiedad @Input

Actualice el código en app.component.ts para enviar la propiedad de nombre con un valor de "Simran".

Cuando el código se haya actualizado correctamente, la aplicación mostrará "El nombre del usuario es Simran".


#### Si bien esto es genial, es solo una dirección de la comunicación del componente. 

#### ¿Qué sucede si desea enviar información y datos a un componente principal desde un componente secundario?


### Código inicial user.component.ts (componente secundario)

app/user.component.ts

```
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>The user's name is</p>
  `,
})
export class UserComponent {}

```


### Código final user.component.ts (componente secundario)

app/user.component.ts

```
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>The user's name is {{ name }}</p>
  `,
})
export class UserComponent {
  @Input() name = '';
}

```

### Código inicial app.component.ts (principal) 

```
import {Component} from '@angular/core';
import {UserComponent} from './user.component';

@Component({
  selector: 'app-root',
  template: `
    <app-user />
  `,
  imports: [UserComponent],
})
export class AppComponent {}

```

### Código final app.component.ts (principal) 

```
import {Component} from '@angular/core';
import {UserComponent} from './user.component';

@Component({
  selector: 'app-root',
  template: `
    <app-user name="Simran" />
  `,
  imports: [UserComponent],
})
export class AppComponent {}

```


## Comunicación de componentes con @Output

Al trabajar con componentes, puede ser necesario notificar a otros componentes que algo ha sucedido. 

Quizás se haya hecho clic en un botón, se haya agregado o eliminado un elemento de una lista o se haya producido alguna otra actualización importante. 

En este escenario, los componentes deben comunicarse con los componentes principales.

Angular utiliza el decorador @Output para habilitar este tipo de comportamiento.

Aprenderá a utilizar el decorador @Output y EventEmitter para comunicarse con los componentes.


Para crear la ruta de comunicación de los componentes secundarios a los principales, utilice el decorador @Output en una propiedad de clase y asígnele un valor de tipo EventEmitter

child.component.ts 

```
@Component({...})
class ChildComponent {
    @Output() incrementCountEvent = new EventEmitter<number>();
}

```

Ahora el componente puede generar eventos que el componente principal puede escuchar.

Active/Trigger los eventos llamando al método de emisión:

child.component.ts 

```
class ChildComponent {
    ...
    onClick() {
        this.count++;
        this.incrementCountEvent.emit(this.count);
    }
}

```

La función de emisión generará un evento con el mismo tipo que la instancia EventEmitter.

Completa el código siguiendo estas tareas:

### 1. Agregue una propiedad @Output

Actualice child.component.ts agregando una propiedad de salida llamada addItemEvent. 

Asegúrese de configurar el tipo EventEmitter como cadena


### 2. Completar el método addItem

Actualizar el método addItem en child.component.ts; utilizar el siguiente código como lógica

child.component.ts 

```
addItem() {
  this.addItemEvent.emit('🐢');
}

```


### 3. Actualizar la plantilla AppComponent

En app.component.ts, actualice la plantilla para que escuche el evento emitido agregando el siguiente código

```
<app-child (addItemEvent)="addItem($event)" />

```

Ahora, el botón "Agregar elemento" agrega un nuevo elemento a la lista cada vez que se hace clic en el botón.


En este punto ya has completado los conceptos básicos de los componentes. 


### Código inicial child.component.ts (secundario)

```
import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  styles: `.btn { padding: 5px; }`,
  template: `
    <button class="btn" (click)="addItem()">Add Item</button>
  `,
})
export class ChildComponent {
  addItem() {}
}

```

### Código final child.component.ts (secundario)

```
import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  styles: `.btn { padding: 5px; }`,
  template: `
    <button class="btn" (click)="addItem()">Add Item</button>
  `,
})
export class ChildComponent {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}

```


### Código inicial app.component.ts (principal)

```
import {Component} from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
  selector: 'app-root',
  template: `
    <app-child />
    <p>🐢 all the way down {{ items.length }}</p>
  `,
  imports: [ChildComponent],
})
export class AppComponent {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}

```

### Código final app.component.ts (principal)

```
import {Component} from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
  selector: 'app-root',
  template: `
    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>
  `,
  imports: [ChildComponent],
})
export class AppComponent {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}

```


## This 

Identificador especial que hace referencia al contexto de ejecución actual.

Su valor no estático y depende de cómo se invoque la función en la que aparece.


### this en JS

Casos en que this adopta un valor diferente:

Invocación: 

1. Función global 

valor de this:

En modo estricto: undefined 

En no estricto: objeto global 


2. Método de un objeto 

valor de this: 

El objeto propietario del método


3. Función simple (no método)

Valor: 

En modo estricto: undefined

En modo no estricto: objeto global


4. Constructor (new)

Valor: 

La nueva instancia creada


5. call/apply/bind

Valor: 

El primer argumento que se les pase (el contexto)


6. Función flecha

Valor: 

Hereda this del contexto léxico externo


#### Foo

Marcador de posición para un valor que puede cambiar según las condiciones o la información transmitida al programa. 

Foo y otras palabras similares se conocen formalmente como variables metasintácticas.


1. Se usa de forma muy general como nombre de ejemplo para cualquier cosa, especialmente programas y archivos (especialmente archivos scratch).

2. Primera en la lista estándar de variables metasintácticas utilizadas en ejemplos de sintaxis (bar, baz, qux, corge, grault, garply, waldo, fred, plugh, xyzzy, thud).


foo se usa como nombre provisional, generalmente en código de ejemplo, para indicar que el objeto nombrado, o la elección del nombre, no forma parte del núcleo del ejemplo. 

A foo suelen seguirle bar, baz e incluso bundy, si se necesitan más de uno. Wikipedia los llama variables metasintácticas. 

Los programadores de Python supuestamente usan spam, eggs, ham en lugar de foo, etc.


1. 

```
function foo() {
  console.log(this);
}
foo(); // en strict: undefined; en no strict: window (navegador)

```

2. Método de un objeto

```
const obj = {
  nombre: 'Ana',
  saludar() {
    console.log(this.nombre);
  }
};
obj.saludar(); // 'Ana'

```

3. Constructor

```
function Persona(nombre) {
  this.nombre = nombre;
}
const p = new Persona('Luis');
console.log(p.nombre); // 'Luis'

```

4. call / apply / bind

```
function muestraEdad() {
  console.log(this.edad);
}
const persona = { edad: 30 };

muestraEdad.call(persona); // 30

```

5. Función flecha

```
const boton = {
  edad: 10,
  click: function() {
    setTimeout(() => {
      console.log(this.edad);
    }, 1000);
  }
};
boton.click(); // 10, porque la arrow function hereda this

```

#### this dinámico: su valor se determina en tiempo de ejecución según la forma de invocación.

#### Funciones flecha: no tienen su propio this, sino que lo heredan léxicamente.

#### Métodos y constructores: this apunta al objeto o instancia correspondientes


### this en Angular 

Tiene como añdadido el contexto de las clases TypeScript, que Angular usa ampliamente

Angular utiliza clases TypeScript para definir componentes, servicios, directivas, etc. 

Dentro de una clase, this hace referencia a la instancia de la clase, como en cualquier clase de TypeScript/JavaScript moderna.


En un componente: 

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  template: `<button (click)="mostrarNombre()">Click</button>`
})
export class EjemploComponent {
  nombre: string = 'María';

  mostrarNombre() {
    console.log(this.nombre);
  }
}

```

#### this se refiere a la instancia del componente EjemploComponent, por lo tanto this.nombre es 'María'.


#### Problema: perder el contexto de this

Cuando pasas un método de clase a una función externa o a algo como un setTimeout, puedes perder el contexto de this:

```
ngOnInit() {
  setTimeout(this.mostrarNombre, 1000); // ERROR: this es undefined
}

```

this.mostrarNombre pierde su contexto al ser pasada como función sin estar ligada.


#### Prácticas 

1. Usar una arrow function:

```
ngOnInit() {
  setTimeout(() => {
    this.mostrarNombre(); // this se mantiene
  }, 1000);
}

```


2. Usar bind para forzar el contexto:

```
ngOnInit() {
  setTimeout(this.mostrarNombre.bind(this), 1000); //
}
```


#### En servicios, directivas, pipes...

##### También se aplica igual: this hace referencia a la instancia de la clase que estás creando. 

##### Así puedes acceder a propiedades o métodos internos con this.propiedad.

 
En Angular, this:

Siempre hace referencia a la instancia de la clase.

Se comporta como en cualquier clase de JavaScript o TypeScript.

Puede perder el contexto si se pasa como callback, por lo que hay que usar arrow functions o bind.


### Usos de this

Tiene sentido cuando quieres acceder a propiedades o métodos que pertenecen al objeto actual (o instancia de clase).


1. Acceder a propiedades de clase u objeto

Cuando necesitas leer o modificar datos definidos en la misma clase o componente.

TS: 

```
export class MiComponente {
  titulo = 'Hola mundo';

  mostrarTitulo() {
    console.log(this.titulo); // accede a la propiedad de la clase
  }
}

```


2. Llamar a otros métodos dentro de la misma clase

#### Para reutilizar lógica definida dentro de otros métodos.

```
export class MiServicio {
  guardar() {
    this.validar(); // llamando otro método de la misma clase
  }

  validar() {
    // lógica de validación
  }
}

```

3. 3. En funciones callback dentro de clases

#### Si usas funciones como setTimeout, subscribe, o eventos, necesitas this para acceder al contexto correcto (aunque aquí debes tener cuidado con cómo pasas la función).

```
ngOnInit() {
  setTimeout(() => {
    this.cargarDatos();
  }, 1000);
}

```


### no usar this

1. En funciones fuera de clases/objetos, si estás en un contexto global o has perdido el contexto.


2. En funciones flecha fuera del ámbito de clase: no necesitas this si no estás accediendo a la instancia.


3. En servicios estáticos o funciones puras donde puedes pasar valores como argumentos.


#### Usa this cuando necesitas acceder a algo que "vive" en el objeto o clase actual: propiedades, métodos, o estado interno


#### Errores this

1. Acceso incorrecto a propiedades o métodos

```
export class UsuarioComponent {
  nombre = 'Lucía';

  mostrar() {
    console.log(nombre); // ReferenceError: nombre is not defined
  }
}

```

#### JavaScript busca una variable nombre local dentro del método mostrar() y no la encuentra, porque está definida como propiedad de la clase.


2. Llamadas a métodos de la clase que no se reconocen

```
export class Servicio {
  guardar() {
    validar(); // ❌ ReferenceError
  }

  validar() {
    // ...
  }
}

```

Fallo: Al no usar this.validar(), el método no se encuentra.


3. Colisiones con variables locales

Si tienes una variable local con el mismo nombre que una propiedad de clase, y no usas this, puedes acceder a la equivocada:

```
export class ProductoComponent {
  precio = 100;

  calcularDescuento() {
    const precio = 50;
    console.log(precio);      // err: muestra 50 (local)
    console.log(this.precio); // valido: muestra 100 (propiedad de clase)
  }
}

```

4. En Angular templates

#### Cuando accedes a métodos o propiedades en el HTML de Angular (por ejemplo: {{ nombre }} o (click)="saludar()"), Angular automáticamente usa el contexto de la clase, así que no necesitas escribir this ahí.

```
<!-- Esto está bien -->
<p>{{ nombre }}</p>
<button (click)="mostrar()">Mostrar</button>

```

Pero dentro del archivo TypeScript sí necesitas this.



### Binding de props []

La vinculación de propiedades en Angular le permite establecer valores para las propiedades de elementos HTML, componentes de Angular y más.

Utilice binding de propiedades para establecer dinámicamente valores para propiedades y atributos. 

Puede hacer cosas como activar o desactivar funciones de botones, establecer rutas de imágenes de manera programática y compartir valores entre componentes.


Para vincular/binding el atributo de un elemento, encierre el nombre del atributo entre corchetes. 

```
<img alt="photo" [src]="imageURL">

```

En este ejemplo, el valor del atributo src se vinculará a la propiedad de clase imageURL. 

Cualquier valor que tenga imageURL se establecerá como el atributo src de la etiqueta img.


Ejemplo: 

app/app.component.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template: `
    <div [contentEditable]="isEditable"></div>
  `,
})
export class AppComponent {
  isEditable = true;
}

```


### Eventos ()

Permite funciones interactivas en aplicaciones web. 

Te da la capacidad como desarrollador de responder a acciones del usuario como pulsaciones de botones, envíos de formularios y más.


En Angular, te vinculas a eventos con la sintaxis de paréntesis (). 

En un elemento determinado, encierra el evento al que quieres vincular entre paréntesis y establece un controlador de eventos. 


Ejemplo de botón:

```
@Component({
    ...
    template: `<button (click)="greet()">`
})
class AppComponent {
    greet() {
        console.log('Hello, there 👋');
    }
}

```


1. Agregar un controlador de eventos

Agregue la función del controlador de eventos onMouseOver en la clase AppComponent. Utilice el siguiente código como implementación

```
onMouseOver() {
    this.message = 'Way to go 🚀';
}

```


2. Vincular al evento de plantilla

Actualizar el código de plantilla en app.component.ts para vincularlo al evento de pasar el mouse por encima del elemento de sección

```
<section (mouseover)="onMouseOver()">

```

Con unos pocos pasos en el código has creado tu primer controlador de eventos en Angular.


#### Ejemplo final: prop, this y evento

Define una prop en el componente (algo tipico de una clase)

Usa la prop y le da valor en una funcion usando this 

##### Distinción entre param y prop; obj toma el lugar de this. 

this.message -> obj.message

AppComponent.message 

AppComponent.onMouseOver() 

app/app.component.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>
  `,
})
export class AppComponent {
  message = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
}

```

### @Input 

A veces requiere que envíes datos a un componente. 

Estos datos se pueden usar para personalizar un componente o quizás enviar información desde un componente principal a un componente secundario.

Angular usa un concepto llamado Input. 

Es similar a las propiedades en otros marcos.

Para crear una propiedad Input, usa el decorador @Input.


1. Se define en un componente:  @Input() nameProp

2. Componente superior lo renderiza en su template y le pasa un valor a la prop @Input

3. El componente hijo con el Input debe usar esa prop con {{}} en su template


Ej: user.component.ts

```
class UserComponent {
  @Input() occupation = '';
}

```

Cuando esté listo para pasar un valor a través de una entrada, los valores se pueden configurar en plantillas mediante la sintaxis de atributo. 

A continuación, se muestra un ejemplo:

app.component.ts

```
@Component({
  ...
  template: `<app-user occupation="Angular Developer"></app-user>`
})
class AppComponent {}

```

Asegúrese de vincular la ocupación de la propiedad en su UserComponent.

user.component.ts

```
@Component({
  ...
  template: `<p>The user's occupation is {{occupation}}</p>`
})

```

#### Código final user.component.ts (componente secundario)

1. Define un input prop vacío

2. Lo lee en su template 


app/user.component.ts

```
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>The user's name is {{ name }}</p>
  `,
})
export class UserComponent {
  @Input() name = '';
}

```


#### Código final app.component.ts (principal) 

1. Importa UserComponent

2. En su template renderiza todo el componente secundario

3. Le pasa un valor a la prop del componente secundario

```
import {Component} from '@angular/core';
import {UserComponent} from './user.component';

@Component({
  selector: 'app-root',
  template: `
    <app-user name="Simran" />
  `,
  imports: [UserComponent],
})
export class AppComponent {}

```


### Output

Para crear la ruta de comunicación de los componentes secundarios a los principales, utilice el decorador @Output en una propiedad de clase y asígnele un valor de tipo EventEmitter

Al trabajar con componentes, puede ser necesario notificar a otros componentes que algo ha sucedido. 

Quizás se haya hecho clic en un botón, se haya agregado o eliminado un elemento de una lista o se haya producido alguna otra actualización importante. 

#### En este escenario, los componentes deben comunicarse con los componentes principales.

Angular utiliza el decorador @Output para habilitar este tipo de comportamiento.


1. Define Output prop en componente secundario 

Usa un constructor EventEmitter<typeX>


2. Define una función: usa this para que el objeto lo reemplaze

Define una función

##### Llama a la prop Output incrementCountEvent y le pasa el tipo definido que era number: count es un +1

##### Con emit le pasa el tipo de la prop: incrementCountEvent.emit(this.count);


child.component.ts 

```
@Component({...})
class ChildComponent {
    @Output() incrementCountEvent = new EventEmitter<number>();
}

```

Ahora el componente puede generar eventos que el componente principal puede escuchar.

Active/Trigger los eventos llamando al método de emisión:

child.component.ts 

```
class ChildComponent {
    ...
    onClick() {
        this.count++;
        this.incrementCountEvent.emit(this.count);
    }
}

```

La función de emit generará un evento con el mismo tipo que la instancia EventEmitter.


#### Código final child.component.ts (secundario)

1. Importa los decoradores 

##### Función propia definida en la lógica de clase:

2. Define en su template un botón con un evento y una función propia que la vemos definida en la lógica de clase

3. Tiene como propiedad a Output con un emiter de tipo string

##### Define una propiedad una función que usa la prop Output addItemEvent y le pasa un string icon

##### Con emit le pasa el valor del tipo definido. 

```
import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  styles: `.btn { padding: 5px; }`,
  template: `
    <button class="btn" (click)="addItem()">Add Item</button>
  `,
})
export class ChildComponent {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}

```

##### El componente secundario quiere pasar/notificar/comunicar un evento string


#### Código final app.component.ts (principal)

1. Importa el componente secundario

##### Renderización con nombre de selector 

2. Lo renderiza usando el nombre de su selector

3. Usa addItemEvent (Output prop del componente secundario)

4. Su valor será la función la función (propia?) addItem con el param $event

5. Define un array (items)

6. Define una función addItem que toma un param (item) de tipo string

7. Usa this para referirse a las props definidas en la clase. 


```
import {Component} from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
  selector: 'app-root',
  template: `
    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>
  `,
  imports: [ChildComponent],
})
export class AppComponent {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}

```

##### El componente principal renderiza app-child que tenia un emmiter, un botón y su func.

Le pasa una prop (sin input) como entrada a su emmiter 




### Binding avanzado: función parametro y valor 

```
<app-child (addItemEvent)="addItem($event)" />

```

(addItemEvent) es una función/objeto de evento definida en el componete

"addItem($event)" es un su valor que a su vez es otra función con un param

(?)

##### Pasa un evento (no prop) en componente que tenía evento() en un elemento btn

```
<app-child (addItemEvent)="addItem($event)" />

````


### Lógica de las estructuras de datos: Bucles

#### Conjunto de datos
 
Definen un objeto como items (conjunto datos) como array u diccionario


#### Unidad de dato

Usa una función y métodos para analizar esa estructura

Guarda cada elemento en una unidad como item (dato)



## Deferrable Views/Vistas diferibles

A veces, en el desarrollo de aplicaciones, terminas con muchos componentes a los que necesitas hacer referencia en tu aplicación, pero algunos de ellos no necesitan cargarse de inmediato por diversas razones.

Quizás estén debajo del pliegue visible/visible fold o sean componentes pesados ​​con los que no se interactúa hasta más tarde. 

En ese caso, podemos cargar algunos de esos recursos más tarde con vistas diferibles.

Aprenderás a usar vistas diferibles para diferir la carga de una sección de tu plantilla de componente.


### 1. Añade un bloque @defer alrededor del componente de comentarios.

En tu aplicación, la página de la entrada del blog tiene un componente de comentarios después de los detalles de la entrada.

Envuelve el componente de comentarios con un bloque @defer para aplazar su carga.

```
@defer { 

  <comments />
  
}

```

El código anterior es un ejemplo de cómo usar un bloque @defer básico. 

Por defecto, @defer cargará el componente de comentarios cuando el navegador esté inactivo.


### 2. Añadir un marcador de posición/placeholder 

Añade un bloque @placeholder al bloque @defer. 

#### El bloque @placeholder es donde se coloca el HTML que se mostrará antes de que comience la carga diferida. 

El contenido de los bloques @placeholder se carga con anticipación.

```
@defer { 

  <comments />  // Componente/lógica 
  
} @placeholder {

  <p>Comentarios futuros</p>  // HTML 
  
}

```


### 3. Añadir un bloque de carga

Añadir un bloque @loading al bloque @defer. 

El bloque @loading es donde se coloca el HTML que se mostrará mientras se obtiene el contenido diferido, pero aún no ha finalizado. 

El contenido de los bloques @loading se carga con avidez.


```
@defer { 

  <comments />
 
} @placeholder { 
  
  <p>Futuros comentarios</p>
    
} @loading { 
    
  <p>Cargando comentarios...</p>
   
}

```


### 4. Añadir una duración mínima

Las secciones @placeholder y @loading tienen parámetros opcionales para evitar parpadeos durante la carga rápida. 

@placeholder tiene un mínimo y @loading tiene un mínimo y después. 

Añade una duración mínima al bloque @loading para que se renderice durante al menos 2 segundos.

```
@defer { 

  <comments />
  
} @placeholder { 

  <p>Future comments</p>
  
} @loading (minimum 2s) { 

  <p>Loading comments...</p>
  
}

```


### 5. Añadir un disparador/Activador (trigger) de ventana gráfica

Las vistas diferibles tienen varias opciones de activación (trigger options). 

Añade un disparador de ventana gráfica para que el contenido se aplace al entrar en la ventana gráfica.

```
@defer (on viewport) { 

  <comments />
  
}

```


### 6. Añadir contenido

#### Un disparador de ventana gráfica es ideal para aplazar contenido que se encuentra en una posición tan avanzada en la página que es necesario desplazarse para verlo. 

Añadamos contenido a nuestra entrada de blog. 

Puedes escribir el tuyo propio o copiar el contenido a continuación y colocarlo dentro del elemento <article>. 

```
<article>
  <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
  <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted. In fact, I think I'll say these exact same things again a few times.</p>
  <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
  <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted. In fact, I think I'll say these exact same things again a few times.</p>
  <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
  <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted.</p>
</article>

```

Una vez que hayas agregado este código, desplázate hacia abajo para ver la carga de contenido diferido una vez que lo desplaces hacia la ventana gráfica.


Puedes hacer aún más con ellas, como diferentes disparadores, precarga y bloques @error.

Para saber más, consulta la documentación sobre vistas diferibles.


### Código inicial componente secundario 

app/comments.components.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'comments',
  template: `
    <ul>
      <li>Building for the web is fantastic!</li>
      <li>The new template syntax is great</li>
      <li>I agree with the other comments!</li>
    </ul>
  `,
})
export class CommentsComponent {}

```


### Código final componente secundario

```
import {Component} from '@angular/core';

@Component({
  selector: 'comments',
  template: `
    <ul>
      <li>Building for the web is fantastic!</li>
      <li>The new template syntax is great</li>
      <li>I agree with the other comments!</li>
    </ul>
  `,
})
export class CommentsComponent {}

```


### Código inicial componente principal 

app/app.components.ts 

```
import {Component} from '@angular/core';
import {CommentsComponent} from './comments.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article></article>
      <comments />
    </div>
  `,
  imports: [CommentsComponent],
})
export class AppComponent {}

``` 


### Código final componente principal

```
import {Component} from '@angular/core';
import {CommentsComponent} from './comments.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted.
        </p>
      </article>

      @defer (on viewport) {
      <comments />
      } @placeholder {
      <p>Future comments</p>
      } @loading (minimum 2s) {
      <p>Loading comments...</p>
      }
    </div>
  `,
  imports: [CommentsComponent],
})
export class AppComponent {}

```


# Optimizar imágenes 

Las imágenes son una parte importante de muchas aplicaciones y pueden contribuir significativamente a problemas de rendimiento, incluyendo puntuaciones bajas en Core Web Vitals.

La optimización de imágenes puede ser un tema complejo, pero Angular se encarga de la mayor parte mediante la directiva NgOptimizedImage.

Nota: Obtén más información sobre la optimización de imágenes con NgOptimizedImage en la guía detallada.


### 1. Importar la directiva NgOptimizedImage

Para aprovechar la directiva NgOptimizedImage, primero impórtela desde la biblioteca @angular/common y añádala a la matriz de importaciones del componente.

```
import { NgOptimizedImage } from '@angular/common';
@Component({
  imports: [NgOptimizedImage],
  ...
})

```


### 2. Actualice el atributo srcat a ngSrc.

Para habilitar la directiva NgOptimizedImage, sustituya el atributo src por ngSrc. 

#### Esto aplica tanto a fuentes de imágenes estáticas (es decir, src) como dinámicas (es decir, [src]).

```
import { NgOptimizedImage } from '@angular/common';
@Component({
template: `     ...
    <li>
      Static Image:
      <img ngSrc="/assets/logo.svg" alt="Angular logo" width="32" height="32" />
    </li>
    <li>
      Dynamic Image:
      <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
    </li>
    ...
  `,
imports: [NgOptimizedImage],
})

```


### 3. Añadir atributos de ancho y alto

Tenga en cuenta que, en el ejemplo de código anterior, cada imagen tiene atributos de ancho y alto. 

Para evitar cambios en el diseño, la directiva NgOptimizedImage requiere ambos atributos de tamaño en cada imagen.

Si no puede o no desea especificar un alto y un ancho estáticos para las imágenes, puede usar el atributo fill para que la imagen actúe como una "imagen de fondo", rellenando el elemento que la contiene. 

```
<div class="image-container"> //Container div has 'position: "relative"'
  <img ngSrc="www.example.com/image.png" fill />
</div>

```

#### NOTA: Para que la imagen de relleno se represente correctamente, su elemento padre debe tener el estilo: posición: "relativa", position: "fixed" o position: "absolute".


### 4. Priorizar imágenes importantes

#### Una de las optimizaciones más importantes para el rendimiento de carga es priorizar cualquier imagen que pueda ser el "elemento LCP", que es el elemento gráfico más grande en pantalla al cargar la página. 

Para optimizar los tiempos de carga, asegúrese de agregar el atributo de prioridad a su "imagen principal" o a cualquier otra imagen que considere que pueda ser un elemento LCP. 

```
<img ngSrc="www.example.com/image.png" height="600" width="800" priority />

```


### 5. Opcional: Usar un cargador de imágenes/loader/uploader

NgOptimizedImage permite especificar un cargador de imágenes, que indica a la directiva cómo formatear las URL de las imágenes. 

Usar un cargador permite definir las imágenes con URL cortas y relativas: 

```
providers: [
  provideImgixLoader('https://my.base.url/'),
]

```

La URL final será 'https://my.base.url/image.png'

```
<img ngSrc="image.png" height="600" width="800" />

```

Los cargadores de imágenes no solo son prácticos: permiten aprovechar al máximo las capacidades de NgOptimizedImage. 

Obtenga más información sobre estas optimizaciones y los cargadores integrados para las CDN más populares aquí.


Tus imágenes ahora se cargan siguiendo las mejores prácticas con la ayuda de Angular 


### Código inicial componente principal 

app/user.component.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img src="/assets/logo.svg" alt="Angular logo" />
      </li>
      <li>
        Dynamic Image:
        <img [src]="logoUrl" [alt]="logoAlt" />
      </li>
    </ul>
  `,
  imports: [],
})
export class UserComponent {
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}

```


### Código final componente principal 

```
import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/assets/logo.svg" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
  `,
  imports: [NgOptimizedImage],
})
export class UserComponent {
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}

```



## Routing/Rutas

En la mayoría de las aplicaciones, llega un momento en que se requiere más de una página. 

Cuando llega ese momento, el enrutamiento se convierte en una parte importante del rendimiento para los usuarios.


Más información sobre el enrutamiento en la guía detallada.

En esta actividad, aprenderás a configurar tu aplicación para usar Angular Router.


### 1. Cree un archivo app.routes.ts

Dentro de app.routes.ts, realice los siguientes cambios:

1. Importe Routes desde el paquete @angular/router.

2. Exporte una constante llamada "routes" de tipo "Routes" y asígnele el valor ```[]```.

```
import {Routes} from '@angular/router';
export const routes: Routes = [];

```


### 2. Añadir enrutamiento/routing al proveedor/provider

En app.config.ts, configure la aplicación para Angular Router siguiendo estos pasos:


1. Importe la función provideRouter desde @angular/router.

2. Importe las rutas desde ./app.routes.ts.

3. Llame a la función provideRouter con las rutas pasadas como argumento en la matriz de proveedores.

```
import {ApplicationConfig} from '@angular/core';

import {provideRouter} from '@angular/router';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};

```


### 3. Importar RouterOutlet en el componente

Finalmente, para asegurar que tu aplicación esté lista para usar el enrutador Angular, debes indicarle dónde esperas que el enrutador muestre el contenido deseado. 

Para ello, usa la directiva RouterOutlet de @angular/router.


Actualiza la plantilla de AppComponent añadiendo <router-outlet /> 

```
import {RouterOutlet} from '@angular/router';
@Component({
  ...
template: `     <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
    <router-outlet />
  `,
imports: [RouterOutlet],
})
export class AppComponent {}

```

La app ya estará configurada para usar Angular Router 


### Código inicial componente app/app.routes.ts

```
// type code 

```


### Código inicial componente app/app.component.ts

```
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
  `,
  imports: [RouterOutlet],
})
export class AppComponent {}

```


### Código inicial componente app/app.config.ts

```
import {ApplicationConfig} from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [],
};

```


### Código final componente app/app.routes.ts

```
import {Routes} from '@angular/router';

export const routes: Routes = [];

```


### Código final componente app/app.component.ts

```
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
    <router-outlet />
  `,
  imports: [RouterOutlet],
})
export class AppComponent {}

```


### Código final componente app/app.config.ts

```
import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};

```


## Definir Rutas 

Ahora que has configurado la aplicación para usar Angular Router, necesitas definir las rutas.


Más información sobre cómo definir una ruta básica en la guía detallada.

En esta actividad, aprenderás a agregar y configurar rutas con tu aplicación.


### 1. Define una ruta en app.routes.ts

En tu aplicación, hay dos páginas para mostrar: (1) Página de inicio y (2) Página de usuario.


Para definir una ruta, añade un objeto de ruta/route object a la matriz de rutas en app.routes.ts que contenga:

1. La ruta/path de la ruta/route (que comienza automáticamente en la ruta raíz/route path ```[es decir, /]```)

2. El componente que quieres que muestre la ruta

```
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

```

El código anterior es un ejemplo de cómo se puede añadir HomeComponent como ruta. 

Ahora, implemente esto junto con UserComponent en el editor. 


Use "user" como ruta/path de UserComponent.


### 2. Añadir título a la definición de ruta

Además de definir las rutas correctamente, Angular Router también permite establecer el título de la página cuando los usuarios navegan añadiendo la propiedad title a cada ruta.


En app.routes.ts, añade la propiedad title a la ruta predeterminada (path: '') y a la ruta del usuario. 

Aquí tienes un ejemplo.

```
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
{
path: '',
title: 'App Home Page',
component: HomeComponent,
},
];

```

Ahora se han definido y configurado rutas en la app


### Código inicial app/app.routes.ts 

```
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';

export const routes: Routes = [];

```


### Código inicial app/home/home.component.ts 

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>Home Page</div>
  `,
})
export class HomeComponent {}

```

### Código final app/app.routes.ts 

```
import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: HomeComponent,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: UserComponent,
  },
];

```


### Código final app/home/home.component.ts 

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>Home Page</div>
  `,
})
export class HomeComponent {}

```


## RouterLink para Navegación

En el estado actual de la aplicación, la página completa se actualiza al hacer clic en un enlace interno. 

Si bien esto puede no parecer significativo en una aplicación pequeña, puede afectar el rendimiento en páginas más grandes con más contenido, donde los usuarios deben volver a descargar recursos y ejecutar cálculos.


Nota: Obtén más información sobre cómo agregar rutas a tu aplicación en la guía detallada.

En esta actividad, aprenderás a aprovechar la directiva RouterLink para aprovechar al máximo Angular Router.


### 1. Importar directiva RouterLink

En app.component.ts, agregue la directiva RouterLink import a la declaración import existente de @angular/router y añádala al array de importaciones del decorador de componentes.

```
...
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  imports: [RouterLink, RouterOutlet],
  ...
})

```


### 2. Añadir un routerLink a la plantilla

Para usar la directiva RouterLink, reemplace los atributos href con routerLink. 

Actualice la plantilla con este cambio. 

```
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  ...
  template: `
    ...
    <a routerLink="/">Home</a>
    <a routerLink="/user">User</a>
    ...
  `,
  imports: [RouterLink, RouterOutlet],
})

```

Al hacer clic en los enlaces de la navegación, no deberías ver ningún parpadeo y solo debería cambiar el contenido de la página (es decir, la salida del enrutador/router-outlet).

Esto es el enrutamiento con Angular! 

Es solo la base de la API del enrutador/Router API; para obtener más información, consulta la documentación del enrutador de Angular.


### Código inicial app/app.component.ts

```
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
    <router-outlet />
  `,
  imports: [RouterOutlet],
})
export class AppComponent {}

```


### Código final app/app.component.ts

```
import {Component} from '@angular/core';
import {RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
    </nav>
    <router-outlet />
  `,
  imports: [RouterOutlet, RouterLink],
})
export class AppComponent {}

```


## Forms 

Los formularios son una parte importante de muchas aplicaciones, ya que permiten que acepten la entrada del usuario. 

Aprendamos cómo se gestionan los formularios en Angular.


En Angular, existen dos tipos de formularios: basados ​​en plantillas (template-driven) y reactivos (reactive). 

Aprenderá sobre ambos en las próximas actividades.

Más información sobre los formularios en Angular en la guía detallada.


### 1. Crear un campo de entrada/input field

En user.component.ts, actualice la plantilla añadiendo un campo de entrada de texto con el ID establecido en framework y el tipo establecido en texto.

```
<label for="framework">
  Favorite Framework:
  <input id="framework" type="text" />
</label>

```

### 2. Importar FormsModule

Para que este formulario utilice las funciones de Angular que permiten la vinculación de datos, deberá importar FormsModule.

Importe FormsModule desde @angular/forms y añádalo a la matriz de importaciones del componente Usuario.

```
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
...
imports: [FormsModule],
})
export class UserComponent {}

```
 

### 3. Añadir enlace al valor de la entrada

El FormsModule tiene una directiva llamada ngModel que enlaza el valor de la entrada a una propiedad de la clase.

Actualice la entrada para usar la directiva ngModel, específicamente con la siguiente sintaxis: ```[(ngModel)]="favoriteFramework"``` para enlazarla a la propiedad favoriteFramework. 

```
<label for="framework">
  Favorite Framework:
  <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
</label>

```

Después de realizar los cambios, intenta introducir un valor en el campo de entrada. 

Observa cómo se actualiza en la pantalla.


NOTA: La sintaxis ```[()]``` se conoce como "banana in a box", pero representa un enlace bidireccional: enlace de propiedades y enlace de eventos. 

Más información sobre el enlace bidireccional de datos en la documentación de Angular.


### Código incial app/user.component.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    <label for="framework">Favorite Framework:</label>
  `,
  imports: [],
})
export class UserComponent {
  username = 'youngTech';
  favoriteFramework = '';
}

```


### Código final app/user.component.ts

```
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
  `,
  imports: [FormsModule],
})
export class UserComponent {
  favoriteFramework = '';
  username = 'youngTech';
}

```



## Obtener el valor de un control de formulario

Ahora que tus formularios están configurados con Angular, el siguiente paso es acceder a los valores de los controles.


Más información sobre cómo agregar un control de formulario básico en la guía detallada.

En esta actividad, aprenderás a obtener el valor de la entrada de tu formulario.


### 1. Cómo se muestra el valor del campo de entrada en la plantilla.

Para mostrar el valor de entrada en una plantilla, puede usar la sintaxis de interpolación {{}}, como cualquier otra propiedad de clase del componente.

```
@Component({
  selector: 'app-user',
  template: `
    ...
    <p>Framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
  `,
})
export class UserComponent {
  favoriteFramework = '';
}

```


## 2. Recuperar el valor de un campo de entrada

Para consultar el valor de un campo de entrada en la clase del componente, puede hacerlo accediendo a la propiedad de la clase con la sintaxis ```this```.
 
```
...
@Component({
  selector: 'app-user',
  template: `
    ...
    <button (click)="showFramework()">Show Framework</button>
  `,
  ...
})
export class UserComponent {
  favoriteFramework = '';
  ...
showFramework() {
alert(this.favoriteFramework);
}
}

```

Con esto se mostrarán los valores de entrada en tu plantilla y a acceder a ellos programáticamente!


La siguiente forma de gestionar formularios con Angular: formularios reactivos. 

Si quieres saber más sobre formularios basados ​​en plantillas, consulta la documentación de formularios de Angular.



### Código inicial app/user.component.ts

```
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Framework:</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,
  imports: [FormsModule],
})
export class UserComponent {
  favoriteFramework = '';
  username = 'youngTech';

  showFramework() {}
}

```


### Código final app/user.component.ts

```
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,
  imports: [FormsModule],
})
export class UserComponent {
  favoriteFramework = '';
  username = 'youngTech';

  showFramework() {
    alert(this.favoriteFramework);
  }
}

```


## Formularios Reactivos

Si desea gestionar sus formularios mediante programación en lugar de depender únicamente de la plantilla, los formularios reactivos son la solución.


Más información sobre los formularios reactivos en la guía detallada.

En esta actividad, aprenderá a configurar formularios reactivos. 


### 1. Importar el módulo ReactiveForms

En app.component.ts, importe ReactiveFormsModule desde @angular/forms y añádalo a la matriz de importaciones del componente.

```
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  template: `
    <form>
      <label>Name
        <input type="text" />
      </label>
      <label>Email
        <input type="email" />
      </label>
      <button type="submit">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})

```


### 2. Crear el objeto FormGroup con FormControls

Los formularios reactivos utilizan la clase FormControl para representar los controles del formulario (p. ej., las entradas). 

Angular proporciona la clase FormGroup para agrupar los controles del formulario en un objeto útil que facilita la gestión de formularios grandes a los desarrolladores.


Añadir FormControl y FormGroup a la importación desde @angular/forms para crear un FormGroup para cada formulario, con las propiedades nombre y correo electrónico como FormControls.

```
import {ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
  ...
export class AppComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
}

``` 

### 3. Vincular FormGroup y FormControls al formulario.

Cada FormGroup debe asociarse a un formulario mediante la directiva ```[formGroup]```.


Además, cada FormControl puede asociarse con la directiva formControlName y asignarse a la propiedad correspondiente.

Actualice la plantilla con el siguiente código de formulario.

```
<form [formGroup]="profileForm">
  <label>
    Name
    <input type="text" formControlName="name" />
  </label>
  <label>
    Email
    <input type="email" formControlName="email" />
  </label>
  <button type="submit">Submit</button>
</form>

```


### 4. Gestionar la actualización del formulario

Para acceder a los datos del FormGroup, puede hacerlo accediendo a su valor. 

Actualice la plantilla para mostrar los valores del formulario:

```
  ...
<h2>Profile Form</h2>
<p>Name: {{ profileForm.value.name }}</p>
<p>Email: {{ profileForm.value.email }}</p>

``` 


### 5. Acceder a los valores de FormGroup

Agregue un nuevo método a la clase del componente llamado handleSubmit, que posteriormente usará para gestionar el envío del formulario. 

Este método mostrará los valores del formulario; puede acceder a ellos desde FormGroup.


En la clase del componente, agregue el método handleSubmit() para gestionar el envío del formulario.

```
handleSubmit() {
  alert(
    this.profileForm.value.name + ' | ' + this.profileForm.value.email
  );
}

```


### 6. Añade ngSubmit al formulario

Ya tienes acceso a los valores del formulario. 

Ahora es el momento de gestionar el evento de envío y usar el método handleSubmit. 

Angular cuenta con un controlador de eventos para este propósito específico llamado ngSubmit. 

Actualiza el elemento del formulario para llamar al método handleSubmit al enviar el formulario.

```
<form
  [formGroup]="profileForm"
  (ngSubmit)="handleSubmit()">

```
 
Así se trabaja con reactive forms. 


Lo siguiente es la validación de formularios.


### Código inicial app/app.component.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form>
      <label>
        Name
        <input type="text" formControlName="name" />
      </label>
      <label>
        Email
        <input type="email" formControlName="email" />
      </label>
      <button type="submit">Submit</button>
    </form>
  `,
  imports: [],
})
export class AppComponent {}

```


### Código final app/app.component.ts

```
import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <input type="text" formControlName="name" />
      <input type="email" formControlName="email" />
      <button type="submit">Submit</button>
    </form>

    <h2>Profile Form</h2>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
  `,
  imports: [ReactiveFormsModule],
})
export class AppComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}

```



## Validación de formularios

Otra situación común al trabajar con formularios es la necesidad de validar las entradas para garantizar que se envíen los datos correctos.


Más información sobre la validación de las entradas de formularios en la guía detallada.


### 1. Validadores de importación

Angular ofrece un conjunto de herramientas de validación. 

Para usarlas, primero actualice el componente para importar los validadores desde @angular/forms.

```
import {ReactiveFormsModule, Validators} from '@angular/forms';
@Component({...})
export class AppComponent {}

```


### 2. Añadir validación al formulario

A cada FormControl se le pueden pasar los validadores que desee usar para validar los valores del FormControl. 

Por ejemplo, si desea que el campo de nombre en el formulario de perfil sea obligatorio, utilice Validators.required. 

Para el campo de correo electrónico en nuestro formulario de Angular, queremos asegurarnos de que no esté vacío y que siga una estructura de dirección de correo electrónico válida. 

Podemos lograrlo combinando los validadores Validators.required y Validators.email en un array. Actualice el nombre y el correo electrónico del FormControl. 

```
profileForm = new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
});

```


### 3. Comprobar la validación del formulario en la plantilla

Para determinar si un formulario es válido, la clase FormGroup tiene una propiedad válida. 

Puede usar esta propiedad para vincular atributos dinámicamente.

Actualice el botón de envío para que se active según la validez del formulario. 

```
<button type="submit" [disabled]="!profileForm.valid">Submit</button>

```

Estos son conceptos básicos de la validación con formularios reactivos.



### Código inicial app/app.components.ts

```
import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="profileForm">
      <input type="text" formControlName="name" name="name" />
      <input type="email" formControlName="email" name="email" />
      <button type="submit">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class AppComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
}

```


### Código final de app/app.components.ts

```
import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="profileForm">
      <input type="text" formControlName="name" name="name" />
      <input type="email" formControlName="email" name="email" />
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class AppComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}

```


## Servicio inyectable 

La inyección de dependencias (ID) en Angular es una de las funciones más potentes del framework. 

#### Considérese la inyección de dependencias como la capacidad de Angular de proporcionar los recursos necesarios para la aplicación en tiempo de ejecución. 

Una dependencia puede ser un servicio u otros recursos.


Más información sobre la inyección de dependencias en la guía básica.

Aprenderá a crear un servicio inyectable.


#### Una forma de usar un servicio es interactuar con datos y API. 

#### Para que un servicio sea reutilizable, se debe conservar la lógica del servicio y compartirla en toda la aplicación cuando sea necesario.


#### Para que un servicio pueda ser inyectado por el sistema DI, utilice el decorador @Injectable. 

Por ejemplo:

```
@Injectable({
    providedIn: 'root'
})
class UserService {
    // methods to retrieve and return data
}

```

#### El decorador @Injectable notifica al sistema DI que el UserService está disponible para ser solicitado en una clase. providedIn define el ámbito en el que este recurso está disponible. 

#### Por ahora, basta con entender que providedIn: 'root' significa que el UserService está disponible para toda la aplicación.


### 1. Añade el decorador @Injectable

Actualiza el código en car.service.ts añadiendo el decorador @Injectable.


### 2. Configurar el decorador

Los valores del objeto pasados ​​al decorador se consideran la configuración del decorador.

Actualiza el decorador @Injectable en car.service.ts para incluir la configuración de providedIn: 'root'.


CONSEJO: Usa el ejemplo anterior para encontrar la sintaxis correcta.

Listo. Ese servicio ya es inyectable y puede participar en la diversión. 

Ahora que el servicio es inyectable, intentemos inyectarlo en un componente.


### Código inicial app/car.service.ts

```
import {Injectable} from '@angular/core';

export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}

```


### Código final app/car.service.ts

```
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}

``` 


### Código inicial app/app.component.ts

```
import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: '<p> {{ carService.getCars() }} </p>',
})
export class AppComponent {
  carService = inject(CarService);
}

``` 

### Código final app/app.component.ts

```
import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: '<p> {{ carService.getCars() }} </p>',
})
export class AppComponent {
  carService = inject(CarService);
}

``` 
 


## Inyección de dependencias basada en inyección

Crear un servicio inyectable es la primera parte del sistema de inyección de dependencias (ID) en Angular. 

¿Cómo se inyecta un servicio en un componente? 

Angular cuenta con una práctica función llamada inject() que puede usarse en el contexto adecuado.


NOTA: Los contextos de inyección quedan fuera del alcance de este tutorial, pero puedes obtener más información en la guía básica de inyección de dependencias (ID) y la guía de contextos de ID.

Aprenderás a inyectar un servicio y a usarlo en un componente.


Suele ser útil inicializar las propiedades de clase con los valores proporcionados por el sistema de ID. 

Aquí tienes un ejemplo.

```
@Component({...})
class PetCareDashboardComponent {
    petRosterService = inject(PetRosterService);
}

```


### 1. Inyectar CarService

En app.component.ts, usando la función inject(), se inyecta CarService y se asigna a una propiedad llamada carService.

NOTA: Observe la diferencia entre la propiedad carService y la clase CarService. 


### 2. Usar la instancia de carService

Al llamar a inject(CarService), se obtuvo una instancia de CarService que puede usar en su aplicación, almacenada en la propiedad carService.

En la función constructora de AppComponent, agregue la siguiente implementación:

```
constructor() {
    this.display = this.carService.getCars().join(' ⭐️ ');
}

```


### 3. Actualizar la plantilla AppComponent

Actualice la plantilla del componente en app.component.ts con el siguiente código:

```
template: `<p>Car Listing: {{ display }}</p>`,

```

Acabas de inyectar tu primer servicio en un componente.


Hay una sintaxis alternativa para inyectar recursos en tus componentes.


### Código inicial app/car.service.ts

```
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}

```


### Código final app/car.service.ts

```
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}

```


### Código inicial app/app.component.ts

```
import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: ` `,
})
export class AppComponent {
  display = '';

  constructor() {}
}

```


### Código final app/app.component.ts

```
import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: `
    <p>Car Listing: {{ display }}</p>
  `,
})
export class AppComponent {
  display = '';
  carService = inject(CarService);

  constructor() {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
}

```



## Inyección de dependencias basada en constructor

En actividades anteriores, usaste la función inject() para habilitar recursos, "proporcionándolos" a tus componentes. 

La función inject() es un patrón, y es útil saber que existe otro patrón para inyectar recursos llamado inyección de dependencias basada en constructor.


Especificas los recursos como parámetros de la función constructora de un componente. 

Angular los habilita para tu componente.


Más información sobre la inyección de servicios en la guía detallada.

En esta actividad, aprenderás a usar la inyección de dependencias basada en constructor.


Para inyectar un servicio u otro recurso en tu componente, usa la siguiente sintaxis. 

```
@Component({...})
class PetCarDashboardComponent {
    constructor(private petCareService: PetCareService) {
        ...
    }
}

```

Hay algunas cosas a tener en cuenta:

1. Usa la palabra clave privada.

2. petCareService se convierte en una propiedad que puedes usar en tu clase.

3. La clase PetCareService es la clase inyectada.

Muy bien, ahora prueba esto:


### 1. Actualiza el código para usar DI basada en constructor.

En app.component.ts, actualiza el código del constructor para que coincida con el siguiente:

```
constructor(private carService: CarService) {
    this.display = this.carService.getCars().join(' ⭐️ ');
}

```

El código de ejemplo funciona igual que con la función "inject". 

Si bien ambos enfoques son prácticamente iguales, existen pequeñas diferencias que escapan al alcance de este tutorial.


### Código inicial app/car.service.ts 

```
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}

```


### Código final app/car.service.ts 

```
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}

```



### Código inicial app/app.component.ts 

```
import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: `
    <p>Car Listing: {{ display }}</p>
  `,
})
export class AppComponent {
  display = '';

  constructor() {}
}

```


### Código final app/app.component.ts 

```
import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: `
    <p>Car Listing: {{ display }}</p>
  `,
})
export class AppComponent {
  private carService = inject(CarService);

  display = this.carService.getCars().join(' ⭐️ ');
}

```


## Pipes

Las pips son funciones que se utilizan para transformar datos en plantillas. 

En general, son funciones puras que no tienen efectos secundarios. 

Angular cuenta con varias tuberías integradas útiles que puedes importar y usar en tus componentes. 

También puedes crear una tubería personalizada.


Más información sobre pipes en la guía detallada.

En esta actividad, importarás una tubería y la usarás en la plantilla.


Para usar una tubería en una plantilla, inclúyela en una expresión interpolada. 

Consulta este ejemplo.

```
import {UpperCasePipe} from '@angular/common';
@Component({
...
template: `{{ loudMessage | uppercase }}`,
imports: [UpperCasePipe],
})
class AppComponent {
loudMessage = 'we think you are doing great!'
}

```


### 1. Importar la pipe LowerCase

Primero, actualice app.component.ts agregando la importación a nivel de archivo para LowerCasePipe desde @angular/common.

```
import { LowerCasePipe } from '@angular/common';

```


### 2. Agregue la tubería a las importaciones de la plantilla.

A continuación, actualice las importaciones del decorador @Component() para incluir una referencia a LowerCasePipe.

```
@Component({
    ...
    imports: [LowerCasePipe]
})

```


### 3. Añade la barra vertical a la plantilla.

Por último, en app.component.ts, actualiza la plantilla para incluir la barra vertical en minúsculas.

```
template: `{{username | lowercase }}`

```

Las tuberías también aceptan parámetros que permiten configurar su salida. 


### Código inicial app/app.component.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{ username }}
  `,
  imports: [],
})
export class AppComponent {
  username = 'yOunGTECh';
}

```


### Código final app/app.component.ts

```
import {Component} from '@angular/core';
import {LowerCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    {{ username | lowercase }}
  `,
  imports: [LowerCasePipe],
})
export class AppComponent {
  username = 'yOunGTECh';
}

```



## Formateo de datos con tuberías

Puedes optimizar el uso de tuberías configurándolas. 

Las tuberías se pueden configurar pasándoles opciones.


Más información sobre el formateo de datos con tuberías en la guía detallada.

En esta actividad, trabajarás con algunas tuberías y sus parámetros.


Para pasar parámetros a una tubería, usa la sintaxis : seguida del valor del parámetro. 

Aquí tienes un ejemplo.

```
template: `{{ date | date:'medium' }}`;

```

El resultado es el 15 de junio de 2015, 21:43:11.


Es hora de personalizar la salida de la tubería (pipe output):


### 1. Formatear un número con DecimalPipe

En app.component.ts, actualice la plantilla para incluir el parámetro de barra decimal. 

```
template: `
    ...
    <li>Number with "decimal" {{ num | number:"3.2-2" }}</li>
`

```

NOTA: ¿Cuál es el formato? 

El parámetro de DecimalPipe se llama digitsInfo y usa el formato: {minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}


### 2. Formatear una fecha con DatePipe

Ahora, actualice la plantilla para usar la barra de fecha. 

```
template: `
    ...
    <li>Date with "date" {{ birthday | date: 'medium' }}</li>
`

```

Para mayor diversión, prueba diferentes parámetros para la fecha. 

Puedes encontrar más información en la documentación de Angular.


### 3. Formatear una moneda con CurrencyPipe

Para su última tarea, actualice la plantilla para usar el canal de divisas.

```
template: `
    ...
    <li>Currency with "currency" {{ cost | currency }}</li>
`

```

También puedes probar diferentes parámetros para la moneda. 


Hay aún más tuberías integradas que puedes usar en tus aplicaciones. 

Puedes encontrar la lista en la documentación de Angular.

Si las tuberías integradas no cubren tus necesidades, también puedes crear una tubería personalizada. Consulta la siguiente lección para obtener más información.

 
### Código inicial app/app.component.ts

```
import {Component} from '@angular/core';
import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>Number with "decimal" {{ num }}</li>
      <li>Date with "date" {{ birthday }}</li>
      <li>Currency with "currency" {{ cost }}</li>
    </ul>
  `,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
})
export class AppComponent {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}

```


### Código final app/app.component.ts

```
import {Component} from '@angular/core';
import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>Number with "decimal" {{ num | number : '3.2-2' }}</li>
      <li>Date with "date" {{ birthday | date : 'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
  `,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
})
export class AppComponent {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}

```



## Custom pipe

Puedes crear tuberías personalizadas en Angular que se ajusten a tus necesidades de transformación de datos.

Más información sobre cómo crear tuberías personalizadas en la guía detallada.


Una tubería es una clase de TypeScript con el decorador @Pipe.

Aquí tienes un ejemplo.

```
import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'star',
})
export class StarPipe implements PipeTransform {
  transform(value: string): string {
    return `⭐️ ${value} ⭐️`;
  }
}

```

StarPipe acepta un valor de cadena y lo devuelve con estrellas alrededor. 

Ten en cuenta que:

1. El nombre en la configuración del decorador @Pipe es lo que se usará en la plantilla.

2. La función de transformación es donde colocas tu lógica.

Crearás ReversePipe.


### 1. Crear ReversePipe

En reverse.pipe.ts, agregue el decorador @Pipe a la clase ReversePipe y proporcione la siguiente configuración.

```
@Pipe({
    name: 'reverse'
})

```


### 2. Implementar la función de transformación

Ahora la clase ReversePipe es una tubería. 

Actualice la función de transformación para añadir la lógica de inversión.

```
export class ReversePipe implements PipeTransform {
    transform(value: string): string {
        let reverse = '';
        for (let i = value.length - 1; i >= 0; i--) {
            reverse += value[i];
        }
        return reverse;
    }
}

```


### 3. Usar ReversePipe en la plantilla

Una vez implementada la lógica de la tubería, el último paso es usarla en la plantilla. 

En app.component.ts, incluya la tubería en la plantilla y añádala a las importaciones del componente.

```
@Component({
    ...
    template: `Reverse Machine: {{ word | reverse }}`
    imports: [ReversePipe]
})

```


### Código inicial app/app.component.ts 

```
import {Component} from '@angular/core';
import {ReversePipe} from './reverse.pipe';

@Component({
  selector: 'app-root',
  template: `
    Reverse Machine: {{ word }}
  `,
  imports: [],
})
export class AppComponent {
  word = 'You are a champion';
}

```


### Código final  app/app.component.ts 

```
import {Component} from '@angular/core';
import {ReversePipe} from './reverse.pipe';

@Component({
  selector: 'app-root',
  template: `
    Reverse Machine: {{ word | reverse }}
  `,
  imports: [ReversePipe],
})
export class AppComponent {
  word = 'You are a champion';
}

```


### Código inicial app/reverse.pipe.ts 

```
import {Pipe, PipeTransform} from '@angular/core';

export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return '';
  }
}

```


### Código final app/reverse.pipe.ts 

```
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    let reverse = '';

    for (let i = value.length - 1; i >= 0; i--) {
      reverse += value[i];
    }

    return reverse;
  }
}

```



# Angular Essentials

Se espera que esté familiarizado con HTML, CSS y TypeScript. 

En particular, debe estar familiarizado con los siguientes conceptos:

1. Clases de JavaScript

2. Fundamentos de TypeScript

3. Decoradores de TypeScript


### Clases de JavaScript

Las clases son una forma de definir objetos y su comportamiento. 

Aunque JavaScript es un lenguaje basado en prototipos, las clases ofrecen una sintaxis más clara y familiar para quienes vienen de lenguajes como Java, C++ o Python.

Desde ECMAScript 2015 (ES6), JavaScript introdujo la palabra clave class.


Una clase es una plantilla para crear objetos. 

Define las propiedades y métodos que los objetos tendrán.

```
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Crear una instancia
const persona1 = new Persona("Ana", 30);
persona1.saludar(); // Hola, me llamo Ana y tengo 30 años.

```

constructor: Método especial que se ejecuta al crear una instancia. Se usa para inicializar propiedades.

Métodos: Se definen dentro del cuerpo de la clase sin la palabra clave function.

Instancia: Se crea usando new.


Herencia

Las clases pueden heredar de otras usando extends:

```
class Estudiante extends Persona {
  constructor(nombre, edad, carrera) {
    super(nombre, edad); // llama al constructor de la clase padre
    this.carrera = carrera;
  }

  estudiar() {
    console.log(`${this.nombre} está estudiando ${this.carrera}.`);
  }
}

const estudiante1 = new Estudiante("Luis", 22, "Ingeniería");
estudiante1.saludar();   // Heredado de Persona
estudiante1.estudiar();  // Método propio

```


Características adicionales:

Clases son funciones en su base (internamente, typeof Clase === 'function').

Soportan métodos estáticos con static, que se llaman desde la clase y no desde una instancia.

Soportan encapsulamiento parcial con #propiedad para campos privados (ES2022 en adelante).

```
class Cuenta {
  #saldo = 0;

  depositar(monto) {
    this.#saldo += monto;
  }

  verSaldo() {
    return this.#saldo;
  }
}

```


### Fundamentos de TypeScript

TypeScript es un superset de JavaScript.

Añade tipado estático y otras características útiles. 

Se compila a JavaScript, por lo que los navegadores y Node.js pueden ejecutarlo sin problemas.


Beneficios: 

1. Detecta errores en tiempo de compilación.

2. Mejora el autocompletado y la documentación en editores como VS Code.

3. Facilita el mantenimiento de proyectos grandes.

4. Permite usar características modernas de JavaScript antes de que estén ampliamente soportadas


Tipado estático: 

```
let edad: number = 30;
let nombre: string = "Ana";
let activo: boolean = true;

```


Inferencia de tipos:

No siempre necesitas declarar el tipo explícitamente

```
let mensaje = "Hola mundo"; // TypeScript infiere que es string

```


Funciones con tipos:

```
function sumar(a: number, b: number): number {
  return a + b;
}

```


Interfaces:

Definen la forma de un objeto:

```
interface Persona {
  nombre: string;
  edad: number;
}

const persona: Persona = {
  nombre: "Luis",
  edad: 25
};

```


Tipos personalizados (Type alias):

```
type ID = string | number;

let usuarioId: ID = 123;
usuarioId = "abc"; // válido

```


Clases con tipado:

```
class Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  hablar(): void {
    console.log(`${this.nombre} hace un ruido.`);
  }
}

```


Generics:

Permiten escribir funciones y clases reutilizables con tipos flexibles:

```
function identidad<T>(valor: T): T {
  return valor;
}

const id1 = identidad<string>("hola");
const id2 = identidad<number>(123);

```

string o number toma el lugar de T de la definición. 


Tipos utilitarios:

TypeScript ofrece tipos predefinidos como:

1. Partial<T>: hace que todas las propiedades sean opcionales.

2. Readonly<T>: evita modificaciones.

3. Record<K, T>: crea objetos con claves de tipo K y valores de tipo T.


### Decoradores de TypeScript

Característica avanzada que permite anotar y modificar clases, métodos, propiedades y parámetros en tiempo de diseño. 

Son similares a los decoradores en lenguajes como Python o las anotaciones en Java.


Están en fase experimental y requieren habilitar la opción experimentalDecorators en el archivo tsconfig.json.

En tsconfig.json:

```
{
  "compilerOptions": {
    "target": "ES6",
    "experimentalDecorators": true
  }
}

```


Decorador:

Es una función que recibe información sobre la declaración decorada y puede modificar su comportamiento.


1. Decorador de clase:

```
function Logger(constructor: Function) {
  console.log(`Clase creada: ${constructor.name}`);
}

@Logger
class Persona {
  constructor(public nombre: string) {}
}

```

Esto imprime el nombre de la clase cuando se define.


2. Decorador de método:

```
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Llamando a ${propertyKey} con args: ${args}`);
    return original.apply(this, args);
  };
}

class Calculadora {
  @Log
  sumar(a: number, b: number) {
    return a + b;
  }
}

```

Cada vez que se llame a sumar, se mostrará el log.


3. Decorador de propiedad:

```
function NoNegativo(target: any, propertyKey: string) {
  let valor: number;

  const getter = () => valor;
  const setter = (nuevoValor: number) => {
    if (nuevoValor < 0) {
      throw new Error("No se permiten valores negativos");
    }
    valor = nuevoValor;
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter
  });
}

class Cuenta {
  @NoNegativo
  saldo: number = 0;
}

```


4. Decorador de parámetro

```
function ParamInfo(target: any, methodName: string, parameterIndex: number) {
  console.log(`Parámetro en ${methodName}, índice: ${parameterIndex}`);
}

class Servicio {
  saludar(@ParamInfo mensaje: string) {
    console.log(mensaje);
  }
}

```

Uso comunes:

Validación de datos

Registro/logging

Autorización

Inyección de dependencias (como en Angular)



## Components

Son los componentes principales de las aplicaciones Angular. 

Cada componente representa una parte de una página web más grande. 

Organizar una aplicación en componentes ayuda a estructurar el proyecto, separando claramente el código en partes específicas que son fáciles de mantener y ampliar con el tiempo.


### Definición de un componente

Cada componente consta de varias partes principales:

1. Un @Component decorator que contiene la configuración utilizada por Angular.

2. Una plantilla HTML que controla lo que se renderiza en el DOM.

3. Un selector CSS que define cómo se usa el componente en HTML.

4. Una clase TypeScript con comportamientos, como la gestión de la entrada del usuario o la realización de solicitudes al servidor.


Ejemplo simplificado de un componente UserProfile:

```
// user-profile.ts
@Component({
  selector: 'user-profile',
  template: `
    <h1>User profile</h1>
    <p>This is the user profile page</p>
  `,
})
export class UserProfile { /* Your component code goes here */ }

```


El decorador @Component también acepta opcionalmente una propiedad de estilos para cualquier CSS que desee aplicar a su plantilla:

```
// user-profile.ts
@Component({
  selector: 'user-profile',
  template: `
    <h1>User profile</h1>
    <p>This is the user profile page</p>
  `,
  styles: `h1 { font-size: 3em; } `,
})
export class UserProfile { /* Your component code goes here */ }

```


### Separación de HTML y CSS en archivos independientes

Puede definir el HTML y el CSS de un componente en archivos independientes mediante templateUrl y styleUrl:

TS: 

```
// user-profile.ts
@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.html',
  styleUrl: 'user-profile.css',
})
export class UserProfile {
  // Component behavior is defined in here
}

```

HTML: 

```
<!-- user-profile.html -->
<h1>Use profile</h1>
<p>This is the user profile page</p>

```

CSS: 

```
/* user-profile.css */
h1 {
  font-size: 3em;
}

```


### Uso de componentes

Una aplicación se crea combinando varios componentes. 

Por ejemplo, si crea una página de perfil de usuario, puede dividirla en varios componentes como este. 


```
	UserProfile
	/		   \
UserBiography ProfilePhoto
	|
UserAddress

```

Aquí, el componente UserProfile utiliza varios otros componentes para generar la página final.

Para importar y usar un componente, necesita:

1. En el archivo TypeScript de su componente, agregue una declaración de importación para el componente que desea usar.

2. En su decorador @Component, agregue una entrada a la matriz de importaciones para el componente que desea usar.

3. En la plantilla de su componente, agregue un elemento que coincida con el selector del componente que desea usar.


Un ejemplo de un componente UserProfile que importa un componente ProfilePhoto:

```
// user-profile.ts
import {ProfilePhoto} from 'profile-photo.ts';
@Component({
  selector: 'user-profile',
  imports: [ProfilePhoto],
  template: `
    <h1>User profile</h1>
    <profile-photo />
    <p>This is the user profile page</p>
  `,
})
export class UserProfile {
  // Component behavior is defined in here
}

```

Después de los componentes, es hora de aprender a agregar y gestionar datos dinámicos en nuestra aplicación.



## Signals

En Angular, se usan señales para crear y gestionar el estado. 

Una señal es un contenedor ligero que envuelve un valor.

Usa la función signal para crear una señal que almacene el estado local:

```
import {signal} from '@angular/core';

// Create a signal with the `signal` function.
const firstName = signal('Morgan');

// Read a signal value by calling it— signals are functions.
console.log(firstName());

// Change the value of this signal by calling its `set` method with a new value.
firstName.set('Jaime');

// You can also use the `update` method to change the value
// based on the previous value.
firstName.update(name => name.toUpperCase());

```

1. Crea una señal con la función `signal`.

2. Lee el valor de una señal llamándola (las señales son funciones).

3. Cambia el valor de esta señal llamando a su método `set` con un nuevo valor.

4. También puedes usar el método `update` para cambiar el valor según el valor anterior.


Angular rastrea dónde se leen las señales y cuándo se actualizan. 

El framework utiliza esta información para realizar trabajo adicional, como actualizar el DOM con el nuevo estado. 

Esta capacidad de responder a los valores cambiantes de las señales a lo largo del tiempo se conoce como reactividad.


### Expresiones computadas

Una expresión computada es una señal que genera su valor basándose en otras señales.

```
import {signal, computed} from '@angular/core';

const firstName = signal('Morgan');
const firstNameCapitalized = computed(() => firstName().toUpperCase());

console.log(firstNameCapitalized()); // MORGAN

```

computed signal es de solo lectura; no tiene un método de configuración ni de actualización. 

#### En cambio, su valor cambia automáticamente cuando cambia cualquiera de las señales que lee:

```
import {signal, computed} from '@angular/core';

const firstName = signal('Morgan');
const firstNameCapitalized = computed(() => firstName().toUpperCase());
console.log(firstNameCapitalized()); // MORGAN

firstName.set('Jaime');
console.log(firstNameCapitalized()); // JAIME

```


### Uso de señales en componentes

Utilice signal y computed dentro de sus componentes para crear y gestionar el estado:

```
@Component({/* ... */})
export class UserProfile {
  isTrial = signal(false);
  isTrialExpired = signal(false);
  showTrialDuration = computed(() => this.isTrial() && !this.isTrialExpired());
  
  activateTrial() {
    this.isTrial.set(true);
  }
}

```


Después de declarar y gestionar datos dinámicos, es hora de aprender a usarlos dentro de las plantillas.



## Templates

Usa la sintaxis de plantilla de Angular para crear interfaces de usuario dinámicas.


Las plantillas de componentes no son solo HTML estático.

Pueden usar datos de la clase de tu componente y configurar controladores para la interacción del usuario.


### Mostrar texto dinámico

En Angular, un enlace (binding) crea una conexión dinámica entre la plantilla de un componente y sus datos. 

Esta conexión garantiza que los cambios en los datos del componente actualicen automáticamente la plantilla renderizada.


Puede crear un enlace para mostrar texto dinámico en una plantilla usando llaves dobles.

```
@Component({
  selector: 'user-profile',
  template: `<h1>Profile for {{userName()}}</h1>`,
})
export class TodoListItem {
  userName = signal('pro_programmer_123');
}

```

Cuando Angular renderiza el componente, verás:

```
<h1>Profile for pro_programmer_123</h1>

```

Angular mantiene la vinculación actualizada automáticamente cuando cambia el valor de la señal. 

Siguiendo el ejemplo anterior, si actualizamos el valor de la señal `userName`:

```
this.userName.set('cool_coder_789');

```

La página renderizada se actualiza para reflejar el nuevo valor:

```
<h1>Profile for cool_coder_789</h1>

```


### Configuración de propiedades y atributos dinámicos

Angular permite vincular valores dinámicos a las propiedades del DOM mediante corchetes.

```
@Component({
  /*...*/
  // Set the `disabled` property of the button based on the value of `isValidUserId`.
  template: `<button [disabled]="isValidUserId()">Save changes</button>`,
})
export class UserProfile {
  isValidUserId = signal(false);
}

```

Establecio la propiedad `disabled` del botón en función del valor de `isValidUserId`.


También puedes vincular atributos HTML anteponiendo attr. al nombre del atributo:

```
<!-- Bind the `role` attribute on the `<ul>` element to value of `listRole`. -->
<ul [attr.role]="listRole()">

```

Vincula el atributo `role` del elemento `<ul>` al valor de `listRole`. 


Angular actualiza automáticamente las propiedades y los atributos del DOM cuando cambia el valor enlazado.


### Gestión de la interacción del usuario

Angular permite añadir detectores de eventos a un elemento de la plantilla mediante paréntesis.

```
@Component({
  /*...*/
  // Add an 'click' event handler that calls the `cancelSubscription` method.
  template: `<button (click)="cancelSubscription()">Cancel subscription</button>`,
})
export class UserProfile {
  /* ... */
  cancelSubscription() { /* Your event handling code goes here. */  }
}

```

Añade un controlador de eventos "click" que llame al método "cancelSubscription".

El código de control de eventos va aquí.


#### Si necesita pasar el objeto de evento a su oyente, puede usar la variable $event incorporada de Angular dentro de la llamada de función:

```
@Component({
  /*...*/
  // Add an 'click' event handler that calls the `cancelSubscription` method.
  template: `<button (click)="cancelSubscription($event)">Cancel subscription</button>`,
})
export class UserProfile {
  /* ... */
  cancelSubscription(event: Event) { /* Your event handling code goes here. */  }
}

```


### Controlar el flujo con @if y @for

#### Puedes ocultar y mostrar condicionalmente partes de una plantilla con el bloque @if de Angular.

```
<h1>User profile</h1>
@if (isAdmin()) {
  <h2>Admin settings</h2>
  <!-- ... -->
}

```

El bloque @if también admite un bloque @else opcional:

```
<h1>User profile</h1>
@if (isAdmin()) {
  <h2>Admin settings</h2>
  <!-- ... -->
} @else {
  <h2>User settings</h2>
  <!-- ... -->
}

```


#### Puedes repetir parte de una plantilla varias veces con el bloque @for de Angular:

```
<h1>User profile</h1>
<ul class="user-badge-list">
  @for (badge of badges(); track badge.id) {
    <li class="user-badge">{{badge.name}}</li>
  }
</ul>

```

Angular usa la palabra clave track, como se muestra en el ejemplo anterior, para asociar datos con los elementos DOM creados por @for. 


Ahora que tiene datos dinámicos y plantillas en la aplicación, es hora de aprender cómo mejorar las plantillas ocultando o mostrando condicionalmente ciertos elementos, recorriendo elementos y más.



## Modular design con Dependency Injection

Reutiliza el código y controla el comportamiento en tu aplicación y pruebas.


#### Cuando necesitas compartir lógica entre componentes, Angular aprovecha el patrón de diseño de inyección de dependencias, que te permite crear un "servicio" que permite inyectar código en los componentes y gestionarlo desde una única fuente de información.


### Servicios

Son fragmentos de código reutilizables que se pueden inyectar.

Al igual que la definición de un componente, los servicios se componen de lo siguiente:

1. Un decorador de TypeScript que declara la clase como un servicio Angular mediante @Injectable y permite definir qué parte de la aplicación puede acceder al servicio mediante la propiedad providedIn (que suele ser 'root') para permitir el acceso al servicio desde cualquier lugar dentro de la aplicación.

2. Una clase de TypeScript que define el código deseado al que se accederá al inyectar el servicio.


Ejemplo de un servicio Calculator:

```
import {Injectable} from '@angular/core';
@Injectable({providedIn: 'root'})
export class Calculator {
  add(x: number, y: number) {
    return x + y;
  }
}

```


### Usar un servicio

Para usar un servicio en un componente, necesita:

1. Importar el servicio

2. Declarar un campo de clase donde se inyecta el servicio. 

Asignar el campo de clase al resultado de la llamada a la función integrada "inject" que crea el servicio.


Así se vería en el componente Receipt:

```
import { Component, inject } from '@angular/core';
import { Calculator } from './calculator';
@Component({
  selector: 'app-receipt',
  template: `<h1>The total is {{ totalCost }}</h1>`,
})
export class Receipt {
  private calculator = inject(Calculator);
  totalCost = this.calculator.add(50, 25);
}

```

En este ejemplo, se utiliza la calculadora llamando a la función Angular inyectar y pasándole el servicio.



## $event en Angular

#### Variable especial que representa el objeto del evento DOM que se desencadena cuando ocurre un evento en la vista (como un clic, un cambio, una pulsación de tecla, etc.).


### Uso de $event

Se usa principalmente en plantillas HTML dentro de Angular, cuando manejas eventos con () (event binding).

```
<button (click)="handleClick($event)">Haz clic</button>

```

1. (click) es una vinculación de evento que responde al evento click del botón.

2. handleClick($event) es una llamada a un método del componente.

3. $event contiene el objeto MouseEvent que representa el clic


### Contenido de $event

Evento: 	
click
input
keydown

Tipo de $event: 
MouseEvent
InputEvent o Event
KeyboardEvent


#### Con $event, puedes acceder a propiedades como:

```
onClick(event: MouseEvent) {
  console.log(event.target); // el elemento que fue clicado
  console.log(event.clientX, event.clientY); // coordenadas del clic
}

```

Ej. input

```
<input (input)="onInputChange($event)">

```

```
onInputChange(event: Event) {
  const input = event.target as HTMLInputElement;
  console.log(input.value);
}

```

$ event te permite interactuar directamente con los datos del evento DOM desde el template.



# Prácticas


## Angular coding style guide


### Vocabulario de estilo

Cada directriz describe una buena o mala práctica, y todas tienen una presentación coherente.

La redacción de cada directriz indica la solidez de la recomendación.

#### Do: 

"Hacer/do" es algo que siempre debe seguirse. "
 
"Siempre" podría ser una palabra demasiado fuerte. 

Las directrices que literalmente siempre deben seguirse son extremadamente raras. 

Por otro lado, se necesita un caso realmente inusual para infringir una directriz "Do".


#### Consider:

Son directrices que deben seguirse generalmente. 

Si comprende completamente el significado de la directriz y tiene una buena razón para desviarse, hágalo. 

Procure ser coherente.


#### Avoid: 

"Evitar" indica algo que casi nunca debe hacerse. 

Los ejemplos de código que deben evitarse tienen un encabezado rojo inconfundible.


#### Why?: 

Da razones para seguir las recomendaciones anteriores. 



### Convenciones de estructura de archivos

Algunos ejemplos de código muestran un archivo que contiene uno o más archivos complementarios con nombres similares. 

Por ejemplo, hero.component.ts y hero.component.html.

La guía utiliza el acceso directo hero.component.ts|html|css|spec para representar estos archivos. 

Este acceso directo facilita la lectura y simplifica la estructura de archivos de esta guía.



### Responsabilidad única

Aplique el principio de responsabilidad única (SPR) a todos los componentes, servicios y otros símbolos. 

Esto ayuda a que la aplicación sea más limpia, fácil de leer y mantener, y más fácil de probar. 



### Regla de Uno

#### Estilo 01-01:

Defina una cosa, como un servicio o un componente, por archivo.

Considere limitar los archivos a 400 líneas de código.

¿Por qué?
Un componente por archivo facilita enormemente la lectura, el mantenimiento y evita conflictos con los equipos de control de código.

¿Por qué?
Un componente por archivo evita errores ocultos que suelen surgir al combinar componentes en un archivo, donde pueden compartir variables, crear cierres no deseados o acoplamientos no deseados con dependencias.

¿Por qué?
Un solo componente puede ser la exportación predeterminada para su archivo, lo que facilita la carga diferida con el enrutador.

La clave es hacer que el código sea más reutilizable, fácil de leer y menos propenso a errores.


El siguiente ejemplo negativo define el componente de la aplicación, inicia la aplicación, define el objeto de modelo Hero y carga los héroes desde el servidor, todo en el mismo archivo. 

No haga esto.


app/heroes/hero.component.ts

```
/* avoid */
import {Component, NgModule, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
      <h1>{{title}}</h1>
      <pre>{{heroes | json}}</pre>
    `,
  styleUrls: ['../app.component.css'],
  standalone: false,
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[] = [];
  ngOnInit() {
    getHeroes().then((heroes) => (this.heroes = heroes));
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
const HEROES: Hero[] = [
  {id: 1, name: 'Bombasto'},
  {id: 2, name: 'Tornado'},
  {id: 3, name: 'Magneta'},
];

function getHeroes(): Promise<Hero[]> {
  return Promise.resolve(HEROES); // TODO: get hero data from the server;
}

```


Es una mejor práctica redistribuir el componente y sus clases de soporte en sus propios archivos dedicados.


main.ts

```
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

```


app/app.module.ts

```
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild([{path: '01-01', component: AppComponent}]),
  ],
  declarations: [AppComponent, HeroesComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

A medida que la aplicación crece, esta regla se vuelve aún más importante.



### Nomenclatura

Las convenciones de nomenclatura son fundamentales para el mantenimiento y la legibilidad. 

Esta guía recomienda convenciones de nomenclatura para el nombre de archivo y el nombre del símbolo.


#### Pautas generales de nomenclatura


##### Estilo 02-01

Utilice nombres consistentes para todos los símbolos.

Siga un patrón que describa la característica del símbolo y luego su tipo. 

El patrón recomendado es feature.type.ts.

¿Por qué?
Las convenciones de nomenclatura ayudan a encontrar el contenido de forma consistente a simple vista. 

La coherencia dentro del proyecto es vital. 

La coherencia en el equipo es importante. 

La coherencia en toda la empresa proporciona una gran eficiencia.

¿Por qué?
Las convenciones de nomenclatura deberían ayudar a encontrar el código deseado más rápido y facilitar su comprensión.

¿Por qué?
Los nombres de carpetas y archivos deben transmitir claramente su propósito. 

Por ejemplo, app/heroes/hero-list.component.ts puede contener un componente que gestione una lista de héroes.  

feature.type.ts: 
hero.component.ts | hero.service.ts | etc 

```
app/heroes/hero-list.component.ts

```



#### Separe los nombres de los archivos con puntos y guiones

##### Estilo 02-02

Use guiones para separar las palabras en el nombre descriptivo.

Use puntos para separar el nombre descriptivo del tipo.

Use nombres de tipo consistentes para todos los componentes, siguiendo un patrón que describa la característica del componente y luego su tipo. 

Un patrón recomendado es feature.type.ts.

Use nombres de tipo convencionales, como .service, .component, .pipe, .module y .directive. 

Invente nombres de tipo adicionales si es necesario, pero tenga cuidado de no crear demasiados.

¿Por qué?
Los nombres de tipo proporcionan una forma consistente de identificar rápidamente el contenido del archivo.

¿Por qué?
Los nombres de tipo facilitan la búsqueda de un tipo de archivo específico mediante un editor o las técnicas de búsqueda difusa del IDE.

¿Por qué?
Los nombres de tipo sin abreviar, como .service, son descriptivos e inequívocos. Abreviaturas como .srv, .svc y .serv pueden ser confusas.

¿Por qué? Los nombres de tipo proporcionan coincidencia de patrones para cualquier tarea automatizada


Ej types convencionales : 

```
.service, .component, .pipe, .module y .directive

```



#### Símbolos y nombres de archivo

##### Estilo 02-03

Utilice nombres consistentes para todos los recursos nombrados según lo que representan.

Use mayúsculas para los nombres de clase.

El nombre del símbolo debe coincidir con el nombre del archivo.

Añada al nombre del símbolo el sufijo convencional (como Componente, Directiva, Módulo, Tubería o Servicio) para un elemento de ese tipo.

Asigne al nombre del archivo el sufijo convencional (como .component.ts, .directive.ts, .module.ts, .pipe.ts o .service.ts) para un archivo de ese tipo.

¿Por qué?
Las convenciones consistentes facilitan la identificación y referencia rápida de recursos de diferentes tipos.


Symbol name -> File name:

@Component({ … })
export class AppComponent { } -> app.component.ts

@Component({ … })
export class HeroesComponent { } -> heroes.component.ts

@Component({ … })
export class HeroListComponent { } -> hero-list.component.ts

@Component({ … })
export class HeroDetailComponent { } ->	hero-detail.component.ts

@Directive({ … })
export class ValidationDirective { } -> validation.directive.ts

@NgModule({ … })
export class AppModule -> app.module.ts

@Pipe({ name: 'initCaps' })
export class InitCapsPipe implements PipeTransform { } -> init-caps.pipe.ts

@Injectable()
export class UserProfileService { } -> user-profile.service.ts



### Estructura de la aplicación y NgModules

Tenga una visión a corto plazo de la implementación y una visión a largo plazo. 

Empiece con poco, pero tenga en cuenta el rumbo de la aplicación.


Todo el código de la aplicación se guarda en una carpeta llamada src. 

Todas las áreas de funcionalidad/feature area se encuentran en su propia carpeta.


Todo el contenido es un recurso por archivo/one asset per file. 

Cada componente, servicio y canalización se encuentra en su propio archivo. 

Todos los scripts de terceros se almacenan en otra carpeta, no en la carpeta src. 

Utilice las convenciones de nomenclatura para los archivos de esta guía.



#### Directrices estructurales generales


##### Estilo 04-06

Empiece con poco, pero tenga en cuenta el futuro de la aplicación.

Tenga una visión de la implementación a corto plazo y una visión a largo plazo.

Coloque todo el código de la aplicación en una carpeta llamada src.

Considere crear una carpeta para un componente cuando contenga varios archivos (.ts, .html, .css y .spec).

¿Por qué?
Ayuda a mantener la estructura de la aplicación pequeña y fácil de mantener en las primeras etapas, a la vez que facilita su evolución a medida que la aplicación crece.

¿Por qué?
Los componentes suelen tener cuatro archivos (por ejemplo, ```*.html, *.css, *.ts y *.spec.ts```) y pueden saturar una carpeta rápidamente.

A continuación, se muestra una estructura de carpetas y archivos compatible. 

```
project root
├── src
│ ├── app
│ │ ├── core
│ │ │ └── exception.service.ts|spec.ts
│ │ │ └── user-profile.service.ts|spec.ts
│ │ ├── heroes
│ │ │ ├── hero
│ │ │ │ └── hero.component.ts|html|css|spec.ts
│ │ │ ├── hero-list
│ │ │ │ └── hero-list.component.ts|html|css|spec.ts
│ │ │ ├── shared
│ │ │ │ └── hero-button.component.ts|html|css|spec.ts
│ │ │ │ └── hero.model.ts
│ │ │ │ └── hero.service.ts|spec.ts
│ │ │ └── heroes.component.ts|html|css|spec.ts
│ │ │ └── heroes.routes.ts
│ │ ├── shared
│ │ │ └── init-caps.pipe.ts|spec.ts
│ │ │ └── filter-text.component.ts|spec.ts
│ │ │ └── filter-text.service.ts|spec.ts
│ │ ├── villains
│ │ │ ├── villain
│ │ │ │ └── …
│ │ │ ├── villain-list
│ │ │ │ └── …
│ │ │ ├── shared
│ │ │ │ └── …
│ │ │ └── villains.component.ts|html|css|spec.ts
│ │ │ └── villains.module.ts
│ │ │ └── villains-routing.module.ts
│ │ └── app.component.ts|html|css|spec.ts
│ │ └── app.routes.ts
│ └── main.ts
│ └── index.html
│ └── …
└── node_modules/…
└── …

```

ÚTIL: Si bien los componentes en carpetas dedicadas son ampliamente preferidos, otra opción para aplicaciones pequeñas es mantener los componentes planos (no en una carpeta dedicada). 

Esto agrega hasta cuatro archivos a la carpeta existente, pero también reduce la anidación de carpetas. Sea cual sea su elección, sea consistente.


#### Estructura de carpetas por función

##### Estilo 04-07

Cree carpetas con el nombre del área de función/feature area que representan.

¿Por qué?
Un desarrollador puede localizar el código e identificar la representación de cada archivo de un vistazo. 

La estructura es lo más plana posible y no hay nombres repetitivos ni redundantes.

¿Por qué?
Ayuda a evitar que la aplicación se sature al organizar el contenido.

¿Por qué?
Cuando hay muchos archivos, por ejemplo, más de 10, localizarlos es más fácil con una estructura de carpetas consistente y más difícil con una estructura plana.

Para más información, consulte este ejemplo de estructura de carpetas y archivos.


#### App Root module: Módulo raíz de la aplicación

##### IMPORTANTE: Las siguientes recomendaciones de la guía de estilo son para aplicaciones basadas en NgModule.

##### Las nuevas aplicaciones deberían usar componentes, directivas y tuberías independientes.



##### Estilo 04-08

Cree un NgModule en la carpeta raíz de la aplicación, por ejemplo, en /src/app si crea una aplicación basada en NgModule.

¿Por qué?
Toda aplicación basada en NgModule requiere al menos un NgModule raíz.

Considere nombrar el módulo raíz como app.module.ts.

¿Por qué?
Facilita la localización e identificación del módulo raíz.

app/app.module.ts

```
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
...

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';

@NgModule({
  imports: [
    BrowserModule,
...
  ],
  declarations: [AppComponent, HeroesComponent],
  exports: [AppComponent],
})
export class AppModule {}

```



#### Feature modules: Módulos de características

##### Estilo 04-09

Cree un NgModule para todas las características distintivas de una aplicación; por ejemplo, una característica Heroes.

Coloque el módulo de características en la misma carpeta que el área de características; por ejemplo, en app/heroes.

Asigne un nombre al archivo del módulo de características que refleje el nombre del área de características y la carpeta; por ejemplo, app/heroes/heroes.module.ts.

Asigne un nombre al símbolo del módulo de características que refleje el nombre del área de características, la carpeta y el archivo; por ejemplo, app/heroes/heroes.module.ts define HeroesModule.

¿Por qué?
Un módulo de características puede exponer u ocultar su implementación a otros módulos.

¿Por qué?
Un módulo de características identifica conjuntos distintos de componentes relacionados que conforman el área de características.

¿Por qué?
Un módulo de características se puede enrutar fácilmente tanto de forma diligente como diferida.

¿Por qué?
Un módulo de características define límites claros entre una funcionalidad específica y otras características de la aplicación.

¿Por qué?
Un módulo de funciones ayuda a aclarar y facilitar la asignación de responsabilidades de desarrollo a diferentes equipos.

¿Por qué?
Un módulo de funciones se puede aislar fácilmente para realizar pruebas.



### Componentes 

#### Componentes como elementos

##### Estilo 05-03

Considere asignar a los componentes un selector de elementos, en lugar de selectores de atributos o clases.

¿Por qué?
Los componentes tienen plantillas que contienen HTML y sintaxis de plantilla Angular opcional. 

Muestran contenido. 

Los desarrolladores colocan los componentes en la página como lo harían con elementos HTML nativos y componentes web.

¿Por qué?
Es más fácil reconocer que un símbolo es un componente observando el HTML de la plantilla.


ÚTIL: En algunos casos, se asigna un atributo a un componente, como cuando se desea ampliar un elemento integrado. 

Por ejemplo, Material Design utiliza esta técnica con <button mat-button>. 

Sin embargo, no se usaría esta técnica en un elemento personalizado.


app/heroes/hero-button/hero-button.component.ts

```
/* avoid */
@Component({
  selector: '[tohHeroButton]',
  templateUrl: './hero-button.component.html',
})
export class HeroButtonComponent {}

```


app/app.component.html 

```
<!-- avoid -->
<div tohHeroButton></div>

```


TS

```
@Component({
  selector: 'toh-hero-button',
  templateUrl: './hero-button.component.html',
})
export class HeroButtonComponent {}

```

HTML 

```
<toh-hero-button></toh-hero-button>

```


Extraer plantillas y estilos a sus propios archivos

##### Estilo 05-04

Extraiga las plantillas y estilos a un archivo aparte cuando tengan más de 3 líneas.

Nombre el archivo de plantilla ```[nombre-componente].component.html, donde [nombre-componente]``` es el nombre del componente.

Nombre el archivo de estilo ```[nombre-componente].component.css, donde [nombre-componente]``` es el nombre del componente.

Especifique las URL relativas al componente, con el prefijo ```./```.

¿Por qué?
Las plantillas y estilos grandes e integrados en línea dificultan el propósito y la implementación del componente, lo que reduce la legibilidad y el mantenimiento.

¿Por qué?
En la mayoría de los editores, las sugerencias de sintaxis y los fragmentos de código no están disponibles al desarrollar plantillas y estilos integrados. 

El servicio de lenguaje Angular TypeScript (próximamente) promete solucionar esta deficiencia para las plantillas HTML en los editores que lo admiten; no es compatible con los estilos CSS.

¿Por qué? La URL relativa de un componente no requiere cambios al mover los archivos del componente, siempre que permanezcan juntos.

¿Por qué?
El prefijo ./ es la sintaxis estándar para las URL relativas; no dependas de la capacidad actual de Angular para prescindir de él.


app/heroes/heroes.component.ts

```
/* avoid */
@Component({
  selector: 'toh-heroes',
  template: `
    <div>
      <h2>My Heroes</h2>
      <ul class="heroes">
        @for (hero of heroes | async; track hero) {
          <li (click)="selectedHero=hero">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
          </li>
        }
      </ul>
      @if (selectedHero) {
        <div>
          <h2>{{selectedHero.name | uppercase}} is my hero</h2>
        </div>
      }
    </div>
  `,
  styles: [
    `
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `,
  ],
  imports: [NgFor, NgIf, AsyncPipe, UpperCasePipe],
})
export class HeroesComponent {
  selectedHero!: Hero;
  private heroService = inject(HeroService);
  heroes: Observable<Hero[]> = this.heroService.getHeroes();
}

```


TS

```
@Component({
  selector: 'toh-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [NgFor, NgIf, AsyncPipe, UpperCasePipe],
})
export class HeroesComponent {
  selectedHero!: Hero;
  private heroService = inject(HeroService);
  heroes: Observable<Hero[]> = this.heroService.getHeroes();
}

```


HTML 

```
<div>
  <h2>My Heroes</h2>
  <ul class="heroes">
    @for (hero of heroes | async; track hero) {
      <li>
        <button type="button" (click)="selectedHero=hero">
          <span class="badge">{{ hero.id }}</span>
          <span class="name">{{ hero.name }}</span>
        </button>
      </li>
    }
  </ul>
  @if (selectedHero) {
    <div>
      <h2>{{ selectedHero.name | uppercase }} is my hero</h2>
    </div>
  }
</div>

```


CSS

```
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}

.heroes li {
  display: flex;
}

.heroes button {
  flex: 1;
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: 0;
  border-radius: 4px;
  display: flex;
  align-items: stretch;
  height: 1.8em;
}

.heroes button:hover {
  color: #2c3a41;
  background-color: #e6e6e6;
  left: .1em;
}
.heroes button:active {
  background-color: #525252;
  color: #fafafa;
}

.heroes button.selected {
  background-color: black;
  color: white;
}

.heroes button.selected:hover {
  background-color: #505050;
  color: white;
}

.heroes button.selected:active {
  background-color: black;
  color: white;
}

.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #405061;
  line-height: 1em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}

.heroes .name {
  align-self: center;
}

```



#### Decorar propiedades de entrada y salida

##### Estilo 05-12

Utilice los decoradores de clase @Input() y @Output() en lugar de las propiedades de entrada y salida de los metadatos @Directive y @Component:

Considere colocar @Input() o @Output() en la misma línea que la propiedad que decora.

¿Por qué?
Es más fácil y legible identificar qué propiedades de una clase son entradas o salidas.

¿Por qué?
Si necesita cambiar el nombre de la propiedad o el evento asociado con @Input() o @Output(), puede modificarlo en un solo lugar.

¿Por qué?
La declaración de metadatos adjunta a la directiva es más corta y, por lo tanto, más legible.

¿Por qué?
Colocar el decorador en la misma línea suele generar código más corto y, aun así, identificar fácilmente la propiedad como entrada o salida. 

Colóquelo en la línea superior cuando sea claramente más legible.


app/heroes/shared/hero-button/hero-button.component.ts

```
/* avoid */
@Component({
  selector: 'toh-hero-button',
  template: `<button type="button"></button>`,
  inputs: ['label'],
  outputs: ['heroChange'],
})
export class HeroButtonComponent {
  heroChange = new EventEmitter<any>();
  label: string = '';
}

```


app/heroes/shared/hero-button/hero-button.component.ts

```
@Component({
  selector: 'toh-hero-button',
  template: `<button type="button">{{label}}</button>`,
})
export class HeroButtonComponent {
  @Output() heroChange = new EventEmitter<any>();
  @Input() label = '';
}

```



#### Evite usar alias en entradas y salidas

##### Estilo 05-13

Evite usar input and output aliases, excepto cuando sea importante.

¿Por qué?
Usar dos nombres para la misma propiedad (uno privado y otro público) puede ser confuso.

¿Por qué?
Debe usar un alias cuando el nombre de la directiva también sea una propiedad de entrada y no la describa. 


app/heroes/shared/hero-button/hero-button.component.ts

```
/* avoid pointless aliasing */
@Component({
  selector: 'toh-hero-button',
  template: `<button type="button">{{label}}</button>`,
})
export class HeroButtonComponent {
  // Pointless aliases
  @Output('heroChangeEvent') heroChange = new EventEmitter<any>();
  @Input('labelAttribute') label!: string;
}

```


app/app.component.html

```
<!-- avoid -->
<toh-hero-button labelAttribute="OK" (changeEvent)="doSomething()">
</toh-hero-button>

```


shared/hero-button/hero-button.component.ts

```
@Component({
  selector: 'toh-hero-button',
  template: `<button type="button" >{{label}}</button>`,
})
export class HeroButtonComponent {
  // No aliases
  @Output() heroChange = new EventEmitter<any>();
  @Input() label = '';
}

```


shared/hero-highlight.directive.ts

```
@Component({
  selector: 'toh-hero-button',
  template: `<button type="button" >{{label}}</button>`,
})
export class HeroButtonComponent {
  // No aliases
  @Output() heroChange = new EventEmitter<any>();
  @Input() label = '';
}

```


app/app.component.html

```
@Component({
  selector: 'toh-hero-button',
  template: `<button type="button" >{{label}}</button>`,
})
export class HeroButtonComponent {
  // No aliases
  @Output() heroChange = new EventEmitter<any>();
  @Input() label = '';
}

```



#### Delegar la lógica compleja de los componentes a los servicios

##### Estilo 05-15

###### Limite la lógica de un componente únicamente a la necesaria para la vista. 

###### El resto de la lógica debe delegarse a los servicios.

###### Traslade la lógica reutilizable a los servicios y mantenga los componentes simples y enfocados en su propósito previsto.

¿Por qué?
La lógica puede ser reutilizada por múltiples componentes cuando se coloca dentro de un servicio y se expone como una función.

¿Por qué?
La lógica de un servicio se puede aislar más fácilmente en una prueba unitaria, mientras que la lógica de llamada en el componente se puede simular fácilmente.

¿Por qué?
Elimina las dependencias y oculta los detalles de implementación del componente.

¿Por qué?
Mantiene el componente simple, preciso y enfocado.


app/heroes/hero-list.component.ts

```
/* avoid */
import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';

import {Hero} from '../shared/hero.model';

const heroesUrl = 'http://angular.io';

@Component({
  selector: 'toh-hero-list',
  template: `...`,
})
export class HeroListComponent {
  heroes: Hero[] = [];
  private http = inject(HttpClient);
  constructor() {
    this.getHeroes();
  }
  
  getHeroes() {
    this.heroes = [];
    this.http
      .get(heroesUrl)
      .pipe(
        catchError(this.catchBadResponse),
        finalize(() => this.hideSpinner()),
      )
      .subscribe((heroes: Hero[]) => (this.heroes = heroes));
  }
  
  private catchBadResponse(err: any, source: Observable<any>) {
    // log and handle the exception
    return new Observable();
  }
  
  private hideSpinner() {
    // hide the spinner
  }
}

```


app/heroes/herolist/hero-list.component.ts

```
import {Component, inject, OnInit} from '@angular/core';

import {Hero, HeroService} from '../shared';

@Component({
  selector: 'toh-hero-list',
  template: `...`,
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  private heroService = inject(HeroService);
  
  getHeroes() {
    this.heroes = [];
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  
  ngOnInit() {
    this.getHeroes();
  }
}

```


#### No prefijar las propiedades de salida

##### Estilo 05-16

Nombrar los eventos sin el prefijo on.

Nombrar los métodos del controlador de eventos con el prefijo on seguido del nombre del evento.

¿Por qué?
Esto es coherente con eventos integrados, como los clics de botón.

¿Por qué?
Angular permite una sintaxis alternativa ```on-*```. 

Si el evento tuviera el prefijo on, esto resultaría en una expresión de enlace on-onEvent.


app/heroes/hero.component.ts

```
/* avoid */
@Component({
  selector: 'toh-hero',
  template: `...`,
})
export class HeroComponent {
  @Output() onSavedTheDay = new EventEmitter<boolean>();
}

```

app/app.component.html

```
<!-- avoid -->
<toh-hero (onSavedTheDay)="onSavedTheDay($event)"></toh-hero>

```


TS

```
export class HeroComponent {
  @Output() savedTheDay = new EventEmitter<boolean>();
}

```

HTML

```
<toh-hero (savedTheDay)="onSavedTheDay($event)"></toh-hero>

```


#### Colocar la lógica de presentación en la clase del componente

##### Estilo 05-17

Colocar la lógica de presentación en la clase del componente, no en la plantilla.

¿Por qué?
La lógica se concentrará en un solo lugar (la clase del componente) en lugar de estar distribuida en dos.

¿Por qué?
Mantener la lógica de presentación del componente en la clase, en lugar de en la plantilla, mejora la testabilidad, el mantenimiento y la reutilización.


app/heroes/hero-list/hero-list.component.ts

```
/* avoid */
@Component({
  selector: 'toh-hero-list',
  template: `
    <section>
      Our list of heroes:
      @for (hero of heroes; track hero) {
        <toh-hero [hero]="hero"></toh-hero>
      }
      Total powers: {{totalPowers}}<br>
      Average power: {{totalPowers / heroes.length}}
    </section>
  `,
  imports: [NgFor, HeroComponent],
})
export class HeroListComponent {
  heroes: Hero[] = [];
  totalPowers: number = 0;
}

```


app/heroes/hero-list/hero-list.component.ts

```
@Component({
  selector: 'toh-hero-list',
  template: `
    <section>
      Our list of heroes:
      @for (hero of heroes; track hero) {
        <toh-hero [hero]="hero"></toh-hero>
      }
      Total powers: {{totalPowers}}<br>
      Average power: {{avgPower}}
    </section>
  `,
  imports: [NgFor, HeroComponent],
})
export class HeroListComponent {
  heroes: Hero[];
  totalPowers = 0;
...
  get avgPower() {
    return this.totalPowers / this.heroes.length;
  }
}

```


#### Inicializar entradas

##### Estilo 05-18

La opción del compilador --strictPropertyInitialization de TypeScript garantiza que una clase inicialice sus propiedades durante la construcción. 

Al estar habilitada, esta opción provoca que el compilador de TypeScript informe un error si la clase no asigna un valor a ninguna propiedad que no esté marcada explícitamente como opcional.

Por diseño, Angular trata todas las propiedades @Input como opcionales. 

Siempre que sea posible, se debe cumplir con la opción --strictPropertyInitialization proporcionando un valor predeterminado.


app/heroes/hero/hero.component.ts

```
@Component({
  selector: 'toh-hero',
  template: `...`,
})
export class HeroComponent {
  @Input() id = 'default_id';
}

```

Si es difícil construir un valor predeterminado para la propiedad, utilice ? para marcar explícitamente la propiedad como opcional.

app/heroes/hero/hero.component.ts

```
@Component({
  selector: 'toh-hero',
  template: `...`,
})
export class HeroComponent {
  @Input() id?: string;
  process() {
    if (this.id) {
      // ...
    }
  }
}

```

Quizás quieras tener un campo @Input obligatorio, lo que significa que todos los usuarios de tu componente deben pasar ese atributo. 

En tales casos, usa un valor predeterminado. 

Suprimir el error de TypeScript con ! no es suficiente y debe evitarse, ya que impedirá que el verificador de tipos verifique que se proporciona el valor de entrada.


app/heroes/hero/hero.component.ts

```
@Component({
  selector: 'toh-hero',
  template: `...`,
})
export class HeroComponent {
  // The exclamation mark suppresses errors that a property is
  // not initialized.
  // Ignoring this enforcement can prevent the type checker
  // from finding potential issues.
  @Input() id!: string;
}

```


### Directives

#### Usar directivas para mejorar un elemento

##### Estilo 06-01

Utilice directivas de atributo cuando tenga lógica de presentación sin plantilla.

¿Por qué?
Las directivas de atributo no tienen una plantilla asociada.

¿Por qué?
Un elemento puede tener más de una directiva de atributo aplicada.


app/shared/highlight.directive.ts

```
@Directive({
  selector: '[tohHighlight]',
})
export class HighlightDirective {
  @HostListener('mouseover') onMouseEnter() {
    // do highlight work
  }
}

```


app/app.component.html

```
<div tohHighlight>Bombasta</div>

```



#### Decoradores HostListener/HostBinding versus metadatos del host

##### Estilo 06-03

Considere preferir @HostListener y @HostBinding a la propiedad host de los decoradores @Directive y @Component.

Sea coherente en su elección.

¿Por qué?
La propiedad asociada a @HostBinding o el método asociado a @HostListener solo se pueden modificar en un único lugar: en la clase de la directiva. 

Si utiliza la propiedad de metadatos del host, debe modificar tanto la declaración de la propiedad/método en la clase de la directiva como los metadatos en el decorador asociado a la directiva.


app/shared/validator.directive.ts

```
import {Directive, HostBinding, HostListener} from '@angular/core';
@Directive({
  selector: '[tohValidator]',
})
export class ValidatorDirective {
  @HostBinding('attr.role') role = 'button';
  @HostListener('mouseenter') onMouseEnter() {
    // do work
  }
}

```

Compárese con la alternativa menos preferida de metadatos del host.

¿Por qué?
Los metadatos del host son solo un término para recordar y no requieren importaciones adicionales de ES.


app/shared/validator2.directive.ts

```
import {Directive} from '@angular/core';
@Directive({
  selector: '[tohValidator2]',
  host: {
    '[attr.role]': 'role',
    '(mouseenter)': 'onMouseEnter()',
  },
})
export class Validator2Directive {
  role = 'button';
  onMouseEnter() {
    // do work
  }
}

```


### Services

#### Los servicios son singletons

##### Estilo 07-01

Utilice los servicios como singletons dentro del mismo inyector. 

Úselos para compartir datos y funcionalidades.

¿Por qué?
Los servicios son ideales para compartir métodos en un área de funciones o una aplicación.

¿Por qué?
Los servicios son ideales para compartir datos en memoria con estado.


app/heroes/shared/hero.service.ts

```
export class HeroService {
  private http = inject(HttpClient);
  getHeroes() {
    return this.http.get<Hero[]>('api/heroes');
  }
}

```

#### Proporcionar un servicio

##### Estilo 07-03

Proporcione un servicio con el inyector raíz de la aplicación en el decorador @Injectable del servicio.

¿Por qué?
El inyector de Angular es jerárquico.

¿Por qué?
Al proporcionar el servicio a un inyector raíz, esa instancia del servicio se comparte y está disponible en todas las clases que lo necesitan. Esto es ideal cuando un servicio comparte métodos o estado.

¿Por qué?
Al registrar un servicio en el decorador @Injectable del servicio, las herramientas de optimización, como las utilizadas en las compilaciones de producción de Angular CLI, pueden realizar un tree shaker y eliminar los servicios que no utiliza la aplicación.

¿Por qué?
Esto no es ideal cuando dos componentes diferentes necesitan instancias distintas de un servicio. En este caso, sería mejor proporcionar el servicio a nivel de componente que necesita la nueva instancia independiente.


src/app/treeshaking/service.ts

```
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class Service {}

```


#### Usar el decorador de clase @Injectable()

##### Estilo 07-04

Utilice el decorador de clase @Injectable() en lugar del decorador de parámetro @Inject al usar tipos como tokens para las dependencias de un servicio.

¿Por qué?
El mecanismo de Inyección de Dependencias (ID) de Angular resuelve las dependencias de un servicio basándose en los tipos declarados de los parámetros del constructor de dicho servicio.

¿Por qué?
Cuando un servicio solo acepta dependencias asociadas a tokens de tipo, la sintaxis de @Injectable() es mucho menos detallada que usar @Inject() en cada parámetro del constructor.


app/heroes/shared/hero-arena.service.ts

```
/* avoid */
export class HeroArena {
  constructor(
    @Inject(HeroService) private heroService: HeroService,
    @Inject(HttpClient) private http: HttpClient,
  ) {}
}

```


app/heroes/shared/hero-arena.service.ts

```
@Injectable()
export class HeroArena {
  constructor(
    private heroService: HeroService,
    private http: HttpClient,
  ) {}
...
}

```


### Servicios de Datos

#### Comunicación con el servidor a través de un servicio

##### Estilo 08-01

Refactorice la lógica para realizar operaciones de datos e interactuar con los datos en un servicio.

Haga que los servicios de datos sean responsables de las llamadas XHR, el almacenamiento local, el almacenamiento en memoria o cualquier otra operación de datos.

¿Por qué?
La responsabilidad del componente es la presentación y recopilación de información para la vista. 

No debería importarle cómo obtiene los datos, solo saber a quién solicitarlos. 

Separar los servicios de datos modifica la lógica de cómo obtenerlos del servicio de datos y permite que el componente sea más simple y se centre más en la vista.

¿Por qué?
Esto facilita las pruebas (simuladas o reales) de las llamadas de datos al probar un componente que utiliza un servicio de datos.

¿Por qué?
Los detalles de la gestión de datos, como los encabezados, los métodos HTTP, el almacenamiento en caché, la gestión de errores y la lógica de reintento, son irrelevantes para los componentes y otros consumidores de datos.

Un servicio de datos encapsula estos detalles. 

Es más fácil desarrollar estos detalles dentro del servicio sin afectar a sus consumidores. 

Y es más fácil probar a los consumidores con implementaciones simuladas del servicio.


### Ganchos de ciclo de vida

Usa los hooks de ciclo de vida para acceder a eventos importantes expuestos por Angular.

#### Implementa las interfaces de hooks de ciclo de vida

##### Estilo 09-01

Implementa las interfaces de hooks de ciclo de vida.

¿Por qué?
Las interfaces de ciclo de vida prescriben firmas de métodos tipados. 

Usa estas firmas para detectar errores ortográficos y sintácticos.


app/heroes/shared/hero-button/hero-button.component.ts

```
/* avoid */
@Component({
  selector: 'toh-hero-button',
  template: `<button type="button">OK</button>`,
})
export class HeroButtonComponent {
  onInit() {
    // misspelled
    console.log('The component is initialized');
  }
}

```


app/heroes/shared/hero-button/hero-button.component.ts

```
@Component({
  selector: 'toh-hero-button',
  template: `<button type="button">OK</button>`,
})
export class HeroButtonComponent implements OnInit {
  ngOnInit() {
    console.log('The component is initialized');
  }
}

```


### Herramientas y consejos útiles para Angular.

#### Plantillas de archivo y fragmentos de código

##### Estilo A-02

Utilice plantillas de archivo o fragmentos de código para mantener estilos y patrones consistentes. 

Aquí encontrará plantillas/templates o fragmentos/snippets de código para algunos editores e IDE de desarrollo web.

Considere usar fragmentos de código para Visual Studio Code que sigan estos estilos y directrices.

Considere usar fragmentos de código para Sublime Text que sigan estos estilos y directrices.

Considere usar fragmentos de código para Vim que sigan estos estilos y directrices.


## Rs guía de código 

1. SPR

2. 1 componente 1 SPR 1 archivo 

3. Nombre de componente: 

Componente-responsabilidad: 

Por ejemplo, app/heroes/hero-list.component.ts puede contener un componente que gestione una lista de héroes.  

feature.type.ts: 
hero.component.ts | hero.service.ts | etc 

```
app/heroes/hero-list.component.ts

```

types convencionales : 

```
.service, .component, .pipe, .module y .directive

```

4. Symbol name (mayus) y File name (minus): el mismo nombre

symbol: 

```
Component({ … })
export class AppComponent { }

```

file: 

```
app.component.ts

```

Symbol name -> File name:

```
@Component({ … })
export class AppComponent { } -> app.component.ts

@Component({ … })
export class HeroesComponent { } -> heroes.component.ts

@Component({ … })
export class HeroListComponent { } -> hero-list.component.ts

@Component({ … })
export class HeroDetailComponent { } ->	hero-detail.component.ts

@Directive({ … })
export class ValidationDirective { } -> validation.directive.ts

@NgModule({ … })
export class AppModule -> app.module.ts

@Pipe({ name: 'initCaps' })
export class InitCapsPipe implements PipeTransform { } -> init-caps.pipe.ts

@Injectable()
export class UserProfileService { } -> user-profile.service.ts

```



# Angular App


## Hello world

Mostrar el texto en pantalla 


1. Descargar el zip/proyecto/código fuente 


2. Compilar la app: 

En la terminal de escritorio o del IDE: 

En el directorio de tu proyecto, navega al directorio first-app.

Ejecuta este comando para instalar las dependencias necesarias para ejecutar la aplicación.

```
npm install

```

Ejecute este comando para compilar y servir la aplicación predeterminada

```
ng serve

```

La aplicación debería compilarse sin errores.

En un navegador web de tu equipo de desarrollo, abre http://localhost:4200.

Comprueba que el sitio web predeterminado aparezca en el navegador.

Puedes dejar ng serve ejecutándose mientras completas los siguientes pasos.


### Archivos del proyecto 

Los archivos que componen una aplicación Angular predeterminada.
 
1. En el directorio de tu proyecto, navega al directorio first-app.

2. Abre el directorio src para ver estos archivos.
 
	1. En el explorador de archivos, busca los archivos de la aplicación Angular (/src).

		1. index.html es la plantilla HTML de nivel superior de la aplicación.
		
		2. style.css es la hoja de estilos de nivel superior de la aplicación.
		
		3. main.ts es donde se inicia la ejecución de la aplicación.
		
		4. favicon.ico es el icono de la aplicación, como el de cualquier sitio web.
	
	
	2. En el explorador de archivos, busque los archivos de componentes de la aplicación Angular (/app).

		1. app.component.ts es el archivo fuente que describe el componente raíz de la aplicación. Este es el componente Angular de nivel superior de la aplicación. Un componente es el elemento básico de una aplicación Angular. La descripción del componente incluye el código, la plantilla HTML y los estilos, que pueden describirse en este archivo o en archivos separados.

		2. En esta aplicación, los estilos se encuentran en un archivo separado, mientras que el código y la plantilla HTML del componente se encuentran en este archivo.

		2. app.component.css es la hoja de estilos de este componente.

		3. Los nuevos componentes se añaden a este directorio.
	
			
	3. En el explorador de archivos, busque el directorio de imágenes (/assets) que contiene las imágenes utilizadas por la aplicación. 


	4. En el explorador de archivos, busca los archivos y directorios que una aplicación Angular necesita para compilarse y ejecutarse, pero no son archivos con los que interactúes normalmente.

		1. .angular contiene los archivos necesarios para compilar la aplicación Angular.
		
		2. .e2e contiene los archivos utilizados para probar la aplicación.
		
		3. .node_modules contiene los paquetes node.js que utiliza la aplicación.
		
		4. angular.json describe la aplicación Angular a las herramientas de compilación.
		
		5. package.json lo utiliza npm (el gestor de paquetes de Node) para ejecutar la aplicación finalizada.
		
		6. tsconfig.* son los archivos que describen la configuración de la aplicación al compilador de TypeScript.


### 4. Crear Hello World

En este paso, actualiza los archivos del proyecto Angular para cambiar el contenido mostrado.


En tu IDE:

1. Abre first-app/src/index.html. 

NOTA: Este paso y el siguiente son solo para tu entorno local.


2. En index.html, reemplaza el elemento <title> con este código para actualizar el título de la aplicación.


src/index.html 

```
<title>Homes</title>

```

Luego, guarde los cambios que acaba de realizar en index.html.


3. A continuación, abra: 

first-app/src/app/app.component.ts.


4. En app.component.ts, en la definición @Component, reemplace la línea de plantilla con este código para cambiar el texto en el componente de la aplicación.


src/app/app.component.ts.

```
<h1>Hello world!</h1>
  `,
  styleUrls: ['./app.component.css'],

```


5. En app.component.ts, en la definición de la clase AppComponent, reemplace la línea de título con este código para cambiar el título del componente. 

src/app/app.component.ts

```
title = 'homes';
}

```

Luego, guarde los cambios realizados en app.component.ts.


6. Si detuvo el comando ng serve del paso 1, en la ventana de Terminal de su IDE, vuelva a ejecutarlo.


7. Abra su navegador, navegue a localhost:4200 y confirme que la aplicación se compila correctamente y muestra "Hola mundo" en el título y el cuerpo de la aplicación.


Rs: 

Actualizaste una aplicación Angular predeterminada para mostrar "Hola mundo". 

Durante el proceso, aprendiste a usar el comando ng serve para servir tu aplicación localmente para pruebas.


### Código inicial de app/app.component.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <h1>Default</h1>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}

```

Muestra "Default" en el navegador. 


### Código final de app/app.component.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <h1>Hello world!</h1>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}

```

app/app.component.css

```
:host {
  --content-padding: 10px;
}

header {
  display: block;
  height: 60px;
  padding: var(--content-padding);
  box-shadow: 0px 5px 25px var(--shadow-color);
}

.content {
  padding: var(--content-padding);
}

```

index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Homes</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
</head>
<body>
  <app-root></app-root>
</body>
</html>

```


## Home component

Crear nuevo componente

Su aplicación tiene un nuevo componente: HomeComponent.


### Conceptos de un componente

Las aplicaciones Angular se construyen en torno a componentes, que son los bloques de construcción de Angular. 

Los componentes contienen el código, el diseño HTML y la información de estilo CSS que proporciona la función y la apariencia de un elemento en la aplicación. 

En Angular, los componentes pueden contener otros componentes. 

Las funciones y la apariencia de una aplicación se pueden dividir y particionar en componentes.


En Angular, los componentes tienen metadatos que definen sus propiedades. 

Al crear un componente Home, se utilizan estas propiedades:


1. selector: describe cómo Angular hace referencia al componente en las plantillas

2. standalone:  describe si el componente requiere un NgModule.

3. Imports: describe las dependencias del componente.

4. template: describe el marcado HTML y el diseño del componente.

5. StyleUrls: enumera las URL de los archivos CSS que usa el componente en una matriz. 


### 1. Crear el componente Home

En este paso, creará un nuevo componente para su aplicación.


En el panel Terminal de su IDE:

1. En el directorio de su proyecto, navegue hasta el directorio first-app.

2. Ejecute este comando para crear un nuevo componente Home.

```
ng generate component home

```

3. Ejecuta este comando para compilar y servir tu aplicación.

NOTA: Este paso es solo para tu entorno local.

```
ng serve

```

4. Abra un navegador y navegue a http://localhost:4200 para encontrar la aplicación.

5. Confirme que la aplicación se compila sin errores.

ÚTIL: Debería renderizarse igual que en la lección anterior, ya que, aunque agregó un nuevo componente, aún no lo ha incluido en ninguna de las plantillas de la aplicación.

6. Deje ng serve ejecutándose mientras completa los siguientes pasos.


### 2. Agrega el nuevo componente al diseño de tu aplicación

En este paso, agrega el nuevo componente, HomeComponent, al componente raíz de tu aplicación, AppComponent, para que se muestre en el diseño de tu aplicación.


En el panel Editar de tu IDE:

1. Abre app.component.ts en el editor.

2. En app.component.ts, importa HomeComponent añadiendo esta línea a las importaciones a nivel de archivo.

Import HomeComponent in src/app/app.component.ts

```
import {HomeComponent} from './home/home.component';

```

3. En app.component.ts, en @Component, actualice la propiedad del array "imports" y agregue HomeComponent.

Replace in src/app/app.component.ts

```
template: `

```


4. En app.component.ts, en @Component, actualice la propiedad "template" para incluir el siguiente código HTML:

Replace in src/app/app.component.ts

```
<main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],

```

5. Guarde los cambios en app.component.ts.

6. Si ngserve se está ejecutando, la aplicación debería actualizarse. Si ngserve no se está ejecutando, iníciela de nuevo. "Hello world" en su aplicación debería cambiar a "home works!" desde HomeComponent.

7. Compruebe la aplicación en ejecución en el navegador y confirme que se haya actualizado. 


### 3. Agregar funciones a HomeComponent

En este paso, agregará funciones a HomeComponent.

En el paso anterior, agregó el HomeComponent predeterminado a la plantilla de su aplicación para que su HTML predeterminado apareciera en la aplicación. 

En este paso, agregará un filtro de búsqueda y un botón que se usará en una lección posterior. Por ahora, eso es todo lo que HomeComponent tiene. Tenga en cuenta que este paso solo agrega los elementos de búsqueda al diseño, sin ninguna funcionalidad por el momento.


En el panel Editar de su IDE:

1. En el directorio first-app, abra home.component.ts en el editor.

2. En home.component.ts, en @Component, actualice la propiedad de la plantilla con este código.

Replace in src/app/home/home.component.ts

```
<section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
  `,
  styleUrls: ['./home.component.css'],

```

3. A continuación, abra home.component.css en el editor y actualice el contenido con estos estilos.

NOTA: En el navegador, estos estilos se pueden guardar en src/app/home/home.component.ts, dentro de la matriz de estilos.

Replace in src/app/home/home.component.css

```
.results {
  display: grid;
  column-gap: 14px;
  row-gap: 14px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 400px));
  margin-top: 50px;
  justify-content: space-around;
}

input[type="text"] {
  border: solid 1px var(--primary-color);
  padding: 10px;
  border-radius: 8px;
  margin-right: 4px;
  display: inline-block;
  width: 30%;
}

button {
  padding: 10px;
  border: solid 1px var(--primary-color);
  background: var(--primary-color);
  color: white;
  border-radius: 8px;
}

@media (min-width: 500px) and (max-width: 768px) {
  .results {
      grid-template-columns: repeat(2, 1fr);
  }
  input[type="text"] {
      width: 70%;
  }   
}
@media (max-width: 499px) {
  .results {
      grid-template-columns: 1fr;
  }    
}

```

4. Confirme que la aplicación se compila correctamente. 

Debería encontrar el cuadro y el botón de consulta de filtro en su aplicación, y deberían tener estilo. 

Corrija cualquier error antes de continuar con el siguiente paso.


Rs: 

Creaste un nuevo componente para tu aplicación y le diste un control y un botón de edición de filtro.


### Código inicial app/app.component.ts

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <h1>Hello world!</h1>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}

```


### Código final app/app.component.ts

```
import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}

```


### Código final app/home/home.component.ts

```
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}

```

app/home/home.component.css

```
.results {
  display: grid;
  column-gap: 14px;
  row-gap: 14px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 400px));
  margin-top: 50px;
  justify-content: space-around;
}

input[type="text"] {
  border: solid 1px var(--primary-color);
  padding: 10px;
  border-radius: 8px;
  margin-right: 4px;
  display: inline-block;
  width: 30%;
}

button {
  padding: 10px;
  border: solid 1px var(--primary-color);
  background: var(--primary-color);
  color: white;
  border-radius: 8px;
}

@media (min-width: 500px) and (max-width: 768px) {
  .results {
      grid-template-columns: repeat(2, 1fr);
  }
  input[type="text"] {
      width: 70%;
  }   
}

@media (max-width: 499px) {
  .results {
      grid-template-columns: 1fr;
  }    
}

```



## Componente HousingLocation 

Agregar el componente HousingLocation a tu aplicación Angular.


Su aplicación tiene un nuevo componente: HousingLocationComponent y muestra un mensaje que confirma que el componente se agregó a su aplicación.


### 1. Crear el componente HousingLocationComponent

En este paso, creará un nuevo componente para su aplicación.


En el panel Terminal de su IDE:

1. En el directorio de su proyecto, navegue hasta el directorio first-app.

2. Ejecute este comando para crear un nuevo componente HousingLocationComponent

```
ng generate component housingLocation

```

3. Construir y ejecutar la app

```
ng serve

```

Solo para el entorno local. 

4. Abra un navegador y navegue a http://localhost:4200 para encontrar la aplicación.

5. Confirme que la aplicación se compila sin errores.

ÚTIL: Debería renderizarse igual que en la lección anterior, ya que, aunque agregó un nuevo componente, aún no lo ha incluido en ninguna de las plantillas de la aplicación.

6. Deje ng serve ejecutándose mientras completa los siguientes pasos. 


### 2. Añade el nuevo componente al diseño de tu aplicación.

En este paso, añade el nuevo componente, HousingLocationComponent, al componente HomeComponent de tu aplicación para que se muestre en el diseño.


En el panel Editar de tu IDE:

1. Abre home.component.ts en el editor.

2. En home.component.ts, importa HousingLocationComponent añadiendo esta línea a las importaciones a nivel de archivo.

Import HousingLocationComponent in src/app/home/home.component.ts

```
import {HousingLocationComponent} from '../housing-location/housing-location.component';

```

3. A continuación, actualice la propiedad de importaciones de los metadatos @Component agregando HousingLocationComponent a la matriz

Add HousingLocationComponent to imports array in src/app/home/home.component.ts

```
template: `

```

4. Ahora el componente está listo para usarse en la plantilla de HomeComponent. 

Actualice la propiedad de plantilla de los metadatos @Component para incluir una referencia a la etiqueta <app-housing-location>.

Add housing location to the component template in src/app/home/home.component.t

```
<section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],

```


### 3. Añade los estilos para el componente

En este paso, copiarás los estilos predefinidos para HousingLocationComponent en tu aplicación para que se renderice correctamente.

1. Abre src/app/housing-location/housing-location.component.css y pega los siguientes estilos en el archivo:

NOTA: En el navegador, estos estilos se pueden guardar en src/app/housing-location/housing-location.component.ts, en la sección de estilos. 

Add CSS en el archivo css del componente ts: src/app/housing-location/housing-location.component.css

```
.listing {
  background: var(--accent-color);
  border-radius: 30px;
  padding-bottom: 30px;
}
.listing-heading {
  color: var(--primary-color);
  padding: 10px 20px 0 20px;
}
.listing-photo {
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-radius: 30px 30px 0 0;
}
.listing-location {
  padding: 10px 20px 20px 20px;
}
.listing-location::before {
  content: url("/assets/location-pin.svg") / "";
}
section.listing a {
  padding-left: 20px;
  text-decoration: none;
  color: var(--primary-color);
}
section.listing a::after {
  content: "\203A";
  margin-left: 5px;
}

```

2. Guarda tu código, vuelve al navegador y confirma que la aplicación se compila correctamente. 

Deberías ver el mensaje "¡La ubicación de la vivienda funciona!" en la pantalla.

Corrige cualquier error antes de continuar con el siguiente paso. 


Rs: 

En esta lección, creó un nuevo componente para su aplicación y lo agregó al diseño de la aplicación.


### Código incial app/home/home.component.ts

```
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}

```


### Código final app/home/home.component.ts

```
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}

```


### Código final housing-location.component.ts

```
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule],
  template: `
    <p>housing-location works!</p>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {}

```


## Crear interface (TS)

Muestra cómo crear una interfaz e incluirla en un componente de tu aplicación.


1. Tu aplicación tiene una nueva interfaz que puede usar como tipo de dato.

2. Tu aplicación tiene una instancia de la nueva interfaz con datos de ejemplo.


### Conceptos de interfaces

Las interfaces son tipos de datos personalizados para tu aplicación.


Angular usa TypeScript para aprovechar las ventajas de trabajar en un entorno de programación fuertemente tipado. 

La verificación de tipos robusta reduce la probabilidad de que un elemento de tu aplicación envíe datos con formato incorrecto a otro. 

El compilador de TypeScript detecta estos errores de inconsistencia de tipos, y muchos de ellos también pueden detectarse en tu IDE.


#### En esta lección, crearás una interfaz para definir propiedades que representan datos sobre la ubicación de una vivienda.


### 1.  Crear una nueva interfaz Angular

Este paso crea una nueva interfaz en tu aplicación.


En el panel Terminal de tu IDE:

1. En el directorio de tu proyecto, navega al directorio first-app.

2. En el directorio first-app, ejecuta este comando para crear la nueva interfaz.

```
ng generate interface housinglocation

```

3. Ejecute ng serve para compilar la aplicación y servirla en http://localhost:4200.

4. En un navegador, abra http://localhost:4200 para ver su aplicación.

5. Confirme que la aplicación se compile sin errores. Corrija cualquier error antes de continuar con el siguiente paso.


### 2. Añadir propiedades a la nueva interfaz

Este paso añade las propiedades a la interfaz que tu aplicación necesita para representar la ubicación de una vivienda.

	1. En el panel Terminal de tu IDE, ejecuta el comando ng serve, si aún no se está ejecutando, para compilar la aplicación y servirla en http://localhost:4200.

	2. En el panel Editar de tu IDE, abre el archivo src/app/housinglocation.ts.

	3. En housinglocation.ts, reemplaza el contenido predeterminado con el siguiente código para que tu nueva interfaz coincida con este ejemplo.

    Update src/app/housinglocation.ts to match this code
    
```
export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}

```
	
	4. Guarde los cambios y confirme que la aplicación no muestre ningún error. Corrija los errores antes de continuar con el siguiente paso.

En este punto, ha definido una interfaz que representa datos sobre la ubicación de una vivienda, incluyendo el ID, el nombre y la información de ubicación.


### 3. Crea una casa de pruebas para tu aplicación

Tienes una interfaz, pero aún no la usas.


En este paso, creas una instancia de la interfaz y le asignas datos de muestra. 

Aún no verás estos datos de muestra en tu aplicación. 

Hay algunas lecciones más que completar antes de que eso suceda.


1. En el panel Terminal de tu IDE, ejecuta el comando ng serve, si aún no se está ejecutando, para compilar la aplicación y servirla en http://localhost:4200.

2. En el panel Editar de tu IDE, abre src/app/home/home.component.ts.

3. En src/app/home/home.component.ts, agrega esta declaración de importación después de las declaraciones de importación existentes para que HomeComponent pueda usar la nueva interfaz.

Import HomeComponent in src/app/home/home.component.ts

```
import {HousingLocation} from '../housinglocation';

```

4. En src/app/home/home.component.ts, reemplace la definición de la clase de exportación vacía HomeComponent {} con este código para crear una única instancia de la nueva interfaz en el componente

Add sample data to src/app/home/home.component.ts

```
readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

 housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}

```

5. Confirme que su archivo home.component.ts coincida con este ejemplo 

src/app/home/home.component.ts

```
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}

```

#### Al añadir la propiedad housingLocation de tipo HousingLocation a la clase HomeComponent, podemos confirmar que los datos coinciden con la descripción de la interfaz. 

Si los datos no cumplen con la descripción de la interfaz, el IDE tiene suficiente información para generar errores útiles.

6. Guarde los cambios y confirme que la aplicación no tenga errores. Abra el navegador y confirme que la aplicación aún muestra el mensaje "¡La ubicación de la vivienda funciona!".

7. Corrija cualquier error antes de continuar con el siguiente paso.


Rs:

En esta lección, creaste una interfaz que creó un nuevo tipo de dato para tu aplicación. 

#### Este nuevo tipo de dato te permite especificar dónde se requieren los datos de HousingLocation. 

Este nuevo tipo de dato también permite que tu IDE y el compilador de TypeScript garanticen que los datos de HousingLocation se usen donde se requieren.


### Código inicial app/home/home.component.ts

```
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}

```


### Código final home.component.ts

```
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}

```


### Código final app/housinglocation.ts

```
export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}

```


### Código final app/housing-location/housing-location.component.ts

```
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule],
  template: `
    <p>housing-location works!</p>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {}

```


### Añadir un parámetro de entrada/input al componente

Muestra cómo crear un componente @Input() y usarlo para pasar datos a un componente para su personalización.


#### La plantilla HousingLocationComponent de su aplicación tiene una propiedad HousingLocation para recibir entrada/input


### Conceptos de inputs

Las entradas permiten que los componentes compartan datos. 

#### La dirección del intercambio de datos es del componente principal al componente secundario.


#### En esta lección, definirá las propiedades @Input() en el componente HousingLocationComponent, lo que le permitirá personalizar los datos mostrados en el componente.

Obtenga más información en las guías "Aceptar datos con propiedades de entrada" y "Eventos personalizados con salidas".


### 1. Importar el decorador de entrada

Este paso importa el decorador de entrada a la clase.


En el editor de código:

1. Vaya a src/app/housing-location/housing-location.component.ts

2. Actualice las importaciones del archivo para incluir Input y HousingLocation 

Import HousingLocationComponent and Input in src/app/housing-location/housing-location.component.ts

```
import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housinglocation';

```


### 2. Añadir la propiedad Input

1. En el mismo archivo, añada una propiedad llamada housingLocation de tipo HousingLocation a la clase HousingLocationComponent. 

Añada un signo ! después del nombre de la propiedad y antepóngale el decorador @Input(). 

Import HousingLocationComponent and Input in src/app/housing-location/housing-location.component.ts

```
@Input() housingLocation!: HousingLocation;
}

```

Debe agregar el signo ! porque la entrada espera que se pase el valor. 

En este caso, no hay un valor predeterminado. 

En nuestra aplicación de ejemplo, sabemos que el valor se pasará; esto es intencional. 

#### El signo de exclamación se denomina operador de aserción no nulo e indica al compilador de TypeScript que el valor de esta propiedad no será nulo ni indefinido.

2. Salvar cambios y confirmar que la app no tiene errores. 

3. Corregir los errores si los hay para continuar. 


Rs:

Creó una nueva propiedad decorada con el decorador @Input().

También utilizó el operador de aserción no nulo para notificar al compilador que el valor de la nueva propiedad no será nulo ni indefinido.

 
### Código inicial app/housing-location/housing-location-component.ts

```
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule],
  template: `
    <p>housing-location works!</p>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {}

```


### Código final app/housing-location/housing-location-component.ts

```
import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housinglocation';
@Component({
  selector: 'app-housing-location',
  imports: [CommonModule],
  template: `
    <p>housing-location works!</p>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}

```


## Binding de propiedad a la plantilla de un componente

Añadir un enlace/binding de propiedad/property a la plantilla de un componente


#### Muestra cómo añadir binding de prop a una plantilla y usarlo para pasar datos dinámicos a los componentes.

1. Tu aplicación tiene enlaces/binding de datos en la plantilla HomeComponent.

2. Tu aplicación envía datos desde HomeComponent a HousingLocationComponent.


### Conceptos de inputs

En esta lección, continuará el proceso de compartir datos del componente principal al componente secundario mediante la vinculación de datos a dichas propiedades en la plantilla mediante la vinculación de propiedades.


#### La vinculación de propiedades permite conectar una variable a una entrada en una plantilla de Angular. 

Los datos se vinculan dinámicamente a la entrada/input.


### 1. Actualizar la plantilla HomeComponent

#### Este paso añade la vinculación de propiedades a la etiqueta <app-housing-location>.


En el editor de código:

1. Vaya a src/app/home/home.component.ts

2. En la propiedad de plantilla del decorador @Component, actualice el código para que coincida con el siguiente.

Add housingLocation property binding

```
<app-housing-location [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,

```

#### Al añadir un enlace de propiedad/binding prop a una etiqueta de componente, usamos la sintaxis ```[attribute] = "value"``` para notificar a Angular que el valor asignado debe tratarse como una propiedad de la clase del componente y no como una cadena.

El valor a la derecha es el nombre de la propiedad del componente Home.


### 2. Confirma que el código sigue funcionando.

1. Guarda los cambios y confirma que la aplicación no tenga errores.

2. Corrígelos antes de continuar.


Rs: 

Agregó un nuevo enlace de propiedad y pasó una referencia a una propiedad de clase. 

#### Ahora, HousingLocationComponent tiene acceso a datos que puede usar para personalizar la visualización del componente.


### Código inicial app/home/home.component.ts

```
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}

```


### Código final app/home/home.component.ts

```
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}

```



## Valores dinámicos en las plantillas: Añadir una interpolación a la plantilla de un componente

Muestra cómo añadir una interpolación a las plantillas de Angular para mostrar datos dinámicos en una plantilla.


1. Tu aplicación mostrará valores interpolados en la plantilla HousingLocationComponent.

2. Tu aplicación mostrará los datos de ubicación de la vivienda en el navegador.


### Conceptos de interpolation 

#### En este paso, mostrarás valores (propiedades y valores de entrada) en una plantilla mediante interpolación.

Usando la expresión {{}} en las plantillas de Angular, puedes representar valores de propiedades, entradas y expresiones JavaScript válidas.


### 1. Actualizar la plantilla HousingLocationComponent para incluir valores interpolados

#### Este paso añade una nueva estructura HTML y valores interpolados a la plantilla HousingLocationComponent.


En el editor de código:

1. Vaya a src/app/housing-location/housing-location.component.ts

2. En la propiedad de plantilla del decorador @Component, reemplace el código HTML existente con el siguiente código. 

Update HousingLocationComponent template

```
<section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],

```

#### En este código de plantilla actualizado, se ha utilizado la vinculación de propiedades para vincular housingLocation.photo al atributo src. 

El atributo alt utiliza la interpolación para dar más contexto al texto alternativo de la imagen.


Se utiliza la interpolación para incluir los valores de nombre, ciudad y estado de la propiedad housingLocation.


### 2. Confirme que los cambios se muestren en el navegador.

1. Guarde todos los cambios.

2. Abra el navegador y confirme que la aplicación muestre los datos de muestra de la foto, la ciudad y el estado.


Rs:

Agregaste una nueva estructura HTML y usaste la sintaxis de plantilla de Angular para representar valores en la plantilla HousingLocation.


Ahora tienes dos habilidades importantes:

Pasar datos a componentes

Interpolar valores en una plantilla

Con estas habilidades, tu aplicación ahora puede compartir datos y mostrar valores dinámicos en el navegador.



## *ngFor en plantilla: listar objetos en un componente

Muestra cómo usar la directiva ngFor en plantillas Angular para mostrar datos repetidos dinámicamente en una plantilla.


1. Habrás añadido un conjunto de datos a la aplicación.

2. La aplicación mostrará una lista de elementos del nuevo conjunto de datos usando ngFor.


### Conceptos de ngFor 

#### Tipo específico de directiva que se utiliza para repetir dinámicamente datos en una plantilla. 

En JavaScript simple, se usaría un bucle for; ngFor ofrece una funcionalidad similar para las plantillas de Angular.


#### Puede usar ngFor para iterar sobre arrays e incluso valores asíncronos. 

#### En esta lección, agregará un nuevo array de datos para iterar.


### 1. Añadir datos de vivienda a HomeComponent

En HomeComponent solo hay una ubicación de vivienda. 

#### En este paso, agregará una matriz/array de entradas/entries HousingLocation.


1. En src/app/home/home.component.ts, elimine la propiedad housingLocation de la clase HomeComponent.

2. Actualice la clase HomeComponent para que tenga una propiedad llamada housingLocationList. 

Actualice su código para que coincida con el siguiente.

Add housingLocationList property

```
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];
}

```

#### IMPORTANTE: No elimine el decorador @Component, actualizará ese código en un próximo paso


### 2. Actualizar la plantilla HomeComponent para usar ngFor

Ahora la aplicación cuenta con un conjunto de datos que permite mostrar las entradas en el navegador mediante la directiva ngFor.

Actualizar la etiqueta <app-housing-location> en el código de la plantilla a este valor.

Add ngFor to HomeComponent template

```
<app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,

```

#### Nota: en el código ```[housingLocation] = "housingLocation"```, el valor de housingLocation ahora hace referencia a la variable utilizada en la directiva ngFor. 

Antes de este cambio, hacía referencia a la propiedad de la clase HomeComponent.

IMPORTANTE: No olvide importar la directiva NgFor en su clase HomeComponent.

2. Guarde todos los cambios.

3. Actualice el navegador y confirme que la aplicación ahora muestra una cuadrícula de ubicaciones de viviendas.


Rs:

Usaste la directiva ngFor para repetir datos dinámicamente en plantillas de Angular. 

También agregaste una nueva matriz de datos para usar en la aplicación Angular. 

La aplicación ahora muestra dinámicamente una lista de ubicaciones de viviendas en el navegador.


### Código inicial app/home/home.component.ts

```
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}

```


### Código final app/home/home.component.ts

```
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];
}

```


### Código final app/housing-location/housing-location.component.ts

```
import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}

```



## Services  

#### Muestra cómo crear un servicio Angular y usar la inyección de dependencias para incluirlo en tu aplicación.


#### Tu aplicación cuenta con un servicio que le proporciona los datos. 

#### El servicio lee datos de datos locales estáticos. 

En una lección posterior, actualizarás el servicio para obtener datos de un servicio web.


### Conceptos de services y dependency injection

Services: 

#### Los servicios de Angular permiten separar los datos y las funciones de la aplicación Angular, que pueden ser utilizados por varios componentes de la aplicación. 

#### Para que varios componentes puedan utilizar un servicio, este debe ser inyectable. 

#### Los servicios inyectables que utiliza un componente se convierten en dependencias de dicho componente.

#### El componente depende de esos servicios y no puede funcionar sin ellos.


Dependency injection:

#### La inyección de dependencia es el mecanismo que administra las dependencias de los componentes de una aplicación y los servicios que otros componentes pueden usar.


### 1. Crea un nuevo servicio para tu aplicación

Este paso crea un servicio inyectable para tu aplicación.


En el panel Terminal de tu IDE:

1. En el directorio de tu proyecto, navega al directorio first-app.

2. En el directorio first-app, ejecuta este comando para crear el nuevo servicio.

```
ng generate service housing --skip-tests

```
 
3. Ejecute ng serve para compilar la aplicación y servirla en http://localhost:4200.

4. Confirme que la aplicación se compile sin errores. 

Corrija cualquier error antes de continuar con el siguiente paso.
 
 
### 2. Añadir datos estáticos al nuevo servicio

Este paso añade datos de muestra a tu nuevo servicio. 

En una lección posterior, reemplazarás los datos estáticos con una interfaz web para obtenerlos como en una aplicación real. 

#### Por ahora, el nuevo servicio de tu aplicación utiliza los datos creados localmente en HomeComponent.


En el panel Editar de tu IDE:

1. En src/app/home/home.component.ts, desde HomeComponent, copia la variable housingLocationList y su valor de matriz.

2. En src/app/housing.service.ts:

Dentro de la clase HousingService, pega la variable que copiaste de HomeComponent en el paso anterior.

Dentro de la clase HousingService, pega estas funciones después de los datos que acabas de copiar. 

Estas funciones permiten que las dependencias accedan a los datos del servicio. 

Service functions in src/app/housing.service.ts

```
getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }

```

Necesitará estas funciones en una lección futura. 

#### Por ahora, basta con comprender que estas funciones devuelven una HousingLocation específica por id o la lista completa.

Agregue una importación a nivel de archivo para HousingLocation.

Import HousingLocation type in src/app/housing.service.ts

```
import {HousingLocation} from './housinglocation';

```

3. Confirme que la aplicación se compila correctamente. 

Corrija cualquier error antes de continuar con el siguiente paso.


### 3. Inyectar el nuevo servicio en HomeComponent

#### Este paso inyecta el nuevo servicio en HomeComponent de tu aplicación para que pueda leer los datos de la aplicación desde un servicio. 

En una lección posterior, reemplazarás los datos estáticos con una fuente de datos en tiempo real para obtener los datos como en una aplicación real.


En el panel Editar de tu IDE, en src/app/home/home.component.ts:

1. En la parte superior de src/app/home/home.component.ts, agrega la función inject a los elementos importados desde @angular/core. 

Esto importará la función inject a la clase HomeComponent. 
 
Update to src/app/home/home.component.ts:

```
import {Component, inject} from '@angular/core';

```

2. Agregue una nueva importación a nivel de archivo para HousingService:

Add import to src/app/home/home.component.ts:

```
import {HousingService} from '../housing.service';

``` 

3. Desde HomeComponent, elimine las entradas de la matriz housingLocationList y asigne a housingLocationList el valor de una matriz vacía ```([])```. 

En pocos pasos, actualizará el código para extraer los datos de HousingService.

4. En HomeComponent, agregue el siguiente código para inyectar el nuevo servicio e inicializar los datos de la aplicación. 

#### El constructor es la primera función que se ejecuta al crear este componente. 

#### El código del constructor asignará a housingLocationList el valor devuelto al llamar a getAllHousingLocations. 

Initialize data from service in src/app/home/home.component.ts:

```
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}

```

5. Guarde los cambios en src/app/home/home.component.ts y confirme que su aplicación se compila correctamente. 

Corrija cualquier error antes de continuar con el siguiente paso. 


Rs: 

Agregaste un servicio Angular a tu aplicación y lo inyectaste en la clase HomeComponent. 

#### Esto segmenta la forma en que tu aplicación obtiene sus datos. 

Por ahora, el nuevo servicio obtiene sus datos de un array estático. 

En una lección posterior, refactorizarás el servicio para obtener sus datos de un endpoint de API.


### Código inicial app/home/home.component.ts

```
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];
}

```


### Código final app/home/home.component.ts

```
import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housinglocation';
import {HousingService} from '../housing.service';
@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}

```

### Código final app/housing.service.ts

```
import {Injectable} from '@angular/core';
import {HousingLocation} from './housinglocation';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }
}

```

### Código final app/housinglocation.ts

```
export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}

```

### Código final app/housing-location/housing-location.component.ts

```
import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housinglocation';
import {HousingService} from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}

```



## Routing

Muestra cómo añadir rutas a tu aplicación.
 
IMPORTANTE: Se recomienda utilizar su entorno local para aprender el enrutamiento.


Al final, su aplicación tendrá soporte para enrutamiento.


### Conceptos de routing/enrutamiento

#### El enrutamiento permite navegar de un componente a otro en la aplicación. 

En las aplicaciones de página única (SPA), solo se actualizan partes de la página para representar la vista solicitada por el usuario.

#### El enrutador Angular permite a los usuarios declarar rutas y especificar qué componente debe mostrarse en pantalla si la aplicación la solicita.


### 1. Crear un componente de detalles predeterminado

1. Desde la terminal, introduzca el siguiente comando para crear el componente de detalles:

```
ng generate component details

```

#### Este componente representará la página de detalles que proporciona más información sobre una ubicación de vivienda determinada.


### 2. Añadir el enrutamiento a la aplicación

1. En el directorio src/app, cree un archivo llamado route.ts. 

#### Este archivo es donde definiremos las rutas en la aplicación.

2. En main.ts, realice las siguientes actualizaciones para habilitar el enrutamiento en la aplicación:

#### Importe el archivo route y la función provideRouter

Import routing details in src/main.ts

```
import {provideRouter} from '@angular/router';
import routeConfig from './app/routes';

```

#### Actualice la llamada a bootstrapApplication para incluir la configuración de enrutamiento:

Add router configuration in src/main.ts

```
bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig)],
}).catch((err) => console.error(err));

```

3. En src/app/app.component.ts, actualice el componente para que use enrutamiento:

#### Agregue una importación a nivel de archivo para RoutingModule:

Import RouterModule in src/app/app.component.ts

```
import {RouterModule} from '@angular/router';

```

Agregue RouterModule a las importaciones de metadatos de @ComponentAgregue RouterModule a las importaciones de metadatos de @Component

Import RouterModule in src/app/app.component.ts

```
template: `

```

#### En la propiedad de la plantilla, reemplaza la etiqueta <app-home></app-home> por la directiva <router-outlet> y añade un enlace a la página de inicio. 

Tu código debe coincidir con este:

```
<main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,

```


### 3. Añadir ruta a un nuevo componente

En el paso anterior, eliminaste la referencia al componente <app-home> de la plantilla. 

#### En este paso, añadirás una nueva ruta a ese componente.


1. En route.ts, realiza las siguientes actualizaciones para crear una ruta.

#### Añade importaciones a nivel de archivo para HomeComponent, DetailsComponent y el tipo de ruta que usarás en las definiciones de ruta.

Import components and Routes

```
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';

```

#### Define una variable llamada routeConfig del tipo Routes y define dos rutas para la aplicación:

Add routes to the app

```
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
];
export default routeConfig;

```

Las entradas/entries de la matriz routeConfig representan las rutas de la aplicación. 

#### La primera entrada dirige al componente Home cuando la URL coincide con ''. 

La segunda entrada utiliza un formato especial que se revisará en una lección posterior.

#### (route params)

2. Guarde todos los cambios y confirme que la aplicación funciona en el navegador. 

La aplicación debería seguir mostrando la lista de ubicaciones de alojamiento. 


Rs: 

Habilitaste el enrutamiento en tu aplicación y definiste nuevas rutas. 

Ahora tu aplicación permite navegar entre vistas.

En la siguiente lección, aprenderás a navegar a la página de detalles de una vivienda.



## Personalizar una página 

Integrar la página de detalles en la aplicación

Muestra cómo conectar la página de detalles a la aplicación.

Usar un entorno local/desktop ide para las rutas

Al final, su aplicación tendrá soporte para enrutar a la página de detalles.


### Conceptos de routing y route parameters

#### Cada ubicación de vivienda tiene detalles específicos que deben mostrarse cuando el usuario accede a la página de detalles de ese artículo. 

#### Para lograrlo, deberá usar parámetros de ruta.


#### Los parámetros de ruta le permiten incluir información dinámica como parte de la URL de su ruta. 

#### Para identificar la ubicación de vivienda en la que ha hecho clic un usuario, utilice la propiedad id del tipo HousingLocation.


### 1. Uso de routerLink para navegación dinámica

En la lección 10, agregó una segunda ruta a src/app/routes.ts que incluye un segmento especial que identifica el parámetro de ruta, id.

```
'details/:id'

```

#### En este caso, :id es dinámico y cambiará según cómo el código solicite la ruta.

1. 

#### En src/app/housing-location/housing-location.component.ts, agregue una etiqueta de anclaje/anchor tag al elemento de sección e incluya la directiva routerLink.

Add anchor with a routerLink directive to housing-location.component.ts

```
</section>

```

#### La directiva routerLink permite que el enrutador de Angular cree enlaces dinámicos en la aplicación.

#### El valor asignado a routerLink es una matriz con dos entradas: la parte estática de la ruta y los datos dinámicos.

#### Para que routerLink funcione en la plantilla, agregue una importación a nivel de archivo de RouterLink y RouterOutlet desde '@angular/router' y luego actualice la matriz de importaciones del componente para incluir tanto RouterLink como RouterOutlet.

2. En este punto, puede confirmar que el enrutamiento funciona en su aplicación. 

En el navegador, actualice la página de inicio y haga clic en el botón "Más información" para encontrar la ubicación de una vivienda. 


#### 2. Obtener parámetros de ruta

En este paso, obtendrá el parámetro de ruta en el componente DetailsComponent. 

Actualmente, la aplicación muestra detalles. 

#### A continuación, actualizará el código para mostrar el valor de ID pasado mediante los parámetros de ruta.

1. En src/app/details/details.component.ts, actualice la plantilla para importar las funciones, clases y servicios que necesitará usar en el componente DetailsComponent.

Update file level imports

```
import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {HousingService} from '../housing.service';
import {HousingLocation} from '../housinglocation';

```

2. Actualice la propiedad de plantilla del decorador @Component para mostrar el valor housingLocationId:

```
template: `<p>details works! {{ housingLocationId }}</p>`,

```

3. Actualice el cuerpo de la clase DetailsComponent con el siguiente código:

```
export class DetailsComponent {
         route: ActivatedRoute = inject(ActivatedRoute);
         housingLocationId = -1;
         constructor() {
             this.housingLocationId = Number(this.route.snapshot.params['id']);
         }
     }

```

#### Este código otorga a DetailsComponent acceso a la función del enrutador ActivatedRoute, que permite acceder a los datos de la ruta actual. 

#### En el constructor, el código convierte el parámetro id obtenido de la ruta de una cadena a un número.

4. Guarde todos los cambios.

5. En el navegador, haga clic en el enlace "Más información" de la ubicación de la vivienda y confirme que el valor numérico mostrado en la página coincida con la propiedad id de esa ubicación en los datos.


### 3. Personalizar el componente de detalles

#### Ahora que el enrutamiento funciona correctamente en la aplicación, es un buen momento para actualizar la plantilla del componente de detalles para que muestre los datos específicos de la ubicación de la vivienda para el parámetro de ruta.

#### Para acceder a los datos, agregue una llamada al servicio de vivienda.

1. Actualice el código de la plantilla para que coincida con el siguiente código.

Update the DetailsComponent template in src/app/details/details.component.ts

```
<article>
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
        crossorigin
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>Does this location have laundry: {{ housingLocation?.laundry }}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],

```

#### Observe que se accede a las propiedades housingLocation con el operador de encadenamiento opcional ?. 

#### Esto garantiza que, si el valor housingLocation es nulo o indefinido, la aplicación no se bloquee.

2. Actualice el cuerpo de la clase DetailsComponent para que coincida con el siguiente código:

Update the DetailsComponent class in src/app/details/details.component.ts

```
route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}

```

#### Ahora, el componente cuenta con el código para mostrar la información correcta según la ubicación de la vivienda seleccionada. 

#### El constructor incluye una llamada a HousingService para pasar el parámetro de ruta como argumento a la función de servicio getHousingLocationById.

3. Copie los siguientes estilos en el archivo src/app/details/details.component.css:

Add styles for the DetailsComponent

```
.listing-photo {
  height: 600px;
  width: 50%;
  object-fit: cover;
  border-radius: 30px;
  float: right;
}
.listing-heading {
  font-size: 48pt;
  font-weight: bold;
  margin-bottom: 15px;
}
.listing-location::before {
  content: url('/assets/location-pin.svg') / '';
}
.listing-location {
  font-size: 24pt;
  margin-bottom: 15px;
}
.listing-features > .section-heading {
  color: var(--secondary-color);
  font-size: 24pt;
  margin-bottom: 15px;
}
.listing-features {
  margin-bottom: 20px;
}
.listing-features li {
  font-size: 14pt;
}
li {
  list-style-type: none;
}
.listing-apply .section-heading {
  font-size: 18pt;
  margin-bottom: 15px;
}
label, input {
  display: block;
}
label {
  color: var(--secondary-color);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12pt;
}
input {
  font-size: 16pt;
  margin-bottom: 15px;
  padding: 10px;
  width: 400px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: solid .3px;
}
@media (max-width: 1024px) {
  .listing-photo {
    width: 100%;
    height: 400px;
  }
}

```

4. Guarde los cambios.

5. Actualice la página en el navegador y confirme que, al hacer clic en el enlace "Más información" para una vivienda, la página de detalles muestra la información correcta según los datos del elemento seleccionado.


### 4. Añadir navegación al componente Inicio

#### En una lección anterior, actualizaste la plantilla AppComponent para incluir un enlace de enrutador. 

#### Al añadir ese código, la aplicación se actualizó para habilitar la navegación de vuelta al componente Inicio al hacer clic en el logotipo.


1. Confirma que tu código coincida con lo siguiente. 

Add routerLink to AppComponent

```
template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],

```

Confima que el código funcione.


Rs: 

Se agrego enrutamiento para una página de detalles

Ahora sabe cómo:

#### Usar parámetros de ruta para pasar datos a una ruta
#### Usar la directiva routerLink para usar datos dinámicos y crear una ruta
#### Usar el parámetro de ruta para recuperar datos del HousingService y mostrar información específica sobre la ubicación de la vivienda



### Forms

Añadir un formulario a tu aplicación Angular

#### Muestra cómo añadir un formulario que recopila datos de usuario a una aplicación Angular. 

Comienza con una aplicación Angular funcional y muestra cómo añadirle un formulario.

#### Los datos que recopila el formulario se envían únicamente al servicio de la aplicación, que los escribe en la consola del navegador. 

#### El uso de una API REST para enviar y recibir los datos del formulario no se aborda en esta lección.

Usar un ide local para los ejemplos. 


1. Tu aplicación tiene un formulario donde los usuarios pueden ingresar datos que se envían al servicio de la aplicación. 

2. El servicio escribe los datos del formulario en el registro de la consola del navegador.


### 1. Añadir un método para enviar datos del formulario

#### Este paso añade un método al servicio de tu aplicación que recibe los datos del formulario para enviarlos a su destino. 

#### En este ejemplo, el método escribe los datos del formulario en el registro de la consola del navegador.


En el panel Editar de tu IDE:

1. En src/app/housing.service.ts, dentro de la clase HousingService, pega este método al final de la definición de la clase.

Submit method in src/app/housing.service.ts

```
submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }

```

Confirme que la aplicación se compila correctamente. 

Corrija cualquier error antes de continuar con el siguiente paso.


### 2. Añade las funciones del formulario a la página de detalles.

#### Este paso añade el código a la página de detalles que gestiona las interacciones del formulario.


En el panel Editar de tu IDE, en src/app/details/details.component.ts:

1. Después de las instrucciones de importación en la parte superior del archivo, añade el siguiente código para importar las clases del formulario de Angular.

Forms imports in src/app/details/details.component.ts

```
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

```

En los metadatos del decorador DetailsComponent, actualice la propiedad imports con el siguiente código:

imports directive in src/app/details/details.component.ts

```
template: `

```

#### En la clase DetailsComponent, antes del método constructor(), agregue el siguiente código para crear el objeto de formulario.

template directive in src/app/details/details.component.ts

```
firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

```

En Angular, FormGroup y FormControl son tipos que permiten crear formularios. 

#### El tipo FormControl puede proporcionar un valor predeterminado y dar forma a los datos del formulario. 

#### En este ejemplo, firstName es una cadena y el valor predeterminado es una cadena vacía.

2. En la clase DetailsComponent, después del método constructor(), agregue el siguiente código para controlar el clic en Aplicar ahora

template directive in src/app/details/details.component.ts

```
this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}

```

Este botón aún no existe; lo agregará en el siguiente paso.

En el código anterior, FormControls podría devolver un valor nulo. 

Este código utiliza el operador de fusión/nullish coalescing operator nulo para establecer una cadena vacía por defecto si el valor es nulo.

3. Confirmar que compila sin errores, si los hay, corregirlos. 


### 3. Añadir el marcado del formulario a la página de detalles

#### Este paso añade el marcado a la página de detalles que muestra el formulario.


En el panel Editar de su IDE, en src/app/details/details.component.ts:

1. En los metadatos del decorador DetailsComponent, actualice el HTML de la plantilla para que coincida con el siguiente código y así añadir el marcado del formulario.

template directive in src/app/details/details.component.ts

```
<article>
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
        crossorigin
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>Does this location have laundry: {{ housingLocation?.laundry }}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName" />
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />
          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" />
          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],

```

#### La plantilla ahora incluye un controlador de eventos (submit)="submitApplication()". 

Angular usa la sintaxis de paréntesis alrededor del nombre del evento para definir eventos en el código de la plantilla. 

El código a la derecha del signo igual es el que debe ejecutarse cuando se activa este evento. 

Puedes vincularlo a eventos del navegador y eventos personalizados.

2. Confirme que la aplicación se compila correctamente. 

Corrija cualquier error antes de continuar con el siguiente paso. 


### 4. Prueba el nuevo formulario de tu app

Este paso prueba el nuevo formulario para comprobar que, al enviar los datos a la app, estos aparezcan en el registro de la consola.


1. En el panel Terminal de tu IDE, ejecuta ng serve si aún no se está ejecutando.

2. En tu navegador, abre la app en http://localhost:4200.

3. Haz clic derecho en la app en el navegador y, en el menú contextual, selecciona "Inspeccionar".

4. En la ventana de herramientas para desarrolladores, selecciona la pestaña "Consola". 

Asegúrate de que la ventana de herramientas para desarrolladores esté visible para los siguientes pasos.

5. En tu app:
	Selecciona la ubicación de una vivienda y haz clic en "Más información" para ver los detalles de la casa.
	En la página de detalles de la casa, desplázate hasta la parte inferior para encontrar el nuevo formulario.
	Introduce los datos en los campos del formulario; cualquier dato es válido.
	Selecciona "Solicitar ahora" para enviar los datos.
	En la ventana de herramientas para desarrolladores, revisa el registro para encontrar los datos de tu formulario.


Rs: 

#### Actualizó su aplicación para agregar un formulario usando la función de formularios de Angular y conectar los datos capturados en el formulario a un componente usando un controlador de eventos.



## Search

Muestra cómo añadir una función de búsqueda

Permitirá a los usuarios buscar entre los datos proporcionados por tu app y mostrará solo los resultados que coincidan con el término introducido.

Usar un ide local 


1. Tu aplicación usará los datos de un formulario para buscar viviendas que coincidan con tu búsqueda.

2. Tu aplicación mostrará solo las viviendas que coincidan con tu búsqueda.


### 1. Actualizar las propiedades del componente de inicio

#### En este paso, actualizará la clase HomeComponent para almacenar datos en una nueva propiedad de matriz que usará para filtrar.

1. En src/app/home/home.component.ts, agregue una nueva propiedad a la clase llamada filteredLocationList. 

Add the filtered results property

```
constructor() {

```

#### La filteredLocationList contiene los valores que coinciden con los criterios de búsqueda ingresados ​​por el usuario.

2. La lista de ubicaciones filtradas debe contener el conjunto completo de valores de ubicación de viviendas por defecto al cargar la página. 

Actualice el constructor de HomeComponent para establecer el valor.

Set the value of filteredLocationList

```
	this.housingLocationList = this.housingService.getAllHousingLocations();
	this.filteredLocationList = this.housingLocationList;
}
filterResults(text: string) {

```


### 2. Actualizar la plantilla del componente de inicio

El componente de inicio ya contiene un campo de entrada que se usará para capturar la información del usuario. 

Esta cadena de texto se usará para filtrar los resultados.


1. Actualizar la plantilla del componente de inicio para incluir una variable de plantilla en el elemento de entrada llamada #filter

Add a template variable to HomeComponent's template

```
<input type="text" placeholder="Filter by city" #filter>

```

#### Este ejemplo utiliza una variable de referencia de plantilla para obtener acceso al elemento de entrada como su valor

2. A continuación, actualice la plantilla del componente para adjuntar un controlador de eventos al botón "Buscar".

Bind the click evetn 

```
<button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>

```

#### Al vincular el evento de clic al elemento del botón, se puede llamar a la función filterResults. 

#### El argumento de la función es la propiedad ```value``` de la variable de plantilla de filtro. 

En concreto, la propiedad ```.value``` del elemento HTML de entrada.

3. La última actualización de la plantilla corresponde a la directiva ngFor. 

Actualice el valor de ngFor para iterar sobre los valores de la matriz filteredLocationList. 

Update the ngFor directive value

```
<app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
    
```


### 3. Implementar la función del controlador de eventos

#### La plantilla se ha actualizado para vincular la función filterResults al evento click. 

A continuación, deberá implementar la función filterResults en la clase HomeComponent.


1. Actualice la clase HomeComponent para incluir la implementación de la función filterResults. 

Add the filterResults function implementation

```
if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}

```

Esta función utiliza el filtro de cadena para comparar el valor del parámetro de texto con la propiedad housingLocation.city. 

Puede actualizar esta función para que coincida con cualquier propiedad o varias, lo que le permitirá realizar un ejercicio divertido.

2. Guarde su código.

3. Actualice el navegador y confirme que puede buscar los datos de ubicación de viviendas por ciudad al hacer clic en el botón "Buscar" después de ingresar el texto.

Rs:

Actualizó su aplicación para usar variables de plantilla para interactuar con valores de plantilla y agregar funcionalidad de búsqueda mediante vinculación de eventos y funciones de matriz.



### HTTP 

Muestra cómo integrar HTTP y una API en tu aplicación.

#### Hasta este punto, tu aplicación ha leído datos de una matriz estática en un servicio Angular. 

#### El siguiente paso es usar un servidor JSON con el que tu aplicación se comunicará mediante HTTP. 

La solicitud HTTP simulará la experiencia de trabajar con datos de un servidor.

Usar un ide local 


Su aplicación utilizará datos de un servidor JSON


### 1. Configurar el servidor JSON

#### El servidor JSON es una herramienta de código abierto que se utiliza para crear API REST simuladas. 

#### Se usará para proporcionar los datos de ubicación de viviendas almacenados actualmente en el servicio de alojamiento.


1. Instala json-server desde npm con el siguiente comando.

```
npm install -g json-server

```

2. En el directorio raíz de tu proyecto, crea un archivo llamado db.json. 

#### Aquí almacenarás los datos del servidor json.

3. Abre db.json y copia el siguiente código en el archivo.

```
{
         "locations": [
             {
                 "id": 0,
                 "name": "Acme Fresh Start Housing",
                 "city": "Chicago",
                 "state": "IL",
                 "photo": "https://angular.dev/assets/images/tutorials/common/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
                 "availableUnits": 4,
                 "wifi": true,
                 "laundry": true
             },
             {
                 "id": 1,
                 "name": "A113 Transitional Housing",
                 "city": "Santa Monica",
                 "state": "CA",
                 "photo": "https://angular.dev/assets/images/tutorials/common/brandon-griggs-wR11KBaB86U-unsplash.jpg",
                 "availableUnits": 0,
                 "wifi": false,
                 "laundry": true
             },
             {
                 "id": 2,
                 "name": "Warm Beds Housing Support",
                 "city": "Juneau",
                 "state": "AK",
                 "photo": "https://angular.dev/assets/images/tutorials/common/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
                 "availableUnits": 1,
                 "wifi": false,
                 "laundry": false
             },
             {
                 "id": 3,
                 "name": "Homesteady Housing",
                 "city": "Chicago",
                 "state": "IL",
                 "photo": "https://angular.dev/assets/images/tutorials/common/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
                 "availableUnits": 1,
                 "wifi": true,
                 "laundry": false
             },
             {
                 "id": 4,
                 "name": "Happy Homes Group",
                 "city": "Gary",
                 "state": "IN",
                 "photo": "https://angular.dev/assets/images/tutorials/common/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
                 "availableUnits": 1,
                 "wifi": true,
                 "laundry": false
             },
             {
                 "id": 5,
                 "name": "Hopeful Apartment Group",
                 "city": "Oakland",
                 "state": "CA",
                 "photo": "https://angular.dev/assets/images/tutorials/common/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
                 "availableUnits": 2,
                 "wifi": true,
                 "laundry": true
             },
             {
                 "id": 6,
                 "name": "Seriously Safe Towns",
                 "city": "Oakland",
                 "state": "CA",
                 "photo": "https://angular.dev/assets/images/tutorials/common/phil-hearing-IYfp2Ixe9nM-unsplash.jpg",
                 "availableUnits": 5,
                 "wifi": true,
                 "laundry": true
             },
             {
                 "id": 7,
                 "name": "Hopeful Housing Solutions",
                 "city": "Oakland",
                 "state": "CA",
                 "photo": "https://angular.dev/assets/images/tutorials/common/r-architecture-GGupkreKwxA-unsplash.jpg",
                 "availableUnits": 2,
                 "wifi": true,
                 "laundry": true
             },
             {
                 "id": 8,
                 "name": "Seriously Safe Towns",
                 "city": "Oakland",
                 "state": "CA",
                 "photo": "https://angular.dev/assets/images/tutorials/common/saru-robert-9rP3mxf8qWI-unsplash.jpg",
                 "availableUnits": 10,
                 "wifi": false,
                 "laundry": false
             },
             {
                 "id": 9,
                 "name": "Capital Safe Towns",
                 "city": "Portland",
                 "state": "OR",
                 "photo": "https://angular.dev/assets/images/tutorials/common/webaliser-_TPTXZd9mOo-unsplash.jpg",
                 "availableUnits": 6,
                 "wifi": true,
                 "laundry": true
             }
         ]
     }

```

4. Guarda este archivo.

5. Es hora de probar tu configuración. 

Desde la línea de comandos, en la raíz de tu proyecto, ejecuta los siguientes comandos.

```
json-server --watch db.json

```

6. En su navegador web, acceda a http://localhost:3000/locations y confirme que la respuesta incluya los datos almacenados en db.json.

Si tiene algún problema con la configuración, puede encontrar más detalles en la documentación oficial. 


### 2. Actualizar el servicio para usar el servidor web en lugar de la matriz local.

#### La fuente de datos se ha configurado. 

#### El siguiente paso es actualizar la aplicación web para conectarse a ella usando los datos.


1. En src/app/housing.service.ts, realice los siguientes cambios:

Actualice el código para eliminar la propiedad housingLocationList y la matriz que contiene los datos.

Agregue una propiedad de cadena llamada url y establezca su valor en "http://localhost:3000/locations". 

```
url = 'http://localhost:3000/locations';

```

Este código generará errores en el resto del archivo porque depende de la propiedad housingLocationList. 

A continuación, actualizaremos los métodos de servicio.


3. Actualice la función getAllHousingLocations para que realice una llamada al servidor web que configuró.

adev/src/content/tutorials/first-app/steps/14-http/src-final/app/housing.service.ts

```
async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

```

El código ahora usa código asíncrono para realizar una solicitud GET mediante HTTP.

#### En este ejemplo, el código usa fetch. 

#### Para casos de uso más avanzados, considere usar HttpClient, proporcionado por Angular.

adev/src/content/tutorials/first-app/steps/14-http/src-final/app/housing.service.ts

```
async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const locationJson = await data.json();
    return locationJson[0] ?? {};

```

5. Una vez que se completen todas las actualizaciones, su servicio actualizado debería coincidir con el siguiente código

Final version of housing.service.ts

```
import {Injectable} from '@angular/core';
import {HousingLocation} from './housinglocation';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const locationJson = await data.json();
    return locationJson[0] ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    // tslint:disable-next-line
    console.log(firstName, lastName, email);
  }

``` 


### 3. Actualice los componentes para usar llamadas asíncronas al servicio de alojamiento.

El servidor ahora lee datos de la solicitud HTTP, pero los componentes que dependen del servicio presentan errores porque se programaron para usar la versión síncrona del servicio.

1. En src/app/home/home.component.ts, actualice el constructor para usar la nueva versión asíncrona del método getAllHousingLocations.

adev/src/content/tutorials/first-app/steps/14-http/src-final/app/home/home.component.ts
 
```
this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

```

2. En src/app/details/details.component.ts, actualice el constructor para usar la nueva versión asincrónica del método getHousingLocationById 

adev/src/content/tutorials/first-app/steps/14-http/src-final/app/details/details.component.ts

```
const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation;
    });
  }

```

3. Salvar el código, abrir la app y confirmar que corre sin errores. 


NOTA: Esta lección se basa en la API fetch del navegador.

Para obtener información sobre la compatibilidad con interceptors, consulte la documentación del cliente HTTP.


Rs:

Actualizó su aplicación para usar un servidor web local (servidor JSON) y métodos de servicio asíncronos para recuperar datos.



# Angular en profundidad

## Signals

#### Es un sistema que rastrea detalladamente cómo y dónde se utiliza el estado en una aplicación, lo que permite al framework optimizar las actualizaciones de renderizado.

¿Qué son las señales?

#### Una señal es un contenedor que envuelve un valor y notifica a los usuarios interesados ​​cuando este cambia. 

Las señales pueden contener cualquier valor, desde primitivos hasta estructuras de datos complejas.


El valor de una señal se lee llamando a su función getter, lo que permite a Angular rastrear dónde se utiliza.

#### Las señales pueden ser de solo lectura o de escritura.


### Señales escribibles

Las señales escribibles proporcionan una API para actualizar sus valores directamente. 

#### Para crear señales escribibles, se llama a la función de signal con el valor inicial de la señal:


```
const count = signal(0);

// Las señales son funciones getter: al llamarlas se lee su valor.
console.log('The count is: ' + count());

```

Para cambiar el valor de una señal escribible, ejecute .set() directamente:

```
count.set(3);

```

o utilice la operación .update() para calcular un nuevo valor a partir del anterior:

```
// Increment the count by 1.
count.update(value => value + 1);

```

#### Las señales escribibles tienen el tipo WritableSignal.


### Señales calculadas/Computed signal 

#### Las Computed signal son señales de solo lectura que derivan su valor de otras señales. 

Se definen mediante la función computed y especificando una derivación. 

```
const count: WritableSignal<number> = signal(0);
const doubleCount: Signal<number> = computed(() => count() * 2);

```

#### La señal doubleCount depende de la señal count.

Cada vez que count se actualiza, Angular sabe que doubleCount también debe actualizarse.


### Las Computed signals se evalúan y memorizan de forma diferida.

La función de derivación de doubleCount no se ejecuta para calcular su valor hasta la primera lectura de doubleCount. 

El valor calculado se almacena en caché y, si se vuelve a leer doubleCount, se devolverá el valor almacenado en caché sin volver a calcularlo.


Si se modifica count, Angular sabe que el valor almacenado en caché de doubleCount ya no es válido y, la próxima vez que se lea doubleCount, se calculará su nuevo valor.

#### Como resultado, se pueden realizar derivaciones computacionalmente costosas en señales calculadas, como el filtrado de arrays, de forma segura.


### Las señales computadas no son escribibles.

No se pueden asignar valores directamente a una señal computada. Es decir:

```
doubleCount.set(3);

```

Produce un error de compilación, porque doubleCount no es un WritableSignal.


### Las dependencias de computed signal son dinámicas.

Solo se rastrean las señales realmente leídas durante la derivación. 

Por ejemplo, en este cálculo, la señal de conteo solo se lee si la señal "showCount" es verdadera.

```
const showCount = signal(false);
const count = signal(0);
const conditionalCount = computed(() => {
  if (showCount()) {
    return `The count is ${count()}.`;
  } else {
    return 'Nothing to see here!';
  }
});

```

Al leer conditionalCount, si showCount es falso, se devuelve el mensaje "¡No hay nada que ver aquí!" sin leer la señal de count. 

Esto significa que si posteriormente actualiza count, no se volverá a calcular conditionalCount.


Si establece showCount en verdadero y vuelve a leer conditionalCount, la derivación se volverá a ejecutar y tomará la rama donde showCount es verdadero, devolviendo el mensaje que muestra el valor de count. 

Cambiar count invalidará el valor en caché de conditionalCount.


Tenga en cuenta que las dependencias se pueden eliminar y añadir durante una derivación. 

Si posteriormente establece showCount en falso, count dejará de considerarse una dependencia de conditionalCount.


### Leer signals en OnPush components

Al leer una señal dentro de la plantilla de un componente OnPush, Angular la rastrea como una dependencia de ese componente. 

Cuando el valor de esa señal cambia, Angular marca automáticamente el componente para garantizar que se actualice la próxima vez que se ejecute la detección de cambios. 

Consulta la guía "Omitir subárboles de componentes"/skipping subtrees para obtener más información sobre los componentes OnPush.


### Effects

Las señales son útiles porque notifican a los consumidores interesados ​​cuando cambian. 

Un efecto es una operación que se ejecuta cuando uno o más valores de señal cambian. 

Puedes crear un efecto con la función de efecto.

```
effect(() => {
  console.log(`The current count is: ${count()}`);
});

``` 

Los efectos siempre se ejecutan al menos una vez. 

Al ejecutarse, rastrean cualquier lectura de valor de señal. 

Si alguno de estos valores de señal cambia, el efecto se vuelve a ejecutar. 

Al igual que las señales calculadas, los efectos rastrean dinámicamente sus dependencias y solo rastrean las señales leídas en la ejecución más reciente.

Los efectos siempre se ejecutan de forma asíncrona durante el proceso de detección de cambios.


### Casos de uso de efectos

Los efectos rara vez se necesitan en la mayoría del código de aplicación, pero pueden ser útiles en circunstancias específicas. 

A continuación, se muestran algunos ejemplos de situaciones en las que un efecto podría ser una buena solución:

Registrar los datos que se muestran y cuándo cambian, ya sea para análisis o como herramienta de depuración.
Mantener los datos sincronizados con window.localStorage.
Añadir un comportamiento DOM personalizado que no se puede expresar con la sintaxis de plantilla.
Realizar renderizado personalizado en un <canvas>, una biblioteca de gráficos u otra biblioteca de interfaz de usuario de terceros.


### Cuándo no usar efectos

Evite usar efectos para propagar cambios de estado. 

Esto puede generar errores de ExpressionChangedAfterItHasBeenChecked, actualizaciones circulares infinitas o ciclos de detección de cambios innecesarios.


#### En su lugar, utilice señales calculadas para modelar estados que dependen de otros estados.


### Injection context 

De forma predeterminada, solo se puede crear un effect() dentro de un contexto de inyección (donde se tiene acceso a la función de inyección). 

La forma más sencilla de cumplir este requisito es llamar a un efecto dentro de un componente, directiva o constructor de servicio.

```
@Component({...})
export class EffectiveCounterComponent {
  readonly count = signal(0);
  constructor() {
    // Register a new effect.
    effect(() => {
      console.log(`The count is: ${this.count()}`);
    });
  }
}

```

Alternativamente, puede asignar el efecto a un campo/field/prop/var (lo que también le da un nombre descriptivo).

```
@Component({...})
export class EffectiveCounterComponent {
  readonly count = signal(0);
  private loggingEffect = effect(() => {
    console.log(`The count is: ${this.count()}`);
  });
}

```

Para crear un efecto fuera del constructor, puedes pasar un Inyector al efecto al efecto

Injector to effect via its options

```
@Component({...})
export class EffectiveCounterComponent {
  readonly count = signal(0);
  private injector = inject(Injector);
  initializeLogging(): void {
    effect(() => {
      console.log(`The count is: ${this.count()}`);
    }, {injector: this.injector});
  }
}

```


### Destrucción de efectos

#### Al crear un efecto, este se destruye automáticamente al destruirse su contexto. 

Esto significa que los efectos creados dentro de los componentes se destruyen al destruirse el componente. 

Lo mismo ocurre con los efectos dentro de directivas, servicios, etc.


#### Los efectos devuelven una referencia de efecto (EffectRef) que se puede usar para destruirlos manualmente mediante el método .destroy(). 

Se puede combinar con la opción manualCleanup para crear un efecto que dure hasta su destrucción manual. 

Asegúrese de limpiar estos efectos cuando ya no sean necesarios.


### Temas avanzados

### Signal equality functions

Al crear una señal, puede proporcionar opcionalmente una función de igualdad/equality function que se utilizará para comprobar si el nuevo valor es realmente diferente del anterior.

```
import _ from 'lodash';

const data = signal(['test'], {equal: _.isEqual});


//Aunque se trata de una instancia de matriz diferente, la igualdad profunda...
/La función considerará los valores como iguales, pero la señal no.
//Activará cualquier actualización...
data.set(['test']);

```

Se pueden proporcionar funciones de igualdad tanto a señales escribibles como a señales calculadas.

ÚTIL: De forma predeterminada, las señales utilizan igualdad referencial (comparación Object.is()).


### Lectura sin seguimiento de dependencias

En raras ocasiones, podría ser útil ejecutar código que lea señales dentro de una función reactiva, como computed o effect, sin crear una dependencia.


Por ejemplo, supongamos que cuando currentUser cambia, se debe registrar el valor de un contador. 

Podría crear un efecto que lea ambas señales.

```
effect(() => {
  console.log(`User set to ${currentUser()} and the counter is ${counter()}`);
});

```

Este ejemplo registrará un mensaje cuando currentUser o counter cambien. 

Sin embargo, si el efecto solo debe ejecutarse cuando currentUser cambie, la lectura de counter será solo incidental y los cambios en counter no registrarán un nuevo mensaje.


Puede evitar que se rastree la lectura de una señal llamando a su getter con untracked.

```
effect(() => {
  console.log(`User set to ${currentUser()} and the counter is ${untracked(counter)}`);
});

```

Untracked también es útil cuando un efecto necesita invocar algún código externo que no debería tratarse como una dependencia.

```
effect(() => {
  const user = currentUser();
  untracked(() => {
	// Si `loggingService` lee señales, no se contabilizarán 
	//como dependencias de este efecto.
    this.loggingService.log(`User set to ${user}`);
  });
});

```


### Funciones de limpieza de efectos

Los efectos pueden iniciar operaciones de larga duración, que deben cancelarse si el efecto se destruye o se vuelve a ejecutar antes de que finalice la primera operación. 

Al crear un efecto, la función puede aceptar opcionalmente una función "onCleanup" como primer parámetro. 

Esta función permite registrar una devolución de llamada que se invoca antes de que comience la siguiente ejecución del efecto o cuando este se destruye.

```
effect((onCleanup) => {
  const user = currentUser();
  const timer = setTimeout(() => {
    console.log(`1 second ago, the user became ${user}`);
  }, 1000);
  onCleanup(() => {
    clearTimeout(timer);
  });
});

```


### Uso de señales con RxJS

Consulte la interoperabilidad de RxJS con señales de Angular para obtener más información sobre la interoperabilidad entre señales y RxJS.



## Components

Todo componente debe tener:

Una clase TypeScript con comportamientos como el manejo de la entrada del usuario y la obtención de datos de un servidor.
Una plantilla HTML que controla lo que se renderiza en el DOM.
Un selector CSS que define cómo se usa el componente en HTML.

Se proporciona información específica de Angular para un componente añadiendo un decorador @Component sobre la clase TypeScript. 

```
@Component({
  selector: 'profile-photo',
  template: `<img src="profile-photo.jpg" alt="Your profile photo">`,
})
export class ProfilePhoto { }

```

#### El objeto pasado al decorador @Component se denomina metadatos del componente. 

Esto incluye el selector, la plantilla y otras propiedades descritas a lo largo de esta guía.

Los componentes pueden incluir opcionalmente una lista de estilos CSS aplicables a su DOM.

```
@Component({
  selector: 'profile-photo',
  template: `<img src="profile-photo.jpg" alt="Your profile photo">`,
  styles: `img { border-radius: 50%; }`,
})
export class ProfilePhoto { }

```

Por defecto, los estilos de un componente solo afectan a los elementos definidos en su plantilla. 

También puedes escribir la plantilla y los estilos en archivos separados.

```
@Component({
  selector: 'profile-photo',
  templateUrl: 'profile-photo.html',
  styleUrl: 'profile-photo.css',
})
export class ProfilePhoto { }

```

#### Esto puede ayudar a separar las preocupaciones sobre la presentación del comportamiento en tu proyecto. 

Puedes elegir un enfoque para todo el proyecto o decidir cuál usar para cada componente.

#### Tanto templateUrl como styleUrl son relativos al directorio donde reside el componente.


### Uso de componentes

### Importaciones en el decorador @Component

#### Para usar un component, directive, o pipe, debe agregarlo a la matriz de importaciones del decorador @Component.

```
import {ProfilePhoto} from './profile-photo';

@Component({
	//Importar el componente «ProfilePhoto»
	// para usarlo en la plantilla de este componente.
	imports: [ProfilePhoto],
	... 
})
export class UserProfile { }	

```

#### Por defecto, los componentes de Angular son independientes, lo que significa que se pueden añadir directamente a la matriz de importaciones de otros componentes. 

#### Los componentes creados con una versión anterior (< v.19) de Angular pueden especificar standalone: ​​false en su decorador @Component. 

Para estos componentes, se importa el NgModule en el que se define el componente. 

Consulta la guía completa de NgModule para más detalles.

#### IMPORTANTE: En versiones de Angular anteriores a la 19.0.0, la opción standalone tiene el valor predeterminado false.


### Visualización de componentes en una plantilla

Cada componente define un selector CSS:

```
@Component({
  selector: 'profile-photo',
  ...
})
export class ProfilePhoto { }

```

Para mostrar un componente, cree un elemento HTML coincidente en la plantilla de otros componentes:

```
@Component({
  selector: 'profile-photo',
})
export class ProfilePhoto { }

@Component({
  imports: [ProfilePhoto],
  template: `<profile-photo />`
})
export class UserProfile { }

```

selector: profile-photo -> <profile-photo />


#### Angular crea una instancia del componente por cada elemento HTML coincidente que encuentra. 

El elemento DOM que coincide con el selector de un componente se denomina elemento anfitrión de ese componente (component's host element). 

#### El contenido de la plantilla de un componente se renderiza dentro de su elemento anfitrión.


#### El DOM renderizado por un componente, correspondiente a su plantilla, se denomina vista del componente (component's view.).

#### Al componer componentes de esta manera, puede considerar su aplicación Angular como un árbol de componentes.

```
		AccountSettings
		/			\
	UserProfile		Paymentinfo
	/		\
ProfilePic 	UserBio
	
```

#### Esta estructura de árbol es importante para comprender varios otros conceptos de Angular, incluida la inyección de dependencia y las consultas secundarias (child queries).



## Templates

En Angular, una plantilla es un fragmento de HTML. 

Usa una sintaxis especial dentro de una plantilla para aprovechar muchas de las funciones de Angular.


#### Cada componente de Angular tiene una plantilla que define el DOM que el componente renderiza en la página. 

#### Mediante el uso de plantillas, Angular mantiene la página actualizada automáticamente a medida que cambian los datos.

Las plantillas suelen encontrarse en la propiedad "template" de un archivo ```*.component.ts o *.component.html```. 


### ¿Cómo funcionan las plantillas?

Las plantillas se basan en la sintaxis HTML, con características adicionales como funciones de plantilla integradas, enlace de datos, escucha de eventos, variables y más.

(template functions, data binding, event listening, variables)


Angular compila las plantillas en JavaScript para comprender mejor tu aplicación. 

Una de las ventajas de esto son las optimizaciones de renderizado integradas que Angular aplica automáticamente a tu aplicación.


### Diferencias con el HTML estándar

Algunas diferencias entre las plantillas y la sintaxis HTML estándar incluyen:

1. Los comentarios en el código fuente de la plantilla no se incluyen en la salida renderizada.

2. Los elementos de componente y directiva pueden autocerrarse (p. ej., <UserProfile />).

3. Los atributos con ciertos caracteres (p. ej., ```[]```, ```()```, etc.) tienen un significado especial para Angular. 

(binding) y (event listeners)

4. El carácter @ tiene un significado especial para Angular, ya que permite añadir comportamiento dinámico, como el flujo de control, a las plantillas. 

(@If, @Else, @For)

Puedes incluir un carácter @ literal escapándolo como código de entidad HTML (&commat; o &#64;).

5. Angular ignora y contrae los espacios en blanco innecesarios. 

(De ser necesarios, crear un string ' ')

6. Angular puede añadir nodos de comentario a una página como marcadores de posición/placeholders para contenido dinámico, pero los desarrolladores pueden ignorarlos.


Además, aunque la mayor parte de la sintaxis HTML es válida para plantillas, Angular no admite el elemento <script> en las plantillas. 

Para más información, consulte la página de Seguridad.



## Directives 

#### Son clases que agregan comportamiento adicional a los elementos en sus aplicaciones Angular.

#### Utilice las directivas integradas de Angular para gestionar formularios, listas, estilos y lo que ven los usuarios.

Los diferentes tipos de directivas de Angular son los siguientes:

1. Components: 

Se utiliza con una plantilla. 

Este tipo de directiva es el más común.

2. Attribute directives: 

Cambia la apariencia o el comportamiento de un elemento, componente u otra directiva.

3. Structural directives: 

Cambia el diseño del DOM añadiendo y eliminando elementos.


### Directivas de atributos integradas

Las directivas de atributos escuchan y modifican el comportamiento de otros elementos, atributos, propiedades y componentes HTML.

Las directivas de atributos más comunes son las siguientes:

1. NgClass

Añade y elimina un conjunto de clases CSS.

2. NgStyle

Añade y elimina un conjunto de estilos HTML.

3. NgModel

Añade un enlace de datos bidireccional a un elemento de formulario HTML.


ÚTIL: Las directivas integradas solo utilizan API públicas. 
No tienen acceso especial a ninguna API privada a la que otras directivas no puedan acceder.


### Añadir y eliminar clases con NgClass

#### Agregue o elimine varias clases CSS simultáneamente con ngClass.

ÚTIL: Para agregar o eliminar una sola clase, utilice la vinculación de clases en lugar de NgClass.

(class binding)


### Importar NgClass en el componente

Para usar NgClass, añádalo a la lista de importaciones del componente.

src/app/app.component.ts (NgClass import)

```
import {NgClass} from '@angular/common';
	...
@Component({
	...
    NgClass, // <-- import into the component
	...
  ],
})
export class AppComponent implements OnInit {
	...
}

```


### Uso de NgClass con una expresión

En el elemento al que desea aplicar estilo, agregue ```[ngClass]``` y establézcalo como una expresión. 

En este caso, isSpecial es un booleano establecido como verdadero en app.component.ts. 

#### Dado que isSpecial es verdadero, ngClass aplica la clase de especial al <div>.

src/app/app.component.html

```
<!-- Activar o desactivar la clase "especial" con una propiedad -->
<div [ngClass]="isSpecial ? 'special' : ''">This div is special</div>

```


### Uso de NgClass con un método

1. Para usar NgClass con un método, añada el método a la clase del componente. 

En el siguiente ejemplo, setCurrentClasses() establece la propiedad currentClasses con un objeto que añade o elimina tres clases según el estado verdadero o falso de otras tres propiedades del componente.


#### Cada clave del objeto es un nombre de clase CSS. 

Si una clave es verdadera, ngClass añade la clase. 

Si una clave es falsa, ngClass la elimina.

src/app/app.component.ts

```
currentClasses: Record<string, boolean> = {};
...
  setCurrentClasses() {
	//Clases CSS: agregadas/eliminadas según el estado actual de las propiedades del componente
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial,
    };
  }

```

2. En la plantilla, agregue la vinculación de la propiedad ngClass a currentClasses para establecer las clases del elemento

src/app/app.component.html

```
<div [ngClass]="currentClasses">This div is initially saveable, unchanged, and special.</div>

```

#### Para este caso de uso, Angular aplica las clases al inicializarse y en caso de cambios causados ​​por la reasignación del objeto currentClasses. 

#### El ejemplo completo llama a setCurrentClasses() inicialmente con ngOnInit() cuando el usuario hace clic en el botón Actualizar currentClasses. 

Estos pasos no son necesarios para implementar ngClass.


### Dependency Injection

#### Es un patrón de diseño y un mecanismo para crear y entregar partes de una aplicación a otras que requieren la misma.


#### Al desarrollar una parte más pequeña de su sistema, como un módulo o una clase, podría necesitar usar características de otras clases. 

Por ejemplo, podría necesitar un servicio HTTP para realizar llamadas de backend. 

La inyección de dependencias (DI) es un patrón de diseño y un mecanismo para crear y entregar partes de una aplicación a otras que las requieren. 

Angular admite este patrón de diseño y puede usarlo en sus aplicaciones para aumentar la flexibilidad y la modularidad.


#### En Angular, las dependencias suelen ser servicios, pero también pueden ser valores, como cadenas o funciones. 

#### Un inyector para una aplicación (creado automáticamente durante el arranque) instancia las dependencias cuando es necesario, utilizando un proveedor configurado del servicio o valor.


### Conceptos básicos 

#### La DI está integrada en el framework Angular y permite que las clases con decoradores Angular, como Componentes, Directivas, Pipes e Inyectables, configuren las dependencias que necesitan.

#### Existen dos roles principales en el sistema de DI: consumidor de dependencias y proveedor de dependencias.


Angular facilita la interacción entre consumidores y proveedores de dependencias mediante una abstracción llamada Inyector. 

#### Cuando se solicita una dependencia, el inyector revisa su registro para ver si ya hay una instancia disponible. 

#### De no ser así, se crea una nueva instancia y se almacena en el registro. 

#### Angular crea un inyector para toda la aplicación (también conocido como inyector "raíz") durante el proceso de arranque de la aplicación. 

#### En la mayoría de los casos, no es necesario crear inyectores manualmente, pero es importante saber que existe una capa que conecta a proveedores y consumidores.


Este tema abarca escenarios básicos de cómo una clase puede actuar como dependencia. 

Angular también permite usar funciones, objetos, tipos primitivos como cadenas o booleanos, o cualquier otro tipo como dependencias. 

Para más información, consulte Proveedores de dependencias.


### Proporcionar una dependencia

#### Considere una clase llamada HeroService que debe actuar como dependencia en un componente.

El primer paso es agregar el decorador @Injectable para indicar que la clase se puede inyectar. 

```
@Injectable()
class HeroService {}

```

El siguiente paso es proporcionarla en la instancia de DI.

Una dependencia se puede proporcionar en varios lugares:

1. Preferred/Preferible: En la raíz de la aplicación mediante providedIn

2. En el componente/component level

3. En la raíz de la aplicación/application root level mediante ApplicationConfig

4. Aplicaciones basadas en NgModule


### Preferred/Preferible: En la raíz de la aplicación usando providedIn

#### Proporcionar un servicio en la raíz de la aplicación usando providedIn permite inyectar el servicio en todas las demás clases. 

#### Usar providedIn permite que los optimizadores de código de Angular y JavaScript eliminen eficazmente los servicios no utilizados (lo que se conoce como tree-shaking).


Puede proporcionar un servicio usando providedIn: 'root' en el decorador @Injectable.

```
@Injectable({
  providedIn: 'root'
})
class HeroService {}

```

#### Cuando proporciona el servicio en el nivel raíz, Angular crea una única instancia compartida de HeroService y la inyecta en cualquier clase que la solicite.


### En component level 

Puede proporcionar servicios a nivel de @Component utilizando el campo "providers" del decorador @Component. 

En este caso, HeroService estará disponible para todas las instancias de este componente y de otros componentes y directivas utilizados en la plantilla.

Por ejemplo

```
@Component({
  selector: 'hero-list',
  template: '...',
  providers: [HeroService]
})
class HeroListComponent {}

```

#### Al registrar un proveedor a nivel de componente, se obtiene una nueva instancia del servicio con cada nueva instancia de ese componente.

NOTA: Declarar un servicio de esta manera hace que HeroService siempre se incluya en la aplicación, incluso si no se utiliza.


### En la raíz de la aplicación, usando ApplicationConfig

Puede usar el campo proveedores de ApplicationConfig (pasado a la función bootstrapApplication) para proporcionar un servicio u otro Inyectable a nivel de aplicación.

En el siguiente ejemplo, HeroService está disponible para todos los componentes, directivas y tuberías.

```
export const appConfig: ApplicationConfig = {
    providers: [
      { provide: HeroService },
    ]
};

```

Luego, en main.ts:

```
bootstrapApplication(AppComponent, appConfig)

```

#### NOTA: Declarar un servicio como este hace que HeroService siempre se incluya en su aplicación, incluso si el servicio no se utiliza.


### Aplicaciones basadas en NgModule

Las aplicaciones basadas en @NgModule utilizan el campo proveedores del decorador @NgModule para proporcionar un servicio u otro Inyectable disponible a nivel de aplicación.


Un servicio proporcionado en un módulo está disponible para todas las declaraciones del módulo o para cualquier otro módulo que comparta el mismo ModuleInjector. 

Para comprender todos los casos extremos, consulte Inyectores jerárquicos.


NOTA: Declarar un servicio mediante proveedores hace que este se incluya en la aplicación, incluso si no se utiliza.


### Inyectar/consumir una dependencia

Utilice la función de inyección de Angular para recuperar dependencias.

```
import {inject, Component} from 'angular/core';
@Component({/* ... */})
export class UserProfile {
  //También puedes usar la función `inject` en un constructor.
  private userClient = inject(UserClient);
  constructor() {
    const logger = inject(Logger);
  }
}

```

Puedes usar la función inject en cualquier contexto de inyección. 

Generalmente, se trata de un inicializador de propiedad de clase o un constructor de clase para componentes, directivas, servicios y tuberías.


Cuando Angular detecta que un componente depende de un servicio, primero comprueba si el inyector tiene instancias existentes de ese servicio. 

Si la instancia del servicio solicitado aún no existe, el inyector crea una usando el proveedor registrado y la agrega al inyector antes de devolver el servicio a Angular.


Una vez resueltos y devueltos todos los servicios solicitados, Angular puede llamar al constructor del componente con esos servicios como argumentos.

```
			  Injector 
			/	/  \	\
Service A HeroService Service C Service D 
			/
		Component
		 heroService = inject(HeroService)
		 
```



## Creación de un servicio inyectable
 
#### Un servicio es una categoría amplia que abarca cualquier valor, función o característica que necesite una aplicación. 

#### Un servicio suele ser una clase con un propósito específico y bien definido. 

#### Un componente es un tipo de clase que puede usar DI.


Angular distingue entre componentes y servicios para aumentar la modularidad y la reutilización. 

Al separar las características relacionadas con la vista de un componente de otros tipos de procesamiento, se pueden lograr clases de componentes ágiles y eficientes.


#### Idealmente, la función de un componente es facilitar la experiencia del usuario y nada más. 

#### Un componente debe presentar propiedades y métodos para la vinculación de datos, para mediar entre la vista (representada por la plantilla) y la lógica de la aplicación (que a menudo incluye la noción de un modelo).


#### Un componente puede delegar ciertas tareas a servicios, como obtener datos del servidor, validar la entrada del usuario o iniciar sesión directamente en la consola. 

#### Al definir estas tareas de procesamiento en una clase de servicio inyectable, se ponen a disposición de cualquier componente.

También puede mejorar la adaptabilidad de su aplicación configurando diferentes proveedores del mismo tipo de servicio, según corresponda en diferentes circunstancias.


Angular no impone estos principios. 

Angular le ayuda a seguirlos facilitando la factorización de la lógica de su aplicación en servicios y haciendo que estos servicios estén disponibles para los componentes mediante DI.


### Ej. Services

Una clase de servicio que registra en la consola del navegador:

src/app/logger.service.ts 

```
export class Logger {
  log(msg: unknown) { console.log(msg); }
  error(msg: unknown) { console.error(msg); }
  warn(msg: unknown) { console.warn(msg); }
}

```

Los servicios pueden depender de otros servicios. 

Por ejemplo, aquí hay un HeroService que depende del servicio Logger y también usa BackendService para obtener héroes. 

Ese servicio, a su vez, podría depender del servicio HttpClient para obtener héroes de forma asíncrona desde un servidor.

src/app/hero.service.ts

```
import { inject } from "@angular/core";
export class HeroService {
  private heroes: Hero[] = [];
  private backend = inject(BackendService);
  private logger = inject(Logger);
  async getHeroes() {
    // Fetch
    this.heroes = await this.backend.getAll(Hero);
    // Log
    this.logger.log(`Fetched ${this.heroes.length} heroes.`);
    return this.heroes;
  }
}

```


### Creación de un servicio inyectable

La CLI de Angular proporciona un comando para crear un nuevo servicio. 

En el siguiente ejemplo, se agrega un nuevo servicio a una aplicación existente.


Para generar una nueva clase HeroService en la carpeta src/app/heroes, siga estos pasos:

1. Ejecute este comando de la CLI de Angular

```
ng generate service heroes/hero

```

Este comando crea el siguiente HeroService predeterminado:

src/app/heroes/hero.service.ts (CLI-generated)

```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {}

```

El decorador @Injectable() especifica que Angular puede usar esta clase en el sistema DI. 

Los metadatos, providedIn: 'root', indican que HeroService se proporciona en toda la aplicación.


Agregue un método getHeroes() que devuelva los héroes de mock.heroes.ts para obtener los datos simulados del héroe.

src/app/heroes/hero.service.ts

```
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

@Injectable({
	//Declara que este servicio debe ser creado 
	//por el inyector de la aplicación raíz.
  providedIn: 'root',
})
export class HeroService {
  getHeroes() {
    return HEROES;
  }
}

```

Para mayor claridad y facilidad de mantenimiento, se recomienda definir componentes y servicios en archivos separados.


### Inyección de servicios

Para inyectar un servicio como dependencia en un componente, se puede declarar un campo de clase que represente la dependencia y usar la función de inyección de Angular para inicializarlo.


El siguiente ejemplo especifica HeroService en HeroListComponent. 

El tipo de heroService es HeroService.

src/app/heroes/hero-list.component.ts

```
import { inject } from "@angular/core";
export class HeroListComponent {
  private heroService = inject(HeroService);
}

```

También es posible inyectar un servicio en un componente utilizando el constructor del componente:

src/app/heroes/hero-list.component.ts (constructor signature/firma construct)

```
constructor(private heroService: HeroService)
    
```

El método de inyección puede usarse tanto en clases como en funciones, mientras que el método constructor, naturalmente, solo puede usarse en un constructor de clase. 

Sin embargo, en ambos casos, una dependencia solo puede inyectarse en un contexto de inyección válido, generalmente durante la construcción o inicialización de un componente.

src/app/herores/hero.service.ts

```
import { inject, Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Logger } from '../logger.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private logger = inject(Logger);
  getHeroes() {
    this.logger.log('Getting heroes.');
    return HEROES;
  }
}

```

En este ejemplo, el método getHeroes() utiliza el servicio Logger al registrar un mensaje al obtener héroes.


### Configuración de proveedores de dependencias

#### Las secciones anteriores describieron cómo usar instancias de clase como dependencias. 

#### Además de las clases, también puede usar valores como booleanos, cadenas, fechas y objetos como dependencias. 

Angular proporciona las API necesarias para flexibilizar la configuración de dependencias, de modo que pueda habilitar esos valores en la DI.


### Especificación de un token de proveedor

Si se especifica la clase de servicio como token de proveedor, el inyector, por defecto, instancia dicha clase mediante el operador `new`.

En el siguiente ejemplo, el componente `app` proporciona una instancia de `Logger`.

src/app/app.component.ts

```
      providers: [Logger],
    
```

Sin embargo, se puede configurar la DI para asociar el token del proveedor del registrador con una clase diferente o cualquier otro valor. 

De esta forma, al inyectar el registrador, se utiliza el valor configurado.


De hecho, la sintaxis del proveedor de la clase es una expresión abreviada que se expande a una configuración del proveedor, definida por la interfaz Provider. 

En este caso, Angular expande el valor del proveedor a un objeto proveedor completo, como se indica a continuación.

src/app/app.component.ts

```
      
[{ provide: Logger, useClass: Logger }]

```

La configuración expandida del proveedor es un literal de objeto con dos propiedades:

1. La propiedad `provider` contiene el token que sirve como clave para consumir el valor de la dependencia.

2. La segunda propiedad es un objeto de definición del proveedor, que indica al inyector cómo crear el valor de la dependencia. La definición del proveedor puede ser una de las siguientes:

`useClass`: esta opción indica a Angular DI que instancia una clase proporcionada cuando se inyecta una dependencia.

`useExisting`: permite crear un alias para un token y referenciar cualquiera existente.

`useFactory`: permite definir una función que construye una dependencia.

`useValue`: proporciona un valor estático que debe usarse como dependencia.


### Usar las diferentes definiciones de proveedor.

### Proveedores de clases: useClass

### La clave del proveedor useClass permite crear y devolver una nueva instancia de la clase especificada.

Puede usar este tipo de proveedor para sustituir una implementación alternativa de una clase común o predeterminada. 

La implementación alternativa puede, por ejemplo, implementar una estrategia diferente, extender la clase predeterminada o emular el comportamiento de la clase real en un caso de prueba.


En el siguiente ejemplo, se instanciaría BetterLogger cuando se solicita la dependencia de Logger en un componente o en cualquier otra clase.

src/app/app.component.ts

```
[{ provide: Logger, useClass: BetterLogger }]
    
```

Si los proveedores de clases alternativas tienen sus propias dependencias, especifique ambos proveedores en la propiedad de metadatos de proveedores del módulo o componente principal.

src/app/app.component.ts

```
[
  UserService, // dependency needed in `EvenBetterLogger`.
  { provide: Logger, useClass: EvenBetterLogger },
]

```

En este ejemplo, EvenBetterLogger muestra el nombre de usuario en el mensaje de registro. 

Este registrador/logger obtiene el usuario de una instancia de UserService inyectada.

src/app/even-better-logger.component.ts

```
@Injectable()
export class EvenBetterLogger extends Logger {
  private userService = inject(UserService);
  override log(message: string) {
    const name = this.userService.user.name;
    super.log(`Message to ${name}: ${message}`);
  }
}

```

Angular DI sabe cómo construir la dependencia UserService, ya que se ha configurado anteriormente y está disponible en el inyector.



# Arquitectura Angular 

1. Componente: selector css, plantila html (contenido/representación de la lógica) y clase TS (lógica). 

2. Interpolation: {}, agregamos una propiedad a la clase (tipico de objeto), como agregar funciones, etc; y en la plantilla usamos la interpolación para llamar a esa propiedad y su contenido, si tuviesemos una función también lo podemos hacer con la interpolación. 

3. Composición de componentes: necesitamos dos componentes para pasar datos entre ellos. El contenido que había en un componente, lo podrá renderizar el segundo componente componente contenedor. 

4. Condicionales: @if y @else en la plantilla.

5. Bucles: repetir elementos en la plantilla @for

6. Binding: Comunicación y personalización de componentes con ```[]```. Puede establecer dinámicamente valores para propiedades y atributos. Puede hacer cosas como activar o desactivar funciones de botones, establecer rutas de imágenes de manera programática y compartir valores entre componentes.

7. Eventos: interactividad, responder a las acciones del usuario con ```() y un controlador```.

8. Comunicación entre componentes: @Input puede enviar datos desde un componente principal a uno secundario. 

9. Comunicación entre componentes: Con @Output enviamos datos de un componente secundario a uno principal, por ej. Para notificar a otros componentes que algo ha sucedido como clic en un botón o eliminado un elemento. En este escenario, los componentes deben comunicarse con los componentes principales.

10. Deferrable Views/Vistas diferibles: Si tenemos muchos componentes para hacer referencia que no neceistan cargarse inmediatamente como componentes que esten en un pliege o que sean pesados que entran en accion/se interactúan más tarde, cargamos estos recursos más tarde. 

11. 


# Rs

## Binding prop/var [] de componente a un elem de plantilla 
 
## Binding evento (), el valor de un event de nav será una función de componente

## @Input prop/varX, un componente secundario tendra el input (para recibir info); un componente principal renderizará un secundario y le dará valor a ese input

## @Output prop/varEventEmmiter, un componente secundario tendra el output (para pasar info); un componente principal usará el emmiter del secundario y le dará valor. 

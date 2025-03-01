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

El selector de estilo será app-root

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


Si bien esto es genial, es solo una dirección de la comunicación del componente. 

¿Qué sucede si desea enviar información y datos a un componente principal desde un componente secundario?


### Código incial user.component.ts (componente secundario)

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


## Deferrable Views/Vistas diferibles

A veces, en el desarrollo de aplicaciones, terminas con muchos componentes a los que necesitas hacer referencia en tu aplicación, pero algunos de ellos no necesitan cargarse de inmediato por diversas razones.

Quizás estén debajo del pliegue visible/visible fold o sean componentes pesados ​​con los que no se interactúa hasta más tarde. 

En ese caso, podemos cargar algunos de esos recursos más tarde con vistas diferibles.

Aprenderás a usar vistas diferibles para diferir la carga de una sección de tu plantilla de componente.




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

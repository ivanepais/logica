# Angular

Es un framework y una plataforma de desarrollo, construido sobre TypeScript.

Se utiliza para crear aplicaciones web de una sola página (SPA, Single-Page Application).


Como plataforma, Angular incluye:

1. Un framework basado en componentes para crear aplicaciones web escalables

2. Una colección de bibliotecas bien integradas que cubren una amplia variedad de funciones, incluido el enrutamiento, la administración de formularios, la comunicación cliente-servidor y más. 

3. Un conjunto de herramientas de desarrollo para ayudarle a desarrollar, crear, probar y actualizar su código


Cuando crea aplicaciones con Angular, aprovecha una plataforma que puede escalar desde proyectos de un solo desarrollador hasta aplicaciones de nivel empresarial.

Angular está diseñado para hacer que la actualización sea lo más fácil posible, para que puedas aprovechar los últimos desarrollos con un mínimo de esfuerzo.


Antes de comenzar a explorar la plataforma Angular, debe conocer Angular CLI.

Angular CLI es la forma más rápida, sencilla y recomendada de desarrollar aplicaciones Angular. 

Angular CLI facilita una serie de tareas.


Comandos que utilizará con frecuencia: 

ng build: 

Compila una aplicación Angular en un directorio de salida.


ng serve: 

Crea y sirve su aplicación, reconstruyéndola según los cambios de archivos.


ng generate:

Genera o modifica archivos basados ​​en un esquema.


ng test:

Ejecuta pruebas unitarias en un proyecto determinado.


ng e2e:

Crea y sirve una aplicación Angular, luego ejecuta pruebas de un extremo a otro.


## Guía

Le guiará en la creación de una aplicación de lista de tareas pendientes.

A través de esta aplicación aprenderá cómo usar Angular para administrar, editar, agregar, eliminar y filtrar elementos.


Requisitos para Angular:


Node.js:

Angular requiere una versión LTS activa o LTS de mantenimiento de Node.js.

Para obtener información sobre los requisitos de versión específica de Angular, consulte la página de compatibilidad de versiones.


npm package manager:

Angular, Angular CLI y las aplicaciones Angular dependen de los paquetes npm para muchas características y funciones.

Para descargar e instalar paquetes npm, necesita un administrador de paquetes npm.

Comprobar versión de npm con npm -V.


# Crear Angular App

Puede utilizar Angular CLI para ejecutar comandos en su terminal para generar, construir, probar e implementar aplicaciones Angular.

Para instalar Angular CLI globalmente, ejecute el siguiente comando en su terminal:

```
npm install -g @angular/cli

```

Todos los comandos de Angular CLI comienzan con ng, seguido de lo que le gustaría que hiciera la CLI.

Cree un nuevo directorio donde desee crear su aplicación y cambie al directorio en la terminal.

Luego use el siguiente comando ng new para crear una nueva aplicación llamada todo

```
ng new todo --routing=false --style=css --ssr=false
 
```

El comando ng new crea una aplicación Angular inicial mínima.

Los indicadores adicionales, --routing y --style, y --ssr definen cómo manejar la navegación y los estilos en la aplicación, y configuran la representación del lado del servidor. 

Sus características se describirán más adelante.


La primera vez que ejecute ng, es posible que se le pregunte si desea habilitar el análisis y el autocompletado del terminal.

El autocompletado es conveniente porque al presionar TAB mientras se escriben comandos se mostrarán opciones posibles y se completarán automáticamente los argumentos.


También puede decidir si desea permitir que se envíen análisis sobre el uso de CLI a los mantenedores de Angular en Google. 

Para obtener más información sobre análisis, consulte la documentación de la CLI de Angular ng Analytics.


Para ejecutar su aplicación de tareas pendientes, navegue hasta su nuevo proyecto con el comando cd y ejecute ngserve:

```
cd todo
ng serve

```

En el navegador, navegue hasta http://localhost:4200/ para ver su nueva aplicación de inicio.

Si cambia alguno de los archivos fuente, la aplicación se recarga automáticamente


Mientras se ejecuta ng serve, abra una segunda pestaña de terminal o ventana de terminal para ejecutar comandos sin detener el servidor.

Si en algún momento desea dejar de servir su aplicación, presione Ctrl+c en la terminal que ejecuta el comando ng serve.


## Elementos de la app Angular

Los archivos fuente de la aplicación en los que se centra se encuentran en src/app:

```
src/app
├── app.component.css
├── app.component.html
├── app.component.spec.ts
├── app.component.ts
└── app.config.ts

```

Los archivos clave que la CLI genera automáticamente son los siguientes:


1. app.component.ts:

También conocida como class, contiene la lógica de la página principal de la aplicación.


2. app.component.html:

Contiene el HTML para AppComponent.

El contenido de este archivo también se conoce como plantilla/template.

La plantilla determina la vista/view o lo que ves en el navegador.


3. app.component.css: 

Contiene los estilos de AppComponent.

Utilice este archivo cuando desee definir estilos que solo se apliquen a un componente específico, a diferencia de su aplicación en general.


Un componente en Angular se compone de tres partes principales: la plantilla, los estilos y la clase.

Por ejemplo, app.component.ts, app.component.html y app.component.css juntos constituyen el AppComponent.

Esta estructura separa la lógica, la vista y los estilos para que la aplicación sea más mantenible y escalable.

De esta manera, estás utilizando las mejores prácticas desde el principio.


Angular CLI también genera un archivo para probar componentes llamado app.component.spec.ts, para las pruebas.

Cada vez que genera un componente, la CLI crea estos archivos en un directorio con el nombre que usted especifica y veremos un ejemplo de eso más adelante.


Para más info sobre testing en Angular, ve a Angular testing guide en su documentación. 


## Estructura de la app Angular

Angular está construido con TypeScript.

TypeScript es un superconjunto de JavaScript, lo que significa que cualquier JavaScript válido es TypeScript válido.

TypeScript ofrece escritura y una sintaxis más concisa que JavaScript simple, lo que le brinda una herramienta para crear código más fácil de mantener y minimizar errores.


Los componentes son los bloques de construcción de una aplicación Angular. 

Un componente incluye una clase TypeScript que tiene un decorador @Component().


### Decorator 

El decorador @Component() se utiliza para especificar metadatos (plantillas y estilos HTML) sobre una clase.


### Class

La clase es donde colocas cualquier lógica que tu componente necesite.

Este código puede incluir funciones, detectores de eventos, propiedades y referencias a servicios, por nombrar algunos.

La clase está en un archivo con un nombre como feature.component.ts, donde feature es el nombre de su componente.

Por lo tanto, podría tener archivos con nombres como header.component.ts, signup.component.ts o feed.component.ts. 

Creas un componente con un decorador @Component() que tiene metadatos que le indican a Angular dónde encontrar HTML y CSS.

Un componente típico es el siguiente

```
import { Component } from "@angular/core";

@Component({
  selector: "app-item",
  standalone: true,
  // the following metadata specifies the location of the other parts of the component
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent {
  // code goes here
}

```

Este componente se llama ItemComponent y su selector es app-item.

Utiliza un selector como las etiquetas HTML normales colocándolo dentro de otras plantillas, es decir, <app-item></app-item>.

Cuando un selector está en una plantilla, el navegador muestra la plantilla de ese componente cada vez que encuentra una instancia del selector.

Lo guiará a través de la creación de dos componentes y el uso de uno dentro del otro.


Nota: 

El nombre del componente anterior es ItemComponent, que también es el nombre de la clase.

Los nombres son los mismos simplemente porque un componente no es más que una clase complementada por un decorador de TypeScript. 


El modelo de componentes de Angular ofrece una encapsulación sólida y una estructura de aplicación intuitiva.

Los componentes también hacen que su aplicación sea más fácil de probar unitariamente y pueden mejorar la legibilidad general de su código.


### HTML template

Cada componente tiene una plantilla HTML que declara cómo se representa ese componente.

Puede definir esta plantilla en línea o por ruta de archivo.


Para hacer referencia a un archivo HTML externo, utilice la propiedad templateUrl:

```
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  // code goes here
}

```

Para escribir HTML en línea, use la propiedad de plantilla y escriba su HTML entre comillas invertidas:

```
@Component({
  selector: "app-root",
  template: `<h1>To do application</h1>`,
})
export class AppComponent {
  // code goes here
}

```

Angular extiende HTML con sintaxis adicional que le permite insertar valores dinámicos desde su componente.

Angular actualiza automáticamente el DOM renderizado cuando cambia el estado de su componente.

Un uso de esta característica es insertar texto dinámico, como se muestra en el siguiente ejemplo.

```
<h1>{{ title }}</h1>

```

Las llaves dobles le indican a Angular que interpola el contenido dentro de ellas.

El valor del título proviene de la clase de componente:

```
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  template: "<h1>{{ title }}</h1>",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "To do application";
}

```

Cuando la aplicación carga el componente y su plantilla, el navegador ve lo siguiente:

```
<h1>To do application</h1>

```


### Styles

Un componente puede heredar estilos globales del archivo estilos.css de la aplicación y aumentarlos o anularlos con sus propios estilos.

Puede escribir estilos específicos de componentes directamente en el decorador @Component() o especificar la ruta a un archivo CSS.


Para incluir los estilos directamente en el decorador del componente, utilice la propiedad stylse:

```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 { color: red; }']
})

```


Normalmente, un componente usa estilos en un archivo separado usando la propiedad styleUrls:

```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

```

Con estilos específicos de componentes, puede organizar su CSS para que sea fácil de mantener y portátil.


### Componentes independientes/standalone

Se recomienda hacer que los componentes sean independientes a menos que un proyecto ya utilice NgModules (módulos de Angular) para organizar el código.

En el proyecto utilizamos componentes independientes con los que es más fácil comenzar.


Es común importar CommonModule para que su componente pueda utilizar directives y pipes comunes.

Este proyecto utiliza ngFor y ngIf, por lo que podemos asegurarnos de que estén disponibles así.

```
import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
})

```


# Todo App

Estamos listos para comenzar a crear nuestra aplicación de To-do list app usando Angular.

La aplicación terminada mostrará una lista de tareas pendientes e incluye funciones de edición, eliminación y adición.

Veremos la estructura de su aplicación y  haremos una lista básica de tareas pendientes.


## Estructura de to-do app

Como cualquier aplicación web, una aplicación Angular tiene un index.html como punto de entrada.
 
El index.html en realidad es la plantilla HTML de nivel superior de la aplicación.

```
<!doctype html>
<html lang="en">
  <head>
    <!-- ... -->
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>

```

Dentro de la etiqueta <body>, Angular usa un elemento especial, <app-root>, para insertar su componente principal, que a su vez incluye otros componentes que usted cree.

Generalmente, no necesita tocar index.html y principalmente concentra su trabajo en áreas especializadas de su aplicación llamadas componentes.


### Organizar la app con componentes

Los componentes son un componente central de las aplicaciones Angular.

Esta aplicación de tareas pendientes tiene dos componentes: un componente que sirve de base para la aplicación y un componente para gestionar las tareas pendientes.


Cada componente se compone de una clase TypeScript, HTML y CSS.

TypeScript transpila o convierte a JavaScript, lo que significa que su aplicación finalmente termina en JavaScript simple, pero tiene la conveniencia de usar las funciones extendidas y la sintaxis optimizada de TypeScript.


### Cambios dinámicos en la app con (*ngIf) y (*ngFor)

Este tutorial también cubre dos directivas Angular importantes para alterar dinámicamente la estructura del DOM.

Una directiva es como un comando que puede usar en su HTML para efectuar cambios en su aplicación.

La primera directiva que cubre es el iterador de Angular, (*ngFor).

(*ngFor) puede crear dinámicamente elementos DOM basados ​​en elementos de una matriz.


La segunda directiva que aprenderá es (*ngIf).

Puede usar (*ngIf) para agregar o eliminar elementos del DOM según una condición.

Por ejemplo, si los usuarios desean editar un elemento en la lista de tareas pendientes, puede proporcionarles los medios para editarlo. 

Si no quieren editar un elemento, puede eliminar la interfaz para editarlo.


### Compartir datos entre componentes

En esta aplicación de tareas pendientes, usted configura sus componentes para compartir datos.

Para agregar nuevos elementos a la lista de tareas pendientes, el componente principal debe enviar el nuevo elemento al segundo componente.

Este segundo componente gestiona los elementos y se encarga de editarlos, marcarlos como terminados y eliminar elementos individuales.

Se logra compartir datos entre componentes Angular con decoradores especiales llamados @Input() y @Output().

Estos decoradores se utilizan para especificar que ciertas propiedades permiten que los datos entren o salgan de un componente.

Para usar @Output(), genera un evento en un componente para que el otro componente sepa que hay datos disponibles.


## Definir item

En el directorio de la aplicación, cree un nuevo archivo llamado item.ts con el siguiente contenido

```
export interface Item {
  description: string;
  done: boolean;
}

```

No utilizarás este archivo hasta más adelante, pero es un buen momento para conocer y registrar tus conocimientos sobre qué es un item.

La interfaz de Item crea un modelo de objeto de item para que su aplicación comprenda qué es un elemento.

Para esta lista de tareas pendientes, un elemento es un objeto que tiene una descripción y se puede marcar como completado.


## Agregar lógica al componente principal AppComponent

Ahora que sabe qué es un item, puede darle algunos elementos a su aplicación agregándolos a la aplicación.

En app.component.ts, reemplace el contenido con lo siguiente:

```
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
})
export class AppComponent {
  componentTitle = "My To Do List";

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }
}

```

Las dos primeras líneas son importaciones de JavaScript.

En este caso están importando bibliotecas Angular.

El decorador @Component() especifica metadatos sobre AppComponent.

Info sobre los metadatos de AppComponent:


standalone: 

Describe si el componente requiere un NgModule o no.

Su aplicación administrará directamente las dependencias de las plantillas (componentes, directivas, etc.) mediante importaciones cuando sea standalone/independiente.


selector:

Te indica el selector CSS que usas en una plantilla para colocar este componente.

Aquí está 'app-root'.

En index.html, dentro de la etiqueta body, la CLI de Angular agregó <app-root></app-root> al generar su aplicación.

Utilice todos los selectores de componentes de la misma manera agregándolos a otras plantillas HTML de componentes.


templateUrl:

Especifica el archivo HTML que se asociará con este componente.

Aquí está, './app.component.html'.


styleUrls:

Proporciona la ubicación y el nombre del archivo para los estilos que se aplican específicamente a este componente.

Aquí está './app.component.css'.


imports:

Le permite especificar las dependencias del componente que se pueden usar dentro de su plantilla.


La propiedad filter es de tipo unión, lo que significa que el filtro podría tener el valor de all, active o done.

Con el tipo de unión, si comete un error tipográfico en el valor que asigna a la propiedad de filtro, TypeScript se lo informará para que pueda detectar el error lo antes posible.

Mostraremos cómo agregar filtros en un paso posterior, pero también puede usar un filtro para mostrar la lista predeterminada de todos los elementos.


AllItems es un array que contiene las tareas pendientes y si están terminadas.

El primer elemento, eat, tiene un valor done en true.


El getter get items(), recupera los elementos de la matriz allItems si filter es igual a all.

De lo contrario, get items() devuelve los elementos done o pending dependiendo de cómo el usuario filtre la vista.

El getter también establece el nombre de la matriz como items, que usará en la siguiente sección.


## Agregar HTML a la plantilla de AppComponent

Para ver la lista de items en el navegador, reemplace el contenido de app.component.html con el siguiente HTML:

```
<div class="main">
  <h1>{{ componentTitle }}</h1>
  <h2>What would you like to do today?</h2>

  <ul>
    <li *ngFor="let item of items">{{item.description}}</li>
  </ul>
</div>

```

El <li> contiene un (*ngFor), una directiva Angular incorporada que itera sobre los items en la matriz de elementos.

Para cada elemento, (*ngFor) crea un nuevo <li>.

Las llaves dobles que contienen item.description le indican a Angular que complete cada <li> con el texto de la descripción de cada elemento.


En el navegador, debería ver la lista de elementos de la siguiente manera:

```
My To Do List
What would you like to do today?

* eat
* sleep
* play
* laugh

```


## Agregar items a la lista

Una lista de tareas pendientes necesita una forma de agregar elementos, así que comencemos.

En app.component.ts, agregue el siguiente método a la clase después de la matriz allItems:

```
addItem(description: string) {
  if (!description) return;

  this.allItems.unshift({
    description,
    done: false
  });
}

```

El método addItem() toma un elemento que proporciona el usuario y lo agrega a la matriz cuando el usuario hace clic en el botón Agregar.

El método addItem() utiliza el método de matriz unshift() para agregar un nuevo elemento al principio de la matriz y al principio de la lista.

Alternativamente, podría usar push(), que agregaría el nuevo elemento al final de la matriz y al final de la lista.


Para utilizar el método addItem(), edite el HTML en la plantilla AppComponent.

En app.component.html, reemplace <h2> con lo siguiente:

```
<label for="addItemInput">What would you like to do today?</label>

<input
  #newItem
  placeholder="add an item"
  (keyup.enter)="addItem(newItem.value); newItem.value = ''"
  class="lg-text-input"
  id="addItemInput" />

<button class="btn-primary" (click)="addItem(newItem.value)">Add</button>

```

En el HTML anterior, #newItem es una variable de plantilla. 

La variable de plantilla en este caso utiliza el elemento <input> como valor. 

Se puede hacer referencia a las variables de plantilla en cualquier lugar de la plantilla del componente.


Cuando el usuario escribe un nuevo elemento en el campo <input> y presiona Enter, el método addItem() agrega el valor a la matriz allItems.

Al presionar la tecla Enter también se restablece el valor de <input> a una cadena vacía.

La variable de plantilla #newItem se utiliza para acceder al valor del elemento <input> en la plantilla.

En lugar de presionar la tecla Intro, el usuario también puede hacer clic en el botón Agregar, que llama al mismo método addItem().



# Dar estilo a la app de Angular

Cómo Angular maneja el estilo de las aplicaciones.

Angular CLI genera dos tipos de archivos de estilo:


1. Component styles:

Angular CLI le da a cada componente su propio archivo de estilos.

Los estilos de este archivo se aplican sólo a su componente.


2. styles.css

en el directorio src, los estilos de este archivo se aplican a toda la aplicación a menos que especifique estilos a nivel de componente


Dependiendo de si está utilizando un preprocesador CSS, la extensión de sus archivos CSS puede variar.

Angular admite CSS, SCSS, Sass y Less.


En src/styles.css, pegue los siguientes estilos:

```
body {
  font-family: Helvetica, Arial, sans-serif;
}

.btn-wrapper {
  /* flexbox */
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.btn {
  color: #000;
  background-color: #fff;
  border: 2px solid #cecece;
  padding: 0.35rem 1rem 0.25rem 1rem;
  font-size: 1rem;
}

.btn:hover {
  background-color: #ecf2fd;
}

.btn:active {
  background-color: #d1e0fe;
}

.btn:focus {
  outline: none;
  border: black solid 2px;
}

.btn-primary {
  color: #fff;
  background-color: #000;
  width: 100%;
  padding: 0.75rem;
  font-size: 1.3rem;
  border: black solid 2px;
  margin: 1rem 0;
}

.btn-primary:hover {
  background-color: #444242;
}

.btn-primary:focus {
  color: #000;
  outline: none;
  border: #000 solid 2px;
  background-color: #d7ecff;
}

.btn-primary:active {
  background-color: #212020;
}

```

El CSS en src/styles.css se aplica a toda la aplicación; sin embargo, estos estilos no afectan todo el contenido de la página.

El siguiente paso es agregar estilos que se apliquen específicamente al AppComponent.
 

En app.component.css, agregue los siguientes estilos:

```
.main {
  max-width: 500px;
  width: 85%;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
  box-shadow:
    0 2px 4px 0 rgb(0 0 0 / 20%),
    0 2.5rem 5rem 0 rgb(0 0 0 / 10%);
}

@media screen and (min-width: 600px) {
  .main {
    width: 70%;
  }
}

label {
  font-size: 1.5rem;
  font-weight: bold;
  display: block;
  padding-bottom: 1rem;
}

.lg-text-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #000;
  display: block;
  box-sizing: border-box;
  font-size: 1rem;
}

.btn-wrapper {
  margin-bottom: 2rem;
}

.btn-menu {
  flex-basis: 32%;
}

.active {
  color: green;
}

ul {
  padding-inline-start: 0;
}

ul li {
  list-style: none;
}

```

El último paso es volver a visitar su navegador y observar cómo se ha actualizado el estilo.



# Crear componente item

Los componentes le proporcionan una manera de organizar su aplicación.

Creación de un componente para manejar los elementos individuales de la lista y cómo agregar funciones de verificación, edición y eliminación.

También veremos el modelo de evento angular. 


## Crear nuevo componente

En la línea de comando, cree un componente denominado item con el siguiente comando CLI:

```
ng generate component item

```

El comando ng generate component crea un componente y una carpeta con el nombre que especifique.

Aquí, la carpeta y el nombre del componente es item.

Puede encontrar el directorio de item dentro de la carpeta app:

```
src/app/item
├── item.component.css
├── item.component.html
├── item.component.spec.ts
└── item.component.ts

```

Al igual que el AppComponent, el ItemComponent se compone de los siguientes archivos:

item.component.html para HTML

item.component.ts para lógica

item.component.css para estilos

item.component.spec.ts para probar el componente


Puede ver una referencia a los archivos HTML y CSS en los metadatos del decorador @Component() en item.component.ts.

```
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})

```


## Agregar HTML a ItemComponent

El ItemComponent puede asumir la tarea de brindarle al usuario una forma de marcar elementos como terminados, editarlos o eliminarlos.

Agregue marcado para administrar items reemplazando el contenido del marcador de posición en item.component.html con lo siguiente:

```
<div class="item">
  <input
    [id]="item.description"
    type="checkbox"
    (change)="item.done = !item.done"
    [checked]="item.done" />
  <label [for]="item.description">{{item.description}}</label>

  <div class="btn-wrapper" *ngIf="!editable">
    <button class="btn" (click)="editable = !editable">Edit</button>
    <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
  </div>

  <!-- This section shows only if user clicks Edit button -->
  <div *ngIf="editable">
    <input
      class="sm-text-input"
      placeholder="edit item"
      [value]="item.description"
      #editedItem
      (keyup.enter)="saveItem(editedItem.value)" />

    <div class="btn-wrapper">
      <button class="btn" (click)="editable = !editable">Cancel</button>
      <button class="btn btn-save" (click)="saveItem(editedItem.value)">
        Save
      </button>
    </div>
  </div>
</div>

```

El primer input es una casilla de verificación para que los usuarios puedan marcar elementos cuando estén completos.

Las llaves dobles, {{}}, en la <label> de la casilla de verificación significan la interpolación de Angular.

Angular usa {{item.description}} para recuperar la descripción del elemento actual de la matriz de elementos.

Se explicará cómo los componentes comparten datos.


Los siguientes dos botones para editar y eliminar el elemento actual están dentro de un <div>.

En este <div> hay un (*ngIf), una directiva Angular incorporada que puede usar para cambiar dinámicamente la estructura del DOM.

Este (*ngIf) significa que si editable es falso, este <div> está en el DOM.

Si editable es verdadero, Angular elimina este <div> del DOM.

```
<div class="btn-wrapper" *ngIf="!editable">
  <button class="btn" (click)="editable = !editable">Edit</button>
  <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
</div>

```

Cuando un usuario hace clic en el botón Editar, editable se vuelve verdadero, lo que elimina este <div> y sus hijos del DOM.

Si, en lugar de hacer clic en Editar, un usuario hace clic en Eliminar, el ItemComponent genera un evento que notifica al AppComponent de la eliminación.


Un (*ngIf) también está en el siguiente <div>, pero está establecido en un valor editable de verdadero.

En este caso, si editable es verdadero, Angular coloca los elementos <div> y sus elementos secundarios <input> y <button> en el DOM.

```
<!-- This section shows only if user clicks Edit button -->
<div *ngIf="editable">
  <input
    class="sm-text-input"
    placeholder="edit item"
    [value]="item.description"
    #editedItem
    (keyup.enter)="saveItem(editedItem.value)" />

  <div class="btn-wrapper">
    <button class="btn" (click)="editable = !editable">Cancel</button>
    <button class="btn btn-save" (click)="saveItem(editedItem.value)">
      Save
    </button>
  </div>
</div>

```

Con ([value]="item.description"), el valor de <input> está vinculado a la descripción del elemento actual.

Este enlace convierte la descripción del elemento en el valor de <input>.

Entonces, si la descripción es eat, la descripción ya está en <input>.

De esta manera, cuando el usuario edita el elemento, el valor de <input> ya está comido.


La variable de plantilla, #editedItem, en <input> significa que Angular almacena todo lo que un usuario escribe en este <input> en una variable llamada editedItem.

El evento keyup llama al método saveItem() y pasa el valor editedItem si el usuario elige presionar Intro en lugar de hacer clic en Guardar.


Cuando un usuario hace clic en el botón Cancelar, editable cambia a falso, lo que elimina la entrada y los botones para editar del DOM

Cuando editable es falso, Angular vuelve a colocar <div> con los botones Editar y Eliminar en el DOM.


Al hacer clic en el botón Guardar se llama al método saveItem().

El método saveItem() toma el valor del elemento #editedItem y cambia la descripción del elemento a la cadena editedItem.value.


## Preparar AppComponent

Agregaremos código que se basa en la comunicación entre AppComponent y ItemComponent.

Agregue la siguiente línea cerca de la parte superior del archivo app.component.ts para importar el elemento:

```
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";

```


Luego, configure AppComponent agregando lo siguiente a la clase del mismo archivo:

```
remove(item: Item) {
  this.allItems.splice(this.allItems.indexOf(item), 1);
}

```

El método remove() utiliza el método JavaScript Array.splice() para eliminar un elemento en el índice del elemento relevante.

En términos sencillos, esto significa que el método splice() elimina el elemento de la matriz.

La documentación está en documentación de Array.prototype.splice().


## Agregar lógica a ItemComponent

Para utilizar la interfaz de usuario de ItemComponent, debe agregar lógica al componente, como funciones y formas de entrada y salida de datos.

En item.component.ts, edite las importaciones de JavaScript de la siguiente manera:

```
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "../item";

```

La adición de Input, Output y EventEmitter permite a ItemComponent compartir datos con AppComponent.

Al importar un artículo, ItemComponent puede comprender qué es un item. 

Puede actualizar @Component para usar CommonModule en app/item/item.component.ts para que podamos usar los bloques @if

```
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})

```


Más abajo en item.component.ts, reemplace la clase ItemComponent generada con lo siguiente:

```
export class ItemComponent {

  editable = false;

  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string) {
    if (!description) return;

    this.editable = false;
    this.item.description = description;
  }
}

```

La propiedad editable ayuda a alternar una sección de la plantilla donde un usuario puede editar un elemento.

editable es la misma propiedad en HTML que en la declaración @if, @if(editable).

Cuando usas una propiedad en la plantilla, también debes declararla en la clase.


Input(), @Output() y EventEmitter facilitan la comunicación entre sus dos componentes.

Un @Input() sirve como puerta de entrada para que los datos entren al componente, y un @Output() actúa como puerta de entrada para que los datos salgan del componente.

Un @Output() tiene que ser del tipo EventEmitter, para que un componente pueda generar un evento cuando haya datos listos para compartir con otro componente.


Nota:

! en la declaración de propiedad de la clase se llama definite assignment assertion.

Este operador le dice a TypeScript que el campo del elemento siempre está inicializado y no definido, incluso cuando TypeScript no puede distinguirlo de la definición del constructor.

Si este operador no está incluido en su código y tiene una configuración estricta de compilación de TypeScript, la aplicación no podrá compilar.


Utilice @Input() para especificar que el valor de una propiedad puede provenir de fuera del componente.

Utilice @Output() junto con EventEmitter para especificar que el valor de una propiedad puede salir del componente para que otro componente pueda recibir esos datos.


El método saveItem() toma como argumento una descripción de tipo cadena.

La descripción es el texto que el usuario ingresa en el HTML <input> al editar un elemento de la lista. 

Esta descripción es la misma cadena de <input> con la variable de plantilla #editedItem.


Si el usuario no ingresa un valor pero hace clic en Guardar, saveItem() no devuelve nada y no actualiza la descripción.

Si no tuviera esta declaración if, el usuario podría hacer clic en Guardar sin nada en el HTML <entrada> y la descripción se convertiría en una cadena vacía.


Si un usuario ingresa texto y hace clic en guardar, saveItem() establece editable en falso, lo que hace que @if en la plantilla elimine la función de edición y muestre nuevamente los botones Editar y Eliminar.

Aunque la aplicación debería compilarse en este punto, debe usar ItemComponent en AppComponent para poder ver las nuevas funciones en el navegador


## Usar componente dentro de otro: ItemComponent en AppComponent

Incluir un componente dentro de otro en el contexto de una relación padre-hijo le brinda la flexibilidad de usar componentes dondequiera que los necesite.

AppComponent sirve como un shell para la aplicación donde puede incluir otros componentes.

Para usar ItemComponent en AppComponent, coloque el selector ItemComponent en la plantilla AppComponent.

Angular especifica el selector de un componente en los metadatos del decorador @Component().

En este ejemplo, hemos definido el selector como app-item.

```
@Component({
  selector: 'app-item',
  // ...

```

Para usar el selector ItemComponent dentro de AppComponent, agregue el elemento <app-item>, que corresponde al selector que definió para la clase de componente en app.component.html. 

Reemplace la lista desordenada actual <ul> en app.component.html con la siguiente versión actualizada:

```
<h2>
  {{items.length}}
  <span> @if (items.length === 1) { item } @else { items } </span>
</h2>

<ul>
  @for (item of items; track item.description) {
  <li>
    <app-item (remove)="remove(item)" [item]="item"></app-item>
  </li>
  }
</ul>

```


Cambie las importaciones en app.component.ts para incluir ItemComponent y CommonModule:

```
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, ItemComponent],
})

```

La sintaxis de doble llave, {{}}, en <h2> interpola la longitud de la matriz de elementos y muestra el número.



La sintaxis de doble llave, {{}}, en <h2> interpola la longitud de la matriz de elementos y muestra el número.


El <span> en <h2> usa @if y @else para determinar si <h2> debe decir "elemento" o "elementos".

Si solo hay un elemento en la lista, <span> muestra "elemento". 

De lo contrario, si la longitud de la matriz de elementos es distinta de 1, <span> muestra "elementos".


@for: bloque de flujo de control de Angular, utilizado para iterar sobre todos los elementos de la matriz de elementos.

@for de Angular, como @if, es otro bloque que te ayuda a cambiar la estructura del DOM mientras escribes menos código.

Para cada elemento, Angular repite <li> y todo lo que contiene, incluido <app-item>. 

Esto significa que para cada elemento de la matriz, Angular crea otra instancia de <app-item>.

Para cualquier cantidad de elementos en la matriz, Angular crearía esa cantidad de elementos <li>


Puede envolver otros elementos como <div>, <span o <p> dentro de un bloque @for.

AppComponent tiene un método remove() para eliminar el elemento, que está vinculado a la propiedad remove en ItemComponent.

La propiedad del elemento entre corchetes, ```[]``` vincula el valor de i entre AppComponent y ItemComponent.


Ahora debería poder editar y eliminar elementos de la lista. 

Cuando agrega o elimina elementos, el recuento de elementos también debería cambiar.

Para que la lista sea más fácil de usar, agregue algunos estilos al ItemComponent



## Agregar estilo en ItemComponent

Puede utilizar la hoja de estilos de un componente para agregar estilos específicos de ese componente.

El siguiente CSS agrega estilos básicos, flexbox para los botones y casillas de verificación personalizadas.


Pegue los siguientes estilos en item.component.css.

```
.item {
  padding: 0.5rem 0 0.75rem 0;
  text-align: left;
  font-size: 1.2rem;
}

.btn-wrapper {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.btn {
  /* menu buttons flexbox styles */
  flex-basis: 49%;
}

.btn-save {
  background-color: #000;
  color: #fff;
  border-color: #000;
}

.btn-save:hover {
  background-color: #444242;
}

.btn-save:focus {
  background-color: #fff;
  color: #000;
}

.checkbox-wrapper {
  margin: 0.5rem 0;
}

.btn-warn {
  background-color: #b90000;
  color: #fff;
  border-color: #9a0000;
}

.btn-warn:hover {
  background-color: #9a0000;
}

.btn-warn:active {
  background-color: #e30000;
  border-color: #000;
}

.sm-text-input {
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #555;
  display: block;
  box-sizing: border-box;
  font-size: 1rem;
  margin: 1rem 0;
}

/* Custom checkboxes
Adapted from https://css-tricks.com/the-checkbox-hack/#custom-designed-radio-buttons-and-checkboxes */

/* Base for label styling */
[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  position: absolute;
  left: -9999px;
}
[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  padding-left: 1.95em;
  cursor: pointer;
}

/* checkbox aspect */
[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 1.25em;
  height: 1.25em;
  border: 2px solid #ccc;
  background: #fff;
}

/* checked mark aspect */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: "\2713\0020";
  position: absolute;
  top: 0.15em;
  left: 0.22em;
  font-size: 1.3em;
  line-height: 0.8;
  color: #0d8dee;
  transition: all 0.2s;
  font-family: "Lucida Sans Unicode", "Arial Unicode MS", Arial;
}
/* checked mark aspect changes */
[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  transform: scale(1);
}

/* accessibility */
[type="checkbox"]:checked:focus + label:before,
[type="checkbox"]:not(:checked):focus + label:before {
  border: 2px dotted blue;
}

```



# Angular filter

Ahora pasemos a agregar funcionalidad para permitir a los usuarios filtrar sus tareas pendientes, para que puedan ver las tareas activas, completadas o todas


## Código de filtrado

El filtrado de elementos se basa en la propiedad de filter, que agregó previamente a app.component.ts:

```
filter: 'all' | 'active' | 'done' = 'all';

```

El valor predeterminado para el filtro es all, pero también puede ser active o done.


## Agregar controles de filtro

En app.component.html, agregue el siguiente HTML debajo del botón Agregar pero encima de la sección que enumera los elementos.

En el siguiente fragmento, las secciones existentes en su HTML están en los comentarios para que pueda ver exactamente dónde colocar los botones.

```
<!-- <button class="btn-primary" (click)="addItem(newItem.value)">Add</button>
 -->

<!-- Buttons that show all, still to do, or done items on click -->
<div class="btn-wrapper">
  <button
    class="btn btn-menu"
    [class.active]="filter == 'all'"
    (click)="filter = 'all'">
    All
  </button>

  <button
    class="btn btn-menu"
    [class.active]="filter == 'active'"
    (click)="filter = 'active'">
    To Do
  </button>

  <button
    class="btn btn-menu"
    [class.active]="filter == 'done'"
    (click)="filter = 'done'">
    Done
  </button>
</div>

<!-- <h2>{{items.length}} item(s)</h2>
         <ul>... -->

```

Al hacer clic en los botones se cambian los valores del filtro, lo que determina los elementos que se muestran, así como los estilos que Angular aplica al botón activo.

Si el usuario hace clic en el botón all, se muestran todos los elementos.

Si el usuario hace clic en el botón To do, solo se muestran los elementos con un valor de hecho falso.

Si el usuario hace clic en el botón Done, solo se muestran los elementos con un valor de hecho verdadero.


class attribute binding que utiliza corchetes, ```[]```, controla el color del texto de los botones.

class binding ([class.active]), aplica la clase active cuando el valor del filter coincide con la expresión.

Por ejemplo, cuando el usuario hace clic en el botón Done, que establece el valor de filter en Done, la expresión de enlace de clase de filter == 'done' se evalúa como verdadera.

Cuando el valor de filter es done, Angular aplica la clase active al botón Done para que el texto sea de color verde.

Tan pronto como el usuario hace clic en uno de los otros botones, el valor de un filtro ya no se aplica, por lo que el color de texto verde ya no se aplica.


Como ya teníamos el código de filtro en app.component.ts, todo lo que tenía que hacer era editar la plantilla para proporcionar controles para filtrar los elementos. 


# App Angular para Producción

Cómo crear una aplicación lista para producción.


## Construir la app

Ahora que ha terminado de desarrollar su aplicación, puede ejecutar el comando de compilación de Angular CLI

Cuando ejecuta el comando de compilación en su directorio de tareas pendientes, su aplicación se compila en un directorio de salida llamado dist/.

En el directorio todo ejecute el siguiente comando en la línea de comando:

```
ng build -c production

```

La CLI compila la aplicación y coloca el resultado en un nuevo directorio dist.

El indicador --configuration production/-c production con ng build elimina cosas que no necesitas para la producción.


## Deploy App

Para implementar su aplicación, puede copiar el contenido de la carpeta dist/my-project-name a su servidor web.

Debido a que estos archivos son estáticos, puede alojarlos en cualquier servidor web capaz de servir archivos, como por ejemplo:

Node.js

Java

.NET


Puede utilizar cualquier backend como Firebase, Google Cloud o App Engine.


### Host local

Para divertirse, puede alojar la aplicación creada en su máquina usando el paquete http-server ejecutando el siguiente comando después de ejecutar una compilación:

```
npx http-server ./dist/todo/browser/ -o

```

Este comando sirve al directorio dist/todo/browser en el puerto 8080 para que pueda abrir http://127.0.0.1:8080 en su navegador para ver la aplicación en ejecución.

El servidor HTTP también le permite acceder a la aplicación en la dirección IP de su computadora desde cualquier otro dispositivo en su red local, y esta dirección aparece bajo la dirección 127.0.0.1 en la consola.


## Aprendizaje

Tutoriales de Angular : un tutorial detallado que destaca las características de Angular, como el uso de servicios, la navegación y la obtención de datos de un servidor.

Las guías de Angular Components: una serie de artículos que cubren temas como el ciclo de vida, la interacción de componentes y la encapsulación de vistas.

Las guías de formularios: artículos que lo guiarán en la creación de formularios reactivos en Angular, la validación de entradas y la creación de formularios dinámicos.



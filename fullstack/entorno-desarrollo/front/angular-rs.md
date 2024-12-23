# Angular 

## Angular CLI

ng build: compila la app en un directorio.

ng serve: construye y sirve la app, reconstruyendola según los cambios.

ng generate: genera o modifica archivos basados ​​en un esquema.

ng test: ejecuta pruebas unitarias en un proyecto.

ng e2e: construye y sirve la app, ejecuantando pruebas extremo a extremo.



## Crear app

npm install -g @angular/cli

ng new todo --routing=false --style=css --ssr=false

cd todo

ng serve


## Estructura del proyecto:

En todo/src encontramos el entry point que es index.html.

Es el template de nivel superior de la app.

```
app //(dir)
index.html
main.ts
style.css

```

Dentro de la etiqueta <body>, Angular usa un elemento especial, <app-root>, para insertar su componente principal, que a su vez incluye otros componentes que usted cree. 


```
src/app
├── app.component.css
├── app.component.html
├── app.component.spec.ts
├── app.component.ts
└── app.config.ts

```

app.component.ts es la clase/lógica

app.component.html es la plantilla/template determina la vista/view que vemos en el navegador

app.component.css es el estilo aplicado al componente

Estos forman AppComponent.


## Componente 

Un componente se forma se forma con tres partes: 

template, styles y class

app.component.ts, app.component.html, y app.component.css

Es igual a AppComponent, separa la lógica, el estilo y la vista.

Para que la app sea mantenible y escalable.


app.component.spec.ts es para testing.


## Organización del los componentes 

Los componentes son los bloques de código de Angular. 

Incluyen una clase de TypeScript que tiene el decorador @Component


### Decorador @Component:

Metadata para el componente: 

Información, ubicación de sus archivos relacionados, etc. 


### Clase y Nombre del componente: 

Una clase puede encontrar se un archivo como app.component.ts:

Tiene la lógica de este componentes. 

Este código puede incluir funciones, detectores de eventos, propiedades y referencias a servicios, etc. 


Podemos seguir como practica: feature.component.ts.

Donde feature es el nombre de su componente

Por lo tanto, podría tener archivos con nombres como header.component.ts, signup.component.ts o feed.component.ts. 

Para separar cada elemento del sitio en componentes que lo representen. 

Creas un componente con un decorador @Component() que tiene metadatos que le indican a Angular dónde encontrar HTML y CSS.

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


## Escribir HTML

Plantilla HTML que declara cómo se representa ese componente. 

Puede definir esta plantilla en línea o por ruta de archivo.


Referencia a un archivo HTML externo, utilice la propiedad templateUrl:

```
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  // code goes here
}

```


Escribir HTML en línea con template:

Escriba su HTML entre comillas invertidas

```
@Component({
  selector: "app-root",
  template: `<h1>To do application</h1>`,
})
export class AppComponent {
  // code goes here
}

```


HTML con sintaxis adicional para insertar valores dinámicos desde su componente.

Ej: insertar texto dinámico

```
<h1>{{ title }}</h1>

```

Esto va dentro del decorador @Component

Las llaves dobles interpola el contenido dentro de ellas.

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

Cuando se carga este componenete y su plantilla, muestra su valor.

```
<h1>To do application</h1>

```


## Escribir CSS 

Un componente puede heredar estilos globales del archivo estilos.css de la aplicación y aumentarlos o anularlos con sus propios estilos

Puede escribir estilos específicos de componentes directamente en el decorador @Component():

Con la propiedad style del decorador

```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 { color: red; }']
})

```

Especificar la ruta a un archivo CSS:

Con la propiedad del decorador, styleUrls:

```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

```


## Componentes independientes 

Se recomienda hacer que los componentes sean independientes a menos que un proyecto ya utilice NgModules para organizar el código.

Los standalone components con más fácil para empezar. 


Es común importar CommonModule para que su componente pueda utilizar directives y pipes comunes.

Vamos a utilizar ngFor y ngIf, por lo que podemos asegurarnos de que estén disponibles así.

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


# Usando Angular

Creamos una interfaz en typescript 

Le agregamos lógica al componente principal (para una lista)

Agregamos HTML en la plantilla de este componente. 


Agregamos más funciones al componente principal y volvemos a usar su plantilla html para renderizar más elementos. 


## (*ngIf) y (*ngFor)


# Más funciones para todo app


# Usar componente dentro de otro

Metemos una etiquta con el nombre del selector del componente hijo en la plantilla del componente padre.



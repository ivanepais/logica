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



# Arquitectura Angular 

1. Componente: selector css, plantila html (tendrá contenido) y clase TS. 

2. Interpolation: {}, agregamos una propiedad a la clase (tipico de objeto), como agregar funciones, etc; y en la plantilla usamos la interpolación para llamar a esa propiedad y su contenido, si tuviesemos una función también lo podemos hacer con la interpolación. 

3. Composición de componentes: necesitamos dos componentes para pasar datos entre ellos. El contenido que había en un componente, lo podrá renderizar el segundo componente componente contenedor. 

4. Condicionales: 

5. 

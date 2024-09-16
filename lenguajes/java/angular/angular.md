
Angular

Es un framework que trabaja con los estándares MVC (Modelo Vista Controlador). 

Para desarrollar SPA's (Single Page Application)

Reemplaza a AngularJS. 


El estándar MVC divide sus componentes en código reutilizable. 

Modelo: acceso, definición y uso de los datos. 

Vista: parte visible para el usuario. 

Controlador: gestor de las acciones, control de la interfaz y los datos. 


Las SPA's son apps que no cambian de ruta, se van actualizando según la interacción del usuario con la app. 

En un solo archivo HTML cargamos el código CSS y JS que nos permite manipular el DOM. 

 
Arquitectura: 

	En el modulo tenemos los componentes principales: 
	
	Metadata-> Directivas-> Template -> Eventos -> Component
	
			                 Metadata 
			    
	Template <- Propiedades	<- Component <- Inyector <- Servicios 
		
		
	El modulo va a gestionar el componente. 
	
	Es una etiqueta que tiene asociado una plantilla. 
	
	Con las propiedades/atributos/variables vamos a pasar a la vista. 
	
	La plantilla va a devolver eventos que son funciones, acciones que se activan al usar la plantilla. 
	
	
	Los servicios o provedores son clases que nos permiten asociarnos con las fuentes de datos que tenemos en el componente, app. 
	
	En una clase podemos tener la lógica de negocio e inyectarla al componente. 
	
	
	Las directivas son modificaciones dentro de las plantillas para poder ejecutar distintas funcionalidades. 
	
	
	Un Modulo es un paquete con distintas funcionalidades, componentes, servicios empaquetado en la app. 
	
	
	Un componente es una unidad mínima de funcionalidad para la app. 
	
	Declaramos elementos custom, nuevas etiquetas que vamos a incorporar. 
	
	Tienen una estructura jerárquica que nos permite dividir funcionalidades y reutilizarlas. 
	
	Definimos un componente y lo llamamos hacia una determinada plantilla. 
	
	Pueden estar asociados con una plantilla HTML con CSS y controladores. 
	
	
	Los servicios permiten la llamada a funciones comunes entre componentes. 
	
	Los servicios se incorporan a los componentes para poder utilizarlos allí. 
	
	Se encargan de conexiones a sevidores, manejo de CRUD.
	
	
	Las directivas son componentes que se utilizan desde plantillas. 
	
	
	Las rutas nos permite gestionar la navegación dentro de la app. 
	
	Nos permiten definir una serie de "páginas" en las que podemos asignar componentes. 
	
	Las rutas se cargarán en base a una configuración base que luego debemos asociar a algún componente. 
	
	
	Las pipes son componentes que se utilizan en la vista, nos permiten modificar la salida de una variable. 
	
	
	
|| Proyecto, configuración y estructura


	Angular CLI: 
	
	
	Package.json: 
	
	
	Carpeta assets: 
	
		Podemos encontrar un icono, favicon, imgs, etc. 
		
		Un index.html que es la página principal que cargaría por defecto, que después se llena de elementos.   
		
		main.ts que es el archivo principal de carga de la app. 
	
		En import carga los modulos incorporados de Angular. 
		
		Podemos cargar nuestros componentes. 
	
		Tendremos un aranque de la app, llamado bootstrap. 
		
		En el que se le pasa nuestro modulo, es lo que va a arrancar en la app al iniciarla. 
		
		Podemos tener un archivo CSS. 
		
		
		En la carpeta app, está el archivo app.module.ts
		
		En el archivo, definimos en cada uno de los componentes principales. 
		
		ngModule, son como una funciones base del proyecto. 
		
		@ngModule tiene unas declaraciones para la configuración del modulo. 
		
		Esto puede detectar los componentes que estamos importando, usando o vamos a usar. 
		
		Si no coincide, va a dar error. 
		
		ngModule({}) es el modulo principal de la aplicación. 
		
		Es lo que va a cargar por defecto. 
		
		declarations, imports, providers (servicios), bootstrap. 
		
		Marca como tenemos que configurar la app. 
		
		
		
		Además del archivo app.module.ts tenemos 4 componentes de app diferencias. 
		
		app.component.ts: 
		
			guarda la lógica de la app, parecido a un controlador en java. 
		
			la primera parte del código es la configuración del componente. 
					
			define la etiqueta, css y la plantilla html; asociadas. 
		
			y la segunda es el código o funcionalidad que tenemos que agregar a la clase. 
			
			Similar a un class component en React. 
			
			Los atributos de esta clase se pasan automaticamente a la vista que asociamos en la configuración y lo podemos imprimir, etc. 
			
		
		app.component.spec.ts: 
		
			Son los test para cada componente
			
			Sus import son la funcionalidad de testing integrada en angular. 
			
			El otro import es el componente nuestro. 
			
			Después vemos una configuración similar a ngModule en la que debemos definir lo que vamos a usar. 
		
			Comprueba que no sea null
			
			Comprueba el componente 
			
			Comprueba las elementos
			
			
		app.component.css: 
		
		app.component.html: 
		
		Son los más familiares. 
		
		Vamos a ver los variables propiedaes/atributos/estados
		
		De nuestro componente {{saludo}}
		
		Dentro de la plantilla tratamos de presentar la variable por pantalla. 
		
		
	Flujo de Angular: 
			
		A la hora de cargar la app. 
		
		index.html, main.ts (carga el modulo)
		
		el modulo declara un componente. 
		
		este tendra los cuatro componentes fundamentales. 
		
		.ts del componente en si. 
		.ts de las pruebas de este componente. 
		.html con las propiedades/variables del componente. 
		.css
		
		
		
|| Angular CLI

	Angular permite la instalación de herramientas complementarias. 
	
	NodeJS es el estándar a la hora de gestionar las dependencias de software del proyecto. 
	
	```
	npm install nombre_paquete
	
	```
	
	En npm estará Angular CLI. 
	
	```
	npm install -g @angular/cli
	
	```
	
	-g global para ejecutar el comando desde cualquier parte del sistema. 

	
	Si tenemos un proxy, será necesario configuarlo antes de ejecutar el comando. 
	
	Para acceder al repo interno a nivel npm y conectar el equipo a este. 
	
	
	Se instalará un comando ng que dispone muchas funciones y opciones. 
	
	Como crear proyectos, añadirle propiedades, dependencias, test, ejecutar.  
	
	
	Crear proyecto: 
	
		En un directorio del sistema
	
		```
		ng new nombre_proyecto
		
		```
		
		creará una carpeta con este nombre y los directorios principales. 
		
		
	Estructura minima en carpeta del proyecto: 
	
		karma.comf.js 
		
		README.md
		
		.angular-cli.json: 
			package.json
		
		protractor.conf.js
		
		tslint.json: 
			node_modules
			
		src
		e2e
			tsconfig.json
			
	
	Destacadas: 
	
		package.json:
		
			Crea, gestiona las dependencias correspondientes del proyecto. 
			
			 
		src: 
		
			Código fuente de nuestro desarrollo. 
			
			
		typing.json: 
			
			Define algunos tipos de datos. 
	
		
		dist: 
		
			Código generado para distribución. 
			
			Cuando construyamos el proyecto para distribución. 
			
			
		e2e: 
			
			Código de pruebas de la app. 
			
			
		node.modules: 
			
			Dependencias descargadas del proyecto. 
			
			
		 
	Ejecutar proyecto: 
	
		En su carpeta
		
		```
		npm start
		
		```
		
		o 
		
		
		```
		ng serve 
		
		```
		
		Arrancará un servidor donde podremos compilar y probar la app en el navegador. 
		
		Con la url localhost:4200
		
		Muestra la app en modo desarrollo con un componente que presenta un titulo. 
		
		index.html es el archivo principal de carga de componentes 
	
		Es donde se incluirán el resto de las dependencias de JS. 

 


|| Crear Proyecto y Practica


	```
	npm install -g @angular/cli
	
	node --version 
	
	npm --version
	
	```
	
	
	Entornos de node: 
	
	```
	nvm list
	
	```
	
	versiones de node instaladas 
	
	nvm nos permite elegir la version de node. 
	
	```
	nvm install 18
	
	```
	Descargará la esa versión 
	
	
	```
	nvm use 18
	
	```
	
	Elegimos la version para usar. 
	
	Ahora debemos usar otra vez el comando para instalar angular. 
	
	Dado que estamos en otra instancia dentro de node. 
	
	```
	npm install -g @angular/cli
	
	ng --help 
	
	```
	
	ng nos da las herramientas para gestionar el proyecto. 
	
	
	En la carpeta deseada, creamos la app. 
	
	```
	ng new miapp
	
	```
	
	Nos va a preguntar si queremos una serie dependencias. 
	
	Como Angular routing 
	
	Tipo de preprocesador para CSS o CSS 
	
	
	Posteriormente nos creará con npm las dependencias fundamentales.
	
	Como el readme.md
	
	angular.json (configuracion de angular)
	package.json (dependencias)
	tsconfig.json (config typescript)
	
	Después viene la carpeta src que es el código fuente de la app. 
	
	
	Al entrar en la carpeta nos encontramos con la estructura base del proyecto. 
	
	Vemos un directorio node_modules 
	
	El directorio de las dependencias que agregaremos al proyecto 
	
	Al entrar nos encontramos con muchas dependencias iniciales. 
	
	De todos estas herramientas depende nuestro proyecto. 
	
	
	
	Arrancar la app en modo desarrollo. 
	
	En la carpeta del proyecto: 
	
	```
	ng serve
	
	```

	Genera la app para usar en el navegador. 
	
	Compila y crea archivos. 
	
	vendor.js (dependencias de angular)
	
	polyfills.js (arreglos para correr la app en navegador)
	
	crea un css de estilos
	
	un main.js (la app)
	
	Que fue traducida de TypeScrip a JavaScript
	

	Si en el navegador vamos al puerto 
	
	localhost:4200
	
	Nos da una pantall de inicio de angular 
	
	Podemos entrar al sitio de aprendizaje 
	
	Al sitio de documentacion 
	
	generar componentes visuales con Material
	
	Angular dev/tools para cargar desde el nav
	
	Y ver los componentes de nuestra app. 
	
	Tendremos botones para crear componentes
	
	añadir angular material
	
	añadir pwa support 
	
	dependencias
	
	correr testing

	y ejecutar o crear app para produccion 
	
	
	
|| Directivas

	
	Crear componentes para manejar directivas
	
	En la carpeta miapp
	
	```
	ng g c Directivas
	
	```
	ng g c: va a generar un componentes
	
	"generate component" + nombre de nuestro componenten
	
	va a ser Directivas
	
	Dentro de la carpeta App 
	
	Va a crear otra como Directivas
	
	Después agregará esta al archivo (autom(?))
	
	app.module.ts para utilizarla
	
	
	Vamos a app.component.html (como un "main" app)
	
	Y añadirlo a la plantilla html 
	
	Es una etiqueta appDirectivas
	
	```html 
	
	<div class="content" role="main">

		<app-directivas></app-directivas>
	
	</div>
	
	```
	
	
	Podemos ir al navegador, dirá directivas works
	
	Tenemos que tener arrancada la app ng serve
	
	
	Ahora en component.ts (de la directiva)
	
	podemos crear la lógica
	
	Para esta directiva 
	
	Cada componente tiene su propio html, css, ts
	
	Como lo tiene main, etc. 
	
	
	```ts
	
	import { component } from '@angular/core';
	
	@Component ({
		
		selector: 'app-directivas', 
		
		templateUrl: './directivas.component.html', 
		
		styleUrls: [./directivas.component.css]
		
	})
	export class DirectivasComponent {
		
		booleano: boolean = true;  
		
			
	}
		
		
	```
	
	var booleano de tipo boolean
	
	Esta variable ya la podemos usar en nuestro código. 

	
	Dentro del código de este html
	
	Podemos crer código Angular para html. 
	
	```html 
	
	<div>
		
		<h2 #ngif="booleano"> 
			
			La variable booleana es true
		
		</h2>
	
	</div>
	
	```
	
	Le podemos pasar variables, propiedades, estados
	
	Funciones, etc; después escribimos el contenido en función a este código. 
	
	
	Cuando la variable sea verdadero 
	
	Va a presentar el contenido en pantalla. 
	
	
	Como tiene un valor inicial true, va a aparecer
	
	
	Podemos probar las angular dev Tools
	
	para modifcar todo este código en el navegador. 
	
	Y poder probar estas cosas. 
	
	Debemos instalar la extension de los navegadores. 
	
	
	
	








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

 


|| 




# Frameworks
	
	Los frameworks de JavaScript son una parte esencial del desarrollo web front-end moderno y brindan a los desarrolladores herramientas probadas para crear aplicaciones web interactivas y escalables.
	
	Puede ser difícil saber por dónde empezar a la hora de aprender marcos: hay tantos marcos para elegir, aparecen nuevos todo el tiempo, en su mayoría funcionan de manera similar, pero hacen algunas cosas de manera diferente.
	
	Hay algunas cosas específicas con las que se debe tener cuidado al usar frameworks. 
	
	
	Hay muchas preguntas que hacerse: 
	
		¿Por qué debería utilizar un framework?
		
		¿Qué preguntas debo hacer al intentar elegir un framework? ¿Necesito siquiera utilizar un framework?
		
		¿Qué características tienen los frameworks? ¿Cómo funcionan en general y en qué se diferencian las implementaciones de estas características en los frameworks?

		¿Cómo se relacionan con JavaScript o HTML "vainilla"?
	
	
	Guía: 
	
		1. Introducción a los frameworks del lado del cliente
			
			Una descripción general analizando una breve historia de JavaScript y los frameworks, por qué existen los frameworks y qué nos brindan, cómo comenzar a pensar en elegir un framework para aprender y qué alternativas existen para frameworks del lado del cliente.
			
					
		2. Características principales de un framework
			
			Cada framework importante de JavaScript tiene un enfoque diferente para actualizar el DOM, manejar eventos del navegador y brindar una experiencia agradable al desarrollador.
	
			Explorará las características principales de los marcos "los 4 grandes", observando cómo los marcos tienden a funcionar desde un alto nivel y las diferencias entre ellos.
	


# Introducción a los frameworks del lado del cliente

	Cuando JavaScript debutó en 1996, añadió interactividad y entusiasmo ocasionales a una web que, hasta entonces, estaba compuesta de documentos estáticos.
	
	La web se convirtió no sólo en un lugar para leer cosas, sino también para hacer cosas.
	
	La popularidad de JavaScript aumentó constantemente.
	
	Los desarrolladores que trabajaron con JavaScript escribieron herramientas para resolver los problemas que enfrentaban y las empaquetaron en paquetes reutilizables llamados bibliotecas, para poder compartir sus soluciones con otros. 
	
	Este ecosistema compartido de bibliotecas ayudó a dar forma al crecimiento de la web.
	
	
	Ahora, JavaScript es una parte esencial de la web, se utiliza en el 98% de todos los sitios web, y la web es una parte esencial de la vida moderna. 
	
	Los usuarios escriben artículos, administran sus presupuestos, transmiten música, miran películas y se comunican con otras personas a grandes distancias de manera instantánea, mediante chat de texto, audio o video.
	
	La web nos permite hacer cosas que antes sólo eran posibles con aplicaciones nativas instaladas en nuestros ordenadores.
	
	Estos sitios web modernos, complejos e interactivos a menudo se denominan aplicaciones web.
	
	
	La llegada de los marcos JavaScript modernos ha hecho que sea mucho más fácil crear aplicaciones interactivas y altamente dinámicas.
	
	Un framework es una biblioteca que ofrece opiniones sobre cómo se construye el software.
	
	Estas opiniones permiten previsibilidad y homogeneidad en una aplicación; la previsibilidad permite que el software escale a un tamaño enorme y aún sea mantenible; La previsibilidad y la mantenibilidad son esenciales para la salud y la longevidad del software.


	Los frameworks de JavaScript impulsan gran parte del impresionante software de la web moderna, incluidos muchos de los sitios web que probablemente utilice todos los días.

	MDN Web Docs, en el que estás leyendo esto actualmente, utiliza el marco React/ReactDOM para impulsar su interfaz
	
	
	Frameworks existentes: 
		
		Existen muchos pero se considera los "cuatro grandes" son los siguientes.
		
		Ember:
			
			Ember se lanzó inicialmente en diciembre de 2011 como una continuación del trabajo iniciado en el proyecto SproutCore. 
			
			Es un marco más antiguo que tiene menos usuarios que alternativas más modernas como React y Vue, pero aún disfruta de bastante popularidad debido a su estabilidad, soporte de la comunidad y algunos principios de codificación inteligentes.

		
		Angular: 	
			
			Es un framework de aplicación web de código abierto dirigido por el equipo Angular de Google y por una comunidad de individuos y corporaciones.
			
			Es una reescritura completa del mismo equipo que creó AngularJS.
			
			Angular se lanzó oficialmente el 14 de septiembre de 2016.


			Angular es un framework basado en componentes que utiliza plantillas HTML declarativas. 
			
			En el momento de la compilación, de forma transparente para los desarrolladores, el compilador del framework traduce las plantillas en instrucciones JavaScript optimizadas.
			
			Angular usa TypeScript, un superconjunto de JavaScript.
			
		
		Vue:
			
			Después de trabajar y aprender del proyecto AngularJS original, Evan You lanzó Vue en 2014.
			
			Vue es el más joven de los cuatro grandes, pero recientemente ha disfrutado de un aumento en popularidad.
			
			Vue, al igual que AngularJS, extiende HTML con parte de su propio código. 
			
			Aparte de eso, se basa principalmente en JavaScript estándar moderno.
			
			
		React: 
			
			Facebook lanzó React en 2013.
			
			En ese momento, ya había estado usando React para resolver muchos de sus problemas internamente.
			
			React en sí no es un framework; es una biblioteca para renderizar componentes de la interfaz de usuario.
			
			React se utiliza en combinación con otras bibliotecas para crear aplicaciones: React y React Native permiten a los desarrolladores crear aplicaciones móviles; React y ReactDOM les permiten crear aplicaciones web, etc.

			Debido a que React y ReactDOM se usan con mucha frecuencia juntos, React se entiende coloquialmente como un framework de JavaScript.
			
				
			React extiende JavaScript con una sintaxis similar a HTML, conocida como JSX.

		
	Existencia de los frameworks: 
	
		Hemos discutido el entorno que inspiró la creación de marcos, pero no realmente por qué los desarrolladores sintieron la necesidad de crearlos.
		
		Explorar el por qué requiere examinar primero los desafíos del desarrollo de software.

		
		Considere un tipo común de aplicación: un creador de listas de tareas pendientes.
		
		Esta aplicación debería permitir a los usuarios hacer cosas como renderizar una lista de tareas, agregar una nueva tarea y eliminar una tarea; y debe hacerlo mientras rastrea y actualiza de manera confiable los datos subyacentes de la aplicación.
		
		En el desarrollo de software, estos datos subyacentes se conocen como estado.

		
		Cada uno de nuestros objetivos es teóricamente simple de forma aislada.
		
		Podemos iterar sobre los datos para renderizarlos; podemos agregar a un objeto para realizar una nueva tarea; Podemos usar un identificador para buscar, editar o eliminar una tarea.
		
		Cuando recordamos que la aplicación tiene que permitir al usuario hacer todas estas cosas a través del navegador, empiezan a aparecer algunas grietas.
		
		El verdadero problema es este: cada vez que cambiamos el estado de nuestra aplicación, necesitamos actualizar la interfaz de usuario para que coincida.

		
		Podemos examinar la dificultad de este problema observando solo una característica de nuestra aplicación de lista de tareas pendientes: mostrar una lista de tareas.
		
	
	La verbosidad de los cambios DOM:
		
		Crear elementos HTML y representarlos en el navegador en el momento adecuado requiere una sorprendente cantidad de código.
		
		Digamos que nuestro estado es una matriz de objetos estructurados así:
		
		```
		const state = [
		  {
			id: "todo-0",
			name: "Learn some frameworks!",
		  },
		];

		```
		
		¿Cómo mostramos una de esas tareas a nuestros usuarios?
		
		Queremos representar cada tarea como un elemento de lista: un elemento HTML <li> dentro de un elemento de lista desordenado (un <ul>).
		
		¿Cómo lo hacemos? Eso podría verse así:
		
		```
		function buildTodoItemEl(id, name) {
		  const item = document.createElement("li");
		  const span = document.createElement("span");

		  span.textContent = name;

		  item.id = id;
		  item.appendChild(span);
		  item.appendChild(buildDeleteButtonEl(id));

		  return item;
		}

		```
		
		Aquí, usamos el método document.createElement() para crear nuestro <li> y varias líneas más de código para crear las propiedades y elementos secundarios que necesita.


		El fragmento anterior hace referencia a otra función de compilación: buildDeleteButtonEl().
		
		Sigue un patrón similar al que usamos para crear un elemento de lista:
		
		```
		function buildDeleteButtonEl(id) {
		  const button = document.createElement("button");
		  button.setAttribute("type", "button");
		  button.textContent = "Delete";

		  return button;
		}

		```

		Este botón no hace nada todavía, pero lo hará más adelante, una vez que decidamos implementar nuestra función de eliminación.
		
		El código que mostrará nuestros elementos en la página podría leerse algo como esto:
		
		```
		function renderTodoList() {
		  const frag = document.createDocumentFragment();
		  state.tasks.forEach((task) => {
			const item = buildTodoItemEl(task.id, task.name);
			frag.appendChild(item);
		  });

		  while (todoListEl.firstChild) {
			todoListEl.removeChild(todoListEl.firstChild);
		  }
		  todoListEl.appendChild(frag);
		}

		```
			
		Ahora tenemos casi treinta líneas de código dedicadas solo a la interfaz de usuario, solo para representar algo en el DOM, ¡y en ningún momento agregamos clases que podamos usar más adelante para diseñar nuestros elementos de lista!

		Trabajar directamente con el DOM, como en este ejemplo, requiere comprender muchas cosas sobre cómo funciona el DOM: cómo crear elementos; cómo cambiar sus propiedades; cómo poner elementos unos dentro de otros; cómo ponerlos en la página.
		
		En realidad, nada de este código maneja las interacciones del usuario ni aborda la adición o eliminación de una tarea.
		
		Si agregamos esas funciones, debemos recordar actualizar nuestra interfaz de usuario en el momento adecuado y de la manera correcta.
		
		
		Los marcos de JavaScript se crearon para facilitar mucho este tipo de trabajo; existen para brindar una mejor experiencia al desarrollador.
		
		No aportan poderes completamente nuevos a JavaScript; le brindan un acceso más fácil a los poderes de JavaScript para que pueda crear para la web actual.

		Las funciones de JavaScript que se usarón:			
			
			Array.forEach()
			
			Document.createDocumentFragment()
			
			Document.createElement()
			
			Element.setAttribute()
			
			Node.appendChild()
			
			Node.removeChild()
			
			Node.textContent
	
		
	Otra forma de crear UI:
		
		Cada marco de JavaScript ofrece una forma de escribir interfaces de usuario de forma más declarativa.
		
		Es decir, le permiten escribir código que describe cómo debería verse su interfaz de usuario, y el framework lo hace posible en el DOM detrás de escena.

		El enfoque básico de JavaScript para crear nuevos elementos DOM en repetición era difícil de entender de un vistazo.
		
		Por el contrario, el siguiente bloque de código ilustra la forma en que podría utilizar Vue para describir nuestra lista de tareas:
		
		```
		<ul>
		  <li v-for="task in tasks" v-bind:key="task.id">
			<span>{{task.name}}</span>
			<button type="button">Delete</button>
		  </li>
		</ul>

		```

		Eso es todo.
		
		Este fragmento reduce casi treinta líneas de código a seis líneas. 
		
		Lo que hay que destacar aquí es que este código se parece a la interfaz de usuario que representa, mientras que el código JavaScript básico no.

		
		Gracias a Vue, no tuvimos que escribir nuestras propias funciones para crear la interfaz de usuario; el marco se encargará de eso por nosotros de una manera optimizada y eficiente.
		
		Nuestro único papel aquí era describirle a Vue cómo debería verse cada elemento.
		
		Los desarrolladores que estén familiarizados con Vue pueden descubrir rápidamente qué sucede cuando se unen a nuestro proyecto.
		
		Vue no está solo en esto: el uso de un marco mejora la eficiencia individual y del equipo.
		
		
		Es posible hacer cosas similares a esta en JavaScript básico.
		
		Template literal strings facilitan la escritura de cadenas de HTML que representan el aspecto que tendría el elemento final.
		
		Esta podría ser una idea útil para algo tan simple como nuestra aplicación de lista de tareas pendientes, pero no se puede mantener para aplicaciones grandes que administran miles de registros de datos y podrían representar la misma cantidad de elementos únicos en una interfaz de usuario.
		
	
	Herramientas de frameworks: 
		
		Las ventajas de los frameworks se pueden lograr en JavaScript básico, pero el uso de un framework elimina toda la carga cognitiva de tener que resolver estos problemas usted mismo.
		
		Debido a que cada uno de los marcos de este módulo tiene una comunidad grande y activa, el ecosistema de cada marco proporciona herramientas que mejoran la experiencia del desarrollador.
		
		Estas herramientas facilitan agregar cosas como pruebas (para garantizar que su aplicación se comporte como debería) o linting (para garantizar que su código esté libre de errores y sea estilísticamente consistente).


	Compartimentación:
		
		La mayoría de los marcos principales alientan a los desarrolladores a abstraer las diferentes partes de sus interfaces de usuario en componentes: fragmentos de código reutilizables y mantenibles que pueden comunicarse entre sí.
		
		Todo el código relacionado con un componente determinado puede residir en un archivo (o en un par de archivos específicos) para que usted, como desarrollador, sepa exactamente dónde acudir para realizar cambios en ese componente.
		
		En una aplicación básica de JavaScript, tendrías que crear tu propio conjunto de convenciones para lograr esto de una manera eficiente y escalable.
		
		Muchos desarrolladores de JavaScript, si se les deja solos, podrían terminar con todo el código relacionado con una parte de la interfaz de usuario distribuido en todo un archivo, o en otro archivo completamente.
		
		
	Routing:
		
		La característica más esencial de la web es que permite a los usuarios navegar de una página a otra; después de todo, es una red de documentos interconectados.
		
		Cuando sigue un enlace en este mismo sitio web, su navegador se comunica con un servidor y busca contenido nuevo para mostrarle.
		
		Al hacerlo, la URL en su barra de direcciones cambia.
		
		Puede guardar esta nueva URL y volver a la página más adelante, o compartirla con otras personas para que puedan encontrar fácilmente la misma página.
		
		Su navegador recuerda su historial de navegación y también le permite navegar hacia adelante y hacia atrás.
		
		Esto se llama enrutamiento del lado del servidor.
	
		
		Las aplicaciones web modernas normalmente no recuperan ni procesan nuevos archivos HTML: cargan un único shell HTML y actualizan continuamente el DOM dentro de él (lo que se conoce como aplicaciones de una sola página o SPA) sin llevar a los usuarios a nuevas direcciones en la web
		
		Cada nueva pseudopágina web generalmente se denomina vista y, de forma predeterminada, no se realiza ningún enrutamiento.


		Cuando un SPA es lo suficientemente complejo y genera suficientes vistas únicas, es importante incorporar la funcionalidad de enrutamiento a su aplicación.
		
		Las personas están acostumbradas a poder vincular páginas específicas en una aplicación, avanzar y retroceder en su historial de navegación, etc., y su experiencia se ve afectada cuando estas funciones web estándar no funcionan.
		
		Cuando una aplicación cliente maneja el enrutamiento de esta manera, se le llama acertadamente enrutamiento del lado del cliente.
		
		
		Es posible crear un enrutador utilizando las capacidades nativas de JavaScript y el navegador, pero los marcos populares y desarrollados activamente tienen bibliotecas complementarias que hacen que el enrutamiento sea una parte más intuitiva del proceso de desarrollo.
		
	
	Consideraciones al usar frameworks: 
		
		Ser un desarrollador web eficaz significa utilizar las herramientas más adecuadas para el trabajo.
		
		Los marcos de JavaScript facilitan el desarrollo de aplicaciones front-end, pero no son una solución milagrosa que resolverá todos los problemas.
		
		Se analiza algunas de las cosas que debe considerar al usar marcos.
		
		Tenga en cuenta que es posible que no necesite ningún marco; tenga cuidado de no terminar usando un marco porque sí.

	
	Familiaridad con la herramienta:
		
		Al igual que JavaScript básico, los marcos requieren tiempo para aprender y tener sus peculiaridades.
		
		Antes de decidir utilizar un marco para un proyecto, asegúrese de tener tiempo para aprender suficientes características para que le resulte útil en lugar de que vaya en su contra, y asegúrese de que sus compañeros de equipo también se sientan cómodos con él.

	
	Sobreingeniería:

		Si su proyecto de desarrollo web es un portafolio personal con algunas páginas, y esas páginas tienen poca o ninguna capacidad interactiva, es posible que no sea necesario un marco (y todo su JavaScript).

		Dicho esto, los marcos no son monolíticos y algunos de ellos se adaptan mejor a proyectos pequeños que otros.
		
		
	Base de código grande y abstracción:
		
		Los marcos le permiten escribir más código declarativo (y, a veces, menos código en general) al ocuparse de las interacciones DOM por usted, detrás de escena.
		
		Esta abstracción es excelente para su experiencia como desarrollador, pero no es gratuita.
		
		Para traducir lo que usted escribe en cambios DOM, los marcos deben ejecutar su propio código, lo que a su vez hace que su pieza final de software sea más grande y más costosa desde el punto de vista computacional de operar.

		Es inevitable algo de código adicional, y un marco que admita la agitación de árboles (eliminación de cualquier código que no se use realmente en la aplicación durante el proceso de compilación) le permitirá mantener sus aplicaciones pequeñas, pero este sigue siendo un factor que necesita tener en cuenta. 
		
		Considerar el rendimiento de su aplicación, especialmente en dispositivos con más redes/almacenamiento restringido, como teléfonos móviles.
		
		
		La abstracción de frameworks afecta no sólo tu JavaScript, sino también tu relación con la naturaleza misma de la web.
		
		No importa cómo crees para la web, el resultado final, la capa con la que tus usuarios interactúan en última instancia, es HTML. 
		
		Escribir toda su aplicación en JavaScript puede hacerle perder de vista HTML y el propósito de sus diversas etiquetas, y llevarlo a producir un documento HTML que no es semántico e inaccesible.
		
		De hecho, es posible escribir una aplicación frágil que dependa completamente de JavaScript y no funcione sin él.


		Los marcos no son la fuente de nuestros problemas.
		
		Con las prioridades equivocadas, cualquier aplicación puede resultar frágil, inflada e inaccesible. 
		
		Sin embargo, los marcos amplifican nuestras prioridades como desarrolladores.
		
		Si su prioridad es crear una aplicación web compleja, es fácil hacerlo.
		
		Sin embargo, si sus prioridades no protegen cuidadosamente el rendimiento y la accesibilidad, los marcos amplificarán su fragilidad, su hinchazón y su inaccesibilidad.
		
		Las prioridades de los desarrolladores modernos, amplificadas por los marcos, han invertido la estructura de la web en muchos lugares.
		
		En lugar de una red de documentos sólida y centrada en el contenido, la web ahora suele poner JavaScript en primer lugar y la experiencia del usuario en último lugar.
		
	
	Accesibilidad en una web basada en frameworks:
		
		Hacer que las interfaces de usuario sean accesibles siempre requiere algo de reflexión y esfuerzo, y los marcos pueden complicar ese proceso. 
		
		A menudo es necesario emplear API de marco avanzadas para acceder a funciones nativas del navegador, como regiones en vivo de ARIA o administración de enfoque.


		En algunos casos, las aplicaciones marco crean barreras de accesibilidad que no existen para los sitios web tradicionales.
		
		El mayor ejemplo de esto es el enrutamiento del lado del cliente, como se mencionó anteriormente.


		Con el enrutamiento tradicional (del lado del servidor), navegar por la web tiene resultados predecibles.
		
		El navegador sabe que debe centrarse en la parte superior de la página y las tecnologías de asistencia anunciarán el título de la página.
		
		Estas cosas suceden cada vez que navegas a una nueva página.
		
		
		Con el enrutamiento del lado del cliente, su navegador no carga nuevas páginas web, por lo que no sabe si debe ajustar automáticamente el foco o anunciar el título de una nueva página.
		
		Los autores de marcos han dedicado mucho tiempo y trabajo a escribir JavaScript que recree estas características y, aun así, ningún marco lo ha hecho a la perfección.
		
		
		El resultado es que debes considerar la accesibilidad desde el comienzo de cada proyecto web, pero ten en cuenta que las bases de código abstractas que utilizan marcos tienen más probabilidades de sufrir problemas importantes de accesibilidad si no lo haces.
		
	
	Elegir un marco:
		
		Cada uno de los marcos discutidos en este módulo adopta diferentes enfoques para el desarrollo de aplicaciones web. 
		
		Cada uno mejora o cambia periódicamente y cada uno tiene sus pros y sus contras. 
		
		Elegir el marco adecuado es un proceso que depende del equipo y del proyecto, y usted debe realizar su propia investigación para descubrir cuál se adapta a sus necesidades.
		
		
		Hemos identificado algunas preguntas que puede hacer para investigar sus opciones de manera más efectiva:
			
			¿Qué navegadores admite el framework?
			
			¿Qué lenguajes específicos de dominio utiliza el framework?

			¿Tiene el framework una comunidad sólida y buenos documentos (y otro tipo de soporte) disponibles?
		
		
		La tabla de esta sección proporciona un resumen sencillo de la compatibilidad actual del navegador que ofrece cada marco, así como los lenguajes específicos del dominio con los que se puede utilizar.

		domain-specific languages (DSLs) 
		
		Son lenguajes de programación relevantes en áreas específicas del desarrollo de software.
		
		En el contexto de los marcos, los DSL son variaciones de JavaScript o HTML que facilitan el desarrollo con ese marco.
		
		Fundamentalmente, ninguno de los marcos requiere que un desarrollador utilice un DSL específico, pero casi todos han sido diseñados con un DSL específico en mente.
		
		Si elige no emplear el DSL preferido de un marco, perderá funciones que de otro modo mejorarían su experiencia de desarrollador.
		
		
		Debería considerar seriamente la matriz de soporte y los DSL de un marco al elegir cualquier proyecto nuevo.
		
		La compatibilidad de navegadores no coincidentes puede ser una barrera para sus usuarios; El soporte DSL no coincidente puede ser una barrera para usted y sus compañeros de equipo.
		
		
		Framework  Browser support  Preferred DSL  Supported DSLs  
		
		Angular  Modern  TypeScript  HTML-based/TS  
		
		React  Modern  JSX  JSX/TS
		
		Vue  Modern (IE9+ in Vue 2)  HTML-based  HTML-based, JSX, Pug
		
		Ember  Modern (IE9+ in Ember version 2.18)  Handlebars  Handlebars, TypeScript
		
		
		Los DSL que hemos descrito como "basados ​​en HTML" no tienen nombres oficiales.
		
		En realidad no son verdaderos DSL, pero sí HTML no estándar, por lo que creemos que vale la pena destacarlos.


	Comunidad fuerte:
			
		Esta es quizás la métrica más difícil de medir porque el tamaño de la comunidad no se correlaciona directamente con números de fácil acceso.
		
		Puede consultar la cantidad de estrellas de GitHub de un proyecto o las descargas semanales de npm para tener una idea de su popularidad, pero a veces lo mejor es buscar en algunos foros o hablar con otros desarrolladores.
		
		No se trata sólo del tamaño de la comunidad, sino también de lo acogedora e inclusiva que sea y de lo buena que sea la documentación disponible.


	Opiniones en la web:
		
		No confíe simplemente en nuestra palabra sobre este asunto: hay debates en toda la web.
		
		La Fundación Wikimedia eligió recientemente utilizar Vue para su interfaz y publicó una solicitud de comentarios (RFC) sobre la adopción del marco.
		
		Eric Gardner, autor del RFC, se toEste RFC sirve como un gran ejemplo del tipo de investigación que debe realizar usted mismo cuando planee utilizar un marco de front-end.mó el tiempo para describir las necesidades del proyecto Wikimedia y por qué ciertos marcos eran buenas opciones para el equipo.
		
		
		La encuesta sobre el estado de JavaScript es una colección útil de comentarios de desarrolladores de JavaScript.
		
		Cubre muchos temas relacionados con JavaScript, incluidos datos sobre el uso de marcos y la opinión de los desarrolladores hacia ellos.
		
		
		El equipo de Vue ha comparado exhaustivamente Vue con otros marcos populares.
		
		Puede haber algún sesgo en esta comparación (lo cual señalan), pero de todos modos es un recurso valioso.
		
	
	Alternativas a los frameworks del lado del cliente:
		
		Si está buscando herramientas para acelerar el proceso de desarrollo web y sabe que su proyecto no requerirá JavaScript intensivo del lado del cliente, puede optar por una de varias otras soluciones para crear la web:
			
			content management system
			
			Server-side rendering
			
			static site generator
			
	
	Content management system:
	
		Los sistemas de gestión de contenido (CMS) son herramientas que permiten a un usuario crear contenido para la web sin escribir código directamente. 
		
		Son una buena solución para proyectos grandes, especialmente proyectos que requieren aportes de redactores de contenido que tienen una capacidad de codificación limitada, o para programadores que desean ahorrar tiempo.
		
		Sin embargo, requieren una cantidad significativa de tiempo para configurarse, y utilizar un CMS significa que usted cede al menos cierto grado de control sobre el resultado final de su sitio web.
		
		Por ejemplo: si el CMS elegido no crea contenido accesible de forma predeterminada, a menudo es difícil mejorarlo.
		
		Algunos sistemas CMS populares incluyen Wordpress, Joomla y Drupal.
	
	
	Server-side rendering:
		
		La representación del lado del servidor (SSR) es una arquitectura de aplicación en la que el trabajo del servidor es representar una aplicación de una sola página (SPA).
		
		Esto es lo opuesto a la representación del lado del cliente, que es la forma más común y sencilla de crear una aplicación JavaScript.
		
		La renderización del lado del servidor es más fácil en el dispositivo del cliente porque solo les envía un archivo HTML renderizado, pero puede ser difícil de configurar en comparación con una aplicación renderizada del lado del cliente.
		
		Todos los marcos cubiertos en este módulo admiten la representación del lado del servidor y la representación del lado del cliente. 
		
		
		Consulte Next.js para React, Nuxt para Vue (sí, es confuso y no, ¡estos proyectos no están relacionados!), FastBoot para Ember y Angular Universal para Angular.

		Algunas soluciones SSR son escritas y mantenidas por la comunidad, mientras que otras son soluciones "oficiales" proporcionadas por el mantenedor del marco.
		
		
	Static site generators:
		
		Los generadores de sitios estáticos son programas que generan dinámicamente todas las páginas web de un sitio web de varias páginas, incluido cualquier CSS o JavaScript relevante, para que puedan publicarse en cualquier número de lugares.
		
		El host de publicación podría ser una rama de páginas de GitHub, una instancia de Netlify o cualquier servidor privado de su elección, por ejemplo.
		
		Hay una serie de ventajas de este enfoque, principalmente en torno al rendimiento (el dispositivo de su usuario no está creando la página con JavaScript; ya está completa) y la seguridad (las páginas estáticas tienen menos vectores de ataque).
		
		Estos sitios aún pueden utilizar JavaScript cuando lo necesiten, pero no dependen de él.
		
		Los generadores de sitios estáticos requieren tiempo para aprender, como cualquier otra herramienta, lo que puede ser una barrera para su proceso de desarrollo.
		
		
		Los sitios estáticos pueden tener tantas páginas únicas como desee.
		
		Así como los marcos le permiten escribir rápidamente aplicaciones JavaScript del lado del cliente, los generadores de sitios estáticos le permiten crear rápidamente archivos HTML que de otro modo habría escrito individualmente.
		
		Al igual que los marcos, los generadores de sitios estáticos permiten a los desarrolladores escribir componentes que definen partes comunes de sus páginas web y componer esos componentes juntos para crear una página final.
		
		los generadores de sitios estáticos, estos componentes se denominan plantillas. 
		
		Las páginas web creadas por generadores de sitios estáticos pueden incluso albergar aplicaciones marco: si desea que una página específica de su sitio web generado estáticamente inicie una aplicación React cuando su usuario la visite, por ejemplo, puede hacerlo.
		
		
		Los generadores de sitios estáticos existen desde hace bastante tiempo y están en constante optimización e innovación.
		
		Existe una variedad de opciones, incluidas Astro, Eleventy, Hugo, Jekyll y Gatsby, que se basan en varias pilas de tecnología y brindan características distintivas.
		
		Otras opciones, como Docusaurus y VitePress, utilizan marcos del lado del cliente en lugar de plantillas, pero generan archivos estáticos optimizados de manera similar.



# Características Principales de un Framework: 

	Cada marco importante de JavaScript tiene un enfoque diferente para actualizar el DOM, manejar eventos del navegador y brindar una experiencia agradable al desarrollador.
	
	Explorará las características principales de los marcos "los 4 grandes", observando cómo los marcos tienden a funcionar desde un alto nivel y las diferencias entre ellos.
	
	
	Domain-specific languages (DLS):
		
		Todos los marcos analizados en este módulo funcionan con JavaScript y todos le permiten utilizar lenguajes específicos de dominio (DSL) para crear sus aplicaciones.
		
		En particular, React ha popularizado el uso de JSX para escribir sus componentes, mientras que Ember utiliza Handlebars.
		
		A diferencia de HTML, estos lenguajes saben cómo leer variables de datos y estos datos se pueden utilizar para agilizar el proceso de escritura de su interfaz de usuario.
		
		
		Las aplicaciones angulares suelen hacer un uso intensivo de TypeScript. 
		
		TypeScript no se ocupa de la escritura de interfaces de usuario, pero es un lenguaje de dominio específico y tiene diferencias significativas con JavaScript básico.
		
		El navegador no puede leer los DSL directamente; primero deben transformarse a JavaScript o HTML. 
		
		La transformación es un paso adicional en el proceso de desarrollo, pero las herramientas del marco generalmente incluyen las herramientas necesarias para manejar este paso, o pueden ajustarse para incluir este paso.
		
		Si bien es posible crear aplicaciones de marcos sin utilizar estos lenguajes específicos de dominio, adoptarlos agilizará su proceso de desarrollo y facilitará la búsqueda de ayuda de las comunidades en torno a esos marcos.

	
	JSX: 
		
		JSX, que significa JavaScript y XML, es una extensión de JavaScript que aporta una sintaxis similar a HTML a un entorno JavaScript. 
		
		Fue inventado por el equipo de React para usarlo en aplicaciones React, pero puede usarse para desarrollar otras aplicaciones, como aplicaciones Vue, por ejemplo.

		Un ejemplo JSX simple:
		
		```
		const subject = "World";
		const header = (
		  <header>
			<h1>Hello, {subject}!</h1>
		  </header>
		);

		```

		Esta expresión representa un elemento HTML <header> con un elemento <h1> en su interior.
		
		Las llaves alrededor de {subject} le indican a la aplicación que lea el valor de la constante del sujeto y lo inserte en nuestro <h1>.


		Cuando se usa con React, el JSX del fragmento anterior se compilaría en esto:

		```
		const subject = "World";
		const header = React.createElement(
		  "header",
		  null,
		  React.createElement("h1", null, "Hello, ", subject, "!"),
		);

		```
		
		Cuando finalmente el navegador lo procese, el fragmento anterior producirá un código HTML similar a este:
		
		```
		<header>
		  <h1>Hello, World!</h1>
		</header>

		```

	
	Handlebars:
		
		El lenguaje de plantillas Handlebars no es específico de las aplicaciones de Ember, pero se utiliza mucho en las aplicaciones de Ember.
		
		El código handlebars se parece al HTML, pero tiene la opción de extraer datos de otro lugar.
		
		Estos datos se pueden utilizar para influir en el HTML que finalmente crea una aplicación.

		Al igual que JSX, Handlebars utiliza llaves para inyectar el valor de una variable.
		
		El manillar utiliza un par doble de llaves, en lugar de un solo par.

		Dada esta plantilla de Handlebars:
			
		```
		<header>
		  <h1>Hello, {{subject}}!</h1>
		</header>
		
		```
		
		Y estos datos:	

		```
		{
		  subject: "World";
		}

		```

		Handlebars construirán HTML de esta manera:

		```
		<header>
		  <h1>Hello, World!</h1>
		</header>

		```
		
	
	TypeScript: 
	
		Es un superconjunto de JavaScript, lo que significa que extiende JavaScript: todo el código JavaScript es TypeScript válido, pero no al revés. 
		
		TypeScript es útil por el rigor que permite a los desarrolladores imponer su código.
		
		Por ejemplo, considere una función add(), que toma los números enteros a y b ​​y devuelve su suma.

		En JavaScript, esa función podría escribirse así:
		
		```
		function add(a, b) {
		  return a + b;
		}

		```
		
		Este código puede resultar trivial para alguien acostumbrado a JavaScript, pero aún podría ser más claro.
		
		JavaScript nos permite usar el operador + para concatenar cadenas, por lo que técnicamente esta función aún funcionaría si a y b fueran cadenas; simplemente es posible que no le proporcione el resultado que espera.
		
		¿Qué pasaría si quisiéramos permitir que solo se pasen números a esta función? TypeScript lo hace posible:
		
		```
		function add(a: number, b: number) {
		  return a + b;
		}

		```
			
		: number escrito después de cada parámetro aquí le dice a TypeScript que tanto a como b deben ser números. 
		
		Si usáramos esta función y le pasáramos '2' como argumento, TypeScript generaría un error durante la compilación y nos veríamos obligados a corregir nuestro error.
		
		Podríamos escribir nuestro propio JavaScript que nos genere estos errores, pero haría que nuestro código fuente fuera significativamente más detallado. 
		
		Probablemente tenga más sentido dejar que TypeScript se encargue de dichas comprobaciones por nosotros.
		
	
	Componentes: 
		
		Como se mencionó en el capítulo anterior, la mayoría de los marcos tienen algún tipo de modelo de componente.
		
		Los componentes de React se pueden escribir con JSX, componentes de Ember con Handlebars y componentes de Angular y Vue con una sintaxis de plantilla que extiende ligeramente HTML.
			
		Los componentes de cada marco ofrecen una manera de describir las propiedades externas que pueden necesitar, el estado interno que el componente debe administrar y los eventos que un usuario puede desencadenar en el marcado del componente.
		
		
		Ahora se utilizará React con JSX.
		
		
	Propiedades: 
		
		Properties o props, son datos externos que un componente necesita para poder renderizarse.
		
		Suponga que está creando un sitio web para una revista en línea y necesita asegurarse de que cada escritor colaborador reciba crédito por su trabajo.
		 
		Puede crear un componente AuthorCredit para acompañar cada artículo.
		
		Este componente debe mostrar un retrato del autor y una breve firma sobre él.
		
		Para saber qué imagen representar y qué firma imprimir, AuthorCredit necesita aceptar algunas props.
		
		
		Una representación de React de este componente AuthorCredit podría verse así:
		
		```jsx
		
		function AuthorCredit(props) {
		  return (
			<figure>
			  <img src={props.src} alt={props.alt} />
			  <figcaption>{props.byline}</figcaption>
			</figure>
		  );
		}
			
		```
		
		{props.src}, {props.alt} y {props.byline} representan dónde se insertarán nuestros props en el componente. 
		
		Para renderizar este componente, escribiríamos un código como este en el lugar donde queremos que se renderice (que probablemente estará dentro de otro componente):

		
		```jsx
		
		<AuthorCredit
		  src="./assets/zelda.png"
		  alt="Portrait of Zelda Schiff"
		  byline="Zelda Schiff is editor-in-chief of the Library Times."
		/>

		```
		
		En última instancia, esto representará el siguiente elemento <figure> en el navegador, con su estructura definida en el componente AuthorCredit y su contenido definido en los props incluidos en la llamada del componente AuthorCredit:
		
		```html
		
		<figure>
		  <img src="assets/zelda.png" alt="Portrait of Zelda Schiff" />
		  <figcaption>Zelda Schiff is editor-in-chief of the Library Times.</figcaption>
		</figure>

		```
		

	State: 
		
		El concepto de estado un mecanismo sólido de manejo del estado es clave para un marco eficaz, y cada componente puede tener datos que necesiten controlar su estado.
		
		Este estado persistirá de alguna manera mientras el componente esté en uso.
		
		Al igual que los props el estado se puede utilizar para afectar la forma en que se representa un componente.

		
		Como ejemplo, considere un botón que cuenta cuántas veces se ha hecho clic en él.
		
		Este componente debería ser responsable de rastrear su propio estado de conteo y podría escribirse así:
		
		```jsx 
		
		function CounterButton() {
		  const [count] = useState(0);
		  return <button>Clicked {count} times</button>;
		}

		```

		useState() es un React Hook que, dado un valor de datos inicial, realizará un seguimiento de ese valor a medida que se actualice.
		
		El código se mostrará inicialmente así en el navegador:
		
		```html
		
		<button>Clicked 0 times</button>

		```

		La llamada useState() realiza un seguimiento del valor de recuento de forma sólida en toda la aplicación, sin necesidad de escribir código para hacerlo usted mismo.
		
	
	Events: 
		
		Para ser interactivos, los componentes necesitan formas de responder a los eventos del navegador, para que nuestras aplicaciones puedan responder a nuestros usuarios. 
		
		Cada marco proporciona su propia sintaxis para escuchar los eventos del navegador, que hacen referencia a los nombres de los eventos del navegador nativo equivalentes.

		En React, escuchar el evento de clic requiere una propiedad especial, onClick. 
		
		Actualicemos nuestro código CounterButton desde arriba para permitirle contar clics:
		
		```
		function CounterButton() {
		  const [count, setCount] = useState(0);
		  return (
			<button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
		  );
		}
				
		```

		En esta versión estamos usando la funcionalidad useState() adicional para crear una función setCount() especial, que podemos invocar para actualizar el valor de count. 
		
		Llamamos a esta función dentro del controlador de eventos onClick para establecer el recuento en cualquiera que sea su valor actual, más uno
		
		
	Styling components:
		
		Cada marco ofrece una forma de definir estilos para sus componentes o para la aplicación en su conjunto.
		
		Aunque el enfoque de cada marco para definir los estilos de un componente es ligeramente diferente, todos ofrecen múltiples formas de hacerlo.
		
		Con la adición de algunos módulos auxiliares, puede diseñar sus aplicaciones de marco en Sass o Less, o transpilar sus hojas de estilo CSS con PostCSS.
	
	
	Manejo de dependencias:
		
		Todos los marcos principales proporcionan mecanismos para manejar dependencias, utilizando componentes dentro de otros componentes, a veces con múltiples niveles de jerarquía.
		
		Al igual que con otras características, el mecanismo exacto diferirá entre los marcos, pero el resultado final es el mismo.
		
		Los componentes tienden a importar componentes a otros componentes utilizando la sintaxis estándar del módulo JavaScript, o al menos algo similar.
		
		
	Componentes en componentes:
		
		Un beneficio clave de la arquitectura de interfaz de usuario basada en componentes es que los componentes se pueden componer juntos
		
		Así como puede escribir etiquetas HTML unas dentro de otras para crear un sitio web, puede usar componentes dentro de otros componentes para crear una aplicación web.
		
		Cada marco le permite escribir componentes que utilizan (y por lo tanto dependen de) otros componentes.

		
		Por ejemplo, nuestro componente AuthorCredit React podría utilizarse dentro de un componente de artículo.
		
		Eso significa que el Article necesitaría importar AuthorCredit
		
		```html
		
		import AuthorCredit from "./components/AuthorCredit";

		```
		
		Una vez hecho esto, AuthorCredit podría usarse dentro del componente Artículo de esta manera:
		
		```jsx
		
		<Article>
		  <AuthorCredit />
		</Article>

		```
		
	
	Inyección de dependencia:
		
		Las aplicaciones del mundo real a menudo pueden implicar estructuras de componentes con múltiples niveles de anidamiento.
		
		Un componente AuthorCredit anidado en muchos niveles de profundidad podría, por alguna razón, necesitar datos del nivel raíz de nuestra aplicación.
		
		
		Digamos que el sitio de la revista que estamos construyendo está estructurado así

		```
		<App>
		  <Home>
			<Article>
			  <AuthorCredit {/* props */} />
			</Article>
		  </Home>
		</App>

		```
		
		Nuestro componente App tiene datos que nuestro componente AuthorCredit necesita.
		
		Podríamos reescribir Home y Article para que sepan transmitir los props, pero esto podría resultar tedioso si hay muchos, muchos niveles entre el origen y el destino de nuestros datos.
		
		También es excesivo: Home y Article en realidad no utilizan el portrait o la byline del autor, pero si queremos obtener esa información en AuthorCredit, necesitaremos cambiar Inicio y Artículo para acomodarlo.

		
		El problema de pasar datos a través de muchas capas de componentes se llama prop drilling y no es ideal para aplicaciones grandes.

		Para evitar prop drilling, los marcos proporcionan una funcionalidad conocida como inyección de dependencia.
		
		Es una forma de llevar ciertos datos directamente a los componentes que los necesitan, sin pasarlos por niveles intermedios.
		
		Cada marco implementa la inyección de dependencia con un nombre diferente y de una manera diferente, pero el efecto es, en última instancia, el mismo.
		
		
		Angular llama a este proceso inyección de dependencia.
		
		Vue tiene métodos de componente provide() e inject().
		
		React tiene Context API.
		
		Ember comparte el estado a través de servicios.

		
	Lifecycle: 
		
		En el contexto de un marco, el ciclo de vida de un componente es una colección de fases por las que pasa un componente desde el momento en que se agrega al DOM y luego el navegador lo representa (a menudo llamado mounting) hasta el momento en que se elimina del DOM ( a menudo llamado unmounting).
		
		Todos los marcos siguen el mismo modelo general: permiten a los desarrolladores realizar ciertas acciones cuando el componente se monta, cuando se renderiza, cuando se desmonta y en muchas fases intermedias.
		
		
		La fase de renderizado es la más crucial de comprender, porque se repite la mayor cantidad de veces cuando el usuario interactúa con su aplicación.
		
		Se ejecuta cada vez que el navegador necesita mostrar algo nuevo, ya sea que esa nueva información sea una adición a lo que hay en el navegador, una eliminación o una edición de lo que hay allí.
		
		
		Este diagrama del ciclo de vida de un componente de React ofrece una descripción general del concepto:
			
		“Fase Render”:

			Pura y sin efectos colaterales, puede ser pausada, abortada o reiniciada por React.
			
			Montaje -> Constructor -> Render
			
			Actualización: 
				
				New props, setState(), forceUpdate() -> Render 
				
			Desmontaje 
			
		“Fase Commit”

			Puede operar sobre el DOM, ejecutar side-effects, agendar actualizaciones
		
			Render -> React updates ­D­O­M and refs

			component-DidMount (Montaje)
			
			component-DidMount (Actualización)
			
			component-Will-Unmount (Desmontaje)
			
		
		También podemos ver los ciclos de vida menos comunes. 
		
	
	Rendering elements:
		
		Al igual que con los ciclos de vida, los marcos adoptan enfoques diferentes pero similares a la hora de representar sus aplicaciones. 
		
		Todos ellos rastrean la versión renderizada actual del DOM de su navegador, y cada uno toma decisiones ligeramente diferentes sobre cómo el DOM debe cambiar a medida que los componentes de su aplicación se vuelven a renderizar.
		
		Debido a que los marcos toman estas decisiones por usted, normalmente usted mismo no interactúa con el DOM.
		
		Esta abstracción fuera del DOM es más compleja y consume más memoria que actualizar el DOM usted mismo, pero sin ella, los marcos no podrían permitirle programar de la forma declarativa por la que son conocidos.
		
		
		El DOM virtual es un método mediante el cual la información sobre el DOM de su navegador se almacena en la memoria JavaScript. 
		
		Su aplicación actualiza esta copia del DOM y luego la compara con el DOM "real" (el DOM que realmente se representa para sus usuarios) para decidir qué representar.
		
		La aplicación crea una "diferencia" para comparar las diferencias entre el DOM virtual actualizado y el DOM renderizado actualmente, y utiliza esa diferencia para aplicar actualizaciones al DOM real.
		
		Tanto React como Vue utilizan un modelo DOM virtual, pero no aplican exactamente la misma lógica al realizar diferencias o renderizar.

		
		El DOM virtual (VDOM) es un concepto de programación en el que una representación ideal o "virtual" de una interfaz de usuario se mantiene en la memoria y se sincroniza con el DOM "real" mediante una biblioteca como ReactDOM.
		
		Este proceso se llama reconciliación.

		
		Este enfoque habilita la API declarativa de React: usted le dice a React en qué estado desea que esté la interfaz de usuario y se asegura de que el DOM coincida con ese estado.
		
		Esto abstrae la manipulación de atributos, el manejo de eventos y la actualización manual de DOM que de otro modo tendría que usar para crear su aplicación.


		Dado que el "DOM virtual" es más un patrón que una tecnología específica, a veces la gente dice que significa cosas diferentes.
		
		En el mundo React, el término "DOM virtual" generalmente se asocia con elementos de React, ya que son los objetos que representan la interfaz de usuario.
		
		Sin embargo, React también utiliza objetos internos llamados "fibras" para contener información adicional sobre el árbol de componentes.
		
		También pueden considerarse parte de la implementación del "DOM virtual" en React.


		¿Es Shadow DOM lo mismo que Virtual DOM?
		
		No, son diferentes.
		
		Shadow DOM es una tecnología de navegador diseñada principalmente para determinar el alcance de variables y CSS en componentes web.
		
		El DOM virtual es un concepto implementado por bibliotecas en JavaScript además de las API del navegador.
		
		
		React Fiber es el nuevo motor de reconciliación en React 16.
		
		Su objetivo principal es permitir la representación incremental del DOM virtual.
		
	
		El DOM incremental es similar al DOM virtual en que crea una diferencia de DOM para decidir qué representar, pero se diferencia en que no crea una copia completa del DOM en la memoria de JavaScript.
		
		Ignora las partes del DOM que no es necesario cambiar.
		
		Angular es el único marco analizado hasta ahora en este módulo que utiliza un DOM incremental.

		
		Glimmer VM es exclusivo de Ember. 
		
		No es un DOM virtual ni un DOM incremental; Es un proceso separado mediante el cual las plantillas de Ember se transpilan en una especie de "código de bytes" que es más fácil y rápido de leer que JavaScript.
		
	
	Routing: 
		
		El enrutamiento es una parte importante de la experiencia web. 
		
		Para evitar una experiencia interrumpida en aplicaciones suficientemente complejas con muchas vistas, cada uno de los marcos cubiertos en este módulo proporciona una biblioteca (o más de una biblioteca) que ayuda a los desarrolladores a implementar el enrutamiento del lado del cliente en sus aplicaciones.
		
	
	Testing: 
		
		Todas las aplicaciones se benefician de una cobertura de prueba que garantiza que su software continúe comportándose de la forma esperada, y las aplicaciones web no son diferentes.
		
		El ecosistema de cada marco proporciona herramientas que facilitan la redacción de pruebas.
		
		Las herramientas de prueba no están integradas en los marcos en sí, pero las herramientas de interfaz de línea de comandos utilizadas para generar aplicaciones de marco le brindan acceso a las herramientas de prueba adecuadas.

		
		Cada marco tiene amplias herramientas en su ecosistema, con capacidades para pruebas unitarias y de integración por igual.

		Testing Library es un conjunto de utilidades de prueba que tiene herramientas para muchos entornos de JavaScript, incluidos React, Vue y Angular. 
		
		Los documentos de Ember cubren las pruebas de las aplicaciones de Ember.


		Aquí hay una prueba rápida para nuestro CounterButton escrita con la ayuda de la biblioteca React Testing.
		
		Prueba una serie de cosas, como la existencia del botón y si el botón muestra el texto correcto después de hacer clic 0, 1 y 2 veces.

		```jsx
		
		import { fireEvent, render, screen } from "@testing-library/react";

		import CounterButton from "./CounterButton";

		it("Renders a semantic button with an initial state of 0", () => {
		  render(<CounterButton />);
		  const btn = screen.getByRole("button");

		  expect(btn).toBeInTheDocument();
		  expect(btn).toHaveTextContent("Clicked 0 times");
		});

		it("Increments the count when clicked", () => {
		  render(<CounterButton />);
		  const btn = screen.getByRole("button");

		  fireEvent.click(btn);
		  expect(btn).toHaveTextContent("Clicked 1 times");

		  fireEvent.click(btn);
		  expect(btn).toHaveTextContent("Clicked 2 times");
		});

		```
		
		

		


		

	
			
		
			
			
		
		
		
	



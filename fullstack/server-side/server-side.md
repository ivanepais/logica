|| Server Side Programming 

	Los sitios web dinámicos tiene una programación del lado del servidor. 
	
	Estos sitios entregan información personalizada en respuesta a solicitudes HTTP

	
	La mayoría de los sitios web importantes utilizan algún tipo de tecnología del lado del servidor para mostrar datos dinámicamente según sea necesario
	
	Imagine cuántos productos hay disponibles en Amazon e imagine cuántas publicaciones se han escrito en Facebook
	
	Mostrar todo esto usando diferentes páginas estáticas sería extremadamente ineficiente
	
	Por lo que dichos sitios muestran plantillas estáticas (creadas con HTML, CSS y JavaScript)
	
	Luego actualizan dinámicamente los datos que se muestran dentro de esas plantillas cuando es necesario
	
	Como cuando desea ver un producto diferente en Amazon
	
	
	Aprendizaje: 
		
		La programación del lado del servidor suele ser más fácil que el desarrollo del lado del cliente.
		
		Porque los sitios web dinámicos tienden a realizar muchas operaciones muy similares.
		
		Recuperar datos de una base de datos y mostrarlos en una página, validar los datos ingresados ​​por el usuario y guardarlos en una base de datos, verificar los permisos de los usuarios e iniciar sesión en los usuarios, etc.
		
		Se construyen utilizando marcos web que facilitan estas y otras operaciones comunes del servidor web.

		El conocimiento básico de conceptos de programación (o de un lenguaje de programación en particular) es útil, pero no esencial.
		
		De manera similar, no se requiere experiencia en codificación del lado del cliente. 
		
		Pero un conocimiento básico lo ayudará a trabajar mejor con los desarrolladores que crean su "interfaz" web del lado del cliente.



|| Servidores 

	El término servidor web puede referirse a hardware o software, o a ambos trabajando juntos.
	
	
	Desde el punto de vista del hardware, un servidor web es una computadora que almacena el software del servidor web y los archivos componentes de un sitio web. 
	
	Por ejemplo, documentos HTML, imágenes, hojas de estilo CSS y archivos JavaScript.
	
	Un servidor web se conecta a Internet y admite el intercambio físico de datos con otros dispositivos conectados a la web
	
	
	En cuanto al software un servidor web incluye varias partes que controlan cómo los usuarios web acceden a los archivos alojados.
	
	Como mínimo, este es un servidor HTTP. 
	
	Un servidor HTTP es un software que comprende URL (direcciones web) y HTTP (el protocolo que utiliza su navegador para ver páginas web).
	
	Se puede acceder a un servidor HTTP a través de los nombres de dominio de los sitios web. 
	
	El servidor almacena y entrega el contenido de estos sitios web alojados al dispositivo del usuario final.

	
	En el nivel más básico, cada vez que un navegador necesita un archivo alojado en un servidor web, el navegador solicita el archivo a través de HTTP.
	
	Cuando la solicitud llega al servidor web (hardware) correcto. 
	
	El servidor HTTP (software) acepta la solicitud. 
	
	Encuentra el documento solicitado y lo envía de vuelta al navegador, también a través de HTTP.
	
	Si el servidor no encuentra el documento solicitado, devuelve una respuesta 404.
	
	Diagrama: 
	
		Web Server <- HTTP Request -> Navegador
										
		HTTP server -> HTTP Response ->
		
		Files 
		 
		 
	Para publicar un sitio web, necesita un servidor web estático o dinámico.

	
	Un servidor web estático, o stack, consta de una computadora (hardware) con un servidor HTTP (software).

	Lo llamamos "estático" porque el servidor envía sus archivos alojados tal cual a su navegador.
	
	
	Un servidor web dinámico consta de un servidor web estático más software adicional.
	
	Normalmente un servidor de aplicaciones y una base de datos
	
	Lo llamamos "dinámico" porque el servidor de aplicaciones actualiza los archivos alojados antes de enviar el contenido a su navegador a través del servidor HTTP.
	 
	
	Para producir las páginas web finales que ve en el navegador, el servidor de aplicaciones podría llenar una plantilla HTML con contenido de una base de datos
	
	Sitios como MDN o Wikipedia tienen miles de páginas web.
	
	Este tipo de sitios se componen de sólo unas pocas plantillas HTML y una base de datos gigante, en lugar de miles de documentos HTML estáticos.
	
	Esta configuración facilita el mantenimiento y la entrega del contenido.
	
	
	Archivos: 
		
		Para buscar una página web, su navegador envía una solicitud al servidor web
		
		El servidor busca el archivo solicitado en su propio espacio de almacenamiento.
		
		Al encontrar el archivo, el servidor lo lee, lo procesa según sea necesario y lo envía al navegador.
		
		
		Un servidor web debe almacenar los archivos del sitio web
	
		Todos los documentos HTML y sus activos/recursos (assets) relacionados, incluidas imágenes, hojas de estilo CSS, archivos JavaScript, fuentes y vídeos.

		Técnicamente, podrías alojar todos esos archivos en tu propia computadora. 
		
		Pero es mucho más conveniente almacenar todos los archivos en un servidor web dedicado.
			
			
			Un servidor web dedicado suele estar más disponible (en funcionamiento y ejecutandose).
		
			Excluyendo tiempos de inactividad y problemas del sistema, un servidor web dedicado siempre está conectado a Internet		
			
			Un servidor web dedicado puede tener la misma dirección IP todo el tiempo
				
				Esto se conoce como dirección IP dedicada.
				
				(No todos los ISP proporcionan una dirección IP fija para las líneas residenciales).

			Un servidor web dedicado normalmente lo mantiene un tercero.

		
		Por todas estas razones, encontrar un buen proveedor de hosting.
		
		Es una parte clave en la construcción de su sitio web.
		
		Examinar los distintos servicios que ofrecen las empresas.
		
		Elige uno que se ajuste a tus necesidades y presupuesto.
		
		(Los servicios varían desde gratuitos hasta miles de dólares por mes).
		
		Una vez que tenga el servicio de alojamiento web, debe cargar sus archivos en su servidor web.
		
		
	Comunicación a través de HTTP:
		
		Un servidor web proporciona soporte para HTTP.
		
		(Protocolo de transferencia de hipertexto).
		
		Como su nombre lo indica, HTTP especifica cómo transferir hipertexto.
		
		(Documentos web vinculados) entre dos computadoras.
		
		Un protocolo es un conjunto de reglas para la comunicación entre dos computadoras.
		
		HTTP es un protocolo textual y sin estado.
		 
			
			Textual:
				
				Todos los comandos son texto sin formato y legibles por humanos.
				
			
			Stateless:
		
				Ni el servidor ni el cliente recuerdan comunicaciones anteriores.
				
				Por ejemplo, al depender únicamente de HTTP, un servidor no puede recordar una contraseña que usted escribió.
				
				Ni su progreso en una transacción incompleta.
				
				Necesita un servidor de aplicaciones para tareas como esa.
				
				
		HTTP proporciona reglas claras sobre cómo se comunican un cliente y un servidor
		
			
			Por lo general, sólo los clientes realizan solicitudes HTTP y sólo a los servidores.
			
				Los servidores responden a la solicitud HTTP de un cliente.
				
				Un servidor también puede completar datos en la caché de un cliente.
				
				Antes de que se soliciten, a través de un mecanismo llamado server push.


			Al solicitar un archivo a través de HTTP.
		
				Los clientes deben proporcionar la URL del archivo. 
			 
			 
			El servidor web debe responder a cada solicitud HTTP.
				
				Al menos con un mensaje de error.
			 
		
		En un servidor web, el servidor HTTP es responsable de procesar y responder las solicitudes entrantes.			
			
						
			Al recibir una solicitud, un servidor HTTP comprueba si la URL solicitada coincide con un archivo existente
			
			
			Si es así, el servidor web envía el contenido del archivo al navegador.
				
				De lo contrario, el servidor comprobará si debe generar un archivo dinámicamente para la solicitud.
				
				(Contendio dinámico vs contenido estático)
		
		
			Si ninguna de estas opciones es posible
				
				El servidor web devuelve un mensaje de error al navegador.
				
				Normalmente 404 No encontrado.
				
				Puede ser tan frecuente que se crean diseños especiales para este error. 
				
				
	Contenido estático versus dinámico:
		
		Un servidor puede servir contenido estático o dinámico.
		
		
		Estático significa "servido tal como está".
		
		Los sitios web estáticos son los más fáciles de configurar. 
		
		
		Dinámico significa que el servidor procesa el contenido o incluso lo genera sobre la marcha a partir de una base de datos.
		
		Proporciona más flexibilidad, pero la pila técnica es más compleja

		Hace que crear un sitio web sea mucho más difícil.

		
		Es imposible sugerir un único servidor de aplicaciones disponible en el mercado que sea la solución adecuada para cada caso de uso posible.
		
		Algunos servidores de aplicaciones están diseñados para alojar y administrar blogs, wikis.
		
		Soluciones de comercio electrónico, mientras que otros son más genéricos.
		
		Si está creando un sitio web dinámico, tómese el tiempo para investigar sus requisitos y encontrar la tecnología que mejor se adapte a sus necesidades.

		
		La mayoría de los desarrolladores de sitios web no necesitarán crear un servidor de aplicaciones desde cero.
		
		Existen muchas soluciones disponibles en el mercado, muchas de las cuales son altamente configurables.
		
		Pero si necesita crear su propio servidor, entonces probablemente desee utilizar un framework de servidor.
		
		Aprovechando su código y bibliotecas existentes, y ampliando sólo las partes que necesita para cumplir con su caso de uso.
		
		Sólo un número relativamente pequeño de desarrolladores debería necesitar desarrollar un servidor completamente desde cero.
		
		Por ejemplo, para cumplir con las estrictas limitaciones de recursos en un sistema integrado.
		
		Si desea experimentar con la construcción de un servidor, puede seguir la ruta de aprendizaje de programación de sitios web del lado del servidor.
		
		

|| Software y Herramientas 

	Necesitamos un editor de texto para crear y editar las páginas web 
	
	Un programa para subir o transferir los archivos al servidor web. 
	
	Y un navegador o cliente para ver los sitios web. 
	
	
	Subir archivos a la web: 
	
		Cuando su sitio web esté listo para la visualización pública, deberá cargar sus páginas web en su servidor web.
			
		Puedes comprar espacio en un servidor, hay varios proveedores.
		
		Una vez que decida qué proveedor utilizar.
		
		Le enviará por correo electrónico la información de acceso, generalmente en forma de URL SFTP.
		
		Nombre de usuario, contraseña y otra información necesaria para conectarse a su servidor.
	
		(S)FTP ahora está algo anticuado y que otros sistemas de carga están empezando a popularizarse, como RSync y Git/GitHub.
		
		FTP es inherentemente inseguro.
		
		Debe asegurarse de que su proveedor de alojamiento permita el uso de una conexión segura.
		
		SFTP o RSync sobre SSH.
		
	
	Navegadores: 
		
		Cuando esté desarrollando un sitio web debe probarlo al menos con los siguientes navegadores principales
		
		Para asegurarse de que su sitio funcione para la mayoría de las personas.
		
			Mozilla Firefox
			
			Google Chrome
			
			Safari de Apple

		Algunos navegadores sólo se ejecutan en determinados sistemas operativos. 
		
		Lo mejor es aprovechar servicios como Browsershots o Browserstack.
		
		Browsershots proporciona capturas de pantalla de su sitio web tal como se verá en varios navegadores. 
		
		Browserstack te brinda acceso remoto completo a máquinas virtuales, para que puedas probar tu sitio en los entornos más comunes y en diferentes sistemas operativos.
		
		Alternativamente, puede configurar sus propias máquinas virtuales, pero eso requiere algo de experiencia
		
		Realice algunas pruebas en un dispositivo real, especialmente en dispositivos móviles reales.
		
		La simulación de dispositivos móviles es una tecnología nueva, en evolución y menos confiable que la simulación de escritorio.
		
		Con Open Device Lab puedes compartir dispositivos si quieres probar en muchas plataformas sin gastar demasiado



|| Subir Archivos a la web 

	Se puede publicar un sitio utilizando herramientas de transferencia de archivos.
	
	Si has creado un sitio podemos ponerlo en línea usando un servidor web.
	
	Hay varias opciones disponibles, como clientes SFTP, RSync y GitHub.
	
	
	SFTP:
	
		Existen varios clientes SFTP, como FileZilla.
		
		Al abrirlo, vemos que tenemos campos para conectarnos a nuestro servidor, el directorio local y remoto.
		
		
		Logging in:
			
			El proveedor de alojamiento es el servicio que alojará nuestro servidor web HTTP.
			
			Nos provee información para poder conectarnos al servidor. 
			
			Como nombre de la cuenta, dominio/nombre el sitio.
				
				Your account is: demozilla
				
				Your website will be visible at demozilla.examplehostingprovider.net
			
			Para publicar nuestro sitio en esta cuenta debemos debemos conectarnos a través del SFTP. 
			
			Nos proveen información para ello: 
									
				SFTP server: sftp://demozilla.examplehostingprovider.net
				Username: demozilla
				Password: quickbrownfox
				Port: 5548
				To publish on the web, put your files into the Public/htdocs directory.

			Al entrar a la dirección del sitio http://demozilla.examplehostingprovider.net/
			
			Vemos un directorio vacío.
			
			
			Hasta ahora solo vimos la información que nos proveyó la empresa de hosting. 
			
			No usamos el cliente SFTP. 
			
			Para conectar el cliente SFTP al servidor
			  
				1. Elija Archivo > Administrador del sitio… en el menú principal.
				
				2. En la ventana del Administrador del sitio, presione el botón Nuevo sitio
				
					luego complete el nombre del sitio como demozilla en el espacio provisto.

				3. Complete el servidor SFTP que su host le proporcionó en el campo Host:.

				4. En el menú desplegable Tipo de inicio de sesión
				
					elija Normal, luego complete el nombre de usuario y la contraseña proporcionados en los campos correspondientes
					
				    Complete el puerto correcto y otra información.
				    
				5. Presione Conectar para conectarse al servidor SFTP.


		Vista local y remota: 
			
			Una vez conectado deberiamos ver los dos directorio completos. 
			
			1. En el panel central izquierdo, verá sus archivos locales
				
				Navegue hasta el directorio donde almacena su sitio web
				
			2. En el panel central derecho, verá archivos remotos. 
				
				Vemos donde hemos iniciado sesión en nuestra raíz FTP distante (en este caso, usuarios/demozilla)

			3. Paneles superior e inferior
			
				Respectivamente, estos son un registro de mensajes.
				
				Muestran el estado de la conexión entre su computadora y el servidor SFTP
				
				Un registro en vivo de cada interacción entre su cliente SFTP y el servidor.
			
				
		Subir archivos al servidor: 
			
			En la información del proveedor nos da la dirección de un directorio público. 
			
			Este directorio es efectivamente la raíz de su sitio web
			
			Irán su archivo index.html y otros activos.
	
			Una vez encontrado el directorio remoto correcto para colocar sus archivos.
			
			Para cargarlos en el servidor, deberá arrastrarlos y soltarlos desde el panel izquierdo al panel derecho.
				
			Podemos ver los archivos en línea volviendo la la dirección web provista. 
			
			http://demozilla.examplehostingprovider.net/
			
		
	Rsync: 
	
		Es una herramienta de sincronización de archivos local a remota.
		
		Se considera una herramienta más avanzada que SFTP.
		
		De forma predeterminada, se utiliza en la línea de comandos.
		
		```
		rsync [-options] SOURCE user@x.x.x.x:DESTINATION

		```
		
		-options:
				
			por ejemplo -v para mensajes de error detallados
			
			-b para realizar copias de seguridad.
			
		SOURCE: 
			
			es la ruta al archivo o directorio local desde el que desea copiar los archivos.
		
		user@:
			
			son las credenciales del usuario en el servidor remoto al que desea copiar los archivos.
			
		x.x.x.x:
			
			es la dirección IP del servidor remoto.

		DESTINATION:
			
			es la ruta a la ubicación donde desea copiar su directorio o archivos en el servidor remoto.

		
		Después debemos copiar/sincronizar archivos entre servidores.
		
		
		Es buena idea utilizar una conexión segura.
		
		Debemos especificar detalles de SSH para realizar la conexión a través de SSH
		
		Usando la opción -e.
		
		```
		rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
		
		```
		
		Después copiar archivos con Rsync a través de SSH.
		
		
		Gui de Rsync: 
				
			Tendríamos que completar las credenciales en la interfaz de usuario. 
			
			
	GitHub:

		 Permite publicar sitios web a través de páginas de GitHub (gh-pages).
		
		 Puedes alojar un sitio web en GitHub, pero usando un dominio personalizado con él. 
		
	
	Métodos para subir archivos:
			
		El protocolo S(FTP) sirve para publicar un sitio web, pero no es el único. 
		
		Web interfaces:
			
			Una interfaz HTML que actúa como un front-end para subir archivos de forma remota. 
			
			Proporcionado por su servicio de hosting.

		WebDAV:
			
			Una extensión del protocolo HTTP para permitir una gestión de archivos más avanzada.
			
			
			
|| App Server 
	
	Puede encontrar en contextos similares son servidor de aplicaciones y servidor web.
	
	
	Servidor Web: 
		
		Es la tecnología que ofrece un sitio web a los usuarios cuando visitan una URL. 
		
		Desde el punto de vista técnico, lo que eso significa es que maneja el protocolo de transferencia de hipertexto (HTTP).
		
		Cuando un cliente (que suele ser un navegador o una aplicación móvil) consulta el servidor (visitando una URL o accediendo a la aplicación).
		
		El servidor web hace el trabajo de procesar esa solicitud y entregar la página web, o al menos la página web estática.
		
		
		Esto es todo lo que sucede en el backend cuando visitas un sitio web.
		
		Pero cuando se lanza un sitio web y necesita encontrar alojamiento para sitios web.
		
		Para la mayoría de los propietarios de sitios web tener su propio servidor web no es práctico.
		
		La potencia necesaria para almacenar todos los archivos que componen un sitio web y entregar el protocolo HTTP a los cientos o miles de visitantes.
		
		Está más allá de lo que la mayoría de las personas pueden manejar con sus propios recursos.
		
		El hardware físico que alimenta los servidores web es grande y sensible. 
		
		Incluso la mayoría de las oficinas no tienen buenas instalaciones para administrar bien un servidor web.
		
		Además del espacio involucrado, los servidores web también necesitan el cuidado adecuado. 
		
		Deben almacenarse en ambientes climatizados para evitar el sobrecalentamiento.
		
		Necesitan un mantenimiento regular por parte de profesionales cualificados para mantenerse en funcionamiento.
		
		Para que el alojamiento web que ofrecen se mantenga a salvo de los piratas informáticos.
		
		Deben estar equipados con los firewalls adecuados y otras medidas de seguridad que mantengan seguros los sitios web que administran.

		Las empresas de alojamiento web se encargan de todo eso y alquilan espacio en sus servidores por una tarifa mensual o anual.
		
		El alojamiento web funciona cuando cada sitio web que visita en línea reside en un servidor web en algún lugar que hace el trabajo de entregar cada página web que ve en su navegador. 
		
		Esos servidores web hacen su trabajo en segundo plano, lejos de las personas que ejecutan los sitios web y de las personas que los ven.
		
	
	App Server: 
		
		Es el servidor de software en el que se ejecutan tanto las aplicaciones web como las aplicaciones de escritorio.

		Los servidores de aplicaciones alojan lo que se llama lógica empresarial.
		
		Es el código que proporciona la funcionalidad necesaria para crear y ejecutar contenido dinámico.
		
		Un servidor de aplicaciones es esencialmente el framework que permite a los programas y sitios web crear y ofrecer contenido dinámico.
		
		Se utiliza para sitios web que incluyen características dinámicas.
		
		(características que cambian según parámetros específicos, como dónde se encuentra geográficamente el visitante o si un artículo está actualmente en stock).
		
		Pero no se utiliza exclusivamente para sitios web.
		
		Los servidores de aplicaciones también se pueden utilizar para otros tipos de plataformas y aplicaciones, particularmente a nivel empresarial.
		
		El contenido dinámico hace un uso más eficiente de los recursos, al no tener que recargar la página y al almacenar datos localmente logra ahorrar datos. 
		
		
		Mobile app server: 
			
			A medida que aumenta el uso de dispositivos móviles, los servidores de aplicaciones móviles son ahora un subconjunto cada vez mayor de servidores de aplicaciones
			
			Funcionan de manera similar a otros servidores, pero para aplicaciones móviles.
		
			Básicamente, sirven como componente intermedio entre el sistema backend y los dispositivos móviles.
			
			Asegurándose de que los diferentes componentes de una aplicación o página web se muestren adecuadamente en un dispositivo móvil.

			
			Dado que los dispositivos móviles tienen ciertas características y limitaciones.
			
			Los servidores de aplicaciones móviles a menudo tienen que hacer el trabajo de garantizar que la versión móvil de un programa o sitio web funcione bien.
			
			A pesar de la conectividad, potencia y ancho de banda limitados que son normales en los dispositivos móviles.
			
			Para la tecnología móvil utilizada por las empresas, los servidores de aplicaciones móviles contienen el software que proporciona acceso a través de tipos de dispositivos y procesa elementos importantes de ese acceso, como autenticación, funciones de seguridad y actualizaciones.
		
		
		Los servidores de aplicaciones y los servidores web son diferentes: 
		 
			Ofrecen funciones similares y tienen mucho en común en cuanto a la función que desempeñan, pero tienen diferencias. 
			
			
		Los servidores de aplicaciones funcionan con más que solo el protocolo http:
			
			Los servidores web tienen básicamente una función principal: procesan solicitudes HTTP para mostrar sitios web.
			
			Los servidores de aplicaciones a menudo también tienen esta capacidad, pero van más allá y brindan funciones adicionales.
			
			Funcionan tanto con sitios web como con otros tipos de programas y pueden agregar una capa de adaptabilidad a la información que brindan.
		
		
		Los servidores web brindan contenido estático:
		
			Los servidores web por sí solos brindan páginas web estáticas a los navegadores.
			
			Si bien puede visitar un sitio web que incluye componentes adaptativos, estos funcionan con tecnología adicional más allá del servidor web en sí.
			
			La parte que proporciona el servidor web cuando escribe una URL en un navegador es la misma independientemente del lugar donde se encuentre una persona, el dispositivo que esté usando o cualquier otro factor que pueda influir en lo que ve.
			
			
		Los servidores de aplicaciones pueden habilitar funciones adicionales:
			
			Los sitios web y las aplicaciones que usan servidores de aplicaciones a menudo necesitan brindar funciones que van más allá de la funcionalidad estática que brindan los servidores web. 
			
			Pueden habilitar funciones como transacciones, personalización y servicios de mensajería.
			
			No se trata de elegir entre los dos o decidir cuál es mejor. La mayoría de las veces, son un paquete completo.

		
		Los servidores web y los servidores de aplicaciones suelen trabajar en conjunto:
			
			Aunque muchos servidores de aplicaciones incluyen un servidor web, los servidores de aplicaciones se utilizan más comúnmente junto con los servidores web.
			
			Puede obtener resultados más rápidos y mejores si tiene un servidor web que se encarga de la parte estática de ofrecer un sitio web y un servidor de aplicaciones que se encarga de las funciones dinámicas.
			
			Los servidores web pueden gestionar el almacenamiento en caché y las solicitudes simples que no requieren mucho ancho de banda.
			
			Lo que permite que el servidor de aplicaciones ejerza su poder solo en las solicitudes más complejas que lo requieren.

			De esa manera, las solicitudes web simples no sobrecargan ni ralentizan el servidor de aplicaciones y ambas partes de la solución general hacen mejor su trabajo.
			
			Los desarrolladores pueden asegurarse de que un sitio web sepa cómo reconocer qué solicitudes solo requieren el servidor web.
			
			Y pueden incorporar una técnica de filtrado para identificar solicitudes de contenido dinámico y reenviarlas automáticamente al servidor de aplicaciones

			Al trabajar juntos, los dos tipos de tecnología brindan mejores resultados en general.
			
		
		Características en común:
			
			Los servidores web y los servidores de aplicaciones son más parecidos que diferentes al final del día. 
			
			Ambos sirven como middleware o puente entre los sistemas de respaldo que mantienen en funcionamiento un sitio web y lo que el usuario ve cuando accede a él.
			
			Ayudan a traducir el aspecto técnico de las cosas en algo con lo que los diseñadores web y los usuarios web cotidianos pueden interactuar de una manera intuitiva y útil.
			
		
		En la práctica, lo que necesita es un proveedor de alojamiento web confiable que se encargue de los servidores web por usted y proporcione compatibilidad con cualquier aplicación que use para brindarle toda la funcionalidad que necesita a su sitio web.
		
		Un buen proveedor de alojamiento web tendrá el ancho de banda y las funciones adecuadas para satisfacer todas las necesidades de su sitio web estático y dinámico.
		
		No tendrá que preocuparse por lo que sucede en el backend, simplemente podrá disfrutar de los resultados para su sitio web y sus visitantes.
		
		Ni siquiera tendrá que pensar en ello durante el proceso de diseño, especialmente si utiliza un creador de sitios web que lo haga más fácil.
		
		Encontrar un buen proveedor de alojamiento web que se encargue de todos los aspectos complicados de preocuparse por los servidores y las aplicaciones web.
		
			
		Asegurarse de que su sitio web esté siempre activo y disponible para sus visitantes.
			
			Los servidores web deben desconectarse ocasionalmente por mantenimiento. 
			
			Pero las empresas deben aseguran de que esos momentos sean tan poco frecuentes que apenas se note.
				
			Las empresas deben evitar mantenimiento insuficiente, reparaciones, fallos de hardware, ataques de piratas informáticos o problemas climáticos como la inundación del almacén del servidor. 
		
		
		Facilidad de uso: 
			
			Con un proveedor de alojamiento web intuitivo, solo necesita saber cómo iniciar sesión en su cuenta y cubrir los aspectos básicos:
			
				administrar nombres de dominio, configurar redirecciones y mantener su facturación actualizada.	
			
			Si va a utilizar un sistema de gestión de contenido (CMS) popular u otra aplicación para crear su sitio web, entonces también querrá un plan de alojamiento web que facilite la instalación y proporcione compatibilidad.

		
		Servicio técnico 24/7:
		
			Ofrecerá asistencia al cliente para ayudarle a resolver una serie de problemas relacionados con la creación y el funcionamiento de su sitio web.
			
		
		Seguridad:
			
			Los ataques a sitios web son muy comunes en el mundo moderno.
			
			Y si su sitio web recopila información personal de los visitantes, el riesgo es mucho más grave.
			
			Una empresa debe mantener seguros sus servidores web.
			
			Configure firewalls para mantener alejados a los piratas informáticos.

			Busque funciones adicionales o complementos como un certificado SSL o software de seguridad.
			
			
			
|| Guia
	
	Para usar lenguajes del lado de servidor como NodeJs o Python. 
	
	Debemos interactuar con sus frameworks, Express o Django. 
	
	
	1. Introducción a la programación del lado del servidor
	
		Proporciona información independiente de la tecnología sobre la programación de sitios web del lado del servidor
		
		Información sobre qué es el lado del servidor, en qué se diferencia de la programación del lado del cliente y por qué es útil. 
	
		Describe algunos de los frameworks del lado del servidor.
		
		Brinda orientación sobre cómo seleccionar el mejor para su sitio.  
		
		Proporciona una introducción a la seguridad del servidor web.
	
	
	2. Django framework (Python):
		
		Características de Django, qué lo hace tan bueno. 
		
		Configurar un entorno de desarrollo y cómo realizar tareas comunes con él.

	
	3. Express framework (Node.js/JavaScript)
	
		Alojado en el entorno de ejecución de Node.js.
	
		Beneficios claves de él, cómo configurar su entorno de desarrollo.
		
		Cómo realizar tareas comunes de desarrollo e implementación web.



|| Introducción a la programación del lado del servidor
	
	
	La mayoría de los sitios web a gran escala utilizan código del lado del servidor.
	
	Para mostrar dinámicamente diferentes datos cuando es necesario.
	
	Generalmente extraídos de una base de datos almacenada en un servidor.
	
	Enviados al cliente para que los muestre mediante algún código (por ejemplo, HTML y JavaScript).

	
	Quizás el beneficio más significativo del código del lado del servidor es que le permite personalizar el contenido del sitio web para usuarios individuales.
	
	Los sitios dinámicos pueden resaltar contenido que es más relevante según las preferencias y hábitos del usuario.
	
	También puede hacer que los sitios sean más fáciles de usar al almacenar información y preferencias personales.
	
	Por ejemplo, reutilizar los datos de tarjetas de crédito almacenados para agilizar pagos posteriores.
	
	
	Incluso puede permitir la interacción con los usuarios del sitio.
	
	Enviando notificaciones y actualizaciones vía correo electrónico o mediante otros canales.
	
	Todas estas capacidades permiten un compromiso mucho más profundo con los usuarios.

	
	Programación server-side:
		
		Los navegadores web se comunican con los servidores web mediante el Protocolo de transferencia de hipertexto (HTTP).
		
		Cuando hace clic en un enlace en una página web, envía un formulario o ejecuta una búsqueda.
		
		Se envía una solicitud HTTP desde su navegador al servidor de destino.

		
		La solicitud incluye una URL que identifica el recurso afectado. 
		
		Un método que define la acción requerida (por ejemplo, obtener, eliminar o publicar el recurso).
		
		Puede incluir información adicional codificada en parámetros de URL.
		
		(los pares de campo-valor enviados a través de una consulta string -query string-).
		
		Como datos POST (datos enviados por el método HTTP POST), o en cookies asociadas.
		
		
		Los servidores web esperan los mensajes de solicitud del cliente.
		
		Los procesan cuando llegan y responden al navegador web con un mensaje de respuesta HTTP.
		
		La respuesta contiene una línea de estado que indica si la solicitud se realizó correctamente o no.
		
		(por ejemplo, "HTTP/1.1 200 OK" si se realizó correctamente).

		
		El cuerpo de una respuesta exitosa a una solicitud contendría el recurso solicitado.
		
		(por ejemplo, una nueva página HTML o una imagen).
		
		Que luego podría mostrarse en el navegador web.
		
		
	Sitios estáticos: 
	
		Diagrama: 
			
			Arquitectura de servidor web básica para un sitio estático. 
			
			(un sitio estático es aquel que devuelve el mismo contenido codificado desde el servidor cada vez que se solicita un recurso en particular).
		
			Cuando un usuario quiere navegar a una página.
			
			El navegador envía una solicitud HTTP "GET" especificando su URL.


			El servidor recupera el documento solicitado de su sistema de archivos.
			
			Devuelve una respuesta HTTP que contiene el documento y un estado de éxito (normalmente 200 OK).
			
			Si el archivo no se puede recuperar por algún motivo.
			
			Se devuelve un estado de error.
			
			(respuestas de error del cliente y respuestas de error del servidor).
			
			
			Server-side					    Client-side
			
			Files -> Web Server <- HTTP Request - Navegador
				
			  Pre-created:      -> HTTP Response ->
				HTML
				CSS
				JS 
				Assets
		
		
	Sitios dinámicos: 	
		
		Parte del contenido de respuesta se genera dinámicament, sólo cuando es necesario. 
		
		las páginas HTML normalmente se crean insertando datos de una base de datos en marcadores de posición en plantillas HTML.
		
		(esta es una forma mucho más eficiente de almacenar grandes cantidades de contenido que usar sitios web estáticos).

		Un sitio dinámico puede devolver datos diferentes para una URL según la información proporcionada por el usuario o las preferencias almacenadas.
		
		Puede realizar otras operaciones como parte de devolver una respuesta (por ejemplo, enviar notificaciones).


		La mayor parte del código para admitir un sitio web dinámico debe ejecutarse en el servidor.

		La creación de este código se conoce como "programación del lado del servidor" (o, a veces, "scripting de back-end").

		
		Diagrama: 
			
			Arquitectura simple para un sitio web dinámico.
			
			Como en la arquitectura anterior los navegadores envían solicitudes HTTP al servidor. 
			
			Luego el servidor procesa las solicitudes y devuelve respuestas HTTP apropiadas.

			
			Las solicitudes de recursos estáticos se manejan de la misma manera que las de los sitios estáticos.
			
			(los recursos estáticos son cualquier archivo que no cambia, generalmente: CSS, JavaScript, imágenes, archivos PDF creados previamente, etc.).
		
		
			Server-side					(1)   Client-side
			
			Files -> Web Server <- HTTP Get Request - Navegador
				
			  Static resources: -> HTTP Response -> (6) HTML/CSS/JS
				HTML
				CSS
				JS 
				Assets
			
			  from web server: (2) 
			  
			  Request data: 
			    URL encoding 
			    GET/POST data 
			    Cookies         --> Web APP
			                                 HTML --> Web Server 
			  from files                      (4)         (5)
			                    -->           
			    HTML Templates 
			  
			Database <-> Web APP
					
					data (3)
	
			
			Las solicitudes de recursos dinámicos se reenvían (2)
			
			Al al código del lado del servidor (que se muestra en el diagrama como una aplicación web).
			
			Para las "solicitudes dinámicas", el servidor interpreta la solicitud.
			
			Lee la información requerida de la base de datos (3).
			
			Combina los datos recuperados con plantillas HTML (4).
			
			Envía una respuesta que contiene el HTML generado (5,6).

	
	Server-side y Client-side: 
		
		El código involucrado en la programación del lado del servidor y del lado del cliente.

		En cada caso, el código es significativamente diferente:
			
			Tienen diferentes propósitos y preocupaciones.
			
			Por lo general, no utilizan los mismos lenguajes de programación
			
				(la excepción es JavaScript, que se puede utilizar en el lado del servidor y del cliente).

			Se ejecutan dentro de diferentes entornos de sistemas operativos.

		
		El código que se ejecuta en el navegador se conoce como código del lado del cliente
		
		Se ocupa principalmente de mejorar la apariencia y el comportamiento de una página web representada.
		
		Esto incluye seleccionar y diseñar componentes de la interfaz de usuario.
		
		Crear diseños, navegación, validación de formularios, etc.
		
		La programación de sitios web del lado del servidor implica principalmente elegir qué contenido se devuelve al navegador en respuesta a las solicitudes.

		Maneja tareas como validar los datos y solicitudes enviados, usar bases de datos para almacenar y recuperar datos y enviar los datos correctos al cliente según sea necesario.
		
		
		El código del lado del cliente se escribe utilizando HTML, CSS y JavaScript. 
		
		Se ejecuta dentro de un navegador web y tiene poco o ningún acceso al sistema operativo subyacente.
		 
		(incluido el acceso limitado al sistema de archivos).

		
		Los desarrolladores web no pueden controlar qué navegador podría usar cada usuario para ver un sitio web.
		
		Los navegadores proporcionan niveles inconsistentes de compatibilidad con las características del código del lado del cliente.
		
		Parte del desafío de la programación del lado del cliente es manejar con elegancia las diferencias en la compatibilidad del navegador.
		
		
		El código del lado del servidor se puede escribir en cualquier cantidad de lenguajes de programación.
		
		Como PHP, Python, Ruby, C# y JavaScript (NodeJS).
		
		El código del lado del servidor tiene acceso completo al sistema operativo del servidor.
		
		El desarrollador puede elegir qué lenguaje de programación (y versión específica) desea utilizar.
		
		
		Los desarrolladores suelen escribir su código utilizando frameworks web. 
		
		Los frameworks son colecciones de funciones, objetos, reglas y otras construcciones de código.
		
		Diseñadas para resolver problemas comunes, acelerar el desarrollo y simplificar los diferentes tipos de tareas que se enfrentan en un dominio particular.

		
		Si bien tanto el código del lado del cliente como del servidor utilizan frameworks. 
		
		Los dominios son muy diferentes y, por lo tanto, también lo son los frameworks. 
		
		Los frameworks del lado del cliente simplifican las tareas de diseño y presentación.
		
		Los frameworks del lado del servidor proporcionan muchas funciones de servidor web "comunes".
		
		Que que, de otro modo, tendría que implementar usted mismo. 
		
		Por ejemplo, soporte para sesiones, soporte para usuarios y autenticación.
		
		Acceso a la base de datos, bibliotecas de plantillas, etc.
		
		
		Los frameworks del lado del cliente se utilizan a menudo para ayudar a acelerar el desarrollo del código del lado del cliente.
		
		Pero también puede optar por escribir todo el código a mano.
		
		Puede ser más rápido y eficiente si solo necesita una interfaz de usuario de sitio web pequeña y sencilla.
		
		
		Por el contrario, casi nunca considerarías escribir el componente del lado del servidor de una aplicación web sin un framework. 
		
		Implementar una característica vital como un servidor HTTP es realmente difícil de hacer desde cero en Python, por ejemplo.
		
		Los framework web de Python como Django proporcionan uno, out of the box, junto con otras herramientas muy útiles.
		
	
	Funcionalidades del lado del servidor: 
		
		La programación del lado del servidor es muy útil.
		
		Nos permite entregar de manera eficiente información personalizada para usuarios individuales.
		
		Así crear una experiencia de usuario mucho mejor.
		
		
		Se puede utilizar para para crear resultados de búsqueda de productos. 
		
		Hacer sugerencias de productos específicas basadas en las preferencias del cliente.
		
		Hábitos de compra anteriores, simplificar las compras, etc.
		
		
		Los bancos utilizan programación del lado del servidor para almacenar información de la cuenta.
		
		Permitir que sólo los usuarios autorizados vean y realicen transacciones.
	
		Servicios como Facebook, Twitter, Instagram y Wikipedia utilizan programación del lado del servidor.
		
		Para resaltar, compartir y controlar el acceso a contenido interesante.


	Beneficios de la programación del lado del servidor: 
		
	
	Almacenamiento y entrega eficiente de información:
	
		La programación del lado del servidor nos permite almacenar la información en una base de datos.
		
		Construir y devolver dinámicamente HTML y otros tipos de archivos (por ejemplo, PDF, imágenes, etc.). 
		
		También es posible devolver datos (JSON, XML, etc.) para representarlos mediante frameworks del lado del cliente adecuados. 
		
		(esto reduce la carga de procesamiento en el servidor y la cantidad de datos que deben enviarse).

		
		El servidor no se limita a enviar información desde bases de datos.
		
		Alternativamente, puede devolver el resultado de herramientas de software o datos de servicios de comunicaciones.
		
		El contenido puede incluso orientarse según el tipo de dispositivo cliente que lo recibe.
		 
		
		Debido a que la información está en una base de datos.
		
		También se puede compartir y actualizar más fácilmente con otros sistemas comerciales.
		
		Por ejemplo, cuando los productos se venden en línea o en una tienda.
		
		La tienda puede actualizar su base de datos de inventario.
		
		
		Al usar un sitio dinámico y buscar varias palabras clave y observe cómo la estructura de la página no cambia, aunque los resultados sí lo hacen.
		
		Tienen una estructura y un diseño común, pero el contenido de diferentes productos se ha extraído de la base de datos.

		Al buscar un termino, puede ver literalmente millones de valores devueltos.
		
		El uso de una base de datos permite almacenarlos y compartirlos de manera eficiente.
		
		Permite controlar la presentación de la información en un solo lugar.
		
	
	Experiencia de usuario personalizada:
	
		Los servidores pueden almacenar y utilizar información sobre los clientes.
		
		Para proporcionar una experiencia de usuario cómoda y personalizada.
		
		Muchos sitios almacenan tarjetas de crédito para que no sea necesario volver a ingresar los detalles.
		
		Sitios como Google Maps pueden usar ubicaciones guardadas o actuales.
		
		Para proporcionar información de rutas y un historial de búsqueda o de viajes para resaltar las empresas locales en los resultados de búsqueda.

		Se puede utilizar un análisis más profundo de los hábitos de los usuarios.
		
		Para anticipar sus intereses y personalizar aún más las respuestas y notificaciones.
		
		Proporcionando una lista de ubicaciones populares o visitadas anteriormente que quizás desee ver en un mapa.
		
		
	Acceso controlado al contenido:
		
		La programación del lado del servidor permite a los sitios restringir el acceso a usuarios autorizados.
		
		Ofrecer sólo la información que un usuario puede ver.

		Los sitios de redes sociales que permiten a los usuarios determinar quién puede ver el contenido que publican en el sitio y qué contenido aparece en su feed.

	
	Almacenar información de sesión/estado:
	
		La programación del lado del servidor permite a los desarrolladores utilizar sesiones.
		
		Un mecanismo que permite a un servidor almacenar información asociada con el usuario actual de un sitio y enviar diferentes respuestas basadas en esa información.
		
		Permite, por ejemplo, que un sitio sepa que un usuario ha iniciado sesión previamente.
		
		Mostrar enlaces a sus correos electrónicos o historial de pedidos, o tal vez guardar el estado de un juego simple.
		
		Para que el usuario pueda ir a un sitio nuevamente y continuar donde lo dejaron.
		
		Cuando visita un sitio que tiene un programa de suscripción, solo puede ver el contenido de forma gratuita por poco tiempo/intento, después no podrá acceder a los artículos. 
		
		Esta información es un ejemplo de información de sesión almacenada en cookies. 
		
	
	Notificaciones y comunicación:
		
		Los servidores pueden enviar notificaciones generales o específicas del usuario.
		
		A través del propio sitio web o mediante correo electrónico, SMS, mensajería instantánea, conversaciones de vídeo u otros servicios de comunicación.

		Facebook y Twitter envían correos electrónicos y mensajes SMS para notificarle sobre nuevas comunicaciones.
		
		Amazon envía periódicamente correos electrónicos de productos que sugieren productos similares a los que ya compró o vio y que podrían interesarle.
		
		Un servidor web puede enviar mensajes de advertencia a los administradores del sitio alertándoles sobre poca memoria en el servidor o actividad sospechosa del usuario.
		 
		 
		El tipo de notificación más común es la "confirmación de registro".
		
		En breve recibirá un correo electrónico confirmando su registro o solicitando un acuse de recibo para activar su cuenta.
		
		
	Análisis de datos:
		
		Un sitio web puede recopilar muchos datos sobre los usuarios.
		
		Qué buscan, qué compran, qué recomiendan, cuánto tiempo permanecen en cada página.
		
		La programación del lado del servidor se puede utilizar para refinar las respuestas basadas en el análisis de estos datos.
		
		
		Amazon y Google anuncian productos basándose en búsquedas (y compras) anteriores.
		
	
	El código del lado del servidor se ejecuta en un servidor web.
	
	Su función principal es controlar qué información se envía al usuario.
	
	Mientras que el código del lado del cliente maneja principalmente la estructura y presentación de esos datos al usuario.
	
	
	Programar el lado del servidor es útil porque nos permite crear sitios web que entregan de manera eficiente información personalizada para usuarios individuales.
	
	Se puede escribir en varios lenguajes de programación.
	
	Se debe utilizar un framework web para facilitar todo el proceso.



|| Características del lado del Servidor

	Qué sucede cuando un servidor recibe una "solicitud dinámica" de un navegador.
	
	La mayoría del código del lado del servidor de un sitio web maneja solicitudes y respuestas de manera similar.
	
	Esto le ayudará a comprender lo que debe hacer al escribir la mayor parte de su propio código.
	
	El comportamiento descrito debe implementarse mediante el código del lado del servidor.
	
	Independientemente del lenguaje de programación o framework web que seleccione.
	
	
	Introducción a Servidores web y HTTP: 
		
		Los navegadores web se comunican con los servidores web
		
		Mediante el Protocolo de transferencia de hipertexto (HTTP). 
		
		Cuando hace clic en un enlace en una página web envía, un formulario o ejecuta una búsqueda.
		
		El navegador envía una solicitud HTTP al servidor.

		
		Una solicitud Incluye: 
			
			
			1. Una URL:
				
				Identifica el servidor y el recurso de destino.
				
				Por ejemplo, un archivo HTML, un punto de datos particular en el servidor o una herramienta para ejecutar.
				
				
			2. Un método:
				
				Define la acción requerida/solicitada.
				
				Obtener un archivo o guardar o actualizar algunos datos.
				
				Los diferentes métodos/verbos y sus acciones asociadas se enumeran a continuación:
				
				
				GET: 
					
					Obtener un recurso específico.
					
					Por ejemplo, un archivo HTML que contiene información sobre un producto o una lista de productos.
				
				
				POST: 
					
					Crear un nuevo recurso.
					
					Ej. Agregar un nuevo artículo a una wiki
					
					agregar un nuevo contacto a una base de datos.
				
				
				HEAD:
					
					Obtiene la información de metadatos sobre un recurso específico.
					
					Sin obtener el cuerpo como lo haría GET.
					
					Podría usar una solicitud HEAD para averiguar la última vez que se actualizó un recurso.
					
					Luego usar solo la solicitud GET (más "cara") para descargar el recurso si ha cambiado.
					
					
				PUT: 
					
					Actualiza un recurso existente (o crea uno nuevo si no existe).

				
				DELETE: 
					
					Elimina el recurso especificado.


				TRACE, OPTIONS, CONNECT, PATCH: 
					
					Estos verbos son para tareas menos comunes/avanzadas.
					
				
			3. Información adicional: 
				
				Se puede codificar información adicional con la solicitud.
				
				Por ejemplo, datos de formulario HTML.
				
				La información se puede codificar como:

				
				Parámetros de URL: 
					
					las solicitudes GET codifican datos en la URL enviada al servidor agregando pares de nombre/valor al final de la misma.
					
					Por ejemplo http://example.com?name=Fred&age=11. 
					
					(a) Siempre tiene un signo de interrogación (?).
					
					Que separa el resto de la URL de los parámetros de la URL.
					 
					(b) Un signo igual (=) que separa cada nombre de su valor asociado.
					
					(c) un signo ampersand (&) que separa cada par.
					
					Los parámetros de URL son inherentemente "inseguros".
					
					Ya que los usuarios pueden cambiarlos y luego volver a enviarlos.
					
					Como resultado, los parámetros de URL/solicitudes GET no se utilizan para solicitudes que actualizan datos en el servidor.

				
				POST data: 
					
					Las solicitudes POST agregan nuevos recursos.
					
					Cuyos datos están codificados dentro del cuerpo de la solicitud.
					
				
				Cookies del lado del cliente: 
					
					Contienen datos de sesión sobre el cliente.
					
					Incluidas claves que el servidor puede utilizar para determinar su estado de inicio de sesión y permisos/accesos a recursos.
		
		
		Los servidores web esperan los mensajes de solicitud del cliente
		
		Los procesan cuando llegan.
		
		Responden al navegador web con un mensaje de respuesta HTTP.
					
		La respuesta contiene un código de estado de respuesta HTTP.
		
		Indica si la solicitud tuvo éxito o no.
		
		Por ejemplo, 200 OK para éxito, 404 No encontrado si no se puede encontrar el recurso.
		
		403 Prohibido si el usuario no está autorizado a ver el recurso, etc.
		
		El cuerpo de la respuesta a una solicitud GET exitosa.
		
		Contiene el recurso solicitado.

		
		Cuando se devuelve una página HTML, el navegador web la representa.
	
		El navegador puede descubrir enlaces a otros recursos.
		
		Por ejemplo, una página HTML generalmente hace referencia a archivos JavaScript y CSS.
		
		Enviará solicitudes HTTP separadas para descargar estos archivos.

		
		Tanto los sitios web estáticos como los dinámicos.
		
		Utilizan exactamente el mismo protocolo/patrones de comunicación.
		
		
	GET request/response:
		
		Puede realizar una solicitud GET simple haciendo clic en un enlace o buscando en un sitio.
		
		Ej. Como la página de inicio de un motor de búsqueda.
		
		Nos encontraremos con información no idéntica porque partes del mensaje dependen de su navegador/ configuración
		
		El formato de los mensajes HTTP se define en un "estándar web" (RFC9110).
		
		
		Request: 
				
			Cada línea de la solicitud contiene información al respecto
			
			La primera parte se llama Header. 
			
			Contiene información útil sobre la solicitud
			
			De la misma manera que un encabezado HTML contiene información útil sobre un documento HTML.
			
			No del contenido en sí, que está en el cuerpo
			
			```
			GET /en-US/search?q=client+server+overview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev HTTP/1.1
			Host: developer.mozilla.org
			Connection: keep-alive
			Pragma: no-cache
			Cache-Control: no-cache
			Upgrade-Insecure-Requests: 1
			User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
			Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
			Referer: https://developer.mozilla.org/en-US/
			Accept-Encoding: gzip, deflate, sdch, br
			Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7
			Accept-Language: en-US,en;q=0.8,es;q=0.6
			Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _gat=1; _ga=GA1.2.1688886003.1471911953; ffo=true

			```
			
			La primera y segunda línea contienen la mayor parte de la información de la que hablamos anteriormente
			
				El tipo de solicitud (GET).
				
				La URL del recurso de destino (/en-US/search).
				
				Los parámetros de URL (q=client%2Bserver%2Boverview...)
				
				El sitio web de destino/host (developer.mozilla.org).
				
			El final de la primera línea también incluye una cadena corta que identifica la versión del protocolo específico (HTTP/1.1).

			La última línea contiene información sobre las cookies del lado del cliente.
			
			En este caso, puede ver que la cookie incluye una identificación para administrar sesiones (Cookie: sessionid=6ynxs23n5...).
			
			Las líneas restantes contienen información sobre el navegador.		
			
			El tipo de respuestas que puede manejar:
				
				Navegador (User-Agent) es Mozilla Firefox (Mozilla/5.0).
				
				Puede aceptar información comprimida con gzip (Accept-Encoding: gzip).

				Puede aceptar el conjunto de caracteres especificado (Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7) e idiomas (Accept-Language: en-US,en;q=0.8, es;q=0,6).
				
				La línea de referencia indica la dirección de la página web que contenía el enlace a este recurso
			
				Es decir, el origen de la solicitud, https://developer.mozilla.org/en-US/

			
			Las solicitudes HTTP también pueden tener un body
			
			Pero está vacío en este caso. 
			
		
		Response: 
			
			La primera parte de la respuesta a esta solicitud se muestra a continuación.
			
			El Header contiene información como: 
			
				La primera línea incluye el código de respuesta 200 OK, indica que la solicitud se realizó correctamente.

				Podemos ver que la respuesta tiene formato texto/html (Tipo de contenido).

				También podemos ver que utiliza el juego de caracteres UTF-8 (Content-Type: text/html; charset=utf-8).
				
				El head también nos dice qué tan grande es (Content-Length: 41823).
			
			Al final del mensaje vemos el contenido del body. 
			
			Contiene el HTML real devuelto por la solicitud.
			
			```
			HTTP/1.1 200 OK
			Server: Apache
			X-Backend-Server: developer1.webapp.scl3.mozilla.com
			Vary: Accept, Cookie, Accept-Encoding
			Content-Type: text/html; charset=utf-8
			Date: Wed, 07 Sep 2016 00:11:31 GMT
			Keep-Alive: timeout=5, max=999
			Connection: Keep-Alive
			X-Frame-Options: DENY
			Allow: GET
			X-Cache-Info: caching
			Content-Length: 41823

			<!doctype html>
			<html lang="en-US" dir="ltr" class="redesign no-js"  data-ffo-opensanslight=false data-ffo-opensans=false >
			<head prefix="og: http://ogp.me/ns#">
			  <meta charset="utf-8">
			  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
			  <script>(function(d) { d.className = d.className.replace(/\bno-js/, ''); })(document.documentElement);</script>
			  …
		
			```

			El resto del head de respuesta incluye información sobre la respuesta (por ejemplo, cuándo se generó). 
			
			El servidor y cómo espera que el navegador maneje la página página para ser incrustada en un <iframe> en otro sitio).		
			
			(por ejemplo, la línea X-Frame-Options: DENY le dice al navegador que no permita esto). 
			 		
		
	POST request/response:
	
		Se realiza una POST HTTP cuando envía un formulario que contiene información que se guardará en el servidor.
		
		
		Request: 
			
			El texto siguiente muestra la solicitud HTTP realizada
			
			Cuando un usuario envía nuevos detalles de perfil en este sitio.
			
			El formato de la solicitud es casi el mismo que el del ejemplo de solicitud GET anterior. 
			
			Aunque la primera línea identifica esta solicitud como POST.
			
			```
			POST /en-US/profiles/hamishwillee/edit HTTP/1.1
			Host: developer.mozilla.org
			Connection: keep-alive
			Content-Length: 432
			Pragma: no-cache
			Cache-Control: no-cache
			Origin: https://developer.mozilla.org
			Upgrade-Insecure-Requests: 1
			User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
			Content-Type: application/x-www-form-urlencoded
			Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
			Referer: https://developer.mozilla.org/en-US/profiles/hamishwillee/edit
			Accept-Encoding: gzip, deflate, br
			Accept-Language: en-US,en;q=0.8,es;q=0.6
			Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; _gat=1; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _ga=GA1.2.1688886003.1471911953; ffo=true

			csrfmiddlewaretoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT&user-username=hamishwillee&user-fullname=Hamish+Willee&user-title=&user-organization=&user-location=Australia&user-locale=en-US&user-timezone=Australia%2FMelbourne&user-irc_nickname=&user-interests=&user-expertise=&user-twitter_url=&user-stackoverflow_url=&user-linkedin_url=&user-mozillians_url=&user-facebook_url=
			
			```
			
			La principal diferencia es que la URL no tiene ningún parámetro
			
			La información del formulario está codificada en el body de la solicitud
			
			Por ejemplo, el nombre completo del nuevo usuario se establece usando
			
			&user-fullname=Hamish+Willee
			
		
		Response: 
			
			La respuesta a la solicitud se muestra a continuación
			
			El código de estado de 302 Encontrado
			
			Le dice al navegador que la publicación se realizó correctamente 
			
			Debe emitir una segunda solicitud HTTP para cargar la página especificada en el campo Ubicación.
			
			Por lo demás, la información es similar a la de la respuesta a una solicitud GET.
			
			```
			HTTP/1.1 302 FOUND
			Server: Apache
			X-Backend-Server: developer3.webapp.scl3.mozilla.com
			Vary: Cookie
			Vary: Accept-Encoding
			Content-Type: text/html; charset=utf-8
			Date: Wed, 07 Sep 2016 00:38:13 GMT
			Location: https://developer.mozilla.org/en-US/profiles/hamishwillee
			Keep-Alive: timeout=5, max=1000
			Connection: Keep-Alive
			X-Frame-Options: DENY
			X-Cache-Info: not cacheable; request wasn't a GET or HEAD
			Content-Length: 0
		
			```
			
		Las respuestas y solicitudes HTTP que se muestran en estos ejemplos se capturaron utilizando la aplicación Fiddler
		
		Pero puede obtener información similar utilizando rastreadores web (por ejemplo, WebSniffer).
		
		Analizadores de paquetes como Wireshark.

		Utilice cualquiera de las herramientas vinculadas
		
		Luego navegue por un sitio y edite la información del perfil para ver las diferentes solicitudes y respuestas.
		
		La mayoría de los navegadores modernos también tienen herramientas que monitorean las solicitudes de red.
		 
		Por ejemplo, la herramienta Network Monitor en Firefox.
		
	
	Sitios estáticos: 
		
		Es aquel que devuelve el mismo contenido codificado desde el servidor.
		
		Cada vez que se solicita un recurso en particular. 
		
		Por ejemplo, si tiene una página sobre un producto en /static/myproduct1.html, esta misma página será devuelta a todos los usuarios.
		
		Si agrega otro producto similar a su sitio, deberá agregar otra página (por ejemplo, miproducto2.html), y así sucesivamente.
		
		
		Esto puede empezar a volverse realmente ineficiente
		
		Cuando llegas a miles de páginas de productos.
		
		Repetiría una gran cantidad de código en cada página.
		
		La plantilla de página básica, la estructura, etc.
		
		Si quisiera cambiar algo sobre la estructura de la página.
		
		Tienes que cambiar cada página individualmente.
		
		
		Los sitios estáticos son excelentes cuando tienes una pequeña cantidad de páginas y deseas enviar el mismo contenido a todos los usuarios.
		
		Sin embargo, su mantenimiento puede tener un coste significativo a medida que aumenta el número de páginas.
		
		
		Diagrama de arquitectura del sitio estático:
		
			Server-side					    Client-side
			
			Files -> Web Server <- HTTP Request - Navegador
				
			  Pre-created:      -> HTTP Response ->
				HTML
				CSS
				JS 
				Assets
		
		Cuando un usuario quiere navegar a una página web.
		
		El navegador envía una solicitud HTTP GET especificando la URL de su página HTML. 
		
		El servidor recupera el documento solicitado de su sistema de archivos.
		
		Devuelve una respuesta HTTP que contiene el documento.
		
		Un código de estado de respuesta HTTP de 200 OK (que indica éxito).
		
		El servidor puede devolver un código de estado diferente.
		
		Por ejemplo 404 No encontrado si el archivo no está presente en el servidor.
		
		O 301 Movido permanentemente si el archivo existe pero ha sido redirigido a una ubicación diferente.
		
		
		El servidor de un sitio estático sólo necesitará procesar solicitudes GET.
		
		Porque el servidor no almacena ningún dato modificable.
		
		Tampoco cambia sus respuestas según los datos de la solicitud HTTP.
		
		(por ejemplo, parámetros de URL o cookies).
		
		
		Comprender cómo funcionan los sitios estáticos es útil cuando se aprende programación del lado del servidor.
		
		Porque los sitios dinámicos manejan las solicitudes de archivos estáticos (CSS, JavaScript, imágenes estáticas, etc.) exactamente de la misma manera.
		
	
	Sitios dinámicos:
		
		Puede generar y devolver contenido en función de la URL y los datos de solicitud específicos.
		
		En lugar de devolver siempre el mismo archivo codificado para una URL en particular.
		
		Usando el ejemplo de un sitio de producto.
		
		El servidor almacenaría "datos" del producto en una base de datos en lugar de archivos HTML individuales.
		
		Al recibir una solicitud HTTP GET para un producto.
		
		El servidor determina el ID del producto.
		
		Recupera los datos de la base de datos.
		
		Luego construye la página HTML para la respuesta insertando los datos en una plantilla HTML.
		
		Esto tiene importantes ventajas sobre un sitio estático:

		
		El uso de una base de datos permite que la información del producto se almacene de manera eficiente de una manera fácilmente extensible.
		
		Modificable y con capacidad de búsqueda.

		El uso de plantillas HTML hace que sea muy fácil cambiar la estructura HTML.
		
		Porque esto sólo debe hacerse en un lugar.
		
		En una única plantilla y no en potencialmente miles de páginas estáticas.
		
		
	Partes de una request/solicitud dinámica: 
		
		Se representará una descripción general paso a paso del ciclo "dinámico" de solicitud y respuesta HTTP.
		
		Para "mantener las cosas reales", usaremos el contexto de un sitio web de administrador de equipos deportivos.
		
		Donde un entrenador puede seleccionar el nombre y el tamaño de su equipo en un formulario HTML.
		
		Y obtener una "mejor alineación" sugerida para su próximo juego.

		
		El siguiente diagrama muestra los elementos principales del sitio web del "entrenador del equipo".
		
		Junto con etiquetas numeradas para la secuencia de operaciones cuando el entrenador accede a su lista del "mejor equipo".
		
		Las partes del sitio que lo hacen dinámico son la Aplicación Web.
		
		(así nos referiremos al código del lado del servidor que procesa solicitudes HTTP y devuelve respuestas HTTP).
		
		la Base de Datos, que contiene información sobre jugadores, equipos, entrenadores y sus relaciones y las plantillas HTML.
		
		
			Server-side					(1)   					Client-side
			
			Files -> 		Web Server 		<- HTTP Get Request - Navegador
				
			  Static resources: -> 			HTTP Response -> (6) HTML/CSS/JS
				HTML
				CSS
				JS 
				Assets
			
			  from web server: (2) 
			  
			  Request data: 
			    URL encoding 
			    GET/POST data 
			    Cookies         --> 	Web APP
													HTML --> Web Server 
			  from files                      		(4)         (5)
			                    -->           
			    HTML Templates 
			  
			Database <-> Web APP
					
					data (3)
	
	
		Hay cosas que se dirigen al servidior y otras a la app (dinámica).
		
		Los archivos html, la información/data de la base de datos, van a app web. 
		
		Las solicitudes del servidor web también van a la app web. 
		
		
		Los archivo CSS, JS y Assets van al servidor web. 
		
		Todos los recursos que están en la app web, también se conectan al servidor web como un html. 
		
		
		
		Luego de que el entrenador envía el formulario.
		
		Con el nombre del equipo y el número de jugadores.
		
		La secuencia de operaciones es:
		
		
		1. El navegador web crea una solicitud HTTP GET al servidor utilizando la URL base del recurso (/best)
			
			Codificando el número del equipo y del jugador como parámetros de URL.
			
			(por ejemplo, /best?team=my_team_name&show=11)
			
			O como parte de la url pattern (por ejemplo, /best/my_team_name/11/)
		
			Se utiliza una solicitud GET porque la solicitud solo busca datos (no modifica datos).
			
			
		2. El servidor web detecta que la solicitud es "dinámica"
			
			La reenvía a la aplicación web para su procesamiento.
			
			El servidor web determina cómo manejar diferentes URL.
			
			Según las reglas de coincidencia de patrones definidas en su configuración.
			
			
		3. La aplicación web identifica que la intención de la solicitud es GET
			
			obtener la "lista del mejor equipo" basada en la URL (/best/)
			
			Descubre el nombre del equipo requerido y la cantidad de jugadores de la URL.
			
			La aplicación web obtiene la información requerida de la base de datos.
			
			Utilizando parámetros "internos" adicionales para definir qué jugadores son los "mejores"
			
			Posiblemente también obteniendo la identidad del entrenador conectado a partir de una cookie del lado del cliente.
			
		
		4. La aplicación web crea dinámicamente una página HTML
		
			Colocando los datos (de la base de datos) en marcadores de posición dentro de una plantilla HTML.

		
		5. La aplicación web devuelve el HTML generado al navegador web.
			
			A través del servidor web, junto con un código de estado HTTP de 200 ("éxito").
			
			Si algo impide que se devuelva el HTML.
			
			La aplicación web devolverá otro código.
			
			Por ejemplo "404" para indicar que el equipo no existe.


		6. El navegador web comenzará a procesar el HTML devuelto
			
			Enviará solicitudes separadas para obtener cualquier otro archivo CSS o JavaScript al que haga referencia.
			
			
		7. El servidor web carga archivos estáticos desde el sistema de archivos
		
			Los devuelve directamente al navegador
			
			Nuevamente, el manejo correcto de los archivos se basa en las reglas de configuración.
			
			Y la coincidencia de patrones de URL.
			
		
		Una operación para actualizar un registro en la base de datos se manejaría de manera similar.
		
		Excepto que, como cualquier actualización de la base de datos.
		
		La solicitud HTTP del navegador debe codificarse como una solicitud POST.
		
	
	Otras tareas de la App web: 
		
		El trabajo de una aplicación web es recibir solicitudes HTTP y devolver respuestas HTTP
		
		Si bien interactuar con una base de datos para obtener o actualizar información es una tarea muy común.
		
		El código puede hacer otras cosas al mismo tiempo.
		
		O no interactuar con una base de datos en absoluto.


		Un buen ejemplo de una tarea adicional que podría realizar una aplicación web
		
		Sería enviar un correo electrónico a los usuarios para confirmar su registro en el sitio.
		
		El sitio también podría realizar registros u otras operaciones.
		
		
	Devolver algo que no sea HTML:
		
		El código del sitio web del lado del servidor
		
		No tiene que devolver fragmentos/archivos HTML en la respuesta.
		
		En cambio, puede crear y devolver dinámicamente otros tipos de archivos.
		
		(texto, PDF, CSV, etc.) o incluso datos (JSON, XML, etc.).
		
		
		Esto es especialmente relevante para sitios web que funcionan obteniendo contenido del servidor usando JavaScript y actualizando la página dinámicamente.
		
		En lugar de cargar siempre una página nueva cuando se debe mostrar contenido nuevo. 
		
		Usando la API Fetch para obtener o recuperar de datos del servidor.
		
		
	Server-side Frameworks:
		
		Facilitan mucho la escritura de código para manejar las operaciones descritas anteriormente.
		
		Una de las operaciones más importantes que realizan es proporcionar mecanismos simples.
		
		Para asignar URL de diferentes recursos/páginas a funciones de controlador específicas.
		
		Esto facilita mantener separado el código asociado a cada tipo de recurso.
		
		También tiene beneficios en términos de mantenimiento.
		
		Puede cambiar la URL utilizada para ofrecer una característica particular en un lugar, sin tener que cambiar la función del controlador.
		
		
		El siguiente código Django (Python)
		
		asigna dos patrones de URL a dos funciones de vista.
		
		El primer patrón garantiza que una solicitud HTTP
		
		con una URL de recurso de /best
		
		se pasará a una función denominada index() en el módulo de vistas.
		
		Una solicitud que tiene el patrón /best/junior
		
		se pasará a la función de vista junior().
		
		```
		# file: best/urls.py
		#

		from django.conf.urls import url

		from . import views

		urlpatterns = [
			# example: /best/
			url(r'^$', views.index),
			# example: /best/junior/
			url(r'^junior/$', views.junior),
		]
			
		```
		
		Los primeros parámetros en las funciones url()
		
		pueden parecer un poco extraños (por ejemplo, r'^junior/$')
		
		utilizan una técnica de coincidencia de patrones llamada "expresiones regulares" (RegEx o RE).
		
		nos permiten hacer coincidir patrones en la URL
		
		(en lugar de los valores codificados arriba)
		
		y usarlos como parámetros en nuestras funciones de visualización.
		
		Como ejemplo, una expresión regular realmente simple podría decir
		
		
		El marco web también facilita que una función de visualización obtenga información de la base de datos.
		
		La estructura de nuestros datos se define en modelos.
		
		que son clases de Python que definen los campos
		
		que se almacenarán en la base de datos subyacente.
		
		Si tenemos un modelo llamado Equipo con un campo de "team_type", 
		
		entonces podemos usar una sintaxis de consulta simple
		
		para recuperar todos los equipos que tienen un tipo particular.


		El siguiente ejemplo obtiene una lista de todos los equipos que tienen el tipo de equipo exacto
		
		(distingue entre mayúsculas y minúsculas) de "junior";
		
		tenga en cuenta el formato: nombre de campo (tipo_de_equipo)
		
		seguido de doble guión bajo y luego el tipo de coincidencia a usar (en este caso exacto ).
		
		Hay muchos otros tipos de coincidencias y podemos conectarlas en cadena.
		
		También podemos controlar el orden y el número de resultados devueltos.
		
		```
		#best/views.py

		from django.shortcuts import render

		from .models import Team

		def junior(request):
			list_teams = Team.objects.filter(team_type__exact="junior")
			context = {'list': list_teams}
			return render(request, 'best/index.html', context)
		
		```
		
		Después de que la función junior() obtiene la lista de equipos junior
		
		llama a la función render(), pasando el HttpRequest original
		
		una plantilla HTML y un objeto "contexto" 
		
		que define la información que se incluirá en la plantilla. 
		
		La función render() es una función conveniente que genera HTML 
		
		usando un contexto y una plantilla HTML,
		
		y lo devuelve en un objeto HttpResponse.
		
		
		Los frameworks web pueden ayudarte con muchas otras tareas.
	
		En este punto, debería tener una buena visión general 
		
		de las operaciones que debe realizar el código del lado del servidor
		
		y conocer algunas de las formas en que un marco web del lado del servidor puede facilitar esto.

		
		
|| Server-side Frameworks 
	
	Anteriormente se mostró la comunicación entre clientes web y servidores. 
	
	La naturaleza de las solicitudes y respuestas HTTP.
	
	Qué debe hacer una aplicación web del lado del servidor para responder a las solicitudes de un navegador web.
	
	Ahora debemos ver como los frameworks web pueden simplificar estas tareas	
	
	Cómo elegir un framework para nuestra app. 
	
	
	Veremos fragmentos de código de frameworks reales. 
	
	
	Los frameworks web son software que facilitan la escritura, el mantenimiento y la escala de aplicaciones web.
	
	Proporcionan herramientas y bibliotecas que simplifican las tareas comunes de desarrollo web.
	
	Incluido el enrutamiento de URL a los controladores adecuados.
	
	La interacción con bases de datos. el soporte de sesiones y autorización de usuarios
	
	El formato de salida (por ejemplo, HTML, JSON, XML)
	
	La mejora de la seguridad contra ataques web.


	Características de los Frameworks: 
		
		Proporcionan herramientas y bibliotecas para simplificar las operaciones comunes de desarrollo web.
		
		No es necesario utilizar un framework, pero se recomienda dado que hace todo más fácil. 
		
	
	Request y Response HTTP directas: 
	
		Los servidores web y los navegadores se comunican a través del protocolo HTTP.
		
		los servidores esperan solicitudes HTTP del navegador.
		
		luego devuelven información en respuestas HTTP.
		
		Los frameworks permiten escribir una sintaxis simplificada 
		
		que generará código del lado del servidor. 
		
		para trabajar con estas solicitudes y respuestas
		
		Interactuando con código más sencillo y de nivel superior 
		
		en lugar de primitivos de red de nivel inferior
		
		
		El ejemplo muestra cómo funciona esto en el framework Django (Python)
		
		Cada función de "vista" (un controlador de solicitudes)

		recibe un objeto HttpRequest que contiene información de la solicitud
		
		debe devolver un objeto HttpResponse con la salida formateada (en este caso, una cadena).
		
		```
		# Django view function
		from django.http import HttpResponse

		def index(request):
			# Get an HttpRequest (request)
			# perform operations using information from the request.
			# Return HttpResponse
			return HttpResponse('Output string to return')
		
		```
	
	Enrutar solicitudes al controlador apropiado:
		
		La mayoría de los sitios proporcionarán una serie de recursos diferentes
		
		accesibles a través de distintas URL
		
		Manejar todo esto en una sola función sería difícil de mantener
		
		Los frameworks proporcionan mecanismos simples para asignar patrones de URL
		
		a funciones de controlador específicas
		
		Este enfoque también tiene beneficios en términos de mantenimiento
		
		puede cambiar la URL utilizada para ofrecer una característica particular sin tener que cambiar el código subyacente
		
		
		Los diferentes frameworks utilizan diferentes mecanismos para el mapeo
		
		Flask (Python) agrega rutas para ver funciones usando un decorador.

		```
		@app.route("/")
		def hello():
			return "Hello World!"
			
		```
		
		Django espera que los desarrolladores definan una lista de asignaciones de URL
		
		entre un patrón de URL y una función de visualización.
		
		```
		urlpatterns = [
			url(r'^$', views.index),
			# example: /best/myteamname/5/
			url(r'^best/(?P<team_name>\w.+?)/(?P<team_number>[0-9]+)/$', views.best),
		]
		
		```
		
	
	Facilite el acceso a los datos en la solicitud

		Los datos se pueden codificar en una solicitud HTTP de varias maneras
		
		
		Una solicitud HTTP GET para obtener archivos o datos del servidor o datos del servidor
		
		puede codificar qué datos se requieren en los parámetros de la URL o dentro de la estructura de la URL.
		
		
		En cambio, una solicitud HTTP POST
		
		para actualizar un recurso en el servidor incluirá la información de actualización como "POST data"
		
		La solicitud HTTP también puede incluir información sobre la sesión
		
		o el usuario actual en una cookie del lado del cliente.
		
		
		Los frameworks proporcionan mecanismos apropiados para el lenguaje de programación para acceder a esta información.
		
		El objeto HttpRequest que Django pasa a cada función de vista contiene métodos y propiedades para acceder a la URL de destino
		
		el tipo de solicitud (por ejemplo, un HTTP GET)
		
		parámetros GET o POST, cookies y datos de sesión, etc.
		
		Django también puede pasar información codificada en la estructura de la URL
		
		definiendo "patrones de captura" en el asignador de URL
		
		Como lo vimos anteriormente. 
		
	
	Abstracción y simplificación para el acceso a la DB: 
	
		Los sitios web utilizan bases de datos para almacenar información
		
		se compartirá con los usuarios y sobre los usuarios.
		
		Los frameworks proporcionan una capa de base de datos que abstrae las operaciones de lectura, escritura, consulta y eliminación de la base de datos.
		
		Esta capa de abstracción se conoce como Mapeador relacional de objetos (ORM).

		
		Usar un ORM tiene dos beneficios:
			
			1. Puede reemplazar la base de datos subyacente sin necesidad de cambiar necesariamente el código que la utiliza.
				
				permite a los desarrolladores optimizar las características de diferentes bases de datos en función de su uso.
			
			2. La validación básica de datos se puede implementar dentro del framework
			
				hace que sea más fácil y seguro verificar que los datos estén almacenados en el tipo correcto campo de base de datos
				
				tengan el formato correcto (por ejemplo, una dirección de correo electrónico) y no sean maliciosos de ninguna manera
				
				(los piratas informáticos pueden usar ciertos patrones de código para cometer errores).
				
				cosas como eliminar registros de bases de datos
				
		
		Django proporciona un ORM
		
		se refiere al objeto utilizado para definir la estructura de un registro como modelo
		
		El modelo especifica los tipos de campos que se almacenarán
		
		puede proporcionar validación a nivel de campo sobre qué información se puede almacenar
		
		(Ej, un campo de correo electrónico solo permitiría direcciones de correo electrónico válidas).
		
		
		Las definiciones de campo también pueden especificar su tamaño máximo
		
		valores predeterminados, opciones de lista de selección, texto de ayuda para documentación, texto de etiqueta para formularios, etc
		
		El modelo no indica ninguna información sobre la base de datos subyacente
		
		es una configuración que puede cambiarse. por separado de nuestro código.
		
		
		Ej en Django para un objeto Team
		
		Esto almacena el nombre del equipo
		
		el nivel del equipo como campos de caracteres
		
		especifica una cantidad máxima de caracteres que se almacenarán para cada registro.
		
		team_level es un campo de elección
		
		por lo que también proporcionamos una asignación entre las opciones que se mostrarán y los datos que se almacenarán
		
		junto con un valor predeterminado.
		
		```
		#best/models.py

		from django.db import models

		class Team(models.Model):
			team_name = models.CharField(max_length=40)

			TEAM_LEVELS = (
				('U09', 'Under 09s'),
				('U10', 'Under 10s'),
				('U11', 'Under 11s'),
				# List our other teams
			)
			team_level = models.CharField(max_length=3,choices=TEAM_LEVELS,default='U11')
		
		```
		
		El modelo Django proporciona una API de consulta simple para buscar en la base de datos.
		
		Esto puede comparar varios campos a la vez utilizando diferentes criterios
		
		(por ejemplo, exacto, que no distingue entre mayúsculas y minúsculas, mayor que, etc.)
		
		puede admitir declaraciones complejas
		
		(por ejemplo, puede especificar una búsqueda en equipos U11 que tengan un equipo nombre que comienza con "Fr" o termina con "al").
		
		
		El segundo fragmento de código muestra una función de visualización
		
		(controlador de recursos) para mostrar todos nuestros equipos U09.
		
		especificamos que queremos filtrar todos los registros donde el campo team_level
		
		tenga exactamente el texto 'U09' (observe a continuación cómo se pasa este criterio a la función filter() 
		
		como argumento con el nombre del campo y el tipo de coincidencia separados por doble guiones bajos: 
		
		nivel_equipo__exacto).
		
		```
		#best/views.py

		from django.shortcuts import render
		from .models import Team

		def youngest(request):
			list_teams = Team.objects.filter(team_level__exact="U09")
			context = {'youngest_teams': list_teams}
			return render(request, 'best/index.html', context)

		```
	
	
	Rendering data:
			
		Los frameworks suelen proporcionar sistemas de plantillas
		
		permiten especificar la estructura de un documento de salida
		
		utilizando marcadores de posición para los datos que se agregarán cuando se genere una página
		
		Las plantillas se utilizan a menudo para crear HTML
		
		pero también pueden crear otros tipos de documentos
		
		suelen proporcionar un mecanismo para facilitar la generación de otros formatos a partir de datos almacenados, incluidos JSON y XML.
		
		
		El sistema de plantillas de Django le permite especificar variables
		
		usando una sintaxis de "doble llave" (por ejemplo, {{ nombre_variable }})
		
		que será reemplazada por valores pasados ​​desde la función de vista cuando se represente una página.
		
		El sistema de plantillas también proporciona soporte para expresiones, sintaxis: {% expresión %})
		
		permiten que las plantillas realicen operaciones simples como iterar valores de lista pasados ​​a la plantilla.
		
		
		Con el ej anterior, la vista pasa a la plantilla HTML una variable de lista llamada youngest_teams.
		
		Dentro del esqueleto HTML tenemos una expresión que primero verifica si la variable youngest_teams existe y luego la itera en un bucle for.
		
		En cada iteración, la plantilla muestra el valor nombre_equipo del equipo en un elemento de la lista.
		
		```
		#best/templates/best/index.html

		<!doctype html>
		<html lang="en">
		  <body>
			{% if youngest_teams %}
			  <ul>
				{% for team in youngest_teams %}
				  <li>{{ team.team_name }}</li>
				{% endfor %}
			  </ul>
			{% else %}
			  <p>No teams are available.</p>
			{% endif %}
		  </body>
		</html>
		
		```
	
	Elección del Framework:
		
		Existen numerosos marcos web para casi todos los lenguajes de programación que desee utilizar.
		
		Con tantas opciones, puede resultar difícil determinar qué marco proporciona el mejor punto de partida para su nueva aplicación web.

		Hay algunos de los factores que pueden afectar su decisión.
		
		
	Esfuerzo por aprender:
	
		Depende de qué tan familiarizado esté con el lenguaje de programación subyacente.
		
		La consistencia de la API, la calidad de su documentación y el tamaño y la actividad de su comunidad. 
		
		Sin experiencia, Django (es uno de los más fáciles de aprender según los criterios anteriores).
		
		Si eres parte de un equipo de desarrollo que ya tiene una experiencia significativa con un framework web o lenguaje de programación en particular, entonces tiene sentido seguir con eso.
		
		
	Productividad:
		
		La productividad es una medida de la rapidez con la que puedes crear nuevas funciones.
		
		una vez que estás familiarizado con el framework
		
		incluye tanto el esfuerzo de escribir como mantener el código
		
		(ya que no puedes escribir nuevas funciones mientras las antiguas no funcionan).
		
		Muchos de los factores que afectan la productividad son similares a los del "esfuerzo por aprender",
		
		documentación, comunidad, experiencia en programación, etc.
		
		Otros factores:	
		
		
		Propósito/origen del framework:
			
			Algunos frameworks se crearon inicialmente para resolver ciertos tipos de problemas
			
			siguen siendo mejores en la creación de aplicaciones web con restricciones similares
			
			Django se creó para respaldar el desarrollo del sitio web de un periódico.
			
			Por lo que es bueno para blogs y otros sitios que implican publicar cosas.
			
			Flask es un marco mucho más liviano y excelente para crear aplicaciones web que se ejecutan en dispositivos integrados.
			
		
		Opinionated vs. unopinionated: 
			
			Un framework con opiniones es aquel en el que se recomiendan las "mejores" formas de resolver un problema en particular
			
			Tienden a ser más productivos cuando intentas resolver problemas comunes.
			
			porque te llevan en la dirección correcta; sin embargo, a veces son menos flexibles.
			
		
		Batteries included vs. get it yourself:
			
			Algunos marcos web incluyen herramientas/bibliotecas
			
			que abordan todos los problemas que sus desarrolladores pueden pensar "de forma predeterminada
			
			mientras que los marcos más livianos esperan que los desarrolladores web
			
			elijan soluciones a los problemas de bibliotecas separadas (Django es un ejemplo).
		
			Mientras que Flask es un ejemplo de un marco muy liviano).
				
			Es más fácil comenzar con frameworks que incluyen todo porque ya tienes todo lo que necesitas 
			
			lo más probable es que esté bien integrado y bien documentado.
			
			si un framework más pequeño tiene todo lo que (alguna vez) necesitará,
			
			entonces podrá ejecutarse en entornos más restringidos y tendrá un subconjunto más pequeño y más fácil de aprender.
			
		
		Si el framework fomenta o no buenas prácticas de desarrollo:
			
			Un framework que fomenta una arquitectura Modelo-Vista-Controlador
			
			para separar el código en funciones lógicas
			
			dará como resultado un código más fácil de mantener
			
			que uno que no tiene expectativas para los desarrolladores.
			
			De manera similar, el diseño del framework puede tener un gran impacto en la facilidad con la que se prueba y reutiliza el código.
			
		
	Rendimiento del framework/lenguaje de programación:
	
		Normalmente la "velocidad" no es el factor más importante en la selección
		
		porque incluso tiempos de ejecución relativamente lentos como Python
		
		son más que "suficientemente buenos" para sitios de tamaño mediano que se ejecutan en hardware moderado
		
		Los beneficios de velocidad percibidos de otro lenguaje 
		
		C++ o JavaScript bien pueden verse compensados ​​por los costos de aprendizaje y mantenimiento.
		
		
	Soporte de almacenamiento en caché:
	
		A medida que su sitio web tenga más éxito.
		
		Es posible que ya no pueda hacer frente a la cantidad de solicitudes que recibe cuando los usuarios acceden a él.
		
		En este punto, puede considerar agregar soporte para el almacenamiento en caché.
		
		El almacenamiento en caché es una optimización en la que se almacena toda
		
		o parte de una respuesta web para que no sea necesario volver a calcularla en solicitudes posteriores.
		
		Devolver una respuesta almacenada en caché es mucho más rápido que calcularla en primer lugar
		
		El almacenamiento en caché se puede implementar en su código
		
		o en el servidor (reverse proxy).
		
		Los frameworks web tendrán diferentes niveles de soporte para definir qué contenido se puede almacenar en caché.
		
		
	Escalabilidad:
	
		Una vez que su sitio web tenga un éxito fantástico
		
		agotará los beneficios del almacenamiento en caché e incluso alcanzará los límites del escalamiento vertical
		
		(ejecutar su aplicación web en un hardware más potente).
		
		En este punto, es posible que necesite escalar horizontalmente
		
		(compartir la carga distribuyendo su sitio entre varios servidores web y bases de datos)
		
		o escalar "geográficamente" porque algunos de sus clientes se encuentran muy lejos de su servidor.
		
		El marco web que elijas puede marcar una gran diferencia en lo fácil que es escalar tu sitio.
	
	
	Seguridad web:
		
		Algunos frameworks brindan un mejor soporte para manejar ataques web comunes.
		
		Django, por ejemplo, desinfecta todas las entradas del usuario desde las plantillas HTML
		
		para que no se pueda ejecutar JavaScript ingresado por el usuario
		
		Otros marcos brindan protección similar, pero no siempre está habilitada de forma predeterminada
		
	
	Hay muchos otros factores posibles, incluida la concesión de licencias, si el marco está en desarrollo activo o no, etc.

	Como principiante elegirás en función de la "facilidad de aprendizaje".
	
	Además de la "facilidad de uso" del lenguaje en sí
	
	sus recursos más valiosos son documentación/tutoriales de alta calidad y una comunidad activa que ayuda a nuevos usuarios.
	
	
	En los sitios de los frameworks, se puede ver Documentación (con nombres como "Documentación, Guía, Referencia de API, Introducción", etc.).
	
	ver temas que muestren cómo configurar el enrutamiento de URL, plantillas y bases de datos/modelos
	
	Si los documentos son claros, si tiene foro activo, preguntas, respuestas, comunidad activa. 
	
	
	Django: 
		
		Se encarga de gran parte de las molestias del desarrollo web
		
		para que puedas concentrarte en escribir tu aplicación sin necesidad de reinventar la rueda.
		
		Es gratuito y de código abierto.

		
		Sigue la filosofía de "Baterías incluidas" y proporciona casi todo lo que la mayoría de los desarrolladores querrían hacer "listo para usar".
		
		Debido a que todo está incluido, todo funciona en conjunto, sigue principios de diseño consistentes y tiene documentación extensa y actualizada.
		
		Es rápido, seguro y muy escalable
		
		Al estar basado en Python, el código de Django es fácil de leer y mantener.


	Flask: 
		
		Es un microframework para Python 
		
		Si bien es minimalista, Flask puede crear sitios web serios desde el primer momento.
		
		Contiene un servidor de desarrollo y un depurador, e incluye soporte para plantillas Jinja2
		
		cookies seguras, pruebas unitarias y envío de solicitudes RESTful.
		
		Tiene buena documentación y una comunidad activa.

		
		Flask se ha vuelto extremadamente popular
		
		particularmente para los desarrolladores que necesitan proporcionar servicios web en sistemas pequeños con recursos limitados
		
		(por ejemplo, ejecutar un servidor web en una Raspberry Pi, controladores de drones, etc.)
		
	
	Express: 
		
		Express es un marco web rápido, independiente flexible y minimalista para Node.js
		
		(node ​​es un entorno sin navegador para ejecutar JavaScript)
		
		Proporciona un sólido conjunto de funciones para aplicaciones web y móviles
		
		ofrece middleware y métodos de utilidad HTTP útiles.

		facilita la migración de los programadores web JavaScript del lado del cliente
		
		al desarrollo del lado del servidor
		
		ahorra recursos (el entorno de nodo subyacente utiliza multitarea liviana dentro de un subproceso
		
		en lugar de generar procesos separados para cada nueva solicitud web).
		
		
		Debido a que es minimalista, no incorpora todos los componentes que desee utilizar.
		
		(por ejemplo, el acceso a la base de datos y el soporte para usuarios y sesiones
		 
		se proporcionan a través de bibliotecas independientes).
		 
		Hay muchos componentes independientes excelentes
		 
		pero a veces puede resultar difícil determinar cuál es el mejor para un propósito particular.

		
		Muchos frameworks populares del lado del servidor y de pila completa
		
		que comprenden marcos del lado del servidor y del cliente
		
		se basan en Express, incluidos Feathers, ItemsAPI, KeystoneJS, Kraken, LoopBack, MEAN y Sails.

		
		Muchas empresas de alto perfil utilizan Express, incluidas: Uber, Accenture, IBM, etc.
		
		
	Spring Boot: 
		
		Uno de varios proyectos proporcionados por Spring
		
		Es un buen punto de partida para realizar desarrollo web del lado del servidor utilizando Java.

		es fácil de usar para crear aplicaciones independientes basadas en Spring de nivel de producción que puede "simplemente ejecutar".
		
		permite comenzar con un mínimo de complicaciones y configuración.
		
		Puede usarse para problemas pequeños, pero su punto fuerte es crear aplicaciones a mayor escala que utilicen un enfoque en la nube.
		
		Por lo general, se ejecutan varias aplicaciones en paralelo hablando entre sí
		
		algunas proporcionan interacción con el usuario y otras realizan el trabajo de back-end
		
		(por ejemplo, acceder a bases de datos u otros servicios).
		
		Los balanceadores de carga ayudan a garantizar la redundancia y la confiabilidad
		
		o permiten el manejo geolocalizado de las solicitudes de los usuarios para garantizar la capacidad de respuesta.
		


|| Seguridad en la Web 

	Se requiere vigilancia en todos los aspectos del diseño y uso del sitio web
	
	Debemos comprender de dónde provienen las amenazas
	
	Para saber qué hacer para proteger la aplicación web contra los ataques más comunes.
	
	
	Seguridad en el sitio web: 
		
		Con gran regularidad, escuchamos acerca de sitios web que dejan de estar disponibles debido a ataques de denegación de servicio (DDoS) 
		
		que muestran información modificada (y a menudo dañina) en sus páginas de inicio.

		En otros casos de alto perfil, millones de contraseñas
		
		direcciones de correo electrónico y datos de tarjetas de crédito se han filtrado al dominio público
		
		exponiendo a los usuarios de sitios web tanto a vergüenza personal como a riesgos financieros.

		
		El propósito de la seguridad del sitio web es prevenir este (o cualquier) tipo de ataque.
		
		La definición más formal de seguridad de un sitio web
		
		es el acto/práctica de proteger los sitios web contra el acceso, uso, modificación, destrucción o interrupción no autorizados.


		La seguridad eficaz del sitio web requiere un esfuerzo de diseño en todo el sitio web
		
		en su aplicación web, la configuración del servidor web
		
		sus políticas para crear y renovar contraseñas y el código del lado del cliente
		
		si está utilizando un framework web del lado del servidor
		
		es casi seguro que habilitará "de forma predeterminada" mecanismos de defensa robustos
		
		y bien pensados ​​contra varios de los ataques más comunes.
		
		Otros ataques se pueden mitigar mediante la configuración de su servidor web
		
		por ejemplo habilitando HTTPS
		
		existen herramientas de análisis de vulnerabilidades disponibles públicamente
		
		pueden ayudarlo a descubrir si ha cometido algún error obvio.

	
	Amenazas a la seguridad de un sitio: 
		
		Amenazas más comunes a sitios web y cómo se mitigan. 
		
		las amenazas tienen más éxito cuando la aplicación web confía
		
		o no está lo suficientemente paranoica con respecto a los datos provenientes del navegador.
		
		
	Cross-Site Scripting (XSS):
		
		XSS es un término utilizado para describir una clase de ataques
		
		permiten a un atacante inyectar scripts del lado del cliente a través del sitio web
		
		en los navegadores de otros usuarios.
		
		Debido a que el código inyectado llega al navegador desde el sitio
		
		el código es confiable y puede hacer cosas como enviar la cookie de autorización del sitio del usuario al atacante
		
		Cuando el atacante tiene la cookie, puede iniciar sesión en un sitio 
		
		como si fuera el usuario y hacer cualquier cosa que el usuario pueda
		
		como acceder a los datos de su tarjeta de crédito
		
		ver los datos de contacto o cambiar contraseñas.
		
		Históricamente, las vulnerabilidades XSS han sido más comunes que cualquier otro tipo de amenaza a la seguridad
		
		
		Las vulnerabilidades XSS se dividen en reflejadas (reflected) y persistentes (persistent)
		
		según cómo el sitio devuelve los scripts inyectados a un navegador.
		
		
		Reflected XSS:
			
			Ocurre cuando el contenido del usuario que se pasa al servidor
			
			y sin modificar para mostrarse en el navegador.
			
			Por ejemplo, considere una función de búsqueda de un sitio
			
			donde los términos de búsqueda están codificados como parámetros de URL
			
			y estos términos se muestran junto con los resultados
			
			Un atacante puede crear un enlace de búsqueda que contenga un script malicioso como parámetro
			
			(por ejemplo, https://developer.mozilla.org?q=beer<script%20src="http://example.com/tricky.js"> </script>)
			
			y enviarlo por correo electrónico a otro usuario
			
			Si el usuario objetivo hace clic en este "enlace interesante",
			
			el script se ejecutará cuando se muestren los resultados de la búsqueda.
			
			esto le brinda al atacante toda la información que necesita
			
			para ingresar al sitio como usuario objetivo,
			
			potencialmente realizar compras como usuario o compartir su información de contacto.
			
		
		Persistent XSS:	
			
			Ocurre cuando el script malicioso se almacena en el sitio web
			
			luego se vuelve a mostrar sin modificaciones para que otros usuarios lo ejecuten sin darse cuenta.
			
			Por ejemplo, un foro de discusión que acepta comentarios que contienen HTML sin modificar 
			
			podría almacenar un script malicioso de un atacante.
			
			Cuando se muestran los comentarios, el script se ejecuta
			
			y puede enviar al atacante la información necesaria para acceder a la cuenta del usuario
			
			Este tipo de ataque es extremadamente popular y poderoso
			
			es posible que el atacante ni siquiera tenga ningún contacto directo con las víctimas.
			

		Si bien los datos de las solicitudes POST o GET
		
		son la fuente más común de vulnerabilidades XSS
		
		cualquier dato del navegador es potencialmente vulnerable
		
		como los datos de las cookies generados por el navegador o los archivos del usuario que se cargan y muestran.

		
		La mejor defensa contra las vulnerabilidades XSS es eliminar o deshabilitar
		
		cualquier marcado que potencialmente pueda contener instrucciones para ejecutar el código.
		
		Para HTML, esto incluye elementos como <script>, <object>, <embed> y <link>.
		
		
		El proceso de modificar los datos del usuario para que no puedan usarse para ejecutar scripts
		
		o afectar la ejecución del código del servidor se conoce como desinfección de entrada (input sanitization).
		
		Muchos frameworks web desinfectan automáticamente la entrada del usuario desde formularios HTML de forma predeterminada.
		
	
	SQL Injection:
		
		Permiten a usuarios malintencionados ejecutar código SQL arbitrario en una base de datos.
		
		Lo que permite acceder, modificar o eliminar datos independientemente de los permisos del usuario.

		Un ataque de inyección exitoso podría falsificar identidades
	
		crear nuevas identidades con derechos de administración
		
		acceder a todos los datos en el servidor o destruir/modificar los datos para hacerlos inutilizables.
		
		
		Los tipos de inyección SQL:
			
			Error-based, boolean errors y time-based SQL.
			
		
		Esta vulnerabilidad está presente si la entrada del usuario que se pasa a una declaración SQL subyacente puede cambiar el significado de la declaración.
		
		
		Por ejemplo, el siguiente código pretende enumerar todos los usuarios con un nombre particular (nombre de usuario)
		
		que se ha proporcionado desde un formulario HTML:
		
		```
		statement = "SELECT * FROM users WHERE name = '" + userName + "';"

		```
		
		Si el usuario especifica un nombre real
		
		la declaración funcionará según lo previsto
		
		Sin embargo, un usuario malintencionado podría cambiar completamente el comportamiento de esta declaración SQL
		
		a la nueva declaración en el siguiente ejemplo, especificando un
		
		a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't para userName
		
		```
		SELECT * FROM users WHERE name = 'a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't';

		```
		
		La declaración modificada crea una declaración SQL válida
		
		que elimina la tabla de usuarios y selecciona todos los datos de la tabla de información de usuario (que revela la información de cada usuario).
		
		Esto funciona porque la primera parte del texto inyectado (a';) completa la declaración original
		
		Para evitar este tipo de ataque, debe asegurarse de que los datos de usuario que se pasen a una consulta SQL
		
		no puedan cambiar la naturaleza de la consulta.
		
		Una forma de hacerlo es escapar de todos los caracteres de la entrada del usuario que tengan un significado especial en SQL.

		
		La declaración SQL trata el carácter ' como el principio y el final de una cadena literal.
		
		Al colocar una barra invertida delante de este carácter (\'),
		
		escapamos del símbolo y le indicamos a SQL que lo trate como un carácter (solo una parte de la cadena).

				
		En la siguiente declaración, escapamos del carácter '.
		
		El SQL ahora interpretará el nombre como la cadena completa en negrita
		
		(que es un nombre muy extraño, pero no dañino).

		```
		SELECT * FROM users WHERE name = 'a\';DROP TABLE users; SELECT * FROM userinfo WHERE \'t\' = \'t';
		
		```

		Los frameworks web a menudo se encargarán de escapar el carácter por nosotros. 
		
		Django, por ejemplo, garantiza que se escape cualquier dato de usuario pasado a conjuntos de consultas (consultas modelo).

		-querysets (model queries)-
		
		
	Cross-Site Request Forgery (CSRF):
		
		Falsificación de solicitudes entre sitios
		
		permiten a un usuario malintencionado ejecutar acciones utilizando las credenciales de otro usuario
		
		sin el conocimiento o consentimiento de ese usuario.

		
		Ej, un usuario malicioso que sabe que un sitio en particular permite a los usuarios que han iniciado sesión enviar dinero a una cuenta específica
		
		mediante una solicitud HTTP POST que incluye el nombre de la cuenta y una cantidad de dinero.
		
		Josh construye un formulario que incluye sus datos bancarios y una cantidad de dinero como campos ocultos
		
		y lo envía por correo electrónico a otros usuarios del sitio (con el botón Enviar disfrazado como un enlace a un sitio para "hacerse rico rápidamente").

		clic en el botón Enviar, se enviará una solicitud HTTP POST al servidor que contiene los detalles de la transacción y las cookies del lado del cliente que el navegador asoció con el sitio
		
		(agregar cookies del sitio asociado a las solicitudes es un comportamiento normal del navegador).
		
		El servidor comprobará las cookies y las utilizará para determinar si el usuario ha iniciado sesión y tiene permiso para realizar la transacción.
		
		El resultado es que cualquier usuario que haga clic en el botón Enviar mientras esté conectado al sitio comercial realizará la transacción. Josh se hace rico.

		
		Nota: El truco aquí es que Josh no necesita tener acceso a las cookies del usuario (ni a las credenciales de acceso).
		
		El navegador del usuario almacena esta información y la incluye automáticamente en todas las solicitudes al servidor asociado
		
		Una forma de prevenir este tipo de ataque es que el servidor requiera que las solicitudes POST incluyan un secreto generado por el sitio específico del usuario.
		
		El secreto lo proporcionaría el servidor al enviar el formulario web utilizado para realizar las transferencias.
		
		Este enfoque evita que Josh cree su propio formulario, porque tendría que conocer el secreto que el servidor proporciona al usuario.
		
		Incluso si descubriera el secreto y creara un formulario para un usuario en particular, ya no podría usar ese mismo formulario para atacar a todos los usuarios.

		
		Los frameworks web a menudo incluyen mecanismos de prevención CSRF.


	Otras amenazas comunes: 
		
	
	Clickjacking:
			
		En este ataque, un usuario malintencionado secuestra los clics destinados a un sitio visible de nivel superior y los dirige a una página oculta debajo.
		
		Esta técnica podría usarse, por ejemplo, para mostrar un sitio bancario legítimo
		
		pero capturar las credenciales de inicio de sesión en un <iframe> invisible controlado por el atacante.
		
		El clickjacking también podría usarse para lograr que el usuario haga clic en un botón en un sitio visible
		
		en realidad, sin saberlo, haga clic en un botón completamente diferente
		
		Como defensa, su sitio puede evitar que se incruste en un iframe de otro sitio configurando los encabezados HTTP apropiados.
		
	
	Denial of Service (DoS):
			
		La DoS generalmente se logra inundando un sitio de destino con solicitudes falsas
		
		para que el acceso a un sitio se vea interrumpido para los usuarios legítimos.
		
		Las solicitudes pueden ser numerosas o pueden consumir individualmente grandes cantidades de recursos
		
		(por ejemplo, lecturas lentas o carga de archivos grandes). 
		
		Las defensas DoS normalmente funcionan identificando y bloqueando el tráfico "malo"
		
		al tiempo que permiten el paso de mensajes legítimos.
		
		Estas defensas suelen estar ubicadas antes o en el servidor web (no forman parte de la aplicación web en sí).
		
	
	Directory Traversal (File and disclosure):
		
		un usuario malintencionado intenta acceder a partes del sistema de archivos del servidor web a las que no debería poder acceder
		
		Esta vulnerabilidad se produce cuando el usuario puede pasar nombres de archivos que incluyen caracteres de navegación del sistema de archivos (por ejemplo, ../../).
		
		La solución es sanitizar el input antes de usarlo. 
		
	
	File Inclusion:
		
		En este ataque, un usuario puede especificar un archivo "no deseado"
		
		para mostrarlo o ejecutarlo en los datos pasados ​​al servidor
		
		Cuando se carga, este archivo puede ejecutarse en el servidor web o en el lado del cliente (lo que lleva a un ataque XSS).
		
		La solución es sanitizar el input antes de usarlo. 


	Command Injection:
		
		Permiten a un usuario malintencionado ejecutar comandos arbitrarios del sistema en el sistema operativo host.
		
		La solución es desinfectar la entrada del usuario antes de que pueda usarse en llamadas al sistema.
		
		
	Claves: 
		
		Casi todos los ataques de seguridad de las secciones anteriores tienen éxito cuando la aplicación web confía en los datos del navegador.
		
		Independientemente de lo que haga para mejorar la seguridad de su sitio web
		
		debe desinfectar todos los datos originados por el usuario antes de que se muestren en el navegador
		
		se utilicen en consultas SQL o se pasen a un sistema operativo o una llamada al sistema de archivos.

		Advertencia: la lección más importante que puede aprender sobre la seguridad de un sitio web es nunca confiar en los datos del navegador.
		
		Esto incluye, entre otros, datos en los parámetros de URL de solicitudes GET, solicitudes POST, encabezados HTTP y cookies, y archivos cargados por el usuario.
		
		Siempre verifique y desinfecte todos los datos entrantes. Asume siempre lo peor
		
		
	Otras medidas concretas: 
		
		1. Utilice una gestión de contraseñas más eficaz
		
			Fomente contraseñas seguras.
		
			Considere la autenticación de dos factores para su sitio
		
			de modo que además de una contraseña, el usuario deba ingresar otro código de autenticación
		
			generalmente uno que se entrega a través de algún hardware físico que solo el usuario tendrá, como un código en un SMS enviado a su teléfono
		
		
		2. Configure su servidor web para utilizar HTTPS y HTTP Strict Transport Security (HSTS).
		
			HTTPS cifra los datos enviados entre su cliente y su servidor.
			
			Esto garantiza que las credenciales de inicio de sesión, las cookies, los datos de las solicitudes POST y la información del encabezado no estén fácilmente disponibles para los atacantes.
		
		
		3. Utilice herramientas de escaneo de vulnerabilidades
			
			para realizar pruebas de seguridad automatizadas en su sitio
			
			Más adelante, su exitoso sitio web también puede encontrar errores al ofrecer una recompensa por errores como lo hace Mozilla aquí.
			
		
		4. Almacene y muestre solo los datos que necesite.
		
			Por ejemplo, si sus usuarios deben almacenar información confidencial
			
			como detalles de tarjetas de crédito, solo muestre una cantidad suficiente del número de tarjeta para que el usuario pueda identificarla
			
			y no la suficiente para que un atacante pueda copiarla y utilizarla en otro sitio.
			
			El patrón más común en este momento es mostrar solo los últimos 4 dígitos de un número de tarjeta de crédito.
		
		
		5. Mantenga el software actualizado
		
			La mayoría de los servidores cuentan con actualizaciones de seguridad periódicas que corrigen o mitigan las vulnerabilidades conocidas.
			
			Si es posible, programe actualizaciones automáticas periódicas e, idealmente, programe actualizaciones
			
			durante los momentos en que su sitio web tenga la menor cantidad de tráfico.
			
			Es mejor hacer una copia de seguridad de sus datos antes de actualizar y probar nuevas versiones de software
			
			para asegurarse de que no haya problemas de compatibilidad en su servidor.
			
	
	Lo más importante es que debe comprender que una aplicación web no puede confiar en ningún dato del navegador web
	
	Todos los datos del usuario deben desinfectarse antes de mostrarse o usarse en consultas SQL y llamadas al sistema de archivos.




	
			
			
		
			
		
		
			
			

		
	
		
			
		
		




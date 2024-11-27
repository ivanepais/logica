# Web Performance 

	
	Para crear sitios web y aplicaciones que la gente quiera utilizar, que atraigan y retengan a los usuarios.
	
	Es necesario crear una buena experiencia de usuario.
	
	Parte de una buena experiencia de usuario es garantizar que el contenido se cargue rápidamente y responda a la interacción del usuario.
	
	
	Guía: 
		
		1. Web Performance	
			
			Analiza por qué el rendimiento web es importante para la accesibilidad, la experiencia del usuario y sus objetivos comerciales.
		
		
		2. Componentes del rendimiento web
			
			Componentes del rendimiento, desde la carga y representación de la página web.
			
			Incluyendo cómo su contenido llega al navegador de sus usuarios para ser visto, hasta qué grupos de personas debemos considerar al pensar en el rendimiento.
			
		
		3. Usuarios y el rendimiento web
			
			Más importante que la velocidad de su sitio web en milisegundos, es la rapidez con la que sus usuarios perciben que es su sitio
			
			Estas percepciones se ven afectadas por el tiempo real de carga de la página, el tiempo de inactividad, la capacidad de respuesta a la interacción del usuario y la fluidez del desplazamiento y otras animaciones.
			
			Analizamos las diversas métricas de carga, animación y capacidad de respuesta, junto con las mejores prácticas para mejorar la percepción del usuario, si no los tiempos reales.
			
			
		4. Imágenes
			
			El fruto más fácil del rendimiento web es a menudo la optimización de los medios.
			
			Es posible servir diferentes archivos multimedia según la capacidad, el tamaño y la densidad de píxeles de cada agente de usuario.
			
			Analizamos el impacto que tienen las imágenes en el rendimiento y los métodos para reducir la cantidad de bytes enviados por imagen.
			
			
		5. Vídeo
			
			Este artículo, analizamos el impacto que tiene el contenido de vídeo en el rendimiento y cubrimos consejos como eliminar pistas de audio de vídeos de fondo que pueden mejorar el rendimiento.

		
		6. Optimización del rendimiento de JavaScript

			JavaScript, cuando se usa correctamente, puede permitir experiencias web interactivas e inmersivas, o puede perjudicar significativamente el tiempo de descarga, el tiempo de renderizado, el rendimiento de la aplicación, la duración de la batería y la experiencia del usuario.
			
			Mejores prácticas de JavaScript que se deben considerar para garantizar que incluso el contenido complejo tenga el mayor rendimiento posible.
			
		
		7. Optimización del rendimiento HTML
			
			Algunos atributos y el orden de origen de su marcado pueden afectar el rendimiento de su sitio web
			
			Al minimizar la cantidad de nodos DOM y asegurarse de que se utilice el mejor orden y atributos para incluir contenido como estilos, secuencias de comandos, medios y secuencias de comandos de terceros, puede mejorar drásticamente la experiencia del usuario.
			
			Analiza en detalle cómo se puede utilizar HTML para garantizar el máximo rendimiento.
			
		
		8. Optimización del rendimiento CSS
			
			CSS puede ser un enfoque de optimización menos importante para mejorar el rendimiento, pero hay algunas características de CSS que impactan el rendimiento más que otras.
			
			Algunas propiedades de CSS que afectan el rendimiento y sugerimos formas de manejar los estilos para garantizar que el rendimiento no se vea afectado negativamente.
			
		
		9. Caso de negocio para el rendimiento web
	
			Hay muchas cosas que un desarrollador puede hacer para mejorar el rendimiento, pero ¿qué tan rápido es lo suficientemente rápido? ¿Cómo se puede convencer a los poderes fácticos de la importancia de estos esfuerzos?

			Una vez optimizado, ¿cómo puede asegurarse de que la hinchazón no vuelva a aparecer?
			
			Analiza cómo convencer a la administración, desarrollar una cultura de desempeño y un presupuesto de desempeño, y presentamos formas de garantizar que las regresiones no se cuelan en su código base.
			
			
	
# Web Performance

	El rendimiento web consiste en hacer que los sitios web sean rápidos, incluido hacer que los procesos lentos parezcan rápidos
	
	Es importante para los visitantes del sitio y para sus objetivos comerciales.
	
	
	Los sitios con mal rendimiento tardan en mostrarse y responder a las entradas.
	
	Los sitios con mal rendimiento tardan en mostrarse y responder a las entradas.
	
	En el peor de los casos, un mal rendimiento hace que el contenido sea completamente inaccesible
	
	Un buen objetivo para el rendimiento web es que los usuarios no noten el rendimiento.
	
	Si bien la percepción individual del rendimiento del sitio es subjetiva, la carga y la representación se pueden medir
	
	Es posible que un buen rendimiento no sea obvio para la mayoría de los visitantes del sitio, pero la mayoría reconocerá inmediatamente un sitio lento
	
	
	La importancia del rendimiento: 
		
		El rendimiento web (y las mejores prácticas asociadas) son vitales para que los visitantes de su sitio web tengan una buena experiencia
		
		En cierto sentido, el rendimiento web puede considerarse un subconjunto de la accesibilidad web
		
		Tanto con el rendimiento como con la accesibilidad, se considera qué dispositivo está utilizando un visitante del sitio para acceder al sitio y la velocidad de conexión del dispositivo.
		
		
		Como ejemplo, considere la experiencia de carga de CNN.com,

		al momento tenía más de 400 solicitudes HTTP con un tamaño de archivo de más de 22,6 MB.
		
		
		Imagínese cargar esto en una computadora de escritorio conectada a una red de fibra óptica.
		
		Esto parecería relativamente rápido y el tamaño del archivo sería en gran medida irrelevante.


		Imagínese cargar ese mismo sitio usando datos móviles conectados en un iPad de nueve años mientras viaja a casa en transporte público.
		
		El mismo sitio tardará en cargarse y posiblemente esté al borde de la inutilización dependiendo de la cobertura del celular.
		
		Es posible que te rindas antes de que termine de cargarse.
		
		
		Imagínese cargar ese mismo sitio en un dispositivo de bajo costo en un área con cobertura limitada.
		
		El sitio tardará mucho en cargarse (si es que se carga), los scripts de bloqueo posiblemente se agoten y el impacto adverso en la CPU podría causar fallas del navegador si se carga.
		
		
		Un sitio de 22,6 MB podría tardar hasta 83 segundos en cargarse en una red 3G, con DOMContentLoaded (es decir, la estructura HTML base del sitio) en 31,86 segundos.

		
		Y no es sólo el tiempo que lleva la descarga el problema principal.
		
		En algunas regiones, las conexiones a Internet se facturan por megabyte, lo que hace que las descargas de gran tamaño sean prohibitivamente costosas.
		
		Nuestro ejemplo de experiencia de 22,6 MB en CNN.com costaría una parte significativa de la asignación diaria de datos móviles de un usuario o incluso generaría cargos elevados en ciertos planes de roaming internacional.
		
		https://whatdoesmysitecost.com/
	
	
	Mejorar las tasas de conversión:	
	
		Reducir el tiempo de descarga y procesamiento de un sitio mejora las tasas de conversión y la retención de usuarios.

		Una tasa de conversión es la tasa a la que los visitantes del sitio realizan una acción medida o deseada.
		
		Por ejemplo, esto podría ser realizar una compra, leer un artículo o suscribirse a un boletín informativo.
		
		La acción que se mide como tasa de conversión depende de los objetivos comerciales del sitio web.

		
		El rendimiento afecta la conversión; mejorar el rendimiento web mejora la conversión.
		
		Los visitantes del sitio esperan que el sitio se cargue en dos segundos o menos; a veces incluso menos en el móvil (donde suele tardar más).

		Estos mismos visitantes del sitio comienzan a abandonar los sitios lentos a los 3 segundos.


		La velocidad a la que se carga un sitio es un factor.
		
		Si el sitio tarda en reaccionar a la interacción del usuario o parece deficiente, esto hace que los visitantes del sitio pierdan interés y confianza.
		
		
		Ejemplos:
			
			Tokopedia redujo el tiempo de procesamiento de 14 segundos a 2 segundos para conexiones 3G y registró un aumento del 19 % en visitantes, un aumento del 35 % en sesiones totales, un aumento del 7 % en nuevos usuarios, un aumento del 17 % en usuarios activos y un aumento del 16 % en sesiones por usuario
			
			La reconstrucción de las páginas de Pinterest para mejorar el rendimiento resultó en una disminución del 40 % en el tiempo de espera, un aumento del 15 % en el tráfico de SEO y un aumento del 15 % en la tasa de conversión para registrarse.
		
		
		Para crear sitios web y aplicaciones que la gente quiera utilizar; Para atraer y retener visitantes del sitio, es necesario crear un sitio accesible que proporcione una buena experiencia de usuario.
		
		La creación de sitios web requiere HTML, CSS y JavaScript, y normalmente incluye tipos de archivos binarios como imágenes y vídeos. 
		
		Las decisiones que tome y las herramientas que elija mientras construye su sitio pueden afectar en gran medida el rendimiento del trabajo terminado.
		
		
		El buen desempeño es un activo. El mal desempeño es una responsabilidad.
		
		La velocidad del sitio afecta directamente las tasas de rebote, la conversión, los ingresos, la satisfacción del usuario y la clasificación en los motores de búsqueda.
		
		Se ha demostrado que los sitios con buen rendimiento aumentan la retención de visitantes y la satisfacción del usuario.
		
		Se ha demostrado que el contenido lento provoca el abandono del sitio, y algunos visitantes lo abandonan para nunca regresar. 
		
		Reducir la cantidad de datos que pasan entre el cliente y el servidor reduce los costos para todas las partes.
		
		Reducir el tamaño de los archivos multimedia y HTML/CSS/JavaScript reduce tanto el tiempo de carga como el consumo de energía de un sitio.
		
		
		El seguimiento del rendimiento es importante.
		
		Múltiples factores, incluida la velocidad de la red y las capacidades del dispositivo, afectan el rendimiento.
		
		No existe una métrica de desempeño única; y diferentes objetivos comerciales pueden significar que diferentes métricas sean más relevantes para los objetivos del sitio o de la organización que respalda.
		
		¡Cómo se percibe el rendimiento de su sitio es la experiencia del usuario!
		
		

# Componentes del rendimiento web
	
	El rendimiento web consiste en hacer que los sitios web sean rápidos, incluido hacer que los procesos lentos parezcan rápidos.
	
	¿El sitio se carga rápidamente, permite al usuario comenzar a interactuar con él rápidamente y ofrece comentarios tranquilizadores si algo tarda en cargarse (por ejemplo, un control giratorio de carga)?
	
	¿El desplazamiento y las animaciones son fluidos?
	
	Se introduce el rendimiento web objetivo y medible (en comparación con la percibida/subjetiva), analizando qué tecnologías, técnicas y herramientas están involucradas en la optimización web.
	
	
	Rendimiento web: 
		
		El rendimiento web es la medición objetiva y la experiencia percibida del usuario de un sitio web o aplicación.
		
		
		Reducir el tiempo de carga general: 
		
			¿Cuánto tiempo tardan los archivos necesarios para renderizar el sitio web y descargarlos en la computadora del usuario?
			
			Esto tiende a verse afectado por la latencia, el tamaño de los archivos, cuántos archivos hay y otros factores adicionales.
			
			Una estrategia general es hacer que sus archivos sean lo más pequeños posible, reducir la cantidad de solicitudes HTTP realizadas tanto como sea posible y emplear técnicas de carga inteligentes (como la precarga) para que los archivos estén disponibles antes.
			
			Preload. 
			
			
		Hacer que el sitio sea utilizable lo antes posible:
		
			Esto básicamente significa cargar los recursos de su sitio web en un orden razonable para que el usuario pueda comenzar a usarlo realmente rápidamente. 
			
			Cualquier otro recurso puede continuar cargándose en segundo plano mientras el usuario continúa con sus tareas principales y, a veces, solo cargamos recursos cuando realmente son necesarios (esto se denomina carga diferida).
			
			La medida de cuánto tiempo le toma al sitio llegar a un inicio utilizable después de haber comenzado a cargarse se llama tiempo para interactuar.
			
			Laziloading.
			
			
		Suavidad e interactividad:
			
			¿La aplicación resulta confiable y placentera de usar? ¿El desplazamiento es fluido? ¿Se puede hacer clic en los botones? ¿Las ventanas emergentes se abren rápidamente y se animan suavemente mientras lo hacen?
			
			Hay muchas mejores prácticas a considerar para hacer que las aplicaciones se sientan fluidas, por ejemplo, usar animaciones CSS en lugar de JavaScript para la animación y minimizar la cantidad de repintados que requiere la interfaz de usuario debido a cambios en el DOM.
			
			
		Rendimiento percibido:
		
			La velocidad que le parece un sitio web al usuario tiene un mayor impacto en la experiencia del usuario que la velocidad real del sitio web.
			
			La forma en que un usuario percibe su desempeño es tan importante, o quizás más, que cualquier estadística objetiva, pero es subjetiva y no tan fácilmente mensurable.
			
			El rendimiento percibido es la perspectiva del usuario, no una métrica. Incluso si una operación va a llevar mucho tiempo (debido a la latencia o lo que sea), es posible mantener al usuario interesado mientras espera mostrándole una rueda de carga o una serie de sugerencias y consejos útiles (o chistes, o lo que sea, cualquier otra cosa que creas que podría ser apropiada).
			
			Este enfoque es mucho mejor que simplemente no mostrar nada, lo que hará que parezca que está tardando mucho más y posiblemente haga que los usuarios piensen que no funciona y se rindan.


		Mediciones de rendimiento:
		
			El rendimiento web implica medir las velocidades reales y percibidas de una aplicación, optimizarla cuando sea posible y luego monitorear el rendimiento para garantizar que lo que ha optimizado permanezca optimizado. 
			
			Esto implica una serie de métricas (indicadores mensurables que pueden indicar el éxito o el fracaso) y herramientas para medir esas métricas, que analizaremos a lo largo de este módulo.
			
			
		Muchas características afectan el rendimiento, incluida la latencia, el tamaño de la aplicación, la cantidad de nodos DOM, la cantidad de solicitudes de recursos realizadas, el rendimiento de JavaScript, la carga de la CPU y más.
		
		Es importante minimizar los tiempos de carga y respuesta, y agregar funciones adicionales para ocultar la latencia haciendo que la experiencia sea lo más disponible e interactiva posible, lo antes posible, mientras se carga de forma asincrónica en las partes finales más largas de la experiencia.
		
		El rendimiento web incluye mediciones objetivas como el tiempo de carga, fotogramas por segundo y tiempo de interacción, y experiencias subjetivas de cuánto tiempo tardó el contenido en cargarse.
		
		
	Renderización del contenido: 
		
		Para comprender de manera efectiva el rendimiento web, los problemas detrás de él y las principales áreas temáticas que mencionamos anteriormente, realmente debe comprender algunos detalles sobre cómo funcionan los navegadores.
		
		
		Cómo funciona el navegador:
			
			Cuando solicita una URL y presiona Intro/Retorno, el navegador descubre dónde está el servidor que contiene los archivos de ese sitio web, establece una conexión con él y solicita los archivos.
			
		
		Orden de origen:
			
			El orden de origen del archivo de índice HTML puede afectar significativamente el rendimiento.
			
			La descarga de activos adicionales vinculados desde el archivo de índice es generalmente secuencial, según el orden de origen, pero esto puede manipularse y definitivamente debe optimizarse, teniendo en cuenta que algunos recursos bloquean descargas adicionales hasta que su contenido se analiza y ejecuta.
			
			 Populating the pages.
			 
		
		Ruta crítica:
				
			Este es el proceso que utiliza el navegador para construir el documento web una vez que los archivos se han descargado del servidor.
			
			El navegador sigue un conjunto de pasos bien definido y la optimización de la ruta de representación crítica para priorizar la visualización de contenido relacionado con la acción actual del usuario conducirá a mejoras significativas en el tiempo de representación del contenido.
			
			Critical rendering path.
			
		
		El modelo de objetos del documento:
			
			DOM, es una estructura de árbol que representa el contenido y los elementos de su HTML como un árbol de nodos.
			
			Esto incluye todos los atributos HTML y las relaciones entre los nodos.
			
			La manipulación extensa del DOM después de que se hayan cargado las páginas (por ejemplo, agregar, eliminar o mover nodos) puede afectar el rendimiento, por lo que vale la pena comprender cómo funciona el DOM y cómo se pueden mitigar dichos problemas. 
			
			 Document Object Model.
			 
			 
		Latencia: 
			
			Es el tiempo que tardan los activos de su sitio web en viajar desde el servidor hasta la computadora del usuario.
			
			Hay una sobrecarga involucrada en el establecimiento de conexiones TCP y HTTP, y cierta latencia inevitable al enviar los bytes de solicitud y respuesta de un lado a otro a través de la red, pero hay ciertas formas de reducir la latencia
			
			(por ejemplo, reducir la cantidad de solicitudes HTTP que realiza descargando menos archivos, usar una CDN para hacer que su sitio tenga un rendimiento más universal en todo el mundo y usar HTTP/2 para servir archivos de manera más eficiente desde el servidor).
			
			Understanding Latency.
	
			

# Rendimiento Percibido
	
	El rendimiento percibido es una medida subjetiva del rendimiento, la capacidad de respuesta y la confiabilidad del sitio web.
	
	Qué tan rápido le parece al usuario un sitio web. 
	
	Es más difícil de cuantificar y medir que la velocidad real de operación, pero quizás incluso más importante.

	Se presenta una introducción a los factores que afectan el desempeño percibido, junto con una serie de herramientas para evaluar y mejorar la percepción.
	
	
	La percepción de la rapidez (y fluidez) con la que las páginas se cargan y responden a la interacción del usuario es incluso más importante que el tiempo real necesario para obtener los recursos.
	
	Si bien es posible que no pueda hacer que su sitio funcione físicamente más rápido, es posible que pueda mejorar la sensación de rapidez para sus usuarios.

	
	Una buena regla general para mejorar el rendimiento percibido es que normalmente es mejor proporcionar una respuesta rápida y actualizaciones de estado periódicas que hacer que el usuario espere hasta que una operación se complete por completo (antes de proporcionar cualquier información).
	
	Por ejemplo, al cargar una página es mejor mostrar el texto cuando llega en lugar de esperar todas las imágenes y otros recursos.
	
	Aunque el contenido no se haya descargado por completo, el usuario puede ver que algo está sucediendo y puede comenzar a interactuar con el contenido.
	
	
	El tiempo parece pasar más rápido para los usuarios que participan, distraen o entretienen activamente que para aquellos que esperan pasivamente que algo suceda.
	
	Siempre que sea posible, involucre e informe activamente a los usuarios que están esperando que se complete una tarea.
	
	
	De manera similar, es mejor mostrar una "animación de carga" tan pronto como un usuario hace clic en un enlace para realizar una operación de larga duración.
	
	Si bien esto no cambia el tiempo necesario para completar la operación, el sitio se siente más receptivo y el usuario sabe que está trabajando en algo útil.
	
	
	Métricas de rendimiento:
		
		No existe una métrica o prueba única que pueda ejecutarse en un sitio para evaluar cómo "se siente" un usuario.
		
		Sin embargo, hay una serie de métricas que pueden ser "indicadores útiles".
		
		
		First paint:
			
			El momento de inicio de la primera operación de pintura.
			
			Tenga en cuenta que es posible que este cambio no sea visible; puede ser una simple actualización del color de fondo o algo incluso menos notorio.


		First Contentful Paint (FCP):
			
			El tiempo hasta la primera representación significativa (por ejemplo, de texto, imagen de primer plano o de fondo, lienzo o SVG, etc.). 
			
			Tenga en cuenta que este contenido no es necesariamente útil o significativo.


		First Meaningful Paint (FMP):
			
			La hora a la que se muestra el contenido útil en la pantalla.

		
		Largest Contentful Paint (LCP):
		
			El tiempo de renderizado del elemento de contenido más grande visible en la ventana gráfica.


		Speed index:	
			
			    Mide el tiempo promedio que tardan en pintarse los píxeles de la pantalla visible.
			    
		
		Time to interactive
		
			Tiempo hasta que la interfaz de usuario esté disponible para la interacción del usuario (es decir, finalice la última tarea larga del proceso de carga)
			
			
	Mejorando el rendimiento:	
	
		Consejos y trucos que le ayudarán a mejorar el rendimiento percibido
		
		
		Minimizar la carga inicial:
			
			Para mejorar el rendimiento percibido, minimice la carga de la página original.
			
			En otras palabras, primero descargue el contenido con el que el usuario va a interactuar inmediatamente y descargue el resto después "en segundo plano".
			
			La cantidad total de contenido descargado puede aumentar, pero el usuario sólo espera una cantidad muy pequeña, por lo que la descarga parece más rápida.
			
			
			Separe la funcionalidad interactiva del contenido y cargue texto, estilos e imágenes visibles en la carga inicial.
			
			Retraso o carga diferida de imágenes o scripts que no se utilizan o no son visibles en la carga inicial de la página. 
			
			Además, debe optimizar los activos que carga.
			
			Las imágenes y los vídeos deben entregarse en el formato óptimo, comprimidos y en el tamaño correcto.
			
		
		Evitar saltos de contenido y otros reflujos:
			
			Las imágenes u otros recursos que hacen que el contenido se desplace hacia abajo o salte a una ubicación diferente, como la carga de anuncios de terceros, pueden hacer que la página parezca que todavía se está cargando y es perjudicial para el rendimiento percibido.
			
			El reflujo de contenido es especialmente malo para la experiencia del usuario cuando no se inicia mediante la interacción del usuario.
			
			Si algunos recursos tardarán más en cargarse que otros, y los elementos se cargarán después de que otro contenido ya se haya pintado en la pantalla, planifique con anticipación y deje espacio en el diseño para que el contenido no salte ni cambie de tamaño, especialmente después de la El sitio se ha vuelto interactivo.
		
		
		Evite retrasos en los archivos de fuentes:
			
			La elección de la fuente es importante. 
			
			Seleccionar una fuente adecuada puede mejorar enormemente la experiencia del usuario.
			
			Desde el punto de vista del rendimiento percibido, la "importación de fuentes subóptimas" puede provocar parpadeos al aplicar estilo al texto o al recurrir a otras fuentes.

			
			Haga que las fuentes alternativas tengan el mismo tamaño y peso para que cuando las fuentes se carguen, el cambio de página sea menos notorio
			
	
		Elementos interactivos:
			
			Asegúrese de que los elementos interactivos visibles sean siempre interactivos y responsivos.
			
			Si los elementos de entrada son visibles, el usuario debería poder interactuar con ellos sin demoras.
			
			Los usuarios sienten que algo está retrasado cuando tardan más de 50 ms en reaccionar.
			
			Sienten que una página se comporta mal cuando el contenido se repinta a una velocidad inferior a 16,67 ms (o 60 fotogramas por segundo) o se repinta a intervalos desiguales.

			
			Haga que cosas como la escritura anticipada sean una mejora progresiva: use CSS para mostrar el modo de entrada, JS para agregar el autocompletado cuando esté disponible
			
		
		Haga que los iniciadores de tareas parezcan más interactivos
			
			Realizar una solicitud de contenido al presionar una tecla en lugar de esperar a que se active puede reducir el tiempo de carga percibido del contenido en 200 ms. 
			
			Agregar una animación interesante pero discreta de 200 ms a ese evento de tecla puede reducir otros 200 ms de la carga percibida.
			
			No estás ahorrando 400 ms de tiempo, pero el usuario no siente que está esperando contenido hasta, bueno, hasta que esté esperando contenido.
			
		
		Al reducir el tiempo que un usuario tiene que esperar para recibir contenido útil y mantener el sitio receptivo y atractivo, los usuarios sentirán que el sitio funciona mejor; incluso el tiempo real para cargar recursos sigue siendo el mismo.
		
		

# Imágenes
		
	Los medios, es decir, imágenes y vídeos, representan más del 70% de los bytes descargados en un sitio web medio.
	
	En términos de rendimiento de descarga, eliminar medios y reducir el tamaño del archivo es la fruta más fácil.
	
	Se analiza la optimización de imágenes y videos para mejorar el rendimiento web.
	
	Una introducción de alto nivel a la optimización de la entrega multimedia en la web, que cubre principios y técnicas generales.
	
	Para más detalles https://web.dev/learn/images.
	
	
	Optimización multimedia:
	
		Para un sitio web promedio, el 51% de su ancho de banda proviene de imágenes, seguido del video con un 25%, por lo que es seguro decir que es importante abordar y optimizar su contenido multimedia
	
	
		Debe ser considerado con el uso de datos.
			
		Muchas personas tienen planes de datos limitados o incluso de pago por uso, donde literalmente pagan por megabyte.
		
		Este tampoco es un problema de los mercados emergentes.
		
		En 2018, el 24 % del Reino Unido todavía utiliza el sistema de pago por uso.
		
		
		También hay que tener en cuenta la memoria, ya que muchos dispositivos móviles tienen una RAM limitada.
		
		Es importante recordar que cuando se descargan imágenes, es necesario almacenarlas en la memoria.
		
	
	Optimizar imágenes: 
		
		A pesar de ser el mayor consumidor de ancho de banda, el impacto de la descarga de imágenes en el rendimiento percibido es mucho menor de lo que muchos esperan (principalmente porque el contenido del texto de la página se descarga inmediatamente y los usuarios pueden ver las imágenes renderizadas a medida que llegan).
		
		Sin embargo, para una buena experiencia de usuario sigue siendo importante que el visitante pueda verlos lo antes posible.
		
	
	Estategia de carga: 
			
		Una de las mayores mejoras en la mayoría de los sitios web es la carga diferida de imágenes debajo de la página, en lugar de descargarlas todas en la carga inicial de la página, independientemente de si un visitante se desplaza para verlas o no.
		
		Los navegadores proporcionan esto de forma nativa a través del atributo loading="lazy" en el elemento <img>, y también hay muchas bibliotecas de JavaScript del lado del cliente que pueden hacer esto.

		
		Más allá de cargar un subconjunto de imágenes, debes fijarte en el formato de las imágenes mismas:
		
		¿Está cargando los formatos de archivo más óptimos?

		¿Has comprimido bien las imágenes?

		¿Estás cargando los tamaños correctos?
		
		
	Formato más óptimo: 
			
		El formato de archivo óptimo normalmente depende del carácter de la imagen

		Para obtener información general sobre los tipos de imágenes, consultar guía de formato y tipo de archivo de imagen.
		
		
		El formato SVG es más apropiado para imágenes que tienen pocos colores y que no son fotorrealistas.
		
		Esto requiere que la fuente esté disponible en formato de gráfico vectorial. 
		
		Si dicha imagen solo existiera como mapa de bits, entonces PNG sería el formato alternativo a elegir. 
		
		Ejemplos de este tipo de motivos son logotipos, ilustraciones, gráficos o íconos
		
		Ambos formatos admiten transparencia.
		
		
		Los PNG se pueden guardar con tres combinaciones de salida diferentes:

		Color de 24 bits + transparencia de 8 bits:
			
			Ofrece precisión a todo color y una transparencia suave a expensas del tamaño.
			
			Probablemente quieras evitar esta combinación en favor de WebP (
		
		Color de 8 bits + transparencia de 8 bits:
			
			No ofrece más de 255 colores pero mantiene transparencias suaves.
			
			El tamaño no es demasiado grande.
			
			Esos son los PNG que probablemente quieras.

		Color de 8 bits + transparencia de 1 bit:
			
			No ofrece más de 255 colores y simplemente ofrece transparencia total o nula por píxel, lo que hace que los bordes de la transparencia parezcan duros e irregulares.
	
			El tamaño es pequeño pero el precio es fidelidad visual.
			
		
		Una buena herramienta en línea para optimizar SVG es SVGOMG. Para PNG hay ImageOptim en línea o Squoosh.
			
			
		En el caso de motivos fotográficos que no presentan transparencias, existe una gama mucho más amplia de formatos para elegir.
		
		Si quiere ir a lo seguro, opte por archivos JPEG progresivos bien comprimidos
		
		Los JPEG progresivos, a diferencia de los JPEG normales, se procesan progresivamente (de ahí el nombre)
		
		Significa que el usuario ve una versión de baja resolución que gana claridad a medida que la imagen se descarga, en lugar de que la imagen se cargue con resolución completa de arriba a abajo o incluso solo, ncluso solo. renderizado una vez descargado por completo.
		
		Un buen compresor para estos sería MozJPEG, p.e. disponible para su uso en la herramienta de optimización de imágenes en línea Squoosh.
		
		Un ajuste de calidad del 75% debería producir resultados decentes.
		
		
		Otros formatos mejoran las capacidades de JPEG en cuanto a compresión, pero no están disponibles en todos los navegadores:
		
		WebP:
			
			Excelente opción tanto para imágenes como para imágenes animadas. 
			
			WebP ofrece una compresión mucho mejor que PNG o JPEG con soporte para mayores profundidades de color, fotogramas animados, transparencia, etc. (pero no visualización progresiva). 
			
			Compatible con todos los navegadores principales, excepto Safari 14 en el escritorio macOS Big Sur o anterior.

			A pesar de que Apple anunció compatibilidad con WebP en Safari 14, las versiones de Safari anteriores a 16.0 no muestran imágenes .webp correctamente en versiones de escritorio de macOS anteriores a 11/Big Sur.
			
			Safari para iOS 14 muestra imágenes .webp correctamente.


		AVIF:
			
			Buena opción tanto para imágenes como para imágenes animadas debido al alto rendimiento y al formato de imagen libre de regalías (incluso más eficiente que WebP, pero no tan ampliamente compatible).

			Ahora es compatible con Chrome, Edge, Opera y Firefox.
			
			Squoosh es una buena herramienta en línea para convertir formatos de imágenes anteriores a AVIF.
		
		
		JPEG2000:
			
			Alguna vez fue el sucesor de JPEG, pero solo es compatible con Safari.
			
			Tampoco admite visualización progresiva.
			
		
		Dado el limitado soporte para JPEG-XR y JPEG2000, y también teniendo en cuenta los costos de decodificación en la ecuación, el único contendiente serio para JPEG es WebP.
		
		Es por eso que también puedes ofrecer tus imágenes en ese estilo
		
		Esto se puede hacer a través del elemento <picture> con la ayuda de un elemento <source> equipado con un atributo de tipo.

		
		Si todo esto suena un poco complicado o parece demasiado trabajo para su equipo, también existen servicios en línea que puede usar como CDN de imágenes que automatizarán la entrega del formato de imagen correcto sobre la marcha, según el tipo de dispositivo. o navegador solicitando la imagen.
		
		Los más importantes son Cloudinary e Image Engine.

		
		Finalmente, si desea incluir imágenes animadas en su página, sepa que Safari permite el uso de archivos de video dentro de los elementos <img> y <picture>.
		
		Estos también le permiten agregar un WebP animado para todos los demás navegadores modernos.
		
		```
		<picture>
		  <source type="video/mp4" src="giphy.mp4" />
		  <source type="image/webp" src="giphy.webp" />
		  <img src="giphy.gif" alt="A GIF animation" />
		</picture>

		```
		
	
	Tamaño óptimo: 	
	
		En la entrega de imágenes, el enfoque de "talla única" no dará los mejores resultados, lo que significa que para pantallas más pequeñas querrá mostrar imágenes con resolución más pequeña y viceversa para pantallas más grandes.
		
		Además de eso, también querrás ofrecer imágenes de mayor resolución a aquellos dispositivos que cuentan con una pantalla de DPI alto (por ejemplo, "Retina").
		
		Entonces, además de crear muchas variantes de imágenes intermedias, también necesita una forma de entregar el archivo correcto al navegador correcto. 
		
		Ahí es donde necesitaría actualizar sus elementos <picture> y <source> con atributos de medios y/o tamaños.
		
		
		Dos efectos interesantes a tener en cuenta con respecto a las pantallas con altos ppp son los siguientes:

		Con una pantalla de DPI alto:
			
			Los humanos detectarán artefactos de compresión mucho más tarde, lo que significa que para las imágenes destinadas a estas pantallas se puede aumentar la compresión más allá de lo habitual.
		
		Sólo unas pocas personas pueden detectar un aumento en la resolución más allá de 2× DPI:
			
			Significa que no es necesario mostrar imágenes con una resolución superior a 2×.

		
	Controlar la prioridad (y el orden) de la descarga de imágenes:
		
		Mostrar las imágenes más importantes a los visitantes antes que las menos importantes puede mejorar la percepción del rendimiento.
		
		Lo primero que debe verificar es que las imágenes de su contenido usen elementos <img> o <picture>.
		
		Que sus imágenes de fondo estén definidas en CSS con background-image: a las imágenes a las que se hace referencia en elementos <img> se les asigna una prioridad de carga más alta que a las imágenes de fondo.

		
		En segundo lugar, con la adopción de sugerencias de prioridad, puede controlar aún más la prioridad agregando un atributo fetchPriority a sus etiquetas de imagen.
		
		Un caso de uso de ejemplo para sugerencias de prioridad en imágenes son los carruseles donde la primera imagen tiene mayor prioridad que las siguientes.
		
		
	Estrategia de renderizado: evitar bloqueos al cargar imágenes:
		
		Como las imágenes se cargan de forma asincrónica y continúan cargándose después de la primera pintura, si sus dimensiones no están definidas antes de la carga, pueden provocar reflujos en el contenido de la página.
		
		Por ejemplo, cuando el texto se desplaza hacia abajo en la página debido a la carga de imágenes.
		
		Por esta razón, es importante establecer los atributos de ancho y alto para que el navegador pueda reservarles espacio en el diseño.

		
		Cuando los atributos de ancho y alto de una imagen se incluyen en un elemento HTML <img>, el navegador puede calcular la relación de aspecto de la imagen antes de cargarla.
		
		Esta relación de aspecto se utiliza para reservar el espacio necesario para mostrar la imagen, reduciendo o incluso evitando un cambio de diseño cuando la imagen se descarga y se pinta en la pantalla.
		
		Reducir el cambio de diseño es un componente importante de una buena experiencia de usuario y rendimiento web.

		
		Los navegadores comienzan a mostrar el contenido a medida que se analiza el HTML, a menudo antes de que se descarguen todos los recursos, incluidas las imágenes.
		
		La inclusión de dimensiones permite a los navegadores reservar un cuadro de marcador de posición del tamaño correcto para que aparezca cada imagen cuando se cargan las imágenes al renderizar la página por primera vez.
		
		
		Sin los atributos de ancho y alto, no se crea ningún espacio de marcador de posición, lo que genera un bloqueo notable o un cambio de diseño en la página cuando la imagen se carga después de renderizarse la página.
		
		El reflujo y el repintado de páginas son problemas de rendimiento y usabilidad.
		
		La métrica CLS mide el bloqueo en la carga de la página, o cuánto contenido visible cambia en la ventana gráfica y en qué medida.
		
		Los principales culpables de un CLS incorrecto son los elementos reemplazados sin dimensiones declaradas que vuelven a fluir cuando se carga el activo, incluidas imágenes, anuncios, incrustaciones e iframes sin tamaño o relación de aspecto y fuentes web.


		En diseños responsivos, cuando un contenedor es más estrecho que una imagen, generalmente se usa el siguiente CSS para evitar que las imágenes se salgan de sus contenedores:
		
		```
		img {
		  max-width: 100%;
		  height: auto;
		}

		```
		
		Si bien es útil para diseños responsivos, esto causa bloqueos y CLS deficiente cuando no se incluye la información de ancho y alto, como si no hubiera información de alto presente cuando se analiza el elemento <img> pero antes de que la imagen se haya cargado, este CSS efectivamente ha establecido el alto a 0.
		
		Cuando la imagen se carga después de que la página se haya mostrado inicialmente en la pantalla, la página vuelve a fluir y se vuelve a pintar creando un cambio de diseño a medida que crea espacio para la altura recién determinada.
		
		
		Los navegadores tienen un mecanismo para dimensionar las imágenes antes de cargar la imagen real.

		Cuando un elemento <img>, <video> o <input type="button"> tiene atributos de ancho y alto establecidos, su relación de aspecto se calcula antes del tiempo de carga y está disponible para el navegador, utilizando las dimensiones proporcionadas.


		Luego, la relación de aspecto se usa para calcular la altura y, por lo tanto, se aplica el tamaño correcto al elemento <img>, lo que significa que el bloqueo antes mencionado no ocurrirá o será mínimo si las dimensiones enumeradas no son completamente precisas cuando se carga la imagen.
		
		
		La relación de aspecto se utiliza para reservar espacio sólo en la carga de la imagen.
		
		Una vez cargada la imagen, se utiliza la relación de aspecto intrínseca de la imagen cargada o el valor de la propiedad de relación de aspecto en lugar de la relación de aspecto de los atributos.
		
		Esto garantiza que se muestre con la relación de aspecto correcta incluso si las dimensiones de los atributos no son precisas.


		Si bien las mejores prácticas para desarrolladores de la última década pueden haber recomendado omitir los atributos de ancho y alto de una imagen en un <img> HTML.
		
		Debido al mapeo de proporciones, incluir estos dos atributos se considera una mejor práctica para desarrolladores.
		
		Para cualquier imagen de fondo, es importante que establezca un valor de color de fondo para que el contenido superpuesto siga siendo legible antes de que se descargue la imagen.
		

# Vídeo 

	Las imágenes y vídeos, representan más del 70% de los bytes descargados en un sitio web promedio.
	
	Ya hemos echado un vistazo a la optimización de imágenes.
	
	
	Óptimización multimedia: 
		
		Para un sitio web promedio, el 25% del ancho de banda proviene del video. 
		
		La optimización del vídeo tiene el potencial de generar grandes ahorros de ancho de banda que se traducen en un mejor rendimiento del sitio web.
		
	
	Ótimización de la entrega de vídeo:
			
		comprimir todos los videos

		comprimir todos los videos
		
		optimizar el orden <source>

		eliminar audio de video silenciado
		
		optimizar la precarga de video

		considerar streaming
		
	
	Comprimir todos los videos:	
	
		La mayoría de los trabajos de compresión de vídeo comparan fotogramas adyacentes dentro de un vídeo, con la intención de eliminar detalles que son idénticos en ambos fotogramas. 
		
		Comprima el video y expórtelo a múltiples formatos de video, incluidos WebM y MPEG-4/H.264.

		Su software de edición de video probablemente tenga una función para reducir el tamaño del archivo.
		
		De lo contrario, existen herramientas en línea, como FFmpeg
		
		Codifican, decodifican, convierten y realizan otras funciones de optimización.
		
		
	Óptimizar el orden <source>:
			
		Ordene la fuente de video de menor a mayor.
		
		Por ejemplo, dadas las compresiones de vídeo en los formatos de 10 MB y 12 MB, declara primero el recurso de 10 MB:
		
		```
		<video width="400" height="300" controls="controls">
		  <!-- WebM: 10 MB -->
		  <source src="video.webm" type="video/webm" />
		  <!-- MPEG-4/H.264: 12 MB -->
		  <source src="video.mp4" type="video/mp4" />
		</video>

		```
		
		El navegador descarga el primer formato que comprende.
		
		El objetivo es ofrecer versiones más pequeñas antes que versiones más grandes.
		
		Con la versión más pequeña, asegúrese de que el vídeo más comprimido siga viéndose bien. 
		
		Existen algunos algoritmos de compresión que pueden hacer que el vídeo se vea (malo) como un GIF animado.
	
		Si bien puede parecer que un vídeo de 128 Kb podría proporcionar una mejor experiencia de usuario que una descarga de 10 MB, un vídeo granulado tipo GIF puede reflejar mal la marca o el proyecto.
		
		
	Eliminar audio de video silenciado:
	
		Para hero-video u otros videos sin audio, eliminar el audio es inteligente.
		
		```
		<video autoplay="" loop="" muted playsinline="" id="hero-video">
		  <source src="banner_video.webm" type='video/webm; codecs="vp8, vorbis"' />
		  <source src="web_banner.mp4" type="video/mp4" />
		</video>

		```
		
		Este código de hero-video es común en los sitios web de conferencias y en las páginas de inicio corporativas. 
		
		Incluye un vídeo que se reproduce automáticamente, se repite y está silenciado.
		
		No hay controles, por lo que no hay forma de escuchar audio
		
		El audio suele estar vacío, pero sigue presente y sigue utilizando ancho de banda.
		
		No hay ninguna razón para ofrecer audio con vídeo que siempre esté silenciado.
		
		Eliminar el audio puede ahorrar un 20% del ancho de banda.
		
		
		Dependiendo del software que elijas, es posible que puedas eliminar el audio durante la exportación y la compresión.
		
		De lo contrario, una utilidad gratuita llamada FFmpeg puede hacerlo por usted.
		
		Comando FFmpeg para eliminar audio:
		
		```
		ffmpeg -i original.mp4 -an -c:v copy audioFreeVersion.mp4

		```
		
		
	Óptimizar la precarga de video:

		El atributo de preload tiene tres opciones disponibles
		
			auto, metadata y none.
		
		La configuración predeterminada es metadata.
		
		Estas configuraciones controlan la cantidad de un archivo de video que se descarga con la carga de la página.
		
		Puedes ahorrar datos posponiendo la descarga de vídeos menos populares.

		
		Al configurar preload="none" no se descarga ningún video hasta su reproducción.
		
		Retrasa el inicio, pero ofrece un importante ahorro de datos para vídeos con baja probabilidad de reproducción.
		
		
		Al ofrecer ahorros de ancho de banda más modestos, configurar preload="metadata" puede descargar hasta el 3% del video al cargar la página.
		
		Esta es una opción útil para algunos archivos pequeños o de tamaño moderado.


		Cambiar la configuración a automática le indica al navegador que descargue automáticamente el video completo.
		
		Haga esto sólo cuando sea muy probable la reproducción.
		
		De lo contrario, desperdicia mucho ancho de banda.
		
		
	Considerar streaming:	
		
		Permite entregar al usuario final el tamaño de video y el ancho de banda adecuados (según la velocidad de la red).
		
		De manera similar a las imágenes responsivas, el video del tamaño correcto se envía al navegador, lo que garantiza un inicio rápido del video, un almacenamiento en búfer bajo y una reproducción optimizada.

	
	La optimización del vídeo tiene el potencial de mejorar significativamente el rendimiento del sitio web.

	Los archivos de vídeo son relativamente grandes en comparación con los archivos de otros sitios web y siempre merecen atención.
	
	Explica cómo optimizar el vídeo del sitio web reduciendo el tamaño del archivo, con la configuración de descarga (HTML) y con la transmisión.

	
	
# JavaScrip
	
	Es muy importante considerar cómo utiliza JavaScript en sus sitios web y pensar en cómo mitigar cualquier problema de rendimiento que pueda estar causando.
	
	Si bien las imágenes y los videos representan más del 70% de los bytes descargados para un sitio web promedio, byte por byte.
	
	JavaScript tiene un mayor potencial de impacto negativo en el rendimiento: puede afectar significativamente los tiempos de descarga, el rendimiento de renderizado y el uso de CPU y batería.
	
		
	La primera pregunta que debes responder antes de comenzar a optimizar tu código es "¿qué necesito optimizar?".
	
	Algunos de los consejos y técnicas que se analizan a continuación son buenas prácticas que beneficiarán a casi cualquier proyecto web, mientras que algunos sólo son necesarios en determinadas situaciones.
	
	Intentar aplicar todas estas técnicas en todas partes probablemente sea innecesario y puede ser una pérdida de tiempo.
	 	
	Debes averiguar qué optimizaciones de rendimiento son realmente necesarias en cada proyecto.
	
	
	Para hacer esto, necesita medir el rendimiento de su sitio.
	
	Existen varias formas diferentes de medir el rendimiento, algunas de las cuales implican API de rendimiento sofisticadas.
	
	Sin embargo, la mejor manera de comenzar es aprender a usar herramientas como la red de navegador integrada y las herramientas de rendimiento, para ver qué partes de la carga de la página tardan mucho tiempo y necesitan optimización.
	
	
	Optimizar las descargas de JavaScript: 
		
		El JavaScript de mayor rendimiento y que menos bloqueos puede utilizar es el JavaScript que no utiliza en absoluto. 
		
		Debes utilizar la menor cantidad de JavaScript posible. 
		
		
		No siempre necesitas un Framework: 
			
			Es posible que estés familiarizado con el uso de un framework de JavaScript. 
			
			Si tiene experiencia y confianza en el uso de este marco, y le gustan todas las herramientas que proporciona, entonces podría ser su herramienta de referencia para construir la mayoría de los proyectos.
			
			Sin embargo, los marcos tienen mucho JavaScript.
			
			Si está creando una experiencia bastante estática con pocos requisitos de JavaScript, probablemente no necesite ese framework. 
			
			Es posible que puedas implementar lo que necesitas usando unas pocas líneas de JavaScript estándar.
			
			
		Considere una solución más simple:
			
			Es posible que tenga una solución llamativa e interesante para implementar, pero considere si sus usuarios la apreciarán. 
			
			¿Preferirían algo más simple?
			
			
		Eliminar el código no utilizado:
		
			Esto puede parecer obvio, pero es sorprendente cuántos desarrolladores se olvidan de limpiar la funcionalidad no utilizada que se agregó durante el proceso de desarrollo.
			
			Debe tener cuidado y deliberar sobre lo que se agrega y elimina.
			
			Todos los scripts se analizan, se utilicen o no; por lo tanto, una solución rápida para acelerar las descargas sería deshacerse de cualquier funcionalidad que no se esté utilizando.
			
			Considere también que a menudo sólo utilizará una pequeña cantidad de la funcionalidad disponible en un framework. 
			
			¿Es posible crear una compilación personalizada del framework que solo contenga la parte que necesita?
			
		
		Considere las funciones integradas del navegador: es posible que pueda utilizar una función que el navegador ya tiene, en lugar de crear una propia a través de JavaScript. 
			
				Utilice la validación de formularios integrada del lado del cliente.

				Utilice el reproductor <video> propio del navegador.
				
				Utilice animaciones CSS en lugar de una biblioteca de animaciones JavaScript (consulte también Manejo de animaciones).

			
		También debes dividir tu JavaScript en varios archivos que representen partes críticas y no críticas
			
		Los módulos de JavaScript le permiten hacer esto de manera más eficiente que simplemente usar archivos JavaScript externos separados.


		Luego podrá optimizar estos archivos más pequeños.
		
		La minificación reduce la cantidad de caracteres en su archivo, reduciendo así la cantidad de bytes o el peso de su JavaScript.
		
		Gzipping comprime aún más el archivo y debe usarse incluso si no minimiza su código.
		
		Brotli es similar a Gzip, pero generalmente supera la compresión de Gzip.

		
		Puede dividir y optimizar su código manualmente, pero a menudo un paquete de módulos como Webpack hará un mejor trabajo al respecto.

	
	Manejo del análisis y la ejecución:
		
		Es importante hablar sobre en qué parte del proceso de representación de la página del navegador se maneja JavaScript.
		
		
		Cuando se carga una página web
		
			Una idea muy simplificada:

			1. El HTML generalmente se analiza primero, en el orden en que aparece en la página.

			2. Siempre que se encuentra CSS, se analiza para comprender los estilos que deben aplicarse a la página. 
				
				Durante este tiempo, se empiezan a recuperar los recursos vinculados, como imágenes y fuentes web.

			3. Siempre que se encuentra JavaScript, el navegador lo analiza, lo evalúa y lo ejecuta en la página.

			4. Un poco más adelante, el navegador determina cómo se debe diseñar cada elemento HTML, dado el CSS que se le aplica.

			5. El resultado del estilo luego se pinta en la pantalla.

		
		El paso clave aquí es el Paso 3.
		
		De forma predeterminada, el análisis y la ejecución de JavaScript bloquean el procesamiento.

		Esto significa que el navegador bloquea el análisis de cualquier HTML que aparezca después de encontrar JavaScript, hasta que se haya manejado el script.
		
		Como resultado, el estilo y la pintura también se bloquean.
		
		Esto significa que debe pensar detenidamente no sólo en lo que está descargando, sino también en cuándo y cómo se ejecuta ese código.
		
	
	Cargar assets críticos lo antes posible:
		
		Si un script es realmente importante y le preocupa que esté afectando el rendimiento al no cargarse lo suficientemente rápido, puede cargarlo dentro del <head> del documento:

		```
		<head>
		  ...
		  <script src="main.js"></script>
		  ...
		</head>

		```
		
		Esto funciona bien, pero bloquea el procesamiento.
		
		Una mejor estrategia es utilizar rel="preload" para crear un precargador para JavaScript crítico:
		
		```
		<head>
		  ...
		  <!-- Preload a JavaScript file -->
		  <link rel="preload" href="important-js.js" as="script" />
		  <!-- Preload a JavaScript module -->
		  <link rel="modulepreload" href="important-module.js" />
		  ...
		</head>

		```
		
		Preload <link> recupera el JavaScript lo antes posible, sin bloquear la representación. 

		Luego puedes usarlo donde quieras en tu página:
		
		```
		<!-- Include this wherever makes sense -->
		<script src="important-js.js"></script>

		```	
		
		o dentro de tu script, en el caso de un módulo JavaScript:
		
		```
		import { function } from "important-module.js";
		
		```
		
		La precarga no garantiza que el script se cargará cuando lo incluya, pero sí significa que comenzará a descargarse antes. 
		
		El tiempo de bloqueo de renderizado se seguirá acortando, incluso si no se elimina por completo.

		
	Aplazar la ejecución de JavaScript no crítico:
		
		Por otro lado, debes intentar posponer el análisis y la ejecución de JavaScript no crítico para más adelante, cuando sea necesario.
		
		Cargarlo todo por adelantado bloquea el renderizado innecesariamente.

		
		En primer lugar, puede agregar el atributo async a sus elementos <script>
		
		```
		<head>
		  ...
		  <script async src="main.js"></script>
		  ...
		</head>

		```

		Esto hace que el script se obtenga en paralelo con el análisis DOM, por lo que estará listo al mismo tiempo y no bloqueará la renderización.
		
		
		Hay otro atributo, defer que hace que el script se ejecute después de que se haya analizado el documento, pero antes de activar el evento DOMContentLoaded. 
		
		Esto tiene un efecto similar al async.
		
		
		También puede simplemente no cargar JavaScript hasta que ocurra un evento cuando sea necesario.
		
		Esto podría hacerse mediante secuencias de comandos DOM, por ejemplo.
		
		```
		const scriptElem = document.createElement("script");
		scriptElem.src = "index.js";
		scriptElem.addEventListener("load", () => {
		  // Run a function contained within index.js once it has definitely loaded
		  init();
		});
		document.head.append(scriptElem);

		```
		
		Los módulos JavaScript se pueden cargar dinámicamente usando la función import():
		
		```
		import("./modules/myModule.js").then((module) => {
		  // Do something with the module
		});

		```
		
		
	Desglosar tareas largas:
		
		Cuando el navegador ejecuta su JavaScript, organizará el script en tareas que se ejecutan secuencialmente, como realizar solicitudes de recuperación, generar interacciones y entradas del usuario a través de controladores de eventos, ejecutar animaciones basadas en JavaScript, etc.
		
		La mayor parte de esto sucede en el hilo principal, con excepciones que incluyen JavaScript que se ejecuta en Web Workers.
		
		El hilo principal solo puede ejecutar una tarea a la vez
		
		
		Cuando una sola tarea tarda más de 50 ms en ejecutarse, se clasifica como tarea larga.
		
		Si el usuario intenta interactuar con la página o se solicita una actualización importante de la interfaz de usuario mientras se ejecuta una tarea larga, su experiencia se verá afectada.
		
		Una respuesta esperada o una actualización visual se retrasará, lo que hará que la interfaz de usuario parezca lenta o no responda.
		
		
		Para mitigar este problema, es necesario dividir las tareas largas en tareas más pequeñas.
		
		Esto le da al navegador más oportunidades de realizar un manejo vital de la interacción del usuario o actualizaciones de representación de la interfaz de usuario; el navegador puede potencialmente realizarlas entre cada tarea más pequeña, en lugar de solo antes o después de la tarea larga.
		
		En su JavaScript, puede hacer esto dividiendo su código en funciones separadas. 
		
		Esto también tiene sentido por varias otras razones, como un mantenimiento, una depuración y una redacción de pruebas más sencillos.
		
		```
		function main() {
		  a();
		  b();
		  c();
		  d();
		  e();
		}
		
		```

		Sin embargo, este tipo de estructura no ayuda con el bloqueo del hilo principal.
		
		Dado que las cinco funciones se ejecutan dentro de una función principal, el navegador las ejecuta todas como una única tarea larga.

		
		Para manejar esto, tendemos a ejecutar una función de "rendimiento" periódicamente para que el código ceda al hilo principal.
		
		Esto significa que nuestro código se divide en múltiples tareas, entre cuyas ejecuciones el navegador tiene la oportunidad de manejar tareas de alta prioridad, como la actualización de la interfaz de usuario.
		
		Un patrón común para esta función usa setTimeout() para posponer la ejecución en una tarea separada:
		
		```
		function yield() {
		  return new Promise((resolve) => {
			setTimeout(resolve, 0);
		  });
		}

		```
		
		Esto se puede usar dentro de un patrón de ejecución de tareas como este, para ceder al hilo principal después de que se haya ejecutado cada tarea:
		
		```
		async function main() {
		  // Create an array of functions to run
		  const tasks = [a, b, c, d, e];

		  // Loop over the tasks
		  while (tasks.length > 0) {
			// Shift the first task off the tasks array
			const task = tasks.shift();

			// Run the task
			task();

			// Yield to the main thread
			await yield();
		  }
		}

		```
		
		Para mejorar esto aún más, podemos usar Scheduler.yield() cuando esté disponible para permitir que este código continúe ejecutándose antes que otras tareas menos críticas en la cola:
		
		```
		function yield() {
		  // Use scheduler.yield() if available
		  if ("scheduler" in window && "yield" in scheduler) {
			return scheduler.yield();
		  }

		  // Fall back to setTimeout:
		  return new Promise((resolve) => {
			setTimeout(resolve, 0);
		  });
		}

		```
	
		
	Manejo de animaciones JavaScript:
		
		Las animaciones pueden mejorar el rendimiento percibido, haciendo que las interfaces se sientan más ágiles y haciendo que los usuarios sientan que se está progresando mientras esperan que se cargue una página (cargando controles giratorios, por ejemplo).
		
		Sin embargo, las animaciones más grandes y una mayor cantidad de animaciones requerirán naturalmente más potencia de procesamiento, lo que puede degradar el rendimiento.

		
		Para animaciones DOM esenciales, se recomienda utilizar animaciones CSS siempre que sea posible, en lugar de animaciones JavaScript (la API de animaciones web proporciona una forma de conectarse directamente a animaciones CSS mediante JavaScript).
		
		Usar el navegador para realizar animaciones DOM directamente en lugar de manipular estilos en línea usando JavaScript es mucho más rápido y eficiente.
		
		Para animaciones que no se pueden manejar en JavaScript, por ejemplo, animar un <canvas> HTML, se recomienda utilizar Window.requestAnimationFrame() en lugar de opciones más antiguas como Window.setInterval().
		
		El método requestAnimationFrame() está especialmente diseñado para manejar cuadros de animación de manera eficiente y consistente, para una experiencia de usuario fluida.

		El patrón básico se ve así.
		
		```
		function loop() {
		  // Clear the canvas before drawing the next frame of the animation
		  ctx.fillStyle = "rgb(0 0 0 / 25%)";
		  ctx.fillRect(0, 0, width, height);

		  // Draw objects on the canvas and update their positioning data
		  // ready for the next frame
		  for (const ball of balls) {
			ball.draw();
			ball.update();
		  }

		  // Call requestAnimationFrame to run the loop() function again
		  // at the right time to keep the animation smooth
		  requestAnimationFrame(loop);
		}

		// Call the loop() function once to set the animation running
		loop();

		```
	
	Optimización del rendimiento del evento:	
	
		Los eventos pueden ser costosos de rastrear y manejar para el navegador, especialmente cuando se ejecuta un evento continuamente
		
		Por ejemplo, podrías estar rastreando la posición del mouse usando el evento mousemove para verificar si todavía está dentro de un área determinada de la página:

		```
		function handleMouseMove() {
		  // Do stuff while mouse pointer is inside elem
		}

		elem.addEventListener("mousemove", handleMouseMove);

		```
		
		
		Es posible que estés ejecutando un juego <canvas> en tu página.
		
		Mientras el mouse está dentro del canva 
		
		querrás verificar constantemente el movimiento del mouse y la posición del cursor y actualizar el estado del juego, incluida la puntuación, el tiempo, la posición de todos los sprites, información de detección de colisiones, etc.
		
		Una vez terminado, ya no necesitará hacer todo eso y, de hecho, será un desperdicio de potencia de procesamiento seguir escuchando ese evento.

		
		Por lo tanto, es una buena idea eliminar los detectores de eventos que ya no sean necesarios.
		
		Esto se puede hacer usando removeEventListener():
		
		```
		elem.removeEventListener("mousemove", handleMouseMove);

		```
		
		Otro consejo es utilizar la delegación de eventos siempre que sea posible. 
		
		Cuando tenga algún código para ejecutar en respuesta a que un usuario interactúe con cualquiera de una gran cantidad de elementos secundarios, puede configurar un detector de eventos en su elemento principal.
		
		Los eventos activados en cualquier elemento secundario se transmitirán a su elemento principal, por lo que no es necesario configurar el detector de eventos en cada elemento secundario individualmente. 
		
		Menos oyentes de eventos para realizar un seguimiento significa un mejor rendimiento.


	Consejos para escribir código más eficiente:
		
		Mejores prácticas generales que harán que su código se ejecute de manera más eficiente.

		
		Reduzca la manipulación de DOM:
			
			Acceder y actualizar el DOM es computacionalmente costoso, por lo que debe minimizar la cantidad que hace su JavaScript, especialmente cuando realiza una animación DOM constante (consulte Manejo de animaciones de JavaScript más arriba).

		
		Cambios de DOM por lotes:

			Para cambios de DOM esenciales, debe agruparlos en grupos que se realicen juntos, en lugar de simplemente ejecutar cada cambio individual a medida que ocurre.
			
			Esto puede reducir la cantidad de trabajo que realiza el navegador en términos reales, pero también mejorar el rendimiento percibido.
			
			Puede hacer que la interfaz de usuario se vea más fluida al eliminar varias actualizaciones de una sola vez, en lugar de realizar pequeñas actualizaciones constantemente.
			
			Un consejo útil aquí es: cuando tenga una gran cantidad de HTML para agregar a la página, primero cree el fragmento completo (generalmente dentro de un DocumentFragment) y luego agréguelo todo al DOM de una sola vez, en lugar de agregar cada elemento por separado.

		
		Simplifique su HTML:
			
			Cuanto más simple sea su árbol DOM, más rápido podrá acceder a él y manipularlo con JavaScript.
			
			Piense detenidamente en lo que necesita su interfaz de usuario y elimine los elementos innecesarios.


		Reduzca la cantidad de código en bucle:
			
			Los bucles son costosos, así que reduzca la cantidad de uso de bucle en su código siempre que sea posible.
			
			En los casos en que los bucles sean inevitables:

			Evite ejecutar el ciclo completo cuando no sea necesario, utilizando instrucciones break o continue según corresponda.
			
			Por ejemplo, si está buscando en matrices un nombre específico, debe salir del bucle una vez que encuentre el nombre; no es necesario ejecutar más iteraciones del bucle

			```
			function processGroup(array) {
			  const toFind = "Bob";
			  for (let i = 0; i < array.length - 1; i++) {
				if (array[i] === toFind) {
				  processMatchingArray(array);
				  break;
				}
			  }
			}

			```

			Realice el trabajo que solo sea necesario una vez fuera del circuito. 
		
			Esto puede parecer un poco obvio, pero es fácil pasarlo por alto
			
			Tome el siguiente fragmento, que recupera un objeto JSON que contiene datos para procesarlos de alguna manera.
			
			En este caso, la operación fetch() se realiza en cada iteración del bucle, lo que supone un desperdicio de potencia informática. 
			
			La búsqueda, que no depende de i, podría moverse fuera del bucle, por lo que sólo se realiza una vez.
			
			```
			async function returnResults(number) {
			  for (let i = 0; i < number; i++) {
				const response = await fetch(`/results?number=${number}`);
				const results = await response.json();
				processResult(results[i]);
			  }
			}

			```
		
		Ejecute el cálculo fuera del hilo principal:
			
			Anteriormente hablamos sobre cómo JavaScript generalmente ejecuta tareas en el hilo principal y durante cuánto tiempo las operaciones pueden bloquear el hilo principal, lo que podría provocar un mal rendimiento de la interfaz de usuario.
			
			También mostramos cómo dividir tareas largas en tareas más pequeñas, mitigando este problema.
			
			Otra forma de manejar estos problemas es sacar las tareas del hilo principal por completo.
			
			Hay algunas maneras de lograr esto:
			

			1. Utilice código asincrónico:
				
				JavaScript asincrónico es básicamente JavaScript que no bloquea el hilo principal.
				
				Las API asincrónicas tienden a manejar operaciones como obtener recursos de la red, acceder a un archivo en el sistema de archivos local o abrir una transmisión a la cámara web de un usuario.
				
				Debido a que esas operaciones pueden llevar mucho tiempo, sería malo simplemente bloquear el hilo principal mientras esperamos que se completen.
				
				En cambio, el navegador ejecuta esas funciones, mantiene el hilo principal ejecutando el código posterior y esas funciones devolverán resultados una vez que estén disponibles en algún momento en el futuro.
				 
				Las API asincrónicas modernas están basadas en Promise, que es una característica del lenguaje JavaScript diseñada para manejar operaciones asincrónicas.
				 
				Es posible escribir sus propias funciones basadas en Promesas si tiene una funcionalidad que se beneficiaría de su ejecución asincrónica.
				
				
			2. Ejecutar cálculo en Web Workers:
				
				Son un mecanismo que le permite abrir un hilo separado para ejecutar una parte de JavaScript, de modo que no bloquee el hilo principal.
			
				Los trabajadores tienen algunas restricciones importantes, la más importante es que no se pueden realizar secuencias de comandos DOM dentro de un trabajador.
				
				Puede hacer muchas otras cosas y los trabajadores pueden enviar y recibir mensajes hacia y desde el hilo principal.
				
				El principal caso de uso para los trabajadores es si tiene muchos cálculos que hacer y no desea que bloquee el hilo principal.
				
				Haga ese cálculo en un trabajador, espere el resultado y envíelo de regreso al hilo principal cuando esté listo.
			
			
			3. Utilice WebGPU: 
				
				Es una API de navegador que permite a los desarrolladores web utilizar la GPU (Unidad de procesamiento de gráficos) del sistema subyacente para realizar cálculos de alto rendimiento y dibujar imágenes complejas que se pueden representar en el navegador.
				
				Es bastante complejo, pero puede proporcionar beneficios de rendimiento incluso mejores que los trabajadores web.
				
				
# HTML 

	HTML es por defecto rápido y accesible.
	
	Es nuestro trabajo, como desarrolladores, asegurarnos de preservar estas dos propiedades al crear o editar código HTML.
	
	Pueden ocurrir complicaciones cuando, por ejemplo, el tamaño del archivo de una inserción <video> es demasiado grande o cuando el análisis de JavaScript bloquea la representación de elementos críticos de la página.
	
	Este artículo le guiará a través de las características clave de rendimiento de HTML que pueden mejorar drásticamente la calidad de su página web.
	
	
	La primera pregunta que debes responder antes de comenzar a optimizar tu HTML es "¿qué necesito optimizar?".
	
	Algunos de los consejos y técnicas que se analizan a continuación son buenas prácticas que beneficiarán a casi cualquier proyecto web, mientras que algunos sólo son necesarios en determinadas situaciones.
	
	Intentar aplicar todas estas técnicas en todas partes probablemente sea innecesario y puede ser una pérdida de tiempo.
	
	Debes averiguar qué optimizaciones de rendimiento son realmente necesarias en cada proyecto.

	
	Para hacer esto, necesita medir el rendimiento de su sitio.
	
	Existen varias formas diferentes de medir el rendimiento, algunas de las cuales implican API de rendimiento sofisticadas.
	
	La mejor manera de comenzar es aprender a utilizar herramientas como la red de navegador integrada

	Las herramientas de rendimiento para examinar las partes de la página que tardan mucho en cargarse y necesitan optimización.
	

	Problemas clave de rendimiento de HTML:
		
		HTML es simple en términos de rendimiento:
		
		es principalmente texto, que es de tamaño pequeño y, por lo tanto, en su mayoría rápido de descargar y procesar.
		
		Los problemas clave que pueden afectar el rendimiento de una página web incluyen
		
		
		1. Tamaño de los archivos de imagen y video:
			
			Es importante considerar cómo manejar el contenido de los elementos reemplazados como <img> y <video>.
			
			Los archivos de imagen y vídeo son grandes y pueden aumentar significativamente el peso de la página. 
			 
			Es importante minimizar la cantidad de bytes que se descargan en el dispositivo de un usuario (por ejemplo, ofrecer imágenes más pequeñas para dispositivos móviles). 
			
			También debe considerar mejorar el rendimiento percibido cargando imágenes y videos en una página solo cuando sean necesarios.
			
		
		2. Entrega de contenido incrustado:	
			
			Suele ser el contenido incrustado en elementos <iframe>.
			
			Cargar contenido en <iframe> puede afectar significativamente el rendimiento, por lo que debe considerarse detenidamente.

		
		3. Orden de carga de recursos:	
		
			Para maximizar el rendimiento real y percibido, el HTML debe cargarse primero, en el orden en que aparece en la página.
			
			Luego puede utilizar varias funciones para influir en el orden de carga de los recursos para mejorar el rendimiento.
			
			Por ejemplo, puede precargar CSS y fuentes críticas desde el principio, pero posponer JavaScript no crítico hasta más adelante.
		
		
		Hay argumentos a favor de simplificar la estructura HTML y minimizar el código fuente, de modo que la renderización y las descargas sean más rápidas.
		
		Sin embargo, el tamaño del archivo HTML es insignificante en comparación con las imágenes y los vídeos, y el procesamiento del navegador es muy rápido hoy en día.
		
		Si su código fuente HTML es tan grande y complejo que genera problemas de rendimiento de renderizado y descarga, probablemente tenga problemas mayores y debería intentar simplificarlo y dividir el contenido.
		
		
	Manejo receptivo de elementos reemplazados:
		
		El diseño responsivo ha revolucionado la forma en que se maneja el diseño del contenido web en diferentes dispositivos.
		
		Una ventaja clave que permite es el cambio dinámico de diseños optimizados para diferentes tamaños de pantalla, por ejemplo, un diseño de pantalla ancha frente a un diseño de pantalla angosto (móvil).
		
		También puede manejar el cambio dinámico de contenido basado en otros atributos del dispositivo, como la resolución o la preferencia por una combinación de colores claros u oscuros.

		
		La técnica llamada "móvil primero" puede garantizar que el diseño predeterminado sea para dispositivos de pantalla pequeña, de modo que los móviles puedan simplemente descargar imágenes adecuadas para sus pantallas y no necesiten verse afectados en el rendimiento al descargar imágenes de escritorio más grandes.
				
		Sin embargo, dado que esto se controla mediante consultas de medios en su CSS, solo puede afectar positivamente el rendimiento de las imágenes cargadas en CSS.


	Proporcionar diferentes resoluciones de imagen a través de srcset:
		
		Para proporcionar versiones de diferente resolución de la misma imagen según la resolución del dispositivo y el tamaño de la ventana gráfica, puede utilizar los atributos srcset y size.

		Este ejemplo proporciona imágenes de diferentes tamaños para diferentes anchos de pantalla.
		
		```
		<img
		  srcset="480w.jpg 480w, 800w.jpg 800w"
		  sizes="(max-width: 600px) 480px,
				 800px"
		  src="800w.jpg"
		  alt="Family portrait" />

		```
		
		srcset proporciona el tamaño intrínseco de las imágenes de origen junto con sus nombres de archivo, y tamaños proporciona consultas de medios junto con los anchos de las ranuras de las imágenes que deben completarse en cada caso.
		
		Luego, el navegador decide qué imágenes tiene sentido cargar para cada espacio.
		
		Como ejemplo, si el ancho de la pantalla es de 600 px o menos, entonces max-width: 600 px es verdadero y, por lo tanto, se dice que el espacio a llenar es 480 px.
		
		En este caso, es probable que el navegador opte por cargar el archivo 480w.jpg (imagen de 480 px de ancho).
		
		Esto ayuda con el rendimiento porque los navegadores no cargan imágenes más grandes de lo que necesitan.


		Este ejemplo proporciona imágenes con diferentes resoluciones para diferentes resoluciones de pantalla:

		```
		<img
		  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
		  src="640w.jpg"
		  alt="Family portrait" />

		```
		
		1,5x, 2x, etc. son indicadores de resolución relativa.
		
		Si la imagen tiene un estilo de 320 px de ancho (por ejemplo, con ancho: 320 px en CSS), el navegador cargará 320w.jpg
		 
		Si el dispositivo es de baja resolución (un píxel del dispositivo por píxel CSS), o 640x.jpg si el dispositivo es de alta resolución (dos píxeles del dispositivo por píxel CSS o más).


		En ambos casos, el atributo src proporciona una imagen predeterminada para cargar si el navegador no admite src/srcset.
		
		
	Proporcionar diferentes fuentes de imágenes y vídeos:
		
		El elemento <picture> se basa en el elemento <img> tradicional, lo que le permite proporcionar múltiples fuentes diferentes para diferentes situaciones.
		
		Por ejemplo, si el diseño es ancho, probablemente querrás una imagen ancha, y si es estrecho, querrás una imagen más estrecha que aún funcione en ese contexto.
		
		Esto también funciona para proporcionar una descarga menor de información en dispositivos móviles, lo que ayuda con el rendimiento.
		
		```
		<picture>
		  <source media="(max-width: 799px)" srcset="narrow-banner-480w.jpg" />
		  <source media="(min-width: 800px)" srcset="wide-banner-800w.jpg" />
		  <img src="large-banner-800w.jpg" alt="Dense forest scene" />
		</picture>

		```
		
		Los elementos <source> contienen consultas de medios dentro de los atributos de medios.
		
		Si una consulta de medios devuelve verdadero, se carga la imagen a la que se hace referencia en el atributo srcset de su elemento <source>.
		
		En el ejemplo anterior, si el ancho de la ventana gráfica es de 799 píxeles o menos, se carga la imagen estrecha-banner-480w.jpg.
		
		También observe cómo el elemento <picture> incluye un elemento <img>, que proporciona una imagen predeterminada para cargar en el caso de navegadores que no admiten <picture>.

		
		Tenga en cuenta el uso del atributo srcset en este ejemplo. 
		
		Como se muestra en la sección anterior, puede proporcionar diferentes resoluciones para cada fuente de imagen.


		Los elementos <video> funcionan de manera similar, en términos de proporcionar diferentes fuentes:
		
		```
		<video controls>
		  <source src="video/smaller.mp4" type="video/mp4" />
		  <source src="video/smaller.webm" type="video/webm" />
		  <source src="video/larger.mp4" type="video/mp4" media="(min-width: 800px)" />
		  <source
			src="video/larger.webm"
			type="video/webm"
			media="(min-width: 800px)" />

		  <!-- fallback for browsers that don't support video element -->
		  <a href="video/larger.mp4">download video</a>
		</video>

		```
		
		Sin embargo, existen algunas diferencias clave entre proporcionar fuentes de imágenes y vídeos:

		En el ejemplo anterior:
			
			Utilizamos src en lugar de srcset; No puedes especificar diferentes resoluciones para videos a través de srcset.

		En su lugar:
			
			Especifica diferentes resoluciones dentro de los diferentes elementos <source>.
			
		Especificamos diferentes formatos de vídeo dentro de diferentes elementos <source>:

			Cada formato se identifica mediante su tipo MIME dentro del atributo de tipo.
			
			Los navegadores cargarán el primero que encuentren y que admitan, donde la prueba de consulta de medios devuelve verdadero.


	Imágenes en lazy loaded: 
		
		Una técnica muy útil para mejorar el rendimiento es la carga diferida.
		
		Esto se refiere a la práctica de no cargar todas las imágenes inmediatamente cuando se representa el HTML, sino solo cargarlas cuando son realmente visibles para el usuario en la ventana gráfica (o inminentemente visibles).
		
		Esto significa que el contenido inmediatamente visible/utilizable está listo para usarse más rápidamente, mientras que el contenido posterior solo muestra sus imágenes cuando se desplaza y el navegador no desperdiciará ancho de banda cargando imágenes que el usuario nunca verá.

		
		Históricamente, la carga diferida se ha manejado mediante JavaScript, pero los navegadores ahora tienen un atributo de carga disponible que puede indicarle al navegador que cargue imágenes automáticamente.
		
		```
		<img src="800w.jpg" alt="Family portrait" loading="lazy" />

		```
		
		En web.dev Browser-level image lazy loading
		
		
		También puedes cargar contenido de vídeo de forma diferida utilizando el atributo de precarga.
		
		```
		<video controls preload="none" poster="poster.jpg">
		  <source src="video.webm" type="video/webm" />
		  <source src="video.mp4" type="video/mp4" />
		</video>

		```
		
		Darle a la precarga un valor de none le indica al navegador que no precargue ninguno de los datos del video antes de que el usuario decida reproducirlo, lo que obviamente es bueno para el rendimiento.
		
		En cambio, solo mostrará la imagen indicada por el atributo del cartel. 
		
		Cada navegador tiene un comportamiento de carga de vídeo predeterminado diferente, por lo que es bueno ser explícito.
		
		
		En web.dev  Fast playback with audio and video preload
		
		
	Manejo de contenido incrustado/embedded:
		
		Es muy común que en páginas web se incrusten contenidos de otras fuentes.
		
		Esto se hace más comúnmente cuando se muestra publicidad en un sitio para generar ingresos; los anuncios generalmente los genera una empresa externa de algún tipo y se integran en su página.
		
			Mostrar contenido compartido que un usuario podría necesitar en varias páginas, como un carrito de compras o información de perfil.

			Mostrar contenido de terceros relacionado con el sitio principal de la organización, como un feed de publicaciones en redes sociales.


		La incrustación de contenido se realiza más comúnmente utilizando elementos <iframe>, aunque existen otros elementos de incrustación menos utilizados, como <object> y <embed>.
		
		Nos concentraremos en los <iframe> en esta sección.

		Nos concentraremos en los <iframe> en esta sección.
		
		
		El consejo más importante y clave para el uso de <iframe> es: "No utilice <iframe> integrados a menos que sea absolutamente necesario".
		
		Si está creando una página con varios paneles diferentes de información, puede parecer sensato desde el punto de vista organizativo dividirlos en páginas separadas y cargarlas en diferentes <iframe>. 
		
		Sin embargo, esto tiene una serie de problemas asociados en términos de rendimiento y otros:
			
			Cargar el contenido en un <iframe> es mucho más costoso que cargar el contenido como parte de la misma página directa; no solo requiere solicitudes HTTP adicionales para cargar el contenido, sino que el navegador también necesita crear una instancia de página separada para cada uno.
			
			Cada uno es efectivamente una instancia de página web separada integrada en la página web de nivel superior.
			
			
			Siguiendo con el punto anterior, también necesitarás manejar cualquier estilo CSS o manipulación de JavaScript por separado para cada <iframe> diferente (a menos que las páginas incrustadas sean del mismo origen), lo que se vuelve mucho más complejo.
			
			No puede orientar contenido incrustado con CSS y JavaScript aplicados a la página de nivel superior, o viceversa.
			
			Esta es una medida de seguridad sensata que es fundamental para la web.
			
			¡Imagínese todos los problemas con los que podría encontrarse si el contenido incrustado de terceros pudiera ejecutar secuencias de comandos arbitrariamente en cualquier página en la que estuviera incrustado!
			
			
			Cada <iframe> también necesitaría cargar los datos compartidos y los archivos multimedia por separado; no puede compartir activos almacenados en caché entre diferentes páginas incrustadas (nuevamente, a menos que las páginas incrustadas sean del mismo origen).
			
			Esto puede hacer que una página utilice mucho más ancho de banda del que cabría esperar.
			
	
		Es recomendable poner el contenido en una sola página.
	
		Si desea incorporar contenido nuevo dinámicamente a medida que cambia la página, es mejor para el rendimiento cargarlo en la misma página en lugar de colocarlo en un <iframe>.
		
		Puede tomar los nuevos datos usando el método fetch(), por ejemplo, y luego inyectarlos en la página usando algunas secuencias de comandos DOM.
		
		
		Si controla el contenido y es relativamente simple, podría considerar usar contenido codificado en base 64 en el atributo src para completar el <iframe>, o incluso insertar HTML sin formato en el atributo srcdoc.
		
		Si debe utilizar <iframe>, úselos con moderación.
		
		
	Lazy loading iframes:
		
		De la misma manera que los elementos <img>, también puedes usar el atributo de carga para indicarle al navegador que cargue de forma diferida el contenido <iframe> que inicialmente está fuera de la pantalla, mejorando así el rendimiento:
		
		```
		<iframe src="https://example.com" loading="lazy" width="600" height="400">
		</iframe>

		```
		
		En web.dev lazy-load offscreen iframes
		
	
	Manejo del orden de carga de recursos:
		
		El orden de la carga de recursos es importante para maximizar el rendimiento real y percibido.
				
		Cuando se carga una página web:
			
		1. El HTML generalmente se analiza primero, en el orden en que aparece en la página.
			
		2. Cualquier CSS encontrado se analiza para comprender los estilos que deben aplicarse a la página. 
		
			Durante este tiempo, se empiezan a recuperar los recursos vinculados, como imágenes y fuentes web.

		3. Cualquier JavaScript encontrado se analiza, evalúa y ejecuta en la página.
			
			De forma predeterminada, esto bloquea el análisis del HTML que aparece después de los elementos <script> donde se encuentra JavaScript.

		4. Un poco más adelante, el navegador determina cómo se debe diseñar cada elemento HTML, dado el CSS que se le aplica.
		
		5. El resultado del estilo luego se pinta en la pantalla.

		
		Varias funciones HTML le permiten modificar cómo se cargan los recursos para mejorar el rendimiento. 

	
	Manejo de la carga de JavaScript:
		
		El análisis y la ejecución de JavaScript bloquea el análisis del contenido DOM posterior.
		
		Esto aumenta el tiempo hasta que el contenido sea renderizado y utilizable por los usuarios de la página.
		
		Un script pequeño no hará mucha diferencia, pero considere que las aplicaciones web modernas tienden a tener mucho JavaScript.
		
		Otro efecto secundario del comportamiento de análisis de JavaScript predeterminado es que, si el script que se representa se basa en el contenido DOM que aparece más adelante en la página, obtendrá errores.


		Por ejemplo, imagine un párrafo simple en una página.
		
		```
		<p>My paragraph</p>

		```
		
		Ahora imagina un archivo JavaScript que contiene el siguiente código:
		
		```
		const pElem = document.querySelector("p");

		pElem.addEventListener("click", () => {
		  alert("You clicked the paragraph");
		});

		```
		
		Podemos aplicar este script a la página haciendo referencia a él en un elemento <script> como este:
		
		```
		<script src="index.js"></script>

		```
		
		Si colocamos este elemento <script> antes del elemento <p> en el orden de origen (por ejemplo, en el elemento <head>), la página arrojará un error (Chrome, por ejemplo, informa "Error de tipo no detectado: no se pueden leer las propiedades de null (leyendo 'addEventListener')" a la consola).
		
		Esto ocurre porque el script depende del elemento <p> para funcionar, pero en el momento en que se analiza el script, el elemento <p> no existe en la página.
		
		Aún no se ha renderizado.

		Puede solucionar el problema anterior colocando el elemento <script> después del elemento <p> (por ejemplo, al final del cuerpo del documento), o ejecutando el código dentro de un controlador de eventos adecuado (por ejemplo, ejecútelo en DOMContentLoaded, que se activa cuando el DOM ha sido completamente analizado).
		
		
		Sin embargo, esto no resuelve el problema de esperar a que se cargue el script.
		
		Se puede lograr un mejor rendimiento agregando el atributo async al elemento <script>:

		```
		<script async src="index.js"></script>

		```

		Esto hace que el script se obtenga en paralelo con el análisis DOM, por lo que está listo al mismo tiempo y no bloqueará la representación, lo que mejora el rendimiento.

		Hay otro atributo, aplazar, que hace que el script se ejecute después de que se haya analizado el documento, pero antes de activar DOMContentLoaded. Esto tiene un efecto similar al async.
		
		Otro consejo para el manejo de la carga de JavaScript es dividir el script en módulos de código y cargar cada parte cuando sea necesario, en lugar de poner todo el código en un script gigante y cargarlo todo al principio.
		
		Esto se hace utilizando módulos de JavaScript.
	
	
	Precargar contenido con rel="preload":
		
		La recuperación de otros recursos (como imágenes, vídeos o archivos de fuentes) vinculados desde su HTML, CSS y JavaScript también puede causar problemas de rendimiento, bloqueando la ejecución de su código y ralentizando la experiencia.
		
		Una forma de mitigar estos problemas es utilizar rel="preload" para convertir elementos <link> en precargadores. Por ejemplo:
		
		```
		<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />

		```
	
		Al encontrar un enlace rel="preload", el navegador buscará el recurso al que se hace referencia lo antes posible y lo pondrá a disposición en la memoria caché del navegador para que esté listo para su uso antes cuando se haga referencia a él en el código posterior.
		
		Es útil precargar los recursos de alta prioridad que el usuario encontrará al principio de una página para que la experiencia sea lo más fluida posible.

		En web.dev: Preload critical assets to improve loading speed.
				
		Hay otros valores rel que también están diseñados para acelerar varios aspectos de la carga de la página: dns-prefetch, preconnect, modulepreload, prefetch y prerender.
	
		

# CSS

	Debe optimizar el CSS para mitigar el bloqueo de renderizado y minimizar la cantidad de reflujos necesarios.

	La primera pregunta que debes responder antes de comenzar a optimizar tu CSS es "¿qué necesito optimizar?".
	
	Intentar aplicar todas estas técnicas en todas partes probablemente sea innecesario y puede ser una pérdida de tiempo.
	
	Debes averiguar qué optimizaciones de rendimiento son realmente necesarias en cada proyecto.

	
	Para hacer esto, necesita medir el rendimiento de su sitio.
	
	Existen varias formas diferentes de medir el rendimiento, algunas de las cuales implican API de rendimiento sofisticadas.
	
	Sin embargo, la mejor manera de comenzar es aprender a usar herramientas como la red de navegador integrada y las herramientas de rendimiento, para ver qué partes de la carga de la página tardan mucho tiempo y necesitan optimización.


	Optimización del renderizado:
		
		Los navegadores siguen una ruta de renderizado específica: la pintura solo ocurre después del diseño, lo que ocurre después de que se crea el árbol de renderizado, que a su vez requiere los árboles DOM y CSSOM.

		Mostrar a los usuarios una página sin estilo y luego volver a pintarla después de que se hayan analizado los estilos CSS sería una mala experiencia para el usuario.
		
		Por este motivo, CSS bloquea la representación hasta que el navegador determina que el CSS es necesario.
		
		El navegador puede pintar la página después de haber descargado el CSS y creado el modelo de objetos CSS (CSSOM).

		Para optimizar la construcción de CSSOM y mejorar el rendimiento de la página, puede realizar una o más de las siguientes acciones según el estado actual de su CSS:
		
		
		Eliminar estilos innecesarios:
			
			Esto puede parecer obvio, pero es sorprendente cuántos desarrolladores olvidan limpiar las reglas CSS no utilizadas que se agregaron a sus hojas de estilo durante el desarrollo y terminaron sin usarse.
			
			Todos los estilos se analizan, ya sea que se utilicen durante el diseño y la pintura o no, por lo que puede acelerar la representación de la página para deshacerse de los no utilizados.
			
			Este es un problema difícil de resolver para una base de código grande, y no existe una solución mágica para encontrar y eliminar CSS no utilizado de manera confiable.
			
			Debe hacer el arduo trabajo de mantener su CSS modular y ser cuidadoso y deliberado sobre lo que se agrega y elimina.
	
		
		Dividir CSS en módulos separados: 
			
			Mantener CSS modular significa que el CSS que no se requiere al cargar la página se puede cargar más adelante, lo que reduce los tiempos iniciales de bloqueo y carga de CSS.
			
			La forma más sencilla de hacerlo es dividiendo el CSS en archivos separados y cargando sólo lo necesario:
			
			```
			<!-- Loading and parsing styles.css is render-blocking -->
			<link rel="stylesheet" href="styles.css" />

			<!-- Loading and parsing print.css is not render-blocking -->
			<link rel="stylesheet" href="print.css" media="print" />

			<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
			<link
			  rel="stylesheet"
			  href="mobile.css"
			  media="screen and (max-width: 480px)" />

			```
			
			El ejemplo anterior proporciona tres conjuntos de estilos: 
			
			estilos predeterminados que siempre se cargarán, estilos que solo se cargarán cuando se imprima el documento y estilos que se cargarán solo en dispositivos con pantallas estrechas. 
			
			De forma predeterminada, el navegador asume que cada hoja de estilo especificada bloquea la representación.
			
			Puede indicarle al navegador cuándo se debe aplicar una hoja de estilo agregando un atributo de medios que contenga una consulta de medios. 
			
			Cuando el navegador ve una hoja de estilo que solo necesita aplicar en un escenario específico, aún descarga la hoja de estilo, pero no la bloquea.
			
			Al separar el CSS en varios archivos, el archivo principal que bloquea el procesamiento, en este caso estilos.css, es mucho más pequeño, lo que reduce el tiempo durante el cual se bloquea el procesamiento.
			

		Minimiza y comprime tu CSS:
			
			Minimizar implica eliminar todos los espacios en blanco del archivo que solo están ahí para la legibilidad humana, una vez que el código se pone en producción.
			
			Puede reducir considerablemente los tiempos de carga minimizando su CSS. 
			
			La minificación generalmente se realiza como parte de un proceso de compilación (por ejemplo, la mayoría de los marcos de JavaScript minimizarán el código cuando cree un proyecto listo para su implementación).
			
			Además de la minificación, asegúrese de que el servidor en el que está alojado su sitio utilice compresión como gzip en los archivos antes de servirlos.
			
		
		Simplifique los selectores:
			
			la gente suele escribir selectores que son más complejos de lo necesario para aplicar los estilos requeridos.
			
			Esto no sólo aumenta el tamaño de los archivos, sino también el tiempo de análisis de esos selectores. Por ejemplo:
			
			```
			
			/* Very specific selector */
			body div#main-content article.post h2.headline {
			  font-size: 24px;
			}

			/* You probably only need this */
			.headline {
			  font-size: 24px;
			}

			```
			
			Hacer que sus selectores sean menos complejos y específicos también es bueno para el mantenimiento.
			
			Es fácil entender qué hacen los selectores simples y es fácil anular estilos cuando sea necesario más adelante si los selectores son menos específicos.
			
			
		No apliques estilos a más elementos de los necesarios:
			
			Un error común es aplicar estilos a todos los elementos usando el selector universal, o al menos, a más elementos de los necesarios.
			
			Este tipo de estilo puede afectar negativamente al rendimiento, especialmente en sitios más grandes.
			
			```
			/* Selects every element inside the <body> */
			body * {
			  font-size: 14px;
			  display: flex;
			}

			```
			
			Recuerde que muchas propiedades (como el tamaño de fuente) heredan sus valores de sus padres, por lo que no es necesario aplicarlas en todas partes.
			
			Y es necesario utilizar con moderación herramientas potentes como Flexbox. 
			
			Usarlos en todas partes puede provocar todo tipo de comportamientos inesperados.
			
		
		Reduzca las solicitudes HTTP de imágenes con sprites CSS:
			
			los sprites CSS son una técnica que coloca varias imágenes pequeñas (como íconos) que desea usar en su sitio en un solo archivo de imagen y luego usa diferentes valores de posición de fondo para mostrar el fragmento de imagen que desea mostrar en cada lugar diferente.
			
			Esto puede reducir drásticamente la cantidad de solicitudes HTTP necesarias para recuperar las imágenes.
			
			Precargar activos importantes: puede utilizar rel="preload" para convertir elementos <link> en precargadores de activos críticos.
			
			```
			<link rel="preload" href="style.css" as="style" />

			<link
			  rel="preload"
			  href="ComicSans.woff2"
			  as="font"
			  type="font/woff2"
			  crossorigin />

			<link
			  rel="preload"
			  href="bg-image-wide.png"
			  as="image"
			  media="(min-width: 601px)" />

			```
			
			Con la precarga, el navegador recuperará los recursos a los que se hace referencia lo antes posible y los pondrá a disposición en la memoria caché del navegador para que estén listos para su uso antes cuando se haga referencia a ellos en el código posterior.
			
			Es útil precargar los recursos de alta prioridad que el usuario encontrará al principio de una página para que la experiencia sea lo más fluida posible.
			
			Observe cómo también puede utilizar atributos multimedia para crear precargadores responsivos.

			En web.dev  Preload critical assets to improve loading speed
			
	
	Manejo de animaciones:
		
		Las animaciones pueden mejorar el rendimiento percibido, haciendo que las interfaces se sientan más ágiles y haciendo que los usuarios sientan que se está progresando mientras esperan que se cargue una página (cargando controles giratorios, por ejemplo).
		
		Sin embargo, las animaciones más grandes y una mayor cantidad de animaciones requerirán naturalmente más potencia de procesamiento, lo que puede degradar el rendimiento.

		
		El consejo más sencillo es reducir todas las animaciones innecesarias.
		
		También puede proporcionar a los usuarios un control/preferencia de sitio para desactivar las animaciones si están utilizando un dispositivo de baja potencia o un dispositivo móvil con batería limitada. 
		
		También puedes usar JavaScript para controlar si se aplica o no animación a la página en primer lugar.
		
		También hay una consulta de medios llamada prefers-reduced-motion que se puede usar para ofrecer estilos de animación de forma selectiva o no, según las preferencias de animación a nivel del sistema operativo del usuario.

		Para animaciones DOM esenciales, se recomienda utilizar animaciones CSS siempre que sea posible, en lugar de animaciones JavaScript (la API de animaciones web proporciona una forma de conectarse directamente a animaciones CSS mediante JavaScript).


	Propiedades para animar:
		
		El rendimiento de la animación depende en gran medida de las propiedades que esté animando. 
		
		Ciertas propiedades, cuando están animadas, desencadenan un reflujo (y por lo tanto también un repintado) y deben evitarse.
		
		Estos incluyen propiedades que:

			Modifique las dimensiones de un elemento, como ancho, alto, borde y relleno.

			Reposicione un elemento, como margen, arriba, abajo, izquierda y derecha.

			Cambie el diseño de un elemento, como align-content, align-items y flex.

			Agregue efectos visuales que cambien la geometría del elemento, como un cuadro de sombra.


		Los navegadores modernos son lo suficientemente inteligentes como para volver a pintar sólo el área modificada del documento, en lugar de toda la página.
		
		Como resultado, las animaciones más grandes son más costosas.

		Si es posible, es mejor animar propiedades que no provoquen reflujo/repintado. Esto incluye:
			
			Transforms
			opacity
			filter

		
	Animando en la GPU:
		
		Para mejorar aún más el rendimiento, debería considerar mover el trabajo de animación del hilo principal a la GPU del dispositivo
		
		(también conocido como composición).
		
		Esto se hace eligiendo tipos específicos de animaciones que el navegador enviará automáticamente a la GPU para que las maneje; estos incluyen:

			Animaciones de transformación 3D como transform:
				
				translateZ() and rotate3d().
			
			Elementos con otras propiedades animadas como
				
				position: fixed.
				
			Elementos con will-change aplicado
					
			Ciertos elementos que se representan en su propia capa, incluidos
				
				<video>, <canvas> e <iframe>.
			    
		
		La animación en la GPU puede mejorar el rendimiento, especialmente en dispositivos móviles.
		
		Sin embargo, mover animaciones a GPU no siempre es tan sencillo.
		
		smashingmagazine  CSS GPU Animation: Doing It Right
		
		
	Optimización de cambios de elementos con will-change:
		
		Los navegadores pueden configurar optimizaciones antes de que se cambie realmente un elemento.
		
		Este tipo de optimizaciones pueden aumentar la capacidad de respuesta de una página al realizar un trabajo potencialmente costoso antes de que sea necesario.
		
		La propiedad CSS will-change indica a los navegadores cómo se espera que cambie un elemento.

		will-change está pensado para utilizarse como último recurso para intentar solucionar los problemas de rendimiento existentes.
		
		No debe utilizarse para anticipar problemas de rendimiento.

		```
		.element {
		  will-change: opacity, transform;
		}

		```
		
	
	Optimización para el bloqueo de renderizado:
		
		CSS puede aplicar estilos a condiciones particulares con consultas de medios. 
		
		Las consultas de medios son importantes para un diseño web responsivo y nos ayudan a optimizar una ruta de representación crítica.
		
		El navegador bloquea la representación hasta que analiza todos estos estilos, pero no bloqueará la representación de estilos que sabe que no utilizará, como las hojas de estilo de impresión.
		
		Al dividir el CSS en varios archivos según las consultas de medios, puede evitar el bloqueo de procesamiento durante la descarga de CSS no utilizado.
		
		Para crear un enlace CSS sin bloqueo, mueva los estilos que no se usan inmediatamente, como los estilos de impresión, a un archivo separado, agregue un <enlace> al marcado HTML y agregue una consulta de medios, en este caso indicando que es una impresión hoja de estilo
		
		```
		<!-- Loading and parsing styles.css is render-blocking -->
		<link rel="stylesheet" href="styles.css" />

		<!-- Loading and parsing print.css is not render-blocking -->
		<link rel="stylesheet" href="print.css" media="print" />

		<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
		<link
		  rel="stylesheet"
		  href="mobile.css"
		  media="screen and (max-width: 480px)" />

		```
		
		De forma predeterminada, el navegador asume que cada hoja de estilo especificada bloquea la representación. 
		
		Indique al navegador cuándo se debe aplicar la hoja de estilo agregando un atributo de medios con la consulta de medios
		
		Cuando el navegador ve una hoja de estilo, sabe que solo necesita aplicarla para un escenario específico, aún así descarga la hoja de estilo, pero no muestra el bloque.
		
		Al separar el CSS en varios archivos, el archivo principal que bloquea el procesamiento, en este caso estilos.css, es mucho más pequeño, lo que reduce el tiempo que se bloquea el procesamiento.
		
		
	Mejorando el rendimiento de las fuentes:
		
		En general, piense detenidamente en las fuentes que utiliza en su sitio.
		
		Algunos archivos de fuentes pueden ser muy grandes (varios megabytes).
		
		Si bien puede resultar tentador utilizar muchas fuentes para generar emoción visual, esto puede ralentizar significativamente la carga de la página y hacer que su sitio parezca un desastre. 
		
		Probablemente sólo necesites unas dos o tres fuentes, y puedes salirte con menos si eliges utilizar fuentes seguras para la web.
		
		
	Carga de fuentes:
		
		Tenga en cuenta que una fuente solo se carga cuando realmente se aplica a un elemento usando la propiedad font-family, no cuando se hace referencia a ella por primera vez usando la regla @font-face at.
		
		```
		/* Font not loaded here */
		@font-face {
		  font-family: "Open Sans";
		  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
		}

		h1,
		h2,
		h3 {
		  /* It is actually loaded here */
		  font-family: "Open Sans";
		}

		```
		
		
		Por lo tanto, puede resultar beneficioso utilizar rel="preload" para cargar fuentes importantes con antelación, de modo que estén disponibles más rápidamente cuando realmente se necesiten:
		
		```
		<link
		  rel="preload"
		  href="OpenSans-Regular-webfont.woff2"
		  as="font"
		  type="font/woff2"
		  crossorigin />

		```
		
		Es más probable que esto sea beneficioso si su declaración de familia de fuentes está oculta dentro de una hoja de estilo externa grande y no se alcanzará hasta mucho más adelante en el proceso de análisis.
		
		Sin embargo, es una compensación: los archivos de fuentes son bastante grandes y si precarga demasiados, puede retrasar otros recursos.
		
		
		También puedes considerar:
			
			Usar rel="preconnect" para establecer una conexión temprana con el proveedor de fuentes.
			
			Ver Preconnect to critical third-party origins

			Usar CSS Font Loading API para personalizar el comportamiento de carga de fuentes a través de JavaScript.
			
	
	Cargar solo los glyphs necesarios: 
		
		Al elegir una fuente para el cuerpo del texto, es más difícil estar seguro de los glifos que se utilizarán en ella, especialmente si se trata de contenido generado por el usuario y/o contenido en varios idiomas.

		Especialmente si se trata de contenido generado por el usuario y/o contenido en varios idiomas.
		
		Sin embargo, si sabe que va a utilizar un conjunto específico de glifos (por ejemplo, glifos para encabezados o caracteres de puntuación específicos únicamente), puede limitar la cantidad de glifos que el navegador debe descargar.
		
		Esto se puede hacer creando un archivo de fuente que solo contenga el subconjunto requerido.
		
		Un proceso llamado subconjunto.
		
		El descriptor Unicode-range @font-face se puede utilizar para especificar cuándo se utiliza la fuente del subconjunto.
		
		Si la página no utiliza ningún carácter en este rango, la fuente no se descarga
		
		subsetting/unicode-range 
		
		```
		@font-face {
		  font-family: "Open Sans";
		  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
		  unicode-range: U+0025-00FF;
		}

		```
	
		
	Definición del comportamiento de visualización de fuentes:
		
		Aplicado a la regla @font-face, el descriptor de visualización de fuentes define cómo el navegador carga y muestra los archivos de fuentes, lo que permite que el texto aparezca con una fuente alternativa mientras una fuente se carga o no se carga.
		
		Esto mejora el rendimiento al hacer que el texto sea visible en lugar de tener una pantalla en blanco, con la compensación de un destello de texto sin estilo.
		
		```
		@font-face {
		  font-family: someFont;
		  src: url(/path/to/fonts/someFont.woff) format("woff");
		  font-weight: 400;
		  font-style: normal;
		  font-display: fallback;
		}

		```
	
		
	Optimización del recálculo de estilos con CSS containment:
		
		Al utilizar las propiedades definidas en el módulo de contención de CSS, puede indicarle al navegador que aísle diferentes partes de una página y optimice su representación independientemente una de otra.
		
		Esto permite mejorar el rendimiento al renderizar secciones individuales.
		
		Como ejemplo, puede especificarle al navegador que no muestre ciertos contenedores hasta que sean visibles en la ventana gráfica.
		
		
		La propiedad de contención permite al autor especificar exactamente qué tipos de contención desea que se apliquen a contenedores individuales en la página.

		Esto permite al navegador recalcular el diseño, el estilo, la pintura, el tamaño o cualquier combinación de ellos para una parte limitada del DOM.
		
		```
		article {
		  contain: content;
		}

		```
		
		La propiedad content-visibility es un atajo útil que permite a los autores aplicar un conjunto sólido de contenciones en un conjunto de contenedores y especificar que el navegador no debe diseñar ni representar esos contenedores hasta que sea necesario.

		También está disponible una segunda propiedad, contain-intrinsic-size que le permite proporcionar un tamaño de marcador de posición para los contenedores mientras están bajo los efectos de la contención.
		
		Esto significa que los contenedores ocuparán espacio incluso si su contenido aún no se ha renderizado, lo que permitirá que la contención haga su magia de rendimiento sin el riesgo de que la barra de desplazamiento se mueva y se bloquee a medida que los elementos se renderizan y aparecen a la vista.
		
		Esto mejora la calidad de la experiencia del usuario a medida que se carga el contenido.
		
		```
		article {
		  content-visibility: auto;
		  contain-intrinsic-size: 1000px;
		}

		```
		

		
# Business case para el rendimiento web
	
	¿Cómo convencer a sus clientes y/o a la dirección para que prioricen e inviertan en el rendimiento? 

	Analizamos la creación de un caso de negocio claro para convencer a los tomadores de decisiones de realizar la inversión.
	
	
	Hacer del rendimiento una prioridad empresarial:
		
		Hemos analizado cómo priorizar el rendimiento puede mejorar la experiencia del usuario y, por tanto, los ingresos.
		
		Sabemos que no priorizar el rendimiento web puede resultar en una pérdida de ingresos comerciales.
		
		Analiza cómo ciertas métricas comerciales se relacionan directamente con la experiencia de rendimiento web de un usuario y cómo aplicar el diseño de servicios para mejorar las experiencias de rendimiento web del usuario.
		
		Destaca la importancia de comprender cómo las experiencias acumuladas impactan las tasas de conversión y retención.

	
	Presupuestos de performance: 
		
		Establecer un presupuesto de rendimiento web puede ayudarle a asegurarse de que el equipo se mantenga encaminado en el mantenimiento del sitio y ayudar a evitar regresiones.
		
		Un presupuesto de rendimiento es un conjunto de límites que se establecen para especificar límites, como el número máximo de solicitudes HTTP permitidas, el tamaño total máximo de todos los activos combinados, el FPS mínimo permitido en un dispositivo específico, etc., que deben ser mantenido.
		
		El presupuesto se puede aplicar a un solo archivo, un tipo de archivo, todos los archivos cargados en una página, una métrica específica o un umbral durante un período de tiempo.
		
		El presupuesto refleja objetivos alcanzables; ya sea que se basen en tiempo, cantidad o reglas
		
		
		Definir y promover un presupuesto ayuda a los defensores del rendimiento a defender una buena experiencia de usuario frente a intereses en competencia, como marketing, ventas o incluso otros desarrolladores que quieran agregar vídeos, scripts de terceros o incluso marcos.
		
		Los presupuestos de rendimiento ayudan a los equipos de desarrolladores a proteger el rendimiento óptimo para los usuarios y, al mismo tiempo, permiten a la empresa acceder a nuevos mercados y ofrecer experiencias personalizadas.
		
	
	Indicadores clave de desempeño:
		
		Establecer indicadores clave de desempeño (KPI/key performance indicators) como objetivos puede resaltar objetivos de desempeño que también son objetivos comerciales.
		
		Los KPI pueden ser tanto un conjunto de métricas comerciales importantes para medir el impacto de la experiencia del usuario y el desempeño en los ingresos de la empresa como una forma de demostrar los beneficios de priorizar el desempeño.
		
		Algunos KPI a considerar:
			
			
		Conversion Rate:
			
			El porcentaje de su tráfico que realiza una acción prevista, como completar una compra o suscribirse a un boletín informativo.
			
			Cuando un sitio empresarial es lento, puede impedir que los usuarios completen la tarea prevista.
			
			Esto puede conducir a bajas tasas de conversión.

		
		Time on Site
			
			El tiempo promedio que sus usuarios en conjunto pasan en su sitio.
			
			Cuando un sitio funciona con lentitud, es más probable que los usuarios lo abandonen prematuramente, lo que puede provocar una reducción del tiempo en las métricas del sitio.
			
		
		Net Promotion Score
		
			Es una métrica para evaluar la lealtad del cliente hacia la marca, producto o servicio de una empresa.
			
			Las malas experiencias de rendimiento del usuario pueden equivaler a una mala reputación de la marca.
			
			
		Establecer la tasa de conversión, el tiempo en el sitio y/o los puntajes de promoción neta como KPI brindan valor financiero y otros objetivos comerciales a los esfuerzos de rendimiento web y obtienen ayuda para impulsar la aceptación, con métricas para demostrar que los esfuerzos valen la pena.
		
		
			


			
		





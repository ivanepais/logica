# Tools
	
Una vez avanzado en HTML, CSS y JS; comenzará a encontrarse con todo tipo de herramientas, desde marcos de JavaScript hasta herramientas de prueba y automatización, y más.

A medida que sus proyectos web se vuelven más grandes y complejos, querrá comenzar a aprovechar algunas de estas herramientas, elaborando una cadena de herramientas confiable para darle superpoderes a su proceso de desarrollo.

Además de eso, todavía debemos mantener la compatibilidad con varios navegadores en primer plano y asegurarnos de que nuestro código siga las mejores prácticas que permitan que nuestros proyectos funcionen en diferentes navegadores y dispositivos que nuestros usuarios utilizan para navegar por la Web y accesible para personas con discapacidad. 



# Client-Side Dev Tools

Las herramientas se pueden encadenar, desde cómo instalarlas usando administradores de paquetes y controlarlas usando la línea de comando.	

Guia: 

	1. Client-side tools
		
		Descripción general de las herramientas web modernas, qué tipos de herramientas están disponibles y dónde las encontrará en el ciclo de vida del desarrollo de aplicaciones web
				
		
	2. Command line
		
		En su proceso de desarrollo, sin duda se le pedirá que ejecute algún comando en la terminal (o en la "línea de comando"; en realidad, son lo mismo).
		
		Comandos esenciales que necesitará para ingresar, cómo encadenar comandos y cómo agregar sus propias herramientas de interfaz de línea de comandos (CLI).
	
	
	3. Package management 
		
		Instalar dependencias de herramientas del proyecto, mantenerlas actualizadas y más.

	
	4. Complete toolchain
		
		Configuración de un entorno de desarrollo sensato y la implementación de herramientas de transformación hasta la implementación real de su aplicación. 
		
		
	5. Deploying App
		
		Implementar nuestra aplicación de muestra.
	
		Enviamos el código a GitHub y lo implementamos en las páginas de GitHub, e incluso le mostramos cómo agregar una prueba simple al proceso.



# Client-side tools

	Aunque todavía es completamente razonable escribir HTML, CSS y JavaScript "a mano", ahora existe una gran cantidad de herramientas que los desarrolladores pueden utilizar para acelerar el proceso de creación de un sitio web o una aplicación.

	Hay algunas herramientas muy bien establecidas que se han convertido en "nombres muy conocidos" entre la comunidad de desarrollo, y cada día se escriben y lanzan nuevas herramientas para resolver problemas específicos.
	
	Incluso podría encontrarse escribiendo un software para ayudar en su propio proceso de desarrollo, para resolver un problema específico que las herramientas existentes aún no parecen manejar.
	
	
	Es fácil sentirse abrumado por la gran cantidad de herramientas que se pueden incluir en un solo proyecto.
	
	Del mismo modo, un único archivo de configuración para una herramienta como Webpack puede tener cientos de líneas, la mayoría de las cuales son encantamientos mágicos que parecen funcionar, pero que sólo un ingeniero experto comprenderá completamente.


	De vez en cuando, incluso los desarrolladores web más experimentados se quedan atascados en un problema de herramientas; es posible perder horas intentando hacer funcionar una tubería de herramientas antes incluso de tocar una sola línea de código de aplicación.
		
	
	Ecosistema moderno de herramientas: 
		
		Actualmente es enorme, por lo que es útil tener una idea amplia de los principales problemas que resuelven las herramientas.
		
		Si ingresa a su motor de búsqueda favorito y busca "herramientas de desarrollo front-end", obtendrá un amplio espectro de resultados que van desde editores de texto hasta navegadores y el tipo de bolígrafos que puede usar para tomar notas.

		Aunque su elección de editor de código es ciertamente una elección de herramientas, esta serie de artículos irá más allá y se centrará en herramientas de desarrollo que le ayudarán a producir código web de forma más eficiente. 
		
		Son herramientas que son populares y estándar al momento.
		
		Esto no le impide utilizar otras herramientas, si conoce sus ventajas relativas.
		
			Environment:
				
				Herramientas que le ayudan a configurar su entorno de desarrollo, como instalar y ejecutar otras herramientas.
				
			Safety net:
				
				Herramientas que son útiles durante el desarrollo de su código.
				
			Transformation:
				
				Herramientas que transforman el código de alguna manera, p. convertir un lenguaje intermedio en JavaScript que un navegador pueda entender.
				
			Post-development:
				
				Herramientas que son útiles después de haber escrito el código, como herramientas de prueba e implementación.
				
			
	Environment:
		
		El editor, el sistema operativo y el navegador son entornos de desarrollo. 
		
		Asumiremos que ya se ha decidido por la opción con la que se siente más cómodo.
		
		Sin embargo, antes de instalar y ejecutar otras herramientas, todavía hay dos opciones que tomar:

		
		Dónde vas a ejecutar las herramientas.
		
		La mayoría de las herramientas que se ejecutan localmente están escritas en JavaScript, por lo que necesita un intérprete de JavaScript en su computadora que pueda invocarse desde la línea de comandos (no la de su navegador).

		Node.js sigue siendo el estándar de la industria y lo usaremos.
		
		Bun está pensado como un reemplazo directo de Node.js, conocido por su velocidad y potentes API.

		
		Cómo vas a instalar las herramientas, en otras palabras, el administrador de paquetes.
		
		Node proporciona npm de forma predeterminada, por lo que lo usaremos. 
		
		Yarn y pnpm son otras opciones populares, cada una con sus propias ventajas, como velocidad, gestión de proyectos, etc.
		
	
	Safety net:
		
		Estas son herramientas que mejoran un poco el código que escribes.

		Esta parte de las herramientas debe ser específica de su propio entorno de desarrollo, aunque no es raro que las empresas tengan algún tipo de política o configuración prefabricada disponible para instalar de modo que todos sus desarrolladores utilicen los mismos procesos.


		Esto incluye cualquier cosa que facilite el proceso de desarrollo para generar código estable y confiable. 
		
		Las herramientas de red de seguridad también deberían ayudarle a prevenir errores o corregirlos automáticamente sin tener que crear su código desde cero cada vez.

		
		Linters:	
		
			Herramientas que verifican su código y le informan sobre los errores presentes, qué tipos de errores son y en qué líneas de código están presentes.
		
			A menudo, los linters se pueden configurar no solo para informar errores, sino también para informar cualquier violación de una guía de estilo específica que su equipo pueda estar usando (por ejemplo, código que usa una cantidad incorrecta de espacios para la sangría o que usa literales de plantilla en lugar de cadenas normales literales).


			ESLint es el linter de JavaScript estándar de la industria:
			
			una herramienta altamente configurable para detectar posibles errores de sintaxis y fomentar las "mejores prácticas" en todo el código.
			
			Algunas empresas y proyectos también han compartido sus configuraciones de ESLint.
			
			
			También puede encontrar herramientas de linting para otros lenguajes, como stylelint.


		Source code control:
			
			También conocido como sistemas de control de versiones (VCS), el control del código fuente es esencial para realizar copias de seguridad del trabajo y trabajar en equipo.
			
			Un VCS típico implica tener una versión local del código en el que se realizan cambios.
			
			Luego, "empuja" los cambios a una versión "maestra" del código dentro de un repositorio remoto almacenado en un servidor en algún lugar.
			
			Generalmente hay una manera de controlar y coordinar qué cambios se realizan en la copia "maestra" del código y cuándo, para que un equipo de desarrolladores no termine sobrescribiendo el trabajo de los demás todo el tiempo.


			Git es el sistema de control de código fuente que la mayoría de la gente usa hoy en día.
			
			Se accede principalmente a través de la línea de comandos, pero se puede acceder a él a través de interfaces de usuario amigables.
			
			Con su código en un repositorio de git, puede enviarlo a su propia instancia de servidor o utilizar un sitio web de control de fuente alojado como GitHub, GitLab o BitBucket.

			Se usa Github como estándar. 

		
		Code formatters:	
		
			Los formateadores de código están algo relacionados con los linters, excepto que en lugar de señalar errores en su código, generalmente tienden a asegurarse de que su código esté formateado correctamente, de acuerdo con sus reglas de estilo, idealmente corrigiendo automáticamente los errores que encuentran.

			Prettier es un ejemplo muy popular de formateador de código.
		
			
		Type checkers:
		
			Los verificadores de tipos son herramientas que lo ayudan a escribir código más confiable al verificar que su código utilice los tipos correctos de datos en los lugares correctos.
			
			Esto evita clases comunes de errores, como el acceso a propiedades inexistentes, indefinidos inesperados, etc.


			TypeScript es el verificador de tipos estándar de facto para JavaScript. 
			
			Proporciona su propia sintaxis de anotación de tipos y es, en cierto modo, un lenguaje en sí mismo, por lo que no lo cubriremos en este módulo.
			
			
	Transformation:
		
		Esta etapa del ciclo de vida de su aplicación web generalmente le permite codificar en "código futuro" (como las funciones CSS o JavaScript más recientes que quizás aún no tengan soporte nativo en los navegadores) o codificar usando otro lenguaje completamente, como TypeScript.
		
		Las herramientas de transformación generarán entonces código compatible con el navegador para utilizarlo en producción.

		Generalmente, el desarrollo web se considera tres lenguajes: HTML, CSS y JavaScript, y existen herramientas de transformación para todos estos lenguajes.
		
		
		La transformación ofrece tres beneficios principales (entre otros):
		
		
		1. La capacidad de escribir código utilizando las últimas funciones de lenguaje y transformarlo en código que funcione en dispositivos cotidianos.
		
			Por ejemplo, es posible que desee escribir JavaScript utilizando nuevas funciones de lenguaje de vanguardia, pero aún así hacer que su código de producción final funcione en navegadores más antiguos que no admiten esas funciones. Buenos ejemplos aquí incluyen:

			Babel: un compilador de JavaScript que permite a los desarrolladores escribir su código utilizando JavaScript de vanguardia, que luego Babel toma y convierte en JavaScript antiguo que más navegadores pueden entender.
			
			Los desarrolladores también pueden escribir y publicar complementos para Babel.
			
			
			PostCSS: hace el mismo tipo de cosas que Babel, pero con funciones CSS de vanguardia.
			
			Si no hay una manera equivalente de hacer algo usando funciones CSS más antiguas, PostCSS instalará un polyfill de JavaScript para emular el efecto CSS que deseas.
			
		
		2. La opción de escribir su código en un idioma completamente diferente y transformarlo a un lenguaje compatible con la web.
			
			Sass/SCSS: esta extensión CSS le permite usar variables, reglas anidadas, mixins, funciones y muchas otras características, algunas de las cuales están disponibles en CSS nativo (como variables) y otras no.


			TypeScript: TypeScript es un superconjunto de JavaScript que ofrece un montón de funciones adicionales. 
			
			El compilador de TypeScript convierte el código TypeScript a JavaScript cuando se compila para producción.
		
			
			Frameworks como React, Ember y Vue: los marcos proporcionan una gran cantidad de funciones de forma gratuita y le permiten usarlas a través de una sintaxis personalizada construida sobre JavaScript básico.
			
			En segundo plano, el código JavaScript del marco trabaja arduamente para interpretar esta sintaxis personalizada y representarla como una aplicación web final.
			
		
		3. Optimización:  Esto lo proporcionan los paquetes, que son herramientas que preparan su código para la producción, por ejemplo, "tree-shaking" 
			
			Para asegurarse de que solo las partes de sus bibliotecas de código que realmente está utilizando se incluyan en su código de producción final, o " minificar" para eliminar todos los espacios en blanco de su código de producción, haciéndolo lo más pequeño posible antes de cargarlo en un servidor.
			
			
			Webpack ha sido el paquete más popular durante mucho tiempo, con una gran cantidad de complementos y un potente sistema de configuración.
			
			Sin embargo, también es conocido por ser bastante complejo de configurar y lento en comparación con alternativas más modernas.
			 
			
			Vite es una herramienta de compilación más moderna que es popular por su velocidad, simplicidad y riqueza de funciones.


	Post development:	
	
		Las herramientas posteriores al desarrollo garantizan que su software llegue a la web y continúe ejecutándose.
		
		Esto incluye los procesos de implementación, marcos de prueba, herramientas de auditoría y más.

		Esta etapa del proceso de desarrollo es aquella con la que desea tener la menor cantidad de interacción activa para que, una vez configurada, se ejecute en su mayor parte de forma automática
		
		
	Testing tools:
		
		Por lo general, toman la forma de una herramienta que ejecutará pruebas automáticamente en su código para asegurarse de que sea correcto antes de continuar (por ejemplo, cuando intenta enviar cambios a un repositorio de GitHub).
		
		Esto puede incluir linting, pero también procedimientos más sofisticados como pruebas unitarias, donde ejecutas parte de tu código, asegurándote de que se comporten como deberían.

		
		Los marcos para escribir pruebas incluyen Jest, Mocha y Jasmine.

		Los sistemas de notificación y ejecución de pruebas automatizadas incluyen Travis CI, Jenkins, Circle CI y otros.
		
		
	Deployment tools:
		
		Los sistemas de implementación le permiten publicar su sitio web, están disponibles para sitios estáticos y dinámicos y, por lo general, tienden a funcionar junto con los sistemas de prueba.
		
		Por ejemplo, una cadena de herramientas típica esperará a que usted envíe cambios a un repositorio remoto, ejecute algunas pruebas para ver si los cambios están bien y luego, si las pruebas pasan, implementará automáticamente su aplicación en un sitio de producción.

		
		GitHub Pages está muy bien integrado con el propio GitHub y es gratuito para todos los repositorios públicos.
		
		Otros servicios, como Netlify y Vercel, también son muy populares y ofrecen generosas cuotas de nivel gratuito, flujos de trabajo de implementación fluidos e integración con GitHub.
		
		
	Otras tools: 
		
		Hay varios otros tipos de herramientas disponibles para usar en la etapa de posdesarrollo, incluido Code Climate para recopilar métricas de calidad del código, la extensión del navegador Webhint para realizar análisis en tiempo de ejecución de la compatibilidad entre navegadores y otras comprobaciones, bots de GitHub para proporcionar una funcionalidad de GitHub más potente.
		
		Updown por proporcionar monitoreo del tiempo de actividad de las aplicaciones, ¡y mucho más!
		
		
	
	Los	tipos de herramientas:
		
		Ciertamente existe un orden en el que se aplican los diferentes tipos de herramientas en el ciclo de vida de desarrollo, pero tenga la seguridad de que no es necesario tenerlas todas implementadas para lanzar un sitio web. 
		
		De hecho, no necesitas ninguno de estos. Sin embargo, incluir algunas de estas herramientas en su proceso mejorará su propia experiencia de desarrollo y probablemente mejorará la calidad general de su código.
		
		
		A menudo lleva algún tiempo hasta que las nuevas herramientas de desarrollo se asienten en su complejidad.
		
		Una de las herramientas más conocidas, Webpack, tiene fama de ser demasiado complicada para trabajar, pero en la última versión importante, hubo un gran esfuerzo para simplificar el uso común, de modo que la configuración requerida se reduzca al mínimo absoluto.

		
		Una vez que se solucionen todos los problemas del proceso, su cadena de herramientas debería ser algo de lo que pueda olvidarse y debería funcionar.
		
		
	Elegir y obtener ayuda con una herramienta en particular:	
		
		La mayoría de las herramientas tienden a escribirse y publicarse de forma aislada, por lo que, aunque es casi seguro que hay ayuda disponible, nunca está en el mismo lugar o formato.
		
		Por lo tanto, puede resultar difícil encontrar ayuda para utilizar una herramienta, o incluso elegir qué herramienta utilizar.

		
		Probablemente necesitarás una combinación de las siguientes cosas
		
		Profesores, mentores, compañeros de estudios o colegas experimentados que tienen alguna experiencia, han resuelto este tipo de problemas antes y pueden dar consejos
		
		
		Un lugar específico útil para buscar.
		
		Las búsquedas web generales de herramientas para desarrolladores front-end suelen ser inútiles a menos que ya sepa el nombre de la herramienta que está buscando.
		
		
			Si está utilizando el administrador de paquetes npm para administrar sus dependencias, por ejemplo, es una buena idea ir a la página de inicio de npm y buscar el tipo de herramienta que está buscando; por ejemplo, intente buscar "fecha" si desea una utilidad de formato de fecha, o "formateador" si está buscando un formateador de código general.
			
			Preste atención a los puntajes de popularidad, calidad y mantenimiento, y a la última vez que se actualizó el paquete.
			
			También haga clic en las páginas de herramientas para averiguar cuántas descargas mensuales tiene un paquete y si tiene buena documentación que pueda utilizar para determinar si hace lo que necesita.
			
			Según estos criterios, la biblioteca date-fns parece una buena herramienta de formato de fechas.
			
			
			Si está buscando un complemento para integrar la funcionalidad de la herramienta en su editor de código, consulte la página de complementos/extensiones del editor de código; consulte Extensiones VSCode, por ejemplo.
			
			Eche un vistazo a las extensiones destacadas en la página principal y nuevamente intente buscar el tipo de extensión que desea (o el nombre de la herramienta, por ejemplo, busque "ESLint" en la página de extensiones de VSCode).
			
			Cuando obtengas resultados, fíjate en información como cuántas estrellas o descargas tiene la extensión, como indicador de su calidad.
			
		
		Foros relacionados con el desarrollo para hacer preguntas sobre qué herramientas usar, por ejemplo MDN Learn Discourse o Stack Overflow.
		
			
		Cuando haya elegido una herramienta para usar, el primer puerto de escala debe ser la página de inicio del proyecto de la herramienta.

		Este podría ser un sitio web completo o podría ser un único documento Léame en un repositorio de código.
		
		Los documentos de date-fns, por ejemplo, son bastante buenos, completos y fáciles de seguir.
		
		Sin embargo, parte de la documentación puede ser bastante técnica y académica y no adaptarse bien a sus necesidades de aprendizaje.

		
		En su lugar, es posible que desees encontrar algunos tutoriales dedicados a cómo empezar a utilizar determinados tipos de herramientas.
		
		Un excelente punto de partida es buscar sitios web como CSS Tricks, Dev, freeCodeCamp y Smashing Magazine, ya que están diseñados para la industria del desarrollo web.
		
		Nuevamente, probablemente revisará varias herramientas diferentes mientras busca las adecuadas para usted, probándolas para ver si tienen sentido, si cuentan con el soporte adecuado y si hacen lo que usted desea que hagan.
		


# Command line
	
	En su proceso de desarrollo, sin duda se le pedirá que ejecute algunos comandos en la terminal (o en la "línea de comandos"; en realidad son lo mismo).
	
	Es una introducción al terminal, los comandos esenciales que necesitará para ingresar, cómo encadenar comandos y cómo agregar sus propias herramientas de interfaz de línea de comandos (CLI).
	
	
	El terminal es una interfaz de texto para ejecutar programas basados ​​en texto.
	
	Si está ejecutando alguna herramienta para el desarrollo web, existe una posibilidad casi garantizada de que tendrá que abrir la línea de comandos y ejecutar algunos comandos para usar las herramientas elegidas (a menudo verá dichas herramientas denominadas herramientas CLI) herramientas de interfaz de línea de comando).
	
	Se puede utilizar una gran cantidad de herramientas escribiendo comandos en la línea de comandos; muchos vienen preinstalados en su sistema y muchos otros se pueden instalar desde registros de paquetes
	
	Los registros de paquetes son como tiendas de aplicaciones, pero (principalmente) para herramientas y software basados ​​en línea de comandos.
	
	
	Origen de la terminal: 
		
		El terminal tiene su origen alrededor de los años 1950-60 y su forma original realmente no se parece a la que utilizamos hoy en día
		
		Desde entonces, el terminal ha seguido siendo una característica constante de todos los sistemas operativos, desde máquinas de escritorio hasta servidores escondidos en la nube, microcomputadoras como la Raspberry PI Zero e incluso teléfonos móviles.
		
		Proporciona acceso directo al sistema de archivos subyacente de la computadora y a funciones de bajo nivel y, por lo tanto, es increíblemente útil para realizar tareas complejas rápidamente, si sabes lo que estás haciendo.


		También es útil para la automatización, por ejemplo, para escribir un comando para actualizar los títulos de cientos de archivos al instante, por ejemplo, de "ch01-xxxx.png" a "ch02-xxxx.png".
		
		Si actualizara los nombres de los archivos usando su buscador o aplicación GUI del explorador, le llevaría mucho tiempo.


	Línea de comando y una terminal:
		
		Estos dos términos se utilizan indistintamente. 
	
		Técnicamente, una terminal es un software que inicia y se conecta a un shell (interfaz (cli o gui) para interactúar con el OS, nucleo o kernel.
		
		Un shell es su sesión y su entorno de sesión (donde se pueden personalizar elementos como el mensaje y los accesos directos).
		
		La línea de comando es la línea literal donde ingresa comandos y el cursor parpadea

	
	Uso de la terminal: 
	
		Aunque hay una gran cantidad de herramientas disponibles desde la línea de comandos.
		
		Si usa herramientas como Visual Studio Code, también hay una gran cantidad de extensiones que se pueden usar como proxy para usar comandos de terminal sin necesidad de usar el terminal directamente.

		Sin embargo, no encontrará una extensión de editor de código para todo lo que desea hacer; eventualmente tendrá que adquirir algo de experiencia con la terminal.
		
		
	Comandos integrados: 
		
		Navegue por el sistema de archivos de su computadora junto con tareas de nivel básico como crear, copiar, cambiar el nombre y eliminar:

			Moverse por la estructura de su directorio: cd
			
			Crear directorios: mkdir
			
			Crear archivos (y modificar sus metadatos): touch
			
			Copiar archivos o directorios: cp
			
			Mover archivos o directorios: mv
			
			Eliminar archivos o directorios: rm
			
		Descargue archivos encontrados en URL específicas: curl
	
		Busque fragmentos de texto dentro de cuerpos de texto más grandes: grep

		Ver el contenido de un archivo página por página: less, cat

		Manipular y transformar flujos de texto (por ejemplo, cambiar todas las instancias de <div>s en un archivo HTML a <article>): awk, tr, sed


	Navegación en la línea de comando:
		
		Cuando visite la línea de comando, inevitablemente necesitará navegar a un directorio en particular para "hacer algo".
		
		Todos los sistemas operativos (suponiendo una configuración predeterminada) iniciarán su programa de terminal en su directorio "inicial" y desde allí es probable que desee moverse a un lugar diferente.

		
		El comando cd le permite cambiar de directorio.
		
		Técnicamente, el cd no es un programa sino un elemento integrado.
		
		Esto significa que su sistema operativo lo proporciona listo para usar y también que no puede eliminarlo accidentalmente
		
		
		Para cambiar el directorio, escribe cd en tu terminal, seguido del directorio al que deseas moverte.
		
		Suponiendo que el directorio esté dentro de su directorio de inicio, puede usar cd Desktop
		
		```
		cd Desktop

		```
		
		Ir al directorio previo con dos puntos
		
		```
		cd ..

		```
		
		Un atajo de terminal muy útil es usar la tecla de tabulación para autocompletar nombres que sabes que están presentes, en lugar de tener que escribirlo todo.
		
		Por ejemplo, después de escribir los dos comandos anteriores, intente escribir cd D y presionar tabulador; debería completar automáticamente el nombre del directorio Escritorio, siempre que esté presente en el directorio actual.

		
		Si el directorio al que desea ir está anidado profundamente, necesita conocer la ruta para llegar a él. 
		
		Por ejemplo, si desea ir a un directorio llamado src, ubicado dentro de un directorio llamado proyecto, ubicado en el Escritorio, puede escribir estos tres comandos para llegar allí desde su carpeta de inicio:
		
		```
		cd Desktop
		cd project
		cd src

		```
		
		Pero esto es una pérdida de tiempo; en su lugar, puede escribir un comando, con los diferentes elementos en la ruta separados por barras diagonales, tal como lo hace cuando especifica rutas a imágenes u otros recursos en código CSS, HTML o JavaScript:
		
		```
		cd Desktop/project/src

		```
		
		Incluir una barra diagonal inicial en su ruta hace que la ruta sea absoluta, por ejemplo /Usuarios/su-nombre-de-usuario/Desktop.
		
		Omitir la barra diagonal como lo hicimos anteriormente hace que la ruta sea relativa a su directorio de trabajo actual.
		
		Esto es exactamente lo mismo que vería con las URL en su navegador web.
		
		Una barra diagonal inicial significa "en la raíz del sitio web", mientras que omitir la barra diagonal significa "la URL es relativa a mi página actual".
		
		
		En Windows, se utilizan barras invertidas en lugar de barras diagonales, p. cd Desktop\project\src

	
	Listado de contenidos del directorio:
		
		Otro comando integrado de Unix es ls (abreviatura de lista), que enumera el contenido del directorio en el que se encuentra actualmente.
		
		```
		ls
		
		```
		
		Esto le brinda una lista de los archivos y directorios en su directorio de trabajo actual, pero la información es realmente básica: solo obtiene el nombre de cada elemento presente, no si es un archivo o un directorio, o cualquier otra cosa. 
		
		Afortunadamente, un pequeño cambio en el uso de los comandos puede brindarle mucha más información.
		
		
	Opciones de comandos:
		
		La mayoría de los comandos de terminal tienen opciones: son modificadores que agregas al final de un comando, lo que hace que se comporte de una manera ligeramente diferente.
		
		Por lo general, constan de un espacio después del nombre del comando, seguido de un guión y seguido de una o más letras.

		```
		ls -l
		
		```

		En el caso de ls, la opción -l
	
		le brinda una lista con un archivo o directorio en cada línea y se muestra mucha más información.
		
		Los directorios se pueden identificar buscando una letra "d" en el lado izquierdo de las líneas. Esos son en los que podemos entrar.

		drwxr...
		
		
		Para saber exactamente qué opciones tiene disponible cada comando, puede consultar su página de manual.
		
		Esto se hace escribiendo man comando, seguido del nombre del comando que desea buscar, por ejemplo man ls.
		
		Esto abrirá la página de manual en el visor de archivos de texto predeterminado del terminal (por ejemplo, less en mi terminal), y luego debería poder desplazarse por la página usando las teclas de flecha o algún mecanismo similar. 
		
		La página de manual enumera todas las opciones con gran detalle, lo que puede resultar un poco intimidante al principio, pero al menos sabes que está ahí si la necesitas.
		
		Una vez que haya terminado de revisar la página de manual, deberá salir de ella usando el comando de salida del visor de texto ("q" en menos; es posible que tenga que buscar en la web para encontrarlo si no es obvio).
		
		
		Para ejecutar un comando con varias opciones al mismo tiempo, normalmente puede colocarlas todas en una sola cadena después del carácter de guión, por ejemplo, ls -lah o ls -ltrh.
		
	
	Crear, copiar, mover, eliminar:
		
		mkdir: esto crea un nuevo directorio dentro del directorio actual en el que se encuentra, con el nombre que proporcione después del nombre del comando.
		
		Por ejemplo, mkdir mi-sitio-web-increíble creará un nuevo directorio llamado mi-sitio-web-increíble.


		rmdir: elimina el directorio nombrado, pero sólo si está vacío.
		
		Por ejemplo, rmdir my-awesome-website eliminará el directorio que creamos anteriormente.
		
		Si desea eliminar un directorio que no está vacío (y también eliminar todo lo que contiene), puede usar rm -r en su lugar (ver más abajo), pero esto es peligroso. 
		
		Asegúrese de que no haya nada que pueda necesitar dentro del directorio más adelante, ya que desaparecerá para siempre.


		touch: crea un nuevo archivo vacío, dentro del directorio actual.
		
		Por ejemplo, tocar mdn-example.md crea un nuevo archivo vacío llamado mdn-example.md.
		
		
		mv: mueve un archivo desde la primera ubicación de archivo especificada a la segunda ubicación de archivo especificada, por ejemplo mv mdn-example.md mdn-example.txt (las ubicaciones se escriben como rutas de archivo).
		
		Este comando mueve un archivo llamado mdn-example.md en el directorio actual a un archivo llamado mdn-example.txt en el directorio actual. 
		
		Técnicamente, el archivo se está moviendo, pero desde una perspectiva práctica, este comando en realidad está cambiando el nombre del archivo.
		
		
		cp: similar en uso a mv, cp crea una copia del archivo en la primera ubicación especificada, en la segunda ubicación especificada.
		
		Por ejemplo, cp mdn-example.txt mdn-example.txt.bak crea una copia de mdn-example.txt llamada mdn-example.txt.bak (por supuesto, puede llamarlo de otra manera si lo desea).
		
		
		rm: elimina el archivo especificado. 
		
		Por ejemplo, rm mdn-example.txt elimina un único archivo llamado mdn-example.txt.
		  
		Tenga en cuenta que esta eliminación es permanente y no se puede deshacer a través de la papelera de reciclaje que pueda tener en la interfaz de usuario de su escritorio.


		"wild card":
			
			Muchos comandos de terminal le permiten utilizar asteriscos como caracteres "comodín", es decir, "cualquier secuencia de caracteres".
			
			Esto le permite ejecutar una operación en una cantidad potencialmente grande de archivos a la vez, todos los cuales coinciden con el patrón especificado
			
			Como ejemplo, rm mdn-* eliminaría todos los archivos que comiencen con mdn-.
			
			rm mdn-*.bak eliminaría todos los archivos que comienzan con mdn- y terminan con .bak.

	
	Cuidados: 
		
		Los comandos simples no conllevan demasiado peligro, pero a medida que comienza a crear comandos más complejos, debe pensar detenidamente qué hará el comando e intentar probarlos primero antes de ejecutarlos finalmente en el directorio deseado.

		Digamos que tiene 1000 archivos de texto en un directorio y desea revisarlos todos y eliminar solo los que tienen una determinada subcadena dentro del nombre del archivo.
		
		Si no tiene cuidado, podría terminar eliminando algo importante, perdiendo gran parte de su trabajo en el proceso.
		
		Un buen hábito que puedes adoptar es escribir el comando de tu terminal dentro de un editor de texto, descubrir cómo crees que debería verse y luego hacer una copia de seguridad de tu directorio e intentar ejecutar el comando en él primero para probarlo.

		
		Otro buen consejo: si no se siente cómodo probando comandos de terminal en su propia máquina, Glitch.com es un buen lugar seguro para probarlos. 
		
		Además de ser un excelente lugar para probar el código de desarrollo web, los proyectos también le brindan acceso a una terminal, por lo que puede ejecutar todos estos comandos directamente en esa terminal, con la seguridad de saber que no dañará su propia máquina.
		
		
		Un gran recurso para obtener una descripción general rápida de comandos de terminal específicos es tldr.sh.
		
		Este es un servicio de documentación impulsado por la comunidad, similar a MDN, pero específico para comandos de terminal.


	Conexión de comandos con pipes: 
		
		
		La terminal realmente se destaca cuando comienzas a encadenar comandos usando el | símbolo (pipe).
		
		Ya hemos visto ls, que genera el contenido del directorio actual:
		
		```
		ls
		
		```
		
		Pero, ¿qué pasaría si quisiéramos contar rápidamente la cantidad de archivos y directorios dentro del directorio actual? No puede hacerlo solo.

		Hay otra herramienta Unix disponible llamada wc.
		
		Esto cuenta la cantidad de palabras, líneas, caracteres o bytes de lo que sea que se ingrese en él.
		
		Puede ser un archivo de texto; el siguiente ejemplo genera el número de líneas en myfile.txt:
		
		```
		wc -l myfile.txt

		```
		
		Pero también puede contar el número de líneas de cualquier salida que se le conecte.
		
		Por ejemplo, el siguiente comando cuenta el número de líneas generadas por el comando ls (lo que normalmente imprimiría en la terminal si se ejecutara por sí solo) 
		
		y, en su lugar, genera esas líneas en la terminal:
		
		```
		ls | wc -l

		```

		Dado que ls imprime cada archivo o directorio en su propia línea, eso efectivamente nos da un recuento de directorios y archivos.
		
		
		Una filosofía general de las herramientas de línea de comandos (Unix) es que imprimen texto en la terminal (también denominado "impresión en salida estándar" o STDOUT).
		
		Una gran cantidad de comandos también pueden leer contenido de la entrada transmitida (conocida como "entrada estándar" o STDIN).

		
		El operador de tuberías puede conectar estas entradas y salidas entre sí, lo que nos permite desarrollar operaciones cada vez más complejas para satisfacer nuestras necesidades.
		
		La salida de un comando puede convertirse en la entrada del siguiente comando.
		
		
		En este caso, ls normalmente imprimiría su salida en STDOUT

		Pero en lugar de eso, la salida de ls se canaliza a wc, que toma esa salida como entrada.
		
		Cuenta el número de líneas que contiene e imprime ese recuento en STDOUT.
		
		
	Ejemplo más complejo: 
	
		Primero intentaremos recuperar el contenido de la página "buscar" de MDN usando el comando curl (que se puede usar para solicitar contenido de las URL), desde https://developer.mozilla.org/en-US/docs/Web/API /WindowOrWorkerGlobalScope/fetch.
		
		```
		curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

		```
		
		No obtendrá un resultado porque la página ha sido redirigida (a /Web/API/fetch).
		
		Necesitamos decirle explícitamente a curl que siga las redirecciones usando el indicador -L.

		
		Veamos también los encabezados que devuelve desarrollador.mozilla.org usando el indicador -I de curl e imprimamos todas las redirecciones de ubicación que envía al terminal, canalizando la salida de curl a grep (le pediremos a grep que devuelva todas las líneas que contener la palabra "ubicación").
		
		Intente ejecutar lo siguiente (verá que solo hay una redirección antes de llegar a la página final)

		```
		curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location

		```
		
		Aunque es algo artificial, podríamos llevar este resultado un poco más allá y transformar el contenido de la línea ubicación: agregando el origen base al inicio de cada una para que podamos imprimir las URL completas.
		
		Para eso, agregaremos awk a la mezcla (que es un lenguaje de programación similar a JavaScript, Ruby o Python, ¡solo que mucho más antiguo!).
		
		```
		curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
		
		```
		
		Su resultado final debería verse así:

		```
		https://developer.mozilla.org/en-US/docs/Web/API/fetch
		
		```
		
		Al combinar estos comandos, hemos personalizado la salida para mostrar las URL completas a las que redirige el servidor Mozilla cuando solicitamos la URL /docs/Web/API/WindowOrWorkerGlobalScope/fetch. 
		
		Conocer su sistema resultará útil en los próximos años: aprenda cómo funcionan estas herramientas de servicio único y cómo pueden convertirse en parte de su conjunto de herramientas para resolver problemas específicos.
	
	
	Agregando herramientas a la terminal: 
		
		Vimos comandos integrados con los que viene equipado su sistema.
		
		Pero también podemos instalar una herramienta CLI de terceros y utilizarla.

		
		El vasto ecosistema de herramientas instalables para el desarrollo web front-end existe actualmente principalmente dentro de npm.
		
		Un servicio de alojamiento de paquetes de propiedad privada que trabaja en estrecha colaboración con Node.js.
		
		La instalación de Node.js también instala la herramienta de línea de comandos npm (y una herramienta complementaria centrada en npm llamada npx).
		
		Ofrece una puerta de entrada para instalar herramientas de línea de comandos adicionales.
		
		
		Aunque veremos varias herramientas diferentes en el próximo artículo, nos especializaremos en Prettier.
		
		Prettier es un formateador de código obstinado que sólo tiene "algunas opciones".
		
	
	Instalación de herramientas con nmp: 
		
		Con npm tenemos la opción de instalar herramientas globalmente (para que podamos acceder a ellas desde cualquier lugar) o localmente en el directorio del proyecto actual.
		
		Hay ventajas y desventajas en cada sentido, y las siguientes listas de ventajas y desventajas para la instalación global están lejos de ser exhaustivas.
		
		
		Ventajas de instalar globalmente:
			
			Accesible desde cualquier lugar de tu terminal

			Instalar solo una vez

			Utiliza menos espacio en disco

			Siempre la misma versión
			
			Se siente como cualquier otro comando de Unix.

		
		Contras de instalar globalmente:
			
			Puede que no sea compatible con el código base de su proyecto.

			Otros desarrolladores de su equipo no tendrán acceso a estas herramientas, por ejemplo, si comparte el código base a través de una herramienta como git.

			En relación con el punto anterior, hace que el código del proyecto sea más difícil de replicar (si instala sus herramientas localmente, pueden configurarse como dependencias e instalarse con npm install).


		Aunque la lista de desventajas es más corta, el impacto negativo de la instalación global es potencialmente mucho mayor que los beneficios.
		
		Aquí lo instalaremos localmente, pero siéntase libre de instalarlo globalmente una vez que comprenda los riesgos relativos.
		
		
	Instalar prettier: 
		
		Se centra en lenguajes basados ​​en JavaScript y agrega soporte para HTML, CSS, SCSS, JSON y más.

			Ahorre la sobrecarga cognitiva de lograr que el estilo sea consistente manualmente en todos sus archivos de código; Prettier puede hacer esto por ti automáticamente
			
			Ayude a los recién llegados al desarrollo web a formatear su código según las mejores prácticas.
			
			Se instala en cualquier sistema operativo e incluso como parte directa de las herramientas del proyecto, asegurando que los colegas y amigos que trabajan en su código utilicen el estilo de código que usted está usando.

			Estar configurado para ejecutarse al guardar, mientras escribe o incluso antes de publicar su código.

			
		Instalaremos Prettier localmente, como se sugiere en la guía de instalación de Prettier
		
		```
		Prettier installation guide
		
		```
		
		Ejecute el siguiente comando para instalar Prettier
		
		```
		npm install --save-dev prettier

		```
		
		Ahora puede ejecutar el archivo localmente usando la herramienta npx.
		
		Ejecutar el comando sin ningún argumento, como ocurre con muchos otros comandos, ofrecerá información de ayuda y uso. Pruebe esto ahora:
		
		```
		npx prettier

		```
		
		Su salida debería verse así:
		
		```
		Usage: prettier [options] [file/glob ...]

		By default, output is written to stdout.
		Stdin is read if it is piped to Prettier and no files are given.

		…

		```
		
		Siempre vale la pena al menos hojear la información de uso, aunque sea larga.
		
		Le ayudará a comprender mejor cómo se debe utilizar la herramienta.
		
		
		Si no instaló Prettier localmente primero, al ejecutar npx prettier se descargará y ejecutará la última versión de Prettier, todo de una vez, solo para ese comando.

		Si bien esto puede parecer genial, las nuevas versiones de Prettier pueden modificar ligeramente el resultado.
		
		Desea instalarlo localmente para arreglar la versión de Prettier que está usando para formatear hasta que esté listo para cambiarla.
	
	
	Usando Prettier: 
			
		Cree un nuevo directorio en algún lugar de su sistema de archivos que sea fácil de encontrar.
		
		Quizás un directorio llamado prettier-test en tu escritorio.

		
		guarde el siguiente código en un nuevo archivo llamado index.js, dentro de su directorio de prueba:
		
		```
		const myObj = {
		a:1,b:{c:2}}
		function printMe(obj){console.log(obj.b.c)}
		printMe(myObj)

		```
		
		Podemos ejecutar Prettier contra una base de código para simplemente verificar si nuestro código quiere ajustarse.
		
		Nos movemos al directorio correcto. 
		
		```
		npx prettier --check index.js

		```
		
		Debería obtener un resultado similar a:
		
		```
		Checking formatting...
		index.js
		Code style issues found in the above file(s). Forgot to run Prettier?

		```
		
		Entonces, hay algunos estilos de código que se pueden arreglar.
		
		No es problema. 
		
		Agregar la opción --write al comando 
		
		Ahora intenta ejecutar esta versión del comando:
		
		```
		npx prettier --write index.js

		```
		
	
		Obtendrás un resultado como este
		
		```
		Checking formatting...
		index.js
		Code style issues fixed in the above file(s).

		```
		
		
		Pero lo más importante es que si vuelves a mirar tu archivo JavaScript, verás que se ha reformateado a algo como esto:
		
		```
		const myObj = {
		  a: 1,
		  b: { c: 2 },
		};
		function printMe(obj) {
		  console.log(obj.b.c);
		}
		printMe(myObj);

		```

		Dependiendo de su flujo de trabajo (o del flujo de trabajo que elija), puede hacer que esto sea una parte automatizada de su proceso.
		
		La automatización es realmente donde sobresalen las herramientas; Nuestra preferencia personal es el tipo de automatización que "simplemente ocurre" sin tener que configurar nada.

		Con Prettier hay varias formas de lograr la automatización.
		
		Hay excelentes recursos online para lograrlo. 
		
		
		Puedes invocar a Prettier:
			
			Antes de enviar su código a un repositorio de git usando Husky.

			Siempre que presiones "guardar" en tu editor de código, ya sea VS Code o Sublime Text.

			Como parte de las comprobaciones continuas de integración utilizando herramientas como GitHub Actions.

		
		Nuestra preferencia personal es la segunda: mientras usamos, por ejemplo, VS Code, Prettier se activa y limpia cualquier formato que necesite realizar cada vez que presionamos guardar.
		
		Puedes encontrar mucha más información sobre el uso de Prettier de diferentes maneras en los documentos de Prettier.
		
		
	Otras herramientas: 
		
		bat: un cat "más agradable" (cat se utiliza para imprimir el contenido de los archivos).

		Prettyping: hace ping en la línea de comando, pero visualizado (ping es una herramienta útil para comprobar si un servidor está respondiendo).

		htop: un visor de procesos, útil cuando algo hace que el ventilador de su CPU se comporte como un motor a reacción y desea identificar el programa infractor.

		tldr: mencionado anteriormente en este capítulo, pero disponible como herramienta de línea de comandos.
	
			
	
# Package management
	
	Podemos usarlos en nuestros propios proyectos: para instalar dependencias de herramientas del proyecto, mantenerlas actualizadas y más.
		
		
	Dependencia en el proyecto: 
		
		Una dependencia es un software de terceros que probablemente fue escrito por otra persona e idealmente resuelve un solo problema por usted.
		
		Un proyecto web puede tener cualquier cantidad de dependencias, desde ninguna hasta muchas, y sus dependencias pueden incluir subdependencias que no instaló explícitamente; sus dependencias pueden tener sus propias dependencias.

		
		Un ejemplo simple de una dependencia útil que su proyecto podría necesitar es algún código para calcular fechas relativas como texto legible por humanos.
		
		Ciertamente podrías codificar esto tú mismo, pero existe una gran posibilidad de que alguien más ya haya resuelto este problema.
		
		Además, es probable que se haya probado una dependencia confiable de terceros en muchas situaciones diferentes, lo que la hace más sólida y compatible con todos los navegadores que su propia solución.
		
		
		La dependencia de un proyecto puede ser una biblioteca o marco de JavaScript completo, como React o Vue, o una utilidad muy pequeña como nuestra biblioteca de fechas legible por humanos, o puede ser una herramienta de línea de comandos como Prettier o ESLint, de las que hablamos en artículos anteriores
		
		
		Sin herramientas de compilación modernas, dependencias como esta podrían incluirse en su proyecto utilizando un elemento <script> simple, pero es posible que esto no funcione de inmediato y probablemente necesitará algunas herramientas modernas para agrupar su código y sus dependencias cuando estén disponibles. 
		
		Un paquete es un término que generalmente se usa para referirse a un único archivo en su servidor web que contiene todo el JavaScript para su software; generalmente se comprime tanto como sea posible para ayudar a reducir el tiempo que lleva descargar su software y mostrarlo a sus visitantes. ' navegador.

		Además, ¿qué sucede si encuentra una herramienta mejor que desea utilizar en lugar de la actual, o si se lanza una nueva versión de su dependencia a la que desea actualizar? Esto no es demasiado doloroso para un par de dependencias, pero en proyectos más grandes con muchas dependencias, realizar un seguimiento de este tipo de cosas puede resultar realmente difícil.
		
		Tiene más sentido utilizar un administrador de paquetes como npm, ya que esto garantizará que el código se agregue y elimine de forma limpia, además de una serie de otras ventajas.
		
		
	Administrador de paquetes: 
		
		Ya conocemos npm, pero alejándonos del propio npm, un administrador de paquetes es un sistema que administrará las dependencias de su proyecto.

		El administrador de paquetes proporcionará un método para instalar nuevas dependencias (también denominadas "paquetes"), administrar dónde se almacenan los paquetes en su sistema de archivos y ofrecerle capacidades para que publique sus propios paquetes.

		En teoría, es posible que no necesite un administrador de paquetes y podría descargar y almacenar manualmente las dependencias de su proyecto, pero un administrador de paquetes se encargará sin problemas de instalar y desinstalar paquetes.
		
		Si no usaras uno, tendrías que manejar manualmente
		
			Encontrar todos los archivos JavaScript del paquete correcto.
			
			Comprobándolos para asegurarse de que no tengan vulnerabilidades conocidas.

			Descargarlos y colocarlos en las ubicaciones correctas de su proyecto.

			Escribir el código para incluir los paquetes en su aplicación (esto tiende a hacerse usando módulos de JavaScript, otro tema que vale la pena leer y comprender).
			
		
		Además, los administradores de paquetes manejan dependencias duplicadas (algo que se vuelve importante y común en el desarrollo front-end).
		
		En el caso de npm (y administradores de paquetes basados ​​en JavaScript y Node), tiene dos opciones para instalar sus dependencias.
		
		Como mencionamos en el artículo anterior, las dependencias se pueden instalar global o localmente en su proyecto. 
		
		Aunque tiende a haber más ventajas para la instalación global, las ventajas de la instalación local son más importantes, como la portabilidad del código y el bloqueo de versiones.


		Por ejemplo, si su proyecto dependía de Webpack con una determinada configuración, querrá asegurarse de que si instala ese proyecto en otra máquina o regresa a él mucho más tarde, la configuración seguirá funcionando.
		
		Si se instaló una versión diferente de Webpack, es posible que no sea compatible.
		
		Para mitigar esto, las dependencias se instalan localmente en un proyecto.


		Para ver que las dependencias locales realmente brillan, todo lo que necesita hacer es intentar descargar y ejecutar un proyecto existente; si funciona y todas las dependencias funcionan de inmediato, entonces debe agradecer a las dependencias locales por el hecho de que el código es portátil.

		
		npm no es el único administrador de paquetes disponible.
		
		Un administrador de paquetes alternativo exitoso y popular es Yarn.
		
		Yarn resuelve las dependencias utilizando un algoritmo diferente que puede significar una experiencia de usuario más rápida. 
		
		También hay otros clientes emergentes, como pnpm.
		
	
	Registros de paquetes:	
		
		Para que un administrador de paquetes funcione, necesita saber desde dónde instalar los paquetes, y esto se presenta en forma de registro de paquetes.
		
		El registro es un lugar central donde se publica un paquete y desde donde se puede instalar. npm, además de ser un administrador de paquetes, también es el nombre del registro de paquetes más utilizado para paquetes JavaScript.
		
		El registro npm existe en npmjs.com.

		
		npm no es la única opción.
		
		Puede administrar su propio registro de paquetes: productos como Microsoft Azure le permiten crear servidores proxy para el registro npm (para que pueda anular o bloquear ciertos paquetes), GitHub también ofrece un servicio de registro de paquetes y probablemente aparecerán más opciones a medida que pase el tiempo. continúa.

		
		Lo importante es que se asegure de haber elegido el mejor registro para usted. 
		
	
	Usando el ecosistema de paquetes:
	
		Usar un administrador de paquetes y un registro para instalar una utilidad de línea de comandos.
		
		Usaremos Vite para crear un sitio web en blanco.
		
		
		Vite proporciona algunas plantillas de inicio, con todas las dependencias y configuraciones necesarias, para que pueda comenzar rápidamente en un proyecto real

		Para demostración, configuraremos uno desde cero, usando la plantilla de React como referencia.
		
		
	Configurar la aplicación como un paquete npm:
		
		En primer lugar, cree un nuevo directorio para almacenar nuestra aplicación experimental, en algún lugar sensato que pueda encontrar nuevamente.
		
		Lo llamaremos npm-experiment, pero puedes llamarlo como quieras
		
		```
		mkdir npm-experiment
		cd npm-experiment

		```

		A continuación, inicialicemos nuestra aplicación como un paquete npm, lo que crea un archivo de configuración, paquete.json, que nos permite guardar los detalles de nuestra configuración en caso de que queramos recrear este entorno más adelante, o incluso publicar el paquete en el registro npm ( aunque no es relevante para nuestro artículo, porque estamos desarrollando una aplicación, no una biblioteca reutilizable).

		Escriba el siguiente comando, asegurándose de estar dentro del directorio npm-experiment:
		
		```
		npm init

		```
		
		Ahora se le harán algunas preguntas; npm luego creará un archivo package.json predeterminado basado en las respuestas.
		
		Tenga en cuenta que ninguno de estos es relevante para nuestros propósitos porque solo se usan si publica su paquete en un registro y otros quieren instalarlo e importarlo.
		
		name:
			
			un nombre para identificar la aplicación.
			
			Simplemente presione Retorno para el nombre por defecto.
			
		version:
			
			el número de versión inicial de la aplicación. 
			
			Nuevamente, simplemente presione Retorno para aceptar el valor predeterminado 1.0.0.

		description:
			
			una descripción rápida del propósito de la aplicación.
			
			Lo omitiremos aquí, pero también puedes ingresar lo que quieras. 
			
			Presione Retorno.

		entry point:
			
			este será el archivo JavaScript que se ejecutará cuando otros importen su paquete.
			
			No nos sirve de nada, así que simplemente presione Retorno.
		
		test command, git repository, and keywords:
			
			presione Retorno para dejar cada uno de estos en blanco por ahora.
	
		author:
			
			El autor del proyecto.
			
			Escriba su propio nombre y presione Retorno.
			
		license:
			
			la licencia para publicar el paquete.
			
			Presione Retorno para aceptar el valor predeterminado por ahora
			
			
		Presione Retorno una vez más para aceptar esta configuración.
		
		
		Vaya a su directorio npm-experiment y ahora debería encontrar que tiene un archivo package.json.
		
		Ábrelo y debería verse así:
		
		```
		{
		  "name": "npm-experiment",
		  "version": "1.0.0",
		  "description": "",
		  "main": "index.js",
		  "scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		  },
		  "author": "Your name",
		  "license": "ISC"
		}

		```
		
		Agregaremos dos líneas más a package.json:
		
		"type": "module"
			
			lo que hace que Node interprete todos los archivos .js como ES modules en lugar de los antiguos módulos CommonJS. 
			
			En general, es un buen hábito adquirirlo.
			
		"private": true
		
			lo que evita que publique accidentalmente su paquete en el registro npm.

		
		Agregue estas líneas justo debajo del "name":

		```
		"name": "npm-experiment",
		"type": "module",
		"private": true,

		```
		
		Este es el archivo de configuración que define su paquete.
		
	
	Instalar Vite: 
		
		Primero instalaremos Vite, la herramienta de creación de nuestro sitio web.
		
		Es responsable de agrupar nuestros archivos HTML, CSS y JavaScript en un paquete optimizado para el navegador.

		```
		npm install --save-dev vite

		```
		
		Una vez que haya hecho todas las cosas, eche otro vistazo a su archivo package.json.
			
		Verás que npm ha agregado un nuevo campo, devDependencies:

		```
		"devDependencies": {
		  "vite": "^5.2.13"
		}

		```
		
		Esto es parte de la magia de npm: si en el futuro mueve su código base a otra ubicación, en otra máquina, puede recrear la misma configuración ejecutando el comando npm install, y npm examinará las dependencias y las instalará por usted.

		
		Una desventaja es que Vite solo está disponible dentro de nuestra aplicación npm-experiment; no podrá ejecutarlo en un directorio diferente.
		
		Pero las ventajas superan a las desventajas.

		
		Tenga en cuenta que elegimos instalar vite como una dependencia de desarrollo.
		
		Esta diferencia rara vez importa para una aplicación, pero para una biblioteca, significa que cuando otros instalen su paquete, no instalarán Vite implícitamente.
		
		Por lo general, para las aplicaciones, cualquier paquete importado en el código fuente es una dependencia real, mientras que cualquier paquete utilizado para el desarrollo (generalmente como herramientas de línea de comandos) es una dependencia de desarrollo.
	
		Instale dependencias reales eliminando el indicador --save-dev.

	
		También encontrará una serie de archivos nuevos creados:

		node_modules:
			
			los archivos de dependencia necesarios para ejecutar Vite.
			
			npm los ha descargado todos por usted.

		package-lock.json:
			
			este es un archivo de bloqueo que almacena la información exacta necesaria para reproducir el directorio node_modules.
			
			Esto garantiza que mientras el archivo de bloqueo no se modifique, el directorio node_modules será el mismo en diferentes máquinas.

		
		No necesita preocuparse por estos archivos, ya que npm los administra.
		
		Debes agregar node_modules a tu archivo .gitignore si estás usando Git, pero generalmente debes conservar package-lock.json, porque, como se mencionó, se usa para sincronizar el estado de node_modules en diferentes máquinas.
	
	
	Configurando la app: 
		
		En Vite, el archivo index.html está al frente y al centro.
		
		Define el punto de partida de su aplicación y Vite lo usará para encontrar otros archivos necesarios para crear su aplicación. 
		
		Cree un archivo index.html en su directorio npm-experiment y proporciónele el siguiente contenido:
		
		```
		<!doctype html>
		<html lang="en-US">
		  <head>
			<meta charset="UTF-8" />
			<title>My test page</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		  </head>
		  <body>
			<div id="root"></div>
			<script type="module" src="/src/main.jsx"></script>
		  </body>
		</html>

		```
		
		Tenga en cuenta que los elementos <script> crean una dependencia en un archivo llamado src/main.jsx, que declara el punto de entrada de la lógica JavaScript para la aplicación.

		Cree la carpeta src y cree main.jsx en esta carpeta, pero déjelo en blanco por ahora.

		
		El atributo type="module" es importante.
		
		Le indica al navegador que trate el script como un módulo ES, lo que nos permite utilizar la sintaxis de importación y exportación en nuestro código JavaScript.
		
		La extensión del archivo es .jsx, porque le agregaremos la sintaxis de React JSX.

		Los navegadores no entienden JSX, pero Vite lo transformará a JavaScript normal para nosotros, ¡como si los navegadores sí lo hicieran!
		
		
	Usando Vite: 
		
		Ahora ejecutaremos nuestra herramienta Vite recién instalada.
		
		En tu terminal, ejecuta el siguiente comando:

		```
		npx vite

		```

		Deberías ver algo como esto impreso en tu terminal:

		```
		VITE v5.2.13  ready in 326 ms

		➜  Local:   http://localhost:5173/
		➜  Network: use --host to expose
		➜  press h + enter to show help
		```
		
		Ahora estamos listos para beneficiarnos del ecosistema completo de paquetes de JavaScript.
		
		Para empezar, ahora hay un servidor web local ejecutándose en http://localhost:5173. 
		
		No verás nada por ahora, pero lo bueno es que cuando hagas cambios en tu aplicación, Vite la reconstruirá y actualizará el servidor automáticamente para que puedas ver instantáneamente el efecto que tuvo tu actualización.

		Puede detener el servidor de desarrollo en cualquier momento con Ctrl + C e iniciarlo nuevamente con el mismo comando.
		
		Si decide seguir ejecutándolo, puede abrir una nueva ventana de terminal para ejecutar otros comandos.
		
		
		Ahora, algo de contenido de la página.
		
		Como demostración, agreguemos un gráfico a la página. 

		Usaremos el paquete plotly.js, una biblioteca de visualización de datos.
		
		```
		npm install plotly.js-dist-min

		```
		
		Observe cómo estamos instalando sin el indicador --save-dev.
		
		Como se mencionó anteriormente, esto se debe a que realmente usaremos este paquete en nuestro código fuente, no solo como una herramienta de línea de comandos.
		
		Este comando agregará un nuevo objeto de "dependencias" a su archivo package.json, con plotly.js-dist-min en él.
		
		
		Elegimos el paquete para que usted complete nuestra tarea.
		
		Cuando escriba su propio código, piense en las siguientes preguntas al buscar e instalar una dependencia:
				
			¿Necesito alguna dependencia? ¿Es posible hacerlo con funciones integradas o es lo suficientemente sencillo como para escribirlo yo mismo?
			
			
			¿Qué necesito hacer exactamente? 
			
			Cuanto más detallado sea, más probabilidades tendrá de encontrar un paquete que haga exactamente lo que necesita.
			
			Puede buscar palabras clave en npm o Google.
			
			También prefiera paquetes pequeños a los grandes, ya que estos últimos pueden provocar problemas de rendimiento al instalar, ejecutar, etc.

			
			¿La dependencia es confiable y está bien mantenida? 
			
			Comprueba cuándo se publicó la última versión, quién es el autor y cuántas descargas semanales tiene el paquete.
			
			Determinar la confiabilidad de un paquete es una habilidad que viene con la experiencia, porque hay que tener en cuenta factores como la probabilidad de que el paquete necesite actualizaciones o cuántas personas puedan necesitarlo.

		
		En el archivo src/main.jsx, agregue el siguiente código y guárdelo:

		```
		import Plotly from "plotly.js-dist-min";

		const root = document.getElementById("root");
		Plotly.newPlot(
		  root,
		  [
			{
			  x: [1, 2, 3, 4, 5],
			  y: [1, 2, 4, 8, 16],
			},
		  ],
		  {
			margin: { t: 0 },
		  },
		);

		```
		
		Vuelva a http://localhost:5173 y verá un gráfico en la página.
		
		Cambie los diferentes números y vea el gráfico actualizado cada vez que guarde su archivo.

	
	Código para producción: 
		
		Este código no está listo para producción.
		
		La mayoría de los sistemas de herramientas de construcción, incluido Vite, tienen un "modo de desarrollo" y un "modo de producción".
		
		La diferencia importante es que muchas de las funciones útiles que utilizará en el desarrollo no son necesarias en el sitio final, por lo que se eliminarán para la producción, p.
		
		"hot module replacement", "live reloading", and "uncompressed and commented source code".
		
		Aunque están lejos de ser exhaustivas, estas son algunas de las características comunes del desarrollo web que son muy útiles en la etapa de desarrollo pero no muy útiles en la producción.
		
		En producción, simplemente inflarán su sitio.

		
		Ahora detenga el servidor de desarrollo Vite en ejecución usando Ctrl + C.
		
		Ahora podemos preparar nuestro sitio de ejemplo básico para una implementación imaginaria.

		Vite proporciona un comando de compilación adicional para generar archivos adecuados para la publicación.
		
		```
		npx vite build

		```
		
		Debería responder algo como: 
		
		```
		vite v5.2.13 building for production...
		✓ 6 modules transformed.
		dist/index.html                    0.32 kB │ gzip:     0.24 kB
		dist/assets/index-BlYAJQFz.js  3,723.18 kB │ gzip: 1,167.74 kB

		(!) Some chunks are larger than 500 kB after minification. Consider:
		- Using dynamic import() to code-split the application
		- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
		- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
		✓ built in 4.36s

		```
		
		Vite creará un directorio llamado dist.
		
		Si lo analizas, contiene un index.html, que se parece mucho al raíz, excepto que el código fuente del script ahora se reemplaza con una ruta a la carpeta de activos.
		
		La carpeta de activos que contiene la salida de JavaScript transformada, que ahora está minimizada y optimizada para producción.

		
		Es posible que le preocupe la advertencia de que hay un fragmento demasiado grande.
		
		Esto es de esperar porque estamos cargando una biblioteca que hace muchas cosas detrás de escena (imagínese escribir todo el código usted mismo para dibujar el mismo gráfico).
		
		Por ahora, no necesitamos preocuparnos por eso.

		
	Clientes del administrador de paquetes:
	
		Comandos comunes entre las herramientas.
		
		Administradores de paquetes principales
		
		npm en npmjs.org
		pnpm en pnpm.js.org
		yarn en Yarnpkg.com
		
		
		npm y pnpm son similares desde el punto de vista de la línea de comandos; de hecho, pnpm pretende tener total paridad sobre las opciones de argumentos que ofrece npm.
		
		Se diferencia en que utiliza un método diferente para descargar y almacenar los paquetes en su computadora, con el objetivo de reducir el espacio total en disco requerido.

		
		Donde se muestra npm en los ejemplos siguientes, se puede intercambiar pnpm y el comando funcionará.
		
		
		A menudo se piensa que Yarn es más rápido que npm en términos del proceso de instalación (aunque su kilometraje puede variar).
		
		Esto es importante para los desarrolladores porque se puede perder una cantidad significativa de tiempo esperando a que se instalen las dependencias (y se copien en la computadora).

		
		Sin embargo, vale la pena señalar que no es necesario que el administrador de paquetes npm instale paquetes desde el registro npm. pnpm y Yarn pueden consumir el mismo formato package.json que npm y pueden instalar cualquier paquete de npm y otros registros de paquetes.

		
		Repasemos las acciones comunes que querrás realizar con los administradores de paquetes.

		
		Demostraremos los comandos npm y Yarn.
		
		No están destinados a ejecutarse en el mismo proyecto.
		
		Debes configurar tu proyecto con npm o Yarn y usar comandos de ese administrador de paquetes de manera consistente
		
		
	Iniciar proyecto: 
		
		```
		npm init
		yarn init

		```
		
		Como se muestra arriba, esto lo guiará a través de una serie de preguntas para describir su proyecto (nombre, licencia, descripción, etc.) y luego generará un paquete.json que contiene metainformación sobre su proyecto y sus dependencias.
		
		
	Instalar dependencias: 
		
		```
		npm install vite
		yarn add vite

		```
		
		Esto agregaría directamente el paquete vite al directorio de trabajo en un subdirectorio llamado node_modules, junto con las propias dependencias de vite.

		De forma predeterminada, este comando instalará la última versión de vite, pero también puedes controlar esto.
		
		Puedes solicitar vite@4, que te proporciona la última versión 4.x (que es 4.5.3).
		
		O puede probar vite@^4.0.0, que significa la última versión posterior o incluida a la 4.0.0 (el mismo significado que el anterior).

	
	Actualizar dependencias: 
		
		```
		npm update
		yarn upgrade

		```
		
		Esto examinará las dependencias instaladas actualmente y las actualizará, si hay una actualización disponible, dentro del rango especificado en el paquete.

		El rango se especifica en la versión de la dependencia en su paquete.json, como "vite": "^5.2.13"; en este caso, el carácter de intercalación ^ significa todas las versiones menores y de parches posteriores a 5.2.13 inclusive. hasta pero excluyendo 6.0.0.


		Esto se determina usando un sistema llamado semver, que puede parecer un poco complicado según la documentación, pero se puede simplificar considerando solo la información resumida y que una versión está representada por MAJOR.MINOR.PATCH, como por ejemplo 2.0.1 siendo la versión principal 2. con la versión 1 del parche.
		
		Una excelente manera de probar los valores de semver es usar la calculadora de semver.

		
		Es importante recordar que npm update no actualizará las dependencias más allá del rango definido en package.json; para hacerlo, deberá instalar esa versión específicamente.
		
	
	Más comandos: 
	
		Se encuentran en la documentación de npm, yarm y pnpm
		
		
	Crear comandos propios: 
	
		Los administradores de paquetes también permiten crear sus propios comandos y ejecutarlos desde la línea de comandos. 
		
		Por ejemplo, anteriormente invocamos el comando vite con npx para iniciar el servidor de desarrollo de Vite.
		
		Podríamos crear el siguiente comando:
		
		```
		npm run dev
		# or yarn run dev

		```
		
		Esto ejecutaría un script personalizado para iniciar nuestro proyecto en "modo de desarrollo".
		
		De hecho, incluimos esto regularmente en todos los proyectos, ya que la configuración de desarrollo local tiende a funcionar de manera ligeramente diferente a cómo funcionaría en producción.

		
		Si intentó ejecutar esto en su proyecto de prueba anterior, (probablemente) afirmaría que "falta el script de desarrollo". 
		
		Esto se debe a que npm, Yarn (y similares) buscan una propiedad llamada dev en la propiedad scripts de su archivo package.json. 
		
		Entonces, creemos un comando abreviado personalizado, "dev", en nuestro paquete.json.

		Si siguió el tutorial anterior, debería tener un archivo package.json dentro de su directorio npm-experiment.
		
		Ábralo y su miembro de secuencias de comandos debería verse así:
		
		```
		"scripts": {
		  "test": "echo \"Error: no test specified\" && exit 1",
		},

		```
		
		Actualízalo para que se vea así y guarda el archivo:
		
		```
		"scripts": {
		  "dev": "vite"
		},

		```
		
		Agregamos un comando de desarrollo personalizado como un script npm.
		
		
		Ahora intenta ejecutar lo siguiente en tu terminal, asegurándote de estar dentro del directorio npm-experiment:
		
		```
		npm run dev

		```
		
		Esto debería iniciar Vite e iniciar el mismo servidor de desarrollo local, como vimos antes.
		
		
		Tenga en cuenta que el script que definimos aquí ya no necesita el prefijo npx.
		
		Esto se debe a que los comandos npm (y Yarn) son inteligentes porque buscarán herramientas de línea de comandos que estén instaladas localmente en el proyecto antes de intentar encontrarlas a través de métodos convencionales (donde su computadora normalmente almacenará y permitirá que se encuentre el software).
		
		Puede obtener más información sobre las complejidades técnicas del comando de ejecución, aunque en la mayoría de los casos sus propios scripts se ejecutarán bien.
		
		
		Este en particular puede parecer innecesario: npm run dev tiene más caracteres para escribir que npx vite, pero es una forma de abstracción.
		
		Nos permite agregar más trabajo al comando dev en el futuro, como configurar variables de entorno, generar archivos temporales, etc., sin complicar el comando.


		Puedes agregar todo tipo de cosas a la propiedad de scripts que te ayuden a hacer tu trabajo.
		
		Por ejemplo, esto es lo que recomienda Vite en la plantilla:
		
		```
		"scripts": {
		  "dev": "vite",
		  "build": "vite build",
		  "preview": "vite preview"
		},

		```
				
				
				
# Complete toolchain
	
	Vimos el proceso de creación de una cadena de herramientas de estudio de caso de muestra.
	
	Desde la configuración de un entorno de desarrollo sensato y la implementación de herramientas de transformación hasta la implementación real de su aplicación. 
	
	Configuraremos nuestro entorno de desarrollo y configuraremos nuestras herramientas de transformación de código.
	
	
	Realmente hay combinaciones ilimitadas de herramientas y formas de usarlas
	
	También vale la pena repetir que no todas estas herramientas deben ejecutarse en la línea de comandos.
	
	Muchos de los editores de código actuales (como VS Code) tienen soporte de integración para muchas herramientas a través de complementos.
	
	
	Nuestro caso de estudio:
		
		La cadena de herramientas que estamos creando en este artículo se utilizará para construir e implementar un minisitio que muestra datos sobre el repositorio mdn/content, obteniendo sus datos de la API de GitHub.
		
	
	Herramientas utilizadas en nuestra cadena de herramientas:
		
		JSX a React:
			
			un conjunto de extensiones de sintaxis relacionadas con React que le permiten hacer cosas como definir estructuras de componentes dentro de JavaScript.
			
		latest built-in JavaScript features:
			
			como import, arrow function, etc. 
		
		development tools:
			
			como Prettier para formatear y ESLint para linting.
		
		PostCSS:
			
			para proporcionar capacidades de anidamiento de CSS.

		Vite: 
			
			para construir y minimizar nuestro código, y para escribir un montón de contenido de archivos de configuración automáticamente para nosotros.
		
		GitHub: 

			para administrar nuestro control de código fuente y eventualmente implementar nuestro sitio (usando GitHub Pages)


	Cadenas de herramientas y su complejidad inherente:
		
		Como ocurre con cualquier cadena, cuantos más eslabones tenga su cadena de herramientas, más compleja y potencialmente frágil será; por ejemplo, podría ser más compleja de configurar y más fácil de romper.
		
		Por el contrario, cuantos menos enlaces, más resiliente será la cadena de herramientas.

		
		Todos los proyectos web serán diferentes y usted debe considerar qué partes de su cadena de herramientas son necesarias y considerar cada parte cuidadosamente.


		La cadena de herramientas más pequeña es aquella que no tiene ningún vínculo.
		
		Codificaría manualmente el HTML, usaría "JavaScript básico" (es decir, sin marcos ni lenguajes intermediarios) y lo subiría todo manualmente a un servidor para alojarlo.
		
		
		Sin embargo, los requisitos de software más complicados probablemente se beneficiarán del uso de herramientas que ayuden a simplificar el proceso de desarrollo.
		
		Además, debe incluir pruebas antes de implementarlo en su servidor de producción para garantizar que su software funcione según lo previsto; esto ya parece una cadena de herramientas necesaria.

		
		Para nuestro proyecto de muestra, usaremos una cadena de herramientas diseñada específicamente para ayudar en el desarrollo de nuestro software y respaldar las decisiones técnicas tomadas durante la fase de diseño del software.
		
		Sin embargo, evitaremos herramientas superfluas, con el objetivo de mantener la complejidad al mínimo.
		
		
	Comprobación de requisitos previos:
		
		Esto es lo que debe tener antes de continuar con los pasos de configuración reales.
		
		Solo es necesario realizarlos una vez y no es necesario repetirlos nuevamente para proyectos futuros.


	Creando cuenta en GitHub: 
		
		Además de las herramientas que vamos a instalar y que contribuyen a nuestra cadena de herramientas, deberá crear una cuenta en GitHub
		
		GitHub es un servicio de repositorio de código fuente que agrega características comunitarias como seguimiento de problemas, seguimiento de lanzamientos de proyectos y mucho más.
		
		Enviaremos a un repositorio de código de GitHub, lo que provocará un efecto en cascada que (debería) implementar/deploy todo el software en home en la web.

		
	Git: 
		
		Para ayudar con el control de revisiones.

		El control de revisión ofrece muchas ventajas, como una forma de hacer una copia de seguridad de su trabajo en un lugar remoto y un mecanismo para trabajar en equipo en el mismo proyecto sin temor a sobrescribir el código de cada uno.
		
		GitHub es una tienda en línea para almacenar repositorios de git (además de una serie de herramientas útiles para trabajar con ellos).
		
		Existen varias alternativas, incluidas GitLab y Bitbucket, e incluso podría alojar sus propios repositorios de git.


		Usar el control de revisiones en tus proyectos e incluirlo como parte de la cadena de herramientas te ayudará a gestionar la evolución de tu código.

		Ofrece una forma de "confirmar" bloques de trabajo a medida que avanza, junto con comentarios como "X nueva característica implementada" o "Error Z ahora solucionado debido a cambios Y".
		
		El control de revisiones también puede permitirle ampliar el código de su proyecto, crear una versión separada y probar nuevas funciones, sin que esos cambios afecten su código original.
		
		
		Finalmente, puede ayudarlo a deshacer cambios o revertir su código a un momento "cuando estaba funcionando" si se introdujo un error en alguna parte y tiene problemas para solucionarlo, ¡algo que todos los desarrolladores deben hacer de vez en cuando!

		
		Puede interactuar con git de varias maneras diferentes, desde usar la línea de comando para emitir comandos, hasta usar una aplicación GUI de git para emitir los mismos comandos presionando botones, o incluso directamente desde su editor de código.
		
	
	Desde el proyecto existente: 
		
		Node.js y npm instalados.
		
		Vite instalado como una dependencia de desarrollo (--save-dev).

		El paquete plotly.js-dist-min se instaló como una dependencia (solo install).
		
		Scripts personalizados definidos en package.json.

		Los archivos index.html y src/main.jsx creados
		
		
		La cadena de herramientas se estructurará en las siguientes fases:
		
		Development environment:
			
			Las herramientas que son más fundamentales para ejecutar su código. 
		
		Safety net:
			
			Hacer que la experiencia de desarrollo de software sea estable y más eficiente. 
			
			También podríamos referirnos a esto como nuestro entorno de desarrollo.

		Transformation:
			
			Herramientas que nos permiten utilizar las últimas características de un lenguaje (por ejemplo, JavaScript) u otro lenguaje completo (por ejemplo, JSX o TypeScript) en nuestro proceso de desarrollo, y luego transforma nuestro código para que la versión de producción aún se ejecute en una amplia variedad de Navegadores, modernos y antiguos.
		
		Post development:
			
			herramientas que entran en juego una vez que haya terminado con el desarrollo para garantizar que su software llegue a la web y continúe ejecutándose.
			
			Veremos cómo agregar pruebas a su código e implementar/deploy la aplicación usando GitHub Pages para que esté disponible para que toda la web la vea.

			
		Comenzando con nuestro entorno de desarrollo.
		
		Seguiremos los mismos pasos que se seguirían para configurar un proyecto real.
		
	
	Creando un entorno de desarrollo:
		
		A veces se considera que esta parte de la cadena de herramientas retrasa el trabajo real, y puede ser muy fácil caer en una "madriguera" de herramientas donde se pasa mucho tiempo tratando de lograr que el entorno sea "perfecto".
		
		Pero puedes considerar esto de la misma manera que configuras tu entorno de trabajo físico.
		
		
		Si se hace bien, debe realizarse solo una vez y debe poder reutilizarse en muchos proyectos futuros. 
		
		Probablemente querrás revisar esta parte de la cadena de herramientas con regularidad y considerar si hay alguna actualización o cambio que debas introducir, pero esto no debería ser necesario con demasiada frecuencia.
		
		
		Su cadena de herramientas dependerá de sus propias necesidades, pero para este ejemplo de una cadena de herramientas bastante completa, las herramientas que se instalarán/inicializarán por adelantado serán:

		Library installation tools:
			
			para agregar dependencias.
			
		Code revision control
		
		Code tidying tools:
			
			para ordenar JavaScript, CSS y HTML.

		Code linting tools:
			
			para linting nuestro código
		
	
	Library installation tools:
		
		Comandos (ejecutados en la raíz del directorio npm-experiment) para inicializar un paquete npm e instalar las dependencias necesarias.
		
		```
		npm init
		npm install --save-dev vite
		npm install plotly.js-dist-min

		```

	
	Code revision control:
		
		Para iniciar la funcionalidad de control de fuente de git trabajando en el directorio:
		
		```
		git init 
		
		```
	
		De forma predeterminada, git rastrea los cambios de todos los archivos
		
		Sin embargo, hay algunos archivos generados de los que no necesitamos realizar un seguimiento, ya que no son código que hayamos escrito y se pueden regenerar en cualquier momento.
		
		Podemos decirle a git que ignore estos archivos creando un archivo .gitignore en la raíz del directorio del proyecto. 
		
		Agregue el siguiente contenido al archivo:
		
		```
		node_modules
		dist
		
		```
	
	
	Code tidying tools:
		
		Usaremos Prettier
		
		Instalaremos Prettier nuevamente en este proyecto
		
		```
		npm install --save-dev prettier

		```
		
		Tenga en cuenta nuevamente que estamos usando --save-dev para agregarlo como una dependencia de desarrollo
		
		porque solo lo usamos durante el desarrollo.
		
		
		Como muchas herramientas creadas más recientemente, Prettier viene con "valores predeterminados sensatos".
		Eso significa que podrás usar Prettier sin tener que configurar nada (si estás satisfecho con los valores predeterminados).
		
		Esto te permitirá continuar con lo importante: el trabajo creativo.
		
		Para demostración, agregaremos un archivo de configuración.
		
		Cree un archivo en la raíz de su directorio npm-experiment llamado .prettierrc.json.
		
		Agregue los siguientes contenidos:
		
		```
		{
		  "bracketSameLine": true
		}

		```
		
		Con esta configuración, Prettier imprimirá el > de una etiqueta de apertura HTML de varias líneas (HTML, JSX, Vue, Angular) al final de la última línea en lugar de estar solo en la siguiente línea.
		
		Este es el formato que utiliza el propio MDN.
		
		Puede encontrar más información sobre la configuración de Prettier en su documentación.

		
		De forma predeterminada, Prettier formatea todos los archivos que especifique.
		
		Sin embargo, nuevamente, no necesitamos formatear los archivos generados, o puede haber cierto código heredado que no queremos tocar. 
		
		Podemos decirle a Prettier que siempre ignore estos archivos creando un archivo .prettierignore en la raíz del directorio del proyecto.
		
		```
		node_modules
		dist
		
		```

		Tiene el mismo contenido que .gitignore, pero en un proyecto real, es posible que desees ignorar archivos diferentes para Prettier que para git.


		Ahora que Prettier está instalado y configurado, puede ejecutar y ordenar su código en la línea de comando, por ejemplo:
		
		```
		npx prettier --write ./index.html

		```
		
		En el comando anterior, usamos Prettier con el indicador --write.
		
		Prettier entiende que esto significa "si hay algún problema en el formato de mi código, solucionelo y luego guarde mi archivo". 
		
		Esto está bien para nuestro proceso de desarrollo, pero también podemos usar sin la bandera y solo verificará el archivo.
		
		Verificar el archivo (y no guardarlo) es útil para fines como verificaciones que se ejecutan antes de una publicación, es decir, "no publicar ningún código que no haya sido formateado correctamente".
		
		
		También puedes reemplazar ./index.html con cualquier otro archivo o carpeta para formatearlos.
		
		Por ejemplo, con . formateará todo en el directorio actual.
		
		En caso de que olvides la sintaxis, también puedes agregarla como un script personalizado en tu paquete.json:

		```
		"scripts": {
		  // ...
		  "format": "prettier --write ."
		},

		```

		
		Ahora puede ejecutar lo siguiente para formatear el directorio:
		
		```
		npm run format

		```
		
		Todavía puede resultar arduo ejecutar el comando cada vez que cambiamos algo, y existen algunas formas de automatizar este proceso:
		
			Usando git hooks para probar si el código está formateado antes de un commit.
		
			Usar complementos del editor de código para ejecutar comandos de Prettier cada vez que se guarda un archivo.
		
		
		git hooks:
			
			Proporciona un sistema que nos permite adjuntar acciones previas y posteriores a las tareas que realizamos con git (como confirmar su código).
			
			Pueden ser demasiado complicados, pero una vez que están en su lugar pueden ser muy poderosos.
			
			Podemos usarlo simplificadamente con Husky.
			
		
		Para VS Code, una extensión útil es Prettier Code Formatter de Esben Petersen, que permite a VSCode formatear automáticamente el código al guardarlo.
		
		Esto significa que cualquier archivo del proyecto en el que estamos trabajando se formatea correctamente, incluidos HTML, CSS, JavaScript, JSON, Markdown y más.
		
		Todo lo que necesita el editor es "Formatear al guardar" habilitado.
		
	
	Code linting tools:
		
		Linting ayuda con la calidad del código, pero también es una forma de detectar posibles errores antes durante el desarrollo.
		
		Es un ingrediente clave de una buena cadena de herramientas y que muchos proyectos de desarrollo incluirán de forma predeterminada.

		
		Las herramientas de desarrollo web existen principalmente para JavaScript (aunque hay algunas disponibles para HTML y CSS).
		
		Esto tiene sentido: si se utiliza un elemento HTML desconocido o una propiedad CSS no válida, debido a la naturaleza resistente de estos dos lenguajes, es probable que nada se rompa.
		
		JavaScript es mucho más frágil: llamar por error a una función que no existe, por ejemplo, provoca que JavaScript se rompa; Por lo tanto, linting JavaScript es muy importante, especialmente para proyectos más grandes.
		
		
		La herramienta de referencia para el linting de JavaScript es ESLint.
		
		Es una herramienta extremadamente poderosa y versátil, pero puede ser complicado configurarla correctamente y fácilmente podrías consumir muchas horas tratando de lograr la configuración correcta.

		ESLint se instala a través de npm, por lo que, tiene la opción de instalar esta herramienta local o globalmente, pero se recomienda encarecidamente una instalación local, porque de todos modos necesita tener un archivo de configuración para cada proyecto. 
		
		```
		npm install --save-dev eslint@8 @eslint/js globals

		```
		
		eslint@8 instala la versión 8 de ESLint, mientras que la última es la v9.
		
		Esto se debe a que eslint-plugin-react, que usaremos más adelante, aún no es compatible con v9.


		El paquete @eslint/js proporciona una configuración ESLint predefinida, mientras que el paquete globals proporciona una lista de nombres globales conocidos en cada entorno.
		
		Los usaremos más adelante en la configuración.
		
		Por defecto, ESLint se quejará de que no puede encontrar el archivo de configuración si lo ejecuta con npx eslint:
	
		```
		Oops! Something went wrong! :(

		ESLint: 8.57.0

		ESLint couldn't find a configuration file. To set up a configuration file for this project, please run:

		```
		
		Aquí hay un ejemplo mínimo que funciona (en un archivo llamado eslint.config.js, en la raíz del proyecto):
		
		
		```
		import js from "@eslint/js";
		import globals from "globals";

		export default [
		  js.configs.recommended,
		  {
			ignores: ["node_modules", "dist"],
		  },
		  {
			files: ["**/*.{js,jsx}"],
			languageOptions: {
			  globals: {
				...globals.browser,
			  },
			},
		  },
		];

		```
		
		La configuración de ESLint anterior:
		
		Habilita la configuración de ESLint "recomendada"

		Le dice a ESLint que ignore los archivos generados como ya lo hemos hecho con las otras herramientas.

		Le dice a ESLint que incluya archivos .js y .jsx en linting
		
		Le informa a ESLint sobre la existencia de las variables globales del navegador (utilizadas por reglas lint como no-undef para verificar variables inexistentes).

		
		El analizador ESLint no comprende JSX de forma predeterminada y sus reglas recomendadas no manejan la semántica específica de React.
		
		Por lo tanto, agregaremos más configuraciones para que sea compatible con JSX y React correctamente. 
		
		Primero, instale eslint-plugin-react y eslint-plugin-react-hooks, que proporcionan reglas para escribir React correcto e idiomático:
		
		```
		npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks

		```
		
		Luego, actualice el archivo de configuración de ESLint para incluir la configuración recomendada de estos complementos, que carga las reglas recomendadas y establece las opciones del analizador para JSX:
		
		```
		import js from "@eslint/js";
		import globals from "globals";
		import reactRecommended from "eslint-plugin-react/configs/recommended.js";
		import reactJSXRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
		import reactHooksPlugin from "eslint-plugin-react-hooks";

		export default [
		  js.configs.recommended,
		  {
			ignores: ["node_modules", "dist"],
		  },
		  {
			files: ["**/*.{js,jsx}"],
			languageOptions: {
			  globals: {
				...globals.browser,
			  },
			},
			settings: {
			  react: {
				version: "detect",
			  },
			},
		  },
		  reactRecommended,
		  reactJSXRuntime,
		  {
			plugins: {
			  "react-hooks": reactHooksPlugin,
			},
			rules: reactHooksPlugin.configs.recommended.rules,
		  },
		];

		```
		
		Nuestra configuración para eslint-plugin-react-hooks es un poco incómoda, en comparación con las adiciones de una línea para las configuraciones de eslint-plugin-react.
		
		Esto se debe a que eslint-plugin-react-hooks aún no admite el nuevo formato de configuración de ESLint.
		
		Puede verse en GitHub facebook/react#28313 
		
		Hay una lista completa de reglas de ESLint que puede modificar y configurar a su gusto y muchas empresas y equipos han publicado sus propias configuraciones de ESLint, que a veces pueden ser útiles para inspirarse o seleccionar una que crea que se adapta a sus propios estándares.
		
		Sin embargo, una advertencia: ¡la configuración de ESLint es muy profunda!. 
		
		Se puede ver en los sitios: eslint rules y en npmjs buscando esling config
		
		
		En aras de la simplicidad, en este capítulo no exploraremos todas las características de ESLint, ya que esta configuración funciona para nuestro proyecto particular y sus requisitos.
		
		Sin embargo, tenga en cuenta que si desea refinar y aplicar una regla sobre cómo se ve (o se valida) su código, es muy probable que pueda hacerlo con la configuración correcta de ESLint.

		
		Sin embargo, tenga en cuenta que si desea refinar y aplicar una regla sobre cómo se ve (o se valida) su código, es muy probable que pueda hacerlo con la configuración correcta de ESLint.


		Esa es la configuración de nuestro entorno de desarrollo completa en este momento.
		
		Ahora, finalmente estamos (casi) listos para codificar.


	Herramientas de construcción y transformación:
		
	Para JavaScript:
		
		Para este proyecto, como se mencionó anteriormente, se utilizará React, lo que también significa que se utilizará JSX en el código fuente.
			
		El proyecto también utilizará las últimas funciones de JavaScript.
		
		Un problema inmediato es que ningún navegador tiene soporte nativo para JSX; es un lenguaje intermedio que debe compilarse en idiomas que el navegador comprenda en el código de producción.
		
		Si el navegador intenta ejecutar el JavaScript fuente, se quejará inmediatamente; el proyecto necesita una herramienta de compilación para transformar el código fuente en algo que el navegador pueda consumir sin problemas
		
		
		Hay varias opciones para herramientas de transformación y, aunque Babel es particularmente popular, en Vite usaremos un complemento integrado: @vitejs/plugin-react.
		
		```
		npm install --save-dev @vitejs/plugin-react

		```
		
		Aún no tenemos una configuración de Vite! Agregue uno en vite.config.js en la raíz del directorio del proyecto:
		
		```
		import { defineConfig } from "vite";
		import react from "@vitejs/plugin-react";

		export default defineConfig({
		  plugins: [react()],
		  base: "/npm-experiment/",
		});

		```
		
		Lea la documentación de Vite para obtener más información sobre cómo configurar Vite.
		
		Debido a que nuestro sitio se implementa en páginas de GitHub, se alojará en https://your-username.github.io/your-repo-name, por lo que debes configurar la opción base de acuerdo con el nombre de tu repositorio de GitHub, pero siempre puedes ajústelo más tarde cuando lleguemos al despliegue.
		
		
	Para CSS: 	
		
		Nuestro CSS también puede utilizar una sintaxis que los navegadores no comprenden.
		
		Por ejemplo, puede utilizar una sintaxis que solo se implementó en las últimas versiones del navegador, lo que significa que los navegadores más antiguos fallarán y mostrarán un estilo roto.
		
		Podemos utilizar una herramienta para transformar nuestro CSS en un formato que todos los navegadores a los que nos dirigimos puedan entender.
		
		PostCSS es una herramienta de posprocesador de CSS.
		
		En comparación con herramientas de creación como Sass, PostCSS está destinado a escribir CSS estándar (es decir, sintaxis CSS que puede llegar a los navegadores algún día), mientras que Sass es un lenguaje personalizado en sí mismo que se compila en CSS.
		
		PostCSS está más cerca de la web y tiene una curva de aprendizaje mucho más baja.
		
		Vite admite PostCSS de forma predeterminada, por lo que solo necesita configurar PostCSS si desea compilar alguna característica. 
		
		Consulte cssdb para conocer las funciones compatibles.

		
		Para nuestros propósitos, vamos a demostrar otra transformación de CSS: módulos CSS.
		
		Es una de las formas de lograr la modularización de CSS.
		
		Recuerde que todos los selectores de CSS son globales, por lo que si tiene un nombre de clase como .button, todos los elementos con el botón de nombre de clase tendrán el mismo estilo.
		
		Esto a menudo conduce a conflictos de nombres: ¡imagine que todas sus variables de JavaScript se definan en el ámbito global!
		
		Los módulos CSS resuelven este problema haciendo que el nombre de la clase sea exclusivo para las páginas que los utilizan.
		
		Para comprender cómo funciona, después de haber descargado el código fuente, puede verificar cómo usamos los archivos .module.css y también leer la documentación de los módulos CSS.
		
		
		Aunque esta etapa de nuestra cadena de herramientas puede ser bastante dolorosa, porque hemos elegido una herramienta que intenta deliberadamente reducir la configuración y la complejidad, en realidad no hay nada más que debamos hacer durante la fase de desarrollo.
		
		Los módulos se importan correctamente, el CSS anidado se transforma correctamente en "CSS normal" y nuestro desarrollo no se ve obstaculizado por el proceso de construcción.

		
		Ya podemos escribir software. 
		
	
	Escribir código fuente: 
		
		Ahora que tenemos configurada la cadena de herramientas de desarrollo completa, generalmente es hora de comenzar a escribir código real, la parte en la que realmente debería invertir más tiempo.
		
		Para obtener los archivos de código, visite https://github.com/mdn/client-toolchain-example y descargue y descomprima el contenido de este repositorio en su disco local en algún lugar.
		
		Puede descargar el proyecto completo como un archivo zip seleccionando Clonar o descargar > Descargar ZIP.
		
		
		Ahora copie el contenido del directorio src del proyecto y utilícelo para reemplazar su directorio src actual.
		
		No necesita preocuparse por los otros archivos.
		
		
		También instale algunas dependencias que utiliza el código fuente:
		
		```
		npm install react react-dom @tanstack/react-query

		```

		Tenemos nuestros archivos de proyecto en su lugar.
		
		
	
	Ejecutar el código transformado: 
		
		Para comenzar a trabajar con nuestro proyecto, ejecutaremos el servidor Vite en la línea de comando.
		
		En su modo predeterminado, observará los cambios en su código y actualizará el servidor.
		
		Esto es bueno porque no tenemos que ir y venir entre el código y la línea de comando.

		
		Para iniciar Vite en segundo plano, vaya a su terminal y ejecute el siguiente comando (usando el script personalizado que definimos anteriormente):
		
		```
		npm run dev

		```
		
		Deberías ver un resultado como este (una vez que se hayan instalado las dependencias):
		
		```
		> client-toolchain-example@1.0.0 dev
		> vite

		Re-optimizing dependencies because lockfile has changed

		  VITE v5.2.13  ready in 157 ms

		  ➜  Local:   http://localhost:5173/
		  ➜  Network: use --host to expose
		  ➜  press h + enter to show help
		  
		```
		
		El servidor ahora se está ejecutando en la URL que se imprimió (en este caso localhost:5173).

		Vaya a esta URL en su navegador y verá la aplicación de ejemplo ejecutándose.
		
		
		Ahora podemos hacer algunos cambios y ver sus efectos en vivo.

		
		Cargue el archivo src/App.jsx en su editor de texto favorito.

		Reemplace todas las apariciones de mdn/content con su repositorio de GitHub favorito, como facebook/react.

		Guarde el archivo y luego regrese directamente a la aplicación que se ejecuta en su navegador.
		
		
		¡Notarás que el navegador se ha actualizado automáticamente y los gráficos han cambiado!

		También puede intentar usar ESLint y Prettier: intente eliminar deliberadamente una carga de espacio en blanco de uno de sus archivos y ejecute Prettier en él para limpiarlo, o introduzca un error de sintaxis en uno de sus archivos JavaScript y vea qué errores genera ESLint. usted cuando ejecuta el comando eslint, o en su editor.



# Deploying App	

	Tomamos la cadena de herramientas de ejemplo que creamos en el artículo anterior y la agregamos para que podamos implementar nuestra aplicación de muestra
	
	Enviamos el código a GitHub, lo implementamos usando GitHub Pages e incluso le mostramos cómo agregar una prueba simple al proceso.
	
	
	Post desarrollo
	
		Existe potencialmente una gran variedad de problemas que resolver en esta sección del ciclo de vida del proyecto. 
		
		Como tal, es importante crear una cadena de herramientas que maneje estos problemas de una manera que requiera la menor intervención manual posible.
		
		
		Cosas a considerar para el proyecto: 
			
		Generar una compilación de producción:
			
			Garantizar que los archivos se minimicen, se fragmenten, se les aplique "tree-shaking" y que las versiones estén "cache busted".
			
		Ejecución de tests:
			
			Pueden variar desde "¿este código está formateado correctamente?" a "¿esto hace lo que espero?" y garantizar que las pruebas fallidas impidan la implementación.
			
		Deploying código actualizado a una url activa: 
			
			o potencialmente una URL provisional para que pueda revisarse primero
		
		
		Cache busting:	
			
			Esta es la estrategia de romper el propio mecanismo de almacenamiento en caché de un navegador, lo que obliga al navegador a descargar una nueva copia de su código.
			
			Vite (y de hecho muchas otras herramientas) generará nombres de archivos que son únicos para cada nueva compilación. 
			
			Este nombre de archivo único "rompe" el caché de su navegador, asegurando así que el navegador descargue el código nuevo cada vez que se realiza una actualización del código implementado.
			
			
		Las tareas anteriores también se dividen en tareas adicionales.
		
		Tenga en cuenta que la mayoría de los equipos de desarrollo web tendrán sus propios términos y procesos durante al menos una parte de la fase posterior al desarrollo.
		
		Para este proyecto, utilizaremos la oferta de alojamiento estático gratuito de GitHub Pages para alojar nuestro proyecto.
		
		No sólo sirve nuestro sitio web en Internet sino que también nos proporciona una URL a nuestro sitio web. 
		
		
		La implementación en alojamiento tiende a estar al final del ciclo de vida del proyecto, pero con servicios como GitHub Pages que reducen el costo de las implementaciones (tanto en términos financieros como también en el tiempo necesario para implementar), es posible implementar durante el desarrollo. 

		Para compartir el trabajo en progreso o para tener un lanzamiento previo para algún otro propósito.
		
		
		GitHub proporciona un flujo de trabajo:
			
			Para convertir código nuevo en un sitio web en vivo:
			
			Envías tu código a GitHub.

			Usted define una acción de GitHub que se activa cuando hay un nuevo envío a la rama principal, que genera el código y lo coloca en una ubicación específica.

			Luego, GitHub Pages entrega el código en una URL específica.


		Son exactamente este tipo de servicios conectados los que le animamos a buscar al decidir sobre su propia cadena de herramientas de construcción.
		
		Podemos enviar nuestro código y enviarlo a GitHub y el código actualizado activará automáticamente toda la rutina de compilación.
		
		Si todo está bien, implementaremos un cambio en vivo automáticamente.
		
		La única acción que debemos realizar es ese "push" inicial.

		
		Sin embargo, tenemos que configurar estos pasos.
		
	
	Building: 
		
		Debido a que usamos Vite para el desarrollo, la opción de compilación es extremadamente sencilla de agregar.
		
		Como vimos anteriormente, ya tenemos un script personalizado npm run build que permitirá a Vite compilar todo listo para producción en lugar de simplemente ejecutarlo con fines de desarrollo y prueba.
		
		Esto incluye minificar y tree-shaking para el código y cache busting para los nombres de los archivos. 
		
		
		Es una buena práctica definir siempre un script de compilación en su proyecto, de modo que podamos confiar en npm run build para realizar siempre el paso de compilación completo, sin necesidad de recordar los argumentos del comando de compilación específicos para cada proyecto.
		
		El código de producción recién creado se coloca en un nuevo directorio llamado dist, que contiene todos los archivos necesarios para ejecutar el sitio web, listos para cargar en un servidor.

		Sin embargo, realizar este paso manualmente no es nuestro objetivo final: lo que queremos es que la compilación se realice automáticamente y que el resultado del directorio dist se implemente en vivo en nuestro sitio web.
		
	
	Committing changes en github: 
		
		Ayudará a almacenar su código en un repositorio de git
		
		Inicializamos nuestro directorio de trabajo como un directorio de trabajo git anteriormente
		
		Una forma rápida de verificar esto es ejecutar el siguiente comando:
		
		```
		git status 
		
		```
		
		Debería obtener un informe de estado de qué archivos se están rastreando, qué archivos se están preparando, etc., todos términos que forman parte de la gramática de git.
		
		(files tracked o staged) términos que forman parte de la gramática de git.
		
		Si recibe el error fatal: no se devolvió un repositorio de git, entonces el directorio de trabajo no es un directorio de trabajo de git y necesitará inicializar git usando git init.
		
		
		Tenemos tres tareas por delante:
			
			Agregue cualquier cambio que hayamos realizado a stage. 
			
				(lugar desde donde git enviará los archivos).
		
			Commit changes: 
				
				en el repositorio.

			Enviar los cambios a GitHub

				
		1. Agregar cambios: 
		
			```
			git add . 
			
			```
			
			Tenga en cuenta el punto al final, significa "todo lo que hay en este directorio".
			
			El comando es un enfoque un poco duro: agregará todos los cambios locales en los que haya trabajado de una sola vez.
			
			Si desea un control más preciso sobre lo que agrega, utilice git add -p para un proceso interactivo
			
			O agregue archivos individuales usando git add path/to/file.
		
		
		2. Ahora que todo el código está preparado:
			
			Podemos hacer commit
			
			```
			git commit -m 'committing initial code'

			```
			
			Consejos para mensajes de commit: 
				
				En la web y la documentación hay guías y buenas practicas para commits. 
				
				Manténgalos breves, concisos y descriptivos, para que describan claramente lo que hace el cambio.
		
				
		3. En GitHub:
			
			En https://github.com/new y crea tu propio repositorio para alojar este código.


		4. Asigne a su repositorio un nombre:
			
			Breve y fácil de recordar, sin espacios (use guiones para separar las palabras) y una descripción

			Después de crear el repo deberías tener una URL "remota" que apunte a tu nuevo repositorio de GitHub.
			
		
		5. La ubicación remota: 
			
			Bebe agregarse a nuestro repositorio de git local antes de que podamos enviarla allí.
			
			De lo contrario, no podrá encontrarla. 
			
			Deberá ejecutar un comando con la siguiente estructura 

			(Usar la opción HTTPS más fácil o SSH)
			
			```
			git remote add origin https://github.com/your-name/repo-name.git

			```
			
			Entonces, si su URL remota fuera https://github.com/remy/super-website.git
			
			Su comando sería

			```
			git remote add origin https://github.com/remy/super-website.git

			```
		
			Cambie la URL a su propio repositorio y ejecútelo ahora.
			
			Después de haber elegido el nombre de su repositorio, asegúrese de que la opción base en su vite.config.js refleje este nombre, como se mencionó en el capítulo anterior. 
			
			De lo contrario, los recursos de JavaScript y CSS no se vincularán correctamente.
			
			
		6. Ahora estamos listos para enviar nuestro código a GitHub; ejecute el siguiente comando ahora:

			```
			git push origin main

			```
			
			En este punto, se le pedirá que ingrese un nombre de usuario y contraseña antes de que Git permita enviar el envío.
			
			Esto se debe a que utilizamos la opción HTTPS en lugar de la opción SSH.
			
			Para esto, necesita su nombre de usuario de GitHub y luego, si no tiene activada la autenticación de dos factores (2FA), su contraseña de GitHub.
			
			Siempre le recomendamos que utilice 2FA si es posible, pero tenga en cuenta que si lo hace, también necesitará utilizar un "token de acceso personal".
			
			
			Este comando final le indica a git que envíe el código a la ubicación "remota" que llamamos origen
			
			(ese es el repositorio alojado en github.com; podríamos haberlo llamado como quisiéramos)
			
			Usando la rama main.
			
			No hemos encontrado ramas en absoluto, pero la rama "principal" es el lugar predeterminado para nuestro trabajo y es donde comienza git. 
			
			Cuando definimos la acción desencadenada para crear el sitio web, también le permitiremos observar cambios en la rama "principal".
			
		
		Con nuestro proyecto comprometido en git y enviado a nuestro repositorio de GitHub, el siguiente paso en la cadena de herramientas es definir una acción de compilación para que nuestro proyecto pueda implementarse en vivo en la web.
		
	
	GitHub Actions para deploy: 
	
		GitHub Actions, al igual que la configuración de ESLint es profunda. 
		
		No es fácil hacerlo bien en el primer intento, pero para tareas populares como "crear un sitio web estático e implementarlo en páginas de GitHub", hay muchos ejemplos para copiar y pegar.
		
		Puedes seguir las instrucciones en Publicar con un flujo de trabajo de GitHub Actions personalizado. 
		
		Puede consultar nuestro archivo de acción de GitHub para ver un ejemplo funcional.
		
		
		Después de enviar este archivo a la rama principal, debería ver una pequeña marca verde junto al título de la confirmación.

		Después de esperar unos minutos más, puede visitar la URL de GitHub page para ver su sitio web en vivo en la web.
		
	
		Ahora, un último eslabón de nuestra cadena de herramientas: una prueba para garantizar que nuestro código funcione.
		
		
	Testing: 	
	
		Las pruebas en sí son un tema amplio, incluso dentro del ámbito del desarrollo front-end. 
		
		veremos cómo agregar una prueba inicial a su proyecto y cómo usar la prueba para evitar o permitir que se implemente el proyecto.
		
		
		Al abordar las pruebas, hay muchas formas de abordar el problema:

		End-to-end testing:
			
			Implican que el visitante haga clic en una cosa y suceda otra.

		Integration testing:
			
			Básicamente dicen "¿un bloque de código sigue funcionando cuando está conectado a otro bloque?"

		Unit testing:
			
			Se prueban partes pequeñas y específicas de funcionalidad para ver si hacen lo que se supone que deben hacer.
			
		Y más. 
		
		
		Las pruebas no se limitan a JavaScript; Se pueden ejecutar pruebas contra el DOM renderizado, las interacciones del usuario, CSS e incluso el aspecto de una página.
		
		
		Sin embargo, para este proyecto vamos a crear una pequeña prueba que comprobará si los datos de la API de GitHub están en el formato correcto
		
		De lo contrario, la prueba fallará e impedirá que el proyecto entre en funcionamiento,
		
		
		La prueba en sí no es lo importante.
		
		Lo importante es cómo se maneja el fracaso o el éxito.

		Como ya estamos escribiendo una acción de compilación personalizada, podemos agregar un paso antes de la compilación que ejecuta la prueba.
		
		Si la prueba falla, la compilación fallará y la implementación no se realizará.

		La buena noticia es: debido a que usamos Vite, Vite ya ofrece una buena herramienta integrada para realizar pruebas: Vitest.
		
		
		1. Instalar Vitest: 
		
			```
			npm install --save-dev vitest
			
			```
		
		2. En package.json:
			
			Busque scripts member y actualícelo para que contenga los siguientes comandos de prueba y compilación:
			
			```
			"scripts": {
			  // …
			  "test": "vitest"
			}

			```
		
			Aquí está lo bueno de usar Vite junto con Vitest:
			
			Si usa otros marcos de prueba, debe agregar otra configuración que describa cómo se deben transformar los archivos de prueba.
			
			Pero Vitest usará automáticamente la configuración de Vite.
			
			
		3. Agregar la prueba a nuestro código base: 
		
			Normalmente, si está probando la funcionalidad de un archivo, digamos App.jsx, agregaría un archivo llamado App.test.jsx al lado.
			
			En este caso, solo estamos probando los datos, así que creemos otro directorio para guardar nuestras pruebas.
			
			Puede abrir el repositorio de ejemplo que descargó en el capítulo anterior y copiar la carpeta de pruebas.
		
		
		4. Ejecutar la prueba manualmente:
			
			```
			npm run test

			```
		
			Debería respondernos algo como: 
			
			```
			> client-toolchain-example@1.0.0 test
			> vitest
			
			DEV  v1.6.0 /Users/joshcena/Desktop/work/Tech/projects/mdn/client-toolchain-example

			✓ tests/api.test.js (1) 896ms
			  ✓ GitHub API returns the right response 896ms

			Test Files  1 passed (1)
				 Tests  1 passed (1)
			  Start at  23:12:25
			  Duration  1.03s (transform 15ms, setup 0ms, collect 5ms, tests 896ms, environment 0ms, prepare 38ms)


			PASS  Waiting for file changes...
				  press h to show help, press q to quit

			```

			Esto significa que la prueba pasó.
			
			Al igual que Vite, observará los cambios y volverá a ejecutar las pruebas cuando guarde un archivo. 
			
			Podemos salir presionando q.
			
		
		5. Conectar la prueba a nuestra acción de compilación:
			
			De modo que bloquee la compilación si la prueba falla.
			
			Abra el archivo .github/workflows/github-pages.yml (o cualquier nombre de archivo que le haya dado a su acción de compilación) y agregue el siguiente paso, justo antes del paso que ejecuta npm run build:
			
			```
			- name: Install deps
			  run: npm ci

			# Add this
			- name: Run tests
			  run: npm run test

			- name: Build
			  run: npm run build

			```
			
			Esto ejecutará la prueba antes del paso de compilación.
			
			Si la prueba falla, la compilación fallará y la implementación no se realizará.
			
			
		6. Agregar el nuevo código a GitHub: 
			
			```
			git add .
			git commit -m 'adding test'
			git push origin main

			```
			
			En algunos casos, es posible que desee probar el resultado del código compilado (ya que este no es exactamente el código original que escribimos), por lo que es posible que sea necesario ejecutar la prueba después del comando de compilación.
			
			Deberá considerar todos estos aspectos individuales mientras trabaja en sus propios proyectos.

			
		Finalmente, aproximadamente un minuto después del push. 
		
		GitHub Pages implementará la actualización del proyecto.
		
		Pero sólo si pasa la prueba que se introdujo.
		
	
	Resumen: 
		
		La calidad y el mantenimiento del código están a cargo de ESLint y Prettier.
		
		Estas herramientas se agregan como devDependencies al proyecto a través de npm install --dev eslint prettier eslint-plugin-react ... (el complemento de ESLint es necesario porque este proyecto en particular usa React).
		
		Hay dos archivos de configuración que leen las herramientas de calidad del código: eslint.config.js y .prettierrc.
		
		Durante el desarrollo, continuamos agregando dependencias usando npm.
		
		El servidor de desarrollo de Vite se ejecuta en segundo plano para observar los cambios y compilar automáticamente nuestra fuente.
		
		
		La implementación se maneja enviando nuestros cambios a GitHub (en la rama "principal"), lo que activa una compilación e implementación usando GitHub Actions para publicar el proyecto.
		
		También tenemos una prueba simple que bloquea la compilación e implementación del sitio si la fuente de la API de GitHub no nos brinda el formato de datos correcto.
		
		
		Para aquellos de ustedes que buscan un desafío, consideren si pueden optimizar alguna parte de esta cadena de herramientas. 
		
		Algunas preguntas que deben hacerse:
		
			¿Podemos extraer solo las características de plotly.js que necesitamos? 
				
				Esto reducirá el tamaño del paquete de JavaScript.
			
			¿Quizás desee agregar otras herramientas, como TypeScript para la verificación de tipos o stylelint para el análisis de CSS?
			
			¿Se podría reemplazar React por algo más pequeño?
			
			¿Podrían agregar más pruebas para evitar que se implemente una compilación incorrecta, como auditorías de rendimiento?
			
			¿Podrías configurar una notificación para avisarte cuando una nueva implementación fue exitosa o falló?


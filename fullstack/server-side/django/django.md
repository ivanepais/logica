# Django

Django es un framework web del lado del servidor extremadamente popular y con todas las funciones, escrito en Python.

Python es uno de los lenguajes de programación más fáciles de leer y comprender para los principiantes.

Existen numerosos libros y tutoriales gratuitos disponibles en Internet para ayudarlo.

Disponibles en Python for Non Programmers de python.org wiki. 


## Guía: 

1. Intro a Django: 

Una descripción general de lo que hace que este marco web sea especial.

Características principales, incluidas algunas funciones avanzadas.

Componentes principales de una aplicación Django, para darle una idea de lo que puede hacer antes de configurarla y comenzar


2. Configurar un entorno de desarrollo Django

Configurar y probar un entorno de desarrollo Django en Windows, Linux (Ubuntu) y macOS.


3. Tutorial: Sitio web de una Libreria

Aprenderá y proporciona una descripción general de la "biblioteca local", un sitio web de ejemplo en el que trabajaremos y evolucionaremos posteriormente. 


4. Tutorial: Creación del esqueleto de un sitio web. 

Luego puede completar con configuraciones, URL, modelos, vistas y plantillas específicas del sitio.


5. Tutorial: Usando modelos 

Muestra cómo definir modelos para el sitio web LocalLibrary: los modelos representan las estructuras de datos en las que queremos almacenar los datos de nuestra aplicación y también permiten a Django almacenar datos en una base de datos para nosotros (y modificarlos más adelante).

Explica qué es un modelo, cómo se declara y algunos de los principales tipos de campos. 

Muestra brevemente algunas de las principales formas en que puede acceder a los datos del modelo.


6. Tutorial: Django Admin 

Ahora que hemos creado modelos para el sitio web LocalLibrary, usaremos el sitio Django Admin para agregar algunos datos de libros "reales". 

Mostraremos cómo registrar los modelos en el sitio de administración, luego le mostraremos cómo iniciar sesión y crear algunos datos.

Mostramos algunas formas en las que puede mejorar aún más la presentación del sitio de administración.


7. Tutorial: Creando nuestra home page

Ahora estamos listos para agregar el código para mostrar nuestra primera página completa: una página de inicio para LocalLibrary que muestra cuántos registros tenemos de cada tipo de modelo y proporciona enlaces de navegación en la barra lateral a nuestras otras páginas.

A lo largo del camino, adquiriremos experiencia práctica en la escritura de mapas y vistas de URL básicos, la obtención de registros de la base de datos y el uso de plantillas.


8. Tutorial: Lista genérica y vistas detalladas

Amplía nuestro sitio web LocalLibrary, agregando listas y páginas de detalles para libros y autores.

Aquí aprenderemos sobre las vistas genéricas basadas en clases y mostraremos cómo pueden reducir la cantidad de código que debe escribir para casos de uso comunes.

También entraremos en el manejo de URL con mayor detalle, mostrando cómo realizar una coincidencia de patrones básica.


9. Tutorial: Framework para sesiones

Este tutorial amplía nuestro sitio web LocalLibrary y agrega un contador de visitas basado en sesiones a la página de inicio.

Este es un ejemplo relativamente simple, pero muestra cómo puede utilizar el marco de sesión para proporcionar un comportamiento persistente para usuarios anónimos en sus propios sitios.


10. Tutorial: Autentificación y permisos

Mostraremos cómo permitir que los usuarios inicien sesión en su sitio con sus propias cuentas y cómo controlar lo que pueden hacer y ver en función de si han iniciado sesión o no y de sus permisos.

Como parte de esta demostración, ampliaremos el sitio web de LocalLibrary, agregando páginas de inicio y cierre de sesión, y páginas específicas para el usuario y el personal para ver los libros que se han prestado.


11. Tutorial: Formularios

Mostraremos cómo trabajar con formularios HTML en Django y, en particular, la forma más sencilla de escribir formularios para crear, actualizar y eliminar instancias de modelo.

Como parte de esta demostración, ampliaremos el sitio web de LocalLibrary para que los bibliotecarios puedan renovar libros y crear, actualizar y eliminar autores usando nuestros propios formularios (en lugar de usar la aplicación de administración).


12. Tutorial: Testing

A medida que los sitios web crecen, se vuelve más difícil probarlos manualmente; no sólo hay más cosas que probar, sino que, a medida que las interacciones entre los componentes se vuelven más complejas, un pequeño cambio en un área puede requerir muchas pruebas adicionales para verificar su impacto en otras áreas.

Una forma de mitigar estos problemas es escribir pruebas automatizadas, que puedan ejecutarse de manera fácil y confiable cada vez que realice un cambio.

Muestra cómo automatizar las pruebas unitarias de su sitio web utilizando el framework de testing de Django.


13. Tutorial: Deploying en producción

Ahora que ha creado (y probado) un increíble sitio web de LocalLibrary, querrá instalarlo en un servidor web público para que el personal y los miembros de la biblioteca puedan acceder a él a través de Internet.

Proporciona una descripción general de cómo puede encontrar un host para implementar su sitio web y lo que debe hacer para que su sitio esté listo para la producción.


14. Seguridad en las app de Django

La protección de los datos del usuario es una parte esencial del diseño de cualquier sitio web.

Proporciona una demostración práctica de cómo las protecciones integradas de Django manejan dichas amenazas.



## Intro a Django

Django es un framework web Python de alto nivel que permite el desarrollo rápido de sitios web seguros y fáciles de mantener. 

Django se encarga de gran parte de las molestias del desarrollo web, para que puedas concentrarte en escribir tu aplicación sin necesidad de reinventar la rueda.

Es gratuito y de código abierto, tiene una comunidad próspera y activa, excelente documentación y muchas opciones de soporte gratuito y de pago.


Django te ayuda a escribir software que sea:


Completo:

Django sigue la filosofía de "Baterías incluidas" y proporciona casi todo lo que los desarrolladores quieran hacer "listo para usar".

Debido a que todo lo que necesita es parte de un único "producto", todo funciona perfectamente en conjunto, sigue principios de diseño consistentes y tiene documentación extensa y actualizada.


Versátil:

Django puede utilizarse (y se ha utilizado) para crear casi cualquier tipo de sitio web, desde sistemas de gestión de contenidos y wikis hasta redes sociales y sitios de noticias. 
    
Puede funcionar con cualquier framework del lado del cliente y puede entregar contenido en casi cualquier formato (incluidos HTML, canales RSS, JSON y XML).
    
    
Internamente, si bien ofrece opciones para casi cualquier funcionalidad que desee (por ejemplo, varias bases de datos populares, motores de plantillas, etc.), también se puede ampliar para utilizar otros componentes si es necesario.


Seguro:

Django ayuda a los desarrolladores a evitar muchos errores de seguridad comunes al proporcionar un marco que ha sido diseñado para "hacer lo correcto" para proteger el sitio web automáticamente.

Django proporciona una forma segura de administrar cuentas de usuario y contraseñas, evitando errores comunes como colocar información de sesión en cookies donde es vulnerable (en lugar de eso, las cookies solo contienen una clave y los datos reales se almacenan en la base de datos) o almacenar contraseñas directamente, en lugar de un hash de contraseña.
   

Un hash de contraseña es un valor de longitud fija creado enviando la contraseña a través de una función hash criptográfica.

Django puede verificar si una contraseña ingresada es correcta ejecutándola a través de la función hash y comparando la salida con el valor hash almacenado.

Sin embargo, debido a la naturaleza "unidireccional" de la función, incluso si un valor hash almacenado se ve comprometido, es difícil para un atacante descifrar la contraseña original.


Un hash de contraseña es un valor de longitud fija creado enviando la contraseña a través de una función hash criptográfica.

Django puede verificar si una contraseña ingresada es correcta ejecutándola a través de la función hash y comparando la salida con el valor hash almacenado.

Sin embargo, debido a la naturaleza "unidireccional" de la función, incluso si un valor hash almacenado se ve comprometido, es difícil para un atacante descifrar la contraseña original.

Django habilita la protección contra muchas vulnerabilidades de forma predeterminada, incluida la inyección SQL, secuencias de comandos entre sitios, falsificación de solicitudes entre sitios y clickjacking.


Escalable:

Django utiliza una arquitectura de "shared-nothing" basada en componentes (cada parte de la arquitectura es independiente de las demás y, por lo tanto, puede reemplazarse o cambiarse si es necesario). 

Tener una separación clara entre las diferentes partes significa que puede escalar para aumentar el tráfico agregando hardware en cualquier nivel: servidores de caché, servidores de bases de datos o servidores de aplicaciones. 

Algunos de los sitios más concurridos han escalado con éxito Django para satisfacer sus demandas (por ejemplo, Instagram y Disqus, por nombrar sólo dos).


Mantenible:

El código de Django se escribe utilizando principios y patrones de diseño que fomentan la creación de código mantenible y reutilizable.
    
En particular, hace uso del principio No repetirse (DRY) para que no haya duplicaciones innecesarias, lo que reduce la cantidad de código.

Django también promueve la agrupación de funcionalidades relacionadas en "aplicaciones" reutilizables y, en un nivel inferior, agrupa el código relacionado en módulos (en la línea del patrón Model View Controller (MVC)).


Portable:

Django está escrito en Python, que se ejecuta en muchas plataformas.

Eso significa que no está vinculado a ninguna plataforma de servidor en particular y puede ejecutar sus aplicaciones en muchas versiones de Linux, Windows y macOS.

Además, Django cuenta con el respaldo de muchos proveedores de alojamiento web, que a menudo proporcionan infraestructura y documentación específicas para alojar sitios Django.


## Origen de Django

Django fue desarrollado inicialmente entre 2003 y 2005 por un equipo web responsable de crear y mantener sitios web de periódicos.

Después de crear varios sitios, el equipo comenzó a factorizar y reutilizar muchos códigos y patrones de diseño comunes.

Este código común evolucionó hasta convertirse en un framework de desarrollo web genérico, que fue de código abierto como proyecto "Django" en julio de 2005.


Django ha seguido creciendo y mejorando, desde su primer lanzamiento importante (1.0) en septiembre de 2008 hasta la versión 5.0 a finales de 2023. 

Cada lanzamiento ha agregado nuevas funcionalidades y correcciones de errores, que van desde soporte para nuevos tipos de bases de datos, motores de plantillas, y almacenamiento en caché, hasta la adición de funciones y clases de vista "genéricas" (que reducir la cantidad de código que los desarrolladores tienen que escribir para una serie de tareas de programación).


Django es ahora un próspero proyecto colaborativo de código abierto, con miles de usuarios y contribuyentes.

Si bien todavía tiene algunas características que reflejan su origen, Django ha evolucionado hasta convertirse en un marco versátil que es capaz de desarrollar cualquier tipo de sitio web.


## Popularidad

No existe ninguna medida definitiva y disponible sobre la popularidad de los marcos del lado del servidor (aunque se puede estimar la popularidad utilizando mecanismos como contar el número de proyectos de GitHub y preguntas de Stack Overflow para cada plataforma).

Una mejor pregunta es si Django es "lo suficientemente popular" como para evitar los problemas de plataformas impopulares.

¿Sigue evolucionando? ¿Puedes obtener ayuda si la necesitas? ¿Existe alguna oportunidad para que obtengas un trabajo remunerado si aprendes Django?


Según la cantidad de sitios de alto perfil que usan Django, la cantidad de personas que contribuyen al código base y la cantidad de personas que brindan soporte gratuito y de pago, entonces sí, ¡Django es un marco popular!


Los sitios de alto perfil que utilizan Django incluyen: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest y Open Stack


## "opinionated" o"unopinionated".

Los frameworks web a menudo se refieren a sí mismos como "obstinados" o "sin opiniones".


Los frameworks obstinados son aquellos que tienen opiniones sobre la "forma correcta" de manejar cualquier tarea en particular.

A menudo apoyan el desarrollo rápido en un dominio particular (resolviendo problemas de un tipo particular) porque la forma correcta de hacer cualquier cosa suele estar bien comprendida y bien documentada.

Sin embargo, pueden ser menos flexibles a la hora de resolver problemas fuera de su dominio principal y tienden a ofrecer menos opciones sobre qué componentes y enfoques pueden utilizar.


Los frameworks sin opinión, por el contrario, tienen muchas menos restricciones sobre la mejor manera de unir componentes para lograr un objetivo, o incluso sobre qué componentes deben usarse.

Facilitan a los desarrolladores el uso de las herramientas más adecuadas para completar una tarea en particular, aunque a costa de que usted mismo necesite encontrar esos componentes.


Django es "algo obstinado" y, por lo tanto, ofrece "lo mejor de ambos mundos". 

Proporciona un conjunto de componentes para manejar la mayoría de las tareas de desarrollo web y una (o dos) formas preferidas de utilizarlos.

Sin embargo, la arquitectura desacoplada de Django significa que generalmente puedes elegir entre varias opciones diferentes, o agregar soporte para otras completamente nuevas si lo deseas.


## Código Django

En un sitio web tradicional basado en datos, una aplicación web espera solicitudes HTTP del navegador web (u otro cliente).

Cuando se recibe una solicitud, la aplicación determina lo que se necesita en función de la URL y posiblemente de la información en los datos POST o GET.

Dependiendo de lo que se requiera, puede leer o escribir información de una base de datos o realizar otras tareas necesarias para satisfacer la solicitud.

Luego, la aplicación devolverá una respuesta al navegador web, a menudo creando dinámicamente una página HTML para que la muestre el navegador insertando los datos recuperados en marcadores de posición en una plantilla HTML.


Las aplicaciones web de Django normalmente agrupan el código que maneja cada uno de estos pasos en archivos separados.

Diagrama:

HTTP Request -> URLS(urls.py) -> View(views.py) -> HTTP Response (HTML)

Model(models.py) <- read/write data -> View

Template(<filename>.html) -> View


URL: 

Si bien es posible procesar solicitudes de cada URL a través de una sola función, es mucho más fácil de mantener escribir una función de vista separada para manejar cada recurso.

Se utiliza un asignador de URL para redirigir las solicitudes HTTP a la vista adecuada según la URL de la solicitud.

El asignador de URL también puede hacer coincidir patrones particulares de cadenas o dígitos que aparecen en una URL y pasarlos a una función de visualización como datos.


View: 

Es una función de controlador de solicitudes, que recibe solicitudes HTTP y devuelve respuestas HTTP. 

Las vistas acceden a los datos necesarios para satisfacer las solicitudes a través de modelos y delegan el formato de la respuesta a plantillas.


Models:

Son objetos de Python que definen la estructura de los datos de una aplicación y proporcionan mecanismos para administrar (agregar, modificar, eliminar) y consultar registros en la base de datos.


Templates: 

Es un archivo de texto que define la estructura o el diseño de un archivo (como una página HTML), con marcadores de posición utilizados para representar el contenido real.

Una vista puede crear dinámicamente una página HTML usando una plantilla HTML, llenándola con datos de un modelo.

Se puede utilizar una plantilla para definir la estructura de cualquier tipo de archivo; ¡No tiene que ser HTML!


Django se refiere a esta organización como la arquitectura "Model View Template (MVT)".

Tiene muchas similitudes con la arquitectura más familiar de Model View Controller.



### Enviando solicitud a la vista correcta (urls.py)

Un asignador de URL normalmente se almacena en un archivo llamado urls.py.

En el siguiente ejemplo, el asignador (urlpatterns) define una lista de asignaciones entre rutas (patrones de URL específicos) y las funciones de visualización correspondientes.

Si se recibe una solicitud HTTP que tiene una URL que coincide con un patrón específico, se llamará a la función de vista asociada y se pasará la solicitud.

```
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book_detail, name='book_detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/$', views.best),
]

```

El objeto urlpatterns es una lista de funciones path() y/o re_path()

(las listas de Python se definen usando corchetes, donde los elementos están separados por comas y pueden tener una coma final opcional).

Por ejemplo: [item1, item2, item3, ]


El primer argumento de ambos métodos es route (pattern) que coincidirá

path() utiliza corchetes angulares para definir partes de una URL que se capturarán y pasarán a la función de vista como argumentos con nombre.

La función re_path() utiliza un enfoque flexible de coincidencia de patrones conocido como expresión regular.


El segundo argumento es otra función que se llamará cuando el patrón coincida.

La notación views.book_detail indica que la función se llama book_detail() y se puede encontrar en un módulo llamado views (es decir, dentro de un archivo llamado views.py)


### Manejando la solicitud (views.py):

Las vistas son el corazón de la aplicación web, reciben solicitudes HTTP de clientes web y devuelven respuestas HTTP.

En el medio, reúnen los otros recursos del marco para acceder a bases de datos, representar plantillas, etc.


El siguiente ejemplo muestra una función de vista mínima index(), que nuestro asignador de URL podría haber llamado en la sección anterior.

Como todas las funciones de vista, recibe un objeto HttpRequest como parámetro (solicitud) y devuelve un objeto HttpResponse.

En este caso, no hacemos nada con la solicitud y nuestra respuesta devuelve una cadena codificada.

```
# filename: views.py (Django view functions)

from django.http import HttpResponse

def index(request):
    # Get an HttpRequest - the request parameter
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Hello from Django!')

```

Los módulos de Python son "bibliotecas" de funciones, almacenadas en archivos separados, que quizás queramos usar en nuestro código.

Aquí importamos solo el objeto HttpResponse del módulo django.http para poder usarlo en nuestra vista: desde django.http import HttpResponse.

Hay otras formas de importar algunos o todos los objetos de un módulo.

Las funciones se declaran utilizando la palabra clave def como se muestra arriba, con los parámetros con nombre enumerados entre paréntesis después del nombre de la función; toda la línea termina en dos puntos.

Observe cómo todas las líneas siguientes tienen sangría.

La sangría es importante, ya que especifica que las líneas de código están dentro de ese bloque en particular (la sangría obligatoria es una característica clave de Python y es una de las razones por las que el código Python es tan fácil de leer).


Las vistas generalmente se almacenan en un archivo llamado views.py.


### Definición de modelos de datos (models.py)

Las aplicaciones web de Django administran y consultan datos a través de objetos de Python denominados modelos.

Los modelos definen la estructura de los datos almacenados, incluidos los tipos de campos y posiblemente también su tamaño máximo, valores predeterminados, opciones de lista de selección, texto de ayuda para documentación, texto de etiqueta para formularios, etc.

La definición del modelo es independiente de la base de datos subyacente; puede elegir una entre varias como parte de la configuración de su proyecto.

Una vez que haya elegido qué base de datos desea usar, no necesita hablar con ella directamente: simplemente escriba la estructura de su modelo y otro código, y Django se encargará de todo el "trabajo sucio" de comunicarse con la base de datos.


El siguiente fragmento de código muestra un modelo de Django muy simple para un objeto Team.

La clase Team se deriva de los modelos de clase Django.Model

Define el nombre del equipo y el nivel del equipo como campos de caracteres y especifica una cantidad máxima de caracteres que se almacenarán para cada registro.

team_level puede ser uno de varios valores, por lo que lo definimos como un campo de elección y proporcionamos una asignación entre las opciones que se mostrarán y los datos que se almacenarán, junto con un valor predeterminado.

```
# filename: models.py

from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=40)

    TEAM_LEVELS = (
        ('U09', 'Under 09s'),
        ('U10', 'Under 10s'),
        ('U11', 'Under 11s'),
        # …
        # list other team levels
    )
    team_level = models.CharField(max_length=3, choices=TEAM_LEVELS, default='U11')

```

Python admite la "programación orientada a objetos", un estilo de programación en el que organizamos nuestro código en objetos, que incluyen datos relacionados y funciones para operar con esos datos.

Los objetos también pueden heredar/extender/derivar de otros objetos, lo que permite compartir un comportamiento común entre objetos relacionados.

En Python usamos la palabra clave clase para definir el "modelo" de un objeto.

Podemos crear múltiples instancias específicas del tipo de objeto según el modelo de la clase.


Entonces, por ejemplo, aquí tenemos una clase Equipo, que deriva de la clase Modelo.

Esto significa que es un modelo y contendrá todos los métodos de un modelo, pero también podemos darle sus propias características especializadas.

En nuestro modelo definimos los campos que nuestra base de datos necesitará para almacenar nuestros datos, dándoles nombres específicos.

Django usa estas definiciones, incluidos los nombres de los campos, para crear la base de datos subyacente.


### Consultando datos (views.py)

El modelo Django proporciona una API de consulta simple para buscar en la base de datos asociada.

Esto puede compararse con varios campos a la vez usando diferentes criterios (por ejemplo, exacto, que no distingue entre mayúsculas y minúsculas, mayor que, etc.) y puede admitir declaraciones complejas (por ejemplo, puede especificar una búsqueda en equipos U11 que tengan un equipo nombre que comienza con "Fr" o termina con "al").


El fragmento de código muestra una función de visualización (controlador de recursos) para mostrar todos nuestros equipos U09.

La línea list_teams = Team.objects.filter(team_level__exact="U09") muestra cómo podemos usar la API de consulta de modelo para filtrar todos los registros donde el campo team_level tiene exactamente el texto U09 (observe cómo se pasa este criterio al filtro).

Funcionan como argumento, con el nombre del campo y el tipo de coincidencia separados por un doble guión bajo: nivel_equipo__exacto).

```
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)

```

Esta función utiliza la función render() para crear la HttpResponse que se envía de vuelta al navegador.

Esta función es un atajo; crea un archivo HTML combinando una plantilla HTML especificada y algunos datos para insertar en la plantilla (proporcionados en la variable denominada contexto).


### Rendering data (HTML templates)

Los sistemas de plantillas le permiten especificar la estructura de un documento de salida, utilizando marcadores de posición para los datos que se completarán cuando se genere una página

Las plantillas se utilizan a menudo para crear HTML, pero también pueden crear otros tipos de documentos.

Django admite tanto su sistema de plantillas nativo como otra biblioteca popular de Python llamada Jinja2 lista para usar (también se puede hacer que admita otros sistemas si es necesario).


El fragmento de código muestra cómo podría verse la plantilla HTML llamada por la función render() en la sección anterior.

Esta plantilla se escribió bajo el supuesto de que tendrá acceso a una variable de lista llamada youngest_teams cuando se represente (esto está contenido en la variable de contexto dentro de la función render() anterior).

Dentro del esqueleto HTML tenemos una expresión que primero verifica si la variable youngest_teams existe y luego la itera en un bucle for.

En cada iteración, la plantilla muestra el valor team_name de cada equipo en un elemento <li>.

```
## filename: best/templates/best/index.html

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Home page</title>
</head>
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


## Más funciones de Django 

Las secciones anteriores muestran las características principales que utilizará en casi todas las aplicaciones web: mapeo de URL, vistas, modelos y plantillas.

Algunas de las otras cosas proporcionadas por Django incluyen:


Forms: 

Los formularios HTML se utilizan para recopilar datos del usuario para procesarlos en el servidor.

Django simplifica la creación, validación y procesamiento de formularios.


Autenticación y permisos de usuario:
	
Django incluye un sólido sistema de permisos y autenticación de usuario que se ha creado teniendo en cuenta la seguridad.


Almacenamiento en caché:

Crear contenido dinámicamente es mucho más intensivo (y lento) desde el punto de vista computacional que servir contenido estático.

Django proporciona almacenamiento en caché flexible para que puedas almacenar toda o parte de una página renderizada para que no se vuelva a renderizar excepto cuando sea necesario.


Sitio de administración:

El sitio de administración de Django se incluye de forma predeterminada cuando crea una aplicación utilizando el esqueleto básico.

Hace que sea trivialmente fácil proporcionar una página de administración para que los administradores del sitio creen, editen y vean cualquier modelo de datos en su sitio.


Serialización de datos:

Django facilita la serialización y entrega de datos como XML o JSON.

Esto puede resultar útil al crear un servicio web (un sitio web que únicamente proporciona datos para ser consumidos por otras aplicaciones o sitios, y no muestra nada en sí mismo), o al crear un sitio web en el que el código del lado del cliente maneja toda la representación o datos. 



# Django development environment

El entorno de desarrollo es la instalación de Django en la pc para desarrollar y probar aplicaciones de Django antes de implementarlas en un entorno de producción.

Las principales herramientas que proporciona Django son un conjunto de scripts de Python para crear y trabajar con proyectos de Django, junto con un servidor web de desarrollo simple que puede usar para probar Django web local (es decir, en su computadora, no en un servidor web externo) aplicaciones en el navegador web de su computadora.


También hay otras herramientas periféricas, que a menudo forman parte del entorno de desarrollo.

Estos incluyen cosas como un editor de texto o IDE para editar código, linters para formateo automático, etc.


## Opciones de configuración de Django

Django es extremadamente flexible en términos de cómo y dónde puede instalarse y configurarse. 

Django puede ser:

Instalado en diferentes sistemas operativos.

Se instala desde la fuente, desde el índice de paquetes de Python (PyPi) y, en muchos casos, desde la aplicación de administración de paquetes de la computadora host.

Configurado para utilizar una de varias bases de datos, que también pueden necesitar instalarse y configurarse por separado.

Ejecutado en el entorno Python del sistema principal o en entornos virtuales Python separados.


Cada una de estas opciones requiere una configuración y configuración ligeramente diferentes.

Otras posibles opciones de instalación se tratan en la documentación oficial de Django.


## Sistemas Operativos compatibles

Las aplicaciones web de Django se pueden ejecutar en casi cualquier máquina que pueda ejecutar el lenguaje de programación Python 3: Windows, macOS, Linux/Unix, Solaris, por nombrar sólo algunos.

Casi cualquier computadora debería tener el rendimiento necesario para ejecutar Django durante el desarrollo.


## Versión de Python

Puede utilizar cualquier versión de Python compatible con su versión de Django

Para Django 5.0, las versiones permitidas son Python 3.10 a 3.12.

El proyecto Django recomienda (y "admite oficialmente") el uso de la versión más reciente disponible de la versión compatible de Python.


## Versión de Django

Hay tres lugares para descargar Django:

El repositorio de paquetes de Python (PyPi), utilizando la herramienta pip.

Esta es la mejor manera de obtener la última versión estable de Django


Utilice una versión del administrador de paquetes de su computadora.

Las distribuciones de Django que vienen incluidas con los sistemas operativos ofrecen un mecanismo de instalación familiar.

Sin embargo, tenga en cuenta que la versión empaquetada puede ser bastante antigua y solo puede instalarse en el entorno Python del sistema (que puede no ser lo que desea).


Instalar desde la fuente.

Puede obtener e instalar la última versión de Django desde la fuente.

Esto no se recomienda para principiantes, pero es necesario cuando esté listo para comenzar a contribuir con Django.


## Database

Django admite oficialmente las bases de datos PostgreSQL, MariaDB, MySQL, Oracle y SQLite, y existen bibliotecas comunitarias que brindan distintos niveles de soporte para otras bases de datos SQL y NoSQL populares.

Le recomendamos que seleccione la misma base de datos tanto para producción como para desarrollo (aunque Django abstrae muchas de las diferencias de la base de datos utilizando su Object-Relational Mapper (ORM), todavía hay problemas potenciales que es mejor evitar).


Usaremos la base de datos SQLite, que almacena sus datos en un archivo. SQLite está diseñado para usarse como una base de datos liviana y no puede admitir un alto nivel de concurrencia

Sin embargo, es una excelente opción para aplicaciones que son principalmente de sólo lectura.


Django está configurado para usar SQLite de forma predeterminada cuando inicia el proyecto de su sitio web usando las herramientas estándar (django-admin).

Es una excelente opción cuando estás comenzando porque no requiere configuración ni configuración adicional.


## Instalación global y local/virtual

Cuando instala Python3, obtiene un único entorno global compartido por todo el código Python3.

Si bien puedes instalar cualquier paquete de Python que desees en el entorno, solo puedes instalar una versión particular de cada paquete a la vez.


Las aplicaciones Python instaladas en el entorno global pueden potencialmente entrar en conflicto entre sí (es decir, si dependen de diferentes versiones del mismo paquete).


Si instala Django en el entorno predeterminado/global, solo podrá apuntar a una versión de Django en la computadora.

Esto puede ser un problema si desea crear nuevos sitios web (utilizando la última versión de Django) y al mismo tiempo mantener sitios web que dependen de versiones anteriores.


Como resultado, los desarrolladores experimentados de Python/Django normalmente ejecutan aplicaciones de Python dentro de entornos virtuales de Python independientes.

Esto permite múltiples entornos Django diferentes en una sola computadora.

¡El propio equipo de desarrolladores de Django recomienda utilizar entornos virtuales Python!


## Instalar Python 3 

Para poder utilizar Django debes tener Python 3 en tu sistema operativo. 

También necesitarás la herramienta Índice de paquetes de Python, pip3, que se utiliza para administrar (instalar, actualizar y eliminar) paquetes/bibliotecas de Python utilizados por Django y tus otras aplicaciones de Python.


Dependiendo de su plataforma, es posible que también pueda instalar Python/pip desde el propio administrador de paquetes del sistema operativo o mediante otros mecanismos.

Para la mayoría de las plataformas, puede descargar los archivos de instalación necesarios desde https://www.python.org/downloads/ e instalarlos utilizando el método adecuado específico de la plataforma.


### Debian/Ubuntu 

Puede verificar la version de Python ejecutando el siguiente comando

```
python3 -V 

python3 --version

```

Sin embargo, la herramienta Python Package Index (pip3) que necesitará para instalar paquetes para Python 3 (incluido Django) no está disponible de forma predeterminada.

Puedes instalar pip3 en la terminal:

```
sudo apt install python3-pip

```

Python 3.10 es la versión más antigua compatible con Django 5.0


## macOs 

macOS no incluye Python 3 de forma predeterminada (Python 2 está incluido en versiones anteriores).

Puede confirmar esto ejecutando el siguiente comando en la terminal:

```
python3 -V

```

Esto mostrará el número de versión de Python, que indica que Python 3 está instalado, o python3: comando no encontrado, que indica que no se encontró Python 3.


Puedes instalar fácilmente Python 3 (junto con la herramienta pip3) desde python.org:

Vaya a https://www.python.org/downloads/macos/

Descargue la versión estable de la versión compatible más reciente que funcione con Django 5.0.

Localice el archivo usando Finder y haga doble clic en el archivo del paquete.

Siguiendo las indicaciones de instalación.


Ahora puede confirmar que la instalación se realizó correctamente ejecutando python3 -V nuevamente y verificando el número de versión de Python.

De manera similar, puedes verificar que pip3 esté instalado enumerando los paquetes disponibles:

```
pip3 list

```


### Windows 10/11 

Windows no incluye Python de forma predeterminada, pero puedes instalarlo fácilmente (junto con la herramienta pip3) desde python.org:

Vaya a https://www.python.org/downloads/windows/

Descargue la versión estable de la versión compatible más reciente que funcione con Django 5.0.

Instale Python haciendo doble clic en el archivo descargado y siguiendo las instrucciones de instalación

Asegúrese de marcar la casilla "Agregar Python a la RUTA"


Luego puede verificar que Python 3 se instaló ingresando el siguiente texto en el símbolo del sistema:

```
py -3 -V

```

El instalador de Windows incorpora pip3 (el administrador de paquetes de Python) por defecto. 

Puede enumerar los paquetes instalados como se muestra:

```
py -3 -m pip list

```

El instalador debe configurar todo lo necesario para que funcione el comando anterior

Sin embargo, si recibe un mensaje que indica que no se puede encontrar Python, es posible que haya olvidado agregarlo a la ruta de su sistema.

Puede hacer esto ejecutando el instalador nuevamente, seleccionando "Modificar" y marcando la casilla "Agregar Python a las variables de entorno" en la segunda página.


## Llamando a Python 3 y pip 3

Hay diferentes comandos para llamar a Python 3 y pip en diferentes sistemas operativos.


Si solo tiene instalado Python 3 (y no Python 2), los comandos simples python y pip generalmente se pueden usar para ejecutar Python y pip en cualquier sistema operativo.

Si esto está permitido en su sistema, obtendrá una cadena de versión "3" cuando ejecute -V con los comandos básicos, como se muestra:

```
python -V
pip -V

```

Si Python 2 está instalado, para usar la versión 3, debe prefijar los comandos con python3 y pip3 en Linux/macOS, y py -3 y py -3 -m pip en Windows:


## Usar Django en Python virtual environment

Las bibliotecas que usaremos para crear nuestros entornos virtuales son virtualenvwrapper (Linux y macOS) y virtualenvwrapper-win (Windows), que a su vez utilizan la herramienta virtualenv.

Las herramientas contenedoras crean una interfaz consistente para administrar interfaces en todas las plataformas.


### Instalar virtual environment software

Debian/Ubuntu:

Después de instalar Python y pip, puede instalar virtualenvwrapper (que incluye virtualenv).

Instale la herramienta usando pip3:

```
sudo pip3 install virtualenvwrapper

```

Luego agregue las siguientes líneas al final de su archivo de inicio de shell (este es un nombre de archivo oculto .bashrc en su directorio de inicio).

Estos establecen la ubicación donde deben vivir los entornos virtuales, la ubicación de los directorios de su proyecto de desarrollo y la ubicación del script instalado con este paquete:

```
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh

```

Nota: Las variables VIRTUALENVWRAPPER_PYTHON y VIRTUALENVWRAPPER_VIRTUALENV_ARGS

apuntan a la ubicación normal de instalación de Python 3

y la fuente /usr/local/bin/virtualenvwrapper.sh apunta a la ubicación normal del script virtualenvwrapper.sh. 

Si virtualenv no funciona cuando lo prueba, una cosa que debe verificar es que Python y el script estén en la ubicación esperada (y luego cambie el archivo de inicio de manera adecuada).

Puede encontrar las ubicaciones correctas para su sistema usando los comandos which virtualenvwrapper.sh y which python3.

```
which virtualenvwrapper.sh 

which python3.

```


Luego vuelva a cargar el archivo de inicio ejecutando el siguiente comando en la terminal:

```
source ~/.bashrc

```

Deberías ver un montón de scripts

```
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/premkproject
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postmkproject
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/preactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/get_env_details

```

Ahora puedes crear un nuevo entorno virtual con el comando mkvirtualenv.

```
mkvirtualenv

```


macOS:

Instale virtualenvwrapper (y empaquete virtualenv) usando pip

```
sudo pip3 install virtualenvwrapper

```

Luego agregue las siguientes líneas al final de su archivo de inicio de shell (estas son las mismas líneas que para Ubuntu).

Si está utilizando el shell zsh, el archivo de inicio será un archivo oculto llamado .zshrc en su directorio de inicio.

Si está utilizando el shell bash, será un archivo oculto llamado .bash_profile.

Es posible que deba crear el archivo si aún no existe.

```
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh

```

Una prueba de instalación en macOS terminó con las siguientes líneas necesarias en el archivo de inicio:

```
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
export PROJECT_HOME=$HOME/Devel
source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh

```

Puede ver las rutas con:

```
which virtualenvwrapper.sh 

which python3.

```


Se recarga el archivo de inicio:

```
source ~/.bash_profile

```

En este punto, es posible que vea que se ejecutan un montón de scripts (los mismos scripts que para la instalación de Ubuntu). 

Ahora debería poder crear un nuevo entorno virtual con el comando mkvirtualenv.


Nota: Si no puede encontrar el archivo de inicio para editar en el buscador, también puede abrirlo en la terminal usando nano.


Suponiendo que estás usando bash, los comandos se ven así:

```
cd ~  # Navigate to my home directory
ls -la #List the content of the directory. You should see .bash_profile
nano .bash_profile # Open the file in the nano text editor, within the terminal
# Scroll to the end of the file, and copy in the lines above
# Use Ctrl+X to exit nano, choose Y to save the file.

```


Windows:

Instalar virtualenvwrapper-win es incluso más simple que configurar virtualenvwrapper porque no necesita configurar dónde la herramienta almacena la información del entorno virtual (hay un valor predeterminado). 

Todo lo que necesita hacer es ejecutar el siguiente comando en el símbolo del sistema:

```
py -3 -m pip install virtualenvwrapper-win

```

Ahora puedes crear un nuevo entorno virtual con el comando mkvirtualenv


### Crear virtual environment

Una vez que haya instalado virtualenvwrapper o virtualenvwrapper-win, trabajar con entornos virtuales es muy similar en todas las plataformas.


Ahora puedes crear un nuevo entorno virtual con el comando mkvirtualenv.

A medida que se ejecuta este comando, verá que se configura el entorno (lo que ve es ligeramente específico de la plataforma).

Cuando se complete el comando, el nuevo entorno virtual estará activo; puede ver esto porque el inicio del mensaje será el nombre del entorno entre paréntesis (a continuación mostramos esto para Ubuntu, pero la línea final es similar para Windows/macOS). .

```
mkvirtualenv my_django_environment

```

Debería ver un resultado similar al siguiente:

```
Running virtualenv with interpreter /usr/bin/python3
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/t_env7/bin/get_env_details
(my_django_environment) ubuntu@ubuntu:~$

```


Ahora que estás dentro del entorno virtual, puedes instalar Django y comenzar a desarrollar.


De ahora en adelante todos los comandos se ejecutan dentro de un entorno virtual de Python como el que configuramos anteriormente.


### Usar virtual environment

Hay algunos otros comandos útiles que debes conocer y hay muchos más en la documentación. 

Los más usados regularmente:

deactivate:

salir del entorno virtual actual de Python


workon:

enumera los entornos virtuales disponibles


workon name_of_environment:

Activa el entorno virtual Python especificado


rmvirtualenv name_of_environment:

elimina el entorno especificado.


## Instalar Django

Una vez que haya creado un entorno virtual y haya llamado a workon para ingresar, puede usar pip3 para instalar Django.

```
# Linux/macOS
python3 -m pip install django~=4.2

# Windows
py -3 -m pip install django~=4.2

```


Puedes probar que Django está instalado ejecutando el siguiente comando (esto solo prueba que Python puede encontrar el módulo Django):

```
# Linux/macOS
python3 -m django --version

# Windows
py -3 -m django --version

```


Nota para Windows:

Si el comando de Windows anterior no muestra un módulo Django presente, intente:
intento

```
py -m django --version

```

En Windows, los scripts de Python 3 se inician anteponiendo al comando py -3, aunque esto puede variar según su instalación específica.

Intente omitir el modificador -3 si encuentra algún problema con los comandos. 

En Linux/macOS, el comando es python3.


## Gestión de código fuente con Git y GitHub

Source Code Management (SCM) y las herramientas de versiones (versioning tools)

Permiten almacenar y recuperar de manera confiable versiones de su código fuente, probar cambios y compartir código entre sus experimentos y el "known good code" cuando sea necesario.


Existen muchas herramientas SCM diferentes, incluidas git, Mercurial, Perforce, SVN (Subversion), CVS (Sistema de versiones concurrentes), etc., y fuentes de alojamiento SCM en la nube como Bitbucket, GitHub y GitLab.

Alojaremos nuestro código en GitHub, uno de los servicios de alojamiento de código fuente basado en la nube más populares.

Usaremos la herramienta git para administrar nuestro código fuente localmente y enviarlo a GitHub cuando sea necesario.


Conceptos claves:

Git (y GitHub) utilizan repositorios ("repos") como "depósito" (bucket) de nivel superior para almacenar código, donde cada repositorio normalmente contiene el código fuente de una sola aplicación o módulo.

Los repositorios pueden ser públicos, en cuyo caso el código es visible para todos en Internet, o privados, en cuyo caso están restringidos a la organización propietaria o a la cuenta de usuario.


Todo el trabajo se realiza en una "rama" (branch) particular de código en su repositorio. 

Cuando desee hacer una copia de seguridad de algunos cambios en una rama, puede crear un "commit", que almacena todos los cambios desde su última confirmación en la rama actual.


El repositorio se crea con una rama predeterminada llamada "main".

Puedes generar otras ramas a partir de esto usando git, que inicialmente tienen todos los commit de la rama original.

Puede evolucionar ramas por separado agregando commits y luego usar una "Pull Request" (PR) en GitHub para fusionar cambios de una rama a otra.

También puedes usar git para cambiar entre ramas en tu computadora local, por ejemplo, para probar cosas diferentes.


Además de las ramas, es posible crear tags en cualquier rama y luego recuperar esa rama en ese punto.


### Crear repo en GitHub

Creamos y configuramos un repositorio llamado "django_local_library"

Seleccione "Público" para el repositorio (el valor predeterminado).

Advertencia: esto hará que todo el código fuente sea visible. 

Recuerde no almacenar credenciales u otro material confidencial en su repositorio a menos que sea privado.
        
Elija Python en la lista de selección Agregar .gitignore.
        
Elija su licencia preferida en la lista de selección Agregar licencia. 

MDN utiliza "Creative Commons Zero v1.0 Universal" para este ejemplo.

Marque Inicializar este repositorio con un README.

Se creará el repositorio que contendrá solo los archivos README.txt y .gitignore.


### Clonar repo creado

Para copiarlo localmente a nuestro pc. 

En GitHub, haga clic en el botón verde Código. 

En la sección "Clonar", seleccione la pestaña "HTTPS" y copie la URL.
        
Si usó el nombre del repositorio "django_local_library", la URL debería ser algo como: https://github.com/<your_git_user_id>/django_local_library.git.


Abra un símbolo del sistema/terminal y clone su repositorio usando la URL que copió arriba:

```
git clone https://github.com/<your_git_user_id>/django_local_library.git

```

Esto creará el repositorio dentro del directorio actual.


Ir al directorio

```
cd django_local_library

```


### Modificar y sincronizar cambios

Ahora modificaremos el archivo .gitignore en la computadora local, confirmaremos el cambio y actualizaremos el repositorio en GitHub.

Este es un cambio útil, pero principalmente lo hacemos para mostrarle cómo extraer cambios (pull) de GitHub, realizar cambios localmente y luego enviarlos (push) a GitHub.


En el símbolo del sistema/terminal, primero hacemos "fetch" (get) y después pull (get and merge en la rama actual) la última versión del código fuente de GitHub:

Este paso no es estrictamente necesario ya que acabamos de clonar la fuente y sabemos que está actualizada. 

Sin embargo, en general debes actualizar tus fuentes desde GitHub antes de realizar cambios.

```
git fetch origin main
git pull origin main

```

'origin' es remoto que representa la ubicación del repositorio donde se encuentra la fuente, y "main" es la rama.

Puedes verificar que el origen es nuestro repositorio en GitHub usando el comando: git remote -v.

```
git remote -v

```

A continuación nos movemos a una nueva rama para almacenar nuestros cambios:

```
git checkout -b update_gitignore

```

checkout se utiliza para cambiar alguna rama para que sea la rama actual en la que está trabajando.

El indicador -b indica que pretendemos crear una nueva rama llamada "update_gitignore" en lugar de seleccionar una rama existente con ese nombre.


Abra el archivo .gitignore, copie las siguientes líneas:

```
# Text backup files
*.bak

# Database
*.sqlite3

```

Tenga en cuenta que .gitignore se utiliza para indicar archivos de los que git no debe hacer una copia de seguridad automáticamente, como archivos temporales y otros artefactos de compilación.


Utilice add para agregar todos los archivos modificados (que no sean ignorados por el archivo .gitignore) a "staging area" de la rama actual. 

```
git add -A

```


status para verificar que todos los archivos que está a punto de enviar sean correctos (desea incluir archivos fuente, no binarios, archivos temporales, etc.).

Debería parecerse un poco a la lista a continuación.

```
> git status
On branch main
Your branch is up-to-date with 'origin/update_gitignore'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   .gitignore

```


Cuando esté satisfecho, envíe los archivos a su repositorio local, utilizando el indicador -m para especificar un mensaje de confirmación conciso pero claro.

Esto equivale a aprobar los cambios y convertirlos en parte oficial del repositorio local.

```
git commit -m ".gitignore: add .bak and .sqlite3"

```


En este punto, el repositorio remoto no ha cambiado. 

Podemos enviar (push) la rama update_gitignore al repositorio "origen" (GitHub) usando el siguiente comando:

```
git push origin update_gitignore

```


Vuelva a la página de GitHub donde creó su repositorio y actualice la página.

Debería aparecer un banner con un botón para presionar "Compare and pull request" la rama que acaba de enviar. 

Seleccione el botón y luego siga las instrucciones para crear y luego fusionar una pull request.

Después de la fusión, la rama "main" del repositorio en GitHub contendrá los cambios en .gitignore.


Puede continuar actualizando su repositorio local a medida que los archivos cambian usando este ciclo de add/commit/push.

Usaremos este repositorio para almacenar el código fuente del sitio web de nuestra biblioteca local.


## Otras herramientas de Python

Los desarrolladores experimentados de Python pueden instalar herramientas adicionales, como linters (que ayudan a detectar errores comunes en el código).

Tenga en cuenta que debe utilizar un linter compatible con Django como pylint-django, porque algunos linter comunes de Python (como pylint) informan incorrectamente errores en los archivos estándar generados para Django.


## Testear instalación

Una prueba más interesante es crear un proyecto esqueleto y verlo funcionar.

Para hacer esto, primero navegue en su símbolo del sistema/terminal hasta donde desea almacenar sus aplicaciones Django.

Cree una carpeta para su sitio de prueba y navegue hasta ella.

```
mkdir django_test
cd django_test

```

Luego puede crear un nuevo sitio esqueleto llamado "mytestsite" usando la herramienta django-admin como se muestra.

Después de crear el sitio, puede navegar a la carpeta donde encontrará el script principal para administrar proyectos, llamado manage.py.

```
django-admin startproject mytestsite
cd mytestsite

```

Podemos ejecutar el servidor web de desarrollo desde esta carpeta usando Manage.py y el comando RunServer, como se muestra.

```
# Linux/macOS
python3 manage.py runserver

# Windows
py -3 manage.py runserver

```

Puedes ignorar las advertencias sobre "unapplied migration(s)" por ahora. 

Una vez que el servidor se esté ejecutando, podrá ver el sitio navegando a la siguiente URL en su navegador web local: http://127.0.0.1:8000/. 

Deberías ver un sitio personalizado por Django. 



# Sitio Web de una Libreria

Desarrollamos un sitio web que podría usarse para administrar el catálogo de una biblioteca local.


Deberíamos hacer las siguientes cosas:

Utilice las herramientas de Django para crear un sitio web y una aplicación esqueleto.

Inicie y detenga el servidor de desarrollo.
    
Cree modelos para representar los datos de su aplicación.

Utilice el sitio de administración de Django para completar los datos de su sitio.

Cree vistas para recuperar datos específicos en respuesta a diferentes solicitudes y plantillas para representar los datos como HTML para mostrarlos en el navegador.

Cree mapeadores para asociar diferentes patrones de URL con vistas específicas.

Agregue autorización de usuario y sesiones para controlar el comportamiento y el acceso al sitio.

Trabajar con formularios.

Escribe código de prueba para tu aplicación.

Utilice la seguridad de Django de forma eficaz.

Implemente su aplicación en producción


Al final deberías saber lo suficiente para desarrollar aplicaciones Django simples por ti mismo


## El sitio web de la Biblioteca Local
   
LocalLibrary es el nombre del sitio web que crearemos y evolucionaremos.
 
El propósito del sitio web es proporcionar un catálogo en línea para una pequeña biblioteca local, donde los usuarios pueden buscar libros disponibles y administrar sus cuentas.


Este ejemplo ha sido elegido cuidadosamente porque puede escalarse para mostrar tantos o tan pocos detalles como necesitemos, y puede usarse para mostrar casi cualquier característica de Django.

Más importante aún, nos permite proporcionar una ruta guiada a través de la funcionalidad más importante en el marco web de Django:


1. Al principio definiremos una biblioteca simple de navegación que los miembros de la biblioteca pueden usar para averiguar qué libros están disponibles.

Esto nos permite explorar las operaciones que son comunes a casi todos los sitios web: leer y mostrar contenido de una base de datos.


2. A medida que avanzamos, el ejemplo de la biblioteca se amplía naturalmente para demostrar características más avanzadas de Django.

Por ejemplo, podemos ampliar la biblioteca para permitir a los usuarios reservar libros y usar esto para demostrar cómo usar formularios y admitir la autenticación de usuarios.


Aunque este es un ejemplo muy extensible, se llama LocalLibrary por una razón: esperamos mostrar la información mínima que lo ayudará a comenzar a utilizar Django rápidamente. 

Como resultado, almacenaremos información sobre libros, copias de libros, autores y otra información clave.

Sin embargo, no almacenaremos información sobre otros elementos que una biblioteca pueda almacenar, ni proporcionaremos la infraestructura necesaria para admitir múltiples sitios de biblioteca u otras funciones de "gran biblioteca".



# Esqueleto del Sitio Web

Muestra cómo puedes crear un proyecto de sitio web "esqueleto" como base, que luego puedes completar con configuraciones, rutas, modelos, vistas y plantillas específicas del sitio.


Para empezar:

1. Utilice la herramienta django-admin para generar una carpeta de proyecto, las plantillas de archivos básicas y Manage.py, que sirve como script de gestión de proyectos.


2. Utilice Manage.py para crear una o más aplicaciones.

Un sitio web puede constar de una o más secciones.

Por ejemplo, sitio principal, blog, wiki, área de descargas, etc.

Django lo alienta a desarrollar estos componentes como aplicaciones separadas, que luego podrían reutilizarse en diferentes proyectos si lo desea.


3. Registrar las nuevas aplicaciones para incluirlas en el proyecto.


4. Conecte el asignador de URL/ruta para cada aplicación

    
Para el sitio web de la biblioteca local, el sitio web y las carpetas del proyecto se denominan locallibrary e incluyen una aplicación denominada catalog.

Por lo tanto, la estructura de carpetas de nivel superior será la siguiente:

```
locallibrary/         # Website folder
    manage.py         # Script to run Django tools for this project (created using django-admin)
    locallibrary/     # Website/project folder (created using django-admin)
    catalog/          # Application folder (created using manage.py)

```


## Crear proyecto

Abra un shell de comandos (o una ventana de terminal) y asegúrese de estar en su entorno virtual.

Navegue hasta la carpeta donde desea crear su aplicación de biblioteca local (más adelante la moveremos a "django_local_library" que creó como repositorio local de GitHub al configurar el entorno de desarrollo).

Cree el nuevo proyecto usando el comando django-admin startproject como se muestra y luego navegue a la carpeta del proyecto.

```
django-admin startproject locallibrary
cd locallibrary

```
    
La herramienta django-admin crea una estructura de carpeta/archivo de la siguiente manera:

```
locallibrary/
    manage.py
    locallibrary/
        __init__.py
        settings.py
        urls.py
        wsgi.py
        asgi.py

```


La subcarpeta del proyecto locallibrary es el punto de entrada al sitio web:


'__init__'.py:

Es un archivo vacío que le indica a Python que trate este directorio como un paquete de Python.


settings.py:

Contiene todas las configuraciones del sitio web, incluido el registro de cualquier aplicación que creemos, la ubicación de nuestros archivos estáticos, detalles de configuración de la base de datos, etc.


urls.py:

Define las asignaciones de URL para ver del sitio.

Si bien esto podría contener todo el código de asignación de URL, es más común delegar algunas de las asignaciones a aplicaciones particulares, como verá más adelante.


wsgi.py:

Se utiliza para ayudar a que su aplicación Django se comunique con el servidor web.

Puedes tratar esto como un texto repetitivo (boilerplate).


asgi.py:

Es un estándar para que servidores y aplicaciones web asíncronas de Python se comuniquen entre sí. 

La interfaz de puerta de enlace del servidor asíncrono (ASGI) es la sucesora asíncrona de la interfaz de puerta de enlace del servidor web (WSGI).

ASGI proporciona un estándar para aplicaciones Python tanto asíncronas como síncronas, mientras que WSGI proporciona un estándar solo para aplicaciones síncronas.

ASGI es compatible con versiones anteriores de WSGI y admite múltiples servidores y marcos de aplicaciones.


manage.py:

El script Manage.py se utiliza para crear aplicaciones, trabajar con bases de datos e iniciar el servidor web de desarrollo.


## Crear app catalog

A continuación, ejecute el siguiente comando para crear la aplicación de catálogo que vivirá dentro de nuestro proyecto de biblioteca local.

Asegúrese de ejecutar este comando desde la misma carpeta que el archivo Manage.py de su proyecto:

```
# Linux/macOS
python3 manage.py startapp catalog

# Windows
py manage.py startapp catalog

```

La herramienta crea una nueva carpeta y la llena con archivos para las diferentes partes de la aplicación.

La mayoría de los archivos reciben el nombre de su propósito (por ejemplo, las vistas deben almacenarse en views.py, los modelos en models.py, las pruebas en tests.py, la configuración del sitio de administración en admin.py, el registro de aplicaciones en apps.py) y contienen algunos código repetitivo (boilerplate) mínimo para trabajar con los objetos asociados.


El directorio del proyecto actualizado ahora debería verse así:

```
locallibrary/
    manage.py
    locallibrary/
    catalog/
        admin.py
        apps.py
        models.py
        tests.py
        views.py
        __init__.py
        migrations/

```


Ahora tenemos:

migrations folder:

Utilizada para almacenar "migraciones", archivos que le permiten actualizar automáticamente su base de datos a medida que modifica sus modelos.


'__init__.py': 

Archivo vacío creado aquí para que Django/Python reconozca la carpeta como un paquete Python y le permita usar sus objetos dentro de otras partes del proyecto.


Si bien hay un lugar para sus vistas y modelos, no hay ningún lugar para colocar sus asignaciones de URL, plantillas y archivos estáticos.

Más adelante le mostraremos cómo crearlos (no son necesarios en todos los sitios web, pero sí en este ejemplo).


## Registrar catalog app

Ahora que se ha creado la aplicación, tenemos que registrarla en el proyecto para que se incluya cuando se ejecute cualquier herramienta (como agregar modelos a la base de datos, por ejemplo).

Las aplicaciones se registran agregándolas a la lista INSTALLED_APPS en la configuración del proyecto.

Abra el archivo de configuración del proyecto, django-locallibrary-tutorial/locallibrary/settings.py, y busque la definición de la lista INSTALLED_APPS.

Luego agregue una nueva línea al final de la lista, como se muestra a continuación:

```
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Add our new application
    'catalog.apps.CatalogConfig', # This object was created for us in /catalog/apps.py
]

```

La nueva línea especifica el objeto de configuración de la aplicación (CatalogConfig) que se generó para usted en /django-locallibrary-tutorial/catalog/apps.py cuando creó la aplicación.


Nota: Notarás que ya hay muchas otras INSTALLED_APPS (y MIDDLEWARE, más abajo en el archivo de configuración).

Estos habilitan el soporte para el sitio de administración de Django y la funcionalidad que utiliza (incluidas sesiones, autenticación, etc.).



# Especificando la base de datos

Este es también el punto donde normalmente especificaría la base de datos que se utilizará para el proyecto.

Tiene sentido utilizar la misma base de datos para el desarrollo y la producción siempre que sea posible, para evitar diferencias menores en el comportamiento. 

Puede conocer las diferentes opciones en Bases de datos (docs de Django).


Usaremos la base de datos SQLite predeterminada para la mayor parte de este ejemplo, porque no esperamos requerir mucho acceso simultáneo en una base de datos de demostración y no requiere trabajo adicional para configurarla.

Puedes ver cómo está configurada esta base de datos en settings.py:

```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

```

Cuando implementemos la app en producción, mostraremos cómo configurar una base de datos Postgres, que podría ser más adecuada para sitios más grandes.


## Otras configuraciones 

El archivo settings.py también se usa para configurar una serie de otras configuraciones, pero en este punto, probablemente solo desee cambiar TIME_ZONE.

Esto debe ser igual a una cadena de la Lista estándar de zonas horarias de la base de datos tz (el TZ columna de la tabla contiene los valores que desea).

Cambie su valor TIME_ZONE a una de estas cadenas apropiadas para su zona horaria, por ejemplo:

```
TIME_ZONE = 'Europe/London'

America/Argentina/Buenos_Aires

```

Hay otras dos configuraciones que no cambiarás ahora, pero que debes tener en cuenta:

1. SECRET_KEY

Esta es una clave secreta que se utiliza como parte de la estrategia de seguridad del sitio web de Django.

Si no está protegiendo este código en desarrollo, necesitará usar un código diferente (tal vez leído de una variable o archivo de entorno) al ponerlo en producción.


2. DEBUG

Esto permite que se muestren registros de depuración en caso de error, en lugar de respuestas de código de estado HTTP.
 
Esto debería establecerse en False en producción ya que la información de depuración es útil para los atacantes, pero por ahora podemos mantenerlo configurado en True.


## URL mapper

El sitio web se crea con un archivo asignador de URL (urls.py) en la carpeta del proyecto.

Si bien puede utilizar este archivo para administrar todas sus asignaciones de URL, es más habitual diferir las asignaciones a la aplicación asociada.


Abra django-locallibrary-tutorial/locallibrary/urls.py y observe el texto instructivo que explica algunas de las formas de utilizar el asignador de URL.

```
"""
URL configuration for locallibrary project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]

```

URL mappings se administran a través de la variable urlpatterns, que es una lista de Python de funciones path().

Cada función path() asocia un patrón de URL a una vista específica, que se mostrará cuando el patrón coincida, o con otra lista de código de prueba de patrones de URL (en este segundo caso, el patrón se convierte en la "URL base" para los patrones definido en el módulo de destino).

La lista urlpatterns define inicialmente una función única que asigna todas las URL con el patrón admin/ al módulo admin.site.urls, que contiene las definiciones de asignación de URL propias de la aplicación de administración.


Nota: La ruta en route() es una cadena que define un patrón de URL que debe coincidir.

Esta cadena puede incluir una variable con nombre (entre paréntesis angulares), p. 'catálogo/<id>/'.

Este patrón coincidirá con una URL como catalog/any_chars/ y pasará any_chars a la vista como una cadena con el nombre del parámetro id. 


Para agregar un nuevo elemento de lista a la lista urlpatterns, agregue las siguientes líneas al final del archivo.

Este nuevo elemento incluye una ruta() que reenvía solicitudes con el patrón catalog/ al módulo catalog.urls (el archivo con la URL relativa catalog/urls.py).

```
# Use include() to add paths from the catalog application
from django.urls import include

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]

```

Nota: Tenga en cuenta que incluimos la línea de importación (de django.urls import include) con el código que la usa (para que sea fácil ver lo que hemos agregado), pero es común incluir todas las líneas de importación en la parte superior. de un archivo Python.


Ahora redirijamos la URL raíz de nuestro sitio (es decir, 127.0.0.1:8000) a la URL 127.0.0.1:8000/catalog/.

Esta es la única aplicación que usaremos en este proyecto.

Para hacer esto, usaremos una función de vista especial, RedirectView, que toma la nueva URL relativa a la que redirigir (/catalog/) como su primer argumento cuando el patrón de URL especificado en la función path() coincide (la URL raíz , en este caso).


Agregue las siguientes líneas al final del archivo:

```
# Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='catalog/', permanent=True)),
]

```

Deje el primer parámetro de la función de ruta vacío para implicar '/'.

Si escribe el primer parámetro como '/' Django le dará la siguiente advertencia cuando inicie el servidor de desarrollo:

```
System check identified some issues:

WARNINGS:
?: (urls.W002) Your URL pattern '/' has a route beginning with a '/'.
Remove this slash as it is unnecessary.
If this pattern is targeted in an include(), ensure the include() pattern has a trailing '/'.

```

Django no proporciona archivos estáticos como CSS, JavaScript e imágenes de forma predeterminada, pero puede ser útil para el servidor web de desarrollo hacerlo mientras crea su sitio.

Como adición final a este asignador de URL, puede habilitar la entrega de archivos estáticos durante el desarrollo agregando las siguientes líneas.


Agregue el siguiente bloque final al final del archivo ahora:

```
# Use static() to add URL mapping to serve static files during development (only)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

```

Nota: Hay varias formas de ampliar la lista de patrones de URL (anteriormente, simplemente añadíamos un nuevo elemento de la lista usando el operador += para separar claramente el código antiguo y el nuevo). 

En su lugar, podríamos haber incluido este nuevo mapa de patrones en la definición de la lista original:

```
urlpatterns = [
    path('admin/', admin.site.urls),
    path('catalog/', include('catalog.urls')),
    path('', RedirectView.as_view(url='catalog/')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

```

Como paso final, cree un archivo dentro de la carpeta de su catálogo llamado urls.py y agregue el siguiente texto para definir los patrones de URL importados (vacíos).

Aquí es donde agregaremos nuestros patrones a medida que construimos la aplicación.

```
from django.urls import path
from . import views

urlpatterns = [

]

```


## Framework de testing para el sitio web

En este punto tenemos un proyecto esqueleto completo. 

El sitio web en realidad no hace nada todavía, pero vale la pena ejecutarlo para asegurarnos de que ninguno de nuestros cambios haya roto nada.


Antes de hacer eso, primero debemos ejecutar una migración de la base de datos. 

Esto actualiza nuestra base de datos (para incluir cualquier modelo en nuestras aplicaciones instaladas) y elimina algunas advertencias de compilación.


### Ejecutar database migrations

Django utiliza Object-Relational-Mapper (ORM) para asignar definiciones de modelos en el código de Django a la estructura de datos utilizada por la base de datos subyacente.

A medida que cambiamos las definiciones de nuestro modelo, Django rastrea los cambios y puede crear scripts de migración de bases de datos (en /django-locallibrary-tutorial/catalog/migrations/) para migrar automáticamente la estructura de datos subyacente en la base de datos para que coincida con el modelo.


Cuando creamos el sitio web, Django agregó automáticamente una cantidad de modelos para que los use la sección de administración del sitio (que veremos más adelante). 

Ejecute los siguientes comandos para definir tablas para esos modelos en la base de datos (asegúrese de estar en el directorio que contiene Manage.py):

```
python3 manage.py makemigrations
python3 manage.py migrate

```

Advertencia: deberá ejecutar estos comandos cada vez que sus modelos cambien de una manera que afecte la estructura de los datos que deben almacenarse (incluidas la adición y eliminación de modelos completos y campos individuales).


El comando makemigrations crea (pero no aplica) las migraciones para todas las aplicaciones instaladas en su proyecto

También puede especificar el nombre de la aplicación para ejecutar simplemente una migración para una sola aplicación. 

Esto le brinda la oportunidad de consultar el código de estas migraciones antes de que se apliquen.

Si eres un experto en Django, puedes optar por modificarlos ligeramente.


El comando de migración es lo que aplica las migraciones a su base de datos.

Django rastrea cuáles se han agregado a la base de datos actual.


Nota: Debe volver a ejecutar las migraciones y probar el sitio cada vez que realice cambios significativos. ¡No lleva mucho tiempo!


Consulte Migraciones (documentos de Django) para obtener información adicional sobre los comandos de migración menos utilizados.



### Ejecutar website

Durante el desarrollo, puede servir el sitio web primero utilizando el servidor web de desarrollo y luego verlo en su navegador web local.


Nota: El servidor web de desarrollo no es lo suficientemente robusto ni tiene el rendimiento suficiente para uso en producción, pero es una manera muy fácil de poner en funcionamiento su sitio web Django durante el desarrollo para realizar una prueba rápida y conveniente.

De forma predeterminada, entregará el sitio a su computadora local (http://127.0.0.1:8000/), pero también puede especificar otras computadoras en su red para servir. 

Para obtener más información, consulte django-admin y Manage.py:runserver (documentos de Django).


Ejecute el servidor web de desarrollo llamando al comando RunServer (en el mismo directorio que Manage.py):

```
python3 manage.py runserver

```

Una vez que el servidor se esté ejecutando, puede ver el sitio navegando a http://127.0.0.1:8000/ en su navegador web local.

Deberías ver una página de error personalizada por django.


Se espera esta página de error porque no tenemos ninguna página/URL definida en el módulo catalog.urls (al que somos redirigidos cuando obtenemos una URL a la raíz del sitio).

En este punto, sabemos que Django está funcionando.


Nota: La página de ejemplo muestra una excelente característica de Django: el registro de depuración automatizado. 

Siempre que no se puede encontrar una página, Django muestra una pantalla de error con información útil o cualquier error generado por el código.

En este caso, podemos ver que la URL que proporcionamos no coincide con ninguno de nuestros patrones de URL (como se enumeran).

El registro se desactiva en producción (que es cuando publicamos el sitio en la Web), en cuyo caso se ofrecerá una página menos informativa pero más fácil de usar.


## Copia de seguridad en GitHub

Acabamos de realizar un trabajo importante, por lo que ahora es un buen momento para hacer una copia de seguridad del proyecto usando GitHub.

Primero mueva el contenido de la carpeta locallibrary de nivel superior a la carpeta django_local_library que creó como repositorio local de GitHub al configurar el entorno de desarrollo.

Esto incluirá Manage.py, la subcarpeta locallibrary, la subcarpeta del catálogo y cualquier otra cosa dentro de la carpeta de nivel superior.


Luego agregue y confirme los cambios en la carpeta django_local_library y envíelos a GitHub. 

Desde la raíz de esa carpeta, puede utilizar un conjunto de comandos similar a los de la sección Modificar y sincronizar cambios del tema Entorno de desarrollo:

```
# Get the current source from GitHub on the main branch
git checkout main
git pull origin main

# Create a branch and add/commit your newly created app skeleton
git checkout -b skeleton_website # Create and activate a new branch "skeleton_website"
git add -A # Add all changed files to the staging area
git commit -m "Create Skeleton framework for LocalLibrary" # Commit the changed files

# Push the branch to GitHub
git push origin skeleton_website

```

Luego cree y combine un PR desde su repositorio de GitHub. 

Después de fusionar, puede volver a la rama principal y extraer los cambios desde GitHub:

```
git checkout main
git pull origin main

```

Nota: Si no eliminas la rama skeleton_website, siempre puedes volver a ella en algún momento posterior.

No necesariamente volveremos a mencionar esto en el futuro, pero puede resultarle útil actualizar GitHub con sus cambios al final de cada sección de este tutorial.


## Reto

El directorio catálogo/ contiene archivos para las vistas, modelos y otras partes de la aplicación.

Abra estos archivos e inspeccione el texto estándar.


Como vio anteriormente, ya se agregó una asignación de URL para el sitio de administración en urls.py del proyecto.

Navegue al área de administración de su navegador y vea qué sucede (puede inferir la URL correcta a partir del mapeo).



# Modelos

Muestra cómo definir modelos para el sitio web LocalLibrary

Explica qué es un modelo, cómo se declara y algunos de los principales tipos de campos.

También muestra brevemente algunas de las principales formas en que puede acceder a los datos del modelo.


Las aplicaciones web de Django acceden y administran datos a través de objetos de Python denominados models.

Los modelos definen la estructura de los datos almacenados, incluidos los tipos de campos y posiblemente también su tamaño máximo, valores predeterminados, opciones de lista de selección, texto de ayuda para documentación, texto de etiqueta para formularios, etc.

La definición del modelo es independiente de la base de datos subyacente: puede elegir uno de varios como parte de la configuración de su proyecto.

Una vez que haya elegido qué base de datos desea usar, no necesita hablar con ella directamente: simplemente escriba la estructura de su modelo y otro código, y Django se encargará de todo el trabajo sucio de comunicarse con la base de datos por usted.


## Diseñando los modelos para LocalLibrery

Antes de lanzarse y comenzar a codificar los modelos, vale la pena tomarse unos minutos para pensar qué datos necesitamos almacenar y las relaciones entre los diferentes objetos.


Sabemos que necesitamos almacenar información sobre los libros (título, resumen, autor, idioma escrito, categoría, ISBN) y que es posible que tengamos varias copias disponibles (con identificación única a nivel mundial, estado de disponibilidad, etc.).

Es posible que necesitemos almacenar más información sobre el autor que solo su nombre, y puede que haya varios autores con nombres iguales o similares.

Queremos poder ordenar la información según el título del libro, el autor, el idioma escrito y la categoría.


Al diseñar sus modelos, tiene sentido tener modelos separados para cada "objeto" (un grupo de información relacionada).

En este caso, los objetos obvios son libros, instancias de libros y autores.


También es posible que desee utilizar modelos para representar las opciones de la lista de selección (por ejemplo, como una lista desplegable de opciones), en lugar de codificar las opciones en el propio sitio web; esto se recomienda cuando no se conocen todas las opciones desde el principio o pueden cambiar.

Los candidatos obvios a modelos, en este caso, incluyen el género del libro (por ejemplo, ciencia ficción, poesía francesa, etc.) y el idioma (inglés, francés, japonés).


Una vez que hayamos decidido nuestros modelos y campo, debemos pensar en las relaciones.

Django le permite definir relaciones que son uno a uno (OneToOneField), uno a muchos (ForeignKey) y muchos a muchos (ManyToManyField).


Teniendo esto en cuenta, el siguiente diagrama de asociación UML muestra los modelos que definiremos en este caso (como cuadros).

```
Book:
title:String
author:Author[1]
summary:String
ISBN:String
genre:Genre[1*..] 
language:Language[1]

__str__:String

Genre:
name:String

__str__:String 

Author:
name:String
date_of_birth:DateField
date_of_death:dateField
books:Book[1..*]

__str__:String

Language:
name:String

__str__:String

BookInstance:
uniqueld:String
due_back:DateField 
status:LOAN_STATUS
book:Book[1]
imprint:String 
borrower:User[1]

__str__:String

```

Hemos creado modelos para el libro (los detalles genéricos del libro), la instancia del libro (el estado de copias físicas específicas del libro disponibles en el sistema) y el autor.

También hemos decidido tener un modelo para el género para que los valores se puedan crear/seleccionar a través de la interfaz de administración.

Hemos decidido no tener un modelo para BookInstance:status; hemos codificado los valores (LOAN_STATUS) porque no esperamos que cambien.

Dentro de cada uno de los cuadros, puede ver el nombre del modelo, los nombres y tipos de campos, y también los métodos y sus tipos de retorno.


El diagrama también muestra las relaciones entre los modelos, incluidas sus multiplicidades. 

Las multiplicidades son los números del diagrama que muestran los números (máximo y mínimo) de cada modelo que puede estar presente en la relación.

Por ejemplo, la línea de conexión entre los cuadros muestra que el Libro y el Género están relacionados.

Los números cercanos al modelo de Género muestran que un libro debe tener uno o más Géneros (tantos como desee), mientras que los números en el otro extremo de la línea al lado del modelo de Libro muestran que un Género puede tener cero o muchos asociados. libros.


A continuación se muestra una introducción básica que explica cómo se definen y utilizan los modelos.

Mientras lo lees, considera cómo construiremos cada uno de los modelos en el diagrama anterior.


## Model primer

Esta sección proporciona una breve descripción general de cómo se define un modelo y algunos de los campos y argumentos de campo más importantes.


### Definición del modelo

Los modelos generalmente se definen en el archivo models.py de una aplicación.

Se implementan como subclases de django.db.models.Model y pueden incluir campos, métodos y metadatos.

El siguiente fragmento de código muestra un modelo "típico", denominado MyModelName:

```
from django.db import models
from django.urls import reverse

class MyModelName(models.Model):
    """A typical class defining a model, derived from the Model class."""

    # Fields
    my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
    # …

    # Metadata
    class Meta:
        ordering = ['-my_field_name']

    # Methods
    def get_absolute_url(self):
        """Returns the URL to access a particular instance of MyModelName."""
        return reverse('model-detail-view', args=[str(self.id)])

    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return self.my_field_name

```

Exploraremos cada una de las características dentro del modelo en detalle:


### Fields

Un modelo puede tener una cantidad arbitraria de campos, de cualquier tipo; cada uno representa una columna de datos que queremos almacenar en una de nuestras tablas de base de datos.

Cada registro de la base de datos (fila) constará de uno de cada valor de campo.

Ejemplo:

```
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')

```

Nuestro ejemplo anterior tiene un único campo llamado my_field_name, de tipo models.CharField, lo que significa que este campo contendrá cadenas de caracteres alfanuméricos.

Los tipos de campo (fields type) se asignan mediante clases específicas, que determinan el tipo de registro que se utiliza para almacenar los datos en la base de datos, junto con los criterios de validación que se utilizarán cuando se reciben valores de un formulario HTML (es decir, qué constituye un valor válido).

Los tipos de campo también pueden tomar argumentos que especifiquen aún más cómo se almacena o se puede utilizar el campo.

En este caso le estamos dando a nuestro campo dos argumentos:


max_length=20:

indica que la longitud máxima de un valor en este campo es de 20 caracteres.


help_text='Enter field documentation:

texto útil que puede mostrarse en un formulario para ayudar a los usuarios a comprender cómo se utiliza el campo.


El nombre del campo se utiliza para hacer referencia a él en consultas y plantillas.

Los campos también tienen una etiqueta (label), que se especifica mediante el argumento verbose_name (con un valor predeterminado de None).

Si no se establece verbose_name, la etiqueta se crea a partir del nombre del campo reemplazando los guiones bajos con un espacio y poniendo en mayúscula la primera letra (por ejemplo, el campo my_field_name tendría una etiqueta predeterminada de My field name cuando se usa en formularios).


El orden en que se declaran los campos afectará su orden predeterminado si un modelo se representa en un formulario (por ejemplo, en el sitio de administración), aunque esto puede anularse.


### COMMON FIELD ARGUMENTS

many/most (muchos/mayoría)


help_text:

Proporciona una etiqueta de texto para formularios HTML (por ejemplo, en el sitio de administración), como se describe anteriormente.


verbose_name: 

Un nombre legible por humanos para el campo utilizado en las etiquetas de campo.

Si no se especifica, Django inferirá el nombre detallado predeterminado del nombre del campo.


default: 

El valor predeterminado para el campo.

Puede ser un valor o un objeto invocable, en cuyo caso se llamará al objeto cada vez que se cree un nuevo registro.


null: 

Si es True, Django almacenará valores en blanco como NULL en la base de datos para los campos donde sea apropiado (un CharField almacenará en su lugar una cadena vacía).

El valor predeterminado es False 


blank: 

Si es True, se permite que el campo esté en blanco en sus formularios.

El valor predeterminado es False lo que significa que la validación del formulario de Django te obligará a ingresar un valor.

Esto se usa a menudo con null=True porque si vas a permitir valores en blanco (blank), también querrás que la base de datos pueda representarlos apropiadamente.


choices: 

Un grupo de opciones para este campo.

Si se proporciona esto, el widget de formulario correspondiente predeterminado será un cuadro de selección con estas opciones en lugar del campo de texto estándar.


unique:

Si es True garantiza que el valor del campo sea único en toda la base de datos.

Esto se puede utilizar para evitar la duplicación de campos que no pueden tener los mismos valores

El valor predeterminado es False.


primary_key:

Si es True establece el campo actual como clave principal para el modelo (una clave principal es una columna de base de datos especial designada para identificar de forma única todos los diferentes registros de la tabla).

Si no se especifica ningún campo como clave principal, Django agregará automáticamente un campo para este propósito.

El tipo de campos de clave principal creados automáticamente se puede especificar para cada aplicación en AppConfig.default_auto_field o globalmente en el DEFAULT_AUTO_FIELD configuración.


Nota: Las aplicaciones creadas con Manage.py establecen el tipo de clave principal en BigAutoField.

Puede ver esto en el archivo catálog/apps.py de la biblioteca local.

```
class CatalogConfig(AppConfig):
  default_auto_field = 'django.db.models.BigAutoField'

```

Hay muchas otras opciones; puede ver la lista completa de opciones de campo en Django Field Options


### COMMON FIELD TYPES

La siguiente lista describe algunos de los tipos de campos más utilizados


CharField:

Se utiliza para definir cadenas de longitud fija de tamaño corto a mediano.

Debe especificar max_length (longitud máxima) de los datos que se almacenarán.


TextField:

Se utiliza para cadenas grandes de longitud arbitraria (arbitrary-length).

Puede especificar max_length pero esto se usa solo cuando el campo se muestra en formularios (no se aplica en el nivel de la base de datos).


IntegerField:

Campo para almacenar valores enteros (números enteros) y para validar valores ingresados ​​como números enteros en formularios.


DateField y DateTimeField:

Se utilizan para almacenar/representar fechas e información de fecha/hora (como objetos Python datetime.date y datetime.datetime respectivamente).

Estos campos pueden declarar adicionalmente los parámetros (mutuamente excluyentes) auto_now=True (para establecer el campo en la fecha actual cada vez que se guarda el modelo), auto_now_add (para establecer solo la fecha en la que se crea el modelo por primera vez), y default (para establecer una fecha predeterminada que el usuario puede anular).


ImageField:

Se utiliza para almacenar y validar direcciones de correo electrónico.


FileField y ImageField:

Se utilizan para cargar archivos e imágenes respectivamente (ImageField agrega validación adicional de que el archivo cargado es una imagen).

Estos tienen parámetros para definir cómo y dónde se almacenan los archivos cargados.


AutoField:

Es un tipo especial de IntegerField que se incrementa automáticamente.

Una clave principal de este tipo se agrega automáticamente a su modelo si no especifica una explícitamente.


ForeignKey:

Se utiliza para especificar un one-to-many relación con otro modelo de base de datos (por ejemplo, un automóvil tiene un fabricante, pero un fabricante puede fabricar muchos automóviles).

El lado "uno" de la relación es el modelo que contiene la "clave" (los modelos que contienen una "clave externa" que se refiere a esa "clave" están en el lado "muchos" de dicha relación).


ManyToManyField:

Se utiliza para especificar una relación de muchos a muchos (por ejemplo, un libro puede tener varios géneros y cada género puede contener varios libros).

En nuestra aplicación de biblioteca los usaremos de manera muy similar a ForeignKeys pero se pueden utilizar de formas más complicadas para describir las relaciones entre grupos.

Estos tienen el parámetro on_delete para definir qué sucede cuando se elimina el registro asociado (por ejemplo, un valor de models.SET_NULL establecería el valor en NULL.


Hay muchos otros tipos de campos, incluidos campos para diferentes tipos de números (big integers, small integers, floats), booleans, URLs, slugs, unique ids y "time-related" information (duration, time, etc.).



### Metadata

Puede declarar metadatos a nivel de modelo para su modelo declarando class Meta, como se muestra.

```
class Meta:
    ordering = ['-my_field_name']

```

Una de las características más útiles de estos metadatos es controlar el orden predeterminado de los registros devueltos cuando consulta el tipo de modelo.

Para ello, especifique el orden de coincidencia en una lista de nombres de campos en el ordering attribute, como se muestra.

El orden dependerá del tipo de campo (los campos de caracteres se ordenan alfabéticamente, mientras que los campos de fecha se ordenan cronológicamente).

Como se muestra arriba, puede anteponer el nombre del campo con un símbolo menos (-) para invertir el orden de clasificación.


Por ejemplo, si elegimos ordenar libros así de forma predeterminada:

```
ordering = ['title', '-publish_date']

```

Los libros se ordenarían alfabéticamente por título, de la A a la Z, y luego por fecha de publicación dentro de cada título, del más nuevo al más antiguo.

Otro atributo común es verbose_name nombre detallado de la clase en forma singular y plural:

```
verbose_name = 'BetterName'

```

Los metadatos de clase se pueden utilizar para crear y aplicar nuevos "permisos de acceso" para el modelo (los permisos predeterminados se aplican automáticamente), permitir ordenar en función de otro campo, definir constraints sobre posibles valores de datos que se pueden almacenar, o para declarar que la clase es "abstracta" (una clase base para la que no se pueden crear registros y de la que se derivará para crear otros modelos).

Muchas de las otras opciones de metadatos controlan qué base de datos se debe usar para el modelo y cómo se almacenan los datos (en realidad, solo son útiles si necesita asignar un modelo a una base de datos existente).


La lista está en Django Model Metadata options. 


## Methods

Un modelo también puede tener métodos.


Como mínimo, en cada modelo debes definir el método de clase estándar de Python __str__() para devolver una cadena legible por humanos para cada objeto.

Esta cadena se utiliza para representar registros individuales en el sitio de administración (y en cualquier otro lugar donde necesite hacer referencia a una instancia de modelo).

A menudo, esto devolverá un campo de título o nombre del modelo.

```
def __str__(self):
    return self.my_field_name

```

Otro método común para incluir en los modelos Django es get_absolute_url(), que devuelve una URL para mostrar registros de modelos individuales en el sitio web (si define este método, Django agregará automáticamente un botón "Ver en el sitio" a las pantallas de edición de registros del modelo en el sitio de administración).

Un patrón típico para get_absolute_url() se muestra a continuación.

```
def get_absolute_url(self):
    """Returns the URL to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])

```

Nota: Suponiendo que utilizará URL como /my-application/my-model-name/2 Para mostrar registros individuales para su modelo (donde "2" es la identificación de un registro en particular), necesitará crear un asignador de URL para pasar la respuesta y la identificación a una "vista detallada del modelo" (que hará el trabajo requerido para mostrar el registro). 

La función reverse() arriba puede "invertir" su asignador de URL (en el caso anterior llamado 'modelo-vista-detalle') para crear una URL con el formato correcto.

Por supuesto, para que esto funcione aún tienes que escribir el mapeo de URL, la vista y la plantilla.


También puede definir cualquier otro método que desee y llamarlos desde su código o plantillas (siempre que no tomen ningún parámetro).


### Model management

Una vez que haya definido sus clases de modelo, puede usarlas para crear, actualizar o eliminar registros y ejecutar consultas para obtener todos los registros o subconjuntos particulares de registros.

Le mostraremos cuando definamos nuestras vistas, pero aquí hay un breve resumen.


### Crear y modificar registros/records

Para crear un registro, puede definir una instancia del modelo y luego llamar a save().

```
# Create a new record using the model's constructor.
record = MyModelName(my_field_name="Instance #1")

# Save the object into the database.
record.save()

```

Nota: Si no ha declarado ningún campo como primary_key, el nuevo registro recibirá uno automáticamente, con el nombre del campo id.

Puede consultar este campo después de guardar el registro anterior y tendría un valor de 1.


Puede acceder a los campos de este nuevo registro utilizando la sintaxis de puntos y cambiar los valores.

Debe llamar a save() para almacenar los valores modificados en la base de datos.

```
# Access model field values using Python attributes.
print(record.id) # should return 1 for the first record.
print(record.my_field_name) # should print 'Instance #1'

# Change record by modifying the fields, then calling save().
record.my_field_name = "New Instance Name"
record.save()

```

### Buscar registros

Puede buscar registros que coincidan con ciertos criterios utilizando el atributo object del modelo (proporcionado por la clase base).


Nota: Explicar cómo buscar registros usando nombres de campos y modelos "abstractos" puede resultar un poco confuso.

En la discusión siguiente, nos referiremos a un modelo de Book con campos de title y genre, donde género también es un modelo con un solo nombre de campo. 


Podemos obtener todos los registros de un modelo como QuerySet, usando object.all().

QuerySet es un objeto iterable, lo que significa que contiene una cantidad de objetos que podemos iterar/recorrer en bucle.

```
all_books = Book.objects.all()

```

El método filter() nos permite filtrar el QuerySet devuelto para que coincida con un campo numérico o de texto específico según un criterio particular.

Por ejemplo, para filtrar libros que contengan "salvaje" en el título y luego contarlos, podríamos hacer lo siguiente.

```
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()

```


Coincidir y el tipo de coincidencia se definen en el nombre del parámetro de filtro, usando el formato: field_name__match_type, (tenga en cuenta el doble guión bajo entre title y contains -contenido- arriba).

Arriba estamos filtrando title con una coincidencia que distingue entre mayúsculas y minúsculas.

Hay muchos otros tipos de coincidencias que puede hacer:  icontains (no distingue entre mayúsculas y minúsculas), iexact coincidencia exacta que no distingue entre mayúsculas y minúsculas), exact (coincidencia exacta que distingue entre mayúsculas y minúsculas) y in, en gt (mayor que), startswith, etc. 

Se puede ver en Django querysets field lookups.


En algunos casos, necesitará filtrar por un campo que defina una relación de uno a muchos con otro modelo (por ejemplo, un ForeignKey).

En este caso, puede "indexar" los campos dentro del modelo relacionado con guiones bajos dobles adicionales.

Entonces, por ejemplo, para filtrar libros con un patrón de género específico, deberá indexar el name a través del genre:

```
# Will match on: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')

```

Nota: Puede utilizar guiones bajos (__) para navegar por tantos niveles de relaciones como sea posible (ForeignKey/ManyToManyField) como quieras.

Por ejemplo, un Libro que tuviera diferentes tipos, definidos mediante una relación de "portada" adicional, podría tener un nombre de parámetro: type__cover__name__exact='hard'.

Puede hacer mucho más con las consultas, incluidas búsquedas hacia atrás desde modelos relacionados, encadenar filtros, devolver un conjunto más pequeño de valores, etc.

Media Query en Django Docs


# Definiendo Modelo en LocalLibrary

Comenzaremos a definir los modelos para la biblioteca.

Abra models.py (en /django-locallibrary-tutorial/catalog/).

El boilerplate texto estándar en la parte superior de la página importa el módulo de modelos, que contiene los modelos de clase models.Model

Modelo del que heredarán nuestros modelos.

```
from django.db import models

# Create your models here.

```


### Genre model

Copia Genre código de modelo que se muestra a continuación y péguelo en la parte inferior de su archivo models.py.


Este modelo se utiliza para almacenar información sobre la categoría del libro, por ejemplo, si es ficción o no ficción, romance o historia militar, etc.

Como se mencionó anteriormente, hemos creado el género como un modelo en lugar de un texto libre o un lista de selección para que los valores posibles se puedan gestionar a través de la base de datos en lugar de estar codificados.

```
from django.urls import reverse # Used in get_absolute_url() to get URL for specified ID

from django.db.models import UniqueConstraint # Constrains fields to unique values
from django.db.models.functions import Lower # Returns lower cased value of field

class Genre(models.Model):
    """Model representing a book genre."""
    name = models.CharField(
        max_length=200,
        unique=True,
        help_text="Enter a book genre (e.g. Science Fiction, French Poetry etc.)"
    )

    def __str__(self):
        """String for representing the Model object."""
        return self.name

    def get_absolute_url(self):
        """Returns the url to access a particular genre instance."""
        return reverse('genre-detail', args=[str(self.id)])

    class Meta:
        constraints = [
            UniqueConstraint(
                Lower('name'),
                name='genre_name_case_insensitive_unique',
                violation_error_message = "Genre already exists (case insensitive match)"
            ),
        ]

```

El modelo tiene CharField como campo (name) que se utiliza para describir el género (está limitado a 200 caracteres y tiene algunos help_text)

Hemos configurado este campo para que sea único (unique=True) porque solo debería haber un registro/record para cada género.


Después del campo, declaramos una __str__(), metodo que devuelve el nombre del género definido por un registro particular.

No se ha definido ningún nombre detallado, por lo que la etiqueta del campo será Name cuando se utiliza en forms.

Luego declaramos el get_absolute_url() método, que devuelve una URL que se puede utilizar para acceder a un registro detallado para este modelo (para que esto funcione, tendremos que definir una asignación de URL que tenga el nombre genre-detail y definir una vista y plantilla asociadas).


Setting unique=True en el campo de arriba evita que se creen géneros con exactamente el mismo nombre, pero no con variaciones como "fantasy", "Fantasy" o incluso "FaNtAsY".

La última parte de la definición del modelo utiliza un constraints option en el modelo metadata para especificar que la minúscula del valor en el name debe ser único en la base de datos y mostrar violation_error_message cadena si no es así.

Aquí no necesitamos hacer nada más, pero puedes definir múltiples restricciones contra un campo o campos.

Para saber más en  Constraints reference, including UniqueConstraint() (and Lower()). 


### Book model

Copie el modelo de libro a continuación y péguelo nuevamente en la parte inferior de su archivo.

El modelo de Libro representa toda la información sobre un libro disponible en un sentido general, pero no una "instancia" o "copia" física particular disponible para préstamo.


El modelo utiliza un CharField para representar el título del libro y el isbn.

Para isbn, observe cómo el primer parámetro sin nombre establece explícitamente la etiqueta como "ISBN" (de lo contrario, el valor predeterminado sería "Isbn").

También configuramos el parámetro único como verdadero para garantizar que todos los libros tengan un ISBN único (el parámetro único hace que el valor del campo sea globalmente único en una tabla).

A diferencia del isbn (y el nombre del género), el título no está configurado como único, porque es posible que diferentes libros tengan el mismo nombre.

El modelo utiliza TextField para el resumen, porque es posible que este texto deba ser bastante largo.

```
class Book(models.Model):
    """Model representing a book (but not a specific copy of a book)."""
    title = models.CharField(max_length=200)
    author = models.ForeignKey('Author', on_delete=models.RESTRICT, null=True)
    # Foreign Key used because book can only have one author, but authors can have multiple books.
    # Author as a string rather than object because it hasn't been declared yet in file.

    summary = models.TextField(
        max_length=1000, help_text="Enter a brief description of the book")
    isbn = models.CharField('ISBN', max_length=13,
                            unique=True,
                            help_text='13 Character <a href="https://www.isbn-international.org/content/what-isbn'
                                      '">ISBN number</a>')

    # ManyToManyField used because genre can contain many books. Books can cover many genres.
    # Genre class has already been defined so we can specify the object above.
    genre = models.ManyToManyField(
        Genre, help_text="Select a genre for this book")

    def __str__(self):
        """String for representing the Model object."""
        return self.title

    def get_absolute_url(self):
        """Returns the URL to access a detail record for this book."""
        return reverse('book-detail', args=[str(self.id)])

```

El género es ManyToManyField, por lo que un libro puede tener varios géneros y un género puede tener muchos libros.

El autor se declara como ForeignKey, por lo que cada libro solo tendrá un autor, pero un autor puede tener muchos libros (en la práctica, un libro puede tener varios autores, ¡pero no en esta implementación!)


En ambos tipos de campo, la clase de modelo relacionada se declara como el primer parámetro sin nombre utilizando la clase de modelo o una cadena que contiene el nombre del modelo relacionado.

¡Debe usar el nombre del modelo como una cadena si la clase asociada aún no se ha definido en este archivo antes de hacer referencia a él!

Los otros parámetros de interés en el campo de autor son null=True, que permite que la base de datos almacene un valor Null si no se selecciona ningún autor, y on_delete=models.RESTRICT, que evitará que se elimine el autor asociado del libro si se hace referencia a él. cualquier libro.


Advertencia: De forma predeterminada, on_delete=models.CASCADE, lo que significa que si se elimina el autor, ¡este libro también se eliminará!

Usamos RESTRICT aquí, pero también podríamos usar PROTECT para evitar que se elimine el autor mientras cualquier libro lo usa o SET_NULL para establecer el autor del libro en Nulo si se elimina el registro.


El modelo también define __str__(), utilizando el campo de título del libro para representar un registro del Libro.

El método final, get_absolute_url(), devuelve una URL que se puede utilizar para acceder a un registro detallado para este modelo (tendremos que definir una asignación de URL que tenga el nombre book-detail y definir una vista y una plantilla asociadas).


### BookInstance model

A continuación, copie el modelo BookInstance (que se muestra a continuación) debajo de los otros modelos.

BookInstance representa una copia específica de un libro que alguien puede tomar prestado e incluye información sobre si la copia está disponible o en qué fecha se espera que regrese, "imprint" o detalles de la versión y una identificación única para el libro en la biblioteca.


Algunos de los campos y métodos ahora le resultarán familiares.

El modelo utiliza:


ForeignKey para identificar el Libro asociado (cada libro puede tener muchas copias, pero una copia solo puede tener un Libro).

La clave especifica on_delete=models.RESTRICT para garantizar que el libro no se pueda eliminar mientras esté referenciado por una BookInstance.


CharField para representar el sello (lanzamiento específico) del libro.


```
import uuid # Required for unique book instances

class BookInstance(models.Model):

    """Model representing a specific copy of a book (i.e. that can be borrowed from the library)."""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,
                          help_text="Unique ID for this particular book across whole library")
    book = models.ForeignKey('Book', on_delete=models.RESTRICT, null=True)
    imprint = models.CharField(max_length=200)
    due_back = models.DateField(null=True, blank=True)

    LOAN_STATUS = (
        ('m', 'Maintenance'),
        ('o', 'On loan'),
        ('a', 'Available'),
        ('r', 'Reserved'),
    )

    status = models.CharField(
        max_length=1,
        choices=LOAN_STATUS,
        blank=True,
        default='m',
        help_text='Book availability',
    )

    class Meta:
        ordering = ['due_back']

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.id} ({self.book.title})'

```


UUIDField:

Se utiliza para el campo de identificación para configurarlo como clave_primaria para este modelo.

Este tipo de campo asigna un valor global único para cada instancia (uno para cada libro que puede encontrar en la biblioteca).


DateField:

Se utiliza para la fecha de devolución (en la que se espera que el libro esté disponible después de haber sido prestado o en mantenimiento).

Este valor puede estar en blanco o nulo (necesario cuando el libro esté disponible).

Los metadatos del modelo (Class Meta) utilizan este campo para ordenar registros cuando se devuelven en una consulta.


status:

Es un CharField que define una lista de opciones/selección.

Como puede ver, definimos una tupla que contiene tuplas de pares clave-valor y la pasamos al argumento de opciones.

El valor en un par clave/valor es un valor de visualización que un usuario puede seleccionar, mientras que las claves son los valores que realmente se guardan si se selecciona la opción.

También hemos establecido un valor predeterminado de 'm' (mantenimiento), ya que inicialmente los libros no estarán disponibles antes de que se almacenen en los estantes.


El método __str__() representa el objeto BookInstance utilizando una combinación de su identificación única y el título del libro asociado.


Nota: Un poco de Python:

A partir de Python 3.6, puede utilizar la sintaxis de interpolación de cadenas (también conocida como f-strings): f'{self.id} ({self.book.title})'.

En versiones anteriores de este tutorial, usábamos una sintaxis de cadena formateada, que también es una forma válida de formatear cadenas en Python (por ejemplo, '{0} ({1})'.format(self.id,self.book.title )).


### Author model

Copie el modelo de autor (que se muestra a continuación) debajo del código existente en models.py.

```
class Author(models.Model):
    """Model representing an author."""
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    class Meta:
        ordering = ['last_name', 'first_name']

    def get_absolute_url(self):
        """Returns the URL to access a particular author instance."""
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.last_name}, {self.first_name}'

```

Todos los campos/métodos ahora deberían resultarle familiares.

El modelo define que un autor tiene un nombre, apellido y fechas de nacimiento y muerte (ambas opcionales).

Especifica que, de forma predeterminada, __str__() devuelve el nombre en orden de apellido y nombre.

El método get_absolute_url() invierte la asignación de URL de detalle de autor para obtener la URL para mostrar un autor individual.


## Re-run the database migrations

Todos tus modelos ya han sido creados. 

Ahora vuelva a ejecutar las migraciones de su base de datos para agregarlas a su base de datos.

```
python3 manage.py makemigrations
python3 manage.py migrate

```

## Reto 

Imagine que un benefactor local dona una serie de libros nuevos escritos en otro idioma (digamos, farsi).

El desafío es descubrir cómo se representarían mejor en el sitio web de nuestra biblioteca y luego agregarlos a los modelos.


Algunas cosas a considerar:

¿Debería asociarse el "lenguaje" con un libro, una instancia de libro o algún otro objeto?

¿Deberían representarse los diferentes idiomas mediante un modelo, un campo de texto libre o una lista de selección codificada?


Una vez que haya decidido, agregue el campo. 

Puedes ver lo que decidimos en GitHub.


No olvide que después de un cambio en su modelo, debe volver a ejecutar las migraciones de su base de datos para agregar los cambios.








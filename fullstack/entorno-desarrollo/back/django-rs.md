#RS

HTTP Request -> URLS(urls.py) -> View(views.py) -> HTTP Response (HTML)

Model(models.py) <- read/write data -> View

Template(<filename>.html) -> View


## url:
escribir una función de vista separada para manejar cada recurso.
Se utiliza un asignador de URL para redirigir las solicitudes HTTP a la vista adecuada según la URL de la solicitud.
El asignador de URL también puede hacer coincidir patrones particulares de cadenas o dígitos que aparecen en una URL y pasarlos a una función de visualización como datos.

Enviando solicitud a la vista correcta (urls.py):
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


## view:
Es una función de controlador de solicitudes, que recibe solicitudes HTTP y devuelve respuestas HTTP. 
Las vistas acceden a los datos necesarios para satisfacer las solicitudes a través de modelos y delegan el formato de la respuesta a plantillas.

Manejando la solicitud (views.py):
reciben solicitudes HTTP de clientes web y devuelven respuestas HTTP.
En el medio, reúnen los otros recursos del marco para acceder a bases de datos, representar plantillas, etc.

ejemplo muestra una función de vista mínima index(), que nuestro asignador de URL podría haber llamado en la sección anterior.
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


## model:
Son objetos de Python que definen la estructura de los datos de una aplicación y proporcionan mecanismos para administrar (agregar, modificar, eliminar) y consultar registros en la base de datos.

modelos de datos (models.py):
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


## Query data: Consultando datos (views.py)
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


## Templates:
Es un archivo de texto que define la estructura o el diseño de un archivo (como una página HTML), con marcadores de posición utilizados para representar el contenido real.
Una vista puede crear dinámicamente una página HTML usando una plantilla HTML, llenándola con datos de un modelo.
Se puede utilizar una plantilla para definir la estructura de cualquier tipo de archivo; ¡No tiene que ser HTML!

Django se refiere a esta organización como la arquitectura "Model View Template (MVT)".
Tiene muchas similitudes con la arquitectura más familiar de Model View Controller.

Rendering data (HTML templates):
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


## Más funciones de Django:
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



# Python venv

El módulo venv de Python se utiliza para crear y administrar entornos virtuales separados para sus proyectos de Python.

Cada entorno puede utilizar diferentes versiones de dependencias de paquetes y diferentes versiones de Python.

Puede asegurarse de que sus proyectos nunca creen conflictos de dependencia.


Existen otras excelentes herramientas de terceros para crear entornos virtuales, como conda y virtualenv.

Cualquiera de estas herramientas puede ayudarle a configurar un entorno virtual y también ir más allá de eso.


## Crear entorno

Cada vez que esté trabajando en un proyecto de Python que utilice dependencias externas que esté instalando con pip, es mejor crear primero un entorno virtual:

Linux: 

Muchos sistemas operativos Linux vienen con una versión de Python 3. 

```
python3 -m venv venv/

```

No es necesario incluir la barra diagonal (/) al final del nombre de su entorno virtual, pero es un recordatorio útil de que está creando una carpeta.

Este comando crea un nuevo entorno virtual llamado venv utilizando el módulo venv integrado de Python.

El primer venv que utiliza en el comando especifica el módulo y el segundo venv/ establece el nombre de su entorno virtual. 

Podrías nombrarlo de otra manera, pero llamarlo venv es una buena práctica para mantener la coherencia.


Windows: 

```
py -m venv venv\

```

Este comando permite que el iniciador de Python para Windows seleccione una versión adecuada de Python para ejecutar. 

Viene incluido con la instalación oficial y es la forma más conveniente de ejecutar Python en Windows.


Puede omitir el iniciador y ejecutar el ejecutable de Python directamente usando el comando python, pero si no ha configurado las variables PATH y PATHEXT, es posible que deba proporcionar la ruta completa:

```
PS> C:\Users\Name\AppData\Local\Programs\Python\Python312\python -m venv venv\

```

La ruta del sistema que se muestra arriba supone que instaló Python 3.12 usando el instalador de Windows proporcionado por la página de descargas de Python.

La ruta al ejecutable de Python en su sistema puede ser diferente. Al trabajar con PowerShell, puede encontrar la ruta utilizando el comando de Python Where.exe.


macOs:

```
$ python3 -m venv venv/

```

Las versiones anteriores de macOS vienen con una instalación del sistema de Python 2.7.x que nunca debes usar para ejecutar tus scripts.

ejecutar tus scripts. Si está trabajando en macOS <12.3 e invoca el intérprete de Python con python en lugar de python3, es posible que accidentalmente inicie el intérprete de Python del sistema obsoleto.

Si ejecutar python3 no funciona, primero deberá instalar una versión moderna de Python.


## Activar venv

Su proyecto ahora tiene su propio entorno virtual. Generalmente, antes de empezar a utilizarlo, activarás el entorno ejecutando un script que viene con la instalación:


Linux/macOs:

```
source venv/bin/activate

```

Antes de ejecutar este comando, asegúrese de estar en la carpeta que contiene el entorno virtual que acaba de crear.

Si le ha asignado a su entorno virtual un nombre distinto de venv, tendrá que usar ese nombre en la ruta en lugar de venv cuando obtenga el script de activación.


Nota: También puedes trabajar con tu entorno virtual sin activarlo. Para hacer esto, proporciona la ruta completa a su intérprete de Python al ejecutar un comando.

Sin embargo, es probable que desee activar el entorno virtual después de crearlo para ahorrarse el esfuerzo de tener que escribir repetidamente nombres de rutas largos.


Una vez que pueda ver el nombre de su entorno virtual en el símbolo del sistema, en este caso (venv), sabrá que su entorno virtual está activo.

¡Ahora ya está todo listo para instalar sus paquetes externos!


Windows:

```
PS> venv\Scripts\activate
(venv) PS>

```

Si su intento de ejecutar este comando produce un error, primero deberá flexibilizar la política de ejecución.

Antes de ejecutar este comando, asegúrese de estar en la carpeta que contiene el entorno virtual que acaba de crear.


## Instalar paquetes

Una vez que haya creado y activado su entorno virtual, puede instalar cualquier dependencia externa que necesite para su proyecto:

```
python -m pip install <package-name>

```

Este comando es el comando predeterminado que debe usar para instalar paquetes externos de Python con pip.

Debido a que usted creó y activó primero el entorno virtual, pip instalará los paquetes en una ubicación aislada.


Nota: Dado que creó su entorno virtual usando una versión de Python 3, no necesita llamar a python3 o pip3 explícitamente.

Siempre que su entorno virtual esté activo, python y pip se vinculan a los mismos archivos ejecutables que python3 y pip3.


Ahora puede instalar sus paquetes en su entorno virtual.

Para llegar a este punto, creó un entorno virtual llamado venv y luego lo activó en su sesión de shell actual.


Mientras no cierre su terminal, cada paquete de Python que instale terminará en este entorno aislado en lugar de los paquetes globales de su sitio Python.

Esto significa que ahora puedes trabajar en tu proyecto Python sin preocuparte por conflictos de dependencia


## Desactivar venv

Una vez que haya terminado de trabajar con este entorno virtual, puede desactivarlo:

```
deactivate

```

Después de ejecutar el comando de desactivación, su símbolo del sistema vuelve a la normalidad.

Este cambio significa que ha salido de su entorno virtual.

Si interactúa con Python o pip ahora, interactuará con su entorno Python configurado globalmente


Si desea volver a un entorno virtual que creó anteriormente, deberá ejecutar el script de activación para ese entorno virtual una vez más.

Nota: antes de instalar un paquete, busque el nombre de su entorno virtual entre paréntesis justo antes del símbolo del sistema.

En el ejemplo anterior, el nombre del entorno es venv.


Si aparece el nombre, entonces sabrá que su entorno virtual está activo y puede instalar sus dependencias externas

Si no ve el nombre en su símbolo del sistema, recuerde activar su entorno virtual Python antes de instalar cualquier paquete.


## Entorno virtual en Python

Python no es bueno en la gestión de dependencias. 

Si no es específico, pip colocará todos los paquetes externos que instale en una carpeta llamada site-packages/ en su instalación base de Python.


Técnicamente, Python viene con dos carpetas de paquetes

purelib/ debe contener sólo módulos escritos en código Python puro.

platlib/ debe contener archivos binarios que no estén escritos en Python puro, por ejemplo, archivos .dll, .so o .pydist.


la mayoría de los sistemas operativos implementan la configuración de paquetes de sitio de Python para que ambas ubicaciones apunten a la misma ruta, creando efectivamente una única carpeta de paquetes de sitio. 

Puede verificar las rutas usando sysconfig:

```
>>> import sysconfig
>>> sysconfig.get_path("purelib")
'/usr/local/lib/python3.12/site-packages'
>>> sysconfig.get_path("platlib")
'/usr/local/lib/python3.12/site-packages'

```

Lo más probable es que ambas salidas le muestren el mismo camino.

Si ambas salidas son iguales, entonces su sistema operativo no coloca los módulos purelib en una carpeta diferente a la de los módulos platlib.

Si aparecen dos rutas diferentes, entonces su sistema operativo hace esta distinción.

Incluso si su sistema operativo distingue entre los dos, seguirán surgiendo conflictos de dependencia porque todos los módulos purelib irán a una única ubicación para los módulos purelib, y lo mismo sucederá con los módulos platlib.


Para trabajar con entornos virtuales, no necesita preocuparse por los detalles de implementación de una única carpeta de paquetes de sitio o dos separadas.

De hecho, probablemente no necesitarás volver a pensar en ello nunca más.

Sin embargo, puede tener en cuenta que cuando alguien menciona el directorio de paquetes de sitios de Python, podría estar hablando de dos directorios diferentes.


Pueden surgir varios problemas si todos sus paquetes externos terminan en la misma carpeta.


## Características de venv

Aislamiento: 

Evita conflictos entre paquetes instalados para diferentes proyectos.


Dependencias específicas:

Permite instalar versiones específicas de paquetes sin interferir con otras aplicaciones.


Reproducibilidad: 

Ayuda a replicar el mismo entorno en diferentes sistemas, lo cual es crucial para el desarrollo colaborativo o despliegue.


```
python -m venv nombre_entorno

```

Crea una carpeta nombre_entorno que contiene los ejecutables de Python y un espacio separado para instalar paquetes.


```
source nombre_entorno/bin/activate

```

Después de crear entorno y activarlo:

La terminal cambia

```
(nombre_entorno) usuario@maquina:$

```

Instalar paquetes:

```
pip install paquete

```

Guardar dependencias: 

Para registrar todas las dependencias instaladas, usa:

```
pip freeze > requirements.txt

```


Desactivar el entorno virtual: 

Cuando termines, puedes salir del entorno con:

```
deactivate

```


Recrear el entorno en otro lugar: 

Crea un nuevo entorno con venv.

Actívalo y usa:

```
pip install -r requirements.txt

```


Usos de venv:

En cualquier proyecto Python donde necesites instalar paquetes adicionales.

En proyectos colaborativos o aplicaciones desplegables, donde reproducir el entorno exacto es esencial.


## Estructura de venv:

En el proyecto aparecerán nuevos archivos creados por el entorno virtual.

crea una carpeta con:

Los ejecutables de Python.

Una copia de pip.

Archivos necesarios para gestionar dependencias.


Aparece una carpeta llamada nombre_entorno:

con esta estructura típica:

nombre_entorno/
├── bin/ (Linux/macOS) o Scripts/ (Windows)
├── include/
├── lib/
├── pyvenv.cfg



## Ver y guardar dependencias

Listar dependencias instaladas:

```
pip list

```

Guardar dependencias: 

Es una buena práctica crear un archivo requirements.txt con las dependencias necesarias

```
pip freeze > requirements.txt

```


Restaurar dependencias en otro entorno:

Si compartes tu proyecto, otros pueden instalar las mismas dependencias con:

```
pip install -r requirements.txt

```


Eliminar el entorno virtual

Para eliminar un entorno, simplemente borra la carpeta nombre_entorno. Esto no afecta a tu instalación global de Python ni a otros entornos virtuales.


Recomendaciones:

Usa .gitignore: 

Si usas Git, añade la carpeta del entorno virtual (por ejemplo, venv/) a tu archivo .gitignore para evitar que se suba al repositorio.

Ejemplo de entrada en .gitignore:

```
venv/

```


Versiona tus dependencias: 

Asegúrate de mantener actualizado el archivo requirements.txt para reproducir el entorno fácilmente.


Errores comunes:

Error: venv no encontrado:

Esto puede suceder si Python no está correctamente instalado o el módulo venv no está disponible. Solución:

Asegúrate de que usas la versión correcta de Python (python3 en lugar de python en algunos sistemas).

Reinstala Python con el módulo venv.


Confusión con múltiples versiones de Python: 

Usa el comando explícito para la versión deseada:

```
python3.9 -m venv nombre_entorno

```


## Paquetes en venv

Verificar paquetes instalados:

Puedes listar los paquetes instalados en el entorno virtual con:

```
pip list

```
Esto mostrará todos los paquetes instalados y sus versiones dentro del entorno virtual.


Actualizar un paquete:

Si quieres actualizar un paquete, usa:

```
pip install --upgrade nombre_paquete

pip install --upgrade flask

```


Desinstalar un paquete:

```
pip uninstall nombre_paquete

pip uninstall numpy

```


Guardar las dependencias instaladas:

Para registrar todos los paquetes instalados en un archivo requirements.txt (útil para compartir o reproducir entornos), usa:

```
pip freeze > requirements.txt

```

Esto generará un archivo con las versiones exactas de los paquetes instalados, como:

```
flask==2.2.2
requests==2.28.1

```


Instalar dependencias desde requirements.txt:

```
Si tienes un archivo requirements.txt y deseas instalar las mismas dependencias en otro entorno, ejecuta:

```


## pip freeze

Registrar dependencias: 

Te permite capturar todas las dependencias actuales de tu proyecto, incluidas sus versiones.


Reproducibilidad: 

Facilita que otros desarrolladores o servidores (en entornos de producción) instalen las mismas dependencias exactas.


Versionado de dependencias: 

Ayuda a evitar incompatibilidades al trabajar con diferentes versiones de paquetes.


Mostrar dependencias instaladas

Si ejecutas pip freeze sin argumentos, verás una lista de todos los paquetes instalados en el entorno actual, junto con sus versiones:

```
pip freeze

```

salida:

```
Flask==2.2.2
Jinja2==3.1.2
MarkupSafe==2.1.1
Werkzeug==2.2.2

```

Guardar dependencias en un archivo

Es común guardar esta lista en un archivo requirements.txt, que puede compartirse o versionarse:

```
pip freeze > requirements.txt

```

El archivo requirements.txt generado puede usarse para instalar exactamente las mismas dependencias más tarde.


Usar requirements.txt para instalar dependencias

Si alguien más (o tú en otro entorno) necesita replicar las mismas dependencias, solo tiene que usar:

```
pip install -r requirements.txt

```

Esto instalará todos los paquetes listados en requirements.txt con las versiones específicas.


pip list y pip freeze:

pip list:

Muestra todos los paquetes instalados y sus versiones.

No está enfocado en generar un archivo reproducible como pip freeze.

```
pip list

```

salida:

```
Package     Version
----------  -------
Flask       2.2.2
Jinja2      3.1.2
MarkupSafe  2.1.1
Werkzeug    2.2.2

```


pip freeze:

Muestra solo la salida formateada para crear o actualizar un archivo requirements.txt.


Excluye paquetes del sistema con pip freeze: 

Si estás en un entorno global y quieres evitar registrar ciertos paquetes, usa el siguiente comando para ignorarlos:

```
pip freeze --exclude-editable

```


Actualiza requirements.txt regularmente:

Cada vez que instales un nuevo paquete, asegúrate de actualizar tu archivo de dependencias con:

```
pip freeze > requirements.txt

```


## requirements.txt

Es un componente fundamental en proyectos de Python para gestionar dependencias. 

Es un archivo de texto simple que contiene una lista de paquetes y sus versiones necesarias para que el proyecto funcione correctamente.


Especificar dependencias: 

Permite definir todos los paquetes necesarios para un proyecto.


Reproducir entornos: 

Otros desarrolladores o servidores pueden usarlo para instalar las mismas dependencias y evitar problemas de compatibilidad.


Versionado: 

Puedes asegurarte de que el proyecto utilice versiones específicas de paquetes para garantizar estabilidad.


Formato de requirements.txt

Cada línea en requirements.txt especifica un paquete, generalmente con su versión:

```
paquete==versión

Flask==2.2.2
requests==2.28.1
numpy==1.23.5

```


Otras opciones de versionado:

Puedes especificar las versiones de diferentes maneras:

Exactamente esta versión:

```
paquete==1.0.0

```

Versión mínima:

```
paquete>=1.0.0

```

Versión máxima:

```
paquete<=2.0.0

```

Rango de versiones:

```
paquete>=1.0.0,<2.0.0

```

Última versión compatible (~=):

```
paquete~=1.4.2

```

Esto instala cualquier versión compatible con 1.4.x pero no 1.5.0 o superior.


Crear un archivo requirements.txt:


Instala los paquetes necesarios:

```
pip install flask requests

```

Guarda las dependencias en requirements.txt:

```
pip freeze > requirements.txt

```


Usar requirements.txt:

Instalar dependencias desde requirements.txt

Cuando alguien más (o tú mismo en otro entorno) necesita replicar el entorno de desarrollo, puede instalar todas las dependencias usando:

```
pip install -r requirements.txt

```

Esto instalará todos los paquetes listados con las versiones especificadas.


Actualizar dependencias:

Si has actualizado o añadido nuevos paquetes, recuerda regenerar requirements.txt para mantenerlo actualizado:

```
pip freeze > requirements.txt

```


Incluir solo dependencias directas: 

Si quieres incluir solo los paquetes esenciales y no las dependencias internas, puedes usar herramientas como pipreqs:

```
pip install pipreqs
pipreqs /ruta/a/tu/proyecto

```


Administrar dependencias con pip-tools:

pip-tools es una herramienta que te ayuda a generar un archivo requirements.txt más limpio.

```
pip install pip-tools
pip-compile

```    


dev-requirements.txt: 

Si tienes dependencias para desarrollo (como herramientas de prueba), puedes usar un archivo separado:

```
pytest==7.4.0
black==23.3.0

```
   
## Dependencias de desarrollo y producción

Se refieren a diferentes tipos de paquetes o bibliotecas que un proyecto puede necesitar, dependiendo de su propósito.


Dependencias de desarrollo:

Son herramientas, bibliotecas o paquetes necesarios solo durante el proceso de desarrollo o pruebas del proyecto, pero no son necesarias en el entorno de producción.


Ejemplos:

Herramientas de pruebas:

pytest, unittest, mock


Herramientas de linting (verificación de estilo y calidad de código):

flake8, pylint, black


Compiladores o transpiladores (si usas lenguajes como TypeScript):

abel, webpack


Documentación:

sphinx


Estas dependencias ayudan a escribir, probar, y asegurar la calidad del código, pero no son necesarias para ejecutar la aplicación en producción.


En Python, puedes listar dependencias de desarrollo en un archivo separado como dev-requirements.txt. 

Por ejemplo:

requirements.txt (para producción):

```
Flask==2.2.2
requests==2.28.1

```
 
dev-requirements.txt (para desarrollo):

```
pytest==7.4.0
flake8==6.1.0
black==23.9.0

```


Para instalar dependencias de desarrollo:

```
pip install -r dev-requirements.txt

```

Ventajas de separar las dependencias:

Mantiene el entorno de producción más liviano.

Reduce el riesgo de incluir herramientas innecesarias en producción.

Mejora la seguridad, evitando instalar herramientas de desarrollo en producción.
    
    
Dependencias de código fuente:

Son las bibliotecas o paquetes que tu aplicación necesita para ejecutarse. 

Estas dependencias forman parte del entorno de producción y son esenciales para que la aplicación funcione correctamente.


Ejemplos:

Frameworks:

Flask, Django, FastAPI


Bibliotecas HTTP:

requests, httpx


Conectores de bases de datos:

SQLAlchemy, psycopg2, pymongo


Bibliotecas para manejar datos:

pandas, numpy


Normalmente, las dependencias de código fuente se listan en el archivo requirements.txt.

```
Flask==2.2.2
requests==2.28.1
SQLAlchemy==1.4.41

```

Para instalarlas:

```
pip install -r requirements.txt

```



# Migraciones

En la carpeta que contiene manage.py

```
python3 manage.py makemigrations
python3 manage.py migrate

```

# Correr el servidor 

En la carpeta que contiene manage.py

```
python3 manage.py runserver

```

# GitHub Workflow

Inicio proyecto:

Crear el README.txt y .gitignore con el lenguaje


Clonar el proyecto 

```
git clone https://github.com/<your_git_user_id>/django_local_library.git

```

Navegar a la carpeta principal creada reciente

```
django_local_library

```

Antes de modificar archivos: 

```
git fetch origin main
git pull origin main

```

```
git remote -v. 

```

Podemos comenzar a editar y crear archivos

Para eso podemos crear ramas 

Despues editar, agregar y commitear los archivos

Desde la carpeta principal que contiene todo el proyecto:


```
git checkout -b update_gitignore

```

Abrir el archivo a modificar:

ej: .gitignore

```
# Text backup files
*.bak

# Database
*.sqlite3

```

Agregar archivos a staging area 

-A para agregar todos los archivos

```
git add -A

```

git status

```
> git status
On branch main
Your branch is up-to-date with 'origin/update_gitignore'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   .gitignore

```


Siguiendo las reglas para commits 

```
git commit -m ".gitignore: add .bak and .sqlite3"

```

Agregar la rama especificando origen y la rama creada/particular

```
git push origin update_gitignore

```


### Pull Request en GitHub

Banner Compare and pull request

Seleccione el botón y luego siga las instrucciones para crear y luego fusionar el PR

Después del merging, la rama principal contiene el archivo agregado .gitignore 


## Otro workflow de git-github:

Después de hacer todos los cambios

sea proyect
    |__venv
    |__src/name_of_proyect/app/module
    
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

## Error en Workflow: no hacer un pull antes de mergear nuevos cambios

Te traes archivo viejo.

    
## Git fetch, merge, pull --rebase   

git pull origin main

va a hacer dos operaciones fetch y merge

o podemos hacer: 
git fetch siempre antes de hacer commits 
git fetch origin main
git merge origin main

o podemos hacer: 
git pull --rebase origen main 



## Revertir commit en Git


## Revertir commit en GitHub


## Error no cambiar rama antes de modificar 

aplicar git status 


# Funciones

Hay varias maneras de definir funciones, cada una adecuada para diferentes propósitos


1. Funciones definidas con def (Funciones normales)

Son las funciones más comunes en Python.
 
Se definen usando la palabra clave def.

```
def saludar(nombre):
    return f"Hola, {nombre}!"

```

Pueden tener uno o más parámetros.

Pueden o no devolver un valor usando return.


2. Funciones anónimas o lambda (Funciones pequeñas y rápidas)

Son funciones cortas que se definen en una sola línea con la palabra clave lambda. 

No tienen un nombre explícito.

```
suma = lambda a, b: a + b
print(suma(3, 5))  # Output: 8

```

Solo pueden contener una expresión.

Útiles para funciones pequeñas y rápidas, como argumentos de otras funciones (por ejemplo, sorted, map, filter).


3. Funciones anidadas (Nested Functions)

Puedes definir funciones dentro de otras funciones.

```
def funcion_externa(texto):
    def funcion_interna():
        print(f"Mensaje interno: {texto}")
    funcion_interna()

funcion_externa("Hola desde la interna")

```

La función interna solo es accesible dentro de la función externa.

Útil para encapsular lógica específica.


4. Funciones con valores predeterminados en los parámetros

Puedes asignar valores predeterminados a los parámetros para que no siempre sean necesarios al llamar a la función.

```
def saludar(nombre="Amigo"):
    return f"Hola, {nombre}!"

print(saludar())  # Output: Hola, Amigo!
print(saludar("Juan"))  # Output: Hola, Juan!

```

Proporcionan flexibilidad para parámetros opcionales.


5. Funciones con un número variable de argumentos

Puedes definir funciones que acepten un número variable de argumentos posicionales o de palabras clave

```
def sumar_todo(*args):
    return sum(args)

print(sumar_todo(1, 2, 3, 4))  # Output: 10

```

Argumentos de palabras clave variables (**kwargs):

```
def mostrar_info(**kwargs):
    for clave, valor in kwargs.items():
        print(f"{clave}: {valor}")

mostrar_info(nombre="Juan", edad=30, ciudad="Madrid")

```

(*args) permite pasar un número variable de argumentos posicionales.

(**kwargs) permite pasar un número variable de argumentos con nombre (clave-valor).


6. Funciones generadoras

Se definen con def pero utilizan yield en lugar de return. Las funciones generadoras devuelven un iterador.

```
def contador():
    yield 1
    yield 2
    yield 3

for numero in contador():
    print(numero)

```

No devuelven un valor directamente; producen una serie de valores bajo demanda.

Útiles para manejar secuencias grandes sin cargar toda la secuencia en memoria.


7. Funciones decoradoras (Decorators)

Son funciones que toman otra función como entrada y devuelven una nueva función. 

Útiles para modificar o extender el comportamiento de otras funciones.


```
def decorador(func):
    def nueva_funcion():
        print("Antes de la función original")
        func()
        print("Después de la función original")
    return nueva_funcion

@decorador
def mi_funcion():
    print("Ejecutando la función original")

mi_funcion()

```

Usan @decorador antes de la definición de la función decorada.

Se utilizan para tareas como validación, registro y control de acceso.


8. Funciones estáticas y de clase (Dentro de clases)

Dentro de una clase, puedes definir:

Funciones estáticas (@staticmethod)

No dependen de la instancia ni de la clase misma.

```
class MiClase:
    @staticmethod
    def funcion_estatica():
        print("Soy una función estática")

MiClase.funcion_estatica()

```


Funciones de clase (@classmethod)

Reciben la clase como primer argumento (cls).

```
class MiClase:
    contador = 0

    @classmethod
    def incrementar_contador(cls):
        cls.contador += 1

MiClase.incrementar_contador()
print(MiClase.contador)  # Output: 1

```

@staticmethod: No tienen acceso a atributos o métodos de instancia ni de clase.

@classmethod: Pueden modificar el estado de la clase.# Callbacks 


RS:

def: Definir funciones normales.

lambda: Funciones anónimas y cortas.

Nested Functions: Funciones dentro de funciones.

Funciones con parámetros predeterminados, *args, **kwargs: Flexibilidad en los argumentos.

Generadores (yield): Iteradores eficientes.

Decoradores: Extienden funcionalidades.

Estáticas y de clase: Métodos especiales dentro de clases.



# Callbacks

Son funciones que se pasan como argumentos a otras funciones y se ejecutan en un momento específico dentro de la función principal.

Aunque los callbacks se asocian más comúnmente con lenguajes como JavaScript, también son muy útiles en Python, especialmente cuando se trabaja con programación asíncrona, bibliotecas o frameworks.


Es simplemente una función que se pasa como argumento a otra función, y que será invocada en algún momento después de que la función principal haya hecho su trabajo.

```
def procesar_datos(datos, callback):
    resultado = [d * 2 for d in datos]
    callback(resultado)

def mostrar_resultado(resultado):
    print("El resultado es:", resultado)

procesar_datos([1, 2, 3, 4], mostrar_resultado)

```

procesar_datos toma una lista de datos y un callback.

Después de procesar los datos, llama al callback pasando el resultado.


## Callbacks con funciones anónimas (lambda)

Puedes usar funciones lambda como callbacks cuando la función es simple.

```
procesar_datos([1, 2, 3, 4], lambda resultado: print("Resultado (lambda):", resultado))

```

Son útiles para definir callbacks simples y rápidos directamente en la llamada.


## Usos de callbacks para Python


### Manejo de eventos

Los frameworks GUI como Tkinter o bibliotecas como PyQt usan callbacks para manejar eventos (como clics de botones).

```
import tkinter as tk

def on_button_click():
    print("¡Botón clickeado!")

root = tk.Tk()
button = tk.Button(root, text="Haz clic", command=on_button_click)
button.pack()
root.mainloop()

```

on_button_click es el callback que se ejecuta cuando se hace clic en el botón.


## Asincronía y bibliotecas como asyncio

En programación asíncrona, los callbacks son comunes para manejar tareas cuando se completan.

```
import asyncio

async def tarea():
    print("Tarea iniciada...")
    await asyncio.sleep(2)
    print("Tarea completada.")

def callback(futuro):
    print("Callback ejecutado:", futuro.result())

loop = asyncio.get_event_loop()
futuro = asyncio.ensure_future(tarea())
futuro.add_done_callback(callback)
loop.run_until_complete(futuro)

```

add_done_callback ejecuta el callback cuando la tarea asíncrona se completa.


### Callbacks en funciones de alto orden

En Python, puedes usar funciones como map, filter o sorted, que aceptan callbacks para procesar elementos.

```
numeros = [1, 2, 3, 4, 5]

# Usando map con un callback
cuadrados = map(lambda x: x**2, numeros)
print(list(cuadrados))  # Output: [1, 4, 9, 16, 25]

```


### Callbacks para manejo de errores

También pueden manejar errores o situaciones específicas.

```
def procesar_archivo(ruta, on_success, on_error):
    try:
        with open(ruta, 'r') as archivo:
            contenido = archivo.read()
            on_success(contenido)
    except Exception as e:
        on_error(e)

def exito(contenido):
    print("Contenido del archivo:", contenido)

def error(e):
    print(f"Error al leer el archivo: {e}")

procesar_archivo("archivo.txt", exito, error)

```

procesar_archivo intenta leer un archivo.

Si tiene éxito, llama a on_success. 

Si ocurre un error, llama a on_error.


### Callback Hell en Python

Al igual que en otros lenguajes, anidar muchos callbacks puede llevar a un código difícil de leer.

Esto ocurre con tareas asíncronas dependientes.

```
def paso1(callback):
    print("Paso 1 completado")
    callback()

def paso2(callback):
    print("Paso 2 completado")
    callback()

def paso3():
    print("Paso 3 completado")

paso1(lambda: paso2(lambda: paso3()))

```

Difícil de leer y mantener.

Mayor riesgo de errores.

En Python, esto se puede evitar con promesas en otras bibliotecas, o utilizando async/await.


### Alternativas a los callbacks en Python

Funciones asíncronas con async/await: 

Evitan la anidación profunda y hacen el código más legible.


Uso de functools.partial: 

Para preconfigurar funciones y evitar definir callbacks explícitamente.


Promises (con concurrent.futures): 

Manejan tareas y sus resultados con un estilo más limpio.



# Clases 

Las clases en Python son un pilar fundamental de la Programación Orientada a Objetos (POO).

Permiten crear estructuras que combinan datos y métodos para trabajar con esos datos de manera eficiente y modular.


## Clases 

Una clase es un plano o plantilla para crear objetos, mientras que un objeto es una instancia de una clase.

```
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre  # Propiedad o atributo
        self.edad = edad      # Propiedad o atributo

    def saludar(self):  # Método
        print(f"Hola, me llamo {self.nombre} y tengo {self.edad} años.")

# Crear una instancia de la clase
persona1 = Persona("Juan", 30)
persona1.saludar()  # Output: Hola, me llamo Juan y tengo 30 años.

```


## Atributos

Los atributos son las variables asociadas a un objeto.


Atributos de instancia: 

Son únicos para cada instancia de la clase.


Atributos de clase: 

Son compartidos por todas las instancias.


```
class Ejemplo:
    atributo_clase = "Atributo compartido"  # Atributo de clase

    def __init__(self, valor):
        self.atributo_instancia = valor  # Atributo de instancia

obj1 = Ejemplo("Valor 1")
obj2 = Ejemplo("Valor 2")

print(obj1.atributo_instancia)  # Output: Valor 1
print(obj2.atributo_instancia)  # Output: Valor 2
print(obj1.atributo_clase)      # Output: Atributo compartido

```


## Métodos

Los métodos son funciones definidas dentro de una clase.


Métodos de instancia: 

Operan sobre una instancia y tienen acceso a sus atributos a través de self.


Métodos de clase: 

Operan sobre la clase y se definen con @classmethod. 

Usan cls como primer parámetro.


Métodos estáticos: 

No dependen de la clase ni de la instancia. 

Se definen con @staticmethod.
    

```
class Ejemplo:
    atributo_clase = "Clase"

    def metodo_instancia(self):
        print(f"Este es un método de instancia. {self.atributo_clase}")

    @classmethod
    def metodo_clase(cls):
        print(f"Este es un método de clase. {cls.atributo_clase}")

    @staticmethod
    def metodo_estatico():
        print("Este es un método estático.")

obj = Ejemplo()
obj.metodo_instancia()  # Output: Este es un método de instancia. Clase
Ejemplo.metodo_clase()  # Output: Este es un método de clase. Clase
Ejemplo.metodo_estatico()  # Output: Este es un método estático.

```


## Encapsulamiento

El encapsulamiento en Python permite restringir el acceso directo a ciertos atributos y métodos. 

Esto se logra mediante convenciones de nombres:


Público: 

Atributos y métodos accesibles desde fuera de la clase.


Protegido: 

Prefijo _ indica que es un atributo protegido. 

No se debe acceder directamente, aunque es posible.


Privado: 

Prefijo __ hace que el atributo no sea accesible directamente desde fuera de la clase
     

```
class Ejemplo:
    def __init__(self):
        self.publico = "Soy público"
        self._protegido = "Soy protegido"
        self.__privado = "Soy privado"

obj = Ejemplo()
print(obj.publico)    # Output: Soy público
print(obj._protegido) # Output: Soy protegido
# print(obj.__privado)  # Error: AttributeError

```


## Herencia

La herencia permite crear una nueva clase que reutiliza, extiende o modifica el comportamiento de una clase base (padre).

```
class Persona:
    def __init__(self, nombre):
        self.nombre = nombre

    def saludar(self):
        print(f"Hola, soy {self.nombre}")

class Estudiante(Persona):  # Estudiante hereda de Persona
    def __init__(self, nombre, grado):
        super().__init__(nombre)  # Llama al constructor de la clase padre
        self.grado = grado

    def mostrar_grado(self):
        print(f"Estoy en el grado {self.grado}")

estudiante = Estudiante("Ana", 10)
estudiante.saludar()         # Output: Hola, soy Ana
estudiante.mostrar_grado()   # Output: Estoy en el grado 10

```


## Polimorfismo

El polimorfismo permite usar una misma interfaz para diferentes tipos de datos o clases.


Sobrescritura de métodos:

Una clase hija puede redefinir un método de la clase padre

```
class Animal:
    def hacer_sonido(self):
        print("Sonido genérico de un animal")

class Perro(Animal):
    def hacer_sonido(self):
        print("Guau guau")

class Gato(Animal):
    def hacer_sonido(self):
        print("Miau miau")

animales = [Perro(), Gato(), Animal()]

for animal in animales:
    animal.hacer_sonido()
# Output:
# Guau guau
# Miau miau
# Sonido genérico de un animal

```


## Abstracción

La abstracción permite definir métodos que deben ser implementados en las clases derivadas.

En Python, se puede usar la clase base ABC (Abstract Base Class).

```
from abc import ABC, abstractmethod

class Figura(ABC):
    @abstractmethod
    def calcular_area(self):
        pass

class Circulo(Figura):
    def __init__(self, radio):
        self.radio = radio

    def calcular_area(self):
        return 3.14 * self.radio * self.radio

circulo = Circulo(5)
print(circulo.calcular_area())  # Output: 78.5

```

Clases y objetos: 

Estructuras fundamentales en POO.


Encapsulamiento: 

Controla el acceso a atributos y métodos.


Herencia: 

Reutiliza y extiende el comportamiento.


Polimorfismo: 

Métodos que se comportan de manera diferente según la clase.


Abstracción: 

Define interfaces genéricas para ser implementadas.



# POO

Es un paradigma de programación que organiza el código en torno a clases y objetos.

En Python, la POO es uno de los estilos principales para escribir programas y es ampliamente utilizada gracias a su flexibilidad.



# Self

El uso del parámetro self dentro de las clases.

Aunque self no es una palabra reservada, es una convención ampliamente aceptada y cumple una función similar al this en JavaScript.


self es el primer parámetro de todos los métodos de instancia en una clase.

Representa la instancia actual del objeto desde la cual se llamó al método.

Permite acceder a los atributos y métodos de la instancia dentro de la clase.


Definición implícita:

self debe declararse explícitamente como primer parámetro en los métodos de instancia.


Uso obligatorio:

self debe pasarse como argumento al definir métodos.


Valor de referencia: 

self siempre se refiere a la instancia actual.


Python usando self:

```
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre  # Atributo de instancia
        self.edad = edad      # Atributo de instancia

    def saludar(self):
        print(f"Hola, me llamo {self.nombre} y tengo {self.edad} años.")

# Crear una instancia
persona1 = Persona("Juan", 25)
persona1.saludar()  # Output: Hola, me llamo Juan y tengo 25 años.

```

self.nombre:

se refiere al atributo nombre de la instancia actual (persona1).


self:

es necesario para diferenciar los atributos de instancia de los parámetros o variables locales


## Uso de self en métodos:

Métodos de instancia:

Usan self para acceder a atributos o llamar a otros métodos.

```
class Circulo:
    def __init__(self, radio):
        self.radio = radio

    def calcular_area(self):
        return 3.14 * self.radio ** 2

circulo1 = Circulo(5)
print(circulo1.calcular_area())  # Output: 78.5

```


Métodos que modifican atributos:

```
class Contador:
    def __init__(self):
        self.cuenta = 0

    def incrementar(self):
        self.cuenta += 1

contador = Contador()
contador.incrementar()
print(contador.cuenta)  # Output: 1

```


### Uso de cls en métodos de clase

Además de self, Python también utiliza cls en métodos de clase para referirse a la clase en sí.

```
class Persona:
    contador = 0  # Atributo de clase

    def __init__(self, nombre):
        self.nombre = nombre
        Persona.contador += 1

    @classmethod
    def obtener_contador(cls):
        return cls.contador

# Crear instancias
persona1 = Persona("Ana")
persona2 = Persona("Luis")

print(Persona.obtener_contador())  # Output: 2

```

cls permite acceder al atributo de clase contador.


### cls vs self 

Métodos de instancia:

self

Accede a atributos y métodos de la instancia.


Métodos de clase:

cls

Accede a atributos y métodos de la clase.


Métodos estáticos:

Ninguno

No acceden ni a la clase ni a la instancia (función normal).


self en Python cumple un papel similar a this en JavaScript al referirse a la instancia actual del objeto.

self debe declararse explícitamente como el primer parámetro de todos los métodos de instancia.

También puedes usar cls en métodos de clase para referirte a la clase en sí.

Python requiere que el programador sea explícito sobre el uso de referencias, lo que hace que el código sea más claro y predecible.



# init

Es un método especial conocido como el constructor de una clase

Se ejecuta automáticamente cada vez que se crea una nueva instancia de la clase.

Su principal función es inicializar los atributos del objeto y realizar cualquier configuración necesaria al momento de la creación del objeto.


1. Método especial (mágico):

Es uno de los métodos mágicos de Python, reconocibles por los dobles guiones bajos al inicio y al final del nombre.

No se llama explícitamente, sino que Python lo invoca automáticamente cuando se crea un objeto.


2. Inicialización del objeto:

Permite asignar valores iniciales a los atributos de la instancia.

También puede ejecutar lógica personalizada para configurar el objeto.
     

3. No es obligatorio:

Una clase no necesita un método __init__ para funcionar, pero si lo tiene, se ejecutará al instanciarla
    
```
class ClaseEjemplo:
    def __init__(self, argumentos):
        # Inicialización de atributos o configuración
        self.atributo = argumentos

```
    

## Inicialización de atributos

```
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre  # Atributo de instancia
        self.edad = edad      # Atributo de instancia

    def saludar(self):
        print(f"Hola, me llamo {self.nombre} y tengo {self.edad} años.")

# Crear instancias
persona1 = Persona("Juan", 25)
persona2 = Persona("Ana", 30)

# Uso de los métodos
persona1.saludar()  # Output: Hola, me llamo Juan y tengo 25 años.
persona2.saludar()  # Output: Hola, me llamo Ana y tengo 30 años.

```

El método __init__ recibe los argumentos nombre y edad al momento de crear la instancia.

Se asignan los valores a los atributos de la instancia (self.nombre y self.edad).


## Aspectos importantes de __init__

### Parámetro self

El primer argumento del método __init__ es siempre self, que se refiere a la instancia actual del objeto.

A través de self, puedes acceder y modificar los atributos de la instancia.

```
class Ejemplo:
    def __init__(self):
        self.valor = 0  # Inicializa un atributo

obj = Ejemplo()
print(obj.valor)  # Output: 0

``` 
 

### Valores por defecto

Puedes definir valores predeterminados para los parámetros del método __init__, lo que hace que algunos argumentos sean opcionales al crear una instancia.

```
class Persona:
    def __init__(self, nombre, edad=18):  # Edad predeterminada
        self.nombre = nombre
        self.edad = edad

persona1 = Persona("Luis")  # No se especifica edad
print(persona1.nombre, persona1.edad)  # Output: Luis 18

persona2 = Persona("María", 25)  # Se especifica edad
print(persona2.nombre, persona2.edad)  # Output: María 25

```


### Realizar lógica adicional

Además de inicializar atributos, el método __init__ puede realizar cálculos u operaciones al crear el objeto

```
class Rectangulo:
    def __init__(self, ancho, alto):
        self.ancho = ancho
        self.alto = alto
        self.area = self.ancho * self.alto  # Calcular el área al crear el objeto

rect = Rectangulo(5, 3)
print(rect.area)  # Output: 15

```


### Herencia y __init__

Si una clase hija no define su propio método __init__, hereda automáticamente el de la clase padre

Sin embargo, si define su propio __init__, debe invocar explícitamente el de la clase padre (si es necesario).

```
class Animal:
    def __init__(self, nombre):
        self.nombre = nombre

class Perro(Animal):
    def __init__(self, nombre, raza):
        super().__init__(nombre)  # Llamar al constructor de la clase padre
        self.raza = raza

perro = Perro("Fido", "Labrador")
print(perro.nombre, perro.raza)  # Output: Fido Labrador

```


### Sobrecarga de __init__

En Python, el método __init__ no puede ser sobrecargado en el sentido tradicional de otros lenguajes (como en Java o C++).

Sin embargo, puedes manejar argumentos opcionales o condicionales.

```
class Persona:
    def __init__(self, nombre, edad=None):
        self.nombre = nombre
        self.edad = edad if edad is not None else "No especificada"

persona1 = Persona("Carlos", 40)
persona2 = Persona("Ana")

print(persona1.nombre, persona1.edad)  # Output: Carlos 40
print(persona2.nombre, persona2.edad)  # Output: Ana No especificada

```

__init__ es un constructor que inicializa atributos y configura la instancia al ser creada.

Es opcional, pero comúnmente se utiliza en la mayoría de las clases.

Siempre requiere self como primer parámetro para acceder a la instancia actual.

Es compatible con herencia mediante super().

Puede manejar argumentos opcionales y realizar cálculos al inicializar.


# return

Un valor de retorno es el resultado que una función devuelve al terminar su ejecución.

Esto permite que una función proporcione un resultado que pueda ser utilizado por otras partes del programa.


En Python, una función devuelve un valor usando la palabra clave return.

Si no se especifica return, la función devuelve implícitamente None.

```
def suma(a, b):
    return a + b  # Devuelve la suma de a y b

resultado = suma(3, 4)
print(resultado)  # Output: 7

```


Opcionalidad: 

Si no se usa return, la función devuelve None.

```
def funcion_sin_return():
    pass

resultado = funcion_sin_return()
print(resultado)  # Output: None

```


Múltiples valores: 

En Python, puedes devolver múltiples valores separados por comas

se devuelven como una tupla.

```
def operaciones(a, b):
    suma = a + b
    resta = a - b
    return suma, resta  # Devuelve una tupla con dos valores

resultado = operaciones(10, 5)
print(resultado)  # Output: (15, 5)

# También puedes desempaquetar los valores:
suma, resta = operaciones(10, 5)
print(f"Suma: {suma}, Resta: {resta}")
# Output:
# Suma: 15
# Resta: 5

```


Retorno temprano:

Puedes usar return para salir de una función antes de que termine de ejecutarse completamente

```
def es_par(numero):
    if numero % 2 == 0:
        return True  # Retorna inmediatamente si es par
    return False  # Retorna False si no es par

print(es_par(4))  # Output: True
print(es_par(7))  # Output: False

```


# Manejo de Errores

Se realiza principalmente a través de excepciones, que son eventos que interrumpen el flujo normal del programa si algo sale mal.

Python utiliza los bloques try, except, else y finally para manejar errores de manera controlada.

```
try:
    # Código que podría generar una excepción
except TipoDeExcepcion as error:
    # Código que maneja la excepción
else:
    # Código que se ejecuta si no ocurre ninguna excepción
finally:
    # Código que se ejecuta siempre, ocurra o no una excepción

```


Ejemplo:

```
try:
    resultado = 10 / 0  # Genera una excepción ZeroDivisionError
except ZeroDivisionError as e:
    print("Error: No se puede dividir entre cero.")
else:
    print("La operación fue exitosa:", resultado)
finally:
    print("Este bloque siempre se ejecuta.")

```

Salida:

```
Error: No se puede dividir entre cero.
Este bloque siempre se ejecuta.

```


## Clases de excepciones

Python proporciona varias excepciones predefinidas, como:


Exception:

Clase base de todas las excepciones.


ZeroDivisionError:

Error al dividir por cero.


ValueError:

Error por tipo o valor inválido.


TypeError:

Error al usar un tipo incorrecto.


KeyError:

Clave inexistente en un diccionario.


IndexError:

Índice fuera de rango en una lista o tupla.


FileNotFoundError:

Archivo o directorio inexistente.


Ver más en Python 3 Exceptions docs.


## Manejo específico de excepciones

Puedes capturar diferentes tipos de excepciones y manejar cada una por separado.

```
try:
    x = int("Hola")  # Genera un ValueError
except ZeroDivisionError:
    print("Error: No puedes dividir entre cero.")
except ValueError as e:
    print("Error: Valor inválido:", e)
except Exception as e:
    print("Ocurrió un error inesperado:", e)

```

Salida:

```
Error: Valor inválido: invalid literal for int() with base 10: 'Hola'

```


## Manejo de múltiples excepciones

Si varias excepciones requieren la misma acción, puedes agruparlas en una sola línea usando una tupla.

```
try:
    x = 10 / "a"  # Esto genera un TypeError
except (TypeError, ZeroDivisionError) as e:
    print("Error manejado:", e)

```


## Usar else

El bloque else se ejecuta solo si no ocurre ninguna excepción en el bloque try.

```
try:
    resultado = 10 / 2
except ZeroDivisionError:
    print("Error: No se puede dividir entre cero.")
else:
    print("El resultado es:", resultado)  # Esto se ejecuta si no hay excepciones

```

Salida:

```
El resultado es: 5.0

```


## Usar finally

El bloque finally se usa para ejecutar código que debe realizarse sin importar si ocurre o no una excepción, como cerrar archivos o liberar recursos.

```
try:
    archivo = open("archivo.txt", "r")
    contenido = archivo.read()
except FileNotFoundError:
    print("Error: El archivo no existe.")
finally:
    print("Cerrando archivo...")
    archivo.close()  # Asegura liberar el recurso

```


## Generar excepciones personalizadas

Puedes usar raise para lanzar tus propias excepciones cuando detectes condiciones anómalas.

```
def dividir(a, b):
    if b == 0:
        raise ZeroDivisionError("División por cero no permitida.")
    return a / b

try:
    dividir(10, 0)
except ZeroDivisionError as e:
    print("Error:", e)

```


Salida:

```
Error: División por cero no permitida.

```


## Excepciones personalizadas

Puedes crear tus propias clases de excepción heredando de Exception.

```
class MiExcepcionPersonalizada(Exception):
    def __init__(self, mensaje):
        self.mensaje = mensaje

try:
    raise MiExcepcionPersonalizada("Esto es un error personalizado.")
except MiExcepcionPersonalizada as e:
    print("Error personalizado:", e.mensaje)

```

Salida:

```
Error personalizado: Esto es un error personalizado.

```


## Manejo de errores en funciones asíncronas

Con Python asyncio, puedes manejar errores en funciones asíncronas de manera similar.

```
import asyncio

async def tarea():
    try:
        await asyncio.sleep(1)
        raise ValueError("Error en la tarea asíncrona.")
    except ValueError as e:
        print("Error capturado:", e)

asyncio.run(tarea())

```

Salida:

```
Error capturado: Error en la tarea asíncrona.

```


## Buenas prácticas para el manejo de errores


1. Específica primero, general después:

Maneja excepciones específicas antes que las generales (Exception).
    

2. Evita excepciones silenciosas:

No dejes bloques except vacíos.
    
```
try:
    x = 10 / 0
except:
    pass  # El error se ignora completamente

```

```
try:
    x = 10 / 0
except ZeroDivisionError as e:
    print("Error:", e)

```
    

3. Usa excepciones solo para condiciones excepcionales:

No uses excepciones como flujo de control regular.


4. Lanza mensajes claros con raise:

Proporciona información útil para depuración.


5. Usa finally para liberar recursos:

Como cerrar archivos, conexiones de base de datos, etc.


6. Evita capturar excepciones genéricas innecesarias:

Captura solo los errores que esperas


### Maneja excepciones específicas

Evita capturar todas las excepciones de manera genérica con except Exception, a menos que sea absolutamente necesario. 

En su lugar, captura excepciones específicas para manejar errores esperados

Mal:

```
try:
    resultado = 10 / 0
except Exception:
    print("Algo salió mal.")

```

Bien:

```
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("Error: No se puede dividir entre cero.")

```


### Usa el bloque else para código exitoso

El bloque else se ejecuta solo si no ocurre ninguna excepción. 

Úsalo para separar claramente el manejo de errores del código normal

```
try:
    resultado = 10 / 2
except ZeroDivisionError:
    print("Error: No se puede dividir entre cero.")
else:
    print("El resultado es:", resultado)

```


### Limpia recursos con el bloque finally

Usa finally para realizar tareas de limpieza como cerrar archivos, conexiones de base de datos o liberar recursos

```
try:
    archivo = open("archivo.txt", "r")
    contenido = archivo.read()
except FileNotFoundError:
    print("Error: El archivo no existe.")
finally:
    if 'archivo' in locals() and not archivo.closed:
        archivo.close()  # Asegúrate de cerrar el archivo

```


### Valida datos antes de ejecutar operaciones

Reduce la necesidad de manejar errores validando entradas o condiciones antes de ejecutarlas

Mal:

```
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("Error: No se puede dividir entre cero.")

```

Bien:

```
def dividir(a, b):
    if b == 0:
        print("Error: El divisor no puede ser cero.")
        return
    return a / b

resultado = dividir(10, 0)

```


### Evita capturar excepciones genéricas innecesariamente

Capturar todas las excepciones (except Exception) debe usarse con precaución. Esto puede ocultar errores que no esperabas

Mal:

```
try:
    resultado = 10 / "a"
except Exception as e:
    print("Error:", e)  # Captura innecesariamente un TypeError

```

Bien:

```
try:
    resultado = 10 / "a"
except TypeError as e:
    print("Error: Operación inválida:", e)

```


### Lanza excepciones personalizadas

Usa excepciones personalizadas para describir errores específicos de tu aplicación.

```
class MiExcepcionPersonalizada(Exception):
    def __init__(self, mensaje):
        self.mensaje = mensaje

def procesar_datos(dato):
    if dato < 0:
        raise MiExcepcionPersonalizada("El dato no puede ser negativo.")

try:
    procesar_datos(-1)
except MiExcepcionPersonalizada as e:
    print("Error personalizado:", e.mensaje)

```


### Usa decoradores para manejar errores repetitivos

Si tienes múltiples funciones con manejo similar de errores, utiliza decoradores para reducir código repetitivo.

```
def manejar_errores(func):
    def envoltura(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except Exception as e:
            print(f"Error en {func.__name__}: {e}")
    return envoltura

@manejar_errores
def dividir(a, b):
    return a / b

dividir(10, 0)  # Captura el error automáticamente

```


### Registra errores en lugar de imprimirlos

En aplicaciones grandes, usa el módulo logging para registrar errores en lugar de solo imprimirlos en la consola

```
import logging

logging.basicConfig(filename="errores.log", level=logging.ERROR)

try:
    resultado = 10 / 0
except ZeroDivisionError as e:
    logging.error("Error: No se puede dividir entre cero", exc_info=True)

``` 


### Proporciona contexto adicional en excepciones

Si estás relanzando una excepción, agrega contexto adicional para facilitar el rastreo

```
try:
    resultado = int("no es un número")
except ValueError as e:
    raise ValueError("Error al convertir entrada a entero") from e

```


### Usa herramientas de depuración y rastreo

En entornos complejos, utiliza herramientas como:

Sentry o Rollbar para rastrear errores en producción.

El módulo estándar traceback para registrar información detallada
    
```
import traceback

try:
    resultado = 10 / 0
except ZeroDivisionError:
    traceback.print_exc()

```    


### Documenta las excepciones en tus funciones

Indica qué excepciones pueden ser lanzadas por tus funciones en su docstring

```
def dividir(a, b):
    """
    Divide dos números.

    Args:
        a (float): Dividendo.
        b (float): Divisor.

    Raises:
        ZeroDivisionError: Si el divisor es cero.

    Returns:
        float: Resultado de la división.
    """
    if b == 0:
        raise ZeroDivisionError("El divisor no puede ser cero.")
    return a / b

``` 


# Django 


## Instalación

Las aplicaciones Python suelen utilizar paquetes y módulos que no forman parte de la biblioteca estándar. 

A veces, las aplicaciones necesitan una versión específica de una biblioteca, porque la aplicación puede requerir que se haya corregido un error en particular o puede estar escrita utilizando una versión obsoleta de la interfaz de la biblioteca.

Si la aplicación A necesita la versión 1.0 de un módulo en particular, pero la aplicación B necesita la versión 2.0, entonces los requisitos están en conflicto e instalar la versión 1.0 o la 2.0 dejará a una aplicación sin poder ejecutarse.


La solución para este problema es crear un entorno virtual, un árbol de directorios autónomo que contenga una instalación de Python para una versión particular de Python, además de una cantidad de paquetes adicionales.

Luego, diferentes aplicaciones pueden utilizar diferentes entornos virtuales. 

Para resolver el ejemplo anterior de requisitos en conflicto, la aplicación A puede tener su propio entorno virtual con la versión 1.0 instalada, mientras que la aplicación B tiene otro entorno virtual con la versión 2.0

Si la aplicación B requiere que se actualice una biblioteca a la versión 3.0, esto no afectará el entorno de la aplicación A



### venv

Proporciona entornos Python aislados, que son más prácticos que instalar paquetes en todo el sistema. 

También permite instalar paquetes sin privilegios de administrador.


El módulo que se utiliza para crear y gestionar entornos virtuales se llama venv. 

venv instalará la versión de Python desde la que se ejecutó el comando (como se indica en la opción --version).


Para crear un entorno virtual, decida el directorio en el que desea colocarlo y ejecute el módulo venv como un script con la ruta del directorio:

```
python3 -venv tutorial-env

```

Creará un directorio llamado tutorial-env si no existe. 

También creará directorios dentro de él que contienen una copia del intérprete de Python y varios archivos de soporte.


Una ubicación de directorio común para un entorno virtual es .venv.

Este nombre mantiene el directorio generalmente oculto en su shell y, por lo tanto, fuera del camino, al mismo tiempo que le da un nombre que explica por qué existe el directorio.

También evita conflictos con los archivos de definición de variables de entorno .env que admiten algunas herramientas.


Una vez que haya creado un entorno virtual, puede activarlo.

```
source tutorial-env/bin/activate

```

(Este script está escrito para el shell bash. 

Si utiliza los shells csh o fish, existen scripts activate.csh y activate.fish alternativos que debería utilizar en su lugar).

Al activar el entorno virtual, cambiará el indicador de su shell para mostrar qué entorno virtual está utilizando y modificará el entorno para que al ejecutar Python obtenga esa versión e instalación específicas de Python. 

```
$ source ~/envs/tutorial-env/bin/activate
(tutorial-env) $ python
Python 3.5.1 (default, May  6 2016, 10:59:36)
  ...
>>> import sys
>>> sys.path
['', '/usr/local/lib/python35.zip', ...,
'~/envs/tutorial-env/lib/python3.5/site-packages']
>>>

```

Para desactivar un entorno virtual, escriba:

```
deactivate


```

Después de haber creado y activado un entorno virtual, ingresa el comando:

```
$ python3 -m pip3 install Django

```


## pip3

Puede instalar, actualizar y eliminar paquetes utilizando un programa llamado pip. 

De manera predeterminada, pip instalará paquetes desde el índice de paquetes de Python. 

Puede explorar el índice de paquetes de Python accediendo a él desde su navegador web.


pip tiene varios subcomandos: “install”, “uninstall”, “freeze”, etc. 

### Puede instalar la última versión de un paquete especificando el nombre de un paquete

```
(tutorial-env) $ python -m pip install novas

```


### También puede instalar una versión específica de un paquete proporcionando el nombre del paquete seguido de == y el número de versión:

```
(tutorial-env) $ python -m pip install requests==2.6.0

```

Si vuelve a ejecutar este comando, pip notará que la versión solicitada ya está instalada y no hará nada.

### Puede proporcionar un número de versión diferente para obtener esa versión, o puede ejecutar python -m pip install --upgrade para actualizar el paquete a la última versión:

```
(tutorial-env) $ python -m pip install --upgrade requests

```

### python -m pip uninstall seguido de uno o más nombres de paquetes eliminará los paquetes del entorno virtual.

### python -m pip show mostrará información sobre un paquete en particular:

```
(tutorial-env) $ python -m pip show requests

```

### python -m pip list mostrará todos los paquetes instalados en el entorno virtual:

```
(tutorial-env) $ python -m pip list

```

### python -m pip freeze producirá una lista similar de los paquetes instalados, pero la salida utiliza el formato que python -m pip install expects. 

### Una convención común es colocar esta lista en un archivo requirements.txt:

```
(tutorial-env) $ python -m pip freeze > requirements.txt
(tutorial-env) $ cat requirements.txt

````

### Luego, el archivo requirements.txt se puede enviar al control de versiones y enviar como parte de una aplicación. 

### Los usuarios pueden instalar todos los paquetes necesarios con install -r:

```
(tutorial-env) $ python -m pip install -r requirements.txt

```

pip tiene muchas más opciones. 

Consulta la guía de Instalación de módulos de Python para obtener la documentación completa de pip. 

Cuando hayas escrito un paquete y quieras ponerlo a disposición en el Índice de paquetes de Python, consulta la guía del usuario de empaquetado de Python.


# Django app

Creación de una aplicación de encuesta básica.

Constará de dos partes:

1. Un sitio público que permite a las personas ver las encuestas y votar en ellas.

2. Un sitio de administración que te permite agregar, cambiar y eliminar encuestas.


Verificar instalación de django

```
python3 -m django --version

```

Si no lo está, recibirás un error que dice “No module named django”.

Este tutorial está escrito para Django 5.1, que es compatible con Python 3.10 y versiones posteriores. Si la versión de Django no coincide, puedes consultar el tutorial correspondiente a tu versión de Django mediante el selector de versiones que se encuentra en la esquina inferior derecha de esta página, o actualizar Django a la versión más reciente. 

Si estás usando una versión anterior de Python, consulta ¿Qué versión de Python puedo usar con Django? para encontrar una versión compatible de Django.


Si tienes problemas para seguir este tutorial, dirígete a la sección Obtener ayuda de las Preguntas frecuentes.


## Crear proyecto 

Si es la primera vez que usas Django, tendrás que encargarte de algunas configuraciones iniciales. 

Es decir, tendrás que generar automáticamente un código que establezca un proyecto Django – una colección de configuraciones para una instancia de Django, incluyendo la configuración de la base de datos, opciones específicas de Django y configuraciones específicas de la aplicación.

Desde la línea de comandos, ingresa a un directorio donde te gustaría almacenar tu código y crea un nuevo directorio llamado djangotutorial. 

(Este nombre de directorio no le importa a Django; puedes renombrarlo como quieras.)

```
mkdir djangotutorial

```

Luego ejecuta el siguiente comando para iniciar un nuevo proyecto Django:

```
django-admin startproject mysite djangotutorial

```

Esto creará un proyecto llamado mysite dentro del directorio djangotutorial. 

Si no funcionó, consulte Problemas al ejecutar django-admin.


### Deberá evitar nombrar proyectos con nombres de componentes integrados de Python o Django. 

En particular, esto significa que debe evitar usar nombres como django (que entrará en conflicto con el propio Django) o test (que entra en conflicto con un paquete integrado de Python).

Veamos lo que creó startproject:

```
djangotutorial/
manage.py
mysite/
__init__.py
settings.py
urls.py
asgi.py
wsgi.py

```

Estos archivos son:

manage.py: Una utilidad de línea de comandos que te permite interactuar con este proyecto de Django de varias maneras. Puedes leer todos los detalles sobre manage.py en django-admin y manage.py.

mysite/: Un directorio que es el paquete Python real para tu proyecto. Su nombre es el nombre del paquete Python que necesitarás usar para importar cualquier cosa dentro de él (por ejemplo, mysite.urls).

mysite/__init__.py: Un archivo vacío que le dice a Python que este directorio debe considerarse un paquete Python. Si eres un principiante de Python, lee más sobre los paquetes en la documentación oficial de Python.

mysite/settings.py: Ajustes/configuración para este proyecto de Django. Los ajustes de Django te dirán todo sobre cómo funcionan los ajustes.

mysite/urls.py: Las declaraciones de URL para este proyecto de Django; una “tabla de contenidos” de tu sitio impulsado por Django. Puedes leer más sobre las URL en el despachador de URL.

mysite/asgi.py: Un punto de entrada para servidores web compatibles con ASGI para brindar servicio a su proyecto. Consulte Cómo implementar con ASGI para obtener más detalles.

mysite/wsgi.py: Un punto de entrada para servidores web compatibles con WSGI para brindar servicio a su proyecto. Consulte Cómo implementar con WSGI para obtener más detalles


## Development server

Para el servidor de desarrollo: 

Verifiquemos que su proyecto Django funciona. 

Vaya al directorio djangotutorial, si aún no lo ha hecho, y ejecute los siguientes comandos:

```
python manage.py runserver

```

Verá la siguiente salida en la línea de comandos:

```
Realizando comprobaciones del sistema...

La comprobación del sistema no identificó problemas (0 silenciados).

```

Nota:

Ignore la advertencia sobre migraciones de bases de datos no aplicadas por ahora; nos ocuparemos de la base de datos en breve.


Ahora que el servidor está funcionando, visite http://127.0.0.1:8000/ con su navegador web. 

Verá una página de "¡Felicitaciones!", con un cohete despegando.


Ha iniciado el servidor de desarrollo Django, un servidor web liviano escrito exclusivamente en Python. 

Hemos incluido esto con Django para que puedas desarrollar cosas rápidamente, sin tener que lidiar con la configuración de un servidor de producción (como Apache) hasta que estés listo para la producción.


### Ahora es un buen momento para tener en cuenta lo siguiente: no uses este servidor en nada que se parezca a un entorno de producción. 

Está pensado solo para usarse durante el desarrollo. 

(Nos dedicamos a crear marcos web, no servidores web).


(Para servir el sitio en un puerto diferente, consulta la referencia de runserver).


### Recarga automática de runserver

El servidor de desarrollo recarga automáticamente el código Python para cada solicitud según sea necesario. 

No necesitas reiniciar el servidor para que los cambios de código surtan efecto.

Sin embargo, algunas acciones, como agregar archivos, no activan un reinicio, por lo que tendrás que reiniciar el servidor en estos casos.


## Crear app de encuesta

Ahora que tu entorno – un “proyecto” – está configurado, estás listo para comenzar a trabajar.

Cada aplicación que escribes en Django consiste en un paquete Python que sigue una cierta convención. 

Django viene con una utilidad que genera automáticamente la estructura básica de directorios de una aplicación, para que puedas enfocarte en escribir código en lugar de crear directorios.


### Projects vs apps

Una aplicación es una aplicación web que hace algo – por ejemplo, un sistema de blog, una base de datos de registros públicos o una pequeña aplicación de encuestas. 

Un proyecto es una colección de configuraciones y aplicaciones para un sitio web en particular. 

Un proyecto puede contener múltiples aplicaciones

Una aplicación puede estar en múltiples proyectos.

 
### Tus aplicaciones pueden estar en cualquier parte de tu ruta de Python. 

En este tutorial, crearemos nuestra aplicación de encuestas dentro de la carpeta djangotutorial.
 
Para crear tu aplicación, asegúrate de estar en el mismo directorio que manage.py y escribe este comando:

```
python manage.py startapp polls

python3 manage.py startapp polls

```

Esto creará un directorio llamado polls, que se presenta de la siguiente manera:

```
polls/
__init__.py
admin.py
apps.py
immigrations/
__init__.py
models.py
tests.py
views.py

```

Esta estructura de directorio albergará la aplicación poll


### Primera view

Abre el archivo polls/views.py y pon el siguiente código Python en él:

polls/views.py

```
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

```

### interpretación Código: importa un modulo, define una funcion index que toma un parametro y retorna un objeto/propiedad de respuesta. 

### Con el objetivo de crear una página web dentro de una app web. 


Esta es la vista más básica posible en Django. 

### Para acceder a ella en un navegador, necesitamos mapearla a una URL - y para esto necesitamos definir una configuración de URL, o “URLconf” para abreviar. 

### Estas configuraciones de URL están definidas dentro de cada aplicación de Django, y son archivos Python llamados urls.py.

### Para definir una URLconf para la aplicación de encuestas, crea un archivo polls/urls.py con el siguiente contenido:

polls/urls.py

```
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
]

```

### Interpretación del código: importa path e views, crea array con un objeto/func path que toma tres objetos/propiedades y sus valores. 


El directorio de tu aplicación ahora debería verse así:

```
polls/
__init__.py
admin.py
apps.py
immigrations/
__init__.py
models.py
tests.py
urls.py
views.py

```

### El siguiente paso es configurar la URLconf global en el proyecto mysite para incluir la URLconf definida en polls.urls. 

### Para ello, agrega una importación para django.urls.include en mysite/urls.py e inserta un include() en la lista urlpatterns, de modo que tengas:

mysite/urls.py

```
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("polls/", include("polls.urls")),
    path("admin/", admin.site.urls),
]

```

### La función path() espera al menos dos argumentos: ruta y vista (url y view). 

### La función include() permite hacer referencia a otras URLconfs. 

Siempre que Django encuentra include(), corta cualquier parte de la URL que coincida hasta ese punto y envía la cadena restante a la URLconf incluida para su posterior procesamiento.










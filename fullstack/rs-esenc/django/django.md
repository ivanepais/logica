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

### La función path() espera al menos dos argumentos: ruta/rute y vista (url y view). 

### La función include() permite hacer referencia a otras URLconfs. 

Siempre que Django encuentra include(), corta cualquier parte de la URL que coincida hasta ese punto y envía la cadena restante a la URLconf incluida para su posterior procesamiento.


La idea detrás de include() es facilitar la conexión y reproducción de URL.

Dado que las encuestas están en su propia URLconf (polls/urls.py), se pueden colocar en “/polls/”, o en “/fun_polls/”, o en “/content/polls/”, o en cualquier otra ruta raíz, y la aplicación seguirá funcionando.


### Cuándo usar include()

Siempre debes usar include() cuando incluyas otros patrones de URL.

La única excepción es admin.site.urls, que es una URLconf preconstruida proporcionada por Django para el sitio de administración predeterminado.

### Ahora has conectado una vista de índice a la URLconf. 

### Verifica que esté funcionando con el siguiente comando

```
$ python manage.py runserver

```

Vaya a http://localhost:8000/polls/ en su navegador y debería ver el texto “Hola, mundo. Estás en el índice de encuestas”, que definió en la vista de índice.


¿Página no encontrada?

### Si aparece una página de error aquí, verifique que esté yendo a http://localhost:8000/polls/ y no a http://localhost:8000/.

Cuando se sienta cómodo con el flujo básico de solicitud y respuesta, lea la parte 2 de este tutorial para comenzar a trabajar con la base de datos.


# Database 

Configuraremos la base de datos, crearemos tu primer modelo y te ofreceremos una breve introducción al sitio de administración generado automáticamente de Django.

Si tienes problemas ve a FAQ. 


## Setup db 

Ahora, abre mysite/settings.py. 

Es un módulo Python normal con variables a nivel de módulo que representan la configuración de Django.
 
Por defecto, la configuración de DATABASES usa SQLite. 

Si eres nuevo en bases de datos, o simplemente te interesa probar Django, esta es la opción más fácil. 

SQLite está incluido en Python, por lo que no necesitarás instalar nada más para soportar tu base de datos

Sin embargo, cuando comiences tu primer proyecto real, es posible que quieras usar una base de datos más escalable como PostgreSQL, para evitar dolores de cabeza por cambiar de base de datos en el futuro.
 
 
Si deseas usar otra base de datos, consulta los detalles para personalizar y poner en funcionamiento tu base de datos.
 

### Mientras editas mysite/settings.py, establece TIME_ZONE en tu zona horaria.

### Además, ten en cuenta la configuración INSTALLED_APPS en la parte superior del archivo. 

### Esta contiene los nombres de todas las aplicaciones de Django que están activadas en esta instancia de Django. 

Las aplicaciones se pueden usar en varios proyectos, y puedes empaquetarlas y distribuirlas para que otras personas las usen en sus proyectos.

De manera predeterminada, INSTALLED_APPS contiene las siguientes aplicaciones, todas las cuales vienen con Django:


django.contrib.admin: el sitio de administración. Lo usarás en breve.

django.contrib.auth: un sistema de autenticación.

django.contrib.contenttypes: un marco para tipos de contenido.

django.contrib.sessions: un marco para sesiones.

django.contrib.messages: un marco para mensajería.

django.contrib.staticfiles: un marco para administrar archivos estáticos.



Estas aplicaciones se incluyen de manera predeterminada para facilitar el caso común.

### Sin embargo, algunas de estas aplicaciones utilizan al menos una tabla de base de datos, por lo que necesitamos crear las tablas en la base de datos antes de poder usarlas. Para ello, ejecute el siguiente comando:

```
python manage.py migrants

```

El comando de migración examina la configuración INSTALLED_APPS y crea las tablas de base de datos necesarias según la configuración de la base de datos en el archivo mysite/settings.py y las migraciones de base de datos enviadas con la aplicación (las abordaremos más adelante).

Verá un mensaje para cada migración que aplique.

### Si está interesado, ejecute el cliente de línea de comandos para su base de datos y escriba \dt (PostgreSQL), SHOW TABLES; (MariaDB, MySQL), .tables (SQLite) o SELECT TABLE_NAME FROM USER_TABLES; (Oracle) para mostrar las tablas que creó Django.


Para los minimalistas

Como dijimos anteriormente, las aplicaciones predeterminadas se incluyen para el caso común, pero no todos las necesitan.

Si no necesita ninguna o ninguna de ellas, no dude en comentar o eliminar las líneas correspondientes de INSTALLED_APPS antes de ejecutar la migración.

El comando de migración solo ejecutará migraciones para las aplicaciones en INSTALLED_APPS.


## Crear modelos 

El diseño de su base de datos, con metadatos adicionales.


Filosofía

### Un modelo es la única fuente definitiva de información sobre sus datos. 

### Contiene los campos y comportamientos esenciales de los datos que está almacenando. 

Django sigue el principio DRY. 

### El objetivo es definir su modelo de datos en un solo lugar y derivar cosas automáticamente de él.


Esto incluye las migraciones: a diferencia de Ruby On Rails, por ejemplo, las migraciones se derivan completamente de su archivo de modelos y son esencialmente un historial que Django puede revisar para actualizar su esquema de base de datos para que coincida con sus modelos actuales.


En nuestra aplicación de encuestas, crearemos dos modelos: Pregunta y Opción (Question, Choice). 

1. Una Pregunta tiene una pregunta y una fecha de publicación. 

2. Una Opción tiene dos campos: el texto de la opción y un recuento de votos. Cada Opción está asociada a una Pregunta.

### Estos conceptos están representados por clases de Python. 

Edite el archivo polls/models.py para que se vea así:

polls/models.py

```
from django.db import models


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField("date published")


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

```

Aquí, cada modelo está representado por una clase que subclasifica django.db.models.Model. 

### Cada modelo tiene una cantidad de variables de clase, cada una de las cuales representa un campo de base de datos en el modelo.

### Cada campo está representado por una instancia de una clase Field (por ejemplo, CharField para campos de caracteres y DateTimeField para datetimes).

Esto le indica a Django qué tipo de datos contiene cada campo.


### El nombre de cada instancia Field (por ejemplo, question_text o pub_date) es el nombre del campo, en formato compatible con la máquina

### Usarás este valor en tu código Python y tu base de datos lo usará como el nombre de la columna.


Puedes usar un primer argumento posicional opcional para un Field para designar un nombre legible para humanos. 

Esto se usa en un par de partes introspectivas de Django y también funciona como documentación.

Si no se proporciona este campo, Django usará el nombre legible por la máquina.

En este ejemplo, solo hemos definido un nombre legible para humanos para Question.pub_date. 

Para todos los demás campos de este modelo, el nombre legible por máquina del campo será suficiente como nombre legible para humanos.


Algunas clases de campo tienen argumentos obligatorios.

CharField, por ejemplo, requiere que le des un valor max_length.

Esto se usa no solo en el esquema de la base de datos, sino también en la validación, como veremos pronto.


Un campo también puede tener varios argumentos opcionales; en este caso, hemos establecido el valor predeterminado de votos en 0.


Por último, ten en cuenta que se define una relación mediante ForeignKey.

Esto le indica a Django que cada opción está relacionada con una sola pregunta.

Django admite todas las relaciones de base de datos comunes: muchos a uno, muchos a muchos y uno a uno.


## Activar modelos 

Ese pequeño fragmento de código de modelo le da a Django mucha información. Con él, Django puede:

1. Crear un esquema de base de datos (sentencias CREATE TABLE) para esta aplicación.

2. Crear una API de acceso a la base de datos de Python para acceder a los objetos Question y Choice.

Pero primero debemos decirle a nuestro proyecto que la aplicación de encuestas está instalada.


Filosofía

Las aplicaciones de Django son “conectables”: puedes usar una aplicación en varios proyectos y puedes distribuir aplicaciones, porque no tienen que estar vinculadas a una instalación de Django determinada.


### Para incluir la aplicación en nuestro proyecto, necesitamos agregar una referencia a su clase de configuración en la configuración INSTALLED_APPS.

La clase PollsConfig está en el archivo polls/apps.py, por lo que su ruta de puntos es 'polls.apps.PollsConfig'.

Edita el archivo mysite/settings.py y agrega esa ruta de puntos a la configuración INSTALLED_APPS. 

mysite/settings.py

```
INSTALLED_APPS = [
    "polls.apps.PollsConfig",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]

```

Ahora Django sabe que debe incluir la aplicación de encuestas. 

Ejecutemos otro comando:

```
python manage.py makemigrations polls

```

Debería ver algo similar a lo siguiente:

```
Migraciones para 'encuestas':
polls/migrations/0001_initial.py
+ Crear modelo Pregunta
+ Crear modelo Elección

```

Al ejecutar makemigrations, le está diciendo a Django que ha realizado algunos cambios en sus modelos (en este caso, ha realizado algunos nuevos) y que le gustaría que los cambios se almacenen como una migración.


Las migraciones son la forma en que Django almacena los cambios en tus modelos (y, por lo tanto, en el esquema de tu base de datos): son archivos en el disco. 

Puedes leer la migración de tu nuevo modelo si lo deseas; es el archivo polls/migrations/0001_initial.py. 

No te preocupes, no se espera que los leas cada vez que Django haga uno, pero están diseñados para que los puedan editar personas en caso de que quieras modificar manualmente la forma en que Django cambia las cosas.


Hay un comando que ejecutará las migraciones por ti y administrará tu esquema de base de datos automáticamente; se llama migrar, y lo abordaremos en un momento; pero primero, veamos qué SQL ejecutaría esa migración. 

El comando sqlmigrate toma los nombres de las migraciones y devuelve su SQL.

```
$ python manage.py sqlmigrate polls 0001

```

Debería ver algo similar a lo siguiente (lo hemos reformateado para facilitar su lectura):

```
BEGIN;
--
-- Create model Question
--
CREATE TABLE "polls_question" (
    "id" bigint NOT NULL PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    "question_text" varchar(200) NOT NULL,
    "pub_date" timestamp with time zone NOT NULL
);
--
-- Create model Choice
--
CREATE TABLE "polls_choice" (
    "id" bigint NOT NULL PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    "choice_text" varchar(200) NOT NULL,
    "votes" integer NOT NULL,
    "question_id" bigint NOT NULL
);
ALTER TABLE "polls_choice"
  ADD CONSTRAINT "polls_choice_question_id_c5b4b260_fk_polls_question_id"
    FOREIGN KEY ("question_id")
    REFERENCES "polls_question" ("id")
    DEFERRABLE INITIALLY DEFERRED;
CREATE INDEX "polls_choice_question_id_c5b4b260" ON "polls_choice" ("question_id");

COMMIT;

```

Tenga en cuenta lo siguiente:

1. El resultado exacto (output) variará según la base de datos que esté utilizando. El ejemplo anterior se generó para PostgreSQL.

2. Los nombres de las tablas se generan automáticamente combinando el nombre de la aplicación (encuestas) y el nombre en minúsculas del modelo (pregunta y opción). (Puede anular este comportamiento).

3. Las claves primarias (IDs) se agregan automáticamente. (También puede anular esto).

4. Por convención, Django agrega "_id" al nombre del campo de clave externa (FOREIGN KEY). (Sí, también puede anular esto).

5. La relación de clave externa se hace explícita mediante una restricción FOREIGN KEY. No se preocupe por las partes DEFERRABLE; le está indicando a PostgreSQL que no aplique la clave externa hasta el final de la transacción.

6. Está adaptado a la base de datos que estás usando, por lo que los tipos de campo específicos de la base de datos, como auto_increment (MySQL), bigint PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (PostgreSQL) o autoincrement de clave primaria entera (SQLite), se manejan automáticamente. Lo mismo ocurre con el uso de comillas en los nombres de campo, por ejemplo, comillas dobles o simples.

7. El comando sqlmigrate en realidad no ejecuta la migración en tu base de datos; en cambio, la imprime en la pantalla para que puedas ver lo que SQL Django cree que es necesario. Es útil para verificar lo que Django va a hacer o si tienes administradores de bases de datos que requieren scripts SQL para los cambios.


Si estás interesado, también puedes ejecutar python manage.py check; esto verifica si hay algún problema en tu proyecto sin realizar migraciones ni tocar la base de datos.


Ahora, ejecute migrar nuevamente para crear esas tablas de modelo en su base de datos:

```
python manage.py migrate
Operations to perform:
  Apply all migrations: admin, auth, contenttypes, polls, sessions
Running migrations:
  Rendering model states... DONE
  Applying polls.0001_initial... OK

```

El comando migrar toma todas las migraciones que no se han aplicado (Django rastrea cuáles se han aplicado usando una tabla especial en tu base de datos llamada django_migrations) y las ejecuta contra tu base de datos, esencialmente sincronizando los cambios que realizaste en tus modelos con el esquema en la base de datos.

Las migraciones son muy poderosas y te permiten cambiar tus modelos con el tiempo, a medida que desarrollas tu proyecto, sin la necesidad de eliminar tu base de datos o tablas y crear otras nuevas; se especializa en actualizar tu base de datos en vivo, sin perder datos. 

### Las cubriremos con más profundidad en una parte posterior del tutorial, pero por ahora, recuerda la guía de tres pasos para realizar cambios en los modelos:

1. Cambie sus modelos (en models.py).

2. Ejecute ```python manage.py makemigrations``` para crear migraciones para esos cambios.

3. Ejecute ```python manage.py migrate``` para aplicar esos cambios a la base de datos.


La razón por la que existen comandos separados para realizar y aplicar migraciones es porque las migraciones se envían a su sistema de control de versiones y se envían con su aplicación; no solo facilitan su desarrollo, sino que también son utilizables por otros desarrolladores y en producción.

Lea la documentación de django-admin para obtener información completa sobre lo que puede hacer la utilidad manage.py.


## Probando/ejecutando la API

Ahora, entremos en la consola interactiva de Python y juguemos con la API gratuita que te ofrece Django. Para invocar la consola de Python, usa este comando:

```
python manage.py shell

```

Usamos esto en lugar de simplemente escribir “python”, porque manage.py establece la variable de entorno DJANGO_SETTINGS_MODULE, que le da a Django la ruta de importación de Python a tu archivo mysite/settings.py.


Una vez que estés en la consola, explora la API de la base de datos (queries):

```
>>> from polls.models import Choice, Question  # Import the model classes we just wrote.

# No questions are in the system yet.
>>> Question.objects.all()
<QuerySet []>

# Create a new Question.
# Support for time zones is enabled in the default settings file, so
# Django expects a datetime with tzinfo for pub_date. Use timezone.now()
# instead of datetime.datetime.now() and it will do the right thing.
>>> from django.utils import timezone
>>> q = Question(question_text="What's new?", pub_date=timezone.now())

# Save the object into the database. You have to call save() explicitly.
>>> q.save()

# Now it has an ID.
>>> q.id
1

# Access model field values via Python attributes.
>>> q.question_text
"What's new?"
>>> q.pub_date
datetime.datetime(2012, 2, 26, 13, 0, 0, 775217, tzinfo=datetime.timezone.utc)

# Change values by changing the attributes, then calling save().
>>> q.question_text = "What's up?"
>>> q.save()

# objects.all() displays all the questions in the database.
>>> Question.objects.all()
<QuerySet [<Question: Question object (1)>]>

```

Espere un minuto. 

### <Question: Question object (1)> no es una representación útil de este objeto. 

Arreglemos eso editando el modelo Question (en el archivo polls/models.py) y agregando un método __str__() tanto a Question como a Choice:

polls/models.py

```
from django.db import models


class Question(models.Model):
    # ...
    def __str__(self):
        return self.question_text


class Choice(models.Model):
    # ...
    def __str__(self):
        return self.choice_text

```

Es importante agregar métodos __str__() a sus modelos, no solo para su propia conveniencia cuando trabaje con el mensaje interactivo, sino también porque las representaciones de los objetos se utilizan en todo el administrador generado automáticamente de Django.

Agreguemos también un método personalizado a este modelo:

```
import datetime

from django.db import models
from django.utils import timezone


class Question(models.Model):
    # ...
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

```

Tenga en cuenta la incorporación de import datetime y from django.utils import timezone, para hacer referencia al módulo datetime estándar de Python y a las utilidades relacionadas con la zona horaria de Django en django.utils.timezone, respectivamente. 

Si no está familiarizado con el manejo de la zona horaria en Python, puede obtener más información en los documentos de soporte de zona horaria.

Guarde estos cambios e inicie un nuevo shell interactivo de Python ejecutando python manage.py shell nuevamente:

```
>>> from polls.models import Choice, Question

# Make sure our __str__() addition worked.
>>> Question.objects.all()
<QuerySet [<Question: What's up?>]>

# Django provides a rich database lookup API that's entirely driven by
# keyword arguments.
>>> Question.objects.filter(id=1)
<QuerySet [<Question: What's up?>]>
>>> Question.objects.filter(question_text__startswith="What")
<QuerySet [<Question: What's up?>]>

# Get the question that was published this year.
>>> from django.utils import timezone
>>> current_year = timezone.now().year
>>> Question.objects.get(pub_date__year=current_year)
<Question: What's up?>

# Request an ID that doesn't exist, this will raise an exception.
>>> Question.objects.get(id=2)
Traceback (most recent call last):
    ...
DoesNotExist: Question matching query does not exist.

# Lookup by a primary key is the most common case, so Django provides a
# shortcut for primary-key exact lookups.
# The following is identical to Question.objects.get(id=1).
>>> Question.objects.get(pk=1)
<Question: What's up?>

# Make sure our custom method worked.
>>> q = Question.objects.get(pk=1)
>>> q.was_published_recently()
True

# Give the Question a couple of Choices. The create call constructs a new
# Choice object, does the INSERT statement, adds the choice to the set
# of available choices and returns the new Choice object. Django creates
# a set (defined as "choice_set") to hold the "other side" of a ForeignKey
# relation (e.g. a question's choice) which can be accessed via the API.
>>> q = Question.objects.get(pk=1)

# Display any choices from the related object set -- none so far.
>>> q.choice_set.all()
<QuerySet []>

# Create three choices.
>>> q.choice_set.create(choice_text="Not much", votes=0)
<Choice: Not much>
>>> q.choice_set.create(choice_text="The sky", votes=0)
<Choice: The sky>
>>> c = q.choice_set.create(choice_text="Just hacking again", votes=0)

# Choice objects have API access to their related Question objects.
>>> c.question
<Question: What's up?>

# And vice versa: Question objects get access to Choice objects.
>>> q.choice_set.all()
<QuerySet [<Choice: Not much>, <Choice: The sky>, <Choice: Just hacking again>]>
>>> q.choice_set.count()
3

# The API automatically follows relationships as far as you need.
# Use double underscores to separate relationships.
# This works as many levels deep as you want; there's no limit.
# Find all Choices for any question whose pub_date is in this year
# (reusing the 'current_year' variable we created above).
>>> Choice.objects.filter(question__pub_date__year=current_year)
<QuerySet [<Choice: Not much>, <Choice: The sky>, <Choice: Just hacking again>]>

# Let's delete one of the choices. Use delete() for that.
>>> c = q.choice_set.filter(choice_text__startswith="Just hacking")
>>> c.delete()

```

Para obtener más información sobre las relaciones entre modelos, consulte Acceso a objetos relacionados. 

Para obtener más información sobre cómo usar guiones bajos dobles para realizar búsquedas de campos a través de la API, consulte Búsquedas de campos. 

Para obtener detalles completos sobre la API de base de datos, consulte nuestra referencia de API de base de datos.


## Intro a Django Admin

Filosofía

Generar sitios de administración para que su personal o sus clientes agreguen, cambien y eliminen contenido es un trabajo tedioso que no requiere mucha creatividad. 

Por ese motivo, Django automatiza por completo la creación de interfaces de administración para los modelos.

Django se escribió en un entorno de sala de prensa, con una separación muy clara entre los "editores de contenido" y el sitio "público". 

Los administradores de sitios usan el sistema para agregar noticias, eventos, resultados deportivos, etc., y ese contenido se muestra en el sitio público. 

Django resuelve el problema de crear una interfaz unificada para que los administradores de sitios editen contenido.

El administrador no está destinado a ser utilizado por los visitantes del sitio. 

Es para los administradores del sitio.


### Creación de un usuario administrador

Primero, tendremos que crear un usuario que pueda iniciar sesión en el sitio de administración. Ejecute el siguiente comando:

```
$ python manage.py createsuperuser

```

Ingrese el nombre de usuario que desee y presione Enter.

```
Username: admin

```

Luego se le solicitará la dirección de correo electrónico que desee:

```
Email address: admin@example.com

```

El paso final es ingresar su contraseña. Se le solicitará que ingrese su contraseña dos veces, la segunda vez como confirmación de la primera.

```
Password: **********
Password (again): *********
Superuser created successfully.

```


### Inicie el servidor de desarrollo

El sitio de administración de Django está activado de manera predeterminada. Iniciemos el servidor de desarrollo y explorémoslo.

Si el servidor no está en ejecución, inícielo de la siguiente manera:

```
python manage.py runserver

```

Ahora, abra un navegador web y vaya a “/admin/” en su dominio local, por ejemplo, http://127.0.0.1:8000/admin/. 

Debería ver la pantalla de inicio de sesión del administrador


Dado que la traducción está activada de forma predeterminada, si configura LANGUAGE_CODE, la pantalla de inicio de sesión se mostrará en el idioma indicado (si Django tiene traducciones apropiadas).


### Ingresa al sitio de administración

Ahora, intenta iniciar sesión con la cuenta de superusuario que creaste en el paso anterior. 

Deberías ver la página de índice de administración de Django:

Deberías ver algunos tipos de contenido editable: grupos y usuarios. 

Los proporciona django.contrib.auth, el marco de autenticación que ofrece Django.


### Hacer que la aplicación de encuestas sea modificable en el administrador

Pero, ¿dónde está nuestra aplicación de encuestas? No se muestra en la página de índice del administrador.

#### Solo queda una cosa por hacer: debemos decirle al administrador que los objetos de preguntas tienen una interfaz de administrador. 

Para hacer esto, abra el archivo polls/admin.py y edítelo para que se vea así:


polls/admin.py

```
from django.contrib import admin

from .models import Question

admin.site.register(Question)

```


### Explora la funcionalidad de administración gratuita

Ahora que hemos registrado la pregunta, Django sabe que debería aparecer en la página de índice de administración

Haz clic en “Preguntas”. Ahora estás en la página de “lista de cambios” para las preguntas. Esta página muestra todas las preguntas en la base de datos y te permite elegir una para cambiarla. Está la pregunta “¿Qué pasa?” que creamos antes:

Haz clic en la pregunta “¿Qué pasa?” para editarla:


Aspectos a tener en cuenta:

1. El formulario se genera automáticamente a partir del modelo de preguntas.

2. Los diferentes tipos de campos del modelo (DateTimeField, CharField) corresponden al widget de entrada HTML apropiado. Cada tipo de campo sabe cómo mostrarse en el administrador de Django.

3. Cada DateTimeField obtiene accesos directos gratuitos de JavaScript. Las fechas obtienen un acceso directo "Hoy" y una ventana emergente de calendario, y las horas obtienen un acceso directo "Ahora" y una ventana emergente conveniente que enumera las horas ingresadas comúnmente.


La parte inferior de la página le ofrece un par de opciones:

1. Guardar: guarda los cambios y regresa a la página de lista de cambios para este tipo de objeto.

2. Guardar y continuar editando: guarda los cambios y vuelve a cargar la página de administración para este objeto.

3. Guardar y agregar otro: guarda los cambios y carga un formulario nuevo en blanco para este tipo de objeto.

4. Eliminar: muestra una página de confirmación de eliminación.


Si el valor de “Fecha de publicación/Date published” no coincide con la hora en la que creaste la pregunta en el Tutorial 1, probablemente significa que olvidaste configurar el valor correcto para la configuración TIME_ZONE. 

Cámbialo, vuelve a cargar la página y verifica que aparezca el valor correcto.

Cambia la “Fecha de publicación” haciendo clic en los accesos directos “Hoy/today” y “Ahora/now”. 

Luego haz clic en “Guardar y continuar editando”. 

Luego haz clic en “Historial” en la esquina superior derecha. Verás una página que enumera todos los cambios realizados a este objeto a través del administrador de Django, con la marca de tiempo y el nombre de usuario de la persona que realizó el cambio.


## Views

Nos concentraremos en crear la interfaz pública: “vistas”.


Descripción general

Una vista es un “tipo” de página web en su aplicación Django que generalmente cumple una función específica y tiene una plantilla específica. 

Por ejemplo, en una aplicación de blog, puede tener las siguientes vistas:

1. Página de inicio del blog: muestra las últimas entradas.

2. Página de “detalle” de la entrada: página de enlace permanente para una sola entrada.

3. Página de archivo basada en el año: muestra todos los meses con entradas en el año dado.

4. Página de archivo basada en el mes: muestra todos los días con entradas en el mes dado.

5. Página de archivo basada en el día: muestra todas las entradas en el día dado.

6. Acción de comentario: maneja la publicación de comentarios en una entrada dada.


En nuestra aplicación de encuesta, tendremos las siguientes cuatro vistas:

1. Página de “índice” de preguntas: muestra las últimas preguntas.

2. Página de “detalle” de preguntas: muestra el texto de una pregunta, sin resultados pero con un formulario para votar.
 
3. Página de “resultados” de preguntas: muestra los resultados de una pregunta en particular.

4. Acción de votación: maneja la votación de una opción en particular en una pregunta en particular.


En Django, las páginas web y otro contenido se entregan mediante vistas. 

Cada vista está representada por una función de Python (o método, en el caso de las vistas basadas en clases). 

Django elegirá una vista examinando la URL que se solicita (para ser precisos, la parte de la URL después del nombre de dominio).


Es posible que en su tiempo en la web se haya encontrado con bellezas como ME2/Sites/dirmod.htm?sid=&type=gen&mod=Core+Pages&gid=A6CD4967199A42D9B65B1B. 

Le agradará saber que Django nos permite patrones de URL mucho más elegantes que ese.

Un patrón de URL es la forma general de una URL, por ejemplo: /newsarchive/<year>/<month>/.

### Para llegar desde una URL a una vista, Django utiliza lo que se conoce como "URLconfs". 

### Una URLconf asigna patrones de URL a vistas.

Este tutorial proporciona instrucciones básicas sobre el uso de URLconfs, y puede consultar el despachador de URL para obtener más información.


### Crear vistas

Agreguemos algunas vistas más a polls/views.py. 

### Estas vistas son ligeramente diferentes, porque toman un argumento

polls/views.py

```
def detail(request, question_id):
    return HttpResponse("You're looking at question %s." % question_id)


def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)


def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)

````

### Conecte estas nuevas vistas al módulo polls.urls agregando las siguientes llamadas path():

polls/urls.py

```
from django.urls import path

from . import views

urlpatterns = [
    # ex: /polls/
    path("", views.index, name="index"),
    # ex: /polls/5/
    path("<int:question_id>/", views.detail, name="detail"),
    # ex: /polls/5/results/
    path("<int:question_id>/results/", views.results, name="results"),
    # ex: /polls/5/vote/
    path("<int:question_id>/vote/", views.vote, name="vote"),
]

```

Echa un vistazo a tu navegador, en “/polls/34/”. 

Ejecutará la función detail() y mostrará cualquier ID que proporciones en la URL. 

Prueba también con “/polls/34/results/” y “/polls/34/vote/” – estos mostrarán los resultados de los marcadores de posición y las páginas de votación.

Cuando alguien solicita una página de tu sitio web – digamos, “/polls/34/”, Django cargará el módulo de Python mysite.urls porque está apuntado por la configuración ROOT_URLCONF. 

Encuentra la variable llamada urlpatterns y recorre los patrones en orden. 

Después de encontrar la coincidencia en 'polls/', elimina el texto coincidente ("polls/") y envía el texto restante – "34/" – a la URLconf 'polls.urls' para su posterior procesamiento. 

Allí coincide con '<int:question_id>/', lo que da como resultado una llamada a la vista detail() de la siguiente manera:

```
detail(request=<HttpRequest object>, question_id=34)

```

La parte question_id=34 proviene de <int:question_id>. 

El uso de corchetes angulares “captura” parte de la URL y la envía como argumento de palabra clave a la función de vista. 

La parte question_id de la cadena define el nombre que se usará para identificar el patrón coincidente, y la parte int es un conversor que determina qué patrones deben coincidir con esta parte de la ruta de la URL. 

Los dos puntos (:) separan el conversor y el nombre del patrón.


### Escribir vistas que tengan una funcionalidad

Escribe vistas que realmente hagan algo

#### Cada vista es responsable de hacer una de dos cosas: devolver un objeto HttpResponse que contenga el contenido de la página solicitada o generar una excepción como Http404. 

El resto depende de ti.

#### Tu vista puede leer registros de una base de datos o no. 

#### Puede usar un sistema de plantillas como el de Django (o un sistema de plantillas Python de terceros) o no. 

Puede generar un archivo PDF, generar XML, crear un archivo ZIP sobre la marcha, lo que quieras, usando las bibliotecas Python que quieras.

Todo lo que Django quiere es esa HttpResponse. 

O una excepción.


Porque es conveniente, usemos la propia API de base de datos de Django, que cubrimos en el Tutorial 2. 

Aquí hay un intento de una nueva vista index(), que muestra las últimas 5 preguntas de la encuesta en el sistema, separadas por comas, de acuerdo con la fecha de publicación.

polls/views.py

```
from django.http import HttpResponse

from .models import Question


def index(request):
    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    output = ", ".join([q.question_text for q in latest_question_list])
    return HttpResponse(output)


# Leave the rest of the views (detail, results, vote) unchanged

```

#### Sin embargo, hay un problema aquí: el diseño de la página está codificado en la vista. 

#### Si quieres cambiar la apariencia de la página, tendrás que editar este código Python. 

Así que usemos el sistema de plantillas de Django para separar el diseño de Python creando una plantilla que la vista pueda usar.

Primero, crea un directorio llamado plantillas en tu directorio de encuestas. 

Django buscará plantillas allí.

La configuración TEMPLATES de tu proyecto describe cómo Django cargará y renderizará las plantillas. 

El archivo de configuración predeterminado configura un backend DjangoTemplates cuya opción APP_DIRS está establecida en True. 

Por convención, DjangoTemplates busca un subdirectorio “templates” en cada una de las INSTALLED_APPS.

Dentro del directorio de plantillas que acabas de crear, crea otro directorio llamado encuestas y dentro de él crea un archivo llamado index.html. 

#### En otras palabras, tu plantilla debería estar en encuestas/templates/polls/index.html. 

Debido a la forma en que funciona el cargador de plantillas app_directories como se describió anteriormente, puedes hacer referencia a esta plantilla dentro de Django como polls/index.html


### Espacios de nombres de plantillas

Ahora podríamos salirnos con la nuestra colocando nuestras plantillas directamente en polls/templates (en lugar de crear otro subdirectorio polls), pero en realidad sería una mala idea. 

Django elegirá la primera plantilla que encuentre cuyo nombre coincida, y si tuviera una plantilla con el mismo nombre en una aplicación diferente, Django no podría distinguir entre ellas. 

Necesitamos poder indicarle a Django la correcta, y la mejor manera de garantizar esto es mediante espacios de nombres. 

Es decir, colocando esas plantillas dentro de otro directorio con el nombre de la aplicación misma.


Coloque el siguiente código en esa plantilla:

polls/templates/polls/index.html

```
{% if latest_question_list %}
    <ul>
    {% for question in latest_question_list %}
        <li><a href="/polls/{{ question.id }}/">{{ question.question_text }}</a></li>
    {% endfor %}
    </ul>
{% else %}
    <p>No polls are available.</p>
{% endif %}

```


Nota

Para que el tutorial sea más breve, todos los ejemplos de plantillas utilizan HTML incompleto. En sus propios proyectos, debe utilizar documentos HTML completos.


Ahora, actualicemos nuestra vista de índice en polls/views.py para utilizar la plantilla:

polls/views.py

```
from django.http import HttpResponse
from django.template import loader

from .models import Question


def index(request):
    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    template = loader.get_template("polls/index.html")
    context = {
        "latest_question_list": latest_question_list,
    }
    return HttpResponse(template.render(context, request))

```

Ese código carga la plantilla llamada polls/index.html y le pasa un contexto. 

El contexto es un diccionario que asigna los nombres de las variables de la plantilla a objetos de Python.


Carga la página apuntando tu navegador a “/polls/” y deberías ver una lista con viñetas que contiene la pregunta “¿Qué pasa?” del Tutorial 2. 

El enlace apunta a la página de detalles de la pregunta.


### Un atajo: render()

Es muy común cargar una plantilla, completar un contexto y devolver un objeto HttpResponse con el resultado de la plantilla renderizada. 

Django ofrece un shortcut. 

Aquí está la vista index() completa, reescrita:

polls/views.py

```
from django.shortcuts import render

from .models import Question


def index(request):
    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    context = {"latest_question_list": latest_question_list}
    return render(request, "polls/index.html", context)

```

#### Tenga en cuenta que una vez que hayamos hecho esto en todas estas vistas, ya no necesitaremos importar el cargador y HttpResponse (querrá conservar HttpResponse si aún tiene los métodos auxiliares para detalles, resultados y votación).

La función render() toma el objeto de solicitud como su primer argumento, un nombre de plantilla como su segundo argumento y un diccionario como su tercer argumento opcional. 

Devuelve un objeto HttpResponse de la plantilla dada representada con el contexto dado.


### Generar un error 404

Ahora, abordemos la vista de detalles de la pregunta: la página que muestra el texto de la pregunta de una encuesta determinada. 

Esta es la vista:

polls/views.py

```
from django.http import Http404
from django.shortcuts import render

from .models import Question


# ...
def detail(request, question_id):
    try:
        question = Question.objects.get(pk=question_id)
    except Question.DoesNotExist:
        raise Http404("Question does not exist")
    return render(request, "polls/detail.html", {"question": question})

```

#### El nuevo concepto aquí: la vista genera la excepción Http404 si no existe una pregunta con la ID solicitada.

Hablaremos un poco más adelante sobre lo que podría incluir en esa plantilla polls/detail.html, pero si desea que el ejemplo anterior funcione rápidamente, un archivo que contenga solo:

polls/templates/polls/detail.html

```
{{ question }}

```

te ayudará a empezar por ahora.


### Un atajo: get_object_or_404()

Es muy común usar get() y generar Http404 si el objeto no existe. 

Django ofrece un atajo. 

Aquí está la vista detail(), reescrita:

polls/views.py

```
from django.shortcuts import get_object_or_404, render

from .models import Question


# ...
def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, "polls/detail.html", {"question": question})

```

La función get_object_or_404() toma un modelo de Django como su primer argumento y una cantidad arbitraria de argumentos de palabras clave, que pasa a la función get() del administrador del modelo. 

Lanza Http404 si el objeto no existe.


Filosofía

#### ¿Por qué usamos una función auxiliar get_object_or_404() en lugar de capturar automáticamente las excepciones ObjectDoesNotExist en un nivel superior, o hacer que la API del modelo lance Http404 en lugar de ObjectDoesNotExist?


#### Porque eso acoplaría la capa del modelo a la capa de vista. 

Uno de los principales objetivos de diseño de Django es mantener un acoplamiento flexible. 

Se introduce cierto acoplamiento controlado en el módulo django.shortcuts


También existe una función get_list_or_404() que funciona igual que get_object_or_404(), excepto que utiliza filter() en lugar de get(). 

Si la lista está vacía, genera Http404.


### Usar el sistema de plantillas

Volvamos a la vista detail() de nuestra aplicación de encuesta. Dada la variable de contexto question, así es como podría verse la plantilla polls/detail.html:

polls/templates/polls/detail.html

```
<h1>{{ question.question_text }}</h1>
<ul>
{% for choice in question.choice_set.all %}
    <li>{{ choice.choice_text }}</li>
{% endfor %}
</ul>

```

El sistema de plantillas utiliza la sintaxis de búsqueda por puntos para acceder a los atributos de las variables. 

En el ejemplo de {{ question.question_text }}, primero Django realiza una búsqueda en el diccionario del objeto question. 

Si no lo logra, intenta una búsqueda de atributos, que funciona en este caso. 

Si la búsqueda de atributos hubiera fallado, habría intentado una búsqueda en el índice de la lista.

La llamada a métodos ocurre en el bucle {% for %}: question.choice_set.all se interpreta como el código Python question.choice_set.all(), que devuelve un iterable de objetos Choice y es adecuado para su uso en la etiqueta {% for %}.

Consulta la guía de plantillas para obtener más información sobre las plantillas.


### Eliminación de URL codificadas de forma rígida en las plantillas

Recuerde que, cuando escribimos el enlace a una pregunta en la plantilla polls/index.html, el enlace estaba parcialmente codificado de forma rígida de esta manera:

```
<li><a href="/polls/{{ question.id }}/">{{ question.question_text }}</a></li>

```

El problema con este enfoque codificado de forma rígida y acoplado es que resulta complicado cambiar las URL en proyectos con muchas plantillas. 

Sin embargo, dado que definió el argumento name en las funciones path() en el módulo polls.urls, puede eliminar la dependencia de rutas de URL específicas definidas en sus configuraciones de URL mediante la etiqueta de plantilla {% url %}:

```
<li><a href="{% url 'detail' question.id %}">{{ question.question_text }}</a></li>

```

Esto funciona buscando la definición de URL tal como se especifica en el módulo polls.urls. 

A continuación, puede ver exactamente dónde se define el nombre de la URL de 'detalle':

```
...
# el valor 'nombre' tal como lo llama la etiqueta de plantilla {% url %}
path("<int:question_id>/", views.detail, name="detail"),
...

```

Si desea cambiar la URL de la vista de detalles de las encuestas a otra cosa, tal vez algo como polls/specifics/12/ en lugar de hacerlo en la plantilla (o plantillas), lo cambiaría en polls/urls.py:

```
...
# agregó la palabra 'specifics'
path("specifics/<int:question_id>/", views.detail, name="detail"),
...

```


### Espacios de nombres en los nombres de las URL

El proyecto del tutorial tiene solo una aplicación, polls. 

En proyectos Django reales, puede haber cinco, diez, veinte aplicaciones o más. 

¿Cómo diferencia Django los nombres de URL entre ellas? 

Por ejemplo, la aplicación polls tiene una vista detallada, y lo mismo puede suceder con una aplicación del mismo proyecto que sea para un blog. 

¿Cómo se hace para que Django sepa qué vista de aplicación crear para una URL cuando se usa la etiqueta de plantilla {% url %}?

La respuesta es agregar espacios de nombres a su URLconf. 

En el archivo polls/urls.py, continúe y agregue un app_name para establecer el espacio de nombres de la aplicación:

polls/urls.py

```
from django.urls import path

from . import views

app_name = "polls"
urlpatterns = [
    path("", views.index, name="index"),
    path("<int:question_id>/", views.detail, name="detail"),
    path("<int:question_id>/results/", views.results, name="results"),
    path("<int:question_id>/vote/", views.vote, name="vote"),
]

```

Ahora cambie su plantilla polls/index.html de:

polls/templates/polls/index.html

```
<li><a href="{% url 'detail' question.id %}">{{ question.question_text }}</a></li>

```

Para señalar la vista de detalles con espacio de nombres:

polls/templates/polls/index.html

```
<li><a href="{% url 'polls:detail' question.id %}">{{ question.question_text }}</a></li>

```


## Formularios y vistas 

Nos centraremos en el procesamiento de formularios y en la reducción de nuestro código.


### Formulario minimo 

Actualicemos nuestra plantilla de detalles de encuesta (“polls/detail.html”) del último tutorial, de modo que la plantilla contenga un elemento HTML <form>:

polls/templates/polls/detail.html

```
<form action="{% url 'polls:vote' question.id %}" method="post">
{% csrf_token %}
<fieldset>
    <legend><h1>{{ question.question_text }}</h1></legend>
    {% if error_message %}<p><strong>{{ error_message }}</strong></p>{% endif %}
    {% for choice in question.choice_set.all %}
        <input type="radio" name="choice" id="choice{{ forloop.counter }}" value="{{ choice.id }}">
        <label for="choice{{ forloop.counter }}">{{ choice.choice_text }}</label><br>
    {% endfor %}
</fieldset>
<input type="submit" value="Vote">
</form>

```






# Arquitectura Django 

1. projects vs apps: un proyecto puede ser una colección de apps, una app tiene un fin que es resolver o servir algo como un blog, página con ciertas funcionalidades. 

2. Crear apps dentro del proyecto: pueden haber varias apps

3. Crear views para la app en particular: polls/views.py

4. Crear url para mapear view para la app: polls/urls.py, necesitamos mapearla a una URL - y para esto necesitamos definir una configuración, o “URLconf”.

5. Crear url global: mysite/urls.py: configurar la URLconf global en el proyecto mysite para incluir la URLconf definida en polls.urls; path() e include().

6. DB/Model: crear tablas de datos para las apps, crear modelos y activar modelo: Tres pasos: cambiar modelo (models.py); migracion:  python manage.py makemigrations; aplicar cambios: python manage.py migrate 

7. Interactuar con la API

8. django admin 

9. views

10. template 

11. testing 

12. style 

13. custom admin

14. debug 






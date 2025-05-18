# 1. Linux

## UNIX 

Hace 30 años, tamaño de esas computadoras planteaba problemas sustanciales, había algo que lo empeoraba aún más: cada computadora tenía un sistema operativo diferente.

El software siempre se personalizaba para un propósito específico, y el software para un sistema determinado no funcionaba en otro.

Poder trabajar con un sistema no significaba automáticamente poder trabajar con otro.

Era difícil, tanto para los usuarios como para los administradores de sistemas.


Las computadoras eran extremadamente caras en aquel entonces, y había que hacer sacrificios incluso después de la compra inicial solo para que los usuarios entendieran cómo funcionaban. 

El costo total por unidad de potencia computacional era enorme.


En 1969, un equipo de desarrolladores de los Laboratorios Bell comenzó a trabajar en una solución al problema del software para abordar estos problemas de compatibilidad. 

Desarrollaron un nuevo sistema operativo, que era:

1. Sencillo y elegante.

2. Escrito en lenguaje de programación C en lugar de código ensamblador.

3. Los desarrolladores de Bell Labs llamaron a su proyecto "UNIX".


Las características de reciclaje de código eran muy importantes. 

#### Hasta entonces, todos los sistemas informáticos disponibles comercialmente se escribían en un código desarrollado específicamente para un sistema. 

#### UNIX, en cambio, solo necesitaba una pequeña parte de ese código especial, que ahora se conoce comúnmente como núcleo.

#### Este núcleo es el único fragmento de código que debe adaptarse a cada sistema específico y constituye la base del sistema UNIX.

#### El sistema operativo y todas las demás funciones se construyeron en torno a este núcleo y se escribieron en un lenguaje de programación superior, C.

Este lenguaje se desarrolló específicamente para crear el sistema UNIX. 

Con esta nueva técnica, fue mucho más fácil desarrollar un sistema operativo que pudiera ejecutarse en diversos tipos de hardware.



#### Los proveedores de software se adaptaron rápidamente, ya que podían vender diez veces más software casi sin esfuerzo

#### Surgieron situaciones nuevas y extrañas: imaginemos, por ejemplo, ordenadores de diferentes fabricantes comunicándose en la misma red, o usuarios trabajando en sistemas diferentes sin necesidad de formación adicional para usar otro ordenador. 

NIX contribuyó enormemente a la compatibilidad de los usuarios con diferentes sistemas.


Durante las dos décadas siguientes, el desarrollo de UNIX continuó. 

Se hicieron posibles más cosas y más fabricantes de hardware y software añadieron compatibilidad con UNIX a sus productos.


Al principio, UNIX solo se encontraba en entornos muy grandes con mainframes y miniordenadores (cabe destacar que un PC es un microordenador). 

Para poder acceder a un sistema UNIX era necesario trabajar en una universidad, para el gobierno o para grandes corporaciones financieras.


Pero se estaban desarrollando ordenadores más pequeños y, a finales de los 80, mucha gente tenía ordenadores domésticos.

Para entonces, existían varias versiones de UNIX disponibles para la arquitectura de PC, pero ninguna era realmente gratuita y, lo que era más importante, todas eran extremadamente lentas, por lo que la mayoría de la gente utilizaba MS-DOS o Windows 3.1 en sus ordenadores domésticos.


## Linus and Linux

A principios de los 90, los ordenadores domésticos finalmente eran lo suficientemente potentes como para ejecutar un UNIX completo. 

Linus Torvalds, un joven estudiante de informática en la Universidad de Helsinki, pensó que sería buena idea tener una versión académica de UNIX disponible gratuitamente y enseguida empezó a programar.


Empezó a hacerse preguntas, buscando respuestas y soluciones que le ayudaran a instalar UNIX en su ordenador.

```
Debido a un proyecto en el que estoy trabajando (en Minix), me interesa la definición estándar de POSIX. 

¿Podría alguien indicarme un formato (preferiblemente) legible por máquina de las últimas reglas de POSIX? 

Sería bueno contar con sitios FTP.

```

Desde el principio, el objetivo de Linus fue tener un sistema libre totalmente compatible con el UNIX original. 

Por eso solicitó los estándares POSIX, que seguían siendo el estándar para UNIX.


En aquel entonces, el plug-and-play aún no se había inventado, pero había tanta gente interesada en tener un sistema UNIX propio que esto solo suponía un pequeño obstáculo. 

Nuevos controladores estaban disponibles para todo tipo de hardware nuevo, a un ritmo cada vez mayor. 

Casi tan pronto como un nuevo hardware estaba disponible, alguien lo compraba y lo sometía a la prueba de Linux, como se le denominaba gradualmente al sistema, liberando más código libre para una gama cada vez mayor de hardware. 

Estos programadores no se limitaban a sus PC; todo el hardware que encontraban era útil para Linux.


#### Linux es un clon completo de UNIX, apto para su uso tanto en estaciones de trabajo como en servidores de gama media y alta. 

Hoy en día, muchas de las empresas importantes del mercado de hardware y software cuentan con su propio equipo de desarrolladores de Linux; en su distribuidor local incluso puede comprar sistemas Linux preinstalados con soporte oficial, aunque todavía hay mucho hardware y software que tampoco lo tiene.


##  Aplicaciones actuales de los sistemas Linux

Hoy en día, Linux se ha incorporado al mercado de escritorios. 

Inicialmente, los desarrolladores de Linux se centraron en redes y servicios, y las aplicaciones ofimáticas fueron la última barrera en derribarse

En los últimos años se han lanzado numerosas alternativas para convertir a Linux en una opción aceptable como estación de trabajo, ofreciendo una interfaz de usuario sencilla y aplicaciones ofimáticas compatibles con MS, como procesadores de texto, hojas de cálculo, presentaciones y similares.


En el ámbito de los servidores, Linux es reconocido como una plataforma estable y fiable, que proporciona servicios de bases de datos y comercio a empresas como Amazon, la conocida librería online, el Servicio Postal de EE. UU., el ejército alemán y muchas otras.

Los proveedores de internet y de servicios de internet, en particular, se han aficionado a Linux como cortafuegos, proxy y servidor web, y cualquier administrador de sistemas UNIX que valore una estación de administración cómoda encontrará una máquina Linux al alcance de la mano. 

Se utilizan clústeres de máquinas Linux en la creación de películas como "Titanic", "Shrek" y otras. 

En las oficinas de correos, son los centros neurálgicos que enrutan el correo, y en los grandes motores de búsqueda, los clústeres se utilizan para realizar búsquedas en internet.


El linux moderno no solo funciona en estaciones de trabajo y servidores de gama media y alta, sino también en dispositivos como PDA, móviles, un gran número de aplicaciones integradas e incluso en relojes de pulsera experimentales.

Esto convierte a Linux en el único sistema operativo del mundo que abarca una gama tan amplia de hardware.


## La interfaz de usuario

Linux es un sistema operativo ideal para usuarios avanzados y programadores, ya que ha sido y sigue siendo desarrollado por ellos.

Todo lo que un buen programador pueda desear está disponible: compiladores, bibliotecas, herramientas de desarrollo y depuración. 

Estos paquetes vienen con todas las distribuciones estándar de Linux. 

El compilador de C se incluye gratuitamente, a diferencia de muchas distribuciones de UNIX que exigen el pago de licencias para esta herramienta. 

Toda la documentación y los manuales están disponibles, y a menudo se incluyen ejemplos para ayudarte a empezar rápidamente. 

Se siente como UNIX, y cambiar entre UNIX y Linux es algo natural.


## Linux para usuarios sin experiencia

Empresas como RedHat, SuSE y Mandriva han surgido, ofreciendo distribuciones de Linux empaquetadas, aptas para el consumo masivo. Integraron una gran cantidad de interfaces gráficas de usuario (GUI), desarrolladas por la comunidad, para facilitar la administración de programas y servicios

Mientras continúa el desarrollo en el área de servicios, se están logrando grandes avances para los usuarios de escritorio, generalmente considerados el grupo con menos probabilidades de comprender el funcionamiento de un sistema. 

Los desarrolladores de aplicaciones de escritorio están realizando esfuerzos increíbles para crear los escritorios más atractivos que jamás haya visto, o para que su máquina Linux se vea igual que su antiguo MS Windows o una estación de trabajo de Apple.

Los últimos avances también incluyen compatibilidad con aceleración 3D y dispositivos USB, actualizaciones del sistema y paquetes con un solo clic, etc. 


## Open Source

La idea detrás del software de Código Abierto es bastante simple: cuando los programadores puedan leer, distribuir y modificar el código, este madurará.

Se podrá adaptar, corregir y depurar a una velocidad que eclipsa el rendimiento de los desarrolladores de software de empresas convencionales.

Este software será más flexible y de mejor calidad que el desarrollado mediante canales convencionales, porque más personas lo han probado en condiciones más diversas que las que un desarrollador de software convencional podría jamás.

Linux ha superado la etapa en la que era casi exclusivamente un sistema académico, útil solo para un puñado de personas con formación técnica. 

Ahora Linux ofrece mucho más que un simple sistema operativo: existe una infraestructura completa que respalda la cadena de trabajo que implica crear un sistema operativo, crear y probar programas para él, ponerlo todo a disposición de los usuarios, proporcionar mantenimiento, actualizaciones, soporte técnico y personalizaciones, etc. 


## Ventajas de Linux

Muchas de las ventajas de Linux son consecuencia de sus orígenes, profundamente arraigados en UNIX, excepto la primera, por supuesto:

1. Linux es gratis:

Si no quieres gastar absolutamente nada, ni siquiera tienes que pagar el precio de un CD. 

Linux se puede descargar completamente gratis de Internet. 

Sin cuotas de registro, sin costes por usuario, actualizaciones gratuitas y código fuente disponible de forma gratuita si quieres cambiar el comportamiento de tu sistema.


Sobre todo, Linux es gratis, como en la libertad de expresión:

#### La licencia comúnmente utilizada es la Licencia Pública GNU (GPL).

Esta licencia establece que cualquiera que desee hacerlo tiene derecho a modificar Linux y, eventualmente, a redistribuir una versión modificada, con la única condición de que el código siga disponible después de la redistribución. 

##### En la práctica, eres libre de obtener una imagen del kernel, por ejemplo, para añadir compatibilidad con máquinas de teletransporte o viajes en el tiempo, y vender tu nuevo código, siempre y cuando tus clientes puedan seguir teniendo una copia de ese código.


2. Linux es portable a cualquier plataforma de hardware:

Un proveedor que quiera vender un nuevo tipo de ordenador y no sepa qué sistema operativo ejecutará (por ejemplo, la CPU de su coche o la lavadora), puede usar un kernel de Linux y hacerlo funcionar en su hardware, ya que la documentación relacionada con esta actividad está disponible gratuitamente.


3. Linux fue diseñado para funcionar sin interrupciones:

##### Al igual que UNIX, un sistema Linux espera funcionar sin reiniciarse constantemente.

Por eso, muchas tareas se ejecutan por la noche o se programan automáticamente para otros momentos de calma, lo que resulta en una mayor disponibilidad durante los periodos de mayor actividad y un uso más equilibrado del hardware.

Esta propiedad permite que Linux sea aplicable también en entornos donde las personas no tienen el tiempo ni la posibilidad de controlar sus sistemas día y noche.


4. Linux es seguro y versátil:

El modelo de seguridad utilizado en Linux se basa en el concepto de seguridad de UNIX, conocido por su robustez y calidad comprobada. 

Linux no solo es apto para protegerse de ataques enemigos desde Internet: se adapta igualmente a otras situaciones, utilizando los mismos altos estándares de seguridad. 

Tu máquina de desarrollo o estación de control será tan segura como tu firewall.


5. Linux es escalable:

Desde un Palmtop con 2 MB de memoria hasta un clúster de almacenamiento de petabytes con cientos de nodos: añade o elimina los paquetes adecuados y Linux se adapta a todo.

Ya no necesitas una supercomputadora, porque puedes usar Linux para hacer grandes cosas usando los componentes básicos que incluye el sistema.

Si quieres hacer cosas pequeñas, como crear un sistema operativo para un procesador integrado o simplemente reciclar tu antiguo 486, Linux también lo hará.


5. El sistema operativo Linux y la mayoría de las aplicaciones Linux tienen tiempos de depuración muy cortos:

Dado que Linux ha sido desarrollado y probado por miles de personas, tanto los errores como las personas que los solucionan suelen detectarse con bastante rapidez. 

A veces, solo transcurren un par de horas entre el descubrimiento y la corrección de un error.


## Desventajas de Linux

1. Muchas distribuciones: 

A primera vista, la cantidad de distribuciones de Linux puede ser alarmante o ridícula, según el punto de vista. 

Pero también significa que cada uno encontrará lo que necesita. 


Todas las versiones contienen más o menos el mismo conjunto de paquetes básicos.

Además de lo básico, se añade software especial de terceros, lo que hace que, por ejemplo, TurboLinux sea más adecuado para las pequeñas y medianas empresas, RedHat para servidores y SuSE para estaciones de trabajo.

Es probable que las diferencias sean muy superficiales. 


2. Cuando no es intuitivo y más confuso que Windows y MacOS. 


3. Confiabilidad del código abierto: 

Los usuarios de Linux pueden elegir si lo usan o no, lo que les otorga una enorme ventaja frente a los usuarios de software propietario, quienes carecen de esa libertad. 

Tras largos periodos de prueba, la mayoría de los usuarios de Linux llegan a la conclusión de que Linux no solo es tan bueno, sino que en muchos casos es mejor y más rápido que las soluciones tradicionales.

#### Si Linux no fuera confiable, habría desaparecido hace tiempo, sin conocer la popularidad que tiene ahora, con millones de usuarios. 


## Linux y GNU 

Aunque existe una gran cantidad de implementaciones de Linux, encontrará muchas similitudes entre las diferentes distribuciones, ya que cada máquina Linux es una caja con bloques de construcción que puede ensamblar según sus propias necesidades y perspectivas.

#### El sistema Linux se basa en herramientas GNU (GNU no es UNIX), que proporcionan un conjunto de métodos estándar para gestionar y usar el sistema. 

Todas las herramientas GNU son de código abierto, por lo que se pueden instalar en cualquier sistema. 

La mayoría de las distribuciones ofrecen paquetes precompilados de las herramientas más comunes, como los paquetes RPM en RedHat y los paquetes Debian (también llamados deb o dpkg) en Debian, por lo que no es necesario ser programador para instalar un paquete en su sistema.

Sin embargo, si lo es y le gusta desarrollar sus propias habilidades, disfrutará mucho más de Linux, ya que la mayoría de las distribuciones incluyen un conjunto completo de herramientas de desarrollo que permiten instalar software nuevo únicamente desde el código fuente. 

Esta configuración también le permite instalar software incluso si no existe en un formato precompilado adecuado para su sistema.


Una lista de software GNU común:

1. Bash: The GNU shell

2. GCC: The GNU C Compiler

3. GDB: The GNU Debugger

4. Coreutils: a set of basic UNIX-style utilities, such as ls, cat and chmod

5. Findutils: to search and find files

6. Fontutils: to convert fonts from one format to another or make new fonts

7. The Gimp: GNU Image Manipulation Program

8. Gnome: the GNU desktop environment

9. Emacs: a very powerful editor

10. Ghostscript and Ghostview: interpreter and graphical frontend for PostScript files.

11. GNU Photo: software for interaction with digital cameras

12. Octave: a programming language, primarily intended to perform numerical computations and image processing.

13. GNU SQL: relational database system

14. Radius: a remote authentication and accounting server

... 

Existen muchas aplicaciones comerciales para Linux, y para obtener más información sobre estos paquetes, consulte su documentación específica.


Para instalar paquetes nuevos o faltantes, necesitará algún tipo de gestor de software. 

Las implementaciones más comunes incluyen RPM y dpkg. 

RPM es el gestor de paquetes de RedHat, utilizado en diversos sistemas Linux, aunque su nombre no lo sugiera.

dpkg es el sistema de gestión de paquetes de Debian, que utiliza una interfaz llamada apt-get y que también puede gestionar paquetes RPM

Otros proveedores de software pueden tener sus propios procedimientos de instalación, a veces similares a InstallShield, como los que se utilizan en MS Windows y otras plataformas.


### GNU/Linux

El núcleo de Linux (la base de su sistema) no forma parte del proyecto GNU, pero utiliza la misma licencia que el software GNU.

Dado que cualquier sistema utilizable debe contener tanto el núcleo como al menos un conjunto mínimo de utilidades, algunos argumentan que dicho sistema debería llamarse sistema GNU/Linux.


## Instalar distribución

#### Antes de la instalación, el factor más importante es el hardware. 

Dado que todas las distribuciones de Linux contienen los paquetes básicos y pueden compilarse para satisfacer casi cualquier requisito (ya que todas usan el kernel de Linux), solo necesita considerar si la distribución funcionará en su hardware.


La mayoría de las distribuciones de Linux ofrecen un conjunto de programas para PC genéricos con paquetes especiales que contienen kernels optimizados para las CPU x86 basadas en Intel.

Estas distribuciones se someten a pruebas exhaustivas y reciben mantenimiento regular, centrándose en la implementación de servidores confiables y en la facilidad de instalación y actualización.

Algunos ejemplos son Debian, Ubuntu, Fedora, SuSE y Mandriva, que son, con diferencia, los sistemas Linux más populares y, por lo general, se consideran fáciles de usar para usuarios principiantes, sin impedir que los profesionales aprovechen al máximo sus equipos Linux.

Linux también funciona correctamente en portátiles y servidores de gama media. 

Los controladores para nuevo hardware se incluyen solo tras exhaustivas pruebas, lo que aumenta la estabilidad del sistema.

Mientras que el escritorio estándar puede ser Gnome en un sistema, otro puede ofrecer KDE por defecto. Generalmente, tanto Gnome como KDE están disponibles para las principales distribuciones de Linux. 

Hay otros gestores de ventanas y escritorios disponibles para usuarios más avanzados.
 
 
El proceso de instalación estándar permite a los usuarios elegir entre diferentes configuraciones básicas, como una estación de trabajo, donde se instalan todos los paquetes necesarios para el uso diario y el desarrollo, o una instalación en servidor, donde se pueden seleccionar diferentes servicios de red. Los usuarios expertos pueden instalar cualquier combinación de paquetes que deseen durante el proceso de instalación inicial.

Los usuarios expertos pueden instalar cualquier combinación de paquetes que deseen durante el proceso de instalación inicial.


## Rs Linux 

Linux es una implementación de UNIX.

El sistema operativo Linux está escrito en el lenguaje de programación C.

"De gustibus et coloribus non disputandum est": hay un Linux para todos.

Linux utiliza herramientas GNU, un conjunto de herramientas estándar de libre acceso para gestionar el sistema operativo.



### Diccionario cap 1

#### UNIX

#### C

#### kernel 

#### POSIX

#### Firewall

#### Proxy

#### GUI

#### Open Source

#### GLP license

#### GNU

#### Source Code 

#### GNU license

#### Package Manager

#### Interface for package manager: CLI or GUI

#### InstallShield

#### GNU/Linux: Kernel and software

#### Drivers 

#### Computer in a network, hostname, IP address

#### computer a gateway/router/firewall

#### Root: machine admin 



# 2. Inicio rapido 





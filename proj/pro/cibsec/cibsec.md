# Cib Sec



# Intro / Pre Sec


# 1. Offensive Security Intro

Hack your first website (legally in a safe environment)

## 1. Think like

#### Offensive Security is about thinking like an attacker to find weaknesses
##### term describes simulating a hacker's actions to find weaknesses
##### Offensive Security resp


## 2. Lab

escritorio virtual para simular un sistema real
abrirá automáticamente un navegador que mostrará FakeBank, una aplicación bancaria ficticia
objetivo que deberás atacar.

¿Cuál es el número de cuenta bancaria en la aplicación FakeBank?

Bank Account Number: 8881


## 3. Find hidden pages

##### Encuentra una vulnerabilidad en la aplicación FakeBank.
#### Un error común es dejar páginas ocultas accesibles

Abre la terminal en la máquina

##### La usarás para ejecutar tu primera herramienta de hacking, dirbuster


### Cómo encontrar páginas ocultas

#### Para encontrar páginas ocultas usando Dirbuster
##### usaremos dirb y la URL que deseamos buscar:

`dirb http://fakebank.thm`

Las líneas de la salida que comienzan con +
son páginas que se han encontrado.
Dirb encontrará dos URL.


```
Scanning URL: http://fakebank.thm/ ----

+ http://fakebank.thm/bank-transfer (CODE:200|SIZE:4663)
+ http://fakebank.thm/images (CODE:301|SIZE:179)

```


Responda las siguientes preguntas


Dirb encontró una URL, http://fakebank.thm/images.
¿Cuál es la otra URL oculta?

http://fakebank.thm/bank-transfer



## 4. Attack adm pag

Ahora deberías haber encontrado un panel de administración oculto que te permite añadir dinero a tu cuenta.

Para abrir esta URL en el navegador del escritorio simulado:

Utilice su número de cuenta 8881 y deposite $2000 (o más).
Después de realizar el depósito
vuelva a la página de su cuenta y confirme que el saldo ahora es positivo.


### Solución

ir a:

```
http://fakebank.thm/bank-transfer

```


Responda las siguientes preguntas

Cuando tu saldo sea positivo, aparecerá una ventana emergente con texto verde.

Introduce las palabras verdes como respuesta (en mayúsculas).


BANK-HACKED




# 2. Defensive Security Intro

protegerás a FakeBank de un ataque continuo.


## 1. Think like defender

proceso de defender y proteger dispositivos y sistemas

Antes de poder defender un sistema, es necesario comprender las responsabilidades de los defensores
#### se centra en detectar e investigar los ataques y responder antes de que se produzcan daños

##### A diferencia de la seguridad ofensiva, no se atacan los sistemas, sino que se los monitoriza y protege.



## 2. Detect Suspicious Activity

Joe es un analista SOC en prácticas que está trabajando solo por primera vez
##### Hace un momento, su panel de control se iluminó: algo no parece estar bien
#### herramientas: distinguir la actividad normal del comportamiento sospechoso
Joe necesita tu ayuda para investigar antes de que se convierta en un incidente grave.

Necesitarás...
1. Abra el panel de control de monitorización.
2. Revisa las alertas recientes
3. Identifique la dirección IP de origen sospechosa.

Las herramientas de monitorización, como la que utilizará, proporcionan información sobre la actividad que se desarrolla en los dispositivos informáticos
Los responsables de seguridad utilizan herramientas como este panel de control para asegurarse de que toda la actividad que se produce en estos sistemas sea legítima e investigar cualquier actividad sospechosa


```
Web Discovery Attack
Automated directory enumeration detected on admin endpoints

Source IP : 32.122.195.63

```

Suspicious Port Scanning: Sequential port scan
Escaneo de puertos sospechoso
Se ha detectado un escaneo secuencial de puertos desde una dirección IP externa.
ASIGNADO ALTO


Unusual Database Query Pattern: Enumeration attempt on customer database
Patrón de consulta de base de datos inusual
Intento de enumeración en la base de datos de clientes
MEDIO DE INVESTIGACIÓN


Ataque de inyección SQL: Automated SQL injection detected on payment form
Se ha detectado una inyección SQL automatizada en el formulario de pago.
CRÍTICO NO ASIGNADO


### Solutions 

#### Recomended actions
Block source IP address: Bloquear la dirección IP de origen
Review admin panel access logs: Revisar los registros de acceso al panel de administración
Implement rate limiting: Implementar la limitación de velocidad
Update WAF rules: Actualizar las reglas de WAF

```
Web Discovery Attack
Automated directory enumeration detected on admin endpoints
```
Ataque de descubrimiento web
Se ha detectado una enumeración automatizada de directorios en los puntos finales de administración

```
https://fakebank.com/admin
```


Threat Intelligence
IP ReputationMalicious
Geolocation
Russia, Moscow
ASNAS12345
Previous Attacks47 incidents


Responda las siguientes preguntas

¿Qué dirección IP de origen está generando el tráfico sospechoso?




## 3. Identify the Attack

Joe ha detectado la actividad sospechosa
pero saber que algo anda mal es solo la mitad del trabajo
#### Ahora necesita averiguar qué pretende hacer el atacante
El panel de control ha estado registrando cada movimiento, y ahí están las respuestas.

analizar los datos
descubrir qué tipo de ataque se está produciendo
#### antes de que el atacante encuentre lo que busca.

Necesitarás...
1. Investigar el ataque que se ha producido.
2. Consulte la lista "Intentos de descubrimiento de URL".
3. Consulta la última entrada de "Intentos de descubrimiento de URL" para responder a la pregunta

Investigate the attack that has occured
View the "URL Discovery Attempts" list.
Look at the latest "URL Discovery Attempts" entry to answer the question.

##### El panel de control muestra el historial de lo que el atacante intenta encontrar en nuestro sitio web
##### Verá que el panel ha detectado numerosos intentos del atacante para acceder a páginas ocultas con gran rapidez

#### Una vez que sepamos qué intenta lograr el atacante
#### podremos comenzar a tomar medidas para detenerlo
finalmente, solucionar el problema que permitió este ataque en primer lugar


Block source IP address
Review admin panel access logs
Implement rate limiting
Update WAF rules



#### Solution

```
block ip
rate limit Q seconds, requests
```


Responda las siguientes preguntas

Copia la última URL que el atacante ha intentado encontrar y pégala a continuación.




## 4. Identify the Attack

Joe sabe quién es el atacante y qué intenta hacer.
Ahora es el momento de actuar.
#### En seguridad defensiva, la prioridad inmediata es la contención (detener el ataque mientras se produce)
para proteger a la organización. 

Para esta etapa de la práctica, Joe ya ha completado algunas actualizaciones de seguridad,
pero necesita tu ayuda para completar la última.


1. Revisa las medidas de seguridad. Joe ya ha realizado dos de ellas por ti.
2. Bloquee la dirección IP del atacante a continuación
agregándola a "Agregar Cuadro de texto "Regla" en la parte práctica.

32.122.195.63

3. Asegúrese de seleccionar "BLOQUEAR" en el menú desplegable y pulse "Aplicar".



Block source IP address
Review admin panel access logs
Implement rate limiting
Update WAF rules



1. Review the security actions.
Joe has done two of these for you.
2. Block the attacker's IP address below by
adding it into the "Add Rule" textbox on the practical. 
32.122.195.63

3. Make sure to select "BLOCK" from the dropdown and press "Apply".


Ahora que sabemos quién es el atacante y qué intenta hacer, podemos detenerlo
La prioridad inmediata en seguridad defensiva es la contención para proteger a la organización.
Podemos analizar los detalles más específicos y corregir cualquier vulnerabilidad posteriormente.

Esta herramienta de monitorización le permite implementar diversas medidas para detener al atacante:

### Blocking the IP address
Impide por completo que el dispositivo del atacante
acceda a nuestros sistemas. Un buen paso inmediato.

### Applying Rate Limiting
Limita el número de conexiones posibles en un tiempo determinado para todos los usuarios.
Fue eficaz en este caso porque el atacante accedía rápidamente a muchas páginas a la vez,
lo que podría haber saturado nuestros sistemas.

### Updating Security Rules
Refuerza los controles de acceso a las páginas sensibles que el atacante pudo eludir.


Responda las siguientes preguntas
Cuando aparezca el mensaje de éxito, copie la bandera y péguela a continuación.



```

Block the ip
```





# 3. Carrers


## 1. Open Door

La ciberseguridad está al alcance de todos.
Desde expolicías, profesionales de la salud y finanzas hasta profesores y agricultores, y muchos más.
La ciberseguridad necesita personas que comprendan cómo funciona el mundo,
con habilidades únicas, no solo conocimientos informáticos.

Tu experiencia no es un obstáculo para entrar;
puede que sea precisamente lo que le falta a la industria.

Solution: persons



## 2. Pays

Bien pagado. Y se llega más rápido de lo que piensas.

La ciberseguridad es uno de los campos mejor pagados de la tecnología,
y no requiere una década de formación para acceder a él.

Los puestos de nivel inicial ofrecen salarios competitivos y los puestos de nivel superior, buenos
#### Las certificaciones y la práctica adecuadas pueden llevar a alguien sin experiencia a un puesto bien remunerado
en mucho menos tiempo del que se tarda en obtener la titulación en derecho, medicina o finanzas

No se requiere titulación universitaria.
No hay que obtener una licencia que lleve años

El acceso a la ciberseguridad es más fácil de lo que muchos creen, y la remuneración es buena




## 3. Big Pic

Proteger aquello que no puede permitirse el lujo de fallar.

Cuando los piratas informáticos atacan y las defensas cibernéticas fallan,
las consecuencias pueden ser críticas.
Los hospitales cancelan citas.
Los bancos se bloquean.
Las redes eléctricas se caen, las fábricas detienen la producción y la información personal robada tiene repercusiones durante años.

Estas cosas suceden y están sucediendo con más frecuencia que nunca. 

#### Quienes detuvieron esos ataques no tuvieron suerte.
##### Sabían qué buscar y se habían preparado.
##### Un equipo de expertos, con los conocimientos adecuados y en el momento preciso,
##### previene incidentes graves.



## 4. Your place


Hay un puesto para ti en Ciberseguridad

##### La ciberseguridad no es solo una cosa.
##### Abarca más de 50 roles reconocidos, desde los probadores de penetración y

Desde analistas hasta investigadores de inteligencia sobre amenazas,
personal de respuesta a incidentes, ingenieros de seguridad y más.

En el ámbito de la ciberseguridad, algunos profesionales piensan como atacantes,
probando los sistemas en busca de vulnerabilidades antes de que las descubran personas malintencionadas.

Otros trabajan como detectives, reconstruyendo lo sucedido tras un incidente.
Algunos disfrutan del juego del gato y el ratón, anticipándose a las amenazas en tiempo real.
Otros prefieren una visión más amplia, investigando cómo evolucionan las amenazas antes de que surja algún problema.

Las habilidades que hacen que las personas sean excepcionales en estos puestos no son solo técnicas.
##### Los mejores solucionadores de problemas, las personas más tranquilas bajo presión, las más curiosas, a menudo provienen de carreras completamente diferentes.

#### Lo que importa es encontrar tu lugar en este campo que se ajuste a la forma en que funciona tu mente.



## 4. Start

##### Toda nueva tecnología necesita a alguien que la proteja.

La ciberseguridad es uno de los campos profesionales de más rápido crecimiento en el mundo
y ese crecimiento no muestra signos de desaceleración.

Computación en la nube, atención médica conectada,
banca digital y mucho más.
Las nuevas tecnologías crean más puestos de trabajo.

Las personas que desempeñan esos roles
no provienen de un mismo entorno, ni tienen una misma titulación, ni siguen un mismo camino.
#### Comienzan en algún punto, generalmente con una pregunta que no dejaban de hacerse.
##### Tampoco se quedan en un solo lugar o puesto; crecen y desarrollan sus habilidades.



## 5. Carrer Quiz

Descubre qué puesto en ciberseguridad te conviene.

Ahora que ya conoces algunas de las funciones, responsabilidades y ventajas de trabajar en ciberseguridad,
 es hora de completar nuestro cuestionario interactivo sobre carreras profesionales para descubrir qué puesto se adapta mejor a ti.


1. Con las nuevas tecnologías, me gusta...

Lanzarme y aprender sobre la marcha.
¡Sumérgete de lleno, aprender rompiendo barreras es parte de la diversión!


### Quiz: prevención | accion/stop | future ...

Intenta averiguar cómo entró el hacker.

Revisa los intentos de inicio de sesión y las alertas para confirmar la intrusión.

Restablece la contraseña de la cuenta.

Considera qué podría hacer el atacante a continuación.

Configura medidas de seguridad adicionales.


Redoble de tambores, hacker… tú eres el

Responsable de respuesta ante incidentes


## Incident Responder

#### Los responsables de respuesta a incidentes gestionan las brechas de seguridad de forma rápida y eficaz.
#### Crean planes, políticas y procedimientos que las organizaciones deben seguir durante y después de un ataque.
#### Este rol puede ser muy exigente y dinámico, ya que las decisiones y acciones deben tomarse en tiempo real durante un ataque.


### Responsabilidades

#### Cree y mantenga un plan detallado de respuesta ante incidentes con pasos claros y prácticos.
#### Responder a posibles incidentes y proteger la reputación, las finanzas y las operaciones de la organización.
#### Redactar informes después de los incidentes y prepararse para futuros ataques aprendiendo de lo sucedido y realizando mejoras.
    

Las rutas de aprendizaje de TryHackMe te proporcionarán tanto el conocimiento técnico fundamental como la experiencia práctica,
lo cual es crucial para convertirte en un respondedor de incidentes exitoso


1. pre sec
2. soc l1 
3. soc l2 (interm)




## 6. Recap


### 1. 

1. lines starting with +:
indicate urls the tool success found

2. browser address bar:
loads a discovered path so its form can be used

3. etc/hosts entry:
reslves a lab hostname to an ip address locally

4. dirb:
tries wordlist entries as paths on a wb server


### 2. Eff and Deff

Offensive breaks into systems, defensive monitors and protects them
one discipline simulates attackers to find flaws, the other detects, contains, and remediates activity


### 3. red and blue

red emulates adversaries, blue detects and responds to them
red temas test defences by behaving like a threat actor, while blue teams build detection, monitoring and response capability


### 4. Practical skills and certificates for works


### 5. El ransomware está cifrando activamente los servidores del hospital. ¿Qué rol lidera actualmente la contención y la coordinación?
#### Incident responder
Incident respondres take command during a live event, driveng containment,
evidence preservation and communication with stakeholders

### 6. Cualquier vulnerabilidad descubierta durante una prueba autorizada debe ser comunicada al propietario del sistema.





# 2. Computer 





# 3. Computer Types

laptos to the tyny chips in coffe machine




# 4. Operating Systems: Intro

#### Conceptos básicos de los sistemas operativos y las funciones principales

las aplicaciones se inician, los archivos se abren, la música se reproduce y todo el sistema funciona sin problemas
¿qué es lo que realmente hace posible todo esto?

#### la capa invisible que lo une todo: el sistema operativo.

te ha regalado generosamente su antiguo equipo. Lleva un tiempo sin usarse
Antes de decidir si actualizarlo, formatearlo, venderlo o convertirlo en tu próximo proyecto


Escenario

##### necesitas averiguar exactamente qué tienes entre manos.


Objetivos de aprendizaje

Comprender qué es un sistema operativo y el papel que desempeña.
Explique las funciones principales de un sistema operativo.
Identificar los tipos de sistemas operativos más comunes y sus casos de uso típicos.
Practica la interacción con un sistema operativo para recopilar información del sistema.

Las aulas virtuales ahora son más inteligentes: para las preguntas que se realizan con máquinas de laboratorio
se requiere interacción para obtener puntos
La falta de actividad relevante en la pregunta puede afectar la puntuación obtenida.



## 2. Invisible Manager

### SO: software principal que coordina todo lo que sucede en una computadora
#### !!! Se sitúa entre el usuario, las aplicaciones y el hardware físico del sistema
##### Actuando como el administrador invisible que mantiene toda la máquina funcionando como un sistema unificado

```
User
App
OS
Hard
```

analogía:
computadora como un aeropuerto concurrido
donde todos sus componentes funcionan en conjunto.

Su hardware (cpu, ram, almacenamiento, dispositivos conectados):
las pistas de aterrizaje, los aviones, los sistemas de combustible, el radar y demás infraestructura física.

Tus aplicaciones (navegador web, lanzador de juegos):
Las distintas aerolíneas y sus pasajeros, todos intentando despegar, aterrizar y solicitar servicios.

### Su sistema operativo (Windows, linux  macOS):
Todo el sistema de control de tráfico aéreo dirige toda esta actividad.
#### !!! Programa los recursos, gestiona el tráfico, resuelve conflictos y garantiza la seguridad.

##### Necesitamos un sistema operativo porque realiza la importantísima función de coordinación y estructuración que hace posible la informática moderna
##### Sin un sistema operativo, cada aplicación necesitaría control directo sobre la CPU, la memoria, los archivos, los dispositivos y la seguridad
Esto provocaría rápidamente conflictos,
##### el sistema operativo los gestiona actuando como organizador central
##### veremos cómo el sistema operativo gestiona y asigna estos recursos cuando utilizas tu PC.


### System Privilege Layers

Capas de privilegios del sistema
#### !!! En un ordenador moderno, las distintas partes del sistema operan con diferentes niveles de permisos
##### Algunos componentes pueden comunicarse directamente con el hardware, mientras que las aplicaciones habituales se ejecutan en un entorno más seguro y restringido
Esta separación es intencionada y ayuda a prevenir conflictos y problemas de seguridad.

#### Kernel space
Espacio del núcleo: El núcleo privilegiado y restringido del sistema operativo.
##### 1. Aquí se ejecuta el núcleo, la parte del sistema operativo que gestiona directamente el hardware y los recursos del sistema.
##### Tiene acceso ilimitado a la CPU, la memoria, el almacenamiento y todos los componentes de hardware.

#### User space
##### 2. Espacio de usuario: donde se ejecutan todas las aplicaciones estándar.
##### Las aplicaciones en el espacio de usuario tienen prohibido deliberadamente acceder directamente al hardware.
##### Siempre que necesiten abrir o guardar un archivo, reproducir un sonido o conectarse a Wi-Fi, deben realizar una llamada al sistema y solicitar al núcleo que actúe en su nombre.

```
User
App
 |
OS
 |
Hard
```

Siguiendo con nuestra analogía del aeropuerto, profundicemos en el concepto de separación de privilegios
El espacio del kernel es la torre de control, un área estrictamente protegida donde solo trabajan los controladores de tráfico aéreo de confianza (el kernel)
Solo ellos pueden controlar directamente las pistas, el radar y demás hardware
Las aplicaciones en el espacio de usuario son como las aerolíneas y los pasajeros en tierra
No pueden entrar en la torre ni tocar el equipo
##### 3. En su lugar, envían solicitudes por radio (llamadas al sistema) a la torre, que las gestiona de forma segura
##### Esta separación mantiene la fiabilidad del sistema operativo: una aplicación defectuosa no puede provocar el fallo de todo el sistema
del mismo modo que ninguna aerolínea puede operar de forma segura sin el control de la torre.


### Funciones del sistema operativo

Ahora que ya sabes qué es un sistema operativo y cómo se gestionan los privilegios del sistema, veamos
#### qué hace realmente entre bastidores.
##### Cada sistema operativo se encarga de algunas funciones básicas que permiten que tu ordenador funcione de forma segura, eficiente y predecible.


#### Responsabilidad del sistema operativo | Qué hace el sistema operativo | Ej

#### 1. Process Management: Gestión de procesos. Creates, schedules, prioritizes, and terminates running programs
##### !!!! Crea, programa, prioriza y finaliza los programas en ejecución
El sistema operativo decide cuánto tiempo de CPU recibe cada proceso, lo que hace que la multitarea sea fluida
Ej: Abrir varias aplicaciones, como el navegador, el reproductor de música y las redes sociales, sin que el ordenador se congele

#### 2. Memory Management: Gestión de la memoria. Allocates RAM to processes
#####  !!! Asigna RAM a los procesos, protege la memoria de la aplicación de otros procesos y recupera memoria cuando se cierran las aplicaciones
Cuando la RAM es baja, el sistema operativo utiliza memoria virtual para mantener el sistema estable
Ej: Al abrir varias aplicaciones a la vez, el sistema operativo asigna memoria RAM a cada una y las mantiene aisladas para que no interfieran entre sí ni se bloqueen.

#### 3 File System Management: Gestión del sistema de archivos. 
##### !!! Organiza los archivos en directorios, gestiona la nomenclatura, las rutas, los permisos y los metadatos (nombre, tamaño, tipo, marcas de tiempo).
Crear una nueva carpeta, guardar una foto o configurar un archivo como "solo lectura".

#### 4. User Management: Gestion de usuarios
Administra múltiples cuentas de usuario, autenticación y permisos para determinar quién puede acceder a qué.
##### Iniciar sesión con tu contraseña y mantener tus archivos inaccesibles para otras cuentas de usuario.

#### 5. Device Management: Gestión de dispositivos
Carga los controladores y proporciona una interfaz universal (capa de abstracción de hardware)
de modo que las aplicaciones puedan decir "imprimir esto" o "reproducir este sonido".
Conectar un nuevo ratón, impresora o disco duro externo y que funcione inmediatamente.



#### Operating System Security

Es importante comprender que cada sistema operativo también actúa como base de seguridad
Antes de que se instale cualquier antivirus o herramienta de seguridad
##### el sistema operativo ya aplica protecciones en segundo plano
algunas de las cuales hemos mencionado anteriormente.

Su sistema operativo maneja:

#### Authentication
Autenticación: Verifica quién eres mediante contraseñas de inicio de sesión y datos biométricos.

#### Permissions
Permisos: Controla exactamente qué puede leer, escribir o ejecutar cada usuario y aplicación.

#### Isolation
##### Aislamiento: Mantiene cada proceso en su propio entorno protegido (separación entre el espacio del kernel y el espacio de usuario).

#### System Protection
Protección del sistema: Protege los archivos y la configuración críticos del sistema contra cambios no autorizados.



#### Practica

qué es un sistema operativo y sus funciones principales

usar ordenador
Iniciar equipo de laboratorio
El equipo se abrirá en vista dividida
momento en el que tendrás acceso al escritorio
Si la vista dividida no se abre, pulsa el botón «Mostrar vista dividida» en la parte superior de la página

Configura tu entorno virtual
Para completar con éxito esta sala,
deberás configurar tu entorno virtual

implica iniciar la máquina de laboratorio y asegurarte de contar con las herramientas y el acceso necesarios para afrontar los retos que te esperan

##### investigar y obtener información básica sobre el equipo
"Acerca de esta computadora". que abre el Monitor del sistema.
Ábrelo ahora, ya que lo necesitarás para algunas de las preguntas de esta tarea



#### Preguntas

¿Qué espacio del sistema operativo tiene acceso sin restricciones al hardware de su computadora?
Kernel space

¿Qué responsabilidad del sistema operativo gestiona las cuentas de usuario, la autenticación y los permisos?
User management

Tras abrir el acceso directo "Acerca de este equipo", se muestra una descripción general de las especificaciones del sistema.
¿Qué versión de Ubuntu Mate tiene instalada su computadora?
1.26.2 mate
24.04.1 LTS

Consulta la sección Hardware de la pestaña Sistema.
¿Cuánta memoria está asignada a su máquina?
1.9gb




### OS Interfaces

#### Interfaces: cómo interactuamos con el SO

La interacción con el SO se puede dividir en dos partes principales
#### la interfaz gráfica de usuario (gui) y la interfaz de línea de comandos (cli)

La interfaz gráfica de usuario (GUI) es con lo que probablemente estés más acostumbrado a interactuar
##### 1. Proporciona una representación gráfica de toda la información a la que quieres acceder en tu ordenador
Piensa en los iconos de las carpetas, las ventanas de tus aplicaciones y los menús de configuración
Podemos imaginar la analogía de usar una aplicación de navegación
Introduce un icono del lugar que quieres visitar y la aplicación generará las indicaciones, eliminando la necesidad de escribir.

##### 2. La interfaz de línea de comandos (CLI) es donde se introducen comandos de texto específicos para recuperar o manipular información
En lugar de hacer clic en iconos, se le indica al ordenador exactamente lo que se desea mediante palabras y una sintaxis que el sistema comprende
Esto proporciona mucha más precisión, control y velocidad, especialmente para tareas avanzadas, pero requiere familiaridad con los comandos
Volviendo a la analogía de los mapas: usar la CLI es como introducir las coordenadas GPS exactas del destino
Es directo y extremadamente preciso, pero solo si se conoce la información correcta que se debe introducir.

CLI:
navegar por los archivos, inspeccionar la información del sistema e interactuar con el sistema operativo más allá de la interfaz gráfica de usuario

En la captura de pantalla a continuación, puede ver que tanto la interfaz gráfica de usuario (GUI) como la interfaz de línea de comandos (CLI) se utilizan para obtener la misma información
En este caso, para mostrar el contenido del directorio personal del usuario de Ubuntu
La GUI requiere unos pocos clics para navegar por las carpetas
mientras que la CLI requiere un comando para listar el contenido del directorio.



#### El panorama de los sistemas operativos

##### !!! sistema operativo, sus responsabilidades y cómo podemos interactuar con él para administrar nuestra computadora

ver el panorama general; no todos los sistemas operativos son iguales
Los distintos dispositivos y tareas requieren diseños diferentes, desde tu teléfono hasta un servidor web en un centro de datos
A continuación, te presentamos las cinco categorías principales con las que te encontrarás en el mundo real:

#### Desktop: Ordenadores personales, trabajo diario, videojuegos, creación de contenido. Interfaz gráfica sofisticada, ejecuta varias aplicaciones simultáneamente, centrada en el usuario.

#### Server: Alojamiento web, bases de datos, servicios en la nube, back-end. Sin interfaz gráfica (headless), máximo tiempo de actividad, multiusuario, acceso remoto

#### Mobile: Smartphones y tabletas. Interfaz de usuario táctil, bajo consumo de energía, siempre conectado, aislamiento de aplicaciones

#### Embedded: Electrodomésticos, automóviles, dispositivos IoT, televisores inteligentes, routers. Ocupa muy poco espacio y funciona con hardware limitado.

#### Virtual/Cloud: Máquinas de laboratorio, contenedores, instancias en la nube. Ligero, escalable, despliegue rápido.

diferentes tipos de sistemas operativos y para qué están diseñados



#### Sistemas operativos del mundo real

veamos las principales familias de sistemas operativos que encontrarás en la práctica
##### Cada familia abarca uno o más de los tipos de sistemas operativos que acabamos de explorar
Para mantener la información organizada, destacaremos las versiones o distribuciones comunes que encontrarás en cada una y seguiremos las mismas categorías que antes
Escritorio, Servidor, Móvil, Integrado y Virtual/Nube.


##### Desktop: de oficina

Windows: El sistema operativo más utilizado en ordenadores personales.
Windows 10 (fin de soporte), Windows 11

macOS: el sistema operativo de escritorio de Apple, conocido por su interfaz gráfica de usuario pulida y su integración con otros dispositivos de Apple.
Sonoma (14), Sequoia (15), Tahoe (26)

Linux: No es un único sistema operativo, sino una familia de sistemas operativos de código abierto llamados distribuciones.
Ubuntu, Debian, Fedora


##### Server

##### Windows: Se utiliza en grandes redes, centros de datos y entornos corporativos.
Servidor 2016, 2019, 2022, 2025

##### Linux: La gran mayoría de los servidores web, reconocido por su fiabilidad y su naturaleza de código abierto.
Ubuntu Server, Debian, CentOS, Red Hat

##### Unix: Grandes empresas, finanzas, telecomunicaciones, gobierno
IBM AIX, Oracle Solaris


    
#### Móvil

Android: El sistema operativo móvil más utilizado, que funciona en teléfonos, tabletas y dispositivos inteligentes.

Android 14 - 16, versiones del fabricante

iOS: el sistema operativo móvil de Apple que se ejecuta en iPhones, iPads y otros dispositivos.
iOS 17, 18, 26



#### Dispositivos integrados y de IoT

##### Linux embebido: sistema operativo especializado integrado en dispositivos con funciones dedicadas.
OpenWrt, Ubuntu Core, Proyecto Yocto

##### Sistema operativo en tiempo real: diseñado para aplicaciones donde las tareas requieren tiempos de respuesta garantizados (controles de aeronaves).
FreeRTOS, VxWorks, QNX



#### Virtual y en la nube

##### Nube/VM: Centros de datos masivos que alojan sitios web, aplicaciones y servicios de streaming.
Ubuntu LTS, Amazon Linux, Rocky Linux

##### Container-optimized/Optimizado para contenedores: alternativas ligeras a las máquinas virtuales que empaquetan únicamente la aplicación y sus dependencias.
Alpine Linux, Bottlerocket AWS, Flatcar Linux



#### Tantos sistemas operativos?

##### Los distintos dispositivos y entornos requieren capacidades diferentes de un sistema operativo

#### 1. Un portátil debe ser fácil de usar y compatible con la multitarea
#### 2. Los servidores requieren estabilidad, seguridad y deben poder funcionar de forma continua sin interrupciones
#### 3. Los dispositivos móviles necesitan eficiencia energética e integración de hardware para prolongar la duración de la batería
#### 4. Los sistemas embebidos utilizan sistemas operativos ligeros diseñados para un propósito específico.

Las empresas y comunidades que desarrollan estos sistemas operativos también tienen sus propios objetivos
Algunos se centran en la facilidad de uso, el rendimiento, la seguridad, la apertura o la personalización
Dado que cada entorno valora capacidades diferentes, ningún sistema operativo es perfecto para todas las situaciones
En cambio, ha evolucionado un ecosistema de sistemas operativos.


En la tarea anterior, aprendiste que tu nuevo ordenador utiliza la distribución Ubuntu de Linux
También pudiste determinar la versión y la distribución

##### Continuemos la investigación y recopilemos más información sobre el sistema
Seguirás utilizando el acceso directo "Acerca de este ordenador"

continuación, accederás al directorio de inicio, que se encuentra en el escritorio


File Systems(System Monitor) | Type (/dev/root)
Abra la pestaña Sistemas de archivos en el Monitor del sistema.
¿Qué tipo aparece listado para el dispositivo /dev/root?

ext4

Home directory on the Desktop
Tras abrir el directorio de inicio en el escritorio, ¿cuántos directorios de usuario existen?


Documents folder of alex
Acceda al directorio principal de Alex y explore la carpeta Documentos.
¿Cuál es el valor de la bandera que contiene note.txt?




#### Conclusión

aprendiste qué hace realmente un sistema operativo internamente
exploraste conceptos clave, como privilegios, gestión de usuarios, manejo de memoria y procesos
En el ejercicio práctico, investigaste un ordenador misterioso que te regaló un amigo
Utilizaste el sistema operativo para echar un vistazo al hardware y a los sistemas de archivos que ayuda a gestionar.


##### Claves

Sistema operativo (SO)
El software principal que gestiona el hardware, las aplicaciones y todos los recursos del sistema.

Espacio del núcleo
El área altamente privilegiada del sistema operativo, con acceso directo al hardware, y el hogar del núcleo, que gestiona directamente el hardware y los recursos del sistema.

Espacio de usuario
El área donde se ejecutan las aplicaciones habituales con permisos limitados por motivos de seguridad y estabilidad del sistema.

Interfaz gráfica de usuario (gui)
La parte visual del sistema operativo, las ventanas, los iconos y los menús, que permite interactuar mediante clics y toques.

Interfaz de línea de comandos (cli)
Una interfaz basada en texto donde se introducen comandos para controlar el sistema con precisión y rapidez.




# 5. Windows Basics

Navegar por Windows, administrar archivos y utilizar las herramientas esenciales del sistema.

Microsoft Windows. En la sala anterior, exploraste qué es un sistema operativo, el gestor que se encarga de que tu dispositivo funcione correctamente
ejemplo real y aplicar los conceptos aprendidos en un sistema que quizás ya reconozcas

experiencia práctica con la interfaz de Windows y empezarás a desarrollar habilidades prácticas que sentarán las bases para las siguientes salas del módulo.


### Escenario
asumirás el rol de nuevo empleado en tu primer día en TryHatMe
Una vez que inicies sesión en tu estación de trabajo, te familiarizarás con el escritorio de Windows, aprenderás cómo funciona la interfaz
abrirás herramientas desde el menú Inicio y navegarás por las carpetas de la empresa
Tu supervisor te guiará en la creación y organización de archivos, el cambio de la configuración del sistema
la revisión del Administrador de tareas y la configuración básica de seguridad
Al finalizar estas tareas de incorporación, deberías sentirte cómodo usando Windows y realizando las tareas diarias que se esperan de ti.


Objetivos de aprendizaje
Navega por la interfaz gráfica de Windows, incluyendo el escritorio, la barra de tareas y el menú Inicio
Utilice el Explorador de archivos para explorar carpetas, comprender las rutas de los archivos y organizarlos de forma eficaz.
Compruebe la configuración del sistema y personalice el entorno de Windows mediante la aplicación Configuración    
Utilice herramientas básicas del sistema como el Administrador de tareas y la Seguridad de Windows para supervisar el rendimiento y verificar la protección del sistema


Acceso a la máquina
Haz clic en el botón «Iniciar máquina de laboratorio» que aparece a continuación para arrancar tu estación de trabajo con Windows Server 2019
Acceso a la máquina

Haz clic en el botón «Iniciar máquina de laboratorio» que aparece a continuación para arrancar tu estación de trabajo con Windows Server 2019



### Trabajo en Windows 

los sistemas operativos de Microsoft eran mucho más simples. Los primeros ordenadores ejecutaban MS-X, que mostraba una pantalla negra donde había que escribir comandos en lugar de hacer clic en iconos
En 1985, Microsoft lanzó Windows 1.0, una interfaz gráfica de usuario básica basada en DOS, que introdujo ventanas, menús y controles de ratón en los ordenadores personales
Con el tiempo, Windows ha ido añadiendo más funciones, convirtiendo la interfaz original en un sistema operativo completo


### Inicio de sesión y autenticación
Antes de acceder al escritorio de Windows, debe autenticarse (demostrar su identidad) en el sistema
#### 1. El proceso de autenticación verifica su identidad y determina las acciones que puede realizar una vez que haya iniciado sesión
Al iniciar Windows, se muestra una pantalla de inicio de sesión donde debe seleccionar una cuenta de usuario y autenticarse con una contraseña, un PIN u otro método de verificación
#### 2. A cada usuario se le asigna un conjunto de niveles de permisos que determinan su acceso a archivos, configuraciones y funciones del sistema


Windows suele utilizar los siguientes tipos de cuenta.

#### 1. Invitado: Una cuenta restringida destinada al acceso temporal, con permisos mínimos y sin capacidad para cambiar la configuración del sistema

#### 2. Estándar: Una cuenta de usuario para tareas cotidianas, como ejecutar aplicaciones y cambiar la configuración personal, sin acceso a cambios en todo el sistema

#### 3. Administrador: Cuenta privilegiada con control total sobre el sistema, incluyendo la instalación de software, los cambios de configuración y la gestión de usuarios.


##### Al iniciar el equipo en la tarea anterior, se inicia sesión automáticamente con una cuenta de administrador
#### Esto le permitirá explorar la configuración del sistema, instalar programas y realizar acciones administrativas sin restricciones de permisos.

Echemos un vistazo al escritorio de Windows y repasemos juntos algunas de sus características principales. Cuando inicias sesión por primera vez, se te presentan dos áreas principales.

##### 1. Escritorio: El espacio de trabajo principal donde se encuentran los archivos, las carpetas y los accesos directos.

##### 2. Barra de tareas: Una tira de control que proporciona acceso a aplicaciones, herramientas del sistema, configuraciones y notificaciones.
    

##### Iconos de escritorio: Accesos directos a elementos como la Papelera de reciclaje, carpetas y aplicaciones de uso frecuente.
Es totalmente personalizable.

##### Menú Inicio: Vía principal para acceder a las aplicaciones, la configuración y las opciones de energía.
Desde aquí, puede cerrar sesión, reiniciar o apagar su equipo.

##### Búsqueda: Encuentra rápidamente aplicaciones, archivos, carpetas y configuraciones del sistema mediante palabras clave.

##### Vista de tareas: Permite ver todas las ventanas abiertas actualmente y alternar rápidamente entre ellas.

##### Aplicaciones y carpetas ancladas: Aquí puedes anclar tus aplicaciones y carpetas más utilizadas.

##### Configuración de red y audio: esta sección se puede personalizar para adaptarla a sus necesidades.

##### Fecha y hora: Se abre un calendario completo. Aquí también se puede acceder a la configuración de fecha y hora.

##### Notificaciones: Muestra notificaciones del ordenador o de las aplicaciones.
También se puede acceder a la configuración de red y otras configuraciones.


Menú de inicio
Al usar Windows, se puede acceder al menú Inicio haciendo clic en el icono de Windows, ubicado en la esquina inferior izquierda de la barra de tareas
Si consideramos el escritorio de Windows como una terminal de aeropuerto, el menú Inicio sería el panel de salidas o el mostrador de información    
Es el área donde vemos las opciones disponibles: aplicaciones, archivos, carpetas, configuración y opciones de energía. Se podría decir que es un menú de acceso rápido.

Herramientas y aplicaciones integradas
Windows incluye numerosas herramientas y aplicaciones integradas muy útiles que usarás a diario.
Además de la amplia gama de ajustes disponibles para administrar el sistema, Windows también incluye herramientas sencillas pero potentes, como el Bloc de notas para editar archivos de texto y el Explorador de archivos para navegar y gestionar archivos.
Estas herramientas están disponibles de inmediato y constituyen la base del uso diario de Windows.
Se puede acceder a todas ellas a través del menú Inicio y la barra de búsqueda. Las herramientas integradas de Windows son como los servicios y comodidades de un aeropuerto:
todo lo que ya está disponible en la terminal para ayudarte a realizar tus tareas.

Obtención de información del sistema
Windows incluye una aplicación de Configuración integrada que te permite configurar y ver información sobre tu sistema.
Para familiarizarte mejor con tu nuevo ordenador de trabajo, comenzaremos por analizarlo.
Dentro de la aplicación Configuración, encontrarás una útil sección llamada Acerca de tu PC, que proporciona detalles clave sobre el sistema.
##### Se ha creado un acceso directo a Acerca de tu PC en el escritorio.
##### Ábrelo ahora.
También puedes usar el menú Inicio o la función de búsqueda para encontrarlo.
La página "Acerca de tu PC" ofrece una descripción general de la información sobre seguridad, el dispositivo y el sistema operativo.
##### Usaremos esta información para familiarizarnos con nuestro entorno y comenzar a responder las primeras preguntas de esta tarea.



Exploración y gestión de archivos
Perfecto, ahora entendemos el sistema con el que estamos trabajando
Veamos cómo Windows gestiona la exploración y administración de archivos al acceder a algunos de los documentos de incorporación para tu nuevo puesto
Antes de profundizar en el uso del Explorador de archivos, repasemos brevemente cómo Windows organiza los archivos y directorios
Windows utiliza una estructura de carpetas jerárquica, lo que significa que las carpetas pueden contener otras carpetas y archivos en su interior
Esta estructura ayuda a mantener los datos organizados y facilita la localización de información a medida que los sistemas crecen
Las ubicaciones comunes, como el Escritorio, Documentos y Descargas, sirven como directorios principales para almacenar archivos
Dentro de estas ubicaciones, se utilizan subcarpetas para agrupar archivos relacionados
Comprender esta estructura hará que navegar por el sistema y administrar los archivos sea mucho más fácil.

Si continuamos con la analogía del aeropuerto, el Explorador de archivos actúa como el directorio y el plano de la terminal, ayudándote a navegar entre diferentes áreas y a localizar lo que necesitas


##### Ahora puedes abrir la carpeta TryHatMe Onboarding en el escritorio.
También puedes abrir el Explorador de archivos, que está anclado a la barra de tareas, o usar el menú Inicio para localizar la carpeta.

##### Abra la carpeta TryHatMe Onboarding en su escritorio.
Esto abre la carpeta en el Explorador de archivos de Windows.
Opciones para ver, compartir y editar carpetas y archivos.
Al hacer clic en el nombre de la carpeta, se mostrará la ruta completa a la carpeta seleccionada.
##### C:\Usuarios\Administrador\Escritorio\Incorporación de TryHatMe
El contenido mostrado de nuestra carpeta seleccionada
Podemos usar la función de búsqueda integrada del Explorador de archivos para buscar en nuestra carpeta.


### Preguntas

Asegúrese de que el ordenador del laboratorio esté abierto en modo de pantalla dividida
y, a continuación, eche un vistazo al escritorio.
Después de abrir la opción "Acerca de su PC", diríjase a la sección "Especificaciones del dispositivo".
¿Cuál es el nombre del dispositivo especificado?


Continúe revisando las especificaciones del dispositivo.
¿Cuánta memoria RAM tiene instalada tu nueva computadora de trabajo?


Desplácese hacia abajo hasta la sección de especificaciones de Windows.
¿Qué versión de Windows Server 2019 Datacenter está instalada?



Explora la carpeta TryHatMe Onboarding ubicada en el escritorio de tu ordenador.
¿Cuál es el valor de la bandera que se encuentra en Welcome.txt?




## Config and Securing Windows

Las aplicaciones son los programas y herramientas que utilizas para realizar tareas en tu ordenador, desde navegar por internet y editar fotos hasta gestionar la configuración de tu PC
Ya hemos hablado de algunas de las aplicaciones integradas que ofrece Windows, pero saber cómo instalar, actualizar y desinstalar aplicaciones es fundamental para el uso diario de Windows
Retomemos brevemente la analogía del aeropuerto para comprender mejor este concepto
Actualizar tus aplicaciones es como cambiar de vuelo o reservar un asiento

##### Estos tres procesos te permiten realizar los cambios necesarios en tu sistema, asegurándote de tener exactamente lo que necesitas y de que tu sistema permanezca seguro.


### Windows Updates

mantiene actualizados el sistema operativo, algunas aplicaciones nativas y funciones de seguridad. Se puede acceder a Windows Update a través de la aplicación Configuración y, según la configuración, puede instalar actualizaciones automáticamente


### Actualización de aplicaciones

Las actualizaciones de las aplicaciones funcionan de manera diferente según cómo esté instalado el software.

##### 1. Las aplicaciones integradas pueden actualizarse automáticamente en segundo plano.
##### 2. Las aplicaciones de terceros suelen incluir sus propios mecanismos de actualización.
Algunas aplicaciones te pedirán que las actualices al iniciarse.
Algunos requieren que compruebes si hay actualizaciones o que descargues un nuevo instalador manualmente


### Instalación de aplicaciones

Ahora que ya has visto cómo funcionan las actualizaciones en el sistema operativo Windows y para las aplicaciones, veamos cómo instalar nuevas.

##### Microsoft Store: Ofrece una opción segura y controlada para instalar aplicaciones en Windows, aunque no está disponible de forma predeterminada en Windows Server.
##### Desde Internet: En muchos entornos, las aplicaciones se instalan descargando un instalador directamente desde el sitio web de un proveedor de confianza. Por lo general, vienen en un archivo .exe o .msi y guían al usuario a través del proceso de instalación.

#### Dentro de la carpeta TryHatMe Onboarding en tu escritorio, encontrarás un instalador llamado TryHatMeWelcome.
##### Proceda haciendo doble clic en el instalador para iniciar el proceso de instalación y, a continuación, responda a la primera pregunta de la tarea.

Nota: Puede explorar las opciones de instalación; recuerde que se trata de un entorno virtual, seguro para realizar pruebas y experimentos.



### Desinstalación de aplicaciones

En un entorno Windows, existen varias formas de desinstalar programas.

Uso de Microsoft Store para aplicaciones instaladas
Función para agregar o quitar programas en la configuración del sistema.
Desinstalar un programa (sección del Panel de control)
Utilizar el desinstalador integrado de una aplicación



### Task Manager


##### Procesos: Aplicaciones y procesos en segundo plano que se están ejecutando actualmente, y su uso de recursos.

##### Rendimiento: Gráficos y estadísticas de los recursos del sistema, como la CPU, la memoria y la red.

##### Usuarios: Usuarios actualmente conectados y recursos utilizados 

##### Detalles: Una visión más técnica de los procesos en ejecución, incluidos los identificadores de proceso (PID).

##### Servicios: Servicios de Windows y su estado actual (en ejecución o detenidos)




Seguridad nativa de Windows

Windows ofrece herramientas de seguridad integradas diseñadas para proteger su sistema de amenazas como malware, aplicaciones inseguras y accesos no autorizados a la red
Estas herramientas están habilitadas de forma predeterminada y permiten supervisar y controlar la seguridad de su sistema. 


Seguridad de Windows

La aplicación Seguridad de Windows es el panel central para administrar las medidas de protección integradas de Windows.
Está dividida en cuatro secciones principales, cada una centrada en un área diferente de la seguridad del sistema.
   

Protección contra virus y amenazas: Ayuda a detectar y eliminar software malicioso mediante protección en tiempo real y análisis personalizables.

Protección de red y cortafuegos: Controla el tráfico de red entrante y saliente para ayudar a prevenir el acceso no autorizado.

Control de aplicaciones y navegador: Protege a los usuarios de aplicaciones, archivos y sitios web potencialmente inseguros.

Seguridad del dispositivo: Proporciona protecciones basadas en hardware que ayudan a proteger el sistema.


#### !!! Analicemos con más detalle la sección de Protección contra virus y amenazas de Seguridad de Windows en su estación de trabajo
    
Ábrala ahora mismo mediante el acceso directo del escritorio o a través del menú Inicio
A continuación, realizaremos un análisis personalizado de su carpeta de configuración inicial para asegurarnos de que no haya archivos maliciosos. 

##### 1. Abra la Seguridad de Windows mediante el acceso directo en su escritorio.
##### 2. Seleccione la sección de protección contra virus y amenazas.
##### 3. Seleccione las opciones de escaneo
##### 4. Seleccione Escaneo personalizado y luego Escanear ahora.
##### 5. Seleccione la carpeta TryHatMe Onboarding en su escritorio como destino del análisis.

El análisis personalizado habrá detectado un archivo de prueba completamente seguro, y este proceso demuestra la capacidad de Windows para buscar y detectar amenazas
Tenga en cuenta que este es solo uno de los aspectos de las medidas de seguridad que Windows implementa para proteger su sistema
Haga clic en «Ver detalles» para analizar el archivo y responder la última pregunta de la tarea



### Windows Defender Firewall

El Firewall de Windows Defender es un cortafuegos integrado diseñado para proteger su equipo del tráfico de red no autorizado. Supervisa las conexiones de red y aplica reglas que determinan si se permiten o se deniegan. El cortafuegos funciona con diferentes perfiles de red, lo que le permite crear reglas personalizadas o especificar las aplicaciones permitidas.

#### Dominio: Se utiliza cuando un sistema está conectado a la red de dominio de una organización.

#### Privado: Diseñado para redes de confianza, como un entorno doméstico o de laboratorio. 

#### Público: Se utiliza para redes no confiables, como las redes Wi-Fi públicas.


Al revisar la configuración avanzada del Firewall de Windows Defender, puede ver:

Descripción general de las reglas de entrada, salida y conexión de su firewall.

Una vista detallada de cada regla, incluyendo nombre, grupo, perfil de red, estado y acción.

Crea nuevas reglas o filtra tu vista actual.



### Preguntas

Utilice el instalador TryHatMeWelcome que se encuentra dentro de la carpeta TryHatMe Onboarding.
¿Cuál es el valor del indicador que recibe después de instalar y ejecutar la aplicación?


Investiga la sección Hora e idioma de la aplicación Configuración de Windows.
¿En qué país o región está configurado actualmente su ordenador?



Abra el Administrador de tareas en el escritorio de su estación de trabajo y navegue hasta la pestaña Usuarios.
¿Qué cuenta está activada actualmente?



Después de realizar el análisis personalizado, haga clic en Virus:DOS/EICAR_Test_File y seleccione Ver detalles.
¿Cuál es el nombre del archivo que aparece en la sección Elementos afectados?






# 6. Linux






# Software Basics



# 1. Data Representation

#### Cómo las computadoras representan los números y los colores.

No solo te interesa ver el color púrpura en la pantalla
##### sino también cómo se representa este color en la memoria de la computadora
#### !!! cómo las computadoras logran realizar todos sus cálculos cuando solo pueden leer y escribir dos estados, interpretándolos como 0 y 1.
##### 1 (encend), 0 (apag)


##### A los seres humanos nos resulta más conveniente usar el sistema decimal
para tareas cotidianas como contar, medir, pesar y pagar
Si te gusta correr, puedes controlar tu progreso cronometrando el tiempo; por ejemplo, podrías decir que corriste durante 23 minutos
Cuando miras precios, esperas algo como 17, 99, 239, 3049, etc
Sin pensarlo mucho, usamos el sistema decimal, donde los dígitos van del 0 al 9.

#### Las computadoras, en cambio, se limitan a dos dígitos: 0 y 1.
##### Si alguna vez te has preguntado cómo las computadoras representan los diferentes valores usando solo dos dígitos
###### Acumulando/matamt/operac

Objetivos de aprendizaje

Representando 8 colores
Representando 16 millones de colores
Números binarios
Números hexadecimales
(Opcional) Números octales

##### comprenderás a fondo cómo los ordenadores representan los colores y entienden los números (especialmente los enteros positivos).

#### Familiarizarte con las representaciones de los sistemas binario y hexadecimal es fundamental para utilizar diversas herramientas informáticas, sobre todo en el ámbito de la ciberseguridad



## 2. Representing Colors


### Primeros ocho colores

#### !!! Al combinar diferentes cantidades de luces rojas, verdes y azules, puedes obtener cualquier color que desees
En términos de colores informáticos, imagínalo como tres perillas, y cada perilla controla uno de los tres colores.


Ejemplo

#### !!! Digamos que cada uno de los tres colores puede estar encendido o apagado, es decir, cada uno tiene dos estados.

La luz roja puede estar encendida o apagada.
La luz verde puede estar encendida o apagada.
La luz azul puede estar encendida o apagada.

#### Estos estados nos dan 2 × 2 × 2 = 8, es decir, ocho colores diferentes.

Si una computadora estuviera limitada a 8 colores, solo necesitaría indicar qué color está encendido y cuál apagado
##### De hecho, puede usar tres dígitos de 1 y 0, para representar los estados de rojo, verde y azul
Por ejemplo, 111 indicaría que las tres luces están encendidas
mientras que 100 indicaría que solo está encendida la roja
#### !!! Este dígito, que puede ser 1 o 0, se denomina bit.

Ahora bien, un ordenador puede representar cualquiera de los 8 colores
Si esto aún no queda claro, en la tabla siguiente se muestra una lista detallada.


### 000: Black. Todos los colores están apagados

### 001: Blue. Solo el azul está encendido

### 010: Green. Solo el verde está encendido

### 100: Rojo. Solo el verde está encendido

### 011: Cyan. Verde y Azul encendido.

### 101: Magenta. Red, Blue on

### 110: Yellow. Red, Green

### 111: White. All on

Una forma de representar un color en una paleta de 8 colores.


### De 8 a 16.000.000

Limitarse a ocho colores es un inconveniente, ya que preferimos millones
#### Sería ideal que cada una de las tres luces (roja, verde y azul) tuviera 256 niveles en lugar de solo dos (encendido o apagado).
#### Repitamos el cálculo anterior: 256 × 256 × 256 = 16.777.216
Eso son más de 16 millones de colores; suficiente para cubrir la mayoría de nuestras necesidades.
    
#### Un bit es suficiente para representar dos estados: encendido y apagado
#### Necesitamos ocho bits para expresar 256 estados
#### En la mayoría de los libros de texto, un grupo de ocho bits se denomina byte
##### se puede usar el término octeto.

#### Si juntamos todo esto, nos damos cuenta de que un color ahora se representa como 3 × 8 bits, o 3 bytes (24 bits).
##### Por ejemplo, un color verde usado en esta página se representa como 10100011 11101010 00101010
##### esta no es una forma muy práctica de escribir o leer códigos de color
##### donde entra en juego la representación hexadecimal!



### Representación hexadecimal

#### Facilita la combinación de 4 bits en un solo carácter, concretamente un dígito hexadecimal
##### Por ahora, piense en los dígitos hexadecimales como símbolos, donde cada símbolo representa un conjunto de 4 bits
Retomaremos el tema de los números hexadecimales en la Tarea 3.


Hexadecimal -> Binary
0				0000
1				0001
2				0010
3				0100
4				0100
5				0101
6				0110
7				0111
8				1000
9				1001
A				1010
B				1011
C				1100
D				1101
E				1110
F				1111


##### Volviendo al color verde, en lugar de escribir 10100011 11101010 00101010
#### podemos escribir A3EA2A
De hecho, así es como se especifica el color en los programas de diseño gráfico
Para su comodidad, el sitio web adjunto le ayuda a convertir un color hexadecimal a sus representaciones binaria y decimal
además de ofrecerle una vista previa del color.


#### En aplicaciones de la vida real, un color se representa en 24 bits, es decir, 3 bytes.
#### Cada byte puede representar 256 valores diferentes.
#### Cada uno de los tres bytes especifica la intensidad de las luces roja, verde y azul.
#### Cada 4 bits están representados por un dígito hexadecimal.
#### Cada byte se representa como dos dígitos hexadecimales.



### Preguntas

Vea una vista previa del color #3BC81E.
En una palabra, ¿qué color parece ser?


¿Cuál es la representación binaria del color #EB0037?


¿Cuál es la representación decimal del color #D4D8DF?




## Decimal To Hexa

diez dedos, y esta es la explicación más plausible de por qué usamos el sistema decimal (base 10)

#### Las computadoras, por otro lado, tienen dos estados que entienden:

##### 1. Rango de voltaje bajo y alto (ejemplo: lógica transistor-transistor)
Norte y Sur en polaridad magnética (ejemplo: discos duros)
Presencia de luz (ejemplo: fibra óptica)


Consideremos el primer ejemplo
##### A nivel electrónico, un transistor permite el paso o bloquea la corriente eléctrica
##### Por consiguiente, en todos los sistemas digitales, todo se reduce a un estado bajo o alto
que representan 0 y 1, respectivamente
(Por ejemplo, el rango bajo puede ser un voltaje entre 0 y 0,8 voltios
mientras que el rango alto está entre 2 y 3,3 voltios, o entre 2,7 y 5 voltios
según el sistema electrónico

No nos afecta cómo se representan el 0 y el 1 a nivel físico
#### nos interesa cómo usar estos dos dígitos para representar datos, como números

Vimos que podemos usar un conjunto de bits para ajustar los pasos
#### Por ejemplo, 1 bit puede representar 2 estados, mientras que 8 bits pueden representar 256 estados
##### En esta tarea, profundizaremos un poco más en las matemáticas que hay detrás
sin embargo, no te preocupes si al principio parece complejo
Todo tendrá más sentido a medida que avances en tu aprendizaje.


En términos matemáticos sencillos
un número como 213 es en realidad lo mismo que decir 200 + 10 + 3

En una representación más técnica
##### 213 se puede escribir como 213 = 2 × 10² + 1 × 10¹ + 3 × 100
Como recordarás de la clase de matemáticas, 10² = 100, 10¹ = 10 y 100 = 1.

esta era simplemente la forma matemática formal de decir que 213 = 2 × 100 + 1 × 10 + 3 × 1.



### Números binarios

El sistema binario (base 2) se puede expresar de forma similar a como lo hicimos anteriormente al hablar del sistema decimal (base 10).
Las principales diferencias radican en que el
#### sistema binario se limita a dos dígitos, 0 y 1
#### y en que todos los números son potencias de 2.

Ej:

El número binario 1001 se puede expresar de la siguiente manera
##### 1001 = 1 × 2³ + 0 × 2² + 0 × 2¹ + 1 × 2⁰ = 1 × 8 + 0 × 4 + 0 × 2 + 1 × 1 = 8 + 0 + 0 + 1 = 9
Acabamos de demostrar cómo escribir 9 en binario.

0000 = 0 × 2^3 + 0 × 2^2 + 0 × 2^1 + 0 × 2^0 = 0 × 8 + 0 × 4 + 0 × 2 + 0 × 1 = 0
0001 = 0 × 2^3 + 0 × 2^2 + 0 × 2^1 + 1 × 2^0 = 0 × 8 + 0 × 4 + 0 × 2 + 1 × 1 = 1
0010 = 0 × 2^3 + 0 × 2^2 + 1 × 2^1 + 0 × 2^0 = 0 × 8 + 0 × 4 + 1 × 2 + 0 × 1 = 2
0011 = 0 × 2^3 + 0 × 2^2 + 1 × 2^1 + 1 × 2^0 = 0 × 8 + 0 × 4 + 1 × 2 + 1 × 1 = 3

##### cuenta de que el dígito de la derecha se multiplica por 2^0 en el sistema binario (base 2)
##### y por 10^0 en el sistema decimal (base 10).
Luego, el siguiente dígito se multiplica por 2^1 en el sistema binario y por 10^1 en el sistema de base 10
Y así sucesivamente hasta llegar al último dígito
Es sencillo, pero requiere mucha atención para no omitir ningún dígito ni calcular mal su valor.

Ejercicio, convertiremos cuatro números binarios más, 1100, 1101, 1110 y 1111, al sistema decimal
Intenta hacerlo en una hoja de papel antes de comparar tus respuestas con las soluciones que aparecen a continuación

1100 = 1 × 2^3 + 1 × 2^2 + 0 × 2^1 + 0 × 2^0 = 1 × 8 + 1 × 4 + 0 × 2 + 0 × 1 = 8 + 4 + 0 + 0 = 12
1101 = 1 × 2^3 + 1 × 2^2 + 0 × 2^1 + 1 × 2^0 = 1 × 8 + 1 × 4 + 0 × 2 + 1 × 1 = 8 + 4 + 0 + 1 = 13
1110 = 1 × 2^3 + 1 × 2^2 + 1 × 2^1 + 0 × 2^0 = 1 × 8 + 1 × 4 + 1 × 2 + 0 × 1 = 8 + 4 + 2 + 0 = 14
1111 = 1 × 2^3 + 1 × 2^2 + 1 × 2^1 + 1 × 2^0 = 1 × 8 + 1 × 4 + 1 × 2 + 1 × 1 = 8 + 4 + 2 + 1 = 15



### Hexadecimales

agrupamos cada 4 bits en un dígito hexadecimal
un dígito hexadecimal va de 0 a F

Si observas con atención la tabla a continuación
notarás que un dígito hexadecimal va de 0 a 15 en el sistema decimal

Para reemplazar 10, 11, 12, 13, 14 y 15 con una sola letra/dígito
se eligen A, B, C, D, E y F.
La tabla que aparece a continuación es similar a la que encontrarás en cualquier tutorial o capítulo sobre el sistema hexadecimal

Esta subsección es opcional. Si le interesa convertir un número hexadecimal a decimal, siga el mismo procedimiento que utilizamos para la conversión binaria. Supongamos que queremos convertir el número hexadecimal 9B DF a decimal.

9BDF = 9 × 16^3 + 11 × 16^2 + 13 × 16^1 + 15 × 16^0 = 9 × 4096 + 11 × 256 + 13 × 16 + 15 × 1 = 39,903


Opcional: Conversión del sistema octal al decimal.

La conversión de un número octal a su equivalente decimal sigue los pasos de las conversiones anteriores. Consideremos el número octal 357.

357 = 3 × 8^2 + 5 × 8^1 + 7 × 8^0 = 3 × 64 + 5 × 8 + 7 × 1 = 239



###  Preguntas


¿Cuál es el valor hexadecimal de FF en binario?


¿Cuál es el valor decimal del número hexadecimal AB?


Convierte el valor hexadecimal FF FF FF a decimal.
Después de redondear el valor decimal al millón más cercano,
¿cuántos millones son?



### Conclusion

Sistema decimal (base 10): Este es el sistema que utilizamos en nuestra vida cotidiana.

Sistema binario (base 2): Las computadoras entienden dos estados, que se codifican como 0 y 1.

Sistema hexadecimal (base 16): Cada 4 dígitos binarios (bits) se pueden agrupar en un dígito hexadecimal.
Un dígito hexadecimal abarca desde 0 hasta F.

Sistema octal (base 8): Cada 3 dígitos binarios (bits) se pueden agrupar en un dígito octal.
Un dígito octal abarca desde 0 hasta 7.
Este sistema es menos común en los sistemas informáticos.
    

Bit: Es la abreviatura de dígito binario, y puede ser 0 o 1.

Byte: En los sistemas modernos, un byte equivale a 8 bits.
También se le conoce como octeto.

Color hexadecimal: En los sistemas informáticos, un color se representa como una combinación de rojo, verde y azul.
Si se asigna un byte a cada uno de los colores primarios (rojo, verde y azul), podemos obtener más de 16 millones de combinaciones de colores.
    





# Data Encoding


cómo se representan los números en la computadora como dígitos binarios (bits)
cómo estos bits se pueden agrupar en dígitos hexadecimales
exploramos cómo expresar colores usando números

si todo se almacena como números,
¿cómo los convertimos en letras, signos de puntuación y emojis?

#### En esta sala, aprenderás que los caracteres son simplemente números con significados acordados
##### Este acuerdo se denomina codificación

Alguna vez has abierto un documento, visitado una página web o descargado subtítulos de películas y te has encontrado con que el archivo aparece como un galimatías extraño
##### Una de las razones es que el usuario que guardó el archivo y el que lo abrió utilizan codificaciones diferentes.

#### La representación se basa en la idea de que los datos existen como bits y números en la memoria

#### !!! Por otro lado, la codificación es la correspondencia específica y consensuada entre números y significados
##### !!! como por ejemplo, qué número corresponde al carácter "A".

En un texto, a cada carácter, como q, 5 o !, se le asigna un código numérico
#### !!! de modo que una cadena se convierte en una secuencia de números que el ordenador almacena y gestiona como cualquier otro dato

ASCII
Unicode
UTF-8, UTF-16 y UTF-32
Cómo se codifican los emojis
¿Y qué causa los extraños caracteres sin sentido?



## ASCII

aprendimos que las computadoras digitales solo entienden ceros y unos
##### Partiendo de 0 y 1, ¿cómo podemos guardar y mostrar texto?
Por ejemplo, ¿cómo podemos guardar el texto “TryHackMe” en un archivo?
Qué contendrá dicho archivo?

##### necesitamos ponernos de acuerdo sobre qué bits representan la T,
qué bits representan la r, qué bits representan la y, y así sucesivamente
Digamos que todos acordamos representar la T con la siguiente secuencia de bits: 01010100

##### Entonces, todos los sistemas informáticos deberían almacenar la T de la misma manera
#### posteriormente, cuando un ordenador encuentre 01010100, la reconocerá como T
Por supuesto, debemos hacer esto para todas las letras del alfabeto, dígitos y caracteres especiales

#### Este enfoque requiere un estándar al que los fabricantes, diseñadores y programadores de ordenadores se comprometan a adherirse
Uno de los primeros estándares para las letras inglesas fue ASCII.


#### ASCII: American Standar Code for Information Interchange
##### Código Estándar Estadounidense para el Intercambio de Información
codificación de caracteres temprana de 1963 que usa los números del 0 al 127 para representar letras, dígitos, signos de puntuación y algunos caracteres de control en inglés
Recuerda que la A significa Americano, ya que esto te será útil más adelante

##### notado, el ASCII original estaba limitado a siete bits
#### ASCII funciona como un pequeño diccionario bilingüe entre texto y códigos numéricos

Considera los siguientes ejemplos de la tabla ASCII original
Dado que la tabla tiene 128 entradas, solo hicimos una breve selección para darte una idea de cómo se representan las cosas en ASCII


#### Hay varias cosas que puedes observar. Primero, las letras están en orden.
Si conoces el valor hexadecimal o decimal de la letra b, puedes calcular el valor decimal de la a, la c y las letras minúsculas posteriores
Por ejemplo, a, b y c se les asignan los valores hexadecimales 61, 62 y 63, respectivamente
Lo mismo ocurre con las letras mayúsculas de la A a la Z y los dígitos del 0 al 9
Al usar la codificación ASCII, un sistema informático lee el número 41 en un archivo y muestra la letra A en la pantalla
cuando lee el 42, muestra la letra B, y así sucesivamente

cada carácter tiene su propio ASCII; por ejemplo, está representado por el número hexadecimal 5B.


##### Decimal 	Hexadecimal 	Binary 	Symbol 	Description

48 	30 	00110000 	0 	Zero
57 	39 	00111001 	9 	Nine
65 	41 	01000001 	A 	Uppercase A
92 	5C 	01011100 	\ 	Backslash


Supongamos que abres un archivo de texto, escribes “TryHackMe” y lo guardas como archivo.txt. ¿Cómo se verá el archivo a nivel de bits? Averigüémoslo.

Si le interesa ver el almacenamiento en el disco, bit a bit, y suponiendo que utiliza ASCII, verá algo similar a lo siguiente:

01010100 01110010 01111001 01001000 01100001 01100011 01101011 01001101 01100101 00001010

Obviamente, esto es ilegible para cualquier ser humano. Estas son las representaciones binarias exactas de todas las letras de “TryHackMe”, seguidas de un salto de línea. Al abrir este archivo, su editor leerá estos bits y mostrará los siguientes caracteres: TryHackMe \n; el \n es un salto de línea que se obtiene al presionar la tecla Enter.


Dado que leer números binarios es engorroso y propenso a errores, preferimos usar dígitos hexadecimales. Como recordarán de la sala anterior, agrupamos 4 bits en un solo dígito hexadecimal. Nuestro archivo se ve así en hexadecimal: 54 72 79 48 61 63 6b 4d 65 0a

Y si quieres consultar la representación decimal, sería la siguiente: 124 162 171 110 141 143 153 115 145 012; sin embargo, no es común usar dígitos decimales. Es más común usar dígitos hexadecimales cuando queremos mostrar los bits.

Puedes usar tú mismo el sitio estático adjunto para experimentar más.




# Unicode

Aprendimos que ASCII es un estándar de 7 bits que define 128 caracteres, incluyendo letras, dígitos y signos de puntuación básicos del alfabeto inglés
observamos que ASCII, con sus siete bits, no permitía caracteres como ñ, €, あ o ب. Al usar ocho bits
ASCII extendido intentó solucionar esto con variantes regionales (ISO-8859-1, ISO-8859-2, Windows-1252, entre muchas otras

##### ¡pero esto causó un caos! Por ejemplo, si el remitente escribe y guarda Ø usando la codificación ISO 8859-1 (Latin 1) y el destinatario abre y lee el documento usando la codificación ISO 8859-2 (Latin 2), verá Ř


#### !!! Por lo tanto, queda claro que para abrir un documento es necesario usar la misma codificación que se usó al guardarlo
de lo contrario, varios caracteres no se mostrarán correctamente o, lo que es aún más confuso, podrían ser reemplazados incorrectamente

A diferencia del inglés, que tiene 26 letras y necesita 52 caracteres para cubrir mayúsculas y minúsculas
el árabe necesita más de 250 caracteres para cubrir sus diversas ligaduras y diacríticos
Además, la cifra aumenta rápidamente al considerar el japonés y el chino

En japonés, 2136 kanji (caracteres logográficos) se consideran caracteres de uso diario
según lo estipulado por el Ministerio de Educación de Japón
De hecho, el estándar JIS X 0208 define 6879 caracteres

En chino, los hablantes nativos con estudios reconocen alrededor de 8000 caracteres
Asimismo, el GB 18030-2022 define más de 87 887 hanzi (caracteres chinos).
Y aún no hemos considerado la codificación de emoticonos (emoji).

##### En otras palabras, es fundamental que tanto el remitente como el destinatario utilicen la misma codificación
#### además, necesitamos una codificación que pueda incluir todos los caracteres de todos los idiomas. Esta situación nos lleva a Unicode.

#### Unicode es un estándar universal de codificación de caracteres
Asigna códigos únicos a caracteres de todos los sistemas de escritura, tanto modernos como históricos, del mundo. Unicode permite el intercambio

#### Unicode permite el intercambio, el procesamiento y la visualización de texto en diversos idiomas.
En otras palabras, no es necesario preocuparse por elegir un estándar de codificación específico compatible con el idioma que se esté utilizando
Además, facilita el uso de diferentes idiomas en un mismo archivo o mensaje
Y lo más importante, dado que se trata de un estándar universal, no es necesario preocuparse por la codificación utilizada por el autor original, ya que este también utilizará Unicode

Unicode es un estándar de conjunto de caracteres que asigna un número único a cada carácter en todos los idiomas

U+0041 = “A” latina
U+03A9 = “Ω” griega
U+3042 = Hiragana japonés “あ”

#### Unicode 17.0 es actualmente la versión más reciente del estándar Unicode (se abre en una pestaña nueva).
##### Define cerca de 157 mil caracteres, de los cuales casi 4.000 son secuencias de emojis.


### UTF-8, UTF-16 y UTF-32: formas de codificación del estándar Unicode que transforman cada carácter universal en una secuencia específica de bytes para que las computadoras puedan almacenarlo y transmitirlo

Dado que te encontrarás con UTF-8, UTF-16 y UTF-32, los cubriremos brevemente sin profundizar demasiado
Lo que necesitas saber es que UTF-8 es muy común en la web moderna

#### Codifica los puntos Unicode en 1 a 4 bytes de forma dinámica
#### En otras palabras, decide la cantidad de bytes según la complejidad del carácter

##### Los caracteres ASCII (U+0000 a U+007F) usan exactamente 1 byte, idéntico al ASCII original, lo que garantiza una compatibilidad retroactiva perfecta
##### Los caracteres no ASCII como Ω (U+03A9) usan 2 bytes, mientras que los caracteres complejos o los emojis como 🔥 (U+1F525) requieren 4 bytes
Esta flexibilidad nos permite cubrir el estándar Unicode sin desperdiciar bytes.

#### 龍: Uno de los caracteres chinos que aparecen en distribuciones de Linux ofensivas, como Kali, es “龍”, que significa “dragón”.
##### En Unicode, es U+9F8D o U+00009F8D, dependiendo de si es UTF-16 o UTF-32

:) : Esta carita sonriente no es más que U+0001F60A en UTF-32 para una computadora
eso es literalmente 0000 0000 0000 0001 1111 0110 0000 1010.

ツ: La letra japonesa “tsu” que algunas personas usan como una carita sonriente en algunas regiones fuera de Japón;
tiene el código U+30C4 o U+000030C4 dependiendo de si es UTF-16 o UTF-32.

La letra ت es la letra árabe “taa”, y algunas personas la usan como emoticono fuera del mundo árabe; se parece bastante a una carita sonriente. Desde la perspectiva de Unicode, su código es U+062A.

♞: El ​​caballo negro en ajedrez utiliza el código Unicode U+265E; en otras palabras
el ordenador lee 0010 0110 0101 1110 y te muestra un caballo negro, gracias a Unicode.



# Nework Fundamentals




# 1. Networking

#### Las redes son simplemente cosas conectadas
tu círculo de amigos: todos están conectados debido a intereses, pasatiempos, habilidades y cosas por el estilo similares.

Las redes de contactos se encuentran en todos los ámbitos de la vida:

El sistema de transporte público de una ciudad
Infraestructura como la red eléctrica nacional para la electricidad
Recibir y saludar a tus vecinos
Sistemas postales para el envío de cartas y paquetes


Más concretamente, en informática, la idea de redes es la misma, solo que aplicada a dispositivos tecnológicos
Tomemos como ejemplo tu teléfono: lo tienes para acceder a información
##### Analizaremos cómo se comunican estos dispositivos entre sí y las reglas que rigen su funcionamiento.

#### En informática, una red puede estar formada por desde 2 dispositivos hasta miles de millones
##### Estos dispositivos incluyen desde tu ordenador portátil y tu teléfono hasta cámaras de seguridad, semáforos e incluso maquinaria agrícola

Las redes están integradas en nuestra vida cotidiana
Ya sea para recopilar datos meteorológicos
suministrar electricidad a los hogares o incluso determinar quién tiene prioridad de paso en una carretera
Debido a su profunda presencia en la actualidad, comprender las redes es un concepto fundamental en ciberseguridad

#### Las redes existen en todas las formas y tamaños, algo que también abordaremos a lo largo de este módulo.
    


### Que es Internet

#### Red: simplemente dispositivos conectados

#### !!! Internet es una gigantesca red compuesta por muchísimas redes pequeñas


La primera versión de Internet surgió a finales de la década de 1960 con el proyecto ARPANET. Este proyecto, financiado por el Departamento de Defensa de Estados Unidos
fue la primera red documentada en funcionamiento

Sin embargo, no fue hasta 1989 cuando Tim Berners-Lee inventó Internet tal como la conocemos, con la creación de la World Wide Web (WWW).
Fue entonces cuando Internet comenzó a utilizarse como repositorio para almacenar y compartir información, tal como se hace hoy en día.


##### Internet está compuesta por muchas redes pequeñas interconectadas

#### !!! Estas redes pequeñas se denominan redes privadas
#### !!! mientras que las redes que conectan estas redes pequeñas se denominan redes públicas: o Internet!

En resumen, una red puede ser de dos tipos:

    Una red privada
    Una red pública


#### !!! Los dispositivos utilizarán un conjunto de etiquetas para identificarse en una red



### Identificación de los dispositivos en la Red

#### !!! Para comunicarse y mantener el orden
#### !!! los dispositivos deben poder identificarse y ser identificables en una red.
De qué sirve si al final del día no sabes con quién estás hablando?

Los dispositivos en una red son muy similares a los humanos en el sentido de que tenemos dos formas de ser identificados:

    Our Name
    Our Fingerprints

#### !!! Ahora podemos cambiar nuestro nombre mediante escritura pública, pero no podemos cambiar nuestras huellas dactilares
Cada persona tiene un conjunto único de huellas dactilares, lo que significa que, aunque cambien de nombre, sigue existiendo una identidad detrás de él
#### !!! Los dispositivos tienen lo mismo: dos medios de identificación, uno de los cuales es permeable. Estos son:

#### dirección IP
### dirección MAC (Media Access Control) – piense en ella como algo similar a un número de serie.



### IP Addresses

#### una dirección IP (o dirección de protocolo de Internet) se utiliza para identificar un host en una red durante un período de tiempo
#### y posteriormente se asocia con otro dispositivo sin que la dirección IP cambie

##### Una dirección IP es un conjunto de números divididos en cuatro octetos
El valor de cada octeto se suma para formar la dirección IP del dispositivo en la red
Este número se calcula mediante una técnica conocida como direccionamiento IP y subredes
##### Lo importante aquí es comprender que las direcciones IP pueden cambiar de un dispositivo a otro
pero no pueden estar activas simultáneamente más de una vez dentro de la misma red.


#### Las direcciones IP siguen un conjunto de estándares conocidos como protocolos
#### !!! Estos protocolos son la base de las redes y obligan a muchos dispositivos a comunicarse en el mismo lenguaje, tema que abordaremos en otra ocasión
##### Sin embargo, cabe recordar que los dispositivos pueden estar en una red privada o pública
##### Dependiendo de su ubicación, se determinará el tipo de dirección IP que tengan: pública o privada


#### Estos dos dispositivos podrán comunicarse entre sí mediante sus direcciones IP privadas
##### Sin embargo, cualquier dato enviado a internet desde cualquiera de ellos se identificará con la misma dirección IP pública

#### Las direcciones IP públicas las proporciona tu proveedor de servicios de internet (o ISP)
##### a cambio de una tarifa mensual (¡que aparece en tu factura!).

#### !!! A medida que se conectan más y más dispositivos, resulta cada vez más difícil obtener una dirección IP pública que no esté ya en uso
##### Aquí entran en juego las versiones de direcciones IP.
Hasta ahora, solo hemos hablado de una versión del esquema de direccionamiento del Protocolo de Internet conocido como IPv4
que utiliza un sistema de numeración de 2^32 direcciones IP (4290 millones), ¡así que se entiende por qué hay tanta escasez!


#### IPv6 es una nueva versión del esquema de direccionamiento del Protocolo de Internet para ayudar a abordar este problema. Aunque aparentemente es más complejo, ofrece algunas ventajas:
Admite hasta 2^128 direcciones IP (más de 340 billones), resolviendo los problemas que presentaba IPv4.
Más eficiente gracias a las nuevas metodologías.

IPv6 and IPv4 address.



### MAC Adresses

#### Todos los dispositivos de una red tienen una interfaz de red física
#### que es una placa de microchip ubicada en la placa base del dispositivo

A esta interfaz de red se le asigna una dirección única en la fábrica donde se fabricó, llamada dirección MAC (Control de Acceso al Medio).

La dirección MAC es un número hexadecimal de doce caracteres (un sistema de numeración de base dieciséis utilizado en informática para representar números
dividido en dos y separado por dos puntos
Estos dos puntos se consideran separadores. Por ejemplo: a4:c3:f0:85:ac:2d.

#### primeros seis caracteres representan a la empresa que fabricó la interfaz de red, y los últimos seis son un número único.


#### Sin embargo, un aspecto interesante de las direcciones MAC es que pueden falsificarse o "suplantarse" en un proceso conocido como suplantación de identidad
Esta suplantación ocurre cuando un dispositivo en red simula identificarse como otro utilizando su dirección MAC
##### Cuando esto sucede, a menudo puede vulnerar diseños de seguridad mal implementados que asumen que los dispositivos que se comunican en una red son confiables

#### Está configurado para permitir cualquier comunicación hacia y desde la dirección MAC del administrador
#### !!! Si un dispositivo simulara o falsificara esta dirección MAC
#### !!! el firewall creería que está recibiendo comunicaciones del administrador cuando en realidad no es así.

#### !!! Lugares como cafeterías, bares y hoteles suelen utilizar el control de direcciones MAC al usar su red Wi-Fi para invitados o pública
Esta configuración podría ofrecer mejores servicios, como una conexión más rápida, a cambio de un coste adicional por dispositivo


### Preguntas

#### !!! section of an IP (Intern Protoc) address: Octet

#### !!! sections (in digits) does an IPv4 address: 4



### Ping (ICMP): (Internet Control Message Protocol)

#### !!! El comando Ping es una de las herramientas de red más fundamentales a nuestra disposición
##### !!! Ping utiliza paquetes ICMP (Protocolo de mensajes de control de Internet)
#### !!! para determinar el rendimiento de una conexión entre dispositivos, por ejemplo, si la conexión existe o es fiable

#### El tiempo que tardan los paquetes ICMP en viajar entre dispositivos se mide mediante ping

Como se muestra en la captura de pantalla a continuación.
Esta medición se realiza utilizando el paquete de eco de ICMP
posteriormente, la respuesta de eco de ICMP del dispositivo de destino.


Se pueden realizar pings a dispositivos en una red, como su red doméstica o recursos como sitios web
Esta herramienta es fácil de usar y viene instalada en sistemas operativos (SO) como
y Windows
#### La sintaxis para hacer un ping simple es ping dirección IP o URL del sitio web
Veamos esto en acción en la captura de pantalla a continuación.


Aquí estamos haciendo ping a un dispositivo que tiene la dirección privada 192.168.1.254
#### !!! Ping nos informa que hemos enviado seis paquetes ICMP
##### todos los cuales fueron recibidos con un tiempo promedio de 4,16 milisegundos.

Ahora, en esta tarea, harás lo mismo: intentarás hacer ping a la dirección "8.8.8.8" del sitio web desplegable
Si haces ping a la dirección correcta, se mostrará una bandera para responder a la siguiente pregunta.



### LAN: Local Area Network Topologies

#### A lo largo de los años, se han experimentado e implementado diversos diseños de red.
#### !!! En el ámbito de las redes, cuando hablamos de "topología", nos referimos al diseño o la apariencia de la red en cuestión

analizaremos las ventajas y desventajas de estas topologías.


#### STAR: 

La premisa principal de una topología en estrella es que
#### los dispositivos se conectan individualmente a través de un dispositivo de red central
como un conmutador o un concentrador

#### Switchs and Hubs

##### Esta topología es la más común hoy en día debido a su fiabilidad y escalabilidad, a pesar de su coste.
#### !!!En esta topología, cualquier información que se envíe a un dispositivo se transmite a través del dispositivo central al que está conectado

A continuación, analizaremos algunas de las ventajas y desventajas de esta topología:
Debido a que esta topología requiere más cableado y la compra de equipos de red específicos
##### resulta más costosa que las demás. Sin embargo, a pesar del costo adicional, ofrece ventajas significativas
##### Por ejemplo, es mucho más escalable, lo que facilita la incorporación de dispositivos a medida que aumenta la demanda de la red.

#### Desafortunadamente, cuanto más grande es la red, mayor es el mantenimiento necesario para mantenerla operativa
##### Esta mayor dependencia del mantenimiento también puede dificultar considerablemente la resolución de problemas
Además, la topología en estrella sigue siendo propensa a fallos, aunque en menor medida
#### Por ejemplo, si falla el hardware centralizado que conecta los dispositivos, estos dejarán de poder enviar y recibir datos
Afortunadamente, estos dispositivos de hardware centralizados suelen ser robustos


#### Bus Topology: backbone cable

#### se basa en un único cable, conocido como cable troncal
Esta topología es similar a la hoja de un árbol, ya que los dispositivos (las hojas) parten de las ramas de este cable.

#### Dado que todos los datos destinados a cada dispositivo viajan por el mismo cable
##### !!! es muy probable que la red se ralentice y se sature si los dispositivos dentro de la topología solicitan datos simultáneamente

Esta saturación también dificulta enormemente la resolución de problemas
ya que resulta complicado identificar qué dispositivo está experimentando problemas cuando todos los datos viajan por la misma ruta

Sin embargo, dicho esto, las topologías de bus son una de las topologías más fáciles y rentables de configurar debido a sus gastos
como el cableado o el equipo de red dedicado que se utiliza para conectar estos dispositivos.

Por último, otra desventaja de la topología de bus es la escasa redundancia que ofrece en caso de fallos
Esto se debe a que existe un único punto de fallo en el cable troncal
Si este cable se rompe, los dispositivos dejan de recibir y transmitir datos a través del bus.



#### Ring: token

#### Dispositivos como ordenadores se conectan directamente entre sí para formar un bucle
lo que significa que se requiere poco cableado y hay menor dependencia de hardware específico, a diferencia de la topología de estrella

#### !!! Una topología de anillo funciona enviando datos a través del bucle hasta que llegan al dispositivo de destino
##### utilizando otros dispositivos a lo largo del bucle para reenviarlos

#####  Curiosamente, en esta topología, un dispositivo solo enviará los datos recibidos de otro dispositivo si no tiene datos que enviar
##### Si el dispositivo tiene datos para enviar, los enviará primero antes de enviar los datos de otro dispositivo.

#### Dado que los datos solo pueden viajar en una dirección a través de esta topología, es relativamente fácil solucionar cualquier problema que surja
##### Sin embargo, esto tiene sus desventajas, ya que no es una forma eficiente de que los datos viajen a través de una red
##### puesto que pueden tener que pasar por varios dispositivos antes de llegar al dispositivo de destino.

Por último, las topologías en anillo son menos propensas a los cuellos de botella
como ocurre en una topología en bus, ya que no se transportan grandes cantidades de tráfico a través de la red simultáneamente
Sin embargo, el diseño de esta topología implica que un fallo
como un cable cortado o un dispositivo averiado, provocará la interrupción de toda la red


#### Switch vs hubs/repeaters

##### son dispositivos específicos dentro de una red, diseñados para agregar múltiples dispositivos
como computadoras, impresoras o cualquier otro dispositivo con capacidad de red mediante Ethernet
##### Estos dispositivos se conectan a los puertos del conmutador
#### Los conmutadores se encuentran generalmente en redes grandes, como empresas, escuelas o redes de tamaño similar, donde hay muchos dispositivos que conectar
#### !!! Los conmutadores pueden conectar una gran cantidad de dispositivos gracias a sus puertos de 4, 8, 16, 24, 32 y 64 pines.

Los conmutadores son mucho más eficientes que sus contrapartes menos eficientes (concentradores/repetidores

#### !!! Los conmutadores registran qué dispositivo está conectado a cada puerto
De esta manera, cuando reciben un paquete, en lugar de reenviarlo a todos los puertos como lo haría un concentrador
##### lo envían directamente al destino previsto, reduciendo así el tráfico de red.

```
			Internet
				|
		   --Router1--
switch1					switch2
| | | | 				| | | | 
| | | |					| | | | 
d1 d2 d3 				d1 d2 d3
```

#### Tanto los conmutadores como los enrutadores pueden conectarse entre sí
##### Esta capacidad aumenta la redundancia (la fiabilidad) de la red al añadir múltiples rutas para la transmisión de datos
Si una ruta falla, se puede utilizar otra
Si bien esto puede reducir el rendimiento general de la red
ya que los paquetes tardan más en viajar
no hay tiempo de inactividad, un pequeño precio a pagar si se compara con la alternativa



#### Router

#### !!! conectar redes y transmitir datos entre ellas
Lo hace mediante el enrutamiento (de ahí su nombre).

##### El enrutamiento es el proceso mediante el cual los datos viajan a través de redes
#### Consiste en crear una ruta entre las redes para que estos datos puedan entregarse correctamente

##### !!! El enrutamiento resulta útil cuando los dispositivos están conectados por múltiples rutas
como se muestra en el diagrama de ejemplo a continuación.

#### !!! Aprende sobre las diferentes formas en que son vulnerables a ser vulneradas. Rompe las topologías LAN para recuperar la bandera



### Deficiencias de las Topologias

#### 1. Topología de anillo
##### !!! Los paquetes de datos viajan de un dispositivo a otro hasta que llegan a su destino.
##### si un dispositivo falla o un cable se rompe, los datos dejarán de transmitirse.
##### Al fallar un cable, los paquetes ya no pueden viajar por la red y ningún dispositivo puede comunicarse entre sí.


#### 2. En una topología de bus
##### todos los dispositivos están conectados a un único cable, a menudo denominado cable troncal.
##### !!! Los datos se envían en ambas direcciones, izquierda y derecha, a través de la red troncal hasta que se alcanza el destino del paquete.
##### Un defecto importante en la topología de bus es que no puede manejar una gran cantidad de datos.
##### En el siguiente paso, envía tantos paquetes como puedas lo más rápido posible para intentar colapsar la red.


#### 3. star
##### En una topología de estrella, todos los dispositivos se conectan mediante su propio cable a un conmutador/concentrador central.
##### Cada paquete se envía a través de este conmutador, lo que significa que si el conmutador falla, la red dejará de funcionar.




### Subredes

pueden ser de todo tipo y tamaño, desde pequeñas hasta grandes
#### El subneteo consiste en dividir una red en subredes más pequeñas
##### todos quieren un trozo. El subneteo consiste en decidir quién recibe qué porción y reservar esa porción de este pastel metafórico.

ejemplo una empresa; tendrá diferentes departamentos como:

    Contabilidad
    Finanzas
    Recursos humanos

```
	Internet
	router
	switch
dep1 dep2 dep3	
```    

Si bien en la vida real sabemos a qué departamento enviar la información
las redes también necesitan saberlo
Los administradores de red utilizan el subneteo para categorizar y asignar partes específicas de la red
reflejando así esta necesidad.

#### !!! El subneteo se logra dividiendo la cantidad de hosts que pueden caber dentro de la red
##### representada por un número llamado máscara de subred

#### una dirección IP se compone de cuatro secciones llamadas octetos
#### !!! Lo mismo ocurre con una máscara de subred, que también se representa como un número de cuatro bytes (32 bits), que va de 0 a 255 (0-255).

Las subredes utilizan direcciones IP de tres maneras diferentes:

##### network address: Identifique la dirección de red
##### host address: Identifique la dirección del host
##### gateway: Identificar la puerta de enlace predeterminada


#### 1. Network Address
##### Esta dirección identifica el inicio de la red propiamente dicha y se utiliza para identificar la existencia de una red.
Por ejemplo, un dispositivo con la dirección IP 192.168.1.100 estará en la red identificada por 192.168.1.0.

#### 2. Host Address
##### Una dirección IP se utiliza aquí para identificar un dispositivo en la subred.
Por ejemplo, un dispositivo tendrá la dirección de red 192.168.1.1.

#### 3. Default Gateway
##### La dirección de puerta de enlace predeterminada es una dirección especial asignada a un dispositivo en la red que es capaz de enviar información a otra red.
Cualquier dato que deba enviarse a un dispositivo que no esté en la misma red
(es decir, que no esté en 192.168.1.0) se enviará a dicho dispositivo.
Estos dispositivos pueden usar cualquier dirección de host, pero generalmente usan la primera o la última dirección de host de la red (.1 o .254).
 
Ahora bien, en redes pequeñas como las domésticas, estarás en una sola subred
ya que es poco probable que necesites conectar más de 254 dispositivos a la vez.

Sin embargo, en lugares como empresas y oficinas habrá muchos más de estos dispositivos (ordenadores, impresoras, cámaras y sensores), donde se produce el subnetting.


El subneteo ofrece una serie de ventajas, entre las que se incluyen:

Eficiencia
Seguridad
Control total

Más adelante exploraremos con detalle cómo el subnetting proporciona estos beneficios;
sin embargo, por ahora, solo necesitamos comprender el aspecto de seguridad
Tomemos como ejemplo una cafetería típica.
Esta cafetería tendrá dos redes:

Uno para empleados, cajas registradoras y otros dispositivos para las instalaciones.
Uno para que el público en general lo use como punto de acceso Wi-Fi.

#### El subneteo permite separar estos dos casos de uso entre sí, al tiempo que se disfrutan de las ventajas de la conexión a redes más grandes como Internet.


##### How many bits are in a subnet mask? 32
##### 0-255 What is the range of a section (octet) of a subnet mask?




### ARP: Address Resolution Protocol

#### Los dispositivos pueden tener dos identificadores
##### dirección MAC y una dirección IP
##### Protocolo de Resolución de Direcciones, es la tecnología responsable de permitir que los dispositivos se identifiquen en una red.

#### ARP permite que un dispositivo asocie su dirección MAC con una dirección IP en la red
##### Cada dispositivo en la red mantiene un registro de las direcciones MAC asociadas con otros dispositivos.

##### Cuando un dispositivo desea comunicarse con otro, envía una difusión/broadcast a toda la red en busca del dispositivo específico
##### Los dispositivos pueden usar ARP para encontrar la dirección MAC (y, por lo tanto, el identificador físico) de otro dispositivo para comunicarse.


### Funcionamiento ARP

#### !!! Cada dispositivo dentro de una red tiene un registro para almacenar información, que se denomina caché
##### En el contexto de ARP, esta caché almacena los identificadores de otros dispositivos en la red.

#### !!! Para asociar estos dos identificadores (dirección IP y dirección MAC), ARP envía dos tipos de mensajes:

##### ARP request: Solicitud
##### ARP reply: Respuesta

#### !!! Cuando se envía una solicitud ARP, se transmite un mensaje a través de la red a otros dispositivos preguntando
#### !!! "¿Cuál es la dirección MAC propietaria de esta dirección IP?".
Al recibir este mensaje, los demás dispositivos solo responderán si son propietarios de dicha dirección IP y enviarán una respuesta ARP con su dirección MAC.

#### El dispositivo solicitante puede entonces recordar esta correspondencia y almacenarla en su caché ARP para su uso futuro


```
______ d2
|
d1 ___ d3
|_____ d4
```




### DHCP: Dynamic Host Configuration Protocol

##### Las direcciones IP se pueden asignar manualmente, introduciéndolas físicamente en un dispositivo, o automáticamente
##### , y lo más común es mediante un servidor DHCP (Protocolo de Configuración Dinámica de Host).

##### Cuando un dispositivo se conecta a una red, si aún no se le ha asignado una dirección IP manualmente
#### !!! envía una solicitud (DHCP Discover) para comprobar si hay algún servidor DHCP en la red
#### !!! El servidor DHCP responde con una dirección IP que el dispositivo puede usar (DHCP Offer).
##### El dispositivo envía una respuesta confirmando que desea la dirección IP ofrecida (DHCP Request)
finalmente, el servidor DHCP envía una respuesta confirmando que el proceso se ha completado
##### y que el dispositivo puede empezar a usar la dirección IP (DHCP ACK).

#### Discover (server), offer (device), request, ACK (device)







## 3. OSI Model




## 4. Packets & Frames



## 5. Extending your Network





# Web Works



## 1. DNS In Detail: Domain Name System

#### DNS (Sistema de Nombres de Dominio) nos proporciona una forma sencilla de comunicarnos con dispositivos en internet sin tener que recordar números complejos.
Al igual que cada casa tiene una dirección única para recibir correo directamente
##### cada ordenador en internet tiene su propia dirección única para comunicarse con ella, llamada dirección IP
#### Una dirección IP tiene el siguiente formato: 104.26.10.229
##### uatro conjuntos de dígitos del 0 al 255 separados por un punto
Cuando queremos visitar un sitio web, no es muy práctico recordar este conjunto de números tan complicado
y ahí es donde el DNS puede ayudarnos
Así, en lugar de recordar 104.26.10.229, podemos recordar tryhackme.com.



### Jerarquía

#### Root Domain, Top-Level y Second-Level

```
			. (dot)
.edu	.com	.gob	.mil	
Mit		TryHack  USA	Army
```


#### TLD (Top Level Domain)
es la parte más a la derecha de un nombre de dominio
##### Existen dos tipos de TLD: gTLD (dominio de nivel superior genérico) y ccTLD (dominio de nivel superior de código de país).
Históricamente, un gTLD se utilizaba para indicar al usuario la finalidad del nombre de dominio; por ejemplo, .com se usaba con fines comerciales, .org para organizaciones, .edu para educación y .gov para gobierno
##### Un ccTLD se utilizaba con fines geográficos; por ejemplo, . para sitios web en Canadá, .co.uk para sitios web en el Reino Unido, etc
##### Debido a esta demanda, existe una gran cantidad de nuevos gTLD, como .online, .club, .website, .biz y muchos más
Para ver una lista completa de más de 2000 TLD
https://data.iana.org/TLD/tlds-alpha-by-domain.txt


#### Second-Level Domain
##### !!! Tomando como ejemplo tryhackme.com, la parte .com es el dominio de nivel superior (TLD) y tryhackme es el dominio de segundo nivel
##### Al registrar un nombre de dominio, el dominio de segundo nivel está limitado a 63 caracteres más el TLD
##### solo puede usar caracteres del 0 al 9 y guiones
(no puede comenzar ni terminar con guiones ni tener guiones consecutivos).


#### Subdominio
##### !!! se ubica a la izquierda del dominio de segundo nivel, separado por un punto
##### por ejemplo, en el nombre admin.tryhackme.com, la parte "admin" es el subdominio
Un nombre de subdominio tiene las mismas restricciones de creación que un dominio de segundo nivel:
##### está limitado a 63 caracteres y solo puede usar los números del 0 al 9
y guiones (no puede comenzar ni terminar con guiones, ni tener guiones consecutivos
##### Puedes usar varios subdominios separados por puntos para crear nombres más largos, como jupiter.servers.tryhackme.com
###### Sin embargo, la longitud debe mantenerse en 253 caracteres o menos
##### No hay límite en la cantidad de subdominios que puedes crear para tu nombre de dominio.



### DNS Record Types

#### El DNS no se limita solo a los sitios web, y existen varios tipos de registros DNS

#### 1. Record: Estos registros se resuelven en direcciones IPv4, por ejemplo 104.26.10.229.

#### 2. Record AAAA: Estos registros se resuelven en direcciones IPv6, por ejemplo 2606:4700:20::681a:be5

#### 3. Registro CNAME: Estos registros se resuelven a otro nombre de dominio; por ejemplo, la tienda en línea de TryHackMe tiene el subdominio store.tryhackme.com que devuelve un registro CNAME shops.shopify.com (se abre en una pestaña nueva).
A continuación, se realizaría otra solicitud DNS a shops.shopify.com (se abre en una pestaña nueva) para determinar la dirección IP.

#### 4. MX Record: Estos registros se resuelven a la dirección de los servidores que gestionan el correo electrónico del dominio que estás consultando
Por ejemplo, la respuesta de un registro MX para tryhackme.com sería algo así como alt1.aspmx.l.google.com (se abre en una pestaña nueva). 
##### Estos registros también incluyen un indicador de prioridad
#### Esto le indica al cliente en qué orden debe intentar conectarse a los servidores
lo cual es ideal si el servidor principal falla y es necesario enviar el correo electrónico a un servidor de respaldo.

#### 5. TXT Record: Los registros TXT son campos de texto libre donde se puede almacenar cualquier tipo de datos textuales
Tienen múltiples usos, pero algunos de los más comunes son listar los servidores autorizados para enviar correos electrónicos en nombre del dominio
(lo que ayuda a combatir el spam y el correo electrónico falsificado).
También se pueden usar para verificar la propiedad del nombre de dominio al registrarse en servicios de terceros.

 Aquí hay algunos ejemplos:

_acme-challenge.example.com TXT "token_value_here"
@ TXT "v=spf1 ip4:192.0.2.0/24 include:_spf.google.com include:amazonses.com ~all"
_dmarc.example.com TXT "v=DMARC1; p=reject; rua=mailto:dmarc-reports@example.com; adkim=s; aspf=s; pct=100"
  @ TXT "MS=ms12345678"



### Request: DNS Request

1. Cuando solicitas un nombre de dominio, tu ordenador primero comprueba su caché local
para ver si has consultado la dirección recientemente;
si no es así, se realizará una solicitud a tu servidor DNS recursivo.

2. Normalmente, tu proveedor de servicios de internet (ISP) te proporciona un servidor DNS recursivo, pero también puedes elegir el tuyo
##### Este servidor cuenta con una caché local de nombres de dominio consultados recientemente
##### Si encuentra un resultado localmente, lo envía a tu ordenador y la consulta finaliza aquí
(esto es habitual para servicios populares y muy solicitados como Google, Facebook y Twitter).
Si no encuentra la respuesta localmente, se inicia una búsqueda en los servidores DNS raíz de internet.

3. Los servidores raíz actúan como la columna vertebral del DNS en internet
#### su función es redirigirte al servidor de dominio de nivel superior (TLD) correcto, según tu solicitud
Por ejemplo, si solicitas www.tryhackme.com, el servidor raíz reconocerá el dominio de nivel superior .com
te dirigirá al servidor TLD correspondiente que gestiona las direcciones .com.

4. El servidor TLD almacena la información sobre dónde encontrar el servidor autoritativo para responder a la solicitud DNS
#### El servidor autoritativo también se conoce como servidor de nombres del dominio
Por ejemplo, los servidores de nombres de tryhackme.com son kip.ns.cloudflare.com
(se abre en una pestaña nueva) y uma.ns.cloudflare.com (se abre en una pestaña nueva).
Es común encontrar varios servidores de nombres para un dominio, que actúan como respaldo en caso de que uno falle.

5. Un servidor DNS autoritativo es el responsable de almacenar los registros DNS de un dominio específico y donde se realizan las actualizaciones de dichos registros
Según el tipo de registro, este se envía al servidor DNS recursivo, donde se almacena en caché una copia local para futuras solicitudes y se reenvía al cliente que realizó la solicitud original
#### Todos los registros DNS incluyen un valor de Tiempo de Vida (TTL).
##### Este valor, expresado en segundos, indica el tiempo que la respuesta debe conservarse localmente hasta que sea necesario consultarla nuevamente
El almacenamiento en caché evita tener que realizar una solicitud DNS cada vez que se comunica con un servidor.


#### Recursive DNS Server, root DNS servers, TLD server, authoritative DNS server 

```

device request
|	|
|  recursive dns
|	|
|  root dns
|	|
|_authoritative dns

device

```


#### Comando n$lookup




## 2. HTTP/s in Detail: HyperText Transfer Protocol/secure

##### protocolo que se utiliza al visitar un sitio web

#### HTTP es el conjunto de reglas que se utilizan para comunicarse con los servidores web
##### transmitir datos de páginas web, ya sean HTML, imágenes, vídeos, etc.


HTTPS? (Protocolo seguro de transferencia de hipertexto)
#### versión segura de HTTP. Los datos HTTPS están cifrados
por lo que no solo impide que otras personas vean los datos que usted recibe y envía
##### sino que también le garantiza que se está comunicando con el servidor web correcto y no con algo que lo suplanta.



### Contenido de la Solicitud (recurs) y Respuesta (html))

#### Cuando accedemos a un sitio web, nuestro navegador necesita solicitar a un servidor web recursos como HTML e imágenes, y descargar las respuestas

#### debemos indicarle al navegador cómo y dónde acceder a estos recursos; aquí es donde las URL resultan útiles.


#### URL (Localizador Uniforme de Recursos)
##### URL es principalmente una instrucción sobre cómo acceder a un recurso en internet
##### una URL con todas sus características (no todas las características se utilizan en cada solicitud).

scheme		  host/domain		path		fragm
http: user:pass@tryhack.com:80/view-rom?id=1#task3
		user			  port		  querystr


#### 1. Esquema: Esto indica qué protocolo usar para acceder al recurso, como HTTPS. (Protocolo de transferencia de archivos).

#### 2. Usuario: Algunos servicios requieren autenticación para iniciar sesión; puedes introducir un nombre de usuario y una contraseña en la URL para acceder.

#### 3. Host: El nombre de dominio o la dirección IP del servidor al que desea acceder.

#### 4. Puerto: El puerto al que te vas a conectar, normalmente el 80 para HTTP y el 443 para HTTPS, pero puede alojarse en cualquier puerto entre 1 y 65535.

#### 5. Ruta: El nombre o la ubicación del archivo del recurso al que intenta acceder.

#### 6. Cadena de consulta: Información adicional que se puede enviar a la ruta solicitada. Por ejemplo, /blog?id=1 le indicaría a la ruta del blog que desea recibir el artículo con el ID 1.

#### 7. Fragmento: Se trata de una referencia a una ubicación específica en la página solicitada. Se utiliza habitualmente en páginas con contenido extenso y puede tener un enlace directo a una parte concreta de la página, de modo que el usuario la visualiza en cuanto accede a ella.


Hacer una solicitud

Es posible realizar una solicitud a un servidor web con una sola línea GET / HTTP/1.1

```
metodo protocolo solicitud (get http/1.1)
```

#### !!! Pero para una experiencia web mucho más completa, también necesitarás enviar otros datos

#### Estos datos adicionales se envían en lo que se denomina encabezados, que contienen información extra para el servidor web con el que te comunicas


### !!! Ej. Request

```
GET / HTTP/1.1

Host: tryhackme.com
User-Agent: Mozilla/5.0 Firefox/87.0
Referer: https://tryhackme.com/

```

Para desglosar cada línea de esta solicitud:

Línea 1: Esta solicitud envía el método GET (más información sobre esto en la tarea Métodos HTTP), solicita la página de inicio con / y le indica al servidor web que estamos utilizando la versión 1.1 del protocolo HTTP.

Línea 2: Le indicamos al servidor web que queremos el sitio web tryhackme.com

Línea 3: Le indicamos al servidor web que estamos utilizando el navegador Firefox versión 87.

Línea 4: Le estamos indicando al servidor web que la página web que nos remitió a esta es https://tryhackme.com

#### Línea 5: Las solicitudes HTTP siempre terminan con una línea en blanco para informar al servidor web de que la solicitud ha finalizado.



### !!! Ej. Response


```
HTTP/1.1 200 OK

Server: nginx/1.15.8
Date: Fri, 09 Apr 2021 13:34:03 GMT
Content-Type: text/html
Content-Length: 98


<html>
<head>
    <title>TryHackMe</title>
</head>
<body>
    Welcome To TryHackMe.com
</body>
</html>

```


Línea 1: HTTP 1.1 es la versión del protocolo HTTP que está utilizando el servidor, seguida del código de estado HTTP, en este caso "200 OK", que nos indica que la solicitud se ha completado correctamente.

Línea 2: Esto nos indica el software del servidor web y el número de versión.

Línea 3: La fecha, hora y zona horaria actuales del servidor web.

##### Línea 4: El encabezado Content-Type le indica al cliente qué tipo de información se va a enviar, como HTML, imágenes, videos, pdf, xml.

Línea 5: Content-Length le indica al cliente la longitud de la respuesta, de esta manera podemos confirmar que no faltan datos.

Línea 6: La respuesta HTTP contiene una línea en blanco para confirmar el final de la respuesta HTTP.

Líneas 7-14: La información que se ha solicitado, en este caso la página de inicio.



### HTTP Methods


#### !!! Los métodos son una forma que tiene el cliente de mostrar la acción que pretende realizar al hacer una solicitud HTTP
Existen muchos métodos HTTP, pero cubriremos los más comunes
aunque principalmente trabajarás con los métodos GET y POST.


##### GET Request: Esto se utiliza para obtener información de un servidor web.

##### POST Request: Esto se utiliza para obtener información de un servidor web.

##### PUT Request: Esto se utiliza para enviar datos a un servidor web para actualizar la información.

##### DELETE Request: Esto se utiliza para eliminar información/registros de un servidor web.



### HTTP Status Code

#### cuando un servidor HTTP responde, la primera línea siempre contiene un código de estado que informa al cliente del resultado de su solicitud y también, potencialmente, de cómo gestionarla
##### Estos códigos de estado se pueden dividir en 5 rangos diferentes:

#### 1. 100-199 - Respuesta informativa. Estos códigos se envían para informar al cliente que la primera parte de su solicitud ha sido aceptada y que debe continuar enviando el resto. Estos códigos ya no son muy comunes.

#### 2. 200-299 - Éxito. Este rango de códigos de estado se utiliza para informar al cliente que su solicitud fue exitosa.

#### 3. 300-399 - Redirección. Se utilizan para redirigir la solicitud del cliente a otro recurso. Esto puede ser a una página web diferente o a un sitio web completamente distinto.

#### 4. 400-499 - Errores del cliente. Se utilizan para informar al cliente de que hubo un error en su solicitud.

#### 5. 500-599 - Errores del servidor. Este código está reservado para errores que ocurren en el servidor y generalmente indica un problema bastante grave con el servidor que maneja la solicitud.



#### Part HTTP Status Codes:


200 - OK La solicitud se completó con éxito.
201 - Creado Se ha creado un recurso (por ejemplo, un nuevo usuario o una nueva entrada de blog).
301 - Movido permanentemente. Esto redirige el navegador del cliente a una nueva página web o le indica a los motores de búsqueda que la página se ha movido a otro lugar y que deben buscar allí en su lugar.
302 - Encontrado Similar a la redirección permanente anterior, pero como su nombre indica, este es solo un cambio temporal y puede volver a cambiar en un futuro próximo.
400 - Solicitud incorrecta. Este código indica al navegador que la solicitud fue incorrecta o que faltaba algún dato. A veces, se utiliza si el recurso del servidor web solicitado requiere un parámetro específico que el cliente no envió.
401 - No autorizado. Actualmente no tiene permiso para ver este recurso hasta que se haya autorizado con la aplicación web, generalmente con un nombre de usuario y una contraseña.
403 - Prohibido. No tienes permiso para ver este recurso, tanto si has iniciado sesión como si no.
405 - Método no permitido El recurso no permite esta solicitud de método, por ejemplo, usted envía una solicitud GET al recurso /create-account cuando esperaba una solicitud POST en su lugar.
404 - Página no encontrada. La página/recurso que solicitó no existe.
500 - Error interno del servicio El servidor ha encontrado algún tipo de error con su solicitud que no sabe cómo manejar correctamente.
503 - Servicio no disponible. Este servidor no puede procesar su solicitud, ya que está sobrecargado o fuera de servicio por mantenimiento.



### Headers

#### Las cabeceras son datos adicionales que puedes enviar al servidor web al realizar solicitudes.

Aunque no se requieren encabezados estrictamente al hacer una solicitud
Si lo solicita, le resultará difícil visualizar correctamente un sitio web.


#### Encabezados de solicitud comunes

Estos son encabezados que se envían desde el cliente (normalmente su navegador) al servidor.

#### 1. Host/Servidor: Algunos servidores web alojan varios sitios web, por lo que al proporcionar los encabezados de host puedes indicarle cuál necesitas; de lo contrario, simplemente recibirás el sitio web predeterminado del servidor.

#### 2. User-Agent: Este es el software y la versión de su navegador. Indicarle al servidor web qué software de navegador utiliza le ayuda a formatear el sitio web correctamente para su navegador, y también que algunos elementos de HTML, JavaScript y CSS solo están disponibles en ciertos navegadores.

#### 3. Longitud del contenido: Al enviar datos a un servidor web, por ejemplo, a través de un formulario, la longitud del contenido le indica al servidor la cantidad de datos que debe esperar en la solicitud web. De esta manera, el servidor puede asegurarse de que no falte ningún dato.

#### 4. Accept-Encoding: Indica al servidor web qué tipos de métodos de compresión admite el navegador para que los datos puedan reducirse para su transmisión por Internet.

#### 5. Cookie: Datos enviados al servidor para ayudar a recordar su información (consulte la tarea de cookies para obtener más información).


#### Encabezados de respuesta comunes

Estos son los encabezados que el servidor devuelve al cliente después de una solicitud.

#### 1. Set-Cookie: Información que se almacena y que se envía de vuelta al servidor web en cada solicitud (consulte la tarea de cookies para obtener más información).

#### 2. Cache-Control: Indica cuánto tiempo se debe almacenar el contenido de la respuesta en la caché del navegador antes de volver a solicitarlo.

#### 3. Content-Type: Indica al cliente qué tipo de datos se devuelven, por ejemplo, HTML, CSS, JavaScript, imágenes, PDF, vídeo, etc. Mediante el encabezado Content-Type, el navegador sabe cómo procesar los datos.

#### 4. Content-Encoding: ¿Qué método se ha utilizado para comprimir los datos y reducir su tamaño al enviarlos por internet?



#### Cookies

#### !!! pequeños archivos de datos que se almacenan en tu ordenador
##### Las cookies se guardan cuando recibes una cabecera "Set-Cookie" de un servidor web
##### A partir de entonces, en cada solicitud posterior, enviarás los datos de la cookie de vuelta al servidor web
Dado que no guardan estado (no registran tus solicitudes anteriores)
las cookies se pueden usar para recordarle al servidor web quién eres
algunas configuraciones personales para el sitio web o si ya has visitado el sitio anteriormente

Las cookies se pueden usar para muchos fines, pero su uso más común es para la autenticación de sitios web
sino un token (un código secreto único que no es fácil de adivinar).

#### Puedes ver fácilmente qué cookies envía tu navegador a un sitio web usando las herramientas para desarrolladores

#### Una vez abiertas las herramientas para desarrolladores, haz clic en la pestaña "Red".
#### !!! Esta pestaña mostrará una lista de todos los recursos que tu navegador ha solicitado
#### !!! Puedes hacer clic en cada uno para ver un desglose detallado de la solicitud y la respuesta
#### !!! Si tu navegador envió una cookie, la verás en la pestaña "Cookies" de la solicitud



## 3. How Websites Work





## 4. All together






# Attacks and Defenses


## 1. CIA Triad

### La tríada de la CIA
#### Comprenda la tríada de la CIA y cómo moldea la mentalidad en materia de ciberseguridad.

ciberseguridad protege los sistemas, las redes y las aplicaciones de los ataques
#### qué protege la ciberseguridad dentro del mundo digital?
La ciberseguridad se centra en proteger tres aspectos clave


#### 1. Comprender los pilares de la ciberseguridad
#### 2. Comprender el propósito de la confidencialidad, y disponibilidad
#### 3. Reconocer la confidencialidad, la integridad y la disponibilidad en situaciones sencillas.
#### 4. Tomar decisiones para preservar estos aspectos fundamentales de la ciberseguridad.



### Triada

#### En el pasado, la mayor parte de la información se almacenaba en papel. Hoy en día, esa misma información se almacena como datos digitales en sistemas y se transmite a través de redes
##### Sin las medidas de seguridad adecuadas, estos datos digitales pueden sufrir graves consecuencias
Pueden quedar expuestos a personas no autorizadas, modificarse sin permiso o no estar disponibles cuando más se necesitan
Por lo tanto, proteger estos datos digitales se ha convertido en un requisito fundamental para gobiernos, organizaciones e individuos

la seguridad no se limita a detener los ataques o a contar con herramientas de seguridad.
##### En ciberseguridad, estar seguro implica garantizar condiciones específicas para los datos digitales
#### Estas condiciones son los aspectos clave en torno a los cuales gira la seguridad.

En ciberseguridad, estar seguro implica garantizar condiciones específicas para los datos digitales.
Estas condiciones son los aspectos clave en torno a los cuales gira la seguridad.

#### 1. Confidencialidad
#### 2. Integridad
#### 3. Disponibilidad

En conjunto, estos tres principios explican qué protege realmente la ciberseguridad. Estos principios se conocen como los 
La tríada. Prácticamente todo lo que te encuentres en tu trayectoria en ciberseguridad girará en torno a ella

#### !!! Deberás defender o atacar los datos digitales para garantizar que estos pilares permanezcan intactos.



### Confidencialidad

#### 1. !!! La confidencialidad garantiza que solo las personas autorizadas puedan acceder a los datos sensibles.
##### Si no se mantiene la confidencialidad, personas no autorizadas pueden acceder a los datos, lo que puede ocasionar pérdidas económicas, violaciones de la privacidad o consecuencias legales. 

Imagina que estás teniendo una conversación privada con un amigo sobre un asunto personal, y una persona desconocida escucha deliberadamente y luego usa esa información para manipularte.
En esta situación, la información que querías mantener privada fue accedida por alguien que no tenía derecho a escucharla.
Esto perjudica directamente la confidencialidad.
##### En estos casos, para garantizar la confidencialidad en el futuro, puedes optar por tener estas conversaciones en un lugar seguro y estar atento a tu entorno.

Ahora, veamos un ejemplo del mundo digital.
Imagina que estás en una cafetería e inicias sesión en tu cuenta de redes sociales usando la red pública del local.
Después de unos minutos, tu sesión se cierra repentinamente y ya no puedes acceder a tu cuenta porque alguien interceptó tus credenciales desde dentro de la red mientras intentabas iniciar sesión.
Este es otro ejemplo de cómo se vulnera la confidencialidad.
#### Para garantizar la confidencialidad en el mundo digital, se emplean procesos como el cifrado y los controles de acceso.
Puede que estos términos te resulten desconocidos ahora, lo cual es normal, ya que aprenderás todo esto durante tu formación en ciberseguridad.


### Integridad

#### 2. !!! La integridad garantiza que personas no autorizadas no modifiquen los datos.
Sin integridad, los datos pueden alterarse y dejar de ser fiables.
Los cambios no autorizados en los datos pueden tener consecuencias peligrosas.

Imagina que tu profesor te pone una buena nota en el examen, y luego alguien la modifica antes de que se envíe a la autoridad examinadora.
Esto compromete la integridad de la calificación.
Para garantizar la integridad en el futuro, tu profesor podría empezar a anotar las notas en una hoja aparte y verificarlas antes de la entrega final a la autoridad examinadora.

Ahora, consideremos un ejemplo del mundo digital.
Supongamos que usted realiza una transferencia bancaria a una cuenta utilizando su dispositivo móvil.
Antes de que la transacción se complete, alguien la intercepta y modifica la información de la cuenta receptora.
Esto provoca que el dinero se transfiera a una cuenta equivocada, lo que también compromete la integridad de la cuenta.
Existen diversas técnicas para garantizar la integridad en el mundo digital, las cuales aprenderá durante su formación en ciberseguridad.

La siguiente tabla enumera algunos ejemplos de situaciones y si se logra la integridad:



#### Disponibilidad

#### 1. !!! La disponibilidad garantiza que los datos y servicios estén disponibles para los usuarios autorizados cuando los necesiten.
Si bien constituye el tercer y último pilar de la tríada CIA, no es menos importante que los otros dos.
#### !!! La mayoría de las empresas dependen en gran medida de sus servicios digitales, y si estos dejan de estar disponibles, se interrumpe la actividad comercial, lo que les ocasiona enormes pérdidas.
##### Incluso un breve periodo de inactividad puede tener graves consecuencias para las empresas y los usuarios.

Imagina que depositas tu dinero en un banco que lo mantiene muy seguro, pero el banco cierra el día que lo necesitas debido a un corte de luz.
Ahora, aunque tu dinero esté en un lugar seguro, si tú, como propietario, no puedes acceder a él, es inútil.
Aquí es donde la disponibilidad cobra importancia.
Por lo tanto, para garantizar la disponibilidad en un caso así, es probable que tu banco utilice un generador de energía alternativo para mantener los servicios en funcionamiento incluso si falla el suministro eléctrico principal.

En el mundo digital, muchos ciberataques afectan la disponibilidad.
#### Por ejemplo, los atacantes envían una gran cantidad de solicitudes a un sitio web que no puede gestionarlas simultáneamente, lo que provoca su caída y las consiguientes pérdidas para el negocio.
Si bien no se filtran ni modifican datos, la interrupción de la disponibilidad genera grandes pérdidas.
En estos casos, los sitios web implementan medidas para gestionar el tráfico y bloquear las solicitudes cuando se supera un determinado umbral, garantizando así su disponibilidad.

La tabla a continuación enumera algunos ejemplos de situaciones y si se logra la disponibilidad.


### CIA Triad: una mentalidad de seguridad propia de los profesionales de la ciberseguridad
#### Cuando ocurre un incidente de seguridad, a menudo se explica en términos de lo que se vio afectado

Los profesionales de la seguridad generalmente lo hacen formulando preguntas como:

#### 1. ¿Se expusieron datos confidenciales a personas no autorizadas?

#### 2. ¿Se estaban modificando los datos sin permiso?

#### 3. ¿Los sistemas o servicios no estuvieron disponibles para los usuarios cuando los necesitaban?

#### Comprender claramente cada componente de la tríada de la CIA permite evaluar el impacto de cualquier incidente y decidir la respuesta adecuada.


En este ejercicio, se te presentan nueve incidentes de seguridad diferentes.
Debes leerlos detenidamente, uno por uno.
Después, debes determinar qué parte de la tríada de la CIA se ve afectada por ellos.
Arrastra y suelta los incidentes en el área que más afecten.



#### Confidentiality 
Garantizar que la información digital no esté disponible para personas no autorizadas.

#### Integrity
Garantizar que la información digital no se modifique sin permiso.

#### Availability
Garantizar que la información digital esté disponible cuando se necesite.
    



## 2. Cryptography Concepts

#### cómo los atacantes intentan vulnerar la triada mediante la divulgación, la alteración y la destrucción.

#### Cómo protegemos los secretos y detectamos las manipulaciones en el mundo real?

Ej: Imagina que diriges una pequeña clínica médica. Necesitas enviar historiales clínicos de pacientes, incluyendo nombres, afecciones médicas e historial de tratamientos, a especialistas y compañías de seguros a través de internet
#### !!! El problema? Los datos no viajan directamente de ti al destinatario. Pasan por decenas de ordenadores y routers en el camino
Sin protección, cualquiera con acceso a esos sistemas podría leer, modificar o bloquear tus datos.
##### La criptografía resuelve este problema utilizando reglas matemáticas y claves secretas para codificar la información en un galimatías que solo las personas autorizadas pueden descifrar.

#### qué es la criptografía y por qué es importante para proteger la confidencialidad y la integridad.
##### Describe la diferencia entre texto plano y texto cifrado con ejemplos reales.
##### Explique qué son las claves y los algoritmos, y por qué es fundamental mantener las claves en secreto.
##### Explica la diferencia entre el cifrado simétrico y el asimétrico utilizando objetos cotidianos, como cajas fuertes y buzones de correo.
##### Describe cómo funcionan conjuntamente el cifrado simétrico y el asimétrico para proteger tu navegación web.

Pregunta inicial: Si alguien está escuchando cada dato que viaja entre dos personas, ¿cómo pueden esas dos personas seguir compartiendo secretos?

Antes de adentrarnos en el cifrado simétrico, definamos los términos clave que utilizaremos a lo largo de esta sesión:

#### 1. Texto plano: un mensaje que se puede leer normalmente. Por ejemplo, HOLA o Nombre del paciente: Alice Smith.

#### 2. Texto cifrado: una versión desordenada que no debería tener sentido. Como KHOOR o Sdwlhqw qdph: Dolfh Vplwk.

#### 3. Clave: El ingrediente secreto que controla cómo funcionan el cifrado y el descifrado. Imagínelo como una contraseña que utiliza el algoritmo.

#### 4. Algoritmo: La receta pública, el conjunto de pasos que explican cómo usar la clave en el mensaje. Cualquiera puede conocer el algoritmo. La seguridad reside en mantener la clave en secreto.

##### La criptografía del mundo real es mucho más sofisticada que la que usaremos aquí.
##### Pero el patrón básico sigue siendo el mismo
#### Proceso de cifrado: texto plano + algoritmo de cifrado + clave → texto cifrado
plaintext + encryption algorithm + key  → ciphertext

```
sender -> plaintext -> Encrypt -> Ciphertext
recipient -> Ciphertext -> Decrypt (key) -> Plaintext
```

La analogía de la caja fuerte

Piensa en una caja fuerte física:

#### !!! El algoritmo es el que define el funcionamiento de la cerradura.
Cualquiera puede verte insertar la llave y girarla, por lo tanto, no es secreta.
La llave es tu llave metálica específica.
#### Solo las personas que tengan esa llave exacta pueden abrir tu caja.
El texto plano es la carta que hay dentro del recuadro.
##### El texto cifrado es esa caja cerrada con llave que viaja a través del sistema postal.

Nadie oculta cómo funcionan las cerraduras para garantizar su seguridad.
#### !!! La seguridad reside en mantener la clave en privado, y este mismo principio se aplica a la criptografía.
##### !!! Los algoritmos suelen ser públicos y probados por expertos de todo el mundo.
##### La seguridad radica en mantener las claves en secreto.


Alice quiere enviarle una carta secreta a Bob, pero debe pasar por el sistema postal público, donde cualquiera podría abrirla y leerla.

Esto es lo que hace:

    Ella escribe su mensaje (el texto plano) en papel.
    Ella guarda la carta en una caja fuerte resistente.
    Ella lo cierra con un candado usando su llave.
    Ella envía la caja cerrada con llave (el texto cifrado) por correo.

Cuando Bob recibe la caja, usa su copia de la misma llave para abrirla y leer el mensaje

Cualquiera que intercepte la caja en el camino verá una caja metálica cerrada con llave. Sin la llave, es inútil. El mensaje permanece oculto.

#### En resumen, eso es el cifrado simétrico: una llave cierra la caja, la misma llave la abre.
#### Symmetric Encription


Texto plano versus texto cifrado

Ahora bien, ¿cómo se ve esto cuando se trata de texto o datos? Digamos que Alice quiere enviar:

HOLA

Ese es el texto plano: el mensaje legible.

Alice utiliza un algoritmo y una clave secreta para cifrarlo. Después de cifrarlo, queda así:

KHOOR

Ese es el texto cifrado. Para cualquiera que no tenga la clave, KHOOR no tiene sentido. Lo fundamental es que el texto cifrado parezca un sinsentido aleatorio para quien no tenga la clave.

Bob recibe KHOOR, usa la misma clave y algoritmo, y lo descifra para volver a obtener HELLO.

El cifrado César: algoritmo y clave

Para ilustrarlo mejor, utilizaremos el cifrado César. Es sencillo, lo que lo hace perfecto para aprender (pero terrible para la seguridad real; hablaremos de eso en un momento).

El cifrado César recibe su nombre de Julio César, quien, según se dice, utilizó esta técnica hace más de 2000 años para enviar mensajes militares. Incluso en aquella época, la gente comprendía el valor de mantener las comunicaciones en secreto.


Cómo funciona

#### !!! El cifrado César desplaza cada letra de tu mensaje un número fijo de posiciones en el alfabeto. Ese número fijo es tu clave.

Digamos que la clave es 3:

A se desplaza 3 posiciones hacia adelante para convertirse en D.
B se convierte en E
C se convierte en F
etcétera.
X se convierte en A (vuelve al punto de partida).
Y se convierte en B
Z se convierte en C


If Alice wants to encrypt HELLO with a key of 3:

    H → K
    E → H
    L → O
    L → O
    O → R

So HELLO becomes KHOOR.

To decrypt KHOOR, Bob shifts each letter backwards by 3:

    K → H
    H → E
    O → L
    O → L
    R → O

He gets HELLO again. Magic? Nope. Math



Con el cifrado César:

#### El algoritmo (desplazar cada letra un número determinado) es completamente público.
Cualquiera puede saber cómo funciona.
#### La clave (el número 3 en nuestro ejemplo) es lo que permanece en secreto.
Solo Alice y Bob conocen este número.

#### !!! Si alguien intercepta KHOOR pero desconoce la clave, tendría que probar las 25 combinaciones posibles (del 1 al 25) para encontrar la correcta.
Para un humano, esto resulta tedioso; para una computadora, solo toma un milisegundo.

La cuestión es la siguiente: el cifrado César no es seguro y nunca se utiliza en sistemas reales.
Es demasiado fácil de vulnerar y descifrar mensajes.
Lo usamos aquí simplemente porque es sencillo de entender y muestra cómo funcionan conjuntamente las claves y los algoritmos.


#### Algoritmos reales como El estándar de cifrado avanzado (AES) es mucho más complejo y seguro. Pero sigue la misma idea básica: algoritmo + clave + texto plano → texto cifrado.


### Cifrado simétrico

##### El cifrado César es un ejemplo de cifrado simétrico. Esto significa que:
##### La misma clave cifra (bloquea) y descifra (desbloquea) el mensaje.
#### !!! Tanto el remitente como el receptor necesitan una copia de esa clave.
##### La llave debe permanecer en secreto para todos los demás.

Algunos de los beneficios de utilizar el cifrado simétrico son:
Es rápido. Los algoritmos simétricos pueden procesar enormes cantidades de datos muy rápidamente.
Es eficiente. Perfecto para cifrar archivos, discos duros y tráfico de red donde la velocidad es fundamental.

Sin embargo, esta eficiencia tiene un inconveniente:
¿Cómo pudieron Alice y Bob compartir esa llave de forma segura en primer lugar?

#### Si envían la clave por internet a la vista de todos, un intruso puede interceptarla. Entonces, ese intruso podrá descifrar todos los mensajes futuros.

#### Podrías pensar: "¡Simplemente cifra la clave!", pero entonces necesitarías otra clave para cifrar esa clave, y luego otra clave para esa clave, y ahí radica el problema. Un ciclo sin fin.

#### !!! Esto se conoce como el problema de la distribución de claves, y es el talón de Aquiles del cifrado simétrico cuando se utiliza de forma aislada.

Resolveremos esto en la siguiente tarea con
#### cifrado asimétrico, un enfoque ingenioso que utiliza dos claves diferentes en lugar de una.



El equipo utiliza un cifrado César sencillo para comunicarse de forma segura, y tú necesitas:

Descifrar las advertencias secretas que fueron interceptadas.
Cifra los mensajes nuevos antes de enviarlos.

El juego utiliza el cifrado César con diferentes teclas de mayúsculas. Deberás ajustar la tecla, observar cómo cambia el mensaje y enviar tus respuestas.


#### Plaintext: The original, readable message before encryption.
#### Ciphertext: The encrypted, scrambled message after applying the cipher.
#### Key: A secret value that controls how the cipher transforms the message.
#### Caesar Cipher: A substitution cipher that shifts each letter by a fixed number of positions.
#### !!! Brute Force: Trying all possible keys until finding the correct one.





### Asymmetric Encryption

#### cómo comparten esa clave de forma segura en primer lugar

##### misma llave: Si la envían en texto plano, un atacante la intercepta. Si cifran la clave, necesitan otra clave, lo que nos lleva de nuevo al mismo problema



#### cifrado asimétrico utiliza dos claves vinculadas matemáticamente:

#### 1. Una clave pública que cualquiera puede conocer y utilizar.
#### 2. Una clave privada que solo una persona mantiene en secreto.

##### Si encriptas algo con la clave pública de alguien, solo su clave privada podrá descifrarlo.
##### Si encriptas algo con tu clave privada, cualquiera que tenga tu clave pública podrá descifrarlo

Utilizado para firmas digitales

##### Las dos claves están conectadas mediante complejos cálculos matemáticos
##### pero a un ordenador común le llevaría cientos o incluso miles de años recuperar la clave privada a partir de la clave pública
Esta dificultad computacional es lo que hace que el cifrado asimétrico sea seguro


La ranura para correo en la parte superior es la llave pública. Cualquiera que pase por allí puede dejar una carta. Está completamente abierta y accesible.
    La puerta cerrada con llave en la parte delantera es la llave privada. Solo el dueño del buzón tiene la llave para abrirlo y recoger las cartas.

Cuando Alice quiere enviarle un secreto a Bob:

    Alice encuentra la clave pública de Bob (el buzón de correo). Esto no es ningún secreto: Bob puede publicarla en su sitio web o enviarla por correo electrónico.
    Alice escribe su mensaje, lo cifra con la clave pública de Bob y lo envía.
    Solo Bob puede descifrarlo porque es el único que tiene la clave privada (la llave de la puerta).

Bob crea una clave pública y una clave privada en su ordenador. Guarda la clave privada para sí mismo y comparte la clave pública con todo el mundo.
    Alice obtiene la clave pública de Bob (quizás de su sitio web o de un servidor de claves).
    Alice encripta su mensaje utilizando la clave pública de Bob y lo envía.
    Bob lo recibe y lo descifra utilizando su clave privada.

En ningún momento fue necesario intercambiar una clave a través de la red de forma secreta.
#### La única clave que se transmitió públicamente fue la clave pública de Bob, que no es secreta por diseño. Esa es la solución al problema de la distribución de claves


    
#### HTTPS

El uso cotidiano más común del cifrado asimétrico se encuentra en HTTPS, el protocolo seguro que utilizas cada vez que ves ese candado en tu navegador.

Esto es lo que sucede cuando visitas https://google.com:

    Su navegador solicita la clave pública del sitio web.
    El sitio web devuelve su clave pública envuelta en un certificado (más sobre esto en breve).
    Tu navegador y el sitio web utilizan cifrado asimétrico para acordar un secreto compartido (una clave simétrica) sin que nadie más pueda verlo.
    A partir de ese momento, cambian a un cifrado simétrico rápido utilizando esa clave secreta compartida durante el resto de la sesión.

Esta combinación a veces se denomina enfoque híbrido:

#### El cifrado asimétrico resuelve el problema de la distribución de claves.
#### El cifrado simétrico se encarga del trabajo pesado porque es mucho más rápido.

    
#### !!! la clave pública pertenece realmente a Bob y no a un atacante que se hace pasar por él? Ahí es donde entran en juego los certificados.

### Un certificado es un documento digital que:

Contiene la clave pública de alguien.
Indica a quién pertenece esa clave (como example.com).
Una autoridad de confianza, denominada Autoridad de Certificación (CA), lo firma digitalmente


### !!! Tu navegador y sistema operativo vienen precargados con una lista de autoridades de certificación (CA) de confianza. Cuando un sitio web entrega un certificado:

Tu navegador comprueba que una autoridad de certificación de confianza lo haya firmado.
Tu navegador comprueba que sigue siendo válido (que no ha caducado ni ha sido revocado).
Si todo parece correcto, su navegador mostrará el candado y confiará en la clave pública.


#### Si algo no funciona correctamente (por ejemplo, si el certificado ha caducado o ha sido firmado por una autoridad no confiable), su navegador mostrará una advertencia y podría negarse a conectarse.    


#### Visualización de un certificado en su navegador

Ahora mismo puedes consultar el certificado de cualquier sitio HTTPS. Estos pasos te guiarán para ver los certificados:

    Visita cualquier sitio HTTPS (prueba con https://www.tryhackme.com).
    Haz clic en el icono del candado en la barra de direcciones.
    Busque algo como "Certificado", "La conexión es segura" o "Ver certificado".
    Se abre una ventana que muestra detalles como:
        Emitido a: El dominio del sitio web.
        Emitido por: El 

que lo firmó.
Válido desde / Válido hasta: Las fechas de vencimiento del certificado.



Número de claves
Una clave para cifrar y descifrar
Dos claves: pública y privada

Compartir claves
Ambas personas necesitan la misma clave secreta
La clave pública se puede compartir abiertamente

Velocidad
Muy rápida
Más lenta (utilizada para pequeñas cantidades de datos)

Uso principal:
Cifrado de grandes volúmenes de datos (archivos, tráfico de red).
Compartir claves de forma segura y certificados digitales.

Analogía:
Una llave abre y cierra una caja.
Un buzón: cualquiera puede enviar algo, pero solo el dueño puede recogerlo.


En la práctica, los sistemas reales utilizan ambos:

El cifrado asimétrico inicia una conexión y comparte de forma segura una clave simétrica.
El cifrado simétrico toma el control durante el resto de la sesión para gestionar los datos de forma eficiente.

Así es como funcionan HTTPS, las VPN y las aplicaciones de mensajería cifrada.



#### Con el cifrado asimétrico, Alice puede cifrar un mensaje usando la clave pública de Bob, y solo la clave privada de Bob puede descifrarlo. ¿Sí o no?

#### Symmetric: After initial asymmetric exchange in HTTPS, what encryption type handles bulk data?


#### Fundamentos de la criptografía y su papel en la protección de la confidencialidad, uno de los tres pilares de la

    El texto plano es lo que puedes leer. El texto cifrado es un galimatías revuelto.
    Una llave es el secreto que controla el proceso de codificación y decodificación.
    Un algoritmo es el método público para usar la clave.


#### El cifrado simétrico utiliza una única clave tanto para cifrar como para descifrar. Es rápido y eficiente, pero se necesita una forma segura de compartir esa clave. Utilizamos el cifrado César para comprobar su funcionamiento.
#### El cifrado asimétrico utiliza dos claves vinculadas: una clave pública que cualquiera puede usar y una clave privada que solo una persona conserva. Esto resuelve el problema de la distribución de claves y permite el establecimiento de la conexión HTTPS.

la base de casi todos los sistemas seguros que utilizas en línea. Pero no es magia.
Es una capa dentro de un panorama de seguridad mucho más amplio que incluye:

Prácticas seguras para contraseñas.
Almacenamiento seguro de llaves.
Sensibilización y formación del usuario.
Actualizaciones de software periódicas.
Seguimiento y respuesta ante incidentes
        



## 3. Become a Hacker





## 4. Become a Defender






# Search Skills: saber qué buscar


##### A menudo se describe a Shodan como un motor de búsqueda para el Internet de las Cosas,
pero esa descripción no le hace justicia.
#### Shodan escanea continuamente internet, buscando equipos de red, sistemas de control industrial, cámaras de tráfico y prácticamente cualquier otro dispositivo con conexión a una red pública para ver qué está funcionando y dónde.

Por ejemplo, al buscar "apache 2.4.1" se obtiene una lista de servidores que anuncian esa versión en sus encabezados HTTP, desglosada por país, organización y puerto

#### Durante una prueba de penetración o una evaluación de vulnerabilidades, este tipo de información resulta extremadamente útil
##### sobre todo si se combina con una vulnerabilidad CVE conocida que afecte a esa versión.


### 1. Shodan también admite sus propios filtros de consulta, que permiten reducir significativamente los resultados:

Country: country:IE
Restringir los resultados a un código de país específico.

port: port:22
Filter by a specific port number or a range.

org: AS7224
El alcance da como resultado una organización con nombre o un identificador ASN (que posee un rango de direcciones IP).

hostname: hostname:fakebank.thm
Coincidencia con un nombre de host o dominio específico.


Necesitarás...
1. Busca el término apache en la barra de búsqueda de TryScanMe.
es un tipo popular de servidor web
2. Revisa la primera entrada de la lista.
3. Utilice esa información para responder a la siguiente pregunta.



### 2. Virus Total

VirusTotal recopila los resultados de más de 70 motores antivirus y escáneres de sitios web en una sola interfaz.
##### Introduce un archivo, una URL, un dominio o un hash de archivo. VirusTotal te indicará si alguno de esos motores lo ha marcado como malicioso o no
#### Si bien no es infalible, VirusTotal es un recurso popular en la comunidad de equipos de defensa para obtener un consenso general sobre archivos y enlaces sospechosos, así como para recopilar información sobre nuevas amenazas en circulación


Necesitarás...
1. Busca el archivo invoice_payment.exe en TryDetectMe.
2. Revise la información que se le ha proporcionado. Verá una lista de proveedores de seguridad que han identificado el archivo que le hemos facilitado como peligroso.
3. Determine cuántos proveedores de seguridad han identificado el archivo como peligroso para responder a la pregunta que aparece a continuación.


¿Cuántos proveedores de seguridad han identificado el archivo como peligroso?

Puedes ver el recuento total en la parte superior de la página.



### 3. CVE: Common Vulnerabilities and Exposures

#### diccionario universal de vulnerabilidades conocidas.

#### A cada vulnerabilidad confirmada se le asigna un identificador único con el formato CVE-AÑO-NÚMERO
CVE-2025-55182.

#### Si la vulnerabilidad es lo suficientemente importante, incluso puede recibir un nombre.
##### Es posible que hayas oído hablar de vulnerabilidades como Heartbleed, React2Shell y Log4Shell.
#### !!! A estas vulnerabilidades se les asigna una puntuación (CVSS) basada en diversos factores, como:

#### 1. Impacto: ¿Qué daños puede ocasionar esta vulnerabilidad?
#### 2. Complejidad: ¿Es fácil de explotar la vulnerabilidad o no? 
#### 3. Disponibilidad: ¿Qué probabilidades hay de que alguien pueda explotar esto?


#### 1. El tiempo que tarda el desarrollador en crear el parche
Cuando un investigador descubre una falla,
suele realizar una divulgación responsable: notifica al desarrollador en privado
y se le suele dar un plazo estándar de 90 días para crear una solución
antes de que el CVE se publique de forma masiva.

#### 2. El tiempo que tardan las empresas en aplicar el parche
Una vez que el CVE y su respectivo parche son públicos, comienza la carrera para las organizaciones:

El promedio general: De acuerdo con reportes globales de ciberseguridad, las empresas tardan un promedio de 43 días en cerrar brechas críticas. Otras métricas globales elevan este promedio hasta los 74 días para la remediación de parches de infraestructura.

Dispositivos críticos y de red: Un estudio de Tenable Research demostró que en plataformas perimetrales (como routers empresariales o firewalls) el tiempo promedio de remediación en América Latina llega a ser de 203 días.

Estándares exigidos: Entidades de ciberseguridad como la CISA obligan a las agencias gubernamentales a corregir fallas "Críticas" en un máximo de 15 días y fallas "Altas" en 30 días.


#### Las organizaciones utilizan este tipo de puntuación para priorizar su nivel de riesgo,
##### abordando primero los riesgos con la puntuación más alta.

#### Estos identificadores funcionan como punto de referencia entre proveedores, investigadores, herramientas de seguridad y documentación
asegurando que todos los que hablen sobre una vulnerabilidad se refieran al mismo problema
#### Sitios web como ExploitDB recopilan esta información junto con "Pruebas de Concepto" (PoC),
que son scripts capaces de demostrar la vulnerabilidad.

Necesitarás...
1. Busque en la base de datos de vulnerabilidades CVE-2026-1337.
2. Revisar los detalles sobre la vulnerabilidad.
3. Encuentra el CVSS
puntuación para responder a la pregunta.



#### CVSS: Common Vulnerability Scoring System
##### score: Impact, Complexity, Availability

Ej: CVE-2026-1337
CRITICAL 10/10 high
Existe una vulnerabilidad crítica de inyección SQL en las versiones 3.2.0 a 3.4.5 de Apache WebPortal que permite a atacantes remotos ejecutar comandos SQL arbitrarios mediante el parámetro "userId" en el módulo de autenticación de inicio de sesión. Esta vulnerabilidad puede explotarse sin autenticación y podría comprometer completamente la base de datos, incluyendo el acceso no autorizado a credenciales de usuario confidenciales, tokens de sesión y datos confidenciales de la aplicación.

CVSS Version 2.0
AV:N/AC:L/Au:N/C:C/I:C/A:C

#### CVSS Metrics
 
Attack Vector
NETWORK

Attack Complexity
LOW

Authentication
NONE

Confidentiality Impact
COMPLETE

Integrity Impact
COMPLETE

Availability Impact
COMPLETE


Weakness Enumeration
CWE-89SQL Injection
Vulnerability Details

Exploitability: Proof of concept exploit code is publicly available

Impact: Complete compromise of database integrity and confidentiality

Solution: Update to Apache WebPortal version 3.5.0 or later.
Implement prepared statements and parameterized queries.

Affected Products
Vendor:Apache Software Foundation
Product:WebPortal
Versions:3.2.0 - 3.4.5
Status:Vulnerable



### MAN: Tech Doc

#### Cada herramienta o plataforma de seguridad importante proporciona su propia documentación,
que es la más fiable y actualizada que cualquier tutorial de terceros

Cuando se trata de solucionar problemas de comportamiento inesperado o de comprender cómo usar una herramienta de una manera determinada
##### la documentación oficial siempre debe ser lo primero que se consulte, no lo último.

man <command>
man nc


```
user@thm$ man nc
NC
																	  
NAME
nc — arbitrary TCP and UDP connections and listens

SYNOPSIS
nc  [-46bCDdFhklNnrStUuvZz]  [-I  length]  [-i  interval]  [-M  ttl] [-m minttl] [-O length] [-P proxy_username] [-p source_port] [-q seconds] [-s sourceaddr] [-T keyword] [-V rtable] [-W recvlimit] [-w timeout]
[-X proxy_protocol] [-x proxy_address[:port]] [destination] [port]
     
```

1. Busque en las páginas del MANUAL la herramienta nc (netcat).
2. Busca el comando de ejemplo que te permite abrir una conexión para host.example.com en el puerto 42 (este se encuentra al final de la salida).
3. Copie y pegue el comando para responder a la pregunta que aparece a continuación.


GitHub puede ser un gran recurso para mantenerse actualizado sobre las últimas amenazas y vulnerabilidades
#### Los investigadores a menudo publican pruebas de concepto (poc) código, herramientas de explotación e informes técnicos detallados allí
##### que suelen ser más rápidos que los canales oficiales

busca directamente en GitHub un identificador (por ejemplo, CVE-2026-1337
es probable que se encuentren repositorios que contengan código de prueba de concepto, scripts de escaneo o análisis detallados de la vulnerabilidad

#### no todas las pruebas de concepto (PoC) son igualmente fiables
##### Algunas están incompletas, otras tienen fallos intencionados y
##### en ocasiones, un repositorio de "PoC" es malicioso en sí mismo
#### Siempre verifica lo que estás a punto de ejecutar.




# Linux Fundamentals


Se puede decir que Linux es mucho más intimidante que otros sistemas operativos como Windows.
Ambas variantes tienen sus ventajas y desventajas.
Por ejemplo, Linux es considerablemente más ligero,
¡y te sorprendería saber que probablemente lo hayas usado de una forma u otra todos los días!

Linux impulsa cosas como:

Sitios web que usted visita
Paneles de control/entretenimiento del automóvil
Sistemas de punto de venta (TPV), como cajas registradoras y terminales de pago en tiendas.
Infraestructuras críticas como controladores de semáforos o sensores industriales.
Teléfonos y dispositivos informáticos pequeños similares
mucho más!

Implementación de su primera máquina Linux

Esta sala cuenta con una máquina Ubuntu Linux con la que puedes interactuar directamente desde tu navegador mientras sigues el material de la sala.
Para empezar, simplemente pulsa el botón verde "Iniciar máquina" que aparece a continuación.

Una vez iniciado, aparecerá una tarjeta en la parte superior de la sala:

Aquí encontrará toda la información del equipo instalado en la sala, incluyendo la dirección IP y el temporizador de caducidad, además de botones para gestionarlo.
Recuerde finalizar el equipo una vez que haya terminado de usar la sala.
Encontrará más información al respecto en la sala de tutoriales.


## Comandos

#### 1. whoami: Te indica quién eres en el sistema.

#### 2. echo: mostrar algún texto específico que se proporciona
Para mostrar el texto "TryHackMe", podemos usar `echo TryHackMe`.
Si hay varias palabras, debemos ponerlas entre comillas
Por ejemplo, `echo "hola mundo"`.
Por ejemplo, `echo "hola mundo"`.

Usar `echo` es solo el comienzo de una habilidad muy importante en ciberseguridad:
poder generar información y enviarla.

Necesitarás...
1. Utilice el comando whoami para ver quién es usted en el sistema.
2. Pulse la tecla Intro para ejecutar el comando.
3. Ahora, usa echo para mostrar el texto TryHackMe.


### Muévete sin tocar el ratón.

Aprendamos a navegar por los archivos del sistema a través de la terminal. Cuatro comandos realizan casi toda la navegación.


#### 3. ls lista el contenido de la carpeta actual
#### 4. cd cambiar de directorio — moverse a una carpeta
#### 5. cat muestra el contenido de un archivo.
#### 6. pwd imprimir directorio de trabajo — "¿dónde estoy?"


### Encontrar cosas: Buscar y navegar por archivos de manera eficiente

#### find busca archivos por su nombre.
Por ejemplo, find -name passwords.txt

#### El comando grep busca texto en el interior.
Por ejemplo, grep "password123" passwords.txt

En tu carpeta personal hay un archivo de registro de un servidor web llamado access.log, que tiene cientos de líneas. En algún lugar dentro hay una bandera.

1. Escribe cd /home/tryhackme para volver a tu carpeta de inicio.
2. Ejecuta grep "THM" access.log para usar grep para buscar en el archivo de registro por nosotros.
3. Copie la salida THM{} que se ha encontrado.



### Combinar Comandos

#### !!! Existe un conjunto de caracteres especiales que permiten combinar comandos
##### se denominan "operadores" y le indican a Linux cómo debe procesar ambos comandos
##### Desde la combinación de comandos hasta la redirección
##### (enviar la salida de los comandos a otro lugar)

#### 7. & El comando se ejecuta en segundo plano y resulta útil para aquellos que tardan en completarse o que se desean mantener en ejecución.
#### 8. && Ejecuta ambos comandos, pero espera a que el primero termine antes de ejecutar el siguiente. Como un juego de dominó.
#### 9. > Se utiliza para redirigir la salida. Podemos tomar la salida de un comando y enviarla a un archivo. Este operador sobrescribirá todo lo que exista en el archivo.
#### 10. >> Este redireccionador hace lo mismo, pero en lugar de sobrescribir, simplemente agregará la salida al final del archivo.

Por ejemplo, `echo hey > welcome` crea un archivo llamado `welcome` que contiene el texto "hey". Podemos usar `cat welcome` para verificar que funcionó.
 
Necesitarás...
1. En una sola línea, usa echo para imprimir el texto "TryHackMe". Usa el redireccionador > para guardarlo como un archivo llamado thm. Por ejemplo, echo "test" > thm.
2. Ahora inténtalo de nuevo, pero usando el redireccionador >> con el texto "thm". Luego puedes comprobarlo usando cat thm. Observa que no ha reemplazado por completo el texto anterior.



# Windows


## New Technology File System



## Folders

### (C:\Windows): contiene el SO
#### La carpeta no tiene por qué estar necesariamente en la unidad C. Puede estar en cualquier otra unidad y, técnicamente, en una carpeta diferente.

#### Aquí es donde entran en juego las variables de entorno, más específicamente las variables de entorno del sistema

#### !!! la variable de entorno del sistema para el directorio de Windows es %windir%.

##### Según Microsoft (se abre en una pestaña nueva), "Las variables de entorno almacenan información sobre el entorno del sistema operativo

###### Esta información incluye detalles como la ruta del sistema operativo, el número de procesadores utilizados por el sistema operativo y la ubicación de las carpetas temporales".

#### !!! La carpeta System32 contiene los archivos importantes que son fundamentales para el sistema operativo.

Debe proceder con extrema precaución al interactuar con esta carpeta. Eliminar accidentalmente cualquier archivo o carpeta dentro de System32 puede provocar que Windows se bloquee.

Inoperativo. Lea más sobre esta acción aquí (se abre en una pestaña nueva). 

#### !!! Nota: Muchas de las herramientas que se tratarán en la serie Fundamentos de Windows se encuentran dentro de la carpeta System32.



### User Accounts, Profiles and Permissions

#### En un sistema Windows local típico, las cuentas de usuario pueden ser de dos tipos: Administrador y Usuario estándar. 
##### El tipo de cuenta de usuario determinará qué acciones puede realizar el usuario en ese sistema Windows específico. 

#### 1. Un administrador puede realizar cambios en el sistema: agregar usuarios, eliminar usuarios, modificar grupos, modificar la configuración del sistema, etc.
#### 2. Un usuario estándar solo puede realizar cambios en las carpetas/archivos que se le atribuyen y no puede realizar cambios a nivel del sistema, como instalar programas.

Actualmente has iniciado sesión como administrador.
#### Existen varias maneras de determinar qué cuentas de usuario existen en el sistema.

Una forma es hacer clic en el menú Inicio y escribir "Otro usuario".
Debería aparecer un acceso directo a Configuración del sistema > Otros usuarios.
`Start Menu and type Other User. A shortcut to System Settings > Other users`.


Como usted es el administrador, verá la opción de agregar a otra persona a este PC.

Nota: Un usuario estándar no verá esta opción.  

Haz clic en la cuenta de usuario local. Deberían aparecer más opciones: Cambiar tipo de cuenta y Eliminar.

Haz clic en Cambiar tipo de cuenta. El valor que aparece en el menú desplegable (o el valor resaltado si haces clic en el menú desplegable) es el tipo de cuenta actual.



### Comando: lusrmgr.msc Local User and Group Management

Nota: El cuadro de diálogo Ejecutar nos permite abrir elementos rápidamente. 

Volviendo a lusrmgr, debería ver dos carpetas: Usuarios y Grupos. 

#### Si haces clic en Grupos, verás los nombres de todos los grupos locales junto con una breve descripción de cada uno. 

#### Cada grupo tiene permisos asignados, y el administrador es quien asigna o agrega los usuarios a los grupos. Cuando un usuario se asigna a un grupo, hereda los permisos de dicho grupo. Un usuario puede pertenecer a varios grupos.

#### Nota: Si hace clic en Agregar a otra persona a este PC desde Otros usuarios, se abrirá Usuarios locales y Administración.




### User Account Control

#### !!! La gran mayoría de los usuarios domésticos inician sesión en sus sistemas Windows como administradores locales
cualquier usuario con cuenta de administrador puede realizar cambios en el sistema.

Un usuario no necesita privilegios elevados para realizar tareas que no los requieren, como navegar por internet o trabajar con un documento de Word
Estos privilegios elevados aumentan el riesgo de que el sistema se vea comprometido, ya que facilitan la infección por malware
En consecuencia, dado que la cuenta de usuario puede modificar el sistema
el malware se ejecutaría con las credenciales del usuario que ha iniciado sesión.

#### Para proteger al usuario local con tales privilegios, Microsoft introdujo el Control de cuentas de usuario 

Este concepto se introdujo por primera vez con el efímero Windows Vista (se abre en una pestaña nueva) y continuó con las versiones de Windows que le siguieron.

Nota: El Control de cuentas de usuario (UAC) no se aplica de forma predeterminada a la cuenta de administrador local integrada. 

Cómo funciona el Control de cuentas de usuario (UAC)? Cuando un usuario con una cuenta de administrador inicia sesión en un sistema, la sesión actual no se ejecuta con permisos elevados

#### !!! Si se requiere ejecutar una operación que exige privilegios de nivel superior, se le pedirá al usuario que confirme si autoriza su ejecución

Veamos el programa en la cuenta con la que has iniciado sesión actualmente, la cuenta de administrador integrada. Haz clic con el botón derecho para ver sus propiedades.

#### wireshark: En la pestaña Seguridad, podemos ver los usuarios/grupos y sus permisos para este archivo. Observe que el usuario estándar no aparece en la lista.

Inicie sesión como usuario estándar e intente instalar este programa.
Para ello, puede acceder al equipo mediante escritorio remoto con la cuenta de usuario estándar. 

Nota: Tienes el nombre de usuario y la contraseña del usuario estándar.
Puedes verlos en lusrmgr.msc.

Antes de instalar el programa, fíjate en el icono.
¿Notas la diferencia? Cuando inicias sesión como usuario estándar, el icono del escudo aparece en el icono predeterminado del programa.
Mira abajo.




### Settings, Control Panel

#### los lugares principales para realizar cambios son el menú Configuración y el Panel de control.
los lugares principales para realizar cambios son el menú Configuración y el Panel de control.




# Windows 2 









    




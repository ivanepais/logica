# Help Desk


1. Fundamentos Técnicos y Entorno Operativo

Base de hardware, software y redes
a diagnosticar a diario.

Arquitectura de PCs y Periféricos:
Identificación de fallos de hardware
(RAM, almacenamiento, fuentes de poder).

Sistemas Operativos a Fondo:
Gestión de usuarios, permisos, servicios y logs tanto en entornos Windows (Event Viewer, Services)
como Linux/Unix (logs del sistema, CLI básica).

Fundamentos de Redes:
Protocolo TCP/IP, direccionamiento (IP, Máscara, Gateway, DNS),
DHCP y solución de problemas:
comandos esenciales (ping, traceroute/tracert, nslookup, ipconfig/ifconfig).

2. Metodologías de Trabajo y Ciclo de Vida del Ticket
Procesos estandarizados para que nada se pierda.

Introducción a ITIL (Information Technology Infrastructure Library):
Conceptos clave de Gestión de Incidentes vs. Gestión de Requerimientos.

Anatomía de un Ticket:
Creación, priorización (Impacto x Urgencia)
categorización, seguimiento, escalado (Nivel 1 al Nivel 3) y cierre.

Acuerdos de Nivel de Servicio (SLA):
Qué son, por qué importan y cómo gestionar el tiempo para no penalizarlos.

Herramientas de Ticketing:
Flujo de trabajo en plataformas líderes
(Jira Service Management, Zendesk, SysAid o ServiceNow).

3. Herramientas Clave del Administrador de TI
resolver problemas

Gestión de Identidades:
Introducción a Active Directory (AD) y Azure AD
(creación de usuarios, reseteo de contraseñas, desbloqueo de cuentas, grupos de seguridad).

Soporte Remoto:
Buenas prácticas y seguridad usando herramientas de control remoto
(AnyDesk, TeamViewer, RDP, VNC).

Herramientas de Despliegue y Automatización:
Inventario de activos y distribución de software.

4. Soft Skills y Crisis
50% del éxito en Help Desk depende de cómo tratas a la persona

Escucha Activa y Empatía:
Cómo extraer información útil de un usuario frustrado o que no sabe de tecnología.

Desescalada de Conflictos:
Técnicas para manejar usuarios VIP impacientes o clientes enojados sin perder la calma

Documentación Eficaz:
Cómo alimentar la base de conocimientos (Knowledge Base)
interna y redactar manuales de autoayuda claros para los usuarios.

5. Estrategias de Diagnóstico (Troubleshooting) y Seguridad
arte de resolver problemas de forma lógica y segura

Método Científico del Soporte:
Aislar variables, reproducir el error, identificar la causa raíz y probar la solución.

Ciberseguridad Básica:
Identificación de malware/phishing, gestión de contraseñas seguras, ingeniería social y políticas de mínimos privilegios

Copias de Seguridad (Backup):
Estrategias de recuperación de datos ante fallos catastróficos o ataques de Ransomware.



## Práctica

1. Fundamentos Técnicos y Entorno Operativo

Ejercicio 1 (Diagnóstico de Redes desde Consola):
Un usuario te llama diciendo que "no tiene internet" y tampoco puede usar la impresora compartida de la oficina
Al hacer que ejecute el comando ipconfig (o ip en Linux), notas que su dirección IP es 169.254.1.45.

Tu tarea: Explica qué significa esa IP específica, cuál es la raíz probable del problema
y escribe los comandos exactos de consola que usarías para intentar renovar la configuración de red.

Ejercicio 2 (Análisis de Logs):
Una aplicación crítica del equipo de desarrollo se cierra inesperadamente cada vez que intentan conectarse a la base de datos local

tarea: Indica a qué archivos de registro (logs) del sistema acudirías para buscar el error
qué comando utilizarías en la terminal para ver los fallos en tiempo real mientras el usuario replica el problema.

2. Metodologías de Trabajo y Ciclo de Vida del Ticket
 
Ejercicio 1 - Matriz de Priorización ITIL:
tres solicitudes en el mismo minuto
clasificarlas según su Impacto y Urgencia
para determinar el orden de atención (Alta, Media, Baja).

Caso A: Un pasante olvidó la contraseña de la plataforma secundaria de capacitaciones (no bloquea su trabajo diario).

Caso B: El Director Ejecutivo no puede imprimir un contrato físico que debe firmarse en 15 minutos
pero tiene acceso al archivo digital en su correo.

Caso C: El servidor de correo corporativo ha dejado de responder
ningún empleado de la empresa puede enviar o recibir correos.

tarea: Asigna la prioridad a cada caso justificando tu decisión en base a la continuidad del negocio

Ejercicio 2 (El Ciclo del Ticket):
Redacta el texto de apertura de un ticket para el Caso C del ejercicio anterior
Debe incluir: Categoría, Descripción técnica inicial, Estado y Criterio de escalado
(¿A qué equipo de Nivel 2 o 3 lo enviarías si no lo puedes resolver en 10 minutos?).

3. Herramientas Clave del Administrador de TI

Ejercicio 1 (Simulación de Active Directory):
Un nuevo empleado se incorpora al equipo de Finanzas

tarea: Escribe un checklist con el paso a paso técnico que debes realizar en el controlador de dominio (Active Directory / Azure AD)
para asegurar que tenga su cuenta activa, pertenezca a los grupos de seguridad correctos (para acceder a las carpetas de contabilidad)
y su contraseña temporal expire en su primer inicio de sesión.

Ejercicio 2 (Protocolo de Control Remoto Seguro):
Un usuario solicita por chat que te conectes a su computadora mediante software de asistencia remota
porque "aparecen ventanas raras".

tarea: Diseña un protocolo de seguridad de 3 pasos antes de tomar el control del equipo
(por ejemplo, cómo confirmas la identidad del usuario y
cómo aseguras que no haya información confidencial visible en su pantalla).

4. Soft Skills y Gestión de Crisis

Ejercicio 1 (Desescalada de Conflictos - Roleplay Escrito):
usuario VIP te llama sumamente alterado, gritando que "el sistema que instalaron es una basura"
y que por tu culpa va a perder un cliente porque la laptop se congeló.

tarea: Escribe la respuesta exacta (el guión de tus palabras) utilizando técnicas de escucha activa y empatía
El objetivo es calmar al usuario sin aceptar culpas injustificadas y redirigir la conversación hacia la solución técnica.

Ejercicio 2 (Documentación para Mortales):
Hay un error común con las cookies del navegador web de la empresa que se soluciona simplemente borrando la caché
Los usuarios llaman constantemente por esto

tarea: Redacta un minitutorial de tres pasos, con un lenguaje extremadamente sencillo, libre de tecnicismos y orientado al usuario final
para que puedan resolverlo ellos mismos la próxima vez (Artículo de Base de Conocimiento).

5. Estrategias de Diagnóstico (Troubleshooting) y Seguridad

Ejercicio 1 (Árbol de Decisión - "No Enciende"):
Una secretaria te informa que su computadora de escritorio "murió por completo" al llegar por la mañana
No hace luces, no hace ruidos, pantalla en negro.

tarea: Diseña un diagrama de flujo de diagnóstico lógico (paso a paso)
aplicando el principio de aislamiento de variables, desde la comprobación más tonta y rápida
hasta el descarte de componentes internos (fuente, motherboard).

Ejercicio 2 (Contención de Incidente de Ciberseguridad):
Un empleado te llama asustado: "Me llegó un correo de soporte diciendo que mi cuenta de Office estaba bloqueada
Hice clic en el enlace, puse mi contraseña actual, pero la página se quedó en blanco. ¿Hice algo malo?"

tarea: Como Help Desk, estás en la primera línea de defensa
Enumera las 3 acciones inmediatas que debes ejecutar en los próximos 120 segundos para contener la posible brecha de seguridad


# 1. Fundamentos

## 1. Base de hardware, software y redes a diagnosticar a diario.

##### El Objetivo aquí es saber qué buscar y dónde mirar cuando las cosas fallan.

1. Base de Hardware:
El hardware suele avisar antes de morir
o falla de forma catastrófica y evidente
###### Objetivo: aislar el componente defectuoso

`Memoria RAM` (El síntoma del parpadeo):
Causa común de Pantallazos Azules (BSOD) en Windows o congelamientos aleatorios
Si la PC emite pitidos al encender y no da video, la RAM suele ser la culpable.

`Almacenamiento` (HDD vs. SSD):
Los discos mecánicos (HDD) ralentizan el sistema drásticamente antes de morir (clicks físicos, 100% de uso de disco constante).
Los SSD fallan en silencio: la PC simplemente deja de detectar el disco o se congela al leer sectores corruptos.

`Fuente de Alimentación` (Power Supply):
Si la PC no da señales de vida (ni luces, ni ventiladores)
o se apaga de golpe cuando el usuario exige rendimiento
la fuente está perdiendo potencia o se quemó.

`Periféricos y Estaciones de Acoplamiento` (Docks):
Hoy en día, el 40% de los tickets de hardware son:
"Mi monitor secundario no enciende" o "No me anda el mouse".
Aprenderás que el culpable real suele ser un cable USB-C dañado
un puerto sucio o un Docking Station que necesita un reinicio de energía

2. Software
##### Los problemas de software son los más frecuentes
El usuario suele pensar que es un virus
pero casi siempre es un archivo corrupto
un problema de permisos o una actualización rota. 

Windows:

`Visor de Eventos (Event Viewer)`:
Tu mejor amigo
Si un programa se cierra solo,
aquí queda registrado el código de error exacto.

`Servicios (services.msc)`:
Muchos programas no abren porque su servicio en segundo plano se detuvo
Saber reiniciarlos ahorra formateos innecesarios

`Administrador de Tareas`:
Para cazar procesos "zombie" que consumen el 100% de la CPU o memoria

Linux:

`Logs del Sistema (/var/log/)`:
Aquí se registra todo
Archivos como `syslog` o `auth.log`
te dicen exactamente qué falló a nivel de sistema o autenticación

`Permisos de Archivos`:
El clásico error de "Acceso denegado"
suele ser un problema de `chmod` o `chown`
(propietarios y permisos de lectura/escritura).

3. Redes: "Tuberías" de la información
##### Problemas locales

1. `Direccionamiento IP`: documento de identidad

`DHCP`:
servidor que asigna IPs automáticamente
Si falla:
la PC se asigna una IP "fantasma" conocida como APIPA (169.254.X.X),
significa: "Estoy hablando solo, nadie me asignó una dirección".

`IP Estática`:
Usada en impresoras y servidores para que no cambien de dirección
Un error común es el conflicto de IPs
(dos dispositivos con la misma dirección).

2. `DNS`: traductor
El Sistema de Nombres de Dominio traduce google.com
a una IP numérica

###### Si el DNS falla, el usuario te dirá "No tengo internet",
###### pero si escribes la IP de Google directamente en el navegador, sí cargará.

3. Puerta de Enlace `Gateway`:
Es el router de la oficina
la puerta de salida hacia el mundo exterior
###### Si no puedes hacerle un ping al Gateway
###### tu problema es el cable, el switch o el Wi-Fi local



## 2. Arquitectura de PCs y Periféricos: Identificación de fallos de hardware (RAM, almacenamiento, fuentes de poder).

El hardware puede ser engañoso porque un mismo síntoma (por ejemplo, una pantalla en negro)
puede tener tres causas distintas.

##### Objetivo es aplicar el aislamiento de variables

### 1. RAM: inestabilidad 
Es el espacio de trabajo del procesador
Si falla o tiene sectores corruptos
el sistema operativo colapsará en el momento exacto en que intente escribir en esa zona dañada

Síntomas típicos:

1. `Pantallazos Azules (BSOD) aleatorios`:
En Windows, verás códigos de parada como

```
MEMORY_MANAGEMENT o
PAGE_FAULT_IN_NONPAGED_AREA o
SYSTEM_SERVICE_EXCEPTION.
```

2. `Pitidos al encender (POST Beeps)`:
Al presionar el botón de encendido,
la placa base emite pitidos repetitivos
(la combinación varía según la marca
pero tres pitidos largos o pitidos continuos
suelen significar "no detecto la RAM").

3. `Congelamientos (Freezes)`:
El mouse y el teclado dejan de responder por completo de la nada
obligando a un reinicio forzado.


### Diagnóstico

`Truco de la goma de borrar`:
Abre el equipo, retira los módulos de RAM
limpia los contactos dorados suavemente con una goma de borrar limpia
(para quitar la estática y el sulfato)
Limpia los restos con un paño seco o alcohol isopropílico.

`Prueba de descarte por ranura (Slots)`:
Si el equipo tiene dos módulos, deja solo uno y enciende
Si falla, cámbialo de ranura
Si sigue fallando, prueba con el otro módulo.
##### Así aíslas si el fallo es de un módulo específico
##### o de un slot de la placa madre.

`Diagnóstico por Software`:
Si el equipo logra iniciar pero es inestable
ejecuta la herramienta nativa Diagnóstico de memoria de Windows
o arranca el sistema con un USB booteable que contenga MemTest86
##### Deja correr el test; si aparecen líneas rojas, esa RAM debe ser reemplazada inmediatamente.


### 2. Almacenamiento (HDD vs. SSD): Pérdida de datos y lentitud

conviven dos tecnologías, y cada una muere de forma completamente diferente.

#### Discos Mecánicos (HDD)
Síntomas: El famoso "Click de la muerte"
(un sonido metálico rítmico dentro de la torre)
lentitud extrema al abrir carpetas,
o el Administrador de Tareas mostrando un 100% de uso de disco
de manera constante sin que haya procesos pesados abiertos.

Diagnóstico: El cabezal físico está dañado
o la superficie tiene sectores defectuosos.

#### Discos de Estado Sólido (SSD / NVMe)

Síntomas: No hacen ruido
Su fallo suele ser catastrófico: el sistema tira un pantallazo azul instantáneo
`CRITICAL_PROCESS_DIED`
y, al reiniciar, la BIOS/UEFI dice:
`Insert Boot Device`
(el disco desapareció por completo del mapa).
##### A veces entran en modo "Solo lectura",
##### impidiendo guardar archivos o actualizar el sistema.

#### Diagnóstico:

1. Verificación en BIOS
Reinicia el equipo, entra a la BIOS (F2, F10, Supr)
###### revisa si la placa reconoce el nombre y capacidad del disco
###### Si no aparece, el disco no está recibiendo energía o su controladora murió.

2. Salud S.M.A.R.T.:
Si el sistema arranca, usa herramientas portables como CrystalDiskInfo
Esta herramienta lee el registro interno del disco (S.M.A.R.T.)
te dirá en un segundo si el estado es "Bueno", "Riesgo" o "Malo".

En la consola de Windows también puedes ejecutar:
`wmic diskdrive get status`
(si devuelve algo diferente a "OK", hay problemas).

3. Live USB de rescate: Si el sistema operativo no arranca:
inicia la PC desde un USB con un entorno ligero
(como una distribución Live de Linux).
Si desde ahí puedes montar el disco y ver los archivos del usuario
el hardware está sano y el problema es simplemente que el sistema operativo se corrompió


### 3 Fuente de Poder (PSU)

La fuente de alimentación transforma la corriente alterna de la pared
en la corriente continua que la PC necesita.
##### Si falla, puede entregar energía de más (quemando componentes) o de menos (causando inestabilidad).

Síntomas:

1. Muerte Total:
Presionas el botón de encendido y no pasa absolutamente nada
(ni luces, ni ventiladores, ni ruidos).

2. Apagones bajo carga:
El usuario está trabajando normal, pero cuando abre una aplicación pesada
pesada (un render, una base de datos local pesada),
la PC se apaga por completo de golpe, como si la hubieran desenchufado.

3. Bucle de encendido:
Los ventiladores giran durante medio segundo
se apagan, y vuelven a intentar girar en un bucle infinito.

#### Diagnostico

1. Descarte de lo básico
###### Cambia el cable de poder (intercámbialo por el del monitor)
asegúrate de que el interruptor trasero de la fuente esté en I (encendido)
y prueba en otro enchufe de la pared.

2. Prueba del Clip: Puenteo
Si la PC no enciende y quieres saber si la fuente sirve
desconéctala por completo de la placa base
En el conector grande de 24 pines
localiza el único cable verde (PS_ON)
haz un puente usando un clip metálico con cualquier cable negro (Tierra).
Enchufa la fuente a la pared; si el ventilador de la fuente no gira
la fuente está completamente muerta.

3. Inspección Visual de la Placa
Si la fuente funciona pero la PC sigue sin encender
###### mira la placa base buscando capacitores hinchados o deformados
###### Si tienen la parte superior abombada o derraman un líquido marrón
la placa base pasó a mejor vida debido a un pico de tensión de la fuente.

#### Regla: Siempre ve de lo más simple y barato a lo más complejo y caro



### 4. Periféricos y Estaciones de Acoplamiento (Docks)

Representan hoy en día una de las mayores fuentes de tickets en el entorno corporativo moderno
(especialmente con el auge del teletrabajo y las oficinas híbridas).

Cuando un usuario llega a la oficina, conecta un solo cable USB-C o Thunderbolt a su laptop
espera que, por arte de magia, funcionen dos monitores
el teclado, el mouse, la red por cable y la carga de la batería simultáneamente

Si algo falla, el flujo de trabajo se detiene por completo


#### 1. Docks: concentrador de problemas

No es un simple "alargador de cables"
es un dispositivo activo con sus propios controladores
chips de video embebidos (como la tecnología DisplayLink) y gestión de energía.

Síntomas:

1. No da video en los monitores externos:
La laptop carga y el mouse funciona, pero las pantallas conectadas al Dock se quedan en negro o parpadean

2. Desconexiones aleatorias:
El internet por cable (Ethernet) conectado al Dock se cae de la nada
o el teclado deja de responder por unos segundos

3. No carga la batería:
Todo funciona, pero la laptop muestra el icono de la batería descargándose

#### Diagnóstico

1. Hard Reset: 80% de las soluciones:
##### Los Docks se quedan congelados debido a problemas de negociación de energía (Handshake) con la laptop
Desconecta el Dock de la laptop, desenchufa la fuente de poder del Dock de la pared
presiona el botón de encendido del Dock durante 15 segundos
para drenar la energía residual, vuelve a conectar todo y prueba.

2. Verificación de especificaciones de energía (Watts):
Si la laptop no carga o se desconecta bajo carga, revisa el cargador del Dock
Las laptops corporativas potentes suelen requerir Docks con fuentes de alimentación de 130W o 180W
para poder alimentar el Dock y cargar la laptop al mismo tiempo
Si el usuario usó por error el cargador de un Dock más pequeño (por ejemplo, de 65W), el sistema fallará.

3. Actualización de Firmware y Drivers:
Muchas empresas usan Docks de marcas como Dell, HP o Lenovo
Estas marcas lanzan actualizaciones de Firmware específicas para los Docks para solucionar incompatibilidades con nuevas actualizaciones de Windows o Linux
Ejecuta la herramienta de soporte de la marca (como Dell Command | Update o Lenovo System Update) para actualizar el firmware del Dock.


#### 2. Periféricos: Monitores, Teclados, Mouses y Auriculares

El diagnóstico debe ser rápido y certero
para no perder tiempo en periféricos que simplemente están defectuosos

##### Monitores Externos (Problemas de parpadeo o resolución errónea):

Diagnóstico: Si la pantalla parpadea o se ve a una resolución muy baja (ej. 640x480) y no deja cambiarla
###### el problema suele ser el cable (HDMI/DisplayPort) que no tiene el ancho de banda suficiente o está dañado internamente
o el driver de video de la laptop que se corrompió.

Acción: Prueba conectar el monitor directamente a la laptop sin pasar por el Dock
Presiona `Windows + Ctrl + Shift + B` en Windows para reiniciar el driver de video por completo.


##### Periféricos Inalámbricos (Bluetooth / Dongle USB 2.4GHz):

Síntoma: El mouse o teclado va "a tirones" o pierde conexión.

Diagnóstico: Interferencia de radiofrecuencia
Los puertos USB 3.0 (azules) generan una interferencia electromagnética
que afecta a los receptores inalámbricos de 2.4GHz si están pegados.

Acción: Cambia el dongle USB a un puerto USB 2.0
o usa un cable extensor para alejar el receptor de la torre o del Dock.


##### Auriculares y Micrófonos
No me escuchan en Teams/Meet

###### Diagnóstico: El 95% de las veces es un problema de configuración de software, no de hardware

Diagnóstico: El 95% de las veces es un problema de configuración de software, no de hardware
(que el micrófono tenga permiso para ser usado por aplicaciones
verifica que en los ajustes de la aplicación de llamadas (Teams, Zoom)
esté seleccionado el dispositivo correcto como "Dispositivo de comunicación predeterminado"
y no el micrófono integrado de la laptop.


Rs:

Aísla el componente: Si el mouse no funciona en el Dock, conéctalo directo a la laptop.
Si ahí funciona, el problema es el Dock o su puerto.

Prueba cruzada: Conecta otra laptop conocida al mismo Dock.
Si funciona bien, el problema está en el software/drivers de la laptop del usuario original.

Drenaje de energía: Ante la duda con cualquier hardware de escritorio, desconecta de la corriente
mantén presionado el botón de encendido para liberar energía estática y vuelve a intentar



#### Tipos de perifericos

##### Entrada:

Teclado: Ingresa texto y comandos.

Ratón (Mouse): Controla el cursor en la pantalla

##### Cámara web (Webcam): Transmite video en tiempo real.

##### Escáner: Digitaliza documentos físicos.

##### Lector de códigos/QR: Escanea etiquetas para identificar productos


##### Salida:

Monitor: Muestra imágenes, texto y video

Altavoces (Parlantes): Reproducen sonido.

Auriculares: Salida de audio privada.

##### Impresora: Pasa documentos digitales a papel.

##### Proyector: Muestra la pantalla en una pared


##### Mixtos:

##### Pantalla táctil: Permite ver gráficos y tocarlos para dar órdenes.

##### Auriculares con micrófono: Ideales para llamadas o videojuegos.

##### Unidades de disco óptico (grabadoras de CD/DVD): Leen y escriben discos


##### Almacenamiento: Utilizados para guardar o respaldar información

Pendrive (Memoria USB): Portátil y versátil.
Discos duros externos: Gran capacidad de resguardo



## 2. Software

El hardware se rompe tarde o temprano
el software se corrompe constantemente

##### los fallos de hardware suelen ser binarios (algo funciona o no funciona),
##### los problemas de software viven en una escala de grises

Una actualización silenciosa a las 2:00 AM
un archivo de configuración mal editado
o un usuario que hizo clic donde no debía pueden desestabilizar un sistema operativo entero sin previo aviso.

##### ahora buscas rastros digitales, cambios en el entorno y conflictos de compatibilidad

#### Regla: Qué cambió?
Cuando un usuario te dice "La aplicación X no funciona"
tu primera pregunta mental (y a veces directa) nunca debe ser "¿Qué hizo?" (para no ponerlos a la defensiva)
##### sino "¿Cuándo fue la última vez que funcionó bien y qué pasó en el medio?".

El software es determinista: si algo funcionaba ayer y hoy no, algo cambió
Las causas más comunes de este cambio son:

Una actualización automática del sistema operativo o del programa.
La instalación de un nuevo software que generó un conflicto de librerías (.dll en Windows o dependencias en Linux).
La corrupción del perfil local del usuario o de su memoria caché.


### Intro

#### 3 Capas del Diagnóstico de Software
dividimos los problemas de software en tres niveles lógicos de sospecha:

1. Capa de Aplicación (El síntoma directo)

El problema está aislado en un programa específico
(ej. Microsoft Teams no abre, Excel se congela al usar macros).

Enfoque: El problema suele ser de la propia aplicación
##### Se resuelve limpiando la caché del programa, matando procesos "zombie"
en segundo plano, o reparando/reinstalando el software.

2. Capa de Usuario / Perfil (El entorno del cliente)

El programa falla para el Usuario A
pero si inicias sesión en la misma computadora con el Usuario B (o una cuenta de Administrador)
el programa funciona perfectamente.

Enfoque: El software está sano
##### lo que está roto son los permisos del usuario, sus claves de registro personales o sus archivos de configuración locales
(como la carpeta AppData en Windows o los archivos ocultos . en el home de Linux).

3. Capa del Sistema Operativo y Drivers (El suelo que pisan las apps)

La computadora experimenta pantallazos azules
parpadeos de pantalla, fallos al arrancar o lentitud generalizada

Enfoque: El problema es estructural
##### Aquí es donde entran en juego el análisis de los registros de error del sistema
la reversión de actualizaciones problemáticas o la reinstalación de controladores críticos
(como el de video o red).


Virus
"¡Me entró un virus, la computadora va lentísima!".
Suele ser un navegador web saturado con 50 pestañas abiertas
tres antivirus corporativos compitiendo entre sí por los mismos recursos
o un proceso indexador de archivos indexando el disco duro al 100%.

##### Tu deber es calmar al usuario, validar su frustración y demostrar con datos
(abriendo el Administrador de Tareas o el monitor de sistema) dónde está el verdadero cuello de botella.

##### En software, no adivines. Los sistemas operativos son ruidosos y siempre dejan una nota
##### Tu trabajo es saber leer esa nota



### Problemas de software comúnes

##### El 80% de los tickets diarios se concentran en un grupo muy selecto de fallos repetitivos
Si aprendes a identificar y resolver estos "sospechosos comunes", tendrás la mitad del trabajo resuelto

Clasificarlos por su naturaleza y cómo se manifiestan en la pantalla del usuario

1. Perfiles de Usuario y Caché Corrupta (El clásico "Ayer andaba")
El usuario jura que no ha tocado nada, pero hoy su navegador no carga la intranet de la empresa
o Microsoft Outlook se cierra solo al abrir la bandeja de entrada.

##### Por qué pasa: Las aplicaciones acumulan archivos temporales (caché), cookies y datos de sesión para ir más rápido
Si uno de estos archivos se escribe mal debido a un apagado repentino o microcorte de red
la aplicación entra en bucle al intentar leerlo.

Solución rápida:

En navegadores: Borrar cookies y caché (Ctrl + Shift + Del).

En aplicaciones de escritorio: Renombrar o vaciar la carpeta local de la app
(por ejemplo, en Windows dentro de %appdata% o %localappdata%
o los directorios de configuración ocultos en el home de Linux).
Al reiniciar la app, esta recrea los archivos desde cero y sanos.

2. Procesos "Zombie" y Bloqueos (La app no abre, pero "ya está abierta")
El usuario hace doble clic en el icono de un programa (ej. Teams, Excel, o un software interno)
No pasa nada
Vuelve a hacer clic diez veces y sigue sin abrirse.

##### Por qué pasa: El programa sufrió un error crítico al cerrarse la última vez y se quedó "colgado" en la memoria RAM como un proceso invisible (sin interfaz gráfica).
Cuando el usuario intenta abrirlo de nuevo, el sistema operativo ve que el proceso ya existe y bloquea la apertura de una nueva ventana.

solución rápida: Matar el proceso desde el Administrador de Tareas (Windows) o usando la terminal
Windows: `taskkill /f /im nombre_proceso.exe`
Linux: `killall -9 nombre_proceso o un rápido pkill`.

3. El Atasco de la Cola de Impresión (Print Spooler)
Un usuario envía un documento a imprimir, la impresora no tiene papel, se genera un error
y a partir de ahí, nadie más en la oficina puede imprimir
La cola de impresión se queda congelada en "Imprimiendo..." eternamente.

##### Por qué pasa: El servicio encargado de gestionar la cola de impresión de Windows (Spooler) se queda bloqueado intentando enviar un archivo corrupto o inaccesible a la impresora física

solución rápida: No basta con darle a "Cancelar documento".
Hay que detener el servicio, vaciar la carpeta intermedia y reiniciarlo
En la consola de Windows (como administrador) se resuelve en tres comandos

```
net stop spooler
del /Q /F /S "%systemroot%\System32\Spool\Printers\*.*"
net start spooler
```

4. Conflictos de Actualizaciones y Drivers
El usuario enciende la computadora por la mañana y se encuentra con que no tiene audio
la pantalla se ve gigante y estirada, o directamente experimenta un Pantallazo Azul (BSOD) en bucle.

##### Por qué pasa: Durante la noche, el sistema operativo instaló una actualización acumulativa o un nuevo driver genérico que no es 100% compatible con el hardware físico del equipo.

solución rápida:

Si el sistema arranca: Ir al Administrador de Dispositivos
buscar el componente (ej. tarjeta de video) y
seleccionar "Revertir al controlador anterior" (Rollback).

Si no arranca: Entrar en Modo Seguro (Safe Mode)  
o en el Entorno de Recuperación y seleccionar
"Desinstalar la última actualización de calidad".

5. Tokens de Autenticación Expirados y Bucles de Login

El usuario introduce su contraseña corporativa correcta
pero la aplicación (como OneDrive o la VPN) vuelve a pedirle la contraseña una y otra vez
muestra un error genérico de "No se pudo iniciar sesión".

##### Por qué pasa: Por seguridad, los sistemas modernos no guardan tu contraseña en texto plano; guardan un "Token de acceso" con fecha de caducidad

Si el reloj de la computadora del usuario está desincronizado por incluso 5 minutos con el servidor
o si el token se corrompió, la app rechazará la conexión.

solución rápida: Sincronizar la hora del sistema con un servidor NTP
cerrar sesión completamente en la cuenta de la app
ir al Administrador de Credenciales de Windows (o el llavero de contraseñas correspondiente)
y borrar las credenciales guardadas de esa app específica para forzar una negociación limpia desde cero.

##### Cuando un problema de software te deje desconcertado, aplica la regla de la cuenta nueva
##### Crea un usuario local temporal en esa máquina e inicia sesión con él.

Si el programa funciona bien ahí, el software está perfecto
el daño está localizado únicamente en el perfil del usuario original.


### Tipos de problemas de Software

1. Problemas a Nivel de Sistema Operativo (La Base)
Son fallos estructurales. No está fallando un programa; está fallando el suelo sobre el que pisan todos los programas
Suele afectar a todo el equipo por igual.

Síntomas comunes: Pantallazos azules (BSOD), bucles de reinicio, congelamientos totales del sistema, archivos del sistema corruptos
(errores de librerías .dll o kernel), y fallos catastróficos post-actualización.

##### Herramienta de diagnóstico principal: Visor de Eventos (Windows) o /var/log/syslog (Linux).

##### Enfoque de resolución: Herramientas de reparación profunda de archivos (sfc /scannow, DISM)
desinstalación de actualizaciones recientes o restauración del sistema.

2. Problemas de Aplicación (Productividad y LOB)
El sistema operativo está sano, pero un programa específico se niega a cooperar

##### Aquí dividimos el software en dos: Aplicaciones de productividad (Office, navegadores, Teams)
##### Software de Línea de Negocio (LOB) (el ERP de la empresa, el CRM o herramientas internas de desarrollo).

Síntomas comunes: La aplicación se cierra sola al abrirse (crash), da un error de "violación de acceso"
no responde a ciertos comandos o funciones, o se quedó congelada en segundo plano.

##### Herramienta de diagnóstico principal: Administrador de Tareas / Monitor de Sistema, y logs específicos de la propia aplicación.

##### Enfoque de resolución: Matar procesos zombie, borrar la caché local de la app (%appdata%), reparar la instalación o reinstalar.

3. Problemas de Identidad, Acceso y Permisos (Seguridad)

El software funciona perfecto
pero el usuario está "bloqueado por fuera". Son los tickets más rápidos de resolver
pero los que más frustración causan al usuario.

Síntomas comunes: Mensajes de "Acceso Denegado" al intentar entrar a una carpeta compartida en la red
contraseñas bloqueadas por intentos fallidos, bucles infinitos donde la aplicación pide login una y otra vez
o certificados digitales expirados.

##### Herramienta de diagnóstico principal: Consola de Active Directory / Azure AD, Administrador de Credenciales.

##### Enfoque de resolución: Reseteo de credenciales, desbloqueo de cuenta
asignación de grupos de seguridad correctos o limpieza de tokens de inicio de sesión.

4. Problemas de Conectividad de Software (SaaS y Nube)

Hoy en día, casi ningún software corre 100% aislado en la máquina
dependen de internet o de la red interna de la empresa
Estos problemas ocurren cuando el software pierde el puente de comunicación.

Síntomas comunes: El correo de Outlook se queda en "Desconectado" o "Intentando conectar"
la VPN corporativa da un error de Timeout al conectar
o una aplicación web interna muestra un error 502 Bad Gateway o 404 Not Found.

##### Herramienta de diagnóstico principal: Comandos de consola (ping, nslookup, tracert),
herramientas de inspección de red del navegador (F12).

##### Enfoque de resolución: Verificar si es un problema del servidor externo, limpiar la caché de DNS (ipconfig /flushdns), o revisar las reglas locales del Firewall/Antivirus.

5. Enfoque de resolución: Verificar si es un problema del servidor externo, limpiar la caché de DNS (ipconfig /flushdns), o revisar las reglas locales del Firewall/Antivirus.

La computadora funciona y no da errores, pero el usuario reporta que "está insufriblemente lenta".

Síntomas comunes: Retraso (lag) al escribir, el ventilador de la laptop suena como una turbina de avión constantemente
las aplicaciones tardan minutos en abrir o el sistema se vuelve inútil después de un par de horas de uso.

##### Herramienta de diagnóstico principal: Monitor de Recursos (para ver gráficos de uso de CPU, RAM y Disco en tiempo real).

##### Enfoque de resolución: Detectar fugas de memoria (Memory Leaks) en programas mal optimizados
deshabilitar aplicaciones innecesarias en el arranque del sistema
o limpiar el almacenamiento si el disco duro está al borde de su capacidad máxima.

Rs:

Afecta a todo el equipo? 👉 Sistema Operativo / Rendimiento.
¿Afecta a un solo programa? 👉 Aplicación / Conectividad de Software.
¿El error dice "No autorizado" o "Inválido"? 👉 Identidad y Permisos.



### Gestión de usuarios, permisos, servicios y logs


#### Gestión de usuarios

Son las llaves de acceso al sistema.
No se trata solo de crear cuentas y resetear contraseñas porque alguien olvidó dónde anotó su clave

##### es la primera línea de defensa de la ciberseguridad de una empresa y el tipo de ticket más frecuente que vas a recibir.

##### Objetivo: concepto fundamental de seguridad: Principio de Menor Privilegio (Least Privilege).

##### Significa que un usuario debe tener acceso únicamente a los recursos que necesita para hacer su trabajo, ni un ápice más

Si el recepcionista tiene permisos de administrador
o acceso a la carpeta de finanzas, tarde o temprano habrá un problema.


Window: 

##### En entornos empresariales, Windows rara vez se administra de forma local máquina por máquina
En su lugar, te moverás en dos terrenos:

1. Entorno Local (Puestos aislados o grupos de trabajo)
realidad: Se usa para configurar la máquina antes de entregarla o para soporte de emergencia.

Herramientas clave:

La consola gráfica `lusrmgr.msc` (Administrador de usuarios y grupos locales).

La línea de comandos mediante el comando `net user`
(útil para diagnosticar rápido o crear scripts de automatización).

##### Concepto clave: Las cuentas viven en la base de datos SAM (Security Accounts Manager) del propio disco duro 
Si esa máquina muere, ese usuario local no puede iniciar sesión en otra.

2. Entorno de Dominio (Active Directory / Azure AD / Entra ID)

realidad: El 95% de tus tickets de Windows. Los usuarios no pertenecen a la PC, pertenecen a la red de la empresa.

flujo diario: El usuario se bloquea al meter mal la contraseña tres veces
##### Tu trabajo consiste en entrar a la consola de Active Directory, buscar su perfil
##### hacer clic en "Unlock Account" o "Reset Password" y forzar a que cambie la clave en el próximo inicio de sesión.

##### Grupos de Seguridad: En lugar de darle permisos a "Juan" para entrar a una carpeta compartida
##### creas un grupo llamado Finanzas_Read_Only, metes a Juan ahí, y le das permisos al grupo
Gestión limpia y escalable.


Linux: 

Filosofía "Todo es un Archivo"

En Linux (muy común en servidores de la empresa o estaciones de trabajo optimizadas/ligeras)
##### la gestión de usuarios es sumamente estructurada, transparente y predominantemente basada en la Línea de Comandos (CLI).

##### Diagnosticar usuarios en Linux implica conocer la "Santísima Trinidad" de los archivos de configuración en /etc/:

##### 1. /etc/passwd: Contiene la lista de todos los usuarios del sistema
su ID de usuario (UID), su ID de grupo (GID)
su directorio home y la shell que usan (ej. /bin/bash).
Es legible por cualquiera

##### 2. /etc/shadow: Aquí viven las contraseñas reales, pero encriptadas (hasheadas).
##### Solo el superusuario (root) puede leer este archivo por razones obvias de seguridad.

##### 3. /etc/group: Define los grupos del sistema y qué usuarios pertenecen a cada uno


Comandos de Diagnóstico y Gestión Diaria:

`useradd / userdel`: Para crear o eliminar cuentas.

`usermod -aG [grupo] [usuario]`:
Para añadir a un usuario a un grupo específico
(como el grupo `sudo` o `wheel` para darle privilegios de administrador).

`passwd [usuario]`: Para cambiar o resetear la contraseña de un empleado de forma instantánea.

`chown y chmod`: Para corregir el clásico ticket de "No puedo guardar mi archivo de configuración en Linux"
el cual suele ser un problema de pertenencia o de permisos de lectura/escritura en el directorio


##### Mayor Peligro en Help Desk: La Ingeniería Social
###### Como técnico de Help Desk, serás el blanco favorito de los atacantes

Un escenario clásico de examen de certificación (y de la vida real)
es recibir una llamada o un chat que dice:

```
"Hola, soy el Director de Operaciones, estoy de viaje en un aeropuerto
olvidé mi contraseña y necesito que la resetees YA por la de defecto (123456) porque entro a una junta importante
```

##### Un buen profesional de Help Desk valida la urgencia, mantiene la empatía, pero nunca rompe el protocolo de verificación de identidad (llamar a su número registrado, pedir aprobación de su mánager o usar un canal seguro).



#### Permisos

Definen a qué puede entrar cada persona y qué puede hacer una vez dentro

Los problemas de permisos
suelen presentarse con un mensaje idéntico en la pantalla del usuario: "Acceso Denegado"
(Access Denied) o "No tiene permisos para realizar esta acción".

Windows: El ecosistema NTFS y Compartición

##### Windows maneja la seguridad de archivos principalmente a través del sistema de archivos NTFS (New Technology File System).
debes entender que existen dos capas de seguridad que interactúan entre sí.

1. Permisos de Compartición (Share Permissions)
Determinan el acceso a una carpeta cuando se accede a ella a través de la red
(por ejemplo, `\\servidor\carpetas_finanzas`).

Son básicos: Leer, Cambiar y Control Total.
Solo aplican a carpetas, no a archivos individuales.

2. Permisos NTFS (Seguridad Local)
Determinan qué puede hacer el usuario con el archivo o carpeta
No importa si está sentado frente a la máquina física o accediendo por red.

Son más granulares:
Lectura, Escritura, Modificar, Leer y Ejecutar, Listar el contenido de la carpeta y Control Total.

##### Regla en Windows: Cuando un usuario accede a una carpeta compartida por red
Cuando un usuario accede a una carpeta compartida por red
el sistema operativo calcula los Permisos de Compartición y los Permisos NTFS
###### Si en Red tiene "Control Total" pero en NTFS tiene "Solo Lectura", el usuario solo podrá leer


La Herencia (Inheritance) y Permisos Efectivos
Por defecto, cualquier archivo o subcarpeta creado dentro de una carpeta "madre" hereda automáticamente los mismos permisos.

Ticket Común:
Un usuario es movido al grupo de "Marketing" pero sigue sin poder entrar a la carpeta de su equipo.

Herramienta de Diagnóstico:
Das clic derecho en la carpeta ➡️ Propiedades ➡️ Pestaña Seguridad ➡️ Opciones Avanzadas ➡️ Pestaña Permisos Efectivos (Effective Access).
Ahí escribes el nombre del usuario y Windows calculará exactamente qué puede hacer
sumando todos los grupos de Active Directory a los que pertenece.


Permisos en Linux: La simplicidad del `rwx`
utiliza un enfoque mucho más directo y estructurado

Cada archivo y carpeta en el sistema tiene un dueño
un grupo asignado, y tres tipos de permisos básicos representados
las letras r (Read/Lectura), w (Write/Escritura) y x (Execute/Ejecución).

Al listar un directorio con el comando ls -l, verás una cadena de 10 caracteres como esta: -rwxr-xr--

1. El primer carácter indica el tipo de archivo
(- es un archivo normal, d es un directorio).

2. Los siguientes 3 (rwx): Permisos del Dueño (User/Owner).

3. Los del medio (r-x): Permisos del Grupo (Group).

4. Los últimos 3 (r--): Permisos del Resto del mundo (Others).


Notación Octal (Numérica)
solucionar problemas rápido por consola
los técnicos de Help Desk usan números

A cada letra se le asigna un valor binario:

r (Lectura) = 4

w (Escritura) = 2

x (Ejecución) = 1

Sumando estos valores obtienes un número del 0 al 7 para cada nivel (Usuario, Grupo, Otros):

`755 (rwxr-xr-x)`: El dueño hace todo; el grupo y el resto solo leen y ejecutan (común en programas o carpetas públicas).
`644 (rw-r--r--)`: El dueño lee/escribe; el resto solo lee (estándar para archivos de texto o documentos).
`700 (rwx------)`: Privado absoluto. Solo el dueño tiene acceso.


Comandos de rescate en Help Desk:

`chmod 755 archivo.sh`: Cambia los permisos del archivo para que sea ejecutable.

`chown usuario:grupo archivo.txt`: Cambia el dueño y el grupo de un archivo
archivo (esencial cuando un usuario copia un archivo de otra máquina y el sistema le dice "Acceso denegado" porque el propietario original era otro).


Protocolo de Troubleshooting ante un "Acceso Denegado"
ticket de permisos
tres pasos lógicos antes de tocar nada:

1. Verifica la identidad: ¿El usuario realmente inició sesión con la cuenta corporativa correcta o está usando una cuenta local/temporal?

2. Rastrea los Grupos: ¿El usuario pertenece al grupo de seguridad de Active Directory o de Linux que tiene asignado el acceso a ese recurso?
(A veces acaban de ser contratados y el departamento de RRHH olvidó pedir su inclusión en el grupo).

3. Efecto "Cierre de Sesión":
En entornos Windows/Active Directory, si añades a un usuario a un nuevo grupo de seguridad para darle acceso a una carpeta
el cambio no aplicará hasta que el usuario cierre sesión y vuelva a iniciarla (o reinicie el equipo) para renovar su token de seguridad.



#### servicios

##### Los servicios (llamados daemons o demonios en Linux) son el equipo de tramoya que trabaja a oscuras detrás del telón.

##### Un servicio es un programa que se ejecuta en segundo plano (background) desde que el sistema operativo arranca
mucho antes de que el usuario siquiera ponga su contraseña
controlan el audio, las conexiones de red, las actualizaciones, las colas de impresión y las herramientas de seguridad.

Dominar los servicios te ahorrará un 90% de formateos o reinstalaciones innecesarias

Cuando una aplicación "no abre" o una función del sistema falla de golpe
el primer instinto de un técnico junior es reinstalar
##### el instinto de un técnico experimentado es revisar si el servicio está corriendo


Windows: El panel `services.msc`
los servicios se gestionan principalmente desde una consola centralizada de Microsoft (MMC).

Tipos de inicio: Startup Types a diagnosticar

1. Automatic:
El servicio arranca solo junto con Windows
Si uno de estos está detenido (como el cliente DHCP), hay un problema grave.

2. Manual:
El servicio está "dormido" hasta que un programa lo necesita y lo despierta
Por ejemplo, el servicio de Xbox corporativo suele estar en manual o deshabilitado

3. Disabled:
El servicio no se ejecutará bajo ninguna circunstancia
Es común que las políticas de la empresa deshabiliten servicios por seguridad
(como el uso de Bluetooth o almacenamiento USB).


Estados del Servicio: States
El verdadero dolor de cabeza ocurre cuando un servicio se queda en estado "Deteniendo" (Stopping) o "Iniciando" (Starting).
Significa que el proceso se quedó colgado en un bucle lógico

No puedes darle "Iniciar" porque el sistema cree que ya está intentando hacer algo.

Solución Help Desk: 
##### Debes buscar el ID del proceso (PID) en el Administrador de Tareas
"matar" el árbol de procesos a la fuerza para poder reiniciarlo limpiamente.


Linux: `systemd`
Casi todos los servicios terminan con la letra `d` (de `daemon`).

`sshd`: El servicio que permite conexiones remotas por consola de forma segura
`cron` o `crond`: El servicio que ejecuta tareas programadas automáticamente.
`cupsd`: El sistema de impresión común de Linux
equivalente al Print Spooler de Windows

Comandos:
comando maestro en la terminal: `systemctl`

```
systemctl status sshd
```

reporte detallado
##### Si ves la palabra active (running) en verde, todo está bien
##### Si ves failed o inactive, hay que investigar).

Reinicio Rápido

```
systemctl restart NetworkManager
```

Si el usuario de Linux pierde internet de la nada
reiniciar el administrador de red por consola suele solucionar microcortes de drivers sin reiniciar la máquina

Habilitar/Deshabilitar en el arranque

Arranca siempre al encender:
```
systemctl enable sshd
```

Ya no arranca solo
```
systemctl disable sshd
```

Enfoque Help Desk:
Ej: error de "Inicio de Sesión" (Logon Failure)

Un ticket clásico de nivel intermedio ocurre cuando un software de la empresa
(por ejemplo, el agente del antivirus o un conector de base de datos) deja de funcionar tras un cambio de políticas de seguridad.
Vas a mirar el servicio y dice: `"Error de inicio de sesión"`
o `"Logon Failure"`.

##### Caso: Por seguridad, muchos servicios no corren bajo la cuenta del sistema (`Local System`), sino bajo una cuenta de usuario específica o una cuenta de servicio de red.
Si el departamento de TI cambió las contraseñas de red obligatoriamente
y olvidó actualizar las credenciales dentro de la pestaña `*Iniciar Sesión*` (Log On) del servicio
este se bloqueará y se negará a arrancar.



#### logs: registros del sistema

Como la caja negra de un avión:
Cuando un usuario te llama diciendo "La computadora se apagó sola"
"El programa se cerró de la nada y no dejó ningún mensaje"

##### el sistema operativo casi siempre ha guardado un registro de lo que ocurrió exactamente un milisegundo antes del colapso.
Se va directo a los logs para encontrar la causa raíz del problema
##### Los logs registran eventos, advertencias y errores críticos ordenados cronológicamente


Windows: Visor de Eventos `eventvwr.msc`
centraliza prácticamente todos sus registros en esta herramienta
Al abrirla, verás miles de registros

##### pero para el soporte diario te vas a concentrar en la carpeta Registros de Windows (Windows Logs),
que se divide en tres secciones clave:

##### Tres Carpetas Sagradas de Windows

1. Application:
Aquí se registran los fallos de los programas.
Si Microsoft Excel o el software contable de la empresa se cierran solos ("crashean")
##### aquí verás un evento de nivel Error que te dirá qué archivo `.dll` o qué línea de código causó el fallo.

2. Security:
Registra los intentos de inicio de sesión
Si un usuario jura que está bloqueado pero que "puso bien la contraseña"
##### aquí verás eventos de Auditoría de errores (Failure Audit) con códigos específicos
(como el famoso error 0xC000006A), que demuestran que introdujo una clave incorrecta

3. System:
##### Aquí habla el hardware y los componentes base de Windows.
Si un driver de video falló
si el disco duro detectó un sector corrupto (evento disk)
o si la PC se apagó por sobrecalentamiento, la explicación estará aquí.

Niveles de Gravedad:

1. Information
Operaciones normales (ej. un servicio se inició correctamente).
Puedes ignorarlos el 99% de las veces.

2. Warning
Algo no va del todo bien, pero el sistema puede seguir funcionando
(ej. un disco duro tardó mucho en responder o el DNS falló temporalmente).

3. Error
Problema grave que causó la pérdida de una función o el cierre de una app.

4. Crítico
Sistema colapsó por completo
(ej. un apagón inesperado o un Pantallazo Azul).


Linux:
Directorio `/var/log/` y `journald`

Filosofía de que "todo es un archivo"
##### la inmensa mayoría de los logs son archivos de texto plano que viven dentro del directorio /var/log/. Esto
puedes leerlos, filtrarlos y analizarlos usando comandos nativos de la terminal.

Archivos de Registro Clave:

1. `/var/log/syslog` o `messages`:
##### El registro general del sistema
##### Todo lo que pasa a nivel global de hardware, servicios y scripts se anota aquí
##### Es el primer lugar al que debes mirar.

2. `/var/log/auth.log`:
El equivalente a la pestaña de Seguridad de Windows
##### Registra cada intento de inicio de sesión
el uso del comando sudo
y los accesos remotos por SSH
##### Vital para detectar si alguien está intentando adivinar contraseñas de un servidor de la empresa.

3. `/var/log/dpkg.log` o `/var/log/apt/history.log`:
##### Registra qué paquetes, aplicaciones o actualizaciones se instalaron o eliminaron
Ideal cuando un usuario dice "Hoy llegué y la app ya no abre";
##### miras este log y descubres que ayer desinstaló una librería sin querer.

Comandos para leer logs:

##### No abras estos archivos con un editor de texto pesado si miden gigabytes

##### Ver errores en tiempo real: comando definitivo de Help Desk
Muestra las últimas líneas del archivo y se actualiza en vivo mientras el usuario recrea el error

```
tail -f /var/log/syslog
```

##### Buscar un error específico: 
Filtra el archivo usando grep para no leer miles de líneas basura

```
cat /var/log/syslog | grep -i "error"
```

El visor moderno `journalctl`:
Si la distribución usa `systemd`,
los logs se gestionan de forma binaria y ultra rápida.

Para ver los logs de un servicio específico que no quiere arrancar
(por ejemplo, el de la VPN o SSH):

```
journalctl -u sshd.service --no-pager | tail -n 20
```

##### Enfoque Help Desk: Cómo buscar el ID del error?
Cuando encuentres un error crítico en Windows o Linux,
verás que viene acompañado de un código numérico o alfanumérico
(ej. en Windows un `Event ID 1000` o un `código de error *0x80070005*`).

##### Tu protocolo debe ser:

##### 1.  Anotar el `Event ID / Código de error` y el nombre de la aplicación afectada.
##### 2.  Buscar en la documentación interna de la empresa (Knowledge Base) si ya le pasó a otro usuario.
##### 3.  Si es un error nuevo, buscar en foros técnicos especializados (como Microsoft Learn o StackOverflow) combinando el código del error con el síntoma. La solución exacta casi siempre ya fue descubierta por otro técnico en el mundo.



## 3. Redes

Protocolo TCP/IP, direccionamiento (IP, Máscara, Gateway, DNS),
DHCP y solución de problemas:
comandos esenciales (ping, traceroute/tracert, nslookup, ipconfig/ifconfig).


### Intro a Redes

Si el sistema operativo de un usuario falla, se detiene una persona
pero si la red falla, se puede detener un departamento entero, una oficina o la facturación de la compañía

Cuando un usuario te dice "No tengo internet", "No puedo entrar al sistema de la empresa" o
"La impresora no responde", tu trabajo no es configurar los routers principales de la corporació

##### Tu misión en Help Desk es diagnosticar la conectividad del cliente: descubrir exactamente en qué punto de la tubería se cortó el flujo de datos

Forma agnóstica (sin importar si usas Windows, Linux, macOS o un teléfono móvil)

1. Cadena de Conexión: El Camino del Dato

##### Para resolver problemas de red, debes visualizar el camino físico y lógico que recorre la información
desde el dispositivo del usuario hasta el servidor de destino

Si conoces la cadena, puedes probar eslabón por eslabón:

`Dispositivo (Cliente)`:
La computadora, laptop o smartphone
Puede tener la tarjeta de red apagada, en modo avión o con drivers corruptos.

`Medio`:
El cable de red (Ethernet) o las ondas de Wi-Fi.
Un cable mal crimpado o la interferencia de una pared gruesa cortan la conexión aquí.

`Conmutador/Switch`:
Dispositivo de la oficina donde se interconectan todas las computadoras locales (LAN).
Si el switch se apaga, la oficina se queda "ciega" localmente
(no pueden hablar entre ellos ni ver las impresoras de la oficina).

`Proveedor de Internet (ISP) y la Nube`:
Movistar, Claro, Comcast, etc
Si el proveedor tiene una caída, tú puedes hablar con tus compañeros de oficina
pero nadie puede salir a Google, Teams o el correo electrónico.

2. 4 Pilares de la Configuración de Red

##### Cada vez que un dispositivo se conecta a una red, necesita cuatro datos lógicos cruciales
Si uno solo de estos números está mal configurado, el usuario experimentará una "caída de red".

```
IP address
Subnet Mask
Default Gateway
DNS Server in a network
```

1. Dirección `IP`: dirección postal
Es el número único que identifica a un dispositivo dentro de una red
Ningún dispositivo puede comunicarse sin una IP.

Enfoque Help Desk: El problema más común es el conflicto de IP
(dos máquinas con el mismo número)
o que el servidor automático (DHCP) se quedó sin direcciones para asignar
dejando al usuario sin IP válida.

2. Máscara de `Subred`: límites de tu barrio
número que le dice al dispositivo qué parte de su dirección IP pertenece a su red local (su oficina)
y qué parte pertenece al exterior.

Enfoque Help Desk: 
Si la máscara está mal escrita (un error común al configurar IPs fijas a mano)
la computadora pensará que un compañero que está en el escritorio de al lado está en otra red y no podrá enviarle archivos

3. Puerta de Enlace Predeterminada: `Default Gateway` / Tu `puerta de salida`
Es la dirección IP del router local.
Cuando tu computadora nota que la página web que buscas
(ej. google.com) no está dentro de la oficina
le empaqueta los datos y se los envía a la Puerta de Enlace para que los saque al exterior
para que los saque al exterior.

Enfoque Help Desk:
Si un usuario puede imprimir en la oficina pero no puede entrar a ninguna página web
su dirección IP y máscara están bien
pero su Puerta de Enlace está mal configurada o el router se congeló.

4. Servidor DNS: libro/registro de todas las webs
Las computadoras no entienden qué es google.com o intranet.empresa.local
ellas solo entienden direcciones IP numéricas (como 142.250.74.46).
##### El DNS (Domain Name System) es el traductor que convierte los nombres que escriben los humanos en los números que entienden las máquinas

Enfoque Help Desk:
Si el DNS falla, el usuario se quejará de que "no tiene internet"
Sin embargo, la red funciona perfectamente
lo que pasa es que el navegador no sabe cómo traducir el nombre de la página


Diagnóstico de Redes
Ante cualquier ticket de soporte de red
un técnico exitoso divide el problema en tres preguntas lógicas:

1. El problema es de "mí" hacia el switch?
(¿Falla solo este usuario?)
Si es así, reviso su cable, su Wi-Fi o su configuración IP.

2. El problema es de la oficina hacia el router?
(¿Fallan todos en el mismo piso?)
Si es así, el problema es el switch de ese sector.

3. problema es del router hacia afuera?
(¿Nadie en la empresa tiene internet, pero sí pueden imprimir?)
El problema es el router principal, el proveedor de internet (ISP)
o el servidor del servicio en la nube
(ej. caída global de Microsoft o AWS).



### Problemas comunes de Redes

Linux:
no hay "Centro de redes y recursos compartidos"

#### todo se reduce a interrogar al sistema mediante archivos de configuración y comandos de la suite iproute2
##### (la versión moderna que reemplazó a los viejos comandos como ifconfig).

Cuando un usuario de Linux (ya sea en un servidor corporativo o en una estación de trabajo)
reporta problemas de red
estos son los 5 escenarios comunes que vas a diagnosticar a diario en el Help Desk

1. Dispositivo no recibe IP (Fallo de DHCP)

##### Síntoma clásico: el usuario no tiene acceso a nada y, al revisar, la interfaz de red no tiene una dirección IP asignada o tiene una IP vacía
En Linux, a diferencia de Windows, las interfaces pueden quedarse "dormidas" o desconfiguradas tras una suspensión

`mentira técnica común`:
Muchos técnicos junior todavía intentan usar `ifconfig`
ifconfig está obsoleto desde hace años. Ahora `usamos ip`.

Comando de diagnóstico:
`ip a`
Busca tu interfaz, que suele llamarse
`eth0`, `enp3s0` para cable o `wlan0` para Wi-Fi
Si no ves una línea que diga
`inet 192.168.X.X`, no tienes IP

solución de Help Desk:
##### Forzar al cliente DHCP de Linux (dhclient)
pedir una dirección nueva al router de la empresa:

```
sudo dhclient -r  # Libera la IP actual
sudo dhclient -v  # Solicita una nueva IP mostrando el progreso
```


2. "Tengo Ping a Google pero no abren las páginas" (Fallo de DNS)

El usuario te dice que no tiene internet, pero tú abres la terminal
haces `ping 8.8.8.8` (la IP de Google) y responde perfectamente
Sin embargo, haces `ping google.com` y da un error.

En Linux:
El archivo encargado de decirle a Linux a qué servidores DNS debe consultar
(/etc/resolv.conf) se corrompió
está vacío o fue mal escrito por el administrador de red.

Comando de diagnóstico:

```
cat /etc/resolv.conf
```

(Deberías ver una línea como `nameserver 8.8.8.8` o la IP del DNS de tu empresa
Si está vacío o apunta a una IP inexistente, ahí está el fallo).

solución de Help Desk:
En sistemas modernos con  `systemd`
el DNS se gestiona de forma dinámica
Puedes verificar el estado real con:

```
resolvectl status
```

Si necesitas una solución temporal de emergencia
para que el usuario siga trabajando
##### puedes editar el archivo a mano (sudo nano /etc/resolv.conf)
##### y añadir un DNS público como nameserver 1.1.1.1.


3. La interfaz está apagada o bloqueada por Software (RF-Kill)

En laptops corporativas con Linux
es muy común que el usuario toque sin querer el botón físico de "Modo Avión" 
o que el sistema operativo apague la antena Wi-Fi para ahorrar energía y no sepa cómo volver a encenderla

Comando de diagnóstico

```
nmcli dev status
```
(Este comando de NetworkManager te muestra el estado de todas las tarjetas
##### Si dice `disconnected o unavailable`, la tarjeta está apagada).


Bloqueo "fantasma" (RFKILL):
Linux tiene un sistema de seguridad llamado `rfkill`
que bloquea las conexiones por hardware o software. Compruébalo con:

```
rfkill list
```

solución de Help Desk:
`Si ves que el Wi-Fi dice Soft blocked: yes`
desbloquéalo instantáneamente con:

```
sudo rfkill unblock wifi
sudo ip link set wlan0 up  # Enciende la interfaz lógicamente
```


4. Pérdida del Default Gateway (Problema de Enrutamiento)

##### El usuario puede comunicarse con las computadoras de la oficina y puede imprimir
##### pero cuando intenta salir a una dirección externa o a la VPN la conexión muere.

##### Pasa porque Linux olvidó cuál es la "puerta de salida" (el router).

Comando de diagnóstico:

```
ip route
```

(La primera línea debe empezar con la palabra default via [IP_DEL_ROUTER].
Si esa línea no existe, la computadora está atrapada dentro de su propia red local).

solución de Help Desk:
Añadir la ruta por defecto manualmente
(reemplazando por la IP del router de la oficina):

```
sudo ip route add default via 192.168.1.1
```


5. El Firewall local bloquea las conexiones entrantes

Un desarrollador de la empresa montó un servicio web en su máquina Linux para mostrarle un avance a su mánager
pero cuando el mánager intenta ingresar desde su propia computadora
da un error de conexión rechazada.

qué pasa: Las distribuciones Linux suelen venir con firewalls activos por defecto
##### (UFW en Ubuntu/Debian o Firewalld en RedHat/Fedora)
que bloquean todo el tráfico que viene de afuera por seguridad.

Comando de diagnóstico:
`sudo ufw status`

##### Solución de Help Desk: No apagues el firewall por completo (eso rompería las políticas de seguridad).
##### En su lugar, abre el puerto específico que el usuario necesita
(por ejemplo, el puerto 8080):

`sudo ufw allow 8080/tcp`


#### Rs redes

`ip a` -> ¿Tengo IP?
`ip route` -> ¿Sé cómo salir a internet?
`ping -c 4 8.8.8.8` -> ¿Tengo conexión física al exterior? (El -c 4 es vital en Linux, ya que a diferencia de Windows, el ping aquí es infinito a menos que lo limites o lo frenes con Ctrl + C).
`nslookup google.com` -> ¿Funciona el traductor de nombres (DNS)?



### Tipos o clasificación 

cuando manejas sistemas Linux
(ya sea el servidor de la empresa
un entorno de desarrollo o estaciones de trabajo)
##### no necesitas diseñar la arquitectura de la red
##### pero sí necesitas identificar en qué tipo de red está metido el usuario para saber dónde buscar el fallo

1. Clasificación por Alcance Geográfico (La Infraestructura)

`LAN (Local Area Network - Red de Área Local)`
La red física de la oficina o de la casa del usuario conectado por cable (Ethernet) o Wi-Fi.
Interconecta los equipos locales, impresoras y servidores locales

Interfaz típica en Linux:
`eth0, enp3s0 (cable), wlan0 (Wi-Fi)`.

Uso en Help Desk:
Es lo primero que revisas con `ip a`.
Si el usuario no puede ver la impresora de la oficina
el problema está bloqueado a nivel de LAN.


`WAN (Wide Area Network - Red de Área Amplia)`:
La red que conecta diferentes ciudades o países
Para fines prácticos en Help Desk, la WAN es Internet.
Es la red que provee el ISP (proveedor de internet).

en Linux:
Se identifica mediante la ruta por defecto en el comando
`ip route`
(el Default Gateway que te saca al exterior).

Uso en Help Desk:
Si el usuario tiene IP local pero no puede navegar a páginas externas
el eslabón roto está en la conexión WAN.


2. Clasificación Lógica y Virtual (El software de red)

`VPN (Virtual Private Network - Red Privada Virtual)`
Un túnel cifrado y seguro que viaja a través de la WAN (Internet)
para conectar la computadora remota del usuario (en teletrabajo)
con la LAN física de la empresa.

en Linux:
`tun0, tap0 (OpenVPN) o wg0 (WireGuard)`.

Uso en Help Desk:
Clásico ticket de "Estoy en mi casa y no puedo abrir el sistema interno".
Revisas con `ip a` si la interfaz `tun0 o wg0`
está activa y tiene una IP asignada por el servidor VPN corporativo.


`VLAN (Virtual LAN - Red de Área Local Virtual)`
Una segmentación lógica dentro del mismo switch físico
Permite que la empresa separe, por ejemplo, la red de "Invitados" de la red de "Finanzas" o "Desarrolladores"
para que no se vean entre sí por seguridad.

en Linux:
Se muestra como una subinterfaz etiquetada con un punto
y el ID de la VLAN (ej. `eth0.10` para la VLAN 10).

Uso en Help Desk:
Si un desarrollador o administrador no puede acceder a un servidor
a veces es porque conectó su cable en la boca del switch equivocada
y quedó asignado a una VLAN sin permisos de acceso.


`Loopback (Red de Retorno Local)`
Una red puramente virtual e interna que tiene cada máquina Linux
Sirve para que la computadora hable consigo misma
Su dirección IP universal es siempre 127.0.0.1 (localhost).

Linux: `lo`.

en Help Desk:
Es la prueba de vida de la tarjeta de red
Si ejecutas `ping 127.0.0.1` y no responde
el sistema operativo tiene los drivers de red completamente rotos
o corruptos a nivel de software base.

Loopback
lo
Verificar si el software de red del propio Linux funciona
ping 127.0.0.1

LAN
`eth0 / wlan0`
Conectarse al router de la oficina, impresoras y compañeros
`ip a` (busca tu IP privada)

WAN
default via...
Salir a Internet, servicios en la nube (SaaS), Teams, etc
`ping 8.8.8.8 / ip route`

VPN
`tun0 / wg0`
Acceder a los servidores internos de la empresa desde la casa.
`systemctl status openvpn`

VLAN
`eth0.100`
Aislar departamentos por seguridad dentro del mismo cableado.
`ip -d link show`



## Comandos esencales

##### Son las herramientas de diagnóstico primario
##### Cuando un usuario se queda sin conexión, no abres un panel de control
##### abres la terminal e interrogas a la red secuencialmente para aislar el fallo

1. ping: La prueba de vida (¿Me escuchas?)
utiliza el protocolo ICMP (Internet Control Message Protocol) para enviar un paquete "Eco" a una dirección y esperar su retorno.
##### Es la forma más rápida de saber si un dispositivo está encendido y conectado

Utilidad:
Comprobar conectividad física y de red básica
Te permite aislar si el problema es del cliente o del destino.

en Linux: A diferencia de Windows (que solo envía 4 paquetes y se detiene)
el ping en Linux es infinito por defecto
Si lo dejas corriendo, seguirá hasta el fin de los tiempos o hasta que lo frenes con Ctrl + C.

Uso correcto en soporte:
`ping -c 4 8.8.8.8`

(El parámetro -c 4 le ordena enviar exactamente 4 paquetes y detenerse
Si el packet loss es del 0%, la conexión física al exterior está perfecta).


2. traceroute: El mapa del viaje (¿Dónde se corta el cable?)

Mientras que ping te dice si llegas, traceroute (el equivalente al tracert de Windows)
##### te muestra el camino exacto que recorre tu paquete, salto por salto (hop por hop)
pasando por cada router hasta llegar al destino.

Help Desk:
Identificar el punto exacto de falla en la red corporativa o externa
##### Si el usuario no llega a un servidor en la nube, traceroute te dirá si el paquete se muere en el router de tu oficina
en el proveedor de internet (ISP) o en el destino.

Uso correcto en soporte:

```
traceroute google.com
```
(Verás una lista numerada de IPs.
Si a partir del salto 3 solo ves asteriscos (* * *),
significa que el router del salto 3 está tirando tus paquetes o está caído).

Si traceroute no está instalado en sistemas ligeros
puedes usar `mtr google.com`, que combina ping y traceroute en una pantalla interactiva en tiempo real


3. nslookup: El inspector del traductor (¿Funciona el DNS?)

##### Comando realiza consultas directas a los servidores DNS (Domain Name System).
Le preguntas por un nombre (como google.com)
y te devuelve la dirección IP numérica que le corresponde.

Utilidad:
##### "Tengo ping a las IPs, pero el navegador no me carga ninguna página".
Si nslookup falla o da Timeout, el servidor DNS del usuario está caído o mal configurado.

Uso correcto en soporte:

```
nslookup intranet.empresa.local
```

(Te devolverá la IP del servidor interno
Si quieres probar si el problema es del DNS local de la oficina
puedes forzar a nslookup a consultar a un DNS externo
por ejemplo el de Cloudflare, añadiendo la IP al final):

`nslookup google.com 1.1.1.1`

pro: En el mundo Linux moderno
el comando nativo preferido por los administradores
es `dig`, (ej. dig google.com),
ya que ofrece mucha más información técnica de las respuestas DNS
aunque nslookup sigue siendo el estándar multiplataforma.


4. ip a (El reemplazo de ifconfig / ipconfig)

punto crítico de actualización técnica: ipconfig es exclusivo de Windows
En Linux, el comando tradicional era ifconfig (de la suite net-tools),
pero actualmente está obsoleto y muchas distribuciones modernas ya no lo traen instalado por defecto

##### Hoy usamos ip a (abreviatura de ip address show de la suite iproute2).

Utilidad:
Ver la configuración de red local del propio equipo.
Aquí revisas qué tarjetas de red tiene el usuario (Ethernet, Wi-Fi, VPN)
si están encendidas (UP) o apagadas (DOWN)
y qué dirección IP y Máscara de Subred tienen asignadas.

Uso correcto en soporte::
`ip a`

fijarse: Busca tu interfaz activa (ej. eth0 o wlan0).
Revisa la línea que empieza con inet.
Si ves una IP que empieza por 169.254.X.X
el servicio DHCP de la oficina no le está dando IP al usuario
(fallo de direccionamiento).


### Flujo de diagnóstico en Help Desk:
##### Cuando un usuario de Linux te diga "No tengo acceso al sistema"
#### tu orden de ejecución en la terminal debería ser esta:

##### Paso | Comando | Investigación

1. `ip a`:
¿Mi propia computadora tiene una IP válida asignada?

2. `ping -c 4 [IP_Router]`:
¿Puedo comunicarme con el router de la oficina (LAN)?

3. `ping -c 4 1.1.1.1`:
¿Tengo salida física hacia el mundo exterior (WAN/Internet)?

4. `nslookup sistema.com` o `dig google.com`
¿El traductor de nombres (DNS) funciona o está bloqueado?

5. `traceroute sistema.com`:
Si todo lo anterior está bien pero la app no abre
¿en qué salto se pierde el paquete?




# 2. Metodologías de Trabajo y Ciclo de Vida del Ticket

Proceso y la estrategia

El Módulo 1 trataba sobre cómo arreglar las cosas, este módulo trata sobre cómo gestionar el trabajo

En una empresa mediana o grande
no puedes simplemente gritar al pasillo "¡Ya arreglé la impresora!".
##### Todo tiene que quedar registrado, medido y estandarizado.

Ej: Una empresa con 500 empleados
Al día, pueden entrar 80 solicitudes de soporte
Desde "olvidé mi contraseña" hasta "el servidor de producción se está incendiando"

Sin una metodología, el Help Desk se convierte en un juego de adivinanzas caótico
donde el técnico atiende al usuario que grite más fuerte o al que le caiga mejor

Las metodologías de trabajo
(como ITIL, el estándar de la industria)
transforman ese caos en una línea de ensamblaje ordenada

Los Dos Pilares del Módulo:

1. El Ciclo de Vida del Ticket
Un ticket de soporte no es solo un correo electrónico glorificado
es un documento vivo con un estado jurídico y técnico dentro de la empresa
#### !!! Tiene un nacimiento (Apertura), una evolución (Diagnóstico, Escalado, Espera) y una muerte (Resolución y Cierre).
#### !!! Aprenderás que cambiar el estado de un ticket a "Pendiente" o "En progreso" tiene implicaciones legales y comerciales para el departamento de TI.

2. Las Métricas y Metodologías (SLA y KPIs)

#### !!! Donde entra el negocio
#### !!! Aprenderás a trabajar bajo la presión saludable de los SLA (Service Level Agreements)
### !!! que son los tiempos límite que tienes para resolver un problema antes de que la empresa pierda dinero
### !!! (por ejemplo: "un ticket crítico de finanzas debe resolverse en menos de 45 minutos").

##### Filosofía Help Desk: Un buen técnico resuelve el problema técnico
### !!! Un técnico extraordinario resuelve el problema técnico, documenta la solución para que nadie tenga que reinventar la rueda y cierra el ticket a tiempo para cumplir con los objetivos de la empresa




## 1. Nacimiento, viaje y jubilación de un ticket

##### En el marco de trabajo ITIL (Information Technology Infrastructure Library),
##### que es el estándar de oro de la industria, un ticket no se "borra" ni se descarta
##### pasa por un proceso riguroso para asegurar que el negocio siga funcionando y que quede un registro histórico

#### Las 6 fases del Ciclo de Vida del Ticket

1. Phase 1: Creación y Registro (Logging)

El ticket nace
Puede ser porque el usuario envió un correo a soporte@empresa.com
abrió el portal de autoservicio (Jira/ServiceNow),
o te llamó por teléfono y tú lo creaste manualmente

##### dato clave: Un ticket mal registrado es un ticket mal resuelto
##### Aquí debes capturar el nombre del usuario, su departamento
##### el dispositivo afectado y una descripción clara del problema.

Uso en Help Desk:
Evita títulos vagos como "No anda".
##### El registro correcto es: "Fallo de autenticación en VPN - Usuario remoto - Error de timeout".


2. Phase 2: Clasificación y Priorización (Categorization)

##### Una vez registrado, el sistema (o tú) debe categorizarlo
(ej: Hardware > Impresoras o Software > Correo).
#### Luego se le asigna una prioridad combinando dos factores
##### el Impacto (a cuánta gente afecta) y la Urgencia (cuánto tiempo puede esperar el negocio).

Realidad corporativa:
##### Un Director General que no puede enviar un correo es Alta Prioridad
##### Cincuenta empleados de atención al cliente que no pueden facturar es Prioridad Crítica (P1).
##### Tu flujo de trabajo se detiene para atender estos últimos.


3. Phase 3: Diagnóstico Inicial (Investigation and Diagnosis)

#### !!! Donde aplicas lo aprendido en el Módulo 1.

##### 1. Revisas los síntomas, lanzas comandos (si es red),
##### 2. miras los logs y tratas de resolver el problema en el primer contacto (FCR - First Contact Resolution).

`Estado del ticket`:
##### 3. El ticket pasa de Abierto (Open) a En Progreso (In Progress).
Esto le avisa al usuario y a tus jefes que ya hay un humano trabajando en ello


4. Phase 4: Escalado (Escalation) - Opcional

##### 4. pasa si el problema te supera o no tienes los permisos para resolverlo?
##### (Por ejemplo, el switch principal del edificio se quemó y tú eres Help Desk Nivel 1).

##### 5. El ticket se escala

`Escalado Funcional (Horizontal)`:
##### Pasas el ticket a un equipo especializado
##### (Redes, Ciberseguridad, Administradores de Servidores - Nivel 2 o 3).

`Escalado Jerárquico (Vertical)`:
##### 6. Informas a tus superiores porque el problema es tan grave que requiere decisiones gerenciales o aprobación de presupuestos


5. Phase 5: Resolución (Resolution)

##### 7. Se encuentra la solución al problema
(se cambió la RAM corrupta, se reinició el servicio, se restauró el DNS).

`Estado del ticket`: Pasa a Resuelto (Resolved).

`trampa del técnico`: Muchos confunden "Resuelto" con "Cerrado".
##### En "Resuelto", el técnico ya hizo su trabajo, pero el ciclo aún no termina


6. Phase 6: Cierre (Closure)

El ticket muere oficialmente

##### 8. El cierre ocurre cuando el usuario confirma que, efectivamente, todo funciona bien,
##### o cuando el sistema lo cierra automáticamente tras 3 días de no recibir quejas del usuario.

##### 9. Regla de oro: En esta fase se documenta la solución en la Base de Conocimientos (Knowledge Base).
Si te tomó dos horas resolver un error extraño de Linux, escribe la solución de forma breve
Así, cuando a un compañero le entre el mismo ticket la próxima semana, lo resolverá en dos minutos


### El "Limbo" del Ticket: estado Pendiente (On Hold)

##### Hay un estado especial que debes usar con inteligencia
##### Pendiente de Terceros o Esperando respuesta del usuario.

Consejo:
##### Si el problema requiere que el usuario te pase una captura de pantalla y este se va a comer o no responde, debes pasar el ticket a "Pendiente" inmediatamente
##### Si lo dejas "En progreso", el reloj del sistema seguirá corriendo en tu contra, afectando tus métricas individuales de tiempo de resolución.




## 2. Prioridad (la matriz de Impacto vs. Urgencia)

##### En un Help Desk colapsado con decenas de solicitudes entrantes
##### 1. No puedes darte el lujo de atender los tickets por orden de llegada (First In, First Out).
Si lo haces, podrías pasar dos horas configurando los colores de la pantalla de un usuario
mientras el servidor de correo de la junta directiva está caído.

Para evitar esto de forma objetiva y sin favoritismos
##### 2. ITIL introdujo una fórmula matemática simple pero implacable.

Dos Factores Determinantes:
Para calcular la Prioridad de un ticket, debes separar mentalmente dos conceptos que los usuarios suelen confundir

#### A. Impacto (¿A cuántos afecta?)

##### Es la medida del daño que el problema causa al negocio
##### Se evalúa mirando la infraestructura o la cantidad de personas detenidas

#### Alto:
##### Afecta a toda la empresa, a un departamento crítico
##### (ej. Facturación) o a un servicio central (ej. la red Wi-Fi de toda la oficina)

#### Medio:
##### Afecta a un grupo reducido de usuarios o a un servicio secundario pero necesario

#### Bajo:
##### Afecta a un solo usuario y no interrumpe el trabajo de nadie más.


#### B. Urgencia (Cuánto puede esperar?)
###### Velocidad con la que el negocio necesita que se resuelva el problema
###### Está muy ligada al tiempo y a si existen soluciones alternativas (workarounds).

#### Alta:
##### El negocio se está perdiendo dinero ahora mismo o la seguridad de la empresa está en riesgo inmediato (ej. sospecha de hackeo)
##### No hay alternativa para seguir trabajando

#### Media:
##### El problema afecta la productividad, pero el usuario puede seguir trabajando usando un camino alternativo temporal

#### Baja: 
##### El problema no detiene el trabajo diario
##### Puede agendarse para más tarde o para el día siguiente (ej. instalar un software secundario).


### Matriz de Prioridad (Impacto x Urgencia)

##### Cruzas estos dos ejes en el software de tickets (como Jira o ServiceNow),
##### El sistema calcula automáticamente la Prioridad Final
#### que va desde P1 (Crítica) hasta P4/P5 (Baja).


Impacto \ Urgencia | Alta | Media | Baja

Alto (High):
P1 - Crítica
P2 - Alta
P3 - Media

Medio (Medium):
P2 - Alta
P3 - Media
P4 - Baja

Bajo (Low):
P3 - Media
P4 - Baja
P5 - Planificada



### Casos Reales

Ej: Tres escenarios típicos que te van a entrar en la bandeja:

A:
#### "Se cayó la base de datos del ERP de la empresa y los vendedores no pueden registrar ventas".
Impacto: Alto (afecta a toda el área comercial).
##### Urgencia: Alta (se está perdiendo dinero por minuto).
Prioridad: P1 - Crítica. Dejas tu café y te pones a trabajar en esto ya.

B:
#### "A la Directora de Finanzas se le rompió el mouse justo antes de una presentación ejecutiva".
Impacto: Bajo (afecta a una sola persona, aunque sea VIP).
Urgencia: Alta (la presentación es en 15 minutos y no tiene cómo interactuar rápido).
##### Prioridad: P3 - Media. (Aunque el usuario grite que es P1 porque es jefa, la matriz la ubica en P3.
Sin embargo, por cortesía corporativa y "escalado jerárquico", vas y le cambias el mouse en 5 minutos).

C:
#### "El departamento de Marketing solicita la instalación de un nuevo editor de fotos
para un proyecto que inicia el mes que viene".
Impacto: Medio (afecta a un equipo completo).
Urgencia: Baja (tienen un mes de margen).
##### Prioridad: P4 - Baja. Se agenda y se procesa cuando la cola de tickets urgentes esté limpia.

#### !!! Aprender a defender la matriz de prioridad ante los usuarios que creen que su problema es siempre el más importante



## 3. Prioridades y SLAs (Acuerdos de Nivel de Servicio)

Ahora que sabemos cómo priorizar un ticket
##### Debemos entender qué pasa con el tiempo

Concepto que dicta el ritmo cardíaco de cualquier Help Desk
##### Los SLA (Service Level Agreements) y las Métricas de Rendimiento (KPIs).

##### En el soporte corporativo, el tiempo no es subjetivo
### !!! Un SLA es un compromiso contractual entre el departamento de TI y la empresa (o los clientes externos)
#### que define exactamente cuánto tiempo tienes para atender y resolver un problema
##### Si la prioridad es el "qué", el SLA es el cronómetro que te dice "para cuándo".

1. Anatomía de un SLA: Los dos temporizadores

#### 1. Cuando un ticket entra al sistema
##### se activan dos relojes independientes que corren en cuenta regresiva
Debes conocer la diferencia exacta entre ambos para no penalizar tus métricas:

### A. SLA de Respuesta (Response SLA):
#### Es el tiempo máximo que puede pasar desde que el usuario crea el ticket hasta que un técnico lo toma
##### lo clasifica y cambia su estado a "En Progreso".

#### 2. mensaje al usuario:
"Hola, ya vi tu problema y me estoy encargando".
##### Un SLA de respuesta rápido reduce drásticamente la ansiedad del cliente


### B. SLA de Resolución (Resolution SLA)
#### Tiempo total permitido para solucionar el problema por completo y cambiar el estado del ticket a "Resuelto".
##### Este reloj es el más crítico para el negocio.


2. Relación entre Prioridad y SLAs

##### Los tiempos de los SLAs están directamente atados a la Matriz de Prioridad que vimos en la lección anterior
#### 3. Un contrato de SLA estándar en la industria suele verse así:

Prioridad del Ticket	SLA de Respuesta	SLA de Resolución   ¿El reloj se detiene por la noche?
#### P1 - Crítica: 15 minutos; 2 a 4 horas; No. Corre 24/7 (Soporte On-Call).
#### P2 - Alta: 1 hora; 8 horas (1 día laboral); Depende del contrato (generalmente horario hábil).
#### P3 - Media: 4 horas; 24 a 48 horas; Sí. Solo cuenta en horas laborables (Business Hours).
#### P4 - Baja: 8 horas; 3 a 5 días; Sí. Se procesa con calma.

#### Regla del "Stop Clock":
Como vimos antes, si pasas un ticket al estado "Esperando al Usuario"
(porque necesitas que te envíe una captura o pruebe el equipo)
o "Esperando a Proveedor" (compras de hardware), el SLA de resolución se pausa automáticamente

Si olvidas cambiar el estado y el usuario se va de vacaciones
el ticket romperá el SLA (SLA Breach) y la métrica se pondrá en rojo por tu culpa.


3. KPIs: éxito en Help Desk

##### Los gerentes de TI no leen los 500 tickets que cerraste
#### Miran los Indicadores Clave de Rendimiento (KPIs).

### MTTR (Mean Time to Resolution - Tiempo Medio de Resolución):
#### !!! El promedio de tiempo que tardas en resolver los tickets
Mientras más bajo sea tu MTTR, más eficiente eres aislando y solucionando problemas

### FCR (First Contact Resolution - Resolución en el Primer Contacto):
#### El porcentaje de tickets que resuelves en la misma llamada o chat inicial
sin necesidad de escalar, transferir o esperar a que el usuario vuelva a llamar.
Un FCR alto es el santo grial del Help Desk.

### CSAT (Customer Satisfaction - Satisfacción del Cliente):
#### La calificación que te da el usuario
(las famosas estrellitas o encuestas al cerrar el ticket)
##### !!! Puedes ser un genio de Linux, pero si eres grosero con el usuario, tu CSAT será bajo.


Help Desk:
##### El SLA no es tu enemigo, es tu escudo
#### Te ayuda a decirle de forma educada a un usuario de prioridad baja
##### "Entiendo tu prisa, pero el sistema me exige atender primero la caída del servidor para cumplir con el SLA de la empresa".




## 4. Software de Help Desk

Cómo se materializa todo esto en la pantalla de tu computadora.

##### Cómo interactúan el ciclo de vida, las prioridades y los SLAs dentro del software de tickets
(como Jira Service Management, ServiceNow o Zendesk), que será tu panel de control diario.


Software de Tickets:

#### 1. Cuando abras tu herramienta de gestión de servicios de TI (ITSM)
No verás una bandeja de entrada desordenada como el correo electrónico

Verás tres elementos clave:

#### A. Colas de Trabajo (Queues):
Los tickets se agrupan automáticamente en bandejas dinámicas según los filtros que tus jefes hayan configurado

`Cola de P1/Incidentes Críticos`:
##### !!! Siempre debe estar vacía
Si entra algo ahí, parpadea en rojo.

`Mi Cola (Assigned to me)`:
##### Tu lista de tareas personal

`Cola General (Unassigned)`:
##### Tickets que acaban de entrar y que el equipo debe ir tomando según la prioridad


#### B. Barra del SLA (El temporizador visible)
##### Dentro de cada ticket, verás una barra de progreso con una cuenta regresiva
(ej. "Quedan 2h 15m para resolver").
##### Si la barra se pone en rojo, has "roto" el SLA
##### !!! El software calcula esto automáticamente basándose en el horario comercial de la empresa


#### C. Comentarios Públicos vs. Notas Internas (Crucial)
##### !!! Esta es una de las mayores trampas para los técnicos novatos
##### Al escribir en un ticket, tienes dos pestañas:

`Respuesta al cliente (Public Comment)`:
Lo que escribas aquí le llegará al correo al usuario
#### !!! Debe ser formal, educado y claro

`Nota interna (Internal Note)`:
##### Solo la ven otros técnicos de TI.
#### !!! Aquí es donde dejas los detalles técnicos crudos
##### (ej: "El usuario metió mal la pata, le resetee el perfil porque la caché de la app estaba corrupta").




# 3. Administración Centralizada de Identidades (Active Directory y Entra ID)

## En Windows:
herramienta corporativa más importante del mundo Windows:
 Active Directory (Directorio Activo)
 y su evolución en la nube, Microsoft Entra ID (anteriormente Azure AD).

aprenderás cómo se gestionan 10,000 usuarios, sus computadoras
sus contraseñas y sus permisos desde una sola consola centralizada

Como técnico de Help Desk, pasarás entre el 30% y el 50% de tu día interactuando con esta herramienta

Arquitectura básica:
Qué son los Objetos, las Unidades Organizativas (OUs) y los Grupos de Seguridad

Tareas del día a día:
Creación de usuarios, desbloqueo de cuentas
reseteo de contraseñas corporativas y asignación de permisos a carpetas de red

GPOs (Group Policy Objects):
Cómo se aplican políticas automáticas a miles de computadoras a la vez
(por ejemplo, forzar a que todas las laptops de la empresa tengan el mismo fondo de pantalla
bloqueen los puertos USB o instalen el antivirus automáticamente).


Filosofía del Administrador:
En una empresa, tú no eres el dueño de las computadoras;
eres el guardián de las identidades
Quien controla el Directorio Activo, controla los accesos de toda la organización


## En Linux: 
Mientras que Windows apuesta por el monopolio absoluto de Active Directory
##### El ecosistema Linux aborda la administración centralizada con una filosofía completamente diferente
modularidad, protocolos abiertos y herramientas conectables

el panorama cambia de una sola consola empaquetada (Microsoft)
a un conjunto de tecnologías que trabajan en equipo

En el contexto de Help Desk
##### necesitas entender cómo una máquina Linux se integra a la red de la empresa
##### para que los usuarios inicien sesión con sus credenciales corporativas

1. Equivalentes a Active Directory
En Linux no hay un "Directorio Activo" nativo como tal
pero tenemos tres formas principales de lograr exactamente lo mismo
(y de manera mucho más ligera):


### A. OpenLDAP + Kerberos: combinación clásica
En lugar de un solo programa
##### Linux suele separar la base de datos de los usuarios de la autenticación física.

`LDAP (OpenLDAP)`:
##### Es la base de datos (las páginas amarillas).
##### Guarda el nombre del usuario, su UID, su correo y a qué grupos pertenece

`Kerberos`:
##### Encargado de la seguridad, para verificar las contraseñas y emitir "tickets" de sesión cifrados para que el usuario no tenga que escribir su clave a cada rato


### B. FreeIPA / Red Hat Identity Management (El "AD" de Linux)
Si quieres una solución que se parezca a Active Directory
en cuanto a que "todo viene incluido en una sola interfaz web",

##### FreeIPA es el rey. Combina LDAP, Kerberos, DNS y un servidor de certificados en un solo paquete
##### Desde su interfaz gestionas usuarios, grupos y reglas de acceso para miles de servidores Linux.


### C. Samba 4
#### !!! Muchas empresas no quieren tener dos servidores de identidad separados
##### Samba 4 permite que un servidor Linux actúe literalmente como un Controlador de Dominio de Active Directory de Windows
Para los clientes de la red (sean Windows o Linux), ese servidor Linux parece un Windows Server original.


2. 'Pegamento' en el Cliente: SSSD y PAM
Como técnico de Help Desk, tu trabajo diario no será configurar el servidor FreeIPA
##### Sino dar soporte al usuario cuya máquina Linux no puede iniciar sesión en la red

Ahí es donde entran los dos componentes clave del cliente Linux:

#### SSSD (System Security Services Daemon):
##### servicio que corre en segundo plano en la máquina del usuario
Se encarga de hablar con el servidor central
central (sea LDAP, FreeIPA o incluso el Active Directory de Windows)
para verificar si el usuario existe y si la contraseña es correcta

#### PAM (Pluggable Authentication Modules):
##### Capa intermedia de Linux que decide qué pasa cuando alguien intenta loguearse
Si el usuario escribe su clave en la pantalla de inicio, PAM le pregunta a SSSD
"¿Esta clave que viene de la red es válida?".


### Ticket Típico de Help Desk en Linux
##### El usuario remoto no tiene internet y no puede iniciar sesión en su laptop Linux

#### Solución: SSSD tiene una función de caché
Si está bien configurado
guarda las credenciales localmente para que el usuario pueda iniciar sesión
incluso si está desconectado de la red de la empresa

##### !!! Si esto falla, tu labor será revisar el estado del servicio con systemctl status sssd


### GPOs en Linux

En Windows usas GPOs para bloquear pantallas o instalar software de forma masiva
En Linux, las GPOs de Windows no aplican de forma nativa

Para gestionar miles de puestos Linux a la vez
la industria utiliza herramientas de Gestión de Configuración (Configuration Management):

`Ansible`:
Estándar actual
En lugar de una interfaz gráfica
el administrador escribe un archivo de texto simple
(un Playbook en YAML) que dice
"Instala el antivirus y bloquea los puertos USB en estas 500 máquinas Linux".
Ansible se conecta por SSH y lo ejecuta en segundos.

`Puppet / SaltStack`:
Otras alternativas comunes en servidores


### Windows y Linux

#### Servicio de Directorio: Active Directory (AD) | OpenLDAP / FreeIPA

#### Protocolo de Autenticación: Kerberos / NTLM | Kerberos

#### Agente de Red en el Cliente: Servicio de Dominio de Windows | SSSD / PAM

#### Políticas Centralizadas: GPOs (Group Policy Objects) | Ansible / Puppet / Reglas HBAC

#### Administración Gráfica: dsa.msc (Usuarios y equipos) | Interfaz Web de FreeIPA / Cockpit


### !!! El escenario más común en el Help Desk corporativo es el Entorno Híbrido
##### Una empresa donde el servidor principal es el Active Directory de Windows
##### Pero los desarrolladores usan laptops con Linux (como Ubuntu o Debian)
##### tú debes unir esa máquina Linux al dominio de Windows usando herramientas como realm join.



## 1. Gestión de Identidades

##### Núcleo operativo del Help Desk
##### Si hay una herramienta que vas a tener abierta en una pantalla de forma permanente desde las 9:00 AM hasta que termine tu jornada
es el gestor de identidades

#### Azure AD hoy se llama formalmente Microsoft Entra ID
#### En el ecosistema corporativo vas a escuchar ambos nombres de forma indistinta, pero en las consolas modernas verás el logo de Entra ID.


1. AD Local vs. Entra ID (Nube)
##### En la mayoría de las empresas medianas y grandes te vas a encontrar con un entorno híbrido
#### Los usuarios existen en ambos lados gracias a una herramienta que los sincroniza
(Entra ID Connect). Sin embargo, se gestionan de formas muy distintas:

### Active Directory Local (On-Premise):

vive en:
En servidores físicos/virtuales dentro de la empresa
(Controladores de Dominio).

se accede:
Consola de Windows (dsa.msc - Usuarios y Equipos de AD)
o PowerShell.

Protocolo Base:
LDAP, Kerberos y NTLM

Estructura:
Árbol jerárquico basado en Unidades Organizativas (OUs).


### Microsoft Entra ID (Cloud)

vive:
En los servidores de la nube de Microsoft

acceso:
Portal Web (entra.microsoft.com o portal.azure.com).

protocolo base:
OAuth 2.0, SAML y OpenID Connect.

estructura:
Estructura plana basada en usuarios, grupos y licencias.


2. Las 4 Operaciones Sagradas del Help Desk
#### Aquí está tu manual de procedimientos para los tickets que representan el 40% de la cola de soporte

### A. Creación de Usuarios (Provisioning)
##### !!! Cuando entra un empleado nuevo, el departamento de Recursos Humanos te enviará un ticket con sus datos

`En AD Local`:
Abres la consola, navegas hasta la Unidad Organizativa (OU) de su departamento
(ej. Compañía > Empleados > Marketing)
das clic derecho y seleccionas Nuevo > Usuario
##### Es vital seguir la nomenclatura de la empresa (ej. j.perez o juan.perez).

`En Entra ID`:
Vas a Usuarios > Todos los usuarios > Nuevo usuario
Aquí el truco crítico de Help Desk es asignar la licencia correcta
(ej. Microsoft 365 E3 o E5)
Si olvidas asignarle la licencia, el usuario existirá
pero no tendrá buzón de correo ni acceso a Teams.


### B. Reseteo de Contraseñas (Password Reset)

El ticket clásico de los lunes por la mañana
"Me fui de fin de semana y olvidé mi clave".

`En AD Local`:
Buscas al usuario, clic derecho y seleccionas Restablecer contraseña
##### Escribes una clave temporal segura (ej. Temporal2026*)
y marcas la casilla obligatoria
##### "El usuario debe cambiar la contraseña en el siguiente inicio de sesión".
#### !!! Esto te protege legalmente; tú no debes conocer su clave definitiva

`En Entra ID`:
Buscas el perfil del usuario en la web
haces clic en el botón superior Restablecer contraseña
y el sistema te generará un código temporal que debes comunicarle de forma segura


### C. Desbloqueo de Cuentas (Account Unlocking)

##### Por seguridad, si un usuario (o un atacante) introduce mal la contraseña varias veces
(generalmente entre 3 y 5 intentos)
la cuenta se bloquea automáticamente por una política del sistema (Lockout Policy).

`En AD Local`:
Vas a las Propiedades del usuario > Pestaña Cuenta.
Verás un aviso que dice "La cuenta está bloqueada actualmente".
Marcas el check de Desbloquear cuenta, aplicas los cambios y listo

`En Entra ID`:
El bloqueo en la nube suele ser inteligente (Smart Lockout)
para evitar ataques de fuerza bruta
Como técnico, puedes forzar el desbloqueo o, en casos extremos
usar la opción "Cerrar sesión en todas partes"
(Sign out of all sessions)
para limpiar intentos fantasmas de dispositivos viejos que se quedaron colgados intentando autenticarse con la clave vieja


### D. Gestión de Grupos de Seguridad (Access Control)
El usuario te dice: "Mi compañero puede entrar a la carpeta 'Ventas2026' pero yo no".
En Help Desk nunca das permisos directos a un archivo; se los das a través de un grupo

`Tipos de Grupos`:
Asegúrate de no confundir un grupo de distribución
(usado solo para enviar correos masivos)
con un Grupo de Seguridad
(usado para dar accesos a carpetas, VPNs o aplicaciones).

`Procedimiento`:
Buscas el grupo (ej. SG-Ventas-Lectura), vas a sus propiedades
pestaña Miembros (Members), añades al usuario y guardas.


### !!! Protocolo Antifraude de Help Desk

#### Seguridad del mundo real
##### El reseteo de contraseñas y el desbloqueo de cuentas son los vectores favoritos de los hackers para hacer Ingeniería Social

##### Si alguien te llama por teléfono diciendo que es el Gerente de Finanzas
##### y que necesita un reseteo urgente porque está fuera de la oficina, NUNCA lo hagas a la primera
##### Tu protocolo exige verificar su identidad enviando un código a su teléfono corporativo registrado
##### pidiendo confirmación visual por Teams si es posible
##### o validando con su jefe directo
##### Un error aquí puede costar una brecha de ransomware en la empresa



## 2. Soporte Remoto

las herramientas de diagnóstico como los comandos de red
los gestores de identidades son tus ojos
las herramientas de soporte remoto son tus manos

En la era del teletrabajo y las oficinas distribuidas, el 95% de tus intervenciones de Help Desk ocurrirán a través de una pantalla virtual

##### Exige un delicado equilibrio entre velocidad técnica, seguridad de la información y etiqueta profesional
##### Un mal uso de estas herramientas puede violar la privacidad de un usuario
##### o, peor aún, abrir una puerta trasera para un ciberataque en la red corporativa.

1. Herramientas Clave en Remoto

Cada herramienta tiene su propósito y su entorno ideal
debes saber cuál elegir según la situación:

#### RDP (Remote Desktop Protocol): protocolo nativo de Microsoft (Puerto 3389).

funciona: No comparte la pantalla actual
crea una sesión virtual nueva
Si te conectas por RDP a la PC de un usuario, su pantalla física se bloqueará inmediatamente

Uso en Help Desk: Excelente para administrar servidores Windows
o computadoras donde el usuario no necesita ver lo que haces

#### Regla de oro de seguridad: Jamás expongas el puerto RDP directamente a Internet
##### siempre debe requerir una conexión previa a la VPN de la empresa


#### VNC (Virtual Network Computing): estándar abierto multiplataforma, muy utilizado para dar soporte gráfico en entornos Linux y macOS.

funciona: A diferencia de RDP, VNC sí duplica la pantalla exacta del usuario (retransmite los píxeles).
Lo que tú mueves, el usuario lo ve en tiempo real.

Uso en Help Desk: Ideal para solucionar problemas de interfaz gráfica
o guiar al usuario paso a paso en sistemas Linux.


#### AnyDesk y TeamViewer (Soluciones Cloud / Terceros)

reinas del soporte a usuarios finales fuera de la red local

funciona: Utilizan servidores intermediarios en la nube para saltarse firewalls
y NATs complejos de los routers domésticos de los empleados.
Solo requieren un ID de 9 dígitos y una clave temporal.

Uso en Help Desk: La solución definitiva para soporte rápido a trabajadores remotos


2. Buenas Prácticas de Etiqueta y Operación

### !!! Tomar el control de la computadora de otra persona es una invasión a su espacio de trabajo
Sigue siempre este protocolo

#### 1. Consentimiento Explícito: Nunca te conectes de golpe
incluso si tienes instalados agentes de acceso desatendido (como TeamViewer Host)
Llama o escribe al usuario antes: "Hola, ¿puedo tomar control de tu pantalla para revisar el error?".

#### 2. Privacidad Ante Todo: Antes de que el usuario comparta su pantalla, pídele
##### amablemente: "Por favor, cierra cualquier documento personal, chats privados o pestañas de banco que tengas abiertas".
Esto protege al usuario y te protege a ti de ver datos sensibles

#### 3. Narración de Acciones: No te quedes en silencio moviendo el mouse a toda velocidad
Explica lo que haces: "Voy a abrir el visor de eventos para ver por qué se cerró la aplicación
no te asustes si ves que las ventanas se abren solas".

#### 4. Cierre Limpio: Al terminar, asegúrate de cerrar la sesión de soporte remoto explícitamente
y confirma con el usuario que el problema quedó resuelto.


3. Seguridad Crítica en Soporte Remoto (Evita Desastres)

##### herramientas de control remoto son el objetivo número uno de los ataques de Ransomware y las estafas de Ingeniería Social

#### Peligro del "Acceso Desatendido" (Unattended Access)
Muchos softwares permiten configurar una contraseña fija para entrar a la PC del usuario cuando este no esté
Si usas esto para dar soporte a un servidor, la contraseña debe ser robusta
##### guardarse en un llavero de claves corporativo y contar con MFA (Autenticación de Múltiples Factores).
##### !!! Una clave débil en un AnyDesk corporativo equivale a dejar la puerta de la empresa abierta por la noche.

#### Suplantación de Identidad (Phishing Telefónico)

Existe una estafa común donde un atacante llama a un empleado diciendo:
##### "Hola, soy del departamento de TI, necesito que me des tu ID de AnyDesk para una actualización urgente".

##### rol en Help Desk: Educa a los usuarios
##### Acostúmbralos a que TI siempre los contactará por los canales oficiales (ticket oficial, chat interno verificado) antes de pedir un acceso remoto.


#### Limpieza de Credenciales
Si durante la sesión remota tuviste que abrir la consola como administrador e introducir tus credenciales de soporte para instalar un driver o software
##### asegúrate de cerrar esa terminal y borrar el historial antes de desconectarte
Nunca dejes tus privilegios elevados al alcance del usuario.


Rs:

RDP: Para servidores Windows (bloquea pantalla local).
VNC: Para entornos gráficos Linux/Mac.
AnyDesk/TeamViewer: Para usuarios en casa (basa su conexión en IDs y saltos de firewall




## 3. Herramientas de Despliegue y Automatización

Gran escala requiere herramientas de Despliegue y Automatización
En un Help Desk moderno, si el departamento de Recursos Humanos te dice: "Mañana entran 30 personas nuevas y todas necesitan Chrome, Slack, el agente de seguridad y la VPN configurada"
##### no te pones a instalar los programas máquina por máquina con un pendrive o por AnyDesk

##### Usas la automatización para que el software se instale solo.
Se divide en dos caras de la misma moneda: saber qué tienes (Inventario) y controlar qué instalas (Distribución).

1. Inventario de Activos (Asset Management): mapa
No puedes dar soporte a lo que no sabes que existe

##### El inventario de activos de TI (ITAM) es la base de datos centralizada donde se registra el ciclo de vida de todo el hardware y software de la empresa

##### Antes de atender un ticket, un buen técnico busca la máquina del usuario en el sistema de inventario
Herramientas como `Snipe-IT o GLPI` te dicen instantáneamente:

Los componentes exactos del equipo (procesador, RAM, almacenamiento).
El número de serie y si la computadora todavía está en garantía con el fabricante (Dell, Lenovo, etc.).
Qué licencias de software tiene asignadas (evitando que la empresa pague multas por usar software pirata o sin activar).

truco de Help Desk: Si un usuario te llama diciendo que su computadora Linux o Windows está "extremadamente lenta",
antes de conectarte por control remoto, miras el inventario


2. Distribución de Software (Deployment)

##### Es la capacidad de empaquetar una aplicación o configuración y "empujarla" silenciosamente a través de la red localbo la nube hacia una o miles de computadoras al mismo tiempo.

Herramientas Líderes:

Microsoft Endpoint Configuration Manager (MECM / antes SCCM): El rey indiscutible en redes corporativas Windows gigantescas
Permite reinstalar sistemas operativos completos por la red (PXE Boot) y programar actualizaciones masivas a las 2:00 AM para no molestar a los usuarios.

PDQ Deploy / PDQ Inventory: Una alternativa clásica, ligera y muy querida en empresas medianas
Te permite crear "paquetes" (ej. un instalador .msi o .exe) y lanzarlo a un grupo de computadoras en cuestión de minutos

Gestores de Paquetes Corporativos (Chocolatey / Winget en Windows, APT en Linux):
Cada vez es más común que el Help Desk use scripts automatizados para instalar programas usando líneas de comandos nativas
conectando la máquina a un repositorio interno de la empresa.


3. El Día a Día en Help Desk: Los tickets de Despliegue
Cuando trabajas con estas herramientas, tus tickets habituales cambian de naturaleza
Ya no reparas aplicaciones rotas; reparas despliegues fallidos.

Escenario Típico:
La empresa lanza una actualización obligatoria del antivirus corporativo mediante PDQ o SCCM
Al día siguiente, te entran 5 tickets de usuarios diciendo que el antivirus les da un error.

Protocolo de Diagnóstico:

1. Revisar los Logs de Despliegue
Estas herramientas dejan un registro en la PC cliente
(en Windows suele estar en carpetas ocultas dentro de C:\Windows\ccm\Logs o similares).    

2. Identificar el Código de Error
El instalador silencioso te devolverá un código de error
(por ejemplo, el famoso Error 1603 de Windows Installer, que significa "error fatal durante la instalación",
usualmente debido a que había una versión vieja mal desinstalada que bloquea la nueva).

3. Remediación y Feedback: Limpias el error a mano en esos 5 equipos y avisas al Administrador de Sistemas (Nivel 3)
para que corrija el paquete de despliegue antes de lanzarlo a los 900 usuarios restantes





# 4. Soft Skills y Crisis

Problema de ansiedad o frustración causado por la tecnología
Su computadora no funciona, su jefe lo está presionando
##### va tarde a una entrega y siente que su trabajo está en peligro.

##### Si sabes cómo calmar a la persona, ya tienes el 50% del ticket resuelto
Habilidades blandas (Soft Skills) y las estrategias de gestión de crisis indispensables

1. Tres Pilares de la Comunicación en Soporte

### A. Escucha Activa (Dejar que se desahogue)

##### Cuando un usuario esté furioso, no lo interrumpas
Déjalo hablar durante los primeros 30 o 45 segundos
Si lo interrumpes para decirle "Eso no es culpa mía", solo vas a avivar el fuego
##### Escucha los síntomas ocultos detrás de sus quejas.

##### Enfoque Help Desk: Mientras habla, toma notas.
No te quedes solo con el "¡Esto es una porquería y no anda!".
##### Identifica el síntoma real: "No puede enviar el reporte de fin de mes porque el botón de guardar está gris".


### B. Sin Jerga Técnica

Al usuario no le importa si el puerto 3389 está bloqueado en el firewall perimetral
o si hay un conflicto de handshake en la VPN
##### Explicarle eso solo lo hará sentir ignorado o tonto

#### Mal técnico: "Tengo que revisar si el demonio SSSD de Linux tiró un timeout en PAM".
#### !!! Pro: "Voy a verificar la conexión de seguridad entre su laptop y la oficina para asegurarme de que reconozca su contraseña".


### C. Empatía Táctica (Validar su frustración)

#### Empatía no es darle la razón al usuario si está diciendo una locura técnica
#### !!! es validar cómo se siente
Decir una frase tan simple como: "Entiendo perfectamente su frustración
##### sé que ese reporte es importantísimo para hoy y voy a concentrarme en resolverlo ahora mismo",
cambia por completo la actitud del cliente
#### !!! Pasas de ser "el enemigo de sistemas" a ser "su aliado".


2. Gestión de Crisis: Tipologías de Usuarios en Apuros

Vas a encontrar con tres perfiles clásicos en situaciones de crisis

### !!! El Desesperado / Presionado
#### Síntoma: Llama gritando, habla rápido, interrumpe y repite que "todo es una emergencia".

#### Estrategia: Aplica el anclaje.
##### Bájale el ritmo con un tono de voz pausado, firme y sumamente tranquilo
##### El estado de ánimo es contagioso
##### Si tú te mantienes calmado, la persona tenderá a imitar tu nivel de energía de forma inconsciente


### !!! "Sé más que tú"

#### Síntoma: Es el usuario que leyó un foro en internet o que "sabe de computadoras".
#### !!! Te dice exactamente qué tienes que hacer (ej: "Formatéame la máquina porque seguro tiene un virus").

#### !!! Estrategia: No compitas por ver quién tiene la razón. Dale su lugar
#### usa su propio lenguaje pero mantén el control del diagnóstico.

##### Frase salvavidas: "Excelente observación. Vamos a dejar esa opción de formatear como plan B
##### Primero permítame descartar rápidamente un par de configuraciones básicas para ahorrarle el tiempo de respaldar sus archivos


### !!! VIP / Ejecutivo Intocable

#### Síntoma: Es un Director o Gerente de alto rango
##### No tiene tiempo, es directo y exige prioridad absoluta.

#### Estrategia: Al grano y sin rodeos. Con ellos no te extiendas en explicaciones
##### Diles qué vas a hacer, cuánto va a tardar y mantén la comunicación ejecutiva
##### Si la solución va a tardar dos horas, dilo de frente
##### ofrécele una alternativa (workaround) inmediata (como una laptop de respaldo).


3. Tabla de Emergencia: Frases Prohibidas vs. Frases Salvavidas

#### En soporte técnico, la psicología del lenguaje lo es todo
##### Cambiar una palabra puede transformar una llamada hostil en una colaboración exitosa

### !!! Frases Prohibidas (Detonan la crisis):
"¿Qué fue lo que tocó/rompió?" (Suena a acusación directa).
"Eso no es problema de soporte/TI." (Suena a desinterés total).
"Cálmese."
"No se puede." (Muro de piedra para el usuario).

### !!! Frases Salvavidas (Calman las aguas)
#### "Cuénteme, ¿qué estaba haciendo en la pantalla cuando apareció el error?"
#### "Ese servicio lo gestiona otro equipo, pero permítame guiarlo para abrir el ticket con ellos correctamente."
#### "Sé que esto es molesto y entiendo la prisa. Vamos a resolverlo juntos."
#### "Por políticas de seguridad no puedo hacer eso exactamente, pero la alternativa que tenemos es..."


### !!! Regla del Soporte Mental: No es Personal
#### repítete esto como un mantra: No te está gritando a ti, le está gritando a la situación.

##### El usuario no te conoce, no tiene nada en tu contra
##### !!! Está reaccionando al estrés de su día laboral y la computadora fue el detonante
Si logras separar tu identidad de tu puesto de trabajo, ningún ticket podrá arruinarte el día
Un técnico que domina sus emociones es un técnico invencible.



## Documentación Eficaz: base de conocimientos (Knowledge Base) interna y redacción de manuales claros para los usuarios

#### Documentar la solución para que tus compañeros (o el propio usuario) puedan resolverlo sin ti te convierte en un activo invaluable para la empresa
##### la documentación no es burocracia pesada; es tu mejor estrategia para trabajar menos y mejor
##### Si no documentas, estás condenado a resolver el mismo problema de la caché de Linux o el mismo error de sincronización de Entra ID cien veces al año

1. La Base de Conocimientos Interna (KB): De técnicos para técnicos

#### Cuando escribes un artículo en la KB interna (usando herramientas como Confluence, Jira Service Management o Wiki.js),
##### tu objetivo es la eficiencia pura
##### Un compañero estresado con un SLA corriendo en su contra va a abrir tu artículo y necesita la respuesta en 10 segundos

##### Para lograrlo, la industria utiliza una metodología llamada KCS (Knowledge-Centered Service),
#### !!! Dicta que todo artículo de soporte interno debe seguir una estructura rígida de cuatro bloques

### 1. Título descriptivo: Debe incluir el error exacto o los síntomas principales
(Mal título: "Fallo de red". Buen título: "Error de Timeout al conectar a la VPN corporativa en Debian").

### 2. Síntomas (Lo que el usuario ve): Lista breve de los mensajes de error o comportamientos del sistema

### 3. Causa Raíz (Por qué pasa): Una línea técnica que explique el origen del problema.
(Ejemplo: "El servicio SSSD pierde la conexión con el controlador de dominio tras una suspensión del equipo").

### 4. Solución Paso a Paso: La receta de cocina sin rodeos
##### Usa bloques de código para los comandos y negritas para los botones


### Ejemplo de Solución en una KB Interna:

1. Abrir la terminal del cliente.

2. Reiniciar el demonio de seguridad con:
`sudo systemctl restart sssd`

3. Verificar que el estado cambie a active (running).


2. Manuales: "Hazlo tú mismo" (Para Usuarios)

#### Escribir para el usuario final requiere activar tu chip de empatía y comunicación

##### Aquí el objetivo es el Autoservicio (Shift-Left):
##### lograr que el usuario resuelva su propio problema sin necesidad de abrir un ticket
##### reduciendo la carga de trabajo del Help Desk


### 3 Reglas

#### 1. Una acción por paso: No amontones instrucciones
En lugar de decir "Abre el panel, introduce tu clave, busca la opción de red y dale a conectar",
##### separa cada acción en un punto numerado diferente.

#### 2. Regla del verbo (Acciones en negrita): El usuario no lee, escanea
##### Resalta siempre en negrita el botón exacto o la acción que debe realizar.

Mal ejemplo: Ahora tienes que ir al menú de arriba y hacer clic en el botón que dice opciones

##### Buen ejemplo: 3. En el menú superior, haz clic en Opciones de Cuenta.

#### 3. Apoyo Visual (Capturas recortadas):
##### Una imagen vale más que mil palabras de soporte
##### Cuando pongas una captura de pantalla, usa herramientas de recorte para mostrar solo el botón o la ventana afectada
##### y dibuja un recuadro rojo alrededor de donde deben hacer clic
Si pones una captura de todo tu monitor 4K, el usuario se perderá buscando el botón


Rs

#### KB Interna (Para el Equipo de TI)
Audiencia: Tus compañeros técnicos (Nivel 1, 2, 3).
Tono: Directo, técnico, enfocado en comandos y código.
Meta: Reducir el MTTR (Tiempo medio de resolución).
Ejemplo de texto: "Verificar conectividad ICMP con ping -c 4 e inspeccionar /etc/resolv.conf"


#### Manual de Autoayuda (Para el Usuario)
El empleado administrativo, de marketing o ventas.
Guiado, pedagógico, libre de jerga compleja.
Incrementar el Deflection Rate (Evitar que se cree el ticket).
"Compruebe si tiene acceso a internet abriendo la página de la empresa.
Si no carga, siga estos pasos..."



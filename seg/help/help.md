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



### Tipos o clasificación 



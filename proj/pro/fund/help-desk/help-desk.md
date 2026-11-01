# Fund



# Redes/conectividad


1. Fundamentos de Help Desk y Diagnóstico
Gestión del ciclo de vida de un Ticket y Metodología CompTIA

2. "Redes, Direccionamiento IP, DHCP y DNS"
Configuración de red y lectura de direccionamiento local

3. Comandos CLI y Diagnóstico de Conectividad
"Aislamiento de fallas ""Sin Internet"" en consola"

4. "Active Directory, Control Remoto y Casos Reales"
Simulación de soporte remoto y creación de usuarios


## 1. Fundamentos de Soporte y Metodología de Diagnóstico

#### Cómo opera un equipo de TI y cómo pensar como un técnico estructurado.

#### Rol del Help Desk (Nivel 1): Alcance, escalamiento a Nivel 2/3, acuerdos de nivel de servicio (SLAs) y conceptos básicos de ITIL.


### Metodología de Troubleshooting

1. Identificar el problema (hacer las preguntas correctas al usuario).

2. Establecer una teoría de causa probable (empezando por lo más simple).

3. Probar la teoría para determinar la causa.

4. Establecer un plan de acción e implementar la solución.

5. Verificar la funcionalidad total del sistema y tomar medidas preventivas.

6. Documentar el hallazgo, las acciones y el resultado



### Práctico 1 

Cuenta gratuita en una plataforma de ticketing (como Freshdesk o Zoho Desk).

Redacta y clasifica 3 tickets ficticios:
una contraseña bloqueada
una impresora sin papel
un sistema lento

Asigna prioridades (Baja, Media, Alta, Crítica)
redacta la nota de resolución profesional.



## 2. Redes, Direccionamiento IP, DHCP y DNS

#### Cómo se comunican las computadoras en una red local (LAN) y hacia Internet.

#### Modelo OSI / TCP IP

APP
Present
Sesión
Transporte
Red
Enlace de datos
Fisica

### Modelo OSI y TCP/IP para Soporte: Identificación rápida de fallas según la capa
#### Capa 1: Cable/Físico, Capa 3: IP/Red, Capa 7: Aplicación/Navegador


#### Anatomía de una Dirección IP (IPv4):

##### 1. Dirección IP local (ej. 192.168.1.50),
##### 2. Máscara de subred (255.255.255.0),
##### 3. Puerta de enlace / Gateway (192.168.1.1).

IP Pública vs. IP Privada.


#### Servicios de Red Cruciales:

##### 4. DHCP: Asignación automática de IP.
##### 5. DNS: Traduce nombres de dominio (google.com) a direcciones IP (142.250.190.46).


### Practico 2

Abre la consola de tu equipo (cmd en Windows o terminal en Mac/Linux).

Ejecuta la inspección de red y anota tu IP, Gateway y Servidor DNS actual
Cambia manualmente tu DNS a los servidores públicos de Google (8.8.8.8 y 8.8.4.4)
verifica la navegación.



## 3. Comandos CLI y Diagnóstico de Conectividad

#### Dominar la terminal de comandos

#### 1. ipconfig /all
Muestra la configuración de red detallada
##### Saber si el equipo recibió IP por DHCP
o si tiene IP APIPA (169.254.x.x).

#### 2. ping [IP/Dominio]
Prueba la conectividad punto a punto
##### Saber si hay paso físico y de red hacia un servidor o router.

#### 3. tracert [Dominio]
Muestra la ruta y saltos hasta el destino
##### Identificar en qué salto de la red se cae la conexión.

#### 4. nslookup [Dominio]
Consulta registros al servidor DNS
##### Comprobar si el servidor DNS está respondiendo o resolviendo mal.

#### 5. ipconfig /flushdns
Borra la caché DNS local
##### Resolver problemas de páginas que no cargan tras cambios de servidor.

#### 6. netstat -an
Muestra conexiones activas y puertos
##### Verificar si una aplicación tiene abierto su puerto de comunicación.


### Práctica 3: Simulación de Incidente

#### Escenario: El usuario dice "No puedo entrar a la intranet ni a ningún sitio web".

#### Secuencia de Diagnóstico:

##### 1. ping 127.0.0.1 (Prueba de tarjeta de red local / Loopback).

##### 2. ping [IP_del_Gateway] (Prueba de conexión con el router local).

##### 3. ping 8.8.8.8 (Prueba de salida a Internet por IP pura).

##### 4. ping google.com (Si falla aquí pero funciona el paso anterior, el problema es DNS).



## 4. Active Directory, Soporte Remoto y Casos Reales

#### Módulo dedicado a las tareas operativas diarias en entornos corporativos.

#### 1. Gestión de Identidades (Active Directory / Entra ID básico):

Creación y deshabilitación de usuarios.
Desbloqueo de cuentas y restablecimiento de contraseñas.
Asignación de grupos de seguridad y permisos de carpetas compartidas.


#### 2. Herramientas de Soporte Remoto:

Quick Assist (Asistencia Rápida de Windows), RDP, AnyDesk / TeamViewer.
Etiqueta y buenas prácticas al tomar control de una pantalla remota (informar siempre al usuario).


### Práctico 4: Simulación de Entrevista Técnica

Explicarle a un usuario sin conocimientos técnicos cómo obtener su dirección IP
reiniciar su adaptador de red utilizando un lenguaje claro, paciente y sin modismos confusos




# Fundamentos de Soporte y Metodología de Diagnóstico


## 1. Cómo opera un equipo de TI y cómo pensar como un técnico estructurado

#### Cómo fluye el trabajo en un departamento de tecnología y desarrollar una mentalidad de diagnóstico metódica

### Equipo de TI
cadena estructurada diseñada para mantener la continuidad del negocio

Se divide principalmente en dos tipos de solicitudes:

#### 1. Incidencia: Algo que funcionaba correctamente se rompió o falló
(ej. "Se cayó Internet", "Mi pantalla se puso azul").
El objetivo es restaurar el servicio lo antes posible.

#### 2. Requerimiento de Servicio: Una solicitud de algo nuevo o un cambio planificado
(ej. "Necesito acceso a la carpeta de Finanzas", "Solicito un mouse nuevo").


### Flujo del trabajo en TI

1. Entrada: El usuario reporta una situación por correo, llamada, chat o portal web.

2. Registro y Triaje (Nivel 1): Se crea un ticket, se asigna una prioridad según el impacto y la urgencia
se hace el primer intento de solución.

3. Escalamiento: Si el problema excede el alcance del Nivel 1 (ej. configurar un switch principal o reparar una base de datos),
se deriva a Nivel 2 (Soporte en sitio / Especialistas)
o Nivel 3 (Administradores de Redes, Servidores o Ciberseguridad). 

4. Cierre y Documentación: Se confirma que el usuario quedó satisfecho y se registra la solución en la Base de Conocimiento (KDB).



## 2. Pensar como Técnico estructurado: aisla variables y sigue una metodología repetible.

#### Troubleshooting (Metodología CompTIA de 6 Pasos)


##### [1. Identificar]
##### ➔ [2. Teoría de Causa]
##### ➔ [3. Probar Teoría]
##### ➔ [4. Plan de Acción]
##### ➔ [5. Verificar]
##### ➔ [6. Documentar]



### 1. Identificar el problema: Haz preguntas abiertas y obtén los hechos concretos sin asumir nada.

Qué estaba intentando hacer cuando ocurrió el error?",
"¿Aparece algún mensaje o código en pantalla?",
"¿A alguien más en su área le pasa lo mismo?"


### 2. Establecer una teoría de causa probable

#### Navaja de Ockham: la explicación más sencilla suele ser la correcta
##### Empezar siempre por la Capa Física (Capa 1).

¿El equipo tiene energía?
¿El cable de red está bien ajustado?
¿El interruptor de red o el Wi-Fi está encendido?


### 3. Probar la teoría para determinar la causa

#### Haz una sola modificación a la vez

Si cambias tres configuraciones al mismo tiempo y el problema se resuelve
no sabrás cuál era la falla ni cómo solucionarla si vuelve a ocurrir.


### 4. Plan de acción e implementar la solución

#### Si la prueba del Paso 3 confirma tu teoría, ejecuta el procedimiento de reparación
#### Si no funciona, regresa al Paso 2 y formula una nueva teoría


### 5. Verificar la funcionalidad total del sistema

No des por terminado el trabajo hasta que:

1. El sistema afectado funcione por completo.
2. Compruebes que tu solución no haya roto otra cosa (efecto secundario).
3. El propio usuario pruebe el sistema y confirme que puede trabajar.


### 6. Documentar hallazgos, acciones y resultados

#### Si no está documentado, no sucedió. Escribe qué falló, cuál fue la causa raíz y cómo lo solucionaste
Esto le ahorrará horas de trabajo a tu equipo la próxima vez que ocurra la misma falla.



## 3. Help Desk Nivel 1 (L1)

Actuar como el primer punto de contacto
filtrar, resolver problemas comunes en pocos minutos
mantener la comunicación clara con el usuario

### 1. Alcance Real del Nivel 1
En L1, entre el 60% y el 80% de tus tareas diarias se concentran en un conjunto de problemas recurrentes:

#### 1. Gestión de Identidad y Accesos: Restablecimiento de contraseñas
desbloqueo de cuentas bloqueadas por reintentos, creación inicial de usuarios en Active Directory / Google Workspace.

#### 2. Diagnóstico Básico de Conectividad: Verificar cables, estado de Wi-Fi, renovación de IP por DHCP, comprobaciones básicas de VPN.

#### 3. Soporte a Software y Aplicaciones: Instalación de software corporativo básico
configuración de perfiles de correo (Outlook/Thunderbird), limpieza de caché de navegadores.

#### 4. Periféricos y Hardware Menor: Impresoras congeladas o desconectadas
monitores sin señal, problemas con auriculares o teclados USB.

#### 5. Triaje y Clasificación: Registrar cada llamada, chat o correo como un ticket estructurado
asignando prioridad y categoría correctas.


### 2. Pirámide de Soporte y Criterios de Escalamiento
No se espera que un técnico L1 sepa resolver todos los problemas

#### Lo que sí se espera es que sepa cuándo y cómo escalar

1. Nivel 1 (Help Desk / Service Desk) 
Técnicos de Soporte Inicial
Primer contacto, resolución rápida (<15 min), captura de datos
procedimientos estandarizados (SOPs).

2. Nivel 2 (Desktop Support / On-site)
Especialistas de Campo / SysAdmins Jr.
Soporte presencial, reparación física de hardware
problemas complejos de SO
configuraciones avanzadas

3. Nivel 3 (Infraestructura / DevOps / Vendors) 
Administradores de Redes, Servidores, Ciberseguridad o Proveedores
Fallas críticas de servidores, switches/firewalls
caídas masivas del sistema
errores de código con el proveedor


### 2. Escalar un Ticket

#### 1. Agotaste la Base de Conocimiento (KDB): Si aplicaste los procedimientos estándar del Nivel 1 y el problema persiste.

#### 2. Falta de Permisos: La solución requiere privilegios de Administrador Global de Red o Dominio a los que L1 no tiene acceso por seguridad.

#### 3. Tiempo Límite Alcanzado: Si pasaste 15-20 minutos probando sin avances y el temporizador del ticket se agota.

#### 4. Regla del Escalamiento Limpio: Nunca escales un ticket "vacío". El técnico de Nivel 2 debe ver en las notas:

Qué problema reportó el usuario.
Qué pruebas realizaste tú en Nivel 1 (paso a paso).
Por qué concluyes que requiere Nivel 2.


### 3. Acuerdos de Nivel de Servicio (SLAs)

Un SLA (Service Level Agreement) es el compromiso de tiempo que tiene el equipo de TI para responder y resolver una falla.

Miden mediante dos indicadores clave:

#### Time to First Response (Tiempo de Primera Respuesta): Cuánto tarda el técnico en asignarse el ticket y ponerse en contacto con el usuario.

#### Time to Resolution (Tiempo de Resolución): Cuánto tiempo pasa desde que se crea el ticket hasta que la falla queda solucionada por completo.


### Matriz de Priorización (Impacto × Urgencia)
#### prioridad de un ticket

##### 1. Impacto: ¿A cuántas personas o procesos afecta? (1 usuario = Bajo / Un departamento = Medio / Toda la empresa = Alto).

##### 2. Urgencia: ¿Qué tan rápido se necesita la solución para trabajar?

				IMPACTO
				Bajo     Alto
			  ┌────────┬────────┐
		 Baja │ Baja   │ Media  │
URGENCIA      ├────────┼────────┤
		Alta  │ Media  │ CRÍTICA│
			  └────────┴────────┘
          
##### Ej. Ticket Crítico: El servidor de facturación cayó y nadie en la empresa puede cobrar
Ejemplo de Ticket Crítico: El servidor de facturación cayó y nadie en la empresa puede cobrar

##### Ej. Ticket Bajo: Un usuario pide cambiar el fondo de pantalla o reporta que un botón de un documento está chueco
(SLA de respuesta 24 hrs / Resolución 48 hrs).



### 4. ITIL para Help Desk: ITIL (Information Technology Infrastructure Library)
Marco de buenas prácticas más utilizado en TI

#### Para Nivel 1 necesitas dominar tres conceptos:

#### 1. Incidente vs. Solicitud de Servicio:

##### !!! Incidente: Una interrupción no planificada del servicio
("No me funciona el correo").

##### !!! Solicitud (Service Request): Una petición formal de algo que no está roto
("Necesito que me instalen Photoshop").


#### 2. Base de Conocimiento (KDB - Knowledge Base):
La biblioteca de soluciones internas
Antes de adivinar, un técnico busca el síntoma en la KDB.


#### 3. Cierre de Ticket Formal:
Un ticket solo se cierra cuando el usuario confirma expresamente que su servicio funciona correctamente



## 4. Metodología de Troubleshooting: Resolución metódica de problemas

#### 6 pasos del estándar industrial (CompTIA A+): técnicas lógicas para aislar fallas.


### 1. Identificar el Problema: Recolectar todos los síntomas posibles sin asumir la causa aún
Los usuarios rara vez reportan el problema técnico exacto; reportan lo que experimentan
ejemplo: "El sistema está roto"

#### 1. Entrevistar al usuario:

Usar preguntas abiertas primero:
"¿Qué estaba haciendo exactamente cuando ocurrió el error?"

Seguir con preguntas cerradas/específicas:
"¿Aparece algún código de error en pantalla?",
"¿Ocurre en todas las páginas web o solo en la intranet?"


#### 2. Pregunta clave de IT: "¿Qué cambió recientemente?"
(Una actualización, un cable movido, una nueva contraseña, software instalado).

#### 3. Inspección directa: Revisar el visor de eventos (Event Viewer en Windows)
o pedir capturas de pantalla/mensajes de error.



### 2. Establecer una Teoría de Causa Probable 
Formula hipótesis sobre qué está causando la falla
##### ordenándolas desde la causa más simple e intrínseca hasta la más compleja

Aplica la Navaja de Ockham: La explicación más sencilla suele ser la correcta.


#### Verifica lo obvio primero (Capa 1 / Física):

¿El equipo tiene energía? ¿El LED del puerto Ethernet enciende?
¿El interruptor físico de Wi-Fi o el modo avión están activados?
¿El monitor está encendido y conectado en la tarjeta de video correcta?



### 3. Probar la Teoría para Determinar la Causa
Ejecuta pruebas controladas para confirmar o descartar la hipótesis planteada en el Paso 2.

				`[ Probar Teoría ]`
                          │
            ┌─────────────┴─────────────┐
            ▼                           ▼
    ¿Teoría Confirmada?          ¿Teoría Descartada?
            │                           │
            ▼                           ▼
   Pasar al Paso 4             Formular Nueva Teoría
(Plan de Acción e Implementación)   (o Escalar a Nivel 2)


##### Regla de Oro: Modifica una sola variable a la vez
Si cambias el cable de red, la IP y reinicias el router al mismo tiempo y todo vuelve a funcionar
no sabrás qué solucionó el problema ni qué falla diagnosticar la próxima vez.

Si la prueba confirma la teoría:
Mídete para asegurarte de que la reparación no interrumpa otros servicios

Si la prueba falla: Genera una nueva teoría
Si agotas tus hipótesis o los procedimientos del Nivel 1, es el momento de escalar al Nivel 2.



### 4. Establecer un Plan de Acción e Implementar la Solución
##### Una vez identificada la causa raíz, ejecuta la reparación de forma segura y planificada

#### Evalúa el impacto: ¿La solución requiere reiniciar un servidor
cambiar un registro del sistema o reinstalar un software durante el horario laboral del usuario?

#### Solicita autorizaciones / Respaldos: Si vas a modificar archivos críticos o formatear un equipo
realiza una copia de seguridad (backup) previa.



### 5. Verificar Funcionalidad Total del Sistema

Una reparación no termina cuando aplicas el parche 
sino cuando compruebas que todo el entorno del usuario está operativo.

#### 1. Prueba de regresión: Verifica que la solución aplicada no haya dejado sin servicio otra función
(ejemplo: arreglaste la conexión a la red, pero ahora la impresora local no responde).

#### 2. Prueba del usuario final: Pídele al propio usuario que realice la tarea que antes no podía completar

#### 3. Medidas preventivas: Si la falla ocurrió porque el disco se llenó de archivos temporales
enseña al usuario o configura una tarea automática para limpiar el disco periódicamente



### 6. Documentar Hallazgos, Acciones y Resultados

#### La documentación permite crear una memoria técnica compartida dentro del equipo de IT
#### Un buen registro en el ticket consta de tres partes fundamentales:

#### 1. Sínoma Reportado
Lo que el usuario reportó inicialmente.
Usuario no tiene acceso a internet tras regresar del almuerzo.


#### 2. Causa Raíz: 
El origen real detectado tras el diagnóstico.
Dirección IP duplicada o asignación de dirección APIPA (169.254.x.x) por fallo momentáneo del DHCP.


#### 3. Resolución Aplicada
Los pasos ejecutados para solucionar la falla.
Se ejecutó ipconfig /release y ipconfig /renew desde el CMD
Se obtuvo la IP válida 192.168.1.105 y se confirmó navegación.



### Técnicas Estratégicas de Diagnóstico

#### 1. De Abajo hacia Arriba (Bottom-Up - Modelo OSI): Empieza en la Capa 1 (física) y sube hasta la Capa 7 (aplicación).
Está conectado el cable? ➔ ¿Tiene dirección IP? ➔ ¿El puerto está abierto? ➔ ¿Abre el navegador?

#### 2. Divide y Vencerás (Divide and Conquer): Empieza en una
Si responde, sabes que el problema está en capas superiores (DNS o Aplicación) y no pierdes tiempo revisando cables.

#### 3. Comparación con un Estado Conocido (Diferenciación): Compara el equipo que falla con uno que funcione correctamente en la misma área
Si la computadora A tiene Internet y la computadora B no (conectadas a la misma toma)
el problema es exclusivo de la computadora B.



# Modelo OSI - TCP/IP

## 7. Capa App: Interfaz con la que interactúa el usuario y las aplicaciones finales (navegadores web, clientes de correo, software corporativo).

#### Protocolos clave: HTTP, HTTPS, DNS, SMTP, IMAP, SSH, RDP.

#### Comandos / Herramientas

nslookup [dominio] (o dig): Consulta si el servicio DNS resuelve correctamente un nombre a IP.

curl -I [URL]: Verifica la respuesta HTTP del servidor web desde la consola.

Herramientas de desarrollo (F12 en el navegador): Inspección de peticiones de red y errores de aplicación.


## 6. Capa Presentación: Traduce, da formato, cifra y comprime los datos para que sean legibles por la capa de aplicación
ej. cifrado SSL/TLS, codificación UTF-8, formatos de imagen/video

TLS/SSL, ASCII, JPEG, PNG, JSON, XML.

openssl s_client -connect [servidor]:443: Prueba la negociación de certificados de seguridad y cifrado SSL/TLS.


## 5. Sesión (Session): Inicia, mantiene y finaliza las conexiones (sesiones) entre la computadora local y las aplicaciones remotas.

Protocolos clave: NetBIOS, RPC, SMB (sesiones de carpetas compartidas), PPTP.

Comandos / Herramientas:

`net use`: En Windows, muestra o establece conexiones activas a carpetas compartidas e impresoras en red.

`net session`: Muestra las sesiones abiertas en el equipo local.


## 4. Transporte: Controla el flujo de datos, la retransmisión de paquetes perdidos y la multiplexación mediante puertos lógicos

Protocolos clave: TCP (orientado a conexión, confiable) y UDP (rápido, sin conexión).

Comandos / Herramientas:

netstat -an (o ss -tulpn en Linux):
Muestra todas las conexiones TCP/UDP activas y qué puertos están escuchando.

Test-NetConnection [IP] -Port [Puerto] (PowerShell) o nc -zv [IP] [Puerto]:
Verifica si un puerto TCP específico está abierto en el servidor remoto


## 3. Red (Network): Se encarga de la identificación lógica de los equipos (Direcciones IP) y del enrutamiento de paquetes a través de diferentes redes hacia su destino

Protocolos clave: IP (IPv4 / IPv6), ICMP (mensajes de diagnóstico), IPsec.

Comandos / Herramientas:

ping [IP/Dominio]: Envía paquetes ICMP para comprobar el tiempo de respuesta e irrupción de la conexión

tracert [IP/Dominio] (o traceroute): Muestra la ruta salto por salto (routers) por la que viaja el paquete hasta el destino.

route print (o ip route): Muestra la tabla de enrutamiento local y la puerta de enlace predeterminada (Gateway).



## 2. Enlace de Datos (Data Link): Organiza los bits en tramas (frames) y gestiona la comunicación dentro de la misma red local (LAN)
utilizando la dirección física (Dirección MAC).

Protocolos / Equipos: Ethernet (802.3), Wi-Fi (802.11), Switches, VLANs, ARP.

Comandos / Herramientas:

arp -a: Muestra la tabla ARP (asociación entre direcciones IP locales y direcciones MAC físicas).

getmac: Muestra la dirección MAC física de los adaptadores de red instalados.

ipconfig /all: Muestra la dirección física (MAC) junto con la asignación DHCP.



## 1. Física (Physical): La transmisión de bits crudos (1s y 0s) a través de medios físicos (cables de cobre, fibra óptica o señales de radiofrecuencia Wi-Fi).

Componentes: Cables Ethernet UTP/Cat6, conectores RJ45, tarjetas de red (NIC), hubs, puntos de acceso.

Comandos / Herramientas:

Inspección visual y luces LED: Verificar que el puerto Ethernet encienda la luz verde/ámbar de link y actividad.

ipconfig: Si el adaptador aparece como "Medio desconectado", la falla está en Capa 1.

Probador de cables (Cable Tester): Herramienta física para validar el ponchado correcto de los 8 hilos del cable UTP.


### Ej

Aparece un cable desconectado en la barra de tareas
Capa 1 (Física),
Revisar el cable UTP, conector RJ45 o puerto del switch."

No puedo acceder a la impresora de mi oficina
Capa 2 (Enlace de datos)
Ejecutar arp -a para ver si la MAC de la impresora responde en la LAN.

Tengo IP 169.254.x.x y no salgo a ningún lado
Capa 3 (Red
Falló el DHCP. Ejecutar ipconfig /release y ipconfig /renew.

Entro a la red pero el sistema corporativo por puerto 8080 no abre
Capa 4 (Transporte)
Executar Test-NetConnection [IP] -Port 8080 para validar si el puerto está bloqueado por firewall.

La página de la empresa no carga por error de certificado
Capa 6 (Presentación)
Revisar la hora/fecha del equipo o validez del certificado TLS/SSL.

El navegador dice 'No se puede resolver la dirección'
Capa 7 (Aplicación)
Probar nslookup para validar si el servidor DNS está respondiendo.




# Windows / Linux OSI Commands


## Capa 1. Física: la consola no envía paquetes; únicamente consulta al controlador si el hardware detecta señal/portadora de red, cable conectado o estado del adaptador.

### windows: 


#### 1. Get-NetAdapter
PowerShell
"Muestra estado físico (Up / Disconnected),
velocidad de enlace (ej. 1 Gbps)
y nombre del hardware."

#### 2. netsh interface | show interface
CMD / PS
Muestra si el adaptador físico está habilitado y si su estado de conexión es Conectado o Desconectado.

#### 3. ipconfig
CMD / PS
"Si el cable o la señal Wi-Fi fallan por completo, el adaptador reporta ""Medio desconectado"" (Media disconnected)."


### Linux:

#### 1. ethtool eth0
Muestra si hay enlace físico (Link detected: yes/no)
velocidad negociada (ej. 1000Mb/s)
velocidad negociada (ej. 1000Mb/s)

#### 2. ip link
Muestra las interfaces.
Indica el estado operativo (UP / DOWN)
y si falta cable/señal (NO-CARRIER).

#### 3. dmesg | grep -iE "eth|net|link"
Revisa los eventos del kernel
Muestra en tiempo real cuando se conecta/desconecta el cable
("Link is Up" / "Link is Down").

#### 4. nmcli device status
Muestra el estado del hardware gestionado por NetworkManager
(connected, disconnected, unavailable).



## Capa 2: Enlace de Datos (Data Link). la comunicación se realiza mediante Direcciones MAC (físicas) y tramas (frames) dentro de la misma red local (LAN/Wi-Fi).


### Win

arp -a:
CMD / PS
Muestra la tabla ARP (mapa de direcciones IP locales asociadas a sus direcciones MAC físicas correspondientes).

getmac /v
CMD / PS
Muestra la dirección MAC física y el nombre exacto de cada adaptador de red.

netsh wlan show interfaces
CMD / PS
Muestra detalles L2 de la red Wi-Fi: BSSID (MAC del AP/Router),
SSID, tipo de cifrado y calidad de señal.

Get-NetAdapter | Select Name, MacAddress, LinkSpeed
PowerShell
Muestra rápidamente las direcciones MAC y estados L2 de todas las tarjetas.



### Li

ip neighbor (o arp -n)
Muestra la tabla ARP (vecinos detectados en la red local con su respectiva dirección MAC).

ip link
Muestra los adaptadores de red, su dirección MAC (link/ether),
estado del enlace y tamaño de tramas (MTU).

arping -I [interfaz] [IP]
Envía peticiones ARP a nivel de Capa 2 a una IP local
Útil para verificar si un host responde sin depender de ICMP/Ping

iwconfig (o nmcli dev wifi)
Muestra información de la capa de enlace inalámbrica
BSSID (MAC del Access Point), canal, frecuencia y velocidad de enlace


### Ej caso:

Síntoma: Das ping 192.168.1.50 y dice "Host de destino inalcanzable".

Verificación L2: Ejecutas arp -a (Windows) o ip neighbor (Linux)
Si la IP .50 aparece como Incompleta o no muestra una dirección MAC asociada
la computadora no logra encontrar la tarjeta física del destinatario en la red local
(posible cable desconectado en el destino, VLAN incorrecta o equipo apagado).



## Capa 3. Red (Network): Se encarga de la identificación lógica de los equipos (Direcciones IP) y del enrutamiento de paquetes a través de diferentes redes hacia su destino

#### la comunicación se gestiona mediante Direcciones IP (IPv4 / IPv6)
#### y enrutamiento de paquetes entre distintas redes utilizando routers y la puerta de enlace (Gateway).


### Windows

ipconfig / ipconfig /all
CMD / PS
Muestra la Dirección IP, Máscara de Subred y Puerta de Enlace Predeterminada (Gateway).

ipconfig /release y /renew
CMD / PS
Libera la IP actual y solicita una nueva dirección IP al servidor DHCP.

ping [IP]
CMD / PS
Envía paquetes ICMP Echo para probar si hay comunicación IP lógica con un host.

tracert [IP]
CMD / PS
Identifica cada router (salto) en la ruta por los que pasa el paquete hasta el destino.

route print
CMD / PS
Muestra la tabla de enrutamiento local (cómo decide Windows por qué interfaz enviar cada IP).


## Li

ip addr (o ifconfig)
Muestra las direcciones IP (IPv4 e IPv6) asignadas a cada interfaz de red.

ping -c 4 [IP]
Envía paquetes de prueba ICMP (la opción -c 4 limita la prueba a 4 paquetes).

traceroute [IP] (o mtr)
Muestra la ruta salto a salto hacia la IP destino (mtr combina ping y traceroute en tiempo real).

ip route
Muestra la tabla de enrutamiento y la puerta de enlace por defecto (default via [IP_Gateway]).

dhclient -v -r / dhclient -v
Libera (-r) y renueva la dirección IP obtenida por el cliente DHCP.


### Caso

Síntoma del millón: La PC muestra una IP del tipo 169.254.x.x (conocida como APIPA).

Significado técnico: Las capas L1 (física) y L2 (enlace) están funcionando bien
pero el equipo no pudo contactar al servidor DHCP para recibir una dirección IP válida.

Acción de Soporte: Ejecutar ipconfig /release y /renew (Windows) o reiniciar el servicio de red para forzar la petición DHCP.



## 4. Transporte: Controla el flujo de datos, la retransmisión de paquetes perdidos y la multiplexación mediante puertos lógicos

#### la comunicación ocurre entre aplicaciones/procesos específicos mediante puertos lógicos (del 1 al 65535)
##### usando dos protocolos principales: TCP (orientado a conexión, garantiza entrega) y UDP (rápido, no orientado a conexión).

### Windows

netstat -ano
CMD / PS
Muestra todas las conexiones TCP/UDP activas, puertos locales/remotos en escucha y el PID del proceso asociado.

Test-NetConnection [IP] -Port [Puerto]
PowerShell
Pruebas de conectividad TCP a un puerto específico (reemplazo moderno de telnet).
Muestra si el puerto está abierto (TcpTestSucceeded: True).

Get-NetTCPConnection -State Listen
PowerShell
Filtra y lista únicamente los puertos TCP que están abiertos escuchando conexiones entrantes.



### Li

ss -tulpn (o netstat -tulpn)
Muestra sockets activos, puertos TCP (-t) y UDP (-u) escuchando (-l) con el nombre del proceso/PID (-p).

nc -zv [IP] [Puerto] (netcat)
Prueba si un puerto TCP específico en un servidor remoto está abierto y respondiendo sin enviar datos.

lsof -i :[Puerto]
Muestra exactamente qué programa o servicio está utilizando un puerto determinado en ese momento.


### Caso

síntoma del millón: Das ping 192.168.1.100 y responde perfectamente (Capa 3 funciona)
pero el usuario dice "No puedo entrar al sistema web de la empresa"
o "No conecta el escritorio remoto".

Diagnóstico L4: El puerto específico de la aplicación está cerrado o bloqueado por un Firewall

Acción de Soporte:

En Windows: Ejecutar Test-NetConnection 192.168.1.100 -Port 3389 (para RDP) o -Port 80/443 (para Web
En Linux: Ejecutar nc -zv 192.168.1.100 3389.    
Si la prueba falla, el problema está en el Firewall (local o de red) o el servicio no está corriendo en el servidor.


## 5. Sesión (Session): Inicia, mantiene y finaliza las conexiones (sesiones) entre la computadora local y las aplicaciones remotas.

#### Se encarga de abrir, coordinar, mantener y cerrar las sesiones de diálogo entre dos aplicaciones o usuarios finales.

El trabajo de hd en esta capa se relaciona principalmente con sesiones de archivos compartidos (SMB/Samba),
sesiones de usuario/escritorio remoto (RDP/SSH) y llamadas a procedimientos remotos (RPC).

### Wind

net use
CMD / PS
Lista, establece o elimina conexiones y sesiones activas con recursos compartidos en red (\\servidor\carpeta).

query session (o qwinsta)
CMD / PS
Lista todas las sesiones de usuario activas, inactivas o de Escritorio Remoto (RDP) en el equipo o servidor local.

reset session [ID] (o rwinsta)
CMD / PS
Fuerza el cierre o reinicio de una sesión de usuario colgada (por ejemplo, una sesión RDP congelada).

nbtstat -S
CMD / PS
Muestra la tabla de sesiones activas de NetBIOS sobre TCP/IP con sus estados y direcciones IP.




### windows


### Li

w (o who)
Muestra las sesiones de usuario abiertas actualmente (tanto locales en consola TTY como remotas vía SSH) y qué proceso ejecutan.

loginctl list-sessions
Lista las sesiones activas de usuario gestionadas por el sistema (systemd-logind).

smbstatus
Muestra las sesiones de red activas, conexiones de usuarios y archivos bloqueados en un servidor de recursos compartidos Samba (SMB).

smbstatus
Muestra las sesiones de red activas, conexiones de usuarios y archivos bloqueados en un servidor de recursos compartidos Samba (SMB).

loginctl terminate-session [ID]
Cierra o termina forzadamente una sesión de usuario o terminal remota determinada.


### Caso

síntoma del millón: El usuario intenta abrir una carpeta en red (\\Servidor\Contabilidad)
y recibe el error: "Un usuario no puede conectarse a un recurso compartido utilizando más de una identificación"
o "Se ha alcanzado el límite de sesiones".

Hay una sesión SMB anterior "fantasma" o colgada que sigue autenticada con credenciales viejas.


Acción soporte: windows

Abrir la consola (cmd).
Ejecutar net use para ver la lista de sesiones mapeadas.
Ejecutar net use * /delete /yes para cerrar todas las sesiones SMB colgadas y forzar al usuario a autenticarse de nuevo.



## 6. Capa Presentación: Traduce, da formato, cifra y comprime los datos para que sean legibles por la capa de aplicación

##### esta capa influye en el cifrado SSL/TLS (certificados de seguridad HTTPS),
##### errores de formato de archivos, codificación de caracteres (ASCII/UTF-8) y políticas de cifrado de red

### Wind

certutil -dump [archivo.crt]
CMD / PS
Muestra en pantalla el contenido, validez, emisor y fechas de caducidad de un archivo de certificado digital.

Get-ChildItem Cert:\CurrentUser\My
PowerShell
Muestra la lista de certificados digitales de seguridad instalados en el almacén del usuario actual.

certmgr.msc
GUI / Ejecutar
Abre el Administrador de Certificados de Windows para importar, exportar o revisar certificados SSL/TLS raíz de confianza.


### Li

openssl s_client -connect [host]:443
Prueba la negociación de cifrado SSL/TLS con un servidor remoto
Muestra la cadena de certificados, emisor y si el canal cifrado es válido

openssl x509 -in [cert.pem] -text -noout
Lee un archivo de certificado SSL y muestra en texto plano su fecha de vencimiento, dominio asignado y algoritmo de cifrado

file [nombre_archivo]
Examina el encabezado real de un archivo y muestra su formato y codificación verdadera (ej. UTF-8 Unicode text, JPEG image data), sin importar su extensión.

iconv -f [origen] -t [destino] [archivo]
Convierte archivos de un sistema de codificación de texto a otro (por ejemplo, de ISO-8859-1 a UTF-8).


### Caso

El usuario intenta ingresar al sistema web interno o correo corporativo y el navegador despliega el error: "Su conexión no es privada" (NET::ERR_CERT_DATE_INVALID o SEC_ERROR_EXPIRED_CERTIFICATE).

causa: Falla en la validación del cifrado TLS.
Puede ser un certificado vencido en el servidor
o un desfasaje en la hora/fecha de la computadora del usuario.

Acción de Soporte

1. Verificar que la hora, fecha y zona horaria de la computadora del usuario estén correctamente sincronizadas con un servidor NTP
(Si el reloj de la PC dice que es el año 2000, los certificados actuales fallarán).

2. Si la hora de la PC es correcta, usar openssl s_client -connect [servidor]:443 (Linux)
o inspeccionar el certificado desde el navegador para confirmar si el certificado del servidor venció o carece de la entidad emisora de confianza (Root CA).



### Capa 7. App: Interfaz con la que interactúa el usuario y las aplicaciones finales (navegadores web, clientes de correo, software corporativo).

##### la red interactúa directamente con el software y los servicios del usuario final
##### Aquí operan los protocolos de nivel superior como HTTP/HTTPS (Web)
##### DNS (Nombres de dominio), DHCP, SMTP/IMAP (Correo), FTP/SFTP (Archivos) y SSH/RDP (Acceso remoto).


### win

nslookup [dominio]
CMD / PS
Consulta al servidor DNS configurado si puede traducir un nombre a dirección IP
(google.com ➔ 142.250.190.46).

Resolve-DnsName [dominio]
PowerShell
Versión moderna de DNS lookup.
Permite consultar registros específicos (A, CNAME, MX, TXT).

ipconfig /flushdns
CMD / PS

Vacía la memoria caché local de DNS
(borra registros antiguos o corruptos guardados en Windows).

curl -I [URL] (o Invoke-WebRequest)
CMD / PS
Envía una solicitud HTTP/HTTPS y muestra los encabezados de respuesta del servidor (códigos 200 OK, 404 Not Found, 500 Error).


### Li

dig [dominio]
Herramienta avanzada de diagnóstico DNS. Muestra la respuesta completa del servidor, tiempos de consulta y registros exactos.

host [dominio]
Consulta DNS rápida y directa.
Sirve para resolución directa (nombre a IP)
y resolución inversa (IP a nombre).

curl -I [URL] (o wget)
Realiza peticiones de red a nivel de protocolo de aplicación web y descarga encabezados o contenido.

resolvectl flush-caches
Borra la caché DNS del resolutor del sistema en distribuciones Linux modernas con systemd-resolved.


### Caso

El usuario dice "No tengo Internet, ninguna página abre".
Realizas las pruebas previas y descubres que ping 8.8.8.8 responde perfecto (Capas 1, 2, 3 y 4 están funcionando impecable).

causa: El servicio DNS falló, el servidor DNS asignado está caído o el equipo tiene una entrada corrupta en la caché local.

Acción:
Probar resolución: Ejecutar nslookup miempresa.com (Windows) o dig miempresa.com (Linux).
Si el DNS no responde: Cambiar el servidor DNS del adaptador a uno público de prueba (ej. 8.8.8.8 o 1.1.1.1).
Limpiar caché: Ejecutar ipconfig /flushdns (Windows) o resolvectl flush-caches (Linux).

Validar servicio web: Confirmar con:
curl -I [https://miempresa.com](https://miempresa.com)
que el servidor web entrega un estado HTTP 200 OK.



## Laboratorio 1

Redacta y clasifica 3 tickets ficticios:
una contraseña bloqueada
una impresora sin papel
un sistema lento

Asigna prioridades (Baja, Media, Alta, Crítica)
redacta la nota de resolución profesional.



### Jira 

la terminología ITIL se refleja de la siguiente manera

`[ Portal del Cliente ] ➔ [ Tipo de Solicitud ] ➔ [ Cola de Trabajo (Agentes) ] ➔ [ Flujo de Estado ]`


1. Portal del Cliente (Help Center)
interfaz web que ven los usuarios finales
En lugar de enviar un correo desordenado
el usuario entra al portal y elige una categoría
(ej. "Solicitar acceso a software", "Reportar problema de red").

2. Tipos de Solicitud (Request Types) vs. Tipos de Incidencia (Issue Types)
Request Type: Lo que ve el usuario en el portal (ej. "Necesito cambiar mi contraseña").
Issue Type: Cómo clasifica Jira internamente esa tarea para el equipo de TI
(ej. Incident, Service Request, Problem, Change).

3. Colas de Trabajo (Queues)
Son vistas filtradas donde los técnicos de Nivel 1 organizan su día a día

Open Requests (Todos los tickets abiertos).

Unassigned (Tickets nuevos esperando que un técnico los tome).

My Open Tickets (Tickets asignados a ti).

High Priority (Incidentes críticos con SLA por vencer).

4. SLAs Integrados (Service Level Agreements)
Jira incluye un reloj regresivo visible en cada ticket que indica cuánto tiempo te queda para dar la Primera Respuesta
para completar la Resolución, ajustándose automáticamente según el horario laboral configurado

5. Flujo de Trabajo (Workflow)
ciclo de vida por el que pasa un ticket 
`[ Waiting for Support ] ➔ [ In Progress ] ➔ [ Pending Customer ] ➔ [ Canceled / Resolved ]`

6. Integración con Confluence (Base de Conocimiento / KDB)
Cuando un usuario escribe "No puedo conectar la VPN" en el buscador del portal de Jira
el sistema consulta automáticamente la Base de Conocimiento de Confluence y le sugiere artículos con soluciones antes de que envíe el ticket
reduciendo la carga de trabajo de Nivel 1 (Deflección de tickets).


### Casos

Rol de un Técnico de Soporte Nivel 1 en una empresa

#### objetivo es transformar los mensajes informales de los usuarios en tickets bien estructurados
#### asignar la prioridad correcta y redactar notas técnicas de resolución

### Plantilla Estándar de Ticket (Estructura ITIL)
 
Cada vez que recibas una solicitud, debes registrarla con esta estructura en tu sistema de ticketing
(ej. Freshdesk, Jira Service Management, Zendesk):

======================================================================
ID TICKET: [Autogenerado, ej. #1001]
SOLICITANTE: [Nombre del usuario y departamento]
TIPO DE SOLICITUD: [Incidente  OR  Requerimiento de Servicio]
CATEGORÍA / SUBCATEGORÍA: [Ej. Redes > Conectividad LAN]
IMPACTO: [Bajo / Medio / Alto]
URGENCIA: [Baja / Media / Alta]
PRIORIDAD CALCULADA: [Baja / Media / Alta / Crítica]
TÍTULO DEL TICKET: [Frase concisa que describe el problema]
----------------------------------------------------------------------
DESCRIPCIÓN DEL USUARIO:
[Texto original o síntesis de lo que reporta el usuario]

NOTAS INTERNAS DE DIAGNÓSTICO (Para el equipo de TI):
- Pasos de troubleshooting ejecutados (Comandos, pruebas OSI)
- Causa raíz identificada

NOTA DE RESOLUCIÓN Y CIERRE (Para el usuario final):
[Mensaje claro, profesional y empático confirmando la solución]
======================================================================



## Caso Guiado

Mensaje del usuario (Recibido por chat a las 14:10 hs):

"Hola, volví del almuerzo y mi PC no tiene internet.
No puedo entrar a la intranet ni al sistema de facturación.
Mis compañeros de al lado sí tienen internet.
Necesito ayuda urgente porque tengo que cargar una factura."


### Resolución del Ticket (Ejemplo resuelto):

======================================================================
ID TICKET: #1001
SOLICITANTE: Carlos Gómez (Departamento de Ventas)
TIPO DE SOLICITUD: Incidente
CATEGORÍA / SUBCATEGORÍA: Redes > Conectividad Local
IMPACTO: Bajo (Afecta a 1 solo usuario)
URGENCIA: Media (Afecta el flujo de trabajo de facturación, pero hay alternativas)
PRIORIDAD CALCULADA: Media
TÍTULO DEL TICKET: Pérdida de conectividad de red local tras suspensión del equipo
----------------------------------------------------------------------
DESCRIPCIÓN DEL USUARIO:
El usuario reporta falta de acceso a Internet e intranet tras regresar de su receso. Comprueba que los usuarios contiguos funcionan normalmente.

NOTAS INTERNAS DE DIAGNÓSTICO:
- Comprobación Capa 1: Cable Ethernet físicamente conectado, LED del puerto NIC en verde.
- Comprobación Capa 3: Ejecución de `ipconfig` desde CMD muestra dirección IP 169.254.45.12 (APIPA).
- Causa raíz: La interfaz de red no solicitó renovación de concesión DHCP al salir del modo de suspensión.
- Acción aplicada: Se ejecutó `ipconfig /release` y `ipconfig /renew`. El adaptador obtuvo la IP válida 192.168.1.115. Se verificó con `ping 192.168.1.1` y `ping google.com`.

NOTA DE RESOLUCIÓN Y CIERRE:
Estimado Carlos, el problema de conectividad ha sido resuelto. Se reestableció la dirección IP de su equipo con el servidor de red. Confirmamos conjuntamente que ya puede navegar e ingresar al sistema de facturación. Procedemos a dar cierre a este ticket.
======================================================================


### Ejercicios del Laboratorio

Completa la plantilla de ticket para los siguientes dos casos reales
Copia la plantilla en tu respuesta y llena los datos según tu criterio técnico:


### Caso 2: El nuevo ingreso

Correo recibido (09:00 hs):
"Buenos días Soporte. Hoy se incorporó la nueva pasante de Recursos Humanos, Mariana López.
Necesitamos que le creen su usuario de red, su correo corporativo y le den acceso a la carpeta compartida \\Servidor\RRHH\Pasantes.
Empieza a trabajar hoy."

======================================================================
ID TICKET: [Autogenerado, ej. #1001]

SOLICITANTE: [Nombre del usuario y departamento]
Mariana López

TIPO DE SOLICITUD: [Incidente  OR  Requerimiento de Servicio]
Requerimiento de Servicio

CATEGORÍA / SUBCATEGORÍA: [Ej. Redes > Conectividad LAN]
Redes > Conectividad LAN

IMPACTO: [Bajo / Medio / Alto]
Medio

URGENCIA: [Baja / Media / Alta]
Media

PRIORIDAD CALCULADA: [Baja / Media / Alta / Crítica]
Media

TÍTULO DEL TICKET: [Frase concisa que describe el problema]
Creación de usuario de red su usuario de red, correo corporativo y acceso a la carpeta compartida \\Servidor\RRHH\Pasantes

----------------------------------------------------------------------
DESCRIPCIÓN DEL USUARIO:
[Texto original o síntesis de lo que reporta el usuario]
La nueva pasante necesita estar conectada a la intranet para poder trabajar.


NOTAS INTERNAS DE DIAGNÓSTICO (Para el equipo de TI):
- Pasos de troubleshooting ejecutados (Comandos, pruebas OSI)
- Causa raíz identificada


NOTA DE RESOLUCIÓN Y CIERRE (Para el usuario final):
[Mensaje claro, profesional y empático confirmando la solución]

======================================================================



no aplicamos un proceso de Troubleshooting ni capas de red (3, 4 o 5) para "reparar" algo, porque no hay nada roto.

### !!! Incidente: Algo fallaba o se rompió (aquí sí usamos Troubleshooting, comandos CLI y capas OSI).

### !!! Requerimiento de Servicio: Una solicitud formal de un nuevo recurso o acceso (es una tarea administrativa de Aprovisionamiento / Alta de Usuario


Capa 7 (Aplicación - Servicios de Directorio y Correo): Creación del usuario en Active Directory / Entra ID y la creación del buzón en Microsoft 365 / Exchange o Google Workspace.

Capa 5 (Sesión - Recursos compartidos SMB) / Capa 7: La asignación de permisos para la carpeta \\Servidor\RRHH\Pasantes se realiza añadiendo al usuario a un Grupo de Seguridad en Active Directory (ej. GS_RRHH_Pasantes), el cual tiene permisos NTFS sobre esa ruta.


Ajustes sugeridos a tu borrador de Ticket

Solicitante: Escribiste Mariana López. Mariana es la beneficiaria, pero el solicitante suele ser su jefe directo o el responsable de selección de RRHH que envió el correo. (Puedes poner: Jefatura de RRHH / A favor de Mariana López).
    
Categoría: En lugar de Redes > Conectividad LAN, la categoría correcta es Gestión de Identidades y Accesos o Altas, Bajas y Cambios (ABM) > Usuario Nuevo.


Impacto y Urgencia:

Impacto: Bajo (Afecta a 1 sola persona).

Urgencia: Alta (Empieza a trabajar hoy; si no tiene accesos, su primer día queda improductivo).

Prioridad Resultante: Media


#### Versión para Portafolio

```
======================================================================
ID TICKET: #1002
SOLICITANTE: Jefatura de RRHH (Beneficiaria: Mariana López - Pasante)
TIPO DE SOLICITUD: Requerimiento de Servicio
CATEGORÍA / SUBCATEGORÍA: Gestión de Accesos > Alta de Usuario (ABM)
IMPACTO: Bajo (1 usuario)
URGENCIA: Alta (Ingreso el día de la fecha)
PRIORIDAD CALCULADA: Media
TÍTULO DEL TICKET: Alta de usuario de red, correo e ingreso a carpeta de pasantes: Mariana López
----------------------------------------------------------------------
DESCRIPCIÓN DEL USUARIO:
Solicitud de alta para nueva pasante de Recursos Humanos (Mariana López). Requiere cuenta de dominio, buzón de correo corporativo y acceso a la carpeta compartida \\Servidor\RRHH\Pasantes.

NOTAS INTERNAS DE DIAGNÓSTICO / APROVISIONAMIENTO:
- Creación de objeto de usuario en Active Directory: mlopez@empresa.com en la OU "RRHH/Pasantes".
- Asignación de licencia de Microsoft 365 / Correo corporativo habilitado.
- Agregado de usuario al grupo de seguridad "GS_RRHH_Pasantes" para otorgar permisos de lectura/escritura en \\Servidor\RRHH\Pasantes.
- Verificación de permisos efectiva desde la consola de administración.

NOTA DE RESOLUCIÓN Y CIERRE (Para el usuario/jefe):
Estimado equipo de RRHH, le damos la bienvenida a Mariana. 
Confirmamos que su cuenta de red y correo electrónico (mlopez@empresa.com) han sido creados exitosamente. Asimismo, se le asignaron los accesos a la carpeta compartida solicitada.

Enviamos las credenciales temporales de acceso al jefe directo por canal seguro. Procedemos al cierre de esta solicitud.
======================================================================


```


    

### Caso 3: Impresora congelada

Llamada telefónica (11:30 hs):
"Habla Roberto de Contabilidad.
La impresora principal del piso 2 dejó de imprimir.
Salta una luz roja titilando en el panel y hay 15 trabajos trabados en la cola de impresión.
Ningún contador del área puede imprimir los balances para la reunión de directorio de las 14:00 hs."

======================================================================
ID TICKET: #1002
SOLICITANTE: Roberto de Contabilidad
TIPO DE SOLICITUD: Requerimiento de Servicio
CATEGORÍA / SUBCATEGORÍA: Gestion de impresora > Reposición tinta
IMPACTO: Alta
URGENCIA: Alta
PRIORIDAD CALCULADA: Alta
TÍTULO DEL TICKET: Luz roja en el panel de impresora
----------------------------------------------------------------------
DESCRIPCIÓN DEL USUARIO:
Impresora principal del piso 2 dejó de imprimir, Salta una luz roja titilando en el panel. Los trabajos están trabados en la cola de impresión. Ningún contador puede imprimir.


NOTAS INTERNAS DE DIAGNÓSTICO / APROVISIONAMIENTO:

NOTA DE RESOLUCIÓN Y CIERRE:
======================================================================


Ojo aquí: En tu borrador pusiste Requerimiento de Servicio.

Pista: La impresora estaba funcionando y dejó de funcionar de forma no planificada, bloqueando el trabajo del área.
#### !! Por definición ITIL, esto es un Incidente (algo se rompió/detuvo).

Ojo aquí: En tu borrador pusiste Requerimiento de Servicio.

Pista: La impresora estaba funcionando y dejó de funcionar de forma no planificada, bloqueando el trabajo del área. Por definición ITIL, esto es un Incidente (algo se rompió/detuvo).

Categoría e Impacto / Urgencia
#### !!! Categoría: Es preferible no asumir la causa ("Reposición de tinta") antes del diagnóstico físico. Usa algo más general como: Hardware / Periféricos > Impresoras de Red.

##### Impacto: Afecta a todo el departamento de Contabilidad (varios usuarios del piso 2), pero no a toda la empresa ➔ Impacto Medio.    

Urgencia: Faltan menos de 2.5 horas para la reunión de directorio de las 14:00 hs ➔ Urgencia Alta.

#### !!! Prioridad Resultante: Impacto Medio + Urgencia Alta = Prioridad Alta.


Un fallo de impresora con luz roja y trabajos trabados casi siempre requiere dos intervenciones:

Intervención Físico-Mecánica (Capa 1 / Hardware):

Inspección en sitio: La luz roja titilando suele indicar atasco de papel (Paper Jam) o puerta/tapa de tóner abierta.

Acción: Retirar el papel atascado o cerrar la bandeja correctamente


Intervención Lógica (Servicio de Impresión / Spooler):

#### Aunque quites el papel atascado, los 15 trabajos acumulados en memoria suelen "congelar" el servicio de impresión de Windows (Print Spooler).

Acción en consola (CMD como Admin):

```
net stop spooler
del /Q /F /S "%systemroot%\System32\Spool\Printers\*.*"
net start spooler
```            

Esto detiene el servicio, borra los archivos temporales corruptos de la cola y reinicia el servicio


Nota de Resolución (Para Roberto)

Confirma que acudiste al piso 2, corregiste el problema físico (ej. atasco de papel) y reiniciaste la cola de impresión.

Menciona que realizaste una página de prueba y que le pediste a Roberto/un contador que enviara a imprimir el balance para validar antes de las 14:00 hs.

    

```
======================================================================
ID TICKET: #1003
SOLICITANTE: Roberto (Departamento de Contabilidad - Piso 2)
TIPO DE SOLICITUD: Incidente
CATEGORÍA / SUBCATEGORÍA: Hardware / Periféricos > Impresoras de Red
IMPACTO: Medio (Afecta a todo el departamento de Contabilidad)
URGENCIA: Alta (Requieren imprimir balances para reunión a las 14:00 hs)
PRIORIDAD CALCULADA: Alta
TÍTULO DEL TICKET: Falla en impresora de red Piso 2: Luz roja de error y bloqueo en cola de impresión
----------------------------------------------------------------------
DESCRIPCIÓN DEL USUARIO:
El usuario reporta interrupción del servicio en la impresora principal del piso 2. Presenta luz roja titilando en el panel frontal y acumulación de 15 trabajos trabados en la cola de impresión.

NOTAS INTERNAS DE DIAGNÓSTICO:
- Inspección Física (Capa 1 / Hardware): Se acudió en sitio al Piso 2. Se detectó un atasco de papel interno en el alimentador posterior (causa del indicador de error en panel). Se retiró la hoja atascada sin dañar el rodillo.
- Diagnóstico Lógico (Servicio de Impresión): El estado del indicador volvió a verde, pero la cola de impresión permanecía congelada por trabajos corruptos acumulados.
- Acción de Reparación en Consola (CMD Administrador):
  1. `net stop spooler` (Detención del servicio de cola de impresión).
  2. `del /Q /F /S "%systemroot%\System32\Spool\Printers\*.*"` (Purga de la memoria caché de trabajos trabados).
  3. `net start spooler` (Reinicio del servicio).
- Verificación: Se envió página de prueba local de Windows y respondió de forma correcta.

NOTA DE RESOLUCIÓN Y CIERRE:
Estimado Roberto, le informamos que la impresora principal del Piso 2 ya se encuentra 100% operativa. 
Se extrajo una hoja atascada en el rodillo interno y se reinició el servicio de impresión para desbloquear la cola de documentos. Imprimimos una página de prueba con éxito y validamos en el área que los balances ya se están imprimiendo con normalidad.

Damos por resuelto y cerrado el incidente.
======================================================================

```


Incidente vs. Requerimiento: Al ser un servicio que estaba funcionando y se detuvo afectando la operación, siempre se clasifica como Incidente.

Urgencia Alta: Cuando hay una reunión de directorio o cierre contable con hora límite (SLA apretado), la urgencia escala a Alta.

Doble Diagnóstico (Físico + Lógico): En impresoras es muy común que aunque arregles lo físico (papel/tóner), debas aplicar comandos para limpiar el Spooler de Windows (net stop spooler).



# Categorías y Subcategorías

##### provienen del Catálogo de Servicios de TI (Service Catalog
##### marco de buenas prácticas ITIL (Information Technology Infrastructure Library).

`[ Categoría Principal ] ➔ [ Subcategoría ] ➔ [ Equipo Responsable / Ruteo ]`

cada departamento de TI las personaliza según su infraestructura. Se dividen en dominios principales:

Hardware / Periféricos: Impresoras, Monitores, Teclados, Laptops, Teléfonos IP.

Redes y Conectividad: Wi-Fi, Cableado LAN, VPN, Firewall, Salida a Internet.

Sistemas y Software: Sistema Operativo, Suite Ofimática (Office/Google), ERP, CRM.

Gestión de Accesos (IAM): Contraseñas, Creación de Usuarios, Permisos de Carpetas.


Práctica

1. Ruteo Automático: Si un ticket se clasifica como Redes > VPN, el sistema lo asigna directamente al grupo de Redes sin pasar por un humano.

2. Métricas y Estadísticas: Permiten saber a fin de mes en qué se invierte el tiempo (ej. "El 40% de los tickets fueron desbloqueos de contraseña").

3. Gestión de Problemas (Problem Management): Si hay 50 tickets de Hardware > Impresoras, indica que la impresora ya no sirve y requiere reemplazo, en lugar de seguir reparándola.
    


# Inspección Física y el Diagnóstico Lógico

Proviene del Modelo OSI y de la metodología de Troubleshooting de la certificación CompTIA A+ (el estándar global para técnicos de soporte).

```
┌────────────────────────────────────────────────────────┐
│ DIAGNÓSTICO LÓGICO   (Capas 3 a 7: Software / Protocolos)│
├────────────────────────────────────────────────────────┤
│ INSPECCIÓN FÍSICA    (Capas 1 y 2: Hardware / Medios)  │
└────────────────────────────────────────────────────────┘
```

1. Inspección Física (Capas 1 y 2 de OSI)

Nace del análisis del Hardware y los Medios Físicos de Transmisión
Se enfoca en la materia, la energía eléctrica y los componentes mecánicos:

Origen técnico: Capa 1 (Física) y componentes mecánicos/electrónicos del dispositivo.

Qué abarca: Cables UTP/Coaxial, conectores RJ45, botones de encendido, luces LED de estado, alimentación eléctrica, temperatura de componentes, rodillos y atascos de papel en impresoras

Regla de Help Desk: Nunca diagnostiques software si el hardware no tiene energía o el cable está desenchufado.


2. Diagnóstico Lógico (Capas 3 a 7 de OSI)

Nace del análisis del Software, Protocolos de Red, Servicios del Sistema Operativo y Datos:

Origen técnico: Capas 3 a 7 (Red, Transporte, Sesión, Presentación, Aplicación).

Qué abarca: Asignación de direcciones IP, tablas ARP, reglas de Firewall, servicios del sistema (como el Print Spooler o el DNS Client), procesos en memoria RAM y registros del sistema.

Regla de Help Desk: El hardware puede estar perfecto, pero si la capa lógica (servicios/protocolos) está colgada, el sistema no funcionará




# 2. Redes, Direccionamiento IP, DHCP y DNS

Cómo se comunican las computadoras en una red local (LAN) y hacia Internet.

Modelo OSI / TCP IP

APP
Present
Sesión
Transporte
Red
Enlace de datos
Fisica

Modelo OSI y TCP/IP para Soporte: Identificación rápida de fallas según la capa
Capa 1: Cable/Físico, Capa 3: IP/Red, Capa 7: Aplicación/Navegador


Anatomía de una Dirección IP (IPv4):

1. Dirección IP local (ej. 192.168.1.50),
2. Máscara de subred (255.255.255.0),
3. Puerta de enlace / Gateway (192.168.1.1).

IP Pública vs. IP Privada.


Servicios de Red Cruciales:

4. DHCP: Asignación automática de IP.
5. DNS: Traduce nombres de dominio (google.com) a direcciones IP (142.250.190.46).

Abre la consola de tu equipo (cmd en Windows o terminal en Mac/Linux).

Ejecuta la inspección de red y anota tu IP, Gateway y Servidor DNS actual
Cambia manualmente tu DNS a los servidores públicos de Google (8.8.8.8 y 8.8.4.4)
verifica la navegación.






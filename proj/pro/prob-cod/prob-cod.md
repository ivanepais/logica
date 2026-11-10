# Problema Real -> Código

Analizar una situación real
Descubrir qué problema necesita resolverse
Convertirlo en una solución de software útil, viable y sostenible

Pensar como analistas de problemas, ingenieros de software y diseñadores de soluciones


## 1. Fundamentos: problema vs. solución
Identificar problemas reales, necesidades, síntomas, causas y oportunidades.


## 2. Descubrimiento del problema
Investigar usuarios, actores, necesidades, comportamientos y contexto 


## 3. Análisis y validación
Identificar causas raíz, validar hipótesis y evitar construir soluciones innecesarias.


## 4. Modelado del dominio
Representar procesos, reglas de negocio, entidades, relaciones y flujos de trabajo


## 5. Ingeniería de requisitos
Transformar necesidades en requisitos funcionales y no funcionales.


## 6. Diseño de soluciones
Diseñar alternativas, evaluar restricciones y seleccionar una solución apropiada 


## 7. Arquitectura de software
Componentes, responsabilidades, límites, comunicación, datos y decisiones arquitectónicas.


## 8. MVP y priorización
Delimitar el alcance, priorizar funcionalidades y construir el producto mínimo viable.


## 9. Implementación e ingeniería
Convertir el diseño en software mediante desarrollo incremental, buenas prácticas y testing.


## 10. Validación de la solución
Evaluar usabilidad, comportamiento, resultados y cumplimiento de objetivos


## 11. Despliegue y evolución
Llevar la solución a producción, observar su funcionamiento y mejorarla.


## 12. Técnicas avanzadas
Domain-Driven Design, Event Storming, sistemas distribuidos, arquitectura evolutiva y toma de decisiones complejas.



## Marcos de referencia


### Design Thinking: Comprender las necesidades humanas y explorar soluciones.

### Double Diamond: Descubrir y definir problemas antes de desarrollar soluciones.

### Jobs To Be Done: Comprender qué progreso busca conseguir una persona.

### Lean Startup: Validar hipótesis y reducir el riesgo de construir algo que nadie necesita

### 5 Whys: Investigar posibles causas raíz.

### User Story Mapping: Organizar funcionalidades desde la perspectiva del usuario.

### UML y BPMN: Representar procesos, comportamientos y estructuras.

### Domain-Driven Design: Modelar dominios complejos y reglas de negocio.

### C4 Model: Comunicar y diseñar arquitecturas de software.

### ATAM: Analizar decisiones y compromisos arquitectónicos.



# 1. Comprender el problema


1. PENSAMIENTO ORIENTADO A PROBLEMAS

Distinción: problema y solución

Error: comenzar directamente pensando en funcionalidades, tecnologías o arquitecturas


Ej: persona plantea
Necesito una aplicación para gestionar los turnos de mi peluquería.

##### Tenemos un problema definido? No necesariamente.

##### !!! Tenemos una solución propuesta: una aplicación para gestionar turnos

##### !!! todavía desconocemos muchas cuestiones: 
- Qué situación concreta necesita mejorar.
- Quién experimenta esa dificultad.
- Cómo se realiza actualmente el trabajo.
- Qué consecuencias produce el problema.
- Si realmente hace falta desarrollar software.


SOLUCIÓN PREMATURA
Construir una aplicación de turnos.
Todavía no sabemos si esta es la mejor alternativa.

PUNTO DE PARTIDA CORRECTO
##### !!! Comprender por qué la gestión actual de turnos genera dificultades.
##### !!! Primero investigamos la situación.
##### !!! Después evaluamos las alternativas.

Principio clave: no debemos enamorarnos de una solución antes de comprender el problema

Una solución de software debe responder a una necesidad real
no simplemente ofrecer funcionalidades interesantes.



2. Problema real

##### Podemos definirlo como una situación en la que existe una diferencia relevante entre:

### 1. - El estado actual: cómo funcionan las cosas hoy.
### 2. - El estado deseado: cómo deberían funcionar.
### 3. - El obstáculo: qué impide alcanzar ese estado.
### 4. - Las consecuencias: qué sucede por no resolverlo


Estado actual
El peluquero atiende clientes y también gestiona las reservas.

Estado deseado
Atender sin interrupciones y mantener los turnos organizados.

Obstáculo
La gestión de reservas compite con el tiempo de atención.

Consecuencia
Interrupciones, errores de organización y posibles pérdidas de ingresos.

importante: todavía no hemos decidido desarrollar una aplicación.


#### !!! Podrían existir varias alternativas:
1. Establecer horarios específicos para responder mensajes.
2. Utilizar una agenda compartida.
3. Incorporar un sistema de reservas.
4. Automatizar las confirmaciones y recordatorios.
5. Delegar la gestión de turnos.



3. Seis conceptos fundamentales

### 1. Necesidad: Es algo que una persona necesita conseguir o mejorar.

Ej: un peluquero necesita organizar sus turnos sin interrumpir constantemente su trabajo



### 2. Dolor o dificultad (Pain Point): Es una circunstancia concreta que produce esfuerzo, frustración, pérdida de tiempo, dinero o recursos.

Ejemplo: tener que detener un corte para responder una consulta sobre disponibilidad.



### 3. Síntoma: Es una manifestación observable del problema, pero no necesariamente su causa.

Ejemplo: existen turnos olvidados.

Puede parecer que el problema es la falta de recordatorios
pero quizás la causa real sea que las reservas quedan dispersas entre distintos canales.



### 4. Causa raíz: Es uno de los factores que originan o contribuyen al problema

#### !!! Para investigarla podemos utilizar la técnica de los 5 Whys

#### 1. ¿Por qué se olvidan los turnos?
##### Porque no se registran correctamente.

#### 2. Por qué no se registran?
##### Porque algunos se acuerdan por mensajes.

#### 3. Por qué quedan dispersos?
##### Porque no existe un proceso centralizado.

#### 4. Por qué no hay uno?
##### Porque toda la gestión se realiza informalmente.



### 5. Restricción: Es una condición que limita las soluciones posibles

Ejemplos:
- Presupuesto reducido.
- Poco tiempo para capacitar a los empleados.
- Conexión a Internet inestable.
- Necesidad de utilizar teléfonos móviles.
- Protección de datos personales.

Una solución técnicamente excelente puede fracasar si ignora estas restricciones.



### 6. Resultado esperado: Es el cambio que queremos conseguir y que podemos observar o medir.

Ejemplo: reducir las interrupciones durante la atención y disminuir los turnos olvidados.

La diferencia entre tener una funcionalidad y producir un resultado es fundamental:
- Funcionalidad: enviar recordatorios.
- Resultado: reducir las ausencias a los turnos.

##### El recordatorio es un medio; la reducción de ausencias es el objetivo.



4. Técnica: formular correctamente un problema

##### Para evitar definiciones vagas utilizaremos una estructura que nos obligue a comprender el contexto.

### Plantilla de definición del problema

Usuario o actor:

```
Necesita conseguir [objetivo o resultado],
pero actualmente encuentra [obstáculo] en [contexto o situación],
lo que provoca [consecuencia observable].
```

Ej:
El peluquero necesita gestionar sus reservas mientras atiende a sus clientes,
pero actualmente debe interrumpir su actividad para responder solicitudes y registrar turnos,
lo que dificulta la atención y aumenta el riesgo de errores en la agenda.


#### !!! Esta estructura nos ayuda a responder cinco preguntas:

#### 1. ¿Quién tiene el problema?
#### 2. ¿Qué necesita conseguir?
#### 3. ¿Qué dificultad experimenta?
#### 4. ¿En qué contexto sucede?
#### 5. ¿Qué consecuencias produce?

Una definición correcta no tiene que mencionar tecnologías ni funcionalidades.



5. Técnica complementaria: investigar antes de asumir

Aquí entra en juego el enfoque de Design Thinking
y el descubrimiento de problemas del Double Diamond.


### 1. Cuál es el problema?

#### Descubrir: Divergir
##### Entender todos los problemas relevantes, causas y efectos en cadena

#### Definir: Convergir 
##### Combina lo que has descubierto para identificar los problemas clave.



### 2. Cuál es la solución?

#### Desarrollar: Divergir
##### Generar ideas, experimentar y probar una amplia variedad de posibles soluciones

#### Entrega: Convergir
##### Concéntrate en la mejor solución y perfecciona su lanzamiento.


La idea central es separar dos actividades:

#### 1. Descubrir: investigar qué sucede realmente.

#### 2. Definir: seleccionar y formular el problema que merece ser resuelto.


#### !!! Para investigar utilizaremos preguntas abiertas y comportamientos reales.


#### Pregunta útil | Qué buscamos descubrir?

##### 1. Cómo gestionas actualmente los turnos?: Proceso actual.

##### 2. Qué sucedió la última vez que se produjo un error?: Evidencia concreta

##### 3. Con qué frecuencia ocurre?: Magnitud y frecuencia

##### 4. Qué consecuencias tiene?: Impacto.

##### 5. Cómo solucionas actualmente esa situación?: Alternativas y limitaciones existentes


#### !!! Evita preguntas que tengan que involucren una solución

Como:
- ¿Te gustaría tener una aplicación?
- ¿Usarías un sistema automatizado?
- ¿Crees que sería útil recibir notificaciones?

Porque estamos preguntando por opiniones hipotéticas sobre una solución
en lugar de investigar problemas y comportamientos existentes.



6. Proceso para el desarrollo profesional: 

Problema
Comprender la situación real.

Investigación
Obtener evidencia y conocer a los actores.

Definición
Delimitar qué problema resolver

Requisitos
Determinar qué necesita hacer la solución.

Diseño
Evaluar alternativas y diseñar el sistema

Implementación
Construir y probar la solución.

Validación
Comprobar resultados y aprender.


#### No es un proceso estrictamente lineal
##### Durante el desarrollo podemos descubrir información que nos obligue a revisar los requisitos
##### el diseño o incluso la definición inicial del problema



7. Ejercicio: descubrir y definir un problema

Primera validación


Caso: peluquería con dificultades para gestionar turnos.

Un peluquero trabaja solo.
Durante el día atiende clientes, responde mensajes, recibe consultas sobre disponibilidad y registra reservas


En algunas ocasiones:
- Debe interrumpir la atención para responder mensajes.
- Se olvida de registrar algún turno.
- Se producen confusiones con los horarios.
- Algunos clientes olvidan sus reservas

El propietario está considerando contratar a alguien o desarrollar una aplicación para solucionar estas dificultades.

Tu objetivo no es diseñar la aplicación todavía. Debes demostrar que puedes comprender y definir el problema.


Parte A. Comprender la situación

1. Identifica el problema principal.
¿Qué situación consideras que necesita resolverse? Evita mencionar funcionalidades o tecnologías.

2. Diferencia síntomas y posibles causas.
Identifica al menos dos síntomas y dos posibles causas. Recuerda que las causas todavía son hipótesis.

3. Identifica los actores.
¿Quiénes participan en esta situación y quiénes experimentan sus consecuencias?


Respuestas:

1. Que el peluquero solo se concentre en cortar el pelo a los clientes

2. síntomas y posibles causas

síntomas:
- interrupción de la atención al cliente
- olvido en registrar los turnos

posibles causas:
- debe interrumpir la atención al cliente porque está solo
- se puede olvidar porque tiene que atender al prospecto y volver a atender al cliente



Parte B. Investigar

4. Formula tres preguntas de descubrimiento.
Debes utilizar preguntas abiertas que permitan conocer el proceso actual, las dificultades y sus consecuencias.

5. Identifica las restricciones.
Menciona al menos tres condiciones que podrían afectar la solución.


Respuestas:

1. Preguntas
- Cómo gestionas los turnos?
- Que errores tuviste con las gestion actual, que consecuencias tuvo?
- Con qué frecuencia ocurren los errores?
- Aplicas alternativas para evitar esos errores?

2. Restricciones
- Falta de presupuesto
- Falta de tecnología para aplicar la solución 
- Costumbre al proceso actual




Parte C. Definir

6. Formula el problema utilizando esta estructura:
[Usuario] necesita [objetivo], pero [obstáculo] en [contexto], lo que provoca [consecuencia].

7. Define un resultado medible.
¿Qué indicador utilizarías para comprobar que el problema está mejorando? Explica por qué elegiste ese indicador


Respuestas:

1. Definición del problemas

El peluquero necesita atender a los clientes y a su vez atender a posibles prospectos sin interrupciones
Actualmente cuando está atendiendo a los clientes tiene que interrumpir su servicio para atender a los prospectos
Lo que provoca un servicio con conflictos


2. Indicador de mejora:

Cantidad/Porcentaje de interrupciones al momento de dar el servicio
Reducción en la cantidad de errores
Reducción olvido por parte del peluquero y cliente




### Corrección


1. Identificación del problema

Que el peluquero solo se concentre en cortar el pelo a los clientes.

distinción conceptual:
- Objetivo: que el peluquero se concentre en atender a sus clientes.
- Problema: la gestión de consultas y reservas interfiere con la prestación del servicio.

objetivo nos indica adónde queremos llegar,
mientras que el problema nos permite entender qué situación debemos modificar.

```
El peluquero tiene dificultades para gestionar las consultas y reservas mientras realiza los servicios de peluquería, porque ambas actividades requieren su atención simultáneamente.

```

un problema describe una situación indeseada, no solamente el estado que queremos alcanzar


2. Síntomas y posibles causas

Síntomas:
- Interrupción de la atención.
- Olvido al registrar los turnos.

Posibles causas:
- Debe interrumpir la atención porque está solo.
- Puede olvidarse porque debe cambiar constantemente entre prospectos y clientes


Los dos son manifestaciones observables que permiten investigar qué está sucediendo.
Ahora profundicemos en las causas.

que está solo, es una condición que contribuye al problema. Pero todavía no explica completamente por qué suceden las interrupciones.
La segunda explicación es más interesante: identificaste un cambio constante de tareas.

##### Esto nos permite introducir un concepto importante: cambio de contexto (context switching).


Cambio de contexto
Es el esfuerzo que una persona debe realizar cuando cambia su atención entre actividades diferentes

Una posible hipótesis adicional sería:
No existe un proceso organizado para recibir, registrar y gestionar las solicitudes de turnos sin interrumpir la actividad principal.

atención: todavía debemos investigarlo. No podemos afirmar que esa sea la causa real.

##### Una mejora en tu razonamiento: cuando identifiques una causa, pregúntate si estás describiendo el origen del problema o simplemente explicando cómo se manifiesta.


3. Identificación de actores
los problemas de software rara vez afectan a una sola persona.

##### Actor	Participación	Posible impacto

Peluquero
Gestiona reservas y atiende	Interrupciones y errores.

Cliente actual
Recibe el servicio
Atención interrumpida.

Cliente potencial
Consulta por servicios o turnos
Demoras en las respuestas.

Propietario	Administra el negocio
Posibles pérdidas de ingresos.


Observa que el peluquero podría ser también el propietario. Los roles no necesariamente representan personas diferentes.

#### !!! Concepto clave: Stakeholders (partes interesadas).

Son las personas u organizaciones que participan en el sistema, influyen en él o se ven afectadas por sus resultados.


4. Preguntas de descubrimiento

Tu pregunta	Versión mejorada
¿Cómo gestionas los turnos?	¿Podrías explicarme cómo gestionas un turno desde que recibes la consulta hasta que el cliente llega?
¿Qué errores tuviste?	¿Recuerdas la última vez que se produjo una confusión con un turno? ¿Qué ocurrió?
¿Con qué frecuencia?	¿Cuántas veces aproximadamente ocurrió durante la última semana?
¿Aplicas alternativas?	¿Qué haces actualmente cuando estás atendiendo y recibes una nueva consulta?

##### Preguntar por acontecimientos pasados en lugar de opiniones hipotéticas.

Por ejemplo:
- Menos útil: ¿Te resulta difícil gestionar los turnos?
- Más útil: ¿Qué sucedió la última vez que tuviste que gestionar un turno mientras atendías a alguien?

Restricciones
Tus respuestas:
- Falta de presupuesto.
- Falta de tecnología.
- Costumbre al proceso actual.



1. Presupuesto

Correcto. Es una restricción económica.
##### Podría limitar la adquisición de dispositivos, contratación de servicios o desarrollo del software.

2. Tecnología

La expresión es demasiado general.

Debemos investigar cosas como:
- ¿Tiene un teléfono inteligente?
- ¿Tiene conexión estable a Internet?
- ¿Dispone de una computadora?
- ¿Tiene conocimientos para utilizar herramientas digitales?
##### La ausencia de tecnología no necesariamente es el problema: podría ser una condición del entorno.

3. Costumbre al proceso actual

Esto se relaciona con la resistencia al cambio y la adopción tecnológica.
Una solución puede ser técnicamente excelente, pero fracasar porque los usuarios no consiguen incorporarla a su rutina.

##### Aquí aparece otro concepto importante: usabilidad y adopción.
No alcanza con que el sistema funcione técnicamente; también tiene que ser viable para las personas que lo utilizarán.


5. Definición del problema 


Identificaste:
- Usuario: peluquero.
- Necesidad: atender a clientes y prospectos.
- Obstáculo: interrupciones.
- Consecuencia: conflictos en el servicio.


mayor precisión:
- Disminución de la continuidad de la atención.
- Posibles errores en la gestión de turnos.
- Demoras para los clientes.
- Experiencia negativa.
- Posibles pérdidas de oportunidades comerciales.


6. Indicadores de mejora

Cantidad o porcentaje de interrupciones durante el servicio.

Reducción de errores.

Reducción de olvidos por parte del peluquero y del cliente.


Interrupciones	Cantidad de interrupciones por jornada.
Errores de registro	Registros incorrectos o incompletos / total de reservas × 100.
Turnos olvidados por el peluquero	Turnos no registrados o no gestionados correctamente.
Ausencias de clientes	Turnos confirmados en los que el cliente no se presenta / total de turnos confirmados × 100.


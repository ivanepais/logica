# Diseño de Software y Arquitectura

Son disciplinas clave en la programación que se enfocan en cómo se estructura y organiza un sistema de software para garantizar que sea eficiente, escalable, mantenible y confiable.

Algunas de ellas son: 

Clean Code Principles

Programming Paradigms

Object Oriented Programming

Software Design Principles

Design Patterns

Architectural Principles

Architectural Styles

Architectural Patterns

Enterprise Patterns


Aunque los dos términos están relacionados, tienen enfoques ligeramente diferentes:


##Software Design: 

El diseño de software se centra en las decisiones de bajo nivel sobre cómo se implementarán las funcionalidades de un sistema. Incluye:

Estructura interna:

Cómo las clases, funciones, módulos y componentes interactúan entre sí.

Uso de patrones de diseño como Singleton, Factory, Observer, etc., para resolver problemas recurrentes
    

Componentes clave:

Abstracción: 

Definir interfaces claras para los componentes.


Encapsulación: 

Proteger los detalles internos de los objetos.


Cohesión y acoplamiento:

Alta cohesión: 

Cada módulo debe tener un propósito claro.


Bajo acoplamiento: 

Los módulos deben depender mínimamente entre sí


## Software Architecture

La arquitectura de software aborda las decisiones de alto nivel que influyen en la estructura global de un sistema. 

Implica planificar cómo se conectan las piezas más grandes del sistema, como los subsistemas o servicios

Principios clave:

Modularidad: 

Dividir el sistema en componentes independientes.


Escalabilidad:

Diseñar para manejar el crecimiento en datos o usuarios.


Disponibilidad: 

Minimizar los tiempos de inactividad.


Seguridad: 

Proteger el sistema contra amenazas.

Estilos de arquitectura comunes:

Monolítica: 

Todo el sistema está en un solo bloque de código.


Microservicios: 

Dividir funcionalidades en servicios pequeños e independientes.


Arquitectura de capas: 

Separar responsabilidades en capas (presentación, lógica de negocio, datos).


Event-driven (basada en eventos): 

Los componentes se comunican a través de eventos


Aspectos importantes:

Elegir tecnologías adecuadas (bases de datos, frameworks, lenguajes).

Planificar la integración entre sistemas (API, REST, GraphQL).

Garantizar soporte para cambios futuros


Ejemplos de herramientas para arquitectura:

Modelos C4 (Contexto, Contenedor, Componente, Código).

Diagramas de flujo de sistemas y procesos.


## Diseño y Arquitectura

La arquitectura proporciona el marco general de un sistema.

El diseño detalla cómo se implementarán las funcionalidades dentro de ese marco.


La arquitectura puede decidir que un sistema se construya con microservicios, mientras que el diseño especifica cómo cada microservicio interactuará con la base de datos


## Objetivos: 

Mantenibilidad: 

Los sistemas bien diseñados y arquitectados son más fáciles de modificar y depurar.


Rendimiento: 

Las decisiones arquitectónicas afectan la velocidad y capacidad de respuesta del sistema.


Escalabilidad: 

Un sistema con buena arquitectura puede adaptarse a las necesidades futuras sin ser rediseñado por completo.



# Patrones de Arquitectura

Un patrón arquitectónico es una solución general y reutilizable a un problema que ocurre comúnmente en la arquitectura de software dentro de un contexto determinado.

Los patrones arquitectónicos abordan diversas cuestiones en la ingeniería de software, como las limitaciones de rendimiento del hardware informático, la alta disponibilidad y la minimización de un riesgo empresarial.

Proporcionan un marco estructurado para diseñar sistemas robustos, escalables y mantenibles


1. Layered Architecture

Divide el sistema en capas separadas, cada una con responsabilidades específicas. Las capas más comunes son:

Presentación: 

Interacción con el usuario (UI o interfaz gráfica).


Lógica de negocio: 

Procesamiento de datos y reglas del negocio.


Acceso a datos: 

Interacción con bases de datos u otros sistemas de almacenamiento.


Capa de infraestructura: 

Servicios de soporte como autenticación o registro.


Ventajas:

Fácil de entender y mantener.

Separación de responsabilidades (SoC, por sus siglas en inglés).

Escalabilidad vertical de componentes individuales.


Desventajas:

Puede volverse ineficiente debido a la necesidad de pasar datos entre capas.

No siempre es adecuado para sistemas de alto rendimiento


2. Client-Server (Cliente-Servidor)

Descripción: 

Divide el sistema en dos partes:


Cliente: 

Solicita recursos o servicios (por ejemplo, aplicaciones móviles o navegadores web).


Servidor: 

Proporciona servicios y administra datos (por ejemplo, bases de datos o APIs).


Ventajas:

Escalabilidad del servidor para atender múltiples clientes.

Separación clara entre el frontend y backend.


Desventajas:

Puede ser un cuello de botella si el servidor no está bien dimensionado.

Dependencia de red entre cliente y servidor


3. Event-Driven Architecture (EDA)
        
Descripción: 

Basada en la emisión, captura y manejo de eventos. Los componentes del sistema se comunican reaccionando a eventos en lugar de invocar directamente a otros componentes.


Productores de eventos: 

Generan eventos (por ejemplo, un usuario hace clic en un botón).


Consumidores de eventos: 

Responden a esos eventos.


Ventajas:

Ideal para sistemas asíncronos y de alto rendimiento.

Facilita la desacoplamiento entre componentes.

Excelente para sistemas distribuidos.


Desventajas:

Dificultad para depurar debido a la naturaleza asíncrona.

Requiere una infraestructura adecuada para manejar eventos (por ejemplo, Kafka, RabbitMQ


4. Microservices Architecture

Descripción: 

Divide una aplicación en servicios pequeños, autónomos y especializados. Cada microservicio ejecuta una función específica y se comunica con otros servicios mediante APIs (generalmente REST o gRPC).


Ventajas:

Alta escalabilidad: Puedes escalar servicios individuales.

Facilita la implementación continua y el uso de diferentes tecnologías para cada servicio.


Desventajas:

Mayor complejidad en la gestión (orquestación, despliegue).

Necesidad de monitorear y mantener múltiples servicios 


5.  Serverless Architecture

Descripción: 

Las aplicaciones se dividen en funciones independientes que se ejecutan en la nube bajo demanda. Los proveedores (AWS Lambda, Azure Functions) gestionan la infraestructura.


Ventajas:

Escalado automático.

Reducción de costos, ya que solo se paga por lo que se usa.


Desventajas:

Dependencia del proveedor (vendor lock-in).

Latencia en el arranque de funciones


6. Model-View-Controller (MVC)

Descripción: 

Divide las aplicaciones en tres componentes:

Modelo: Gestiona los datos y la lógica del negocio.

Vista: Presenta los datos al usuario.

Controlador: Actúa como intermediario entre la vista y el modelo.


Ventajas:

Claridad en la separación de responsabilidades.

Facilita el mantenimiento y las pruebas.

Desventajas:

Puede volverse complicado si las responsabilidades entre los componentes no están bien definidas
        

7. Pipe-and-Filter

Los datos fluyen a través de una secuencia de filtros, donde cada filtro realiza una transformación específica, y las tuberías conectan estos filtros.

Ejemplo:

Procesamiento de datos en etapas (entrada -> procesamiento -> salida).


Ventajas:

Modularidad: Fácil de agregar o modificar filtros.

Ideal para sistemas de procesamiento por lotes o flujos de datos.


Desventajas:

Puede tener problemas de rendimiento si los datos deben transformarse muchas veces


8. Broker Architecture

Utiliza un intermediario (broker) para gestionar las comunicaciones entre componentes distribuidos.

Ejemplo: Sistemas basados en middleware como Apache ActiveMQ.


Ventajas:

Desacopla los componentes distribuidos.

Gestiona servicios heterogéneos.


Desventajas:

Dependencia del broker.

Puede ser un punto único de falla si no se maneja adecuadamente


9. Hexagonal Architecture

Diseña el sistema como un núcleo central que interactúa con el mundo exterior a través de "puertos" (interfaces) y "adaptadores" (implementaciones concretas).

Ventajas:

Alta flexibilidad para cambiar tecnologías externas.

Desacoplamiento entre el dominio y las dependencias externas.


Desventajas:

Puede ser complejo de implementar correctamente al principio.



## Monolithic Apps

Es un enfoque de arquitectura de software donde todas las funcionalidades del sistema están integradas en un único bloque de código, que se despliega como una sola unidad. 

Es uno de los enfoques más antiguos y comunes para desarrollar aplicaciones.


Características:

Estructura única:

Todo el código está dentro de un único proyecto o ejecutable.

Las funcionalidades como autenticación, lógica de negocio, acceso a datos y UI están interconectadas.

Despliegue como unidad:

Toda la aplicación se compila, empaqueta y despliega como un solo artefacto (por ejemplo, un archivo .jar, .war o binario).


Base de datos compartida:

Generalmente, una aplicación monolítica utiliza una única base de datos para todas sus funcionalidades.


Tight Coupling (Acoplamiento fuerte):

Los módulos de la aplicación están estrechamente vinculados, lo que dificulta la separación de responsabilidades


Ventajas:

Facilidad de desarrollo:

Ideal para equipos pequeños y proyectos iniciales, ya que es más sencillo estructurar y trabajar en un único código base.


Simplicidad en el despliegue:

Solo necesitas desplegar un archivo o servicio, lo que facilita las implementaciones.


Menor complejidad inicial:

No se requieren arquitecturas avanzadas o herramientas para gestionar la comunicación entre servicios.


Desempeño:

Al ejecutarse como una unidad, la comunicación entre módulos ocurre dentro del mismo proceso, lo que puede ser más rápido que las llamadas entre servicios distribuidos.


Desventajas:

Escalabilidad limitada:

Es difícil escalar ciertas partes de la aplicación independientemente. 

Por ejemplo, si solo necesitas más recursos para el módulo de "búsqueda", tendrías que escalar toda la aplicación.


Problemas de mantenimiento:

A medida que crece el código base, se vuelve complejo de gestionar, y los cambios en una parte del sistema pueden afectar a otras.


Falta de flexibilidad tecnológica:

Toda la aplicación debe usar el mismo stack tecnológico, lo que puede ser limitante si deseas probar nuevas tecnologías en partes específicas.


Cuellos de botella en el desarrollo:

Los equipos grandes pueden enfrentarse a conflictos constantes al trabajar en el mismo código base.


Despliegue lento y riesgo elevado:

Un pequeño cambio requiere volver a compilar y desplegar toda la aplicación. Si algo falla, puede afectar a todo el sistema


Aplicación de la arquitectura: 

Proyectos pequeños o MVP (Producto Mínimo Viable):

Ideal para probar ideas o iniciar un proyecto con recursos limitados.


Equipos pequeños:

Más fácil de coordinar cuando hay pocos desarrolladores.


Requisitos estables:

Cuando no esperas muchos cambios en el futuro o una rápida expansión del sistema.


Presupuesto limitado:

Las monolíticas suelen ser menos costosas de desarrollar y mantener al inicio


Comparación con Microservicios:

Monolítico:

Estructura:	Código base único

Despliegue: Unidad única

Escalabilidad: Escalamiento de toda la aplicación

Complejidad: Menor complejidad inicial

Flexibilidad: Limitada en cuanto a stack tecnológico

Riesgo de cambios: Cambios pueden impactar todo el sistema


Microservicios:

Estructura: Dividido en múltiples servicios independientes

Despliegue: Cada servicio se despliega por separado

Escalabilidad: Escalamiento independiente por servicio

Complejidad: Mayor complejidad inicial

Flexibilidad: Cada servicio puede usar tecnologías distintas

Riesgo de cambios: Cambios aislados a un servicio específico


Ejemplo de app: 

un sistema de comercio electrónico con las siguientes funcionalidades:

Gestión de usuarios.
Procesamiento de pedidos.
Inventario.
Pasarela de pagos.
Notificaciones.

En una aplicación monolítica:

Todo el código para estas funcionalidades estaría en un único repositorio.

Una sola base de datos central almacenaría la información de usuarios, pedidos, inventario, etc.

El despliegue implicaría empaquetar todo en un solo archivo y ejecutarlo en un servidor


Migrar de Monolítico a Microservicios:

Considera una migración si:

Tu aplicación está creciendo demasiado y se vuelve difícil de mantener.

Necesitas escalar diferentes partes del sistema de manera independiente.

Los equipos están creciendo y se benefician de una separación clara de responsabilidades.

Deseas adoptar nuevas tecnologías en partes específicas del sistema


## Microservices

Enfoque arquitectónico para diseñar aplicaciones como un conjunto de servicios pequeños, independientes y especializados. 

Cada servicio tiene una funcionalidad específica y se ejecuta como una unidad autónoma, comunicándose con otros servicios a través de APIs bien definidas.


Características:

Desacoplamiento:

Cada servicio es independiente y puede desarrollarse, desplegarse y escalarse por separado.


Responsabilidad única:

Cada microservicio aborda una funcionalidad específica (por ejemplo, autenticación, gestión de pedidos, etc.).


Comunicación mediante APIs:

Los microservicios interactúan usando protocolos ligeros como REST, gRPC, o mensajería asincrónica (RabbitMQ, Kafka).


Escalabilidad independiente:

Puedes escalar solo los servicios que lo necesitan, optimizando recursos.


Tecnologías diversas:

Cada microservicio puede ser desarrollado en el lenguaje y stack tecnológico más adecuado para su función.


Despliegue independiente:

Los cambios en un microservicio no requieren la actualización de toda la aplicación.
    

Ventajas:

Los servicios pueden escalarse individualmente según la carga.


Facilidad de mantenimiento:

El código está organizado en pequeñas unidades, lo que facilita las actualizaciones y el debugging.


Despliegues rápidos y frecuentes:

Puedes actualizar o agregar funcionalidades sin afectar al resto del sistema.


Flexibilidad tecnológica:

Cada equipo puede usar el lenguaje o framework que prefiera para desarrollar un microservicio.


Resiliencia:

Un fallo en un microservicio no necesariamente afecta a toda la aplicación.


Facilita la colaboración:

Los equipos pueden trabajar en paralelo en servicios diferentes sin interferir entre sí


Desafíos:

Complejidad de comunicación:

La coordinación entre múltiples servicios distribuidos requiere un diseño cuidadoso.


Gestión del despliegue:

Necesitas herramientas y estrategias como contenedores (Docker) y orquestadores (Kubernetes).


Monitoreo y depuración:

Rastrear errores es más complicado en un sistema distribuido.


Consistencia de datos:

Cada microservicio puede tener su propia base de datos, lo que dificulta mantener una visión global consistente.


Sobrecarga inicial:

Crear un sistema de microservicios desde cero requiere más esfuerzo y experiencia que una aplicación monolítica


Comunicación:

Sincronía:

Usan protocolos como HTTP/REST o gRPC para solicitudes directas.


Asincronía:

Utilizan sistemas de mensajería (Kafka, RabbitMQ) para enviar y recibir mensajes de manera no bloqueante


Ejemplo: 

un sistema de comercio electrónico con las siguientes funcionalidades:

Autenticación: Un microservicio dedicado a gestionar usuarios y sesiones.

Inventario: Controla los productos disponibles en stock.

Procesamiento de pedidos: Administra los pedidos realizados por los clientes.

Pasarela de pagos: Procesa pagos mediante diferentes métodos.

Notificaciones: Envía emails o mensajes de texto.


Cada uno de estos servicios:

Tiene su propia base de datos.

Se comunica con otros servicios mediante APIs.

Se puede escalar y actualizar independientemente


Aplicar arquitectura: 

Proyectos grandes:

Con equipos múltiples trabajando en paralelo.


Escalabilidad necesaria:

Cuando esperas altos volúmenes de tráfico en ciertas funcionalidades.


Innovación continua:

Deseas iterar rápidamente en algunas áreas del sistema





## SOA (Service-Oriented Architecture)

Es un enfoque de diseño de software donde las funcionalidades se agrupan en "servicios" independientes, interoperables y reutilizables que se comunican a través de interfaces bien definidas. 

Es una de las arquitecturas precursoras de los microservicios, pero tiene diferencias clave en su enfoque y aplicación


Características:

Servicios Reutilizables:

Cada servicio implementa una funcionalidad empresarial específica y puede ser reutilizado por diferentes aplicaciones.


Interoperabilidad:

Los servicios en SOA están diseñados para comunicarse independientemente del lenguaje de programación, sistema operativo o plataforma en la que se implementen.


Comunicación basada en protocolos estándar:

Usualmente se emplean protocolos como SOAP (Simple Object Access Protocol) y XML para la comunicación.


Contratos claros:

Los servicios definen contratos (generalmente en WSDL o XML) que describen cómo interactuar con ellos.


Orquestación de servicios:

SOA permite combinar servicios individuales para formar flujos de trabajo o procesos de negocio complejos.


Ventajas:

Acoplamiento bajo:

Los servicios están diseñados para ser independientes, lo que minimiza las dependencias entre ellos


Reutilización:

Los servicios bien diseñados pueden ser utilizados en diferentes contextos, reduciendo duplicación de esfuerzos.


Escalabilidad:

Al igual que los microservicios, SOA facilita la escalabilidad al poder distribuir servicios en distintos servidores.


Integración de sistemas heredados:

SOA es excelente para integrar aplicaciones y sistemas existentes mediante la creación de servicios que actúan como "envoltorios" para funcionalidades heredadas.


Flexibilidad:

Facilita la adaptación a cambios en los requisitos de negocio al permitir la modificación o adición de servicios.


Soporte para procesos empresariales complejos:

Gracias a la orquestación, es posible construir procesos que involucren múltiples servicios y sistemas


Desafios:

Complejidad inicial:

La implementación de SOA requiere un diseño cuidadoso y herramientas específicas, lo que puede aumentar la complejidad y los costos iniciales.


Sobrecarga de comunicación:

El uso de protocolos como SOAP y XML puede generar una mayor latencia en comparación con soluciones más ligeras.


Dependencia de herramientas específicas:

SOA a menudo depende de software empresarial como ESBs (Enterprise Service Bus) para gestionar la comunicación entre servicios.


Gestión de servicios:

A medida que el número de servicios crece, es necesario implementar mecanismos robustos de monitoreo, descubrimiento y versionado.


Rendimiento:

La naturaleza pesada de los estándares como SOAP y XML puede ser un obstáculo en sistemas de alta demanda


Diferencias entre SOA y Microservicios

SOA:

Tamaño del servicio: Servicios más grandes y complejos

Comunicación: SOAP, XML (más pesado)

Dependencia del ESB: Usa un Enterprise Service Bus (ESB)

Base de datos: Compartida entre varios servicios

Flexibilidad tecnológica: Limitada a tecnologías corporativas o estándares

Orquestación: Fuerte enfoque en la orquestación central


Microservicios:

Tamaño del servicio: Servicios pequeños y específicos

Comunicación: REST, gRPC, mensajería ligera

Dependencia del ESB: No depende de un ESB; usa API Gateway opcional

Base de datos: Cada servicio tiene su propia base de datos

Flexibilidad tecnológica: Cada servicio puede usar diferentes stacks tecnológicos

Orquestación: Prefiere la coreografía (interacción directa entre servicios)


Componentes:

Servicios:

Unidades funcionales independientes que realizan tareas específicas.


Enterprise Service Bus (ESB):

Actúa como intermediario para la comunicación entre servicios, manejando el enrutamiento, transformación de datos y gestión de mensajes.


Contratos de Servicio:

Describen cómo se accede al servicio y qué datos espera o produce.


Registro de Servicios:

Repositorio donde los servicios se registran y son descubiertos por otras aplicaciones o servicios.


Cliente:

Las aplicaciones o sistemas que consumen los servicios


Ejemplo:

Imagina un sistema bancario con estas funcionalidades:

Verificación de identidad.
Procesamiento de pagos.
Gestión de cuentas.
Generación de reportes.


En un enfoque SOA:

Cada funcionalidad se implementa como un servicio independiente (por ejemplo, un servicio de "Verificación de identidad").

Los servicios interactúan entre sí mediante un ESB, que actúa como intermediario.

Las aplicaciones cliente (como una app móvil o un sistema web) consumen estos servicios a través de protocolos estándar


Aplicación de la arquitectura: 

Integración de sistemas heredados:

Si necesitas unificar varios sistemas existentes en una solución cohesiva.


Procesos empresariales complejos:

Cuando necesitas orquestar múltiples sistemas en flujos de trabajo complejos.


Organizaciones grandes:

SOA está diseñado para ambientes empresariales con múltiples equipos y sistemas interconectados


Herramientas: 

ESB:

MuleSoft, Apache Camel, IBM WebSphere ESB.

Protocolo:

SOAP (Simple Object Access Protocol).

Contratos:

WSDL (Web Services Description Language).

Monitoreo:

Dynatrace, Splunk


## Service Mesh

En una arquitectura de microservicios, los servicios necesitan comunicarse entre sí, a menudo en ambientes distribuidos y complejos. Un Service Mesh actúa como un intermediario transparente que facilita y gestiona esta comunicación, asegurando que sea:

Confiable: Gestiona fallos y reintentos.

Segura: Implementa autenticación, encriptación (TLS) y autorizaciones.

Visible: Proporciona métricas y trazabilidad para monitorear el rendimiento.


El Service Mesh se compone de:

Data Plane (Plano de datos):
Maneja el tráfico entre los servicios. Implementado usualmente como proxies ligeros (por ejemplo, Envoy) que acompañan a cada servicio.

Control Plane (Plano de control):
Administra las políticas y configuraciones del Data Plane. Es el cerebro que decide cómo deben comportarse los proxies.

Funciones Clave de un Service Mesh

Enrutamiento Inteligente:
Redirige el tráfico según reglas específicas (por ejemplo, enrutamiento basado en versiones para despliegues canarios).

Balanceo de Carga:
Distribuye el tráfico entre instancias de servicios para evitar sobrecargas.

Seguridad:
Proporciona encriptación de extremo a extremo mediante TLS, autenticación mutua y autorizaciones.

Resiliencia:
Implementa patrones como circuit breakers, reintentos, timeouts y límites de velocidad para manejar fallos.

Observabilidad:
Proporciona métricas, logs y trazabilidad distribuida para monitorizar la comunicación entre servicios.

Gestión de Tráfico:
Soporta despliegues avanzados como blue/green, canary releases o pruebas A/B.


Ventajas de un Service Mesh:

Desacoplamiento de lógica transversal:
Los desarrolladores no necesitan implementar lógica de red (como reintentos o balanceo de carga) en sus servicios; el Service Mesh lo gestiona.

Seguridad Mejorada:
Simplifica la implementación de autenticación mutua (mTLS) y políticas de acceso.

Monitoreo Centralizado:
Proporciona visibilidad unificada de la comunicación entre servicios sin modificar el código.

Flexibilidad:
Facilita cambios y pruebas avanzadas en el comportamiento del tráfico sin modificar los servicios.

Escalabilidad:
Diseñado para manejar grandes arquitecturas de microservicios distribuidos.


Desafíos de un Service Mesh:

Complejidad Operacional:
Agrega una nueva capa que debe ser configurada y gestionada correctamente.

Sobrecarga de Recursos:
Cada proxy en el Data Plane consume recursos adicionales (CPU, memoria).

Curva de Aprendizaje:
Requiere conocimiento especializado para configurar y operar.

Problemas de Latencia:
Aunque mínima, la adición de proxies puede introducir una latencia adicional.

Ejemplos de Service Mesh:

Istio:
Popular en Kubernetes. Basado en Envoy como proxy.
Proporciona características avanzadas de gestión de tráfico y seguridad.

Linkerd:
Enfocado en simplicidad y rendimiento.
Ideal para equipos que buscan una solución más ligera.

Consul Connect:
De HashiCorp, integra gestión de servicios con un enfoque en networking y políticas.

AWS App Mesh:
Diseñado específicamente para aplicaciones en AWS.

Traefik Mesh:
Una solución ligera para Kubernetes con foco en facilidad de uso.

Service Mesh en Kubernetes

En Kubernetes, un Service Mesh se integra fácilmente gracias a su arquitectura basada en pods. Cada servicio tiene un proxy sidecar que se despliega como un contenedor dentro del mismo pod que el servicio. Este sidecar gestiona toda la comunicación de red del servicio.


¿Cuándo Usar un Service Mesh?:

Gran cantidad de servicios:
Si tu arquitectura tiene docenas o cientos de microservicios que necesitan comunicarse entre sí.

Requisitos de seguridad avanzados:
Necesitas mTLS para encriptación de extremo a extremo o políticas de acceso estrictas.

Observabilidad crítica:
Deseas rastrear y medir la interacción entre servicios con precisión.

Despliegues avanzados:
Planeas usar estrategias de despliegue como canary releases o pruebas A/B


Comparación con API Gateways:

Aunque ambos manejan comunicación entre servicios, un Service Mesh opera a nivel de servicio a servicio (intra-servicio), mientras que un API Gateway opera a nivel de comunicación cliente a servicio (inter-servicio).


Service Mesh:

Propósito: Comunicación interna entre servicios

Protocolo: HTTP/REST, gRPC, mTLS

Gestión de Tráfico: Entre servicios

Observabilidad: Métricas entre servicios


API Gateways:

Propósito: Comunicación entre clientes y servicios

Protocolo: HTTP/REST, WebSockets

Gestión de Tráfico: Desde el cliente hacia los servicios

Observabilidad: Métricas de acceso del cliente


Ejemplo:

Imagina una aplicación de comercio electrónico con varios microservicios: autenticación, inventario, pedidos y notificaciones.

Sin un Service Mesh: Cada servicio debe implementar lógica para autenticación, reintentos y monitoreo.

Con un Service Mesh: Un proxy sidecar se encarga de estas tareas para cada servicio, permitiendo que los desarrolladores se concentren solo en la lógica de negocio


## Twelve-Factor Apps

Es una metodología para construir aplicaciones modernas y escalables en la nube. 

Fue desarrollada originalmente por ingenieros de Heroku y describe 12 principios que las aplicaciones deben seguir para ser portátiles, resilientes y fáciles de mantener en entornos de despliegue dinámicos, como la nube.


1. Codebase (Base de código)

Principio: Una aplicación debe tener un único repositorio de código versionado, pero puede ser desplegada en múltiples entornos (producción, staging, desarrollo).

Implica:
Una fuente de verdad para el código.
Diferentes entornos comparten el mismo código base.


2. Dependencies (Dependencias)

Principio: Declara todas las dependencias explícitamente y no dependas de paquetes o librerías instalados en el sistema de ejecución.

Implica:
Usar gestores de paquetes como npm, pip, o Maven.
Empaquetar las dependencias con la aplicación.


3. Config (Configuración)

Principio: La configuración debe almacenarse fuera del código, preferiblemente en variables de entorno.

Implica:
Separar configuración (por ejemplo, claves API, URLs de bases de datos) del código.
Utilizar herramientas como .env para gestionar configuraciones locales.


4. Backing Services (Servicios externos)

Principio: Tratar servicios externos (bases de datos, colas de mensajes, sistemas de caché) como recursos adjuntos.

Implica:
Configurar servicios externos mediante variables de entorno.
Poder cambiar un servicio por otro con configuraciones mínimas.


5. Build, Release, Run (Construcción, Publicación y Ejecución)

Principio: Mantener estricta separación entre estas etapas:

Build: Compilación del código y dependencias.
Release: Combina el build con la configuración.
Run: Ejecución de la aplicación.

Implica:
Permitir reproducibilidad en cada etapa.
Usar herramientas como Docker o CI/CD pipelines.


6. Processes (Procesos)

Principio: Ejecuta la aplicación como uno o más procesos independientes y sin estado.

Implica:
No almacenar datos persistentes en el sistema de archivos local.
Usar bases de datos o sistemas de almacenamiento externo para persistencia.


7. Port Binding (Enlace de puertos)

Principio: Las aplicaciones deben exponer servicios mediante un puerto explícito.

Implica:
Los servicios web no deben depender de servidores web externos preconfigurados (como Apache).
Usar servidores integrados como Flask, Express.js, o Spring Boot.


8. Concurrency (Concurrencia)

Principio: Diseña la aplicación para escalar mediante procesos concurrentes.

Implica:
Dividir la funcionalidad en procesos especializados (por ejemplo, web, trabajos en segundo plano).
Usar herramientas de orquestación para gestionar procesos (Kubernetes, PM2).


9. Disposability (Descartabilidad)

Principio: Los procesos deben ser rápidos de iniciar y seguros de detener.

Implica:
Implementar manejo de señales como SIGTERM para apagados ordenados.
Diseñar procesos que no almacenen estado interno.


10. Dev/Prod Parity (Paridad entre desarrollo y producción)

Principio: Mantén los entornos de desarrollo, staging y producción lo más similares posible.

Implica:
Usar contenedores para asegurar consistencia.
Reducir diferencias entre equipos de desarrollo y operaciones.


11. Logs

Principio: Trata los logs como flujos de eventos.

Implica:
No gestionar archivos de logs directamente en la aplicación.
Enviar logs a stdout/stderr y usar herramientas externas para almacenarlos o analizarlos (ELK, Datadog).


12. Admin Processes (Procesos administrativos)

Principio: Ejecuta tareas administrativas (como migraciones de base de datos) como procesos de una sola vez.

Implica:
Evitar incluir estas tareas en los procesos normales de la aplicación.
Ejecutarlas bajo demanda mediante comandos o herramientas externas.


Ventajas de Twelve-Factor Apps:

Portabilidad:
Diseñadas para ejecutarse en cualquier entorno (local, staging, producción).

Escalabilidad:
Facilitan el crecimiento horizontal mediante múltiples instancias de procesos.

Mantenibilidad:
Simplifican actualizaciones y cambios de configuración.

Resiliencia:
El manejo correcto de logs y procesos hace que las aplicaciones sean más robustas frente a fallos.


Ejemplo Práctico:

Imagina una aplicación web que sigue los principios de Twelve-Factor Apps:

Usa un repositorio Git centralizado para su base de código.

Declara sus dependencias en un archivo package.json (Node.js).

Configura la base de datos y claves API usando variables de entorno.

Se conecta a una base de datos remota como un servicio externo.

Los logs se envían a stdout para que sean gestionados por un sistema como ELK.

Escala horizontalmente al lanzar múltiples instancias del servidor web.


Twelve-Factor Apps y la Nube:

El enfoque Twelve-Factor es ideal para aplicaciones diseñadas para la nube:

Contenedores: Docker encaja perfectamente con estos principios.

Orquestadores: Kubernetes gestiona la escalabilidad, replicación y monitoreo.

CI/CD: Pipelines de integración y despliegue continuo respetan la separación de etapas (build, release, run)




# Principios de Diseño y Desarrollo

Son pautas fundamentales que guían la creación de sistemas de software. 

Los principios clave incluyen:

SOLID (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion)

DRY (Don’t Repeat Yourself)

KISS (Keep It Simple, Stupid)

YAGNI (You Aren’t Gonna Need It)

Separation of Concerns

Modularity

Encapsulation

Composition over Inheritance

Loose Coupling and High Cohesion

Principle of Least Astonishment


Son guías generales que ayudan a construir sistemas de software bien estructurados, mantenibles y escalables. 

Estos principios son aplicables tanto al diseño como al desarrollo del software y son fundamentales para los programadores y arquitectos.


### Principios de Diseño:

Se centran en cómo estructurar y organizar el código para maximizar la claridad, reutilización y facilidad de mantenimiento

1. Single Responsibility Principle (SRP)

Una clase o módulo debe tener una única razón para cambiar, es decir, debe ser responsable de una sola funcionalidad.

Beneficios:

Facilita la comprensión y mantenimiento.

Reduce la complejidad.


2. Open/Closed Principle (OCP)

Las entidades de software (clases, módulos, funciones) deben estar abiertas para extensión pero cerradas para modificación.

Cómo aplicarlo:

Usa herencia o composición para agregar nuevas funcionalidades sin cambiar el código existente.


3. Liskov Substitution Principle (LSP)

Una subclase debe ser intercambiable con su clase base sin alterar el comportamiento del programa.

Si una clase Animal tiene un método moverse(), todas sus subclases (como Perro o Pájaro) deben implementar ese método de forma consistente.


4. Interface Segregation Principle (ISP)

Una interfaz no debe obligar a sus implementaciones a depender de métodos que no usan.

Es mejor tener interfaces específicas como Volador o Nadador en lugar de una interfaz Animal genérica con métodos irrelevantes para ciertos animales.


5. Dependency Inversion Principle (DIP)

Los módulos de alto nivel no deben depender de los módulos de bajo nivel; ambos deben depender de abstracciones (interfaces).

Usa interfaces o clases abstractas para desacoplar módulos. 


### Principios de Desarrollo: 

Estos principios se aplican al proceso de codificación y desarrollo para garantizar prácticas efectivas.

1. Don't Repeat Yourself (DRY)

Evita duplicar lógica o datos. 

Si algo se repite, conviértelo en una única fuente de verdad.

Ejemplo:

Usa funciones reutilizables en lugar de duplicar bloques de código.


2. Keep It Simple, Stupid (KISS)

Mantén las cosas simples y evita complejidades innecesarias. 

El diseño más simple que cumple con los requisitos es el mejor.

Ejemplo:

Prefiere soluciones directas en lugar de implementar patrones complejos si no son necesarios.


3. You Aren't Gonna Need It (YAGNI)

No implementes funcionalidades que no son necesarias en el momento. 

Solo escribe código para resolver los problemas actuales.

Ventaja:

Evita el desperdicio de tiempo y reduce la complejidad.


4. Separation of Concerns (SoC)

Descripción: 

Divide un sistema en partes distintas que manejen diferentes responsabilidades o aspectos.

Ejemplo:

Divide el frontend, backend y la capa de base de datos en un sistema web.


5. Test-Driven Development (TDD)

Escribe primero las pruebas que fallarán antes de implementar el código para pasar esas pruebas.

Ventajas:

Asegura que el código sea testeable y confiable.

Facilita la detección de errores.


6. Principio de Prototipos

Antes de implementar una solución completa, crea un prototipo simple para validar conceptos o funcionalidades.

Ventajas:

Permite descubrir problemas antes de comprometer recursos en el desarrollo completo.


7. Continuous Integration/Continuous Deployment (CI/CD)

Integra cambios en el código con frecuencia y despliega automáticamente en entornos de prueba o producción.

Ventajas:

Reduce errores al integrar cambios pequeños y frecuentes.

Agiliza el proceso de entrega.


### Principios Generales del Diseño de Software

Estos principios se aplican a cualquier sistema de software:


1. Encapsulación

Agrupa datos y comportamientos relacionados dentro de una sola unidad (como una clase).

Ventaja:

Protege los datos internos de cambios no deseados.


2. Modularidad

Divide el sistema en módulos pequeños e independientes.

Beneficios:

Facilita la prueba, mantenimiento y reutilización de código.


3. Cohesión

Un módulo o componente debe centrarse en una sola tarea o responsabilidad.

Ejemplo:

Un módulo de "facturación" debe gestionar únicamente facturas, no usuarios.


4. Acoplamiento

Minimiza la dependencia entre módulos.

Ejemplo:

Usa interfaces o inyección de dependencias para reducir el acoplamiento.


5. Polimorfismo

Usa una sola interfaz para representar múltiples tipos de datos o comportamientos.

Ejemplo:

Métodos con el mismo nombre en clases diferentes que se comportan de manera específica según
        

### Relación entre Diseño y Desarrollo

Diseño establece los principios y patrones que guían la organización del software.

Desarrollo implementa esos principios para crear un sistema funcional y mantenible
    


## GoF Design Patterns

Patrones de Diseño del "Gang of Four". 

Son un conjunto de patrones de diseño de software introducidos en el libro clásico "Design Patterns: Elements of Reusable Object-Oriented Software" escrito por Erich Gamma, Richard Helm, Ralph Johnson, y John Vlissides (el "Gang of Four").

Estos patrones se diseñaron para abordar problemas comunes en el desarrollo de software orientado a objetos, proporcionando soluciones reutilizables, probadas y bien documentadas. 

El libro presenta 23 patrones organizados en tres categorías: creacionales, estructurales y comportamentales.


1. Patrones Creacionales:

Se centran en cómo se crean los objetos, abstrayendo y desacoplando el proceso de instanciación para mejorar la flexibilidad y reutilización del código.

Factory Method (Método de Fábrica):

Proporciona una interfaz para crear objetos en una clase base, pero permite a las subclases decidir qué clase instanciar.

Ejemplo: Un creador de figuras geométricas que delega la creación de círculos o cuadrados a clases concretas.


Abstract Factory (Fábrica Abstracta):

Permite crear familias de objetos relacionados o dependientes sin especificar sus clases concretas.

Ejemplo: Crear botones y ventanas específicos para Windows o MacOS.


Builder (Constructor):

Separa la construcción de un objeto complejo de su representación, permitiendo crear diferentes representaciones con el mismo código de construcción.

Ejemplo: Construcción de diferentes tipos de casas (de madera, de concreto) utilizando un proceso común.


Prototype (Prototipo):

Permite clonar objetos existentes en lugar de crearlos desde cero, asegurando un rendimiento eficiente.

Ejemplo: Clonar configuraciones predefinidas de usuarios en un sistema.


Singleton:

Asegura que una clase tenga solo una instancia y proporciona un punto de acceso global a ella.

Ejemplo: Una conexión única a la base de datos


Patrones Estructurales:

Tratan con la composición de clases y objetos, asegurando que las estructuras sean eficientes y flexibles.


Adapter (Adaptador):

Convierte la interfaz de una clase en otra que los clientes esperan, facilitando la interoperabilidad entre clases incompatibles.

Ejemplo: Un adaptador que permite usar un enchufe europeo en un tomacorriente americano.


Bridge (Puente):

Desacopla una abstracción de su implementación para que ambas puedan evolucionar independientemente.

Ejemplo: Separar el concepto de "forma" (círculo, cuadrado) de su "color" (rojo, azul).


Composite (Composición):

Permite tratar objetos individuales y composiciones de objetos de manera uniforme.

Ejemplo: Un árbol de carpetas y archivos donde cada nodo puede ser una carpeta o un archivo.


Decorator (Decorador):

Añade responsabilidades a un objeto dinámicamente sin alterar su estructura.

Ejemplo: Añadir bordes o scrollbars a una ventana gráfica.


Facade (Fachada):

Proporciona una interfaz simplificada para un subsistema complejo.

Ejemplo: Un sistema de hogar inteligente que controla luces, calefacción y seguridad desde un único panel.


Flyweight (Peso Ligero):

Optimiza el uso de memoria compartiendo datos entre objetos similares.

Ejemplo: Representar caracteres en un editor de texto reutilizando las mismas instancias para letras iguales.


Proxy (Proxy o Representante):

Proporciona un sustituto o marcador de posición para controlar el acceso a otro objeto.

Ejemplo: Un proxy que controla el acceso a un servicio remoto para optimizar llamadas


Patrones Comportamentales

Se enfocan en las interacciones y responsabilidades entre los objetos.

Chain of Responsibility (Cadena de Responsabilidad):

Permite que múltiples objetos tengan la oportunidad de manejar una solicitud, pasando la solicitud a lo largo de una cadena.

Ejemplo: Un sistema de soporte técnico que escala los problemas a niveles superiores si no se resuelven.


Command (Comando):

Encapsula una solicitud como un objeto, permitiendo parametrizar clientes con solicitudes, encolar solicitudes y realizar operaciones de deshacer.

Ejemplo: Implementar acciones de "Copiar" o "Pegar" en un editor de texto.


Interpreter (Intérprete):

Define una gramática y un mecanismo para interpretar sentencias en dicho lenguaje.

Ejemplo: Evaluar expresiones matemáticas o reglas en un motor de búsqueda.


Iterator (Iterador):

Proporciona una forma de acceder secuencialmente a los elementos de una colección sin exponer su representación interna.

Ejemplo: Recorrer una lista, un conjunto o una estructura compleja como un árbol.


Mediator (Mediador):

Define un objeto que encapsula la interacción entre otros objetos, promoviendo un acoplamiento bajo.

Ejemplo: Un sistema de chat donde el servidor actúa como mediador entre los usuarios.


Memento (Recuerdo o Memento):

Permite capturar y restaurar el estado interno de un objeto sin violar su encapsulación.

Ejemplo: Implementar la funcionalidad de "deshacer" en una aplicación.


Observer (Observador):

Permite que un objeto (sujeto) notifique automáticamente a múltiples objetos (observadores) sobre cambios en su estado.

Ejemplo: Un sistema de notificaciones donde múltiples usuarios son alertados de actualizaciones.


State (Estado):

Permite que un objeto altere su comportamiento cuando su estado interno cambia.

Ejemplo: Una máquina expendedora con estados como "sin stock", "aceptando monedas", "entregando producto".


Strategy (Estrategia):

Define una familia de algoritmos, encapsula cada uno y los hace intercambiables.

Ejemplo: Diferentes métodos de ordenamiento como burbuja o quicksort.


Template Method (Método Plantilla):

Define el esqueleto de un algoritmo en una clase base, permitiendo que las subclases implementen pasos específicos.

Ejemplo: Un proceso de pago que define pasos generales como "validar tarjeta" o "procesar transacción".


Visitor (Visitante):

Permite agregar nuevas operaciones a una estructura de objetos sin modificar sus clases.

Ejemplo: Un sistema de reportes que visita diferentes tipos de nodos en una jerarquía de objetos


Ventajas de los GoF Design Patterns:

Reutilización:

Proporcionan soluciones probadas y estandarizadas.

Flexibilidad:

Facilitan el cambio y escalabilidad del diseño.


Legibilidad:

Usar patrones bien conocidos mejora la comprensión del código entre desarrolladores.


Desafíos:

Complejidad inicial:

Algunos patrones pueden ser difíciles de entender y sobreingenierizarse si no son necesarios.


Elección adecuada:

Es crucial seleccionar el patrón correcto para el problema específico
        


## Domain-Driven Design

Es una filosofía y conjunto de prácticas para el desarrollo de software que pone al dominio del negocio en el centro del proceso de diseño y desarrollo. 

Introducido por Eric Evans en su libro "Domain-Driven Design: Tackling Complexity in the Heart of Software", DDD busca resolver problemas complejos alineando el diseño del software con las necesidades del negocio.


Conceptos Clave en DDD:

1. Dominio

El dominio es el área de conocimiento o actividad central para la organización. 

Por ejemplo, en un banco, el dominio podría ser "gestión financiera" o "préstamos".

Objetivo de DDD: Modelar el software de manera que refleje este dominio.


2. Modelo del Dominio

Una representación conceptual del dominio, diseñada para capturar sus procesos, reglas y elementos clave.

Ejemplo: En un sistema de pedidos, el modelo incluiría conceptos como "pedido", "cliente" y "producto".


3. Ubiquitous Language (Lenguaje Ubicuo)

Un lenguaje compartido entre desarrolladores y expertos del dominio, libre de tecnicismos innecesarios y alineado con el negocio.

Ejemplo: En lugar de usar términos genéricos como "objeto", se habla de "factura" o "cliente".


4. Bounded Context (Contexto Delimitado)

Una sección claramente definida del sistema donde un modelo específico del dominio es válido.

Ejemplo: Un sistema bancario podría tener contextos delimitados para "préstamos", "cuentas de ahorro" y "transferencias internacionales".


Principios Fundamentales:

1. Enfoque en el Dominio

Todo diseño de software debe centrarse en resolver problemas específicos del negocio.

Colaboración activa entre expertos del dominio (stakeholders) y desarrolladores.


2. Iteración Continua

El modelo del dominio se refina constantemente mediante un ciclo de retroalimentación entre el equipo técnico y los expertos del dominio.


3. Independencia del Modelo

El modelo del dominio debe ser independiente de detalles técnicos, como bases de datos o infraestructura.


Elementos Técnicos en DDD:

1. Entidades

Objetos con una identidad única y persistente a través del tiempo.

Ejemplo: Un cliente en un sistema de pedidos. Cambia su información, pero su identidad permanece.


2. Value Objects (Objetos de Valor)

Objetos que se identifican por sus atributos en lugar de una identidad única.

Ejemplo: Una dirección postal o una fecha.


3. Aggregate (Agregado)

Un conjunto de entidades y objetos de valor que se gestionan como una unidad.

Ejemplo: Un "pedido" que incluye múltiples "líneas de pedido".


4. Repositories (Repositorios)

Intermediarios entre el modelo del dominio y la capa de persistencia, utilizados para recuperar y almacenar agregados.

Ejemplo: Un repositorio para buscar "pedidos" por su ID.


5. Factories (Fábricas)

Clases o métodos que encapsulan la lógica de creación de objetos complejos.

Ejemplo: Una fábrica para crear un "pedido" con múltiples configuraciones predefinidas.


Estrategias para DDD:

1. Strategic Design (Diseño Estratégico)

Se enfoca en entender la organización en su totalidad, dividiéndola en contextos delimitados y definiendo cómo interactúan.


Patrones Clave:

Context Maps: Diagramas para visualizar las relaciones entre contextos delimitados.

Core Domain: Identificar y priorizar el dominio principal que genera mayor valor para el negocio.


2. Tactical Design (Diseño Táctico)

Herramientas específicas para modelar el dominio dentro de un contexto delimitado.

Incluye patrones como entidades, objetos de valor, agregados y servicios.


Ventajas de DDD:

Alineación con el negocio:

Reduce malentendidos entre desarrolladores y stakeholders.


Modularidad:

Los contextos delimitados ayudan a dividir el sistema en componentes manejables.


Facilita el cambio:

Un modelo bien diseñado es más fácil de adaptar a nuevos requisitos.


Desafíos de DDD:

Curva de aprendizaje:

Requiere tiempo para que el equipo entienda el dominio y las técnicas de DDD.


Sobrecarga inicial:

Puede parecer costoso en proyectos pequeños o con requisitos no complejos.


Colaboración intensiva:

Demanda una participación activa y constante de los expertos del dominio.


DDD y Microservicios:

DDD es una combinación natural para la arquitectura de microservicios. Cada contexto delimitado puede corresponder a un microservicio, lo que facilita el diseño, la implementación y la escalabilidad.

Contextos delimitados → Microservicios:

Ejemplo: En una tienda en línea, un contexto para "carrito de compras" puede ser un microservicio independiente.


Ejemplo Práctico:

Supongamos que estamos desarrollando un sistema de gestión de pedidos:

Dominio:

Procesar pedidos de clientes para una tienda en línea.


Lenguaje Ubicuo:

Cliente, Pedido, Línea de Pedido, Producto, Estado del Pedido.


Contextos Delimitados:

Gestión de Pedidos: Crear y actualizar pedidos.

Inventario: Gestionar el stock de productos.

Facturación: Procesar pagos y generar facturas.


Modelo del Dominio:

Entidades:
Pedido (con ID único).

Objetos de Valor:
Línea de Pedido (producto y cantidad).

Agregados:
Pedido con sus líneas de pedido.


¿Cuándo Usar DDD?:

DDD es especialmente útil cuando:

El dominio es complejo y cambiante.

La colaboración entre expertos del negocio y desarrolladores es crítica.

Se busca un diseño modular y orientado al negocio



## Test Driven Development

Desarrollo Guiado por Pruebas, es una metodología de desarrollo de software en la que las pruebas se escriben antes del código funcional. 

Popularizado por Kent Beck como parte de las prácticas de Extreme Programming (XP), TDD sigue un ciclo iterativo llamado Red-Green-Refactor.


Principios Clave de TDD:

Escribir pruebas primero:

Antes de implementar una funcionalidad, se escribe una prueba que define cómo debería comportarse.


Fallos iniciales son esperados:

La prueba fallará inicialmente porque no existe ningún código que la haga pasar.


Iteración continua:

El desarrollo se realiza en pequeños pasos, asegurando que cada funcionalidad es probada y validada.


Confianza en el código:

Un conjunto robusto de pruebas asegura que el sistema funciona según lo esperado y facilita el cambio seguro del código.


Ciclo Red-Green-Refactor:

Red:
Escribe una prueba que falle porque la funcionalidad requerida aún no está implementada.
Ejemplo: Probar si una función devuelve un número primo cuando no existe la implementación.

Green:
Escribe el código mínimo necesario para que la prueba pase.
Enfoque mínimo: No te preocupes por eficiencia o limpieza en esta etapa.

Refactor:
Limpia el código para mejorar su estructura y calidad, asegurándote de que todas las pruebas siguen pasando.
Ejemplo: Simplificar un bucle o eliminar código duplicado.

Este ciclo se repite para cada pequeña funcionalidad.
Ventajas de TDD

Calidad del código:
Fomenta un diseño simple, limpio y libre de sobreingeniería.

Confianza en el desarrollo:
Si las pruebas pasan, se sabe que los cambios recientes no rompieron funcionalidades existentes.

Facilita el mantenimiento:
Las pruebas sirven como documentación viva, explicando cómo debería comportarse el código.

Reducción de errores:
Los errores se identifican rápidamente gracias a las pruebas automatizadas.

Diseño enfocado:
Al escribir pruebas primero, los desarrolladores piensan en cómo debe comportarse el software desde la perspectiva del usuario.


Desafíos de TDD:

Curva de aprendizaje:
Requiere experiencia para escribir buenas pruebas y adaptarse al proceso iterativo.

Velocidad inicial más lenta:
Aunque acelera el desarrollo a largo plazo, la escritura de pruebas puede hacer que los primeros pasos parezcan lentos.

Cobertura limitada si no se usa correctamente:
Las pruebas mal diseñadas pueden no cubrir todos los casos importantes.

Difícil en proyectos con alta complejidad inicial:
Escribir pruebas para sistemas con dependencias grandes o arquitectura no modular puede ser complicado.


Buenas Prácticas en TDD:

Escribir pruebas unitarias claras y aisladas:
Cada prueba debe centrarse en una sola funcionalidad.

Nombrar las pruebas descriptivamente:
Usa nombres que expliquen qué comportamiento estás probando.

Evitar dependencias externas en pruebas:
Utiliza mocks o stubs para aislar las pruebas de bases de datos, servicios externos, etc.

Mantener las pruebas rápidas:
Las pruebas lentas desmotivan a ejecutarlas frecuentemente.

Actualizar las pruebas cuando cambien los requisitos:
Asegúrate de que las pruebas sigan siendo relevantes y precisas.


Ejemplo de TDD:

Imaginemos que queremos implementar una función isPrime() para verificar si un número es primo. Aquí está cómo aplicar TDD:

Paso 1: Red (Escribir una prueba que falle)

```
def test_is_prime():
assert isPrime(2) == True  # 2 es primo
assert isPrime(4) == False  # 4 no es primo

```

Resultado: La prueba falla porque isPrime() no está implementado.


Paso 2: Green (Escribir el código mínimo para que pase la prueba)

```
def isPrime(n):
if n <= 1:
return False
for i in range(2, n):
if n % i == 0:
	return False
return True

```

Resultado: La prueba pasa porque ahora isPrime() está implementada.


Paso 3: Refactor (Mejorar el código)

```
def isPrime(n):
if n <= 1:
return False
for i in range(2, int(n**0.5) + 1):  # Optimizar el bucle
if n % i == 0:
	return False
return True

```

Resultado: Las pruebas siguen pasando, pero el código es más eficiente.


TDD vs Desarrollo Convencional:

TDD:
Las pruebas se escriben antes del código.
Promueve diseño enfocado y pruebas extensivas.

Convencional:
Las pruebas se escriben después (o no se escriben).
A menudo conduce a código menos modular y más propenso a errores.


Cuándo Usar TDD:

Proyectos críticos:
Donde los errores tienen alto costo (p. ej., sistemas financieros, médicos).

Desarrollo iterativo:
En proyectos con requisitos cambiantes o un enfoque ágil.

Componentes reutilizables:
Bibliotecas o APIs que deben ser robustas y probadas.



## CQRS

Command Query Responsibility Segregation), o Segregación de Responsabilidades de Comando y Consulta, es un patrón arquitectónico que separa las operaciones de lectura (consulta) de las operaciones de escritura (comando) en un sistema. Fue popularizado por Greg Young y es especialmente útil en sistemas con alta complejidad y requisitos de escalabilidad.


Conceptos Fundamentales:

1. Separación de Responsabilidades

En CQRS, el sistema se divide en dos modelos diferentes:

Modelo de Escritura (Commands):

Se utiliza para modificar el estado del sistema.

Maneja comandos, que son solicitudes explícitas para realizar una acción.

Ejemplo: Crear un pedido, actualizar un cliente, etc.


Modelo de Lectura (Queries):

Se utiliza para consultar datos, sin modificar el estado.

Está optimizado para responder rápidamente a las necesidades de los usuarios.

Ejemplo: Obtener la lista de productos, buscar un historial de transacciones.


2. Diferencia entre Comandos y Consultas

Comandos:

Son solicitudes para realizar acciones.

Ejemplo: "Crear un nuevo usuario".

No devuelven datos; sólo indican si la operación fue exitosa o fallida.


Consultas:

Son solicitudes para recuperar datos.

Ejemplo: "Obtener los detalles de un usuario".

No tienen efectos secundarios.


3. Bases de Datos Separadas

En muchas implementaciones de CQRS:

El modelo de escritura utiliza una base de datos normalizada para garantizar consistencia.

El modelo de lectura utiliza una base de datos desnormalizada o índices optimizados para consultas rápidas.

Ejemplo: Una aplicación de comercio electrónico puede almacenar los detalles de un pedido en una base de datos relacional, pero servir información resumida desde una base de datos NoSQL para las páginas de usuario.


Ventajas de CQRS:

Escalabilidad:

Permite escalar lecturas y escrituras de forma independiente.

Ejemplo: En una aplicación con más lecturas que escrituras, el modelo de consulta puede replicarse para manejar cargas mayores.


Flexibilidad:

El modelo de lectura y el de escritura pueden tener estructuras de datos diferentes, optimizadas para sus respectivos propósitos.


Mejora de rendimiento:

Consultas más rápidas gracias a bases de datos desnormalizadas o indexadas.


Mejor mantenimiento:

Los desarrolladores pueden enfocarse en las necesidades específicas de cada modelo (lectura o escritura) sin afectar al otro.


Compatibilidad con Event Sourcing:

CQRS se integra fácilmente con Event Sourcing, un patrón en el que cada cambio de estado se registra como un evento.


Desafíos de CQRS:

Complejidad adicional:

Requiere separar lógica de negocio y mantener modelos diferentes.

Puede ser innecesario en sistemas simples.


Consistencia eventual:

Si los modelos de lectura y escritura usan bases de datos separadas, es posible que las consultas reflejen datos desactualizados.

Costo inicial:

La configuración de infraestructuras separadas para lectura y escritura puede ser costosa en términos de tiempo y recursos.


Dificultad para desarrolladores nuevos:

Es necesario entender cómo gestionar la sincronización entre los modelos de lectura y escritura.


Flujo de Trabajo en CQRS:

Escritura (Command Flow):

Un usuario envía un comando (por ejemplo, "Registrar Usuario").

El comando pasa a través de una capa de comando, que aplica las reglas de negocio y actualiza la base de datos.


Lectura (Query Flow):

Un usuario solicita datos (por ejemplo, "Obtener Detalles de Usuario").

La consulta pasa a través de la capa de consulta, que accede a una base de datos optimizada para lecturas.


Ejemplo Práctico: Sistema de Pedidos

Escenario

Un cliente puede realizar un pedido y consultar el estado de sus pedidos.

1. Modelo de Escritura (Command)

```
class CreateOrderCommand:
def __init__(self, customer_id, items):
self.customer_id = customer_id
self.items = items

# Servicio para procesar comandos
class OrderCommandHandler:
def handle(self, command):
# Lógica de negocio para crear el pedido
new_order = Order(customer_id=command.customer_id, items=command.items)
order_repository.save(new_order)

```


2. Modelo de Lectura (Query)

```
class GetCustomerOrdersQuery:
def __init__(self, customer_id):
self.customer_id = customer_id

# Servicio para procesar consultas
class OrderQueryHandler:
def handle(self, query):
# Obtener datos de la base de datos optimizada para lecturas
return orders_read_database.get_orders_by_customer_id(query.customer_id)

```


Base de Datos:

Escritura: Tabla relacional con estructura normalizada (e.g., Orders, OrderItems).

Lectura: Una base NoSQL o tabla desnormalizada con registros por cliente.


CQRS y Event Sourcing:

CQRS frecuentemente se combina con Event Sourcing, donde:

Cada comando genera un evento que se registra como una serie de cambios inmutables.

La base de datos de lectura se construye procesando estos eventos.

Ejemplo:

Comando "Registrar Usuario" genera un evento UserRegistered.

Este evento actualiza el modelo de escritura y el de lectura.


¿Cuándo Usar CQRS?

Sistemas con alta carga de lectura/escritura:

Ejemplo: Aplicaciones de comercio electrónico o redes sociales.


Dominio complejo:

Cuando las reglas de negocio para escritura son complejas y diferentes de los requisitos de consulta.


Escalabilidad requerida:

Escalar bases de datos de lectura por separado de las bases de datos de escritura.


Consistencia eventual aceptable:

Donde pequeños retrasos entre escritura y lectura no afectan negativamente al sistema.


## Event Sourcing

Patrón arquitectónico en el que los cambios en el estado de una aplicación se almacenan como una secuencia inmutable de eventos, en lugar de guardar únicamente el estado actual. 

Cada evento representa una acción o cambio ocurrido en el sistema, y se utiliza para reconstruir el estado actual cuando sea necesario.


Conceptos Fundamentales de Event Sourcing:

Eventos como fuente de verdad:

Los eventos son registros inmutables que describen algo que ocurrió en el sistema.

Ejemplo: "Usuario creado", "Producto agregado al carrito", "Pago realizado".


Estado derivado:

El estado actual de un sistema no se almacena directamente, sino que se reconstruye reproduciendo la secuencia de eventos desde el principio.


Inmutabilidad de eventos:

Los eventos no se actualizan ni eliminan, garantizando un historial confiable.


Persistencia de eventos:

Los eventos se almacenan en un Event Store, que actúa como una base de datos especializada para este patrón.


Cómo Funciona Event Sourcing:

1. Registro de un Evento

Cada vez que ocurre una acción, se genera un evento y se almacena en el Event Store.

Ejemplo: Un usuario realiza un pedido.

Evento: ```OrderPlaced {orderId: 123, userId: 456, items: [...]}```


2. Reconstrucción del Estado

Para conocer el estado actual de un agregado (por ejemplo, un pedido), se cargan todos los eventos relacionados con ese agregado y se reproducen en orden cronológico.

Ejemplo: Para reconstruir un pedido, reproduciríamos eventos como:

OrderCreated
ItemAddedToOrder
OrderShipped


3. Proyección de Eventos

Los eventos también pueden procesarse para generar vistas de solo lectura optimizadas, conocidas como proyecciones.

Ejemplo: Crear una tabla desnormalizada que muestre el historial de pedidos de un usuario.


Ventajas de Event Sourcing:

Historial completo:
Ofrece un registro detallado de todo lo ocurrido en el sistema, útil para auditorías, depuración y análisis.

Reversión de cambios:
Dado que los eventos son inmutables, puedes "rebobinar" el estado a cualquier punto en el tiempo.

Escalabilidad:
Los eventos pueden procesarse en paralelo y replicarse fácilmente para optimizar el rendimiento.

Integración con CQRS:
Los eventos pueden alimentar la capa de lectura (proyecciones) en un sistema basado en CQRS.

Posibilidades de análisis:
Los datos históricos permiten análisis avanzados y generación de estadísticas.

Flexibilidad:
Permite ajustar la lógica de negocio sin alterar los eventos ya registrados.


Desafíos de Event Sourcing:

Complejidad inicial:
Implementar y mantener un Event Store requiere habilidades especializadas y un esfuerzo adicional.

Consistencia eventual:
La reconstrucción del estado y las proyecciones pueden generar un retraso entre el momento de un cambio y su disponibilidad para consulta.

Gestión de eventos obsoletos:
Si la estructura de un evento cambia debido a nuevos requisitos, debes manejar versiones antiguas.

Sobrecarga de almacenamiento:
Aunque los eventos suelen ser ligeros, mantener un historial completo puede consumir más espacio en comparación con una base de datos tradicional.

Curva de aprendizaje:
Es necesario entender conceptos como agregados, proyecciones y manejo de eventos


# UX/UI / Design System

## UX 

El diseño de experiencia de usuario es un enfoque en el desarrollo de aplicaciones que se centra en cómo las personas interactúan con un producto digital. 

El objetivo principal del UX Design es garantizar que una aplicación sea intuitiva, fácil de usar, y que proporcione una experiencia positiva al usuario.


Un buen diseño de UX tiene en cuenta:

La usabilidad: Qué tan fácil es usar la aplicación.

El diseño visual: Qué tan atractivo y claro es el diseño.

La funcionalidad: Si la aplicación cumple con las necesidades del usuario.

La accesibilidad: Si todos los usuarios, incluidas personas con discapacidades, pueden interactuar con la aplicación.


Elementos Clave del UX Design:

1. Investigación del Usuario

Conocer a los usuarios finales, sus necesidades, deseos y comportamientos.

Métodos:

Entrevistas: Hablar directamente con usuarios.

Encuestas: Recopilar información de una muestra amplia.

Análisis de datos: Usar métricas como clics o tiempo en página.


2. Arquitectura de la Información (IA)

Organizar y estructurar el contenido de la aplicación para que sea fácil de encontrar y usar.

Ejemplo:

Crear menús claros.

Diseñar jerarquías lógicas de contenido.


3. Wireframes y Prototipos

Wireframes: Bosquejos básicos del diseño para visualizar la estructura.

Prototipos: Versiones interactivas que permiten simular el comportamiento de la aplicación.


4. Pruebas de Usabilidad

Probar la aplicación con usuarios reales para identificar problemas y áreas de mejora.

Métodos:

Pruebas A/B: Comparar dos versiones de un diseño.

Seguimiento de tareas: Observar cómo los usuarios completan acciones.


5. Iteración

Basándose en los comentarios y pruebas, se realizan ajustes para mejorar continuamente la experiencia.


Principios del Diseño UX:

Conoce a tus usuarios:

Diseña para satisfacer las necesidades específicas de tu público objetivo.

Simplicidad:
Mantén interfaces limpias y minimalistas, sin elementos innecesarios.

Consistencia:
Usa estilos, colores y patrones de diseño coherentes en toda la aplicación.

Feedback inmediato:
Proporciona respuestas claras a las acciones del usuario (por ejemplo, mensajes de error o confirmaciones).

Accesibilidad:
Asegúrate de que la aplicación sea usable por personas con discapacidades (por ejemplo, soporte para lectores de pantalla).

Diseño centrado en tareas:
Prioriza las funciones más importantes para los usuarios.


Herramientas Comunes en UX Design:

Diseño y Prototipos:

Figma: Popular para diseñar interfaces y crear prototipos interactivos.

Adobe XD: Herramienta para diseñar experiencias digitales.

Sketch: Ideal para diseñar interfaces de usuario.


Pruebas y Análisis:

Hotjar: Para mapas de calor y análisis del comportamiento de los usuarios.

UsabilityHub: Para pruebas de usabilidad rápidas.

Google Analytics: Para entender métricas de uso.


Gestión de Proyectos:

Trello, Jira o Asana para gestionar tareas relacionadas con el diseño.


Proceso de UX Design en el Desarrollo de Aplicaciones:

Descubrimiento:

Entender el problema a resolver y las necesidades del usuario.

Herramientas: entrevistas, encuestas, análisis de mercado.


Diseño:

Crear wireframes, prototipos y diseño visual.

Usar herramientas como Figma o Adobe XD.


Desarrollo:

Trabajar junto con los desarrolladores para implementar el diseño.

Comunicación constante para garantizar que el producto refleje las ideas de diseño.


Evaluación:

Realizar pruebas de usabilidad con usuarios reales.

Recopilar comentarios y hacer ajustes iterativos.


Lanzamiento y Monitoreo:

Publicar la aplicación y recopilar métricas de uso para identificar mejoras futuras.


Ejemplo Práctico:

Caso: Aplicación de comercio electrónico

Problema: Los usuarios abandonan el carrito de compras porque el proceso de pago es confuso.

Solución UX:

Investigación del usuario:
Encuestas revelan que los usuarios no entienden en qué paso del proceso de pago están.
Arquitectura de la información:
Simplificar el flujo de pago a tres pasos claros: "Detalles del pedido", "Método de pago", "Confirmación".
Prototipo:
Crear un diseño interactivo del nuevo flujo y probarlo con usuarios.
Pruebas:
Realizar pruebas A/B entre el diseño antiguo y el nuevo.
Lanzamiento:
Implementar el diseño ganador y monitorear el impacto en la tasa de conversión


Diferencias entre UX y UI:

UX:

Enfoque: Experiencia y funcionalidad

Objetivo: Mejorar la satisfacción del usuario

Métodos: Investigación, pruebas de usabilidad

Herramientas: Figma, Hotjar, Google Analytics


UI: 

Enfoque: Diseño visual y estética.

Objetivo: Hacerlo visualmente atractivo

Métodos: Colores, tipografía, iconografía

Herramientas: Adobe XD, Sketch, Photoshop


## UI

Diseño de la interfaz de usuario es un área enfocada en cómo un producto digital se ve y se siente. 

Es la parte del diseño que se encarga de crear interfaces atractivas, funcionales y consistentes, permitiendo a los usuarios interactuar de manera efectiva con una aplicación o sistema.


El diseño de UI se centra en:

Diseño visual: Uso de colores, tipografía, imágenes y gráficos.

Diseño interactivo: Cómo los usuarios navegan e interactúan con elementos de la interfaz.

Diseño de consistencia: Asegurar que los elementos visuales sean coherentes en toda la aplicación.


Un buen diseño de UI no solo es estético, sino que también mejora la experiencia del usuario (UX) al hacer que las interacciones sean más intuitivas.


Componentes Clave del Diseño de UI:

Colores:
Selección de paletas de colores que transmitan emociones y refuercen la identidad de la marca.
Ejemplo: Colores brillantes para aplicaciones de entretenimiento, tonos neutros para plataformas profesionales.

Tipografía:
Elegir fuentes legibles y estilizadas que se alineen con el propósito de la aplicación.
Ejemplo: Sans-serif para interfaces modernas; serif para estilos más tradicionales.

Iconografía:
Uso de íconos claros y consistentes que complementen el texto y ayuden en la navegación.

Espaciado y diseño:
Diseño basado en rejillas para organizar contenido de manera equilibrada.
Uso del espacio en blanco para reducir la sobrecarga visual.

Interactividad:
Elementos interactivos como botones, enlaces, menús desplegables, y animaciones.
Asegurar que los usuarios comprendan cuándo y cómo interactuar con la interfaz.

Componentes reutilizables:
Crear sistemas de diseño con elementos reutilizables como botones, campos de entrada, y tarjetas


Principios del Diseño de UI:

Claridad:
Los usuarios deben saber exactamente qué hacer en la interfaz. Usa etiquetas claras e íconos intuitivos.

Consistencia:
Asegura que los elementos visuales y de interacción sean coherentes en toda la aplicación (colores, estilos de botones, etc.).

Atractivo visual:
Diseña interfaces visualmente agradables que generen confianza y emociones positivas.

Jerarquía visual:
Organiza los elementos en la interfaz para guiar la atención del usuario hacia las partes más importantes.

Retroalimentación visual:
Proporciona respuestas inmediatas a las acciones del usuario (por ejemplo, botones que cambian de color al hacer clic).

Accesibilidad:
Diseña para todos los usuarios, incluidas personas con discapacidades. Usa texto descriptivo, colores contrastantes y compatibilidad con lectores de pantalla.

Herramientas Comunes en UI Design

Diseño Visual:
Figma: Herramienta basada en la nube para crear interfaces colaborativas.
Sketch: Popular para diseñar interfaces de usuario en macOS.
Adobe XD: Ideal para prototipos y diseños interactivos.

Creación de Sistemas de Diseño:
Storybook: Herramienta para documentar y probar componentes de UI.
Zeplin: Para colaborar entre diseñadores y desarrolladores.

Prototipado:
InVision: Para crear prototipos interactivos de alta fidelidad.
Framer: Diseños interactivos con animaciones avanzadas.


Proceso de Diseño de UI:

1. Investigación

Entender las necesidades del usuario y los requisitos del negocio.

Crear personas y escenarios de uso para guiar el diseño.


2. Diseño de baja fidelidad

Crear wireframes básicos para definir la estructura de la interfaz.


3. Diseño visual

Elegir colores, tipografía, íconos y estilos visuales que representen la marca.


4. Prototipado

Diseñar versiones interactivas de la interfaz para probar la experiencia.


5. Pruebas de usuario

Evaluar la interfaz con usuarios reales para identificar problemas de diseño.


6. Implementación

Colaborar con los desarrolladores para garantizar que la interfaz diseñada sea implementada correctamente.


Ejemplo Práctico:

Caso: Diseño de una página de inicio para una aplicación bancaria

Objetivos:

Comunicar confianza y profesionalismo.

Hacer que los usuarios encuentren fácilmente información sobre servicios bancarios.


Soluciones de UI:

Color:
Uso de tonos azules para transmitir confianza y estabilidad.

Tipografía:
Fuentes sans-serif modernas para una apariencia limpia y profesional.

Botones:
Botones prominentes con texto claro como "Abrir cuenta" o "Iniciar sesión".

Jerarquía visual:
Destacar primero las características clave (tasas de interés, promociones).

Resultado:

Una interfaz clara y profesional que inspira confianza y facilita la navegación.


Tendencias Actuales en UI Design:

Dark Mode:
Interfaz oscura que reduce la fatiga visual y ahorra batería en dispositivos OLED.

Microinteracciones:
Animaciones sutiles para mejorar la retroalimentación (por ejemplo, un botón que vibra ligeramente al hacer clic).

Neumorfismo:
Combina elementos tridimensionales con minimalismo para una estética moderna.

Diseño inclusivo:
Interfaz pensada para ser usada por personas de diferentes habilidades y contextos.

Simplicidad minimalista:
Reducir el desorden visual para enfocarse solo en lo esencial


## Design System

El sistema de diseño es un conjunto de estándares, directrices, componentes reutilizables y herramientas diseñados para ayudar a los equipos a crear aplicaciones o productos digitales de manera consistente y eficiente.

En esencia, un Design System actúa como un lenguaje compartido entre diseñadores y desarrolladores, asegurando que todos los elementos visuales y funcionales de una aplicación sean coherentes, independientemente de quién los cree o implemente.


Un Design System es mucho más que una simple guía de estilo. 

Suele incluir:

1. Fundamentos del Diseño

Colores: Paletas de colores primarios, secundarios y neutros.

Tipografía: Fuentes, tamaños, pesos y espaciado.

Espaciado: Márgenes, rellenos y rejillas.

Iconografía: Estilo y biblioteca de íconos.

Tonos y estilos visuales: Definición del lenguaje visual general (minimalista, atrevido, profesional, etc.).


2. Componentes de UI

Botones: Estilos para estados activos, inactivos, en foco y deshabilitados.

Formularios: Campos de entrada, validaciones y mensajes de error.

Tarjetas: Contenedores para agrupar contenido relacionado.

Modales y alertas: Para diálogos y notificaciones.


3. Pautas de Accesibilidad

Contraste de color para garantizar la legibilidad.

Navegación compatible con teclado.

Soporte para lectores de pantalla.


4. Tokens de Diseño

Valores de diseño reutilizables como colores, fuentes o tamaños definidos en un formato legible por máquinas (por ejemplo, JSON o CSS Variables).


5. Documentación

Descripciones detalladas de cómo y cuándo usar cada componente.

Ejemplos de código para desarrolladores.


Ventajas de un Design System:

Consistencia Visual:
Garantiza que todos los elementos visuales sean uniformes en toda la aplicación.

Ahorro de Tiempo:
Diseñadores y desarrolladores no necesitan crear componentes desde cero, ya que pueden reutilizar elementos existentes.

Colaboración Eficiente:
Actúa como una fuente única de verdad para diseñadores y desarrolladores, eliminando malentendidos.

Escalabilidad:
Facilita la ampliación de productos y la creación de nuevas características sin perder coherencia.

Accesibilidad Incorporada:
Las pautas de accesibilidad ya están integradas, asegurando que todos los componentes sean inclusivos.

Evolución Controlada:
Los cambios en el diseño pueden implementarse en un solo lugar y propagarse automáticamente a toda la aplicación.


Ejemplos Famosos de Design Systems:

Material Design (Google):

Proporciona directrices detalladas para crear interfaces consistentes y modernas.

Sitio oficial: Material Design


Carbon Design System (IBM):

Sistema enfocado en aplicaciones empresariales.

Sitio oficial: Carbon Design System


Lightning Design System (Salesforce):

Sistema específico para la plataforma Salesforce.

Sitio oficial: Lightning Design System


Atlassian Design System:

Usado para herramientas como Jira y Confluence.

Sitio oficial: Atlassian Design System


Proceso para Crear un Design System

1. Auditoría

Revisa los elementos visuales y funcionales existentes para identificar inconsistencias.

Ejemplo: Detectar que los botones tienen diferentes colores y tamaños en distintas partes de la aplicación.


2. Definición de Fundamentos

Establece las bases: colores, tipografía, espaciado, y estilos generales.


3. Creación de Componentes Reutilizables

Diseña componentes básicos como botones, formularios, y tablas.

Asegúrate de que sean accesibles y funcionen en todos los dispositivos.


4. Documentación

Proporciona ejemplos y directrices claras para usar los componentes.


5. Integración

Integra el Design System en el flujo de trabajo del equipo, asegurándote de que todos lo adopten.


6. Mantenimiento

Actualiza y mejora el sistema con el tiempo para adaptarlo a nuevas necesidades.


Herramientas para Crear y Gestionar Design Systems:

Diseño y Prototipado:

Figma: Ideal para diseñar y documentar componentes.

Sketch: Popular entre diseñadores de interfaces.

Adobe XD: Herramienta de diseño interactivo.


Desarrollo de Componentes:

Storybook: Plataforma para construir, probar y documentar componentes de UI.

Bit.dev: Permite compartir y versionar componentes reutilizables.

Styleguidist: Generador de guías de estilo para React.


Documentación:

Zeroheight: Plataforma para documentar y compartir Design Systems.

Notion o Confluence: Para crear guías y manuales accesibles.


Ejemplo Práctico

Caso: Creación de un Design System para una aplicación de e-commerce.

Colores:

Definir tonos principales: azul para confianza, amarillo para promociones.

Crear variantes para estados (hover, disabled).


Botones:

Diseñar tres tipos: Primario, Secundario y Tértiario.

Asegurar que cada uno tenga estados de activo, inactivo y enfoque.


Iconografía:

Usar un conjunto de íconos vectoriales uniformes, como los de Material Icons.


Documentación:

Crear ejemplos de cómo usar botones en contextos como formularios y modales.


Desarrollo:

Implementar los componentes en React y documentarlos en Storybook




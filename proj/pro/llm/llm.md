# LLM


# Roadmap

# 1. Fundamentos de IA y Machine Learning: Qué es un modelo y cómo aprende

# 2. Modelos modernos y LLM: Transformers, tokens, embeddings e inferencia

# 3. Aplicaciones con LLM: Prompts, API y salidas estructuradas

# 4. Embeddings, búsqueda semántica y RAG: Conectar los modelos con conocimiento externo

# 5. Function Calling y herramientas: Permitir que un modelo solicite acciones

# 6. Agentes de IA: Decisiones, ejecución, estado y control de tareas

# 7. MCP — Model Context Protocol: Conectar agentes y aplicaciones con herramientas estandarizadas

# 8. Evaluación, seguridad y producción: Convertir prototipos en sistemas confiables


## 0/intro

HTTP, REST, solicitudes y respuestas
JSON y validación de datos.
Funciones, módulos, excepciones y programación asíncrona.
Variables de entorno, secretos y autenticación.
Pruebas, logs y control de errores.
Uso básico de Git y Docker.

práctico: crear un pequeño programa que invoque una API externa
valide la respuesta y maneje errores de red, autenticación y límites de solicitudes.


## 1. Mapa general de la IA


Componentes

### Inteligencia Artificial (IA)
Campo general que engloba sistemas que realizan tareas asociadas con capacidades inteligentes.

### ML
Métodos que aprenden patrones a partir de datos.

### DL
Machine Learning basado en redes neuronales profundas.

### Modelo
Sistema entrenado que procesa entradas y produce salidas.

### Modelo fundacional
Modelo entrenado a gran escala que puede adaptarse a numerosas tareas.

### LLM
Modelo de lenguaje grande, especializado en procesar y generar lenguaje.

### AI App
Software que combina modelos, datos, reglas, herramientas e interfaces.


Principales familias de modelos

#### LLM: generación y comprensión de lenguaje, código y otras secuencias.
#### Modelos multimodales: procesan combinaciones de texto, imagen, audio o video.
#### Modelos de embeddings: convierten información en vectores útiles para comparar similitudes.
#### Modelos de difusión: generan imágenes y otros tipos de contenido mediante procesos de denoising.
#### Modelos de clasificación y predicción: asignan categorías o estiman resultados.
#### Modelos de reconocimiento y generación de audio: transcriben, comprenden o producen voz.

práctico: recibir distintos problemas
clasificar un correo, resumir un documento, buscar información semánticamente, generar una imagen
y justificar qué tipo de modelo utilizarías.



## 2. Fundamentos de Machine Learning y redes neuronales

Fundamentos de ML

1. Datos de entrenamiento, validación y prueba.
2. Características y etiquetas.
3. Regresión y clasificación.
4. Función de pérdida y optimización.
5. Generalización y sobreajuste (overfitting).
6. Redes neuronales, capas y funciones de activación.
7. Entrenamiento frente a inferencia.
8. Embeddings y espacios vectoriales

También conviene conocer conceptos como descenso del gradiente, parámetros, hiperparámetros y métricas de evaluación.

Importancia:
te permitirá entender qué significa entrenar un modelo
por qué puede fallar y por qué utilizar un modelo ya entrenado no es lo mismo que entrenarlo desde cero

Google — Machine Learning Crash Course
Incluye datos, redes neuronales, embeddings, introducción a los LLM y sistemas de ML en producción



## 3. LLM en profundidad

Los LLM: Uno de los componentes que después utilizarás para construir asistentes, sistemas RAG y agentes

Funcionamiento

#### Tokens: cómo se divide el texto para procesarlo.
#### Tokenización: cómo se convierte el texto en identificadores.
#### Embeddings: cómo se representan los tokens mediante vectores.
#### Transformers: la arquitectura utilizada por muchos LLM modernos.
#### Attention: cómo el modelo relaciona diferentes partes del contexto.
#### Preentrenamiento: cómo aprende patrones a partir de grandes cantidades de datos.
#### Ajuste de instrucciones (instruction tuning): cómo se adapta para seguir instrucciones.
#### Inferencia: cómo genera una respuesta cuando recibe una entrada.

Luego estudia cómo influyen el tamaño del contexto, los parámetros de generación, el muestreo y los límites del modelo.

Un LLM no es una base de datos convencional ni garantiza que cada respuesta sea verdadera
Puede producir una respuesta convincente pero incorrecta

### Distingue estas tres operaciones:

#### 1. Entrenar: modificar los parámetros del modelo a partir de datos.
#### 2. Inferir: utilizar el modelo entrenado para generar una salida.
#### 3. Aumentar el contexto: proporcionar información adicional al modelo en una consulta, sin que ello implique necesariamente reentrenarlo.

Hugging Face — Curso de NLP y LLM
Abarca Transformers, tokenizadores, datasets y herramientas del ecosistema de modelos abiertos

práctico: utilizar dos modelos para la misma tarea
comparar sus respuestas, latencia, consumo, calidad y errores



## 4. Desarrollo de aplicaciones con LLM

Consumo de modelos mediante API

1. Qué es una API de inferencia.
2. Cómo enviar mensajes e instrucciones.
3. Cómo gestionar el contexto de una conversación.
4. Cómo controlar errores, límites y reintentos.
5. Cómo administrar claves y costes.
6. Cómo seleccionar un modelo según una tarea.


### Prompting y diseño de contexto
#### El prompting no consiste solamente en escribir una buena pregunta. También implica definir instrucciones, restricciones, formato esperado, contexto útil y criterios de respuesta.

Estudia después:
- Mensajes de sistema, usuario y asistente.
- Ejemplos dentro del contexto (few-shot prompting).
- Salidas estructuradas con JSON Schema.
- Salidas tipadas y validación.
- Gestión del historial de conversación.
- Ventana de contexto y límites de tokens.
- Diferencias entre instrucciones y datos proporcionados por el usuario.

práctico: desarrollar un servicio que reciba una consulta y devuelva un objeto JSON validado
por ejemplo, con la intención, la prioridad y una explicación breve.

#### Regla fundamental: la salida de un LLM debe tratarse como entrada externa, no como datos confiables por defecto
##### Valida los resultados antes de utilizarlos en el resto de tu aplicación




## 5. Embeddings, búsqueda semántica y RAG

RAG significa Retrieval-Augmented Generation, o generación aumentada mediante recuperación de información.
Resuelve un problema frecuente: un modelo no conoce necesariamente tus datos privados, documentos internos ni actualizaciones recientes

Conceptos:

#### Embeddings: representar textos como vectores para comparar su similitud.
#### Búsqueda semántica: recuperar contenido por significado, no solo por coincidencia literal de palabras.
#### Chunking: dividir documentos en fragmentos recuperables.
#### Bases de datos vectoriales: almacenar y recuperar representaciones vectoriales.
#### Recuperación (retrieval): seleccionar los fragmentos relevantes para una consulta.
#### Reranking: volver a ordenar los resultados para mejorar su relevancia.
#### Grounding: fundamentar una respuesta en información disponible.
#### Citas y trazabilidad: identificar qué fragmentos respaldan una respuesta.

Arq RAG:

```
Documentos y datos
		|
Fragmentación y embeddings
		|
Índice de búsqueda
		|
---
Consulta del usuario
---
		|
Recuperación de fragmentos relevantes
		|
LLM + contexto recuperado
		|
Respuesta fundamentada		
```

práctico: crear un asistente que responda preguntas sobre un conjunto de documentos
indique las fuentes y reconozca cuándo no encuentra suficiente información

Recurso: OpenAI — Retrieval
Explica la búsqueda semántica y su uso junto con modelos generativos

Conviene aprender RAG antes de construir agentes complejos: enseña a conectar un modelo con información externa sin confundir la recuperación de datos con la toma de decisiones.



## 6. Function Calling y uso de herramientas

Este es uno de los puentes más importantes entre un LLM y un agente.
El function calling, también llamado tool calling, permite al modelo solicitar que la aplicación ejecute una función con determinados argumentos.

Podrías proporcionar al modelo estas herramientas:
- get_user(userId)
- search_products(query)
- get_order_status(orderId)
- create_support_ticket(data)

El modelo puede decidir que necesita una herramienta y producir una solicitud estructurada
Sin embargo, en una integración habitual, tu aplicación es la que valida los argumentos y ejecuta la función

```
1. El usuario solicita una tarea
		|
2. El LLM solicita una herramienta y sus argumentos
		|
---
3. La aplicación valida y ejecuta la función
---
		|
4. El resultado vuelve al LLM
		|
5. El LLM formula la respuesta o solicita otra herramienta

```

Aprende también a distinguir operaciones de solo lectura de operaciones con efectos reales
Consultar un pedido es distinto de emitir un reembolso o eliminar un recurso.

Recurso: OpenAI — Function Calling

integrar un LLM con una API que tú mismo desarrolles y permitirle consultar datos mediante funciones definidas por ti.

No necesitas un framework de agentes para aprender esto: entender el ciclo manualmente es mucho más valioso al principio.



## 7. Agentes de Inteligencia Artificial

Un agente incorpora un modelo a un sistema que puede decidir cómo avanzar en una tarea, utilizar herramientas y continuar según los resultados obtenidos.
Un agente no es simplemente un chatbot con una instrucción larga.
Lo importante es el ciclo de control que permite ejecutar varios pasos de forma coordinada.

#### Agent loop: Repetir el ciclo de decisión, acción y observación hasta terminar o detenerse.
#### Planificación:	Descomponer una tarea en pasos.
#### Estado: Conservar los datos necesarios para continuar una tarea.
#### Memoria: Diferenciar el historial inmediato de la información persistente.
#### Orquestación: Controlar qué pasos se ejecutan, en qué orden y bajo qué condiciones.
#### Handoffs: Transferir tareas entre agentes o componentes especializados.
#### Human-in-the-loop:	Solicitar aprobación humana en decisiones sensibles.
#### Guardrails: Limitar entradas, acciones y resultados inadmisibles.
#### Tracing: Inspeccionar los pasos, herramientas y resultados de una ejecución.


### Workflows vs. agentes

#### - Workflow: el desarrollador define de antemano el flujo de pasos.
#### - Agente: el modelo puede elegir dinámicamente entre las acciones disponibles según el contexto

No son categorías totalmente excluyentes.
Una solución profesional puede combinar un workflow determinista con uno o varios agentes en tareas concretas.

Comienza con un único agente y pocas herramientas
Estudia los sistemas multiagente cuando entiendas los límites de esa arquitectura
incorporar muchos agentes de entrada añade complejidad y no garantiza mejores resultados

práctico: crear un agente que investigue una pregunta, utilice una o dos herramientas, compruebe los resultados y termine cuando alcance un criterio explícito

Hugging Face — Agents Course
cubre los fundamentos de los agentes, herramientas, frameworks, casos prácticos y evaluación; la página también anuncia un curso de MCP




## 8. MCP

Protocolo abierto que estandariza cómo las aplicaciones de IA se conectan con herramientas y fuentes de información externas
No es un modelo, no es un agente y tampoco es un framework para entrenar LLM

Imagina que tienes varias aplicaciones de IA y diferentes sistemas:
- Una API de usuarios.
- Una base de datos.
- Un repositorio de Git.
- Un sistema de archivos.
- Una herramienta de búsqueda.
- Un servicio de gestión de tareas

Sin un protocolo compartido, cada aplicación puede necesitar una integración específica con cada sistema.

MCP propone una interfaz común para que las aplicaciones compatibles descubran y utilicen capacidades expuestas por servidores MCP.


Arquitectura de MCP

```
MCP Host
La aplicación de IA que utiliza el usuario
Puede incorporar un LLM, una interfaz y lógica de orquestación

||

MCP Client
Gestiona la conexión y el intercambio de mensajes

||

MCP Server
Expone capacidades mediante el protocolo
Tools Resources Prompts

||

Sistemas externos
APIs, archivos, bases de datos y servicios
```

Especificación describe una arquitectura host-client-server
Sus capacidades permiten exponer herramientas, recursos y plantillas de instrucciones

#### Tools: Acciones que pueden invocarse, como buscar un pedido o crear una tarea.
#### Resources: Información que la aplicación puede consultar como contexto, como documentos o esquemas.
#### Prompts: Plantillas reutilizables de instrucciones o interacciones.



## 8. MCP frente a API y Function Calling

Esta distinción es fundamental para diseñar correctamente una arquitectura.

#### REST: ¿Cómo se comunica un sistema con otro mediante una interfaz HTTP?
#### Function Calling: ¿Cómo puede un modelo solicitar a mi aplicación que ejecute una función?
#### MCP: ¿Cómo puede una aplicación compatible descubrir y utilizar capacidades expuestas por un servidor mediante un protocolo común?
#### Agente: ¿Cómo puede un sistema decidir y ejecutar una secuencia de acciones para cumplir un objetivo?

##### Puedes usar una API sin LLM, usar Function Calling sin MCP y construir un agente sin MCP
También puedes integrar un agente con servidores MCP para acceder a herramientas externas


Conceptos MCP

1. La especificación y la arquitectura host-client-server.
2. El ciclo de vida de la conexión y la negociación de capacidades.
3. La comunicación mediante JSON-RPC.
4. Cómo declarar herramientas, esquemas de entrada y resultados.
5. Cómo exponer recursos y plantillas de prompts.
6. Los transportes de comunicación y cuándo utilizar cada uno.
7. Autenticación, autorización y gestión de errores.
8. Cómo conectar un cliente MCP con una aplicación de IA.
9. Cómo diseñar, probar y mantener tu propio servidor MCP.

práctico: crear un servidor MCP que exponga algunas operaciones de una API propia y conectar un cliente compatible para invocarlas.

Recurso principal: Documentación oficial de MCP y su arq




# 1. Funciona la IA

##### La Inteligencia Artificial (IA) es un campo de la informática dedicado a construir sistemas capaces de realizar tareas que asociamos con capacidades inteligentes
como interpretar lenguaje, reconocer imágenes, generar contenido, hacer predicciones o planificar acciones.
la IA no es una tecnología única. Es un campo que comprende múltiples enfoques y tipos de sistemas.

Ej: un sistema que detecta transacciones fraudulentas puede utilizar IA sin generar texto
En cambio, ChatGPT utiliza modelos generativos para trabajar con lenguaje y otras modalidades

```
Inteligencia Artificial
El campo general
	|
Machine Learning
Aprender patrones a partir de datos
	|
Deep Learning
Aprendizaje mediante redes neuronales profundas	
	|
LLM
Modelos de lenguaje de gran tamaño	
	|
A partir de los modelos construimos aplicaciones, sistemas RAG y agentes, que pueden conectarse con herramientas mediante mecanismos como MCP.
```

Esquema es simplificado: no toda IA utiliza Machine Learning
no todo Deep Learning es un LLM y existen muchos tipos de modelos que no son modelos de lenguaje

IA:
El campo general de las técnicas y los sistemas inteligentes.

Machine Learning:
Métodos que aprenden patrones a partir de datos.

Deep Learning:
Métodos que utilizan redes neuronales profundas.

Modelo:
Un sistema entrenado que procesa entradas y produce resultados.

LLM:
Un modelo de lenguaje capaz de procesar y generar texto, entre otras capacidades según su diseño.

Aplicación de IA:
Un software que utiliza uno o varios modelos para resolver un problema.

Agente:
Un sistema que puede decidir qué acciones realizar y ejecutarlas mediante herramientas disponibles, dentro de ciertos límites.

MCP:
Un protocolo que estandariza cómo las aplicaciones compatibles se conectan con herramientas y fuentes de información.


Claves:
un LLM es un componente
un agente es un sistema que utiliza capacidades para actuar
MCP es un protocolo de comunicación entre componentes compatibles.


### Modelo

Imagina un sistema que reconoce si un correo electrónico parece ser spam.
##### Durante su entrenamiento, el sistema aprende patrones a partir de ejemplos
##### Después, cuando recibe un correo nuevo, utiliza lo aprendido para producir una predicción

Podemos representar el funcionamiento general así:

```
Entrada
Un correo electrónico
	|
Modelo entrenado
Procesa la entrada mediante los patrones aprendidos	
	|
Salida
Predicción: probablemente es spam
```

El modelo no necesita inventar una explicación en lenguaje natural
#### !!! Su tarea consiste en producir una predicción

Un LLM tiene una arquitectura y un objetivo de aprendizaje diferentes
pero también podemos entenderlo inicialmente mediante tres elementos: entrada, procesamiento y salida


### Entrenamiento frente a inferencia

#### Entrenamiento: el proceso mediante el cual se aprenden o ajustan los parámetros del modelo.

#### Inferencia: el uso de un modelo ya entrenado para obtener resultados a partir de una entrada.

##### Cuando envías un mensaje a un LLM mediante una API, normalmente estás utilizando inferencia, no entrenando el modelo.




### Relación IA, ML y DL: Jerarquica/cocentrica

La Inteligencia Artificial (IA), el Machine Learning (ML) y el Deep Learning (DL) forman una relación jerárquica que se puede entender como muñecas rusas o círculos concéntricos: la IA es el concepto más amplio, el Machine Learning es una rama dentro de ella, y el Deep Learning es una especialización avanzada del Machine Learning. [1] (https://www.ibm.com/es-es/think/topics/ai-vs-machine-learning-vs-deep-learning-vs-neural-networks), [2] (https://www.instagram.com/reel/DdaaOBnSzQm/), [3] (https://www.youtube.com/watch?v=ezMjrrfc7ts), [4] (https://www.youtube.com/shorts/-pbhDvq8u-4)
Puedes consultar la guía detallada de IBM sobre IA, ML y DL para profundizar en las arquitecturas de cada nivel. [1] (https://www.ibm.com/es-es/think/topics/ai-vs-machine-learning-vs-deep-learning-vs-neural-networks)

1. Inteligencia Artificial (IA) — El concepto general

• Qué es: Es el campo más amplio de las ciencias de la computación que busca crear sistemas, software o máquinas capaces de imitar la inteligencia, el razonamiento y las conductas humanas. [1] (https://www.youtube.com/watch?v=dKqwnCKrpVI), [2] (https://www.youtube.com/watch?v=ezMjrrfc7ts)
• Alcance: Incluye cualquier técnica que permita a un equipo resolver problemas de manera inteligente, desde reglas lógicas tradicionales y árboles de decisión fijos hasta sistemas modernos que aprenden solos. [1] (https://www.tiktok.com/@_ingeniia/video/7536004637602630918), [2] (https://www.youtube.com/watch?v=dKqwnCKrpVI)
• Ejemplo: Un asistente virtual básico, un sistema experto de reglas o un buscador web. [1] (https://www.youtube.com/shorts/-pbhDvq8u-4)

2. Machine Learning (ML) — El aprendizaje automático

• Qué es: Es un subconjunto o subdisciplina de la Inteligencia Artificial. En lugar de programar reglas fijas a mano, se le otorgan datos a un algoritmo para que aprenda patrones por sí solo. [1] (https://www.youtube.com/watch?v=8tOXEie-J6w&t=72), [2] (https://www.youtube.com/watch?v=ezMjrrfc7ts), [3] (https://www.youtube.com/watch?v=dKqwnCKrpVI)
• Cómo funciona: Utiliza estadística y matemáticas (regresiones, árboles de decisión, máquinas de soporte vectorial) para analizar datos estructurados y hacer predicciones o clasificaciones. [1] (https://www.youtube.com/watch?v=7WTEWyn9zfU&t=86), [2] (https://www.tiktok.com/@_ingeniia/video/7536004637602630918)
• Ejemplo: Los sistemas que recomiendan canciones o videos (como YouTube o Spotify) basándose en tu historial. [1] (https://www.youtube.com/watch?v=ZNIV1R9KRl4&t=4), [2] (https://www.youtube.com/shorts/-pbhDvq8u-4)

3. Deep Learning (DL) — El aprendizaje profundo

• Qué es: Es un subconjunto específico del Machine Learning. Se basa en redes neuronales artificiales profundas (con muchas capas de procesamiento) inspiradas libremente en la estructura del cerebro humano. [1] (https://www.tableau.com/es-mx/data-insights/ai/ml-deep-learning-in-ai), [2] (https://www.youtube.com/watch?v=ezMjrrfc7ts), [3] (https://www.tiktok.com/@_ingeniia/video/7536004637602630918)
• Cómo funciona: Tiene la capacidad de procesar datos no estructurados a gran escala (imágenes, audio, texto masivo) y extrae automáticamente las características sin intervención humana. Requiere muchísimos más datos y potencia de cómputo (GPU) que el ML tradicional. [1] (https://atriainnovation.com/blog/diferencias-entre-inteligencia-artificial-machine-learning-y-deep-learning/), [2] (https://www.youtube.com/watch?v=dKqwnCKrpVI), [3] (https://www.tiktok.com/@_ingeniia/video/7536004637602630918), [4] (https://www.youtube.com/watch?v=8tOXEie-J6w&t=72)
• Ejemplo: Modelos de lenguaje avanzados (como ChatGPT), reconocimiento facial o conducción autónoma de vehículos. [1] (https://www.youtube.com/watch?v=6kDGzmyLDsA&t=189), [2] (https://www.youtube.com/watch?v=qJwRA3FESrw&t=70), [3] (https://www.youtube.com/shorts/-pbhDvq8u-4)


Característica	Inteligencia Artificial (IA)	Machine Learning (ML)	Deep Learning (DL)
Jerarquía	El contenedor global	Una rama de la IA	Una rama avanzada del ML
Objetivo	Simular inteligencia humana	Aprender patrones de datos	Resolver tareas complejas con redes profundas
Tipo de datos	Cualquiera (reglas, código, datos)	Preferentemente estructurados (tablas)	No estructurados (imágenes, texto, audio)
Recursos	Varía según el enfoque	Menor potencia (CPU suficiente)	Alto poder de cómputo (GPUs)


### Corrección:
un modelo puede utilizarse para realizar inferencias sin que eso signifique que esté aprendiendo o modificando sus parámetros durante la conversación.
No toda IA utiliza Machine Learning, y no todo Machine Learning utiliza Deep Learning.

Podemos representar la relación más habitual de esta manera:
- Inteligencia Artificial: campo general.
  - Machine Learning: subcampo de la IA.
    - Deep Learning: subcampo del ML basado en redes neuronales profundas.


Ejemplo A: IA sin Machine Learning

Imagina un sistema que utiliza reglas programadas manualmente:

```
SI la temperatura supera los 38 °C
ENTONCES mostrar una alerta.
```
El sistema toma una decisión siguiendo una regla explícita. No necesita aprender de datos para funcionar.
Es un ejemplo sencillo de un sistema basado en reglas, aunque no toda automatización basada en reglas se considera necesariamente IA.
    

Ejemplo B: Machine Learning
Imagina un sistema que analiza miles de correos previamente clasificados como spam o legítimos.
A partir de esos ejemplos, aprende patrones que utiliza para clasificar correos nuevos.
Aquí sí tenemos aprendizaje a partir de datos.

Ejemplo C: Deep Learning
Imagina un sistema que utiliza una red neuronal profunda para reconocer objetos en fotografías.
La red aprende representaciones que le permiten identificar patrones visuales complejos.

##### La relación no es de necesidad, sino de inclusión conceptual:
IA ⊃ ML ⊃ DL
símbolo ⊃ significa que el conjunto de la izquierda contiene al de la derecha.

Una respuesta más precisa sería:
La Inteligencia Artificial es el campo general que estudia cómo construir sistemas capaces de realizar tareas asociadas con capacidades inteligentes.
Machine Learning es una rama de la IA que permite aprender patrones a partir de datos.
Deep Learning es una rama del Machine Learning que utiliza redes neuronales profundas.
No toda IA utiliza ML y no todo ML utiliza DL.




#### Corrección inferencia

cuando envías un mensaje a un LLM ya entrenado, normalmente estás realizando inferencia
bien

Un modelo ya entrenado es capaz de aprender por su cuenta.
mal


#### Entrenar un modelo
##### !!! Durante el entrenamiento, se ajustan los parámetros del modelo para que aprenda patrones de los datos.

En términos simplificados:
1. El modelo procesa ejemplos.
2. Se calcula una medida del error.
3. Un algoritmo ajusta sus parámetros.
4. El proceso se repite muchas veces

Así, el modelo aprende representaciones que le permiten realizar una tarea.

##### !!! Entrenar implica modificar los parámetros del modelo mediante un proceso de aprendizaje.


#### Realizar inferencia
##### Una vez entrenado, el modelo puede utilizarse para procesar nuevas entradas

1. Escribes una pregunta.
2. El modelo procesa la entrada.
3. Genera una respuesta.

Esto es inferencia.
##### En el uso habitual de un LLM, responder a una pregunta no implica que se modifiquen sus parámetros para aprender permanentemente de ella.
##### Utilizar información durante una conversación no es lo mismo que modificar los parámetros del modelo.

Existen técnicas de adaptación y sistemas que actualizan modelos, pero no debes asumir que ocurren automáticamente cada vez que interactúas con un LLM.


respuesta mejorada
##### !!! Cuando envío un mensaje a un LLM ya entrenado, normalmente estoy realizando inferencia: el modelo procesa mi entrada y genera una salida utilizando los parámetros aprendidos durante el entrenamiento.
##### Puede aprovechar la información disponible en el contexto de la conversación, pero eso no significa que esté modificando sus parámetros ni aprendiendo permanentemente de cada mensaje.



#### Corrección LLM

Un LLM es un modelo de lenguaje de gran tamaño. Está diseñado para procesar y generar lenguaje.
Algunos LLM también pueden procesar imágenes, audio u otras modalidades
En esos casos, hablamos de modelos multimodales.
Por eso, no todos los LLM pueden procesar imágenes.
Respecto al razonamiento, ciertos modelos pueden resolver problemas mediante procesos de inferencia complejos
pero no debemos interpretar esa capacidad como garantía de que todas sus respuestas sean correctas.

##### Un LLM es un modelo de lenguaje de gran tamaño que procesa y genera lenguaje
##### Según su arquitectura y entrenamiento, puede presentar capacidades adicionales, como el procesamiento de imágenes, audio, código o tareas de razonamiento

Agente
sistema con capacidad de realizar acciones y poseer herramientas.
lo más importante es poder decidir cómo utilizarlas para avanzar hacia un objetivo.

Ej:
Investiga el estado de mi pedido y, si se ha retrasado, prepara un mensaje para atención al cliente.

Un agente podría:
1. Consultar el pedido.
2. Analizar su estado.
3. Determinar si existe un retraso.
4. Preparar un mensaje si corresponde.
5. Solicitar tu aprobación antes de enviarlo.
El agente coordina las acciones en función de los resultados obtenidos.

No todos los agentes necesitan un LLM, aunque los agentes modernos basados en LLM son especialmente relevantes para nuestro curso.

##### Un agente es un sistema que persigue un objetivo y puede seleccionar o coordinar acciones en función del contexto y de los resultados obtenidos.
##### Puede utilizar un LLM, herramientas externas, memoria y mecanismos de control.


MCP
#### MCP no se limita a conectar herramientas; también puede facilitar el acceso a recursos e instrucciones proporcionados por servidores compatibles
##### MCP (Model Context Protocol) es un protocolo abierto que estandariza cómo las aplicaciones de IA se comunican con servidores que exponen herramientas, recursos y plantillas de instrucciones.


#### Relacion: LLM, Agente, herramientas, MCP

LLM: interpreta la solicitud y puede proponer qué hacer.
Agente: coordina los pasos necesarios para cumplir el objetivo.
Herramienta: permite ejecutar una operación concreta, como crear una tarea.
MCP: permite que una aplicación compatible descubra y utilice herramientas expuestas mediante un servidor MCP.

MCP no es el agente, y tampoco es el mecanismo que necesariamente decide qué herramienta utilizar. Esa decisión puede corresponder al LLM y a la lógica de orquestación de la aplicación.


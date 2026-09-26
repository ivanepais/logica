# RAG - MCP


# 1. Intro

#### Sistemas de IA integrados con la Generación Aumentado de Recuperación (RAG) para conectar los modelos con tus datos y obtener respuestas precisas contextualizadas.
#### Protocolo de Contexto de Modelo (MCP) para coordinar la comunicación y las acciones entre múltiples componentes de software.

##### Utilizar Rag para la gestión del conocimiento
##### MCP para la coordinación a nivel de sistema para crear sofisticadas app multidiciplinarias


```
App Layer:				| 	Monitoring Stack
User Interface System   |	Grafana
Mobile Service			|	Prometheus
Admin Service				Jaeger
							Private Policy Documents
------------------
RAG Pipeline Layer:

Query Service
Chunking
Embeddings
Retrieval
Generate
Augmented Service
Routing
Catching
------------
Data Layer:

VectorDB
Redis
PostgreSQL

```


#### Requisitos: Vector Search (búsqueda vectorial), Embedding Models, VectorDB, Chunking (segmentación/fragmentación)
#### RAG ARQ, Caching, Monitoring, Error Handling y Rag in Production



# 2. Retrieval-Augmented Generation

### RAG es darle contexto/información para que el modelo consulte la información y de una respuesta adecuada
#### Problema falta contexto para dar una respuesta precisa. 

### R: Retrieval es la parte dónde está la información que nos dará una respuesta adecuada a la consulta
### A: Augmented es la parte dónde hacemos la consulta y le brindamos la fuente de información
### G: Generation es la parte dónde el modelo lanza/genera su respuesta 

### Sistemas RAG: Va en busca de la información para tener un contexto y dar una respuesta precisa sin que le usuario tenga que proveer información de contexto.
##### Buscará y recuperará la información relevante para mejorar o amplicar la solicitud del usuario y usará al LLM para generar la respuesta. 

### Cómo hacemos R (recuperación-información), Cómo hacemos A (consulta-contexto), Cómo hacemos G (generación)



# 3. RAG no es una solución para todos los problemas

#### Al intentar que la IA genere mejores respuestas

### Con Prompt Engineering (ingeniería rápida), Fine Tuning (ajuste del modelo) y RAG

### Casos de uso para Prompt Engineering, Fine Tuning y RAG

#### Ej para que la gente no copie y pegue politicas de la empresa para hacerle consultas, se crea un chatbot interno
##### Tendra/localizará/buscará la información sobre las politcas, restricciones de consulta, un voz personalizada


### Areas a resolver

#### 1. Restricciones y Seguridad: Cómo responde, qué debe revelar y qué no. Son restricciones estrictas proporcionadas al LLM para controlar su comportamiento en función de la solicitud del usuario
##### Cómo nunca revelar info personal de los empleados, detalles confidenciales y si se pregunta temas delicados, manda un reporte a RH
##### Prompt Engineering (ingeniería rápida) es la adecuada para este area

#### 2. Voz, estilo y Lenguaje: Podemos nutrirlo con discursos, correos, entradas de blog para perfeccionar el modelo
##### Para esto se usa Fine Tuning (ajuste del modelo)
##### Se le proporciona cientos de preguntas y respuestas de ejemplo para que pueda responder de esa manera en todo momento
##### Se usa para patrones estables e inmutables pero no para información dinamica, factica en tiempo real
##### Si la info cambia constante, necesita entrenarse de nuevo, no puede citar fuentes, más info de entrenamiento más impresición, conocimiento corto

#### 3.Usamos RAG para tener respuestas precisas porque recupera la info de forma dinámica en el momento de la consulta y no en el momento de entrenamiento
##### El objetivo de RAG es obtener la info más relevante en el momento de la consulta en tiempo real.



# 4. RAG y MCP Fundamentals





# IA Auto



# Low Code

Prototipar:

Orquestador: n8n
autohospedaje y manejo de código JavaScript/Python integrado
Make.com es más visual y fácil

Bases de Datos / Almacenamiento: Airtable, Google Sheets o Notion
guardar estados, logs o datos estructurados


1. Clasificador y Normalizador de Leads (Manejo de JSON y Prompts)
hacer que un LLM responda en JSON estructurado estricto para que la automatización pueda tomar decisiones lógicas en los nodos siguientes
Ej: formulario web, las personas escriben datos desordenados (nombres en minúsculas, empresas con typos, mensajes confusos)

n8n / Make
Trigger: Webhook o envío de formulario (Typeform / Google Forms).

Nodo de IA:
 Envía el mensaje del usuario con un prompt que fuerce una salida JSON
 con tres campos: sentimiento (Positivo/Neutro/Negativo),
 categoria (Ventas/Soporte/Spam) y resumen_un_parrafo

Nodo Condicional (Router / If):
Si es Spam -> Finaliza el flujo o lo descarta
Ventas -> Inserta el lead en Airtable/Google Sheets con los campos limpios y envía una alerta a Discord/Slack


2. Digitalizador de Recibos y Facturas (Procesamiento Multimodal)
enviar archivos e imágenes a las APIs de IA para extraer información y convertir datos no estructurados en estructurados
Subir una imagen o PDF de un ticket/gastos desde Telegram, WhatsApp o Google Drive y registrarlo automáticamente

Trigger: Nuevo archivo subido a una carpeta de Google Drive
o mensaje recibido por un Bot de Telegram con una foto

Nodo de IA (Vision): Pasa la imagen a GPT-4o / Claude Vision pidiéndole extraer
comercio, fecha, monto_total, impuestos y lista_de_productos.

Nodo de Base de Datos: Crea un registro en Google Sheets o Notion con la fecha,
el comercio y el monto extraído.


3. Lógica Agéntica Básica y Aprobación Humana
Flujo intermedio donde la IA genera un contenido pero requiere tu aprobación antes de actuar o publicar
Control de flujos asíncronos (esperar respuesta humana) y seguridad en ejecuciones de IA.

Ej: Generar borradores de publicaciones de blog
o LinkedIn a partir de noticias o temas trend
recibiendo una vista previa para autorizar su envío.

n8n / Make:
Trigger: Un Webhook o la adición de una idea en Notion.
Nodo de IA: Redacta el contenido adaptado al tono de la red social deseada.
Nodo Human-in-the-Loop: Envía un mensaje a Slack/Telegram con dos botones: [Aprobar] o [Rechazar].

Ramificación
Si presionas Aprobar -> Se programa la publicación vía API (Buffer, LinkedIn, etc.) o se guarda como listo en Notion
Si presionas Rechazar -> Se envía a una lista de borrador rechazado.


4. IA con Base de Conocimientos Externa
Embeddings, bases de datos vectoriales y control de alucinaciones en LLMs.

Bot de Preguntas Frecuentes con Memoria RAG en n8n
Retrieval-Augmented Generation (RAG) sin escribir código
usando los nodos nativos de bases de datos vectoriales en n8n.

chatbot que responde preguntas sobre las políticas de una empresa o un manual técnico basándose únicamente en tus PDFs.

Sub-flujo de Ingesta: Carga un PDF -> Nodo Text Splitter
-> Nodo Embeddings OpenAI -> Almacena en Qdrant, Pinecone o la BD vectorial interna de n8n

Flujo del Chatbot
Trigger: Chat de Telegram/Web.
Nodo AI Agent / Vector Store Retriever: Busca la información relevante en la base vectorial según la duda del usuario
formula la respuesta basándose solo en esos fragmentos.



# Código: Python

Frameworks de Orquestación de LLMs: LangChain o LlamaIndex
construir cadenas, memoria y sistemas RAG

Backend / APIs: FastAPI
exponer agentes como servicios web

Bases de Datos Vectoriales: ChromaDB o FAISS
búsqueda semántica y memoria documental

Interfaz de Usuario: Streamlit o Gradio



Estructura:

uv: dependencias
Pydantic: LLM, data type, parse, objetos
Cliente de LLM / HTTP: openai, anthropic, httpx
Sistema: pathlib, shutil, sqlite3, asyncio
interfaces: streamlit, cli argparse

1. Script CLI de Procesamiento y Extracción Estructurada (Pydantic + LLM)

problema: Tienes un archivo de texto plano con notas desordenadas o feedback de usuarios y necesitas extraer métricas y etiquetas limpias para un reporte.
construyes: Un script de consola al que le pasas un archivo .txt, este llama a la API de OpenAI usando validación estricta con Pydantic, y exporta un JSON ordenado.

Conceptos:
variables de entorno (python-dotenv).
response_format con esquemas de Pydantic para forzar salidas JSON válidas en Python.
excepciones de API y reintentos básicos


2. Organizador Inteligente de Archivos Locales (Pathlib + LLM)

problema: Tu carpeta de descargas (Downloads) o un directorio de proyectos es un caos de PDFs
imágenes, scripts y zips sin clasificar.

construyes: Un script que escanea un directorio local, lee los metadatos o las primeras líneas de los archivos
pregunta a un LLM cómo categorizarlos basándose en reglas semánticas y los mueve automáticamente a subcarpetas
(Facturas/, Documentación/, Scripts/, etc.).

Conceptos:
Manipulación de rutas y archivos con pathlib y shutil.
Lectura de archivos binarios y de texto en Python.
Automatización de tareas del sistema operativo disparadas por código.


3. Scraping Web Inteligente y Resumidor Asíncrono (HTTPX + BeautifulSoup + LLM)
problema: Quieres monitorear varios blogs técnicos o portales de noticias, extraer los artículos nuevos, resumirlos y guardarlos en una base de datos local SQLite.

construyes: Un pipeline que descarga el HTML de múltiples páginas en paralelo (usando asyncio y httpx),
limpia el contenido con BeautifulSoup
procesa el texto con el LLM para generar un resumen ejecutivo y guarda los resultados en SQLite.

Python (async/await).
Persistencia de datos local con sqlite3 o un ORM ligero.
Limpieza y preprocesamiento de texto antes de enviarlo al modelo.


4. Mini-RAG Local desde las Bases (Sin LangChain)
funcionamiento de la búsqueda semántica y la recuperación de información por debajo del motor de los frameworks pesados.

construyes: Un sistema donde escribes un script que toma tus propios archivos Markdown o scripts
genera embeddings numéricos usando la API de OpenAI
los almacena en una base de datos vectorial local (como ChromaDB o faiss-cpu)
hace una búsqueda por similitud para responder preguntas usando contexto recuperado

Conceptos:
Chunking (fragmentación) manual de textos largos.
Generación y almacenamiento de vectores.
Construcción de prompts de sistema con contexto inyectado (RAG puro).




# Docker

Acción,Comando con service,Comando con /etc/init.d/
Iniciar,sudo service docker start,sudo /etc/init.d/docker start
Detener,sudo service docker stop,sudo /etc/init.d/docker stop
Reiniciar,sudo service docker restart,sudo /etc/init.d/docker restart


Herramienta,Rol en la Automatización,Costo / Tarjeta
Docker + n8n,"Orquestador de lógica, triggers y flujo de datos", (Ejecución local)
Google AI Studio,Generación de análisis y extracción JSON estructurada, (Capa Free de Gemini)
Airtable,Almacenamiento persistente de los datos normalizados, (Starter Free)
Postman / Bruno,Emulador de cliente (envío de datos de prueba)


# n8n

datos, contraseñas y flujos se guardan únicamente en el volumen de Docker de tu computadora (n8n_data).


## Comandos Esenciales






# airtalbe

airtable.com.

Crear la Base de Datos:

Crea un workspace y añade una Base nueva llamada Leads - Entrata.

En la tabla principal (puedes llamarla Leads Procesados), configura las siguientes columnas con su tipo exacto de dato:

Nombre (Single line text)

Email (Email)

Empresa (Single line text)

Categoria (Single select: Ventas, Soporte, Spam, General)

Urgencia (Single select: Alta, Media, Baja)

Resumen (Long text)

Mensaje Original (Long text)

Obtener Personal Access Token (PAT):

Ve a airtable.com/create/tokens.

Crea un token con permisos data.records:read y data.records:write,
asignado a tu base de datos de Leads.
Guárdalo junto a tu API key.



---


Nombre del Campo,Tipo de Campo (Field Type),Configuración Adicional
Nombre,Single line text,"(Cambia el campo predeterminado ""Name"" a este)"
Email,Email,"(Si existe uno de tipo text, puedes cambiar el tipo a Email)"
Empresa,Single line text,(Crea una columna nueva haciendo clic en el botón + a la derecha)
Categoria,Single select,"Agrega 4 opciones: Ventas, Soporte, Spam, General"
Urgencia,Single select,"Agrega 3 opciones: Alta, Media, Baja"
Resumen,Long text,(Para guardar la síntesis que genere Gemini)
Mensaje Original,Long text,(Para guardar el mensaje crudo que mandó el lead)




# Curl


simular las entradas del formulario enviando un JSON a tu Webhook de n8n:

Opción A (Recomendada): Instalar Bruno (Open source y ligero) o Postman.

Opción B (Sin instalar nada): Usar curl desde tu terminal o la herramienta integrada n8n Test Webhook.





# Hook


## Clasificador y Normalizador de Leads

localhost:5678

Nodo Webhook (El disparador)

    Haz clic en "Add first node" o en el botón "+" arriba a la derecha para crear un nuevo workflow.

    Busca y selecciona el nodo Webhook.

    Configura el nodo de la siguiente manera:

        HTTP Method: POST

        Path: lead-incoming (o déjalo por defecto).

    Copia la URL de prueba (Test URL) que te proporciona n8n.
    Se verá algo así: http://localhost:5678/webhook-test/lead-incoming.


Enviar datos de prueba (Simulando un formulario)

Para probar que el Webhook recibe información antes de conectar la IA, abre tu terminal (o usa tu cliente HTTP como Bruno/Postman) y ejecuta este comando con curl:


Cómo verificar que funcionó: Vuelve a n8n y haz clic en "Listen for test event" antes de mandar el curl.
Deberías ver los datos crudos llegando instantáneamente al panel.
    

### Comando docker

`docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n`

Editor is now accessible via:
http://localhost:5678



#### Comandos esenciales docker

no dejar la terminal abierta todo el tiempo y gestionar contenedores

1. Ejecutar n8n en segundo plano (Modo Detached)
Hasta ahora has estado ejecutando n8n con -it
significa que si cierras la terminal, el contenedor se apaga
Para que n8n corra siempre en segundo plano (como un servicio del sistema), utiliza el flag -d:
`docker run -d --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n`

Levanta n8n y te devuelve el control de la terminal inmediatamente, dejándolo funcionando en background.

2. Docker para el día a día

##### Una vez que el contenedor está corriendo en segundo plano, estos son los comandos que más vas a utilizar para controlarlo:

contenedores activos:
`docker ps`
Muestra una lista de los contenedores que están funcionando en ese preciso momento (verás el ID, la imagen, los puertos y el nombre n8n).


todos los contenedores (activos y apagados):
`docker ps -a`
Útil si n8n se detuvo y quieres confirmar si el contenedor sigue creado en tu sistema


Ver los registros (Logs) de n8n:
`docker logs n8n`
Si en algún momento n8n hace algo extraño o quieres ver la salida en tiempo real de lo que ocurre dentro
este comando te muestra la consola del contenedor
Si quieres verlos en tiempo real mientras ocurren, usa:
`docker logs -f n8n`
para salir del modo seguimiento sin apagar n8n


Detener el contenedor:
`docker stop n8n`
Apaga de forma segura el contenedor de n8n sin borrar tus flujos ni datos.


Volver a encender el contenedor detenido:
`docker start n8n`
si reiniciaste la PC o detuviste el contenedor con el comando anterior, este lo vuelve a poner en marcha manteniendo todo lo que habías avanzado


Borrar por completo el contenedor
`docker rm n8n`
Elimina el contenedor. Ojo: Gracias a que usamos el volumen -v n8n_data:..., tus flujos y configuraciones guardadas no se pierden aunque borres el contenedor; se quedan almacenados de manera persistente en tu disco.



3. SysVinit

Ver estado: `sudo service docker status`
Iniciar Docker: `sudo service docker start`
Reiniciar Docker: `sudo service docker restart`




# ide n8n

Liamg, no lisence free key feature


# Ai agent / Basic llm chanin: Sub Nodo dentro de estructura ai avanzada

1. crear nodo contenedor de IA
Busca y añade el nodo AI Agent (o Basic LLM Chain) en tu lienzo de trabajo en lugar de buscar un nodo de IA independiente
Verificación: Verás que el nodo principal cuenta con un puerto de conexión específico dedicado al modelo de lenguaje.

2. Conectar y buscar Google Gemini
Haz clic en el conector del modelo del AI Agent y arrastra hacia afuera
En el buscador que aparece, escribe Gemini para seleccionar Google Gemini Chat Model
Verificación: El nodo de Google Gemini quedará enlazado visualmente como sub-nodo del agente

3. Configurar la credencial
Haz doble clic en el nodo de Google Gemini, selecciona crear una nueva credencial y pega allí tu API Key de Google AI Studio
Verificación: La credencial se guardará correctamente sin errores de autenticación.



## Elementos conectados

1. nodo principal (Contenedor/Agente): Selecciona AI Agent
2. modelo de lenguaje (Sub-nodo): Selecciona Google Gemini Chat Model


### AI Agent

AI Agent
Una vez creado el bloque AI Agent, verás que en su parte inferior izquierda tiene una entrada específica etiquetada como Model (o Language Model).
Haz clic en ese punto/conector de Model y arrastra la línea.

Se abrirá el menú de la tercera imagen
seleccionar Google Gemini Chat Model


API Key:

clic sobre el sub-nodo de Google Gemini Chat Model recién conectado.
campo Credential for Google Gemini, selecciona Create New Credential.
Pega la API Key y guardar cambios

### !!! Esas acciones directas de Gemini (Analyze audio, Analyze document, etc.) son herramientas individuales para tareas específicas sobre archivos
pero no sirven como modelo de conversación/procesamiento de texto estándar para el agente. Por eso, la opción correcta es Google Gemini Chat Model




# Conectar hook


## Conectar el Webhook y configurar el Prompt del Agente
necesitamos unir las piezas para que los datos que llegan por el Webhook entren al AI Agent y este los procese con Gemini.

1. Conectar el Webhook al AI Agent:
Si aún no tienes el nodo Webhook en tu lienzo, búscalo en el buscador de nodos y colócalo antes del AI Agent.
Arrastra una línea desde el punto de salida del nodo Webhook hacia la entrada principal del AI Agent.

2. Configurar el Prompt del AI Agent:
Haz doble clic sobre el bloque del AI Agent para abrir su panel de configuración y ajustar el mensaje del sistema (System Prompt o Prompt).
Pega el siguiente texto en las instrucciones del agente (este prompt le indica exactamente cómo debe clasificar los datos que recibe del webhook):

```
Eres un asistente experto en ventas y atención al cliente. Tu tarea es analizar el mensaje de un lead entrante y normalizar sus datos.

Recibirás un JSON con los siguientes campos del lead:
- Nombre
- Email
- Empresa
- Mensaje

Tu objetivo es retornar estrictamente la clasificación y el resumen bajo estos criterios:
1. Categoria: Debe ser exactamente una de estas opciones: "Ventas", "Soporte", "Spam", "General".
2. Urgencia: Debe ser exactamente una de estas opciones: "Alta", "Media", "Baja".
3. Resumen: Redacta un resumen breve y profesional del requerimiento del cliente en una o dos líneas.

Asegúrate de interpretar el contenido del mensaje recibido para determinar la categoría y la urgencia de forma lógica.
```

3. Inyectar los datos del Webhook en el Prompt:
Dentro del mismo prompt del AI Agent, asegúrate de pasar dinámicamente el mensaje del webhook utilizando las expresiones de n8n (puedes escribir {{ $json.mensaje }}
o usar el selector de variables de la interfaz para insertar los datos del nodo anterior).


---


configuración del nodo Webhook, con el método HTTP en POST y la ruta establecida como lead-incoming
Poner el Webhook a la escucha: Haz clic en el botón naranja "Listen for test event" para que n8n quede esperando los datos de prueba
Copiar la URL de prueba: Una vez que le des clic, n8n te mostrará una Test URL (que será algo como http://localhost:5678/webhook-test/lead-incoming). Copia esa dirección.
Cerrar el panel: Haz clic en la X de la esquina superior derecha para volver al lienzo principal del flujo.

Conectar los nodos: Asegúrate de arrastrar una línea desde la salida de este nodo Webhook hacia la entrada principal del AI Agent que configuramos con Gemini en el paso anterior.

test url
post
http://localhost:5678/webhook-test/lead-incoming

http://localhost:5678/webhook-test/lead-incoming


## Estado diagrama/conexión 

1. Eliminar los elementos duplicados o erróneos
Limpieza del lienzo

Selecciona el bloque del chat (When chat message received),
el nodo Google Gemini Chat Model desconectado de abajo
y el segundo AI Agent que muestra el icono de advertencia rojo


2. Conectar Google Gemini al AI Agent1
Enlace de modelo

Haz clic en el conector inferior etiquetado como Chat Model* en el nodo AI Agent1
arrastra la línea hacia afuera para buscar y seleccionar Google Gemini Chat Model
Luego, abre sus parámetros y verifica que esté seleccionada tu credencial y el modelo de Gemini.
Verificación: La advertencia roja en el agente desaparecerá al tener un modelo de lenguaje válido asociado.


3. Agregar el nodo de Airtable
Destino de salida

Haz clic en el botón + situado a la derecha del nodo AI Agent1 y busca Airtable para insertar el nodo encargado de registrar los leads procesados en tu base de datos
Verificación: El nodo Airtable quedará conectado en cascada a la salida del agente de IA.



## mapear las salidas que vienen del AI Agent y del Webhook hacia cada campo de Airtable

 
mapear los valores (Values to Send)
Para enviar valores dinámicos desde n8n, debes asegurarte de cambiar el modo del campo de Fixed (o lista desplegable fija) a Expression en cada casilla:

1.Datos del contacto (Vienen del Webhook o del AI Agent)

    Nombre: Pasa el cursor por la casilla de Nombre, haz clic en Expression (o el icono de la barra /) y escribe:
    {{ $('Webhook').json.body.nombre }}

	(o arrástralo desde el panel izquierdo "INPUT" expandiendo el nodo Webhook).

	Email: Mismo procedimiento -> {{ $('Webhook').json.body.email }}

	Empresa: Mismo procedimiento -> {{ $('Webhook').json.body.empresa }}

	Mensaje original: Mismo procedimiento -> {{ $('Webhook').json.body.mensaje }}


	
2. Datos analizados por la IA (Vienen de Gemini / AI Agent)

Para los campos que la IA clasificó:

    Categoria: Cambia el selector a Expression (haz clic en las opciones del campo para cambiar de lista fija a expresión) y pon:
    {{ $json.output.Categoria }} (o según como responda tu agente en su campo de salida).

    Urgencia: Cambia a Expression y pon:
    {{ $json.output.Urgencia }}

    Resumen: En la casilla de texto pon:
    {{ $json.output.Resumen }}

    
Probar el flujo completo con curl

Una vez completado el mapeo:

    Guarda el flujo en n8n (botón Save o Ctrl + S).

    Abre tu nodo Webhook y haz clic en "Listen for test event" (o ejecuta Test Step).

    Abre tu terminal de Linux y lanza esta petición de prueba con curl:


```
curl -X POST http://localhost:5678/webhook-test/lead-incoming \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Carlos Gómez",
    "email": "carlos@techcorp.com",
    "empresa": "TechCorp",
    "mensaje": "Hola, necesitamos cotización urgente para integrar un chatbot con nuestra API de ventas porque se nos caen los clientes."
  }'
```



{{ JSON.parse($json.output).Categoria }}

{{ JSON.parse($json.output).Categoria }}

{{ JSON.parse($json.output).Urgencia }}



{{ JSON.parse($json.output.replace(/```json\s*|\s*```/g, '')).Categoria }}
{{ JSON.parse($json.output.replace(/```json\s*|\s*```/g, '')).Urgencia }}
{{ JSON.parse($json.output.replace(/```json\s*|\s*```/g, '')).Urgencia }}






### Fix campos

1. 
la fuente del mensaje está configurada como Connected Chat Trigger Node utilizando la variable predeterminada {{ $json.chatInput }}.
flujo inicia con un nodo Webhook
no con un widget de chat. Al buscar chatInput, la IA no encontrará el mensaje del lead enviado por el webhook
solución: Debes asegurar que el agente reciba el texto del mensaje proveniente del payload del Webhook (por ejemplo, referenciando {{ $json.body.mensaje }}).

2. 
los campos de Categoria, Urgencia y Resumen están configurados tomando los datos directamente del nodo Webhook ({{ $('Webhook').json.body.categoria }}), lo que genera el aviso de valor undefined.
problema: El Webhook solo recibe los datos crudos del lead (nombre, email, empresa, mensaje).
Los campos de categoría, urgencia y resumen no existen en el webhook original
ya que son calculados y generados posteriormente por el AI Agent.


solución: Debes separar el origen de los datos en Airtable de la siguiente manera:
Datos del contacto (del Webhook): Mantén el mapeo de Nombre, Email, Empresa y Mensaje original apuntando a los campos del Webhook ({{ $('Webhook').json.body.email }})

Datos de la IA (del AI Agent): Cambia el origen de Categoria, Urgencia y Resumen para que apunten a la salida del nodo AI Agent1 (por ejemplo, utilizando las propiedades de salida que devuelva el agente de IA).




## Errores

Abre la ejecución anterior en n8n y haz clic en el nodo AI Agent1 para revisar su pestaña Output.
Verificación: Comprueba si el agente realmente está devolviendo un JSON con las claves exactas (Categoria, Urgencia, Resumen)
o si está respondiendo con texto plano.
Si la IA responde con texto plano, el comando JSON.parse($json.output)
fallará y Airtable no recibirá los datos.


Corregir el mapeo en el nodo de Airtable:Revisión
Abre la configuración del nodo Create a record (Airtable) y verifica las expresiones
de los campos procesados por la IA. Asegúrate de que estén escritas exactamente
así:Categoria: {{ JSON.parse($json.output).Categoria }}Urgencia: {{ JSON.parse($json.output).Urgencia }}Resumen: {{ JSON.parse($json.output).Resumen }}


Si la columna Categoria o Urgencia en Airtable es de tipo Single select (Selección única), los textos que devuelva la IA ("Ventas", "Soporte", "Alta", "Media")
deben coincidir exactamente con las opciones creadas en Airtable (respetando mayúsculas y acentos).
Si Airtable recibe una categoría que no está en sus opciones de selección, rechazará el registro silenciosamente y dejará la fila vacía o fallará





# Python



# Procesamiento y Extracción Estructurada

Combinar Pydantic con un LLM, garantizamos que la respuesta de la IA cumpla estrictamente con un esquema de datos tipado y limpio antes de guardarlo en un JSON.

pydantic: Para definir la estructura exacta del JSON de salida (tipos de datos, campos obligatorios, validaciones).
API del LLM: cliente
python-dotenv: Para gestionar de forma segura la clave de API mediante un archivo .env.
argparse (nativo de Python): Para manejar los argumentos de la consola (ej. pasar la ruta del archivo .txt).


Ej:

text-extractor-cli/
├── venv/                 # Entorno virtual de Python
├── schemas.py            # Modelos de datos con Pydantic
├── main.py               # Lógica del CLI y llamada al LLM
├── sample_input.txt      # Archivo de prueba con notas desordenadas
├── requirements.txt      # Dependencias del proyecto
└── .env                  # Variables de entorno (API Key)

dep:

pydantic>=2.0
openai>=1.0
python-dotenv>=1.0

schemas:

```
from pydantic import BaseModel, Field
from typing import List

class FeedbackAnalysis(BaseModel):
    categoria: str = Field(description="Categoría principal del feedback: Soporte, Ventas, Bug o General")
    sentimiento: str = Field(description="Sentimiento general del usuario: Positivo, Neutro o Negativo")
    palabras_clave: List[str] = Field(description="Lista de palabras clave o tecnologías mencionadas")
    resumen_ejecutivo: str = Field(description="Un resumen breve de una o dos líneas del problema o solicitud")
```

Proj:
mkdir text-extractor-cli
cd text-extractor-cli

python3 -m venv venv
source venv/bin/activate

pip install google-genai pydantic python-dotenv

GEMINI_API_KEY=tu_clave_api_aqui

sample_input.txt:
Ayer estuve probando la aplicación y la verdad la interfaz es muy fluida, pero me encontré con un error crítico al intentar exportar los reportes a PDF en la versión de escritorio. La pantalla se queda congelada. Además, me gustaría sugerir que agreguen soporte para autenticación con huella o biometría en el módulo móvil. Urgente solucionarlo para el cliente AlphaCorp.


1. schemas.py.

Qué es y qué hace:
Es el archivo donde definimos el modelo de datos utilizando Pydantic
###### contrato estricto par la ai, determina qué estructura de datos debe devolvernos a partir del texto plano.

Cómo:
Utiliza clases que heredan de BaseModel de Pydantic y el método Field().
A través de las descripciones (description) en cada campo
el SDK de Gemini, le comunica al modelo qué tipo de información exacta debe extraer
y con qué formato tipado (como cadenas de texto o listas).

Por qué:
la llamada a la API de Gemini a implementar en el script
necesita importar este esquema para activar la funcionalidad de Structured Outputs
evitamos por completo respuestas en texto plano o mal formateadas
asegurando que Python reciba un objeto validado automáticamente

schemas.py en la raíz

```
from pydantic import BaseModel, Field
from typing import List

class FeedbackAnalysis(BaseModel):
    categoria: str = Field(
        description="Categoría principal del feedback o nota: Soporte, Ventas, Bug o General"
    )
    sentimiento: str = Field(
        description="Sentimiento general expresado en el texto: Positivo, Neutro o Negativo"
    )
    palabras_clave: List[str] = Field(
        description="Lista con las palabras clave, tecnologías o temas principales mencionados"
    )
    resumen_ejecutivo: str = Field(
        description="Un resumen breve y profesional de una o dos líneas que sintetice el requerimiento o problema"
    )
```

#### BaseModel, Field
BaseModel (la clase principal para crear esquemas de datos tipados)
Field (una función que permite añadir metadatos, restricciones y descripciones a cada atributo).

##### Sin BaseModel no podríamos estructurar los datos
##### Field permite escribir descripciones detalladas en texto natural que el SDK de Gemini utiliza como instrucciones para saber exactamente qué información extraer


List/typing
indicar que un campo específico debe contener una lista de elementos
ej: lista de palabras clave en formato de texto
Garantiza la compatibilidad de tipado en Python.


FeedbackAnalysis(BaseModel):
Clase que hereda de BaseModel
esta clase le otorga a Python (y a la API de Gemini) la capacidad de validar automáticamente que los datos cumplan con la estructura exacta que definiremos dentro
molde o contrato de datos.


Campos

```
    categoria: str = Field(
        description="Categoría principal del feedback o nota: Soporte, Ventas, Bug o General"
    )

```
Primer campo del modelo (categoria)
especificando que debe ser de tipo texto (str)
##### usa Field para darle una guía descriptiva al modelo de IA sobre qué valores debe considerar
Soporte, Ventas, Bug o General
Asegura que la categoría extraída sea siempre una cadena de texto limpia
orienta al modelo sobre las opciones permitidas para mantener consistencia

segundo:
Define el campo sentimiento como una cadena de texto (str) acompañada de su descripción guía (Positivo, Neutro o Negativo).
Por qué está ahí: Permite estructurar el estado de ánimo o tono expresado en el texto de entrada, facilitando métricas y análisis cuantitativos posteriores en reportes

tercero:
`palabras_clave: List[str] = Field(description="...")`
tipado estrictamente como una lista de cadenas de texto (List[str]), junto a una descripción explicativa.
Garantiza que la IA no devuelva un párrafo plano, sino una lista estructurada de conceptos
tecnologías o términos clave ideales para indexar o etiquetar.





## Consumo de tokens del modelo






# OpenRouter

##### agregador y una pasarela de APIs unificada
acceder a cientos de modelos de inteligencia artificial de diferentes proveedores (como Google Gemini, Anthropic Claude, OpenAI GPT, Meta Llama, DeepSeek, entre otros) utilizando una sola cuenta, una sola clave de API y un único sistema de saldo

Punto de acceso único: No necesitas crear cuentas independientes en Google AI Studio, OpenAI y Anthropic ni gestionar múltiples claves y métodos de pago separados

Compatibilidad estándar: Utiliza un formato de API compatible con OpenAI.
significa que en herramientas como n8n o scripts de Python puedes utilizar los nodos o librerías estándar de OpenAI simplemente cambiando la URL base y el identificador del modelo

Cambio de modelo instantáneo: Si en tu flujo de automatización quieres probar si un modelo de Gemini rinde mejor que uno de Anthropic o Llama para clasificar o extraer datos
solo debes cambiar el texto del nombre del modelo en la configuración (por ejemplo, especificando google/gemini-1.5-flash), sin necesidad de modificar la estructura de tus nodos o código

Centralización de costos y créditos: Te permite recargar saldo en un solo lugar y usarlo para consumir modelos de distintos fabricantes según lo que necesites en cada momento.





# MCP Servers

Contexto

```
		
		MCP Protocol
			<-->	 MCP Servers ab <--> Local Data Sources ab
MCP Client
(Es, Tools)
			<--> 	MCP Server C <-> Web APIs
					|
					Internet
					|
					Remote Service C

```

Servidores MCP conectados a Modelos
para que los llm se conecten a sistemas externos
Ej: app que se ejecuta en pc local, servidor que ejecuta el código o api de terceros


Ej: Svelte MCP server

```
				Client (Claude Code, Copilot, etc)
										|			update on-demand
Redis <- (Real-time mess queue x sse) Sveltekit + node.js -> GH API(svelt.js)
										|					 				|
									PostgreSQL<--Update Distilled docs --> Background Scheduler
```

Instalar el servidor al modelo
solicitud spell
indicará al cliente (claude) como obtener la docum
además utilizará el analizador estático

Figma MCP
conectar figma app local en escritorio y nube
extraerá archivo de diseño y lo implementará automáticamente
Incluso generar componentes de React, tailwind, ios


Ej Sistema pago con api de terceros
Muchas apis tiene un mcp server con la documentación
para una version particular, además de las herramientas


Usar Sentry/monitorización/log
Para captar y ver errores que el modelo filtro
antes de poner en producción
Indicandole que consulte los problemas que se ven en Sentry


Tickets
MCPs para jira o github
indicandole a la ia que solucione el problema y lo cierre


Escalar
MCP para AWS, Cloudflare, Vercel
para que la ai se aprovisione de los servicios/recursos de la nube


Construcción del Servidor Local
fuentes de datos, smarthome
hay mcp para todos, cuando los construyes
necesitas implementarlos/deployarlos



Problemas
Tiempo, llamadas innecesarias para cambiar feature del ticket



## Auto


```

trigger/whook - ifs - http - ai agent - task - task 2 -> 
								|
								model
```


Ej: ejecutar un wflow que se active al fusionarse un pr
creará un imagen de docker y la notificará a slack

```
GH trigger -> build docker image -> Sen a mess (post)
```

Ej: Iot, flujo que active alarme cuando una camara smart detecte presencia

```
Camara event -> Recongnition ai -> send sms/mms/whtspp

```

Ej: Recopilar estadisticas
 
```
futbol match -> scrap stats -> ai Agent -> crear record

```

Ej:

```
On: create user -> ai agent -> its manager? -> add chan or updat
					| |	| |
		model postgre msoft id jira
```	

Alojarlo en un vps

En la interfaz tenemos tempaltes



# Pila AI

```
app
harness
tools
context
model
```


## Open Source

Ejecutarlo en el vps

ej: model, llama cpp
como docker para modelos de ai
en una interfaz ejecutas los modelos
en una api descargas los modelos

Ej: 9router/token saver
se situa entre las herramientas del modelo y  los proveedores
a traves de un único endpoint, en vez de gestionar muchas claves api
tiene un proxy compatible con los modelos, puede redirigir a localhost
tiene niveles de reserva:
Usar varios modelos de respaldo para diferentes tareas
Si terminas los tokens de un modelo, pasa a la siguiente capa/nivel
Ademas tiene RTK Compression:
Seguimiento de uso y compresión de salida
reduciendo el consumo de tokens

Ej: headroom/contexto
comprime contexto
se situa entre la app y el modelo
comprime todo desde los resultados de las herramientas
hasta los archivos de registro 
cualquier fragmento inutil antes de que le llegue al modelo
Almacena en cache el contexto enviado al modelo
Cuando el modelo lo necesite, lo recupera

Ej: Dify ai
en vez de diseñar código mediante prompts
dify es un constructor visual, permite arrastrar nodos sobre un lienzo
despues de analizar contra la db
el flujo de trabajo se expone como api/mcp
de modo que la interfaz de la app puede llamarla

Ej: Openhands
agente programador autonomo de alto rendimiento
(swe bench: banco de pruebas donde los modelos solucionan problemas reales de gh)
En lugar de construir y arreglar código
Abre incidencia y deja que open hands haga
proporciona un centro de mando donde alojar un ejercito de agentes
ques estarán activos y trabajando en segundo plano





Ej

# Work Flow

## Base

IA con archivos de contexto, una codebase entera indexada,
agentes especializados, múltiples modelos, workflows automatizados,
revisión de código, generación de tests, refactorización asistida,
documentación, integración con el IDE, terminal, Git,
issues, logs y prácticamente todo el ciclo de desarrollo

 
## Código Automático

agents.md para codex/opencode, claude.md para claude en el main
podes hacer uno solo y el otro mencione al otro, este es tu principal el orquestador de reglas

Carpeta agents
backend.md frontend.md ux-ui.md tests.md cada uno con sus reglas + memory.md (este es memoria flotante un pseudo changelog mencionas commit/rama/pr resumen de cambios)
desde backend por ej podes llamar a la subcarpeta repository listando archivos y mas reglas aca lo mas especifico posible a nivel sintaxis y responsabilidad

llama chrome dev mcp o playwright, context7 mcp
npx tsc no emit, npm run lint, y npm run test x (gradle si es java)

pd no descargues bateas de skills con 300k estrellas de github son todas un culo tdd sdd abcdd toda esa falopeada no sirve para un carajo arma tu propio esquema de reglas cortito y al pie te va andar mejor

defines reglas ,memoria y le pones limite de acciones
Lo que más peso tiene es el modelo y el harness
Y la iteracion debe ser controlada

Le paso el contexto del proyecto entero
y le pido cosas concretas: "arregla este bug",
"escribi los tests para este modulo".
El edita los archivos directo y vos revisas el diff.

##### no aceptar nada a ciegas. Pedile primero un plan (que va a tocar y por que) y recien despues dejalo escribir


Bajate la cli de tu generador de slopware favorito,
abri tmux y create varias sesiones, promptea
y testea hasta que salga algo mas o menos usable, done


Forma local abro un repositorio o workspace (varios repos a la vez),
Cursor, pido lo que hay que implementar y escribe directamente
sistema de planificación y reglas

Alternativa cloud: usar agentes cloud, es parecido
solo que no pueden acceder a archivos locales sino que trabajan en el repo.
Tienen una VM y suelen crear sus propias branch para no afectar directamente a las ramas de trabajo.

##### dejas de hablarle al harness como si tuvieras preguntas, y le hablas como si fuera la aplicacion, "quiero que hagas X" "explicame como haces Y


### Código industrial

##### Operario: Tu laburo no les importa y tampoco les importa el cómo lo hagas.
##### Lo que les importa es que generes un valor que se traduzca en ganancias para la empresa. 
No hay mucho que discutir. Si el código es una mierda pero su implementación deja guita es suficiente.


Es una carrera muerta, digan los que digan, nadie va a dedicar su existencia a que le caiga 1 oportunidad de desarrollar algo entreo 80mil que se delegan a la IA. De hecho,
nadie se pone a pensar que desarrollar y mantener frameworks ya no tiene mucho sentido,
cuando lo mas probable es que la ia en el mediano plazo programe a nivel maquina directamente
y nos pase por arriba. La programacion paso de ser una habilidad idolatrada a ser un trabajo de artesano de feria


aceleramos muchísimo el desarrollo al implementar cursor (entre otras). nos dimos cuenta que el bottleneck pasó a testing y codereview
creo que el siguiente bottleneck va a estar en la ideación y definición de features.

detener el código de alguien más justo en el PR para que entienda q carajo esta haciendo y deje de mandar código hecho por la IA si tan siquiera haber hecho un git diff.


Incluso podés jugarle al retruco creando un agente de code review
para que evalúe bien todo el código de tus colegas y les mandes su buen review...
Al día de hoy hay gente tan cabeza de nabo
q hasta deja que la IA siga agregando su firma en los commits



## Promp injection / Rate Limit


# Diseño del sistema: qué va a hacer y por que



# Resolver Problm neg



# Ventas / Poder adquisitivo / Digit
Corpo a pleno b2b sigue siendo un gran negocio, ni hablemos si estas en tecnologia.
Si vendes a industria/pyme




# Aprendizaje: Qué hace, cómo y por qué
 



# Logros Cuantificados: Lo que se logró, Cómo se midió el logro, Cómo se logró




# Incorporar AI en los proceso/workflows



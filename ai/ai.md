# AI

## Definición

##### Área de la informática que busca desarrollar sistemas capaces de realizar tareas que normalmente requieren inteligencia humana, como:

1. Aprender de la experiencia
2. Razonar y tomar decisiones
3. Reconocer patrones
4. Comprender lenguaje natural
5. Resolver problemas complejos


Características principales:

1. Automatización cognitiva → simula procesos del pensamiento humano (aprender, razonar, planear).

2. Adaptabilidad → mejora con los datos (machine learning, deep learning).

3. Autonomía parcial o total → puede tomar decisiones sin intervención humana constante


Subcampos de la IA:

1. Machine Learning (ML): algoritmos que aprenden patrones a partir de datos.

2. Deep Learning (DL): redes neuronales profundas para visión, voz, texto.

3. Procesamiento de Lenguaje Natural (NLP): comprensión y generación de lenguaje humano.

4. Robótica: integración de IA en sistemas físicos.

5. IA simbólica / lógica: razonamiento basado en reglas y conocimiento explícito


Ejemplos

1. IA débil / estrecha: sistemas especializados en una tarea (ej: reconocimiento de voz, chatbots, detección de fraudes).

2. IA fuerte / general (AGI): inteligencia comparable a la humana, capaz de adaptarse a múltiples tareas (todavía no existe).

La IA es la disciplina que busca que las máquinas perciban, comprendan, aprendan y actúen de manera inteligente, en tareas que tradicionalmente solo podían hacer los humanos.


## Campo de estudio

No es un campo único y aislado, sino un área interdisciplinaria que combina varios campos de estudio

En dos niveles: núcleo principal y disciplinas de soporte.


1. Campos principales (núcleo de la IA):

### 1. Aprendizaje automático (Machine Learning, ML):
Algoritmos que aprenden patrones a partir de datos.
Subcampos: supervisado, no supervisado, refuerzo.

### 2. Aprendizaje profundo (Deep Learning, DL):
Redes neuronales artificiales avanzadas (visión por computadora, lenguaje, etc.).

### 3. Procesamiento de Lenguaje Natural (NLP):
Comprensión y generación de lenguaje humano.
Ejemplos: traductores, asistentes virtuales, chatbots.

### 4. Visión por computadora (Computer Vision):
Reconocimiento e interpretación de imágenes y videos.
Ejemplos: diagnóstico médico por imágenes, conducción autónoma.

### 5. Robótica e IA encarnada:
Integración de IA en sistemas físicos.
Control de movimiento, interacción con el entorno.

### 6. Sistemas multiagente:
Modelado de agentes autónomos que interactúan entre sí.
Ejemplos: simulaciones de tráfico, trading automatizado.

### 7. IA simbólica y lógica (Good Old-Fashioned AI):
Basada en reglas, razonamiento lógico, ontologías.
Muy usada en planificación, diagnóstico experto.

### 8. Razonamiento y planificación automática:
Cómo un sistema toma decisiones y planifica acciones para alcanzar objetivos.


2. Disciplinas de soporte (interdisciplinarias)

### 1. Matemáticas
Álgebra lineal, cálculo, probabilidad, estadística, teoría de grafos.

### 2. Ciencias de la computación
Algoritmos, estructuras de datos, programación, optimización.

### 3. Neurociencia
Inspira redes neuronales artificiales y modelos de aprendizaje.

### 4. Lingüística
Fundamental para NLP y modelos de lenguaje.

### 5. Psicología cognitiva
Modela cómo los humanos piensan y aprenden.

### 6. Ingeniería y control automático
Especialmente en robótica y sistemas autónomos.

### 7. Ética y filosofía
Impacto de la IA en la sociedad, sesgos, responsabilidad, AGI



## Conceptos 

1. Conceptos fundamentales

Inteligencia: capacidad de aprender, razonar y adaptarse.
Agente inteligente: sistema que percibe su entorno, razona y actúa para cumplir objetivos.
Razonamiento: proceso de deducir o inferir nuevas conclusiones a partir de información.
Aprendizaje: mejora del rendimiento con experiencia/datos.
Conocimiento: representación de hechos, reglas, relaciones y contextos.
Percepción: interpretación de señales externas (visión, sonido, sensores).
Acción: respuesta o comportamiento que ejecuta el sistema.


2. Paradigmas de la IA

IA simbólica (basada en reglas): lógica, sistemas expertos, ontologías.
IA conexionista: redes neuronales artificiales, aprendizaje profundo.
IA estadística / probabilística: inferencia bayesiana, modelos predictivos.
IA evolutiva: algoritmos genéticos, optimización inspirada en biología.
IA híbrida: combinación de reglas + aprendizaje (neuro-simbólica).


3. Subcampos y técnicas clave

Machine Learning (ML): algoritmos que aprenden patrones.
Supervisado, no supervisado, por refuerzo.
Deep Learning (DL): redes neuronales profundas.
Procesamiento de Lenguaje Natural (NLP): análisis y generación de lenguaje.
Visión por computadora: reconocimiento de imágenes y video.
Robótica: percepción, movimiento y acción en el mundo físico.
Sistemas multiagente: colaboración/competencia de múltiples agentes.
Razonamiento automático y planificación: decidir secuencias de acciones.


4. Conceptos aplicados

Reconocimiento de patrones: identificar similitudes en datos.
Clasificación: asignar categorías (ej: spam/no spam).
Regresión: predecir valores continuos (ej: precio de una casa).
Optimización: buscar la mejor solución a un problema.
Inferencia: deducir conclusiones a partir de evidencias.
Generalización: aplicar lo aprendido a nuevos casos.
Explicabilidad (XAI): hacer que la IA sea interpretable para humanos.


5. Aspectos éticos y filosóficos

Sesgo algorítmico: discriminación por datos defectuosos.
Responsabilidad: quién responde por las decisiones de la IA.
IA débil vs IA fuerte (AGI): especialización en tareas vs inteligencia general.
Singularidad tecnológica: hipótesis sobre IA superinteligente


## Matemáticas en AI

### Matrices

1. Representación de datos

Una matriz es una forma natural de organizar datos en múltiples dimensiones:

Imagen en escala de grises → matriz de píxeles (alto × ancho).
Imagen en color → tensor (alto × ancho × canales RGB).
Texto → matriz donde cada fila representa un vector de palabras (embeddings).
Dataset tabular → filas = ejemplos, columnas = características.

##### Así, la entrada a un modelo AI casi siempre está organizada como una matriz o un tensor


2. Operaciones en redes neuronales

En una red neuronal, cada capa aplica una transformación

```
y = W * x + b
```

W = matriz de pesos de la capa.
x = vector/matriz de entrada.
b = vector de sesgos.
y = salida transformada

##### Esto es literalmente multiplicación de matrices y vectores.


3. Entrenamiento (backpropagation)

El ajuste de parámetros en AI se hace con gradientes.
##### El cálculo de gradientes usa reglas del cálculo matricial y tensorial (derivadas parciales organizadas en matrices Jacobianas y Hessianas).
##### Librerías como TensorFlow, PyTorch, JAX internamente hacen álgebra lineal acelerada para actualizar millones o miles de millones de parámetros en paralelo


4. Paralelismo y eficiencia

##### Las operaciones matriciales son altamente paralelizables:
	Cada elemento de la matriz puede calcularse de manera independiente en GPUs/TPUs.
##### Esto permite que AI aproveche hardware especializado (CUDA, cuBLAS, Tensor Cores) que multiplica matrices a velocidades enormes


5. Transformaciones en AI

##### Muchas técnicas en AI se expresan con álgebra lineal:
PCA (análisis de componentes principales): descomposición en valores singulares de una matriz.
Word embeddings (NLP): representaciones vectoriales en espacios matriciales.
Atención en Transformers: se basa en productos de matrices (query × key, luego aplicado a value).
CNNs (convoluciones): pueden reescribirse como multiplicaciones de matrices


Rs: 

##### Las matrices son el lenguaje matemático de la AI porque permiten:
Representar datos estructurados.
Definir los parámetros de los modelos.
Realizar los cálculos de entrenamiento y predicción de forma eficiente.
##### Ejecutar todo esto en hardware optimizado para álgebra lineal.


### Vectores

##### Casi toda la información en Inteligencia Artificial se representa como vectores porque permiten que los datos sean manejados, comparados y transformados matemáticamente de forma eficiente

1. Representación de datos

Una imagen, un texto, un sonido o un usuario en una red social → se transforma en un vector.

Ejemplos:
Imagen → vector de intensidades de píxeles.
Texto → vector de embeddings (ej. Word2Vec, BERT).
Audio → vector de amplitudes o espectros de frecuencia.

Esto permite que datos tan diferentes se unifiquen en un mismo lenguaje matemático


2. Cálculos eficientes

Los vectores permiten operaciones rápidas en GPU/TPU, como:

Producto punto: mide similitud (coseno entre vectores → usado en búsqueda semántica).
Norma (longitud): mide magnitud o importancia.
Suma y resta: combinaciones lineales de información (ej. "rey – hombre + mujer ≈ reina").

Estas operaciones son la base de redes neuronales y sistemas de recomendación


3. Geometría en el aprendizaje

Los vectores viven en espacios de alta dimensión (100, 300, 1024, hasta 10k dimensiones).

Conceptos como distancia, ángulos, proyecciones y subespacios permiten:
Clasificación (separar datos en espacios distintos).
Clustering (agrupar vectores similares).
Reducción de dimensionalidad (PCA, t-SNE, UMAP).

Ejemplo: en embeddings de palabras, las palabras con significado parecido quedan cercanas en el espacio vectorial


4. Base de las redes neuronales

En cada capa de una red neuronal, la entrada se representa como un vector.
Cada neurona aplica una transformación lineal (multiplicación de matriz por vector) + una función no lineal.
El flujo de datos por toda la red es esencialmente un cálculo vectorial repetido y ajustado.
Por eso, entrenar una red neuronal equivale a optimizar cómo los vectores de pesos transforman los vectores de entrada.


5. Optimización y gradientes

El gradiente de una función (usado en entrenamiento con backpropagation) es en sí un vector.
Este vector indica hacia dónde mover los parámetros del modelo para mejorar el aprendizaje.
Sin vectores, no podríamos aplicar descenso de gradiente ni ajustar modelos


Rs vectores: 

Permiten representar datos complejos en forma numérica.
Facilitan operaciones matemáticas rápidas.
Dan sentido geométrico (distancia, similitud, dirección).
Son la estructura interna de redes neuronales y optimización 

Los vectores son el lenguaje universal de la AI.
Todo (texto, imágenes, audio, usuarios, decisiones) termina siendo un vector en algún punto del modelo



### Operaciones

La AI (Inteligencia Artificial) se apoya en una base matemática muy amplia. 

Aunque las matrices y el álgebra lineal son centrales, hay otros conceptos y operaciones matemáticas que son igual de cruciales

1. Álgebra lineal

Operaciones:

Multiplicación de matrices y vectores.
Producto punto y producto cruzado.
Descomposición en valores singulares (SVD).
Autovalores y autovectores (usados en PCA).
Uso en AI: representación de datos, redes neuronales, embeddings, optimización de modelos


2. Cálculo diferencial e integral

Operaciones:

Derivadas parciales.
Gradiente.
Hessiana (segunda derivada en múltiples variables).
Integrales en funciones de probabilidad.

Uso en AI:

Backpropagation: cálculo del gradiente para entrenar redes neuronales.
Optimización de funciones de pérdida.
Modelos probabilísticos


3. Probabilidad y estadística

Conceptos:

Distribuciones de probabilidad (Normal, Bernoulli, Binomial, etc.).
Esperanza, varianza, desviación estándar.
Bayes y Teorema de Bayes.
Entropía e información mutua.

Uso en AI:

Modelado de incertidumbre.
Inferencia bayesiana.
Regularización y estimación de parámetros.
Modelos generativos (VAEs, GANs).


4. Optimización

Conceptos:

Descenso de gradiente y variantes (SGD, Adam, RMSProp).
Funciones convexas y no convexas.
Convergencia y mínimos locales/globales.
Uso en AI: encontrar los mejores parámetros que minimizan la función de pérdida en entrenamiento


5. Teoría de la información

Conceptos:

Entropía H(x)
Divergencia de Kullback–Leibler (KL).
Cross-entropy (entropía cruzada).

Uso en AI:

Funciones de pérdida en clasificación.
Regularización de distribuciones.
Transformers y modelos de lenguaje


6. Geometría y espacios vectoriales

Conceptos:

Espacios métricos.
Distancias (Euclídea, Manhattan, Coseno).
Proyecciones en subespacios.

Uso en AI:

Embeddings (palabras, imágenes, usuarios).
Modelos de clustering (k-means).
Redes neuronales convolucionales (transformaciones geométricas).


7. Análisis numérico

Conceptos:

Métodos iterativos.
Aproximaciones numéricas.
Estabilidad numérica y error de redondeo.

Uso en AI:

Entrenamiento estable en GPUs/TPUs.
Algoritmos que deben manejar enormes volúmenes de datos sin perder precisión


8. Teoría de grafos

Conceptos:

Nodos y aristas.
Caminos y conectividad.
Propagación en grafos.

Uso en AI:

Graph Neural Networks (GNN).
Redes sociales, biología, química computacional


9. Análisis de señales y transformadas

Conceptos:

Series de Fourier.
Transformada rápida de Fourier (FFT).
Wavelets.

Uso en AI:

Procesamiento de imágenes y audio.
Reconocimiento de voz.
Compresión y filtrado de datos.


Rs:

Álgebra lineal y cálculo → núcleo de redes neuronales.
Probabilidad, estadística y teoría de la información → manejo de incertidumbre y aprendizaje.
Optimización → entrenamiento de modelos.
Geometría y grafos → representación estructural de datos.
Análisis numérico y de señales → estabilidad y procesamiento eficiente




# Hard

## Data Analysis / Machine Learning (Python, R, TensorFlow, PyTorch, Spark, etc.)

CPU:

Data wrangling y cálculos estadísticos → beneficia muchos núcleos (12–32).
Análisis intensivos (ej. pandas, Spark local) también dependen de alta RAM (32–128GB).
Ejemplo: Ryzen 9, Intel i9, Xeon, EPYC.

GPU:

Machine learning y redes neuronales → GPU es crítica.
Importan núcleos CUDA/Tensor (NVIDIA es estándar).

VRAM define batch size y complejidad del modelo:
8GB VRAM mínimo (modelos básicos)
16–24GB (deep learning, NLP, visión por computadora)
48GB+ (H100, A100, MI300) para grandes LLMs / big data).


## Sever

Pensado para funcionar 24/7, ser estable y escalable, no solo “ser potente”.

1. Gama baja y gama media, en general (aplicables a hosting web, bases de datos, pequeñas cargas de análisis, virtualización básica).

CPU:
4–8 núcleos / 8–16 hilos.
Frecuencia decente (3.0–3.8 GHz).
Ejemplo: Intel Xeon E-2300, Xeon Silver, AMD EPYC 3101/3201, Ryzen 5/7 PRO.

RAM:
16–32GB ECC (obligatorio en servidores → evita corrupción de datos).
Escalable a 64GB si se usan varias VMs o bases de datos medianas.

Almacenamiento:
2× SSD NVMe (1TB cada uno) en RAID 1 (espejo) para redundancia.
Opcional: HDD SATA de 2–4TB para backups.

GPU:
No siempre necesaria en servidores de entrada.
Si se requiere aceleración (render, ML básico): NVIDIA T400/T600 o incluso una RTX 3060.

Red:
1× Gigabit Ethernet (1GbE).
Opción de 2.5GbE si se conecta a red interna rápida.

Fuente / Chasis:
400–500W con certificación 80+ Gold.
Chasis rack 1U o torre básica.

Ideal para:
Hosting de sitios web.
Servidor de archivos.
Virtualización ligera (2–3 máquinas virtuales).
Pequeñas bases de datos.
Proyectos de desarrollo y pruebas internas.


2. Servidor Gama Media (empresa mediana / producción moderada)

CPU: 
12–24 núcleos / 24–48 hilos.
Buen equilibrio entre multinúcleo y frecuencia (2.5–3.5 GHz).
Ejemplo: AMD EPYC 7313/7402, Intel Xeon Silver 4314, Xeon Gold 5317.

RAM:
64–128GB ECC DDR4/DDR5.
Escalable a 256GB según la carga.

Almacenamiento:
2× SSD NVMe (1–2TB) en RAID 1 para sistema.
4–8× SSD/HDD en RAID 5 o RAID 10 para almacenamiento de datos.
Controladora RAID dedicada con caché.

GPU (opcional según uso):
Para cargas de ML/render: NVIDIA RTX A4000/A5000 o Tesla T4/A10.
Si es solo servidor de datos, no hace falta GPU potente.

Red:
2× 10GbE o 4× 1GbE con bonding.
Importante para mover datasets grandes o muchas conexiones simultáneas.

Fuente / Chasis:
Redundancia de energía (2× PSU hot-swappable 750–1000W 80+ Platinum).
Rack 2U con ventilación y hot-swap para discos.

Ideal para:
Servidores de bases de datos medianas (Postgres, SQL Server, Oracle).
Virtualización (10–20 máquinas virtuales).
Análisis de datos intermedio.
Render distribuido en red.
Servidor de archivos centralizado con alta disponibilidad.
ERP/CRM de PyME con decenas/centenas de usuarios

| Característica     | Gama Baja                           | Gama Media                           |
| ------------------ | ----------------------------------- | ------------------------------------ |
| 	CPU              | 4–8 núcleos                         | 12–24 núcleos                        |
| 	RAM              | 16–32GB ECC                         | 64–128GB ECC                         |
| 	Almacenamiento   | 2× SSD NVMe (RAID 1) + HDD opcional | NVMe RAID 1 + 4–8 discos RAID 5/10   |
| 	GPU              | No necesaria / GPU básica           | Opcional, RTX A4000+ o Tesla para ML |
| 	Red              | 1GbE                                | 2×10GbE o 4×1GbE                     |
| 	Fuente           | 1× PSU 400–500W                     | Redundante 750–1000W                 |
| 	Chasis           | Torre o rack 1U                     | Rack 2U con hot-swap                 |

Servidor de gama baja = económico, simple, fiable para tareas básicas.

Servidor de gama media = ya es un “workhorse”, pensado para producción real, más usuarios, más VMs y más seguridad (RAID + PSU redundante + 10GbE).


3. Servidor de gama alta / enterprise (datacenters, cargas críticas, big data, virtualización masiva y aplicaciones de misión crítica)

Estos equipos priorizan redundancia, escalabilidad, uptime (99.99%+), y soporte a gran cantidad de usuarios/procesos concurrentes.

Pensado para grandes empresas, HPC, IA avanzada y producción crítica 24/7


CPU:
32–128 núcleos por socket (dependiendo del modelo).
2–4 sockets posibles → hasta 512 hilos en un solo servidor.

Ejemplos:
AMD EPYC 9004 “Genoa” (96 núcleos por CPU, DDR5, PCIe 5.0).
Intel Xeon Scalable 4ª Gen (Sapphire Rapids) (hasta 60 núcleos por CPU, AVX-512, AMX).

Perfectos para virtualización masiva, bases de datos distribuidas, y cálculo intensivo.


RAM:
512GB – 2TB ECC DDR5, con opción a 4TB–12TB en configuraciones de 4 sockets.
Uso de memoria RDIMM/LRDIMM con ECC y corrección avanzada.
Crucial para big data, IA y miles de usuarios concurrentes.


Almacenamiento:
Sistema operativo:
2× SSD NVMe (960GB–2TB) en RAID 1.

Datos / proyectos:
8–24× discos SSD/HDD en RAID 10 / RAID 6, conectados a controladora RAID con caché y batería.
Opcional: All-flash arrays NVMe (altísima velocidad).
Integración con SAN/NAS o almacenamiento distribuido (Ceph, GlusterFS).


GPU:
Para IA/ML/HPC:
NVIDIA A100 / H100 (40GB–80GB HBM2e).
Opción enterprise: NVIDIA L40S, A40, RTX 6000 Ada

Para render distribuido: clusters con varias GPUs.
Si es solo servidor de datos → no requiere GPU.


Red:
2× 25GbE o 100GbE (Ethernet de alto rendimiento).
Opcional: Infiniband HDR/NDR (200–400Gb/s) en HPC e IA.
Multipath y bonding para redundancia y balanceo de carga.


Fuente y Chasis:
PSU redundante: 2× o 4× unidades hot-swappable (1600–3000W, 80+ Platinum/Titanium).
Chasis rack 2U/4U con soporte hot-swap para discos, ventilación de alta densidad.
Hot-swap también en ventiladores y módulos de energía

Extras Enterprise
BMC / iDRAC / iLO → administración remota fuera de banda (monitorización y encendido remoto).
Soporte para clustering (HA: alta disponibilidad).
Certificación Tier III o IV de datacenter.
Opcional: refrigeración líquida directa o inmersión (HPC/AI).


Ideal para:
Bases de datos empresariales críticas (Oracle, SAP HANA, SQL Server de gran escala).
Virtualización masiva (VMware, Proxmox, Hyper-V, KVM con decenas o cientos de VMs).
Big Data & IA (Spark, TensorFlow, PyTorch, LLMs).
HPC (High Performance Computing).
Render farms / VFX a gran escala.
ERP/CRM para miles de usuarios concurrentes.


| Característica     |   Gama Baja                  |   Gama Media                     |   Gama Alta / Enterprise             |
| ------------------ | ---------------------------- | -------------------------------- | ------------------------------------ |
| 	CPU              | 4–8 núcleos                  | 12–24 núcleos                    | 32–128 núcleos (2–4 sockets)         |
| 	RAM              | 16–32GB ECC                  | 64–128GB ECC                     | 512GB–2TB+ ECC                       |
| 	Almacenamiento   | 2× SSD RAID 1 + HDD opcional | NVMe RAID 1 + 4–8 discos RAID 10 | 8–24 discos RAID 10/6 + SAN/NAS      |
| 	GPU              | Básica (opcional)            | RTX A4000/A5000 opcional         | A100/H100, RTX 6000, Tesla           |
| 	Red              | 1GbE–2.5GbE                  | 10GbE (2×)                       | 25–100GbE / Infiniband               |
| 	Fuente           | 1× PSU 400–500W              | 2× PSU redundante 750–1000W      | 2–4× PSU redundantes 1600–3000W      |
| 	Chasis           | Torre o 1U                   | Rack 2U con hot-swap             | Rack 2U–4U enterprise, full hot-swap |

Baja → desarrollo, PyME chica, hosting básico.
Media → empresa mediana, producción confiable, virtualización seria.
Alta/Enterprise → datacenter, misión crítica, IA/HPC, gran escala.


### Refrigeración líquida directa o inmersión (HPC/AI)

Técnicas especiales de enfriamiento que usan los servidores de gama muy alta (datacenters, HPC, IA) cuando el calor generado por los CPUs y GPUs es tan grande que los ventiladores y aire acondicionado tradicionales ya no alcanzan.


1. Refrigeración líquida directa (Direct-to-Chip Liquid Cooling)

En vez de disipadores de aire con ventiladores, se usan bloques de agua (como en PCs gamers) conectados directamente al CPU y GPU.
El agua o un líquido refrigerante circula por tuberías → extrae el calor y lo lleva a un sistema de intercambio (radiador o chiller).

Esto reduce mucho la temperatura y permite que los procesadores funcionen a plena carga durante más tiempo.
Ejemplo: servidores con NVIDIA A100/H100 o CPUs de 96 núcleos EPYC, que generan cientos de watts cada uno.

Usado en datacenters de IA y supercomputadoras porque mejora la eficiencia energética y el rendimiento


3. Refrigeración por inmersión (Immersion Cooling)

El servidor completo (placa madre, CPU, GPU, RAM, etc.) se sumerge en un líquido dieléctrico (no conduce electricidad).
Ese líquido absorbe el calor directamente de todos los componentes.
Luego se enfría con intercambiadores de calor y bombas.

Puede ser:
1 fase: el líquido se calienta y se enfría en un circuito cerrado.
2 fases: el líquido se evapora y condensa (como un aire acondicionado líquido).

Es extremadamente eficiente, silencioso y permite densidad muy alta (muchos servidores en poco espacio).
Muy usado en HPC (High Performance Computing) y IA avanzada (por ejemplo, entrenamiento de modelos grandes tipo LLM).


| Método                  | Cómo funciona                                  | Dónde se usa                                                   |
| ----------------------- | ---------------------------------------------- | -------------------------------------------------------------- |
| Aire (convencional)     | Ventiladores + AC del datacenter               | Servidores normales                                            |
| Líquido directo         | Bloques de agua en CPU/GPU + tuberías          | HPC, IA, clusters de GPU                                       |
| Inmersión               | Todo el servidor dentro de líquido dieléctrico | Supercomputadoras, IA masiva, datacenters de última generación |

Direct-to-chip = enfriás solo CPU/GPU con agua.
Inmersión = enfriás todo el servidor metiéndolo en un “piscina” de líquido especial.


## IA/HPC

Ambos requieren cómputo intensivo, pero tienen objetivos distintos.


### HPC (High Performance Computing)

##### Objetivo: resolver problemas científicos, matemáticos o de ingeniería extremadamente complejos.

Carga típica:
##### Simulaciones físicas (clima, dinámica de fluidos, aerodinámica).
Modelado molecular (química, biología, farmacología).
Cálculos de ingeniería estructural.
Análisis numérico masivo.

Hardware característico:
CPUs masivos (miles de núcleos en paralelo).
Redes Infiniband de muy baja latencia para interconectar nodos.
GPUs también se usan, pero orientadas al cálculo científico (CUDA, OpenCL).

##### Enfoque: precisión numérica, escalabilidad en clusters enormes, estabilidad.


IA (Artificial Intelligence)

##### Objetivo: entrenar y ejecutar modelos de machine learning y deep learning.

Carga típica:
Entrenamiento de redes neuronales profundas (visión por computadora, NLP, LLMs).
Inferencia en tiempo real.
##### Procesamiento masivo de datos no estructurados (imágenes, texto, audio).

Hardware característico:
GPUs con núcleos Tensor (NVIDIA A100/H100, RTX Ada, etc.).
VRAM muy alta (24–80GB por GPU).
Redes rápidas, pero el cuello suele estar en memoria GPU y ancho de banda.

##### Enfoque: paralelización de operaciones matriciales, throughput de datos, rapidez en entrenamiento


| Aspecto             | HPC                                       	  | IA 	                                              |
| ------------------- | --------------------------------------------- | ------------------------------------------------- |
| Meta           	  | Ciencia, simulaciones, ingeniería             | Entrenamiento y uso de modelos ML/DL              |
| Tipo de cálculo	  | Precisión numérica, doble precisión (FP64)    | Operaciones tensoriales, FP16 / BF16 / INT8       |
| CPU/GPU             | CPU multinúcleo + GPUs científicas            | GPUs especializadas (Tensor cores, HBM)           |
| Memoria             | Mucha RAM por nodo (TBs)                      | Mucha VRAM en GPU (24–80GB+)                      |
| Red	              | Infiniband ultrarrápida (baja latencia)       | Alto ancho de banda para datasets                 |
| Ejemplos de uso     | Modelado climático, física cuántica, genómica | LLMs, visión computacional, traducción automática |


Ej:

1. Servidor HPC (High Performance Computing)

Objetivo: simulaciones científicas, ingeniería, modelado climático, cálculos físicos de alta precisión. 


CPU:

2× AMD EPYC 9654 (96 núcleos cada uno, 192 hilos en total).
Muchísimos núcleos para cálculos paralelos.
Soporte a FP64 (doble precisión), clave en ciencia.

RAM:
2TB DDR5 ECC (RDIMM/LRDIMM).
Alta capacidad para simulaciones que cargan datasets completos en memoria.

GPU (opcional):
NVIDIA A40 o AMD MI210 → GPUs científicas con fuerte rendimiento en FP64.
No siempre GPU es necesaria; muchos HPC se basan en CPU puro.

Red:
Infiniband HDR 200Gb/s para interconexión entre nodos.
Latencia bajísima para clusters.

Almacenamiento:

2× SSD NVMe (1TB) RAID 1 para SO.
8× SSD/HDD (RAID 10) para datos temporales.
Acceso a parallel file system (ej. Lustre, BeeGFS).

Ejemplo real: HPE Apollo 2000, Lenovo ThinkSystem SD665, Dell PowerEdge C6525


2. Servidor IA (Deep Learning / Machine Learning)

Objetivo: entrenamiento de LLMs, visión por computadora, NLP, inferencia masiva.

CPU:
2× Intel Xeon Scalable 8480+ (56 núcleos cada uno).
Sirve más como “alimentador de datos” a las GPUs.

GPU:

8× NVIDIA H100 (80GB HBM3 cada una) conectadas por NVLink/NVSwitch.
Núcleos Tensor especializados para entrenamiento en FP16, BF16, INT8.
Capacidad masiva de VRAM → batch sizes enormes.

RAM:
1TB DDR5 ECC (para manejar los datasets en CPU antes de pasar a GPU).

Red:
Infiniband NDR 400Gb/s → ancho de banda brutal para clusters de GPUs.

Almacenamiento:
2TB NVMe RAID 1 para SO.
8TB NVMe Gen4 (muy rápido) para datasets.

Opcional: almacenamiento distribuido (Ceph o Lustre) si se entrena con decenas de nodos.

Ejemplo real: NVIDIA DGX H100, Supermicro SuperServer 8×GPU, Dell PowerEdge XE9680


| Componente  | HPC (científico)                    |   IA (machine learning)                 |
| ----------- | ----------------------------------- | --------------------------------------- |
| CPU         | Muchísimos núcleos, alto FP64       | CPU fuerte, pero secundario a GPU       |
| GPU         | Opcional, prioriza FP64             | Esencial, 4–8 GPUs con VRAM 40–80GB     |
| RAM         | 1–2TB+ ECC                          | 512GB–1TB ECC                           |
| Red         | Infiniband baja latencia            | Infiniband altísimo ancho de banda      |
| Enfoque     | Precisión numérica (simular física) | Throughput tensorial (entrenar modelos) |


##### El HPC depende de CPU muy potentes + mucha RAM + redes de baja latencia.

##### La IA depende de GPU monstruosas + VRAM masiva + ancho de banda de red.


3. HPC+IA

Un mismo clúster sirve tanto para simulaciones científicas tradicionales (HPC) como para entrenamiento de IA a gran escala.

CPU:
2× AMD EPYC 9654 (96 núcleos cada uno) o Intel Xeon Max 9480 (con memoria HBM integrada).
Muchos núcleos para simulaciones HPC.
Buen throughput de datos para alimentar GPUs en IA.

GPU:
4–8× NVIDIA H100 SXM (80GB HBM3) con NVLink/NVSwitch.
Cada GPU sirve para IA (núcleos Tensor) y también soporta cargas HPC (FP64).
Alternativa: AMD MI300X (192GB HBM3) → pensado para IA y cómputo científico a la vez

RAM:
1–2TB DDR5 ECC en CPU.
Crucial para HPC (simulaciones que corren en RAM masiva).
También almacena datasets antes de pasarlos a GPU

Red:
Infiniband NDR 400Gb/s o Ethernet 200–400GbE.
Baja latencia (HPC) + altísimo ancho de banda (IA).
Escalable para interconectar miles de nodos en un supercomputador

Almacenamiento:
Sistema operativo: 2TB NVMe en RAID 1.
Datos: All-flash NVMe en RAID 10 (20–100TB).
Clúster distribuido: acceso a almacenamiento paralelo tipo Lustre o BeeGFS


Características extra:

Refrigeración líquida directa o inmersión, ya que cada nodo puede consumir 3–5 kW.

Gestión unificada con software de orquestación:
Slurm para HPC.

Kubernetes + NVIDIA NGC para IA.
Posible integración: corren jobs de HPC y entrenamiento de IA en la misma infraestructura


| Aspecto        | HPC puro                          	 | IA pura	                          | Híbrido HPC+IA                                                              |
| -------------- | ------------------------------------- | ---------------------------------- | --------------------------------------------------------------------------- |
| CPU        	 | Protagonista, muchos núcleos FP64     | Secundaria, alimenta GPU           | Balanceado, CPU fuerte + GPU top                                            |
| GPU        	 | Opcional, FP64 científico             | Crítica, Tensor Cores, VRAM masiva | GPUs que hacen IA **y** HPC                                                 |
| RAM        	 | Muchísima (1–4TB)                     | Mucha pero menor (512GB–1TB)       | 1–2TB ECC (para ambos usos)                                                 |
| Red        	 | Baja latencia (Infiniband)            | Altísimo ancho de banda            | Combina: NDR 400Gb/s                                                        |
| Uso típico 	 | Clima, física, biología computacional | LLMs, visión por computadora, NLP  | Clima + IA climática, física + IA predictiva, simulaciones híbridas 	    |


Ej reales de híbridos HPC+IA: 

1. Frontier (Oak Ridge, EE.UU.): Supercomputadora N°1 del mundo (2025), usa AMD EPYC + AMD Instinct MI250X, sirve para HPC clásico y entrenamiento IA.

2. Leonardo (Italia): combina HPC con GPUs NVIDIA para IA científica.

3. MareNostrum 5 (España): integra HPC con IA para proyectos europeos de investigación.


## AI: paralelización de operaciones matriciales, throughput de datos, rapidez en entrenamiento

Los conceptos de HPC (paralelismo, escalabilidad, optimización, etc.) son fundamentales para la Inteligencia Artificial (AI) porque el entrenamiento y la ejecución de modelos modernos requieren un poder de cómputo enorme, especialmente en redes neuronales profundas

1. Paralelismo

En AI, la mayor parte del cómputo son operaciones matriciales y vectoriales (ej. multiplicación de matrices en redes neuronales).
Estos cálculos son altamente paralelizables: pueden dividirse en miles de operaciones pequeñas que se ejecutan en paralelo.
##### GPUs, TPUs y clusters HPC permiten ejecutar millones de operaciones en simultáneo, reduciendo días de entrenamiento a horas.


2. Escalabilidad

##### Los modelos de AI crecen constantemente en tamaño (GPT, LLaMA, etc., con cientos de miles de millones de parámetros).
##### Sin escalabilidad, un solo servidor no puede entrenar estos modelos.
##### Clusters HPC permiten repartir datos y parámetros en miles de GPUs coordinadas.
Conceptos como la Ley de Amdahl/Gustafson ayudan a medir hasta dónde vale la pena escalar


3. Optimización del rendimiento

En AI, mover datos entre CPU ↔ GPU ↔ memoria ↔ disco puede ser un cuello de botella.
HPC aporta técnicas de:
Vectorización (aprovechar SIMD en CPU/GPU).
##### Balanceo de carga (dividir tareas entre nodos sin que algunos queden ociosos).
Tuning del hardware/software para maximizar FLOPs (operaciones en coma flotante).
Esto significa menos tiempo y menos energía por entrenamiento


4. Sistemas y Middleware

Entrenar IA a gran escala requiere gestionar trabajos distribuidos en clusters con miles de nodos.
Aquí entran planificadores como SLURM y librerías de AI distribuidas (Horovod, DeepSpeed, Megatron-LM).
Sin estos conceptos de HPC, no sería posible coordinar tantos recursos


5. Gestión de Datos

##### AI consume y produce datasets masivos (terabytes o petabytes -1 millón de gb-).

HPC aporta:
Sistemas de archivos paralelos para entrenar a múltiples GPUs sin cuello de botella en I/O.
Data locality: mover el cómputo cerca de los datos para minimizar transferencias lentas.
Ejemplo: en visión por computadora, entrenar con millones de imágenes solo es viable con almacenamiento paralelo


6. Aplicaciones conjuntas HPC + AI

HPC acelera AI → entrenamiento y despliegue más rápido.
AI potencia HPC → optimización automática de simulaciones científicas.
Áreas como climatología, biología, ingeniería ya usan AI sobre infraestructuras HPC

Los conceptos de HPC son el corazón del rendimiento en AI. Sin paralelismo, escalabilidad, optimización y buena gestión de datos, entrenar modelos modernos de AI sería imposible en la práctica


## HPC: precisión numérica, escalabilidad en clusters enormes, estabilidad.

##### Determinan si un cálculo científico o industrial puede ser útil, reproducible y eficiente


1. Precisión numérica

##### En HPC se hacen cálculos con números muy grandes o muy pequeños (ej. simulaciones de dinámica de fluidos, física de partículas, clima).
##### Un pequeño error de redondeo puede acumularse en millones de iteraciones → resultados totalmente incorrectos.

Por eso HPC necesita:
Aritmética de doble o múltiple precisión.
Control de errores de redondeo y estabilidad numérica.
Algoritmos matemáticos que reduzcan pérdida de precisión.
Ejemplo: en simulaciones de clima, una diferencia minúscula puede cambiar la predicción de un huracán


2. Escalabilidad en clusters enormes

##### La HPC moderna usa miles o millones de núcleos de CPU/GPU.
##### El reto no es solo resolver el problema, sino dividirlo bien entre nodos sin perder eficiencia.
##### Escalabilidad significa que al duplicar recursos, el rendimiento casi se duplica.

Problemas:
Latencia de comunicación entre nodos.
##### Balanceo de carga (que todos los procesadores trabajen por igual).
Algoritmos distribuidos (MPI, OpenMP, CUDA Multi-Node).
##### Sin buena escalabilidad, aunque tengas el supercomputador más potente, gran parte quedará ociosa


3. Estabilidad

##### En HPC, los cálculos suelen ejecutarse por semanas o meses.

Se necesita:
##### Tolerancia a fallos: que un fallo en un nodo no arruine todo el cálculo.
##### Checkpointing: guardar estados intermedios para recuperar trabajos largos.
##### Confiabilidad del hardware y software en clústeres enormes.
##### Sin estabilidad, perderías tiempo, energía y millones de dólares en cómputo.
Ejemplo: una simulación de mecánica cuántica que falla al día 29 de 30 sin poder recuperarse → desastre


Rs:
 
Precisión numérica asegura que los resultados sean correctos y científicos.
Escalabilidad permite aprovechar al máximo la enorme infraestructura de HPC.
Estabilidad garantiza que los cálculos lleguen a término sin pérdidas.




# Soft




# ML/DL


## Campo de estudio



# HPC

## Definición

##### Uso de sistemas de cómputo avanzados, como supercomputadoras o clusters de servidores, para realizar cálculos extremadamente complejos o pesados de manera mucho más rápida que con equipos convencionales.

Disciplina y práctica de agrupar recursos computacionales (CPU, GPU, memoria, almacenamiento, redes) para:

1. Procesar grandes volúmenes de datos.

2. Resolver problemas científicos, industriales o de ingeniería.

3. Ejecutar modelos y simulaciones que requieren enorme capacidad de cálculo.


Características principales:

1. Paralelismo: divide el trabajo en miles o millones de tareas que se ejecutan en paralelo.

2. Clusters y supercomputadoras: hardware especializado con cientos o miles de nodos conectados.

3. Escalabilidad: se adapta al tamaño del problema, desde unos pocos nodos hasta miles.

4. Rendimiento en FLOPS: capacidad medida en Floating Point Operations per Second


Uso de HPC:

1. Ciencia y simulaciones físicas → clima, astrofísica, dinámica de fluidos.

2. Ingeniería → diseño de aviones, autos, materiales.

3. Bioinformática → secuenciación genética, descubrimiento de fármacos.

4. Inteligencia Artificial → entrenamiento de modelos masivos de Machine Learning y Deep Learning.

5. Finanzas → modelado de riesgos y trading algorítmico a gran escala.

##### HPC usa mucha capacidad de cómputo en paralelo para resolver problemas que una PC común no podría abordar en tiempo razonable.


## Campo de estudio

Se nutre de varios campos de estudio interconectados.

1. Arquitectura y Hardware

Diseño de supercomputadoras y clusters.
CPU multinúcleo y GPU de cómputo (ej. NVIDIA, AMD, Intel).
Memorias de alto ancho de banda (HBM, DDR5, NVRAM).
Redes de interconexión rápida (InfiniBand, Omni-Path, NVLink).
Sistemas de almacenamiento masivo y distribuido.


2. Sistemas Operativos y Middleware

Gestión de recursos (procesadores, memoria, I/O).
Sistemas distribuidos y virtualización ligera.
Planificadores de trabajos (job schedulers): SLURM, PBS, HTCondor.
Seguridad y gestión de usuarios en clusters


3. Modelos de Programación y Software

Programación paralela: OpenMP (multihilo), MPI (paralelismo distribuido), CUDA/HIP (GPUs).
Lenguajes de HPC: C, C++, Fortran, Python (con librerías como NumPy, Dask, PyTorch).
Optimización de algoritmos para arquitecturas específicas.
Compiladores y herramientas de profiling para rendimiento 


4. Matemática Computacional

Álgebra lineal numérica (base de casi toda simulación).
Métodos numéricos para resolver ecuaciones diferenciales.
Optimización matemática en gran escala.
Estadística y probabilidad para simulaciones Monte Carlo


5. Aplicaciones Científicas e Industriales

Física computacional (simulación de partículas, dinámica de fluidos).
Química y biología computacional (diseño de proteínas, simulación molecular).
Climatología y geofísica (predicción meteorológica, terremotos).
Ingeniería (CFD, CAD, simulación estructural).
Machine Learning y Deep Learning en gran escala


6. Gestión de Datos y Big Data

Almacenamiento distribuido (Lustre, GPFS, Ceph).
Data-intensive computing: combinar HPC + Big Data.
Optimización de flujos de datos entre CPU ↔ GPU ↔ almacenamiento. 


7. Teoría de la Computación y Escalabilidad

Modelos de paralelismo masivo.
Ley de Amdahl y Ley de Gustafson (eficiencia del paralelismo).
Modelado del rendimiento y cuellos de botella

El estudio de la HPC atraviesa hardware, software, algoritmos, matemáticas y aplicaciones científicas, con un fuerte enfoque en paralelismo, optimización y escalabilidad


## Conceptos 


### 1. Paralelismo

Concepto central en HPC.

Dividir un problema en múltiples partes que se ejecutan al mismo tiempo.

Tipos:

Paralelismo a nivel de instrucciones (vectorización, SIMD).
Paralelismo a nivel de hilos (multithreading, OpenMP).
Paralelismo distribuido (MPI en clusters).
Paralelismo en GPU (CUDA, OpenCL, HIP).


### 2. Arquitecturas de HPC

Clusters: conjunto de servidores conectados por red rápida.

Supercomputadoras: sistemas con miles/millones de núcleos optimizados.

Heterogeneidad: combinación de CPU + GPU + FPGA + aceleradores.

Memorias jerárquicas: cachés, RAM DDR, HBM, almacenamiento rápido.


### 3. Escalabilidad

Capacidad de un sistema de aumentar rendimiento al agregar más nodos.

Conceptos importantes:

Ley de Amdahl: limita la ganancia de paralelismo según la parte secuencial.

Ley de Gustafson: describe la eficiencia cuando aumentan datos y procesadores.


### 4. Modelos de Programación

MPI (Message Passing Interface): comunicación entre nodos.

OpenMP: paralelismo en memoria compartida (CPU multinúcleo).

CUDA / HIP / OpenCL: computación en GPU.

Lenguajes en HPC: C, C++, Fortran, Python (con librerías optimizadas).


### 5. Optimización del Rendimiento

Vectorización: aprovechar SIMD (Single Instruction, Multiple Data).

Balanceo de carga: distribuir tareas equitativamente entre nodos.

Minimización de latencia: optimizar comunicación entre procesos.

Profiling y tuning: medir y ajustar rendimiento del código.


### 6. Sistemas y Middleware

Job scheduling: sistemas como SLURM, PBS, HTCondor que gestionan trabajos.

Almacenamiento paralelo/distribuido: Lustre, GPFS, Ceph.

Middleware: capa intermedia que facilita el uso de clusters


### 7. Gestión de Datos

Big Data en HPC: integración de cargas de datos masivas.

Data locality: mover el cómputo cerca de los datos para eficiencia.

I/O paralelo: lectura/escritura masiva simultánea


### 8. Aplicaciones

Ciencia: simulaciones físicas, clima, astrofísica.

Biología: bioinformática, simulación de proteínas.

Ingeniería: dinámica de fluidos, CAD, materiales.

IA y Machine Learning: entrenamiento de modelos a gran escala.

Industria: finanzas, petróleo, automoción, energía


##### HPC engloba conceptos de paralelismo, arquitecturas, escalabilidad, programación, optimización, gestión de datos y aplicaciones científicas/industriales, todo bajo la meta de resolver problemas gigantescos más rápido de lo que sería posible en computación tradicional.

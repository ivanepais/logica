# Problemas

Entendido como el estudio de la resolución de problemas en términos generales

Qué es un problema, tipos (bien definidos / ill-defined / wicked), métodos (heurísticas, algoritmos, design thinking, TRIZ, RCA, PDCA), herramientas y práctica aplicada en distintos dominios (matemáticas, ingeniería, política, producto, negocio).


## Resolución de problemas

Proceso cognitivo y práctico que va desde identificar y modelar un asunto hasta diseñar, probar e implementar soluciones cuando la respuesta no es obvia.

Puede estudiarse desde la psicología, la ciencia cognitiva, la ingeniería y la gestión.


## Tipos importantes

Problemas bien definidos (objetivo y camino claro) vs mal definidos; y los llamados “wicked problems” (retorcidos/perversos)

Problemas sociales o sistémicos con requisitos incompletos, partes interesadas diversas y sin una “solución verdadera” sino opciones mejores/peores


## Metodologías sistemáticas

Desde enfoques heurísticos y algoritmos hasta marcos de diseño como design thinking (para problemas ambiguos centrados en personas) o métodos de innovación sistemática como TRIZ

También prácticas operativas como PDCA, análisis de causa raíz y 5-Whys



## Objetivos

##### 1. Clasificar problemas y escoger el enfoque correcto (algorítmico, heurístico, de diseño, sistémico).

##### 2. Aplicar al menos 6 marcos/ técnicas (Polya/heurísticas, design thinking, TRIZ, PDCA, RCA/5-Whys, modelado).

##### 3. Diseñar y ejecutar experimentos o prototipos para validar soluciones.

4. Analizar problemas complejos/“wicked” y proponer estrategias de gobernanza/acción.

5. Comunicar soluciones con evidencia y criterios de evaluación (KPIs, coste/beneficio, impacto).


# 1. Fundamentos y mentalidad

Qué es un problema; mentalidad (curiosidad, descomposición, hipótesis).

Lectura corta: artículos intro sobre resolución de problemas y clasificación

Ejercicio: escoger 3 problemas cotidianos (uno técnico, uno interpersonal, uno organizacional). Descomponer cada uno en metas, restricciones y supuestos.


## Fundamentos

Problema, sus partes, cómo pensar sobre él y las herramientas mentales básicas para abordarlo.


### 1. Problema

##### Situación en la que existe una diferencia entre el estado actual y un estado deseado

##### No hay una acción obvia que lleve directamente del primero al segundo

#### Objetivo (qué quieres lograr).

#### Estado actual (qué está ocurriendo ahora).

#### Restricciones (recursos, tiempo, normas, efectos secundarios).

#### Criterios de éxito (cómo vas a juzgar que la solución funciona).


### 2. Componentes esenciales

#### Datos / hechos: lo conocido y verificable.

#### Supuestos: lo dado por sentado (hay que identificar y cuestionar).

#### Variables controlables: lo que puedes cambiar.

#### Stakeholders: quiénes se ven afectados o deciden.

#### Riesgos e incertidumbres: eventos que pueden invalidar la solución.


### 3. Tipos de problemas (para elegir enfoque)

#### Bien definidos (tame): meta y pasos claros (p. ej. resolver una ecuación). 
##### Se resuelven con algoritmos.

#### Mal definidos / ambiguos: objetivo o restricciones poco claras (p. ej. “mejorar la satisfacción del cliente”). 
##### Requieren investigación y diseño iterativo.

#### Wicked (retorcidos): múltiples stakeholders, sin solución única “correcta” (p. ej. pobreza, cambio climático). 
##### Requieren gobernanza, negociación y experiments sociales.

#### Técnicos vs. sociales: problemas puramente formales vs. problemas que involucran comportamiento humano.


### 4. Formalizar un problema (por qué y cómo)

##### Formalizar obliga a aclarar supuestos y medir progreso

#### 1. Escribe el estado actual y el objetivo en una frase.

#### 2. Lista restricciones y recursos.

#### 3. Define criterios de éxito (métricas).

#### 4. Identifica incertidumbres y qué datos faltan.

#### 5. Si es posible, transforma a un modelo (ecuación, grafo, simulación).


### 5. Espacio de soluciones y complejidad

#### Espacio de soluciones: todas las alternativas posibles; puede ser finito o enorme.

#### Complejidad: algunos problemas (NP-hard, combinatorios) no admiten una solución perfecta en tiempo razonable; en esos casos usamos heurísticas, aproximaciones o relajaciones.

#### Trade-offs: costo vs. beneficio, rapidez vs. robustez, corto vs. largo plazo.


### 6. Criterios para una buena solución

#### Eficacia: cumple el objetivo.

#### Eficiencia: usa recursos razonablemente.

#### Robustez: tolera variaciones/incertidumbre.

#### Escalabilidad: funciona si aumentan escala o carga.

#### Aceptabilidad: stakeholders la aceptan/paguen por ella.


### 7. Estrategias básicas para resolver problemas

#### Descomponer: dividir en subproblemas manejables.

#### Reformular: cambiar la representación (ej. de texto a diagrama).

#### Buscar analogías: aplicar soluciones de dominios similares.

#### Heurísticas: reglas prácticas (“divide y vencerás”, “greedy”, “buscar localmente”).

#### Modelar + medir: convertir a modelo testable y validar con datos.

#### Iterar rápido: prototipo → test → aprender → mejorar.

#### Negociar / diseñar políticamente: para problemas con múltiples intereses.


### 8. Errores cognitivos a evitar

#### Confirmación: buscar sólo evidencia que apoya tu idea.

#### Fijación funcional: quedarse atrapado en una forma de usar recursos.

#### Exceso de simplificación: ignorar variables críticas.

#### Parálisis por análisis: postergar decisión buscando más datos sin límite.

#### Pensamiento de grupo: suprimir objeciones para mantener consenso.


### 9. Evaluar

Define métricas claras antes de actuar.

Haz experimentos pequeños y medibles (pruebas A/B, pilotos).

Registra resultados y haz post-mortems (¿qué funcionó/qué no?).

Documenta supuestos que resultaron falsos.


### 10. Checklist

1. ¿Cuál es el objetivo, en una frase?

2. ¿Cómo sabré que lo logré (métrica)?

3. ¿Qué restricciones hay?

4. ¿Qué supuestos tengo que verificar?

5. ¿Puedo dividirlo en subproblemas?

6. ¿Qué modelo/analogía puede aplicar?

7. ¿Cuál es el experimento mínimo para probar una idea?

8. ¿Quiénes deben estar involucrados y cuándo?


### 11. Ej - Ejerc

Toma un problema cotidiano (p. ej. “pierdo tiempo en el email”): escribe objetivo, 3 supuestos, 2 métricas y 1 experimento para 1 semana.

Reformula un problema: convierte “mejorar la moral del equipo” en métricas concretas y acciones pilotables.

Descompón un problema técnico grande (ej. optimizar entrega) en 5 subproblemas encadenados.


### Rs

##### Un problema no es sólo “algo malo a arreglar”: es una estructura con objetivos, restricciones, supuestos y stakeholders

##### Los buenos solucionadores formalizan, miden, iteran y gestionan trade-offs, evitando sesgos cognitivos y priorizando experimentos rápidos que prueben hipótesis.


## Mentalidad (curiosidad, descomposición, hipótesis)

##### Permiten ver bien el mapa del problema, partirlo en trozos manejables y avanzar con pruebas rápidas en vez de suposiciones


### 1. Curiosidad

#### Disposición activa a preguntar, dudar de lo obvio y buscar por qué las cosas son como son. 

No es curiosidad ociosa: es dirigida hacia la comprensión útil.


Técnicas:

##### Pregunta “¿por qué?” cinco veces (no como ritual, sino para alcanzar causas y supuestos).

##### Usa preguntas abiertas: ¿qué ocurre si…? ¿por qué ahora? ¿para quién importa esto?

##### Practica la curiosidad adversarial: imagina la explicación opuesta y búscala.

Mantén un “cuaderno de preguntas”: anota 1–3 preguntas sobre lo que estudias cada día.

Ejemplo corto: no aceptar “el sistema está lento” → preguntar: ¿desde cuándo? ¿afecta a todos? ¿solo picos? ¿qué cambió recientemente?


### 2. Descomposición — dividir para conquistar 

#### Partir un problema complejo en subproblemas más simples y manejables (top-down) o construir desde lo pequeño hacia lo grande (bottom-up).

#### Top-down: escribe el objetivo final y separa 3–6 subobjetivos necesarios.

#### MECE (Mutuamente Exclusivos, Colectivamente Exhaustivos): procura que las partes no se solapen y cubran todo el terreno.

#### Mapas mentales / diagramas de flujo / árboles de decisión: visualiza dependencias.

#### Identificar cuellos de botella: pregunta “¿qué parte, si falla, impide todo lo demás?” y prioriza.

Ej: problema: “baja conversión en el checkout” → subproblemas: tráfico, intención, experiencia de checkout, bugs de pago, confianza del usuario.


### 3. Hipótesis — convertir intuición en experimentos

#### Formular suposiciones claras y testables sobre causas o soluciones, con criterios que permitan comprobarlas.

#### Escribir buenas hipótesis

```
Estructura simple: Si [acción], entonces [resultado medible], porque [razón].

Ej.: Si simplificamos el formulario a 3 campos, entonces la tasa de conversión subirá ≥ 5% en dos semanas, porque reduciremos fricción en el micro-momento de pago.

```

#### Hazlas falsables: deben poder fallar con datos.

##### Prioriza hipótesis por impacto × facilidad de test.


#### Diseño de experimentos

##### Define métrica primaria y duración mínima.

##### Controla variables: cambia solo una cosa a la vez si es posible.

##### Usa pruebas pequeñas (pilotos, A/B) y define criterios de éxito/fracaso antes de lanzar.

Ej: Hipótesis: Si enviamos recordatorio por SMS 24h antes, la asistencia subirá 10%. Métrica = tasa de asistencia; duración = 4 semanas; criterio éxito = p-value práctico o incremento ≥ 10%.


### 4. Proceso (pipeline mental)

Curiosidad detecta la anomalía y genera preguntas.

Descomposición transforma la pregunta en partes concretas.

Hipótesis propone causas/soluciones testables para esas partes.

Iteración: prueba → aprende → vuelve a formular preguntas.


### 5. Errores

Formular hipótesis vagas («mejorar UX») → hazlas medibles.

Descomponer mal (partes solapadas) → aplica MECE.

Testear sin criterios o sin tamaño muestral → resultados inútiles.

Confirmación: buscar solo datos que apoyan tu hipótesis → define criterios antes.

Parálisis por análisis: no iterar por esperar más datos perfectos → usa pilotos.


### Rutina diaria (entrenar mentalidad)

#### Anota 1 cosa rara o ineficiente que viste hoy (curiosidad).

#### Descompón esa cosa en 2–4 subproblemas (descomposición).

#### Escribe 1 hipótesis testeable para el subproblema más fácil de probar y define la métrica mínima.

#### Comparte la hipótesis con alguien y pide una objeción.


### Checklist

Cuál es la pregunta precisa que quiero responder?

¿He dividido el problema en partes claras?

¿Mi hipótesis es concreta y medible?

¿Qué dato probará que mi hipótesis es falsa?

¿Puedo hacer un experimento pequeño hoy?





## Problema




# 2. Tipos de problemas y cuándo qué método

Distinguir bien-definidos / mal-definidos / wicked / tame; mapear stakeholders

Ejercicio: para cada problema de la semana 1, determina si es tame o wicked y justifica el método a usar.



# 3. Heurísticas y pensamiento algorítmico (Polya, 4 pasos)

Contenido: Polya (“How to Solve It”) — comprender, planificar, ejecutar, revisar; heurísticas comunes.

Ejercicio: resolver 3 puzzles matemáticos o lógicos usando registro paso a paso.



# 4. Ciencia & método experimental aplicado a problemas

Formular hipótesis, diseñar experimentos, medición de resultados (KPIs), iteración.

Ejercicio: diseñar experimento A/B para una solución sencilla (p.ej. cambiar texto en un formulario).



# 5. Herramientas de análisis de causa (RCA, 5-Whys, Ishikawa) y mejora continua (PDCA)

Cómo hacer un RCA; cuándo usar 5-Whys; ciclo PDCA para iteración

Ejercicio: realizar 5-Whys sobre un fallo reciente (real o simulado) y proponer acción correctiva.



# 6. Pensamiento de diseño (Design Thinking)

##### Contenido: empathize → define → ideate → prototype → test. Aplicable a problemas ambiguos centrados en usuarios

Ejercicio: mini sprint: entrevistar a 3 usuarios sobre un problema, generar 10 ideas, prototipar 1.



# 7. TRIZ y métodos de innovación sistemática

Contenido: principios generales de TRIZ, contradicciones técnicas, 40 principios

Ejercicio: aplicar 3 principios TRIZ a un problema de producto (p. ej. reducir peso sin perder rigidez).



# 8. Modelado y formalización (matemática y computacional)

Transformar problema a modelos (ecuaciones, grafos, simulaciones, optimización).

Ejercicio: modelar un problema logístico simple (rutas, costes) y resolverlo con heurística o búsqueda.



# 9. Problemas sociales / wicked: gobernanza y políticas públicas

Cultura de stakeholders, trade-offs, iteraciones de políticas, indicadores de impacto

Ejercicio: caso: cambio climático / transporte urbano — identifica 5 stakeholders y 3 palancas de intervención.



# 10. Comunicación y toma de decisiones

Cómo presentar un diagnóstico, alternativas, riesgos y métricas a decisores. Técnicas de storytelling para soluciones.

Preparar un brief ejecutivo (1–2 páginas) para la solución de tu proyecto.



# 11. Proyecto integrador (parte 1: diseño)

Contenido: elegir un problema real (personal, local u organizacional). Mapear, priorizar, diseñar la solución.

Ejercicio: plan de proyecto con hipótesis, métricas y experimentos.



# 12. Proyecto integrador (parte 2: ejecutar y evaluar)

Contenido: prototipar, testear, recolectar datos, iterar; presentar resultados con lecciones aprendidas.

Ejercicio: entrega final: presentación + reporte con métricas y next steps. 



# Ejercicios/Prácticas

##### Descomposición diaria: rompe problemas en subproblemas 10 minutos al día.

##### Diario de resolución: registra hipótesis y resultado (mejora metacognición).

##### Parejas / feedback: presentar tu diagnóstico y recibir 3 preguntas críticas.

Competencias: participar en puzzles, coding challenges, hackathons o design sprints.



# Recursos

George Pólya — How to Solve It (clásico heurístico) — útil en matemáticas y razonamiento.

Rittel & Webber — artículo sobre Wicked Problems (fundamento conceptual).

Design Thinking — artículos y guías (ej.: Asana / Stanford d.school).

TRIZ — introducciones y guías prácticas

Artículos/recursos de gestión de producto y mejora continua (PDCA, RCA).



# Evaluación 

Completar ejercicios y 1 reflexión (¿qué aprendí? ¿qué fue sorprendente?).

##### Tiempo para modelar un problema; número de soluciones propuestas; calidad de experimentos (validación con datos).

Proyecto final: claridad del diagnóstico, diseño de la intervención, evidencia empírica y plan de seguimiento.

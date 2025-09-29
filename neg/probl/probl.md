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




## Clasificación de problemas

### 1. Criterios

#### Claridad del objetivo: ¿Está el objetivo bien definido o es ambiguo?

#### Estructura del espacio de soluciones: ¿Hay pocas soluciones claras o muchísimas posibles?

#### Naturaleza de las variables: ¿Son cuantificables/formales (números, reglas) o humanas/sociales?

#### Dinamismo / tiempo: ¿es estático (una sola decisión) o dinámico (evoluciona con el tiempo)?

#### Stakeholders y conflicto: ¿hay una única parte interesada o muchas con intereses contrapuestos?

#### Computacionalidad: ¿es resoluble con algoritmo exacto o es NP-hard/combinatorio?

#### Riesgo / impacto: ¿qué pasa si la solución falla?


### 3. Clasificación práctica (categorías principales)

#### 1. Problemas bien definidos (tame / well-defined)

##### Características: objetivo claro, restricciones y pasos conocidos.

Ejemplos: resolver una ecuación, ordenar una lista, corregir un bug con causa identificada.

Métodos recomendados: algoritmos exactos, pasos procedimentales, checklists, debugging.

##### Cuando usar: busca un procedimiento/receta; prioriza corrección y eficiencia.


#### 2. Problemas mal definidos / ambiguos

##### Características: objetivo vago o múltiple interpretación; falta información.

Ejemplos: “aumentar satisfacción del cliente”, “mejorar moral del equipo”.

Métodos recomendados: investigación (user research), design thinking, hipótesis + experimentos, métricas exploratorias.

##### Cuando usar: necesitas clarificar el objetivo antes de diseñar la solución.


### 3. Problemas wicked / retorcidos

##### Características: múltiples stakeholders, efectos colaterales, sin solución correcta única, soluciones cambian el problema.

Ejemplos: cambio climático, pobreza urbana, reforma educativa.

Métodos recomendados: gobernanza multi-actor, políticas iterativas, enfoques sistémicos, negociación, evaluación de impacto a largo plazo.

##### Cuando usar: intervención social/eco-sistémica; preparar para iterar y convivir con trade-offs.


### 4. Problemas combinatorios / de optimización difícil

##### Características: enorme espacio de soluciones; solución óptima costosa de encontrar (NP-hard).

Ejemplos: el viajante de comercio, optimización de rutas, scheduling complejo.

Métodos recomendados: heurísticas, algoritmos aproximados, metaheurísticas (simulated annealing, genetic algorithms), relaxaciones convexas.

##### Cuando usar: si buscar óptimo exacto es impracticable, busca buena solución en tiempo razonable.


### 5. Problemas socio-técnicos

##### Características: mezcla de tecnología y comportamiento humano; la solución técnica falla si no se acompaña de adopción humana

Ejemplos: implementación de un nuevo CRM, políticas de ciberseguridad en empresa.

##### Métodos recomendados: cambio organizacional, pilotos, formación, incentivos, evaluación cualitativa + cuantitativa.


### 6. Problemas de causa raíz / incidentes

##### Características: hay un fallo puntual o repetido que hay que diagnosticar y corregir.

Ejemplos: caída de servicio, fuga de datos, error crítico en producción.

##### Métodos recomendados: RCA (5-Whys, Ishikawa), forense técnico, parches temporales + plan permanente.


### 7. Problemas creativos / de innovación

##### Características: objetivo es producir algo nuevo; no hay un "mejor" ni métrica única.

Ejemplos: idear una campaña de marca, diseñar producto disruptivo.

##### Métodos recomendados: ideación divergente, prototipado rápido, sesiones de brainstorming estructurado, TRIZ


### problema → método

| Tipo de problema |             Indicador clave | Primer método a intentar        |
| ---------------- | --------------------------: | ------------------------------- |
| Bien definido    |    Objetivo y reglas claras | Algoritmo / procedimiento       |
| Mal definido     |            Objetivo ambiguo | Research → definir métricas     |
| Wicked           |      Múltiples stakeholders | Enfoque sistémico / gobernanza  |
| Combinatorio     |              Espacio enorme | Heurística / aproximación       |
| Socio-técnico    | Tecnología + comportamiento | Piloto + gestión del cambio     |
| Causa raíz       |          Incidente repetido | RCA → corrección + prevención   |
| Creativo         |              Buscar novedad | Prototipos + tests cualitativos |



### 4. Flujo de decisión (decidir rápido qué tipo)

##### 1. El objetivo está claro y medible?

Sí → ¿puede formalizarse? → Bien definido / optimización.

No → sigue.

##### 2. ¿Afecta a muchas partes con intereses distintos?

Sí → Wicked / socio-político.

##### 3. ¿Involucra comportamiento humano crítico para el éxito?

Sí → Socio-técnico.

##### 4. ¿El espacio de soluciones es enorme o combinatorio?

Sí → heurísticas/approx.

##### 5. ¿Es un fallo puntual/urgente?

Sí → RCA / respuesta inmediata.

##### 6. Si ninguno encaja, trátalo como mal definido: investiga y convierte a hipótesis testeables.


### 5. Ejemplos concretos y su clasificación 

Bug: la app crashea al subir imagen → Causa raíz / bien definido.

Baja retención de usuarios → Mal definido → socio-técnico (según causa).

Reducir emisiones de ciudad en 30% → Wicked (política + técnica + social).

Optimizar rutas de reparto diario → Combinatorio / optimización.

Crear nueva línea de producto para jóvenes → Creativo + investigación de mercado.



### 6. Prácticos

##### No te cases con una única etiqueta. Muchos problemas son híbridos; comienza con la clasificación que más claramente guía la acción.

##### Prioriza clarificar objetivos si dudas. Muchos errores vienen de asumir que todos entienden igual el “éxito”.

##### Aplica el método más simple que puede funcionar. Ockham aplicado a la resolución: empieza con lo directo y escala complejidad si falla.

##### Documenta la clasificación. Escribe en 1 línea por qué clasificaste así; sirve para revisarlo tras evidencias


### 7. Ejercicio

Toma un problema real tuyo (aunque sea pequeño). Responde rápido:

#### 1. ¿El objetivo está medible? (sí/no)

#### 2. ¿Cuántos stakeholders afectan? (1 / varios)

#### 3. ¿Es urgente/critico? (sí/no)

#### 4. ¿Qué tipo encaja mejor de la lista?




## Problema




## Resolución de problemas

##### Proceso deliberado por el que pasas de no saber cómo alcanzar un objetivo a actuar y verificar que la situación mejoró

##### Es una mezcla de pensamiento claro, modelado, experimentación y comunicación


### 1. Ciclo esencial

#### 1. Definir — ¿cuál es exactamente el problema y cómo medir éxito?

#### 2. Analizar — recolectar datos, identificar causas y partes interesadas.

#### 3. Idear — generar alternativas/hipótesis de solución.

#### 4. Seleccionar — priorizar por impacto × coste × riesgo.

#### 5. Experimentar / implementar — probar la solución mínima viable.

#### 6. Medir & aprender — comparar contra métricas, documentar y ajustar.

#### 7. Escalar o institucionalizar — si funciona, aplicarlo; si no, iterar.


### 2. Métodos y marcos útiles (cuándo usar cada uno)

#### Polya (4 pasos) — entender, planear, ejecutar, revisar. Excelente para problemas lógicos/matemáticos.

#### Método científico — formular hipótesis, diseñar experimento, analizar resultados. Ideal para soluciones testables.

#### Design Thinking — empathy → define → ideate → prototype → test. Para problemas humanos/UX/servicio.

#### RCA (5-Whys, Ishikawa) — para incidentes y fallas recurrentes.

#### PDCA (Plan-Do-Check-Act) — mejora continua en procesos operativos.

#### Heurísticas / algoritmos — para problemas con estructura formal (optimización, búsqueda).

#### TRIZ / pensamiento de principios — para innovación técnica cuando hay contradicciones.


### 3. Formalizar rápidamente un problema

Estado actual: ?

Estado deseado:

Métrica de éxito (1 primaria):

Restricciones principales:

Stakeholders clave:

Hipótesis principal (Si X, entonces Y, porque Z):


### 4. Estrategias concretas para avanzar (tácticas)

#### Descomponer: divide en subproblemas MECE.

#### Reformular: cambia la representación (diagrama, tabla, matriz).

#### Analogías: busca soluciones en otros dominios.

#### Control de variables: cambia una cosa a la vez en experimentos.

#### Prueba mínima viable: lanza la versión más pequeña que pueda probar la hipótesis.

#### Fallback / mitigación: plan B si el experimento falla.

#### Documenta supuestos: anótalos y prioriza verificarlos.


### 5. Priorizar ideas (regla práctica)

Para cada idea calcula (estimación rápida):

#### Impacto esperado (alto / medio / bajo)

#### Facilidad/Coste (difícil / medio / fácil)

#### Riesgo (alto / medio / bajo)

#### Prioriza: alto impacto + fácil → prototipo. Evita gastar recursos en alto impacto pero inalcanzable sin pruebas.


### 6. Indicadores y métricas 

#### Métrica primaria: la que define éxito (ej. conversión, tiempo respuesta, tasa asistencia).

#### Métricas secundarias: efectos colaterales (coste, satisfacción, errores).

#### Señales de alarma: KPIs que, si empeoran, detienen la implementación.

#### Siempre define umbrales antes de empezar.


### 7. Evitar errores 

##### No definir el éxito → define 1 métrica primaria.

##### Confirmación → diseña experimentos que puedan falsar tu hipótesis.

##### Cambiar muchas variables a la vez → aisla cambios.

##### Ignorar stakeholders → involúcralos desde fase de definición.

##### Saltarse la medición → sin datos no hay lecciones reproducibles.


### 8. Checklist

1. ¿Puedo expresar el problema en una frase y una métrica?

2. ¿Qué asumiré y cómo validaré esos supuestos?

3. ¿Cuál es el experimento mínimo útil?

4. ¿Cuánto tiempo/datos necesito para decidir?

5. ¿Cuál es el criterio de éxito/fracaso?

6. ¿Quién debe saber del experimento y por qué?


### 9. Ejemplos

#### Bug en producción

Definir: error X aparece en 5% de requests (métrica).

Analizar: logs, reproducir en staging, 5-Whys.

Idear: parche temporal, parche permanente, rollback.

Experimentar: desplegar parche temporal a 10% tráfico.

Medir: tasa de errores en 24h; si baja >90% → escalar


### Baja retención de usuarios

Definir: retención D7 = 12%, objetivo 18%.

Analizar: cohortes, funnel, puntos de abandono.

Idear: mejorar onboarding, tutorial, email de activación.

Priorizar: onboarding interactivo (impacto medio-alto, coste medio).

Experimentar: A/B con 50% usuarios nuevos por 2 semanas.

Medir: D7 por cohorte; si +6pp → lanzar a toda la base.


### Ejercicios

Toma un problema real y responde la plantilla de la sección 3 en 10 min.

Diseña una hipótesis clara y el experimento mínimo en 15 min.

Ejecuta un piloto pequeño (A/B o prototipo) y recoge datos durante una semana; documenta resultados.



## Descomponer problema en metas, restricciones y supuestos.





# 2. Tipos de problemas y cuándo qué método

Distinguir bien-definidos / mal-definidos / wicked / tame; mapear stakeholders

Ejercicio: para cada problema de la semana 1, determina si es tame o wicked y justifica el método a usar.


## Tipos de problemas

Importa distinguirlos y qué enfoque suele funcionar mejor para cada uno


### 1. Bien definidos (well-defined)

#### Objetivo y reglas claras; solución exacta posible.

Ejemplo: 
resolver 2x+3=7, ordenar una lista, hacer un backup.

##### Método: algoritmo/receta, pasos determinísticos, verificación automática.


### 2. Mal definidos / ambiguos (ill-defined)

#### Definición: objetivo o criterios de éxito vagos; falta información.

Ejemplo: “mejorar la satisfacción del cliente”.

##### Método: investigación (user research), definir métricas, formular hipótesis y tests.


### 3. Retorcidos / wicked

#### Definición: múltiples stakeholders con valores en conflicto, sin solución “correcta”; la propia solución puede reconfigurar el problema.

Ejemplo: cambio climático, urbanismo, pobreza.

##### Método: enfoques sistémicos, gobernanza, iteración larga, negociación y evaluación de impacto.


### 4. Técnicos vs. Sociales (dimensión)

#### Técnico: variables formales y medibles (p. ej. throughput). Usa modelado matemático.

Social: involucra comportamiento humano, cultura, incentivos. Requiere entrevista, pilotaje y gestión del cambio.

##### Nota: muchos problemas son socio-técnicos (mezcla de ambos).


### 5. Estáticos vs. Dinámicos

#### Estático: una decisión puntual (p. ej. calcular impuesto).

#### Dinámico: evolución en el tiempo, requiere políticas o estrategias (p. ej. plan de crecimiento).

##### Método: para dinámicos, modelado temporal, simulaciones, control y feedback.


### 6. Determinísticos vs. Estocásticos

#### Determinístico: mismas condiciones → mismo resultado.

#### Estocástico (probabilístico): incertidumbre fundamental (ruido, azar).

##### Método: incorporar probabilidades, análisis de riesgo, simulaciones Monte Carlo, umbrales de confianza.


### 7. Simples vs. Complejos / Emergentes

#### Simple: pocas variables y relaciones lineales.

Complejo: muchas interdependencias, no linealidad, comportamientos emergentes (p. ej. redes sociales).

##### Método: para complejos usa análisis de redes, dinámica de sistemas, escenarios y experimentos.


### 8. Tractable (polinomial) vs. Intractable (NP-hard)

#### Definición: desde la teoría de la complejidad: algunos problemas tienen algoritmo eficiente; otros no.

Ejemplo intractable: viajante de comercio exacto para gran N.

##### Método: heurísticas, aproximaciones, relajaciones, algoritmos metaheurísticos.
 
 
### 9. Combinatorios / de optimización

#### Definición: buscar la mejor solución dentro de muchas combinaciones.

Ejemplo: asignación de turnos, rutas de reparto.

##### Método: programación entera, optimización, heurísticas, greedy, branch & bound, simulated annealing.


### 10. Causa raíz / incidentes

#### Definición: identificar y corregir la fuente de una falla puntual o recurrente.

Ejemplo: servicio que cae cada N horas.

##### Método: RCA: 5-Whys, Ishikawa, logs forenses, parche + prevención


### 11. Creativos / de innovación

#### Definición: crear algo nuevo; no hay una métrica única de “mejor”.

Ejemplo: campaña publicitaria, nuevo producto.

##### Método: ideación divergente, prototipos, tests cualitativos, TRIZ.


### 12. Estratégicos vs. Tácticos

#### Estratégico: impacto a largo plazo, implica trade-offs mayores (p. ej. entrar a nuevo mercado).

#### Táctico: ejecución operativa a corto plazo (p. ej. reducir tiempo de entrega esta semana).

##### Método: para estratégico: análisis de escenarios, stakeholders; para táctico: PDCA, checklists.


### 13. Recurrentes vs. Una-vez

#### Recurrente: problema que vuelve (requiere proceso o sistema para gestionarlo).

#### Una-vez: proyecto puntual.

##### Método: recurrente → institucionalizar, automatizar; una-vez → proyecto con cierre. 


### 14. Locales vs. Sistémicos

#### Locales: afectan a una parte concreta y se pueden aislar.

#### Sistémicos: afectan al sistema entero, requieren cambios estructurales.

Ejemplo: bug en un microservicio (local) vs. cultura de entrega lenta (sistémico).

##### Método: para sistémicos, diagnóstico amplio y cambio organizacional.


### Identificar tipo de problema

##### 1. ¿El objetivo está medible y claro? → Sí → ¿puede automatizarse o formalizarse? → Bien definido / técnico.

##### 2. ¿Involucra muchas partes con intereses distintos? → Sí → Wicked.

##### 3. ¿Depende de comportamiento humano para éxito? → Sí → Socio-técnico.

##### 4. ¿Espacio de soluciones enorme/NP-hard? → Sí → Combinatorio/optimización.

##### 5. ¿Es un fallo puntual? → Sí → RCA.
(Si dudas, trátalo como mal-definido: investiga y formula hipótesis.)

 


# 3. Heurísticas y pensamiento algorítmico (Polya, 4 pasos)

Contenido: Polya (“How to Solve It”) — comprender, planificar, ejecutar, revisar; heurísticas comunes.

Ejercicio: resolver 3 puzzles matemáticos o lógicos usando registro paso a paso.


## Polya (4 pasos) — entender, planear, ejecutar, revisar. Excelente para problemas lógicos/matemáticos.



## Heurísticas / algoritmos — para problemas con estructura formal (optimización, búsqueda).

##### Heurística = regla práctica, atajo mental o procedimiento aproximado que te permite encontrar soluciones suficientemente buenas con menos tiempo, datos o esfuerzo que un algoritmo exacto

##### No garantiza óptimo, pero facilita avanzar cuando el espacio de soluciones es grande, la información es incompleta o hay presión de tiempo.


### 1. Heurísticas vs. algoritmos

Algoritmo: procedimiento exacto; si se sigue, produce la solución correcta (si existe) y suele tener garantías formales.

#### Heurística: atajo no garantizado; rápido y práctico; su eficacia se juzga empíricamente.
##### Usar heurística cuando el algoritmo exacto es imposible, caro o innecesario.
 
 
### 2. Motivo de uso

##### Aceleran la toma de decisiones.

##### Reducen complejidad cognitiva.

##### Permiten prototipado y experimentación rápida.

##### Son especialmente útiles en problemas mal definidos, combinatorios o con incertidumbre


### 3. Riesgos

Sesgos y errores: algunas heurísticas mentales pueden llevar a sesgos (p. ej. disponibilidad).

Sobreconfianza: asumir que la heurística siempre funciona.

Mitigación: documenta supuestos, define métricas, prueba pequeñas muestras, y calibra la heurística con datos.


### 4. Prácticas

#### Descomponer / dividir y vencerás

##### Divide el problema en subproblemas independientes o secuenciales.

Uso: ingeniería, gestión de proyectos, debugging.


#### Greedy (voraz)

##### Toma la mejor decisión local en cada paso con la esperanza de un buen global.

Uso: asignaciones rápidas, aproximaciones a optimización.

Riesgo: queda atrapada en óptimos locales.


#### Hill-climbing / búsqueda local

####-3 Mejora iterativamente una solución haciendo cambios locales que mejoran la métrica.

Uso: ajuste fino, optimización continua.

Añade reinicios aleatorios para escapar de óptimos locales.


#### Satisficing (satisfacer + suffice)

##### Buscar la primera solución que cumple criterios mínimos en vez de la mejor.

Uso: decisiones con tiempo limitado o bajo incertidumbre.


#### Heurística de analogía

##### Aplicar solución de problema similar en otro dominio (transfer learning mental).

Uso: innovación, diseño de producto.


#### Regla del 80/20 (Pareto)

##### Identifica el ~20% de causas que generan ~80% del efecto; prioriza ahí.

Uso: priorización de esfuerzos, soporte al cliente.


#### Prueba y aprendizaje (trial & error controlado)

##### Lanza cambios pequeños, mide y adapta.

Uso: producto, UX, políticas.


#### Simplificar al máximo (Occam práctico)

##### Elige la solución más simple que funcione; evita complejidad innecesaria.

Uso: prototipos, soluciones temporales.  


#### Backtracking / poda

##### Intentar soluciones y retroceder cuando una rama falla, con heurísticas para podar ramas poco prometedoras.

Uso: búsqueda combinatoria, debugging complejo.


#### Reglas de pulgar (rules of thumb)

##### Hechos empíricos condensados (p. ej. “las páginas deben cargarse <2s”).

Útiles para evaluación rápida; hay que validar regionalmente.


### 5. Meta-heurísticas (estrategias sobre heurísticas)

#### Simulated annealing, genetic algorithms, tabu search: estrategias que coordinan búsquedas heurísticas para explorar grandes espacios y escapar de óptimos locales.

Uso: problemas de optimización compleja donde heurísticas simples fallan.



### 6. Elegir y aplicar una heurística

##### 1. Clasifica el problema (ver si es combinatorio, socio-técnico, etc.).

##### 2. Define métricas mínimas que demuestren mejora o no.

##### 3. Elige una heurística adecuada (p. ej. 80/20 para priorizar; greedy para aproximar).

##### 4. Diseña experimento mínimo para probar la heurística (A/B, piloto, prueba de concepto).

##### 5. Mide y calibra: si falla, documenta por qué y cambia de heurística.

##### 6. Combina heurísticas cuando tenga sentido (p. ej. 80/20 + prueba & error).


### 7. Heurística funcionando o no 

Funciona si:
Mejora la métrica primaria en un margen práctico.
Reduce incertidumbre o coste de decisión.
Es reproducible en varias muestras.

No funciona si:
Resultados contradictorios entre cohorts.
Efectos colaterales negativos (p. ej. escala rompe algo).
Causa caída en una métrica crítica.


### 8. Ejemplos

##### Producto (baja conversión): Heurística 80/20 → identificar 20% de pasos del funnel con mayor abandono; aplicar mejora rápida (simplificar formulario). Pilotar y medir conversión.

##### Operaciones (colas en atención): Greedy → asignar servidores a cola con mayor llegada inmediata; medir tiempos de espera.

##### Diseño (nueva funcionalidad): Analogía → adaptar patrón de onboarding de una app similar que ya tiene buena retención; prototipo y A/B.

##### Optimización de rutas: Hill-climbing + reinicios aleatorios para mejorar rutas locales; comparar coste total.


### 9. Checklist usar heurísticas

¿Cuál es la métrica primaria?

¿Por qué este atajo es razonable (supuesto)?

¿Cuál es el experimento mínimo para probarlo?

¿Qué indicador detiene el experimento si empeora?

¿Cómo documentaré la lección aprendida?


### Rs heurísticas

##### Hacen posible avanzar rápido en problemas reales cuando la perfección es impracticable

##### Úsalas con métricas, experimentación y humildad: documenta supuestos, mide, calibra y combina heurísticas cuando haga falta.




# 4. Ciencia & método experimental aplicado a problemas

Formular hipótesis, diseñar experimentos, medición de resultados (KPIs), iteración.

Ejercicio: diseñar experimento A/B para una solución sencilla (p.ej. cambiar texto en un formulario).


## Método científico — formular hipótesis, diseñar experimento, analizar resultados. Ideal para soluciones testables.



# 5. Herramientas de análisis de causa (RCA, 5-Whys, Ishikawa) y mejora continua (PDCA)

Cómo hacer un RCA; cuándo usar 5-Whys; ciclo PDCA para iteración

Ejercicio: realizar 5-Whys sobre un fallo reciente (real o simulado) y proponer acción correctiva.


## RCA (5-Whys, Ishikawa) — para incidentes y fallas recurrentes.

##### Análisis de Causa Raíz (RCA — Root Cause Analysis) es un conjunto de técnicas cuyo objetivo es encontrar la(s) causa(s) fundamental(es) detrás de un fallo o problema para poder corregirla(s) de forma duradera, no solo parchear síntomas

##### Las dos técnicas rápidas y más usadas son 5-Whys y Ishikawa (fishbone / diagrama de espina de pescado).


### Principios RCA

#### Busca la causa última (o causas) que, si se corrigen, evitan la recurrencia.

#### No te quedes en “el síntoma” (p. ej. “el servicio se cayó”) — pregunta por qué ese síntoma ocurrió.

#### Combina datos (logs, métricas) con entrevistas a las personas involucradas.

#### Documenta hipótesis, pruebas y acciones correctivas.

#### Planifica medidas preventivas y verifica su efectividad


### 5-Whys

##### Técnica iterativa y lineal: a cada respuesta a “¿por qué sucedió esto?” le sigue otro “¿por qué?” hasta llegar a la causa raíz (habitualmente ~5 iteraciones, puede ser menos o más).

#### 1. Define el evento/fallo claramente (frase corta y medible).

#### 2. Pregunta por qué ocurrió — escribe la respuesta.

#### 3. A la respuesta, vuelve a preguntar ¿por qué? Repite ~4–6 veces o hasta llegar a una causa raíz accionable (no a un síntoma).

#### 4. Cuando llegues a la causa raíz, pregunta: ¿qué acción correctiva impedirá que esto vuelva a pasar? Asigna responsable y fecha.

#### 5. Verifica la eficacia pasado un periodo definido.


### Ejemplo

Evento: El servicio web estuvo inaccesible 30 min.

1. ¿Por qué? → Porque el servidor se quedó sin memoria.

2. ¿Por qué? → Porque el proceso X consumió toda la memoria.

3. ¿Por qué? → Porque hubo una fuga de memoria en la versión deployada.

4. ¿Por qué? → Porque la prueba de carga no cubrió el caso Y.

5. ¿Por qué? → Porque no existe un test automatizado para el escenario Y.

##### Acciones: parche en producción, test automatizado nuevo, política de pre-deploy de pruebas de carga.


### Ventajas / límites

Muy rápido y fácil.

Mejora con un facilitador que evite respuestas superficiales.

##### Riesgo: puede quedarse en un único hilo causal (no capta causas múltiples o sistémicas). Complementar con Ishikawa cuando convenga.


### Ishikawa / Diagrama de espina de pescado

#### Diagrama visual que organiza posibles causas en categorías (por ejemplo: Personas, Procesos, Maquinaria/Tech, Materiales, Medida, Entorno).

##### Favorece explorar causas múltiples y su relación con el problema.


#### 1. Escribe el problema en el “cabezal” (lado derecho).

#### 2. Dibuja la “espina” horizontal y ramas principales (categorías). Comunes en industria: People, Process, Equipment, Materials, Environment, Management.

En software puedes adaptar: People, Process, Code, Infra, Monitoring, Data.

#### 3. Brainstorming estructurado: para cada categoría, añade posibles causas (sub-ramas). Usa datos y entrevistas.

#### 4. Prioriza las causas más probables (p. ej. por evidencia, frecuencia o impacto).

#### 6. Para cada causa priorizada, aplica 5-Whys o pruebas para confirmar si es raíz.

Define acciones correctivas y preventivas. Asigna responsables y plazos. 


### Ventajas / límites

Visual y colaborativo; revela múltiples causas y su interacción.

Requiere facilitación y datos para no convertirse en una lista larga y vaga.

#### Ideal cuando hay sospecha de causas múltiples o sistemáticas.


### 5-Whys vs Ishikawa

#### 5-Whys → incidente puntual, quieres llegar rápido

#### Ishikawa → problema complejo, repetido o con múltiples factores; quieres mapear y priorizar causas.

##### A menudo se usan juntas: primero Ishikawa para mapear, luego 5-Whys en las causas principales.


### Buenas prácticas

##### Definir el problema en forma medible antes de empezar. (p. ej. “Error 500 en checkout 12% de requests entre 10:00–12:00”)

##### Reunir evidencia: logs, métricas, snapshots, test results, fotos, emails.

##### Incluir a las personas clave (quienes operan, quienes diseñan el proceso, QA, producto).

##### Fomentar preguntas abiertas y evitar culpas; foco en sistemas y procesos, no personas.

##### Registrar versiones alternativas de causalidad (si existen).

##### Asignar acciones SMART (específicas, medibles, alcanzables, relevantes, temporales).

##### Verificación post-acción: comprueba que la recurrencia desaparece y documenta resultados.

##### Revisar y actualizar: si una acción falla, vuelve a analizar; no soltarlo al “estado cerrado” sin verificación.
 

### Errores

Parar en la primera causa plausible (no profundizar).

Confundir causa con síntoma.

Usar el método sin datos (solo opiniones).

Convertir RCA en caza de culpables (reduce calidad de información).

No implementar o seguir las acciones correctivas.


### Plantilla RCA

1. Título del incidente / problema (1 línea).

2. Fecha/hora y alcance (quién/qué afectó).

3. Evidencia disponible (logs, screenshots, métricas).

4. Diagrama Ishikawa (o lista de categorías).

5. 3–6 causas candidatas priorizadas (con evidencia corta).

6. Para cada causa: 5-Whys aplicado → causa raíz propuesta.

7. Acciones correctivas + responsables + fecha.

8. Plan de verificación (qué medir y cuándo).

9. Lecciones aprendidas (1–3 puntos).


### Ejemplos

#### Caída de API (RCA combinado)

Problema: API de pagos retornó 503 entre 14:00–14:20, 8% de requests fail.

Ishikawa categorías usadas: Infra, Código, Dependencias, Operaciones, Config.

Causas priorizadas: (1) saturación DB, (2) bug en pool de conexiones, (3) despliegue reciente.

5-Whys en (2): bug pool → cambio en librería/timeout → despliegue automático sin test de integración → falta de gate de despliegue.

Acciones: revert deploy, parche en librería, agregar test de integración para pool, añadir guardrails en CD (feature flag), monitor y playbook de rollback. Responsable y verificación en 72h


#### Baja conversión en checkout (RCA ligero)

Problema: Tasa de conversión checkout cayó 15% en la última semana.

Ishikawa categorías: UX, Código, Pago, Marketing, Datos.

Causas priorizadas: (1) falla en proveedor de pagos en ciertos BINs, (2) cambio en copy del botón, (3) aumento de latencia en frontend.

5-Whys en (1): proveedor rechazando tarjetas por nuevo rule set → reglas aplicadas sin review → falta de test con BINs locales.

Acciones: rollback reglas, reinstaurar merchant test suite con BINs locales, alerta en monitoring de decline-rates por BINs, equipo de pagos responsable.


## Métricas RCA efectivo

Incidencia: reducción en frecuencia del evento (p. ej. de 8% a <0.5%).

MTTR (Mean Time To Recover): tiempo medio de recuperación tras acción.

Reincidencia: número de recurrencias en 30/90 días.

Cumplimiento: % de acciones correctivas completadas en plazo.

Impacto secundario: monitor de KPIs relacionados (p. ej. retención, errores en otras rutas).



## PDCA (Plan-Do-Check-Act) — mejora continua en procesos operativos.

##### Planificar–Hacer–Verificar–Actuar ciclo simple y repetible para mejorar procesos, probar cambios y aprender de forma continua

##### Popularizado por Walter Shewhart y Deming en control de calidad, pero funciona para proyectos, producto, operaciones y cambio organizacional.


#### 1. Plan (Planificar): define objetivo, hipótesis, métricas y plan de prueba.

#### 2. Do (Hacer): ejecuta la prueba o piloto en pequeña escala.

#### 3. Check (Verificar): mide resultados, compara con la expectativa y analiza desviaciones.

#### 4. Act (Actuar): institucionaliza la mejora si funciona, o ajusta y vuelve a iterar si no.

El ciclo se repite: cada Act alimenta un nuevo Plan.


### 1. Plan

#### Problema / oportunidad: descripción clara y breve.

#### Objetivo: métrica primaria y objetivo numérico (ej.: aumentar conversión de 3% a 5% en 14 días).

#### Hipótesis: Si X, entonces Y, porque Z.

#### Alcance del experimento: quiénes/qué están incluidos; duración; tamaño de muestra.

#### Criterio de éxito / fracaso: umbrales definidos antes de empezar.

#### Recursos y roles: quién hace qué; timeline; dependencias.

#### Riesgos y mitigaciones: señales de alarma y rollback plan.

##### Salida del Plan: documento breve (1–2 páginas o una tarjeta) con métricas y plan de experimento.


### 2. Do — ejecutar bien 

#### Implementa la versión mínima viable del cambio (piloto o A/B pequeño).

#### Registra datos y cualquier incidente / hallazgo cualitativo.

#### Mantén comunicación breve con stakeholders (estado, bloqueos).

#### No cambies variables importantes a mitad de prueba (control de variables).

##### Consejo: instrumenta desde el inicio (logs, dashboards) para poder verificar.


### 3. Check — analizar resultados correctamente

#### Reúne métricas primarias y secundarias al final del periodo.

#### Comprueba si el efecto es real: al menos una prueba simple de significancia práctica (no necesitas p-values complejos, pero sí ver si el cambio supera ruido).

#### Analiza efectos secundarios (coste, latencia, satisfacción).

#### Documenta: ¿qué pasó? ¿por qué ocurrió? ¿qué aprendimos de los supuestos?

#### Reúne testimonios o feedback cualitativo si aplica (usuarios, equipo).

##### Salida del Check: resumen con evidencias (tablas/plots) y conclusión clara: éxito / parcial / fracaso.


### 4. Act — decisiones y próximos pasos

#### Si funciona (según criterio):

##### Escala la solución (rollout), actualiza procesos, crea SOPs/Playbooks.

##### Forma/avisa a equipos que deben adoptar el cambio.

##### Monitorea métricas clave post-rollout por un periodo definido


#### Si parcialmente funciona o tiene efectos secundarios:

Ajusta la hipótesis o la implementación y planifica nuevo ciclo PDCA más pequeño.


#### Si no funciona:

Documenta por qué, guarda lecciones y, si aplica, revirtió al estado previo; luego planifica una alternativa.

##### Siempre asigna responsables y fechas para la acción y la verificación posterior.


### Usar PDCA

##### Mejora continua de procesos operativos.

##### Pilotaje de cambios en producto o experiencia de usuario.

##### Implementación incremental de políticas o procedimientos.

##### Cuando quieras aprender rápido y reducir riesgo antes de escalar

##### No es la mejor herramienta si necesitas una solución única y urgente (por ejemplo, una emergencia crítica que requiere respuesta inmediata y no iteración).


### Buenas prácticas

##### Evitar: Planes vagos sin métricas; hacer “Do” demasiado grande (sin piloto); decidir en base a intuición post-hoc (sin comparar con criterios previos).

##### Hacer: definir métricas y umbrales antes de empezar; mantener ciclos cortos; documentar lecciones; incluir verificación cuantitativa y cualitativa.

##### Evitar confundir correlación con causalidad: si no controlaste variables, la interpretación puede ser equivocada.

##### No usar PDCA como excusa para procrastinar: cada ciclo debe tener una duración razonable y entregables claros.


### Plantilla PDCA


Plan

Problema:

Objetivo (métrica + objetivo):

###### Hipótesis:
Alcance/tamaño/duración:
Criterio de éxito:
Riesgos y rollback:
Responsable / fecha inicio–fin:

##### Do
Acciones ejecutadas:
Observaciones / incidencias:
Datos recolectados (link dashboard):

##### Check
Resultado métrico (antes / después):
Efectos secundarios:
Análisis breve (¿por qué sucedió?):
Conclusión: éxito/parcial/fracaso.

##### Act
Acción acordada (scale / adjust / revert):
Responsables y fecha:
Verificación post-acción (qué medir y cuándo):
Lecciones aprendidas:


### Ejemplo - producto — onboarding

Plan
Problema: Retención D7 = 12% (objetivo 18%).
Hipótesis: Si añadimos tutorial interactivo en onboarding, D7 aumentará ≥ 6 pp.
Alcance: Nuevos usuarios en web, 2 semanas, 50% A/B.
Criterio: +6pp en cohorte A con igual coste de adquisición.
Responsable: PM / Eng / Designer.

Do
Implementar tutorial (MVP) para cohorte A. Recolectar D0, D1, D7.

Check
Resultado: D7_A = 16% vs D7_B = 12% (Δ = +4pp). Efecto positivo pero < criterio. Observación: tutorial aumenta tiempo en onboarding +10s.

Act
Ajustar tutorial (acortar) y correr nuevo PDCA con foco en mantener ganancia y minimizar fricción; no escalar aún.



### Métricas PDCA

Métrica primaria de impacto (KPI).

Métricas de coste / rendimiento (latencia, coste por usuario).

Indicadores de riesgo / seguridad.

MTTR si es operativo.

Cumplimiento de acciones (porcentaje de tareas completadas en plazo).


### Checklist PDCA

1. Tengo una métrica primaria clara y un umbral de éxito?

2. ¿Puedo ejecutar un piloto pequeño (Do) que no ponga en riesgo el sistema?

3. ¿He definido cómo voy a medir y por cuánto tiempo?

4. ¿Quién decide el Act final y quién lo implementa?

5. ¿He planificado la verificación post-rollout



# 6. Pensamiento de diseño (Design Thinking)

##### Contenido: empathize → define → ideate → prototype → test. Aplicable a problemas ambiguos centrados en usuarios

Ejercicio: mini sprint: entrevistar a 3 usuarios sobre un problema, generar 10 ideas, prototipar 1.


#### Design Thinking — empathy → define → ideate → prototype → test. Para problemas humanos/UX/servicio.

##### Enfoque iterativo, centrado en las personas, para entender problemas complejos y generar soluciones creativas y útiles

##### Prioriza la empatía, la exploración divergente (muchas ideas) y la validación rápida con usuarios

##### Es ideal para problemas mal definidos donde el comportamiento humano y la experiencia importan.


### Fases

#### 1. Empatizar — entender a las personas: sus necesidades, frustraciones, contexto.

##### Técnicas: entrevistas abiertas, observación, shadowing, diarios de uso, encuestas cualitativas.

Entregable típico: perfiles/insights, mapas de empatía.


#### 2. Definir (Define) — sintetizar lo aprendido y enmarcar el problema correctamente.

##### Actividad: formular point-of-view (POV) o How Might We (HMW).

Entregable: declaración de problema orientada al usuario + criterios de éxito. 


#### 3. Idear (Ideate) — generar muchas soluciones sin juzgar (divergencia), luego seleccionar (convergencia).

##### Técnicas: brainstorming estructurado, SCAMPER, mapas de afinidad, sketching, crazy 8s.

Entregable: listado priorizado de ideas / conceptos.


#### 4. Prototipar — convertir ideas en artefactos tangibles y baratos que permitan aprender (no necesariamente bonitos).

##### Tipos: papel, wireframes, mockups, role-play, wizard-of-oz.

Regla: prototipa solo lo mínimo necesario para probar la hipótesis.


#### 5. Testear — validar prototipos con usuarios reales, recoger feedback y aprender.

##### Objetivo: falsar hipótesis, iterar rápido.

Entregable: hallazgos de usabilidad, métricas cualitativas y cuantitativas; decisiones de iteración.


##### El ciclo es iterativo: los tests alimentan nueva empatía y/o redefinición.


### Principios 

##### Centrado en la persona: soluciones útiles deben estar alineadas con necesidades reales.

##### Iteración rápida: falla barato y aprende rápido.

##### Divergir antes de converger: separar fases de exploración y selección.

##### Colaboración cross-funcional: incluye diseñadores, técnicos, negocio y usuarios desde el inicio.

##### Probar con evidencia: decisiones informadas por datos y observación, no solo por opinión.



### Uso de Design Thinking

#### Problemas con fuerte componente UX / comportamiento humano.

#### Cuando el objetivo está ambiguo o hay múltiples interpretaciones.

#### Para innovar en productos, servicios, procesos centrados en clientes/empleados.

#### No es la mejor opción para problemas puramente algorítmicos o bien definidos donde un enfoque formal es suficiente.


### Herramientas y técnicas por fase

##### Empatizar: mapas de empatía, entrevistas semiestructuradas, diary studies, shadowing.

##### Definir: POV statements, How Might We, user journeys, pain & gain maps.

##### Idear: brainstorming, brainwriting, SCAMPER, crazy 8s, matriz de priorización (impacto × esfuerzo).

##### Prototipar: paper prototypes, click-through wireframes, storyboards, role-play, mockups de baja fidelidad.

##### Testear: tests de usabilidad moderados, sesiones de feedback, surveys post-test, A/B tests para hipótesis cuantificables.


### Métricas

#### Cualitativas: satisfacción, facilidad percibida, comentarios de usabilidad.

#### Cuantitativas: tasa de conversión, tiempo hasta primera acción, retención, NPS para el flujo probado.

#### Define hipótesis y métricas antes de testear (ej.: “Si introducimos tutorial X, la activación D1 aumentará 10% en 2 semanas”).


### Ejemplo - sprint de 3 días

Día 1 — Empatizar + Definir: entrevistas rápidas (4–6), mapa de empatía, 1 HMW.

Día 2 — Idear + Priorizar: 60–90 min de ideación, seleccionar 2 ideas, esbozar prototipos de papel.

Día 3 — Prototipar + Testear: pruebas con 5 usuarios, recoger feedback, decidir next steps.


### Evitar errores

##### No involucrar usuarios reales → sesgos confirmatorios.

##### Prototipos demasiado pulidos → coste alto y menos disposición a cambiar.

##### Saltar la fase de definición → soluciones que no atacan el problema real.

##### Falta de multidisciplinariedad → ideas no viables técnicamente o mal alineadas con negocio.

##### Medir mal → confundir gusto con comportamiento real (observa acciones, no solo opiniones).


### Prácticas

Empieza con preguntas HMW claras y limitadas.

Usa timeboxes: sesiones cortas y enfocadas (ej. 20–30 min para brainstorming).

Siempre define qué aprenderás con cada prototipo (objetivo de aprendizaje).

Documenta decisiones y supuestos; conviértelos en hipótesis para testear.

Usa métricas simples y accionables para evaluar prototipos.


### Checklist Design Thinking

##### 1. ¿A quién estamos resolviendo esto? (usuario objetivo)

##### 2. ¿Cuál es el insight principal obtenido por empatía?

##### 3. ¿Cuál es la declaración de problema (POV/HMW)?

##### 4. ¿Qué hipótesis vamos a probar con el prototipo?

##### 5. ¿Qué métrica definimos para decir “funciona”?

##### 6. ¿Con cuántos usuarios vamos a testear y en qué tiempo?



# 7. TRIZ y métodos de innovación sistemática

Contenido: principios generales de TRIZ, contradicciones técnicas, 40 principios

Ejercicio: aplicar 3 principios TRIZ a un problema de producto (p. ej. reducir peso sin perder rigidez).


## TRIZ / pensamiento de principios — para innovación técnica cuando hay contradicciones.

#### Teoría para Resolver Problemas Inventivos

TRIZ (en ruso: Teoriya Resheniya Izobretatelskikh Zadach)

##### Es una metodología sistemática para la innovación inventiva desarrollada por Genrich Altshuller y sus colegas desde los años 40–50

##### Su propósito: transformar la resolución creativa de problemas en un proceso replicable —no depender solo de la inspiración

##### Identificando patrones recurrentes de soluciones técnicas y principios que se repiten en patentes y avances tecnológicos.


### TRIZ

#### Convierte problemas “creativos” en problemas tratables mediante modelado.

#### Ofrece principios y patrones de solución probados históricamente (no ad hoc).

#### Es especialmente valioso cuando hay contradicciones técnicas (quieres A y no-A simultáneamente).

#### Complementa técnicas como brainstorming o design thinking aportando estructura técnica y profundidad.


### Conceptos

#### Contradicción técnica: dos requisitos en conflicto (ej.: aumentar la resistencia sin aumentar peso). TRIZ coloca la resolución de la contradicción en el centro del método.

#### Principios inventivos: reglas generales (hay 40 en la formulación clásica) que sugieren transformaciones aplicables a muchos problemas.

#### Matriz de contradicciones: herramienta que relaciona parámetros que quieres mejorar con parámetros que pueden empeorar y sugiere principios a probar.

#### ARIZ: algoritmo de resolución inventiva, un proceso detallado y formalizado para problemas complejos.

#### Su-Field (campo-substancia): modelado de sistemas en términos de sustancias y campos (p. ej. fuerza, calor, señal) para detectar defectos y soluciones parciales.

#### Tendencias de evolución tecnológica: patrones por los que evolucionan sistemas (por ejemplo, segmentación, aumento de dinamismo, integración), que orientan la dirección de innovación.


### Principios inventivos

#### Segmentación / Fragmentación: dividir un objeto en partes independientes.

#### Extracción / Separar: sacar una parte/función que molesta.

#### Local Calidad: cambiar propiedades en diferentes áreas (no usar la misma solución para todo).

#### Asimetría: cambiar forma para mejorar función.

#### Unión / Merging: combinar funciones/elementos.

#### Universality: un elemento cumple múltiples funciones.

#### Taking out (sacar): separar la parte problemática del objeto.

#### Dinamización: permitir que algo se mueva o ajuste.

#### Anticipación / Pre-action: realizar cambios antes que se necesiten.

#### Cushion in advance / Equipotentiality: proteger contra efectos negativos o equilibrar condiciones.

##### (Estos principios se expresan de formas más técnicas en el catálogo TRIZ; sirven como disparadores de ideas.)


### Flujo práctico para aplicar TRIZ

#### 1. Definir el problema con precisión

##### Estado actual, estado deseado, restricciones. 

##### Busca la contradicción técnica: ¿qué parámetro quieres mejorar y qué parámetro empeora como consecuencia?


#### 2. Modelar el problema

##### Usa una frase tipo: “Necesito aumentar X sin aumentar Y” (ej.: “aumentar aislamiento térmico sin aumentar peso”).

##### O modela como Su-Field: sustancia A hace acción sobre sustancia B mediante campo C; identifica insuficiencias


#### 3. Identificar la contradicción

##### Técnica sencilla: escribe par (parámetro a mejorar — parámetro que empeora). Ej.: “fuerza ↑ — peso ↑”.


#### 4. Usar la Matriz de Contradicciones (o lista de principios)

##### Busca en la matriz qué principios han sido útiles históricamente para ese par

##### Si no tienes la matriz a la mano, recorre mentalmente los principios: ¿segmentar? ¿dynamizar? ¿usar un campo diferente? etc.


#### 5. Generar soluciones aplicando principios

##### Para cada principio sugerido, piensa en adaptaciones concretas a tu contexto. 

##### No copies literalmente: adapta la idea (analogías).


#### 6. Refinar con Su-Field o ARIZ (si es un problema complejo)

##### Si hay efectos secundarios o múltiples contradicciones, modela con Su-Field y aplica transformaciones (añadir campo, mediador, cambiar propiedades).

##### ARIZ guía más profundamente cómo transformar la tarea hasta una solución inventiva.


#### 7. Prototipar y testear

##### Haz experimentos rápidos o prototipos para validar si la idea resuelve la contradicción sin introducir peores efectos.


#### 8. Iterar

##### Valida, mide, ajusta. Usa tendencias de evolución tecnológica para ver caminos de mejora a medio plazo.


### Ejemplo

Problema: quieres que una puerta sea resistente al viento (firme) pero ligera para operar manualmente.

##### Contradicción: resistencia ↑ vs peso ↑.

##### Principios aplicables: Segmentación (paneles móviles), Dinamización (usar mecanismos que bloqueen en viento pero permitan plegado), Universality (material que cumple resistencia y baja densidad), Local quality (refuerzos sólo en zonas críticas).

##### Solución inventiva: panel con estructura interna segmentada (celosía) que aumenta rigidez sin mucho material adicional + cerradura automática que se activa con presión de viento (dynamizar control).

##### Prototipar y medir esfuerzo de apertura.


### Ventajas y límites

#### Ventajas: sistematiza creatividad, reduce dependencia de “genios”, aplicable a ingeniería, producto y procesos.

#### Límites: puede sentirse formal o pesado al inicio; requiere práctica para traducir principios abstractos a soluciones concretas; algunas versiones (ARIZ) son complejas y técnicas.


### Práctica

##### Empieza por buscar contradicciones claras en tus problemas; es la llave.

##### Usa una lista corta de principios (los 10–12 más útiles) hasta que los domines.

##### Trabaja con un facilitador o compañero para aplicar la Matriz de Contradicciones (dos cabezas piensan mejor).

##### Complementa TRIZ con prototipado rápido: TRIZ genera ideas; el prototipo te dice si sirven.

##### Aprende con casos: analiza patentes o soluciones existentes y mapea qué principio aplicaron.


### Ejercicio

1. Toma un problema (frase corta).

2. Escribe la contradicción técnica: qué quieres subir y qué no quieres que suba/baje.

3. Elige 3 principios (por ejemplo: Segmentación, Local Quality, Dynamization) y escribe 3 ideas breves aplicando cada principio.

4. Elige la idea más factible y define un prototipo mínimo para probarla.


### 40 principios TRIZ

1. Segmentación — dividir un objeto o sistema en partes independientes para facilitar función, ensamblaje o mantenimiento.

2. Extracción (Separar) — separar o extraer la parte problemática o la propiedad innecesaria del sistema.

3. Calidad local — cambiar una estructura homogénea por una heterogénea: cada parte optimizada para su función.

4. Asimetría — sustituir formas o configuraciones simétricas por asimétricas para mejorar rendimiento.

5. Consolidación / Unión — combinar funciones u objetos para simplificar y reducir elementos.

6. Universalidad — que un elemento cumpla múltiples funciones y así eliminar otros componentes.

7. Anidamiento (muñecas rusas) — colocar un objeto dentro de otro (o usar estructuras anidadas) para optimizar espacio o protección.

8. Contrapeso — compensar un efecto no deseado (peso, fuerza) con otro elemento o fuerza externa.

9. Contramedida previa — introducir tensión/contrafuerzas o preparativos antes de que ocurra el fallo.

10. Acción previa — realizar cambios o posicionamientos por adelantado para ahorrar tiempo o evitar problemas.

11. Amortiguación anticipada — instalar medidas de emergencia o protecciones antes de que falle algo.

12. Equipotencialidad — cambiar condiciones para evitar trabajo adicional (p. ej. eliminar necesidad de levantar).

13. Hacerlo al revés — invertir la acción, el orden o el sentido para obtener el efecto deseado.

14. Esfericidad / Curvatura — usar formas curvas/rotacionales en lugar de lineales cuando convenga.

15. Dinamización — permitir que partes cambien su estado/posición para adaptarse a condiciones.

16. Acciones parciales o excesivas — hacer menos o más de lo necesario intencionadamente para lograr el objetivo.

17. Transición a una nueva dimensión — mover la solución a otra dimensión espacial (p. ej. 2D→3D) o usar niveles.

18. Vibración mecánica — aprovechar oscilaciones o frecuencias (o incrementarlas) para obtener efecto.

19. Acción periódica — sustituir acción continua por impulsos o variar la frecuencia para optimizar.

20. Continuidad de la acción útil — eliminar tiempos muertos y mantener funcionamiento continuo donde convenga.

21. Alta velocidad (Rushing Through) — ejecutar operaciones peligrosas o dañinas muy rápidamente para reducir impacto.

22. Convertir lo dañino en beneficioso — reutilizar o transformar factores nocivos para obtener ventaja.
 
23. Retroalimentación — introducir o modificar feedback para controlar y ajustar el sistema.

24. Mediador / Intermediario — usar un elemento intermedio para realizar o facilitar la acción.

25. Autoservicio — que el propio objeto realice mantenimiento o utilice sus residuos para acciones auxiliares.

26. Copiar / Imitar — usar una copia simple o una representación (óptica, digital) en lugar del original.

27. Objetos baratos/desechables — sustituir elementos caros por versiones baratas de corta vida cuando convenga.

28. Sustitución de sistema mecánico — reemplazar sistemas mecánicos por campos u otros principios (óptico, eléctrico…).

29. Construcciones neumáticas o hidráulicas — usar fluidos o inflables en lugar de piezas sólidas.

30. Membranas flexibles o películas delgadas — reemplazar estructuras rígidas por membranas o films cuando sea ventajoso.

31. Material poroso — usar porosidad o insertar elementos porosos para lograr propiedades funcionales.

32. Cambio de color — variar color o transparencia para control, observación o señalización.

33. Homogeneidad — hacer que elementos interactuantes estén hechos de materiales parecidos para compatibilidad.

34. Desechar / Regenerar partes — eliminar o regenerar elementos cuando cumplen su función o se desgastan.

35. Transformación de propiedades — cambiar estado físico o propiedades (densidad, flexibilidad, temperatura).

36. Transición de fase — aprovechar cambios de fase (sólido→líquido, etc.) para obtener efectos útiles.

37. Expansión térmica — usar la dilatación/contracción por temperatura como mecanismo funcional.

38. Oxidación acelerada — emplear procesos de oxidación controlada como método técnico (p. ej. limpieza, reacción).

39. Ambiente inerte — sustituir el entorno por uno inerte (vacío, gas neutro) para proteger o cambiar reacciones.

40. Materiales compuestos — reemplazar materiales homogéneos por compuestos para combinar propiedades útiles


# 8. Modelado y formalización (matemática y computacional)

Transformar problema a modelos (ecuaciones, grafos, simulaciones, optimización).

Ejercicio: modelar un problema logístico simple (rutas, costes) y resolverlo con heurística o búsqueda.


## Modelado y formalización

##### Modelar un problema es convertir una situación real y ambigua en una representación clara, precisa y manipulable (ecuación, grafo, simulación, lógica, etc.) que permite razonar, analizar y buscar soluciones reproducibles

##### La formalización es el proceso de elegir lenguaje, variables y restricciones que hagan el problema accionable.  


### Motivos para Modelar

#### Obliga a aclarar supuestos y métricas.

#### Permite predecir efectos de cambios y comparar alternativas.

#### Facilita aplicar métodos automáticos (optimización, simulación, inferencia).

#### Reduce ruido emocional: pasas de “creo que” a “si el modelo es X, entonces Y”.

#### Hace reproducible el razonamiento y la comunicación con otros.


### Modelar problema

#### 1. Definir el objetivo y la métrica primaria

¿Qué quieres maximizar/minimizar o qué condición debes cumplir? (ej.: minimizar coste, maximizar retención, alcanzar tiempo < 2s).

#### 2. Delimitar el alcance y los stakeholders

¿Qué entra y qué queda fuera? ¿Quién decide/usa la solución?

#### 3. Identificar variables y parámetros

Variables de decisión (lo que puedes escoger), parámetros (datos fijos) y estados del sistema.

#### 4. Especificar restricciones y supuestos

Capacidades, recursos, leyes, límites temporales; haz explícitos supuestos que puedas testar.

#### 5. Elegir representación y método

¿Es un problema de optimización, de decisión secuencial, probabilístico, de modelado causal, de simulación o solo de lógica? Elige el lenguaje formal apropiado.

#### 6. Validar el modelo ligero

Comprueba con ejemplos extremos y datos conocidos; si predice lo evidente, sigue refinando.

#### 7. Usar el modelo para proponer/optimizar/experimentar

Resolver (exacto o heurístico), simular escenarios, o convertir en hipótesis para tests reales.


### Formas de representación (cuando usar)

#### Ecuaciones y optimización (LP, MILP, no lineal)

Útil cuando hay una función objetivo cuantitativa y restricciones lineales/enteras. Ej.: minimizar coste de transporte.

#### Grafos / redes

Ideal para rutas, dependencias, flujo, difusión. Ej.: enrutamiento, análisis de influencia.

#### Modelos probabilísticos / estadísticos

Cuando hay incertidumbre inherente; usar distribuciones, Bayesian networks o modelos predictivos. Ej.: predicción de demanda.

#### Simulación (discreta por eventos / agentes)

Cuando la dinámica temporal y la interacción importan; permite experimentar políticas. Ej.: colas en atención, epidemias, logística.

#### Sistemas dinámicos / ecuaciones diferenciales

Para procesos continuos en el tiempo (control, epidemias, crecimiento).

#### Lógica / satisfacibilidad (SAT / SMT)

Para problemas de consistencia, verificación o diseño con muchas restricciones lógicas.

#### Modelos de decisión secuencial (MDP / RL)

Para decisiones que se toman en secuencia con recompensa acumulada y posiblemente incertidumbre.

#### Modelos cualitativos / mapas mentales

Primer paso cuando poca data: ayuda a identificar variables importantes y relaciones causales antes de formalizar.


### Ejemplo (informal a formal)

Problema informal: “Quiero reducir el coste de reparto manteniendo tiempo de entrega ≤ 24h.”

1. Objetivo: minimizar coste total de reparto.

2. Métrica: coste por paquete (USD) y % entregas ≤24h (≥ 95%).

3. Variables de decisión: asignación de paquetes a rutas, número de vehículos, horarios de salida.

4. Parámetros: ubicaciones, demanda por día, capacidad vehículos, velocidad media, coste por km.

5. Restricciones: capacidad vehículo, ventana de tiempo ≤24h, turnos de conductor.

6. Representación: problema de optimización combinatoria (Vehicle Routing Problem con ventana temporal → VRP-VT).

7. Método: heurística metaheurística (si N grande) o solver MILP para instancias pequeñas; simular varias políticas para medir % entrega ≤24h.

8. Validación: probar con datos históricos (1 semana) y comparar coste y cumplimiento.


### Herramientas y librerías

Python: pandas, numpy (manipulación), networkx (grafos), pulp/ortools (optimización), simpy (simulación), scikit-learn/statsmodels (modelos predictivos).

R / Julia: alternativas para modelado estadístico u optimización.

Solvers comerciales: Gurobi, CPLEX (cuando la escala lo justifica).

Herramientas de diagramación: draw.io, Miro para mapas causales e Ishikawa.
(Elige según tu familiaridad y recursos.)


### Validación y verificación del modelo

#### Prueba de casos extremos: ¿qué predice el modelo si la demanda = 0 o muy alta?

#### Comparación con datos históricos: backtesting para modelos predictivos/optimización.

#### Sensibilidad: ¿cómo cambian las soluciones si parámetros varían ±10%?

#### Simplicidad vs. fidelidad: comienza simple; añade complejidad solo si hace falta y está justificada por mejora en predicción/decisión.


### Evitar errores

Modelar todo desde el inicio (sobrecargar el modelo).

Omitir supuestos clave (p. ej. latencias, tiempos de preparación).

Usar variable equivocada como métrica de éxito (p. ej. clicks en lugar de conversiones reales).

Tratar el modelo como la realidad absoluta (confundir modelo con mundo).

No documentar parámetros ni versiones del modelo (imposible reproducir o auditar decisiones).


### Checklist

Mi objetivo está medible y es único?

¿Qué decisión exacta voy a derivar del modelo?

¿Cuáles son las variables de decisión vs parámetros?

¿Qué restricciones son innegociables?

¿Qué supuestos estoy haciendo? ¿Cómo los pruebo?

¿Qué tipo de representación es la más adecuada?

¿Qué datos necesito y están disponibles?

¿Cómo validaré el modelo (tests / backtest / sensibilidad)?

¿Qué constituye una solución aceptable en la práctica?


### Ejercicios

Elige un problema cotidiano (ej.: reducir tiempo en reuniones). Formaliza en 10–15 min: objetivo, métrica, 3 variables de decisión, 2 restricciones.

Toma un dataset pequeño (p. ej. export CSV de tu app) y construye una métrica simple; prueba un modelo predictivo básico (media móvil o regresión) y valida con 80/20 train/test.

Modela en 30 min el flujo de atención de clientes como cola (λ llegada, μ servicio) y calcula coloquialmente si la capacidad actual cumple objetivos de espera (M/M/1 aproximado).



# 9. Problemas sociales / wicked: gobernanza y políticas públicas

Cultura de stakeholders, trade-offs, iteraciones de políticas, indicadores de impacto

Ejercicio: caso: cambio climático / transporte urbano — identifica 5 stakeholders y 3 palancas de intervención.



# 10. Comunicación y toma de decisiones

Cómo presentar un diagnóstico, alternativas, riesgos y métricas a decisores. Técnicas de storytelling para soluciones.

Preparar un brief ejecutivo (1–2 páginas) para la solución de tu proyecto.


## Comunicación y toma de decisiones

##### Cuando enfrentas un problema, una buena comunicación y un proceso claro de toma de decisiones suelen marcar la diferencia entre soluciones eficaces y confusión/derroche

### 1. Principios

#### Claridad de propósito: antes de decidir, todos deben entender cuál es el objetivo y la métrica de éxito.

#### Transparencia de supuestos: documenta lo que asumes (datos, recursos, plazos).

#### Decisiones orientadas por evidencia: prioriza datos/experimentación sobre opiniones cuando sea posible.

#### Responsabilidad y propiedad: quien decide debe saber sus responsabilidades y consecuencias.

#### Comunicación oportuna y concisa: evita ruido; comunica lo necesario en el momento justo.


### 2. Roles (RACI / DACI)

RACI

#### R (Responsible) — quien hace el trabajo.

#### A (Accountable) — quien toma la decisión final (owner).

#### C (Consulted) — expertos que aportan información.

#### I (Informed) — quienes deben ser notificados del resultado


DACI

#### D (Driver) — quien facilita el proceso.

#### A (Approver) — la persona que aprueba la decisión.

#### C (Contributors) — quienes proporcionan input.

#### I (Informed) — quienes se enteran.

Define estos roles antes de la discusión para evitar ambigüedad


### Artefactos de comunicación

#### Brief ejecutivo (1 página): problema → objetivo (métrica) → opciones (3 max) → recomendación → riesgos y plan de mitigación → request (qué se necesita).

#### Decision memo (2–3 páginas): más detalle técnico, datos, análisis de sensibilidad, coste/beneficio.

#### One-pager de hipótesis + experimento: hipótesis, métrica primaria, duración, criterio de éxito, rollback.

#### Dashboard mínimo: visualización clara de la métrica primaria y señales de alarma.

#### Playbook / Runbook: acciones paso a


### Técnicas de decisión

#### Matriz impacto × esfuerzo — prioriza ideas.

#### Decision matrix (scoring) — lista de criterios ponderados (p. ej. impacto 40%, coste 30%, riesgo 30%) y puntúa cada opción.

#### Coste de oportunidad explícito — ¿qué pierdes si eliges A vs B?

#### Análisis de escenarios — mejor/esperado/peor caso con números claros.

#### Prueba mínima viable (PDCA/A-B testing) — elegir piloto antes de full rollout.

#### Regla del 2/3 — si 2/3 de los datos apuntan a una opción y el riesgo es manejable, toma la decisión y ejecuta un piloto.

#### Decidir por consenso rápido (consent) — recoger objeciones importantes, si no hay objeción razonada, avanzar.


### Formato reunión de decisión

#### 1. Contexto (3 min): objetivo y métricas.

#### 2. Evidencia (7–10 min): datos clave / hallazgos.

#### 3. Opciones (7–10 min): 2–3 alternativas con pros/cons.

#### 4. Recomendación (5 min): quién propone y por qué.

#### 5. Preguntas críticas (10–15 min): riesgos, mitigaciones, dependencias.

#### 6. Decisión & next steps (5 min): quien aprueba, responsables, timeline y cómo se medirá.

Graba acuerdos en un acta corta y asigna responsables (RACI).


### Plantilla Comunicar la decisión

Asunto: Decisión — título corto

Qué se decidió: (1 línea)

Por qué: (3 bullets con evidencia)

Qué cambia: (quién hará qué y cuándo)

Riesgos & mitigaciones: (2 bullets)

Cómo mediremos: (métrica y frecuencia)

Contacto: (owner)

Envía a los I y asegúrate que el A lo valide.


### Manejo de conflictos y stakeholders

#### Mapea stakeholders por influencia y interés (matriz 2×2).

#### Anticipa objeciones: prepara datos y condiciones de mitigación.

#### Escucha activa: recoge preocupaciones, reformula para mostrar comprensión y documenta si la objeción cambia el análisis.

#### Separar decisión técnica de política: si hay conflicto político, identifica quién debe decidir (often exec sponsor).


### Sesgos en decisiones

#### Confirmación: busca evidencia que contradiga tu posición.

#### Anclaje: evita que la primera cifra domine; presenta rangos y sensibilidad.

#### Exceso de confianza: pide estimaciones de intervalo (p. ej. rango probable) y verifica con datos históricos.

#### Disponibilidad: no extrapoles a partir de un caso notable; usa muestras representativas.

#### Sunk cost: decide sobre futuro coste/beneficio, no lo ya gastado.
Mitigación: usar pre-mortems, pedir un “abogado del diablo”, y tener criterios objetivos definidos antes.


### Decisiones en condiciones de incertidumbre

#### Define miembros de experimentos y periodos cortos de prueba.

#### Usa opciones reales (small bets): capitaliza lo que se aprende.

#### Establece triggers numéricos para escalar/revertir.

#### Considera frameworks como Expected Value (si puedes estimar probabilidades) o análisis de utilidad cuando el impacto no es lineal.


### Post-decision: seguimiento y aprendizaje

#### Verificación: monitoriza métricas acordadas (día 1, semana 1, mes 1 según el caso).

#### Retrospectiva rápida: ¿qué funcionó? ¿qué supuestos fallaron? (15–30 min).

#### Documenta decisiones y “por qué” en repositorio accesible (lecciones aprendidas).

#### Ajusta políticas / playbooks si la decisión se institucionaliza


### Plantilla Decision Matrix

Lista opciones A, B, C.

Define criterios (ej. Impacto, Coste, Riesgo, Tiempo) y pesos que sumen 1.

Puntúa 1–5 cada opción por criterio.

Calcula score = sum(peso × puntuación).

Elige la opción con mayor score y consulta riesgos importantes antes de ejecutar.


### Ejemplo

Problema: “La retención D7 es baja; proponer acción.”

Brief: objetivo (D7 +6pp), hipótesis (tutorial interactivo aumenta activación), experimento (A/B en 50% nuevos usuarios por 2 semanas), criterio (Δ≥+4pp con p. práctica), owner (PM), driver (UX), informed (soporte, analytics).

Reunión: 30 min con evidencia (funnel), opciones (tutorial / emails / incentivo), decisión: pilot tutorial.

Post-decision: monitor D1, D7; predefinir rollback si aumento de churn o CAC se eleva.


## Técnicas de storytelling para soluciones

##### Hace que tu problema importe y que la solución parezca inevitable


### Principios

#### 1. Persona primero: sitúa a un personaje real (usuario, cliente, equipo) que sufre el problema.

#### 2. Escena corta + dato: abre con un dato o escena que muestre el dolor — no afirmes, muestra.

#### 3. Tensión / consecuencia: explica qué pasa si no se actúa (coste, riesgo, oportunidad perdida).

#### 4. Revelación/insight: el “por qué” que descubriste (causa raíz o insight del usuario).

#### 5. Solución clara y simple: qué haces, cómo funciona y por qué resuelve la tensión.

#### 6. Evidencia + riesgos mitigados: datos, experimentos o pilotos que validan; reconoce riesgos y mitigaciones.

#### 7. Call to action: qué quieres del oyente (decisión, presupuesto, permiso, recursos) y el siguiente paso inmediato.


### Estructuras probadas (elige según objetivo)
 
#### ABT (And — But — Therefore) — 20–45s

##### AND: contexto breve (qué sabemos).

##### BUT: problema/contradicción.

##### THEREFORE: solución / llamada a la acción.

Ejemplo: “Tenemos 200k usuarios activos y un funnel optimizado, pero la conversión en checkout cayó 40% en móviles, por eso proponemos un A/B del nuevo formulario para recuperar al menos 3 puntos de conversión.”


#### PAS (Problem — Agitate — Solve) — buen para emails

##### PROBLEM: presenta el dolor.

##### AGITATE: magnifica la consecuencia real.

##### SOLVE: muestra la solución y el siguiente paso.


#### SCQA (Situation — Complication — Question — Answer) — formato ejecutivo

##### S: situación actual.

##### C: complicación que rompe la situación.

##### Q: la pregunta crítica que surge.

##### A: tu respuesta/solución.


#### STAR / CAR (Situation-Task-Action-Result) — para casos de éxito/post-mortem

##### Buen formato para presentar un experimento o RCA: qué pasó, qué se intentó, qué se hizo y el resultado cuantificado.


#### Pixar / cinco-actos (para presentaciones más largas)

##### Había una vez… (contexto)

##### Todos los días… (rutina)

##### Hasta que un día… (evento disparador)

##### Porque de eso… (lucha/ensayos)

##### Hasta que finalmente… (resolución y aprendizaje)


### Técnicas narrativas y herramientas

#### Show, don’t tell: usa anécdotas cortas o una captura de usuario (screen) para ilustrar el fallo.

#### Metáfora potente: una imagen simple ayuda a recordar (p.ej. “el funnel es un cedazo con agujeros”).

#### Regla del 3: tres datos, tres riesgos, tres pasos; ayuda a la memoria.

#### Visual + cifra: en slides, 1 idea por slide con 1 cifra clave en grande.

#### Contraste antes/después: muestra el mundo sin la solución y con la solución (números + escenario).

#### Causa → efecto → prueba: cada afirmación de solución debe enlazar a evidencia (experimento, pilot, benchmark).

#### Humildad estratégica: menciona limitaciones y cómo las mitigas (pre-mortem breve).


### Plantillas

#### 30s pitch (elevator)

```
“[Contexto breve y dato]. Pero [problema específico y consecuencia]. Proponemos [solución en 1 frase]. Esperamos [métrica objetivo] en [tiempo]. Pido [qué necesitas ahora].”
```

#### Email ejecutivo

1. Línea asunto + 1 frase impacto.

2. Problema + evidencia (2 bullets con cifras).

3. Recomendación + plan mínimo (Do) + petición clara (aprobación/recursos).


#### Slide-deck mínimo

1. Problema (1 cifra + escena).

2. Impacto (números y stakeholders afectados).

3. Insight / causa raíz.

4. Solución propuesta + MVP/experimento.

5. Métricas, riesgos y pedido (qué aprobara y cuándo).


### Ejemplo (producto — checkout)

“Teníamos 200k usuarios móviles diarios, pero la conversión móvil bajó de 6% a 3% la última semana, perdiendo ~$40k/sem. 

Investigamos y el 60% de rechazos vienen de tarjetas locales (BINs) — insight: proveedor de pagos aplica nuevas reglas sin testing local. 

Propuesta: pilotar rollback de reglas para 20% del tráfico y añadir test suite con BINs locales. 

Objetivo: recuperar 2 pp de conversión en 2 semanas. 

Pido autorización para deploy y 2 devs por 1 semana.”


### adaptar el tono según audiencia

#### Ejecutivos: cifras + riesgo + ask claro (1–2 frases).

#### Técnicos: mostrar logs, RCA breve, plan de rollout con feature flags.

#### Clientes o soporte: disculpa clara, qué cambia para ellos, qué hacemos para evitar recurencias.

#### Equipo: enfoque en aprendizaje y pasos concretos (qué toca a quién).


### Verdad práctica: métricas como «beats» narrativos

Introduce métricas como hits en la narrativa: 

```
“En vez de decir que funcionará, mostraré que: 
D1 sube X%, error rate baja Y%.” 
```
Cada paso del story debe poder medirse.


### Evitar errores

#### Saltarse la evidencia: no afirmes sin dato.

#### Demasiada tecnicidad en la apertura: contexta primero en usuario/dato.

#### No pedir nada concreto: toda historia debe terminar con un pedido claro.

#### Ignorar objeciones: anticipa la 1–2 objeciones principales y respóndelas en la historia.


### Checklist

¿Tengo 1 línea que resume problema + ask?

¿Abro con una escena o cifra memorable?

¿Mi solución tiene 1 métrica primaria y un horizonte temporal?

¿Incluyo evidencia o plan Do mínimo?

¿Termino con un CTA claro y plazo?



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



# Storytelling

##### Narrativa oral, escrita y visual


## Objetivo

Desarrollar la capacidad de concebir, estructurar y contar historias memorables y eficaces en diferentes formatos (cuento corto, relato para presentación / pitch, guion breve, pieza visual, y narrativa para marcas), con herramientas prácticas y una cartera (portfolio) de piezas.


## Módulos

1. Fundamentos: qué es una historia y por qué funciona

2. Idea, premisa y tema

3. Estructura: acto 1/2/3, giros, beats

4. Personajes: arcos, deseos, conflictos

5. Mundo y contexto: escenas, ritmo, exposición

6. Diálogo, voz y punto de vista

7. Ritmo, tensión y manejo de la información

8. Formatos: cuento corto, pitch, guion, storytelling visual

9. Storytelling persuasivo (marketing, presentaciones)

10. Edición, feedback y reescritura

11. Producción y adaptación (audio, vídeo, slides)

12. Portfolio, presentación final y plan de mejora continua



# 1. Fundamentos: ¿qué es una historia?

Conceptos clave: conflicto, cambio, causa-efecto, audiencia, propósito (entretener, informar, persuadir).

Ejercicios:

Escribe en 100 palabras una historia completa (inicio-nudo-desenlace).

Identifica 3 historias que te emocionen y anota qué conflicto y qué cambio ocurre.

Lectura recomendada (breve): capítulos introductorios de The Anatomy of Story (John Truby) o Story (Robert McKee).

Entregable: historia de 100–300 palabras + 3 líneas explicando su conflicto y cambio.



# 2. Idea, premisa y tema

Conceptos: Premisa (qué pasa si…), tema (mensaje profundo), stakes (lo que se pierde).

Ejercicios:

Genera 10 premisas “¿qué pasa si…?” en 30 minutos.

Elige 3 y transforma cada una en una sinopsis de 1 párrafo.

Entregable: 5 premisas y 2 sinopsis pulidas



# 3. Estructura dramática

Conceptos: Incidente incitador, punto medio, clímax, resolución; beats por escena.

Ejercicios:

Descompón una película o libro en 10 beats.

Crea un outline en 3 actos para una de tus sinopsis.

Entregable: outline de 3 actos (1–2 páginas).



# 4. Personajes y arcos

Conceptos: deseo, necesidad, obstáculo, cambio interno/externo, arquetipos vs. matices.

Ejercicios:

Ficha de personaje: objetivo, miedo, fallo, secreto, arco.

Escribe una escena que muestre el deseo y el obstáculo del protagonista sin explicar nada.

Entregable: 3 fichas de personaje + 1 escena (300–600 palabras).



# 5. Mundo, escenas y exposición

Conceptos: mostrar vs decir, reglas del mundo, subtexto, establishing shots (visual).

Ejercicios:

Describe en 150 palabras el mundo de tu historia mediante detalles observables.

Reescribe una escena que originalmente “explique” (exposición) para que muestre en su lugar.

Entregable: descripción del mundo + escena revisada



# 6. Diálogo, voz y punto de vista

Conceptos: voces distintas por personaje, subtexto dialogado, elección de narrador (1ª, 3ª, omnisciente).

Ejercicios:

Escribe el mismo intercambio (conflicto leve) en 3 registros: formal, coloquial, sarcástico.

Reescribe una sección en otro punto de vista.

Entregable: 3 variaciones de diálogo + fragmento en 2 puntos de vista.



# 7. Ritmo, tensión y manejo de la información

Conceptos: cómo acelerar/ralentizar, cliffhangers, información incremental, plant & payoff.

Ejercicios:

Reduce una escena de 700 palabras a 300 manteniendo la tensión.

Crea 5 “plant & payoff” para tu historia (plant = sembrar detalle, payoff = resultado).

Entregable: escena comprimida + lista de plant & payoff.



# 8. Formatos: cuento corto, pitch, guion, narrativa visual

Conceptos: diferencias de formato (extensión, ritmo, técnica), qué exige cada formato.

Ejercicios:

Convierte tu outline a: 1) cuento de 1.000–1.500 palabras; 2) pitch de 60 segundos; 3) tratamiento de guion de 1 página.

Entregable: las tres versiones (short story, elevator pitch, treatment).



# 9. Storytelling persuasivo y presentacional

Conceptos: estructura de pitch (hook, problema, solución, impacto), storytelling para marcas, llamadas a la acción.

Ejercicios:

Crea una historia de cliente (case story) que ilustre un problema y la solución (formato: antes/después).

Diseña una presentación de 5 diapositivas basada en una historia (slide por beat principal).

Entregable: caso de cliente (300–500 palabras) + deck de 5 slides (puedes usar texto/outline). 



# 10. Edición, crítica y reescritura

Conceptos: tipos de edición (macro vs micro), checklist para cortar lo innecesario, cómo dar/recibir feedback.

Ejercicios:

Intercambia texto con otra persona (o usa un grupo/foro) y aplica 3 sugerencias.

Haz 3 rondas de reescritura (macro, medio, micro).

Entregable: versión original + versión final con notas de cambios.



# 11. Producción y adaptación multimodal

Conceptos: adaptar texto a audio (podcast), vídeo, comic o slides; ritmo visual; guion técnico básico.

Ejercicios:

Convierte una escena en un guion de audio (cue musical, efectos, voces).

Escribe el storyboard en 6 viñetas para la escena.

Entregable: guion de audio + storyboard simple.



# 12. Portfolio, presentación final y siguiente paso

Actividades: seleccionar 3–5 piezas pulidas del curso (cuento, pitch, caso, guion), preparar presentación (5–8 minutos) y plan personal de mejora.

Entregable final: portfolio + grabación o nota explicativa de 2 páginas que contextualice cada pieza.



# Lecturas

##### Story — Robert McKee (estructura dramática)

##### The Anatomy of Story — John Truby (técnica profunda)

##### Save the Cat! — Blake Snyder (excelente para beats y pitches)

##### The Hero with a Thousand Faces — Joseph Campbell (monomito / arquetipos)

##### On Writing — Stephen King (voz y oficio)

##### Made to Stick — Chip & Dan Heath (ideas que perduran — útil para storytelling persuasivo)



# Prácticas

Diario (15–30 min): escribe una escena o micro-historia cada día (ej. 100–250 palabras).

Semana: una sesión de lectura + una sesión de escritura larga (90–120 min).

Revisión: revisa y recorta lo escrito al menos una vez por semana.



# Ejercicios

100-word story: escribe una historia completa en 100 palabras.

What if: 10 premisas en 20 minutos.

Character interview: entrevístalo (10 preguntas).

Change the POV: reescribe una escena cambiando el narrador.

Show don’t tell: toma una página llena de exposición y conviértela en una escena mostrada.



# Evaluación

1. Claridad de premisa (¿se entiende qué está en juego?)

2. Arco/transformación (¿hay cambio significativo?)

3. Economía (¿todo aporta algo? ¿sin relleno?)

4. Voz / personaje (¿voces distintas, creíbles?)

5. Impacto emocional / persuasión (¿provoca reacción, interés o acción?)
Puntaje total: 25. Apunta a 18+ para piezas publicables en portfolio.



# Feedback real

Participa en comunidades: foros de escritura, subreddits (r/writing), talleres locales.

Haz lecturas en voz alta para amigos o grupos (escuchar reacciones aporta mucho).

Intercambia revisiones: pide 3 comentarios puntuales (macro, micro, línea favorita).



# Tools y formatos

Escritura: Google Docs / Scrivener / Obsidian.

Guion: Celtx / WriterDuet (o formato .fdx / Final Draft si es necesario).

Storyboards: papel + lápiz o Canva / Figma para mockups rápidos.

Grabar audio: Audacity o el móvil para prototipar podcasts.

Presentaciones: PowerPoint / Google Slides — trabaja narrativa por diapositiva, no por bullet points.



# Plan de 3 proyectos

1. Cuento corto (1.500–3.000 palabras) — muestra dominio narrativo tradicional.

2. Pitch + tratamiento (start-up o proyecto creativo) — muestra storytelling persuasivo.

3. Adaptación multimodal — escena convertida en audio o vídeo corto + storyboard.



# Medios / Publicación / Difusión 

##### Publica en Medium / Substack o participa en concursos de microficción.

##### Colabora con creadores (podcasts, cineastas, diseñadores).

##### Repite el ciclo enfocándote en formatos específicos (guion, no-ficción, narrativa transmedia).



# Storytelling Empresa

##### Líderes, product managers, equipos de ventas, marketing, data, customer success y ejecutivos

##### Orientado a resultados medibles (adopción, persuasión, conversión, alineamiento interno) y combina teoría, práctica.


## Objetivo

Capacidad de diseñar y presentar historias empresariales claras, persuasivas y accionables para distintos públicos (clientes, inversores, ejecutivos, equipos) usando datos, estructura narrativa y medios adecuados para lograr objetivos concretos (decisión, compra, alineamiento, cambio).


# 1. Fundamentos del storytelling empresarial

Conceptos: propósito (informar/convencer/transformar), audiencia (stakeholder mapping), jobs-to-be-done de la historia.

Ejercicio: mapear 4 públicos clave y su “job” (qué necesitan decidir/entender).

Entregable: ficha de audiencia (una página por público).



# 2. Premisa, mensaje único y llamada a la acción

Conceptos: premisa clara (“one-liner”), tesis, takeaways accionables.

Ejercicio: transformar un informe extenso en 1 frase + 3 bullets de impacto.

Entregable: one-liner + 3 CTAs (call to action) por público.



# 3. Estructura narrativa aplicada (para presentaciones y pitches)

Modelo: Hook → Problema → Evidencia (datos/story) → Solución → Impacto → CTA.

Ejercicio: redactar un pitch de 3 minutos usando ese modelo.

Entregable: pitch escrito + guion de 3 minutos.



# 4. Data storytelling: narrar con datos (sin perder claridad)

Conceptos: pregunta analítica, insight, visualización con propósito, incertidumbre y límites.

Ejercicio: coger un dashboard/tabla real y extraer 3 insights accionables; crear 2 visuales simples que apoyen cada insight.

Entregable: 3 insights + 2 gráficas por insight (PNG o mockup).



# 5. Historias de cliente y casos de uso (customer narratives)

Conceptos: antes/después, métricas de éxito, voz del cliente (testimonio).

Ejercicio: construir 2 case stories: uno corto para web, otro extenso para ventas.

Entregable: case story web (150–250 palabras) + case study (600–1.200 palabras) con métricas.



# 6. Storytelling para decisiones internas (ejecutivos y boards)

Conceptos: síntesis ejecutiva, escenarios, riesgos & mitigaciones, asks claras.

Ejercicio: convertir un análisis técnico en un memo ejecutivo de 1 página con 3 recomendaciones.

Entregable: memo ejecutivo + slide de respaldo con evidencia.



# 7. Marca y narrativa corporativa (brand story)

Conceptos: propósito de marca, mito fundacional, tono de voz, consistencia cross-channel.

Ejercicio: redactar la “narrativa de 30s” para la marca y un guion para vídeo institucional de 90s.

Entregable: brand one-liner + guion 90s



# 8. Presentaciones que convierten (diapositivas & habla)

Conceptos: diseño basado en idea por slide, minimalismo, supporting visuals, callouts.

Ejercicio: transformar un deck de 20 slides (texto denso) a 8 slides con narrativa clara. Practicar presentación en 8 minutos.

Entregable: deck 8 slides + grabación (o script) de 8 minutos.



# 9. Storytelling en ventas y producto (demo narratives)

Conceptos: demo as a story (persona → pain → moment of truth → ROI), objection handling con mini-historias.

Ejercicio: crear 3 scripts de demo para 3 buyer personas. Roleplay de objeciones.

Entregable: 3 scripts + lista de 10 objeciones y respuestas narrativas.



# 10. Medición, playbook y rollout interno

Conceptos: KPIs (adopción del mensaje, tasa de conversión, NPS tras historia, tasa de cierre), playbook de storytelling, entrenamiento y governance.

Ejercicio: diseñar un playbook de 1–2 páginas y plan de entrenamiento de 90 minutos para 20 personas. Definir 3 KPIs y cómo se medirán.

Entregable: playbook + plan de training + dashboard KPI propuesto.



# 11. Plantillas

1. Ficha de audiencia / stakeholder map (1 página).

2. One-liner / thesis template (fill-in).

3. Pitch script (3 min) + elevator (30–60s).

4. Case story template (web & longform).

5. Memo ejecutivo (1 page).

6. Slide template: idea por slide (8–10 slides máximas).

7. Data-insight brief: insight, evidencia, recommended action, uncertainty.

8. Playbook de storytelling (2 páginas): cuándo usar qué formato, checklist pre-presentación.



# Métricas

Alineamiento ejecutivo: % de stakeholders que aprueban la recomendación tras la presentación (meta 80%+).

Ventas: mejora en tasa de conversión post-introducción de nuevas historias (ej. +10%).

Marketing: CTR y tiempo en página de case stories; shareability (compartidos).

Producto: % de adopción de feature después de campaña de lanzamiento basada en narrativa.

Data adoption: reducción en preguntas de seguimiento tras informes (indicador de claridad).



# Herramientas

Slides & decks: Google Slides / PowerPoint (usar slide master con plantilla narrativa).

Storyboarding / video: Figma / Canva / Notion para guiones.

Data viz: Google Sheets, Excel, Tableau/Looker/Power BI para pruebas; exportar PNGs limpios.

Recording & prototyping: Loom / Zoom / Audacity para practicar grabaciones.

Repositorio corporativo: Notion / Confluence para playbooks y plantillas.



# Prácticas

Workshop 90–120 min (semana 3): construir pitch en equipo + presentaciones rápidas (peer feedback).

Roleplay de ventas (semana 9): 30–40 min por sesión, rotando roles cliente/vendedor.

Session de crítica de decks (semana 8): revisión colectiva con 3 reglas: objetivo, idea por slide, CTA.

Practicar “one-minute story” diario durante 2 semanas para mejorar síntesis.



# Evaluación

##### Claridad del mensaje (¿se entiende la tesis en 10s?).

##### Alineamiento con la audiencia (¿responde al job-to-be-done?).

##### Evidencia y credibilidad (datos, caso, testimonio).

##### Economía y foco (sin info irrelevante).

##### Llamada a la acción (¿qué pedir/qué decisión se busca?).
Puntaje total: 25 — objetivo 20+.



# Riesgos

##### Exceso de datos sin historia: priorizar 1–3 insights accionables.

##### Historias no adaptadas al público: siempre segmentar y escribir 1-liners por público.

##### Slides densas: convertir cada slide en apoyo visual de una idea sólo.

##### Confusión entre storytelling y manipulación: mantener transparencia de supuestos y limitaciones. 


## Lecturas

##### Made to Stick — Chip & Dan Heath (ideas que perduran).

##### Storytelling with Data — Cole Nussbaumer Knaflic (visualización para negocios).

##### Good Charts — Scott Berinato (visuals + narrativa).

Hojas de plantillas internas: one-pager executive memo; case story template; data-insight brief




# Artefactos/entregables

##### Diseño, uso y gestión de artefactos (documentos, plantillas, visualizaciones, presentaciones, dashboards, reportes, playbooks, etc.) como instrumentos de coordinación, decisión y comunicación dentro de una organización


# 1. Fundamentos de artefactos en empresa

Conceptos clave: qué es un artefacto, diferencia con entregable, su rol en la coordinación, visibilidad y accountability.

Ejercicios: listar 10 artefactos que usas en tu empresa, clasificarlos (decisión, comunicación, operación, documentación).

Entregable: mapa de artefactos actuales (qué existe, qué falta, qué sobra).


# 2. Tipologías de artefactos y sus funciones

Tipos principales:

##### Estrategia: visión, roadmap, OKRs.

##### Operación: procesos, manuales, checklists, SOPs.

##### Decisión: business case, memos ejecutivos.

##### Comunicación: presentaciones, newsletters, reportes.

##### Conocimiento: wikis, playbooks, repositorios.

##### Datos: dashboards, métricas, informes.

Ejercicios: tomar un caso real y asignar artefactos apropiados a cada nivel (estratégico, táctico, operativo).

Entregable: cuadro comparativo de artefactos con ejemplos de tu empresa.



# 3. Diseño de artefactos efectivos

Principios: claridad, propósito único, visualización adecuada, economía de información.

Ejercicios: rediseñar un artefacto existente (ej. un reporte de 5 páginas en 1 página).

Entregable: antes y después de un artefacto real.



# 4. Artefactos de decisión y síntesis ejecutiva

Conceptos: memos ejecutivos, business case, one-pagers.

Ejercicios: transformar un análisis largo en un memo ejecutivo (1 página, con 3 recomendaciones).

Entregable: memo ejecutivo + plantilla estándar para futuros.



# 5. Artefactos de comunicación y storytelling visual

Conceptos: estructura narrativa en presentaciones, visualización de datos, storytelling con diapositivas.

Ejercicios: convertir un reporte denso en un deck de 8 slides (idea por slide).

Entregable: presentación de 8 slides.



# 6. Artefactos de procesos y operación

Conceptos: SOPs (standard operating procedures), checklists, playbooks, diagramas de flujo.

Ejercicios: documentar un proceso clave de tu equipo en formato playbook de 2 páginas.

Entregable: playbook o SOP (versión piloto).



# 7. Artefactos de datos y métricas

Conceptos: dashboards accionables, reporting cadencial (semanal/mensual), métricas clave (KPIs, OKRs).

Ejercicios: diseñar un dashboard mínimo (3 KPIs, 3 visualizaciones, 1 recomendación).

Entregable: mockup de dashboard + guideline para lectura.



# 8. Gestión del sistema de artefactos

Conceptos: ciclo de vida de artefactos (creación, uso, actualización, archivo), gobernanza documental, repositorios compartidos (Notion, Confluence, Google Drive).

Ejercicios: definir políticas de actualización y cadencia (qué se revisa cada cuánto).

Entregable: “Playbook de artefactos” (guía interna de 2–3 páginas con qué artefacto usar, quién lo mantiene, cuándo se revisa).



# Portfolio

Mapa de artefactos actuales (1).

Cuadro comparativo de artefactos y funciones (2).

Rediseño de un artefacto real (3).

Memo ejecutivo + plantilla (4).

Presentación en 8 slides (5).

Playbook o SOP piloto (6).

Dashboard mínimo viable (7).

Playbook de artefactos (8).



# Evaluación

##### 1. Claridad: ¿se entiende el propósito en menos de 30 segundos?

##### 2. Relevancia: ¿sirve al público objetivo?

##### 3. Accionabilidad: ¿contiene recomendaciones claras o próximos pasos?

##### 4. Economía: ¿solo lo necesario, sin ruido?

##### 5. Mantenibilidad: ¿puede actualizarse fácil y con cadencia definida?



# Recursos

##### Working Backwards (Amazon) — sobre artefactos de decisión (memos de 6 páginas).

##### The Pyramid Principle (Barbara Minto) — síntesis ejecutiva.

##### Storytelling with Data (Cole Nussbaumer) — visualización empresarial.

##### High Output Management (Andy Grove) — reporting y métricas.



# Prácticas

Hacer inventario real en tu empresa y rediseñar 2–3 artefactos clave.

Construir un repositorio compartido con plantillas oficiales (Google Docs, Notion, Confluence).

Implementar un ritual de revisión de artefactos (ej. revisión de dashboards semanal, memos antes de cada decisión importante).



# Reuniones 

##### Medir su efectividad, transformar reuniones pobres en rituales productivos que impulsan decisiones y coordinación.


## Objetivo

Que equipos y líderes diseñen y faciliten reuniones efectivas y repetibles

##### 1) cumplan un propósito claro, 2) respeten el tiempo de los asistentes, 3) produzcan decisiones y seguimientos concretos, y 4) permitan mejora continua.


# 1. Fundamentos: ¿por qué y cuándo reunirse?

Conceptos clave: propósito (decision, sync, brainstorming, retro, info), outcome vs output, coste por hora-persona.

Ejercicio: inventario de reuniones actuales (lista todas las reuniones recurrentes; para cada una define propósito y participantes).

Entregable: matriz reunión vs propósito (verde = claro; naranja = dudoso; rojo = eliminar/re-diseñar).



# 2. Tipos de reuniones y cadencias

Tipos comunes: daily stand-up, weekly sync, planning, sprint review, retrospective, decision meeting, 1:1, board/exec, all-hands, customer demo, ad-hoc troubleshooting.

Ejercicio: para cada tipo: define objetivo, duración ideal, frecuencia y quiénes deben asistir.

Entregable: catálogo interno con plantillas de cadencia.



# 3. Roles y responsabilidades

Roles estándar: facilitator (convoca + guía), owner/host (responsable del contenido), scribe/secretario (minutos/acciones), timekeeper, participant, subject-matter experts invitados.

Ejercicio: asigna roles a 5 reuniones recurrentes y define rotación (si aplica).

Entregable: rol matrix + política de rotación de facilitadores



# 4. Agendas, pre-reads y artefactos previos

Principios: agenda con propósito por ítem, timebox, owners por punto, material de lectura previa (pre-read) y decisiones esperadas.

Ejercicio: rediseñar una agenda actual (de 60+ min) a una agenda de 60 min con timeboxes y resultado esperado por punto.

Entregable: plantilla de agenda + ejemplo 60-min (ver más abajo).



# 5. Técnicas de facilitación y participación

Técnicas útiles: Lean Coffee, Liberating Structures, Round-Robin, Silent Brainstorming, Dot Voting, 6 Thinking Hats, Fishbowl, Timeboxing estricto.

Ejercicio: practicar 2 técnicas en talleres cortos (45–60 min) y recoger feedback.

Entregable: lista de técnicas con cuándo usar cada una y guión de facilitación rápido.



# 6. Reuniones remotas/híbridas y herramientas

Buenas prácticas: agendas compartidas, pre-reads, cámaras cuando aporte, gestionar latencia, evitar multi-tasking, escribir en chat, usar breakout rooms, recordatorios y grabaciones cuando necesario.

Herramientas: Google Meet / Zoom / Teams; Miro / Mural / FigJam (facilitación); Otter/Loom (minutos/record); Calendly/Outlook para convocatorias.

Ejercicio: ejecutar una reunión híbrida con roles asignados + retro de 10 min al final.

Entregable: checklist logístico para reuniones remotas/híbridas.



# 7. Medición y mejora continua

Métricas: % de reuniones con agenda, duración real vs planificada, acciones con responsable y fecha, tasa de asistencia, puntuación de utilidad (NPS breve), coste por reunión (estimated person-hours).

Ejercicio: recoger métricas de 4 reuniones en las últimas 2 semanas; calcular coste y proponer mejora.

Entregable: dashboard simple KPI + 3 recomendaciones de mejora.



# 8. Rediseño práctico (piloto)

Actividad principal: seleccionar 3 reuniones recurrentes (p.ej. daily, planning, review) y aplicar rediseño completo: nueva agenda, roles, plantilla de minutos y KPIs. Ejecutar 2 ciclos y recoger feedback.

Entregable final: before/after por cada reunión (agenda antigua vs nueva, métricas, lecciones aprendidas).



# Plantillas

## Plantilla: Agenda 60 minutos (IDEAL)

Propósito de la reunión (1 línea).

Pre-reads (links, 2–3 bullets; leer antes).

Timebox 0–5 min — Opening (Facilitador): objetivo del día, reglas rápidas, check-in.

5–25 min — Punto A (Owner): presentación (5–8 min) + 5–12 min discusión / decisión — Resultado esperado: -Decisión / Próximos pasos-.

25–40 min — Punto B (Owner): demo / data / opciones — Resultado esperado.

40–50 min — Punto C (opcional, rápido): blockers, micro-decisions.

50–57 min — Actions & Owners (Scribe): listar acciones, responsables y fechas.

57–60 min — Cierre y retro rápida (1 min): ¿unidad útil? 1–5 score. Parking lot: ítems no resueltos.


## Stand-up 15 minutos

Reglas: pie de reunión (de pie), timebox 15 min, no soluciones largas (llevar off-line).

Formato por persona (max 1–2 min): 1) Qué hice ayer; 2) Qué haré hoy; 3) Bloqueadores (si los hay).

Output: lista de bloqueadores con owner + 24h follow-up.


## Pre-read (one-pager)

Título:

Propósito de la reunión:

Contexto (2–3 bullets):

Datos clave / evidencia (tabla/gráfica pequeña):

Opciones / propuestas (1–3): pros/cons rápidos.

Decisión solicitada: (qué se pide)

Lectura recomendada / anexos: links


## Minutos / Actas (1 página)

Reunión: nombre, fecha, hora, asistentes, ausentes.

Propósito:

Decisiones tomadas (lista): decisión — owner — fecha.

Acciones abiertas (lista): acción — owner — due date — status.

Parking lot: ítems pendientes.

Próxima reunión: fecha, propósito.


## Prácticas

##### Nunca convocar sin propósito claro. Si no hay al menos una decisión/resultado esperado, reconsidera el formato.

##### One-Page Pre-read: si más de 20 minutos de exposición son necesarios, enviar pre-read y usar tiempo de reunión para discusión/decisión.

##### Timebox estricto. Nombrar timekeeper y respetar.

##### 1 idea por slide / 8–10 slides máximo en decks operativos.

##### Acciones con owner y fecha. Sin dueño = sin ejecución.

##### Cadencia mínima de retro para reuniones largas. Cada 6–8 semanas: ¿esta reunión sigue siendo necesaria?

##### Rotación de facilitador como práctica de empoderamiento y mejora.



# Facilitación

##### Lean Coffee: para priorizar temas en reuniones abiertas. (Buen formato para syncs de equipo).

##### Liberating Structures (1-2-4-All, Troika Consulting): para brainstorming estructurado y participación distribuida.

##### Dot Voting: para priorizar opciones rápidamente.

##### Silent Brainstorming + Affinity Mapping: para evitar anclaje temprano.

##### Fist of Five (decisión por consenso): medir nivel de apoyo.

##### Parking Lot: para sacar temas que distraen del objetivo primario.



# Métricas

% de reuniones con agenda enviada 24h antes.

% de reuniones con minuta / acciones publicadas en 24h.

Tasa de asistencia (target según tipo).

Tiempo promedio por reunión vs planificado (target ±10%).

% de acciones cerradas a tiempo.

Puntuación de utilidad (survey de 1–5 al cierre).

Coste estimado por reunión (person-hours × salario promedio) — usar para priorizar cambios.



# Problemas

#### Reuniones eternas sin decisión: establecer decision owner y deadlines; usar timeboxes y dot voting.

#### Demasiados participantes: segmentar (informar vs decidir), invitar sólo SUE (subject-ultimate-essential).

#### Multitasking / poca atención en remotas: activar reglas (cámara opcional si no distrae, silencio en background, usar chat para preguntas).

#### Falta de follow-up: automatizar minuta (template + scribe) y revisar acciones al inicio de la siguiente reunión.

#### Dominio de la discusión por 1-2 personas: usar round-robin o técnicas silenciosas para igualar voz.



# Evaluación

Para cada reunión, puntuar 1–5:

Propósito claro

Agenda + pre-read enviados

Roles asignados

Timeboxing respetado

Acciones con owners y fechas

Minuta publicada

Participación relevante

Decisión/resultado claro
Total máximo: 40 — objetivo 30+.



# Implementación

Auditar (2 semanas): inventario + métricas básicas.

Definir catálogo: plantillas y reglas mínimas (agenda, pre-read, minutes).

Piloto (4 reuniones): aplicar plantillas y roles; capacitar facilitadores.

Medir 4 semanas: recolectar KPI y feedback.

Scale & Governance: playbook de reuniones + onboarding para nuevos hires.



# Persuasividad

##### Teoría, práctica y ética


## Objetivo

##### Desarrollar capacidad de influir de forma ética y efectiva sobre decisiones y comportamientos ajenos, mediante argumentos sólidos, diseño de mensajes, uso de evidencias y técnicas de comunicación verbal y no verbal.


## Módulos

1. Fundamentos y marco conceptual

2. Psicología de la persuasión (heurísticos y sesgos)

3. Audiencias: segmentación y motivadores

4. Mensaje: premisa, tesis y llamadas a la acción

5. Estructura argumental y narrativa persuasiva

6. Evidencia, prueba social y credibilidad

7. Lenguaje verbal y no verbal (voz, tono, microexpresiones)

8. Persuasión digital: copy, UX y visuales

9. Técnicas de cierre y manejo de objeciones

10. Persuasión en equipo y liderazgo (influencia interna)

11. Ética, manipulación y gobernanza del mensaje

12. Proyecto final + medición y plan de mejora continua



# 1. Fundamentos

Conceptos: diferencia entre persuadir, convencer e informar; intención vs resultado; marco RIA (Relevancia, Impacto, Acción).

Ejercicio: analizar 5 mensajes (anuncio, mail, charla) y clasificar su objetivo (informar/convencer/persuadir) y resultado probable.

Entregable: 1 página con análisis comparativo


## Fundamentos de la persuasión

##### Combinando teoría psicológica clásica y técnicas aplicables (orales, escritas y digitales).


### 1. Persuadir

##### Persuadir = cambiar creencias, actitudes o comportamientos de otras personas mediante comunicación intencional

##### No es forzar: es orientar la elección influyendo en motivos, percepciones y contexto.


### 2. Pilares clásicos (Aristóteles)

#### Ethos (credibilidad): el emisor debe parecer competente, honesto y digno de confianza.

#### Pathos (emociones): apelar a sentimientos que muevan a la acción (miedo moderado, esperanza, orgullo, compasión).

#### Logos (razón): argumentos claros, evidencias y lógica que sostienen la petición.


### 3. Principios psicológicos

#### Reciprocidad: la gente devuelve favores; ofrecer algo primero aumenta la probabilidad de obtener un sí.

#### Escasez: oportunidades limitadas parecen más valiosas.

#### Prueba social: mostramos preferencia por lo que otros (similares o muchos) hacen.

#### Autoridad: las recomendaciones de expertos pesan mucho.

#### Gusto/afinidad: nos persuaden los que nos caen bien o se parecen a nosotros.

#### Consistencia/compromiso: una vez que alguien se compromete (aunque sea pequeño), tenderá a ser coherente con eso.

##### Principios aparecen en los trabajos de Robert Cialdini; son heurísticas robustas en contextos humanos


### 4. Estructura de un mensaje persuasivo efectivo

#### 1. Conoce a tu audiencia — sus valores, dolor, idioma, objeciones.

#### 2. Gancha (hook) — apertura que capta atención (historia, pregunta, dato sorprendente).

#### 3. Problema + consecuencia — concreta por qué importa.

#### 4. Propuesta/beneficio — qué ofreces y qué ganan.

#### 5. Evidencia — datos, ejemplos, testimonios, autoridad.

#### 6. Prueba social — casos, usuarios, números.

#### 7. Cierre / llamada a la acción clara — qué quieres que hagan ahora.

#### 8. Facilita la acción — reduce fricción (botones claros, pasos simples).


### 5. Lenguaje y framing (encuadre)

#### Usar marcos: presentar opciones en términos de ganancia vs pérdida cambia decisiones.

#### Metáforas y narrativas: hacen conceptos abstractos memorables.

#### Simplicidad: frases cortas, ejemplos concretos, evitar jerga.

#### Positividad vs negatividad: depende del público y contexto (a veces prevenir pérdidas funciona mejor).


### 6. Entrega y señales no verbales

#### En persona: postura, contacto visual, ritmo, tono y pausas importan tanto como el contenido.

#### En video/audio: claridad vocal, expresividad y edición que destaque el mensaje.

#### En texto: formato, títulos, bullets, tipografía y microcopy (CTA) influyen en la persuasión.


### 7. En texto: formato, títulos, bullets, tipografía y microcopy (CTA) influyen en la persuasión.

#### Pre-empujar (prebunking): presentar y refutar objeciones comunes antes de que aparezcan.

#### Preguntas abiertas: usar preguntas para guiar al interlocutor a concluir por sí mismo.

#### Inoculación: exponer brevemente a contraargumento y mostrar por qué no es decisivo.


### 8. Ética y límites

Persuasión puede volverse manipulación

Pregúntate: ¿respeta la autonomía del otro? ¿es veraz? ¿beneficia al receptor?

#### Mantén transparencia y evita tácticas que exploten vulnerabilidades graves.


### 9. Practicar y medir

#### Prueba A/B en mensajes digitales (titulares, CTA, imágenes).

#### Ensayar en voz alta y grabarte para revisar tono y ritmo.

#### Feedback rápido: pedir a colegas reacciones y objeciones.

#### Métricas: tasa de conversión, respuestas, compromiso, cambio de actitud en encuestas.


### Comprobación

#### ¿Quién es mi audiencia y qué le importa?

#### ¿Mi apertura capta atención en 5–10s?

#### ¿He formulado el beneficio principal claramente?

#### ¿Tengo evidencia creíble y prueba social?

#### ¿Cuál es la llamada a la acción? ¿Es simple?

#### ¿He reducido fricciones? (tiempo, coste, complejidad)

#### ¿Es ético y respetuoso?



# Ej

##### Email de venta: asunto claro → 1 oración problema → 1 oración beneficio → prueba social (1 línea) → CTA directo + enlace.

##### Conversación: preguntar → escuchar → resumir necesidad → ofrecer solución específica → pedir permiso para avanzar.






# 2. Psicología de la persuasión

Conceptos clave: reciprocidad, escasez, autoridad, coherencia/commitment, simpatía, prueba social (Cialdini); sesgos cognitivos relevantes (anclaje, confirmación, disponibilidad, status quo).

Ejercicio: detecta 6 ejemplos reales de estas heurísticas en comunicaciones diarias.

Entregable: mapa heurístico con ejemplos y notas de uso.



# 3. Audiencia y motivadores

Conceptos: jobs-to-be-done, pains/gains, niveles de necesidad, mapas de empatía.

Ejercicio: crear 3 perfiles de audiencia (buyer/persona/decision-maker) con motivadores y frenos.

Entregable: fichas de 3 audiencias con 3 mensajes prioritarios para cada una.



# 4. Mensaje claro y CTA

Conceptos: one-liner, thesis, proposición de valor, llamada a la acción específica.

Ejercicio: condensar un argumento complejo en 1 frase + 3 bullets de apoyo.

Entregable: one-liner + 3 variantes (formal, coloquial, emocional)



# 5. Estructura argumental y narrativa

Modelos: problema→agitación→solución (PAS), AIDA, story-based persuasion (hook→contraste→payoff), framework de evidencia (claim→warrant→backing).

Ejercicio: preparar dos versiones de un mensaje: 1 técnica (datos) y 1 narrativa (historia).

Entregable: scripts (300–600 palabras) y outline de beats narrativos.



# 6. Evidencia, prueba social y credibilidad

Conceptos: tipos de evidencia (anecdótica, estadística, testimonial, experimental), fuentes creíbles, evitación de falacias.

Ejercicio: convertir una afirmación no probada en una afirmación soportada por 3 piezas de evidencia distintas.

Entregable: brief de evidencia listo para presentar



# 7. Voz, lenguaje corporal y presencia

Conceptos: tonalidad, ritmo, pausa, proxemia, postura, miradas, microexpresiones.

Ejercicio: grabar 3 versiones de la misma presentación corto (60–90s) variando ritmo/tono/postura; comparar.

Entregable: 3 grabaciones + auto-análisis (qué funcionó y qué cambiar).



# 8. Persuasión digital (copy & UX)

Conceptos: headline, hero message, CTA placement, fricción, pruebas A/B, diseño para la atención.

Ejercicio: reescribir el copy de una landing page para mejorar conversión; definir 2 A/B tests.

Entregable: versión de copy + plan de test A/B (hipótesis, métricas, duración).



# 9. Cierre y objeciones

Técnicas: preguntas de calibración, reformulación, técnicas para “no” a “sí”, escalada de compromisos, cierre alternativo.

Ejercicio: roleplay con 6 objeciones comunes (venta/licencia/implementación) usando scripting de respuesta.

Entregable: guion de manejo de objeciones + 10 respuestas plantilla.



# 10. Influencia interna y persuasión organizacional

Conceptos: building coalitions, sponsorship, internal narrative, storytelling para decisiones, memo de 1 página para ejecutivos.

Ejercicio: preparar un memo ejecutivo + 3 slides de respaldo para una recomendación estratégica.

Entregable: memo 1-pg + deck 3 slides.



# 11. Ética y límites

Conceptos: consentimiento informado, transparencia, límites de manipulación, derechos del receptor, mensurabilidad del impacto no deseado.

Ejercicio: analizar 3 casos controvertidos (publicidad política, dark patterns, manipulación emocional) y proponer reglas internas.

Entregable: código breve de ética persuasiva (10 puntos).



# 12. Proyecto final y métricas

Actividad: crear una campaña persuasiva aplicada a un objetivo real (venta, adopción interna, fundraising o cambio de comportamiento) e implementarla mínimamente (landing + email + 1 presentación).

Métricas: definir KPIs (conversion rate, CTR, tasa de respuesta, NPS, adopción, cierre) y plan de medición.

Entregable final: campaña empaquetada + report ejecutivo de impacto esperado y plan de seguimiento.



# Práctica

Diario (15–30 min): escribir un micro-argumento (100 palabras), o mejorar un headline/email.

Semana: 1 sesión larga (90–120 min) de práctica: roleplay + revisión de evidencia.

Feedback: buscar 2 personas que te den retro directa por semana (peer review).



# Lecturas

##### Influence — Robert Cialdini (heurísticas).

##### Thinking, Fast and Slow — Daniel Kahneman (sesgos).

##### Made to Stick — Chip & Dan Heath (ideas memorables).

##### Nudge — Thaler & Sunstein (arquitectura de elección).

##### Storytelling with Data — Cole Nussbaumer (visual evidence).

##### Words That Work — Frank Luntz (copy político/comercial).



# Plantillas

#### One-liner persuasivo: [Problema] → [Solución breve] → [Beneficio cuantificable].

#### Estructura AIDA para email: Asunto (Atención) — Opening (Interés) — Body (Deseo: evidencia breve) — CTA (Acción clara).

#### Memo 1-pg: Título, contexto (3 bullets), recomendación (1 línea), 3 evidencias clave, riesgos y mitigaciones, decisión solicitada.

#### Framework de evidencia: Afirmación → Fuente 1 (stats) → Fuente 2 (caso) → Fuente 3 (testimonio).



# Medir progreso

##### Micro-métricas personales: tasa de respuesta a emails reescritos, % de pruebas A/B ganadoras, % de objeciones convertidas en próximos pasos.

##### KPIs de campaña: CTR, conversion rate, tasa de apertura, tasa de adopción, incremento de MRR (si aplica), tasa de cierre.

##### Medición cualitativa: feedback estructurado (3 preguntas: ¿me convences? ¿qué falta? ¿qué te inquieta?), NPS del mensaje.


# Evaluación

##### 1. Claridad del mensaje (¿se entiende en 10s?)

##### 2. Relevancia para la audiencia

##### 3. Credibilidad / evidencia

##### 4. Economía del mensaje (sin ruido)

##### 5. Call to action claro

##### 6. Tono apropiado

##### 7. Ética y transparencia
Puntaje máximo 35 — objetivo ≥ 26.



# Evitar errores

#### Demasiados datos sin historia: prioriza 1–3 insights accionables.

#### Apelar sólo a lógica: combina lógica + emoción + prueba social.

#### Overpromising o claims sin respaldo: siempre dejar un caveat y respaldo.

#### Ignorar frenos de la audiencia: mapear y abordar frenos explícitamente.

#### Técnicas manipulativas: evita dark patterns y tácticas engañosas; prioriza consentimiento y transparencia.



# Aplicaciones

Ventas y cierre de deals.

Lanzamientos de producto y adopción.

Presentaciones ejecutivas y board pitches.

Marketing (copy, landing pages, campañas).

Negociaciones internas (promover ideas, presupuestos).

Cambio de comportamiento (salud, seguridad, adopción interna).



# Fuera de serie/Outliers - Malcolm Gladwell

##### Gladwell sostiene que el éxito excepcional —los outliers— no se explica solo por talento individual o esfuerzo

##### Sino por una combinación de oportunidades externas, contexto cultural, práctica deliberada y circunstancias históricas

El mensaje es: mirar solo al individuo oculta factores estructurales clave.


## 1. La regla de las ~10.000 horas

#### Para alcanzar un nivel de maestría mundial en una habilidad compleja se requieren aproximadamente 10.000 horas de práctica deliberada.

Los Beatles practicando largas horas en Hamburgo; Bill Gates con acceso temprano a computadoras que le permitió acumular horas de programación.

##### Matiz: Gladwell enfatiza la oportunidad de poder practicar (tener tiempo, acceso y contexto), no que 10k sea una ley rígida.


## 2. Oportunidad y timing histórico

#### El momento histórico y las oportunidades únicas (p. ej. acceso temprano a tecnología, condiciones económicas, edad relativa) son decisivos.

Bill Gates nació en el momento adecuado para aprovechar los primeros computadores personales.

Emprendedores y fundadores que aparecen en cohortes históricas con condiciones favorables.

##### Implicación: El “ser el mejor” requiere estar en el lugar correcto en el momento correcto, además de talento.


## 3. Efecto Mateo / acumulación de ventajas

#### Las pequeñas ventajas iniciales tienden a acumularse con el tiempo (quien tiene, recibe más).

Hockey juvenil en Canadá: niños nacidos en los primeros meses del año son más grandes al comienzo del proceso de selección, reciben mejor entrenamiento y por ende más oportunidades, lo que genera una brecha que se amplía.

##### Nombre tomado: “Matthew effect” (por la cita bíblica “al que tiene, se le dará…”).


## 4. Inteligencia práctica y capital cultural

#### Además del cociente intelectual medido, existen habilidades prácticas —cómo comportarse, negociar, pedir recursos— que facilitan el éxito

#### Estos rasgos suelen provenir de la crianza y las prácticas familiares (lo que Gladwell asocia con “capital cultural”).

Diferencias entre familias que practican la concerted cultivation (estimulan y negocian con instituciones) frente a familias con otro estilo de crianza; esto afecta la capacidad para enfrentarse a sistemas formales (escuelas, empleadores).


## 5. Cultura y legado cultural

#### Rasgos culturales históricos (valores, prácticas agrícolas, normas de comunicación) influyen en el comportamiento contemporáneo y en el rendimiento colectivo

Arroz vs. trigo: Gladwell argumenta que la tradición de cultivo intensivo del arroz requiere trabajo metódico, paciencia y atención al detalle, rasgos que se reflejarían en una ética del trabajo y habilidades aritméticas (disciplina y persistencia).

Aviación coreana: Problemas de comunicación y deferencia a la autoridad en la cultura de ciertos países contribuyeron a incidentes; al cambiar cultura organizacional mejoró la seguridad.

##### La idea es que los legados culturales no desaparecen y modelan comportamientos en contextos modernos.


## 6. “Meaningful work” — trabajo significativo y la ética del esfuerzo

#### Las ocupaciones con autonomía, complejidad y una conexión clara entre esfuerzo y resultado fomentan la habilidad y la excelencia.

##### Ejemplo: Industrias o oficios donde el trabajador tiene control y puede ver impacto directo tienden a desarrollar maestría.


## 7.  Casos biográficos y explicativos - anécdotas

Gladwell usa historias como la de Joe Flom (abogado exitoso) para mostrar cómo una combinación de origen familiar, época de nacimiento, tipo de casos disponibles y práctica concentrada explican su éxito —no solo su talento innato.


## Criticas

Investigaciones posteriores matizan la regla de las 10k: la práctica es crucial, pero calidad de la práctica, talento innato y factores biológicos también importan.


## Implicaciones

#### 1. Diseñar oportunidades: Si quieres desarrollar talento en una organización, no solo evalúes individuos: crea acceso a práctica intensa y temprana (tiempo, recursos, mentores).

#### 2. Atención al timing: Identifica ventanas históricas o tecnológicas y procura posicionarte (o a tus equipos) para aprovecharlas.

#### 3. Mitigar desigualdades acumulativas: Revisar procesos de selección que favorecen ventajas iniciales (por edad, acceso, red).

#### 4. Cultura organizacional: Trabaja en normas de comunicación y en crear “trabajo significativo” con autonomía y feedback claro.

#### 5. Valor del contexto: Al evaluar éxito, pregunta por contexto y oportunidades, no solo por rasgos individuales.


## Rs

##### El éxito excepcional surge de talento + práctica deliberada + oportunidades históricas + legados culturales + capital social/familiar. 

##### Mirar solo al individuo da una imagen incompleta; hay que considerar el ecosistema que posibilita (o impide) la excelencia



# David and Goliath - Malcolm Gladwell

##### Cuestiona la intuición común sobre ventajas y desventajas: muchas veces lo que parece una ventaja (tamaño, poder, recursos) puede ser una debilidad en determinadas circunstancias, y lo que parece una desventaja puede convertirse en una fuente de fuerza si se entiende y se explota bien

##### Explora cómo los underdogs ganan y por qué los supuestos poderosos tropiezan.


## 1. “Ventaja de la desventaja” (advantages of disadvantages)

#### Una limitación o dificultad puede forzar a alguien a desarrollar habilidades alternativas y formas creativas de compensar —esas habilidades compensatorias pueden ser más valiosas que la ventaja inicial que se perdió

##### Aplicación: enseñar a alguien con limitaciones a explotar esas limitaciones para crear nichos de competencia.


## 2. “Desventajas deseables” / Desirable difficulties

#### Ciertas dificultades durante el aprendizaje o el desarrollo (p.ej. tener que esforzarse más al inicio) aumentan la resiliencia y la competencia a largo plazo

#### No todas las dificultades son buenas, pero algunas obligan a desarrollar métodos superiores.

##### Diseñar retos controlados (aprendizaje por problemas, prácticas intensivas) que mejoren la habilidad real.


## 3. Inversión de fuerzas (cuando la fuerza se vuelve debilidad)

#### Poderes grandes (ejércitos, instituciones, empresas) pueden sufrir por su tamaño —burocracia, falta de agilidad, expectativas de comportamiento rígidas— que los hace vulnerables frente a tácticas asimétricas.

##### En estrategia organizacional, reconocer cuándo reducir escala o adoptar tácticas no convencionales es más eficaz.


## 4. Legitimidad, autoridad y reacciones humanas

#### Uso de autoridad sin legitimidad (procedimientos injustos, castigos arbitrarios) provoca resistencia y resultados contrarios. 

#### Las personas responden peor a la fuerza cuando perciben ausencia de justicia o explicación.

##### Aplicación: al liderar cambios, combinar autoridad con transparencia y razones legítimas para aumentar el cumplimiento voluntario.


## 5. Importancia del contexto y del “timing”

#### El éxito no es sólo mérito personal; depende del contexto histórico, social y material

#### Oportunidades, coincidencias de época y condiciones externas importan mucho.

##### Aplicación: al evaluar talento o estrategia, analizar el ecosistema y crear condiciones favorables (o mitigarlas).


## 6. Estrategias asimétricas y creatividad táctica

#### Los menos poderosos a menudo adoptan tácticas inesperadas (asimétricas) que explotan las vulnerabilidades del oponente fuerte.

#### Ser pequeño puede permitir experimentar y pivotar rápido.

##### Aplicación: startups, equipos pequeños y movimientos sociales pueden diseñar ventajas competitivas no obvias.


## Ej

Un individuo con una “desventaja” puede desarrollar habilidades alternativas que lo hacen excepcional en un nicho concreto.

Un ejército grande y tradicional puede fracasar contra tácticas irregulares y móviles.

Un líder que impone reglas sin legitimidad genera resentimiento; uno que explica motivos logra colaboración.


## Implicaciones

#### 1. Gestión del talento: no descartes a personas por “defectos” aparentes; investiga fortalezas compensatorias y cómo redirigirlas.

#### 2. Diseño de equipos: mezcla tamaños y estilos; equipos pequeños pueden complementar estructuras grandes.

#### 3. Liderazgo y cambio: explica por qué y crea legitimidad antes de imponer medidas; la aceptación voluntaria es más potente que la obediencia forzada.

#### 4. Estrategia competitiva: piensa en tácticas asimétricas si tienes menos recursos; en ocasiones la flexibilidad vence a la fuerza.

#### 5. Educación y entrenamiento: incorpora dificultades que generen aprendizaje profundo (práctica intencional), pero evita dificultades destructivas.


## Críticas

Generalización: algunos críticos dicen que Gladwell tiende a extraer grandes lecciones de anécdotas o casos particulares; la relación causal puede ser más compleja.

Selección de ejemplos: el foco en historias llamativas puede omitir datos contrarios o explicaciones alternativas.

No todo obstáculo es útil: aunque la idea de “ventaja de la desventaja” es valiosa, no todas las dificultades generan beneficios; muchas producen daño sin compensación.


## Rs 

No subestimes las “desventajas”: pueden transformar a una persona o grupo en creativos, resilientes y tácticamente superiores. 

Tampoco confíes ciegamente en las ventajas obvias: el tamaño y el poder traen fragilidades que los contrincantes inteligentes pueden explotar.



# The Tipping Point - Malcolm Gladwell

##### Momento crítico cuando una idea, producto, moda o conducta pasa de ser marginal a volverse masiva de forma rápida y exponencial

##### Qué factores hacen que algo alcance ese punto de inflexión


## Las tres reglas / factores clave

Gladwell articula tres leyes o factores que, combinados, explican por qué y cómo ocurren los tipping points:


### 1. La Ley de los pocos (The Law of the Few)

No todas las personas tienen el mismo peso social. 

Tres tipos importan:

#### 1. Connectors: personas con redes sociales muy amplias que conectan grupos distintos (ej.: el «centro» social que conoce a mucha gente).

#### 2. Mavens: expertos o recolectores de información que comparten conocimiento (curadores/asesores confiables).

#### 3. Salesmen: persuaders con carisma y habilidad para convencer (influencers de persuasión personal).

##### La idea: una minoría con influencia distribuida puede propagar una idea rápidamente si se activa correctamente.


## 2. La Ley de la pegajosidad (Stickiness Factor)

##### Algunas ideas “pegan” —se recuerdan, se repiten, causan acción— porque su formulación o presentación hace que el mensaje permanezca en la mente

##### Pequeños cambios en el contenido o en el formato (un eslogan, una regla nemotécnica, un diseño) pueden incrementar dramáticamente su efectividad.


## 3. El Poder del contexto (Power of Context)

#### El comportamiento humano es tremendamente sensible al entorno inmediato y a pequeñas variaciones contextuales

#### Pequeños cambios en el ambiente (normas, señales, limpieza, ruido) pueden producir grandes cambios en el comportamiento colectivo.

##### Ejemplo famoso en el libro: la teoría del “broken windows” aplicada a la delincuencia urbana.

 
## Ej:

##### Hush Puppies: un calzado “revivido” por la adopción de un pequeño grupo urbano que lo puso de moda, que luego se expandió masivamente.

##### Sesame Street / Blue’s Clues: cambios en formato y enseñanza que hicieron el contenido pegajoso y eficaz para niños.

##### Política de ‘broken windows’ en Nueva York: pequeños cambios en orden público que afectaron la percepción y conducta general.


## Implicaciones

#### 1. Para lanzar una idea/prodcto: identifica y moviliza connectors, mavens y salesmen antes de escalar.

#### 2. Mejora del mensaje: invierte tiempo en el diseño del mensaje para hacerlo “pegajoso” —simplifica, usa ganchos memorables, pruebas sociales.

#### 3. Optimiza el contexto: controla señales ambientales que faciliten la adopción (ambiente, reglas, incentivos, fricción).

#### 4. Estrategia combinada: rara vez un solo factor basta; la combinación (persona adecuada + mensaje pegajoso + contexto favorable) crea contagio.


## Críticas y matices

Basado en anécdotas: críticos dicen que Gladwell selecciona ejemplos atractivos y que la explicación puede ser simplista frente a dinámicas complejas.

Falta de predictibilidad: identificar exactamente cuándo algo hará tipping sigue siendo difícil; no hay una fórmula matemática universal.

Sobresimplificación de causalidad: correlaciones anecdóticas no siempre prueban causalidad; otros factores estructurales pueden importar más.


## Checklist

¿Has identificado 10–30 personas clave tipo connector/maven/salesman?

¿Tu mensaje tiene un elemento “pegajoso” (hook, historia simple, beneficio claro)?

¿Reduciste fricción y mejoraste el contexto (facilitar la acción, señales claras)?

¿Puedes probar a pequeña escala (experimentos controlados) y medir efecto antes de escalar?

¿Tienes mecanismos para amplificar: testimonios, redes, medios, iteración rápida?


## Rs 

##### Las epidemias sociales (ideas, modas, comportamientos) estallan cuando: 

##### 1) las personas adecuadas lo difunden, 2) el mensaje es pegajoso, y 3) el contexto permite que el comportamiento se propague. No es magia; es la intersección de personas, contenido y entorno. 



# Blink: The Power of Thinking Without Thinking' - Malcolm Gladwell?

##### Explora el poder (y los límites) del pensar sin pensar

##### Las decisiones rápidas —a veces instantáneas— que toma nuestra mente (el “inconsciente adaptativo”) pueden ser sorprendentemente precisas y útiles, pero también frágiles y engañosas

##### Gladwell presenta cuándo confiar en esos juicios instantáneos y cuándo desconfiar.


## 1. Thin-slicing (cortar fino)

#### Capacidad de extraer conclusiones a partir de vanos fragmentos de información (unos segundos u observaciones parciales).

##### Ej.: formarte una impresión sobre la competencia de alguien tras unos segundos de interacción.


## 2. inconsciente adaptativo

#### Hay procesos mentales rápidos, automáticos y eficientes que resumen patrones complejos sin pasar por el análisis consciente

##### Son útiles para tomar decisiones bajo incertidumbre o tiempo limitado.


## 3. Decisiones rápidas acertadas - y por qué funcionan

#### Cuando tienes experiencia o cuando la señal relevante es clara y no contaminada por ruido, la intuición refleja patrones reales

##### Ej.: un experto que «sabe» que algo está mal en una obra de arte tras unos segundos).


## 4. El peligro de la sobrecarga de información

#### Demasiada información puede enmascarar las señales útiles

#### Analizarlo todo (paralysis by analysis) puede empeorar la decisión

##### A veces menos = mejor.


## 5. Priming y sesgos

#### Los juicios rápidos también son vulnerables a estímulos sutiles del contexto (palabras, ambiente) que nos “preparan” para pensar de cierta manera, y a estereotipos que distorsionan la percepción

##### Ej.: efecto de apariencia en evaluaciones


## 6. El caso del «Warren Harding Error»

#### Gladwell usa figuras históricas cuya apariencia causó impresiones equivocadas

#### La gente puede errar drásticamente cuando confunde señales superficiales (presencia, apariencia) con competencia real.


## 7. Mejorar la intuición

La intuición es mejor cuando:

#### Proviene de experiencia deliberada y feedback (práctica que permite identificar cuáles señales importan)

#### Se protege del ruido y la información irrelevante

#### Se combina con reglas simples que filtran lo esencial.


## Ejemplos

##### Expertos que «saben» al instante: especialistas que rechazan una pieza como falsa tras una mirada.

##### Juicios rápidos que fallan: decisiones basadas en estereotipos o en señales irrelevantes (p. ej. apariencia) pueden llevar a errores serios.

##### Priming experimental: pequeñas sugerencias contextuales cambian comportamientos/juicios sin que lo notemos


## Aplicaciones

#### Cuando confiar en la intuición: decisiones rápidas en ámbitos donde hay experiencia y señales claras (por ejemplo, diagnósticos de expertos, decisiones de campo).

#### Cuando no confiar: juicios sobre personas basados en primera impresión sin datos (contratación, evaluaciones críticas), o cuando el contexto puede estar sesgando la percepción.

#### Mejorar tus intuiciones: practicar deliberadamente con feedback, reducir ruido informativo, aislar las señales relevantes y usar reglas simples (checklists/heurísticos) cuando sea apropiado.

#### Diseñar contexto: proteger decisiones importantes de priming no deseado y de información irrelevante (pre-reads estructurados, blinding cuando sea posible).


## Criticas

Gladwell destaca ejemplos potentes pero críticos señalan que sobregeneraliza a partir de anécdotas.

La intuición no es mágica: calidad de la intuición = calidad y cantidad de experiencia + señal/ruido.

Algunos efectos experimentales (priming) han sido objeto de debate replicatorio en la literatura científica; por eso conviene aplicar las lecciones con cautela.

 
## Rs

##### La mente puede tomar decisiones mejores de lo que creemos, en fracciones de segundo, siempre que esas decisiones se apoyen en señales claras y en experiencia

##### Pero las mismas capacidades rápidas son vulnerables a ruido, priming y sesgos: conocer cuándo y cómo usarlas es la clave.



# Talking to Strangers - Malcolm Gladwell

##### Analiza por qué solemos malinterpretar a personas que no conocemos

##### La tesis central es que nuestras herramientas intuitivas para leer a los demás —confianza en señales superficiales, reglas heurísticas y supuestos culturales— fallan con frecuencia cuando enfrentamos extrañeza

##### Y esas fallas tienen consecuencias graves (errores judiciales, violencias, injusticias, malas decisiones).


## 1. Default to Truth (tendencia a creer)

##### La mayoría de las personas operan por defecto bajo la suposición de que los demás dicen la verdad

##### Ese default to truth facilita la cooperación social —si todos desconfiaran constantemente, la sociedad colapsaría—

##### Pero también hace vulnerable a la manipulación y al engañ

##### Por eso a menudo aceptamos explicaciones falsas hasta que hay evidencia fuerte en contra.


## 2. Transparency (falsa transparencia)

##### Gladwell discute la creencia de que las emociones y las intenciones son visibles en el rostro o el lenguaje corporal: la idea de que “puedes leer a la gente en la cara”.

##### En realidad, muchas personas pueden ocultar o presentar emociones que no reflejan sus intenciones reales, y la apariencia no es un indicador fiable de veracidad o malicia


## 3. Coupling (acoplamiento con el contexto)

##### Comportamientos y resultados están frecuentemente acoplados al contexto histórico, institucional o situacional

##### Para entender por qué la gente actúa como actúa, hay que mirar las reglas, las presiones y el entorno —no sólo atribuir la conducta a rasgos individuales


## 4. The Limits of Our Tools

##### Las heurísticas sociales que usamos (thin-slicing, señales no verbales, estereotipos) son herramientas con límites

##### Funcionan en contextos familiares y con retroalimentación frecuente, pero fallan con extraños y en situaciones donde la información es ambigua o manipulada.


## 5. Error Types (tipos de errores)

##### Gladwell distingue cómo se cometen errores al tratar con desconocidos:

#### Falso positivo social: creer que alguien es culpable o peligroso cuando no lo es (menos enfatizado).

#### Falso negativo social (más peligroso): creer que alguien es inocente o confiable cuando no lo es, por ejemplo, confiar en un delincuente que engaña bien.

##### La tesis es que nuestra tendencia a la verdad produce más falsos negativos peligrosos.


## 6. Confianza institucional y fallo institucional

##### Instituciones (policía, justicia, economía) fallan al interpretar a extraños por depender de prácticas, rituales o protocolos que no captan la complejidad humana

##### También cuestiona cómo el sistema reacciona ante señales (o la ausencia de ellas). 


## Ejemplos

Gladwell usa casos reales: fracasos policiales y judiciales, engaños notorios, tragedias públicas y errores diplomáticos, para mostrar cómo el default to truth y la presunción de transparencia llevan a decisiones erradas

Siempre combina historia humana + análisis situacional


## Implicaciones

#### 1. No confiar ciegamente en primeras impresiones: con desconocidos, tener protocolos y corroboración antes de actuar

#### 2. Diseñar procedimientos que reduzcan la dependencia de intuiciones: checklists, verificación de hechos, sistemas de doble confirmación.

#### 3. Formación para detectar contextos: enseñar a leer no sólo a la persona sino el contexto que explica conductas.

#### 4. Política y justicia: incorporar mecanismos que eviten que juicios rápidos condenen a inocentes (blind procedures, evidencia material).

#### 5. Cuidado con la deshumanización: entender que “no entender” a otro suele ser más error de nuestro marco que del extraño.


## Críticas

Construye conclusiones a partir de anécdotas poderosas y que subestima datos contrarios o explicaciones más complejas.

##### No siempre aplicable: la recomendación “no confiar” es poco práctica si se lleva al extremo (sociedad exige cierto grado de confianza). 

##### La lección útil es calibrar —no eliminar— la confianza.

Replicabilidad científica: ciertos experimentos psicológicos relacionados con lectura de microexpresiones y priming han sido discutidos o matizados por literatura posterior.


## Rs 

##### Estamos predispuestos a creer y a leer a otros según atajos mentales que fallan frente a la extrañeza

##### Para reducir riesgos cuando tratamos con desconocidos, necesitamos procedimientos, verificación y atención al contexto —no solo intuición.



# Thinking, Fast and Slow - Daniel Kahneman

##### Kahneman distingue entre dos sistemas de pensamiento que coexisten en nuestra mente:


### 1. Sistema 1 (rápido, intuitivo)

#### Automático, emocional, sin esfuerzo consciente.

##### Usa heurísticos y patrones reconocidos.

##### Es eficiente y rápido, pero propenso a sesgos.


### 2. Sistema 2 (lento, deliberado)

#### Analítico, lógico, consciente y exigente cognitivamente

##### Se activa cuando hay problemas complejos o decisiones importantes.

#####  Más preciso, pero más costoso y fatigante.


##### Explora cómo estos sistemas interactúan, cuándo nos llevan al error y cómo podemos mejorar decisiones.


## 1. Heurísticos y sesgos

#### Heurísticos: reglas rápidas que el Sistema 1 usa para decidir.

#### Sesgos cognitivos: errores sistemáticos derivados de heurísticos.

Ej: 

##### Disponibilidad: sobreestimamos lo que recordamos fácilmente (ej. miedo a volar tras accidente reciente).

##### Representatividad: juzgamos la probabilidad por similitud a un prototipo (ej. asumir que alguien que viste de científico es investigador).

##### Anclaje: las cifras iniciales influyen fuertemente en estimaciones posteriores.


## 2. Prospect Theory (Teoría de las perspectivas)

#### Las personas valoran pérdidas y ganancias de manera distinta: las pérdidas pesan más que las ganancias equivalentes (loss aversion).

##### Ejemplo: perder $100 duele más que ganar $100 produce placer.

##### Implica que decisiones económicas y políticas muchas veces no son “racionales” según la teoría clásica.


## 3. Efecto marco (framing effect)

#### La forma en que se presenta la información

##### Ejemplo: 90% de supervivencia suena más positivo que 10% de mortalidad, aunque es lo mismo.


## 4. Falacia de la planificación

#### Tendencia a subestimar tiempo, costo y riesgos, y sobreestimar beneficios de proyectos futuros.

##### Ejemplo: construcción de obras públicas que siempre exceden presupuesto y plazo.


## 5. Exceso de confianza (overconfidence)

#### Las personas sobrestiman la precisión de su conocimiento o predicciones.

##### Ejemplo: traders que creen predecir mercados, CEOs que subestiman riesgos estratégicos.


## 6. Efectos de regresión a la media

#### Fenómeno estadístico: extremos tienden a acercarse a la media en mediciones posteriores.

##### Ejemplo: un deportista con actuación excepcional un día suele rendir más promedio en la siguiente; atribuírsele a habilidad extrema es incorrecto.


## 7. Intuición vs experiencia

#### La inteligencia intuitiva funciona bien cuando hay un patrón estable y feedback constante.

##### En entornos nuevos o con alta variabilidad, la intuición puede fallar gravemente.


## 8. Dos sistemas en acción

| Sistema 1             | Sistema 2                               |
| --------------------- | --------------------------------------- |
| Rápido, automático    | Lento, deliberado                       |
| Emocional, asociativo | Analítico, lógico                       |
| Usa heurísticos       | Requiere atención y esfuerzo            |
| Propenso a sesgos     | Corrige errores del S1 cuando se activa |


## Aplicaciones

#### 1. Toma de decisiones empresariales:

##### Identifica cuándo confiar en intuición (patrones conocidos) y cuándo activar análisis sistemático


#### 2. Negociación y ventas:

##### Presentar información con “marcos” positivos o resaltar pérdidas vs ganancias según el objetivo


#### 3. Gestión de proyectos

##### Ajustar estimaciones para evitar falacia de planificación.


#### 4. Política y marketing:

##### Diseñar mensajes considerando heurísticos y sesgos, no solo lógica pura.


#### 5. Automejora

##### Ser consciente de sesgos propios; usar checklists, pre-mortems y análisis estructurado para decisiones importantes.


## Críticas y matices

No siempre da soluciones prácticas fáciles; el enfoque principal es descriptivo (cómo funciona la mente, no cómo debe actuar).

Algunos sesgos dependen de contexto cultural y experiencia previa.

El Sistema 1 es eficiente y necesario; el problema no es usarlo, sino no reconocer sus límites.


## Rs

##### Nuestra mente combina intuición rápida y deliberación lenta

##### La intuición es poderosa pero propensa a errores sistemáticos

##### Reconocer sesgos, marcos y límites mejora la toma de decisiones, tanto personales como organizacionales. 



# Sesgos

##### Sesgos cognitivos, heurísticos y sus efectos en decisiones individuales y organizacionales


## Objetivo

##### Comprender los sesgos más relevantes, cómo se manifiestan, cómo identificarlos en ti y en tu organización, y desarrollar prácticas y herramientas que reduzcan su impacto en decisiones críticas


## Módulos

1. Fundamentos: ¿qué es un sesgo y por qué importa?

2. Sistemas de la mente: Sistema 1 / Sistema 2 (Kahneman)

3. Sesgos de juicio probabilístico (anclaje, disponibilidad, representatividad)

4. Sesgos de valoración y elección (aversion a la pérdida, framing, status quo)

5. Sesgos sociales y de grupo (confirmación, efecto de grupo, conformity)

6. Sesgos en memoria y narrativa (hindsight, memoria reconstructiva, peak-end)

7. Sesgos en la estimación y planificación (optimismo, planning fallacy, overconfidence)

8. Sesgos en el diseño de productos y UX (presentación, dark patterns, nudges)

9. Diagnóstico: detectar sesgos en procesos y artefactos (reclutamiento, informes, decisiones)

10. Herramientas de mitigación (checklists, pre-mortem, blinding, red teaming)

11. Cultura anti-sesgos: gobernanza, métricas y rutinas organizacionales

12. Proyecto final: auditoría + plan de mitigación para un caso real



# 1. Fundamentos

Conceptos: definición de sesgo, heurísticos, origen evolutivo/funcional.

Ejercicios: leer un texto corto (ej. resumen Kahneman) y escribir 5 ejemplos personales de decisiones sesgadas la última semana.

Entregable: diario de sesgos (1 página) con 5 entradas



# 2. Sistemas mental (S1 / S2)

Conceptos: intuición vs deliberación, cuándo falla cada sistema.

Ejercicios: tests rápidos (problemas de lógica sencilla) para identificar cuándo entró S2.

Entregable: reflexión de 1 página: decisiones donde confiar en intuición funcionó y donde falló.



# 3. Juicio probabilístico

Sesgos clave: anclaje, disponibilidad, representatividad, ilusión de control.

Ejercicios: experimentos mentales (p. ej. estimaciones sujetas a anclaje); comparar estimaciones antes/después de debiasing simple (considerar lo contrario).

Entregable: informe corto con 3 mini-experimentos y resultados.



# 4. Valoración y framing

Sesgos clave: aversión a la pérdida, framing effect, efecto dotación, preferencia por lo seguro.

Ejercicios: reescribir mensajes/pitches en marcos distintos (ganancia vs pérdida) y medir reacciones.

Entregable: 4 variantes de un mismo mensaje y análisis de cuál "conviene" a qué audiencia.



# 5. Sesgos sociales y de grupo

Sesgos clave: confirmation bias, groupthink, autoridad, halo effect, tribalism.

Ejercicios: roleplay de reunión con instrucciones para provocar/suprimir conformidad; registrar cómo cambian las opiniones.

Entregable: acta de observaciones + 3 recomendaciones para evitar groupthink.



# 6. Memoria y narrativa

Sesgos clave: hindsight bias, peak-end rule, memoria reconstructiva, availability cascade.

Ejercicios: comparar relatos de un mismo evento entre 3 personas y analizar diferencias.

Entregable: análisis de discrepancias y propuesta de checklist para reportar incidentes



# 7. Estimación y planificación

Sesgos clave: overconfidence, planning fallacy, optimism bias, illusion of validity.

Ejercicios: hacer una estimación de proyecto (tiempo/costo), luego aplicar la “reference class forecasting” (comparar con proyectos similares) y ajustar.

Entregable: estimación original vs estimación calibrada + explicación.



# 8. Sesgos en diseño y producto

Temas: arquitectura de elección, nudges, dark patterns, efecto de orden en opciones.

Ejercicios: auditar una landing page/checkout por posibles sesgos intencionales y no intencionales.

Entregable: informe UX de sesgos (qué cambiar y por qué).



# 9. Diagnóstico organizacional

Actividades: mapear procesos críticos (recruiting, promotions, procurement, vendor selection) y detectar puntos de vulnerabilidad a sesgos.

Entregable: mapa de sesgos organizacionales (heatmap: alto/medio/bajo).



# 10. Herramientas de mitigación

Técnicas: checklists, pre-mortem, post-mortem, blind review/blinding, red teams, devil’s advocate, structured decision frameworks, algoritmos y modelos.

Ejercicios: diseñar e implementar 2 herramientas (p.ej. checklist de entrevista + pre-mortem) y probarlas.

Entregable: plantillas (checklist + guía pre-mortem) y resultados iniciales.



# 11. Cultura y gobernanza anti-sesgos

Temas: medición, KPIs, incentivos, roles (bias champions), entrenamiento continuo.

Ejercicios: diseñar un plan de gobernanza de 3 meses para mitigar sesgos en un área (ej. hiring).

Entregable: plan de rollout + métricas de éxito.



# 12. Proyecto final

Actividad: auditoría completa de un proceso real (o simulado) y plan accionable de mitigación con cronograma, responsables y métricas.

Entregable final: documento de 4–8 páginas (auditoría + playbook de mitigación).



# Ejercicios

Diario de decisiones (5–10 min): registrar una decisión, qué heurísticos notaste, si consultaste datos.

Ejercicio rápido (2x semana): “Consider the opposite” — escribe razones por las que tu hipótesis podría estar mal.

Mini-experimentos (1x semana): A/B mental o real sobre framing, anclaje o presentación de datos.



# Top 20 sesgos

#### 1. Anchoring (anclaje): estimaciones influenciadas por cifras iniciales.

#### 2. Availability (disponibilidad): juzgar por lo que recordamos fácil.

#### 3. Representativeness (representatividad): juzgar por parecido a prototipo.

#### 4. Confirmation bias (confirmación): buscar/valorar info que confirme nuestras creencias.

#### 5. Loss aversion (aversión a la pérdida): pérdidas pesan más que ganancias iguales.

#### 6. Framing effect (encuadre): decisiones cambian según presentación.

#### 7. Overconfidence (exceso de confianza): sobreestimar precisión de nuestras creencias.

#### 8. Planning fallacy (falacia de planificación): subestimar tiempo/costo real.

#### 9. Status quo bias: preferir mantener lo existente.

#### 10. Halo effect: una cualidad positiva sesga la percepción global.

#### 11. Sunk cost fallacy: seguir inversión por lo ya gastado.

#### 12. Hindsight bias: creer haber predicho un evento después de ocurrido.

#### 13. Self-serving bias: atribuir éxitos a uno mismo y fracasos a factores externos.

#### 14. Bandwagon / conformity: adoptar creencias por mayoría.

#### 15. Authority bias: dar exceso de crédito a figuras de autoridad.

#### 16. Optimism bias: esperar mejores resultados de lo realista.

#### 17. Illusory correlation: ver relación donde no la hay.

#### 18. Confirmation cascade / echo chamber: reforzamiento social de creencias.

#### 19. Endowment effect (efecto dotación): valorar más lo que poseemos.

#### 20. Survivorship bias: analizar sólo casos exitosos y olvidar los fracasos.


# Técnicas de mitigación

#### Pre-mortem: imaginar fracasos y listar causas antes de ejecutar.

#### Reference class forecasting: usar datos históricos de casos similares para estimaciones.

#### Blind procedures / blinding: eliminar información irrelevante (ej. nombre, universidad) en primeras etapas de selección.

#### Checklists de decisión: pasos estandarizados para decisiones críticas (ej. inversión, contratación).

#### Devil’s advocate / red teaming: asignar rol de crítico estructurado en reuniones.

#### Consider the opposite: obligado mental de enumerar argumentos contrarios.

#### Algoritmos + humanos: usar modelos objetivos para ranking inicial y humanos para juicios cualitativos finales.

#### Delayed decision: para reducir impulso, introducir un periodo de espera en decisiones importantes

#### Metricizar y auditar: KPIs sobre apertura a datos contradictorios, tasa de falsos positivos/negativos, tiempo de decisión, etc

#### Training & repetition: entrenar con ejemplos, feedback y calibración (calibration training).



## Fundamentos: ¿qué es un sesgo y por qué importa?

#### Un sesgo es una desviación sistemática del pensamiento, juicio o medición que lleva a errores repetidos o previsibles

#### No vemos o interpretamos la realidad de forma neutra; nuestras cabezas (y a veces los procesos) filtran la información de maneras que favorecen ciertos resultados.


### Tipos de sesgos

#### Cognitivos: atajos mentales (heurísticos) que simplifican decisiones — ej. anclaje, disponibilidad, confirmación.

#### Estadísticos / de muestreo: errores sistemáticos en cómo se recolectan o procesan datos — ej. sesgo de selección, sesgo de supervivencia.

#### Sociales / grupales: presión social o normas que distorsionan juicios — ej. pensamiento de grupo (groupthink).

#### De medición: instrumentos o métodos que consistentemente producen valores erróneos.

#### Motivacionales: deseos o intereses que nublan la percepción (ej. sesgo de deseo).


### Aparición de Sesgos

#### Heurísticos: el cerebro usa atajos para economizar energía y tiempo.

#### Información limitada: tomamos decisiones con datos incompletos.

#### Emoción y motivación: queremos creer que algo es cierto (autoengaño, intereses).

#### Contexto social: influencia de grupo, normas, referencia social.

#### Diseño de procesos / datos: métodos mal diseñados que introducen error sistemático.


### Ejemplos - manifestación

#### Sesgo de confirmación: buscas o recuerdas info que confirma tu idea y descartas lo que la contradice.

##### Mitigación: busca activamente evidencia contraria; “devil’s advocate”.


#### Anclaje: la primera cifra u opinión que ves influe

##### Mitigación: genera estimaciones antes de ver referencias; usa rangos.


#### Efecto de halo: una característica positiva/negativa colorea la evaluación global.

##### Mitigación: evalúa atributos por separado con rúbricas.


#### Sesgo de supervivencia: miras solo a los “ganadores” y olvidas a los que fracasaron.

##### Mitigación: busca la población completa, incluidos los fracasos.


#### Hindsight (sesgo retrospectivo): parece obvio lo que pasó después de que sucede.

##### Mitigación: registra predicciones antes de conocer resultados.


### Impactos/Importancia

#### Decisiones empresariales erróneas (contrataciones, inversiones).

#### Diagnósticos médicos imprecisos.

#### Políticas públicas mal diseñadas.

#### Mala interpretación de datos e investigaciones.

#### Conflictos interpersonales y mala comunicación


### Identificar sesgos

#### 1. Pregunta: ¿qué evidencia apoya y qué la contradice?

#### 2. ¿La conclusión cambia si miro otra muestra o método?

#### 3. Revisa el proceso: ¿hubo etapas donde se pudo introducir error sistemático?

#### 4. Usa métricas/controles (blind tests, aleatorización).

#### 5. Pide opinión de alguien independiente o diverso.


### Técnicas de reducción / “debiasing”

#### Meta-conocimiento: conocer los sesgos más comunes (información preventiva).

#### Forzar reflexión lenta: pausas, análisis sistemático (Sistema 2).

#### Estructurar decisiones: listas de chequeo, rúbricas, criterios predefinidos.

#### Diseño experimental: aleatorizar, usar controles ciegos.

#### Buscadores de contradicciones: asignar rol de disidente o auditor.

#### Diversidad: equipos diversos reducen visiones sesgadas y ciegas.

#### Herramientas estadísticas: correcciones, ponderaciones, tests de robustez.


### Estudiar un sesgo (metodología)

#### Definir la hipótesis y la métrica que revelaría el sesgo.

#### Recolectar datos representativos (cuidado con la selección).

#### Diseñar experimento controlado o estudio observacional con ajustes.

#### Replicar y revisar (¿es consistente en distintos contextos?).

#### Publicar método y datos para revisión externa.


### Checklist próxima decisión

#### ¿Qué fuente de información tengo y qué falta?

#### ¿Estoy buscando confirmación o refutación?

#### ¿Qué heurísticos podrían estar operando ahora?

#### ¿Puedo crear una prueba ciega o aleatoria?

#### ¿Quién más debería revisar esto (perfil diverso)?


## Sistemas de la mente: Sistema 1 / Sistema 2 (Kahneman)

##### La mente humana opera con dos modos de pensamiento que interactúan continuamente:


#### Sistema 1 (rápido, intuitivo)

Opera automáticamente, sin esfuerzo consciente.

Usa patrones, asociaciones y heurísticos. 
 
Responde de inmediato (p. ej. reconocer una cara, completar “2+2”, sentir desagrado). 

Es veloz, energético-económico y domina la mayoría de las decisiones cotidianas.


#### Sistema 2 (lento, deliberativo)

Requiere esfuerzo, atención y control consciente.

Se activa para razonar, calcular, planificar y cuando la tarea es compleja o nueva

Consume recursos (fatiga mental) y funciona mejor con concentración.


### Comparativas

Velocidad: S1 rápido — S2 lento

Esfuerzo: S1 automatico — S2 esforzado

Conciencia: S1 no consciente — S2 consciente

Base: S1 asociaciones/heurísticos — S2 reglas/razonamiento

Error típico: S1 = sesgos sistemáticos; S2 = correcciones lentas pero limitadas


### Interacción entre los sistemas

#### S1 propone; S2 ratifica o corrige.

##### S1 genera impresiones, intuiciones y respuestas inmediatas.

##### S2 las supervisa —a veces confirma sin cuestionar— y solo interviene cuando detecta conflicto, error evidente o cuando exigimos deliberación

#### Por economía, S2 suele “ahorrarse trabajo”: confía en S1 salvo que la situación sea inusual o pidamos un análisis.


### Ejemplos

Identificar que alguien está enojado → S1.

Resolver 17 × 24 → S2.

##### Decidir comprar por “oferta” tras ver un precio ancla → S1 (anclaje).

Revisar un contrato, detectar condiciones problemáticas → S2.


### Fortalezas y debilidades

#### Sistema 1

Fortalezas: velocidad, economía de recursos, útil en contextos repetidos y familiaridad.

##### Debilidades: comete sesgos (anclaje, disponibilidad, confirmación), sobregeneraliza, es vulnerable a emociones y framing.


#### Sistema 2

Fortalezas: permite pensamiento lógico, control de impulsos, planificación, evaluación crítica

##### Debilidades: fatigable, perezoso (no se activa por defecto), limitado en capacidad (memoria de trabajo).


### Sesgos típicos originados por S1

#### Anclaje, Disponibilidad, Representatividad, Efecto halo, Hindsight, Confirmación, Aversión a la pérdida.

##### (S2 puede detectarlos y corregirlos, pero solo si se activa).


### Estrategias para “activar” y usar mejor el Sistema 2 (

#### 1. Pausar deliberadamente ante decisiones importantes: pregunta “¿qué evidencia tengo?”.

#### 2. Pedir estimaciones antes de ver referencias (evita anclaje).

#### 3. Descomponer problemas en pasos claros y escribibles (reduce carga cognitiva).

#### 4. Forzar contabilizar alternativas: buscar activamente evidencia contraria.

#### 5. Usar reglas / checklists (reduce dependencia de intuición).

#### 6. Diseñar procesos (rúbricas de evaluación, pruebas ciegas, aleatorización).

#### 7. Pre-mortem: imaginar por qué un plan fracasó y listar causas — activa S2.

#### 8. Limitar decisiones bajo fatiga (S2 agotado = más errores por S1).

#### 9. Entrenamiento deliberado: practicar tareas que requieren control (ej.: resolver problemas de lógica) mejora la capacidad de S2.


### Ejercicios

Resolver 5 problemas de cálculo mental complejos sin ayuda.

Hacer un “pre-mortem” de un proyecto en 10 minutos.

Reescribir una afirmación con evidencia contraria (practicar buscar disconfirmación).

Tomar una decisión pequeña (p. ej., comprar algo) aplicando una checklist de 5 preguntas.


### Implicaciones

##### En reuniones y contratación: usar rúbricas para evitar juicios rápidos.

##### En análisis de datos: estructurar pruebas y pedir replicaciones, no fiarse de la primera intuición.

##### En comunicación: el framing importa porque S1 reacciona emocionalmente.

##### En diseño de productos: aprovechar S1 para UX (intuición) y dejar espacio para S2 cuando la tarea requiera precisión.


### Checklist decisión importante

##### ¿Esta decisión requiere análisis (S2) o puede resolverse por rutina (S1)?

##### ¿Qué evidencia apoya y cuál la contradice?

##### ¿Hay un ancla o una historia disponible que me esté sesgando?

##### ¿Puedo estructurar la decisión con una rúbrica o requerir una segunda opinión?

##### ¿Estoy fatigado o apurado? (si sí, posponer o pedir ayuda).


## Sesgos de juicio probabilístico (anclaje, disponibilidad, representatividad)

##### Atajos que usamos para juzgar probabilidades

Anclaje, disponibilidad y representatividad

Provienen en gran parte del trabajo de Kahneman & Tversky y son responsables de muchos errores sistemáticos en la toma de decisiones.


### 1. Anclaje (anchoring)

#### La tendencia a depender excesivamente de la primera información recibida (el “ancla”) al estimar una cantidad o probabilidad. 

##### Aunque el ancla sea irrelevante, influye en la respuesta final.

##### Mecanismo: el ancla ajusta tu estimación desde ese punto inicial; los ajustes suelen ser insuficientes (se queda “pegado” al ancla).


Ejemplo:

##### si te preguntan “¿Es la población de Turquía mayor o menor que 70 millones?” y luego te piden estimar la población

##### tu respuesta tenderá a estar cerca de 70M. 

##### Si el ancla fuera 20M, la estimación sería mucho menor. 

##### Consecuencias: precios de negociación sesgados, malas estimaciones de recursos, decisiones influenciadas por la primera cifra vista (por ejemplo, el precio inicial en ventas).


Mitigarlo: 

##### Ignorar la primera cifra irrelevante y formular una estimación independiente antes de ver anclas.

##### Generar múltiples estimaciones a partir de distintos puntos de partida.

##### Usar rangos en vez de un único número.

##### Estructurar la decisión (rúbricas, criterios numéricos previos).
 

### 2. Disponibilidad (availability)

#### Juzgar la probabilidad o frecuencia de un evento según qué tan fácil viene a la mente la información relevante

##### La “disponibilidad” en memoria— no según la evidencia objetiva.

####  Mecanismo: eventos recientes, emocionalmente intensos, o muy publicitados son más accesibles en memoria y por eso parecen más probables.

Ej:

Después de ver noticias sobre accidentes aéreos, muchas personas sobreestiman la probabilidad de morir en avión comparado con el auto, pese a que conducir es mucho más peligroso por kilómetro recorrido.

La gente sobreestima homicidios si los medios locales publican muchas coberturas de crímenes.

##### Consecuencias: prejuicios en políticas públicas, miedos irracionales, decisiones de inversión mal calibradas.


#### Mitigarlo

##### Consultar estadísticas objetivas y tasas reales (no confiar en la intuición).

##### Preguntarse explícitamente: “¿qué datos tengo y qué tan representativos son?”

##### Pedir registros históricos en vez de confiar en recuerdos o anécdotas.

##### Enseñar a equipos a distinguir entre evidencia anecdótica y evidencia sistemática.


### 3. Representatividad (representativeness)

##### Juzgar la probabilidad de que algo pertenezca a una categoría por qué tan similar es a un prototipo de esa categoría, desplazando con frecuencia la información base (base rates) o la probabilidad real.


#### Mecanismo: usamos la similitud superficial (rasgos, historia narrativa) como atajo para inferir probabilidades, ignorando la frecuencia real de la clase (error de neglecto de la tasa base).

Ej:

Problema de Linda (Tversky & Kahneman): Linda es descrita como joven, muy crítica con la injusticia y activista

Pregunta: ¿es más probable que Linda sea “secretaria” o “secretaria y activa en el movimiento feminista”?

Muchas personas eligen la segunda opción porque es más representativa del perfil, aunque lógicamente la conjunción no puede ser más probable que uno de los eventos por separado.

Gambler’s fallacy (falsa representatividad): tras una secuencia “RRR R R” en una ruleta, algunos piensan que “ya toca negro” porque esperan que la secuencia se equilibre, sin considerar independencia de eventos.


##### Consecuencias: errores en diagnóstico (p. ej., ver síntomas y asumir enfermedad rara sin considerar su baja prevalencia), decisiones de contratación basadas en estereotipos, mala evaluación de riesgos


#### Mitigarlo

##### Recordar y aplicar la tasa base (= prevalencia prior) antes de juzgar por la similitud.

##### Aplicar razonamiento probabilístico formal (Bayes básico): combinar evidencia y prior.

##### Pedir que se calculen probabilidades en forma explícita (no solo intuiciones).

##### Usar listas de verificación y criterios objetivos (evitar juicios únicamente “por parecido”).


### Relación entre los tres

#### Todos son heurísticos: atajos que reducen esfuerzo cognitivo pero introducen errores sistemáticos.

##### A veces operan juntos: p. ej., un ancla mediático + recuerdos vívidos (disponibilidad) pueden llevar a que una persona juzgue un perfil como representativo y sobreestime su probabilidad.


### Ejercicios (prueba tu intuición)

#### 1. ¿Qué es más probable?
A) Que una persona sea cajero de banco.
b) Que una persona sea cajero de banco y miembro de un club de ajedrez.
##### ((Respuesta: a. La probabilidad de la conjunción no puede ser mayor que la de uno de los eventos.)


#### 2. Si ves muchas noticias sobre secuestros en la tele, ¿estás razonando por disponibilidad o por base rate?

##### ((Respuesta: disponibilidad — debes buscar las tasas reales para corregir la estimación.)


#### 3. Te ofrecen dos precios: uno en oferta marcado como “antes $100 — ahora $60” y otro que simplemente dice “$60”. ¿Qué sesgo crees que activa el primer precio?

##### (Respuesta: anclaje — la cifra $100 sirve como ancla y hace que el descuento parezca mayor.)


### Checklist

##### ¿Hay una cifra inicial que me está anclando? → Genera tu propia estimación primero.

##### ¿Estoy juzgando por lo que recuerdo con facilidad? → Busca datos objetivos.

##### ¿Estoy confundiendo similitud narrativa con probabilidad real? → Revisa la tasa base.

##### ¿Puedo escribir la hipótesis y los datos que soportan/contradicen mi estimación? → Hazlo.



## Sesgos de valoración y elección (aversion a la pérdida, framing, status quo)


## Sesgos sociales y de grupo (confirmación, efecto de grupo, conformity)


## Sesgos en memoria y narrativa (hindsight, memoria reconstructiva, peak-end)


## Sesgos en la estimación y planificación (optimismo, planning fallacy, overconfidence)


## Sesgos en el diseño de productos y UX (presentación, dark patterns, nudges)


## Herramientas de mitigación — (checklists, pre-mortem, blinding, red-teaming)




# Alianzas / Aliados / Amigos

##### Construir, mantener y —cuando haga falta— transformar o cerrar relaciones de alianza/amistad/alianza emocional y social


## Objetivos

##### Comprender las dinámicas humanas que sostienen alianzas y amistades (confianza, reciprocidad, poder, vulnerabilidad).

Desarrollar habilidades prácticas para comunicarse, negociar límites, reparar daños y profundizar la confianza.

Crear hábitos y rituales que mantengan relaciones sanas y resilientes.

Saber cuando ajustar, re-negociar o terminar una relación de forma ética y clara


## Aptitudes

##### Reconocer tu estilo relacional (auto-conocimiento: límites, miedo al rechazo, necesidad de autonomía).

Aplicar técnicas de escucha empática y comunicación no violenta para conversaciones importantes.

Construir confianza rápida y sostenida mediante prácticas concretas (rituales, reciprocidad planificada).

Manejar conflictos y reparaciones sin agravar el daño.

Mantener redes personales/profesionales sin quemarte (gestión emocional y energética).


# 1. Auto-inventario relacional

Tema: autoconciencia (valores relacionales, heridas, estilo de apego).

Práctica: diario de relaciones (10 interacciones recientes — qué te aportaron y qué te costaron).

##### Entregable: mapa personal: lo que busco / lo que doy / mis límites no negociables.



# 2. Inteligencia emocional aplicada

##### Tema: reconocer emociones propias y ajenas; tolerancia a la ambivalencia.

Práctica: etiqueta emocional (pon nombre a emociones en 3 interacciones diarias).

Técnica: pausa de 30s antes de responder cuando estés cargado.



# 3. Escucha profunda y preguntas poderosas

##### Tema: escucha empática, preguntas abiertas, evitar soluciones rápidas.

Práctica: 3 sesiones de 20 minutos de escucha (sin interrumpir ni aconsejar) y re-reflejo.

Script breve: “Lo que escucho es X — ¿me ayudás a entender qué sería ideal para vos?”



# 4. Vulnerabilidad y confianza (inicios de alianza)

##### Tema: cuándo y cómo exponerse; reciprocidad calibrada.

Práctica: compartir una vulnerabilidad pequeña y pedir una reciprocidad concreta.

Regla práctica: “proporcionalidad”: comparte lo que estás dispuesto a recibir.



# 5. Rituales y mantenimiento (pequeños contratos relacionales)

Tema: rituals, check-ins, micro-compromisos.

Práctica: diseñar 1 ritual de 15–30 minutos semanal con una persona importante (ej.: check-in de 10 minutos cada lunes).

Entregable: calendario de rituales + recordatorios.



# 6. Límites y consentimiento

##### Tema: límites claros, cómo ponerlos sin culpabilizar; consentimiento relacional.

Práctica: 5 frases para establecer límites (scripts abajo).

Ejercicio: role-play por escrito de un límite que temes poner



# 7. Comunicación asertiva y no violenta

##### Tema: modelo mensaje-observación-sentimiento-necesidad-petición (ej. NVC).

Práctica: transformar 5 frases “acusatorias” en peticiones claras.

Script: ejemplo para pedir apoyo sin acusar.



# 8. Poder, privilegio y allyship (ser aliado/a)

##### Tema: dinámicas de poder, responsabilidad emocional, dar espacio.

Práctica: escucha para aprender (no para explicar); actúa en favor del otro cuando corresponda.

Tarea: identifica 2 maneras concretas de usar tu posición para apoyar sin protagonizar



# 9. Reparación después del daño

##### Tema: pedir perdón, aceptar responsabilidad, plan de reparación.

Práctica: escribir una disculpa efectiva (5 pasos abajo) y simular su entrega.

Técnica: “check de reparación” — ¿qué redime? ¿qué compensa? ¿qué cambia?



# 10. Conflicto creativo y límites en escalada

Tema: distinguir conflicto productivo vs. destructivo; herramientas de de-escalada.

Práctica: técnica STOP (Stop, Take breath, Observe, Proceed) + safe word relacional.

Role-play: desescalar una discusión que gira hacia ataques personales.



# 11. Sostenibilidad emocional y prevención del burnout relacional

##### Tema: energía relacional, reciprocidad real, señales de agotamiento.

Práctica: plan de autociudado relacional (tiempo, renegociación de frecuencia, pedir ayuda).

Entregable: “contrato de energía” con 2 relaciones clave



# 12. Transiciones y cierres éticos

##### Tema: cómo terminar o transformar relaciones con claridad y compasión.

Práctica: escribir un guion de cierre (2 versiones: directo y gradual) + plan de seguimiento propio.

Proyecto final: aplicar lo aprendido en una relación real y preparar una reflexión de 3 páginas (qué hiciste, qué funcionó, qué cambiaste).



# Diario yreflexiones

Cada noche: 3 interacciones + emoción principal + ¿qué di? ¿qué recibí? ¿qué quiero cambiar?



# Scripts/prácticos

#### Ayuda

```
Pedir ayuda: “Me vendría muy bien tu ayuda con X porque Y. 
¿Podrías apoyarme con Z y, si no podés, decímelo francamente?”
```

#### Límite

```
Poner un límite: “Cuando X sucede, me siento Y.
Necesito que hagamos Z en su lugar — ¿te parece posible?”
```

#### Desacuerdo

```
Decir no: “Gracias por pensar en mí
Ahora no puedo comprometerme con esto y prefiero no hacerlo para poder cumplir con Y.”
```


#### Error/Disculpas

```
1) reconoce acción
2) nombra impacto
3) asume responsabilidad
4) ofrezco reparación concreta
5) pido permiso para seguir.
```

#### Devolución/Feedback

```
Feedback difícil: “Quisiera comentar algo que noté
Cuando X pasa, yo experimento Y; me gustaría que pudiéramos intentar Z.”
```



# Ejercicio

#### Escucha 20/20: 20 min uno escucha sin interrupciones, 20 min el otro responde; luego 10 min de reflexión conjunta.

#### Mapa de reciprocidad: listar lo que cada uno aporta y marcar desbalances objetivo.

#### Caja de agradecimientos: intercambio semanal de 1-2 cosas que apreciaste.



# Medición salud relacional

#### Confianza (0–10)

#### Frecuencia de contacto adecuada (sí/no)

#### Equidad en dar/recibir (0–10)

#### Alegría/placer (0–10)

#### Capacidad de resolver conflictos (0–10)

Revisa cada 4–6 semanas.



# Reparación y Negociación 

#### Si hay daño: pausa → escucha del dañado → validación → disculpa → propuesta de reparación → seguimiento.

#### Si la otra parte no quiere reparar: protegerte (limitar contacto) y documentar lo que necesitas para tu bienestar.



# Lecturas

##### Sobre vulnerabilidad y vergüenza: Brené Brown (investiga vulnerabilidad, coraje, límites).

##### Comunicación no violenta: Marshall Rosenberg (modelo práctico).

##### Dinámicas de red y capital social: lecturas intro (Putnam) — para entender reciprocidad a escala.

##### “Give and Take” (Adam Grant) — reciprocidad y generosidad estratégica.
(Si querés, te doy una lista de capítulos y artículos concretos.)



# Práctica

Diseña y ejecuta un proyecto relacional: ejemplo de opciones

#### Reforzar una amistad debilitada en 8 semanas (rituales, una conversación de reparación, experimentos de reciprocidad).

Crear un sistema de check-ins para tu equipo (ritual y reglas).

Construir 3 nuevas alianzas profesionales con enfoque en reciprocidad: diseño de acercamiento, primer encuentro, plan de 90 días.



# Consejos

#### Preferí la claridad sobre la amabilidad performativa; la ambivalencia constante desgasta.

#### Empieza por pedir, no por adivinar. Muchas rupturas vienen por suposiciones.

#### Recuperar la confianza requiere tiempo y pruebas repetidas (consistencia > palabras).

#### Define límites con lenguaje de necesidad, no de culpa.

#### Cierra relaciones cuando la relación sistemáticamente dañe tu bienestar, no por un error puntual (salvo casos graves).



# Alianza estratégica 






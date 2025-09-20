# Proyecto

Gestión desde la idea hasta el cierre


## Objetivo

##### Iniciar, planificar, ejecutar, controlar y cerrar proyectos

##### Con técnicas prácticas (WBS, cronograma, presupuesto, RACI, gestión de riesgos, comunicación, control de cambios, lecciones aprendidas 

##### Elegir e implementar el enfoque (waterfall, agile o híbrido) más adecuado al contexto.

Persona que quiera gestionar proyectos (líderes técnicos, product owners, jefes de proyecto novatos, managers funcionales)


## Resultado

##### Diseñar y presentar un Plan de Proyecto completo con

#### Acta de constitución / objetivos y alcance

#### WBS y entregables

#### Cronograma (Gantt / sprints)

#### Presupuesto básico

#### Registro de riesgos con respuesta

#### Plan de comunicaciones y RACI

#### Mecanismo de control de cambios y KPI de seguimiento

#### Informe final y lecciones aprendidas


# 1. Fundamentos & marco de referencia

Objetivos: entender qué es un proyecto, ciclo de vida, stakeholders y elegir enfoque (waterfall vs agile vs híbrido).
Contenidos:

Definición proyecto vs operación

Triple restricción (alcance-tiempo-costo) + calidad

Stakeholders y análisis de interesados
Actividades:

Lectura+resumen: diferencias Agile vs Waterfall

Ejercicio: identificar stakeholders de un proyecto real
Entregable: lista de stakeholders + matriz de poder/interés


## Fundamentos de proyecto

##### Esfuerzo temporal con un inicio y un fin definidos, realizado para crear un producto, servicio o resultado único

##### No es operación rutinaria: tiene objetivos específicos, recursos limitados y restricciones.


#### 1. Objetivo: lo que el proyecto debe lograr

##### Debe ser SMART (Específico, Medible, Alcanzable, Relevante, con Tiempo).

Ej.: “Lanzar la landing y MVP funcional para suscripción antes del 30/11, con 500 usuarios registrados y tasa de conversión ≥ 3%.”

#### 2. Alcance: lo que está incluido y lo que queda fuera (evita ambigüedad).

#### 3. Tiempo: calendario, hitos y fechas de entrega.

#### 4. Costo: presupuesto estimado y reservas.

#### 5. Calidad: criterios y estándares que debe cumplir el entregable.

#### 6. Stakeholders: todas las personas/grupos afectados o interesados (sponsor, cliente, equipo, proveedores).

#### 7. Recursos: humanos, técnicos, materiales y financieros.

#### 8. Riesgos: eventos futuros que pueden afectar objetivos, con probabilidad e impacto


### Ciclo de vida (fases)

#### 1. Inicio — idea, business case, acta de constitución, identificación de stakeholders.

#### 2. Planificación — alcance, WBS, cronograma, presupuesto, plan de comunicaciones, registro de riesgos.

#### 3. Ejecución — desarrollar entregables, gestionar equipo, coordinar proveedores.

#### 4. Monitoreo y control — seguimiento del progreso, gestión de cambios, control de calidad, métricas.

#### 5. Cierre — entrega formal, cierre contractual, cierre financiero, lecciones aprendidas


### Restricciones clave (la “triple restricción”)

##### Alcance, Tiempo, Costo. Cambiar uno afecta a los otros. A esto se suma la Calidad (a veces vista como cuarta restricción).


### Roles y responsabilidades

#### Sponsor / Patrocinador: financia y toma decisiones ejecutivas.

#### Project Manager / Jefe de Proyecto: responsable del día a día y del cumplimiento de objetivos.

#### Equipo del Proyecto: realiza el trabajo técnico/operativo.

#### Stakeholders: aportan requisitos, aprueban entregables o son afectados por el proyecto.


### Artefactos y entregables fundamentales

#### Acta de constitución / business case.

#### WBS (Work Breakdown Structure) + diccionario de paquetes de trabajo.

#### Cronograma (Gantt o plan de sprints).

#### Presupuesto.

#### Registro de riesgos y plan de respuesta.

#### RACI / plan de comunicaciones.

#### Formato de solicitud de cambio (CR).

#### Informe final y lecciones aprendidas.


### Herramientas

#### Gestión de tareas: Trello, Asana, Jira, ClickUp.

#### Cronograma/Gantt: MS Project, GanttProject, Excel/Google Sheets.

#### Colaboración: Slack, Teams, Google Drive.

#### Mapas/diagramas: Miro, Lucidchart.


### Principales métodos y su uso

#### Waterfall (tradicional): requisitos estables, entregables definidos (ej.: construcción).

#### Agile / Scrum / Kanban: requisitos cambiantes, entrega incremental (software, productos digitales).

#### Híbrido: planificación inicial tradicional + ejecución ágil en equipos de desarrollo


### Gestión de riesgos

#### Identificar riesgos (brainstorm).

#### Evaluar probabilidad e impacto.

#### Priorizar (matriz probabilidad × impacto).

#### Definir respuestas: evitar, mitigar, transferir, aceptar.

#### Asignar propietarios y revisar periódicamente


### Métricas

#### Avance (%) vs plan.

#### Variación de tiempo (Schedule Variance) y coste (Cost Variance) — si usas EV.

#### Cumplimiento de hitos.

#### Número de cambios aprobados.

#### Calidad: defectos por entrega, tasa de retrabajo.

#### Satisfacción de stakeholders


### Buenas prácticas

#### Definir alcance y criterios de aceptación desde el inicio.

#### Mantener comunicación frecuente y simple con stakeholders clave.

#### Control de cambios formal (no aceptar cambios por email sin registro).

#### Revisiones periódicas + lecciones aprendidas al cierre.

#### Mantener un registro actualizado de riesgos y issues.

#### Documentar decisiones clave (quién decidió, cuándo, por qué).


### Evitar errores

#### Alcance vago o “scope creep” sin control.

#### Subestimar tiempos y costos (optimismo sesgado).

#### No involucrar al sponsor ni stakeholders críticos.

#### Falta de plan de comunicación.

#### Ignorar riesgos pequeños hasta que se convierten en crisis.


### Al comienzo

#### 1. Redactar acta de constitución y objetivos SMART.

#### 2. Identificar y mapear stakeholders (poder/interés).

#### 3. Definir alcance preliminar y criterios de éxito.

#### 4. Crear WBS de alto nivel (3 niveles).

#### 5. Estimar las principales fases y hitos.

#### 6. Abrir registro de riesgos inicial.

#### 7. Acordar canal/frecuencia de comunicación con sponsor y equipo.


### Ej - WBS (n1 -> n3) landing + MVP

1.0 Lanzamiento MVP
1.1 Definición y diseño
1.1.1 Recolección requisitos
1.1.2 Wireframes / UX
1.1.3 Diseño visual
1.2 Desarrollo
1.2.1 Infraestructura / hosting
1.2.2 Backend API
1.2.3 Frontend (landing)
1.3 Pruebas y QA
1.4 Lanzamiento y marketing
1.5 Cierre y lecciones aprendidas


### Recursos

Guías/plantillas prácticas (acta, WBS, registro de riesgos).

Libros intro: PMBOK (para vocabulario), “Scrum Guide” (agile).

Cursos cortos: fundamentos de gestión de proyectos (platforms MOOC).


## Marcos de referencia: estándares más utilizados

##### El framework es un conjunto estructurado de conceptos, prácticas, roles y artefactos que guían cómo se planifica, ejecuta y controla un proyecto

##### No siempre dicta pasos rígidos; muchos marcos ofrecen principios y elementos que se adapta(n) al contexto del proyecto (tailoring).

##### Su propósito: reducir incertidumbre, mejorar comunicación, estandarizar entregables y facilitar la gobernanza.


### Marcos / estándares más importantes

#### 1. PMBOK (Project Management Body of Knowledge) — PMI

Guía de buenas prácticas organizada por principios y dominios de desempeño (en su edición más reciente se centra en principios y entrega de resultados

Para qué sirve: útil como marco conceptual amplio; cubre desde inicio hasta cierre y es agnóstico a la metodología (permite enfoques predictivos, ágiles o híbridos)

##### Cuándo usarlo: organizaciones que necesitan vocabulario, procesos y buenas prácticas para gobernar proyectos de cualquier tipo.


#### 2. PRINCE2

Metodología estructurada basada en principios, temas y procesos, con fuerte foco en control, roles y “product-based planning”.

Para qué sirve: proyectos que requieren gobernanza formal, control por etapas y documentación clara (mucho uso en sector público y organizaciones grandes).

##### Cuándo usarlo: entornos regulados o donde el control documental y la trazabilidad son clave.


#### 3. Scrum (marco ágil)

##### Framework ligero para desarrollar y sostener productos complejos; define roles (Product Owner, Developers, Scrum Master), eventos y artefactos (Backlog, Sprint, Increment).

##### Sirve: equipos pequeños/autoorganizados que entregan valor incremental (software y productos digitales).

##### Usarlo: cuando los requisitos cambian, se necesita feedback temprano y entregas frecuentes.


#### 4. SAFe (Scaled Agile Framework)

##### Framework para escalar prácticas ágiles (Scrum/Kanban) a nivel de programa/portfolio en grandes organizaciones; versión reciente trae cambios para alinear estrategia y ejecución.

##### Sirve: coordinar decenas o cientos de equipos ágiles con planificación sincronizada, gestión de dependencias y métricas compartidas.

##### usarlo: organizaciones grandes que ya usan ágil en equipos y necesitan coordinación a escala.


#### 5. ISO 21500 / Normas ISO relacionadas

##### Guía internacional de buenas prácticas para la gestión de proyectos aplicable a cualquier tipo de organización. Ofrece principios y vocabulario estandarizado.

##### sirve: aportar reconocimiento formal y consistencia internacional; útil en empresas que requieren alineación con estándares normativos.


### Otros marcos y enfoques relevantes

#### Kanban: flujo continuo y gestión visual de trabajo (ideal para operaciones y equipos con trabajo entrante cambiante).

#### Lean / Lean Startup: foco en eliminar desperdicio, validar supuestos y ciclos rápidos de aprendizaje.

#### XP (Extreme Programming): prácticas técnicas para desarrollo de software (TDD, pair programming).

#### IPMA: certificación/estándares europeos que combinan competencias técnicas y contextuales


### Elección del marco

##### Requisitos estables / necesidad de control formal → PRINCE2, PMBOK, ISO.

##### Entrega incremental / alta incertidumbre → Scrum, Kanban, Lean.

##### Organización grande que ya está en ágil → SAFe (u otros marcos de escalado).

##### Necesitas vocabulario y buenas prácticas para gobernar pero quieres flexibilidad → PMBOK (tailoring). 


### Ventajas y limitaciones

##### Ventajas: mejor gobernanza, repetibilidad, roles claros, gestión del riesgo más sistemática.

##### Limitaciones: sobre-documentación si se aplica sin tailoring; resistencia al cambio; escoger el marco equivocado puede añadir burocracia innecesaria.


### Práctica y adaptación/adopción del marco
 
#### 1. Determina el contexto: tamaño del proyecto, criticidad, regulación, cultura organizacional.

#### 2. Evalúa madurez ágil/PMO: si la empresa ya practica ágil, favorece marcos ágiles o escalados; si no, comienza por PMBOK/PRINCE2 con piloto ágil.

#### 3. Define objetivos de gobernanza: ¿necesitas control estricto, trazabilidad financiera o rapidez en entrega?

#### 4. Tailor (personaliza): adopta solo las prácticas/artefactos que aporten valor; documenta lo que se cambia y por qué. (PMBOK y PRINCE2 promueven explícitamente el tailoring). 

#### 5. Pilota: prueba en 1–2 proyectos, mide resultados (plazos, calidad, satisfacción) y ajusta.

#### 6. Formación y roles: asigna sponsors, PMs, Product Owners y define responsabilidades (RACI).


### Híbridos: la opción más práctica

##### La mayoría de organizaciones usan enfoques híbridos: por ejemplo, planificación y control (PRINCE2/PMBOK) para fases iniciales y contractual, y ejecución ágil (Scrum/Kanban) para desarrollo

#### Esto permite gobernanza sin sacrificar adaptabilidad


### Práctica

##### No copies todo el marco “por defecto”: prioriza artefactos que reduzcan riesgos reales.

##### Documenta el “mínimo viable” de gobernanza (actas, hitos, criterios de aceptación).

##### Mide impacto: lead time, cumplimiento de hitos, número de cambios no controlados, satisfacción stakeholders.

##### Itera: revierte prácticas que no aportan valor y escala las que sí.


## Ciclo de vida

##### Secuencia de fases por la que pasa un proyecto desde su inicio hasta su cierre

##### Cada fase agrupa actividades, roles y entregables específicos, y suele terminar con una decisión (gate) que determina si el proyecto avanza, se replantea o se cancela

##### Ayuda a planificar, gobernar y controlar el proyecto con disciplina.


### 1. Fases 

#### 1. Inicio (Initiation)
Propósito: validar la idea y autorizar el proyecto.
Entregables típicos: acta de constitución / business case, identificación de stakeholders, objetivos SMART, alcance preliminar, sponsor designado.
Decisión: aprobar o no el inicio / financiar la siguiente fase.

#### 2. Planificación (Planning)
Propósito: definir cómo se logrará el objetivo.
Entregables típicos: WBS, cronograma (Gantt o plan de sprints), presupuesto, registro de riesgos, plan de comunicaciones, RACI, criterios de aceptación.
Decisión: aprobar la línea base (alcance, tiempo, costo) y proceder a ejecución.

#### 3. Ejecución (Execution)
Propósito: construir los entregables del proyecto.
Entregables típicos: productos/servicios intermedios y finales, reportes de avance, actas de reuniones, entregas parciales.
Actividades clave: gestión del equipo, compras, coordinación técnica, comunicación con stakeholders.

#### 4. Monitoreo y control (Monitoring & Control)
Propósito: asegurarse de que el proyecto se mantiene en rumbo o tomar acciones correctivas.
Entregables típicos: métricas (avance, cost variance), informes de estado, solicitudes de cambio, controles de calidad, actualización del registro de riesgos.
Observación: aunque aparece como fase separada, en la práctica ocurre simultáneamente con la ejecución. 

#### 5. Cierre (Closure)
Propósito: entregar formalmente, cerrar contratos y capturar aprendizaje.
Entregables típicos: entrega final aceptada, cierre contractual y financiero, informe final, lecciones aprendidas, liberación de recursos.


### 2. Modelos de ciclo de vida

#### Predictivo / Waterfall: fases secuenciales y definidas; buena opción cuando los requisitos son estables.

#### Iterativo / Incremental: se construye el producto en versiones; cada iteración mejora el producto.

#### Adaptativo / Ágil (Scrum, Kanban): ciclos cortos (sprints), entrega frecuente de valor, feedback continuo.

#### Híbrido: mezcla planificación predictiva (gobernanza, contrato) con ejecución ágil (desarrollo).

##### Ciclo de vida del producto vs del proyecto: el producto puede tener un ciclo largo (introducción, crecimiento, madurez, declive). El proyecto es temporal y puede crear o evolucionar el producto. 


### 3. Puertas de decisión (gates) y gobernanza

#### Cada fin de fase suele cerrar con una revisión (gate) donde se evalúan: cumplimiento de criterios, riesgos, presupuesto y valor esperado.

#### Roles clave en gates: sponsor (decisión final), PM / líder técnico (evidencia), comité de control (QA / gobernanza).

#### Buenas prácticas: definir criterios de éxito del gate antes de la fase y documentar la decisión


### 4. Entregables por fase — checklist

#### Inicio: acta, stakeholders, objetivos SMART.

#### Planificación: WBS + diccionario, cronograma, presupuesto, registro de riesgos, RACI, plan de comunicaciones.

#### Ejecución: entregables parciales, reportes semanales, issues log.

#### Monitoreo/Control: tablero de KPIs, EV si aplica (PV/EV/AC), solicitudes de cambio formales, pruebas de calidad.

#### Cierre: aceptación formal, cierre de contratos, informe final, lecciones aprendidas.


### 5. Métricas útiles por fase

#### Inicio: ROI esperado, beneficios estimados.

#### Planificación: precisión estimada (variance estimada), % de actividades detalladas.

#### Ejecución: % completado, hitos cumplidos.

#### Monitoreo: Schedule Variance (SV), Cost Variance (CV), número de CRs abiertos.

#### Cierre: satisfacción del cliente, variación final alcance/costo/tiempo, lecciones implementadas


### 6. Adaptar (tailoring) el ciclo de vida

#### Pregúntate: tamaño del proyecto, incertidumbre, regulación, cultura organizacional.

#### Para alta incertidumbre → acorta las fases, usa iteraciones cortas, valida hipótesis temprano.

#### Para entornos regulados → conserva gates formales, documentación y controles.

#### Documenta el ciclo seleccionado y por qué (qué se aplica, qué se omite).


### 7. Evitar errores

#### Saltar el inicio formal → riesgo: objetivos poco claros. Solución: acta de constitución simple y efectiva.

#### Planificación insuficiente o excesiva → balancea: plan “lo suficiente” que reduzca riesgo sin burocracia.

#### No integrar monitoreo con ejecución → establece KPIs y revisiones periódicas.

#### Cerrar sin lecciones aprendidas → captura aprendizajes y acciones concretas para futuros proyectos.


### 8. En cada fase

#### Inicio (días 0–7): definir objetivo, sponsor, stakeholders, alcance preliminar.

#### Planificación (semana 2–6): WBS, cronograma, presupuesto, riesgos, RACI.

#### Ejecución (variable): entregar, comunicar, gestionar equipo y proveedores.

#### Monitoreo (continuo): reportar, revisar riesgos, aprobar/denegar cambios.

#### Cierre (última semana): entrega formal, documentación final, lecciones aprendidas.


## Triple restricción (alcance-tiempo-costo) + calidad

##### Idea central de la gestión de proyectos: alcance, tiempo y costo son las tres variables que definen el éxito operativo del proyecto

##### Cambiar una afecta (o debería afectar) a las otras

##### La calidad no es “un extra”: es la cuarta restricción que condiciona y se ve afectada por las tres primeras.


### Definiciones

#### Alcance: lo que el proyecto entregará (funcionalidades, entregables, límites).

#### Tiempo: calendario, hitos y fechas de entrega.

#### Costo: presupuesto disponible (recursos, materiales, contrataciones).

#### Calidad: grado en que los entregables satisfacen criterios y expectativas (normas, tolerancias, aceptación del cliente).


### Interacción: cómo se afectan entre sí

#### Si aumentas el alcance (más features), necesitas más tiempo y/o más coste, o aceptar menos calidad.

#### Si acortas el tiempo (entregar antes), puedes necesitar más coste (contratar más gente, horas extras) o reducir alcance o aceptar mayor riesgo en la calidad.

#### Si recortas presupuesto, probablemente debas reducir alcance, alargar plazos o aceptar menor calidad.

#### Si exiges alta calidad (normas estrictas, cero defectos), típicamente se requieren más tiempo y más coste (pruebas, retrabajo, QA).


### Ej

Proyecto: lanzar MVP de una app en 12 semanas con presupuesto $100k y calidad: “≤ 2 errores críticos en producción”.

##### Si el cliente pide 3 features adicionales en la semana 4 → opciones:

##### Añadir 4 semanas (tiempo ↑).
##### Contratar 2 desarrolladores contractuales (costo ↑).
Priorizar y eliminar otras funcionalidades (alcance ↓).
Mantener plazos sin recursos extra pero aceptar riesgo de más errores (calidad ↓).

#### Decisión: elegir la combinación que preserve el valor y sea aprobada por el sponsor vía control de cambios.


### Herramientas y métricas

#### 1. Línea base (baseline): alcance, cronograma y presupuesto aprobados. Las variaciones se miden respecto a la línea base.

#### 2. Control de cambios: proceso formal para aprobar cualquier alteración.

#### 3. Earned Value (conceptos clave):

##### PV (Planned Value): valor presupuestado del trabajo planificado.

##### EV (Earned Value): valor del trabajo realmente completado.

##### AC (Actual Cost): coste real incurrido.

##### Schedule Variance (SV) = EV − PV (positivo = adelantado; negativo = retraso).

##### Cost Variance (CV) = EV − AC (positivo = bajo coste; negativo = sobrecoste).

##### CPI = EV / AC (Cost Performance Index).

##### SPI = EV / PV (Schedule Performance Index).

#### Ej:

Ejemplo numérico rápido: PV = 100k, EV = 90k, AC = 95k
SV = 90k − 100k = −10k → retraso.
CV = 90k − 95k = −5k → sobrecoste.
CPI = 90 / 95 ≈ 0.95 (eficiencia de coste < 1).
SPI = 90 / 100 = 0.9 (rendimiento de tiempo < 1). 


### Estrategias para manejar cambios en una restricción

##### Cuando una restricción cambia, aplica este flujo (práctico):

#### 1. Evaluar impacto: alcance del cambio, efectos en tiempo, costo, calidad y riesgos.

#### 2. Priorizar: usar criterios de valor (ROI, dependencia, riesgo). Herramientas: matriz de prioridad o MoSCoW.

#### 3. Proponer opciones: (a) extender tiempo, (b) aumentar presupuesto, (c) reducir alcance, (d) bajar calidad aceptada, (e) acelerar (fast tracking / crashing).

#### 4. Analizar trade-offs: coste adicional vs valor entregado vs riesgo de calidad.

#### 5. Presentar al sponsor / comité de cambio con recomendación y consecuencias.

#### 6. Actualizar línea base sólo si el cambio es aprobado; comunicar a todos los stakeholders.

#### 7. Monitorear ejecución del cambio y medir resultados vs estimación.


### Técnicas para acelerar sin matar la calidad

#### 1. Fast-tracking: realizar actividades en paralelo que estaban secuenciadas (risgo de rework ↑).

#### 2. Crashing: añadir recursos o horas extras para reducir duración (costo ↑; no siempre linealmente efectivo).

#### 3. MVP / descentralizar scope: entregar una versión mínima con calidad en lo crítico y planear mejoras posteriores.

#### 4. Automatizar pruebas (QA): inversión upfront que reduce retrabajo y preserva calidad.


### Gestión de reservas (financiera y temporal)

#### Reserva de contingencia: para riesgos identificados (asignada a paquetes de trabajo).

#### Reserva de gestión (management reserve): para imprevistos no identificados (controlada por el sponsor).

#### Política recomendada: definir porcentajes o criterios antes de arrancar y usar control de cambios para consumir reservas.


### Calidad: cómo integrarla con las otras restricciones

#### 1. Plan de Calidad: definir métricas (defectos por KLOC, tiempo medio de resolución, SLA), criterios de aceptación, procesos de QA (revisiones, pruebas, auditorías).

#### 2. QA vs QC:

##### QA (aseguramiento): procesos para prevenir defectos (revisiones, estándares, capacitación).

##### QC (control): actividades para detectar defectos (pruebas, inspecciones).

#### 3. Criterios de aceptación deben estar en el alcance: sin criterios claros, la “calidad” será subjetiva y generará conflictos.


### Checklist: ante un cambio de una restricción 

#### ¿El cambio está documentado? → registrar.

#### ¿Impacto en otras restricciones? → cuantificar (horas, coste, riesgo).

#### ¿Opciones de mitigación? → listar y comparar.

#### ¿Necesita aprobación? → abrir solicitud de cambio (CR).

#### ¿Actualizar línea base? → sólo si CR aprobado.

#### Comunicar cambios, reasignar propietarios, verificar QA adicional si aplica.


### Buenas prácticas

#### Definir tolerancias aceptables para alcance/tiempo/costo antes de empezar.

#### Usar control de cambios formal y visibilidad del impacto (no decisiones ad-hoc).

#### Priorizar por valor (no por preferencia personal).

#### Planear calidad desde el inicio: criterios de aceptación claros reducen retrabajo y disputas.

#### Medir (EV, CPI, SPI) y actuar temprano: pequeñas desviaciones tolerables se convierten rápido en problemas si se dejan


## Tailoring: personalización o ajuste

##### Proceso de adaptar un marco/metodología, sus procesos, artefactos y herramientas al contexto específico de un proyecto u organización

##### No se trata de “usar todo o nada”: se trata de elegir qué aplicar, cómo y por qué, para maximizar valor y minimizar burocracia.


### Importancia

Evita la sobrecarga documental y burocrática.

Aumenta la probabilidad de éxito porque las prácticas elegidas encajan con el riesgo, tamaño y cultura.

Permite cumplir requisitos regulatorios cuando es necesario, y ser ligero cuando no.

Facilita la adopción real por parte del equipo (prácticas útiles = usadas).


### Principios

#### 1. Contexto primero: evalúa tamaño, complejidad, criticidad, regulación, madurez organizacional y stakeholders.

#### 2. Valor sobre ritual: aplica prácticas que mitiguen riesgos reales o aumenten valor; elimina las que no aportan.

#### 3. Documentar la decisión: dejar registro (qué se aplica, qué se omite, por qué, quién aprobó).

#### 4. Revisable: el tailoring no es estático; revísalo tras pilotos o hitos.

#### 5. Transparencia y gobernanza: que el sponsor/PMO conozca y apruebe el alcance del tailoring.


### Aplicación de tailoring

#### 1. Diagnóstico inicial
##### Responde: ¿qué nivel de incertidumbre? ¿qué impacto tendría el fallo? ¿qué regulaciones aplican?

#### 2. Mapeo del marco
##### Lista procesos, roles, artefactos y ceremonias del marco base (p. ej. PMBOK/PRINCE2/Scrum).

#### 3. Evaluación elemento por elemento
##### Para cada ítem, decide: Mantener / Simplificar / Omitir / Reemplazar.
Justifica con riesgo, coste/beneficio, esfuerzo y alternativa.

#### 4. Definir mínima gobernanza viable
##### Qué artefactos son obligatorios (acta, WBS, línea base, CR log), cuáles opcionales.

#### 5. Aprobación formal
##### Sponsor o PMO aprueba el Tailoring Decision Document.

#### 6. Comunicación y formación
##### Comunica el “cómo trabajaremos” a todo el equipo y stakeholders.

#### 7. Piloto y ajuste
##### Aplica en un piloto o las primeras sprints; recopila feedback y ajusta.

#### 8. Revisión periódica
##### Revisar al menos en hitos clave o post-mortem para validar si mantiene valor


### Ejemplos (decisiones)

#### Proyecto pequeño (1-3 personas, 2–3 meses): documentación mínima (acta corta), reuniones de estado semanales, usar Kanban, WBS de 2 niveles, simple RACI (roles combinados).

#### Desarrollo de software (MVP): planificación de alto nivel (roadmap), ejecución con Scrum (sprints), control de cambios ligero (CR solo para scope crítico), QA automatizada.

#### Proyecto regulado (salud/finanzas): mantener PRINCE2/PMBOK formal, gates por etapa, documentación completa, auditorías, trazabilidad de decisiones.

#### Organización con PMO fuerte: adaptar prácticas para alinear con plantillas del PMO; documentar desviaciones y justificaciones.


### Checklist Tailoring

##### ¿Quién aprueba el tailoring (sponsor/PMO)?

##### ¿Cuál es el riesgo/impacto del proyecto?

##### ¿Qué artefactos son obligatorios?

##### ¿Qué roles se combinan o definen?

##### ¿Frecuencia mínima de reporte y reuniones?

##### ¿Nivel de detalle en estimaciones y WBS?

##### ¿Política de control de cambios (formal/liviana)?

##### ¿Reservas financieras y políticas de uso?

##### ¿Plan de comunicación y training sobre el tailoring?

##### ¿Periodo de revisión del tailoring (p. ej. después de 2 sprints o 1 hito)?


### Documentación “Tailoring Decision Document”

##### Resumen ejecutivo (por qué se personaliza).

##### Lista de prácticas/procesos/artefactos del marco base.

##### Decisión por ítem: Mantener / Simplificar / Omitir / Reemplazar.

##### Justificación del cambio (riesgos mitigados o costes evitados).

##### Roles responsables y aprobador(es).

##### Fecha de efectividad y fecha de revisión.

##### Indicadores para evaluar si el tailoring funciona (p. ej. % de CRs, cumplimiento de hitos, satisfacción del equipo).

Ejemplo

```
Cronograma detallado (nivel de tareas diario) → OMITIR; usar cronograma de hitos y backlog; justificación: equipo ágil de 6 devs que gestiona tareas en Jira; aprobado por sponsor X el 2025-09-19.
```


### Gobernanza y límites del tailoring

##### No uses tailoring para eludir controles regulatorios o ocultar información a stakeholders.

##### PMO/sponsor deben tener visibilidad y poder revertir decisiones si el riesgo crece.

##### Mantén trazabilidad: decisiones de tailoring deben estar en el expediente del proyecto.


### Métricas para evaluar tailoring

##### Cumplimiento de hitos vs plan (timeliness).

##### Número y severidad de issues inesperados.

##### % de cambios aprobados y motivos (scope creep).

##### Satisfacción del cliente / sponsor.

##### Tiempo medio de entrega por iteración (lead time) en proyectos ágiles.

##### Esfuerzo en documentación vs valor usado (p. ej. documentos leídos/consultados).


### Errores a evitar en tailoring

##### Error: Omitir documentación crítica por ahorrar tiempo → Evitar: primero evaluar riesgos y documentar la justificación.

##### Error: Hacer tailoring sin aprobación → Evitar: formalizar la decisión con sponsor/PMO.

##### Error: Aplicar “favoritismo” (usar lo que le gusta al líder) → Evitar: basar decisiones en contexto y datos.

##### Error: No revisar el tailoring → Evitar: establecer revisiones periódicas y métricas.


### Ej: Tailoring para un MVP de 3 meses

##### Mantener: Acta de constitución simple, backlog del producto, sprints de 2 semanas, owner/scrum master.

##### Simplificar: RACI reducido (Product Owner asume sponsor funcional), informes de estado quincenales en vez de semanales.

##### Omitir: Gantt detallado a nivel de tarea (usar roadmap y backlog).

##### Reemplazar: Control de cambios formal por una reunión de priorización del backlog con registro en Jira.
Documentar todo y revisar después de 2 sprints.



## Stakeholders: partes interesadas

##### Todas las personas, grupos u organizaciones que pueden afectar o verse afectadas por el proyecto o sus entregables

##### Entenderlos y gestionarlos es crítico: un stakeholder mal gestionado puede detener, retrasar o degradar el valor del proyecto

##### Un stakeholder bien gestionado puede facilitar recursos, decisiones y adopción.


### 1. Tipos de stakeholders

#### Sponsor / Patrocinador: financia y toma decisiones ejecutivas.

#### Cliente / Usuario final: quien recibirá/usar el entregable.

#### Equipo del proyecto: PM, desarrolladores, QA, diseñadores.

#### Proveedor / Contratista: hace trabajo externo (hosting, terceros).

#### PMO / Gobernanza: exige plantillas, gates y cumplimiento.

#### Reguladores / Auditores: requisitos legales y cumplimiento.

#### Business units / Operaciones: integran y mantienen lo entregado.

#### Inversores / Accionistas: interés en ROI, plazos y alcance estratégico.

#### Comunidad / Público: en proyectos con impacto social o reputacional.

##### También se clasifican por cercanía: internos vs externos, primarios vs secundarios, y por influencia: key stakeholders (decisores) vs influencers vs afectados.


### 2. Proceso para gestionar stakeholders

#### 1. Identificar: brainstorming, entrevistas, documentos (contratos, organigramas).

#### 2. Registrar: crear el Stakeholder Register (lista con datos clave).

#### 3. Analizar: evaluar poder/influencia e interés/impacto.

#### 4. Clasificar: usar matriz Poder–Interés o modelo de Salience (poder, legitimidad, urgencia).

#### 5. Planear la participación: decidir estrategia (involucrar, gestionar de cerca, informar, monitorear).

#### 6. Comunicar y ejecutar: implementar el plan de comunicación y engagement.

#### 7. Monitorear y revisar: actualizar registro y ajustar estrategia según cambien circunstancias.


### 3. Herramientas 

#### Stakeholder Register (tabla con datos y estrategia — ver plantilla abajo).

#### Matriz Poder–Interés (Power / Interest grid) — cuadrantes:

##### Alto Poder / Alto Interés: Gestionar de cerca (involucrar, tomar decisiones conjuntas).

##### Alto Poder / Bajo Interés: Mantener satisfecho (reportes ejecutivos, consultas selectivas).

##### Bajo Poder / Alto Interés: Mantener informado (canales abiertos, feedback).

##### Bajo Poder / Bajo Interés: Monitorear (informes mínimos).

#### Modelo de Salience: prioriza por Poder + Legitimidad + Urgencia.

#### Mapa de influencia: quién influye en quién (útil para negociaciones).


### 4. Plantilla

| ID | Nombre / Grupo | Rol / Organización | Categoría       | Interés (qué quiere)         | Influencia / Poder (L/M/H) | Expectativas clave      | Estrategia de engagement                   | Canales                       | Frecuencia          | Propietario | Notas                            |
| -: | -------------- | ------------------ | --------------- | ---------------------------- | -------------------------: | ----------------------- | ------------------------------------------ | ----------------------------- | ------------------- | ----------- | -------------------------------- |
| S1 | CEO / Sponsor  | Sponsor ejecutivo  | Interno - clave | Lanzamiento rentable en Q4   |                          H | Decisión y financiación | Gestionar de cerca / decisiones ejecutivas | Reunión 1:1, report ejecutivo | Semanal (brief)     | PM          | Requiere resumen ejecutivo 1 pág |
| S2 | Product Owner  | Dueño del producto | Interno         | Funcionalidades prioritarias |                          H | Priorizar backlog       | Co-crear backlog, demos                    | Jira, demo sprint             | Cada sprint         | PO          | Asiste a refinements             |
| S3 | Equipo QA      | QA interno         | Interno         | Estabilidad y aceptación     |                          M | Entregables aprobados   | Involucrar en definición de criterios      | Slack, standup                | Diario              | Lead QA     | Automatización requerida         |
| S4 | Regulador      | Entidad externa    | Externo         | Cumplimiento normativo       |                          H | Reportes y trazabilidad | Mantener informado y documentar            | Email formal, auditoría       | Mensual / on-demand | PM          | Documentación obligatoria        |



### Ejemplo Matriz Poder–Interés

##### Gestionar de cerca: Sponsor (CEO), Head de Producto.

##### Mantener satisfecho: CFO, Jefe Legal.

##### Mantener informado: Usuarios beta, Soporte.

##### Monitorear: Comunidad general, stakeholders lejanos.

Frecuencia sugerida:

Gestionar de cerca → reuniones semanales / 1:1 y demos.
Mantener satisfecho → reportes ejecutivos quincenales.
Mantener informado → newsletters o releases mensuales.
Monitorear → informes trimestrales o por hitos.


### Estrategias de engagement (acciones)

#### Involucrar: workshops, pilots, user testing, sesiones de co-diseño.

#### Informar: newsletters, status report, dashboards accesibles.

#### Consultar: encuestas, entrevistas puntuales, revisión de requisitos.

#### Colaborar: comités de decisión, joint planning, revisión de scope.

#### Negociar: cuando hay conflicto entre expectativas — preparar alternativas y trade-offs.

##### Para cada stakeholder define qué necesita, por qué lo necesita y cómo vas a entregarlo (deliverable + dueño + fecha).


### Métricas

#### % de stakeholders que reciben comunicaciones según plan.

#### Tiempo medio de respuesta a solicitudes críticas.

#### NPS / satisfacción por stakeholder clave (encuesta corta post-hito).

#### Nº de issues escalados por stakeholder y tiempo de resolución.

#### Cumplimiento de aprobaciones en gates (cuánto retrasan decisiones).


### Ciclo de vida del stakeholder durante el proyecto

#### Identificar → Influenciar → Comprometer → Validar → Mantener / Reasignar → Cerrar.

##### Actualiza su estatus: por ejemplo, un usuario beta puede pasar de informado a colaborador activo si participa en pruebas.


### Evitar errores

##### No identificarlos temprano → realiza un stakeholder mapping en la semana 0.

##### Subestimar la influencia informal (ej.: un manager intermedio que bloquea acceso) → usa mapas de influencia.

##### Comunicación genérica → personaliza el mensaje según interés/poder.

##### Olvidar documentar compromisos → guarda acuerdos, decisiones y responsables.

##### No revisar el registro → actualízalo en cada hito o cuando haya cambios organizacionales.


### Checklist comienzo del proyecto y stakeholders

##### Hacer lista inicial de stakeholders (internos y externos).

##### Completar Stakeholder Register mínimo (nombre/rol/expectativas/influencia).

##### Hacer Power–Interest mapping y etiquetar prioridad.

##### Acordar plan de comunicación inicial con sponsor.

##### Programar reuniones con stakeholders clave (gatekeepers y sponsor).


## Enfoques 

##### Maneras generales de organizar, planificar y ejecutar un proyecto: desde enfoques rígidos y secuenciales hasta métodos adaptativos y continuos

##### Elegir el enfoque correcto alinea gobernanza, riesgo, cultura y velocidad de entrega.


### Definición

##### El enfoque define ritmo (cascada vs iteraciones cortas), nivel de detalle de la planificación, roles, artefactos y cómo se toman decisiones (gran gate vs decisiones continuas).

##### No es solo “metodología técnica”: incluye gobernanza, contratos, documentación y cultura.


#### 1. Predictivo / Waterfall
Planificación detallada al inicio; fases secuenciales (requisitos → diseño → ejecución → pruebas → entrega).
Mejor cuando requisitos estables y riesgo técnico bajo

#### 2. Iterativo
Producto se mejora en ciclos (iteraciones) que refinan requisitos y diseño. Las versiones tempranas permiten aprendizaje.

#### 3. Incremental
Entregas parciales de funcionalidad (incrementos) que se integran hasta completar el producto final. 

#### 4. Adaptativo / Ágil (Scrum, Kanban, XP)
Entregas frecuentes, feedback continuo, equipos autoorganizados. Scrum (sprints), Kanban (flujo continuo), XP (prácticas técnicas). Ideal cuando la incertidumbre de requisitos es alta.

#### 5. Híbrido
Mezcla predictivo para gobernanza/contratos con ágil en ejecución (p. ej. roadmap y luego sprints). Muy práctico en empresas tradicionales que migran a ágil.

#### 6. Lean
Foco en eliminar desperdicio, ciclo rápido de aprendizaje y entrega mínima viable (MVP). Muy usado en innovación y startups.

#### 7. Critical Chain / Enfoque por restricciones
Planifica según las restricciones de recursos y protege plazos con buffers (útil en entornos con recursos compartidos).

#### 8. DevOps / Continuous Delivery (más operativo pero relevante)
Integra desarrollo con operaciones para despliegues frecuentes y automatizados; enfoque en pipeline y automatización. 

#### 9. Projectized / Contract-Driven (p. ej. PRINCE2 en entornos formales)
Enfoque con gobernanza fuerte, roles y control por etapas; frecuente en sector público y contrataciones grandes. 


### Pros y contras

1. Predictivo / Waterfall
Pros: claridad contractual, control documental, fácil de entender.
Contras: rígido frente a cambios.
Usar cuando: requisitos estables, regulatorio o alto coste del cambio (obras civiles, contratos fijos).

2. Iterativo / Incremental
Pros: reduce riesgo al validar versiones parciales.
Contras: requiere buena gestión de integración.
Usar cuando: producto complejo pero puedes entregar partes útiles.

3. Ágil (Scrum / Kanban / XP)
Pros: rápida adaptación, feedback temprano, mayor foco en cliente.
Contras: necesita cultura, disciplina de producto y priorización constante.
Usar cuando: requisitos inciertos, mercados cambiantes, equipos autónomos.

4. Híbrido
Pros: equilibria control y flexibilidad.
Contras: puede generar confusión si no se define claramente qué parte es ágil y cuál predictiva.
Usar cuando: contratos/reglas requieren documentación pero el desarrollo es incierto

5. Lean / MVP
Pros: aprende rápido, invierte solo en lo que valida hipótesis.
Contras: no sirve si el producto exige cumplimiento normativo estricto desde el inicio.
Usar cuando: innovación, startups, validación de mercado.

6. Critical Chain
Pros: protege plazos frente a multitarea y buffers inteligentes.
Contras: requiere disciplina en gestión de recursos.
Usar cuando: recursos críticos y múltiples proyectos concurrentes

7. DevOps / Continuous
Pros: despliegues más rápidos y fiables, feedback operacional.
Contras: requiere inversión en automatización y cultura de colaboración.
Usar cuando: producto digital con necesidad de despliegues frecuentes.


### Tipo de proyecto y enfoque

#### Construcción / Ingeniería civil → Predictivo / PRINCE2

#### Producto digital con alta incertidumbre → Ágil (Scrum/Kanban) + DevOps

#### Proyecto grande en empresa tradicional → Híbrido (gobernanza predictiva + ejecución ágil)

#### Mejora de procesos internos → Lean / Kaizen

#### Múltiples proyectos con recursos compartidos → Critical Chain o PMO con priorización

#### Entregas contractuales con SLAs → Predictivo / Contract-driven


### Checklist elección de enfoque 

##### Qué tan claros son los requisitos? (claro → predictivo; incierto → ágil)

##### ¿Cuál es el impacto del error o el incumplimiento? (alto → más control/documentación)

##### ¿Qué cultura y madurez tiene el equipo/organización respecto a ágil?

##### ¿Hay restricciones contractuales o regulatorias? (sí → considerar predictivo o híbrido)

##### ¿Necesitas entregas rápidas y feedback del mercado? (sí → ágil/lean)

##### ¿Recursos críticos se comparten entre proyectos? (sí → considerar Critical Chain)

##### ¿Requiere integración continua y despliegues frecuentes? (sí → DevOps)

##### Si la mayoría apunta a “incierto / rápido / feedback” → favorece enfoques ágiles; si apunta a “contrato / regulatorio / estabilidad” → predictivo o híbrido.


### Combinar enfoques (híbridos) - patrón

##### Mantén dos niveles:

#### 1. Governance level: planificación de alto nivel, contratos, gates, métricas financieras (predictivo/PMO).

#### 2. Delivery level: equipos usan sprints, Kanban y CI/CD para construir (ágil + DevOps).

##### Define fronteras claras: qué se decide en roadmap vs backlog, cómo se reportan métricas, quién aprueba cambios mayores.


### Métricas según enfoques

#### Predictivo: cumplimiento de hitos, variación de coste/tiempo (EV, SV, CV).

#### Ágil: lead time, velocity, % de stories entregadas vs comprometidas, tasa de defectos.

#### Lean: ciclo de vida de hipótesis (time-to-learn), desperdicio eliminado.

#### DevOps: tiempo de despliegue, frecuencia de despliegues, MTTR (mean time to recover).


### Cambiar de enfoque o introducir uno nuevo

##### Pilota en 1–2 proyectos pequeños antes de escalar.

##### Forma a roles clave (Product Owner, Scrum Master, PMO).

##### Ajusta contratos y SLAs para permitir iteraciones cuando sea necesario.

##### Define KPIs claros y compara antes/después.

##### Comunica cambios de rol y responsabilidades (RACI actualizado).


## Waterfall

##### Enfoque predictivo y secuencial para gestionar proyectos: las fases fluyen ordenadamente una tras otra (requisitos → diseño → implementación → pruebas → entrega).

##### Cada fase se completa antes de empezar la siguiente y, en general, los cambios tardíos son costosos.


### Fases

#### 1. Requisitos / Análisis
Recopilar y documentar requisitos funcionales y no funcionales.
Entregable clave: documento de requisitos, criterios de aceptación.

#### 2. Diseño (High-level & Detailed Design)
Arquitectura, diseño técnico, especificaciones.
Entregable clave: diseño técnico, diagramas, especificaciones por módulo

#### 3. Implementación / Desarrollo
Construcción del producto según diseño.
Entregable clave: código/artefactos listos para pruebas

#### 4. Pruebas (Verification & Validation)
QA, integración, pruebas de sistema, pruebas de aceptación.
Entregable clave: reportes de test, lista de defectos resueltos.

#### 5. Despliegue / Entrega
Puesta en producción / entrega al cliente.
Entregable clave: release instalado, manuales, formación.

#### 6. Mantenimiento / Soporte
Corrección de fallos post-lanzamiento y pequeñas mejoras (a menudo gestionadas como nuevos proyectos o releases).


### Principios y supuestos 

##### Requisitos pueden definirse claramente al inicio.

##### Cambios son indeseables y costosos una vez que se avanza.

##### Documentación y trazabilidad son prioritarias.

##### Buena opción cuando el riesgo de cambio es bajo y la conformidad/regulación exige trazabilidad.


### Ventajas

##### Claridad contractual: fácil hacer scopes y contratos fijos.

##### Documentación completa y trazabilidad — importante en sectores regulados.

##### Planificación y estimación más sencillas cuando los requisitos son estables.

##### Responsabilidades y entregables claros por fase.


### Desventajas / limitaciones

##### Poco flexible frente a cambios de requisitos o descubrimiento tardío.

##### Feedback del usuario llega tarde (riesgo de construir lo equivocado).

##### Revisión de problemas puede implicar retrabajo grande (costoso en tiempo y dinero).

##### No fomenta iteración rápida ni aprendizaje continuo.


### Uso

#### Proyectos con requisitos bien definidos y estables (ingeniería civil, obra pública, sistemas embebidos con especificaciones fijas).

#### Entornos regulados que requieren documentación exhaustiva y auditoría (salud, aeroespacial, defensa).

#### Contratos de precio fijo donde el alcance debe estar detallado desde el inicio.


### Artefactos clave en Waterfall

##### Documento de Requisitos (SRS) con criterios de aceptación.

##### Diseño de Arquitectura y diseño detallado.

##### Plan de pruebas (test plan) y casos de prueba.

##### Plan de gestión de configuración y control de cambios.

##### Documentación de despliegue y manuales de operación.


### Gobernanza: gates y líneas base

Se usan gates al final de cada fase (review) para decidir pasar a la siguiente.

Línea base (baseline) de alcance/cronograma/presupuesto se aprueba en planificación; cambios requieren control formal (CR).


### Métricas

Cumplimiento de hitos por fase.

Número y severidad de defectos por fase (p. ej. más defectos en producción → indicador de mala validación).

Variación de tiempo/costo respecto a la línea base (EV si se usa).

Tiempo medio de resolución de defectos.


### Evitar errores

##### Error: Requisitos incompletos al inicio → Mitigación: invertir más tiempo en análisis y validar con stakeholders (prototipos, reviews formales).

##### Error: Falta de pruebas integradas hasta etapas tardías → Mitigación: planear pruebas de integración tempranas, crear entornos de staging.

##### Error: Cambios gestionados informalmente → Mitigación: usar control de cambios formal y comunicar impactos.

##### Error: Subestimar la integración entre componentes → Mitigación: definir interfaces y realizar pruebas de integración tempranas en sub-fases


### Tailoring

Waterfall con prototipado previo: incluir una fase corta de prototipado en requisitos para validar supuestos con usuarios.

Waterfall con sprints internos: dividir la implementación en sub-fases iterativas internas pero manteniendo gates formales.

Híbrido: gobernanza predictiva (contratos, gates) + ejecución incremental en desarrollo (ideal en empresas tradicionales que adoptan prácticas ágiles).

Siempre documenta el tailoring: qué se mantiene, qué se simplifica y por qué.


### Caso práctico (3 decisiones)

Proyecto: construir un sistema de control para planta industrial con especificaciones regulatorias.

Decisión 1: usar Waterfall por requerimientos regulatorios y necesidad de trazabilidad.
Decisión 2: añadir fase de prototipo para validar interfaces con hardware (reduce riesgo de retrabajo).
Decisión 3: plan de pruebas extenso con criterios de aceptación claros y auditorías en gates.

Resultado esperado: menor riesgo de no conformidad, mayor inversión en análisis y pruebas, menos cambios durante la implementación.


### Checklist

Los requisitos son estables y bien entendidos?

¿Se requiere documentación y trazabilidad exhaustiva?

¿El coste del cambio tardío es alto?

¿Los stakeholders aceptan un feedback tardío?

Si la mayoría es “sí”, Waterfall es una opción válida; si predominan “no”, considera enfoques iterativos o híbridos.



## Agile

##### Enfoque adaptativo para gestionar y entregar trabajo (especialmente productos) mediante ciclos cortos de aprendizaje y entrega

##### Prioriza valor al cliente, colaboración, feedback temprano y respuesta rápida al cambio en lugar de seguir un plan rígido.


### Valores - Agile Manifesto

#### 1. Individuos y relaciones por sobre procesos y herramientas.

#### 2. Software (o producto) funcionando por sobre documentación extensa.

#### 3. Colaboración con el cliente por sobre negociación contractual.

#### 4. Responder al cambio por sobre seguir un plan.


### Principios

##### Entregar valor frecuentemente (sprints/iteraciones).

##### Aceptar y gestionar el cambio incluso tarde en el proyecto.

##### Entregar incrementos utilizables y validados con usuarios.

##### Equipos autoorganizados y multifuncionales.

##### Comunicación cara a cara (o directa).

##### Mejora continua (retrospectivas) y simplicidad.


### Frameworks y prácticas

#### Scrum: marco iterativo con roles (Product Owner, Scrum Master, Developers), eventos (Sprint, Planning, Daily, Review, Retrospective) y artefactos (Product Backlog, Sprint Backlog, Increment). Muy usado para desarrollo de producto

#### Kanban: flujo continuo visual (tablero con columnas), límites de trabajo en curso (WIP), enfocado en reducir lead time y mejorar flujo. Útil cuando el trabajo es variable o continuo.

#### eXtreme Programming (XP): prácticas técnicas como pair programming, TDD, integración continua y refactorización para mejorar calidad.

#### Lean / Lean Startup: validar hipótesis rápido con experimentos (MVP), eliminar desperdicio y medir aprendizaje.


### Roles y responsabilidades (alto nivel)

#### Product Owner (PO): define prioridades del backlog y representa al cliente/negocio.

#### Scrum Master / Facilitador: elimina impedimentos, protege al equipo y facilita prácticas ágiles.

#### Equipo de entrega: multifuncional, responsable de convertir backlog en incrementos.

#### Stakeholders / Usuarios: participan en demos y validaciones frecuentes.

(En Kanban no siempre hay roles formales; se centra en flujo y políticas explícitas.)


### Artefactos

#### Product Backlog: lista priorizada de trabajo (features, bugs, mejoras).

#### Sprint Backlog: selección de items que el equipo se compromete en el sprint.

#### Definition of Ready / Done: criterios claros para comenzar y aceptar trabajo.

#### Board visual: tarjetas / columnas para seguir estado (To Do → Doing → Done).


### Ciclos y ceremonias (ej scrum)

#### Sprint Planning: planificar qué se entregará y cómo.

#### Daily Stand-up: sincronización diaria (15 min).

#### Sprint Review / Demo: mostrar incrementos a stakeholders y recoger feedback.

#### Retrospective: mejorar procesos y prácticas del equipo.


### Métricas (flujo y valor)

#### Velocity (Scrum): puntos completados por sprint — sirve para forecast relativo.

#### Lead time / Cycle time (Kanban): tiempo desde petición hasta entrega (mide rapidez).

#### Throughput: ítems entregados por periodo.

#### Burndown / Burnup: progreso del sprint o release.

#### Work Item Age, Cumulative Flow Diagram: salud del flujo y cuellos de botella.

#### Satisfacción del cliente / NPS interno: calidad percibida.


### Uso de Agile

##### Requisitos inciertos o cambiantes.

##### Necesidad de feedback frecuente del cliente/mercado.

##### Equipos que pueden trabajar colaborativamente y aprender rápido.

##### Productos digitales, innovación, mejoras continuas.

##### No es ideal si el alcance debe estar 100% definido y sin cambios (p. ej. algunos contratos regulatorios estrictos) — en esos casos usar híbridos.


### Ventajas y limitaciones

#### Ventajas: entrega temprana de valor, menor riesgo al validar hipótesis, mejor adaptación al cambio, mayor involucramiento del cliente.

#### Limitaciones: requiere disciplina, product ownership fuerte, posible dificultad en contratos fijos, puede generar incertidumbre en stakeholders no acostumbrados.


### Aplicar

#### 1. Formar roles clave: nombrar PO y facilitador/Scrum Master.

#### 2. Crear backlog ordenado por valor.

#### 3. Definir Definition of Done y políticas de Definition of Ready.

#### 4. Elegir cadencia (ej. sprints de 2 semanas o flujo Kanban).

#### 5. Implementar ceremonias mínimas: planning, daily, review, retro.

#### 6. Medir pocas métricas y ajustar (lead time, velocity).

#### 7. Piloto en 1 equipo y escalar aprendiendo (no imponer todo a la vez).


### Evitar errores

##### Confundir hábito ágil con ceremonias vacías: prioriza objetivos (valor, feedback), no rituales.

##### Falta de Product Owner con autoridad → decisiones lentas.

##### No definir DoD/DoR → trabajo incompleto y re-trabajo.

##### Cambios constantes durante el sprint sin control → proteger la cadencia.

##### Medir solo velocidad → incentiva malas prácticas; combina con calidad y satisfacción.


### Agile + Gobernanza (híbridos)

#### Para organizaciones que necesitan control formal: usa governance predictiva (roadmap, business case, gates) y delivery ágil en equipos (sprints, CI/CD). 

##### Define claramente qué decisiones se toman en cada nivel.


### Ejemplo MVP (8 sem)

Cadencia: sprints de 2 semanas (4 sprints).

PO prioriza backlog para entregar el core funcional en sprint 1–3 y mejoras/bugs en sprint 4.

DoD incluye pruebas automatizadas + revisión de aceptación del PO.

Métricas: lead time objetivo ≤ 7 días, velocity estimada 20 puntos/sprint.

Revisión con stakeholders al final de cada sprint para ajustar prioridades.



## Híbrido

##### Combinar deliberadamente prácticas predictivas (Waterfall, control por fases) con prácticas adaptativas/ágiles (Scrum, Kanban, Lean) para aprovechar lo mejor de ambos mundos

##### Aplica gobernanza y trazabilidad donde se necesita, flexibilidad y aprendizaje rápido donde aporta más valor.


### Motivos

##### La organización necesita control, cumplimiento o contratos formales, pero el trabajo real (por ejemplo desarrollo) tiene incertidumbre.

##### Velocidad y feedback en entrega sin perder gobernanza a nivel estratégico/financiero.

##### Permite transición gradual a ágil sin romper procesos legales/contractuales existentes.


### Patrones híbridos

#### 1. Governance level / Delivery level (más usado)

##### Nivel Gobierno (alto): roadmap, business case, aprobación de presupuesto, gates, líneas base (Waterfall/PRINCE2/PMBOK).

##### Nivel Entrega (equipo): sprints, backlog, CI/CD, Kanban para ejecución diaria (Scrum/Kanban/DevOps).


#### 2. Fases iniciales predictivas + ejecución ágil

##### Requisitos y arquitectura en fases: análisis + diseño (Waterfall).

##### Desarrollo e integración por iteraciones (Ágil).


#### 3. Módulos estables vs módulos inciertos

##### Componentes con specs fijas → entregar por fases predictivas.

##### Componentes innovadores → equipos ágiles y experimentación.


#### 4. Contract hybrid

##### Contrato marco y SLAs fijos; entregables del día a día gestionados por backlog y entregas iterativas.


### Conserva ventajas de los demás enfoques

#### De Waterfall / predictivo: acta, business case, línea base financiera, gates para decisiones de inversión, requisitos regulatorios documentados.

#### De Ágil: Product Backlog, cadence de sprints o flujo Kanban, demos regulares, Definition of Done, retrospectives, ownership claro (PO).


### Artefactos y ceremonias en híbrido

Acta de constitución + roadmap (baseline).

Product Backlog + Epic / Release plan.

Sprint Planning / Kanban policies.

Gates de inversión / Revisiones ejecutivas (cada X sprints o hitos).

Control de cambios formal para scope/budget pero backlog reprioritaciones ágiles para ejecución.

Reporte consolidado: métricas ágiles (velocity, lead time) + métricas de proyecto (EV, variación coste/tiempo).


### Diseño 

#### 1. Diagnóstico: tamaño, riesgo, regulación, madurez ágil, contratos.

#### 2. Mapear decisiones: qué se decidirá por gate vs por backlog.

#### 3. Definir fronteras: responsabilidades, qué informa al comité y con qué frecuencia.

#### 4. Tailoring: documentar qué prácticas predictivas se mantienen y qué ágiles se adoptan.

#### 5. Piloto: aplicar en 1 iniciativa (1–2 equipos) y medir.

#### 6. Escalar: actualizar PMO, plantillas y contratos según lecciones aprendidas.


### Métricas

##### Gobernanza: ROI esperado, cumplimiento de hitos financieros, EV / CV / SV.

##### Delivery: lead time, velocity, throughput, % de historias entregadas vs comprometidas.

##### Calidad/satisfacción: defectos en producción, satisfacción del sponsor/cliente, NPS.


### Ejemplo

Proyecto: Implementar módulo de pagos en plataforma existente (6 meses, regulatorio moderado).

Gobernanza: aprobar business case y presupuesto trimestralmente (gates cada 2 meses).
Requisitos regulatorios (KYC, PCI) definidos y documentados (predictivo).
Desarrollo: equipos ágiles con sprints de 2 semanas para iterar sobre integraciones, UX y pruebas.
Control de cambios: cambios de alcance mayores requieren CR y aprobación del sponsor; pequeñas prioridades se reordenan en el backlog mediante el PO.
Métricas: EV para presupuesto total, velocity por equipo y lead time para cambios críticos.


### Riesgos 

#### Confusión de responsabilidades → Mitigación: RACI claro y reglas explícitas sobre qué decisiones se toman dónde.

#### Duplicidad documental (dos mundos con papeles distintos) → Mitigación: un único “source of truth” (por ejemplo: Confluence + Jira integrados).

#### Sponsor no entiende cadencia ágil → Mitigación: reporting ejecutivo simple (1 pág) y demos periódicas.

#### Control de cambios lento → Mitigación: definir umbrales (qué puede decidir el PO vs qué necesita gate).


### Checklist

##### Definir objetivos de gobernanza y límites aceptables (tolerancias).

##### Establecer quién aprueba qué (decisiones de inversión vs de priorización).

##### Crear roadmap y backlog vinculados (epics → releases → sprints).

##### Acordar cadencia de reporting (ej.: informes ejecutivos mensuales; demos cada sprint).

##### Documentar Tailoring Decision Document (qué se usa y por qué).

##### Piloto y revisión al primer gate.


### Buenas prácticas

##### Mantén comunicación simple para sponsors (no les inundes con métricas técnicas).

##### Protege la cadencia del equipo (no introducir cambios de scope ad-hoc dentro de sprints sin proceso).

##### Usa herramientas que integren planificación y ejecución (por ejemplo: Roadmap en Confluence + backlog en Jira).

##### Revisa el enfoque tras hitos para ajustar tailoring.


## Earned Value: Valor Ganado

##### Earned Value Management (EVM) es una técnica para medir el rendimiento del proyecto integrando alcance, tiempo y coste en una sola vista cuantitativa

##### Permite responder preguntas como: ¿Vamos bien respecto al plan? ¿Cuánto costará terminar? usando métricas objetivas y comparables.


### Términos (nombres y equivalentes)

#### PV (Planned Value) — también BCWS: presupuesto del trabajo planificado hasta la fecha.

#### EV (Earned Value) — también BCWP: presupuesto del trabajo realmente completado hasta la fecha (valor ganado).

#### AC (Actual Cost) — también ACWP: coste real incurrido hasta la fecha.


### Fórmulas

#### SV (Schedule Variance) = EV − PV (positivo = adelantado; negativo = retrasado)

#### CV (Cost Variance) = EV − AC (positivo = bajo coste; negativo = sobrecoste)

#### SPI (Schedule Performance Index) = EV / PV ( >1 = mejor que plan; <1 = peor)

#### CPI (Cost Performance Index) = EV / AC ( >1 = bajo coste; <1 = sobrecoste)


##### Forecasting (estimaciones de coste para terminar):

#### EAC (Estimate At Completion) — varias fórmulas según supuestos:

Si el rendimiento actual de costes continúa: EAC = BAC / CPI

Si los costes futuros se harán al ritmo planificado: EAC = AC + (BAC − EV)

Si hay mezcla de rendimiento pasado y futuro: EAC = AC + (BAC − EV) / (CPI × SPI) (otra variante)

#### ETC (Estimate To Complete) = EAC − AC

#### VAC (Variance At Completion) = BAC − EAC

##### (BAC = Budget At Completion = presupuesto total aprobado del proyecto.)


### Ejemplo

Supongamos:

BAC = $100,000 (presupuesto total).

A la semana 4, la planificación decía que debíamos haber completado 40% → PV = 0.40 × 100,000 = $40,000.

Realmente hemos completado 30% → EV = 0.30 × 100,000 = $30,000.

Coste real incurrido hasta la fecha → AC = $35,000.


Cálculos: 

1. SV = EV − PV = 30,000 − 40,000 = −10,000 → atraso en valor de $10k.

2.  CV = EV − AC = 30,000 − 35,000 = −5,000 → sobrecoste de $5k.

3. SPI = EV / PV = 30,000 / 40,000 = 3/4 = 0.75 → rendimiento de tiempo 75% (por debajo del plan).

4. CPI = EV / AC = 30,000 / 35,000 = 30/35 = 6/7 ≈ 0.857 → por cada dólar gastado, se ganó ~$0.857 en trabajo (ineficiencia).


Forecast (dos enfoques):

##### Si asumimos que la eficiencia de coste actual continúa:

EAC = BAC / CPI = 100,000 / 0.857... ≈ $116,666.67 → ETC = EAC − AC = 116,666.67 − 35,000 = $81,666.67.

##### Si asumimos que el trabajo futuro se realizará al ritmo planificado (sin repetir la ineficiencia):

EAC = AC + (BAC − EV) = 35,000 + (100,000 − 30,000) = 35,000 + 70,000 = $105,000 → ETC = 105,000 − 35,000 = $70,000.

##### Interpretación: según el supuesto, el proyecto terminaría gastando entre $105k y $116.7k (peor que el BAC). 

Hay que decidir cuál escenario es más realista y actuar (recortar alcance, asignar más recursos, mejorar productividad).


### Medir EV

##### Definir cómo se calcula “% completado” es crítico

Métodos: 

0/100: paquete = 0% hasta completado → 100% cuando termine (simple, conservador).

50/50: 50% al inicio, 50% al cierre (útil para paquetes repetitivos).

Porcentaje real de avance: estimación del equipo (mejor si es objetiva).

Milestones: asignar valor a hitos (útil para entregables claramente definibles).

Unidades entregadas: si hay unidades repetibles (p. ej. fabricación).

Regla: elige un método consistente, documentado y revisable.


### Implementación práctica y control

1. Fijar línea base (baseline): BAC y cronograma aprobados.

2. Definir método de %complete por tipo de paquete de trabajo.

3. Recolectar AC desde contabilidad (coste real por periodo).

4. Calcular PV, EV, AC periódicamente (ej.: semanal/quincenal).

5. Generar métricas (SV, CV, SPI, CPI) y forecast (EAC, ETC).

6. Analizar causas (¿reestimación pobre? ¿bloqueos? ¿calidad?).

7. Acción / Control de cambios: proponer medidas (crashing, fast-tracking, recorte de scope, reservas).

8. Reportar a sponsor con interpretación y recomendación (no solo números).


### Visualizaciones

#### Curvas S (PV, EV, AC a lo largo del tiempo): muestran desviaciones visualmente.

#### Gráficos de SPI/CPI en el tiempo para detectar tendencias.

#### Tabla de forecast (EAC por diferentes supuestos) para el comité de cambios.


### Ventajas de EVM

##### Integra tiempo, alcance y coste en métricas comparables.

##### Permite prognóstico temprano (EAC/ETC).

##### Facilita decisiones basadas en datos y priorización de acciones correctivas.


### Limitaciones y precauciones

##### Depende fuertemente de la calidad del %complete y de cómo se registran los costes.

##### Puede dar señales tardías si las mediciones no son periódicas y fiables.

##### No sustituye el análisis cualitativo (causas raíz, riesgos, calidad).

##### Requiere disciplina en actualización de línea base y en control de cambios.


### Buenas prácticas

##### Establecer reglas claras para medición de EV (DoR/DoD para paquetes).

##### Automatizar la captura de AC cuando sea posible (integración contable).

##### Revisar EVM al menos semanal o quincenalmente en proyectos de ejecución activa.

##### Mostrar escenarios alternativos de EAC y explicar supuestos.

##### Usar EVM junto con métricas ágiles/operacionales si trabajas híbrido.


### Rs fórmulas

PV = presupuesto planificado hasta la fecha
EV = presupuesto del trabajo realmente realizado
AC = coste real hasta la fecha
SV = EV − PV
CV = EV − AC
SPI = EV / PV
CPI = EV / AC
EAC, ETC según fórmula seleccionada




# 2. Inicio del proyecto: Acta / Business Case

Objetivos: redactar acta de constitución y objetivos SMART.
Contenidos:

Acta de constitución, sponsors, objetivos SMART, criterios de éxito

Alcance preliminar & supuestos
Actividades:

Escribir Acta de Constitución de un proyecto supuesto
Entregable: Acta de constitución (1–2 páginas)


# 3. Alcance y WBS

Objetivos: descomponer el proyecto en entregables y tareas.
Contenidos:

Técnicas de descomposición, WBS, criterios de aceptación
Actividades:

Crear WBS de 3 niveles para el proyecto
Entregable: WBS + diccionario de WBS (definición de paquetes de trabajo)


# 4. Cronograma y estimaciones

Objetivos: estimar duración, secuenciar tareas, crear diagrama de Gantt y/o backlog
Contenidos:

Estimación (top-down, bottom-up, PERT), dependencias, ruta crítica

Sprints y cadence si es ágil
Actividades:

Estimar tareas y hacer cronograma (Gantt) / plan de sprints
Entregable: Cronograma con hitos y ruta crítica o Sprint plan (para ágil)


# 5. Presupuesto y recursos

Objetivos: construir estimación de costos, recursos humanos y materiales.
Contenidos:

Tipos de costos (directos/indirectos), reservas, asignación de recursos, nivelación
Actividades:

Crear presupuesto básico y plantilla de asignación de recursos
Entregable: Presupuesto y tabla de recursos



# 6. Gestión de riesgos

Objetivos: identificar, analizar y planificar respuestas a riesgos.
Contenidos:

Registro de riesgos, probabilidad/impacto, matriz de riesgo, respuestas (evitar, mitigar, transferir, aceptar)
Actividades:

Taller: identificar 10 riesgos y proponer respuestas
Entregable: Registro de riesgos con plan de mitigación y propietarios



# 7. Gestión de la calidad y control

Objetivos: definir criterios de calidad y mecanismos de control.
Contenidos:

Plan de calidad, controles, métricas, pruebas de aceptación
Actividades:

Diseñar checklist de calidad y un KPI de calidad
Entregable: Plan de calidad + checklist



# 8. Gestión de comunicaciones y stakeholders

Objetivos: diseñar plan de comunicaciones y estrategia de engagement.
Contenidos:

Canales, frecuencia, reportes, RACI, reuniones, escalamiento
Actividades:

Crear RACI y plan de comunicación (quién, qué, cuándo, cómo)
Entregable: Matriz RACI + Plan de comunicaciones



# 9. Gestión de compras y contratos (si aplica)

Objetivos: entender compras, proveedores y contratos.
Contenidos:

Tipos de contrato, criterios de selección, SLAs
Actividades:

Simulación: seleccionar proveedor y definir SLA
Entregable: Hoja de decisión de compra + SLA simple



# 10. Control de cambios y seguimiento

Objetivos: establecer mecanismos de control de cambios y métricas de seguimiento.
Contenidos:

Línea base, solicitud de cambio (CR), comité de control de cambios, KPIs (avance, variación coste/tiempo)
Actividades:

Diseñar flujo de solicitud de cambio y tablero de métricas
Entregable: Proceso de control de cambios y tablero KPI (ej.: EV, PV, AC si se desea)



# 11. Ejecución: gestión del equipo y liderazgo

Objetivos: prácticas de dirección, resolución de conflictos y motivación.
Contenidos:

Estilos de liderazgo, reuniones efectivas, técnicas de seguimiento, retrospective
Actividades:

Role-play: reunión de seguimiento / resolución de conflicto
Entregable: Plan de gestión del equipo y acta de reunión ejemplo



# 12. Cierre y lecciones aprendidas (capstone)

Objetivos: cerrar el proyecto formalmente y documentar lecciones aprendidas.
Contenidos:

Entregables finales, transferencia, cierre financiero, lecciones aprendidas
Actividades:

Preparar informe final y presentación ejecutiva (10–15 min)
Entregable: Informe final + presentación de cierre



# Proj prác

A lo largo del curso desarrolla un proyecto real o simulado (ej.: lanzar una landing + MVP, organizar un evento, implementar una mejora operativa). El entregable final debe incluir:

Acta de Constitución

WBS + Cronograma

Presupuesto

RACI + Plan de Comunicación

Registro de Riesgos

Control de Cambios

Informe final + presentación

Criterio de evaluación: completitud, coherencia entre alcance/tiempo/costo, calidad de los riesgos/respuestas, claridad de comunicación y entregable final.



# Ejercicios

Revisiones semanales: presentaciones cortas (5–10 min).

Peer review: intercambiar Planes de Proyecto con otro estudiante y dar feedback.

Simulaciones: crisis de proyecto (pérdida de recursos, cambio de alcance) y practicar control de cambios.

Practicar con herramientas reales: crear el Gantt en un software (ver más abajo).



# Herramientas

Herramientas: Trello/Asana/ClickUp (ligeras), Jira (ágil), MS Project / GanttProject (Gantt), Excel/Google Sheets (presupuestos, WBS), Miro/Whimsical (mapas mentales/WBS), Slack/Teams (comunicación).

Plantillas a preparar: Acta de Constitución, WBS template, Cronograma Gantt, Registro de Riesgos, Formato de Solicitud de Cambio, RACI matrix, Plantilla de informe final



# Metodologías y cuándo usarlas

##### Waterfall: proyectos con requisitos estables, entregables definidos (construcción, obras).

##### Agile / Scrum: entornos cambiantes, entrega incremental (productos digitales, software).

##### Híbrido: planificación inicial en fases, ejecución ágil en desarrollo.

Incluye recomendaciones para adaptar artefactos: por ejemplo, sustituir cronograma riguroso por backlog y sprints si trabajas ágil.
















# Empresarial




# Ideas



# Brainstorm 

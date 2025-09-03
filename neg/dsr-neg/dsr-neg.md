# Desarrollo de Negocios

##### Generar pipeline, cerrar alianzas de impacto y diseñar estrategias comerciales repetibles

Adaptable a roles B2B/B2C, startup o empresa consolidada


## Objetivos

##### 1. Identificar y priorizar oportunidades comerciales repetibles.

##### 2. Diseñar y ejecutar procesos de prospección, calificación y cierre.

##### 3. Crear y negociar alianzas y partnerships estratégicos.

##### 4. Construir playbooks, métricas y forecasts accionables.

##### 5. Comunicar propuestas de valor y construir relaciones a largo plazo.


## Pipeline/Canal de venta

Representación ordenada del proceso por el que pasan las oportunidades comerciales
 
Desde el primer contacto hasta el cierre (venta o pérdida).

Es a la vez registro (lista de deals/cuentas en progreso) y herramienta de gestión para priorizar esfuerzo, forecastear ingresos y detectar cuellos de botella


### Etapas

1. Lead / Prospect — contacto inicial (inbound o outbound).

2. MQL (Marketing Qualified Lead) — cumple criterios básicos de interés.

3. SQL (Sales Qualified Lead) — calificado por ventas; listo para discovery.

4. Discovery / Demo — conversación profunda; entendimiento del problema.

5. Opportunity / Proposal — propuesta comercial enviada (SOW, cotización).

6. Negotiation — condiciones, precio, legal.

7. Closed — Won / Lost — resultado final.

En startups tech suelen añadirse etapas técnicas: PoC / Pilot, Integration, Onboarding.


### Cada fila del pipeline

1. Nombre cuenta / contacto principal

2. Valor potencial (ACV / ARR / TCV)

3. Fecha de cierre esperada

4. Etapa actual

5. Probabilidad estimada (o usar tasa histórica por etapa)

6. Owner (responsable)

7. Próxima acción / next step

8. Fuente / canal (outbound, inbound, partner)

9. Notes / blockers (compliance, budget, timeline)


### Métricas clave y cálculos

1. Pipeline value (valor del pipeline)
Suma de los valores potenciales de todas las oportunidades.
Ejemplo: tres oportunidades de $30,000, $20,000 y $50,000 → pipeline = 30,000 + 20,000 + 50,000 = 100,000.

2. Expected value (valor esperado / weighted pipeline)
Suma de (valor × probabilidad de cierre) por oportunidad.
Ejemplo: si las mismas 3 oportunidades tienen probabilidades 0.4, 0.2, 0.6:

30,000 × 0.4 = 12,000

20,000 × 0.2 = 4,000

50,000 × 0.6 = 30,000
Valor esperado = 12,000 + 4,000 + 30,000 = 46,000.

3. Win rate (tasa de cierre)
Win rate = deals ganados / deals cerrados (ganados + perdidos).
Ejemplo: si en un periodo hubo 12 deals cerrados y 3 ganados: 

win rate = 3 / 12 = 0.25 → 25%.

4. Pipeline coverage (cobertura de cuota)
Cobertura = pipeline value / quota (o target).
Ejemplo: cuota mensual = 100,000; pipeline = 300,000.

cobertura = 300,000 / 100,000 = 3 → 3× (regla: muchas empresas usan 3x–4x como objetivo).

5. Velocity (velocidad del pipeline)
Medida del tiempo medio entre entrada a pipeline y cierre. Se calcula promediando días por deal; útil para estimar cuándo convertirás pipeline en cash

6. Conversion rates por etapa
Porcentaje que avanza de una etapa a la siguiente. Ejemplo paso a paso:

200 leads → 40 meetings: 40 / 200 = 0.2 → 20%

40 meetings → 10 opportunities: 10 / 40 = 0.25 → 25%

10 opportunities → 3 wins: 3 / 10 = 0.3 → 30%
Estos porcentajes te permiten modelar cuántos leads necesitas para alcanzar X ventas 


### Forecasting (predecir ingresos)

1. Método ponderado (weighted): sumar valores esperados (valor × probabilidad). Es simple y rápido.

2. Método de tasa histórica: aplicar tasas de conversión históricas por etapa sobre el pipeline actual.

3. Método de commit/forecast: directiva (rep) marca deals "commit" que considera prácticamente seguros; se combina con weighted para el resto.
Mejor práctica: usar más de un método y comparar (consistencia ≠ verdad, pero te da confianza).


### Prácticas para pipeline en startups

Mantén higiene: eliminar duplicados, actualizar etapas y next steps semanalmente.

Define criterios claros para cada etapa (qué condiciones hacen que un deal progrese).

Usa lead scoring para priorizar: puntos por tamaño de la cuenta, fit técnico, presupuesto confirmado, timeline.

Registra blockers (procurement, security, integrations) y tiempo en cada etapa para detectar cuellos.

Automatiza recordatorios y tareas en el CRM (no perder follow-ups).

Instrumenta métricas técnicas si aplica (TTFV, PoC status, API usage) para deals B2B tech.

Revisa pipeline en reuniones de 1:1 y weekly forecast reviews — no para microgestionar, sino para remover impedimentos


### Errores

1. Confiar en pipeline inflado (lead sin validación como si fuera oportunidad).

2. No actualizar la probabilidad o fecha de cierre con nueva evidencia.

3. Olvidar el componente técnico: PoC fallido = riesgo alto; medir señales técnicas.

4. No segmentar por canal (inbound vs outbound vs partner), que tienen conversiones distintas


### Mejorar pipeline

Aumentar cantidad de leads cualificados (más outreach o marketing dirigido).

Mejorar calidad de leads (mejor ICP, targeting).

Reducir tiempo en etapa (acortar sales cycle con playbooks y plantillas de SOW).

Aumentar tasa de conversión con mejores discovery y PoC lean.

Subir average deal size mediante packaging, cross-sell o pricing


### Herramientas (mínimas)

CRM: Pipedrive, HubSpot, Salesforce (según escala).

Sheet / BI: Google Sheets + Metabase/Looker para dashboards.

Outreach: LinkedIn Sales Navigator, herramientas de secuencias (Mailshake, Outreach).

Billing/usage: Stripe/Chargebee (si vendés API/usage-based).


## Mini plantilla (campos minimo)

Account / Deal name
Valor (ACV/ARR)
Etapa
Probabilidad (%)
Fecha cierre estimada
Owner
Next step (fecha)
Fuente
Blockers / notas


### Ej de Pipeline: muestra cómo usar un pipeline para gestionar oportunidades, calcular forecast y priorizar esfuerzos.

| Cliente / Deal    | Valor (USD) | Etapa         | Prob. (%) | Valor Esperado (USD) | Fecha Estimada | Owner | Próximo Paso   |
| ----------------- | ----------- | ------------- | --------- | -------------------- | -------------- | ----- | -------------- |
| Acme Corp         | 15,000      | Discovery     | 20%       | 3,000                | 15/09/2025     | Ana   | Demo técnica   |
| Globex Inc.       | 50,000      | Proposal      | 40%       | 20,000               | 30/09/2025     | Juan  | Revisión legal |
| Initech           | 10,000      | Negotiation   | 70%       | 7,000                | 10/09/2025     | Sofía | Ajustar precio |
| Umbrella Ltd.     | 25,000      | PoC en curso  | 50%       | 12,500               | 25/09/2025     | Ana   | Reunión CTO    |
| Wayne Enterprises | 40,000      | Closed – Won  | 100%      | 40,000               | 01/09/2025     | Juan  | Onboarding     |
| Cyberdyne Systems | 20,000      | Closed – Lost | 0%        | 0                    | 20/08/2025     | Sofía | —              |


#### Métricas derivadas

1. Pipeline total (valor bruto):
15,000 + 50,000 + 10,000 + 25,000 = 100,000 USD

2. Valor esperado (ponderado):
3,000 + 20,000 + 7,000 + 12,500 + 40,000 = 82,500 USD

3. Win rate (último mes):
Deals cerrados: 2 (1 Won, 1 Lost).
Win rate = 1 / 2 = 50%

4. Pipeline coverage (si cuota del mes = 50,000 USD):
100,000 / 50,000 = 2x cobertura

## Alianzas de impacto/impact partnerships

Colaboraciones estratégicas que generan valor no solo económico, sino también social, ambiental o de innovación.

No son alianzas transaccionales o solo de ventas, sino acuerdos que amplifican la misión y escalan el alcance de la organización, en especial cuando hablamos de startups tech o empresas en etapa de crecimiento.


### Características de una alianza de impacto

1. Objetivo compartido → ambas partes buscan un resultado más grande que el interés inmediato (ej: transformar un mercado, reducir brecha digital, innovación en salud, etc.).

2. Complementariedad → cada socio aporta algo que el otro no tiene (tecnología, mercado, reputación, talento, capital, canales).

3. Escalabilidad → la alianza permite llegar a más clientes, regiones o segmentos que solos sería difícil.

4. Sostenibilidad → generan un beneficio duradero, no solo una campaña puntual.

5. Impacto medible → se establecen KPIs no solo financieros (ventas, revenue) sino también de impacto (usuarios beneficiados, reducción de CO₂, inclusión, etc.).


### Ej. Alienzas de impacto

Startup de SaaS de educación + ONG global
→ La ONG usa la plataforma para capacitar a docentes en países emergentes, y la startup gana escala, reputación y validación.

HealthTech + Hospital universitario
→ El hospital prueba la solución en un piloto; la startup obtiene data clínica y credibilidad, mientras el hospital mejora sus servicios.

FinTech + Banco tradicional
→ El banco ofrece la app de la fintech a su base de clientes; la fintech accede a distribución masiva y el banco innova sin desarrollar desde cero.


## Estrategia comercial repetible

Proceso documentado y medible que permite a una empresa —especialmente una startup— generar ingresos previsibles y escalar

“Repetible” significa que cualquiera con la formación y las herramientas adecuadas puede replicar el mismo flujo (desde la prospección hasta el cierre y la entrega) y obtener resultados similares bajo condiciones parecidas.

Qué, porqué y cómo diseñarla: 

Prácticas, métricas y checklist de implementación


### 1. Componentes esenciales de una estrategia repetible

1. ICP claro (Ideal Customer Profile) — quiénes son los clientes objetivo (industria, tamaño, tech stack, rol comprador).

2. Propuesta de valor validada — mensajes, pruebas y casos de uso que realmente resuenan (por segmento).

3. Canales definidos — listas de canales que funcionan (outbound, inbound, partners, marketplace, eventos) con playbooks para cada uno.

4. Proceso y pipeline estandarizados — etapas, criterios de avance y plantillas (discovery, proposal, PoC, onboarding).

5. Scripts y assets — e-mails, cadencias, scripts de llamada, demo templates, one-pagers, casos de éxito.

6. Herramientas & data — CRM configurado, cadencias automáticas, dashboards, templates financieros y de PoC.

7. Métricas y SLAs — KPIs por etapa y objetivos operativos (conversiones, tiempos, CAC, LTV).

8. Playbooks operativos — guías paso a paso para SDRs, AEs, SEs y CS.

9. Formación y onboarding — entrenamiento replicable (30/60/90), role-play, shadowing.

10. Feedback loop — revisión continua (post-mortems de deals), experiments A/B y mejora iterativa.


### 2. Diseño estrategia comercial repetible (mínimo viable → escalar)

#### Paso A — Diagnóstico y hipótesis iniciales

Reúne evidencia: clientes actuales, wins/losses, métricas de marketing.

Define hipótesis: “Si apuntamos a X ICP con mensaje Y y secuencia Z, esperamos conversion del 8% → $T ACV.”


#### Paso B - Definir el funnel y las etapas

Mapea desde lead → MQL → SQL → Opportunity → PoC → Closed/Won.

Define criterios objetivos para mover un deal entre etapas (ej.: presupuesto confirmado, sponsor, timeline).


#### Paso C — Diseñar playbooks por canal

Para cada canal escribe: objetivo, lista target, cadencia exacta (mensaje 1–n, tiempos), KPIs de canal, enlace a assets.

Incluye scripts y plantillas listas para copiar/pegar.


#### Paso D — Instrumentación y datos

Configura CRM con campos obligatorios (ICP, canal, ACV, next step, prob.).

Crea dashboard con conversiones por etapa, tiempo medio en etapa, pipeline value y expected value.


#### Paso E — Piloto operativo (build-measure-learn)

Ejecuta piloto pequeño (p. ej. 50 cuentas outbound o 1 partner pilot) durante 2–4 semanas.

Mide: meetings, PoC starts, PoC→Paid, CAC estimado.

Ajusta mensaje, canal o proceso según resultados.


#### Paso F — Documentación y entrenamiento

Documenta el playbook (one-page + checklist + assets).

Entrena 1 persona usando el playbook: shadowing + role plays + revisión de 1:1.

Mide su performance vs baseline.


#### Paso G — Escalar con gobernanza

Define cuota/targets, reglas de asignación de leads, SLAs (lead response time).

Automatiza tareas repetitivas (sequences, reminders).

Revisa cadencia de refinamiento: weekly pipeline review, monthly playbook retro.


### 3. Métricas clave para saber si la estrategia es repetible

1. Conversion rate por etapa (outreach→meeting, meeting→opportunity, opportunity→win).

2. Time in stage (días promedio para avanzar).

3. CAC por canal y LTV → LTV:CAC.

4. Pipeline coverage (pipeline value / target).

5. Win rate (deals cerrados / deals decididos).

6. Ramp time de un nuevo rep (días hasta productividad).

7. Reproducibility score (por ejemplo: % de reps que alcanzan target con playbook en 90 días).


### 4. Tácticas y elementos prácticos que aumentan repetibilidad

1. Scripts A/B testables: no improvises; prueba variantes de subject/lead, mide reply rate.

2. Templates de PoC con alcance y success metrics estándar para acelerar acuerdos técnicos.

3. Checklist “movimiento de etapa” obligatoria — evita pipeline inflado.

4. Playbook de objeciones: respuestas concretas a 8 objeciones comunes.

5. Cadencia de comunicación clara: frecuencia máxima/minima de follow-up.

6. Onboarding obligatorio en CRM: datos completos antes de que un deal entre en Opportunity.

7. RACI en deals complejos: quién decide, quién implementa, quién firma. 


### 5. Ejemplo resumido (mini-playbook para outbound B2B tech)

1. Target: ICP = fintechs con 10–50 devs, stack AWS.

2. Cadencia (6 pasos):

Día 0: Email corto (value + 15s pitch).

Día 2: LinkedIn connection + note.

Día 5: Follow-up email con case study.

Día 9: Call attempt + voicemail script.

Día 14: Final email con offer de PoC 30 días gratis.

Día 21: Break / Re-engage in 90 days.

3. Qualification (must-have): budget confirmed, timeline < 6 meses, technical sponsor.

4. PoC template: 30d, success = 3k API calls + one production-ready integration.

5. KPIs: reply rate ≥ 8%, meeting rate ≥ 3%, PoC→paid ≥ 30%.

6. Next steps: if meeting booked → SE demo within 7 días; if no meeting after step 5 → mark nurture.


### 6. Errores comunes y cómo evitarlos

Error: No definir criterios claros para avanzar etapas → Arreglo: checklist obligatorio por etapa.

Error: Pipeline inflado por leads no validados → Arreglo: “fast no” policy: descartar leads que no cumplen must-have en 2 semanas.

Error: No medir TTFV o signals técnicos → Arreglo: instrumentar métricas de producto en PoCs.

Error: No documentar playbooks → Arreglo: crear repositorio central (con versióning) y revisar trimestralmente.


### 7. Checklist rápido para lanzar una estrategia repetible (lista ejecutable)

Definir 1 ICP prioritario.

Crear 1 pitch que haya pasado 10 entrevistas y tiene evidencia.

Definir funnel y criterios de avance.

Construir una secuencia outbound y assets (email, case, demo).

Configurar CRM con campos y automatizaciones mínimas.

Ejecutar piloto con 50 cuentas / 1 partner.

Medir conversiones y ajustar en 2 semanas.

Documentar playbook y entrenar 1 persona.

Fijar gobernanza (revisión semanal + owner del playbook).


### Ej. Estrategia comercial repetible

Aplicada a una startup B2B SaaS que vende una herramienta de gestión de proyectos.

1. ICP (Perfil de Cliente Ideal)

Empresas de 20 a 100 empleados.
Sectores: agencias de marketing y consultoras de IT.
Decisor: Head of Operations / Project Manager.
Dolor: desorganización de proyectos, retrasos en entregas.

2. Propuesta de Valor

“Ayudamos a reducir un 30% el tiempo perdido en coordinación de proyectos mediante una plataforma intuitiva de gestión colaborativa.”

3. Canal de adquisición principal

Outbound B2B (emails + LinkedIn).
Secundario: inbound con contenidos de productividad.

4. Pipeline estandarizado

1. Prospección → lista de 200 empresas target.
2. Primer contacto → email con problema común + valor (ej.: “¿Tus equipos pierden tiempo coordinando tareas en Excel?”).
3. Reunión / Demo → mostrar plataforma con ejemplos reales de su sector.
4. PoC (prueba gratuita de 14 días) → guiar con onboarding básico.
5. Cierre de contrato → plan mensual por usuario.

5. Secuencia de comunicación repetible (Outbound)

Día 1: Email breve con propuesta de valor.
Día 3: Conexión en LinkedIn + mensaje de interés.
Día 6: Follow-up con caso de éxito (“Agencia X redujo un 25% los retrasos”).
Día 10: Llamada breve (script preparado).
Día 14: Último email con invitación a prueba gratuita.

6. KPIs para medir repetibilidad

Tasa de apertura de email: ≥ 40%.
Tasa de respuesta positiva: ≥ 8%.
Reuniones agendadas: ≥ 3% de la base contactada.
Conversión demo → PoC: 40%.
Conversión PoC → pago: 25%.

7. Ejemplo de ejecución

Se contactan 200 empresas target/mes.
~80 abren el mail (40%).
~16 responden con interés (8%).
~6 aceptan reunión/demo (3%).
~2–3 se convierten en clientes de pago.

Resultado: 2–3 clientes nuevos por mes de manera predecible.


Lo clave es que todo está documentado y medible:

ICP → check.
Mensaje → estándar.
Canal → claro.
Proceso → igual para cada prospecto.
Métricas → permiten saber si funciona y repetirlo.


## B2B/B2C

Diferencias clave, implicaciones (producto, ventas, marketing, pricing, métricas), para aplicar cada enfoque

##### B2B (Business-to-Business): la empresa vende a otras empresas (productos/servicios que usan equipos, procesos o sistemas corporativos).

##### B2C (Business-to-Consumer): la empresa vende directamente a consumidores individuales


### Diferencias B2B/B2C

1. Cliente y decisión de compra

B2B: comprador = equipo, comité o rol (CTO, Head Ops, procurement). 
##### Decisión racional, basada en ROI, impacto en procesos y cumplimiento.

B2C: comprador = individuo.
##### Decisiones más emocionales/impulsivas y basadas en usabilidad, precio y experiencia.

2. Ciclo de ventas

##### B2B: largo (semanas-meses o más), múltiples reuniones, demos, PoC, negociación contractual.

##### B2C: corto (minutos-días), compra directa o registro self-service.

3. Modelo de producto / experiencia

##### B2B: configuración, integraciones, seguridad, SLAs, onboarding dirigido.
##### B2C: experiencia simple, onboarding self-serve, enfoque en UX y retención.

4. Pricing

##### B2B: contratos, precios por seat/usuario, por uso, planes enterprise, facturación recurrente anual.
##### B2C: precios unitarios, suscripción mensual, freemium, transaccional o ads-supported.

5. Canales de adquisición

##### B2B: ventas directas, account-based marketing, LinkedIn, eventos sectoriales, partnerships.
##### B2C: marketing masivo: redes sociales, SEO, ASO, performance ads, retail.

6. Soporte y operaciones

##### B2B: soporte dedicado, onboarding, Customer Success.
##### B2C: soporte escalable (chatbots, FAQs), enfoque en automatización.

7. Métricas clave

##### B2B: ARR/MRR, ACV, CAC por cuenta, LTV, sales cycle, churn logo, expansion revenue.
##### B2C: CAC por usuario, ARPU, churn rate, DAU/MAU, retención por cohortes, conversión funnel


### Pros y contras B2B y B2C

B2B
Valor por cliente alto, contratos más estables.
Ciclos largos, mayores costes de venta y dependencia de pocos clientes.

B2C
Escalabilidad y crecimiento rápido si el producto “pega”.
− Mucha competencia, requiere gran volumen y marketing continuo.


### Ej Empresas B2B y B2C

B2B: Salesforce, Slack, Datadog, HubSpot.
B2C: Netflix, Spotify, Glovo, Instagram.
Híbridos: Uber (B2C riders + B2B corporate), Stripe (developer-centric B2B pero con productos que llegan a empresas de todo tamaño).


### Estrategia

Quién toma la decisión? → adapta el mensaje.
¿Necesitás pruebas técnicas/PoC? → diseño PoC + SEs.
¿Tu producto necesita integración? → prioridades en DX (developer experience).
¿Tu CAC será alto o bajo? → decide si necesitas inversión para escalar.
¿Buscas rápido crecimiento o contratos grandes y estables? → B2C vs B2B.


### Elección 

##### Elige B2B si tu producto resuelve procesos empresariales, tiene altos beneficios unitarios y necesita integración/security.

##### Elige B2C si tu producto tiene atractivo masivo, UX simple y se beneficia del crecimiento por volumen / network effects.

##### Considera modelo híbrido si puedes servir a ambos mercados con líneas de producto separadas o go-to-market distinto.


# Preparación/kickoff

Definir objetivo personal/empresa (crecimiento de ingresos, partnerships, canales).

One-pager con metas SMART (KPI objetivo: % de crecimiento, ARR, número de alianzas).


## Fundamentos para definir objetivos

Definir objetivos que realmente impulsen el desarrollo de negocio


### 1. Principios clave (qué debe cumplir un buen objetivo)

1. Alineado con la estrategia de la empresa (misión, métricas financieras, roadmap de producto).

2. Específico y medible: sin ambigüedad sobre qué se mide y cómo.

3. Temporal: con plazo claro (semanal, mensual, trimestral).

4. Responsable: owner único y claro.

5. Accionable: debe poder traducirse en tareas/experimentos concretos.

6. Realista + ambicioso: mix de objetivos “committed” (realistas) y “stretch” (estiradores).

7. Orientado a impacto: mide resultados (lagging) y señales tempranas (leading).


### 2. Métodos y marcos útiles

1. SMART (Specific, Measurable, Achievable, Relevant, Time-bound).

2. OKR (Objectives & Key Results): Objetivo cualitativo + 2–5 KRs cuantitativos.

3. KPIs / Leading vs Lagging: define indicadores tempranos (reuniones, demo→PoC) y tardíos (MRR, ARR, revenue).

4. Prioritización: usa ICE / RICE para elegir iniciativas (Impact × Confidence × Effort / Reach).


### 3. Qué medir en Desarrollo de Negocios (lista priorizada)

1. Revenue & growth: MRR, ARR, ACV, TCV. (lagging)

2. Pipeline & funnel: Pipeline value, expected value (weighted), pipeline coverage.

3. Conversiones por etapa: outreach→meeting, meeting→PoC, PoC→paid.

4. Ciclo de venta: días desde lead→closed.

5. Costes: CAC por canal, CAC payback.

6. Calidad de ingresos: churn logo, expansion revenue, net retention.

7. Partners: nº partners activos, revenue por partner, deals co-sell.

8. Señales técnicas (tech-startup): TTFV, PoC success rate, API usage.

9. Siempre define una métrica principal (north star) y 2–3 métricas de apoyo


### 4. Estructura práctica de un objetivo

| Campo                  | Ejemplo                                                                 |
| ---------------------- | ----------------------------------------------------------------------- |
| **Objetivo (O)**       | Aumentar el MRR recurrente de la línea X                                |
| **Key Result 1**       | +\$15,000 MRR neto (nuevo) en Q3                                        |
| **Key Result 2**       | Ejecutar 3 PoCs y convertir 1 → cliente pago (PoC→paid ≥ 30%)           |
| **Key Result 3**       | Incrementar pipeline qualified en \$120k (expected value)               |
| **Plazo**              | Q3 (1 Jul — 30 Sep)                                                     |
| **Owner**              | Head BD (María)                                                         |
| **Leading indicators** | 60 outreach semanales; 12 demos acordadas                               |
| **Recursos**           | 2 SDRs, 1 SE part-time, budget \$3k para eventos                        |
| **Riesgos**            | Procurement delays en clientes enterprise; dependencia de integración X |
| **Mitigación**         | Pre-build demo + playbook procurement; ofrecer pilot limitado           |


### 5. Ejemplos rápidos de objetivos (BD — startup tech)

1. Ejemplo A — Early-stage / Pre-seed

Objetivo: Validar canal outbound para vertical Y.
KR1: Agendar 20 discovery calls en 6 semanas.
KR2: Conseguir 3 PoCs con Mínimo Viable Agreement.
KR3: Registrar 1 cliente pago al terminar el piloto.

2. Ejemplo B — Seed / Growth

Objetivo: Generar pipeline que cubra 4× la cuota del Q.
KR1: Pipeline weighted ≥ $400k (quota = $100k).
KR2: PoC→paid ≥ 30% en clientes pilot.
KR3: Reducir CAC por canal X en 20%.

3. Ejemplo C — Enterprise / Scale

Objetivo: Establecer 3 partnerships estratégicos que aporten canal de ventas.
KR1: Firma de 2 MOUs con integradores antes del fin de trimestre.
KR2: +$200k ARR atribuible a partnerships en 6 meses.
KR3: Publicación de 1 case study conjunto y 1 webinar.


### 6. Convertir un objetivo en plan de acción

1. Desglosar KRs en iniciativas (ej.: KR “3 PoCs” → iniciativas: create PoC template; shortlist 10 cuentas; outreach a 50 cuentas; preparar SE kit).

2. Asignar owners y fechas para cada iniciativa.

3. Establecer cadence de seguimiento: daily standup (táctico), weekly pipeline review, monthly OKR review.

4. Instrumentar: tablero con métricas (Sheets/BI + CRM).

5. Medir señales tempranas y pivotar rápido si no aparecen.

6. Post-mortem al final del periodo: qué funcionó, qué no, hipótesis para el próximo ciclo.


### 7. Reglas prácticas y anti-errores

No mezclar outputs (ej.: número de demos) con outcomes (ej.: MRR). Mide ambos pero jerarquiza outcomes.

No fijar objetivos sin recursos asignados.

Evitar objetivos demasiado vagos (“mejorar ventas”); transforma en KRs cuantitativos.

Revisar objetivos con Finanzas/Producto para validar impactos y supuestos. 


### 8. Cadencia recomendada de revisión

Diario: blockers críticos (solo para deals calientes).

Semanal: revisión de pipeline y leading indicators.

Mensual: revisión de KRs y ajuste de tácticas.

Trimestral: recalibrar OKRs / objetivos (lecciones + re-priorización).


## Elementos a tener en cuenta para sobrevivir en el mercado

Métricas clave, acciones inmediatas (quick wins) y señales de alarma.


### 1. Producto que resuelve un problema real (Product-Market Fit)

Confirma que hay dolor real y que clientes pagan por la solución.

Haz entrevistas cualitativas + experimentos rápidos (landing pages, demos, pruebas).

Pregunta central: ¿Pagarían por esto hoy? Si la respuesta no es sí, rediseña el producto o el segmento.


### 2. Runway y control del efectivo

Calcula runway = efectivo disponible / burn mensual.

Objetivo mínimo sano: 6–12 meses de runway para iterar (depende de etapa).

Reduce burn urgente si runway < 6 meses: recortar gastos no esenciales, negociar plazos, temporary hiring freeze


### 3. Unidad económica sana (Unit economics)

Calcula CAC (Coste de Adquisición por Cliente) y LTV (Lifetime Value).

Regla práctica: LTV : CAC ≥ 3 : 1 idealmente; CAC payback < 12 meses (mejor < 6 en early-stage).

Si LTV << CAC, revisar pricing, retention o canales.


### 4. Pipeline y adquisición repetible

Define 1–2 canales que funcionen (outbound, partnerships, content, marketplaces) y repítelos.

Implementa un funnel claro: outreach → demo → PoC → pago.

Mide conversiones por etapa y coste por lead.


### 5. Retención y valor del cliente

Prioriza la retención (retaining customers es más barato que adquirir nuevos).

Define métricas de activation (TTFV), engagement y churn.

Diseña onboarding que entregue valor rápido.


### 6. Cash flow y modelo financiero básico

Presupuesto mensual con: ingresos proyectados, burn fijo, burn variable, CAPEX, runway.

Revisa forecast cada semana y ajusta decisiones de gasto a evidencia.


### 7. Equipo adecuado y roles críticos

Foco en hires clave: producto, ventas/BD, ingeniería mínima viable, finanzas/ops.

Mantén núcleo pequeño y con alta ejecución. Prioriza actitud y ownership.

Claridad de roles y un owner por objetivo.


### 8. Mercado y competencia

Conoce competidores directos y sustitutos.

Define tu propuesta diferencial (moat mínimo).

Vigila pricing competitivo y barreras de entrada


### 9. Pricing y monetización

Testea pricing temprano; experimenta con paquetes/tiered/usage-based.

Asegura que el precio cubre CAC y permite margen operativo


### 10. Operaciones y legal mínimo viable

Entidades legales, contratos básicos, términos de servicio, facturación.

Protege IP y datos si aplica (GDPR/SOC2 cuando lo pidan clientes enterprise).

No postergues lo básico legal que pueda bloquear ventas


### 11. Métricas y reporting simple

Dashboard mínimo: MRR/ARR, churn, CAC, LTV, runway, pipeline, conversiones por etapa.

Revisa semanalmente y toma decisiones basadas en datos.


### 12. Canales y partnerships estratégicos

Busca partners que den distribución o credibilidad (resellers, integradores, ONG, marketplaces).

Prioriza partnerships de bajo coste de activación y alta palanca


### 13. Cultura, comunicación y adaptabilidad

Cultura de experimentación y transparencia: documenta hipótesis, tests y resultados.

Toma decisiones rápido y corta lo que no funciona (fast no).


### 14. Financiamiento y estrategia de levantamiento

Planifica si vas a levantar: cuánto, cuándo y con qué hitos.

No levantes por levantar; busca capital que acelere tracción.


### Métricas clave

Runway (meses) = efectivo disponible / burn mensual.

MRR / ARR = ingreso recurrente.

CAC (total ventas+marketing / nuevos clientes en periodo).

LTV = ARPU * (1 / churn rate) * margen bruto aproximado.

LTV : CAC ratio.

Churn (logo / revenue).

Conversion rates: outreach→meeting, meeting→PoC, PoC→paid.

TTFV (time to first value) — cuánto tarda cliente en ver valor.


### Quick wins (acciones para semanas 0–6)

1. Validar 10 clientes con entrevistas y 3 ventas pequeñas (si es posible).

2. Montar un dashboard en Sheets con runway, MRR, CAC y pipeline.

3. Identificar y cortar 1 gasto no esencial que reduzca burn 10–20%.

4. Ejecutar 1 experimento de adquisición (50 cuentas outbound o campaña muy segmentada).

5. Crear plantilla de PoC/Proposal para acelerar ventas técnicas


### Señales de alarma (red flags)

Runway < 3 meses sin plan de recorte o ingresos inmediatos.

CAC > LTV o CAC payback >> 12 meses.

Pipeline vacío o sin oportunidades calificadas.

Churn > 5–7% mensual en SaaS early-stage (depende del mercado).

Falta de un owner para objetivos críticos (nadie responsable por ventas / producto).


### Prioridad práctica (qué hacer primero)

1. Asegurar runway inmediato (cortar gastos y maximizar ingresos rápidos).

2. Validar que clientes pagan por la propuesta (vender 3 clientes pequeños).

3. Documentar proceso repetible de adquisición → PoC → venta.

4. Instrumentar métricas básicas y revisar semanalmente.

5. Preparar plan de 3–6 meses (objetivos claros, hitos, recursos).


### Cash Flow

##### Movimiento neto de efectivo (entradas y salidas) en un periodo determinado.

##### Mide cuánto dinero líquido entra y sale de la caja/banco de la empresa

No confundir con ventas o beneficios contables

##### Es la variable que determina si la empresa puede pagar sueldos, proveedores, deuda y seguir operando.


#### Las 3 secciones del estado de flujo de caja

1. Actividades de Operación (Operating Cash Flow)
Efectivo generado (o consumido) por la actividad core del negocio: cobros de clientes, pagos a proveedores, nómina, impuestos

2. Actividades de Inversión (Investing Cash Flow)
Compras/ventas de activos a largo plazo: adquisición de maquinaria, inversiones, venta de activos, compra de software capitalizado.

3. Actividades de Financiamiento (Financing Cash Flow)
Entradas/salidas por préstamos, emisión/compra de acciones, pago de dividendos, amortización de deuda.


Net Cash Flow del periodo = Operating CF + Investing CF + Financing CF.

Posible caja final = caja inicial + Net Cash Flow.


#### Cash flow vs. beneficio (profit)

Profit (resultado contable) incorpora principios contables (acumulación, reconocimiento de ingresos, depreciaciones).

Cash flow muestra las entradas/salidas de efectivo reales.

##### Una empresa puede ser “rentable” contablemente pero quedarse sin efectivo (por cobros tardíos, gran inversión o alta deuda). Por eso el cash flow es crítico para la supervivencia.


#### Métodos para calcular el flujo de caja operativo

1. Método directo: suma cobros de clientes y resta pagos (proveedores, salarios, impuestos).

2. Método indirecto (más usado): parte del resultado neto (net income) y ajusta por:

Depreciación y amortización (no son salidas de efectivo)

± Cambios en capital de trabajo (cuentas por cobrar, inventario, cuentas por pagar)

± Otros items no monetarios


#### Ejemplo numérico

una empresa con estas cifras en un mes:

Ventas cobradas: 50.000 USD
Pagos a proveedores: 25.000 USD
Sueldos y cargas: 10.000 USD
Impuestos pagados: 2.000 USD
Depreciación (no cash): 1.000 USD
Compra de equipo (CapEx): 6.000 USD
Préstamo recibido: 20.000 USD
Amortización de deuda (pago principal): 3.000 USD 


Flujo de caja por actividad:

1. Operating Cash Flow (método directo):
Entradas operación = 50.000
Salidas operación = 25.000 + 10.000 + 2.000 = 37.000
→ Operating CF = 50.000 − 37.000 = 13.000 USD

2. Investing Cash Flow:
Compra de equipo = −6.000
→ Investing CF = −6.000 USD

3. Financing Cash Flow:
Préstamo recibido = +20.000
Pago principal deuda = −3.000
→ Financing CF = 20.000 − 3.000 = 17.000 USD

4. Net Cash Flow (periodo):
13.000 + (−6.000) + 17.000 = 24.000 USD

Si la caja inicial era 5.000 USD → Caja final = 5.000 + 24.000 = 29.000 USD

(Observación: la depreciación no afecta el cash flow directo porque ya no es una salida en efectivo; en el método indirecto se sumaría al net income.)


#### Free Cash Flow (FCF) — efectivo libre

##### Frecuencia para valorar cuánto efectivo real queda para deuda, dividendos o crecimiento:

##### FCF = Operating Cash Flow − CapEx (inversión en activos)

##### En el ejemplo: FCF = 13.000 − 6.000 = 7.000 USD.

##### Ese dinero es lo que queda para financiar deuda, pagar dividendos o reinvertir sin recurrir a financiamiento externo


#### Métricas prácticas relacionadas al cash flow

Burn rate (burn mensual): cuánto efectivo neto se consume por mes (si es negativo cash flow operativo o neto).

Runway (meses): cash disponible / burn mensual. (ej.: 60.000 USD / 10.000 USD = 6 meses)

Cash conversion cycle: tiempo entre pagar proveedores y cobrar clientes.

Operating cash margin: Operating CF / Ventas.


#### Gestionar el cash flow es critico

##### 1. Evita illiquidez que lleva a quiebra aun con beneficios contables.

##### 2. Permite planificar inversiones o negociaciones (reprogramar pagos, pedir préstamo).

##### 3. Mejora relaciones con proveedores y acceso a crédito.

##### 4. Es el foco en etapas early-stage: sobrevivir y ganar runway.


#### Prácticas para mejorar cash flow

Acelerar cobranzas: condiciones, facturación electrónica, descuentos por pronto pago.

Extender plazos con proveedores donde sea posible (negociar net30→net60).

Controlar CapEx: diferir inversiones no críticas.

Optimizar inventarios (menor capital inmovilizado).

Gestión de precios y churn (subir ARPU, reducir cancelaciones).

Forecasting frecuente: actualizar proyecciones de cash semanalmente.

Líneas de crédito como cushion (costo vs beneficio).

Modelar escenarios (pessimistic / base / optimistic) y plan de contingencia.


#### Señales de alerta relacionadas con cash flow

Caja disminuye consistentemente mes a mes y runway < 3 meses.

Pagos atrasados a proveedores o nómina en riesgo.

Dependencia continua de inyecciones de financiamiento para operar.

Ciclo de conversión de efectivo se alarga (clientes tardan mucho en pagar).



### Modelo Financiero Básico

##### Hoja de cálculo que traduce las `hipótesis del negocio: ventas`, costes, inversiones y financiación

`en proyecciones` (Estado de Resultados / P&L, Flujo de Caja y Balance) para analizar viabilidad, runway, necesidad de financiación y decisiones operativas.

Para analizar viabilidad, runway, necesidad de financiación y decisiones operativas.


Componentes, construccion y métricas:

#### 1. Componentes esenciales

1. Supuestos (inputs) — lo primero: variables que controlan el modelo. 
Ej.: precio por unidad, tasa de crecimiento de clientes, churn, CAC, coste variable por cliente, costes fijos, CapEx, impuestos, efectivo inicial.

2. Proyección de ingresos — drivers: unidades vendidas × precio; para SaaS suele ser clientes activos × precio mensual (MRR).

3. Costes
COGS / Coste variable por unidad/cliente.
Gastos operativos (Opex): marketing, ventas, R&D, sueldos, alquileres (fijos y escalables).

4. CapEx — inversiones en activos (equipamiento, licencias) que afectan caja hoy y depreciación después.

5. Capital de trabajo — cuentas por cobrar, inventario, cuentas por pagar (importante en empresas con ventas a crédito o inventario).

6. Financiación — préstamos, emisión de capital, amortizaciones e intereses.

7.  Estados financieros proyectados

P&L / Estado de resultados: ingresos − costes = EBITDA, luego depreciación/imp., resultado neto.
Cash flow statement: operaciones, inversión, financiación → caja final.
Balance sheet (opcional en básico): activos = pasivos + patrimonio.

8. Escenarios y sensibilidad — base / optimista / pesimista; análisis de sensibilidad sobre CAC, churn, precio, etc.

9. Outputs & KPIs — runway, burn rate, MRR/ARR, LTV, CAC, LTV:CAC, NPV / IRR (si aplica), payback.


#### 2. Construir Modelo Financiero Básico

Crea hoja `Assumptions` con todas las entradas (fáciles de cambiar).

Crea hoja `Revenue` donde defines drivers (ej. clientes nuevos por mes, churn, precio).

Crea hoja `Expenses`: fija y variable por mes/trimestre.

Genera `P&L mensual (o trimestral)`: Revenue − COGS − Opex = EBITDA → menos Depreciación/Interés → Net Income

Construye `Cash Flow`: parte del EBITDA, ajusta por cambios en capital de trabajo, CapEx y financiación.

Calcula `Caja final` mes a mes y runway.

Añade hojas para `scenarios y sensitivities` (gráficas que muestren impacto de variar CAC, churn, precio).

Verifica `conservación de caja` (caja final = caja inicial + net cash flows acumulados).


#### 3. Métricas clave a obtener

MRR / ARR (si modelo recurrente).
Burn rate (promedio mensual de cash out neto).
Runway = caja disponible / burn mensual.
CAC y LTV; LTV : CAC ratio.
Conversion rates del funnel si modelas adquisición por canal.
Expected value del pipeline (si lo integras).
NPV / IRR para proyectos de inversión.


#### 4. Ejemplo numérico básico (SaaS early-stage)

Precio mensual por cliente = 100 USD.
Nuevos clientes por mes = 10 (constante).
Churn mensual = 5% (0.05).
CAC por cliente = 200 USD (coste de adquisición pagado en el mes de adquisición).
Coste variable por cliente por mes = 10 USD.
Costes fijos mensuales = 5,000 USD.
Caja inicial = 50,000 USD.

```
Defino Active_t = Active_{t-1} * (1 − churn) + New_t, con Active_0 = 0.
```

Mes 1

Active₁ = 0*(1−0.05) + 10 = 0 + 10 = 10 clientes.
Revenue₁ = Active₁ × Precio = 10 × 100 = 1,000 USD.
CAC outflow₁ = New₁ × CAC = 10 × 200 = 2,000 USD.
Coste variable₁ = Active₁ × 10 = 10 × 10 = 100 USD.
Costes fijos = 5,000 USD.
Outflows totales₁ = 2,000 + 100 + 5,000 = 7,100 USD.
Net Cash Flow₁ = Revenue₁ − Outflows totales₁ = 1,000 − 7,100 = −6,100 USD.
Caja final₁ = Caja inicial − 6,100 = 50,000 − 6,100 = 43,900 USD.

Mes 2
Active₂ = Active₁*(1−0.05) + New₂ = 10*(0.95) + 10 = 9.5 + 10 = 19.5 clientes.
Revenue₂ = 19.5 × 100 = 1,950 USD.
CAC outflow₂ = 10 × 200 = 2,000 USD.
Coste variable₂ = 19.5 × 10 = 195 USD.
Outflows totales₂ = 2,000 + 195 + 5,000 = 7,195 USD.
Net Cash Flow₂ = 1,950 − 7,195 = −5,245 USD.
Caja final₂ = Caja final₁ − 5,245 = 43,900 − 5,245 = 38,655 USD.

Mes 3
Active₃ = 19.5*(0.95) + 10 = 18.525 + 10 = 28.525 clientes.
Revenue₃ = 28.525 × 100 = 2,852.50 USD.
CAC outflow₃ = 10 × 200 = 2,000 USD.
Coste variable₃ = 28.525 × 10 = 285.25 USD.
Outflows totales₃ = 2,000 + 285.25 + 5,000 = 7,285.25 USD.
Net Cash Flow₃ = 2,852.50 − 7,285.25 = −4,432.75 USD.
Caja final₃ = 38,655 − 4,432.75 = 34,222.25 USD.

En los primeros meses el CAC (gasto de adquisición) genera un burn alto que hace negativa la caja neta, aunque los clientes activos y revenue aumentan mes a mes.

Para estimar runway aproximada podrías dividir la caja actual por el burn mensual promedio

Por ejemplo, burn promedio de los tres meses = (6,100 + 5,245 + 4,432.75) / 3 = 5,259.25 USD (compruébalo en tu hoja).

Entonces runway ≈ 34,222.25 / 5,259.25 ≈ 6.51 meses.

(Esto es una aproximación; lo correcto es proyectar mes a mes hasta que la caja caiga a cero.)


#### 5. Prácticas al modelar

Empieza simple (3–5 inputs clave) y ve añadiendo detalle.
Modela mes a mes al inicio (12–24 meses) y luego anual para horizonte más largo (3–5 años).
Documenta supuestos: quién los aprobó y su justificación.
Haz escenarios (Base / Upside / Downside) y sensibilidad (vary CAC ±20%, churn ±2pp, price ±10%).
Valida contra datos históricos (si existen).
Mantén separadas las hojas: inputs, cálculos intermedios, outputs/dashboards.
No mezcles contabilidad con caja: muestra P&L y cashflow por separado para evitar confusiones.



# 1. Fundamentos y mapa del mercado

Ecosistema del sector, segmentación de clientes, ICP (Ideal Customer Profile), buyer personas.

Crear 3 ICP detallados (industria, tamaño, pain points, decision makers).

Mapa de mercado + 50 cuentas target (lista).


## Fundamentos en Desarrollo de Negocios

Fundamentos que sostienen el Desarrollo de Negocios

Conceptos, procesos, métricas, habilidades


### 1. Desarrollo de Negocios

##### Crea y captura oportunidades de valor para la empresa: cerrar ventas, abrir canales, construir alianzas, y diseñar modelos que aumenten ingresos sostenibles

##### No es sólo ventas; incluye estrategia, partnerships, experimentación y operaciones comerciales.


### 2. Objetivos centrales

Generar pipeline cualificado y repetible.
Probar y escalar canales de adquisición.
Crear alianzas que amplifiquen alcance o añadan capacidades.
Mejorar la unit economics (LTV/CAC).
Reducir incertidumbre mediante experimentos (PoC, pilots, A/B).


### 3. Componentes clave (qué hacer)

1. Definir ICP (Ideal Customer Profile): a quién vendes y por qué.

2. Propuesta de valor clara: problema + solución + proof points.

3. Canales: elegir 1–2 canales primarios (outbound, inbound, partners, marketplaces).

4. Funnel y pipeline: etapas claras, criterios objetivos y owners.

5. Playbooks y assets: scripts, cadencias, demo kits, plantillas de PoC y propuestas.

6. Instrumentación: CRM + dashboards con conversiones, pipeline y unit metrics.

7. Experimentación: hipótesis, métricas, duración y decisión (pivot/scale/stop).

8. Governance: roles, SLAs, revisiones periódicas y post-mortems.


### 4. Procesos críticos (cómo se hace)

Prospección: construir listas, outreach personalizado, lead scoring.

Calificación/Discovery: entender problema, presupuesto, timeline, sponsor.

Validación técnica/comercial: PoC o pilot para reducir riesgo.

Negociación y cierre: propuesta, pricing, términos.

Onboarding y CS: asegurar éxito temprano y expansion.

Retro / Learning loop: documentar wins/losses y ajustar playbooks.


### 5. Métricas imprescindibles

MRR/ARR, ACV (por cliente).
Pipeline value y Expected value (weighted).
Conversion rates por etapa (outreach→meeting→opportunity→win).
CAC (por canal) y LTV, LTV:CAC.
Sales cycle (duración media).
Churn (logo o revenue).
TTFV (time to first value) en productos tech.
Runway si la empresa es early-stage.


### 6. Habilidades y roles necesarios

Habilidades: comunicación, negociación, análisis de datos, pensamiento estratégico, gestión de proyectos, conocimiento del mercado.

Roles habituales: SDR (prospección), AE (cerrar), SE (soporte técnico en ventas), BD Manager (alianzas), Customer Success (retención/expansión).


### 7. Herramientas comunes (mínimo viable)

CRM: Pipedrive / HubSpot / Salesforce.
Outreach: LinkedIn Sales Navigator, herramientas de cadencia.
Analytics: Google Sheets, Metabase, Looker, Mixpanel.
Billing / Usage: Stripe, Chargebee.
Automation: Zapier / Make


### 8. Frameworks y métodos útiles

MEDDIC / BANT / CHAMP para calificación.
A/B testing y ciclo Build–Measure–Learn (Lean).
AHP / scoring para priorizar iniciativas.
OKR para alinear objetivos comerciales con la empresa.


### 9. Errores comunes a evitar

Pipeline inflado con leads no validados.
Confundir output (nº de demos) con outcome (MRR).
No documentar playbooks ni “how-to” para replicar.
Ignorar señales técnicas en ventas B2B tech (PoC failures).
No medir CAC por canal ni revisar unit economics.


### 10. Acción inmediata

Definir 1 ICP y 3 buyer personas.
Redactar 1 elevator pitch + 1 demo script.
Crear secuencia outbound de 4 pasos para 50 cuentas pilot.
Configurar pipeline en CRM con campos obligatorios y owner.
Montar dashboard con pipeline value, conversion rates y expected value.
Diseñar 1 template de PoC con métricas de éxito.


### 11. Cómo evolucionar (roadmap rápido)

1. Validá canales y mensaje (0–3 meses).

2. Documentá playbooks y automatizá tareas repetidas (3–6 meses).

3. Contratá y rampá reps con playbooks probados (6–12 meses).

4. Escalá con partners y marketplaces (12+ meses).


## Mapa del Mercado

##### Es una representación estructurada del ecosistema donde compite (o quiere competir) tu producto: clientes/segmentos, competidores directos e indirectos, canales, partners, sustitutos y variables del entorno (regulación, tendencias).

##### Su propósito es dar visibilidad estratégica para priorizar oportunidades, diseñar posicionamiento y decidir inversiones comerciales.

Identificar quiénes son los jugadores (competidores, partners, sustitutos).
Ver dónde hay oportunidades y vacíos (white space).
Priorizar segmentos y cuentas objetivo (ICP).
Diseñar positioning y mensajes por segmento.
Informar pricing, canal y roadmap de producto.


### 1. Componentes

1. Segmentación de mercado — grupos de clientes por industria, tamaño, uso, valor.

2. Buyer personas / roles — quién toma la decisión en cada segmento.

3. Competidores directos — productos que resuelven el mismo problema.

4. Sustitutos / soluciones parciales — Excel, consultoría, bricolaje.

5. Partners & canales — integradores, marketplaces, revendedores.

6. Proposición de valor por segmento — dolor principal + beneficio clave.

7. Pricing promedio y modelos — referencia del mercado.

8. Barreras de entrada & riesgos — compliance, integración, cost.

9. Señales de demanda — búsquedas, job-postings, growth signals.

10. Prioridad / atractivo — score para decidir foco.


### 2. Construcción 

1. Define el objetivo del mapa (p.ej. “priorizar 3 segmentos para outbound Q3”).

2. Recolecta datos: entrevistas clientes, feedback sales, demo notes, análisis competitivo (websites, pricing), job-postings, trafico web, reviews (G2), LinkedIn.

3. Segmenta el mercado en 4–8 grupos accionables.

4. Lista competidores y sustitutos por segmento.

5. Para cada segmento completa una ficha con: tamaño estimado, willingness-to-pay, decision-maker, pain points, canales efectivos.

6. Scorea y prioriza (método simple abajo).

7. Visualiza: tabla + 2×2 (Attractividad vs Fit) + mapa de players.

8. Decide next steps: 1–2 segmentos prioritarios + experiments pilotos.


### 3. Plantilla práctica: filas = segmentos / cuentas; columnas recomendadas 

| Segmento / Cuenta | Tamaño mercado (est) | Decisor  | Pain principal | Competidores | Precio mercado | Canales eficaces   | Barreras        | Señales (jobs/traffic) | Impact (1-5) | Confidence (1-5) | Effort (1-5) | ICE score |
| ----------------- | -------------------: | -------- | -------------- | ------------ | -------------: | ------------------ | --------------- | ---------------------- | -----------: | ---------------: | -----------: | --------: |
| Agencias 20–100   |        1.2k empresas | Head Ops | coordinación   | ToolA, Excel |      \$/usr/mo | Outbound, LinkedIn | Integración API | +20 job posts          |            4 |                4 |            2 | (4×4)/2=8 |


#### Calcular ICE: ICE = (Impact × Confidence) / Effort.

Impact = beneficio si ganás ese segmento (1–5).

Confidence = seguridad de la hipótesis (datos / entrevistas) (1–5).

Effort = coste/tiempo para atacar (1–5, 1=low esfuerzo).
Ordená por ICE para priorizar.


### 4. Visualizaciones útiles

2×2 matrix: Eje X = Fit (qué tan bien encaja tu producto) ; Eje Y = Market Attractiveness (tamaño + willingness-to-pay).

Mapa de players: burbujas donde tamaño = market share estimado y color = competidor/partner.

Funnel estimado por segmento: leads → demos → PoC → paid (tasas estimadas).


### 5. Datos y señales a buscar (fuentes prácticas)

Entrevistas a clientes / surveys.
Website & pricing competitors.
Reviews (G2, Capterra) y feature gaps.
Job postings (LinkedIn) — hiring = señal de inversión en área.
Activity en GitHub / StackOverflow (para productos dev).
Tráfico web estimado (SimilarWeb, Ahrefs si disponible).
Menciones en noticias / reports sectoriales.


### 6. Ejemplo (3 segmentos)

Segmentos: Agencias (20–100), Startups (1–20 devs), Empresas enterprise.

Agencias — tamaño medio, pain: coordinación, willingness-to-pay: media; canales: outbound + referrals; prioridad: alta (ICE 8).

Startups — early adopters, TTFV crítico, canales: community/GitHub; priority media (ICE 6).

Enterprise — ARR grande pero sales cycle largo, needs compliance; priority baja- media (ICE 4).
 

### 7. Uso práctico del mapa (qué hacer con él)

Elegir 1 segmento principal para pruebas outbound 50 cuentas.
Crear messaging y assets específicos por segmento (one-pager, case study).
Diseñar PoC templates con success metrics por segmento.
Identificar 3 partners potenciales por segmento.
Revisar el mapa cada 4–8 semanas con datos nuevos.


### 8. Errores comunes a evitar

Hacer el mapa muy teórico sin entrevistas — confidence baja.

Sobre-puntuar segmentos por “tamaño” sin verificar willingness-to-pay.

No actualizarlo: el mercado y señales cambian rápido en startups.

Confundir competencia con sustitutos: ambos importan distinto.


## Ecosistema

##### Conjunto de actores, relaciones, recursos y reglas que interactúan y determinan cómo funciona un mercado o industria.

##### No es solo quién compite contigo: es quién aporta valor, quién regula, cómo fluye el dinero, la información y el talento, y qué fuerzas determinan el crecimiento o la fragilidad del sector.


### 1. Componentes

`Clientes / segmentos`: usuarios finales y buyers (roles y necesidades).

`Competidores`: directos e indirectos (incluye sustitutos y alternativas).

`Partners / complementores`: integradores, ISVs, marketplaces, distribuidores.

`Proveedores`: tecnología, servicios, materia prima, infraestructura.

`Canales de distribución`: online, revendedores, marketplaces, ventas directas.

`Reguladores y políticas`: normas, certificaciones, requisitos de cumplimiento.

`Financiadores & capital`: VCs, bancos, programas públicos, grants.

`Talento & academia`: disponibilidad de skills, universidades, comunidades.

`Plataformas y estándares`: plataformas cloud, protocolos, APIs comunes.

`Clientes complementarios / adopters tempranos`: quienes ayudan a validar.

`Medios / analistas / comunidades`: influyen en percepción y adopción.


### 2. Por qué importa (casos de uso)

Elegir ICP y canales más efectivos.
Diseñar partnerships estratégicos con alto apalancamiento.
Anticipar riesgos regulatorios o de suministro.
Priorizar roadmap de producto según integraciones y standards.
Valorar oportunidades de monetización (marketplaces, bundles).
Preparar fundraising demostrando comprensión del mercado.


### 3. Cómo mapear un ecosistema — práctico

1. `Define el alcance`: geografía, verticales, segmento (p. ej. “SaaS de recursos humanos en LatAm”).

2. `Lista actores por categoría` (clientes, competidores, partners, proveedores, reguladores).

3. `Dibuja relaciones`: quién se conecta con quién (venta, integración, dependencia).

4. `Añade flujos`: dinero (quién paga a quién), datos, tráfico, talento.

5. `Mide señales`: tamaño del mercado, velocidad de adopción, activity (jobs, funding, tráfego).

6. `Identifica puntos de palanca`: partners con reach, standards obligatorios, plataformas dominantes.

7. `Evalúa riesgo y dependencia`: concentración de proveedores, barreras regulatorias, clientes clave.

8. `Prioriza oportunidades (ICE o similar)`: dónde atacar primero.

9. `Valida con entrevistas a 5–10 actores clave` (clientes, partners, un competidor si es posible).

10. `Mantén dinámico`: revisa cada 4–8 semanas según señales del mercado.


### 4. Señales y métricas útiles para analizar el ecosistema

Tamaño y crecimiento del mercado (TAM / SAM / SOM estimados).
Número y magnitud de competidores (share aproximado).
Funding activity: rondas recientes en startups del sector.
Hiring signals: ofertas de empleo por competencias clave.
Adopción de estándares / plataformas (ej.: % de empresas en AWS vs on-prem).
Concentración de proveedores (dependencia crítica).
Tiempo medio de procurement (enterprise buying cycles).
Presión regulatoria (nuevas leyes, timelines de cumplimiento).
Sentimiento / reviews / medios (reputación sectorial).


### 5. Ejemplo (startup SaaS B2B)

Actores: clientes (agencias), competidores (ToolA, ToolB), partners (agencias consultoras, marketplace X), proveedor infra (AWS), regulator (protección de datos), financiamiento (angels locales).

Palancas: integrarse con marketplace X para distribución, partnership con 2 consultoras para onboarding.

Riesgos: dependencia de un proveedor de hosting con precios volátiles; largo ciclo procurement enterprise.

Acción: priorizar campañas outbound a agencias (alto fit y rápida decisión) y preparar listing en marketplace X.


### 6. Visualizaciones recomendadas

Diagrama de actores y relaciones (nodos + líneas con tipo de vínculo).

2×2 Fit producto vs Attractiveness del segmento.

Mapa de flujo (dinero / datos / usuarios).

Heatmap de oportunidades por segmento (ICE scores).


### 7. Errores comunes y cómo evitarlos

Mapa estático: el ecosistema cambia rápido → actualizar regularmente.

Ignorar reguladores o procurement (riesgo alto en ventas enterprise).

Confundir competencia con sustitutos/complementos (ambos impactan estrategia distinta).

No validar hipótesis con actores reales → baja confidence en priorización.

Subestimar dependencia tecnológica (p. ej. una plataforma cloud dominante puede cambiar condiciones).


### Acciones 

Definir alcance del mapa (vertical/geografía).

Listar actores clave en 6 categorías (clientes, competidores, partners, proveedores, reguladores, financiamiento).

Marcar 3 palancas de crecimiento y 3 riesgos críticos.

Calcular 2 señales: tamaño estimado del segmento y 1 hiring/funding signal.

Priorizar 2 acciones a ejecutar en 30 días (outreach a partners / pilot con cliente).


## Segmentación de Clientes

##### Proceso de dividir tu mercado en grupos homogéneos de clientes que comparten características relevantes (necesidades, comportamiento, valor, contexto).

##### El objetivo es priorizar recursos, adaptar producto y marketing, y diseñar ofertas que funcionen repetidamente para cada grupo.


Tipos, variables útiles, proceso y métricas para evaluar segmentos:

### 1. Segmentar

Permite enfocar esfuerzos de ventas y marketing en lo que realmente funciona.
Mejora mensajes y propuesta de valor: habla el idioma del segmento.
Aumenta eficiencia (mejor CAC, mayores conversiones).
Facilita diseño de productos y pricing alineados con capacidad y necesidad de pago.
Ayuda a priorizar partnerships y canales.


### 2. Tipos comunes de segmentación

1. Demográfica (B2C): edad, género, nivel socioeconómico.

2. Geográfica: país, región, ciudad, clima, regulación local.

3. Firmográfica (B2B): industria, tamaño empresa, facturación, región.

4. Conductual: uso del producto, frecuencia, etapa del customer journey.

5. Necesidades / Problema (value-based): qué dolor resuelven y con qué prioridad.

6. Tecnológica / Stack (tech-B2B): infra, lenguajes, integraciones necesarias.

7. Valor/Potencial: LTV estimado, willingness-to-pay, potencial de expansión.

8. Valor estratégico: partners, early adopters, referencia / case study potential.


### 3. Variables prácticas (Ejemplos)

B2B: industria, # empleados, ARR/ACV, rol decisor (CTO/Head Ops), stack (AWS/On-Prem), ciclo procurement, necesidad compliance.

B2C: edad, ingresos, frecuencia de uso, canal de adquisición, comportamiento de retención.

Cross: pain principal, presupuesto estimado, time-to-value (TTFV), sensibilidad a precio, propensity to churn.


### 4. Proceso

1. Define el objetivo: ¿para qué segmentás? (adquisición, pricing, producto, partners).

2. Recolecta datos: CRM, analytics, entrevistas, surveys, ventas, reviews, job-postings.

3. Elige variables alineadas al objetivo (no más de 4–6 para empezar).

4. Agrupa clientes: reglas simples (ej.: empresas 1–50 emp / 51–200 / >200) o clustering si hay datos.

5. Describe cada segmento: tamaño estimado, problemas, buyer persona, canal preferido, willingness-to-pay.

6. Prioriza (ICE o RICE): Impacto × Confianza / Esfuerzo.

7. Diseña experiments / playbooks para el segmento top y valida: mensajes, oferta, canal, métricas.


### 5. Medir funcionamiento de la segmentación

Conversion rate por segmento (lead→demo→PoC→paid).
CAC por segmento.
LTV / ARPU por segmento.
Churn por segmento.
TTFV y éxito de PoC por segmento.
Velocidad (sales cycle) por segmento.
Indicadores cualitativos: facilidad para conseguir referencias, calidad del feedback.


### 6. Ejemplos

B2B SaaS — ejemplo de 3 segmentos

Segmento A — Agencias 20–100 empleados: decisión rápida, menor compliance, gasto promedio medio, canal outbound.
Segmento B — Startups dev-heavy (1–20 devs): early adopters, alto interés en DX, canal community/GH.
Segmento C — Enterprise (>500 empleados): ARR alto, ciclo largo, requisito SOC2, necesidad PoC+legal.

B2C — ejemplo

Usuarios “power”: usan la app >5 veces/semana, alta retención, dispuestos a pagar premium.
Usuarios “casual”: usan 1–2 veces/semana, sensible a precio, retention baja — mejor abordaje freemium + reengagement


### 7. Describir un segmento

Nombre del segmento
Tamaño estimado (nº empresas/usuarios)
Decisor / Buyer persona (rol)
Pain principal (1 frase)
Propuesta de valor específica (1 frase)
Canales prioritarios
Precio objetivo / willingness-to-pay
KPIs a medir (3)
Riesgos / blockers
Prioridad (ICE score)


### 8. Errores

Demasiadas segmentaciones → complejidad operativa. Empieza con 2–3.
Basarse solo en intuición → valida con datos y entrevistas.
Ignorar señales de mercado (p. ej. hiring, funding).
No iterar — revisa cada 4–8 semanas según resultados.
Confundir segmentos con personas: un segmento puede tener varias personas; documentalo.


### 9. Herramientas y técnicas

Manual / regla-based: buen inicio (si datos limitados).
Clustering (k-means, hierarchical): útil con datos numéricos (engagement, ARPU, features used).
RFM (Recency, Frequency, Monetary) para B2C/e-commerce.
A/B testing de mensajes y pricing por segmento.
CRMs + propiedades custom para filtrar y reportar por segmento.


### 10. Acciones

Define objetivo de segmentación (adquisición/pricing/product).
Extrae 3 fuentes de datos (CRM, analytics, 10 entrevistas).
Selecciona 4 variables clave.
Crea 3 segmentos accionables y completa los one-pagers.
Calcula ICE y prioriza 1 segmento para pilot.
Diseña 1 experimento (50 cuentas / 500 usuarios) y métricas de éxito.



## ICP (Ideal Customer Profile) 

##### Es la descripción del tipo de cliente (empresa, en B2B) que obtendrá el máximo valor de tu producto y que, a su vez, será más rentable y fácil de adquirir y retener para tu empresa.

##### Es una guía estratégica: a quién perseguir, no a quién venderle “a toda costa”.

Prioriza recursos: enfocas ventas, marketing y producto en donde hay mayor probabilidad de éxito.

Mejora eficiencia: reduce CAC y acelera el sales cycle al dirigirte a quienes tienen fit.

Aumenta LTV: clientes que encajan bien suelen quedarse más y comprar más.

Facilita messaging: mensajes y casos de uso específicos resuenan mejor.

Guía partnerships: eliges partners que acceden a esos mismos clientes.


### ICP vs Buyer Persona (¿en qué se diferencian?)

ICP = perfil de la empresa objetivo (B2B): sector, tamaño, ARR, stack, etc.

Buyer persona = perfil de la persona dentro de la empresa (rol, objetivos, objeciones).
Ambos se usan juntos: ICP define a qué empresas ir; personas definen a quién dentro de la empresa hablar. 


### Componentes de un ICP (en B2B)

1. Firmográficos: industria, tamaño por empleados, facturación/ARR, región.

2. Tecnográficos: stack tecnológico, plataformas usadas, integraciones críticas.

3. Organizacionales: estructura (centralizada/descentralizada), ciclo de compra, procurement.

4. Problema / Use case: pain principal que tu producto resuelve y el outcome esperado.

5. Capacidad de pago: presupuesto típico / willingness-to-pay.

6. Señales de intención: behaviours que indican fit (job posts, usage signals, tooling).

7. Valor esperado: ACV estimado, expansión posible, churn esperado.

8. Barreras / requisitos: compliance, SLA, localización de datos, soporte.

9. Canales de adquisición efectivos: inbound, outbound, partners, marketplaces.

10. Referenciabilidad: probabilidad de convertirse en case study o fuente de referrals.


### Construir un ICP

1. Recolecta datos: clientes actuales (ganados y perdidos), CRM, métricas product (usage), entrevistas con sales/CS.

2. Analiza los ganadores: identifica patrones en clientes más rentables y con menor churn.

3. Define criterios mínimos (must-have) y criterios preferentes (nice-to-have).

4. Crea el perfil (one-pager). Incluye ejemplos de cuentas ideales.

5. Scorea leads: convierte criterios en puntos (lead scoring).

6. Pilota: enfoca alcance en ICP durante 4–8 semanas y compara resultados vs baseline.

7. Itera: ajusta ICP con datos de performance (conversiones, CAC, churn).


### Score simple de fit (Ej)  

Asigna puntos a criterios clave; suma y define umbrales:

Industria target = 20 pts
50–200 empleados = 15 pts
Stack compatible = 15 pts
Budget confirmado = 20 pts
Procurement < 3 meses = 10 pts
Señales de intención (jobs/usage) = 20 pts

>70 pts = Alta prioridad; 40–70 = Nurture; <40 = Low priority


### Métricas para validar tu ICP

Conversion rate (lead → demo → PoC → paid) para leads ICP vs no-ICP.
CAC por ICP.
ACV / ARR promedio por ICP.
Churn por ICP (logo & revenue).
Sales cycle (días) por ICP.
LTV:CAC por ICP.

Si ICP tiene mejores KPIs que segmento general → ¡ICP validado!


### Ejemplos

B2B SaaS (gestión proyectos)

Industria: agencias digitales y consultoras.
Empleados: 20–150.
Stack: usan GSuite + Slack + Jira.
Pain: coordinación entre equipos remotos, alta pérdida de tiempo.
ACV objetivo: 10–30k USD anual.
Señales: búsquedas “project management tool”, hiring de PMs.


B2B Tech (API product)

Industria: plataformas fintech o marketplaces.
Empleados: 50–500, equipo dev in-house.
Tech: AWS + Python/Node + REST infra.
Pain: integración de pagos/settlement; necesita compliance.
Requisito: SOC2 o willingness to sign DPA.

(B2C suele usar segmentos/personas más que “ICP empresa”)


### Errores comunes al definir ICP

Basarlo solo en intuición y no en datos.
Hacer un ICP demasiado amplio → no hay foco.
##### No actualizarlo (mercado y signals cambian).
Confundir ICP con todo tu mercado addressable.
No alinear Sales, Marketing y Producto sobre el ICP.


### Plantilla one-pager (campos a completar)

Nombre del ICP (ej.: “Agencias Digitales 20–150”)
Descripción breve
Firmográficos clave (industria, empleados, región)
Tech stack / integraciones requeridas
Pain principal y outcome esperado
ACV estimado / willingness-to-pay
Decisor(s) / Buyer personas (roles)
Canales de adquisición prioritarios
Señales de intención (qué medir)
Barreras / requisitos
Ejemplos de cuentas que encajan
KPI target (conversion, CAC, churn objetivo)


### ICP en la práctica (GTM)

Targeting en campañas (LinkedIn, ads) según firmografía.
Priorizar listas de outbound y asignar SDRs.
Crear messaging y case studies alineados al pain del ICP.
Diseñar PoC y pricing específicos.
Seleccionar partners que tienen acceso al mismo ICP.
En CRM: campo “ICP fit” y reglas de scoring/auto-assign.


## Buyer personas

##### Perfil semificticio que representa a tu cliente ideal a nivel individual: sus motivaciones, objetivos, problemas, comportamientos de compra y contexto

##### Mientras el ICP define qué empresas atacar, la persona define a quién dentro de la empresa hablar y cómo comunicarte con esa persona.

Permite personalizar mensajes (email, demo, pitch) que conecten.

Mejora la eficacia del discovery (preguntas relevantes).

Alinea Producto, Marketing y Ventas sobre lenguaje, objeciones y prioridades.

Reduce tiempo de venta: hablas lo que le importa al comprador.

Facilita diseñar contenidos (case studies, FAQs, pricing) por persona.


### Componentes clave de una buyer persona

1. Nombre / etiqueta (ej.: “CTO Técnico-Escéptico”)
2. Rol y contexto (título, responsabilidades, tamaño de equipo)
3. Objetivos principales (qué busca lograr en su trabajo)
4. Dolores / frustraciones (qué le quita el sueño)
5. Criterios de éxito (cómo mide que algo funciona)
6. Barreras u objeciones típicas (coste, integración, seguridad, tiempo)
7. Canales & comportamientos (dónde se informa, cuándo toma decisiones)
8. Mensajes que resuenan (value propositions / argumentos clave)
9. Señales de intención (triggers que indican interés)
10. Tono / estilo (formal, técnico, comercial)
11. Cita representativa (frase que resume su mentalidad)
12. Ejemplo de preguntas para discovery (3–6 específicas)


### Crear buyer personas

1. Reúne datos: entrevistas con clientes actuales, lost deals, sales, CS, analytics, soporte.

2. Agrupa por patrones: problemas repetidos, roles que aparecen, lenguaje usado.

3. Prioriza personas: cuáles impactan más tu revenue (decisor, influencer, user).

4. Crea one-pagers para las 2–3 personas principales.

5. Valida: entrevista a 5–10 personas reales del mismo rol. Ajusta.

6. Distribuye: comparte con ventas, marketing y producto; integra en playbooks y scripts.

7. Usa y actualiza: cada 3 meses revisa y refina con nueva evidencia


### Ej: B2B — Persona: CTO Técnico-Escéptico

Rol: CTO en empresa SaaS (50–200 empleados)
Objetivos: estabilidad, escalabilidad, reducir deuda técnica.
Dolores: integrar nuevas tecnologías con mínimo riesgo; pruebas largas; falta de control sobre infra.
Objeciones comunes: “¿cómo afecta la latencia?”, “¿quién mantiene esto en producción?”, “¿qué garantías de seguridad?”.
Canales: Hacker News, Stack Overflow, talks en meetups, referidos de otros CTOs.
Mensaje que funciona: “integra en 1 día, rollback en 1 click, SLA 99.9% y soporte SE dedicado”.
Discovery starter: “¿Qué procesos actuales generan más incidentes en producción?”


### Ej: B2C — Persona: Usuario Power (Frecuente)

Demografía: 28–40 años, usa app varias veces por semana.
Objetivos: ahorrar tiempo y ser más organizado.
Dolores: apps complicadas, demasiadas notificaciones, onboarding confuso.
Canales: Instagram, newsletters, recomendaciones de amigos.
Mensaje: “logra tu primera tarea organizada en 60s — sin aprender nada”.
Señal de intención: descarga + completes onboarding en 3 días.


### Preguntas efectivas para entrevistas (10 claves)

1. Cuál es tu responsabilidad principal y cómo mides éxito?
2. ¿Cuáles son tus tres mayores frustraciones relacionadas con X?
3. ¿Cómo tomás decisiones para comprar una herramienta como esta? ¿Quién más participa?
4. ¿Qué sería un resultado exitoso tras implementar la solución?
5. ¿Qué información necesitas para aprobar un presupuesto?
6. ¿Qué te haría decir “no” a una propuesta?
7. ¿Dónde buscas información/soluciones cuando surge este problema?
8. ¿Qué alternativas usás ahora (herramientas/manuales)?
9. ¿Cuánto tiempo y recursos estás dispuesto a invertir en una prueba/pilot?
10. ¿Podrías contarme un caso concreto reciente donde esto te afectó?


### Integrar personas en el día a día

En CRM: campo “persona” por lead/opportunity.
En cadencias: adaptar email subject y cuerpo según persona.
En demos: segmentar demo flow (más técnica vs más negocio).
En contenido: crear case studies y FAQs dirigidos.
En pricing: paquetes o add-ons que resuelvan objeciones de cada persona.
En onboarding: flujos guiados según persona (developer vs manager).


### Errores comunes al trabajar con personas

Crear personas de cartón sin entrevistas.
Hacer demasiadas (parálisis operativa). Limitar a 2–3 prioritarias.
No compartirlas con el equipo o no integrarlas en el CRM.
No actualizar: mercado y roles cambian rápido.


### Plantilla rápida (one-pager)

Nombre:
Rol / título:
Contexto / responsabilidades:
Objetivos principales:
Dolores / frustraciones:
Criterios de éxito:
Objeciones típicas:
Canales / dónde se informa:
Mensajes clave que resuenan:
Señales de intención:
Cita representativa:
3 preguntas para discovery:


## KPIs (Key Performance Indicator)

##### Métrica clave que mide el progreso hacia un objetivo importante del negocio. 

##### No es todo lo medible: es lo esencial que te dice si vas bien o mal respecto a una meta concreta.


### 1. Características de un buen KPI 

Relevante: vinculado a un objetivo de negocio.
Medible y fiable: datos disponibles y consistentes.
Accionable: conducir a decisiones o acciones concretas.
Temporal: con periodo y frecuencia de medición claros.
Comparativo: tiene baseline y target (o benchmark).
Simple: fácil de entender por quien lo usa.

##### Método práctico: aplica SMART a cada KPI: Specific, Measurable, Achievable, Relevant, Time-bound.


### 2. Tipos de KPIs

Leading (indicadores tempranos): predicen resultados futuros (p. ej. # demos agendadas → predice ventas).

Lagging (indicadores rezagados): muestran resultados ya ocurridos (p. ej. MRR, revenue).

Operativos: métricas de día a día (tasa de error, tiempo de respuesta).

Estratégicos: métricas que miden objetivos de alto nivel (ARR, EBITDA, churn).

Combina leading + lagging para poder actuar antes de que el resultado final falle.


### 3. Elegir KPIs

1. Define el objetivo claro (ej.: “aumentar MRR en 30% en 6 meses”).

2. Elige 1 north-star (KPI principal) que represente ese objetivo.

3. Añade 2–4 supporting KPIs (leading indicators, efficiency metrics).

4. Asegura datos: quién los produce, frecuencia y fuente.

5. Fija targets y plazo (baseline → objetivo).

6. Revisa cadence: daily/weekly/monthly/quarterly según la métrica.

7. Evita el exceso: 3–6 KPIs por owner es manejable; más genera ruido.


### 4. KPIs comunes por área (con fórmula / cómo calcularlos)

#### Negocio / Financieros

MRR (Monthly Recurring Revenue) = suma de ingresos recurrentes mensuales.
ARR = MRR × 12.
Burn rate (mensual) = Cash outflows netos por mes.
Runway (meses) = Caja disponible ÷ Burn mensual.


#### Ventas / Desarrollo de Negocios

Pipeline value = Σ (ACV de cada oportunidad).
Expected value (weighted) = Σ (ACV × probabilidad de cierre).
Win rate = # deals ganados ÷ # deals cerrados.
Sales cycle medio (días) = promedio(días desde lead→close).
CAC (Customer Acquisition Cost) = (total gastos ventas+marketing) ÷ # nuevos clientes en período.


#### Producto / Growth

Activation rate = #usuarios que completan el evento “activation” ÷ #usuarios nuevos.
DAU/MAU = usuarios activos diarios ÷ usuarios activos mensuales (retención/engagement).
Churn rate (mensual) = # clientes perdidos en mes ÷ # clientes al inicio del mes.
LTV (lifetime value) ≈ ARPU × (1 / churn rate) × margen bruto.


#### Marketing

Conversion rate (landing) = # leads obtenidos ÷ # visitantes.
CPL (cost per lead) = gasto campaña ÷ # leads.
ROAS = ingresos atribuibles ÷ gasto publicitario.


#### Operaciones / Soporte

Tiempo medio de resolución (MTTR) = tiempo total de resolución ÷ # tickets resueltos.
SLA compliance = % tickets cerrados dentro del SLA.


### 5. Ejemplo práctico — elegir KPIs para BD en una startup B2B

Objetivo: +$30k MRR en 3 meses.

	North-star: MRR (mensual). (revisar mensual)

	Supporting KPIs:

		Pipeline weighted ≥ $180k (weekly)
		'#'PoCs iniciados ≥ 6 / trimestre (weekly)
		PoC → paid rate ≥ 30% (monthly)
		CAC por canal ≤ $2,000 (monthly)


### 6. Frecuencia y ownership

Daily: KPIs operativos urgentes (SDR activity, errores críticos).

Weekly: Pipeline, conversiones por etapa, actividad de ventas.

Monthly: MRR, CAC, churn, LTV.

Quarterly: OKRs, NPS, revenue growth, unit economics.

##### Siempre asigna un owner responsable de la métrica y uno de backup.


### 7. Visualizar y reportar

Un dashboard claro: KPI principal arriba, supporting KPIs, tendencias (últimos 12 periodos), variance vs target y acciones.

Usa colores simples: verde/amarillo/rojo con thresholds.

Incluye contexto: por qué cambió la métrica (deals grandes, campaña, churn por bug).


### 8. Errores comunes / anti-patrones

Medir too many KPIs → parálisis.
KPIs sin ownership ni definición de fuente.
Cambiar KPIs constantemente → no hay learning.
Confundir outputs (emails enviados) con outcomes (revenue).
No separar vanity metrics (likes, visitas sin objetivo) de KPIs reales.


### 9. Buenas prácticas rápidas

Limita a 3–6 KPIs por equipo.
Define fórmulas exactas (how-to-calc) y fuente de datos en un documento.
Incluye un mix de leading + lagging.
Acompaña KPI con hipótesis y acción (si KPI cae, qué hacemos).
Revisa targets trimestralmente y ajusta si el contexto cambió


### 10. Plantilla de ejemplo

| KPI               | Definición                               | Frecuencia | Owner        |    Target |
| ----------------- | ---------------------------------------- | ---------: | ------------ | --------: |
| MRR               | Suma de ingresos recurrentes mensuales   |    Mensual | Head Finance |  +30% Q/Q |
| Pipeline weighted | Σ(ACV × probabilidad)                    |    Semanal | Head BD      |  ≥ \$180k |
| CAC               | Gasto ventas+marketing ÷ clientes nuevos |    Mensual | Head Growth  | ≤ \$2,000 |
| Churn (%)         | Clientes perdidos / clientes inicio mes  |    Mensual | Head CS      |      ≤ 3% |



## one-pager

Documento de una sola página que resume lo más importante sobre un proyecto, producto, propuesta o empresa

##### Su objetivo es comunicar rápido, claro y persuasivo: captar la atención, transmitir valor y provocar una acción (reunión, demo, firma, inversión).


### Utilidad

Presentar una idea a inversores.
Vender un producto a un potencial cliente o partner.
Resumir un proyecto interno para la dirección.
Apoyar una reunión o pitch inicial.

Es el “elevator pitch” visual: todo en una vista.


### Estructura mínima recomendada (secciones)

1. Encabezado / Título — nombre, tagline corto (1 línea), logo.

2. Problema — 1–2 frases que expliquen el dolor del cliente.

3. Solución / Producto — propuesta de valor en 1 frase + 3 bullets con beneficios clave.

4. Tracción / Prueba — 1–3 métricas o evidencias (MRR, clientes, % mejora, case study).

5. Mercado / Oportunidad — tamaño o segmento objetivo (breve).

6. Modelo de negocio / Pricing — cómo se gana dinero (1 línea o 1 tabla pequeña).
 
7. Equipo — 2–3 nombres + roles relevantes (fundadores / lead).

8. Roadmap / Próximos pasos — hitos próximos (30–90 días).

9. CTA & Contacto — qué querés que haga el lector (ej.: “Agendar demo”) + email/teléfono.

10. (Opcional) Riesgos / Ask — cantidad solicitada (inversión) o condiciones de partnership.


### Variaciones según propósito

Investor one-pager: incluye tracción, TAM/SAM, uso de fondos, valoración/ask.

Sales one-pager (cliente): caso de uso, ROI estimado, pricing y case study.

Partnership one-pager: argumento de colaboración, beneficios mutuos, modelo de reparto.

Internal / Project: objetivos, KPIs, owner, recursos solicitados.


### Reglasde diseño y estilo (prácticas)

Máximo una página A4; espacio en blanco intencional.

Jerarquía visual: título grande, subtítulos, bullets.

Usa 1–2 métricas clave (no un listado interminable).

Frases cortas; bullets, no párrafos largos.

Incluye visual simple: un mini gráfico, tabla 1-fila o iconos.

Tipografía legible, márgenes consistentes y logo.

Exportá en PDF para compartir; mantén la fuente original editable si necesitarás cambiarlo.

Longitud recomendada: ~250–450 palabras + 1 gráfico


### Errores comunes

Demasiada información / párrafos largos.

No indicar claramente el call to action.

Olvidar métricas concretas (sólo frases genéricas).

No adaptar al destinatario (investor vs buyer vs partner).

Diseño pobre que dificulta escaneo rápido.


### Ejemplo: SaaS B2B

ProjectFlow — Gestión colaborativa para agencias
Tagline: “Reduce 30% del tiempo perdido en coordinación de proyectos.”

Problema: Las agencias pierden tiempo sincronizando tareas en múltiples herramientas y hojas de cálculo.
Solución: ProjectFlow centraliza tareas, integrándose con Slack y Google Drive.
	
	Implementación en <48h — onboarding guiado.

	Dashboard que reduce horas de reunión en promedio 25%.

	API para integraciones con herramientas internas.

Tracción:
120 clientes (AGENCIA), MRR $18,000, churn mensual 1.5%.
Cliente destacado: Agencia X — reducción de 28% en retrasos (case study).

Mercado objetivo: Agencias digitales en LATAM (TAM estimado: 12k empresas).

Modelo: Suscripción por usuario ($10/user/mo) + implementación enterprise.

Equipo: Ana Pérez (CEO, ex-PM en Y), Juan López (CTO, ex-dev leader).

Próximos 90 días: Launch integración con Jira; 3 pilots enterprise.

CTA: Agendá demo (15 min) — ana@projectflow.com


### Checklist antes de enviar un one-pager

¿Se entiende el problema en 5 segundos?
¿La propuesta de valor está en 1 línea?
¿Hay 1–2 métricas que respalden la afirmación?
¿El CTA es claro y visible?
¿Está en una página y se ve limpio en PDF?


## One-pagers para Desarrollo de Negocios

Cada uno con su propósito y los 3–5 elementos mínimos que debería contener. 

Úsalos como plantillas rápidas para comunicar, alinear y operar.


### 1. One-pager de Pitch / Sales (por ICP)

Propósito: Mensaje corto para outreach o entregar en reuniones iniciales.
Incluye: 1-línea de valor, 3 beneficios clave, pricing resumido, CTA (demo/contacto).

### 2. One-pager de Producto / Solución

Propósito: Explicar qué hace el producto a stakeholders no técnicos.
Incluye: problema, solución, features principales, integraciones, caso de uso.

### 3. One-pager de PoC / Pilot

Propósito: Acordar alcance y métricas de éxito de una prueba con cliente.
Incluye: objetivos y criterios de éxito, alcance técnico, timeline, recursos y next steps

### 4. One-pager de Partnership / Alianza

Propósito: Propuesta rápida para un partner (reseller, ISV, co-sell).
Incluye: beneficios mutuos, modelo de revenue share, responsabilidades, CTA para MOU.

### 5. One-pager de Propuesta Comercial / Quote

Propósito: Resumen de la oferta comercial para el decisor.
Incluye: resumen de servicios, precio/estructura, plazo, condiciones y contactos.

### 6. One-pager de Caso de Éxito (Case Study)

Propósito: Prueba social para ventas y marketing.
Incluye: cliente, problema, solución aplicada, resultados cuantificados (ROI), cita.

### 7. One-pager de Competitive positioning

Propósito: Diferenciar frente a competidores para ventas y partners.
Incluye: matriz rápida (nosotros vs competidores), 3 fortalezas clave, riesgos/mitigaciones.

### 8. One-pager de Go-to-Market (GTM) Summary

Propósito: Plan ejecutivo de lanzamiento por canal/segmento.
Incluye: target ICP, canal prioritario, propuesta de valor, métricas objetivo y timeline.

### 9. One-pager de Playbook Comercial (resumen)

Propósito: Guía operativa para SDR/AEs en un vistazo.
Incluye: cadencia outbound (pasos), criterios de calificación, templates clave (subject/CTA).

### 10. One-pager de Pricing / Packaging

Propósito: Explicar modelos de precio a ventas y partners.
Incluye: tiers (features vs price), reglas de descuento, ejemplos de ACV, recomendaciones de upsell.

### 11. One-pager de Technical / SE Brief

Propósito: Documento técnico resumido para SEs y CTOs clientes.
Incluye: arquitectura, requisitos de integración, SLAs, límites y performance.

### 12. One-pager de Partnership Program (canal)

Propósito: Resumen del programa de canal para potenciales partners.
Incluye: beneficios, niveles (reseller/co-sell), incentivos, requisitos y proceso de onboarding.

### 13. One-pager de Dashboard KPI / Executive Summary

Propósito: Estado rápido de negocio para dirección.
Incluye: 4–6 KPIs principales (MRR, pipeline, CAC, churn), variación vs target y acción recomendada

### 14. One-pager de Request for Resources / Investment Ask

Propósito: Pedir presupuesto aprox. para campaña, hire o evento.
Incluye: objetivo, ROI esperado, coste detallado, timeline y persona responsable.

### 15. One-pager de Riesgos & Compliance (deal-specific)

Propósito: Resumir requisitos legales/seguridad que bloquean la venta enterprise.
Incluye: requisitos (SLA, DPA, data residency), gaps actuales y plan de mitigación.


### Prioridad recomendada (startup)

1. Pitch/Sales por ICP
2. PoC/Pilot
3. Playbook Comercial
4. Product One-pager
5. Case Study
6. Pricing
7. Partnership One-pager
8. Dashboard KPI



# 2. Propuesta de valor y posicionamiento

Value proposition canvas, messaging para cada buyer persona, proof points.

Redactar pitch de 15s (elevator), 60s y 1-page sales one-pager por vertical.


# 3. Canalización y prospección

Canales: inbound vs outbound; LinkedIn, email, eventos, referrals, alianzas

Diseñar secuencia de outreach multicanal (4–6 pasos). Implementa 50 contactos en la secuencia.


# 4. Calificación y metodología de ventas

Frameworks (BANT / MEDDIC / CHAMP / SPIN) y criterios de calificación.

Role-play de llamada discovery + plantilla de preguntas de calificación.

Script de discovery + scoring sheet.


# 5. Negociación y cierre

Técnicas de negociación, concesiones razonadas, term sheets básicos, red flags legales.

Simulación de negociación (precio vs alcance vs SLA.

Checklist de concesiones aceptables y clausulas imprescindibles.


# 6. Alianzas (partnerships) estratégicas

Tipos de partnership (reseller, co-sell, integration, referral), criterios de fit, modelos de revenue share.

Diseñar 3 propuestas de partnership y outreach a 5 partners potenciales.

Partnership one-pager + MOU (boilerplate).


# 7. Go-to-Market y lanzamiento de canal

GTM strategy, pilots, enablement para partners, playbooks para canales.

Crear plan GTM para 1 canal con métricas, incentivos y roadmap 90-180 días.


# 8. Pricing y modelos de monetización

Modelos: freemium, suscripción, transaccional, usage-based. Elasticidad, packaging y pruebas de price.

Construir modelo LTV / CAC simplificado y simular 3 escenarios de pricing.


# 9. Métricas y forecast

Pipeline management (SQL, MQL, SAL), sales funnel metrics, churn, ARR, CAC, payback. Forecasting básico.

Construir pipeline en hoja de cálculo con conversion rates y forecast trimestral.


# 10. Operaciones comerciales (tools & automation)

CRM (estructura de datos), cadencias, playbooks, integraciones, automatización (sequences, lead scoring).

Diseñar estructura CRM + reglas de asignación de leads.


# 11. Liderazgo y scaling

Contratación de BD reps, compensación (quota, OTE), coaching y KPIs por rol.

Crear descripción de puesto + plan de onboarding 30/60/90 días.


# 12. Integración, proyecto final y retro

Proyecto (1)

1. Ejecutar una campaña outbound completa sobre 50 cuentas y reportar resultados

2. Diseñar un partnership operativo y simular pilot + forecast 6 meses.

3. Crear un playbook comercial (prospect, qualify, close) + plantilla CRM y dashboard.

Documento + 6–10 slides + 1 página de lecciones aprendidas y next steps.


# Lecturas

The Mom Test — para entrevistas a clientes.

Predictable Revenue — prospección outbound a escala.

SPIN Selling — técnicas de venta consultiva.

Crossing the Chasm — para productos tech/scale.

Blogs prácticos: SaaStr, First Round Review (si querés, preparo links).

Herramientas a practicar: HubSpot/Salesforce (CRM basics), LinkedIn Sales Navigator, Google Sheets/Excel, herramientas de outreach (Mailshake/Outreach), instrumento de analítica (Mixpanel/GA).


# Habilidades técnicas y operativas

Excel financiero y modelado de pipeline.

SQL básico (consultas para análisis de leads/cohorts).

Uso y configuración de un CRM (objetos, campos, pipelines).

Diseño de experiments / pilots (definir KPIs, cohortes, métricas de éxito).

Comunicación: presentaciones y documentación para stakeholders.


# Ejercicios recurrentes

Weekly: 1 decision brief sobre la mejor oportunidad de la semana.

Biweekly: Run rate review del pipeline y 1 experiment (pilot o pricing tweak).

Monthly: Post-mortem de acuerdos perdidos/ganados (lecciones + acción).


# KPIs para medir progreso

Número de leads calificados / semana.

Tasa de conversión por etapa (outreach → meeting → proposal → close).

CAC por canal y LTV estimado.

Tiempo medio de sales cycle.

Nº de partnerships activas y revenue atribuido.


# Rutas de especialización (1)

1. BD para startups / early-stage: foco en discovery, canales low-cost, growth loops.

2. BD enterprise / alliances: enfoque en ventas complejas, procurement, contract negotiation.

3. Channel & partnerships: diseño de programas, enablement y co-selling.





# Startup

##### Balancea discovery, ventas, partnerships, métricas, experiments y operaciones comerciales para convertir ideas en revenue repetible

## Objetivos

##### 1. Validar y escalar canales repetibles de adquisición.

##### 2. Construir pipeline predecible y playbooks replicables para BD/ventas.

##### 3. Diseñar partnerships y canales que aceleren adquisición o distribución.

##### 4. Implementar métricas y dashboards que guíen decisiones.

##### 5. Saber priorizar oportunidades con mínimo gasto de recursos (experimentos rápidos).


## Kickoff & retos principales

Definir objetivo principal (ej. +$X MRR en 6 meses, 5 partnerships estratégicos, reducir CAC un 30%).

One-pager con KPIs target, runway, y constrainst (recursos, headcount).


## 1. Product-market fit & ICP

Revisión de evidencia de PMF; definir ICP y segmentos prioritarios.

Tareas:
10 entrevistas cualitativas a clientes/usuarios.
Construir 2–3 buyer personas y mapa de pains/gains

Entregable: 
Documento ICP + hipótesis de valor (3 hipótesis priorizadas).


## 2. Value proposition y posicionamiento comercial

Tareas:

Value Proposition Canvas, mensajes por canal, proof points.

Crear 3 variantes de pitch (elevator 15s, demo 3m, one-pager). Test A/B en outreach inicial.

Entregable: 1-page sales kit por segmento.


## 3. Outbound inicial y playbook de prospección

Tareas:
Secuencias multicanal (email, LinkedIn, cold call), ICP lists, tooling mínimo.
Ejecutar 1 secuencia a 50 cuentas objetivo; medir open, reply, meetings.

Playbook de outreach + plantilla de cadencia (4–6 pasos).


## 4. Discovery y calificación (sales process)

Frameworks de calificación (MEDDIC / BANT / CHAMP adaptado a startup), scripts de discovery.

Hacer 8 calls de discovery; usar scoring para priorizar.

Script + scoring sheet en Google Sheets/CRM.


## 5. Pilotos (POC) y pricing experiments

Diseñar pilots de bajo coste para validar willingness-to-pay y fit. Modelos de pricing simples.

Lanzar 1 pilot con 2–3 clientes; medir engagement y receptividad a precio.

Plan de pilot + métricas de éxito (KPIs claros).


## 6. Cierre & negociación (terms básicos)

Técnicas de cierre, manejo de objeciones, term sheets simples y clausulas comunes (SLA, pagos, trial).

Simulación de negociación; preparar plantilla de propuesta comercial.

Template de proposal + checklist legal/finance mínimo.


## 7. Partnerships y canales de crecimiento

Tipos de partnership (referral, reseller, integration, co-marketing), incentivos y contratos básicos.

Identificar 10 partners potenciales; outreach a 5 con partnership one-pager.

Partnership one-pager + MOU boilerplate.


## 8. Métricas, pipeline & forecasting

Diseño de funnel (MQL → SQL → Opportunity → Close), conversion rates, ARR/MRR, LTV/CAC, sales cycle.

Construir pipeline en Sheets/CRM con tasas por etapa; crear forecast trimestral.

Dashboard simple (pipeline + forecast).


## 9. Automatización y tooling lean

CRM mínimo viable, sequences automáticas, lead scoring, integraciones básicas (Zapier).

Configurar pipeline en CRM (p. ej. Pipedrive/HubSpot Free), automatizar 1 workflow.

Configuración del CRM + runbook de uso.


## 10. Escalar y hiring para BD

Definir roles BD rep / AE / SDR, compensaciones (quota, OTE), onboarding 30/60/90.

Crear JD para 1 rol y plan de compensación.

JD + plan onboarding.


## 11. Growth experiments & retention 

Ciclos de experimentación (build-measure-learn), cohort analysis, retención inicial.

Diseñar 2 experiments (uno de adquisición, uno de activation/retention) y ejecutar el primero.

Plan de experimentos + métricas de éxito.


## 12. Integración, proyecto final y retro

Proyecto (1)

1. Ejecutar campaña outbound y reportar funnel y learnings.

2. Diseñar y pilotear partnership con forecast de revenue 6 meses.

3. Crear playbook completo (prospect → pilot → close → onboarding) + dashboard.


Documento + 6–8 slides + 1 página de next steps y riesgos.


## Lecturas

The Mom Test — Rob Fitzpatrick (entrevistas cliente).

Traction — Gabriel Weinberg & Justin Mares (canales).

Predictable Revenue — Aaron Ross (outbound).

Hooked — Nir Eyal (activation/engagement).

Blogs: SaaStr, First Round Review, Andreessen Horowitz posts.


## Habilidades técnicas

Excel/Sheets avanzado (fórmulas, modelado de revenue, sensitivity).

Uso básico de CRM (pipes, tareas, reportes).

SQL básico para consultas de usuarios/leads (si hay datos).

Analítica de producto (Mixpanel / PostHog / GA4): funnels y cohorts.

Escritura de propuestas/term sheets concisos.


## Métricas clave a medir

MRR/ARR, ARR growth rate.

CAC por canal, LTV estimado, LTV:CAC.

Conversion rates por etapa (outreach→meeting, meeting→POC, POC→paying).

Sales cycle medio (días).

% de churn en 30/90 días (si aplica).

Pipeline coverage (x veces la quota).


## Ejercicios recurrentes

Daily/Weekly: revisar pipeline y blockers.

Weekly: 5–10 outreach personalizados + 2 calls discovery.

Biweekly: retro de deals ganados/perdidos (post-mortem).

Monthly: run rate review + 1 experiment nuevo.


# Tech

B2B/B2D/B2C según convenga


## Objetivos

1. Validar y escalar canales repetibles compatibles con un producto tecnológico (APIs, SDKs, integraciones, marketplace).

2. Construir playbooks y procesos para ventas técnicas (SDR → AE → SE → Customer Success).

3. Diseñar y ejecutar pilotos técnicos (PoC/sandbox) con time-to-value corto.

4. Estructurar partnerships (ISV, cloud marketplace, integradores) y alianzas técnicas.

5. Medir señales producto-mercado (activation, TTFV, API usage) y optimizar unit economics.


## Kickoff y contexto tech

Define: etapa de la startup (pre-seed / seed / growth), modelo de negocio (SaaS, API-as-a-product, embedded), recursos (devs, SEs).

Entregable: One-pager con objetivo BD (ej. +$X MRR en 6 meses; 3 partnerships estratégicos; reducir TTFV a Y días).


## 1. Product-market fit técnico & ICP

10 entrevistas con usuarios técnicos y no técnicos; mapear workflows donde tu tech encaja.

Entregable: ICP técnico (stack, roles: CTO/Lead Dev/PO/Head Ops), 3 casos de uso prioritarios y hipótesis de valor técnico


## 2. Propuesta de valor técnica y mensajes

Enfoque: mensajes para developers, engineering managers y POs. Crear docs: quickstart, cheat-sheets, demo script.

redactar 3 variantes de quickstarts (0–5 min), 1 demo técnica de 3–5 min.


## 3. Developer experience (DX) y onboarding

Temas: sandbox, credentials, SDKs, API reference, example apps, SDKs language coverage.

Actividad: diseñar flujo TTFV (time-to-first-value). Medir steps y fricciones.

Entregable: checklist de DX + plan para reducir TTFV.


## 4. Outbound técnico y community outreach

Canales: developer communities, GitHub, StackOverflow, LinkedIn técnico, conferences/meetups.

Actividad: outreach a 50 equipos/maintainers; publicar 1 tutorial técnico / post.

Entregable: playbook de outreach técnico + plantilla de outreach (PR + email + GH issue tactico).


## 5. Discovery técnico y qualification (calificación técnica)

Framework: adaptar MEDDIC/BANT a señales técnicas (stack fit, security reqs, scale needs).

Actividad: 8 discovery calls con checklist técnico (infra, auth, SLA, compliance).

Entregable: scoring sheet técnico + script de discovery para SE/AE.


## 6. PoC / Pilot design y ejecución (sandbox-first)

Diseño: scope mínimo, success metrics técnicas + negocio, duración, recursos requeridos.

Actividad: lanzar 1 PoC con 1–3 clientes; instrumentar métricas (API calls, TTFV, errors, latency, business metric).

Entregable: template de PoC + plan de reporting diario/semana


## 7. Pricing técnico y modelos de monetización

Modelos: usage-based (per call), tiered, seat-based, hybrid; considerar metered billing y overage.

Actividad: simular 3 escenarios de pricing y su impacto en LTV/CAC.

Entregable: matriz de pricing recomendada + playbook para experiments de precio.


## 8. Partnerships técnicas (ISV / integradores / cloud)

Tipos: integraciones deep (SDK/connector), co-sell, marketplace listings (AWS/GCP/Azure), reseller.

Actividad: identificar 10 partners estratégicos; armar outreach y 3 propuestas de colaboración técnica.

Entregable: partnership one-pager + MOU básico


## 9. Sales engineering & enablement

Contenido: playbooks para SE, runbooks de demo, checklist de security/compliance (SOC2/ISO/GDPR según aplique).

Actividad: preparar demo env reproducible, template de RFP/security questionnaire.

Entregable: kit “SE-ready” (demo script + runbook + FAQ técnico-commercial).


## 10. Instrumentación, analítica y KPIs técnicos

Métricas claves: TTFV, API calls/day, success rate, error rate, trial → paid conv, activation, ARR/MRR, CAC, LTV, churn técnico.

Actividad: montar dashboard (Sheets/Looker/Metabase) con funnels técnicos+comerciales.

Entregable: dashboard pipeline + API usage dashboard.


## 11. Compliance, contratos y procurement enterprise

Temas: security questionnaire, SOW/PoC terms, IP, data residency, SLAs, procurement timelines.

Actividad: plantilla de contract + playbook para acelerar procurement.

Entregable: template de SOW + checklist de security reqs


## 12. Escalar y proyecto final

Proyecto (1):

1. Ejecutar 50-outreach + 3 PoCs + report completo (funnel, KPIs, lecciones).

2. Diseñar programa de marketplace + listado simulado y forecast.

3. Crear playbook completo para BD tech (prospect → PoC → close → onboarding → CS).

Entregable: documento + 6–10 slides + plan de scaling (hiring, tooling, KPIs).


## Lecturas

The Mom Test — para entrevistas.

Artículos sobre Developer Experience, API pricing (busca recursos de Stripe, Twilio sobre pricing y DX).

Blogs: AWS/GCP marketplace guides, posts de Stripe sobre metered billing, posts de Beam/Segment sobre DX.
(Si querés, te traigo links concretos y plantillas específicas.)


## Habilidades técnicas y tooling

Básicos: GitHub, Postman/Insomnia, curl, ejemplos SDK.

Analytics: Mixpanel/PostHog/Amplitude para activation funnels; Metabase/Looker/Sheets para reporting.

CRM: Pipedrive/HubSpot + integración con Jira/GitHub para tracking técnico.

Billing: Stripe/Chargebee para metered billing.

Automatización: Zapier/Make for lead workflows


## Métricas clave (tech-focused)

Time-to-first-value (TTFV) — objetivo: días/horas.

Trial → Paid conversion rate (PoC→paid).

API calls / active customer / month.

Mean time to integration (MTTI).

Churn técnico (bugs/infra) y churn comercial.

LTV, CAC, CAC payback


## Ejercicios y entregables recurrentes

10 entrevistas de usuarios técnicos por semana (durante primeras 3 semanas).

Implementar y documentar 1 integration sample (demo app) cada 2 semanas.

Ejecutar 1 PoC al mes y hacer post-mortem.

Mantener Decision Register y Playbook actualizado

# Value

##### Valor desde varias perspectivas: económica, financiera, estratégica, operacional y de cliente


## Objetivos 

##### “Valor” en contextos distintos (empresa, cliente, inversor, sociedad).

##### Construir un DCF sólido, calcular WACC, y valorar por múltiplos y EVA.

##### Medir y diagnosticar creación de valor (ROIC, EVA, Economic Profit, LTV/CAC, margen contribución). 

##### Identificar palancas estratégicas y operativas para aumentar el valor: precios, mix, escala, productividad, innovación.

##### Diseñar un plan de creación de valor con iniciativas, KPIs y roadmap.

##### Comunicar una recomendación de valor a stakeholders (board / inversores / equipo operativo).


# Preparación 

Plantillas de estados financieros; lista de fórmulas Excel esenciales.

Entregable: cargar 1 año de estados (empresa real o ficticia) en la plantilla.


# 1. Fundamentos: valor

Valor para el cliente vs. valor para el accionista vs. valor económico social; valor percibido y valor entregado.

Ejercicio de “mapa de valor” para un producto (beneficios, costos, alternativas).

Lectura: estrategia/valor


## Fundamentos del Valor

### 1. Definición de valor

##### Valor económico: la capacidad de generar flujos de caja futuros que exceden el coste de los recursos usados.

##### Valor para el cliente: beneficio neto percibido por el cliente (beneficios – costos/alternativas).

##### Valor para el accionista/inversor: crecimiento del patrimonio (precio de la acción + dividendos) reflejo del VAN (Valor Actual Neto) de flujos futuros.

##### Precio ≠ valor: Precio es lo que pagas hoy; valor es lo que justifica ese pago a futuro (flujos, utilidades, utilidad percibida).


### 2. Principios económicos centrales

##### 1. Valor presente: dinero hoy vale más que dinero mañana (time value of money).

##### 2. Riesgo y retorno: mayor riesgo exige mayor retorno esperado; el descuento recoge ese riesgo.

##### 3. Margen sobre coste: crear valor = aumentar ingresos a mayor ritmo que costes o reducir costes sin dañar el ingreso.

##### 4. Escala y palancas operativas: algunas economías de escala reducen coste unitario y crean valor incremental.

##### 5. Sostenibilidad: ventajas temporales crean valor; ventajas sostenibles (moats) crean valor prolongado.


### 3. Medición del valor

##### Flujo de Caja Libre (FCF / FCF to firm): efectivo disponible para proveedores de capital tras inversiones y working capital.

##### VAN / NPV (Net Present Value): suma de flujos descontados a una tasa que refleja el coste de capital.

##### WACC (coste promedio ponderado de capital): mezcla coste de deuda y equity. 

Fórmula:

```
WACC = (E/V)*Re + (D/V)*Rd*(1 - Tc)
```

##### ROIC (Return on Invested Capital): ROIC = NOPAT / Invested Capital. Compara con WACC: si ROIC > WACC, la empresa crea valor.

##### EVA (Economic Value Added): EVA = NOPAT - (WACC * Invested Capital) — valor económico generado en un periodo.

##### Múltiplos relativos: EV/EBITDA, P/E — útiles para comparables de mercado.

##### Unit economics: LTV (lifetime value), CAC (cost of acquisition), churn, payback period.

##### Margen contribución: precio menos coste variable; esencial para decisiones de pricing y escala.


### 4. Fórmulas

#### Terminal value (Gordon growth)

```
TV = FCF_next * (1+g) / (r - g).
```
g = tasa de crecimiento perpetuo; r = tasa de descuento.


#### LTV (suscripción simple)

```
LTV = (ARPU * Margin) / Churn_rate
```
(ARPU = ingreso medio por usuario en periodo).


### 5. Ejemplos

#### A — Terminal value (Gordon)

Supongamos: FCF actual = 10 (unidad monetaria), crecimiento perpetuo g = 3% = 0.03, tasa descuento r = 8% = 0.08.

1. FCF next = 10 * (1 + 0.03) = 10 * 1.03 = 10.3.

2. Diferencia r − g = 0.08 − 0.03 = 0.05.

3. Terminal value = 10.3 / 0.05.

4. 10.3 dividido 0.05 = 10.3 ÷ 0.05 = 206.

Resultado: TV = 206.


#### B — LTV en modelo de suscripción

Supongamos: ARPU mensual = 10, margen bruto sobre ARPU = 70% = 0.70, churn mensual = 5% = 0.05.

1. Contribución por usuario por mes = ARPU * margin = 10 * 0.70 = 7.

2. Número esperado de meses por cliente = 1 / churn = 1 / 0.05 = 20 meses.

3. LTV = 7 * 20 = 140.

Resultado: LTV = 140.


### 6. Principales palancas para crear valor

##### Mejorar pricing/value capture: trasladar valor percibido al precio con poco impacto en demanda.

##### Aumentar retención (reducir churn): incrementa LTV y reduce presión de CAC.

##### Reducir coste unitario (economías de escala o productividad).

##### Optimizar working capital (liberar cash vía inventarios, plazos).

##### CapEx eficiente: invertir donde ROIC > WACC.

##### Innovación y diferenciación: crear barreras sostenibles para competencia.


### 7. Riesgos comunes que destruyen valor

##### Sobrepagar en M&A sin sinergias reales.

##### Crecimiento barato pero no rentable (alto CAC, bajo LTV).

##### Incrementar ventas a costa de márgenes negativos (promociones destructivas).

##### Ignorar necesidades de reinversión (CapEx) y degradar el negocio.

##### Subestimar riesgo regulatorio o tecnológico.


### 8. Diagnóstico/evaluación en la creación de valor

##### 1. Calcula ROIC y compáralo con WACC. (ROIC > WACC → crea valor).

##### 2. Revisa FCF trends (creciente y estable → buen indicador).

##### 3. Mide unit economics: LTV : CAC ratio (ideal > 3x en muchos modelos SaaS).

##### 4. Evalúa sostenibilidad competitiva (moats, patentes, brand, network effects).

##### 5. Haz sensibilidad simple: ¿qué pasa si growth baja 2 p.p. o margen cae 3 p.p.?


### 9. Frameworks para valor 

##### DCF + sensibilidad (financiero).

##### Porter / cadena de valor (estratégico-operativo).

##### VRIO / RBV (recursos y capacidades sostenibles).

##### Unit-economics + cohort analysis (producto/cliente).


## Valor para el cliente 

### 1. Valor para el cliente = Beneficios percibidos − Costes percibidos

##### Beneficios: funcionales (ahorro de tiempo, dinero, mejor resultado), emocionales (confianza, estatus), sociales (reconocimiento), y de riesgo (menos incertidumbre).

##### Costes: precio monetario, tiempo, esfuerzo, riesgos (posibles fallos), coste de cambio.

##### Es percepción: Dos clientes con la misma experiencia pueden asignar valores distintos.


### 2. Componentes del valor

##### Resultado funcional (¿qué hace? ¿qué problema resuelve?).

##### Ahorros cuantificables (tiempo, dinero).

##### Mejora en experiencia (facilidad, conveniencia).

##### Riesgo/garantía (confianza, soporte).

##### Valor social/emocional (marca, orgullo de uso).


### 3. Cuantificar valor

1. Lista de beneficios monetizables
Ej.: ahorras tiempo → monetiza horas ahorradas.

2. Convierte beneficios en $/€/AR$ (si es posible).

3. Suma costes totales (precio + esfuerzo + riesgo).

4. Consumer surplus = WTP − Precio (si conoces WTP).

5. LTV (para modelos recurrentes) = (ARPU * margen) / churn (mensual) — útil para ver valor medio por cliente


#### Ej

##### Producto: software que automatiza tarea y ahorra 2 horas/semana a un profesional. Valor del tiempo = $25/h.

##### Horas ahorradas por semana = 2; Horas ahorradas por mes ≈ 2 × 4 = 8; Valor mensual del tiempo ahorrado = 8 × 25 = 200; Valor anual = 200 × 12 = 2,400.

##### Si el precio anual del software es $600, excedente del cliente = 2,400 − 600 = 1,800 → indica alto valor percibido y margen para subir precio o invertir en captación.


#### Ejemplo LTV

ARPU mensual = $15, margen = 60% = 0.6 → contribución mensual = 15 × 0.6 = 9.

Churn mensual = 4% = 0.04 → vida esperada en meses = 1 / 0.04 = 25.

LTV = 9 × 25 = 225.

Si CAC = 50 → LTV:CAC = 225 / 50 = 4.5 → buen ratio (regla práctica > 3).


### 4. Medir el valor

NPS (Net Promoter Score) — proxy de recomendación.

CSAT (satisfacción) y CES (esfuerzo).

Cohort retention / churn — retención por cohortes.

AOV (average order value), repeat purchase rate, share of wallet.

Pruebas directas de WTP: Van Westendorp (price sensitivity meter), Conjoint / discrete choice, experimentos A/B de precio.


### 5. Frameworks

Value Proposition Canvas — cliente (jobs, pains, gains) vs producto (pain relievers, gain creators).

Jobs-to-be-Done (JTBD) — enfoca en el trabajo que el cliente contrata tu producto para hacer.

Kano model — categoriza atributos (básicos, de rendimiento, encantadores).

Customer Journey Mapping — detecta puntos donde añadir o destruir valor.


### 6. Palancas para aumentar el valor percibido

##### Aumentar beneficios: mejorar funcionalidad, reducir tiempo, añadir features que importen.

##### Reducir costes: bajar fricción (UX), simplificar onboarding, reducir tiempo de integración.

##### Reducir riesgo: garantías, pruebas gratuitas, soporte, casos de éxito.

##### Capturar valor mejor: value-based pricing (fijar precio según WTP) en vez de cost-plus.

##### Segmentación: ofrecer versiones/paquetes para distintos WTP y extraer más surplus.


### 7. validar valor

##### 1. Identifica la hipótesis de valor (ej.: “la automatización ahorra ≥2h/sem”).

##### 2. Selecciona metricas: tiempo ahorrado (medible), CSAT, tasa de conversión.

##### 3. Haz piloto con 20–50 usuarios y registra before/after.

##### 4. Si cuantificas tiempo, monetiza y compara con precio → calcula surplus.

##### 5. Itera en el producto / precio.


### 8. Checklist

¿Cuál es el job principal del cliente?

¿Qué beneficios son cuantificables? (lista y números)

¿Qué costes/ fricciones existen?

¿Cuál es la WTP estimada por segmento?

¿LTV vs CAC? ¿Ratio aceptable?

¿Qué experimentos puedes correr en 2 semanas para validar la hipótesis?


### 9. Ej propuesta de valor

```
Para [segmento] que necesita [job], nuestro [producto] ofrece [beneficio principal cuantificable] porque [cómo lo hace], a diferencia de [alternativa], que [limitación].
```  

```
“Para managers que pierden tiempo en reportes, nuestra herramienta automatiza el cálculo y reduce 8 horas/mes por usuario, porque integra datos y genera reportes listos para presentar; a diferencia de hojas manuales, elimina errores y ahorra tiempo.”
```


## Valor para el accionista 

##### Incremento en la riqueza de los propietarios de la empresa.

##### Se mide por la capacidad de la compañía de generar flujos de caja por encima del coste del capital y de convertir esos flujos en retornos tangibles (precio de acción + dividendos).


### 1. Definición: Valor para el accionista = (Precio de mercado hoy + dividendos recibidos) − inversión inicial

En términos corporativos y de gestión:

##### Crear valor = generar retornos sobre el capital invertido (ROIC) superiores al coste de ese capital (WACC) de forma sostenible.


### 2. Métricas para accionistas

##### ROIC (Return on Invested Capital) = NOPAT / Invested Capital. Indica eficacia operativa en usar capital.

WACC (Weighted Average Cost of Capital) = coste medio ponderado de deuda y capital.

EVA (Economic Value Added) = NOPAT − (WACC × Invested Capital) → valor económico creado en el periodo.

NPV / VAN (Net Present Value) → valor actual neto de una inversión o proyecto.

TSR (Total Shareholder Return) = (P_end − P_start + dividends) / P_start.

EPS, dividend yield, payout ratio (importan como transmisión de valor al mercado).

##### Free Cash Flow (FCF) y su crecimiento: fuente última de valor


### 3. Regla práctica

##### Si ROIC > WACC, la empresa crea valor económico. Si ROIC < WACC, destruye valor. 

##### Por eso se priorizan inversiones con ROIC esperado superior al coste de capital.


### 4. Palancas para aumentar valor para el accionista

##### Aumentar márgenes operativos (mejor pricing, mix, productividad).

##### Invertir en proyectos con ROIC > WACC.

##### Mejorar eficiencia del capital (optimizar working capital, reducir CapEx innecesario).

##### Crecimiento rentable (no crecimiento a cualquier coste).

##### Buen gobierno y alineación de incentivos (stock-based comp, métricas condicionadas a EVA/ROIC).

##### Buybacks / dividendos cuando la acción está infravalorada y no hay mejores usos del capital.


### 5. Riesgos y problemas de agencia

##### Gerentes persiguen crecimiento/ingresos en lugar de creación de valor (métrica equivocada).

Overpay en adquisiciones (destruye valor si sinergias no materializan).

Politicas de corto plazo para inflar EPS pueden dañar valor a largo plazo.

##### La solución: métricas alineadas (ROIC, EVA), horizonte de evaluación adecuado, y transparencia.


### 6. Ejemplos

#### A — ROIC y EVA

NOPAT = 50 (unidad monetaria)

Invested capital = 400

WACC = 8% = 0.08

Cálculos:

ROIC = NOPAT ÷ Invested capital = 50 ÷ 400.
50 ÷ 400 = 0.125 → ROIC = 12.5%.

EVA = NOPAT − (WACC × Invested capital)
WACC × Invested capital = 0.08 × 400 = 32.
EVA = 50 − 32 = 18.

Interpretación: ROIC (12.5%) > WACC (8%) → la empresa crea valor; EVA positivo = 18 unidades de valor económico ese año.


#### B — NPV simple (inversión)

Supón un proyecto con flujos: 10 al final de cada año por 3 años, descuento r = 8% = 0.08, inversión inicial = 25.

Cálculo de valores presentes:

PV1 = 10 ÷ (1.08) = 10 ÷ 1.08 = 9.259259... → 9.259 (redondeado a 3 decimales).

PV2 = 10 ÷ (1.08²) = 10 ÷ 1.1664 = 8.573... → 8.573.

PV3 = 10 ÷ (1.08³) = 10 ÷ 1.259712 = 7.939... → 7.938 (redondeando).

Suma PVs = 9.259 + 8.573 + 7.938 = 25.770 (aprox).

NPV = suma PVs − inversión inicial = 25.770 − 25 = 0.771 (aprox).

Interpretación: NPV positivo (≈0.77) → proyecto añade valor al accionista (al menos según estas hipótesis).


#### C — TSR (Total Shareholder Return)

Datos:

Precio inicio = 100

Precio final = 120

Dividendos recibidos durante el año = 3

TSR = (120 − 100 + 3) ÷ 100 = 23 ÷ 100 = 23%.

Interpretación: accionista ganó 23% ese año (ganancia de capital + dividendos).


### 7. Creación de valor en precio de acción

##### El precio refleja expectativas sobre flujos futuros descontados y el riesgo percibido

##### Si la empresa mejora ROIC sostenidamente y comunica planes creíbles (y ejecuta), los inversores actualizarán expectativas y el precio subirá

##### Pero la comunicación, credibilidad y evidencia (cash flows, guía, métricas) son críticas.


### 8. Checklist valor de acción 

##### 1. ¿ROIC actual vs WACC? ¿Tendencia?

2. ¿Por qué proyectos estamos invirtiendo? ¿ROIC esperado > WACC?

##### 3. ¿Tenemos unit-economics claros y cohort analyses para nuevos productos?

4. ¿Cómo optimizamos capital de trabajo y CapEx?

##### 5. ¿Cómo alinear incentivos (KPIs) con creación de valor (EVA/ROIC)?

6. ¿Comunicamos progresos con transparencia al mercado?



## Valor económico social

##### Beneficio neto que una actividad, proyecto o empresa genera para la sociedad — más allá del beneficio privado

##### Incluye efectos económicos, ambientales y sociales (empleo, salud, educación, reducción de emisiones, bienestar, etc.).

##### Se busca cuantificar y, cuando es posible, monetizar esos beneficios para comparar con los costes y tomar decisiones informadas


### 1. Definición: Valor económico-social = beneficios sociales netos producidos por una actividad (beneficios sociales agregados − costes sociales agregados).

Ayuda a gobiernos, ONGs, empresas e inversores a decidir qué proyectos apoyar, justifica políticas públicas, mide impacto y permite comparar alternativas con criterios de eficiencia social (no sólo financieros).


### 2. Marcos y conceptos

##### 1. Teoría del cambio / Logic model: mapea actividades → outputs → outcomes → impactos. Crucial para saber qué medir.

##### 2. Cost-Benefit Analysis (CBA): compara beneficios sociales monetizados con costes; resultado usual: beneficio neto o ratio beneficio/coste.

##### 3. Social Return on Investment (SROI): variante práctica: SROI = PV(beneficios sociales) / PV(inversión), se reporta como ratio (ej. 3:1) y suele ajustar por contrafactuales.

##### 4. Indicadores de bienestar y sostenibilidad: GDP/GPI, QALYs/DALYs (salud), reducción de emisiones (ton CO₂e), empleo neto, etc.

##### 5. Ajustes críticos: deadweight (qué hubiese ocurrido sin la intervención), attribution (qué parte del resultado se debe a otras causas), displacement (si un beneficio desplaza otro), drop-off (declinación en el tiempo).


### 3. Monetizar beneficios sociales

Revealed preferences: observar decisiones reales del mercado (precios, salarios).

Stated preferences: encuestas de disposición a pagar (WTP).

Avoided cost / Cost-savings: costos evitados por la intervención (p. ej. menos hospitalizaciones).

Productivity gains: aumento de ingresos laborales por mejor salud/educación.

Shadow pricing: usar precios proxy cuando no hay mercado.

Valoración por contingent valuation / conjoint (cuando aplica).

Cost per QALY / DALY en salud pública.


### 4. Medición práctica

1. Definir alcance y stakeholders.

2. Mapear la teoría del cambio.

3. Elegir indicadores y periodo temporal.

4. Recolectar evidencia (baseline + seguimiento).

5. Monetizar impactos usando técnicas apropiadas.

6. Ajustar por deadweight/attribution/displacement/drop-off.

7. Descontar beneficios futuros a PV social (e.g., r social).

8. Calcular métricas: Net Social Benefit = PV(Beneficios) − PV(Costes); SROI = PV(Beneficios)/PV(Costes).

9. Reportar incertidumbre y sensibilidad.


### 5. Ejemplo: SROI simple

##### Proyecto: programa de formación laboral que cuesta 2.000 (moneda) por participante hoy

##### Esperamos que cada participante gane 1.200 adicionales por año durante 3 años gracias al empleo mejor remunerado

##### Usaremos tasa de descuento social 5%.

##### No aplicamos ajustes por deadweight/attribution en este ejemplo simple (en práctica sí deben aplicarse).

##### En la práctica ajustarías por deadweight, attribution, y harías análisis de sensibilidad


### 6. Dificultades y peligros

Monetizar lo intangible puede introducir grandes supuestos (riesgo de exagerar).

Contrafactual: sin una buena línea de base/control, la atribución es débil.

Overclaiming: no descontar deadweight o atribución inflará el SROI.

Elección de la tasa de descuento social: tasas más bajas favorecen proyectos de largo plazo (p. ej. clima).

Sesgos de medición o interés de stakeholders pueden distorsionar resultados.


### 7. Incorporación del valor social - Estrategias

##### Shared Value (Porter & Kramer): diseñar productos/operaciones que generen beneficios sociales y económicos.

ESG y reporting integrado: medir impacto ambiental/social y comunicarlo a inversores.

Iniciativas con KPIs sociales (empleo local, reducción emisiones, inclusión financiera) y vincular incentivos ejecutivos.

Instrumentos de financiación social: SIBs (social impact bonds), blended finance, fondos de impacto.


### 8. Checklist valor social

##### ¿Cuál es el outcome que quieres medir (p. ej. aumento de ingresos, reducción de admisiones hospitalarias)?

##### ¿Qué evidencia hay del tamaño del efecto y su duración?

##### ¿Cómo vas a monetizar ese outcome? (productivity gain, avoided cost, WTP…)

¿Qué porcentaje del efecto es atribuible al proyecto? (deadweight/attribution)

¿Cuál es el horizonte temporal y la tasa de descuento?

¿Hiciste análisis de sensibilidad (±20% en supuestos principales)?

¿Documentaste supuestos y limitaciones para terceros?


## Valor Percibido 

### Definición: Valor percibido = Beneficios percibidos − Costes percibidos

##### Valoración subjetiva que un cliente hace de tu producto/servicio: no es solo lo que entregas objetivamente, sino cómo lo percibe el cliente en su contexto.


### 1. Importancia

##### Es la base de la disposición a pagar (WTP).

##### Determina conversión, retención y recomendación.

##### Permite aumentar precio sin perder demanda cuando el cliente percibe alto valor.

##### Es más fácil y, a menudo, más rentable mejorar la percepción que cambiar costes/producto.


### 2. Componentes

##### Beneficios funcionales: utilidades directas (ahorro de tiempo/dinero, rendimiento).

##### Beneficios emocionales: confianza, orgullo, tranquilidad.

##### Beneficios sociales: estatus, pertenencia, aprobación.

##### Costes percibidos: precio, esfuerzo (tiempo/uso), riesgo (fallos, soporte), coste de cambio.

##### Señales/heurísticas: marca, testimonios, reviews, packaging, precio de referencia.


### 3. Biases y principios psicológicos que afectan la percepción

##### Anclaje: la primera cifra que ve el cliente (precio mostrado) influye su juicio.

##### Efecto arrastre/social proof: reseñas y usuarios influyen fuertemente.

##### Decoy/escuela del ejemplar: agregar una opción “cebo” cambia elección.

##### Framing y loss aversion: presentar beneficios como evitación de pérdidas funciona mejor que como ganancias pequeñas.

##### Simplicidad / costo cognitivo: menos fricción = mayor valor percibido.


### 4. Medir valor percibido

##### Encuestas directas: WTP, Conjoint, Van Westendorp.

##### Indicadores de comportamiento: tasa de conversión, CTR, tasa de carrito abandonado, retención, NPS.

##### Experimentos: A/B test de mensajes, precios, packaging.

##### Entrevistas cualitativas: para entender jobs-to-be-done y pains/gains.

##### Cohort analysis: ver si percepción cambia con tiempo/uso.


### 5. Cuantificar valor percibido

Supongamos un software que ahorra 5 horas/mes a un profesional y el valor del tiempo para ese cliente es $20/h.

El precio mensual del software es $40

Queremos calcular el excedente del cliente anual (valor percibido monetizado − precio).


Cálculo:

1. Horas ahorradas por mes = 5.

2. Valor por hora = $20.

3. Beneficio mensual = 5 × 20 = 100.
(cinco por veinte = cien)

4. Beneficio anual = 100 × 12 = 1,200.

5. Precio mensual = $40 → precio anual = 40 × 12 = 480.

6. Excedente anual = 1,200 − 480 = 720.

##### Interpretación: el cliente percibe un beneficio monetario anual de $1,200; tras pagar el producto queda un excedente de $720 → indica alto valor percibido y espacio para optimizar precio/paquetes.


### 6. Palancas concretas para aumentar el valor percibido

##### Mejorar el framing: muestra ahorro anual, no solo mensual.

##### Probar precios ancla: presentar una versión “premium” cara hace parecer razonable la estándar.

##### Garantías / pruebas gratis: reducen riesgo percibido.

##### Casos de éxito y testimonios: aumentan credibilidad.

##### Packaging de beneficios: bundle features para crear sensación de “más por menos”.

##### Reducir fricción: UX, onboarding, soporte — baja el coste percibido.

##### Segmentación de mensajes: comunicar el beneficio relevante por segmento (ej. ahorro de tiempo vs. estatus).

##### Crear escasez / urgencia con cuidado (ofertas temporales legitimas).


### 7. Ej Práctico/experimento

##### 1. A/B test de framing: página A muestra “ahorras $1,200/año”, página B muestra “pagas $40/mes”. Mide conversión.

##### 2. Prueba de garantía: ofrecer devolución 30 días vs. control. Mide tasa de compra y devolución.

##### 3. Decoy pricing test: añade una opción cara o mala para ver si crece la elección de la target


### 8. Checklist propuesta de valor percibido

##### ¿Qué job resuelve? (claro y conciso)

##### ¿Qué beneficios son cuantificables? (lista + números)

##### ¿Qué fricciones/risgos percibe el cliente?

##### ¿Qué señales de confianza muestras? (testimonios, prensa, logos)

##### ¿Tu pricing está anclado a beneficios o a costos?

##### ¿Puedes segmentar mensajes por WTP?

##### ¿Tienes experimentos en marcha para validar?


### 9. Comunicar valor percibido

```
Para [segmento] que necesita [job], nuestro [producto] entrega [beneficio cuantificable] al reducir [pain] — probado por [prueba/testimonial] — todo por [precio/plan].
```

```
Ejemplo: “Para gerentes que pierden tiempo en reportes, nuestra herramienta reduce 8 horas/mes por usuario y elimina errores, probado con clientes como X — desde $49/mes.”
```


## Valor entregado 

### Definición: Valor entregado = los beneficios reales y observables que tu producto/servicio efectivamente proporciona al cliente en su uso (resultados concretos, rendimiento, fiabilidad, ahorro realizado).

##### Es el “valor objetivable” — lo que el cliente realmente recibe — distinto de lo que percibe.


### 1. Valor entregado vs percibido

##### Prometido: lo que dices que vas a entregar (marketing/contrato).

##### Entregado: lo que realmente recibe el cliente (medible).

##### Percibido: cómo el cliente interpreta/valora lo entregado.
##### Ideal: prometido ≈ entregado y entregado ≈ percibido (siempre hay fricción entre los tres).


### 2. Componentes

##### Outcome funcional: resultado concreto (ej.: reducción de tiempo, menos errores, mayor producción).

##### Rendimiento y calidad: uptime, precisión, tasa de defectos.

##### Disponibilidad / tiempo de entrega: on-time delivery, lead time.

##### Soporte y resolución: TTR (time to resolve), first-contact resolution.

##### Eficiencia económica real: ahorros reportados, incremento de ingresos atribuible al producto.

##### Adopción / uso efectivo: % usuarios activos, funciones utilizadas (si no usan, no se entrega valor).


### 3. Medir el valor entregado

##### Métricas operativas: uptime %, entregas a tiempo %, tasa de defectos, TTR.

Métricas de uso: DAU/MAU, % de cohort que alcanza X acción, feature adoption.

##### Métricas económicas del cliente: ahorro anual real, incremento de ingreso, reducción de costos operativos.

Métricas de resultado: reducción en ciclos (p. ej. tiempo de proceso), mejoras en productividad medibles.

##### Validación cliente: casos de uso con evidencia (before/after), encuestas de impacto (no de satisfacción).


### 4. Ejemplo (B2B SaaS - automatización de tareas)

Hipótesis/comprobado:

Horas ahorradas esperadas por usuario/mes (prometido) = 8.

Horas efectivas medidas tras 3 meses = 6.

Valor hora del usuario = $25/h.

Precio anual del plan por usuario = $600.


Cálculo del valor entregado monetizado

1. Horas ahorradas por mes (medidas) = 6.

2. Valor mensual del ahorro = 6 × 25 = (6 × 20) + (6 × 5) = 120 + 30 = $150.

3. Valor anual del ahorro = 150 × 12 = (150 × 10) + (150 × 2) = 1,500 + 300 = $1,800.

4. Precio anual pagado = $600.

5. Excedente entregado = Valor anual entregado − Precio = 1,800 − 600 = $1,200.

##### Interpretación: el producto está entregando $1,800/año de beneficio real y el cliente obtiene un excedente de $1,200 — buen indicador de valor entregado tangible, aunque menor que la promesa original (6 vs 8 h).


### 5. Auditar entrega de valor

##### 1. Define outcomes medibles (ej.: “reducir tiempo X en Y% en 90 días”).

##### 2. Mide baseline antes de implementar.

##### 3. Trackea uso y outcomes por cohort y por cliente.

##### 4. Recolecta evidencia cuantitativa (logs, métricas) y cualitativa (entrevistas).

##### 5. Compara con promesa y reporta gap (prometido − entregado).

##### 6. Ajusta producto/onboarding y repite.


### 6. Palancas para aumentar el valor entregado

##### Mejor onboarding & training: reduce time-to-value.

##### Instrumentación del producto: medir uso real y outcomes para detectar fricción.

##### Soporte proactivo / Customer Success: intervenciones tempranas en clientes con baja adopción.

##### Optimizar reliability/performance: uptime, latencia, tasas de error.

##### Integraciones: reducir trabajo manual y errores (API, conectores).

##### Iteración en features de mayor impacto (priorizar según impacto real, no solo solicitudes).

##### Garantías y SLAs: comprometerse públicamente a métricas y recompensar incumplimientos.


### 7. Riesgos que reducen el valor entregado

##### Baja adopción → producto técnicamente bueno pero sin efecto.

##### Promesas exageradas en marketing → brecha entre prometido y entregado.

##### Mala instrumentación → no puedes demostrar que entregaste valor.

##### Soporte ineficiente → clientes no extraen beneficios completos.


### 8. Checklist - valor entregado

##### ¿Cuál es el outcome principal que vendemos? (1 frase)

##### ¿Cómo lo medimos objetivamente (métrica y fuente de datos)?

##### ¿Tenemos baseline antes del uso?

##### ¿Medimos adoption y outcome por cohort?

##### ¿Mostramos al cliente el resultado (dashboard / report)?

##### ¿Tenemos un plan de acción cuando el outcome es menor al prometido?


### 9. Experimentar para validar/elevar valor entregado

##### Piloto con 10 clientes, medir baseline → 30 días → outcome; implementar onboarding mejorado en 5 clientes y comparar.

##### A/B en guía de primeros 7 días: versión A = checklist paso a paso; versión B = onboarding guiado por CS; medir tiempo hasta primer outcome.

##### Integración rápida para 5 clientes (p. ej. import de datos) y medir aumento en uso y outcome.


### 10. Reporte para mostrar al cliente

##### Outcome objetivo y baseline.

##### Resultado entregado (números antes/después).

##### Métrica de adopción (usuarios activos, % features clave usados).

##### ROI real para el cliente (ahorro anual / incremento ingreso) y payback.

##### Plan de acciones: próxima iteración y support.


## Mapa de valor 



## Producto: beneficio, costos y alternativas



## Estrategia/valor




# 2. Principios económicos y contables

VAN, flujo de caja libre, costo de oportunidad, margen contribución, coste hundido.

Preparar estado de flujos y reconciliar utilidades contables vs. cash.

Breve memo (1 página) explicando diferencias contabilidad vs. cash.


# 3. Valuación financiera: DCF

Proyección de cash flows, NOPAT, CapEx, cambios en working capital, elección horizonte y terminal value (Gordon / exit multiple).

Construir DCF en Excel con hipótesis.

Entregable: DCF base (modelo) para la empresa elegida


# 4. Costo de capital y sensibilidad

WACC (deuda, equity, betas), estructura de capital óptima, sensibilidad (tasa, crecimiento, margin).

Calcular WACC y hacer análisis de sensibilidad / escenarios.

Entregable: tabla de sensibilidad + gráfico tornado.


# 5. Valuación relativa y métricas económicas

Múltiplos (EV/EBITDA, P/E), circunstancias donde son útiles, limitaciones; EVA / Economic Profit / ROIC.

Seleccionar comparables, ajustar múltiplos y calcular EVA.

Entregable: valoración por múltiplos y comparación con DCF.


# 6. Valor del cliente y pricing

Cómo medir valor para el cliente, willingness-to-pay, metodologías de fijación de precios (cost-plus, value-based, dynamic).

Diseñar experimento A/B simple de precios; calcular impacto en margen y LTV.

Entregable: plan de pricing + simulación de impacto (Excel).


# 7. LTV, CAC y modelo unit-economics

Lifetime Value, Customer Acquisition Cost, churn, cohort analysis, payback period.

Construir cohort table y modelo LTV en Excel.

Entregable: dashboard de unit-economics (LTV:CAC, payback).


# 8. Estrategia y operaciones para crear valor

##### Estrategia competitiva y propuestas de valor

Ventaja competitiva (cost, differentiation), cadenas de valor, Porter 5 forces, recursos y capacidades (RBV).

Análisis estratégico de la empresa: fuerzas competitivas + mapa de actividades.

Entregable: 1–2 páginas con palancas estratégicas para crear valor.


# 9. Operaciones, productividad y mejora continua

Palancas operativas que incrementan cashflow: OPEX optimization, CapEx efficiency, working capital management, economía de escala.

Identificar 3 iniciativas operativas con impacto en flujo de caja y estimar efecto.

Entregable: business case rápido (costos, timeline, NPV).


# 10. Transacciones y gobernanza

##### M&A, carve-outs, earn-outs y estructuras de deal

Cómo crean (o destruyen) valor las adquisiciones; integración; earn-outs; carve-outs; due diligence financiera.

Actividad: analizar un caso real o hipotético de adquisición: sinergias, riesgos y valoración proforma.

Entregable: Memo de 2 páginas con valoración proforma y recomendación.


# 11. Implementación, métricas y presentación

##### KPIs, OKRs y dashboards

Cómo traducir iniciativas en KPIs (leading vs lagging), diseñar dashboard financiero-operativo.

Construir dashboard en Excel/Google Sheets con KPIs clave (ROIC, EVA, LTV, churn, customer margin).

Entregable: dashboard interactivo + guía de uso.


# 12. Capstone: plan de creación de valor

Consolidación: diagnóstico, propuesta de iniciativas priorizadas, proyecciones y gobernanza.

Entregable final: Valoración completa + Plan de creación de valor (6–10 páginas) que incluya DCF actualizado, multiples, 3–5 iniciativas con business cases, KPIs y roadmap 12–24 meses.


# Lecturas

##### Valuation: Measuring and Managing the Value of Companies — McKinsey / Koller et al. (modelo DCF y corporate finance aplicado).

##### Investment Valuation — Aswath Damodaran (profundiza técnicas de valuación).
 
##### Competitive Strategy — Michael Porter (marco estratégico).

##### The Innovator's Dilemma — Clayton Christensen (para innovación y creación de valor disruptiva).

##### Artículos académicos/ejecutivos sobre ROIC, EVA y value-based management (busca “EVA Stern Stewart” y “value-based management McKinsey”).


# Herramientas

Excel avanzado: tablas dinámicas, fórmulas financieras, escenarios, data tables, macros simples.

Modelado financiero: plantillas DCF, sensibilidad, consolidación proforma.

SQL / Python (opcional): análisis de cohortes y dashboards reproducibles (pandas + matplotlib).

Presentación: slides claros, executive summary + annex con modelos.


# Ejercicios

Plantilla de DCF con checklist (supuestos, validación de números, conciliación con contabilidad).

Template de cohort LTV/CAC.

Checklist de due diligence financiero (capex, contratos, pasivos contingentes, working capital).

Dashboard KPI en Google Sheets



# Startup




# Corporación 

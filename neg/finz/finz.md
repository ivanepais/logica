# Finanzas

Desde fundamentos hasta temás avanzados como valoración, financiación, M&A, riesgos y gobierno


Objetivo: 

Leer e interpretar estados financieros con criterio corporativo.

Construir modelos financieros (proyecciones, DCF, LBO, M&A simple).

Calcular y aplicar WACC, costo de capital, NPV, IRR y valorar empresas por DCF y comparables.

Evaluar decisiones de inversión, estructura de capital y política de dividendos.

Entender gestión de tesorería, working capital y riesgos financieros.

Preparar un caso práctico / pitch de inversión empresarial.


# 1. Fundamentos contables y financieros

Dominar balance, PY/RE, flujo de caja; relación entre ellos.

Principios contables básicos, registro de operaciones, conciliaciones, provisiones, CAPEX vs OPEX, EBITDA vs flujo libre.

Reconstruir estados financieros desde transacciones; ejercicio de análisis vertical/horizontal.


## Principios contables básicos

Entradas contables, efectos en estados, relación con flujo de caja y valoración


### 1. Base de acumulación (accrual vs cash)

Reconocer ingresos y gastos cuando se generan (devengo), no cuando entra/sale el efectivo.

Importancia: 

Muestra el desempeño económico real del periodo

Es necesario para comparar resultados y calcular márgenes.

##### Ej: Vendes servicios en diciembre pero cobras en enero → reconoces ingreso en diciembre (devengo).

Entrada contable típica (venta a crédito):

Débito: Cuentas por cobrar
Crédito: Ingresos por ventas


### 2. Partida doble / ecuación contable

##### Toda transacción afecta al menos dos cuentas; activo = pasivo + patrimonio.

Importancia:

Asegura conciliación y que el balance siempre cuadre

Esencial para modelado 3-statement.

Ej: tomar un préstamo:
Débito: Caja (activo)
Crédito: Préstamo bancario (pasivo)


### 3. Principio del costo histórico

##### Registrar activos al costo de adquisición (no a valor de mercado), salvo revalorizaciones permitidas.

Importancia: 

Evita fluctuaciones arbitrarias en el balance; pero exige ajustes (impairment) si hay pérdidas permanentes.

Impacto en las finanzas: 

Afecta valor contable, ratios de apalancamiento y cálculos de ROE/ROA.


### 4. Devengo de ingresos y matching (coincidencia)

##### Emparejar ingresos con los gastos incurridos para generarlos en el mismo periodo.

Importancia: 

Permite medir correctamente la rentabilidad del periodo (margen bruto, EBITDA).

Ej: costos de producción reconocidos cuando se reconoce la venta del producto.


### 5. Prudencia / conservadurismo

##### Reconocer pérdidas probables tan pronto como sean razonablemente estimables; reconocer ganancias sólo cuando estén realizadas

Importancia: 

##### Evita sobrevaluaciones y da un margen de seguridad para acreedores/inversores.

##### Ej: provisión por cuentas incobrables antes de confirmar el impago.


### 6. Consistencia

##### Usar las mismas políticas contables de un periodo a otro salvo cambio justificado.

Importancia: 

Facilita comparabilidad temporal y análisis de tendencias; cambios requieren divulgación y reexpresión.


### 7. Materialidad

##### Sólo es necesario seguir reglas estrictas cuando el error o la omisión pueda influir en las decisiones económicas de usuarios.

Importancia: 

Ayuda a priorizar controles y revelar lo que realmente afecta decisiones de inversores/acreedores.


### 8. Plena revelación / transparencia

##### Revelar en notas toda información relevante (políticas contables, juicios, contingencias).

Importancia: 

##### Los analistas y acreedores dependen de estas notas para ajustar supuestos y estimaciones (ej.: contingencias legales).


### 9. Unidad de negocio / entidad contable

##### Los estados financieros se preparan por la entidad económica, separando patrimonio personal y empresarial.

Importancia: 

##### Esencial para cap tables, reporting y auditoría.


### 10. Periodicidad

##### La información se presenta en periodos definidos (mensual, trimestral, anual).

Importancia: 

##### Planificación financiera, reporting a inversores y cumplimiento de covenants.


### 11. Sustancia sobre forma

##### Registrar transacciones según su realidad económica, no sólo su forma legal.

Ej: 

Un contrato tipo “sale and leaseback” puede tratarse como financiamiento si la sustancia es esa.

Importancia: 

##### Impacta valoración, apalancamiento y cumplimiento de covenants.


### 12. Relevancia y fiabilidad

##### La información debe ser útil (relevante) y verificable/confiable.

Importancia: 

##### Soporta decisiones de inversión, crédito y valuación.


### Efectos prácticos

#### 1. Depreciación / Amortización

No es salida de caja, reduce utilidad contable y base imponible → afecta impuestos y flujo de caja operativo (se suma de vuelta en cash-flow).

En modelos: Net Income → + Depreciación → ± ΔWorking Capital → - Capex = Free Cash Flow.


#### 2. Provisiones y estimaciones (bad debt, garantía)

Reconocen pérdidas esperadas → reducen resultado pero son conservadoras; pueden activar covenant breaches si mal estimadas.


#### 3. Ingresos diferidos / deferred revenue

Efecto: caja recibida hoy, ingresos reconocidos en el futuro → aumenta liquidez pero no lucro inmediato; afecta cálculo de NRR/ARR en startups.


#### 4. Impairment (deterioro de activos)

Una pérdida por impairment reduce patrimonio y utilidad; no afecta caja inmediata pero sí ratios y percepciones de riesgo.


### Valoración y análisis financiero

#### 1. Cuenta vs Cash: La utilidad contable ≠ flujo de caja

Los modelos de valoración (DCF) deben usar Free Cash Flow (no sólo EBITDA o Net Income) y reconcilian con estados contables.


#### 2. Covenants y presentación

Bancos revisan ratios contables (Debt/EBITDA, Interest Coverage) en base a estados — políticas contables (p. ej. capitalizar vs expensar) cambian esos ratios.


#### 3. Comparabilidad

Distintas políticas (IFRS vs US GAAP, o elecciones contables) requieren ajustes para comparar empresas/periodos.


#### 4. Transparencia

Notas y revelaciones permiten ajustar supuestos en valoración (pasivos contingentes, arrendamientos, etc.).


### Entradas contables frecuentes

Venta contado: Débito Caja / Crédito Ventas.

Venta a crédito: Débito CxC / Crédito Ventas.

Cobro de CxC: Débito Caja / Crédito CxC.

Compra de activo (cash): Débito Activo fijo / Crédito Caja.

Préstamo recibido: Débito Caja / Crédito Préstamos.

Pago de intereses: Débito Gastos financieros / Crédito Caja.

Provisión incobrable estimada: Débito Gasto por incobrables / Crédito Provisión CxC.



### Checklist para un financiero (CFO / analista): principios contables

1. ¿Políticas contables están documentadas y consistentes?

2. ¿Hay estimaciones significativas (impairments, provisiones) y están apoyadas por evidencia?

3. ¿Ingresos reconocidos bajo devengo y coinciden con soporte contractual?

4. ¿Reconciliación Net Income ↔ Cash Flow clara (dep, amort, cambios WC, capex)?

5. ¿Impacto de políticas contables en covenants y ratios clave revisado?

6. ¿Notas y revelaciones suficientes para valoración y due diligence?


### Ej: Principios Contables

3-statement

Rs: Información planteada e importancia

#### 1. Income Statement muestra Revenue → Net Income (incluye Depreciación e Intereses).


#### 2. Cash Flow parte del Net Income, le suma Depreciación (no es salida de caja)

Ajusta por ΔWorking Capital (ΔAR, ΔInventory, ΔAP) y por Capex.

Además incluye efectos de Debt Proceeds y Debt Repayments.


#### 3. Balance Sheet refleja Cash final que cuadra con el Ending Cash del Cash Flow Statement

También muestra deuda y PP&E (con acumulación de depreciación).


En las plantillas: 

Income Statement, Balance Sheet, Cash Flow Statement y Assumptions

Al editarlos/cambiar valores se ven los efectos automáticamente



### Modelado 3-statement

##### Consiste en construir los tres estados financieros interconectados

##### Income Statement (P&L), Balance Sheet y Cash Flow Statement de forma dinámica en una hoja de cálculo para proyectar el desempeño futuro de una empresa y poder analizar impacto de decisiones (capex, deuda, pricing, etc.). 

Reglas de enlace, comprobaciones obligatorias, problemas comunes y buenas prácticas.


#### Componente de cada estado 

##### 1. Income Statement (Cuenta de resultados): ingresos, costos, gastos, depreciación, intereses, impuestos → Net Income

##### 2. Balance Sheet (Balance): activos (cash, AR, inventario, PPE neto), pasivos (AP, deuda) y patrimonio (equity, RE).

##### 3. Cash Flow Statement: parte del Net Income y lo reconcilia con movimientos no-cash (depreciación), cambios en working capital, capex y flujos de financiación → Ending Cash.


#### Importancia del 3-Statement

Muestra impacto contable (profit) y de caja (liquidity) en forma consistente.

Permite valorar (DCF), analizar solvencia (covenants), planear financiamiento y evaluar escenarios.

Es la base para due diligence y presentación a inversores/bancos.


#### Construir el modelo

1. Hoja de Supuestos / Drivers: todas las entradas (tasas, crecimientos, días AR/AP/inv, capex, salarios, etc.).

2. Income Statement (proyectado): Revenue → COGS → EBITDA → Depreciación → EBIT → Intereses → EBT → Impuestos → Net Income.

3. Schedules de apoyo (sheets separadas):

PPE / Capex & Depreciación (calcula acumulado, capex por año, depreciación).

Working Capital (AR, Inventory, AP usando días o porcentajes).

Debt schedule (saldo, intereses, amortización, nuevos préstamos).

Impuestos / NOLs si aplica.

4. Cash Flow Statement: reconciliar Net Income → + Depreciación → ± ΔWC → - Capex → +/− Financiamiento → Net Cash Flow

5. Balance Sheet: actualizar Cash (Ending Cash), AR, Inventory, Net PPE, AP, Debt; derivar Equity (Assets − Liabilities).

6. Checks / Reconciliaciones (ver más abajo).

7. Escenarios y sensibilidad: crear toggles (base/optimista/pesimista) y tablas de sensibilidad.

8. Outputs / Dashboard: métricas (EBITDA, Net Income, Free Cash Flow, DSCR, Leverage, Runway, NRR, etc.) y gráficos.


#### Reglas de enlace (Conectar 3-statement)

Net Income (IS) → Retained Earnings (Balance): RE(t) = RE(t-1) + NetIncome(t) − Dividends(t).

Depreciación (IS) → Accumulated Depreciation (Balance); Depreciación es un addback en Cash Flow.

Capex (CF) → PPE gross (Balance) (increase) y se deprecia en IS (según política).

ΔWorking Capital (Balance) → Cash Flow: cambios en AR/Inventory/AP afectan caja.

Debt proceeds / repayments (CF) → Debt (Balance).

Interest (IS) ↔ Debt (Schedule): idealmente interest = rate × opening (o average) debt calculado en debt schedule.

Ending Cash (CF) = Cash (Balance) — debe cuadrar siempre.


#### Evitar circularidades

Calcular intereses sobre deuda inicial (opening balance) en vez de sobre deuda final. Esto evita loops porque interest no depende de la misma fila de cash que lo paga.

Si necesitas interest sobre average debt, acepta un proceso iterativo (activar cálculo iterativo en Excel) o calcula interest sobre opening balance + (repayments/2) manualmente.

Mejor solución práctica: tener un debt schedule separado que calcule interés a partir del opening balance y luego genere pagos; linkear IS a ese interés (no a la celda de deuda final de la misma columna).


#### Fórmulas y ejemplos Excel

AR desde días: AR = Revenue * AR_days / 365

ΔAR (periodo t): = AR_t - AR_(t-1)

Depreciación lineal (si capex es known): =Capex / life o usar tabla de activos para vida útil variable.

Interest (simple, sobre opening debt): =Opening_Debt * Interest_Rate

Cash from ops (indirect method): =NetIncome + Depreciation - ΔAR - ΔInventory + ΔAP

Ending Cash: =Beginning_Cash + Net_Cash_Flow



#### Checks que siempre deben hacerse

Balance sheet cuadre: Total Assets == Total Liabilities + Equity (por cada periodo).

Ending Cash match: Balance.Cash == CashFlow.EndingCash.

Change in Debt desde Debt Schedule = Financing line en Cash Flow.

Retained Earnings movement = sum(Net Income − Dividends) acumulado.

No links a cero: evita fórmulas que dividan por cero; usa IFERROR o condicionales.

Incluye una hoja Checks con fórmulas booleanas (=IF(ABS(A−B)<1, "OK","ERROR")) para detectar errores rápidamente.


#### Evitar errores comunes

Hardcoding: escribir números en lugar de referenciar assumptions. → Usa una hoja Assumptions.

No modularizar: mezclar cálculos y outputs. → separa Schedules, FS y Dashboard.

Circular references no documentadas: activar iterativos sin control puede dar resultados erráticos. → documenta y preferiblemente evita.

Confundir cash vs accrual: recordar que Depreciación no es cash; income ≠ cash.

Mala base temporal: mezclar meses y años sin estandarizar (usa siempre la misma periodicidad).

No reconciliar balances: si el balance no cuadra, el modelo es inútil para due diligence.


#### Buenas prácticas y estilo profesional

Inputs → Calculations → Outputs (orden lógico y limpio).

Hoja “Assumptions” con todos los drivers y comentarios (fuentes).

Nombres de rangos y evitar referencias directas a celdas en fórmulas complejas

Formateo: colores para inputs (amarillo), cálculos (blanco), checks (verde/rojo).

Documentación: una hoja Readme con supuestos clave y versión del modelo.

Versionado: guarda copias por hitos (model_v1_seed.xlsx, model_v2_capex.xlsx).

Stress tests: siempre tener escenarios y una tabla de sensibilidad para 2–3 variables clave.



#### Extensiones habituales

DCF / Valoración (usar FCF desde el 3-statement).

LBO model (añadir debt schedule con amortización y covenants).

M&A (accretion/dilution) (combinación de modelos y sinergias).

Cohort & unit economics (conectar modelo operativo con drivers de revenue).


### Sustancia sobre forma

Principio contable que indica que las transacciones deben registrarse según su realidad económica y no sólo según su forma legal.

##### ¿Qué sucede de verdad económicamente? Eso es lo que deben reflejar los estados financieros.

##### Evita que empresas oculten riesgo u obtengan ventajas contables mediante estructuras legales 

(p. ej. aparentar que venden un activo cuando en la práctica es financiación).

Fundamental para análisis financiero, valoración y para acreedores/inversores que toman decisiones basadas en los estados.

##### Impacta directamente en ratios (apalancamiento, cobertura), en cash vs profit, y en cumplimiento de covenants.


### Casos donde la evaluación de sustancia es crítica

Sale-and-leaseback: si “vendes” un activo y lo alquilas inmediatamente, ¿realmente vendiste o solo obtuviste liquidez con obligación de pago? Si es financiación, el activo debe seguir en balance o registrarse una obligación financiera.

Factoring sin transferencia de riesgos: vender facturas pero mantener el riesgo de crédito → no hay verdadera derecognición de cuentas por cobrar.

Operaciones con SPV / securitización: si la empresa sigue expuesta a riesgos/beneficios, tal vez deba consolidarse.

Contratos de recompra (repos): parecen ventas, pero son préstamos colateralizados.

Arrendamientos disfrazados (antes «leasing operativo» vs «financiero»): si contrato transfiere la mayor parte de beneficios/riesgos — es deuda de hecho. (IFRS16 endureció esto).


#### Determinar la sustancia 

1. Identifica el intercambio económico real: ¿quién conserva el riesgo de mercado, el control, beneficios/responsabilidades principales?

2. Examinar flujos de caja: ¿los flujos contractuales implican reembolso parecido a un préstamo (cuotas + interés) o un verdadero pago por un bien/servicio?

3. Duración y control: ¿el “vendedor” retiene la mayoría del uso económico del activo?

4. Opciones y garantías: ¿hay opciones de recompra, garantías implícitas, o pagos dependientes del rendimiento del activo?

5. Consecuencia en riesgos/beneficios: ¿quién soporta la variación en valor residual, mantenimiento, obsolescencia?

6. Revisión contractual y legal: leer términos — condiciones de recompra, cláusulas de servicios, covenants.

7. Evaluación de intención y práctica: ¿la operación fue diseñada para generar cash hoy sin transferir riesgos reales?

##### Si la mayoría apunta a que la contraparte conserva riesgos/beneficios o hay una obligación implícita de recomprar, la sustancia probablemente sea financiación.


#### Impacto contable y en el modelado financiero (qué hay que ajustar)

Balance: si la transacción es financiación → mantener (o reconocer) el activo y registrar una obligación financiera (o ROU + lease liability según norma).

Estado de Resultados: gastos por intereses + depreciación en lugar de renta simple (o la reversión de una ganancia por venta).

Cash Flow: la “venta” pasa de ser flujo de financiación (si es préstamo) en vez de flujo de operación/venta; afecta FCF y cash disponible

Ratios: apalancamiento y coberturas empeoran si algo que parecía fuera del balance debe volver.

Covenants & impuestos: puede generar breaches y efectos fiscales distintos (pérdidas/gains, deducciones).


En un modelo 3-statement, aplicar sustancia suele implicar:

Añadir un debt schedule o lease schedule que refleje la obligación real.

Mantener el activo en PPE (o reconocer ROU asset) y la obligación en deuda/leases.

Recalcular interés basado en la nueva obligación y ajustar flujo de caja (pagos de principal e interés).

Reconciliar para que Ending Cash / Balance cuadre.


### Ejemplo numérico simplificado (venta que es financiación)

Suponiendo: 

Valor contable del activo: 80

“Venta” contractual por 100 (recibes 100 cash)

Pero existe acuerdo implícito de pagar en cuotas cuyo valor presente es 95 → indica financiamiento.


Si se reconoce como venta legal (forma):

Se daría de baja activo (−80), se reconoce ganancia por 20; cash +100.
Resultado: utilidades suben y deuda aparente baja (pero cash recibido oculta obligación futura).


Si la sustancia es financiación (trato económico = préstamo):

No se reconoce la venta. Se mantiene el activo en libros (80) y se reconoce una obligación financiera por ~95 (PV de pagos).

Efecto inmediato: activos netos pueden aumentar o no, pero liabilities aumentan — empeora deuda/EBITDA y puede cambiar la percepción de solvencia.


Nota: las entradas contables exactas dependen de la norma aplicable (IFRS/US GAAP) y del análisis contractual. El ejemplo es conceptual para ver el efecto económico.


#### Señales de alerta / “red flags” que revisar en due diligence

Ventas a partes relacionadas con cláusulas de recompra.

Transacciones con SPV que tienen retrocesión de riesgo.

Ingresos o ganancias poco consistentes con cash flows históricos.

Flujos de caja que muestran salidas futuras significativas relacionadas con ventas recientes.

Aeronaves/propiedades/equipos “vendidos” y subarrendados inmediatamente con términos favorables.


#### En caso de detectar una diferencia entre forma y sustancia

1. Documentar el análisis: contratos, cálculos de PV, riesgos transferidos.

2. Ajustar estados/tu modelo para reflejar la sustancia (ver puntos de “impacto” arriba).

3. Discutir con contabilidad/auditoría — puede requerir reclasificación o notas.

4. Revisar covenants y comunicaciones a acreedores/inversores si hay impacto material.

5. Revelar en notas del modelo/report (qué se ajustó y por qué).

 
#### Rs: 
 
##### 1. Lee el contrato → identifica recompra/garantías/opciones.

##### 2. Analiza quién asume riesgos y beneficios económicos.

##### 4. Si la transacción es, en esencia, financiación u otra realidad distinta, regístrala según esa realidad y ajusta tu modelo/ratios


## Balance/Balance Sheet

Uno de los tres estados financieros claves

##### Muestra la posición financiera de una empresa en un momento específico

##### Qué activos posee, qué pasivos debe y cuál es el patrimonio de los propietarios

##### Activo = Pasivo + Patrimonio (Equity)


#### Componentes

##### Activos (Assets): recursos controlados por la empresa que generarán beneficios futuros.

Corrientes (short-term): caja, cuentas por cobrar (AR), inventario. → Se espera convertirlos en caja en ≤12 meses

No corrientes (long-term): propiedades, planta y equipo (PPE), activos intangibles, inversiones a largo plazo. → Uso/beneficio >12 meses.


##### Pasivos (Liabilities): obligaciones presentes que la empresa debe pagar.

Corrientes: cuentas por pagar (AP), deuda a corto plazo, pasivos acumulados.

No corrientes: préstamos bancarios a largo plazo, bonos, arrendamientos financieros.


##### Patrimonio (Equity): Parte residual que queda a los accionistas después de pagar pasivos. 

Incluye capital social, prima de emisión, utilidades retenidas (retained earnings) y otros componentes (reservas, resultado integral).


### Relación con los otros estados financieros

Net Income (IS) → Retained Earnings (Balance): las utilidades netas del periodo aumentan las utilidades retenidas (menos dividendos).

Cash Flow Statement muestra cómo cambió la Caja (activos corrientes) y debe cuadrar con el saldo de caja del Balance.

Depreciación afecta el Income Statement (gasto) y el Balance (acumulación de depreciación → reduce Net PPE).

Capex: se registra como aumento de PPE (Balance) y como salida de caja en Cash Flow (inversión).


### Formato típico (simplificado)

Activo

Caja y equivalentes
Cuentas por cobrar
Inventarios
Activos corrientes totales
PPE (neto)
Activos no corrientes totales

Total Activos


Pasivo

Cuentas por pagar
Deuda corriente
Pasivos corrientes totales
Deuda a largo plazo
Pasivos no corrientes totales

Total Pasivos


Patrimonio

Capital social
Utilidades retenidas
Otros componentes de equity

Total Patrimonio

##### Total Pasivos + Patrimonio = Total Activos


### Ratios clave que se calculan con el Balance

Current ratio = Activos corrientes / Pasivos corrientes. (liquidez)

Quick ratio = (Activos corrientes − Inventario) / Pasivos corrientes. (liquidez inmediata)

Net working capital = Activos corrientes − Pasivos corrientes. (capital de operación)

Debt / Equity = Deuda total / Patrimonio. (apalancamiento)

Net Debt / EBITDA (requiere estado de resultados). (capacidad de pago)


### Buenas prácticas

Clasifica correctamente corrientes vs no corrientes (impacta liquidez).

Reconciliar Ending Cash con el Cash Flow Statement.

Mantener schedule separado para: PPE (capex + depreciación), deuda (proceeds, amortización, intereses), cuentas por cobrar (días), inventario (días), cuentas por pagar (días).

Documentar políticas contables: capitalización vs gasto, vida útil de activos, provisiones.

Revisar partidas no recurrentes y contingencias en notas (impacto en valoración y riesgo).


### Errores comunes y señales de alerta

Inventarios o AR crecientes sin aumento proporcional de ventas → posible acumulación de stock o problemas de cobranza

Caja baja mientras el balance muestra utilidades crecientes → diferencias entre profit y cash (fíjate en cambios de WC y capex).

Gran volumen de activos intangibles o revalorizaciones frecuentes → revisar sustancia y recuperación (impairment).

Deuda concentrada en el corto plazo → riesgo de refinanciación.


### Ejemplo numérico (simplificado)

Mini-balance (en miles $):

Activos
Caja: 50
Cuentas por cobrar: 100
Inventario: 50
Net PPE: 200

Total Activos = 400


Pasivos

Cuentas por pagar: 60
Deuda (largo plazo): 140

Total Pasivos = 200


Patrimonio

Capital social + RE: 200

Total Pasivos + Patrimonio = 400

##### Esto cuadra: 400 = 200 + 200.


### Checklist para reviar Balace

1. ¿Total Activos == Total Pasivos + Patrimonio? ✓

2. ¿Ending Cash coincide con Cash Flow Statement? ✓

3. ¿Existencias de cuentas por cobrar/inventario razonables respecto a ventas? ✓

4. ¿Deuda bien desglosada por vencimiento? ✓

5. ¿Políticas contables y estimaciones (depreciación, provisiones) documentadas? ✓


### Ej Balance completo

estructura principal y notas sobre fórmulas

Working Capital (drivers y fórmulas sugeridas)
 
Hoja PPE Schedule (plantilla de capex / depreciación).

Debt Schedule (plantilla para opening balance, intereses y movimientos).

Retained Earnings (rollforward).

Checks con fórmulas de verificación (indicaciones).

Assumptions con valores ejemplo y espacio para tus inputs

Readme con instrucciones rápidas.


## PY/RE

PY = Pérdidas y Ganancias (Estado de Resultados / Income Statement)

RE = Resultado del Ejercicio (el Net Income del periodo)

También se usa RE para Retained Earnings (Utilidades retenidas), que es la cuenta patrimonial acumulada donde se incorporan esos resultados.


### 1. PY — Pérdidas y Ganancias (Estado de Resultados)

##### Informe que muestra la actividad económica de un periodo

##### Ingresos, costos, gastos, impuestos y el resultado final (Resultado del Ejercicio / Net Income).


Estructura típica (simplificada):

Revenue (Ventas):

− COGS → = Gross Profit
− SG&A / Operativos → = EBITDA (si no hay dep)
− Depreciación / Amortización → = EBIT
− Gastos financieros (interés) → = EBT
− Impuestos → = Resultado del Ejercicio (Net Income)

Mide rentabilidad del periodo

Base para calcular margenes (EBITDA margin, net margin) y para decidir impuestos, reparto de utilidades, etc.


### 2. RE — Resultado del Ejercicio vs Retained Earnings 

Conceptos que conviene diferenciar:

1. a) Resultado del Ejercicio (RE = Net Income)

Es el número final del PY: la ganancia (o pérdida) generada en ese periodo.

Es un dato de flujo (período): corresponde al periodo (mes/trimestre/año).


2. Utilidades retenidas (Retained Earnings, también abreviado RE en algunos lugares)

Es una cuenta del patrimonio en el Balance: acumula los resultados netos de periodos anteriores menos dividendos pagados.

Fórmula simple de rollforward:

```
Closing RE = Opening RE + Resultado del Ejercicio (Net Income) − Dividends ± Ajustes
```

Representa la porción de ganancias que la empresa decidió retraer (no repartir) y reinvertir.


### 3. Cómo se registran y enlazan en los estados financieros

El Resultado del Ejercicio se calcula en el PY.

Al cierre del periodo, ese resultado se transfiere (se cierra) al patrimonio: aumenta (o disminuye) la cuenta Utilidades retenidas en el Balance.

En el Cash Flow (método indirecto): el Net Income es el punto de partida; se ajusta por partidas no-cash (depreciación) y por cambios en working capital para llegar al cash from operations.


Asiento contable simplificado al cierre (si hay ganancia y no hay dividendos):

(cerrar resultados) Débito: Cuentas de resultado (p.ej. “Resultados del ejercicio”) — Crédito: Utilidades retenidas (o directamente Ajuste a Patrimonio).

(la contabilidad práctica varía según el sistema contable, pero el efecto económico es ese: RE patrimonial sube).


### Ejemplo numérico

Supongamos un año con:

Ventas = 1.000
COGS = 400
SG&A = 200
Depreciación = 50
Intereses = 30
Impuesto 25%


Cálculo:

Gross Profit = 1.000 − 400 = 600
EBITDA = 600 − 200 = 400
EBIT = 400 − 50 = 350
EBT = 350 − 30 = 320
Impuesto = 320 × 25% = 80

Resultado del Ejercicio (Net Income) = 320 − 80 = 240


Si las Utilidades retenidas al inicio del año eran 1.000 y no se pagaron dividendos:

Closing RE = 1.000 + 240 = 1.240 → eso aparece en el Balance bajo Patrimonio.


En el Cash Flow:

Partimos de Net Income = 240

	Depreciación 50 (no cash)

± ΔWC, − Capex, etc. → para llegar al cambio en caja.


### 5. Errores y confusiones comunes

Confundir Resultado del Ejercicio (flujo del periodo) con Cash: utilidad ≠ caja.

Confundir “RE” como resultado del ejercicio o retained earnings — siempre confirma en la plantilla qué significa.

No reconciliar Net Income con el cambio en Retained Earnings (olvidar dividendos u otros ajustes).

Tratamientos contables (p. ej. revalúos, ajustes por conversión) que afectan patrimonio pero no provienen del PY.


### 6. Relevancia para finanzas corporativas y modelado

En modelos 3-statement: PY → RE es el enlace clave entre P&L y Balance.

Para valoración por DCF usarás Free Cash Flow (no sólo Net Income), pero el PY es necesario para calcular impuestos, EBITDA, etc.

Los acreedores miran ratios que usan utilidades (Interest Coverage) y patrimonio (Debt/Equity), por eso las decisiones sobre distribuir utilidades o retenerlas afectan financiamiento y covenants.



## Flujo de caja/cash flow

##### Entradas y salidas reales de efectivo (y equivalentes de efectivo) de una empresa durante un periodo.

##### A diferencia de la utilidad contable, el flujo de caja muestra liquidez real: cuánto efectivo entra, cuánto sale y cuándo.


### Estructura del Estado de Flujo de Caja (3 secciones)

#### 1. Flujo de caja de las operaciones (Operating Cash Flow, CFO

Dinero generado/consumido por la actividad operativa normal (ventas, pagos a proveedores, cobros a clientes, impuestos, intereses en algunos esquemas).


#### 2. Flujo de caja de inversión (Investing Cash Flow, CFI)

Compras/ventas de activos no corrientes: CAPEX (salidas), ventas de activos (entradas), inversiones financieras a largo plazo.


#### 3. Flujo de caja de financiación (Financing Cash Flow, CFF)

Emisión/repago de deuda, emisión/compra de acciones, pago de dividendos, cobro de préstamos.


Cambio neto en caja = CFO + CFI + CFF.

Ending Cash (Balance) = Beginning Cash + cambio neto en caja.


### Métodos para calcular CFO

1. Método indirecto (el más usado):

Parte del Net Income (utilidad contable) y lo ajusta por partidas no-cash (depreciación, amortización) y por cambios en el working capital (ΔAR, ΔInv, ΔAP).


2. Método directo:

Lista directamente cobros de clientes, pagos a proveedores, pagos de sueldos, impuestos pagados, etc. (más informativo pero requiere mayor detalle operativo).


Fórmula indirecta básica:

```
CFO = Net Income
      + Depreciación y amortización
      ± Cambios en cuentas del capital de trabajo (−ΔAR − ΔInventario + ΔAP)
      ± Otros ajustes no-cash (provisiones, pérdidas/ganancias no realizadas)
```


### Ejemplo numérico

Supón:

Net Income = 1.000
Depreciación = 100
ΔAccounts Receivable (AR) = +50 (aumentó)
ΔInventario = +20 (aumentó)
ΔAccounts Payable (AP) = +30 (aumentó)


Cálculo indirecto:

1. Partimos de Net Income = 1.000
	
2.	Depreciación = 1.000 + 100 = 1.100

3. ΔAR +50 → resta de caja: 1.100 − 50 = 1.050

4. ΔInv +20 → resta de caja: 1.050 − 20 = 1.030

5. ΔAP +30 → suma de caja: 1.030 + 30 = 1.060

Resultado: CFO = 1.060 (efectivo neto generado por operaciones).


Si además:

Capex = 200 (salida en investing) → CFI = −200

Nueva deuda neta = +100 (entrada en financing) → CFF = +100
Entonces: cambio neto en caja = 1.060 − 200 + 100 = 960.
Si beginning cash era 40 → ending cash = 40 + 960 = 1.000.


### Métricas y conceptos derivados importantes

Free Cash Flow to the Firm (FCFF) — efectivo disponible para todos los proveedores de capital (deuda + equity):

```
FCFF = EBIT*(1−TaxRate) + Depreciation − Capex − ΔWorkingCapital
```

Free Cash Flow to Equity (FCFE) — efectivo disponible para accionistas después de servicio de deuda:

```
FCFE = FCFF − Interest*(1−TaxRate) + Net Borrowing
```

Operating Cash Flow margin = CFO / Revenue

Cash conversion cycle (CCC) = DSO + DIO − DPO (días que tarda convertir ventas en caja)


### El flujo de caja es crítico

Liquidez y supervivencia: determina si la empresa puede pagar su operación, nómina, proveedores y vencimientos de deuda.

Valuación: los modelos DCF usan Free Cash Flows (no utilidades contables) como insumo principal.

Financiación: bancos e inversores miran cash flow para evaluar capacidad de repago (DSCR, Interest Coverage).

Decisiones operativas: indica si crecimiento se autofinancia o requiere capital externo.


### Errores comunes y señales de alarma

Altas utilidades con cash flow operativo negativo → señal de alerta (posible crecimento financiado por deuda o AR creciente).

Ventas crecientes pero AR subiendo mucho → problemas de cobranza o ventas dudosas.

Inventario creciendo sin incremento de ventas → riesgo de obsolescencia.

Depreciaciones grandes que ocultan capex insuficiente → riesgo de “deferred maintenance”.


### Buenas prácticas para un CFO / analista

Construir forecast de caja (diario/semanal mensual) y actualizarlo.

Mantener un cash runway claro (meses hasta que el cash llegue a cero sin nueva financiación).

Separar forecast operativo y financiero (scenarios: base / bad / good).

Automatizar fuentes de datos (exportes de Stripe, bancos, ERP) para evitar errores manuales.

Hacer reconciliaciones periódicas Net Income ↔ CFO (indirect method) y revisar partidas no-cash.

Preparar un cushion para vencimientos de deuda concentrados.


### Checklist/Revisión

¿CFO es positivo y suficiente para cubrir Capex y servicio de deuda?

¿Runway (cash / net monthly burn) está dentro de niveles aceptables?

¿ΔAR y ΔInv están alineadas con el crecimiento de ventas?

¿Hay vencimientos de deuda próximos sin financiación clara?

¿La contabilidad reconcilia Net Income → Cash Flow (dep, ΔWC, otros)?


#### Ej flujo de caja

Ejemplo numérico mensual con método indirecto


Incluye:

Income Statement (12 meses): proyección mensual de Revenue → Net Income (con Depreciación y Gastos financieros).

Cash Flow Statement (indirect method): parte del Net Income, ajusta por Depreciación y ΔWorking Capital (AR/Inv/AP), incluye Capex y movimientos de deuda.

Balance (items seleccionados): Cash, AR, Inventory, Net PPE, AP, Debt, Retained Earnings, Equity, y checks implícitos por balanceo.

Assumptions: hoja con supuestos (revenue, growth, días AR/AP/Inv, capex schedule, deuda, tasa de interés).


## Relación entre Balance, PY/RE y Flujo de caja

Relación central en finanzas

##### El Balance es una foto en un momento (stocks): qué tienes (activos), qué debes (pasivos) y el patrimonio.

##### El PY (Pérdidas y Ganancias) te dice qué pasó en un periodo: ingresos, gastos → Resultado del Ejercicio (Net Income).

##### El Flujo de caja muestra cuánto efectivo realmente entró y salió en ese periodo (liquidez).

##### Los tres están conectados: el Net Income del PY fluye al patrimonio (utilidades retenidas) en el Balance y es el punto de partida del Flujo de caja (método indirecto).

##### Cambios en partidas del Balance (AR, Inventario, AP, PPE, Deuda) aparecen como ajustes en el Flujo de caja.


### Conexiones esenciales (reglas de enlace)

1. Net Income → Retained Earnings (Balance)
Closing RE = Opening RE + Net Income − Dividends

2. Net Income (PY) → Cash Flow (operaciones) — método indirecto:
CFO = Net Income + Depreciación/Amortización (no-cash) ± ΔWorking Capital (−ΔAR − ΔInv + ΔAP) ± otros ajustes no-cash

3. CapEx (CFI) → PPE (Balance)
PPE gross t = PPE gross t-1 + CapEx_t − Disposals; en IS aparece la depreciación.

4. Debt proceeds / repayments (CFF) → Deuda (Balance)
Los pagos/recepciones de deuda son flujos de financiación y cambian el saldo de deuda en el Balance.

5. Ending Cash (Balance) = Beginning Cash (Balance) + Net Cash Flow (CF)
(es la conciliación que siempre debe cuadrar)


### Ejemplo numérico

mini-PY del periodo:

Revenue = 1,000
COGS = 400 → Gross Profit = 600
SG&A = 200 → EBITDA = 400
Depreciation = 50 → EBIT = 350
Interest = 30 → EBT = 320
Tax rate = 25% → Tax = 320 × 25% = 80

Net Income = EBT − Tax = 320 − 80 = 240

1,000 − 400 = 600
600 − 200 = 400
600 − 200 = 400
400 − 50 = 350
350 − 30 = 320
320 × 0.25 = 80
320 − 80 = 240


Ahora efectos en cash (método indirecto) con estos cambios en balance:

Depreciación = 50 (no-cash → se suma de vuelta)

ΔAccounts Receivable = +50 (AR aumentó → uso de caja, resta)

ΔInventory = +20 (inventario subió → uso de caja, resta)

ΔAccounts Payable = +30 (AP subió → fuente de caja, suma)


Calculamos CFO:

Partimos de Net Income = 240
Depreciación 50 → 240 + 50 = 290
− ΔAR 50 → 290 − 50 = 240
− ΔInv 20 → 240 − 20 = 220
ΔAP 30 → 220 + 30 = 250

Así CFO = 250.


Si además:

CapEx = 200 (salida en Investing) → CFI = −200
Nueva deuda neta = +100 (entrada en Financing) → CFF = +100

Entonces:
Net Cash Flow = CFO + CFI + CFF = 250 − 200 + 100 = 150

Si Beginning Cash = 40:
Ending Cash = 40 + 150 = 190


Efectos en el Balance (resumen):

Cash sube a 190 (concuerda con CF).
Net PPE aumenta por CapEx neto (CapEx − Depreciación acumulada).
AR, Inv, AP cambian a los niveles usados en Δ.
Retained Earnings aumenta en +240 (Net Income) menos dividendos.
Debt aumenta neto +100.

Al recalcular Totales: Total Assets = Total Liab + Equity debe seguir cumpliéndose si todos los movimientos están correctamente registrados.


### Net Income ≠ Cash (siempre verificar)

Depreciación/amortización: reduce utilidad pero no es salida de caja → se suma en CFO.

Ventas a crédito: reconocen ingreso (devengo) pero generan AR, no caja.

CapEx: no aparece en PY como gasto (solo depreciación), pero es salida de caja en CFI.

Pagos de deuda: reducen caja y deuda (Balance), no afectan PY salvo la parte interés.


### Checklist al conciliar

¿Net Income del PY está linkeado a Retained Earnings (Balance)?

¿Net Income aparece en la CF como punto de partida (método indirecto)?

¿Depreciación del IS está sumada en CFO y acumulada en Accum. Depr del Balance?

¿CapEx en CF está linkeado a Gross PPE en el Balance?

¿ΔAR/ΔInv/ΔAP en CF coinciden con los cambios entre columnas del Balance?

¿Debt Proceeds/Repayments en CFF dan la variación correcta del saldo de deuda en el Balance?

¿Ending Cash (CF) == Cash (Balance)?

¿Total Assets == Total Liabilities + Equity para cada periodo?
Si cualquiera falla, hay una desconexión (references mal puestas, hardcodes o errores de sign).


### Errores

Calcular interés sobre deuda que depende del CF del mismo periodo → crea circularidad. Solución: interest = rate × opening debt (o manejar con schedule iterativo controlado).

Olvidar restar ΔWorking Capital en CFO (lleva a sobreestimar caja).

Tratar CapEx como gasto operativo (impacta PY pero no como cash en el mismo sentido).

No actualizar retained earnings por Net Income / dividends.

No reconciliar Ending Cash → Balance queda desajustado.


### Rs

##### Piensa PY = “qué gané/perdí”, Balance = “qué tengo y debo ahora”, CF = “qué caja entró/salió realmente”.

##### Usa el Net Income como puente: PY → CF (operaciones) → Balance (Retained Earnings), y ajusta por inversiones, deuda y cambios en working capital.

Siempre valida con las checks mencionadas.


### Ejemplo 3-statement

Incluye:

Income Statement con cálculos paso a paso (Revenue → Net Income).

Cash Flow (Indirect) mostrando cómo Net Income se reconcilia a Cash from Operations y el Net Cash Flow total.

Opening Balance y Closing Balance (activos y pasivos/equity) que muestran los movimientos que justifican los cambios.

Checks que validan que el Balance cuadra y que el Ending Cash coincide con el Cash Flow.

Inputs con los supuestos usados





# 2. Matemática financiera y TVM

Valor temporal del dinero, tasas, descuentos.

Valor presente/futuro, anualidades, tasas efectivas, tasas nominales, conversión.

Calcular PV/NPV/IRR manualmente y con Excel.




# 3. Análisis financiero y ratios

Métricas de liquidez, solvencia, rentabilidad, eficiencia.

ROE, ROIC, margen, ciclo de conversión de efectivo, análisis Dupont, benchmarking.

Análisis de 3 empresas comparables; preparar un informe ejecutivo de 2 páginas.



# 4. Planeamiento financiero y forecasting

Construir forecast integrado (3 estados).

Drivers de ingresos, márgenes, CAPEX, depreciación, working capital, supuestos.

Modelo de 3 estados en Excel con escenarios (base, optimista, pesimista).



# 5. Valoración (DCF y métodos comparables)

Dominar DCF, WACC, perpetuidades, múltiplos.

Cálculo de WACC, beta, prima de riesgo, flujo libre a la firma vs a los accionistas, múltiplos EV/EBITDA, P/E.

Valorar 2 empresas (una estable, otra en crecimiento) por DCF y comparables; comparar resultados y justificar diferencias



# 6. Decisiones de inversión y capital budgeting

Aplicar NPV/IRR y criterios de selección.

Análisis de proyectos, sensibilidad, análisis de break-even, payback, opciones reales (introducción).

Estudio de caso: elegir entre 3 proyectos con restricciones de capital.



# 7. Estructura de capital y política de dividendos

Entender trade-offs deuda/equity y señales de dividendos.

Teorías (MM), costos de quiebra, ventajas fiscales, covenant, recapitalizaciones.

Simulación de impacto en EPS y WACC al cambiar mix deuda/equity.



# 8. Fusiones y Adquisiciones (M&A) y LBO

Entender proceso M&A, due diligence financiera y modelo LBO básico.

Valuación para M&A, sinergias, estructuras de compra, financiación en LBO, métricas (IRR sponsor, deleverage).

Modelo sencillo de accretion/dilution y LBO teaser con sensibilidad.



# 9. Gestión de tesorería y working capital

Optimizar caja, gestión de cobranza/pagos y líneas de crédito.

Cash pooling, factoring, gestión de inventarios, forecast de caja, KPIs treasury.

Crear forecast de caja diario/semana para 6 meses.



# 10. Riesgo financiero y derivados

Introducir cobertura con forwards, swaps, options.

Tipos de riesgo, Value at Risk (VaR) básico, uso de swaps de tasas, forwards FX.

Cálculo de exposición FX y propuesta de cobertura simple.



# 11. Gobierno corporativo, cumplimiento y ética

Entender rol del CFO, compliance, divulgación y responsabilidad fiduciaria.

Análisis de un caso real de fallo de governance y lecciones aprendidas.



# 12. Proyecto final / Capstone

Aplicar todo en un caso real: valoración, decisión de inversión, plan de financiación y presentación.

Modelo Excel, resumen ejecutivo (2 páginas), presentación (10-12 diapos)

Valoración y recomendación para compra de una pyme; plan de crecimiento y financiación para una unidad de negocio; preparación para fusión.



# Herramientas y habilidades técnicas

Excel avanzado: tablas dinámicas, fórmulas financieras, tablas, Solver, model building (nombres, estructura modular).

PowerPoint: presentación ejecutiva de resultados.

SQL básico: extracción de datos financieros.

Python (opcional): pandas para manipulación y backtesting de modelos, reproducibilidad.

Power BI / Tableau (opcional): visualización de KPIs.

Versionado: mantener versiones del modelo (control de cambios).



# Recursos

Principles of Corporate Finance — Brealey, Myers, Allen (conceptos fundamentales).

Valuation: Measuring and Managing the Value of Companies — Koller, Goedhart, Wessels (valoración práctica).

Investment Valuation — Aswath Damodaran (profundidad en valuación).

Financial Modeling — Simon Benninga (modelado en Excel).

Cursos online: busca cursos intro a Corporate Finance (universidades y plataformas) y formaciones prácticas de financial modeling / FMVA (si decides certificación).



# Ejercicios y entregables

1. 
Entregable: 3-statement model simple en Excel (3 años forecast).
ejercicios: ratio analysis de 2 empresas; cálculo NPV/IRR.

2. 
Entregable: DCF valuation + comparables para 1 empresa.
ejercicios: stress tests y sensibilidad; forecast de working capital

3. 
Entregable: Capstone (valuation + financing plan + presentación).
ejercicios: LBO model; M&A accretion/dilution; cobertura FX.



# Autoevaluación y rúbrica rápida

Calidad del modelo (35%): estructura clara, consistencia, fórmulas no hardcoded.

Supuestos (20%): razonabilidad y justificación de drivers.

Valuación y análisis (25%): correcto cálculo WACC/FCF, sensibilidad y coherencia entre métodos.

Presentación (10%): síntesis ejecutiva + diapositivas claras.

Código y reproducibilidad (10%): si aplicaste Python/SQL, incluir notebooks/queries.



# Buenas prácticas

Mantén el modelo modular: Inputs → Working → Outputs.

Usa nombres de rangos y una hoja “Assumptions”.

Documenta supuestos y fuentes.

Siempre haz check totals (balance se cierra, cash reconcile).

Crea escenarios (base/low/high) y tablas de sensibilidad.

Aprende a contar una historia con los números (qué significa la valoración).



# Starup

Para fundadores, CFOs tempranos o personas que gestionan finanzas en startups

Fundamentos como runway, burn, unit economics hasta fundraising, modelado avanzado y preparación para inversores


## Objetivo

Entender y controlar runway, burn rate y escenarios de liquidez.

Construir un modelo financiero de startups (unit economics + 24–36 meses de cash flow) que soporte decisiones y fundraising.

Calcular métricas clave (CAC, LTV, ARPA, churn) y saber cuáles mover en cada etapa.

Diseñar estrategias de pricing, growth unitario y forecasting por cohorts.

Preparar pitch financiero, cap table, term sheet básicos y data room para inversores.

Saber estructuras de financiación (equity, SAFE, notas convertibles, venture debt) y su impacto en la dilución.



# 1. Fundamentos

Lenguaje: runway, burn, MRR/ARR, GMV, CAC,

Flujo de caja vs P&L, métricas de ingreso (one-time vs recurring), ARR/MRR, churn.

Calcula runway y burn para 3 escenarios (actual, -20% ingresos, +30% ingresos).



# 2. Unit economics y cohort analysis

Medir si el modelo escala de forma rentable por usuario/cliente.

CAC, LTV (fórmulas y sensibilidad), payback period, cohort retention curves.

Construir tabla de cohortes y calcular CAC:LTV por cohorte; determinar umbral de sostenibilidad.



# 3. Forecast y modelo de ingresos

Crear forecast accionable (drivers y supuestos).

top-down vs bottom-up, canales de adquisición, funnel, pricing tiers, conversion rates.

Modelo de 24 meses con drivers: #leads → conv → ARPA → churn. Incluir escenarios base/optimista/pesimista.



# 4. Cash flow y gestión de caja

Controlar liquidez, planificar runway y necesidades de capital.

Forecast de caja diario/mensual, burn control, timing de cobros/pagos, líneas de crédito.

Construir forecast de caja mensual y calcular fecha de cierre de caja sin nueva financiación.



# 5. Costos y presupuesto operativo

Distinguir coste variable vs fijo y optimizar gasto

Payroll, hiring plan, OPEX, unit cost, sentido común del growth spend.

Crear presupuesto operativo 12–18 meses ligado al hiring plan y milestones.



# 6. Pricing, monetización y tests

Diseñar estrategias de pricing que optimicen LTV/CAC.

Freemium, free-trial → paid conversion, ARPA expansion, descuentos y CLTV impact.

Modelar 3 opciones de pricing y simular impacto en ARR y payback.



# 7. Fundraising: instrumentos y estrategia

Entender opciones de financiación y preparar negociación.

SAFE, convertible notes, equity rounds, pre-money vs post-money, valuation methods para startups, venture debt basics, dilution math.

Simular ronda seed: term sheet simple y cálculo de dilución pre/post.



# 8. Cap table, equity plan y compensación

Gestionar equity, pool de empleados y escenarios de dilución.

Cap table dinámico, pool grants, vesting, cliff, repricing.

Crear cap table con 4 rondas y mostrar dilución de founders y empleados.



# 9. KPIs por etapa, reporting e investor-ready metrics

Saber qué mostrar según la etapa (pre-seed → growth).

Dashboards MRR/ARR, NRR, gross margin, CAC payback, cohorts, funnel metrics, burn multiple.

Crear dashboard mensual (Google Sheets/Excel) con alertas y comentarios.


# 10. Due diligence, data room y presentación a inversores

Preparar documentación y relato financiero para captar inversión.

Data room checklist (financials, cap table, KPIs, contratos), modelos de sensibilidad, stress tests.

Pitch financiero 10 slides + modelo + data room checklist.



# Capstone — Plan financiero + fundraising

Entrega final: modelo financiero 24–36 meses (inputs, scenarios), cap table dinámico, pitch deck con slides financieros, plan de uso de fondos y calendario de milestones. Presentación de 10 minutos (slides).



# KPIs y métricas clave por etapa

Idea / Pre-seed: burn rate mensual, runway, activation metric, early retention (D7, D30).

Seed / Early: MRR, CAC, LTV, LTV:CAC ratio (objetivo >3), payback months (ideal <12–18), churn.

Series A: NRR (net revenue retention >100% preferible), gross margins, ARR growth rate (YoY), burn multiple.

Growth: unit economics sostenibles, CAC por canal, CLTV por cohort, expansion revenue.



# Herramientas y templates

Hojas de cálculo: Google Sheets / Excel (estructura modular: Assumptions / Drivers → Calculations → Outputs).

Cap table: Carta, Pulley o plantilla de cap table en Sheets.

Contabilidad / Treasury: QuickBooks / Xero / Reviso.

Métricas/SaaS: Baremetrics, ChartMogul, ProfitWell (si aplica).

Análisis: SQL/Python (pandas) opcional para cohort analysis a escala.

Documentación y data room: Google Drive / Notion + checklist.



# Recursos

Venture Deals — Brad Feld & Jason Mendelson (negociación y term sheets).

The Lean Startup — Eric Ries (hipótesis y experimentación).

Blogs y templates: Y Combinator Startup Library, First Round Review, a16z content (práctico sobre métricas y fundraising).

Plantillas: Search “startup financial model template” (usa una plantilla para SaaS / Marketplace según tu modelo) — personaliza siempre.


# Entregables

Semana 2: Runway & burn dashboard + cálculo CAC/LTV.

Semana 6: Modelo de ingresos 24 meses + cohort table.

Semana 10: Cap table dinámico + plan de uso de fondos.

Capstone: Pitch deck (10 slides) + modelo + data room.



# Ejercicios

Calcula tu runway actual (cash balance ÷ net monthly burn).

Construye una tabla simple de cohortes (mes de adquisición vs retención mensual) para 3 meses de datos.

Haz 2 escenarios de 12 meses: no raise vs raise $X y calcula la fecha límite para cerrar nueva ronda.



# Prácticos

No mezcles métricas de growth con métricas contables sin aclarar supuestos.

Prioriza cash runway sobre proyecciones “bonitas”: el control del efectivo decide supervivencia.

Cuida la historia detrás de los números: los inversores compran visión + tracción + unit economics.

Automatiza la captura de métricas (Stripe/HubSpot → Sheet/DB) para evitar errores manuales.



# Deuda

Gestionar deuda en distintos contextos: personales, pymes/startups y corporativo/estructurado

Negociación, refinanciación, modelado y reestructuración


## Objetivos

Entender los tipos de deuda y cómo funcionan (interés, amortización, covenants).

Evaluar carga de deuda y sostenibilidad (runway, DSCR, cobertura).

Construir y usar modelos de pago y cash-flow para planificar servicio de deuda.

Diseñar estrategias de refinancing, consolidación y negociación con acreedores.

Implementar políticas y controles para evitar sobreapalancamiento

Ejecutar una reestructuración financiera básica o plan de turnaround.


# 1. Conceptos básicos y tipología

Conocer tipos de deuda (créditos personales, tarjetas, préstamos bancarios, líneas revolventes, factoring, leasing, bonos, préstamos sindicados, mezzanine, venture debt).

Clasificar deudas reales (o hipotéticas) en una lista y anotar tasas, vencimientos y garantías.


 
# 2. Matemática de la deuda (TVM y amortización) (

Dominar interés simple/compuesto, amortización (francesa, americana, bullet), cálculo cuota, interés efectivo.

En Excel una tabla de amortización para cada tipo (préstamo personal, crédito hipotecario, préstamo bullet).



# 3. Salud financiera y métricas de sostenibilidad

Medir capacidad de pago (DSCR, interest coverage, debt/EBITDA, leverage ratios, burn-adjusted).

Calcular métricas para un caso personal y para una pyme; determinar límites de tolerancia.



# 4. Cash flow forecasting y calendario de deuda

Integrar servicio de deuda en forecast de caja; priorizar pagos y liquidez.

Crear forecast mensual 12–24 meses con calendario de pagos y alarmas de covenants.



# 5. Estrategias de reducción de deuda

Snowball vs avalanche, consolidación, negociación de tasas/plazos, priorización por costo y riesgo.

Diseñar plan de 12 meses para reducir deuda usando ambos métodos y comparar resultados.



# 6. Refinanciación y reestructuración

Cuándo y cómo refinanciar; swap de moneda/tasa; primer contacto con acreedores; instrumentos (extend & pretend, haircuts, rollovers).

Simular un caso de refinanciación para una pyme que enfrenta covenant breach.



# 7. Negociación con acreedores

Reparar argumentos cuantitativos y cualitativos, term sheet alternativo, timeline de negociación.

Redactar un “offer memo” para un acreedor y un guion de negociación.



# 8. Riesgo de tasa y FX; cobertura

Identificar exposición a tasa/Fx y herramientas (forwards, swaps, options) a alto nivel.

Calcular exposición FX y proponer una cobertura simple (forward) y su impacto en cashflow.



# 9. Covenants, documentación y cumplimiento

Entender tipos de covenants (financieros, negativos), triggers, reporting y remedios.

Crear checklist de covenant monitoring y alertas automáticas en Excel.



# 10. Deuda en startups y crecimiento (venture debt)

Cuándo usar venture debt, trade-offs equity vs deuda, amortización y warrants.

Modelar impacto en cap table y runway al tomar venture debt.



# 11. Mercados de deuda y emisión (corporativo)

Introducción a bonos, bonos senior vs subordinados, sindicados, credit spreads y rating.

Preparar un “term sheet” simulado para emisión de bonos corporativos.



# 12. Reestructuración y bankruptcy basics

Procesos de reestructuración, opciones formales vs informales, rol de advisors.

Caso de estudio: diseñar plan de restructuración para empresa en stress financiero



# 13. Políticas internas y gobierno del riesgo de deuda

Crear política de deuda, límites, aprobaciones y roles (CFO/Treasury/Board).

Escribir una política corta (1–2 páginas) de manejo de deuda adaptada a una pyme.



# 14. Capstone: Plan integral de manejo de deuda

Para un caso elegido (personal, pyme o corporativo): 1) inventario de deuda; 2) forecast de caja; 3) plan de reducción/refinanciación; 4) term sheet alternativo; 5) presentación ejecutiva.



# Entregables y ejercicios clave (inmediatos)

1. Inventario de deuda (template): saldo, tasa, cuota, vencimiento, covenant, garantía.

2. Tabla(s) de amortización para cada préstamo.

3. Forecast de caja con calendario de pagos y “runway” de deuda.

4. Plan de reducción (3 escenarios) con savings esperado.

5. Offer memo de negociación y checklist de due diligence.



# Herramientas y templates

Excel/Google Sheets: amortización, calendario, covenant tracker, forecast de caja.

Small business accounting: QuickBooks / Xero (para sincronizar cash flows).

Documentos: term sheet template, offer memo, carta de intención de renegociación.

Opcional técnico: modelado en Python/pandas para stress tests si trabajas con muchos préstamos.



# Métricas y KPIs para seguimiento

##### Personal: ratio deuda/ingreso, porcentaje pago mínimo vs ingreso, months to debt-free, interest paid YTD.

##### Empresa: DSCR (Debt Service Coverage Ratio), Interest Coverage (EBIT/Interest), Net Leverage (Net Debt / EBITDA), debt maturities ladder, covenant cushion.

##### Early-warning: cash runway to next maturity, covenant breach probability, burn multiple



# Recursos

Lecturas sobre amortización y TVM (capítulos prácticos de finanzas).

Guías bancarias sobre covenants y term sheets (documentos de bancos y asesores).

Blogs y casos de restructuración (leer casos reales para entender trade-offs).



# Buenas prácticas

Mantén un registro vivo de deuda (actualizado mensualmente).

Prioriza liquidez: nunca pongas todos los vencimientos en el mismo trimestre.

Antes de negociar, prepara números (forecast, escenarios) y una alternativa creíble.

Considera costo total (fees, covenants, warrants), no sólo la tasa.

Para personas: evita consolidar si el nuevo préstamo aumenta plazo y término total de intereses sin reducir carga mensual real.

Para empresas: modela múltiples escenarios de stress y automatiza alertas de covenant.



# Rúbrica de evaluación (para proyectos / capstone)

Modelo y consistencia (35%): forecast coherente, checks, cash reconciliation.

Estrategia (30%): plan de reducción/refinanciación lógico y cuantificado.

Negociación y documentación (20%): oferta firme y checklist DD.

Presentación (15%): claridad, resumen ejecutivo y plan operativo.



# Empresa

## Definición


# Fundamentos


## Definición de objetivos


## Modelo

### B2B, B2C, Integración Vertical/Horizontal


## Supervivencia

### Desarrollo


### Finanzas

#### Principios Finaniceros 

Base acumulación
partida doble/ecuación contable
principio del costo historico
Devengo de ingresos y matching (coincidencia)
Prudencia/conservadurismo
Consistencia
Materialidad
Plena revelación/transparencia
Unidad de negocio/entidad contable
Periodicidad
Sustancia sobre forma
Relevancia y fiabilidad


#### Efectos prácticos 

Depreciación / Amortización
Provisiones y estimaciones (bad debt, garantía)
Ingresos diferidos / deferred revenue
Impairment (deterioro de activos)


#### Valoración y análisis financiero

1. Cuenta vs Cash: La utilidad contable ≠ flujo de caja
2. Covenants y presentación: Bancos revisan ratios contables (Debt/EBITDA, Interest Coverage) en base a estados — políticas contables (p. ej. capitalizar vs expensar) cambian esos ratios.
3. Comparabilidad: Distintas políticas (IFRS vs US GAAP, o elecciones contables) requieren ajustes para comparar empresas/periodos.
4. Transparencia: Notas y revelaciones permiten ajustar supuestos en valoración (pasivos contingentes, arrendamientos, etc.).


#### 3-statement:

Tres estados financieros interconectados
Balance
flujo de caja/cash flow
(P&L) Income Statement/est result/cuent result

Muestra impacto contable (profit) y de caja (liquidity) en forma consistente.

1. Income Statement (Cuenta de resultados): ingresos, costos, gastos, depreciación, intereses, impuestos → Net Income
2. Balance Sheet (Balance): activos (cash, AR, inventario, PPE neto), pasivos (AP, deuda) y patrimonio (equity, RE).
3. Cash Flow Statement: parte del Net Income y lo reconcilia con movimientos no-cash (depreciación), cambios en working capital, capex y flujos de financiación → Ending Cash.

Muestra impacto contable (profit) y de caja (liquidity) en forma consistente.
Permite valorar (DCF), analizar solvencia (covenants), planear financiamiento y evaluar escenarios.
##### Es la base para due diligence y presentación a inversores/bancos.


##### Reglas de enlace (Conectar 3-statement):

Net Income (IS) → Retained Earnings (Balance): RE(t) = RE(t-1) + NetIncome(t) − Dividends(t).
Depreciación (IS) → Accumulated Depreciation (Balance); Depreciación es un addback en Cash Flow.
Capex (CF) → PPE gross (Balance) (increase) y se deprecia en IS (según política).
ΔWorking Capital (Balance) → Cash Flow: cambios en AR/Inventory/AP afectan caja.
Debt proceeds / repayments (CF) → Debt (Balance).
Interest (IS) ↔ Debt (Schedule): idealmente interest = rate × opening (o average) debt calculado en debt schedule.
Ending Cash (CF) = Cash (Balance) — debe cuadrar siempre.


##### Checks que siempre deben hacerse

Balance sheet cuadre: Total Assets == Total Liabilities + Equity (por cada periodo).
Ending Cash match: Balance.Cash == CashFlow.EndingCash.
Change in Debt desde Debt Schedule = Financing line en Cash Flow.
Retained Earnings movement = sum(Net Income − Dividends) acumulado.
No links a cero: evita fórmulas que dividan por cero; usa IFERROR o condicionales.
Incluye una hoja Checks con fórmulas booleanas (=IF(ABS(A−B)<1, "OK","ERROR")) para detectar errores rápidamente.


##### Extensiones habituales

DCF / Valoración (usar FCF desde el 3-statement).
LBO model (añadir debt schedule con amortización y covenants).
M&A (accretion/dilution) (combinación de modelos y sinergias).
Cohort & unit economics (conectar modelo operativo con drivers de revenue).


#### Sustancia sobre forma:

Verdad economica sobre lo legal: Eso es lo que deben reflejar los estados financieros
Impacta directamente en ratios

Transacciones deben registrarse según su realidad económica y no sólo según su forma legal.
Evita que empresas oculten riesgo u obtengan ventajas contables mediante estructuras legales 
Como: aparentar que venden un activo cuando en la práctica es financiación).

Fundamental para análisis financiero, valoración y para acreedores/inversores que toman decisiones basadas en los estados.
Impacta directamente en ratios (apalancamiento, cobertura), en cash vs profit, y en cumplimiento de covenants.
 

##### Casos donde la sustancia es critica

Sale-and-leaseback: si “vendes” un activo y lo alquilas inmediatamente, ¿realmente vendiste o solo obtuviste liquidez con obligación de pago? Si es financiación, el activo debe seguir en balance o registrarse una obligación financiera.
Factoring sin transferencia de riesgos: vender facturas pero mantener el riesgo de crédito → no hay verdadera derecognición de cuentas por cobrar.
Operaciones con SPV / securitización: si la empresa sigue expuesta a riesgos/beneficios, tal vez deba consolidarse.
Contratos de recompra (repos): parecen ventas, pero son préstamos colateralizados.
Arrendamientos disfrazados (antes «leasing operativo» vs «financiero»): si contrato transfiere la mayor parte de beneficios/riesgos — es deuda de hecho. (IFRS16 endureció esto).


##### Señales de alerta / “red flags” que revisar en due diligence

Ventas a partes relacionadas con cláusulas de recompra.
Transacciones con SPV que tienen retrocesión de riesgo.
Ingresos o ganancias poco consistentes con cash flows históricos.
Flujos de caja que muestran salidas futuras significativas relacionadas con ventas recientes.
Aeronaves/propiedades/equipos “vendidos” y subarrendados inmediatamente con términos favorables.


#### 1. Balance:

Posición finanicera en un periodo
activos, pasivos, patrimonio
Activo = Pasivo + Patrimonio (Equity)

1. Activos (Assets): recursos controlados por la empresa que generarán beneficios futuros.
Corrientes (short-term): caja, cuentas por cobrar (AR), inventario. → Se espera convertirlos en caja en ≤12 meses
No corrientes (long-term): propiedades, planta y equipo (PPE), activos intangibles, inversiones a largo plazo. → Uso/beneficio >12 meses.

2. Pasivos (Liabilities): obligaciones presentes que la empresa debe pagar.
Corrientes: cuentas por pagar (AP), deuda a corto plazo, pasivos acumulados.
No corrientes: préstamos bancarios a largo plazo, bonos, arrendamientos financieros.

3. Patrimonio (Equity): Parte residual que queda a los accionistas después de pagar pasivos. 
Incluye capital social, prima de emisión, utilidades retenidas (retained earnings) y otros componentes (reservas, resultado integral).


Relación con otros estados financieros: 

Net Income (IS) → Retained Earnings (Balance): las utilidades netas del periodo aumentan las utilidades retenidas (menos dividendos).
Cash Flow Statement muestra cómo cambió la Caja (activos corrientes) y debe cuadrar con el saldo de caja del Balance.
Depreciación afecta el Income Statement (gasto) y el Balance (acumulación de depreciación → reduce Net PPE).
Capex: se registra como aumento de PPE (Balance) y como salida de caja en Cash Flow (inversión).


##### Ej: Balance

Activo:
Caja y equivalentes
Cuentas por cobrar
Inventarios
Activos corrientes totales
PPE (neto)
Activos no corrientes totales
Total Activos

Pasivo:
Cuentas por pagar
Deuda corriente
Pasivos corrientes totales
Deuda a largo plazo
Pasivos no corrientes totales
Total Pasivos

Patrimonio:
Capital social
Utilidades retenidas
Otros componentes de equity
Total Patrimonio


##### Errores comunes y señales de alerta

Inventarios o AR crecientes sin aumento proporcional de ventas → posible acumulación de stock o problemas de cobranza
Caja baja mientras el balance muestra utilidades crecientes → diferencias entre profit y cash (fíjate en cambios de WC y capex).
Gran volumen de activos intangibles o revalorizaciones frecuentes → revisar sustancia y recuperación (impairment).
Deuda concentrada en el corto plazo → riesgo de refinanciación.


##### Checklist para reviar Balace

1. ¿Total Activos == Total Pasivos + Patrimonio? ✓
2. ¿Ending Cash coincide con Cash Flow Statement? ✓
3. ¿Existencias de cuentas por cobrar/inventario razonables respecto a ventas? ✓
4. ¿Deuda bien desglosada por vencimiento? ✓
5. ¿Políticas contables y estimaciones (depreciación, provisiones) documentadas? ✓


#### 2. PY/RE:

1. PY = Pérdidas y Ganancias (Estado de Resultados / Income Statement)
Actividad económica de un periodo
Ingresos, costos, gastos, impuestos y el resultado final (Resultado del Ejercicio / Net Income).

Estructura:

Revenue (Ventas):
− COGS → = Gross Profit
− SG&A / Operativos → = EBITDA (si no hay dep)
− Depreciación / Amortización → = EBIT
− Gastos financieros (interés) → = EBT
− Impuestos → = Resultado del Ejercicio (Net Income)

Mide rentabilidad del periodo
Base para calcular margenes (EBITDA margin, net margin) y para decidir impuestos, reparto de utilidades, etc.


2. RE = Resultado del Ejercicio (el Net Income del periodo)
También se usa RE para Retained Earnings (Utilidades retenidas), que es la cuenta patrimonial acumulada donde se incorporan esos resultados.


RE — Resultado del Ejercicio vs Retained Earnings:

1. Resultado del Ejercicio (RE = Net Income)
Número final del PY: la ganancia (o pérdida) generada en ese periodo.
Es un dato de flujo (período): corresponde al periodo (mes/trimestre/año).


2. Utilidades retenidas (Retained Earnings/RE)
Cuenta del patrimonio en el Balance: acumula los resultados netos de periodos anteriores menos dividendos pagados.

Fórmula simple de rollforward:
Closing RE = Opening RE + Resultado del Ejercicio (Net Income) − Dividends ± Ajustes
##### Porción de ganancias que la empresa decidió retraer (no repartir) y reinvertir.


Enlace 3-statement:

El Resultado del Ejercicio se calcula en el PY.
Al cierre del periodo, ese resultado se transfiere (se cierra) al patrimonio: aumenta (o disminuye) la cuenta Utilidades retenidas en el Balance.
En el Cash Flow (método indirecto): el Net Income es el punto de partida; se ajusta por partidas no-cash (depreciación) y por cambios en working capital para llegar al cash from operations.

Asiento contable simplificado al cierre (si hay ganancia y no hay dividendos):
(cerrar resultados) Débito: Cuentas de resultado (p.ej. “Resultados del ejercicio”) — Crédito: Utilidades retenidas (o directamente Ajuste a Patrimonio).
(la contabilidad práctica varía según el sistema contable, pero el efecto económico es ese: RE patrimonial sube).


##### Ej PY/PE

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


##### Errores y confusiones comunes

Confundir Resultado del Ejercicio (flujo del periodo) con Cash: utilidad ≠ caja.
Confundir “RE” como resultado del ejercicio o retained earnings — siempre confirma en la plantilla qué significa.
No reconciliar Net Income con el cambio en Retained Earnings (olvidar dividendos u otros ajustes).
Tratamientos contables (p. ej. revalúos, ajustes por conversión) que afectan patrimonio pero no provienen del PY.


##### Relevancia para finanzas

En modelos 3-statement: PY → RE es el enlace clave entre P&L y Balance.
Para valoración por DCF usarás Free Cash Flow (no sólo Net Income), pero el PY es necesario para calcular impuestos, EBITDA, etc.
Los acreedores miran ratios que usan utilidades (Interest Coverage) y patrimonio (Debt/Equity), por eso las decisiones sobre distribuir utilidades o retenerlas afectan financiamiento y covenants.


#### 3. Flujo de caja/cash flow:

Entradas y salidas reales de efectivo
muestra liquidez real: cuánto efectivo entra, cuánto sale y cuándo.

Estructura:

1. Flujo de caja de las operaciones (Operating Cash Flow, CFO)
Dinero generado/consumido por la actividad operativa normal (ventas, pagos a proveedores, cobros a clientes, impuestos, intereses en algunos esquemas).

2. Flujo de caja de inversión (Investing Cash Flow, CFI)
Compras/ventas de activos no corrientes: CAPEX (salidas), ventas de activos (entradas), inversiones financieras a largo plazo.

3. Flujo de caja de financiación (Financing Cash Flow, CFF) 
Emisión/repago de deuda, emisión/compra de acciones, pago de dividendos, cobro de préstamos.

Cambio neto en caja = CFO + CFI + CFF.
Ending Cash (Balance) = Beginning Cash + cambio neto en caja.


Calculo del cash flow:

1. Método indirecto:
Parte del Net Income (utilidad contable) y lo ajusta por partidas no-cash (depreciación, amortización) y por cambios en el working capital (ΔAR, ΔInv, ΔAP).
Lista directamente cobros de clientes, pagos a proveedores, pagos de sueldos, impuestos pagados, etc. (más informativo pero requiere mayor detalle operativo).

2. Método directo:

```
CFO = Net Income
+ Depreciación y amortización
± Cambios en cuentas del capital de trabajo (−ΔAR − ΔInventario + ΔAP)
± Otros ajustes no-cash (provisiones, pérdidas/ganancias no realizadas)
```


##### Ej y cálculo de cash flow

Supongamos: 
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


##### Métricas y conceptos derivados importantes

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



#### El flujo de caja es crítico:

Liquidez y supervivencia: determina si la empresa puede pagar su operación, nómina, proveedores y vencimientos de deuda.
Valuación: los modelos DCF usan Free Cash Flows (no utilidades contables) como insumo principal.
Financiación: bancos e inversores miran cash flow para evaluar capacidad de repago (DSCR, Interest Coverage).
Decisiones operativas: indica si crecimiento se autofinancia o requiere capital externo.


#### Errores comunes y señales de alarma en cash flow

Altas utilidades con cash flow operativo negativo → señal de alerta (posible crecimento financiado por deuda o AR creciente).
Ventas crecientes pero AR subiendo mucho → problemas de cobranza o ventas dudosas.
Inventario creciendo sin incremento de ventas → riesgo de obsolescencia.
Depreciaciones grandes que ocultan capex insuficiente → riesgo de “deferred maintenance”.


#### Relación Financiera:

El Balance es una foto en un momento (stocks): qué tienes (activos), qué debes (pasivos) y el patrimonio.
El PY (Pérdidas y Ganancias) te dice qué pasó en un periodo: ingresos, gastos → Resultado del Ejercicio (Net Income).
El Flujo de caja muestra cuánto efectivo realmente entró y salió en ese periodo (liquidez).
##### Los tres están conectados: el Net Income del PY fluye al patrimonio (utilidades retenidas) en el Balance y es el punto de partida del Flujo de caja (método indirecto).
##### Cambios en partidas del Balance (AR, Inventario, AP, PPE, Deuda) aparecen como ajustes en el Flujo de caja.


#### Conexiones financieras:

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


#### Net Income ≠ Cash (siempre verificar)

Depreciación/amortización: reduce utilidad pero no es salida de caja → se suma en CFO.
Ventas a crédito: reconocen ingreso (devengo) pero generan AR, no caja.
CapEx: no aparece en PY como gasto (solo depreciación), pero es salida de caja en CFI.
Pagos de deuda: reducen caja y deuda (Balance), no afectan PY salvo la parte interés.


#### Verificación financiera

¿Net Income del PY está linkeado a Retained Earnings (Balance)?
¿Net Income aparece en la CF como punto de partida (método indirecto)?
¿Depreciación del IS está sumada en CFO y acumulada en Accum. Depr del Balance?
¿CapEx en CF está linkeado a Gross PPE en el Balance?
¿ΔAR/ΔInv/ΔAP en CF coinciden con los cambios entre columnas del Balance?
¿Debt Proceeds/Repayments en CFF dan la variación correcta del saldo de deuda en el Balance?
¿Ending Cash (CF) == Cash (Balance)?


#### Rs finanicero

##### Piensa PY = “qué gané/perdí”, Balance = “qué tengo y debo ahora”, CF = “qué caja entró/salió realmente”.

##### Usa el Net Income como puente: PY → CF (operaciones) → Balance (Retained Earnings), y ajusta por inversiones, deuda y cambios en working capital.



## Desarrollo del Negocio


### Producto


### Finanzas


### Pipeline


### Estrategia comercial


### Modelo Financiero Básico


### 

### Ecosistema


### Segmentación 


### ICP


### Buyer persona


### Comunicación

#### One-pagers

#### Memo 

## Finanz

Leer e interpretar estados financieros
Evaluar decisiones de inversión, estructura de capital y política de dividendos.
Entender gestión de tesorería, working capital y riesgos financieros.
Pitch de inversión 

### Producción

#### Deuda

Se compra la matería prima (barata) con deuda (barata)
Se vende producto final 'caro'
Con la diferencia se paga la deuda o los intereses en caso de rolleo

##### Exceso: apalancamiento sin fundamento -> quiebra

Métricas y KPIs
Personal: ratio deuda/ingreso, porcentaje pago mínimo vs ingreso, months to debt-free, interest paid YTD.
Empresa: DSCR (Debt Service Coverage Ratio), Interest Coverage (EBIT/Interest), Net Leverage (Net Debt / EBITDA), debt maturities ladder, covenant cushion.
Early-warning: cash runway to next maturity, covenant breach probability, burn multiple


### Impuestos

Tratar las reducciones

## Operaciones/RH

Ing, finanz, 


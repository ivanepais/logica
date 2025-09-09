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


## Comunicación

Clara y persuasiva
Efectiva y narrativa/ storytelling
Análisis crítico
Comunicación estratégica
Métricas y evaluación
Sensibilidad ética e intercultural

### 1. Principios de comunicación: emisor, mensaje, canal, ruido, feedback.

Emisor:
Persona, equipo u organización que origina el mensaje.
##### errores: falta de claridad en objetivo; credibilidad débil; no adaptar el mensaje a la audiencia.

Mensaje:
##### Contenido real transmitido —ideas, datos, emociones, instrucciones.
##### idea principal (clara), estructura (inicio → desarrollo → cierre), consistencia y concisión.
##### Adaptación: un mismo mensaje puede y debe redactarse distinto según audiencia y canal (ej.: nota de prensa vs. email interno).
Ej: idea principal al inicio y bullets para puntos accionables.

Canal:
Medio por el que viaja el mensaje (email, reunión presencial, comunicado de prensa, redes, intranet, llamada).
##### Elección de canal: urgencia, tamaño y características de la audiencia, necesidad de registro/documentación, posibilidad de diálogo.
##### Ej: mezcla canales (redundancia estratégica): canal rico para explicar + canal persistente para registro.

Ruido:
##### Factor que distorsiona el mensaje o impide su recepción correcta.
##### Físico: mala conexión, micrófono que falla.
##### Técnico: archivo corrupto, enlace roto.
##### Semantic/lingüístico: jerga que el receptor no entiende.
##### Psicológico: prejuicios, estrés o preocupación del receptor.
##### Cultural/organizacional: normas locales que cambian la interpretación.
##### Mitigación: prueba técnica, lenguaje claro, anticipar dudas, usar ejemplos, validar comprensión.
Ej: lista de riesgos de ruido antes de comunicar (p. ej. “¿hay términos técnicos? ¿podría malinterpretarse esto?”) y prepara mitigaciones.

Feedback:
Respuesta del receptor al mensaje —puede ser verbal, no verbal, formal (encuesta) o informal.
Cierra el ciclo comunicativo; permite corregir, clarificar y medir impacto.
##### Ej: Diseña el canal de feedback desde el principio: “Si tenés preguntas, escribí a X / respondé esta encuesta en 48h / dejamos 15’ para Q&A”.

ciclo: 
##### Emisor → codifica → mensaje → canal → receptor (decodifica) → feedback → emisor ajusta. 
Ruido puede afectar cualquiera de esos pasos.


### 2. Escritura clara: estructura, párrafo, tono, precisión.

1. Estructura (el esqueleto del texto):
##### Forma general: cómo organizas ideas para que el lector entienda el mensaje sin esfuerzo
##### Empieza por el propósito: ¿qué quieres que el lector sepa, sienta o haga? Escribe eso en una frase.
##### Usa la regla del informe ejecutivo: idea principal primero, luego contexto y detalles. (Inverso a la novela: no escondas la conclusión).
Divide en secciones con subtítulos claros; cada sección responde a una pregunta concreta.
Mantén párrafos cortos (3–6 líneas en pantalla).
Usa listas y viñetas para pasos, cifras o ventajas — facilitan el escaneo.

2. Párrafo (unidad mínima con sentido)
Bloque que desarrolla una idea completa
Estructura:
##### Frase tópico — enuncia la idea central del párrafo (1ª línea).
##### Frases de apoyo — datos, ejemplos, evidencia o explicación.
##### Frase de cierre / enlace — conclusión o transición al siguiente párrafo.
##### Un párrafo = una idea. Si introduces otra idea, crea un párrafo nuevo.

3. Tono (cómo suena tu texto)
##### Actitud de tu escritura —formal, cercano, técnico, persuasivo.
##### Debe ajustarse a la audiencia y al canal.
##### Conoce a tu audiencia: directivos = conciso y orientado a riesgo/beneficio; empleados = cercano y práctico; prensa = neutro y verificable.
##### Sé consistente: si empiezas formal, mantén formalidad en todo el texto.
##### Sé humano: usa frases cortas y verbos concretos; evita muletillas corporativas vacías (“sinergia”, “aprovechar oportunidades”) salvo que añadan valor.

4. Precisión (exactitud y economía del lenguaje)
##### Decir lo justo y necesario, con datos y sin ambigüedades.
##### Usa números concretos cuando puedas (fechas, porcentajes, plazos). Evita: “pronto”, “mucho”.
##### Sé específico en responsabilidades: “Marketing enviará el email el 15/09.” en vez de “se enviará un email”.
##### Elimina palabras vacías: adverbios y frases redundantes (“debemos de”, “en el día de hoy”).
##### Evita ambigüedades: “podría” vs “debe”; si hay condiciones, expón el qué pasa si.
##### Usa ejemplos o evidencias cuando hagas afirmaciones fuertes.

Checklist:
##### ¿Cuál es la idea central en una frase? (✓)
##### ¿Se entiende en 30–60 segundos? (✓)
##### ¿Hay números o fechas cuando corresponde? (✓)
##### ¿El tono es el adecuado para la audiencia? (✓)
##### ¿Reducible a un titular o un bullet? (✓)


### 3. Presentación oral: preparación, estructura (inicio-cuerpo-cierre), manejo de nervios.

1. Preparación (antes de subir al escenario)
##### Define en una frase qué quieres que la audiencia sepa, sienta o haga al terminar. 

Conoce a tu audiencia:
##### Qué saben ya? ¿Qué les importa? ¿Qué lenguaje usar (técnico vs. simple)?
Ajusta ejemplos y beneficios al interés del grupo.

Estructura y mensaje:
##### Escribe primero la idea principal y 3–5 puntos de apoyo. Menos es más.
##### Prepara 1–2 diapositivas clave (si las usarás) —no llenes con texto.

##### Tiempo y ritmo:
Diseña tu charla para ocupar entre 80–90% del tiempo asignado (deja margen para imprevistos y Q&A).
Marca tiempos por sección y ensaya con cronómetro.

Materiales y logística:
Slides: máximo 1 idea por diapositiva; usa titulares claros y bullets mínimos.
Backups: PDF de las slides, USB, enlace en la nube.
Revisa micrófono, clicker, proyector antes de empezar.

Rehearsal (ensayo efectivo):
##### 3–5 ensayos totales: 1 de lectura, 2 de voz alta, 2 con público (amigos/compañeros o grabándote).
##### Graba video/audio y revisa posture, muletillas y ritmo.


2. Estructura: inicio – cuerpo – cierre (plantilla simple y ejemplos)
##### Inicio — Gancha + Propósito (30–60s)
##### Objetivo: captar atención y decir de qué va la charla.
##### Opciones de gancho: dato sorprendente, pregunta retórica, anécdota breve, resultado clave.
##### Fórmula: Gancho → Presentación breve (quién eres) → Idea principal / objetivo.

Cuerpo — 3 bloques claros (70% del tiempo):
##### Divide en 2–4 secciones (ideal 3): problema → solución → evidencia/plan.
##### Para cada sección: título claro + 2–3 bullets / ejemplos + transición al siguiente bloque.
##### Señaliza el progreso: “Hemos visto X; ahora veremos Y.”

Transiciones útiles:
“Pasando ahora a…”
“Esto nos lleva a…”
“Para entender por qué, miremos…”

Cierre - Recordatorio + Llamado a la acción (final 1–2 min)

##### Resume en 1 frase la idea principal.
##### Reitera beneficio o impacto (qué gana la audiencia).
##### Llamado a la acción claro: “Aprobemos el presupuesto” / “Inscribanse” / “Probad la demo”.
##### Cierre memorable: cita breve, desafío, o pregunta que deje pensando.

3. Entrega: voz, cuerpo y ritmo

Voz:
##### Habla con voz proyectada (no grites).
##### Modula: varía ritmo y volumen para énfasis.
##### Pausas: usa silencios antes de ideas clave para dar peso.
##### Evita muletillas: registra tus “eh”, “o sea” y sustitúyelos por pausa.

Cuerpo / lenguaje no verbal:
##### Postura abierta, hombros relajados.
##### Mirada: escanea la sala, mantén contacto con varios sectores (3–4 puntos).
##### Gestos: gestos naturales y medidos; evita manos cruzadas o esconder manos.
##### Movimiento: muévete con propósito (entrada, punto A, punto B), no deambules sin sentido.

4. Manejo de nervios — técnicas prácticas (previo y en el momento)
##### Antes de hablar (30–60 min antes)
Calentamiento vocal: hums/“mmm”, lee un párrafo en voz alta.
Respiración diafragmática: 4 s inhala — 6 s exhala (repetir 4 veces).
Movilidad: estira hombros, cuello, piernas (reduce tensión).
Power pose 1–2 min (postura abierta) para subir confianza.

##### Minutos antes (0–5 min)
Visualiza 1–2 detalles del éxito (p. ej. gente asintiendo).
Repite tu frase de apertura en voz baja.
##### Encuentra 1 cara amigable en la sala para dirigir tu primera línea.

##### Durante la presentación
Si te tiemblan manos: apoya una mano en el atril o usa el clicker.
Si te trabas: respira, pausa 2–3 s y continúa (nadie nota pequeñas pausas).
Convertir nervios en energía: usa velocidad ligeramente mayor al inicio y modula.
##### Manejar silencio incómodo: acepta la pausa, sonríe y prosigue.

##### Si olvidas algo
Usa notas con palabras clave, no texto completo.
Parafrasea: “Lo que quería decir es…” o “Volvamos a…”.
Si no sabes una respuesta en Q&A: admite honestamente y propone seguimiento.


5. Q&A: cómo gestionar preguntas
##### Invita a preguntas al final (o durante si lo has planeado).
Repite la pregunta en voz alta (beneficio: clarifica y te da tiempo).
Responde breve → opcionalmente detalla → ofrece seguimiento si es muy largo.
Si hay una pregunta hostil: mantén calma, responde con hechos y puentea: “Entiendo la preocupación; lo que estamos haciendo es…”
Si no sabes: “Buena pregunta — no lo tengo ahora, te la respondo por email antes del viernes.”

6. Guías de tiempo para distintos formatos
Elevator pitch (60–90s): 1 idea central + 1 beneficio + 1 CTA.
Charla 10 min: 30s inicio / 8 min cuerpo (3 bloques) / 1.5 min cierre.
Presentación 30 min: 2–3 min inicio / 22–24 min cuerpo / 3–4 min cierre + Q&A.
Town-hall 60 min: 5–7 min inicio / 35–40 min cuerpo con ejemplos + 10–15 min Q&A.

7. Checklist antes de empezar

¿Objetivo en 1 frase?
¿Inicio con gancho listo?
¿Tiempo cronometrado y ensayado?
¿Slides con 1 idea cada una?
¿Backup y equipo verificados?
¿Estrategia para preguntas y follow-up?


### 4. Comunicación no verbal: postura, mirada, gestos, proxemia.

1. Postura
##### Transmite: seguridad, apertura, interés o lo contrario (defensividad, inseguridad).
##### Postura abierta: hombros relajados, torso ligeramente hacia adelante, manos visibles. Señala apertura y disposición.
##### Evita: encorvarse, cruzar brazos, esconder manos en los bolsillos (puede sonar a cierre o falta de confianza).
##### Anchor: apoya el peso en ambos pies (si estás de pie) o siéntate con la espalda tocando el respaldo ~¾ para estar cómodo y atento.

2. Mirada
##### Transmite: atención, honestidad, conexión o evasión.
##### Contacto visual equilibrado: mira a la persona ~3–5 s y luego cambia a otra; evita mirar fijo (intimidad) o demasiadas miradas cortas (evasión).
##### Escaneado por sectores: en presentaciones, divide la sala en 3–4 “puntos” y mira cada punto periódicamente para incluir a toda la audiencia.
##### Si te da ansiedad: fija la mirada en la frente o entre los ojos de la persona —parecerás mirar directamente sin sentirte invadido.
##### Errores comunes: mirar sólo a una persona, evitar mirar al hablar o mirar la pantalla todo el tiempo en reuniones virtuales.

3. Gestos
##### Rransmite: énfasis, claridad, apertura emocional; también puede distraer si son excesivos.
##### Gestos ilustrativos: usa las manos para marcar tamaño, dirección, enumerar (1–2–3) o señalar contraste. Afianzan la comprensión.
##### Evita gestos repetitivos o autocalmantes (frotarse la cara, jugar con anillos) —restan credibilidad.
##### Sincronía: que los gestos coincidan con la palabra clave; manos quietas en frases informativas, gestos abiertos en llamados a la acción.
Ejemplo: al decir “crecimiento del 20%”, abre la mano para mostrar expansión.
Ejercicio (3–5 min): graba 1 minuto explicando un dato; mira el video y cuenta gestos útiles vs. distractores.

4. Proxemia (distancia interpersonal)
##### Transmite: intimidad, formalidad, poder o amenaza —varía según contexto y cultura.
Zonas generales (orientativas): íntima, personal, social, pública.
En entornos corporativos normalmente usamos la zona social (1.2–3 m) para conversaciones casuales y la pública para presentaciones.

##### Respeta el espacio personal: no te acerques demasiado en el primer contacto, especialmente con superiores o personas de otra cultura.
Acércate para crear cercanía solo si la relación y la cultura lo permiten (p. ej. coaching individual).
En entrevistas o reuniones formales, mantén una distancia que permita notas o laptops sin invadir.

##### La “distancia cómoda” cambia entre culturas y personas —cuando haya duda, comienza más amplio y acércate si la otra persona lo hace.
Ejercicio (2 min): observa en una reunión quién se sitúa más cerca y qué relación tienen; aprende patrones de tu entorno.


Señales contradictorias y coherencia
##### Lo más poderoso de la comunicación no verbal es cuando coincide con lo que dices.
##### Si dices “estamos tranquilos” pero cruzas los brazos y miras al suelo, el mensaje pierde fuerza.
##### Busca coherencia: postura + mirada + gesto deben reforzar tu palabra.

##### Entornos virtuales
##### Colócate a la altura de la cámara (mirada casi directa).
##### Usa un encuadre medio (cabeza y parte superior del torso) para que gestos y postura sean visibles.
Mantén el micrófono y la cámara encendidos cuando interactúes: la mirada virtual y las microexpresiones importan.

##### Checklist reunión o presentación
Postura: hombros relajados, torso ligeramente hacia adelante
Mirada: plan para escanear la sala / cámara.
Gestos: naturales, con propósito; evita movimientos repetitivos
Proxemia: distancia apropiada según contexto/cultura
Coherencia: mi lenguaje corporal refuerza mi mensaje principal. ✅

Escucha activa y preguntas

Es clave en la comunicación efectiva

##### Incluye técnicas como parafrasear, reflejar, resumir, aclarar y usar incentivos mínimos.

##### Las preguntas pueden ser abiertas, cerradas, de sondeo, reflexivas, entre otras.

Cada una tiene su momento


### Escucha activa:
##### Es una forma intencional de escuchar que va más allá de oír palabras
##### Implica prestar atención plena, entender el mensaje (contenido y emoción), verificar la comprensión y responder de manera que el emisor se sienta escuchado y entendido
##### Es la base de conversaciones eficaces, entrevistas, feedback y manejo de conflictos.

1. Atención plena
Quitar distracciones: teléfono en silencio, pantalla cerrada.
Mirada y postura que muestran presencia.
Técnica: 1 minuto de respiración antes de la conversación para centrarte.

2. Señales verbales y no verbales de escucha
Minimal encouragers: “mmm”, “ajá”, “entiendo”.
Contacto visual, asentir con la cabeza, postura abierta.
Parafrasear / Reflejar

3. Parafrasear / Reflejar
Repite con tus palabras la idea principal: “Lo que entiendo es que... ”
Beneficio: valida y corrige malentendidos.

4. Reflejar emociones
Identifica y nombra la emoción: “Suena frustrante” / “Parecés entusiasmado”.
Muestra empatía incluso si no compartís la emoción.

5. Clarificar y profundizar
Preguntas abiertas y de sondeo (ver abajo).
Evita asumir; pide ejemplos o datos concretos.

6. Resumen y cierre
Resume los puntos clave y los próximos pasos: “Entonces, acordamos X; yo hago Y antes del viernes.”
Asegura alineamiento y responsabilidad.

Frases útiles de escucha activa
##### Parafraseo: “Si te entiendo bien, lo que pasó fue…”
##### Reflejar emoción: “Se nota que esto te preocupa; ¿qué parte te inquieta más?”
##### Clarificar: “¿Podés darme un ejemplo concreto?”
##### Profundizar: “¿Por qué creés que ocurrió eso?”
##### Validar: “Tiene sentido que lo veas así.”


##### Tipo de preguntas y cuándo usarlas

1. Abiertas — para explorar y generar información.
Ej: “¿Cómo describirías el problema?”
Uso: inicio de entrevistas, reuniones de diagnóstico.

2. Cerradas — para confirmar hechos o tomar decisiones rápidas (sí/no, cifras).
Ej: “¿Terminaste el informe?”

3. De sondeo/profunda — para explorar causas y motivaciones.
Ej: “¿Qué pasos llevaron a ese resultado?” / “¿Qué alternativas consideraron?”

4. De clarificación — para evitar ambigüedades.
Ej: “Cuando decís ‘pronto’, ¿a qué plazo te referís?”

5. De contraste / hipotéticas — para probar opciones y consecuencias.
Ej: “Si hiciéramos X en lugar de Y, ¿qué cambiaría?”

6. De seguimiento / funneling — empezar amplia → ir a lo específico.
Ej: Abierta: “¿Qué pasó?” → Sondaje: “¿Quiénes estuvieron involucrados?” → Cierre: “¿Qué resultado buscamos ahora?”

7. Reflexivas / retóricas — para invitar a la reflexión, no siempre requieren respuesta.
Ej: “¿Qué aprenderíamos si probamos esto?”


Errores:

##### Interrumpir: deja terminar. Practica contar 2 segundos después de que la otra persona termine antes de responder.
##### Formular soluciones prematuras: evita “dar la receta” hasta entender la raíz.
##### Escuchar para responder, no para entender: enfócate en comprender primero
##### Juzgar o minimizar: evita frases como “no es para tanto”. Mejor: “Entiendo por qué te afecta”.
##### Multitasking: apagar notificaciones es más poderoso de lo que creés.


##### Checklist antes/durante/después de una conversación
Antes: ¿Tengo objetivo claro? ¿Apago distracciones?
Durante: ¿Parafraseé? ¿Pregunté para aclarar? ¿Validé emociones?
Después: ¿Resumí acuerdos y próximos pasos? ¿Hice seguimiento?


##### Manejo de situaciones difíciles
##### Emisor emocional o enojado: deja que exprese; refleja emoción (“Se te nota molesto”); ofrece seguir cuando esté listo.
##### Persona evasiva o cerrada: usa preguntas abiertas y ejemplos concretos; establece seguridad y propósito.
##### Conversación técnica vs. no técnica: adapta el lenguaje; pide que expliquen un “ejemplo” si se vuelve muy técnico.


## Liderazgo

### 1. Fundamentos: 

Propósito / visión: dirección clara que conecta el día a día con un “por qué” mayor.
Comunicación clara: transmitir expectativas, prioridades y feedback de forma simple y repetida.
Toma de decisiones: escoger y ejecutar con criterio, balanceando rapidez, calidad y aceptación.
Inteligencia emocional: autoconocimiento, regulación emocional y empatía para leer y responder a las personas.
Delegación y empowerment: distribuir responsabilidad con autoridad y límites claros.
Desarrollo de personas: coaching, mentoring y crecimiento planificado de talento.
Cultura y valores: modelar comportamientos deseados y establecer normas (rituales, reconocimientos).
Accountability: responsabilidades definidas, métricas claras y seguimiento regular.
Gestión del cambio: capacidad para diseñar y sostener transiciones (comunicación, quick wins, stakeholders).
Ética y credibilidad: consistencia entre lo que dices y lo que haces; transparencia.


#### 2. Comportamientos

##### Define y comparte objetivos SMART
Abre 1:1s con preguntas sobre desarrollo y bloqueos, no solo status.
Entrega feedback con estructura (SBI: Situación–Comportamiento–Impacto).
Delegas con entregables y hitos, no con “hazlo como puedas”.
Pides y actúas sobre feedback del equipo.
Prioriza problemas que generan mayor impacto (80/20).
Escala decisiones cuando faltan recursos o autoridad; no por hábito.
Proteges al equipo de ruido organizacional (remueves blockers).


#### 3. Aptitudes

##### Visión estratégica: practica escribiendo 1 paragraph que conecte tu trabajo con la estrategia de la compañía.
Comunicación ejecutiva: prepara un pitch de 3 minutos sobre tu prioridad. Ensaya en voz alta.
Coaching: aplica GROW en una 1:1 (Goal, Reality, Options, Will).
Decisión bajo incertidumbre: usa premortem antes de decidir (¿por qué fallaría esto?).
Negociación / influencia: practica BATNA y preparar alternativas antes de una reunión clave.
##### Gestión de conflictos: separar posiciones de intereses y buscar soluciones win-win.


#### 4. Liderar siempre con el mismo estilo (no adaptar).

##### Confundir actividad con impacto (muchas reuniones sin resultados).
Feedback vago o esporádico.
Delegar sin autoridad ni contexto.
No alinear al equipo con prioridades ejecutables.
No medir ni revisar progreso (no accountability).
 

#### 5. Engagement / pulse score sobre liderazgo (mensual).

% cumplimiento de OKRs/objetivos del área.
Tiempo medio de resolución de blockers (horas/días).
% tareas delegadas vs retenidas por el líder.
Feedback 360 cualitativo (temas recurrentes: comunicación, apoyo, dirección).
Retención de talento clave (rolling 12m).


#### 6. Assessment (autoevaluación)

##### 1 = Nunca, 5 = Siempre
Comunico prioridades en frases simples?
Termino cada reunión con acciones claras? 
Doy feedback específico y frecuente? 
Delego con entregables y no microgestiono? 
Paso tiempo removiendo blockers?
Apoyo el desarrollo individual con objetivos?
Tomo decisiones con criterios claros?
Mis decisiones consideran quién necesita buy-in?
Promuevo seguridad psicológica para expresar ideas?
Reviso mis KPIs de liderazgo cada mes?
Puntaje ≤ 25: foco en fundamentos operativos. 26–40: buen nivel, priorizar 2 áreas. 41–50: sólido, escala impacto estratégico.


### Fundamentos autoconocimiento

##### Conocer con honestidad tus pensamientos, emociones, valores, fortalezas, límites y patrones de comportamiento — suficiente precisión para tomar decisiones conscientes y cambiar lo que no te sirve.

Importancia: 
Mejora la toma de decisiones (menos sesgo automático).
Reduce reactividad emocional en conflictos.
Permite delegar mejor (sabes qué retienes y por qué).
Facilita el desarrollo de otros (modelas aprendizaje).
Aumenta credibilidad y coherencia (lo que dices = lo que haces).


#### Pilares

##### 1. Observación objetiva — datos reales sobre tu conducta (hechos, no juicios).
##### 2. Feedback externo — cómo te perciben otros (360°, micro-feedbacks).
##### 3. Reflexión estructurada — transformar observaciones en aprendizajes (diario + preguntas guía).
##### 4. Experimentación intencionada — probar nuevos comportamientos y medir efectos.

Si falta uno, el proceso se queda en opinión o en ensayo y error sin aprendizaje.


#### Reflexión guiada (tras 1 reunión o 1 incidente)

Contexto (1 línea):
Hechos observables:
Emoción(s) que sentí:
Reacción que tuve (qué dije / hice):
Qué funcionó (evidencia):
Qué no funcionó (evidencia):
Hipótesis: ¿por qué reaccioné así?
Acción concreta la próxima vez (comportamiento observable):
Indicador para medir si funcionó (cómo sabré):
Fecha para revisar / evidencia a recopilar:


#### Errores

Solo introspección (sesgo): sin feedback estás en un espejo empañado → pide evidencia.
Cambiar todo a la vez: prioriza 1–2 comportamientos.
Confundir intención con impacto: “quise ayudar” no equivale a “tu equipo lo percibió así”. Documenta impacto.
##### Perfeccionismo: autoconocimiento no es perfección; es mejora iterativa.


### Modelos 

##### Conocer, distinguir y saber aplicar de forma práctica los marcos teóricos y modelos que explican cómo funciona el liderazgo
##### Conocer el propósito de cada modelo (qué problema ayuda a resolver).
##### Reconocer los comportamientos asociados (qué haría un líder que aplica ese modelo).
##### Traducirlo en acciones observables (qué harás en la próxima reunión, 1:1 o decisión).
##### Medir el efecto (cómo comprobarás que funcionó).


##### Modelo: Liderazgo situacional → Propósito: adaptar el estilo según la capacidad/motivación del colaborador.
Comportamiento observable: para un novato das instrucciones step-by-step y check-ins diarios; para un experto delegas y haces check-ins semanales.
Señal para usarlo: persona nueva en la tarea o baja confianza.
Cómo medir: tiempo hasta autonomía / número de escalados.

##### Modelo: Liderazgo transformacional → Propósito: inspirar cambio y
Comportamiento observable: comunicar visión, asignar retos, fomentar experimentos.
Señal: necesitas elevar ambición o impulsar innovación.
Cómo medir: propuestas nuevas del equipo / pulse sobre propósito.


#### Checklist

##### ¿La persona tiene la habilidad? → usar situacional.
##### ¿Necesitas cambio cultural o mayor ambición? → transformacional.
##### ¿Necesitas cumplimiento y KPIs? → transaccional.
##### ¿Quieres mejorar retención y bienestar? → servant.
##### ¿La decisión necesita aceptación del grupo? → usa Vroom–Yetton.


### Inteligencia emocional

##### Capacidad de reconocer, entender y gestionar tus propias emociones, y de percibir y responder apropiadamente a las emociones de los demás, para lograr interacciones más efectivas y decisiones menos reactivas.


#### Modelo de Goleman: 5 habilidades

##### Autoconciencia — saber qué sientes y por qué; identificar tus patrones emocionales.
##### Autorregulación — manejar impulsos, calmarse y elegir respuestas en vez de reaccionar.
##### Motivación — dirigir emociones hacia metas, mantener energía y persistencia.
##### Empatía — reconocer y comprender las emociones de otros (no solo simpatizar).
##### Habilidades sociales — comunicarse claro, influir, gestionar conflictos y construir relaciones.


Beneficios:

Mejora la calidad del feedback y las conversaciones difíciles.
Reduce conflictos reactivos y escalados innecesarios.
Aumenta la confianza y seguridad psicológica del equipo.
Mejora la toma de decisiones bajo presión.
Facilita el cambio y la adopción porque lees cómo se recibe la comunicación


#### Comportamientos 

##### Autoconciencia: reconoce “me puse a la defensiva”; puede nombrar la emoción.
##### Autorregulación: pide 2 minutos para pensar antes de responder; usa lenguaje neutral.
##### Motivación: comunica propósito y mantiene consistencia pese a reveses.
##### Empatía: refleja lo que la otra persona dice (“parece que esto te preocupa porque…”).
##### Habilidades sociales: resume acuerdos, gestiona expectativas y mantiene follow-up.


#### Errores

##### Confundir empatía con estar de acuerdo. Evita validar emociones sin perder el objetivo.
Usar mindfulness como excusa: la práctica ayuda, pero requiere traducir en comportamientos.
Solo introspección sin feedback: combina journaling con feedback externo.
Intentar cambiar todo a la vez: prioriza 1 hábito (ej.: pausar antes de responder).


#### 3. Servant leadership (líder servidor)

##### El líder prioriza remover obstáculos y servir al equipo para que éste rinda y crezca.
##### Comportamientos: escucha activa, eliminación de fricción, foco en bienestar y desarrollo.
##### Cuándo usar: equipos que necesitan autonomía y soporte; contextos donde la cultura y retención importan mucho.
Señales observables: pasas tiempo en blockers, no en microgestión; mides bienestar.
##### Ejercicio: en tu próxima 1:1 pregunta: “¿Qué te impide avanzar y cómo puedo ayudar a quitarlo?”


#### 4. Leader–Member Exchange (LMX)

##### Pone foco en la calidad de la relación líder–miembro: relaciones de alta calidad generan mejores resultados.
Comportamientos: inversión en relaciones individuales, confianza y reciprocidad.
##### Cuándo usar: para retener talento clave y cuando la adaptación individual importa.
Señales observables: diferencias en acceso a información o tareas entre miembros (alto/medio/ bajo LMX).
##### Ejercicio: identifica a 2 personas con relación alta y 2 con relación baja; plan para equilibrar atención 1:1.


#### 5. Teoría de rasgos vs conductual (behavioral)

##### Rasgos: busca rasgos personales (carisma, honestidad).
##### Conductual: se centra en comportamientos observables (task-oriented vs people-oriented).
##### Comportamientos: el enfoque práctico es medir y enseñar conductas repetibles.
##### Cuándo usar: evaluación de talento y desarrollo (usar conductas objetivas para feedback).
Señales observables: descripciones vagas (“es carismático”) vs comportamientos concretos (“hace follow-up en 24h”).
##### Ejercicio: transforma 3 adjetivos vagos sobre ti en comportamientos observables.


#### 6. Contingency / Fiedler

##### Efectividad del líder depende de la situación y de la adecuación entre estilo del líder y la situación
##### No hay “mejor” estilo universal.
##### Comportamientos: evaluar control de la situación, relaciones y tarea; ajustar estructura o reasignar liderazgo si hace falta.
##### Cuándo usar: crisis, reestructuraciones, fusiones donde contexto cambia drásticamente.
##### Señales observables: un líder muy eficaz en un contexto falla en otro; fluctuación en resultados tras cambios organizacionales.
##### Ejercicio: enumera 2 situaciones recientes donde tu estilo no funcionó; identifica qué del contexto cambió.


#### 7. Vroom–Yetton (modelo de decisión)
##### Marco para elegir el grado de participación del equipo en una decisión (autocrático → consultivo → grupal) según criterios (urgencia, calidad, aceptación).
##### Comportamientos: preguntas estructuradas sobre quién necesita participar.
##### Cuándo usar: cuando hay decisiones estratégicas que requieren buy-in o rapidez.
##### Señales observables: decisiones que fracasan por falta de aceptación o por lentitud excesiva.
##### Ejercicio: para la próxima decisión grande, responde: ¿necesito información del equipo? ¿necesito aceptación? ¿hay tiempo?


#### 8. Kotter y modelos de cambio (breve)

##### Gestionar cambio (crear urgencia, coalición, visión, comunicar, quick wins, institucionalizar).
##### Comportamientos: comunicar repetidamente la visión, crear coalición, asegurar quick wins.
##### Cuándo usar: transformación organizacional o adopción de nuevas formas de trabajo.
Señales observables: resistencia, falta de avance sostenido tras el inicio.
Ejercicio: identifica 1 “quick win” para una iniciativa actual.


#### Rs Modelos de Liderazgo

##### Situacional: adaptar según capacidad/motivación — onboarding/rotación.
##### Transformacional: inspirar cambio — estrategia/innovación.
##### Transaccional: gestionar por métricas — operaciones/riesgo.
##### Servant: servir al equipo — retención/cultura.
##### LMX: invertir en relaciones — talento clave/sucesión.
##### Contingency: contexto manda — crisis/restructuración.
##### Vroom–Yetton: decidir nivel de participación — decisiones críticas.
##### Kotter: roadmap de cambio — transformaciones organizacionales


#### Práctica Modelos

##### 1. Diagnostica la situación: ¿es urgente? ¿requiere aceptación? ¿la gente tiene capacidad?
##### 2. Elige 1–2 modelos complementarios: p. ej. Situacional + Servant para desarrollos; Transformacional + Vroom para cambios estratégicos que necesitan buy-in.
##### 3. Define comportamientos concretos que reflejen ese modelo (3 acciones observables).
##### 4. Mide impacto (pulse, KPIs, retención) y ajusta.


#### Alarmas / errores comunes

##### Usar siempre el mismo estilo en todas las situaciones.
##### Confundir inspiración con vaguedad (transformacional sin roadmap).
Olvidar adaptar el nivel de participación: o bien excluyes al equipo o paralizas por exceso de consenso.
No convertir rasgos en comportamientos medibles para feedback.


#### Diagnóstico

##### 1. ¿La mayoría de mis decisiones requieren aprobación del equipo para implementarse? (sí/no)
##### 2. ¿Cuánto tiempo dedico a remover blockers vs a revisar entregables? (más a remover = servant)
##### 3. ¿Mi equipo entiende la visión y el “por qué” detrás del trabajo? (sí/no)

##### Con esas respuestas puedes inferir: mucha aprobación → necesitas Vroom/transformacional; 
##### más revisión que quitar blockers → practicar servant; poca claridad de visión → fortalecer transformacional.


### Liderazgo Situacional (Hersey–Blanchard)

Un marco para adaptar tu estilo de liderazgo según la madurez (capacidad y motivación) de la persona o del equipo en una tarea concreta.
Desarrollado por Paul Hersey y Ken Blanchard en los 60–70s; parte de la idea de que no existe un único estilo “mejor”: la efectividad depende de la situación.


Niveles de desarrollo del colaborador frente a una tarea:

D1: baja capacidad, alta motivación (novato entusiasta)
D2: algo de capacidad, baja motivación/confianza
D3: capacidad razonable, variable compromiso
D4: alta capacidad y alta motivación (autónomo)


Estilos de liderazgo que el líder elige

S1 — Dirigir (Telling): alta dirección, bajo apoyo. Instrucciones claras y supervisión cercana.
S2 — Persuadir/Coaching: alta dirección y alto apoyo. Explicar decisiones, motivar, enseñar.
S3 — Apoyar: bajo dirección y alto apoyo. Facilitar, escuchar, fomentar toma de decisiones.
S4 — Delegar: bajo dirección y bajo apoyo. Confías en la persona para ejecutar.


#### Práctica

##### 1. Para la tarea X, evalúa al colaborador: ¿tiene la habilidad técnica? ¿quiere/está motivado? → ubícalo D1–D4.
##### 2. Selecciona estilo S1–S4 acorde (D1→S1, D2→S2, D3→S3, D4→S4).
##### 3. Define acciones concretas (qué darás de dirección y qué apoyo).
##### 4. Revisa y ajusta cada 1–2 semanas: la gente progresa y el estilo cambia.


#### Señales observables / ejemplos

Nuevo en la tarea → instrucciones paso a paso, check-ins diarios (S1).
Tiene experiencia pero está desmotivado → explicas propósito, coaching y apoyo (S2).
Competente pero indeciso → facilitas opciones y dejas que decida (S3).
Auto-suficiente → delegas responsabilidad y revisas en hitos (S4).


#### Errores comunes:

##### Mantener S1 mucho tiempo (sufoca autonomía).
##### Saltar a S4 por comodidad y dejar sin apoyo a quien lo necesita.
##### Evaluar sólo habilidad y olvidarse de la motivación.


### Liderazgo Transformacional

##### Busca inspirar y elevar la motivación y el rendimiento del equipo mediante visión, significado y desarrollo personal — no sólo control por recompensas.
Concepto introducido por James MacGregor Burns (1978) y desarrollado por Bernard Bass: diferencia entre liderazgo transaccional (intercambio recompensas) y transformacional (cambiar valores y elevar aspiraciones).


#### Componentes (4 I’s de Bass):

1. Idealized Influence (Influencia idealizada): el líder actúa como modelo; genera confianza y respeto.
2. Inspirational Motivation (Motivación inspiradora): comunica visión estimulante y expectativas elevadas.
3. Intellectual Stimulation (Estimulación intelectual): fomenta la creatividad, cuestionar supuestos y aprendizaje.
4. Individualized Consideration (Consideración individualizada): atención al desarrollo personal y mentoring.


#### Comportamientos

Articula una visión clara y emocionante.
Relaciona la tarea cotidiana con un propósito mayor.
Promueve experimentación y aprende de errores.
Invierte en desarrollo individual (coaching, stretch assignments)


#### Uso 

Transformaciones estratégicas, innovación, cultura de alto desempeño y compromiso.
Cuando necesitas elevar el nivel de ambición y ownership en equipos.


#### Beneficios esperados

Mayor motivación intrínseca, compromiso y creatividad.
Mejora en rendimiento sostenido y aceptación del cambio.


#### Errores comunes / límites:

Inspiración sin estructura → falta de ejecución (visión bonita pero sin plan).
Exigir pasión excesiva sin apoyo concreto → burnout.
No combinar con prácticas transaccionales cuando se requieren controles y cumplimiento


### DISC

##### Marco simple para describir estilos de comportamiento en cuatro dominios:

##### D — Dominance (Dominio): directo, orientado a resultados, toma decisiones rápido.
##### I — Influence (Influencia): comunicador, social, persuasivo.
##### S — Steadiness (Estabilidad / Soporte): calmado, cooperativo, orientado al equipo.
##### C — Conscientiousness (Conciencia / Cumplimiento): analítico, detallista, orientado a calidad y normas.


Entender cómo prefieres actuar (enfocarte en resultados vs relaciones vs procesos) y cómo adaptar tu estilo o comunicarte con otros.
Limitaciones: es una herramienta descriptiva — no mide inteligencia ni valores profundos. 
Para decisiones críticas de RRHH o selección, usa instrumentos validados y profesionales.


#### Test DISC

Instrucciones: lee cada grupo de 3 frases.
Para cada grupo elige la frase que más te representa y, si quieres, la que menos te representa. Lleva
Lleva la cuenta de cuántas veces escoges D, I, S o C.
El grupo con más elecciones será tu estilo predominante en esta prueba rápida.

1. 
a) Me enfoco en metas y resultados. (D)
b) Conecto fácilmente con nuevas personas. (I)
c) Prefiero ambiente estable y sin sobresaltos. (S)

2. 
a) En proyectos, tomo decisiones rápido. (D)
b) Me gusta motivar y animar al equipo. (I)
c) Me molesta el cambio abrupto; prefiero procesos. (S)

3. 
a) Soy directo cuando es necesario. (D)
b) Disfruto presentar ideas y vender propuestas. (I)
c) Soy paciente y pongo foco en colaboración. (S)

4. 
a) Prefiero asumir responsabilidad en resultados. (D)
b) Busco reconocimiento social y relaciones. (I)
c) Me fijo en estándares y en hacer las cosas bien. (C)

5. 
a) Me incomoda la indecisión; actúo. (D)
b) Me resulta fácil persuadir y entusiasmar. (I)
c) Prefiero preparar y planificar antes de actuar. (C)

6. 
a) En conflicto, suelo imponer soluciones prácticas. (D)
b) Evito confrontaciones directas; prefiero consenso. (S)
c) Busco evidencia y datos antes de decidir. (C)


#### Lectura

4–6 elecciones dominantes en un mismo código → estilo predominante.
Mezcla D/I → líder enérgico y comunicador; mezcla S/C → orientado a procesos y a personas; etc.
Si hay empate, probablemente eres estilo mixto (común y útil).


#### Interpretación práctica
##### D: dar dirección clara, delegar autoridad, cuidar no imponerte.
##### I: liderar con energía y redes, cuidar foco y seguimiento.
##### S: crear estabilidad y confianza, cuidar la gestión del cambio.
##### C: asegurar calidad y procesos, cuidar la comunicación humana y no ser demasiado crítico.


#### DISC Corporativo

Comunicación: adapta tu mensaje (datos → C; impacto/objetivos → D; vision/propósito → I; empatía/soporte → S).
Delegación: asigna responsabilidades según afinidad: tareas creativas a I/D; tareas analíticas a C; acompañamiento a S.
Conflicto: si interactúas con un D, sé directo; con un S, muestra seguridad y escucha; con un C, aporta evidencia; con un I, contextualiza con impacto en personas.
Desarrollo: diseña retos que estiren el estilo dominante (ej.: si eres C, practica dar mensajes más inspiradores).


### Reflexión Guiada

##### Proceso estructurado para convertir experiencia en aprendizaje y acción. 
##### A diferencia de un diario libre, aquí sigues preguntas que te llevan a insights y compromisos concretos.

Beneficios: acelera aprendizaje, favorece hábitos, facilita transferir teoría a práctica y sirve como evidencia en revisiones de desempeño.


#### Práctica

##### Contexto: (1–2 líneas) — ¿qué pasó?
##### Observación objetiva: (hechos, sin juicios) — ¿qué hiciste, dijo el equipo, resultados inmediatos?
##### Emociones / reacciones: ¿qué sentiste y por qué?
##### ¿Qué funcionó? (2–3 puntos concretos)
##### ¿Qué no funcionó / qué aprendí? (2–3 puntos)
##### Acción concreta para la próxima vez: (comportamiento observable: qué harás, cuándo, con quién)
##### Indicador de éxito (cómo medirás): (ej.: menos escalados, mejor pulse, entregable sin rework)
##### Compromiso y fecha de revisión: (p. ej. “Probaré esto 3 veces y reviso el dd/mm”)


#### Ej situación

Contexto: reunión con cliente donde el equipo vivió retrasos.
Observación: expliqué la solución técnica y saludé objeciones, pero interrumpí a la líder del área.
Emociones: me sentí presionado; eso me llevó a cortar.
Qué funcionó: tuve una solución técnica clara; mantuve la calma.
Qué no funcionó: no permití que la otra persona expresara su preocupación → tensión.
Acción: en próximas reuniones esperaré 10 segundos antes de responder y usaré “entiendo, ¿puedes desarrollar eso?”
Indicador: 3 reuniones sin interrupciones; pedir feedback al final de 2 de ellas.
Compromiso: probar durante 4 semanas; revisión el 01/10.


##### Para decisiones formales de RRHH, usa un instrumento DISC validado (proveedor profesional).
##### Para desarrollo personal, el mini-test + reflexión guiada son rápidos y eficaces.


### Perfil Personal 

##### Resume quién eres como líder: tu propósito, estilo, fortalezas, áreas de mejora, comportamientos clave y un plan corto de desarrollo
##### Sirve para autoconocimiento, alinear expectativas con tu manager/equipo y acelerar el desarrollo.

##### Clarifica tu “marca” como líder: cómo aportas valor y qué esperar de ti.
##### Convierte rasgos vagos en comportamientos observables y medibles.


#### Campos esenciales 

1. Nombre / Rol / Fecha
2. Propósito (1 línea) — ¿Para qué lideras?
3. Visión para mi equipo (1–2 frases) — resultado deseado a 6–12 meses.
4. Estilo de liderazgo (keywords — 2–4) — p. ej. “Coaching / Estratégico / Data-driven”.
5. Top 3 fortalezas (comportamiento + evidencia) — cada una con 1 ejemplo concreto.
6. Top 2–3 áreas a mejorar (comportamiento objetivo + evidencia mínima)
7. Comportamientos observables que verás en mí — 4–6 acciones concretas (qué haré en reuniones, 1:1, decisiones).
8. Stakeholders clave / cómo me comunico con ellos — p. ej. CEO: brief semanal por email; equipo: 1:1 semanal.
9. Objetivo 90 días (SMART) + acciones principales.
10. Indicadores de éxito / cómo mediré progreso — pulse, % tareas delegadas, feedback cualitativo.
11. Persona de accountability — quien revisa progreso (coach/manager/peer) y fecha de revisión 


#### Plantilla

Nombre / Rol / Fecha:
Propósito:
Visión para el equipo (6–12m):
Estilo de liderazgo (3 palabras):

Top 3 fortalezas:
Fortaleza A — Evidencia/ejemplo concreto (fecha/resultado)
Fortaleza B — Evidencia/ejemplo concreto
Fortaleza C — Evidencia/ejemplo concreto

Áreas de mejora (priorizadas):
Área 1 — Comportamiento objetivo observable — Evidencia actual
Área 2 — Comportamiento objetivo observable — Evidencia actual

Comportamientos observables (qué haré):
Acción 1 (cuando / con quién)
Acción 2
Acción 3

Stakeholders clave y formato de comunicación:
Stakeholder A — formato / frecuencia
Stakeholder B — formato / frecuencia

Objetivo 90 días (SMART)
Objetivo:
Acciones semanales:
Quién me apoya / accountability:

Indicadores de éxito:
KPI 1, KPI 2, feedback esperado

Revisión: fecha / responsable


#### Ejemplo

Nombre / Rol / Fecha: Iván País — Líder de Producto — 2025-09-07
Propósito: Construir equipos autónomos que entreguen valor rápido y medible.
Visión (6–12m): Equipo capaz de lanzar 3 features trimestrales con <10% rework.
Estilo: Coaching / Estratégico / Data-driven

Fortalezas:
1. Claridad estratégica — Lideré Q2 que alineó roadmap y redujo scope creep 30% (Jun 2025).
2. Comunicación efectiva — Presentación ejecutiva que consiguió buy-in del sponsor (Abr 2025).
3. Resolución de problemas — Reduje blockers críticos en 48h en 2 ocasiones (May 2025).

Áreas a mejorar:
1. Micromanagement — suelo revisar entregables intermedios; objetivo: delegar y usar check-ins semanales. Evidencia: feedback 360 (mencionado 3 veces).
2. Paciencia en escucha — interrumpo bajo presión; objetivo: esperar 10s antes de responder.

Comportamientos observables:
En 1:1: terminar con “¿qué puedo hacer diferente?” (desarrollo).
En planning: delegar dueño con entregables y fecha clara.
En reuniones: resumir decisiones y acciones en 3 bullets.

Stakeholders:
VP Product — weekly 10-min sync (email pre-read)
Equipo — 1:1 semanal 30m

Objetivo 90 días:
Objetivo: Reducir percepción de micromanagement +1 punto en pulse.
Acciones: plantilla delegación, check-ins semanales de 15m, pedir feedback quincenal.
Accountability: Manager + peer buddy; revisión 2025-12-07

Indicadores:
Pulse “autonomía” (baseline 6 → target 7)
% tareas delegadas (baseline 20% → 50%)
3 ejemplos concretos de delegación exitosos


#### Construir Perfil 

1. Propósito & visión: escribe 1 línea de propósito y 1–2 frases de visión.
2. Fortalezas & evidencia: revisa 3–4 logros recientes; extrae fortalezas y una frase de evidencia por cada una.
3. Áreas a mejorar: consulta mentalmente 3 fuentes (jefe, 1 reporte, tu sensación) y define 1–2 áreas con comportamiento objetivo.
4. Comportamientos y stakeholders: define 4 comportamientos observables y cómo comunicarás con 2 stakeholders.
5. Objetivo 90 días e indicadores.


#### Fuentes de evidencia

Feedback 360 o micro-feedback (3–8 personas).
Resultados de proyectos (KPI, reducción de rework, tiempo a producción).
Ejemplos concretos: emails, slides, decisiones con fecha.
Auto-reflexión documentada (3 momentos clave).



## Producto


## Producción


## Estrategia

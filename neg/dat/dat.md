# Data 


## Objetivo 

##### Aprender a convertir datos en decisiones de negocio: desde entender y preparar datos, construir métricas y modelos simples, hasta comunicar resultados y diseñar dashboards que influyan en stakeholders.


## Aptitudes

##### Dominar SQL y análisis exploratorio aplicados a problemas de negocio.

##### Saber transformar preguntas de negocio en métricas y tests.

##### Construir dashboards accionables (KPI, cohortes, funnel, LTV, churn).

##### Realizar análisis estadísticos y modelos predictivos simples (churn, CLTV, forecast).

##### Comunicar hallazgos con narrativa y visualizaciones claras.


## Módulos

1. Fundamentos de negocio y métricas

2. Ingeniería y limpieza de datos (ETL básico)

3. Análisis exploratorio y estadísticas aplicadas

4. SQL avanzado para analítica

5. Herramientas: Excel/Sheets + Python (pandas)

6. Visualización y dashboarding (Power BI / Tableau / Looker)

7. Experimentación y A/B testing

8. Modelos predictivos ligeros y segmentación

9. Data ops básicos y producción (dbt/airflow/conceptos)

10. Comunicación, storytelling con datos y gobernanza



# 1. Fundamentos

Motivos por los que el negocio necesita datos.

Conceptos: KPI vs métricas operativas, funnel, cohortes, unit economics.

Ejercicio: define 10 KPIs para un negocio e-commerce o SaaS.



# 2. Excel/Sheets aplicado

Tablas dinámicas, fórmulas avanzadas (INDEX/MATCH/XLOOKUP), modelado básico.

Ejercicio: montar dashboard de ventas mensual en Excel.



# 3. SQL básico → intermedio

ELECT, JOIN, GROUP BY, ventanas (WINDOW FUNCTIONS).

Ejercicio: extraer funnel de usuarios, cálculo de retención 7/30 días.



# 4. Limpieza y transformación (pandas)

Lectura CSV/Parquet, limpieza, merges, imputación básica.

Ejercicio: limpiar dataset de transacciones y crear tabla cliente-producto.



# 5. Análisis exploratorio y estadística aplicada

Resúmenes, distribuciones, correlación, pruebas t, intervalos de confianza.

Ejercicio: comparar conversión entre dos segmentos



# 6. Visualización y storytelling

Principios visuales, tipos de gráficos por pregunta de negocio.

Ejercicio: preparar un one-pager para dirección con 3 insights.



# 7. Dashboards (Power BI / Tableau / Looker)

Conectar a DB, modelos de datos, filtros, KPIs.

Ejercicio: construir dashboard de adquisición → activación → retención



# 8. Cohort analysis y métricas avanzadas

LTV, CAC, churn rate, ARR, MRR.

Ejercicio: calcular LTV y CAC y simular escenario de pricing.



# 9. A/B testing y causalidad básica

Diseño de experimentos, hipótesis, potencia estadística, p-values, resolución.

Ejercicio: analizar resultado de A/B test y dar decisión.



# 10. Modelos predictivos ligeros

Regresión logística, regresión lineal, árboles simples, validación.

Ejercicio: construir modelo de churn y explicar features.



# 11. Data product / Data ops básico

Introducción a pipelines, versionado de datos, documentación (data catalog).

Ejercicio: bosquejo de pipeline ETL + cronograma.



# 12. Proyecto final + presentación

Proyecto integrador: Dashboard + análisis + modelo + brief ejecutivo.

Entrega: notebook, SQL scripts y presentación 10 min.



# Proyectos prácticos

1. Dashboard KPI para negocio (ventas, marketing, producto). — entregable: URL o PDF + dataset + SQL.

2. Análisis de cohortes / retención. — entregable: documento con hipótesis y recomendaciones.

3. Caso A/B test: diseño, análisis, decisión. — entregable: notebook + brief.

4. Modelo de churn simple y plan de acción. — entregable: modelo, métricas y lista de features accionables.

5. Proyecto final integrador (combina todo lo anterior).

Cada proyecto debe incluir: pregunta de negocio, fuentes de datos, metodología, resultados, riesgos/limitaciones, recomendación accionable.



# Herramientas

Consultas / almacén: PostgreSQL, BigQuery o Snowflake (conceptos).

BI / Dashboards: Power BI o Tableau o Looker (elige 1 y domina).

Lenguaje de análisis: Python (pandas, scikit-learn, statsmodels). R opcional.

Hojas de cálculo: Excel / Google Sheets (fluidez).

Versionado / workflows: Git, Notebooks (Jupyter/Colab).

Orquestación/transformación (conceptos): dbt, Airflow (saber qué hacen).

Visualización: principles + herramientas (plotly / matplotlib para prototipos).

Data catalog / documentación: buenas prácticas (metadata, diccionario de datos).



# Habilidades blandas

#### Traducir preguntas de negocio a preguntas de datos.

#### Storytelling y presentación con un “one-pager” ejecutivo.

#### Priorizar: distinguir insight accionable de “curiosidades”.

#### Trabajo cross-functional (producto, marketing, finanzas).



# Evaluación / Métricas

Completar 5 proyectos reales o reproducibles.

Resolver 20 ejercicios SQL en condiciones de entrevista (timed).

Presentar 3 informes ejecutivos y obtener feedback.

Medir conocimiento con quizzes: estadísticas, SQL, ETL, A/B tests.

Tiempo estimado hasta contratación: variable; con portafolio y entrevistas, 3–6 meses desde completar 12-week track.



# Recursos

##### Data Science for Business — Provost & Fawcett (conceptos de negocio y data).

##### Storytelling with Data — Cole Nussbaumer Knaflic (visualización y narrativa).

##### Naked Statistics o cualquier buen libro introductorio de estadística aplicada.


Practicar en:

Kaggle (datasets y notebooks).

Datasets públicos (Google Analytics demo data, ecommerce datasets).



# Plantilla de proyecto

1. Título + pregunta de negocio (1 frase).

2. Dataset(s) y esquema (fuentes).

3. Supuestos y limitaciones.

4. Análisis (notebook + SQL).

5. Visualizaciones clave (dashboard con 3–6 graphics).

6. Conclusiones y 3 recomendaciones accionables.

7. Próximos pasos (experimentación, métricas para monitorear).



# Prácticas

##### Empieza por preguntas de negocio reales (ej.: ¿por qué cayó la conversión en Julio?), no por técnica.

Prioriza SQL + Excel + un BI: estas tres cubren ~80% del trabajo del analista.

Haz presentaciones cortas (5–10 min) enfocadas en la decisión que propones.

##### Versiona tu trabajo (Git) y documenta el diccionario de métricas.

##### Busca feedback de personas de negocio: la señal de impacto es cuando un stakeholder ejecuta una recomendación tuya. 

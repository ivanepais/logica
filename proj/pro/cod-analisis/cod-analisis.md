# JS

Objetivos:

Entender cómo leer y razonar sobre código JavaScript (estático y dinámico).
Detectar code smells, bugs y vulnerabilidades comunes.
Usar herramientas de análisis estático y dinámico para automatizar revisiones.
Aprender a refactorizar y mejorar mantenibilidad y rendimiento.

Req:
variables, funciones, promesas/async
Git y línea de comandos
Node.js y npm

## 1. Lectura de código y mentalidad

Conceptos: cómo leer código, seguir el flujo, identificar entradas/salidas, contratos implícitos.
Práctica: leer funciones pequeñas y escribir en 3 líneas qué hacen.
Ejercicio: tomar 5 funciones en un repo y escribir pequeños comentarios de intención

## 2. Sintaxis, hoisting y alcance

Conceptos: hoisting, scope, closures, this, diferencias var/let/const.
Práctica: reproducir ejemplos que muestren bugs por hoisting/closures.
Ejercicio: detectar y corregir 6 errores típicos.

## 3. Estructura del proyecto y módulos

Conceptos: CommonJS vs ES Modules, organización de carpetas, separación de responsabilidades.
Práctica: mapear responsabilidades en un repo pequeño.
Ejercicio: refactorizar un archivo grande en módulos

## 4. Calidad estática: linters y estilo

Conceptos: linters, reglas, estándar de estilo, por qué automatizar.
Herramientas: configura y usa ESLint y Prettier.
Ejercicio: integrar ESLint+Prettier en un proyecto y resolver 20 warnings/errors.

## 5. Tipado gradual y contratos

Conceptos: beneficios del tipado para análisis (inferencia, documentación).
Herramientas: prueba usar TypeScript aunque con --checkJS si quieres seguir JS puro.
Ejercicio: añadir anotaciones de tipo a 2 módulos críticos

## 6. Análisis estático avanzado y AST

Conceptos: cómo funcionan los analizadores (parseo → AST → reglas).
Herramientas: estudiar reglas personalizadas con Babel (parser) o plugins de ESLint.
Ejercicio: escribir una regla ESLint simple (ej. prohibir llamadas a console.log en src/).

## 7. Testing y cobertura

Conceptos: pruebas unitarias, integración, mocks, cobertura y su rol en análisis de código.
Herramientas: escribe tests con Jest.
Ejercicio: cubrir con tests una función crítica y lograr >80% de cobertura

## 8. Análisis dinámico: debugging y profiling

Conceptos: inspección en runtime, trazas, perfiles CPU/memoria, fugas.
Herramientas: usar Chrome DevTools y node --inspect.
Ejercicio: encontrar y arreglar una fuga de memoria en un script demo

## 9. Seguridad y vulnerabilidades

Conceptos: XSS, inyección, deserialización, dependencias vulnerables, privilegios.
Herramientas: integrar análisis como CodeQL o escáneres (concepto).
Ejercicio: auditar package.json y parchear vulnerabilidades

## 10. Integración CI/CD y revisión de PRs

Conceptos: hacer que el análisis corra en CI, checks automáticos, puertas de calidad.
Herramientas: configurar pipelines sencillos con GitHub Actions que ejecuten ESLint, tests y linters.
Ejercicio: crear workflow que pase PRs solo si pasan los checks

## Mini proj

1. Analizador de un repo: toma un repo JS y entrega un reporte con: linters, cobertura, 5 bugs encontrados, 3 sugerencias de refactor.
2. Rule-maker: crea y publica una regla ESLint personalizada para tu estilo de equipo.
3. Pipeline de seguridad: integrar un escáner estático (CodeQL/Sonar) y generar reportes automatizados.

Herramientas opcionales para análisis más profundo: SonarQube, scanners comerciales/OSS y bases de datos de vulnerabilidades

## Ejercicios prácticos / checklist al revisar

La función tiene una sola responsabilidad?
¿Los nombres comunican intención?
¿Hay tests que cubran casos límite y errores?
¿Se manejan errores y promesas correctamente?
¿Hay uso peligroso de eval/interpolación directa de user input?
¿Dependencias desactualizadas o vulnerabilidades conocidas?
¿Complejidad ciclomática elevada (>10) en alguna función

## Tips y hábitos

Haz pequeñas revisiones con PRs pequeños.
Añade npm run lint y npm test como checks obligatorios.
Lee código de librerías populares para ver patrones.
Mantén un diario de patterns y anti-patterns que encuentres.
Automatiza lo repetitivo (formatters, hooks pre-commit).

## Recursos y config

```
# instalar eslint + prettier
npm init -y
npm install --save-dev eslint prettier
npx eslint --init

# ejecutar tests con jest
npm install --save-dev jest
npx jest

# iniciar node debugger
node --inspect-brk index.js           
```


# Senior JS

Orientado a la mentalidad, técnicas y artefactos que usa un senior para analizar código JavaScript

Principios y mentalidad:

`Intención primero`:
buscar por qué existe el código (contrato/propósito) antes de cómo está implementado.

`Riesgo > estética`:
priorizar áreas que pueden romper producción (entry points, auth, I/O, datos).

`Pequeños cambios seguros`:
preferir refactors incrementales con pruebas.

`Buscar señales, no leerlo todo`:
hotspots (archivos grandes, alta complejidad, históricos con many commits/issues).

`Comunicar y dejar rastro`:
cada hallazgo tiene un ticket, prioridad y repro/PR propuesto.


## Onboarding rápido

Qué hace: ejecutar la app, leer README, mapear carpetas, listar scripts start/test/build.
Entregable: mapa rápido (uno o dos párrafos) de la arquitectura y cómo ejecutar localmente

## 1. Lectura de alto nivel y puntos críticos

Qué hace: identificar los entry points (APIs, workers, CLI), dependencias externas, y módulos con mayor superficie de riesgo.
Herramientas típicas: Node.js / npm.
Ejercicio: generar una lista de 5 “hotspots” con por qué son riesgosos.

## 2. Contratos y APIs

Qué hace: revisar interfaces públicas (APIs, módulos exportados), validaciones y manejo de errores; confirmar inmutabilidad donde corresponde.
Chequeos rápidos: validación de inputs, tipos (si hay TypeScript), y documentación.
Si aplica: introducir TypeScript para contratos.

## 3. Tests y calidad

Qué hace: revisar cobertura, pruebas end-to-end y mocks; evaluar si los tests comprueban comportamiento, no solo implementación.
Herramientas: Jest u otros frameworks.
Entregable: informe con gaps de cobertura y 3 pruebas

## 4. Mantenibilidad y arquitectura del código

Qué hace: medir complejidad ciclomática, tamaño de funciones, dependencias circulares y modularidad.
Priorizar módulos para refactor.
Regla del senior: funciones < 50 líneas, complejidad por función < 10 (valor guía).
Ejercicio: elegir 1 archivo grande y proponer 3 pasos de refactor incremental

## 5. Seguridad y dependencias

Qué hace: revisar manejo de input/output, uso de eval/innerHTML, escape/sanitización, gestión de secretos y revisión de package.json por paquetes obsoletos o vulnerables.
Herramientas para auditoría de dependencias y SCA: CodeQL y SonarQube (concepto).
Entregable: lista de 5 vulnerabilidades/ riesgos y mitigaciones propuestas

## 6. Rendimiento y profiling

Qué hace: identificar rutas calientes, colecciones grandes, bloqueos de event loop y leaks.
Usar profiling en runtime.
Herramientas: Chrome DevTools / node --inspect.
Ejercicio: perf-profile de una ruta y 2 optimizaciones puntuales

## 7. CI, checks y gating

Qué hace: asegurar que linting, tests y escaneo se ejecuten en CI; definir gates que bloqueen merges peligrosos.
Herramientas: GitHub Actions (ejemplo).
Entregable: propuesta de workflow CI con checks mínimos

## 8. Mentoring, PR reviews y roadmap técnico

Qué hace: codificar guía de revisión para el equipo;
priorizar deuda técnica y crear un plan de reducción incremental.
Entregable: plantilla de PR review + backlog de deuda técnica con estimaciones

## Técnicas

`Time-boxed triage`:
30–60 min para identificar hotspots y crear tickets prioritarios.

`Repro minimal`:
crear el caso mínimo que demuestra el fallo (test + steps).

`Diff-first reading`:
en PRs, leer cambios (diff) antes del archivo completo.

`"Rubber ducking" breve`:
explicar el flujo en voz alta o en comentario para detectar supuestos incorrectos.

`Regression hunting`:
si algo falla en prod, buscar commits recientes relacionados y escribir test que reproduzca.


## Checklist de revisión de PR

¿El PR realiza una sola cosa clara?
¿Hay tests que cubran el comportamiento introducido?
¿Se ajusta a las reglas de estilo/linters (ESLint/Prettier)? — usa ESLint y Prettier.
¿Los nombres comunican intención?
¿Se manejan errores en todos los paths asíncronos?
¿Se evaluó el impacto en rendimiento y seguridad?
¿Documentación/CHANGELOG/NOTES si corresponde?
¿Se añadieron tests de integración cuando toca?

## Métricas y señales de éxito

número de bugs en producción relacionados al área analizada (debe bajar).
tiempo medio para comprender un PR (disminuye con mejor estructura).
% de PRs con tests incluidos.
deuda técnica priorizada y reducido backlog en el tiempo.

## Ejer

`Triage en 60 min`:
elige un repo (o un módulo grande), entrega: 5 hotspots + 3 tickets con prioridad y repros.

`Mini-auditoría de seguridad`:
1 página con 5 hallazgos y parches sugeridos.

`PR review rubric`:
crear plantilla con checklist + ejemplos de comentarios constructivos.

`Refactor incremental`:
implementar 2 PRs que reduzcan la complejidad de una función y agreguen tests

## Hábitos

revisar 2–3 PRs al día, dejando comentarios claros y accionables.
crear al menos 1 ticket técnico por semana (si hay deuda).
ajustar linters/rules para que eviten errores recurrentes.
enseñar: anotar 1 patrón/antipatrón en docs del equipo


# Leer y razonar código js

1. Intención antes que implementación:
qué se supone que hace esto?
Si no hay contrato/documentación clara, el código no vale por sí mismo.

2. Riesgo sobre belleza:
prioriza lo que puede romper producción
`entrada/salida`, `auth`, `I/O`, `concurrencia`, `dependencias`

3. Pequeños cambios seguros:
refactors incrementales con tests que cambiar todo de una

4. Señales > leer todo:
busca `hotspot`s (archivos grandes, alta complejidad, histórico de bugs) y céntrate ahí.

5. Comunicar resultados accionables:
cada hallazgo: resumen, impacto, repro minimal, propuesta de PR.


## Flujo

1. Contexto: 5–10 m
`Ejecuta la app o los scripts` si es posible.
Lee README / CONTRIBUTING / package.json scripts.
Localiza `entry points` (server.js, index.js, handlers, routes).

2. Triage - mapa rápido de `hotspots`: 10–30 m
Abre los archivos más grandes o con más commits.
Revisa `package.json por dependencias críticas`.
Ejecuta linter/tests si existen.
Crea 3–5 tickets prioritarios (hotfix/bug/debt).

3. Lectura dirigida: 30–90 m/módulo

Lee la `interfaz pública` (exports, API endpoints).
¿Qué inputs acepta? ¿Qué outputs devuelve?

Sigue el `flujo de datos`:
`entrada → validación → lógica → persistencia → salida`.

Revisa caminos de `error`:
¿se capturan excepciones?
¿se devuelven códigos/objetos útiles?

Identifica suposiciones implícitas (formatos, órdenes, sincronía).

4. Verificación dinámica (si aplica):

Ejecuta el `caso mínimo` que muestre el comportamiento (o falla).
Usa console/debugger / node --inspect para seguir la ejecución.
Añade un `test unitario mínimo` que reproduzca el caso (idealmente antes de arreglar).

5. Priorizar y proponer cambios:

Clasifica hallazgos por severidad (P0-P2).
Para cada hallazgo: reproducir, prueba que falla, PR propuesto con cambios pequeños


## Heurísticas, Buscar

`Nombres`: si los identificadores no expresan intención, sospecha.
`Tamaño de funciones`: si > 50 líneas o demasiadas ramas, es candidato a dividir.
`Complejidad ciclomática`: funciones con muchos if/switch/for = riesgo.
`Side effects ocultos`: una función que modifica variables/globales o argumentos.
`Asincronía mal manejada`: promesas no retornadas, await faltante, .catch ausente.
`Manejo de errores`: try/catch con catch(()=>{}) silencioso = rojo.
`Validación de inputs`: ausencia de validación en boundary code (APIs, handlers).
`Dependencias inseguras/obsoletas`: versiones con vulnerabilidades conocidas.
`Tests`: tests que sólo hacen snapshot o cubren implementación en vez de comportamiento.
`Comentarios`: comentarios que explican cómo en lugar de por qué (mal) — el código debe ser claro; los comentarios deben explicar intención.


## Checklist PR

1. El PR hace una sola cosa?
2. Hay tests que cubran el comportamiento nuevo (y casos de error)?
3. Se agregaron/actualizaron tipos o validaciones si aplica?
4. Los nombres reflejan intención?
5. Se manejan errores y estados asíncronos correctamente?
6. El cambio afecta seguridad/performance? ¿se hicieron pruebas/mediciones?
7. Linter y formateo pasan?
8. Se añadió documentación si el API cambió?


## Código Ej

```
// userService.js
export async function getUserProfile(userId) {
  const user = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
  if (!user) return null;
  user.lastSeen = Date.now();
  db.query('UPDATE users SET last_seen = ? WHERE id = ?', [user.lastSeen, userId]);
  return user;
}
```

1. `Interfaz`: recibe userId → devuelve user o null.
¿Qué formato tiene user? ¿Es un objeto o array?

2. `Suposiciones`: db.query devuelve null si no existe
 confirmar comportamiento del driver.

3. `Side effects`: función lee y escribe en DB (no es pura).
¿Es esto esperado en "get..."?
Nombre sugiere sólo lectura; mezclar lectura y actualización es sorprendente.

4. `Concurrencia/race`: lastSeen actualizado en una segunda query sin await (no hay await en update).
Es fire-and-forget: ¿queremos eso?
Si el proceso falla, update puede perderse.

5. `Errores`: no hay try/catch
si db.query lanza, caller lo recibe
está bien si la capa superior lo maneja, pero documentarlo es necesario.

6. `Performance`: Performance
posible optimización: UPDATE ... RETURNING * o hacer un solo UPDATE/SELECT en transacción

7. `Seguridad`: uso de parámetros vinculados OK (placeholder ?)
Seguridad: uso de parámetros vinculados OK (placeholder ?)

8. `Propuesta`: (a) renombrar a fetchAndTouchUser o separar en getUser + touchUser
(b) await la update o manejar fallo y loguearlo
(c) añadir test que simule error en update y ver comportamiento esperado.

### Ej Pequeño PR sugerido (resumen):
Cambiar nombre o separar responsabilidades.
Asegurar await en update o dejar claro por qué no.
Añadir test donde db.query de update lanza y comprobar que getUserProfile aún devuelve user o propaga error según política


## Triage

Título: [P1] getUserProfile actualiza lastSeen sin await — posible pérdida de update
Resumen corto: la función hace update asíncrono sin esperar; si el proceso se cierra, la actualización podría perderse.
Impacto: inconsistencia en last_seen; afecta métricas/recent-activity.
Reproducción mínima: llamar getUserProfile(id) y forzar que db.query de update falle (mock).

Propuesta?:
Añadir await a update y manejar fallo (retry/log).
O separar en getUser y touchUser y llamar touch con control.
Estimación: 1–2h (añadir test + PR).

## Técnicas

`Diff-first`: en un PR, lee el diff antes de abrir archivos completos.
`Buscar patrones`: regex para TODO, FIXME, console.log, any (si TS), eval.
`Usar pruebas como documentación`: tests muestran cómo el autor esperaba que funcione.
`Time-boxed triage`: 30–60 minutos para sacar un primer conjunto de acciones.
`Crear repro minimal`: siempre que encuentres bug, escribe el test que lo reproduce (antes de arreglar).

## Comentarios

Ma`ol:

```
// fixed the bug
```

Bueno:

```
// Why are we updating lastSeen here?
Suggest split into fetch + touch to avoid surprise side effect.
See PR #123 for suggested refactor
```

## Cierre: hábitos

Cuando revises: define intención en una frase antes de comentar.

Time-box tu primera pasada (30–60 min).
Produce un pequeño set de tickets/prioridades.

Siempre intenta un repro minimal (test or script).

Prefiere cambios pequeños y cubiertos por tests


# Code smells, bugs y vulnerabilidades

señales rápidas, tipos de smells/bugs/vulns
técnicas de detección (manual + automática), flujo de triage


## Señales rápidas: correr primero

1. Ejecutar linters y tests (npm run lint / npm test)
2. Ejecutar auditoría de dependencias (npm audit / yarn audit): busca dependencias con CVE.
3. Ejecutar un scanner estático (si existe): CodeQL / SonarQube
4. Abrir los tests existentes: revelan supuestos del autor.

Ejecutar estas tareas te da señales inmediatas:
warnings, fallos, dependencias vulnerables


## Busqueda y detección de code smells

1. Funciones demasiado largas / alta complejidad:
Señal: >50 líneas o CC > 10.
Detección: herramientas de métricas o reglas de ESLint (métricas de complejidad).

2. Nombres poco expresivos (foo, data, tmp):
Señal: variables/funciones con nombres genéricos;
detectarlo leyendo diff y tests.

3. Duplicación (copy/paste):
Señal: bloques similares en distintos archivos;
detectar con búsqueda textual o herramientas de detección de duplicados

4. Profundas anidaciones / many branches:
Señal: if dentro de if dentro de for
aumenta riesgo de bugs.

5. Side effects ocultos (mutaciones globales, modifica args)
Señal: función llamada "get..." que además hace update en DB
revisar responsabilidades

6. Silencios en el manejo de errores (catch(()=>{}))
Señal: catch vacío o logging insuficiente

7. Asincronía incorrecta: promesas no retornadas, await faltante
Señal: funciones async que no await o promesas sin return. ESLint suele atrapar algunos casos

8. Comentarios que explican cómo en vez de por qué
explicando implementación en vez de intención
el código debe ser legible por sí mismo


## Bugs

1. Race conditions / condiciones de carrera:
Detección: revisar acceso concurrente a recursos compartidos
pruebas que corran en paralelo; fuzzing de concurrencia

2. Off-by-one / índices / límites:
Detección: tests con límites (0, 1, n-1, n).

3. Resource leaks (sockets, streams, DB connections):
Detección: profiling, revisión de finally/close, pruebas de carga.

4. Memory leaks:
Detección: heap snapshots en Chrome DevTools o node --inspect + perfiles.

5. Errores silenciosos (swallowing errors):
Detección: buscar catch vacío, no return en catch
logs insuficientes; añadir tests que simulen fallos.

6. Incorrect assumptions about API/driver:
Detección: leer la documentación del driver
(¿db.query devuelve null o []?)
añadir tests que reflejen el comportamiento real


## Vulnerabilidades

Inyección SQL / NoSQL:
Detección: revisar construcciones string SQL concatenadas
exigir queries parametrizadas

XSS (en apps web):
Detección: flujo de datos que llega al DOM sin escape;
revisar templates y sanitización

CSRF / authentication flaws:
Detección: revisar control de estados, tokens, uso correcto de CORS y cookies.

Insecure deserialization / RCE:
Detección: deserializar objetos desde fuentes inseguras
buscar eval, Function(...), child_process.exec con inputs no sanitizados

Dependency vulnerabilities:
Detección: npm audit y SCA (Software Composition Analysis)
revisar package-lock.json/yarn.lock.

SSRF / path traversal
Detección: llamadas a URLs o lectura de paths basadas en input del usuario;
tests y DAST (dynamic app scanning).

Herramientas:
CodeQL y SonarQube para queries y reglas de seguridad
npm audit


## Técnicas

1. Automatizar lo básico en CI:
eslint + tests + coverage + SCA.
Usa ESLint, Prettier, y ejecuta en GitHub Actions.

2. Reglas y queries personalizadas: escribir reglas ESLint / CodeQL
reflejen patterns peligrosos del equipo

3. Diff-first review:
revisar el diff para entender el alcance y buscar introducciones de smells
(nuevas funciones enormes, nuevos any, nuevos console.log)

4. Search patterns / regex:
Buscar `eval\(|new Function` → posible RCE.
Buscar `catch\s*\(\)\s*`{ → errores silenciados.
Buscar string concatenation en queries: `\bSELECT\b.*\+` → posible SQLi

5. Unit + property tests:
escribir tests que prueben invariantes
(e.g., que no se muten inputs).

6. Dynamic fuzzing / DAST:
endpoints web probar inputs maliciosos

7. Profiling y monitoreo:
para leaks/perf usar herramientas de runtime (DevTools, node --inspect)

## Repo nuevo

Run rápido: lint + tests + npm audit.
Triage 30–60 min: identificar 3 hotspots (archivo/endpoint/dependency).
Para cada hotspot: reproducir bug (script/test), clasificar severidad (P0-P2), proponer PR mínimo.
Implementar PR: test que falla + fix (red-green-refactor).
Añadir regla/CI para evitar recurrencia (ESLint rule, CodeQL query, test).
Documentar la razón y abrir ticket de seguimiento si refactor es mayor


## Check

¿Función hace 1 cosa?
¿Nombres claros?
¿Se manejan todos los paths de error?
¿Se usan queries parametrizadas / ORM safe methods?
¿Sin eval / new Function / child_process con input sin sanitizar?
¿Promesas retornadas y await correcto?
¿No hay catch silencioso?
¿Dependencias con vulnerabilidades en npm audit?
¿Tests que verifican casos límite y errores?
¿Se añadió una regla/CI para prevenir este fallo en el futuro?


## Código Ej

Mal:

```
app.get('/q', async (req, res) => {
  const q = req.query.q;
  const rows = db.query(`SELECT * FROM items WHERE name LIKE '%${q}%'`);
  res.send(rows);
});
```

Alertas: 

Vuln SQLi: concatenación directa en query — usar placeholders.
Async bug: db.query no await — resultado puede ser una promesa.
No input validation: `q` no sanitizado

Arreglo:

```
const rows = await db.query('SELECT * FROM items WHERE name LIKE ?', [`%${q}%`]);
```
validar `q` (longitud, chars), y tests que simulen inputs maliciosos.


## Automatizaciones y reglas: prioritarias

ESLint con reglas de seguridad y complejidad.
TypeScript checks o // @ts-check para JS crítico (si posible) — usa TypeScript.
SCA (npm audit + CodeQL).
Coverage mínimo en CI (ej.: 80%) con Jest.
Pipeline en GitHub Actions que bloquee merges con alerts de seguridad o tests fallidos


# Herramientas de análisis estático y dinámico para automatizar revisiones

Para errores de estilo y bugs sencillos usa linters y reglas (editor + CI).
`ESLint`.

Contratos/tipo usa tipado gradual (TypeScript / // @ts-check)
para atrapar clases enteras de errores en tiempo de compilación
TS.

Vulnerabilidades semánticas y reglas de seguridad:
`SAST/CodeQL/Semgrep`
entienden flujo/taint y permiten reglas personalizadas. CodeQL

Dependencias / supply chain usa SCA scanners (npm audit, Snyk, etc.)
detectan CVEs y sugerencias de parche
`Snyk npm`.


## Herramientas de análisis estático (SAST / linting / reglas)

1. ESLint — linter configurable, plugin ecosystem y reglas personalizables
atrapar antipatterns, problemas async, no-unused-vars
reglas de complejidad, y para integrar en editor + CI

típico: npm install --save-dev eslint → npx eslint

añadir: reglas de complejidad (complexity)
reglas para promesas/async
no-unsafe-finally
plugin para security/regex

2. TS: tipado que reduce errores
(API mismatch, propiedades faltantes).
Se puede adoptar gradualmente (// @ts-check)

3. Semgrep — SAST ligera
reglas fáciles (YAML/snippet)
para encontrar patrones de seguridad (SQLi, XSS, secrets)
escribir reglas específicas de negocio
Integra rápido en CI

4. CodeQL
análisis semántico más profundo (queries sobre AST/graph)
fuerte para descubrir variantes de vulnerabilidades a gran escala y personalizar queries
Útil cuando necesitas cobertura semántica y hunting

5. Reglas/linters útiles
Prettier (formato), ESLint, reglas específicas del equipo (nombre/longitud/naming).


## Análisis de dependencias / supply-chain (SCA)

npm npm audit:
revisión rápida de CVEs en node_modules y package-lock.json
Primera línea de defensa

Snyk — SCA + fix PRs automatizados:
base de datos propia, puede integrarse en CI y repos para sugerir upgrades/parches

GitHub Dependabot / Renovate:
para PRs automáticas que actualizan dependencias y evitan acumular vulnerabilidades.


## Herramientas de análisis dinámico / runtime (debug / perf / DAST)

DevTools:
profiling (heap snapshots, CPU profiles)
tracing, y debugging de front-end
Ideal para memory leaks y hot-paths.

node --inspect / node --trace-:
debugging y profiling en Node.js. (usa junto con DevTools

Clinic.js (profiling/doctor tools):
análisis de performance y event-loop blocking para Node
(identificar hot-paths / bloqueos).

DAST tools (dynamic app scanning):
OWASP ZAP, Burp Suite
para probar endpoints en ejecución (XSS, CSRF, auth flaws).


### Rendimiento y fugas

ciclo típico:

```
reproducir → perfil CPU/heap → identificar objeto retenido → localizar código y test
```


## Integración en CI/CD: automatizar y repoducible

1. Añade linters + tests + SCA + SAST en la pipeline de PR:
en GitHub Actions ejecutar en este orden: install → eslint → type-check → jest → semgrep/codeql → npm audit/snyk
Esto bloquea merges con hallazgos críticos.

2. gating: alerts de seguridad P0 bloquean merge
warnings se abren como tickets.

3. SARIF outputs para centralizar resultados
CodeQL / Semgrep / ESLint soportan SARIF


## Patrón “golden” de configuración mínima

1. Pre-commit hooks (husky):
prettier --check, eslint --fix, npm test --silent.

2. CI (GitHub Actions)
job lint, job test
job security-scan (Semgrep/CodeQL)
job audit (npm audit / snyk).

3. Dependabot/Snyk auto-PRs para vulnerabilidades en deps

4. Coverage guard (ej.: coverage >= 80%).


## Detecciónes según herramienta

ESLint: estilo, errores simples, patterns peligrosos (sin tipado profundo).
TypeScript: mismatches de tipos y API, errores en tiempo de compilación.
Semgrep: reglas de seguridad y patrones semánticos ligeros (SAST developer-friendly).
CodeQL: hunting a escala, variantes semánticas de vulnerabilidades (SAST avanzado).
npm audit / Snyk: vulnerabilidades conocidas en dependencias (SCA).


## Herramientas prioritarias

1. ESLint + Prettier en editor + pre-commit (rápido ROI).
2. Unit tests + coverage (Jest / Vitest) con thresholds mínimos
3. npm audit en CI y Dependabot (evita deuda de libs).
4. Semgrep en CI para reglas de seguridad específicas del dominio.
5. CodeQL/SAST más profundo si manejas datos sensibles o escala de riesgo.
6. Runtime profiling (Clinic, DevTools) cuando haya problemas de perf/leak.


## Ej comandos

```
# ESLint (instalación rápida)
npm install --save-dev eslint
npx eslint --init
npx eslint "src/**/*.js"

# Semgrep quick scan
pipx install semgrep    # o usar la binary/CI image
semgrep --config=p/javascript .

# npm audit
npm audit --json

# CodeQL (en GitHub Actions se configura con el action oficial)
# Snyk: usar integración para PRs y scanner en CI
```


## Prácticas

Prioriza poca señal y alta acción:
evita demasiados falsos positivos (tuning de reglas).

Empieza con reglas que bloqueen problemas críticos:
luego afina para reducir ruido.

Para cada hallazgo crítico:
añadir test + regla que evite la misma regresión

Mantén el pipeline reproducible (SARIF/artifacts) para auditoría y tracking

El equipo debe saber escribir reglas simples en Semgrep / CodeQL:
para patrones recurrentes del negocio.


## Reco

Prioriza poca señal y alta acción: evita demasiados falsos positivos (tuning de reglas).
Empieza con reglas que bloqueen problemas críticos; luego afina para reducir ruido.
Para cada hallazgo crítico: añadir test + regla que evite la misma regresión.
Mantén el pipeline reproducible (SARIF/artifacts) para auditoría y tracking.
Enseña al equipo a escribir reglas simples en Semgrep / CodeQL para patrones recurrentes del negocio


# Refactorizar

### Principios:

Pequeños pasos seguros:
refactors incrementales que siempre pueden revertirse.

Priorizar valor/riesgo:
primero lo que reduce bugs o facilita cambios frecuentes.

Red → Green → Refactor:
escribe (o mantiene) un test que falle, hazlo pasar, luego refactoriza manteniendo tests verdes.

Cambios aislados:
cada PR hace una cosa (rename, extract, perf, etc.).

Documentar intención:
cada refactor debe tener motivo, impacto esperado y tests asociados.


### Cuando refactorizar

Código duplicado repetido en ≥2 lugares.

Funciones muy largas o con complejidad cicl. alta (>10).

Nombres que no comunican intención.

APIs públicas confusas o side-effects inesperados.

Al añadir funcionalidad relacionada (refactor como parte del desarrollo).

Cuando un bug se corrige con una solución frágil — mejor arreglar la raíz


## Estrategia

1. Refactor pequeño: 5–60 m
Mejora local de legibilidad o seguridad sin riesgo

Escribe o confirma test que cubra el comportamiento actual.
Crea una rama pequeña refactor/<topic>-<short>.
Haz el cambio (p. ej. rename, extracción de función).
Ejecuta tests y linters.
PR con descripción: “Qué”, “Por qué”, “Impacto” y link a tests

2. Refactor medio: 1–4 h
Dividir archivo grande, eliminar duplicación

Identifica “foco” y tests relevantes.
Extrae piezas a funciones/módulos con pruebas unitarias nuevas.
Actualiza imports y cobertura.
PR con migration notes y posible feature-flag si el riesgo es mayor.

3. Refactor grande (días, planificado)
Re-arquitecturar

Plan + retrocompatibilidad + listas de cambios mínimos.
Probar en staging con canary deploy si aplica.
Hacerlo en pasos: (a) introducir contratos/typings, (b) adaptar módulos, (c) remover compat shim.
Añadir métricas y rollback plan.


## Técnicas 

SRP, DRY (duplicación), etc


## Proceso de PR

`Rama`: refactor/<scope>-<what>

`Título PR`: refactor: <acción corta> — <módulo>

`Descripción`:
1. Qué (breve).
2. Por qué (motivo, bug o deuda técnica).
3. Cambios (lista).
4. Tests (qué añadiste/actualizaste).
5. Riesgos / rollback.

`Check`: en PR
Tests pasan localmente.
Linter/format paso.
No se rompen contratos (o hay notes)
Documentación/CHANGELOG si aplica.)

`Etiquetas`:
refactor, tech-debt, needs-review


## Métricas que validan refactors

`Cobertura`: no bajar cobertura crítica; idealmente aumentar.
`Complejidad`: reducción en métricas (ciclomática promedio por función).
`Tamaño de funciones/archivos`: número medio de líneas por función.
`Número de ocurrencias de patrones peligrosos` (p. ej. catch vacío) medido por ESLint/Semgrep.
`Tiempo para entender PR`: si baja, refactor mejoró legibilidad.


## Anti-patterns / errores en refactor

Refactor masivo sin tests.
Cambiar estilo + lógica en un mismo PR (mezcla ruido).
No medir (no añadir métricas o baselines).
Eliminar compatibilidad sin plan ni notas.
“Polishing” innecesario que no aporta valor tangible


## Herramientas y automatización

Linter/formatter: ESLint + Prettier.
Tests: Jest.
SAST ligero: Semgrep.
CI: integrar pasos de lint → test → security en tu pipeline (p. ej. GitHub Actions).


## Check merge

PR cubre una sola intención.
Tests nuevos y existentes pasan.
Linter y formato OK.
No se introducen dependencias inseguras.
Cambios documentados si afectan contratos.
PR pequeño (<300 líneas idealmente).



# Mantenibilidad del Código

1. Principios (la brújula)

Intención clara: el código debe decir qué hace y por qué, no sólo cómo.
Pequeñas superficies de cambio: dividir responsabilidad para que los cambios impacten poco.
Protección por pruebas: cada refactor y bugfix va acompañado de tests.
Automatizar la higiene: reglas que eviten errores repetitivos; los humanos no deben revisar estilo.
Documentación viva: docs y ejemplos que se mantienen junto al código (no en la cabeza).

2. Prácticas

`Estructura y modularidad`:
Definir límites claros: “módulos” con una sola responsabilidad (API, persistence, business logic, adapters).
Preferir interfaces pequeñas y explícitas (exports claros).
Evitar dependencias circulares y dep-inversion cuando hace sentido (inyección de dependencias).

`Tipado y contratos`:
Añadir tipos donde más protegen: DTOs de entrada/salida, contratos de servicios, core domain.
Usar TypeScript o // @ts-check en módulos críticos para atrapar errores de API temprano.

`Testing con intención`:
Unit tests que prueben comportamiento, no implementación.
Tests de integración para las rutas críticas (I/O, auth, pagos).
Coverage objetivo (ej.: 80% global, pero más importante: cobertura de caminos críticos).
Usa Jest u alternativa (Vitest).

`Linters, formato y reglas (higiene automática)`:
Linter estricto y formateo automático en pre-commit/pre-push: ESLint + Prettier.
Reglas que detecten complexity elevada, promesas mal usadas, catch silencioso, etc.

`Seguridad y dependencias`:
Integrar análisis de dependencias en CI (npm audit o SCA como Snyk / Dependabot).
Reglas SAST en CI para patrones peligrosos: Semgrep o CodeQL.

`CI/CD y gating`:
Pipeline que ejecute: install → lint → type-check → tests → SAST → SCA. Usa GitHub Actions o tu runner preferido.
Gates: bloquear merges en fallos críticos, abrir tickets automáticos para warnings

`Observabilidad y rendimiento`:
Métricas y alertas para áreas críticas (latencia, error rate).
Perfilado recurrente en rutas calientes con herramientas Node/DevTools. (Node.js runtime + profiling.)

`Documentación y ejemplos`:
README + Quickstart + API contract snippets junto al paquete.
CHANGELOG y notas de migración para breaking changes.
Plantillas de PR y checklist

`Código legible por defecto`:
Nombres que comunican intención, no abreviaturas crípticas.
Evitar “clever code” — preferir claridad.
Comentarios que expliquen por qué, no cómo.

Estructura:

```
/src
  /api        -> express handlers / controllers (thin)
  /services   -> business logic (unit-testable)
  /db         -> adapters / repositories
  /lib        -> util pure helpers
  index.js
/tests
  unit/
  integration/
/docs
  quickstart.md
  api-contracts.md
```

Herramientas:

ESLint, Prettier — higiene de código.
TypeScript — contratos/seguridad de tipos.
Jest — tests.
Semgrep / CodeQL — reglas de seguridad.
Snyk / Dependabot — dependencias y CVEs.
GitHub Actions — automatización CI.
SonarQube — métricas de calidad (opcional).




# Rendimiento

| Dimensión        | Significa             	   |
| ---------------- | ------------------------- |
|   CPU            | tiempo de ejecución       |
|   Memoria        | consumo y leaks           |
|   Network        | requests innecesarios     |
|   Rendering      | reflows/repaints          |
|   Latencia       | tiempo percibido          |
|   Escalabilidad  | comportamiento bajo carga |

1. Medir
2. Encontrar bottleneck
3. Formular hipótesis
4. Optimizar
5. Volver a medir

Herramientas:

Browser:
Chrome DevTools → Performance
Lighthouse
Memory profiler

Node.js:
node --inspect
clinic.js
0x
perf_hooks


## Bottlenecks

CPU-bound:
Mucho cálculo.

Ej:
loops grandes
parsing
algoritmos O(n²)

IO-bound:
Esperas externas

Ej:
API calls
DB queries
filesystem


Render-bound:
Problemas del DOM

Ej:
layout thrashing
renders innecesarios


## Optimización Algorítmica

Cambiar el algoritmo > micro-optimizar código

O(n²)

```
users.forEach(u => {
  orders.find(o => o.userId === u.id)
})
```

O(n)

```
const orderMap = new Map(
  orders.map(o => [o.userId, o])
)

users.forEach(u => {
  orderMap.get(u.id)
})
```


# Lectura de Código


# Flujo



# Identificar entradas/salidas


# Contratos implícitos.




# App pro

## Herramientas dev, stag, prod





# Construcción de Código

Pasar de escribir código que "funciona" a escribir código de nivel Senior
Se trata de de entender el impacto de cada línea a largo plazo
No solo resuelve problemas; construye sistemas mantenibles, escalables y legibles para otros seres humanos

## 1. Abstracción y Diseño

Se programa con principios
El objetivo es es reducir la carga cognitiva necesaria para entender un sistema.

SOLID y más allá:
el pragmatismo es clave, saber cuando romperlos

Patrones de Diseño (GoF):
Enfocarse en patrones creacionales, estructurales y de comportamiento
bajo el lente de "resolver problemas comunes"
no como plantilla obligatoria

Clean Architecture & Hexagonal:
Separar la lógica de negocio de los detalles técnicos
(bases de datos, frameworks, APIs)

## 2. Calidad de Código y Mantenibilidad

El código se escribe pensando en el "yo del futuro" y en el compañero que heredará el proyecto

Refactoring:
"Refactoring" de Martin Fowler
"Code Smells" y transformaciones seguras

Testing Estratégico:
Los tests por cobertura pasan a ser test por confianza
TDD (Test Driven Development) como herramienta de diseño.
Diferencia real entre Unit, Integration y E2E

Documentación Viva:
Escribir código autodocumentado
herramientas como ADRs (Architecture Decision Records)
para explicar el porqué de las decisiones.

## 3. Triángulo de Trade-offs

Habilidad más crítica
No existe la solución perfecta
solo un conjunto de compromisos (trade-offs).

Junior vs Senior:

Tecnología:
Elige la más "trendy".
Elige la que mejor resuelve el problema con menos riesgo.

Rendimiento:
Optimiza prematuramente.
Mide, identifica cuellos de botella y optimiza donde impacta.

Complejidad:
Añade capas "por si acaso".
Mantiene el sistema lo más simple posible (YAGNI).


## 4. Mentalidad y Soft Skills

Trabajo en equipo
 
Code Reviews:
criticar el código no al autor
revisiones para enseñar y aprender

Pensamiento de Sistemas:
cómo el código afecta al despliegue
a los costos de infraestructura y a la experiencia del usuario final

Deuda Técnica:
cuándo es momento de pagar deuda y cuándo es aceptable contraerla para salir a producción


Recursos:

Clean Code (Robert C. Martin): fundamentos

A Philosophy of Software Design (John Ousterhout):
El contrapunto perfecto al primero; enfocado en reducir la complejidad

The Pragmatic Programmer (Andrew Hunt & David Thomas):
Para la mentalidad profesional.


# SOLID

Brújula para gestionar la complejidad, no mandamientos
El problema es que aplicarlos a rajatabla en cada rincón del código puede llevar a una "arquitectura de astronauta":
un sistema tan desacoplado que es imposible de seguir.

SOLID pragmatico:
cuándo es mejor dar un paso atrás.

1. SRP (Single Responsibility Principle)
Regla: Una clase/función debe tener una sola razón para cambiar
Si divides todo en átomos minúsculos, terminas con 50 archivos para una sola funcionalidad

Romperlo:

Componentes de UI o lógica muy pequeña donde separar la "vista" del "estado" añade más ruido que claridad
Si una lógica solo se usa en un lugar y tiene 10 líneas, dejarla "co-locada" suele ser mejor que crear un servicio abstracto

Cohesión sobre separación ciega

2. OCP (Open/Closed Principle)
Regla: Abierto para extensión, cerrado para modificación
Abusar de esto suele terminar en un exceso de interfaces y patrones Strategy que nadie necesita

Romperlo:

Si la probabilidad de que esa lógica cambie en el futuro es baja
No crees una abstracción para un sistema de pagos que solo usará Stripe durante los próximos tres años
Modificar un switch es más sencillo que mantener una jerarquía de clases innecesaria

YAGNI (You Ain't Gonna Need It)

3. LSP (Liskov Substitution Principle)
Regla: Las subclases deben ser sustituibles por sus clases base
En lenguajes modernos o entornos funcionales (como React), este principio a veces se siente rígido

Romperlo:
Casi nunca se "rompe" a propósito, pero se evita favoreciendo la composición sobre la herencia
Si te encuentras lanzando un error de NotImplementedException en una subclase
el problema no es el principio, es que la herencia fue una mala elección desde el inicio.

4. ISP (Interface Segregation Principle)
Regla: No obligues a nadie a depender de métodos que no usa
Crear una interfaz por cada método puede fragmentar el dominio.

Romperlo:
Cuando trabajas con objetos de configuración o "prop types" que son naturales al dominio del problema
Es mejor pasar un objeto User completo si ese objeto es la unidad mínima de información en toda la app
en lugar de 5 interfaces (UserWithEmail, UserWithName, etc.).

5. DIP (Dependency Inversion Principle)
Regla: Depende de abstracciones, no de concreciones
Inyectar absolutamente todo (incluso librerías de utilidad como lodash o date-fns) hace que el código sea tedioso de leer y testear.

Romperlo:
Con herramientas estables y transversales
No necesitas una interfaz para console.log o para una librería de formateo de fechas estándar
Hazlo solo donde el cambio de implementación sea un riesgo real
(Bases de datos, APIs externas, Clientes HTTP).


"Coste" de SOLID:
Cada vez que aplicas un principio, añades una capa de indirección

Preguntar:
Esta abstracción me ahorra más tiempo del que me quita explicándola?


Ej: Des-construcción
Imagina un componente que gestiona un formulario complejo con validaciones, llamadas a API y estados visuales

1. Fase 1: Aplica SOLID estricto
Separa el validador, el servicio de API, el manejador de estado y la vista.

2. Fase 2: Analiza qué piezas se sienten "lejanas"
Si el validador solo existe para ese formulario, muévelo dentro de un hook personalizado

3. Resultado: Código limpio agrupado con contexto de uso


## Sobre-diseño/over-engineering

El código sobre-diseñado se ve bien y sigue todas las reglas de los libros
El problema es que resuelve problemas que no existen

Ej: tarea simple puede convertirse en una pesadilla de mantenimiento

Componente 'Saludo':

Requerimiento:
Mostrar un mensaje de bienvenida al usuario dependiendo de la hora del día

1. Versión Sobre-diseñada ("Arquitectura de Astronauta")
Aplicación de SOLID, Inyección de Dependencias y Patrones de Diseño
para una funcionalidad de 5 líneas

```ts
// interfaces/IGreetingProvider.ts
interface IGreetingProvider {
  getGreeting(name: string): string;
}

// services/MorningGreetingService.ts
class MorningGreetingService implements IGreetingProvider {
  getGreeting(name: string) { return `Buenos días, ${name}`; }
}

// factories/GreetingFactory.ts
class GreetingFactory {
  static create(hour: number): IGreetingProvider {
    if (hour < 12) return new MorningGreetingService();
    // ... más lógica para tarde y noche
  }
}

// hooks/useGreeting.ts
export const useGreeting = (name: string) => {
  const hour = new Date().getHours();
  const service = GreetingFactory.create(hour);
  return service.getGreeting(name);
};
```

Indirección excesiva: Para entender cómo se genera un texto, tienes que saltar entre 4 archivos

Abstracción prematura: ¿Realmente vas a cambiar el MorningGreetingService
por una implementación de base de datos o una API externa en el futuro? Probablemente no.

Carga cognitiva: Has añadido 50 líneas de código para resolver un problema que se soluciona con un objeto literal

2. Pragmática
La mejor abstracción es la que no hace falta

```
const GREETINGS = {
  morning: "Buenos días",
  afternoon: "Buenas tardes",
  evening: "Buenas noches",
} as const;

export const Greeting = ({ name }: { name: string }) => {
  const hour = new Date().getHours();
  
  const getTimeOfDay = (h: number) => {
    if (h < 12) return GREETINGS.morning;
    if (h < 20) return GREETINGS.afternoon;
    return GREETINGS.evening;
  };

  return <h1>{getTimeOfDay(hour)}, {name}</h1>;
};
```

### Red Flags de Sobre-diseño

Saber si te estás pasando de la raya
Antes de crear una nueva abstracción


Señal | Es Necesario si... | Es Sobre-diseño si...

`Interfaces`:
Tienes al menos 2 implementaciones reales hoy.
Quizás en el futuro usemos otra librería

`Generics <T>`:
La lógica es idéntica para múltiples tipos de datos.,"Solo lo usas con un tipo, pero ""por si acaso""."

`Inyección de Dependencias`:
Necesitas intercambiar la lógica para testing o mocks complejos.
Podrías haber importado una función pura y testearla igual.

`Patrones (Strategy/Factory)`:
La lógica de decisión es compleja y cambia frecuentemente.
El switch tiene 3 casos y no ha cambiado en un año.


Rule of Three: heurística para evitar el sobre-diseño

##### 1. La primera vez que haces algo: Hazlo de la forma más sencilla y lineal posible
aunque rompas algún principio SOLID menor

##### 2. Segunda vez que haces algo similar: Copia y pega
Sí, duplicar código es más barato que una mala abstracción

##### 3. Tercera vez que haces algo similar: Ahora sí, extrae la lógica
crea la interfaz y aplica los patrones necesarios
Ya conoces el patrón real de uso.


Test estrés:
Si te toma más de 2 minutos explicar dónde está el código (no qué hace, sino dónde está),
probablemente has sobre-diseñado la estructura.


# Patrones de Diseño (GoF)

Problemas comunes para patrones creacionales, estructurales y de comportamiento

Los patrones GoF son un vocabulario técnico para describir soluciones a problemas de comunicación entre objetos
Error: forzar un patrón en el código para que parezca profesional

La clave es identificar el punto de fricción y aplicar el patrón solo si reduce la complejidad total.

1. Creacionales: Controlando el "New"
##### Problema común: La lógica de creación de objetos está dispersa por toda la aplicación
haciendo que sea difícil cambiar de implementación.

`Factory Method`:
Úsalo cuando no sepas de antemano qué tipo exacto de objeto vas a necesitar

No crees una Factory para todo
Úsala solo si tienes lógica condicional compleja para instanciar algo
(ej. crear diferentes tipos de "Conectores" según la configuración del entorno).

`Singleton`: (El patrón más odiado/usado).
Evítalo para lógica de negocio
Útil para recursos globales únicos y pesados
(ej. un pool de conexiones o un logger)
pero en entornos modernos como React, el Contexto o un Store suelen ser mejores alternativas.

2. Estructurales: El "Pegamento" del Sistema
##### Problema común: Tienes piezas que no encajan entre sí o un sistema que se ha vuelto demasiado grande y difícil de usar.

`Adapter`:
Sirve para envolver librerías de terceros
Problema común: Tu código depende directamente de una librería de gráficas o de una API de fechas.

Solución: Creas un "Adapter".
Si la librería cambia o muere, solo modificas el Adapter, no toda tu aplicación.

`Facade (Fachada)`: Simplifica la complejidad
Problema común: Para realizar una acción (ej. "Procesar Pedido"),
tienes que llamar a 5 servicios diferentes en un orden específico.

Solución: Creas una clase/función OrderProcessor que oculte esa complejidad tras un solo método process().

3. Comportamiento: Gestionando la Lógica
##### Problema común: Tienes bloques if/else o switch que crecen sin control cada vez que añades una nueva regla.

`Strategy`: Intercambia algoritmos en tiempo de ejecución

Ej: Un sistema de descuentos
En lugar de un switch gigante, cada tipo de descuento es una "Estrategia" separada.

`Observer`: Define una dependencia uno-a-muchos.
Es la base de la programación reactiva y de cómo funcionan los eventos en el navegador
Si usas librerías de estado, ya estás usando Observer bajo el capó

`State`:
Permite que un objeto cambie su comportamiento cuando su estado interno cambia

Ideal para componentes de UI complejos
ej. un botón que pasa de "Cargando" a "Éxito" o "Error"
con lógicas distintas para cada uno


### Cuándo NO usarlos

Regla de la Simplicidad:

1. Si el código es legible sin el patrón:
No lo añadas
Un switch de 4 casos es más legible que 4 clases Strategy y una Factory

2. Si el patrón añade demasiada indirección:
Los patrones suelen requerir más interfaces y archivos
En hardware limitado o sistemas donde el rendimiento es crítico, cada nivel de indirección cuenta

3. No hay variabilidad:
Si una clase nunca va a tener una segunda implementación
no necesitas un Adapter ni una Interface.

4. : No implementes el patrón hasta que sientas el dolor que el patrón intenta curar.


## Sobre-ingeniería patrones GoF

##### Ocurre cuando aplicamos una solución diseñada para sistemas masivos y ultra-extensibles a un problema pequeño que podría resolverse con lógica básica.

Ej: Theming
aplicar el patrón Strategy y el patrón Factory puede convertirse en una pesadilla de sobre-ingeniería para algo tan simple como cambiar el estilo visual

Requerimiento: alternar entre el temas

1. Sobre-diseñada
##### el desarrollador decide que "en el futuro podría haber 100 temas"
y que "la lógica de renderizado debe estar totalmente desacoplada"


```
// 1. La Interfaz (Strategy)
interface IThemeStrategy {
  getStyles(): Record<string, string>;
}

// 2. Implementación A
class LiquidGlassTheme implements IThemeStrategy {
  getStyles() { return { background: 'backdrop-filter: blur(10px)', color: '#fff' }; }
}

// 3. Implementación B
class ClassicTheme implements IThemeStrategy {
  getStyles() { return { background: '#f0f0f0', color: '#000' }; }
}

// 4. La Fábrica (Factory)
class ThemeFactory {
  static getTheme(type: 'liquid' | 'classic'): IThemeStrategy {
    if (type === 'liquid') return new LiquidGlassTheme();
    return new ClassicTheme();
  }
}

// 5. El Contexto/Uso
const Calculator = ({ type }) => {
  const theme = ThemeFactory.getTheme(type);
  const styles = theme.getStyles();
  
  return <div style={styles}>...</div>;
};
```

Archivos innecesarios: Has creado al menos 4 estructuras (interfaz, 2 clases y 1 factory) para algo que es puramente estático.
Indirección: Si quieres saber qué color tiene el tema "Classic", tienes que navegar por 3 archivos diferentes.
Abuso de Clases: Estás instanciando objetos (new LiquidGlassTheme()) que no tienen estado interno, solo para devolver un objeto de configuración

2. Pragmática
Un tema en React es simplemente data
no comportamiento complejo que requiera polimorfismo de clases

```
// Un simple objeto de configuración (Data-driven)
const THEMES = {
  liquid: { background: 'backdrop-filter: blur(10px)', color: '#fff' },
  classic: { background: '#f0f0f0', color: '#000' }
};

const Calculator = ({ type }: { type: keyof typeof THEMES }) => {
  const styles = THEMES[type] || THEMES.classic;

  return <div style={styles}>...</div>;
};
```

Líneas de código: De ~30 a 5.

Mantenibilidad: Si quieres añadir un tema "Dark", solo añades una línea al objeto THEMES
No creas una clase nueva ni modificas una Factory.

Rendimiento: Acceso directo a un objeto vs. instanciación de clases y llamadas a métodos.


### Checklist implementar un patrón

1. Hay comportamiento o solo datos?
Si solo devuelves valores (strings, config, colores), usa un objeto o un mapa
No uses Factory/Strategy.

2. Cuántas implementaciones tengo HOY?
Si solo tienes una o dos, escribe un if/else o un switch.
El código es más fácil de leer.

3. El cambio es frecuente?
Si la lógica de "cómo se crea un objeto" cambia cada semana, usa una Factory
Si no ha cambiado en 6 meses, déjalo simple


# Clean Architecture & Hexagonal

Separar la lógica de negocio de los detalles técnicos
(bases de datos, frameworks, APIs) 

Son estrategia para que el código no se vuelva "rehén" de sus propias herramientas

Objetivo:

Lógica de negocio (cómo se calcula un impuesto, cómo se valida un usuario)
Sea independiente de si usas React, Node, MySQL o una API de terceros.

1. Estabilidad vs. Volatilidad
Las capas internas no deben saber nada de las capas externas

`Dominio (Núcleo)`: Es la parte más estable
Son las reglas del negocio
Si tu calculadora suma A+B, esa regla no cambia si usas librerías

`Infraestructura (Borde)`:
Parte más volátil
Cambia constantemente: una nueva versión de una librería
un cambio en el endpoint de una API
o pasar de localStorage a IndexedDB

2. Arquitectura Hexagonal (Puertos y Adaptadores)
En lugar de círculos, imagina un hexágono con "enchufes" (Ports) y "conectores" (Adapters).

`Puertos (Interfaces)`:
Son definiciones de lo que tu aplicación necesita
pero no dicen cómo se hace.

Ej: "Necesito una forma de guardar el historial de cálculos". (Interface ICalculatorRepository)

`Adaptadores (Implementaciones)`:
Piezas de hardware/software que se enchufan a esos puertos

Ej: Un adaptador que usa localStorage, otro que usa una API REST, y otro que es solo un objeto en memoria para tests.

Capa | Responsabilidad | Ejemplo Calculadora

Dominio:
`Lógica pura y reglas`.
La función calculate(op, a, b) que no sabe nada de React.

Aplicación:
`Casos de uso (Orquestación)`.
Una función ExecuteCalculation que valida el estado y llama al dominio.

Infraestructura
`Detalle técnico`.
"El componente de React, el useReducer, o el acceso al window.localStorage."

3. Pragmatismo: Esfuerzo
Crear 4 capas para una aplicación de "Lista de tareas" es una pérdida de tiempo

Filtro:

`Baja Complejidad`:
Si el proyecto es pequeño y no va a durar años, mantén la lógica en el Framework
(ej. dentro de un Hook de React)

`Alta Complejidad / Larga Vida`:
Si las reglas de negocio son complejas o el Framework podría cambiar
cambiar (ej. pasar de React a Next.js o Vue)
Separa el dominio desde el día 1.

4. Testabilidad:
Cuando separas la lógica del framework, tus tests pasan de ser lentos y pesados
(usando React Testing Library para simular clicks) a ser instantáneos (simples funciones de JS con Vitest o Jest).

Si para testear una suma tienes que montar un componente de React, tu arquitectura está "acoplada".



# Resolución

Habilidad de identificar, diagnosticar, arreglar y prevenir problemas de código con rigor técnico y criterio de producto/arquitectura
No sólo “arreglar” bugs, sino entregar soluciones mantenibles, seguras y comunicadas.

1. Fundamentos:
diagnóstico, debugging, pruebas, lectura de código.

2. Causas raíz y mitigación:
performance, concurrencia, memoria, errores de diseño

3. Automatización y herramientas:
pruebas avanzadas, CI, análisis estático/dinámico, monitoreo

4. Liderazgo técnico:
postmortems, mentoring, diseño de mitigaciones a largo plazo, evaluación de riesgo

## 1. Fundamentos

Tener una caja de herramientas mental y práctica para reproducir y diagnosticar cualquier fallo rápido.

1. Reproducción & lectura de código:
Meta: reproducir un bug en <30–60 min> y entender el flujo
práctica: leer 1 PR grande (30–60 min), trazar el flujo en papel o en un diagrama.

2. Depuración & logs:
dominar uso de debugger (breakpoints, watch, step-over/into), logging estructurado
práctica: convertir 3 logs de texto libre en logs estructurados (json) con niveles y correlación (request id).

3. Pruebas básicas y local env:



# Planteo

Entender, estructurar y resolver:
Transformar un enunciado (a veces vago) en una solución correcta, eficiente, testeable y bien comunicada
Entender requisitos hasta justificar trade-offs y validar la solución

1. Interpretación y descomposición del problema
2. Modelado y elección de estructuras/algoritmos
3. Diseño paso a paso + pseudocódigo y pruebas mentales
4. Implementación robusta y pruebas automáticas
5. Optimización, justificación y comunicación

## 1. Leer, reformular y preguntar

Entender el enunciado al 100%, identificar supuestos y límites
Tu propia versión del enunciado (qué hay que hacer, inputs/outputs, ejemplos).
##### Extrae y lista entradas, salidas, restricciones, casos límite.

Define ejemplos simples y complejos (mínimo 3).
Resultado esperado: cada problema con una “mini-especificación” clara.

## 2. Casos y ejemplos

oráculo de pruebas
convertir intuición en tests / ejemplos que validen soluciones.

Genera una tabla de casos: normal, borde, nulos, grandes, random, invalidos.
Practica: para cada problema, escribe 8–12 casos (manualmente) que cualquier solución correcta debe pasar.
Resultado: suite mental de pruebas para validar cualquier implementación.

## 3. Estructuras de datos & patrones

##### Reconocer qué estructuras encajan mejor según el problema

Repasa: arrays, hash maps, sets, listas enlazadas, árboles, heaps, grafos, colas, stacks.
Ejercicio: para 10 problemas, justifica por qué una estructura es la mejor (o por qué combinar varias).
Resultado: mentalidad de mapeo “patrón → estructura”.

## 4. Complejidad y restricciones prácticas

##### Aprender a estimar costo (tiempo/memoria) y si es aceptable

Práctica: para soluciones propuestas, calcula O( ) en peor, promedio y memoria.
Tarea: aprende a detectar señales de alerta (n ≤ 10⁵ → evitar O(n²), inputs enormes → streaming).
Resultado: decidir en 1–2 minutos si una estrategia es viable.

## 5. Estrategias de resolución (top-down)

##### Diseñar enfoque paso a paso antes de codificar.

Técnica: divide y vencerás, greedy, DP, backtracking, BFS/DFS, two pointers.
Práctica: para 6 problemas, escribe pseudocódigo completo y comenta cada paso.
Resultado: reducción del número de cambios durante la implementación.

## 6. Pseudocódigo → pruebas mentales → invariantes

validar lógica sin compilar.

Aprende a mantener invariantes (variables que describen el estado correcto).
Práctica: ejecutar pseudocódigo a mano con tus casos y anotar el estado en cada iteración.
Resultado: casi ninguna sorpresa al pasar a la implementación.

## 7. Implementación limpia y manejo de errores

escribir código legible, modular y resistente a entradas inválidas.

Reglas: funciones pequeñas, nombres explícitos, early returns, manejo de excepciones.
Práctica: implementar 8 problemas con atención a edge-cases y validación de inputs.
Resultado: código que pasa tests y que otro dev puede entender en 2–3 minutos.

## 8. Tests automáticos y pruebas de regresión

automatizar la validación y prevenir regresiones.

Aprende: frameworks de tests del lenguaje (ej. Jest/pytest/JUnit), mocks básicos.
Práctica: para cada solución, escribe tests unitarios cubriendo la tabla de casos de la Semana 2.
Resultado: suite que corre rápido y falla con cambios no deseados

## 9. Optimización y trade-offs

perfilar y mejorar donde realmente importa.

Práctica: identifica hotspots (mediciones simples, contadores, temporización), prueba una optimización (algorithmic > micro).
Resultado: justificar por escrito por qué optimizaste y el impacto medido.

## 10. Comunicación y presentación de la solución

aprender a explicar tu planteo en entrevistas, PRs o revisiones.

Crea una plantilla para presentar: enunciado, ejemplos, complejidad, idea principal, pseudocódigo, edge-cases, tests, trade-offs.
Práctica: presenta 5 soluciones (puede ser grabación o en persona) y solicita feedback.
Resultado: explicación concisa, estructurada y convincente en ≤5 minutos.

## Plantilla: antes de escribir código

```
1) Enunciado (mis palabras, 1-2 líneas)
2) Inputs / Outputs (tipos y ejemplos)
3) Restricciones y supuestos (n máximos, memoria, orden)
4) Casos representativos (mínimo 5: normal, borde, empty, invalid, max)
5) Idea principal / estrategia (1 párrafo)
6) Pseudocódigo (claro, modular)
7) Complejidad estimada (tiempo, memoria)
8) Posibles fallos / edge-cases y cómo los cubro
9) Tests automáticos (lista o archivos)
10) Posibles optimizaciones y trade-offs
```

# Validación

## Conceptos

## Elementos



# Sanitización de datos

## Conceptos

## Elementos 



# Banderas


# Diseño de la solución

# Punteros

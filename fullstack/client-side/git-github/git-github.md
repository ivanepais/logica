# Control de Version

Las herramientas de control de versiones son una parte esencial de los flujos de trabajo modernos, para realizar copias de seguridad y colaborar en bases de código.


Los VCS son esenciales para el desarrollo de software:

Es raro que trabajes en un proyecto completamente solo, y tan pronto como empiezas a trabajar con otras personas, empiezas a correr el riesgo de entrar en conflicto con el trabajo de cada uno; esto es cuando ambos intentan actualizar la misma pieza de código al mismo tiempo.

Es necesario contar con algún tipo de mecanismo para gestionar los sucesos y ayudar a evitar la pérdida de trabajo como resultado.


Cuando trabaje en un proyecto por su cuenta o con otras personas, querrá poder hacer una copia de seguridad del código en un lugar central, para que no se pierda si su computadora falla.

También querrá poder volver a versiones anteriores si más adelante se descubre un problema.

Es posible que hayas comenzado a hacer esto en tu propio trabajo creando diferentes versiones del mismo archivo, p. myCode.js, myCode_v2.js, myCode_v3.js, myCode_final.js, myCode_really_really_final.js, etc., pero esto es realmente propenso a errores y poco confiable.

Los diferentes miembros del equipo normalmente querrán crear sus propias versiones separadas del código (llamadas ramas en Git), trabajar en una nueva característica en esa versión y luego fusionarla de manera controlada (en GitHub usamos solicitudes de extracción) con el versión maestra cuando hayan terminado con ella.


Los VCS proporcionan herramientas para satisfacer las necesidades anteriores.

Git es un ejemplo de VCS, y GitHub es un sitio web + infraestructura que proporciona un servidor Git además de una serie de herramientas realmente útiles para trabajar con repositorios git individualmente o en equipos, como informar problemas con el código, revisar herramientas y gestionar proyectos.

Características como asignación de tareas y estados de tareas, y más.


Nota: 

Git es en realidad un sistema de control de versiones distribuido, lo que significa que se realiza una copia completa del repositorio que contiene el código base en su computadora (y en la de todos los demás).

Usted realiza cambios en su propia copia y luego envía esos cambios nuevamente al servidor, donde un administrador decidirá si desea fusionar sus cambios con la copia maestra.


Hay otras alternativas como GitLab que puedes probar, y también puedes intentar configurar tu propio servidor Git y usarlo en lugar de GitHub.


## git:

flow: 
git init
git status
git add nombre_archivo || git add . (todos los archivos)
git log
git diff
(untracked) no git add, no figura en el repo/direc/proyect 
(cambios locales de prueba, descarte, para nosotros, 
para no incluir, ignorar.)
git commit

revertir commit para incluir cambios olvidados: 
git add archivo
git commit --amend

stage:
git checkout -- archivo (antes git add, untracked)

git log --oneline
git log --oneline | cat
7 números del hash

git reset --hard 7numero_commit
git reset --soft 7numero_commit

git revert
git diff numero_commit1 numero_commit2
git log --onelne --decorate
git diff HEAD~1 (un commit antes)
git diff HEAD~2 (dos commit antes)

git diff HEAD~1 HEAD 
git revert numero_commit
git revert HEAD
git revert --no commit HEAD
git revert --no commit HEAD~1
git revert --continue
(mensaje sobre cuales commits quitamos)
git log --oneline --graph
(commits anterior-sucesor)
git log --oneline --graph --decorate (punteros/rama)

git branch (lista ramas)
git branch nombre_rama
git branch/git status (muestra ramas)
git checkout nombre_rama (cambio rama)
git checkout -b nombre_rama (nueva rama y cambiar directo)
git branch -m nombre_rama nuevo_nombre_rama
git branch -d nombre_rama, eliminamos la rama
git branch -h (lista comandos para branch)

git merge: 
git add archivo // git add . 
git commit
(mensaje)
git log --oneline --decorate 
git checkout feature
o
git checkout -b feature
git add archivo
git commit
git checkout master 
git merge feature
git checkout -b new-feature (desde master)
git add archivo
git commit 
(mensaje)
git log --oneline --decorate --all --graph

1) fusionamos donde esta head
fast foward
2) fusionamos rama intermedia 
recursividad, nuevo commit 
3) creamos dos ramas desde master para realizar cambios 
dejamos intacto master
eliminamos las marcas de git y dejamos el contenido correcto. 

escenarios:  
1) master/main destino limpio
fast foward
2) origen y destino con commits
recursividad
3)conflicto cuando dos personas modifiquen. 
En ramas distintas la misma linea del mismo archivo. 
abrir archivo y eliminar contendio
 4) misma linea y contenido
llegamos a una solucion comun (elegimos un commit, u otro, o uno que incluya los dos)
o git merge --abort
y se quedara con el ultimo merge master y ramaXyz
siempre comunicado con el equipo. 

git stash
modificaciones
git add archivo
git status (opcional)
git stash 
git status

modificaciones
git stash save "mensaje"

remote workflow: 
crear repo en servicio alojamiento
git remote add origin https-dir
modificaciones
git add archivo / git add . 
git commit 
git push origin master 
git clone https-dir 
(modificaciones)
git add archivo / git add . 
git commit 
(mensaje)
git push origin master 
git pull origin master
va a hacer dos operaciones fetch y merge

o podemos hacer: 
git fetch siempre antes de hacer commits 
git fetch origin master
git merge origin master

o podemo hacer: 
git pull --rebase



branches por funcionalidad:
feature/login-page
bugfix/fix-login-issue
hotfix/crash-on-startup

(Git Flow):
modelo de branching
main: Contiene el código listo para producción.
develop: Código en desarrollo, donde se integran todas las características antes de fusionarlas en main.
feature/*: Ramas para desarrollar nuevas funcionalidades.
hotfix/*: Ramas para corregir errores en producción.
release/*: Ramas para preparar una nueva versión de producción.

commits pequeños y atómicos:
Cada commit cambios que realicen una tarea específica y completa
permiten revertir o aplicar cambios con precisión
evitar cambios no relacionados con la implementación

mensajes claros y descriptivos:
ej:
Agregar funcionalidad de autenticación de usuarios//linea1
//l2 vacía
- Se implementó login y registro de usuarios.//l3 descrip x l
- Se agregaron pruebas unitarias para la autenticación.//l4
- Se mejoró el manejo de excepciones en el proceso de registro.

Realiza un rebasing interactivo para reescribir el historial:
cuando trabajas en una rama con varios commits que no agregan mucho valor
puedes usar rebase -i (interactivo) para limpiar el historial y fusionar (squash) commits redundantes.

hooks de Git cuando sea necesario:
Git ofrece hooks que permiten automatizar tareas
como la ejecución de pruebas antes de hacer
pre-commit
pre-push

etiquetas (tags) para versiones:
marcar versiones importantes o lanzamientos en producción

revisiones de código
Antes de fusionar ramas en main o develop
realiza revisiones de código a través de Pull Requests (PRs
git checkout -b feature/login-page
fusiona la rama de trabajo
mediante un Pull Request (PR) o Merge Request (MR),
idealmente tras una revisión de código



## Prácticas

commits pequeños y atómicos:
Cada commit cambios que realicen una tarea específica y completa
permiten revertir o aplicar cambios con precisión.
enfocarse:
corregir un error, implementar una nueva func, hacer un refactor
Evita agregar cambios no relacionados en un mismo commit

mensajes claros y descriptivos:
crucial para entender el historial de cambios del proyecto
formato:
Línea 1: Un resumen conciso de los cambios (menos de 50 caracteres).
Línea 2: (En blanco)
Línea 3 y más: Una descripción detallada del commit, si es necesario.
ej:
Agregar funcionalidad de autenticación de usuarios

- Se implementó login y registro de usuarios.
- Se agregaron pruebas unitarias para la autenticación.
- Se mejoró el manejo de excepciones en el proceso de registro.

ramas (branches) desarrollar func y err:
Evita trabajar main o master
ramas para cada nueva funcionalidad. corrección de errores
o mejora.
git checkout -b feature/login-page
fusiona la rama de trabajo
mediante un Pull Request (PR) o Merge Request (MR),
idealmente tras una revisión de código

flujo de trabajo de ramas (Git Flow):
modelo de branching desarrollo colaborativo y la entrega continua
main: Contiene el código listo para producción.
develop: Código en desarrollo, donde se integran todas las características antes de fusionarlas en main.
feature/*: Ramas para desarrollar nuevas funcionalidades.
hotfix/*: Ramas para corregir errores en producción.
release/*: Ramas para preparar una nueva versión de producción.

Haz rebase en lugar de merge cuando sea apropiado:
rebase permite mantener un historial lineal y limpio, evitando los "commits de merge" innecesarios
úsalo solo para commits locales que no se hayan compartido con otros colaboradores.
# Para rebasar tu rama actual en la rama develop
git checkout feature/new-feature
git rebase develop

Evita force push en ramas compartidas:
git push --force puede sobrescribir el trabajo de otros,
causando pérdida de commits.
si es necesario, trata de usar git push --force-with-lease
seguro porque verifica si la rama ha cambiado desde tu último fetch

.gitignore adecuado:
evitar que archivos innecesarios, sensibles o generados
automáticamente sean añadidos al repositorio.
incluye archivos de configuración local, binarios, dependencias, etc.

```
# Python
__pycache__/
*.py[cod]
*.egg-info/
.venv/

# Node.js
node_modules/
npm-debug.log

# Editor/IDE
.vscode/
.idea/

# Logs
*.log
```

Revisa tu código antes de commit:
usando git diff o git status
a verificar que solo estás agregando los cambios correctos.
git status   # Ver el estado de los archivos modificados
git diff     # Ver los cambios detallados en los archivos

Squash commits:
Si tienes muchos commits pequeños y sin importancia 
en una rama de características
puedes squashear (combinar) estos commits
antes de fusionar la rama en main o develop.
mantiene un historial de commits más limpio.
git rebase -i HEAD~n   # 'n' es el número de commits a revisar
Elige squash para combinar los commits y escribir un mensaje de commit coherente.

revisiones de código
Antes de fusionar ramas en main o develop
realiza revisiones de código a través de Pull Requests (PRs
ayudan a identificar errores y aseguran la calidad del código
fomentar el intercambio de conocimientos entre los miembros del equipo

etiquetas (tags) para versiones:
marcar versiones importantes o lanzamientos en producción
git tag -a v1.0.0 -m "Lanzamiento de la versión 1.0.0"
git push origin v1.0.0

Sincroniza tu repositorio frecuentemente:
Antes de comenzar a trabajar en una nueva rama o continuar con tu trabajo
asegúrate de que tienes la última versión del código desde el repositorio remoto:
git fetch origin
git pull origin develop  # O la rama con la que estés trabajando
evitas problemas de integración o conflictos más adelante.

conflictos de forma adecuada:
surgen conflictos al fusionar ramas
asegúrate de revisarlos y resolverlos de manera consciente
No elimines cambios sin revisar ni uses
la opción --ours o --theirs

branches por funcionalidad:
feature/login-page
bugfix/fix-login-issue
hotfix/crash-on-startup

Restaurar versiones anteriores:
revertir un cambio específico o volver a una 
versión anterior del código
git revert o git reset
Revertir: Crea un commit que deshace un cambio
específico sin perder el historial.
git revert <commit_id>
Reset: Reajusta el estado del código a un commit anterior
pérdida potencial de cambios si no se usa correctamente).
git reset --hard <commit_id>

hooks de Git cuando sea necesario:
Git ofrece hooks que permiten automatizar tareas
como la ejecución de pruebas antes de hacer
commit o push, o formatear código automáticamente
hooks útiles:
pre-commit: 
Para validar el código antes de permitir un commit
(por ejemplo, ejecutando linters).
pre-push: Para ejecutar pruebas antes de permitir un push.
configurar los hooks en el directorio .git/hooks/.

Realiza un rebasing interactivo para reescribir el historial:
cuando trabajas en una rama con varios commits que no agregan mucho valor
puedes usar rebase -i (interactivo) para limpiar el historial y fusionar (squash) commits redundantes.



### Git/github flow: Feature Branching

##### Se basa en mantener una rama central (main o master) siempre estable y lista para producción.

1. Clonar y Mantener la Rama Principal

Rama main (o master) es la fuente de la verdad y representa el código de producción.

Clonar el proyecto
git clone url

Asegurar rama principal
git checkout main
Siempre trabaja sobre la versión más reciente.

Actualizar main
git pull origin main
##### Siempre haz un pull antes de crear una rama nueva.


2. Crear y Trabajar en rama Feature

##### Cada nueva tarea, corrección de bug o característica debe tener su propia rama de corta duración.

Crear y cambiar
git checkout -b feature/nombre-de-la-tarea
Usa prefijos (ej. feature/, bugfix/) y nombres descriptivos y concisos.

Hacer cambios
(Modifica archivos, escribe código)
Trabaja de forma aislada.

Hacer commits
git commit -am "feat: mensaje descriptivo conciso"


-a / --all: Esta opción prepara automáticamente todos los archivos modificados y eliminados con seguimiento antes de la confirmación
Combina eficazmente git add -u con git commit. 
Los archivos sin seguimiento no se incluyen

git add -A = git add . + git add -u

git add .
agrega todos los archivos (existentes, modificados y nuevos) al área de almacenamiento temporal
pero no elimina los archivos que se han eliminado del disco.

git add -u
solo agrega los archivos rastreados actualmente (que han sido modificados) al área de preparación
y también verifica si se han eliminado (en caso afirmativo, se eliminan del área de preparación)
Esto significa que no prepara los archivos nuevos.


Enviar cambios
git push origin feature/nombre-de-la-tarea
Haz push con frecuencia como backup y para colaborar.


3. Sincronización y Preparación del Pull Request (PR)

##### Antes de fusionar tus cambios, debes asegurarte de que tu rama está actualizada con main.

Volver al main
git checkout main
Navega a la rama base.

Actualizar main
git pull origin main
Descarga los últimos cambios de otros.

Volver a tu feature
git checkout feature/nombre-de-la-tarea
Regresa a tu rama.


Integrar main
git rebase main
Recomendación: rebase ofrece un historial limpio y lineal.

Alternativamente, usa git merge main si prefieres mantener los commits de fusión.

Forzar push
git push --force-with-lease
Solo si usaste rebase y tu rama ya estaba en el remote
El flag --force-with-lease es más seguro que --force.


4. Revisión, Fusión y Limpieza

##### Una vez que los cambios están listos y revisados, se fusionan y la rama se elimina.

Crear PR
(Usar GitHub/GitLab/Bitbucket UI)
Siempre solicita una revisión de código (Code Review).

Fusionar
(Usar el botón Squash and Merge en la UI)
Recomendación: Squash and Merge comprime todos los commits de tu feature en un solo commit limpio en main.

Eliminar rama local
git branch -d feature/nombre-de-la-tarea
Limpia tu entorno. 
Usa -D si hay commits sin fusionar.

Eliminar rama remota
git push origin --delete feature/nombre-de-la-tarea
Limpia el servidor remoto.



### Prácticas

1. Mensajes de Commit Limpios

Imperativo y Conciso: "Fix: corrige el error de cálculo"

Convencional: Usa prefijos estándar:
feat: Nueva característica.
fix: Corrección de un bug.
docs: Cambios en la documentación.
refactor: Refactorización sin cambio de funcionalidad.
chore: Mantenimiento (ej. actualización de dependencias).


2. .gitignore

##### Excluye siempre: Archivos de build (/dist, /build), carpetas de dependencias (/node_modules), credenciales y configuraciones locales (.env).
Comando: Crea un archivo .gitignore en la raíz del proyecto.


3. rebase vs merge

git rebase (Recomendado):
Mueve tu rama feature encima de main
Crea un historial limpio, lineal y fácil de leer.

##### Nunca hagas `rebase` en ramas compartidas o públicas

git merge (Alternativa):
Fusiona las ramas, manteniendo un commit de fusión y un historial no lineal
##### Es más seguro para ramas compartidas.


4. Limpieza del historial local

git commit --amend
Útil para modificar el último commit
cambiar el mensaje o añadir un archivo olvidado
antes de hacer push.

git reset
Útil para deshacer o mover el HEAD (usar con cuidado).

git reset HEAD~1: Deshace el último commit, manteniendo los cambios en tu área de staging.

git reset --hard commit-hash: Borra permanentemente todos los cambios locales hasta el commit especificado.



## Nomenclatura Brances, Commits

### Branches 

Patrón de prefijos:
permite agrupar las ramas lógicamente y facilita el uso de herramientas de automatización

Formato:
categoría/ticket-id-breve-descripcion

Categorias:

1. feature/: Para el desarrollo de nuevas funcionalidades.
(Ej: feature/login-oauth).

2. bugfix/: Para corregir errores en ramas de desarrollo.
(Ej: bugfix/header-mobile-overlap).

3. hotfix/: Reparaciones críticas urgentes que van directo a producción (main o master).

4. release/: Preparación de una nueva versión oficial.
(Ej: release/v1.2.0).

5. docs/: Cambios exclusivamente en la documentación.

6. refactor/: Cambios en el código que no añaden funciones ni arreglan bugs
solo mejoran la estructura.

Usa siempre minúsculas y separa las palabras con guiones (-),


### Commits

Conventional Commits:
conjunto de reglas para crear un historial de commits explícito y fácil de leer

Estructura:
<tipo>(alcance opcional): <descripción>

Tipo | Caso de uso

1. feat:
Una nueva característica para el usuario.

2. fix:
Solución a un error.

3. docs:
Cambios en la documentación.

4. style:
Cambios de formato (espacios, comas) que no afectan el código.

5. refactor:
Cambio de código que no corrige un error ni añade una función.

6. perf:
Mejora de rendimiento.

7. test:
Añadir o corregir pruebas existentes.

8. chore:
Tareas rutinarias (actualizar dependencias, configurar builds).

Ej:

feat(auth): add google login integration

fix(api): resolve null pointer exception on user profile

docs: update readme with installation steps


### Historial Limpio

1. Imperativo
commit como si estuvieras dando una orden

Mal: "I added the search bar" o "Adding search bar".
Bien: "add search bar".

2. Sin punto final
La primera línea es un título, no llevan punto.

3. Límite de 50 caracteres
mensaje principal breve
Si necesitas explicar más, deja una línea en blanco y escribe un párrafo detallado abajo.

4. Commits atómicos
Un commit debe hacer una sola cosa
Si arreglaste un bug y además cambiaste el color de un botón
haz dos commits



## Git Rebase flow

Evitar los "merge commits":
mensajes automáticos de "Merge branch 'main' into feature/...")
ensucian el historial

Rebase mantiene una línea de tiempo lineal y limpia.


Ej: Sacar una rama feature desde main
Mientras otros suben cambios a main

En lugar de hacer un merge (que crea un "nudo" en el historial)
el rebase toma tus commits, los levanta un momento
pone los nuevos cambios de main debajo
y vuelve a soltar tus commits encima


1. Actualiza base local
Rama principal esté al día.

```
git checkout main
git pull origin main
```

2. Iniciar el Rebase en tu rama
En la rama de trabajo
"rebasar" tus cambios sobre el nuevo main.

```
git checkout feature/mi-tarea
git rebase main
```

3. Resolución de conflictos (Si los hay)
Si hay conflictos, Git se detendrá

Identifica y arregla los archivos marcados
Añade los cambios: `git add .`
Continúa el proceso: `git rebase --continue` (Nunca hagas commit aquí).```

4. Sube los cambios (El "Force Push")

```
git push origin feature/mi-tarea --force-with-lease
```

`--force-with-lease`:
versión "educada" de force push
no sobreescribirá el trabajo de otros si alguien más subió algo a esa rama remota por accidente

##### Regla para Rebase: Nunca hagas rebase en ramas públicas o compartidas
Si estás trabajando en una rama donde hay más personas colaborando
el rebase les romperá el historial a todos
Úsalo solo en tus ramas de funciones personales antes de integrarlas al proyecto principal.

Merge:
Historial: Preserva la historia real y cronológica
Trazabilidad: Fácil ver cuándo se integró una rama
Conflictos: Se resuelven todos de una vez en un commit
Riesgo: Muy bajo.

Rebase:
Crea un historial lineal y estético
Difícil ver cuándo ocurrió la integración.
Se resuelven paso a paso (commit por commit).
Medio (si se usa en ramas compartidas).


#### Rebase Interactivo (-i)

Si tienes 10 commits de "fix", "typo", "fix again
puedes usar git rebase -i HEAD~10 para hacer squash (combinarlos)
en un solo commit limpio antes de enviarlo a revisión


## Proyecto

1. Git Init
preparar el terreno localmente antes de subirlo a la nube
(GitHub, GitLab, Bitbucket).

```
git init
```

2. Crear archivo .gitignore:
No querrás subir carpetas pesadas como node_modules
archivos de configuración personal o ejecutables

Puedes usar `gitignore.io` para generar uno según tu lenguaje o framework

3. Initial Commit

```
git add .
git commit -m "chore: initial commit with readme and gitignore"
```


### Remote

Conexión al mundo:
Una vez tienes tu historial local, necesitas un lugar donde respaldarlo

1. Crear repo remoto

2. Vincula repo local con el remoto

```
git remote add origin https://github.com/usuario/tu-proyecto.git
```

3. Subir rama principal

```
git branch -M main  # Asegura que la rama se llame 'main'
git push -u origin main
```


### Feature Branch Workflow

Nunca se trabaja directamente sobre main

1. Sincronización
Antes de empezar algo nuevo
asegúrate de tener lo último de tus compañeros

```
git checkout main
git pull origin main
```

2. Creación de rama
Rama descriptiva para tu tarea

```
git checkout -b feature/login-integration
```

3. Trabajo y Commits
Hacer cambios pequeños y frecuentes siguiendo la nomenclatura
feat:, fix:, etc

```
git add .
git commit -m "feat: add login service with jwt"
```

4. Rebase y Limpieza
haz un rebase con main antes de enviar tu trabajo

```
git fetch origin
git rebase origin/main
```

5. Publicación y Pull Request (PR)
Sube tu rama y abre una solicitud de cambios en una plataforma
para que alguien revise tu código

```
git push origin feature/login-integration
```

#### Comandos esenciales

`git status` Ver qué archivos has modificado y qué está listo para commit.
`git log --oneline` Ver un resumen rápido y bonito de la historia.
`git diff` Ver exactamente qué líneas de código cambiaste.
`git remote -v` Verificar a qué repositorio remoto estás conectado.


#### README
Un proyecto debe tener un README.md
No solo para que otros lo lean, sino para que sepas cómo instalarlo

Qué hace el proyecto?
¿Cómo se instala? (npm install, pip install -r requirements.txt, etc.)
¿Cómo se ejecuta?


# Versiones

Semantic Versioning (SemVer) como estándar
Le dice a otros desarrolladores exactamente qué esperar de una actualización antes de que instalen nada

## 1. MAJOR.MINOR.PATCH

Ej: 2.4.1. Cada número tiene un significado

Incremento e Impacto

MAJOR (X.0.0):
Cuando haces cambios incompatibles
(Breaking Changes)
Requiere que los usuarios cambien su código

MINOR (0.X.0):
Cuando añades funcionalidad nueva que no rompe nada previo
Nuevas funciones, pero todo sigue funcionando

PATCH (0.0.X):
Cuando corriges errores o haces ajustes internos (Bugs).
Seguro de actualizar sin pensarlo.


### Casos especiales (Pre-releases):

Lanzar versiones de prueba
Se añade un guion después del parche

1.0.0-alpha.1: Para pruebas internas iniciales.

1.0.0-beta.2: Para pruebas externas con usuarios seleccionados.

1.0.0-rc.1: (Release Candidate) Todo parece listo para lanzarse.


## 2. Calendar Versioning (CalVer)

Algunos proyectos prefieren basarse en el tiempo en lugar de en la compatibilidad del código
común en sistemas operativos o apps como Ubuntu o JetBrains

Formatos comunes:
YYYY.MM.Micro (Ej: 2024.03.1)
YY.MM (Ej: 24.04 - como Ubuntu)

##### Si estás creando una librería o API, usa SemVer
##### Si es un producto final o software de usuario, CalVer puede ser más intuitivo



## 3. Git Tags

Crear una versión:

1. Estar en main:

```
git checkout main
```

2. Crear tag anotado:
 -a permite poner un mensaje descriptivo

 ```
git tag -a v1.2.0 -m "Release v1.2.0: add dark mode and fix login bug"
 ```

3. subir tag al servidor
Git no sube los tags automáticamente con push

```
git push origin v1.2.0
```


## 4. Archivo CHANGELOG.md

Versión profesional con un historial de cambios
Estándar `Keep a Changelog`


### Categorías de cambios

En cada version

`Added`: Nuevas funcionalidades
`Changed`: Cambios en funciones existentes.
`Deprecated`: Funciones que se eliminarán pronto.
`Removed`: Funciones eliminadas.
`Fixed`: Corrección de errores.
`Security`: En caso de vulnerabilidades.


# Desarrollo

1. Desarrollas en ramas feature/.
2. Haces merge a main.
3. Cuando tienes suficientes cambios, actualizas el número de versión en el código (ej: package.json).
4. Creas el git tag.
5. Documentas en el CHANGELOG.md.


# CHANGELOG.md 

Diario de vida del proyecto, escrito para que otros humanos lo entiendan

Mientras que el historial de Git es un registro técnico de cada paso
El Changelog es un resumen curado de los hitos importantes


## 4 Mandamientos

1. Hecho para humanos: No es un volcado de git log
Evita mensajes como "fix typo" o "update index.js".

2. Agrupado por categorías: Los cambios deben estar clasificados para que el usuario encuentre rápido lo que busca

3. Orden cronológico inverso: versión más reciente siempre va arriba del todo.

4. Enlaces a versiones: Es ideal poner enlaces que comparen la versión actual con la anterior
(usando las URLs de comparación de GitHub/GitLab).


## Estructura Estándar

Cada versión debe dividirse en categorías específicas para que sea escaneable:

Added: Para nuevas funcionalidades.
Changed: Para cambios en funcionalidades existentes.
Deprecated: Para funciones que pronto serán eliminadas.
Removed: Para funciones eliminadas en esta versión.
Fixed: Para cualquier corrección de errores.
Security: En caso de vulnerabilidades de seguridad


## Ejemplo

archivo en la raíz de tu proyecto

```
# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
y este proyecto se adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-02-22

### Added
- Nuevo sistema de autenticación biométrica para la app móvil.
- Soporte para exportación de reportes en formato Excel.

### Fixed
- Error de desbordamiento en el dashboard al usar pantallas de 13 pulgadas.
- El botón de "Cerrar sesión" no funcionaba en Safari.

### Changed
- El proceso de registro ahora requiere validación de email obligatoria.

---

## [1.0.1] - 2026-01-15

### Fixed
- Error de conexión con la base de datos en entornos de staging.

## [1.0.0] - 2026-01-01

### Added
- Lanzamiento inicial del proyecto con módulos de Usuario, Ventas y Reportes.
```

##### El Changelog dice qué valor aporta ese cambio o qué impacto tiene en el usuario
Un commit dice qué cambió técnicamente
git log está lleno de "oops", "forgot a semicolon" o "fix test".
A tu usuario final eso no le aporta nada


### Automatización

Si usas Conventional Commits, existen herramientas que pueden generar el borrador

Standard Version: Genera el tag, sube la versión en el package.json y actualiza el CHANGELOG.md automáticamente
Release It!: Una herramienta muy potente para manejar todo el flujo de lanzamiento.


##### No esperes a acumular 20 versiones para empezar el Changelog
Es mucho más fácil escribir 3 líneas justo después de hacer el merge a main
que intentar recordar qué hiciste hace 6 meses.



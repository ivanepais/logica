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



## SemVer

Contrato social entre el desarrollador y el usuario
(o entre el autor de una librería y el programador que la consume).

##### Su objetivo es comunicar la naturaleza del cambio sin necesidad de leer el código.

Formato estricto:
MAJOR.MINOR.PATCH

1. Los Tres Pilares (X.Y.Z)

MAJOR (X.0.0) - Cambios Rompibles
Se incrementa cuando realizas cambios en la API que no son compatibles con versiones anteriores

Si un usuario actualiza, su código probablemente dejará de funcionar y tendrá que hacer ajustes.
Ej: Cambiar el nombre de una función pública, eliminar un parámetro obligatorio o reestructurar la respuesta de una API

Regla: Regla: Al subir el MAJOR, el MINOR y el PATCH vuelven a 0.


MINOR (0.Y.0) - Nuevas Funcionalidades
Se incrementa cuando añades funcionalidad de manera retrocompatible.

Añadiste algo nuevo, pero todo lo que ya existía sigue funcionando exactamente igual.
Es seguro actualizar
Añadir un nuevo método a una clase, agregar un parámetro opcional o soportar un nuevo formato de archivo.

Regla: Al subir el MINOR, el PATCH vuelve a 0.


PATCH (0.0.Z) - Correcciones (Bugs)
Se incrementa para correcciones de errores que son retrocompatibles.

No hay funciones nuevas ni cambios en la interfaz. Solo arreglaste algo que estaba roto internamente.
Resolver un fallo de seguridad, corregir un error de cálculo o mejorar el rendimiento interno.


2. "Limbo" de la Versión 0 (0.y.z)
Trata de forma especial el inicio de un proyecto:

Fase de desarrollo inicial:
Todo lo que empiece por 0.y.z se considera inestable.

Cualquier cambio es posible:
En esta fase, incluso un cambio en el PATCH podría romper la compatibilidad

Hito 1.0.0: Hacer el lanzamiento de la versión 1.0.0 es la señal oficial de que tu API es estable
y que empezarás a respetar las reglas de SemVer estrictamente.


3. Pre-releases y Metadatos
A veces necesitas lanzar versiones que no son finales
El estándar permite añadir sufijos después del PATCH:

Pre-releases: Se añaden con un guion
Ayudan a ordenar la prioridad (alfabéticamente).

1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-beta < 1.0.0-rc < 1.0.0.

Build Metadata: Se añade con un signo de suma (+).
No afecta la prioridad de la versión, es solo informativa
(como la fecha de compilación o el hash del commit).

1.0.0+20260225.


4. Rangos de Versiones (Caret y Tilde)
Si usas herramientas como npm o yarn, habrás visto símbolos antes de los números en el package.json
Esto define qué tan "atrevido" quieres ser al actualizar:

^1.2.3
Caret
(Circonflejo)

Actualiza MINOR y PATCH.
(Permite de 1.2.3 hasta <2.0.0).
Es el estándar por defecto.


~1.2.3
Tilde
Actualiza solo el PATCH.
(Permite de 1.2.3 hasta <1.3.0)
Más conservador


1.2.3
Exacta
No permite ninguna actualización
Máxima seguridad, mínima flexibilidad


5. Reglas

1. Una vez lanzada una versión, no se modifica:
Si cometiste un error, lanzas una nueva versión (PATCH).
Nunca sobrescribas el código de una versión ya publicada.

2. No seas tímido con el MAJOR:
Si rompes algo, asúmelo y sube el MAJOR.
Es mejor una versión 5.0.0 honesta que una 1.8.4 que rompe el proyecto del usuario

3. Los mensajes de commit ayudan
Si usas Conventional Commits, herramientas como semantic-release
pueden leer tus mensajes y decidir por ti si la siguiente versión debe ser MAJOR, MINOR o PATCH de forma automática



## CalVer

SemVer se preocupa por cómo cambia el código internamente

CalVer (Calendar Versioning) se enfoca en cuándo se libera el software
estándar preferido para proyectos que están en constante evolución
o donde la fecha de lanzamiento es más relevante para el usuario que la compatibilidad técnica de las APIs.

En CalVer, el tiempo es la versión.

1. Anatomía
A diferencia de SemVer, CalVer no tiene un único formato estricto

se construye usando "tokens" (piezas) de tiempo
Los esquemas más comunes suelen combinar el año, el mes y un número correlativo (Micro).

`YYYY`: Año completo (4 dígitos) 2026
`YY`: Año corto (2 dígitos) 26
`MM`: Mes (1 o 2 dígitos) "2, 11"
`0M`: Mes con cero inicial "02, 11"
`Micro`: Parche o revisión (correlativo) "0, 1, 5"


2. Esquemas
Dependiendo del ritmo de actualización del proyecto
se eligen diferentes combinaciones

1. YY.MM (El estilo Ubuntu):
Muy popular para lanzamientos fijos.
`Ubuntu 24.04` (Lanzado en abril de 2024).
Es extremadamente intuitivo
si estás en 2026 y ves la versión 24.04, sabes de inmediato que tu software tiene dos años de antigüedad.

2. YYYY.Micro (El estilo JetBrains/PyPy):
Ideal para software que se actualiza varias veces al año pero no en fechas fijas.
`PyPy 2023.1`, luego `2023.2`.

3. YYYY.MM.DD
Usado en proyectos de despliegue continuo (SaaS)
donde cada día puede haber una versión nueva


3. CalVer sobre SemVer

1. Software como producto final
A un usuario de Microsoft Office o Ubuntu no le importa si hubo un breaking change interno
le importa saber si tiene la versión de "este año".

2. Proyecto grande
En ecosistemas enormes (como sistemas operativos)
Los cambios "rompibles" ocurren todo el tiempo.
SemVer obligaría a subir el MAJOR cada semana
haciendo que el número de versión pierda sentido (ej. versión 458.0.2).

3. Ciclo de vida basado en el tiempo
Si prometes una actualización cada 6 meses
CalVer comunica mejor ese compromiso

#### Híbrido
Teradata usa YY.MM.MAJOR.MINOR.
Así combinan la fecha con la información de compatibilidad


4. Problema de CalVer: La Compatibilidad

El gran "punto débil", no te dice si la actualización va a romper tu código.

En SemVer, sabes que pasar de la 2.1 a la 3.0 requiere cuidado
En CalVer, pasar de la 26.1 a la 26.2 podría ser un simple arreglo de un typo o una reescritura total del motor del software
No hay forma de saberlo solo mirando el número.


5. Prácticas

1. Usa siempre 4 dígitos para el año (YYYY):
Evita el "efecto 2000".
Usar 26 puede confundirse con otros números de versión
mientras que 2026 es inequívocamente una fecha.

2. No olvides el "Micro":
Siempre añade un número al final
ej. `2026.02.**1**`
Si necesitas lanzar una corrección de emergencia el mismo día o mes, lo necesitarás

3. Changelog impecable:
Como el número de versión no indica si hay cambios disruptivos
CHANGELOG.md se vuelve la única fuente de verdad para los desarrolladores.



## Sequential Versioning

Método más sencillo: empiezas en 1 y vas subiendo (1, 2, 3, 4...).
No hay puntos, ni parches, ni lógica de compatibilidad

Navegadores como Google Chrome o Firefox (aunque internamente tienen números largos, para el público son "Chrome 122").


## ZeroVer (0ver)

una "crítica" o tendencia en el mundo del código abierto
Al no llegar nunca a la versión 1.0.0, el autor comunica implícitamente que el software es "inestable" o que puede cambiar en cualquier momento
quitándose la presión de mantener la compatibilidad hacia atrás

Muchos paquetes de Node.js o librerías de Python pasan años en 0.x.


## Git Hash / SHA Versioning

La versión es simplemente el identificador único (hash) del commit de Git
En despliegues continuos (CI/CD) y microservicios

Es imposible confundir una versión con otra.
Es la trazabilidad máxima.

Ilegible para un humano.
No sabes si el hash a1b2c3d es más nuevo o más viejo que e5f6g7h sin mirar el log


## Named Versioning (Codenames)

En lugar de números, se usan nombres
A veces siguen un orden alfabético para dar una sensación de progresión.

Android: Cupcake, Donut, Eclair... (seguían el alfabeto con dulces).
macOS: Lion, Maverick, Big Sur, Sonoma (felinos y luego lugares de California).
Ubuntu: Adjetivo + Animal (Jammy Jellyfish, Noble Numbat).

Mucho más fácil de recordar y con mayor carga de marketing.


## Spring / Maven Style

Es una variante de SemVer que añade un calificador al final para indicar el estado de madurez.

Formato: MAJOR.MINOR.PATCH.QUALIFIER

1.2.0.RELEASE (Versión estable)
1.2.0.SNAPSHOT (Versión en desarrollo constante)
1.2.0.M1 (Milestone 1)


SemVer
2.4.1
Librerías, APIs, herramientas de desarrollo."

CalVer
2024.02
Software que caduca o necesita actualización anual.

Secuencial
122
Aplicaciones de usuario final (browsers).

Hash/SHA
7d2f9a1
Microservicios e infraestructura automatizada.

Named
Sonoma
Sistemas operativos y marcas comerciales.




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


# Gitignore

Es el filtro del repo para que algunos archivos y carpetas no tengan seguimiento y nunca se suban al servidor
Sin un .gitignore, terminarías subiendo basura o información peligrosa al historial

1. Dependencias pesadas: Como node_modules/ (Node.js) o venv/ (Python).
No se suben porque se pueden reinstalar con un comando y pesan cientos de MB

2. Archivos de configuración local: Archivos que solo funcionan en tu máquina
(ej. rutas de carpetas locales).

3. Secretos y Credenciales:  Archivos .env que contienen contraseñas de bases de datos o llaves de API
Subir esto es un riesgo de seguridad grave.

4. Archivos temporales del Sistema Operativo:Los famosos .DS_Store en Mac o Thumbs.db en Windows


## Conceptos

### Sistema de patrones globbing

Las reglas más usadas:

`archivo.txt` Ignora cualquier archivo llamado exactamente así.

`*.log` El asterisco es un comodín.
Ignora todos los archivos que terminen en .log.

`temp/` Ignora toda la carpeta temp y todo su contenido.

`**/config.json` Ignora config.json
sin importar en qué carpeta esté (el ** busca en profundidad).

`!importante.log` El signo ! es una excepción.
Ignora todos los .log excepto este.

`# Comentario` "Las líneas que empiezan con # son ignoradas por Git
sirven para organizarte."


## Catch: Solo ignora archivos NO rastreados

##### .gitignore solo funciona con archivos que aún no han sido añadidos al índice de Git

Ej: Si ya hiciste git add y git commit de un archivo llamado config.json
y luego lo añades al .gitignore, Git lo seguirá rastreando

Para que Git lo "suelte", debes borrarlo del índice manualmente (sin borrar el archivo físico):

```
git rm --cached config.json
```

## Global vs Local

Local: Recomendado
Es el archivo .gitignore que vive en la raíz de tu proyecto
Se sube al repositorio y afecta a todo el equipo

Global: Archivo que ignora en todos los proyectos
útil para cosas del editor como vscode/ o archivos de sistema

```
git config --global core.excludesfile ~/.gitignore_global
```

Crear el gitignore antes del primer comit o add
Ahorrará la limpieza después


## React

fundamental para no subir gigas de dependencias
o exponer tus llaves de API

Ej: .gitignore

```
# Dependencias (Nunca se suben, se reinstalan con npm/yarn install)
node_modules/
/jspm_packages/

# Carpeta de Producción (Se genera al hacer 'build')
dist/
build/
out/

# Archivos de Registro (Logs)
npm-debug.log*
yarn-debug.log*
yarn-error.log*
logs/
*.log

# Variables de Entorno (¡SEGURIDAD CRÍTICA!)
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
*.env.local

# Archivos del Editor / IDE
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Archivos del Sistema Operativo
.DS_Store
Thumbs.db

# Testing
/coverage
```

Ej: gitignore.io

```

### react ###
.DS_*
*.log
logs
**/*.backup.*
**/*.back.*

node_modules
bower_components

*.sublime*

psd
thumb
sketch
```


### node_modules/

Carpeta más pesada
No se sube porque cualquier persona puede recuperarla
ejecutando npm install
contiene binarios que pueden variar según el sistema operativo (Windows vs Mac)

### archivos .env

Ej llaves de firebase, contraseñas de bases de datos o tokens de servicios
contraseñas de bases de datos o tokens de servicios

Crea siempre un archivo llamado .env.example
con las mismas variables pero sin los valores reales
para que tus compañeros sepan qué necesitan configurar.

### dist/ o build/

Al correr npm run build, React compila todo tu código en unos pocos archivos optimizados
No tiene sentido versionar esto porque cambia cada vez que modificas una línea de código
lo que nos importa es el código fuente (src/), no el resultado final


## Revertir commit inseguro

Ej commit de la carpeta node_modules o un archivo .env
ponerlo en el .gitignore ahora no lo borrará del historial

Ejecutar:

```
# Borra el rastro del archivo en Git sin borrar el archivo de tu PC
git rm -r --cached node_modules/
git commit -m "chore: stop tracking node_modules"
```

En vite el gitignore por defecto es suficiente 
pero siempre es bueno añadir la sección de IDE (.vscode) para que tus preferencias personales del editor no molesten a los demás



# Archivo .env.example

Esencialmente, el manual de instrucciones para los secretos de tu aplicación.
Vimos que el archivo .env real nunca debe subirse a Git (por seguridad)

##### cuando un compañero clona tu proyecto, no tiene ni idea de qué variables necesita configurar
Ahí es donde entra .env.example

Su objetivo es servir como plantilla pública
En él defines todas las claves (nombres de las variables)
que tu código espera encontrar
pero dejas los valores vacíos o con datos de ejemplo genéricos.

Ventajas: 

Documentación viva: Indica qué servicios externos usa la app (Firebase, Stripe, AWS, etc.).
Facilita el Onboarding: Un nuevo desarrollador solo tiene que copiarlo, renombrarlo y rellenarlo.
Evita errores en producción: Si falta una variable en el ejemplo, es probable que alguien olvide configurarla en el servidor real.

Ej: app que usa API de clima y db

1. archivo .env privado (ignorado por git)

```
PORT=3000
DB_PASSWORD=mi-password-super-secreto-123
WEATHER_API_KEY=asdf897asdf987asdf897
DATABASE_URL=mongodb+srv://admin:pass@cluster0.mongodb.net/prod
```

2. .env.example publico (subido a git)

```
# Configuración del servidor
PORT=3000

# Base de Datos (Usa tu propia instancia local o de Atlas)
DB_PASSWORD=
DATABASE_URL=mongodb://localhost:27017/mi_db

# Clave de OpenWeather API (Consíguela en https://openweathermap.org/api)
WEATHER_API_KEY=tu_api_key_aqui
```

### Uso de .env y .env.example

1. Clonar el repositorio.

2. Ejecutar en la terminal:

```
cp .env.example .env
```

3. Abrir el nuevo .env y poner sus propias credenciales de desarrollo.


## Reglas para .env.example

No pongas secretos reales: Nunca
bajo ninguna circunstancia, pongas una contraseña real ahí "por mientras
Git tiene memoria eterna.

Añade comentarios: 
Explica brevemente de dónde se saca cada valor o para qué sirve
Ayuda mucho a quien no conoce el proyecto

Mantenlo actualizado: 
Si añades una nueva funcionalidad que requiere una API_KEY
agrégala inmediatamente al .env.example.

Valores por defecto seguros:
Puedes poner valores que funcionen en un entorno local estándar
como localhost o puertos comunes


En algunos frameworks (como Next.js), puedes incluso tener un .env.development
para valores que son iguales para todos los desarrolladores
dejando el .env.local solo para lo estrictamente privado.


# Archivo .env real

El punto más crítico de la seguridad en el desarrollo
Un solo descuido (un "push" accidental) puede comprometer las finanzas de una empresa
o los datos de miles de usuarios

1. archivo .env NO existe para Git
Bajo ninguna circunstancia, el archivo .env debe ser rastreado

Doble verificación:
Asegúrate de que .env esté en tu .gitignore antes del primer commit.

Si ya lo subiste:
No basta con borrarlo y hacer otro commit
El secreto sigue en el historial de Git
##### Debes rotar las llaves inmediatamente (cambiar las contraseñas)
usar herramientas como bfg-repo-cleaner para purgar el historial.

2. Almacenamiento y Compartición Segura
##### Pasarlo a un compañero y resplado

NUNCA: Lo envíes por Slack, WhatsApp, Email o Notion
Estos canales no están cifrados para este propósito
dejan copias en servidores externos.

##### RECOMENDADO: gestores de secretos compartidos

1Password / Bitwarden: Tienen funciones para compartir "Secure Notes" o campos de login con el equipo

Infisical: Una herramienta diseñada específicamente para gestionar y sincronizar archivos .env
entre equipos de desarrollo de forma cifrada.

Dotenv Vault: Permite cifrar el archivo .env
compartir solo una llave de desbloqueo.

3. Manejo por Entornos

##### No mezcles las llaves de desarrollo con las de producción
El estándar es separar los archivos:

.env.development:
Credenciales de bases de datos locales o de prueba

.env.staging:
Entorno de pre-producción (espejo de la realidad).

.env.production: 
##### Solo unas pocas personas (o el sistema de CI/CD) deberían tener acceso a estos valores


4. Gestión en la Nube y CI/CD
En servidores profesionales (Vercel, AWS, Heroku, Azure), no se suben archivos .env

Los valores se cargan directamente en el panel de configuración del servidor
o como "Secrets" en el repositorio (GitHub Secrets).

##### El servidor inyecta estas variables directamente en el proceso de ejecución (proceso env del sistema operativo)
lo cual es mucho más seguro que tener un archivo de texto plano en el disco duro del servidor


5. Validación en Código (Fail Fast)

##### Validar que las variables existan antes de que la app arranque
Nada peor que un error críptico a mitad de ejecución porque faltaba una API Key.

Ej: Node.js (librería como zod o un simple check)

```
const requiredEnv = ['DATABASE_URL', 'API_KEY', 'PORT'];

requiredEnv.forEach((name) => {
  if (!process.env[name]) {
    throw new Error(`❌ Error: La variable de entorno ${name} no está definida.`);
  }
});
```


6. Rotación de Secretos

##### Como estándar de mantenimiento, las llaves de API y contraseñas deben cambiarse periódicamente
(cada 3, 6 o 12 meses)
Esto limita el daño en caso de que una llave haya sido filtrada sin que te dieras cuenta




# Secretos y credenciales

## 1. Conceptos

##### Las credenciales dicen quién eres
Datos que verifican la identidad de un usuario o servicio
Ej: Usuario + Contraseña, Certificados Digitales, Llaves SSH.


##### los secretos son las llaves que te permiten entrar o realizar acciones
Información sensible que da acceso a recursos o funcionalidades
Es el "qué puedes hacer".
API Keys, Tokens (JWT), Llaves de Cifrado, Connection Strings. 


### Secretos más comunes en Desarrollo: día a día

1. API Keys (Llaves de API):
##### códigos únicos que identifican a tu aplicación cuando llama a otro servicio (como Google Maps o Stripe).
Sirven para que el proveedor sepa quién gasta el dinero y qué permisos tiene

2. Tokens de Acceso (OAuth/JWT):
##### Son temporales y suelen generarse después de que te autenticas

3. Connection Strings:
##### Direcciones completas para entrar a una base de datos
Suelen incluir el servidor, el puerto, el usuario y la contraseña en una sola línea


### Gestion 

No basta con no subirlos a GitHub
hay todo un ciclo de vida para manejarlos de forma segura

1. Generación: Deben ser aleatorios y complejos (nada de 123456).
2. Almacenamiento: Nunca en código plano Se usan Vaults (Bóvedas) como HashiCorp Vault, AWS Secrets Manager o Azure Key Vault.
3. Inyección: El secreto se pasa a la aplicación en tiempo de ejecución (memoria), no se escribe en el disco duro. 
4. Rotación: Cambiar los secretos cada cierto tiempo de forma automática para que, si alguien robó una llave hace meses, ya no le sirva
5. Auditoría: Saber quién usó qué secreto y cuándo.


### Secretos en Embebidos: peligro (hardcoding)

Escribir el secreto directamente en el código fuente.

Riesgo: Una vez que haces git commit, ese secreto vive para siempre en el historial del repositorio
incluso si luego borras la línea

Detección: Hoy en día, hay bots escaneando GitHub 24/7
buscando patrones de llaves de AWS o Stripe para robar dinero en segundos.

Dato: Si subes una llave de AWS válida a un repo público
Amazon suele detectarlo en menos de un minuto y te envía un mail de alerta (o bloquea la llave por ti).


### Prácticas

1. Principio de Menor Privilegio:
Si tu app solo necesita leer de la base de datos
no le des una llave con permisos para borrar tablas

2. Enmascaramiento de Logs:
Configura tu sistema para que, si ocurre un error
no imprima el contenido de las variables de entorno en la consola.

3. Escaneo de Secretos:
herramientas como trufflehog o git-secrets que analizan tu código
antes de que hagas un push para avisarte si se te escapó algo sensible.


## 2. Estandares

En las empresas de tecnología, esto se rige por estándares de DevSecOps.

1. Menor Privilegio
Estándar básico de seguridad: Un secreto solo debe dar acceso a lo estrictamente necesario.

Mal: Usar la cuenta "Root" o "Admin" de AWS para que una app suba fotos a un bucket
Bien: Crear un usuario (IAM Role) que solo tenga permiso de escritura en ese bucket específico y nada más.

2. Niveles de Almacenamiento
No todos los secretos tienen el mismo nivel de criticidad

Se deben tratar según el entorno:

Bajo (Local):
Método: Archivo .env (ignorado por Git)
Desarrollo personal en tu propia máquina.

Medio (CI/CD):
Método: GitHub Secrets / GitLab CI Variables
Despliegue automático y testing.

Alto (Producción):
Método: Secrets Manager (AWS, Azure, HashiCorp Vault)
Aplicaciones en vivo y acceso dinámico.

3. Secret Scanning: Escaneo Preventivo

##### Asumir que alguien cometerá un error
##### Se implementan filtros automáticos

Pre-commit hooks
Scripts locales (como leaktk o git-secrets)
analizan tu código antes de que el commit se cree
Si detectan algo que parece una API Key, bloquean el commit.

SaaS Scanning:
GitHub y GitLab tienen escaneo nativo
Si subes una llave de AWS, GitHub la detecta y avisa al proveedor (Amazon)
) para que la revoque automáticamente en segundos.

4. Inyección en Tiempo de Ejecución (Runtime)

Nunca escribas secretos en archivos de configuración que se compilen
(como un config.json dentro de tu /src).

Estándar:
El software debe "pedir" las llaves al sistema operativo cuando arranca.
En contenedores (Docker/Kubernetes), esto se hace inyectando las variables de entorno directamente en el proceso

5. Rotación Automática
Las contraseñas de bases de datos deben cambiar cada X días automáticamente.

Herramientas como HashiCorp Vault pueden generar "Secretos Dinámicos"
llaves que se crean cuando la app las pide
y se destruyen automáticamente 1 hora después.

6. Secreto se filtra: Protocolo de Incidencias
Si descubres que una credencial llegó a un repositorio público, el estándar de respuesta es el siguiente:

Revocar: Invalidar la llave inmediatamente en el proveedor (Stripe, AWS, etc.).
Rotar: Generar una nueva llave.
Investigar: Revisar los logs de acceso de esa llave para ver si alguien la usó mientras estuvo expuesta.
Limpiar: Usar herramientas como BFG Repo-Cleaner o git filter-repo
para eliminar el rastro del historial de Git (aunque la llave ya no sirva, por higiene).



## React y Vite

En frontend, NADA es secreto

1. El Frontend es Público
Incluso si usas archivos .env y no los subes a GitHub, una vez que haces el build de tu aplicación y la despliegas
cualquier persona puede ver tus llaves abriendo la consola del navegador (Network tab)
o inspeccionando el código fuente.

Si una API Key tiene poder para borrar bases de datos
cobrar dinero o acceder a datos privados de otros usuarios
NUNCA debe estar en tu código de React
Esas llaves deben vivir en un servidor (Backend).

2. Variables en Vite
Utiliza un sistema de archivos .env muy específico para evitar que expongas variables por accidente.

Prefijo VITE_
Solo cargará las variables que empiecen con el prefijo VITE_
Cualquier otra variable en tu archivo .env será ignorada para proteger tu privacidad.

Mal: SECRET_KEY=12345 (No será accesible en React).
Bien: VITE_API_URL=https://api.miweb.com (Vite la expondrá).

Acceso:
En lugar del tradicional process.env de Node
Vite utiliza un objeto especial llamado import.meta.env.

```
// src/services/api.js
const api_url = import.meta.env.VITE_API_URL;

export const fetchData = async () => {
  const response = await fetch(`${api_url}/data`);
  return response.json();
};
```

3. Archivos .env en Vite
Vite permite una granularidad muy útil para diferentes situaciones:

`.env`: Común para todos los entornos.
`.env.local`: Local y personal (ignorada por Git). Ideal para tus llaves de prueba.
`.env.development`: Específica cuando corres npm run dev.
`.env.production`: Específica para cuando ejecutas npm run build.

Prioridad: Si una variable está en .env.production y en .env
Vite elegirá la de producción al compilar.

4. Flujo de Trabajo en prod/deploy
En plataformas como Vercel, Netlify o AWS

PC: Usas .env.local (que no subes a Git).

Servidor de Despliegue: Entras al panel de configuración (Environment Variables) y pegas las llaves manualmente

Durante el Build: Cuando el servidor ejecuta npm run build
Vite "inyecta" esos valores directamente en el código JavaScript compilado.

5. Estrategias de Seguridad (BFF): Backend For Frontend
Si necesitas usar una API que no es segura para el frontend
como la de OpenAI o Stripe Secret Key
usar el patrón BFF

Creas una pequeña función en el servidor (una Serverless Function en Vercel, por ejemplo).

Tu app de React llama a tu propia función.

Tu función (en el servidor) llama a la API secreta usando la llave que está segura en el servidor.

Tu función le devuelve el resultado a React.


Estándares para React + Vite

Nomenclatura: Usa siempre el prefijo `VITE_`.
Acceso:	Usa `import.meta.env.VITE_NOMBRE`.
Git: `.env*` siempre debe estar en el .gitignore.
Documentación:  Crea un `.env.example` con los nombres de las llaves vacías.
Seguridad: Nunca pongas llaves maestras; solo llaves públicas o de lectura.



## Backend

Debemos manejar secretos reales de forma privada

A diferencia del frontend, donde las llaves se "inyectan" en el código que el usuario descarga
En el backend los secretos viven en la memoria del proceso
o se consultan en tiempo real a una bóveda cifrada.

1. Estándar de Almacenamiento

##### Separar el secreto del entorno de ejecución.

### Environment Variables:
Método estándar para aplicaciones modernas (Twelve-Factor App).
El sistema operativo le pasa las llaves al proceso de tu servidor
(Node, Python, Go, etc.).

Local: Archivo .env (siempre ignorado por Git).

Producción: Configurado directamente en el panel del servidor
(AWS, Heroku, Docker Swarm, Kubernetes Secrets).

### Secret Management Services (Vaults)
Para proyectos de escala empresarial
las variables de entorno se quedan cortas
Se usan "Bóvedas de Secretos":

AWS Secrets Manager / Azure Key Vault
El servidor pide la llave mediante una API justo cuando la necesita.

HashiCorp Vault: El estándar de la industria para gestionar secretos dinámicos.


2. Inyección de Secretos en Producción
##### NUNCA debes tener un archivo .env físico en tu servidor de producción

El estándar es la Inyección por Orquestador:

Docker / K8s:
Se definen Secrets que se montan como variables de entorno al levantar el contenedor.

CI/CD (GitHub Actions):
Las llaves están en "Settings > Secrets".
Durante el despliegue, el pipeline las pasa al servidor.

SSH Manual (Malo):
Escribir el .env a mano en el servidor
(Riesgoso y difícil de escalar)


3. Secretos Dinámicos
Estándar avanzado es no usar contraseñas fijas para la base de datos

Tu Backend le pide una credencial a HashiCorp Vault.
Vault crea un usuario temporal en la base de datos que solo dura 1 hora
Vault le entrega esa llave a tu Backend.
Si alguien hackea tu servidor, la llave expirará en minutos.

4. Conexiones a Base de Datos: Connection Strings

##### Secreto más crítico del backend: Connection Strings db
No usar la URL completa con contraseña si es posible

Usa IAM Roles (en AWS/Google Cloud):
El servidor tiene "permiso por ser quién es"
no necesita contraseña para hablar con la base de datos.

Usa TLS/SSL: Siempre cifra la conexión entre el backend
y la DB para evitar ataques de "Man-in-the-Middle".

5. archivo .env en Backend: Node.js / Python / Go
Incluso en el backend, no todas las variables son secretas.

Es útil separarlas:

Variables de Configuración (Públicas):
PORT=3000, LOG_LEVEL=info.
Pueden ir en un config.json o .env base

Secretos (Privados): DB_PASSWORD, STRIPE_SK.
Solo en el entorno del sistema.

```
// Usando dotenv y validando con una librería como Zod
import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
  PORT: z.string().default('3000'),
});

// Esto lanzará un error si falta alguna llave antes de que la app arranque
export const env = envSchema.parse(process.env);
```

6. Rotación y Auditoría

Rotación: El estándar es cambiar las llaves cada 90 días automáticamente

Auditoría: Debes tener logs (registros) de quién accedió a qué secreto.
Si un administrador consulta la API Key de producción, eso debe quedar registrado.

Si el servidor se ve comprometido, los secretos no deben estar escritos en ningún archivo de texto en el disco duro
Deben estar en la memoria del proceso o protegidos por una capa de identidad del proveedor de nube.



# Revertir commit

Puedes hacerlo de forma discreta dejando un rastro
rastro o puedes intentar borrar el pasado (con el riesgo de romper el presente)

Depende totalmente de si tu código ya es público o sigue siendo privado.

## Para no destruir el trabajo de tu equipo
 
1. git revert (Seguro y Público)
##### Si los commits que quieres deshacer ya fueron subidos (push), nunca uses reset

Crea un nuevo commit que aplica exactamente los cambios inversos al commit que quieres eliminar
No borra la historia, la complementa.

No rompes el historial de tus compañeros.
Mantiene la trazabilidad (se sabe qué se deshizo y por qué).
Es ideal para entornos de Integración Continua (CI/CD).


2. git reset (Destructivo): Limpieza Privada
##### Solo debes usar reset en ramas locales que no has subido todavía

Es para cuando estabas probando algo
no funcionó y quieres borrar el rastro antes de que alguien lo vea.

Existen tres niveles de "arrepentimiento":

1. git reset --soft HEAD~1
código: Se mantiene. Aparece listo para un nuevo commit
staging: Se mantiene.

2. git reset --mixed HEAD~1
Se mantiene. Pero aparece como "not staged".
Se limpia.

3. git reset --hard HEAD~1
DESAPARECE. El código se borra físicamente.
Se limpia.

Peligro: git reset --hard
es irreversible si no tienes el hash guardado en el reflog
Úsalo con extrema precaución


3. Nomenclatura para reverts
Deben seguir una convención para que el Changelog sea legible

Si usas Conventional Commits:
Formato: `revert: <mensaje original del commit>`
Cuerpo del mensaje: `"This reverts commit <hash>. Reason: [explicación breve de por qué se deshizo]".`.

Ej: `revert: feat(auth): add google login integration`


4. Revertir Merge: caso especial

##### Revertir un merge es más complejo porque Git no sabe cuál de las dos ramas que se unieron es la "principal".
Necesitas especificar el parent number (generalmente -m 1).

```
git revert -m 1 <hash-del-merge>
```


5. Toma de decisiones
 
### 1. "Cometí un error en el último commit pero no he hecho push"

```
git commit --amend o git reset --soft
```

### 2. "El código ya está en main/remote y hay un bug"

```
git revert <hash>
```

### 3. "Hice un desastre total localmente y quiero empezar de cero"

```
git reset --hard origin/main
```


Git reflog:
Si por error hiciste un reset --hard
perdiste horas de trabajo
Ejecuta `git reflog`.

Git guarda un historial de todos los movimientos de tu puntero local durante 30-90 días
Puedes encontrar el hash de tu código perdido y rescatarlo con un nuevo checkout.



# Commits

Si lo haces muy poco, pierdes mucho progreso si algo sale
si lo haces cada dos segundos por cada movimiento, tu historial se vuelve ilegible.

La clave está en la atomicidad
debe representar una sola unidad lógica de trabajo

1. Commits: The "Must-Haves
Cambios son los pilares de tu historial
Deben ser claros y estar bien documentados.

Nueva funcionalidad:
Cada pieza de lógica que acerque el proyecto a su meta
`feat: add password recovery flow`

Corrección de Bug:
Una vez que el error está aislado y resuelto.
`fix: resolve memory leak in dashboard`

Refactorización:
Mejorar el código sin cambiar su comportamiento.
`refactor: simplify user validation logic`

Configuración:
Cambios en dependencias, scripts de build o archivos .env.example.
`chore: update react to v19`

Documentación:
Cambios significativos en el README o archivos de ayuda.
`docs: add deployment instructions`

Seguridad:
Parches críticos o actualización de librerías vulnerables.
`sec: rotate expired api certificates`


2. No commit
Lo ideal es agruparlos con otros cambios importantes o usar un squash antes de enviarlos a la rama principal.

Corrección de typos: Arreglar una letra en un comentario o un console.log olvidado
no merece su propio lugar en la eternidad del historial

Formateo de código: Si solo pasaste Prettier o cambiaste espacios por tabs, no lo subas solo
(a menos que sea un cambio en todo el proyecto)
Mejor inclúyelo en el commit de la funcionalidad que estabas tocando.

Código roto (WIP): Nunca hagas commit de algo que rompa el build en la rama principal
Si necesitas guardar progreso para cambiar de PC, usa una rama temporal o git stash.

Debuggers y Logs: Los print("hola") o console.log(data) .


3. Atomicidad

Ej: Si mañana tengo que deshacer solo este cambio porque falló
¿rompería otras 5 cosas que no tienen nada que ver?

Si la respuesta es SÍ: Tu commit es demasiado grande (monolítico). Divídelo.
Si la respuesta es NO: Es un commit atómico perfecto.

##### Regla: commits locales con frecuencia (aunque sean pequeños).
##### Antes de hacer el push final, usa git rebase -i para limpiar el ruido y dejar solo los commits que aportan valor


### Condiciones a cumplir
Para que un cambio "merezca" el commit, debe cumplir estas 3 condiciones:

1. Funciona: Pasa los tests y no rompe el proyecto.

2. Es único: Solo trata un tema (no mezcles "Arreglo login y cambio color de botón").

3. Es explicable: Puedes escribir un mensaje de menos de 50 caracteres que resuma lo que hiciste



# Staging

1. Git Stash
Herramienta para guardar cambios sin hacer un commit.
Toma tu trabajo actual, lo guarda en una pila interna de Git
deja tu copia de trabajo limpia como estaba en el último commit

`git stash`: Guarda tus cambios (solo archivos rastreados).

`git stash -u`: (Recomendado) Incluye también los archivos nuevos (untracked).

`git stash pop`: Recupera los cambios y los borra de la lista.

`git stash list`: Mira todo lo que tienes guardado.

#### Nombrar stashes
`git stash save "WIP: integracion de stripe a mitad"`


2. Commits de "WIP" (Work In Progress)
A veces el cambio es tan grande que el stash se queda corto
corto o tienes miedo de perderlo si le pasa algo a tu carpeta local
Aquí puedes hacer commits temporales.

1. Haces commits con el mensaje WIP: descripción breve.
2. Sigues trabajando.
3. Antes de fusionar (merge), usas un Rebase Interactivo (git rebase -i)
para hacer squash (fusionar) todos esos commits feos en uno solo profesional y limpio.

##### Nunca, jamás, hagas push de un commit de "WIP" a una rama compartida (como main o develop)
a menos que sea tu propia rama de función (feature/) y necesites ayuda de un compañero.


3. Git Worktree: Multiverso
Si tienes un proyecto muy pesado donde el stash o cambiar de rama tarda mucho por las dependencias
usa worktree, permite tener dos carpetas físicas distintas para el mismo repositorio
cada una en una rama diferente.

```
git worktree add ../hotfix-urgente main
```


4. Feature Flags: Código incompleto en Producción
Código está terminado pero la funcionalidad no está lista para el usuario
En lugar de dejarlo en una rama eterna que luego dará conflictos de merge
se usa el estándar de Feature Flags (Banderas de característica).

Subes el código a main e incluso a producción, pero lo envuelves en un if.

```
// En React o Backend
if (FLAGS.is_new_checkout_enabled) {
  return <NewCheckout />;
} else {
  return <OldCheckout />;
}
```

Ventaja: Evitas el "infierno de los merges" de ramas que duran meses.
Desventaja: Añade un poco de deuda técnica que debes limpiar después.


5. Draft Pull Requests (Borradores)
En plataformas como GitHub o GitLab puedes subir tu rama y marcar el Pull Request como "Draft" (Borrador).

Uso: Indica al equipo que el código está ahí, que pueden verlo, pero que no deben revisarlo ni fusionarlo todavía porque no está terminado
ideal para pedir feedback temprano sobre la arquitectura sin que el código sea perfecto.

Situación:

git stash:
Tengo que cambiar de rama 5 minutos para un fix rápido

WIP commit:
Me voy a dormir y quiero guardar cómo va mi lógica

git worktree:
El fix va a tardar horas y mi rama actual está rota

Feature Flags:
El código está listo pero el cliente no quiere la función aún


## Limpieza de Stash

Limpiarlo una vez por semana
acumular 20 stashes de cosas que ya ni recuerdas qué eran, convirtiéndose en basura digital.



# Rebase Interactivo y WIP

Mover la historia y reescribir la historia

El rebase estándar es un proceso automatizado para mantener tu rama al día
El rebase interactivo es una herramienta de edición quirúrgica para limpiar tu trabajo antes de que otros lo vean

1. Git Rebase

`git rebase <branch>`:
Principalmente para integrar cambios.
Toma todos los commits de tu rama actual y los "muda"
para que empiecen justo después del último commit de la rama base
(usualmente main).

Objetivo: Evitar los "merge commits" y mantener una línea de tiempo recta.
Es automático. Git intenta aplicar cada commit uno por uno en el nuevo destino

Uso: mi rama feature tenga los últimos cambios de main antes de terminarla


2. Git Rebase -i (interactivo)

`git rebase -i <commit-ref>`:
abre un editor de texto con una lista de tus commits
Pregunta: "¿Qué quieres hacer con cada uno de ellos?".

Objetivo: Limpieza y organización del historial
Manual. Tú decides qué commits sobreviven, cuáles se fusionan y cuáles se eliminan.

Uso: 5 commits de 'fix typo' y quiero convertirlos en un solo commit limpio de 'feat: add login'
antes de abrir el Pull Request".

Cuando ejecutas:

```
git rebase -i HEAD~4
```

para ver los últimos 4 commits
verás una lista con palabras clave:

`pick`: Usar el commit tal cual.
`reword`: Usar el commit, pero cambiar el mensaje (útil para arreglar errores de ortografía en el mensaje).
`edit`: Detenerse en ese commit para modificar el código.
`squash`: Fusionar el commit con el anterior y combinar los mensajes.
`fixup`: Igual que squash, pero descarta el mensaje de este commit (el más usado para limpiar "mini-arreglos").
`drop`: Eliminar el commit por completo.

git rebase:
Automatizada y estructural
Sincronizar ramas.
Solo te detienes si hay conflictos.
Cambia el punto de origen.

git rebase -i:
Manual y editorial.
Limpiar el historial (pulir).
Te detienes para elegir el destino de cada commit.
Cambia el contenido, orden y cantidad de commits.


### Escenario `git rebase main`
Estás trabajando en una rama y main avanzó.
No necesitas editar tus commits, solo quieres que tu rama esté al día para evitar conflictos futuros.

### Escenario `git rebase -i HEAD~n`
Terminaste tu tarea pero tu historial es un caos

Tienes commits como:

feat: add api
fix: typo
debug: print data
fix: typo again

1. Usar git rebase -i HEAD~4.
2. Cambia los commits 2, 3 y 4 a fixup
para que se mezclen con el 1.

El resultado será un único commit perfecto:
`feat: add api`.

##### Al igual que el rebase estándar, el interactivo reescribe la historia.
##### Nunca lo uses en commits que ya están en una rama compartida
harás que tus compañeros tengan pesadillas intentando sincronizar sus repositorios.



# Historial

Base de datos cronológica del proyecto
No es solo una lista de cambios; es un grafo dirigido (DAG)
registra la evolución de tu código, quién hizo qué y por qué.

##### El historial no se trata de "archivos", sino de estados.

1. Commit
Mucha gente piensa que un commit guarda la "diferencia" (el diff) entre la versión A y la B.
Técnicamente, Git guarda un snapshot (una captura completa) de todos tus archivos en ese momento
Si un archivo no cambió, Git simplemente apunta al archivo anterior para ahorrar espacio.

Todo commit tiene un identificador único (Hash SHA-1) que se genera basándose en:

El Snapshot: El contenido de los archivos.
Metadatos: Autor, fecha y mensaje.
El Padre (Parent): El hash del commit anterior. Esto es lo que crea la "cadena" del historial.


2. Visualizar historial
`git log` es potente, pero su salida por defecto es muy ruidosa

Comando definitivo:

```
git log --graph --oneline --decorate --all
```

`graph`: Dibuja las ramas y uniones con líneas de texto.
`oneline`: Comprime cada commit a una sola línea.
`decorate`: Muestra dónde están las ramas (main, feature) y los tags.
`--all`: Muestra todas las ramas, no solo en la que estás parado.


3. Estados del Historial: Lineal/Ramificado
Dos filosofías para mantener el historial

No Lineal:
git merge
Un historial con "nudos" y commits de merge
pros: Refleja la realidad histórica.
cons: Difícil de leer.

Lineal:
git rebase
Una línea recta sin saltos.
pros: Muy fácil de seguir y depurar
Reescribe la historia.


4. Historial limpio: git bisect
Tener un historial ordenado y commits atómicos (que hacen una sola cosa)
permite usar herramientas de diagnóstico avanzadas como git bisect.

##### Imagina que hay un bug en producción, pero no sabes qué commit lo causó
Con bisect, Git hace una búsqueda binaria en tu historial

1. Le dices un commit donde todo funcionaba y uno donde está roto.
2. Git te mueve automáticamente al commit de en medio.
3. Tú pruebas el código y le dices "bien" o "mal".
4. En pocos pasos, Git te señala el commit exacto que introdujo el error.

Si tus commits gigantes ("Cambié 20 archivos y arreglé 3 cosas")
bisect solo te dirá que el error está en ese commit gigante, pero no sabrás en cuál de los 20 archivos


5. Borrado: Limpiar el rastro
Si el historial es la memoria, a veces necesitamos "terapia de olvido":

`git commit --amend`: "Sobrescribe" el último commit.
Para cuando acabas de hacer un commit
commit y te diste cuenta de que olvidaste un archivo o escribiste mal el mensaje

`git reflog`: historial del historial
Registra todos los movimientos que has hecho
incluso los que borraste
Si pierdes un commit por un rebase mal hecho
el reflog es tu última esperanza para recuperarlo.

Escribe los commits para que los lea un humano
pero estructúralos para que los analice una máquina



# Prácticas git rebase

1. Nunca hagas rebase de ramas públicas
Solo haz rebase de ramas que solo tú posees (locales).

El rebase reescribe la historia (cambia los hashes de los commits).
Si haces rebase de una rama donde otros están trabajando (como main o develop)
Cuando tus compañeros intenten hacer pull
Git se volverá loco porque la historia que ellos tienen ya no coincide con la del servidor

Alguien terminará perdiendo trabajo o pasando horas arreglando conflictos manuales


2. Rebase frecuente contra la rama base
No esperes dos semanas para sincronizar tu rama con main

##### Cuanto más tiempo pase, más cambios se acumularán, más difícil será resolver los conflictos.
Cada mañana (o antes de empezar una tarea importante)
haz un rebase de main sobre tu rama:

```
git checkout mi-feature
git fetch origin
git rebase origin/main
```

Resuelves conflictos pequeños día a día
en lugar de un "monstruo de conflictos" al final del sprint.


3. Usa el Rebase Interactivo para "limpiar" antes del PR
Antes de abrir un Pull Request, tu historial debería contar una historia coherente
Nadie quiere ver 15 commits de "arreglando typo".

Usa git rebase -i HEAD~N para:

Squash: Fusionar commits pequeños en uno solo con significado.
Reword: Mejorar los mensajes de commit para que sigan los estándares (como Conventional Commits).
Fixup: Mezclar arreglos rápidos sin dejar rastro de que te equivocaste.


4. Gestión de conflictos
Si durante un rebase hay conflictos
Git se detendrá y te pedirá ayuda

1. Identificar los archivos en conflicto (git status).
2. Arreglarlos manualmente en tu editor.
3. Añadirlos al stage: git add <archivo>.
##### 4. IMPORTANTE: No hagas git commit. Ejecuta git rebase --continue.
5. Si te arrepientes o te bloqueas, siempre puedes volver al estado inicial con: git rebase --abort.


5. Force Push responsable
##### Después de un rebase, como los hashes cambiaron, no podrás hacer un git push normal. Tendrás que forzarlo.

Mal: git push --force (Es destructivo, sobrescribe todo a ciegas).

##### Bien: git push --force-with-lease.
opción es más segura
Solo permite el push si nadie más ha subido cambios a esa rama en el servidor mientras tú hacías el rebase


6. Commits Atómicos para un rebase suave
El rebase es mucho más fácil si tus commits son pequeños y tratan un solo tema

Si un commit toca 50 archivos, la probabilidad de conflicto en un rebase es altísima.
Si el commit toca 2 archivos, Git suele poder resolver el movimiento automáticamente sin molestarte.

Bien: 
Rebase en ramas locales propias
Usar fixup para limpiar el historial.
Usar --force-with-lease.
Abortar si el conflicto es inmanejable.

Mal:
Rebase en main, master o develop.
Dejar commits de "WIP" en el historial final.
Usar --force a secas.
Intentar resolver conflictos borrando código a ciegas.


#### git reflog
Si haces un rebase y "pierdes" commits, recuerda que Git no borra nada de inmediato
##### Ejecuta git reflog, busca el estado de tu rama justo antes del rebase y usa git reset --hard <hash



# Conflictos

Cuando git no tiene ni idea de cual cambio conserver
Te pide ayuda. 

situación perfectamente normal en el desarrollo colaborativo
No es un error de sistema, sino una señal de que Git necesita tu criterio humano para decidir el estado final del código.


## Motivos de conflicto

Git se bloquea en dos situaciones principales:

1. Edición Simultánea:
Dos personas en dos ramas distintas
modifican la misma línea del mismo archivo de formas diferentes. 

2. Conflicto de Existencia:
Alguien modifica un archivo mientras otra persona borra ese mismo archivo


## Anatomía de un Conflicto (Los Marcadores)

Cuando hay un conflicto durante un merge o rebase
Git detiene el proceso y "ensucia" tus archivos con marcadores especiales

```
<<<<<<< HEAD
const saludo = "Hola, mundo!";
=======
const saludo = "¡Qué tal, equipo!";
>>>>>>> feature-rama-nueva
```

`<<<<<<< HEAD`:
Indica que lo que sigue es lo que tienes tú actualmente en la rama donde estás parado (tu "aquí y ahora").

`=======`:
línea divisoria:
Separa tus cambios de los cambios que intentas traer.

`>>>>>>> nombre-de-la-rama`:
Indica el final del conflicto
muestra de dónde vienen esos cambios externos.


## Resolver conflictos

1. Identificar: Ejecuta git status:
Los archivos en conflicto aparecerán bajo el título "Unmerged paths".

2. Abrir el archivo: Ve a tu editor:
resaltan estos bloques en colores para que elijas con un clic
("Accept Current", "Accept Incoming" o "Accept Both").

3. Limpiar:
Debes borrar los marcadores (<<<<, ====, >>>>)
dejar el código exactamente como quieres que quede.

4. Marcar como resuelto: 
Una vez guardado el archivo, dile a Git que ya terminaste

`git add <archivo-corregido>`

5. Finalizar:
Si era un Merge: `git commit` (Git creará un "Merge Commit").
Si era un Rebase: `git rebase --continue`.


## Herramientas

usar un Merge Tool:

VS Code: Tiene una interfaz nativa excelente para comparar cambios lado a lado.

Meld / KDiff3: Herramientas dedicadas exclusivamente a comparar y fusionar archivos.

P3 (IntelliJ/WebStorm): Probablemente el mejor motor de resolución de conflictos del mercado.


## Evitar Conflictos (minimizar dolor)

Inevitables a largo plazo pero se puede reducir su frecuencia

1. Hacer pull frecuentemente:
No esperes una semana para traer los cambios de tus compañeros.

2. Commits pequeños y atómicos:
Si tocas 100 archivos, el conflicto es seguro.
Si tocas 2, es manejable.

3. Comunicación:
"Voy a refactorizar el AuthService.js, intenta no tocarlo esta mañana".

4. Git rerere:
función avanzada que significa "Reuse Recorded Resolution".
Si resuelves un conflicto una vez, Git recuerda cómo lo hiciste
si vuelve a aparecer el mismo conflicto en el futuro, lo resuelve solo por ti.

Si te encuentras en un conflicto tan masivo que no sabes ni por dónde empezar
siempre tienes la opción de "abortar misión" y volver al estado inicial para replantear la estrategia

`git merge --abort o git rebase --abort.`



# Prácticas repo público

Si no tienes cuidado, encontrar tus "trapos sucios" (como secretos o código desordenado).

1. Documentación: El "Manual de Bienvenida"
Un código increíble sin documentación es código muerto
Nadie lo usará si no sabe cómo ejecutarlo. 

README.md: Es la cara del proyecto

incluir:

Qué hace el proyecto (un resumen de 1 oración).
Cómo instalarlo y ejecutarlo.
Capturas de pantalla o demos (si es visual).
Tecnologías utilizadas.

LICENSE: Si no hay licencia, no es Open Source
##### Sin ella, legalmente nadie puede usar, modificar o distribuir tu código
Las más comunes son MIT (permisiva) y GPLv3 (más restrictiva).

CONTRIBUTING.md:
Explica a otros cómo pueden ayudarte (guía de estilo, cómo abrir un PR, etc.).


2. Seguridad y Privacidad (Crucial)
Como el repo es público, la seguridad no es opcional, es obligatoria.

Cero Secretos: Revisa dos veces que tu .gitignore esté bloqueando los archivos .env, llaves de API y carpetas de dependencias (node_modules).

.env.example: Como vimos antes, inclúyelo siempre para que los demás sepan qué variables necesitan configurar.

Dependabot: Activa las alertas de seguridad en GitHub. Te avisará automáticamente si una librería que usas tiene una vulnerabilidad y te sugerirá el parche.


3. Calidad del Historial

Conventional Commits: Usa un estándar para tus mensajes
(ej: feat:, fix:, docs:, chore:)
permite generar Changelogs automáticos

Ramas (Branches): Nunca trabajes directamente sobre main
Usa ramas de funciones (feature/login-form) y únelas mediante Pull Requests.

Limpieza de Historia: Antes de fusionar un Pull Request
usa Squash para que los 20 commits de "pruebas" se conviertan en un único commit limpio en la rama principal.


4. Gestión de Comunidad y Feedback
Si quieres que la gente use o colabore en tu proyecto, dales las herramientas:

Issue Templates: Crea plantillas para que, cuando alguien reporte un error
te dé toda la información necesaria (versión, pasos para reproducir, etc.).

PR Templates: Una lista de verificación para que quien envíe código
asegure que pasó los tests y documentó sus cambios.

Tags y Releases: No dejes que la gente descargue siempre de main
Usa SemVer para crear versiones estables (v1.0.0, v1.1.0).


5. Automatización (CI/CD)
Un repositorio público "pro" se cuida solo.
Configura GitHub Actions para:

Correr los Tests automáticamente cada vez que alguien suba código.
Pasar un Linter (como ESLint) para asegurar que el código siempre tenga el mismo estilo.
Verificar que el Build no se rompa.

Archivos indispensables: 
.gitignore	Evitar subir basura o secretos.
README.md	Explicar el proyecto al mundo.
LICENSE	Dar permiso legal para usar el código.
.env.example	Guía de configuración de variables.
.github/	Carpeta para plantillas y automatizaciones.

Si alguien abre un Issue o un Pull Request
intenta responder en un tiempo razonable.
La salud de un repo público se mide por la actividad de su comunidad




# Git Hooks y Husky




# npm


## Conflictos de Dependencias

Ej: pelea de requisitos (Peer Dependencies).
instalar: eslint@10.0.1.
obstáculo: ya tenemos eslint-plugin-react-hooks@7.0.1 

plugin dice que solo trabaja con versiones de ESLint que lleguen hasta la ^9.0.0".
10.0.1 es mayor que la 9.x.x
React Hooks podría dejar de funcionar porque no ha sido probado con ESLint 10

log: evidencia
tienes: eslint@10.0.1 (definido en tu root project).
plugin pide: peer eslint@"^3.0.0 || ... || ^9.0.0" desde eslint-plugin-react-hooks@7.0.1.
resultado: 10.0.1 no entra en ese rango.

Soluciones: 

1. npm install --legacy-peer-deps
Solución más común y segura para salir del paso
Ignora las reglas estrictas de compatibilidad de los paquetes secundarios e instala de todos modos

En la mayoría de los casos, los plugins de ESLint funcionan perfectamente con versiones superiores
aunque el desarrollador aún no haya actualizado el archivo de configuración para decir que es compatible

Estabilidad: Riesgo bajo. Generalmente, los plugins funcionan aunque no digan que son compatibles
Limpieza: "Ensucia" un poco el proceso de instalación (debes recordar la bandera).

##### Cuando sale una versión mayor de una herramienta (como pasar de ESLint 9 a 10), el 99% de los plugins siguen funcionando perfectamente
pero fallan al instalarse simplemente porque el autor del plugin no ha actualizado un campo de texto en su configuración que dice: "peerDependencies": { "eslint": "^10.0.0" }.

Pros:
No te quedas atrás: Disfrutas de las mejoras de rendimiento y seguridad de ESLint 10 desde el día 1.
Menos fricción: Evitas entrar en un bucle donde, al bajar ESLint a la v9, otro paquete empiece a quejarse porque él sí quería la v10.

Cons: 
Falsa seguridad: Si ESLint 10 introdujo un cambio "rompedor" (breaking change) en su API interna que el plugin de React Hooks usa, el plugin fallará silenciosamente o dará errores raros durante el linting.

Una vez que instales con la bandera
prueba a correr tu linter (npm run lint o similar).
Si no explota con errores rojos, significa que el plugin es perfectamente compatible con la v10
y solo le falta actualizar su "etiqueta" de versión.

2. npm install --force
más agresiva. npm intentará forzar la instalación y, si encuentra conflictos de archivos, los sobrescribirá.
solo si --legacy-peer-deps falla
Puede causar efectos secundarios si hay cambios drásticos entre versiones.


3. Purista
proyecto sin advertencias, 100% estable
bajar la versión de ESLint a la 9:

```
npm install eslint@^9.0.0 --save-dev
```

Estabilidad: Máxima. Todo encaja según los archivos package.json.
Limpieza: satisface al gestor de paquetes
Mantenimiento: obliga a estar pendiente de cuándo "subir" de nuevo a la v10.

Elegir Downgrade:
Si estás trabajando en un proyecto de producción crítico
la estabilidad es más importante que tener la última versión de la herramienta de formateo

Pros:
Te aseguras de que el árbol de dependencias es perfectamente coherente.
Cero advertencias en la terminal.

Cons:
Software "viejo".
Si otros plugins ya se actualizaron para requerir ESLint 10, vas a tener el mismo conflicto pero a la inversa.


## Mantenimiento del Repo

1. Manual de Identidad
No instales paquetes "a ciegas".
leer qué estás instalando antes de romper algo

`npm outdated`:
semanalmente
dirá qué paquetes tienen versiones nuevas
cuáles son seguras (Patch/Minor)
cuáles son peligrosas (Major).

`npx npm-check-updates -u`:
Requiere `npm-check-updates`
forma visual de ver qué versiones puedes subir y actualizar tu package.json de un tirón

2. overrides: solución elegante
En conflictos de peers deps en lugar de usar --legacy-peer-deps en cada comando
decirle a npm

```
"overrides": {
  "eslint-plugin-react-hooks": {
    "eslint": "$eslint"
  }
}
```

Le dice a npm que fuerce al plugin a usar la versión de ESLint que tienes en la raíz del proyecto
mucho más limpio que usar banderas de fuerza porque queda documentado en el código.

3. package-lock.json sagrado 
borrarlo para solucionar el error

lockfile garantiza que todo el equipo (y el servidor de producción) tenga las mismas versiones exactas
##### Usa siempre npm ci (Clean Install) en tus entornos de despliegue o cuando acabes de bajar cambios de Git
Es más rápido y respeta el lockfile al 100%.

4. Limpieza Periódica (Pruning)
A veces desinstalamos paquetes pero quedan "residuos" o dependencias huérfanas en la carpeta node_modules.

`npm prune`: Elimina cualquier paquete instalado que no esté listado en tu package.json.

5. Auditorías de Seguridad
Los conflictos no son el único problema; también lo son las vulnerabilidades.

`npm audit`: Te dirá si tienes dependencias con agujeros de seguridad

`npm audit fix`: Intentará actualizar automáticamente a versiones seguras sin romper la compatibilidad de versiones (SemVer).

6. usar pnpm
Problemas de npm lento o dependencias circulares
mudarse a pnpm

Estricto (no te deja usar paquetes que no hayas declarado explícitamente).
Extremadamente rápido.
Gestión inteligente de las dependencias


Rutina:
Revisar actualizaciones: `npm outdated`. Semanal
Limpiar huérfanos: `npm prune`. Mensual
Seguridad: `npm audit`. Antes de cada Deploy
Instalación limpia: `npm ci`. Al cambiar de rama


## Seguridad

### npm audit

1. Clasificación de Riesgo
No todas las alertas de seguridad son iguales.
Antes de ejecutar cualquier comando, clasifica el riesgo:

Bajo / Moderado: 
Si es una dependencia de desarrollo (devDependencies), como herramientas de testing o linters
El riesgo suele estar en tu máquina local, no en el servidor donde corre tu app.

Alto: Revísalo pronto
Suele afectar a bibliotecas que procesan datos de usuario.

Crítico: Arréglalo de inmediato
vulnerabilidades que permiten ejecutar código malicioso o robar datos
inyección SQL, XSS.

2. Comando fix
Dos niveles de reparación:

`npm audit fix`: Seguro
Solo actualiza paquetes dentro de rangos compatibles
ej. de 1.2.1 a 1.2.5
usarlo: Casi siempre. Es raro que rompa algo

`npm audit fix --force`: Peligroso
usarlo: Casi nunca de forma automática
Ignora las peerDependencies
Es mejor ver qué paquete tiene el problema y actualizarlo manualmente para controlar los daños.


#### Actualización segura: Si npm te dice que tienes 10 vulnerabilidades

1. Lee el reporte completo: No solo el resumen
Ejecuta npm audit (sin el fix).
Mira qué paquete es el culpable.

2. Actualiza uno por uno: En lugar de fix --force
intenta actualizar solo el paquete afectado:

`npm install nombre-del-paquete@latest`

3. Prioriza dependencias de Producción
Si la vulnerabilidad está en algo que se envía al cliente (como lodash o react)
actualiza ya.
Si es algo de desarrollo (como eslint), puedes esperar a que los plugins se pongan al día.

4. npm list: 
Si no sabes quién instaló esa dependencia vulnerable
usa `npm list nombre-del-paquete`
Mostrará el "árbol genealógico" y sabrás qué paquete padre debes actualizar.

##### Regla: Si funciona en desarrollo y la vulnerabilidad es de una herramienta de desarrollo
no rompas el proyecto por un parche de seguridad que no afecta a tus usuarios finales

ESLint es una herramienta que corre en tu computadora para revisar tu código
Una vulnerabilidad ahí es mucho menos peligrosa que una vulnerabilidad en el framework que maneja tus contraseñas.


## npm audit

Es el punto de partida

1. Comando de investigación: `npm explain`
Si npm audit te dice que el paquete braces tiene una vulnerabilidad
lo más probable es que tú no hayas instalado braces directamente
Alguien más lo trajo

Para saber quién es el responsable, usa:
`npm explain <nombre-del-paquete-vulnerable>`

Te mostrará la cadena exacta
`tu-app -> react-scripts -> webpack -> watchpack -> chokidar -> braces`.

Ahora ya sabes que el "culpable" real que tienes que actualizar es react-scripts.

2. Leer el reporte de npm audit
En npm audit a secas hay tres puntos clave:
aparecen en cada tabla

`Vulnerable candidate`: El paquete que tiene el fallo.
`Dependency of`: Quién lo está usando
`Path`: ruta completa de carpetas dentro de node_modules

Si el reporte es muy largo y te pierdes, usa `npm audit --json`.
buscas (Ctrl+F) el nombre del paquete
verás una sección llamada effects
dice exactamente qué otras cosas de tu proyecto se verán afectadas si lo borras o cambias

3. Comparativa de herramientas de diagnóstico

npm audit:
Te da la lista de "enfermedades" (vulnerabilidades).

npm explain <pkg>:
Te dice "quién invitó a este paquete a la fiesta" (su árbol genealógico).

npm list <pkg>:
Una versión visual del árbol, útil para ver si tienes varias versiones del mismo paquete.

npm query ":root > *":
(Avanzado) Lista solo tus dependencias directas de primer nivel.


4. Limpieza Quirúrgica
Una vez que sabes quién es el culpable (gracias a npm explain), no hagas un fix --force

1. Busca en Google o GitHub: "nombre-del-paquete-padre fix security vulnerability".
2. Casi siempre, el autor ya sacó una versión nueva que corrige el problema.
3. Actualiza solo ese paquete padre:
`npm install nombre-del-padre@latest`


### LTS

Soporte de Empresas: Las grandes empresas (AWS, Google Cloud, Azure) empiezan a ofrecer soporte oficial en sus servidores
Antes de ser LTS, usar la 24 en la nube es "bajo tu propio riesgo".

Mantenimiento Garantizado: Node 24 recibirá parches de seguridad y corrección de errores durante 3 años
No tendrás que preocuparte por actualizar la versión mayor de tu servidor en mucho tiempo.

Una vez que la 24 se asienta, la 22 empieza su camino hacia el "retiro".

Proyecto:

Corporativo / Bancario	Node 22 (LTS)
22 (LTS)
Cero riesgos, máxima compatibilidad con librerías antiguas.

Startup / Personal:
Node 24
Quieres la máxima velocidad y soporte nativo para TypeScript/ESM.

Aprendizaje:
Node 24
Es mejor aprender con los estándares que serán la norma los próximos 3 años.



# Corepack y pnpm

Repo limpio:
Herramienta que ya viene en Node
Permite definir exactamente qué versión de npm (o pnpm/yarn) debe usar tu proyecto
evitando que un compañero de equipo use una versión distinta y rompa el package-lock

Ej: 
Imagina que tú usas npm 10, pero tu compañero usa npm 8
otro prefiere pnpm

Cuando todos instalan dependencias en el mismo proyecto, el archivo package-lock.json se vuelve loco
se generan conflictos de versiones y el proyecto deja de ser "limpio".

Corepack es un puente incluido en Node.js
permite definir en el package.json exactamente
qué gestor de paquetes (y qué versión) debe usarse
Si alguien intenta usar otro, Corepack lo detiene o descarga la versión correcta automáticamente

Ventajas:

Cero instalaciones globales:
necesitas hacer npm install -g pnpm o yarn.
Corepack se encarga de "invocar" la versión que necesites al vuelo

Consistencia total: Todo el equipo, el servidor de CI/CD y producción
usarán exactamente los mismos bits para instalar dependencias.

Adiós a los conflictos de Lockfile: 
Al forzar a todos a usar la misma versión del gestor
el archivo de bloqueo no cambia de formato innecesariamente.


1. Activar Corepack
desactivado por defecto para no romper flujos antiguos

```
corepack enable
```

2. Definir tu gestor en el package.json
en la raíz, añade el campo "packageManager
Por ejemplo, si quieres usar pnpm versión 9.15.0:

```
{
  "name": "mi-proyecto-limpio",
  "version": "1.0.0",
  "packageManager": "pnpm@9.15.0"
}
```

A partir de ahora, si alguien escribe npm install en ese proyecto pero tú definiste pnpm
Corepack puede avisar o forzar el uso del correcto
Y si tú escribes pnpm install, Corepack se asegura de que sea la v9.15.0
descargándola al instante si no la tienes.

Ej: error de eslint
El servidor de despliegue tiene una versión de npm distinta a la de tu laptop.
Un compañero actualizó una dependencia usando una versión de npm que maneja de forma distinta las peerDependencies.

Versatilidad:
Puedes saltar entre proyectos que usan Yarn, npm o pnpm sin instalar nada globalmente.

Seguridad:
Garantiza que el entorno de desarrollo sea idéntico al de producción.


## Corepack, nvm y pnpm

nvm gestiona Node.js, Corepack gestiona el gestor de paquetes

1. nvm (Node Version Manager)
instalas en tu sistema operativo
tener instaladas varias versiones de Node.js a la vez
saltar entre ellas con un comando.

Ámbito: Global en tu máquina, pero local para el usuario
ej: nvm use 22.

2. Archivo .nvmrc
Contrato de Node.js, en la raíz de tu proyecto
Le dice a otros desarrolladores (y a herramientas de automatización)
qué versión exacta de Node requiere ese proyecto

Si tienes nvm instalado y entras a la carpeta, puedes hacer nvm use
leerá el archivo automáticamente para cambiar a la versión correcta

3. Corepack: gestor de npm, yarn y pnpm
Gestiona qué versión de npm, pnpm o yarn
se usa una vez que ya elegiste una versión de Node
Ámbito: Por proyecto (definido en el package.json).


Flujo:

1. .nvmrc: Creas este archivo
cuando alguien clona tu repo, sabe que debe usar Node 22.

2. nvm: El desarrollador introduce `nvm use` para activar esa versión de Node

3. package.json + Corepack: pones "packageManager": "pnpm@9.0.0".
Cuando el desarrollador escriba pnpm install
Corepack (que ya viene en Node 22) se activará
bajará pnpm 9.0.0 y hará la instalación

Sin .nvmrc: Alguien usa Node 14 en un proyecto de Node 22 y el código explota.
Sin Corepack: Alguien usa npm en un proyecto diseñado para pnpm, creando un package-lock.json y un pnpm-lock.yaml al mismo tiempo; caos total.

Bash:

```
corepack enable
corepack use pnpm@latest o npm@latest
```



# Seguridad en npm

Auge de los ataques a la cadena de suministro
paquetes maliciosos que imitan a otros populares
el peligro no está solo en que tu web sea hackeada, sino en que tu propia computadora sea comprometida

`npm install`: 
Permite que que scripts de terceros se ejecuten en tu sistema operativo

1. Scripts de instalación (preinstall / postinstall):
Muchos paquetes ejecutan comandos automáticamente al instalarse
Un paquete malicioso puede usar esto para robar tus variables de entorno
entorno (como tus llaves de AWS o de GitHub) y enviarlas a un servidor remoto

2. Acceso al sistema de archivos:
Node.js tiene permisos totales para leer y escribir en tu disco duro
Un paquete infectado podría buscar archivos .ssh, archivos .env con contraseñas o incluso instalar un keylogger

3. Envenenamiento de red:
El paquete podría convertir tu PC en parte de una botnet para atacar otros sitios
minar criptomonedas en segundo plano sin que te des cuenta.


Clasificación del Riesgo:

1. Crítico: Ejecución de Código Remoto (RCE) / Malware
El paquete contiene código diseñado específicamente para robar datos o tomar control del sistema.
Típico en ataques de Typosquatting (instalar react-domm en lugar de react-dom).

Acción: Borrar node_modules, cambiar todas tus contraseñas y llaves API, y formatear si es necesario.

2. Alto: Vulnerabilidades en Dependencias de Producción
librería legítima (como express o lodash) tiene un fallo que permite a un hacker atacar tu aplicación cuando esté online.

Impacto local: Bajo.
El peligro es para tus usuarios finales y tus servidores

Acción: Actualizar la versión mediante npm audit.

3. Medio/Bajo: Prototyping / ReDoS
Errores de lógica en el paquete que podrían hacer que tu app se cuelgue o consuma mucha CPU.

Impacto local: Molesto, pero no roba tus datos.

Acción: Actualizar cuando sea posible


Seguridad:
Máquina local

1. --ignore-scripts
probar un paquete nuevo y no confías 100% en él
instalarlo con:
`npm install <nombre> --ignore-scripts`
evita que se ejecute cualquier código automático durante la descarga.

2. Chequear paquete
Antes de instalar un paquete desconocido, mira cuántas descargas tiene y quién es el autor

3. archivos .env fuera del repo
Nunca subas tus secretos a GitHub
además, asegúrate de que tus procesos locales no tengan acceso global a todas tus llaves del sistema

4. Aísla tus proyectos
Herramientas como Docker pueden ayudarte a correr npm install dentro de un contenedor
de modo que si hay un script malicioso, no pueda salir de ahí para ver tus archivos personales.



#pnpm

Performant npm
favorito de muchos desarrolladores porque soluciona
soluciona la gigantesca y pesada carpeta node_modules.

1. Espacio
A diferencia de npm, que copia los mismos archivos una y otra vez en cada proyecto que tienes en tu PC
pnpm utiliza un Content-addressable store (un almacén inteligente).

Ahorro de espacio: Si tienes 10 proyectos que usan react, pnpm guarda react una sola vez en una carpeta oculta de tu disco duro
En tus proyectos, solo crea "enlaces" (hard links) a esa carpeta.

Instalación "estricta": npm te permite usar librerías que no has instalado explícitamente (si son dependencias de otra cosa).
pnpm prohíbe esto, obligándote a tener un package.json honesto y limpio.

2. Comandos Esenciales
Instalar todo: `pnpm i`
Añadir paquete: `pnpm add <pkg>`
Paquete de dev: `pnpm add -D <pkg>`
Eliminar paquete:  `pnpm rm <pkg>`
Ejecutar script: `pnpm <script>` no necesita 'run' 
Ejecutar binario: `pnpm dlx <pkg>`

3. Comandos Únicos y Poderosos
Limpian tu pc

`pnpm store prune`:
Elimina del almacén central todos los paquetes que ya no están siendo usados por ningún proyecto en tu PC
Libera gigas de espacio en segundos.

`pnpm list`:
Muestra un árbol de dependencias mucho más legible que el de npm.

`pnpm setup`:
Configura automáticamente las variables de entorno para que pnpm funcione perfecto en tu terminal.

Pros:
Monorepos: La mejor herramienta para gestionar proyectos que tienen múltiples sub-proyectos (workspaces).

Cons:
Enlaces simbólicos: Algunas herramientas muy antiguas o configuraciones de Docker muy básicas
pueden confundirse con los enlaces que usa pnpm, aunque esto es cada vez menos común

Si ya activaste Corepack como mencionamos antes, no necesitas instalar pnpm globalmente
Ve a tu proyecto y ejecuta:

```
corepack use pnpm@latest

```

Descargará pnpm, lo configurará en tu package.json
creará el archivo pnpm-lock.yaml



# Seguridad en Entornos


## Desarrollo

1. Aislamiento del Entorno (Sandboxing)
El mayor riesgo es que un paquete malicioso acceda a tus archivos personales o llaves SSH.

Contenedores (Docker):
Ejecutar tu npm install y tu servidor de desarrollo dentro de un contenedor Docker
asegura que, si hay un script malicioso, este quede atrapado en el contenedor
y no llegue a tu carpeta de "Documentos" o "Fotos".

Máquinas Virtuales / WSL2:
Si usas Windows, trabajar dentro de WSL2 (Windows Subsystem for Linux)
proporciona una capa de separación útil respecto al sistema operativo principal.

2. Gestión de Secretos (Variables de Entorno)
No escribir una API Key o un Password directamente en el código.

Archivos .env: Úsalos siempre, pero asegúrate de que el archivo .gitignore contenga .env.

Herramientas de Inyección: Usa gestores de secretos como Infisical o 1Password CLI
inyectan las variables en la memoria de tu terminal solo cuando ejecutas el proyecto
evitando que los secretos queden guardados en archivos de texto plano en tu disco duro.

3. Verificación de Dependencias

Socket.dev / Snyk:
No te fíes solo de npm audit
Estas herramientas analizan el comportamiento del código
código (por ejemplo, si un paquete de colores intenta acceder a tu red).

Lockfiles Inmutables:
En tu servidor de integración continua (CI)
usa siempre `npm ci` o `pnpm install --frozen-lockfile`
evita que el instalador intente resolver nuevas versiones que podrían estar infectadas

4. Protección de la Terminal y Git
Tu terminal es la puerta de entrada a tu sistema.

Firmado de Commits (GPG/SSH):
Configura Git para firmar tus commits
Esto garantiza que nadie pueda suplantar tu identidad y subir código malicioso a tu repositorio fingiendo ser tú

Pre-commit Hooks:
herramientas como `husky` para ejecutar un escaneo de secretos antes de cada commit
Si accidentalmente dejas una contraseña en el código, el commit fallará automáticamente.

5. Principio de Menor Privilegio
No ejecutes herramientas de desarrollo como Administrador (Sudo) a menos que sea estrictamente necesario

Si un paquete malicioso se ejecuta con permisos de usuario normal, su daño es limitado.
Si se ejecuta como Root/Admin, puede instalar malware a nivel de sistema (rootkits) que son casi imposibles de detectar


Prácticas:

`.gitignore`: 
Evitar subir archivos .env o node_modules.

`npm audit / pnpm audit`:
Detectar vulnerabilidades conocidas en la base de datos CVE.

`--ignore-scripts`:
Instalar paquetes sospechosos sin ejecutar sus scripts de post-instalación.

`SSH Keys con Passphrase`:
Evitar que alguien que robe tu archivo id_rsa pueda usarlo sin tu clave.



## Staging

Ensayo general antes de entrar en producción
lugar más peligroso desde el punto de vista de la seguridad
suele ser una réplica exacta de Producción pero con menos vigilancia.

1. Datos Reales
El error más común es copiar la base de datos de Producción a Staging para que los tests sean "reales".

riesgo: Si Staging es hackeado (y suele ser más fácil de hackear)
los datos de tus clientes reales quedan expuestos.

solución (Data Masking): Usa scripts para anonimizar los datos
Cambia los emails reales por test@example.com y los nombres por Usuario 123.

2. Control de Acceso
Staging nunca debe ser indexado por Google ni ser accesible para todo el mundo

VPN / IP Whitelisting: Configura el servidor para que solo acepte conexiones desde la IP de tu oficina o a través de una VPN corporativa

Basic Auth: Incluso si la app tiene login, añade una capa de autenticación a nivel de servidor
(un usuario y contraseña simple antes de siquiera ver la web).

Esto detiene a los bots automáticos que buscan vulnerabilidades

3. CI/CD Seguro: "Frozen Lockfiles"
En Staging, el despliegue es automático

Aquí es donde los ataques de la cadena de suministro
pueden colarse en tu infraestructura.

Instalación Inmutable: Nunca uses npm install en tu servidor de Staging
Usa: `npm ci` o `pnpm install --frozen-lockfile`

garantiza que el servidor instale exactamente lo que dice el lockfile
probado localmente, sin intentar resolver versiones nuevas que podrían estar infectadas.

4. Escaneo de Secretos en el Pipeline
Staging es el filtro final para errores humanos
Tu pipeline de despliegue (GitHub Actions, GitLab CI, etc.) debe tener "aduana":

Secret Detection: Herramientas como gitleaks o trufflehog deben revisar cada commit
Si detectan que alguien subió una API Key por error
el despliegue a Staging debe cancelarse inmediatamente

DAST (Dynamic Application Security Testing): Ejecuta herramientas como OWASP ZAP contra tu URL de Staging.
Esto simula ataques de hackers (SQL Injection, XSS) automáticamente
antes de que el código pase a Producción

5. Configuración de Infraestructura
Staging debe ser un espejo de Producción, pero con esteroides en los logs.

Paridad de Entorno: Si usas Node 24 en Staging, debes usar Node 24 en Producción.
Las diferencias de versión son agujeros de seguridad

Logs Agresivos: Configura alertas que te avisen si hay un pico inusual de errores 404 o intentos de login fallidos en Staging
Suele ser la señal de que alguien está intentando entrar.


Riesgos, impacto y mitigación:

Fuga de datos reales:
Crítico (Legal/Reputación)
`Obfuscación de DB`.

Acceso público:
Alto (Exposición de bugs)
`VPN / Basic Auth`.

Secretos en código
Crítico (Acceso a la nube)
`Escaneo en CI/CD`.

Desvío de dependencias
Medio (Malware en el build)
`Lockfiles congelados`.

Staging debe ser tan seguro como Producción, pero tan privado como tu entorno Local



## Seguridad Prod

El mundo real: donde están tus usuarios, sus tarjetas de crédito y tu reputación 
la seguridad no es opcional, es la columna vertebral del proyecto

Principio de "Defensa en Profundidad
múltiples capas que un atacante debe atravesar

1. Hardening de la Infraestructura
El servidor (o contenedor) donde corre tu Node.js 24 debe estar "blindado".

Usuarios no-root: Nunca corras node server.js como usuario root
Si un hacker logra ejecutar código a través de una vulnerabilidad, tendrá control total de la máquina
Usa un usuario con permisos limitados.

Contenedores Inmutables
Usa imágenes de Docker "Distroless" o "Alpine".
Son versiones mínimas de Linux que no tienen herramientas como curl, git o incluso un shell (bash)
lo que deja al atacante sin herramientas si logra entrar.

Solo lectura: Configura el sistema de archivos del contenedor como read-only.
Tu app de Node no debería necesitar escribir archivos en el disco duro, solo leerlos.

2. Seguridad en la Capa de Aplicación (Node.js)
Tu código debe ser paranoico por defecto.

Helmet.js: Es una librería imprescindible.
Configura varias cabeceras HTTP (como Content-Security-Policy y X-Frame-Options)
que protegen contra ataques de XSS y Clickjacking de forma automática.

Rate Limiting: Evita ataques de fuerza bruta o de denegación de servicio (DoS) limitando cuántas peticiones puede hacer una misma IP en un periodo de tiempo

Validación Estricta: Usa librerías como Zod o Joi para validar toda entrada del usuario.
No confíes ni en un simple ID de base de datos
si no tiene el formato correcto, descártalo.

3. Gestión de Secretos en el Runtime
En producción, las variables de entorno (.env) ya no son suficientes.

Secret Managers: Usa servicios como AWS Secrets Manager, HashiCorp Vault o Azure Key Vault
Tu aplicación solicita la contraseña de la base de datos solo cuando la necesita
esta nunca se guarda en el disco duro del servidor.

Rotación Automática: Estos servicios pueden cambiar las contraseñas cada 30 días automáticamente
Si una clave se filtra, dejará de funcionar en poco tiempo por sí sola.

4. Observabilidad y Respuesta (SIEM)
No puedes detener lo que no puedes ver.

Logging Estructurado: Usa Pino o Winston para generar logs en formato JSON
permite que herramientas como Datadog o ELK Stack analicen comportamientos extraños en tiempo real.

Alertas de Anomalías: Configura alarmas que se disparen si, por ejemplo, hay un aumento del 200% en errores 403 (Prohibido).
Eso suele significar que alguien está intentando acceder a rutas privadas sistemáticamente.

5. Escaneo Continuo (Vulnerability Management)
La seguridad en producción no termina con el despliegue.

Runtime Protection: Algunas herramientas monitorean tu aplicación mientras corre para detectar ataques de día cero
(vulnerabilidades que aún no se conocen).

Dependabot / Snyk: Mantén el escaneo de dependencias activo
Si sale una vulnerabilidad crítica para una librería que ya tienes en producción
debes tener un flujo de "Hotfix" para desplegar la actualización en minutos.


Riesgos, impacto y defensa principal:

Inyección (SQL/NoSQL):
Crítico (Robo de DB)
`ORMs y Validación con Zod`.

XSS / Cross-Site Scripting:
Alto (Robo de sesiones)
`Helmet.js y CSP`.

Ataque de Fuerza Bruta:
Medio/Alto
`Rate Limiting y 2FA`.

DDoS (Denegación de Servicio):
Alto (App caída)
`Cloudflare / AWS Shield`.

Check:
app corre como usuario no-root?
HTTPS forzado y cabeceras de seguridad activas?
secretos están en un Secret Manager y no en el código?
WAF (Web Application Firewall) frente a mi servidor?



# Seguridad Código y Bibliotecas

Código

1. Validación de Entradas (Zod / TypeScript)
Nunca confíes en lo que viene de fuera (req.body, req.query, req.params).
Aunque uses TypeScript, recuerda que los tipos desaparecen al compilar
##### La validación debe ocurrir en tiempo de ejecución

Mala práctica: Usar los datos directamente en una consulta o lógica de negocio
Buena práctica: Usar un `esquema de validación` como Zod.

```
import { z } from 'zod';

const UserSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
});

app.post('/register', (req, res) => {
  const result = UserSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json(result.error);
  // Ahora result.data es seguro y tiene tipos reales
});
```

2. Prevención de Inyección (SQL y NoSQL)
La inyección ocurre cuando un atacante "engaña" a tu base de datos enviando código en lugar de datos.

SQL: Nunca concatenes strings para crear queries
Usa Queries Parametrizadas o un `ORM/Query Builder` (como Prisma o Kysely).

Usa Queries Parametrizadas o un ORM/Query Builder (como Prisma o Kysely).
La validación con Zod previene esto al forzar que el campo sea un string.

3. Gestión de Errores Sin Fugas de Información
Si tu base de datos falla, no le digas al usuario exactamente por qué falló.

Peligro: res.status(500).send(error.message)
podría revelar nombres de tablas, rutas de archivos en tu PC o versiones de software

Solución: `Registra el error` real en tus logs (con Pino o Winston)
y envía un `mensaje genérico` al cliente.

```
try {
  await db.save(data);
} catch (err) {
  logger.error(err); // Esto va a tu archivo de logs seguro
  res.status(500).send("Ocurrió un error interno."); // El usuario no ve detalles técnicos
}
```

4. Criptografía y Almacenamiento de Contraseñas
Nunca inventes tu propio algoritmo de cifrado.

Hashing: Usa `Argon2` (el estándar actual) o bcrypt para guardar contraseñas.
Nunca uses MD5 o SHA-1, son fáciles de crackear

Randomness: Si necesitas generar tokens, usa el módulo nativo
`node:crypto` con `randomBytes`
no uses Math.random() porque es predecible.

5. Sanitización de Salidas (Prevención de XSS)
Si tu app permite que los usuarios suban contenido que luego otros verán (comentarios, perfiles)
debes "limpiar" ese HTML.

Práctica: Si renderizas en el servidor (SSR)
usa librerías como dompurify para eliminar etiquetas <script> maliciosas.

Frameworks modernos como React o Vue escapan el contenido automáticamente
pero ten cuidado con propiedades como dangerouslySetInnerHTML.

6. Uso de node:crypto y node:fs (Seguridad de Archivos)

Al manejar archivos en tu PC:

Evita usar variables del usuario para definir rutas
`fs.readFile('/user/data/' + req.query.file)`.
Un atacante podría usar `../..//etc/passwd`.
para leer archivos del sistema (Path Traversal).

Solución: Usa `path.basename()` para limpiar el nombre del archivo


Amenazas, práctica y herramienta:

Datos Maliciosos:
Validación de esquemas
`Zod`

Robo de Cuentas:
Hashing de alta seguridad
`Argon2`

Inyección de Código:
Consultas parametrizadas
`Prisma / Kysely`

Fuga de Secretos:
Variables de entorno
`dotenv / Infisical`



## Bibliotecas

1. Validación y Sanitización: primera linea de defensa
Estas librerías aseguran que los datos que entran en tu sistema sean exactamente lo que esperas.

Zod:
Es una librería de declaración y validación de esquemas con prioridad en TypeScript
Evita que te inyecten objetos maliciosos en lugar de strings.

Validator.js:
biblioteca gigante de validadores de strings (emails, tarjetas de crédito, direcciones IP, etc.).

DOMPurify:
Si permites que los usuarios escriban HTML (como en un editor de texto enriquecido)
esta librería limpia todo el código malicioso (XSS) antes de que se guarde o se muestre.

2. Autenticación y Criptografía
Nunca intentes escribir tu propia lógica de login o cifrado
Son estándares probados.

Argon2:
Es más seguro y resistente a ataques de GPU que bcrypt.
Úsala para guardar contraseñas.

Lucia Auth / Auth.js:
Librerías modernas que gestionan sesiones y autenticación de forma segura
evitando los errores comunes al implementar OAuth o cookies manualmente.

Jose: Si usas JSON Web Tokens (JWT)
librería más ligera y segura para firmar, verificar y cifrar tokens en entornos modernos como Node 24.

3. Seguridad de Infraestructura y HTTP
Protegen la comunicación entre el cliente y el servidor.

Helmet.js:
indispensable para configurar cabeceras HTTP de seguridad con una sola línea de código.

Express-rate-limit:
Un middleware básico para limitar el número de peticiones.
Evita ataques de fuerza bruta al login y ataques DoS simples.

Cors:
Aunque Express lo permite, esta librería te ayuda a configurar correctamente
quién puede hacer peticiones a tu API desde otros dominios

4. Auditoría y Análisis Estático (En tiempo de desarrollo)
Herramientas que revisan tu código mientras lo escribes

Snyk:
CLI que analiza tus dependencias en busca de vulnerabilidades conocidas
dice exactamente cómo arreglarlas

Husky: Te permite crear "Git Hooks"
Puedes configurar que, antes de cada git commit
para ejecutar un escaneo de seguridad automático

Socket.dev:
servicio que puedes integrar en tu GitHub para bloquear paquetes de npm que tengan comportamientos sospechosos
como telemetría oculta


Protección, libreria y motivo:

`Datos que recibes`:
Zod
Valida tipos y estructura en tiempo de ejecución.

`Contraseñas`:
Argon2
Es el estándar de hashing más robusto actualmente.

`Las cabeceras HTTP`:
Helmet
Activa defensas del navegador automáticamente.

`Ataques de fuerza bruta`:
Express-rate-limit
Bloquea IPs que hacen demasiadas peticiones.

`Tus dependencias`:
pnpm audit / Snyk
Encuentra "agujeros" en librerías de terceros.

Con Zod, Helmet y Argon2
Esas tres cubren el 80% de los ataques más comunes a aplicaciones Node.js.


## Prácticas y bibliotecas esenciales

1. Zod, Helmet y Argon2

Zod:
`Inyección de datos, caída del servidor por tipos erróneos`.
Sustituye a validaciones manuales largas y tediosas.

Helmet:
`Clickjacking, XSS, Sniffing`.
Es "instalar y olvidar".
Una línea de código y ya eres más seguro que el promedio

Argon2 (o node:crypto):
`Robo de contraseñas`.
Es el estándar
Si usas un servicio como Supabase o Firebase

2. Prácticas de Código: sin instalar librerías
solo cambiar la forma en que escribes

A. Usar el módulo nativo node:crypto:
Para una app pequeña, a veces no necesitas una librería de tokens
Para generar un ID o un token de recuperación:

```
import { randomBytes } from 'node:crypto';
const token = randomBytes(32).toString('hex');
```

B. Validación centralizada con Zod:
En lugar de validar en cada función, crea un "Portero" (Middleware)
que revise todo lo que entra
Si los datos no pasan por Zod, no entran a tu lógica de negocio.

C. Variables de entorno .env + .gitignore
Regla número 1
Incluso en una app pequeña, usa un archivo .env para tu URL de base de datos y tus llaves de API
Nunca las dejes en el código "para ir más rápido".

3. Estrategia de Deploy (Staging/Prod simplificado)
Una app pequeña, probablemente no tenga un servidor dedicado
Usa algo cmo Vercel, Railway o Render.

1. Habilita el "Auto-audit": En tu package.json
añade esto para que antes de cada despliegue se revisen las dependencias:

```
"scripts": {
  "prebuild": "npm audit"
}
```

2. pnpm: 
ahorrará espacio en disco y hará que tus despliegues sean mucho más rápidos y consistentes


No usar todavía:
En una app pequeña evita cosas complicadas

Microservicios: Mantén todo en un "Monolito" simple
Es más fácil de asegurar.

No OAuth propio:
Si necesitas login con Google o GitHub
usa Lucia Auth o servicios como Clerk
Manejar los tokens de Google a mano es una fuente inagotable de bugs de seguridad.

WAFs complejos: como F5 o Akamai
Con las protecciones básicas de Cloudflare (capa gratuita) es suficiente


Inicio

Node lts
pnpm (con Corepack).
Express + Helmet (Cabeceras).
Zod (Validación de formularios y APIs).
Prisma (ORM que evita inyecciones SQL automáticamente).

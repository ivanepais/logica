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






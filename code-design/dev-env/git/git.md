#git:

## Commits pequeños y atómicos:
Cada commit cambios que realicen una tarea específica y completa
permiten revertir o aplicar cambios con precisión.
enfocarse:
corregir un error, implementar una nueva func, hacer un refactor
Evita agregar cambios no relacionados en un mismo commit


## Mensajes claros y descriptivos:
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


## ramas (branches) desarrollar func y err:

Evita trabajar main o master
ramas para cada nueva funcionalidad. corrección de errores
o mejora.
git checkout -b feature/login-page
fusiona la rama de trabajo
mediante un Pull Request (PR) o Merge Request (MR),
idealmente tras una revisión de código


## flujo de trabajo de ramas (Git Flow):

modelo de branching desarrollo colaborativo y la entrega continua
main: Contiene el código listo para producción.
develop: Código en desarrollo, donde se integran todas las características antes de fusionarlas en main.
feature/*: Ramas para desarrollar nuevas funcionalidades.
hotfix/*: Ramas para corregir errores en producción.
release/*: Ramas para preparar una nueva versión de producción.

Haz rebase en lugar de merge cuando sea apropiado:
rebase permite mantener un historial lineal y limpio, evitando los "commits de merge" innecesarios
úsalo solo para commits locales que no se hayan compartido con otros colaboradores.

Para rebasar tu rama actual en la rama develop
git checkout feature/new-feature
git rebase develop


## Evita force push en ramas compartidas:

git push --force puede sobrescribir el trabajo de otros,
causando pérdida de commits.
si es necesario, trata de usar git push --force-with-lease
seguro porque verifica si la rama ha cambiado desde tu último fetch


## .gitignore adecuado:
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


## Revisa tu código antes de commit:

usando git diff o git status
a verificar que solo estás agregando los cambios correctos.
git status   # Ver el estado de los archivos modificados
git diff     # Ver los cambios detallados en los archivos


## Squash commits:

Si tienes muchos commits pequeños y sin importancia 
en una rama de características
puedes squashear (combinar) estos commits
antes de fusionar la rama en main o develop.
mantiene un historial de commits más limpio.
git rebase -i HEAD~n   # 'n' es el número de commits a revisar
Elige squash para combinar los commits y escribir un mensaje de commit coherente.


## revisiones de código
Antes de fusionar ramas en main o develop
realiza revisiones de código a través de Pull Requests (PRs
ayudan a identificar errores y aseguran la calidad del código
fomentar el intercambio de conocimientos entre los miembros del equipo


## etiquetas (tags) para versiones:
marcar versiones importantes o lanzamientos en producción
git tag -a v1.0.0 -m "Lanzamiento de la versión 1.0.0"
git push origin v1.0.0


## Sincroniza tu repositorio frecuentemente:
Antes de comenzar a trabajar en una nueva rama o continuar con tu trabajo
asegúrate de que tienes la última versión del código desde el repositorio remoto:
git fetch origin
git pull origin develop  # O la rama con la que estés trabajando
evitas problemas de integración o conflictos más adelante.


## Resolver conflictos de forma adecuada:
surgen conflictos al fusionar ramas
asegúrate de revisarlos y resolverlos de manera consciente
No elimines cambios sin revisar ni uses
la opción --ours o --theirs


## Branches por funcionalidad:

feature/login-page
bugfix/fix-login-issue
hotfix/crash-on-startup


## Restaurar versiones anteriores:

revertir un cambio específico o volver a una 
versión anterior del código
git revert o git reset

Revertir: Crea un commit que deshace un cambio
específico sin perder el historial.
git revert <commit_id>

Reset: Reajusta el estado del código a un commit anterior
pérdida potencial de cambios si no se usa correctamente).
git reset --hard <commit_id>


## hooks de Git cuando sea necesario:

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

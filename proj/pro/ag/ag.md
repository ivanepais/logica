# Agentes

## CLAUDE.md
carga al iniciar sesión
define visión, stack, comandos
menos de 200 lin
overrides con claude.local.md

## CLAUDE.local.md

## AGENTS.md
cuando no existe CLAUDE.md
Codex, Cursor, Copilot

## .mcp.json
guarda config integrac mcp
conecta github, jira, slack, db
se comparte via git

### .claude/
#### settings.json
controla permisos y acceso a herramientas
Modelo hooks, sandbox, plugins, entorno
admite overrides con settings.local.json

#### settings.local.json

##### rules/
archivos .md modulares por tema
estilo, testing, diseño api
se aplican segun ruta de archivo (frontmatter)

###### code-style.md
###### testing.md
###### api-conventions.md

##### skills/
se activan según el contexto de la tarea
se cargan solo cuando hacen falta
tambien funcionan como comandos con /
###### deploy/
####### SKILL.md
####### deploy-config.md

##### agents/
subagentes especializados en rol
ventanas de contexto aislada
herramientas, modelo y git worktree propios
###### code-reviewer.md
###### security-auditor.md


##### hooks
scripts que se disparan por evento
automatizan validación, linting, formato
bloquean acciones no permitidas ej rm-rf
###### validate-bash.sh

###### worktrees/ (.gitignore)


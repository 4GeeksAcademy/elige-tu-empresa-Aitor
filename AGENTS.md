# AGENTS.md

Instrucciones para cualquier agente de IA que trabaje en este monorepo de **Nexova Solutions**.

## Al iniciar una sesión, lee en este orden

1. `memory-bank/projectbrief.md`
2. `memory-bank/techContext.md`
3. `memory-bank/progress.md`
4. `CONTEXT.md` y `nexova-BRIEFING.es.md`
5. El `README.md` de la carpeta donde vas a trabajar
6. `.agents/rules/` (las reglas `Always` se aplican siempre)

No leas archivos de más ni inventes contexto de negocio: si algo no está en esas fuentes, pregunta.

## Estructura (no crear árboles paralelos)

- Web pública: `./uis/website`
- Backoffice: `./uis/backoffice`
- Backend: `./services`
- Resto de carpetas según `memory-bank/techContext.md`

Prohibido crear `frontend/`, `backend/`, `apps/`, `web/` o `api/` en la raíz.

## Flujo obligatorio antes de cada commit

1. Comprueba que cada archivo nuevo está en su ruta oficial.
2. Actualiza `memory-bank/progress.md`.
3. Actualiza el README de cada carpeta tocada (y su `.es.md` si existe).
4. Comprueba que no hay secretos, `.env` ni datos personales de RRHH o candidatos.
5. Revisa `git status` y `git diff`: solo cambios relacionados con la tarea.
6. Haz el commit con un mensaje claro. Incluye el trailer `Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>`.

## Carpetas protegidas (no modificar sin permiso explícito del usuario)

- `.git/`
- `.devcontainer/`
- `data/raw/` (datos originales, posible información personal)
- `agents/_template/` y `skills/_template/` (se copian, no se editan)

## Archivos protegidos (no modificar sin permiso explícito del usuario)

- `nexova-BRIEFING.es.md`
- `company-choice.md`
- `.devcontainer/devcontainer.json`
- Cualquier `.env` o credencial

## Límites de trabajo

- Plan corto antes de cambiar archivos y una fase cada vez.
- Máximo 2 intentos para arreglar un mismo error; después, informa y espera.
- No escribas tests nuevos salvo petición explícita.
- Las recomendaciones de IA sobre personas (candidatos, empleados) son apoyo: la decisión es humana.

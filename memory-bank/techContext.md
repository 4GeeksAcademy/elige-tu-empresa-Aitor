# Tech Context

Fuentes: [`README.md`](../README.md), [`.devcontainer/devcontainer.json`](../.devcontainer/devcontainer.json), README de cada carpeta.

## Rutas oficiales (única fuente de verdad)

| Qué | Ruta |
| --- | --- |
| Web pública | `./uis/website` |
| Backoffice interno | `./uis/backoffice` |
| Backend / APIs / workers | `./services` |
| Datos | `./data/{raw,pipelines,process,eval}` |
| Agentes / skills / MCP | `./agents`, `./skills`, `./mcps` |
| Automatización | `./workflows` |
| Reutilización | `./packages`, `./shared` |
| Operaciones | `./infra`, `./scripts`, `./internal` |
| Documentación transversal | `./docs` |

No existen ni deben crearse árboles paralelos (`frontend/`, `backend/`, `apps/`, `web/`, `api/` en la raíz).

## Entorno (devcontainer)

- Ubuntu 24.04, Python 3.12, Node 22, pnpm (corepack), uv, Docker outside-of-docker, GitHub CLI.
- Puertos reenviados: 3000, 8000, 5678.
- Formato al guardar y extensiones: Python/Pylance, Jupyter, Docker, Prettier, ESLint.

## Decisiones técnicas documentadas

- Backend: un único backend FastAPI centralizado para la empresa, con routers por dominio (README raíz). Evitar microservicios al inicio.
- Tipos compartidos TypeScript: `packages/shared` (`@repo/shared-types`). No hay runner de workspace en la raíz.
- Flujo de datos: `raw` → `pipelines` → `process`, consumido por `services/`, `uis/` o `agents/`; `eval` mide la calidad.
- Cada app, servicio, agente o pipeline nuevo lleva su subcarpeta y su README.

## Stack heredado de Nexova (briefing)

HubSpot (CRM), Zendesk legacy (helpdesk), Google Workspace, un ATS interno de los años 2010 y hojas de cálculo. Sin telemetría ni logging centralizado; despliegues manuales.

## Estado de la plantilla

- Sin código ejecutable: `agents/_template/agent.py` vacío, tipos placeholder en `packages/shared`.
- `docker-compose.yml` citado en el README raíz y todavía inexistente.
- `.gitignore` vacío.

## Pendiente de decidir

- Esquema de `services/` (por ejemplo `services/api`) y stack concreto del frontend: no hay decisión documentada.

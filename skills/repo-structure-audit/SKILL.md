---
name: repo-structure-audit
description: Audita en solo lectura que el monorepo de Nexova cumple la estructura y la documentación exigidas (rutas oficiales, memory bank, AGENTS.md, reglas) y devuelve un informe con evidencias. Úsala antes de un commit o entrega.
---

# repo-structure-audit

## Objetivo único

Verificar, sin modificar nada, que el repositorio cumple la estructura y la documentación exigidas, y reportar hallazgos con evidencia.

## Inputs

- Raíz del repo (por defecto, el directorio actual).
- Rutas obligatorias: `./uis/website`, `./uis/backoffice`, `./services`.
- Archivos de contexto obligatorios: `nexova-BRIEFING.es.md`, `memory-bank/{projectbrief,techContext,progress}.md`, `AGENTS.md`, `.agents/rules/`.

## Procedimiento

Sigue [`resources/checklist.md`](./resources/checklist.md). Solo lectura: no crear, editar, mover ni borrar archivos.

## Output esperado

Informe Markdown con estas secciones: Cumplido, Pendiente, Problemas y Checklist final (✅/❌). Cada hallazgo cita la ruta y la línea de evidencia. Si falta información, el informe termina con preguntas numeradas en vez de suponer.

## Criterios de aceptación

1. Lista las carpetas de primer nivel y señala las que no pertenecen a la estructura del `README.md` raíz.
2. Confirma la existencia de las rutas obligatorias, de los tres archivos del memory bank, de `AGENTS.md` y de `.agents/rules/`.
3. Detecta referencias a rutas inexistentes (por ejemplo `apps/` o `docker-compose.yml`).
4. Detecta restos de otras empresas frente al briefing (por ejemplo `Brasaland`, `TrackFlow`).
5. Comprueba que no existen árboles paralelos (`frontend/`, `backend/`, `apps/`, `web/`, `api/` en la raíz).
6. No modifica el repo: `git status` queda igual antes y después.
7. Cada hallazgo incluye una evidencia localizable (ruta y línea).

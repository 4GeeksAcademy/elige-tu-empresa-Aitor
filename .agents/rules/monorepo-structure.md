---
description: Estructura oficial del monorepo y prohibición de árboles paralelos
alwaysApply: true
---

# Estructura del monorepo

- Web pública: `./uis/website`. Backoffice: `./uis/backoffice`. Backend: `./services`.
- Nunca crear `frontend/`, `backend/`, `apps/`, `web/` ni `api/` en la raíz.
- Cada app, servicio, agente o pipeline nuevo va en su subcarpeta con su `README.md`.
- Si no está claro dónde va algo, consulta la guía «Where should I put this?» del `README.md` raíz.

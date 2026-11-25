---
description: Convenciones del backend
globs: services/**
alwaysApply: false
---

# Backend

- Todo el backend vive en `./services`. Un backend FastAPI central con routers por dominio; extraer un worker solo si es imprescindible.
- Cada servicio tiene su subcarpeta y su `README.md` (objetivo, tecnología, cómo ejecutarlo).
- No duplicar lógica en `uis/`.

---
description: Convenciones del frontend (website y backoffice)
globs: uis/**
alwaysApply: false
---

# Frontend

- Solo `uis/website` (web pública) y `uis/backoffice` (administración interna). Otras UI van en subcarpetas de `uis/`, nunca fuera.
- Cada aplicación documenta objetivo, tecnología y cómo ejecutarla en su `README.md`.
- Los tipos compartidos con el backend se extraen a `packages/shared`.

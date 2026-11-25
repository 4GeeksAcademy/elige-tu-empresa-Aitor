---
description: Carpetas y archivos que no se modifican sin permiso explícito
alwaysApply: true
---

# Protegido

No modificar sin permiso explícito del usuario:

- Carpetas: `.git/`, `.devcontainer/`, `data/raw/`, `agents/_template/`, `skills/_template/`.
- Archivos: `nexova-BRIEFING.es.md`, `company-choice.md`, `.devcontainer/devcontainer.json`, cualquier `.env` o credencial.

Las plantillas (`_template`) se copian, no se editan.

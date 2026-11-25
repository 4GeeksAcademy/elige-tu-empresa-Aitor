# Checklist de auditoría

- [ ] `ls` de la raíz y de los directorios de primer nivel; comparar con el árbol del `README.md`.
- [ ] Existen `uis/website`, `uis/backoffice` y `services`.
- [ ] Ausentes: `frontend/`, `backend/`, `apps/`, `web/`, `api/` en la raíz.
- [ ] Existen `memory-bank/projectbrief.md`, `techContext.md` y `progress.md`, y no están vacíos.
- [ ] Existen `AGENTS.md` y `.agents/rules/` con al menos una regla `alwaysApply: true`.
- [ ] Búsqueda de `apps/`, `docker-compose.yml`, `Brasaland` y `TrackFlow` en los `*.md`; cada coincidencia se reporta con ruta y línea.
- [ ] `nexova-BRIEFING.es.md` describe Nexova y no es un placeholder.
- [ ] Las decisiones de `memory-bank/` coinciden con `nexova-BRIEFING.es.md` y `CONTEXT.md`.
- [ ] Archivos excluidos por política de la organización: reportarlos como no auditables, sin intentar leerlos.
- [ ] `git status` igual antes y después de la auditoría.

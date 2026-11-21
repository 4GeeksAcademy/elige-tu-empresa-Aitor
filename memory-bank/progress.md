# Progress

Actualizar este archivo antes de cada commit.

## Hecho

- [x] Empresa elegida: Nexova Solutions (`company-choice.md`, commit `efc47c2`).
- [x] Briefing real añadido: `nexova-BRIEFING.es.md`.
- [x] `CONTEXT.md` con áreas de interés (commit `4af4851`).
- [x] README raíz personalizados para Nexova (commit `932b1e1`).
- [x] Memory bank (`projectbrief.md`, `techContext.md`, `progress.md`).
- [x] `AGENTS.md` en la raíz.
- [x] Reglas en `.agents/rules/`.
- [x] Skill `skills/repo-structure-audit/`.
- [x] Rutas `./uis/website` y `./uis/backoffice` creadas, solo con README. `./services` ya existía.

## Pendiente

- [ ] Decidir y construir el primer proyecto concreto (ver áreas en `projectbrief.md`).
- [ ] Contenido real de `./uis/website`, `./uis/backoffice` y `./services`.

## Decisiones abiertas

1. Responsable de Ventas en el briefing: Megan Clarke o Marcos Ibáñez.
2. Si se mantiene el alcance «seguimiento de llamadas por WhatsApp», que no está en el briefing.
3. `packages/README` y `shared/README` mencionan `apps/`, que no existe: ¿corregir a `uis/` y `services/`?
4. `docker-compose.yml` aparece en el README raíz y no existe: ¿crearlo o quitar la mención?
5. Esquema de `services/`: backend único (por ejemplo `services/api`) o una subcarpeta por servicio.
6. Restos de otras empresas en la plantilla (`Brasaland`, `TrackFlow`, ejemplos `/locations`, `/menus`).
7. `.gitignore` vacío con datos sensibles de RRHH previstos.

## No auditable

`data/*/README.md`: excluidos por política de la organización.

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
- [x] Rutas `./uis/website` y `./uis/backoffice` creadas. `./services` ya existía.
- [x] Landing corporativa inicial creada en `./uis/website/index.html` con HTML5 y Tailwind CDN.
- [x] Metadatos SEO, Open Graph, Twitter Cards y Schema.org `Organization` añadidos a la landing.
- [x] Formulario comercial responsive creado en `./uis/website/application.html`.
- [x] Validación de campos en tiempo real y simulación de envío añadidas en `./uis/website/validation.js`.
- [x] Resumen del trabajo documentado en `Plan/plan.md`.
- [x] Rama de trabajo `feature/agent-memory-bank` y flujo de entrega de `AGENTS.md` ejecutado (rutas, README, sin secretos, diff revisado).

## Pendiente

- [ ] Decidir y construir el primer proyecto concreto (ver áreas en `projectbrief.md`).
- [ ] Completar contenido del backoffice y los servicios; ampliar la web según el alcance acordado.

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

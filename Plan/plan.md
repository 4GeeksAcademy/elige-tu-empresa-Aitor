# Plan de trabajo realizado

Este documento resume el trabajo completado en el repositorio para organizar el contexto y las instrucciones de agentes de Nexova Solutions. No es una especificación de producto ni sustituye las fuentes del proyecto.

## 1. Auditoría y contexto inicial

- Se comprobó que [`../nexova-BRIEFING.es.md`](../nexova-BRIEFING.es.md) describe a Nexova Solutions y no es el briefing placeholder de la plantilla.
- Se revisó la estructura del monorepo y se confirmó que no había árboles paralelos de frontend o backend.
- Se identificó la estructura prevista: `uis/website`, `uis/backoffice` y `services`.
- Se registró que las carpetas de aplicaciones y varios archivos de gobierno aún no existían al inicio.
- Los README de `data/` excluidos por la política de la organización no se leyeron ni se usaron como evidencia.

## 2. Memory bank

Se creó `memory-bank/` con tres documentos:

- [`../memory-bank/projectbrief.md`](../memory-bank/projectbrief.md): contexto de negocio de Nexova, áreas de interés, responsables, ideas iniciales y restricciones conocidas sobre datos sensibles y decisión humana.
- [`../memory-bank/techContext.md`](../memory-bank/techContext.md): rutas oficiales, entorno de desarrollo, decisiones técnicas ya documentadas y estado conocido de la plantilla.
- [`../memory-bank/progress.md`](../memory-bank/progress.md): trabajo completado, trabajo pendiente y decisiones abiertas.

El contenido se basa en los documentos existentes. Las discrepancias y cuestiones sin resolver se dejaron explícitamente abiertas.

## 3. Instrucciones y reglas de agente

Se añadió [`../AGENTS.md`](../AGENTS.md), que establece:

1. Qué documentos leer al iniciar una sesión.
2. Las rutas oficiales y la prohibición de crear árboles paralelos.
3. Un flujo ordenado de seis comprobaciones antes de cada commit.
4. Carpetas y archivos que requieren permiso explícito antes de modificarse.
5. Límites de trabajo y precauciones con datos personales.

Se añadieron ocho reglas en [`../.agents/rules/`](../.agents/rules/):

| Regla | Propósito | Alcance configurado |
|---|---|---|
| `monorepo-structure.md` | Mantener las rutas y la estructura del monorepo. | Siempre (`alwaysApply: true`). |
| `memory-bank-sync.md` | Leer y mantener el memory bank. | Siempre (`alwaysApply: true`). |
| `protected-files.md` | Respetar los recursos protegidos. | Siempre (`alwaysApply: true`). |
| `sensitive-data.md` | Evitar exponer datos personales o credenciales. | Aplicable a tareas con datos sensibles, según su descripción. |
| `frontend-conventions.md` | Documentar y organizar las interfaces. | Patrón `uis/**`. |
| `backend-conventions.md` | Mantener el backend bajo `services/`. | Patrón `services/**`. |
| `docs-conventions.md` | Mantener documentación de carpetas coherente. | Patrón `**/README*.md`. |
| `commit-checklist.md` | Aplicar la lista previa al commit. | Manual, sin aplicación automática ni patrón de archivos. |

## 4. Skill de auditoría

Se creó [`../skills/repo-structure-audit/SKILL.md`](../skills/repo-structure-audit/SKILL.md) y su checklist de apoyo en `skills/repo-structure-audit/resources/checklist.md`.

- **Objetivo único:** auditar la estructura y documentación del repo sin modificarlo.
- **Inputs documentados:** raíz del repositorio, rutas obligatorias y archivos de contexto requeridos.
- **Output esperado:** informe Markdown con hallazgos localizables y checklist.
- **Aceptación verificable:** comprobar rutas y documentos, detectar árboles paralelos y referencias obsoletas, comparar el contexto con el briefing y mantener `git status` sin cambios durante la auditoría.

La skill quedó creada; no se ejecutó como parte de este trabajo.

## 5. Rutas e introducción del repositorio

- Se añadieron README de estado inicial a [`../uis/website/`](../uis/website) y [`../uis/backoffice/`](../uis/backoffice). Reservan las rutas oficiales y dejan claro que las aplicaciones aún no están implementadas.
- `services/` ya existía; no se implementó ningún servicio.
- Se actualizaron `README.md` y `README.es.md` para apuntar a `AGENTS.md`, `memory-bank/` y `.agents/rules/`.
- Se comprobó que no existían `frontend/`, `backend/`, `apps/`, `web/` ni `api/` en la raíz.

## 6. Flujo de entrega

Antes del commit final se ejecutaron las comprobaciones del flujo definido en `AGENTS.md`: revisión de rutas, actualización de `progress.md`, comprobación de README relacionados, búsqueda de archivos o patrones de credenciales, revisión del estado y del diff, y commit de la actualización.

## 7. Pendientes y límites

Las decisiones abiertas e inconsistencias encontradas siguen anotadas en [`../memory-bank/progress.md`](../memory-bank/progress.md); este resumen no las resuelve ni las convierte en requisitos. Incluyen discrepancias en el briefing, referencias de plantilla, decisiones de estructura aún no fijadas y archivos de datos que no pudieron auditarse.

No se implementaron aplicaciones, servicios ni automatizaciones de negocio. Este documento tampoco incluye enlaces ni referencias a GitHub.

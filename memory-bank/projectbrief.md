# Project Brief — Nexova Solutions

Fuentes: [`nexova-BRIEFING.es.md`](../nexova-BRIEFING.es.md) (briefing oficial), [`CONTEXT.md`](../CONTEXT.md), [`company-choice.md`](../company-choice.md).

## Empresa

Nexova Solutions es una consultora de RRHH y selección de talento fundada en 2011, con sede en Valencia (España) y oficina en Miami (Florida). Tiene 120 empleados y factura ~8 M$ anuales. Líneas de negocio: headhunting, outsourcing de soporte al cliente y formación corporativa. CEO: Laura Mendoza.

## Misión del proyecto

Un equipo de AI Engineering construye sistemas, automatizaciones y herramientas inteligentes para que Nexova opere con menos esfuerzo manual y a mayor escala. El proyecto es un monorepo único que representa a la empresa.

## Áreas de interés elegidas (CONTEXT.md)

| Área | Responsable (briefing) | Idea inicial |
| --- | --- | --- |
| Operaciones de Selección | Javier Almeida | Asistente que busca y ordena candidatos según una vacante. Ayuda al consultor; no sustituye su revisión ni su decisión. |
| Recursos Humanos | Patricia Solís | Chatbot interno sobre políticas y beneficios. Maneja datos sensibles: proteger datos personales y limitar el acceso. |
| Atención al Cliente | Roberto Díaz | Chatbot de soporte con base de conocimiento y seguimiento de incidencias. |
| Marketing | Carmen Ruiz | Mejorar la web corporativa desactualizada. |
| Seguimiento de llamadas | — (no está en el briefing) | Automatización que registre llamadas y las siga por WhatsApp y correo. Idea del autor en `company-choice.md`. |

Son ideas iniciales, no requisitos cerrados. El alcance y la tecnología se deciden al diseñar cada proyecto.

## Restricciones

- Datos personales de RRHH y de candidatos: no se commitean, no se exponen en prompts ni logs, acceso limitado.
- Las recomendaciones de IA son apoyo; la decisión final es humana.

## Puntos abiertos del briefing

- Responsable de Ventas: la introducción nombra a Megan Clarke y la sección de departamentos a Marcos Ibáñez. Sin resolver; no asumir ninguno.

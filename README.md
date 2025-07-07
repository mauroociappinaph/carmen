# Carmen – AI Assistant Platform

Carmen es una plataforma de asistencia inteligente que permite interactuar con múltiples herramientas mediante un agente de inteligencia artificial accesible desde una interfaz web y Telegram.

## 🚀 Visión

Crear un asistente digital capaz de conectarse con servicios como Google Calendar, Google Drive, correo electrónico, scraping, generación de leads, y mucho más. Carmen ofrece una experiencia fluida, cómoda y unificada, que responde tanto desde una web propia como desde Telegram, manteniendo memoria compartida y contexto entre ambos canales.

## 🎯 Objetivo MVP

El objetivo inicial es construir un MVP funcional que permita:

- Autenticación de usuarios (login / register)
- Acceso a un chat web con interfaz moderna
- Integración con Google Calendar para crear eventos desde el chat
- Funcionalidad disponible tanto en la web como en Telegram, compartiendo memoria y conversaciones

## 🔧 Stack Tecnológico

- **Frontend**: Next.js (Framework de React para producción)
- **Backend**: Node.js con Express
- **Base de datos**: MongoDB usando Prisma ORM
- **Servicios externos**: Google APIs (Calendar, Drive), MCPs (Firecrawl, Playwright, Context7, etc.)
- **Canales de acceso**: Web (dominio propio), Telegram bot

## 💡 Diferenciador

Carmen no es solo un chatbot, sino un **agente inteligente multipropósito** que puede ejecutar tareas reales: agendar reuniones, responder mails, buscar contactos, automatizar navegadores, interactuar con documentos, etc. Todo esto sin depender de herramientas de pago externas, pensado para ser gratuito, autoalojado y controlado por el usuario.

## 💰 Modelo de Monetización

Durante la fase inicial, Carmen será completamente gratuita con el objetivo de facilitar pruebas, feedback y mejoras continuas.

A futuro se implementará un modelo freemium:

- Acceso gratuito con funcionalidades limitadas (ideal para uso personal)
- Plan premium con características avanzadas, más integraciones y prioridad en soporte

## 🧩 Experiencia de Usuario y Automatización

La plataforma está pensada para ser simple y fluida para el usuario final. Todo se concentra en una sola interfaz integrada, tanto para el acceso como para las acciones inteligentes.

### Flujo de usuario

- El usuario se registra o inicia sesión con email y contraseña
- En el primer ingreso, se fuerza un cambio de contraseña para mayor seguridad
- Una vez autenticado, accede al chat desde donde se le guía de forma sencilla para autorizar acceso a sus servicios de Google (Calendar, Drive, Gmail, etc.)
- El sistema guarda los tokens de forma segura y a partir de ahí puede operar sobre esos servicios sin fricción

### Arquitectura de Implementación

Nuestro enfoque de implementación es un **modelo SaaS multi-tenant centralizado**. Esto significa que una única instancia de la aplicación dará servicio a todos los usuarios, garantizando la escalabilidad, la eficiencia en el mantenimiento y una experiencia consistente. Cada usuario autorizará el acceso a sus servicios (como Google) a través de OAuth, y sus datos y tokens se gestionarán de forma segura y aislada dentro de nuestra infraestructura. Descartamos otros modelos para enfocarnos en construir una plataforma robusta y escalable desde el día uno.

## 🧠 Filosofía de Respuestas Dinámicas

El chat de Carmen está diseñado para funcionar con modelos de lenguaje grande (LLM), generando respuestas en tiempo real basadas en el contexto y la entrada del usuario.

- No se usan respuestas codificadas ni scripts estáticos en el backend.
- Todas las respuestas provienen de la generación dinámica del modelo, asegurando flexibilidad y capacidad de aprendizaje.
- Esto permite que el asistente sea capaz de manejar escenarios variados y evolucionar con nuevos datos o actualizaciones del modelo.
- El backend actúa como un puente entre el usuario y el LLM, orquestando llamadas y gestionando contexto pero sin limitar la creatividad del modelo.

Este enfoque es clave para mantener un asistente inteligente, adaptable y escalable.

## 📌 Fases del Proyecto

**Fase 1 (Actual) – MVP**

- Construcción de la landing page
- Login y registro de usuarios
- Chat web con integración a backend
- Telegram bot funcional y sincronizado
- Integración completa con Google Calendar

**Fase 2 – Expansión de herramientas**

- Firecrawl (scraping)
- ACI (acciones inteligentes)
- Google Drive y Gmail
- Resumen e interpretación de PDFs y textos

**Fase 3 – Optimización & despliegue**

- Despliegue en producción de frontend y backend
- Dominio propio
- Dashboard de usuario para control y seguimiento

## 💬 Estado actual

Estamos en la fase de planificación y estructuración del proyecto. El siguiente paso es inicializar los repositorios de backend (Express) y frontend (Next.js) y comenzar el desarrollo del sistema de autenticación.

---
Por ejemplo, si la generación de leads es crítica, podemos enfocarnos en el scraping de
  directorios y la identificación de contactos en LinkedIn. Si la visibilidad es clave, podemos ir
  por la automatización de publicaciones en Twitter/LinkedIn.

## ☁️ Opciones de Hosting Gratuitas

1.  **Render.com**
    *   **Gratis:** Ofrece un nivel gratuito para "Web Services" y "Cron Jobs". Los Cron Jobs son
        perfectos para tu caso, ya que te permiten ejecutar un script en un horario definido.
    *   **Fácil de usar:** Muy intuitivo. Conectas tu repositorio de Git (GitHub, GitLab, Bitbucket), y
        Render se encarga de construir y desplegar tu código. Configurar un Cron Job es tan simple
        como especificar el comando a ejecutar y la frecuencia (ej. `0 0 * * *` para medianoche).
    *   **Ideal para:** Proyectos Node.js o Python.

## 📝 Plan de Acción Propuesto

1.  **Ahora:** Completar la configuración manual para que puedas seguir trabajando con `aci.dev`.
2.  **Después:** Añadir esto como una **tarea técnica** en nuestro backlog de Notion. Algo como: "Investigar y desarrollar script para la configuración automática de credenciales OAuth en GCP". Así, podemos asignarle una prioridad y abordarla cuando tengamos un ciclo de desarrollo dedicado a mejorar nuestra infraestructura interna.

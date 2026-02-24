# Prueba Técnica QA: Cypress E2E & API

## Descripción General
Este proyecto contiene pruebas automatizadas E2E y API utilizando Cypress.io. El objetivo es validar flujos funcionales y la integridad de datos en aplicaciones web y servicios REST, aplicando buenas prácticas de automatización y diseño.

## Tecnologías Utilizadas
- Cypress.io (v13.0.0)
- JavaScript ES6
- Node.js

## Instalación
1. Clona el repositorio o descarga el proyecto.
2. Instala dependencias:
   ```
   npm install
   ```

## Ejecución de Pruebas
- **Abrir Cypress UI:**
  ```
  npm run cy:open
  ```
- **Ejecutar pruebas E2E (SauceDemo):**
  ```
  npm run test:e2e
  ```
- **Ejecutar pruebas API (PetStore):**
  ```
  npm run test:api
  ```
- **Ejecutar todas las pruebas:**
  ```
  npm run test:all
  ```

## Estructura del Proyecto
- `cypress/e2e/`: Pruebas E2E y API
  - `saucedemo.cy.js`: Flujo de compra en SauceDemo
  - `api_petstore.cy.js`: Ciclo de vida de recursos en PetStore
- `cypress/pages/`: Page Objects para interacción con elementos web
- `cypress/fixtures/`: Datos de entrada externos (JSON)
- `cypress/support/`: Comandos personalizados y configuración
- `cypress.config.js`: Configuración de Cypress
- `conclusiones.txt`: Hallazgos, retos y recomendaciones

## Estrategia de Pruebas
- **E2E:** Validación del flujo completo de compra en SauceDemo, desde login hasta checkout, usando Page Object Pattern y selectores robustos.
- **API:** Validación dinámica del ciclo de vida de un recurso en PetStore (POST, GET, PUT), asegurando independencia y reutilización de datos.
- **Datos externos:** Uso de fixtures para mejorar mantenibilidad.
- **Principios SOLID:** Separación de responsabilidades y fácil extensión.

## Cobertura y Alcance
- Flujos principales de negocio cubiertos.
- Validaciones de estados, mensajes y datos retornados.
- Tests independientes y reutilizables.

## Posibles Mejoras
- Integrar reportes automáticos y métricas de cobertura.
- Añadir pruebas negativas y edge cases.
- Expandir cobertura a otros endpoints y flujos.

## Autor
Wilson Oña
---
Para dudas o sugerencias, consulta el archivo `conclusiones.txt`.

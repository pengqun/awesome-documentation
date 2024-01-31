<!--lint ignore awesome-git-repo-age-->

# Awesome Documentation [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Awesome Lint](https://github.com/pengqun/awesome-documentation/actions/workflows/action.yml/badge.svg)](https://github.com/pengqun/awesome-documentation/actions/workflows/action.yml)

> A curated list of resources on software documentation tools, standards, and best practices.

Software documentation is crucial for ensuring clarity and efficiency throughout the development process. It serves as a comprehensive guide, facilitating better understanding and collaboration among team members.

However, for various reasons, the process of creating software documentation has frequently been mishandled, resulting in inefficiency, inconsistency, and poor quality.

This list aims to assist by providing you with practical tools to maximize efficiency, established standards to ensure consistency, and best practices to enhance quality.

## Contents

- [Architecture](#architecture)
- [API](#api)
- [README](#readme)
- [Wiki](#wiki)
- [Universal](#universal)
- [Contributing](#contributing)

## Architecture

> _"Architecture is about the important stuff. Whatever that is."  — Ralph Johnson_

### Templates

- [arc42](https://arc42.org/) - Proven, **practical and pragmatic** template for documentation and communication of software and system architectures.

### Diagramming

- [C4 model](https://c4model.com) - The C4 model for visualizing software architecture using **Context**, **Containers**, **Components**, and **Code**.

### Articles

- [\[Chinese\] Architecture Diagramming: Tools and Methodologies \(架构制图 - 工具与方法论\)](https://developer.aliyun.com/article/774446) - The article discusses the benefits of using diagrams in architecture design, and highlights some standards and best practices, including UML,  C4, and arc42.

## API

API is the univesal language of the software world, which needs to be document well.

### OpenAPI

The [OpenAPI Specification]((https://swagger.io/specification/)) (OAS) defines a standard, language-agnostic interface to HTTP APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection.

- Tools (Open Source)
  - [Swagger UI](https://github.com/swagger-api/swagger-ui) - Dynamically **generate beautiful documentation** from a Swagger-compliant API
  - [Swagger Editor](https://github.com/swagger-api/swagger-editor) - Edit OpenAPI API definition in JSON or YAML format inside your browser and to **preview documentations in real time**.

- Examples
  - [Swagger Petstore](https://petstore3.swagger.io/) - a sample Pet Store Server based on the OpenAPI 3.0 specification. 

### AsyncAPI

The [AsyncAPI Specification](https://www.asyncapi.com/docs/reference/specification/v3.0.0) is a project used to describe message-driven APIs in a machine-readable format. It’s protocol-agnostic, so you can use it for APIs that work over any protocol (e.g., AMQP, MQTT, WebSockets, Kafka, STOMP, HTTP, Mercure, etc).

- Tools (Open Source)
  - [Async API Generator](https://github.com/asyncapi/generator) - Use AsyncAPI definition to generate literally anything, including **Markdown documentation** and **HTML documentation**.
  - [AsyncAPI React Component](https://github.com/asyncapi/asyncapi-react) - **Rendering documentation** from your specification in real-time in the browser.

- Examples
  - [Petstore Kafka](https://github.com/swagger-api/petstore-kafka?tab=readme-ov-file#openapi-and-asyncapi) - A functional example for describing with AsyncAPI and OpenAPI.

### RAML

[RAML](https://raml.org/) enables rapid development of APIs using an approachable syntax which can scale from hobby project to enterprise application.

- Tools (Open Source)
  - [API Console](https://github.com/mulesoft/api-console) - An **interactive** REST console based on RAML/OAS files.
  - [RAML to HTML](https://github.com/raml2html/raml2html) - A simple RAML to **HTML documentation generator**, written for Node.js, with theme support.
- Examples
  - [World Music API](https://rawgit.com/raml2html/default-theme/master/examples/world-music-api.html) - A live example using RAML to HTML documentation generator.

## README

A README document is like a map for a treasure hunt; without it, you're just digging around in the code hoping to strike gold.

### Templates

- [othneildrew/Best-README-Template](https://github.com/othneildrew/Best-README-Template) - An awesome README template to jumpstart your projects.

### Other Resources

- [matiassingers/awesome-readme](https://github.com/matiassingers/awesome-readme#readme) - A curated list of awesome READMEs, including **examples**, **articles** and **tools**.

## Wiki

A wiki can be used to create a centralized and collaborative knowledge base for a project.

### GitHub Wiki

- [MyHoneyBadger/awesome-github-wiki](https://github.com/MyHoneyBadger/awesome-github-wiki) - A curated list of awesome GitHub Wikis, including examples, tips and tricks.

## Universal

### Diagramming

- [draw.io](https://github.com/jgraph/drawio) (Open Source) - A JavaScript, client-side editor for general diagramming.

## Contributing

Please feel invited to do any [contribution](CONTRIBUTING.md).

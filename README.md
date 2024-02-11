<!--lint ignore awesome-git-repo-age-->
<!--
TODO:
- Script to add GitHub stars badge for repo link automatically
- Auto generate/update translated version of edits (VS Code plugin + ChatGPT?) 
-->

# Awesome Documentation [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Lint](https://github.com/pengqun/awesome-documentation/actions/workflows/action.yml/badge.svg)](https://github.com/pengqun/awesome-documentation/actions/workflows/action.yml)

Translations available in: [🇨🇳 中文](README_zh.md)

> A curated and **up-to-date** list of resources on software documentation templates, tools, guides & examples.

Software documentation is crucial for ensuring clarity and efficiency throughout the development process, by facilitating better understanding and collaboration among team members. However, for various reasons, the creation and maintenance of documentation has frequently been mishandled, resulting in lots of inefficiency, inconsistency, and poor quality.

This list aims to assist by providing you with out-of-box templates and practical tools to maximize efficiency, insightful guides and established standards to ensure consistency, and real-world documents to serve as examples.

## Contents

- [Documentation Types](#documentation-types)
  - [User Documentation](#user-documentation)
  - [Architectural Documentation](#architectural-documentation)
  - [API Documentation](#api-documentation)
  - [Code Documentation](#code-documentation)
  - [Test Documentation](#test-documentation)
  - [Other Types](#other-types)
- [General Tools](#general-tools)
  - [Site Builder](#site-builder)
  - [Wiki Builder](#wiki-builder)
  - [Diagramming tools](#diagramming-tools)
- [More Topics](#more-topics)
  - [Comunities](#comunities)
  - [Guidelines](#guidelines)
  - [Examples](#examples)
  - [Formats](#formats)
  - [DocOps](#docops)
  - [Localization](#localization)

## Documentation Types

### User Documentation

> It doesn't matter how good your product is, because if its documentation is not good enough, people will not use it. -  [The Documentation System](https://documentation.divio.com/introduction.html)

#### Tutorial

Step-by-step instructions to teach users how to use or implement the subject or tool.

- [Tutorial](https://documentation.divio.com/tutorials.html) - Lean how to write good tutorials from The Documentation System.
- [Tutorial template](https://gitlab.com/tgdp/templates/-/blob/main/tutorial/template-tutorial.md) - Open-source template provided by The Good Docs Project.
- [Writing a perfect technical tutorial](https://www.writethedocs.org/videos/portland/2021/writing-a-perfect-technical-tutorial-jessica-garson/) - How to start creating tutorials, gather feedback, and the next steps once the tutorial is published.

#### Reference

Provides detailed information and specifications for all features and functionalities.

- [Reference guides](https://documentation.divio.com/reference.html) - Lean how to write good reference guides from The Documentation System.
- [Reference template](https://gitlab.com/tgdp/templates/-/blob/main/reference/template-reference.md) - Open-source template provided by The Good Docs Project.
- [SDK Reference Manuals: A flow-based approach](https://www.writethedocs.org/videos/portland/2019/sdk-reference-manuals-a-flow-based-approach-chris-bush/) - Give users of SDK reference docs a quick, enjoyable, user-oriented experience.

#### How-to

Offers practical steps to accomplish specific tasks or solve common problems.

- [How-to guides](https://documentation.divio.com/how-to-guides.html) - Learn how to write good how-to guides from The Documentation System.
- [How-to template](https://gitlab.com/tgdp/templates/-/blob/main/how-to/template-how-to.md) - Open-source template provided by The Good Docs Project.

#### Conecpt

Explains the fundamental ideas and theories behind the topic.

- [Concept template](https://gitlab.com/tgdp/templates/-/blob/main/concept/template-concept.md) - Open-source template provided by The Good Docs Project.
- [Explanation](https://documentation.divio.com/explanation.html) - Learn how to write a good explanation from The Documentation System.

#### FAQ

Answers frequently asked questions to quickly resolve common issues or clarify typical misunderstandings.

- [The Facts About FAQs](https://www.writethedocs.org/videos/portland/2018/the-facts-about-faqs-ashleigh-rentz/) - Explore various questions we might frequently ask ourselves about FAQs.

#### Others

- [Installation template](https://gitlab.com/tgdp/templates/-/blob/main/installation-guide/template-installation-guide.md) - Open-source template provided by The Good Docs Project.
- [Troubleshooting template](https://gitlab.com/tgdp/templates/-/tree/main/troubleshooting) - Open-source template provided by The Good Docs Project.
- [Terminology system guide template](https://gitlab.com/tgdp/templates/-/blob/main/terminology-system/guide-terminology-system.md) - Open-source template provided by The Good Docs Project.
- [Release Notes template](https://gitlab.com/tgdp/templates/-/blob/main/release-notes/template-release-notes.md) - Open-source template provided by The Good Docs Project.
- [The Power of Empathy in Support Documentation: A 5-Step Guide](https://www.writethedocs.org/videos/prague/2019/the-power-of-empathy-in-support-documentation-a-5-step-guide-plamena-maleva/) - Apply empathy and iteration to customer support documentation projects.
- In-App Documentation - Wizards, tooltips, etc.

### Architectural Documentation

> _"Architecture is about the important stuff. Whatever that is."  — Ralph Johnson_

- [arc42](https://arc42.org/) - Proven, practical and pragmatic template for documentation and communication of software and system architectures.
  - [Template Download](https://arc42.org/download#format-overview) - The arc42 template in various formats, including docx, asciidoc, markdown, latex, rst, html, Confluence, etc.
  - [Example: HTML Sanity Checker](https://hsc.aim42.org/documentation/hsc_arc42) - Verbose example for the documentation of a Gradle plugin, created by Dr. Gernot Starke.
  - [Example: biking](https://biking.michael-simons.eu/docs/index.html) - A real world example for a bike activity tracker, created by Michael Simons.
  - [Example: arc42 + C4 model](https://github.com/bitsmuggler/arc42-c4-software-architecture-documentation-example) - Shows how to use arc42 in combination with the C4 model with the Documentation as Code technique.
  - [docToolchain](https://github.com/doctoolchain/doctoolchainb) - An implementation of the docs-as-code approach for software architecture, which use arc42 as template.
  - [The Ultimate Guide To Software Architecture Documentation](https://www.workingsoftware.dev/software-architecture-documentation-the-ultimate-guide/) - Write, structure, visualize and manage software architecture documentation in a lean way using appropriate documentation tools, including arc42.

- [C4 model](https://c4model.com) - The C4 model for visualizing software architecture using Context, Containers, Components, and Code.
  - [c4-draw.io](https://github.com/tobiashochguertel/c4-draw.io) - A C4 Modelling plugin for draw.io, which provides C4 Notation Elements in draw.io.
  - [C4-PlantUML](https://github.com/plantuml-stdlib/C4-PlantUML) - Includes macros, stereotypes, and other goodies (like VSCode Snippets) for creating C4 diagrams with PlantUML.
  - [C4 Diagrams | Mermaid](https://mermaid.js.org/syntax/c4.html) - Mermaid's C4 diagram syntax is compatible with plantUML.
  - [Structurizr](https://github.com/structurizr) - C4 models as code - visualise and document your software architecture with the C4 model.
  - [C4-Builder](https://github.com/adrianvlupu/C4-Builder) - A lightweight Node.js cli tool for building, maintaining and sharing a software architecture project using only text.
  - [C4Sharp](https://github.com/8T4/c4sharp) - A .net library for building diagrams as code, based on C4 Model.
  - [Goa Design - Model](https://github.com/goadesign/model) - Create your software architecture models and diagrams in Go. The Model DSL is implemented in Go and follows the C4 Model.

- Specification

- White Paper

### API Documentation

API is the univesal language of the software world, which needs to be documented well.

#### General

- [API Reference template](https://gitlab.com/tgdp/templates/-/blob/main/api-reference/template-api-reference.md) - Open-source template provided by The Good Docs Project.
- [Slate](https://github.com/slatedocs/slate) - Beautiful static documentation for your API.
- [DevDocs](https://github.com/freeCodeCamp/devdocs) - Combines multiple developer documentations in a clean and organized web UI with instant search, offline support, mobile version, dark theme, keyboard shortcuts, and more.
- [Zeal](https://github.com/zealdocs/zeal) - Offline documentation browser inspired by Dash.
- [apiDoc](https://github.com/apidoc/apidoc) - RESTful web API Documentation Generator.

#### OpenAPI

[OpenAPI Specification](https://swagger.io/specification/) defines a standard, language-agnostic interface to HTTP APIs. An OpenAPI definition can then be used by documentation generation tools to display the API.

- [Swagger UI](https://github.com/swagger-api/swagger-ui) - Dynamically generate beautiful documentation from a Swagger-compliant API.
- [Swagger Petstore](https://petstore3.swagger.io/) - A sample Pet Store Server based on the OpenAPI 3.0 specification.
- [Redoc](https://github.com/Redocly/redoc) - An open source tool for generating documentation from OpenAPI (formerly Swagger) definitions.

#### GraphQL

[GraphQL](https://graphql.org/) is a query language for APIs, which provides a complete and understandable description of the data in your API.

- [GitHub GraphQL API documentation](https://docs.github.com/en/graphql) - A great real world example of GraphQL API from GitHub.
- [SpectaQL](https://github.com/anvilco/spectaql) - A Node.js library that generates static documentation for a GraphQL schema.
- [GraphQLDocs](https://github.com/brettchalupa/graphql-docs) - Ruby library and CLI for easily generating beautiful documentation from your GraphQL schema.
- [Magidoc](https://github.com/magidoc-org/magidoc) - A  a JavaScript library that auto-generates static documentation from any GraphQL schema.

#### gRPC

[gRPC](https://grpc.io/) is a modern open source high performance Remote Procedure Call (RPC) framework.

- [protoc-gen-doc](https://github.com/pseudomuto/protoc-gen-doc) - Generate HTML, JSON, DocBook, and Markdown documentation from comments in your .proto files.
  - [Example](https://rawgit.com/pseudomuto/protoc-gen-doc/master/examples/doc/example.html) - A sample HTML documentation generated by protoc-gen-doc.
- [Sabledocs](https://github.com/markvincze/sabledocs) - A simple static documentation generator for Protobuf and gRPC contracts.
  - [Example](https://markvincze.github.io/sabledocs/demo/) - A sample documentation created with sabledocs, from parts of the Protobuf contracts of the Google Cloud SDK.

#### AsyncAPI

[AsyncAPI Specification](https://www.asyncapi.com/docs/reference/specification/v3.0.0) is a project used to describe message-driven APIs in a machine-readable format, which can also be used to generate API documents.

- [Async API Generator](https://github.com/asyncapi/generator) - Use AsyncAPI definition to generate literally anything, including Markdown documentation and HTML documentation.
- [AsyncAPI React Component](https://github.com/asyncapi/asyncapi-react) - Rendering documentation from your specification in real-time in the browser.
- [Petstore Kafka](https://github.com/swagger-api/petstore-kafka?tab=readme-ov-file#openapi-and-asyncapi) - A functional example for describing with AsyncAPI and OpenAPI.

#### RAML

[RAML Specification](https://github.com/raml-org/raml-spec/blob/master/versions/raml-10/raml-10.md/) provides mechanisms for defining practically-RESTful APIs, creating client/server source code, and comprehensively documenting the APIs for users.

- [API Console](https://github.com/mulesoft/api-console) - An interactive REST console based on RAML/OAS files.
- [RAML to HTML](https://github.com/raml2html/raml2html) - A simple RAML to HTML documentation generator, written for Node.js, with theme support.
- [World Music API](https://rawgit.com/raml2html/default-theme/master/examples/world-music-api.html) - A live example using RAML to HTML documentation generator.

### Code Documentation

#### README

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template) - An awesome README template to jumpstart your projects.
- [Awesome README](https://github.com/matiassingers/awesome-readme) - A curated list of awesome READMEs, including examples, articles and tools.
- [README template](https://gitlab.com/tgdp/templates/-/blob/main/readme/template-readme.md) - Open-source template provided by The Good Docs Project.

#### Comments

> “Code Tells You How, Comments Tell You Why.” — [Jeff Atwood](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/)

#### Error Messages

- [101 to 404s: How to write great error messages](https://www.writethedocs.org/videos/prague/2019/101-to-404s-how-to-write-great-error-messages-james-scott/) - Even the shortest error message can evoke far stronger, negative emotions in your end users than the majority of your documentation.

#### Collaboration

- [CONTRIBUTING template](https://gitlab.com/tgdp/templates/-/blob/main/contributing-guide/template-contributing-guide.md) - Open-source template provided by The Good Docs Project.
- [Code Of Conduct template](https://gitlab.com/tgdp/templates/-/tree/main/code-of-conduct) - Open-source template provided by The Good Docs Project.
- [Style guide template](https://gitlab.com/tgdp/templates/-/blob/main/style-guide/template-style-guide.md) - Open-source template provided by The Good Docs Project.
- License

#### Language-specific

- JavaScript
  - [JSDoc](https://github.com/jsdoc/jsdoc) - An API documentation generator for JavaScript.
  - [documentation.js](https://github.com/documentationjs/documentation) - The documentation system for modern JavaScript.
- TypeScript
  - [TSDoc](https://github.com/microsoft/tsdoc) - A doc comment standard for TypeScript.
- Python
  - [Docstring Conventions](https://peps.python.org/pep-0257/) - This PEP documents the semantics and conventions associated with Python docstrings.
  - [Comments and Docstrings](https://github.com/google/styleguide/blob/gh-pages/pyguide.md#38-comments-and-docstrings) - From Google Python Style Guide.
  - [Documenting Python Code: A Complete Guide](https://realpython.com/documenting-python-code/#commenting-vs-documenting-code) - Covering differences between commenting and documenting, use of docstrings, and guidelines for documenting Python projects.
- PHP
  - [phpDocumentor](https://github.com/phpDocumentor/phpDocumentor) - The de-facto documentation tool for PHP projects, offering a robust solution for generating comprehensive documentation effortlessly.
- C#
  - [Docfx](https://github.com/dotnet/docfx) - Static site generator for .NET API documentation.
- C++
  - [Doxygen](https://github.com/doxygen/doxygen) - The de facto standard tool for generating documentation from annotated C++ sources.
- Java
  - [JavaDoc](https://en.wikipedia.org/wiki/Javadoc) - A documentation generator created by Sun Microsystems for the Java language (now owned by Oracle Corporation) for generating API documentation in HTML format from Java source code.
    - [Maven Javadoc Plugin](https://github.com/apache/maven-javadoc-plugin) - Uses the Javadoc tool to generate javadocs for the specified project.
    - [javadoc.io](https://javadoc.io/) - A free service that indexes and serves JavaDoc for Maven Central.
- Kotlin
  - [Dokka](https://github.com/Kotlin/dokka) - An API documentation engine for Kotlin.
- Go
  - [Go Doc Comments](https://go.dev/doc/comment) - Extract documentation from Go source code.
  - [Swag](https://github.com/swaggo/swag) - Cconverts Go annotations to Swagger Documentation 2.0.
- Rust
  - [Rustdoc](https://doc.rust-lang.org/nightly/rustdoc/) - Generate documentation for Rust projects.
  - [Docs.rs](https://github.com/rust-lang/docs.rs) - An open source project to host documentation of crates for the Rust Programming Language.
- Ruby
  - [TomDoc for Ruby](http://tomdoc.org/) - A code documentation specification that helps you write precise documentation that is nice to read in plain text, yet structured enough to be automatically extracted and processed by a machine.
- Perl
  - [perlpod](https://perldoc.perl.org/perlpod) - The Plain Old Documentation format - a simple-to-use markup language used for writing documentation for Perl, Perl programs, and Perl modules.
- SQL
  - [SchemaSpy](https://github.com/schemaspy/schemaspy) - Document your database simply and easily.
- CSS
  - [Knyle Style Sheets](https://github.com/kneath/kss) ![GitHub Repo stars](https://img.shields.io/github/stars/kneath/kss) - A methodology for documenting CSS and generating styleguides.
  - [Hologram](https://github.com/trulia/hologram) ![GitHub Repo stars](https://img.shields.io/github/stars/trulia/hologram) - A Ruby gem that parses comments in your CSS and turns them into a beautiful styleguide.

### Test Documentation

- Test Plans
- Test Cases
- Test Report
- [Bug report template](https://gitlab.com/tgdp/templates/-/blob/main/bug-report/template-bug-report.md) - Open-source template provided by The Good Docs Project.
- Coverage
- Performance

### Other Types

- Project Requirements Documentation (PRD)
- RFC (Request for Comment)

## General Tools

### Site Builder

- [Docusaurus](https://github.com/facebook/docusaurus) ![GitHub Repo stars](https://img.shields.io/github/stars/facebook/docusaurus) - A project for building, deploying, and maintaining open source project websites easily.
- [Docsify](https://github.com/docsifyjs/docsify) ![GitHub Repo stars](https://img.shields.io/github/stars/docsifyjs/docsify) - A magical documentation site generator.
- [MkDocs](https://github.com/mkdocs/mkdocs) ![GitHub Repo stars](https://img.shields.io/github/stars/mkdocs/mkdocs) - A fast, simple and downright gorgeous static site generator that's geared towards building project documentation.
- [Sphinx](https://github.com/sphinx-doc/sphinx) ![GitHub Repo stars](https://img.shields.io/github/stars/sphinx-doc/sphinx) - Make it easy to create intelligent and beautiful documentation.
  - [Read the Docs](https://about.readthedocs.com/) - Hosts documentation for the open source community, which supports Sphinx docs written with reStructuredText.
- [Starlight](https://github.com/withastro/starlight) ![GitHub Repo stars](https://img.shields.io/github/stars/withastro/starlight) - Build beautiful, accessible, high-performance documentation websites with Astro.
- [Docco](https://github.com/jashkenas/docco) ![GitHub Repo stars](https://img.shields.io/github/stars/jashkenas/docco) - A quick-and-dirty, hundred-line-long, literate-programming-style documentation generator.
- [bookdown](https://github.com/rstudio/bookdown) ![GitHub Repo stars](https://img.shields.io/github/stars/rstudio/bookdown) - Authoring Books and Technical Documents with R Markdown.

### Wiki Builder

- [Wiki.js](https://github.com/Requarks/wiki) - A modern and powerful wiki app built on Node.js.
- [MediaWiki](https://github.com/wikimedia/mediawiki) - A free and open-source wiki software package written in PHP. It serves as the platform for Wikipedia and the other Wikimedia projects.
- [DokuWiki](https://github.com/dokuwiki/dokuwiki) - A simple to use and highly versatile Open Source wiki software that doesn't require a database.
- [Gollum](https://github.com/gollum/gollum) - A simple wiki system built on top of Git.
- [VimWiki](https://github.com/vimwiki/vimwiki) - A a personal wiki for Vim, which can be used to write documentation.
- [GitHub Wiki](https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis)
  - [Awesome GitHub Wikis](https://github.com/MyHoneyBadger/awesome-github-wiki) - A curated list of awesome GitHub Wikis, including examples, tips and tricks.
- [Federated Wiki](https://www.wikiwand.com/en/Federated_Wiki)
  - [The Federated Wiki](https://www.writethedocs.org/videos/na/2015/keynote-the-federated-wiki-ward-cunningham/) - Use federation to ease sharing, by Ward Cunningham.
  - [Node.js server version](https://github.com/fedwiki/wiki) - Federated Wiki node server as npm package.

### Diagramming tools

- [draw.io](https://github.com/jgraph/drawio) (Open Source) - A JavaScript, client-side editor for general diagramming.
- [(Chinese) Architecture Diagramming: Tools and Methodologies](https://developer.aliyun.com/article/774446) - It discusses the benefits of using diagrams in architecture document, and highlights some standards and best practices.

## More Topics

### Comunities

- [Write the Docs](https://www.writethedocs.org/) - A global community of people who care about documentation.
- [The Good Docs Project](https://gitlab.com/tgdp) - Educates and empowers people to create high-quality documentation.

### Guidelines

- [Google developer documentation style guide](https://developers.google.com/style/highlights) - Provides editorial guidelines for writing clear and consistent Google-related developer documentation.
- [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) - If you write about computer technology, this guide is for you.
- [Series: Writing Great Documentation](https://jacobian.org/series/great-documentation/) - A series of articles laying out the tools, tips, and techniques author learned over the years he've spent helping to write Django's docs.

### Examples

- [Beautiful Docs](https://github.com/matheusfelipeog/beautiful-docs.git) - Pointers to useful, well-written, and otherwise beautiful documentation.
- [Awesome Open Source Documents](https://github.com/44bits/awesome-opensource-documents) - A curated list of awesome open source or open source licensed documents, guides, books.

### Formats

- Markdown - A lightweight markup language for producing HTML.
- [AsciiDoc](https://asciidoc.org) - A plain text markup language for writing technical content.
  - [Asciidoctor](https://github.com/asciidoctor/asciidoctor) - A fast, open source, Ruby-based text processor for parsing AsciiDoc® into a document model and converting it to output formats such as HTML 5, DocBook 5, manual pages, PDF, EPUB 3, and other formats.
- [reStructuredText](https://www.sphinx-doc.org/en/master/usage/restructuredtext/index.html) - The default plaintext markup language used by Sphinx.
- DocBook - an XML schema for writing books and manuals about technical subjects.
- [LaTeX](https://www.latex-project.org/) - A document preparation system.
- [Pandoc](https://pandoc.org/) - A universal document converter, which can convert files from one markup format into another.

### DocOps

- [DocOps Collection](https://doctoolhub.com/collection/docops/) - These articles offer an introduction to the concept of DocOps.
- [What is DocOps, anyway?](https://www.writethedocs.org/guide/doc-ops/) - Awesome article from Write the Docs community.
- [Docs as Code](https://www.writethedocs.org/guide/docs-as-code/) - Awesome article from Write the Docs community.
- [DocOps Lab](https://github.com/DocOps) - A platform for collaboratively developing and exploring docs-as-code infrastructure, automation, workflows, etc.
- [What is Continuous Documentation? The manifesto](https://swimm.io/blog/what-is-continuous-documentation-manifesto-part-1)
- [Shifting to Continuous Documentation as a New Approach for Code Knowledge](https://www.infoq.com/articles/continuous-documentation/)

### Localization

- [Localize the Docs](https://www.writethedocs.org/videos/portland/2019/localize-the-docs-paul-wallace/) - Awesome video from Write the Docs community.
- [Found in Translation: Lessons from a Year of Open Source Localization](https://www.writethedocs.org/videos/prague/2019/found-in-translation-lessons-from-a-year-of-open-source-localization-zachary-sarah-corleissen/) - Awesome video from Write the Docs community.

<!-- ### Accessibility -->

## Contributing

Please feel invited to do any [contribution](CONTRIBUTING.md).

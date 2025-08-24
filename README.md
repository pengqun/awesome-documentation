<!--
TODO:
  - VS Code markdown plugin to add GitHub stars badge for repo link automatically
  - Auto generate/update translated version of edits (VS Code plugin + ChatGPT?)
-->

# Awesome Documentation [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Lint](https://github.com/pengqun/awesome-documentation/actions/workflows/action.yml/badge.svg)](https://github.com/pengqun/awesome-documentation/actions/workflows/action.yml)

> A curated and **up-to-date** list of resources on software documentation templates, tools, guides & examples.

Software documentation is critical to ensuring clarity and efficiency throughout the development process by facilitating better understanding and collaboration among team members. However, for a variety of reasons, the creation and maintenance of documentation has often been mismanaged, resulting in inefficiency, inconsistency, and poor quality.

This list aims to help by providing you with out-of-the-box templates and practical tools to maximize efficiency, insightful guides and established standards to ensure consistency, and real-world documents to serve as examples.

Translations available in: [🇨🇳 中文](README_zh.md)

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
  - [Knowledge Base](#knowledge-base)
  - [AI-powered Tools](#ai-powered-tools)
  - [Checker \& Formatter](#checker--formatter)
  - [Diagramming](#diagramming)
  - [Multimedia](#multimedia)
  - [Commercial](#commercial)
- [More Topics](#more-topics)
  - [Communities](#communities)
  - [Examples](#examples)
  - [Formats](#formats)
  - [Guidelines](#guidelines)
  - [Books](#books)
  - [Courses](#courses)
  - [DocOps](#docops)
  - [Localization](#localization)
  - [Accessibility](#accessibility)
  - [SEO](#seo)

## Documentation Types

### User Documentation

> _"It doesn't matter how good your product is, because if its documentation is not good enough, people will not use it."_ -  [The Documentation System](https://documentation.divio.com/introduction.html)

#### Tutorial

Step-by-step instructions to teach users how to use or implement the subject or tool.

- [Tutorial](https://documentation.divio.com/tutorials.html) - Lean how to write good tutorials from The Documentation System.
- [Tutorial template](https://gitlab.com/tgdp/templates/-/blob/main/tutorial/template-tutorial.md) - Open-source template provided by The Good Docs Project.
- [Writing a perfect technical tutorial](https://www.writethedocs.org/videos/portland/2021/writing-a-perfect-technical-tutorial-jessica-garson/) - How to start creating tutorials, gather feedback, and the next steps once the tutorial is published.
- [Example: Build your first Astro Blog](https://docs.astro.build/en/tutorial/0-introduction/) - A well-structured and good-looking tutorial that covers Astro's key features by building a fully-functioning blog, from zero to full launch.

#### Reference

Provides detailed information and specifications for all features and functionalities.

- [Reference guides](https://documentation.divio.com/reference.html) - Lean how to write good reference guides from The Documentation System.
- [Reference template](https://gitlab.com/tgdp/templates/-/blob/main/reference/template-reference.md) - Open-source template provided by The Good Docs Project.
- [SDK Reference Manuals: A flow-based approach](https://www.writethedocs.org/videos/portland/2019/sdk-reference-manuals-a-flow-based-approach-chris-bush/) - Give users of SDK reference docs a quick, enjoyable, user-oriented experience.

#### How-to

Offers practical steps to accomplish specific tasks or solve common problems.

- [How-to guides](https://documentation.divio.com/how-to-guides.html) - Learn how to write good how-to guides from The Documentation System.
- [How-to template](https://gitlab.com/tgdp/templates/-/blob/main/how-to/template-how-to.md) - Open-source template provided by The Good Docs Project.

#### Concept

Explains the fundamental ideas and theories behind the topic.

- [Concept template](https://gitlab.com/tgdp/templates/-/blob/main/concept/template-concept.md) - Open-source template provided by The Good Docs Project.
- [Explanation](https://documentation.divio.com/explanation.html) - Learn how to write a good explanation from The Documentation System.

#### FAQ

Answers frequently asked questions to quickly resolve common issues or clarify typical misunderstandings.

- [The Facts About FAQs](https://www.writethedocs.org/videos/portland/2018/the-facts-about-faqs-ashleigh-rentz/) - Explore various questions we might frequently ask ourselves about FAQs.

#### In-app Documentation

Assist users in understanding and navigating the features and functionalities of the app directly from within its interface.

- [Driver.js](https://github.com/kamranahmedse/driver.js) - A light-weight, no-dependency, vanilla JavaScript engine to drive the user's focus across the page.
- [Shepherd](https://github.com/shepherd-pro/shepherd) - Guide your users through a tour of your app.

#### Others

- [Installation template](https://gitlab.com/tgdp/templates/-/blob/main/installation-guide/template-installation-guide.md) - Open-source template provided by The Good Docs Project.
- [Troubleshooting template](https://gitlab.com/tgdp/templates/-/tree/main/troubleshooting) - Open-source template provided by The Good Docs Project.
- [Terminology system guide template](https://gitlab.com/tgdp/templates/-/blob/main/terminology-system/guide-terminology-system.md) - Open-source template provided by The Good Docs Project.
- [Release Notes template](https://gitlab.com/tgdp/templates/-/blob/main/release-notes/template-release-notes.md) - Open-source template provided by The Good Docs Project.
- [The Power of Empathy in Support Documentation: A 5-Step Guide](https://www.writethedocs.org/videos/prague/2019/the-power-of-empathy-in-support-documentation-a-5-step-guide-plamena-maleva/) - Apply empathy and iteration to customer support documentation projects.

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

- [Log4brains](https://github.com/thomvaill/log4brains) - Log Architecture Decision Records (ADR) right from your IDE and to publish them automatically as a static website.
- [Design Docs at Google](https://www.industrialempathy.com/posts/design-docs-at-google/) - Overview of how software design docs are used and written at Google.

### API Documentation

> _"All teams will henceforth expose their data and functionality through service interfaces."_ - [The Bezos API Mandate](https://nordicapis.com/the-bezos-api-mandate-amazons-manifesto-for-externalization/)

#### General

- [API Reference template](https://gitlab.com/tgdp/templates/-/blob/main/api-reference/template-api-reference.md) - Open-source template provided by The Good Docs Project.
- [Slate](https://github.com/slatedocs/slate) - Beautiful static documentation for your API.
  - [Widdershins](https://github.com/Mermade/widdershins) - OpenAPI / Swagger / AsyncAPI / Semoasa definition to Slate / ReSlate compatible markdown.
- [DevDocs](https://github.com/freeCodeCamp/devdocs) - Combines multiple developer documentations in a clean and organized web UI with instant search, offline support, mobile version, dark theme, keyboard shortcuts, and more.
- [Zeal](https://github.com/zealdocs/zeal) - Offline documentation browser inspired by Dash.
- [apiDoc](https://github.com/apidoc/apidoc) - RESTful web API Documentation Generator.

#### OpenAPI

[OpenAPI Specification](https://swagger.io/specification/) defines a standard, language-agnostic interface to HTTP APIs. An OpenAPI definition can then be used by documentation generation tools to display the API.

- [Swagger UI](https://github.com/swagger-api/swagger-ui) - Dynamically generate beautiful documentation from a Swagger-compliant API.
- [Swagger Petstore](https://petstore3.swagger.io/) - A sample Pet Store Server based on the OpenAPI 3.0 specification.
- [Redoc](https://github.com/Redocly/redoc) - An open source tool for generating documentation from OpenAPI (formerly Swagger) definitions.
- [RapiDoc](https://github.com/rapi-doc/RapiDoc) - WebComponent Custom Element for OpenAPI Spec viewing.
- [Fern](https://github.com/fern-api/fern) - Generate SDKs and API documentation from OpenAPI definitions.
- [Elements](https://github.com/stoplightio/elements) - Beautiful API documentation powered by OpenAPI and Markdown.
- [Scalar](https://github.com/scalar/scalar) - Generate interactive API documentations from Swagger files.
- [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) - Generate API client libraries (SDK generation), server stubs, documentation and configuration automatically given an OpenAPI Spec (v2, v3).
- [GitBook](https://github.com/GitbookIO/gitbook) - A modern platform for creating and managing interactive API documentation from OpenAPI definitions.
- [xyd](https://xyd.dev/docs/guides/openapi) - Generate scalable API Docs from OpenAPI definitions easier.

#### GraphQL

[GraphQL](https://graphql.org/) is a query language for APIs, which provides a complete and understandable description of the data in your API.

- [GitHub GraphQL API documentation](https://docs.github.com/en/graphql) - A great real world example of GraphQL API from GitHub.
- [SpectaQL](https://github.com/anvilco/spectaql) - A Node.js library that generates static documentation for a GraphQL schema.
- [GraphQLDocs](https://github.com/brettchalupa/graphql-docs) - Ruby library and CLI for easily generating beautiful documentation from your GraphQL schema.
- [Magidoc](https://github.com/magidoc-org/magidoc) - A  a JavaScript library that auto-generates static documentation from any GraphQL schema.
- [xyd](https://xyd.dev/docs/guides/graphql) - Generate scalable API Docs from GraphQL schema easier.

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

README files are a staple of any code project. They provide the first introduction to a new codebase and help you share important project details with collaborators.

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template) - An awesome README template to jumpstart your projects.
- [Awesome README](https://github.com/matiassingers/awesome-readme) - A curated list of awesome READMEs, including examples, articles and tools.
- [README template](https://gitlab.com/tgdp/templates/-/blob/main/readme/template-readme.md) - Open-source template provided by The Good Docs Project.
- [readme.so](https://github.com/octokatherine/readme.so) - An online drag-and-drop editor to easily build READMEs.

#### Comments

> _“Code Tells You How, Comments Tell You Why.”_ — [Jeff Atwood](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/)

- [Best practices for writing code comments](https://stackoverflow.blog/2021/12/23/best-practices-for-writing-code-comments/) - 9 rules to help you write better comments, providing examples and explaining how and when to apply them.
- [The Engineer's Guide to Writing Meaningful Code Comments](https://stepsize.com/blog/the-engineers-guide-to-writing-code-comments) - Covers types of comments, when and how to write code comments, some best practices, and when not to write them.
- [NERD Commenter](https://github.com/preservim/nerdcommenter) - Vim plugin for intensely nerdy commenting powers.

#### Error Messages

- [101 to 404s: How to write great error messages](https://www.writethedocs.org/videos/prague/2019/101-to-404s-how-to-write-great-error-messages-james-scott/) - Even the shortest error message can evoke far stronger, negative emotions in your end users than the majority of your documentation.

#### Collaboration

- [CONTRIBUTING template](https://gitlab.com/tgdp/templates/-/blob/main/contributing-guide/template-contributing-guide.md) - Open-source template provided by The Good Docs Project.
- [Code Of Conduct template](https://gitlab.com/tgdp/templates/-/tree/main/code-of-conduct) - Open-source template provided by The Good Docs Project.
- [Style guide template](https://gitlab.com/tgdp/templates/-/blob/main/style-guide/template-style-guide.md) - Open-source template provided by The Good Docs Project.
- [License templates](https://github.com/licenses/license-templates) - Templates for open source and other licenses.

#### Language-specific

- JavaScript
  - [JSDoc](https://github.com/jsdoc/jsdoc) - An API documentation generator for JavaScript.
  - [documentation.js](https://github.com/documentationjs/documentation) - The documentation system for modern JavaScript.
  - [Docz](https://github.com/doczjs/docz) - Write and publish beautiful interactive documentation for your code.
  - [Storybook](https://github.com/storybookjs/storybook) - A frontend workshop made for UI development, testing, and documentation.
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

### Test Documentation

- Test Plans
  - [IEEE Test Plan Template](https://github.com/JennifferLockwood/test_plan_template) - IEEE 829 templates in HTML5 and Markdown formats.
  - [SONiC Test Plan Template](https://github.com/sonic-net/SONiC/blob/master/doc/SONiC%20Test%20Plan%20Template.md) - A test plan template from Software for Open Networking in the Cloud (SONiC).
  - [Writing Test Plan Items | VS Code](https://github.com/microsoft/vscode/wiki/Writing-Test-Plan-Items) - A guide for writing Test Plan Item (TPI) for VS Code project.
  - [Performance Test Plan Document](https://www.perfmatrix.com/performance-test-plan-document-template/) -  A free .docx template for performance test plan from PerfMatrix.
- Test Cases
  - [TestCases and Templates for Manual Software Testing](https://github.com/mfaisalkhatri/Manual_Testing) - General Test Cases for performing Manual Testing and API Testing on the Web/Mobile application.
  - [Test Case Template (Download Sample Excel)](https://www.guru99.com/download-sample-test-case-template-with-explanation-of-important-fields.html) - A free test case template from Guru99, with both Excel and Word formats.
  - [Test Case Template with Examples: Free Excel & Word Sample for Download](https://katalon.com/resources-center/blog/test-case-template-examples) - A free test case template from Katalon, with guidelines and direct download links.
- Test Report
  - [Bug report template](https://gitlab.com/tgdp/templates/-/blob/main/bug-report/template-bug-report.md) - Open-source template provided by The Good Docs Project.
  - [Performance Test Report Template](https://www.perfmatrix.com/performance-test-report-template/) - A free .docx template for performance test report from PerfMatrix.
  - [Performance Testing Results Report: How to Write It (with Example)](https://u-tor.com/topic/performance-testing-report) - A guide on performance testing report, including why, how and a real world example.
  - [A Step-by-Step Guide to Creating a Powerful Performance Summary Report](https://www.linkedin.com/pulse/step-by-step-guide-creating-powerful-performance-summary-james-ohia/) - Discuss the best practices for creating a performance test summary report and the key components that should be included in it, with a full example.

### Other Types

- Project Requirements Documentation (PRD)
  - [PRD: Product Requirements Doc templates](https://www.notion.so/templates/category/product-requirements-doc) - A bunch of PRD templates from Notion, both free and paid.
  - [Product Templates: Product Requirements Document (PRD)](https://productschool.com/blog/product-strategy/product-template-requirements-document-prd) - Free PRD Templates from Product School.
  - [PRD templates for product managers](https://www.aha.io/roadmapping/guide/requirements-management/what-is-a-good-product-requirements-document-template) - PRD templated from Aha! software.
- Request for Comment (RFC)
  - [Request for Comment template](https://gitlab.com/tgdp/request-for-comment/-/blob/main/rfc-template.md) -  Open-source template provided by The Good Docs Project.

## General Tools

### Site Builder

- [Docusaurus](https://github.com/facebook/docusaurus) ![GitHub Repo stars](https://img.shields.io/github/stars/facebook/docusaurus) - A project for building, deploying, and maintaining open source project websites easily.
- [Docsify](https://github.com/docsifyjs/docsify) ![GitHub Repo stars](https://img.shields.io/github/stars/docsifyjs/docsify) - A magical documentation site generator.
- [GitBook](https://www.gitbook.com/) ![GitHub Repo stars](https://img.shields.io/github/stars/gitbookio/gitbook) - A modern platform for creating beautiful, user-focused documentation for products, APIs, and SDKs.
- [MkDocs](https://github.com/mkdocs/mkdocs) ![GitHub Repo stars](https://img.shields.io/github/stars/mkdocs/mkdocs) - A fast, simple and downright gorgeous static site generator that's geared towards building project documentation.
  - [Material for MkDocs](https://github.com/squidfunk/mkdocs-material) ![GitHub Repo stars](https://img.shields.io/github/stars/squidfunk/mkdocs-material) - A powerful documentation framework on top of MkDocs.
- [mdBook](https://github.com/rust-lang/mdBook) ![GitHub Repo stars](https://img.shields.io/github/stars/rust-lang/mdBook) - Create book from markdown files. Like Gitbook but implemented in Rust.
- [Sphinx](https://github.com/sphinx-doc/sphinx) ![GitHub Repo stars](https://img.shields.io/github/stars/sphinx-doc/sphinx) - Make it easy to create intelligent and beautiful documentation.
  - [Read the Docs](https://about.readthedocs.com/) - Hosts documentation for the open source community, which supports Sphinx docs written with reStructuredText.
- [Markdoc](https://github.com/markdoc/markdoc) - A Markdown-based syntax and toolchain for creating custom documentation sites and experiences.
- [Starlight](https://github.com/withastro/starlight) ![GitHub Repo stars](https://img.shields.io/github/stars/withastro/starlight) - Build beautiful, accessible, high-performance documentation websites with Astro.
- [Docco](https://github.com/jashkenas/docco) ![GitHub Repo stars](https://img.shields.io/github/stars/jashkenas/docco) - A quick-and-dirty, hundred-line-long, literate-programming-style documentation generator.
- [bookdown](https://github.com/rstudio/bookdown) ![GitHub Repo stars](https://img.shields.io/github/stars/rstudio/bookdown) - Authoring Books and Technical Documents with R Markdown.
- [Docus](https://github.com/nuxt-themes/docus) ![GitHub Repo stars](https://img.shields.io/github/stars/nuxt-themes/docus) - Create document-driven websites with Vue & Markdown.
- [Doctave](https://github.com/Doctave/doctave) ![GitHub Repo stars](https://img.shields.io/github/stars/Doctave/doctave) - A batteries-included developer documentation site generator.
- [xyd](https://github.com/livesession/xyd) ![GitHub Repo stars](https://img.shields.io/github/stars/livesession/xyd) - A new scalable docs framework built for everyone powered by LiveSession.

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

### Knowledge Base

- [Documize](https://github.com/documize/community) - Modern Confluence alternative designed for internal & external docs.
- [Trilium Notes](https://github.com/zadam/trilium) - A hierarchical note taking application with focus on building large personal knowledge bases.
- [Seafile](https://github.com/haiwen/seafile) - High performance file syncing and sharing, with also Markdown WYSIWYG editing, Wiki, file label and other knowledge management features.
- [Logseq](https://github.com/logseq/logseq) - A privacy-first, open-source platform for knowledge management and collaboration.
- [MrDoc](https://github.com/zmister2016/MrDoc) - An online document system suitable for individuals and small teams to manage documents, wiki, knowledge and notes.
- [AFFiNE](https://github.com/toeverything/AFFiNE) - A next-gen knowledge base that brings planning, sorting and creating all together.
- [Docmost](https://github.com/docmost/docmost) - An open-source collaborative wiki and documentation software. It is an open-source alternative to Confluence and Notion.

### AI-powered Tools

- [Mintlify Writer](https://github.com/mintlify/writer) - An AI-powered VS Code extension that automatically generates code documentation by highlighting code. Supports multiple programming languages and docstring formats including JSDoc, reST, NumPy, and more.
- [Readme AI](https://github.com/eli64s/readme-ai) - A developer tool that automatically generates comprehensive README files using repository analysis and language models. It supports multiple LLM providers, custom templates, and offline generation.
- [GitBook AI](https://www.gitbook.com/solutions/ai) - A built-in AI assistant that helps teams quickly draft, refine, and enhance product documentation with smart, context-aware suggestions.

### Checker & Formatter

- [LanguageTool](https://github.com/languagetool-org/languagetool) - Style and Grammar Checker for 25+ Languages.
- [Spellcheck GitHub Actions](https://github.com/rojopolis/spellcheck-github-actions) - A GitHub Action that spell checks Python, Markdown, and Text files.
- [TeXtidote](https://github.com/sylvainhalle/textidote) - A correction tool for LaTeX documents and other formats.
- [alex](https://github.com/get-alex/alex) - Catch insensitive, inconsiderate writing.
- [Lychee](https://github.com/lycheeverse/lychee) -  Finds broken URLs and mail addresses inside Markdown, HTML, reStructuredText, websites and more.
- [linkinator](https://github.com/JustinBeckwith/linkinator) - A super simple site crawler and broken link checker.
- [Readability checker](https://www.thewriter.com/tools/readability) - Score your writing based on the Flesch reading ease scale, which looks at how long your words and sentences are.
- [Capitalize My Title](https://capitalizemytitle.com/) - An easy, smart title capitalization tool that uses title capitalization rules published by leading professional organizations to ensure your titles and headlines are capitalized correctly.
- [CasePolice](https://github.com/antfu/case-police) - Scan all your source files and fix the cases of known names.
- [Tables Generator](https://www.tablesgenerator.com/) - Generate tables in HTML, Markdown, Latex, MediaWiki, etc.

### Diagramming

One diagram is usually worth more than a thousand words.

- [Excalidraw](https://github.com/excalidraw/excalidraw) - An open source virtual hand-drawn style whiteboard for sketching hand-drawn like diagrams.
- [draw.io](https://github.com/jgraph/drawio) (Open Source) - A JavaScript, client-side editor for general diagramming.
- [Mermaid](https://github.com/mermaid-js/mermaid) - A diagramming and charting tool that renders Markdown-inspired text definitions to create charts.
  - [Mermaid Live Editor](https://mermaid-js.github.io/mermaid-live-editor/) - A live editor for Mermaid diagrams.
- [PlantUML](https://github.com/plantuml/plantuml) - Allows users to create diagrams using a simple syntax.
- [Lucidchart](https://www.lucidchart.com/) - Generate visuals automatically with AI and data imports, or build your own using intuitive diagramming tools.
- [OmniGraffle](https://www.omnigroup.com/omnigraffle/) - A Mac-only diagramming tool that offers a wide range of features for creating diagrams.
- [(Chinese) Architecture Diagramming: Tools and Methodologies](https://developer.aliyun.com/article/774446) - It discusses the benefits of using diagrams in architecture document, and highlights some standards and best practices.

### Multimedia

Documentation can be more than just plain texts and static pictures.

- Screen Recorder
  - [Screenity](https://github.com/alyssaxuu/screenity) - The free and privacy-friendly screen recorder with no limits.
  - [Kap](https://github.com/wulkano/kap) - An open-source screen recorder built with web technology.
  - [rrweb](https://github.com/rrweb-io/rrweb) - A tool for recording and replaying users' interactions on the web.
  - [ScreenToGif](https://github.com/NickeManarin/ScreenToGif) - Record a selected area of your screen, edit and save it as a gif or video.
  - [Peek](https://github.com/phw/peek) - Simple animated GIF screen recorder with an easy to use interface.
  - [Flameshot](https://github.com/flameshot-org/flameshot) - Powerful yet simple to use screenshot software.
- Audio Recorder
  - [Tenacity](https://codeberg.org/tenacityteam/tenacity) -  An easy-to-use, privacy-friendly, FLOSS, cross-platform multi-track audio editor for Windows, macOS, Linux, and other operating systems.
- Terminal Recorder
  - [asciinema](https://github.com/asciinema/asciinema) - A command-line tool for recording terminal sessions.
  - [Terminalizer](https://github.com/faressoft/terminalizer) - Record your terminal and generate animated gif images or share a web player.
- Animation Builder
  - [Animockup](https://github.com/alyssaxuu/animockup) - A web-based tool that helps you create animated mockups for your product teasers.
- Presentation Tools
  - [Slidev](https://github.com/slidevjs/slidev) - Presentation slides for developers.
  - [reveal.js](https://github.com/hakimel/reveal.js) - Open source HTML presentation framework.
  - [carbon](https://github.com/carbon-app/carbon) - Create and share beautiful images of your source code.
  - [Code Hike](https://github.com/code-hike/codehike) - Helps you create a superior code reading experience, whether you are writing blog posts, documentation, tutorials, coding videos, or any type of technical content.

- Free Icons & Images
  - [Unsplash](https://unsplash.com/) - Beautiful, free images and photos that you can download and use for any project.
  - [Illustrations | Popsy](https://popsy.co/illustrations) - Free vector illustrations for Notion and Popsy websites.
  - [KindPng](https://www.kindpng.com/) - Explore millions of transparent png image for personal and non-commercial use.

### Commercial

- [Confluence](https://www.atlassian.com/software/confluence) - A powerful collaboration and project management software, which is widely used for enterprise documentation management.
  - [Confluence in a Docker container](https://github.com/cptactionhank/docker-atlassian-confluence) - Atlassian Confluence wrapped in a Docker image.
- [Writerside | JetBrains](https://www.jetbrains.com/writerside/) - The most powerful development environment – now adapted for writing documentation.
- [Project documentation | Slite](https://slite.com/solutions/project-documentation) - Brings your scattered project documents into one place:
from project plans, to specs and process documentation.
- [Swimm document](https://swimm.io/document) - Code documentation for developer productivity, including AI support to improve readability.
- [Kapa.ai](https://kapa.ai/) - Generate an LLM-powered chatbot that answers developer questions automatically and helps you find gaps in your docs.

## More Topics

### Communities

- [Write the Docs](https://www.writethedocs.org/) - A global community of people who care about documentation.
- [The Good Docs Project](https://gitlab.com/tgdp) - Educates and empowers people to create high-quality documentation.
- [Technical Writing | Reddit](https://www.reddit.com/r/technicalwriting/) - For people who take the unbelievably complicated things that scientists and engineers devise and make it understandable for non-technical people.

### Examples

- [Beautiful Docs](https://github.com/matheusfelipeog/beautiful-docs.git) - Pointers to useful, well-written, and otherwise beautiful documentation.
- [Awesome Open Source Documents](https://github.com/44bits/awesome-opensource-documents) - A curated list of awesome open source or open source licensed documents, guides, books.
- [Awesome Documentation | vipulgupta2048](https://github.com/vipulgupta2048/awesome-documentation) - A curated list of awesome real-life documentation examples.
- [9 Great API and Developer Documentation Examples](https://everydeveloper.com/developer-documentation-examples/) - Cover common areas of documentation, plus some areas you might not typically see called docs.

### Formats

- Converters
  - [Pandoc](https://pandoc.org/) - A universal document converter, which can convert files from one markup format into another.
  - [Mammoth](https://github.com/mwilliamson/mammoth.js) - Convert Word documents (.docx files) to HTML.
- [Markdown](https://www.wikiwand.com/en/Markdown) - A lightweight markup language for creating formatted text using a plain-text editor.
  - [MarkText](https://github.com/marktext/marktext) - A simple and elegant markdown editor, available for Linux, macOS and Windows.
  - [Glow](https://github.com/charmbracelet/glow) - A terminal based markdown reader, which can be used to read documentation directly on the command line.
- [AsciiDoc](https://asciidoc.org) - A plain text markup language for writing technical content.
  - [Asciidoctor](https://github.com/asciidoctor/asciidoctor) - A fast, open source, Ruby-based text processor for parsing AsciiDoc and converting it to output formats such as HTML 5, DocBook 5, manual pages, PDF, EPUB 3, and other formats.
  - [Antora](https://gitlab.com/antora/antora) - A modular documentation site generator that helps you organize and publish content written in AsciiDoc to the web.
- [reStructuredText](https://www.sphinx-doc.org/en/master/usage/restructuredtext/index.html) - The default plaintext markup language used by Sphinx.
- [DocBook](https://docbook.org/) - An XML schema for writing books and manuals about technical subjects.
- [LaTeX](https://www.latex-project.org/) - A document preparation system.

### Guidelines

- [Style Guides](https://www.writethedocs.org/guide/writing/style-guides/) - Collections of style guides from Write the Docs community.
- [Google developer documentation style guide](https://developers.google.com/style/highlights) - Provides editorial guidelines for writing clear and consistent Google-related developer documentation.
- [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) - If you write about computer technology, this guide is for you.
- [Editorial guidelines for Apple](https://support.apple.com/guide/applestyleguide/welcome/web) - Provides guidelines to help maintain a consistent voice in Apple materials, including documentation.
- [GitHub Docs Style guide](https://docs.github.com/en/contributing/style-guide-and-content-model/style-guide) - Make sure GitHub's documentation stays consistent and follows clear patterns that our readers can understand.
- [Red Hat Technical Writing Style Guide](https://stylepedia.net/style/) - Includes everyday punctuation and grammar, common mistakes to avoid, strategies for translation and global audiences, and a word usage dictionary.
- [How to Write Good Documentation | UC Berkeley](https://guides.lib.berkeley.edu/how-to-write-good-documentation) - Help you to prepare your code for publishing through writing a good documentation.
- [Series: Writing Great Documentation](https://jacobian.org/series/great-documentation/) - A series of articles laying out the tools, tips, and techniques author learned over the years he've spent helping to write Django's docs.
- [Command Line Interface Guidelines](https://clig.dev/) - An open-source guide covering CLI help text and documentation.

### Books

- [Docs for Developers: An Engineer's Field Guide to Technical Writing](https://learning.oreilly.com/library/view/docs-for-developers/9781484272176/) - Teaches you the craft of documentation for each step in the software development lifecycle.
- [Technical Documentation and Process](https://learning.oreilly.com/library/view/technical-documentation-and/9781439861608/) - Provide the background and structure to help you document your projects more effectively.
- [Crafting Docs for Success : An End-to-End Approach to Developer Documentation](https://learning.oreilly.com/library/view/crafting-docs-for/9781484295946/) - Provide an easy to follow blueprint for building successful developer documentation by using the award winning platformOS developer portal as inspiration.
- [Docs-as-Ecosystem: The Community Approach to Engineering Documentation](https://learning.oreilly.com/library/view/docs-as-ecosystem-the-community/9781484293287/) - Teaches readers how mastering the docs-as-code ecosystem empowers communities to understand better their favorite products and Open-Source (OSS) technologies better.
- [Documenting Software Architectures: Views and Beyond, Second Edition](https://www.oreilly.com/library/view/documenting-software-architectures/9780132488617/) - Provides the most complete and current guidance, independent of language or notation, on how to capture an architecture in a commonly understandable form.
- [Communication Patterns](https://learning.oreilly.com/library/view/communication-patterns/9781098140533/) - Shows you how to create documentation and diagrams that actually get the message across to the different audiences you'll face.
- [Living Documentation: Continuous Knowledge Sharing by Design, First Edition](https://learning.oreilly.com/library/view/living-documentation-continuous/9780134689418/) - Use an Approach Inspired by Domain-Driven Design to Build Documentation That Evolves to Maximize Value Throughout Your Development Lifecycle.
- [Communicating Design: Developing Web Site Documentation for Design and Planning, Second Edition](https://learning.oreilly.com/library/view/communicating-design-developing/9780131385399/) - Shows you how to make the documentation you're required to provide into the most efficient communications tool possible.
- [Information Development: Managing Your Documentation Projects, Portfolio, and People](https://learning.oreilly.com/library/view/information-development-managing/9780471777113/) - A completely new look at best practices for all phases of the document development lifecycle.

### Courses

- [Technical Writing Courses for Engineers](https://developers.google.com/tech-writing) - This collection of courses and learning resources from Google aims to improve your technical documentation.
- [Technical Writer HQ](https://technicalwriterhq.com/) - Hosts popular certification courses covering different aspects of technical writing in an applicable way.

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

### Accessibility

- [Documents Accessibility - The Definitive Guide](https://www.accessibilitychecker.org/guides/document-accessibility/) - How to make your documents meet accessibility standards.
- [Website Accessibility Checker](https://www.accessibilitychecker.org/) - Scan your website for free, identify accessbility issues, and get exact instructions on how to fix them.
- [Color Contrast Checker](https://www.accessibilitychecker.org/color-contrast-checker/) - Find out whether your site meets WCAG color requirements.
- [WebAIM](https://webaim.org/) - Web accessibility in mind.
- [Pa11y](https://github.com/pa11y/pa11y) - Runs accessibility tests on your doc pages via the command line or Node.js.
- [Create accessible documents | UW Madison](https://it.wisc.edu/learn/make-it-accessible/create-accessible-documents/) - Follow these basic steps to increase the accessibility of your Word, HTML, PowerPoint and PDF documents.

### SEO

- [How to do search engine optimization (SEO) for documentation projects](https://docs.readthedocs.io/en/stable/guides/technical-docs-seo-guide.html) - Explains how documentation can be optimized to appear in search results, ultimately increasing traffic to your docs.
- [Search engine optimization (SEO) for documentation](https://www.writethedocs.org/guide/seo/) - SEO guide from Write the Docs community.
- [Five ways to improve SEO of your technical documentation and OpenAPI references](https://www.doctave.com/blog/improve-seo-technical-documentation-and-openapi) - Five ways to improve the search engine rankings of your technical docs and OpenAPI specification.
- [Search Engine Optimization (SEO) Starter Guide | Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) - Provides the best practices to make it easier for search engines (not just Google) to crawl, index, and understand your content.
- [Search engine optimization (SEO) | Docusaurus](https://docusaurus.io/docs/next/seo) - Show how Docusaurus as documentation site builder supports SEO in a variety of ways.

## Contributing

Please feel invited to do any [contribution](CONTRIBUTING.md).

<!--
TODO:
- 自动翻译英文版变更内容，并同步到中文版
-->

# Awesome Documentation [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Lint](https://github.com/pengqun/awesome-documentation/actions/workflows/action.yml/badge.svg)](https://github.com/pengqun/awesome-documentation/actions/workflows/action.yml)

> 一份关于软件文档模板、工具、指南和示例的精选资源列表（持续更新中）。

软件文档可以通过促进团队成员之间的沟通、理解与协作，确保开发过程的清晰和高效。然而，由于种种原因，软件文档的创建和维护往往都很难处理得当，导致整个过程效率低下、产出不一致且质量差。

本列表期望能为改善文档效率和质量提供一些帮助，包括提供开箱即用的模板、实用的文档工具、有洞察的文档指南、有广泛共识的文档标准，以及一些真实的文档案例。

其他语言版本: [🇬🇧🇳 英语](README.md)

## 内容

- [文档类型](#文档类型)
  - [用户文档](#用户文档)
  - [架构文档](#架构文档)
  - [API 文档](#api-文档)
  - [代码文档](#代码文档)
  - [测试文档](#测试文档)
  - [其他类型](#其他类型)
- [通用工具](#通用工具)
  - [站点构建器](#站点构建器)
  - [Wiki 构建器](#wiki-构建器)
  - [绘图工具](#绘图工具)
- [更多主题](#更多主题)
  - [社区](#社区)
  - [指南](#指南)
  - [示例](#示例)
  - [DocOps](#docops)
  - [本地化](#本地化)

## 文档类型

### 用户文档

> 如果你的产品再好，但其文档不够好，人们就不会使用它。- [The Documentation System](https://documentation.divio.com/introduction.html)

#### 教程（Tutorial）

逐步指导用户如何使用或实施主题或工具。

- [教程](https://documentation.divio.com/tutorials.html) - 从 The Documentation System 学习如何编写好的教程。
- [教程模板](https://gitlab.com/tgdp/templates/-/blob/main/tutorial/template-tutorial.md) - 由 The Good Docs Project 提供的开源模板。
- [编写完美的技术教程](https://www.writethedocs.org/videos/portland/2021/writing-a-perfect-technical-tutorial-jessica-garson/) - 如何开始创建教程，收集反馈，以及教程发布后的下一步操作。

#### 参考（Reference）

提供所有功能和功能的详细信息和规格。

- [参考指南](https://documentation.divio.com/reference.html) - 从 The Documentation System 中学习如何编写好的参考指南。
- [参考模板](https://gitlab.com/tgdp/templates/-/blob/main/reference/template-reference.md) - 由 The Good Docs Project 提供的开源模板。
- [SDK 参考手册：基于流的方法](https://www.writethedocs.org/videos/portland/2019/sdk-reference-manuals-a-flow-based-approach-chris-bush/) - 为 SDK 参考文档的用户提供快速、愉快、面向用户的体验。

#### 操作指南（How-To）

提供完成特定任务或解决常见问题的实用步骤。

- [操作指南](https://documentation.divio.com/how-to-guides.html) - 从 The Documentation System 中学习如何编写好的如何指南。
- [操作指南模板](https://gitlab.com/tgdp/templates/-/blob/main/how-to/template-how-to.md) - 由 The Good Docs Project 提供的开源模板。

#### 概念（Concept）

解释主题背后的基本思想和理论。

- [概念模板](https://gitlab.com/tgdp/templates/-/blob/main/concept/template-concept.md) - 由 The Good Docs Project 提供的开源模板。
- [解释](https://documentation.divio.com/explanation.html) - 从 The Documentation System 中学习如何编写好的解释。

#### 常见问题（FAQ）

回答常见问题以快速解决常见问题或澄清典型误解。

- [关于 FAQ 的事实](https://www.writethedocs.org/videos/portland/2018/the-facts-about-faqs-ashleigh-rentz/) - 探索我们可能经常问自己关于 FAQ 的各种问题。

#### 其他

- [安装指南模板](https://gitlab.com/tgdp/templates/-/blob/main/installation-guide/template-installation-guide.md) - 由 The Good Docs Project 提供的开源模板。
- [故障排除指南模板](https://gitlab.com/tgdp/templates/-/tree/main/troubleshooting) - 由 The Good Docs Project 提供的开源模板。
- [术语系统指南模板](https://gitlab.com/tgdp/templates/-/blob/main/terminology-system/guide-terminology-system.md) - 由 The Good Docs Project 提供的开源模板。
- [发布说明模板](https://gitlab.com/tgdp/templates/-/blob/main/release-notes/template-release-notes.md) - 由 The Good Docs Project 提供的开源模板。
- [客户支持文档中同理心的力量：5 步指南](https://www.writethedocs.org/videos/prague/2019/the-power-of-empathy-in-support-documentation-a-5-step-guide-plamena-maleva/) - 将同理心和迭代应用于客户支持文档项目。
- 应用内文档 - 向导、工具提示等。

### 架构文档

> _"架构就是所有那些重要的东西。无论那是什么。" — Ralph Johnson_

- [arc42](https://arc42.org/) - 用于文档化和沟通软件和系统架构的经过验证、实用且务实的模板。
  - [模板文件下载](https://arc42.org/download#format-overview) - arc42 模板的各种格式文档下载，包括 docx、asciidoc、markdown、latex、rst、html、Confluence 等。
  - [示例：HTML 合法性校验器](https://hsc.aim42.org/documentation/hsc_arc42) - 由 Gernot Starke 创建的 Gradle 插件详细文档示例。
  - [示例：骑行应用](https://biking.michael-simons.eu/docs/index.html) - 由 Michael Simons 创建的自行车活动跟踪器的真实世界示例。

- [C4 模型](https://c4model.com) - 使用上下文、容器、组件和代码来可视化软件架构的 C4 模型。
  - [c4-draw.io](https://github.com/tobiashochguertel/c4-draw.io) - 一个为 draw.io 提供 C4 符号元素的 C4 建模插件。
  - [C4-PlantUML](https://github.com/plantuml-stdlib/C4-PlantUML) - 包括宏、原型以及其他好处（如 VSCode Snippets）用于使用 PlantUML 创建 C4 图表。
  - [C4 图表 | Mermaid](https://mermaid.js.org/syntax/c4.html) - Mermaid 的 C4 图表语法与 plantUML 兼容。
  - [Structurizr](https://github.com/structurizr) - 代码化的 C4 模型 - 使用 C4 模型可视化和记录您的软件架构。
  - [C4-Builder](https://github.com/adrianvlupu/C4-Builder) - 一个轻量级的 nodejs 命令行工具，用于仅使用文本构建、维护和共享软件架构项目。
  - [C4Sharp](https://github.com/8T4/c4sharp) - 一个基于 C4 模型的 .net 库，用于编码构建图表。
  - [Goa Design - Model](https://github.com/goadesign/model) - 在 Go 中创建您的软件架构模型和图表。Model DSL 在 Go 中实现，并遵循 C4 模型。

- 规范

- 白皮书

### API 文档

API 是软件世界的通用语言，需要进行良好的文档化。

#### 通用

- [API 参考模板](https://gitlab.com/tgdp/templates/-/blob/main/api-reference/template-api-reference.md) - 由 The Good Docs Project 提供的开源模板。
- [Slate](https://github.com/slatedocs/slate) - 从符合 Swagger 的 API 动态生成美观的静态文档。

#### OpenAPI

[OpenAPI 规范](https://swagger.io/specification/) 定义了一个标准、与语言无关的接口到 HTTP API。然后可以使用 OpenAPI 定义由文档生成工具显示 API。

- [Swagger UI](https://github.com/swagger-api/swagger-ui) - 从符合 Swagger 的 API 动态生成美观的文档。
- [Swagger 宠物店](https://petstore3.swagger.io/) - 基于 OpenAPI 3.0 规范的样本宠物店服务器。

#### GraphQL

[GraphQL](https://graphql.org/) 是一种 API 查询语言，提供了 API 中数据的完整且可理解的描述。

- [GitHub GraphQL API 文档](https://docs.github.com/en/graphql) - GitHub 提供的 GraphQL API 的一个很好的真实世界示例。
- [SpectaQL](https://github.com/anvilco/spectaql) - 一个 Node.js 库，可以从任何 GraphQL 架构自动生成静态文档。
- [GraphQLDocs](https://github.com/brettchalupa/graphql-docs) - 一个 Ruby 库和 CLI，用于轻松从 GraphQL 架构生成美观的文档。
- [Magidoc](https://github.com/magidoc-org/magidoc) - 一个 JavaScript 库，可以从任何 GraphQL 架构自动生成静态文档。

#### gRPC

[gRPC](https://grpc.io/) 是一个现代的开源高性能远程过程调用 (RPC) 框架。

- [protoc-gen-doc](https://github.com/pseudomuto/protoc-gen-doc) - 从 .proto 文件中的注释生成 HTML、JSON、DocBook 和 Markdown 文档。
  - [示例](https://rawgit.com/pseudomuto/protoc-gen-doc/master/examples/doc/example.html) - 由 protoc-gen-doc 生成的样本 HTML 文档。
- [Sabledocs](https://github.com/markvincze/sabledocs) - 一个简单的 Protobuf 和 gRPC 合同的静态文档生成器。
  - [示例](https://markvincze.github.io/sabledocs/demo/) - 使用 sabledocs 从 Google Cloud SDK 的 Protobuf 合同的部分创建的样本文档。

#### AsyncAPI

[AsyncAPI 规范](https://www.asyncapi.com/docs/reference/specification/v3.0.0) 是一个用于以机器可读格式描述消息驱动的 API 的项目，也可以用于生成 API 文档。

- [Async API 生成器](https://github.com/asyncapi/generator) - 使用 AsyncAPI 定义生成几乎任何东西，包括 Markdown 文档和 HTML 文档。
- [AsyncAPI React 组件](https://github.com/asyncapi/asyncapi-react) - 在浏览器中实时从规范渲染文档。
- [宠物店 Kafka](https://github.com/swagger-api/petstore-kafka?tab=readme-ov-file#openapi-and-asyncapi) - 用 AsyncAPI 和 OpenAPI 描述的功能示例。

#### RAML

[RAML 规范](https://github.com/raml-org/raml-spec/blob/master/versions/raml-10/raml-10.md/) 提供了定义实际 RESTful API 的机制，创建客户端/服务器源代码，并为用户全面地记录 API。

- [API 控制台](https://github.com/mulesoft/api-console) - 基于 RAML/OAS 文件的交互式 REST 控制台。
- [RAML 转 HTML](https://github.com/raml2html/raml2html) - 一个简单的 RAML 到 HTML 文档生成器，为 Node.js 编写，支持主题。
- [世界音乐 API](https://rawgit.com/raml2html/default-theme/master/examples/world-music-api.html) - 使用 RAML 到 HTML 文档生成器的现场示例。

### 代码文档

#### README

- [Best README Template](https://github.com/othneildrew/Best-README-Template) - 一个超棒的 README 模板，可以为您的项目起到开头作用。
- [Awesome Readme](https://github.com/matiassingers/awesome-readme) - 精选的超棒 README 列表，包括示例、文章和工具。
- [README 模板](https://gitlab.com/tgdp/templates/-/blob/main/readme/template-readme.md) - 由 The Good Docs Project 提供的开源模板。

#### 注释

#### 错误信息

- [从 101 到 404：如何编写出色的错误信息](https://www.writethedocs.org/videos/prague/2019/101-to-404s-how-to-write-great-error-messages-james-scott/) - 即使是最短的错误信息也能在最终用户中引起比大部分文档更强烈的负面情绪。

#### 协作

- [贡献模板](https://gitlab.com/tgdp/templates/-/blob/main/contributing-guide/template-contributing-guide.md) - 由 The Good Docs Project 提供的开源模板。
- [行为守则模板](https://gitlab.com/tgdp/templates/-/tree/main/code-of-conduct) - 由 The Good Docs Project 提供的开源模板。
- [风格指南模板](https://gitlab.com/tgdp/templates/-/blob/main/style-guide/template-style-guide.md) - 由 The Good Docs Project 提供的开源模板。

#### 语言特定

- Java
  - JavaDoc
- Kotlin
  - Dokka
- Rust
- Ruby
  - [TomDoc for Ruby](http://tomdoc.org/) - 一种代码文档规范，帮助您编写精确的文档，阅读起来很好看，格式足够结构化，可以被机器自动提取和处理。
- YAML

### 测试文档

- 测试计划
- 测试用例
- 测试报告
- [缺陷报告模板](https://gitlab.com/tgdp/templates/-/blob/main/bug-report/template-bug-report.md) - 由 The Good Docs Project 提供的开源模板。
- 覆盖率
- 性能

### 其他类型

- 项目需求文档 (PRD)
- RFC (请求评论)

## 通用工具

### 站点构建器

- [Docusaurus](https://github.com/facebook/docusaurus) ![GitHub Repo stars](https://img.shields.io/github/stars/facebook/docusaurus) - 一个用于轻松构建、部署和维护开源项目网站的项目。
- [MkDocs](https://github.com/mkdocs/mkdocs) ![GitHub Repo stars](https://img.shields.io/github/stars/mkdocs/mkdocs) - 一个快速、简单且绝对华丽的静态站点生成器，专注于构建项目文档。
- [Sphinx](https://github.com/sphinx-doc/sphinx) ![GitHub Repo stars](https://img.shields.io/github/stars/sphinx-doc/sphinx) - 使创建智能和美观的文档变得容易。
  - [reStructuredText](https://www.sphinx-doc.org/en/master/usage/restructuredtext/index.html) - Sphinx 使用的默认纯文本标记语言。
  - [Read The Docs](https://about.readthedocs.com/) - 为开源社区托管文档，支持用 reStructuredText 编写的 Sphinx 文档。
- [Starlight](https://github.com/withastro/starlight) ![GitHub Repo stars](https://img.shields.io/github/stars/withastro/starlight) - 使用 Astro 构建美观、无障碍、高性能的文档网站。

### Wiki 构建器

- [Wiki.js](https://github.com/Requarks/wiki) - 一个基于 Node.js 构建的现代且强大的 wiki 应用。
- [MediaWiki](https://github.com/wikimedia/mediawiki) - 一个免费且开源的 wiki 软件包，使用 PHP 编写。它为维基百科和其他维基媒体项目提供平台。
- [DokuWiki](https://github.com/dokuwiki/dokuwiki) - 一个简单易用且功能丰富的开源 wiki 软件，不需要数据库。
- [VimWiki](https://github.com/vimwiki/vimwiki) - Vim 的个人 wiki，可用于编写文档。
- [GitHub Wiki](https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis)
  - [Awesome GitHub Wikis](https://github.com/MyHoneyBadger/awesome-github-wiki) - 精选的超棒 GitHub Wikis 列表，包括示例、技巧和窍门。
- [联邦 Wiki](https://www.wikiwand.com/en/Federated_Wiki)
  - [联邦 Wiki](https://www.writethedocs.org/videos/na/2015/keynote-the-federated-wiki-ward-cunningham/) - 由 Ward Cunningham 使用联邦来简化共享。
  - [Node.js 服务器版本](https://github.com/fedwiki/wiki) - 作为 npm 包的联邦 Wiki node 服务器。

### 绘图工具

- [draw.io](https://github.com/jgraph/drawio) (开源) - 一个 JavaScript 客户端编辑器，用于通用图表绘制。
- [架构制图：工具与方法论](https://developer.aliyun.com/article/774446) - 讨论了在架构文档中使用图表的好处，并强调了一些标准和最佳实践。

## 更多主题

### 社区

- [Write the Docs](https://www.writethedocs.org/) - 关心文档的全球社区。
- [The Good Docs Project](https://gitlab.com/tgdp) - 教育和赋能人们创造高质量文档。

### 指南

- [Google 开发者文档风格指南](https://developers.google.com/style/highlights) - 为编写清晰一致的 Google 相关开发者文档提供编辑指南。
- [Microsoft 写作风格指南](https://learn.microsoft.com/en-us/style-guide/welcome/) - 如果您编写有关计算机技术的内容，这本指南是为您准备的。
- [系列：编写优秀文档](https://jacobian.org/series/great-documentation/) - 一系列文章，介绍了作者在帮助编写 Django 文档的多年中学到的工具、技巧和技术。

### 示例

- [Beautiful Docs](https://github.com/matheusfelipeog/beautiful-docs.git) - 指向有用、撰写良好且其他方面美观的文档的指针。
- [Awesome Open Source Documents](https://github.com/44bits/awesome-opensource-documents) - 精选的超棒的开源或开源许可的文档、指南、书籍的列表。

### DocOps

- [DocOps 集合](https://doctoolhub.com/collection/docops/) - 这些文章介绍了 DocOps 的概念。
- [DocOps 到底是什么？](https://www.writethedocs.org/guide/doc-ops/) - 编写文档社区的精彩文章。
- [代码即文档](https://www.writethedocs.org/guide/docs-as-code/) - 编写文档社区的精彩文章。
- [DocOps 实验室](https://github.com/DocOps) - 一个平台，用于协作开发和探索代码即文档基础设施、自动化、工作流等。
- [什么是持续文档？宣言](https://swimm.io/blog/what-is-continuous-documentation-manifesto-part-1)
- [作为一种新方法的持续文档的转变](https://www.infoq.com/articles/continuous-documentation/)

### 本地化

- [本地化文档](https://www.writethedocs.org/videos/portland/2019/localize-the-docs-paul-wallace/) - 编写文档社区的精彩视频。
- [翻译中的发现：一年的开源本地化教训](https://www.writethedocs.org/videos/prague/2019/found-in-translation-lessons-from-a-year-of-open-source-localization-zachary-sarah-corleissen/) - 编写文档社区的精彩视频。

<!-- ### 辅助功能 -->

## 贡献

欢迎提供任何[贡献](CONTRIBUTING.md)。

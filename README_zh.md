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
  - [知识库](#知识库)
  - [AI 工具](#ai-工具)
  - [检查与格式化](#检查与格式化)
  - [绘图工具](#绘图工具)
  - [多媒体](#多媒体)
  - [商业化](#商业化)
- [更多主题](#更多主题)
  - [社区](#社区)
  - [指南](#指南)
  - [示例](#示例)
  - [DocOps](#docops)
  - [本地化](#本地化)
  - [可访问性](#可访问性)
  - [SEO](#seo)
  - [文档格式](#文档格式)
  - [书籍](#书籍)
  - [课程](#课程)

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
- [Docsify](https://github.com/docsifyjs/docsify) ![GitHub Repo stars](https://img.shields.io/github/stars/docsifyjs/docsify) - 简单而神奇的文档站点生成器。
- [GitBook](https://www.gitbook.com/) ![GitHub Repo stars](https://img.shields.io/github/stars/gitbookio/gitbook) - 现代化的平台，让你轻松编写面向用户的产品、API 和 SDK 文档。
- [MkDocs](https://github.com/mkdocs/mkdocs) ![GitHub Repo stars](https://img.shields.io/github/stars/mkdocs/mkdocs) - 一个快速、简单且绝对华丽的静态站点生成器，专注于构建项目文档。
  - [Material for MkDocs](https://github.com/squidfunk/mkdocs-material) ![GitHub Repo stars](https://img.shields.io/github/stars/squidfunk/mkdocs-material) - 强大的 MkDocs 主题和框架。
- [mdBook](https://github.com/rust-lang/mdBook) ![GitHub Repo stars](https://img.shields.io/github/stars/rust-lang/mdBook) - 从 Markdown 创建电子书，类似于用 Rust 实现的 GitBook。
- [Sphinx](https://github.com/sphinx-doc/sphinx) ![GitHub Repo stars](https://img.shields.io/github/stars/sphinx-doc/sphinx) - 使创建智能和美观的文档变得容易。
  - [reStructuredText](https://www.sphinx-doc.org/en/master/usage/restructuredtext/index.html) - Sphinx 使用的默认纯文本标记语言。
  - [Read The Docs](https://about.readthedocs.com/) - 为开源社区托管文档，支持用 reStructuredText 编写的 Sphinx 文档。
- [Markdoc](https://github.com/markdoc/markdoc) - 基于 Markdown 的语法和工具链，用于打造自定义文档站点。
- [Starlight](https://github.com/withastro/starlight) ![GitHub Repo stars](https://img.shields.io/github/stars/withastro/starlight) - 使用 Astro 构建美观、无障碍、高性能的文档网站。
- [Docco](https://github.com/jashkenas/docco) ![GitHub Repo stars](https://img.shields.io/github/stars/jashkenas/docco) - 只需百来行代码就能生成文档的项目，采用文学式编程风格。
- [bookdown](https://github.com/rstudio/bookdown) ![GitHub Repo stars](https://img.shields.io/github/stars/rstudio/bookdown) - 使用 R Markdown 编写书籍与技术文档。
- [Docus](https://github.com/nuxt-themes/docus) ![GitHub Repo stars](https://img.shields.io/github/stars/nuxt-themes/docus) - 使用 Vue 与 Markdown 构建以文档驱动的网站。
- [Doctave](https://github.com/Doctave/doctave) ![GitHub Repo stars](https://img.shields.io/github/stars/Doctave/doctave) - 开箱即用的开发者文档站点生成器。

### Wiki 构建器

- [Wiki.js](https://github.com/Requarks/wiki) - 一个基于 Node.js 构建的现代且强大的 wiki 应用。
- [MediaWiki](https://github.com/wikimedia/mediawiki) - 一个免费且开源的 wiki 软件包，使用 PHP 编写。它为维基百科和其他维基媒体项目提供平台。
- [DokuWiki](https://github.com/dokuwiki/dokuwiki) - 一个简单易用且功能丰富的开源 wiki 软件，不需要数据库。
- [Gollum](https://github.com/gollum/gollum) - 基于 Git 构建的轻量级 wiki 系统。
- [VimWiki](https://github.com/vimwiki/vimwiki) - Vim 的个人 wiki，可用于编写文档。
- [GitHub Wiki](https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis)
  - [Awesome GitHub Wikis](https://github.com/MyHoneyBadger/awesome-github-wiki) - 精选的超棒 GitHub Wikis 列表，包括示例、技巧和窍门。
- [联邦 Wiki](https://www.wikiwand.com/en/Federated_Wiki)
  - [联邦 Wiki](https://www.writethedocs.org/videos/na/2015/keynote-the-federated-wiki-ward-cunningham/) - 由 Ward Cunningham 使用联邦来简化共享。
  - [Node.js 服务器版本](https://github.com/fedwiki/wiki) - 作为 npm 包的联邦 Wiki node 服务器。

### 知识库

- [Documize](https://github.com/documize/community) - 现代化的 Confluence 替代品，适合管理内部和外部文档。
- [Trilium Notes](https://github.com/zadam/trilium) - 支持层级结构的笔记应用，可构建大型个人知识库。
- [Seafile](https://github.com/haiwen/seafile) - 高性能的文件同步与分享平台，提供 Markdown 编辑、Wiki 等知识管理功能。
- [Logseq](https://github.com/logseq/logseq) - 以隐私为先的开源知识管理与协作平台。
- [MrDoc](https://github.com/zmister2016/MrDoc) - 适合个人和小团队的在线文档系统，可管理文档、Wiki 和笔记。
- [AFFiNE](https://github.com/toeverything/AFFiNE) - 下一代知识库，集计划、整理与创作于一体。
- [Docmost](https://github.com/docmost/docmost) - 开源协作式 Wiki 与文档软件，是 Confluence 和 Notion 的替代品。

### AI 工具

- [Mintlify Writer](https://github.com/mintlify/writer) - 基于 AI 的 VS Code 扩展，高亮代码即可生成说明。
- [Readme AI](https://github.com/eli64s/readme-ai) - 自动分析仓库并生成完善的 README，支持多种 LLM 与模板。
- [GitBook AI](https://www.gitbook.com/solutions/ai) - GitBook 内置的 AI 助手，根据上下文提供写作建议。

### 检查与格式化

- [LanguageTool](https://github.com/languagetool-org/languagetool) - 支持多语言的语法和拼写检查工具。
- [Spellcheck GitHub Actions](https://github.com/rojopolis/spellcheck-github-actions) - 在 GitHub Actions 中进行拼写检查。
- [TeXtidote](https://github.com/sylvainhalle/textidote) - 用于 LaTeX 等格式的校对工具。
- [alex](https://github.com/get-alex/alex) - 检测潜在不妥或冒犯性的用语。
- [Lychee](https://github.com/lycheeverse/lychee) - 检查 Markdown、HTML 等文件中的失效链接。
- [linkinator](https://github.com/JustinBeckwith/linkinator) - 极简的站点爬虫和失效链接检查器。
- [Readability checker](https://www.thewriter.com/tools/readability) - 根据 Flesch 指标评估文本的可读性。
- [Capitalize My Title](https://capitalizemytitle.com/) - 按专业规则自动修正标题的大小写。
- [CasePolice](https://github.com/antfu/case-police) - 扫描源码并纠正已知名称的大小写。
- [Tables Generator](https://www.tablesgenerator.com/) - 生成 HTML、Markdown、LaTeX 等格式的表格。

### 绘图工具

- [draw.io](https://github.com/jgraph/drawio) (开源) - 一个 JavaScript 客户端编辑器，用于通用图表绘制。
- [Excalidraw](https://github.com/excalidraw/excalidraw) - 开源的手绘风格白板，用于快速勾画示意图。
- [Mermaid](https://github.com/mermaid-js/mermaid) - 通过类 Markdown 语法绘制图表。
  - [Mermaid Live Editor](https://mermaid-js.github.io/mermaid-live-editor/) - 在线编辑和预览 Mermaid 图表。
- [PlantUML](https://github.com/plantuml/plantuml) - 使用简单语法创建各种 UML 图。
- [Lucidchart](https://www.lucidchart.com/) - 通过 AI 和数据导入自动生成可视化图表，也可手动绘制。
- [OmniGraffle](https://www.omnigroup.com/omnigraffle/) - Mac 平台上功能丰富的绘图工具。
- [架构制图：工具与方法论](https://developer.aliyun.com/article/774446) - 讨论了在架构文档中使用图表的好处，并强调了一些标准和最佳实践。

### 多媒体

文档不必局限于纯文本和静态图片。

- **屏幕录制**
  - [Screenity](https://github.com/alyssaxuu/screenity) - 免费且隐私友好的录屏工具，无任何限制。
  - [Kap](https://github.com/wulkano/kap) - 基于 Web 技术的开源录屏软件。
  - [rrweb](https://github.com/rrweb-io/rrweb) - 用于录制并回放网页交互。
  - [ScreenToGif](https://github.com/NickeManarin/ScreenToGif) - 录制屏幕区域并保存为 GIF 或视频。
  - [Peek](https://github.com/phw/peek) - 简单易用的 GIF 录制器。
  - [Flameshot](https://github.com/flameshot-org/flameshot) - 功能强大的截图工具，易于使用。
- **音频录制**
  - [Tenacity](https://codeberg.org/tenacityteam/tenacity) - 易用的跨平台开源多轨音频编辑器。
- **终端录制**
  - [asciinema](https://github.com/asciinema/asciinema) - 命令行终端录制工具。
  - [Terminalizer](https://github.com/faressoft/terminalizer) - 录制终端并生成 GIF 或网页播放器。
- **动画制作**
  - [Animockup](https://github.com/alyssaxuu/animockup) - 在线创建产品宣传动画。
- **演示工具**
  - [Slidev](https://github.com/slidevjs/slidev) - 面向开发者的幻灯片工具。
  - [reveal.js](https://github.com/hakimel/reveal.js) - 开源 HTML 演示框架。
  - [carbon](https://github.com/carbon-app/carbon) - 将代码片段变成精美的图片。
  - [Code Hike](https://github.com/code-hike/codehike) - 帮你打造出色的代码阅读体验，可用于博客、文档和教程。
- **免费图标与图片**
  - [Unsplash](https://unsplash.com/) - 高质量、可免费商用的图片网站。
  - [Illustrations | Popsy](https://popsy.co/illustrations) - 免费矢量插图，适用于 Notion 和 Popsy 等。
  - [KindPng](https://www.kindpng.com/) - 大量透明 PNG 图片，可个人和非商业使用。

### 商业化

- [Confluence](https://www.atlassian.com/software/confluence) - 企业常用的协作与文档管理工具。
  - [Confluence in a Docker container](https://github.com/cptactionhank/docker-atlassian-confluence) - 将 Confluence 打包进 Docker。
- [Writerside | JetBrains](https://www.jetbrains.com/writerside/) - JetBrains 出品的强大文档创作环境。
- [Project documentation | Slite](https://slite.com/solutions/project-documentation) - 将分散的项目文档集中到一起。
- [Swimm document](https://swimm.io/document) - 为开发者提供 AI 加持的代码文档解决方案。
- [Kapa.ai](https://kapa.ai/) - 生成支持 LLM 的聊天机器人，自动回答开发者问题并发现文档缺口。

## 更多主题

### 社区

- [Write the Docs](https://www.writethedocs.org/) - 关心文档的全球社区。
- [The Good Docs Project](https://gitlab.com/tgdp) - 教育和赋能人们创造高质量文档。
- [Technical Writing | Reddit](https://www.reddit.com/r/technicalwriting/) - 面向技术写作者的 Reddit 版块，交流经验与资源。

### 指南

- [Google 开发者文档风格指南](https://developers.google.com/style/highlights) - 为编写清晰一致的 Google 相关开发者文档提供编辑指南。
- [Microsoft 写作风格指南](https://learn.microsoft.com/en-us/style-guide/welcome/) - 如果您编写有关计算机技术的内容，这本指南是为您准备的。
- [系列：编写优秀文档](https://jacobian.org/series/great-documentation/) - 一系列文章，介绍了作者在帮助编写 Django 文档的多年中学到的工具、技巧和技术。

### 示例

- [Beautiful Docs](https://github.com/matheusfelipeog/beautiful-docs.git) - 指向有用、撰写良好且其他方面美观的文档的指针。
- [Awesome Open Source Documents](https://github.com/44bits/awesome-opensource-documents) - 精选的超棒的开源或开源许可的文档、指南、书籍的列表。
- [Awesome Documentation | vipulgupta2048](https://github.com/vipulgupta2048/awesome-documentation) - 精选的真实文档示例列表。
- [9 Great API and Developer Documentation Examples](https://everydeveloper.com/developer-documentation-examples/) - 覆盖常见和不那么常见的文档范例。

### 文档格式

- 转换工具
  - [Pandoc](https://pandoc.org/) - 通用文档转换器，可在多种标记语言间互转。
  - [Mammoth](https://github.com/mwilliamson/mammoth.js) - 将 Word 文档 (.docx) 转换为 HTML。
- [Markdown](https://www.wikiwand.com/en/Markdown) - 轻量级标记语言，用纯文本即可编写格式化内容。
  - [MarkText](https://github.com/marktext/marktext) - 简洁优雅的 Markdown 编辑器，支持 Linux、macOS、Windows。
  - [Glow](https://github.com/charmbracelet/glow) - 基于终端的 Markdown 阅读器，可直接在命令行查看文档。
- [AsciiDoc](https://asciidoc.org) - 用于撰写技术内容的纯文本标记语言。
  - [Asciidoctor](https://github.com/asciidoctor/asciidoctor) - 快速的开源文本处理器，可将 AsciiDoc 转为 HTML5、PDF 等格式。
  - [Antora](https://gitlab.com/antora/antora) - 模块化文档站点生成器，帮助组织并发布 AsciiDoc 内容。
- [reStructuredText](https://www.sphinx-doc.org/en/master/usage/restructuredtext/index.html) - Sphinx 默认使用的标记语言。
- [DocBook](https://docbook.org/) - 专为技术文档设计的 XML 架构。
- [LaTeX](https://www.latex-project.org/) - 文档排版系统，适合复杂排版需求。

### 书籍

- [Docs for Developers: An Engineer's Field Guide to Technical Writing](https://learning.oreilly.com/library/view/docs-for-developers/9781484272176/) - 涵盖软件生命周期各阶段文档写作的实战指南。
- [Technical Documentation and Process](https://learning.oreilly.com/library/view/technical-documentation-and/9781439861608/) - 帮助你更高效地编写项目文档的背景与结构方法。
- [Crafting Docs for Success : An End-to-End Approach to Developer Documentation](https://learning.oreilly.com/library/view/crafting-docs-for/9781484295946/) - 以 platformOS 开发者门户为例，提供易于实践的文档构建蓝图。
- [Docs-as-Ecosystem: The Community Approach to Engineering Documentation](https://learning.oreilly.com/library/view/docs-as-ecosystem-the-community/9781484293287/) - 讲述如何通过 "文档即代码" 生态系统让社区更好地理解产品与开源技术。
- [Documenting Software Architectures: Views and Beyond, Second Edition](https://www.oreilly.com/library/view/documenting-software-architectures/9780132488617/) - 提供与语言和记法无关的架构文档最佳实践。
- [Communication Patterns](https://learning.oreilly.com/library/view/communication-patterns/9781098140533/) - 教你如何通过文档和图表向不同受众准确传达信息。
- [Living Documentation: Continuous Knowledge Sharing by Design, First Edition](https://learning.oreilly.com/library/view/living-documentation-continuous/9780134689418/) - 采用领域驱动设计的思想让文档持续演进，为开发全周期带来价值。
- [Communicating Design: Developing Web Site Documentation for Design and Planning, Second Edition](https://learning.oreilly.com/library/view/communicating-design-developing/9780131385399/) - 让你把必须提供的文档打造成最高效的沟通工具。
- [Information Development: Managing Your Documentation Projects, Portfolio, and People](https://learning.oreilly.com/library/view/information-development-managing/9780471777113/) - 全面阐述文档开发生命周期各阶段的最佳实践。

### 课程

- [Technical Writing Courses for Engineers](https://developers.google.com/tech-writing) - Google 提供的一系列课程和学习资源，旨在提升技术文档写作能力。
- [Technical Writer HQ](https://technicalwriterhq.com/) - 汇集多种认证课程，涵盖技术写作的不同方面。

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


### 可访问性

- [Documents Accessibility - The Definitive Guide](https://www.accessibilitychecker.org/guides/document-accessibility/) - 如何让文档满足无障碍标准。
- [Website Accessibility Checker](https://www.accessibilitychecker.org/) - 免费扫描你的网站，找出可访问性问题并给出修复建议。
- [Color Contrast Checker](https://www.accessibilitychecker.org/color-contrast-checker/) - 检查站点是否符合 WCAG 色彩要求。
- [WebAIM](https://webaim.org/) - 专注 Web 可访问性的社区与资源。
- [Pa11y](https://github.com/pa11y/pa11y) - 命令行或 Node.js 下运行的可访问性测试工具。
- [Create accessible documents | UW Madison](https://it.wisc.edu/learn/make-it-accessible/create-accessible-documents/) - 提供提升 Word、HTML、PPT 和 PDF 文档可访问性的步骤。

### SEO

- [How to do search engine optimization (SEO) for documentation projects](https://docs.readthedocs.io/en/stable/guides/technical-docs-seo-guide.html) - 解释如何让文档更容易被搜索引擎收录，从而提升访问量。
- [Search engine optimization (SEO) for documentation](https://www.writethedocs.org/guide/seo/) - Write the Docs 社区关于 SEO 的指南。
- [Five ways to improve SEO of your technical documentation and OpenAPI references](https://www.doctave.com/blog/improve-seo-technical-documentation-and-openapi) - 五种提升技术文档及 OpenAPI 规范在搜索引擎排名的方法。
- [Search Engine Optimization (SEO) Starter Guide | Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) - 帮助搜索引擎更好地抓取、索引和理解内容的最佳实践。
- [Search engine optimization (SEO) | Docusaurus](https://docusaurus.io/docs/next/seo) - 展示 Docusaurus 在文档站点中如何支持 SEO。

## 贡献

欢迎提供任何[贡献](CONTRIBUTING.md)。

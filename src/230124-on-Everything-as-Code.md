> \[some software term\] as code = Automation
<!-- toc -->

## Notes

### Why

> A well-put explanation by [硅谷王川 Chuan @Svwang1](https://twitter.com/Svwang1/status/1586093468450836483)

- Scalable
- Portable
- Traceable
- Repeatable
- Tested
- Shared Understanding

### Overview

| *EVERYTHING* | PROJ |
| :--- | :--- |
| Build | Maven, Gradle, Webpack, Make |
| Test | JUnit, Selenium |
| Pipeline | Jenkins, Github Actions |
| Infrastructure | Terraform |
| Database | SQL Schema |
| Presentation | Marp |
| Diagram | Mermaid |
| Environment | Vagrant, Docker |
| Architecture | Structurizr |
| Configuration | Ansible, Chef, Puppet |
| 3D CAD Model | OpenSCAD |
| Documentation | Markdown, Asciidoc |
| Comment | Github Copilot |
| UI | Flutter |
| Real-world Contract | Solidity<small>(-ish)</small> |

### Detailed Explanation

#### ELI5 什么是 Terraform (尚实操)

> [Purpose of Terraform](https://old.reddit.com/r/explainlikeimfive/comments/hfkmya/eli5what_is_the_purpose_of_terraform_computer/) and [Terraform's place in CI/CD](https://old.reddit.com/r/Terraform/comments/qlm3ew/newbie_questions_about_cicd_and_how_terraforms/)

- Infrastructure as Code
- 自动化 数记/跟踪 你的基础架构
- 自动化 开发-部署-测试-发布 整个流程
- 与 CI/CD 有重合
- Strictly for defining and provisioning 基础架构
- Ansible is for configuration of that 基础架构
- 管理架构下的 resource
- 如需 scale up, apply one-machine-config to ALL

-----

## References

### 一

- [What is Everything-as-Code? Examining the Explosion of "as Code" Buzzwords | HackerNoon](https://hackernoon.com/everything-as-code-explained-0ibg32a3)
- [**In-depth Research and Trends Analyzed from 50+ Different Concepts as Code**](https://www.jedi.be/blog/2022/02/23/trends-and-inventory-of-50-as-code-concepts/)

### 二

- [X as code](https://renenyffenegger.ch/notes/development/as-code/index)
- [lreimer/everything-as-code: Everything-as-code. A Polyglot Experiment.](https://github.com/lreimer/everything-as-code)
- [Everything-as-Code](https://openpracticelibrary.com/practice/everything-as-code/)
- [Ansible vs. Terraform, clarified](https://www.redhat.com/en/topics/automation/ansible-vs-terraform)
- [Can’t Justify Terraform (An Ansible perspective) : devops](https://old.reddit.com/r/devops/comments/q9s2vq/cant_justify_terraform_an_ansible_perspective/)
- [What is Everything as Code? - Octopus Deploy](https://octopus.com/blog/what-is-everything-as-code#other-examples-of-everything-as-code)
- [Understanding X as A Code](https://quadralogics.com/research/XAsCode.html)
- [Docs as Code — Write the Docs](https://www.writethedocs.org/guide/docs-as-code/)
- [Introduction to Declarative UI | Flutter](https://docs.flutter.dev/get-started/flutter-for/declarative)

### 三

- [Marp: Markdown Presentation Ecosystem](https://marp.app/)
- [Mermaid | Diagramming and charting tool](https://mermaid.js.org/#/)- [Structurizr - C4 Models as Code](https://github.com/structurizr)
- [OpenSCAD - The Programmers Solid 3D CAD Modeller](https://openscad.org/)

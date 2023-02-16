> \[some software term\] as code = Automation
<!-- toc -->

## Prologue

### Why

> A well-put explanation by

- Scalable
- Portable
- Traceable
- Repeatable
- Tested
- Shared Understanding

### Overview

> `✅`: *familiar with it*, `🧐`: *needed to learn more*

| *EVERYTHING* | PROJ |
| :--- | :--- |
| Build | ✅ Maven, 🧐 Gradle, 🧐 Webpack, 🧐 Make |
| Test | 🧐 JUnit, 🧐 Selenium |
| Pipeline | 🧐 Jenkins, ✅ Github Actions |
| Infrastructure | 🧐 Terraform |
| Database | ✅ SQL Schema |
| Presentation | ✅ [Marp](https://marp.app/) |
| Diagram | 🧐 [Mermaid](https://mermaid.js.org) |
| Environment | ✅ Vagrant, ✅ Docker |
| Architecture | ✅ [Structurizr](https://github.com/structurizr) |
| Configuration | 🧐 [Ansible](https://www.ansible.com/overview/how-ansible-works), 🧐 [Puppet](https://www.puppet.com/docs/puppetdb/7/overview.html), 🧐 [Chef](https://www.chef.io/products/chef-infra) |
| 3D CAD Model | ✅ [OpenSCAD](https://openscad.org/) |
| Documentation | ✅ Markdown, 🧐 Asciidoc |
| Comment | ✅ [Github Copilot](https://github.com/features/copilot) |
| UI | 🧐 [Flutter](https://docs.flutter.dev/get-started/flutter-for/declarative) |
| Real-world Contract | 🧐 [Solidity](https://docs.soliditylang.org/en/v0.8.18/) |

## Demystification

> Inline refereces were strongly recommended to read!

### *Terraform* and *Ansible*

- Infrastructure as Code
- 自动化 数记/跟踪 你的基础架构
- 自动化 开发-部署-测试-发布 整个流程
- 与 CI/CD 有重合
- Strictly for defining and provisioning 基础架构
- Ansible is for configuration of that 基础架构
- 管理架构下的 resource
- 如需 scale up, apply one-machine-config to ALL

### *Ansible* and *Puppet*

> Summary: use cli X to **deploy** with the **config** (its X format)

- Yes, it's Configuration Management
- Yes, it's Configuration Management for [OS and Apps](https://old.reddit.com/r/sysadmin/comments/1dfft0/puppet_what_do_you_use_it_for/)
- Yes, it's Configuration Management but it needs to be ran :)
- So just choose one that [feels good and suits you](https://old.reddit.com/r/sysadmin/comments/2k3ggs/puppet_should_i_use_it/)
- So the *config management* is coupled with *deploy with that config*
- *Ansible* turns those manual deployment into *one cli with a `yaml` file*, like:
  - Downloading the software
  - Copy the configuration
  - Start up the service
  - Check the status

-----

## References

### Confusion

- [Purpose of Terraform](https://old.reddit.com/r/explainlikeimfive/comments/hfkmya/eli5what_is_the_purpose_of_terraform_computer/)
- [Terraform's place in CI/CD](https://old.reddit.com/r/Terraform/comments/qlm3ew/newbie_questions_about_cicd_and_how_terraforms/)
- [Ansible vs. Terraform, Clarified](https://www.redhat.com/en/topics/automation/ansible-vs-terraform)
- [Can’t Justify Terraform (An Ansible perspective)](https://old.reddit.com/r/devops/comments/q9s2vq/cant_justify_terraform_an_ansible_perspective/)
- [Ansible Playbooks](https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html)

### Experiment

- [lreimer/everything-as-code: A Polyglot Experiment](https://github.com/lreimer/everything-as-code)

### Concept

- [**In-depth Research and Trends about X as Code**](https://www.jedi.be/blog/2022/02/23/trends-and-inventory-of-50-as-code-concepts/)
- [Everything-as-Code](https://openpracticelibrary.com/practice/everything-as-code/)
- [X as code](https://renenyffenegger.ch/notes/development/as-code/index)
- [软件化的几个基本特点](https://twitter.com/Svwang1/status/1586093468450836483) by [硅谷王川](https://chuan.us/)
- [What is Everything-as-Code? Examining the Explosion of "as Code" Buzzwords | HackerNoon](https://hackernoon.com/everything-as-code-explained-0ibg32a3)
- [What is Everything as Code? - Octopus Deploy](https://octopus.com/blog/what-is-everything-as-code#other-examples-of-everything-as-code)
- [Understanding X as A Code](https://quadralogics.com/research/XAsCode.html)
- [Docs as Code — Write the Docs](https://www.writethedocs.org/guide/docs-as-code/)

<!-- toc -->

## What

> I bet tons of people know how to write amazing apps, websites and so on, yet, not so good at making PowerPoints. It seems trivial in hindsight. Though eventually you would reach a point that you need to present your ideas to a team. For a newbie programmer like me, I'm frustrated with GUI apps like PowerPoint or Keynote. So I need something that could make the process easier, and maybe with a bit of aesthetics.

### [Marp](https://marp.app/#get-started)

> This is the one I've eventually settled on. You can write simple Markdown to generate good-enough documents for presentation purposes.

- Basically you need two things
  - the cli: [@marp-team/marp-cli - npm](https://www.npmjs.com/package/@marp-team/marp-cli)
    - the extension: [Marp for VS Code - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)

- Here's the configuration I'm currently using

  > Put this at the top of your `.md` file

  ```yaml
  ---
  marp: true
  theme: gaia
  _class: lead
  paginate: true
  backgroundColor: #fff
  backgroundImage: url('https://marp.app/assets/hero-background.svg')
  ---
  ```

-----

## More

- [Speaker Deck | Easily Share Your Presentations Online](https://speakerdeck.com/)

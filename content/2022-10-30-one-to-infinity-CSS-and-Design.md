+++
title = "On CSS, Layout and Design"
description = "Notes on learning CSS to build amazing things"
+++

## Resources

> Read, practice and write blog about it!

- Book
  - [CSS Mine: Dig into Web UI Development](https://cssmine.com/ebook/intro)
- Reference
  - [Dribble](https://dribbble.com/shots/popular)
  - [CSS Reference](https://tympanus.net/codrops/css_reference/)
- Tutorial
  - [A Complete Guide to CSS Grid | CSS-Tricks - CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - [A Complete Guide to Flexbox | CSS-Tricks - CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  - [A Complete Guide to CSS Concepts and Fundamentals](https://www.taniarascia.com/overview-of-css-concepts/)
- Examples to learn from
  - [Flexbox Patterns - Intro](https://flexboxpatterns.com/)
  - [CSS Code Examples](https://freefrontend.com/css-code-examples/#sitemap-layouts)
  - [JavaScript Code Examples](https://freefrontend.com/javascript-code-examples/)
- Snippets to use
  - [A collection of popular layouts and patterns made with CSS - CSS Layout](https://csslayout.io/)
  - [Free Open Source Tailwind CSS Components | HyperUI](https://www.hyperui.dev/)

## Thoughts

#### Foreword

> Watched a lot of CSS videos, done a lot exercises on websites like *w3school*, still have no idea to build a functional layout.
>
> Of course, I could just copy a template that looks familiar to my liking or the website I'm gonna build. But still, if you haven't got the foundations built, you wouldn't where to start modifying, especially you want to use some modern frameworks like *Bulma* or *Tailwind*.
>
> I said to myself I'm gonna be a *Backend Developer*. Well, it's better know it all, right? It's an amazing feeling when you got the whole development process <small>(also known as *Fullstack*)</small> at your hand.
>
> Sidenote
>> When I say *modern*, it means it's *new* and *interesting*
BootStrap is still amazing (so I heard) though.

## Notes

#### Concept

- The HTML will always have some types of styling attached to them

 > It's called *User Agent Styles*. Why? Because *HTML* is just like *Markdown*, they are markup languages. It means it was merely texts, and the actual styling must be done by the software (whether it's renderer for the *Markdown* or the *Browser* for rendering HTML code).

- Specificity

 > Based my experience, more clearer path wins. Or you could just debug them using the developer console.

- Font

 > Keywords: `monospace`, `sans` and `sans-serif`

 ```css
 /* These were the built-in fonts for OSs below if not being tampered */

 .for-windows {
  font-family: Arial, Lucida, Impact, Times New Roman, Courier New, Tahoma, Comic Sans, Verdana, Georgia, Garamond;
 }

 .for-macos {
  font-family: Helvetica, Futura, Bodoni, Times, Palatino, Courier, Gill Sans, Geneva, Baskerville, Andale Mono;
 }
 ```

- Layout Model

- Three types of them
    1. Dumb built-in methods like `position` and such
    2. Newly introduced *CSS Flexbox* and *CSS Grid*

    > More methods dedicated to the layout are available to you

    ```css
    .stuff {
      display: flex;

      /*
        Now all the layout methods of CSS Flex would be avaialble to this
        parent and all of its children elements and selectors!
      */
    }
    ```

    3. Frameworks like *Bootstrap* because back then we do not have things like *Flexbox*

- Variable

  ```css
  /* Global and Local Variable */
  :root {
    --global-variable-color: red;
  }

  .whatever {
    --non-global-color: white;

    color:            var(--global-variable-color);
    background-color: var(--non-global-color);
  }


  /* Inline Declaration */
  .btn {
    padding: 2rem 4rem;

    font-size: var(--button-size, 0.6em);

    background: transparent;
    border: 2px solid var(--color, black);
    border-radius: 2px;
  }

  .btn.special-button {
    --color: red;
    --button-size: 1.2em;
  }


  /* Calculation */
  .header {
    --space: calc(16px * 2);

    font-size: var(--space);
  }


  /* Inheritence */
  div {
    --ft-size: 17px;
  }

  div.footer {
    font-size: var(--ft-size);
  }
  ```

## Practice

> On [*CodePen*](https://codepen.io/)

1. [Sup Card](https://codepen.io/techmale/pen/RwJWVjr)
2. [Signup Page](https://codepen.io/techmale/pen/KKedoeL)
3. [Fake Phone](https://codepen.io/techmale/pen/yLEegLx)
4. [CSS Variable > Hover](https://codepen.io/techmale/pen/GRGZGqL)
5. [CSS Variable > Theme Switch](https://codepen.io/techmale/pen/rNKeKdp)
6. [CSS Variable > Color Preview](https://codepen.io/techmale/pen/OJENwBO)
7. [CSS Layout > Music Player](https://codepen.io/techmale/pen/eYKzGPG)
8. Random snippet from my React project <small>(with *TailwindCSS*)</small>

    > Display all the images in the same size ()

    ```css
    <motion.div
        whileHover={{ scale: 1.2 }}
        className="w-40 h-40 -mt-8 drop-shadow-2xl"
      >
      <img
        whileHover={{ scale: 1.07 }}
        src={item?.imageURL}
        alt="Random"

        /**
          object-contain    crop while retain all the details
          object-cover      crop while might crop out details (pleasing to me)
        */
        className="w-full h-full object-contain"
      />
    </motion.div>
    ```

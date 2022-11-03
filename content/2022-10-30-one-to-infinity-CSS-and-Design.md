+++
title = "On CSS, Layout and Design"
description = "Notes on learning CSS to build amazing things"
+++

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

1. The HTML will always have some types of styling attached to them

 > It's called *User Agent Styles*. Why? Because *HTML* is just like *Markdown*, they are markup languages. It means it was merely texts, and the actual styling must be done by the software (whether it's renderer for the *Markdown* or the *Browser* for rendering HTML code).

2. Specificity

 > Based my experience, more clearer path wins. Or you could just debug them using the developer console.

3. Font

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

4. Layout Model

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

## Practice

> On [*CodePen*](https://codepen.io/)

1. [Sup Card](https://codepen.io/techmale/pen/RwJWVjr)
2. [Signup Page](https://codepen.io/techmale/pen/KKedoeL)
3. [Fake Phone](https://codepen.io/techmale/pen/yLEegLx)

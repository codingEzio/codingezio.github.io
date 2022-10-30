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

## Practice

#### Product Card

1. HTML

 ```html
 <html>
 <head>
 </head>
 <body>
  <div class="movie">
   <h1> The SuperMan </h1>
   <p class="movie_description">
    An alien orphan is sent from his dying planet
    to Earth, where he grows up to become his
    adoptive home's first and greatest superhero.
     <button class="movie_button">Add to Cart</button>
   </p>
  </div>
 </body>
 </html>
 ```

2. CSS

 ```css
 .movie {
   box-sizing: border-box;
   width: 100%;

   /* Giving spaces for the content to show */
   padding: 20px 20px 20px 190px;

   color: #fff;
   background: url("http://i.imgur.com/lcm5byq.png") 20px 20px / 130px 210px no-repeat,
               url("http://i.imgur.com/2tiJEnP.png") 0% 0%     / cover                ;
 }

 .movie_description p {
   font-size: 1.3em;
 }

 button {
   font-size: 1.3em;

   padding: 10px;
   margin-top: 20px;
   border: none;
   display: block;

   background-color: red;
   color: white;
 }
 ```

+++
title = "Booknote on Effective Programming"
description = "Effective Programming: More Than Writing Code"
+++

### Resources

- [Jeff Atwood](https://www.goodreads.com/author/show/155536)
  - [Effective Programming: More Than Writing Code](https://www.goodreads.com/book/show/15746409)

### Notes

#### Ayy

> Honestly, I’d prefer that people spend their time discovering what problems they love and find interesting, first, and researching the hell out of those problems.

> The toughest thing in life is not learning a bunch of potentially hypothetically useful stuff, but figuring out what the heck it is you want to do.

> *Shamelessly following your joy*! (Exclamation mark is mine)

#### Communication

> Communication is just plain hard, particularly written communication. How exactly do you get better at something you self-selected out of? Blogging is one way.
>
> People spend their entire lives learning how to write effectively. It isn’t something you can fake. It isn’t something you can buy. You have to work at it.
>
> It’s exercise. No matter how out of shape you are, if you exercise a few times a week, you’re bound to get fitter. Write a small blog entry a few times every week and you’re bound to become a better writer.

> If you’re not writing because you’re intimidated by writing, well, you’re likely to stay that way forever.

> The difference between a tolerable programmer and a great programmer is not how many programming languages they know, and it’s not whether they prefer Python or Java. **It’s whether they can communicate their ideas.** By persuading other people, they get leverage. By writing clear comments and technical specs, they let other programmers understand their code, which means other programmers can use and work with their code instead of rewriting it. Absent this, their code is worthless.

#### Debug

> It’s frustrating to repeatedly bang your head against difficult, obscure bugs, but don’t let desperation lead you astray. An essential part of being a humble programmer is realizing that whenever there’s a problem with the code you’ve written, it’s always your fault.

#### It's Always About Trade-off

> .. to recognize that every decision we make is a trade-off
>
> To be a master programmer is to understand the nature of these trade-offs, and be conscious of them in everything we write.

#### Self-documenting Code

> Start with brevity. Increase the other dimensions as required by testing

> You should always write your code as if comments didn’t exist. This forces you to write your code in the simplest, plainest, most self-documenting way you can humanly come up with.
>
> - !st  ->  no comment, just plain code
> - 2nd  ->  with comment, but could be better
> - 3rd  ->  conv ‘comments’ as func name!

> Junior developers rely on comments to tell the story when they should be relying on the code to tell the story.
>
> Comments are narrative asides; important in their own way, but in no way meant to replace plot, characterization, and setting.
>
> Take the learning curve for specific frameworks and stuff. This is just too true especially when you were in this software industry for a while.

> If your feel your code is too complex to understand without comments, your code is probably just bad. Rewrite it until it doesn’t need comments any more.
>
> If, at the end of that effort, you still feel comments are necessary, then by all means, add comments. Carefully.

#### Source Code is King

> Even if “view source” isn’t built in (but it totally should be), you should demand access to the underlying source code for your stack.
>
> No matter what the documentation says, the source code is the ultimate truth, the best and most definitive and up-to-date documentation you’re likely to find.
>
> "I encourage developers to git clone anything and everything they depend on."
>
> This will be true forever, so the sooner you come to terms with this, the better off you’ll be as a software developer.

#### Read the Fucking Source Code

> I encourage developers to git clone anything and everything they depend on. Initially, they are all afraid. “That project is too big, I’ll never find it!” or “I’m not smart enough to understand it” or “That code is so ugly! I can’t stand to look at it”. But you don’t have to search the whole thing, you just need to follow the trail.
>
> And if you can’t understand the platform below you, how can you understand your own software?

> .. most of the time, what inexperienced developers consider beautiful is superficial, and what they consider ugly, is battle-hardened production-ready code from master hackers.
>
> .. read other people’s code because we have to understand it to get things done. So don’t be afraid to read the source, Luke — and follow it wherever it takes you, no matter how scary looking that code is.

#### Learn to Ask Questions Properly

> Sometimes asking the right question seems like half the problem.

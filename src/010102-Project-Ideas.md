> Some dumb ideas of my own
<!-- toc -->

## P :: Deadline Helper

> Finish Task Like It's Your Last Day/Hour
>
> Fucking hell, I felt like *Github Copilot* is really stripping my autonomy to think and write.. So I rewrote the whole thing.

### Context

- Having trouble focus the tasks at hand
- Having trouble finishing the tasks in time
- Limited time
- High expectations
- TBD

### Proposed Solution

#### Idea

- N/A

#### Implementation

- Input
  - time available (start date time, end date time)
  - how many productive hours you usually got during this period
  - *one* task

## P :: Project Extraction

### Iteration 01

- An app that helps you extract the ideas for the articles you read, but it
  - can also be articles
  - can also be essays
  - can also be books
  - can also be podcasts

- Thoughts

  > Actively extracting ideas from the content you consume and also reserving the thought process, about the reserving: the references, and the questions I asked (by myself, like WHAT/WHY/HOW; thought I think the WHAT/WHY/HOW should also be customizable, but we shall take a thorough consideration to produce a generalized question format first!)

- It shall have export options
  - to a blog format (ask user if they are using static generators like Hexo etc.)
    - which the user shall define the header by default
      - we shall create another repository to store different static gen header format
      - static generators that I can think of: Hexo, Hugo, Zola etc.
    > They do have differences of course, though I think the most differences between them shall be the header (the meta information for the static generators to parse).
    - one thing that I forgot is the file name of the blog file (it shall be an afterthought when I'm writing this down, because the file name shall not matter much since it was NOT going to be the file name, at least for Zola, hehe)
  - to a simple Markdown file
    - the questions I asked shall be the header
    - And the answers shall be any other stuff, like quotes, lists and so on
    - And I think the references shall be in a separate section, because
      - you shall extract the content from references as well
      - you shall extract the references and integrate into your content
      - the references shall be as small as possible
        - because you have already consumed all the gist
        - there can be references, it's just I think you shall finish the whole though in one go
- Please, and please simply the stack at the very outset
  - SQLite
  - Ready-to-use UI components (and the LAYOUT!!)
- Most knowledge was meant to be learned at a one-time effort.
  - Yeah, for simple tasks it is indeed quick and easy. But I'm not just talking about those technical ones. It can be any other types of stuff.
  - well.. Now I'm lost in my train of thought as well..

### Iteration 02

- add
  - or info only
  - or detailed meta info

- then start writing immediately

  - title
  - what
  - why
  - how you feel
  - how you wanna approach this

- one-time choice (improve till next iteration)

  - choose by major
  - choose by topic

- export as .md to github pages
  > Still could change the meta info like modified time

  - to Zola
  - to Hugo
  - to Hexo
  - to Mdbook

### Iteration 03

- Name: *Make It Count*

-----

## P :: Synchronize Everything

- You got an app that you love to use (on iOS, Android)
- You want the data inside those apps to be kept in sync so that you could access them on your computer (Web) as well

## P :: Tabify

- A website that allows you do multiple things all in one (iframe-level isolation, not quite iframe)
- The website shall allow you do as much as possible (resources being used can be thought about later)
- It shall have tabs, that you can
  - Read PDFs
  - Access terminal (can be routed via the local one like gotty or a WebAssembly one)

## P :: Incremental Code (codeinr.com)

- A website that allows people to upload their tutorials
- The tutorial is often a small snippet (can be long as well, but one single file is preferred, and might be enforced as well)

  > Take a LeetCode problem for example. The solution is usually not a linear progress. At the same time, there were a lot of boilerplate code for similar kinds of problems. We do have people summarizing those as *template* or *模板*. But what if we have a visual tool that allows everyone to do this?
  >
  > The rational is like this: a few people writes tutorials. Some of them use illustrations. And a small bit of them use step-by-step illustrations. And... not all of them are doing a great job about those so-called step-by-step illustrations. The most two important thing I could think of is that, almost all of them are pictures instead of texts (that leaves even if you want to do it yourself in the simple way, you'll have to turn those procedures into pictures as websites like LeetCode.cn only allow pictures as steps instead of code.); And another thing is, there was a centralized place for people to write those

## P :: LeetCode, randomized

- Lucky (essential) algorithm
- When I cannot get too much satisfaction from a task, I would add the random factor to it.
- The candidates should be essential (e.g. for the interview), but of course, the users must be able to add their own favorites.
- The ‘add’ feature shall be simple (users only need to provide the serial number or the name of the question, but of course, it’s okay for users to add the question link by themselves as long as we do a validation of the URL)

## P :: Log Me / Everything

- An app logging everything you do
- The app includes a built-in web browser (WebView, at least for Android), which you could do almost everything (since everything are web apps now) (suppose the things you do in the built-in web browser can be logged, and, the login process for websites that require you to log in)
- then you can add a ton of other tools you would use regularly
- it’s an app that has almost everything you do (well.. it occurs to me that the thing I’m trying to build/describe is kinda like a second WeChat or Alipay..)
- If some jobs cannot be done inside the app, you can click a kind of start button inside the app, then click the end after you finish that task (= you did X from time ONE to time TWO)

## P :: Help Me Understand the Architecture

- Target the projects that were complex (Microservices most likely)
  - Pre-build components/widgets like Service Discovery, Circuit Breaker
  - Animated process flow
    - based on scenarios (fail, success, fail-situation1, fail-situation2 etc.)
- Simply put
  - A drawing tool that specifically targeted Microservices

## P :: Can I Use This Port

- Specifically designed for people who's gonna design libraries that would be used by someone else yet want to avoid port collisions
  - It is a trivial task and it's really a rare occasion
  - Though.. I do see there's people who's on stackoverflow asking*how I kill this port*, other than they started the server for testing and forgot to close it, it was partly caused by the sheet numbers of applications that were run on a developer's machine
- Research what ports are used, like
  - 3000 for JavaScript frameworks like Express, React etc.
  - 443 for HTTPS
  - 21 for SSH
- RESTful service that only accepts Integers

-----

## Beyond My Own

- [Project ideas](https://louisabraham.github.io/project-ideas) by [Louis Abraham](https://louisabraham.github.io/)

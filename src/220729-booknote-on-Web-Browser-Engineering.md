> Booknote on Web Browser Engineering
<!-- toc -->

### Resources

- [Pavel Panchekha](https://pavpanchekha.com/) and [Chris Harrelson](https://twitter.com/chrishtr)
  - [Web Browser Engineering](https://browser.engineering/) <small>(building a basic but complete browser)</small>

### Notes

> What’s amazing is that, despite the scale and the pace and the complexity, there is still room to contribute.
>> Every browser has thousands of unfixed bugs, from the smallest of mistakes to myriad mix ups and mismatches.
>>
>> Every browser must be endlessly tuned and optimized to squeeze out that last bit of performance.
>>
>> Every browser requires painstaking work to continuously refactor the code to reduce its complexity, often through the careful introduction of modularization and abstraction.

> HTML & CSS are meant to be black boxes — declarative APIs — where one specifies what outcome to achieve, and the browser itself is responsible for figuring out the how to achieve it.

> A browser contains
>
> - a rendering engine more complex and powerful than any computer game;
a full networking stack;
> - clever data structures and parallel programming techniques;
> - a virtual machine, an interpreted language, and a JIT;
> - a world-class security sandbox; and
> - a uniquely dynamic system for storing data.

> The browser
>> *is* the User Agent, but also the mediator of the web’s interactions and the enforcer of its rules.
>>
>> *is* the implementer of the web: Its sandbox keeps web browsing safe; its algorithms implement the declarative document model; its UI navigates links

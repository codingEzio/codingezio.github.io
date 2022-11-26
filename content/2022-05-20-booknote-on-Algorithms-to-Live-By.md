+++
title = "Booknote on Algorithms to Live By"
description = "The Computer Science of Human Decisions"
+++

### Resources

- [Brian Christian](https://www.goodreads.com/author/show/4199891) and [Tom Griffiths](https://www.goodreads.com/author/show/15185284)
  - [Algorithms to Live By: The Computer Science of Human Decisions](https://www.goodreads.com/book/show/25666050)

### Notes

#### 优择

> How do you make an *informed decision* when the very *act of informing it jeopardizes* the outcome?
>
> The more information you gather, the better you’ll know the right opportunity when you see it—but the more likely you are to have already passed it by.

> In a finite space and time, we'd all face
>
> - What should we do, and leave undone, in a day or in a decade?
> - What degree of mess should we embrace—and how much order is excessive?
> - What balance between new experiences and favored ones makes for the most fulfilling life?

#### 现实世界中的算法

> An algorithm is just a *finite sequence of steps used to solve a problem*, and algorithms are much broader—and older by far—than the computer.

> Algorithms in Real Life
>
> - When you cook bread from a recipe
> - When you knit a sweater from a pattern
> - When you put a sharp edge on a piece of flint by executing a precise sequence of strikes with the end of an antler—a key step in making fine stone tools

#### 交叉点

> Challenges faced by computers and human minds alike: how to manage finite space, finite time, limited attention, unknown unknowns, incomplete information, and an unforeseeable future; how to do so with grace and confidence; and how to do so in a community with others who are all simultaneously trying to do the same.

#### Misc

> The hazards of order are quantifiable and that their costs can be measured in the same currency: time. Leaving something unsorted might be thought of as an act of procrastination—passing the buck to one’s future self, who’ll have to pay off with interest what we chose not to pay up front.
>
> But the whole story is subtler than that. Sometimes mess is more than just the easy choice. It’s the optimal choice.

### In Practice -> Choose A Secretary

#### The Secretary Problem :: no-information game

> Imagine you’re interviewing a set of applicants for a position as a secretary, and your goal is to maximize the chance of hiring the single best applicant in the pool.
>
> You can decide to offer the job to an applicant at any point and they are guaranteed to accept, terminating the search. But if you pass over an applicant, deciding not to hire them, they are gone forever.

#### Secretary Problem :: *Look*-Then-*Leap*

1. Set a pre-determined time to *gather data* (Look) (explore options, not categorically choosing anyone)
2. *Instantly commit* (Leap) to anyone who *outshines* the best you saw in the look phase

#### The 37% Rule

> To be precise, the mathematically optimal proportion of applicants to look at is 1/e—the same mathematical constant e, equivalent to 2.71828…, that shows up in calculations of compound interest.
>
> You don’t need to worry about knowing e to twelve decimal places: anything between 35% and 40% provides a success rate extremely close to the maximum.

#### The 37% Rule, Illustrated

> Look at the first 37%, choose none (set a baseline)
>
> <img src="https://web.archive.org/web/20221126011159/https://comicsgrinder.com/wp-content/uploads/2016/05/optimal-stopping-algorithm-brian-christian.jpg" alt="An illustration that shows the 37% rule which relates to the Optimal Shopping problem" width="40%" height="auto" />
>
> Choose any option that is better than what you have seen so far

#### The Secretary Problem :: with full information

> The chance of ending up with the single best applicant comes to 58%—still far from a guarantee, but considerably better than the 37% success rate in the no-information game. ￼
>
> If you have all the facts, you can succeed more often than not, even as the applicant pool grows arbitrarily large.

### In Practice -> Parking

> The lessons to be learned from optimal stopping aren’t limited to dating or hiring.
>> In fact, trying to make the best choice when options only present themselves one by one is also the basic structure of selling a house, parking a car, and quitting when you’re ahead.

> [*Shoup*](https://en.wikipedia.org/wiki/Donald_Shoup) argues that many of the headaches of parking are consequences of cities adopting policies that result in extremely high occupancy rates.
>
> - If the cost of parking in a particular location is too low (or—horrors!—nothing at all)
> - Then there is a high incentive to park there, rather than to park a little farther away and walk.
> - Everybody tries to park there, but most of them find the spaces are already full
> - And people end up wasting time and burning fossil fuel as they cruise for a spot.

> A policy reminder to municipal governments
>
> - Parking is **not as simple** as *having a resource* (spots) and *maximizing* its *utilization* (occupancy).
> - Parking is also a process — an optimal stopping problem — and it’s one that consumes attention, time, and fuel, and generates both pollution and congestion.

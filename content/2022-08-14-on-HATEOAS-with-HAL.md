+++
title = "On HATEOAS and HAL"
description = "Notes on HATEOAS and HAL"
+++

## Concepts

#### Abbreviation

- HAL: *H*yer *A*pplcation *L*anguage

 > Consider *HAL* as *JSON with API navigation capability*
 >
 > Normally you get the **raw data in something like JSON**, but sometimes you wanna return more than the data which allows the users to navigate solely based on the API. This is where *HAL* or *JSON-LD* <small>(*JSON* for *L*inked *D*ocuments)</small> could be of use.

- HATEOAS: *H*ypermedia *A*s *T*he *E*ngine *O*f *A*pplication *S*tate

 > Basically it means the users should be able to navigate solely based on the APIs you returned. The server has to be support it, as the programmer normally need to use HAL to achieve this.
 >
 > Here's a snippet I copied from [Uniform interface](https://en.wikipedia.org/wiki/Representational_state_transfer#Uniform_interface) on Wikipedia
 >
 > Having accessed an initial URI for the REST application—analogous to a human Web user accessing the home page of a website—a REST client should then be able to use server-provided links dynamically to discover all the available resources it needs. As access proceeds, the server responds with text that includes hyperlinks to other resources that are currently available.

-----

## Resources

- [On Choosing a Hypermedia Type for Your API](https://sookocheff.com/post/api/on-choosing-a-hypermedia-format/)
- [Relationship and Difference between HAL and HATEOAS](https://stackoverflow.com/questions/25819477/relationship-and-difference-between-hal-and-hateoas)
- [HATEOAS: Concise Description](https://stackoverflow.com/questions/9192648/hateoas-concise-description)
- [Can Someone Please ELI5 HATEOAS in API?](https://old.reddit.com/r/learnprogramming/comments/qwxta9/can_someone_please_eli5_hateoas_in_api/)

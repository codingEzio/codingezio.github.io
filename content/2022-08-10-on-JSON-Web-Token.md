+++
title = "On JSON Web Token"
description = "Notes on JSON Web Token"
+++

### Concepts and Terminology

##### What Is It, Really

- It's **small** in size which then could be **put in URL**
- It's another **authentication method** like username with password
- It's **created and sent** to the user **after being auth-ed** using username with password

##### Structure

> `xxxxx` **.** `yyyyy` **.** `zzzzz` <small>(no spaces in the actual token) </small>

1. `xxxxx`: Type of the token and its hashing algorithm
2. `yyyyy`: The payload which contains user information
3. `zzzzz`: A signature used to verify the token hasn't been changed

##### *OAuth* versus *JWT*

- *OAuth* defines a protocol
  - It **could** specify how tokens are transferred
  - It **could** use *JWT* as a token
- *JWT* is a token format

-----

### Resources

##### Concepts and Terminology

- [What are the main differences between JWT and OAuth authentication?](https://stackoverflow.com/questions/39909419/what-are-the-main-differences-between-jwt-and-oauth-authentication)

##### Root

- [IETF RFC 7519](https://www.rfcreader.com/#rfc7519)
- [Introduction to JSON Web Tokens](https://jwt.io/introduction)
- [JSON Web Tokens](https://auth0.com/docs/secure/tokens/json-web-tokens)
- [Java JWT: JSON Web Token for Java and Android](https://github.com/jwtk/jjwt)

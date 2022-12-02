+++
title = "On JSON Web Token"
description = "Notes on JSON Web Token"
+++

### Concepts and Terminology

#### Core

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

#### Sign

##### What I Mean

> As you know, a JWT token has to be signed with a *secret* key with the user data <small>(normally it's the usrename)</small>. It could be a *hashed string* or a *public/private key pair* (in the form of a file).

##### Facts

> Derived from confusion
>
> - [JWT Private / Public Key Confusion](https://stackoverflow.com/questions/60538047/jwt-private-public-key-confusion)
> - [How does a server verify a JWT? Where does the Public Key come from?](https://stackoverflow.com/questions/63106661/how-does-a-server-verify-a-jwt-where-does-the-public-key-come-from)

1. The user will only have a bare JWT token
2. The user will never have a public key or a private key on his side
3. The server generates a token using a private key (with user data)
4. The server parse a token using a public key (to extract user data)

-----

### Non-inline References

- [What are the main differences between JWT and OAuth authentication?](https://stackoverflow.com/questions/39909419/what-are-the-main-differences-between-jwt-and-oauth-authentication)
- [IETF RFC 7519](https://www.rfcreader.com/#rfc7519)
- [Introduction to JSON Web Tokens](https://jwt.io/introduction)
- [JSON Web Tokens](https://auth0.com/docs/secure/tokens/json-web-tokens)
- [Java JWT: JSON Web Token for Java and Android](https://github.com/jwtk/jjwt)

+++
title = "Booknote on HTTP: The Definitive Guide"
description = "Describes the WHY And the HOW of HTTP and Web Core Technologies"
+++

### Resources

- [David Gourley](https://www.goodreads.com/author/show/242161)
  - [HTTP: The Definitive Guide](https://www.goodreads.com/book/show/429697)

### Notes

#### HTTP Server

- Web content lives on web servers
- Web servers speak HTTP protocols, aka. HTTP servers
- HTTP clients send HTTP requests
- HTTP servers returned data in HTTP responses

#### Web Resources

- It is the source of web content
- It is any identifiable resource
  - whether it's digital, physical or abstract
  - present on or connected to the WWW
- Anything can be obtained from WWW (via URI)
  - web pages (static and dynamic)
  - static files and documents: PNG, PPT, PDF etc.
  - software programs: E-mail, Google, web gateway etc.

#### URI and URL

> References: [\#1](https://stackoverflow.com/questions/4913343/what-is-the-difference-between-uri-url-and-urn)

- UR -> *I*dentifier, *L*ocator, *N*ame
  - UR*I*: identify a name or a resource (superset)
  - UR*L*: where the resource is and how to get it
  - UR*N*: URN scheme, doesn't imply availability
- Examples
  - URL (are also URI)
    - `www.ietf.org`
    - `mailto:John.Doe@example.com`
    - `<ftp://ftp.is.co.za/rfc/rfc1808.txt>`
    - `telnet://192.0.2.16:80/`
  - URN (are URI, aren't URL)
    - `urn:ietf:rfc:2141`
    - `tel:+1-816-555-1212`
    - `urn:isbn:0-486-27557-4`
    - `urn:oasis:names:spec:docbook:dtd:xml:4.1.2`

#### HTTP Transaction

- Consist of
  - request command (sent from client to server)
  - response result (from server, back to the client)
- We often issue multiple HTTP transactions
  - to accomplish a task (cuz the page is complicated)
  - like images, scripts (already >1 transactions!)

#### HTML Methods

- `GET`: send named resource from server to client
- `PUT`: store data from client into a named server
- `POST`: send client data into a server gateway app
- `HEAD`: send the HTTP headers from the response
- `DELETE`: delete the named resource

#### HTTP Media Types *MIME*

> aka. MIME (Multipurpose Internet Mail Extensions)

- A data format label
- A texual label that has a primary and a subtype
  - e.g. `image/gif`, `text/html`, `video/quicktime`
  - e.g. `application/vnd.ms-powerpoint`
- History
  - Originally designed for moving mail messages
  - Later adopted to describe/label media content

#### HTTP Media Types - why *MIME*

- The Internet hosts lots of different data types
- HTTP servers tags objects being transported with MIME type
- HTTP servers attach a MIME type to all HTTP object data
- HTTP clients handle it based on the associated MIME type
  - The clients would know how to handle the objects
  - e.g. display images, play audio files, parse HTML etc.

#### HTTP Message

- It is
  - Request messages: from web clients to servers
  - Response messages: from servers to clients
- It contains
- *Start line*: what to do for a request OR what happened for a response
- *Headers*: multi 'Key: value' fields, varies on req/resp
- *Body*: any arbitrary binary data; carry OR carry back

#### HTTP Message - Example Explained

- Request
  - The browser sends an HTTP request message
  - It has a HTTP method GET
  - Its URI of the resource is 'test/hi-there.txt'
  - It speaks Version 1.0 of the HTTP protocol
  - It has a few request headers
  - It has no body
- Response
  - It speaks Version 1.0 of the HTTP protocol
  - It returns a status code 200, it suggests success
  - It has a few response headers
  - It has a response body (sent to the client)

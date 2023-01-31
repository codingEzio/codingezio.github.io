<!-- toc -->
+++
title = "Booknote on Spring Boot with React"
description = "Full Stack Development with Spring Boot and React"
+++

### Metadata

- *Full Stack Development with Spring Boot and React: Third Edition*
- Get the [*book*](https://www.amazon.com/Full-Stack-Development-Spring-React/dp/1801816786)
- Get the [*source code*](https://github.com/PacktPublishing/Full-Stack-Development-with-Spring-Boot-and-React)

### Preface

- Third-party software I will be using
  - [Postman](https://www.postman.com/downloads/): An API platform for building and using APIs
  - [`mycli`](https://github.com/dbcli/mycli): Terminal client for MySQL that have auto-completion and syntax highlighting
  - [`http`](https://github.com/httpie/httpie): Human-friendly CLI HTTP client for the API era
  - [`jq`](https://github.com/stedolan/jq): Lightweight and flexible command-line JSON processor.

-----

### Data

##### Table Relationship

- Take **Alex** *HAS* many **cars**

    ```java
    // (1) Define the ONE  in MANY    subject / 主体
    // (2) Define the MANY in ONE     object  / 客体


    // (1) Car.java
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner")
    private Owner owner;                   // Here the `owner` steer all the name changes

    // (2) Owner.java
    @OneToMany(cascade = CascadeType.ALL,  // del ONE, all related MANY were deleted as well
               mappedBy = "owner")         // signify 'MANY has ONE' (inst init in Car.java)
    private List<Car> cars;
    ```

### Spring Security

##### Basic Authentication

1. Out-of-the-box authentication <small>(**only for development**)</small>
    > That's it! Go grab the password from the terminal output

    ```xml
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    ```

2. Be ready to save the users to the database

    ```java
    // User.java             POJO with Getters and Setters
    // UserRepository.java   CrudRepository with a method `findByUsername`

3. Configuring users' details by overriding `UserDetailsService`

    ```java
    public class UserDetailsServiceImpl implements UserDetailsService {

        ...

        public UserDetails loadUserByUsername(String username) .. {

            ...

        }

    }
    ```

4. Integrating `UserDetailsService` into the `AuthenticationManagerBuilder`

    > We use the [BCrypt](https://web.archive.org/web/20220831085838/https://auth0.com/blog/hashing-in-action-understanding-bcrypt/) hashing in this case, go to [bcryptcalculator](https://www.bcryptcalculator.com/encode) create your own

    ```java
    // Switch off the <default> web security <configuration> (we'll customize it)
    @Configuration
    @EnableWebSecurity

    // A new configuration class to customize `WebSecurityConfigurerAdapter`
    public class .. extends WebSecurityConfigurerAdapter {

        // Define which endpoints are secured or not (abstractly speaking)
        // We'll delete this one for the `configureGlobal()` to work properly
        @Override
        .. configure      (HttpSecurity httpSecurity)         .. { ... }

        // The method name
        @Override
        .. configureGlobal(AuthenticationManagerBuilder auth) .. {

            authenticationManagerBuilder
                .userDetailsService ( .. )
                .passwordEncoder    ( .. ) ;
        }

    }
    ```

5. Extra cautions need to be made

    ```java
    // domain/UserRepository.java

    // Not exposing '/api/user/' as a RESTful resource
    @RepositoryRestResource(exported = false)
    public interface UserRepository extends .. < .. > { ... }
    ```

6. Testing the authentication process

    ```bash
    # The basic authentication would go live as soon as you got the dependencies
    # - username    user'
    # - password    shown in terminal (e.g. de4c2211-0031-4251-991d-1ee3f8aa521e)
    http GET http://localhost:8080/api/cars --auth-type basic --auth user:PASSWORD
    http GET http://localhost:8080/api/cars                   --auth user:PASSWORD

    # Note that even if we added the BCrypt hashing, when you are doing the
    # the authentication in a terminal, you still only need to use the plain-text form.
    ```

##### Spring Security with *JWT*

> *J*SON *W*eb *T*oken

###### Configure Authentication for `/login`

1. Adding dependencies

    > Copied from the [*Java JWT* Github repository](https://github.com/jwtk/jjwt#maven) <small>(*Maven*)</small>

    ```xml
    .. <artifactId>jjwt-api</artifactId>     ..
    .. <artifactId>jjwt-impl</artifactId>    ..
    .. <artifactId>jjwt-jackson</artifactId> ..
    ```

2. Writing utilities

    > `service/JwtService.java`

    ```java
    .. generateJwtToken     () { ... }
    .. getAuthenticatedUser () { ... }
    ```

3. Medium for storing authentication credentials

    ```java
    public class AccountCredentials {
        private String username;
        private String password;

        // setters and getters
    }
    ```

4. Telling Spring this is an object would be used later

    > `SecurityConfig.java`

    ```java
    @Bean
    public AuthenticationManager theNameDoesNotMatter ( .. ) {

        // Used later in the LoginController for authenticating
        return authenticationManager();
    }
    ```

5. Doing the authentication then returning the response with token

    > `LoginController.java`

    ```java
    @RequestMapping( .. "/login" .. POST)
    .. tryAuthThenEmptyRespWithJwtToken ( .. ) {

        // provide the username and password for authentication

        .. authenticationManager.authenticate(credentials)
        .. jwtService           .generateJwtToken( .. )

        // return a blank response along with token related HTTP headers
    }
    ```

6. Excluding `/login` from being secured (it's protected by passwords already!)

    > Still `SecurityConfig.java` (in the step 4)

    ```java
    @Override
    protected void configure ( HttpSecurity httpSecurity ) {

        httpSecurity

            // Disable CSRF protection
            .csrf().disable()

            // Disable session creation
            .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()

            // Allow EVERYONE access the LOGIN via POST
            // - Allow (<Permit>All) everyone (Permit<All>)
            // - to access (authorizeRequests)
            // - /login                         /login
            // - with the HTTP method POST      HttpMethod.POST
            .authorizeRequests()
            .antMatchers(HttpMethod.POST, "/login")
            .permitAll()

            // Any other requests are allowed by authenticated users
            // i.e. you have to be authenticated when making any other requests
            .anyRequest().authenticated();

        }
    ```

###### Configure Authentication for anything else

> For the sole login step which is **accessing `./login`**, you could *POST* with a JSON body of *username with password*. For everything else, you cannot use it anymore
>>
>> 1. You have to use `GET` for *Read*
>> 2. and `POST` for *Create* (with its own body!)
>> 3. and `PUT` or `PATCH` to *Update*
>> 4. and `DELETE` to *Delete*
>
> Now you need to configure it in such a way that only a JWT token in the HHTP header is needed for authentication (of course, you have to be authenticated once already in order to get the JWT token).

1. Making use of the JWT token in the existing authentication state

    > `AuthenticationFilter.java`

    ```java
    @Component
    public class AuthenticationFilter extends OncePerRequestFilter {

        ...

        // Actions inside happen before the request

        @Override
        .. doFilterInternal ( .. ) throws .. {

            // Is there a JWT Authorization header

            // If there is
            // -> get the authenticated user object
            // -> authenticate with user object
            // -> set the global state to 'authenticated' (figuratively)

        }

        ... // proceed the request as usual
    }
    ```

2. Adding the filter into the *pre-login* process

    > `SecurityConfig.java`

    ```java
    public class SecurityConfig extends WebSecurityConfigurerAdapter {

        ...

        @Override
        .. configure(HttpSecurity httpSecurity) .. {

            httpSecurity
                ..  // disable CSRF protection and session for '/login'
                ..  // require authentication for requests other than logging in

                .and()

                // Integrating the new filter (find JWT then auth automatically)
                // into the authentication process. It would be invoked before
                // the actual 'username with password' authenticating step.

                .addFilterBefore(authenticationFilter,
                                 UsernamePasswordAuthenticationFilter.class);

        }

    }
    ```

###### Testing the *JWT* we integrated into the authentication process

- Log in using the username with password
    > The JWT token would be returned in the 'Authorization' HTTP Header

    ```bash
    # Postman
    # 1. Set URL          http://localhost:8080/login
    # 2. Set HTTP method  POST
    # 3. Click Tab 'Body' -> Raw -> 'JSON'
    # 4. Input your name and password (in the form of JSON)
    #    e.g. { "username": "user", "password": "user" }


    # HTTPie
    http --json POST 'http://localhost:8080/login' \
        'Content-Type':'application/json; charset=utf-8' \
        username="user" \
        password="user"
    ```

- Can we log in using the JWT token we got? <small>(yes.. with *filters*)</small>

    > I tried to POST with the 'Authorization' header with the 'Bearer: YOUR_JWT_TOKEN', it's always the 40X or 50X error code. The last error (after making various tweaks to the Controller) I got is the `500 Internal Server Error`, it said something like *`Cannot invoke "com.packt.cardatabase.domain.AccountCredentials.getUsername()" because "credentials" is null`*.
    >
    > Then something clicked in my mind, it's not a syntax error or incorrectly using the Spring framework, instead it's a *logic error* or a *human error*. You see, by default, each request made by the API testing software <small>(whether it's *Postman*, *HTTPie* or *curl* and so on)</small> are separated. Unless you tweaked the specific settings, each request are standalone <small>(simply put, each request has their own lifecycle or domain, there would not be any cookies attached, no sessions being maintained)</small>.
    >
    > That's why the thought of *using the JWT token to authenticate* failed. Why? Let's sort out the authentication process (simplified)
    >>
    >> 1. You need *username* and *password* to authenticate
    >> 2. You got the *JWT* token from the request (response header)
    >> 3. You want to use the *JWT* to authenticate
    >
    > The thing is, after step 1, you no longer have a valid *JWT token*, remember? Each request are **standalone**. Since we aren't using a database to store the authentication details (or *credentials*, or *authentication attempts*), the *JWT token* would go out of existence as soon as your successful request (with the JWT response header) ends. When you want to use a <small>(invalid)</small> JWT token to authenticate, the first thing Spring requires is your *username* and *password*, since you didn't provide one, the `AccountCredentials` would be `null` for sure.
    >
    > The solution would be saving the *credentials* to the database, we actually won't do that as of now since we were just testing this out. But now you get the idea, eh?
    >

- The filter we added resolved this issue once and for all. Now you could

    ```bash
    # Postman
    # 1. Set URL          http://localhost:8080/login
    # 2. Set HTTP method  POST
    # 3. Click Tab 'Body' -> Raw -> 'JSON'
    # 4. Input your name and password (in the form of JSON)
    #    e.g. { "username": "user", "password": "user" }
    #
    # -- Grab the token from the response header --
    #
    # 5. Set HTTP method  GET (choose based on your CRUD need)
    # 6. Click Tab 'Header', set these
    #          - KEY    Authorization
    #          - VALUE  Bearer YOUR.JWT.TOKEN


    # HTTPie
    # 1. Get the JWT token first (from the response header)
    # 2. Use the JWT token

    http --json POST 'http://localhost:8080/login' \
        'Content-Type':'application/json; charset=utf-8' \
        username="user" \
        password="user"

    http GET 'http://localhost:8080/api/owners/1' \
        "Authorization: Bearer YOUR.JWT.TOKEN"
    ```

### Implementing *CRUD* and *Query*

##### *C*reate

- Postman

    ```json

    // 1. Method: POST
    // 2. URL   : http://localhost:8080/api/cars (无具体 ID)
    // 3. Select Tab 'Body' -> raw -> JSON

    {
        "brand": "Auto",
        "model": "TrueEV",
        "color": "White",
        "registerNumber": "AEV-1001",
        "releasedAt": 2023,
        "price": 22000
    }
    ```

- HTTPie

    ```bash
    http --json POST 'http://localhost:8080/api/cars/' \
        'Content-Type':'application/json; charset=utf-8' \
        brand="Auto" \
        model="TrueEV" \
        color="White" \
        registerNumber="ATO-0001" \
        releasedAt=2023 \
        price=22000
    ```

##### *R*ead

- HTTPie

    ```bash
    http GET http://localhost:8080/api

    http GET http://localhost:8080/api/cars
    http GET http://localhost:8080/api/cars/1
    http GET http://localhost:8080/api/cars/1/owner

    http GET http://localhost:8080/api/owners
    http GET http://localhost:8080/api/owners/1
    http GET http://localhost:8080/api/owners/1/cars
    ```

##### *U*pdate

> Added *how you could add fields which are from another table*

- Postman

    ```json
    // 1. Method:
    //    - PATCH   fields you wanna update (>= 0 fields)
    //    - PUT     require all fields (left blank -> update NULL)
    // 2. URL   : http://localhost:8080/api/cars/4 (附上具体 ID)
    // 3. Select Tab 'Body' -> raw -> JSON

    {
        "brand": "Auto",
        "releasedAt": 2022,
        "price": 22000
    }


    // Update fields that were in another table
    // 1. Choose Method "PUT"
    // 2. Choose 'Headers'
    // 3. Put 'Content-Type' (KEY) and 'text/uri-list' (VALUE) in
    // 4. Select Tab 'Body' -> raw, then 'http://localhost:8080/api/owners/2'
    ```

- HTTPie

    ```bash
    # Update specific fields
    http --json PATCH 'http://localhost:8080/api/cars/4' \
        'Content-Type':'application/json; charset=utf-8' \
        brand="Auto" \
        releasedAt=2023


    # Update named fields and set all else to NULL
    http --json PUT 'http://localhost:8080/api/cars/4' \
        'Content-Type':'application/json; charset=utf-8' \
        brand="Auto" \
        releasedAt=2023


    # For some fields that were in another table, notice these quirks
    # 1. URL is under the '/api/cars/{id}/owner'
    # 2. Add the 'text/uri-list' HTTP header
    # 3. Submit the 'owner' "link" in the form of 'form' instead of JSON
    http --form PUT 'http://localhost:8080/api/cars/10/owner' \
        'Content-Type':'text/uri-list' \
        'data'='http://localhost:8080/api/owners/1'
    ```

##### *D*elete

- HTTPie

    ```bash
    http DELETE http://localhost:8080/api/cars/3
    http DELETE http://localhost:8080/api/owners/1
    ```

-----

##### *Q*uery

```bash

# Show the query methods available
http GET "http://localhost:8080/api/cars/search/" | jq "._links"
# > http://localhost:8080/api/cars/search/findByColor{?color}
# > http://localhost:8080/api/cars/search/findByColorAndReleasedAt{?color,year}


# Test by '?KEY=VALUE'
# http://localhost:8080/api/cars/search/findByColor {?color}
# http://localhost:8080/api/cars/search/findByColor ?color=White


# Test by '?KEY=VALUE&KEY2=VALUE2'
# http://localhost:8080/api/cars/search/
# -> findByColorAndReleasedAt {?color,       year}
# -> findByColorAndReleasedAt  ?color=White &year=2021
```

### Building Frontend with *React*

##### The Mockup

> You gotta know what you wanna build like how it looks, eh?
>
> *List* of `Car`s
>> <img src="./images/043_spring_react_frontend_mockup_carlist.png" alt="List of Cars" width="40%" height="50%" />
>
> *Adding* `Car`
>> <img src="./images/043_spring_react_frontend_mockup_caradd.png" alt="Adding cars" width="40%" height="50%" />

### Spring Test

##### Testing the test files you wrote

> Credit to [Run a single test method with maven](https://stackoverflow.com/a/62999592/6273859)

```bash
./mvnw test
./mvnw test -Dtest=CarRestTest
./mvnw test -Dtest=CarRestTest, OwnerRepositoryTest
./mvnw test -Dtest=CarRestTest, OwnerRepositoryTest#saveOwner
./mvnw test -Dtest=CarRestTest, OwnerRepositoryTest#saveOwner+deleteOwners
```

### Miscellaneous

##### Annotation

- `@SpringBootApplication`
  - `@EnableAutoConfiguration`: Enable the auto configuration powered by *Spring Boot*
  - `@ComponentScan`: Scan the components in your project
  - `@Configure`: Mark as a source of bean/object definitions

##### Interface

- `CrudRepository`

    ```java
    // Car  -> Repository for the Entity 'Car'
    // Long -> Type of the ID field is 'Long'
    public interface .. extends CrudRepository<Car, Long> { }

    // Now various CRUD related methods are available to the
    // Entity 'Car', methods like `findAll()`, `findById` etc.
    ```

### Issue

##### SQL Reserved Keyword

- Q: Can you use `year` as an attribute in your database?
- A: No, it's a [reserved](https://docs.microsoft.com/en-us/sql/t-sql/language-elements/reserved-keywords-transact-sql?view=sql-server-ver16) keyword, and JPA couldn't create it for you.

##### Import Not Resolved for `.. springframework.data.rest ..`

- Q: The IDE couldn't resolve the dependency I declared in the `pom.xml`
- A: Explicit versioning is needed according to other developers

    ```xml
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-data-rest</artifactId>

        <!-- New -->
      <version>2.3.1.RELEASE</version>
  </dependency>
    ```

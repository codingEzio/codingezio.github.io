+++
title = "Crash Course to Java"
description = "Only for myself, unfortunately"
+++

> N/A

# Notes

## Basics

### Snippet 01 `new`

create an instance of a class
the instance object was stored in the heap
the instance object reference was stored in the stack

an object reference could reference 0 or 1 object
multiple object references could reference to 1 object

equality

- object <> content in the memory
- reference <> memory address

### Snippet 02 constructor

#### no arg

- we are always using no-arg constructor the `()` in `new Person()`
- write a no-arg constructor or not
  - if you have nothing to declare, it's alright
  - if you does (constructor with args), write one without args as well

#### Override

- `class O() { O() {} }`
- automatically being called when `new O()`
- `over`xxx
  - `override`: cannot be *override*n (changing the behavior entirely)
  - `overload`: accept different kinds of args by having multiple constructors

### Snippet 03 OOP characteristics

- *encapsulation*
  - not expose internal obj/var like using `private`
- *inheritance*
  - access all prop/method from parent class except private ones
  - child could have their own prop and method
  - child could implement method from parent in their own way
- *polymorphism*

  > you have more than one ways to achieve this, whether it's abstract class, interface or something else

### Snippet 04 Interface and Abstract Class

#### Interface

- like a contract, like what methods to have
- have to be `public` to be `implements X, Y, Z`ed

#### Abstract Class

- like a template, as it's also a class
- scope could be anything `class OnlyOne extends SingleClass`

### Snippet 05 Copy

```java
class B {
    int val;

    B(int val) {
        val = val;
    }
}

class A {
    B a;
}
```

| Level | Description | Code |
| :--- | :--- | :--- |
| Reference | A reference pointing to the same object | `A orig = new A()`<br/>`A copy = orig` |
| Shallow | Create a new instance, though the attributes are not copied | `A orig = new A()`<br/>`A copy = new A()`<br/><br/>`copy.a = orig.a`<br/>`copy.a.val = 10`<br/>`copy.a.val == orig.a.val` |
| Deep | Create a new instance, the same applies everything insisde | `A orig = new A()`<br/>`A copy = new A()`<br/><br/>`copy.a = new B(orig.a.val)`<br/>`orig.a.val = 10`<br/>`copy.a.val = 10` |

### Snippet 06 Common methods for an `Object` class

> All the `throws VariousExceptions` were omitted below

```java
// Equality
public native       int      hashCode()
public              boolean  equals(Object obj)

// Copy
protected native    Object   clone()

// Reflection
public final native Class<?> getClass()
public              String   toString()

// Concurrency for waking up threads
public final native void     notify()
public final native void     notifyAll()

// Concurrency for halting threads
public final native void     wait(long timeout)
public final        void     wait(long timeout, int nanos)
public final        void     wait()

// Release resources before Garbage Collection
protected           void     finalize()
```

### Snippet 07 Equality

#### `==`

- For basic data types, it's *values*
- For reference data types, it's memory address for that object

#### `equals`

> Take `String` for example, its `equals` was overriden to compare the values underneath

- not `Override`d: equivalent as `==` (memory address)
- `Override`d: we normally compare all the attributes, `true` if all match

### Snippet 08 `public native int hashCode()`

> Whether we're gonna store or retrieve data from a `HashMap`, we would specify how many boxes are there, then using that `hashCode` function to generate a code that which box for us to operate on.
>
> Formally speaking, it generates a key that maps to a bucket array index. And each bucket contains some pairs of keys and values.

> <img src="/202301/20230103-hashmap-structure-underneath.png" alt="An illustration that shows the structure of a Hashmap" width="80%" height="auto" />

- `hashCode()` for determing equality
- `equals()` for further comparsion

### Snippet 09 String, StringBuffer, StringBuilder

> If you have the JDK source code, their implementations were under `/src/java.base/share/classes/java/lang/`

#### Usage

> Of course, normally you would not use just of them alone.

- when you have no need to modify the original string: `String`
- when you need to modify the original string: `StringBuffer`, `StringBuilder`

#### Difference between `StringBuffer` and `StringBuilder`

- Both are concerned with thread safety using locks
- Both could be used when you need manipulate a ton of *String*s
- `StringBuffer` are thread-safe aka. data in multiple threads behave normally

#### Why `String` is Immutable

- It is in the hand of the designer of the language
  - Even if it's mutable in languages like Ruby
    - It just does things underneath a bit differently
    - It just does about the same thing in similar ways
- In the implementation
  - The *String* array saving it was modified in `final`
  - The *String* does not have APIs for modifying
  - The *String* class was in `final` so you couldn't change behaviour as well

### Snippet 10 Operator Overloading

#### Support

- Java does not support it <small>(users could NOT do it)</small>
- Java does have one exception for `+` for string concatenation
- The reason is simply *the Java designer decided it's not worth doing it*.

#### What Is It

> When you want to do use the operators with different types of objects/classes and so on. Take Python for example

```python
class Complex:
    def __init__(self, real, imag):
        self.real = real
        self.imag = imag

    # add two objects
    def __add__(self, other):
        return self.real + other.real, self.imag + other.imag

obj1 = Complex(1, 2)
obj2 = Complex(3, 4)

obj3 = obj1 + obj2
```

#### How It Looks Like

##### The `+`

> It creates a `StringBuilder` object and calls`.append()` to concat, for every single loop! Wasting memory space.

```java
String[] stringArr = { "He", "ll", "o" };

String s1 = "";

for (String elem : stringArr) {
    s1 += elem;
}

// "Hello"
System.out.println(s1);
```

##### But You Should Do Like This`

> It accomplishs the exactly the same thing as above, but no extra unnecessary `StringBuilder` object would be created <small>(just one in this case)</small>

```java
String[] stringArr = { "He", "ll", "o" };

StringBuilder s2 = new StringBuilder();

for (String elem : stringArr) {
    s2.append(elem);
}

// "Hello"
System.out.println(s2);
```

### Snippet 11 String Constant Pool

#### In Short

- It was stored in the *Heap* area which is shared by all threads
- It was put into the *Heap* area for more effective garbage collection
- It was created to reuse existing `String` instead of repeated creation

#### Code Example

```java
// If there's no "abc" constant in the heap area (so two objects)
// - create a String object (s1)
// - create a String constant "abc" (and assigning to object s1)
String s1 = new String("abc");


// Only one String object would be created
String a1 = "abc";
String a2 = new String("abc");
```

### Snippet 12 Method `intern`

#### Not Creating Extra Idential String Objects

- unless you have tons of idential Strings, do not use it
- the relevant Strings would be in the PermaGen
- and it could not garbage collected easily
- and it occupies the precious space which is quite limited like CPU Cache
  > when this precious space is full, you'd get `OutOfMemoryError` when in fact there were still a ton of space in the *Heap*!

### Snippet 13 Constant Folding

```java
// The result is 'a1 == a2' as the Strings were considered as constants
//  If some of the them were being returned in a method, then the value
//  of it could not be determined, so no folding (optimization) would
//  happen.
final String s1 = "str"
final String s2 = "ing"

// Known already in the compilation stage, automatically become "string"
String a1 = "str" + "ing";

// Unless the Strings were already modified using 'final' (to be considered
// as constant (String Constant Pool))
String a2 = s1 + s2
```

### Snippet 14 Autoboxing and Unboxing

#### The Need

- More functionalities than a primitive data type
- Could be used for generics as the `<T>` accepts Objects only

#### What Is It

- They are minimal wrappers around primitive data types
- They are typically stored as pointers to objects on the heap

#### Simply Put

- Things like `Collection` only accepts Objects, we need to *Boxing* the value
- But when we want to do calc or simply printing it, we need to *Unboxing* it

### Snippet 15 Exception and Error

> Ancestral class `java.lang.Throwable` under `YOUR_JDK/src/java.base/share/classes/java/lang/` <small>(and some of the *Exception*s and *Error*s as well)</small>

#### Exception

> For some of them, JVM forces you to do some kind of handling (which is a good thing, I havn't seen this kind of thing in Python)

##### Checked Exception

- Any exceptions like `IOException` except the `RuntimeException` and its child classes
- Exceptions like `IOException`, `FileNotFoundException`
  - proven to be have a high chance of failing
  - that's why Java forced you do some kind of handling

##### Unchecked Exception

- `RuntimeException`
- `RuntimeException` child classes like `ArithmeticException`, `NullPointerException`

#### Error

> One that typically would be terminated by JVM, as it should be.

- We could use `catch` to handle it
- We shouldn't use `catch` to handle it

### Snippet 16 `try` with Resouces

> Resources like files would be automatically closed

```java
try (X x = new X(new Y( new Z() ));
     X x = new X(new Y( new Z() )); ) {
    ..
}
catch (IOException exception) {
    ..
}
```

### Snippet 17 Serialization

- N/A

### Snippet 18 Annotation

- N/A

### Snippet 19 Reflection

- N/A

### Snippet 20 Generics

#### Examples

##### Operator Overloading

```python
# Language: Python
# '+' serves different kinds of functionalities here
"1" + "1"
100 + 100
```

##### Function Overloading

```python
# Language: Python
# Accepts different types of arguments
len([1, 2, 3])                    # 3
len("abc")                        # 3
len({"name": "John", "age": 40})  # 2
```

#### Why

- Enable semi-typechecking that is way better the non-existing one in Python
- Enable writing methods that accepts all kinds/types of parameters
- Less code for type casting which is coupled with the nature of Java

#### Concepts

> They are similar to me, conceptually

1. *Polymorphism* means a single entity behaves differently depending on the input
2. *Polymorphism* means an object varies its behaviors based on the input type
3. *Generics* is a type of *Polymorphism*
4. *Generics* enable *types* <small>(also cls/itfs)</small> to be parameters when defining cls/itfs/methods
5. .. for me, it's kinda a syntax sugar design for the **strongly typed** data
6. .. for me, they are just the placeholder for actual data types <small>(**boxed**)</small>
7. .. for me, it's *type parameters* <small>(according to what the official doc says)</small>

#### More Examples

##### So-called *bounded* and *unbounded*

```java
public class Test<T> {
  // The usual one type in the diamond <>
  private T t;

  // Still placeholder for types, but in a limited range
  // Basically the data types are configurable on your demand!
  private <U extends Number>                    void inspect(U u) { }
  private <U extends Number & String>           void inspect(U u) { }
  private <U extends Number & String & Boolean> void inspect(U u) { }

  // Type Inference
  // It means that you do not have to do everything beforehand
  private <T> T    pick(T a1, T a2) { }
  Serializable s = pick("A", new ArrayList<String>())
```

##### Type Cast

```java
// Casting needed
List                L = new ArrayList()
                    L.add("Hello")
String S = (String) L.get(0)


// No more casting
List<String>        L = new ArrayList<String>()
                    L.add("Hello")
Strings S =         L.get(0)
```

#### Type Erasure

- When compiling to bytecode, the *Generic* things like `T` were omitted
  - were replaced with *specificed* <small>(*bound*)</small> types or simply `Object` <small>(*default*, or *unbounded*)</small>
  - no extra classes being created therefore speed/space weren't affected
- A quote

  > It is highly arguable whether the process done on Java Generics deserves the name "*type erasure*". Since generic types are not erased but replaced with their raw counterparts, a better choice seems to be "*type mutilation*".

-----

## Collections

### N/A

- N/A

-----

## I/O

### N/A

- N/A

-----

# References

> <small>oldest to newest</small>

## Basics

### OOP

- [What is the difference between method overloading and overriding?](https://stackoverflow.com/a/12374437/6273859)
- [What is the difference between an interface and abstract class?](https://stackoverflow.com/questions/1913098/what-is-the-difference-between-an-interface-and-abstract-class/45863762#45863762)
- [Deep Copy vs Shallow Copy vs Reference Copy](https://stackoverflow.com/a/62399156/6273859)
- [Java HashMap - Understanding equals() and hashCode() methods](https://www.logicbig.com/tutorials/core-java-tutorial/java-collections/hash-map-equal-and-hash-code.html)
- [What is HashCode (Java in General forum at Coderanch)](https://coderanch.com/t/321515/java/HashCode)

### String

- [Are Your Strings Immutable? – Daniel Lemire's blog](https://lemire.me/blog/2017/07/07/are-your-strings-immutable/)
- [Why are Strings Immutable in Many Programming Languages?](https://stackoverflow.com/questions/9544182/why-are-strings-immutable-in-many-programming-languages)
- [Why is String Immutable in Java?](https://stackoverflow.com/questions/22397861/why-is-string-immutable-in-java)
- [String, StringBuffer, and StringBuilder](https://stackoverflow.com/a/2971343/6273859)
- [Thread safety - Wikipedia](https://en.wikipedia.org/wiki/Thread_safety)

### String Method `intern`

- [What is Java String interning?](https://stackoverflow.com/a/10579062/6273859)
- [Is it good practice to use java.lang.String.intern()?](https://stackoverflow.com/a/1091068/6273859)

### Operator Overloading

- [Why doesn't Java offer operator overloading?](https://stackoverflow.com/questions/77718/why-doesnt-java-offer-operator-overloading/77798#77798)
- [Operator overloading in Java](https://stackoverflow.com/a/1686708/6273859)
- [Python Operator Overloading (With Examples)](https://www.programiz.com/python-programming/operator-overloading)

### Generics

- [What's the difference between using polymorphism and generics in Java? - Quora](https://qr.ae/pr4NCR)
- [Generics and polymorphism](https://stackoverflow.com/a/2423355/6273859)
- [Polymorphism Relates to Inheritance](https://stackoverflow.com/a/2423999/6273859)
- [What is Polymorphism in Python?](https://www.educative.io/blog/what-is-polymorphism-python)
- [Polymorphism in Python(with Examples)](https://www.programiz.com/python-programming/polymorphism)
- [What are the benefits of Java's types erasure?](https://stackoverflow.com/questions/20918650/what-are-the-benefits-of-javas-types-erasure)
- [Is there any reason to use generics in Java?](https://stackoverflow.com/questions/27689669/is-there-any-reason-to-use-generics-in-java)

### Boxing

- [Autoboxing and Unboxine (Numbers and Strings)](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html)
- Why do we use autoboxing and unboxing in Java? [1](https://stackoverflow.com/a/27647772/6273859), [2](https://stackoverflow.com/a/27647719/6273859), [3](https://stackoverflow.com/a/27647981/6273859)
- What is boxing and unboxing and what are the trade offs? [1](https://stackoverflow.com/a/25324/6273859), [2](https://stackoverflow.com/a/13056/6273859)

### Exception

- [What are checked exceptions in Java/C#?](https://stackoverflow.com/a/9371709/6273859)

## IO

### N/A

- N/A

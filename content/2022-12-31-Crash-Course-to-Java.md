+++
title = "Crash Course to Java"
description = "Only for myself, unfortunately"
+++

> N/A

### 0x01 `new`

create an instance of a class
the instance object was stored in the heap
the instance object reference was stored in the stack

an object reference could reference 0 or 1 object
multiple object references could reference to 1 object

equality

- object <> content in the memory
- reference <> memory address

### 0x02 constructor

#### no arg

- we are always using no-arg constructor the `()` in `new Person()`
- write a no-arg constructor or not
  - if you have nothing to declare, it's alright
  - if you does (constructor with args), write one without args as well

#### Override

- `class O() { O() {} }`
- automatically being called when `new O()`
- `over`xxx
  - `override`: cannot be override (changing the behavior entirely)
  - `overload`: accept different kinds of args by having multiple constructors

### 0x03 OOP characteristics

- *encapsulation*
  - not expose internal obj/var like using `private`
- *inheritance*
  - access all prop/method from parent class except private ones
  - child could have their own prop and method
  - child could implement method from parent in their own way
- *polymorphism*

  > you have more than one ways to achieve this, whether it's abstract class, interface or something else

### 0x04 Interface and Abstract Class

#### Interface

- like a contract, like what methods to have
- have to be `public` to be `implements X, Y, Z`ed

#### Abstract Class

- like a template, as it's also a class
- scope could be anything `class OnlyOne extends SingleClass`

### 0x05 Copy

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

### 0x07 Common methods for an `Object` class

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

### 0x08 Equality

#### `==`

- For basic data types, it's *values*
- For reference data types, it's memory address for that object

#### `equals`

> Take `String` for example, its `equals` was overriden to compare the values underneath

- not `Override`d: equivalent as `==` (memory address)
- `Override`d: we normally compare all the attributes, `true` if all match

### 0x10 `public native int hashCode()`

> Whether we're gonna store or retrieve data from a `HashMap`, we would specify how many boxes are there, then using that `hashCode` function to generate a code that which box for us to operate on.
>
> Formally speaking, it generates a key that maps to a bucket array index. And each bucket contains some pairs of keys and values.

> <img src="/202301/20230103-hashmap-structure-underneath.png" alt="An illustration that shows the structure of a Hashmap" width="80%" height="auto" />

- `hashCode()` for determing equality
- `equals()` for further comparsion

### 0x11 String, StringBuffer, StringBuilder

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

### 0x12 Operator Overloading

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

### 0x13 String Constant Pool

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

### 0x14 Method `intern`

#### Not Creating Extra Idential String Objects

- unless you have tons of idential Strings, do not use it
- the relevant Strings would be in the PermaGen
- and it could not garbage collected easily
- and it occupies the precious space which is quite limited like CPU Cache
  > when this precious space is full, you'd get `OutOfMemoryError` when in fact there were still a ton of space in the *Heap*!

### 0x15 Constant Folding

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

-----

## References

> Sorted from oldest to newest

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

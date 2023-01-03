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

-----

## References

> Sorted from oldest to newest

### OOP

- [What is the difference between method overloading and overriding?](https://stackoverflow.com/a/12374437/6273859)
- [What is the difference between an interface and abstract class?](https://stackoverflow.com/questions/1913098/what-is-the-difference-between-an-interface-and-abstract-class/45863762#45863762)
- [Deep Copy vs Shallow Copy vs Reference Copy](https://stackoverflow.com/a/62399156/6273859)
- [Java HashMap - Understanding equals() and hashCode() methods](https://www.logicbig.com/tutorials/core-java-tutorial/java-collections/hash-map-equal-and-hash-code.html)
- [What is HashCode (Java in General forum at Coderanch)](https://coderanch.com/t/321515/java/HashCode)

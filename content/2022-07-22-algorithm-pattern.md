+++
title = "Algorithm Patterns"
description = "Notes on Algorithm Patterns"
+++

# Math

### Bit-wise Operator

##### Number

> 本质上都是二进制操作，不进位

    ```bash
    # ~ Bitwise NOT    -> -(0bN + 0b1)
    # | Bitwise OR     -> (0, 0) leads to 0, otherwise 1
    # & Bitwise AND    -> (1, 1) leads to 1, otherwise 0
    # ^ Bitwise XOR    -> (1, 0)(0, 1) leads to 1, otherwise 0
    ```

##### Letter

    ```java
    // To lowercase
    ('a' | ' ') == 'a'
    ('A' | ' ') == 'a'

    // To uppercase
    ('b' & '_') == 'B'
    ('B' & '_') == 'B'

    // Switch cases
    ('c' ^ ' ') == 'C'
    ('C' ^ ' ') == 'C'
    ```

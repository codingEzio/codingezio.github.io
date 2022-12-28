+++
title = "Algorithm Handbook"
description = "Non-solution notes for LeetCode problems"
+++

## Concepts

### Non-decreasing Order

> [Is a "non-decreasing" sequence "increasing"](https://stackoverflow.com/questions/1963474/is-a-non-decreasing-sequence-increasing)

- Increasing -> every next is greater -> 1,2,3,4
- Decreasing -> every next is less -> 4,3,2,1
- It's not completely the same as the increasing order, e.g. 1, 2, 2, 3, 4
- Its increase or decrease must applies to all to be qualified

### 常见复杂度 Big O 的辨别

| O | Statement |
| :---: | :----- |
| *O(n)* | `for X in range(N)`<br>`for X in range(start, N, k)` |
| *O(nm)* | `for X in range(N): for Y in range(M)` |
| *O(n²)* | `for X in range(N): for Y in range(X)` <br>`for X in range(N): X*=2 for Y in range(X)` |
| *O(logN)* | `while X < N: X*=k` |

## Knowledge

### Bit-wise Operator

#### Number

> 本质上都是二进制操作，不进位

```bash
# ~ Bitwise NOT    -> -(0bN + 0b1)
# | Bitwise OR     -> (0, 0) leads to 0, otherwise 1
# & Bitwise AND    -> (1, 1) leads to 1, otherwise 0
# ^ Bitwise XOR    -> (1, 0)(0, 1) leads to 1, otherwise 0
```

#### Letter

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

### Traversing Binary Tree

> 以 root 节点为视角: *Preorder* <sup>(前序)</sup>, *Inorder* <sup>(中序)</sup>, *Postorder* <sup>(后序)</sup>

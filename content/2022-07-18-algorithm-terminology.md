+++
title = "Algorithm Terminologies"
description = "Notes on Algorithm Terminologies"
+++

# Concepts

### Non-decreasing Order

> e.g. 1, 2, 2, 3, 4

- Increasing -> every next is greater -> 1,2,3,4
- Decreasing -> every next is less -> 4,3,2,1
- It does NOT fully equal to increasing order
- Its increase or decrease must applies to all to be qualified

### 常见复杂度 Big O 的辨别

| O | Statement |
| :---: | :----- |
| *O(n)* | `for X in range(N)`<br>`for X in range(start, N, k)` |
| *O(nm)* | `for X in range(N): for Y in range(M)` |
| *O(n²)* | `for X in range(N): for Y in range(X)` <br>`for X in range(N): X*=2 for Y in range(X)` |
| *O(logN)* | `while X < N: X*=k` |

-----

# References

### Non-decreasing order

- <https://leetcode.com/problems/squares-of-a-sorted-array/>
- <https://stackoverflow.com/questions/1963474/is-a-non-decreasing-sequence-increasing>

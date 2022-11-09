+++
title = "LeetCode for Algorithm"
description = "Practing by solving Algorithm questions on LeetCode"
+++

## Foreword

#### Why

- Review what I've learnt from solving these algorithms
- A short gist of what this problem is *for*
- Save time

#### What

1. Sorted.. by my will
2. The prefix of the link would start with `https://leetcode.cn`
3. Back then I just do them randomly; Now I mostly reference to [Blind 75](https://raymondjiang.net/2022/02/18/about-leetcode-blind-75/)

## Thoughts and Code

### 0001: Two Sum

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> remainders = new HashMap();

        for (int idx = 0; idx < nums.length; idx++) {
            // Put every substracted result into a big bucket, once
            // there's a match (.containsKey), return the index of the
            // number (.get). Also, treat the `remainder` hashmap like
            // 'find remainders for 'this_half' in the hashmap'.
            int this_half = nums[idx];
            int that_half = target - this_half;

            if (remainders.containsKey(this_half)) {
                return new int[] { remainders.get(this_half), idx };
            }

            // Put the remainder candidate in
            remainders.put(that_half, idx);
        }

        return new int[] {};
    }
}
```

### 0019: Remove Nth Node From End of List

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        """
        The main thing are these two
        - Caculate the actual steps need to be taken (reversed n)
        - Link the one before the nth with the one preceed it (=> deleted)
        """

        dummy = ListNode(0, head)
        L = dummy
        R = head

        while n > 0:
            L = L.next
            n -= 1

        while R is not None:
            L = L.next
            R = R.next

        L.next = L.next.next

        return dummy.next
```

### 0021: Merge Two Sorted Lists

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        p = dummy
        p1 = list1
        p2 = list2

        while p1 is not None and p2 is not None:
            if p1.val < p2.val:
                p.next = p1
                p1 = p1.next
            elif p1.val > p2.val:
                p.next = p2
                p2 = p2.next

            p = p.next

        if p1 is not None:
            p.next = p1
        elif p2 is not None:
            p.next = p2

        return dummy.next
```

### 0023: Merge K Sorted Linked List

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
     // No more checking when there's no elements at all
        int ln = lists.length;
        if (ln == 0) {
         return null;
        }

        // Temporary variables for comparison and be as pointers
        ListNode dummy = new ListNode(-1);
        ListNode p     = dummy;

        // Make the comparsion (non-order -> sorted by ASC)
        //  Do notice that PriorityQueue now is also a Linked List,
        //  therefore it would have methods like `.next` and needs
        // it to traverse them.
        PriorityQueue<ListNode> pq = new PriorityQueue<>(
            ln,
            (a, b) -> (a.val - b.val)
        );

        // Combine the elements while ordering them in an allocated heap
        for (ListNode item : lists) {
            if (item != null) {
                pq.add(item);
            }
        }

        while (!pq.isEmpty()) {
         // Get the smallest while removing itself
            ListNode n = pq.poll();
            p.next     = n;

            // Check if there's still items left in the heap (smallest
            // to biggest). If there is, move the pointer of the
            // PriorityQueue via the variale `n`.
            if (n.next != null) {
                pq.add(n.next);
            }

            // Move to the next pointer for storing the element
            p = p.next;
        }

        return dummy.next;
    }
}
```

### 0049: Group Anagrams

```python
from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # Behaves like a normal dict, though when you access the key
        # which is not in it, it would return a default value which
        # is of the same type the parameter you passed in (i.e. []).
        ans = defaultdict(list)

        for word in strs:
            count = [0] * 26

            for letter in word:

                letter_indices = ord(letter) - ord('a')
                count[letter_indices] += 1

            ans[tuple(count)].append(word)

        return list(ans.values())
```

### 0070: Climbing Stairs

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 3:
            return n

        first, second = 2, 3

        for i in range(4, n+1):
            _sum = first + second

            first = second
            second = _sum

        return second
```

### 0125: Valid Palindrome

```java
class Solution {
    public boolean isPalindrome(String s) {
        int i = 0;
        int j = s.length() - 1;

        while (i < j) {
            Character start = s.charAt(i);
            Character end   = s.charAt(j);

            if (!Character.isLetterOrDigit(start)) {
                i++;

                continue;
            }

            if (!Character.isLetterOrDigit(start)) {
                j--;

                continue;
            }

            if (Character.toLowerCase(start) != Character.toLowerCase(end)) {
                return false;
            }

            i++;
            j--;
        }

        return false;
    }
}
```

### 0128: Longest Consecutive Sequence

```python
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        seq_no_dups = set(nums)
        len_longest = 0

        for elem in seq_no_dups:

            # Find the start for a sequence then go (incr) from there
            if (elem + 1) not in seq_no_dups:
                len_sub_seq = 1

                while (elem + len_sub_seq) in seq_no_dups:
                    len_sub_seq += 1

        return len_longest
```

### 0141: Linked List Cycle

```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        // Take 3, 7, 8, 6 for example (6 cycle back to 7)
        // [SLOW]  3       7       8       6
        // [FAST]  3       8       7       6
        // [LOOP]  T[7,8]  T[8,7]  T[6,6]  F

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {
                return true;
            }
        }

        return false;
    }
}
```

### 0217: Contains Duplicate

```java
class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Just like the set() you use in Python. 'Set()' is just the
        // name of the interface.
        Set<Integer> uniq = new HashSet<>();

        for (int idx = 0; idx < nums.length; idx++) {

            // Ah, I've seen this element before, it's duplicate then!
            if (uniq.contains(nums[idx])) {
                return true;
            }

            // Put every elements into a non-repeating box
            uniq.add(nums[idx]);
        }

        return false;
    }
}
```

### 0238. Product of Array Except Self

```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        """
        Though I was able to solve (more like remembering the solution) this
        problem, the whole logic is still not straightforward enough for me
        even though I did a few walk-through using pen and paper. More clearer
        procedures for this problem would be added later (for myself).
        """

        seq_len = len(nums)
        res = [1] * (seq_len)

        prefix = 1
        for i in range(0, seq_len, 1):
            res[i] = prefix
            prefix *= nums[i]

        postfix = 1
        for i in range(seq_len - 1, -1, -1):
            res[i] *= postfix
            postfix *= nums[i]

        return res
```

### 0242. Valid Anagrams

```java
class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        int[] cmp_by_compute = new int[26];

        for (int idx = 0; idx < s.length(); idx++) {
            // To minus lowercase 'a' is to get the ranking of the
            // letters. For example, you would get 0 for character
            // 'a' and 25 for character 'z' which is exactly what
            // we want.
            int s_substract = s.charAt(idx) - 'a';
            int t_substract = t.charAt(idx) - 'a';

            // Suppose they are of the same character, the process
            // should be like default_val+1 then default_val-1, and
            // since the default value is 0, the end result we would
            // get for each idx shall be 0 as well.
            cmp_by_compute[s_substract]++;
            cmp_by_compute[t_substract]--;
        }

        // To check if all the end result were 0
        for (int computed_res : cmp_by_compute) {
            if (computed_res != 0) {
                return false;
            }
        }

        return true;
    }
}
```

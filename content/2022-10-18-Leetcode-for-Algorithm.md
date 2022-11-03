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

### 0021: Merge Two Sorted Lists

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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {

    }
}
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
        // 	Do notice that PriorityQueue now is also a Linked List,
        // 	therefore it would have methods like `.next` and needs
        //	it to traverse them.	
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

### 217: Contains Duplicates

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


### 242. Valid Anagrams

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

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

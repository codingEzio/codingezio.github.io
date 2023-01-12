+++
title = "Algorithm - LeetCode for General Problems"
description = "Practing by solving Algorithm questions on LeetCode"
+++

## Foreword

### Why

> Do note that the solutions below aim towards the esay-to-understand aspect. Some of them are comparably slow than the most popular solutions.

#### Formally

- Review what I've learnt from solving these algorithms
- A short gist of what this problem is *for*
- Save time

#### Or You Could Say

- I am really, really dumb
- I am bad at solving LeetCode problems
- I do not have too much time for LeetCode

### Idea

#### My Approach to Learn Data Structures and Algorithms

> Leave the data structures to the language learning part as their usage might vary whether for the implementations. Dive right into the LeetCode problems before having a good hold on the data structures. Use it practically instead of learning without a clear goal or context.
>
> It's just like learning a programming language. Start building projects as quickly as possible <small>(note to self: to a certain extent)</small>. Of course, I do have [another post](https://codingezio.github.io/algorithm-handbook/) which documents the snippets of knowledge you need to get a hold on while solving these problems.

#### About *Binary Tree*

> As the **traversal methods** are the foundation for a lot LeetCode problems that related to *Binary Tree*, I moved it to a separated post which named as [*Algorithm Handbook*](https://codingezio.github.io/algorithm-handbook/).
>
> These methods by themselves **are** LeetCode problems, that's why I mention it explicitly to avoid confusion both for myself and the future readers. Down below are a list of problems that were omitted in this post.

- `0144`: *Preorder* traversal
- `0094`: *Inorder* traversal
- `0145`: *Postorder* traversal
- `0102`: *Level Order* traversal

### And

#### Problem List

> Some of them would be premium questions <small>(require you to join in the membership)</small>, but you could just give it a search on Github. Not a big deal though 🤞.

- [Blind 75](https://gist.github.com/codingEzio/68cc6c2648b0a87c74be5dc9668a3782) <sup>[*solutions*](https://neetcode.io/practice)</sup> and [Grind 169](https://gist.github.com/codingEzio/47a8a5083f0df1a51796860fe1c0964c)
- [Solution by Patterns](https://seanprashad.com/leetcode-patterns/) <sub>(171)</sub>

#### Articles to Ease My Anxiety

> There are so many problem lists, and I want to follow them all! But that's not gonna happen

- [Is Blind 75 enough for Big Tech? : cscareerquestions](https://old.reddit.com/r/cscareerquestions/comments/s0x7bz/is_blind_75_enough_for_big_tech/)
- [Blind 75 2.0? : leetcode](https://old.reddit.com/r/leetcode/comments/mx55az/blind_75_20/)

-----

## Thoughts and Code

### 0001. Two Sum

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

### 0009. Palindrome Number

```python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0: return False
        if x == 0: return True

        xcp = x # a copy of the original number for us to compare to rev result
        rev = 0 # reverse computation; trying to cal one that equals to x

        while x > 0:
            rev = (rev * 10) + (x % 10)
            x = x // 10

        return xcp = rev
```

### 0011. Container With Most Water

```python
class Solution:
    def maxArea(self, height: List[int]) -> int:
        areaMax = 0
        start, end = 0, len(height) - 1

        # Take [4, 7, 5, 1, 6] for example
        #
        # <7>      | - - - - - -  i.e. width: 5-2, height: 6or7
        # <6>      |           |
        # <5>      |   |       |
        # <4>  |   |   |       |
        # <3>  |   |   |       |
        # <2>  |   |   |       |
        # <1>  |   |   |   |   |
        # <0> <1> <2> <3> <4> <5> <6> <7>


        while start < end:
            # Calculate and compare
            area = (end - start) * min(height[start], height[end])

            if areaMax < area:
                areaMax = area

            # Move around to maximize the height
            if height[start] < height[end]:
                start += 1
            elif height[start] >= height[end]:
                end -= 1

        return areaMax
```

### 0013. 3Sum

```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        """
        Problem description simplified
        - three sum to 0 and return the values
        - no complete dup for indice
        - no complete dup for values
        """

        candidateCombined = []
        nums.sort()

        for idx, elem in enumerate(nums):

            if idx > 0 and nums[idx] == nums[idx-1]:
                continue

            L, R = idx + 1, len(nums) - 1

            while L < R:
                sumToZero = elem + nums[L] + nums[R]

                if sumToZero == 0:
                    candidateCombined.append( [ elem, nums[L], nums[R] ] )

                    L += 1
                    while L < R and nums[L] == nums[L-1]:
                        L += 1

                elif sumToZero < 0:
                    L += 1
                elif sumToZero > 0:
                    R -= 1

        return candidateCombined
```

### 0014. Longest Common Prefix

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) {
            return "";
        }

        // Take 'flow, flower, flight' for example

        // [1] 'flow'
        String prefix_lngst = strs[0];

        // [2] index for 1, 2, i.e. 'flight' and 'flying'
        for (int i = 1; i < strs.length; i++) {

            // [3] compare 'flight' and 'flying' with changing strs[0]

            // [4] first loop for 'flight'
            //     - is 'flow' in 'flight'? -- indexOf returns -1
            //     - is 'flo ' in 'flight'? -- indexOf returns -1
            //     - is 'fl  ' in 'flight'? -- indexOf returns 0 (loop ends)

            // Quick recap for 'indexOf()' (where do the 2nd param begin in the 1st one)
            // - 'abc'.indexOf( 'a') -> 0
            // - 'abc'.indexOf('ab') -> 0
            // - 'abc'.indexOf('ac') -> -1
            // - 'abc'.indexOf( 'c') -> -1

            while (strs[i].indexOf(prefix) != 0) {

                // [5] substract the last character from itself
                //     e.g. flow -> flo -> fl
                prefix = prefix.substring(0, prefix.length() - 1);

                if (prefix == "") {
                    // [6] they doesn't even have the 1st character in common
                    //     and since you minus/substract the last "straw",
                    //     just return directly (no need for remaining strings)
                    return "";
                }
            }
        }

        return prefix_lngst;
    }
}
```

### 0019. Remove Nth Node From End of List

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        """
        The core idea
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

### 0021. Merge Two Sorted Lists

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

### 0023. Merge K Sorted Linked List

```java
/*
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

### 0043. Multiply Strings

```python
class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        # Constant
        zero = "0"

        # Handle edge case
        if num1 == zero or num2 == zero:
            return zero

        # Convert individual letters do not break the rule
        listOfNum1 = [int(i) for i in num1]
        listOfNum2 = [int(i) for i in num2]

        # Initialization
        lnNum1 = len(num1)
        lnNum2 = len(num2)
        resultInArray = [0] * (lnNum1 + lnNum2)

        #TODO Comments are needed for this section
        for multiplicand in range(lnNum1 - 1, -1, -1):
            for multiplier in range(lnNum2 - 1, -1, -1):
                mutResult = num1[multiplicand] * num2[multiplier]

                index1 = multiplicand + multiplier + 1
                index2 = multiplicand + multiplier

                mutResult += resultInArray[index1]

                resultInArray[index1] = mutResult % 10
                resultInArray[index2] += mutResult // 10

        # Omit unnecessary prefix zeros
        if resultInArray[0] == 0:
            resultInArray = resultInArray[1:]

        # Convert the list back to a string
        resultInString = "".join([str(i) for i in resultInArray])

        return resultInString
```

### 0049. Group Anagrams

```python
from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # Behaves like a normal dict, though when you access the key
        # which is not in it, it would return a default value which
        # is of the same type the parameter you passed in (i.e. []).
        ans = defaultdict(list)

        # Suppose the input is ['abc', 'acb', 'dce']
        for word in strs:

            # Serve as indice, though it needs to converted to a tuple first
            count = [0] * 26

            # Calculate the indice
            # Note that anagrams would be stored under the same indice
            for letter in word:

                # All are lowercase, so the possible values would only be
                # ranging from 0 to 25 (e.g. 'a' -> 0 .. 'z' -> 25)
                letter_indices = ord(letter) - ord('a')

                # After each loop ends
                # e.g. 'abc' -> from [ 0, 0, 0, 0 ..] to [ 0, 1, 2, 0 .. ]
                count[letter_indices] += 1

            # Suppose the
            #   ans[ ( 0, 1, 2, 0, .. ) ]    ADD 'abc'
            #   ans[ ( 0, 1, 2, 0, .. ) ]    ADD 'acb'
            #   ans[ ( 3, 2, 4, 0, .. ) ]    ADD 'dce'
            ans[tuple(count)].append(word)

        # defaultdict(
        #   <class 'list'>,
        #   {
        #     (0, 1, 2, 0): ['abc', 'acb'],
        #     (3, 2, 4, 0): ['dce']
        #   }
        # )

        # Then only the values      -> dict_values([['abc', 'acb'], ['dce']])
        # Then turns it into a list -> [['abc', 'acb'], ['dce']]
        return list(ans.values())
```

### 0070. Climbing Stairs

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

### 0078. Subsets

```python
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        container_sets = []
        container_nums = []

        def backtrack(nums, start_idx):
            container_sets.append(container_nums[:])

            for i in range(start, len(nums)):
                container_nums.append(nums[i])

                backtrack(nums, i + 1)

                container_nums.pop()

        backtrack(nums, 0)

        return container_sets
```

### 0088. Merge Sorted Array

```python
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """

        # Premises to remember
        # - Each array is already in the non-decreasing order (1 -> 1 -> 2)
        # - As there would be any new numbers smaller, we compare in reverse

        idxComb = m + n - 1
        m -= 1
        n -= 1

        while n >= 0:

            if m >= 0 and nums1[m] > nums2[n]:
                nums1[idxComb] = nums1[m]
                m -= 1

            else:
                nums1[idxComb] = nums2[n]
                n -= 1

            idxComb -= 1
```

### 0100. Same Tree

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        # Neither has elements inside them
        if not p and not q:
            return True

        # One of them has no elements inside
        elif not p or not q:
            return False

        # One and only line to do the comparsion by non-None vals
        elif p.val != q.val:
            return False

        else:
            return \
                self.isSameTree(p.left, q.left) and \
                self.isSameTree(p.right, q.right)
```

### 0101. Symmetric Tree

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return False

        return self.isMirror(root.left, root.right)

    def isMirror(self, L, R) -> bool:
        if not L and not R:
            return True
        elif not L or not R:
            return False
        elif L.val != R.val:
            return False
        else:
            return \
                #      1
                #   2     3
                # L   5   6   R
                self.isMirror(L.left, R.right) and \
                #      1
                #   2     3
                # 4   R   L   7
                self.isMirror(L.right, L.left)
```

### 0104. Maximum Depth of Binary Tree

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        # Two scenarios here
        # - Either the input doesn't have nodes inside
        # - Or the subtrees do not (in the recursion)
        if not root:
            return 0

        L = self.maxDepth(root.left)
        R = self.maxDepth(root.right)

        return max(L, R) + 1
```

### 0124. Binary Tree Maximum Path Sum

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: TreeNode) -> int:
        pass
```

### 0125. Valid Palindrome

```java
class Solution {
    public boolean isPalindrome(String s) {
        int i = 0;
        int j = s.length() - 1;

        while (i < j) {
            Character letter_left = s.charAt(i);
            Character letter_right = s.charAt(j);

            if (!Character.isLetterOrDigit(letter_left)) {
                i++;

                continue;
            }

            if (!Character.isLetterOrDigit(letter_right)) {
                j--;

                continue;
            }

            if (Character.toLowerCase(letter_left) != Character.toLowerCase(letter_right)) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
}
```

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        idx_start = 0
        idx_end = len(s) - 1

        while idx_start < idx_end:
            letter_left = s[idx_start]
            letter_right = s[idx_end]

            if not letter_left.isalnum():
                idx_start += 1

                continue

            if not letter_right.isalnum():
                idx_end -= 1

                continue

            if letter_left.lower() != letter_right.lower():
                return False

            idx_start += 1
            idx_end -= 1

        return True
```

### 0128. Longest Consecutive Sequence

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

### 0141. Linked List Cycle

```java
/*
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

### 0146. LRU Cache

```java
class LRUCache {

    public LRUCache(int capacity) {

    }

    public int get(int key) {

    }

    public void put(int key, int value) {

    }
}

/*
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */
```

### 0155. Min Stack

```java
class MinStack {

    // A stack holding all the items
    Stack<Integer> wholeStack = new Stack<>();

    // A stack holding the minium items (the amount might >= 1)
    Stack<Integer> minStack   = new Stack<>();

    public MinStack() {
    }

    // Save one on the whole stack
    // - if there is no element in the min, add it (= the minimum)
    // - compare the one to be inserted with exisiting, remain or STACK on it
    public void push(int val) {
        wholeStack.push(val);

        if (minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);
        }
    }

    // #TODO document needed
    public void pop() {
        if (minStack.peek().equals(wholeStack.peek())) {
            minStack.pop();
        }

        wholeStack.pop();
    }

    // No restraint, simply return the top element (also the newest)
    public int top() {
        return wholeStack.peek();
    }

    // As it's a min stack, the top of it must be the minimum
    public int getMin() {
        return minStack.peek();
    }
}
```

### 0160. Intersection of Two Linked Lists

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        # no intersection as one of them or both are None
        if not headA or not headB:
            return None

        hA, hB = headA, headB

        while hA != hB:
            hA = hA.next if hA else headB
            hB = hB.next if hB else headA

        return hA
```

### 0206. Reverse Linked List

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(None)

        while head:
            temp = head.next
            head.next = dummy.next
            dummy.next = head
            head = temp

        return dummy.next
```

### 0217. Contains Duplicate

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

### 0226. Invert Binary Tree

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return None

        root.left, root.right = root.right, root.left

        self.invertTree(root.left)
        self.invertTree(root.right)

        return root
```

### 0230. Kth Smallest Element in a BST

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        # Flatten the list using inorder traversal

        resultList = []

        self.inorderTraversal(root, resultList)

        return resultList[k-1]

    def inorderTraversal(self, node, aggregator):
        if not node:
            return None

        self.inorderTraversal(node.left, aggregator)
        aggregator.append(node.val)
        self.inorderTraversal(node.right, aggregator)
```

### 0238. Product of Array Except Self

```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        ln = len(nums)
        productBefore = [1] * ln
        productAfter = [1] * ln

        # Indice: 1, 2, 3 ..
        for i in range(1, ln):
            productBefore[i] = productBefore[i-1] * nums[i-1]

        # Indice: .. 2, 1, 0
        for i in range(ln - 2, -1, -1):
            productAfter[i] = productAfter[i+1] * nums[i+1]

        result = []
        for i in range(0, ln):
            result.append(productBefore[i] * productAfter[i])

        return result
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

### 0347. Top K Frequent Elements

```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        pass
```

### 0557. Reverse Words in a String III

```kotlin
class Solution {
    fun reverseWords(s: String): String {
        var words = s.split(" ")
        var reved = ""

        for (word in words) {
            reved += word.reversed() + " "
        }

        return reved.trim()
    }
}
```

### 0572. Subtree of Another Tree

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:

        #TODO Memorized solution, further walkthrough needed

        if not root and not subRoot:
            return True
        if not root or not subRoot:
            return False

        return self.isSametree(root, subRoot) or \
                self.isSubtree(root.left, subRoot) or \
                self.isSubtree(root.right, subRoot)

    def isSametree(self, L, R) -> bool:
        if not L and not R:
            return True
        if not L or not R:
            return False

        return L.val == R.val and \
                self.isSametree(L.left, R.left) and \
                self.isSametree(L.right, R.right)
```

-----

## Past 2000

### 2185. Counting Words With a Given Prefix

```python
class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:
        amountMatched = 0

        # Find prefix
        # "abc".find("a") -> 0
        # "abc".find("b") -> -1
        for word in words:
            if word.find(pref) == 0:
                amountMatched += 1

        return amountMatched
```

-----

### References

> Good to have but not necessary

- [Grind 75 - A better Blind 75 you can customize, by the author of Blind 75](https://www.techinterviewhandbook.org/grind75)

-----

> This post was originally written on October 18, 2022. Was rewritten on December 7, 2022 with the help of *ChatGPT* developed by *OpenAI*.

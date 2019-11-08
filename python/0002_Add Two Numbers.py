# You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

# You may assume the two numbers do not contain any leading zero, except the number 0 itself.

# Example:
# Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
# Output: 7 -> 0 -> 8
# Explanation: 342 + 465 = 807.

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        l1_copy, l2_copy = l1, l2
        result = ListNode(0)
        result_copy = result

        carrier = 0
        while l1_copy or l2_copy or carrier:
            temp = carrier
            if l1_copy:
                temp += l1_copy.val
                l1_copy = l1_copy.next
            if l2_copy:
                temp += l2_copy.val
                l2_copy = l2_copy.next

            result_copy.val = temp % 10
            carrier = int(temp / 10)

            if l1_copy or l2_copy or carrier:
                result_copy.next = ListNode(0)
                result_copy = result_copy.next

        return result

if __name__ == "__main__":
    l1 = ListNode(0)
    l2 = ListNode(9)
    l2.next = ListNode(9)
    l2.next.next = ListNode(9)

    s = Solution()
    s.addTwoNumbers(l1, l2)

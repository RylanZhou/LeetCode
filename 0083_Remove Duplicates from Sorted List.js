/* ***********************************************************
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:
Input: 1->1->2
Output: 1->2

Example 2:
Input: 1->1->2->3->3
Output: 1->2->3
************************************************************ */
// Definition for singly-linked list.
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  if (!head) {
    return null
  }

  const newHead = new ListNode(head.val)
  let newHeadIter = newHead
  let iter = head
  let lastVal = head.val

  while (iter) {
    if (iter.val !== lastVal) {
      lastVal = iter.val
      newHeadIter.next = new ListNode(iter.val)
      newHeadIter = newHeadIter.next
    }
    iter = iter.next
  }

  return newHead
}

const head = new ListNode(1)
head.next = new ListNode(1)
head.next.next = new ListNode(2)

console.log(deleteDuplicates(head))

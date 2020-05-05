/* ***********************************************************
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Return the linked list sorted as well.

Example 1:
Input: 1->2->3->3->4->4->5
Output: 1->2->5

Example 2:
Input: 1->1->1->2->3
Output: 2->3
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

  let newHead = null
  let newHeadIter = null
  let iter = head

  while (iter) {
    let currentVal = iter.val
    let currentValCount = 0
    while (iter && iter.val === currentVal) {
      currentValCount++
      iter = iter.next
    }
    if (currentValCount === 1) {
      if (!newHead) {
        newHead = new ListNode(currentVal)
        newHeadIter = newHead
      } else {
        newHeadIter.next = new ListNode(currentVal)
        newHeadIter = newHeadIter.next
      }
    }
  }

  return newHead
}

const head = new ListNode(1)
head.next = new ListNode(1)
head.next.next = new ListNode(1)
head.next.next.next = new ListNode(1)
head.next.next.next.next = new ListNode(1)
head.next.next.next.next.next = new ListNode(1)
head.next.next.next.next.next.next = new ListNode(1)

console.log(deleteDuplicates(head))

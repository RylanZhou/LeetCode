/* ***********************************************************
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:
Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5
************************************************************ */
// Definition for singly-linked list.
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function partition(head, x) {
  let leftHead = null
  let rightHead = null
  let leftHeadIter = null
  let rightHeadIter = null
  let iter = head

  while (iter) {
    if (iter.val < x) {
      // Append to left chain
      if (!leftHead) {
        leftHead = new ListNode(iter.val)
        leftHeadIter = leftHead
      } else {
        leftHeadIter.next = new ListNode(iter.val)
        leftHeadIter = leftHeadIter.next
      }
    } else {
      // Append to right chain
      if (!rightHead) {
        rightHead = new ListNode(iter.val)
        rightHeadIter = rightHead
      } else {
        rightHeadIter.next = new ListNode(iter.val)
        rightHeadIter = rightHeadIter.next
      }
    }
    iter = iter.next
  }

  // Append right chain to left chain
  if (leftHeadIter) {
    leftHeadIter.next = rightHead
  } else {
    leftHead = rightHead
  }

  return leftHead
}

const head = new ListNode(1)
head.next = new ListNode(4)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(2)
head.next.next.next.next = new ListNode(5)
head.next.next.next.next.next = new ListNode(2)
console.log(partition(head, 3))

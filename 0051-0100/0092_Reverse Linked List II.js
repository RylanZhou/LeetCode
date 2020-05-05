/* ***********************************************************
Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:
Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
************************************************************ */

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
function reverseBetween(head, m, n) {
  if (!head || m === n) {
    return head
  }

  const newHead = new ListNode(0)
  newHead.next = head

  let beforeReverse = newHead
  for (let i = 1; i < m; i++) {
    beforeReverse = beforeReverse.next
  }

  let start = beforeReverse.next // The starting point of a sub-list
  let iter = start.next // Node to be reversed
  for (let i = 0; i < n - m; i++) {
    // beforeReverse: xx - 1 - 2 - 3 - yy, start: 1 - 2 - 3 - yy, iter: 2 - 3 - yy
    start.next = iter.next // start: 1 - 3 - yy, iter: 2 - 3 - yy
    iter.next = beforeReverse.next // start: 1 - 3 - yy, iter: 2 - 1 - 3 - yy
    beforeReverse.next = iter // beforeReverse: xx - 2 - 1 - 3 - yy
    iter = start.next // start: 1 - 3 - yy, iter: 3 - yy
  }

  return newHead.next
}

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
head.next.next.next.next.next = new ListNode(6)

console.log(reverseBetween(head, 2, 4))

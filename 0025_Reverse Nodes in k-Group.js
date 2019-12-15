/* ***********************************************************
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

Example:
Given this linked list: 1->2->3->4->5
For k = 2, you should return: 2->1->4->3->5
For k = 3, you should return: 3->2->1->4->5

Note:
Only constant extra memory is allowed.
You may not alter the values in the list's nodes, only nodes itself may be changed.
************************************************************ */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
  if (k === 1 || !head) {
    return head
  }
  const doReverse = (subHead) => {
    let subResult = null
    let iterSubHead = subHead
    for (let i = 0; i < k; i++) {
      const newNode = new ListNode(iterSubHead.val)
      newNode.next = subResult
      subResult = newNode
      iterSubHead = iterSubHead.next
    }
    return subResult
  }
  // If subHead has k-group, return the rest after k-group. Else return false.
  const restOfKGroup = (subHead) => {
    let iterSubHead = subHead
    let i = 0
    while (i < k && iterSubHead) {
      i++
      iterSubHead = iterSubHead.next
    }
    return i === k ? iterSubHead : false
  }

  let iterHead = head
  let result = new ListNode(0)
  let iterResult = result
  let rest = restOfKGroup(iterHead)
  while (rest !== false) {
    const reverseResult = doReverse(iterHead)
    iterResult.next = reverseResult
    for (let i = 0; i < k; i++) {
      iterHead = iterHead.next
      iterResult = iterResult.next
    }
    rest = restOfKGroup(iterHead)
  }
  iterResult.next = iterHead

  return result.next
}

function main() {
  const list = new ListNode(1)
  list.next = new ListNode(2)
  list.next.next = new ListNode(3)
  list.next.next.next = new ListNode(4)
  list.next.next.next.next = new ListNode(5)
  list.next.next.next.next.next = new ListNode(6)

  let result = reverseKGroup(null, 4)
  while (result) {
    console.log(result.val)
    result = result.next
  }
}

main()

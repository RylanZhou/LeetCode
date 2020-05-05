/* *******************************
Given a linked list, swap every two adjacent nodes and return its head.
You may not modify the values in the list's nodes, only nodes itself may be changed.

Example:
Given 1->2->3->4, you should return the list as 2->1->4->3.
* ********************************/

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
  let iterHead = head
  let result = new ListNode(0)
  let iterResult = result
  while (iterHead && iterHead.next) {
    let rest = iterHead.next.next
    iterResult.next = iterHead.next
    iterResult.next.next = iterHead
    iterResult.next.next.next = rest
    iterResult = iterHead
    iterHead = rest
  }
  // Last one cannot be paired
  if (iterHead) {
    iterResult.next = iterHead
  }

  return result.next
}

function main() {
  const list = new ListNode(1)
  list.next = new ListNode(2)
  list.next.next = new ListNode(3)

  let result = swapPairs(list)
  while (result) {
    console.log(result.val)
    result = result.next
  }
}

main()

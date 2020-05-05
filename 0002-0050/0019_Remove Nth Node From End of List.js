/** ***************************
  [Description]
  Given a linked list, remove the n-th node from the end of list and return its head.

  Note:
  Given n will always be valid.

  [Input]
  listNode = 1->2->3->4->5
  n = 2
  [Output]
  1->2->3->5
*************************** */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function removeNthFromEnd(head, n) {
  if (head.next === null && n === 1) {
    return null;
  }

  let iter = head.next;
  let prevNode = head;
  prevNode.prev = null;
  while (iter !== null) {
    iter.prev = prevNode;
    prevNode = iter;
    iter = iter.next;
  }
  // After the loop above, prevNode now is at the end of the node list
  let count = 1;
  let currentNode = prevNode;
  while (count !== n) {
    currentNode = currentNode.prev;
    count++;
  }
  // The loop above has set currentNode to the node needs to be delete
  if (currentNode.next === null) {
    // currentNode is at the end
    currentNode.prev.next = null;
  } else if (currentNode.prev === null) {
    // currentNode is at the beginning
    return head.next;
  } else {
    // Normal conditions
    currentNode.prev.next = currentNode.next;
  }
  return head;
}

function main() {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);

  const result = removeNthFromEnd(head, 5);
  let iter = result;
  while (iter !== null) {
    console.log(iter.val);
    iter = iter.next;
  }
}

main();

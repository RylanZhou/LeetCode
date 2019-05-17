/** ***************************
  [Description]
  Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

  [Input]
  l1: 1->2->4
  l2: 1->3->4
  [Output]
  1->1->2->3->4->4
*************************** */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
  if (l1 === null && l2 === null) {
    return null;
  }

  let l1Iter = l1;
  let l2Iter = l2;

  const result = new ListNode(0);
  let resultIter = result;

  while (l1Iter !== null && l2Iter !== null) {
    if (l1Iter.val > l2Iter.val) {
      resultIter.val = l2Iter.val;
      l2Iter = l2Iter.next;
    } else if (l1Iter.val < l2Iter.val) {
      resultIter.val = l1Iter.val;
      l1Iter = l1Iter.next;
    } else {
      resultIter.val = l1Iter.val;
      resultIter.next = new ListNode(l2Iter.val);
      resultIter = resultIter.next;
      l1Iter = l1Iter.next;
      l2Iter = l2Iter.next;
    }
    if (l1Iter !== null || l2Iter !== null) {
      resultIter.next = new ListNode(0);
      resultIter = resultIter.next;
    }
  }
  while (l1Iter !== null) {
    resultIter.val = l1Iter.val;
    l1Iter = l1Iter.next;
    if (l1Iter !== null) {
      resultIter.next = new ListNode(0);
      resultIter = resultIter.next;
    }
  }
  while (l2Iter !== null) {
    resultIter.val = l2Iter.val;
    l2Iter = l2Iter.next;
    if (l2Iter !== null) {
      resultIter.next = new ListNode(0);
      resultIter = resultIter.next;
    }
  }

  return result;
}

function main() {
  const l1 = new ListNode(1);
  l1.next = new ListNode(1);
  l1.next.next = new ListNode(4);
  const l2 = new ListNode(2);
  l2.next = new ListNode(2);
  l2.next.next = new ListNode(2);
  l2.next.next.next = new ListNode(2);
  l2.next.next.next.next = new ListNode(2);

  console.log(JSON.stringify(mergeTwoLists(l1, l2)));
}

main();

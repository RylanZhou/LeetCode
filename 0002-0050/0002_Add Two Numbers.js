/** ***************************
 [Description]
 Given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order in a single node. Add two numbers and return a linked list.

 [Input]
 (2 -> 4 -> 3) + (5 -> 6 -> 4)

 [Output]
 7 -> 0 -> 8

 [Explanation]
 342 + 465 = 807
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
function addTwoNumbers(l1, l2) {
  const result = new ListNode(0);
  // Use iterators to operate throughout the list while keeping the list itself at the very beginning
  let l1Iter = l1;
  let l2Iter = l2;
  let resultIter = result;
  // Whether there is a carry in each add operation
  let carrier = 0;

  // The result of the sum has no less digits than either one of the operand
  while (l1Iter !== null || l2Iter !== null) {
    const temp = (l1Iter ? l1Iter.val : 0) + (l2Iter ? l2Iter.val : 0) + carrier;
    carrier = temp >= 10 ? 1 : 0;
    resultIter.val = temp % 10;
    l1Iter = l1Iter ? l1Iter.next : null;
    l2Iter = l2Iter ? l2Iter.next : null;
    if (l1Iter !== null || l2Iter !== null) {
      resultIter.next = new ListNode(0);
      resultIter = resultIter.next;
    }
  }
  // Deal with the carry of the highest digit
  if (carrier !== 0) {
    resultIter.next = new ListNode(carrier);
  }

  return result;
}

function main() {
  const l1 = new ListNode(1);
  l1.next = new ListNode(8);
  l1.next.next = new ListNode(3);

  const l2 = new ListNode(0);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);

  let result = addTwoNumbers(l1, l2);
  while (result !== null) {
    console.log(result.val);
    result = result.next;
  }
}

main();

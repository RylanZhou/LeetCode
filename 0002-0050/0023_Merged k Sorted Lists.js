/** ***************************
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:
Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
*************************** */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 *
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergedKLists(lists) {
  if (!lists.length || !lists.filter((each) => each).length) {
    // The input is [] or [null]
    return null
  }

  const result = new ListNode(0)
  let iterResult = result
  let lastIterResult = null
  const iterLists = lists
  let endFlag = false // Whether all value have been merged
  while (!endFlag) {
    endFlag = true // Suppose that all value have been merged
    let currentMin = null // Init currentMin for each round
    let currentMinPosition = null
    for (let i = 0; i < iterLists.length; i++) {
      if (
        iterLists[i] &&
        (iterLists[i].val < currentMin || currentMin === null)
      ) {
        endFlag = false // There are iters not null so not all values have been merged
        currentMin = iterLists[i].val
        currentMinPosition = i
      }
    }

    if (!endFlag) {
      iterResult.val = currentMin
      iterLists[currentMinPosition] = iterLists[currentMinPosition].next
      lastIterResult = iterResult
      iterResult.next = new ListNode(0)
      iterResult = iterResult.next
    } else {
      // Delete the last element in the result chain whose value is initiated as 0
      lastIterResult.next = null
    }
  }

  return result
}

/**
 * Solution 2: Treat it as merging k-1 lists with root list separately, namely merging two lists k-1 times
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergedKListsII(lists) {
  if (!lists.length) {
    return null
  }
  if (lists.length === 1) {
    return lists[0]
  }

  let result = lists[0] // Take lists[0] as the root list

  for (let i = 1; i < lists.length; i++) {
    // Compare root with the rest k-1 lists
    if (!lists[i]) {
      continue
    }
    let compareResult = new ListNode(0)
    let iterCompare = compareResult
    let iterResult = result
    let iterCurrent = lists[i]
    while (iterResult && iterCurrent) {
      if (iterResult.val < iterCurrent.val) {
        iterCompare.next = iterResult
        iterResult = iterResult.next
      } else {
        iterCompare.next = iterCurrent
        iterCurrent = iterCurrent.next
      }
      iterCompare = iterCompare.next
    }
    if (iterCurrent) iterCompare.next = iterCurrent
    if (iterResult) iterCompare.next = iterResult

    // The value of the first element of compareResult is 0
    result = compareResult.next
  }

  return result
}

function printResult(list) {
  let iter = list
  while (iter) {
    console.log(iter.val)
    iter = iter.next
  }
}

function main() {
  const list1 = new ListNode(1)
  list1.next = new ListNode(4)
  list1.next.next = new ListNode(5)
  const list2 = new ListNode(1)
  list2.next = new ListNode(4)
  list2.next.next = new ListNode(6)
  const list3 = new ListNode(2)
  list3.next = new ListNode(3)

  printResult(mergedKListsII([null, null, null]))
}

main()

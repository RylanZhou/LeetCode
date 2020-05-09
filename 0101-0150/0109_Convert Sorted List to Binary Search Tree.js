/* ***********************************************************
Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted linked list: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
************************************************************ */

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
function sortedListToBST(head) {
  if (!head) {
    return null
  }

  const dfs = (startNode, endNode) => {
    if (startNode === endNode) {
      // endNode should be null or the root node, so treat it as redundant node
      return null
    }
    // Find the middle point of the list [startNode, ..., endNode]
    let slowIter = startNode
    let fastIter = startNode
    while (fastIter !== endNode && fastIter.next !== endNode) {
      slowIter = slowIter.next
      fastIter = fastIter.next.next
    }
    // slowIter now is the root node
    const node = new TreeNode(slowIter.val)
    node.left = dfs(startNode, slowIter)
    node.right = dfs(slowIter.next, endNode)

    return node
  }

  return dfs(head, null)
}

const list = new ListNode(-10)
list.next = new ListNode(-3)
list.next.next = new ListNode(0)
list.next.next.next = new ListNode(5)
list.next.next.next.next = new ListNode(9)
console.log(sortedListToBST(list))

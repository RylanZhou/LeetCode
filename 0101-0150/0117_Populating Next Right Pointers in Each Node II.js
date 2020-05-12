/* ***********************************************************
Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.

Example 1:

    1                 1 -> null
 2    3      =>    2 -> 3 -> null
4 5    7         4->5 -> 7-> null

Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
************************************************************ */
// Definition for a Node.
function Node(val, left, right, next) {
  this.val = val === undefined ? null : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
  this.next = next === undefined ? null : next
}

/**
 * @param {Node} root
 * @return {Node}
 */
function connect(root) {
  if (!root) {
    return null
  }
  let nextHead = root // The left most node in the next layer
  let nextIter = null // The iterator of the next layer
  let currentNode = null // Current node in current layer
  while (nextHead) {
    currentNode = nextHead // Set current node to the beginning of the layer
    nextIter = null
    nextHead = null
    while (currentNode) {
      if (currentNode.left) {
        if (nextIter) {
          nextIter.next = currentNode.left
          nextIter = nextIter.next
        } else {
          // No previous node yet, so currentNode.left is the left most
          nextHead = currentNode.left
          // Init nextIter as well
          nextIter = currentNode.left
        }
      }
      if (currentNode.right) {
        if (nextIter) {
          nextIter.next = currentNode.right
          nextIter = nextIter.next
        } else {
          nextHead = currentNode.right
          nextIter = currentNode.right
        }
      }
      currentNode = currentNode.next
    }
  }

  return root
}

const root = new Node(1)
root.left = new Node(2, new Node(4), new Node(5))
root.right = new Node(3, null, new Node(7))
console.log(connect(root))

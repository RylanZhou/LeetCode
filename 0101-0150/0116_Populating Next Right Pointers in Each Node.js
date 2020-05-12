/* ***********************************************************
You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

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
4 5  6 7         4->5->6->7-> null

Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
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
  const rootCopy = root
  root.next = null
  while (root.left) {
    let iter = root
    while (iter) {
      iter.left.next = iter.right
      if (!iter.next) {
        // iter is the most right node in current layer
        iter.right.next = null
      } else {
        iter.right.next = iter.next.left
      }
      iter = iter.next
    }
    root = root.left // One layer deeper
  }

  return rootCopy
}

const root = new Node(1)
root.left = new Node(2, new Node(4), new Node(5))
root.right = new Node(3, new Node(6), new Node(7))
console.log(connect(root))

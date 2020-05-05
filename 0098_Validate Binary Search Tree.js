/* ***********************************************************
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 
Example 1:
    2
   / \
  1   3

Input: [2,1,3]
Output: true

Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
************************************************************ */

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
  if (!root) {
    return true
  }

  // For any valid BST, its inorder sequence is ascending. Therefore we use last to store last node and compare it with new node.
  let last = null
  const stack = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    if (last && last.val >= root.val) {
      // Not ascending
      return false
    }
    last = root // Update
    root = root.right
  }

  return true
}

const root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.right = new TreeNode(3)
console.log(isValidBST(root))

/* ***********************************************************
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?
************************************************************ */
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
  // Inorder: LEFT - ROOT- RIGHT
  if (!root) {
    return []
  }

  // For any valid BST, its inorder sequence is ascending.
  const result = []
  const stack = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    result.push(root)
    root = root.right
  }

  return result
}

const root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)
console.log(inorderTraversal(root))

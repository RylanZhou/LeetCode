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
  const result = []
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    if (node.right) {
      stack.push(node.right)
      node.right = null
    }
    stack.push(node)
    if (node.left) {
      stack.push(node.left)
      node.left = null
    } else {
      result.push(node.val)
      stack.pop()
    }
  }

  return result
}

const root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)
console.log(inorderTraversal(root))

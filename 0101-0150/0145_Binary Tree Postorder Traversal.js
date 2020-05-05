/* ***********************************************************
Given a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
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
function postorderTraversal(root) {
  const result = []

  const doRecursion = (node) => {
    if (!node) {
      return
    }
    if (node.left) {
      doRecursion(node.left)
    }
    if (node.right) {
      doRecursion(node.right)
    }
    result.push(node.val)
  }

  doRecursion(root)

  return result
}

/**
 * @description Using iteration instead of recursion
 * @param {TreeNode} root
 * @return {number[]}
 */
function postorderTraversalII(root) {
  if (!root) {
    return []
  }
  let result = []
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
    result = [node.val, ...result]
  }

  return result
}

const root = new TreeNode(1, new TreeNode(1, new TreeNode(4)), new TreeNode(3))
// const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))
console.log(postorderTraversalII(root))

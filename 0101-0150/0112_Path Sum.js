/* ***********************************************************
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
************************************************************ */
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
function hasPathSum(root, sum) {
  if (!root) {
    return false
  }

  const dfs = (node, currentSum) => {
    if (!node.left && !node.right) {
      return currentSum + node.val === sum
    }
    let left = false
    let right = false
    if (node.left) {
      left = dfs(node.left, currentSum + node.val)
    }
    if (node.right) {
      right = dfs(node.right, currentSum + node.val)
    }
    return left || right
  }

  return dfs(root, 0)
}

const root = new TreeNode(5)
root.left = new TreeNode(4)
root.right = new TreeNode(8)
root.left.left = new TreeNode(11, new TreeNode(7), new TreeNode(2))
root.right.left = new TreeNode(13)
root.right.right = new TreeNode(4, null, new TreeNode(1))
console.log(hasPathSum(root, 22))

/* ***********************************************************
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:

[
   [5,4,11,2],
   [5,8,4,5]
]
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

  const result = []
  const dfs = (node, currentSum, currentPath) => {
    if (!node.left && !node.right) {
      if (currentSum + node.val === sum) {
        result.push([...currentPath, node.val])
      }
      return
    }
    if (node.left) {
      dfs(node.left, currentSum + node.val, [...currentPath, node.val])
    }
    if (node.right) {
      dfs(node.right, currentSum + node.val, [...currentPath, node.val])
    }
  }

  dfs(root, 0, [])
  return result
}

const root = new TreeNode(5)
root.left = new TreeNode(4)
root.right = new TreeNode(8)
root.left.left = new TreeNode(11, new TreeNode(7), new TreeNode(2))
root.right.left = new TreeNode(13)
root.right.right = new TreeNode(4, new TreeNode(5), new TreeNode(1))
console.log(hasPathSum(root, 22))

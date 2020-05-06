/* ***********************************************************
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
************************************************************ */
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
  if (!root) {
    return 0
  }

  let max = 0
  const dfs = (node, depth) => {
    if (!node.left && !node.right) {
      max = Math.max(max, depth)
      return
    }
    if (node.left) {
      dfs(node.left, depth + 1)
    }
    if (node.right) {
      dfs(node.right, depth + 1)
    }
  }
  dfs(root, 1)

  return max
}

const root = new TreeNode(3, new TreeNode(9))
root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7))
console.log(maxDepth(root))

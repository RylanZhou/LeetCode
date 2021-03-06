/* ***********************************************************
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.
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
function minDepth(root) {
  if (!root) {
    return 0
  }

  let min = Infinity
  const dfs = (node, currentDepth) => {
    if (!node.left && !node.right) {
      min = Math.min(currentDepth, min)
      return
    }
    if (node.left) {
      dfs(node.left, currentDepth + 1)
    }
    if (node.right) {
      dfs(node.right, currentDepth + 1)
    }
  }
  dfs(root, 1)
  return min
}

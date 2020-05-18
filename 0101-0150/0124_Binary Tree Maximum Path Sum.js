/* ***********************************************************
Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:
Input: [1,2,3]

       1
      / \
     2   3

Output: 6

Example 2:
Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
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
function maxPathSum(root) {
  if (!root) {
    return 0
  }

  let result = -Infinity

  const dfs = (node) => {
    // [20, 15, 7]
    if (!node) {
      return 0
    }
    // If leftMax or rightMax < 0, we won't use this branch. So set it to 0.
    const leftMax = Math.max(0, dfs(node.left)) // 15
    const rightMax = Math.max(0, dfs(node.right)) // 7
    const full = leftMax + rightMax + node.val // 42

    // Update current result
    result = Math.max(result, full)
    // Return the max value under this node
    return Math.max(leftMax, rightMax) + node.val
  }

  dfs(root)
  return result
}

const root = new TreeNode(2)
root.left = new TreeNode(-1)
// root.right = new TreeNode(-20, new TreeNode(15), new TreeNode(7))
console.log(maxPathSum(root))

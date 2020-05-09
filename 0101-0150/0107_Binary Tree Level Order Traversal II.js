/* ***********************************************************
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
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
 * @return {number[][]}
 */
function levelOrderBottom(root) {
  if (!root) {
    return []
  }

  let result = []
  const queue = [root]
  while (queue.length) {
    const currentLayer = []
    let currentLength = queue.length
    while (currentLength--) {
      const node = queue.shift()
      currentLayer.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    result = [currentLayer, ...result]
  }

  return result
}

const root = new TreeNode(3, new TreeNode(9))
root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7))
console.log(levelOrderBottom(root))

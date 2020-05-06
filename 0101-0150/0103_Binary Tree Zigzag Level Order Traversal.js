/* ***********************************************************
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
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
function zigzagLevelOrder(root) {
  if (!root) {
    return []
  }

  const result = []
  let container = [root]
  // For even lines, read as stack; For odd lines, read as queue
  let reverse = false
  while (container.length) {
    let nodesOnOneLayer = []
    let containerLength = container.length
    while (containerLength--) {
      const node = container.shift()
      if (node.left) {
        container.push(node.left)
      }
      if (node.right) {
        container.push(node.right)
      }
      if (reverse) {
        nodesOnOneLayer = [node.val, ...nodesOnOneLayer]
      } else {
        nodesOnOneLayer.push(node.val)
      }
    }
    result.push(nodesOnOneLayer)
    reverse = !reverse
  }

  return result
}

const root = new TreeNode(3, new TreeNode(9))
root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7))
console.log(zigzagLevelOrder(root))

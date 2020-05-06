/* ***********************************************************
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
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
function levelOrder(root) {
  if (!root) {
    return []
  }

  const result = [[root.val]]
  let queue = [root]
  while (true) {
    const nodesOnLayer = []
    while (queue.length) {
      const node = queue.shift()
      if (node) {
        if (node.left) {
          nodesOnLayer.push(node.left)
        }
        if (node.right) {
          nodesOnLayer.push(node.right)
        }
      }
    }
    queue = nodesOnLayer
    if (!queue.length) {
      break
    } else {
      result.push(nodesOnLayer.map((each) => each.val))
    }
  }

  return result
}

const root = new TreeNode(3, new TreeNode(9))
root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7))
console.log(levelOrder(root))

/* ***********************************************************
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3

Follow up: Solve it both recursively and iteratively.
************************************************************ */
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  if (!root) {
    return true
  }

  const dfs = (left, right) => {
    if (!left || !right) {
      return left === right
    }
    if (left.val !== right.val) {
      return false
    }
    return dfs(left.left, right.right) && dfs(left.right, right.left)
  }

  return dfs(root.left, root.right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetricII(root) {
  if (!root) {
    return true
  }

  const judge = (nodes) => {
    // Judge whether the nodes on the same layer is symmetric
    if (nodes.length % 2) {
      return false
    }
    for (let i = 0, len = nodes.length; i < len >> 1; i++) {
      if (!nodes[i] || !nodes[len - i - 1]) {
        if (nodes[i] === nodes[len - i - 1]) {
          continue
        } else {
          return false
        }
      }
      if (nodes[i].val === nodes[len - i - 1].val) {
        continue
      } else {
        return false
      }
    }
    return true
  }

  // Iterative method
  let queue = [root]
  while (queue.length) {
    const nodesOnLayer = []
    while (queue.length) {
      const node = queue.shift()
      if (node) {
        nodesOnLayer.push(node.left, node.right)
      }
    }
    queue = nodesOnLayer
    if (judge(nodesOnLayer)) {
      continue
    } else {
      return false
    }
  }

  return true
}

const root = new TreeNode(1)
root.left = new TreeNode(2, new TreeNode(3), new TreeNode(4))
root.right = new TreeNode(2, new TreeNode(4), new TreeNode(3))
console.log(isSymmetricII(root))

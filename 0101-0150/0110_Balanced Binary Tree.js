/* ***********************************************************
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Example 1:
Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:
Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.
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
function isBalanced(root) {
  if (!root) {
    return true
  }

  // From top to bottom, O(N2) time cost
  return (
    Math.abs(height(root.left) - height(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
}

function isBalancedII(root) {
  if (!root) {
    return true
  }

  const heightII = (node) => {
    if (!node) {
      return 0
    }
    const leftHeight = heightII(node.left)
    if (leftHeight === -1) {
      return -1
    }
    const rightHeight = heightII(node.right)
    if (rightHeight === -1) {
      return -1
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1
    }
    return 1 + Math.max(heightII(node.left), heightII(node.right))
  }

  return heightII(root) !== -1
}

function height(node) {
  if (!node) {
    return 0
  }
  return 1 + Math.max(height(node.left), height(node.right))
}

const root = new TreeNode(1)
root.left = new TreeNode(2, null, new TreeNode(3))
root.left.left = new TreeNode(3, new TreeNode(4), new TreeNode(4))
console.log(isBalanced(root))

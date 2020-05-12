/* ***********************************************************
Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
************************************************************ */
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function flatten(root) {
  const dfs = (node) => {
    if (!node) {
      return
    }
    if (node.left) {
      dfs(node.left)
    }
    if (node.right) {
      dfs(node.right)
    }
    // Left tree is flattened
    if (node.left) {
      let iter = node.left
      while (iter.right) {
        iter = iter.right
      }
      // Right tree should be appended on the last node of the left tree
      iter.right = node.right
      node.right = node.left
      node.left = null
    }
  }

  dfs(root)
}

const root = new TreeNode(1)
root.left = new TreeNode(2, new TreeNode(3), new TreeNode(4))
root.right = new TreeNode(5, null, new TreeNode(6))
flatten(root)
console.log(root)

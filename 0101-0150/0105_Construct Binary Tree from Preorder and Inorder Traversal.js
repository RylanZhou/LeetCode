/* ***********************************************************
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
************************************************************ */
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
  const dfs = (preStart, inStart, inEnd) => {
    if (inStart > inEnd) {
      return null
    }
    if (inStart === inEnd) {
      return new TreeNode(inorder[inStart])
    }
    // Use preorder to find the root
    let root = preorder[preStart]
    // Use inorder to find left tree and right tree
    let rootPos = inorder.indexOf(root)
    const node = new TreeNode(root)
    node.left = dfs(preStart + 1, inStart, rootPos - 1)
    node.right = dfs(preStart + (rootPos - inStart) + 1, rootPos + 1, inEnd)

    return node
  }

  return dfs(0, 0, preorder.length - 1)
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))

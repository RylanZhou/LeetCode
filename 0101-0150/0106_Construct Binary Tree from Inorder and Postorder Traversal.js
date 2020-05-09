/* ***********************************************************
Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
postorder = [9,15,7,20,3]
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function buildTree(inorder, postorder) {
  const dfs = (postEnd, inStart, inEnd) => {
    if (inStart > inEnd) {
      return null
    }
    if (inStart === inEnd) {
      return new TreeNode(inorder[inStart])
    }
    const root = postorder[postEnd]
    const rootPos = inorder.indexOf(root)
    const node = new TreeNode(root)
    node.left = dfs(postEnd - (inEnd - rootPos) - 1, inStart, rootPos - 1)
    node.right = dfs(postEnd - 1, rootPos + 1, inEnd)

    return node
  }

  return dfs(postorder.length - 1, 0, inorder.length - 1)
}

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]))

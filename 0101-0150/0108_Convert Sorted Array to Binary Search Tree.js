/* ***********************************************************
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
************************************************************ */
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
  // To make the BST balanced, treat nums as inorder traversal. Choose the middle element as the root.
  const dfs = (start, end) => {
    if (start > end) {
      return null
    }
    if (start === end) {
      return new TreeNode(nums[start])
    }

    const rootPos = (start + end) >> 1
    const node = new TreeNode(nums[rootPos])

    node.left = dfs(start, rootPos - 1)
    node.right = dfs(rootPos + 1, end)

    return node
  }

  return dfs(0, nums.length - 1)
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))

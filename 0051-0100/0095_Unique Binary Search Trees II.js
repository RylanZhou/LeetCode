/* ***********************************************************
Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.

Example:

Input: 3
Output:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
Explanation:
The above output corresponds to the 5 unique BST's shown below:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
************************************************************ */

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
function generateTrees(n) {
  if (!n) {
    return []
  }
  // For any root of a BST, left tree is smaller and right tree is larger. Thus, in a sorted array, all elements to the left of the root position should be in the left tree.
  const dfs = (start, end) => {
    if (start > end) {
      return [null]
    }

    const trees = []

    // i is the root
    for (let i = start; i <= end; i++) {
      // Generate all possible left trees
      const leftTrees = dfs(start, i - 1)
      // Generate all possible right trees
      const rightTrees = dfs(i + 1, end)

      // Add left and right to root to complete building a tree
      for (const left of leftTrees) {
        for (const right of rightTrees) {
          let root = new TreeNode(i)
          root.left = left
          root.right = right
          trees.push(root)
        }
      }
    }

    return trees
  }

  return dfs(1, n)
}

console.log(generateTrees(0))

/* ***********************************************************
Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

Example 1:
Input: [1,3,null,null,2]

   1
  /
 3
  \
   2

Output: [3,1,null,null,2]

   3
  /
 1
  \
   2

Example 2:
Input: [3,1,4,null,null,2]

  3
 / \
1   4
   /
  2

Output: [2,1,4,null,null,3]

  2
 / \
1   4
   /
  3
Follow up:

A solution using O(n) space is pretty straight forward.
Could you devise a constant space solution?
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
function recoverTree(root) {
  // The inorder traversal of a valid BST is ascending.
  // Use morris traversal for constant space.
  // Compare prev and curr for error nodes.
  if (!root) {
    return null
  }
  let curr = root
  let prev = null
  let previous = null // The predecessor of every node
  const errorNodes = []
  while (curr) {
    if (!curr.left) {
      // Finished traversing the left child. Judge values here.
      if (previous && previous.val > curr.val) {
        errorNodes.push(previous, curr)
      }
      previous = curr
      curr = curr.right
    } else {
      // Find the predecessor of root when root has left child
      prev = curr.left
      while (prev.right && prev.right !== curr) {
        prev = prev.right
      }
      if (!prev.right) {
        prev.right = curr
        curr = curr.left
      } else {
        // Finished traversing the left child. The next node is current.
        // Judge values here too.
        if (previous && previous.val > curr.val) {
          errorNodes.push(previous, curr)
        }
        // Reset
        prev.right = null
        previous = curr
        curr = curr.right
      }
    }
  }

  // Two conditions: 1 or 2 pairs of errorNodes
  let node1 = errorNodes[0]
  let node2 = errorNodes.length === 2 ? errorNodes[1] : errorNodes[3]
  // Swap values
  let temp = node1.val
  node1.val = node2.val
  node2.val = temp
}

const root = new TreeNode(1)
root.left = new TreeNode(3)
root.left.right = new TreeNode(2)
recoverTree(root)
console.log(root)

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

function layerTraverse(root) {
  let currentLast = root
  let nextLast = root
  const queue = [root]
  const result = []
  while (queue.length) {
    const node = queue.shift()
    result.push(node.val)
    if (node.left) {
      queue.push(node.left)
      nextLast = node.left
    }
    if (node.right) {
      queue.push(node.right)
      nextLast = node.right
    }
    // Has reached the right most node
    if (node === currentLast) {
      currentLast = nextLast // Go to the next layer
    }
  }
  return result
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.right = new TreeNode(3)
root.left.right.left = new TreeNode(4)
console.log(layerTraverse(root))

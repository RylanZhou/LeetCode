function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

function postorder(root) {
  const doRecursion = (node) => {
    if (!node) {
      return ''
    }
    return doRecursion(node.left) + doRecursion(node.right) + node.val
  }

  return doRecursion(root)
}

function postorderII(root) {
  if (!root) {
    return ''
  }
  let result = ''
  const mark = {}
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    if (node.right) {
      stack.push(node.right)
      node.right = null
    }
    stack.push(node)
    if (node.left) {
      stack.push(node.left)
      node.left = null
    }
    stack.push(node)
  }

  return result
}

const root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)
console.log(postorderII(root))

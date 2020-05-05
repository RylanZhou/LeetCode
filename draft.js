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
  const result = []

  // from 到 to 路径上的所有节点进行翻转，翻转之后的节点存在right链上
  const reverse = (from, to) => {
    if (from === to) {
      return
    }
    let x = from
    let y = from.right
    let z = null
    while (true) {
      z = y.right
      y.right = x
      x = y
      y = z
      if (x === to) {
        break
      }
    }
  }

  // 倒序输出 from 和 to 之间这条路径上的所有节点
  const printReverse = (from, to) => {
    // 将 from 到 to 的所有节点进行翻转
    reverse(from, to)
    let iter = to
    while (true) {
      result.push(iter.val)
      if (iter === from) {
        break
      }
      iter = iter.right
    }
  }

  let dump = new TreeNode(0)
  // 当前节点设置成为临时节点的左子树用于保存
  dump.left = root
  let current = dump
  let prev = null
  while (current) {
    if (!current.left) {
      // 左为空，那么进入右
      current = current.right
    } else {
      // 左不为空，同样要找到当前节点的前驱节点
      prev = current.left
      while (prev.right && prev.right !== current) {
        prev = prev.right
      }

      if (!prev.right) {
        // 新的叶子节点
        prev.right = current
        current = current.left
      } else {
        // 否则还原树的形状，然后进入当前节点的右子树。这里要做从当前节点的左子树到当前节点的前驱节点这条路径上所有节点的倒序输出。
        printReverse(current.left, prev)
        prev.right = null
        current = current.right
      }
    }
  }

  return result
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.right = new TreeNode(3)
root.left.right.left = new TreeNode(4)
console.log(postorderII(root))

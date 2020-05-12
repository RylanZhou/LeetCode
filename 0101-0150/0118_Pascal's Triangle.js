/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
  if (!numRows) {
    return []
  }
  if (numRows === 1) {
    return [[1]]
  }
  const result = [[1], [1, 1]]
  if (numRows === 2) {
    return result
  }
  for (let i = 2; i < numRows; i++) {
    const layer = [1]
    for (let j = 1; j < i; j++) {
      layer.push(result[i - 1][j] + result[i - 1][j - 1])
    }
    layer.push(1)
    result.push(layer)
  }
  return result
}

console.log(generate(5))

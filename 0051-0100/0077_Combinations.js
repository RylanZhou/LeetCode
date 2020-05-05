/* ***********************************************************
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:
Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
************************************************************ */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
  const result = []

  const dfs = (layer, currentCombination) => {
    if (layer > k) {
      result.push(currentCombination)
      return
    }

    for (let i = currentCombination[layer - 2] + 1; i <= layer + (n - k); i++) {
      dfs(layer + 1, [...currentCombination, i])
    }
  }

  for (let i = 1; i <= 1 + (n - k); i++) {
    dfs(2, [i])
  }

  return result
}

console.log(combine(4, 2))

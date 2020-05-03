/* ***********************************************************
Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:
Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
************************************************************ */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
  const sorted = nums.sort((a, b) => a - b)
  const result = []

  const dfs = (layer, currentArray) => {
    result.push(currentArray)

    const usedMap = {}
    for (let i = layer, len = nums.length; i < len; i++) {
      if (!usedMap[sorted[i]]) {
        usedMap[sorted[i]] = true
        dfs(i + 1, [...currentArray, sorted[i]])
      }
    }
  }

  dfs(0, [])

  return result
}

console.log(subsetsWithDup([1, 2, 2]))

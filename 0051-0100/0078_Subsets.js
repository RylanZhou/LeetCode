/* ***********************************************************
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
************************************************************ */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const result = []

  const dfs = (layer, currentSet) => {
    result.push(currentSet)
    for (let i = layer; i < nums.length; i++) {
      dfs(i + 1, [...currentSet, nums[i]])
    }
  }

  dfs(0, [])

  return result
}

console.log(subsets([1, 2, 3]))

/* ***********************************************************
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
************************************************************ */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  const results = []

  const calculateSolution = (currentResult, index, target) => {
    if (target === 0) {
      results.push([...currentResult])
      return
    }
    if (target < 0) return

    // From rear to front, find the biggest solution first
    for (let i = index; i >= 0; i--) {
      currentResult.push(candidates[i])
      calculateSolution(currentResult, i, target - candidates[i])
      currentResult.pop()
    }
  }

  calculateSolution([], candidates.length - 1, target)

  return results
}

function main() {
  console.log(combinationSum([2, 3, 5], 1))
}

main()

/* ***********************************************************
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

Example 1:
Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]

Example 2:
Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
************************************************************ */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  const sorted = candidates.sort((num1, num2) => num1 - num2)

  const resultsMap = {}

  const calculateSolution = (currentResult, index, target) => {
    if (!target) {
      // Get rid of identical solutions
      const key = JSON.stringify(currentResult)
      if (!resultsMap[key]) {
        resultsMap[key] = [...currentResult]
      }
      return
    }
    if (target < 0) return

    for (let i = index; i >= 0; i--) {
      currentResult.push(sorted[i])
      calculateSolution(currentResult, i - 1, target - sorted[i])
      currentResult.pop()
    }
  }

  calculateSolution([], sorted.length - 1, target)

  return Object.values(resultsMap)
}

function main() {
  console.log(combinationSum2([2, 5, 2, 1, 2], 5))
}

main()

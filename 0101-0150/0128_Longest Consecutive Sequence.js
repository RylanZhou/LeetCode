/* ***********************************************************
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
************************************************************ */
/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  const map = {}
  for (const num of nums) {
    map[num] = true
  }

  let result = 0

  for (const num of nums) {
    if (!(num - 1 in map)) {
      // Current num is the smallest in a possible sequence
      let current = num
      let streak = 1
      while (current + 1 in map) {
        current++
        streak++
      }
      result = Math.max(streak, result)
    }
  }

  return result
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))

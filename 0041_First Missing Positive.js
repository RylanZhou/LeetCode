/* ***********************************************************
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:
Input: [1,2,0]
Output: 3

Example 2:
Input: [3,4,-1,1]
Output: 2

Example 3:
Input: [7,8,9,11,12]
Output: 1
Note:
Your algorithm should run in O(n) time and uses constant extra space.
************************************************************ */

/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
  const existMap = {}
  for (const each of nums) {
    if (each > 0) {
      existMap[each] = true
    }
  }
  let i = 1
  while (existMap[i]) {
    i++
  }
  return i
}

function main() {
  console.log(firstMissingPositive([1, 2, 0]))
}

main()

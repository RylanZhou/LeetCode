/* ***********************************************************
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Follow up:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
************************************************************ */

/**
 * @param {number[]} nums
 * @return {number}
 */
// Dynamic Programming I
function maxSubArray(nums) {
  const dp = new Array(nums.length)
  dp[0] = nums[0]
  let result = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = (dp[i - 1] < 0 ? 0 : dp[i - 1]) + nums[i]
    result = Math.max(result, dp[i])
  }
  return result
}

// Dynamic Programming II: Without using extra array space
function maxSubArrayII(nums) {
  let currentSum = 0
  let result = nums[0]
  for (let i = 1; i < nums.length; i++) {
    currentSum += nums[i]
    result = Math.max(result, currentSum)
    if (currentSum < 0) {
      currentSum = 0
    }
  }
  return result
}

function main() {
  console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
}

main()

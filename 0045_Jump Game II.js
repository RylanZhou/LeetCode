/* ***********************************************************
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:
Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.

Note:
You can assume that you can always reach the last index.
************************************************************ */

/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
  let minStep = -1
  // Record the best result at every position
  let minResult = new Array(nums.length).fill(-1)

  const doJump = (pos, step) => {
    if (pos >= nums.length - 1) {
      if (minStep === -1) {
        minStep = step
      } else {
        minStep = Math.min(minStep, step)
      }
      return true
    }

    if (minResult[pos] !== -1) {
      // If there is result calculated previously
      minStep = Math.min(minStep, step + minResult[pos])
      return true
    }

    for (let i = nums[pos]; i >= 1; i--) {
      if (doJump(pos + i, step + 1)) {
        if (minResult[pos] === -1) {
          minResult[pos] = minStep
        } else {
          // Check whether the new result is smaller
          minResult[pos] = Math.min(minResult[pos], minStep)
        }
      }
    }
    return false
  }

  doJump(0, 0)
  return minStep
}

function main() {
  console.log(jump([2, 1]))
}

main()

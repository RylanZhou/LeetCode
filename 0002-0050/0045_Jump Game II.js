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

[6,2,6,1,7,9,3,5,3,7,2,8,9,4,7,7,2,2,8,4,6,6,1,3]
[5,9,3,2,1,0,2,3,3,1,0,0]
************************************************************ */
/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
  let step = 0
  let start = 0
  let end = 0
  // end >= nums.length - 1 means we've already get the result
  while (end < nums.length - 1) {
    let newEnd = 0
    // There is a range of points that we can reach in each step. We are finding the farthest range bound in order to get the least steps.
    for (let i = start; i <= end; i++) {
      newEnd = Math.max(newEnd, i + nums[i])
    }
    // Refresh range
    start = end + 1
    end = newEnd
    step++ // Jump
  }

  return step
}

/**
 * @param {number[]} nums
 * @return {number}
 */
// DFS: Time limit exceeded on the last test case
function jumpII(nums) {
  // Record the best result at every position
  let minResult = new Array(nums.length).fill(0)

  const doJump = (pos, step) => {
    if (pos >= nums.length - 1) {
      return 0
    }

    if (minResult[pos]) {
      // If there is result calculated previously
      return minResult[pos]
    }

    if (!nums[pos]) {
      // If nums[pos] is 0, there's no where it could jump to
      minResult[pos] = -1
      return -1
    }

    for (let i = nums[pos]; i >= 1; i--) {
      let result = doJump(pos + i, step + 1)
      if (!result) {
        minResult[pos] = 1
        break // Best result already
      }
      if (result !== -1) {
        if (!minResult[pos]) {
          minResult[pos] = result + 1
        } else {
          minResult[pos] = Math.min(minResult[pos], result + 1)
        }
      }
    }

    // Return the final best result after this position
    if (!minResult[pos]) {
      // Doesn't get a result
      minResult[pos] = -1
      return -1
    }
    return minResult[pos]
  }

  doJump(0, 0)
  return minResult[0]
}

function main() {
  console.log(jump([2, 3, 1, 1, 4]))
}

main()

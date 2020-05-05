/* ***********************************************************
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
************************************************************ */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  let front = 0
  let rear = nums.length - 1
  // Use binary search to find the position of the max value smaller than target
  while (front < rear) {
    let mid = (front + rear) >> 1 // !: mid has to be bias to the left, so make it floor
    // Should not judge exact equal because it could be in the middle of a sequence of the same target, like [1, 1, 1, 1, 1]
    if (nums[mid] >= target) {
      // The beginning of target must be on the left side or at mid
      rear = mid
    } else {
      // The beginning of target must be on the right side of mid
      front = mid + 1
    }
  }
  const targetStart = front
  if (nums[targetStart] !== target) {
    return [-1, -1]
  }

  // Use binary search again to find the position of the min value greater than target
  // front does not need to be reset.
  rear = nums.length - 1
  while (front < rear) {
    let mid = (front + rear + 1) >> 1 // !: mid has to be bias to the right, so make it ceiling
    if (nums[mid] <= target) {
      // The ending of target must be on the right side or at mid
      front = mid
    } else {
      rear = mid - 1
    }
  }
  const targetEnd = rear

  return [targetStart, targetEnd]
}

function main() {
  console.log(searchRange([1, 8, 8, 8, 8], 8))
}

main()

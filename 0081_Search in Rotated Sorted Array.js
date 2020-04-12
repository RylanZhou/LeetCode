/* ***********************************************************
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

You are given a target value to search. If found in the array return true, otherwise return false.

Example 1:
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true

Example 2:
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
************************************************************ */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function search(nums, target) {
  if (!nums.length) {
    return false
  }

  // Binary search, the thinking is the same as './0033_Search in Rotated Sorted Array.js':
  // If nums[front] <= nums[mid], then left half is sorted

  // The only difference:
  // When nums[front] === nums[mid], it could be [3, 1, 3, 3, 3]
  // In this case, nums[mid] must also equals to nums[rear]

  let front = 0
  let rear = nums.length - 1

  while (front <= rear) {
    let mid = (front + rear) >> 1
    if (nums[mid] === target) {
      return true
    }

    // Handle difference, just simply increase front and decrease rear
    if (nums[front] === nums[mid] && nums[mid] === nums[rear]) {
      front++
      rear--
      continue
    }

    // The same logic as in 0033
    // If left half is sorted
    if (nums[front] <= nums[mid]) {
      // Target is in the left half
      if (nums[front] <= target && target <= nums[mid]) {
        rear = mid - 1
      } else {
        front = mid + 1
      }
    } else {
      // Target is in the right half
      if (nums[rear] >= target && target >= nums[mid]) {
        front = mid + 1
      } else {
        rear = mid - 1
      }
    }
  }

  return false
}

console.log(search([2, 5, 6, 0, 0, 1, 2], 7))

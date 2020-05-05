/* ***********************************************************
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
************************************************************ */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  // Binary Search
  let front = 0
  let rear = nums.length - 1
  while (front < rear) {
    let mid = (front + rear) >> 1
    if (nums[mid] > nums[rear]) {
      front = mid + 1
    } else {
      rear = mid
    }
  }

  const offset = front
  front = 0
  rear = nums.length - 1
  while (front <= rear) {
    let mid = (front + rear) >> 1
    const originMid = (mid + offset) % nums.length
    if (nums[originMid] < target) {
      front = mid + 1
    } else if (nums[originMid] > target) {
      rear = mid - 1
    } else {
      return originMid
    }
  }

  return -1
}

function searchII(nums, target) {
  let front = 0
  let rear = nums.length - 1
  while (front <= rear) {
    const mid = (front + rear) >> 1
    if (nums[mid] === target) {
      return mid
    }
    if (nums[front] <= nums[mid]) {
      // Left half is sorted, pay attention to equal, because mid takes the floor rather than ceiling of (front + rear) / 2
      if (nums[front] <= target && target <= nums[mid]) {
        // Target is in the left half
        rear = mid - 1
      } else {
        front = mid + 1 // Target is in the right half
      }
    } else {
      // Right half is sorted
      if (nums[mid] <= target && target <= nums[rear]) {
        // Target is in the right half
        front = mid + 1
      } else {
        rear = mid - 1
      }
    }
  }
  return -1
}

function main() {
  console.log(searchII([3, 1], 1))
}

main()

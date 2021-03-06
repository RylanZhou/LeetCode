/* ***********************************************************
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:
Input: [1,3,5,6], 5
Output: 2

Example 2:
Input: [1,3,5,6], 2
Output: 1

Example 3:
Input: [1,3,5,6], 7
Output: 4

Example 4:
Input: [1,3,5,6], 0
Output: 0
************************************************************ */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  if (!nums.length || target <= nums[0]) return 0
  if (target > nums[nums.length - 1]) return nums.length

  let front = 0
  let rear = nums.length - 1
  while (front < rear) {
    const mid = (front + rear) >> 1
    if (nums[mid] === target) return mid
    // ! If mid takes the floor, front = mid + 1, else rear = mid - 1
    if (nums[mid] < target) {
      front = mid + 1
    } else {
      rear = mid
    }
  }
  return front
}

function main() {
  console.log(searchInsert([1, 3, 5, 6], 4))
}

main()

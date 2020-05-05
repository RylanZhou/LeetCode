/* ***********************************************************
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
************************************************************ */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
  let front = 0
  let rear = nums.length - 1
  let iter = 0

  while (iter <= rear) {
    if (nums[iter] === 0 && iter !== front) {
      ;[nums[front], nums[iter]] = [nums[iter], nums[front]]
      front++
    } else if (nums[iter] === 2 && iter !== rear) {
      ;[nums[rear], nums[iter]] = [nums[iter], nums[rear]]
      rear--
    } else {
      iter++
    }
  }
}

const arr = [2, 1, 0]
sortColors(arr)
console.log(arr)

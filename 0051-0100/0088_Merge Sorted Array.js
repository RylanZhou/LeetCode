/* ***********************************************************
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

Example:
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3
Output: [1,2,2,3,5,6]
************************************************************ */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  let pointerM = m - 1
  let pointerN = n - 1
  let placedCount = 0

  // From tail to front, insert or shift in the same loop
  while (pointerM >= 0 && pointerN >= 0) {
    if (nums1[pointerM] > nums2[pointerN]) {
      // nums1[pointerM] is going to be placed in the end, shift
      nums1[m + n - 1 - placedCount] = nums1[pointerM]
      pointerM--
    } else {
      // nums2[pointerN] is going to be placed in the end, insert
      nums1[m + n - 1 - placedCount] = nums2[pointerN]
      pointerN--
    }
    placedCount++
  }

  // nums2 are not finished placing
  while (pointerN >= 0) {
    nums1[m + n - 1 - placedCount] = nums2[pointerN]
    pointerN--
    placedCount++
  }

  console.log(nums1)
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)

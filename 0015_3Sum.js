/** ***************************
  [Description]
  Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

  Note:
  The solution set must not contain duplicate triplets.

  [Input]
  [-1, 0, 1, 2, -1, -4]
  [Output]
  [
    [-1, 0, 1],
    [-1, -1, 2]
  ]
*************************** */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  const numsCopy = nums.sort();
  for (let i = 0; i < numsCopy.length; i++) {

  }
}

function main() {
  console.log(threeSum([-1, 0, 1, 2, -1, -4]));
}

main();

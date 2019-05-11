/** ***************************
  [Description]
  Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

  [Input]
  array = [-1, 2, 1, -4]
  target = 1
  [Output]
  2
*************************** */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
  let result = 0;
  // Init currentDelta with the max value
  let currentDelta = Number.MAX_VALUE;
  // Sort nums to make it easier to operate
  const numsCopy = nums.sort((obj1, obj2) => obj1 - obj2);

  // Picking out 3 elements means the left pointer will only be able to get length - 2
  for (let i = 0; i < numsCopy.length - 2; i++) {
    // j is the middle pointer
    let j = i + 1;
    // k is the right pointer
    let k = numsCopy.length - 1;
    while (j < k) {
      const sum = numsCopy[i] + numsCopy[j] + numsCopy[k];
      if (currentDelta > Math.abs(sum - target)) {
        currentDelta = Math.abs(sum - target);
        result = sum;
      }
      if (sum === target) {
        return target;
      } if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
}

function main() {
  console.log(threeSumClosest([1, 1, 1, 1], 3));
}

main();

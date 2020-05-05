/** ***************************
  [Description]
  Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

  Note:
  The solution set must not contain duplicate quadruplets.

  [Input]
  array = [1, 0, -1, 0, -2, 2]
  target = 0
  [Output]
  [
    [-1, 0, 0, 1],
    [-2, -1, 1, 2],
    [-2, 0, 0, 2]
  ]
*************************** */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

function fourSum(nums, target) {
  const result = [];
  if (nums.length < 4) return result;

  const numsCopy = nums.sort((obj1, obj2) => obj1 - obj2);

  // Similar to the 3 sum solution, just wrap it in another loop
  for (let i = 0; i < numsCopy.length - 3; i++) {
    if (numsCopy[i] > 0 && numsCopy[i] > target) break;
    if (i > 0 && numsCopy[i] === numsCopy[i - 1]) continue;

    const threeSumTarget = target - numsCopy[i];

    for (let j = i + 1; j < numsCopy.length - 2; j++) {
      if (numsCopy[j] > 0 && numsCopy[j] > threeSumTarget) break;
      if (j > i + 1 && numsCopy[j] === numsCopy[j - 1]) continue;

      let k = j + 1;
      let l = numsCopy.length - 1;
      while (k < l) {
        const sum = numsCopy[j] + numsCopy[k] + numsCopy[l];
        if (sum < threeSumTarget) {
          k++;
        } else if (sum > threeSumTarget) {
          l--;
        } else {
          result.push([numsCopy[i], numsCopy[j], numsCopy[k], numsCopy[l]]);
          while (k < l && numsCopy[k] === numsCopy[k + 1]) {
            k++;
          }
          while (k < l && numsCopy[l] === numsCopy[l - 1]) {
            l--;
          }
          k++;
          l--;
        }
      }
    }
  }

  return result;
}

function main() {
  console.log(fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11));
}

main();

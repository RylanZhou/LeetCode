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
  const result = [];
  // No solution if the nums given contains less than 3 elements
  if (nums.length < 3) return result;

  // Sort nums to make it easier to operate
  const numsCopy = nums.sort((obj1, obj2) => obj1 - obj2);

  // Picking out 3 elements means the left pointer will only be able to get length - 2
  for (let i = 0; i < numsCopy.length - 2; i++) {
    if (numsCopy[i] > 0) {
      // The smallest one is bigger than the target 0
      break;
    }
    if (i > 0 && numsCopy[i] === numsCopy[i - 1]) {
      // Get rid of duplicated solutions
      // eslint-disable-next-line no-continue
      continue;
    }
    // j is the middle pointer, running from the left pointer to the right pointer
    let j = i + 1;
    // k is the right pointer, beginning from the very end
    let k = numsCopy.length - 1;

    while (j < k) {
      // If the middle pointer hasn't meet the right pointer
      const sum = numsCopy[i] + numsCopy[j] + numsCopy[k];
      if (sum === 0) {
        result.push([numsCopy[i], numsCopy[j], numsCopy[k]]);
        // Get rid of duplicated answers
        while (j < k && numsCopy[j] === numsCopy[j + 1]) {
          j++;
        }
        while (j < k && numsCopy[k] === numsCopy[k - 1]) {
          k--;
        }
        // Finally, j has to run to a new position and k has to change the position as well
        // Otherwise, their is no exit for the main while
        j++;
        k--;
      } else if (sum < 0) {
        // The sum is too small, meaning j has to be larger
        j++;
      } else {
        // The sum is too large, meaning k has to be smaller
        k--;
      }
    }
  }
  return result;
}

function main() {
  console.log(threeSum([-1, 0, 1, 2, -1, -4]));
}

main();

/** ***************************
  [Description]
  There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log(m+n)). You may assume nums1 and nums2 cannot be both empty.

  [Input]
  nums1 = [1, 3]
  nums2 = [2, 4]

  [Output]
  2.5

  [Explanation]
  The median is (2 + 3) / 2 = 2.5
*************************** */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  const newNums = nums1.concat(nums2);
  newNums.sort((num1, num2) => num1 - num2);
  const totalLength = newNums.length;
  if (totalLength % 2 === 1) {
    return newNums[(totalLength - 1) / 2].toFixed(1);
  }
  return (newNums[totalLength / 2] + newNums[totalLength / 2 - 1]) / 2;
}

function main() {
  const nums1 = [3];
  const nums2 = [-2, -1];
  console.log(findMedianSortedArrays(nums1, nums2));
}

main();

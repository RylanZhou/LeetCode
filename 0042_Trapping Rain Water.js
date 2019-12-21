/* ***********************************************************
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6（1 + 4 + 1）

3                               ▇
2               ▇   ----------  ▇   ▇  ----- ▇
1       ▇ ----- ▇   ▇ ----- ▇   ▇   ▇   ▇    ▇   ▇
0   1   2   3   4   5   6   7   8   9   10   11   12
************************************************************ */

/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  if (height.length < 3) return 0

  let sum = 0
  let leftMax = 0
  let rightMax = 0

  // Starting from both left and right would save time
  let leftIndex = 0
  let rightIndex = height.length - 1
  while (leftIndex < rightIndex) {
    // If left side is lower, we focus on left side
    if (height[leftIndex] <= height[rightIndex]) {
      if (leftMax < height[leftIndex]) {
        leftMax = height[leftIndex]
      } else {
        // The amount of water that could be stored at this bar
        sum += leftMax - height[leftIndex]
      }
      leftIndex++
    } else {
      if (rightMax < height[rightIndex]) {
        rightMax = height[rightIndex]
      } else {
        sum += rightMax - height[rightIndex]
      }
      rightIndex--
    }
  }
  return sum
}

// Basic algorithm but it will lead to TLE
function trapII(height) {
  let sum = 0
  const maxHeight = Math.max(...height)
  let currentHeight = 1
  while (currentHeight <= maxHeight) {
    let leftBar = -1
    for (let i = 0; i < height.length; i++) {
      if (height[i] >= currentHeight) {
        if (leftBar !== -1) {
          sum += i - leftBar - 1
        }
        leftBar = i
      }
    }
    currentHeight++
  }

  return sum
}

function main() {
  console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
}

main()

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
function trap(height) {}

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
  console.log(trap([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
}

main()

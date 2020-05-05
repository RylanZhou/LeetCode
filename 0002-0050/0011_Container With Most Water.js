/** ***************************
  [Description]
  Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

  Note: You may not slant the container and n is at least 2.

  8
  7       |
  6       |
  5       |           |
  4       |   |       |
  3       |   |       |   |
  2   |   |   |   |   |   |
  1   |   |   |   |   |   |
  0   1   2   3   4   5   6
  The above vertical lines are represented by array [2, 7, 4, 2, 5, 3]. In this case, the max area, 15, of container is formed by column 2 and column 5, with the max length of 3 and max height of 5.

  [Input]
  [2, 7, 4, 2, 5, 3]
  [Output]
  15
*************************** */

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  const arrayArea = [];
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    arrayArea.push(0);
    for (let j = 0; j < i; j++) {
      arrayArea[i] = Math.max(arrayArea[i], Math.min(height[j], height[i]) * (i - j));
    }
    max = Math.max(max, arrayArea[i]);
  }
  return max;
}

function main() {
  console.log(maxArea([6, 5, 4, 3, 2, 1]));
}

main();

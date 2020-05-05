/* ***********************************************************
Given a collection of intervals, merge all overlapping intervals.

Example 1:
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:
Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
************************************************************ */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  if (!intervals.length) return []

  // Sort by the start point of each interval
  intervals.sort((interval1, interval2) => interval1[0] - interval2[0])

  const result = []
  let currentInterval = intervals[0]
  for (const each of intervals) {
    if (each[0] > currentInterval[1]) {
      // Cannot be merged
      result.push(currentInterval)
      currentInterval = each
    } else {
      // Can be merged
      currentInterval[1] = Math.max(currentInterval[1], each[1])
    }
  }
  // The last merged/unmerged interval
  result.push(currentInterval)

  return result
}

function main() {
  console.log(
    merge([
      [1, 4],
      [1, 3],
      [3, 4],
      [3, 5]
    ])
  )
}

main()

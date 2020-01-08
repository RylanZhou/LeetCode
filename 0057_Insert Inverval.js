/* ***********************************************************
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
************************************************************ */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
  if (!intervals.length) return [newInterval]

  let start = newInterval[0]
  let end = newInterval[1]
  let i = 0
  // Find the start index of interval that will be merged
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    i++
  }
  // For the intervals after start index, check whether it has to be merged
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    start = Math.min(start, intervals[i][0])
    end = Math.max(end, intervals[i][1])
    intervals.splice(i, 1) // Delete intervals that will be merged
  }
  intervals.splice(i, 0, [start, end]) // Insert the merged interval

  return intervals
}

function main() {
  console.log(
    insert(
      [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16]
      ],
      [4, 8]
    )
  )
}

main()

/* ***********************************************************
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:
Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
************************************************************ */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteUnique(nums) {
  const result = []

  const doPermutation = layer => {
    if (layer === nums.length) {
      result.push([...nums])
      return
    }

    // For each round, use usedMap to record whether nums[i] is necessary to be swapped
    const usedMap = {}
    for (let i = layer; i < nums.length; i++) {
      if (!usedMap[nums[i]]) {
        usedMap[nums[i]] = true
        let temp = nums[i]
        nums[i] = nums[layer]
        nums[layer] = temp

        doPermutation(layer + 1)

        nums[layer] = nums[i]
        nums[i] = temp
      }
    }
  }

  doPermutation(0)
  return result
}

function main() {
  console.log(permuteUnique([1, 1, 1, 1, 2]))
}

main()

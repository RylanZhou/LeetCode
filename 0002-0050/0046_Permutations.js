/* ***********************************************************
Given a collection of distinct integers, return all possible permutations.

Example: 
Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
************************************************************ */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const result = []

  const doPermutation = layer => {
    if (layer === nums.length) {
      result.push([...nums])
      return
    }
    for (let i = layer; i < nums.length; i++) {
      let temp = nums[i]
      nums[i] = nums[layer]
      nums[layer] = temp

      doPermutation(layer + 1)

      nums[layer] = nums[i]
      nums[i] = temp
    }
  }

  doPermutation(0)
  return result
}

function main() {
  console.log(permute([1, 2, 3]))
}

main()

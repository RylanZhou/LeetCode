/* ***********************************************************
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
************************************************************ */

const permutation = (array, layer, length, result) => {
  if (layer === length) {
    result.push([...array])
    return
  }
  for (let i = layer; i < length; i++) {
    // In the first round where i = layer, nothing will swap
    let temp = array[i]
    array[i] = array[layer]
    array[layer] = temp

    permutation(array, layer + 1, length, result)

    // Swap back
    array[layer] = array[i]
    array[i] = temp
  }
}

function permutationLexicography(usedMap, currentArray, layer, length, result) {
  if (layer === length) {
    result.push([...currentArray])
    return
  }
  for (const key in usedMap) {
    if (!usedMap[key]) {
      currentArray[layer] = key
      usedMap[key] = true // Mark as used
      permutationLexicography(usedMap, currentArray, layer + 1, length, result)
      usedMap[key] = false // Release mark
    }
  }
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
  const length = nums.length
  if (!length) return

  let k = length - 1
  // Where is the ascent point?
  while (k > 0 && nums[k - 1] >= nums[k]) {
    k--
  }
  if (k === 0) {
    // Whole array is descendant
    nums.reverse()
    return
  }

  let j = k
  // Find which element is going to swap with nums[k - 1]
  while (j < length) {
    if (
      nums[j] > nums[k - 1] &&
      (nums[j + 1] <= nums[k - 1] || j + 1 === length)
    ) {
      let temp = nums[k - 1]
      nums[k - 1] = nums[j]
      nums[j] = temp
      const rest = nums.slice(k).reverse()
      nums.splice(k, rest.length, ...rest)
      return
    }
    j++
  }
}

function main() {
  const array = [1, 1, 1, 1, 1, 1, 1, 2, 1]
  // const result = []
  // permutation(array, 0, array.length, result)
  // const usedMap = {}
  // for (const each of array) {
  //   usedMap[each] = false
  // }
  // permutationLexicography(usedMap, [], 0, array.length, result)
  nextPermutation(array)
  console.log(array)
}

main()

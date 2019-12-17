/* ***********************************************************
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
************************************************************ */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {}

const permutation = (array, layer, length, result) => {
  if (layer === length - 1) {
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

const permutationLexicography = () => {}

function main() {
  const array = [1, 2, 3]
  const result = []
  permutation(array, 0, array.length, result)
  console.log(result)
}

main()

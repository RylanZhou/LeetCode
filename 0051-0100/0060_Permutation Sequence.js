/* ***********************************************************
The set [1,2,3,...,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note:

Given n will be between 1 and 9 inclusive.
Given k will be between 1 and n! inclusive.

Example 1:
Input: n = 3, k = 3
Output: "213"

Example 2:
Input: n = 4, k = 9
Output: "2314"
************************************************************ */
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getPermutation(n, k) {
  let factor = 1
  const numbers = []
  // Calculate n!
  for (let i = 1; i <= n; i++) {
    factor *= i
    numbers.push(i)
  }

  const result = []
  let tempK = k - 1 // Start from 0
  for (let i = 0; i < n; i++) {
    factor /= n - i
    const index = Math.floor(tempK / factor) // Index start from 0
    result.push(...numbers.splice(index, 1))
    tempK -= index * factor
  }

  return result.join('')
}

function main() {
  console.log(getPermutation(3, 3))
}

main()

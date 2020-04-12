function FindGreatestSumOfSubArray(array = []) {
  let currentSum = array[0]
  let result = array[0]
  for (let i = 1, len = array.length; i < len; i++) {
    currentSum += array[i]
    result = Math.max(result, currentSum)
    if (currentSum < 0) {
      currentSum = 0
    }
  }

  return result
}

console.log(FindGreatestSumOfSubArray([6, -3, -2, 7, -15, 1, 2, 2]))

/* ***********************************************************
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Example 1:
Input: num1 = "2", num2 = "3"
Output: "6"

Example 2:
Input: num1 = "123", num2 = "456"
Output: "56088"

Note:
The length of both num1 and num2 is < 110.
Both num1 and num2 contain only digits 0-9.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
************************************************************ */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  if (num1 === '1') return num2
  if (num2 === '1') return num1

  let n1 = ''
  let n2 = ''
  // Make sure n1 is not shorter than n2
  if (num1.length < num2.length) {
    n1 = num2
    n2 = num1
  } else {
    n1 = num1
    n2 = num2
  }

  const l1 = n1.length
  const l2 = n2.length
  const resultDigits = new Array(l1 + l2).fill(0)
  // i.e., 13 x 18 will makes digits result in:
  // resultDigits = [0, 0, 0],
  // multipliedDigits1 = [4, 0 ,1],
  // multipliedDigits2 = [0, 3, 1],
  // Then resultDigits becomes: [4, 3, 2]
  for (let i = l2 - 1; i >= 0; i--) {
    let carrier = 0
    // The extra space is to store carrier
    let multipliedDigits = new Array(l1).fill(0)
    for (let j = l1 - 1; j >= 0; j--) {
      const result = (n2.charCodeAt(i) - 48) * (n1.charCodeAt(j) - 48)
      // There are zeroes ahead if not using the ones in n1 to multiply n2, so the offset is l2 - 1 - i + l1 - 1 - j
      const offset = l2 - 1 - i + (l1 - 1 - j)
      multipliedDigits[offset] = (carrier + result) % 10
      carrier = Math.floor((carrier + result) / 10)
    }
    if (carrier) {
      multipliedDigits.push(carrier)
    }

    // Add multipliedDigits into resultDigits
    carrier = 0
    for (let j = 0; j < multipliedDigits.length; j++) {
      let result = resultDigits[j] + multipliedDigits[j]
      resultDigits[j] = (carrier + result) % 10
      carrier = Math.floor((carrier + result) / 10)
    }
    if (carrier) {
      resultDigits[multipliedDigits.length] += carrier
    }
  }

  // From rear to front, find the position of the first non-zero number
  let startPos = l1 + l2 - 1
  while (startPos >= 0 && !resultDigits[startPos]) {
    startPos--
  }
  // Form the answer
  let result = ''
  for (let i = startPos; i >= 0; i--) {
    result += `${resultDigits[i]}`
  }

  return result
}

function main() {
  console.log(multiply('1000', '10'))
}

main()

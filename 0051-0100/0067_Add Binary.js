/* ***********************************************************
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"
************************************************************ */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  let str1 = a.split('')
  let str2 = b.split('')
  // str1 is no shorter than str2
  if (a.length < b.length) {
    ;[str1, str2] = [str2, str1]
  }
  str2.unshift(...new Array(str1.length - str2.length).fill('0'))

  let carrier = 0
  for (let i = str1.length - 1; i >= 0; i--) {
    if (!carrier) {
      if (str1[i] === str2[i]) {
        carrier = str1[i] === '1' ? 1 : 0
        str1[i] = '0'
      } else {
        str1[i] = '1'
        carrier = 0
      }
    } else {
      if (str1[i] === str2[i]) {
        carrier = str1[i] === '1' ? 1 : 0
        str1[i] = '1'
      } else {
        carrier = 1
        str1[i] = '0'
      }
    }
  }
  if (carrier) {
    return '1' + str1.join('')
  }
  return str1.join('')
}

function main() {
  console.log(addBinary('1010', '1011'))
}

main()

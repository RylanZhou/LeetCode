/* ***********************************************************
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1

Clarification:
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
************************************************************ */

/**
 * KMP
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  const getNext = p => {
    let result = [-1]
    let k = -1
    let j = 0
    while (j < p.length - 1) {
      if (k === -1 || p[k] === p[j]) {
        k++
        j++
        result[j] = k
      } else {
        k = result[k]
      }
    }
    return result
  }

  const next = getNext(needle)
  let i = 0
  let j = 0
  while (i < haystack.length && j < needle.length) {
    if (j === -1 || haystack[i] === needle[j]) {
      i++
      j++
    } else {
      j = next[j]
    }
  }
  if (j === needle.length) {
    return i - j
  }
  return -1
}

// Violent Compare I
function strStrI(haystack, needle) {
  if (!needle.length) return 0

  for (let i = 0; i < haystack.length; i++) {
    let j = 0
    let increment = 0
    while (
      i + increment < haystack.length &&
      j < needle.length &&
      haystack[i + increment] === needle[j]
    ) {
      increment++
      j++
    }
    if (j === needle.length) {
      return i
    }
  }
  return -1
}

function strStrII(haystack, needle) {
  let i = 0
  let j = 0
  while (i < haystack.length && j < needle.length) {
    if (haystack[i] === needle[j]) {
      i++
      j++
    } else {
      i = i - j + 1
      j = 0
    }
  }
  if (j === needle.length) {
    return i - j
  }
  return -1
}

function main() {
  console.log(strStr('mississippi', 'issip'))
}

main()

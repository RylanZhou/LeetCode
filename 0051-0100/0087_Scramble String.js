/* ***********************************************************
Given a string s1, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.

Below is one possible representation of s1 = "great":

    great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
To scramble the string, we may choose any non-leaf node and swap its two children.

For example, if we choose the node "gr" and swap its two children, it produces a scrambled string "rgeat".

    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
We say that "rgeat" is a scrambled string of "great".

Similarly, if we continue to swap the children of nodes "eat" and "at", it produces a scrambled string "rgtae".

    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
We say that "rgtae" is a scrambled string of "great".

Given two strings s1 and s2 of the same length, determine if s2 is a scrambled string of s1.

Example 1:
Input: s1 = "great", s2 = "rgeat"
Output: true

Example 2:
Input: s1 = "abcde", s2 = "caebd"
Output: false
************************************************************ */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function isScramble(s1, s2) {
  if (s1 === s2) {
    return true
  }
  if (!s1 || !s2 || s1.length !== s2.length) {
    return false
  }

  // Keep transferring s1 until it equals s2.
  // To cut s1 into 2 pieces, the cutting point will be 1 ~ s1.length - 1
  // For every two child nodes, there are two ways to transfer:
  // 1. Without swapping, go deeper and see whether it matches part of s2
  // 2. With swapping

  // First, check whether the characters in s1 and s2 appear the same
  const charMap = {}
  for (let i = 0, len = s1.length; i < len; i++) {
    charMap[s1[i]] ? charMap[s1[i]]++ : (charMap[s1[i]] = 1)
    charMap[s2[i]] ? charMap[s2[i]]-- : (charMap[s2[i]] = -1)
  }

  if (Object.values(charMap).some((value) => value)) {
    return false
  }

  // Cut
  for (let i = 1, len = s1.length; i < len; i++) {
    // Transfer 1
    if (
      isScramble(s1.substring(0, i), s2.substring(0, i)) &&
      isScramble(s1.substring(i), s2.substring(i))
    ) {
      return true
    }

    // Transfer 2: Swapping child nodes
    if (
      isScramble(s1.substring(i), s2.substring(0, s2.length - i)) &&
      isScramble(s1.substring(0, i), s2.substring(s2.length - i))
    ) {
      return true
    }
  }

  return false
}

console.log(isScramble('great', 'rgeat'))

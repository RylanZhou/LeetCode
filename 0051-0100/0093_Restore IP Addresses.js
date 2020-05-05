/* ***********************************************************
Given a string containing only digits, restore it by returning all possible valid IP address combinations.

A valid IP address consists of exactly four integers (each integer is between 0 and 255) separated by single points.

Example:
Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]
************************************************************ */
/**
 * @param {string} s
 * @return {string[]}
 */
function restoreIpAddresses(s) {
  const len = s.length
  const result = []

  const judge = (str) => {
    if (str[0] === '0' && str.length > 1) {
      return false
    }
    const number = +str
    return 0 <= number && number <= 255
  }

  const dfs = (pos, currentResult) => {
    if (pos > len || currentResult.length > 4) {
      return
    }
    if (pos === len && currentResult.length === 4) {
      result.push(currentResult.join('.'))
    }
    for (let i = 1; i < 4; i++) {
      const segment = s.substring(pos, pos + i)
      if (judge(segment)) {
        dfs(pos + i, [...currentResult, segment])
      }
    }
  }

  dfs(0, [])

  return result
}

console.log(restoreIpAddresses('255'))

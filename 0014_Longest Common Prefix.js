/** ***************************
  [Description]
  Write a function to find the longest common prefix string amongst an array of strings.
  If there is no common prefix, return an empty string "".

  [Input]
  ["flower","flow","flight"]
  [Output]
  "fl"

  [Input]
  ["dog","racecar","car"]
  [Output]
  ""
*************************** */

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }
  const standard = strs[0];
  let result = '';
  for (let i = 0; i < standard.length; i++) {
    let flag = true;
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== standard[i]) {
        flag = false;
        break;
      }
    }
    if (flag === false) {
      break;
    }
    result += standard[i];
  }
  return result;
}

function main() {
  console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
}

main();

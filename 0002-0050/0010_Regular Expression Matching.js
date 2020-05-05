/** ***************************
  [Description]
  Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

  '.' Matches any single character.
  '*' Matches zero or more of the preceding element.
  The matching should cover the entire input string (not partial).

  Note:
  1. s could be empty and contains only lowercase letters a-z.
  2. p could be empty and contains only lowercase letters a-z, and characters like . or *.

  [Input]
  s = "aa"
  p = "a"
  [Output]
  false

  [Input]
  s = "aa"
  p = "a*"
  [Output]
  true

  [Input]
  s = "ab"
  p = ".*"
  [Output]
  true

  [Input]
  s = "aab"
  p = "c*a*b"
  [Output]
  true

  [Input]
  s = "mississippi"
  p = "mis*is*p*."
  [Output]
  false
*************************** */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
  if (p === '') {
    return s === '';
  }
  if (s === '') {
    // s = '' is equivalent to p = '' or p = '.*' or p = 'a*' or p = 'a*a*'
    return p === '' || /^([.a-z]\*)+$/.test(p);
  }
  if (p.length >= 2 && p[1] === '*') {
    if (s[0] === p[0] || p[0] === '.') {
      return isMatch(s.substring(1, s.length), p)
            // To solve the problem with s = 'aaa', p = 'a*a' or 'a*a*' or 'a*aaaa'
            || isMatch(s.substring(1, s.length), p.substring(2, p.length))
            // To solve the problem with s = 'aaab', p = '.*a*b' or 'a*a*b'
            || isMatch(s, p.substring(2, p.length));
    }
    // Ignore the first two character in p, like 'a*'
    return isMatch(s, p.substring(2, p.length));
  }
  if (s[0] === p[0] || p[0] === '.') {
    // Normal match
    return isMatch(s.substring(1, s.length), p.substring(1, p.length));
  }
  return false;
}

function main() {
  console.log(isMatch('', '.*.*.*a*a*a*'));
}

main();

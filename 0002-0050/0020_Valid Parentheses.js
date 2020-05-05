/** ***************************
  [Description]
  Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:
  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.

  Note:
  An empty string is also considered valid.

  [Input]
  ()
  [Output]
  true

  [Input]
  ()[]{}
  [Output]
  true

  [Input]
  ([)]
  [Output]
  false

  [Input]
  {()}
  [Output]
  true
*************************** */

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const map = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  const array = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{' || s[i] === '(' || s[i] === '[') {
      array.push(s[i]);
    } else if (array[array.length - 1] === map[s[i]]) {
      array.pop();
    } else {
      array.push(s[i]);
    }
  }

  return array.length === 0;
}

function main() {
  console.log(isValid('{{{()}}}'));
}

main();

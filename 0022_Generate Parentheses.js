/** ***************************
  [Description]
  Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses

  [Input]
  3
  [Output]
  [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
  ]
*************************** */

/**
 * @param {number} n
 * @return {string[]}
 */

function recursion(n, currentAnswer, leftNumber, rightNumber, answerArray) {
  if (currentAnswer.length === 2 * n) {
    answerArray.push(currentAnswer);
    return;
  }

  if (leftNumber < n) {
    recursion(n, `${currentAnswer}(`, leftNumber + 1, rightNumber, answerArray);
  }
  if (rightNumber < leftNumber) {
    recursion(n, `${currentAnswer})`, leftNumber, rightNumber + 1, answerArray);
  }
}

function generateParenthesis(n) {
  const answerArray = [];
  recursion(n, '(', 1, 0, answerArray);
  return answerArray;
}

function main() {
  console.log(generateParenthesis(4));
}

main();

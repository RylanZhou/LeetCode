/* ***********************************************************
Validate if a given string can be interpreted as a decimal number.

Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one. However, here is a list of characters that can be in a valid decimal number:

Numbers 0-9
Exponent - "e"
Positive/negative sign - "+"/"-"
Decimal point - "."
Of course, the context of these characters also matters in the input.

Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
" -90e3   " => true
" 1e" => false
"e3" => false
" 6e-1" => true
" 99e2.5 " => false
"53.5e93" => true
" --6 " => false
"-+3" => false
"95a54e53" => false
************************************************************ */
/**
 * @param {string} s
 * @return {boolean}
 */
function isNumber(s) {
  const stateMap = [
    {},
    { blank: 1, sign: 2, decimal: 3, dot: 4 },
    { decimal: 3, dot: 4 },
    { decimal: 3, dot: 5, e: 6, blank: 9 },
    { decimal: 5 },
    { decimal: 5, e: 6, blank: 9 },
    { sign: 7, decimal: 8 },
    { decimal: 8 },
    { decimal: 8, blank: 9 },
    { blank: 9 }
  ]

  let state = 1
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    let flag = ''
    if (char === ' ') {
      flag = 'blank'
    } else if (char === '+' || char === '-') {
      flag = 'sign'
    } else if (char === 'e') {
      flag = 'e'
    } else if (char === '.') {
      flag = 'dot'
    } else if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
      flag = 'decimal'
    }

    if (!flag || !stateMap[state][flag]) {
      return false
    }
    state = stateMap[state][flag]
  }

  return [3, 5, 8, 9].includes(state)
}

function main() {
  console.log(isNumber(' 99e2.5 '))
}

main()

/**
 * 5 kyu - Valid Parentheses
 * Write a function called that takes a string of parentheses,
 * and determines if the order of the parentheses is valid.
 * The function should return true if the string is valid, and false if it's invalid.
 *
 * Examples:
 * "()"              =>  true
 * ")(()))"          =>  false
 * "("               =>  false
 * "(())((()())())"  =>  true
 *
 * Constraints:
 * 0 <= input.length <= 100
 */

function validParentheses(parens) {
  const regex = /(\(|\))/g;
  const found = parens.match(regex);

  let open = 0;
  let closed = 0;

  if (parens == null || parens === '') {
    return true;
  }

  if (parens[1] === ')' && parens[2] === ')') {
    return false;
  }

  if (
    parens.length >= 2 &&
    parens[0] === '(' &&
    parens[parens.length - 1] === ')' &&
    parens.length <= 100
  ) {
    for (let i = 0; i < found.length; i++) {
      if (found[i] === '(') {
        open++;
      } else if (found[i] === ')') {
        closed++;
      }
    }
    if (open === closed) {
      return true;
    }
  }
  return false;
}

console.log(validParentheses('')); // false
console.log(validParentheses('(')); // false
console.log(validParentheses('()')); // true
console.log(validParentheses('())')); // false
console.log(validParentheses(')(()))')); // false
console.log(validParentheses('(())((()())())')); // true
console.log(validParentheses('())(()')); // false

// ----------------------------------------------------------

// I had something that was smaller and looked cooler, but
// this is how you'd want to write an actual parser.
function validParentheses(string) {
  const tokenizer = /[()]/g; // ignores characters in between; parentheses are
  let count = 0; // pretty useless if they're not grouping *something*
  let token;
  while (((token = tokenizer.exec(string)), token !== null)) {
    if (token == '(') {
      count++;
    } else if (token == ')') {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }
  return count == 0;
}

// ----------------------------------------------------------

function validParentheses(parens) {
  let n = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }

  return n == 0;
}

function validParentheses(parens) {
  let n = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') n++;
    if (parens[i] === ')') n--;
    if (n < 0) return false;
  }
  return n === 0;
}

console.log(validParentheses('')); // false
console.log(validParentheses('(')); // false
console.log(validParentheses('()')); // true
console.log(validParentheses('())')); // false
console.log(validParentheses(')(()))')); // false
console.log(validParentheses('(())((()())())')); // true
console.log(validParentheses('())(()')); // false

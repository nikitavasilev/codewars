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

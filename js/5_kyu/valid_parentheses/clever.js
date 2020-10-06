function validParentheses(string) {
  const tokenizer = /[()]/g; // ignores characters in between; parentheses are
  let count = 0; // pretty useless if they're not grouping *something*
  const token = tokenizer.exec(string);

  while ((token, token !== null)) {
    if (token === '(') {
      count++;
    } else if (token === ')') {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }
  return count === 0;
}

console.log(validParentheses('')); // false
console.log(validParentheses('(')); // false
console.log(validParentheses('()')); // true
console.log(validParentheses('())')); // false
console.log(validParentheses(')(()))')); // false
console.log(validParentheses('(())((()())())')); // true
console.log(validParentheses('())(()')); // false

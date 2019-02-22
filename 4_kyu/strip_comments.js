/*
4 kyu - Strip Comments

Complete the solution so that it strips all text that
follows any of a set of comment markers passed in.
Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples

The output expected would be:

apples, pears
grapes
bananas

The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

function solution(input, markers) {
  for (let i = 0; i < array.length; i++) {
    
  }
}

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])); // "apples, pears\ngrapes\nbananas"
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"])); // "Q\nu\ne"
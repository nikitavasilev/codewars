/*
6 kyu - Split Strings

Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace
the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/
'use strict';

function solution(str) {
  const newStr = str.match(/.{1,2}/g);
  if (str.length % 2 !== 0) newStr[newStr.length-1] += '_';
  return newStr;
}

solution('abcde');
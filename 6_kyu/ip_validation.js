/*
6 kyu - IP Validation

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
IPs should be considered valid if they consist of four octets,
with values between 0 and 255, inclusive.

Input to the function is guaranteed to be a single string.

Examples:

Valid inputs:
1.2.3.4
123.45.67.89

Invalid inputs:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089

Note that leading zeros (e.g. 01.02.03.04) are considered invalid.
*/
'use strict';

function isValidIP(str) {
  str = str.split('.');
  const strElementLength = str.map(w => w.length);
  const ifLeadingZero = str.map((s) => s[0]);
  let isValid = false;
  
  if (str.length === 4) {
    for (let i = 0; i < str.length; i++) {
      if (strElementLength[i] > 1 && ifLeadingZero[i] === '0') {
        isValid = false;
        break;
      } else {
        str = str.map(Number);
        if (str[i] > 255 || str[i] < 0) {
          isValid = false;
          break;
        } else {
          isValid = true;
        }
      }
    }
  }
  return isValid;
}

console.log(isValidIP('1.2.3.4')); // true
console.log(isValidIP('123.45.67.89')); //true
console.log(isValidIP('1.2.3')); // false
console.log(isValidIP('1.2.3.4.5')); // false
console.log(isValidIP('123.456.78.90')); // false
console.log(isValidIP('123.045.067.089')); // false
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
  let string = str.split('.');
  const strElementLength = string.map(w => w.length);
  const ifLeadingZero = string.map((s) => s[0]);
  let isValid = true;
  
  for (let i = 0; i < string.length; i++) {
    if (str.match(/^[0-9.]+$/) === null || string[i] === '') {
      isValid = false;
    } else if (string.length === 4) {
      if (strElementLength[i] > 1 && ifLeadingZero[i] === '0') {
        isValid = false;
      } else if (string[i] > 255 || string[i] < 0) {
        isValid = false;
      }
    } else {
      isValid = false;
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
console.log(isValidIP('abc.def.ghi.jkl')); // false
console.log(isValidIP('74.9..243')); // false
console.log(isValidIP('.108.162.196')); // false
console.log(isValidIP('165.27..199')); // false
console.log(isValidIP('.251.234.23')); // false
console.log(isValidIP('78..199.213')); // false
console.log(isValidIP('194.167.14.')); // false
console.log(isValidIP('.156.250.247')); // false
console.log(isValidIP('.12.208.61')); // false
console.log(isValidIP('.106.241.210')); // false
console.log(isValidIP('246..35.241')); // false
console.log(isValidIP('0.0.0.0')); // true

// Savage version:

function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}
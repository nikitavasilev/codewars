function isValidIP(str) {
  const string = str.split('.');
  const strElementLength = string.map((w) => w.length);
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
console.log(isValidIP('123.45.67.89')); // true
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

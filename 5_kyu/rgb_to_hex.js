/*
5 kyu - RGB To Hex Conversion

The rgb() method is incomplete.
Complete the method so that passing in RGB decimal values
will result in a hexadecimal representation being returned.
The valid decimal values for RGB are 0 - 255.
Any (r,g,b) argument values that fall out of that range
should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/
'use strict';

function rgb(r, g, b) {
  const hex = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8',
    '9', 'A', 'B', 'C', 'D', 'E', 'F']; // A = 11, F = 16
  let rQuotient, rReminder, gQuotient,
    gReminder, bQuotient, bReminder;

  if (r > 255) {
    r = 255;
  } else if (g > 255) {
    g = 255;
  } else if (b > 255) {
    b = 255;
  }

  rQuotient = Math.floor(r / 16);
  rReminder = ((r / 16) % 1) * 16;
  gQuotient = Math.floor(g / 16);
  gReminder = ((g / 16) % 1) * 16;
  bQuotient = Math.floor(b / 16);
  bReminder = ((b / 16) % 1) * 16;

  const result = 
    hex[rQuotient] + hex[rReminder] +
    hex[gQuotient] + hex[gReminder] +
    hex[bQuotient] + hex[bReminder];
  return result;
}

console.log(rgb(255, 255, 255)); // returns FFFFFF
console.log(rgb(255, 255, 300)); // returns FFFFFF
console.log(rgb(0,0,0)); // returns 000000
console.log(rgb(148, 0, 211)); // returns 9400D3
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

function rgb(r, g, b) {
  // rgb = base-10 system, hex = base-16 system
  const RGB = [r, g, b];
  const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']; // A = 11, F = 16

  for (let i = 0; i < RGB.length; i++) {
    if (RGB[i] > 255) {
      RGB[i] = 255;
    } else if (RGB[i] < 0) {
      RGB[i] = 0;
    }
  }

  const rQuotient = Math.floor(RGB[0] / 16); // first digit of red
  const rReminder = ((RGB[0] / 16) % 1) * 16; // second digit of the 6-digit hex code
  const gQuotient = Math.floor(RGB[1] / 16);
  const gReminder = ((RGB[1] / 16) % 1) * 16;
  const bQuotient = Math.floor(RGB[2] / 16);
  const bReminder = ((RGB[2] / 16) % 1) * 16;

  const result = hex[rQuotient]
    + hex[rReminder]
    + hex[gQuotient]
    + hex[gReminder]
    + hex[bQuotient]
    + hex[bReminder];
  return result;
}

// Better solution:
function toHex(d) {
  if (d < 0) return '00';
  if (d > 255) return 'FF';
  return `0${Number(d).toString(16)}`.slice(-2).toUpperCase();
}

function rgb2(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

console.log(rgb(255, 255, 255)); // returns FFFFFF
console.log(rgb(255, 255, 300)); // returns FFFFFF
console.log(rgb(0, 0, 0)); // returns 000000
console.log(rgb2(148, 0, 211)); // returns 9400D3

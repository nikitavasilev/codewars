function toHex(d) {
  if (d < 0) return '00';
  if (d > 255) return 'FF';
  return `0${Number(d).toString(16)}`.slice(-2).toUpperCase();
}

function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

console.log(rgb(255, 255, 255)); // returns FFFFFF
console.log(rgb(255, 255, 300)); // returns FFFFFF
console.log(rgb(0, 0, 0)); // returns 000000
console.log(rgb(148, 0, 211)); // returns 9400D3

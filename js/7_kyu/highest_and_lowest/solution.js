function highAndLow(numbers) {
  const words = numbers.split(' ').map(Number);
  const str = `${Math.max(...words)} ${Math.min(...words)}`;
  return str;
}

console.log(highAndLow('1 2 3 4 5'));
console.log(highAndLow('1 2 -3 4 5'));
console.log(highAndLow('1 9 3 4 -5'));

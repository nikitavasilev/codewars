const maxSequence = (arr) => {
  let maxSoFar = 0;
  let maxEndingHere = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere += arr[i];
    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    } else if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }
  }
  return maxSoFar;
};

console.log(maxSequence([])); // 0
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSequence([-2, -3, 4, -1, -2, 1, 5, -3])); // 7
console.log(maxSequence([-3])); // 7
console.log(maxSequence([-3, -1, -255, 35, 150, -20])); // 7

function deleteNth(arr, n) {
  const array = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === array[j]) {
        count++;
      }
    }
    if (count < n) {
      array.push(arr[i]);
    }
  }
  return array;
}

console.log(deleteNth([1, 1, 1, 1], 2)); // [1,1]
console.log(deleteNth([20, 37, 20, 21], 1)); // [20,37,21]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // [1, 1, 3, 3, 7, 2, 2, 2]

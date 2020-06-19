function deleteNth(arr, x) {
  const cache = {};
  return arr.filter((n) => {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}

console.log(deleteNth([1, 1, 1, 1], 2)); // [1,1]
console.log(deleteNth([20, 37, 20, 21], 1)); // [20,37,21]
console.log(deleteNth2([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // [1, 1, 3, 3, 7, 2, 2, 2]

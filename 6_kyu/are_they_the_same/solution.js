function comp(array1, array2) {
  if (array1 !== null && array2 !== null) {
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);

    if (array1.length === array2.length) {
      let i = 0;
      while (i < array1.length) {
        if (!(array1[i] * array1[i] === array2[i])) {
          return false;
        }
        i++;
      }
      return true;
    }
    return false;
  }
  return false;
}

const arr1 = [121, 144, 19, 161, 19, 144, 19, 11];
const arr2 = [121, 361, 361, 361, 14641, 20736, 20736, 25921];
comp(arr1, arr2);

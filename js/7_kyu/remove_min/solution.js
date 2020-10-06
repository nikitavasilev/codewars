function removeSmallest(numbers) {
  const cloneNumbersArr = [...numbers];
  const min = cloneNumbersArr.indexOf(Math.min(...cloneNumbersArr));
  cloneNumbersArr.splice(min, 1);
  return cloneNumbersArr;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
console.log(
  removeSmallest([309, 108, 54, 27, 341, 64, 54, 210, 241, 327, 295])
);

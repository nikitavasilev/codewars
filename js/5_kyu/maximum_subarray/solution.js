const maxSequence = (arr) => {
  let maximum;
  let result;
  result = 0;
  const maxFromBegin = [];
  const maxFromEnd = [];

  if (arr == null || arr === '') {
    return 0;
  }
  if (arr.length === 1 && !(arr[0] < 0)) {
    return arr[0];
  }

  maximum = 0;
  for (let j = arr.length - 1; j >= 0; j--) {
    maximum += arr[j];
    maxFromBegin.unshift(maximum);
  }
  const beginningIndex = maxFromBegin.indexOf(Math.max(...maxFromBegin));

  maximum = 0;
  for (let i = 0; i < arr.length; i++) {
    maximum += arr[i];
    maxFromEnd.push(maximum);
  }
  const endingIndex = maxFromEnd.indexOf(Math.max(...maxFromEnd));

  for (let k = beginningIndex; k <= endingIndex; k++) {
    result += arr[k];
  }

  const maxValueBegin = Math.max(...maxFromBegin);
  const maxValueEnd = Math.max(...maxFromEnd);
  const both = Math.max(...maxFromBegin) + Math.max(...maxFromEnd);

  if (result < maxValueBegin || result < maxValueEnd) {
    if (maxValueBegin > maxValueEnd) {
      result = maxValueBegin;
    } else {
      result = maxValueEnd;
    }
  } else if (result < 0) {
    return 0;
  }
  return result;
};

console.log(maxSequence([])); // 0
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSequence([-2, -3, 4, -1, -2, 1, 5, -3])); // 7
console.log(maxSequence([-3])); // 7
console.log(maxSequence([-3, -1, -255, 35, 150, -20])); // 7

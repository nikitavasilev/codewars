/*
5 kyu - Maximum subarray sum

The maximum sum subarray problem consists in finding
the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers
and the maximum sum is the sum of the whole array.
If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum.
Note that the empty list or array is also a valid sublist/subarray.
*/

// Solution using the Kadane's algorithm:

// Simple idea of the Kadane’s algorithm is to look for all positive
// contiguous segments of the array (max_ending_here is used for this).
// And keep track of maximum sum contiguous segment among all positive segments
// (max_so_far is used for this).
// Each time we get a positive sum compare it with max_so_far
// and update max_so_far if it is greater than max_so_far

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

/* My messed up solution:

var maxSequence = function(arr) {
  let maximum, result;
  result = 0;
  const maxFromBegin = [];
  const maxFromEnd = [];

  if (arr == null || arr == '') {
    return 0;
  } else if (arr.length === 1 && !(arr[0] < 0)) {
    return arr[0];
  }

  maximum = 0;
  for (let j = arr.length -1; j >= 0; j--) {
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
*/

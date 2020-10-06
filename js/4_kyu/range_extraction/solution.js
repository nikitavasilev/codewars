function solution(list) {
  for (let i = 0; i < list[list.length - 2]; i++) {
    for (let j = 1; j < list.length; j++) {
      if (list[i] / list[j] === list[i]) {
        console.log(list[i]);
      }
    }
  }
}

const test = [
  -6,
  -3,
  -2,
  -1,
  0,
  1,
  3,
  4,
  5,
  7,
  8,
  9,
  10,
  11,
  14,
  15,
  17,
  18,
  19,
  20,
];

console.log(solution(test)); // "-6,-3-1,3-5,7-11,14,15,17-20"

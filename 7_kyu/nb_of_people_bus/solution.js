const number = (busStops) => {
  let inside = [];
  let outside = [];

  let i = 0;
  while (i < busStops.length) {
    inside.push(busStops[i][0]);
    outside.push(busStops[i][1]);
    i++;
  }
  inside = inside.reduce((a, b) => a + b, 0);
  outside = outside.reduce((a, b) => a + b, 0);
  return inside - outside;
};

number([
  [10, 0],
  [3, 5],
  [5, 8],
]); // 5
number([
  [3, 0],
  [9, 1],
  [4, 10],
  [12, 2],
  [6, 1],
  [7, 10],
]); // 17
number([
  [3, 0],
  [9, 1],
  [4, 8],
  [12, 2],
  [6, 1],
  [7, 8],
]); // 21
number2([
  [10, 0],
  [3, 5],
  [5, 8],
]); // 5

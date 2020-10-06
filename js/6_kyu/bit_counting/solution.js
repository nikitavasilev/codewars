const countBits = (n) => {
  const temp = (n >>> 0).toString(2);
  const count = (temp.match(/1/g) || []).length;
  return count;
};

console.log(countBits(0)); // 0
console.log(countBits(4)); // 1
console.log(countBits(7)); // 3
console.log(countBits(9)); // 2
console.log(countBits(10)); // 2

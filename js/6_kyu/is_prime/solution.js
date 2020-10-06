function isPrime(num) {
  let result = false;
  for (let i = 2; i <= num && num > 0; i++) {
    if (num === 2) {
      result = true;
    } else if (num % i === 0 && num !== i) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  return result;
}

isPrime(0);

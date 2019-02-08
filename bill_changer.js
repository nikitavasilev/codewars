function change(cash) {
  let two, five, ten, amount;
  two = 0;
  five = 0;
  ten = 0;
  amount = cash;

  if (change < 2) {
    return null;
  } else {
  
    while (amount >= 11) {
      amount -= 10;
      ten +=1;
    }
  
    while (amount >= 7 && amount <= 11) {
      amount -= 5;
      five += 1;
    }
  
    while (amount >= 2 && amount <= 6) {
      if (amount == 5) {
        amount -= 5;
        five += 1;
      } else {
        amount -= 2;
        two += 1;
      }
    }
  } 
  return {
    two: two,
    five: five,
    ten: ten
  };
}

console.log(change(1)); // null
console.log(change(42).ten); // 4
console.log(change(42).five); // 0
console.log(change(42).two); // 1
console.log(change(11).ten); // 1
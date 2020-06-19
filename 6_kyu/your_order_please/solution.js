function order(words) {
  let sorted = words.split(' ');
  const temp = [];
  let i = 0;
  let j = 1;

  while (i < sorted.length) {
    const re = new RegExp(j, 'g');
    if (sorted[i].match(re)) {
      temp.push(sorted[i]);
      i = 0;
      j++;
      continue;
    }
    i++;
  }
  sorted = temp;
  return sorted.join(' ');
}

order('is2 Thi1s T4est 3a');
order('4of Fo1r pe6ople g3ood th5e the2');

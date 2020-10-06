// return the total number of smiling faces in the array
function countSmileys(arr) {
  let result = 0;
  const mouth = [')', 'D'];
  const nose = ['-', '~'];
  const eyes = [':', ';'];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < eyes.length; j++) {
      for (let k = 0; k < nose.length; k++) {
        if (arr[i] === eyes[j] + mouth[k]) result++;
        for (let l = 0; l < mouth.length; l++) {
          if (arr[i] === eyes[j] + nose[l] + mouth[k]) result++;
        }
      }
    }
  }
  return result;
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));

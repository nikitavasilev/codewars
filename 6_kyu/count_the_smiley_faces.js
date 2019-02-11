/*
6 kyu - Count the smiley faces!

Description:
Given an array (arr) as an argument complete the function countSmileys
that should return the total number of smiling faces.

Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes.
Eyes can be marked as : or ;

-A smiley face can have a nose but it does not have to.
Valid characters for a nose are - or ~

-Every smiling face must have a smiling mouth that should be marked with either ) or D.
No additional characters are allowed except for those mentioned.

Valid smiley face examples:
:) :D ;-D :~)

Invalid smiley faces:
;( :> :} :] 

Example cases:

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note: In case of an empty array return 0.
You will not be tested with invalid input (input will always be an array).
Order of the face (eyes, nose, mouth) elements will always be the same
*/

'use strict';

//return the total number of smiling faces in the array
function countSmileys(arr) {
  let result = 0;
  const mouth = [')', 'D'];
  const nose = ['-', '~'];
  const eyes = [':', ';'];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < eyes.length; j++) {
      for (let k = 0; k < nose.length; k++) {
        if (arr[i] === (eyes[j] + mouth[k])) result++;
        for (let l = 0; l < mouth.length; l++) {
          if (arr[i] === (eyes[j] + nose[l] + mouth[k])) result++;
        }
      }
    }
  }
  return result;
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
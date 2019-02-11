/*
7 kyu - Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive.
The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
  let x, o, result;
  x = str.match(/x/gi);
  o = str.match(/o/gi);

  if (x === null && o === null) {
    result = true;
  } else if ((x != null && o != null) && (x.length == o.length)) {
    result = true;
  } else {
    result = false;    
  }
  return result;
}

XO('ooxx');
XO('xooxx');
XO('ooxXm');
XO('zpzpzpp');
XO('zzoo');
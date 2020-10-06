function XO(str) {
  const x = str.match(/x/gi);
  const o = str.match(/o/gi);
  let result;

  if (x === null && o === null) {
    result = true;
  } else if (x != null && o != null && x.length === o.length) {
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

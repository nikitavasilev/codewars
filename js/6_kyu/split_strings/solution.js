function solution(str) {
  const newStr = str.match(/.{1,2}/g);
  if (str.length % 2 !== 0) newStr[newStr.length - 1] += '_';
  return newStr;
}

solution('abcde');

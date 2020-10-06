function solution(input, markers) {
  let res;

  for (let i = 0; i < markers.length; i++) {
    let regexp;

    if (markers[i] === '$' || markers[i] === '*') {
      regexp = new RegExp(`\\${markers[i]}.*\n|$`, 'g');
    } else {
      regexp = new RegExp(`${markers[i]}.*\n|$`, 'g');
    }
    res = input.replace(regexp, '\n');
    res = input.replace(/[^\S\r\n]+$/gm, '');
  }
  return res.trim();
}

console.log(
  solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!'])
); // "apples, pears\ngrapes\nbananas"
console.log(solution('Q @b\nu\ne -e f g', ['@', '-'])); // "Q\nu\ne"

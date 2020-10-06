function domainName(url) {
  let website = url;

  if (website.includes('http://')) {
    website = website.slice(7);
  } else if (website.includes('https://')) {
    website = website.slice(8);
  }
  const arr = website.split('.');

  if (arr[0] === 'www') {
    return arr[1];
  }
  return arr[0];
}

console.log(domainName('http://google.com')); // google
console.log(domainName('http://google.co.jp')); // google
console.log(domainName('www.xakep.ru')); // xakep
console.log(domainName('https://youtube.com')); // youtube
console.log(domainName('https://www.youtube.com')); // youtube
console.log(domainName('http://github.com/nikitavasilev/codewars')); // github
console.log(domainName('http://www.zombie-bites.com')); // zombie-bites
console.log(domainName('https://www.cnet.com')); // cnet

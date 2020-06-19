function domainName(url) {
  let website = url;
  website = website.replace('https://', '');
  website = website.replace('http://', '');
  website = website.replace('www.', ''); // fails if the domain finishes with 'www.'
  return website.split('.')[0];
}

console.log(domainName('http://google.com')); // google
console.log(domainName('http://google.co.jp')); // google
console.log(domainName('www.xakep.ru')); // xakep
console.log(domainName('https://youtube.com')); // youtube
console.log(domainName('https://www.youtube.com')); // youtube
console.log(domainName('http://github.com/nikitavasilev/codewars')); // github
console.log(domainName('http://www.zombie-bites.com')); // zombie-bites
console.log(domainName('https://www.cnet.com')); // cnet

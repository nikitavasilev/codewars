function likes(names) {
  const arr = names || [];
  switch (arr.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${arr[0]} likes this`;
    case 2:
      return `${arr[0]} and ${arr[1]} like this`;
    case 3:
      return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
    default:
      return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
  }
}

console.log(likes([])); // no one likes this
console.log(likes(['Peter'])); // Peter likes this
console.log(likes(['Jacob', 'Alex'])); // Jacob and Alex like this
console.log(likes(['Max', 'John', 'Mark'])); // Max, John and Mark like this
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // Alex, Jacob and 2 others like this

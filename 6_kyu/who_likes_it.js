/*
6 kyu - Who likes it?

You probably know the "like" system from Facebook and other pages.
People can "like" blog posts, pictures or other items.
We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String,
which must take in input array,
containing the names of people who like an item.
It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

For 4 or more names, the number in and 2 others simply increases.
*/

function likes(names) {
  let message;

  if (names.length === 0) message = 'no one likes this';

  for (let i = 0; i < names.length; i++) {
    if (names.length === 1) {
      message = `${names[i]} likes this`;
    } else if (names.length === 2) {
      message = `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
      message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
      message = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
  }
  return message;
}

// Other version with switch statement:
function likes2(names) {
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
console.log(likes2(['Alex', 'Jacob', 'Mark', 'Max'])); // Alex, Jacob and 2 others like this

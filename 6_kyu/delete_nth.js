/*
6 kyu - Delete occurrences of an element if it occurs more than n times

Enough is enough!

Alice and Bob were on a holiday.
Both of them took many pictures of the places they've been,
and now they want to show Charlie their entire collection.
However, Charlie doesn't like this sessions,
since the motive usually repeats.
He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit during the session if
they show the same motive at most N times. Luckily,
Alice and Bob are able to encode the motive as a number.
Can you help them to remove numbers such that their
list contains each number only up to N times,
without changing the order?

Task:

Given a list lst and a number N,
create a new list that contains each number
of lst at most N times without reordering.
For example if N = 2, and the input is [1,2,3,1,2,1,2,3],
you take [1,2,3,1,2], drop the next [1,2] since this
would lead to 1 and 2 being in the result 3 times,
and then take 3, which leads to [1,2,3,1,2,3].

Example:

deleteNth ([1,1,1,1],2) // return [1,1]
deleteNth ([20,37,20,21],1) // return [20,37,21]
*/

function deleteNth(arr, n) {
  const array = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === array[j]) {
        count++;
      }
    }
    if (count < n) {
      array.push(arr[i]);
    }
  }
  return array;
}

// Elegant solution:

function deleteNth2(arr, x) {
  const cache = {};
  return arr.filter((n) => {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}

/* Explanation:

The general idea is that they are keeping track of the numbers
of times they already seen n in the past when looping through the array.

Stuff in parens ( ) in javascript is evaulated as an expression.
Here they're checking if property n (whatever is the current number in the loop)
exists in the cache object. Javascript has a notion of falsy values: null,
undefined, 0, NaN etc -- when testing these in a logical expression they are
the equivalent of false.

In the case that cache[n] doesn't exist, it will evaluate to 'undefined',
and so the expression will become ( undefined || 0 ) resulting in 0 being returned (0 + 1).

The idea is that if they are seeing n for the first time,
then they want to set cache[n] = 1 initially - which is why has to be set to 0,
so it results in 0+1 = 1.

The second time around if they see that number again, cache[n] already
exists (its value is currently 1) and so (cache[n] || 0)
evaluated to cache[n] + 1 or 1+1, and now cache[n] is now = 2.
*/

console.log(deleteNth([1, 1, 1, 1], 2)); // [1,1]
console.log(deleteNth([20, 37, 20, 21], 1)); // [20,37,21]
console.log(deleteNth2([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // [1, 1, 3, 3, 7, 2, 2, 2]

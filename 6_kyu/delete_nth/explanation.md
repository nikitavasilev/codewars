## Explanation:

The general idea is that they are keeping track of the numbers
of times they already seen n in the past when looping through the array.

Stuff in parens ( ) in javascript is evaulated as an expression.  
Here they're checking if property n (whatever is the current number in the loop)
exists in the cache object.  
Javascript has a notion of falsy values: null,
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

/*
6 kyu - Is a number prime?

Define a function isPrime/is_prime() that takes one integer argument
and returns true/True or false/False depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1
that has no positive divisors other than 1 and itself.

Example:

bool isPrime(5) = return true

mov edi, 1
call is_prime    ; EAX <- 0 (false)

mov edi, 2
call is_prime    ; EAX <- 1 (true)

mov edi, -1
call is_prime    ; EAX <- 0 (false)

Assumptions:

You can assume you will be given an integer input.
You can not assume that the integer will be only positive.
You may be given negative numbers as well (or 0).
*/
'use strict';

function isPrime(num) {
  let result = false;
  for (let i = 2; i <= num && num > 0; i++) {
    if (num === 2) {
      result = true;
    } else if (num % i === 0 && num !== i) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  return result;
}

isPrime(0);
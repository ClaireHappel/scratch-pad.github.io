// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
 */
// I: none
// O: none
// C: console log either a number, fizz, buzz, or fizzbuzz depending on what the number is divisible by
function fizzBuzz() {
// for start 1, stop 100, increment 1
for (let i = 1; i <= 100; i++){
  // log to console Fizz if i is divisble by 3, plus Buzz if it is divisible by 5 or log the number
  console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
}
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.fizzBuzz = fizzBuzz;
}

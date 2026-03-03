// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a
 *  String as its only input and returns a new String
 *  representing the input String reversed.  For example:
 *
 *      reverseString('hello');  // => 'olleh'
 *
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */
// I: one input, a string
// O: one output, the string reversed
// C: requires a storage variable for return, requires a loop
// E: none
function reverseString(input) {
  // init reverse to an empty string
  let reverse = '';
  // for start of input length - 1, stop 0, decrement of 1 
  for (let i = input.length - 1; i >= 0; i--) {
    // add each element of input to reverse
    reverse += input[i];
  }
// then return reverse
return reverse;
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}

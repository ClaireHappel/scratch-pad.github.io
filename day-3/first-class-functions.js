// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is greater than the
 * base.
 */
// I: one input, a string or number called base
// O: one output, a function that tests whether a value is greater than base
// C: none
// E: none
function createGreaterThanFilter(base) {
  // return a function with param value
  return function (value) {
    // that returns the result of comparing whether value is greater than base
    return value > base;
  }
}

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is less than the
 * base. (test means return true or false)
 *
 */
// I: one input, a string or a number
// O: one output, a function that tests whether a value is less than base
// C: none
// E: none
function createLessThanFilter(base) {
  // return a function with a param value
  return function (value) {
    // that returns the result of comparing whether value is less than base
    return value < base;
  }
}

/**
 * Given a startsWith character, which will be a single character, return a
 * Function that tests whether a given String starts with the startsWith
 * character.
 *
 * This function needs to be case insensitive.
 */
// I: one input, a single character
// O: one output, a function that tests whether a string starts with that character
// C: function must be case insensitive
// E: none
function createStartsWithFilter(startsWith) {
  // return function that takes one param, string
  return function (string){
    // that returns the result of checking if the first letter of string is the character in either upper or lower case
    return string[0] === startsWith.toLowerCase() || string[0] === startsWith.toUpperCase();
  }
}

/**
 * Given a endsWith character, which will be a single character, return a
 * Function that tests whether a given String ends with the endsWith
 * character.
 *
 * This function needs to be case insensitive.
 */
// I: one input, a single character
// O: one output, a function that tests whether a string ends with that character
// C: function must be case insensitive
// E: none
function createEndsWithFilter(endsWith) {
  // return function that takes one parameter, string
  return function (string) {
    // that returns the result of checking if the last letter of string is the character in either upper or lower case
    return string[string.length - 1] === endsWith.toLowerCase() || string[string.length - 1] === endsWith.toUpperCase();
  }
}

/**
 * Given an Array of Strings and a Function designed to modify a String,
 * return the Array of the Strings, modified.
 *
 * TIP: You need to loop over the Strings, right? We need to pass each String to
 * the modify Function, but we need to collect the results into some collection.
 *
 * examples:
 *
 *    modifyStrings(['a', 'b', 'c'], function(str) { return str.toUpperCase() });
 *    // returns => ['A', 'B', 'C']
 *
 *    modifyString(['a', 'b'], function(str){ return str + "!" });
 *    // returns => ['a!', 'b!']
 *
 */
// I: two inputs, an array and a function
// O: one ouput, the array modified by the function
// C: use a for loop, use a storage array
// E: none
function modifyStrings(strings, modify) {
  // init modded to an array literal
  let modded = [];
  // for start 0, stop less than strings.length, increment of 1
  for (let i = 0; i < strings.length; i++){
    // call modify on every string value, then push each modified string to modded
    modded.push(modify(strings[i]))
  }
// return modded
return modded
}

/**
 * Given an Array of Strings and a Function designed to test the String in some
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 *
 * Imagine you had a list of names, and you wanted to test they all
 * begin with "C", or they are all exclaimations that end with "!".
 *
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 *
 * examples:
 *
 *    allStringsPass(['a', 'b', 'c'], function(str) { return str.length === 1 });
 *    // returns => true
 *
 *    allStringsPass(['a', 'bb', 'c'], function(str) { return string.length === 1 });
 *    // returns => false
 */
// I: two inputs, an array and a function
// O: one output, a boolean testing whether all strings passed the function test
// C: use a for loop
// E: none
function allStringsPass(strings, test) {
  // return true if each string passes the test function with true
  return strings.every(test);
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.createGreaterThanFilter = createGreaterThanFilter;
  module.exports.createLessThanFilter = createLessThanFilter;
  module.exports.createStartsWithFilter = createStartsWithFilter;
  module.exports.createEndsWithFilter = createEndsWithFilter;
  module.exports.modifyStrings = modifyStrings;
  module.exports.allStringsPass = allStringsPass;
}

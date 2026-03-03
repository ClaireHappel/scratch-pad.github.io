// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

// I: one input, a string
// O: one output, input string's length
// C: none
// E: none
function length(string) {
  // return the length of the string
  return string.length;
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
// I: one input, a string
// O: one output, the string lowercased
// C: none
// E: none
function toLowerCase(string) {
  // return the string lowercased
  return string.toLowerCase();
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
// I: one input, a string
// O: one output, the string uppercased
// C: none
// E: none
function toUpperCase(string) {
    // return the string uppercased
    return string.toUpperCase();
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: Solve this problem using a combination of split and join.
 *
 */

// I: one input, a string 
// O: one output, the string lowercased with a dash between words
// C: use split and join to solve
// E: none
function toDashCase(string) {
// return the string split at each space, then joined with -, and finally lowercased
return string.split(' ').join('-').toLowerCase();
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 *
 */

// I: two inputs, a string and a single character
// O: one output, a boolean
// C: none
// E: none
function beginsWith(string, char) {
      // if the start of string is either the char lowercased or uppercased, return true- if not, false
        return string[0] === char || string[0] === char.toUpperCase();
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
// I: two inputs, a string and a single character
// O: one output, a boolean
// C: none
// E: none
function endsWith(string, char) {
     //if the last char in string equals char or character lowercased, return true- if not, false
     return string[string.length - 1] === char || string[string.length - 1] === char.toLowerCase();
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
// I: two inputs, both strings
// O: one output, the strings joined
// C: none
// E: none
function concat(stringOne, stringTwo) {
  // return the two strings concatenated
  return stringOne + stringTwo;
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */

// I: several inputs, an unspecified number of strings
// O: one output, a string of all argument strings joined
// C: use a storage array called args
// E: none
function join(stringOne, stringTwo) {
  // init args to the value of an array made up of every argument 
  let args = Array.from(arguments);
  // return that array joined into a string with no seperation/spaces
  return args.join('');
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
// I: two inputs, both strings
// O: one output, the larger string
// C: none
// E: none
function longest(stringOne, stringTwo) {
// return stringOne if StringOne is longer, else return stringTwo
return stringOne.length > stringTwo.length ? stringOne : stringTwo;
}


/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
// I: two inputs, both strings
// O: one output, an integer value depending on if the first or second string is higher in alphabetical order
// C: none
// E: none
function sortAscending(stringOne, stringTwo) {
  // return the result of comparing if stringTwo is higher than stringOne
  return stringTwo.localeCompare(stringOne);
}

/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
// I: two inputs, both strings
// O: one output, an integer value depending on if the first or second string is higher in lower in alphabetical order
// C: none
// E: none
function sortDescending(stringOne, stringTwo) {
  // return the result of comparing if stringOne is higher than stringOne
  return stringOne.localeCompare(stringTwo);
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.length = length;
  module.exports.toLowerCase = toLowerCase;
  module.exports.toUpperCase = toUpperCase;
  module.exports.toDashCase = toDashCase;
  module.exports.beginsWith = beginsWith;
  module.exports.endsWith = endsWith;
  module.exports.concat = concat;
  module.exports.join = join;
  module.exports.longest = longest;
  module.exports.sortAscending = sortAscending;
  module.exports.sortDescending = sortDescending;
}

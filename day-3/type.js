// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/**
 * Given an input value, return true if the value is an Array, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 *
 * HINT: There is a method that can help with this.
 */
// I: one input, any value
// O: one output, a boolean describing if value is an array
// C: use some sort of method (hint it's Array.isArray())
// E: none
function isArray(value) {
  // return true or false depending on if value is an array
  return Array.isArray(value);
}

/**
 * Given an input value, return true if the value is an Object intended as a
 * collection, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not
 * null, not an Array, not a Date - all of these will return 'object' if used
 * with typeof.
 *
 * HINT: look up how to figure out if something is an instance of the Date object.
 *
 * isObject({ a: 1, b: 2 }); // true
 * isObject([1, 2, 3]); // false
 *
 */
// I: one input, a value of any kind
// O: one output, a boolean that checks for an object that is a collection
// C: use methods to weed out arrays, null, dates and other data types
// E: none
function isObject(value) {
 // if value is an array or null or an instance of date or it is not an object- return false, else true
 return Array.isArray(value) || value === null || value instanceof Date || typeof value !== 'object' ? false : true;
  
}

/**
 * Given an input value, return true if is either an Array or an an Object
 * intended as a collection, false if otherwise.
 *
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
// I: one input, a value of any kind
// O: one output, a boolean that checks for an object that is a collection or an array
// C: use methods to weed out null, dates, and other data types
// E: none
function isCollection(value) {
 // if value is null or an instance of date or it is not an object- return false, else true
 return value === null || value instanceof Date || typeof value !== 'object' ? false : true;
}

/**
 * Given an input value, return the type of the value as a String
 *
 * Types are one of:
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 *
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */
function typeOf(value) {
  // if value is strictly equal to null
  if (value === null) {
    // return 'null'
    return "null";
  }
 // if value is an array
 if (Array.isArray(value)) {
    // return 'array'
    return "array";
  }
 // if value is a date
 if (value instanceof Date) {
    // return 'date'
    return 'date';
 }
  // else return 
  return typeof value;
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.isArray = isArray;
  module.exports.isObject = isObject;
  module.exports.isCollection = isCollection;
  module.exports.typeOf = typeOf;
}

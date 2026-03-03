// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/**
 * Given an input Array, loop forward over the Array and print its values
 * using console.log().
 */
// I: one input, an array
// O: none
// C: use console.log to print all elements from array
// E: none
function printArrayValues(array) {
// for start 0, stop less than array length, increment of one
for (let i = 0; i < array.length; i++){
  // log each element of the array to the console
  console.log(array[i]);
}
}

/**
 * Given an input Array, loop backwards over the Array and print its values
 * using console.log().
 */
// I: one input, an array
// O: none
// C: use console.log to print all elements in reverse
// E: none
function printArrayValuesInReverse(array) {
  // create a new array to avoid mutation, reverse each element of the array, then for each reversed element- log it to console
  [...array].reverse().forEach(element => console.log(element));
}

/**
 * Given an input Object, return an Array containing the Object keys.
 */
// I: one input, an object
// O: one output, an array of the objects keys
// C: none
// E: none
function getObjectKeys(object) {
  // return all of the keys of object in an array
  return Object.keys(object);
}

/**
 * Given an input Object, loop over the Object and print its keys
 * using console.log().
 */
// I: one input, an object
// O: none
// C: log all the object's keys to console
// E: none
function printObjectKeys(object) {
  // for key in object
  for (let key in object){
    // log each key to console
    console.log(key);
  }
}

/**
 * Given an input Object, return an Array containing the Object's values.
 */
// I: one input, an object
// O: one output, an array containing the object's values
// C: none
// E: none
function getObjectValues(object) {
  // return an array containing all values from the object
  return Object.values(object);
}

/**
 * Given an input Object, loop over the Object and print its values
 * using console.log().
 */
// I: one input, object
// O: none
// C: log all values of object to console
// E: none
function printObjectValues(object) {
  // for key in object
  for (let key in object){
    // log each value of object to console
    console.log(object[key]);
  }
}

/**
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
// I: one input, an object
// O: one output, a number that is a count of all key/value pairs in the object
// C: none
// E: none
function getObjectLength(object) {
  // init count to 0
  let count = 0;
  // for each key in object
  for (let key in object){
    // add 1 to count
    count += 1;
  }
  // return count
  return count;
}


/**
 * Given an input Object, how might we loop over the Object IN REVERSE and
 * print its values using console.log()?
 */
// I: one input, an object
// O: none
// C: the values of the object, logged in reverse to console
// E: none
function printObjectValuesInReverse(object) {
  // init rev to the value of an array with each value in reverse order
  let rev = Object.values(object).reverse();
  // for each element of the rev array, log the element to console
  rev.forEach(element => console.log(element));
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.printArrayValues = printArrayValues;
  module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
  module.exports.printObjectValues = printObjectValues;
  module.exports.getObjectValues = getObjectValues;
  module.exports.getObjectKeys = getObjectKeys;
  module.exports.printObjectKeys = printObjectKeys;
  module.exports.getObjectLength = getObjectLength;
  module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}

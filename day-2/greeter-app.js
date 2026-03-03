// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day,
 * write a greeting program that prints a greeting to the screen like so:
 *
 * // hour is 0-11 // greeterApp(10) => logs 'Good Morning!'
 *
 * // hour is 12-16 // greeterApp(14) => logs 'Good Afternoon!'
 *
 * // hour is 17-21 // greeterApp(20) => 'Good Evening!'
 *
 * // hour is 22-24 // greeterApp(22) => 'Good Night!'
 *
 * TIPS:
 *
 *   a. At what threshold does morning become afternoon? What comparison
 *      can be used to test that the hour is within the morning threshold.
 *      It's best to be consistant and use the SAME type of comparison for
 *      each threshold.
 *
 *   b. Does the last threshold even need an else-if?
 *
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */
// I: one input, a number indicating time of day
// O: none
// C: log a greeting to console depending on time of day, use if-else-if chain
// E: none
function greeter(hour) {
 //if the hour is less than 12
  if (hour <= 11) {
   // log 'Good Morning!'
   console.log('Good Morning!');
   // else if hour less than 17
  } else if (hour <= 16) {
   // log 'Good Afternoon!'
   console.log('Good Afternoon!');
   //else if hour is less than 22
  } else if (hour <= 21) {
   // log 'Good Evening!'
   console.log('Good Evening!');
   // for other times
  } else {
   // log'Good Night!'
   console.log('Good Night!');
  }
}

/*
 * To test our greeter when developing, we need to fake some input data, ie,
 * the hour, so just change the input value to check your work.
 *
 * In a more realistic setting, you might do something like this to get the
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */

greeter(11);

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.greeter = greeter;
}

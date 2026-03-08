// #!/usr/bin/env node

'use strict';

/**
 * Create a factory function called `makeContact` that takes in `id`, `nameFirst`, and `nameLast`.
 * This function should returns a contact object.
 *
 * ex: makeContact(0, 'Max', 'Gaudin') // => { id: 0, nameFirst: 'Max', nameLast: 'Gaudin' }
 *
 */
// I: three inputs, an id, a first name, and last name
// O: one output, an object for the contact
// C: none
// E: none
function makeContact(id, nameFirst, nameLast) {
  // return the object literal
  return {
    // let key id have value of id param
    id: id,
    // let key nameFirst have value of nameFirst param
    nameFirst: nameFirst,
    // let key nameLast have value of nameLast param
    nameLast: nameLast
  };
}

var contacts = [
  {
    id: 1,
    nameFirst: 'Max',
    nameLast: 'Gaudin',
  },
  {
    id: 2,
    nameFirst: 'John',
    nameLast: 'Fraboni',
  },
  {
    id: 3,
    nameFirst: 'Alon',
    nameLast: 'Robinson',
  },
  {
    id: 4,
    nameFirst: 'Mykia',
    nameLast: 'Smith',
  },
  {
    id: 5,
    nameFirst: 'Alice',
    nameLast: 'Green',
  },
];

/**
 * Create a function called `findContact` that takes in an array of contact objects and a
 * fullName (ex: "Max Gaudin"). This function should return the contact object in the array
 * that matches the `fullName` input, or it should returned undefined if no object is found
 * matching.
 */
// I: two inputs, an array and a string
// O: one output, the object on the array that matches the fullName string
// C: none
// E: if nothing is matching, return undefined
function findContact(array, fullName) {
  // init splitName to an array of fullName string split into first and last name
  let splitName = fullName.split(' ');
  // for start 0, stop end of array, increment of 1
  for(let i = 0; i < array.length; i++){
    // if nameFirst and nameLast in object strictly match the first and last name held in splitName
    if (array[i].nameFirst === splitName[0] && array[i].nameLast === splitName[1]){
      // return the object
      return array[i];
    }
  }
  // else return undefined
  return undefined;
}

/**
 * Create a function called `removeContact` that takes in an array of contact objects and a
 * contact object to remove. This function search through the array and remove the contact object
 * if found.
 */
// I: two inputs, an array and an object
// O: none
// C: if the contact is found on the array, remove it
// E: none
function removeContact(array, contact) {
  // search through array for contacts
  for (let i = 0; i < array.length; i++){
    // if the object on the array is the contact
    if (array[i].firstName === contact.firstName && array[i].lastName === contact.lastName){
      // return the removed object
      return array.splice(i, 1);
    }
  }
}

/**
 * Create a function called `getNamesThatBeginWithLetter` that takes in an array of contact objects.
 * This function should iterate through the array and return a new array of all of the contact
 * objects whose first names begin with input letter
 */
// I: two inputs, an array and a letter
// O: one output, an array of all objects that start with that letter
// C: none
// E: none
function getNamesThatBeginWithLetter(array, letter) {
    // init starts to an array literal
    let starts = [];
      // loop through array
      for (let i = 0; i < array.length; i++){
        // if a first name starts with letter
       if (array[i].nameFirst[0] === letter) {
         //push the object to the starts array
         starts.push(array[i]);
       }
      }
    // return starts
    return starts;
  }

/**
 * Create a function called `getAllContactNames` that takes in an array of contact objects.
 * This function should return a string of each object's full name followed by a linebreak character.
 *
 * example:
 *
 *    getAllContactNames(contacts); // => 'Max Gaudin\nJohn Fabroni\nAlon robinson\nMykia Smith\Alice Green'
 */
// I: one input, an array of contacts
// O: return a string of all names of each array
// C: none
// E: none
function getAllContactNames(array) {
  // init string to a string literal
  let string = '';
  // loop through array
  for(let i = 0; i < array.length; i++){
    // add each firstname and lastname to the array with a space and the \n character
    string += `${array[i].nameFirst} ${array[i].nameLast}\n`; 
  }
  // return all but the last character
  return string.slice(0, -1);
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.makeContact = makeContact;
  module.exports.makeContactList = makeContactList;
}

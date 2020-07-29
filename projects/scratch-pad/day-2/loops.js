// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  //created a for loop and starting at 0
  //the for loop will stop when it hits the end of the array
  //the loop will loop by adding 1
  //used .length to let the loop know when to stop
  
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //created a for loop and started it at the end of the array
  //used .legnth - 1 for the loop to know where to start
  //the loop when end when the array hits 0
  //the loop will count - 1
  
  
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //the Object.keys method returns the keys into an object
  
 return Object.keys(object);

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //the for in loop will loop the keys
  //console.log will print the keys onto the console 
  
  for (let printKeys in object) {
    console.log(printKeys);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
 
 //the function will return the objects values into an array using the Object.values method
 //Object.value places the objects values into an array
 
 return Object.values(object);
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //using a for loop it will loop the values in the object
  //console.log will print the values on the console
  
  for (let getValue in object) {
    console.log(object[getValue]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  //returned the object by using the Object.values method
  //add the .length method to return the number of the key/values
  
 return Object.values(object).length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
 
 //created a variable that stores the Object.values method
 //in the variable it stores an array with the objects values 
 
let obj = Object.values(object);

//the above varaible made it simple to run a loop now
//I created a for loop and started it at the end of the array.
//The loop will stop at 0, the loop will subtract by 1

for (let i = obj.length - 1; i >= 0; i--) {
    console.log(obj[i]);
}

 
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
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

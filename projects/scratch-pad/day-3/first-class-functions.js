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
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //this function will run if the value is greater than the base
   return function(value) {
     return value > base;  
   };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //this function will run if the value is less than the base
    
    return function(value) {
        return value < base;
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //

return function(string) {
// created a variable that is assigned to a string lowercased
  let newStr = string.toLowerCase();
  //this statment will test if the frist letter is equal with the startswith paramter and will return true
  if (newStr[0] === startsWith.toLowerCase()) {
      return true;
      // if it does not match it will return false
  } else {
      return false;
  }
  
};
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(string) {
        // create a varaible newStr2 and is assigned to the last letter of the string
        let newStr2 = string[string.length - 1].toLowerCase();
        // if the last ltter is equal to the last letter of the endsWith parameter it will return true
        
        if (newStr2[0] === endsWith[endsWith.length - 1].toLowerCase()) {
            return true;
        } else {
            // if it does not equal it will return false
            return false;
        }
        
    };
    
    
    
  
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //

 //this loop will loop the strings input and place it into the modify strings
 
 for (let i = 0; i < strings.length; i++) {
    strings[i] = modify(strings[i]);
 }
 

 return strings;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
 //this loop will loop the strings length
 
 for (let i = 0; i < strings.length; i++) {
    // if the test strings index is equal to false it will return false
     if (test(strings[i]) === false) {
         return false;
     }
 } 
     return true;
 


    //return a boolean whether the string passed
    //return true if all the strings passed 
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
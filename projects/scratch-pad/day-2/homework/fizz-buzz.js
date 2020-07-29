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
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    
    
    // create a for loop and a conditonal statment
    
    
    
for (var i = 1; i < 101; i++) {
    // the for loop will loop from 1 to 101
    
    if (i % 15 == 0) console.log('FizzBuzz');
    // if the number is multiples of 15 it will print 'FizzBuzz'
    
    else if (i % 3 === 0) console.log('Fizz');
    
    //if the number is a multiple of 3 it will print 'Fizz'
    
    else if (i % 5 ===0) console.log('Buzz');
    //if the number is a multiple of 5 it will print 'Buzz'
    
    else console.log(i);
    //if the number is not a multiple of any of the above then it will print the number
    
}

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}
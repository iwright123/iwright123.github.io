/** DATA TYPES:
 * 0. variables can hold many data types. Numbers, strings, objects and more. There are eight basic data types in JavaScript.
 * 1. Data types basically specify what kind of data can be stored and manipulated within a program.
 */
 
 // 1. Types of data types
 
 let i = 'Ian Wright' // this is a string
 let num = 24; // this var is holding a number
 let isTrue = true; // this is a boolean true or false
 let ian = {
     age: 24,
     soccerFan: true,
     lastName: 'Wright'
 }; // this is an object 
 // objects contain key value pairs
 
 
let x; // undefined
let y = ['array', 'array1', 'array2']; // this is an array

null; // null is "nothing". It is supposed to be something that doesn't exist, the data type of null is an object

//typeof 
/* The typeof operator can return one of these primitive types
string
number
boolean
undefined
*/

// 2. Function data type

//syntax

function example(num1, num2) {   // created a function named example.   it holds 2 parameters named num1 and num2
 return num1 + num2;            // it will return num1 plus num2
}


example(4, 5);     // when the function is called the arguments 4, 5 will passed through that function    //4 + 5 will be passed in it.


NaN; // not a number.   the same as the value of Number.NaN, NaN is a non-configurable, non-writable property

//infinity -infinity.    This value behaves slightly differently than mathematical infinity. The value Infinity, is greater than any other number

/* A primitive type has always a value, while non-primitive types can be null
A primitive type starts with a lowercase letter, while non-primitive types starts with an uppercase letter.
Non-primitive types can be used to call methods to perform certain operations, while primitive types cannot.
Primitives are known as being immutable data types because there is no way to change a primitive value once it gets created.
*/

let string = 'This is a string.';
string[1] = 'H'
console.log(string) // 'This is a string.' 
//Primitive are known as being immutable data types because there is no way to change a primitive value once it gets created.


//Non-primitive values are mutable data types. The value of an object can be changed after it gets created.

let number1 = 5;
let number2 = 5;

number1 === number2; // true

let string1 = 'This is a string.';
let string2 = 'This is a string.';

string1 === string2; // true


// 12. Passing by reference relates to objects in Javascript (ALL objects including functions)

// primitive values are passed to a function by refernce and the difference from by reference 
//is you are not passing a copy. 
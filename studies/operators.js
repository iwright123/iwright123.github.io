/**
 * OPERATORS:
 * 0. Assignment operators are used to assign values to JavaScript variables.
 * 1. Arithmetic operators perform arithmetic on numbers (literals or variables).
 * 2. Comparison operators are used in logical statements to determine equality or difference between variables or values
 * 3. Logical operators are used to determine the logic between variables or values
 * 4. Unary operator is one that takes a single operand/argument and performs an operation.
 * 5. Ternary operators allow us to really quickly write shorter **if** statements



*/


// 1. Assignment operators
//The = assignment operator assigns a value to a variable.
let x = 10; // assigned 10 to x 

// The += assignment operator adds a value to a variable.

x += 5; // will add 5


// The -= assignment operator subtracts a value from a variable


x -= 5; // will minus 5


// The *= assignment operator multiplies a variable.


x *= 5; // will multiply 5 


// The /= assignment divides a variable.


x /= 5; // will divide 5


// The %= assignment operator assigns a remainder to a variable.


x %= 5; // will give the remaider of 5

// 2. Arithmetic operators

// A typical arithmetic operation operates on two numbers

// The addition operator (+) adds numbers
let y = 100 + 50; // will return 150


// The subtraction operator (-) subtracts numbers.

let a = 100 - 50; // will give you 50

// The multiplication operator (*) multiplies numbers.

let b = 5 * 5; // will give you 25

// The division operator (/) divides numbers.

let c = 10 / 5; // will divide and give you 2

// The modulus operator (%) returns the division remainder.

let d = 10 % 6; // gives you 4

// The increment operator (++) increments numbers.

y++; // adds 1 each time 

// The decrement operator (--) decrements numbers.

a--; // minus 1 each time

// 3. Comparison Operators

// ==	equal to
// ===	equal value and equal type	
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to

// 4. Logical Operators

// &&	and	  (x < 10 && y > 1) is true	
// ||	or	  (x == 5 || y == 5) is false	
// !	not	  !(x == y) is true

// 5. Unary Operators

//Unary plus (+)	Tries to convert the operand into a number
//*Unary negation (-) *	Tries to convert the operand into a number and negates after
//Logical Not (!)	Converts to boolean value then negates it
//Increment (++)	Adds one to its operand
//Decrement (--)	Decrements by one from its operand
//Bitwise not (~)	Inverts all the bits in the operand and returns a number
//typeof	Returns a string which is the type of the operand
//delete	Deletes specific index of an array or specific property of an object
//void	Discards a return value of an expression.

// 6. Ternary Operators

//a conditional ? true: false
// a much shorter way to write a conditonal with a simple true or false statment

// ian is level 100 cool
// everyone else is level 999
let name = 'ian'
const ternary = name === 'ian' ? 1000 : 999;
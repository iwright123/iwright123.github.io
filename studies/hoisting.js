/* HOISTING: 
0. Hoisting is a mechanism where variables and function declarations are moved to the top of their scope before code execution.
1. Functions declarations are hoisted. Function declarations are moved to the top of their scope before code execution
2. It allows for execution of arbitrary JavaScript code line by line. Execution is completely isolated from the main JavaScript environment. Multiple instances of the JS-Interpreter 
allow for multi-threaded concurrent JavaScript without the use of Web Workers.








How are variables hoisted in JavaScript?
How are function declarations hoisted? How are function expressions hoisted?
What is the JS Interpreter 
*/


// 1. Var Hoisting

console.log(hoist); // undefined 

var hoist = 'The variable has been hoisted.';


console.log(ian); // undefined

var ian = 'Ian Wright'; 

// 2. Function Hoisting

func();


function func() {
    
}


add(1, 3); // will return 4


function add(num1, num2) {
    return num1 + num2;
}


console.log(ianW); // does not hoist

let ianW = 'Ian Wright';


console.log(milo); // does not hoist

const milo = 'my dog';
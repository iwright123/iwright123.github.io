/* SCOPING:
0. Scoping is determining where variables, functions, and objects are accessible in your code during runtime.
1. The different scopes are, GLobal, Local and Block scopes.
2. Var is global scoped, it can be called anywhere in the code as it is also local scoped which it can be used just inside its 'function'. Let and const are block scoped which 
means its ran in the area within if, switch conditions or for and while loops. Whenever you see {curly brackets}, it is a block
3. If you are in a function body you will access the local scope and that will run the parameter, if you run it global it would be the variable. That is because 
if its ran local or inside the function it will run local, if you are outside it win run global. 







What is scoping?
What are the different scopes in JavaScript?
What variables are bound to those scopes?
There is a variable in the global scope and a parameter with the same name, if you are within the function body which would you access? If you were in the global scope which would you access? Why?
*/

// 1. Local and Global Scope

var scope = "global";         // Declare a global variable
function checkscope(  ) {
    var scope = "local";      // Declare a local variable with the same name
    document.write(scope);    // Use the local variable, not the global one
}
checkscope(  );               // Prints "local"

// 2. Block Scope

let x = 1;
{
  let x = 2;
}
console.log(x); // logs 1, block scope

const c = 1;
{
  const c = 2;
}
console.log(c); // logs 1, block scope with const
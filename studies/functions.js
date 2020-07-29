/** FUNCTION:
 * 0. function is a block of code designed to perform a particular task, function is executed when something calls it.
 * 1. function is defined with the function keyword, followed by a name, followed by parentheses ().
 * 2. function names can contain letters, digits, underscores, and dollar signs, same as variables.
 */
 
 
// 1.The two phases: First we must create a function. Next we can execute

function example() {
 
}

// 2. the differnce of the parameters are that they are just place holders.
// an arguement is what gets passed and ran in the functions that the paramters hold.

// 3. Syntax

function name() {
  
}

// 4. we assign a function to a variable like

let functionName = function() {
 
};


// 5. We specify inputs to a function by the parameters, and we can specify what the function outputs with the arguments 
//input: what datatype is being passed into this function?
//output: what should this function return
//functions accepts inputs, processes the inputs and returns a new data value

// 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is not true

// 7. Closures: Functions form closures around the data they house. If an object returned from the Function 
// and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures.
/*
 * Control Flow :
 * 0. The control flow is the order in which the computer executes statements in a script.
 Code is run in order from the first line in the file to the last line, unless the computer runs across the (extremely frequent) 
 structures that change the control flow, such as conditionals and loops. 
 *1. To create a control flow we can use an if statement.
 *2. There are a few ways an if statement can work
 */
 
 // 1. Creating an if statement
 
 if (1 === 1) {
     console.log(true); // will print true if the first condition is true
 }
 
 // 2. Else if statment will run if the above if is not true
 
 else if (1 === 2) { // will have another statment 
     console.log(false); // will print out false if the above condition is not true
     
 }
 
 // Else statment will run if everything above is false
 // does not need any statment
 
 else {
     console.log('math'); // would print out math if everything else if false
 }
 
 
 // 3. Switch statement
 
 /*
The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed
*/



function caseInSwitch(val) {
  let answer = "";
  
  switch (val) {
    case 1:
      return "alpha";
     // break;
    case 2:
      return "beta";
     // break;
    case 3:
      return "gamma";
     // break;
    case 4:
      return "delta";
     // break;
  }

 
  return answer;
}
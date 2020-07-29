/** LOOPS:
 * 0. for - loops through a block of code a number of times
 * 1. for/in - loops through the properties of an object
 * 2. while - loops through a block of code while a specified condition is true
*/
 
 // 1. For loop
 
 let arr = [];
 
 for (let i = 0; i <= 10; i++) { 
  console.log(arr[i]);      // loops over an array forward
 }
 
 
 let arr2 = [];
 
 for (let x = arr2.length - 1; x >= 0; x--) {
     console.log(arr2[x]);    // loops over an array backwards
 }
 
 
 // while loop will loop until 0 is greater than 10
 
// let y = 1;
 //while (y < 10) {
 // console.log(y);
// }
 
 let obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
 };
 
 for (let key in obj) {
  console.log(key);         //will print the keys
  console.log(obj[key]);    //will print the values
 }
 
 
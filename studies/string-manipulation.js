/** String Manipulation 
 * 0. The String() function converts the value of an object to a string. Strings are useful for holding data that can be represented in text form.
 * 
 * 1. Adds the given expression to the scope chain used when evaluating the statement. The parentheses around the expression are required.
 * 
*/



// the indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string

let str1 = "Please locate where 'locate' occurs!";
let pos1 = str1.indexOf("locate");

// the lastIndexOf() method returns the index of the last occurrence of a specified text in a string

let str2 = "Please locate where 'locate' occurs!";
let pos2 = str2.lastIndexOf("locate");

// both indexOf(), and lastIndexOf() return -1 if the text is not found

// the search() method searches a string for a specified value and returns the position of the match

let str3 = "Please locate where 'locate' occurs!";
let pos3 = str3.search("locate");


// slice() extracts a part of a string and returns the extracted part in a new string. the method takes 2 parameters: the start position, and the end position (end not included)

let str4 = "Apple, Banana, Kiwi";
let res1 = str4.slice(7, 13);

// substring() cannot accept negative 

let str5 = "Apple, Banana, Kiwi";
let res2 = str5.substring(7, 13);


// the replace() method replaces a specified value with another value in a 

let str = "Please visit Microsoft!";
let n = str.replace("Microsoft", "W3Schools");


// a string is converted to upper case with toUpperCase

let text1 = "Hello World!";       // String
let text2 = text1.toUpperCase();  // text2 is text1 converted to upper


// a string is converted to lower case with toLowerCase

let text3 = "Hello World!";       // String
let text4 = text3.toLowerCase();  // text2 is text1 converted to lower

// concat() joins two or more strings. The concat() method can be used instead of the plus operator

let text5 = "Hello";
let text6 = "World";
let text7 = text5.concat(" ", text6);

// a string can be converted to an array with the split()

let txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe


// 2. With operators

const hello = "Hello ";
const bob = "Bob!";
const res = hello + bob; // Hello Bob!


const hi = "Hi";
const ian = "Ian!";
const plus = `${hi} ${ian}`; // Hello Ian!

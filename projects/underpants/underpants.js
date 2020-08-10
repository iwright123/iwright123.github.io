// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

// takes in any value and return its value unchanged

_.identity = function(value) {
    // return value unchanged
    return value;
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {

   if(Array.isArray(value)) return 'array';
//set conditional statement to test if value is null
  if(value === null) return 'null';
//set conditional statement to test if value is an object
  if(typeof value === 'object') return 'object';
//set conditional statement to test if value is a number
  if(typeof value === 'number') return 'number';
//set conditional statement to test if value is a string
  if(typeof value === 'string') return 'string';
//set conditional statement to test if value is a boolean
  if(typeof value === 'boolean') return 'boolean';
//set conditional statment to test if value is a function
  if(typeof value === 'function') return 'function';
//set conditional statment to test if value is undefined
 if(typeof value === 'undefined') return 'undefined';
};
/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number){
    let result = [];
    //if the array is not an array return epmty array
    if (Array.isArray(array) === false){
        return [];
    }
    //if number is not given retun the first element in the array
     if (number === undefined || NaN ){
        return array[0];
    }//loop through array 
    for (let i = 0; i < number; i++){
        result.push(array[i]);
    }
    //if
     if (number > array.length){
        return array;
    }
    return result;

};
/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) {
    let result = [];
    //if the array is not an array return epmty array
    if (Array.isArray(array) === false){
        return [];
    }
    //if number is not given retun the last element in the array
     if (number === undefined || NaN ){
        return array[array.length - 1];
     } // loop the array backawrds, and add it to the results array
       for (let i = array.length - 1; i > 0; i--){
         result.unshift(array[i]);
         // if 0 is less than number return empty array
         if(number < 0){
             return [];
         }
    } // if number is greater than arrays length return array
     if (number > array.length){
        return array;
     }
    return result;

};


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    if(array.includes(value)) {
        //first screen to see if the array has the value from parameter in it
        for(let i = 0; i < array.length; i++){
            if(array[i] === value){
                //if the value from the array === value from parameter then we are returning that value
                return i;
            }
        }
    } else {
        return -1;
        // or else we are returning -1
    }
  
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
    // will return true if array contains the value , or false if it does not contain value
  return array.includes(value) ? true : false;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            func(collection[key], key, collection);
        }
    }

};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/


 _.unique = function(array){
  //create empty array 
     let newArray = [];
 //loop though given parameter array
     for(let i = 0; i < array.length; i++){
//if newArray does not include any elements in current array, 
       if(_.indexOf(newArray, array[i]) === -1){
        //push into newArray   
             newArray.push(array[i]);
       }
     }
 //return newArray that holds no duplicate    
    return newArray; 
 };

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, action){
    //create empty array
    let filterArray = [];
    //loop thorugh array
    for(let i = 0; i < array.length; i++){
     let result = action(array[i],i,array);
 if(result)
     //push filterArray values into array
     filterArray.push(array[i]);
     //return the filterArray
 }return filterArray;
 };
 
 
/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, action) {
    // filter array will loop array . push results into empty array if it is true 
    return _.filter(array,function(elements,i, array) {
        // returns a function that returns falsy 
        return !action(elements,i,array);
    });
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array,action){
    // filter function is used on array as well reject function is used
    // filter will filter out the array, loop it, push the results in a new array
    // reject filter will return falsy returns
            return [_.filter(array,action),_.reject(array,action),];
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, action){

// created a new varable 
let result = [];
// if collection is an array loop that array
    if(Array.isArray(collection)){
    for(let i = 0; i < collection.length; i++){
        // push the results of each element that the function ran on
       result.push(action(collection[i],i,collection));
    }
    }
    else { // if collection is an object loop the object with a for in loop
         for(let key in collection) {
             // push the results of the function being called on each element into new array
            result.push(action(collection[key],key,collection));
    }
    // return results
    } return result;
};
/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, prop) {
    // create array that will hold value
 let arr = [];
 //map will loop over the array and call a function on each element in the array
 _.map(array, function(elements, i, array) {
     // push the property of the array into new array
     arr.push(array[i][prop]);
 });
  return arr;
};
/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, action) {
   // create a var to return true or false
let results = true;
 //if action does not exist then iterate over collection
 if (!action) {
     for (let i = 0; i < collection.length; i++) {
      //  console.log(collection[i]);
   //if the item in the collection at this index is falsey, results equals false
       if (!collection[i]) {
             results = false;
        }
     }
} else {
     // iterate over the collection and call action over every element 
    let array = _.map(collection, function(element, i, collection){
     //call the predicate 
     return   action(element, i, collection);
    });
   // console.log(collection, array);
   //for each element in the array, if any of them are false, return false
    _.each(array, function(element, i, collection){
        if (element === false) {
            results = false;
        }
    });
 }
 // return the var
return results;
};
/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection,testF){// Create function expression with collection and testF(for function)as parameters
    if (typeof collection === "object"){// if collection is an object 
        for(let key in collection){// using for in loop to acess keys in collection 
            if(testF){// If statement for function 
                if(testF(collection[key],key, collection) ? true:false){// if value of calling function is true for all elements 
                    return true;//return true 
                }
            }else{//Otherwise, 
                if(collection[key] ? true:false){// if value of calling function is true for at least one element
                    return true;//return true 
                }
            }
        }
        return false;//return false 
    }
    else{// If collection is an array
        for(let i = 0; i<= collection.length - 1; i++){// use a for loop to access elements in array 
            if(testF){// If statement 
                if(testF(collection[i],i, collection) ? true:false){// If value is true for all elements 
                    return true;//return true 
                }
            }else{//Otherwise, 
                if(collection[i] ? true:false){//if value is true for one element 
                    return true;//return true 
                }
            }
        }
        return false;//return false 
    }
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array,func,seed){// Create function expression with array,function,and seed as parameters. 
    var prev = typeof seed === "number" ? func(seed,array[0],0):array[0];// create variable assigned to seed as a number,at 0th index 
    for(let i = 1; i <= array.length - 1; i++){// for loop to access entire array 
        prev = func(prev, array[i], i);//re-assign variable precvious to function call 
    }
    return prev;//return previous 
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(a,...more){// Create a function expression with parameters, 
    for(let i = 0; i<= more.length -1; i++){// Using for loop to loop over entire object 
        for(var key in more[i]){// using for in loop to access the keys inside the object 
            a[key] = more[i][key]; //assigning values to one another 
        }
    }
    return a;// return the updated object 1 
};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}

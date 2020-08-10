// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-iwright");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 * make sure you are in github.io folder in the terminal before running this command
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
   // I: an array of customer objetcs(from customer.json page) *Everything is a string
   // O: {Number} amount of male customers in the array
   // C: I need to use the _.filter function created in lodown
   
   return _.filter(array, function(customerObj){
       // filter 'out' male customer
       return customerObj.gender === 'male';
   }).length; 
};

var femaleCount = function(array) {
    // I: an array of customers object(from customers.json page) *Everything is a string
    // O: {Number} amount of female customers
    // C: must use reduce 
    // If the first element of the array is not the same datatype as my expected output I need seed
   return  _.reduce(array, function(counter, custObj) {
        if(custObj.gender === 'female') {
            counter++;
        }
        return counter;
    }, 0);
};

var oldestCustomer = function(array) {
    // I: an array of customers object
    // 0: {String} of oldest customers name
    // C: will use pluck and filter
  let maxAge = Math.max(..._.pluck(array,"age"));
    const oldest = _.filter(array,function(e, i, a) {
      return e.age === maxAge;
    });
  return oldest[0].name;
};


var youngestCustomer = function(array) {
    // I: an array of customers object
    // O: {string} of the youngest customers name
    //C: will use filter and pluck
    
    let minAge = Math.min(..._.pluck(array, 'age'));
    const youngest = _.filter(array, function(e, i, a){
    return e.age === minAge;
    });
    return youngest[0].name;
};


var averageBalance = function(array) {
    //I: an array of customers object
    //O: {number} of avaerage balace of all customers balance
    //C: will use reduce 

let balances = [];
  _.each(array, function(element) {
    balances.push(parseFloat(element.balance.replace('$','').replace(',','')));
    console.log(balances);
});
let totalBalance = _.reduce(balances, function(total, nextNum) {
    return total + nextNum;
});
return totalBalance / array.length;

    
};




var firstLetterCount = function(array, letter) {
//I: an array of customer objects and letter of names
//O: {number} of how many first letter is counted in names
//C: reduce

  return  _.reduce(array, function(custObj, counter) {
        if(counter.name[0].toUpperCase() === letter.toUpperCase()) {
            custObj++;
        }
        return custObj;
    }, 0);
    
    
};
var friendFirstLetterCount = function(array, customer, letter) {
//I: an array of customer objects and letter of names of customers
//O: {number} of how many first letter is counted in names
//C: reduce

return _.reduce(array, function(custobj, counter) {
    let csu = _.filter(array,person => person.name === customer)[0];
        return firstLetterCount(csu.friends, letter);
}, 0);

};

var friendsCount = function(array, name) {
    //I: an array of customers object
    //O: an array of customers name and friends list
    //C: 
    
      let ar = [];
    for (let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].friends.length; j++){
            if (array[i].friends[j].name === name){
                ar.push(array[i].name);
        }
        }
   } return ar;
};


var topThreeTags = function(array) {
      
      let tagArray = [];
      
      
      tagArray = _.pluck(array, 'tags');
      
      
      let tagCount = _.reduce(tagArray, function(tagObj, tag) {
          if (tagObj[tag]) {
              tagObj[tag]++;
          } else {
              tagObj[tag] = 1;
          }
          
          return tagObj;
      }, {});
      
      
      let countsArray = [];
      
      for (let key in tagCount) {
          countsArray.push([key, tagCount[key]]);
      }
      
      countsArray.sort(function(a, b) {
          return b[1] - a[1];
      });
      
      let topThreeArray = countsArray.slice(0, 3);
      
      let topThreeWords = _.map(topThreeArray, function(arr) {
          return arr[0];
      });
      
      return topThreeWords;
};

var genderCount = function(array) { 
    
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;

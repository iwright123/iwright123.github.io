//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // returns object values
   return Object.values(object); 
   
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // return object keys and joins them
    return Object.keys(object).join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
let myArray = [];
let valuesArray = [];

valuesArray = Object.values(object);
//loops the objects values
for (let i = 0; i < valuesArray.length; i++) {
    // if the value of the array is a string push it into the myArray  
    if (typeof valuesArray[i] === 'string') {
        myArray.push(valuesArray[i]);
    }
}
// returns myArray joined into string
return myArray.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
  // if typeof collection is equal to 'object' and null return null
if (typeof(collection) === 'object') {
    if(collection === null) {
        return null;
        // else if the collection is an array it will return array
    } else if (Array.isArray(collection) === true) {
        return 'array';
        // if its not null or an array it will return object
    } else {
        return 'object';
    }
}

}
// }
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //caps the first letter in the string
return string.substring(0, 1).toUpperCase() + string.substring(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // lowercases all the string
    let splitStr = string.toLowerCase().split(' ');
    // will loop the string
   for (let i = 0; i < splitStr.length; i++) {
       // caps all first letters in the string
     splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
  
   return splitStr.join(' '); 

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // returns welcome object name first character uppercased
return 'Welcome ' + object.name.charAt(0).toUpperCase() + object.name.slice(1) + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // returns object name with the first letter uppercased and object species first letter uppercased
return object.name.charAt(0).toUpperCase() + object.name.slice(1) + ' is a ' + object.species.charAt(0).toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

    if(object.noises === undefined || object.noises.length === 0){
// if object's noises is undefined or has no values, 
    return 'there are no noises'; // return, 'there are no noises'
} else {
    return object.noises.join(' '); // otherwise return noises (as a string
    
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
// if the string includes word it will return true
if (string.includes(word)){
      return true;
    } else {
        // if the string does not inculde word it will return false
        return false;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
// will add friends to object
object.friends.push(name);

return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
// take a name and object and return if name is a friend of object
if(Array.isArray(object.friends) && object.hasOwnProperty("friends")) {
    for(var i = 0; i < object.friends.length; i++) {
        //if name is equal to friends in the object it will return true
        //if its not equal it will return false
      if(name === object.friends[i]) {
        return true;  
      }
    }    
  }  
 return false;   
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
// takes a name and a list of people and returns the list of all names
    let nameList = [];
    let result = [];
    let current = null;
    for(let i = 0; i < array.length; i++){
        if(name === array[i].name){
            current = array[i];
        }else{
            nameList.push(array[i].name);
        }
    }

    if(current === null){
        return nameList;
    }

    for(let i = 0; i < nameList.length; i++){
        if(current.friends.indexOf(nameList[i]) == -1){
            result.push(nameList[i]);
        }
    }

    return result;


}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //created a new key property and gave it a new value
    object[key] = value;
    return object;
}
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//run a for loop to loop array
for (let i = 0; i < array.length; i++) {
    //for in loop will loop in object 
    for(let key in object) {
        //if the loop finds an array in the object it will delete it
        if (key === array[i]) {
            delete object[key];
        }
    }
}

}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
// uniqueChars will equal unique numbers in the array
let uniqueChars = [...new Set(array)];
return uniqueChars;


}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
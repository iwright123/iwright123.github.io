/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create empty animals object
var animal = {
    
};
// addded species by dot notation
//added an empty array to nosies using dot notation
// added name to assigned it Milo using bracket notation
animal.species = 'Dog';
animal['name'] = 'Milo';
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
//adds Bark to the 0 index of the noises array
noises[0] = 'Bark';
//adds Ruff to noises using dot notation
noises.push('Ruff');
//adds GRR to the noises array using dot notation 
noises.unshift('GRR');
//adds snoring to the 1 index of the noises array
noises[1] = 'snoring';


console.log(noises.length);
console.log(noises.length - 1);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// adds the new noises array to the animal object
animal['noises'] = noises;

animal.noises[noises.length] = 'rurrrr';
console.log(animal);
animal.noises[noises.length] = 'wooooo';
console.log(animal);



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *dot notation and bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 *you can use bracket notation and .length method
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
//pushed the animal object to the animals array
animals.push(animal);
console.log(animals);

// created an object with name , species and noises keys 
var duck = {
    name: 'Jerome',
    species: 'Duck',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};

// pushes duck into the animals array
animals.push(duck);

console.log(animals);

// created an object with name , species and noises keys
var tiger = {
    name: 'Paul',
    species: 'Tiger',
    noises: ['grawl', 'hiss', 'purr']
};


// created an object with name , species and noises keys
var frog = {
    name: 'Fred',
    species: 'Frog',
    noises: ['ribbit', 'chrip']
};
//pushes tiger and fron into the animals array
animals.push(tiger, frog);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


//using an array to collect the strings
var friends = [];

//cretaed a function that will return a random index of the animals array
function getRandom (animals) {
  
return Math.floor(Math.random() * animals.length);

    
}
// the for loop will loop the animals array
for (let i = 0; i < animals.length; i++) {
    // this will push a random index from the animals array into the friends array
    friends.push(animals[getRandom(animals)]['name']);
}
// this will add a friends property to the animals array
animals[1]['friends'] = friends;







/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
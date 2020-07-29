/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, string) {
 
 // will loop the animals array
 for (let i = 0; i < animals.length; i++){
  //if animals name is equal to the string it will return the name
  if(animals[i].name.toLowerCase() === string.toLowerCase()) {
      return animals[i];
 }
}

// this will also loop and search the array
for (let i = 0; i < animals.length; i++) {
 // this if statment will return null if the name does not match the string 
 if(animals[i].name.toLowerCase() !== string.toLowerCase()) {
  return null;
 }
}


}
search();
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
 
 for (let i = 0; i < animals.length; i++){
  // if aniamls name is equal to name, the animals name will replace the object 
  if(animals[i].name.toLowerCase() == name.toLowerCase()) {
     animals[i] = replacement;
 }
}
 
}



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
 // again this loop will loop the animals array
 for (let i = 0; i < animals.length; i++){
  // if the animals name exists it will remove it
  if(animals[i].name.toLowerCase() == name.toLowerCase()) {
       animals.splice(0, i - 1).concat(animals.splice(i, animals.length - i));
  }
}

}

remove();
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
 //if the animals name, and species names lenght are greater than 0.  
 if (animal.name.length > 0 && animal.species.length > 0) {
  //runs another for loop in the animals array
           for (let i = 0; i <= animals.length -1; i++) {
                if (animal.name == animals[i].name) {
                  // if the animals name is equal to name(should be unique)it will remove it
                    return undefined;
                } //if the names arent the same it will push it into the array
           } animals.push(animal);
 }
 
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}

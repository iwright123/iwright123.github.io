// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {

// will return an object with the keys being id,firstname,lastname 
// the values will be the id,first name and last name
 return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
};

    
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    let contacts = [];
    //create a variable cobtacts and assign it to an empty array
    
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
            //returns the contacts array length
        },
        addContact: function(contact) {
            return contacts.push(contact);
            //returns the contacts pushed into the contacts array
        },
        
        findContact: function(fullName) {
            //this for loop will run the contacts length
            for(let i = 0; i < contacts.length; i++) {
                //if the full name is equal the contacts index and the first and last name it will return the contacts array
                 if(fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]) {
                    return contacts[i];
                } else {
                    // if the name does not match it will return undefined
                    return undefined;
                }
            }
        },
        
        removeContact: function(contact) {
            //created a loop that will loop the the conctacts
            for(let i = 0; i < contacts.length; i++) {
                //if the contacts index is equal to the contact it will return the .splice method
                if(contacts[i] === contact) {
                    //will remove the index of 1 in the array
                    return contacts.splice(i, 1);
                }
            }
        }, 
        
        printAllContactNames: function() {
            let contactNames = '';
            // create a varible and assign it to an empty string
            for(let i = 0; i < contacts.length; i++) {
                // contactNames will add the contacts first name and last name togetther with a break at the end
                contactNames += contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n';
            }
            
        //will return the contacts name 
            return contactNames.slice(0, contactNames.length - 1);
        }
        
   
      
       
};


}



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}

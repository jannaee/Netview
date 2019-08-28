import data from '/data/en_US.json'

console.table(data.heading)

// const idb = require('/idb')
// const eng_data = require("../data/en_US.json")
// const openRequest = indexedDB.open('testData', 1);


// // success (database is ready and database object exist in openRequest.result)
// openRequest.onsuccess = function() {
//   let db = openRequest.result;
//   // continue to work with database using db object
//  db.onversionchange = function() {
//     db.close();
//     console.log("Out of Date Database")
//     //this will trigger a parallel update in the case a user
//     //has two browsers open at the same time with differnt versions
//   };

// };


// // error (opening of database fail)
// openRequest.onerror = function() {
//   console.error("Error", openRequest.error);
// };

// // upgradeneeded (database is ready but version is old)
// openRequest.onupgradeneeded = function() {
//   // triggers if the client had no database
//   // ...perform initialization...
// };


// openRequest.onblocked = function() {
//   //if another connection is still open and the db.close doesn't work or isn't used this will closed
// };



// // Now create and object store
// // Neat things primitive data types can be stored
// // Note: there needs to be a unique key for every value in the store and this option is asyncrhounous so no
// //await is needed

// // db.createObjectStore('netflixoriginals', {keyPath, keyOptions});






















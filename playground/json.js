// var obj = {
//   Author: 'Stovo'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(stringObj);
// console.log('================');
// console.log('obj: ', typeof object, ' vs ', 'stringObj: ', typeof stringObj);
//
// console.log('================');
//
// var personString = '{"Author": "Stovo", "Book": "Harry Potter"}';
// var person = JSON.parse(personString); // turn json string to object.
// console.log(person);
// console.log('================');
// console.log('person: ', typeof person, ' vs ', 'personString: ', typeof personString);

/* write json and read json file */
const fs = require('fs');

var originalNote = {
  title: '#1',
  body: 'this is default text.'
};

var originalNoteString = JSON.stringify(originalNote);

// write
fs.writeFileSync('note.json', originalNoteString);

// read
var noteString = fs.readFileSync('note.json');
var note = JSON.parse(noteString);
console.log(note.title, note.body);

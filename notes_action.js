const fs = require('fs');

/* reuse function for fetchNotes */
var fetchNotes = () => {
  // read file first for catch error, then write to file.
  try {
    var note_data_string = fs.readFileSync('notes-data.json');
    return notes = JSON.parse(note_data_string);
  } catch (e) {
    return [];
  }
}

/* reuse function for writeNotes */
var writeNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

/* main function to add new note */
var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title: title,
    body: body
  };

  // check if title duplicated
  var duplicateNote = notes.filter((note) => note.title === title);

  if (duplicateNote.length === 0) {
    notes.push(note);
    writeNotes(notes);
    return note;
    // console.log for status should write outside the main function.
  } else {

  }
};

/* main function to get all notes */
var getAll = () => fetchNotes();

/* main function to get specific note */
var getNote = (title) => {
  var notes = fetchNotes();
  var note = notes.filter((note) => note.title === title);
  debugger;
  return note[0];
};

/* main function to remove specific notes */
var removeNote = (title) => {
  var notes = fetchNotes();
  var notesLeft = notes.filter((note) => note.title !== title);
  var noteRemoved = notes.filter((note) => note.title === title);

  if (noteRemoved.length !== 0) {
    writeNotes(notesLeft);
    return noteRemoved[0];
  } else {

  }
};

module.exports = {
  addNote: addNote,
  getAll: getAll,
  getNote: getNote,
  removeNote: removeNote
};

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')
const notes = require('./notes_action.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const yargs_argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read one specific note', {
    title: titleOptions
  })
  .command('remove', 'Remove one specific note', {
    title: titleOptions
  })
  .help()
  .argv;

var command = yargs_argv._[0];
// console.log('Command: ', yargs_argv._[0]);
// console.log('========== detail ===========');
// console.log('Process: ', process.argv);
// console.log('========== vs ===========');
// console.log('Yargs: ', yargs_argv);

if (command === 'add') {
  var note = notes.addNote(yargs_argv.title, yargs_argv.body);
  console.log(_.isNil(note) ? 'Your title is duplicate!' : `New note created: ${note.title} -- ${note.body}`);

} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Getting all your ${allNotes.length} notes...`);
  console.log('--');
  allNotes.forEach((note) => console.log(`${note.title} - ${note.body}`));

} else if (command === 'read') {
  var note = notes.getNote(yargs_argv.title);
  console.log(_.isNil(note) ? 'This note title is actually not exist!' : `This is the note: ${note.title} -- ${note.body}`);

} else if (command === 'remove') {
  var note = notes.removeNote(yargs_argv.title);
  console.log(_.isNil(note) ? 'This note title is actually not exist!' : `Note ${note.title} has been removed.`);

} else {
  console.log('Command not found.');

}

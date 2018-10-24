import React from 'react';
import uuid from 'uuid';

const notes = [
  {
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Do laundry'
  },
  {
    id: uuid.v4(),
    task: 'Learning Testing'
  }
];
console.log(notes);
export default() => (
  <ul>
    {notes.map(note => <li key={note.id}>{note.task}</li>)}
  </ul>
)
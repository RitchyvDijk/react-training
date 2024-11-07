import './App.css';
import NotesList from './Components/Notes/NotesList';
import NoteInput from './Components/Notes/NoteInput';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  }

  return (
    <div className="App">
      <NoteInput addNote={addNote} />
      <NotesList notes={notes} />
    </div>
  );
}

export default App;

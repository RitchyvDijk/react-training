import './App.css';
import NotesList from './Components/Notes/NotesList';
import NoteInput from './Components/Notes/NoteInput';
import { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage when the component mounts
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []); // This effect only runs once, not on every render

  // Save notes to localStorage whenever they change
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]); // This effect runs whenever 'notes' change

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div className="App">
      <h1>Notes - {notes.length}</h1>
      <NoteInput addNote={addNote} />
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
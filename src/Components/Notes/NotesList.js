import NoteInput from "./NoteInput";
import NoteItem from "./NoteItem";
import { useEffect, useState } from "react";
import NoteNew from "./NoteNew";

export default function NotesList() {
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
    <>
      <NoteNew />
      <div style={{display: 'none'}}>
      <NoteInput addNote={addNote} />
      <div className="notes-container">
        {notes.map((note, i) => <NoteItem key={i} note={note} />) ??
          "Loading..."}
      </div>
      </div>
    </>
  );
}

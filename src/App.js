import './App.css';
import NotesList from './Components/Notes/NotesList';
import NoteInput from './Components/Notes/NoteInput';
import { useState } from 'react';

function App() {
  // const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  }

  // const addTask = (taskTitle) => {
  //   const newTask = {
  //     id: Date.now(),
  //     title: taskTitle,
  //     isCompleted: false,
  //   };
  //   setTasks([...tasks, newTask]);
  // }

  // const toggleComplete = (taskId) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
  //     )
  //   );
  // };

  // const deleteTask = (taskId) => {
  //   setTasks(tasks.filter((task) => task.id !== taskId));
  // };

  return (
    <div className="App">
      <NoteInput addNote={addNote} />
      <NotesList notes={notes} />
    </div>
  );
}

export default App;

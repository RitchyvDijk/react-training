import { useState } from "react";
import InputField from "./InputField";

export default function TaskInput({ addTask }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim()) {
            addTask(inputValue);
            setInputValue("");
        }
    }

    return (
      <form onSubmit={handleSubmit}>
        <InputField label="Add new task" type="text" value={inputValue} placeholder="Add new task" onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Add task</button>
      </form>
    );
  }
  
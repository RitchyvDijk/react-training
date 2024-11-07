import { useState } from "react";
import InputField from "../InputField";
import SelectBox from "./SelectBox";

export default function NoteInput({ addNote }) {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [colorValue, setColorValue] = useState("#ffffff");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleValue.trim() && contentValue.trim()) {
      const note = {
        id: Date.now(),
        title: titleValue,
        content: contentValue,
        color: colorValue,
      };
      addNote(note);

      setTitleValue("");
      setContentValue("");
      setColorValue("#ffffff");
    }
  };

  const options = [
    {
      value: "#ffffff",
      name: "White",
    },
    {
      value: "#ff0000",
      name: "Red",
    },
    {
      value: "#00ff00",
      name: "Green",
    },
    {
      value: "#0000ff",
      name: "Blue",
    },
    {
      value: "#000000",
      name: "Black",
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Title"
        type="text"
        value={titleValue}
        placeholder="Note title"
        onChange={(e) => setTitleValue(e.target.value)}
      />
      <InputField
        label="Content"
        type="text"
        value={contentValue}
        placeholder="Note"
        onChange={(e) => setContentValue(e.target.value)}
      />
      <SelectBox 
        name="color-select"
        label="Color"
        onChange={(e) => setColorValue(e.target.value)} 
        options={options} 
      />
      <button type="submit">Add</button>
    </form>
  );
}

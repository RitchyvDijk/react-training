import { useState } from "react";
import InputField from "../InputField";
import SelectBox from "./SelectBox";

export default function NoteInput({ addNote }) {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [colorValue, setColorValue] = useState("#202124");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleValue.trim() && contentValue.trim()) {
      const note = {
        id: Date.now(),
        title: titleValue,
        content: contentValue,
        color: colorValue,
        date: Date.now(),
      };
      addNote(note);

      setTitleValue("");
      setContentValue("");
      setColorValue("#202124");
    }
  };

  const options = [
		{
      value: "#202124",
      name: "Standard",
			default: true,
    },
    {
      value: "#77172E",
      name: "Coral",
			default: false,
    },
    {
      value: "#692C18",
      name: "Peach",
			default: false,
    },
    {
      value: "#7D4A03",
      name: "Sand",
			default: false,
    },
    {
      value: "#232427",
      name: "Chalk",
			default: false,
    },
  ];

  return (
    <>
    <form onSubmit={handleSubmit}>
      <InputField
        label="Title"
        id="title"
        type="text"
        value={titleValue}
        placeholder="Note title"
        onChange={(e) => setTitleValue(e.target.value)}
      />
      <InputField
        label="Content"
        id="title"
        type="text"
        value={contentValue}
        placeholder="Note"
        onChange={(e) => setContentValue(e.target.value)}
      />
      <SelectBox
        name="color-select"
        id="color"
        label="Color"
        onChange={(e) => setColorValue(e.target.value)}
        options={options}
      />
      <button type="submit">Add</button>
    </form>
    </>
  );
}

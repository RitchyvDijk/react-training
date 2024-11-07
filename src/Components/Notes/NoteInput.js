import { useState } from "react";
import InputField from "../InputField";

export default function NoteInput({ addNote }) {
  const [
		titleValue, setTitleValue,
	] = useState("");
	const [
		contentValue, setContentValue,
	] = useState("");
	const [
		colorValue, setColorValue,
	] = useState("#ffffff")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleValue.trim() && contentValue.trim()) {

			const note = {
				id: Date.now(),
				title: titleValue,
				content: contentValue,
				color: colorValue
			};
      addNote(note);

      setTitleValue("");
			setContentValue("");
			setColorValue("#ffffff");
    }
  };

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
      <InputField
        label="Color"
        type="color"
        value={colorValue}
        placeholder="Color"
        onChange={(e) => setColorValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

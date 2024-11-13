import { useEffect, useRef, useState } from "react";

export default function NoteNew({ addNote }) {
  const [isActive, setIsActive] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [noteTitle, setNoteTitle] = useState("");

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const saveBtn = useRef(null);

  const handleNoteClick = (e) => {
    if (
      input1Ref.current &&
      !input1Ref.current.contains(e.target) &&
      input2Ref.current &&
      !input2Ref.current.contains(e.target) &&
      saveBtn.current &&
      !saveBtn.current.contains(e.target)
    ) {
      if (noteTitle.trim() && noteText.trim()) {
        const note = {
          id: Date.now(),
          title: noteTitle,
          content: noteText,
          date: Date.now(),
        };

        addNote(note);
        setIsActive(false);
        setNoteText("");
        setNoteTitle("");
      } else {
        setIsActive(false);
      }
    } else {
      setIsActive(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleNoteClick);
    return () => {
      document.removeEventListener("click", handleNoteClick);
    };
  });

  return (
    <>
      <div className={`new-note-container ${isActive ? "active" : ""}`}>
        <div style={{ display: isActive ? "" : "none" }}>
          <input
            type="text"
            ref={input2Ref}
            placeholder="Title"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            ref={input1Ref}
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            id="input"
            placeholder="Take a note..."
          />
        </div>
        <div
          className="note-toolbar"
          style={{ display: isActive ? "" : "none" }}
        >
          <button ref={saveBtn} onClick={handleNoteClick}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}

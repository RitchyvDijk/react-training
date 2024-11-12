import { useEffect, useState } from "react";

export default function NoteNew() {
  const [isActive, setIsActive] = useState(false);

  const handleNoteClick = (e) => {
    e.target.classList.add("active");
		setIsActive(true);
    e.target.removeEventListener("click", handleNoteClick);
  };

  useEffect(() => {
    const input = document.getElementById("input");

    if (input) {
      input.addEventListener("click", handleNoteClick);
    }

    return () => {
      if (input) {
        input.removeEventListener("click", handleNoteClick);
      }
    };
  }, []);

  return (
    <>
      <div className="new-note-container">
        <div>
          <input type="text" placeholder="Title" />
        </div>
        <div>
          <input type="text" id="input" placeholder="Take a note..." className={isActive ? 'active' : ''}/>
        </div>
        <div></div>
      </div>
    </>
  );
}

import NoteItem from "./NoteItem"

export default function NotesList({notes}) {

    return (
        <div className="notes-container">
            {notes.map((note, i) => <NoteItem key={i} note={note} /> ) ?? "Loading..."}
        </div>
    )
}
import NoteItem from "./NoteItem"

export default function NotesList({notes}) {
    return (
        <div>
            {notes.map((note, i) => <NoteItem key={i} note={note} /> )}
        </div>
    )
}
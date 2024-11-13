export default function NoteItem({note}) {


    return (
        <div className="note-card">
            <h3>{note.title}</h3>
            <p>
                {note.content}
            </p>
            <small>{new Date(note.date).toLocaleString()}</small>
        </div>
    );
}
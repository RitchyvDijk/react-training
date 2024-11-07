export default function NoteItem({note}) {
    return (
        <article style={{backgroundColor: note.color}}>
            <h1>{note.title}</h1>
            <div>
                {note.content}
            </div>
            <small>{new Date(note.date).toLocaleString()}</small>
        </article>
    );
}
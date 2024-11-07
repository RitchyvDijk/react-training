export default function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => toggleComplete(task.id)}
      />
      <span
        style={{
          textDecoration: task.isCompleted ? "line-through" : "none",
          marginLeft: "8px",
          flex: 1,
        }}
      >
				{new Date(task.id).toLocaleString()} - {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

import React, { useState } from 'react';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.title);

  const handleBlur = () => {
    setEditing(false);
    const trimmed = text.trim();
    if (trimmed && trimmed !== todo.title) {
      onEdit(todo.id, trimmed);
    }
  };

  // ✅ thêm useEffect để cập nhật text nếu prop todo thay đổi
  React.useEffect(() => {
    setText(todo.title);
  }, [todo.title]);

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => onToggle(todo.id, e.target.checked)}
        className="todo-checkbox"
      />
      {editing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <span onClick={() => setEditing(true)}>{todo.title}</span>
      )}
      <button onClick={() => onDelete(todo.id)}>🗑️</button>
    </li>
  );
}


export default TodoItem;

import React from 'react';
import TodoItem from './TodoItem';

function TodoUlist({ todos, onToggle, onDelete, onEdit }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default TodoUlist;

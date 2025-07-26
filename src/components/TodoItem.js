import React from 'react';

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      <span
        className={todo.completed ? 'completed' : ''}
        onClick={() => toggleTodo(index)}
      >
        {todo.text}
      </span>
      <button className="delete-btn" onClick={() => deleteTodo(index)}>🗑</button>
    </li>
  );
}

export default TodoItem;

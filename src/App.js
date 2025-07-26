import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';



function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1 className="heading">✅ My Todo List ✨</h1>
      <p className="subtext">Organize your day, one task at a time.</p>

      <div className="todo-box">
        <p className="motivation">Ready to conquer your day? ✨</p>
        <AddTodo addTodo={addTodo} />

        {todos.length === 0 ? (
          <div className="empty-state">
            <img src="/assets/no-tasks.png" alt="No tasks" className="empty-image" />
            <h3>No tasks yet</h3>
            <p>Add your first task above to get started!</p>
          </div>
        ) : (
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        )}
      </div>

      <footer className="footer">✨ Stay organized, stay productive ✨</footer>
    </div>
  );
}

export default App;

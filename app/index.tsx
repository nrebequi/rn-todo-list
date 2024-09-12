import React, { useState } from 'react';

function TodoApp() {
  // Specify that 'todos' is an array of strings
  const [todos, setTodos] = useState<string[]>([]); // Explicit type annotation
  const [inputValue, setInputValue] = useState('');

  // Function to handle adding a new to-do
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos((prevTodos) => [...prevTodos, inputValue.trim()]); // Add the new todo to the list immutably
      setInputValue(''); // Clear the input
    } else {
      alert("Task cannot be empty!"); // Alert for empty input
    }
  };

  // Function to handle removing a to-do
  const removeTodo = (indexToRemove: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, index) => index !== indexToRemove)); // Remove the item at the specified index
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>App To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update input value on change
        placeholder="Enter a new task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
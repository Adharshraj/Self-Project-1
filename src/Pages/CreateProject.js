import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function CreateProject() {
  const [title, setTitle] = useState('');
  const [selectedTodos, setSelectedTodos] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/gettodos')
      .then(response => {
        if (!response.data) {
          console.error('Error fetching todos!');
          return;
        }
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }, []);

  const handleTodoChange = (event) => {
    const todoId = parseInt(event.target.value); // Parse todo ID as integer
    const isChecked = event.target.checked;

    if (isChecked) {
      // Add todoId to selectedTodos if it's not already included
      setSelectedTodos([...selectedTodos, todoId]);
    } else {
      // Remove todoId from selectedTodos if it's unchecked
      setSelectedTodos(selectedTodos.filter(id => id !== todoId));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if at least one todo is selected before submitting
    if (!selectedTodos.length) {
      alert('Please select at least one todo for the project!');
      return;
    }

    try {
      const projectData = {
        title: title,
        ids: selectedTodos // Send selected todo IDs to backend
      };

      const response = await axios.post('http://localhost:8080/CreatePjt', projectData);
      console.log(response.data);
      if (response.data === 'Project Saved') {
        window.location.href = '/home';
      } else {
        alert('Error while creating project. Please try again.');
      }
    } catch (error) {
      console.error('Project Creation Error: ', error);
      alert('An unexpected error occurred while creating the project. Please try again or contact the admin.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Project</h2>
      <label htmlFor="title">Project Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <h3>Select Todos</h3>
      {todos.length > 0 ? (
        todos.map(todo => (
          <div key={todo.id}>
            <input
              type="checkbox"
              id={todo.id}
              name={todo.id} // Set name to prevent duplicate IDs
              value={todo.id}
              checked={selectedTodos.includes(todo.id)}
              onChange={handleTodoChange}
            />
            <label>{todo.description}</label>
          </div>
        ))
      ) : (
        <p>Loading todos...</p>
      )}
      <br />
      <div className="buttu">
        <input type="submit" value="Create Project" className="btn btn-primary" />
      </div>
    </form>
  );
}

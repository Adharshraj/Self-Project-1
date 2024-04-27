import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/ViewProject.css'

export default function ViewProject() {
  const [project, setProject] = useState(null);
  const [todos, setTodos] = useState([]);
  const [selectedTodos,setSelectedTodos]=useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/viewproject');
 // Destructure project and todos from response

        setProject(response.data);
      // Set project state
      } catch (error) {
        console.error('View project error:', error);
        // Handle error (e.g., show error message)
      }
    };

    fetchProjectData();
    
  }, []); // Empty dependency array to run effect only once on component mount

  const fetchTodosData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/viewprojecttodos');
// Destructure project and todos from response

      setTodos(response.data); // Set project state
    } catch (error) {
      console.error('View project error:', error);
      // Handle error (e.g., show error message)
    }
};
fetchTodosData();
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
 /* const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Example: "4/22/2024" (depending on browser locale)
    // For more advanced formatting, consider using libraries like moment.js
  };
  

  const handleTodoCompletion = async (todoId) => {
    try {
      const response = await axios.put(`http://localhost:8080/todo/${todoId}`, { completed: !todos.find(todo => todo.id === todoId).completed });
      const updatedTodos = todos.map(todo => (todo.id === todoId ? response.data : todo));
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleEditProjectTitle = (projectId, projectTitle) => {
    navigate('/editprojecttitle', { state: { projectId, projectTitle } }); // Pass project ID and title in state
  };*/
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if at least one todo is selected before submitting
    

    try {
      const Data = {
        id: selectedTodos // Send selected todo IDs to backend
      };
      if (!selectedTodos.length) {
        alert('Please select at least one todo for the project!');
        return;
      }
      
      const response = await axios.post('http://localhost:8080/Updateprojecttodo', Data);
      console.log(response.data);
      if (response.data === 'todo data saved') {
        window.location.href = '/viewproject';
      } else {
        alert('Error while creating project. Please try again.');
      }
    } catch (error) {
      console.error('Project Creation Error: ', error);
      alert('An unexpected error occurred while creating the project. Please try again or contact the admin.');
    }
  };
  const handleEditProjectTitle = () => {
    navigate('/editpjttitle'); // Navigate to edit title page with project ID
  };
  return (
    <div className="view-project">
      {project && (
        <div>
          <h2>{project.title}</h2>
          <button className='edit-button' onClick={() => handleEditProjectTitle(project.id, project.title)}>Edit Title</button>
          <p>Created Date: {project.date}</p>
          {todos && todos.length > 0 && (
            <form onSubmit={handleSubmit}>
              <p>Summery:0/{todos.length} completed</p>
              <br/>
              <h2>ToDos</h2>
              <h3>Completed Tasks:</h3>
              <ul className="todo-list">
                {todos.filter(todo => !todo.Status).map(todo => (
                  <li key={todo.id} className="todo-item">
                    <input type='checkbox'
                      id={todo.id}
                      name={todo.id}
                      value={todo.id}
                      checked={selectedTodos.includes(todo.id)} // Check if this todo is selected
                      onChange={handleTodoChange} />
                    {todo.description}
                  </li>
                ))}
              </ul>
  
              <h3>Pending Tasks:</h3>
              <ul className="todo-list">
                {todos.filter(todo => todo.Status).map(todo => (
                  <li key={todo.id} className="todo-item">
                    <input type='checkbox'
                      id={todo.id}
                      name={todo.id}
                      value={todo.id}
                      checked={selectedTodos.includes(todo.id)} // Check if this todo is selected
                      onChange={handleTodoChange} />
                    {todo.description}
                  </li>
                ))}
              </ul>
              <div className="buttu">
                <input type="submit" value="Save" className="btn btn-primary" />
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
  
}

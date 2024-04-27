import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Css/Home.css'

export default function Home() {
  const [Projects, setProjects] = useState([]);
  const [selectedProjects,setSelectedProjects]=useState([]);

  // Function to handle project click
  const handleTodoChange = (event) => {
    const projectId = parseInt(event.target.value); // Parse todo ID as integer
    const isChecked = event.target.checked;

    if (isChecked) {
      // Add todoId to selectedTodos if it's not already included
      setSelectedProjects([...selectedProjects,projectId]);
    } else {
      // Remove todoId from selectedTodos if it's unchecked
      setSelectedProjects(selectedProjects.filter(id => id !== projectId));
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedProjects.length) {
      alert('Please select at least one project!');
      return;
    }
    try {
      const Data={
        id:selectedProjects
      };
      
      // Send POST request to backend with project ID
      const response =await axios.post('http://localhost:8080/setdata',Data);
      console.log(response.data);
      
      // Check response and perform actions based on it
      if (response.data === "data saved") {
        // Redirect to viewproject page upon success
        window.location.href = '/viewproject';
      } else {
        alert('Error while sending data to backend');
      }
    } catch (error) {
      console.error('Error sending data to backend:', error);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  // Fetch projects from backend upon component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:8080/getproject');
        setProjects(response.data);
      } catch (error) {
        console.error('Home page error:', error);
        alert('Home page error');
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="home-page">
      <nav className="navigation-bar">
        <Link to='/create-project'>Create Project</Link>
        <Link to='/create-todo'>Create Todo</Link>
        <Link to='/todos'>List Todos</Link>
        <Link to='/logout'>Log Out</Link>
      </nav>

      {/* Project List */}
      <form onSubmit={handleSubmit}>
      <h3>Your Projects</h3>
      {Projects.length > 0 ? (
        Projects.map(project => (
          <div key={project.id}>
            <input
              type="checkbox"
              id={project.id}
              name={project.id} // Set name to prevent duplicate IDs
              value={project.id}
              checked={selectedProjects.includes(project.id)}
              onChange={handleTodoChange}
            />
            <label>{project.title}</label>
          </div>
        ))
      ) : (
        <p>Loading todos...</p>
      )}
      <br />
      <div className="buttu">
        <input type="submit" value="View Project" className="btn btn-primary" />
      </div>
    </form>
    </div>
  );
}


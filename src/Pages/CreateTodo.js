import axios from 'axios';
import React, { useState } from 'react'
import '../Css/CreateTodo.css'

export default function CreateTodo() {
  const[description,setDescription]=useState('');

  const handleSubmit=async(event)=>{
    event.preventDefault();
    
    try{
      const response=await axios.post('http://localhost:8080/Createtodo',{
        description: description
      });
      console.log(response.data);
      if(response.data==="todo created"){
        window.location.href='/home';
      }else{
        alert("Error while creating todo please try again");
      }
    }
    catch(error){
      console.error("Todo creation error: ",error);
      alert('Unexpected error occured while creating todo');
    }
  }
  return (
    <div className="create-todo-container">
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="todo-input"
        />
        <button type="submit" className="create-todo-button">
          Create Todo
        </button>
      </form>
    </div>
  )
}

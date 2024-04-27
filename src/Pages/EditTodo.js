import React,{useState} from 'react'
import axios from 'axios';

export default function EditTodo() {
    const[description,setDescription]=useState('');

  const handleSubmit=async(event)=>{
    event.preventDefault();
    
    try{
        const Data4={
            description:description
        };

      const response=await axios.post('http://localhost:8080/UpdateTodo',Data4);
      console.log(response.data);
      if(response.data==="Todo updated"){
        window.location.href='/todos';
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
      <h2>Update Todo</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
          className="todo-input"
        />
        <button type="submit" className="create-todo-button">
          Update Todo
        </button>
      </form>
    </div>
  )
}

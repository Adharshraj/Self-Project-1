import axios from 'axios';
import React, { useState } from 'react'

export default function ProjectTitleEdit() {
    const [title,setTitle]=useState('');

        
        
        const handleSubmit=async(event)=>{
            event.preventDefault();
            try{
            const Data2={
                title:title}
            const response=await axios.post('http://localhost:8080/updateTitle',Data2);

            console.log(response.data);
            if(response.data==='Title Updated'){
                window.location.href='/home';
            }
            else{
                alert('Error while sending data to database')
            }
        }
    
    catch(error){
        console.error('tile update page error: ',error);
        alert('An unexpected error occured on project title update page');
    }
};
  return (
    <div>
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
    <br/><br/>
    <div className="buttu">
        <input type="submit" value="Update Project" className="btn btn-primary" />
      </div>
    </form>
    </div>
  );
}

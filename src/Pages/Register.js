import React, { useState } from 'react'
import '../Css/Register.css'
import axios from 'axios'

export default function Register() {
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[gender,setGender]=useState('');
    const[address,setAddress]=useState('');

    const handleSubmit = async(event)=>{
        event.preventDefault();

        try{
            const response= await axios.post('http://localhost:8080/register',{
                username: username,
                email: email,
                password: password,
                gender: gender,
                address: address
            });
            console.log(response.data);
            if (response.data === 'Registersuccess'){
                window.location.href = '/MapLog';
            }
            else{
                alert('user exists in the database');
            }
        }
        catch(error){
            console.error('register error: ',error);
            alert('an error occured during register');
        }
        
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
            <label class="form-label">Username: </label>
            <input type="text" class="form-control" id="exampleFormControlInput1" name="username" value={username} onChange={e =>setUsername(e.target.value)}/>

            <label class="form-label">Email id: </label>
            <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={email} onChange={e =>setEmail(e.target.value)}/>

            <label class="form-label">Password: </label>
            <input type="password" class="form-control" id="exampleFormControlInput1" name="password" value={password} onChange={e=>setPassword(e.target.value)}/>

            <label class="form-label">Gender: </label>
            <select class="form-select" aria-label="Disabled select example" name="gender" value={gender} onChange={e=>setGender(e.target.value)}>
            <option selected>Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            </select>
            <br/>
            <label class="form-label">Address: </label>
            <textarea name="address" class="form-control" id="exampleFormControlTextarea1" rows="3" value={address} onChange={e=>setAddress(e.target.value)}></textarea>
            <br/><br/>
            <div class="buttu">
            <button type="submit" class="btn1 btn-primary">Submit</button>
            </div>
        </form>
    </div>
  )
}

import React, { useState } from 'react'
import axios from 'axios';

export default function Login() {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const handleSubmit= async(event)=>{
        event.preventDefault();
        try{
            const response= await axios.post('http://localhost:8080/login',{
                email: email,
                password: password
            });
            console.log(response.data);
            if(response.data==="Success"){
                window.location.href='/home';
            }
            else if(response.data==="Usernotexist"){
                alert("User not exist please register");
            }
            else{
                alert("Login failed please check your password again");
            }

        }
        catch(error){
            console.error("login error: ",error);
            alert("an error occured during login");
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={e=>setEmail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="password" value={password} onChange={e=>setPassword(e.target.value)}/>
  </div>
<a href="forgot">forgot password</a>
<br/>
<div class="buttu">
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
    </div>
  )
}

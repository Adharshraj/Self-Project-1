import React from 'react'
import {Link} from 'react-router-dom'
import '../Css/Welcome.css'

export default function Index() {
  return (
    <div className="Welcome">
      <br/><br/><br/>
      <h1 className="welcome-text">Welcome to AMR Project Todo Manager</h1>
    <div className="index-container">
      <div className="button-container">
        <Link to="regWire" class="btn btn-primary" >click here to register</Link>
        <br/><br/>
        <Link to="MapLog" class="btn btn-secondary" >click here to login</Link>
      </div>
    </div>
  </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='d-flex justify-content-around align-items-center'>
    <Link to="/" >Home</Link>
    <Link to="/about" >About</Link>
    <Link to = "/login">Login</Link>
    <Link to="/register" >Register</Link>
    <Link to="/regi" >Regi</Link>
   
   
    </div>
  )
}

export default Home
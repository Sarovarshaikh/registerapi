import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='d-flex justify-content-around align-items-center  py-3 px-5 text-primary'>
    <Link to="/" >Home</Link>
    <Link to="/about" >About</Link>
    <Link to = "/login">Login</Link>
    <Link to="/register" >Register</Link>
   
   
   
    </div>
  )
}

export default Home
import React,{useState} from 'react'
import { Link, Navigate } from 'react-router-dom'

const Login = () => {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const loginDadat = async ()=>{
        let data = {email,password}
        // console.log(data);
        let result = await fetch("https://lobster-app-ddwng.ondigitalocean.app/user/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(data)
        })
        // result = await result.json()
        // localStorage.setItem("user-info",result.json.stringify(result))
        result = await result.json()
        // console.log("result", result);
        localStorage.setItem("user-info",result.json.stringify(result))
        Navigate('/add')

    }

  return (
    <div className='col-12 col-md-6 mx-auto'>
        <h1> here Login Page</h1>
        <div className='col-12 col-md-6'>
        <input type="text" placeholder='Enter Yor email:' onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <br />
        <input type="password" placeholder='Enter Yor password:' onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <br />
        <button className='btn btn-primary' onClick={loginDadat}>Login</button>
        <p>Don't have account ? <Link to="/register">Sign Up</Link> here</p>
        </div>
    </div>
  )
}

export default Login
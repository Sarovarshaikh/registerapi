import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate();
    const loginDadat = async ()=>{
        // let data = {email,password}
       let data= {
            "login_id":email,
            "password":password
        }
        // console.log(data);
        let result = await fetch("https://lobster-app-ddwng.ondigitalocean.app/user/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
                "api_key": "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH"
            },
            body:JSON.stringify(data)
        })
        // result = await result.json()
        // localStorage.setItem("user-info",result.json.stringify(result))
        result = await result.json()
        console.log("result", result);
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate('/about')

    }

  return (
    <div className='col-12 col-md-6 mx-auto'>
        <h1 className=''>  Login Page</h1>
        <div className='col-12 col-md-6 mt-4'>
        <input type="text" placeholder='Enter email ID:' onChange={(e)=>setEmail(e.target.value)} className="form-control" />
        <br />
        <br />
        <input type="password" placeholder='Enter password:' onChange={(e)=>setPassword(e.target.value)} className="form-control" />
        <br />
        <br />
        <div className='d-grid gap-2'>
        <button className='btn btn-primary' onClick={loginDadat}>Login</button>
        </div>
        <p>Don't have account ? <Link to="/register">Sign Up</Link> here</p>
        </div>
    </div>
  )
}

export default Login
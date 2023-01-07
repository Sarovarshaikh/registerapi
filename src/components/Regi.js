import React, { useState } from 'react'
import { json,useNavigate } from 'react-router-dom'

const Regi = () => {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()
    const sighnup =async ()=>{
        // console.log(name,email,password);
        let data = {name,email,password}
        // console.log(data);
       let result=await fetch('url',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(data)

        })
        result = await result.json()
        localStorage.setItem("user-info",json.stringify(result))
        navigate('/add')

    }

  return (
    <div className='col-12 col-md-6 mx-auto'>
        <h1>Register Two</h1>
        <input type="text" placeholder='enter yor name:' value={name} onChange={(e)=>setName(e.target.value)} />
        <br />
        <br />
        <input type="email" placeholder='enter yor Email:' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <br />
        <input type="password" placeholder='enter yor Password:' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <br />
        <button className='btn btn-primary' onClick={sighnup}>Register</button>

    </div>
  )
}

export default Regi
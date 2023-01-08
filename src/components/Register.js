import React,{useState,} from 'react'
import { json, Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"


const Register = () => {
    const [name, setsName] = useState("")
    const [email, setsEmail] = useState("")
    const [password, setsPassword] = useState("")
    const [mobile, setsMobile] = useState("")
    const [Country, setsCountry] = useState("101")
    const [user, setsUser] = useState("")
    const navigate = useNavigate();

    const signup =async ()=>{
        // let data = {name,email,password,mobile,Country,user}
        // console.log(data)
        

        
        
           let data= {
              "full_name":name,
              "username":user,
              
              "email_id":email,
              "country_row_id":Country,
              "mobile_number":mobile,
              "password":password
            }
            console.log(data);
       let result=await fetch("https://lobster-app-ddwng.ondigitalocean.app/user/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
                "api_key" : "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH"
            },
            body:JSON.stringify(data)
        })
        result = await result.json()
        console.log("result", result);
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate('/login')
        // history.push('/about')
    }

  return (
    <div className='col-md-6 mx-auto'> <h1 className='my-4'>Register Form</h1> 
        <input type="text" value={name} required onChange={(e)=>setsName(e.target.value)} placeholder='Enter our Name:' className="form-control"/>
        <br />
        <input type="text" value={user} required onChange={(e)=>setsUser(e.target.value)} placeholder='Enter User:' className="form-control"/>
        <br />
        <input type="number" value={mobile} required onChange={(e)=>setsMobile(e.target.value)} placeholder='Enter our Mobile:' className="form-control"/>
        <br />
        <input type="email" value={email} required onChange={(e)=>setsEmail(e.target.value)} placeholder='Enter  Email:' className="form-control"/>

        <br />
        
       <select onChange={(e)=>setsCountry(e.target.value)} value={Country}  className="form-control">
        <option  value="101" >India</option>
        <option value="102">USA</option>
       </select>
        {/* <input type="text" value={Country} required onChange={(e)=>setsCountry(e.target.value)} placeholder='Enter our Contry:' className="form-control"/> */}
        <br />
        <input type="password" value={password} onChange={(e)=>setsPassword(e.target.value)} placeholder='Enter our Password:' className="form-control"/>

        <br />
        <div className='d-grid gap-2'>
        <button className='btn btn-primary' onClick={signup}>Sign Up</button>
        </div>
        <p>Have an account ? <Link to="/login">Sign In </Link> Here</p>

    </div>
    
  )
}

export default Register
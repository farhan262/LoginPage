import React, { useState } from 'react'
import './Login.css'
import img1 from "../Images/Students.jpeg"
export default function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [allentry,setAllentry] = useState([])
  const handleLogin=(e)=> {
    e.preventDefault();
    const newentry = {email: email, password:password} 
    setAllentry([...allentry, newentry])
  }

  return (
    <form onSubmit={handleLogin}>
      
    <div className='wrapper  d-flex align-items-center justify-content-center'>
    <div className='first'>
      <h4 className='mb-3'>Hi,Welcome Back!</h4>
      <div className='form-group mb-2'>
        <label htmlFor='email' className='form-label'>Email Address</label>
        <input type="email" className='form-control' autoComplete='off' value={email}
        onChange={(e)=>setEmail(e.target.value)} />
        
       </div>

       <div className='form-group mb-2'>
        <label htmlFor='password' className='form-label'>Password</label>
        <input type="password"  className='form-control'autoComplete='off' value={password}
        onChange={(e)=>setPassword(e.target.value)} />
        
       </div>
       <button type='submit' className='btn btn-primary' >LOGIN</button>
       
    </div>
    <img src={img1} alt="" width="300" height="280"/>
    </div>
    
    </form>
    
  )
}

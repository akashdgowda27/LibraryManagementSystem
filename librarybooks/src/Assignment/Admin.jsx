import React, { useRef, useState } from 'react'
import '../Assignment/admin.css'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  let [bool,setBool]=useState(true)
  let navigate=useNavigate()
  let username=useRef()
  let password=useRef()

  let AdminData={
    user: 'akash',
    pass : '123'
  }

  let {user,pass}=AdminData
  let handleClick=(e)=>{
    e.preventDefault()

    setBool(!bool)
    if(username.current.value===user && password.current.value===pass){
    navigate('/producthome')
    }
    else{
      alert('login Credentials are wrong')
    }
  }
  return (
    <>
      <div className="admin-cont">
         <form action="">
           <input ref={username} type="text" placeholder='enter email user-id'/>
           <input ref={password} type="text" placeholder='enter password'/>
           <button onClick={handleClick}>
            Login
           </button>
         </form>
      </div>
    </>
  )
}

export default Admin

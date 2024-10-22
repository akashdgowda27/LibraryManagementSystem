import React, { useRef, useState } from 'react'
import '../Assignment/user.css'
import { useNavigate } from 'react-router-dom'

const User = () => {
    let [bool,setBool]=useState(true)
    let navigate=useNavigate()
    let username=useRef()
    let password=useRef()
  
    let UserData={
      user: 'akash',
      pass : '123'
    }
  
    let {user,pass}=UserData
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
    <div className="user-cont">
        <form action="">
            <input ref={username} type="text" placeholder='enter user id' />
            <input ref={password} type="text" placeholder='enter password'/>
            <button onClick={handleClick}>Login</button>
        </form>
    </div>
    </>
  )
}

export default User

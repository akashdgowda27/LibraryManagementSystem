import React, { useRef, useState } from 'react'
import '../ProStyle/testland.css'
import { useNavigate } from 'react-router-dom'

const TestLandingPage = () => {
    let userid=useRef().current
    let userPass=useRef().current
    let navigate=useNavigate()

    let handleClick=(e)=>{
        e.preventDefault()

        let userData={
            id : "akash",
            password : 123
        }
        let {id,password}=userData
        
        let validation=()=>{
            if(userid.value===id && userPass.value===password){
                alert('thank you')
                navigate('/product')
            }
            else{
                alert('wrong credentials')
            }
        }
        validation()

    }

  return (
   <>
   <div className="testlanding">
    
    <div className="test-cont">
        <h2>Login Page</h2>
        <form action="" onSubmit={handleClick}>
            <input ref={userid} type="text" placeholder='enter userid'/>
            <input ref={userPass} type="text" placeholder='enter user password' />
            <button>Login</button>
        </form>
    </div>
   </div>
   </>
  )
}

export default TestLandingPage

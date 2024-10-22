import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    let adminEmail=useRef()
    let adminpswd=useRef()
    let navigate=useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault()
        let emailVal=adminEmail.current
        let pswdVal=adminpswd.current

        let credential={
            admin:"akash@gmail.com",
            password:"akash123"
        }
        let {admin,password}=credential

        let err=`border:1px solid yellow;background:yellow;color:red`
        let valid=()=>{
            if(emailVal.value===admin && pswdVal.value===password){
                alert('you are log in to AdminPortal')
                navigate('/adminportal')
            }
            else{
                emailVal.style.cssText=err
                pswdVal.style.cssText=err
                alert("Invalid Credentials")
            }
        }
        valid()

    }
    
  return (
    <>
    <form action="" className='admin' onSubmit={handleSubmit}>
       <input ref={adminEmail} type="text" placeholder='enter admin email'/>
       <input ref={adminpswd} type="text" placeholder='enter password'/>
       <button>Login</button>
    </form>
    </> 
  )
}

export default AdminLogin

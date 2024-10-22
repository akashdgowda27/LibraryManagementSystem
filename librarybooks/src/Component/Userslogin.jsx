import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Userslogin = () => {
  let[user,setUser]=useState([])
  let[userData,setUserdata]=useState()
  let inemail=useRef()
  let upass=useRef()
  let navigate=useNavigate()

  //! fetch user api : ("http://localhost:4000/users")
  useEffect(()=>{
    let fetchApi= async()=>{

      let userApi=await fetch("http://localhost:4000/users")
      let data=await userApi.json()
      setUser(data);
    }
    fetchApi()
  },[])


  //! collecting email from user api
    let allUserEmail=user.map((elem)=>{
      let{email}=elem
      return email
    })
    console.log(allUserEmail);
    //! collecting input data from the enduser
    let emailfield=inemail.current
    let passfield=upass.current

     let handleClick=(e)=>{
      e.preventDefault()

      //! Checking wether the email is present or not
      let email=allUserEmail.includes(emailfield.value)
      let password=(passfield.value=== 'user123')
    
     
          if(email===true && password===true){
            alert('good')
          navigate('/usersportal')
         }
         else{
          let err='border:solid red 2px';
          emailfield.style.cssText=err;
          passfield.style.cssText=err;
          alert('your email id is wrong ')
         }

     }    

  return (
    <>
    <form action="" className='user' onSubmit={handleClick}>
      <input ref={inemail} type="text" placeholder='enter user email' />
      <input ref={upass} type="text" placeholder='enter password'/>
      <button>Login</button>
   </form>
   </>
  )
}

export default Userslogin

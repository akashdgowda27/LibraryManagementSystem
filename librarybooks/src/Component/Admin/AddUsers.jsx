import React, { useEffect, useRef } from 'react'
import '../../styles/addusers.css'

const AddUsers = () => {
    let fname=useRef()
    let lname=useRef()
    let email=useRef()
    let phone=useRef()
    let place=useRef()
    let dob=useRef()

    let handleClick =async(e)=>{
        e.preventDefault()

        let newUser={
            firstname : fname.current.value,
            lastname : lname.current.value,
            email : email.current.value,
            phone : phone.current.value,
            place : place.current.value,
            dob : dob.current.value
        }
        
      
        await fetch(`http://localhost:4000/users`,{
            method: "POST",
            headers : {'Content-Type':"application/json"},
            body : JSON.stringify(newUser)
        })
    


    }
  return (
    <>
       <div className="addusers">
        <h1>Add Users</h1>
        <div className="addusers-container">
            <form action="" onSubmit={handleClick}>
                <input ref={fname} type="text" placeholder='enter first name'/>
                <input ref={lname} type="text" placeholder='enter  last name'/>
                <input ref={email} type="email" placeholder='enter email address '/>
                <input ref={phone} type="tel" placeholder='enter phone number'/>
                <input ref={place} type="text" placeholder='enter palce'/>
                <input ref={dob} type="date" placeholder='enter Date of Birth'/>
                <button>Add User</button>
            </form>
        </div>
       </div>
    </>
  )
}

export default AddUsers

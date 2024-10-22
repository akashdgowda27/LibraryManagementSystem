import React, { useEffect, useState } from 'react'
import '../styles/users.css'
import icon from '../images/icon-user.jpeg'
import { useLocation } from 'react-router-dom'


const Users = () => {
  let [user,SetUser]=useState([])
  useEffect( ()=>{
      let fetchUrl=async()=>{
        let userData=await fetch("http://localhost:4000/users")
        .then(resp=>resp.json())
        SetUser(userData)
      }
      fetchUrl()
      
  },[user])
  console.log(user);

  let loc=useLocation()
  let path=loc.pathname.startsWith('/adminportal')
  return (
    <>
     <div className="users">
      <h1>Users</h1>
      <div className="user-container">
        {
          user.map((data)=>{
            let {id,firstname,lastname,email,phone,place,dob}=data
            return(
              <>
               <div className="card">
                <div className="left">
                  <img src={icon} alt="" />
                </div>
                <div className="right">
                  <table>
                    <tr>
                      <th>name : </th>
                      <td>{firstname} {lastname}</td>
                    </tr>
                    <tr>
                      <th>email : </th>
                      <td>{email}</td>
                    </tr>
                    <tr>
                      <th>phone no :  </th>
                      <td>{phone}</td>
                    </tr>
                    <tr>
                      <th>place : </th>
                      <td>{ place}</td>
                    </tr>
                    <tr>
                      <th>dob : </th>
                      <td>{dob}</td>                  
                    </tr>
                    <tr>
                      
                      {path  ? 
                       <>
                       <th>password : </th>
                        <td>user123</td>
                       </>  
                       :
                       <></>
                    }                  
                    </tr>
                  </table>
                  {path && <><button>Delete</button></>} //! third type of conditional rendering
                </div>
               </div>
              </>
            )
          })
        }
      </div>
     </div>
    </>
  )
}

export default Users

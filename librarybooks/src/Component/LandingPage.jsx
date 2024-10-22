import React, { useState } from 'react'
import '../styles/landingpage.css'
import AdminLogin from './AdminLogin'
import Userslogin from './Userslogin'

const LandingPage = () => {
    let[bool,setBool]=useState(true)

    let handleClick=()=>{
        setBool(!bool)
    }
  return (
    <>
     <div className="landingpage">
        <div className="container">
            <div className="btn-container">
                <button onClick={handleClick} className={bool ? 'adminBtn' : 'userBtn'}>
                    {bool ? 'Admin Login' : 'User Login'}
                  
                </button>
            </div>
            <div className="heading">
                {bool ? 'ADMIN LOGIN PAGE':'USER LOGIN PAGE'}
            </div>
            <div className={bool ? 'adminform' :'userform'} >
                {
                    bool ? <AdminLogin />: <Userslogin />    
                }
            </div>
            
        </div>
     </div>
    </>
  )
}

export default LandingPage

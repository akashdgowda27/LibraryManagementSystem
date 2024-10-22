import React, { useState } from 'react'
import '../Assignment/aland.css'
import Admin from './Admin'
import User from './User'

const LandingPage = () => {
    let[bool,setBool]=useState(true)

    let handleClick=()=>{
        setBool(!bool)
    }
  return (
    <>
       <div className="landingpage">
        <div className="cont">
            <div className="btn-cont">
                <button onClick={handleClick} className={bool ? 'adminLogin':'userLogin'}>
                {bool ? 'Adminlogin':'Userlogin'}
                </button>
            </div>

            <div className={bool ? "admin-form-cont" : "user-form-cont"}>
                {bool ? <Admin /> : <User />}
            </div>
            
        </div>
     </div>
    </>
  )
}

export default LandingPage

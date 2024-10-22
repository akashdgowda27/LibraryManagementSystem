import React from 'react'
import '../styles/navbar.css'
import logo from '../images/png-logo-1.avif'
import { NavLink, useLocation } from 'react-router-dom'

const NavBar = () => {
    let loc=useLocation()
    let path=loc.pathname;
    
    let bool=path.startsWith('/adminportal')
    
    
  return (
   <>
   <div className="navbar">
    <div className="logo">
        <img src={logo} alt="" />
    </div>
    <div className="nav">
        <ul>
            {
                bool ? 
                <>
                   <li><NavLink to="/adminportal">HOME</NavLink></li>
                   <li><NavLink to="/adminportal/books">BOOKS</NavLink></li>
                   <li><NavLink to="/adminportal/addbooks">ADD BOOKS</NavLink></li>
                   <li><NavLink to="/adminportal/users">USERS</NavLink></li>
                   <li><NavLink to="/adminportal/addusers">ADD USERS</NavLink></li>
                   {/* <li><NavLink to="/adminportal/about">About</NavLink></li> */}
                   <li><NavLink to="/">LOGOUT</NavLink></li>
                </> 
                
                :
                 <>
                  <li><NavLink to="/usersportal">HOME</NavLink></li>
                  <li><NavLink to="/usersportal/books">BOOKS</NavLink></li>
                  <li><NavLink to="/usersportal/users">USERS</NavLink></li>
                  <li><NavLink to="/usersportal/cart">CART</NavLink></li>
                  <li><NavLink to="/">LOGOUT</NavLink></li>
                </>
            }
        </ul>
    </div>
   </div>
   </>
  )
}

export default NavBar

import React from 'react'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import ReadBooks from './ReadBooks'
import Users from './Users'
import Books from './Books'
import Cart from './Cart'

const UsersPortal = () => {
  return (
   <>
    <div className="userportal">
        <NavBar />

        <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Books />} path='/books' />
        <Route element={<ReadBooks />} path='/readbooks/:id' />
        <Route element={<Cart />} path='/cart' />
        <Route element={<Users />} path='/users' />
        
      </Routes>
    </div>
   </>
  )
}

export default UsersPortal

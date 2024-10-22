import React from 'react'
import NavBar from '../NavBar'

import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Books from '../Books'
import ReadBooks from '../ReadBooks'
import About from '../About'
import AddBooks from './AddBooks'
import Users from '../Users'
import AddUsers from './AddUsers'

const AdminPortal = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Books />} path='/books' />
        <Route element={<ReadBooks />} path='/readbooks/:id' />
        <Route element={<Users />} path='/users' />
        <Route element={<AddUsers />} path='/addusers' />
        
        <Route element={<AddBooks />} path='/addbooks' />
        
        <Route element={<About />} path='/about' />
      </Routes>
    </>
  )
}

export default AdminPortal

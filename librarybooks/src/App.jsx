import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Product from './Assesment/Product'
// import TestLandingPage from './Assesment/TestLandingPage'
// import ViewProduct from './Assesment/ViewProduct'
import LandingPage from './Component/LandingPage'
import AdminPortal from './Component/Admin/AdminPortal'
import Userslogin from './Component/Userslogin'
import UsersPortal from './Component/UsersPortal'
// import LandingPage from './Assignment/LandingPage'
// import ProductHome from './Assignment/ProductHome'

const App = () => {
  return (
    <>
    {/* <div className="heading">Library Books</div> */}
    <BrowserRouter>
   
      <Routes >
        <Route element={<LandingPage />} path='/'/>
        <Route element={<AdminPortal />} path='/adminportal/*' />
        <Route element={<UsersPortal />} path='/usersportal/*' />
        
      </Routes>

           {/* ------------------------github url---------------------- */}
      {/* <Routes>
        <Route element={<LandingPage />} path='/' />
        <Route element={<ProductHome />} path='/producthome/*' />
      </Routes> */}
        {/*----------------------Assesment-------------------- */}
        {/* <Routes>
          <Route element={<TestLandingPage />} path='/' />
          <Route element={<Product />} path='/' />
          <Route element={<ViewProduct />} path='/vwpro/:id' /> 
        </Routes> */}

    </BrowserRouter>
    </>
  )
}

export default App

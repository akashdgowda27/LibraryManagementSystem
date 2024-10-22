import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductNav from './ProductNav'
import Product from './Product'

const ProductHome = () => {
  return (
   <>
    <ProductNav />
    <Routes >
      <Route element={<Product />} path='/product' />
    </Routes>
     
    
   </>
  )
}

export default ProductHome

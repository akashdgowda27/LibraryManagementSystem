import React from 'react'
import '../Assignment/productnav.css'
import { NavLink } from 'react-router-dom'

const ProductNav = () => {
  return (
    <>
      <div className="productnav">
        <div className="navbar">
            <div className="left"></div>
            <div className="right">
                <ul>
                    <li>
                        <NavLink to="/producthome" >Home</NavLink>
                        <NavLink to="" >About</NavLink>
                        <NavLink to="" >AddProduct</NavLink>
                        <NavLink to="/producthome/product" >Product</NavLink>
                        <NavLink to="" >logout</NavLink>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductNav

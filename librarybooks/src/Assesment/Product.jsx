import React, { useEffect, useState } from 'react'
import '../ProStyle/product.css'
import { useNavigate } from 'react-router-dom'

const Product = () => {

    let[pro,setPro]=useState([])
    let navigate=useNavigate()

    useEffect(()=>{
        let proUrl=async()=>{
            let dataUrl=await fetch("http://localhost:4000/product")
            .then(resp=>resp.json())
            setPro(dataUrl)
        }
        proUrl()
        // console.log(pro);
    },[])

    let handleClick=(id)=>{
        navigate(`/vwpro/${id}`)
    }
  return (
    <>
    <div className="product">
        <h1>Products</h1>
        <div className="pro-cont">
            {
                pro.map((data)=>{
                    let{id,title,image}=data
                    return(
                        <>
                         <div className="card">
                            <div className="h2">{title}</div>
                            <div className="img">
                            <img src={image} alt={title} />
                            </div>
                            <button onClick={()=>{handleClick(id)}}>View</button>
                            <button>Delete</button>
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

export default Product

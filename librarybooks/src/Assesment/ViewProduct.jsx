import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewProduct = () => {
    let params=useParams()
    // let proId=params.id
   
    let [pro,setPro]=useState()

    useEffect(()=>{
        let proUrl=async()=>{
            let dataUrl=await fetch(`http://localhost:4000/product/${params.id}`)
            .then((resp)=>{resp.json()})
            setPro(dataUrl)
        }
        proUrl()
        console.log(pro);
    },[])
   
  return (
    <div>
      <div className="viewpro">
        <div className="viewpro-cont">
            {/* {
                pro.map((data)=>{
                    let{id,title}=data
                    return(
                        <>
                         <h2>{id}</h2>
                        </>
                    )
                })
            } */}
        </div>
      </div>
    </div>
  )
}

export default ViewProduct

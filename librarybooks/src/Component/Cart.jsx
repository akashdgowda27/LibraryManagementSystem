import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import '../styles/cart.css'

const Cart = () => {
    let para=useParams()
    let getBookId=para.id
    let [book,setBook]=useState([])
    let [cart,setCart] = useState([])



    useEffect(()=>{
        let fetchApi= async()=>{
            let apiData=await fetch(`http://localhost:4000/books/${getBookId}`)
            // let apiData=await fetch(`http://localhost:4000/cart`)
            .then(resp=>resp.json())
            setBook(apiData)
        }
        fetchApi()
    },[])
    // console.log(book);
    let {id,authors,thumbnailUrl,title}=book

    useEffect(()=>{
        let fetchApi= async()=>{
            let apiData=await fetch(`http://localhost:4000/cart`)
            .then(resp=>resp.json())
            setCart(apiData)
        }
        fetchApi()
    },[])

    let navigate=useNavigate()
    let readBooks=(id)=>{
         navigate(`/usersportal/readbooks/${id}`)
       }
  return (
    <>

    <div className="cart">
        <div className="cart-cont">
           {
            cart.map((elem)=>{
                let {id,authors,thumbnailUrl,title} =elem
                return(
                    <>
                         <div className="left">
                            <img src={thumbnailUrl} />
                        </div>
                        <div className="right">
                           <span>title:  <h2>{title}</h2></span>
                         <span>authors : <h4>{authors}</h4></span>
                         <button onClick={()=>{readBooks(id)}}>READBOOK</button>
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

export default Cart

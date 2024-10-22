import React, {  useEffect, useState } from 'react'
import '../styles/books.css'
import { useLocation, useNavigate } from 'react-router-dom'
import ReadBooks from './ReadBooks'



const Books = () => {
    let[books,setBooks]=useState([])

  //  useEffect(async()=>{
  //   let apiData = await fetch("http://localhost:4000/books")
  //   .then(resp => resp.json())
  //   setBooks(apiData);
  //  },[books])
    
   useEffect(()=>{
    let fetchApi = async () => {
      let apiData = await fetch("http://localhost:4000/books")
      .then(resp => resp.json())
      setBooks(apiData);
  }
  fetchApi()
   } , [books])
  // console.log(books);

  let navigate = useNavigate()
  let loc=useLocation()
  let path=loc.pathname.startsWith('/adminportal')
  let readBooks=(id)=>{
   path ?
    navigate(`/adminportal/readbooks/${id}`)
    :
    navigate(`/usersportal/readbooks/${id}`)
  }

  let deleteBook=(id,title)=>{
   if(path){
    let bool=window.confirm(`do you want to delete ${title} book ?...`)
   if(bool)
    fetch(`http://localhost:4000/books/${id}`,{method : "DELETE"})
    else
    alert("book not deleted")
   }
  }

  let cartNavi=useNavigate()
  let addtoCart=(id,title,authors,pageCount,thumbnailUrl)=>{
    
    let newBook ={

      title : title,
      thumbnailUrl : thumbnailUrl ,
      authors : [authors ],
      pageCount : pageCount

  }

    

    fetch(`http://localhost:4000/cart`,{
      method : "POST",
      headers : {"Content-Type" :"application/json"},
      body :JSON.stringify(newBook)
    })

    cartNavi(`/usersportal/cart/${id}`)
  }
  return (
   <>
    <div className="books">
       {
        books.map((elem)=>{
            // console.log(elem);
            let {id,title,authors,isbn,pageCount,thumbnailUrl}=elem
            
            return(
                <>
                  <div className="card">
                    <div className="img">
                        <img src={thumbnailUrl} alt="" />
                    </div>
                    <div className="desc">
                        <div className="info">
                        <table>
                          <tr>
                            <th>title :</th> 
                            <td>{title} </td>
                          </tr> <br />
                          <tr>
                            <th >Authors:</th>
                            <td rowSpan={2}>{authors } </td>
                          </tr> <br />
                          <tr>
                            <th>ISBN :</th>
                            <td>{isbn}</td>
                          </tr>
                          <tr>
                            <th>Page Count:</th>
                            <td  rowSpan={2}>{pageCount}</td>
                          </tr>
                        </table>
                        </div>
                        <div className="btn">
                         
                        <button onClick={()=>{readBooks(id)}} className='btn1' >Read Books</button>
                        {path ? 
                         <>
                       <button className='btn2' onClick={()=>{deleteBook(id,title)}}>Delete</button>
                       </>
                       :
                       ""  
                      }
                      {
                        path? ""  :<button onClick={()=>{addtoCart(id,title,authors,pageCount,thumbnailUrl)}}>CART</button>
                      }
                        </div>
                    </div>
                  </div>
                </>
            )
        })
       }
    </div>
   </>
  )
}

export default Books

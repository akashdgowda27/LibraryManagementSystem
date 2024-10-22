import React, { useRef } from 'react'
import '../../styles/addbooks.css'


const AddBooks = () => {
    let bookTitle=useRef()
    let imageUrl=useRef()
    let author=useRef()
    let isbn=useRef()
    let pageCount=useRef()

    let handleSubmit=(e)=>{

        e.preventDefault()

        let newBook ={

            title : bookTitle.current.value ,
            thumbnailUrl : imageUrl.current.value ,
            authors : [author.current.value ],
            isbn : isbn.current.value,
            pageCount : pageCount.current.value

        }
       
        
        fetch(`http://localhost:4000/books`,{
            method : "POST",
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify(newBook)
        })
    }

  

  return (
   <>
     <div className="addbooks">
        <h1>Add Books</h1>
        <div className="container">
            <form action="" onSubmit={handleSubmit}>
                <input ref={bookTitle} type="text" placeholder='enter the name of book'/>
                <input ref={imageUrl} type="text" placeholder='enter image url'/>
                <input ref={author} type="text" placeholder='enter authour name'/>
                <input ref={isbn} type="text" placeholder='enter ISBN number'/>
                <input ref={pageCount} type="number" placeholder='enter page count'/>
                <button>ADD BOOK</button>
            </form>
        </div>
     </div>
   </>
  )
}

export default AddBooks


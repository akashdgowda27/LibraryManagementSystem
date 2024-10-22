import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const ReadBook = () => {
    let para = useParams()
    let bookId = para.id
    let [book,setbook] = useState([])
    
    
   //  ! fetching api--------
  
    useEffect(()=>{
        let fetchApi= async ()=>{
            let bookData= await fetch(`http://localhost:4000/books/${bookId}`)
            .then(resp =>resp.json())
            setbook(bookData)
        }
        fetchApi()
    },[book])
   
    //! destructure
    let {id,title,isbn,thumbnailUrl,pageCount,shortDescription,longDescription,}=book
     
    //! short description
    let [bool,setBool]=useState(true)
    let handleClick=()=>{
      setBool(!bool)
    }

let [long,setLong]=useState(true)
let longDesc=()=>{
  setLong(!long)
}

    

    
    let navigate = useNavigate()  
let loc=useLocation()
let path=loc.pathname.startsWith('/adminportal')
let goBack=()=>{
 path ?
  navigate('/adminportal/books')
  :
  navigate('/userportal/books')
}



  return (
   <>
      <div className="readbooks">
        <div className="card">
                 <div className="img">
                     <img src={thumbnailUrl} alt={title} />
                 </div>
                 <div className="desc">
                 <h1> <span>tittle - </span>{title}</h1>
                 <h1> <span>isbn -</span> {isbn}</h1>
    
                 <button onClick={handleClick}>
                 {bool ? "":shortDescription}
                 short-description</button>
    
                 <button onClick={longDesc}>
                 {long ?  "": longDescription}
                 Long-description</button>
                 <h1><span>page-count - </span>{pageCount}</h1>
                 <div className='back-button'>
                     <button onClick={goBack}>back</button>
                 </div>

            </div>
        </div>
      </div>
   </>
  )
}

export default ReadBook

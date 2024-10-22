import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import '../styles/readbooks.css'

const ReadBooks = () => {
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
    let {id,title,isbn,thumbnailUrl,pageCount,shortDescription,longDescription}=book
     
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
  navigate('/usersportal/books')
}

    let removeBook=(id)=>{
      
    }
  return (
   <>
      <div className="readbooks">
        <div className="redabook-cont">
          <div className="left">
            <img src={thumbnailUrl} />
          </div>
          <div className="right">
            <table>
              <tr>
                <th>Title : </th>
                <td>{title}</td>
              </tr>
              <tr>
                <th>isbn : </th>
                <td>{isbn}</td>
              </tr>
              <tr>
                <th>pagecount : </th>
                <td>{pageCount}</td>
              </tr>
            </table>
              <div className="shortdesc">
              <button onClick={handleClick}>
                 {bool ? "":shortDescription}
                 short-description</button>
              </div>
              <div className='longdesc'>
              <button onClick={longDesc}>
                 {long ?  "": longDescription}
                 Long-description</button>
              </div>
              <div className='back-button'>
                  <button onClick={goBack}>back</button>
                  <button>Remove</button>
              </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default ReadBooks

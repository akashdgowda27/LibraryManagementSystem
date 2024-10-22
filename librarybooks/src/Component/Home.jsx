import React from 'react'
import '../styles/home.css'
import img1 from '../images/pic-3.avif'
import img2 from '../images/png-5.png'
import img3 from '../images/png-2.png'

const Home = () => {
  return (
   <>
     <div className="home-back">
        <div className="home">
            <div className="left">
                <div className="title">
                  <div className="img">
                    
                  </div>
                    {/* <h2>ONLINE LIBRARY</h2> */}
                </div>
                <div className="pic">
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className="right">
              <div className="container">
                <h2>LIBRARY📚</h2>
                <div className="cont">
                <div className="info">
                “Having fun isn't hard when you've got a library card.” – Marc Brown. <br />
                “A library is a house of hope. ... <br />
                “Reading brings us unknown friends.” – ... <br />
                “Public libraries are the heart and soul of any community. ...  <br />
                “You can never get a cup of tea large enough or a book long enough to suit me.” 
                </div>
                <div className="img">
                  <img src={img2} alt="" />
                </div>
                </div>
              </div>
              {/* <div className="title">
              <h2>Library</h2>
              </div>
              <div className="btm">
                <img src={img3} alt="" />
              </div> */}
            </div>
        </div>
     </div>
   </>
  )
}

export default Home

import React from 'react'
import './Home.css'
import { ImQrcode } from "react-icons/im";


function Home() {
  return (
    <section className='home'>
        <div className="homecontainer">
            <h1>Digital arts are trends now. <br/> Welcome to the world of <br/>NFTs.</h1>
            <p>It's crafted with the latest trend of design & coded with all modern <br/> 
                approaches.Iy's a robust & multi-dimensional usable template</p>
            <button className='home_button'> <ImQrcode/> View All Collections</button>    
        </div>
    </section>
  )
}

export default Home
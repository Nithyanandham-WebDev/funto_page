import React,{useState} from 'react'
import './Navbar.css'
import {BiSearch} from 'react-icons/bi'
import { ImQrcode } from "react-icons/im";

function Navbar() {
    const [responsiveBar,setResponsiveBar] = useState(false)
    const handleChange = () =>{
        setResponsiveBar(prevState => !prevState)
        console.log(responsiveBar)
    }
  return (
    <nav>
        <div className='nav'>
            <div>
                <h3>funto</h3>
            </div>

            <div className='nav_content'>
                <div className='nav_home'>
                    <p>Home</p>
                    <div className="navBars">
                        <p>Home variation 1</p>
                        <p>Home variation 2</p>
                    </div>
                </div>
                <div>
                    <p>Explore</p>
                </div>
                <div>
                    <p>Admin</p>
                </div>
                <div>
                    <p>Pages</p>
                </div>
                <div>
                    <p>Help Center</p>
                </div>
            </div>
            
            <div className='nav_input'>
                <div className='nav_input_field'>
                    <input type='text' placeholder='Search' className='input'/>                
                    <BiSearch/>
                </div>

                <button className='nav_btn'>Create</button>
            </div>
            <ImQrcode className='bar' onClick={handleChange}/>
        </div>
       { responsiveBar && <div className="responsive_navbar">
            <div>
                    <p>Home</p>
                </div>
                <div>
                    <p>Explore</p>
                </div>
                <div>
                    <p>Admin</p>
                </div>
                <div>
                    <p>Pages</p>
                </div>
                <div>
                    <p>Help Center</p>
            </div>
        </div>}
    </nav>
  )
}

export default Navbar
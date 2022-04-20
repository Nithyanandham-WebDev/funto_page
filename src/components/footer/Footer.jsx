import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer>
        <div className='footer_container'>

            <div className='footer_secttion'>

                <div className='footer_left'>
                    <h1 className='footer_title'>Funto</h1>
                    <div className='footer_content'>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>call +123 456 789</p>
                        <p>Email: help@example.com</p>
                    </div>
                    <div className='footer_input'>
                        <input type="email" placeholder='Email' className='input' />
                        <button className='footer_btn'>Subscribe</button>
                    </div>
                </div>
                <div>

                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer
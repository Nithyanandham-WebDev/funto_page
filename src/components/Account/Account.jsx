import React from 'react'
import './Account.css'
import image from '../assets/image/flower.jpg'

function Account() {
  return (
    <>
        <section className='account'>
            <div className='account_cards'>

                <div className='account_card_'>
                    <img src={image} className="account_image"/>
                    <h1>create your account & add wallet</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <p className='acc_num'>1</p>
                </div>

                <div className='account_card_'>
                    <img src={image} className="account_image"/>
                    <h1>create your account & add wallet</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <p className='acc_num'>1</p>
                </div>


                <div className='account_card_'>
                    <img src={image} className="account_image"/>
                    <h1>create your account & add wallet</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <p className='acc_num'>1</p>
                </div>

                <div className='account_card_'>
                    <img src={image} className="account_image"/>
                    <h1>create your account & add wallet</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <p className='acc_num'>1</p>
                </div>
            </div>
            <div className='color'></div>
        </section>
    </>
  )
}

export default Account
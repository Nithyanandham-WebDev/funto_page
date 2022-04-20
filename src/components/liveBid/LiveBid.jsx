import React,{useState} from 'react'
import './LiveBid.css'
import Image from '../assets/image/flower.jpg'
import {BsThreeDotsVertical,BsBag} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import { VscAccount } from "react-icons/vsc";
import {BiShareAlt} from "react-icons/bi"
import {BsFlag,BsBookmark} from 'react-icons/bs'


function LiveBid() {
    const [show,setShow] = useState(false)
    const handleChange = () =>{
        setShow(prevstate => !prevstate)
        console.log(show)
    }
  return (
    <section className='live_bid'>
        <div className='live_bid_container'>
            
                        

            <div className='live_bid_cards_container'>
                {/* ----------------- */}
                <div className='live_bid_card'>
                    
                    <div className='con'>
                        <img src={Image} alt="" className='live_bid_card_image'/>
                        
                        <div className='con-1 container-1'>
                            <button> New Bid</button>
                            <BsThreeDotsVertical className='dots' onClick={handleChange}/>
                            {
                                show && <div className='show_property'>
                                    <p><BiShareAlt/> <span>share</span></p>
                                    <p><BsFlag/> <span>Report</span></p>
                                    <p><BsBookmark/> <span>Bookmark</span></p>
                                </div> 
                            }   
                            
                        </div>
                        <div className='con-1 con-2'>
                            
                            <div className='live_bid_table'>
                                <div>
                                    <h5>2</h5>
                                    <h5>Days</h5>
                                </div>
                                <div>
                                    <h5>2</h5>
                                    <h5>Days</h5>
                                </div>
                                <div>
                                    <h5>2</h5>
                                    <h5>Days</h5>
                                </div>
                                <div>
                                    <h5>2</h5>
                                    <h5>Days</h5>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='live_bid_rating'>
                        <div className='live_bid_left'>
                            <BsBag className='bag'/>
                            <p>3 Stock available</p>
                        </div>
                        <AiOutlineHeart/>
                    </div>             
                    
                    
                    <div className='livebid_user'>
                        <div className='livebid_user_left'>
                            <VscAccount className='livebid_avatar'/>
                            <div className='livebid_userName'>
                                <h4>Fancy Car</h4>
                                <p>@fancy_car</p>
                            </div>
                        </div>
                        <div className='livebid_user_right'>
                            <p>Current Bid</p>
                            <h4>0.782 ETH</h4>
                        </div>
                    </div>
                    <button className='place_bid'>Place Bid</button>
                </div>
                {/* ------------------------------- */}

                {/* -------------------------------     */}
                {/* <div className='live_bid_card'>
                    
                    <div className='con'>
                        <img src={Image} alt="" className='live_bid_card_image'/>
                        
                        <div className='con-1'>
                            <button> New Bid</button>
                            <BsThreeDotsVertical className='dots'/>
                        </div>
                        <div className='con-1 con-2'>
                            
                            <div className='live_bid_table'>
                                <div>
                                    <h5>2</h5>
                                    <h5>Days</h5>
                                </div>
                                <div>
                                    <h5>2</h5>
                                    <h5>Days</h5>
                                </div>
                                <div>
                                    <h5>2</h5>
                                    <h5>Days</h5>
                                </div>
                                <div>
                                    <h5>2</h5>
                                    <h5>Days</h5>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='live_bid_rating'>
                        <div className='live_bid_left'>
                            <BsBag className='bag'/>
                            <p>3 Stock available</p>
                        </div>
                        <AiOutlineHeart/>
                    </div>             
                    
                    
                    <div className='livebid_user'>
                        <div className='livebid_user_left'>
                            <VscAccount className='livebid_avatar'/>
                            <div className='livebid_userName'>
                                <h4>Fancy Car</h4>
                                <p>@fancy_car</p>
                            </div>
                        </div>
                        <div className='livebid_user_right'>
                            <p>Current Bid</p>
                            <h4>0.782 ETH</h4>
                        </div>
                    </div>
                    <button className='place_bid'>Place Bid</button>
                </div> */}
                {/* -------------------------------------------- */}
                {/* -------------------------------     */}
                {/* <div className='live_bid_card'>
                    
                    <div className='con'>
                        <img src={Image} alt="" className='live_bid_card_image'/>
                        
                        <div className='con-1'>
                            <button> New Bid</button>
                            <BsThreeDotsVertical className='dots'/>
                        </div>
                        <div className='con-1 con-2'>
                            
                            <div className='live_bid_table'>
                                <div>
                                    <h5>2</h5>
                                    <h5>Days</h5>
                                </div>
                                <div>
                                    <h5>2</h5>
                                    <h5>Days</h5>
                                </div>
                                <div>
                                    <h5>2</h5>
                                    <h5>Days</h5>
                                </div>
                                <div>
                                    <h5>2</h5>
                                    <h5>Days</h5>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='live_bid_rating'>
                        <div className='live_bid_left'>
                            <BsBag className='bag'/>
                            <p>3 Stock available</p>
                        </div>
                        <AiOutlineHeart/>
                    </div>             
                    
                    
                    <div className='livebid_user'>
                        <div className='livebid_user_left'>
                            <VscAccount className='livebid_avatar'/>
                            <div className='livebid_userName'>
                                <h4>Fancy Car</h4>
                                <p>@fancy_car</p>
                            </div>
                        </div>
                        <div className='livebid_user_right'>
                            <p>Current Bid</p>
                            <h4>0.782 ETH</h4>
                        </div>
                    </div>
                    <button className='place_bid'>Place Bid</button>
                </div> */}
                {/* -------------------------------------------- */}
                {/* -------------------------------     */}
                {/* <div className='live_bid_card'>
                    
                    <div className='con'>
                        <img src={Image} alt="" className='live_bid_card_image'/>
                        
                        <div className='con-1'>
                            <button> New Bid</button>
                            <BsThreeDotsVertical className='dots'/>
                        </div>
                        <div className='con-1 con-2'>
                            
                            <div className='live_bid_table'>
                                <div>
                                    <h5>2</h5>
                                    <h5>Days</h5>
                                </div>
                                <div>
                                    <h5>2</h5>
                                    <h5>Days</h5>
                                </div>
                                <div>
                                    <h5>2</h5>
                                    <h5>Days</h5>
                                </div>
                                <div>
                                    <h5>2</h5>
                                    <h5>Days</h5>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='live_bid_rating'>
                        <div className='live_bid_left'>
                            <BsBag className='bag'/>
                            <p>3 Stock available</p>
                        </div>
                        <AiOutlineHeart/>
                    </div>             
                    
                    
                    <div className='livebid_user'>
                        <div className='livebid_user_left'>
                            <VscAccount className='livebid_avatar'/>
                            <div className='livebid_userName'>
                                <h4>Fancy Car</h4>
                                <p>@fancy_car</p>
                            </div>
                        </div>
                        <div className='livebid_user_right'>
                            <p>Current Bid</p>
                            <h4>0.782 ETH</h4>
                        </div>
                    </div>
                    <button className='place_bid'>Place Bid</button>
                </div> */}
                {/* -------------------------------------------- */}
            </div>

        </div>
    </section>
  )
}

export default LiveBid
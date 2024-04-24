import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
function Main() {
  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
      <div className='main-container'>
        <div className='greet'>
            <p><span>Hello, Developer !!</span></p>
            <p>How can I help you today </p>
        </div>
        <div className='cards'>
            <div className='card'>
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className='card'>
                <p>Briefly summarize this concept : Urban planning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className='card'>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className='card'>
                <p>Improve the readability of following code</p>
                <img src={assets.code_icon} alt="" />
            </div>  
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Enter a Prompt here' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
            </div>
            <div className="bottom-info">
                Gemini may display inaccurate info,including about people ,so double check its response.Your Privacy and Gemini Apps 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main

import React from 'react'
import "./footer.css"
import { FaApple, FaAndroid, FaGooglePlay,FaInstagram,FaYoutube,FaTwitter } from 'react-icons/fa'
import {images} from '../../constants'

export default function Footer() {
  return (
    <div className="footer__wrapper">
      <div className="top flex-row">

        <div className="left flex-col">
          <h1>Download our mobile app ⚡️</h1>
          <p>Get exclusive access to car rentals with our mobile app. Download now and experience convenience on the go.</p>


        </div>
        <div className="right flex-row">
          <button className="apple">
            <div className="logo"><FaApple /> </div>
            <div className="written">
              <div className="upper">Download On The</div>
              <div className="lower">APP STORE</div>
            </div>
          </button>
          <button className="android">
            <div className="logo"><FaGooglePlay /> </div>
            <div className="written">
              <div className="upper">Download On The</div>
              <div className="lower">PLAY STORE</div>
            </div>
          </button>
        </div>
      </div>

      <div className="bottom">
        <div className="logo-text">
          <p>ROYAL RENTALS</p>
         
        </div>
        <div className="links">
          <li>Rent</li>
          <li>Share</li>
          <li>About Us</li>
          <li>Contact</li>
        </div>
        <div className="socials">
          <li><FaInstagram style={{color:'#fff'}}/></li>
          <li><FaTwitter style={{color:'#fff'}}/></li>
          <li><FaYoutube style={{color:'#fff'}}/></li>
        </div>

      </div>
    </div>

  )
}

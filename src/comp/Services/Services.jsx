import React from 'react'
import "./Services.css"
import { images } from '../../constants'
import Heading from '../heading/Heading'
import {FaSearch,FaBook,FaSmile, FaSadCry} from 'react-icons/fa'

export default function Services() {
  return (
    <div className="service__wrapper flex-col">
        <div className="services-heading__panel flex-col">
          <Heading title={"How it works"} />
         <p className="service_text">Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online</p>
          </div>
      <div className="services__content">
          <div className="left__section">
            <div className="services__box flex-row">
              <div className="icon flex-row"><FaSearch/></div>
              <div className="writing"><p className='head-text'>Browse and select</p>
              <p className='under-text'>Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best.</p>
              </div>
            </div>

            <div className="services__box flex-row">
              <div className="icon flex-row"><FaBook/></div>
              <div className="writing flex-col"><p className='head-text'>Book and confirm</p>
              <p className='under-text'>Book your desired car with just a few clicks and receive an instant confirmation via email or SMS.</p>
              </div>
            </div>

            <div className="services__box flex-row">
              <div className="icon flex-row"><FaSmile/></div>
              <div className="writing"><p className='head-text'>Enjoy your ride</p>
              <p className='under-text'>Pick up your car at the designated location and enjoy your premium driving experience with our top-quality service.</p>
              </div>
            </div>



            
          </div>




          <div className="right__section">
            <img src={images.wrangler} alt="" />
          </div>
        </div>
      </div>
      )
}

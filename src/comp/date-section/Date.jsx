import React from 'react'
import "./date.css"
import DatePicker from 'react-date-picker'
import {FaArrowRight} from "react-icons/fa"
// import {Faarrowright} from "react-icons/fa"


export default function Date() {
  return (
    <>
      <div className="container">
        <div className="date__wrapper">

          <div className="pickup-location">
            <p>Pick-Up Location</p>
            <input type="text" name="" id="" placeholder='Pick-up Location' className='input' />

          </div>

          <div className="pickup-date">
            <p>Pick-Up Date</p>
            <input type="date"  className='date'/></div>

          <div className="drop-location"> <p>Drop-Off Location</p>
            <input type="text" name="" id="" placeholder='Drop-Off Location' className='input' /></div>
          <div className="drop-date">
            <p>Drop-Off Date</p>
           
            <input type="date" className='date'/></div>
        <div className="btn">
          <button className='button'>Find Vehicle</button>
          <FaArrowRight style={{color:'#fff'}}/>

        </div>
        </div>
     

      </div>
    </>
  )
}

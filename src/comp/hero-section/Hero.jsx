import React from 'react'
import "./hero.css"
import Para from '../para/Para'
import { images } from "../../constants"
import { Date } from "../date-section/Date"

export default function Hero() {
  return (
    <>
      <div className="wrapper">
        <div className="logo-text flex-row">
          <p>Royal Rentals</p>
        </div>
        <div className="secondsection">
          <div className="text-below">
            <p>Discover the world on wheels with our car rental service</p>
          </div>
          <div className="heroimage">
            <img src={images.hero} alt="" />
          </div>
        </div>
      </div>
   
    </>
  )
}

import React from 'react'
import "./product.css"
import Heading from "../heading/Heading"
import { brands } from "../../constants"


export default function Product() {
  //image name rate category button

  return (
    <div className="container" style={{background:'#F5F5F5',marginTop:'50px',width: '100%',
    height: '1734px'}}>
      <div className="content">
        <div className="heading__panel">
          <Heading title={"Our Impressive Collection of Cars"} />
          <p className='ranging'>Ranging from elegant sedans to powerful sports cars, all carefully selected to provide our customers with the ultimate driving experience.</p>
        </div>
        <div className="car__grid">
          {brands.cars.map((car, index) => (
            <div className="car__box">
              <div className="image" >
                <img src={car.Image} alt="" />
              </div>
              <div className="title">{car.title}</div>
              <div className="price">{car.price} <span className='spanday'>/day</span> </div>
              <div className="category">
                <li>{car.transmission}</li>
                <li>{car.capacity}</li>
                <li>{car.pwr_source}</li>
              </div>

              <button >Rent Now</button>

            </div>

          ))}


        </div >
      </div >
    </div >

  )
}

import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import "./category.css"
import { brands } from "../../constants"
import Heading from "../heading/Heading"
<link href="https://fonts.googleapis.com/css?family=Figtree:300,regular,500,600,700,800,900,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />

export default function Category() {

  return (
    <>
      <div className="container" style={{marginTop:'10vh'}}>
        <div className="content">
          <div className="top__panel">
            <div className="heading">
              Rent by Brands
            </div>
            <div className="view">
              <p>View all</p>
              <FaArrowRight style={{color:"black"}} />
            </div>
          </div>
          <div className="grid">
            {brands.branding.map((brand, index) => (
              <div className="box" key={brand.title + index}>
                <img src={brand.Image} alt="" className='img' />
                <p className='name'> {brand.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  )
  // console.log(brand_names)
}

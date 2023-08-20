import React from 'react'
import "./para.css"
export default function Para({title,color}) {
  return (
    <div className="para" style={{color:{color}}}>{title}</div>
  )
}

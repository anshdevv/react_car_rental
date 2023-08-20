import React from 'react'
import "./Heading.css"
<link href="https://fonts.googleapis.com/css?family=Figtree:300,regular,500,600,700,800,900,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />
export default function Heading({title}) {
  return (
   <div className="heading__container"><p className='heading'>{title}</p></div>
  )
}

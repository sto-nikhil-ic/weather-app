import React from 'react'

export default function Header({title,subtitle,color}) {

  return (
    <div style={{backgroundColor:color,padding:"20px"}}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}











import React from 'react'

export const Cards = ({image,name,designation,time,exp}) => {
  return (
    <div className='card-container'>
        <div className='right'>
            <img src={image} alt='card-images' className='card-image'/>
        </div>
        <div className='left'>
            <h3 className='card-head'>{name}</h3>
            <p className='card-desc'>{designation}</p>
            <p className='card-desc'>{time}</p>
            <p className='card-desc'>{exp}</p>
        </div>
    </div>
  )
}


import React from 'react'
import './Card.css'

function Card() {
  return (
    <div className='card'>
      <h1 className='title'>Hello World</h1>
      <p className='body'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nesciunt 
        est libero nisi sunt eaque eum quaerat voluptas modi magni vero rerum, 
        accusamus minus! Enim delectus accusantium vel harum libero?
      </p>
      <button className='cta'>
        My Profile
      </button>
    </div>
  )
}

export default Card

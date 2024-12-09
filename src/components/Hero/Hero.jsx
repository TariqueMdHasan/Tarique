import React from 'react'
import './Hero.css'
import Photo from './Photo'
import Name from './Name'

function Hero() {
  return (
    <div className='Hero' id='Hero'>
      <div className='Hero-des'>
        <Name/>
      </div>
      <div className='Hero-Photo'>
        <Photo />
      </div>
    </div>



  )
}

export default Hero
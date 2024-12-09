import React from 'react'
import './Photo.css'
import Picture from './MyPhoto.png'


function Photo() {
    return (
        <div className="Photo-box">
            
            <div className='MyPicture'>
                <img src={Picture} alt="Tarique" />
            </div>
        </div>
    )
}

export default Photo
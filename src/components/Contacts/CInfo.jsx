import React from 'react'
import './CInfo.css'

function CInfo({CImage, CName, ContLink}) {
  return (
    <div className='cinfo'>
        <a href={ContLink} className='cinfoA'>
            <img src={CImage} alt="contacts information" />
            <p>{CName}</p>
        </a>
    </div>
  )
}

export default CInfo
import React from 'react'
import './ProjectCard.css'

function ProjectCard({ ProjectPhoto, ProjectLink, ProjectName, listsItem }) {
  return (
    <a href={ProjectLink} className='ProjectCArd'>
      <div className='PCpicture'>
        <img src={ProjectPhoto} alt="It isjust screenshot" className='pcimage' />
      </div>
      <div className='PC-des'>
        <h3 className='Pcdes-h3'>{ProjectName}</h3>
        <div className='pcUl'>
          {listsItem.map((item, index) => (
            <p key={index} className='Pcdes-lists'>{item}</p>
          ))}
        </div>

      </div>
    </a>
  )
}

export default ProjectCard


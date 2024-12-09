import React from 'react'
import './contacts.css'
import CInfo from './CInfo'
import GithubLogo from './github-logo.png'
import Gmail from './gmail-logo.png'
import Linkedin from './linkedin-logo.png'
import Twitter from "./twitter-logo.png";
import Vercel from './vercel-logo.png'


function Contacts() {
  return (
    <div className='contacts' id='contacts'>
        <CInfo CImage={GithubLogo} CName="Github" ContLink="https://github.com/TariqueMdHasan"/>
        <CInfo CImage={Gmail} CName="Gmail" ContLink="mailto:md.th.abdi@gmail.com"/>
        <CInfo CImage={Linkedin} CName="Linkedin" ContLink="https://www.linkedin.com/in/tariquemdhasan/"/>
        <CInfo CImage={Twitter} CName="Twitter" ContLink="https://x.com/HasanTariquee"/>
        <CInfo CImage={Vercel} CName="Vercel" ContLink="https://vercel.com/tariques-projects"/>
    </div>
  )
}

export default Contacts
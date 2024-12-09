
import React from 'react';
import './Skills.css';
import HtmlLogo from './html-logo.png';
import CssLogo from './css-logo.png';
import Bootstrap from './bootstrap-logo.png';
import TailwindLogo from './tailwind-logo0.png';
import JavascriptLogo from './javascipt-logo.png';
import ReactLogo from './react-logo.png';
import ReactNativeLogo from './reactNative-logo.png';
import CLogo from './c-logo.png';
import CppLogo from './cpp-logo.png';
import PythonLogo from './python-logo.png';
import NodejsLogo from './nodejs-logo.png';
import ExpressjsLogo from './expressjs-logo.png';
import MongodbLogo from './mongodb-logo.png';

function Skills() {
  return (
    <div className='skills' id='skills-gallary'>
      <div className='skills-h1'>
        <h1>My Skills</h1>
        <div className='skills-line'></div>
      </div>
      <div className='skills-photos' >
        <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' className='skillsImg' style={{ "--delay": "1" }}>
          <img src={HtmlLogo} alt="Html logo" className='skillsLogo' />
        </a>
        <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' className='skillsImg' style={{ "--delay": "2" }}>
          <img src={CssLogo} alt="Css logo" className='skillsLogo' />
        </a>
        <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' className='skillsImg' style={{ "--delay": "3" }}>
          <img src={JavascriptLogo} alt="Javascript logo" className='skillsLogo' />
        </a>
        <a href='https://react.dev' className='skillsImg' style={{ "--delay": "4" }}>
          <img src={ReactLogo} alt="React logo" className='skillsLogo'/>
        </a>
        <a href='https://reactnative.dev' className='skillsImg' style={{ "--delay": "5" }}>
          <img src={ReactNativeLogo} alt="React native logo" className='skillsLogo' />
        </a>
        <a href='https://en.cppreference.com/w/c/language' className='skillsImg' style={{ "--delay": "6" }}>
          <img src={CLogo} alt="C logo" className='skillsLogo' />
        </a>
        <a href='https://en.cppreference.com/w/cpp/language' className='skillsImg' style={{ "--delay": "7" }}>
          <img src={CppLogo} alt="C++ logo" className='skillsLogo' />
        </a>
        <a href='https://docs.python.org/3/' className='skillsImg' style={{ "--delay": "8" }}>
          <img src={PythonLogo} alt="Python Logo" className='skillsLogo' />
        </a>
        <a href='https://nodejs.org/docs/latest/api' className='skillsImg' style={{ "--delay": "9" }}>
          <img src={NodejsLogo} alt="Nodejs Logo" className='skillsLogo' />
        </a>
        <a href='https://getbootstrap.com/docs/5.3/getting-started/introduction' className='skillsImg' style={{ "--delay": "10" }}>
          <img src={Bootstrap} alt="Bootstrap" className='skillsLogo' />
        </a>
        <a href='https://tailwindcss.com/docs/installation' className='skillsImg' style={{ "--delay": "11" }}>
          <img src={TailwindLogo} alt="Tailwind Logo" className='skillsLogo' />
        </a>
        <a href='https://www.mongodb.com' className='skillsImg' style={{ "--delay": "12" }}>
          <img src={MongodbLogo} alt="Mongodb Logo" className='skillsLogo' />
        </a>
        <a href='https://expressjs.com/en/guide/routing.html' className='skillsImg' style={{ "--delay": "13" }}>
          <img src={ExpressjsLogo} alt="Expressjs Logo" className='skillsLogo' />
        </a>
      </div>
    </div>
  );
}

export default Skills;


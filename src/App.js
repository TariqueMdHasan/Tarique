// import React, {useState} from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'


function App() {
  // const [isActive, setIsActive] = useState(false);

  return (
    <div className="App"
      // style={{
      //   backgroundColor: isActive? 'rgb(29, 47, 29)': 'white',
      // }}
      // onClick={e=>{
      //   setIsActive(currentState =>{
      //     return !currentState;
      //   })
      // }}
    >
      {/* <button>click here</button> */}
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </div>
    
  );
}

export default App;

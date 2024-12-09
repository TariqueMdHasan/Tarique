
import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';



const Data = [
  {
    Header: "Note App",
    ProjectL: "https://pocket-notes-blush.vercel.app",
    ProjectPhoto: "https://raw.githubusercontent.com/TariqueMdHasan/images/refs/heads/main/PocketNotes.jpg",
    LN: [
      "This project was developed with the help of HTML, CSS, JavaScript, and React.js.",
      "This is an individual Project created by me that works perfectly as a Note-making app.",
      "User can write notes in different sections",
      "Each section can have multiple texts with Time and date",
      "Each text can be deleted",
      "Datas are stored in local storage",
      "NOT RESPONSIVE",
    ],
  },
  {
    Header: "Chatbot Maker",
    ProjectL: "https://chatbotmaker.vercel.app/",
    ProjectPhoto: "https://github.com/TariqueMdHasan/images/blob/main/chatbot.jpg?raw=true",
    LN: [
      "This Project is created with HTML, CSS, JAVASCRIPT with Reactjs Library",
      "In future It will be connected to backend as well",
      "user can create mulitple folder and files of chatbots",
      "User can track all their users information in thier respective dashboards",
      "User have to create and login to proceed with the app",
      "Backend will have Nodejs, Expressjs and Mobgodb as a database",
      "Auth is being user can create mulitple folder and files of chatbots",
      "NOT RESPONSIVE",
      "Coming soon.....",
    ],
  },
  {
    Header: "Portfolio",
    ProjectL: "https://tarique.vercel.app/",
    ProjectPhoto: "https://github.com/TariqueMdHasan/images/blob/main/portfolio.jpg?raw=true",
    LN: [
      "RESPONSIVE",
      "This is frontend single page Project",
      "HTML, vanilla CSS, SCSS, Javascript and Reactjs are used in this project",
      "Animations are inspired from few websites",
      "Background? I know it still looks ugly",
      "Anyone can download my resume from the downnload button",
    ],
  },
  {
    Header: "Task Manager",
    ProjectL: "https://task-six-tau.vercel.app",
    ProjectPhoto: "https://github.com/TariqueMdHasan/images/blob/main/taskManager.jpg?raw=true",
    LN: [
      "This is fullstack Project",
      "Frontend is completed now backend will be created for this app",
      "HTML, VANILLA CSS, JACASCRIPT, REACTJS are being used for the frontend",
      "Nodejs, Expressjs and Mongodb will be used for backend for this project",
      "Auth is being used for authencation of users",
      "Users can plan everything in this app",
      "NOT RESPONSIVE",
      "coming soon..........",
    ],
  },
  {
    Header: "Rock Paper Scissor",
    ProjectL: "https://rock-paper-scissor-fjt5fq8qj-tariques-projects.vercel.app/",
    ProjectPhoto: "https://github.com/TariqueMdHasan/images/blob/main/rpc.jpg?raw=true",
    LN: [
      "This is a Rock Paper Scissor game created with Pure Javascript, Html and Css",
      "This game can be played between computer and human",
      "Scores are stored in local storage",
      "NOT RESPONSIVE",
    ],
  },
];

function Projects() {
  return (
    <div className="Projects" id="Projects">
      <div className="Projects-h1">
        <h1>My Projects</h1>
        <div className="Projects-line"></div>
      </div >
      <div className='list-items'>
        {Data.map((item, index) => (
          <ProjectCard
            key={index}
            ProjectLink={item.ProjectL}
            ProjectName={item.Header}
            listsItem={item.LN}
            ProjectPhoto={item.ProjectPhoto} 
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

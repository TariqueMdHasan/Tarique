import React from 'react'
import './Name.css'

function Name() {



    const handleDownload = () => {
        // Create a link element
        const link = document.createElement('a');
        // Set the URL of the PDF file
        link.href = 'https://drive.google.com/uc?export=download&id=1oIm13MrBVm6rDZw1ERtKmsL_HKsXr_Ko'; // Replace with your PDF file path
        // Set the download attribute to specify the filename
        link.download = 'tariqueHasan.resume.pdf';
        // Append the link to the body
        document.body.appendChild(link);
        // Programmatically click the link
        link.click();
        // Remove the link after triggering the download
        document.body.removeChild(link);
    }



    return (
        <div className='Name'>
            <div className='Name-typewritter'>
                <div class="typewriter">
                    <h1>Hello I am Md Tarique Hasan</h1>
                </div>
            </div>
            <div className='Name-des-container'>
                <p className='Name-des'>I am a fullstack web developer who develop React Native apps too. I have done my B.Tech (2020-2024 batch) in Electronics and Communication Engineering.</p>
            </div>
            <div class="Name-button" id="button-7" onClick={handleDownload}>
                <div id="dub-arrow">
                    <img src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="" />
                </div>
                <a href="#*" id='downloadResume'>Download Resume</a>
            </div>

        </div>

    )
}

export default Name

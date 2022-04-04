import React from "react";
import './frontPage.css';

const FrontPage = () => {
    return (
        <>
            <div className='welcomeText'>
                <h1>Hello World!</h1>
                <h3>Hi, I am Software Developer, Tampere University Student</h3>
                <h3>and This is my resume</h3>
            </div>
            <a href='https://github.com/Haaparanta' className='github' target="_blank">
            </a>
            <a href='https://www.linkedin.com/in/vesahaaparanta/' className='linkedin' target="_blank">        
            </a>
        </>
    );
}


export default FrontPage;

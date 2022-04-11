import React from "react";
import './frontPage.css';

const FrontPage = ({language}: {language:boolean}) => {
    if (language) {
        return (
            <>
                <div className='welcomeText'>
                    <h1>Hello World!</h1>
                    <h3>Hi, I am Software Developer, Tampere University Student</h3>
                    <h3>This is my resume</h3>
                </div>
                <a href='https://github.com/Haaparanta' className='github' target="_blank" rel="noreferrer">
                </a>
                <a href='https://www.linkedin.com/in/vesahaaparanta/' className='linkedin' target="_blank" rel="noreferrer">        
                </a>
                <div className="info">
                    <h3>Email: vesahaaparanta@hotmail.fi</h3>
                    <h3>Telephone: +358 442777665</h3>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className='welcomeText'>
                    <h3>Hei, olen ohjelmoija, Tampereen yliopisto opiskelija</h3>
                    <h3>ja tämä on minun nettisivuni</h3>
                </div>
                <div className="info">
                    <h3>Sähköposti: vesahaaparanta@hotmail.fi</h3>
                    <h3>Puhelin: +358 442777665</h3>
                </div>
                <a href='https://github.com/Haaparanta' className='github' target="_blank" rel="noreferrer"> </a>
                <a href='https://www.linkedin.com/in/vesahaaparanta/' className='linkedin' target="_blank" rel="noreferrer"> </a>
            </>
        );
    };

}


export default FrontPage;

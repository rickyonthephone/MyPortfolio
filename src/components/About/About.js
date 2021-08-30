import React from 'react'
import './About.css'

function AboutMe() {
    return (
        <div className='about-container'>
            <div className='headShot-container'>
                <img className='headShot'src='images/RBC.jpeg' alt='Richard Crippen' />
            </div>
            <h1 className='about-heading'>
                About Me
            </h1>
            <p className='about-body-1'>For the past 20 years I have worked in the financial services sector specializing in corporate and government
            sector retirement plans. I have mainly worked in client services and communications throughout that time. I have been fortunate to have had 
            a career that began in financial services because it instilled a certain amount of fiscal discipline in me that I lacked before. At the same time, 
            I learned so much about investments, working in a team, and got to work with all kinds of clientele. However, I was never really passionate about 
            401(k) or pension plans, nor did any of my positions in financial services allow me to utilize and express my creative side.</p>

            <p className='about-body-2'>In August of 2020 I decided to set off in a different direction and began learning about coding and 
            web development. Learning about what drives the internet and makes engaging online experiences has not been easy, but it has been insanely rewarding. 
            There are always problems and puzzles that need to be solved, you get to creatively collaborate with others, and there is so much to learn about it is impossible 
            run out of new methodologies and technologies to use. </p>

            <p className='about-body-3'>Currently, I reside in Atlanta, GA with my wife and two boys.</p>
        </div>
    )
}

export default AboutMe
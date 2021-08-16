import React from 'react'
import './Hero.css'

function Hero() {
    return (
        <div className='hero-container'>
            <video src='videos/alb_ocen0107_1080p.mp4' autoPlay loop muted />
            <h1 className='hero-welcome'>
                Greetings and welcome to my portfolio
            </h1>
            <p className='hero-greeting'>My name is Richard Crippen and I am a web developer based in Atlanta, GA. I primarily utilize MERN stack 
            technology to develop my applications.</p>
        </div>
    )
}

export default Hero

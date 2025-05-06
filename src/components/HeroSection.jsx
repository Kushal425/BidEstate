import React from 'react'
import "./HeroSection.css"

function HeroSection(props) {
return (
    <div className="hero-container" >
        {
            <video
                className="hero-video"
                src={props.video}
                autoPlay
                loop
                muted
            />
        }
        <div className="hero-content" >
            <h1>{props.title}</h1>
            <h2>Invest with Us</h2>
            <p>{props.description}</p>
        </div>
    </div>
)
}

export default HeroSection
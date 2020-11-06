import React from 'react'
import './About.css'
function About() {
    return (
        <div className="section" >
            <h1>About Me</h1>
            <span>
                <h3 style={{marginRight: 'auto', marginLeft: 'auto'}} >
                    Full Stack Software Engineer | <u>Computer Science </u>
                    Major
                </h3>
            </span>
            <br></br>
            <p className="about" style={{ display: 'inline-block', width: '75vw', }}>
                I’m a 24 year old Software Engineer that graduated from college
                in May 2020 with a Bachelor of Science in Computer Science. I
                have a strong passion for Software Development and love learning
                new technologies. I have over 1 year of professional experience
                in Software Development. Currently, my favorite programming language is JavaScript because I love the idea of cross-platform development, and there are so many web development tools like React, React Native, and Electron to build web, mobile, and desktop applications using the same language! I have had the opportunity to be a major contributor and leader of several core application features such as real-time messaging, geolocation, Google Authentication, custom-made Authorization, tournament bracket integration with a third-party API, image and video upload to AWS S3, setup of an AWS CDN, and working with AWS MediaLive for live streaming events. I also like spending time reading the most
                up-to-date technologies and frameworks, and benchmarking
                different solutions to tough problems.
            </p>
        </div>
    )
}
export default About

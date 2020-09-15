import React from 'react'
import './About.css'
function About() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>About Me</h1>
            <span>
                <h4>Hey there,</h4>
                <h1>I'm Adam Foskit</h1>
                <h3>
                    Full Stack <u>Software Engineer</u> | Computer Science{' '}
                    <u>Major</u>
                </h3>
            </span>
            <br></br>
            <p style={{ display: 'inline-block', width: '75vw' }}>
                I’m a 23 year old Software Engineer that graduated from college
                in May 2020 with a Bachelor of Science in Computer Science. I
                have a strong passion for Software Development and love learning
                new technologies. I have over 1 year of professional experience
                in Mobile Application development, mostly in React Native. I
                have had the opportunity to work with AWS, GraphQL, RESTful
                APIs, for Back-End development. For Front-End development, I
                work with React, HTML5, CSS, and JavaScript (using hundreds of
                dependencies). I love the idea of cross-platform development,
                which web technology like Javascript, and frameworks like React
                enable me to do. I also like spending time reading the most
                up-to-date technologies and frameworks, and benchmarking
                different JavaScript coding solutions.
            </p>
        </div>
    )
}
export default About

import React from 'react'
import './Skills.css'
function Skills() {
    return (
        <div className="section" >
            <h1>My Skills</h1>
            <div className="skills">
                <div>
                    <h4>Front End</h4>
                    <span>React Context</span>
                    <span>Apollo Client</span>
                    <span>React Native</span>
                    <span>React Hooks</span>
                    <span>HTML5</span>
                    <span>CSS3</span>
                </div>
                <div>
                    <h4>Back End</h4>
                    <span>Node.js</span>
                    <span>MongoDB (NoSQL)</span>
                    <span>GraphQL (Apollo Server)</span>
                    <span>RESTful APIs</span>
                    <span>MySQL</span>
                    <span>Amazon Web Services (S3, EC2)</span>
                </div>
                <div>
                    <h4>Other</h4>
                    <span>C++</span>
                    <span>Java</span>
                    <span>Teamwork</span>
                    <span>Git</span>
                    <span>Communication</span>
                    <span>Hardworking</span>
                </div>
            </div>
        </div>
    )
}
export default Skills

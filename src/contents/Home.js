import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import ProfilePicture from '../images/Pro_Square.jpg'
import './Home.css'
function Home() {
    return (
        <div className="section" >
        <div id="dust"></div>
            <div class="title">
             <h1> 
             <img
                    className='avatar'
                    alt={'Adam Foskit'}
                    src={ProfilePicture}
                />
                <div>
                <h1>Adam Foskit</h1>
                </div>
                <div>Software Developer</div>
            </h1>
            <p>Full Stack Developer with experience working in/with</p>
            <p><ReactTypingEffect
                    text={['React.', 'JavaScript.', 'React Native.', 'GraphQL.', 'RESTful APIs.', 'Node.js.', 'Express.js.']}
                    className='typingeffect'
                    speed={75}
                    eraseDelay={250}
                    typingDelay={50}
            />
            </p>
            
            </div> 
        </div>
    )
}
export default Home

import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import ProfilePicture from '../images/SelfResized.png'
// import ProfilePicture from '../images/Professional.jpg'
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
                    speed={60}
                    eraseDelay={120}
                    typingDelay={35}
            />
            </p>
            
            </div> 
        {/* <div id="dust"></div>
        <div  className={'avatar-box background'}>  
            <div className={'title'}>
                <img
                    className='avatar'
                    alt={'Adam Foskit'}
                    src={ProfilePicture}
                />
                <h1>Adam Foskit</h1>
                <h3>Full Stack Developer</h3>
                <ReactTypingEffect
                    text={['I am Adam Foskit', 'I am a Software Engineer']}
                    className='typingeffect'
                    speed={100}
                    eraseDelay={500}
                />
            </div>
        </div> */}
        </div>
    )
}
export default Home

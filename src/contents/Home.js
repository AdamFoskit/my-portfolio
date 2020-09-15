import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import ProfilePicture from '../images/SelfResized.png'
import './Home.css'
function Home() {
    return (
        <div className={'background'}>
            <div className={'text-center'}>
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
        </div>
    )
}
export default Home

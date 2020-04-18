import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import profilepic from '../images/Bear.png'
import Social from '../components/Social'
function Home() {
    return (
        <div className='condiv home'>
            <img src={profilepic} className='profilepic'></img>
            <ReactTypingEffect
                text={['I am Adam Foskit', 'I am a Software Engineer']}
                className='typingeffect'
                speed={100}
                eraseDelay={500}
            />
            <Social />
        </div>
    )
}
export default Home

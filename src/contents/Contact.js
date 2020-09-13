import React from 'react'
const email = 'adamfoskit@gmail.com'
const instagram = 'adamfoskit'
const InstagramLogo = require('../images/Instagram.png')
const EmailLogo = require('../images/Email.png')
function Contact() {
    return (
        <div className='condiv'>
            <h1 className='subtopic'>Contact Me</h1>
            <div>
                <span
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        textAlign: 'center',
                        alignItems: 'center',
                        padding: '10px',
                    }}
                >
                    <img
                        src={EmailLogo}
                        alt={'Email'}
                        width={'50px'}
                        style={{ paddingRight: '5px' }}
                    />
                    <h4>
                        Email: <a href={`mailto:${email}`}>{email}</a>
                    </h4>
                </span>
                <span
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        textAlign: 'center',
                        alignItems: 'center',
                        padding: '10px',
                    }}
                >
                    <img
                        src={InstagramLogo}
                        alt={'Instagram'}
                        width={'50px'}
                        style={{ paddingRight: '5px' }}
                    />
                    <h4>
                        Instagram:{' '}
                        <a href={`https://www.instagram.com/${instagram}`}>
                            {`@${instagram}`}
                        </a>
                    </h4>
                </span>
            </div>
        </div>
    )
}
export default Contact

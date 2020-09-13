import React from 'react'
import './Education.css'
import Diploma from '../images/Diploma.jpg'
function Education() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 className='subtopic'>My Education</h1>
            <img className='diploma' src={Diploma} />
        </div>
    )
}
export default Education

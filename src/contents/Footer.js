import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer" >
            <a href={"tel:+18322218026"}>(832) 221-8026</a>
            <a href={`mailto: ${'adamfoskit@gmail.com'}`}>Email Me</a>
            <a href={`https://github.com/AdamFoskit`}>Github</a>
            <a href={`https://linkedin.com/in/adamfoskit`}>Connect on LinkedIn</a>
            
        </div>
    )
}
export default Footer

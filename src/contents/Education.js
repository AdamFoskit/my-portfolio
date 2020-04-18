import React from 'react'
import Widecard from '../components/Widecard'
function Education() {
    return (
        <div className='condiv'>
            <h1 className='subtopic'>My Education</h1>
            <Widecard
                title='Bachelor of Science | Computer Science'
                where='Texas A&M University-Corpus Christi'
                from='August 2015'
                to='Present'
            />
            {/* <Widecard
                title=''
                where=''
                from=''
                to=''
            /> */}
        </div>
    )
}
export default Education

import React from 'react'
function Skills(props) {
    const mySkills = [
        'HTML',
        'CSS',
        'JavaScript',
        'C++',
        'React',
        'Firebase',
        'SQL',
        'NoSQL',
        'React-Native',
        'Git',
        'MongoDB',
        'AWS S3',
        'Node',
        'ES6',
    ]
    return (
        <div className='condiv skills'>
            <h1 className='subtopic'>My Skills</h1>
            <div>
                <ul style={{ flexWrap: 'wrap' }}>
                    {mySkills.map((value) => (
                        <li key={value}>{value}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Skills

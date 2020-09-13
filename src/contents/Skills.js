import React from 'react'
import Table from 'react-bootstrap/Table'
function Skills(props) {
    return (
        <div className='condiv skills'>
            <h1 className='subtopic'>My Skills</h1>
            <Table striped bordered hover size='sm'>
                <thead>
                    <th>React/React Native</th>
                    <th>APIs</th>
                    <th>Other</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Context</td>
                        <td>Node.js</td>
                        <td>Java</td>
                    </tr>
                    <tr>
                        <td>Apollo Client</td>
                        <td>Express.js</td>
                        <td>C++</td>
                    </tr>
                    <tr>
                        <td>HTML5</td>
                        <td>GraphQL</td>
                        <td>AWS S3</td>
                    </tr>
                    <tr>
                        <td>Bootstrap</td>
                        <td>REST</td>
                        <td>AWS EC2</td>
                    </tr>
                </tbody>
            </Table>
            {/* <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridGap: 20,
                }}
            >
                <ul>
                    <li>React</li>
                    <li>React</li>
                    <li>React</li>
                    <li>React</li>
                </ul>
                <ul>
                    <li>React Native</li>
                </ul>
                <ul>
                    <li>HTML</li>
                </ul>
            </div> */}
        </div>
    )
}
export default Skills

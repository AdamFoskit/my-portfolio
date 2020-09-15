import React from 'react'
import { HashRouter, Route, Switch, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Home from './contents/Home'
import About from './contents/About'
import Education from './contents/Education'
import Skills from './contents/Skills'
import Contact from './contents/Contact'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css'

const prefix = process.env.NODE_ENV === 'development' ? '#' : '/'

const Header = (props) => {
    const {
        location: { pathname },
    } = props
    return (
        <Navbar bg='light' variant='light' expand='lg'>
            <Navbar.Brand href='/'>Adam Foskit</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav activeKey={pathname} className='mr-auto'>
                    <Nav.Link href={prefix}>Home</Nav.Link>
                    <Nav.Link href={`${prefix}about`}>About</Nav.Link>
                    <Nav.Link href={`${prefix}education`}>Education</Nav.Link>
                    <Nav.Link href={`${prefix}skills`}>Skills</Nav.Link>
                    <Nav.Link href={`${prefix}contact`}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
const HeaderWithRouter = withRouter(Header)

function App() {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <HeaderWithRouter />
            <div className={'container-fluid'}>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path={'/about'}>
                        <About />
                    </Route>
                    <Route path='/education'>
                        <Education />
                    </Route>
                    <Route path='/skills'>
                        <Skills />
                    </Route>
                    <Route path='/contact'>
                        <Contact />
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    )
}
export default App

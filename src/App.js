import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Home from './contents/Home'
import About from './contents/About'
import Education from './contents/Education'
import Skills from './contents/Skills'
import Contact from './contents/Contact'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css'

const Header = (props) => {
    const {
        location: { pathname },
    } = props
    return (
        <Navbar bg='light' variant='light' expand='lg'>
            <Navbar.Brand href='#'>Adam Foskit</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav activeKey={pathname} className='mr-auto'>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#about'>About</Nav.Link>
                    <Nav.Link href='#education'>Education</Nav.Link>
                    <Nav.Link href='#skills'>Skills</Nav.Link>
                    <Nav.Link href='#contact'>Contact</Nav.Link>
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
                    <Route path='/home'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    )
}
export default App

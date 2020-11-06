import React from 'react'
import './App.css'
import Header from './components/Navbar'
import Particles from './components/Particles'
import About from './contents/About'
import Footer from './contents/Footer' 
import Home from './contents/Home'
import Skills from './contents/Skills'
import { Element } from 'react-scroll';
function App() {
    return (
        <>
        <Particles />
        <div>
            <Header />
            <Element name="home"><Home /></Element>
            <Element name="about"><About /></Element>
            <Element name="skills"><Skills /></Element>
        </div>
        {window.innerWidth > 600 ?<Footer />:null}
        </>
    )
}
export default App

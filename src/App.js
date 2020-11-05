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
        <div>
            <Particles />
            <Header />
            <Element name="home"><Home /></Element>
            <Element name="about"><About /></Element>
            <Element name="skills"><Skills /></Element>
            <Footer />
        </div>
    )
}
export default App
import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'
const Navbar = () => {
  return (

        <nav className="my-navbar">
            <Link color={'#e7e7e7'} activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={350}>Home</Link>
            <Link color={'#e7e7e7'} activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={350}>About</Link>
            <Link color={'#e7e7e7'} activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={350}>Skills</Link>
        </nav>
  );
};

export default Navbar;
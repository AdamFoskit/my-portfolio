import React, { useEffect } from 'react';
import { Link, Events } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css'

 function toggleMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


const Navbar = () => {
  useEffect(() => {
    Events.scrollEvent.register('begin', function(to, element) {
        console.log('begin', arguments);
      });
  
      Events.scrollEvent.register('end', function(to, element) {
        toggleMenu()
      });
      return () => {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }
  }, []) 

  return (
        <nav class="topnav" id="myTopnav">
          <GiHamburgerMenu color={'#e7e7e7'} size={35} onClick={toggleMenu} />
            <Link size={35} color={'#e7e7e7'} activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={350}>Home</Link>
            <Link size={35} color={'#e7e7e7'} activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={350}>About</Link>
            <Link size={35} color={'#e7e7e7'} activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={350}>Skills</Link>
            
        </nav>
  );
};

export default Navbar;
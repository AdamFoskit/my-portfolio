import React, { useState, useEffect } from 'react'
import Navitem from './NavItem'

function Navbar() {
    const [NavItemActive, setNavItemActive] = useState('')
    useEffect(() => {}, [NavItemActive])
    const activeitem = (x) => {
        if (NavItemActive.length > 0) {
            document.getElementById(NavItemActive).classList.remove('active')
        }
        setNavItemActive(x)
        document.getElementById(x).classList.add('active')
    }
    return (
        <nav>
            <ul>
                <Navitem item='Home' tolink='/' activec={activeitem}></Navitem>
                <Navitem
                    item='About'
                    tolink='/about'
                    activec={activeitem}
                ></Navitem>
                <Navitem
                    item='Education'
                    tolink='/education'
                    activec={activeitem}
                ></Navitem>
                <Navitem
                    item='Skills'
                    tolink='/skills'
                    activec={activeitem}
                ></Navitem>
                <Navitem
                    item='Contact'
                    tolink='/contact'
                    activec={activeitem}
                ></Navitem>
            </ul>
        </nav>
    )
}
export default Navbar

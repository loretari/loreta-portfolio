import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contactImg.png'
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className= "navbar">
            <img src= {logo} alt= "logo" className= "logo"/>
            <div className= "desktopMenu">
                <Link
                    activeClass= 'active'
                    to= 'intro'
                    spy={true} s
                    mooth={true}
                    offset={-100}
                    duration={500}
                    className= "desktopMenuListItem" >Home</Link>
                <Link className= "desktopMenuListItem" >About</Link>
                <Link className= "desktopMenuListItem" >Projects</Link>
                <Link className= "desktopMenuListItem" >Clients</Link>
            </div>
            <button className= "desktopMenuBtn">
                <img src= { contactImg } alt= "" className= "desktopMenuImg"/>
                Contact Me
            </button>
        </nav>
    )
}

export default Navbar;
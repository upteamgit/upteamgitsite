import React from 'react';
import {Link} from 'react-router-dom';
import { RiMenu3Line, RiCloseLin} from 'react-icons/ri';
import './styles/navbar.css';
import logo from '../media/logo.svg';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbarLinks">
                <div className="navbarLinksLogo">
                    <img src={logo} alt="upteamgitsite"/>
                </div>   
                <div  className="navbarLinksContainer">
                    <nav>
                        <ul className="navbarText">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/location'>Location</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                    </nav>
            </div>
            </div>
        </div>

    );
};

export default Navbar;
import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

import logo from '../img/logos/logo.png';

var Navbar =(props)=> {
    return (
        <div className = "navbar">
            <Link className='link' to='/'>
                <img className='navbar-logo' src={logo} />
            </Link>
        </div>
    );
}

export default Navbar;
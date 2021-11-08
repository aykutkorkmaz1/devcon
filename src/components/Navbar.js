import React from 'react'
import './Navbar.css';

var Navbar =(props)=> {
    return (
        <div className = "navbar">
            <p> {props.text} </p>
        </div>
    );
}

export default Navbar;
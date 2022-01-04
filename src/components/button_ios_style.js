import React from 'react';
import './button-ios-style.css';

var ButtonIosStyle =(props)=> {
    return (
        <div className = "button-ios-style">
            <p> {props.text} </p>
        </div>
    );
}

export default ButtonIosStyle;
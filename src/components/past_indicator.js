import React from 'react';
import './past_indicator.css';

var PastIndicator =(props)=> {
    return (
        <div className = "past-indicator">
            <p> {props.text} </p>
        </div>
    );
}

export default PastIndicator;
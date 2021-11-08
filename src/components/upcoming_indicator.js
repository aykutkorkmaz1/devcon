import React from 'react';
import './upcoming_indicator.css';

var UpcomingIndicator =(props)=> {
    return (
        <div className = "upcoming-indicator">
            <p> {props.text} </p>
        </div>
    );
}

export default UpcomingIndicator;
import React from 'react';
import './event.css';

import applelogo from '../img/logos/apple-000.png'

var Event = () => {
    return (
        <div className = "event-wrapper">
            <div className = "event-info">
                <div>
                   <img className = "E-logo" src = {applelogo} /> 
                </div>
                <div>
                   <p className = "E-event-name">Apple Event</p>
                   <p className = "E-event-date">October 18, 2021</p> 
                </div>
                <div>
                    <p className = "desc">Introducing the new MacBook Pro with M1 Pro or M1 Max chip, all-new AirPods, and HomePod mini in five bold colors.</p>
                </div>
                
            </div>
            <div className = "video-embed">

                <iframe className = "video" 
                        src = 'https://www.youtube-nocookie.com/embed/exM1uajp--A'
                        width = '1280'
                        height = '720'
                        frameBorder = '0'
                        allow = 'encrypted-media'
                        allowFullScreen
                        title = 'Event'
                />

            </div>
        </div>
    );
}

export default Event;
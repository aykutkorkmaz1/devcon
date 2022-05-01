import React from 'react';
import Navbar from '../components/Navbar';
import './EventPage.css';

import applelogo from '../img/logos/apple-000.png';

import { Link } from 'react-router-dom';

export default function EventPage () {
    return (
        <div className='wrapper-event'>
            <Navbar />
                <div className='video-embed'>
                        <iframe src='https://www.youtube.com/embed/exM1uajp--A'
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                        />
                </div>
                <div className = 'info-event'>
                    <img className = "event-logo" src={applelogo} />
                    <p className='event-name'>Unleashed</p>
                        <div className='date-bywho'>
                            <p>Apple Event</p>
                            <p>October 18, 2021</p>
                        </div>
                    <hr />
                    <p className='eventpage-desc'>Introducing the new MacBook Pro with M1 Pro or M1 Max, all-new AirPods, and HomePod mini in five bold colors.</p>
                </div>
        </div>
    );
}
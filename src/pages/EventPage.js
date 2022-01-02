import React from 'react';
import Navbar from '../components/Navbar';
import './EventPage.css';

import applelogo from '../img/logos/apple-000.png';

import { Link } from 'react-router-dom';

export default function EventPage () {
    return (
        <div className='wrapper-event'>
            <Navbar text = "Software Conferences and Events" />

            <Link className="link" to="/">
                <div className="back-main">
                    <p>Back To Main Page</p>
                </div>
            </Link>

            <div className = 'info-event'>
                <img className = "event-logo" src={applelogo} />
                <p className='event-name'>Unleashed</p>
                    <div className='date-bywho'>
                        <p className='event-bywho'>Apple Event</p>
                        <p className='event-date'>October 18, 2021</p>
                    </div>
                <div className='video-embed'>
                        <iframe src='https://www.youtube.com/embed/exM1uajp--A'
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                            width='1000px'
                            height='600px'
                        />
                </div>
            </div>


        </div>
    );
}
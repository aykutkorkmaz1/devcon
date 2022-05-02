import React from 'react';
import './UpcomingEventsItem.css';

import { Link } from 'react-router-dom';
import ButtonIosStyle from './button_ios_style';

import applelogo from '../img/logos/apple.png'
import appleevent_bg from '../img/banners/18-october-apple.png'
import awslogo from '../img/logos/aws.png'
import aws_bg from '../img/banners/aws-2021.png'

var UpcomingEventsItem =()=> {
    return (
        <div className = "wrapper">

            <div className = "header">
                <p>All Upcoming Events</p>
            </div>

            <div className = "sub-header">
                    <p>If your event is live, you can find and watch it among the events listed below.
                    If you can't find the event you're looking for, it's most likely copyrighted.
                    </p>
                </div>

            <div className='wrapper-upcoming'>
                <div className = "UEI-event-big-wrapper">
                    <img className = "UEI-background" src={appleevent_bg} />
                        <div className = "UEI-upcoming-info">
                            <img className = "UEI-logo" src={applelogo} />
                            <p className = "UEI-slogan"> Unleashed. </p>
                            <p className = "UEI-event-name"> Apple Event </p>
                            <p className = "UEI-event-date"> October 18, 2021 </p>
                        </div>
                    <Link className="link" to="/event-page"> <ButtonIosStyle text = "Watch Live" /> </Link>
                </div>

                <div className = "UEI-event-big-wrapper">
                    <img className = "UEI-background" src={aws_bg} />
                        <div className = "UEI-upcoming-info">
                            <img className = "UEI-logo" src={awslogo} />
                            <p className = "UEI-slogan"> re:Invent </p>
                            <p className = "UEI-event-name"> Celebrating 10 years of re:Invent </p>
                            <p className = "UEI-event-date"> November 29 - December 3, 2021 </p>
                        </div>
                    <Link className="link" to="/event-page"> <ButtonIosStyle text = "Watch Live" /> </Link>
                </div>
            </div>

        </div>
    );
} 

export default UpcomingEventsItem;
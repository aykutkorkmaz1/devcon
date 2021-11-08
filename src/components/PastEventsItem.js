import React from 'react';
import './PastEventsItem.css';

import ButtonIosStyle from './button_ios_style';
import PastIndicator from './past_indicator';

import applelogo from '../img/logos/apple.png'
import appleevent_bg from '../img/banners/18-october-apple.png'
import awslogo from '../img/logos/aws.png'
import aws_bg from '../img/banners/aws-2021.png'
import apple_november_10_2020 from '../img/banners/10-november-2020-apple.jpg'
import apple_october_13_2020 from '../img/banners/13-october-2020-apple.jpg'
import apple_september_14_2021 from '../img/banners/14-september-2021-apple.jpg'
import google_io_2021 from '../img/banners/google-io-2021.png'
import glogo from '../img/logos/google.png'
import g_bg from '../img/banners/google-io-2021.png'

var PastEvents =()=> {
    return (
        <div className = "wrapper">

                <div className = "header">
                    <p>All Upcoming Events</p>
                </div>

            <div className = "wrapper-past">

                <div className = "PE-event-big-wrapper">
                    <PastIndicator text = "PAST" />
                    <img className = "PE-background" src={apple_september_14_2021} />
                    <div className = "PE-upcoming-info">
                        <img className = "PE-logo" src={applelogo} />
                        <p className = "PE-event-name"> Apple Event </p>
                        <p className = "PE-event-date"> September 14, 2021 </p>
                    </div>
                    <ButtonIosStyle text = "Watch" />
                </div>

                <div className = "PE-event-big-wrapper">
                    <PastIndicator text = "PAST" />
                    <img className = "PE-background" src={apple_november_10_2020} />
                    <div className = "PE-upcoming-info">
                        <img className = "PE-logo" src={applelogo} />
                        <p className = "PE-event-name"> Apple Event </p>
                        <p className = "PE-event-date"> November 10, 2020 </p>
                    </div>
                    <ButtonIosStyle text = "Watch" />
                </div>

                <div className = "PE-event-big-wrapper">
                    <PastIndicator text = "PAST" />
                    <img className = "PE-background" src={apple_october_13_2020} />
                    <div className = "PE-upcoming-info">
                        <img className = "PE-logo" src={applelogo} />
                        <p className = "PE-event-name"> Apple Event </p>
                        <p className = "PE-event-date"> September 13, 2020 </p>
                    </div>
                    <ButtonIosStyle text = "Watch" />
                </div>

                <div className = "PE-event-big-wrapper">
                    <PastIndicator text = "PAST" />
                    <img className = "PE-background" src={google_io_2021} />
                    <div className = "PE-upcoming-info">
                        <img className = "PE-logo" src={glogo} />
                        <p className = "PE-event-name"> Google I/O </p>
                        <p className = "PE-event-date"> May 18 - May 20, 2021 </p>
                    </div>
                    <ButtonIosStyle text = "Watch" />
                </div>

            </div>

        </div>
    );
} 

export default PastEvents;
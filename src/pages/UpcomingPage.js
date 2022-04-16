import React from 'react';
import './HomePage.css';
import Navbar from '../components/Navbar';
import UpcomingEventsItem from '../components/UpcomingEventsItem';
import { Link } from 'react-router-dom';

function UpcomingPage () {
    return (
        <div>

            <Navbar />
            <UpcomingEventsItem />

        </div>
    );
}

export default UpcomingPage;
import React from 'react';
import Navbar from '../components/Navbar';
import UpcomingEventsItem from '../components/UpcomingEventsItem';

function UpcomingPage () {
    return (
        <div className="mainPageAll">

            <Navbar />
            <UpcomingEventsItem />

        </div>
    );
}

export default UpcomingPage;
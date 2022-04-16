import React from 'react';
import './PastPage.css';
import Navbar from '../components/Navbar';
import PastEventsItem from '../components/PastEventsItem';
import { Link } from 'react-router-dom';

function PastPage () {
    return (
        <div>

            <Navbar />
            <PastEventsItem />

        </div>
    );
}

export default PastPage;
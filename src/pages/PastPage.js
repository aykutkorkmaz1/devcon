import React from 'react';
import './PastPage.css';
import Navbar from '../components/Navbar';
import PastEventsItem from '../components/PastEventsItem';
import { Link } from 'react-router-dom';

function PastPage () {
    return (
        <div>

            <Navbar text="Software Conferences and Events" />
            <Link className="link" to="/">
                <div className="back-main">
                    <p>Back To Main Page</p>
                </div>
            </Link>
            <PastEventsItem />

        </div>
    );
}

export default PastPage;
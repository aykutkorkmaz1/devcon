import React from "react";
import './Footer.css';
import millsaps from '../img/logos/millsaps.png';

export default function Footer () {
    return (
        <div className="footer-wrapper">

            <p className="footer-p">Collaboration with</p>
            <img src={millsaps} />

        </div>
    );
}
import React from 'react';
import logo from '../img/logos/logo.png';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

import google from '../img/logos/google.svg';
import apple from '../img/logos/apple.svg';
import aws from '../img/logos/amazonaws.svg';
import wwdc from '../img/logos/wwdc-logo-black.svg';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
                <div className="App">

                        <img className='main-welcome-logo' src={logo} />
  
                        <p className='main-header'>
                          Welcome to DevCon!
                        </p>

                        <p className='main-subs'>
                          Now with DevCon, you can track upcoming developer events and
                          conferences from one platform, or watch a replay of the event you missed. <br />
                          Completely free, no extra fees.
                        </p>

                        <div className='main-buttons'>
                          <Link className='link' to='/upcoming-events'>
                            <div className='main-event-chooser'>
                              <p>Upcoming Events</p>
                            </div>
                          </Link>
                          <Link className='link' to='/past-events'>
                            <div className='main-event-chooser'>
                              <p>Past Events</p>
                            </div>
                          </Link>
                        </div>

                        <div className='only-now'>
                          <img className='main-apple' src={apple} />
                          <img className='main-wwdc' src={wwdc} />
                          <img className='main-google' src={google} />
                          <img className='main-aws' src={aws} />
                        </div>

                      <Footer />
                </div>
    );
  }
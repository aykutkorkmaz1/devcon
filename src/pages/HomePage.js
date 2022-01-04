import React from 'react';
import Navbar from '../components/Navbar';
import Faq from '../components/Faq';

import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
                <div className="App">
                      <Navbar text = "Software Conferences and Events" />
                      <div className = "mainPageAll">
  
                        <div className = "welcome">
                          <p>Welcome to the SCnE!</p>
                        </div>
  
                        <div className = "event-selectors">
                            <Link className="link" to="/upcoming-events">
                            <div className = "event-select">
                              <h3>Upcoming Events</h3>
                              <p>See the all latest upcoming events. Don't miss live streams!</p>
                            </div>
                            </Link>
  
                            <Link className="link" to="/past-events">
                            <div className = "event-select">
                                <h3>Past Events</h3>
                                <p>See the all past events. Watch the stream records!</p>
                            </div>
                            </Link>
                        </div>
  
                        <Faq />
  
                        <div className = "footer">
                          <p>MIT License. Aykut Korkmaz, 2022.</p>
                        </div>
                      </div>
                </div>
    );
  }
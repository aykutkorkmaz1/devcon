/* MAIN IMPORTS */
import './App.css';

import Navbar from './components/Navbar';
import Faq from './components/Faq';

import UpcomingPage from './pages/UpcomingPage';


export default function App() {
  return (
        <div className="App">
          <Navbar text = "Software Conferences and Events" />
          <div className = "mainPageAll">

            <div className = "welcome">
              <p>Welcome to the SCnE!</p>
            </div>

            <div className = "event-selectors">
              <div className = "event-select">
                <h3>Upcoming Events</h3>
                <p>See the all latest upcoming events. Don't miss live streams!</p>
              </div>

              <div className = "event-select">
                <h3>Past Events</h3>
                <p>See the all past events. Watch the stream records!</p>
              </div>
            </div>

            <Faq />

            <div className = "footer">
              <p>All rights reserved. Aykut Korkmaz, 2021.</p>
            </div>
          </div>
        </div>
  );
}
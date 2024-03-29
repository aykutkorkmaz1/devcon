import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from "./App";
import UpcomingPage from './pages/UpcomingPage';
import PastPage from './pages/PastPage';
import EventPage from './pages/EventPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/upcoming-events" element={<UpcomingPage />} />
      <Route path="/past-events" element={<PastPage />} />
      <Route path="/event-page" element={<EventPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

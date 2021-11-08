import React from 'react';
import './Faq.css';

var Faq = () => {
    return (
        <div className = "faq-wrapper">
            <h2 className = "faq-header">FAQ</h2>
            <div className = "faq-item">
                <h3>What is SCnE?</h3>
                <p>The SCnE is abbreviation of Software Conferences and Events. It's fully free app.</p>
            </div>
            <div className = "faq-item">
                <h3>What is it for?</h3>
                <p>SCnE offers the opportunity to watch many events live, such as software development, introduction of new technologies, introduction of new devices.</p>
            </div>
            <div className = "faq-item">
                <h3>Are past events will be watchable?</h3>
                <p>If the event has been published on such YouTube, Vimeo video watching platforms, viewers are able to watch. But the exact opposite, the event hasn't been published on these platforms, viewers can't able to watch past events.</p>
            </div>
            <div className = "faq-item">
                <h3>An event isn't listed on here, why?</h3>
                <p>Most likely the event host is posting it on their own web address, in which case posting the event could be copyright grounds. Therefore, this activity may not be listed in the app.</p>
            </div>
        </div>

    );
}

export default Faq;
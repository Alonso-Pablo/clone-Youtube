import React from 'react';

import '../assets/styles/components/MiniGuide.scss'


const MiniGuide = ({homeIcon, exploreIcon, subscriptionsIcon, libraryIcon, historyIcon}) => (
    <div className="miniguide">
        <div className="miniguide__a">
            <a href="#">
                <img className="home-icon" src={homeIcon} alt="Home icon" />
                <span className="text_red">Home</span>
            </a>
        </div>

        <div className="miniguide__a">
            <a href="#">
                <img src={exploreIcon} alt="Explore icon" />
                <span>Explore</span>
            </a>

        </div>

        <div className="miniguide__a">
            <a href="#">
                <img  className="subscriptions-icon" src={subscriptionsIcon} alt="Subscriptions icon" />
                <span>Subscriptions</span>
            </a>
        </div>
        
        <div className="miniguide__a">
            <a href="#">
                <img className="library-icon" src={libraryIcon} alt="Library icon" />
                <span>Library</span> 
            </a>
        </div>

        <div className="miniguide__a">
            <a href="#">
                <img className="history-icon" src={historyIcon} alt="History icon" />
                <span>History</span>
            </a> 
        </div>
    </div>
);

export default MiniGuide;
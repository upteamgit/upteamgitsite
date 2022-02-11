import React from 'react';
import './styles/about.css';
import about from '../media/about.png';
import { Card } from '../components';

const About = (props) => {
    return (
        <div className="aboutContainer">
            <div>
                <img className="aboutImage" src={about} alt="aiabout" />
            </div>
            <div className="aboutCard">
                <Card data="Data to display" />
            </div>
        </div>
    );
}

export default About;
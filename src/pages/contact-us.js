import React from 'react';
import './styles/contact.css';
import contact from '../media/location.png';
import { Card } from '../components';

const Contactus = () => {
    return (
        <div className="homeContainer">
            <div>
                <img className="contactImage" src={contact} alt="contact" />
            </div>
            <div className="homeCard">
                <Card data="Data to display" />
            </div>
        </div>
    );
};

export default Contactus;
import React from 'react';
import './styles/home.css';
import ai from '../media/ai.png';
import { Card } from '../components';

const Home = () => {
    return (
        <div className="homeContainer">
            <div>
                <img className="homeImage" src={ai} alt="aihome" />
            </div>
            <div className="homeCard">
                <Card data="Data to display" />
            </div>
        </div>
    );
};

export default Home;
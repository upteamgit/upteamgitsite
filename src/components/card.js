import React from 'react';
import './styles/card.css';

const Card = (props) => {
    const {
        data
    } = props;
    return (
        <div className="cardContainer">
            <div className="card">
                {data}
            </div>
        </div>
    );
};

export default Card;
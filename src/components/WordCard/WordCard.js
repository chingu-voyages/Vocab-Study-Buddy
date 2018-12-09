import React from 'react';
import "./WordCard.css";

const WordCard = props => (
    <div className="card">
        <div className="card-container">
            <h3>{props.word}</h3>
        </div>    
    </div>  
);

export default WordCard;





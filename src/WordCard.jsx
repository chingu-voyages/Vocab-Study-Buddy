import React from 'react';

const WordCard = ({ data }) => {
    return(
      <div className="card">  
        {data.word}    
      </div>  
    )   
};

export default WordCard;
import React from 'react';

const WordCard = ({ data, handleClick }) => {
    return(
      <div className="card" value={data} onClick={(e) => handleClick(e, data)}>  
        {data.word}    
      </div>  
    )   
};

export default WordCard;
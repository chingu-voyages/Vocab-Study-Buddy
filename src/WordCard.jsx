import React from 'react';

const WordCard = ({ data, handleClick }) => {
  return(
    <div className="card" value={data} onClick={() => handleClick(data)}>  
      {data.word}    
    </div>  
  )   
};

export default WordCard;
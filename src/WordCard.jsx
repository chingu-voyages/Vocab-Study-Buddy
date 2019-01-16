import React from 'react';

const WordCard = ({ className, data, handleClick }) => {
  return(
    <div className={className} value={data} onClick={(e) => handleClick(e, data)}>  
      {data.word}    
    </div>  
  )   
};

export default WordCard;
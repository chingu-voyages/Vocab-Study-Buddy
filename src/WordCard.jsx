import React from 'react';

const WordCard = ({ className, data, handleClick }) => {
  return(
    <div className={className} value={data} onClick={() => handleClick(data)}>  
      {data.word}    
    </div>  
  )   
};

export default WordCard;
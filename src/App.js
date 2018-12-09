import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import WordCard from './components/WordCard';
import cards from './cards.json'


class App extends Component {
  state = {
    message: "Click an image to begin!",
    cards: cards,
   }
  
  render() {
    return (
      <div className="App">
        <Wrapper>                
                {
                    this.state.cards.map(card => (
                        <WordCard
                            word={card.word}
                            selectCard={this.selectCard} 
                          />
                    ))
                }
        </Wrapper>

      </div>
    );
  }
}

export default App;

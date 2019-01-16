import React, { Component } from 'react';
import "./VocabGamePlay.scss";
import WordCard from './WordCard';
import { CardState } from './VocabGameData';

class VocabGamePlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSelection: null,
      secondSelection: null,
      shuffledDataSet: null,
    }
  }

  componentWillMount() {
    this.setState({ shuffledDataSet: this.shuffleGameCards(this.props.dataset) })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.dataset !== this.props.dataset) {
      this.setState({ shuffledDataSet: this.shuffleGameCards(this.props.dataset) })
    }
  }
  
  handleClick = (e, data) => {
    e.preventDefault();

    let { firstSelection, secondSelection } = this.state;

    if (data.state === CardState.CORRECT) { return ; } // ignores correct cards

    if (firstSelection === null) {
      data.state = CardState.SELECTED;
      this.setState({ firstSelection: data });

    } else if (secondSelection === null) {

      if (data === firstSelection) {
        data.state = CardState.UNSELECTED;
        this.setState({ firstSelection: null });
        return;
      }
      this.checkMatch(this.state.firstSelection, data);
      this.setState({ secondSelection: data });
    }
  }
  
  checkMatch = (first, second) => {
    let isMatch = first.word === second.translation;
    first.state = isMatch ? CardState.CORRECT : CardState.INCORRECT;
    second.state = isMatch ? CardState.CORRECT : CardState.INCORRECT;

    setTimeout(() => {
      if (!isMatch) {
        first.state = CardState.UNSELECTED;
        second.state = CardState.UNSELECTED;
      }
      this.setState({
        firstSelection: null,
        secondSelection: null,
      })
    }, 2000);
  }

  resetGame = (mappedObject) => {
    for (var value of mappedObject.values()) {
      value.state = CardState.UNSELECTED;
    }
    this.setState({ shuffledDataSet: this.shuffleGameCards(mappedObject) })
  }

  shuffleGameCards = (mappedObject) => {
    if (!mappedObject) { return }
    let array = Array.from(mappedObject);
    let currentIdx = array.length;
    let temporaryValue, randomIdx;
    while (0 !== currentIdx) {
      randomIdx = Math.floor(Math.random() * currentIdx);
      currentIdx -= 1;

      temporaryValue = array[currentIdx];
      array[currentIdx] = array[randomIdx];
      array[randomIdx] = temporaryValue;
    }
    return new Map(array);
  }

  renderGameCards = (mappedObject) => {
    let renderedItems = [];
    function determineColor(state) {
      switch (state) {
        case CardState.CORRECT:
          return 'card-correct';
        case CardState.INCORRECT:
          return 'card-incorrect';
        case CardState.SELECTED:
          return 'card-select';
        default:
          return 'card';
      }
    }
    for (var value of mappedObject.values()) {
      let color = determineColor.call(this, value.state);
      renderedItems.push(
        <WordCard 
          className={`card ${color}`}
          key={value.word} 
          data={value} 
          handleClick={this.handleClick} 
        />
      );
    }
    return renderedItems;
  }

  render() {
    let { shuffledDataSet } = this.state;
    return (
      <div className="vocabGamePlay--container">
        <div id="card-grid-container">
          {shuffledDataSet && this.renderGameCards(shuffledDataSet)}
          <div id="reset" onClick={() => this.resetGame(shuffledDataSet)}>↺</div>
        </div>
      </div>
    )
  }
}

export default VocabGamePlay;
